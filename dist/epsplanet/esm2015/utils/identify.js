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
    httpFuncC() {
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
            callback(propertyList, handler);
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
        debugger;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpZnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9lcHNwbGFuZXQvdXRpbHMvaWRlbnRpZnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUcxQyxPQUFPLElBQUksTUFBTSxNQUFNLENBQUE7OztBQUN2QixJQUFJLGFBQWEsR0FBRyxFQUFFLENBQUE7QUFDdEIsSUFBSSxhQUFhLEdBQUcsRUFBRSxDQUFBO0FBQ3RCLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQTtBQUNoQixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUE7QUFNcEIsTUFBTSxPQUFPLFFBQVE7SUFFakIsWUFBb0IsSUFBb0I7UUFBcEIsU0FBSSxHQUFKLElBQUksQ0FBZ0I7UUFHcEMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUE7UUFDOUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUE7UUFDbEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUMsRUFBRSxDQUFBO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBQyxLQUFLLENBQUM7SUFDMUMsQ0FBQztJQUNELE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRztRQUNmLElBQUksTUFBTSxJQUFJLE1BQU0sRUFBRTtZQUNsQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUE7U0FDeEQ7UUFDRCxJQUFJLE1BQU0sSUFBSSxLQUFLLEVBQUU7WUFDakIsT0FBTyxJQUFJLENB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LEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7YUFDMUQ7U0FDSjthQUNJO1lBQ0QsTUFBTSxHQUFHLFNBQVMsQ0FBQztTQUN0QjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7O2dFQTk1QlEsUUFBUTtnREFBUixRQUFRLFdBQVIsUUFBUSxtQkFGTCxNQUFNO3VGQUVULFFBQVE7Y0FIcEIsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7IEh0dHBSZXFTZXJ2aWNlIH0gZnJvbSAnZXBzZ2lzJ1xyXG5cclxuaW1wb3J0IHR1cmYgZnJvbSAndHVyZidcclxubGV0IHByb3BlcnR5TGlzdHMgPSBbXVxyXG5sZXQgY3ptT2JqZWN0TGlzdCA9IFtdXHJcbmxldCByZXNMaXN0ID0gW11cclxubGV0IGhpZ2hMaWdodCA9IG51bGxcclxuXHJcbi8vIGVhcnRoLmVwc3BsYW5ldC5hbGxvd0NsaWNrID0gZmFsc2U7XHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSWRlbnRpZnkge1xyXG4gICAgZWFydGg7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBSZXFTZXJ2aWNlKSB7XHJcbiAgICAgICAgLy8gZGVidWdnZXJcclxuICAgICAgICAvLyBlYXJ0aC5lcHNwbGFuZXQuYWxsb3dDbGljayA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5lYXJ0aCA9IHdpbmRvd1snZWFydGgnXVxyXG4gICAgICAgIHRoaXMuZWFydGguaW50ZXJhY3Rpb24ucGlja2luZy5lbmFibGVkID0gZmFsc2VcclxuICAgICAgICB0aGlzLmVhcnRoLmludGVyYWN0aW9uLnBpY2tpbmcuaG92ZXJFbmFibGUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuZWFydGguZXBzcGxhbmV0PXt9XHJcbiAgICAgICAgdGhpcy5lYXJ0aC5lcHNwbGFuZXQuYWxsb3dDbGljaz1mYWxzZTtcclxuICAgIH1cclxuICAgIGh0dHBSZXEobWV0aG9kLCB1cmwpIHtcclxuICAgICAgICBpZiAobWV0aG9kID09ICdwb3N0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmh0dHBDbGllbnQucG9zdCh1cmwsIFwiXCIpLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtZXRob2QgPT0gJ2dldCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5odHRwQ2xpZW50LmdldCh1cmwpLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBnZW9zZXJ2ZXLmnI3liqHojrflj5bngrnpgInkvY3nva7opoHntKDlsZ7mgKdcclxuICAgICAqIEBwYXJhbSBjem1PYmplY3QgXHJcbiAgICAgKiBAcGFyYW0gZWFydGgg5Yib5bu655qE5Zyw55CDXHJcbiAgICAgKiBAcGFyYW0gdHlwZSDor4bliKvnsbvlnovvvJrngrnjgIHnur/jgIHpnaIo55uu5YmN5Y+q5pyJ54K5KVxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIOWbnuiwg+WHveaVsFxyXG4gICAgICovXHJcbiAgICBHZXRGZWF0dXJlSW5mbyhjem1PYmplY3QsIGVhcnRoLCB0eXBlLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGlmIChoaWdoTGlnaHQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBoaWdoTGlnaHQgPSBuZXcgQ2VzaXVtLkN1c3RvbURhdGFTb3VyY2UoJ2hpZ2hMaWdodCcpO1xyXG4gICAgICAgICAgICBlYXJ0aC5jem0udmlld2VyLmRhdGFTb3VyY2VzLmFkZChoaWdoTGlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc2NlbmUgPSBlYXJ0aC5jem0uc2NlbmU7XHJcbiAgICAgICAgbGV0IHZpZXdlciA9IGVhcnRoLmN6bS52aWV3ZXI7XHJcbiAgICAgICAgbGV0IFdGU1VybCA9IHRoaXMuR2V0V0ZTVXJsKGN6bU9iamVjdC54YnNqSW1hZ2VyeVByb3ZpZGVyKTtcclxuICAgICAgICBsZXQgaGFuZGxlciA9IG5ldyBDZXNpdW0uU2NyZWVuU3BhY2VFdmVudEhhbmRsZXIoc2NlbmUuY2FudmFzKTtcclxuICAgICAgICBsZXQgZmlsdGVyID0gXCJcIlxyXG5cclxuICAgICAgICBoYW5kbGVyLnNldElucHV0QWN0aW9uKChjbGljaykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWVhcnRoLmVwc3BsYW5ldC5hbGxvd0NsaWNrKSByZXR1cm47XHJcbiAgICAgICAgICAgIGlmICghY3ptT2JqZWN0LnNob3cpIHJldHVybjtcclxuICAgICAgICAgICAgbGV0IHBpY2tPYmogPSBlYXJ0aC5jem0udmlld2VyLnNjZW5lLnBpY2soY2xpY2sucG9zaXRpb24pXHJcbiAgICAgICAgICAgIGlmIChDZXNpdW0uZGVmaW5lZChwaWNrT2JqKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWFydGguc2NlbmVUcmVlLiRyZWZzLnBpbjEuY3ptT2JqZWN0LmN1c3RvbVByb3AgPSBmYWxzZTtcclxuICAgICAgICAgICAgaGlnaExpZ2h0LmVudGl0aWVzLnJlbW92ZUFsbCgpO1xyXG4gICAgICAgICAgICByZXNMaXN0ID0gW107XHJcbiAgICAgICAgICAgIGVhcnRoLnNjZW5lVHJlZS4kcmVmcy5waW4xLmN6bU9iamVjdC5wb3NpdGlvbiA9IHRoaXMuQ2FydGVzaWFuMlRvQ2FydG9ncmFwaGljKHZpZXdlciwgY2xpY2sucG9zaXRpb24pXHJcbiAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9IHRoaXMuQ2FydGVzaWFuMlRvV0dTODQodmlld2VyLCBjbGljay5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgIGxldCBidWZmZXJDb29yZGluYXRlcyA9IHRoaXMuQnVmZmVyKFtwb3NpdGlvbi5sb24sIHBvc2l0aW9uLmxhdF0sIDEwMCk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlID09ICdwb2ludCcpIHtcclxuICAgICAgICAgICAgICAgIGZpbHRlciA9IGA8RmlsdGVyIHhtbG5zPVwiaHR0cDovL3d3dy5vcGVuZ2lzLm5ldC9vZ2NcIiB4bWxuczpnbWw9XCJodHRwOi8vd3d3Lm9wZW5naXMubmV0L2dtbFwiPjxJbnRlcnNlY3RzPjxQcm9wZXJ0eU5hbWU+dGhlX2dlb208L1Byb3BlcnR5TmFtZT48Z21sOm91dGVyQm91bmRhcnlJcz48Z21sOkxpbmVhclJpbmc+PGdtbDpjb29yZGluYXRlcz4ke2J1ZmZlckNvb3JkaW5hdGVzfTwvZ21sOmNvb3JkaW5hdGVzPjwvZ21sOkxpbmVhclJpbmc+PC9nbWw6b3V0ZXJCb3VuZGFyeUlzPjwvSW50ZXJzZWN0cz48L0ZpbHRlcj5gXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9ICdsaW5lJykge1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID0gJ3BvbHlnb24nKSB7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaHR0cFJlcSgncG9zdCcsIFdGU1VybCArIGZpbHRlcikudGhlbigocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuZmVhdHVyZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwcm9wZXJ0aWVzID0gcmVzLmZlYXR1cmVzWzBdLnByb3BlcnRpZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByb3BlcnR5TGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHByb3BlcnRpZXMpLm1hcChrZXkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZToga2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHByb3BlcnRpZXNba2V5XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlMaXN0cy5wdXNoKHByb3BlcnR5TGlzdClcclxuICAgICAgICAgICAgICAgICAgICBjem1PYmplY3RMaXN0LnB1c2goY3ptT2JqZWN0KVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc0xpc3QucHVzaChyZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5aaC5p6c5pyJ5Zu+5bGC6YeN5Y+g77yM5Y+q56ys5LiA5Liq5Zu+5bGC6L+U5Zue5bGe5oCnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNMaXN0Lmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRlYnVnZ2VyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN6bU9iamVjdExpc3RbMF0uX2NpID4gY3ptT2JqZWN0TGlzdFsxXS5fY2kpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3ptT2JqZWN0TGlzdFswXS5fY2kgIT09IGN6bU9iamVjdC5fY2kpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHByb3BlcnR5TGlzdHNbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDZXNpdW0uR2VvSnNvbkRhdGFTb3VyY2UubG9hZChyZXNMaXN0WzBdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZGF0YVNvdXJjZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZS5lbnRpdGllcy52YWx1ZXMuZm9yRWFjaChlbnRpdHkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWdoTGlnaHQuZW50aXRpZXMuYWRkKGVudGl0eSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjem1PYmplY3RMaXN0WzFdLl9jaSAhPT0gY3ptT2JqZWN0Ll9jaSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socHJvcGVydHlMaXN0c1sxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENlc2l1bS5HZW9Kc29uRGF0YVNvdXJjZS5sb2FkKHJlc0xpc3RbMV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihkYXRhU291cmNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlLmVudGl0aWVzLnZhbHVlcy5mb3JFYWNoKGVudGl0eSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2hMaWdodC5lbnRpdGllcy5hZGQoZW50aXR5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHByb3BlcnR5TGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2VzaXVtLkdlb0pzb25EYXRhU291cmNlLmxvYWQocmVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihkYXRhU291cmNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2UuZW50aXRpZXMudmFsdWVzLmZvckVhY2goZW50aXR5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWdoTGlnaHQuZW50aXRpZXMuYWRkKGVudGl0eSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNMaXN0ID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlMaXN0cyA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN6bU9iamVjdExpc3QgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHsgfSlcclxuICAgICAgICB9LCBDZXNpdW0uU2NyZWVuU3BhY2VFdmVudFR5cGUuTEVGVF9DTElDSylcclxuICAgIH1cclxuICAgIEluaXRIYW5kbGVyKCkge1xyXG5cclxuICAgIH1cclxuICAgIC8vYXJjZ2lzXHJcbiAgICBnZXRMYXllcnMoY3ptT2JqZWN0LCBlYXJ0aCwgY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAoaGlnaExpZ2h0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgaGlnaExpZ2h0ID0gbmV3IENlc2l1bS5DdXN0b21EYXRhU291cmNlKCdoaWdoTGlnaHQnKTtcclxuICAgICAgICAgICAgZWFydGguY3ptLnZpZXdlci5kYXRhU291cmNlcy5hZGQoaGlnaExpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGhhbmRsZXIgPSBuZXcgQ2VzaXVtLlNjcmVlblNwYWNlRXZlbnRIYW5kbGVyKGVhcnRoLmN6bS5zY2VuZS5jYW52YXMpO1xyXG4gICAgICAgIGxldCB1cmwgPSBjem1PYmplY3QueGJzakltYWdlcnlQcm92aWRlci5XZWJNYXBUaWxlU2VydmljZUltYWdlcnlQcm92aWRlci51cmwgfHwgY3ptT2JqZWN0Lnhic2pJbWFnZXJ5UHJvdmlkZXIuV2ViTWFwU2VydmljZUltYWdlcnlQcm92aWRlci51cmw7XHJcbiAgICAgICAgbGV0IHJlcXVlc3RVcmwgPSBcIlwiXHJcbiAgICAgICAgaWYgKGN6bU9iamVjdC54YnNqSW1hZ2VyeVByb3ZpZGVyLnR5cGUgPT0gXCJXZWJNYXBUaWxlU2VydmljZUltYWdlcnlQcm92aWRlclwiKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3RVcmwgPSB1cmwuc3BsaXQoJ01hcFNlcnZlcicpWzBdICsgXCJNYXBTZXJ2ZXIvbGF5ZXJzP2Y9cGpzb25cIlxyXG4gICAgICAgIH0gZWxzZSBpZiAoY3ptT2JqZWN0Lnhic2pJbWFnZXJ5UHJvdmlkZXIudHlwZSA9PSBcIldlYk1hcFNlcnZpY2VJbWFnZXJ5UHJvdmlkZXJcIikge1xyXG4gICAgICAgICAgICByZXF1ZXN0VXJsID0gdXJsLnNwbGl0KCdhcmNnaXMnKVswXSArICdhcmNnaXMvcmVzdCcgKyB1cmwuc3BsaXQoJ2FyY2dpcycpWzFdLnNwbGl0KCdNYXBTZXJ2ZXInKVswXSArIFwiTWFwU2VydmVyL2xheWVycz9mPXBqc29uXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGxldCBsYXllcnM9W107XHJcbiAgICAgICAgdGhpcy5odHRwUmVxKCdnZXQnLCByZXF1ZXN0VXJsKS50aGVuKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBkZWJ1Z2dlclxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgIGhhbmRsZXIuc2V0SW5wdXRBY3Rpb24oKGNsaWNrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmxheWVycyA9PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGlmICghZWFydGguZXBzcGxhbmV0LmFsbG93Q2xpY2spIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGlmICghY3ptT2JqZWN0LnNob3cpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGxldCBwaWNrT2JqID0gZWFydGguY3ptLnZpZXdlci5zY2VuZS5waWNrKGNsaWNrLnBvc2l0aW9uKVxyXG4gICAgICAgICAgICAgICAgaWYgKENlc2l1bS5kZWZpbmVkKHBpY2tPYmopKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoaGlnaExpZ2h0KVxyXG4gICAgICAgICAgICAgICAgICAgIGhpZ2hMaWdodC5lbnRpdGllcy5yZW1vdmVBbGwoKTtcclxuICAgICAgICAgICAgICAgIGVhcnRoLnNjZW5lVHJlZS4kcmVmcy5waW4xLmN6bU9iamVjdC5jdXN0b21Qcm9wID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBlYXJ0aC5zY2VuZVRyZWUuJHJlZnMucGluMS5jem1PYmplY3QucG9zaXRpb24gPSB0aGlzLkNhcnRlc2lhbjJUb0NhcnRvZ3JhcGhpYyhlYXJ0aC5jem0udmlld2VyLCBjbGljay5wb3NpdGlvbilcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zaXRpb24gPSB0aGlzLkNhcnRlc2lhbjJUb1dHUzg0KGVhcnRoLmN6bS52aWV3ZXIsIGNsaWNrLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIGxldCBidWZmZXJDb29yZGluYXRlcyA9IHRoaXMuQnVmZmVyKFtwb3NpdGlvbi5sb24sIHBvc2l0aW9uLmxhdF0sIDEpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFkZHIgPSB0aGlzLkdldFdGU1VybChjem1PYmplY3QueGJzakltYWdlcnlQcm92aWRlcik7XHJcbiAgICAgICAgICAgICAgICBsZXQgdHlwZU5hbWUgPSB1cmwuc3BsaXQoJy9NYXBTZXJ2ZXInKVswXS5zcGxpdCgnc2VydmljZXMvJylbMV07XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzTGlzdCA9IFtdXHJcbiAgICAgICAgICAgICAgICBsZXQgZ2VvbWV0cnlMaXN0ID0gW11cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY3ptT2JqZWN0Lnhic2pJbWFnZXJ5UHJvdmlkZXIudHlwZSA9PSBcIldlYk1hcFRpbGVTZXJ2aWNlSW1hZ2VyeVByb3ZpZGVyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlcy5sYXllcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IHJlcy5sYXllcnNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBxdWVyeSA9IGAke2FkZHJ9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBgdHlwZW5hbWU9JHt0eXBlTmFtZX06JHtpdGVtLm5hbWV9JkZpbHRlcj1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArIGA8b2djOkZpbHRlcj48b2djOkludGVyc2VjdHM+PG9nYzpQcm9wZXJ0eU5hbWU+U2hhcGU8L29nYzpQcm9wZXJ0eU5hbWU+YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBgPGdtbDpQb2x5Z29uIHNyc05hbWU9XCJ1cm46eC1vZ2M6ZGVmOmNyczpFUFNHOjQzMjZcIj48Z21sOm91dGVyQm91bmRhcnlJcz48Z21sOkxpbmVhclJpbmc+YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBgPGdtbDpjb29yZGluYXRlcz4ke2J1ZmZlckNvb3JkaW5hdGVzfTwvZ21sOmNvb3JkaW5hdGVzPmBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgYDwvZ21sOkxpbmVhclJpbmc+PC9nbWw6b3V0ZXJCb3VuZGFyeUlzPjwvZ21sOlBvbHlnb24+PC9vZ2M6SW50ZXJzZWN0cz48L29nYzpGaWx0ZXI+YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmh0dHBSZXEoJ2dldCcsIHF1ZXJ5KS50aGVuKCkuY2F0Y2goKGVycjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gZXJyLmVycm9yLnRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRlYnVnZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy54bWwySnNvbih0aGlzLnN0cmluZ1RvWG1sKHJlcykpWydGZWF0dXJlQ29sbGVjdGlvbiddWydmZWF0dXJlTWVtYmVyJ10pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJvcGVydGllcyA9IHRoaXMueG1sMkpzb24odGhpcy5zdHJpbmdUb1htbChyZXMpKVsnRmVhdHVyZUNvbGxlY3Rpb24nXVsnZmVhdHVyZU1lbWJlciddW2l0ZW0ubmFtZV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJvcGVydHlMaXN0ID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZ2VvanNvbiA9IHt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGVidWdnZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllcyA9PSB1bmRlZmluZWQgfHwgcHJvcGVydGllcyA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMocHJvcGVydGllcykubWFwKGtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXkgIT09IFwiU2hhcGVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGtleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcHJvcGVydGllc1trZXldLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnRpZXNba2V5XS5NdWx0aVN1cmZhY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9zTGlzdCA9IHByb3BlcnRpZXNba2V5XS5NdWx0aVN1cmZhY2Uuc3VyZmFjZU1lbWJlci5Qb2x5Z29uLmV4dGVyaW9yLkxpbmVhclJpbmcucG9zTGlzdC52YWx1ZS5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zTGlzdC5zaGlmdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsaXN0ID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvc0xpc3QubGVuZ3RoOyBpICs9IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKFtwb3NMaXN0W2ldLCBwb3NMaXN0W2kgKyAxXV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb2pzb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiRmVhdHVyZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJMaW5lU3RyaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlczogbGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9wZXJ0aWVzW2tleV0uUG9pbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9zTGlzdCA9IHByb3BlcnRpZXNba2V5XS5Qb2ludC5wb3MudmFsdWUuc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb2pzb24gPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJGZWF0dXJlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBvaW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlczogcG9zTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9wZXJ0aWVzW2tleV0uTXVsdGlDdXJ2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3NMaXN0ID0gcHJvcGVydGllc1trZXldLk11bHRpQ3VydmUuY3VydmVNZW1iZXIuTGluZVN0cmluZy5wb3NMaXN0LnZhbHVlLnNwbGl0KFwiIFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxpc3QgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zTGlzdC5sZW5ndGg7IGkgKz0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0LnB1c2goW3Bvc0xpc3RbaV0sIHBvc0xpc3RbaSArIDFdXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvanNvbiA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkZlYXR1cmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiTGluZVN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc0xpc3QucHVzaChwcm9wZXJ0eUxpc3QpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnlMaXN0LnB1c2goZ2VvanNvbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN6bU9iamVjdC54YnNqSW1hZ2VyeVByb3ZpZGVyLnR5cGUgPT0gXCJXZWJNYXBTZXJ2aWNlSW1hZ2VyeVByb3ZpZGVyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbGxpc3QgPSBjem1PYmplY3QueGJzakltYWdlcnlQcm92aWRlci5XZWJNYXBTZXJ2aWNlSW1hZ2VyeVByb3ZpZGVyLmxheWVycy5zcGxpdChcIixcIilcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSByZXMubGF5ZXJzW3Jlcy5sYXllcnMubGVuZ3RoIC0gMSAtIGxsaXN0W2ldXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBxdWVyeSA9IGAke2FkZHJ9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBgdHlwZW5hbWU9JHt0eXBlTmFtZX06JHtpdGVtLm5hbWV9JkZpbHRlcj1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArIGA8b2djOkZpbHRlcj48b2djOkludGVyc2VjdHM+PG9nYzpQcm9wZXJ0eU5hbWU+U2hhcGU8L29nYzpQcm9wZXJ0eU5hbWU+YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBgPGdtbDpQb2x5Z29uIHNyc05hbWU9XCJ1cm46eC1vZ2M6ZGVmOmNyczpFUFNHOjQzMjZcIj48Z21sOm91dGVyQm91bmRhcnlJcz48Z21sOkxpbmVhclJpbmc+YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBgPGdtbDpjb29yZGluYXRlcz4ke2J1ZmZlckNvb3JkaW5hdGVzfTwvZ21sOmNvb3JkaW5hdGVzPmBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgYDwvZ21sOkxpbmVhclJpbmc+PC9nbWw6b3V0ZXJCb3VuZGFyeUlzPjwvZ21sOlBvbHlnb24+PC9vZ2M6SW50ZXJzZWN0cz48L29nYzpGaWx0ZXI+YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpdGVtLm5hbWUsIHF1ZXJ5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmh0dHBSZXEoJ2dldCcsIHF1ZXJ5KS50aGVuKCkuY2F0Y2goKGVycjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gZXJyLmVycm9yLnRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnhtbDJKc29uKHRoaXMuc3RyaW5nVG9YbWwocmVzKSlbJ0ZlYXR1cmVDb2xsZWN0aW9uJ10gPT0gdW5kZWZpbmVkKSByZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRlYnVnZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy54bWwySnNvbih0aGlzLnN0cmluZ1RvWG1sKHJlcykpWydGZWF0dXJlQ29sbGVjdGlvbiddWydmZWF0dXJlTWVtYmVyJ10pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnhtbDJKc29uKHRoaXMuc3RyaW5nVG9YbWwocmVzKSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByb3BlcnRpZXMgPSB0aGlzLnhtbDJKc29uKHRoaXMuc3RyaW5nVG9YbWwocmVzKSlbJ0ZlYXR1cmVDb2xsZWN0aW9uJ11bJ2ZlYXR1cmVNZW1iZXInXVtpdGVtLm5hbWVdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByb3BlcnR5TGlzdCA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGdlb2pzb24gPSB7fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRlYnVnZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnRpZXMgPT0gdW5kZWZpbmVkIHx8IHByb3BlcnRpZXMgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHByb3BlcnRpZXMpLm1hcChrZXkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ICE9PSBcIlNoYXBlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5TGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBrZXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHByb3BlcnRpZXNba2V5XS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzW2tleV0uTXVsdGlTdXJmYWNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvc0xpc3QgPSBwcm9wZXJ0aWVzW2tleV0uTXVsdGlTdXJmYWNlLnN1cmZhY2VNZW1iZXIuUG9seWdvbi5leHRlcmlvci5MaW5lYXJSaW5nLnBvc0xpc3QudmFsdWUuc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc0xpc3Quc2hpZnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGlzdCA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3NMaXN0Lmxlbmd0aDsgaSArPSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QucHVzaChbcG9zTGlzdFtpXSwgcG9zTGlzdFtpICsgMV1dKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9qc29uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkZlYXR1cmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiTGluZVN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvcGVydGllc1trZXldLlBvaW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvc0xpc3QgPSBwcm9wZXJ0aWVzW2tleV0uUG9pbnQucG9zLnZhbHVlLnNwbGl0KFwiIFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9qc29uID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiRmVhdHVyZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQb2ludFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IHBvc0xpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvcGVydGllc1trZXldLk11bHRpQ3VydmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9zTGlzdCA9IHByb3BlcnRpZXNba2V5XS5NdWx0aUN1cnZlLmN1cnZlTWVtYmVyLkxpbmVTdHJpbmcucG9zTGlzdC52YWx1ZS5zcGxpdChcIiBcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsaXN0ID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvc0xpc3QubGVuZ3RoOyBpICs9IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKFtwb3NMaXN0W2ldLCBwb3NMaXN0W2kgKyAxXV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb2pzb24gPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJGZWF0dXJlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkxpbmVTdHJpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBsaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNMaXN0LnB1c2gocHJvcGVydHlMaXN0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5TGlzdC5wdXNoKGdlb2pzb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzTGlzdC5sZW5ndGggPiAwICYmIGdlb21ldHJ5TGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGdlb21ldHJ5TGlzdCwgaGlnaExpZ2h0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2VvbWV0cnlMaXN0WzBdLmdlb21ldHJ5LnR5cGUgPT0gXCJQb2ludFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDZXNpdW0uR2VvSnNvbkRhdGFTb3VyY2UubG9hZChnZW9tZXRyeUxpc3RbMF0pLnRoZW4oZGF0YVNvdXJjZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZS5lbnRpdGllcy52YWx1ZXMuZm9yRWFjaChlbnRpdHkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkuYmlsbGJvYXJkID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5LnBvaW50ID0gbmV3IENlc2l1bS5Qb2ludEdyYXBoaWNzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogQ2VzaXVtLkNvbG9yLkFRVUEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaXhlbFNpemU6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhbXBUb0dyb3VuZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWdoTGlnaHQuZW50aXRpZXMuYWRkKGVudGl0eSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChnZW9tZXRyeUxpc3RbMF0uZ2VvbWV0cnkudHlwZSA9PSBcIkxpbmVTdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2VzaXVtLkdlb0pzb25EYXRhU291cmNlLmxvYWQoZ2VvbWV0cnlMaXN0WzBdKS50aGVuKGRhdGFTb3VyY2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2UuZW50aXRpZXMudmFsdWVzLmZvckVhY2goZW50aXR5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5LnBvbHlsaW5lLndpZHRoID0gMTBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5LnBvbHlsaW5lLmNsYW1wVG9Hcm91bmQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eS5wb2x5bGluZS5tYXRlcmlhbCA9IG5ldyBDZXNpdW0uUG9seWxpbmVHbG93TWF0ZXJpYWxQcm9wZXJ0eSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG93UG93ZXI6IDAuMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBDZXNpdW0uQ29sb3IuQkxVRVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlnaExpZ2h0LmVudGl0aWVzLmFkZChlbnRpdHkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDZXNpdW0uR2VvSnNvbkRhdGFTb3VyY2UubG9hZChnZW9tZXRyeUxpc3RbMF0pLnRoZW4oZGF0YVNvdXJjZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZS5lbnRpdGllcy52YWx1ZXMuZm9yRWFjaChlbnRpdHkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWdoTGlnaHQuZW50aXRpZXMuYWRkKGVudGl0eSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXNMaXN0WzBdKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgICAgIH0sIENlc2l1bS5TY3JlZW5TcGFjZUV2ZW50VHlwZS5MRUZUX0NMSUNLKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICB0ZXN0KGxpc3QsIGVhcnRoLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGxpc3Quc29ydChmdW5jdGlvbiBzb3J0TnVtYmVyKGEsIGIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGIuX2NpIC0gYS5fY2lcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGxpc3QpXHJcbiAgICAgICAgaWYgKGhpZ2hMaWdodCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGhpZ2hMaWdodCA9IG5ldyBDZXNpdW0uQ3VzdG9tRGF0YVNvdXJjZSgnaGlnaExpZ2h0Jyk7XHJcbiAgICAgICAgICAgIGVhcnRoLmN6bS52aWV3ZXIuZGF0YVNvdXJjZXMuYWRkKGhpZ2hMaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBoYW5kbGVyID0gbmV3IENlc2l1bS5TY3JlZW5TcGFjZUV2ZW50SGFuZGxlcihlYXJ0aC5jem0uc2NlbmUuY2FudmFzKTtcclxuICAgICAgICBoYW5kbGVyLnNldElucHV0QWN0aW9uKChjbGljaykgPT4ge1xyXG4gICAgICAgICAgICBsaXN0LmZvckVhY2goKGN6bU9iamVjdCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFlYXJ0aC5lcHNwbGFuZXQuYWxsb3dDbGljaykgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjem1PYmplY3Quc2hvdykgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBpY2tPYmogPSBlYXJ0aC5jem0udmlld2VyLnNjZW5lLnBpY2soY2xpY2sucG9zaXRpb24pXHJcbiAgICAgICAgICAgICAgICBpZiAoQ2VzaXVtLmRlZmluZWQocGlja09iaikpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi55yL55yL5b6q546v5LqG5Yeg5qyhXCIpXHJcbiAgICAgICAgICAgICAgICBpZiAoaGlnaExpZ2h0KVxyXG4gICAgICAgICAgICAgICAgICAgIGhpZ2hMaWdodC5lbnRpdGllcy5yZW1vdmVBbGwoKTtcclxuICAgICAgICAgICAgICAgIGVhcnRoLnNjZW5lVHJlZS4kcmVmcy5waW4xLmN6bU9iamVjdC5jdXN0b21Qcm9wID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBlYXJ0aC5zY2VuZVRyZWUuJHJlZnMucGluMS5jem1PYmplY3QucG9zaXRpb24gPSB0aGlzLkNhcnRlc2lhbjJUb0NhcnRvZ3JhcGhpYyhlYXJ0aC5jem0udmlld2VyLCBjbGljay5wb3NpdGlvbilcclxuICAgICAgICAgICAgICAgIGxldCB1cmwgPSBjem1PYmplY3QueGJzakltYWdlcnlQcm92aWRlci5XZWJNYXBUaWxlU2VydmljZUltYWdlcnlQcm92aWRlci51cmwgfHwgY3ptT2JqZWN0Lnhic2pJbWFnZXJ5UHJvdmlkZXIuV2ViTWFwU2VydmljZUltYWdlcnlQcm92aWRlci51cmw7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVxdWVzdFVybCA9IFwiXCJcclxuICAgICAgICAgICAgICAgIGlmIChjem1PYmplY3QueGJzakltYWdlcnlQcm92aWRlci50eXBlID09IFwiV2ViTWFwVGlsZVNlcnZpY2VJbWFnZXJ5UHJvdmlkZXJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RVcmwgPSB1cmwuc3BsaXQoJ01hcFNlcnZlcicpWzBdICsgXCJNYXBTZXJ2ZXIvbGF5ZXJzP2Y9cGpzb25cIlxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjem1PYmplY3QueGJzakltYWdlcnlQcm92aWRlci50eXBlID09IFwiV2ViTWFwU2VydmljZUltYWdlcnlQcm92aWRlclwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdFVybCA9IHVybC5zcGxpdCgnYXJjZ2lzJylbMF0gKyAnYXJjZ2lzL3Jlc3QnICsgdXJsLnNwbGl0KCdhcmNnaXMnKVsxXS5zcGxpdCgnTWFwU2VydmVyJylbMF0gKyBcIk1hcFNlcnZlci9sYXllcnM/Zj1wanNvblwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gbGV0IGxheWVycz1bXTtcclxuICAgICAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9IHRoaXMuQ2FydGVzaWFuMlRvV0dTODQoZWFydGguY3ptLnZpZXdlciwgY2xpY2sucG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgbGV0IGJ1ZmZlckNvb3JkaW5hdGVzID0gdGhpcy5CdWZmZXIoW3Bvc2l0aW9uLmxvbiwgcG9zaXRpb24ubGF0XSwgMSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYWRkciA9IHRoaXMuR2V0V0ZTVXJsKGN6bU9iamVjdC54YnNqSW1hZ2VyeVByb3ZpZGVyKTtcclxuICAgICAgICAgICAgICAgIGxldCB0eXBlTmFtZSA9IHVybC5zcGxpdCgnL01hcFNlcnZlcicpWzBdLnNwbGl0KCdzZXJ2aWNlcy8nKVsxXTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmh0dHBGdW5jQShjem1PYmplY3QsIHR5cGVOYW1lLCBidWZmZXJDb29yZGluYXRlcywgYWRkciwgcmVxdWVzdFVybCwgKHJlc0xpc3QsIGdlb21ldHJ5TGlzdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChoaWdoTGlnaHQuZW50aXRpZXMudmFsdWVzICYmIGhpZ2hMaWdodC5lbnRpdGllcy52YWx1ZXMubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc0xpc3QubGVuZ3RoID4gMCAmJiBnZW9tZXRyeUxpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2VvbWV0cnlMaXN0WzBdLmdlb21ldHJ5LnR5cGUgPT0gXCJQb2ludFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDZXNpdW0uR2VvSnNvbkRhdGFTb3VyY2UubG9hZChnZW9tZXRyeUxpc3RbMF0pLnRoZW4oZGF0YVNvdXJjZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZS5lbnRpdGllcy52YWx1ZXMuZm9yRWFjaChlbnRpdHkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkuYmlsbGJvYXJkID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5LnBvaW50ID0gbmV3IENlc2l1bS5Qb2ludEdyYXBoaWNzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogQ2VzaXVtLkNvbG9yLkFRVUEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaXhlbFNpemU6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhbXBUb0dyb3VuZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWdoTGlnaHQuZW50aXRpZXMuYWRkKGVudGl0eSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChnZW9tZXRyeUxpc3RbMF0uZ2VvbWV0cnkudHlwZSA9PSBcIkxpbmVTdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2VzaXVtLkdlb0pzb25EYXRhU291cmNlLmxvYWQoZ2VvbWV0cnlMaXN0WzBdKS50aGVuKGRhdGFTb3VyY2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2UuZW50aXRpZXMudmFsdWVzLmZvckVhY2goZW50aXR5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5LnBvbHlsaW5lLndpZHRoID0gMTBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5LnBvbHlsaW5lLmNsYW1wVG9Hcm91bmQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eS5wb2x5bGluZS5tYXRlcmlhbCA9IG5ldyBDZXNpdW0uUG9seWxpbmVHbG93TWF0ZXJpYWxQcm9wZXJ0eSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG93UG93ZXI6IDAuMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBDZXNpdW0uQ29sb3IuQkxVRVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlnaExpZ2h0LmVudGl0aWVzLmFkZChlbnRpdHkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDZXNpdW0uR2VvSnNvbkRhdGFTb3VyY2UubG9hZChnZW9tZXRyeUxpc3RbMF0pLnRoZW4oZGF0YVNvdXJjZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZS5lbnRpdGllcy52YWx1ZXMuZm9yRWFjaChlbnRpdHkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWdoTGlnaHQuZW50aXRpZXMuYWRkKGVudGl0eSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXNMaXN0WzBdKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSwgQ2VzaXVtLlNjcmVlblNwYWNlRXZlbnRUeXBlLkxFRlRfQ0xJQ0spXHJcbiAgICB9XHJcbiAgICBodHRwRnVuY0EoY3ptT2JqZWN0LCB0eXBlTmFtZSwgYnVmZmVyQ29vcmRpbmF0ZXMsIGFkZHIsIHJlcXVlc3RVcmwsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgbGV0IHJlc0xpc3RzID0gW11cclxuICAgICAgICBsZXQgZ2VvbWV0cnlMaXN0cyA9IFtdXHJcbiAgICAgICAgdGhpcy5odHRwRnVuY0IocmVxdWVzdFVybCwgcmVzID0+IHtcclxuXHJcbiAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgICAgIC8vIHRoaXMuaHR0cFJlcSgnZ2V0JywgcmVxdWVzdFVybCkudGhlbigocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlcy5sYXllcnMgPT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICAgICAgICAgIC8vIHJlc0xpc3QgPSBbXVxyXG4gICAgICAgICAgICAvLyBnZW9tZXRyeUxpc3QgPSBbXVxyXG4gICAgICAgICAgICBpZiAoY3ptT2JqZWN0Lnhic2pJbWFnZXJ5UHJvdmlkZXIudHlwZSA9PSBcIldlYk1hcFRpbGVTZXJ2aWNlSW1hZ2VyeVByb3ZpZGVyXCIpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzLmxheWVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSByZXMubGF5ZXJzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBxdWVyeSA9IGAke2FkZHJ9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICArIGB0eXBlbmFtZT0ke3R5cGVOYW1lfToke2l0ZW0ubmFtZX0mRmlsdGVyPWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKyBgPG9nYzpGaWx0ZXI+PG9nYzpJbnRlcnNlY3RzPjxvZ2M6UHJvcGVydHlOYW1lPlNoYXBlPC9vZ2M6UHJvcGVydHlOYW1lPmBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKyBgPGdtbDpQb2x5Z29uIHNyc05hbWU9XCJ1cm46eC1vZ2M6ZGVmOmNyczpFUFNHOjQzMjZcIj48Z21sOm91dGVyQm91bmRhcnlJcz48Z21sOkxpbmVhclJpbmc+YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICArIGA8Z21sOmNvb3JkaW5hdGVzPiR7YnVmZmVyQ29vcmRpbmF0ZXN9PC9nbWw6Y29vcmRpbmF0ZXM+YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICArIGA8L2dtbDpMaW5lYXJSaW5nPjwvZ21sOm91dGVyQm91bmRhcnlJcz48L2dtbDpQb2x5Z29uPjwvb2djOkludGVyc2VjdHM+PC9vZ2M6RmlsdGVyPmBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmh0dHBGdW5jKHF1ZXJ5LCBlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gZXJyLmVycm9yLnRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGVidWdnZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IEZlYXR1cmVDb2xsZWN0aW9uID0gdGhpcy54bWwySnNvbih0aGlzLnN0cmluZ1RvWG1sKHJlcykpWydGZWF0dXJlQ29sbGVjdGlvbiddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoRmVhdHVyZUNvbGxlY3Rpb24gPT0gdW5kZWZpbmVkKSByZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEZlYXR1cmVDb2xsZWN0aW9uWydmZWF0dXJlTWVtYmVyJ10pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChGZWF0dXJlQ29sbGVjdGlvblsnZmVhdHVyZU1lbWJlciddLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcm9wZXJ0aWVzID0gRmVhdHVyZUNvbGxlY3Rpb25bJ2ZlYXR1cmVNZW1iZXInXVswXVtpdGVtLm5hbWVdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByb3BlcnR5TGlzdCA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGdlb2pzb24gPSB7fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRlYnVnZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnRpZXMgPT0gdW5kZWZpbmVkIHx8IHByb3BlcnRpZXMgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHByb3BlcnRpZXMpLm1hcChrZXkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ICE9PSBcIlNoYXBlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5TGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBrZXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHByb3BlcnRpZXNba2V5XS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzW2tleV0uTXVsdGlTdXJmYWNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvc0xpc3QgPSBwcm9wZXJ0aWVzW2tleV0uTXVsdGlTdXJmYWNlLnN1cmZhY2VNZW1iZXIuUG9seWdvbi5leHRlcmlvci5MaW5lYXJSaW5nLnBvc0xpc3QudmFsdWUuc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc0xpc3Quc2hpZnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGlzdCA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3NMaXN0Lmxlbmd0aDsgaSArPSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QucHVzaChbcG9zTGlzdFtpXSwgcG9zTGlzdFtpICsgMV1dKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9qc29uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkZlYXR1cmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiTGluZVN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvcGVydGllc1trZXldLlBvaW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvc0xpc3QgPSBwcm9wZXJ0aWVzW2tleV0uUG9pbnQucG9zLnZhbHVlLnNwbGl0KFwiIFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9qc29uID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiRmVhdHVyZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQb2ludFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IHBvc0xpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvcGVydGllc1trZXldLk11bHRpQ3VydmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9zTGlzdCA9IHByb3BlcnRpZXNba2V5XS5NdWx0aUN1cnZlLmN1cnZlTWVtYmVyLkxpbmVTdHJpbmcucG9zTGlzdC52YWx1ZS5zcGxpdChcIiBcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsaXN0ID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvc0xpc3QubGVuZ3RoOyBpICs9IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKFtwb3NMaXN0W2ldLCBwb3NMaXN0W2kgKyAxXV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb2pzb24gPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJGZWF0dXJlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkxpbmVTdHJpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBsaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNMaXN0cy5wdXNoKHByb3BlcnR5TGlzdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeUxpc3RzLnB1c2goZ2VvanNvbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXNMaXN0cywgZ2VvbWV0cnlMaXN0cylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByb3BlcnRpZXMgPSBGZWF0dXJlQ29sbGVjdGlvblsnZmVhdHVyZU1lbWJlciddW2l0ZW0ubmFtZV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJvcGVydHlMaXN0ID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZ2VvanNvbiA9IHt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGVidWdnZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllcyA9PSB1bmRlZmluZWQgfHwgcHJvcGVydGllcyA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMocHJvcGVydGllcykubWFwKGtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXkgIT09IFwiU2hhcGVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGtleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcHJvcGVydGllc1trZXldLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnRpZXNba2V5XS5NdWx0aVN1cmZhY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9zTGlzdCA9IHByb3BlcnRpZXNba2V5XS5NdWx0aVN1cmZhY2Uuc3VyZmFjZU1lbWJlci5Qb2x5Z29uLmV4dGVyaW9yLkxpbmVhclJpbmcucG9zTGlzdC52YWx1ZS5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zTGlzdC5zaGlmdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsaXN0ID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvc0xpc3QubGVuZ3RoOyBpICs9IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKFtwb3NMaXN0W2ldLCBwb3NMaXN0W2kgKyAxXV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb2pzb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiRmVhdHVyZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJMaW5lU3RyaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlczogbGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9wZXJ0aWVzW2tleV0uUG9pbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9zTGlzdCA9IHByb3BlcnRpZXNba2V5XS5Qb2ludC5wb3MudmFsdWUuc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb2pzb24gPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJGZWF0dXJlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBvaW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlczogcG9zTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9wZXJ0aWVzW2tleV0uTXVsdGlDdXJ2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3NMaXN0ID0gcHJvcGVydGllc1trZXldLk11bHRpQ3VydmUuY3VydmVNZW1iZXIuTGluZVN0cmluZy5wb3NMaXN0LnZhbHVlLnNwbGl0KFwiIFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxpc3QgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zTGlzdC5sZW5ndGg7IGkgKz0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0LnB1c2goW3Bvc0xpc3RbaV0sIHBvc0xpc3RbaSArIDFdXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvanNvbiA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkZlYXR1cmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiTGluZVN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc0xpc3RzLnB1c2gocHJvcGVydHlMaXN0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5TGlzdHMucHVzaChnZW9qc29uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlc0xpc3RzLCBnZW9tZXRyeUxpc3RzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY3ptT2JqZWN0Lnhic2pJbWFnZXJ5UHJvdmlkZXIudHlwZSA9PSBcIldlYk1hcFNlcnZpY2VJbWFnZXJ5UHJvdmlkZXJcIikge1xyXG4gICAgICAgICAgICAgICAgbGV0IGxsaXN0ID0gY3ptT2JqZWN0Lnhic2pJbWFnZXJ5UHJvdmlkZXIuV2ViTWFwU2VydmljZUltYWdlcnlQcm92aWRlci5sYXllcnMuc3BsaXQoXCIsXCIpXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gbGxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnemhlbGlqaWNpbmUnKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSByZXMubGF5ZXJzW3Jlcy5sYXllcnMubGVuZ3RoIC0gMSAtIGxsaXN0W2ldXTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpdGVtLm5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHF1ZXJ5ID0gYCR7YWRkcn1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICsgYHR5cGVuYW1lPSR7dHlwZU5hbWV9OiR7aXRlbS5uYW1lfSZGaWx0ZXI9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICArIGA8b2djOkZpbHRlcj48b2djOkludGVyc2VjdHM+PG9nYzpQcm9wZXJ0eU5hbWU+U2hhcGU8L29nYzpQcm9wZXJ0eU5hbWU+YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICArIGA8Z21sOlBvbHlnb24gc3JzTmFtZT1cInVybjp4LW9nYzpkZWY6Y3JzOkVQU0c6NDMyNlwiPjxnbWw6b3V0ZXJCb3VuZGFyeUlzPjxnbWw6TGluZWFyUmluZz5gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICsgYDxnbWw6Y29vcmRpbmF0ZXM+JHtidWZmZXJDb29yZGluYXRlc308L2dtbDpjb29yZGluYXRlcz5gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICsgYDwvZ21sOkxpbmVhclJpbmc+PC9nbWw6b3V0ZXJCb3VuZGFyeUlzPjwvZ21sOlBvbHlnb24+PC9vZ2M6SW50ZXJzZWN0cz48L29nYzpGaWx0ZXI+YFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0ubmFtZSwgcXVlcnkpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5odHRwUmVxKCdnZXQnLCBxdWVyeSkudGhlbigpLmNhdGNoKChlcnI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaHR0cEZ1bmMocXVlcnksIGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNMaXN0cy5sZW5ndGggPiAwKSByZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IGVyci5lcnJvci50ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBGZWF0dXJlQ29sbGVjdGlvbiA9IHRoaXMueG1sMkpzb24odGhpcy5zdHJpbmdUb1htbChyZXMpKVsnRmVhdHVyZUNvbGxlY3Rpb24nXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEZlYXR1cmVDb2xsZWN0aW9uID09IHVuZGVmaW5lZCkgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChGZWF0dXJlQ29sbGVjdGlvblsnZmVhdHVyZU1lbWJlciddKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoRmVhdHVyZUNvbGxlY3Rpb25bJ2ZlYXR1cmVNZW1iZXInXS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJvcGVydGllcyA9IEZlYXR1cmVDb2xsZWN0aW9uWydmZWF0dXJlTWVtYmVyJ11bMF1baXRlbS5uYW1lXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcm9wZXJ0eUxpc3QgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBnZW9qc29uID0ge31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllcyA9PSB1bmRlZmluZWQgfHwgcHJvcGVydGllcyA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMocHJvcGVydGllcykubWFwKGtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXkgIT09IFwiU2hhcGVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGtleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcHJvcGVydGllc1trZXldLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnRpZXNba2V5XS5NdWx0aVN1cmZhY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9zTGlzdCA9IHByb3BlcnRpZXNba2V5XS5NdWx0aVN1cmZhY2Uuc3VyZmFjZU1lbWJlci5Qb2x5Z29uLmV4dGVyaW9yLkxpbmVhclJpbmcucG9zTGlzdC52YWx1ZS5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zTGlzdC5zaGlmdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsaXN0ID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvc0xpc3QubGVuZ3RoOyBpICs9IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKFtwb3NMaXN0W2ldLCBwb3NMaXN0W2kgKyAxXV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb2pzb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiRmVhdHVyZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJMaW5lU3RyaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlczogbGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9wZXJ0aWVzW2tleV0uUG9pbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9zTGlzdCA9IHByb3BlcnRpZXNba2V5XS5Qb2ludC5wb3MudmFsdWUuc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb2pzb24gPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJGZWF0dXJlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBvaW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlczogcG9zTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9wZXJ0aWVzW2tleV0uTXVsdGlDdXJ2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3NMaXN0ID0gcHJvcGVydGllc1trZXldLk11bHRpQ3VydmUuY3VydmVNZW1iZXIuTGluZVN0cmluZy5wb3NMaXN0LnZhbHVlLnNwbGl0KFwiIFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxpc3QgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zTGlzdC5sZW5ndGg7IGkgKz0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0LnB1c2goW3Bvc0xpc3RbaV0sIHBvc0xpc3RbaSArIDFdXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvanNvbiA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkZlYXR1cmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiTGluZVN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc0xpc3RzLnB1c2gocHJvcGVydHlMaXN0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5TGlzdHMucHVzaChnZW9qc29uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlc0xpc3RzLCBnZW9tZXRyeUxpc3RzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJvcGVydGllcyA9IEZlYXR1cmVDb2xsZWN0aW9uWydmZWF0dXJlTWVtYmVyJ11baXRlbS5uYW1lXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcm9wZXJ0eUxpc3QgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBnZW9qc29uID0ge31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnRpZXMgPT0gdW5kZWZpbmVkIHx8IHByb3BlcnRpZXMgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHByb3BlcnRpZXMpLm1hcChrZXkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ICE9PSBcIlNoYXBlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5TGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBrZXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHByb3BlcnRpZXNba2V5XS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzW2tleV0uTXVsdGlTdXJmYWNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvc0xpc3QgPSBwcm9wZXJ0aWVzW2tleV0uTXVsdGlTdXJmYWNlLnN1cmZhY2VNZW1iZXIuUG9seWdvbi5leHRlcmlvci5MaW5lYXJSaW5nLnBvc0xpc3QudmFsdWUuc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc0xpc3Quc2hpZnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGlzdCA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3NMaXN0Lmxlbmd0aDsgaSArPSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QucHVzaChbcG9zTGlzdFtpXSwgcG9zTGlzdFtpICsgMV1dKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9qc29uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkZlYXR1cmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiTGluZVN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvcGVydGllc1trZXldLlBvaW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvc0xpc3QgPSBwcm9wZXJ0aWVzW2tleV0uUG9pbnQucG9zLnZhbHVlLnNwbGl0KFwiIFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9qc29uID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiRmVhdHVyZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQb2ludFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IHBvc0xpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvcGVydGllc1trZXldLk11bHRpQ3VydmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9zTGlzdCA9IHByb3BlcnRpZXNba2V5XS5NdWx0aUN1cnZlLmN1cnZlTWVtYmVyLkxpbmVTdHJpbmcucG9zTGlzdC52YWx1ZS5zcGxpdChcIiBcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsaXN0ID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvc0xpc3QubGVuZ3RoOyBpICs9IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKFtwb3NMaXN0W2ldLCBwb3NMaXN0W2kgKyAxXV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb2pzb24gPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJGZWF0dXJlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkxpbmVTdHJpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBsaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNMaXN0cy5wdXNoKHByb3BlcnR5TGlzdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeUxpc3RzLnB1c2goZ2VvanNvbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXNMaXN0cywgZ2VvbWV0cnlMaXN0cylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMueG1sMkpzb24odGhpcy5zdHJpbmdUb1htbChyZXMpKSlcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBodHRwRnVuY0IocmVxdWVzdFVybCwgY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLmh0dHBSZXEoJ2dldCcsIHJlcXVlc3RVcmwpLnRoZW4oKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHJlcylcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgaHR0cEZ1bmNDKCkge1xyXG5cclxuICAgIH1cclxuICAgIGh0dHBGdW5jKHF1ZXJ5LCBjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuaHR0cFJlcSgnZ2V0JywgcXVlcnkpLnRoZW4oKS5jYXRjaCgoZXJyOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgY2FsbGJhY2soZXJyKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcGlja01vZGVsKGVhcnRoLCBjYWxsYmFjaykge1xyXG5cclxuICAgICAgICBsZXQgaGFuZGxlciA9IG5ldyBDZXNpdW0uU2NyZWVuU3BhY2VFdmVudEhhbmRsZXIoZWFydGguY3ptLnNjZW5lLmNhbnZhcyk7XHJcbiAgICAgICAgaGFuZGxlci5zZXRJbnB1dEFjdGlvbigoY2xpY2spID0+IHtcclxuICAgICAgICAgICAgaWYgKCFlYXJ0aC5lcHNwbGFuZXQuYWxsb3dDbGljaykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNsaWNrKVxyXG4gICAgICAgICAgICBsZXQgcG9zaXRpb24gPSBlYXJ0aC5jem0udmlld2VyLnNjZW5lLnBpY2tQb3NpdGlvbihjbGljay5wb3NpdGlvbilcclxuICAgICAgICAgICAgbGV0IHBpY2tPYmogPSBlYXJ0aC5jem0udmlld2VyLnNjZW5lLnBpY2soY2xpY2sucG9zaXRpb24pXHJcbiAgICAgICAgICAgIGlmICghQ2VzaXVtLmRlZmluZWQocGlja09iail8fCFwaWNrT2JqLmdldFByb3BlcnR5TmFtZXMpIHtcclxuICAgICAgICAgICAgICAgIGVhcnRoLnNjZW5lVHJlZS4kcmVmcy5waW4xLmN6bU9iamVjdC5jdXN0b21Qcm9wID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImRzYWRhZFwiLCBwaWNrT2JqKVxyXG4gICAgICAgICAgICBsZXQgY2FydG9ncmFwaGljID0gQ2VzaXVtLkNhcnRvZ3JhcGhpYy5mcm9tQ2FydGVzaWFuKHBvc2l0aW9uKVxyXG4gICAgICAgICAgICAvLyBlYXJ0aC5zY2VuZVRyZWUuJHJlZnMucGluMS5jem1PYmplY3QuY3VzdG9tUHJvcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBlYXJ0aC5zY2VuZVRyZWUuJHJlZnMucGluMS5jem1PYmplY3QucG9zaXRpb24gPSBbY2FydG9ncmFwaGljLmxvbmdpdHVkZSwgY2FydG9ncmFwaGljLmxhdGl0dWRlLCBjYXJ0b2dyYXBoaWMuaGVpZ2h0XVxyXG4gICAgICAgICAgICBsZXQgUHJvcGVydHlOYW1lcyA9IHBpY2tPYmouZ2V0UHJvcGVydHlOYW1lcygpXHJcbiAgICAgICAgICAgIGxldCBwcm9wZXJ0eUxpc3QgPSBbXVxyXG4gICAgICAgICAgICBQcm9wZXJ0eU5hbWVzLmZvckVhY2gocHJvcGVydHkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcHJvcGVydHlMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwaWNrT2JqLmdldFByb3BlcnR5KHByb3BlcnR5KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY2FsbGJhY2socHJvcGVydHlMaXN0LCBoYW5kbGVyKVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLkNhcnRlc2lhbjJUb0NhcnRvZ3JhcGhpYyhlYXJ0aC5jem0udmlld2VyLCBwb3NpdGlvbikpXHJcbiAgICAgICAgfSwgQ2VzaXVtLlNjcmVlblNwYWNlRXZlbnRUeXBlLkxFRlRfQ0xJQ0spXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocGlja09iailcclxuXHJcblxyXG4gICAgICAgIC8vIGhhbmRsZXIuZGVzdHJveSgpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocHJvcGVydHlMaXN0KVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlsY/luZXlnZDmoIfovaznu4/nuqzluqblnZDmoIdcclxuICAgICAqIEBwYXJhbSB2aWV3ZXIgXHJcbiAgICAgKiBAcGFyYW0gcG9zaXRpb24g5bGP5bmV5Z2Q5qCHY2FydGVzaWFuMlxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIENhcnRlc2lhbjJUb1dHUzg0KHZpZXdlciwgcG9zaXRpb24pIHtcclxuICAgICAgICB2YXIgcmF5ID0gdmlld2VyLmNhbWVyYS5nZXRQaWNrUmF5KHBvc2l0aW9uKTtcclxuICAgICAgICB2YXIgY2FydGVzaWFuID0gdmlld2VyLnNjZW5lLmdsb2JlLnBpY2socmF5LCB2aWV3ZXIuc2NlbmUpO1xyXG4gICAgICAgIHZhciBjYXJ0b2dyYXBoaWMgPSBDZXNpdW0uQ2FydG9ncmFwaGljLmZyb21DYXJ0ZXNpYW4oY2FydGVzaWFuKTtcclxuICAgICAgICBsZXQgbG9uID0gQ2VzaXVtLk1hdGgudG9EZWdyZWVzKGNhcnRvZ3JhcGhpYy5sb25naXR1ZGUpXHJcbiAgICAgICAgbGV0IGxhdCA9IENlc2l1bS5NYXRoLnRvRGVncmVlcyhjYXJ0b2dyYXBoaWMubGF0aXR1ZGUpXHJcbiAgICAgICAgcmV0dXJuIHsgbG9uOiBsb24sIGxhdDogbGF0IH1cclxuICAgIH1cclxuXHJcbiAgICBDYXJ0ZXNpYW4yVG9DYXJ0b2dyYXBoaWModmlld2VyLCBwb3NpdGlvbikge1xyXG4gICAgICAgIHZhciByYXkgPSB2aWV3ZXIuY2FtZXJhLmdldFBpY2tSYXkocG9zaXRpb24pO1xyXG4gICAgICAgIHZhciBjYXJ0ZXNpYW4gPSB2aWV3ZXIuc2NlbmUuZ2xvYmUucGljayhyYXksIHZpZXdlci5zY2VuZSk7XHJcbiAgICAgICAgdmFyIGNhcnRvZ3JhcGhpYyA9IENlc2l1bS5DYXJ0b2dyYXBoaWMuZnJvbUNhcnRlc2lhbihjYXJ0ZXNpYW4pO1xyXG4gICAgICAgIHJldHVybiBbY2FydG9ncmFwaGljLmxvbmdpdHVkZSwgY2FydG9ncmFwaGljLmxhdGl0dWRlLCBjYXJ0b2dyYXBoaWMuaGVpZ2h0XVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmi7zmjqXnlKjkuo53ZnPmn6Xor6LnmoR1cmxcclxuICAgICAqIEBwYXJhbSBXTVRTSW1hZ2VyeVByb3ZpZGVyIFxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIEdldFdGU1VybChJbWFnZXJ5UHJvdmlkZXIpIHtcclxuICAgICAgICBsZXQgV0ZTVXJsID0gXCJcIjtcclxuICAgICAgICBpZiAoSW1hZ2VyeVByb3ZpZGVyLnR5cGUgPT0gXCJXZWJNYXBUaWxlU2VydmljZUltYWdlcnlQcm92aWRlclwiKSB7XHJcbiAgICAgICAgICAgIGxldCBXTVRTSW1hZ2VyeVByb3ZpZGVyID0gSW1hZ2VyeVByb3ZpZGVyLldlYk1hcFRpbGVTZXJ2aWNlSW1hZ2VyeVByb3ZpZGVyO1xyXG4gICAgICAgICAgICBpZiAoV01UU0ltYWdlcnlQcm92aWRlci51cmwuaW5kZXhPZignYXJjZ2lzJykgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBXRlNVcmwgPSBXTVRTSW1hZ2VyeVByb3ZpZGVyLnVybC5zcGxpdChcInJlc3RcIilbMF0gKyBXTVRTSW1hZ2VyeVByb3ZpZGVyLnVybC5zcGxpdChcInJlc3QvXCIpWzFdLnNwbGl0KFwiTWFwU2VydmVyXCIpWzBdICsgXCJNYXBTZXJ2ZXIvV0ZTU2VydmVyP3JlcXVlc3Q9R2V0RmVhdHVyZSZzZXJ2aWNlPVdGUyZ2ZXJzaW9uPTEuMS4wJlwiO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKFdNVFNJbWFnZXJ5UHJvdmlkZXIudXJsLmluZGV4T2YoJ2dlb3NlcnZlcicpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgV0ZTVXJsID0gV01UU0ltYWdlcnlQcm92aWRlci51cmwuc3BsaXQoXCJnd2NcIilbMF0gKyBXTVRTSW1hZ2VyeVByb3ZpZGVyLmxheWVyLnNwbGl0KFwiOlwiKVswXSArIFwiL293cz9zZXJ2aWNlPVdGUyZ2ZXJzaW9uPTEuMC4wJnJlcXVlc3Q9R2V0RmVhdHVyZSZ0eXBlTmFtZT1cIiArIFdNVFNJbWFnZXJ5UHJvdmlkZXIubGF5ZXIgKyBcIiZtYXhGZWF0dXJlcz0xJm91dHB1dEZvcm1hdD1qc29uJmZpbHRlcj1cIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChJbWFnZXJ5UHJvdmlkZXIudHlwZSA9PSBcIldlYk1hcFNlcnZpY2VJbWFnZXJ5UHJvdmlkZXJcIikge1xyXG4gICAgICAgICAgICBsZXQgV2ViTWFwU2VydmljZUltYWdlcnlQcm92aWRlciA9IEltYWdlcnlQcm92aWRlci5XZWJNYXBTZXJ2aWNlSW1hZ2VyeVByb3ZpZGVyO1xyXG4gICAgICAgICAgICBpZiAoV2ViTWFwU2VydmljZUltYWdlcnlQcm92aWRlci51cmwuaW5kZXhPZignYXJjZ2lzJykgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBXRlNVcmwgPSBXZWJNYXBTZXJ2aWNlSW1hZ2VyeVByb3ZpZGVyLnVybC5zcGxpdChcIk1hcFNlcnZlclwiKVswXSArIFwiTWFwU2VydmVyL1dGU1NlcnZlcj9yZXF1ZXN0PUdldEZlYXR1cmUmc2VydmljZT1XRlMmdmVyc2lvbj0xLjEuMCZcIjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChXZWJNYXBTZXJ2aWNlSW1hZ2VyeVByb3ZpZGVyLnVybC5pbmRleE9mKCdnZW9zZXJ2ZXInKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIFdGU1VybCA9IFdlYk1hcFNlcnZpY2VJbWFnZXJ5UHJvdmlkZXIudXJsLnNwbGl0KFwid21zXCIpWzBdICsgXCIvb3dzP3NlcnZpY2U9V0ZTJnZlcnNpb249MS4wLjAmcmVxdWVzdD1HZXRGZWF0dXJlJnR5cGVOYW1lPVwiICsgV2ViTWFwU2VydmljZUltYWdlcnlQcm92aWRlci5sYXllcnMgKyBcIiZtYXhGZWF0dXJlcz0xJm91dHB1dEZvcm1hdD1qc29uJmZpbHRlcj1cIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFdGU1VybFxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSBwb3NpdGlvbiBbbG9uLGxhdF1cclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBCdWZmZXIocG9zaXRpb24sIG1ldGVycykge1xyXG4gICAgICAgIGxldCBwb2ludEYgPSB0dXJmLnBvaW50KHBvc2l0aW9uKTtcclxuICAgICAgICBsZXQgYnVmZmVyZWQgPSB0dXJmLmJ1ZmZlcihwb2ludEYsIG1ldGVycywgJ21ldGVycycpO1xyXG4gICAgICAgIGxldCBjb29yZGluYXRlcyA9IGJ1ZmZlcmVkLmdlb21ldHJ5LmNvb3JkaW5hdGVzO1xyXG4gICAgICAgIGxldCBwb2ludHMgPSBjb29yZGluYXRlc1swXTtcclxuICAgICAgICBsZXQgZGVncmVlc0xpc3RTdHIgPSB0aGlzLnBvaW50c1RvRGVncmVlc0FycmF5KHBvaW50cyk7XHJcbiAgICAgICAgcmV0dXJuIGRlZ3JlZXNMaXN0U3RyXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHBvaW50cyDmoLzlvI/ovazmjaJcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwb2ludHNUb0RlZ3JlZXNBcnJheShwb2ludHMpIHtcclxuICAgICAgICBsZXQgZGVncmVlc0FycmF5ID0gXCJcIjtcclxuICAgICAgICBwb2ludHMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBkZWdyZWVzQXJyYXkgKz0gaXRlbVswXSArIFwiLFwiICsgaXRlbVsxXSArIFwiIFwiXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGRlZ3JlZXNBcnJheTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5riF6Zmk6auY5LquXHJcbiAgICAgKi9cclxuICAgIENsZWFySGlnaExpZ2h0KCkge1xyXG4gICAgICAgIGRlYnVnZ2VyXHJcbiAgICAgICAgaGlnaExpZ2h0LmVudGl0aWVzLnJlbW92ZUFsbCgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiB4bWzovaxqc29uXHJcbiAgICAgKiBAcGFyYW0geG1sIFxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHhtbDJKc29uKHhtbCkge1xyXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgcmV0dXJuIG9iamVjdFxyXG4gICAgICAgIHZhciBvYmogPSB7fTtcclxuICAgICAgICBpZiAoeG1sLm5vZGVUeXBlID09IDEpIHsgLy8gZWxlbWVudFxyXG4gICAgICAgICAgICAvLyBkbyBhdHRyaWJ1dGVzXHJcbiAgICAgICAgICAgIGlmICh4bWwuYXR0cmlidXRlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBvYmpbXCJAYXR0cmlidXRlc1wiXSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB4bWwuYXR0cmlidXRlcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGRlYnVnZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGF0dHJpYnV0ZSA9IHhtbC5hdHRyaWJ1dGVzLml0ZW0oaik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZS5ub2RlTmFtZS5pbmRleE9mKFwiOlwiKSA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpbXCJAYXR0cmlidXRlc1wiXVthdHRyaWJ1dGUubm9kZU5hbWVdID0gYXR0cmlidXRlLm5vZGVWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpbXCJAYXR0cmlidXRlc1wiXVthdHRyaWJ1dGUubm9kZU5hbWUuc3BsaXQoXCI6XCIpWzFdXSA9IGF0dHJpYnV0ZS5ub2RlVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoeG1sLm5vZGVUeXBlID09IDMpIHsgLy8gdGV4dFxyXG4gICAgICAgICAgICBvYmogPSB4bWwubm9kZVZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBkbyBjaGlsZHJlblxyXG4gICAgICAgIGlmICh4bWwuaGFzQ2hpbGROb2RlcygpKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgeG1sLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBpdGVtID0geG1sLmNoaWxkTm9kZXMuaXRlbShpKTtcclxuICAgICAgICAgICAgICAgIHZhciBub2RlTmFtZSA9IGl0ZW0ubm9kZU5hbWU7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChvYmpbbm9kZU5hbWUuc3BsaXQoXCI6XCIpWzFdXSkgPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlTmFtZS5zcGxpdChcIjpcIilbMV0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ialsndmFsdWUnXSA9IHRoaXMueG1sMkpzb24oaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqW25vZGVOYW1lLnNwbGl0KFwiOlwiKVsxXV0gPSB0aGlzLnhtbDJKc29uKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKG9ialtub2RlTmFtZS5zcGxpdChcIjpcIilbMV1dLmxlbmd0aCkgPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2xkID0gb2JqW25vZGVOYW1lLnNwbGl0KFwiOlwiKVsxXV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ialtub2RlTmFtZS5zcGxpdChcIjpcIilbMV1dID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ialtub2RlTmFtZS5zcGxpdChcIjpcIilbMV1dLnB1c2gob2xkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqW25vZGVOYW1lLnNwbGl0KFwiOlwiKVsxXV0ucHVzaCh0aGlzLnhtbDJKc29uKGl0ZW0pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlrZfnrKbkuLLovax4bWxcclxuICAgICAqIEBwYXJhbSB4bWxTdHJpbmcgXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgc3RyaW5nVG9YbWwoeG1sU3RyaW5nKSB7XHJcbiAgICAgICAgdmFyIHhtbERvYztcclxuICAgICAgICBpZiAodHlwZW9mIHhtbFN0cmluZyA9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIC8vRkZcclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZURvY3VtZW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xyXG4gICAgICAgICAgICAgICAgeG1sRG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyh4bWxTdHJpbmcsIFwidGV4dC94bWxcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHhtbERvYyA9IHhtbFN0cmluZztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHhtbERvYztcclxuICAgIH1cclxufSJdfQ==