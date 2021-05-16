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
            let bufferCoordinates = this.Buffer([position.lon, position.lat]);
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
            console.log(res);
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
                let bufferCoordinates = this.Buffer([position.lon, position.lat]);
                let addr = this.GetWFSUrl(czmObject.xbsjImageryProvider);
                let typeName = url.split('/MapServer')[0].split('services/')[1];
                let resList = [];
                let geometryList = [];
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
    Buffer(position) {
        let pointF = turf.point(position);
        let buffered = turf.buffer(pointF, 100, 'meters');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpZnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9lcHNwbGFuZXQvdXRpbHMvaWRlbnRpZnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUcxQyxPQUFPLElBQUksTUFBTSxNQUFNLENBQUE7OztBQUN2QixJQUFJLGFBQWEsR0FBRyxFQUFFLENBQUE7QUFDdEIsSUFBSSxhQUFhLEdBQUcsRUFBRSxDQUFBO0FBQ3RCLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQTtBQUNoQixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUE7QUFDcEIsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLEtBQUssQ0FBQztBQUk3QixNQUFNLE9BQU8sUUFBUTtJQUVqQixZQUFvQixJQUFvQjtRQUFwQixTQUFJLEdBQUosSUFBSSxDQUFnQjtJQUV4QyxDQUFDO0lBQ0QsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHO1FBQ2YsSUFBSSxNQUFNLElBQUksTUFBTSxFQUFFO1lBQ2xCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQTtTQUN4RDtRQUNELElBQUksTUFBTSxJQUFJLEtBQUssRUFBRTtZQUNqQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQTtTQUNuRDtJQUNMLENBQUM7SUFRRCxjQUFjLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsUUFBUTtRQUMzQyxJQUFJLFNBQVMsSUFBSSxJQUFJLEVBQUU7WUFDbkIsU0FBUyxHQUFHLElBQUksTUFBTSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3JELEtBQUssQ0FBQyxHQUFHLENBQUMs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O1NBQ0o7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFNRCxXQUFXLENBQUMsU0FBUztRQUNqQixJQUFJLE1BQU0sQ0FBQztRQUNYLElBQUksT0FBTyxTQUFTLElBQUksUUFBUSxFQUFFO1lBRTlCLElBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUU7Z0JBQ3hDLElBQUksTUFBTSxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7Z0JBQzdCLE1BQU0sR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQzthQUMxRDtTQUNKO2FBQ0k7WUFDRCxNQUFNLEdBQUcsU0FBUyxDQUFDO1NBQ3RCO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQzs7Z0VBOVlRLFFBQVE7Z0RBQVIsUUFBUSxXQUFSLFFBQVEsbUJBRkwsTUFBTTt1RkFFVCxRQUFRO2NBSHBCLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5pbXBvcnQgeyBIdHRwUmVxU2VydmljZSB9IGZyb20gJ2Vwc2dpcydcclxuXHJcbmltcG9ydCB0dXJmIGZyb20gJ3R1cmYnXHJcbmxldCBwcm9wZXJ0eUxpc3RzID0gW11cclxubGV0IGN6bU9iamVjdExpc3QgPSBbXVxyXG5sZXQgcmVzTGlzdCA9IFtdXHJcbmxldCBoaWdoTGlnaHQgPSBudWxsXHJcbndpbmRvd1tcImFsbG93Q2xpY2tcIl0gPSBmYWxzZTtcclxuQEluamVjdGFibGUoe1xyXG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJZGVudGlmeSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwUmVxU2VydmljZSkge1xyXG4gICAgICAgIC8vIGRlYnVnZ2VyXHJcbiAgICB9XHJcbiAgICBodHRwUmVxKG1ldGhvZCwgdXJsKSB7XHJcbiAgICAgICAgaWYgKG1ldGhvZCA9PSAncG9zdCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5odHRwQ2xpZW50LnBvc3QodXJsLCBcIlwiKS50b1Byb21pc2UoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWV0aG9kID09ICdnZXQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuaHR0cENsaWVudC5nZXQodXJsKS50b1Byb21pc2UoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogd210c+WbvuWxguiOt+WPlueCuemAieS9jee9ruimgee0oOWxnuaAp1xyXG4gICAgICogQHBhcmFtIGN6bU9iamVjdCBcclxuICAgICAqIEBwYXJhbSBlYXJ0aCDliJvlu7rnmoTlnLDnkINcclxuICAgICAqIEBwYXJhbSB0eXBlIOivhuWIq+exu+Wei++8mueCueOAgee6v+OAgemdoijnm67liY3lj6rmnInngrkpXHJcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sg5Zue6LCD5Ye95pWwXHJcbiAgICAgKi9cclxuICAgIEdldEZlYXR1cmVJbmZvKGN6bU9iamVjdCwgZWFydGgsIHR5cGUsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKGhpZ2hMaWdodCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGhpZ2hMaWdodCA9IG5ldyBDZXNpdW0uQ3VzdG9tRGF0YVNvdXJjZSgnaGlnaExpZ2h0Jyk7XHJcbiAgICAgICAgICAgIGVhcnRoLmN6bS52aWV3ZXIuZGF0YVNvdXJjZXMuYWRkKGhpZ2hMaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzY2VuZSA9IGVhcnRoLmN6bS5zY2VuZTtcclxuICAgICAgICBsZXQgdmlld2VyID0gZWFydGguY3ptLnZpZXdlcjtcclxuICAgICAgICBsZXQgV0ZTVXJsID0gdGhpcy5HZXRXRlNVcmwoY3ptT2JqZWN0Lnhic2pJbWFnZXJ5UHJvdmlkZXIpO1xyXG4gICAgICAgIGxldCBoYW5kbGVyID0gbmV3IENlc2l1bS5TY3JlZW5TcGFjZUV2ZW50SGFuZGxlcihzY2VuZS5jYW52YXMpO1xyXG4gICAgICAgIGxldCBmaWx0ZXIgPSBcIlwiXHJcblxyXG4gICAgICAgIGhhbmRsZXIuc2V0SW5wdXRBY3Rpb24oKGNsaWNrKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghd2luZG93W1wiYWxsb3dDbGlja1wiXSkgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZiAoIWN6bU9iamVjdC5zaG93KSByZXR1cm47XHJcbiAgICAgICAgICAgIGVhcnRoLnNjZW5lVHJlZS4kcmVmcy5waW4xLmN6bU9iamVjdC5jdXN0b21Qcm9wID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGhpZ2hMaWdodC5lbnRpdGllcy5yZW1vdmVBbGwoKTtcclxuICAgICAgICAgICAgcmVzTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICBlYXJ0aC5zY2VuZVRyZWUuJHJlZnMucGluMS5jem1PYmplY3QucG9zaXRpb24gPSB0aGlzLkNhcnRlc2lhbjJUb0NhcnRvZ3JhcGhpYyh2aWV3ZXIsIGNsaWNrLnBvc2l0aW9uKVxyXG4gICAgICAgICAgICBsZXQgcG9zaXRpb24gPSB0aGlzLkNhcnRlc2lhbjJUb1dHUzg0KHZpZXdlciwgY2xpY2sucG9zaXRpb24pO1xyXG4gICAgICAgICAgICBsZXQgYnVmZmVyQ29vcmRpbmF0ZXMgPSB0aGlzLkJ1ZmZlcihbcG9zaXRpb24ubG9uLCBwb3NpdGlvbi5sYXRdKTtcclxuICAgICAgICAgICAgaWYgKHR5cGUgPT0gJ3BvaW50Jykge1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyID0gYDxGaWx0ZXIgeG1sbnM9XCJodHRwOi8vd3d3Lm9wZW5naXMubmV0L29nY1wiIHhtbG5zOmdtbD1cImh0dHA6Ly93d3cub3Blbmdpcy5uZXQvZ21sXCI+PEludGVyc2VjdHM+PFByb3BlcnR5TmFtZT50aGVfZ2VvbTwvUHJvcGVydHlOYW1lPjxnbWw6b3V0ZXJCb3VuZGFyeUlzPjxnbWw6TGluZWFyUmluZz48Z21sOmNvb3JkaW5hdGVzPiR7YnVmZmVyQ29vcmRpbmF0ZXN9PC9nbWw6Y29vcmRpbmF0ZXM+PC9nbWw6TGluZWFyUmluZz48L2dtbDpvdXRlckJvdW5kYXJ5SXM+PC9JbnRlcnNlY3RzPjwvRmlsdGVyPmBcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID0gJ2xpbmUnKSB7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPSAncG9seWdvbicpIHtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5odHRwUmVxKCdwb3N0JywgV0ZTVXJsICsgZmlsdGVyKS50aGVuKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5mZWF0dXJlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByb3BlcnRpZXMgPSByZXMuZmVhdHVyZXNbMF0ucHJvcGVydGllcztcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJvcGVydHlMaXN0ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMocHJvcGVydGllcykubWFwKGtleSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eUxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBrZXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcHJvcGVydGllc1trZXldXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eUxpc3RzLnB1c2gocHJvcGVydHlMaXN0KVxyXG4gICAgICAgICAgICAgICAgICAgIGN6bU9iamVjdExpc3QucHVzaChjem1PYmplY3QpXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzTGlzdC5wdXNoKHJlcylcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/lpoLmnpzmnInlm77lsYLph43lj6DvvIzlj6rnrKzkuIDkuKrlm77lsYLov5Tlm57lsZ7mgKdcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc0xpc3QubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGVidWdnZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3ptT2JqZWN0TGlzdFswXS5fY2kgPiBjem1PYmplY3RMaXN0WzFdLl9jaSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjem1PYmplY3RMaXN0WzBdLl9jaSAhPT0gY3ptT2JqZWN0Ll9jaSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socHJvcGVydHlMaXN0c1swXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENlc2l1bS5HZW9Kc29uRGF0YVNvdXJjZS5sb2FkKHJlc0xpc3RbMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihkYXRhU291cmNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlLmVudGl0aWVzLnZhbHVlcy5mb3JFYWNoKGVudGl0eSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2hMaWdodC5lbnRpdGllcy5hZGQoZW50aXR5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN6bU9iamVjdExpc3RbMV0uX2NpICE9PSBjem1PYmplY3QuX2NpKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhwcm9wZXJ0eUxpc3RzWzFdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2VzaXVtLkdlb0pzb25EYXRhU291cmNlLmxvYWQocmVzTGlzdFsxXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGRhdGFTb3VyY2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2UuZW50aXRpZXMudmFsdWVzLmZvckVhY2goZW50aXR5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlnaExpZ2h0LmVudGl0aWVzLmFkZChlbnRpdHkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socHJvcGVydHlMaXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDZXNpdW0uR2VvSnNvbkRhdGFTb3VyY2UubG9hZChyZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGRhdGFTb3VyY2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZS5lbnRpdGllcy52YWx1ZXMuZm9yRWFjaChlbnRpdHkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2hMaWdodC5lbnRpdGllcy5hZGQoZW50aXR5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc0xpc3QgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eUxpc3RzID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgY3ptT2JqZWN0TGlzdCA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4geyB9KVxyXG4gICAgICAgIH0sIENlc2l1bS5TY3JlZW5TcGFjZUV2ZW50VHlwZS5MRUZUX0NMSUNLKVxyXG4gICAgfVxyXG4gICAgSW5pdEhhbmRsZXIoKSB7XHJcblxyXG4gICAgfVxyXG4gICAgLy9hcmNnaXNcclxuICAgIGdldExheWVycyhjem1PYmplY3QsIGVhcnRoLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGxldCBoYW5kbGVyID0gbmV3IENlc2l1bS5TY3JlZW5TcGFjZUV2ZW50SGFuZGxlcihlYXJ0aC5jem0uc2NlbmUuY2FudmFzKTtcclxuICAgICAgICBsZXQgdXJsID0gY3ptT2JqZWN0Lnhic2pJbWFnZXJ5UHJvdmlkZXIuV2ViTWFwVGlsZVNlcnZpY2VJbWFnZXJ5UHJvdmlkZXIudXJsIHx8IGN6bU9iamVjdC54YnNqSW1hZ2VyeVByb3ZpZGVyLlNTV2ViTWFwU2VydmljZUltYWdlcnlQcm92aWRlci51cmw7XHJcbiAgICAgICAgbGV0IHJlcXVlc3RVcmwgPSBcIlwiXHJcbiAgICAgICAgaWYgKGN6bU9iamVjdC54YnNqSW1hZ2VyeVByb3ZpZGVyLnR5cGUgPT0gXCJXZWJNYXBUaWxlU2VydmljZUltYWdlcnlQcm92aWRlclwiKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3RVcmwgPSB1cmwuc3BsaXQoJ01hcFNlcnZlcicpWzBdICsgXCJNYXBTZXJ2ZXIvbGF5ZXJzP2Y9cGpzb25cIlxyXG4gICAgICAgIH0gZWxzZSBpZiAoY3ptT2JqZWN0Lnhic2pJbWFnZXJ5UHJvdmlkZXIudHlwZSA9PSBcIlNTV2ViTWFwU2VydmljZUltYWdlcnlQcm92aWRlclwiKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3RVcmwgPSB1cmwuc3BsaXQoJ2FyY2dpcycpWzBdICsgJ2FyY2dpcy9yZXN0JyArIHVybC5zcGxpdCgnYXJjZ2lzJylbMV0uc3BsaXQoJ01hcFNlcnZlcicpWzBdICsgXCJNYXBTZXJ2ZXIvbGF5ZXJzP2Y9cGpzb25cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbGV0IGxheWVycz1bXTtcclxuICAgICAgICB0aGlzLmh0dHBSZXEoJ2dldCcsIHJlcXVlc3RVcmwpLnRoZW4oKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgICAgaGFuZGxlci5zZXRJbnB1dEFjdGlvbigoY2xpY2spID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMubGF5ZXJzID09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF3aW5kb3dbXCJhbGxvd0NsaWNrXCJdKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBpZiAoIWN6bU9iamVjdC5zaG93KSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBoaWdoTGlnaHQuZW50aXRpZXMucmVtb3ZlQWxsKCk7XHJcbiAgICAgICAgICAgICAgICBlYXJ0aC5zY2VuZVRyZWUuJHJlZnMucGluMS5jem1PYmplY3QuY3VzdG9tUHJvcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZWFydGguc2NlbmVUcmVlLiRyZWZzLnBpbjEuY3ptT2JqZWN0LnBvc2l0aW9uID0gdGhpcy5DYXJ0ZXNpYW4yVG9DYXJ0b2dyYXBoaWMoZWFydGguY3ptLnZpZXdlciwgY2xpY2sucG9zaXRpb24pXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0gdGhpcy5DYXJ0ZXNpYW4yVG9XR1M4NChlYXJ0aC5jem0udmlld2VyLCBjbGljay5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICBsZXQgYnVmZmVyQ29vcmRpbmF0ZXMgPSB0aGlzLkJ1ZmZlcihbcG9zaXRpb24ubG9uLCBwb3NpdGlvbi5sYXRdKTtcclxuICAgICAgICAgICAgICAgIGxldCBhZGRyID0gdGhpcy5HZXRXRlNVcmwoY3ptT2JqZWN0Lnhic2pJbWFnZXJ5UHJvdmlkZXIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHR5cGVOYW1lID0gdXJsLnNwbGl0KCcvTWFwU2VydmVyJylbMF0uc3BsaXQoJ3NlcnZpY2VzLycpWzFdO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc0xpc3QgPSBbXVxyXG4gICAgICAgICAgICAgICAgbGV0IGdlb21ldHJ5TGlzdCA9IFtdXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlcy5sYXllcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gcmVzLmxheWVyc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcXVlcnkgPSBgJHthZGRyfWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKyBgdHlwZW5hbWU9JHt0eXBlTmFtZX06JHtpdGVtLm5hbWV9JkZpbHRlcj1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICsgYDxvZ2M6RmlsdGVyPjxvZ2M6SW50ZXJzZWN0cz48b2djOlByb3BlcnR5TmFtZT5TaGFwZTwvb2djOlByb3BlcnR5TmFtZT5gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICsgYDxnbWw6UG9seWdvbiBzcnNOYW1lPVwidXJuOngtb2djOmRlZjpjcnM6RVBTRzo0MzI2XCI+PGdtbDpvdXRlckJvdW5kYXJ5SXM+PGdtbDpMaW5lYXJSaW5nPmBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKyBgPGdtbDpjb29yZGluYXRlcz4ke2J1ZmZlckNvb3JkaW5hdGVzfTwvZ21sOmNvb3JkaW5hdGVzPmBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKyBgPC9nbWw6TGluZWFyUmluZz48L2dtbDpvdXRlckJvdW5kYXJ5SXM+PC9nbWw6UG9seWdvbj48L29nYzpJbnRlcnNlY3RzPjwvb2djOkZpbHRlcj5gXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5odHRwUmVxKCdnZXQnLCBxdWVyeSkudGhlbigpLmNhdGNoKChlcnI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzPWVyci5lcnJvci50ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRlYnVnZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnhtbDJKc29uKHRoaXMuc3RyaW5nVG9YbWwocmVzKSlbJ0ZlYXR1cmVDb2xsZWN0aW9uJ11bJ2ZlYXR1cmVNZW1iZXInXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByb3BlcnRpZXMgPSB0aGlzLnhtbDJKc29uKHRoaXMuc3RyaW5nVG9YbWwocmVzKSlbJ0ZlYXR1cmVDb2xsZWN0aW9uJ11bJ2ZlYXR1cmVNZW1iZXInXVtpdGVtLm5hbWVdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJvcGVydHlMaXN0ID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBnZW9qc29uID0ge31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRlYnVnZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllcyA9PSB1bmRlZmluZWQgfHwgcHJvcGVydGllcyA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKS5tYXAoa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ICE9PSBcIlNoYXBlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZToga2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHByb3BlcnRpZXNba2V5XS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzW2tleV0uTXVsdGlTdXJmYWNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9zTGlzdCA9IHByb3BlcnRpZXNba2V5XS5NdWx0aVN1cmZhY2Uuc3VyZmFjZU1lbWJlci5Qb2x5Z29uLmV4dGVyaW9yLkxpbmVhclJpbmcucG9zTGlzdC52YWx1ZS5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NMaXN0LnNoaWZ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGlzdCA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvc0xpc3QubGVuZ3RoOyBpICs9IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0LnB1c2goW3Bvc0xpc3RbaV0sIHBvc0xpc3RbaSArIDFdXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb2pzb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJGZWF0dXJlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJMaW5lU3RyaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBsaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHByb3BlcnRpZXNba2V5XS5Qb2ludCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvc0xpc3QgPSBwcm9wZXJ0aWVzW2tleV0uUG9pbnQucG9zLnZhbHVlLnNwbGl0KFwiIFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb2pzb24gPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiRmVhdHVyZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUG9pbnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IHBvc0xpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvcGVydGllc1trZXldLk11bHRpQ3VydmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3NMaXN0ID0gcHJvcGVydGllc1trZXldLk11bHRpQ3VydmUuY3VydmVNZW1iZXIuTGluZVN0cmluZy5wb3NMaXN0LnZhbHVlLnNwbGl0KFwiIFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGlzdCA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvc0xpc3QubGVuZ3RoOyBpICs9IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0LnB1c2goW3Bvc0xpc3RbaV0sIHBvc0xpc3RbaSArIDFdXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb2pzb24gPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiRmVhdHVyZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiTGluZVN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlczogbGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzTGlzdC5wdXNoKHByb3BlcnR5TGlzdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5TGlzdC5wdXNoKGdlb2pzb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc0xpc3QubGVuZ3RoID4gMCAmJiBnZW9tZXRyeUxpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2VvbWV0cnlMaXN0WzBdLmdlb21ldHJ5LnR5cGUgPT0gXCJQb2ludFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDZXNpdW0uR2VvSnNvbkRhdGFTb3VyY2UubG9hZChnZW9tZXRyeUxpc3RbMF0pLnRoZW4oZGF0YVNvdXJjZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZS5lbnRpdGllcy52YWx1ZXMuZm9yRWFjaChlbnRpdHkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkuYmlsbGJvYXJkID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5LnBvaW50ID0gbmV3IENlc2l1bS5Qb2ludEdyYXBoaWNzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogQ2VzaXVtLkNvbG9yLkFRVUEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaXhlbFNpemU6IDEwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2hMaWdodC5lbnRpdGllcy5hZGQoZW50aXR5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGdlb21ldHJ5TGlzdFswXS5nZW9tZXRyeS50eXBlID09IFwiTGluZVN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDZXNpdW0uR2VvSnNvbkRhdGFTb3VyY2UubG9hZChnZW9tZXRyeUxpc3RbMF0pLnRoZW4oZGF0YVNvdXJjZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZS5lbnRpdGllcy52YWx1ZXMuZm9yRWFjaChlbnRpdHkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkucG9seWxpbmUud2lkdGggPSAxMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkucG9seWxpbmUubWF0ZXJpYWwgPSBuZXcgQ2VzaXVtLlBvbHlsaW5lR2xvd01hdGVyaWFsUHJvcGVydHkoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvd1Bvd2VyOiAwLjIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogQ2VzaXVtLkNvbG9yLkJMVUVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2hMaWdodC5lbnRpdGllcy5hZGQoZW50aXR5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2VzaXVtLkdlb0pzb25EYXRhU291cmNlLmxvYWQoZ2VvbWV0cnlMaXN0WzBdKS50aGVuKGRhdGFTb3VyY2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2UuZW50aXRpZXMudmFsdWVzLmZvckVhY2goZW50aXR5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlnaExpZ2h0LmVudGl0aWVzLmFkZChlbnRpdHkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzTGlzdFswXSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICAgICAgfSwgQ2VzaXVtLlNjcmVlblNwYWNlRXZlbnRUeXBlLkxFRlRfQ0xJQ0spXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5bGP5bmV5Z2Q5qCH6L2s57uP57qs5bqm5Z2Q5qCHXHJcbiAgICAgKiBAcGFyYW0gdmlld2VyIFxyXG4gICAgICogQHBhcmFtIHBvc2l0aW9uIOWxj+W5leWdkOagh2NhcnRlc2lhbjJcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBDYXJ0ZXNpYW4yVG9XR1M4NCh2aWV3ZXIsIHBvc2l0aW9uKSB7XHJcbiAgICAgICAgdmFyIHJheSA9IHZpZXdlci5jYW1lcmEuZ2V0UGlja1JheShwb3NpdGlvbik7XHJcbiAgICAgICAgdmFyIGNhcnRlc2lhbiA9IHZpZXdlci5zY2VuZS5nbG9iZS5waWNrKHJheSwgdmlld2VyLnNjZW5lKTtcclxuICAgICAgICB2YXIgY2FydG9ncmFwaGljID0gQ2VzaXVtLkNhcnRvZ3JhcGhpYy5mcm9tQ2FydGVzaWFuKGNhcnRlc2lhbik7XHJcbiAgICAgICAgbGV0IGxvbiA9IENlc2l1bS5NYXRoLnRvRGVncmVlcyhjYXJ0b2dyYXBoaWMubG9uZ2l0dWRlKVxyXG4gICAgICAgIGxldCBsYXQgPSBDZXNpdW0uTWF0aC50b0RlZ3JlZXMoY2FydG9ncmFwaGljLmxhdGl0dWRlKVxyXG4gICAgICAgIHJldHVybiB7IGxvbjogbG9uLCBsYXQ6IGxhdCB9XHJcbiAgICB9XHJcblxyXG4gICAgQ2FydGVzaWFuMlRvQ2FydG9ncmFwaGljKHZpZXdlciwgcG9zaXRpb24pIHtcclxuICAgICAgICB2YXIgcmF5ID0gdmlld2VyLmNhbWVyYS5nZXRQaWNrUmF5KHBvc2l0aW9uKTtcclxuICAgICAgICB2YXIgY2FydGVzaWFuID0gdmlld2VyLnNjZW5lLmdsb2JlLnBpY2socmF5LCB2aWV3ZXIuc2NlbmUpO1xyXG4gICAgICAgIHZhciBjYXJ0b2dyYXBoaWMgPSBDZXNpdW0uQ2FydG9ncmFwaGljLmZyb21DYXJ0ZXNpYW4oY2FydGVzaWFuKTtcclxuICAgICAgICByZXR1cm4gW2NhcnRvZ3JhcGhpYy5sb25naXR1ZGUsIGNhcnRvZ3JhcGhpYy5sYXRpdHVkZSwgY2FydG9ncmFwaGljLmhlaWdodF1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5ou85o6l55So5LqOd2Zz5p+l6K+i55qEdXJsXHJcbiAgICAgKiBAcGFyYW0gV01UU0ltYWdlcnlQcm92aWRlciBcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBHZXRXRlNVcmwoSW1hZ2VyeVByb3ZpZGVyKSB7XHJcbiAgICAgICAgbGV0IFdGU1VybCA9IFwiXCI7XHJcbiAgICAgICAgaWYgKEltYWdlcnlQcm92aWRlci50eXBlID09IFwiV2ViTWFwVGlsZVNlcnZpY2VJbWFnZXJ5UHJvdmlkZXJcIikge1xyXG4gICAgICAgICAgICBsZXQgV01UU0ltYWdlcnlQcm92aWRlciA9IEltYWdlcnlQcm92aWRlci5XZWJNYXBUaWxlU2VydmljZUltYWdlcnlQcm92aWRlcjtcclxuICAgICAgICAgICAgaWYgKFdNVFNJbWFnZXJ5UHJvdmlkZXIudXJsLmluZGV4T2YoJ2FyY2dpcycpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgV0ZTVXJsID0gV01UU0ltYWdlcnlQcm92aWRlci51cmwuc3BsaXQoXCJyZXN0XCIpWzBdICsgV01UU0ltYWdlcnlQcm92aWRlci51cmwuc3BsaXQoXCJyZXN0L1wiKVsxXS5zcGxpdChcIk1hcFNlcnZlclwiKVswXSArIFwiTWFwU2VydmVyL1dGU1NlcnZlcj9yZXF1ZXN0PUdldEZlYXR1cmUmc2VydmljZT1XRlMmdmVyc2lvbj0xLjEuMCZcIjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChXTVRTSW1hZ2VyeVByb3ZpZGVyLnVybC5pbmRleE9mKCdnZW9zZXJ2ZXInKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIFdGU1VybCA9IFdNVFNJbWFnZXJ5UHJvdmlkZXIudXJsLnNwbGl0KFwiZ3djXCIpWzBdICsgV01UU0ltYWdlcnlQcm92aWRlci5sYXllci5zcGxpdChcIjpcIilbMF0gKyBcIi9vd3M/c2VydmljZT1XRlMmdmVyc2lvbj0xLjAuMCZyZXF1ZXN0PUdldEZlYXR1cmUmdHlwZU5hbWU9XCIgKyBXTVRTSW1hZ2VyeVByb3ZpZGVyLmxheWVyICsgXCImbWF4RmVhdHVyZXM9MSZvdXRwdXRGb3JtYXQ9anNvbiZmaWx0ZXI9XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoSW1hZ2VyeVByb3ZpZGVyLnR5cGUgPT0gXCJTU1dlYk1hcFNlcnZpY2VJbWFnZXJ5UHJvdmlkZXJcIikge1xyXG4gICAgICAgICAgICBsZXQgU1NXZWJNYXBTZXJ2aWNlSW1hZ2VyeVByb3ZpZGVyID0gSW1hZ2VyeVByb3ZpZGVyLlNTV2ViTWFwU2VydmljZUltYWdlcnlQcm92aWRlcjtcclxuICAgICAgICAgICAgaWYgKFNTV2ViTWFwU2VydmljZUltYWdlcnlQcm92aWRlci51cmwuaW5kZXhPZignYXJjZ2lzJykgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBXRlNVcmwgPSBTU1dlYk1hcFNlcnZpY2VJbWFnZXJ5UHJvdmlkZXIudXJsLnNwbGl0KFwiTWFwU2VydmVyXCIpWzBdICsgXCJNYXBTZXJ2ZXIvV0ZTU2VydmVyP3JlcXVlc3Q9R2V0RmVhdHVyZSZzZXJ2aWNlPVdGUyZ2ZXJzaW9uPTEuMS4wJlwiO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKFNTV2ViTWFwU2VydmljZUltYWdlcnlQcm92aWRlci51cmwuaW5kZXhPZignZ2Vvc2VydmVyJykgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBXRlNVcmwgPSBTU1dlYk1hcFNlcnZpY2VJbWFnZXJ5UHJvdmlkZXIudXJsLnNwbGl0KFwid21zXCIpWzBdICsgXCIvb3dzP3NlcnZpY2U9V0ZTJnZlcnNpb249MS4wLjAmcmVxdWVzdD1HZXRGZWF0dXJlJnR5cGVOYW1lPVwiICsgU1NXZWJNYXBTZXJ2aWNlSW1hZ2VyeVByb3ZpZGVyLmxheWVyICsgXCImbWF4RmVhdHVyZXM9MSZvdXRwdXRGb3JtYXQ9anNvbiZmaWx0ZXI9XCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBXRlNVcmxcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gcG9zaXRpb24gW2xvbixsYXRdXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgQnVmZmVyKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgbGV0IHBvaW50RiA9IHR1cmYucG9pbnQocG9zaXRpb24pO1xyXG4gICAgICAgIGxldCBidWZmZXJlZCA9IHR1cmYuYnVmZmVyKHBvaW50RiwgMTAwLCAnbWV0ZXJzJyk7XHJcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gYnVmZmVyZWQuZ2VvbWV0cnkuY29vcmRpbmF0ZXM7XHJcbiAgICAgICAgbGV0IHBvaW50cyA9IGNvb3JkaW5hdGVzWzBdO1xyXG4gICAgICAgIGxldCBkZWdyZWVzTGlzdFN0ciA9IHRoaXMucG9pbnRzVG9EZWdyZWVzQXJyYXkocG9pbnRzKTtcclxuICAgICAgICByZXR1cm4gZGVncmVlc0xpc3RTdHJcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gcG9pbnRzIOagvOW8j+i9rOaNolxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHBvaW50c1RvRGVncmVlc0FycmF5KHBvaW50cykge1xyXG4gICAgICAgIGxldCBkZWdyZWVzQXJyYXkgPSBcIlwiO1xyXG4gICAgICAgIHBvaW50cy5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGRlZ3JlZXNBcnJheSArPSBpdGVtWzBdICsgXCIsXCIgKyBpdGVtWzFdICsgXCIgXCJcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gZGVncmVlc0FycmF5O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmuIXpmaTpq5jkuq5cclxuICAgICAqL1xyXG4gICAgQ2xlYXJIaWdoTGlnaHQoKSB7XHJcbiAgICAgICAgaGlnaExpZ2h0LmVudGl0aWVzLnJlbW92ZUFsbCgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiB4bWzovaxqc29uXHJcbiAgICAgKiBAcGFyYW0geG1sIFxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHhtbDJKc29uKHhtbCkge1xyXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgcmV0dXJuIG9iamVjdFxyXG4gICAgICAgIHZhciBvYmogPSB7fTtcclxuICAgICAgICBpZiAoeG1sLm5vZGVUeXBlID09IDEpIHsgLy8gZWxlbWVudFxyXG4gICAgICAgICAgICAvLyBkbyBhdHRyaWJ1dGVzXHJcbiAgICAgICAgICAgIGlmICh4bWwuYXR0cmlidXRlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBvYmpbXCJAYXR0cmlidXRlc1wiXSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB4bWwuYXR0cmlidXRlcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGRlYnVnZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGF0dHJpYnV0ZSA9IHhtbC5hdHRyaWJ1dGVzLml0ZW0oaik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZS5ub2RlTmFtZS5pbmRleE9mKFwiOlwiKSA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpbXCJAYXR0cmlidXRlc1wiXVthdHRyaWJ1dGUubm9kZU5hbWVdID0gYXR0cmlidXRlLm5vZGVWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpbXCJAYXR0cmlidXRlc1wiXVthdHRyaWJ1dGUubm9kZU5hbWUuc3BsaXQoXCI6XCIpWzFdXSA9IGF0dHJpYnV0ZS5ub2RlVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoeG1sLm5vZGVUeXBlID09IDMpIHsgLy8gdGV4dFxyXG4gICAgICAgICAgICBvYmogPSB4bWwubm9kZVZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBkbyBjaGlsZHJlblxyXG4gICAgICAgIGlmICh4bWwuaGFzQ2hpbGROb2RlcygpKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgeG1sLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBpdGVtID0geG1sLmNoaWxkTm9kZXMuaXRlbShpKTtcclxuICAgICAgICAgICAgICAgIHZhciBub2RlTmFtZSA9IGl0ZW0ubm9kZU5hbWU7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChvYmpbbm9kZU5hbWUuc3BsaXQoXCI6XCIpWzFdXSkgPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlTmFtZS5zcGxpdChcIjpcIilbMV0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ialsndmFsdWUnXSA9IHRoaXMueG1sMkpzb24oaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqW25vZGVOYW1lLnNwbGl0KFwiOlwiKVsxXV0gPSB0aGlzLnhtbDJKc29uKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKG9ialtub2RlTmFtZS5zcGxpdChcIjpcIilbMV1dLmxlbmd0aCkgPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2xkID0gb2JqW25vZGVOYW1lLnNwbGl0KFwiOlwiKVsxXV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ialtub2RlTmFtZS5zcGxpdChcIjpcIilbMV1dID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ialtub2RlTmFtZS5zcGxpdChcIjpcIilbMV1dLnB1c2gob2xkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqW25vZGVOYW1lLnNwbGl0KFwiOlwiKVsxXV0ucHVzaCh0aGlzLnhtbDJKc29uKGl0ZW0pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlrZfnrKbkuLLovax4bWxcclxuICAgICAqIEBwYXJhbSB4bWxTdHJpbmcgXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgc3RyaW5nVG9YbWwoeG1sU3RyaW5nKSB7XHJcbiAgICAgICAgdmFyIHhtbERvYztcclxuICAgICAgICBpZiAodHlwZW9mIHhtbFN0cmluZyA9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIC8vRkZcclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZURvY3VtZW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xyXG4gICAgICAgICAgICAgICAgeG1sRG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyh4bWxTdHJpbmcsIFwidGV4dC94bWxcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHhtbERvYyA9IHhtbFN0cmluZztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHhtbERvYztcclxuICAgIH1cclxufSJdfQ==