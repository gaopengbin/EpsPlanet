import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { isBrowser } from '../utils/utils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../sider-menu/base-menu.component";
function TopNavHeaderComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function TopNavHeaderComponent_ng_template_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 11);
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r4.logo);
} }
function TopNavHeaderComponent_ng_template_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "img", 12);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", ctx_r5.logo, i0.ɵɵsanitizeUrl);
} }
function TopNavHeaderComponent_ng_template_4_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 11);
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r6.title);
} }
function TopNavHeaderComponent_ng_template_4_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r7.title);
} }
function TopNavHeaderComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 7);
    i0.ɵɵelementContainerStart(1, 8);
    i0.ɵɵtemplate(2, TopNavHeaderComponent_ng_template_4_ng_container_2_Template, 1, 1, "ng-container", 9);
    i0.ɵɵtemplate(3, TopNavHeaderComponent_ng_template_4_ng_container_3_Template, 2, 1, "ng-container", 10);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementStart(4, "h1");
    i0.ɵɵelementContainerStart(5, 8);
    i0.ɵɵtemplate(6, TopNavHeaderComponent_ng_template_4_ng_container_6_Template, 1, 1, "ng-container", 9);
    i0.ɵɵtemplate(7, TopNavHeaderComponent_ng_template_4_ng_container_7_Template, 2, 1, "ng-container", 10);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r2.isTemplateRef(ctx_r2.logo));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r2.isNonEmptyString(ctx_r2.logo));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngSwitch", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r2.isTemplateRef(ctx_r2.title));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r2.isNonEmptyString(ctx_r2.title));
} }
function TopNavHeaderComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c0 = function (a0) { return { "wide": a0 }; };
const _c1 = function (a0, a1) { return { logo: a0, title: a1 }; };
const _c2 = function (a0) { return { theme: a0, layout: "topmenu" }; };
const _c3 = function (a0) { return { $implicit: a0 }; };
export class TopNavHeaderComponent {
    constructor() {
        this.theme = 'light';
        this.onMenuHeaderClick = new EventEmitter();
        this.baseClassName = 'ant-pro-top-nav-header';
    }
    ngOnInit() {
        const innerWidth = isBrowser() ? window.innerWidth : 0;
        this.maxWidth = (this.contentWidth === 'Fixed' && innerWidth > 1200 ? 1200 : innerWidth) - 280 - 120;
    }
    menuHeaderClick(event) {
        this.onMenuHeaderClick.emit(event);
    }
    isNonEmptyString(value) {
        return typeof value === 'string' && value !== '';
    }
    isTemplateRef(value) {
        return value instanceof TemplateRef;
    }
}
TopNavHeaderComponent.ɵfac = function TopNavHeaderComponent_Factory(t) { return new (t || TopNavHeaderComponent)(); };
TopNavHeaderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TopNavHeaderComponent, selectors: [["pro-top-nav-header"], ["", "pro-top-nav-header", ""]], hostVars: 4, hostBindings: function TopNavHeaderComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassMap(ctx.baseClassName);
        i0.ɵɵclassProp("light", ctx.theme === "light");
    } }, inputs: { theme: "theme", menuData: "menuData", logo: "logo", title: "title", contentWidth: "contentWidth", rightContentRender: "rightContentRender", menuHeaderRender: "menuHeaderRender" }, outputs: { onMenuHeaderClick: "onMenuHeaderClick" }, exportAs: ["proTopNavHeader"], decls: 9, vars: 31, consts: [[3, "ngClass"], [3, "click"], ["key", "logo", "id", "logo"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["defaultHeaderTemplate", ""], [2, "flex", "1", "overflow-x", "auto", "overflow-y", "hidden"], [3, "menuData", "theme", "mode"], ["href", "/"], [3, "ngSwitch"], [3, "ngTemplateOutlet", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [3, "ngTemplateOutlet"], ["alt", "logo", 3, "src"]], template: function TopNavHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵlistener("click", function TopNavHeaderComponent_Template_div_click_1_listener($event) { return ctx.menuHeaderClick($event); });
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵtemplate(3, TopNavHeaderComponent_ng_container_3_Template, 1, 0, "ng-container", 3);
        i0.ɵɵtemplate(4, TopNavHeaderComponent_ng_template_4_Template, 8, 6, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 5);
        i0.ɵɵelement(7, "pro-base-menu", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(8, TopNavHeaderComponent_ng_container_8_Template, 1, 0, "ng-container", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(5);
        i0.ɵɵclassMapInterpolate1("", ctx.baseClassName, "-main");
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(22, _c0, ctx.contentWidth === "Fixed"));
        i0.ɵɵadvance(1);
        i0.ɵɵclassMapInterpolate1("", ctx.baseClassName, "-left");
        i0.ɵɵadvance(1);
        i0.ɵɵclassMapInterpolate1("", ctx.baseClassName, "-logo");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.menuHeaderRender ? ctx.menuHeaderRender : _r1)("ngTemplateOutletContext", i0.ɵɵpureFunction2(24, _c1, ctx.title, ctx.title));
        i0.ɵɵadvance(3);
        i0.ɵɵclassMapInterpolate1("", ctx.baseClassName, "-menu");
        i0.ɵɵstyleProp("max-width", ctx.maxWidth, "px");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("menuData", ctx.menuData)("theme", ctx.theme)("mode", "horizontal");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.rightContentRender)("ngTemplateOutletContext", i0.ɵɵpureFunction1(29, _c3, i0.ɵɵpureFunction1(27, _c2, ctx.theme)));
    } }, directives: [i1.NgClass, i1.NgTemplateOutlet, i2.BaseMenuComponent, i1.NgSwitch, i1.NgSwitchCase], styles: [".ant-pro-top-nav-header{position:relative;width:100%;height:64px;box-shadow:0 3px 6px -4px rgba(0,0,0,.12),0 6px 16px 0 rgba(0,0,0,.08),0 9px 28px 8px rgba(0,0,0,.05);transition:background .3s,width .2s}.ant-pro-top-nav-header .ant-menu-submenu.ant-menu-submenu-horizontal{height:100%;line-height:64px}.ant-pro-top-nav-header .ant-menu-submenu.ant-menu-submenu-horizontal .ant-menu-submenu-title{height:100%}.ant-pro-top-nav-header.light{background-color:#fff}.ant-pro-top-nav-header.light h1{color:#002140}.ant-pro-top-nav-header-main{display:flex;height:64px;padding-left:24px}.ant-pro-top-nav-header-main.wide{max-width:1200px;margin:auto;padding-left:0}.ant-pro-top-nav-header-main .left{display:flex;flex:1}.ant-pro-top-nav-header-main .right{width:324px}.ant-pro-top-nav-header-logo{position:relative;width:165px;height:64px;overflow:hidden;line-height:64px;transition:all .3s}.ant-pro-top-nav-header-logo img{display:inline-block;height:32px;vertical-align:middle}.ant-pro-top-nav-header-logo h1{display:inline-block;margin:0 0 0 12px;color:#fff;font-weight:400;font-size:16px;vertical-align:top}.ant-pro-top-nav-header-menu .ant-menu.ant-menu-horizontal{height:64px;line-height:64px;border:none}"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TopNavHeaderComponent, [{
        type: Component,
        args: [{
                selector: 'pro-top-nav-header,[pro-top-nav-header]',
                templateUrl: 'top-nav-header.component.html',
                styleUrls: ['top-nav-header.component.less'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                exportAs: 'proTopNavHeader',
                preserveWhitespaces: false,
                host: {
                    '[class]': `baseClassName`,
                    '[class.light]': `theme === 'light'`
                }
            }]
    }], function () { return []; }, { theme: [{
            type: Input
        }], menuData: [{
            type: Input
        }], logo: [{
            type: Input
        }], title: [{
            type: Input
        }], contentWidth: [{
            type: Input
        }], rightContentRender: [{
            type: Input
        }], menuHeaderRender: [{
            type: Input
        }], onMenuHeaderClick: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wLW5hdi1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcHJvLWxheW91dC9zcmMvbGliL3RvcC1uYXYtaGVhZGVyL3RvcC1uYXYtaGVhZGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Byby1sYXlvdXQvc3JjL2xpYi90b3AtbmF2LWhlYWRlci90b3AtbmF2LWhlYWRlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixXQUFXLEVBQ1gsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7SUNQbkMsd0JBQzhCOzs7SUFJeEIsNEJBQTJGOzs7SUFBekMsOENBQXlCOzs7SUFDM0UsNkJBQXFEO0lBQUEsMEJBQThCO0lBQUEsMEJBQWU7OztJQUF4QyxlQUFZO0lBQVosbURBQVk7OztJQUlwRSw0QkFBNkY7OztJQUExQywrQ0FBMEI7OztJQUM3RSw2QkFBc0Q7SUFBQSxZQUFTO0lBQUEsMEJBQWU7OztJQUF4QixlQUFTO0lBQVQsa0NBQVM7OztJQVJyRSw0QkFBWTtJQUNWLGdDQUFnQztJQUM5QixzR0FBMkY7SUFDM0YsdUdBQWtHO0lBQ3BHLDBCQUFlO0lBQ2YsMEJBQUk7SUFDRixnQ0FBZ0M7SUFDOUIsc0dBQTZGO0lBQzdGLHVHQUE4RTtJQUNoRiwwQkFBZTtJQUNqQixpQkFBSztJQUNQLGlCQUFJOzs7SUFWWSxlQUFpQjtJQUFqQiwrQkFBaUI7SUFDZCxlQUFpQztJQUFqQyxnRUFBaUM7SUFDakMsZUFBb0M7SUFBcEMsbUVBQW9DO0lBR3JDLGVBQWlCO0lBQWpCLCtCQUFpQjtJQUNkLGVBQWtDO0lBQWxDLGlFQUFrQztJQUNsQyxlQUFxQztJQUFyQyxvRUFBcUM7OztJQWtCaEUsd0JBQThIOzs7Ozs7QUROaEksTUFBTSxPQUFPLHFCQUFxQjtJQWdCaEM7UUFkUyxVQUFLLEdBQWMsT0FBTyxDQUFDO1FBUTFCLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFFdEQsa0JBQWEsR0FBRyx3QkFBd0IsQ0FBQztJQUt6QyxDQUFDO0lBRUQsUUFBUTtRQUNOLE1BQU0sVUFBVSxHQUFHLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFdkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEtBQUssT0FBTyxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUN2RyxDQUFDO0lBRUQsZUFBZSxDQUFDLEtBQVk7UUFDMUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsS0FBUztRQUN4QixPQUFPLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxLQUFLLEtBQUssRUFBRSxDQUFDO0lBQ25ELENBQUM7SUFFRCxhQUFhLENBQUMsS0FBUztRQUNyQixPQUFPLEtBQUssWUFBWSxXQUFXLENBQUM7SUFDdEMsQ0FBQzs7MEZBbkNVLHFCQUFxQjswREFBckIscUJBQXFCOzs7O1FDM0JsQyw4QkFDb0Q7UUFDbEQsOEJBQXNFO1FBQWxDLHFHQUFTLDJCQUF1QixJQUFDO1FBQ25FLDhCQUF5RDtRQUN2RCx3RkFDOEI7UUFDOUIsdUhBYWM7UUFDaEIsaUJBQU07UUFDUixpQkFBTTtRQUdOLDhCQUNvQztRQUNsQyxtQ0FJZ0I7UUFDbEIsaUJBQU07UUFFTix3RkFBOEg7UUFDaEksaUJBQU07OztRQWxDRCx5REFBOEI7UUFDOUIsbUZBQThDO1FBQzVDLGVBQThCO1FBQTlCLHlEQUE4QjtRQUM1QixlQUE4QjtRQUE5Qix5REFBOEI7UUFDbEIsZUFBOEU7UUFBOUUsb0ZBQThFLDhFQUFBO1FBcUI1RixlQUE4QjtRQUE5Qix5REFBOEI7UUFEOUIsK0NBQStCO1FBR2hDLGVBQXFCO1FBQXJCLHVDQUFxQixvQkFBQSxzQkFBQTtRQU1WLGVBQXNDO1FBQXRDLHlEQUFzQyxnR0FBQTs7dUZETjFDLHFCQUFxQjtjQWJqQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlDQUF5QztnQkFDbkQsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7Z0JBQzVDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsSUFBSSxFQUFFO29CQUNKLFNBQVMsRUFBRSxlQUFlO29CQUMxQixlQUFlLEVBQUUsbUJBQW1CO2lCQUNyQzthQUNGO3NDQUdVLEtBQUs7a0JBQWIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csa0JBQWtCO2tCQUExQixLQUFLO1lBQ0csZ0JBQWdCO2tCQUF4QixLQUFLO1lBRUksaUJBQWlCO2tCQUExQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29udGVudFdpZHRoLCBNZW51VGhlbWV9IGZyb20gJy4uL2NvcmUvZGVmYXVsdC1zZXR0aW5ncyc7XG5pbXBvcnQge2lzQnJvd3Nlcn0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xuaW1wb3J0IHtNZW51RGF0YUl0ZW19IGZyb20gJy4uL3NpZGVyLW1lbnUvYmFzZS1tZW51LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Byby10b3AtbmF2LWhlYWRlcixbcHJvLXRvcC1uYXYtaGVhZGVyXScsXG4gIHRlbXBsYXRlVXJsOiAndG9wLW5hdi1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsndG9wLW5hdi1oZWFkZXIuY29tcG9uZW50Lmxlc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGV4cG9ydEFzOiAncHJvVG9wTmF2SGVhZGVyJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzXSc6IGBiYXNlQ2xhc3NOYW1lYCxcbiAgICAnW2NsYXNzLmxpZ2h0XSc6IGB0aGVtZSA9PT0gJ2xpZ2h0J2BcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBUb3BOYXZIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHRoZW1lOiBNZW51VGhlbWUgPSAnbGlnaHQnO1xuICBASW5wdXQoKSBtZW51RGF0YTogTWVudURhdGFJdGVtW107XG4gIEBJbnB1dCgpIGxvZ286IFRlbXBsYXRlUmVmPHZvaWQ+IHwgc3RyaW5nO1xuICBASW5wdXQoKSB0aXRsZTogVGVtcGxhdGVSZWY8dm9pZD4gfCBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvbnRlbnRXaWR0aDogQ29udGVudFdpZHRoO1xuICBASW5wdXQoKSByaWdodENvbnRlbnRSZW5kZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBtZW51SGVhZGVyUmVuZGVyOiBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBAT3V0cHV0KCkgb25NZW51SGVhZGVyQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBiYXNlQ2xhc3NOYW1lID0gJ2FudC1wcm8tdG9wLW5hdi1oZWFkZXInO1xuXG4gIG1heFdpZHRoOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBpbm5lcldpZHRoID0gaXNCcm93c2VyKCkgPyB3aW5kb3cuaW5uZXJXaWR0aCA6IDA7XG5cbiAgICB0aGlzLm1heFdpZHRoID0gKHRoaXMuY29udGVudFdpZHRoID09PSAnRml4ZWQnICYmIGlubmVyV2lkdGggPiAxMjAwID8gMTIwMCA6IGlubmVyV2lkdGgpIC0gMjgwIC0gMTIwO1xuICB9XG5cbiAgbWVudUhlYWRlckNsaWNrKGV2ZW50OiBFdmVudCkge1xuICAgIHRoaXMub25NZW51SGVhZGVyQ2xpY2suZW1pdChldmVudCk7XG4gIH1cblxuICBpc05vbkVtcHR5U3RyaW5nKHZhbHVlOiB7fSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlICE9PSAnJztcbiAgfVxuXG4gIGlzVGVtcGxhdGVSZWYodmFsdWU6IHt9KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWY7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJ7e2Jhc2VDbGFzc05hbWV9fS1tYWluXCJcbiAgICAgW25nQ2xhc3NdPVwieyd3aWRlJzpjb250ZW50V2lkdGggPT09ICdGaXhlZCcgfVwiPlxuICA8ZGl2IGNsYXNzPVwie3tiYXNlQ2xhc3NOYW1lfX0tbGVmdFwiIChjbGljayk9XCJtZW51SGVhZGVyQ2xpY2soJGV2ZW50KVwiPlxuICAgIDxkaXYgY2xhc3M9XCJ7e2Jhc2VDbGFzc05hbWV9fS1sb2dvXCIga2V5PVwibG9nb1wiIGlkPVwibG9nb1wiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cIm1lbnVIZWFkZXJSZW5kZXIgPyBtZW51SGVhZGVyUmVuZGVyOiBkZWZhdWx0SGVhZGVyVGVtcGxhdGU7IGNvbnRleHQ6IHtsb2dvOnRpdGxlLCB0aXRsZTp0aXRsZX1cIlxuICAgICAgICAgICAgICAgICAgICA+PC9uZy1jb250YWluZXI+XG4gICAgICA8bmctdGVtcGxhdGUgI2RlZmF1bHRIZWFkZXJUZW1wbGF0ZT5cbiAgICAgICAgPGEgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJ0cnVlXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc1RlbXBsYXRlUmVmKGxvZ28pXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwibG9nb1wiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNOb25FbXB0eVN0cmluZyhsb2dvKVwiPjxpbWcgW3NyY109XCJsb2dvXCIgYWx0PVwibG9nb1wiLz48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8aDE+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJ0cnVlXCI+XG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzVGVtcGxhdGVSZWYodGl0bGUpXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwidGl0bGVcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNOb25FbXB0eVN0cmluZyh0aXRsZSlcIj57e3RpdGxlfX08L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDwvaDE+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDwhLS3lop7liqDmu5rliqjmnaEsbmctem9ycm/mnKzouqtidWfvvIxodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9pc3N1ZXMvMjUzMS0tPlxuICA8ZGl2IFtzdHlsZS5tYXgtd2lkdGgucHhdPVwibWF4V2lkdGhcIiBzdHlsZT1cImZsZXg6MTtvdmVyZmxvdy14OiBhdXRvO292ZXJmbG93LXk6IGhpZGRlbjtcIlxuICAgICAgIGNsYXNzPVwie3tiYXNlQ2xhc3NOYW1lfX0tbWVudVwiPlxuICAgIDxwcm8tYmFzZS1tZW51XG4gICAgICBbbWVudURhdGFdPVwibWVudURhdGFcIlxuICAgICAgW3RoZW1lXT1cInRoZW1lXCJcbiAgICAgIFttb2RlXT1cIidob3Jpem9udGFsJ1wiPlxuICAgIDwvcHJvLWJhc2UtbWVudT5cbiAgPC9kaXY+XG5cbiAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInJpZ2h0Q29udGVudFJlbmRlcjsgY29udGV4dDogeyAkaW1wbGljaXQ6IHt0aGVtZTogdGhlbWUsbGF5b3V0OiAndG9wbWVudSd9IH1cIj48L25nLWNvbnRhaW5lcj5cbjwvZGl2PlxuIl19