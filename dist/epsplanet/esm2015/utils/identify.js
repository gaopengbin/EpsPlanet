import { Injectable } from '@angular/core';
import turf from 'turf';
import * as i0 from "@angular/core";
import * as i1 from "epsgis";
let propertyLists = [];
let czmObjectList = [];
let resList = [];
let highLight = null;
export class Identify {
    constructor(http) {
        this.http = http;
        this.earth = window['earth'];
        this.earth.interaction.picking.enabled = false;
        this.earth.interaction.picking.hoverEnable = false;
        this.earth.epsplanet = {};
        this.earth.epsplanet.allowClick = false;
    }
    httpReq(method, url) {
        if (method == 'post') {
            return this.http.httpClient.post(url, "").toPromise();
        }
        if (method == 'get') {
            return this.http.httpClient.get(url).toPromise();
        }
    }
    GetFeatureInfo(czmObject, earth, type, callback) {
        if (highLight == null) {
            highLight = new Cesium.CustomDataSource('highLight');
            earth.czm.viewer.dataSources.add(highLight);
        }
        let scene = earth.czm.scene;
        let viewer = earth.czm.viewer;
        let WFSUrl = this.GetWFSUrl(czmObject.xbsjImageryProvider);
        let handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
        let filter = "";
        handler.setInputAction((click) => {
            if (!earth.epsplanet.allowClick)
                return;
            if (!czmObject.show)
                return;
            let pickObj = earth.czm.viewer.scene.pick(click.position);
            if (Cesium.defined(pickObj)) {
                return;
            }
            earth.sceneTree.$refs.pin1.czmObject.customProp = false;
            highLight.entities.removeAll();
            resList = [];
            earth.sceneTree.$refs.pin1.czmObject.position = this.Cartesian2ToCartographic(viewer, click.position);
            let position = this.Cartesian2ToWGS84(viewer, click.position);
            let bufferCoordinates = this.Buffer([position.lon, position.lat], 100);
            if (type == 'point') {
                filter = `<Filter xmlns="http://www.opengis.net/ogc" xmlns:gml="http://www.opengis.net/gml"><Intersects><PropertyName>the_geom</PropertyName><gml:outerBoundaryIs><gml:LinearRing><gml:coordinates>${bufferCoordinates}</gml:coordinates></gml:LinearRing></gml:outerBoundaryIs></Intersects></Filter>`;
            }
            else if (type = 'line') {
            }
            else if (type = 'polygon') {
            }
            this.httpReq('post', WFSUrl + filter).then((res) => {
                if (res.features.length > 0) {
                    let properties = res.features[0].properties;
                    let propertyList = [];
                    Object.keys(properties).map(key => propertyList.push({
                        name: key,
                        value: properties[key]
                    }));
                    propertyLists.push(propertyList);
                    czmObjectList.push(czmObject);
                    resList.push(res);
                    setTimeout(() => {
                        if (resList.length > 1) {
                            if (czmObjectList[0]._ci > czmObjectList[1]._ci) {
                                if (czmObjectList[0]._ci !== czmObject._ci)
                                    return;
                                if (typeof callback === 'function') {
                                    callback(propertyLists[0]);
                                    Cesium.GeoJsonDataSource.load(resList[0])
                                        .then(dataSource => {
                                        dataSource.entities.values.forEach(entity => {
                                            highLight.entities.add(entity);
                                        });
                                    });
                                }
                            }
                            else {
                                if (czmObjectList[1]._ci !== czmObject._ci)
                                    return;
                                if (typeof callback === 'function') {
                                    callback(propertyLists[1]);
                                    Cesium.GeoJsonDataSource.load(resList[1])
                                        .then(dataSource => {
                                        dataSource.entities.values.forEach(entity => {
                                            highLight.entities.add(entity);
                                        });
                                    });
                                }
                            }
                            return;
                        }
                        else {
                            if (typeof callback === 'function') {
                                callback(propertyList);
                                Cesium.GeoJsonDataSource.load(res)
                                    .then(dataSource => {
                                    dataSource.entities.values.forEach(entity => {
                                        highLight.entities.add(entity);
                                    });
                                });
                            }
                        }
                    }, 100);
                    setTimeout(() => {
                        resList = [];
                        propertyLists = [];
                        czmObjectList = [];
                    }, 1000);
                }
            }).catch(err => { });
        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
    }
    InitHandler() {
    }
    getLayers(czmObject, earth, callback) {
        if (highLight == null) {
            highLight = new Cesium.CustomDataSource('highLight');
            earth.czm.viewer.dataSources.add(highLight);
        }
        let handler = new Cesium.ScreenSpaceEventHandler(earth.czm.scene.canvas);
        let url = czmObject.xbsjImageryProvider.WebMapTileServiceImageryProvider.url || czmObject.xbsjImageryProvider.WebMapServiceImageryProvider.url;
        let requestUrl = "";
        if (czmObject.xbsjImageryProvider.type == "WebMapTileServiceImageryProvider") {
            requestUrl = url.split('MapServer')[0] + "MapServer/layers?f=pjson";
        }
        else if (czmObject.xbsjImageryProvider.type == "WebMapServiceImageryProvider") {
            requestUrl = url.split('arcgis')[0] + 'arcgis/rest' + url.split('arcgis')[1].split('MapServer')[0] + "MapServer/layers?f=pjson";
        }
        this.httpReq('get', requestUrl).then((res) => {
            handler.setInputAction((click) => {
                if (res.layers == undefined)
                    return;
                if (!earth.epsplanet.allowClick)
                    return;
                if (!czmObject.show)
                    return;
                let pickObj = earth.czm.viewer.scene.pick(click.position);
                if (Cesium.defined(pickObj)) {
                    return;
                }
                if (highLight)
                    highLight.entities.removeAll();
                earth.sceneTree.$refs.pin1.czmObject.customProp = false;
                earth.sceneTree.$refs.pin1.czmObject.position = this.Cartesian2ToCartographic(earth.czm.viewer, click.position);
                let position = this.Cartesian2ToWGS84(earth.czm.viewer, click.position);
                let bufferCoordinates = this.Buffer([position.lon, position.lat], 1);
                let addr = this.GetWFSUrl(czmObject.xbsjImageryProvider);
                let typeName = url.split('/MapServer')[0].split('services/')[1];
                let resList = [];
                let geometryList = [];
                if (czmObject.xbsjImageryProvider.type == "WebMapTileServiceImageryProvider") {
                    for (let i = 0; i < res.layers.length; i++) {
                        const item = res.layers[i];
                        let query = `${addr}`
                            + `typename=${typeName}:${item.name}&Filter=`
                            + `<ogc:Filter><ogc:Intersects><ogc:PropertyName>Shape</ogc:PropertyName>`
                            + `<gml:Polygon srsName="urn:x-ogc:def:crs:EPSG:4326"><gml:outerBoundaryIs><gml:LinearRing>`
                            + `<gml:coordinates>${bufferCoordinates}</gml:coordinates>`
                            + `</gml:LinearRing></gml:outerBoundaryIs></gml:Polygon></ogc:Intersects></ogc:Filter>`;
                        this.httpReq('get', query).then().catch((err) => {
                            let res = err.error.text;
                            if (this.xml2Json(this.stringToXml(res))['FeatureCollection']['featureMember']) {
                                let properties = this.xml2Json(this.stringToXml(res))['FeatureCollection']['featureMember'][item.name];
                                let propertyList = [];
                                let geojson = {};
                                if (properties == undefined || properties == null)
                                    return;
                                Object.keys(properties).map(key => {
                                    if (key !== "Shape") {
                                        propertyList.push({
                                            name: key,
                                            value: properties[key].value
                                        });
                                    }
                                    else {
                                        if (properties[key].MultiSurface) {
                                            let posList = properties[key].MultiSurface.surfaceMember.Polygon.exterior.LinearRing.posList.value.split(" ");
                                            posList.shift();
                                            let list = [];
                                            for (let i = 0; i < posList.length; i += 2) {
                                                list.push([posList[i], posList[i + 1]]);
                                            }
                                            geojson = {
                                                type: "Feature",
                                                geometry: {
                                                    type: "LineString",
                                                    coordinates: list
                                                }
                                            };
                                        }
                                        else if (properties[key].Point) {
                                            let posList = properties[key].Point.pos.value.split(" ");
                                            geojson =
                                                {
                                                    type: "Feature",
                                                    geometry: {
                                                        type: "Point",
                                                        coordinates: posList
                                                    }
                                                };
                                        }
                                        else if (properties[key].MultiCurve) {
                                            let posList = properties[key].MultiCurve.curveMember.LineString.posList.value.split(" ");
                                            let list = [];
                                            for (let i = 0; i < posList.length; i += 2) {
                                                list.push([posList[i], posList[i + 1]]);
                                            }
                                            geojson =
                                                {
                                                    type: "Feature",
                                                    geometry: {
                                                        type: "LineString",
                                                        coordinates: list
                                                    }
                                                };
                                        }
                                    }
                                });
                                resList.push(propertyList);
                                geometryList.push(geojson);
                            }
                        });
                    }
                }
                else if (czmObject.xbsjImageryProvider.type == "WebMapServiceImageryProvider") {
                    let llist = czmObject.xbsjImageryProvider.WebMapServiceImageryProvider.layers.split(",");
                    for (let i = 0; i < llist.length; i++) {
                        const item = res.layers[res.layers.length - 1 - llist[i]];
                        let query = `${addr}`
                            + `typename=${typeName}:${item.name}&Filter=`
                            + `<ogc:Filter><ogc:Intersects><ogc:PropertyName>Shape</ogc:PropertyName>`
                            + `<gml:Polygon srsName="urn:x-ogc:def:crs:EPSG:4326"><gml:outerBoundaryIs><gml:LinearRing>`
                            + `<gml:coordinates>${bufferCoordinates}</gml:coordinates>`
                            + `</gml:LinearRing></gml:outerBoundaryIs></gml:Polygon></ogc:Intersects></ogc:Filter>`;
                        this.httpReq('get', query).then().catch((err) => {
                            let res = err.error.text;
                            if (this.xml2Json(this.stringToXml(res))['FeatureCollection'] == undefined)
                                return;
                            if (this.xml2Json(this.stringToXml(res))['FeatureCollection']['featureMember']) {
                                let properties = this.xml2Json(this.stringToXml(res))['FeatureCollection']['featureMember'][item.name];
                                let propertyList = [];
                                let geojson = {};
                                if (properties == undefined || properties == null)
                                    return;
                                Object.keys(properties).map(key => {
                                    if (key !== "Shape") {
                                        propertyList.push({
                                            name: key,
                                            value: properties[key].value
                                        });
                                    }
                                    else {
                                        if (properties[key].MultiSurface) {
                                            let posList = properties[key].MultiSurface.surfaceMember.Polygon.exterior.LinearRing.posList.value.split(" ");
                                            posList.shift();
                                            let list = [];
                                            for (let i = 0; i < posList.length; i += 2) {
                                                list.push([posList[i], posList[i + 1]]);
                                            }
                                            geojson = {
                                                type: "Feature",
                                                geometry: {
                                                    type: "LineString",
                                                    coordinates: list
                                                }
                                            };
                                        }
                                        else if (properties[key].Point) {
                                            let posList = properties[key].Point.pos.value.split(" ");
                                            geojson =
                                                {
                                                    type: "Feature",
                                                    geometry: {
                                                        type: "Point",
                                                        coordinates: posList
                                                    }
                                                };
                                        }
                                        else if (properties[key].MultiCurve) {
                                            let posList = properties[key].MultiCurve.curveMember.LineString.posList.value.split(" ");
                                            let list = [];
                                            for (let i = 0; i < posList.length; i += 2) {
                                                list.push([posList[i], posList[i + 1]]);
                                            }
                                            geojson =
                                                {
                                                    type: "Feature",
                                                    geometry: {
                                                        type: "LineString",
                                                        coordinates: list
                                                    }
                                                };
                                        }
                                    }
                                });
                                resList.push(propertyList);
                                geometryList.push(geojson);
                            }
                        });
                    }
                }
                setTimeout(() => {
                    if (resList.length > 0 && geometryList.length > 0) {
                        if (geometryList[0].geometry.type == "Point") {
                            Cesium.GeoJsonDataSource.load(geometryList[0]).then(dataSource => {
                                dataSource.entities.values.forEach(entity => {
                                    entity.billboard = null;
                                    entity.point = new Cesium.PointGraphics({
                                        show: true,
                                        color: Cesium.Color.AQUA,
                                        pixelSize: 10,
                                        clampToGround: true
                                    });
                                    highLight.entities.add(entity);
                                });
                            });
                        }
                        else if (geometryList[0].geometry.type == "LineString") {
                            Cesium.GeoJsonDataSource.load(geometryList[0]).then(dataSource => {
                                dataSource.entities.values.forEach(entity => {
                                    entity.polyline.width = 10;
                                    entity.polyline.clampToGround = true;
                                    entity.polyline.material = new Cesium.PolylineGlowMaterialProperty({
                                        glowPower: 0.2,
                                        color: Cesium.Color.BLUE
                                    });
                                    highLight.entities.add(entity);
                                });
                            });
                        }
                        else {
                            Cesium.GeoJsonDataSource.load(geometryList[0]).then(dataSource => {
                                dataSource.entities.values.forEach(entity => {
                                    highLight.entities.add(entity);
                                });
                            });
                        }
                        callback(resList[0]);
                    }
                }, 500);
            }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
        });
    }
    test(list, earth, callback) {
        list.sort(function sortNumber(a, b) {
            return b._ci - a._ci;
        });
        if (highLight == null) {
            highLight = new Cesium.CustomDataSource('highLight');
            earth.czm.viewer.dataSources.add(highLight);
        }
        let handler = new Cesium.ScreenSpaceEventHandler(earth.czm.scene.canvas);
        handler.setInputAction((click) => {
            list.forEach((czmObject, i) => {
                if (!earth.epsplanet.allowClick)
                    return;
                if (!czmObject.show)
                    return;
                let pickObj = earth.czm.viewer.scene.pick(click.position);
                if (Cesium.defined(pickObj)) {
                    return;
                }
                if (highLight)
                    highLight.entities.removeAll();
                earth.sceneTree.$refs.pin1.czmObject.customProp = false;
                earth.sceneTree.$refs.pin1.czmObject.position = this.Cartesian2ToCartographic(earth.czm.viewer, click.position);
                let url = czmObject.xbsjImageryProvider.WebMapTileServiceImageryProvider.url || czmObject.xbsjImageryProvider.WebMapServiceImageryProvider.url;
                let requestUrl = "";
                if (czmObject.xbsjImageryProvider.type == "WebMapTileServiceImageryProvider") {
                    requestUrl = url.split('MapServer')[0] + "MapServer/layers?f=pjson";
                }
                else if (czmObject.xbsjImageryProvider.type == "WebMapServiceImageryProvider") {
                    requestUrl = url.split('arcgis')[0] + 'arcgis/rest' + url.split('arcgis')[1].split('MapServer')[0] + "MapServer/layers?f=pjson";
                }
                let position = this.Cartesian2ToWGS84(earth.czm.viewer, click.position);
                let bufferCoordinates = this.Buffer([position.lon, position.lat], 1);
                let addr = this.GetWFSUrl(czmObject.xbsjImageryProvider);
                let typeName = url.split('/MapServer')[0].split('services/')[1];
                this.httpFuncA(czmObject, typeName, bufferCoordinates, addr, requestUrl, (resList, geometryList) => {
                    if (highLight.entities.values && highLight.entities.values.length > 0)
                        return;
                    if (resList.length > 0 && geometryList.length > 0) {
                        if (geometryList[0].geometry.type == "Point") {
                            Cesium.GeoJsonDataSource.load(geometryList[0]).then(dataSource => {
                                dataSource.entities.values.forEach(entity => {
                                    entity.billboard = null;
                                    entity.point = new Cesium.PointGraphics({
                                        show: true,
                                        color: Cesium.Color.AQUA,
                                        pixelSize: 10,
                                        clampToGround: true
                                    });
                                    highLight.entities.add(entity);
                                });
                            });
                        }
                        else if (geometryList[0].geometry.type == "LineString") {
                            Cesium.GeoJsonDataSource.load(geometryList[0]).then(dataSource => {
                                dataSource.entities.values.forEach(entity => {
                                    entity.polyline.width = 10;
                                    entity.polyline.clampToGround = true;
                                    entity.polyline.material = new Cesium.PolylineGlowMaterialProperty({
                                        glowPower: 0.2,
                                        color: Cesium.Color.BLUE
                                    });
                                    highLight.entities.add(entity);
                                });
                            });
                        }
                        else {
                            Cesium.GeoJsonDataSource.load(geometryList[0]).then(dataSource => {
                                dataSource.entities.values.forEach(entity => {
                                    highLight.entities.add(entity);
                                });
                            });
                        }
                        callback(resList[0]);
                    }
                });
            });
        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
    }
    httpFuncA(czmObject, typeName, bufferCoordinates, addr, requestUrl, callback) {
        let resLists = [];
        let geometryLists = [];
        this.httpFuncB(requestUrl, res => {
            if (res.layers == undefined)
                return;
            if (czmObject.xbsjImageryProvider.type == "WebMapTileServiceImageryProvider") {
                for (let i = 0; i < res.layers.length; i++) {
                    const item = res.layers[i];
                    let query = `${addr}`
                        + `typename=${typeName}:${item.name}&Filter=`
                        + `<ogc:Filter><ogc:Intersects><ogc:PropertyName>Shape</ogc:PropertyName>`
                        + `<gml:Polygon srsName="urn:x-ogc:def:crs:EPSG:4326"><gml:outerBoundaryIs><gml:LinearRing>`
                        + `<gml:coordinates>${bufferCoordinates}</gml:coordinates>`
                        + `</gml:LinearRing></gml:outerBoundaryIs></gml:Polygon></ogc:Intersects></ogc:Filter>`;
                    this.httpFunc(query, err => {
                        let res = err.error.text;
                        let FeatureCollection = this.xml2Json(this.stringToXml(res))['FeatureCollection'];
                        if (FeatureCollection == undefined)
                            return;
                        if (FeatureCollection['featureMember']) {
                            if (FeatureCollection['featureMember'].length) {
                                let properties = FeatureCollection['featureMember'][0][item.name];
                                let propertyList = [];
                                let geojson = {};
                                if (properties == undefined || properties == null)
                                    return;
                                Object.keys(properties).map(key => {
                                    if (key !== "Shape") {
                                        propertyList.push({
                                            name: key,
                                            value: properties[key].value
                                        });
                                    }
                                    else {
                                        if (properties[key].MultiSurface) {
                                            let posList = properties[key].MultiSurface.surfaceMember.Polygon.exterior.LinearRing.posList.value.split(" ");
                                            posList.shift();
                                            let list = [];
                                            for (let i = 0; i < posList.length; i += 2) {
                                                list.push([posList[i], posList[i + 1]]);
                                            }
                                            geojson = {
                                                type: "Feature",
                                                geometry: {
                                                    type: "LineString",
                                                    coordinates: list
                                                }
                                            };
                                        }
                                        else if (properties[key].Point) {
                                            let posList = properties[key].Point.pos.value.split(" ");
                                            geojson =
                                                {
                                                    type: "Feature",
                                                    geometry: {
                                                        type: "Point",
                                                        coordinates: posList
                                                    }
                                                };
                                        }
                                        else if (properties[key].MultiCurve) {
                                            let posList = properties[key].MultiCurve.curveMember.LineString.posList.value.split(" ");
                                            let list = [];
                                            for (let i = 0; i < posList.length; i += 2) {
                                                list.push([posList[i], posList[i + 1]]);
                                            }
                                            geojson =
                                                {
                                                    type: "Feature",
                                                    geometry: {
                                                        type: "LineString",
                                                        coordinates: list
                                                    }
                                                };
                                        }
                                    }
                                });
                                resLists.push(propertyList);
                                geometryLists.push(geojson);
                                callback(resLists, geometryLists);
                            }
                            else {
                                let properties = FeatureCollection['featureMember'][item.name];
                                let propertyList = [];
                                let geojson = {};
                                if (properties == undefined || properties == null)
                                    return;
                                Object.keys(properties).map(key => {
                                    if (key !== "Shape") {
                                        propertyList.push({
                                            name: key,
                                            value: properties[key].value
                                        });
                                    }
                                    else {
                                        if (properties[key].MultiSurface) {
                                            let posList = properties[key].MultiSurface.surfaceMember.Polygon.exterior.LinearRing.posList.value.split(" ");
                                            posList.shift();
                                            let list = [];
                                            for (let i = 0; i < posList.length; i += 2) {
                                                list.push([posList[i], posList[i + 1]]);
                                            }
                                            geojson = {
                                                type: "Feature",
                                                geometry: {
                                                    type: "LineString",
                                                    coordinates: list
                                                }
                                            };
                                        }
                                        else if (properties[key].Point) {
                                            let posList = properties[key].Point.pos.value.split(" ");
                                            geojson =
                                                {
                                                    type: "Feature",
                                                    geometry: {
                                                        type: "Point",
                                                        coordinates: posList
                                                    }
                                                };
                                        }
                                        else if (properties[key].MultiCurve) {
                                            let posList = properties[key].MultiCurve.curveMember.LineString.posList.value.split(" ");
                                            let list = [];
                                            for (let i = 0; i < posList.length; i += 2) {
                                                list.push([posList[i], posList[i + 1]]);
                                            }
                                            geojson =
                                                {
                                                    type: "Feature",
                                                    geometry: {
                                                        type: "LineString",
                                                        coordinates: list
                                                    }
                                                };
                                        }
                                    }
                                });
                                resLists.push(propertyList);
                                geometryLists.push(geojson);
                                callback(resLists, geometryLists);
                            }
                        }
                    });
                }
            }
            else if (czmObject.xbsjImageryProvider.type == "WebMapServiceImageryProvider") {
                let llist = czmObject.xbsjImageryProvider.WebMapServiceImageryProvider.layers.split(",");
                for (let i = llist.length - 1; i >= 0; i--) {
                    const item = res.layers[res.layers.length - 1 - llist[i]];
                    let query = `${addr}`
                        + `typename=${typeName}:${item.name}&Filter=`
                        + `<ogc:Filter><ogc:Intersects><ogc:PropertyName>Shape</ogc:PropertyName>`
                        + `<gml:Polygon srsName="urn:x-ogc:def:crs:EPSG:4326"><gml:outerBoundaryIs><gml:LinearRing>`
                        + `<gml:coordinates>${bufferCoordinates}</gml:coordinates>`
                        + `</gml:LinearRing></gml:outerBoundaryIs></gml:Polygon></ogc:Intersects></ogc:Filter>`;
                    this.httpFunc(query, err => {
                        if (resLists.length > 0)
                            return;
                        let res = err.error.text;
                        let FeatureCollection = this.xml2Json(this.stringToXml(res))['FeatureCollection'];
                        if (FeatureCollection == undefined)
                            return;
                        if (FeatureCollection['featureMember']) {
                            if (FeatureCollection['featureMember'].length) {
                                let properties = FeatureCollection['featureMember'][0][item.name];
                                let propertyList = [];
                                let geojson = {};
                                if (properties == undefined || properties == null)
                                    return;
                                Object.keys(properties).map(key => {
                                    if (key !== "Shape") {
                                        propertyList.push({
                                            name: key,
                                            value: properties[key].value
                                        });
                                    }
                                    else {
                                        if (properties[key].MultiSurface) {
                                            let posList = properties[key].MultiSurface.surfaceMember.Polygon.exterior.LinearRing.posList.value.split(" ");
                                            posList.shift();
                                            let list = [];
                                            for (let i = 0; i < posList.length; i += 2) {
                                                list.push([posList[i], posList[i + 1]]);
                                            }
                                            geojson = {
                                                type: "Feature",
                                                geometry: {
                                                    type: "LineString",
                                                    coordinates: list
                                                }
                                            };
                                        }
                                        else if (properties[key].Point) {
                                            let posList = properties[key].Point.pos.value.split(" ");
                                            geojson =
                                                {
                                                    type: "Feature",
                                                    geometry: {
                                                        type: "Point",
                                                        coordinates: posList
                                                    }
                                                };
                                        }
                                        else if (properties[key].MultiCurve) {
                                            let posList = properties[key].MultiCurve.curveMember.LineString.posList.value.split(" ");
                                            let list = [];
                                            for (let i = 0; i < posList.length; i += 2) {
                                                list.push([posList[i], posList[i + 1]]);
                                            }
                                            geojson =
                                                {
                                                    type: "Feature",
                                                    geometry: {
                                                        type: "LineString",
                                                        coordinates: list
                                                    }
                                                };
                                        }
                                    }
                                });
                                resLists.push(propertyList);
                                geometryLists.push(geojson);
                                callback(resLists, geometryLists);
                            }
                            else {
                                let properties = FeatureCollection['featureMember'][item.name];
                                let propertyList = [];
                                let geojson = {};
                                if (properties == undefined || properties == null)
                                    return;
                                Object.keys(properties).map(key => {
                                    if (key !== "Shape") {
                                        propertyList.push({
                                            name: key,
                                            value: properties[key].value
                                        });
                                    }
                                    else {
                                        if (properties[key].MultiSurface) {
                                            let posList = properties[key].MultiSurface.surfaceMember.Polygon.exterior.LinearRing.posList.value.split(" ");
                                            posList.shift();
                                            let list = [];
                                            for (let i = 0; i < posList.length; i += 2) {
                                                list.push([posList[i], posList[i + 1]]);
                                            }
                                            geojson = {
                                                type: "Feature",
                                                geometry: {
                                                    type: "LineString",
                                                    coordinates: list
                                                }
                                            };
                                        }
                                        else if (properties[key].Point) {
                                            let posList = properties[key].Point.pos.value.split(" ");
                                            geojson =
                                                {
                                                    type: "Feature",
                                                    geometry: {
                                                        type: "Point",
                                                        coordinates: posList
                                                    }
                                                };
                                        }
                                        else if (properties[key].MultiCurve) {
                                            let posList = properties[key].MultiCurve.curveMember.LineString.posList.value.split(" ");
                                            let list = [];
                                            for (let i = 0; i < posList.length; i += 2) {
                                                list.push([posList[i], posList[i + 1]]);
                                            }
                                            geojson =
                                                {
                                                    type: "Feature",
                                                    geometry: {
                                                        type: "LineString",
                                                        coordinates: list
                                                    }
                                                };
                                        }
                                    }
                                });
                                resLists.push(propertyList);
                                geometryLists.push(geojson);
                                callback(resLists, geometryLists);
                            }
                        }
                    });
                }
            }
        });
    }
    httpFuncB(requestUrl, callback) {
        this.httpReq('get', requestUrl).then((res) => {
            callback(res);
        });
    }
    httpFunc(query, callback) {
        this.httpReq('get', query).then().catch((err) => {
            callback(err);
        });
    }
    pickModel(earth, callback) {
        let handler = new Cesium.ScreenSpaceEventHandler(earth.czm.scene.canvas);
        handler.setInputAction((click) => {
            if (!earth.epsplanet.allowClick) {
                return;
            }
            let position = earth.czm.viewer.scene.pickPosition(click.position);
            let pickObj = earth.czm.viewer.scene.pick(click.position);
            if (!Cesium.defined(pickObj) || !pickObj.getPropertyNames) {
                earth.sceneTree.$refs.pin1.czmObject.customProp = false;
                return;
            }
            let cartographic = Cesium.Cartographic.fromCartesian(position);
            earth.sceneTree.$refs.pin1.czmObject.position = [cartographic.longitude, cartographic.latitude, cartographic.height];
            let PropertyNames = pickObj.getPropertyNames();
            let propertyList = [];
            PropertyNames.forEach(property => {
                propertyList.push({
                    name: property,
                    value: pickObj.getProperty(property)
                });
            });
            callback(propertyList, pickObj);
        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
    }
    Cartesian2ToWGS84(viewer, position) {
        var ray = viewer.camera.getPickRay(position);
        var cartesian = viewer.scene.globe.pick(ray, viewer.scene);
        var cartographic = Cesium.Cartographic.fromCartesian(cartesian);
        let lon = Cesium.Math.toDegrees(cartographic.longitude);
        let lat = Cesium.Math.toDegrees(cartographic.latitude);
        return { lon: lon, lat: lat };
    }
    Cartesian2ToCartographic(viewer, position) {
        var ray = viewer.camera.getPickRay(position);
        var cartesian = viewer.scene.globe.pick(ray, viewer.scene);
        var cartographic = Cesium.Cartographic.fromCartesian(cartesian);
        return [cartographic.longitude, cartographic.latitude, cartographic.height];
    }
    GetWFSUrl(ImageryProvider) {
        let WFSUrl = "";
        if (ImageryProvider.type == "WebMapTileServiceImageryProvider") {
            let WMTSImageryProvider = ImageryProvider.WebMapTileServiceImageryProvider;
            if (WMTSImageryProvider.url.indexOf('arcgis') !== -1) {
                WFSUrl = WMTSImageryProvider.url.split("rest")[0] + WMTSImageryProvider.url.split("rest/")[1].split("MapServer")[0] + "MapServer/WFSServer?request=GetFeature&service=WFS&version=1.1.0&";
            }
            else if (WMTSImageryProvider.url.indexOf('geoserver') !== -1) {
                WFSUrl = WMTSImageryProvider.url.split("gwc")[0] + WMTSImageryProvider.layer.split(":")[0] + "/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=" + WMTSImageryProvider.layer + "&maxFeatures=1&outputFormat=json&filter=";
            }
        }
        if (ImageryProvider.type == "WebMapServiceImageryProvider") {
            let WebMapServiceImageryProvider = ImageryProvider.WebMapServiceImageryProvider;
            if (WebMapServiceImageryProvider.url.indexOf('arcgis') !== -1) {
                WFSUrl = WebMapServiceImageryProvider.url.split("MapServer")[0] + "MapServer/WFSServer?request=GetFeature&service=WFS&version=1.1.0&";
            }
            else if (WebMapServiceImageryProvider.url.indexOf('geoserver') !== -1) {
                WFSUrl = WebMapServiceImageryProvider.url.split("wms")[0] + "/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=" + WebMapServiceImageryProvider.layers + "&maxFeatures=1&outputFormat=json&filter=";
            }
        }
        return WFSUrl;
    }
    Buffer(position, meters) {
        let pointF = turf.point(position);
        let buffered = turf.buffer(pointF, meters, 'meters');
        let coordinates = buffered.geometry.coordinates;
        let points = coordinates[0];
        let degreesListStr = this.pointsToDegreesArray(points);
        return degreesListStr;
    }
    pointsToDegreesArray(points) {
        let degreesArray = "";
        points.map(item => {
            degreesArray += item[0] + "," + item[1] + " ";
        });
        return degreesArray;
    }
    ClearHighLight() {
        highLight.entities.removeAll();
    }
    xml2Json(xml) {
        var obj = {};
        if (xml.nodeType == 1) {
            if (xml.attributes.length > 0) {
                obj["@attributes"] = {};
                for (var j = 0; j < xml.attributes.length; j++) {
                    var attribute = xml.attributes.item(j);
                    if (attribute.nodeName.indexOf(":") == -1) {
                        obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
                    }
                    else {
                        obj["@attributes"][attribute.nodeName.split(":")[1]] = attribute.nodeValue;
                    }
                }
            }
        }
        else if (xml.nodeType == 3) {
            obj = xml.nodeValue;
        }
        if (xml.hasChildNodes()) {
            for (var i = 0; i < xml.childNodes.length; i++) {
                var item = xml.childNodes.item(i);
                var nodeName = item.nodeName;
                if (typeof (obj[nodeName.split(":")[1]]) == "undefined") {
                    if (nodeName.split(":")[1] == undefined) {
                        obj['value'] = this.xml2Json(item);
                    }
                    else {
                        obj[nodeName.split(":")[1]] = this.xml2Json(item);
                    }
                }
                else {
                    if (typeof (obj[nodeName.split(":")[1]].length) == "undefined") {
                        var old = obj[nodeName.split(":")[1]];
                        obj[nodeName.split(":")[1]] = [];
                        obj[nodeName.split(":")[1]].push(old);
                    }
                    obj[nodeName.split(":")[1]].push(this.xml2Json(item));
                }
            }
        }
        return obj;
    }
    stringToXml(xmlString) {
        var xmlDoc;
        if (typeof xmlString == "string") {
            if (document.implementation.createDocument) {
                var parser = new DOMParser();
                xmlDoc = parser.parseFromString(xmlString, "text/xml");
            }
        }
        else {
            xmlDoc = xmlString;
        }
        return xmlDoc;
    }
}
Identify.ɵfac = function Identify_Factory(t) { return new (t || Identify)(i0.ɵɵinject(i1.HttpReqService)); };
Identify.ɵprov = i0.ɵɵdefineInjectable({ token: Identify, factory: Identify.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Identify, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpReqService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpZnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9lcHNwbGFuZXQvdXRpbHMvaWRlbnRpZnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUcxQyxPQUFPLElBQUksTUFBTSxNQUFNLENBQUE7OztBQUN2QixJQUFJLGFBQWEsR0FBRyxFQUFFLENBQUE7QUFDdEIsSUFBSSxhQUFhLEdBQUcsRUFBRSxDQUFBO0FBQ3RCLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQTtBQUNoQixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUE7QUFNcEIsTUFBTSxPQUFPLFFBQVE7SUFFakIsWUFBb0IsSUFBb0I7UUFBcEIsU0FBSSxHQUFKLElBQUksQ0FBZ0I7UUFHcEMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUE7UUFDOUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUE7UUFDbEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFBO1FBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDNUMsQ0FBQztJQUNELE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRztRQUNmLElBQUksTUFBTSxJQUFJLE1BQU0sRUFBRTtZQUNsQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUE7U0FDeEQ7UUFDRCxJQUFJLE1BQU0sSUFBSSxLQUFLLEVBQUU7WUFDakIsT0FBTyxJQUFJLENB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LFVBQVUsQ0FBQyxDQUFDO2FBQzFEO1NBQ0o7YUFDSTtZQUNELE1BQU0sR0FBRyxTQUFTLENBQUM7U0FDdEI7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDOztnRUExNEJRLFFBQVE7Z0RBQVIsUUFBUSxXQUFSLFFBQVEsbUJBRkwsTUFBTTt1RkFFVCxRQUFRO2NBSHBCLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5pbXBvcnQgeyBIdHRwUmVxU2VydmljZSB9IGZyb20gJ2Vwc2dpcydcclxuXHJcbmltcG9ydCB0dXJmIGZyb20gJ3R1cmYnXHJcbmxldCBwcm9wZXJ0eUxpc3RzID0gW11cclxubGV0IGN6bU9iamVjdExpc3QgPSBbXVxyXG5sZXQgcmVzTGlzdCA9IFtdXHJcbmxldCBoaWdoTGlnaHQgPSBudWxsXHJcblxyXG4vLyBlYXJ0aC5lcHNwbGFuZXQuYWxsb3dDbGljayA9IGZhbHNlO1xyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIElkZW50aWZ5IHtcclxuICAgIGVhcnRoO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwUmVxU2VydmljZSkge1xyXG4gICAgICAgIC8vIGRlYnVnZ2VyXHJcbiAgICAgICAgLy8gZWFydGguZXBzcGxhbmV0LmFsbG93Q2xpY2sgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuZWFydGggPSB3aW5kb3dbJ2VhcnRoJ11cclxuICAgICAgICB0aGlzLmVhcnRoLmludGVyYWN0aW9uLnBpY2tpbmcuZW5hYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5lYXJ0aC5pbnRlcmFjdGlvbi5waWNraW5nLmhvdmVyRW5hYmxlID0gZmFsc2VcclxuICAgICAgICB0aGlzLmVhcnRoLmVwc3BsYW5ldCA9IHt9XHJcbiAgICAgICAgdGhpcy5lYXJ0aC5lcHNwbGFuZXQuYWxsb3dDbGljayA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaHR0cFJlcShtZXRob2QsIHVybCkge1xyXG4gICAgICAgIGlmIChtZXRob2QgPT0gJ3Bvc3QnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuaHR0cENsaWVudC5wb3N0KHVybCwgXCJcIikudG9Qcm9taXNlKClcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1ldGhvZCA9PSAnZ2V0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmh0dHBDbGllbnQuZ2V0KHVybCkudG9Qcm9taXNlKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIGdlb3NlcnZlcuacjeWKoeiOt+WPlueCuemAieS9jee9ruimgee0oOWxnuaAp1xyXG4gICAgICogQHBhcmFtIGN6bU9iamVjdCBcclxuICAgICAqIEBwYXJhbSBlYXJ0aCDliJvlu7rnmoTlnLDnkINcclxuICAgICAqIEBwYXJhbSB0eXBlIOivhuWIq+exu+Wei++8mueCueOAgee6v+OAgemdoijnm67liY3lj6rmnInngrkpXHJcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sg5Zue6LCD5Ye95pWwXHJcbiAgICAgKi9cclxuICAgIEdldEZlYXR1cmVJbmZvKGN6bU9iamVjdCwgZWFydGgsIHR5cGUsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKGhpZ2hMaWdodCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGhpZ2hMaWdodCA9IG5ldyBDZXNpdW0uQ3VzdG9tRGF0YVNvdXJjZSgnaGlnaExpZ2h0Jyk7XHJcbiAgICAgICAgICAgIGVhcnRoLmN6bS52aWV3ZXIuZGF0YVNvdXJjZXMuYWRkKGhpZ2hMaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzY2VuZSA9IGVhcnRoLmN6bS5zY2VuZTtcclxuICAgICAgICBsZXQgdmlld2VyID0gZWFydGguY3ptLnZpZXdlcjtcclxuICAgICAgICBsZXQgV0ZTVXJsID0gdGhpcy5HZXRXRlNVcmwoY3ptT2JqZWN0Lnhic2pJbWFnZXJ5UHJvdmlkZXIpO1xyXG4gICAgICAgIGxldCBoYW5kbGVyID0gbmV3IENlc2l1bS5TY3JlZW5TcGFjZUV2ZW50SGFuZGxlcihzY2VuZS5jYW52YXMpO1xyXG4gICAgICAgIGxldCBmaWx0ZXIgPSBcIlwiXHJcblxyXG4gICAgICAgIGhhbmRsZXIuc2V0SW5wdXRBY3Rpb24oKGNsaWNrKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghZWFydGguZXBzcGxhbmV0LmFsbG93Q2xpY2spIHJldHVybjtcclxuICAgICAgICAgICAgaWYgKCFjem1PYmplY3Quc2hvdykgcmV0dXJuO1xyXG4gICAgICAgICAgICBsZXQgcGlja09iaiA9IGVhcnRoLmN6bS52aWV3ZXIuc2NlbmUucGljayhjbGljay5wb3NpdGlvbilcclxuICAgICAgICAgICAgaWYgKENlc2l1bS5kZWZpbmVkKHBpY2tPYmopKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlYXJ0aC5zY2VuZVRyZWUuJHJlZnMucGluMS5jem1PYmplY3QuY3VzdG9tUHJvcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBoaWdoTGlnaHQuZW50aXRpZXMucmVtb3ZlQWxsKCk7XHJcbiAgICAgICAgICAgIHJlc0xpc3QgPSBbXTtcclxuICAgICAgICAgICAgZWFydGguc2NlbmVUcmVlLiRyZWZzLnBpbjEuY3ptT2JqZWN0LnBvc2l0aW9uID0gdGhpcy5DYXJ0ZXNpYW4yVG9DYXJ0b2dyYXBoaWModmlld2VyLCBjbGljay5wb3NpdGlvbilcclxuICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0gdGhpcy5DYXJ0ZXNpYW4yVG9XR1M4NCh2aWV3ZXIsIGNsaWNrLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgbGV0IGJ1ZmZlckNvb3JkaW5hdGVzID0gdGhpcy5CdWZmZXIoW3Bvc2l0aW9uLmxvbiwgcG9zaXRpb24ubGF0XSwgMTAwKTtcclxuICAgICAgICAgICAgaWYgKHR5cGUgPT0gJ3BvaW50Jykge1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyID0gYDxGaWx0ZXIgeG1sbnM9XCJodHRwOi8vd3d3Lm9wZW5naXMubmV0L29nY1wiIHhtbG5zOmdtbD1cImh0dHA6Ly93d3cub3Blbmdpcy5uZXQvZ21sXCI+PEludGVyc2VjdHM+PFByb3BlcnR5TmFtZT50aGVfZ2VvbTwvUHJvcGVydHlOYW1lPjxnbWw6b3V0ZXJCb3VuZGFyeUlzPjxnbWw6TGluZWFyUmluZz48Z21sOmNvb3JkaW5hdGVzPiR7YnVmZmVyQ29vcmRpbmF0ZXN9PC9nbWw6Y29vcmRpbmF0ZXM+PC9nbWw6TGluZWFyUmluZz48L2dtbDpvdXRlckJvdW5kYXJ5SXM+PC9JbnRlcnNlY3RzPjwvRmlsdGVyPmBcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID0gJ2xpbmUnKSB7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPSAncG9seWdvbicpIHtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5odHRwUmVxKCdwb3N0JywgV0ZTVXJsICsgZmlsdGVyKS50aGVuKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5mZWF0dXJlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByb3BlcnRpZXMgPSByZXMuZmVhdHVyZXNbMF0ucHJvcGVydGllcztcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJvcGVydHlMaXN0ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMocHJvcGVydGllcykubWFwKGtleSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eUxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBrZXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcHJvcGVydGllc1trZXldXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eUxpc3RzLnB1c2gocHJvcGVydHlMaXN0KVxyXG4gICAgICAgICAgICAgICAgICAgIGN6bU9iamVjdExpc3QucHVzaChjem1PYmplY3QpXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzTGlzdC5wdXNoKHJlcylcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/lpoLmnpzmnInlm77lsYLph43lj6DvvIzlj6rnrKzkuIDkuKrlm77lsYLov5Tlm57lsZ7mgKdcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc0xpc3QubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGVidWdnZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3ptT2JqZWN0TGlzdFswXS5fY2kgPiBjem1PYmplY3RMaXN0WzFdLl9jaSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjem1PYmplY3RMaXN0WzBdLl9jaSAhPT0gY3ptT2JqZWN0Ll9jaSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socHJvcGVydHlMaXN0c1swXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENlc2l1bS5HZW9Kc29uRGF0YVNvdXJjZS5sb2FkKHJlc0xpc3RbMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihkYXRhU291cmNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlLmVudGl0aWVzLnZhbHVlcy5mb3JFYWNoKGVudGl0eSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2hMaWdodC5lbnRpdGllcy5hZGQoZW50aXR5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN6bU9iamVjdExpc3RbMV0uX2NpICE9PSBjem1PYmplY3QuX2NpKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhwcm9wZXJ0eUxpc3RzWzFdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2VzaXVtLkdlb0pzb25EYXRhU291cmNlLmxvYWQocmVzTGlzdFsxXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGRhdGFTb3VyY2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2UuZW50aXRpZXMudmFsdWVzLmZvckVhY2goZW50aXR5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlnaExpZ2h0LmVudGl0aWVzLmFkZChlbnRpdHkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socHJvcGVydHlMaXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDZXNpdW0uR2VvSnNvbkRhdGFTb3VyY2UubG9hZChyZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGRhdGFTb3VyY2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZS5lbnRpdGllcy52YWx1ZXMuZm9yRWFjaChlbnRpdHkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2hMaWdodC5lbnRpdGllcy5hZGQoZW50aXR5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc0xpc3QgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eUxpc3RzID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgY3ptT2JqZWN0TGlzdCA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4geyB9KVxyXG4gICAgICAgIH0sIENlc2l1bS5TY3JlZW5TcGFjZUV2ZW50VHlwZS5MRUZUX0NMSUNLKVxyXG4gICAgfVxyXG4gICAgSW5pdEhhbmRsZXIoKSB7XHJcblxyXG4gICAgfVxyXG4gICAgLy9hcmNnaXNcclxuICAgIGdldExheWVycyhjem1PYmplY3QsIGVhcnRoLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGlmIChoaWdoTGlnaHQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBoaWdoTGlnaHQgPSBuZXcgQ2VzaXVtLkN1c3RvbURhdGFTb3VyY2UoJ2hpZ2hMaWdodCcpO1xyXG4gICAgICAgICAgICBlYXJ0aC5jem0udmlld2VyLmRhdGFTb3VyY2VzLmFkZChoaWdoTGlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaGFuZGxlciA9IG5ldyBDZXNpdW0uU2NyZWVuU3BhY2VFdmVudEhhbmRsZXIoZWFydGguY3ptLnNjZW5lLmNhbnZhcyk7XHJcbiAgICAgICAgbGV0IHVybCA9IGN6bU9iamVjdC54YnNqSW1hZ2VyeVByb3ZpZGVyLldlYk1hcFRpbGVTZXJ2aWNlSW1hZ2VyeVByb3ZpZGVyLnVybCB8fCBjem1PYmplY3QueGJzakltYWdlcnlQcm92aWRlci5XZWJNYXBTZXJ2aWNlSW1hZ2VyeVByb3ZpZGVyLnVybDtcclxuICAgICAgICBsZXQgcmVxdWVzdFVybCA9IFwiXCJcclxuICAgICAgICBpZiAoY3ptT2JqZWN0Lnhic2pJbWFnZXJ5UHJvdmlkZXIudHlwZSA9PSBcIldlYk1hcFRpbGVTZXJ2aWNlSW1hZ2VyeVByb3ZpZGVyXCIpIHtcclxuICAgICAgICAgICAgcmVxdWVzdFVybCA9IHVybC5zcGxpdCgnTWFwU2VydmVyJylbMF0gKyBcIk1hcFNlcnZlci9sYXllcnM/Zj1wanNvblwiXHJcbiAgICAgICAgfSBlbHNlIGlmIChjem1PYmplY3QueGJzakltYWdlcnlQcm92aWRlci50eXBlID09IFwiV2ViTWFwU2VydmljZUltYWdlcnlQcm92aWRlclwiKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3RVcmwgPSB1cmwuc3BsaXQoJ2FyY2dpcycpWzBdICsgJ2FyY2dpcy9yZXN0JyArIHVybC5zcGxpdCgnYXJjZ2lzJylbMV0uc3BsaXQoJ01hcFNlcnZlcicpWzBdICsgXCJNYXBTZXJ2ZXIvbGF5ZXJzP2Y9cGpzb25cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbGV0IGxheWVycz1bXTtcclxuICAgICAgICB0aGlzLmh0dHBSZXEoJ2dldCcsIHJlcXVlc3RVcmwpLnRoZW4oKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgICAgaGFuZGxlci5zZXRJbnB1dEFjdGlvbigoY2xpY2spID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMubGF5ZXJzID09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFlYXJ0aC5lcHNwbGFuZXQuYWxsb3dDbGljaykgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjem1PYmplY3Quc2hvdykgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBpY2tPYmogPSBlYXJ0aC5jem0udmlld2VyLnNjZW5lLnBpY2soY2xpY2sucG9zaXRpb24pXHJcbiAgICAgICAgICAgICAgICBpZiAoQ2VzaXVtLmRlZmluZWQocGlja09iaikpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChoaWdoTGlnaHQpXHJcbiAgICAgICAgICAgICAgICAgICAgaGlnaExpZ2h0LmVudGl0aWVzLnJlbW92ZUFsbCgpO1xyXG4gICAgICAgICAgICAgICAgZWFydGguc2NlbmVUcmVlLiRyZWZzLnBpbjEuY3ptT2JqZWN0LmN1c3RvbVByb3AgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGVhcnRoLnNjZW5lVHJlZS4kcmVmcy5waW4xLmN6bU9iamVjdC5wb3NpdGlvbiA9IHRoaXMuQ2FydGVzaWFuMlRvQ2FydG9ncmFwaGljKGVhcnRoLmN6bS52aWV3ZXIsIGNsaWNrLnBvc2l0aW9uKVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9IHRoaXMuQ2FydGVzaWFuMlRvV0dTODQoZWFydGguY3ptLnZpZXdlciwgY2xpY2sucG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgbGV0IGJ1ZmZlckNvb3JkaW5hdGVzID0gdGhpcy5CdWZmZXIoW3Bvc2l0aW9uLmxvbiwgcG9zaXRpb24ubGF0XSwgMSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYWRkciA9IHRoaXMuR2V0V0ZTVXJsKGN6bU9iamVjdC54YnNqSW1hZ2VyeVByb3ZpZGVyKTtcclxuICAgICAgICAgICAgICAgIGxldCB0eXBlTmFtZSA9IHVybC5zcGxpdCgnL01hcFNlcnZlcicpWzBdLnNwbGl0KCdzZXJ2aWNlcy8nKVsxXTtcclxuICAgICAgICAgICAgICAgIGxldCByZXNMaXN0ID0gW11cclxuICAgICAgICAgICAgICAgIGxldCBnZW9tZXRyeUxpc3QgPSBbXVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjem1PYmplY3QueGJzakltYWdlcnlQcm92aWRlci50eXBlID09IFwiV2ViTWFwVGlsZVNlcnZpY2VJbWFnZXJ5UHJvdmlkZXJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzLmxheWVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gcmVzLmxheWVyc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHF1ZXJ5ID0gYCR7YWRkcn1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArIGB0eXBlbmFtZT0ke3R5cGVOYW1lfToke2l0ZW0ubmFtZX0mRmlsdGVyPWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgYDxvZ2M6RmlsdGVyPjxvZ2M6SW50ZXJzZWN0cz48b2djOlByb3BlcnR5TmFtZT5TaGFwZTwvb2djOlByb3BlcnR5TmFtZT5gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArIGA8Z21sOlBvbHlnb24gc3JzTmFtZT1cInVybjp4LW9nYzpkZWY6Y3JzOkVQU0c6NDMyNlwiPjxnbWw6b3V0ZXJCb3VuZGFyeUlzPjxnbWw6TGluZWFyUmluZz5gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArIGA8Z21sOmNvb3JkaW5hdGVzPiR7YnVmZmVyQ29vcmRpbmF0ZXN9PC9nbWw6Y29vcmRpbmF0ZXM+YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBgPC9nbWw6TGluZWFyUmluZz48L2dtbDpvdXRlckJvdW5kYXJ5SXM+PC9nbWw6UG9seWdvbj48L29nYzpJbnRlcnNlY3RzPjwvb2djOkZpbHRlcj5gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaHR0cFJlcSgnZ2V0JywgcXVlcnkpLnRoZW4oKS5jYXRjaCgoZXJyOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBlcnIuZXJyb3IudGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGVidWdnZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnhtbDJKc29uKHRoaXMuc3RyaW5nVG9YbWwocmVzKSlbJ0ZlYXR1cmVDb2xsZWN0aW9uJ11bJ2ZlYXR1cmVNZW1iZXInXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcm9wZXJ0aWVzID0gdGhpcy54bWwySnNvbih0aGlzLnN0cmluZ1RvWG1sKHJlcykpWydGZWF0dXJlQ29sbGVjdGlvbiddWydmZWF0dXJlTWVtYmVyJ11baXRlbS5uYW1lXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcm9wZXJ0eUxpc3QgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBnZW9qc29uID0ge31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkZWJ1Z2dlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzID09IHVuZGVmaW5lZCB8fCBwcm9wZXJ0aWVzID09IG51bGwpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKS5tYXAoa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleSAhPT0gXCJTaGFwZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eUxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZToga2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwcm9wZXJ0aWVzW2tleV0udmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllc1trZXldLk11bHRpU3VyZmFjZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3NMaXN0ID0gcHJvcGVydGllc1trZXldLk11bHRpU3VyZmFjZS5zdXJmYWNlTWVtYmVyLlBvbHlnb24uZXh0ZXJpb3IuTGluZWFyUmluZy5wb3NMaXN0LnZhbHVlLnNwbGl0KFwiIFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NMaXN0LnNoaWZ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxpc3QgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zTGlzdC5sZW5ndGg7IGkgKz0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0LnB1c2goW3Bvc0xpc3RbaV0sIHBvc0xpc3RbaSArIDFdXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvanNvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJGZWF0dXJlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkxpbmVTdHJpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBsaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHByb3BlcnRpZXNba2V5XS5Qb2ludCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3NMaXN0ID0gcHJvcGVydGllc1trZXldLlBvaW50LnBvcy52YWx1ZS5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvanNvbiA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkZlYXR1cmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUG9pbnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBwb3NMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHByb3BlcnRpZXNba2V5XS5NdWx0aUN1cnZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvc0xpc3QgPSBwcm9wZXJ0aWVzW2tleV0uTXVsdGlDdXJ2ZS5jdXJ2ZU1lbWJlci5MaW5lU3RyaW5nLnBvc0xpc3QudmFsdWUuc3BsaXQoXCIgXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGlzdCA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3NMaXN0Lmxlbmd0aDsgaSArPSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QucHVzaChbcG9zTGlzdFtpXSwgcG9zTGlzdFtpICsgMV1dKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9qc29uID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiRmVhdHVyZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJMaW5lU3RyaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlczogbGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzTGlzdC5wdXNoKHByb3BlcnR5TGlzdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeUxpc3QucHVzaChnZW9qc29uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3ptT2JqZWN0Lnhic2pJbWFnZXJ5UHJvdmlkZXIudHlwZSA9PSBcIldlYk1hcFNlcnZpY2VJbWFnZXJ5UHJvdmlkZXJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsbGlzdCA9IGN6bU9iamVjdC54YnNqSW1hZ2VyeVByb3ZpZGVyLldlYk1hcFNlcnZpY2VJbWFnZXJ5UHJvdmlkZXIubGF5ZXJzLnNwbGl0KFwiLFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IHJlcy5sYXllcnNbcmVzLmxheWVycy5sZW5ndGggLSAxIC0gbGxpc3RbaV1dO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHF1ZXJ5ID0gYCR7YWRkcn1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArIGB0eXBlbmFtZT0ke3R5cGVOYW1lfToke2l0ZW0ubmFtZX0mRmlsdGVyPWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgYDxvZ2M6RmlsdGVyPjxvZ2M6SW50ZXJzZWN0cz48b2djOlByb3BlcnR5TmFtZT5TaGFwZTwvb2djOlByb3BlcnR5TmFtZT5gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArIGA8Z21sOlBvbHlnb24gc3JzTmFtZT1cInVybjp4LW9nYzpkZWY6Y3JzOkVQU0c6NDMyNlwiPjxnbWw6b3V0ZXJCb3VuZGFyeUlzPjxnbWw6TGluZWFyUmluZz5gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArIGA8Z21sOmNvb3JkaW5hdGVzPiR7YnVmZmVyQ29vcmRpbmF0ZXN9PC9nbWw6Y29vcmRpbmF0ZXM+YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBgPC9nbWw6TGluZWFyUmluZz48L2dtbDpvdXRlckJvdW5kYXJ5SXM+PC9nbWw6UG9seWdvbj48L29nYzpJbnRlcnNlY3RzPjwvb2djOkZpbHRlcj5gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0ubmFtZSwgcXVlcnkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaHR0cFJlcSgnZ2V0JywgcXVlcnkpLnRoZW4oKS5jYXRjaCgoZXJyOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBlcnIuZXJyb3IudGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMueG1sMkpzb24odGhpcy5zdHJpbmdUb1htbChyZXMpKVsnRmVhdHVyZUNvbGxlY3Rpb24nXSA9PSB1bmRlZmluZWQpIHJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGVidWdnZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnhtbDJKc29uKHRoaXMuc3RyaW5nVG9YbWwocmVzKSlbJ0ZlYXR1cmVDb2xsZWN0aW9uJ11bJ2ZlYXR1cmVNZW1iZXInXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMueG1sMkpzb24odGhpcy5zdHJpbmdUb1htbChyZXMpKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJvcGVydGllcyA9IHRoaXMueG1sMkpzb24odGhpcy5zdHJpbmdUb1htbChyZXMpKVsnRmVhdHVyZUNvbGxlY3Rpb24nXVsnZmVhdHVyZU1lbWJlciddW2l0ZW0ubmFtZV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJvcGVydHlMaXN0ID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZ2VvanNvbiA9IHt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGVidWdnZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllcyA9PSB1bmRlZmluZWQgfHwgcHJvcGVydGllcyA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMocHJvcGVydGllcykubWFwKGtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXkgIT09IFwiU2hhcGVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGtleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcHJvcGVydGllc1trZXldLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnRpZXNba2V5XS5NdWx0aVN1cmZhY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9zTGlzdCA9IHByb3BlcnRpZXNba2V5XS5NdWx0aVN1cmZhY2Uuc3VyZmFjZU1lbWJlci5Qb2x5Z29uLmV4dGVyaW9yLkxpbmVhclJpbmcucG9zTGlzdC52YWx1ZS5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zTGlzdC5zaGlmdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsaXN0ID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvc0xpc3QubGVuZ3RoOyBpICs9IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKFtwb3NMaXN0W2ldLCBwb3NMaXN0W2kgKyAxXV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb2pzb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiRmVhdHVyZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJMaW5lU3RyaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlczogbGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9wZXJ0aWVzW2tleV0uUG9pbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9zTGlzdCA9IHByb3BlcnRpZXNba2V5XS5Qb2ludC5wb3MudmFsdWUuc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb2pzb24gPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJGZWF0dXJlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBvaW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlczogcG9zTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9wZXJ0aWVzW2tleV0uTXVsdGlDdXJ2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3NMaXN0ID0gcHJvcGVydGllc1trZXldLk11bHRpQ3VydmUuY3VydmVNZW1iZXIuTGluZVN0cmluZy5wb3NMaXN0LnZhbHVlLnNwbGl0KFwiIFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxpc3QgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zTGlzdC5sZW5ndGg7IGkgKz0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0LnB1c2goW3Bvc0xpc3RbaV0sIHBvc0xpc3RbaSArIDFdXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvanNvbiA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkZlYXR1cmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiTGluZVN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc0xpc3QucHVzaChwcm9wZXJ0eUxpc3QpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnlMaXN0LnB1c2goZ2VvanNvbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNMaXN0Lmxlbmd0aCA+IDAgJiYgZ2VvbWV0cnlMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZ2VvbWV0cnlMaXN0LCBoaWdoTGlnaHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnZW9tZXRyeUxpc3RbMF0uZ2VvbWV0cnkudHlwZSA9PSBcIlBvaW50XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENlc2l1bS5HZW9Kc29uRGF0YVNvdXJjZS5sb2FkKGdlb21ldHJ5TGlzdFswXSkudGhlbihkYXRhU291cmNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlLmVudGl0aWVzLnZhbHVlcy5mb3JFYWNoKGVudGl0eSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eS5iaWxsYm9hcmQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkucG9pbnQgPSBuZXcgQ2VzaXVtLlBvaW50R3JhcGhpY3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBDZXNpdW0uQ29sb3IuQVFVQSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBpeGVsU2l6ZTogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFtcFRvR3JvdW5kOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2hMaWdodC5lbnRpdGllcy5hZGQoZW50aXR5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGdlb21ldHJ5TGlzdFswXS5nZW9tZXRyeS50eXBlID09IFwiTGluZVN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDZXNpdW0uR2VvSnNvbkRhdGFTb3VyY2UubG9hZChnZW9tZXRyeUxpc3RbMF0pLnRoZW4oZGF0YVNvdXJjZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZS5lbnRpdGllcy52YWx1ZXMuZm9yRWFjaChlbnRpdHkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkucG9seWxpbmUud2lkdGggPSAxMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkucG9seWxpbmUuY2xhbXBUb0dyb3VuZCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5LnBvbHlsaW5lLm1hdGVyaWFsID0gbmV3IENlc2l1bS5Qb2x5bGluZUdsb3dNYXRlcmlhbFByb3BlcnR5KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb3dQb3dlcjogMC4yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IENlc2l1bS5Db2xvci5CTFVFXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWdoTGlnaHQuZW50aXRpZXMuYWRkKGVudGl0eSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENlc2l1bS5HZW9Kc29uRGF0YVNvdXJjZS5sb2FkKGdlb21ldHJ5TGlzdFswXSkudGhlbihkYXRhU291cmNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlLmVudGl0aWVzLnZhbHVlcy5mb3JFYWNoKGVudGl0eSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2hMaWdodC5lbnRpdGllcy5hZGQoZW50aXR5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlc0xpc3RbMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICAgICAgfSwgQ2VzaXVtLlNjcmVlblNwYWNlRXZlbnRUeXBlLkxFRlRfQ0xJQ0spXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHRlc3QobGlzdCwgZWFydGgsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgbGlzdC5zb3J0KGZ1bmN0aW9uIHNvcnROdW1iZXIoYSwgYikge1xyXG4gICAgICAgICAgICByZXR1cm4gYi5fY2kgLSBhLl9jaVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cobGlzdClcclxuICAgICAgICBpZiAoaGlnaExpZ2h0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgaGlnaExpZ2h0ID0gbmV3IENlc2l1bS5DdXN0b21EYXRhU291cmNlKCdoaWdoTGlnaHQnKTtcclxuICAgICAgICAgICAgZWFydGguY3ptLnZpZXdlci5kYXRhU291cmNlcy5hZGQoaGlnaExpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGhhbmRsZXIgPSBuZXcgQ2VzaXVtLlNjcmVlblNwYWNlRXZlbnRIYW5kbGVyKGVhcnRoLmN6bS5zY2VuZS5jYW52YXMpO1xyXG4gICAgICAgIGhhbmRsZXIuc2V0SW5wdXRBY3Rpb24oKGNsaWNrKSA9PiB7XHJcbiAgICAgICAgICAgIGxpc3QuZm9yRWFjaCgoY3ptT2JqZWN0LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWVhcnRoLmVwc3BsYW5ldC5hbGxvd0NsaWNrKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBpZiAoIWN6bU9iamVjdC5zaG93KSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBsZXQgcGlja09iaiA9IGVhcnRoLmN6bS52aWV3ZXIuc2NlbmUucGljayhjbGljay5wb3NpdGlvbilcclxuICAgICAgICAgICAgICAgIGlmIChDZXNpdW0uZGVmaW5lZChwaWNrT2JqKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLnnIvnnIvlvqrnjq/kuoblh6DmrKFcIilcclxuICAgICAgICAgICAgICAgIGlmIChoaWdoTGlnaHQpXHJcbiAgICAgICAgICAgICAgICAgICAgaGlnaExpZ2h0LmVudGl0aWVzLnJlbW92ZUFsbCgpO1xyXG4gICAgICAgICAgICAgICAgZWFydGguc2NlbmVUcmVlLiRyZWZzLnBpbjEuY3ptT2JqZWN0LmN1c3RvbVByb3AgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGVhcnRoLnNjZW5lVHJlZS4kcmVmcy5waW4xLmN6bU9iamVjdC5wb3NpdGlvbiA9IHRoaXMuQ2FydGVzaWFuMlRvQ2FydG9ncmFwaGljKGVhcnRoLmN6bS52aWV3ZXIsIGNsaWNrLnBvc2l0aW9uKVxyXG4gICAgICAgICAgICAgICAgbGV0IHVybCA9IGN6bU9iamVjdC54YnNqSW1hZ2VyeVByb3ZpZGVyLldlYk1hcFRpbGVTZXJ2aWNlSW1hZ2VyeVByb3ZpZGVyLnVybCB8fCBjem1PYmplY3QueGJzakltYWdlcnlQcm92aWRlci5XZWJNYXBTZXJ2aWNlSW1hZ2VyeVByb3ZpZGVyLnVybDtcclxuICAgICAgICAgICAgICAgIGxldCByZXF1ZXN0VXJsID0gXCJcIlxyXG4gICAgICAgICAgICAgICAgaWYgKGN6bU9iamVjdC54YnNqSW1hZ2VyeVByb3ZpZGVyLnR5cGUgPT0gXCJXZWJNYXBUaWxlU2VydmljZUltYWdlcnlQcm92aWRlclwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdFVybCA9IHVybC5zcGxpdCgnTWFwU2VydmVyJylbMF0gKyBcIk1hcFNlcnZlci9sYXllcnM/Zj1wanNvblwiXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN6bU9iamVjdC54YnNqSW1hZ2VyeVByb3ZpZGVyLnR5cGUgPT0gXCJXZWJNYXBTZXJ2aWNlSW1hZ2VyeVByb3ZpZGVyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0VXJsID0gdXJsLnNwbGl0KCdhcmNnaXMnKVswXSArICdhcmNnaXMvcmVzdCcgKyB1cmwuc3BsaXQoJ2FyY2dpcycpWzFdLnNwbGl0KCdNYXBTZXJ2ZXInKVswXSArIFwiTWFwU2VydmVyL2xheWVycz9mPXBqc29uXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgbGF5ZXJzPVtdO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0gdGhpcy5DYXJ0ZXNpYW4yVG9XR1M4NChlYXJ0aC5jem0udmlld2VyLCBjbGljay5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICBsZXQgYnVmZmVyQ29vcmRpbmF0ZXMgPSB0aGlzLkJ1ZmZlcihbcG9zaXRpb24ubG9uLCBwb3NpdGlvbi5sYXRdLCAxKTtcclxuICAgICAgICAgICAgICAgIGxldCBhZGRyID0gdGhpcy5HZXRXRlNVcmwoY3ptT2JqZWN0Lnhic2pJbWFnZXJ5UHJvdmlkZXIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHR5cGVOYW1lID0gdXJsLnNwbGl0KCcvTWFwU2VydmVyJylbMF0uc3BsaXQoJ3NlcnZpY2VzLycpWzFdO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuaHR0cEZ1bmNBKGN6bU9iamVjdCwgdHlwZU5hbWUsIGJ1ZmZlckNvb3JkaW5hdGVzLCBhZGRyLCByZXF1ZXN0VXJsLCAocmVzTGlzdCwgZ2VvbWV0cnlMaXN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhpZ2hMaWdodC5lbnRpdGllcy52YWx1ZXMgJiYgaGlnaExpZ2h0LmVudGl0aWVzLnZhbHVlcy5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzTGlzdC5sZW5ndGggPiAwICYmIGdlb21ldHJ5TGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnZW9tZXRyeUxpc3RbMF0uZ2VvbWV0cnkudHlwZSA9PSBcIlBvaW50XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENlc2l1bS5HZW9Kc29uRGF0YVNvdXJjZS5sb2FkKGdlb21ldHJ5TGlzdFswXSkudGhlbihkYXRhU291cmNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlLmVudGl0aWVzLnZhbHVlcy5mb3JFYWNoKGVudGl0eSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eS5iaWxsYm9hcmQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkucG9pbnQgPSBuZXcgQ2VzaXVtLlBvaW50R3JhcGhpY3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBDZXNpdW0uQ29sb3IuQVFVQSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBpeGVsU2l6ZTogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFtcFRvR3JvdW5kOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2hMaWdodC5lbnRpdGllcy5hZGQoZW50aXR5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGdlb21ldHJ5TGlzdFswXS5nZW9tZXRyeS50eXBlID09IFwiTGluZVN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDZXNpdW0uR2VvSnNvbkRhdGFTb3VyY2UubG9hZChnZW9tZXRyeUxpc3RbMF0pLnRoZW4oZGF0YVNvdXJjZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZS5lbnRpdGllcy52YWx1ZXMuZm9yRWFjaChlbnRpdHkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkucG9seWxpbmUud2lkdGggPSAxMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkucG9seWxpbmUuY2xhbXBUb0dyb3VuZCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5LnBvbHlsaW5lLm1hdGVyaWFsID0gbmV3IENlc2l1bS5Qb2x5bGluZUdsb3dNYXRlcmlhbFByb3BlcnR5KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb3dQb3dlcjogMC4yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IENlc2l1bS5Db2xvci5CTFVFXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWdoTGlnaHQuZW50aXRpZXMuYWRkKGVudGl0eSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENlc2l1bS5HZW9Kc29uRGF0YVNvdXJjZS5sb2FkKGdlb21ldHJ5TGlzdFswXSkudGhlbihkYXRhU291cmNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlLmVudGl0aWVzLnZhbHVlcy5mb3JFYWNoKGVudGl0eSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2hMaWdodC5lbnRpdGllcy5hZGQoZW50aXR5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlc0xpc3RbMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LCBDZXNpdW0uU2NyZWVuU3BhY2VFdmVudFR5cGUuTEVGVF9DTElDSylcclxuICAgIH1cclxuICAgIGh0dHBGdW5jQShjem1PYmplY3QsIHR5cGVOYW1lLCBidWZmZXJDb29yZGluYXRlcywgYWRkciwgcmVxdWVzdFVybCwgY2FsbGJhY2spIHtcclxuICAgICAgICBsZXQgcmVzTGlzdHMgPSBbXVxyXG4gICAgICAgIGxldCBnZW9tZXRyeUxpc3RzID0gW11cclxuICAgICAgICB0aGlzLmh0dHBGdW5jQihyZXF1ZXN0VXJsLCByZXMgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzLmxheWVycyA9PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgICAgICAgICAgaWYgKGN6bU9iamVjdC54YnNqSW1hZ2VyeVByb3ZpZGVyLnR5cGUgPT0gXCJXZWJNYXBUaWxlU2VydmljZUltYWdlcnlQcm92aWRlclwiKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlcy5sYXllcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gcmVzLmxheWVyc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcXVlcnkgPSBgJHthZGRyfWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKyBgdHlwZW5hbWU9JHt0eXBlTmFtZX06JHtpdGVtLm5hbWV9JkZpbHRlcj1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICsgYDxvZ2M6RmlsdGVyPjxvZ2M6SW50ZXJzZWN0cz48b2djOlByb3BlcnR5TmFtZT5TaGFwZTwvb2djOlByb3BlcnR5TmFtZT5gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICsgYDxnbWw6UG9seWdvbiBzcnNOYW1lPVwidXJuOngtb2djOmRlZjpjcnM6RVBTRzo0MzI2XCI+PGdtbDpvdXRlckJvdW5kYXJ5SXM+PGdtbDpMaW5lYXJSaW5nPmBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKyBgPGdtbDpjb29yZGluYXRlcz4ke2J1ZmZlckNvb3JkaW5hdGVzfTwvZ21sOmNvb3JkaW5hdGVzPmBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKyBgPC9nbWw6TGluZWFyUmluZz48L2dtbDpvdXRlckJvdW5kYXJ5SXM+PC9nbWw6UG9seWdvbj48L29nYzpJbnRlcnNlY3RzPjwvb2djOkZpbHRlcj5gXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5odHRwRnVuYyhxdWVyeSwgZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IGVyci5lcnJvci50ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRlYnVnZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBGZWF0dXJlQ29sbGVjdGlvbiA9IHRoaXMueG1sMkpzb24odGhpcy5zdHJpbmdUb1htbChyZXMpKVsnRmVhdHVyZUNvbGxlY3Rpb24nXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEZlYXR1cmVDb2xsZWN0aW9uID09IHVuZGVmaW5lZCkgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChGZWF0dXJlQ29sbGVjdGlvblsnZmVhdHVyZU1lbWJlciddKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoRmVhdHVyZUNvbGxlY3Rpb25bJ2ZlYXR1cmVNZW1iZXInXS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJvcGVydGllcyA9IEZlYXR1cmVDb2xsZWN0aW9uWydmZWF0dXJlTWVtYmVyJ11bMF1baXRlbS5uYW1lXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcm9wZXJ0eUxpc3QgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBnZW9qc29uID0ge31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkZWJ1Z2dlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzID09IHVuZGVmaW5lZCB8fCBwcm9wZXJ0aWVzID09IG51bGwpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKS5tYXAoa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleSAhPT0gXCJTaGFwZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eUxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZToga2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwcm9wZXJ0aWVzW2tleV0udmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllc1trZXldLk11bHRpU3VyZmFjZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3NMaXN0ID0gcHJvcGVydGllc1trZXldLk11bHRpU3VyZmFjZS5zdXJmYWNlTWVtYmVyLlBvbHlnb24uZXh0ZXJpb3IuTGluZWFyUmluZy5wb3NMaXN0LnZhbHVlLnNwbGl0KFwiIFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NMaXN0LnNoaWZ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxpc3QgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zTGlzdC5sZW5ndGg7IGkgKz0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0LnB1c2goW3Bvc0xpc3RbaV0sIHBvc0xpc3RbaSArIDFdXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvanNvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJGZWF0dXJlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkxpbmVTdHJpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBsaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHByb3BlcnRpZXNba2V5XS5Qb2ludCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3NMaXN0ID0gcHJvcGVydGllc1trZXldLlBvaW50LnBvcy52YWx1ZS5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvanNvbiA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkZlYXR1cmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUG9pbnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBwb3NMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHByb3BlcnRpZXNba2V5XS5NdWx0aUN1cnZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvc0xpc3QgPSBwcm9wZXJ0aWVzW2tleV0uTXVsdGlDdXJ2ZS5jdXJ2ZU1lbWJlci5MaW5lU3RyaW5nLnBvc0xpc3QudmFsdWUuc3BsaXQoXCIgXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGlzdCA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3NMaXN0Lmxlbmd0aDsgaSArPSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QucHVzaChbcG9zTGlzdFtpXSwgcG9zTGlzdFtpICsgMV1dKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9qc29uID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiRmVhdHVyZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJMaW5lU3RyaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlczogbGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzTGlzdHMucHVzaChwcm9wZXJ0eUxpc3QpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnlMaXN0cy5wdXNoKGdlb2pzb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzTGlzdHMsIGdlb21ldHJ5TGlzdHMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcm9wZXJ0aWVzID0gRmVhdHVyZUNvbGxlY3Rpb25bJ2ZlYXR1cmVNZW1iZXInXVtpdGVtLm5hbWVdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByb3BlcnR5TGlzdCA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGdlb2pzb24gPSB7fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRlYnVnZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnRpZXMgPT0gdW5kZWZpbmVkIHx8IHByb3BlcnRpZXMgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHByb3BlcnRpZXMpLm1hcChrZXkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ICE9PSBcIlNoYXBlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5TGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBrZXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHByb3BlcnRpZXNba2V5XS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzW2tleV0uTXVsdGlTdXJmYWNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvc0xpc3QgPSBwcm9wZXJ0aWVzW2tleV0uTXVsdGlTdXJmYWNlLnN1cmZhY2VNZW1iZXIuUG9seWdvbi5leHRlcmlvci5MaW5lYXJSaW5nLnBvc0xpc3QudmFsdWUuc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc0xpc3Quc2hpZnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGlzdCA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3NMaXN0Lmxlbmd0aDsgaSArPSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QucHVzaChbcG9zTGlzdFtpXSwgcG9zTGlzdFtpICsgMV1dKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9qc29uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkZlYXR1cmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiTGluZVN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvcGVydGllc1trZXldLlBvaW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvc0xpc3QgPSBwcm9wZXJ0aWVzW2tleV0uUG9pbnQucG9zLnZhbHVlLnNwbGl0KFwiIFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9qc29uID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiRmVhdHVyZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQb2ludFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IHBvc0xpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvcGVydGllc1trZXldLk11bHRpQ3VydmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9zTGlzdCA9IHByb3BlcnRpZXNba2V5XS5NdWx0aUN1cnZlLmN1cnZlTWVtYmVyLkxpbmVTdHJpbmcucG9zTGlzdC52YWx1ZS5zcGxpdChcIiBcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsaXN0ID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvc0xpc3QubGVuZ3RoOyBpICs9IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKFtwb3NMaXN0W2ldLCBwb3NMaXN0W2kgKyAxXV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb2pzb24gPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJGZWF0dXJlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkxpbmVTdHJpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBsaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNMaXN0cy5wdXNoKHByb3BlcnR5TGlzdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeUxpc3RzLnB1c2goZ2VvanNvbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXNMaXN0cywgZ2VvbWV0cnlMaXN0cylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY3ptT2JqZWN0Lnhic2pJbWFnZXJ5UHJvdmlkZXIudHlwZSA9PSBcIldlYk1hcFNlcnZpY2VJbWFnZXJ5UHJvdmlkZXJcIikge1xyXG4gICAgICAgICAgICAgICAgbGV0IGxsaXN0ID0gY3ptT2JqZWN0Lnhic2pJbWFnZXJ5UHJvdmlkZXIuV2ViTWFwU2VydmljZUltYWdlcnlQcm92aWRlci5sYXllcnMuc3BsaXQoXCIsXCIpXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gbGxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnemhlbGlqaWNpbmUnKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSByZXMubGF5ZXJzW3Jlcy5sYXllcnMubGVuZ3RoIC0gMSAtIGxsaXN0W2ldXTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpdGVtLm5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHF1ZXJ5ID0gYCR7YWRkcn1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICsgYHR5cGVuYW1lPSR7dHlwZU5hbWV9OiR7aXRlbS5uYW1lfSZGaWx0ZXI9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICArIGA8b2djOkZpbHRlcj48b2djOkludGVyc2VjdHM+PG9nYzpQcm9wZXJ0eU5hbWU+U2hhcGU8L29nYzpQcm9wZXJ0eU5hbWU+YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICArIGA8Z21sOlBvbHlnb24gc3JzTmFtZT1cInVybjp4LW9nYzpkZWY6Y3JzOkVQU0c6NDMyNlwiPjxnbWw6b3V0ZXJCb3VuZGFyeUlzPjxnbWw6TGluZWFyUmluZz5gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICsgYDxnbWw6Y29vcmRpbmF0ZXM+JHtidWZmZXJDb29yZGluYXRlc308L2dtbDpjb29yZGluYXRlcz5gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICsgYDwvZ21sOkxpbmVhclJpbmc+PC9nbWw6b3V0ZXJCb3VuZGFyeUlzPjwvZ21sOlBvbHlnb24+PC9vZ2M6SW50ZXJzZWN0cz48L29nYzpGaWx0ZXI+YFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0ubmFtZSwgcXVlcnkpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5odHRwUmVxKCdnZXQnLCBxdWVyeSkudGhlbigpLmNhdGNoKChlcnI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaHR0cEZ1bmMocXVlcnksIGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNMaXN0cy5sZW5ndGggPiAwKSByZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IGVyci5lcnJvci50ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBGZWF0dXJlQ29sbGVjdGlvbiA9IHRoaXMueG1sMkpzb24odGhpcy5zdHJpbmdUb1htbChyZXMpKVsnRmVhdHVyZUNvbGxlY3Rpb24nXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEZlYXR1cmVDb2xsZWN0aW9uID09IHVuZGVmaW5lZCkgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChGZWF0dXJlQ29sbGVjdGlvblsnZmVhdHVyZU1lbWJlciddKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoRmVhdHVyZUNvbGxlY3Rpb25bJ2ZlYXR1cmVNZW1iZXInXS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJvcGVydGllcyA9IEZlYXR1cmVDb2xsZWN0aW9uWydmZWF0dXJlTWVtYmVyJ11bMF1baXRlbS5uYW1lXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcm9wZXJ0eUxpc3QgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBnZW9qc29uID0ge31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllcyA9PSB1bmRlZmluZWQgfHwgcHJvcGVydGllcyA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMocHJvcGVydGllcykubWFwKGtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXkgIT09IFwiU2hhcGVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGtleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcHJvcGVydGllc1trZXldLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnRpZXNba2V5XS5NdWx0aVN1cmZhY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9zTGlzdCA9IHByb3BlcnRpZXNba2V5XS5NdWx0aVN1cmZhY2Uuc3VyZmFjZU1lbWJlci5Qb2x5Z29uLmV4dGVyaW9yLkxpbmVhclJpbmcucG9zTGlzdC52YWx1ZS5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zTGlzdC5zaGlmdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsaXN0ID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvc0xpc3QubGVuZ3RoOyBpICs9IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKFtwb3NMaXN0W2ldLCBwb3NMaXN0W2kgKyAxXV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb2pzb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiRmVhdHVyZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJMaW5lU3RyaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlczogbGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9wZXJ0aWVzW2tleV0uUG9pbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9zTGlzdCA9IHByb3BlcnRpZXNba2V5XS5Qb2ludC5wb3MudmFsdWUuc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb2pzb24gPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJGZWF0dXJlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBvaW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlczogcG9zTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9wZXJ0aWVzW2tleV0uTXVsdGlDdXJ2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3NMaXN0ID0gcHJvcGVydGllc1trZXldLk11bHRpQ3VydmUuY3VydmVNZW1iZXIuTGluZVN0cmluZy5wb3NMaXN0LnZhbHVlLnNwbGl0KFwiIFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxpc3QgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zTGlzdC5sZW5ndGg7IGkgKz0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0LnB1c2goW3Bvc0xpc3RbaV0sIHBvc0xpc3RbaSArIDFdXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvanNvbiA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkZlYXR1cmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiTGluZVN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc0xpc3RzLnB1c2gocHJvcGVydHlMaXN0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5TGlzdHMucHVzaChnZW9qc29uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlc0xpc3RzLCBnZW9tZXRyeUxpc3RzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJvcGVydGllcyA9IEZlYXR1cmVDb2xsZWN0aW9uWydmZWF0dXJlTWVtYmVyJ11baXRlbS5uYW1lXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcm9wZXJ0eUxpc3QgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBnZW9qc29uID0ge31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnRpZXMgPT0gdW5kZWZpbmVkIHx8IHByb3BlcnRpZXMgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHByb3BlcnRpZXMpLm1hcChrZXkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ICE9PSBcIlNoYXBlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5TGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBrZXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHByb3BlcnRpZXNba2V5XS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzW2tleV0uTXVsdGlTdXJmYWNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvc0xpc3QgPSBwcm9wZXJ0aWVzW2tleV0uTXVsdGlTdXJmYWNlLnN1cmZhY2VNZW1iZXIuUG9seWdvbi5leHRlcmlvci5MaW5lYXJSaW5nLnBvc0xpc3QudmFsdWUuc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc0xpc3Quc2hpZnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGlzdCA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3NMaXN0Lmxlbmd0aDsgaSArPSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QucHVzaChbcG9zTGlzdFtpXSwgcG9zTGlzdFtpICsgMV1dKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9qc29uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkZlYXR1cmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiTGluZVN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvcGVydGllc1trZXldLlBvaW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvc0xpc3QgPSBwcm9wZXJ0aWVzW2tleV0uUG9pbnQucG9zLnZhbHVlLnNwbGl0KFwiIFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9qc29uID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiRmVhdHVyZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQb2ludFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IHBvc0xpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvcGVydGllc1trZXldLk11bHRpQ3VydmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9zTGlzdCA9IHByb3BlcnRpZXNba2V5XS5NdWx0aUN1cnZlLmN1cnZlTWVtYmVyLkxpbmVTdHJpbmcucG9zTGlzdC52YWx1ZS5zcGxpdChcIiBcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsaXN0ID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvc0xpc3QubGVuZ3RoOyBpICs9IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKFtwb3NMaXN0W2ldLCBwb3NMaXN0W2kgKyAxXV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb2pzb24gPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJGZWF0dXJlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkxpbmVTdHJpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBsaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNMaXN0cy5wdXNoKHByb3BlcnR5TGlzdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeUxpc3RzLnB1c2goZ2VvanNvbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXNMaXN0cywgZ2VvbWV0cnlMaXN0cylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMueG1sMkpzb24odGhpcy5zdHJpbmdUb1htbChyZXMpKSlcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGh0dHBGdW5jQihyZXF1ZXN0VXJsLCBjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuaHR0cFJlcSgnZ2V0JywgcmVxdWVzdFVybCkudGhlbigocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgY2FsbGJhY2socmVzKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBodHRwRnVuYyhxdWVyeSwgY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLmh0dHBSZXEoJ2dldCcsIHF1ZXJ5KS50aGVuKCkuY2F0Y2goKGVycjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKGVycilcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcGlja01vZGVsKGVhcnRoLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGxldCBoYW5kbGVyID0gbmV3IENlc2l1bS5TY3JlZW5TcGFjZUV2ZW50SGFuZGxlcihlYXJ0aC5jem0uc2NlbmUuY2FudmFzKTtcclxuICAgICAgICBoYW5kbGVyLnNldElucHV0QWN0aW9uKChjbGljaykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWVhcnRoLmVwc3BsYW5ldC5hbGxvd0NsaWNrKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjbGljaylcclxuICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0gZWFydGguY3ptLnZpZXdlci5zY2VuZS5waWNrUG9zaXRpb24oY2xpY2sucG9zaXRpb24pXHJcbiAgICAgICAgICAgIGxldCBwaWNrT2JqID0gZWFydGguY3ptLnZpZXdlci5zY2VuZS5waWNrKGNsaWNrLnBvc2l0aW9uKVxyXG4gICAgICAgICAgICBpZiAoIUNlc2l1bS5kZWZpbmVkKHBpY2tPYmopIHx8ICFwaWNrT2JqLmdldFByb3BlcnR5TmFtZXMpIHtcclxuICAgICAgICAgICAgICAgIGVhcnRoLnNjZW5lVHJlZS4kcmVmcy5waW4xLmN6bU9iamVjdC5jdXN0b21Qcm9wID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImRzYWRhZFwiLCBwaWNrT2JqKVxyXG4gICAgICAgICAgICBsZXQgY2FydG9ncmFwaGljID0gQ2VzaXVtLkNhcnRvZ3JhcGhpYy5mcm9tQ2FydGVzaWFuKHBvc2l0aW9uKVxyXG4gICAgICAgICAgICAvLyBlYXJ0aC5zY2VuZVRyZWUuJHJlZnMucGluMS5jem1PYmplY3QuY3VzdG9tUHJvcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBlYXJ0aC5zY2VuZVRyZWUuJHJlZnMucGluMS5jem1PYmplY3QucG9zaXRpb24gPSBbY2FydG9ncmFwaGljLmxvbmdpdHVkZSwgY2FydG9ncmFwaGljLmxhdGl0dWRlLCBjYXJ0b2dyYXBoaWMuaGVpZ2h0XVxyXG4gICAgICAgICAgICBsZXQgUHJvcGVydHlOYW1lcyA9IHBpY2tPYmouZ2V0UHJvcGVydHlOYW1lcygpXHJcbiAgICAgICAgICAgIGxldCBwcm9wZXJ0eUxpc3QgPSBbXVxyXG4gICAgICAgICAgICBQcm9wZXJ0eU5hbWVzLmZvckVhY2gocHJvcGVydHkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcHJvcGVydHlMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwaWNrT2JqLmdldFByb3BlcnR5KHByb3BlcnR5KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY2FsbGJhY2socHJvcGVydHlMaXN0LCBwaWNrT2JqKVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLkNhcnRlc2lhbjJUb0NhcnRvZ3JhcGhpYyhlYXJ0aC5jem0udmlld2VyLCBwb3NpdGlvbikpXHJcbiAgICAgICAgfSwgQ2VzaXVtLlNjcmVlblNwYWNlRXZlbnRUeXBlLkxFRlRfQ0xJQ0spXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlsY/luZXlnZDmoIfovaznu4/nuqzluqblnZDmoIdcclxuICAgICAqIEBwYXJhbSB2aWV3ZXIgXHJcbiAgICAgKiBAcGFyYW0gcG9zaXRpb24g5bGP5bmV5Z2Q5qCHY2FydGVzaWFuMlxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIENhcnRlc2lhbjJUb1dHUzg0KHZpZXdlciwgcG9zaXRpb24pIHtcclxuICAgICAgICB2YXIgcmF5ID0gdmlld2VyLmNhbWVyYS5nZXRQaWNrUmF5KHBvc2l0aW9uKTtcclxuICAgICAgICB2YXIgY2FydGVzaWFuID0gdmlld2VyLnNjZW5lLmdsb2JlLnBpY2socmF5LCB2aWV3ZXIuc2NlbmUpO1xyXG4gICAgICAgIHZhciBjYXJ0b2dyYXBoaWMgPSBDZXNpdW0uQ2FydG9ncmFwaGljLmZyb21DYXJ0ZXNpYW4oY2FydGVzaWFuKTtcclxuICAgICAgICBsZXQgbG9uID0gQ2VzaXVtLk1hdGgudG9EZWdyZWVzKGNhcnRvZ3JhcGhpYy5sb25naXR1ZGUpXHJcbiAgICAgICAgbGV0IGxhdCA9IENlc2l1bS5NYXRoLnRvRGVncmVlcyhjYXJ0b2dyYXBoaWMubGF0aXR1ZGUpXHJcbiAgICAgICAgcmV0dXJuIHsgbG9uOiBsb24sIGxhdDogbGF0IH1cclxuICAgIH1cclxuXHJcbiAgICBDYXJ0ZXNpYW4yVG9DYXJ0b2dyYXBoaWModmlld2VyLCBwb3NpdGlvbikge1xyXG4gICAgICAgIHZhciByYXkgPSB2aWV3ZXIuY2FtZXJhLmdldFBpY2tSYXkocG9zaXRpb24pO1xyXG4gICAgICAgIHZhciBjYXJ0ZXNpYW4gPSB2aWV3ZXIuc2NlbmUuZ2xvYmUucGljayhyYXksIHZpZXdlci5zY2VuZSk7XHJcbiAgICAgICAgdmFyIGNhcnRvZ3JhcGhpYyA9IENlc2l1bS5DYXJ0b2dyYXBoaWMuZnJvbUNhcnRlc2lhbihjYXJ0ZXNpYW4pO1xyXG4gICAgICAgIHJldHVybiBbY2FydG9ncmFwaGljLmxvbmdpdHVkZSwgY2FydG9ncmFwaGljLmxhdGl0dWRlLCBjYXJ0b2dyYXBoaWMuaGVpZ2h0XVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmi7zmjqXnlKjkuo53ZnPmn6Xor6LnmoR1cmxcclxuICAgICAqIEBwYXJhbSBXTVRTSW1hZ2VyeVByb3ZpZGVyIFxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIEdldFdGU1VybChJbWFnZXJ5UHJvdmlkZXIpIHtcclxuICAgICAgICBsZXQgV0ZTVXJsID0gXCJcIjtcclxuICAgICAgICBpZiAoSW1hZ2VyeVByb3ZpZGVyLnR5cGUgPT0gXCJXZWJNYXBUaWxlU2VydmljZUltYWdlcnlQcm92aWRlclwiKSB7XHJcbiAgICAgICAgICAgIGxldCBXTVRTSW1hZ2VyeVByb3ZpZGVyID0gSW1hZ2VyeVByb3ZpZGVyLldlYk1hcFRpbGVTZXJ2aWNlSW1hZ2VyeVByb3ZpZGVyO1xyXG4gICAgICAgICAgICBpZiAoV01UU0ltYWdlcnlQcm92aWRlci51cmwuaW5kZXhPZignYXJjZ2lzJykgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBXRlNVcmwgPSBXTVRTSW1hZ2VyeVByb3ZpZGVyLnVybC5zcGxpdChcInJlc3RcIilbMF0gKyBXTVRTSW1hZ2VyeVByb3ZpZGVyLnVybC5zcGxpdChcInJlc3QvXCIpWzFdLnNwbGl0KFwiTWFwU2VydmVyXCIpWzBdICsgXCJNYXBTZXJ2ZXIvV0ZTU2VydmVyP3JlcXVlc3Q9R2V0RmVhdHVyZSZzZXJ2aWNlPVdGUyZ2ZXJzaW9uPTEuMS4wJlwiO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKFdNVFNJbWFnZXJ5UHJvdmlkZXIudXJsLmluZGV4T2YoJ2dlb3NlcnZlcicpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgV0ZTVXJsID0gV01UU0ltYWdlcnlQcm92aWRlci51cmwuc3BsaXQoXCJnd2NcIilbMF0gKyBXTVRTSW1hZ2VyeVByb3ZpZGVyLmxheWVyLnNwbGl0KFwiOlwiKVswXSArIFwiL293cz9zZXJ2aWNlPVdGUyZ2ZXJzaW9uPTEuMC4wJnJlcXVlc3Q9R2V0RmVhdHVyZSZ0eXBlTmFtZT1cIiArIFdNVFNJbWFnZXJ5UHJvdmlkZXIubGF5ZXIgKyBcIiZtYXhGZWF0dXJlcz0xJm91dHB1dEZvcm1hdD1qc29uJmZpbHRlcj1cIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChJbWFnZXJ5UHJvdmlkZXIudHlwZSA9PSBcIldlYk1hcFNlcnZpY2VJbWFnZXJ5UHJvdmlkZXJcIikge1xyXG4gICAgICAgICAgICBsZXQgV2ViTWFwU2VydmljZUltYWdlcnlQcm92aWRlciA9IEltYWdlcnlQcm92aWRlci5XZWJNYXBTZXJ2aWNlSW1hZ2VyeVByb3ZpZGVyO1xyXG4gICAgICAgICAgICBpZiAoV2ViTWFwU2VydmljZUltYWdlcnlQcm92aWRlci51cmwuaW5kZXhPZignYXJjZ2lzJykgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBXRlNVcmwgPSBXZWJNYXBTZXJ2aWNlSW1hZ2VyeVByb3ZpZGVyLnVybC5zcGxpdChcIk1hcFNlcnZlclwiKVswXSArIFwiTWFwU2VydmVyL1dGU1NlcnZlcj9yZXF1ZXN0PUdldEZlYXR1cmUmc2VydmljZT1XRlMmdmVyc2lvbj0xLjEuMCZcIjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChXZWJNYXBTZXJ2aWNlSW1hZ2VyeVByb3ZpZGVyLnVybC5pbmRleE9mKCdnZW9zZXJ2ZXInKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIFdGU1VybCA9IFdlYk1hcFNlcnZpY2VJbWFnZXJ5UHJvdmlkZXIudXJsLnNwbGl0KFwid21zXCIpWzBdICsgXCIvb3dzP3NlcnZpY2U9V0ZTJnZlcnNpb249MS4wLjAmcmVxdWVzdD1HZXRGZWF0dXJlJnR5cGVOYW1lPVwiICsgV2ViTWFwU2VydmljZUltYWdlcnlQcm92aWRlci5sYXllcnMgKyBcIiZtYXhGZWF0dXJlcz0xJm91dHB1dEZvcm1hdD1qc29uJmZpbHRlcj1cIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFdGU1VybFxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSBwb3NpdGlvbiBbbG9uLGxhdF1cclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBCdWZmZXIocG9zaXRpb24sIG1ldGVycykge1xyXG4gICAgICAgIGxldCBwb2ludEYgPSB0dXJmLnBvaW50KHBvc2l0aW9uKTtcclxuICAgICAgICBsZXQgYnVmZmVyZWQgPSB0dXJmLmJ1ZmZlcihwb2ludEYsIG1ldGVycywgJ21ldGVycycpO1xyXG4gICAgICAgIGxldCBjb29yZGluYXRlcyA9IGJ1ZmZlcmVkLmdlb21ldHJ5LmNvb3JkaW5hdGVzO1xyXG4gICAgICAgIGxldCBwb2ludHMgPSBjb29yZGluYXRlc1swXTtcclxuICAgICAgICBsZXQgZGVncmVlc0xpc3RTdHIgPSB0aGlzLnBvaW50c1RvRGVncmVlc0FycmF5KHBvaW50cyk7XHJcbiAgICAgICAgcmV0dXJuIGRlZ3JlZXNMaXN0U3RyXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHBvaW50cyDmoLzlvI/ovazmjaJcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwb2ludHNUb0RlZ3JlZXNBcnJheShwb2ludHMpIHtcclxuICAgICAgICBsZXQgZGVncmVlc0FycmF5ID0gXCJcIjtcclxuICAgICAgICBwb2ludHMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBkZWdyZWVzQXJyYXkgKz0gaXRlbVswXSArIFwiLFwiICsgaXRlbVsxXSArIFwiIFwiXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGRlZ3JlZXNBcnJheTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5riF6Zmk6auY5LquXHJcbiAgICAgKi9cclxuICAgIENsZWFySGlnaExpZ2h0KCkge1xyXG4gICAgICAgIC8vIGRlYnVnZ2VyXHJcbiAgICAgICAgaGlnaExpZ2h0LmVudGl0aWVzLnJlbW92ZUFsbCgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiB4bWzovaxqc29uXHJcbiAgICAgKiBAcGFyYW0geG1sIFxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHhtbDJKc29uKHhtbCkge1xyXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgcmV0dXJuIG9iamVjdFxyXG4gICAgICAgIHZhciBvYmogPSB7fTtcclxuICAgICAgICBpZiAoeG1sLm5vZGVUeXBlID09IDEpIHsgLy8gZWxlbWVudFxyXG4gICAgICAgICAgICAvLyBkbyBhdHRyaWJ1dGVzXHJcbiAgICAgICAgICAgIGlmICh4bWwuYXR0cmlidXRlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBvYmpbXCJAYXR0cmlidXRlc1wiXSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB4bWwuYXR0cmlidXRlcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGRlYnVnZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGF0dHJpYnV0ZSA9IHhtbC5hdHRyaWJ1dGVzLml0ZW0oaik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZS5ub2RlTmFtZS5pbmRleE9mKFwiOlwiKSA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpbXCJAYXR0cmlidXRlc1wiXVthdHRyaWJ1dGUubm9kZU5hbWVdID0gYXR0cmlidXRlLm5vZGVWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpbXCJAYXR0cmlidXRlc1wiXVthdHRyaWJ1dGUubm9kZU5hbWUuc3BsaXQoXCI6XCIpWzFdXSA9IGF0dHJpYnV0ZS5ub2RlVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoeG1sLm5vZGVUeXBlID09IDMpIHsgLy8gdGV4dFxyXG4gICAgICAgICAgICBvYmogPSB4bWwubm9kZVZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBkbyBjaGlsZHJlblxyXG4gICAgICAgIGlmICh4bWwuaGFzQ2hpbGROb2RlcygpKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgeG1sLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBpdGVtID0geG1sLmNoaWxkTm9kZXMuaXRlbShpKTtcclxuICAgICAgICAgICAgICAgIHZhciBub2RlTmFtZSA9IGl0ZW0ubm9kZU5hbWU7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChvYmpbbm9kZU5hbWUuc3BsaXQoXCI6XCIpWzFdXSkgPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlTmFtZS5zcGxpdChcIjpcIilbMV0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ialsndmFsdWUnXSA9IHRoaXMueG1sMkpzb24oaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqW25vZGVOYW1lLnNwbGl0KFwiOlwiKVsxXV0gPSB0aGlzLnhtbDJKc29uKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKG9ialtub2RlTmFtZS5zcGxpdChcIjpcIilbMV1dLmxlbmd0aCkgPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2xkID0gb2JqW25vZGVOYW1lLnNwbGl0KFwiOlwiKVsxXV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ialtub2RlTmFtZS5zcGxpdChcIjpcIilbMV1dID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ialtub2RlTmFtZS5zcGxpdChcIjpcIilbMV1dLnB1c2gob2xkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqW25vZGVOYW1lLnNwbGl0KFwiOlwiKVsxXV0ucHVzaCh0aGlzLnhtbDJKc29uKGl0ZW0pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlrZfnrKbkuLLovax4bWxcclxuICAgICAqIEBwYXJhbSB4bWxTdHJpbmcgXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgc3RyaW5nVG9YbWwoeG1sU3RyaW5nKSB7XHJcbiAgICAgICAgdmFyIHhtbERvYztcclxuICAgICAgICBpZiAodHlwZW9mIHhtbFN0cmluZyA9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIC8vRkZcclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZURvY3VtZW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xyXG4gICAgICAgICAgICAgICAgeG1sRG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyh4bWxTdHJpbmcsIFwidGV4dC94bWxcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHhtbERvYyA9IHhtbFN0cmluZztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHhtbERvYztcclxuICAgIH1cclxufSJdfQ==