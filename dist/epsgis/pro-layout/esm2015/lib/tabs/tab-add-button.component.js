/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Component, Input, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/icon";
function ProTabAddButtonComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 3);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r0.addIcon);
} }
function ProTabAddButtonComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "i", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzType", ctx_r1.addIcon);
} }
export class ProTabAddButtonComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.addIcon = 'plus';
        this.element = this.elementRef.nativeElement;
    }
    getElementWidth() {
        return this.element.offsetWidth || 0;
    }
    getElementHeight() {
        return this.element.offsetHeight || 0;
    }
    isNonEmptyString(value) {
        return typeof value === 'string' && value !== '';
    }
    isTemplateRef(value) {
        return value instanceof TemplateRef;
    }
}
ProTabAddButtonComponent.ɵfac = function ProTabAddButtonComponent_Factory(t) { return new (t || ProTabAddButtonComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
ProTabAddButtonComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ProTabAddButtonComponent, selectors: [["pro-tab-add-button"], ["button", "pro-tab-add-button", ""]], hostAttrs: ["aria-label", "Add tab", "type", "button", 1, "ant-pro-tabs-nav-add"], inputs: { addIcon: "addIcon" }, decls: 3, vars: 3, consts: [[3, "ngSwitch"], [3, "ngTemplateOutlet", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [3, "ngTemplateOutlet"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"]], template: function ProTabAddButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0, 0);
        i0.ɵɵtemplate(1, ProTabAddButtonComponent_ng_container_1_Template, 1, 1, "ng-container", 1);
        i0.ɵɵtemplate(2, ProTabAddButtonComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
        i0.ɵɵelementContainerEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngSwitch", true);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", ctx.isTemplateRef(ctx.addIcon));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", ctx.isNonEmptyString(ctx.addIcon));
    } }, directives: [i1.NgSwitch, i1.NgSwitchCase, i1.NgTemplateOutlet, i2.NzIconDirective], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProTabAddButtonComponent, [{
        type: Component,
        args: [{
                selector: 'pro-tab-add-button, button[pro-tab-add-button]',
                template: `
    <ng-container [ngSwitch]="true">
      <ng-container *ngSwitchCase="isTemplateRef(addIcon)" [ngTemplateOutlet]="addIcon"></ng-container>
      <ng-container *ngSwitchCase="isNonEmptyString(addIcon)"><i nz-icon [nzType]="addIcon" nzTheme="outline"></i></ng-container>
    </ng-container>
  `,
                host: {
                    class: 'ant-pro-tabs-nav-add',
                    'aria-label': 'Add tab',
                    type: 'button'
                }
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { addIcon: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWFkZC1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcHJvLWxheW91dC9zcmMvbGliL3RhYnMvdGFiLWFkZC1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7R0FHRztBQUVILE9BQU8sRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7SUFNcEUsMkJBQWlHOzs7SUFBNUMsaURBQTRCOzs7SUFDakYsNkJBQXdEO0lBQUEsdUJBQW9EO0lBQUEsMEJBQWU7OztJQUF4RCxlQUFrQjtJQUFsQix1Q0FBa0I7O0FBUzNGLE1BQU0sT0FBTyx3QkFBd0I7SUFLbkMsWUFBb0IsVUFBbUM7UUFBbkMsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7UUFKOUMsWUFBTyxHQUE4QixNQUFNLENBQUM7UUFLbkQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztJQUMvQyxDQUFDO0lBRUQsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsS0FBUztRQUN4QixPQUFPLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxLQUFLLEtBQUssRUFBRSxDQUFDO0lBQ25ELENBQUM7SUFFRCxhQUFhLENBQUMsS0FBUztRQUNyQixPQUFPLEtBQUssWUFBWSxXQUFXLENBQUM7SUFDdEMsQ0FBQzs7Z0dBdkJVLHdCQUF3Qjs2REFBeEIsd0JBQXdCO1FBWGpDLGdDQUFnQztRQUM5QiwyRkFBaUc7UUFDakcsMkZBQTJIO1FBQzdILDBCQUFlOztRQUhELCtCQUFpQjtRQUNkLGVBQW9DO1FBQXBDLDZEQUFvQztRQUNwQyxlQUF1QztRQUF2QyxnRUFBdUM7O3VGQVMvQyx3QkFBd0I7Y0FkcEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxnREFBZ0Q7Z0JBQzFELFFBQVEsRUFBRTs7Ozs7R0FLVDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLHNCQUFzQjtvQkFDN0IsWUFBWSxFQUFFLFNBQVM7b0JBQ3ZCLElBQUksRUFBRSxRQUFRO2lCQUNmO2FBQ0Y7NkRBRVUsT0FBTztrQkFBZixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncHJvLXRhYi1hZGQtYnV0dG9uLCBidXR0b25bcHJvLXRhYi1hZGQtYnV0dG9uXScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwidHJ1ZVwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNUZW1wbGF0ZVJlZihhZGRJY29uKVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImFkZEljb25cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzTm9uRW1wdHlTdHJpbmcoYWRkSWNvbilcIj48aSBuei1pY29uIFtuelR5cGVdPVwiYWRkSWNvblwiIG56VGhlbWU9XCJvdXRsaW5lXCI+PC9pPjwvbmctY29udGFpbmVyPlxuICAgIDwvbmctY29udGFpbmVyPlxuICBgLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdhbnQtcHJvLXRhYnMtbmF2LWFkZCcsXG4gICAgJ2FyaWEtbGFiZWwnOiAnQWRkIHRhYicsXG4gICAgdHlwZTogJ2J1dHRvbidcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBQcm9UYWJBZGRCdXR0b25Db21wb25lbnQge1xuICBASW5wdXQoKSBhZGRJY29uOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+ID0gJ3BsdXMnO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgZWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pikge1xuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgZ2V0RWxlbWVudFdpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5vZmZzZXRXaWR0aCB8fCAwO1xuICB9XG5cbiAgZ2V0RWxlbWVudEhlaWdodCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQub2Zmc2V0SGVpZ2h0IHx8IDA7XG4gIH1cblxuICBpc05vbkVtcHR5U3RyaW5nKHZhbHVlOiB7fSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlICE9PSAnJztcbiAgfVxuXG4gIGlzVGVtcGxhdGVSZWYodmFsdWU6IHt9KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWY7XG4gIH1cbn1cbiJdfQ==