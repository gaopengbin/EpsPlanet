import { Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { BaseMapComponent, ComponentLoaderService, ComponentRegister, simpleLoader } from 'epsgis';
import { SceneTreeUtils } from '../../utils/sceneTree-utils';
/**
 *  @description 球
 *  @author ruir
 */
@ComponentRegister({
  uri: "epsgis-planet-earth",
  path: "epsplanet/components/earth",
  name: "PlanetEarthComponent"
})
@Component({
  selector: 'epsgis-planet-earth',
  templateUrl: './earth.component.html',
  styleUrls: ['./earth.component.scss'],
})
export class PlanetEarthComponent extends BaseMapComponent {
  @ViewChild("earthContainer", { static: true }) earthContainer: ElementRef;
  //按顺序添加
  resources: ReadonlyArray<string> = [
    // "XbsjCesium/Cesium.js",
    // "XbsjCesium/XbsjCesium.js",
    "XbsjEarth/XbsjEarth.js"
  ];
  constructor(public componentLoader: ComponentLoaderService) {
    super(componentLoader);
  }
  static getCompInfo() {
    return { name: "PlanetEarthComponent", path: "epsplanet/components/earth" };
  }
  ngOnInit() {
    super.ngOnInit();
    // this.is3D用来指示项目类型，非常重要，请勿删除
    this.is3D = true;
  }
  initMap(): Promise<any> {
    // this.is3D用来指示项目类型，非常重要，请勿删除
    this.is3D = true;
    return new Promise((resolve, reject) => {
      const jsApi: string = this.appConfig.map.jsApi;
      if (!jsApi) {
        reject("没有配置jsApi");
        return;
      }
      const resFullPaths: string[] = [];
      this.resources.forEach(path => {
        resFullPaths.push(jsApi + "/" + path);
      });
      //直接引用该js会导致earthSdk无法使用
      //因为它内部也是用得类似方法
      // resFullPaths.push("assets/watch.js");
      simpleLoader.loadResources(resFullPaths, null, null, () => {
        //全部加载完成
        const XE = window["XE"];
        if (!XE) {
          reject("XE undefined");
          return;
        }
        XE.ready().then(() => {
          var earth = new XE.Earth("earthContainer", {
            homeButton: true,
            timeline: false,
            sceneModePicker: true
          });
          earth.interaction.picking.enabled = true
          earth.interaction.picking.hoverEnable = true

          const layerNode = SceneTreeUtils.loadLayers(this.config).children
          console.log(layerNode)
          earth.sceneTree.root.children.push(...layerNode);
          earth.camera.navigator.showCompass = true; // 显示指北针
          earth.camera.navigator.showDistanceLegend = true; // 显示比例尺                
          //test
          window["earth"] = earth;
          if (this.config.mapOptions && this.config.mapOptions.center) {
            let x = 116.26984645340727, y = 40.10171604578351, h = 230, heading = 0, pitch = -90;
            if (this.config.mapOptions.center.length >= 1) {
              x = this.config.mapOptions.center[0];
            }
            if (this.config.mapOptions.center.length >= 2) {
              y = this.config.mapOptions.center[1];
            }
            if (this.config.mapOptions.center.length >= 3) {
              h = this.config.mapOptions.center[2];
            }
            if (this.config.mapOptions.heading) {
              heading = this.config.mapOptions.heading;
            }
            if (this.config.mapOptions.pitch) {
              pitch = this.config.mapOptions.pitch;
            }
            earth.czm.viewer.camera.flyTo({
              destination: Cesium.Cartesian3.fromDegrees(x, y, h),
              orientation: {
                heading: Cesium.Math.toRadians(heading),
                pitch: Cesium.Math.toRadians(pitch),
              }
            });
          }
          // var sceneModePicker = new Cesium.SceneModePicker('sceneModePickerContainer', earth.czm.scene);

          resolve(earth);
        });

      });
    });
  }

}
