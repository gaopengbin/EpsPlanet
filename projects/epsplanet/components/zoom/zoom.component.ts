import { Component, OnInit } from '@angular/core';
import { ComponentRegister } from 'epsgis';
import { BasePlanetWidgetComponent } from '../base-widget/base-widget.component';

@ComponentRegister({
  uri: "epsgis-planet-zoom",
  path: "epsplanet/components/zoom",
  name: "PlanetZoomComponent"
})
@Component({
  selector: 'epsgis-planet-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.scss'],
})
export class PlanetZoomComponent extends BasePlanetWidgetComponent {

  constructor() {
    super();
  }
  static getCompInfo() {
    return { name: "PlanetZoomComponent", path: "epsplanet/components/zoom" };
  }
  ngOnInit() {
   
  }
  ngAfterViewInit(){
     document.getElementsByClassName("jimu-widget-onscreen-icon zoomOut")[0]['style'].top = document.getElementsByClassName("jimu-widget-onscreen-icon zoomIn")[0]['offsetHeight'] + "px"
  }
  zoomIn() {
    const viewer = this.view.czm.viewer;
    this.getCesiumView().camera.zoomIn(viewer.camera.positionCartographic.height / Math.abs(Math.sin(viewer.camera.pitch)) * 0.2);
  }
  zoomOut() {
    const viewer = this.view.czm.viewer;
    viewer.camera.zoomOut(viewer.camera.positionCartographic.height / Math.abs(Math.sin(viewer.camera.pitch)) * 0.2);
  }
}
