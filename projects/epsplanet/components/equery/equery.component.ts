import { Component } from "@angular/core";
import { ComponentRegister } from "epsgis";
import { BasePlanetWidgetComponent } from '../base-widget/base-widget.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Query } from '../../services/query';
import qs from 'qs';
import axios from 'axios'
@ComponentRegister({
  uri: "epsgis-planet-equery",
  path: "epsplanet/components/equery",
  name: "PlanetEqueryComponent"
})
@Component({
  selector: "epsgis-planet-equery",
  templateUrl: "./equery.component.html",
  styleUrls: ["./equery.component.scss"]
})
export class PlanetEqueryComponent extends BasePlanetWidgetComponent {

  serverList = []
  layerList = []
  validateForm!: FormGroup;
  controlArray: Array<{ index: number; show: boolean }> = [];
  isCollapse = true;


  resetForm(): void {
    this.validateForm.reset();
    Query.clearHighLight();
  }
  constructor(private fb: FormBuilder) {
    super();
  }
  static getCompInfo() {
    return { name: "EpsGisForPlanetLoadWmtsComponent", path: "epsplanet/components/load-wmts" };
  }
  Search() {
    console.log(this.validateForm.value)
    let czmObject = this.validateForm.value.server;
    let type = czmObject.xbsjImageryProvider.type;
    let url = czmObject.xbsjImageryProvider[type].url;
    if (url.indexOf('arcgis') !== -1) {
      // let requestUrl = ""
      let index = this.validateForm.value.layer;
      let params = this.validateForm.value.where;
      Query.ArcgisQuery(czmObject, index, params, res => { })
    }
    if (url.indexOf('geoserver') !== -1) {
      let param = this.validateForm.value.where;
      Query.GeoserverQuery(czmObject, param)
    }
    // let url=`http://localhost:6080/arcgis/rest/services/dxm/MapServer/2/query?text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&f=pjson`
  }
  zoomTo() {

  }
  test() {

  }
  changeServer(value) {
    this.layerList = [];
    let type = value.xbsjImageryProvider.type;
    let url = value.xbsjImageryProvider[type].url;
    let requestUrl = ""
    if (url.indexOf('arcgis') !== -1) {
      this.validateForm.controls.platForm.setValue("ArcGIS")
      if (value.xbsjImageryProvider.type == "WebMapTileServiceImageryProvider") {
        requestUrl = url.split('MapServer')[0] + "MapServer/layers?f=pjson"
      } else if (value.xbsjImageryProvider.type == "SSWebMapServiceImageryProvider") {
        requestUrl = url.split('arcgis')[0] + 'arcgis/rest' + url.split('arcgis')[1].split('MapServer')[0] + "MapServer/layers?f=pjson";
        // console.log(requestUrl)
      }
      axios.get(requestUrl).then(res => {
        res.data.layers.forEach(item => {
          this.layerList.push({
            name: item.name,
            index: item.id
          })
        });
      })
    }
    if (url.indexOf('geoserver') !== -1) {
      this.validateForm.controls.platForm.setValue("GeoServer")
      if (value.xbsjImageryProvider.type == "WebMapTileServiceImageryProvider") {
        let layer = value.xbsjImageryProvider[type].layer
        this.layerList.push({
          name: layer,
          index: 0
        })
        // requestUrl = url.split('MapServer')[0] + "MapServer/layers?f=pjson"
      } else if (value.xbsjImageryProvider.type == "SSWebMapServiceImageryProvider") {
        let layer = value.xbsjImageryProvider[type].layer
        this.layerList.push({
          name: layer,
          index: 0
        })
        // console.log(requestUrl)
      }
    }


  }
  changeLayer(value) {
    // let type = value.xbsjImageryProvider.type;
    // let url = value.xbsjImageryProvider[type].url;
    // if (url.indexOf('arcgis') !== -1) this.validateForm.controls.platForm.setValue("ArcGIS")
    // if (url.indexOf('geoserver') !== -1) this.validateForm.controls.platForm.setValue("GeoServer")
  }
  getAllLayers(group) {
    group.forEach(item => {
      if (item.children) {
        this.getAllLayers(item.children)
      } else {
        if (item.czmObject.xbsjType !== "Imagery") return;
        this.serverList.push({
          name: item.czmObject.name,
          czmObject: item.czmObject
        })
      }
    })
  }
  ngOnInit() {
    super.ngOnInit();
    console.log(qs)
    this.getAllLayers(this.view.sceneTree.$refs.layerlist.children)
    // this.view.sceneTree.$refs.layerlist.children.forEach(group => {
    //   if (group.children) {
    //     group.children.forEach(item => {
    //       if (item.czmObject.xbsjType !== "Imagery") return;
    //       this.serverList.push({
    //         name: item.czmObject.name,
    //         czmObject: item.czmObject
    //       })
    //       if (item.czmObject.xbsjImageryProvider.type == "WebMapTileServiceImageryProvider" || item.czmObject.xbsjImageryProvider.type == "WebMapServiceImageryProvider") {
    //         if (item.czmObject.xbsjImageryProvider[item.czmObject.xbsjImageryProvider.type].url.indexOf("arcgis") !== -1) {

    //         } else {

    //         }

    //       }
    //     })
    //   } else {

    //   }
    // })
    this.validateForm = this.fb.group({
      server: [null],
      layer: [null],
      platForm: [null],
      where: [null]
    });
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
}