import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function GlobalFooterComponent_ng_container_1_a_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const link_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", link_r3.title, " ");
} }
function GlobalFooterComponent_ng_container_1_a_1_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function GlobalFooterComponent_ng_container_1_a_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, GlobalFooterComponent_ng_container_1_a_1_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 7);
} if (rf & 2) {
    const link_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngTemplateOutlet", link_r3.title);
} }
function GlobalFooterComponent_ng_container_1_a_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 4);
    i0.ɵɵtemplate(1, GlobalFooterComponent_ng_container_1_a_1_ng_container_1_Template, 2, 1, "ng-container", 5);
    i0.ɵɵtemplate(2, GlobalFooterComponent_ng_container_1_a_1_ng_template_2_Template, 1, 1, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const link_r3 = ctx.$implicit;
    const _r5 = i0.ɵɵreference(3);
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("title", link_r3.key)("target", link_r3.blankTarget ? "_blank" : "_self")("href", link_r3.href, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.isString(link_r3.title))("ngIfElse", _r5);
} }
function GlobalFooterComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, GlobalFooterComponent_ng_container_1_a_1_Template, 4, 5, "a", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.links);
} }
function GlobalFooterComponent_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r10.copyright, " ");
} }
function GlobalFooterComponent_div_2_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function GlobalFooterComponent_div_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, GlobalFooterComponent_div_2_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 7);
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r12.copyright);
} }
function GlobalFooterComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtemplate(1, GlobalFooterComponent_div_2_ng_container_1_Template, 2, 1, "ng-container", 5);
    i0.ɵɵtemplate(2, GlobalFooterComponent_div_2_ng_template_2_Template, 1, 1, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r11 = i0.ɵɵreference(3);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.isString(ctx_r1.copyright))("ngIfElse", _r11);
} }
export class GlobalFooterComponent {
    constructor() {
        this.className = '';
    }
    ngOnInit() {
    }
    isString(val) {
        return typeof val === 'string';
    }
}
GlobalFooterComponent.ɵfac = function GlobalFooterComponent_Factory(t) { return new (t || GlobalFooterComponent)(); };
GlobalFooterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: GlobalFooterComponent, selectors: [["pro-global-footer"], ["", "pro-global-footer", ""]], hostVars: 2, hostBindings: function GlobalFooterComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassMap("ant-pro-global-footer " + ctx.className);
    } }, inputs: { className: "className", links: "links", copyright: "copyright" }, exportAs: ["proGlobalFooter"], decls: 3, vars: 2, consts: [[1, "ant-pro-global-footer-links"], [4, "ngIf"], ["class", "ant-pro-global-footer-copyright", 4, "ngIf"], [3, "title", "target", "href", 4, "ngFor", "ngForOf"], [3, "title", "target", "href"], [4, "ngIf", "ngIfElse"], ["titleTemplate", ""], [4, "ngTemplateOutlet"], [1, "ant-pro-global-footer-copyright"], ["copyrightTemplate", ""]], template: function GlobalFooterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, GlobalFooterComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(2, GlobalFooterComponent_div_2_Template, 4, 2, "div", 2);
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.links && ctx.links.length > 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.copyright);
    } }, directives: [i1.NgIf, i1.NgForOf, i1.NgTemplateOutlet], styles: [".ant-pro-global-footer{margin:48px 0 24px;padding:0 16px;text-align:center}.ant-pro-global-footer-links{margin-bottom:8px}.ant-pro-global-footer-links a{color:rgba(0,0,0,.45);transition:all .3s}.ant-pro-global-footer-links a:not(:last-child){margin-right:40px}.ant-pro-global-footer-links a:hover{color:rgba(0,0,0,.85)}.ant-pro-global-footer-copyright{color:rgba(0,0,0,.45);font-size:14px}"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GlobalFooterComponent, [{
        type: Component,
        args: [{
                selector: 'pro-global-footer,[pro-global-footer]',
                templateUrl: 'global-footer.component.html',
                styleUrls: ['global-footer.component.less'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                exportAs: 'proGlobalFooter',
                preserveWhitespaces: false,
                host: {
                    '[class]': `'ant-pro-global-footer ' + className`
                }
            }]
    }], function () { return []; }, { className: [{
            type: Input
        }], links: [{
            type: Input
        }], copyright: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLWZvb3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wcm8tbGF5b3V0L3NyYy9saWIvZ2xvYmFsLWZvb3Rlci9nbG9iYWwtZm9vdGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Byby1sYXlvdXQvc3JjL2xpYi9nbG9iYWwtZm9vdGVyL2dsb2JhbC1mb290ZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXVCLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0lDTTFHLDZCQUErRDtJQUM3RCxZQUNGO0lBQUEsMEJBQWU7OztJQURiLGVBQ0Y7SUFERSw4Q0FDRjs7O0lBRUUsd0JBQTREOzs7SUFBNUQseUhBQTREOzs7SUFBN0MsZ0RBQTRCOzs7SUFSL0MsNEJBR3NCO0lBQ3BCLDJHQUVlO0lBQ2YsMElBRWM7SUFDaEIsaUJBQUk7Ozs7O0lBVEQsbUNBQWtCLG9EQUFBLHdDQUFBO0lBR0osZUFBMkI7SUFBM0IscURBQTJCLGlCQUFBOzs7SUFMOUMsNkJBQWdEO0lBQzlDLGlGQVVJO0lBQ04sMEJBQWU7OztJQVhPLGVBQVE7SUFBUixzQ0FBUTs7O0lBYzlCLDZCQUFrRTtJQUNoRSxZQUNGO0lBQUEsMEJBQWU7OztJQURiLGVBQ0Y7SUFERSxrREFDRjs7O0lBRUUsd0JBQTJEOzs7SUFBM0QsNEdBQTJEOzs7SUFBNUMsb0RBQTJCOzs7SUFMOUMsOEJBQStEO0lBQzdELDhGQUVlO0lBQ2YsNkhBRWM7SUFDaEIsaUJBQU07Ozs7SUFOVyxlQUEwQjtJQUExQix3REFBMEIsa0JBQUE7O0FEVTNDLE1BQU0sT0FBTyxxQkFBcUI7SUFNaEM7UUFKUyxjQUFTLEdBQUcsRUFBRSxDQUFDO0lBS3hCLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVELFFBQVEsQ0FBQyxHQUFHO1FBQ1YsT0FBTyxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUM7SUFDakMsQ0FBQzs7MEZBZFUscUJBQXFCOzBEQUFyQixxQkFBcUI7OztRQzFCbEMsOEJBQXlDO1FBQ3ZDLHdGQVllO1FBQ2pCLGlCQUFNO1FBQ04sc0VBT007O1FBckJXLGVBQStCO1FBQS9CLHdEQUErQjtRQWMxQyxlQUFlO1FBQWYsb0NBQWU7O3VGRFdSLHFCQUFxQjtjQVpqQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVDQUF1QztnQkFDakQsV0FBVyxFQUFFLDhCQUE4QjtnQkFDM0MsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7Z0JBQzNDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsSUFBSSxFQUFFO29CQUNKLFNBQVMsRUFBRSxzQ0FBc0M7aUJBQ2xEO2FBQ0Y7c0NBR1UsU0FBUztrQkFBakIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFRlbXBsYXRlUmVmLCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2xvYmFsRm9vdGVyUHJvcHMge1xuICBsaW5rcz86IHtcbiAgICBrZXk/OiBzdHJpbmc7XG4gICAgdGl0bGU6IFRlbXBsYXRlUmVmPHZvaWQ+IHwgc3RyaW5nO1xuICAgIGhyZWY6IHN0cmluZztcbiAgICBibGFua1RhcmdldD86IGJvb2xlYW47XG4gIH1bXTtcbiAgY29weXJpZ2h0PzogVGVtcGxhdGVSZWY8dm9pZD47XG4gIHN0eWxlPzogc3RyaW5nO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Byby1nbG9iYWwtZm9vdGVyLFtwcm8tZ2xvYmFsLWZvb3Rlcl0nLFxuICB0ZW1wbGF0ZVVybDogJ2dsb2JhbC1mb290ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZ2xvYmFsLWZvb3Rlci5jb21wb25lbnQubGVzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgZXhwb3J0QXM6ICdwcm9HbG9iYWxGb290ZXInLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgaG9zdDoge1xuICAgICdbY2xhc3NdJzogYCdhbnQtcHJvLWdsb2JhbC1mb290ZXIgJyArIGNsYXNzTmFtZWBcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBHbG9iYWxGb290ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGNsYXNzTmFtZSA9ICcnO1xuICBASW5wdXQoKSBsaW5rczogR2xvYmFsRm9vdGVyUHJvcHNbJ2xpbmtzJ107XG4gIEBJbnB1dCgpIGNvcHlyaWdodDogVGVtcGxhdGVSZWY8dm9pZD4gfCBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIGlzU3RyaW5nKHZhbCkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImFudC1wcm8tZ2xvYmFsLWZvb3Rlci1saW5rc1wiPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwibGlua3MgJiYgbGlua3MubGVuZ3RoID4gMFwiPlxuICAgIDxhICpuZ0Zvcj1cImxldCBsaW5rIG9mIGxpbmtzXCJcbiAgICAgICBbdGl0bGVdPVwibGluay5rZXlcIlxuICAgICAgIFt0YXJnZXRdPVwibGluay5ibGFua1RhcmdldD8gJ19ibGFuaycgOiAnX3NlbGYnXCJcbiAgICAgICBbaHJlZl09XCJsaW5rLmhyZWZcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc1N0cmluZyhsaW5rLnRpdGxlKTtlbHNlIHRpdGxlVGVtcGxhdGUgXCI+XG4gICAgICAgIHt7bGluay50aXRsZX19XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy10ZW1wbGF0ZSAjdGl0bGVUZW1wbGF0ZT5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImxpbmsudGl0bGVcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC9hPlxuICA8L25nLWNvbnRhaW5lcj5cbjwvZGl2PlxuPGRpdiAqbmdJZj1cImNvcHlyaWdodFwiIGNsYXNzPVwiYW50LXByby1nbG9iYWwtZm9vdGVyLWNvcHlyaWdodFwiPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNTdHJpbmcoY29weXJpZ2h0KTtlbHNlIGNvcHlyaWdodFRlbXBsYXRlIFwiPlxuICAgIHt7Y29weXJpZ2h0fX1cbiAgPC9uZy1jb250YWluZXI+XG4gIDxuZy10ZW1wbGF0ZSAjY29weXJpZ2h0VGVtcGxhdGU+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNvcHlyaWdodFwiPjwvbmctY29udGFpbmVyPlxuICA8L25nLXRlbXBsYXRlPlxuPC9kaXY+XG4iXX0=