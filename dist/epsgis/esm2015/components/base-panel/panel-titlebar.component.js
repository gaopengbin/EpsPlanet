import { Component, EventEmitter, Input, Output } from "@angular/core";
import { DefaultPanelOptions } from "../../models/base-panel";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/icon";
import * as i3 from "../icon/icon-setting.component";
import * as i4 from "../icon/icon-uncollapsed.component";
import * as i5 from "../icon/icon-collapsed.component";
import * as i6 from "../icon/icon-unmaximize.component";
import * as i7 from "../icon/icon-maximize.component";
import * as i8 from "../icon/icon-close.component";
const _c0 = ["sspanel-titlebar", ""];
function PanelTitleBarComponent_ng_container_0_img_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 7);
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r5.icon, i0.ɵɵsanitizeUrl);
} }
function PanelTitleBarComponent_ng_container_0_i_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 8);
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("nzIconfont", ctx_r6.icon);
} }
function PanelTitleBarComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 4);
    i0.ɵɵtemplate(2, PanelTitleBarComponent_ng_container_0_img_2_Template, 1, 1, "img", 5);
    i0.ɵɵtemplate(3, PanelTitleBarComponent_ng_container_0_i_3_Template, 1, 1, "i", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.isShowImg);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.isShowImg);
} }
function PanelTitleBarComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵlistener("click", function PanelTitleBarComponent_div_4_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7._buttonSettingClick($event); });
    i0.ɵɵelement(1, "epsgis-icon-setting");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("title", ctx_r1.options.buttonSettingText);
} }
function PanelTitleBarComponent_ng_container_5_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵlistener("click", function PanelTitleBarComponent_ng_container_5_ng_container_1_div_1_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(3); return ctx_r13._buttonCollapseClick($event); });
    i0.ɵɵelement(1, "epsgis-icon-uncollapsed");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate("title", ctx_r12.options.buttonUnCollapseText);
} }
function PanelTitleBarComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PanelTitleBarComponent_ng_container_5_ng_container_1_div_1_Template, 2, 1, "div", 12);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r9.options.buttonCollapse);
} }
function PanelTitleBarComponent_ng_container_5_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵlistener("click", function PanelTitleBarComponent_ng_container_5_ng_template_2_div_0_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(3); return ctx_r16._buttonCollapseClick($event); });
    i0.ɵɵelement(1, "epsgis-icon-collapsed");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate("title", ctx_r15.options.buttonCollapseText);
} }
function PanelTitleBarComponent_ng_container_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PanelTitleBarComponent_ng_container_5_ng_template_2_div_0_Template, 2, 1, "div", 14);
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r11.options.buttonCollapse);
} }
function PanelTitleBarComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PanelTitleBarComponent_ng_container_5_ng_container_1_Template, 2, 1, "ng-container", 10);
    i0.ɵɵtemplate(2, PanelTitleBarComponent_ng_container_5_ng_template_2_Template, 1, 1, "ng-template", null, 11, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r10 = i0.ɵɵreference(3);
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.windowState == "collapsed")("ngIfElse", _r10);
} }
function PanelTitleBarComponent_ng_container_6_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵlistener("click", function PanelTitleBarComponent_ng_container_6_ng_container_1_div_1_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r22 = i0.ɵɵnextContext(3); return ctx_r22._buttonMaximizeClick($event); });
    i0.ɵɵelement(1, "epsgis-icon-unmaximize");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r21 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate("title", ctx_r21.options.buttonUnmaximizeText);
} }
function PanelTitleBarComponent_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PanelTitleBarComponent_ng_container_6_ng_container_1_div_1_Template, 2, 1, "div", 17);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r18 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r18.options.buttonMaximize);
} }
function PanelTitleBarComponent_ng_container_6_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵlistener("click", function PanelTitleBarComponent_ng_container_6_ng_template_2_div_0_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r25 = i0.ɵɵnextContext(3); return ctx_r25._buttonMaximizeClick($event); });
    i0.ɵɵelement(1, "epsgis-icon-maximize");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r24 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate("title", ctx_r24.options.buttonMaximizeText);
} }
function PanelTitleBarComponent_ng_container_6_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PanelTitleBarComponent_ng_container_6_ng_template_2_div_0_Template, 2, 1, "div", 19);
} if (rf & 2) {
    const ctx_r20 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r20.options.buttonMaximize);
} }
function PanelTitleBarComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PanelTitleBarComponent_ng_container_6_ng_container_1_Template, 2, 1, "ng-container", 10);
    i0.ɵɵtemplate(2, PanelTitleBarComponent_ng_container_6_ng_template_2_Template, 1, 1, "ng-template", null, 16, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r19 = i0.ɵɵreference(3);
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.windowState == "maximized")("ngIfElse", _r19);
} }
function PanelTitleBarComponent_ng_container_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵlistener("click", function PanelTitleBarComponent_ng_container_7_div_1_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r28 = i0.ɵɵnextContext(2); return ctx_r28._buttonCloseClick($event); });
    i0.ɵɵelement(1, "epsgis-icon-close");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r27 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("title", ctx_r27.options.buttonCloseText);
} }
function PanelTitleBarComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PanelTitleBarComponent_ng_container_7_div_1_Template, 2, 1, "div", 21);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.options.buttonClose);
} }
export class PanelTitleBarComponent {
    constructor(ele) {
        this.ele = ele;
        this.options = DefaultPanelOptions;
        this.hasIcon = false;
        this.onMouseDown = new EventEmitter();
        this.onClickSetting = new EventEmitter();
        this.onClickCollapse = new EventEmitter();
        this.onClickMaximize = new EventEmitter();
        this.onClickClose = new EventEmitter();
        this.ele.nativeElement.onmousedown = (evt) => {
            this._titlebarMouseDown(evt);
        };
    }
    get nativeElement() {
        return this.ele.nativeElement;
    }
    _titlebarMouseDown(evt) {
        if (this.onMouseDown.observers.length >= 1) {
            this.onMouseDown.emit(evt);
        }
    }
    _buttonSettingClick(evt) {
        if (this.onClickSetting.observers.length >= 1) {
            this.onClickSetting.emit(evt);
        }
    }
    _buttonCollapseClick(evt) {
        if (this.onClickCollapse.observers.length >= 1) {
            this.onClickCollapse.emit(evt);
        }
    }
    _buttonMaximizeClick(evt) {
        if (this.onClickMaximize.observers.length >= 1) {
            this.onClickMaximize.emit(evt);
        }
    }
    _buttonCloseClick(evt) {
        if (this.onClickClose.observers.length >= 1) {
            this.onClickClose.emit(evt);
        }
    }
}
PanelTitleBarComponent.ɵfac = function PanelTitleBarComponent_Factory(t) { return new (t || PanelTitleBarComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
PanelTitleBarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PanelTitleBarComponent, selectors: [["div", "sspanel-titlebar", ""]], inputs: { options: "options", hasIcon: "hasIcon", isShowImg: "isShowImg", icon: "icon", windowState: "windowState" }, outputs: { onMouseDown: "onMouseDown", onClickSetting: "onClickSetting", onClickCollapse: "onClickCollapse", onClickMaximize: "onClickMaximize", onClickClose: "onClickClose" }, attrs: _c0, decls: 8, vars: 6, consts: [[4, "ngIf"], [1, "sspanel_titlebar_text"], [1, "sspanel_titlebar_text_span"], ["class", "sspanel_titlebar_button sspanel_titlebar_button_setting", 3, "title", "click", 4, "ngIf"], [1, "icon"], [3, "src", 4, "ngIf"], ["nz-icon", "", 3, "nzIconfont", 4, "ngIf"], [3, "src"], ["nz-icon", "", 3, "nzIconfont"], [1, "sspanel_titlebar_button", "sspanel_titlebar_button_setting", 3, "title", "click"], [4, "ngIf", "ngIfElse"], ["showCollapsedButton", ""], ["class", "sspanel_titlebar_button sspanel_titlebar_button_uncollapse", 3, "title", "click", 4, "ngIf"], [1, "sspanel_titlebar_button", "sspanel_titlebar_button_uncollapse", 3, "title", "click"], ["class", "sspanel_titlebar_button sspanel_titlebar_button_collapse", 3, "title", "click", 4, "ngIf"], [1, "sspanel_titlebar_button", "sspanel_titlebar_button_collapse", 3, "title", "click"], ["showMaximizeButton", ""], ["class", "sspanel_titlebar_button sspanel_titlebar_button_unmaximize", 3, "title", "click", 4, "ngIf"], [1, "sspanel_titlebar_button", "sspanel_titlebar_button_unmaximize", 3, "title", "click"], ["class", "sspanel_titlebar_button sspanel_titlebar_button_maximize", 3, "title", "click", 4, "ngIf"], [1, "sspanel_titlebar_button", "sspanel_titlebar_button_maximize", 3, "title", "click"], ["class", "sspanel_titlebar_button sspanel_titlebar_button_close", 3, "title", "click", 4, "ngIf"], [1, "sspanel_titlebar_button", "sspanel_titlebar_button_close", 3, "title", "click"]], template: function PanelTitleBarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PanelTitleBarComponent_ng_container_0_Template, 4, 2, "ng-container", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "span", 2);
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, PanelTitleBarComponent_div_4_Template, 2, 1, "div", 3);
        i0.ɵɵtemplate(5, PanelTitleBarComponent_ng_container_5_Template, 4, 2, "ng-container", 0);
        i0.ɵɵtemplate(6, PanelTitleBarComponent_ng_container_6_Template, 4, 2, "ng-container", 0);
        i0.ɵɵtemplate(7, PanelTitleBarComponent_ng_container_7_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.hasIcon);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.options.title);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.options.buttonSetting);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.options.buttonCollapse);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.options.buttonMaximize);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.options.buttonClose);
    } }, directives: [i1.NgIf, i2.NzIconDirective, i3.IconSettingComponent, i4.IconUnCollapsedComponent, i5.IconCollapsedComponent, i6.IconUnMaximizeComponent, i7.IconMaximizeComponent, i8.IconCloseComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PanelTitleBarComponent, [{
        type: Component,
        args: [{
                selector: "div[sspanel-titlebar]",
                template: `
    <!-- 这影响样式 -->
    <!-- <div class="sspanel_titlebar sspanel_titlebar_draggable" #sspanel_titlebar
      (mousedown)="_titlebarMouseDown($event);"> -->
      <ng-container *ngIf="hasIcon">
        <div class="icon">
          <img *ngIf="isShowImg" [src]="icon">
          <i *ngIf="!isShowImg" nz-icon [nzIconfont]="icon"></i>
        </div>
      </ng-container>
      <div class="sspanel_titlebar_text"><span class="sspanel_titlebar_text_span">{{options.title}}</span></div>
      <div *ngIf="options.buttonSetting" class="sspanel_titlebar_button sspanel_titlebar_button_setting" title="{{options.buttonSettingText}}" (click)="_buttonSettingClick($event);">
        <epsgis-icon-setting></epsgis-icon-setting>
      </div>
      <ng-container *ngIf="options.buttonCollapse">
        <ng-container *ngIf="windowState=='collapsed'; else showCollapsedButton">
          <div *ngIf="options.buttonCollapse"  class="sspanel_titlebar_button sspanel_titlebar_button_uncollapse" title="{{options.buttonUnCollapseText}}"
            (click)="_buttonCollapseClick($event);">
            <epsgis-icon-uncollapsed></epsgis-icon-uncollapsed>
          </div>
        </ng-container>
        <ng-template #showCollapsedButton>
          <div *ngIf="options.buttonCollapse" class="sspanel_titlebar_button sspanel_titlebar_button_collapse" title="{{options.buttonCollapseText}}"
            (click)="_buttonCollapseClick($event);">
            <epsgis-icon-collapsed></epsgis-icon-collapsed>
          </div>
        </ng-template>
      </ng-container>
      <ng-container *ngIf="options.buttonMaximize">
        <ng-container *ngIf="windowState == 'maximized'; else showMaximizeButton">
          <div *ngIf="options.buttonMaximize" class="sspanel_titlebar_button sspanel_titlebar_button_unmaximize" title="{{options.buttonUnmaximizeText}}"
            (click)="_buttonMaximizeClick($event);">
            <epsgis-icon-unmaximize></epsgis-icon-unmaximize>
          </div>
        </ng-container>
        <ng-template #showMaximizeButton>
          <div *ngIf="options.buttonMaximize" class="sspanel_titlebar_button sspanel_titlebar_button_maximize" title="{{options.buttonMaximizeText}}"
            (click)="_buttonMaximizeClick($event);">
            <epsgis-icon-maximize></epsgis-icon-maximize>
            
          </div>
        </ng-template>
      </ng-container>

      <ng-container *ngIf="options.buttonClose">
        <div  *ngIf="options.buttonClose" class="sspanel_titlebar_button sspanel_titlebar_button_close" title="{{options.buttonCloseText}}"
          (click)="_buttonCloseClick($event);">
          <epsgis-icon-close></epsgis-icon-close>
        </div>
      </ng-container>
    <!-- </div> -->
    `,
                styles: []
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { options: [{
            type: Input
        }], hasIcon: [{
            type: Input
        }], isShowImg: [{
            type: Input
        }], icon: [{
            type: Input
        }], windowState: [{
            type: Input
        }], onMouseDown: [{
            type: Output
        }], onClickSetting: [{
            type: Output
        }], onClickCollapse: [{
            type: Output
        }], onClickMaximize: [{
            type: Output
        }], onClickClose: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtdGl0bGViYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZXBzZ2lzL2NvbXBvbmVudHMvYmFzZS1wYW5lbC9wYW5lbC10aXRsZWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEVBQUUsbUJBQW1CLEVBQWdCLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7Ozs7OztJQVdsRSx5QkFBb0M7OztJQUFiLG1EQUFZOzs7SUFDbkMsdUJBQXNEOzs7SUFBeEIsd0NBQW1COzs7SUFIckQsNkJBQThCO0lBQzVCLDhCQUFrQjtJQUNoQixzRkFBb0M7SUFDcEMsa0ZBQXNEO0lBQ3hELGlCQUFNO0lBQ1IsMEJBQWU7OztJQUhMLGVBQWU7SUFBZix1Q0FBZTtJQUNqQixlQUFnQjtJQUFoQix3Q0FBZ0I7Ozs7SUFJeEIsOEJBQWdMO0lBQXZDLDRNQUFzQztJQUM3SyxzQ0FBMkM7SUFDN0MsaUJBQU07OztJQUY2RixtRUFBcUM7Ozs7SUFLcEksK0JBQzBDO0lBQXhDLCtPQUF1QztJQUN2QywwQ0FBbUQ7SUFDckQsaUJBQU07OztJQUhrRyx1RUFBd0M7OztJQURsSiw2QkFBeUU7SUFDdkUsc0dBR007SUFDUiwwQkFBZTs7O0lBSlAsZUFBNEI7SUFBNUIsb0RBQTRCOzs7O0lBTWxDLCtCQUMwQztJQUF4Qyw4T0FBdUM7SUFDdkMsd0NBQStDO0lBQ2pELGlCQUFNOzs7SUFIK0YscUVBQXNDOzs7SUFBM0kscUdBR007OztJQUhBLHFEQUE0Qjs7O0lBUnRDLDZCQUE2QztJQUMzQyx5R0FLZTtJQUNmLHdJQUtjO0lBQ2hCLDBCQUFlOzs7O0lBWkUsZUFBZ0M7SUFBaEMsd0RBQWdDLGtCQUFBOzs7O0lBZTdDLCtCQUMwQztJQUF4QywrT0FB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UUFDZix5RkFjZTtRQUVmLHlGQUtlOztRQTdDQSxrQ0FBYTtRQU1nRCxlQUFpQjtRQUFqQix1Q0FBaUI7UUFDdkYsZUFBMkI7UUFBM0IsZ0RBQTJCO1FBR2xCLGVBQTRCO1FBQTVCLGlEQUE0QjtRQWM1QixlQUE0QjtRQUE1QixpREFBNEI7UUFnQjVCLGVBQXlCO1FBQXpCLDhDQUF5Qjs7dUZBVWpDLHNCQUFzQjtjQXhEbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBbURQO2dCQUNILE1BQU0sRUFBRSxFQUFFO2FBQ1g7NkRBRVUsT0FBTztrQkFBZixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDSSxXQUFXO2tCQUFwQixNQUFNO1lBQ0csY0FBYztrQkFBdkIsTUFBTTtZQUNHLGVBQWU7a0JBQXhCLE1BQU07WUFDRyxlQUFlO2tCQUF4QixNQUFNO1lBQ0csWUFBWTtrQkFBckIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IERlZmF1bHRQYW5lbE9wdGlvbnMsIFBhbmVsT3B0aW9ucyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvYmFzZS1wYW5lbFwiO1xuaW1wb3J0IHsgV2lkZ2V0V2luZG93U3RhdGUgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2Jhc2Utd2lkZ2V0XCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJkaXZbc3NwYW5lbC10aXRsZWJhcl1cIixcbiAgdGVtcGxhdGU6IGBcbiAgICA8IS0tIOi/meW9seWTjeagt+W8jyAtLT5cbiAgICA8IS0tIDxkaXYgY2xhc3M9XCJzc3BhbmVsX3RpdGxlYmFyIHNzcGFuZWxfdGl0bGViYXJfZHJhZ2dhYmxlXCIgI3NzcGFuZWxfdGl0bGViYXJcbiAgICAgIChtb3VzZWRvd24pPVwiX3RpdGxlYmFyTW91c2VEb3duKCRldmVudCk7XCI+IC0tPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImhhc0ljb25cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImljb25cIj5cbiAgICAgICAgICA8aW1nICpuZ0lmPVwiaXNTaG93SW1nXCIgW3NyY109XCJpY29uXCI+XG4gICAgICAgICAgPGkgKm5nSWY9XCIhaXNTaG93SW1nXCIgbnotaWNvbiBbbnpJY29uZm9udF09XCJpY29uXCI+PC9pPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPGRpdiBjbGFzcz1cInNzcGFuZWxfdGl0bGViYXJfdGV4dFwiPjxzcGFuIGNsYXNzPVwic3NwYW5lbF90aXRsZWJhcl90ZXh0X3NwYW5cIj57e29wdGlvbnMudGl0bGV9fTwvc3Bhbj48L2Rpdj5cbiAgICAgIDxkaXYgKm5nSWY9XCJvcHRpb25zLmJ1dHRvblNldHRpbmdcIiBjbGFzcz1cInNzcGFuZWxfdGl0bGViYXJfYnV0dG9uIHNzcGFuZWxfdGl0bGViYXJfYnV0dG9uX3NldHRpbmdcIiB0aXRsZT1cInt7b3B0aW9ucy5idXR0b25TZXR0aW5nVGV4dH19XCIgKGNsaWNrKT1cIl9idXR0b25TZXR0aW5nQ2xpY2soJGV2ZW50KTtcIj5cbiAgICAgICAgPGVwc2dpcy1pY29uLXNldHRpbmc+PC9lcHNnaXMtaWNvbi1zZXR0aW5nPlxuICAgICAgPC9kaXY+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwib3B0aW9ucy5idXR0b25Db2xsYXBzZVwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwid2luZG93U3RhdGU9PSdjb2xsYXBzZWQnOyBlbHNlIHNob3dDb2xsYXBzZWRCdXR0b25cIj5cbiAgICAgICAgICA8ZGl2ICpuZ0lmPVwib3B0aW9ucy5idXR0b25Db2xsYXBzZVwiICBjbGFzcz1cInNzcGFuZWxfdGl0bGViYXJfYnV0dG9uIHNzcGFuZWxfdGl0bGViYXJfYnV0dG9uX3VuY29sbGFwc2VcIiB0aXRsZT1cInt7b3B0aW9ucy5idXR0b25VbkNvbGxhcHNlVGV4dH19XCJcbiAgICAgICAgICAgIChjbGljayk9XCJfYnV0dG9uQ29sbGFwc2VDbGljaygkZXZlbnQpO1wiPlxuICAgICAgICAgICAgPGVwc2dpcy1pY29uLXVuY29sbGFwc2VkPjwvZXBzZ2lzLWljb24tdW5jb2xsYXBzZWQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8bmctdGVtcGxhdGUgI3Nob3dDb2xsYXBzZWRCdXR0b24+XG4gICAgICAgICAgPGRpdiAqbmdJZj1cIm9wdGlvbnMuYnV0dG9uQ29sbGFwc2VcIiBjbGFzcz1cInNzcGFuZWxfdGl0bGViYXJfYnV0dG9uIHNzcGFuZWxfdGl0bGViYXJfYnV0dG9uX2NvbGxhcHNlXCIgdGl0bGU9XCJ7e29wdGlvbnMuYnV0dG9uQ29sbGFwc2VUZXh0fX1cIlxuICAgICAgICAgICAgKGNsaWNrKT1cIl9idXR0b25Db2xsYXBzZUNsaWNrKCRldmVudCk7XCI+XG4gICAgICAgICAgICA8ZXBzZ2lzLWljb24tY29sbGFwc2VkPjwvZXBzZ2lzLWljb24tY29sbGFwc2VkPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwib3B0aW9ucy5idXR0b25NYXhpbWl6ZVwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwid2luZG93U3RhdGUgPT0gJ21heGltaXplZCc7IGVsc2Ugc2hvd01heGltaXplQnV0dG9uXCI+XG4gICAgICAgICAgPGRpdiAqbmdJZj1cIm9wdGlvbnMuYnV0dG9uTWF4aW1pemVcIiBjbGFzcz1cInNzcGFuZWxfdGl0bGViYXJfYnV0dG9uIHNzcGFuZWxfdGl0bGViYXJfYnV0dG9uX3VubWF4aW1pemVcIiB0aXRsZT1cInt7b3B0aW9ucy5idXR0b25Vbm1heGltaXplVGV4dH19XCJcbiAgICAgICAgICAgIChjbGljayk9XCJfYnV0dG9uTWF4aW1pemVDbGljaygkZXZlbnQpO1wiPlxuICAgICAgICAgICAgPGVwc2dpcy1pY29uLXVubWF4aW1pemU+PC9lcHNnaXMtaWNvbi11bm1heGltaXplPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPG5nLXRlbXBsYXRlICNzaG93TWF4aW1pemVCdXR0b24+XG4gICAgICAgICAgPGRpdiAqbmdJZj1cIm9wdGlvbnMuYnV0dG9uTWF4aW1pemVcIiBjbGFzcz1cInNzcGFuZWxfdGl0bGViYXJfYnV0dG9uIHNzcGFuZWxfdGl0bGViYXJfYnV0dG9uX21heGltaXplXCIgdGl0bGU9XCJ7e29wdGlvbnMuYnV0dG9uTWF4aW1pemVUZXh0fX1cIlxuICAgICAgICAgICAgKGNsaWNrKT1cIl9idXR0b25NYXhpbWl6ZUNsaWNrKCRldmVudCk7XCI+XG4gICAgICAgICAgICA8ZXBzZ2lzLWljb24tbWF4aW1pemU+PC9lcHNnaXMtaWNvbi1tYXhpbWl6ZT5cbiAgICAgICAgICAgIFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJvcHRpb25zLmJ1dHRvbkNsb3NlXCI+XG4gICAgICAgIDxkaXYgICpuZ0lmPVwib3B0aW9ucy5idXR0b25DbG9zZVwiIGNsYXNzPVwic3NwYW5lbF90aXRsZWJhcl9idXR0b24gc3NwYW5lbF90aXRsZWJhcl9idXR0b25fY2xvc2VcIiB0aXRsZT1cInt7b3B0aW9ucy5idXR0b25DbG9zZVRleHR9fVwiXG4gICAgICAgICAgKGNsaWNrKT1cIl9idXR0b25DbG9zZUNsaWNrKCRldmVudCk7XCI+XG4gICAgICAgICAgPGVwc2dpcy1pY29uLWNsb3NlPjwvZXBzZ2lzLWljb24tY2xvc2U+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPCEtLSA8L2Rpdj4gLS0+XG4gICAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBQYW5lbFRpdGxlQmFyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgb3B0aW9uczogUGFuZWxPcHRpb25zID0gRGVmYXVsdFBhbmVsT3B0aW9ucztcbiAgQElucHV0KCkgaGFzSWNvbjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBpc1Nob3dJbWc6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGljb246IHN0cmluZztcbiAgQElucHV0KCkgd2luZG93U3RhdGU6IFdpZGdldFdpbmRvd1N0YXRlO1xuICBAT3V0cHV0KCkgb25Nb3VzZURvd24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvbkNsaWNrU2V0dGluZyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uQ2xpY2tDb2xsYXBzZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uQ2xpY2tNYXhpbWl6ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uQ2xpY2tDbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvLyBAVmlld0NoaWxkKFwic3NwYW5lbF90aXRsZWJhclwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBfc3NwYW5lbFRpdGxlYmFyOiBFbGVtZW50UmVmO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZTogRWxlbWVudFJlZikge1xuICAgIHRoaXMuZWxlLm5hdGl2ZUVsZW1lbnQub25tb3VzZWRvd24gPSAoZXZ0KSA9PiB7XG4gICAgICB0aGlzLl90aXRsZWJhck1vdXNlRG93bihldnQpXG4gICAgfVxuICB9XG4gIGdldCBuYXRpdmVFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmVsZS5uYXRpdmVFbGVtZW50O1xuICAgIC8vIGlmICh0aGlzLl9zc3BhbmVsVGl0bGViYXIpIHtcbiAgICAvLyAgIHJldHVybiB0aGlzLl9zc3BhbmVsVGl0bGViYXIubmF0aXZlRWxlbWVudDtcbiAgICAvLyB9XG4gICAgLy8gcmV0dXJuIG51bGw7XG4gIH1cbiAgX3RpdGxlYmFyTW91c2VEb3duKGV2dCkge1xuICAgIGlmICh0aGlzLm9uTW91c2VEb3duLm9ic2VydmVycy5sZW5ndGggPj0gMSkge1xuICAgICAgdGhpcy5vbk1vdXNlRG93bi5lbWl0KGV2dCk7XG4gICAgfVxuICB9XG4gIF9idXR0b25TZXR0aW5nQ2xpY2soZXZ0KSB7XG4gICAgaWYgKHRoaXMub25DbGlja1NldHRpbmcub2JzZXJ2ZXJzLmxlbmd0aCA+PSAxKSB7XG4gICAgICB0aGlzLm9uQ2xpY2tTZXR0aW5nLmVtaXQoZXZ0KTtcbiAgICB9XG4gIH1cbiAgX2J1dHRvbkNvbGxhcHNlQ2xpY2soZXZ0KSB7XG4gICAgaWYgKHRoaXMub25DbGlja0NvbGxhcHNlLm9ic2VydmVycy5sZW5ndGggPj0gMSkge1xuICAgICAgdGhpcy5vbkNsaWNrQ29sbGFwc2UuZW1pdChldnQpO1xuICAgIH1cbiAgfVxuICBfYnV0dG9uTWF4aW1pemVDbGljayhldnQpIHtcbiAgICBpZiAodGhpcy5vbkNsaWNrTWF4aW1pemUub2JzZXJ2ZXJzLmxlbmd0aCA+PSAxKSB7XG4gICAgICB0aGlzLm9uQ2xpY2tNYXhpbWl6ZS5lbWl0KGV2dCk7XG4gICAgfVxuICB9XG4gIF9idXR0b25DbG9zZUNsaWNrKGV2dCkge1xuICAgIGlmICh0aGlzLm9uQ2xpY2tDbG9zZS5vYnNlcnZlcnMubGVuZ3RoID49IDEpIHtcbiAgICAgIHRoaXMub25DbGlja0Nsb3NlLmVtaXQoZXZ0KTtcbiAgICB9XG4gIH1cbn1cbi8qXG48ZGl2IGNsYXNzPVwic3NwYW5lbF90aXRsZWJhciBzc3BhbmVsX3RpdGxlYmFyX2RyYWdnYWJsZVwiICNzc3BhbmVsX3RpdGxlYmFyXG4gICAgICAobW91c2Vkb3duKT1cIl90aXRsZWJhcl9Nb3VzZURvd24oJGV2ZW50KTtcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJwYW5lbEljb25cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImljb25cIj5cbiAgICAgICAgICA8aW1nICpuZ0lmPVwicGFuZWxJY29uLmlzU2hvd0ltZ1wiIFtzcmNdPVwicGFuZWxJY29uLmljb25cIj5cbiAgICAgICAgICA8aSAqbmdJZj1cIiFwYW5lbEljb24uaXNTaG93SW1nXCIgbnotaWNvbiBbbnpJY29uZm9udF09XCJwYW5lbEljb24uaWNvblwiPjwvaT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzc3BhbmVsX3RpdGxlYmFyX3RleHRcIj48c3BhbiBjbGFzcz1cInNzcGFuZWxfdGl0bGViYXJfdGV4dF9zcGFuXCI+e3tvcHRpb25zLnRpdGxlfX08L3NwYW4+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwic3NwYW5lbF90aXRsZWJhcl9idXR0b24gc3NwYW5lbF90aXRsZWJhcl9idXR0b25fc2V0dGluZ1wiIHRpdGxlPVwi6K6+572uXCIgKGNsaWNrKT1cIm9wZW5XaWRnZXRTZXR0aW5nKCk7XCI+XG4gICAgICAgIDxlcHNnaXMtaWNvbi1zZXR0aW5nPjwvZXBzZ2lzLWljb24tc2V0dGluZz5cbiAgICAgIDwvZGl2PlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm9wdGlvbnMuYnV0dG9uQ29sbGFwc2VcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIndpbmRvd1N0YXRlPT0nY29sbGFwc2VkJzsgZWxzZSBzaG93Q29sbGFwc2VkQnV0dG9uXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNzcGFuZWxfdGl0bGViYXJfYnV0dG9uIHNzcGFuZWxfdGl0bGViYXJfYnV0dG9uX3VuY29sbGFwc2VcIiB0aXRsZT1cInt7b3B0aW9ucy5idXR0b25VbkNvbGxhcHNlVGV4dH19XCJcbiAgICAgICAgICAgIChjbGljayk9XCJfYnV0dG9uQ29sbGFwc2VfQ2xpY2soJGV2ZW50KTtcIj5cbiAgICAgICAgICAgIDxlcHNnaXMtaWNvbi11bmNvbGxhcHNlZD48L2Vwc2dpcy1pY29uLXVuY29sbGFwc2VkPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPG5nLXRlbXBsYXRlICNzaG93Q29sbGFwc2VkQnV0dG9uPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzc3BhbmVsX3RpdGxlYmFyX2J1dHRvbiBzc3BhbmVsX3RpdGxlYmFyX2J1dHRvbl9jb2xsYXBzZVwiIHRpdGxlPVwie3tvcHRpb25zLmJ1dHRvbkNvbGxhcHNlVGV4dH19XCJcbiAgICAgICAgICAgIChjbGljayk9XCJfYnV0dG9uQ29sbGFwc2VfQ2xpY2soJGV2ZW50KTtcIj5cbiAgICAgICAgICAgIDxlcHNnaXMtaWNvbi1jb2xsYXBzZWQ+PC9lcHNnaXMtaWNvbi1jb2xsYXBzZWQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJvcHRpb25zLmJ1dHRvbk1heGltaXplXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ3aW5kb3dTdGF0ZSA9PSAnbWF4aW1pemVkJzsgZWxzZSBzaG93TWF4aW1pemVCdXR0b25cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic3NwYW5lbF90aXRsZWJhcl9idXR0b24gc3NwYW5lbF90aXRsZWJhcl9idXR0b25fdW5tYXhpbWl6ZVwiIHRpdGxlPVwie3tvcHRpb25zLmJ1dHRvblVubWF4aW1pemVUZXh0fX1cIlxuICAgICAgICAgICAgKGNsaWNrKT1cIl9idXR0b25NYXhfQ2xpY2soJGV2ZW50KTtcIj5cbiAgICAgICAgICAgIDxlcHNnaXMtaWNvbi11bm1heGltaXplPjwvZXBzZ2lzLWljb24tdW5tYXhpbWl6ZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjc2hvd01heGltaXplQnV0dG9uPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzc3BhbmVsX3RpdGxlYmFyX2J1dHRvbiBzc3BhbmVsX3RpdGxlYmFyX2J1dHRvbl9tYXhpbWl6ZVwiIHRpdGxlPVwie3tvcHRpb25zLmJ1dHRvbk1heGltaXplVGV4dH19XCJcbiAgICAgICAgICAgIChjbGljayk9XCJfYnV0dG9uTWF4X0NsaWNrKCRldmVudCk7XCI+XG4gICAgICAgICAgICA8ZXBzZ2lzLWljb24tbWF4aW1pemU+PC9lcHNnaXMtaWNvbi1tYXhpbWl6ZT5cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJvcHRpb25zLmJ1dHRvbkNsb3NlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzc3BhbmVsX3RpdGxlYmFyX2J1dHRvbiBzc3BhbmVsX3RpdGxlYmFyX2J1dHRvbl9jbG9zZVwiIHRpdGxlPVwie3tvcHRpb25zLmJ1dHRvbkNsb3NlVGV4dH19XCJcbiAgICAgICAgICAoY2xpY2spPVwiY2xvc2VQYW5lbCgkZXZlbnQpO1wiPlxuICAgICAgICAgIDxlcHNnaXMtaWNvbi1jbG9zZT48L2Vwc2dpcy1pY29uLWNsb3NlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuICAgICovIl19