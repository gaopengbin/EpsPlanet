/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/dropdown";
import * as i2 from "ng-zorro-antd/icon";
import * as i3 from "@angular/common";
import * as i4 from "ng-zorro-antd/menu";
import * as i5 from "./tab-add-button.component";
function ProTabNavOperationComponent_ul_5_li_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 12);
} if (rf & 2) {
    const item_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngTemplateOutlet", item_r5.tab.label);
} }
function ProTabNavOperationComponent_ul_5_li_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r5.tab.label);
} }
function ProTabNavOperationComponent_ul_5_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 8);
    i0.ɵɵlistener("click", function ProTabNavOperationComponent_ul_5_li_1_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r11); const item_r5 = ctx.$implicit; const ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.onSelect(item_r5); })("contextmenu", function ProTabNavOperationComponent_ul_5_li_1_Template_li_contextmenu_0_listener($event) { i0.ɵɵrestoreView(_r11); const item_r5 = ctx.$implicit; const ctx_r12 = i0.ɵɵnextContext(2); return ctx_r12.onContextmenu(item_r5, $event); });
    i0.ɵɵelementContainerStart(1, 9);
    i0.ɵɵtemplate(2, ProTabNavOperationComponent_ul_5_li_1_ng_container_2_Template, 1, 1, "ng-container", 10);
    i0.ɵɵtemplate(3, ProTabNavOperationComponent_ul_5_li_1_ng_container_3_Template, 2, 1, "ng-container", 11);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("ant-pro-tabs-dropdown-menu-item-disabled", item_r5.disabled);
    i0.ɵɵproperty("nzSelected", item_r5.active)("nzDisabled", item_r5.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r4.isTemplateRef(item_r5.tab.label));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r4.isNonEmptyString(item_r5.tab.label));
} }
function ProTabNavOperationComponent_ul_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 6);
    i0.ɵɵtemplate(1, ProTabNavOperationComponent_ul_5_li_1_Template, 4, 7, "li", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r2.items);
} }
function ProTabNavOperationComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 13);
    i0.ɵɵlistener("click", function ProTabNavOperationComponent_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.addClicked.emit(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("addIcon", ctx_r3.addIcon);
} }
const _c0 = function () { return { minWidth: "46px" }; };
export class ProTabNavOperationComponent {
    constructor(cdr, elementRef) {
        this.cdr = cdr;
        this.elementRef = elementRef;
        this.items = [];
        this.addable = false;
        this.addIcon = 'plus';
        this.addClicked = new EventEmitter();
        this.selected = new EventEmitter();
        this.closeAnimationWaitTimeoutId = -1;
        this.menuOpened = false;
        this.element = this.elementRef.nativeElement;
    }
    onSelect(item) {
        if (!item.disabled) {
            // ignore nzCanDeactivate
            item.tab.nzClick.emit();
            this.selected.emit(item);
        }
    }
    onContextmenu(item, e) {
        if (!item.disabled) {
            item.tab.nzContextmenu.emit(e);
        }
    }
    showItems() {
        clearTimeout(this.closeAnimationWaitTimeoutId);
        this.menuOpened = true;
        this.cdr.markForCheck();
    }
    menuVisChange(visible) {
        if (!visible) {
            this.closeAnimationWaitTimeoutId = setTimeout(() => {
                this.menuOpened = false;
                this.cdr.markForCheck();
            }, 150);
        }
    }
    getElementWidth() {
        return this.element.offsetWidth || 0;
    }
    getElementHeight() {
        return this.element.offsetHeight || 0;
    }
    ngOnDestroy() {
        clearTimeout(this.closeAnimationWaitTimeoutId);
    }
    isNonEmptyString(value) {
        return typeof value === 'string' && value !== '';
    }
    isTemplateRef(value) {
        return value instanceof TemplateRef;
    }
}
ProTabNavOperationComponent.ɵfac = function ProTabNavOperationComponent_Factory(t) { return new (t || ProTabNavOperationComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef)); };
ProTabNavOperationComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ProTabNavOperationComponent, selectors: [["pro-tab-nav-operation"]], hostAttrs: [1, "ant-pro-tabs-nav-operations"], hostVars: 2, hostBindings: function ProTabNavOperationComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("ant-pro-tabs-nav-operations-hidden", ctx.items.length === 0);
    } }, inputs: { items: "items", addable: "addable", addIcon: "addIcon" }, outputs: { addClicked: "addClicked", selected: "selected" }, exportAs: ["ProTabNavOperation"], decls: 7, vars: 6, consts: [["nz-dropdown", "", "type", "button", "tabindex", "-1", "aria-hidden", "true", "nzOverlayClassName", "pro-tabs-dropdown", 1, "ant-pro-tabs-nav-more", 3, "nzDropdownMenu", "nzOverlayStyle", "nzMatchWidthElement", "nzVisibleChange", "mouseenter"], ["dropdownTrigger", "nzDropdown"], ["nz-icon", "", "nzType", "ellipsis"], ["menu", "nzDropdownMenu"], ["nz-menu", "", 4, "ngIf"], ["pro-tab-add-button", "", 3, "addIcon", "click", 4, "ngIf"], ["nz-menu", ""], ["nz-menu-item", "", "class", "ant-pro-tabs-dropdown-menu-item", 3, "ant-pro-tabs-dropdown-menu-item-disabled", "nzSelected", "nzDisabled", "click", "contextmenu", 4, "ngFor", "ngForOf"], ["nz-menu-item", "", 1, "ant-pro-tabs-dropdown-menu-item", 3, "nzSelected", "nzDisabled", "click", "contextmenu"], [3, "ngSwitch"], [3, "ngTemplateOutlet", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [3, "ngTemplateOutlet"], ["pro-tab-add-button", "", 3, "addIcon", "click"]], template: function ProTabNavOperationComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0, 1);
        i0.ɵɵlistener("nzVisibleChange", function ProTabNavOperationComponent_Template_button_nzVisibleChange_0_listener($event) { return ctx.menuVisChange($event); })("mouseenter", function ProTabNavOperationComponent_Template_button_mouseenter_0_listener() { return ctx.showItems(); });
        i0.ɵɵelement(2, "i", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "nz-dropdown-menu", null, 3);
        i0.ɵɵtemplate(5, ProTabNavOperationComponent_ul_5_Template, 2, 1, "ul", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(6, ProTabNavOperationComponent_button_6_Template, 1, 1, "button", 5);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(4);
        i0.ɵɵproperty("nzDropdownMenu", _r1)("nzOverlayStyle", i0.ɵɵpureFunction0(5, _c0))("nzMatchWidthElement", null);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", ctx.menuOpened);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.addable);
    } }, directives: [i1.NzDropDownDirective, i2.NzIconDirective, i1.NzDropdownMenuComponent, i3.NgIf, i4.NzMenuDirective, i3.NgForOf, i4.NzMenuItemDirective, i3.NgSwitch, i3.NgSwitchCase, i3.NgTemplateOutlet, i5.ProTabAddButtonComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProTabNavOperationComponent, [{
        type: Component,
        args: [{
                selector: 'pro-tab-nav-operation',
                exportAs: 'ProTabNavOperation',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: `
    <button
      nz-dropdown
      class="ant-pro-tabs-nav-more"
      type="button"
      tabindex="-1"
      aria-hidden="true"
      nzOverlayClassName="pro-tabs-dropdown"
      #dropdownTrigger="nzDropdown"
      [nzDropdownMenu]="menu"
      [nzOverlayStyle]="{ minWidth: '46px' }"
      [nzMatchWidthElement]="null"
      (nzVisibleChange)="menuVisChange($event)"
      (mouseenter)="showItems()"
    >
      <i nz-icon nzType="ellipsis"></i>
    </button>
    <nz-dropdown-menu #menu="nzDropdownMenu">
      <ul nz-menu *ngIf="menuOpened">
        <li
          nz-menu-item
          *ngFor="let item of items"
          class="ant-pro-tabs-dropdown-menu-item"
          [class.ant-pro-tabs-dropdown-menu-item-disabled]="item.disabled"
          [nzSelected]="item.active"
          [nzDisabled]="item.disabled"
          (click)="onSelect(item)"
          (contextmenu)="onContextmenu(item, $event)"
        >
          <ng-container [ngSwitch]="true">
            <ng-container *ngSwitchCase="isTemplateRef(item.tab.label)" [ngTemplateOutlet]="item.tab.label"></ng-container>
            <ng-container *ngSwitchCase="isNonEmptyString(item.tab.label)">{{item.tab.label}}</ng-container>
          </ng-container>
        </li>
      </ul>
    </nz-dropdown-menu>
    <button *ngIf="addable" pro-tab-add-button [addIcon]="addIcon" (click)="addClicked.emit()"></button>
  `,
                host: {
                    class: 'ant-pro-tabs-nav-operations',
                    '[class.ant-pro-tabs-nav-operations-hidden]': 'items.length === 0'
                }
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }]; }, { items: [{
            type: Input
        }], addable: [{
            type: Input
        }], addIcon: [{
            type: Input
        }], addClicked: [{
            type: Output
        }], selected: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLW5hdi1vcGVyYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcHJvLWxheW91dC9zcmMvbGliL3RhYnMvdGFiLW5hdi1vcGVyYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7R0FHRztBQUVILE9BQU8sRUFDTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUVULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0lBeUNYLDRCQUErRzs7O0lBQW5ELG9EQUFtQzs7O0lBQy9GLDZCQUErRDtJQUFBLFlBQWtCO0lBQUEsMEJBQWU7OztJQUFqQyxlQUFrQjtJQUFsQix1Q0FBa0I7Ozs7SUFackYsNkJBU0M7SUFGQyx1T0FBd0IseVBBQUE7SUFHeEIsZ0NBQWdDO0lBQzlCLHlHQUErRztJQUMvRyx5R0FBZ0c7SUFDbEcsMEJBQWU7SUFDakIsaUJBQUs7Ozs7SUFWSCw0RUFBZ0U7SUFDaEUsMkNBQTBCLGdDQUFBO0lBS1osZUFBaUI7SUFBakIsK0JBQWlCO0lBQ2QsZUFBMkM7SUFBM0Msc0VBQTJDO0lBQzNDLGVBQThDO0lBQTlDLHlFQUE4Qzs7O0lBYm5FLDZCQUErQjtJQUM3QiwrRUFjSztJQUNQLGlCQUFLOzs7SUFiZ0IsZUFBUTtJQUFSLHNDQUFROzs7O0lBZS9CLGtDQUEyRjtJQUE1Qiw2S0FBUyx5QkFBaUIsSUFBQztJQUFDLGlCQUFTOzs7SUFBekQsd0NBQW1COzs7QUFPbEUsTUFBTSxPQUFPLDJCQUEyQjtJQVd0QyxZQUFtQixHQUFzQixFQUFVLFVBQW1DO1FBQW5FLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7UUFWN0UsVUFBSyxHQUE2QixFQUFFLENBQUM7UUFDckMsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6QixZQUFPLEdBQThCLE1BQU0sQ0FBQztRQUVsQyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUN0QyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQTBCLENBQUM7UUFDekUsZ0NBQTJCLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDakMsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUlqQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO0lBQy9DLENBQUM7SUFFRCxRQUFRLENBQUMsSUFBNEI7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIseUJBQXlCO1lBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQUVELGFBQWEsQ0FBQyxJQUE0QixFQUFFLENBQWE7UUFDdkQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQztJQUNELFNBQVM7UUFDUCxZQUFZLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWdCO1FBQzVCLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDWixJQUFJLENBQUMsMkJBQTJCLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDakQsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDMUIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ1Q7SUFDSCxDQUFDO0lBRUQsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsV0FBVztRQUNULFlBQVksQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsS0FBUztRQUN4QixPQUFPLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxLQUFLLEtBQUssRUFBRSxDQUFDO0lBQ25ELENBQUM7SUFFRCxhQUFhLENBQUMsS0FBUztRQUNyQixPQUFPLEtBQUssWUFBWSxXQUFXLENBQUM7SUFDdEMsQ0FBQzs7c0dBN0RVLDJCQUEyQjtnRUFBM0IsMkJBQTJCOzs7UUExQ3BDLG9DQWFDO1FBRkMsa0lBQW1CLHlCQUFxQixJQUFDLHFHQUMzQixlQUFXLElBRGdCO1FBR3pDLHVCQUFpQztRQUNuQyxpQkFBUztRQUNULGlEQUF5QztRQUN2QywwRUFnQks7UUFDUCxpQkFBbUI7UUFDbkIsa0ZBQW9HOzs7UUEzQmxHLG9DQUF1Qiw4Q0FBQSw2QkFBQTtRQVNWLGVBQWdCO1FBQWhCLHFDQUFnQjtRQWtCdEIsZUFBYTtRQUFiLGtDQUFhOzt1RkFPYiwyQkFBMkI7Y0FqRHZDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXFDVDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLDZCQUE2QjtvQkFDcEMsNENBQTRDLEVBQUUsb0JBQW9CO2lCQUNuRTthQUNGOzZGQUVVLEtBQUs7a0JBQWIsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUVhLFVBQVU7a0JBQTVCLE1BQU07WUFDWSxRQUFRO2tCQUExQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuaW1wb3J0IHsgUHJvVGFiTmF2SXRlbURpcmVjdGl2ZSB9IGZyb20gJy4vdGFiLW5hdi1pdGVtLmRpcmVjdGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Byby10YWItbmF2LW9wZXJhdGlvbicsXG4gIGV4cG9ydEFzOiAnUHJvVGFiTmF2T3BlcmF0aW9uJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxidXR0b25cbiAgICAgIG56LWRyb3Bkb3duXG4gICAgICBjbGFzcz1cImFudC1wcm8tdGFicy1uYXYtbW9yZVwiXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIHRhYmluZGV4PVwiLTFcIlxuICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgIG56T3ZlcmxheUNsYXNzTmFtZT1cInByby10YWJzLWRyb3Bkb3duXCJcbiAgICAgICNkcm9wZG93blRyaWdnZXI9XCJuekRyb3Bkb3duXCJcbiAgICAgIFtuekRyb3Bkb3duTWVudV09XCJtZW51XCJcbiAgICAgIFtuek92ZXJsYXlTdHlsZV09XCJ7IG1pbldpZHRoOiAnNDZweCcgfVwiXG4gICAgICBbbnpNYXRjaFdpZHRoRWxlbWVudF09XCJudWxsXCJcbiAgICAgIChuelZpc2libGVDaGFuZ2UpPVwibWVudVZpc0NoYW5nZSgkZXZlbnQpXCJcbiAgICAgIChtb3VzZWVudGVyKT1cInNob3dJdGVtcygpXCJcbiAgICA+XG4gICAgICA8aSBuei1pY29uIG56VHlwZT1cImVsbGlwc2lzXCI+PC9pPlxuICAgIDwvYnV0dG9uPlxuICAgIDxuei1kcm9wZG93bi1tZW51ICNtZW51PVwibnpEcm9wZG93bk1lbnVcIj5cbiAgICAgIDx1bCBuei1tZW51ICpuZ0lmPVwibWVudU9wZW5lZFwiPlxuICAgICAgICA8bGlcbiAgICAgICAgICBuei1tZW51LWl0ZW1cbiAgICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtc1wiXG4gICAgICAgICAgY2xhc3M9XCJhbnQtcHJvLXRhYnMtZHJvcGRvd24tbWVudS1pdGVtXCJcbiAgICAgICAgICBbY2xhc3MuYW50LXByby10YWJzLWRyb3Bkb3duLW1lbnUtaXRlbS1kaXNhYmxlZF09XCJpdGVtLmRpc2FibGVkXCJcbiAgICAgICAgICBbbnpTZWxlY3RlZF09XCJpdGVtLmFjdGl2ZVwiXG4gICAgICAgICAgW256RGlzYWJsZWRdPVwiaXRlbS5kaXNhYmxlZFwiXG4gICAgICAgICAgKGNsaWNrKT1cIm9uU2VsZWN0KGl0ZW0pXCJcbiAgICAgICAgICAoY29udGV4dG1lbnUpPVwib25Db250ZXh0bWVudShpdGVtLCAkZXZlbnQpXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cInRydWVcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzVGVtcGxhdGVSZWYoaXRlbS50YWIubGFiZWwpXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwiaXRlbS50YWIubGFiZWxcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzTm9uRW1wdHlTdHJpbmcoaXRlbS50YWIubGFiZWwpXCI+e3tpdGVtLnRhYi5sYWJlbH19PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvbnotZHJvcGRvd24tbWVudT5cbiAgICA8YnV0dG9uICpuZ0lmPVwiYWRkYWJsZVwiIHByby10YWItYWRkLWJ1dHRvbiBbYWRkSWNvbl09XCJhZGRJY29uXCIgKGNsaWNrKT1cImFkZENsaWNrZWQuZW1pdCgpXCI+PC9idXR0b24+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ2FudC1wcm8tdGFicy1uYXYtb3BlcmF0aW9ucycsXG4gICAgJ1tjbGFzcy5hbnQtcHJvLXRhYnMtbmF2LW9wZXJhdGlvbnMtaGlkZGVuXSc6ICdpdGVtcy5sZW5ndGggPT09IDAnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgUHJvVGFiTmF2T3BlcmF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgQElucHV0KCkgaXRlbXM6IFByb1RhYk5hdkl0ZW1EaXJlY3RpdmVbXSA9IFtdO1xuICBASW5wdXQoKSBhZGRhYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGFkZEljb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4gPSAncGx1cyc7XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGFkZENsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBzZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8UHJvVGFiTmF2SXRlbURpcmVjdGl2ZT4oKTtcbiAgY2xvc2VBbmltYXRpb25XYWl0VGltZW91dElkID0gLTE7XG4gIG1lbnVPcGVuZWQgPSBmYWxzZTtcblxuICBwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pikge1xuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgb25TZWxlY3QoaXRlbTogUHJvVGFiTmF2SXRlbURpcmVjdGl2ZSk6IHZvaWQge1xuICAgIGlmICghaXRlbS5kaXNhYmxlZCkge1xuICAgICAgLy8gaWdub3JlIG56Q2FuRGVhY3RpdmF0ZVxuICAgICAgaXRlbS50YWIubnpDbGljay5lbWl0KCk7XG4gICAgICB0aGlzLnNlbGVjdGVkLmVtaXQoaXRlbSk7XG4gICAgfVxuICB9XG5cbiAgb25Db250ZXh0bWVudShpdGVtOiBQcm9UYWJOYXZJdGVtRGlyZWN0aXZlLCBlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCFpdGVtLmRpc2FibGVkKSB7XG4gICAgICBpdGVtLnRhYi5uekNvbnRleHRtZW51LmVtaXQoZSk7XG4gICAgfVxuICB9XG4gIHNob3dJdGVtcygpOiB2b2lkIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5jbG9zZUFuaW1hdGlvbldhaXRUaW1lb3V0SWQpO1xuICAgIHRoaXMubWVudU9wZW5lZCA9IHRydWU7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBtZW51VmlzQ2hhbmdlKHZpc2libGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgIHRoaXMuY2xvc2VBbmltYXRpb25XYWl0VGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMubWVudU9wZW5lZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0sIDE1MCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0RWxlbWVudFdpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5vZmZzZXRXaWR0aCB8fCAwO1xuICB9XG5cbiAgZ2V0RWxlbWVudEhlaWdodCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQub2Zmc2V0SGVpZ2h0IHx8IDA7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5jbG9zZUFuaW1hdGlvbldhaXRUaW1lb3V0SWQpO1xuICB9XG5cbiAgaXNOb25FbXB0eVN0cmluZyh2YWx1ZToge30pOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZSAhPT0gJyc7XG4gIH1cblxuICBpc1RlbXBsYXRlUmVmKHZhbHVlOiB7fSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmO1xuICB9XG59XG4iXX0=