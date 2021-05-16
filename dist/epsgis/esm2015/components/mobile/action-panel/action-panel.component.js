import { __decorate } from "tslib";
import { Component, Optional } from '@angular/core';
import { BaseMobilePanelComponent } from '../base-mobile-panel';
import { WidgetPosition } from "../../../models/base-widget";
import { PanelInMobileShowMode } from '../../../models/base-panel';
import { ComponentRegister } from '../../../decorator/component-register.decorator';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function MobileActionPanelComponent_div_4_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 14);
    i0.ɵɵlistener("click", function MobileActionPanelComponent_div_4_ng_container_4_ng_container_1_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(3); return ctx_r11._buttonMax_Click($event); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 15);
    i0.ɵɵelementStart(3, "g", 16);
    i0.ɵɵelement(4, "rect", 17);
    i0.ɵɵelement(5, "line", 18);
    i0.ɵɵelement(6, "line", 19);
    i0.ɵɵelement(7, "line", 20);
    i0.ɵɵelement(8, "line", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("title", ctx_r8.options.buttonUnmaximizeText);
} }
function MobileActionPanelComponent_div_4_ng_container_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵlistener("click", function MobileActionPanelComponent_div_4_ng_container_4_ng_template_2_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(3); return ctx_r13._buttonMax_Click($event); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 15);
    i0.ɵɵelementStart(2, "g", 16);
    i0.ɵɵelement(3, "rect", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate("title", ctx_r10.options.buttonMaximizeText);
} }
function MobileActionPanelComponent_div_4_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, MobileActionPanelComponent_div_4_ng_container_4_ng_container_1_Template, 9, 1, "ng-container", 12);
    i0.ɵɵtemplate(2, MobileActionPanelComponent_div_4_ng_container_4_ng_template_2_Template, 4, 1, "ng-template", null, 13, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r9 = i0.ɵɵreference(3);
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r6.windowState == "maximized")("ngIfElse", _r9);
} }
function MobileActionPanelComponent_div_4_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 23);
    i0.ɵɵlistener("click", function MobileActionPanelComponent_div_4_ng_container_5_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(2); return ctx_r15.closePanel($event); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 15);
    i0.ɵɵelementStart(3, "g");
    i0.ɵɵelement(4, "line", 24);
    i0.ɵɵelement(5, "line", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("title", ctx_r7.options.buttonCloseText);
} }
function MobileActionPanelComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8, 9);
    i0.ɵɵlistener("mousedown", function MobileActionPanelComponent_div_4_Template_div_mousedown_0_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r17 = i0.ɵɵnextContext(); return ctx_r17._titlebar_MouseDown($event); });
    i0.ɵɵelementStart(2, "div", 10);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, MobileActionPanelComponent_div_4_ng_container_4_Template, 4, 2, "ng-container", 11);
    i0.ɵɵtemplate(5, MobileActionPanelComponent_div_4_ng_container_5_Template, 6, 1, "ng-container", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.options.title, "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.options.buttonMaximize);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.options.buttonClose);
} }
function MobileActionPanelComponent_ng_template_6_Template(rf, ctx) { }
let MobileActionPanelComponent = class MobileActionPanelComponent extends BaseMobilePanelComponent {
    constructor(_render, cdr) {
        super(_render, cdr);
        this._render = _render;
        this.cdr = cdr;
        this._mobileShowMode = PanelInMobileShowMode.action;
    }
    setOptions(options) {
        options.buttonCollapse = false;
        options.buttonMaximize = false;
        super.setOptions(options);
    }
    _setMobilePosition() {
        const obj = this.getWidthHeight();
        let _pos = new WidgetPosition("auto", 0, 0, 0, obj.height, "100%");
        this.widgetConfig.position = _pos;
        this._render.setStyle(this.sspanel.nativeElement, "max-height", obj.height);
    }
};
MobileActionPanelComponent.ɵfac = function MobileActionPanelComponent_Factory(t) { return new (t || MobileActionPanelComponent)(i0.ɵɵdirectiveInject(i0.Renderer2, 8), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef, 8)); };
MobileActionPanelComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MobileActionPanelComponent, selectors: [["epsgis-mobile-action-panel"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 9, vars: 3, consts: [[1, "sspanel_overlay"], ["sspanel_overlay", ""], [1, "sspanel", 3, "id", "ngStyle"], ["sspanel", ""], ["class", "sspanel_titlebar sspanel_titlebar_draggable", 3, "mousedown", 4, "ngIf"], [1, "sspanel_content", 3, "click"], ["widget_content", ""], [1, "sspanel_resizer", "sspanel_resizer_top", 3, "mousedown"], [1, "sspanel_titlebar", "sspanel_titlebar_draggable", 3, "mousedown"], ["sspanel_titlebar", ""], [1, "sspanel_titlebar_text"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["showMaximizeButton", ""], [1, "sspanel_titlebar_button", "sspanel_titlebar_button_maximize", 3, "title", "click"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 10 10", "height", "100%", "width", "100%"], ["fill", "none"], ["x", "1", "y", "3", "height", "6", "width", "6"], ["y1", "3", "x1", "3", "y2", "1", "x2", "3"], ["y1", "1", "x1", "2.5", "y2", "1", "x2", "9.5"], ["y1", "1", "x1", "9", "y2", "7", "x2", "9"], ["y1", "7", "x1", "9.5", "y2", "7", "x2", "7"], ["x", "1", "y", "1", "height", "8", "width", "8"], [1, "sspanel_titlebar_button", "sspanel_titlebar_button_close", 3, "title", "click"], ["y2", "0", "x2", "10", "y1", "10", "x1", "0"], ["y2", "10", "x2", "10", "y1", "0", "x1", "0"]], template: function MobileActionPanelComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0, 1);
        i0.ɵɵelementStart(2, "div", 2, 3);
        i0.ɵɵtemplate(4, MobileActionPanelComponent_div_4_Template, 6, 3, "div", 4);
        i0.ɵɵelementStart(5, "div", 5);
        i0.ɵɵlistener("click", function MobileActionPanelComponent_Template_div_click_5_listener($event) { return ctx._contentClick($event); });
        i0.ɵɵtemplate(6, MobileActionPanelComponent_ng_template_6_Template, 0, 0, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "div", 7);
        i0.ɵɵlistener("mousedown", function MobileActionPanelComponent_Template_div_mousedown_8_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "height", directionY: "top" }); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵpropertyInterpolate("id", ctx.options.id);
        i0.ɵɵproperty("ngStyle", ctx.position);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.options.showTitle);
    } }, directives: [i1.NgStyle, i1.NgIf], styles: [".sspanel[_ngcontent-%COMP%]{border:none}"] });
MobileActionPanelComponent = __decorate([
    ComponentRegister({
        uri: 'epsgis-mobile-action-panel',
        path: "components/mobile/action-panel"
    })
], MobileActionPanelComponent);
export { MobileActionPanelComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MobileActionPanelComponent, [{
        type: Component,
        args: [{
                selector: 'epsgis-mobile-action-panel',
                templateUrl: './action-panel.component.html',
                styleUrls: ['./action-panel.component.scss']
            }]
    }], function () { return [{ type: i0.Renderer2, decorators: [{
                type: Optional
            }] }, { type: i0.ChangeDetectorRef, decorators: [{
                type: Optional
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Vwc2dpcy9jb21wb25lbnRzL21vYmlsZS9hY3Rpb24tcGFuZWwvYWN0aW9uLXBhbmVsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Vwc2dpcy9jb21wb25lbnRzL21vYmlsZS9hY3Rpb24tcGFuZWwvYWN0aW9uLXBhbmVsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFhLFFBQVEsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDbEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTdELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDOzs7OztJQ0c1RSw2QkFBMEU7SUFDeEUsK0JBQ3NDO0lBQXBDLCtPQUFtQztJQUFDLG1CQUN3RDtJQUR4RCwrQkFDd0Q7SUFDMUYsNkJBQWU7SUFDYiwyQkFBOEM7SUFDOUMsMkJBQXlDO0lBQ3pDLDJCQUE2QztJQUM3QywyQkFBeUM7SUFDekMsMkJBQTJDO0lBQzdDLGlCQUFJO0lBQ04saUJBQU07SUFBQSxpQkFBTTtJQUNoQiwwQkFBZTs7O0lBWHlELGVBQXdDO0lBQXhDLHNFQUF3Qzs7OztJQWM5RywrQkFDc0M7SUFBcEMsOE9BQW1DO0lBQUMsbUJBQ3dEO0lBRHhELCtCQUN3RDtJQUMxRiw2QkFBZTtJQUNiLDJCQUE4QztJQUNoRCxpQkFBSTtJQUNOLGlCQUFNO0lBQUEsaUJBQU07OztJQU53RCxxRUFBc0M7OztJQWhCaEgsNkJBQTZDO0lBQzNDLG1IQVllO0lBQ2Ysa0pBU2M7SUFDaEIsMEJBQWU7Ozs7SUF2QkUsZUFBa0M7SUFBbEMsd0RBQWtDLGlCQUFBOzs7O0lBeUJuRCw2QkFBMEM7SUFDeEMsK0JBQ2dDO0lBQTlCLDBOQUE2QjtJQUM3QixtQkFDaUQ7SUFEakQsK0JBQ2lEO0lBQy9DLHlCQUFHO0lBQ0QsMkJBQTJDO0lBQzNDLDJCQUEyQztJQUM3QyxpQkFBSTtJQUNOLGlCQUFNO0lBQUEsaUJBQU07SUFDaEIsMEJBQWU7OztJQVRzRCxlQUFtQztJQUFuQyxpRUFBbUM7Ozs7SUFoQzFHLGlDQUM2QztJQUEzQywyTkFBMEM7SUFDMUMsK0JBQW1DO0lBQ2pDLFlBQWlCO0lBQUEsaUJBQU07SUFFekIsb0dBd0JlO0lBRWYsb0dBVWU7SUFDakIsaUJBQU07OztJQXZDRixlQUFpQjtJQUFqQixvREFBaUI7SUFFSixlQUE0QjtJQUE1QixvREFBNEI7SUEwQjVCLGVBQXlCO0lBQXpCLGlEQUF5Qjs7O0lEbEJqQywwQkFBMEIsU0FBMUIsMEJBQTJCLFNBQVEsd0JBQXdCO0lBRXRFLFlBQStCLE9BQWtCLEVBQXFCLEdBQXNCO1FBQzFGLEtBQUssQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFEUyxZQUFPLEdBQVAsT0FBTyxDQUFXO1FBQXFCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBRTFGLElBQUksQ0FBQyxlQUFlLEdBQUcscUJBQXFCLENBQUMsTUFBTSxDQUFDO0lBQ3RELENBQUM7SUFDRCxVQUFVLENBQUMsT0FBTztRQUNoQixPQUFPLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUMvQixPQUFPLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUMvQixLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDRCxrQkFBa0I7UUFFaEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ2xDLElBQUksSUFBSSxHQUFHLElBQUksY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUdsQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxZQUFZLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRTlFLENBQUM7Q0FDRixDQUFBO29HQXJCWSwwQkFBMEI7K0RBQTFCLDBCQUEwQjtRQ2Z2QyxpQ0FBOEM7UUFDNUMsaUNBQXVFO1FBQ3JFLDJFQTBDTTtRQUNOLDhCQUE4RDtRQUFqQywwR0FBUyx5QkFBcUIsSUFBRTtRQUMzRCw0SEFBMkM7UUFDN0MsaUJBQU07UUFDTiw4QkFDa0Y7UUFBaEYsa0hBQWEsNENBQXFDLFFBQVEsY0FBWSxLQUFLLEdBQUUsSUFBRTtRQUFDLGlCQUFNO1FBQzFGLGlCQUFNO1FBQ1IsaUJBQU07O1FBbEQwQixlQUFtQjtRQUFuQiw4Q0FBbUI7UUFBQyxzQ0FBb0I7UUFDOUQsZUFBdUI7UUFBdkIsNENBQXVCOztBRGFwQiwwQkFBMEI7SUFUdEMsaUJBQWlCLENBQUM7UUFDakIsR0FBRyxFQUFFLDRCQUE0QjtRQUNqQyxJQUFJLEVBQUUsZ0NBQWdDO0tBQ3ZDLENBQUM7R0FNVywwQkFBMEIsQ0FxQnRDO1NBckJZLDBCQUEwQjt1RkFBMUIsMEJBQTBCO2NBTHRDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxXQUFXLEVBQUUsK0JBQStCO2dCQUM1QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQzthQUM3Qzs7c0JBR2MsUUFBUTs7c0JBQStCLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFJlbmRlcmVyMiwgT3B0aW9uYWwsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlTW9iaWxlUGFuZWxDb21wb25lbnQgfSBmcm9tICcuLi9iYXNlLW1vYmlsZS1wYW5lbCc7XG5pbXBvcnQgeyBXaWRnZXRQb3NpdGlvbiB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvYmFzZS13aWRnZXRcIjtcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IFBhbmVsSW5Nb2JpbGVTaG93TW9kZSB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9iYXNlLXBhbmVsJztcbmltcG9ydCB7IENvbXBvbmVudFJlZ2lzdGVyIH0gZnJvbSAnLi4vLi4vLi4vZGVjb3JhdG9yL2NvbXBvbmVudC1yZWdpc3Rlci5kZWNvcmF0b3InO1xuQENvbXBvbmVudFJlZ2lzdGVyKHtcbiAgdXJpOiAnZXBzZ2lzLW1vYmlsZS1hY3Rpb24tcGFuZWwnLFxuICBwYXRoOiBcImNvbXBvbmVudHMvbW9iaWxlL2FjdGlvbi1wYW5lbFwiXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXBzZ2lzLW1vYmlsZS1hY3Rpb24tcGFuZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWN0aW9uLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWN0aW9uLXBhbmVsLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTW9iaWxlQWN0aW9uUGFuZWxDb21wb25lbnQgZXh0ZW5kcyBCYXNlTW9iaWxlUGFuZWxDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHB1YmxpYyBfcmVuZGVyOiBSZW5kZXJlcjIsIEBPcHRpb25hbCgpIHB1YmxpYyBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoX3JlbmRlciwgY2RyKTtcbiAgICB0aGlzLl9tb2JpbGVTaG93TW9kZSA9IFBhbmVsSW5Nb2JpbGVTaG93TW9kZS5hY3Rpb247XG4gIH1cbiAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgb3B0aW9ucy5idXR0b25Db2xsYXBzZSA9IGZhbHNlO1xuICAgIG9wdGlvbnMuYnV0dG9uTWF4aW1pemUgPSBmYWxzZTtcbiAgICBzdXBlci5zZXRPcHRpb25zKG9wdGlvbnMpO1xuICB9XG4gIF9zZXRNb2JpbGVQb3NpdGlvbigpIHtcbiAgICAvL2FjdGlvbiAg55Sx5bqV5ZCR5LiK5by55Ye6XG4gICAgY29uc3Qgb2JqID0gdGhpcy5nZXRXaWR0aEhlaWdodCgpO1xuICAgIGxldCBfcG9zID0gbmV3IFdpZGdldFBvc2l0aW9uKFwiYXV0b1wiLCAwLCAwLCAwLCBvYmouaGVpZ2h0LCBcIjEwMCVcIik7XG4gICAgdGhpcy53aWRnZXRDb25maWcucG9zaXRpb24gPSBfcG9zO1xuICAgIC8v5Y675o6J6L655qGGXG4gICAgLy/mnIDlpKfpq5jluqZcbiAgICB0aGlzLl9yZW5kZXIuc2V0U3R5bGUodGhpcy5zc3BhbmVsLm5hdGl2ZUVsZW1lbnQsIFwibWF4LWhlaWdodFwiLCBvYmouaGVpZ2h0KTtcbiAgICAvL+WOu+aOiemYtOW9sVxuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwic3NwYW5lbF9vdmVybGF5XCIgI3NzcGFuZWxfb3ZlcmxheT5cbiAgPGRpdiBjbGFzcz1cInNzcGFuZWxcIiAjc3NwYW5lbCBpZD1cInt7b3B0aW9ucy5pZH19XCIgW25nU3R5bGVdPVwicG9zaXRpb25cIj5cbiAgICA8ZGl2ICpuZ0lmPVwib3B0aW9ucy5zaG93VGl0bGVcIiBjbGFzcz1cInNzcGFuZWxfdGl0bGViYXIgc3NwYW5lbF90aXRsZWJhcl9kcmFnZ2FibGVcIiAjc3NwYW5lbF90aXRsZWJhclxuICAgICAgKG1vdXNlZG93bik9XCJfdGl0bGViYXJfTW91c2VEb3duKCRldmVudCk7XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwic3NwYW5lbF90aXRsZWJhcl90ZXh0XCI+XG4gICAgICAgIHt7b3B0aW9ucy50aXRsZX19PC9kaXY+XG5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJvcHRpb25zLmJ1dHRvbk1heGltaXplXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ3aW5kb3dTdGF0ZSA9PSAnbWF4aW1pemVkJzsgZWxzZSBzaG93TWF4aW1pemVCdXR0b25cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic3NwYW5lbF90aXRsZWJhcl9idXR0b24gc3NwYW5lbF90aXRsZWJhcl9idXR0b25fbWF4aW1pemVcIiB0aXRsZT1cInt7b3B0aW9ucy5idXR0b25Vbm1heGltaXplVGV4dH19XCJcbiAgICAgICAgICAgIChjbGljayk9XCJfYnV0dG9uTWF4X0NsaWNrKCRldmVudCk7XCI+PHN2ZyB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHZpZXdCb3g9XCIwIDAgMTAgMTBcIiBoZWlnaHQ9XCIxMDAlXCIgd2lkdGg9XCIxMDAlXCI+XG4gICAgICAgICAgICAgIDxnIGZpbGw9XCJub25lXCI+XG4gICAgICAgICAgICAgICAgPHJlY3QgeD1cIjFcIiB5PVwiM1wiIGhlaWdodD1cIjZcIiB3aWR0aD1cIjZcIj48L3JlY3Q+XG4gICAgICAgICAgICAgICAgPGxpbmUgeTE9XCIzXCIgeDE9XCIzXCIgeTI9XCIxXCIgeDI9XCIzXCI+PC9saW5lPlxuICAgICAgICAgICAgICAgIDxsaW5lIHkxPVwiMVwiIHgxPVwiMi41XCIgeTI9XCIxXCIgeDI9XCI5LjVcIj48L2xpbmU+XG4gICAgICAgICAgICAgICAgPGxpbmUgeTE9XCIxXCIgeDE9XCI5XCIgeTI9XCI3XCIgeDI9XCI5XCI+PC9saW5lPlxuICAgICAgICAgICAgICAgIDxsaW5lIHkxPVwiN1wiIHgxPVwiOS41XCIgeTI9XCI3XCIgeDI9XCI3XCI+PC9saW5lPlxuICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8L3N2Zz48L2Rpdj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjc2hvd01heGltaXplQnV0dG9uPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNzcGFuZWxfdGl0bGViYXJfYnV0dG9uIHNzcGFuZWxfdGl0bGViYXJfYnV0dG9uX21heGltaXplXCIgdGl0bGU9XCJ7e29wdGlvbnMuYnV0dG9uTWF4aW1pemVUZXh0fX1cIlxuICAgICAgICAgICAgKGNsaWNrKT1cIl9idXR0b25NYXhfQ2xpY2soJGV2ZW50KTtcIj48c3ZnIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgdmlld0JveD1cIjAgMCAxMCAxMFwiIGhlaWdodD1cIjEwMCVcIiB3aWR0aD1cIjEwMCVcIj5cbiAgICAgICAgICAgICAgPGcgZmlsbD1cIm5vbmVcIj5cbiAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMVwiIHk9XCIxXCIgaGVpZ2h0PVwiOFwiIHdpZHRoPVwiOFwiPjwvcmVjdD5cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPC9zdmc+PC9kaXY+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm9wdGlvbnMuYnV0dG9uQ2xvc2VcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNzcGFuZWxfdGl0bGViYXJfYnV0dG9uIHNzcGFuZWxfdGl0bGViYXJfYnV0dG9uX2Nsb3NlXCIgdGl0bGU9XCJ7e29wdGlvbnMuYnV0dG9uQ2xvc2VUZXh0fX1cIlxuICAgICAgICAgIChjbGljayk9XCJjbG9zZVBhbmVsKCRldmVudCk7XCI+XG4gICAgICAgICAgPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEwIDEwXCIgaGVpZ2h0PVwiMTAwJVwiIHdpZHRoPVwiMTAwJVwiPlxuICAgICAgICAgICAgPGc+XG4gICAgICAgICAgICAgIDxsaW5lIHkyPVwiMFwiIHgyPVwiMTBcIiB5MT1cIjEwXCIgeDE9XCIwXCI+PC9saW5lPlxuICAgICAgICAgICAgICA8bGluZSB5Mj1cIjEwXCIgeDI9XCIxMFwiIHkxPVwiMFwiIHgxPVwiMFwiPjwvbGluZT5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8L3N2Zz48L2Rpdj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJzc3BhbmVsX2NvbnRlbnRcIiAoY2xpY2spPVwiX2NvbnRlbnRDbGljaygkZXZlbnQpO1wiPlxuICAgICAgPG5nLXRlbXBsYXRlICN3aWRnZXRfY29udGVudD48L25nLXRlbXBsYXRlPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJzc3BhbmVsX3Jlc2l6ZXIgc3NwYW5lbF9yZXNpemVyX3RvcFwiXG4gICAgICAobW91c2Vkb3duKT1cIl9yZXNpemVyX01vdXNlRG93bigkZXZlbnQse2RpbWVuc2lvbjonaGVpZ2h0JyxkaXJlY3Rpb25ZOid0b3AnfSk7XCI+PC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+Il19