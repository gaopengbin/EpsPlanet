import { __decorate } from "tslib";
import { Component, Optional } from '@angular/core';
import * as _ from 'lodash';
import { ComponentRegister } from '../../../decorator/component-register.decorator';
import { PanelDockMode } from '../../../models/base-panel';
import { BaseDockablePanelComponent } from '../base-dockable-panel';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../base-panel/panel-titlebar.component";
function DockablePanelAtLeftComponent_ng_template_7_Template(rf, ctx) { }
const _c0 = function (a0) { return { "notitle": a0 }; };
const _c1 = function (a0) { return { "display": a0 }; };
let DockablePanelAtLeftComponent = class DockablePanelAtLeftComponent extends BaseDockablePanelComponent {
    constructor(_render, cdr) {
        super(_render, cdr);
        this._render = _render;
        this.cdr = cdr;
        this.dockMode = PanelDockMode.left;
    }
    ngOnInit() {
        super.ngOnInit();
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    setOptions(options) {
        options.modal = false;
        options.draggable = false;
        options.buttonClose = false;
        options.buttonCollapse = false;
        options.buttonMaximize = false;
        options.buttonMinimize = false;
        options.centerCollapse = true;
        options.dockSide = PanelDockMode.left;
        super.setOptions(options);
    }
    _setPCPosition() {
        this.widgetConfig.position = _.merge(this.widgetConfig.position, {
            left: 0,
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
DockablePanelAtLeftComponent.ɵfac = function DockablePanelAtLeftComponent_Factory(t) { return new (t || DockablePanelAtLeftComponent)(i0.ɵɵdirectiveInject(i0.Renderer2, 8), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef, 8)); };
DockablePanelAtLeftComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DockablePanelAtLeftComponent, selectors: [["epsgis-dockable-panel-at-left"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 14, vars: 11, consts: [[1, "sspanel_overlay", 2, "display", "none"], ["sspanel_overlay", ""], [1, "sspanel", 3, "id", "ngClass", "ngStyle"], ["sspanel", ""], ["sspanel-titlebar", "", 1, "sspanel_titlebar", "sspanel_titlebar_draggable", 3, "hasIcon", "options", "windowState", "onClickSetting", "onClickClose"], ["sspanel_titlebar", ""], [1, "sspanel_content", 3, "click"], ["widget_content", ""], [1, "sspanel_resizer", "sspanel_resizer_right", 3, "mousedown"], [1, "collapse", 3, "ngStyle", "click"], ["center_collapse", ""], ["viewBox", "0 0 1024 1024", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16"], ["d", "M778.965749 128.759549l-383.064442 383.063419 388.097062 388.096039-0.070608 0.033769c12.709463 13.137205 20.529569 31.024597 20.529569 50.731428 0 40.376593-32.736589 73.112158-73.115228 73.112158-19.705807 0-37.591153-7.819083-50.730405-20.528546l-0.034792 0.035816L241.890654 564.622498l0.035816-0.035816c-13.779841-13.281491-22.3838-31.915897-22.3838-52.585659 0-0.071631 0-0.106424 0-0.178055 0-0.072655 0-0.10847 0-0.144286 0-20.669762 8.603959-39.341007 22.3838-52.622498l-0.035816-0.034792L680.573835 20.337187l0.180102 0.179079c13.139252-12.5662 30.950919-20.313651 50.587142-20.313651 40.378639 0 73.115228 32.736589 73.115228 73.114205C804.455283 95.485725 794.567076 115.334795 778.965749 128.759549z", "fill", "#bababa"]], template: function DockablePanelAtLeftComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "div", 0, 1);
        i0.ɵɵelementStart(2, "div", 2, 3);
        i0.ɵɵelementStart(4, "div", 4, 5);
        i0.ɵɵlistener("onClickSetting", function DockablePanelAtLeftComponent_Template_div_onClickSetting_4_listener() { return ctx.openWidgetSetting(); })("onClickClose", function DockablePanelAtLeftComponent_Template_div_onClickClose_4_listener($event) { return ctx.closePanel($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 6);
        i0.ɵɵlistener("click", function DockablePanelAtLeftComponent_Template_div_click_6_listener($event) { return ctx._contentClick($event); });
        i0.ɵɵtemplate(7, DockablePanelAtLeftComponent_ng_template_7_Template, 0, 0, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 8);
        i0.ɵɵlistener("mousedown", function DockablePanelAtLeftComponent_Template_div_mousedown_9_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "width", directionX: "right" }); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "div", 9, 10);
        i0.ɵɵlistener("click", function DockablePanelAtLeftComponent_Template_div_click_10_listener($event) { return ctx.collapsePanel($event); });
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
    } }, directives: [i1.NgClass, i1.NgStyle, i2.PanelTitleBarComponent], styles: [".notitle[_ngcontent-%COMP%]{border:none}.notitle[_ngcontent-%COMP%]   .sspanel_titlebar[_ngcontent-%COMP%]{display:none}.notitle[_ngcontent-%COMP%]   .sspanel_content[_ngcontent-%COMP%]{border:none}.collapse[_ngcontent-%COMP%]{position:absolute;top:50%;right:-16px;width:16px;height:60px;line-height:60px;cursor:pointer;background:#fcfcfc;border-radius:0 5px 5px 0;box-shadow:3px 0 3px 0 #a0a0a0}.collapse[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover   path[_ngcontent-%COMP%]{fill:#000}"] });
DockablePanelAtLeftComponent = __decorate([
    ComponentRegister({
        uri: 'epsgis-dockable-panel-at-left',
        path: "components/ex-panels/dockable-panel-at-left"
    })
], DockablePanelAtLeftComponent);
export { DockablePanelAtLeftComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DockablePanelAtLeftComponent, [{
        type: Component,
        args: [{
                selector: 'epsgis-dockable-panel-at-left',
                templateUrl: './dockable-panel-at-left.component.html',
                styleUrls: ['./dockable-panel-at-left.component.scss'],
            }]
    }], function () { return [{ type: i0.Renderer2, decorators: [{
                type: Optional
            }] }, { type: i0.ChangeDetectorRef, decorators: [{
                type: Optional
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9ja2FibGUtcGFuZWwtYXQtbGVmdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9lcHNnaXMvY29tcG9uZW50cy9leC1wYW5lbHMvZG9ja2FibGUtcGFuZWwtYXQtbGVmdC9kb2NrYWJsZS1wYW5lbC1hdC1sZWZ0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Vwc2dpcy9jb21wb25lbnRzL2V4LXBhbmVscy9kb2NrYWJsZS1wYW5lbC1hdC1sZWZ0L2RvY2thYmxlLXBhbmVsLWF0LWxlZnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsUUFBUSxFQUFnQyxNQUFNLGVBQWUsQ0FBQztBQUMxRixPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUM1QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNwRixPQUFPLEVBQUUsYUFBYSxFQUFnQixNQUFNLDRCQUE0QixDQUFDO0FBQ3pFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7Ozs7O0lBV3ZELDRCQUE0QixTQUE1Qiw0QkFBNkIsU0FBUSwwQkFBMEI7SUFDMUUsWUFBK0IsT0FBa0IsRUFBb0IsR0FBcUI7UUFDeEYsS0FBSyxDQUFDLE9BQU8sRUFBQyxHQUFHLENBQUMsQ0FBQztRQURVLFlBQU8sR0FBUCxPQUFPLENBQVc7UUFBb0IsUUFBRyxHQUFILEdBQUcsQ0FBa0I7UUFFeEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBQ3JDLENBQUM7SUFLRCxRQUFRO1FBQ04sS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFJRCxlQUFlO1FBQ2IsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFJRCxXQUFXO1FBQ1QsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFLRCxVQUFVLENBQUMsT0FBcUI7UUFDOUIsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdEIsT0FBTyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDMUIsT0FBTyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDNUIsT0FBTyxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDL0IsT0FBTyxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDL0IsT0FBTyxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDL0IsT0FBTyxDQUFDLGNBQWMsR0FBQyxJQUFJLENBQUM7UUFDNUIsT0FBTyxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDO1FBQ3RDLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNTLGNBQWM7UUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRTtZQUMvRCxJQUFJLEVBQUUsQ0FBQztZQUNQLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUc7WUFDdkIsTUFBTSxFQUFFLENBQUM7WUFDVCxLQUFLLEVBQUUsQ0FBQztZQUVSLE1BQU0sRUFBRSxNQUFNO1NBQ2YsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFDRCxRQUFRO1FBQ04sS0FBSyxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDN0IsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFDRCxNQUFNO1FBQ0osS0FBSyxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDN0IsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFDRCxPQUFPO1FBQ0wsS0FBSyxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDNUIsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFDRCxNQUFNO0lBRU4sQ0FBQztDQUNGLENBQUE7d0dBakVZLDRCQUE0QjtpRUFBNUIsNEJBQTRCO1FDZnpDLDRCQUVNO1FBQ04saUNBQ3VCO1FBS3JCLGlDQUM4RTtRQUEzRSx3SEFBa0IsdUJBQW1CLElBQUMsNkdBQWlCLHNCQUFrQixJQUFuQztRQUFxQyxpQkFBTTtRQXNCcEYsOEJBQThEO1FBQWpDLDRHQUFTLHlCQUFxQixJQUFFO1FBQzNELDhIQUEyQztRQUM3QyxpQkFBTTtRQUNOLDhCQUNtRjtRQUFqRixvSEFBYSw0Q0FBcUMsT0FBTyxjQUFZLE9BQU8sR0FBRSxJQUFFO1FBQUMsaUJBQU07UUFDekYsbUNBQ21DO1FBQWpDLDZHQUFTLHlCQUFxQixJQUFFO1FBR2hDLG1CQUN5QjtRQUR6QixnQ0FDeUI7UUFDdkIsNEJBRXdCO1FBQzFCLGlCQUFNO1FBQ1IsaUJBQU07UUFDUixpQkFBTTs7UUE3Q3dCLGVBQW1CO1FBQW5CLDhDQUFtQjtRQUFDLHFGQUFpRCx5QkFBQTtRQU1ILGVBQWlCO1FBQWpCLCtCQUFpQix3QkFBQSxnQ0FBQTtRQTRCekYsZUFBa0U7UUFBbEUsbUdBQWtFOztBRHRCN0UsNEJBQTRCO0lBVHhDLGlCQUFpQixDQUFDO1FBQ2pCLEdBQUcsRUFBRSwrQkFBK0I7UUFDcEMsSUFBSSxFQUFFLDZDQUE2QztLQUNwRCxDQUFDO0dBTVcsNEJBQTRCLENBaUV4QztTQWpFWSw0QkFBNEI7dUZBQTVCLDRCQUE0QjtjQUx4QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsV0FBVyxFQUFFLHlDQUF5QztnQkFDdEQsU0FBUyxFQUFFLENBQUMseUNBQXlDLENBQUM7YUFDdkQ7O3NCQUVjLFFBQVE7O3NCQUE4QixRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9wdGlvbmFsLCBSZW5kZXJlcjIsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBDb21wb25lbnRSZWdpc3RlciB9IGZyb20gJy4uLy4uLy4uL2RlY29yYXRvci9jb21wb25lbnQtcmVnaXN0ZXIuZGVjb3JhdG9yJztcbmltcG9ydCB7IFBhbmVsRG9ja01vZGUsIFBhbmVsT3B0aW9ucyB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9iYXNlLXBhbmVsJztcbmltcG9ydCB7IEJhc2VEb2NrYWJsZVBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZS1kb2NrYWJsZS1wYW5lbCc7XG5cbkBDb21wb25lbnRSZWdpc3Rlcih7XG4gIHVyaTogJ2Vwc2dpcy1kb2NrYWJsZS1wYW5lbC1hdC1sZWZ0JyxcbiAgcGF0aDogXCJjb21wb25lbnRzL2V4LXBhbmVscy9kb2NrYWJsZS1wYW5lbC1hdC1sZWZ0XCJcbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlcHNnaXMtZG9ja2FibGUtcGFuZWwtYXQtbGVmdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9kb2NrYWJsZS1wYW5lbC1hdC1sZWZ0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZG9ja2FibGUtcGFuZWwtYXQtbGVmdC5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBEb2NrYWJsZVBhbmVsQXRMZWZ0Q29tcG9uZW50IGV4dGVuZHMgQmFzZURvY2thYmxlUGFuZWxDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwdWJsaWMgX3JlbmRlcjogUmVuZGVyZXIyLEBPcHRpb25hbCgpIHB1YmxpYyBjZHI6Q2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBzdXBlcihfcmVuZGVyLGNkcik7XG4gICAgdGhpcy5kb2NrTW9kZSA9IFBhbmVsRG9ja01vZGUubGVmdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBcbiAgICovXG4gIG5nT25Jbml0KCkge1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gIH1cbiAgLyoqXG4gICAqIFxuICAgKi9cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHN1cGVyLm5nQWZ0ZXJWaWV3SW5pdCgpO1xuICB9XG4gIC8qKlxuICAgKiBcbiAgICovXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XG4gIH1cbiAgLyoqXG4gKiDorr7nva5wYW5lbOWPguaVsFxuICogQHBhcmFtIG9wdGlvbnMgXG4gKi9cbiAgc2V0T3B0aW9ucyhvcHRpb25zOiBQYW5lbE9wdGlvbnMpIHtcbiAgICBvcHRpb25zLm1vZGFsID0gZmFsc2U7XG4gICAgb3B0aW9ucy5kcmFnZ2FibGUgPSBmYWxzZTtcbiAgICBvcHRpb25zLmJ1dHRvbkNsb3NlID0gZmFsc2U7XG4gICAgb3B0aW9ucy5idXR0b25Db2xsYXBzZSA9IGZhbHNlO1xuICAgIG9wdGlvbnMuYnV0dG9uTWF4aW1pemUgPSBmYWxzZTtcbiAgICBvcHRpb25zLmJ1dHRvbk1pbmltaXplID0gZmFsc2U7XG4gICAgb3B0aW9ucy5jZW50ZXJDb2xsYXBzZT10cnVlO1xuICAgIG9wdGlvbnMuZG9ja1NpZGUgPSBQYW5lbERvY2tNb2RlLmxlZnQ7XG4gICAgc3VwZXIuc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgfVxuICBwcm90ZWN0ZWQgX3NldFBDUG9zaXRpb24oKSB7XG4gICAgdGhpcy53aWRnZXRDb25maWcucG9zaXRpb24gPSBfLm1lcmdlKHRoaXMud2lkZ2V0Q29uZmlnLnBvc2l0aW9uLCB7XG4gICAgICBsZWZ0OiAwLFxuICAgICAgdG9wOiB0aGlzLm1hcEJvdW5kcy50b3AsXG4gICAgICBib3R0b206IDAsXG4gICAgICByaWdodDogMCxcbiAgICAgIC8vIGhlaWdodDogXCIxMDAlXCJcbiAgICAgIGhlaWdodDogXCJhdXRvXCJcbiAgICB9KTtcbiAgICBzdXBlci5fc2V0UENQb3NpdGlvbigpO1xuICB9XG4gIG9uUmVzaXplKCkge1xuICAgIHN1cGVyLl9yZXNpemVNYXBXaGVuUmVzaXplKCk7XG4gICAgc3VwZXIub25SZXNpemUoKTtcbiAgfVxuICBvbk9wZW4oKSB7XG4gICAgc3VwZXIuX3Jlc2l6ZU1hcFdoZW5SZXNpemUoKTtcbiAgICBzdXBlci5vbk9wZW4oKTtcbiAgfVxuICBvbkNsb3NlKCkge1xuICAgIHN1cGVyLl9yZXNpemVNYXBXaGVuQ2xvc2UoKTtcbiAgICBzdXBlci5vbkNsb3NlKCk7XG4gIH1cbiAgcmVzaXplKCkge1xuXG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJzc3BhbmVsX292ZXJsYXlcIiAjc3NwYW5lbF9vdmVybGF5IHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj5cblxuPC9kaXY+XG48ZGl2IGNsYXNzPVwic3NwYW5lbFwiICNzc3BhbmVsIGlkPVwie3tvcHRpb25zLmlkfX1cIiBbbmdDbGFzc109XCJ7J25vdGl0bGUnOm9wdGlvbnMuc2hvd1RpdGxlPT09ZmFsc2V9XCJcbiAgW25nU3R5bGVdPVwicG9zaXRpb25cIj5cbiAgPCEtLSA8ZXBzZ2lzLXBhbmVsLXRpdGxlYmFyICNzc3BhbmVsX3RpdGxlYmFyIFtoYXNJY29uXT1cImZhbHNlXCIgW29wdGlvbnNdPVwib3B0aW9uc1wiIFt3aW5kb3dTdGF0ZV09XCJ3aW5kb3dTdGF0ZVwiXG4gICAgKG9uTW91c2VEb3duKT1cIl90aXRsZWJhcl9Nb3VzZURvd24oJGV2ZW50KVwiIChvbkNsaWNrU2V0dGluZyk9XCJvcGVuV2lkZ2V0U2V0dGluZygpXCJcbiAgICAob25DbGlja0Nsb3NlKT1cImNsb3NlUGFuZWwoJGV2ZW50KVwiPlxuICA8L2Vwc2dpcy1wYW5lbC10aXRsZWJhcj4gLS0+XG4gIDxkaXYgc3NwYW5lbC10aXRsZWJhciAgI3NzcGFuZWxfdGl0bGViYXIgIGNsYXNzPVwic3NwYW5lbF90aXRsZWJhciBzc3BhbmVsX3RpdGxlYmFyX2RyYWdnYWJsZVwiIFtoYXNJY29uXT1cImZhbHNlXCIgW29wdGlvbnNdPVwib3B0aW9uc1wiIFt3aW5kb3dTdGF0ZV09XCJ3aW5kb3dTdGF0ZVwiXG4gICAgIChvbkNsaWNrU2V0dGluZyk9XCJvcGVuV2lkZ2V0U2V0dGluZygpXCIgKG9uQ2xpY2tDbG9zZSk9XCJjbG9zZVBhbmVsKCRldmVudClcIj48L2Rpdj5cbiAgPCEtLSA8ZGl2IGNsYXNzPVwic3NwYW5lbF90aXRsZWJhclwiICNzc3BhbmVsX3RpdGxlYmFyIChtb3VzZWRvd24pPVwiX3RpdGxlYmFyX01vdXNlRG93bigkZXZlbnQpO1wiPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJwYW5lbEljb25cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpY29uXCI+XG4gICAgICAgIDxpbWcgKm5nSWY9XCJwYW5lbEljb24uaXNTaG93SW1nXCIgW3NyY109XCJwYW5lbEljb24uaWNvblwiPlxuICAgICAgICA8aSAqbmdJZj1cIiFwYW5lbEljb24uaXNTaG93SW1nXCIgbnotaWNvbiBbbnpJY29uZm9udF09XCJwYW5lbEljb24uaWNvblwiPjwvaT5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxkaXYgY2xhc3M9XCJzc3BhbmVsX3RpdGxlYmFyX3RleHRcIj48c3BhbiBjbGFzcz1cInNzcGFuZWxfdGl0bGViYXJfdGV4dF9zcGFuXCI+e3tvcHRpb25zLnRpdGxlfX08L3NwYW4+PC9kaXY+XG5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwib3B0aW9ucy5idXR0b25DbG9zZVwiPlxuICAgICAgPGRpdiBjbGFzcz1cInNzcGFuZWxfdGl0bGViYXJfYnV0dG9uIHNzcGFuZWxfdGl0bGViYXJfYnV0dG9uX2Nsb3NlXCIgdGl0bGU9XCJ7e29wdGlvbnMuYnV0dG9uQ2xvc2VUZXh0fX1cIlxuICAgICAgICAoY2xpY2spPVwiY2xvc2VQYW5lbCgkZXZlbnQpO1wiPlxuICAgICAgICA8c3ZnIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEwIDEwXCIgaGVpZ2h0PVwiMTAwJVwiIHdpZHRoPVwiMTAwJVwiPlxuICAgICAgICAgIDxnPlxuICAgICAgICAgICAgPGxpbmUgeTI9XCIwXCIgeDI9XCIxMFwiIHkxPVwiMTBcIiB4MT1cIjBcIj48L2xpbmU+XG4gICAgICAgICAgICA8bGluZSB5Mj1cIjEwXCIgeDI9XCIxMFwiIHkxPVwiMFwiIHgxPVwiMFwiPjwvbGluZT5cbiAgICAgICAgICA8L2c+XG4gICAgICAgIDwvc3ZnPjwvZGl2PlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L2Rpdj4gLS0+XG4gIDxkaXYgY2xhc3M9XCJzc3BhbmVsX2NvbnRlbnRcIiAoY2xpY2spPVwiX2NvbnRlbnRDbGljaygkZXZlbnQpO1wiPlxuICAgIDxuZy10ZW1wbGF0ZSAjd2lkZ2V0X2NvbnRlbnQ+PC9uZy10ZW1wbGF0ZT5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJzc3BhbmVsX3Jlc2l6ZXIgc3NwYW5lbF9yZXNpemVyX3JpZ2h0XCJcbiAgICAobW91c2Vkb3duKT1cIl9yZXNpemVyX01vdXNlRG93bigkZXZlbnQse2RpbWVuc2lvbjond2lkdGgnLGRpcmVjdGlvblg6J3JpZ2h0J30pO1wiPjwvZGl2PlxuICA8ZGl2ICNjZW50ZXJfY29sbGFwc2UgW25nU3R5bGVdPVwieydkaXNwbGF5JzpvcHRpb25zLmNlbnRlckNvbGxhcHNlID8gJ2Jsb2NrJyA6ICdub25lJyB9XCIgY2xhc3M9XCJjb2xsYXBzZVwiXG4gICAgKGNsaWNrKT1cImNvbGxhcHNlUGFuZWwoJGV2ZW50KTtcIj5cbiAgICA8IS0tIDxlcHNnaXMtaWNvbi1hcnJvdy1sZWZ0PjwvZXBzZ2lzLWljb24tYXJyb3ctbGVmdD4gLS0+XG4gICAgPCEtLWhvdmVy5qC35byP5pyJ6Zeu6aKY77yM5ZCO6Z2i5YaN6LCDLS0+XG4gICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk03NzguOTY1NzQ5IDEyOC43NTk1NDlsLTM4My4wNjQ0NDIgMzgzLjA2MzQxOSAzODguMDk3MDYyIDM4OC4wOTYwMzktMC4wNzA2MDggMC4wMzM3NjljMTIuNzA5NDYzIDEzLjEzNzIwNSAyMC41Mjk1NjkgMzEuMDI0NTk3IDIwLjUyOTU2OSA1MC43MzE0MjggMCA0MC4zNzY1OTMtMzIuNzM2NTg5IDczLjExMjE1OC03My4xMTUyMjggNzMuMTEyMTU4LTE5LjcwNTgwNyAwLTM3LjU5MTE1My03LjgxOTA4My01MC43MzA0MDUtMjAuNTI4NTQ2bC0wLjAzNDc5MiAwLjAzNTgxNkwyNDEuODkwNjU0IDU2NC42MjI0OThsMC4wMzU4MTYtMC4wMzU4MTZjLTEzLjc3OTg0MS0xMy4yODE0OTEtMjIuMzgzOC0zMS45MTU4OTctMjIuMzgzOC01Mi41ODU2NTkgMC0wLjA3MTYzMSAwLTAuMTA2NDI0IDAtMC4xNzgwNTUgMC0wLjA3MjY1NSAwLTAuMTA4NDcgMC0wLjE0NDI4NiAwLTIwLjY2OTc2MiA4LjYwMzk1OS0zOS4zNDEwMDcgMjIuMzgzOC01Mi42MjI0OThsLTAuMDM1ODE2LTAuMDM0NzkyTDY4MC41NzM4MzUgMjAuMzM3MTg3bDAuMTgwMTAyIDAuMTc5MDc5YzEzLjEzOTI1Mi0xMi41NjYyIDMwLjk1MDkxOS0yMC4zMTM2NTEgNTAuNTg3MTQyLTIwLjMxMzY1MSA0MC4zNzg2MzkgMCA3My4xMTUyMjggMzIuNzM2NTg5IDczLjExNTIyOCA3My4xMTQyMDVDODA0LjQ1NTI4MyA5NS40ODU3MjUgNzk0LjU2NzA3NiAxMTUuMzM0Nzk1IDc3OC45NjU3NDkgMTI4Ljc1OTU0OXpcIlxuICAgICAgICBmaWxsPVwiI2JhYmFiYVwiPjwvcGF0aD5cbiAgICA8L3N2Zz5cbiAgPC9kaXY+XG48L2Rpdj4iXX0=