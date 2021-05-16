import { __decorate } from "tslib";
import { Component, Optional } from '@angular/core';
import { PanelDockMode } from '../../../models/base-panel';
import * as _ from 'lodash';
import { BaseDockablePanelComponent } from '../base-dockable-panel';
import { ComponentRegister } from '../../../decorator/component-register.decorator';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../base-panel/panel-titlebar.component";
function DockablePanelAtBottomComponent_ng_template_7_Template(rf, ctx) { }
const _c0 = function (a0) { return { "notitle": a0 }; };
const _c1 = function (a0) { return { "display": a0 }; };
let DockablePanelAtBottomComponent = class DockablePanelAtBottomComponent extends BaseDockablePanelComponent {
    constructor(_render, cdr) {
        super(_render, cdr);
        this._render = _render;
        this.cdr = cdr;
        this.dockMode = PanelDockMode.bottom;
    }
    ngOnInit() {
        super.ngOnInit();
    }
    setOptions(options) {
        options.modal = false;
        options.draggable = false;
        options.buttonClose = true;
        options.buttonCollapse = false;
        options.buttonMaximize = false;
        options.buttonMinimize = false;
        options.centerCollapse = true;
        options.dockSide = PanelDockMode.bottom;
        super.setOptions(options);
    }
    _setPCPosition() {
        this.widgetConfig.position = _.merge(this.widgetConfig.position, {
            left: this.mapBounds.left,
            top: "auto",
            bottom: 0,
            right: 0,
            width: this.mapBounds.width
        });
        super._setPCPosition();
    }
    onResize() {
        super._resizeMapWhenResize();
        super.onResize();
    }
    onOpen() {
        super._resizeMapWhenResize();
        super.onOpen();
    }
    onClose() {
        super._resizeMapWhenClose();
        super.onClose();
    }
    resize() {
        this.widgetConfig.position = _.merge(this.widgetConfig.position, {
            left: this.mapBounds.left,
            width: this.mapBounds.width
        });
        this._render.setStyle(this.sspanel.nativeElement, "left", this._convertToStyleVal(this.mapBounds.left));
        this._render.setStyle(this.sspanel.nativeElement, "width", this._convertToStyleVal(this.mapBounds.width));
    }
};
DockablePanelAtBottomComponent.ɵfac = function DockablePanelAtBottomComponent_Factory(t) { return new (t || DockablePanelAtBottomComponent)(i0.ɵɵdirectiveInject(i0.Renderer2, 8), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef, 8)); };
DockablePanelAtBottomComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DockablePanelAtBottomComponent, selectors: [["epsgis-dockable-panel-at-bottom"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 14, vars: 11, consts: [[1, "sspanel_overlay", 2, "display", "none"], ["sspanel_overlay", ""], [1, "sspanel", 3, "id", "ngClass", "ngStyle"], ["sspanel", ""], ["sspanel-titlebar", "", 1, "sspanel_titlebar", "sspanel_titlebar_draggable", 3, "hasIcon", "options", "windowState", "onClickSetting", "onClickClose"], ["sspanel_titlebar", ""], [1, "sspanel_content", 3, "click"], ["widget_content", ""], [1, "sspanel_resizer", "sspanel_resizer_top", 3, "mousedown"], [1, "collapse", 3, "ngStyle", "click"], ["center_collapse", ""], ["t", "1575033841131", "viewBox", "0 0 1024 1024", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "p-id", "16367", "width", "16", "height", "16", 1, "icon"], ["d", "M128.759037 245.033739l383.064442 383.064442 388.096039-388.097062 0.033769 0.070608c13.138228-12.709463 31.024597-20.528546 50.730405-20.528546 40.377616 0 73.114205 32.736589 73.114205 73.115228 0 19.705807-7.820106 37.591153-20.530592 50.730405l0.035816 0.034792-438.681134 438.685227-0.035816-0.035816c-13.280468 13.780865-31.915897 22.3838-52.585659 22.3838-0.071631 0-0.107447 0-0.178055 0-0.072655 0-0.10847 0-0.146333 0-20.669762 0-39.341007-8.601912-52.621475-22.3838l-0.035816 0.035816L20.336676 343.425653l0.179079-0.179079c-12.565177-13.139252-20.313651-30.951943-20.313651-50.587142 0-40.378639 32.736589-73.115228 73.114205-73.115228C95.485213 219.544205 115.334283 229.432413 128.759037 245.033739z", "p-id", "16368", "fill", "#bababa"]], template: function DockablePanelAtBottomComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "div", 0, 1);
        i0.ɵɵelementStart(2, "div", 2, 3);
        i0.ɵɵelementStart(4, "div", 4, 5);
        i0.ɵɵlistener("onClickSetting", function DockablePanelAtBottomComponent_Template_div_onClickSetting_4_listener() { return ctx.openWidgetSetting(); })("onClickClose", function DockablePanelAtBottomComponent_Template_div_onClickClose_4_listener($event) { return ctx.closePanel($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 6);
        i0.ɵɵlistener("click", function DockablePanelAtBottomComponent_Template_div_click_6_listener($event) { return ctx._contentClick($event); });
        i0.ɵɵtemplate(7, DockablePanelAtBottomComponent_ng_template_7_Template, 0, 0, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 8);
        i0.ɵɵlistener("mousedown", function DockablePanelAtBottomComponent_Template_div_mousedown_9_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "height", directionY: "top" }); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "div", 9, 10);
        i0.ɵɵlistener("click", function DockablePanelAtBottomComponent_Template_div_click_10_listener($event) { return ctx.collapsePanel($event); });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(12, "svg", 11);
        i0.ɵɵelement(13, "path", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵpropertyInterpolate("id", ctx.options.id);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c0, ctx.options.showTitle === false))("ngStyle", ctx.position);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("hasIcon", false)("options", ctx.options)("windowState", ctx.windowState);
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(9, _c1, ctx.options.centerCollapse ? "block" : "none"));
    } }, directives: [i1.NgClass, i1.NgStyle, i2.PanelTitleBarComponent], styles: [".notitle[_ngcontent-%COMP%], .sspanel[_ngcontent-%COMP%]{border:none}.notitle[_ngcontent-%COMP%]   .sspanel_titlebar[_ngcontent-%COMP%]{display:none}.notitle[_ngcontent-%COMP%]   .sspanel_content[_ngcontent-%COMP%]{border:none}.notitle[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]{background:#fcfcfc}.notitle[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover   path[_ngcontent-%COMP%]{fill:#000}.collapse[_ngcontent-%COMP%]{position:absolute;left:50%;top:-16px;width:60px;height:16px;line-height:16px;padding-left:24px;cursor:pointer;background:#549dfe;border-radius:5px 5px 0 0;box-shadow:0 -3px 6px 0 #a0a0a0}.collapse[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover   path[_ngcontent-%COMP%]{fill:#fff}"] });
DockablePanelAtBottomComponent = __decorate([
    ComponentRegister({
        uri: 'epsgis-dockable-panel-at-bottom',
        path: "components/ex-panels/dockable-panel-at-bottom"
    })
], DockablePanelAtBottomComponent);
export { DockablePanelAtBottomComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DockablePanelAtBottomComponent, [{
        type: Component,
        args: [{
                selector: 'epsgis-dockable-panel-at-bottom',
                templateUrl: './dockable-panel-at-bottom.component.html',
                styleUrls: ['./dockable-panel-at-bottom.component.scss'],
            }]
    }], function () { return [{ type: i0.Renderer2, decorators: [{
                type: Optional
            }] }, { type: i0.ChangeDetectorRef, decorators: [{
                type: Optional
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9ja2FibGUtcGFuZWwtYXQtYm90dG9tLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Vwc2dpcy9jb21wb25lbnRzL2V4LXBhbmVscy9kb2NrYWJsZS1wYW5lbC1hdC1ib3R0b20vZG9ja2FibGUtcGFuZWwtYXQtYm90dG9tLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Vwc2dpcy9jb21wb25lbnRzL2V4LXBhbmVscy9kb2NrYWJsZS1wYW5lbC1hdC1ib3R0b20vZG9ja2FibGUtcGFuZWwtYXQtYm90dG9tLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixRQUFRLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzFGLE9BQU8sRUFBRSxhQUFhLEVBQWdCLE1BQU0sNEJBQTRCLENBQUM7QUFDekUsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saURBQWlELENBQUM7Ozs7Ozs7SUFXdkUsOEJBQThCLFNBQTlCLDhCQUErQixTQUFRLDBCQUEwQjtJQUU1RSxZQUErQixPQUFrQixFQUFvQixHQUFxQjtRQUN4RixLQUFLLENBQUMsT0FBTyxFQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRFUsWUFBTyxHQUFQLE9BQU8sQ0FBVztRQUFvQixRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUV4RixJQUFJLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUM7SUFDdkMsQ0FBQztJQUVELFFBQVE7UUFXTixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUtELFVBQVUsQ0FBQyxPQUFxQjtRQUM5QixPQUFPLENBQUMsS0FBSyxHQUFHLEtB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O1FBK0J4RSxlQUFrRTtRQUFsRSxtR0FBa0U7O0FEdEI5Riw4QkFBOEI7SUFUMUMsaUJBQWlCLENBQUM7UUFDakIsR0FBRyxFQUFFLGlDQUFpQztRQUN0QyxJQUFJLEVBQUUsK0NBQStDO0tBQ3RELENBQUM7R0FNVyw4QkFBOEIsQ0FxRTFDO1NBckVZLDhCQUE4Qjt1RkFBOUIsOEJBQThCO2NBTDFDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUNBQWlDO2dCQUMzQyxXQUFXLEVBQUUsMkNBQTJDO2dCQUN4RCxTQUFTLEVBQUUsQ0FBQywyQ0FBMkMsQ0FBQzthQUN6RDs7c0JBR2MsUUFBUTs7c0JBQThCLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgUmVuZGVyZXIyLCBPcHRpb25hbCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhbmVsRG9ja01vZGUsIFBhbmVsT3B0aW9ucyB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9iYXNlLXBhbmVsJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IEJhc2VEb2NrYWJsZVBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZS1kb2NrYWJsZS1wYW5lbCc7XG5pbXBvcnQgeyBDb21wb25lbnRSZWdpc3RlciB9IGZyb20gJy4uLy4uLy4uL2RlY29yYXRvci9jb21wb25lbnQtcmVnaXN0ZXIuZGVjb3JhdG9yJztcblxuQENvbXBvbmVudFJlZ2lzdGVyKHtcbiAgdXJpOiAnZXBzZ2lzLWRvY2thYmxlLXBhbmVsLWF0LWJvdHRvbScsXG4gIHBhdGg6IFwiY29tcG9uZW50cy9leC1wYW5lbHMvZG9ja2FibGUtcGFuZWwtYXQtYm90dG9tXCJcbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlcHNnaXMtZG9ja2FibGUtcGFuZWwtYXQtYm90dG9tJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RvY2thYmxlLXBhbmVsLWF0LWJvdHRvbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RvY2thYmxlLXBhbmVsLWF0LWJvdHRvbS5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBEb2NrYWJsZVBhbmVsQXRCb3R0b21Db21wb25lbnQgZXh0ZW5kcyBCYXNlRG9ja2FibGVQYW5lbENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHVibGljIF9yZW5kZXI6IFJlbmRlcmVyMixAT3B0aW9uYWwoKSBwdWJsaWMgY2RyOkNoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoX3JlbmRlcixjZHIpO1xuICAgIHRoaXMuZG9ja01vZGUgPSBQYW5lbERvY2tNb2RlLmJvdHRvbTtcbiAgfVxuIFxuICBuZ09uSW5pdCgpIHtcblxuICAgIC8vIHRoaXMuZXZlbnRTZXJ2aWNlLnJzcy5vbih0aGlzLmV2ZW50U2VydmljZS5fbWFwUG9zaXRpb25DaGFuZ2VkLCAocG9zKSA9PiB7XG4gICAgLy8gICAvL+S4u+imgeaYr2xlZnTlkox3aWR0aOWPmOWMllxuICAgIC8vICAgdGhpcy53aWRnZXRDb25maWcucG9zaXRpb24gPSBfLm1lcmdlKHRoaXMud2lkZ2V0Q29uZmlnLnBvc2l0aW9uLCB7XG4gICAgLy8gICAgIGxlZnQ6IHRoaXMubWFwQm91bmRzLmxlZnQsXG4gICAgLy8gICAgIHdpZHRoOiB0aGlzLm1hcEJvdW5kcy53aWR0aFxuICAgIC8vICAgfSk7XG4gICAgLy8gICB0aGlzLl9yZW5kZXIuc2V0U3R5bGUodGhpcy5zc3BhbmVsLm5hdGl2ZUVsZW1lbnQsIFwibGVmdFwiLCB0aGlzLl9jb252ZXJ0VG9TdHlsZVZhbCh0aGlzLm1hcEJvdW5kcy5sZWZ0KSk7XG4gICAgLy8gICB0aGlzLl9yZW5kZXIuc2V0U3R5bGUodGhpcy5zc3BhbmVsLm5hdGl2ZUVsZW1lbnQsIFwid2lkdGhcIiwgdGhpcy5fY29udmVydFRvU3R5bGVWYWwodGhpcy5tYXBCb3VuZHMud2lkdGgpKTtcbiAgICAvLyB9KTtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICB9XG4gIC8qKlxuICAgKiDorr7nva5wYW5lbOWPguaVsFxuICAgKiBAcGFyYW0gb3B0aW9ucyBcbiAgICovXG4gIHNldE9wdGlvbnMob3B0aW9uczogUGFuZWxPcHRpb25zKSB7XG4gICAgb3B0aW9ucy5tb2RhbCA9IGZhbHNlO1xuICAgIG9wdGlvbnMuZHJhZ2dhYmxlID0gZmFsc2U7XG4gICAgb3B0aW9ucy5idXR0b25DbG9zZSA9IHRydWU7XG4gICAgb3B0aW9ucy5idXR0b25Db2xsYXBzZSA9IGZhbHNlO1xuICAgIG9wdGlvbnMuYnV0dG9uTWF4aW1pemUgPSBmYWxzZTtcbiAgICBvcHRpb25zLmJ1dHRvbk1pbmltaXplID0gZmFsc2U7XG4gICAgb3B0aW9ucy5jZW50ZXJDb2xsYXBzZT10cnVlO1xuICAgIG9wdGlvbnMuZG9ja1NpZGUgPSBQYW5lbERvY2tNb2RlLmJvdHRvbTtcbiAgICBzdXBlci5zZXRPcHRpb25zKG9wdGlvbnMpO1xuICB9XG4gIHByb3RlY3RlZCBfc2V0UENQb3NpdGlvbigpIHtcbiAgICB0aGlzLndpZGdldENvbmZpZy5wb3NpdGlvbiA9IF8ubWVyZ2UodGhpcy53aWRnZXRDb25maWcucG9zaXRpb24sIHtcbiAgICAgIC8vIGxlZnQ6IDAsXG4gICAgICBsZWZ0OiB0aGlzLm1hcEJvdW5kcy5sZWZ0LFxuICAgICAgdG9wOiBcImF1dG9cIixcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIHJpZ2h0OiAwLFxuICAgICAgLy8gd2lkdGg6IFwiMTAwJVwiXG4gICAgICB3aWR0aDogdGhpcy5tYXBCb3VuZHMud2lkdGhcbiAgICB9KTtcbiAgICBzdXBlci5fc2V0UENQb3NpdGlvbigpO1xuXG4gIH1cbiAgb25SZXNpemUoKSB7XG4gICAgc3VwZXIuX3Jlc2l6ZU1hcFdoZW5SZXNpemUoKTtcbiAgICBzdXBlci5vblJlc2l6ZSgpO1xuICB9XG4gIG9uT3BlbigpIHtcbiAgICBzdXBlci5fcmVzaXplTWFwV2hlblJlc2l6ZSgpO1xuICAgIHN1cGVyLm9uT3BlbigpO1xuICB9XG4gIG9uQ2xvc2UoKSB7XG4gICAgc3VwZXIuX3Jlc2l6ZU1hcFdoZW5DbG9zZSgpO1xuICAgIHN1cGVyLm9uQ2xvc2UoKTtcbiAgfVxuICByZXNpemUoKSB7XG4gICAgLy/kuLvopoHmmK9sZWZ05ZKMd2lkdGjlj5jljJZcbiAgICB0aGlzLndpZGdldENvbmZpZy5wb3NpdGlvbiA9IF8ubWVyZ2UodGhpcy53aWRnZXRDb25maWcucG9zaXRpb24sIHtcbiAgICAgIGxlZnQ6IHRoaXMubWFwQm91bmRzLmxlZnQsXG4gICAgICB3aWR0aDogdGhpcy5tYXBCb3VuZHMud2lkdGhcbiAgICB9KTtcbiAgICB0aGlzLl9yZW5kZXIuc2V0U3R5bGUodGhpcy5zc3BhbmVsLm5hdGl2ZUVsZW1lbnQsIFwibGVmdFwiLCB0aGlzLl9jb252ZXJ0VG9TdHlsZVZhbCh0aGlzLm1hcEJvdW5kcy5sZWZ0KSk7XG4gICAgdGhpcy5fcmVuZGVyLnNldFN0eWxlKHRoaXMuc3NwYW5lbC5uYXRpdmVFbGVtZW50LCBcIndpZHRoXCIsIHRoaXMuX2NvbnZlcnRUb1N0eWxlVmFsKHRoaXMubWFwQm91bmRzLndpZHRoKSk7XG4gIH1cbn0iLCI8ZGl2IGNsYXNzPVwic3NwYW5lbF9vdmVybGF5XCIgI3NzcGFuZWxfb3ZlcmxheSBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+XG5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cInNzcGFuZWxcIiAjc3NwYW5lbCBpZD1cInt7b3B0aW9ucy5pZH19XCIgW25nQ2xhc3NdPVwieydub3RpdGxlJzpvcHRpb25zLnNob3dUaXRsZT09PWZhbHNlfVwiXG4gIFtuZ1N0eWxlXT1cInBvc2l0aW9uXCI+XG4gIFxuICA8ZGl2IHNzcGFuZWwtdGl0bGViYXIgICNzc3BhbmVsX3RpdGxlYmFyICBjbGFzcz1cInNzcGFuZWxfdGl0bGViYXIgc3NwYW5lbF90aXRsZWJhcl9kcmFnZ2FibGVcIiBbaGFzSWNvbl09XCJmYWxzZVwiIFtvcHRpb25zXT1cIm9wdGlvbnNcIiBbd2luZG93U3RhdGVdPVwid2luZG93U3RhdGVcIlxuICAgICAgKG9uQ2xpY2tTZXR0aW5nKT1cIm9wZW5XaWRnZXRTZXR0aW5nKClcIiAob25DbGlja0Nsb3NlKT1cImNsb3NlUGFuZWwoJGV2ZW50KVwiPjwvZGl2PlxuICA8IS0tXG4gIDxkaXYgY2xhc3M9XCJzc3BhbmVsX3RpdGxlYmFyXCIgI3NzcGFuZWxfdGl0bGViYXIgKG1vdXNlZG93bik9XCJfdGl0bGViYXJfTW91c2VEb3duKCRldmVudCk7XCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInBhbmVsSWNvblwiPlxuICAgICAgPGRpdiBjbGFzcz1cImljb25cIj5cbiAgICAgICAgPGltZyAqbmdJZj1cInBhbmVsSWNvbi5pc1Nob3dJbWdcIiBbc3JjXT1cInBhbmVsSWNvbi5pY29uXCI+XG4gICAgICAgIDxpICpuZ0lmPVwiIXBhbmVsSWNvbi5pc1Nob3dJbWdcIiBuei1pY29uIFtuekljb25mb250XT1cInBhbmVsSWNvbi5pY29uXCI+PC9pPlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPGRpdiBjbGFzcz1cInNzcGFuZWxfdGl0bGViYXJfdGV4dFwiPjxzcGFuIGNsYXNzPVwic3NwYW5lbF90aXRsZWJhcl90ZXh0X3NwYW5cIj57e29wdGlvbnMudGl0bGV9fTwvc3Bhbj48L2Rpdj5cblxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJvcHRpb25zLmJ1dHRvbkNsb3NlXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwic3NwYW5lbF90aXRsZWJhcl9idXR0b24gc3NwYW5lbF90aXRsZWJhcl9idXR0b25fY2xvc2VcIiB0aXRsZT1cInt7b3B0aW9ucy5idXR0b25DbG9zZVRleHR9fVwiXG4gICAgICAgIChjbGljayk9XCJjbG9zZVBhbmVsKCRldmVudCk7XCI+XG4gICAgICAgIDxzdmcgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTAgMTBcIiBoZWlnaHQ9XCIxMDAlXCIgd2lkdGg9XCIxMDAlXCI+XG4gICAgICAgICAgPGc+XG4gICAgICAgICAgICA8bGluZSB5Mj1cIjBcIiB4Mj1cIjEwXCIgeTE9XCIxMFwiIHgxPVwiMFwiPjwvbGluZT5cbiAgICAgICAgICAgIDxsaW5lIHkyPVwiMTBcIiB4Mj1cIjEwXCIgeTE9XCIwXCIgeDE9XCIwXCI+PC9saW5lPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9kaXY+XG4tLT5cbiAgPGRpdiBjbGFzcz1cInNzcGFuZWxfY29udGVudFwiIChjbGljayk9XCJfY29udGVudENsaWNrKCRldmVudCk7XCI+XG4gICAgPG5nLXRlbXBsYXRlICN3aWRnZXRfY29udGVudD48L25nLXRlbXBsYXRlPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInNzcGFuZWxfcmVzaXplciBzc3BhbmVsX3Jlc2l6ZXJfdG9wXCJcbiAgICAobW91c2Vkb3duKT1cIl9yZXNpemVyX01vdXNlRG93bigkZXZlbnQse2RpbWVuc2lvbjonaGVpZ2h0JyxkaXJlY3Rpb25ZOid0b3AnfSk7XCI+PC9kaXY+XG4gIDxkaXYgI2NlbnRlcl9jb2xsYXBzZSBjbGFzcz1cImNvbGxhcHNlXCIgW25nU3R5bGVdPVwieydkaXNwbGF5JzpvcHRpb25zLmNlbnRlckNvbGxhcHNlID8gJ2Jsb2NrJyA6ICdub25lJyB9XCJcbiAgICAoY2xpY2spPVwiY29sbGFwc2VQYW5lbCgkZXZlbnQpO1wiPlxuICAgIDwhLS0gPGVwc2dpcy1pY29uLWFycm93LWRvd24+PC9lcHNnaXMtaWNvbi1hcnJvdy1kb3duPiAtLT5cbiAgICA8c3ZnIHQ9XCIxNTc1MDMzODQxMTMxXCIgY2xhc3M9XCJpY29uXCIgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICBwLWlkPVwiMTYzNjdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIj5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTI4Ljc1OTAzNyAyNDUuMDMzNzM5bDM4My4wNjQ0NDIgMzgzLjA2NDQ0MiAzODguMDk2MDM5LTM4OC4wOTcwNjIgMC4wMzM3NjkgMC4wNzA2MDhjMTMuMTM4MjI4LTEyLjcwOTQ2MyAzMS4wMjQ1OTctMjAuNTI4NTQ2IDUwLjczMDQwNS0yMC41Mjg1NDYgNDAuMzc3NjE2IDAgNzMuMTE0MjA1IDMyLjczNjU4OSA3My4xMTQyMDUgNzMuMTE1MjI4IDAgMTkuNzA1ODA3LTcuODIwMTA2IDM3LjU5MTE1My0yMC41MzA1OTIgNTAuNzMwNDA1bDAuMDM1ODE2IDAuMDM0NzkyLTQzOC42ODExMzQgNDM4LjY4NTIyNy0wLjAzNTgxNi0wLjAzNTgxNmMtMTMuMjgwNDY4IDEzLjc4MDg2NS0zMS45MTU4OTcgMjIuMzgzOC01Mi41ODU2NTkgMjIuMzgzOC0wLjA3MTYzMSAwLTAuMTA3NDQ3IDAtMC4xNzgwNTUgMC0wLjA3MjY1NSAwLTAuMTA4NDcgMC0wLjE0NjMzMyAwLTIwLjY2OTc2MiAwLTM5LjM0MTAwNy04LjYwMTkxMi01Mi42MjE0NzUtMjIuMzgzOGwtMC4wMzU4MTYgMC4wMzU4MTZMMjAuMzM2Njc2IDM0My40MjU2NTNsMC4xNzkwNzktMC4xNzkwNzljLTEyLjU2NTE3Ny0xMy4xMzkyNTItMjAuMzEzNjUxLTMwLjk1MTk0My0yMC4zMTM2NTEtNTAuNTg3MTQyIDAtNDAuMzc4NjM5IDMyLjczNjU4OS03My4xMTUyMjggNzMuMTE0MjA1LTczLjExNTIyOEM5NS40ODUyMTMgMjE5LjU0NDIwNSAxMTUuMzM0MjgzIDIyOS40MzI0MTMgMTI4Ljc1OTAzNyAyNDUuMDMzNzM5elwiXG4gICAgICAgIHAtaWQ9XCIxNjM2OFwiIGZpbGw9XCIjYmFiYWJhXCI+PC9wYXRoPlxuICAgIDwvc3ZnPlxuICA8L2Rpdj5cbjwvZGl2PiJdfQ==