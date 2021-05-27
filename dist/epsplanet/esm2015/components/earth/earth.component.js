import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { BaseMapComponent, ComponentRegister, simpleLoader } from 'epsgis';
import { SceneTreeUtils } from '../../utils/sceneTree-utils';
import * as i0 from "@angular/core";
import * as i1 from "epsgis";
const _c0 = ["earthContainer"];
function PlanetEarthComponent_ng_template_2_Template(rf, ctx) { }
let PlanetEarthComponent = class PlanetEarthComponent extends BaseMapComponent {
    constructor(componentLoader) {
        super(componentLoader);
        this.componentLoader = componentLoader;
        this.resources = [
            "XbsjEarth/XbsjEarth.js"
        ];
    }
    static getCompInfo() {
        return { name: "PlanetEarthComponent", path: "epsplanet/components/earth" };
    }
    ngOnInit() {
        super.ngOnInit();
        this.is3D = true;
    }
    initMap() {
        this.is3D = true;
        return new Promise((resolve, reject) => {
            const jsApi = this.appConfig.map.jsApi;
            if (!jsApi) {
                reject("没有配置jsApi");
                return;
            }
            const resFullPaths = [];
            this.resources.forEach(path => {
                resFullPaths.push(jsApi + "/" + path);
            });
            simpleLoader.loadResources(resFullPaths, null, null, () => {
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
                    earth.interaction.picking.enabled = false;
                    earth.interaction.picking.hoverEnable = false;
                    const layerNode = SceneTreeUtils.loadLayers(this.config).children;
                    console.log(layerNode);
                    earth.sceneTree.root.children.push(...layerNode);
                    earth.camera.navigator.showCompass = true;
                    earth.camera.navigator.showDistanceLegend = true;
                    window["earth"] = earth;
                    earth.getCurrentView = function () {
                        const td = Cesium.Math.toDegrees;
                        let lon = td(earth.czm.camera.positionCartographic.longitude).toFixed(5);
                        let lat = td(earth.czm.camera.positionCartographic.latitude).toFixed(5);
                        let height = earth.czm.camera.positionCartographic.height.toFixed(5);
                        let heading = td(earth.czm.camera.heading).toFixed(5);
                        let pitch = td(earth.czm.camera.pitch).toFixed(5);
                        let roll = td(earth.czm.camera.roll).toFixed(5);
                        console.log(`"center":[${lon},\n${lat},\n${height}],\n"heading":${heading},\n"pitch":${pitch},\n"roll":${roll}`);
                    };
                    earth.RadiansTodegree = function (radians) {
                        let pos = [];
                        radians.forEach(item => {
                            pos.push(item / Math.PI * 180);
                        });
                        console.log(pos);
                    };
                    if (this.config.mapOptions && this.config.mapOptions.center) {
                        let x = 116.26984645340727, y = 40.10171604578351, h = 230, heading = 0, pitch = 0;
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
                        earth.czm.viewer.scene.camera.setView({
                            destination: Cesium.Cartesian3.fromDegrees(x, y, h),
                            orientation: {
                                heading: Cesium.Math.toRadians(heading),
                                pitch: Cesium.Math.toRadians(pitch),
                                roll: 0
                            }
                        });
                    }
                    resolve(earth);
                });
            });
        });
    }
};
PlanetEarthComponent.ɵfac = function PlanetEarthComponent_Factory(t) { return new (t || PlanetEarthComponent)(i0.ɵɵdirectiveInject(i1.ComponentLoaderService)); };
PlanetEarthComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PlanetEarthComponent, selectors: [["epsgis-planet-earth"]], viewQuery: function PlanetEarthComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 3);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.earthContainer = _t.first);
    } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 0, consts: [["id", "earthContainer", 1, "earthContainer"], ["earthContainer", ""], ["component-host", ""]], template: function PlanetEarthComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "div", 0, 1);
        i0.ɵɵtemplate(2, PlanetEarthComponent_ng_template_2_Template, 0, 0, "ng-template", 2);
    } }, directives: [i1.ComponentContainerDirective], styles: [".earthContainer[_ngcontent-%COMP%]{width:100%;height:100%;background:grey}"] });
PlanetEarthComponent = __decorate([
    ComponentRegister({
        uri: "epsgis-planet-earth",
        path: "epsplanet/components/earth",
        name: "PlanetEarthComponent"
    })
], PlanetEarthComponent);
export { PlanetEarthComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PlanetEarthComponent, [{
        type: Component,
        args: [{
                selector: 'epsgis-planet-earth',
                templateUrl: './earth.component.html',
                styleUrls: ['./earth.component.scss'],
            }]
    }], function () { return [{ type: i1.ComponentLoaderService }]; }, { earthContainer: [{
            type: ViewChild,
            args: ["earthContainer", { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWFydGguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZXBzcGxhbmV0L2NvbXBvbmVudHMvZWFydGgvZWFydGguY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZXBzcGxhbmV0L2NvbXBvbmVudHMvZWFydGgvZWFydGguY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXNCLFNBQVMsRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFDM0YsT0FBTyxFQUFFLGdCQUFnQixFQUEwQixpQkFBaUIsRUFBRSxZQUFZLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDbkcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7OztJQWVoRCxvQkFBb0IsU0FBcEIsb0JBQXFCLFNBQVEsZ0JBQWdCO0lBUXhELFlBQW1CLGVBQXVDO1FBQ3hELEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUROLG9CQUFlLEdBQWYsZUFBZSxDQUF3QjtRQUwxRCxjQUFTLEdBQTBCO1lBR2pDLHdCQUF3QjtTQUN6QixDQUFDO0lBR0YsQ0FBQztJQUNELE1BQU0sQ0FBQyxXQUFXO1FBQ2hCLE9BQU8sRUFBRSxJQUFJLEVBQUUsc0JBQXNCLEVBQUUsSUFBSSxFQUFFLDRCQUE0QixFQUFFLENBQUM7SUFDOUUsQ0FBQztJQUNELFFBQVE7UUFDTixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUNELE9BQU87UUFFTCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3JDLE1BQU0sS0FBSyxHQUFXLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxD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akIsR0FBRyxFQUFFLHFCQUFxQjtRQUMxQixJQUFJLEVBQUUsNEJBQTRCO1FBQ2xDLElBQUksRUFBRSxzQkFBc0I7S0FDN0IsQ0FBQztHQU1XLG9CQUFvQixDQThHaEM7U0E5R1ksb0JBQW9CO3VGQUFwQixvQkFBb0I7Y0FMaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFdBQVcsRUFBRSx3QkFBd0I7Z0JBQ3JDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2FBQ3RDO3lFQUVnRCxjQUFjO2tCQUE1RCxTQUFTO21CQUFDLGdCQUFnQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VNYXBDb21wb25lbnQsIENvbXBvbmVudExvYWRlclNlcnZpY2UsIENvbXBvbmVudFJlZ2lzdGVyLCBzaW1wbGVMb2FkZXIgfSBmcm9tICdlcHNnaXMnO1xuaW1wb3J0IHsgU2NlbmVUcmVlVXRpbHMgfSBmcm9tICcuLi8uLi91dGlscy9zY2VuZVRyZWUtdXRpbHMnO1xuLyoqXG4gKiAgQGRlc2NyaXB0aW9uIOeQg1xuICogIEBhdXRob3IgcnVpclxuICovXG5AQ29tcG9uZW50UmVnaXN0ZXIoe1xuICB1cmk6IFwiZXBzZ2lzLXBsYW5ldC1lYXJ0aFwiLFxuICBwYXRoOiBcImVwc3BsYW5ldC9jb21wb25lbnRzL2VhcnRoXCIsXG4gIG5hbWU6IFwiUGxhbmV0RWFydGhDb21wb25lbnRcIlxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Vwc2dpcy1wbGFuZXQtZWFydGgnLFxuICB0ZW1wbGF0ZVVybDogJy4vZWFydGguY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9lYXJ0aC5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBQbGFuZXRFYXJ0aENvbXBvbmVudCBleHRlbmRzIEJhc2VNYXBDb21wb25lbnQge1xuICBAVmlld0NoaWxkKFwiZWFydGhDb250YWluZXJcIiwgeyBzdGF0aWM6IHRydWUgfSkgZWFydGhDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIC8v5oyJ6aG65bqP5re75YqgXG4gIHJlc291cmNlczogUmVhZG9ubHlBcnJheTxzdHJpbmc+ID0gW1xuICAgIC8vIFwiWGJzakNlc2l1bS9DZXNpdW0uanNcIixcbiAgICAvLyBcIlhic2pDZXNpdW0vWGJzakNlc2l1bS5qc1wiLFxuICAgIFwiWGJzakVhcnRoL1hic2pFYXJ0aC5qc1wiXG4gIF07XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb21wb25lbnRMb2FkZXI6IENvbXBvbmVudExvYWRlclNlcnZpY2UpIHtcbiAgICBzdXBlcihjb21wb25lbnRMb2FkZXIpO1xuICB9XG4gIHN0YXRpYyBnZXRDb21wSW5mbygpIHtcbiAgICByZXR1cm4geyBuYW1lOiBcIlBsYW5ldEVhcnRoQ29tcG9uZW50XCIsIHBhdGg6IFwiZXBzcGxhbmV0L2NvbXBvbmVudHMvZWFydGhcIiB9O1xuICB9XG4gIG5nT25Jbml0KCkge1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gICAgLy8gdGhpcy5pczNE55So5p2l5oyH56S66aG555uu57G75Z6L77yM6Z2e5bi46YeN6KaB77yM6K+35Yu/5Yig6ZmkXG4gICAgdGhpcy5pczNEID0gdHJ1ZTtcbiAgfVxuICBpbml0TWFwKCk6IFByb21pc2U8YW55PiB7XG4gICAgLy8gdGhpcy5pczNE55So5p2l5oyH56S66aG555uu57G75Z6L77yM6Z2e5bi46YeN6KaB77yM6K+35Yu/5Yig6ZmkXG4gICAgdGhpcy5pczNEID0gdHJ1ZTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QganNBcGk6IHN0cmluZyA9IHRoaXMuYXBwQ29uZmlnLm1hcC5qc0FwaTtcbiAgICAgIGlmICghanNBcGkpIHtcbiAgICAgICAgcmVqZWN0KFwi5rKh5pyJ6YWN572uanNBcGlcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlc0Z1bGxQYXRoczogc3RyaW5nW10gPSBbXTtcbiAgICAgIHRoaXMucmVzb3VyY2VzLmZvckVhY2gocGF0aCA9PiB7XG4gICAgICAgIHJlc0Z1bGxQYXRocy5wdXNoKGpzQXBpICsgXCIvXCIgKyBwYXRoKTtcbiAgICAgIH0pO1xuICAgICAgLy/nm7TmjqXlvJXnlKjor6Vqc+S8muWvvOiHtGVhcnRoU2Rr5peg5rOV5L2/55SoXG4gICAgICAvL+WboOS4uuWug+WGhemDqOS5n+aYr+eUqOW+l+exu+S8vOaWueazlVxuICAgICAgLy8gcmVzRnVsbFBhdGhzLnB1c2goXCJhc3NldHMvd2F0Y2guanNcIik7XG4gICAgICBzaW1wbGVMb2FkZXIubG9hZFJlc291cmNlcyhyZXNGdWxsUGF0aHMsIG51bGwsIG51bGwsICgpID0+IHtcbiAgICAgICAgLy/lhajpg6jliqDovb3lrozmiJBcbiAgICAgICAgY29uc3QgWEUgPSB3aW5kb3dbXCJYRVwiXTtcbiAgICAgICAgaWYgKCFYRSkge1xuICAgICAgICAgIHJlamVjdChcIlhFIHVuZGVmaW5lZFwiKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgWEUucmVhZHkoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICB2YXIgZWFydGggPSBuZXcgWEUuRWFydGgoXCJlYXJ0aENvbnRhaW5lclwiLCB7XG4gICAgICAgICAgICBob21lQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgdGltZWxpbmU6IGZhbHNlLFxuICAgICAgICAgICAgc2NlbmVNb2RlUGlja2VyOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZWFydGguaW50ZXJhY3Rpb24ucGlja2luZy5lbmFibGVkID0gZmFsc2VcbiAgICAgICAgICBlYXJ0aC5pbnRlcmFjdGlvbi5waWNraW5nLmhvdmVyRW5hYmxlID0gZmFsc2VcblxuICAgICAgICAgIGNvbnN0IGxheWVyTm9kZSA9IFNjZW5lVHJlZVV0aWxzLmxvYWRMYXllcnModGhpcy5jb25maWcpLmNoaWxkcmVuXG4gICAgICAgICAgY29uc29sZS5sb2cobGF5ZXJOb2RlKVxuICAgICAgICAgIGVhcnRoLnNjZW5lVHJlZS5yb290LmNoaWxkcmVuLnB1c2goLi4ubGF5ZXJOb2RlKTtcbiAgICAgICAgICBlYXJ0aC5jYW1lcmEubmF2aWdhdG9yLnNob3dDb21wYXNzID0gdHJ1ZTsgLy8g5pi+56S65oyH5YyX6ZKIXG4gICAgICAgICAgZWFydGguY2FtZXJhLm5hdmlnYXRvci5zaG93RGlzdGFuY2VMZWdlbmQgPSB0cnVlOyAvLyDmmL7npLrmr5TkvovlsLogICAgICAgICAgICAgICAgXG4gICAgICAgICAgLy90ZXN0XG4gICAgICAgICAgd2luZG93W1wiZWFydGhcIl0gPSBlYXJ0aDtcbiAgICAgICAgICBlYXJ0aC5nZXRDdXJyZW50VmlldyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHRkID0gQ2VzaXVtLk1hdGgudG9EZWdyZWVzO1xuICAgICAgICAgICAgbGV0IGxvbiA9IHRkKGVhcnRoLmN6bS5jYW1lcmEucG9zaXRpb25DYXJ0b2dyYXBoaWMubG9uZ2l0dWRlKS50b0ZpeGVkKDUpXG4gICAgICAgICAgICBsZXQgbGF0ID0gdGQoZWFydGguY3ptLmNhbWVyYS5wb3NpdGlvbkNhcnRvZ3JhcGhpYy5sYXRpdHVkZSkudG9GaXhlZCg1KVxuICAgICAgICAgICAgbGV0IGhlaWdodCA9IGVhcnRoLmN6bS5jYW1lcmEucG9zaXRpb25DYXJ0b2dyYXBoaWMuaGVpZ2h0LnRvRml4ZWQoNSlcbiAgICAgICAgICAgIGxldCBoZWFkaW5nID0gdGQoZWFydGguY3ptLmNhbWVyYS5oZWFkaW5nKS50b0ZpeGVkKDUpXG4gICAgICAgICAgICBsZXQgcGl0Y2ggPSB0ZChlYXJ0aC5jem0uY2FtZXJhLnBpdGNoKS50b0ZpeGVkKDUpXG4gICAgICAgICAgICBsZXQgcm9sbCA9IHRkKGVhcnRoLmN6bS5jYW1lcmEucm9sbCkudG9GaXhlZCg1KVxuICAgICAgICAgICAgY29uc29sZS5sb2coYFwiY2VudGVyXCI6WyR7bG9ufSxcXG4ke2xhdH0sXFxuJHtoZWlnaHR9XSxcXG5cImhlYWRpbmdcIjoke2hlYWRpbmd9LFxcblwicGl0Y2hcIjoke3BpdGNofSxcXG5cInJvbGxcIjoke3JvbGx9YClcbiAgICAgICAgICB9XG4gICAgICAgICAgZWFydGguUmFkaWFuc1RvZGVncmVlPWZ1bmN0aW9uKHJhZGlhbnMpe1xuICAgICAgICAgICAgbGV0IHBvcz1bXVxuICAgICAgICAgICAgcmFkaWFucy5mb3JFYWNoKGl0ZW09PntcbiAgICAgICAgICAgICAgcG9zLnB1c2goaXRlbS9NYXRoLlBJKjE4MClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwb3MpXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5tYXBPcHRpb25zICYmIHRoaXMuY29uZmlnLm1hcE9wdGlvbnMuY2VudGVyKSB7XG4gICAgICAgICAgICBsZXQgeCA9IDExNi4yNjk4NDY0NTM0MDcyNywgeSA9IDQwLjEwMTcxNjA0NTc4MzUxLCBoID0gMjMwLCBoZWFkaW5nID0gMCwgcGl0Y2ggPSAwO1xuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLm1hcE9wdGlvbnMuY2VudGVyLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgICAgICAgIHggPSB0aGlzLmNvbmZpZy5tYXBPcHRpb25zLmNlbnRlclswXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5tYXBPcHRpb25zLmNlbnRlci5sZW5ndGggPj0gMikge1xuICAgICAgICAgICAgICB5ID0gdGhpcy5jb25maWcubWFwT3B0aW9ucy5jZW50ZXJbMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5jb25maWcubWFwT3B0aW9ucy5jZW50ZXIubGVuZ3RoID49IDMpIHtcbiAgICAgICAgICAgICAgaCA9IHRoaXMuY29uZmlnLm1hcE9wdGlvbnMuY2VudGVyWzJdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLm1hcE9wdGlvbnMuaGVhZGluZykge1xuICAgICAgICAgICAgICBoZWFkaW5nID0gdGhpcy5jb25maWcubWFwT3B0aW9ucy5oZWFkaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLm1hcE9wdGlvbnMucGl0Y2gpIHtcbiAgICAgICAgICAgICAgcGl0Y2ggPSB0aGlzLmNvbmZpZy5tYXBPcHRpb25zLnBpdGNoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWFydGguY3ptLnZpZXdlci5zY2VuZS5jYW1lcmEuc2V0Vmlldyh7XG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uOiBDZXNpdW0uQ2FydGVzaWFuMy5mcm9tRGVncmVlcyh4LCB5LCBoKSxcbiAgICAgICAgICAgICAgb3JpZW50YXRpb246IHtcbiAgICAgICAgICAgICAgICBoZWFkaW5nOiBDZXNpdW0uTWF0aC50b1JhZGlhbnMoaGVhZGluZyksXG4gICAgICAgICAgICAgICAgcGl0Y2g6IENlc2l1bS5NYXRoLnRvUmFkaWFucyhwaXRjaCksXG4gICAgICAgICAgICAgICAgcm9sbDogMFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gdmFyIHNjZW5lTW9kZVBpY2tlciA9IG5ldyBDZXNpdW0uU2NlbmVNb2RlUGlja2VyKCdzY2VuZU1vZGVQaWNrZXJDb250YWluZXInLCBlYXJ0aC5jem0uc2NlbmUpO1xuXG4gICAgICAgICAgcmVzb2x2ZShlYXJ0aCk7XG4gICAgICAgIH0pO1xuXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG59XG4iLCI8ZGl2ICNlYXJ0aENvbnRhaW5lciBpZD1cImVhcnRoQ29udGFpbmVyXCIgY2xhc3M9XCJlYXJ0aENvbnRhaW5lclwiPlxuPC9kaXY+XG48IS0tIOWvueS6jmNlc2l1be+8jOmcgOimgeWwhm5nLXRlbXBsZXRl5pS+5Zyo5aSW6Z2i77yI5pS+6YeM6Z2i5Lya5Zugei1pbmRleOW9seWTjeWvvOiHtOWbvuagh+aYvuekuuS4jeWHuuadpe+8iSAtLT5cbjxuZy10ZW1wbGF0ZSBjb21wb25lbnQtaG9zdD4gPC9uZy10ZW1wbGF0ZT4iXX0=