import { Component, OnInit } from '@angular/core';
import { ComponentRegister } from 'epsgis';
import { BasePlanetWidgetComponent } from '../base-widget/base-widget.component';

@ComponentRegister({
  uri:"epsgis-planet-mode-switch",
  path:"epsplanet/components/mode-switch",
  name:"PlanetModeSwitchComponent"
})
@Component({
  selector: 'epsgis-planet-mode-switch',
  templateUrl: './mode-switch.component.html',
  styleUrls: ['./mode-switch.component.scss'],
  host: {
    "[class.jimu-widget-onscreen-icon]": "true",
    // "[class.icon]": "true",
    "title": "模式切换"
  }
})
export class PlanetModeSwitchComponent extends BasePlanetWidgetComponent {
  viewType: string = '3d';
  visible: boolean;
  constructor() {
    super();
  }
  static getCompInfo() {
    return { name: "PlanetModeSwitchComponent", path: "epsplanet/components/mode-switch" };
  }
  clickMe(): void {
    this.visible = false;
  }

  change(value: boolean): void {
    console.log(value);
  }

  changeViewMode(type: string) {
    if (type == "2d") {
      Promise.resolve().then(() => { this.view.czm.viewer.scene.morphTo2D(1); });
    } else if (type == "columbus") {
      Promise.resolve().then(() => { this.view.czm.viewer.scene.morphToColumbusView(1); });
    } else {
      Promise.resolve().then(() => { this.view.czm.viewer.scene.morphTo3D(1); });
    }
    this.viewType = type;
  }
}
