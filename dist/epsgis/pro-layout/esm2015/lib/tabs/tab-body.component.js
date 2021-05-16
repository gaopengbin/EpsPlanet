/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["pro-tab-body", ""];
function ProTabBodyComponent_ng_container_0_1_ng_template_0_Template(rf, ctx) { }
function ProTabBodyComponent_ng_container_0_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ProTabBodyComponent_ng_container_0_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function ProTabBodyComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ProTabBodyComponent_ng_container_0_1_Template, 1, 0, undefined, 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r0.content);
} }
export class ProTabBodyComponent {
    constructor() {
        this.content = null;
        this.active = false;
        this.tabPaneAnimated = true;
        this.forceRender = false;
    }
}
ProTabBodyComponent.ɵfac = function ProTabBodyComponent_Factory(t) { return new (t || ProTabBodyComponent)(); };
ProTabBodyComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ProTabBodyComponent, selectors: [["", "pro-tab-body", ""]], hostAttrs: [1, "ant-pro-tabs-tabpane"], hostVars: 12, hostBindings: function ProTabBodyComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵattribute("tabindex", ctx.active ? 0 : -1)("aria-hidden", !ctx.active);
        i0.ɵɵstyleProp("visibility", ctx.tabPaneAnimated ? ctx.active ? null : "hidden" : null)("height", ctx.tabPaneAnimated ? ctx.active ? null : 0 : null)("overflow-y", ctx.tabPaneAnimated ? ctx.active ? null : "none" : null)("display", !ctx.tabPaneAnimated ? ctx.active ? null : "none" : null);
        i0.ɵɵclassProp("ant-pro-tabs-tabpane-active", ctx.active);
    } }, inputs: { content: "content", active: "active", tabPaneAnimated: "tabPaneAnimated", forceRender: "forceRender" }, exportAs: ["ProTabBody"], attrs: _c0, decls: 1, vars: 1, consts: [[4, "ngIf"], [4, "ngTemplateOutlet"]], template: function ProTabBodyComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ProTabBodyComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.active || ctx.forceRender);
    } }, directives: [i1.NgIf, i1.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProTabBodyComponent, [{
        type: Component,
        args: [{
                selector: '[pro-tab-body]',
                exportAs: 'ProTabBody',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <ng-container *ngIf="active || forceRender">
      <ng-template *ngTemplateOutlet="content"></ng-template>
    </ng-container>
  `,
                host: {
                    class: 'ant-pro-tabs-tabpane',
                    '[class.ant-pro-tabs-tabpane-active]': 'active',
                    '[attr.tabindex]': 'active ? 0 : -1',
                    '[attr.aria-hidden]': '!active',
                    '[style.visibility]': 'tabPaneAnimated ? active ? null : "hidden" : null',
                    '[style.height]': 'tabPaneAnimated ? active ? null : 0 : null',
                    '[style.overflow-y]': 'tabPaneAnimated ? active ? null : "none" : null',
                    '[style.display]': '!tabPaneAnimated ? active ? null : "none" : null'
                }
            }]
    }], null, { content: [{
            type: Input
        }], active: [{
            type: Input
        }], tabPaneAnimated: [{
            type: Input
        }], forceRender: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWJvZHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcHJvLWxheW91dC9zcmMvbGliL3RhYnMvdGFiLWJvZHkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7R0FHRztBQUVILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFlLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7SUFVcEcsa0dBQXVEOzs7SUFEekQsNkJBQTRDO0lBQzFDLG1GQUF1RDtJQUN6RCwwQkFBZTs7O0lBREMsZUFBeUI7SUFBekIsaURBQXlCOztBQWM3QyxNQUFNLE9BQU8sbUJBQW1CO0lBdEJoQztRQXVCVyxZQUFPLEdBQTZCLElBQUksQ0FBQztRQUN6QyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2Ysb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFDdkIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7S0FDOUI7O3NGQUxZLG1CQUFtQjt3REFBbkIsbUJBQW1COzs7OztRQWY1QixzRkFFZTs7UUFGQSxvREFBMkI7O3VGQWVqQyxtQkFBbUI7Y0F0Qi9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUUsWUFBWTtnQkFDdEIsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUU7Ozs7R0FJVDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLHNCQUFzQjtvQkFDN0IscUNBQXFDLEVBQUUsUUFBUTtvQkFDL0MsaUJBQWlCLEVBQUUsaUJBQWlCO29CQUNwQyxvQkFBb0IsRUFBRSxTQUFTO29CQUMvQixvQkFBb0IsRUFBRSxtREFBbUQ7b0JBQ3pFLGdCQUFnQixFQUFFLDRDQUE0QztvQkFDOUQsb0JBQW9CLEVBQUUsaURBQWlEO29CQUN2RSxpQkFBaUIsRUFBRSxrREFBa0Q7aUJBQ3RFO2FBQ0Y7Z0JBRVUsT0FBTztrQkFBZixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1twcm8tdGFiLWJvZHldJyxcbiAgZXhwb3J0QXM6ICdQcm9UYWJCb2R5JyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJhY3RpdmUgfHwgZm9yY2VSZW5kZXJcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSAqbmdUZW1wbGF0ZU91dGxldD1cImNvbnRlbnRcIj48L25nLXRlbXBsYXRlPlxuICAgIDwvbmctY29udGFpbmVyPlxuICBgLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdhbnQtcHJvLXRhYnMtdGFicGFuZScsXG4gICAgJ1tjbGFzcy5hbnQtcHJvLXRhYnMtdGFicGFuZS1hY3RpdmVdJzogJ2FjdGl2ZScsXG4gICAgJ1thdHRyLnRhYmluZGV4XSc6ICdhY3RpdmUgPyAwIDogLTEnLFxuICAgICdbYXR0ci5hcmlhLWhpZGRlbl0nOiAnIWFjdGl2ZScsXG4gICAgJ1tzdHlsZS52aXNpYmlsaXR5XSc6ICd0YWJQYW5lQW5pbWF0ZWQgPyBhY3RpdmUgPyBudWxsIDogXCJoaWRkZW5cIiA6IG51bGwnLFxuICAgICdbc3R5bGUuaGVpZ2h0XSc6ICd0YWJQYW5lQW5pbWF0ZWQgPyBhY3RpdmUgPyBudWxsIDogMCA6IG51bGwnLFxuICAgICdbc3R5bGUub3ZlcmZsb3cteV0nOiAndGFiUGFuZUFuaW1hdGVkID8gYWN0aXZlID8gbnVsbCA6IFwibm9uZVwiIDogbnVsbCcsXG4gICAgJ1tzdHlsZS5kaXNwbGF5XSc6ICchdGFiUGFuZUFuaW1hdGVkID8gYWN0aXZlID8gbnVsbCA6IFwibm9uZVwiIDogbnVsbCdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBQcm9UYWJCb2R5Q29tcG9uZW50IHtcbiAgQElucHV0KCkgY29udGVudDogVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgYWN0aXZlID0gZmFsc2U7XG4gIEBJbnB1dCgpIHRhYlBhbmVBbmltYXRlZCA9IHRydWU7XG4gIEBJbnB1dCgpIGZvcmNlUmVuZGVyID0gZmFsc2U7XG59XG4iXX0=