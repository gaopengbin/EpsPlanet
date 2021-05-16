import { Component } from "@angular/core";
import { ComponentRegister } from "epsgis";
import { BasePlanetWidgetComponent } from '../base-widget/base-widget.component';
import { Identify } from '../../utils/identify';
@ComponentRegister({
  uri: "epsgis-planet-identify",
  path: "epsplanet/components/identify",
  name: "PlanetIdentifyComponent"
})
@Component({
  selector: "epsgis-planet-identify",
  templateUrl: "./identify.component.html",
  styleUrls: ["./identify.component.scss"],
  host: {
    "[class.jimu-widget-onscreen-icon]": "true",
    // "[class.icon]": "true",
    "title": "识别"
  }
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
  constructor(private identify: Identify) {
    super();
  }
  createInfoWin() {
    let win = document.createElement('div');
    win.className = "dialog";
    win.style.left = this.winPos[0] - 80 + "px";
    win.style.bottom = this.winPos[3] - 320 + "px";
    win.innerHTML = `<div class="panel">
    <span>${this.title}</span><i nz-icon nzType="close" nzTheme="outline" (click)="close()" style="float: right;"></i>
    <nz-table #basicTable [nzData]="propertyList" [nzFrontPagination]="false" [nzShowPagination]="false"
        [nzTitle]="null">
        <tbody>
            <tr *ngFor="let data of basicTable.data">
                <td>{{ data.name }}</td>
                <td>{{ data.value }}</td>
            </tr>
        </tbody>
    </nz-table>
    <i nz-icon nzType="zoom-in" nzTheme="outline" (click)="zoomTo()"></i><span>缩放至</span>
</div>
<div class="arrow"></div>`;
    document.getElementsByClassName("cesium-viewer")[0].append(win);
    return win
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
    this.view.sceneTree.$refs.layerlist.children.forEach(group => {
      // console.log(group)
      if (group.children) {
        group.children.forEach(item => {
          // console.log(item)
          if (item.czmObject.xbsjType !== "Imagery") return;
          if (item.czmObject.xbsjImageryProvider.type == "WebMapTileServiceImageryProvider" || item.czmObject.xbsjImageryProvider.type == "SSWebMapServiceImageryProvider") {
            if (item.czmObject.xbsjImageryProvider[item.czmObject.xbsjImageryProvider.type].url.indexOf("arcgis") !== -1) {
              this.identify.getLayers(item.czmObject, this.view, res => {
                console.log("res:", res)
                this.pin1.customProp = true
                this.showInfo = true
                this.propertyList = res
              })
            } else {
              this.identify.GetFeatureInfo(item.czmObject, this.view, 'point', res => {
                console.log(item.czmObject.xbsjImageryProvider[item.czmObject.xbsjImageryProvider.type])
                this.title = item.czmObject.xbsjImageryProvider[item.czmObject.xbsjImageryProvider.type].layer
                this.pin1.customProp = true
                this.showInfo = true
                this.propertyList = res
              });
            }

          }
        });
      }
    });
  }
  close() {
    // console.log("close")
    this.showInfo = false;
  }
  zoomTo() {
    let entityCollection = this.view.czm.viewer.dataSources.getByName("highLight")[0].entities
    this.view.czm.viewer.flyTo(entityCollection)
  }
  switch($event) {
    window["allowClick"] = $event;
    if (!$event) {
      this.identify.ClearHighLight();
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
