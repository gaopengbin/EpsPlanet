import axios from 'axios'
import qs from 'qs'


export class Query {
    static myEntityCollection: any;//用于存储查询过程中高亮显示的entity
    constructor() { }
    /**
     * 基于ArcGIS Server的查询
     * @param czmObject 要查询的czmObject
     * @param index arcgis server图层id
     * @param params 查询语句
     * @param callback 回调
     */
    static ArcgisQuery(czmObject, index, params, callback) {
        if (this.myEntityCollection == undefined) {
            this.myEntityCollection = new Cesium.CustomDataSource('myEntityCollection');
            window['earth'].czm.viewer.dataSources.add(this.myEntityCollection);
        }
        this.myEntityCollection.entities.removeAll();
        let viewer = window['earth'].czm.viewer;
        let type = czmObject.xbsjImageryProvider.type;
        let url = czmObject.xbsjImageryProvider[type].url;
        let requestUrl = ""
        if (czmObject.xbsjImageryProvider.type == "WebMapTileServiceImageryProvider") {
            requestUrl = url.split('MapServer')[0] + `MapServer/${index}/query?geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=*&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=4326&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&f=pjson`
        } else if (czmObject.xbsjImageryProvider.type == "SSWebMapServiceImageryProvider") {
            requestUrl = url.split('arcgis')[0] + 'arcgis/rest' + url.split('arcgis')[1].split('MapServer')[0] + `MapServer/${index}/query?geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=4326&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&f=pjson`;
            console.log(requestUrl)
        }
        axios.post(requestUrl,
            qs.stringify({
                outFields:'*',
                where: params,
                f: 'pjson'
            }),
            {
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                }
            }).then(res => {
                console.log(res.data.features)
                let features = res.data.features;
                if (res.data.geometryType == "esriGeometryPoint") {
                    features.forEach(feature => {
                        this.myEntityCollection.entities.add(
                            {
                                position: Cesium.Cartesian3.fromDegrees(feature.geometry.x, feature.geometry.y),
                                point: {
                                    color: Cesium.Color.AQUA,
                                    pixelSize: 20,
                                    outlineColor: Cesium.Color.YELLOW,
                                    outlineWidth: 5,
                                    heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
                                    scaleByDistance: new Cesium.NearFarScalar(1500, 1, 20000, 0.3),
                                }
                            }
                        )
                    })
                    viewer.flyTo(this.myEntityCollection);
                }
                if (res.data.geometryType == "esriGeometryPolygon") {

                    features.forEach(feature => {
                        let positions = []
                        feature.geometry.rings[0].forEach(pos => {
                            positions.push(pos[0], pos[1])
                        })
                        this.myEntityCollection.entities.add({
                            polyline: {
                                positions: Cesium.Cartesian3.fromDegreesArray(positions),
                                width: 10,
                                material: new Cesium.PolylineGlowMaterialProperty({
                                    glowPower: 0.2,
                                    color: Cesium.Color.BLUE
                                })
                            },
                        });
                    });
                    viewer.flyTo(this.myEntityCollection);
                }
                if (res.data.geometryType == "esriGeometryPolyline") {

                    features.forEach(feature => {
                        let positions = []
                        feature.geometry.paths[0].forEach(pos => {
                            positions.push(pos[0], pos[1])
                        })
                        this.myEntityCollection.entities.add({
                            polyline: {
                                positions: Cesium.Cartesian3.fromDegreesArray(positions),
                                width: 10,
                                material: new Cesium.PolylineGlowMaterialProperty({
                                    glowPower: 0.2,
                                    color: Cesium.Color.BLUE
                                })
                            },
                        });
                    });
                    viewer.flyTo(this.myEntityCollection);
                }
            })
    }
    /**
     * 基于Geoserver的查询
     * @param czmObject 
     * @param params 
     */
    static GeoserverQuery(czmObject, params) {
        if (this.myEntityCollection == undefined) {
            this.myEntityCollection = new Cesium.CustomDataSource('myEntityCollection');
            window['earth'].czm.viewer.dataSources.add(this.myEntityCollection);
        }
        this.myEntityCollection.entities.removeAll();
        let viewer = window['earth'].czm.viewer;
        let type = czmObject.xbsjImageryProvider.type;
        let layer = czmObject.xbsjImageryProvider[type].layer;
        let url = czmObject.xbsjImageryProvider[type].url;
        let requestUrl = ""
        if (czmObject.xbsjImageryProvider.type == "WebMapTileServiceImageryProvider") {
            //`http://localhost:8801/geoserver/tiger/wfs?service=wfs&request=GetFeature&version=1.1.0&outputFormat=application/json&TYPENAME=tiger:poly_landmarks&cql_filter=${param}`
            let server = layer.split(':')[0]
            requestUrl = url.split('geoserver')[0] + `geoserver/${server}/wfs?service=wfs&request=GetFeature&version=1.1.0&outputFormat=application/json&TYPENAME=${layer}&cql_filter=${params}`
        } else if (czmObject.xbsjImageryProvider.type == "SSWebMapServiceImageryProvider") {
            let server = url.split('/wms')[0].split('geoserver/')[1];
            requestUrl = url.split('wms')[0] + `wfs?service=wfs&request=GetFeature&version=1.1.0&outputFormat=application/json&TYPENAME=${server}:${layer}&cql_filter=${params}`
        }
        console.log(requestUrl)
        axios.post(requestUrl).then(res => {
            console.log(res)
            Cesium.GeoJsonDataSource.load(res.data).then(dataSource => {
                dataSource.entities.values.forEach(entity => {
                    // entity.polyline.width = 10
                    // entity.polyline.material = new Cesium.PolylineGlowMaterialProperty({
                    //     glowPower: 0.2,
                    //     color: Cesium.Color.BLUE
                    // });
                    this.myEntityCollection.entities.add(entity)
                })
                viewer.flyTo(this.myEntityCollection)
            })
        })
    }
    /**
     * 清除高亮
     */
    static clearHighLight() {
        window['earth'].czm.viewer.dataSources.getByName('myEntityCollection')[0].entities.removeAll()
    }
}