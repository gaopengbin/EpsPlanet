import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { ComponentRegister } from 'epsgis';
import { BasePlanetWidgetComponent } from '../base-widget/base-widget.component';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/icon";
import * as i2 from "ng-zorro-antd/core/transition-patch";
let PlanetZoomComponent = class PlanetZoomComponent extends BasePlanetWidgetComponent {
    constructor() {
        super();
    }
    static getCompInfo() {
        return { name: "PlanetZoomComponent", path: "epsplanet/components/zoom" };
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        document.getElementsByClassName("jimu-widget-onscreen-icon zoomOut")[0]['style'].top = document.getElementsByClassName("jimu-widget-onscreen-icon zoomIn")[0]['offsetHeight'] + "px";
    }
    zoomIn() {
        const viewer = this.view.czm.viewer;
        this.getCesiumView().camera.zoomIn(viewer.camera.positionCartographic.height / Math.abs(Math.sin(viewer.camera.pitch)) * 0.2);
    }
    zoomOut() {
        const viewer = this.view.czm.viewer;
        viewer.camera.zoomOut(viewer.camera.positionCartographic.height / Math.abs(Math.sin(viewer.camera.pitch)) * 0.2);
    }
};
PlanetZoomComponent.ɵfac = function PlanetZoomComponent_Factory(t) { return new (t || PlanetZoomComponent)(); };
PlanetZoomComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PlanetZoomComponent, selectors: [["epsgis-planet-zoom"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 0, consts: [["title", "\u653E\u5927", 1, "jimu-widget-onscreen-icon", "zoomIn", 3, "click"], ["nz-icon", "", "nzType", "plus", "nzTheme", "outline"], ["title", "\u7F29\u5C0F", 1, "jimu-widget-onscreen-icon", "zoomOut", 3, "click"], ["nz-icon", "", "nzType", "minus", "nzTheme", "outline"]], template: function PlanetZoomComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("click", function PlanetZoomComponent_Template_div_click_0_listener() { return ctx.zoomIn(); });
        i0.ɵɵelement(1, "i", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵlistener("click", function PlanetZoomComponent_Template_div_click_2_listener() { return ctx.zoomOut(); });
        i0.ɵɵelement(3, "i", 3);
        i0.ɵɵelementEnd();
    } }, directives: [i1.NzIconDirective, i2.ɵNzTransitionPatchDirective], styles: [".jimu-widget-onscreen-icon[_ngcontent-%COMP%]{margin-top:20px}"] });
PlanetZoomComponent = __decorate([
    ComponentRegister({
        uri: "epsgis-planet-zoom",
        path: "epsplanet/components/zoom",
        name: "PlanetZoomComponent"
    })
], PlanetZoomComponent);
export { PlanetZoomComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PlanetZoomComponent, [{
        type: Component,
        args: [{
                selector: 'epsgis-planet-zoom',
                templateUrl: './zoom.component.html',
                styleUrls: ['./zoom.component.scss'],
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9lcHNwbGFuZXQvY29tcG9uZW50cy96b29tL3pvb20uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZXBzcGxhbmV0L2NvbXBvbmVudHMvem9vbS96b29tLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUMzQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7OztJQVlwRSxtQkFBbUIsU0FBbkIsbUJBQW9CLFNBQVEseUJBQXlCO0lBRWhFO1FBQ0UsS0FBSyxFQUFFLENBQUM7SUFDVixDQUFDO0lBQ0QsTUFBTSxDQUFDLFdBQVc7UUFDaEIsT0FBTyxFQUFFLElBQUksRUFBRSxxQkFBcUIsRUFBRSxJQUFJLEVBQUUsMkJBQTJCLEVBQUUsQ0FBQztJQUM1RSxDQUFDO0lBQ0QsUUFBUTtJQUVSLENBQUM7SUFDRCxlQUFlO1FBQ1osUUFBUSxDQUFDLHNCQUFzQixDQUFDLG1DQUFtQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxHQUFHLElBQUksQ0FBQTtJQUN2TCxDQUFDO0lBQ0QsTUFBTTtRQUNKLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUNwQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ2hJLENBQUM7SUFDRCxPQUFPO1FBQ0wsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDbkgsQ0FBQztDQUNGLENBQUE7c0ZBdEJZLG1CQUFtQjt3REFBbkIsbUJBQW1CO1FDZGhDLDhCQUE2RTtRQUEvQiw2RkFBUyxZQUFRLElBQUU7UUFDL0QsdUJBQStDO1FBQ2pELGlCQUFNO1FBQ04sOEJBQXdGO1FBQXpDLDZGQUFTLGFBQVMsSUFBRTtRQUNqRSx1QkFBZ0Q7UUFDbEQsaUJBQU07O0FEU08sbUJBQW1CO0lBVi9CLGlCQUFpQixDQUFDO1FBQ2pCLEdBQUcsRUFBRSxvQkFBb0I7UUFDekIsSUFBSSxFQUFFLDJCQUEyQjtRQUNqQyxJQUFJLEVBQUUscUJBQXFCO0tBQzVCLENBQUM7R0FNVyxtQkFBbUIsQ0FzQi9CO1NBdEJZLG1CQUFtQjt1RkFBbkIsbUJBQW1CO2NBTC9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixXQUFXLEVBQUUsdUJBQXVCO2dCQUNwQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQzthQUNyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnRSZWdpc3RlciB9IGZyb20gJ2Vwc2dpcyc7XG5pbXBvcnQgeyBCYXNlUGxhbmV0V2lkZ2V0Q29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZS13aWRnZXQvYmFzZS13aWRnZXQuY29tcG9uZW50JztcblxuQENvbXBvbmVudFJlZ2lzdGVyKHtcbiAgdXJpOiBcImVwc2dpcy1wbGFuZXQtem9vbVwiLFxuICBwYXRoOiBcImVwc3BsYW5ldC9jb21wb25lbnRzL3pvb21cIixcbiAgbmFtZTogXCJQbGFuZXRab29tQ29tcG9uZW50XCJcbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlcHNnaXMtcGxhbmV0LXpvb20nLFxuICB0ZW1wbGF0ZVVybDogJy4vem9vbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3pvb20uY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgUGxhbmV0Wm9vbUNvbXBvbmVudCBleHRlbmRzIEJhc2VQbGFuZXRXaWRnZXRDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cbiAgc3RhdGljIGdldENvbXBJbmZvKCkge1xuICAgIHJldHVybiB7IG5hbWU6IFwiUGxhbmV0Wm9vbUNvbXBvbmVudFwiLCBwYXRoOiBcImVwc3BsYW5ldC9jb21wb25lbnRzL3pvb21cIiB9O1xuICB9XG4gIG5nT25Jbml0KCkge1xuICAgXG4gIH1cbiAgbmdBZnRlclZpZXdJbml0KCl7XG4gICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJqaW11LXdpZGdldC1vbnNjcmVlbi1pY29uIHpvb21PdXRcIilbMF1bJ3N0eWxlJ10udG9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImppbXUtd2lkZ2V0LW9uc2NyZWVuLWljb24gem9vbUluXCIpWzBdWydvZmZzZXRIZWlnaHQnXSArIFwicHhcIlxuICB9XG4gIHpvb21JbigpIHtcbiAgICBjb25zdCB2aWV3ZXIgPSB0aGlzLnZpZXcuY3ptLnZpZXdlcjtcbiAgICB0aGlzLmdldENlc2l1bVZpZXcoKS5jYW1lcmEuem9vbUluKHZpZXdlci5jYW1lcmEucG9zaXRpb25DYXJ0b2dyYXBoaWMuaGVpZ2h0IC8gTWF0aC5hYnMoTWF0aC5zaW4odmlld2VyLmNhbWVyYS5waXRjaCkpICogMC4yKTtcbiAgfVxuICB6b29tT3V0KCkge1xuICAgIGNvbnN0IHZpZXdlciA9IHRoaXMudmlldy5jem0udmlld2VyO1xuICAgIHZpZXdlci5jYW1lcmEuem9vbU91dCh2aWV3ZXIuY2FtZXJhLnBvc2l0aW9uQ2FydG9ncmFwaGljLmhlaWdodCAvIE1hdGguYWJzKE1hdGguc2luKHZpZXdlci5jYW1lcmEucGl0Y2gpKSAqIDAuMik7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJqaW11LXdpZGdldC1vbnNjcmVlbi1pY29uIHpvb21JblwiIChjbGljayk9XCJ6b29tSW4oKTtcIiB0aXRsZT1cIuaUvuWkp1wiPlxuICA8aSBuei1pY29uIG56VHlwZT1cInBsdXNcIiBuelRoZW1lPVwib3V0bGluZVwiPjwvaT5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cImppbXUtd2lkZ2V0LW9uc2NyZWVuLWljb24gem9vbU91dFwiIChjbGljayk9XCJ6b29tT3V0KCk7XCIgdGl0bGU9XCLnvKnlsI9cIiBzdHlsZT1cIlwiPlxuICA8aSBuei1pY29uIG56VHlwZT1cIm1pbnVzXCIgbnpUaGVtZT1cIm91dGxpbmVcIj48L2k+XG48L2Rpdj4iXX0=