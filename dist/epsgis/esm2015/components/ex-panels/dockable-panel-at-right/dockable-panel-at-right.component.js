import { __decorate } from "tslib";
import { Component, Optional } from '@angular/core';
import { PanelDockMode } from '../../../models/base-panel';
import * as _ from 'lodash';
import { BaseDockablePanelComponent } from '../base-dockable-panel';
import { ComponentRegister } from '../../../decorator/component-register.decorator';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../base-panel/panel-titlebar.component";
function DockablePanelAtRightComponent_ng_template_7_Template(rf, ctx) { }
const _c0 = function (a0) { return { "notitle": a0 }; };
const _c1 = function (a0) { return { "display": a0 }; };
let DockablePanelAtRightComponent = class DockablePanelAtRightComponent extends BaseDockablePanelComponent {
    constructor(_render, cdr) {
        super(_render, cdr);
        this._render = _render;
        this.cdr = cdr;
        this.dockMode = PanelDockMode.right;
    }
    setOptions(options) {
        options.modal = false;
        options.draggable = false;
        options.buttonClose = false;
        options.buttonCollapse = false;
        options.buttonMaximize = false;
        options.buttonMinimize = false;
        options.centerCollapse = true;
        options.dockSide = PanelDockMode.right;
        super.setOptions(options);
    }
    _setPCPosition() {
        this.widgetConfig.position = _.merge(this.widgetConfig.position, {
            left: "auto",
            top: this.mapBounds.top,
            bottom: 0,
            right: 0,
            height: "auto"
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
    }
};
DockablePanelAtRightComponent.ɵfac = function DockablePanelAtRightComponent_Factory(t) { return new (t || DockablePanelAtRightComponent)(i0.ɵɵdirectiveInject(i0.Renderer2, 8), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef, 8)); };
DockablePanelAtRightComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DockablePanelAtRightComponent, selectors: [["epsgis-dockable-panel-at-right"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 14, vars: 11, consts: [[1, "sspanel_overlay", 2, "display", "none"], ["sspanel_overlay", ""], [1, "sspanel", 3, "id", "ngClass", "ngStyle"], ["sspanel", ""], ["sspanel-titlebar", "", 1, "sspanel_titlebar", "sspanel_titlebar_draggable", 3, "hasIcon", "options", "windowState", "onClickSetting", "onClickClose"], ["sspanel_titlebar", ""], [1, "sspanel_content", 3, "click"], ["widget_content", ""], [1, "sspanel_resizer", "sspanel_resizer_left", 3, "mousedown"], [1, "collapse", 3, "ngStyle", "click"], ["center_collapse", ""], ["viewBox", "0 0 1024 1024", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16"], ["d", "M245.034251 895.239428l383.063419-383.063419L240.001631 124.07997l0.070608-0.033769c-12.709463-13.137205-20.530592-31.024597-20.530592-50.731428 0-40.376593 32.736589-73.111135 73.115228-73.111135 19.705807 0 37.591153 7.819083 50.730405 20.528546l0.034792-0.035816 438.686251 438.681134-0.035816 0.034792c13.779841 13.281491 22.3838 31.915897 22.3838 52.586682 0 0.071631 0 0.106424 0 0.178055 0 0.072655 0 0.10847 0 0.144286 0 20.669762-8.603959 39.341007-22.3838 52.623521l0.035816 0.033769L343.426165 1003.661789l-0.180102-0.179079c-13.140275 12.565177-30.950919 20.313651-50.588165 20.313651-40.378639 0-73.115228-32.736589-73.115228-73.114205C219.544717 928.512229 229.432924 908.664182 245.034251 895.239428z", "fill", "#bababa"]], template: function DockablePanelAtRightComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "div", 0, 1);
        i0.ɵɵelementStart(2, "div", 2, 3);
        i0.ɵɵelementStart(4, "div", 4, 5);
        i0.ɵɵlistener("onClickSetting", function DockablePanelAtRightComponent_Template_div_onClickSetting_4_listener() { return ctx.openWidgetSetting(); })("onClickClose", function DockablePanelAtRightComponent_Template_div_onClickClose_4_listener($event) { return ctx.closePanel($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 6);
        i0.ɵɵlistener("click", function DockablePanelAtRightComponent_Template_div_click_6_listener($event) { return ctx._contentClick($event); });
        i0.ɵɵtemplate(7, DockablePanelAtRightComponent_ng_template_7_Template, 0, 0, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 8);
        i0.ɵɵlistener("mousedown", function DockablePanelAtRightComponent_Template_div_mousedown_9_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "width", directionX: "left" }); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "div", 9, 10);
        i0.ɵɵlistener("click", function DockablePanelAtRightComponent_Template_div_click_10_listener($event) { return ctx.collapsePanel($event); });
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
    } }, directives: [i1.NgClass, i1.NgStyle, i2.PanelTitleBarComponent], styles: [".notitle[_ngcontent-%COMP%]{border:none}.notitle[_ngcontent-%COMP%]   .sspanel_titlebar[_ngcontent-%COMP%]{display:none}.notitle[_ngcontent-%COMP%]   .sspanel_content[_ngcontent-%COMP%]{border:none}.collapse[_ngcontent-%COMP%]{position:absolute;top:50%;left:-16px;width:16px;height:60px;line-height:60px;cursor:pointer;background:#fcfcfc;border-radius:5px 0 0 5px;box-shadow:-6px 0 6px 0 #a0a0a0}.collapse[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover   path[_ngcontent-%COMP%]{fill:#000}"] });
DockablePanelAtRightComponent = __decorate([
    ComponentRegister({
        uri: 'epsgis-dockable-panel-at-right',
        path: "components/ex-panels/dockable-panel-at-right"
    })
], DockablePanelAtRightComponent);
export { DockablePanelAtRightComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DockablePanelAtRightComponent, [{
        type: Component,
        args: [{
                selector: 'epsgis-dockable-panel-at-right',
                templateUrl: './dockable-panel-at-right.component.html',
                styleUrls: ['./dockable-panel-at-right.component.scss'],
            }]
    }], function () { return [{ type: i0.Renderer2, decorators: [{
                type: Optional
            }] }, { type: i0.ChangeDetectorRef, decorators: [{
                type: Optional
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9ja2FibGUtcGFuZWwtYXQtcmlnaHQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZXBzZ2lzL2NvbXBvbmVudHMvZXgtcGFuZWxzL2RvY2thYmxlLXBhbmVsLWF0LXJpZ2h0L2RvY2thYmxlLXBhbmVsLWF0LXJpZ2h0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Vwc2dpcy9jb21wb25lbnRzL2V4LXBhbmVscy9kb2NrYWJsZS1wYW5lbC1hdC1yaWdodC9kb2NrYWJsZS1wYW5lbC1hdC1yaWdodC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxRQUFRLEVBQWdDLE1BQU0sZUFBZSxDQUFDO0FBQzFGLE9BQU8sRUFBRSxhQUFhLEVBQWdCLE1BQU0sNEJBQTRCLENBQUM7QUFDekUsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saURBQWlELENBQUM7Ozs7Ozs7SUFXdkUsNkJBQTZCLFNBQTdCLDZCQUE4QixTQUFRLDBCQUEwQjtJQUUzRSxZQUErQixPQUFrQixFQUFvQixHQUFxQjtRQUN4RixLQUFLLENBQUMsT0FBTyxFQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRFUsWUFBTyxHQUFQLE9BQU8sQ0FBVztRQUFvQixRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUV4RixJQUFJLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDdEMsQ0FBQztJQU1ELFVBQVUsQ0FBQyxPQUFxQjtRQUM5QixPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN0QixPQUFPLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUMxQixPQUFPLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUM1QixPQUFPLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUMvQixPQUFPLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUMvQixPQUFPLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUMvQixPQUFPLENBQUMsY0FBYyxHQUFDLElBQUksQ0FBQztRQUM1QixPQUFPLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDdkMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ1MsY0FBYztRQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFO1lBQy9ELElBQUksRUFBRSxNQUFNO1lBRVosR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRztZQUN2QixNQUFNLEVBQUUsQ0FBQztZQUNULEtBQUssRUFBRSxDQUFDO1lBRVIsTUFBTSxFQUFFLE1BQU07U0FDZixDQUFDLENBQUM7UUFDSCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUNELFFBQVE7UUFDTixLQUFLLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM3QixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUNELE1BQU07UUFDSixLQUFLLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM3QixLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUNELE9BQU87UUFDTCxLQUFLLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUM1QixLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUNELE1BQU07SUFFTixDQUFDO0NBQ0YsQ0FBQTswR0FqRFksNkJBQTZCO2tFQUE3Qiw2QkFBNkI7UUNmMUMsNEJBRU07UUFDTixpQ0FDdUI7UUFDckIsaUNBQzJFO1FBQTNFLHlIQUFrQix1QkFBbUIsSUFBQyw4R0FBaUIsc0JBQWtCLElBQW5DO1FBQXFDLGlCQUFNO1FBc0JqRiw4QkFBOEQ7UUFBakMsNkdBQVMseUJBQXFCLElBQUU7UUFDM0QsK0hBQTJDO1FBQzdDLGlCQUFNO1FBQ04sOEJBQ2tGO1FBQWhGLHFIQUFhLDRDQUFxQyxPQUFPLGNBQVksTUFBTSxHQUFFLElBQUU7UUFBQyxpQkFBTTtRQUN4RixtQ0FDbUM7UUFBakMsOEdBQVMseUJBQXFCLElBQUU7UUFFaEMsbUJBQ3lCO1FBRHpCLGdDQUN5QjtRQUN2Qiw0QkFFd0I7UUFDMUIsaUJBQU07UUFDUixpQkFBTTtRQUNSLGlCQUFNOztRQXhDd0IsZUFBbUI7UUFBbkIsOENBQW1CO1FBQUMscUZBQWlELHlCQUFBO1FBRUgsZUFBaUI7UUFBakIsK0JBQWlCLHdCQUFBLGdDQUFBO1FBNEJ4RSxlQUFrRTtRQUFsRSxtR0FBa0U7O0FEbEI5Riw2QkFBNkI7SUFUekMsaUJBQWlCLENBQUM7UUFDakIsR0FBRyxFQUFFLGdDQUFnQztRQUNyQyxJQUFJLEVBQUUsOENBQThDO0tBQ3JELENBQUM7R0FNVyw2QkFBNkIsQ0FpRHpDO1NBakRZLDZCQUE2Qjt1RkFBN0IsNkJBQTZCO2NBTHpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0NBQWdDO2dCQUMxQyxXQUFXLEVBQUUsMENBQTBDO2dCQUN2RCxTQUFTLEVBQUUsQ0FBQywwQ0FBMEMsQ0FBQzthQUN4RDs7c0JBR2MsUUFBUTs7c0JBQThCLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT3B0aW9uYWwsIFJlbmRlcmVyMiwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhbmVsRG9ja01vZGUsIFBhbmVsT3B0aW9ucyB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9iYXNlLXBhbmVsJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IEJhc2VEb2NrYWJsZVBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZS1kb2NrYWJsZS1wYW5lbCc7XG5pbXBvcnQgeyBDb21wb25lbnRSZWdpc3RlciB9IGZyb20gJy4uLy4uLy4uL2RlY29yYXRvci9jb21wb25lbnQtcmVnaXN0ZXIuZGVjb3JhdG9yJztcblxuQENvbXBvbmVudFJlZ2lzdGVyKHtcbiAgdXJpOiAnZXBzZ2lzLWRvY2thYmxlLXBhbmVsLWF0LXJpZ2h0JyxcbiAgcGF0aDogXCJjb21wb25lbnRzL2V4LXBhbmVscy9kb2NrYWJsZS1wYW5lbC1hdC1yaWdodFwiXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXBzZ2lzLWRvY2thYmxlLXBhbmVsLWF0LXJpZ2h0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RvY2thYmxlLXBhbmVsLWF0LXJpZ2h0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZG9ja2FibGUtcGFuZWwtYXQtcmlnaHQuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRG9ja2FibGVQYW5lbEF0UmlnaHRDb21wb25lbnQgZXh0ZW5kcyBCYXNlRG9ja2FibGVQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHVibGljIF9yZW5kZXI6IFJlbmRlcmVyMixAT3B0aW9uYWwoKSBwdWJsaWMgY2RyOkNoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoX3JlbmRlcixjZHIpO1xuICAgIHRoaXMuZG9ja01vZGUgPSBQYW5lbERvY2tNb2RlLnJpZ2h0O1xuICB9XG5cbiAgLyoqXG4gICAqIOiuvue9rnBhbmVs5Y+C5pWwXG4gICAqIEBwYXJhbSBvcHRpb25zIFxuICAgKi9cbiAgc2V0T3B0aW9ucyhvcHRpb25zOiBQYW5lbE9wdGlvbnMpIHtcbiAgICBvcHRpb25zLm1vZGFsID0gZmFsc2U7XG4gICAgb3B0aW9ucy5kcmFnZ2FibGUgPSBmYWxzZTtcbiAgICBvcHRpb25zLmJ1dHRvbkNsb3NlID0gZmFsc2U7XG4gICAgb3B0aW9ucy5idXR0b25Db2xsYXBzZSA9IGZhbHNlO1xuICAgIG9wdGlvbnMuYnV0dG9uTWF4aW1pemUgPSBmYWxzZTtcbiAgICBvcHRpb25zLmJ1dHRvbk1pbmltaXplID0gZmFsc2U7XG4gICAgb3B0aW9ucy5jZW50ZXJDb2xsYXBzZT10cnVlO1xuICAgIG9wdGlvbnMuZG9ja1NpZGUgPSBQYW5lbERvY2tNb2RlLnJpZ2h0O1xuICAgIHN1cGVyLnNldE9wdGlvbnMob3B0aW9ucyk7XG4gIH1cbiAgcHJvdGVjdGVkIF9zZXRQQ1Bvc2l0aW9uKCkge1xuICAgIHRoaXMud2lkZ2V0Q29uZmlnLnBvc2l0aW9uID0gXy5tZXJnZSh0aGlzLndpZGdldENvbmZpZy5wb3NpdGlvbiwge1xuICAgICAgbGVmdDogXCJhdXRvXCIsXG4gICAgICAvLyB0b3A6IDAsXG4gICAgICB0b3A6IHRoaXMubWFwQm91bmRzLnRvcCxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIHJpZ2h0OiAwLFxuICAgICAgLy9oZWlnaHQ6IFwiMTAwJVwiXG4gICAgICBoZWlnaHQ6IFwiYXV0b1wiXG4gICAgfSk7XG4gICAgc3VwZXIuX3NldFBDUG9zaXRpb24oKTtcbiAgfVxuICBvblJlc2l6ZSgpIHtcbiAgICBzdXBlci5fcmVzaXplTWFwV2hlblJlc2l6ZSgpO1xuICAgIHN1cGVyLm9uUmVzaXplKCk7XG4gIH1cbiAgb25PcGVuKCkge1xuICAgIHN1cGVyLl9yZXNpemVNYXBXaGVuUmVzaXplKCk7XG4gICAgc3VwZXIub25PcGVuKCk7XG4gIH1cbiAgb25DbG9zZSgpIHtcbiAgICBzdXBlci5fcmVzaXplTWFwV2hlbkNsb3NlKCk7XG4gICAgc3VwZXIub25DbG9zZSgpO1xuICB9XG4gIHJlc2l6ZSgpIHtcblxuICB9XG59IiwiPGRpdiBjbGFzcz1cInNzcGFuZWxfb3ZlcmxheVwiICNzc3BhbmVsX292ZXJsYXkgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPlxuXG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJzc3BhbmVsXCIgI3NzcGFuZWwgaWQ9XCJ7e29wdGlvbnMuaWR9fVwiIFtuZ0NsYXNzXT1cInsnbm90aXRsZSc6b3B0aW9ucy5zaG93VGl0bGU9PT1mYWxzZX1cIlxuICBbbmdTdHlsZV09XCJwb3NpdGlvblwiPlxuICA8ZGl2IHNzcGFuZWwtdGl0bGViYXIgICNzc3BhbmVsX3RpdGxlYmFyICBjbGFzcz1cInNzcGFuZWxfdGl0bGViYXIgc3NwYW5lbF90aXRsZWJhcl9kcmFnZ2FibGVcIiBbaGFzSWNvbl09XCJmYWxzZVwiIFtvcHRpb25zXT1cIm9wdGlvbnNcIiBbd2luZG93U3RhdGVdPVwid2luZG93U3RhdGVcIlxuICAob25DbGlja1NldHRpbmcpPVwib3BlbldpZGdldFNldHRpbmcoKVwiIChvbkNsaWNrQ2xvc2UpPVwiY2xvc2VQYW5lbCgkZXZlbnQpXCI+PC9kaXY+XG4gIDwhLS0gPGRpdiBjbGFzcz1cInNzcGFuZWxfdGl0bGViYXJcIiAjc3NwYW5lbF90aXRsZWJhciAobW91c2Vkb3duKT1cIl90aXRsZWJhcl9Nb3VzZURvd24oJGV2ZW50KTtcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwicGFuZWxJY29uXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaWNvblwiPlxuICAgICAgICA8aW1nICpuZ0lmPVwicGFuZWxJY29uLmlzU2hvd0ltZ1wiIFtzcmNdPVwicGFuZWxJY29uLmljb25cIj5cbiAgICAgICAgPGkgKm5nSWY9XCIhcGFuZWxJY29uLmlzU2hvd0ltZ1wiIG56LWljb24gW256SWNvbmZvbnRdPVwicGFuZWxJY29uLmljb25cIj48L2k+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8ZGl2IGNsYXNzPVwic3NwYW5lbF90aXRsZWJhcl90ZXh0XCI+PHNwYW4gY2xhc3M9XCJzc3BhbmVsX3RpdGxlYmFyX3RleHRfc3BhblwiPnt7b3B0aW9ucy50aXRsZX19PC9zcGFuPjwvZGl2PlxuXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm9wdGlvbnMuYnV0dG9uQ2xvc2VcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzc3BhbmVsX3RpdGxlYmFyX2J1dHRvbiBzc3BhbmVsX3RpdGxlYmFyX2J1dHRvbl9jbG9zZVwiIHRpdGxlPVwie3tvcHRpb25zLmJ1dHRvbkNsb3NlVGV4dH19XCJcbiAgICAgICAgKGNsaWNrKT1cImNsb3NlUGFuZWwoJGV2ZW50KTtcIj5cbiAgICAgICAgPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXG4gICAgICAgICAgdmlld0JveD1cIjAgMCAxMCAxMFwiIGhlaWdodD1cIjEwMCVcIiB3aWR0aD1cIjEwMCVcIj5cbiAgICAgICAgICA8Zz5cbiAgICAgICAgICAgIDxsaW5lIHkyPVwiMFwiIHgyPVwiMTBcIiB5MT1cIjEwXCIgeDE9XCIwXCI+PC9saW5lPlxuICAgICAgICAgICAgPGxpbmUgeTI9XCIxMFwiIHgyPVwiMTBcIiB5MT1cIjBcIiB4MT1cIjBcIj48L2xpbmU+XG4gICAgICAgICAgPC9nPlxuICAgICAgICA8L3N2Zz48L2Rpdj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9kaXY+IC0tPlxuICA8ZGl2IGNsYXNzPVwic3NwYW5lbF9jb250ZW50XCIgKGNsaWNrKT1cIl9jb250ZW50Q2xpY2soJGV2ZW50KTtcIj5cbiAgICA8bmctdGVtcGxhdGUgI3dpZGdldF9jb250ZW50PjwvbmctdGVtcGxhdGU+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwic3NwYW5lbF9yZXNpemVyIHNzcGFuZWxfcmVzaXplcl9sZWZ0XCJcbiAgICAobW91c2Vkb3duKT1cIl9yZXNpemVyX01vdXNlRG93bigkZXZlbnQse2RpbWVuc2lvbjond2lkdGgnLGRpcmVjdGlvblg6J2xlZnQnfSk7XCI+PC9kaXY+XG4gIDxkaXYgI2NlbnRlcl9jb2xsYXBzZSBjbGFzcz1cImNvbGxhcHNlXCIgW25nU3R5bGVdPVwieydkaXNwbGF5JzpvcHRpb25zLmNlbnRlckNvbGxhcHNlID8gJ2Jsb2NrJyA6ICdub25lJyB9XCJcbiAgICAoY2xpY2spPVwiY29sbGFwc2VQYW5lbCgkZXZlbnQpO1wiPlxuICAgIDwhLS0gPGVwc2dpcy1pY29uLWFycm93LXJpZ2h0PjwvZXBzZ2lzLWljb24tYXJyb3ctcmlnaHQ+IC0tPlxuICAgIDxzdmcgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIj5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjQ1LjAzNDI1MSA4OTUuMjM5NDI4bDM4My4wNjM0MTktMzgzLjA2MzQxOUwyNDAuMDAxNjMxIDEyNC4wNzk5N2wwLjA3MDYwOC0wLjAzMzc2OWMtMTIuNzA5NDYzLTEzLjEzNzIwNS0yMC41MzA1OTItMzEuMDI0NTk3LTIwLjUzMDU5Mi01MC43MzE0MjggMC00MC4zNzY1OTMgMzIuNzM2NTg5LTczLjExMTEzNSA3My4xMTUyMjgtNzMuMTExMTM1IDE5LjcwNTgwNyAwIDM3LjU5MTE1MyA3LjgxOTA4MyA1MC43MzA0MDUgMjAuNTI4NTQ2bDAuMDM0NzkyLTAuMDM1ODE2IDQzOC42ODYyNTEgNDM4LjY4MTEzNC0wLjAzNTgxNiAwLjAzNDc5MmMxMy43Nzk4NDEgMTMuMjgxNDkxIDIyLjM4MzggMzEuOTE1ODk3IDIyLjM4MzggNTIuNTg2NjgyIDAgMC4wNzE2MzEgMCAwLjEwNjQyNCAwIDAuMTc4MDU1IDAgMC4wNzI2NTUgMCAwLjEwODQ3IDAgMC4xNDQyODYgMCAyMC42Njk3NjItOC42MDM5NTkgMzkuMzQxMDA3LTIyLjM4MzggNTIuNjIzNTIxbDAuMDM1ODE2IDAuMDMzNzY5TDM0My40MjYxNjUgMTAwMy42NjE3ODlsLTAuMTgwMTAyLTAuMTc5MDc5Yy0xMy4xNDAyNzUgMTIuNTY1MTc3LTMwLjk1MDkxOSAyMC4zMTM2NTEtNTAuNTg4MTY1IDIwLjMxMzY1MS00MC4zNzg2MzkgMC03My4xMTUyMjgtMzIuNzM2NTg5LTczLjExNTIyOC03My4xMTQyMDVDMjE5LjU0NDcxNyA5MjguNTEyMjI5IDIyOS40MzI5MjQgOTA4LjY2NDE4MiAyNDUuMDM0MjUxIDg5NS4yMzk0Mjh6XCJcbiAgICAgICAgZmlsbD1cIiNiYWJhYmFcIj48L3BhdGg+XG4gICAgPC9zdmc+XG4gIDwvZGl2PlxuPC9kaXY+Il19