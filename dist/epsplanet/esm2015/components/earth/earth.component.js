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
                    earth.interaction.picking.enabled = true;
                    earth.interaction.picking.hoverEnable = true;
                    const layerNode = SceneTreeUtils.loadLayers(this.config).children;
                    console.log(layerNode);
                    earth.sceneTree.root.children.push(...layerNode);
                    earth.camera.navigator.showCompass = true;
                    earth.camera.navigator.showDistanceLegend = true;
                    window["earth"] = earth;
                    if (this.config.mapOptions && this.config.mapOptions.center) {
                        let x = 116.26984645340727, y = 40.10171604578351, h = 230;
                        if (this.config.mapOptions.center.length >= 1) {
                            x = this.config.mapOptions.center[0];
                        }
                        if (this.config.mapOptions.center.length >= 2) {
                            y = this.config.mapOptions.center[1];
                        }
                        if (this.config.mapOptions.center.length >= 3) {
                            h = this.config.mapOptions.center[2];
                        }
                        earth.czm.viewer.camera.flyTo({
                            destination: Cesium.Cartesian3.fromDegrees(x, y, h),
                            orientation: {
                                heading: Cesium.Math.toRadians(5),
                                pitch: Cesium.Math.toRadians(-36.0),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWFydGguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZXBzcGxhbmV0L2NvbXBvbmVudHMvZWFydGgvZWFydGguY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZXBzcGxhbmV0L2NvbXBvbmVudHMvZWFydGgvZWFydGguY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXNCLFNBQVMsRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFDM0YsT0FBTyxFQUFFLGdCQUFnQixFQUEwQixpQkFBaUIsRUFBRSxZQUFZLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDbkcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7OztJQWVoRCxvQkFBb0IsU0FBcEIsb0JBQXFCLFNBQVEsZ0JBQWdCO0lBUXhELFlBQW1CLGVBQXVDO1FBQ3hELEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUROLG9CQUFlLEdBQWYsZUFBZSxDQUF3QjtRQUwxRCxjQUFTLEdBQTBCO1lBR2pDLHdCQUF3QjtTQUN6QixDQUFDO0lBR0YsQ0FBQztJQUNELE1BQU0sQ0FBQyxXQUFXO1FBQ2hCLE9BQU8sRUFBRSxJQUFJLEVBQUUsc0JBQXNCLEVBQUUsSUFBSSxFQUFFLDRCQUE0QixFQUFFLENBQUM7SUFDOUUsQ0FBQztJQUNELFFBQVE7UUFDTixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUNELE9BQU87UUFFTCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3JDLE1BQU0sS0FBSyxHQUFXLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxD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LFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzs0QkFDbkQsV0FBVyxFQUFFO2dDQUNYLE9BQU8sRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0NBQ2pDLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQzs2QkFDcEM7eUJBQ0YsQ0FBQyxDQUFDO3FCQUNKO29CQUdELE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDakIsQ0FBQyxDQUFDLENBQUM7WUFFTCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUVGLENBQUE7d0ZBdEZZLG9CQUFvQjt5REFBcEIsb0JBQW9COzs7Ozs7UUNqQmpDLDRCQUNNO1FBRU4scUZBQTJDOztBRGM5QixvQkFBb0I7SUFWaEMsaUJBQWlCLENBQUM7UUFDakIsR0FBRyxFQUFFLHFCQUFxQjtRQUMxQixJQUFJLEVBQUUsNEJBQTRCO1FBQ2xDLElBQUksRUFBRSxzQkFBc0I7S0FDN0IsQ0FBQztHQU1XLG9CQUFvQixDQXNGaEM7U0F0Rlksb0JBQW9CO3VGQUFwQixvQkFBb0I7Y0FMaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFdBQVcsRUFBRSx3QkFBd0I7Z0JBQ3JDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2FBQ3RDO3lFQUVnRCxjQUFjO2tCQUE1RCxTQUFTO21CQUFDLGdCQUFnQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VNYXBDb21wb25lbnQsIENvbXBvbmVudExvYWRlclNlcnZpY2UsIENvbXBvbmVudFJlZ2lzdGVyLCBzaW1wbGVMb2FkZXIgfSBmcm9tICdlcHNnaXMnO1xuaW1wb3J0IHsgU2NlbmVUcmVlVXRpbHMgfSBmcm9tICcuLi8uLi91dGlscy9zY2VuZVRyZWUtdXRpbHMnO1xuLyoqXG4gKiAgQGRlc2NyaXB0aW9uIOeQg1xuICogIEBhdXRob3IgcnVpclxuICovXG5AQ29tcG9uZW50UmVnaXN0ZXIoe1xuICB1cmk6IFwiZXBzZ2lzLXBsYW5ldC1lYXJ0aFwiLFxuICBwYXRoOiBcImVwc3BsYW5ldC9jb21wb25lbnRzL2VhcnRoXCIsXG4gIG5hbWU6IFwiUGxhbmV0RWFydGhDb21wb25lbnRcIlxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Vwc2dpcy1wbGFuZXQtZWFydGgnLFxuICB0ZW1wbGF0ZVVybDogJy4vZWFydGguY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9lYXJ0aC5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBQbGFuZXRFYXJ0aENvbXBvbmVudCBleHRlbmRzIEJhc2VNYXBDb21wb25lbnQge1xuICBAVmlld0NoaWxkKFwiZWFydGhDb250YWluZXJcIiwgeyBzdGF0aWM6IHRydWUgfSkgZWFydGhDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIC8v5oyJ6aG65bqP5re75YqgXG4gIHJlc291cmNlczogUmVhZG9ubHlBcnJheTxzdHJpbmc+ID0gW1xuICAgIC8vIFwiWGJzakNlc2l1bS9DZXNpdW0uanNcIixcbiAgICAvLyBcIlhic2pDZXNpdW0vWGJzakNlc2l1bS5qc1wiLFxuICAgIFwiWGJzakVhcnRoL1hic2pFYXJ0aC5qc1wiXG4gIF07XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb21wb25lbnRMb2FkZXI6IENvbXBvbmVudExvYWRlclNlcnZpY2UpIHtcbiAgICBzdXBlcihjb21wb25lbnRMb2FkZXIpO1xuICB9XG4gIHN0YXRpYyBnZXRDb21wSW5mbygpIHtcbiAgICByZXR1cm4geyBuYW1lOiBcIlBsYW5ldEVhcnRoQ29tcG9uZW50XCIsIHBhdGg6IFwiZXBzcGxhbmV0L2NvbXBvbmVudHMvZWFydGhcIiB9O1xuICB9XG4gIG5nT25Jbml0KCkge1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gICAgLy8gdGhpcy5pczNE55So5p2l5oyH56S66aG555uu57G75Z6L77yM6Z2e5bi46YeN6KaB77yM6K+35Yu/5Yig6ZmkXG4gICAgdGhpcy5pczNEID0gdHJ1ZTtcbiAgfVxuICBpbml0TWFwKCk6IFByb21pc2U8YW55PiB7XG4gICAgLy8gdGhpcy5pczNE55So5p2l5oyH56S66aG555uu57G75Z6L77yM6Z2e5bi46YeN6KaB77yM6K+35Yu/5Yig6ZmkXG4gICAgdGhpcy5pczNEID0gdHJ1ZTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QganNBcGk6IHN0cmluZyA9IHRoaXMuYXBwQ29uZmlnLm1hcC5qc0FwaTtcbiAgICAgIGlmICghanNBcGkpIHtcbiAgICAgICAgcmVqZWN0KFwi5rKh5pyJ6YWN572uanNBcGlcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlc0Z1bGxQYXRoczogc3RyaW5nW10gPSBbXTtcbiAgICAgIHRoaXMucmVzb3VyY2VzLmZvckVhY2gocGF0aCA9PiB7XG4gICAgICAgIHJlc0Z1bGxQYXRocy5wdXNoKGpzQXBpICsgXCIvXCIgKyBwYXRoKTtcbiAgICAgIH0pO1xuICAgICAgLy/nm7TmjqXlvJXnlKjor6Vqc+S8muWvvOiHtGVhcnRoU2Rr5peg5rOV5L2/55SoXG4gICAgICAvL+WboOS4uuWug+WGhemDqOS5n+aYr+eUqOW+l+exu+S8vOaWueazlVxuICAgICAgLy8gcmVzRnVsbFBhdGhzLnB1c2goXCJhc3NldHMvd2F0Y2guanNcIik7XG4gICAgICBzaW1wbGVMb2FkZXIubG9hZFJlc291cmNlcyhyZXNGdWxsUGF0aHMsIG51bGwsIG51bGwsICgpID0+IHtcbiAgICAgICAgLy/lhajpg6jliqDovb3lrozmiJBcbiAgICAgICAgY29uc3QgWEUgPSB3aW5kb3dbXCJYRVwiXTtcbiAgICAgICAgaWYgKCFYRSkge1xuICAgICAgICAgIHJlamVjdChcIlhFIHVuZGVmaW5lZFwiKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgWEUucmVhZHkoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICB2YXIgZWFydGggPSBuZXcgWEUuRWFydGgoXCJlYXJ0aENvbnRhaW5lclwiLCB7XG4gICAgICAgICAgICBob21lQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgdGltZWxpbmU6IGZhbHNlLFxuICAgICAgICAgICAgc2NlbmVNb2RlUGlja2VyOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZWFydGguaW50ZXJhY3Rpb24ucGlja2luZy5lbmFibGVkID0gdHJ1ZVxuICAgICAgICAgIGVhcnRoLmludGVyYWN0aW9uLnBpY2tpbmcuaG92ZXJFbmFibGUgPSB0cnVlXG4gICAgICAgICAgXG4gICAgICAgICAgY29uc3QgbGF5ZXJOb2RlID0gU2NlbmVUcmVlVXRpbHMubG9hZExheWVycyh0aGlzLmNvbmZpZykuY2hpbGRyZW5cbiAgICAgICAgICBjb25zb2xlLmxvZyhsYXllck5vZGUpXG4gICAgICAgICAgZWFydGguc2NlbmVUcmVlLnJvb3QuY2hpbGRyZW4ucHVzaCguLi5sYXllck5vZGUpO1xuICAgICAgICAgIGVhcnRoLmNhbWVyYS5uYXZpZ2F0b3Iuc2hvd0NvbXBhc3MgPSB0cnVlOyAvLyDmmL7npLrmjIfljJfpkohcbiAgICAgICAgICBlYXJ0aC5jYW1lcmEubmF2aWdhdG9yLnNob3dEaXN0YW5jZUxlZ2VuZCA9IHRydWU7IC8vIOaYvuekuuavlOS+i+WwuiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAvL3Rlc3RcbiAgICAgICAgICB3aW5kb3dbXCJlYXJ0aFwiXSA9IGVhcnRoO1xuICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5tYXBPcHRpb25zICYmIHRoaXMuY29uZmlnLm1hcE9wdGlvbnMuY2VudGVyKSB7XG4gICAgICAgICAgICBsZXQgeCA9IDExNi4yNjk4NDY0NTM0MDcyNywgeSA9IDQwLjEwMTcxNjA0NTc4MzUxLCBoID0gMjMwO1xuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLm1hcE9wdGlvbnMuY2VudGVyLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgICAgICAgIHggPSB0aGlzLmNvbmZpZy5tYXBPcHRpb25zLmNlbnRlclswXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5tYXBPcHRpb25zLmNlbnRlci5sZW5ndGggPj0gMikge1xuICAgICAgICAgICAgICB5ID0gdGhpcy5jb25maWcubWFwT3B0aW9ucy5jZW50ZXJbMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5jb25maWcubWFwT3B0aW9ucy5jZW50ZXIubGVuZ3RoID49IDMpIHtcbiAgICAgICAgICAgICAgaCA9IHRoaXMuY29uZmlnLm1hcE9wdGlvbnMuY2VudGVyWzJdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWFydGguY3ptLnZpZXdlci5jYW1lcmEuZmx5VG8oe1xuICAgICAgICAgICAgICBkZXN0aW5hdGlvbjogQ2VzaXVtLkNhcnRlc2lhbjMuZnJvbURlZ3JlZXMoeCwgeSwgaCksXG4gICAgICAgICAgICAgIG9yaWVudGF0aW9uOiB7XG4gICAgICAgICAgICAgICAgaGVhZGluZzogQ2VzaXVtLk1hdGgudG9SYWRpYW5zKDUpLFxuICAgICAgICAgICAgICAgIHBpdGNoOiBDZXNpdW0uTWF0aC50b1JhZGlhbnMoLTM2LjApLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gdmFyIHNjZW5lTW9kZVBpY2tlciA9IG5ldyBDZXNpdW0uU2NlbmVNb2RlUGlja2VyKCdzY2VuZU1vZGVQaWNrZXJDb250YWluZXInLCBlYXJ0aC5jem0uc2NlbmUpO1xuXG4gICAgICAgICAgcmVzb2x2ZShlYXJ0aCk7XG4gICAgICAgIH0pO1xuXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG59XG4iLCI8ZGl2ICNlYXJ0aENvbnRhaW5lciBpZD1cImVhcnRoQ29udGFpbmVyXCIgY2xhc3M9XCJlYXJ0aENvbnRhaW5lclwiPlxuPC9kaXY+XG48IS0tIOWvueS6jmNlc2l1be+8jOmcgOimgeWwhm5nLXRlbXBsZXRl5pS+5Zyo5aSW6Z2i77yI5pS+6YeM6Z2i5Lya5Zugei1pbmRleOW9seWTjeWvvOiHtOWbvuagh+aYvuekuuS4jeWHuuadpe+8iSAtLT5cbjxuZy10ZW1wbGF0ZSBjb21wb25lbnQtaG9zdD4gPC9uZy10ZW1wbGF0ZT4iXX0=