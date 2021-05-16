import { __decorate } from "tslib";
import { Component, Optional, ViewChild } from '@angular/core';
import { BasePanelComponent } from '../../base-panel/base-panel.component';
import { WidgetState } from '../../../models/base-widget';
import { ComponentRegister } from '../../../decorator/component-register.decorator';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../base-panel/panel-titlebar.component";
import * as i3 from "../../../pipes/safeurl.pipe";
const _c0 = ["iframeContent"];
function IframePanelComponent_iframe_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "iframe", 17, 18);
    i0.ɵɵpipe(2, "safeurl");
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("src", i0.ɵɵpipeBind2(2, 1, ctx_r3.url, "iframe"), i0.ɵɵsanitizeResourceUrl);
} }
function IframePanelComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, null, 19);
    i0.ɵɵtext(2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r4.url, " ");
} }
const _c1 = function (a0) { return { "notitle": a0 }; };
let IframePanelComponent = class IframePanelComponent extends BasePanelComponent {
    constructor(_render, cdr) {
        super(_render, cdr);
        this._render = _render;
        this.cdr = cdr;
        this.url = "";
        this.isShowIframe = false;
    }
    ngOnInit() {
        super.ngOnInit();
        this.url = this.options.url;
        if (this.options.url) {
            this.isShowIframe = true;
        }
    }
    ngAfterViewInit() {
        this.startup();
        this.state = WidgetState.opened;
    }
};
IframePanelComponent.ɵfac = function IframePanelComponent_Factory(t) { return new (t || IframePanelComponent)(i0.ɵɵdirectiveInject(i0.Renderer2, 8), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef, 8)); };
IframePanelComponent.ɵcmp = i0.ɵɵdefineComponent({ type: IframePanelComponent, selectors: [["epsgis-iframe-panel"]], viewQuery: function IframePanelComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 3);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.iframeEl = _t.first);
    } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 17, vars: 10, consts: [[1, "sspanel_overlay", 2, "display", "none"], ["sspanel_overlay", ""], [1, "sspanel", 3, "id", "ngClass", "ngStyle"], ["sspanel", ""], ["sspanel-titlebar", "", 1, "sspanel_titlebar", "sspanel_titlebar_draggable", 3, "hasIcon", "options", "windowState", "onClickSetting", "onClickClose"], ["sspanel_titlebar", ""], [1, "sspanel_content", 3, "click"], ["class", "iframe_content", 3, "src", 4, "ngIf"], [4, "ngIf"], [1, "sspanel_resizer", "sspanel_resizer_top", 3, "mousedown"], [1, "sspanel_resizer", "sspanel_resizer_bottom", 3, "mousedown"], [1, "sspanel_resizer", "sspanel_resizer_left", 3, "mousedown"], [1, "sspanel_resizer", "sspanel_resizer_right", 3, "mousedown"], [1, "sspanel_resizer", "sspanel_resizer_topleft", 3, "mousedown"], [1, "sspanel_resizer", "sspanel_resizer_topright", 3, "mousedown"], [1, "sspanel_resizer", "sspanel_resizer_bottomleft", 3, "mousedown"], [1, "sspanel_resizer", "sspanel_resizer_bottomright", 3, "mousedown"], [1, "iframe_content", 3, "src"], ["iframeContent", ""], ["content", ""]], template: function IframePanelComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "div", 0, 1);
        i0.ɵɵelementStart(2, "div", 2, 3);
        i0.ɵɵelementStart(4, "div", 4, 5);
        i0.ɵɵlistener("onClickSetting", function IframePanelComponent_Template_div_onClickSetting_4_listener() { return ctx.openWidgetSetting(); })("onClickClose", function IframePanelComponent_Template_div_onClickClose_4_listener($event) { return ctx.closePanel($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 6);
        i0.ɵɵlistener("click", function IframePanelComponent_Template_div_click_6_listener($event) { return ctx._contentClick($event); });
        i0.ɵɵtemplate(7, IframePanelComponent_iframe_7_Template, 3, 4, "iframe", 7);
        i0.ɵɵtemplate(8, IframePanelComponent_ng_container_8_Template, 3, 1, "ng-container", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 9);
        i0.ɵɵlistener("mousedown", function IframePanelComponent_Template_div_mousedown_9_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "height", directionY: "top" }); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "div", 10);
        i0.ɵɵlistener("mousedown", function IframePanelComponent_Template_div_mousedown_10_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "height", directionY: "bottom" }); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "div", 11);
        i0.ɵɵlistener("mousedown", function IframePanelComponent_Template_div_mousedown_11_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "width", directionX: "left" }); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "div", 12);
        i0.ɵɵlistener("mousedown", function IframePanelComponent_Template_div_mousedown_12_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "width", directionX: "right" }); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "div", 13);
        i0.ɵɵlistener("mousedown", function IframePanelComponent_Template_div_mousedown_13_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "both", directionX: "left", directionY: "top" }); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "div", 14);
        i0.ɵɵlistener("mousedown", function IframePanelComponent_Template_div_mousedown_14_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "both", directionX: "right", directionY: "top" }); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "div", 15);
        i0.ɵɵlistener("mousedown", function IframePanelComponent_Template_div_mousedown_15_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "both", directionX: "left", directionY: "bottom" }); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "div", 16);
        i0.ɵɵlistener("mousedown", function IframePanelComponent_Template_div_mousedown_16_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "both", directionX: "right", directionY: "bottom" }); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵpropertyInterpolate("id", ctx.options.id);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(8, _c1, ctx.options.showTitle === false))("ngStyle", ctx.position);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("hasIcon", false)("options", ctx.options)("windowState", ctx.windowState);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.isShowIframe);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.isShowIframe);
    } }, directives: [i1.NgClass, i1.NgStyle, i2.PanelTitleBarComponent, i1.NgIf], pipes: [i3.SafeUrlPipe], styles: [".iframe_content[_ngcontent-%COMP%]{width:100%;height:100%;border:0}"] });
IframePanelComponent = __decorate([
    ComponentRegister({
        uri: 'epsgis-iframe-panel',
        path: "components/ex-panels/iframe-panel"
    })
], IframePanelComponent);
export { IframePanelComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IframePanelComponent, [{
        type: Component,
        args: [{
                selector: 'epsgis-iframe-panel',
                templateUrl: './iframe-panel.component.html',
                styleUrls: ['./iframe-panel.component.scss'],
            }]
    }], function () { return [{ type: i0.Renderer2, decorators: [{
                type: Optional
            }] }, { type: i0.ChangeDetectorRef, decorators: [{
                type: Optional
            }] }]; }, { iframeEl: [{
            type: ViewChild,
            args: ["iframeContent", { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWZyYW1lLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Vwc2dpcy9jb21wb25lbnRzL2V4LXBhbmVscy9pZnJhbWUtcGFuZWwvaWZyYW1lLXBhbmVsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Vwc2dpcy9jb21wb25lbnRzL2V4LXBhbmVscy9pZnJhbWUtcGFuZWwvaWZyYW1lLXBhbmVsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixRQUFRLEVBQUUsU0FBUyxFQUFpQyxNQUFNLGVBQWUsQ0FBQztBQUVqSCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saURBQWlELENBQUM7Ozs7Ozs7SUMwQmhGLGlDQUE0Rzs7OztJQUFoRSwwRkFBK0I7OztJQUMzRSx1Q0FBNkM7SUFDM0MsWUFDRjtJQUFBLDBCQUFlOzs7SUFEYixlQUNGO0lBREUsMkNBQ0Y7OztJRGxCUyxvQkFBb0IsU0FBcEIsb0JBQXFCLFNBQVEsa0JBQWtCO0lBRzFELFlBQStCLE9BQWtCLEVBQXFCLEdBQXNCO1FBQzFGLEtBQUssQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFEUyxZQUFPLEdBQVAsT0FBTyxDQUFXO1FBQXFCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBRzVGLFFBQUcsR0FBVyxFQUFFLENBQUM7UUFDakIsaUJBQVksR0FBWSxLQUFLLENBQUM7SUFGOUIsQ0FBQztJQUlELFFBQVE7UUFFTixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUM1QixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQUNELGVBQWU7UUFDYixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7SUFDbEMsQ0FBQztDQUNGLENBQUE7d0ZBckJZLG9CQUFvQjt5REFBcEIsb0JBQW9COzs7Ozs7UUNmakMsNEJBRU07UUFDTixpQ0FDdUI7UUFDckIsaUNBQzBFO1FBQTNFLGdIQUFrQix1QkFBbUIsSUFBQyxxR0FBaUIsc0JBQWtCLElBQW5DO1FBQXFDLGlCQUFNO1FBdUJoRiw4QkFBOEQ7UUFBakMsb0dBQVMseUJBQXFCLElBQUU7UUFDM0QsMkVBQTRHO1FBQzVHLHVGQUVlO1FBQ2pCLGlCQUFNO1FBRU4sOEJBQ2tGO1FBQWhGLDRHQUFhLDRDQUFxQyxRQUFRLGNBQVksS0FBSyxHQUFFLElBQUU7UUFBQyxpQkFBTTtRQUN4RixnQ0FDcUY7UUFBbkYsNkdBQWEsNENBQXFDLFFBQVEsY0FBWSxRQUFRLEdBQUUsSUFBRTtRQUFDLGlCQUFNO1FBQzNGLGdDQUNrRjtRQUFoRiw2R0FBYSw0Q0FBcUMsT0FBTyxjQUFZLE1BQU0sR0FBRSxJQUFFO1FBQUMsaUJBQU07UUFDeEYsZ0NBQ21GO1FBQWpGLDZHQUFhLDRDQUFxQyxPQUFPLGNBQVksT0FBTyxHQUFFLElBQUU7UUFBQyxpQkFBTTtRQUN6RixnQ0FDa0c7UUFBaEcsNkdBQWEsNENBQXFDLE1BQU0sY0FBWSxNQUFNLGNBQVksS0FBSyxHQUFFLElBQUU7UUFBQyxpQkFBTTtRQUN4RyxnQ0FDbUc7UUFBakcsNkdBQWEsNENBQXFDLE1BQU0sY0FBWSxPQUFPLGNBQVksS0FBSyxHQUFFLElBQUU7UUFBQyxpQkFBTTtRQUN6RyxnQ0FDcUc7UUFBbkcsNkdBQWEsNENBQXFDLE1BQU0sY0FBWSxNQUFNLGNBQVksUUFBUSxHQUFFLElBQUU7UUFBQyxpQkFBTTtRQUMzRyxnQ0FDc0c7UUFBcEcsNkdBQWEsNENBQXFDLE1BQU0sY0FBWSxPQUFPLGNBQVksUUFBUSxHQUFFLElBQUU7UUFBQyxpQkFBTTtRQUM5RyxpQkFBTTs7UUFqRHdCLGVBQW1CO1FBQW5CLDhDQUFtQjtRQUFDLHFGQUFpRCx5QkFBQTtRQUVILGVBQWlCO1FBQWpCLCtCQUFpQix3QkFBQSxnQ0FBQTtRQXlCcEcsZUFBa0I7UUFBbEIsdUNBQWtCO1FBQ0gsZUFBbUI7UUFBbkIsd0NBQW1COztBRGhCbEMsb0JBQW9CO0lBVGhDLGlCQUFpQixDQUFDO1FBQ2pCLEdBQUcsRUFBRSxxQkFBcUI7UUFDMUIsSUFBSSxFQUFFLG1DQUFtQztLQUMxQyxDQUFDO0dBTVcsb0JBQW9CLENBcUJoQztTQXJCWSxvQkFBb0I7dUZBQXBCLG9CQUFvQjtjQUxoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7YUFDN0M7O3NCQUljLFFBQVE7O3NCQUErQixRQUFRO3dCQUZkLFFBQVE7a0JBQXJELFNBQVM7bUJBQUMsZUFBZSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBSZW5kZXJlcjIsIE9wdGlvbmFsLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBCYXNlUGFuZWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9iYXNlLXBhbmVsL2Jhc2UtcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7IFdpZGdldFN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2Jhc2Utd2lkZ2V0JztcbmltcG9ydCB7IENvbXBvbmVudFJlZ2lzdGVyIH0gZnJvbSAnLi4vLi4vLi4vZGVjb3JhdG9yL2NvbXBvbmVudC1yZWdpc3Rlci5kZWNvcmF0b3InO1xuXG5AQ29tcG9uZW50UmVnaXN0ZXIoe1xuICB1cmk6ICdlcHNnaXMtaWZyYW1lLXBhbmVsJyxcbiAgcGF0aDogXCJjb21wb25lbnRzL2V4LXBhbmVscy9pZnJhbWUtcGFuZWxcIlxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Vwc2dpcy1pZnJhbWUtcGFuZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vaWZyYW1lLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaWZyYW1lLXBhbmVsLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIElmcmFtZVBhbmVsQ29tcG9uZW50IGV4dGVuZHMgQmFzZVBhbmVsQ29tcG9uZW50IHtcbiAgQFZpZXdDaGlsZChcImlmcmFtZUNvbnRlbnRcIiwgeyBzdGF0aWM6IHRydWUgfSkgaWZyYW1lRWw6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHVibGljIF9yZW5kZXI6IFJlbmRlcmVyMiwgQE9wdGlvbmFsKCkgcHVibGljIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBzdXBlcihfcmVuZGVyLCBjZHIpO1xuICB9XG4gIHVybDogc3RyaW5nID0gXCJcIjtcbiAgaXNTaG93SWZyYW1lOiBib29sZWFuID0gZmFsc2U7XG4gIFxuICBuZ09uSW5pdCgpIHtcblxuICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gICAgdGhpcy51cmwgPSB0aGlzLm9wdGlvbnMudXJsO1xuICAgIGlmICh0aGlzLm9wdGlvbnMudXJsKSB7XG4gICAgICB0aGlzLmlzU2hvd0lmcmFtZSA9IHRydWU7XG4gICAgfVxuICB9XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnN0YXJ0dXAoKTtcbiAgICB0aGlzLnN0YXRlID0gV2lkZ2V0U3RhdGUub3BlbmVkO1xuICB9XG59IiwiPGRpdiBjbGFzcz1cInNzcGFuZWxfb3ZlcmxheVwiICNzc3BhbmVsX292ZXJsYXkgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPlxuXG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJzc3BhbmVsXCIgI3NzcGFuZWwgaWQ9XCJ7e29wdGlvbnMuaWR9fVwiIFtuZ0NsYXNzXT1cInsnbm90aXRsZSc6b3B0aW9ucy5zaG93VGl0bGU9PT1mYWxzZX1cIlxuICBbbmdTdHlsZV09XCJwb3NpdGlvblwiPlxuICA8ZGl2IHNzcGFuZWwtdGl0bGViYXIgICNzc3BhbmVsX3RpdGxlYmFyICBjbGFzcz1cInNzcGFuZWxfdGl0bGViYXIgc3NwYW5lbF90aXRsZWJhcl9kcmFnZ2FibGVcIiBbaGFzSWNvbl09XCJmYWxzZVwiIFtvcHRpb25zXT1cIm9wdGlvbnNcIiBbd2luZG93U3RhdGVdPVwid2luZG93U3RhdGVcIlxuIChvbkNsaWNrU2V0dGluZyk9XCJvcGVuV2lkZ2V0U2V0dGluZygpXCIgKG9uQ2xpY2tDbG9zZSk9XCJjbG9zZVBhbmVsKCRldmVudClcIj48L2Rpdj5cbiAgXG4gIDwhLS0gPGRpdiBjbGFzcz1cInNzcGFuZWxfdGl0bGViYXJcIiAjc3NwYW5lbF90aXRsZWJhciAobW91c2Vkb3duKT1cIl90aXRsZWJhcl9Nb3VzZURvd24oJGV2ZW50KTtcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwicGFuZWxJY29uXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaWNvblwiPlxuICAgICAgICA8aW1nICpuZ0lmPVwicGFuZWxJY29uLmlzU2hvd0ltZ1wiIFtzcmNdPVwicGFuZWxJY29uLmljb25cIj5cbiAgICAgICAgPGkgKm5nSWY9XCIhcGFuZWxJY29uLmlzU2hvd0ltZ1wiIG56LWljb24gW256SWNvbmZvbnRdPVwicGFuZWxJY29uLmljb25cIj48L2k+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8ZGl2IGNsYXNzPVwic3NwYW5lbF90aXRsZWJhcl90ZXh0XCI+PHNwYW4gY2xhc3M9XCJzc3BhbmVsX3RpdGxlYmFyX3RleHRfc3BhblwiPnt7b3B0aW9ucy50aXRsZX19PC9zcGFuPjwvZGl2PlxuXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm9wdGlvbnMuYnV0dG9uQ2xvc2VcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzc3BhbmVsX3RpdGxlYmFyX2J1dHRvbiBzc3BhbmVsX3RpdGxlYmFyX2J1dHRvbl9jbG9zZVwiIHRpdGxlPVwie3tvcHRpb25zLmJ1dHRvbkNsb3NlVGV4dH19XCJcbiAgICAgICAgKGNsaWNrKT1cImNsb3NlUGFuZWwoJGV2ZW50KTtcIj5cbiAgICAgICAgPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXG4gICAgICAgICAgdmlld0JveD1cIjAgMCAxMCAxMFwiIGhlaWdodD1cIjEwMCVcIiB3aWR0aD1cIjEwMCVcIj5cbiAgICAgICAgICA8Zz5cbiAgICAgICAgICAgIDxsaW5lIHkyPVwiMFwiIHgyPVwiMTBcIiB5MT1cIjEwXCIgeDE9XCIwXCI+PC9saW5lPlxuICAgICAgICAgICAgPGxpbmUgeTI9XCIxMFwiIHgyPVwiMTBcIiB5MT1cIjBcIiB4MT1cIjBcIj48L2xpbmU+XG4gICAgICAgICAgPC9nPlxuICAgICAgICA8L3N2Zz48L2Rpdj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9kaXY+IC0tPlxuICA8ZGl2IGNsYXNzPVwic3NwYW5lbF9jb250ZW50XCIgKGNsaWNrKT1cIl9jb250ZW50Q2xpY2soJGV2ZW50KTtcIj5cbiAgICA8aWZyYW1lICpuZ0lmPVwiaXNTaG93SWZyYW1lXCIgI2lmcmFtZUNvbnRlbnQgW3NyY109XCJ1cmwgfCBzYWZldXJsIDonaWZyYW1lJ1wiIGNsYXNzPVwiaWZyYW1lX2NvbnRlbnRcIj48L2lmcmFtZT5cbiAgICA8bmctY29udGFpbmVyICNjb250ZW50ICpuZ0lmPVwiIWlzU2hvd0lmcmFtZVwiPlxuICAgICAge3t1cmx9fVxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwic3NwYW5lbF9yZXNpemVyIHNzcGFuZWxfcmVzaXplcl90b3BcIlxuICAgIChtb3VzZWRvd24pPVwiX3Jlc2l6ZXJfTW91c2VEb3duKCRldmVudCx7ZGltZW5zaW9uOidoZWlnaHQnLGRpcmVjdGlvblk6J3RvcCd9KTtcIj48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInNzcGFuZWxfcmVzaXplciBzc3BhbmVsX3Jlc2l6ZXJfYm90dG9tXCJcbiAgICAobW91c2Vkb3duKT1cIl9yZXNpemVyX01vdXNlRG93bigkZXZlbnQse2RpbWVuc2lvbjonaGVpZ2h0JyxkaXJlY3Rpb25ZOidib3R0b20nfSk7XCI+PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJzc3BhbmVsX3Jlc2l6ZXIgc3NwYW5lbF9yZXNpemVyX2xlZnRcIlxuICAgIChtb3VzZWRvd24pPVwiX3Jlc2l6ZXJfTW91c2VEb3duKCRldmVudCx7ZGltZW5zaW9uOid3aWR0aCcsZGlyZWN0aW9uWDonbGVmdCd9KTtcIj48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInNzcGFuZWxfcmVzaXplciBzc3BhbmVsX3Jlc2l6ZXJfcmlnaHRcIlxuICAgIChtb3VzZWRvd24pPVwiX3Jlc2l6ZXJfTW91c2VEb3duKCRldmVudCx7ZGltZW5zaW9uOid3aWR0aCcsZGlyZWN0aW9uWDoncmlnaHQnfSk7XCI+PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJzc3BhbmVsX3Jlc2l6ZXIgc3NwYW5lbF9yZXNpemVyX3RvcGxlZnRcIlxuICAgIChtb3VzZWRvd24pPVwiX3Jlc2l6ZXJfTW91c2VEb3duKCRldmVudCx7ZGltZW5zaW9uOidib3RoJyxkaXJlY3Rpb25YOidsZWZ0JyxkaXJlY3Rpb25ZOid0b3AnfSk7XCI+PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJzc3BhbmVsX3Jlc2l6ZXIgc3NwYW5lbF9yZXNpemVyX3RvcHJpZ2h0XCJcbiAgICAobW91c2Vkb3duKT1cIl9yZXNpemVyX01vdXNlRG93bigkZXZlbnQse2RpbWVuc2lvbjonYm90aCcsZGlyZWN0aW9uWDoncmlnaHQnLGRpcmVjdGlvblk6J3RvcCd9KTtcIj48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInNzcGFuZWxfcmVzaXplciBzc3BhbmVsX3Jlc2l6ZXJfYm90dG9tbGVmdFwiXG4gICAgKG1vdXNlZG93bik9XCJfcmVzaXplcl9Nb3VzZURvd24oJGV2ZW50LHtkaW1lbnNpb246J2JvdGgnLGRpcmVjdGlvblg6J2xlZnQnLGRpcmVjdGlvblk6J2JvdHRvbSd9KTtcIj48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInNzcGFuZWxfcmVzaXplciBzc3BhbmVsX3Jlc2l6ZXJfYm90dG9tcmlnaHRcIlxuICAgIChtb3VzZWRvd24pPVwiX3Jlc2l6ZXJfTW91c2VEb3duKCRldmVudCx7ZGltZW5zaW9uOidib3RoJyxkaXJlY3Rpb25YOidyaWdodCcsZGlyZWN0aW9uWTonYm90dG9tJ30pO1wiPjwvZGl2PlxuPC9kaXY+Il19