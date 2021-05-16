import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/core/transition-patch";
import * as i3 from "ng-zorro-antd/icon";
function GlobalHeaderComponent_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 7);
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r5.logo);
} }
function GlobalHeaderComponent_ng_container_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "img", 8);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", ctx_r6.logo, i0.ɵɵsanitizeUrl);
} }
function GlobalHeaderComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 3);
    i0.ɵɵelementContainerStart(2, 4);
    i0.ɵɵtemplate(3, GlobalHeaderComponent_ng_container_0_ng_container_3_Template, 1, 1, "ng-container", 5);
    i0.ɵɵtemplate(4, GlobalHeaderComponent_ng_container_0_ng_container_4_Template, 2, 1, "ng-container", 6);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngSwitch", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r0.isTemplateRef(ctx_r0.logo));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r0.isNonEmptyString(ctx_r0.logo));
} }
function GlobalHeaderComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function GlobalHeaderComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 9);
    i0.ɵɵlistener("click", function GlobalHeaderComponent_ng_template_2_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.toggle(); });
    i0.ɵɵelement(1, "i", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzType", ctx_r3.collapsed ? "menu-unfold" : "menu-fold");
} }
function GlobalHeaderComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c0 = function () { return { theme: "light", layout: "sidemenu" }; };
const _c1 = function (a0) { return { $implicit: a0 }; };
export class GlobalHeaderComponent {
    constructor() {
        this.collapsedChange = new EventEmitter();
    }
    ngOnInit() {
    }
    toggle() {
        this.collapsedChange.emit(!this.collapsed);
    }
    isNonEmptyString(value) {
        return typeof value === 'string' && value !== '';
    }
    isTemplateRef(value) {
        return value instanceof TemplateRef;
    }
}
GlobalHeaderComponent.ɵfac = function GlobalHeaderComponent_Factory(t) { return new (t || GlobalHeaderComponent)(); };
GlobalHeaderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: GlobalHeaderComponent, selectors: [["pro-global-header"], ["", "pro-global-header", ""]], hostVars: 2, hostBindings: function GlobalHeaderComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassMap("ant-pro-global-header");
    } }, inputs: { isMobile: "isMobile", logo: "logo", collapsed: "collapsed", collapsedButtonRender: "collapsedButtonRender", rightContentRender: "rightContentRender" }, outputs: { collapsedChange: "collapsedChange" }, exportAs: ["proGlobalHeader"], decls: 5, vars: 8, consts: [[4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["defaultCollapsedButtonTemplate", ""], ["key", "logo", 1, "ant-pro-global-header-logo"], [3, "ngSwitch"], [3, "ngTemplateOutlet", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [3, "ngTemplateOutlet"], ["alt", "logo", 3, "src"], [1, "ant-pro-global-header-trigger", 3, "click"], ["nz-icon", "", 3, "nzType"]], template: function GlobalHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, GlobalHeaderComponent_ng_container_0_Template, 5, 3, "ng-container", 0);
        i0.ɵɵtemplate(1, GlobalHeaderComponent_ng_container_1_Template, 1, 0, "ng-container", 1);
        i0.ɵɵtemplate(2, GlobalHeaderComponent_ng_template_2_Template, 2, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(4, GlobalHeaderComponent_ng_container_4_Template, 1, 0, "ng-container", 1);
    } if (rf & 2) {
        const _r2 = i0.ɵɵreference(3);
        i0.ɵɵproperty("ngIf", ctx.isMobile);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.collapsedButtonRender ? ctx.collapsedButtonRender : _r2)("ngTemplateOutletContext", ctx.collapsed);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.rightContentRender)("ngTemplateOutletContext", i0.ɵɵpureFunction1(6, _c1, i0.ɵɵpureFunction0(5, _c0)));
    } }, directives: [i1.NgIf, i1.NgTemplateOutlet, i1.NgSwitch, i1.NgSwitchCase, i2.ɵNzTransitionPatchDirective, i3.NzIconDirective], styles: [".ant-pro-global-header{position:relative;height:64px;padding:0;background:#fff;box-shadow:0 1px 4px rgba(0,21,41,.08)}.ant-pro-global-header-logo{display:inline-block;height:64px;padding:0 0 0 24px;font-size:20px;line-height:64px;vertical-align:top;cursor:pointer}.ant-pro-global-header-logo img{display:inline-block;width:32px;vertical-align:middle}.ant-pro-global-header-menu .anticon{margin-right:8px}.ant-pro-global-header-menu .ant-dropdown-menu-item{min-width:160px}.ant-pro-global-header-trigger{height:64px;padding:calc((64px - 26px) / 2) 24px;font-size:20px;cursor:pointer;transition:all .3s,padding 0s}.ant-pro-global-header-trigger:hover{background:#fff}.ant-pro-global-header .dark{height:64px}.ant-pro-global-header .dark .action,.ant-pro-global-header .dark .action>i{color:hsla(0,0%,100%,.85)}.ant-pro-global-header .dark .action.opened,.ant-pro-global-header .dark .action:hover{background:#1890ff}.ant-pro-global-header .dark .action .ant-badge{color:hsla(0,0%,100%,.85)}"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GlobalHeaderComponent, [{
        type: Component,
        args: [{
                selector: 'pro-global-header,[pro-global-header]',
                templateUrl: 'global-header.component.html',
                styleUrls: ['global-header.component.less'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                exportAs: 'proGlobalHeader',
                preserveWhitespaces: false,
                host: {
                    '[class]': `'ant-pro-global-header'`
                }
            }]
    }], function () { return []; }, { isMobile: [{
            type: Input
        }], logo: [{
            type: Input
        }], collapsed: [{
            type: Input
        }], collapsedButtonRender: [{
            type: Input
        }], rightContentRender: [{
            type: Input
        }], collapsedChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wcm8tbGF5b3V0L3NyYy9saWIvZ2xvYmFsLWhlYWRlci9nbG9iYWwtaGVhZGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Byby1sYXlvdXQvc3JjL2xpYi9nbG9iYWwtaGVhZGVyL2dsb2JhbC1oZWFkZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04sV0FBVyxFQUNYLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQzs7Ozs7O0lDTmpCLDJCQUEyRjs7O0lBQXpDLDhDQUF5Qjs7O0lBQzNFLDZCQUFxRDtJQUFBLHlCQUE4QjtJQUFBLDBCQUFlOzs7SUFBeEMsZUFBWTtJQUFaLG1EQUFZOzs7SUFKNUUsNkJBQStCO0lBQzdCLDRCQUFpRDtJQUMvQyxnQ0FBZ0M7SUFDOUIsdUdBQTJGO0lBQzNGLHVHQUFrRztJQUNwRywwQkFBZTtJQUNqQixpQkFBSTtJQUNOLDBCQUFlOzs7SUFMRyxlQUFpQjtJQUFqQiwrQkFBaUI7SUFDZCxlQUFpQztJQUFqQyxnRUFBaUM7SUFDakMsZUFBb0M7SUFBcEMsbUVBQW9DOzs7SUFLekQsd0JBQWtKOzs7O0lBRzVJLCtCQUErRDtJQUFuQiwyTEFBa0I7SUFDaEUsd0JBQWtFO0lBQ3BFLGlCQUFPOzs7SUFETSxlQUFrRDtJQUFsRCx1RUFBa0Q7OztJQUlqRSx3QkFBaUk7Ozs7QURNakksTUFBTSxPQUFPLHFCQUFxQjtJQVNoQztRQUZVLG9CQUFlLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7SUFHdEUsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxLQUFTO1FBQ3hCLE9BQU8sT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLEtBQUssS0FBSyxFQUFFLENBQUM7SUFDbkQsQ0FBQztJQUVELGFBQWEsQ0FBQyxLQUFTO1FBQ3JCLE9BQU8sS0FBSyxZQUFZLFdBQVcsQ0FBQztJQUN0QyxDQUFDOzswRkF6QlUscUJBQXFCOzBEQUFyQixxQkFBcUI7OztRQ3ZCbEMsd0ZBT2U7UUFFZix3RkFBa0o7UUFFbEosdUhBSWM7UUFFZCx3RkFBaUk7OztRQWpCbEgsbUNBQWM7UUFTZCxlQUFnRztRQUFoRyw4RkFBZ0csMENBQUE7UUFRaEcsZUFBc0M7UUFBdEMseURBQXNDLG1GQUFBOzt1RkRNeEMscUJBQXFCO2NBWmpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsdUNBQXVDO2dCQUNqRCxXQUFXLEVBQUUsOEJBQThCO2dCQUMzQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztnQkFDM0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixJQUFJLEVBQUU7b0JBQ0osU0FBUyxFQUFFLHlCQUF5QjtpQkFDckM7YUFDRjtzQ0FHVSxRQUFRO2tCQUFoQixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLHFCQUFxQjtrQkFBN0IsS0FBSztZQUNHLGtCQUFrQjtrQkFBMUIsS0FBSztZQUNJLGVBQWU7a0JBQXhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwcm8tZ2xvYmFsLWhlYWRlcixbcHJvLWdsb2JhbC1oZWFkZXJdJyxcbiAgdGVtcGxhdGVVcmw6ICdnbG9iYWwtaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2dsb2JhbC1oZWFkZXIuY29tcG9uZW50Lmxlc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGV4cG9ydEFzOiAncHJvR2xvYmFsSGVhZGVyJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzXSc6IGAnYW50LXByby1nbG9iYWwtaGVhZGVyJ2BcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBHbG9iYWxIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGlzTW9iaWxlOiBib29sZWFuO1xuICBASW5wdXQoKSBsb2dvOiBUZW1wbGF0ZVJlZjx2b2lkPiB8IHN0cmluZztcbiAgQElucHV0KCkgY29sbGFwc2VkOiBib29sZWFuO1xuICBASW5wdXQoKSBjb2xsYXBzZWRCdXR0b25SZW5kZXI6IFRlbXBsYXRlUmVmPGJvb2xlYW4+O1xuICBASW5wdXQoKSByaWdodENvbnRlbnRSZW5kZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBAT3V0cHV0KCkgY29sbGFwc2VkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICB0aGlzLmNvbGxhcHNlZENoYW5nZS5lbWl0KCF0aGlzLmNvbGxhcHNlZCk7XG4gIH1cblxuICBpc05vbkVtcHR5U3RyaW5nKHZhbHVlOiB7fSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlICE9PSAnJztcbiAgfVxuXG4gIGlzVGVtcGxhdGVSZWYodmFsdWU6IHt9KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWY7XG4gIH1cbn1cbiIsIjxuZy1jb250YWluZXIgKm5nSWY9XCJpc01vYmlsZVwiPlxuICA8YSBjbGFzcz1cImFudC1wcm8tZ2xvYmFsLWhlYWRlci1sb2dvXCIga2V5PVwibG9nb1wiPlxuICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cInRydWVcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzVGVtcGxhdGVSZWYobG9nbylcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJsb2dvXCI+PC9uZy1jb250YWluZXI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc05vbkVtcHR5U3RyaW5nKGxvZ28pXCI+PGltZyBbc3JjXT1cImxvZ29cIiBhbHQ9XCJsb2dvXCIvPjwvbmctY29udGFpbmVyPlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L2E+XG48L25nLWNvbnRhaW5lcj5cbjwhLS0gY29sbGFwc2VkQnV0dG9uIC0tPlxuPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNvbGxhcHNlZEJ1dHRvblJlbmRlcj8gY29sbGFwc2VkQnV0dG9uUmVuZGVyOiBkZWZhdWx0Q29sbGFwc2VkQnV0dG9uVGVtcGxhdGU7IGNvbnRleHQ6IGNvbGxhcHNlZFwiPjwvbmctY29udGFpbmVyPlxuXG48bmctdGVtcGxhdGUgI2RlZmF1bHRDb2xsYXBzZWRCdXR0b25UZW1wbGF0ZT5cbiAgICAgIDxzcGFuIGNsYXNzPVwiYW50LXByby1nbG9iYWwtaGVhZGVyLXRyaWdnZXJcIiAoY2xpY2spPVwidG9nZ2xlKClcIj5cbiAgICA8aSBuei1pY29uIFtuelR5cGVdPVwiY29sbGFwc2VkID8gJ21lbnUtdW5mb2xkJyA6ICdtZW51LWZvbGQnXCI+PC9pPlxuICA8L3NwYW4+XG48L25nLXRlbXBsYXRlPlxuPCEtLXJpZ2h0Q29udGVudFJlbmRlci0tPlxuPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInJpZ2h0Q29udGVudFJlbmRlcjsgY29udGV4dDogeyAkaW1wbGljaXQ6IHt0aGVtZTogJ2xpZ2h0JyxsYXlvdXQ6ICdzaWRlbWVudSd9IH1cIj48L25nLWNvbnRhaW5lcj5cbiJdfQ==