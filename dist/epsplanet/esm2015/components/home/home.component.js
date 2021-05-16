import { __decorate } from "tslib";
import { Component, HostListener } from '@angular/core';
import { ComponentRegister } from 'epsgis';
import { BasePlanetWidgetComponent } from '../base-widget/base-widget.component';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/icon";
import * as i2 from "ng-zorro-antd/core/transition-patch";
let PlanetHomeComponent = class PlanetHomeComponent extends BasePlanetWidgetComponent {
    constructor() {
        super();
    }
    static getCompInfo() {
        return { path: "epsplanet/components/home" };
    }
    ngOnInit() {
        this.view.czm.viewer.homeButton._container.hidden = true;
    }
    onMouseClick(evt) {
        this.view.czm.viewer.homeButton._element.click();
    }
};
PlanetHomeComponent.ɵfac = function PlanetHomeComponent_Factory(t) { return new (t || PlanetHomeComponent)(); };
PlanetHomeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PlanetHomeComponent, selectors: [["epsgis-planet-home"]], hostAttrs: ["title", "home"], hostVars: 2, hostBindings: function PlanetHomeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function PlanetHomeComponent_click_HostBindingHandler($event) { return ctx.onMouseClick($event); });
    } if (rf & 2) {
        i0.ɵɵclassProp("jimu-widget-onscreen-icon", true);
    } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [["nz-icon", "", 3, "nzIconfont"]], template: function PlanetHomeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "i", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("nzIconfont", "icon-epsgis-home");
    } }, directives: [i1.NzIconDirective, i2.ɵNzTransitionPatchDirective], encapsulation: 2 });
PlanetHomeComponent = __decorate([
    ComponentRegister({
        uri: "epsgis-planet-home",
        path: "epsplanet/components/home",
        name: "PlanetHomeComponent"
    })
], PlanetHomeComponent);
export { PlanetHomeComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PlanetHomeComponent, [{
        type: Component,
        args: [{
                selector: 'epsgis-planet-home',
                template: `<i  nz-icon [nzIconfont]="'icon-epsgis-home'"> </i>`,
                host: {
                    "[class.jimu-widget-onscreen-icon]": "true",
                    "title": "home"
                }
            }]
    }], function () { return []; }, { onMouseClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9lcHNwbGFuZXQvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDM0MsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7Ozs7SUFlcEUsbUJBQW1CLFNBQW5CLG1CQUFvQixTQUFRLHlCQUF5QjtJQUNoRTtRQUNFLEtBQUssRUFBRSxDQUFDO0lBQ1YsQ0FBQztJQUNELE1BQU0sQ0FBQyxXQUFXO1FBQ2hCLE9BQU8sRUFBRSxJQUFJLEVBQUUsMkJBQTJCLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBQ0QsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7SUFDMUQsQ0FBQztJQU1ELFlBQVksQ0FBQyxHQUFHO1FBRWQsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbkQsQ0FBQztDQUVGLENBQUE7c0ZBcEJZLG1CQUFtQjt3REFBbkIsbUJBQW1CO3NHQUFuQix3QkFBb0I7Ozs7UUFOcEIsdUJBQW1EOztRQUF2QywrQ0FBaUM7O0FBTTdDLG1CQUFtQjtJQWIvQixpQkFBaUIsQ0FBQztRQUNqQixHQUFHLEVBQUMsb0JBQW9CO1FBQ3hCLElBQUksRUFBQywyQkFBMkI7UUFDaEMsSUFBSSxFQUFDLHFCQUFxQjtLQUMzQixDQUFDO0dBU1csbUJBQW1CLENBb0IvQjtTQXBCWSxtQkFBbUI7dUZBQW5CLG1CQUFtQjtjQVIvQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFLHFEQUFxRDtnQkFDL0QsSUFBSSxFQUFFO29CQUNKLG1DQUFtQyxFQUFFLE1BQU07b0JBQzNDLE9BQU8sRUFBRSxNQUFNO2lCQUNoQjthQUNGO3NDQWdCQyxZQUFZO2tCQURYLFlBQVk7bUJBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudFJlZ2lzdGVyIH0gZnJvbSAnZXBzZ2lzJztcbmltcG9ydCB7IEJhc2VQbGFuZXRXaWRnZXRDb21wb25lbnQgfSBmcm9tICcuLi9iYXNlLXdpZGdldC9iYXNlLXdpZGdldC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50UmVnaXN0ZXIoe1xuICB1cmk6XCJlcHNnaXMtcGxhbmV0LWhvbWVcIixcbiAgcGF0aDpcImVwc3BsYW5ldC9jb21wb25lbnRzL2hvbWVcIixcbiAgbmFtZTpcIlBsYW5ldEhvbWVDb21wb25lbnRcIlxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Vwc2dpcy1wbGFuZXQtaG9tZScsXG4gIHRlbXBsYXRlOiBgPGkgIG56LWljb24gW256SWNvbmZvbnRdPVwiJ2ljb24tZXBzZ2lzLWhvbWUnXCI+IDwvaT5gLFxuICBob3N0OiB7XG4gICAgXCJbY2xhc3MuamltdS13aWRnZXQtb25zY3JlZW4taWNvbl1cIjogXCJ0cnVlXCIsXG4gICAgXCJ0aXRsZVwiOiBcImhvbWVcIlxuICB9XG59KVxuZXhwb3J0IGNsYXNzIFBsYW5ldEhvbWVDb21wb25lbnQgZXh0ZW5kcyBCYXNlUGxhbmV0V2lkZ2V0Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuICBzdGF0aWMgZ2V0Q29tcEluZm8oKSB7XG4gICAgcmV0dXJuIHsgcGF0aDogXCJlcHNwbGFuZXQvY29tcG9uZW50cy9ob21lXCIgfTtcbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnZpZXcuY3ptLnZpZXdlci5ob21lQnV0dG9uLl9jb250YWluZXIuaGlkZGVuID0gdHJ1ZVxuICB9XG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIGV2dCBcbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgb25Nb3VzZUNsaWNrKGV2dCkge1xuICAgIC8vdGhpcy52aWV3LmN6bS52aWV3ZXIuY2FtZXJhLnNldFZpZXcoICAgICB7IGRlc3RpbmF0aW9uOiBDZXNpdW0uQ2FydGVzaWFuMy5mcm9tRGVncmVlcygxMTAuMjAsIDM0LjU1LCAzMDAwMDAwKX0pO1xuICAgIHRoaXMudmlldy5jem0udmlld2VyLmhvbWVCdXR0b24uX2VsZW1lbnQuY2xpY2soKTtcbiAgfVxuXG59XG4iXX0=