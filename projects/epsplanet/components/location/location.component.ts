import { Component, OnInit } from '@angular/core';
import { ComponentRegister } from 'epsgis';
import { BasePlanetWidgetComponent } from '../base-widget/base-widget.component';
import { PlanetIdentifyComponent } from '../identify/identify.component'
@ComponentRegister({
  uri: "epsgis-planet-location",
  path: "epsplanet/components/location",
  name: "PlanetLocationComponent"
})
@Component({
  selector: 'epsgis-planet-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class PlanetLocationComponent extends BasePlanetWidgetComponent implements OnInit {
  markerXY: any;
  // 经度 或 x
  XValue = 0;
  // 纬度 或 y
  YValue = 0;
  //高度
  ZValue = 0;

  //地理坐标系  --------  目前只做了此坐标系下的定位
  item4326 = {
    X: {
      label: "经度：",
      min: "-180",
      max: "180",
      placeHolder: "请输入经度"
    },
    Y: {
      label: "纬度：",
      min: "-90",
      max: "90",
      placeHolder: "请输入纬度"
    },
    Z: {
      label: "高度：",
      placeHolder: "请输入高度"
    }
  };
  //
  itemOther = {
    X: {
      label: "X：",
      min: "-99999999",
      max: "99999999",
      placeHolder: "请输入横坐标"
    },
    Y: {
      label: "Y：",
      min: "-99999999",
      max: "99999999",
      placeHolder: "请输入纵坐标"
    }
  };

  // 默认4326
  item: any = this.item4326;

  constructor(
  ) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.initialize();
    this.addbtn()
  }
  /**
  * 获取组件信息
  */
  static getCompInfo() {
    return { path: "epsplanet/components/location" };
  }
  //
  initialize() {
    this.XValue = this.config.longitude;
    this.YValue = this.config.latitude;
    this.ZValue = this.config.height;
  }
  test(res) {
    // alert('ff')
    console.log(res)
  }
  addbtn() {
    PlanetIdentifyComponent.prototype.addBtn('test', (btn)=>{
      btn.onclick=()=>{
        // console.log(window['pickObj'])
      }
    })
  }
  //开始定位
  location() {
    var position = null;
    //删除之前添加的实体
    if (this.markerXY) {
      this.view.czm.viewer.entities.remove(this.markerXY);
    }
    if (true) {
      position = Cesium.Cartesian3.fromDegrees(this.XValue, this.YValue, this.ZValue)
    } else {
      // this.position = 
    }
    //添加定位点实体
    this.markerXY = new Cesium.Entity({
      id: '视角定位坐标',
      position: position,
      point: {
        pixelSize: 6,
        color: Cesium.Color.WHITE.withAlpha(0.9),
        outlineColor: Cesium.Color.WHITE.withAlpha(0.9),
        outlineWidth: 1
      },
      billboard: {
        image: this.folderUrl + "images/location4.png",
        horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
        scale: .6
      },
    });
    this.view.czm.viewer.entities.add(this.markerXY);
    //定位
    this.view.czm.camera.setView({
      destination: position
    });
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

}
