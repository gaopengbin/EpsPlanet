import { Injectable } from '@angular/core'
import { HttpReqService } from 'epsgis'

import turf from 'turf'
let propertyLists = []
let czmObjectList = []
let resList = []
let highLight = null
window["allowClick"] = false;
@Injectable({
    providedIn: 'root'
})
export class Identify {

    constructor(private http: HttpReqService) {
        // debugger
    }
    httpReq(method, url) {
        if (method == 'post') {
            return this.http.httpClient.post(url, "").toPromise()
        }
        if (method == 'get') {
            return this.http.httpClient.get(url).toPromise()
        }
    }
    /**
     * geoserver服务获取点选位置要素属性
     * @param czmObject 
     * @param earth 创建的地球
     * @param type 识别类型：点、线、面(目前只有点)
     * @param callback 回调函数
     */
    GetFeatureInfo(czmObject, earth, type, callback) {
        if (highLight == null) {
            highLight = new Cesium.CustomDataSource('highLight');
            earth.czm.viewer.dataSources.add(highLight);
        }
        let scene = earth.czm.scene;
        let viewer = earth.czm.viewer;
        let WFSUrl = this.GetWFSUrl(czmObject.xbsjImageryProvider);
        let handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
        let filter = ""

        handler.setInputAction((click) => {
            if (!window["allowClick"]) return;
            if (!czmObject.show) return;
            earth.sceneTree.$refs.pin1.czmObject.customProp = false;
            highLight.entities.removeAll();
            resList = [];
            earth.sceneTree.$refs.pin1.czmObject.position = this.Cartesian2ToCartographic(viewer, click.position)
            let position = this.Cartesian2ToWGS84(viewer, click.position);
            let bufferCoordinates = this.Buffer([position.lon, position.lat], 100);
            if (type == 'point') {
                filter = `<Filter xmlns="http://www.opengis.net/ogc" xmlns:gml="http://www.opengis.net/gml"><Intersects><PropertyName>the_geom</PropertyName><gml:outerBoundaryIs><gml:LinearRing><gml:coordinates>${bufferCoordinates}</gml:coordinates></gml:LinearRing></gml:outerBoundaryIs></Intersects></Filter>`
            } else if (type = 'line') {

            } else if (type = 'polygon') {

            }
            this.httpReq('post', WFSUrl + filter).then((res: any) => {
                if (res.features.length > 0) {
                    let properties = res.features[0].properties;
                    let propertyList = [];
                    Object.keys(properties).map(key =>
                        propertyList.push({
                            name: key,
                            value: properties[key]
                        })
                    );
                    propertyLists.push(propertyList)
                    czmObjectList.push(czmObject)
                    resList.push(res)
                    setTimeout(() => {
                        //如果有图层重叠，只第一个图层返回属性
                        if (resList.length > 1) {
                            // debugger;
                            if (czmObjectList[0]._ci > czmObjectList[1]._ci) {
                                if (czmObjectList[0]._ci !== czmObject._ci) return;
                                if (typeof callback === 'function') {
                                    callback(propertyLists[0]);
                                    Cesium.GeoJsonDataSource.load(resList[0])
                                        .then(dataSource => {
                                            dataSource.entities.values.forEach(entity => {
                                                highLight.entities.add(entity)
                                            })
                                        })
                                }
                            } else {
                                if (czmObjectList[1]._ci !== czmObject._ci) return;
                                if (typeof callback === 'function') {
                                    callback(propertyLists[1]);
                                    Cesium.GeoJsonDataSource.load(resList[1])
                                        .then(dataSource => {
                                            dataSource.entities.values.forEach(entity => {
                                                highLight.entities.add(entity)
                                            })
                                        })
                                }
                            }
                            return
                        } else {
                            if (typeof callback === 'function') {
                                callback(propertyList);
                                Cesium.GeoJsonDataSource.load(res)
                                    .then(dataSource => {
                                        dataSource.entities.values.forEach(entity => {
                                            highLight.entities.add(entity)
                                        })
                                    })
                            }
                        }
                    }, 100);
                    setTimeout(() => {
                        resList = []
                        propertyLists = []
                        czmObjectList = []
                    }, 1000);

                }
            }).catch(err => { })
        }, Cesium.ScreenSpaceEventType.LEFT_CLICK)
    }
    InitHandler() {

    }
    //arcgis
    getLayers(czmObject, earth, callback) {
        let handler = new Cesium.ScreenSpaceEventHandler(earth.czm.scene.canvas);
        let url = czmObject.xbsjImageryProvider.WebMapTileServiceImageryProvider.url || czmObject.xbsjImageryProvider.SSWebMapServiceImageryProvider.url;
        let requestUrl = ""
        if (czmObject.xbsjImageryProvider.type == "WebMapTileServiceImageryProvider") {
            requestUrl = url.split('MapServer')[0] + "MapServer/layers?f=pjson"
        } else if (czmObject.xbsjImageryProvider.type == "SSWebMapServiceImageryProvider") {
            requestUrl = url.split('arcgis')[0] + 'arcgis/rest' + url.split('arcgis')[1].split('MapServer')[0] + "MapServer/layers?f=pjson";
        }
        // let layers=[];
        this.httpReq('get', requestUrl).then((res: any) => {
            // debugger
            // console.log(res)
            handler.setInputAction((click) => {
                if (res.layers == undefined) return;
                if (!window["allowClick"]) return;
                if (!czmObject.show) return;
                highLight.entities.removeAll();
                earth.sceneTree.$refs.pin1.czmObject.customProp = false;
                earth.sceneTree.$refs.pin1.czmObject.position = this.Cartesian2ToCartographic(earth.czm.viewer, click.position)

                let position = this.Cartesian2ToWGS84(earth.czm.viewer, click.position);
                let bufferCoordinates = this.Buffer([position.lon, position.lat], 1);
                let addr = this.GetWFSUrl(czmObject.xbsjImageryProvider);
                let typeName = url.split('/MapServer')[0].split('services/')[1];
                let resList = []
                let geometryList = []

                if (czmObject.xbsjImageryProvider.type == "WebMapTileServiceImageryProvider") {
                    for (let i = 0; i < res.layers.length; i++) {
                        const item = res.layers[i];
                        let query = `${addr}`
                            + `typename=${typeName}:${item.name}&Filter=`
                            + `<ogc:Filter><ogc:Intersects><ogc:PropertyName>Shape</ogc:PropertyName>`
                            + `<gml:Polygon srsName="urn:x-ogc:def:crs:EPSG:4326"><gml:outerBoundaryIs><gml:LinearRing>`
                            + `<gml:coordinates>${bufferCoordinates}</gml:coordinates>`
                            + `</gml:LinearRing></gml:outerBoundaryIs></gml:Polygon></ogc:Intersects></ogc:Filter>`
                        this.httpReq('get', query).then().catch((err: any) => {
                            let res = err.error.text
                            // debugger
                            if (this.xml2Json(this.stringToXml(res))['FeatureCollection']['featureMember']) {
                                let properties = this.xml2Json(this.stringToXml(res))['FeatureCollection']['featureMember'][item.name]
                                let propertyList = []
                                let geojson = {}
                                // debugger
                                if (properties == undefined || properties == null) return;
                                Object.keys(properties).map(key => {
                                    if (key !== "Shape") {
                                        propertyList.push({
                                            name: key,
                                            value: properties[key].value
                                        })
                                    } else {
                                        if (properties[key].MultiSurface) {
                                            let posList = properties[key].MultiSurface.surfaceMember.Polygon.exterior.LinearRing.posList.value.split(" ");
                                            posList.shift();
                                            let list = []
                                            for (let i = 0; i < posList.length; i += 2) {
                                                list.push([posList[i], posList[i + 1]])
                                            }
                                            geojson = {
                                                type: "Feature",
                                                geometry: {
                                                    type: "LineString",
                                                    coordinates: list
                                                }
                                            }
                                        } else if (properties[key].Point) {
                                            let posList = properties[key].Point.pos.value.split(" ");
                                            geojson =
                                            {
                                                type: "Feature",
                                                geometry: {
                                                    type: "Point",
                                                    coordinates: posList
                                                }
                                            }
                                        } else if (properties[key].MultiCurve) {
                                            let posList = properties[key].MultiCurve.curveMember.LineString.posList.value.split(" ");

                                            let list = []
                                            for (let i = 0; i < posList.length; i += 2) {
                                                list.push([posList[i], posList[i + 1]])
                                            }
                                            geojson =
                                            {
                                                type: "Feature",
                                                geometry: {
                                                    type: "LineString",
                                                    coordinates: list
                                                }
                                            }
                                        }
                                    }
                                });
                                resList.push(propertyList)
                                geometryList.push(geojson)
                            }
                        })
                    }
                } else if (czmObject.xbsjImageryProvider.type == "SSWebMapServiceImageryProvider") {
                    let llist = czmObject.xbsjImageryProvider.SSWebMapServiceImageryProvider.layer.split(",")
                    for (let i = 0; i < llist.length; i++) {
                        const item = res.layers[res.layers.length - 1 - llist[i]];

                        let query = `${addr}`
                            + `typename=${typeName}:${item.name}&Filter=`
                            + `<ogc:Filter><ogc:Intersects><ogc:PropertyName>Shape</ogc:PropertyName>`
                            + `<gml:Polygon srsName="urn:x-ogc:def:crs:EPSG:4326"><gml:outerBoundaryIs><gml:LinearRing>`
                            + `<gml:coordinates>${bufferCoordinates}</gml:coordinates>`
                            + `</gml:LinearRing></gml:outerBoundaryIs></gml:Polygon></ogc:Intersects></ogc:Filter>`
                        console.log(item.name)
                        this.httpReq('get', query).then().catch((err: any) => {
                            let res = err.error.text

                            // debugger
                            if (this.xml2Json(this.stringToXml(res))['FeatureCollection']['featureMember']) {
                                console.log(this.xml2Json(this.stringToXml(res)))
                                if (this.xml2Json(this.stringToXml(res))['FeatureCollection']['featureMember'].length != undefined) {
                                    let features = this.xml2Json(this.stringToXml(res))['FeatureCollection']['featureMember'];
                                    
                                    features.forEach(feature => {
                                        let prop=[]
                                        Object.keys(feature[item.name]).map(key => {
                                            if (key !== "Shape") {
                                                prop.push({
                                                    name: key,
                                                    value: feature[item.name][key].value
                                                })
                                            }
                                        })
                                        let positions =
                                            feature[item.name].Shape.MultiSurface.surfaceMember.Polygon.exterior.LinearRing.posList.value.split(" ")
                                        positions.shift();
                                        let list = []
                                        let floor = feature[item.name];
                                        let height = (floor['层号'].value - 1) * 3
                                        for (let i = 0; i < positions.length; i += 2) {
                                            list.push(positions[i] / 180 * Math.PI, positions[i + 1] / 180 * Math.PI)
                                        }
                                        console.log(list)
                                        var classificationpolygon = new XE.Obj.ClassificationPolygon(earth);
                                        classificationpolygon.customProp=prop
                                        classificationpolygon.positions = list;
                                        classificationpolygon.height = height + 3;
                                        classificationpolygon.extrudedHeight = height;
                                        classificationpolygon.color[0] = floor['层号'].value % 2 == 0 ? 1 : 0
                                        classificationpolygon.onclick = function (e) {
                                            // console.log(classificationpolygon.customProp)
                                            classificationpolygon.customProp.forEach(item=>{
                                                console.log(item.name,item.value)
                                            })

                                        }
                                        // let entity = earth.czm.viewer.entities.add({
                                        //     polygon: {
                                        //         height: height,
                                        //         hierarchy: new Cesium.PolygonHierarchy(Cesium.Cartesian3.fromDegreesArray(positions)),
                                        //         material: Cesium.Color.AQUA.withAlpha(0.5),
                                        //         extrudedHeight: height + 10 * (i + 1),
                                        //         // outline: true,
                                        //         // outlineColor: Cesium.Color.MAGENTA,
                                        //         // perPositionHeight: true,
                                        //     }
                                        // });
                                    })
                                }
                                let properties = this.xml2Json(this.stringToXml(res))['FeatureCollection']['featureMember'][item.name]
                                let propertyList = []
                                let geojson = {}
                                // debugger
                                if (properties == undefined || properties == null) return;
                                Object.keys(properties).map(key => {
                                    if (key !== "Shape") {
                                        propertyList.push({
                                            name: key,
                                            value: properties[key].value
                                        })
                                    } else {
                                        if (properties[key].MultiSurface) {
                                            let posList = properties[key].MultiSurface.surfaceMember.Polygon.exterior.LinearRing.posList.value.split(" ");
                                            posList.shift();
                                            let list = []
                                            for (let i = 0; i < posList.length; i += 2) {
                                                list.push([posList[i], posList[i + 1]])
                                            }
                                            geojson = {
                                                type: "Feature",
                                                geometry: {
                                                    type: "LineString",
                                                    coordinates: list
                                                }
                                            }
                                        } else if (properties[key].Point) {
                                            let posList = properties[key].Point.pos.value.split(" ");
                                            geojson =
                                            {
                                                type: "Feature",
                                                geometry: {
                                                    type: "Point",
                                                    coordinates: posList
                                                }
                                            }
                                        } else if (properties[key].MultiCurve) {
                                            let posList = properties[key].MultiCurve.curveMember.LineString.posList.value.split(" ");

                                            let list = []
                                            for (let i = 0; i < posList.length; i += 2) {
                                                list.push([posList[i], posList[i + 1]])
                                            }
                                            geojson =
                                            {
                                                type: "Feature",
                                                geometry: {
                                                    type: "LineString",
                                                    coordinates: list
                                                }
                                            }
                                        }
                                    }
                                });
                                resList.push(propertyList)
                                geometryList.push(geojson)
                            }
                        })
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
                                    })
                                    highLight.entities.add(entity)
                                })
                            })
                        } else if (geometryList[0].geometry.type == "LineString") {
                            Cesium.GeoJsonDataSource.load(geometryList[0]).then(dataSource => {
                                dataSource.entities.values.forEach(entity => {
                                    entity.polyline.width = 10
                                    entity.polyline.material = new Cesium.PolylineGlowMaterialProperty({
                                        glowPower: 0.2,
                                        color: Cesium.Color.BLUE
                                    });
                                    highLight.entities.add(entity)
                                })
                            })
                        }
                        else {
                            Cesium.GeoJsonDataSource.load(geometryList[0]).then(dataSource => {
                                dataSource.entities.values.forEach(entity => {
                                    highLight.entities.add(entity)
                                })
                            })
                        }
                        callback(resList[0])
                    }

                }, 500);
            }, Cesium.ScreenSpaceEventType.LEFT_CLICK)
        })
    }
    /**
     * 屏幕坐标转经纬度坐标
     * @param viewer 
     * @param position 屏幕坐标cartesian2
     * @returns 
     */
    Cartesian2ToWGS84(viewer, position) {
        var ray = viewer.camera.getPickRay(position);
        var cartesian = viewer.scene.globe.pick(ray, viewer.scene);
        var cartographic = Cesium.Cartographic.fromCartesian(cartesian);
        let lon = Cesium.Math.toDegrees(cartographic.longitude)
        let lat = Cesium.Math.toDegrees(cartographic.latitude)
        return { lon: lon, lat: lat }
    }

    Cartesian2ToCartographic(viewer, position) {
        var ray = viewer.camera.getPickRay(position);
        var cartesian = viewer.scene.globe.pick(ray, viewer.scene);
        var cartographic = Cesium.Cartographic.fromCartesian(cartesian);
        return [cartographic.longitude, cartographic.latitude, cartographic.height]
    }
    /**
     * 拼接用于wfs查询的url
     * @param WMTSImageryProvider 
     * @returns 
     */
    GetWFSUrl(ImageryProvider) {
        let WFSUrl = "";
        if (ImageryProvider.type == "WebMapTileServiceImageryProvider") {
            let WMTSImageryProvider = ImageryProvider.WebMapTileServiceImageryProvider;
            if (WMTSImageryProvider.url.indexOf('arcgis') !== -1) {
                WFSUrl = WMTSImageryProvider.url.split("rest")[0] + WMTSImageryProvider.url.split("rest/")[1].split("MapServer")[0] + "MapServer/WFSServer?request=GetFeature&service=WFS&version=1.1.0&";
            } else if (WMTSImageryProvider.url.indexOf('geoserver') !== -1) {
                WFSUrl = WMTSImageryProvider.url.split("gwc")[0] + WMTSImageryProvider.layer.split(":")[0] + "/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=" + WMTSImageryProvider.layer + "&maxFeatures=1&outputFormat=json&filter="
            }
        }
        if (ImageryProvider.type == "SSWebMapServiceImageryProvider") {
            let SSWebMapServiceImageryProvider = ImageryProvider.SSWebMapServiceImageryProvider;
            if (SSWebMapServiceImageryProvider.url.indexOf('arcgis') !== -1) {
                WFSUrl = SSWebMapServiceImageryProvider.url.split("MapServer")[0] + "MapServer/WFSServer?request=GetFeature&service=WFS&version=1.1.0&";
            } else if (SSWebMapServiceImageryProvider.url.indexOf('geoserver') !== -1) {
                WFSUrl = SSWebMapServiceImageryProvider.url.split("wms")[0] + "/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=" + SSWebMapServiceImageryProvider.layer + "&maxFeatures=1&outputFormat=json&filter=";
            }

        }
        return WFSUrl
    }
    /**
     * 
     * @param position [lon,lat]
     * @returns 
     */
    Buffer(position, meters) {
        let pointF = turf.point(position);
        let buffered = turf.buffer(pointF, meters, 'meters');
        let coordinates = buffered.geometry.coordinates;
        let points = coordinates[0];
        let degreesListStr = this.pointsToDegreesArray(points);
        return degreesListStr
    }
    /**
     * 
     * @param points 格式转换
     * @returns 
     */
    pointsToDegreesArray(points) {
        let degreesArray = "";
        points.map(item => {
            degreesArray += item[0] + "," + item[1] + " "
        });
        return degreesArray;
    }
    /**
     * 清除高亮
     */
    ClearHighLight() {
        highLight.entities.removeAll();
    }
    /**
     * xml转json
     * @param xml 
     * @returns 
     */
    xml2Json(xml) {
        // Create the return object
        var obj = {};
        if (xml.nodeType == 1) { // element
            // do attributes
            if (xml.attributes.length > 0) {
                obj["@attributes"] = {};
                for (var j = 0; j < xml.attributes.length; j++) {
                    // debugger
                    var attribute = xml.attributes.item(j);
                    if (attribute.nodeName.indexOf(":") == -1) {
                        obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
                    } else {
                        obj["@attributes"][attribute.nodeName.split(":")[1]] = attribute.nodeValue;
                    }

                }
            }
        } else if (xml.nodeType == 3) { // text
            obj = xml.nodeValue;
        }
        // do children
        if (xml.hasChildNodes()) {
            for (var i = 0; i < xml.childNodes.length; i++) {
                var item = xml.childNodes.item(i);
                var nodeName = item.nodeName;
                if (typeof (obj[nodeName.split(":")[1]]) == "undefined") {
                    if (nodeName.split(":")[1] == undefined) {
                        obj['value'] = this.xml2Json(item);
                    } else {
                        obj[nodeName.split(":")[1]] = this.xml2Json(item);
                    }

                } else {
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
    /**
     * 字符串转xml
     * @param xmlString 
     * @returns 
     */
    stringToXml(xmlString) {
        var xmlDoc;
        if (typeof xmlString == "string") {
            //FF
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