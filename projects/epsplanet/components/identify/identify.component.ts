import { Component } from "@angular/core";
import { ComponentRegister } from "epsgis";
import { BasePlanetWidgetComponent } from '../base-widget/base-widget.component';
import { Identify } from '../../utils/identify';
import { getPositionsHeightFromTerrain } from '../../utils/getHeight'

@ComponentRegister({
  uri: "epsgis-planet-identify",
  path: "epsplanet/components/identify",
  name: "PlanetIdentifyComponent"
})
@Component({
  selector: "epsgis-planet-identify",
  templateUrl: "./identify.component.html",
  styleUrls: ["./identify.component.scss"]
})
export class PlanetIdentifyComponent extends BasePlanetWidgetComponent {
  winPos: Array<any> = [0, 0, 0, 0];
  title = ""
  pin1 = null
  propertyList = [
    {
      name: "1",
      value: 2
    }
  ];
  showInfo = false;
  switchValue = false;
  czmObjList = []
  constructor(private identify: Identify) {
    super();
  }
  print(callback): any {
    callback(this.propertyList)
    console.log(this.propertyList)
  }
  addBtn(name, callback) {
    let btn = document.createElement('button');
    btn.textContent = name;
    btn.id='idBtn'
    // console.log(this.propertyList)
    // let _this=this
    // btn.onclick = ()=>{
    //   callback()
    //   console.log(this.propertyList)
    // };
    btn.style.position = 'relative';
    btn.style.fontWeight = '400';
    btn.style.fontSize = '14px';
    btn.style.whiteSpace = 'nowrap';
    btn.style.textAlign = 'center';
    btn.style.border = '1px solid #d9d9d9';
    btn.style.boxShadow = '0 2px 0 rgb(0 0 0 / 2%)';
    btn.style.transition = 'all .3s cubic-bezier(.645,.045,.355,1)';
    btn.style.height = '32px';
    btn.style.padding = '4px 15px';
    btn.style.borderRadius = '2px';
    btn.style.backgroundColor = '#fff';
    callback(btn)
    document.getElementsByClassName('panel')[0].append(btn);
  }
  //初始化影像点选识别功能
  Init() {
    let win = document.getElementsByClassName("dialog")[0];
    win.parentNode.removeChild(win);
    document.getElementsByClassName("cesium-viewer")[0].append(win);
    window['showInfo'] = this.showInfo;
    this.view.sceneTree.$refs.pin.children.push({
      "ref": 'pin1',
      "czmObject": {
        "name": 'Pin1',
        "xbsjType": "Pin",
        "position": [1, 1, 0],
        "near": 30,
        "show": false,
        "customProp": this.showInfo
      }
    })
    this.pin1 = this.view.sceneTree.$refs.pin1.czmObject;
    XE.MVVM.watch(() => this.pin1.winPos, () => {
      // debugger
      this.winPos = this.pin1.winPos
      console.log("win", this.winPos)
      // win["style"].left = this.winPos[0] - 80 + "px";
      // win["style"].bottom = this.winPos[3] - 320 + "px";
    });
    XE.MVVM.watch(() => this.pin1.customProp, () => {
      if (!this.pin1.customProp) {
        this.showInfo = false
      }
    });

    if (this.view == null) return;
    this.bindIndentify(this.view.sceneTree.$refs.layerlist)
    this.identify.test(this.czmObjList, this.view, res => {
      console.log("res:", res)
      this.pin1.customProp = true
      this.showInfo = true
      this.propertyList = res
      let btn:any=document.getElementById('idBtn')
      btn.onclick=()=>{
        console.log(res)
      }
    })
    this.identify.pickModel(this.view, (res, pickObj) => {
      this.pin1.customProp = true
      this.showInfo = true
      this.propertyList = res
      window['pickObj']=pickObj.tileset.xbsjTileset;
      // handler.destroy()
    })
  }
  bindIndentify(list) {
    if (list.children && list.children.length > 0) {
      list.children.forEach(item => {
        if (item.children && item.children.length > 0) {
          this.bindIndentify(item)
        } else {
          this.bindClick(item)
        }
      });
    } else {
      this.bindClick(list)
    }
  }
  bindClick(item) {
    // if (item.czmObject.xbsjType !== "Imagery") return;
    if (item.czmObject.xbsjType == "Imagery") {
      if (item.czmObject.xbsjImageryProvider.type == "WebMapTileServiceImageryProvider" || item.czmObject.xbsjImageryProvider.type == "WebMapServiceImageryProvider") {
        if (item.czmObject.xbsjImageryProvider[item.czmObject.xbsjImageryProvider.type].url.indexOf("arcgis") !== -1) {
          this.czmObjList.push(item.czmObject)

          // this.identify.getLayers(item.czmObject, this.view, res => {
          //   console.log("res:", res)
          //   this.pin1.customProp = true
          //   this.showInfo = true
          //   this.propertyList = res
          // })
        } else {
          // this.czmObjList.push(item)
          this.identify.GetFeatureInfo(item.czmObject, this.view, 'point', res => {
            // console.log(item.czmObject.xbsjImageryProvider[item.czmObject.xbsjImageryProvider.type])
            this.title = item.czmObject.xbsjImageryProvider[item.czmObject.xbsjImageryProvider.type].layer
            this.pin1.customProp = true
            this.showInfo = true
            this.propertyList = res
          });
        }
      }
    } else if (item.czmObject.xbsjType == "Tileset") {

    }

  }
  close() {
    // console.log("close")
    this.showInfo = false;
  }
  zoomTo() {
    let entityCollection = this.view.czm.viewer.dataSources.getByName("highLight")[0].entities

    // let entity = entityCollection.values[0]
    // let positions = entity.polyline.positions._value;
    // console.log(entity.polyline.positions._value)
    // getPositionsHeightFromTerrain(this.view,positions,res=>{
    //   console.log("getPosheight:",positions)
    // })
    //   let polyCenter = Cesium.BoundingSphere.fromPoints(entity.polyline.positions._value).center
    let viewer = this.view.czm.viewer;
    //   let cartographic = Cesium.Cartographic.fromCartesian(polyCenter, viewer.scene.globe.ellipsoid, new Cesium.Cartographic());
    //   let lat = Cesium.Math.toDegrees(cartographic.latitude);
    //   let lng = Cesium.Math.toDegrees(cartographic.longitude);
    //   let height = cartographic.height;
    //   viewer.camera.flyTo({
    //     destination : Cesium.Cartesian3.fromDegrees(lng, lat,1000),
    //     orientation : {
    //         //heading : Cesium.Math.toRadians(0.0),
    //        // pitch : Cesium.Math.toRadians(-25.0),
    //         //roll : 0.0
    //     }
    // });
    viewer.flyTo(entityCollection)
  }
  switch(e) {
    let earth = this.view
    console.log(this.czmObjList)
    if (e.srcElement.style.color == 'aqua') {
      e.srcElement.style.color = ""
    } else {
      e.srcElement.style.color = 'aqua'
    }


    earth.epsplanet.allowClick = !earth.epsplanet.allowClick;
    if (!earth.epsplanet.allowClick) {
      this.view.interaction.picking.enabled = false
      this.view.interaction.picking.hoverEnable = false
      this.identify.ClearHighLight();
    } else {
      this.view.interaction.picking.enabled = true
      this.view.interaction.picking.hoverEnable = true
    }

  }
  test() {
    this.identify.getLayers(this.view.sceneTree.$refs.layerlist.children[1].children[0].czmObject, this.view, res => {
      console.log(res)
      this.pin1.customProp = true
      this.showInfo = true
      this.propertyList = res
    })


  }
  ngOnInit() {
    super.ngOnInit();
    this.Init();
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
}

