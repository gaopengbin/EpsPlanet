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
    ngOnInit() { }
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
PlanetZoomComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PlanetZoomComponent, selectors: [["epsgis-planet-zoom"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 0, consts: [["title", "\u653E\u5927", 1, "jimu-widget-onscreen-icon", 3, "click"], ["nz-icon", "", "nzType", "plus", "nzTheme", "outline"], ["title", "\u7F29\u5C0F", 1, "jimu-widget-onscreen-icon", 2, "top", "33px", 3, "click"], ["nz-icon", "", "nzType", "minus", "nzTheme", "outline"]], template: function PlanetZoomComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("click", function PlanetZoomComponent_Template_div_click_0_listener() { return ctx.zoomIn(); });
        i0.ɵɵelement(1, "i", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵlistener("click", function PlanetZoomComponent_Template_div_click_2_listener() { return ctx.zoomOut(); });
        i0.ɵɵelement(3, "i", 3);
        i0.ɵɵelementEnd();
    } }, directives: [i1.NzIconDirective, i2.ɵNzTransitionPatchDirective], styles: [""] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9lcHNwbGFuZXQvY29tcG9uZW50cy96b29tL3pvb20uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZXBzcGxhbmV0L2NvbXBvbmVudHMvem9vbS96b29tLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUMzQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7OztJQVlwRSxtQkFBbUIsU0FBbkIsbUJBQW9CLFNBQVEseUJBQXlCO0lBRWhFO1FBQ0UsS0FBSyxFQUFFLENBQUM7SUFDVixDQUFDO0lBQ0QsTUFBTSxDQUFDLFdBQVc7UUFDaEIsT0FBTyxFQUFFLElBQUksRUFBRSxxQkFBcUIsRUFBRSxJQUFJLEVBQUUsMkJBQTJCLEVBQUUsQ0FBQztJQUM1RSxDQUFDO0lBQ0QsUUFBUSxLQUFLLENBQUM7SUFDZCxNQUFNO1FBQ0osTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDaEksQ0FBQztJQUNELE9BQU87UUFDTCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNuSCxDQUFDO0NBQ0YsQ0FBQTtzRkFqQlksbUJBQW1CO3dEQUFuQixtQkFBbUI7UUNkaEMsOEJBQXNFO1FBQS9CLDZGQUFTLFlBQVEsSUFBRTtRQUN4RCx1QkFBK0M7UUFDakQsaUJBQU07UUFDTiw4QkFBeUY7UUFBbEQsNkZBQVMsYUFBUyxJQUFFO1FBQ3pELHVCQUFnRDtRQUNsRCxpQkFBTTs7QURTTyxtQkFBbUI7SUFWL0IsaUJBQWlCLENBQUM7UUFDakIsR0FBRyxFQUFDLG9CQUFvQjtRQUN4QixJQUFJLEVBQUMsMkJBQTJCO1FBQ2hDLElBQUksRUFBQyxxQkFBcUI7S0FDM0IsQ0FBQztHQU1XLG1CQUFtQixDQWlCL0I7U0FqQlksbUJBQW1CO3VGQUFuQixtQkFBbUI7Y0FML0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFdBQVcsRUFBRSx1QkFBdUI7Z0JBQ3BDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO2FBQ3JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudFJlZ2lzdGVyIH0gZnJvbSAnZXBzZ2lzJztcbmltcG9ydCB7IEJhc2VQbGFuZXRXaWRnZXRDb21wb25lbnQgfSBmcm9tICcuLi9iYXNlLXdpZGdldC9iYXNlLXdpZGdldC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50UmVnaXN0ZXIoe1xuICB1cmk6XCJlcHNnaXMtcGxhbmV0LXpvb21cIixcbiAgcGF0aDpcImVwc3BsYW5ldC9jb21wb25lbnRzL3pvb21cIixcbiAgbmFtZTpcIlBsYW5ldFpvb21Db21wb25lbnRcIlxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Vwc2dpcy1wbGFuZXQtem9vbScsXG4gIHRlbXBsYXRlVXJsOiAnLi96b29tLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vem9vbS5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBQbGFuZXRab29tQ29tcG9uZW50IGV4dGVuZHMgQmFzZVBsYW5ldFdpZGdldENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuICBzdGF0aWMgZ2V0Q29tcEluZm8oKSB7XG4gICAgcmV0dXJuIHsgbmFtZTogXCJQbGFuZXRab29tQ29tcG9uZW50XCIsIHBhdGg6IFwiZXBzcGxhbmV0L2NvbXBvbmVudHMvem9vbVwiIH07XG4gIH1cbiAgbmdPbkluaXQoKSB7IH1cbiAgem9vbUluKCkge1xuICAgIGNvbnN0IHZpZXdlciA9IHRoaXMudmlldy5jem0udmlld2VyO1xuICAgIHRoaXMuZ2V0Q2VzaXVtVmlldygpLmNhbWVyYS56b29tSW4odmlld2VyLmNhbWVyYS5wb3NpdGlvbkNhcnRvZ3JhcGhpYy5oZWlnaHQgLyBNYXRoLmFicyhNYXRoLnNpbih2aWV3ZXIuY2FtZXJhLnBpdGNoKSkgKiAwLjIpO1xuICB9XG4gIHpvb21PdXQoKSB7XG4gICAgY29uc3Qgdmlld2VyID0gdGhpcy52aWV3LmN6bS52aWV3ZXI7XG4gICAgdmlld2VyLmNhbWVyYS56b29tT3V0KHZpZXdlci5jYW1lcmEucG9zaXRpb25DYXJ0b2dyYXBoaWMuaGVpZ2h0IC8gTWF0aC5hYnMoTWF0aC5zaW4odmlld2VyLmNhbWVyYS5waXRjaCkpICogMC4yKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImppbXUtd2lkZ2V0LW9uc2NyZWVuLWljb25cIiAoY2xpY2spPVwiem9vbUluKCk7XCIgdGl0bGU9XCLmlL7lpKdcIj5cbiAgPGkgbnotaWNvbiBuelR5cGU9XCJwbHVzXCIgbnpUaGVtZT1cIm91dGxpbmVcIj48L2k+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJqaW11LXdpZGdldC1vbnNjcmVlbi1pY29uXCIgKGNsaWNrKT1cInpvb21PdXQoKTtcIiB0aXRsZT1cIue8qeWwj1wiIHN0eWxlPVwidG9wOjMzcHg7XCI+XG4gIDxpIG56LWljb24gbnpUeXBlPVwibWludXNcIiBuelRoZW1lPVwib3V0bGluZVwiPjwvaT5cbjwvZGl2PiJdfQ==