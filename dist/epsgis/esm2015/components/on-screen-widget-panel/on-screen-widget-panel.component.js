import { __decorate } from "tslib";
import { BasePanelComponent } from '../base-panel/base-panel.component';
import { Component, Optional } from '@angular/core';
import { ComponentRegister } from '../../decorator/component-register.decorator';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../base-panel/panel-titlebar.component";
function OnScreenWidgetPanelComponent_ng_template_7_Template(rf, ctx) { }
let OnScreenWidgetPanelComponent = class OnScreenWidgetPanelComponent extends BasePanelComponent {
    constructor(_render, cdr) {
        super(_render, cdr);
        this.cdr = cdr;
    }
    ngOnInit() { super.ngOnInit(); }
    ngAfterViewInit() {
        super.ngAfterViewInit();
    }
};
OnScreenWidgetPanelComponent.ɵfac = function OnScreenWidgetPanelComponent_Factory(t) { return new (t || OnScreenWidgetPanelComponent)(i0.ɵɵdirectiveInject(i0.Renderer2, 8), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef, 8)); };
OnScreenWidgetPanelComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OnScreenWidgetPanelComponent, selectors: [["epsgis-on-screen-widget-panel"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 18, vars: 5, consts: [[1, "sspanel_overlay"], ["sspanel_overlay", ""], [1, "sspanel", 3, "id", "ngStyle"], ["sspanel", ""], ["sspanel-titlebar", "", 1, "sspanel_titlebar", "sspanel_titlebar_draggable", 3, "hasIcon", "options", "windowState", "onMouseDown", "onClickSetting", "onClickCollapse", "onClickMaximize", "onClickClose"], ["sspanel_titlebar", ""], [1, "sspanel_content", 3, "click"], ["widget_content", ""], [1, "sspanel_resizer", "sspanel_resizer_top", 3, "mousedown"], [1, "sspanel_resizer", "sspanel_resizer_bottom", 3, "mousedown"], [1, "sspanel_resizer", "sspanel_resizer_left", 3, "mousedown"], [1, "sspanel_resizer", "sspanel_resizer_right", 3, "mousedown"], [1, "sspanel_resizer", "sspanel_resizer_topleft", 3, "mousedown"], [1, "sspanel_resizer", "sspanel_resizer_topright", 3, "mousedown"], [1, "sspanel_resizer", "sspanel_resizer_bottomleft", 3, "mousedown"], [1, "sspanel_resizer", "sspanel_resizer_bottomright", 3, "mousedown"], [1, "sspanel_minplaceholder"]], template: function OnScreenWidgetPanelComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0, 1);
        i0.ɵɵelementStart(2, "div", 2, 3);
        i0.ɵɵelementStart(4, "div", 4, 5);
        i0.ɵɵlistener("onMouseDown", function OnScreenWidgetPanelComponent_Template_div_onMouseDown_4_listener($event) { return ctx._titlebar_MouseDown($event); })("onClickSetting", function OnScreenWidgetPanelComponent_Template_div_onClickSetting_4_listener() { return ctx.openWidgetSetting(); })("onClickCollapse", function OnScreenWidgetPanelComponent_Template_div_onClickCollapse_4_listener($event) { return ctx._buttonCollapse_Click($event); })("onClickMaximize", function OnScreenWidgetPanelComponent_Template_div_onClickMaximize_4_listener($event) { return ctx._buttonMax_Click($event); })("onClickClose", function OnScreenWidgetPanelComponent_Template_div_onClickClose_4_listener($event) { return ctx.closePanel($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 6);
        i0.ɵɵlistener("click", function OnScreenWidgetPanelComponent_Template_div_click_6_listener($event) { return ctx._contentClick($event); });
        i0.ɵɵtemplate(7, OnScreenWidgetPanelComponent_ng_template_7_Template, 0, 0, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 8);
        i0.ɵɵlistener("mousedown", function OnScreenWidgetPanelComponent_Template_div_mousedown_9_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "height", directionY: "top" }); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "div", 9);
        i0.ɵɵlistener("mousedown", function OnScreenWidgetPanelComponent_Template_div_mousedown_10_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "height", directionY: "bottom" }); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "div", 10);
        i0.ɵɵlistener("mousedown", function OnScreenWidgetPanelComponent_Template_div_mousedown_11_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "width", directionX: "left" }); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "div", 11);
        i0.ɵɵlistener("mousedown", function OnScreenWidgetPanelComponent_Template_div_mousedown_12_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "width", directionX: "right" }); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "div", 12);
        i0.ɵɵlistener("mousedown", function OnScreenWidgetPanelComponent_Template_div_mousedown_13_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "both", directionX: "left", directionY: "top" }); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "div", 13);
        i0.ɵɵlistener("mousedown", function OnScreenWidgetPanelComponent_Template_div_mousedown_14_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "both", directionX: "right", directionY: "top" }); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "div", 14);
        i0.ɵɵlistener("mousedown", function OnScreenWidgetPanelComponent_Template_div_mousedown_15_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "both", directionX: "left", directionY: "bottom" }); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "div", 15);
        i0.ɵɵlistener("mousedown", function OnScreenWidgetPanelComponent_Template_div_mousedown_16_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "both", directionX: "right", directionY: "bottom" }); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(17, "div", 16);
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵpropertyInterpolate("id", ctx.options.id);
        i0.ɵɵproperty("ngStyle", ctx.position);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("hasIcon", false)("options", ctx.options)("windowState", ctx.windowState);
    } }, directives: [i1.NgStyle, i2.PanelTitleBarComponent], styles: [""] });
OnScreenWidgetPanelComponent = __decorate([
    ComponentRegister({
        uri: "epsgis-on-screen-widget-panel",
        path: "components/on-screen-widget-panel"
    })
], OnScreenWidgetPanelComponent);
export { OnScreenWidgetPanelComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OnScreenWidgetPanelComponent, [{
        type: Component,
        args: [{
                selector: 'epsgis-on-screen-widget-panel',
                templateUrl: './on-screen-widget-panel.component.html',
                styleUrls: ['./on-screen-widget-panel.component.scss']
            }]
    }], function () { return [{ type: i0.Renderer2, decorators: [{
                type: Optional
            }] }, { type: i0.ChangeDetectorRef, decorators: [{
                type: Optional
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib24tc2NyZWVuLXdpZGdldC1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9lcHNnaXMvY29tcG9uZW50cy9vbi1zY3JlZW4td2lkZ2V0LXBhbmVsL29uLXNjcmVlbi13aWRnZXQtcGFuZWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZXBzZ2lzL2NvbXBvbmVudHMvb24tc2NyZWVuLXdpZGdldC1wYW5lbC9vbi1zY3JlZW4td2lkZ2V0LXBhbmVsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsU0FBUyxFQUFxQixRQUFRLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzFGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDOzs7OztJQW1CcEUsNEJBQTRCLFNBQTVCLDRCQUE2QixTQUFRLGtCQUFrQjtJQUVsRSxZQUF3QixPQUFrQixFQUFxQixHQUFzQjtRQUNuRixLQUFLLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRHlDLFFBQUcsR0FBSCxHQUFHLENBQW1CO0lBRXJGLENBQUM7SUFDRCxRQUFRLEtBQUssS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoQyxlQUFlO1FBQ2IsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzFCLENBQUM7Q0FDRixDQUFBO3dHQVRZLDRCQUE0QjtpRUFBNUIsNEJBQTRCO1FDckJ6QyxpQ0FBOEM7UUFDNUMsaUNBQXVFO1FBTXJFLGlDQUdzQztRQUZwQyx3SEFBZSwrQkFBMkIsSUFBQywyR0FBbUIsdUJBQW1CLElBQXRDLG1IQUN4QixpQ0FBNkIsSUFETCxtSEFDMEIsNEJBQXdCLElBRGxELDZHQUUzQixzQkFBa0IsSUFGUztRQUVQLGlCQUFNO1FBQzVDLDhCQUE4RDtRQUFqQyw0R0FBUyx5QkFBcUIsSUFBRTtRQUMzRCw4SEFBMkM7UUFDN0MsaUJBQU07UUFDTiw4QkFDa0Y7UUFBaEYsb0hBQWEsNENBQXFDLFFBQVEsY0FBWSxLQUFLLEdBQUUsSUFBRTtRQUFDLGlCQUFNO1FBQ3hGLCtCQUNxRjtRQUFuRixxSEFBYSw0Q0FBcUMsUUFBUSxjQUFZLFFBQVEsR0FBRSxJQUFFO1FBQUMsaUJBQU07UUFDM0YsZ0NBQ2tGO1FBQWhGLHFIQUFhLDRDQUFxQyxPQUFPLGNBQVksTUFBTSxHQUFFLElBQUU7UUFBQyxpQkFBTTtRQUN4RixnQ0FDbUY7UUFBakYscUhBQWEsNENBQXFDLE9BQU8sY0FBWSxPQUFPLEdBQUUsSUFBRTtRQUFDLGlCQUFNO1FBQ3pGLGdDQUNrRztRQUFoRyxxSEFBYSw0Q0FBcUMsTUFBTSxjQUFZLE1BQU0sY0FBWSxLQUFLLEdBQUUsSUFBRTtRQUFDLGlCQUFNO1FBQ3hHLGdDQUNtRztRQUFqRyxxSEFBYSw0Q0FBcUMsTUFBTSxjQUFZLE9BQU8sY0FBWSxLQUFLLEdBQUUsSUFBRTtRQUFDLGlCQUFNO1FBQ3pHLGdDQUNxRztRQUFuRyxxSEFBYSw0Q0FBcUMsTUFBTSxjQUFZLE1BQU0sY0FBWSxRQUFRLEdBQUUsSUFBRTtRQUFDLGlCQUFNO1FBQzNHLGdDQUNzRztRQUFwRyxxSEFBYSw0Q0FBcUMsTUFBTSxjQUFZLE9BQU8sY0FBWSxRQUFRLEdBQUUsSUFBRTtRQUFDLGlCQUFNO1FBQzlHLGlCQUFNO1FBQ1IsaUJBQU07UUFDTiwyQkFBMEM7O1FBL0JWLGVBQW1CO1FBQW5CLDhDQUFtQjtRQUFDLHNDQUFvQjtRQU0wQixlQUFpQjtRQUFqQiwrQkFBaUIsd0JBQUEsZ0NBQUE7O0FEY3RHLDRCQUE0QjtJQWR4QyxpQkFBaUIsQ0FBQztRQUNqQixHQUFHLEVBQUUsK0JBQStCO1FBQ3BDLElBQUksRUFBRSxtQ0FBbUM7S0FDMUMsQ0FBQztHQVdXLDRCQUE0QixDQVN4QztTQVRZLDRCQUE0Qjt1RkFBNUIsNEJBQTRCO2NBVnhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsK0JBQStCO2dCQUN6QyxXQUFXLEVBQUUseUNBQXlDO2dCQUN0RCxTQUFTLEVBQUUsQ0FBQyx5Q0FBeUMsQ0FBQzthQU12RDs7c0JBR2MsUUFBUTs7c0JBQXdCLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlUGFuZWxDb21wb25lbnQgfSBmcm9tICcuLi9iYXNlLXBhbmVsL2Jhc2UtcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBSZW5kZXJlcjIsIE9wdGlvbmFsLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50UmVnaXN0ZXIgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3IvY29tcG9uZW50LXJlZ2lzdGVyLmRlY29yYXRvcic7XG4vLyBpbXBvcnQge3RyaWdnZXIsIHN0YXRlLCBzdHlsZSwgYW5pbWF0ZSwgdHJhbnNpdGlvbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG4vKipcbiAqIGNyZWF0ZSBieSBydWlyIDE5MTAxNCAgT25TY3JlZW5XaWRnZXRQYW5lbC5qc1xuICovXG5AQ29tcG9uZW50UmVnaXN0ZXIoe1xuICB1cmk6IFwiZXBzZ2lzLW9uLXNjcmVlbi13aWRnZXQtcGFuZWxcIixcbiAgcGF0aDogXCJjb21wb25lbnRzL29uLXNjcmVlbi13aWRnZXQtcGFuZWxcIlxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Vwc2dpcy1vbi1zY3JlZW4td2lkZ2V0LXBhbmVsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL29uLXNjcmVlbi13aWRnZXQtcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9vbi1zY3JlZW4td2lkZ2V0LXBhbmVsLmNvbXBvbmVudC5zY3NzJ11cbiAgLy8gLGFuaW1hdGlvbnM6W1xuICAvLyAgIHRyaWdnZXIoXCJwYW5lbHJlc2l6ZVwiLFtcbiAgLy8gICAgIHRyYW5zaXRpb24oXCIqID0+ICpcIixhbmltYXRlKDUwMCkpXG4gIC8vICAgXSlcbiAgLy8gXVxufSlcbmV4cG9ydCBjbGFzcyBPblNjcmVlbldpZGdldFBhbmVsQ29tcG9uZW50IGV4dGVuZHMgQmFzZVBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBfcmVuZGVyOiBSZW5kZXJlcjIsIEBPcHRpb25hbCgpIHB1YmxpYyBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoX3JlbmRlciwgY2RyKTtcbiAgfVxuICBuZ09uSW5pdCgpIHsgc3VwZXIubmdPbkluaXQoKTsgfVxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgc3VwZXIubmdBZnRlclZpZXdJbml0KCk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJzc3BhbmVsX292ZXJsYXlcIiAjc3NwYW5lbF9vdmVybGF5PlxuICA8ZGl2IGNsYXNzPVwic3NwYW5lbFwiICNzc3BhbmVsIGlkPVwie3tvcHRpb25zLmlkfX1cIiBbbmdTdHlsZV09XCJwb3NpdGlvblwiPlxuICAgIDwhLS0gPGVwc2dpcy1wYW5lbC10aXRsZWJhciAjc3NwYW5lbF90aXRsZWJhciBbaGFzSWNvbl09XCJmYWxzZVwiIFtvcHRpb25zXT1cIm9wdGlvbnNcIiBbd2luZG93U3RhdGVdPVwid2luZG93U3RhdGVcIlxuICAgICAgKG9uTW91c2VEb3duKT1cIl90aXRsZWJhcl9Nb3VzZURvd24oJGV2ZW50KVwiIChvbkNsaWNrU2V0dGluZyk9XCJvcGVuV2lkZ2V0U2V0dGluZygpXCJcbiAgICAgIChvbkNsaWNrQ29sbGFwc2UpPVwiX2J1dHRvbkNvbGxhcHNlX0NsaWNrKCRldmVudClcIiAob25DbGlja01heGltaXplKT1cIl9idXR0b25NYXhfQ2xpY2soJGV2ZW50KVwiXG4gICAgICAob25DbGlja0Nsb3NlKT1cImNsb3NlUGFuZWwoJGV2ZW50KVwiPlxuICAgIDwvZXBzZ2lzLXBhbmVsLXRpdGxlYmFyPiAtLT5cbiAgICA8ZGl2IHNzcGFuZWwtdGl0bGViYXIgICNzc3BhbmVsX3RpdGxlYmFyICBjbGFzcz1cInNzcGFuZWxfdGl0bGViYXIgc3NwYW5lbF90aXRsZWJhcl9kcmFnZ2FibGVcIiBbaGFzSWNvbl09XCJmYWxzZVwiIFtvcHRpb25zXT1cIm9wdGlvbnNcIiBbd2luZG93U3RhdGVdPVwid2luZG93U3RhdGVcIlxuICAgICAgKG9uTW91c2VEb3duKT1cIl90aXRsZWJhcl9Nb3VzZURvd24oJGV2ZW50KVwiIChvbkNsaWNrU2V0dGluZyk9XCJvcGVuV2lkZ2V0U2V0dGluZygpXCJcbiAgICAgIChvbkNsaWNrQ29sbGFwc2UpPVwiX2J1dHRvbkNvbGxhcHNlX0NsaWNrKCRldmVudClcIiAob25DbGlja01heGltaXplKT1cIl9idXR0b25NYXhfQ2xpY2soJGV2ZW50KVwiXG4gICAgICAob25DbGlja0Nsb3NlKT1cImNsb3NlUGFuZWwoJGV2ZW50KVwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJzc3BhbmVsX2NvbnRlbnRcIiAoY2xpY2spPVwiX2NvbnRlbnRDbGljaygkZXZlbnQpO1wiPlxuICAgICAgPG5nLXRlbXBsYXRlICN3aWRnZXRfY29udGVudD48L25nLXRlbXBsYXRlPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJzc3BhbmVsX3Jlc2l6ZXIgc3NwYW5lbF9yZXNpemVyX3RvcFwiXG4gICAgICAobW91c2Vkb3duKT1cIl9yZXNpemVyX01vdXNlRG93bigkZXZlbnQse2RpbWVuc2lvbjonaGVpZ2h0JyxkaXJlY3Rpb25ZOid0b3AnfSk7XCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInNzcGFuZWxfcmVzaXplciBzc3BhbmVsX3Jlc2l6ZXJfYm90dG9tXCJcbiAgICAgIChtb3VzZWRvd24pPVwiX3Jlc2l6ZXJfTW91c2VEb3duKCRldmVudCx7ZGltZW5zaW9uOidoZWlnaHQnLGRpcmVjdGlvblk6J2JvdHRvbSd9KTtcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwic3NwYW5lbF9yZXNpemVyIHNzcGFuZWxfcmVzaXplcl9sZWZ0XCJcbiAgICAgIChtb3VzZWRvd24pPVwiX3Jlc2l6ZXJfTW91c2VEb3duKCRldmVudCx7ZGltZW5zaW9uOid3aWR0aCcsZGlyZWN0aW9uWDonbGVmdCd9KTtcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwic3NwYW5lbF9yZXNpemVyIHNzcGFuZWxfcmVzaXplcl9yaWdodFwiXG4gICAgICAobW91c2Vkb3duKT1cIl9yZXNpemVyX01vdXNlRG93bigkZXZlbnQse2RpbWVuc2lvbjond2lkdGgnLGRpcmVjdGlvblg6J3JpZ2h0J30pO1wiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJzc3BhbmVsX3Jlc2l6ZXIgc3NwYW5lbF9yZXNpemVyX3RvcGxlZnRcIlxuICAgICAgKG1vdXNlZG93bik9XCJfcmVzaXplcl9Nb3VzZURvd24oJGV2ZW50LHtkaW1lbnNpb246J2JvdGgnLGRpcmVjdGlvblg6J2xlZnQnLGRpcmVjdGlvblk6J3RvcCd9KTtcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwic3NwYW5lbF9yZXNpemVyIHNzcGFuZWxfcmVzaXplcl90b3ByaWdodFwiXG4gICAgICAobW91c2Vkb3duKT1cIl9yZXNpemVyX01vdXNlRG93bigkZXZlbnQse2RpbWVuc2lvbjonYm90aCcsZGlyZWN0aW9uWDoncmlnaHQnLGRpcmVjdGlvblk6J3RvcCd9KTtcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwic3NwYW5lbF9yZXNpemVyIHNzcGFuZWxfcmVzaXplcl9ib3R0b21sZWZ0XCJcbiAgICAgIChtb3VzZWRvd24pPVwiX3Jlc2l6ZXJfTW91c2VEb3duKCRldmVudCx7ZGltZW5zaW9uOidib3RoJyxkaXJlY3Rpb25YOidsZWZ0JyxkaXJlY3Rpb25ZOidib3R0b20nfSk7XCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInNzcGFuZWxfcmVzaXplciBzc3BhbmVsX3Jlc2l6ZXJfYm90dG9tcmlnaHRcIlxuICAgICAgKG1vdXNlZG93bik9XCJfcmVzaXplcl9Nb3VzZURvd24oJGV2ZW50LHtkaW1lbnNpb246J2JvdGgnLGRpcmVjdGlvblg6J3JpZ2h0JyxkaXJlY3Rpb25ZOidib3R0b20nfSk7XCI+PC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwic3NwYW5lbF9taW5wbGFjZWhvbGRlclwiPjwvZGl2PiJdfQ==