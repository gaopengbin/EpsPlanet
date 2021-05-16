/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Component, Input, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/icon";
function ProTabCloseButtonComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 3);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r0.closeIcon);
} }
function ProTabCloseButtonComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "i", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzType", ctx_r1.closeIcon);
} }
export class ProTabCloseButtonComponent {
    constructor() {
        this.closeIcon = 'close';
    }
    isNonEmptyString(value) {
        return typeof value === 'string' && value !== '';
    }
    isTemplateRef(value) {
        return value instanceof TemplateRef;
    }
}
ProTabCloseButtonComponent.ɵfac = function ProTabCloseButtonComponent_Factory(t) { return new (t || ProTabCloseButtonComponent)(); };
ProTabCloseButtonComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ProTabCloseButtonComponent, selectors: [["pro-tab-close-button"], ["button", "pro-tab-close-button", ""]], hostAttrs: ["aria-label", "Close tab", "type", "button", 1, "ant-pro-tabs-tab-remove"], inputs: { closeIcon: "closeIcon" }, decls: 3, vars: 3, consts: [[3, "ngSwitch"], [3, "ngTemplateOutlet", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [3, "ngTemplateOutlet"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"]], template: function ProTabCloseButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0, 0);
        i0.ɵɵtemplate(1, ProTabCloseButtonComponent_ng_container_1_Template, 1, 1, "ng-container", 1);
        i0.ɵɵtemplate(2, ProTabCloseButtonComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
        i0.ɵɵelementContainerEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngSwitch", true);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", ctx.isTemplateRef(ctx.closeIcon));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", ctx.isNonEmptyString(ctx.closeIcon));
    } }, directives: [i1.NgSwitch, i1.NgSwitchCase, i1.NgTemplateOutlet, i2.NzIconDirective], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProTabCloseButtonComponent, [{
        type: Component,
        args: [{
                selector: 'pro-tab-close-button, button[pro-tab-close-button]',
                template: `
    <ng-container [ngSwitch]="true">
      <ng-container *ngSwitchCase="isTemplateRef(closeIcon)" [ngTemplateOutlet]="closeIcon"></ng-container>
      <ng-container *ngSwitchCase="isNonEmptyString(closeIcon)"><i nz-icon [nzType]="closeIcon" nzTheme="outline"></i></ng-container>
    </ng-container>
  `,
                host: {
                    class: 'ant-pro-tabs-tab-remove',
                    'aria-label': 'Close tab',
                    type: 'button'
                }
            }]
    }], function () { return []; }, { closeIcon: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWNsb3NlLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wcm8tbGF5b3V0L3NyYy9saWIvdGFicy90YWItY2xvc2UtYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBR0c7QUFFSCxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0lBT3hELDJCQUFxRzs7O0lBQTlDLG1EQUE4Qjs7O0lBQ3JGLDZCQUEwRDtJQUFBLHVCQUFzRDtJQUFBLDBCQUFlOzs7SUFBMUQsZUFBb0I7SUFBcEIseUNBQW9COztBQVMvRixNQUFNLE9BQU8sMEJBQTBCO0lBR3JDO1FBRlMsY0FBUyxHQUE4QixPQUFPLENBQUM7SUFFekMsQ0FBQztJQUVoQixnQkFBZ0IsQ0FBQyxLQUFTO1FBQ3hCLE9BQU8sT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLEtBQUssS0FBSyxFQUFFLENBQUM7SUFDbkQsQ0FBQztJQUVELGFBQWEsQ0FBQyxLQUFTO1FBQ3JCLE9BQU8sS0FBSyxZQUFZLFdBQVcsQ0FBQztJQUN0QyxDQUFDOztvR0FYVSwwQkFBMEI7K0RBQTFCLDBCQUEwQjtRQVhuQyxnQ0FBZ0M7UUFDOUIsNkZBQXFHO1FBQ3JHLDZGQUErSDtRQUNqSSwwQkFBZTs7UUFIRCwrQkFBaUI7UUFDZCxlQUFzQztRQUF0QywrREFBc0M7UUFDdEMsZUFBeUM7UUFBekMsa0VBQXlDOzt1RkFTakQsMEJBQTBCO2NBZHRDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsb0RBQW9EO2dCQUM5RCxRQUFRLEVBQUU7Ozs7O0dBS1Q7Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSx5QkFBeUI7b0JBQ2hDLFlBQVksRUFBRSxXQUFXO29CQUN6QixJQUFJLEVBQUUsUUFBUTtpQkFDZjthQUNGO3NDQUVVLFNBQVM7a0JBQWpCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Byby10YWItY2xvc2UtYnV0dG9uLCBidXR0b25bcHJvLXRhYi1jbG9zZS1idXR0b25dJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJ0cnVlXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc1RlbXBsYXRlUmVmKGNsb3NlSWNvbilcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJjbG9zZUljb25cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzTm9uRW1wdHlTdHJpbmcoY2xvc2VJY29uKVwiPjxpIG56LWljb24gW256VHlwZV09XCJjbG9zZUljb25cIiBuelRoZW1lPVwib3V0bGluZVwiPjwvaT48L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgYCxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnYW50LXByby10YWJzLXRhYi1yZW1vdmUnLFxuICAgICdhcmlhLWxhYmVsJzogJ0Nsb3NlIHRhYicsXG4gICAgdHlwZTogJ2J1dHRvbidcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBQcm9UYWJDbG9zZUJ1dHRvbkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGNsb3NlSWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PiA9ICdjbG9zZSc7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGlzTm9uRW1wdHlTdHJpbmcodmFsdWU6IHt9KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUgIT09ICcnO1xuICB9XG5cbiAgaXNUZW1wbGF0ZVJlZih2YWx1ZToge30pOiBib29sZWFuIHtcbiAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZjtcbiAgfVxufVxuIl19