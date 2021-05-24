import { Component, HostListener } from '@angular/core';
import { ComponentRegister } from 'epsgis';
import { BasePlanetWidgetComponent } from '../base-widget/base-widget.component';

@ComponentRegister({
  uri:"epsgis-planet-home",
  path:"epsplanet/components/home",
  name:"PlanetHomeComponent"
})
@Component({
  selector: 'epsgis-planet-home',
  template: `<i  nz-icon [nzIconfont]="'icon-epsgis-home'"> </i>`,
  host: {
    "[class.jimu-widget-onscreen-icon]": "true",
    "title": "home"
  }
})
export class PlanetHomeComponent extends BasePlanetWidgetComponent {
  constructor() {
    super();
  }
  static getCompInfo() {
    return { path: "epsplanet/components/home" };
  }
  ngOnInit() {
    this.view.czm.viewer.homeButton._container.hidden = true
  }
  /**
   * 
   * @param evt 
   */
  @HostListener('click', ['$event'])
  onMouseClick(evt) {
    //this.view.czm.viewer.camera.setView(     { destination: Cesium.Cartesian3.fromDegrees(110.20, 34.55, 3000000)});
    this.view.czm.viewer.homeButton._element.click();
  }

}
