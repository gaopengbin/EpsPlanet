import { Injectable } from '@angular/core';
import turf from 'turf';
import * as i0 from "@angular/core";
import * as i1 from "epsgis";
let propertyLists = [];
let czmObjectList = [];
let resList = [];
let highLight = null;
window["allowClick"] = false;
export class Identify {
    constructor(http) {
        this.http = http;
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
            if (!window["allowClick"])
                return;
            if (!czmObject.show)
                return;
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
        let handler = new Cesium.ScreenSpaceEventHandler(earth.czm.scene.canvas);
        let url = czmObject.xbsjImageryProvider.WebMapTileServiceImageryProvider.url || czmObject.xbsjImageryProvider.SSWebMapServiceImageryProvider.url;
        let requestUrl = "";
        if (czmObject.xbsjImageryProvider.type == "WebMapTileServiceImageryProvider") {
            requestUrl = url.split('MapServer')[0] + "MapServer/layers?f=pjson";
        }
        else if (czmObject.xbsjImageryProvider.type == "SSWebMapServiceImageryProvider") {
            requestUrl = url.split('arcgis')[0] + 'arcgis/rest' + url.split('arcgis')[1].split('MapServer')[0] + "MapServer/layers?f=pjson";
        }
        this.httpReq('get', requestUrl).then((res) => {
            handler.setInputAction((click) => {
                if (res.layers == undefined)
                    return;
                if (!window["allowClick"])
                    return;
                if (!czmObject.show)
                    return;
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
                else if (czmObject.xbsjImageryProvider.type == "SSWebMapServiceImageryProvider") {
                    let llist = czmObject.xbsjImageryProvider.SSWebMapServiceImageryProvider.layer.split(",");
                    for (let i = 0; i < llist.length; i++) {
                        const item = res.layers[res.layers.length - 1 - llist[i]];
                        let query = `${addr}`
                            + `typename=${typeName}:${item.name}&Filter=`
                            + `<ogc:Filter><ogc:Intersects><ogc:PropertyName>Shape</ogc:PropertyName>`
                            + `<gml:Polygon srsName="urn:x-ogc:def:crs:EPSG:4326"><gml:outerBoundaryIs><gml:LinearRing>`
                            + `<gml:coordinates>${bufferCoordinates}</gml:coordinates>`
                            + `</gml:LinearRing></gml:outerBoundaryIs></gml:Polygon></ogc:Intersects></ogc:Filter>`;
                        console.log(item.name);
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
                                        pixelSize: 10
                                    });
                                    highLight.entities.add(entity);
                                });
                            });
                        }
                        else if (geometryList[0].geometry.type == "LineString") {
                            Cesium.GeoJsonDataSource.load(geometryList[0]).then(dataSource => {
                                dataSource.entities.values.forEach(entity => {
                                    entity.polyline.width = 10;
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
        if (ImageryProvider.type == "SSWebMapServiceImageryProvider") {
            let SSWebMapServiceImageryProvider = ImageryProvider.SSWebMapServiceImageryProvider;
            if (SSWebMapServiceImageryProvider.url.indexOf('arcgis') !== -1) {
                WFSUrl = SSWebMapServiceImageryProvider.url.split("MapServer")[0] + "MapServer/WFSServer?request=GetFeature&service=WFS&version=1.1.0&";
            }
            else if (SSWebMapServiceImageryProvider.url.indexOf('geoserver') !== -1) {
                WFSUrl = SSWebMapServiceImageryProvider.url.split("wms")[0] + "/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=" + SSWebMapServiceImageryProvider.layer + "&maxFeatures=1&outputFormat=json&filter=";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpZnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9lcHNwbGFuZXQvdXRpbHMvaWRlbnRpZnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUcxQyxPQUFPLElBQUksTUFBTSxNQUFNLENBQUE7OztBQUN2QixJQUFJLGFBQWEsR0FBRyxFQUFFLENBQUE7QUFDdEIsSUFBSSxhQUFhLEdBQUcsRUFBRSxDQUFBO0FBQ3RCLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQTtBQUNoQixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUE7QUFDcEIsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLEtBQUssQ0FBQztBQUk3QixNQUFNLE9BQU8sUUFBUTtJQUVqQixZQUFvQixJQUFvQjtRQUFwQixTQUFJLEdBQUosSUFBSSxDQUFnQjtJQUV4QyxDQUFDO0lBQ0QsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHO1FBQ2YsSUFBSSxNQUFNLElBQUksTUFBTSxFQUFFO1lBQ2xCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQTtTQUN4RDtRQUNELElBQUksTUFBTSxJQUFJLEtBQUssRUFBRTtZQUNqQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQTtTQUNuRDtJQUNMLENBQUM7SUFRRCxjQUFjLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsUUFBUTtRQUMzQyxJQUFJLFNBQVMsSUFBSSxJQUFJLEVBQUU7WUFDbkIsU0FBUyxHQUFHLElBQUksTUFBTSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3JELEtBQUssQ0FBQyxHQUFHLENBQUMs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QUFDO3dCQUNqQyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDekM7b0JBQ0QsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2lCQUN6RDthQUNKO1NBQ0o7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFNRCxXQUFXLENBQUMsU0FBUztRQUNqQixJQUFJLE1BQU0sQ0FBQztRQUNYLElBQUksT0FBTyxTQUFTLElBQUksUUFBUSxFQUFFO1lBRTlCLElBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUU7Z0JBQ3hDLElBQUksTUFBTSxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7Z0JBQzdCLE1BQU0sR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQzthQUMxRDtTQUNKO2FBQ0k7WUFDRCxNQUFNLEdBQUcsU0FBUyxDQUFDO1NBQ3RCO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQzs7Z0VBaGVRLFFBQVE7Z0RBQVIsUUFBUSxXQUFSLFFBQVEsbUJBRkwsTUFBTTt1RkFFVCxRQUFRO2NBSHBCLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5pbXBvcnQgeyBIdHRwUmVxU2VydmljZSB9IGZyb20gJ2Vwc2dpcydcclxuXHJcbmltcG9ydCB0dXJmIGZyb20gJ3R1cmYnXHJcbmxldCBwcm9wZXJ0eUxpc3RzID0gW11cclxubGV0IGN6bU9iamVjdExpc3QgPSBbXVxyXG5sZXQgcmVzTGlzdCA9IFtdXHJcbmxldCBoaWdoTGlnaHQgPSBudWxsXHJcbndpbmRvd1tcImFsbG93Q2xpY2tcIl0gPSBmYWxzZTtcclxuQEluamVjdGFibGUoe1xyXG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJZGVudGlmeSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwUmVxU2VydmljZSkge1xyXG4gICAgICAgIC8vIGRlYnVnZ2VyXHJcbiAgICB9XHJcbiAgICBodHRwUmVxKG1ldGhvZCwgdXJsKSB7XHJcbiAgICAgICAgaWYgKG1ldGhvZCA9PSAncG9zdCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5odHRwQ2xpZW50LnBvc3QodXJsLCBcIlwiKS50b1Byb21pc2UoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWV0aG9kID09ICdnZXQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuaHR0cENsaWVudC5nZXQodXJsKS50b1Byb21pc2UoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogZ2Vvc2VydmVy5pyN5Yqh6I635Y+W54K56YCJ5L2N572u6KaB57Sg5bGe5oCnXHJcbiAgICAgKiBAcGFyYW0gY3ptT2JqZWN0IFxyXG4gICAgICogQHBhcmFtIGVhcnRoIOWIm+W7uueahOWcsOeQg1xyXG4gICAgICogQHBhcmFtIHR5cGUg6K+G5Yir57G75Z6L77ya54K544CB57q/44CB6Z2iKOebruWJjeWPquacieeCuSlcclxuICAgICAqIEBwYXJhbSBjYWxsYmFjayDlm57osIPlh73mlbBcclxuICAgICAqL1xyXG4gICAgR2V0RmVhdHVyZUluZm8oY3ptT2JqZWN0LCBlYXJ0aCwgdHlwZSwgY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAoaGlnaExpZ2h0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgaGlnaExpZ2h0ID0gbmV3IENlc2l1bS5DdXN0b21EYXRhU291cmNlKCdoaWdoTGlnaHQnKTtcclxuICAgICAgICAgICAgZWFydGguY3ptLnZpZXdlci5kYXRhU291cmNlcy5hZGQoaGlnaExpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHNjZW5lID0gZWFydGguY3ptLnNjZW5lO1xyXG4gICAgICAgIGxldCB2aWV3ZXIgPSBlYXJ0aC5jem0udmlld2VyO1xyXG4gICAgICAgIGxldCBXRlNVcmwgPSB0aGlzLkdldFdGU1VybChjem1PYmplY3QueGJzakltYWdlcnlQcm92aWRlcik7XHJcbiAgICAgICAgbGV0IGhhbmRsZXIgPSBuZXcgQ2VzaXVtLlNjcmVlblNwYWNlRXZlbnRIYW5kbGVyKHNjZW5lLmNhbnZhcyk7XHJcbiAgICAgICAgbGV0IGZpbHRlciA9IFwiXCJcclxuXHJcbiAgICAgICAgaGFuZGxlci5zZXRJbnB1dEFjdGlvbigoY2xpY2spID0+IHtcclxuICAgICAgICAgICAgaWYgKCF3aW5kb3dbXCJhbGxvd0NsaWNrXCJdKSByZXR1cm47XHJcbiAgICAgICAgICAgIGlmICghY3ptT2JqZWN0LnNob3cpIHJldHVybjtcclxuICAgICAgICAgICAgZWFydGguc2NlbmVUcmVlLiRyZWZzLnBpbjEuY3ptT2JqZWN0LmN1c3RvbVByb3AgPSBmYWxzZTtcclxuICAgICAgICAgICAgaGlnaExpZ2h0LmVudGl0aWVzLnJlbW92ZUFsbCgpO1xyXG4gICAgICAgICAgICByZXNMaXN0ID0gW107XHJcbiAgICAgICAgICAgIGVhcnRoLnNjZW5lVHJlZS4kcmVmcy5waW4xLmN6bU9iamVjdC5wb3NpdGlvbiA9IHRoaXMuQ2FydGVzaWFuMlRvQ2FydG9ncmFwaGljKHZpZXdlciwgY2xpY2sucG9zaXRpb24pXHJcbiAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9IHRoaXMuQ2FydGVzaWFuMlRvV0dTODQodmlld2VyLCBjbGljay5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgIGxldCBidWZmZXJDb29yZGluYXRlcyA9IHRoaXMuQnVmZmVyKFtwb3NpdGlvbi5sb24sIHBvc2l0aW9uLmxhdF0sIDEwMCk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlID09ICdwb2ludCcpIHtcclxuICAgICAgICAgICAgICAgIGZpbHRlciA9IGA8RmlsdGVyIHhtbG5zPVwiaHR0cDovL3d3dy5vcGVuZ2lzLm5ldC9vZ2NcIiB4bWxuczpnbWw9XCJodHRwOi8vd3d3Lm9wZW5naXMubmV0L2dtbFwiPjxJbnRlcnNlY3RzPjxQcm9wZXJ0eU5hbWU+dGhlX2dlb208L1Byb3BlcnR5TmFtZT48Z21sOm91dGVyQm91bmRhcnlJcz48Z21sOkxpbmVhclJpbmc+PGdtbDpjb29yZGluYXRlcz4ke2J1ZmZlckNvb3JkaW5hdGVzfTwvZ21sOmNvb3JkaW5hdGVzPjwvZ21sOkxpbmVhclJpbmc+PC9nbWw6b3V0ZXJCb3VuZGFyeUlzPjwvSW50ZXJzZWN0cz48L0ZpbHRlcj5gXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9ICdsaW5lJykge1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID0gJ3BvbHlnb24nKSB7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaHR0cFJlcSgncG9zdCcsIFdGU1VybCArIGZpbHRlcikudGhlbigocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuZmVhdHVyZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwcm9wZXJ0aWVzID0gcmVzLmZlYXR1cmVzWzBdLnByb3BlcnRpZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByb3BlcnR5TGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHByb3BlcnRpZXMpLm1hcChrZXkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZToga2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHByb3BlcnRpZXNba2V5XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlMaXN0cy5wdXNoKHByb3BlcnR5TGlzdClcclxuICAgICAgICAgICAgICAgICAgICBjem1PYmplY3RMaXN0LnB1c2goY3ptT2JqZWN0KVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc0xpc3QucHVzaChyZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5aaC5p6c5pyJ5Zu+5bGC6YeN5Y+g77yM5Y+q56ys5LiA5Liq5Zu+5bGC6L+U5Zue5bGe5oCnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNMaXN0Lmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRlYnVnZ2VyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN6bU9iamVjdExpc3RbMF0uX2NpID4gY3ptT2JqZWN0TGlzdFsxXS5fY2kpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3ptT2JqZWN0TGlzdFswXS5fY2kgIT09IGN6bU9iamVjdC5fY2kpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHByb3BlcnR5TGlzdHNbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDZXNpdW0uR2VvSnNvbkRhdGFTb3VyY2UubG9hZChyZXNMaXN0WzBdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZGF0YVNvdXJjZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZS5lbnRpdGllcy52YWx1ZXMuZm9yRWFjaChlbnRpdHkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWdoTGlnaHQuZW50aXRpZXMuYWRkKGVudGl0eSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjem1PYmplY3RMaXN0WzFdLl9jaSAhPT0gY3ptT2JqZWN0Ll9jaSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socHJvcGVydHlMaXN0c1sxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENlc2l1bS5HZW9Kc29uRGF0YVNvdXJjZS5sb2FkKHJlc0xpc3RbMV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihkYXRhU291cmNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlLmVudGl0aWVzLnZhbHVlcy5mb3JFYWNoKGVudGl0eSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2hMaWdodC5lbnRpdGllcy5hZGQoZW50aXR5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHByb3BlcnR5TGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2VzaXVtLkdlb0pzb25EYXRhU291cmNlLmxvYWQocmVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihkYXRhU291cmNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2UuZW50aXRpZXMudmFsdWVzLmZvckVhY2goZW50aXR5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWdoTGlnaHQuZW50aXRpZXMuYWRkKGVudGl0eSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNMaXN0ID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlMaXN0cyA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN6bU9iamVjdExpc3QgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHsgfSlcclxuICAgICAgICB9LCBDZXNpdW0uU2NyZWVuU3BhY2VFdmVudFR5cGUuTEVGVF9DTElDSylcclxuICAgIH1cclxuICAgIEluaXRIYW5kbGVyKCkge1xyXG5cclxuICAgIH1cclxuICAgIC8vYXJjZ2lzXHJcbiAgICBnZXRMYXllcnMoY3ptT2JqZWN0LCBlYXJ0aCwgY2FsbGJhY2spIHtcclxuICAgICAgICBsZXQgaGFuZGxlciA9IG5ldyBDZXNpdW0uU2NyZWVuU3BhY2VFdmVudEhhbmRsZXIoZWFydGguY3ptLnNjZW5lLmNhbnZhcyk7XHJcbiAgICAgICAgbGV0IHVybCA9IGN6bU9iamVjdC54YnNqSW1hZ2VyeVByb3ZpZGVyLldlYk1hcFRpbGVTZXJ2aWNlSW1hZ2VyeVByb3ZpZGVyLnVybCB8fCBjem1PYmplY3QueGJzakltYWdlcnlQcm92aWRlci5TU1dlYk1hcFNlcnZpY2VJbWFnZXJ5UHJvdmlkZXIudXJsO1xyXG4gICAgICAgIGxldCByZXF1ZXN0VXJsID0gXCJcIlxyXG4gICAgICAgIGlmIChjem1PYmplY3QueGJzakltYWdlcnlQcm92aWRlci50eXBlID09IFwiV2ViTWFwVGlsZVNlcnZpY2VJbWFnZXJ5UHJvdmlkZXJcIikge1xyXG4gICAgICAgICAgICByZXF1ZXN0VXJsID0gdXJsLnNwbGl0KCdNYXBTZXJ2ZXInKVswXSArIFwiTWFwU2VydmVyL2xheWVycz9mPXBqc29uXCJcclxuICAgICAgICB9IGVsc2UgaWYgKGN6bU9iamVjdC54YnNqSW1hZ2VyeVByb3ZpZGVyLnR5cGUgPT0gXCJTU1dlYk1hcFNlcnZpY2VJbWFnZXJ5UHJvdmlkZXJcIikge1xyXG4gICAgICAgICAgICByZXF1ZXN0VXJsID0gdXJsLnNwbGl0KCdhcmNnaXMnKVswXSArICdhcmNnaXMvcmVzdCcgKyB1cmwuc3BsaXQoJ2FyY2dpcycpWzFdLnNwbGl0KCdNYXBTZXJ2ZXInKVswXSArIFwiTWFwU2VydmVyL2xheWVycz9mPXBqc29uXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGxldCBsYXllcnM9W107XHJcbiAgICAgICAgdGhpcy5odHRwUmVxKCdnZXQnLCByZXF1ZXN0VXJsKS50aGVuKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBkZWJ1Z2dlclxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgIGhhbmRsZXIuc2V0SW5wdXRBY3Rpb24oKGNsaWNrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmxheWVycyA9PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGlmICghd2luZG93W1wiYWxsb3dDbGlja1wiXSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjem1PYmplY3Quc2hvdykgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgaGlnaExpZ2h0LmVudGl0aWVzLnJlbW92ZUFsbCgpO1xyXG4gICAgICAgICAgICAgICAgZWFydGguc2NlbmVUcmVlLiRyZWZzLnBpbjEuY3ptT2JqZWN0LmN1c3RvbVByb3AgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGVhcnRoLnNjZW5lVHJlZS4kcmVmcy5waW4xLmN6bU9iamVjdC5wb3NpdGlvbiA9IHRoaXMuQ2FydGVzaWFuMlRvQ2FydG9ncmFwaGljKGVhcnRoLmN6bS52aWV3ZXIsIGNsaWNrLnBvc2l0aW9uKVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9IHRoaXMuQ2FydGVzaWFuMlRvV0dTODQoZWFydGguY3ptLnZpZXdlciwgY2xpY2sucG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgbGV0IGJ1ZmZlckNvb3JkaW5hdGVzID0gdGhpcy5CdWZmZXIoW3Bvc2l0aW9uLmxvbiwgcG9zaXRpb24ubGF0XSwgMSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYWRkciA9IHRoaXMuR2V0V0ZTVXJsKGN6bU9iamVjdC54YnNqSW1hZ2VyeVByb3ZpZGVyKTtcclxuICAgICAgICAgICAgICAgIGxldCB0eXBlTmFtZSA9IHVybC5zcGxpdCgnL01hcFNlcnZlcicpWzBdLnNwbGl0KCdzZXJ2aWNlcy8nKVsxXTtcclxuICAgICAgICAgICAgICAgIGxldCByZXNMaXN0ID0gW11cclxuICAgICAgICAgICAgICAgIGxldCBnZW9tZXRyeUxpc3QgPSBbXVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjem1PYmplY3QueGJzakltYWdlcnlQcm92aWRlci50eXBlID09IFwiV2ViTWFwVGlsZVNlcnZpY2VJbWFnZXJ5UHJvdmlkZXJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzLmxheWVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gcmVzLmxheWVyc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHF1ZXJ5ID0gYCR7YWRkcn1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArIGB0eXBlbmFtZT0ke3R5cGVOYW1lfToke2l0ZW0ubmFtZX0mRmlsdGVyPWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgYDxvZ2M6RmlsdGVyPjxvZ2M6SW50ZXJzZWN0cz48b2djOlByb3BlcnR5TmFtZT5TaGFwZTwvb2djOlByb3BlcnR5TmFtZT5gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArIGA8Z21sOlBvbHlnb24gc3JzTmFtZT1cInVybjp4LW9nYzpkZWY6Y3JzOkVQU0c6NDMyNlwiPjxnbWw6b3V0ZXJCb3VuZGFyeUlzPjxnbWw6TGluZWFyUmluZz5gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArIGA8Z21sOmNvb3JkaW5hdGVzPiR7YnVmZmVyQ29vcmRpbmF0ZXN9PC9nbWw6Y29vcmRpbmF0ZXM+YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBgPC9nbWw6TGluZWFyUmluZz48L2dtbDpvdXRlckJvdW5kYXJ5SXM+PC9nbWw6UG9seWdvbj48L29nYzpJbnRlcnNlY3RzPjwvb2djOkZpbHRlcj5gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaHR0cFJlcSgnZ2V0JywgcXVlcnkpLnRoZW4oKS5jYXRjaCgoZXJyOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBlcnIuZXJyb3IudGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGVidWdnZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnhtbDJKc29uKHRoaXMuc3RyaW5nVG9YbWwocmVzKSlbJ0ZlYXR1cmVDb2xsZWN0aW9uJ11bJ2ZlYXR1cmVNZW1iZXInXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcm9wZXJ0aWVzID0gdGhpcy54bWwySnNvbih0aGlzLnN0cmluZ1RvWG1sKHJlcykpWydGZWF0dXJlQ29sbGVjdGlvbiddWydmZWF0dXJlTWVtYmVyJ11baXRlbS5uYW1lXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcm9wZXJ0eUxpc3QgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBnZW9qc29uID0ge31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkZWJ1Z2dlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzID09IHVuZGVmaW5lZCB8fCBwcm9wZXJ0aWVzID09IG51bGwpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKS5tYXAoa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleSAhPT0gXCJTaGFwZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eUxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZToga2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwcm9wZXJ0aWVzW2tleV0udmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllc1trZXldLk11bHRpU3VyZmFjZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3NMaXN0ID0gcHJvcGVydGllc1trZXldLk11bHRpU3VyZmFjZS5zdXJmYWNlTWVtYmVyLlBvbHlnb24uZXh0ZXJpb3IuTGluZWFyUmluZy5wb3NMaXN0LnZhbHVlLnNwbGl0KFwiIFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NMaXN0LnNoaWZ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxpc3QgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zTGlzdC5sZW5ndGg7IGkgKz0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0LnB1c2goW3Bvc0xpc3RbaV0sIHBvc0xpc3RbaSArIDFdXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvanNvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJGZWF0dXJlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkxpbmVTdHJpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBsaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHByb3BlcnRpZXNba2V5XS5Qb2ludCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3NMaXN0ID0gcHJvcGVydGllc1trZXldLlBvaW50LnBvcy52YWx1ZS5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvanNvbiA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkZlYXR1cmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUG9pbnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBwb3NMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHByb3BlcnRpZXNba2V5XS5NdWx0aUN1cnZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvc0xpc3QgPSBwcm9wZXJ0aWVzW2tleV0uTXVsdGlDdXJ2ZS5jdXJ2ZU1lbWJlci5MaW5lU3RyaW5nLnBvc0xpc3QudmFsdWUuc3BsaXQoXCIgXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGlzdCA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3NMaXN0Lmxlbmd0aDsgaSArPSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QucHVzaChbcG9zTGlzdFtpXSwgcG9zTGlzdFtpICsgMV1dKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9qc29uID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiRmVhdHVyZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJMaW5lU3RyaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlczogbGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzTGlzdC5wdXNoKHByb3BlcnR5TGlzdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeUxpc3QucHVzaChnZW9qc29uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3ptT2JqZWN0Lnhic2pJbWFnZXJ5UHJvdmlkZXIudHlwZSA9PSBcIlNTV2ViTWFwU2VydmljZUltYWdlcnlQcm92aWRlclwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxsaXN0ID0gY3ptT2JqZWN0Lnhic2pJbWFnZXJ5UHJvdmlkZXIuU1NXZWJNYXBTZXJ2aWNlSW1hZ2VyeVByb3ZpZGVyLmxheWVyLnNwbGl0KFwiLFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IHJlcy5sYXllcnNbcmVzLmxheWVycy5sZW5ndGggLSAxIC0gbGxpc3RbaV1dO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHF1ZXJ5ID0gYCR7YWRkcn1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArIGB0eXBlbmFtZT0ke3R5cGVOYW1lfToke2l0ZW0ubmFtZX0mRmlsdGVyPWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgYDxvZ2M6RmlsdGVyPjxvZ2M6SW50ZXJzZWN0cz48b2djOlByb3BlcnR5TmFtZT5TaGFwZTwvb2djOlByb3BlcnR5TmFtZT5gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArIGA8Z21sOlBvbHlnb24gc3JzTmFtZT1cInVybjp4LW9nYzpkZWY6Y3JzOkVQU0c6NDMyNlwiPjxnbWw6b3V0ZXJCb3VuZGFyeUlzPjxnbWw6TGluZWFyUmluZz5gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArIGA8Z21sOmNvb3JkaW5hdGVzPiR7YnVmZmVyQ29vcmRpbmF0ZXN9PC9nbWw6Y29vcmRpbmF0ZXM+YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBgPC9nbWw6TGluZWFyUmluZz48L2dtbDpvdXRlckJvdW5kYXJ5SXM+PC9nbWw6UG9seWdvbj48L29nYzpJbnRlcnNlY3RzPjwvb2djOkZpbHRlcj5gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0ubmFtZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5odHRwUmVxKCdnZXQnLCBxdWVyeSkudGhlbigpLmNhdGNoKChlcnI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IGVyci5lcnJvci50ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy54bWwySnNvbih0aGlzLnN0cmluZ1RvWG1sKHJlcykpWydGZWF0dXJlQ29sbGVjdGlvbiddID09IHVuZGVmaW5lZCkgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkZWJ1Z2dlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMueG1sMkpzb24odGhpcy5zdHJpbmdUb1htbChyZXMpKVsnRmVhdHVyZUNvbGxlY3Rpb24nXVsnZmVhdHVyZU1lbWJlciddKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy54bWwySnNvbih0aGlzLnN0cmluZ1RvWG1sKHJlcykpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcm9wZXJ0aWVzID0gdGhpcy54bWwySnNvbih0aGlzLnN0cmluZ1RvWG1sKHJlcykpWydGZWF0dXJlQ29sbGVjdGlvbiddWydmZWF0dXJlTWVtYmVyJ11baXRlbS5uYW1lXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcm9wZXJ0eUxpc3QgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBnZW9qc29uID0ge31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkZWJ1Z2dlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzID09IHVuZGVmaW5lZCB8fCBwcm9wZXJ0aWVzID09IG51bGwpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKS5tYXAoa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleSAhPT0gXCJTaGFwZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eUxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZToga2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwcm9wZXJ0aWVzW2tleV0udmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllc1trZXldLk11bHRpU3VyZmFjZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3NMaXN0ID0gcHJvcGVydGllc1trZXldLk11bHRpU3VyZmFjZS5zdXJmYWNlTWVtYmVyLlBvbHlnb24uZXh0ZXJpb3IuTGluZWFyUmluZy5wb3NMaXN0LnZhbHVlLnNwbGl0KFwiIFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NMaXN0LnNoaWZ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxpc3QgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zTGlzdC5sZW5ndGg7IGkgKz0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0LnB1c2goW3Bvc0xpc3RbaV0sIHBvc0xpc3RbaSArIDFdXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvanNvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJGZWF0dXJlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkxpbmVTdHJpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBsaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHByb3BlcnRpZXNba2V5XS5Qb2ludCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3NMaXN0ID0gcHJvcGVydGllc1trZXldLlBvaW50LnBvcy52YWx1ZS5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvanNvbiA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkZlYXR1cmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUG9pbnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBwb3NMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHByb3BlcnRpZXNba2V5XS5NdWx0aUN1cnZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvc0xpc3QgPSBwcm9wZXJ0aWVzW2tleV0uTXVsdGlDdXJ2ZS5jdXJ2ZU1lbWJlci5MaW5lU3RyaW5nLnBvc0xpc3QudmFsdWUuc3BsaXQoXCIgXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGlzdCA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3NMaXN0Lmxlbmd0aDsgaSArPSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QucHVzaChbcG9zTGlzdFtpXSwgcG9zTGlzdFtpICsgMV1dKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9qc29uID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiRmVhdHVyZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJMaW5lU3RyaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlczogbGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzTGlzdC5wdXNoKHByb3BlcnR5TGlzdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeUxpc3QucHVzaChnZW9qc29uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc0xpc3QubGVuZ3RoID4gMCAmJiBnZW9tZXRyeUxpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2VvbWV0cnlMaXN0WzBdLmdlb21ldHJ5LnR5cGUgPT0gXCJQb2ludFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDZXNpdW0uR2VvSnNvbkRhdGFTb3VyY2UubG9hZChnZW9tZXRyeUxpc3RbMF0pLnRoZW4oZGF0YVNvdXJjZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZS5lbnRpdGllcy52YWx1ZXMuZm9yRWFjaChlbnRpdHkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkuYmlsbGJvYXJkID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5LnBvaW50ID0gbmV3IENlc2l1bS5Qb2ludEdyYXBoaWNzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogQ2VzaXVtLkNvbG9yLkFRVUEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaXhlbFNpemU6IDEwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2hMaWdodC5lbnRpdGllcy5hZGQoZW50aXR5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGdlb21ldHJ5TGlzdFswXS5nZW9tZXRyeS50eXBlID09IFwiTGluZVN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDZXNpdW0uR2VvSnNvbkRhdGFTb3VyY2UubG9hZChnZW9tZXRyeUxpc3RbMF0pLnRoZW4oZGF0YVNvdXJjZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZS5lbnRpdGllcy52YWx1ZXMuZm9yRWFjaChlbnRpdHkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkucG9seWxpbmUud2lkdGggPSAxMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkucG9seWxpbmUubWF0ZXJpYWwgPSBuZXcgQ2VzaXVtLlBvbHlsaW5lR2xvd01hdGVyaWFsUHJvcGVydHkoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvd1Bvd2VyOiAwLjIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogQ2VzaXVtLkNvbG9yLkJMVUVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2hMaWdodC5lbnRpdGllcy5hZGQoZW50aXR5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2VzaXVtLkdlb0pzb25EYXRhU291cmNlLmxvYWQoZ2VvbWV0cnlMaXN0WzBdKS50aGVuKGRhdGFTb3VyY2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2UuZW50aXRpZXMudmFsdWVzLmZvckVhY2goZW50aXR5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlnaExpZ2h0LmVudGl0aWVzLmFkZChlbnRpdHkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzTGlzdFswXSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICAgICAgfSwgQ2VzaXVtLlNjcmVlblNwYWNlRXZlbnRUeXBlLkxFRlRfQ0xJQ0spXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5bGP5bmV5Z2Q5qCH6L2s57uP57qs5bqm5Z2Q5qCHXHJcbiAgICAgKiBAcGFyYW0gdmlld2VyIFxyXG4gICAgICogQHBhcmFtIHBvc2l0aW9uIOWxj+W5leWdkOagh2NhcnRlc2lhbjJcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBDYXJ0ZXNpYW4yVG9XR1M4NCh2aWV3ZXIsIHBvc2l0aW9uKSB7XHJcbiAgICAgICAgdmFyIHJheSA9IHZpZXdlci5jYW1lcmEuZ2V0UGlja1JheShwb3NpdGlvbik7XHJcbiAgICAgICAgdmFyIGNhcnRlc2lhbiA9IHZpZXdlci5zY2VuZS5nbG9iZS5waWNrKHJheSwgdmlld2VyLnNjZW5lKTtcclxuICAgICAgICB2YXIgY2FydG9ncmFwaGljID0gQ2VzaXVtLkNhcnRvZ3JhcGhpYy5mcm9tQ2FydGVzaWFuKGNhcnRlc2lhbik7XHJcbiAgICAgICAgbGV0IGxvbiA9IENlc2l1bS5NYXRoLnRvRGVncmVlcyhjYXJ0b2dyYXBoaWMubG9uZ2l0dWRlKVxyXG4gICAgICAgIGxldCBsYXQgPSBDZXNpdW0uTWF0aC50b0RlZ3JlZXMoY2FydG9ncmFwaGljLmxhdGl0dWRlKVxyXG4gICAgICAgIHJldHVybiB7IGxvbjogbG9uLCBsYXQ6IGxhdCB9XHJcbiAgICB9XHJcblxyXG4gICAgQ2FydGVzaWFuMlRvQ2FydG9ncmFwaGljKHZpZXdlciwgcG9zaXRpb24pIHtcclxuICAgICAgICB2YXIgcmF5ID0gdmlld2VyLmNhbWVyYS5nZXRQaWNrUmF5KHBvc2l0aW9uKTtcclxuICAgICAgICB2YXIgY2FydGVzaWFuID0gdmlld2VyLnNjZW5lLmdsb2JlLnBpY2socmF5LCB2aWV3ZXIuc2NlbmUpO1xyXG4gICAgICAgIHZhciBjYXJ0b2dyYXBoaWMgPSBDZXNpdW0uQ2FydG9ncmFwaGljLmZyb21DYXJ0ZXNpYW4oY2FydGVzaWFuKTtcclxuICAgICAgICByZXR1cm4gW2NhcnRvZ3JhcGhpYy5sb25naXR1ZGUsIGNhcnRvZ3JhcGhpYy5sYXRpdHVkZSwgY2FydG9ncmFwaGljLmhlaWdodF1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5ou85o6l55So5LqOd2Zz5p+l6K+i55qEdXJsXHJcbiAgICAgKiBAcGFyYW0gV01UU0ltYWdlcnlQcm92aWRlciBcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBHZXRXRlNVcmwoSW1hZ2VyeVByb3ZpZGVyKSB7XHJcbiAgICAgICAgbGV0IFdGU1VybCA9IFwiXCI7XHJcbiAgICAgICAgaWYgKEltYWdlcnlQcm92aWRlci50eXBlID09IFwiV2ViTWFwVGlsZVNlcnZpY2VJbWFnZXJ5UHJvdmlkZXJcIikge1xyXG4gICAgICAgICAgICBsZXQgV01UU0ltYWdlcnlQcm92aWRlciA9IEltYWdlcnlQcm92aWRlci5XZWJNYXBUaWxlU2VydmljZUltYWdlcnlQcm92aWRlcjtcclxuICAgICAgICAgICAgaWYgKFdNVFNJbWFnZXJ5UHJvdmlkZXIudXJsLmluZGV4T2YoJ2FyY2dpcycpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgV0ZTVXJsID0gV01UU0ltYWdlcnlQcm92aWRlci51cmwuc3BsaXQoXCJyZXN0XCIpWzBdICsgV01UU0ltYWdlcnlQcm92aWRlci51cmwuc3BsaXQoXCJyZXN0L1wiKVsxXS5zcGxpdChcIk1hcFNlcnZlclwiKVswXSArIFwiTWFwU2VydmVyL1dGU1NlcnZlcj9yZXF1ZXN0PUdldEZlYXR1cmUmc2VydmljZT1XRlMmdmVyc2lvbj0xLjEuMCZcIjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChXTVRTSW1hZ2VyeVByb3ZpZGVyLnVybC5pbmRleE9mKCdnZW9zZXJ2ZXInKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIFdGU1VybCA9IFdNVFNJbWFnZXJ5UHJvdmlkZXIudXJsLnNwbGl0KFwiZ3djXCIpWzBdICsgV01UU0ltYWdlcnlQcm92aWRlci5sYXllci5zcGxpdChcIjpcIilbMF0gKyBcIi9vd3M/c2VydmljZT1XRlMmdmVyc2lvbj0xLjAuMCZyZXF1ZXN0PUdldEZlYXR1cmUmdHlwZU5hbWU9XCIgKyBXTVRTSW1hZ2VyeVByb3ZpZGVyLmxheWVyICsgXCImbWF4RmVhdHVyZXM9MSZvdXRwdXRGb3JtYXQ9anNvbiZmaWx0ZXI9XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoSW1hZ2VyeVByb3ZpZGVyLnR5cGUgPT0gXCJTU1dlYk1hcFNlcnZpY2VJbWFnZXJ5UHJvdmlkZXJcIikge1xyXG4gICAgICAgICAgICBsZXQgU1NXZWJNYXBTZXJ2aWNlSW1hZ2VyeVByb3ZpZGVyID0gSW1hZ2VyeVByb3ZpZGVyLlNTV2ViTWFwU2VydmljZUltYWdlcnlQcm92aWRlcjtcclxuICAgICAgICAgICAgaWYgKFNTV2ViTWFwU2VydmljZUltYWdlcnlQcm92aWRlci51cmwuaW5kZXhPZignYXJjZ2lzJykgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBXRlNVcmwgPSBTU1dlYk1hcFNlcnZpY2VJbWFnZXJ5UHJvdmlkZXIudXJsLnNwbGl0KFwiTWFwU2VydmVyXCIpWzBdICsgXCJNYXBTZXJ2ZXIvV0ZTU2VydmVyP3JlcXVlc3Q9R2V0RmVhdHVyZSZzZXJ2aWNlPVdGUyZ2ZXJzaW9uPTEuMS4wJlwiO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKFNTV2ViTWFwU2VydmljZUltYWdlcnlQcm92aWRlci51cmwuaW5kZXhPZignZ2Vvc2VydmVyJykgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBXRlNVcmwgPSBTU1dlYk1hcFNlcnZpY2VJbWFnZXJ5UHJvdmlkZXIudXJsLnNwbGl0KFwid21zXCIpWzBdICsgXCIvb3dzP3NlcnZpY2U9V0ZTJnZlcnNpb249MS4wLjAmcmVxdWVzdD1HZXRGZWF0dXJlJnR5cGVOYW1lPVwiICsgU1NXZWJNYXBTZXJ2aWNlSW1hZ2VyeVByb3ZpZGVyLmxheWVyICsgXCImbWF4RmVhdHVyZXM9MSZvdXRwdXRGb3JtYXQ9anNvbiZmaWx0ZXI9XCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBXRlNVcmxcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gcG9zaXRpb24gW2xvbixsYXRdXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgQnVmZmVyKHBvc2l0aW9uLCBtZXRlcnMpIHtcclxuICAgICAgICBsZXQgcG9pbnRGID0gdHVyZi5wb2ludChwb3NpdGlvbik7XHJcbiAgICAgICAgbGV0IGJ1ZmZlcmVkID0gdHVyZi5idWZmZXIocG9pbnRGLCBtZXRlcnMsICdtZXRlcnMnKTtcclxuICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSBidWZmZXJlZC5nZW9tZXRyeS5jb29yZGluYXRlcztcclxuICAgICAgICBsZXQgcG9pbnRzID0gY29vcmRpbmF0ZXNbMF07XHJcbiAgICAgICAgbGV0IGRlZ3JlZXNMaXN0U3RyID0gdGhpcy5wb2ludHNUb0RlZ3JlZXNBcnJheShwb2ludHMpO1xyXG4gICAgICAgIHJldHVybiBkZWdyZWVzTGlzdFN0clxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSBwb2ludHMg5qC85byP6L2s5o2iXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcG9pbnRzVG9EZWdyZWVzQXJyYXkocG9pbnRzKSB7XHJcbiAgICAgICAgbGV0IGRlZ3JlZXNBcnJheSA9IFwiXCI7XHJcbiAgICAgICAgcG9pbnRzLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgZGVncmVlc0FycmF5ICs9IGl0ZW1bMF0gKyBcIixcIiArIGl0ZW1bMV0gKyBcIiBcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBkZWdyZWVzQXJyYXk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOa4hemZpOmrmOS6rlxyXG4gICAgICovXHJcbiAgICBDbGVhckhpZ2hMaWdodCgpIHtcclxuICAgICAgICBoaWdoTGlnaHQuZW50aXRpZXMucmVtb3ZlQWxsKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIHhtbOi9rGpzb25cclxuICAgICAqIEBwYXJhbSB4bWwgXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgeG1sMkpzb24oeG1sKSB7XHJcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSByZXR1cm4gb2JqZWN0XHJcbiAgICAgICAgdmFyIG9iaiA9IHt9O1xyXG4gICAgICAgIGlmICh4bWwubm9kZVR5cGUgPT0gMSkgeyAvLyBlbGVtZW50XHJcbiAgICAgICAgICAgIC8vIGRvIGF0dHJpYnV0ZXNcclxuICAgICAgICAgICAgaWYgKHhtbC5hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIG9ialtcIkBhdHRyaWJ1dGVzXCJdID0ge307XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHhtbC5hdHRyaWJ1dGVzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZGVidWdnZXJcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYXR0cmlidXRlID0geG1sLmF0dHJpYnV0ZXMuaXRlbShqKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cmlidXRlLm5vZGVOYW1lLmluZGV4T2YoXCI6XCIpID09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ialtcIkBhdHRyaWJ1dGVzXCJdW2F0dHJpYnV0ZS5ub2RlTmFtZV0gPSBhdHRyaWJ1dGUubm9kZVZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ialtcIkBhdHRyaWJ1dGVzXCJdW2F0dHJpYnV0ZS5ub2RlTmFtZS5zcGxpdChcIjpcIilbMV1dID0gYXR0cmlidXRlLm5vZGVWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh4bWwubm9kZVR5cGUgPT0gMykgeyAvLyB0ZXh0XHJcbiAgICAgICAgICAgIG9iaiA9IHhtbC5ub2RlVmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGRvIGNoaWxkcmVuXHJcbiAgICAgICAgaWYgKHhtbC5oYXNDaGlsZE5vZGVzKCkpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4bWwuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSB4bWwuY2hpbGROb2Rlcy5pdGVtKGkpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG5vZGVOYW1lID0gaXRlbS5ub2RlTmFtZTtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKG9ialtub2RlTmFtZS5zcGxpdChcIjpcIilbMV1dKSA9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGVOYW1lLnNwbGl0KFwiOlwiKVsxXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqWyd2YWx1ZSddID0gdGhpcy54bWwySnNvbihpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpbbm9kZU5hbWUuc3BsaXQoXCI6XCIpWzFdXSA9IHRoaXMueG1sMkpzb24oaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAob2JqW25vZGVOYW1lLnNwbGl0KFwiOlwiKVsxXV0ubGVuZ3RoKSA9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvbGQgPSBvYmpbbm9kZU5hbWUuc3BsaXQoXCI6XCIpWzFdXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqW25vZGVOYW1lLnNwbGl0KFwiOlwiKVsxXV0gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqW25vZGVOYW1lLnNwbGl0KFwiOlwiKVsxXV0ucHVzaChvbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBvYmpbbm9kZU5hbWUuc3BsaXQoXCI6XCIpWzFdXS5wdXNoKHRoaXMueG1sMkpzb24oaXRlbSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWtl+espuS4sui9rHhtbFxyXG4gICAgICogQHBhcmFtIHhtbFN0cmluZyBcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBzdHJpbmdUb1htbCh4bWxTdHJpbmcpIHtcclxuICAgICAgICB2YXIgeG1sRG9jO1xyXG4gICAgICAgIGlmICh0eXBlb2YgeG1sU3RyaW5nID09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgLy9GRlxyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlRG9jdW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XHJcbiAgICAgICAgICAgICAgICB4bWxEb2MgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHhtbFN0cmluZywgXCJ0ZXh0L3htbFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgeG1sRG9jID0geG1sU3RyaW5nO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geG1sRG9jO1xyXG4gICAgfVxyXG59Il19