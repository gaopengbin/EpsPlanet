import { InjectionToken, ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, Optional, Inject, ɵɵelementContainerStart, ɵɵtext, ɵɵelementContainerEnd, ɵɵnextContext, ɵɵadvance, ɵɵtextInterpolate1, ɵɵelementContainer, ɵɵtemplate, ɵɵproperty, ɵɵelementStart, ɵɵtemplateRefExtractor, ɵɵelementEnd, ɵɵreference, ɵɵsanitizeUrl, ɵɵdefineComponent, ɵɵclassMap, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, ɵɵelement, ɵɵgetCurrentView, ɵɵlistener, ɵɵrestoreView, EventEmitter, TemplateRef, ɵɵpureFunction1, ɵɵpureFunction0, Output, ɵɵprojectionDef, ɵɵprojection, ɵɵpipe, ɵɵtextInterpolate, ɵɵpipeBind1, ɵɵdirectiveInject, ChangeDetectorRef, ɵɵclassProp, ɵɵclassMapInterpolate1, ɵɵpureFunction2, ɵɵstyleProp, ɵɵsanitizeHtml, ɵɵresolveDocument, HostListener, ElementRef, Injector, ɵɵdefineDirective, Directive, NgZone, ɵɵcontentQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵviewQuery, ɵɵNgOnChangesFeature, ViewChild, ContentChildren, Host, Self, ContentChild, ɵɵattribute, QueryList, ɵɵProvidersFeature, ɵɵstyleMap, ɵɵresolveWindow, Renderer2, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NgIf, NgForOf, NgTemplateOutlet, NgSwitch, NgSwitchCase, NgClass, NgStyle, DOCUMENT, CommonModule } from '@angular/common';
import { ɵNzTransitionPatchDirective } from 'ng-zorro-antd/core/transition-patch';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { __decorate } from 'tslib';
import { RouterLinkWithHref, ActivatedRoute, Router, ROUTER_CONFIGURATION, NavigationStart, NavigationEnd, RouterLink, PRIMARY_OUTLET, RouterModule } from '@angular/router';
import { InputBoolean, InputNumber } from 'ng-zorro-antd/core/util';
import { takeUntil, auditTime, startWith, filter, delay, debounceTime } from 'rxjs/operators';
import { Subject, Subscription, BehaviorSubject, Observable, fromEvent, animationFrameScheduler, asapScheduler, of, merge } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import { NzLayoutComponent, NzContentComponent, NzSiderComponent, NzHeaderComponent, NzFooterComponent, NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzDrawerComponent, NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzMenuDirective, NzSubMenuComponent, NzMenuItemDirective, NzMenuModule } from 'ng-zorro-antd/menu';
import { TranslatePipe, TranslateModule } from '@ngx-translate/core';
import { ConnectionPositionPair, Overlay, ViewportRuler } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Platform, PlatformModule } from '@angular/cdk/platform';
import { coerceElement, coerceNumberProperty } from '@angular/cdk/coercion';
import { warnDeprecation, PREFIX } from 'ng-zorro-antd/core/logger';
import { FocusKeyManager, CdkMonitorFocus, A11yModule } from '@angular/cdk/a11y';
import { hasModifierKey, SPACE, ENTER, DOWN_ARROW, RIGHT_ARROW, UP_ARROW, LEFT_ARROW } from '@angular/cdk/keycodes';
import { NzDropDownDirective, NzDropdownMenuComponent, NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import { reqAnimFrame } from 'ng-zorro-antd/core/polyfill';
import ResizeObserver from 'resize-observer-polyfill';
import { Directionality } from '@angular/cdk/bidi';
import { NzPageHeaderComponent, NzPageHeaderBreadcrumbDirective, NzPageHeaderTagDirective, NzPageHeaderExtraDirective, NzPageHeaderContentDirective, NzPageHeaderFooterDirective, NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzBreadCrumbComponent, NzBreadCrumbItemComponent, NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzTabSetComponent, NzTabComponent, NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzMessageService, NzMessageModule } from 'ng-zorro-antd/message';
import { NzTooltipDirective, NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzDividerComponent, NzDividerModule } from 'ng-zorro-antd/divider';
import { NzListComponent, NzListItemComponent, NzListModule } from 'ng-zorro-antd/list';
import { NzSelectComponent, NzOptionComponent, NzSelectModule } from 'ng-zorro-antd/select';
import { NgControlStatus, NgModel, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzSwitchComponent, NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzTreeViewModule } from 'ng-zorro-antd/tree-view';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { ObserversModule } from '@angular/cdk/observers';
import { ScrollingModule } from '@angular/cdk/scrolling';

const defaultSettings = {
    language: 'zh-CN',
    title: 'Ant Design Pro',
    logo: 'assets/logo.svg',
    navTheme: 'dark',
    primaryColor: '#1890FF',
    layout: 'sidemenu',
    contentWidth: 'Fluid',
    fixedHeader: false,
    autoHideHeader: false,
    fixSiderbar: false,
    reuseTab: true,
};

/**
 * custom layout setting
 */
const PRO_LAYOUT = new InjectionToken('pro-layout');
class SettingsService {
    constructor(customSettings) {
        this.setting = Object.assign(Object.assign({}, defaultSettings), customSettings);
    }
    get settings() {
        return this.setting;
    }
    setSettings(name, value) {
        if (typeof name === 'string') {
            this.setting[name] = value;
        }
        else {
            this.setting = name;
        }
        return true;
    }
}
SettingsService.ɵfac = function SettingsService_Factory(t) { return new (t || SettingsService)(ɵɵinject(PRO_LAYOUT, 8)); };
SettingsService.ɵprov = ɵɵdefineInjectable({ token: SettingsService, factory: SettingsService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(SettingsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [PRO_LAYOUT]
            }] }]; }, null); })();

function GlobalFooterComponent_ng_container_1_a_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const link_r3 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", link_r3.title, " ");
} }
function GlobalFooterComponent_ng_container_1_a_1_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function GlobalFooterComponent_ng_container_1_a_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, GlobalFooterComponent_ng_container_1_a_1_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 7);
} if (rf & 2) {
    const link_r3 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngTemplateOutlet", link_r3.title);
} }
function GlobalFooterComponent_ng_container_1_a_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "a", 4);
    ɵɵtemplate(1, GlobalFooterComponent_ng_container_1_a_1_ng_container_1_Template, 2, 1, "ng-container", 5);
    ɵɵtemplate(2, GlobalFooterComponent_ng_container_1_a_1_ng_template_2_Template, 1, 1, "ng-template", null, 6, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
} if (rf & 2) {
    const link_r3 = ctx.$implicit;
    const _r5 = ɵɵreference(3);
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("title", link_r3.key)("target", link_r3.blankTarget ? "_blank" : "_self")("href", link_r3.href, ɵɵsanitizeUrl);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.isString(link_r3.title))("ngIfElse", _r5);
} }
function GlobalFooterComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, GlobalFooterComponent_ng_container_1_a_1_Template, 4, 5, "a", 3);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r0.links);
} }
function GlobalFooterComponent_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r10.copyright, " ");
} }
function GlobalFooterComponent_div_2_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function GlobalFooterComponent_div_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, GlobalFooterComponent_div_2_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 7);
} if (rf & 2) {
    const ctx_r12 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r12.copyright);
} }
function GlobalFooterComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵtemplate(1, GlobalFooterComponent_div_2_ng_container_1_Template, 2, 1, "ng-container", 5);
    ɵɵtemplate(2, GlobalFooterComponent_div_2_ng_template_2_Template, 1, 1, "ng-template", null, 9, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
} if (rf & 2) {
    const _r11 = ɵɵreference(3);
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.isString(ctx_r1.copyright))("ngIfElse", _r11);
} }
class GlobalFooterComponent {
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
GlobalFooterComponent.ɵcmp = ɵɵdefineComponent({ type: GlobalFooterComponent, selectors: [["pro-global-footer"], ["", "pro-global-footer", ""]], hostVars: 2, hostBindings: function GlobalFooterComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵclassMap("ant-pro-global-footer " + ctx.className);
    } }, inputs: { className: "className", links: "links", copyright: "copyright" }, exportAs: ["proGlobalFooter"], decls: 3, vars: 2, consts: [[1, "ant-pro-global-footer-links"], [4, "ngIf"], ["class", "ant-pro-global-footer-copyright", 4, "ngIf"], [3, "title", "target", "href", 4, "ngFor", "ngForOf"], [3, "title", "target", "href"], [4, "ngIf", "ngIfElse"], ["titleTemplate", ""], [4, "ngTemplateOutlet"], [1, "ant-pro-global-footer-copyright"], ["copyrightTemplate", ""]], template: function GlobalFooterComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, GlobalFooterComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        ɵɵelementEnd();
        ɵɵtemplate(2, GlobalFooterComponent_div_2_Template, 4, 2, "div", 2);
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.links && ctx.links.length > 0);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.copyright);
    } }, directives: [NgIf, NgForOf, NgTemplateOutlet], styles: [".ant-pro-global-footer{margin:48px 0 24px;padding:0 16px;text-align:center}.ant-pro-global-footer-links{margin-bottom:8px}.ant-pro-global-footer-links a{color:rgba(0,0,0,.45);transition:all .3s}.ant-pro-global-footer-links a:not(:last-child){margin-right:40px}.ant-pro-global-footer-links a:hover{color:rgba(0,0,0,.85)}.ant-pro-global-footer-copyright{color:rgba(0,0,0,.45);font-size:14px}"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GlobalFooterComponent, [{
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

function GlobalHeaderComponent_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0, 7);
} if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r5.logo);
} }
function GlobalHeaderComponent_ng_container_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "img", 8);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("src", ctx_r6.logo, ɵɵsanitizeUrl);
} }
function GlobalHeaderComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "a", 3);
    ɵɵelementContainerStart(2, 4);
    ɵɵtemplate(3, GlobalHeaderComponent_ng_container_0_ng_container_3_Template, 1, 1, "ng-container", 5);
    ɵɵtemplate(4, GlobalHeaderComponent_ng_container_0_ng_container_4_Template, 2, 1, "ng-container", 6);
    ɵɵelementContainerEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngSwitch", true);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", ctx_r0.isTemplateRef(ctx_r0.logo));
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", ctx_r0.isNonEmptyString(ctx_r0.logo));
} }
function GlobalHeaderComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function GlobalHeaderComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 9);
    ɵɵlistener("click", function GlobalHeaderComponent_ng_template_2_Template_span_click_0_listener() { ɵɵrestoreView(_r8); const ctx_r7 = ɵɵnextContext(); return ctx_r7.toggle(); });
    ɵɵelement(1, "i", 10);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("nzType", ctx_r3.collapsed ? "menu-unfold" : "menu-fold");
} }
function GlobalHeaderComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c0$b = function () { return { theme: "light", layout: "sidemenu" }; };
const _c1$7 = function (a0) { return { $implicit: a0 }; };
class GlobalHeaderComponent {
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
GlobalHeaderComponent.ɵcmp = ɵɵdefineComponent({ type: GlobalHeaderComponent, selectors: [["pro-global-header"], ["", "pro-global-header", ""]], hostVars: 2, hostBindings: function GlobalHeaderComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵclassMap("ant-pro-global-header");
    } }, inputs: { isMobile: "isMobile", logo: "logo", collapsed: "collapsed", collapsedButtonRender: "collapsedButtonRender", rightContentRender: "rightContentRender" }, outputs: { collapsedChange: "collapsedChange" }, exportAs: ["proGlobalHeader"], decls: 5, vars: 8, consts: [[4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["defaultCollapsedButtonTemplate", ""], ["key", "logo", 1, "ant-pro-global-header-logo"], [3, "ngSwitch"], [3, "ngTemplateOutlet", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [3, "ngTemplateOutlet"], ["alt", "logo", 3, "src"], [1, "ant-pro-global-header-trigger", 3, "click"], ["nz-icon", "", 3, "nzType"]], template: function GlobalHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, GlobalHeaderComponent_ng_container_0_Template, 5, 3, "ng-container", 0);
        ɵɵtemplate(1, GlobalHeaderComponent_ng_container_1_Template, 1, 0, "ng-container", 1);
        ɵɵtemplate(2, GlobalHeaderComponent_ng_template_2_Template, 2, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor);
        ɵɵtemplate(4, GlobalHeaderComponent_ng_container_4_Template, 1, 0, "ng-container", 1);
    } if (rf & 2) {
        const _r2 = ɵɵreference(3);
        ɵɵproperty("ngIf", ctx.isMobile);
        ɵɵadvance(1);
        ɵɵproperty("ngTemplateOutlet", ctx.collapsedButtonRender ? ctx.collapsedButtonRender : _r2)("ngTemplateOutletContext", ctx.collapsed);
        ɵɵadvance(3);
        ɵɵproperty("ngTemplateOutlet", ctx.rightContentRender)("ngTemplateOutletContext", ɵɵpureFunction1(6, _c1$7, ɵɵpureFunction0(5, _c0$b)));
    } }, directives: [NgIf, NgTemplateOutlet, NgSwitch, NgSwitchCase, ɵNzTransitionPatchDirective, NzIconDirective], styles: [".ant-pro-global-header{position:relative;height:64px;padding:0;background:#fff;box-shadow:0 1px 4px rgba(0,21,41,.08)}.ant-pro-global-header-logo{display:inline-block;height:64px;padding:0 0 0 24px;font-size:20px;line-height:64px;vertical-align:top;cursor:pointer}.ant-pro-global-header-logo img{display:inline-block;width:32px;vertical-align:middle}.ant-pro-global-header-menu .anticon{margin-right:8px}.ant-pro-global-header-menu .ant-dropdown-menu-item{min-width:160px}.ant-pro-global-header-trigger{height:64px;padding:calc((64px - 26px) / 2) 24px;font-size:20px;cursor:pointer;transition:all .3s,padding 0s}.ant-pro-global-header-trigger:hover{background:#fff}.ant-pro-global-header .dark{height:64px}.ant-pro-global-header .dark .action,.ant-pro-global-header .dark .action>i{color:hsla(0,0%,100%,.85)}.ant-pro-global-header .dark .action.opened,.ant-pro-global-header .dark .action:hover{background:#1890ff}.ant-pro-global-header .dark .action .ant-badge{color:hsla(0,0%,100%,.85)}"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GlobalHeaderComponent, [{
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

const _c0$a = function (a0) { return { "wide": a0 }; };
const _c1$6 = ["*"];
class GridContentComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
GridContentComponent.ɵfac = function GridContentComponent_Factory(t) { return new (t || GridContentComponent)(); };
GridContentComponent.ɵcmp = ɵɵdefineComponent({ type: GridContentComponent, selectors: [["pro-grid-content"]], inputs: { contentWidth: "contentWidth" }, exportAs: ["proGridContent"], ngContentSelectors: _c1$6, decls: 2, vars: 3, consts: [[1, "ant-pro-grid-content", 3, "ngClass"]], template: function GridContentComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 0);
        ɵɵprojection(1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("ngClass", ɵɵpureFunction1(1, _c0$a, ctx.contentWidth === "Fixed"));
    } }, directives: [NgClass], styles: [".ant-pro-grid-content{width:100%;height:100%;min-height:100%;transition:.3s}.ant-pro-grid-content.wide{max-width:1200px;margin:0 auto}"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GridContentComponent, [{
        type: Component,
        args: [{
                selector: 'pro-grid-content',
                templateUrl: 'grid-content.component.html',
                styleUrls: ['grid-content.component.less'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                exportAs: 'proGridContent',
                preserveWhitespaces: false
            }]
    }], function () { return []; }, { contentWidth: [{
            type: Input
        }] }); })();

// tslint:disable-next-line:max-line-length
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
const isUrl = (path) => reg.test(path);
const isBrowser = () => typeof window !== 'undefined';

function BaseMenuComponent_ng_container_1_ng_container_1_i_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 8);
} if (rf & 2) {
    const menuData_r1 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("nzType", menuData_r1.icon);
} }
function BaseMenuComponent_ng_container_1_ng_container_1_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
} if (rf & 2) {
    const menuData_r1 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, menuData_r1.locale));
} }
function BaseMenuComponent_ng_container_1_ng_container_1_span_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const menuData_r1 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(menuData_r1.name);
} }
function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_i_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 8);
} if (rf & 2) {
    const menuData_r12 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("nzType", menuData_r12.icon);
} }
function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
} if (rf & 2) {
    const menuData_r12 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, menuData_r12.locale));
} }
function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_span_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const menuData_r12 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(menuData_r12.name);
} }
function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_ng_container_2_a_1_i_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 8);
} if (rf & 2) {
    const menuData_r23 = ɵɵnextContext(3).$implicit;
    ɵɵproperty("nzType", menuData_r23.icon);
} }
function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_ng_container_2_a_1_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
} if (rf & 2) {
    const menuData_r23 = ɵɵnextContext(3).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, menuData_r23.locale));
} }
function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_ng_container_2_a_1_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const menuData_r23 = ɵɵnextContext(3).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(menuData_r23.name);
} }
function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_ng_container_2_a_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "a", 14);
    ɵɵtemplate(1, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_ng_container_2_a_1_i_1_Template, 1, 1, "i", 6);
    ɵɵtemplate(2, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_ng_container_2_a_1_span_2_Template, 3, 3, "span", 7);
    ɵɵtemplate(3, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_ng_container_2_a_1_span_3_Template, 2, 1, "span", 7);
    ɵɵelementEnd();
} if (rf & 2) {
    const menuData_r23 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("href", menuData_r23.path, ɵɵsanitizeUrl);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", menuData_r23.icon);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", menuData_r23.locale);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !menuData_r23.locale);
} }
function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_ng_container_2_a_2_i_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 8);
} if (rf & 2) {
    const menuData_r23 = ɵɵnextContext(3).$implicit;
    ɵɵproperty("nzType", menuData_r23.icon);
} }
function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_ng_container_2_a_2_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
} if (rf & 2) {
    const menuData_r23 = ɵɵnextContext(3).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, menuData_r23.locale));
} }
function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_ng_container_2_a_2_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const menuData_r23 = ɵɵnextContext(3).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(menuData_r23.name);
} }
function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_ng_container_2_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r43 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 15);
    ɵɵlistener("click", function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_ng_container_2_a_2_Template_a_click_0_listener() { ɵɵrestoreView(_r43); const menuData_r23 = ɵɵnextContext(2).$implicit; return menuData_r23.externalClick(menuData_r23); });
    ɵɵtemplate(1, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_ng_container_2_a_2_i_1_Template, 1, 1, "i", 6);
    ɵɵtemplate(2, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_ng_container_2_a_2_span_2_Template, 3, 3, "span", 7);
    ɵɵtemplate(3, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_ng_container_2_a_2_span_3_Template, 2, 1, "span", 7);
    ɵɵelementEnd();
} if (rf & 2) {
    const menuData_r23 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", menuData_r23.icon);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", menuData_r23.locale);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !menuData_r23.locale);
} }
function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_ng_container_2_a_1_Template, 4, 4, "a", 12);
    ɵɵtemplate(2, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_ng_container_2_a_2_Template, 4, 3, "a", 13);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const menuData_r23 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !menuData_r23.externalClick);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", menuData_r23.externalClick);
} }
function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_a_3_i_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 8);
} if (rf & 2) {
    const menuData_r23 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("nzType", menuData_r23.icon);
} }
function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_a_3_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
} if (rf & 2) {
    const menuData_r23 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, menuData_r23.locale));
} }
function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_a_3_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const menuData_r23 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(menuData_r23.name);
} }
function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_a_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "a", 16);
    ɵɵtemplate(1, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_a_3_i_1_Template, 1, 1, "i", 6);
    ɵɵtemplate(2, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_a_3_span_2_Template, 3, 3, "span", 7);
    ɵɵtemplate(3, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_a_3_span_3_Template, 2, 1, "span", 7);
    ɵɵelementEnd();
} if (rf & 2) {
    const menuData_r23 = ɵɵnextContext().$implicit;
    ɵɵproperty("routerLink", menuData_r23.path);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", menuData_r23.icon);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", menuData_r23.locale);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !menuData_r23.locale);
} }
function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "li", 10);
    ɵɵtemplate(2, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_ng_container_2_Template, 3, 2, "ng-container", 7);
    ɵɵtemplate(3, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_a_3_Template, 4, 4, "a", 11);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const menuData_r23 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("nzMatchRouter", true);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", menuData_r23.external);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !menuData_r23.external);
} }
function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r55 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "li", 4);
    ɵɵlistener("nzOpenChange", function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_Template_li_nzOpenChange_1_listener($event) { ɵɵrestoreView(_r55); const menuData_r12 = ɵɵnextContext().$implicit; const ctx_r53 = ɵɵnextContext(3); return ctx_r53.onOpenChange($event, menuData_r12); });
    ɵɵelementStart(2, "span", 5);
    ɵɵtemplate(3, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_i_3_Template, 1, 1, "i", 6);
    ɵɵtemplate(4, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_span_4_Template, 3, 3, "span", 7);
    ɵɵtemplate(5, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_span_5_Template, 2, 1, "span", 7);
    ɵɵelementEnd();
    ɵɵelementStart(6, "ul");
    ɵɵtemplate(7, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_Template, 4, 3, "ng-container", 1);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const menuData_r12 = ɵɵnextContext().$implicit;
    const ctx_r13 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("nzOpen", ctx_r13.openKeys.indexOf(menuData_r12.path) !== -1 && ctx_r13.mode === "inline");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", menuData_r12.icon);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", menuData_r12.locale);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !menuData_r12.locale);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", menuData_r12.children);
} }
function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_ng_container_1_a_1_i_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 8);
} if (rf & 2) {
    const menuData_r12 = ɵɵnextContext(4).$implicit;
    ɵɵproperty("nzType", menuData_r12.icon);
} }
function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_ng_container_1_a_1_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
} if (rf & 2) {
    const menuData_r12 = ɵɵnextContext(4).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, menuData_r12.locale));
} }
function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_ng_container_1_a_1_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const menuData_r12 = ɵɵnextContext(4).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(menuData_r12.name);
} }
function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_ng_container_1_a_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "a", 14);
    ɵɵtemplate(1, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_ng_container_1_a_1_i_1_Template, 1, 1, "i", 6);
    ɵɵtemplate(2, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_ng_container_1_a_1_span_2_Template, 3, 3, "span", 7);
    ɵɵtemplate(3, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_ng_container_1_a_1_span_3_Template, 2, 1, "span", 7);
    ɵɵelementEnd();
} if (rf & 2) {
    const menuData_r12 = ɵɵnextContext(3).$implicit;
    ɵɵproperty("href", menuData_r12.path, ɵɵsanitizeUrl);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", menuData_r12.icon);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", menuData_r12.locale);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !menuData_r12.locale);
} }
function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_ng_container_1_a_2_i_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 8);
} if (rf & 2) {
    const menuData_r12 = ɵɵnextContext(4).$implicit;
    ɵɵproperty("nzType", menuData_r12.icon);
} }
function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_ng_container_1_a_2_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
} if (rf & 2) {
    const menuData_r12 = ɵɵnextContext(4).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, menuData_r12.locale));
} }
function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_ng_container_1_a_2_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const menuData_r12 = ɵɵnextContext(4).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(menuData_r12.name);
} }
function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_ng_container_1_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r76 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 15);
    ɵɵlistener("click", function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_ng_container_1_a_2_Template_a_click_0_listener() { ɵɵrestoreView(_r76); const menuData_r12 = ɵɵnextContext(3).$implicit; return menuData_r12.externalClick(menuData_r12); });
    ɵɵtemplate(1, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_ng_container_1_a_2_i_1_Template, 1, 1, "i", 6);
    ɵɵtemplate(2, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_ng_container_1_a_2_span_2_Template, 3, 3, "span", 7);
    ɵɵtemplate(3, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_ng_container_1_a_2_span_3_Template, 2, 1, "span", 7);
    ɵɵelementEnd();
} if (rf & 2) {
    const menuData_r12 = ɵɵnextContext(3).$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", menuData_r12.icon);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", menuData_r12.locale);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !menuData_r12.locale);
} }
function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_ng_container_1_a_1_Template, 4, 4, "a", 12);
    ɵɵtemplate(2, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_ng_container_1_a_2_Template, 4, 3, "a", 13);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const menuData_r12 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !menuData_r12.externalClick);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", menuData_r12.externalClick);
} }
function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_a_2_i_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 8);
} if (rf & 2) {
    const menuData_r12 = ɵɵnextContext(3).$implicit;
    ɵɵproperty("nzType", menuData_r12.icon);
} }
function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_a_2_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
} if (rf & 2) {
    const menuData_r12 = ɵɵnextContext(3).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, menuData_r12.locale));
} }
function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_a_2_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const menuData_r12 = ɵɵnextContext(3).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(menuData_r12.name);
} }
function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_a_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "a", 16);
    ɵɵtemplate(1, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_a_2_i_1_Template, 1, 1, "i", 6);
    ɵɵtemplate(2, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_a_2_span_2_Template, 3, 3, "span", 7);
    ɵɵtemplate(3, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_a_2_span_3_Template, 2, 1, "span", 7);
    ɵɵelementEnd();
} if (rf & 2) {
    const menuData_r12 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("routerLink", menuData_r12.path);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", menuData_r12.icon);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", menuData_r12.locale);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !menuData_r12.locale);
} }
function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li", 10);
    ɵɵtemplate(1, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_ng_container_1_Template, 3, 2, "ng-container", 7);
    ɵɵtemplate(2, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_a_2_Template, 4, 4, "a", 11);
    ɵɵelementEnd();
} if (rf & 2) {
    const menuData_r12 = ɵɵnextContext().$implicit;
    ɵɵproperty("nzMatchRouter", true);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", menuData_r12.external);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !menuData_r12.external);
} }
function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_Template, 8, 5, "ng-container", 2);
    ɵɵtemplate(2, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_Template, 3, 3, "ng-template", null, 9, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const menuData_r12 = ctx.$implicit;
    const _r14 = ɵɵreference(3);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", menuData_r12.children)("ngIfElse", _r14);
} }
function BaseMenuComponent_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r89 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "li", 4);
    ɵɵlistener("nzOpenChange", function BaseMenuComponent_ng_container_1_ng_container_1_Template_li_nzOpenChange_1_listener($event) { ɵɵrestoreView(_r89); const menuData_r1 = ɵɵnextContext().$implicit; const ctx_r87 = ɵɵnextContext(); return ctx_r87.onOpenChange($event, menuData_r1); });
    ɵɵelementStart(2, "span", 5);
    ɵɵtemplate(3, BaseMenuComponent_ng_container_1_ng_container_1_i_3_Template, 1, 1, "i", 6);
    ɵɵtemplate(4, BaseMenuComponent_ng_container_1_ng_container_1_span_4_Template, 3, 3, "span", 7);
    ɵɵtemplate(5, BaseMenuComponent_ng_container_1_ng_container_1_span_5_Template, 2, 1, "span", 7);
    ɵɵelementEnd();
    ɵɵelementStart(6, "ul");
    ɵɵtemplate(7, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_Template, 4, 2, "ng-container", 1);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const menuData_r1 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("nzOpen", ctx_r2.openKeys.indexOf(menuData_r1.path) !== -1 && ctx_r2.mode === "inline");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", menuData_r1.icon);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", menuData_r1.locale);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !menuData_r1.locale);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", menuData_r1.children);
} }
function BaseMenuComponent_ng_container_1_ng_template_2_ng_container_1_a_1_i_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 8);
} if (rf & 2) {
    const menuData_r1 = ɵɵnextContext(4).$implicit;
    ɵɵproperty("nzType", menuData_r1.icon);
} }
function BaseMenuComponent_ng_container_1_ng_template_2_ng_container_1_a_1_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
} if (rf & 2) {
    const menuData_r1 = ɵɵnextContext(4).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, menuData_r1.locale));
} }
function BaseMenuComponent_ng_container_1_ng_template_2_ng_container_1_a_1_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const menuData_r1 = ɵɵnextContext(4).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(menuData_r1.name);
} }
function BaseMenuComponent_ng_container_1_ng_template_2_ng_container_1_a_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "a", 14);
    ɵɵtemplate(1, BaseMenuComponent_ng_container_1_ng_template_2_ng_container_1_a_1_i_1_Template, 1, 1, "i", 6);
    ɵɵtemplate(2, BaseMenuComponent_ng_container_1_ng_template_2_ng_container_1_a_1_span_2_Template, 3, 3, "span", 7);
    ɵɵtemplate(3, BaseMenuComponent_ng_container_1_ng_template_2_ng_container_1_a_1_span_3_Template, 2, 1, "span", 7);
    ɵɵelementEnd();
} if (rf & 2) {
    const menuData_r1 = ɵɵnextContext(3).$implicit;
    ɵɵproperty("href", menuData_r1.path, ɵɵsanitizeUrl);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", menuData_r1.icon);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", menuData_r1.locale);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !menuData_r1.locale);
} }
function BaseMenuComponent_ng_container_1_ng_template_2_ng_container_1_a_2_i_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 8);
} if (rf & 2) {
    const menuData_r1 = ɵɵnextContext(4).$implicit;
    ɵɵproperty("nzType", menuData_r1.icon);
} }
function BaseMenuComponent_ng_container_1_ng_template_2_ng_container_1_a_2_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
} if (rf & 2) {
    const menuData_r1 = ɵɵnextContext(4).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, menuData_r1.locale));
} }
function BaseMenuComponent_ng_container_1_ng_template_2_ng_container_1_a_2_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const menuData_r1 = ɵɵnextContext(4).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(menuData_r1.name);
} }
function BaseMenuComponent_ng_container_1_ng_template_2_ng_container_1_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r110 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 15);
    ɵɵlistener("click", function BaseMenuComponent_ng_container_1_ng_template_2_ng_container_1_a_2_Template_a_click_0_listener() { ɵɵrestoreView(_r110); const menuData_r1 = ɵɵnextContext(3).$implicit; return menuData_r1.externalClick(menuData_r1); });
    ɵɵtemplate(1, BaseMenuComponent_ng_container_1_ng_template_2_ng_container_1_a_2_i_1_Template, 1, 1, "i", 6);
    ɵɵtemplate(2, BaseMenuComponent_ng_container_1_ng_template_2_ng_container_1_a_2_span_2_Template, 3, 3, "span", 7);
    ɵɵtemplate(3, BaseMenuComponent_ng_container_1_ng_template_2_ng_container_1_a_2_span_3_Template, 2, 1, "span", 7);
    ɵɵelementEnd();
} if (rf & 2) {
    const menuData_r1 = ɵɵnextContext(3).$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", menuData_r1.icon);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", menuData_r1.locale);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !menuData_r1.locale);
} }
function BaseMenuComponent_ng_container_1_ng_template_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, BaseMenuComponent_ng_container_1_ng_template_2_ng_container_1_a_1_Template, 4, 4, "a", 12);
    ɵɵtemplate(2, BaseMenuComponent_ng_container_1_ng_template_2_ng_container_1_a_2_Template, 4, 3, "a", 13);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const menuData_r1 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !menuData_r1.externalClick);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", menuData_r1.externalClick);
} }
function BaseMenuComponent_ng_container_1_ng_template_2_a_2_i_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 8);
} if (rf & 2) {
    const menuData_r1 = ɵɵnextContext(3).$implicit;
    ɵɵproperty("nzType", menuData_r1.icon);
} }
function BaseMenuComponent_ng_container_1_ng_template_2_a_2_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
} if (rf & 2) {
    const menuData_r1 = ɵɵnextContext(3).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, menuData_r1.locale));
} }
function BaseMenuComponent_ng_container_1_ng_template_2_a_2_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const menuData_r1 = ɵɵnextContext(3).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(menuData_r1.name);
} }
function BaseMenuComponent_ng_container_1_ng_template_2_a_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "a", 16);
    ɵɵtemplate(1, BaseMenuComponent_ng_container_1_ng_template_2_a_2_i_1_Template, 1, 1, "i", 6);
    ɵɵtemplate(2, BaseMenuComponent_ng_container_1_ng_template_2_a_2_span_2_Template, 3, 3, "span", 7);
    ɵɵtemplate(3, BaseMenuComponent_ng_container_1_ng_template_2_a_2_span_3_Template, 2, 1, "span", 7);
    ɵɵelementEnd();
} if (rf & 2) {
    const menuData_r1 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("routerLink", menuData_r1.path);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", menuData_r1.icon);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", menuData_r1.locale);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !menuData_r1.locale);
} }
function BaseMenuComponent_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li", 10);
    ɵɵtemplate(1, BaseMenuComponent_ng_container_1_ng_template_2_ng_container_1_Template, 3, 2, "ng-container", 7);
    ɵɵtemplate(2, BaseMenuComponent_ng_container_1_ng_template_2_a_2_Template, 4, 4, "a", 11);
    ɵɵelementEnd();
} if (rf & 2) {
    const menuData_r1 = ɵɵnextContext().$implicit;
    ɵɵproperty("nzMatchRouter", true);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", menuData_r1.external);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !menuData_r1.external);
} }
function BaseMenuComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, BaseMenuComponent_ng_container_1_ng_container_1_Template, 8, 5, "ng-container", 2);
    ɵɵtemplate(2, BaseMenuComponent_ng_container_1_ng_template_2_Template, 3, 3, "ng-template", null, 3, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const menuData_r1 = ctx.$implicit;
    const _r3 = ɵɵreference(3);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", menuData_r1.children)("ngIfElse", _r3);
} }
const _c0$9 = function (a0) { return { "top-nav-menu": a0 }; };
class BaseMenuComponent {
    constructor(cdf) {
        this.cdf = cdf;
        this.mode = 'inline';
        this.theme = 'dark';
        this.openKeys = [];
        this.openChange = new EventEmitter();
    }
    ngAfterViewInit() {
    }
    ngOnInit() {
        console.log(this.menuData);
    }
    onOpenChange(status, menuData) {
        this.openChange.emit({ status, item: menuData });
    }
}
BaseMenuComponent.ɵfac = function BaseMenuComponent_Factory(t) { return new (t || BaseMenuComponent)(ɵɵdirectiveInject(ChangeDetectorRef)); };
BaseMenuComponent.ɵcmp = ɵɵdefineComponent({ type: BaseMenuComponent, selectors: [["pro-base-menu"]], inputs: { style: "style", mode: "mode", menuData: "menuData", theme: "theme", collapsed: "collapsed", selectedKey: "selectedKey", openKeys: "openKeys" }, outputs: { openChange: "openChange" }, exportAs: ["proBaseMenu"], decls: 2, vars: 8, consts: [["nz-menu", "", 3, "ngStyle", "nzMode", "nzTheme", "ngClass", "nzInlineCollapsed"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], ["elseTemplate1", ""], ["nz-submenu", "", 3, "nzOpen", "nzOpenChange"], ["title", ""], ["nz-icon", "", 3, "nzType", 4, "ngIf"], [4, "ngIf"], ["nz-icon", "", 3, "nzType"], ["elseTemplate2", ""], ["nz-menu-item", "", 3, "nzMatchRouter"], [3, "routerLink", 4, "ngIf"], ["target", "_blank", 3, "href", 4, "ngIf"], [3, "click", 4, "ngIf"], ["target", "_blank", 3, "href"], [3, "click"], [3, "routerLink"]], template: function BaseMenuComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "ul", 0);
        ɵɵtemplate(1, BaseMenuComponent_ng_container_1_Template, 4, 2, "ng-container", 1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("ngStyle", ctx.style)("nzMode", ctx.mode)("nzTheme", ctx.theme)("ngClass", ɵɵpureFunction1(6, _c0$9, ctx.mode === "horizontal"))("nzInlineCollapsed", ctx.collapsed);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.menuData);
    } }, directives: [NzMenuDirective, NgStyle, NgClass, NgForOf, NgIf, ɵNzTransitionPatchDirective, NzSubMenuComponent, NzIconDirective, NzMenuItemDirective, RouterLinkWithHref], pipes: [TranslatePipe], styles: [".ant-pro-sider-menu-logo{position:relative;height:64px;padding-left:48px/2;overflow:hidden;line-height:64px;background:#001529;cursor:pointer;transition:all .3s}.ant-pro-sider-menu-logo img{display:inline-block;height:32px;vertical-align:middle}.ant-pro-sider-menu-logo h1{display:inline-block;margin:0 0 0 12px;color:#fff;font-weight:600;font-size:20px;font-family:Avenir,Helvetica Neue,Arial,Helvetica,sans-serif;vertical-align:middle}.ant-pro-sider-menu-sider{position:relative;z-index:10;min-height:100vh;box-shadow:2px 0 6px rgba(0,21,41,.35)}.ant-pro-sider-menu-sider.fix-sider-bar{position:fixed;top:0;left:0;box-shadow:2px 0 8px 0 rgba(29,35,41,.05)}.ant-pro-sider-menu-sider.fix-sider-bar .ant-menu-root{height:calc(100vh - 64px);overflow-y:auto}.ant-pro-sider-menu-sider.fix-sider-bar .ant-menu-inline{border-right:0}.ant-pro-sider-menu-sider.fix-sider-bar .ant-menu-inline .ant-menu-item,.ant-pro-sider-menu-sider.fix-sider-bar .ant-menu-inline .ant-menu-submenu-title{width:100%}.ant-pro-sider-menu-sider.light{background-color:#fff;box-shadow:2px 0 8px 0 rgba(29,35,41,.05)}.ant-pro-sider-menu-sider.light .ant-pro-sider-menu-logo{background:#fff;box-shadow:1px 1px 0 0 #f0f0f0}.ant-pro-sider-menu-sider.light .ant-pro-sider-menu-logo h1{color:#1890ff}.ant-pro-sider-menu-sider.light .ant-menu-light{border-right-color:transparent}.ant-pro-sider-menu-icon{width:14px;vertical-align:baseline}.ant-pro-sider-menu .top-nav-menu li.ant-menu-item{height:64px;line-height:64px}.ant-pro-sider-menu .drawer .drawer-content{background:#001529}.ant-pro-sider-menu .ant-menu-inline-collapsed>.ant-menu-item-group>.ant-menu-item-group-list>.ant-menu-item .sider-menu-item-img+span,.ant-pro-sider-menu .ant-menu-inline-collapsed>.ant-menu-item .sider-menu-item-img+span,.ant-pro-sider-menu .ant-menu-inline-collapsed>.ant-menu-submenu>.ant-menu-submenu-title .sider-menu-item-img+span{display:inline-block;max-width:0;opacity:0}.ant-pro-sider-menu .ant-menu-item .sider-menu-item-img+span,.ant-pro-sider-menu .ant-menu-submenu-title .sider-menu-item-img+span{opacity:1;transition:opacity .3s cubic-bezier(.645,.045,.355,1),width .3s cubic-bezier(.645,.045,.355,1)}.ant-pro-sider-menu .ant-drawer-body{padding:0}"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(BaseMenuComponent, [{
        type: Component,
        args: [{
                selector: 'pro-base-menu',
                templateUrl: 'base-menu.component.html',
                styleUrls: ['base-menu.component.less'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                exportAs: 'proBaseMenu',
                preserveWhitespaces: false
            }]
    }], function () { return [{ type: ChangeDetectorRef }]; }, { style: [{
            type: Input
        }], mode: [{
            type: Input
        }], menuData: [{
            type: Input
        }], theme: [{
            type: Input
        }], collapsed: [{
            type: Input
        }], selectedKey: [{
            type: Input
        }], openKeys: [{
            type: Input
        }], openChange: [{
            type: Output
        }] }); })();

function TopNavHeaderComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function TopNavHeaderComponent_ng_template_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0, 11);
} if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r4.logo);
} }
function TopNavHeaderComponent_ng_template_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "img", 12);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("src", ctx_r5.logo, ɵɵsanitizeUrl);
} }
function TopNavHeaderComponent_ng_template_4_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0, 11);
} if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r6.title);
} }
function TopNavHeaderComponent_ng_template_4_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r7.title);
} }
function TopNavHeaderComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "a", 7);
    ɵɵelementContainerStart(1, 8);
    ɵɵtemplate(2, TopNavHeaderComponent_ng_template_4_ng_container_2_Template, 1, 1, "ng-container", 9);
    ɵɵtemplate(3, TopNavHeaderComponent_ng_template_4_ng_container_3_Template, 2, 1, "ng-container", 10);
    ɵɵelementContainerEnd();
    ɵɵelementStart(4, "h1");
    ɵɵelementContainerStart(5, 8);
    ɵɵtemplate(6, TopNavHeaderComponent_ng_template_4_ng_container_6_Template, 1, 1, "ng-container", 9);
    ɵɵtemplate(7, TopNavHeaderComponent_ng_template_4_ng_container_7_Template, 2, 1, "ng-container", 10);
    ɵɵelementContainerEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngSwitch", true);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", ctx_r2.isTemplateRef(ctx_r2.logo));
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", ctx_r2.isNonEmptyString(ctx_r2.logo));
    ɵɵadvance(2);
    ɵɵproperty("ngSwitch", true);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", ctx_r2.isTemplateRef(ctx_r2.title));
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", ctx_r2.isNonEmptyString(ctx_r2.title));
} }
function TopNavHeaderComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c0$8 = function (a0) { return { "wide": a0 }; };
const _c1$5 = function (a0, a1) { return { logo: a0, title: a1 }; };
const _c2$4 = function (a0) { return { theme: a0, layout: "topmenu" }; };
const _c3$3 = function (a0) { return { $implicit: a0 }; };
class TopNavHeaderComponent {
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
TopNavHeaderComponent.ɵcmp = ɵɵdefineComponent({ type: TopNavHeaderComponent, selectors: [["pro-top-nav-header"], ["", "pro-top-nav-header", ""]], hostVars: 4, hostBindings: function TopNavHeaderComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵclassMap(ctx.baseClassName);
        ɵɵclassProp("light", ctx.theme === "light");
    } }, inputs: { theme: "theme", menuData: "menuData", logo: "logo", title: "title", contentWidth: "contentWidth", rightContentRender: "rightContentRender", menuHeaderRender: "menuHeaderRender" }, outputs: { onMenuHeaderClick: "onMenuHeaderClick" }, exportAs: ["proTopNavHeader"], decls: 9, vars: 31, consts: [[3, "ngClass"], [3, "click"], ["key", "logo", "id", "logo"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["defaultHeaderTemplate", ""], [2, "flex", "1", "overflow-x", "auto", "overflow-y", "hidden"], [3, "menuData", "theme", "mode"], ["href", "/"], [3, "ngSwitch"], [3, "ngTemplateOutlet", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [3, "ngTemplateOutlet"], ["alt", "logo", 3, "src"]], template: function TopNavHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵlistener("click", function TopNavHeaderComponent_Template_div_click_1_listener($event) { return ctx.menuHeaderClick($event); });
        ɵɵelementStart(2, "div", 2);
        ɵɵtemplate(3, TopNavHeaderComponent_ng_container_3_Template, 1, 0, "ng-container", 3);
        ɵɵtemplate(4, TopNavHeaderComponent_ng_template_4_Template, 8, 6, "ng-template", null, 4, ɵɵtemplateRefExtractor);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(6, "div", 5);
        ɵɵelement(7, "pro-base-menu", 6);
        ɵɵelementEnd();
        ɵɵtemplate(8, TopNavHeaderComponent_ng_container_8_Template, 1, 0, "ng-container", 3);
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r1 = ɵɵreference(5);
        ɵɵclassMapInterpolate1("", ctx.baseClassName, "-main");
        ɵɵproperty("ngClass", ɵɵpureFunction1(22, _c0$8, ctx.contentWidth === "Fixed"));
        ɵɵadvance(1);
        ɵɵclassMapInterpolate1("", ctx.baseClassName, "-left");
        ɵɵadvance(1);
        ɵɵclassMapInterpolate1("", ctx.baseClassName, "-logo");
        ɵɵadvance(1);
        ɵɵproperty("ngTemplateOutlet", ctx.menuHeaderRender ? ctx.menuHeaderRender : _r1)("ngTemplateOutletContext", ɵɵpureFunction2(24, _c1$5, ctx.title, ctx.title));
        ɵɵadvance(3);
        ɵɵclassMapInterpolate1("", ctx.baseClassName, "-menu");
        ɵɵstyleProp("max-width", ctx.maxWidth, "px");
        ɵɵadvance(1);
        ɵɵproperty("menuData", ctx.menuData)("theme", ctx.theme)("mode", "horizontal");
        ɵɵadvance(1);
        ɵɵproperty("ngTemplateOutlet", ctx.rightContentRender)("ngTemplateOutletContext", ɵɵpureFunction1(29, _c3$3, ɵɵpureFunction1(27, _c2$4, ctx.theme)));
    } }, directives: [NgClass, NgTemplateOutlet, BaseMenuComponent, NgSwitch, NgSwitchCase], styles: [".ant-pro-top-nav-header{position:relative;width:100%;height:64px;box-shadow:0 3px 6px -4px rgba(0,0,0,.12),0 6px 16px 0 rgba(0,0,0,.08),0 9px 28px 8px rgba(0,0,0,.05);transition:background .3s,width .2s}.ant-pro-top-nav-header .ant-menu-submenu.ant-menu-submenu-horizontal{height:100%;line-height:64px}.ant-pro-top-nav-header .ant-menu-submenu.ant-menu-submenu-horizontal .ant-menu-submenu-title{height:100%}.ant-pro-top-nav-header.light{background-color:#fff}.ant-pro-top-nav-header.light h1{color:#002140}.ant-pro-top-nav-header-main{display:flex;height:64px;padding-left:24px}.ant-pro-top-nav-header-main.wide{max-width:1200px;margin:auto;padding-left:0}.ant-pro-top-nav-header-main .left{display:flex;flex:1}.ant-pro-top-nav-header-main .right{width:324px}.ant-pro-top-nav-header-logo{position:relative;width:165px;height:64px;overflow:hidden;line-height:64px;transition:all .3s}.ant-pro-top-nav-header-logo img{display:inline-block;height:32px;vertical-align:middle}.ant-pro-top-nav-header-logo h1{display:inline-block;margin:0 0 0 12px;color:#fff;font-weight:400;font-size:16px;vertical-align:top}.ant-pro-top-nav-header-menu .ant-menu.ant-menu-horizontal{height:64px;line-height:64px;border:none}"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(TopNavHeaderComponent, [{
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

function ReuseTabMenuComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 5);
    ɵɵlistener("click", function ReuseTabMenuComponent_li_1_Template_li_click_0_listener($event) { ɵɵrestoreView(_r2); const ctx_r1 = ɵɵnextContext(); return ctx_r1.click($event, "refresh"); });
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵproperty("innerHTML", "\u5237\u65B0", ɵɵsanitizeHtml);
} }
class ReuseTabMenuComponent {
    constructor() {
        this.close = new EventEmitter();
    }
    documentClick(event) {
        this.closeMenu(event);
    }
    documentContextmenu(event) {
        this.closeMenu(event);
    }
    get includeNonCloseable() {
        return this.event.ctrlKey;
    }
    ngOnInit() {
        if (this.includeNonCloseable)
            this.item.closable = true;
    }
    notify(type) {
        this.close.next({
            type,
            item: this.item,
            includeNonCloseable: this.includeNonCloseable,
        });
    }
    click(e, type) {
        e.preventDefault();
        e.stopPropagation();
        if (type === 'refresh' && !this.item.refreshable)
            return;
        if (type === 'close' && !this.item.closable)
            return;
        if (type === 'closeRight' && this.item.last)
            return;
        this.notify(type);
    }
    closeMenu(event) {
        if (event.type === 'click' && event.button === 2)
            return;
        this.notify(null);
    }
}
ReuseTabMenuComponent.ɵfac = function ReuseTabMenuComponent_Factory(t) { return new (t || ReuseTabMenuComponent)(); };
ReuseTabMenuComponent.ɵcmp = ɵɵdefineComponent({ type: ReuseTabMenuComponent, selectors: [["pro-reuse-tab-context-menu"]], hostBindings: function ReuseTabMenuComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("click", function ReuseTabMenuComponent_click_HostBindingHandler($event) { return ctx.documentClick($event); }, false, ɵɵresolveDocument)("contextmenu", function ReuseTabMenuComponent_contextmenu_HostBindingHandler($event) { return ctx.documentContextmenu($event); }, false, ɵɵresolveDocument);
    } }, inputs: { item: "item", event: "event" }, outputs: { close: "close" }, exportAs: ["proReuseTabContextMenu"], decls: 5, vars: 6, consts: [["nz-menu", ""], ["nz-menu-item", "", "data-type", "refresh", 3, "innerHTML", "click", 4, "ngIf"], ["nz-menu-item", "", "data-type", "close", 3, "nzDisabled", "innerHTML", "click"], ["nz-menu-item", "", "data-type", "closeOther", 3, "innerHTML", "click"], ["nz-menu-item", "", "data-type", "closeRight", 3, "nzDisabled", "innerHTML", "click"], ["nz-menu-item", "", "data-type", "refresh", 3, "innerHTML", "click"]], template: function ReuseTabMenuComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "ul", 0);
        ɵɵtemplate(1, ReuseTabMenuComponent_li_1_Template, 1, 1, "li", 1);
        ɵɵelementStart(2, "li", 2);
        ɵɵlistener("click", function ReuseTabMenuComponent_Template_li_click_2_listener($event) { return ctx.click($event, "close"); });
        ɵɵelementEnd();
        ɵɵelementStart(3, "li", 3);
        ɵɵlistener("click", function ReuseTabMenuComponent_Template_li_click_3_listener($event) { return ctx.click($event, "closeOther"); });
        ɵɵelementEnd();
        ɵɵelementStart(4, "li", 4);
        ɵɵlistener("click", function ReuseTabMenuComponent_Template_li_click_4_listener($event) { return ctx.click($event, "closeRight"); });
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.item.refreshable);
        ɵɵadvance(1);
        ɵɵproperty("nzDisabled", !ctx.item.closable)("innerHTML", "\u5173\u95ED", ɵɵsanitizeHtml);
        ɵɵadvance(1);
        ɵɵproperty("innerHTML", "\u5173\u95ED\u5176\u4ED6", ɵɵsanitizeHtml);
        ɵɵadvance(1);
        ɵɵproperty("nzDisabled", ctx.item.last)("innerHTML", "\u5173\u95ED\u53F3\u4FA7", ɵɵsanitizeHtml);
    } }, directives: [NzMenuDirective, NgIf, NzMenuItemDirective], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ReuseTabMenuComponent, [{
        type: Component,
        args: [{
                selector: 'pro-reuse-tab-context-menu',
                template: `
      <ul nz-menu>
          <li nz-menu-item (click)="click($event, 'refresh')" *ngIf="item.refreshable" data-type="refresh" [innerHTML]="'刷新'"></li>
          <li nz-menu-item (click)="click($event, 'close')" data-type="close" [nzDisabled]="!item.closable" [innerHTML]="'关闭'"></li>
          <li nz-menu-item (click)="click($event, 'closeOther')" data-type="closeOther" [innerHTML]="'关闭其他'"></li>
          <li nz-menu-item (click)="click($event, 'closeRight')" data-type="closeRight" [nzDisabled]="item.last" [innerHTML]="'关闭右侧'"></li>
      </ul>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                exportAs: 'proReuseTabContextMenu',
                preserveWhitespaces: false
            }]
    }], function () { return []; }, { item: [{
            type: Input
        }], event: [{
            type: Input
        }], close: [{
            type: Output
        }], documentClick: [{
            type: HostListener,
            args: ['document:click', ['$event']]
        }], documentContextmenu: [{
            type: HostListener,
            args: ['document:contextmenu', ['$event']]
        }] }); })();

class ReuseTabMenuService {
    constructor(overlay) {
        this.overlay = overlay;
        this.show = new Subject();
        this.close = new Subject();
    }
    remove() {
        if (!this.ref)
            return;
        this.ref.detach();
        this.ref.dispose();
        this.ref = null;
    }
    open(context) {
        this.remove();
        const { event, item } = context;
        const fakeElement = new ElementRef({
            getBoundingClientRect: () => ({
                bottom: event.clientY,
                height: 0,
                left: event.clientX,
                right: event.clientX,
                top: event.clientY,
                width: 0,
            }),
        });
        const positions = [
            new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
        ];
        const positionStrategy = this.overlay.position().flexibleConnectedTo(fakeElement).withPositions(positions);
        this.ref = this.overlay.create({
            positionStrategy,
            panelClass: 'ant-pro-reuse-tab-cm',
            scrollStrategy: this.overlay.scrollStrategies.close(),
        });
        const comp = this.ref.attach(new ComponentPortal(ReuseTabMenuComponent));
        const instance = comp.instance;
        instance.item = Object.assign({}, item);
        instance.event = event;
        const sub$ = new Subscription();
        sub$.add(instance.close.subscribe((res) => {
            this.close.next(res);
            this.remove();
        }));
        comp.onDestroy(() => sub$.unsubscribe());
    }
}
ReuseTabMenuService.ɵfac = function ReuseTabMenuService_Factory(t) { return new (t || ReuseTabMenuService)(ɵɵinject(Overlay)); };
ReuseTabMenuService.ɵprov = ɵɵdefineInjectable({ token: ReuseTabMenuService, factory: ReuseTabMenuService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ReuseTabMenuService, [{
        type: Injectable
    }], function () { return [{ type: Overlay }]; }, null); })();

class ScrollService {
    constructor(_doc, platform) {
        this._doc = _doc;
        this.platform = platform;
    }
    _getDoc() {
        return this._doc || document;
    }
    _getWin() {
        const doc = this._getDoc();
        return doc.defaultView || window;
    }
    /**
     * 获取滚动条位置
     * @param element 指定元素，默认 `window`
     */
    getScrollPosition(element) {
        if (!this.platform.isBrowser) {
            return [0, 0];
        }
        const win = this._getWin();
        if (element && element !== win) {
            return [element.scrollLeft, element.scrollTop];
        }
        else {
            return [win.pageXOffset, win.pageYOffset];
        }
    }
    /**
     * 设置滚动条位置
     * @param element 指定元素
     */
    scrollToPosition(element, position) {
        if (!this.platform.isBrowser) {
            return;
        }
        (element || this._getWin()).scrollTo(position[0], position[1]);
    }
    /**
     * 设置滚动条至指定元素
     * @param element 指定元素，默认 `document.body`
     * @param topOffset 偏移值，默认 `0`
     */
    scrollToElement(element, topOffset = 0) {
        if (!this.platform.isBrowser) {
            return;
        }
        if (!element) {
            element = this._getDoc().body;
        }
        element.scrollIntoView();
        const win = this._getWin();
        if (win && win.scrollBy) {
            win.scrollBy(0, element.getBoundingClientRect().top - topOffset);
            if (win.pageYOffset < 20) {
                win.scrollBy(0, -win.pageYOffset);
            }
        }
    }
    /**
     * 滚动至顶部
     * @param topOffset 偏移值，默认 `0`
     */
    scrollToTop(topOffset = 0) {
        if (!this.platform.isBrowser) {
            return;
        }
        this.scrollToElement(this._getDoc().body, topOffset);
    }
}
ScrollService.ɵfac = function ScrollService_Factory(t) { return new (t || ScrollService)(ɵɵinject(DOCUMENT), ɵɵinject(Platform)); };
ScrollService.ɵprov = ɵɵdefineInjectable({ token: ScrollService, factory: ScrollService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ScrollService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: Platform }]; }, null); })();

class ReuseTabService {
    // #endregion
    constructor(injector) {
        this.injector = injector;
        this._inited = false;
        this._max = 500;
        this._keepingScroll = false;
        this._cachedChange = new BehaviorSubject(null);
        this._cached = [];
        this._titleCached = {};
        this._closableCached = {};
        this.positionBuffer = {};
        this.debug = false;
        /** 排除规则，限 `mode=URL` */
        this.excludes = [];
    }
    get snapshot() {
        return this.injector.get(ActivatedRoute).snapshot;
    }
    // #region public
    get inited() {
        return this._inited;
    }
    /** 当前路由地址 */
    get curUrl() {
        return this.getUrl(this.snapshot);
    }
    /** 当前路由跳转参数 **/
    get curQueryParams() {
        return this.snapshot.queryParams;
    }
    /** url和路由参数 **/
    get curUrlWithQueryParams() {
        const router = this.injector.get(Router);
        const urlWithQueryParams = router.serializeUrl(router.createUrlTree([this.curUrl], { queryParams: this.curQueryParams }));
        return urlWithQueryParams;
    }
    /** 允许最多复用多少个页面，取值范围 `2-500`，值发生变更时会强制关闭且忽略可关闭条件 */
    set max(value) {
        this._max = Math.min(Math.max(value, 2), 500);
        for (let i = this._cached.length; i > this._max; i--) {
            this._cached.pop();
        }
    }
    set keepingScroll(value) {
        this._keepingScroll = value;
        this.initScroll();
    }
    get keepingScroll() {
        return this._keepingScroll;
    }
    /** 获取已缓存的路由 */
    get items() {
        return this._cached;
    }
    /** 获取当前缓存的路由总数 */
    get count() {
        return this._cached.length;
    }
    /** 订阅缓存变更通知 */
    get change() {
        return this._cachedChange.asObservable(); // .pipe(filter(w => w !== null));
    }
    /** 自定义当前标题 */
    set title(value) {
        const urlWithQueryParams = this.curUrlWithQueryParams;
        if (typeof value === 'string')
            value = { name: value };
        this._titleCached[urlWithQueryParams] = value;
        this.di('update current tag title: ', value);
        this._cachedChange.next({
            active: 'title',
            url: urlWithQueryParams,
            title: value,
            list: this._cached,
        });
    }
    /** 获取指定路径缓存所在位置，`-1` 表示无缓存 */
    index(url, queryParams) {
        return this._cached.findIndex(w => w.url === url && this.queryParamsEqual(queryParams, w._snapshot.queryParams));
    }
    /** 获取指定路径缓存是否存在 */
    exists(url, queryParams) {
        return this.index(url, queryParams) !== -1;
    }
    /** 获取指定路径缓存 */
    get(url, queryParams) {
        return this._cached.find(w => w.url === url && this.queryParamsEqual(queryParams, w._snapshot.queryParams)) || null;
    }
    remove(url, queryParams, includeNonCloseable) {
        const idx = typeof url === 'string' ? this.index(url, queryParams) : url;
        const item = idx !== -1 ? this._cached[idx] : null;
        if (!item || (!includeNonCloseable && !item.closable))
            return false;
        this.destroy(item._handle);
        this._cached.splice(idx, 1);
        // 删除标题缓存
        const router = this.injector.get(Router);
        const urlWithQueryParams = router.serializeUrl(router.createUrlTree([item.url], { queryParams: item._snapshot.queryParams }));
        delete this._titleCached[urlWithQueryParams];
        return true;
    }
    /**
     * 常用于添加(修改)完成后关闭页面并跳转到列表页，并刷新列表页
     * @param toUrl
     * @param queryParams
     */
    closeCurAndToList(toUrl, queryParams) {
        // 缓存当前页数据
        const activatedRoute = this.injector.get(ActivatedRoute);
        // 刷新列表页并跳转
        this.refreshPage(toUrl, queryParams);
        this.injector.get(Router).navigate([toUrl], { queryParams: queryParams }).then();
        // 关闭当前页
        this.close(this.getUrl(activatedRoute.snapshot), activatedRoute.snapshot.queryParams, true, false);
    }
    /**
     * 刷新指定页面，页面需要实现Hook。
     * @param url: 全路径
     * @param queryParams
     */
    refreshPage(url, queryParams) {
        if (this.curUrl === url && this.queryParamsEqual(this.curQueryParams, queryParams)) {
            if (this.componentRef) {
                this.runHook('onReuseInit', this.componentRef, "refresh");
            }
            else {
                console.info('无法刷新未被缓存过的当前页');
            }
        }
        else {
            const reuseTabCached = this.get(url, queryParams);
            if (reuseTabCached && reuseTabCached._handle) {
                this.runHook('onReuseInit', reuseTabCached._handle.componentRef, "refresh");
            }
        }
    }
    /**
     * 根据URL移除标签
     *
     * @param [includeNonCloseable=false] 是否强制包含不可关闭
     */
    close(url, queryParams, includeNonCloseable = false, autoPos = true) {
        this.removeUrlBuffer = url;
        this.removeQueryParamBuffer = queryParams;
        this.remove(url, queryParams, includeNonCloseable);
        if (autoPos) {
            this._cachedChange.next({ active: 'close', url, queryParams, list: this._cached });
        }
        this.di('close tag', url);
        return true;
    }
    /**
     * 清除右边
     *
     * @param [includeNonCloseable=false] 是否强制包含不可关闭
     */
    closeRight(url, queryParams, includeNonCloseable = false) {
        const start = this.index(url, queryParams);
        for (let i = this.count - 1; i > start; i--) {
            this.remove(i, queryParams, includeNonCloseable);
        }
        this.removeUrlBuffer = null;
        this.removeQueryParamBuffer = {};
        this._cachedChange.next({ active: 'closeRight', url, queryParams, list: this._cached });
        this.di('close right tages', url);
        return true;
    }
    /**
     * 清除所有缓存
     *
     * @param [includeNonCloseable=false] 是否强制包含不可关闭
     */
    clear(includeNonCloseable = false) {
        this._cached.forEach(w => {
            if (!includeNonCloseable && w.closable)
                this.destroy(w._handle);
        });
        this._cached = this._cached.filter(w => !includeNonCloseable && !w.closable);
        this.removeUrlBuffer = null;
        this.removeQueryParamBuffer = {};
        this._cachedChange.next({ active: 'clear', list: this._cached });
        this.di('clear all catch');
    }
    /**
     * 移动缓存数据
     * @param url 要移动的URL地址
     * @param position 新位置，下标从 `0` 开始
     *
     * @example
     * ```
     * // source
     * [ '/a/1', '/a/2', '/a/3', '/a/4', '/a/5' ]
     * move('/a/1', 2);
     * // output
     * [ '/a/2', '/a/3', '/a/1', '/a/4', '/a/5' ]
     * move('/a/1', -1);
     * // output
     * [ '/a/2', '/a/3', '/a/4', '/a/5', '/a/1' ]
     * ```
     */
    move(url, queryParams, position) {
        const start = this._cached.findIndex(w => w.url === url && this.queryParamsEqual(queryParams, w._snapshot.queryParams));
        if (start === -1)
            return;
        const data = this._cached.slice();
        data.splice(position < 0 ? data.length + position : position, 0, data.splice(start, 1)[0]);
        this._cached = data;
        this._cachedChange.next({
            active: 'move',
            url,
            queryParams,
            position,
            list: this._cached,
        });
    }
    /**
     * 强制关闭当前路由（包含不可关闭状态），并重新导航至 `newUrl` 路由
     */
    replace(newUrl, queryParams) {
        const curUrl = this.curUrl;
        const curQueryParams = this.curQueryParams;
        if (this.exists(curUrl, curQueryParams)) {
            this.close(curUrl, curQueryParams, true);
        }
        else {
            this.removeUrlBuffer = curUrl;
            this.removeQueryParamBuffer = curQueryParams;
        }
        this.injector.get(Router).navigate([newUrl], { queryParams: queryParams }).then();
    }
    /**
     * 获取标题，顺序如下：
     *
     * 1. 组件内使用 `ReuseTabService.title = 'new title'` 重新指定文本
     * 2. 路由配置中 data 属性中包含 locale > name
     *
     * @param url 指定URL
     * @param route 指定路由快照
     */
    getTitle(url, route) {
        const router = this.injector.get(Router);
        const urlWithQueryParams = router.serializeUrl(router.createUrlTree([url], { queryParams: route.queryParams }));
        if (this._titleCached[urlWithQueryParams]) {
            return this._titleCached[urlWithQueryParams];
        }
        if (route && route.data && (route.data.name || route.data.locale)) {
            return {
                name: route.data.name,
                locale: route.data.locale,
            };
        }
        return { name: '未命名' };
    }
    /**
     * 清除标题缓存
     */
    clearTitleCached() {
        this._titleCached = {};
    }
    /** 自定义当前 `closable` 状态 */
    set closable(value) {
        const urlWithQueryParams = this.curUrlWithQueryParams;
        this._closableCached[urlWithQueryParams] = value;
        this.di('update current tag closable: ', value);
        this._cachedChange.next({
            active: 'closable',
            closable: value,
            list: this._cached,
        });
    }
    /**
     * 获取 `closable` 状态，顺序如下：
     *
     * 1. 组件内使用 `ReuseTabService.closable = true` 重新指定 `closable` 状态
     * 2. 路由配置中 data 属性中包含 `reuseClosable`
     *
     * @param url 指定URL
     * @param route 指定路由快照
     */
    getClosable(url, route) {
        if (typeof this._closableCached[url] !== 'undefined') {
            const router = this.injector.get(Router);
            const urlWithQueryParams = router.serializeUrl(router.createUrlTree([url], { queryParams: route.queryParams }));
            return this._closableCached[urlWithQueryParams];
        }
        if (route && route.data && typeof route.data.reuseClosable === 'boolean')
            return route.data.reuseClosable;
        return true;
    }
    getRefreshable(url, route) {
        if (route && route.data && typeof route.data.reuseRefreshable === 'boolean')
            return route.data.reuseClosable;
        return true;
    }
    /**
     * 清空 `closable` 缓存
     */
    clearClosableCached() {
        this._closableCached = {};
    }
    getTruthRoute(route) {
        let next = route;
        while (next.firstChild)
            next = next.firstChild;
        return next;
    }
    /**
     * 根据快照获取URL地址
     */
    getUrl(route) {
        let next = this.getTruthRoute(route);
        const segments = [];
        while (next) {
            segments.push(next.url.join('/'));
            next = next.parent;
        }
        const url = '/' +
            segments
                .filter(i => i)
                .reverse()
                .join('/');
        return url;
    }
    /**
     * 检查快照是否允许被复用
     */
    can(route) {
        const url = this.getUrl(route);
        if (url === this.removeUrlBuffer && this.queryParamsEqual(route.queryParams, this.removeQueryParamBuffer))
            return false;
        if (route.data && typeof route.data.reuse === 'boolean')
            return route.data.reuse;
        return !this.isExclude(url);
    }
    isExclude(url) {
        return this.excludes.findIndex(r => r.test(url)) !== -1;
    }
    /**
     * 刷新，触发一个 refresh 类型事件
     */
    refresh(data) {
        this._cachedChange.next({ active: 'refresh', data });
    }
    // #endregion
    // #region privates
    destroy(_handle) {
        if (_handle && _handle.componentRef && _handle.componentRef.destroy)
            _handle.componentRef.destroy();
    }
    di(...args) {
        if (!this.debug)
            return;
        console.warn(...args);
    }
    init() {
        this.initScroll();
        this._inited = true;
    }
    runHook(method, comp, type = 'init') {
        // 非当前页
        if (typeof comp === 'number') {
            const item = this._cached[comp];
            comp = item._handle.componentRef;
        }
        const compThis = comp.instance;
        if (comp == null || !compThis) {
            return;
        }
        const fn = compThis[method];
        if (typeof fn !== 'function') {
            return;
        }
        if (method === 'onReuseInit') {
            fn.call(compThis, type);
        }
        else {
            fn.call(compThis);
        }
    }
    hasInValidRoute(route) {
        return !route.routeConfig || !!route.routeConfig.loadChildren || !!route.routeConfig.children;
    }
    /**
     * 决定是否允许路由复用，若 `true` 会触发 `store`
     */
    shouldDetach(route) {
        if (this.hasInValidRoute(route))
            return false;
        const ret = this.can(route);
        this.di('#shouldDetach', ret, this.getUrl(route));
        return ret;
    }
    /**
     * 存储
     */
    store(_snapshot, _handle) {
        const url = this.getUrl(_snapshot);
        const idx = this.index(url, _snapshot.queryParams);
        const isAdd = idx === -1;
        const item = {
            title: this.getTitle(url, _snapshot),
            closable: this.getClosable(url, _snapshot),
            refreshable: this.getRefreshable(url, _snapshot),
            position: this.getKeepingScroll(url, _snapshot) ? this.positionBuffer[url] : null,
            url,
            _snapshot,
            _handle,
        };
        if (isAdd) {
            if (this.count >= this._max) {
                // Get the oldest closable location
                const closeIdx = this._cached.findIndex(w => w.closable);
                if (closeIdx !== -1)
                    this.remove(closeIdx, {}, false);
            }
            this._cached.push(item);
        }
        else {
            this._cached[idx] = item;
        }
        this.removeUrlBuffer = null;
        this.removeQueryParamBuffer = {};
        this.di('#store', isAdd ? '[new]' : '[override]', url);
        if (_handle && _handle.componentRef) {
            this.runHook('onReuseDestroy', _handle.componentRef);
        }
        if (!isAdd) {
            this._cachedChange.next({ active: 'override', item, list: this._cached });
        }
    }
    /**
     * 决定是否允许应用缓存数据
     */
    shouldAttach(route) {
        if (this.hasInValidRoute(route))
            return false;
        const url = this.getUrl(route);
        const data = this.get(url, route.queryParams);
        const ret = !!(data && data._handle);
        this.di('#shouldAttach', ret, url);
        if (ret) {
            const compRef = data._handle.componentRef;
            if (compRef) {
                this.componentRef = compRef;
                this.runHook('onReuseInit', compRef);
            }
        }
        else {
            this._cachedChange.next({ active: 'add', url, queryParams: route.queryParams, list: this._cached });
        }
        return ret;
    }
    /**
     * 提取复用数据
     */
    retrieve(route) {
        if (this.hasInValidRoute(route))
            return null;
        const url = this.getUrl(route);
        const data = this.get(url, route.queryParams);
        const ret = (data && data._handle) || null;
        this.di('#retrieve', url, ret);
        return ret;
    }
    /**
     * 决定是否应该进行复用路由处理
     */
    shouldReuseRoute(future, curr) {
        let ret = future.routeConfig === curr.routeConfig;
        if (!ret)
            return false;
        const path = ((future.routeConfig && future.routeConfig.path) || '');
        if (path.length > 0) {
            // if (this.routeParamMatchMode === 'strict') {
            //   ret = this.getUrl(future) === this.getUrl(curr);
            // } else {
            //   ret = path === ((curr.routeConfig && curr.routeConfig.path) || '');
            // }
            ret = this.getUrl(future) === this.getUrl(curr) && this.queryParamsEqual(future.queryParams, curr.queryParams);
        }
        this.di('=====================');
        this.di('#shouldReuseRoute', ret, `${this.getUrl(curr)}=>${this.getUrl(future)}`, future, curr);
        return ret;
    }
    // #region scroll
    /**
     * 获取 `keepingScroll` 状态，顺序如下：
     *
     * 1. 路由配置中 data 属性中包含 `keepingScroll`
     * 2. 组件 `keepingScroll` 值
     */
    getKeepingScroll(url, route) {
        if (route && route.data && typeof route.data.reuseKeepingScroll === 'boolean')
            return route.data.reuseKeepingScroll;
        return this.keepingScroll;
    }
    get isDisabledInRouter() {
        const routerConfig = this.injector.get(ROUTER_CONFIGURATION, {});
        return routerConfig.scrollPositionRestoration === 'disabled';
    }
    get ss() {
        return this.injector.get(ScrollService);
    }
    initScroll() {
        if (this._router$) {
            this._router$.unsubscribe();
        }
        this._router$ = this.injector.get(Router).events.subscribe(e => {
            if (e instanceof NavigationStart) {
                const url = this.curUrl;
                if (this.getKeepingScroll(url, this.getTruthRoute(this.snapshot))) {
                    this.positionBuffer[url] = this.ss.getScrollPosition(this.keepingScrollContainer);
                }
                else {
                    delete this.positionBuffer[url];
                }
            }
            else if (e instanceof NavigationEnd) {
                const url = this.curUrl;
                const item = this.get(url, this.snapshot.queryParams);
                if (item && item.position && this.getKeepingScroll(url, this.getTruthRoute(this.snapshot))) {
                    if (this.isDisabledInRouter) {
                        this.ss.scrollToPosition(this.keepingScrollContainer, item.position);
                    }
                    else {
                        setTimeout(() => this.ss.scrollToPosition(this.keepingScrollContainer, item.position), 1);
                    }
                }
            }
        });
    }
    /**
     * 比较url查询参数
     * @param queryParams1
     * @param queryParams2
     */
    queryParamsEqual(queryParams1, queryParams2) {
        return JSON.stringify(queryParams1) === JSON.stringify(queryParams2);
    }
    // #endregion
    ngOnDestroy() {
        const { _cachedChange, _router$ } = this;
        this.clear();
        this._cached = [];
        _cachedChange.complete();
        if (_router$) {
            _router$.unsubscribe();
        }
    }
}
ReuseTabService.ɵfac = function ReuseTabService_Factory(t) { return new (t || ReuseTabService)(ɵɵinject(Injector)); };
ReuseTabService.ɵprov = ɵɵdefineInjectable({ token: ReuseTabService, factory: ReuseTabService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ReuseTabService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: Injector }]; }, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTabChangeEvent {
}

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function ProTabAddButtonComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0, 3);
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.addIcon);
} }
function ProTabAddButtonComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "i", 4);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("nzType", ctx_r1.addIcon);
} }
class ProTabAddButtonComponent {
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
ProTabAddButtonComponent.ɵfac = function ProTabAddButtonComponent_Factory(t) { return new (t || ProTabAddButtonComponent)(ɵɵdirectiveInject(ElementRef)); };
ProTabAddButtonComponent.ɵcmp = ɵɵdefineComponent({ type: ProTabAddButtonComponent, selectors: [["pro-tab-add-button"], ["button", "pro-tab-add-button", ""]], hostAttrs: ["aria-label", "Add tab", "type", "button", 1, "ant-pro-tabs-nav-add"], inputs: { addIcon: "addIcon" }, decls: 3, vars: 3, consts: [[3, "ngSwitch"], [3, "ngTemplateOutlet", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [3, "ngTemplateOutlet"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"]], template: function ProTabAddButtonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementContainerStart(0, 0);
        ɵɵtemplate(1, ProTabAddButtonComponent_ng_container_1_Template, 1, 1, "ng-container", 1);
        ɵɵtemplate(2, ProTabAddButtonComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
        ɵɵelementContainerEnd();
    } if (rf & 2) {
        ɵɵproperty("ngSwitch", true);
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", ctx.isTemplateRef(ctx.addIcon));
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", ctx.isNonEmptyString(ctx.addIcon));
    } }, directives: [NgSwitch, NgSwitchCase, NgTemplateOutlet, NzIconDirective], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ProTabAddButtonComponent, [{
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
    }], function () { return [{ type: ElementRef }]; }, { addIcon: [{
            type: Input
        }] }); })();

class ProTabNavItemDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.disabled = false;
        this.active = false;
        this.el = elementRef.nativeElement;
        this.parentElement = this.el.parentElement;
    }
    focus() {
        this.el.focus();
    }
    get width() {
        return this.parentElement.offsetWidth;
    }
    get height() {
        return this.parentElement.offsetHeight;
    }
    get left() {
        return this.parentElement.offsetLeft;
    }
    get top() {
        return this.parentElement.offsetTop;
    }
}
ProTabNavItemDirective.ɵfac = function ProTabNavItemDirective_Factory(t) { return new (t || ProTabNavItemDirective)(ɵɵdirectiveInject(ElementRef)); };
ProTabNavItemDirective.ɵdir = ɵɵdefineDirective({ type: ProTabNavItemDirective, selectors: [["", "ProTabNavItem", ""]], inputs: { disabled: "disabled", tab: "tab", active: "active" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ProTabNavItemDirective, [{
        type: Directive,
        args: [{
                selector: '[ProTabNavItem]'
            }]
    }], function () { return [{ type: ElementRef }]; }, { disabled: [{
            type: Input
        }], tab: [{
            type: Input
        }], active: [{
            type: Input
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function ProTabNavOperationComponent_ul_5_li_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0, 12);
} if (rf & 2) {
    const item_r5 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngTemplateOutlet", item_r5.tab.label);
} }
function ProTabNavOperationComponent_ul_5_li_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r5 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(item_r5.tab.label);
} }
function ProTabNavOperationComponent_ul_5_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 8);
    ɵɵlistener("click", function ProTabNavOperationComponent_ul_5_li_1_Template_li_click_0_listener() { ɵɵrestoreView(_r11); const item_r5 = ctx.$implicit; const ctx_r10 = ɵɵnextContext(2); return ctx_r10.onSelect(item_r5); })("contextmenu", function ProTabNavOperationComponent_ul_5_li_1_Template_li_contextmenu_0_listener($event) { ɵɵrestoreView(_r11); const item_r5 = ctx.$implicit; const ctx_r12 = ɵɵnextContext(2); return ctx_r12.onContextmenu(item_r5, $event); });
    ɵɵelementContainerStart(1, 9);
    ɵɵtemplate(2, ProTabNavOperationComponent_ul_5_li_1_ng_container_2_Template, 1, 1, "ng-container", 10);
    ɵɵtemplate(3, ProTabNavOperationComponent_ul_5_li_1_ng_container_3_Template, 2, 1, "ng-container", 11);
    ɵɵelementContainerEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵclassProp("ant-pro-tabs-dropdown-menu-item-disabled", item_r5.disabled);
    ɵɵproperty("nzSelected", item_r5.active)("nzDisabled", item_r5.disabled);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitch", true);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", ctx_r4.isTemplateRef(item_r5.tab.label));
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", ctx_r4.isNonEmptyString(item_r5.tab.label));
} }
function ProTabNavOperationComponent_ul_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "ul", 6);
    ɵɵtemplate(1, ProTabNavOperationComponent_ul_5_li_1_Template, 4, 7, "li", 7);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r2.items);
} }
function ProTabNavOperationComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r14 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 13);
    ɵɵlistener("click", function ProTabNavOperationComponent_button_6_Template_button_click_0_listener() { ɵɵrestoreView(_r14); const ctx_r13 = ɵɵnextContext(); return ctx_r13.addClicked.emit(); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("addIcon", ctx_r3.addIcon);
} }
const _c0$7 = function () { return { minWidth: "46px" }; };
class ProTabNavOperationComponent {
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
ProTabNavOperationComponent.ɵfac = function ProTabNavOperationComponent_Factory(t) { return new (t || ProTabNavOperationComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef)); };
ProTabNavOperationComponent.ɵcmp = ɵɵdefineComponent({ type: ProTabNavOperationComponent, selectors: [["pro-tab-nav-operation"]], hostAttrs: [1, "ant-pro-tabs-nav-operations"], hostVars: 2, hostBindings: function ProTabNavOperationComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵclassProp("ant-pro-tabs-nav-operations-hidden", ctx.items.length === 0);
    } }, inputs: { items: "items", addable: "addable", addIcon: "addIcon" }, outputs: { addClicked: "addClicked", selected: "selected" }, exportAs: ["ProTabNavOperation"], decls: 7, vars: 6, consts: [["nz-dropdown", "", "type", "button", "tabindex", "-1", "aria-hidden", "true", "nzOverlayClassName", "pro-tabs-dropdown", 1, "ant-pro-tabs-nav-more", 3, "nzDropdownMenu", "nzOverlayStyle", "nzMatchWidthElement", "nzVisibleChange", "mouseenter"], ["dropdownTrigger", "nzDropdown"], ["nz-icon", "", "nzType", "ellipsis"], ["menu", "nzDropdownMenu"], ["nz-menu", "", 4, "ngIf"], ["pro-tab-add-button", "", 3, "addIcon", "click", 4, "ngIf"], ["nz-menu", ""], ["nz-menu-item", "", "class", "ant-pro-tabs-dropdown-menu-item", 3, "ant-pro-tabs-dropdown-menu-item-disabled", "nzSelected", "nzDisabled", "click", "contextmenu", 4, "ngFor", "ngForOf"], ["nz-menu-item", "", 1, "ant-pro-tabs-dropdown-menu-item", 3, "nzSelected", "nzDisabled", "click", "contextmenu"], [3, "ngSwitch"], [3, "ngTemplateOutlet", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [3, "ngTemplateOutlet"], ["pro-tab-add-button", "", 3, "addIcon", "click"]], template: function ProTabNavOperationComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "button", 0, 1);
        ɵɵlistener("nzVisibleChange", function ProTabNavOperationComponent_Template_button_nzVisibleChange_0_listener($event) { return ctx.menuVisChange($event); })("mouseenter", function ProTabNavOperationComponent_Template_button_mouseenter_0_listener() { return ctx.showItems(); });
        ɵɵelement(2, "i", 2);
        ɵɵelementEnd();
        ɵɵelementStart(3, "nz-dropdown-menu", null, 3);
        ɵɵtemplate(5, ProTabNavOperationComponent_ul_5_Template, 2, 1, "ul", 4);
        ɵɵelementEnd();
        ɵɵtemplate(6, ProTabNavOperationComponent_button_6_Template, 1, 1, "button", 5);
    } if (rf & 2) {
        const _r1 = ɵɵreference(4);
        ɵɵproperty("nzDropdownMenu", _r1)("nzOverlayStyle", ɵɵpureFunction0(5, _c0$7))("nzMatchWidthElement", null);
        ɵɵadvance(5);
        ɵɵproperty("ngIf", ctx.menuOpened);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.addable);
    } }, directives: [NzDropDownDirective, NzIconDirective, NzDropdownMenuComponent, NgIf, NzMenuDirective, NgForOf, NzMenuItemDirective, NgSwitch, NgSwitchCase, NgTemplateOutlet, ProTabAddButtonComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ProTabNavOperationComponent, [{
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
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }]; }, { items: [{
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

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class ProTabsInkBarDirective {
    constructor(elementRef, ngZone, animationMode) {
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.animationMode = animationMode;
        this.position = 'horizontal';
        this.animated = true;
    }
    get _animated() {
        return this.animationMode !== 'NoopAnimations' && this.animated;
    }
    alignToElement(element) {
        this.ngZone.runOutsideAngular(() => {
            reqAnimFrame(() => this.setStyles(element));
        });
    }
    setStyles(element) {
        const inkBar = this.elementRef.nativeElement;
        if (this.position === 'horizontal') {
            inkBar.style.top = '';
            inkBar.style.height = '';
            inkBar.style.left = this.getLeftPosition(element);
            inkBar.style.width = this.getElementWidth(element);
        }
        else {
            inkBar.style.left = '';
            inkBar.style.width = '';
            inkBar.style.top = this.getTopPosition(element);
            inkBar.style.height = this.getElementHeight(element);
        }
    }
    getLeftPosition(element) {
        return element ? (element.offsetLeft || 0) + 'px' : '0';
    }
    getElementWidth(element) {
        return element ? (element.offsetWidth || 0) + 'px' : '0';
    }
    getTopPosition(element) {
        return element ? (element.offsetTop || 0) + 'px' : '0';
    }
    getElementHeight(element) {
        return element ? (element.offsetHeight || 0) + 'px' : '0';
    }
}
ProTabsInkBarDirective.ɵfac = function ProTabsInkBarDirective_Factory(t) { return new (t || ProTabsInkBarDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8)); };
ProTabsInkBarDirective.ɵdir = ɵɵdefineDirective({ type: ProTabsInkBarDirective, selectors: [["pro-tabs-ink-bar"], ["", "pro-tabs-ink-bar", ""]], hostAttrs: [1, "ant-pro-tabs-ink-bar"], hostVars: 2, hostBindings: function ProTabsInkBarDirective_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵclassProp("ant-pro-tabs-ink-bar-animated", ctx._animated);
    } }, inputs: { position: "position", animated: "animated" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ProTabsInkBarDirective, [{
        type: Directive,
        args: [{
                selector: 'pro-tabs-ink-bar, [pro-tabs-ink-bar]',
                host: {
                    class: 'ant-pro-tabs-ink-bar',
                    '[class.ant-pro-tabs-ink-bar-animated]': '_animated'
                }
            }]
    }], function () { return [{ type: ElementRef }, { type: NgZone }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [ANIMATION_MODULE_TYPE]
            }] }]; }, { position: [{
            type: Input
        }], animated: [{
            type: Input
        }] }); })();

/**
 * Factory that creates a new ResizeObserver and allows us to stub it out in unit tests.
 */
class NzResizeObserverFactory {
    create(callback) {
        return typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(callback);
    }
}
NzResizeObserverFactory.ɵfac = function NzResizeObserverFactory_Factory(t) { return new (t || NzResizeObserverFactory)(); };
NzResizeObserverFactory.ɵprov = ɵɵdefineInjectable({ token: NzResizeObserverFactory, factory: NzResizeObserverFactory.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(NzResizeObserverFactory, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
/** An injectable service that allows watching elements for changes to their content. */
class NzResizeObserver {
    constructor(nzResizeObserverFactory) {
        this.nzResizeObserverFactory = nzResizeObserverFactory;
        /** Keeps track of the existing ResizeObservers so they can be reused. */
        this.observedElements = new Map();
    }
    ngOnDestroy() {
        this.observedElements.forEach((_, element) => this.cleanupObserver(element));
    }
    observe(elementOrRef) {
        const element = coerceElement(elementOrRef);
        return new Observable((observer) => {
            const stream = this.observeElement(element);
            const subscription = stream.subscribe(observer);
            return () => {
                subscription.unsubscribe();
                this.unobserveElement(element);
            };
        });
    }
    /**
     * Observes the given element by using the existing ResizeObserver if available, or creating a
     * new one if not.
     */
    observeElement(element) {
        if (!this.observedElements.has(element)) {
            const stream = new Subject();
            const observer = this.nzResizeObserverFactory.create(mutations => stream.next(mutations));
            if (observer) {
                observer.observe(element);
            }
            this.observedElements.set(element, { observer, stream, count: 1 });
        }
        else {
            this.observedElements.get(element).count++;
        }
        return this.observedElements.get(element).stream;
    }
    /**
     * Un-observes the given element and cleans up the underlying ResizeObserver if nobody else is
     * observing this element.
     */
    unobserveElement(element) {
        if (this.observedElements.has(element)) {
            this.observedElements.get(element).count--;
            if (!this.observedElements.get(element).count) {
                this.cleanupObserver(element);
            }
        }
    }
    /** Clean up the underlying ResizeObserver for the specified element. */
    cleanupObserver(element) {
        if (this.observedElements.has(element)) {
            const { observer, stream } = this.observedElements.get(element);
            if (observer) {
                observer.disconnect();
            }
            stream.complete();
            this.observedElements.delete(element);
        }
    }
}
NzResizeObserver.ɵfac = function NzResizeObserver_Factory(t) { return new (t || NzResizeObserver)(ɵɵinject(NzResizeObserverFactory)); };
NzResizeObserver.ɵprov = ɵɵdefineInjectable({ token: NzResizeObserver, factory: NzResizeObserver.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(NzResizeObserver, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: NzResizeObserverFactory }]; }, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const MIN_SWIPE_DISTANCE = 0.1;
const STOP_SWIPE_DISTANCE = 0.01;
const REFRESH_INTERVAL = 20;
const SPEED_OFF_MULTIPLE = Math.pow(0.995, REFRESH_INTERVAL);
class ProTabScrollListDirective {
    constructor(ngZone, elementRef) {
        this.ngZone = ngZone;
        this.elementRef = elementRef;
        this.lastWheelDirection = null;
        this.lastWheelTimestamp = 0;
        this.lastTimestamp = 0;
        this.lastTimeDiff = 0;
        this.lastMixedWheel = 0;
        this.lastWheelPrevent = false;
        this.touchPosition = null;
        this.lastOffset = null;
        this.motion = -1;
        this.unsubscribe = () => void 0;
        this.offsetChange = new EventEmitter();
        this.tabScroll = new EventEmitter();
        this.onTouchEnd = (e) => {
            if (!this.touchPosition) {
                return;
            }
            const lastOffset = this.lastOffset;
            const lastTimeDiff = this.lastTimeDiff;
            this.lastOffset = this.touchPosition = null;
            if (lastOffset) {
                const distanceX = lastOffset.x / lastTimeDiff;
                const distanceY = lastOffset.y / lastTimeDiff;
                const absX = Math.abs(distanceX);
                const absY = Math.abs(distanceY);
                // Skip swipe if low distance
                if (Math.max(absX, absY) < MIN_SWIPE_DISTANCE) {
                    return;
                }
                let currentX = distanceX;
                let currentY = distanceY;
                this.motion = window.setInterval(() => {
                    if (Math.abs(currentX) < STOP_SWIPE_DISTANCE && Math.abs(currentY) < STOP_SWIPE_DISTANCE) {
                        window.clearInterval(this.motion);
                        return;
                    }
                    currentX *= SPEED_OFF_MULTIPLE;
                    currentY *= SPEED_OFF_MULTIPLE;
                    this.onOffset(currentX * REFRESH_INTERVAL, currentY * REFRESH_INTERVAL, e);
                }, REFRESH_INTERVAL);
            }
        };
        this.onTouchMove = (e) => {
            if (!this.touchPosition) {
                return;
            }
            e.preventDefault();
            const { screenX, screenY } = e.touches[0];
            const offsetX = screenX - this.touchPosition.x;
            const offsetY = screenY - this.touchPosition.y;
            this.onOffset(offsetX, offsetY, e);
            const now = Date.now();
            this.lastTimeDiff = now - this.lastTimestamp;
            this.lastTimestamp = now;
            this.lastOffset = { x: offsetX, y: offsetY };
            this.touchPosition = { x: screenX, y: screenY };
        };
        this.onTouchStart = (e) => {
            const { screenX, screenY } = e.touches[0];
            this.touchPosition = { x: screenX, y: screenY };
            window.clearInterval(this.motion);
        };
        this.onWheel = (e) => {
            const { deltaX, deltaY } = e;
            let mixed;
            const absX = Math.abs(deltaX);
            const absY = Math.abs(deltaY);
            if (absX === absY) {
                mixed = this.lastWheelDirection === 'x' ? deltaX : deltaY;
            }
            else if (absX > absY) {
                mixed = deltaX;
                this.lastWheelDirection = 'x';
            }
            else {
                mixed = deltaY;
                this.lastWheelDirection = 'y';
            }
            // Optimize mac touch scroll
            const now = Date.now();
            const absMixed = Math.abs(mixed);
            if (now - this.lastWheelTimestamp > 100 || absMixed - this.lastMixedWheel > 10) {
                this.lastWheelPrevent = false;
            }
            this.onOffset(-mixed, -mixed, e);
            if (e.defaultPrevented || this.lastWheelPrevent) {
                this.lastWheelPrevent = true;
            }
            this.lastWheelTimestamp = now;
            this.lastMixedWheel = absMixed;
        };
    }
    ngOnInit() {
        this.unsubscribe = this.ngZone.runOutsideAngular(() => {
            const el = this.elementRef.nativeElement;
            const wheel$ = fromEvent(el, 'wheel');
            const touchstart$ = fromEvent(el, 'touchstart');
            const touchmove$ = fromEvent(el, 'touchmove');
            const touchend$ = fromEvent(el, 'touchend');
            const subscription = new Subscription();
            subscription.add(this.subscribeWrap('wheel', wheel$, this.onWheel));
            subscription.add(this.subscribeWrap('touchstart', touchstart$, this.onTouchStart));
            subscription.add(this.subscribeWrap('touchmove', touchmove$, this.onTouchMove));
            subscription.add(this.subscribeWrap('touchend', touchend$, this.onTouchEnd));
            return () => {
                subscription.unsubscribe();
            };
        });
    }
    subscribeWrap(type, observable, handler) {
        return observable.subscribe(event => {
            this.tabScroll.emit({
                type,
                event
            });
            if (!event.defaultPrevented) {
                handler(event);
            }
        });
    }
    onOffset(x, y, event) {
        this.ngZone.run(() => {
            this.offsetChange.emit({
                x,
                y,
                event
            });
        });
    }
    ngOnDestroy() {
        this.unsubscribe();
    }
}
ProTabScrollListDirective.ɵfac = function ProTabScrollListDirective_Factory(t) { return new (t || ProTabScrollListDirective)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef)); };
ProTabScrollListDirective.ɵdir = ɵɵdefineDirective({ type: ProTabScrollListDirective, selectors: [["", "ProTabScrollList", ""]], outputs: { offsetChange: "offsetChange", tabScroll: "tabScroll" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ProTabScrollListDirective, [{
        type: Directive,
        args: [{
                selector: '[ProTabScrollList]'
            }]
    }], function () { return [{ type: NgZone }, { type: ElementRef }]; }, { offsetChange: [{
            type: Output
        }], tabScroll: [{
            type: Output
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const _c0$6 = ["navWarp"];
const _c1$4 = ["navList"];
function ProTabNavBarComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 8);
    ɵɵlistener("click", function ProTabNavBarComponent_button_5_Template_button_click_0_listener() { ɵɵrestoreView(_r5); const ctx_r4 = ɵɵnextContext(); return ctx_r4.addClicked.emit(); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("addIcon", ctx_r2.addIcon);
} }
function ProTabNavBarComponent_div_8_1_ng_template_0_Template(rf, ctx) { }
function ProTabNavBarComponent_div_8_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, ProTabNavBarComponent_div_8_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function ProTabNavBarComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵtemplate(1, ProTabNavBarComponent_div_8_1_Template, 1, 0, undefined, 10);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r3.extraTemplate);
} }
const _c2$3 = ["*"];
const RESIZE_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? animationFrameScheduler : asapScheduler;
const CSS_TRANSFORM_TIME = 150;
class ProTabNavBarComponent {
    constructor(cdr, ngZone, viewportRuler, nzResizeObserver, dir) {
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.viewportRuler = viewportRuler;
        this.nzResizeObserver = nzResizeObserver;
        this.dir = dir;
        this.indexFocused = new EventEmitter();
        this.selectFocusedIndex = new EventEmitter();
        this.addClicked = new EventEmitter();
        this.tabScroll = new EventEmitter();
        this.position = 'horizontal';
        this.addable = false;
        this.hideBar = false;
        this.addIcon = 'plus';
        this.inkBarAnimated = true;
        this.translate = null;
        this.transformX = 0;
        this.transformY = 0;
        this.pingLeft = false;
        this.pingRight = false;
        this.pingTop = false;
        this.pingBottom = false;
        this.hiddenItems = [];
        this.destroy$ = new Subject();
        this._selectedIndex = 0;
        this.wrapperWidth = 0;
        this.wrapperHeight = 0;
        this.scrollListWidth = 0;
        this.scrollListHeight = 0;
        this.operationWidth = 0;
        this.operationHeight = 0;
        this.addButtonWidth = 0;
        this.addButtonHeight = 0;
        this.selectedIndexChanged = false;
        this.lockAnimationTimeoutId = -1;
        this.cssTransformTimeWaitingId = -1;
    }
    get selectedIndex() {
        return this._selectedIndex;
    }
    set selectedIndex(value) {
        const newValue = coerceNumberProperty(value);
        if (this._selectedIndex !== newValue) {
            this._selectedIndex = value;
            this.selectedIndexChanged = true;
            if (this.keyManager) {
                this.keyManager.updateActiveItem(value);
            }
        }
    }
    /** Tracks which element has focus; used for keyboard navigation */
    get focusIndex() {
        return this.keyManager ? this.keyManager.activeItemIndex : 0;
    }
    /** When the focus index is set, we must manually send focus to the correct label */
    set focusIndex(value) {
        if (!this.isValidIndex(value) || this.focusIndex === value || !this.keyManager) {
            return;
        }
        this.keyManager.setActiveItem(value);
    }
    get showAddButton() {
        return this.hiddenItems.length === 0 && this.addable;
    }
    ngOnInit() { }
    ngAfterViewInit() {
        const dirChange = this.dir ? this.dir.change : of(null);
        const resize = this.viewportRuler.change(150);
        const realign = () => {
            this.updateScrollListPosition();
            this.alignInkBarToSelectedTab();
        };
        this.keyManager = new FocusKeyManager(this.items)
            .withHorizontalOrientation(this.getLayoutDirection())
            .withWrap();
        this.keyManager.updateActiveItem(0);
        reqAnimFrame(realign);
        merge(this.nzResizeObserver.observe(this.navWarpRef), this.nzResizeObserver.observe(this.navListRef))
            .pipe(takeUntil(this.destroy$), auditTime(16, RESIZE_SCHEDULER))
            .subscribe(() => {
            realign();
        });
        merge(dirChange, resize, this.items.changes)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            Promise.resolve().then(realign);
            this.keyManager.withHorizontalOrientation(this.getLayoutDirection());
        });
        this.keyManager.change.pipe(takeUntil(this.destroy$)).subscribe(newFocusIndex => {
            this.indexFocused.emit(newFocusIndex);
            this.setTabFocus(newFocusIndex);
            this.scrollToTab(this.keyManager.activeItem);
        });
    }
    ngAfterContentChecked() {
        if (this.selectedIndexChanged) {
            this.updateScrollListPosition();
            this.alignInkBarToSelectedTab();
            this.selectedIndexChanged = false;
            this.cdr.markForCheck();
        }
    }
    ngOnDestroy() {
        clearTimeout(this.lockAnimationTimeoutId);
        clearTimeout(this.cssTransformTimeWaitingId);
        this.destroy$.next();
        this.destroy$.complete();
    }
    onSelectedFromMenu(tab) {
        const tabIndex = this.items.toArray().findIndex(e => e === tab);
        if (tabIndex !== -1) {
            this.keyManager.updateActiveItem(tabIndex);
            if (this.focusIndex !== this.selectedIndex) {
                this.selectFocusedIndex.emit(this.focusIndex);
                this.scrollToTab(tab);
            }
        }
    }
    onOffsetChange(e) {
        if (this.position === 'horizontal') {
            if (this.lockAnimationTimeoutId === -1) {
                if (this.transformX >= 0 && e.x > 0) {
                    return;
                }
                if (this.transformX <= this.wrapperWidth - this.scrollListWidth && e.x < 0) {
                    return;
                }
            }
            e.event.preventDefault();
            this.transformX = this.clampTransformX(this.transformX + e.x);
            this.setTransform(this.transformX, 0);
        }
        else {
            if (this.lockAnimationTimeoutId === -1) {
                if (this.transformY >= 0 && e.y > 0) {
                    return;
                }
                if (this.transformY <= this.wrapperHeight - this.scrollListHeight && e.y < 0) {
                    return;
                }
            }
            e.event.preventDefault();
            this.transformY = this.clampTransformY(this.transformY + e.y);
            this.setTransform(0, this.transformY);
        }
        this.lockAnimation();
        this.setVisibleRange();
        this.setPingStatus();
    }
    handleKeydown(event) {
        if (hasModifierKey(event)) {
            return;
        }
        switch (event.keyCode) {
            case LEFT_ARROW:
            case UP_ARROW:
            case RIGHT_ARROW:
            case DOWN_ARROW:
                this.lockAnimation();
                this.keyManager.onKeydown(event);
                break;
            case ENTER:
            case SPACE:
                if (this.focusIndex !== this.selectedIndex) {
                    this.selectFocusedIndex.emit(this.focusIndex);
                }
                break;
            default:
                this.keyManager.onKeydown(event);
        }
    }
    isValidIndex(index) {
        if (!this.items) {
            return true;
        }
        const tab = this.items ? this.items.toArray()[index] : null;
        return !!tab && !tab.disabled;
    }
    scrollToTab(tab) {
        if (!this.items.find(e => e === tab)) {
            return;
        }
        const tabs = this.items.toArray();
        if (this.position === 'horizontal') {
            let newTransform = this.transformX;
            if (this.getLayoutDirection() === 'rtl') {
                const right = tabs[0].left + tabs[0].width - tab.left - tab.width;
                if (right < this.transformX) {
                    newTransform = right;
                }
                else if (right + tab.width > this.transformX + this.wrapperWidth) {
                    newTransform = right + tab.width - this.wrapperWidth;
                }
            }
            else if (tab.left < -this.transformX) {
                newTransform = -tab.left;
            }
            else if (tab.left + tab.width > -this.transformX + this.wrapperWidth) {
                newTransform = -(tab.left + tab.width - this.wrapperWidth);
            }
            this.transformX = newTransform;
            this.transformY = 0;
            this.setTransform(newTransform, 0);
        }
        else {
            let newTransform = this.transformY;
            if (tab.top < -this.transformY) {
                newTransform = -tab.top;
            }
            else if (tab.top + tab.height > -this.transformY + this.wrapperHeight) {
                newTransform = -(tab.top + tab.height - this.wrapperHeight);
            }
            this.transformY = newTransform;
            this.transformX = 0;
            this.setTransform(0, newTransform);
        }
        clearTimeout(this.cssTransformTimeWaitingId);
        this.cssTransformTimeWaitingId = setTimeout(() => {
            this.setVisibleRange();
        }, CSS_TRANSFORM_TIME);
    }
    lockAnimation() {
        if (this.lockAnimationTimeoutId === -1) {
            this.ngZone.runOutsideAngular(() => {
                this.navListRef.nativeElement.style.transition = 'none';
                this.lockAnimationTimeoutId = setTimeout(() => {
                    this.navListRef.nativeElement.style.transition = '';
                    this.lockAnimationTimeoutId = -1;
                }, CSS_TRANSFORM_TIME);
            });
        }
    }
    setTransform(x, y) {
        this.navListRef.nativeElement.style.transform = `translate(${x}px, ${y}px)`;
    }
    clampTransformX(transform) {
        const scrollWidth = this.wrapperWidth - this.scrollListWidth;
        if (this.getLayoutDirection() === 'rtl') {
            return Math.max(Math.min(scrollWidth, transform), 0);
        }
        else {
            return Math.min(Math.max(scrollWidth, transform), 0);
        }
    }
    clampTransformY(transform) {
        return Math.min(Math.max(this.wrapperHeight - this.scrollListHeight, transform), 0);
    }
    updateScrollListPosition() {
        this.resetSizes();
        this.transformX = this.clampTransformX(this.transformX);
        this.transformY = this.clampTransformY(this.transformY);
        this.setVisibleRange();
        this.setPingStatus();
        if (this.keyManager) {
            this.keyManager.updateActiveItem(this.keyManager.activeItemIndex);
            if (this.keyManager.activeItem) {
                this.scrollToTab(this.keyManager.activeItem);
            }
        }
    }
    resetSizes() {
        this.addButtonWidth = this.addBtnRef ? this.addBtnRef.getElementWidth() : 0;
        this.addButtonHeight = this.addBtnRef ? this.addBtnRef.getElementHeight() : 0;
        this.operationWidth = this.operationRef.getElementWidth();
        this.operationHeight = this.operationRef.getElementHeight();
        this.wrapperWidth = this.navWarpRef.nativeElement.offsetWidth || 0;
        this.wrapperHeight = this.navWarpRef.nativeElement.offsetHeight || 0;
        this.scrollListHeight = this.navListRef.nativeElement.offsetHeight || 0;
        this.scrollListWidth = this.navListRef.nativeElement.offsetWidth || 0;
    }
    alignInkBarToSelectedTab() {
        const selectedItem = this.items && this.items.length ? this.items.toArray()[this.selectedIndex] : null;
        const selectedItemElement = selectedItem ? selectedItem.elementRef.nativeElement : null;
        if (selectedItemElement) {
            /**
             * .ant-pro-tabs-nav-list - Target offset parent element
             *   └──.ant-pro-tabs-tab
             *        └──.ant-pro-tabs-tab-btn - Currently focused element
             */
            this.inkBar.alignToElement(selectedItemElement.parentElement);
        }
    }
    setPingStatus() {
        const ping = {
            top: false,
            right: false,
            bottom: false,
            left: false
        };
        const navWarp = this.navWarpRef.nativeElement;
        if (this.position === 'horizontal') {
            if (this.getLayoutDirection() === 'rtl') {
                ping.right = this.transformX > 0;
                ping.left = this.transformX + this.wrapperWidth < this.scrollListWidth;
            }
            else {
                ping.left = this.transformX < 0;
                ping.right = -this.transformX + this.wrapperWidth < this.scrollListWidth;
            }
        }
        else {
            ping.top = this.transformY < 0;
            ping.bottom = -this.transformY + this.wrapperHeight < this.scrollListHeight;
        }
        Object.keys(ping).forEach(pos => {
            const className = `ant-pro-tabs-nav-wrap-ping-${pos}`;
            if (ping[pos]) {
                navWarp.classList.add(className);
            }
            else {
                navWarp.classList.remove(className);
            }
        });
    }
    setVisibleRange() {
        let unit;
        let position;
        let transformSize;
        let basicSize;
        let tabContentSize;
        let addSize;
        const tabs = this.items.toArray();
        const DEFAULT_SIZE = { width: 0, height: 0, left: 0, top: 0, right: 0 };
        const getOffset = (index) => {
            let offset;
            const size = tabs[index] || DEFAULT_SIZE;
            if (position === 'right') {
                offset = tabs[0].left + tabs[0].width - tabs[index].left - tabs[index].width;
            }
            else {
                offset = size[position];
            }
            return offset;
        };
        if (this.position === 'horizontal') {
            unit = 'width';
            basicSize = this.wrapperWidth;
            tabContentSize = this.scrollListWidth - (this.hiddenItems.length ? this.operationWidth : 0);
            addSize = this.addButtonWidth;
            transformSize = Math.abs(this.transformX);
            if (this.getLayoutDirection() === 'rtl') {
                position = 'right';
                this.pingRight = this.transformX > 0;
                this.pingLeft = this.transformX + this.wrapperWidth < this.scrollListWidth;
            }
            else {
                this.pingLeft = this.transformX < 0;
                this.pingRight = -this.transformX + this.wrapperWidth < this.scrollListWidth;
                position = 'left';
            }
        }
        else {
            unit = 'height';
            basicSize = this.wrapperHeight;
            tabContentSize = this.scrollListHeight - (this.hiddenItems.length ? this.operationHeight : 0);
            addSize = this.addButtonHeight;
            position = 'top';
            transformSize = -this.transformY;
            this.pingTop = this.transformY < 0;
            this.pingBottom = -this.transformY + this.wrapperHeight < this.scrollListHeight;
        }
        let mergedBasicSize = basicSize;
        if (tabContentSize + addSize > basicSize) {
            mergedBasicSize = basicSize - addSize;
        }
        if (!tabs.length) {
            this.hiddenItems = [];
            this.cdr.markForCheck();
            return;
        }
        const len = tabs.length;
        let endIndex = len;
        for (let i = 0; i < len; i += 1) {
            const offset = getOffset(i);
            const size = tabs[i] || DEFAULT_SIZE;
            if (offset + size[unit] > transformSize + mergedBasicSize) {
                endIndex = i - 1;
                break;
            }
        }
        let startIndex = 0;
        for (let i = len - 1; i >= 0; i -= 1) {
            const offset = getOffset(i);
            if (offset < transformSize) {
                startIndex = i + 1;
                break;
            }
        }
        const startHiddenTabs = tabs.slice(0, startIndex);
        const endHiddenTabs = tabs.slice(endIndex + 1);
        this.hiddenItems = [...startHiddenTabs, ...endHiddenTabs];
        this.cdr.markForCheck();
    }
    getLayoutDirection() {
        return this.dir && this.dir.value === 'rtl' ? 'rtl' : 'ltr';
    }
    setTabFocus(_tabIndex) { }
    ngOnChanges(changes) {
        const { position } = changes;
        // The first will be aligning in ngAfterViewInit
        if (position && !position.isFirstChange()) {
            this.alignInkBarToSelectedTab();
            this.lockAnimation();
            this.updateScrollListPosition();
        }
    }
}
ProTabNavBarComponent.ɵfac = function ProTabNavBarComponent_Factory(t) { return new (t || ProTabNavBarComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ViewportRuler), ɵɵdirectiveInject(NzResizeObserver), ɵɵdirectiveInject(Directionality, 8)); };
ProTabNavBarComponent.ɵcmp = ɵɵdefineComponent({ type: ProTabNavBarComponent, selectors: [["pro-tabs-nav"]], contentQueries: function ProTabNavBarComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵɵcontentQuery(dirIndex, ProTabNavItemDirective, 1);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.items = _t);
    } }, viewQuery: function ProTabNavBarComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$6, 3);
        ɵɵviewQuery(_c1$4, 3);
        ɵɵviewQuery(ProTabNavOperationComponent, 3);
        ɵɵviewQuery(ProTabAddButtonComponent, 1);
        ɵɵviewQuery(ProTabsInkBarDirective, 3);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.navWarpRef = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.navListRef = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.operationRef = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.addBtnRef = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inkBar = _t.first);
    } }, hostAttrs: ["role", "tablist", 1, "ant-pro-tabs-nav"], hostBindings: function ProTabNavBarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("keydown", function ProTabNavBarComponent_keydown_HostBindingHandler($event) { return ctx.handleKeydown($event); });
    } }, inputs: { position: "position", addable: "addable", hideBar: "hideBar", addIcon: "addIcon", inkBarAnimated: "inkBarAnimated", extraTemplate: "extraTemplate", selectedIndex: "selectedIndex" }, outputs: { indexFocused: "indexFocused", selectFocusedIndex: "selectFocusedIndex", addClicked: "addClicked", tabScroll: "tabScroll" }, exportAs: ["ProTabsNav"], features: [ɵɵNgOnChangesFeature], ngContentSelectors: _c2$3, decls: 9, vars: 16, consts: [[1, "ant-pro-tabs-nav-wrap"], ["navWarp", ""], ["ProTabScrollList", "", 1, "ant-pro-tabs-nav-list", 3, "offsetChange", "tabScroll"], ["navList", ""], ["pro-tab-add-button", "", 3, "addIcon", "click", 4, "ngIf"], ["pro-tabs-ink-bar", "", 3, "hidden", "position", "animated"], [3, "addIcon", "addable", "items", "addClicked", "selected"], ["class", "ant-pro-tabs-extra-content", 4, "ngIf"], ["pro-tab-add-button", "", 3, "addIcon", "click"], [1, "ant-pro-tabs-extra-content"], [4, "ngTemplateOutlet"]], template: function ProTabNavBarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 0, 1);
        ɵɵelementStart(2, "div", 2, 3);
        ɵɵlistener("offsetChange", function ProTabNavBarComponent_Template_div_offsetChange_2_listener($event) { return ctx.onOffsetChange($event); })("tabScroll", function ProTabNavBarComponent_Template_div_tabScroll_2_listener($event) { return ctx.tabScroll.emit($event); });
        ɵɵprojection(4);
        ɵɵtemplate(5, ProTabNavBarComponent_button_5_Template, 1, 1, "button", 4);
        ɵɵelement(6, "div", 5);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(7, "pro-tab-nav-operation", 6);
        ɵɵlistener("addClicked", function ProTabNavBarComponent_Template_pro_tab_nav_operation_addClicked_7_listener() { return ctx.addClicked.emit(); })("selected", function ProTabNavBarComponent_Template_pro_tab_nav_operation_selected_7_listener($event) { return ctx.onSelectedFromMenu($event); });
        ɵɵelementEnd();
        ɵɵtemplate(8, ProTabNavBarComponent_div_8_Template, 2, 1, "div", 7);
    } if (rf & 2) {
        ɵɵclassProp("ant-pro-tabs-nav-wrap-ping-left", ctx.pingLeft)("ant-pro-tabs-nav-wrap-ping-right", ctx.pingRight)("ant-pro-tabs-nav-wrap-ping-top", ctx.pingTop)("ant-pro-tabs-nav-wrap-ping-bottom", ctx.pingBottom);
        ɵɵadvance(5);
        ɵɵproperty("ngIf", ctx.showAddButton);
        ɵɵadvance(1);
        ɵɵproperty("hidden", ctx.hideBar)("position", ctx.position)("animated", ctx.inkBarAnimated);
        ɵɵadvance(1);
        ɵɵproperty("addIcon", ctx.addIcon)("addable", ctx.addable)("items", ctx.hiddenItems);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.extraTemplate);
    } }, directives: [ProTabScrollListDirective, NgIf, ProTabsInkBarDirective, ProTabNavOperationComponent, ProTabAddButtonComponent, NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ProTabNavBarComponent, [{
        type: Component,
        args: [{
                selector: 'pro-tabs-nav',
                exportAs: 'ProTabsNav',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: `
    <div
      class="ant-pro-tabs-nav-wrap"
      [class.ant-pro-tabs-nav-wrap-ping-left]="pingLeft"
      [class.ant-pro-tabs-nav-wrap-ping-right]="pingRight"
      [class.ant-pro-tabs-nav-wrap-ping-top]="pingTop"
      [class.ant-pro-tabs-nav-wrap-ping-bottom]="pingBottom"
      #navWarp
    >
      <div class="ant-pro-tabs-nav-list" #navList ProTabScrollList (offsetChange)="onOffsetChange($event)" (tabScroll)="tabScroll.emit($event)">
        <ng-content></ng-content>
        <button *ngIf="showAddButton" pro-tab-add-button [addIcon]="addIcon" (click)="addClicked.emit()"></button>
        <div pro-tabs-ink-bar [hidden]="hideBar" [position]="position" [animated]="inkBarAnimated"></div>
      </div>
    </div>
    <pro-tab-nav-operation
      (addClicked)="addClicked.emit()"
      (selected)="onSelectedFromMenu($event)"
      [addIcon]="addIcon"
      [addable]="addable"
      [items]="hiddenItems"
    ></pro-tab-nav-operation>
    <div class="ant-pro-tabs-extra-content" *ngIf="extraTemplate">
      <ng-template *ngTemplateOutlet="extraTemplate"></ng-template>
    </div>
  `,
                host: {
                    role: 'tablist',
                    class: 'ant-pro-tabs-nav',
                    '(keydown)': 'handleKeydown($event)'
                }
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: NgZone }, { type: ViewportRuler }, { type: NzResizeObserver }, { type: Directionality, decorators: [{
                type: Optional
            }] }]; }, { indexFocused: [{
            type: Output
        }], selectFocusedIndex: [{
            type: Output
        }], addClicked: [{
            type: Output
        }], tabScroll: [{
            type: Output
        }], position: [{
            type: Input
        }], addable: [{
            type: Input
        }], hideBar: [{
            type: Input
        }], addIcon: [{
            type: Input
        }], inkBarAnimated: [{
            type: Input
        }], extraTemplate: [{
            type: Input
        }], selectedIndex: [{
            type: Input
        }], navWarpRef: [{
            type: ViewChild,
            args: ['navWarp', { static: true }]
        }], navListRef: [{
            type: ViewChild,
            args: ['navList', { static: true }]
        }], operationRef: [{
            type: ViewChild,
            args: [ProTabNavOperationComponent, { static: true }]
        }], addBtnRef: [{
            type: ViewChild,
            args: [ProTabAddButtonComponent]
        }], inkBar: [{
            type: ViewChild,
            args: [ProTabsInkBarDirective, { static: true }]
        }], items: [{
            type: ContentChildren,
            args: [ProTabNavItemDirective, { descendants: true }]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * Fix https://github.com/angular/angular/issues/8563
 */
class ProTabLinkTemplateDirective {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
ProTabLinkTemplateDirective.ɵfac = function ProTabLinkTemplateDirective_Factory(t) { return new (t || ProTabLinkTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 1)); };
ProTabLinkTemplateDirective.ɵdir = ɵɵdefineDirective({ type: ProTabLinkTemplateDirective, selectors: [["ng-template", "ProTabLink", ""]], exportAs: ["ProTabLinkTemplate"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ProTabLinkTemplateDirective, [{
        type: Directive,
        args: [{
                selector: 'ng-template[ProTabLink]',
                exportAs: 'ProTabLinkTemplate'
            }]
    }], function () { return [{ type: TemplateRef, decorators: [{
                type: Host
            }] }]; }, null); })();
/**
 * This component is for catching `routerLink` directive.
 */
class ProTabLinkDirective {
    constructor(routerLink, routerLinkWithHref, ProTabLinkTemplateDirective) {
        this.routerLink = routerLink;
        this.routerLinkWithHref = routerLinkWithHref;
        if (!ProTabLinkTemplateDirective) {
            warnDeprecation(`'a[pro-tab-link]' is deprecated. Please use 'ng-template[ProTabLink] > a[pro-tab-link]' instead.`);
        }
    }
}
ProTabLinkDirective.ɵfac = function ProTabLinkDirective_Factory(t) { return new (t || ProTabLinkDirective)(ɵɵdirectiveInject(RouterLink, 10), ɵɵdirectiveInject(RouterLinkWithHref, 10), ɵɵdirectiveInject(ProTabLinkTemplateDirective, 8)); };
ProTabLinkDirective.ɵdir = ɵɵdefineDirective({ type: ProTabLinkDirective, selectors: [["a", "pro-tab-link", ""]], exportAs: ["ProTabLink"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ProTabLinkDirective, [{
        type: Directive,
        args: [{
                selector: 'a[pro-tab-link]',
                exportAs: 'ProTabLink'
            }]
    }], function () { return [{ type: RouterLink, decorators: [{
                type: Optional
            }, {
                type: Self
            }] }, { type: RouterLinkWithHref, decorators: [{
                type: Optional
            }, {
                type: Self
            }] }, { type: ProTabLinkTemplateDirective, decorators: [{
                type: Optional
            }] }]; }, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/** Decorates the `ng-template` tags and reads out the template from it. */
class ProTabDirective {
}
ProTabDirective.ɵfac = function ProTabDirective_Factory(t) { return new (t || ProTabDirective)(); };
ProTabDirective.ɵdir = ɵɵdefineDirective({ type: ProTabDirective, selectors: [["", "pro-tab", ""]], exportAs: ["ProTab"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ProTabDirective, [{
        type: Directive,
        args: [{
                selector: '[pro-tab]',
                exportAs: 'ProTab'
            }]
    }], null, null); })();

const _c0$5 = ["tabLinkTemplate"];
const _c1$3 = ["contentTemplate"];
function ProTabComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵprojection(0);
} }
function ProTabComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵprojection(0, 1);
} }
const _c2$2 = [[["", "pro-tab-link", ""]], "*"];
const _c3$2 = ["[pro-tab-link]", "*"];
/**
 * Used to provide a tab set to a tab without causing a circular dependency.
 */
const PRO_TAB_SET = new InjectionToken('PRO_TAB_SET');
class ProTabComponent {
    constructor(closestTabSet) {
        this.closestTabSet = closestTabSet;
        this.nzTitle = '';
        this.nzClosable = false;
        this.nzCloseIcon = 'close';
        this.nzDisabled = false;
        this.nzForceRender = false;
        this.nzSelect = new EventEmitter();
        this.nzDeselect = new EventEmitter();
        this.nzClick = new EventEmitter();
        this.nzContextmenu = new EventEmitter();
        this.template = null;
        this.isActive = false;
        this.position = null;
        this.origin = null;
        this.stateChanges = new Subject();
    }
    get content() {
        return this.template || this.contentTemplate;
    }
    get label() {
        return this.nzTitle || this.ProTabLinkTemplateDirective.templateRef || this.tabLinkTemplate;
    }
    ngOnChanges(changes) {
        const { nzTitle, nzDisabled, nzForceRender } = changes;
        if (nzTitle || nzDisabled || nzForceRender) {
            this.stateChanges.next();
        }
    }
    ngOnDestroy() {
        this.stateChanges.complete();
    }
    ngOnInit() { }
}
ProTabComponent.ɵfac = function ProTabComponent_Factory(t) { return new (t || ProTabComponent)(ɵɵdirectiveInject(PRO_TAB_SET)); };
ProTabComponent.ɵcmp = ɵɵdefineComponent({ type: ProTabComponent, selectors: [["pro-tab"]], contentQueries: function ProTabComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵɵcontentQuery(dirIndex, ProTabLinkTemplateDirective, 1);
        ɵɵcontentQuery(dirIndex, ProTabDirective, 1, TemplateRef);
        ɵɵcontentQuery(dirIndex, ProTabLinkDirective, 1);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.ProTabLinkTemplateDirective = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.linkDirective = _t.first);
    } }, viewQuery: function ProTabComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$5, 3);
        ɵɵviewQuery(_c1$3, 3);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tabLinkTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentTemplate = _t.first);
    } }, inputs: { nzTitle: "nzTitle", nzClosable: "nzClosable", nzCloseIcon: "nzCloseIcon", nzDisabled: "nzDisabled", nzForceRender: "nzForceRender" }, outputs: { nzSelect: "nzSelect", nzDeselect: "nzDeselect", nzClick: "nzClick", nzContextmenu: "nzContextmenu" }, exportAs: ["proTab"], features: [ɵɵNgOnChangesFeature], ngContentSelectors: _c3$2, decls: 4, vars: 0, consts: [["tabLinkTemplate", ""], ["contentTemplate", ""]], template: function ProTabComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef(_c2$2);
        ɵɵtemplate(0, ProTabComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        ɵɵtemplate(2, ProTabComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    } }, encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean()
], ProTabComponent.prototype, "nzClosable", void 0);
__decorate([
    InputBoolean()
], ProTabComponent.prototype, "nzDisabled", void 0);
__decorate([
    InputBoolean()
], ProTabComponent.prototype, "nzForceRender", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ProTabComponent, [{
        type: Component,
        args: [{
                selector: 'pro-tab',
                exportAs: 'proTab',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <ng-template #tabLinkTemplate>
      <ng-content select="[pro-tab-link]"></ng-content>
    </ng-template>
    <ng-template #contentTemplate><ng-content></ng-content></ng-template>
  `
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PRO_TAB_SET]
            }] }]; }, { nzTitle: [{
            type: Input
        }], nzClosable: [{
            type: Input
        }], nzCloseIcon: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }], nzForceRender: [{
            type: Input
        }], nzSelect: [{
            type: Output
        }], nzDeselect: [{
            type: Output
        }], nzClick: [{
            type: Output
        }], nzContextmenu: [{
            type: Output
        }], tabLinkTemplate: [{
            type: ViewChild,
            args: ['tabLinkTemplate', { static: true }]
        }], ProTabLinkTemplateDirective: [{
            type: ContentChild,
            args: [ProTabLinkTemplateDirective]
        }], template: [{
            type: ContentChild,
            args: [ProTabDirective, { read: TemplateRef }]
        }], linkDirective: [{
            type: ContentChild,
            args: [ProTabLinkDirective]
        }], contentTemplate: [{
            type: ViewChild,
            args: ['contentTemplate', { static: true }]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function ProTabCloseButtonComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0, 3);
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.closeIcon);
} }
function ProTabCloseButtonComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "i", 4);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("nzType", ctx_r1.closeIcon);
} }
class ProTabCloseButtonComponent {
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
ProTabCloseButtonComponent.ɵcmp = ɵɵdefineComponent({ type: ProTabCloseButtonComponent, selectors: [["pro-tab-close-button"], ["button", "pro-tab-close-button", ""]], hostAttrs: ["aria-label", "Close tab", "type", "button", 1, "ant-pro-tabs-tab-remove"], inputs: { closeIcon: "closeIcon" }, decls: 3, vars: 3, consts: [[3, "ngSwitch"], [3, "ngTemplateOutlet", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [3, "ngTemplateOutlet"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"]], template: function ProTabCloseButtonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementContainerStart(0, 0);
        ɵɵtemplate(1, ProTabCloseButtonComponent_ng_container_1_Template, 1, 1, "ng-container", 1);
        ɵɵtemplate(2, ProTabCloseButtonComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
        ɵɵelementContainerEnd();
    } if (rf & 2) {
        ɵɵproperty("ngSwitch", true);
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", ctx.isTemplateRef(ctx.closeIcon));
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", ctx.isNonEmptyString(ctx.closeIcon));
    } }, directives: [NgSwitch, NgSwitchCase, NgTemplateOutlet, NzIconDirective], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ProTabCloseButtonComponent, [{
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

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const _c0$4 = ["pro-tab-body", ""];
function ProTabBodyComponent_ng_container_0_1_ng_template_0_Template(rf, ctx) { }
function ProTabBodyComponent_ng_container_0_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, ProTabBodyComponent_ng_container_0_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function ProTabBodyComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ProTabBodyComponent_ng_container_0_1_Template, 1, 0, undefined, 1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.content);
} }
class ProTabBodyComponent {
    constructor() {
        this.content = null;
        this.active = false;
        this.tabPaneAnimated = true;
        this.forceRender = false;
    }
}
ProTabBodyComponent.ɵfac = function ProTabBodyComponent_Factory(t) { return new (t || ProTabBodyComponent)(); };
ProTabBodyComponent.ɵcmp = ɵɵdefineComponent({ type: ProTabBodyComponent, selectors: [["", "pro-tab-body", ""]], hostAttrs: [1, "ant-pro-tabs-tabpane"], hostVars: 12, hostBindings: function ProTabBodyComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵattribute("tabindex", ctx.active ? 0 : -1)("aria-hidden", !ctx.active);
        ɵɵstyleProp("visibility", ctx.tabPaneAnimated ? ctx.active ? null : "hidden" : null)("height", ctx.tabPaneAnimated ? ctx.active ? null : 0 : null)("overflow-y", ctx.tabPaneAnimated ? ctx.active ? null : "none" : null)("display", !ctx.tabPaneAnimated ? ctx.active ? null : "none" : null);
        ɵɵclassProp("ant-pro-tabs-tabpane-active", ctx.active);
    } }, inputs: { content: "content", active: "active", tabPaneAnimated: "tabPaneAnimated", forceRender: "forceRender" }, exportAs: ["ProTabBody"], attrs: _c0$4, decls: 1, vars: 1, consts: [[4, "ngIf"], [4, "ngTemplateOutlet"]], template: function ProTabBodyComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, ProTabBodyComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.active || ctx.forceRender);
    } }, directives: [NgIf, NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ProTabBodyComponent, [{
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

function ProTabSetComponent_pro_tabs_nav_0_div_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0, 12);
} if (rf & 2) {
    const tab_r3 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngTemplateOutlet", tab_r3.label);
} }
function ProTabSetComponent_pro_tabs_nav_0_div_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const tab_r3 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(tab_r3.label);
} }
function ProTabSetComponent_pro_tabs_nav_0_div_1_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 13);
    ɵɵlistener("click", function ProTabSetComponent_pro_tabs_nav_0_div_1_button_5_Template_button_click_0_listener($event) { ɵɵrestoreView(_r12); const i_r4 = ɵɵnextContext().index; const ctx_r10 = ɵɵnextContext(2); return ctx_r10.onClose(i_r4, $event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const tab_r3 = ɵɵnextContext().$implicit;
    ɵɵproperty("closeIcon", tab_r3.nzCloseIcon);
} }
function ProTabSetComponent_pro_tabs_nav_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 6);
    ɵɵlistener("click", function ProTabSetComponent_pro_tabs_nav_0_div_1_Template_div_click_0_listener() { ɵɵrestoreView(_r15); const tab_r3 = ctx.$implicit; const i_r4 = ctx.index; const ctx_r14 = ɵɵnextContext(2); return ctx_r14.clickNavItem(tab_r3, i_r4); })("contextmenu", function ProTabSetComponent_pro_tabs_nav_0_div_1_Template_div_contextmenu_0_listener($event) { ɵɵrestoreView(_r15); const tab_r3 = ctx.$implicit; const ctx_r16 = ɵɵnextContext(2); return ctx_r16.contextmenuNavItem(tab_r3, $event); });
    ɵɵelementStart(1, "div", 7);
    ɵɵelementContainerStart(2, 8);
    ɵɵtemplate(3, ProTabSetComponent_pro_tabs_nav_0_div_1_ng_container_3_Template, 1, 1, "ng-container", 9);
    ɵɵtemplate(4, ProTabSetComponent_pro_tabs_nav_0_div_1_ng_container_4_Template, 2, 1, "ng-container", 10);
    ɵɵelementContainerEnd();
    ɵɵtemplate(5, ProTabSetComponent_pro_tabs_nav_0_div_1_button_5_Template, 1, 1, "button", 11);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const tab_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵstyleProp("margin-right", ctx_r2.position === "horizontal" ? ctx_r2.nzTabBarGutter : null, "px")("margin-bottom", ctx_r2.position === "vertical" ? ctx_r2.nzTabBarGutter : null, "px");
    ɵɵclassProp("ant-pro-tabs-tab-active", ctx_r2.nzSelectedIndex === i_r4)("ant-pro-tabs-tab-disabled", tab_r3.nzDisabled);
    ɵɵadvance(1);
    ɵɵproperty("disabled", tab_r3.nzDisabled)("tab", tab_r3)("active", ctx_r2.nzSelectedIndex === i_r4);
    ɵɵattribute("tabIndex", ctx_r2.getTabIndex(tab_r3, i_r4))("aria-disabled", tab_r3.nzDisabled)("aria-selected", ctx_r2.nzSelectedIndex === i_r4 && !ctx_r2.nzHideAll)("aria-controls", ctx_r2.getTabContentId(i_r4));
    ɵɵadvance(1);
    ɵɵproperty("ngSwitch", true);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", ctx_r2.isTemplateRef(tab_r3.label));
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", ctx_r2.isNonEmptyString(tab_r3.label));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", tab_r3.nzClosable && ctx_r2.closable && !tab_r3.nzDisabled);
} }
function ProTabSetComponent_pro_tabs_nav_0_Template(rf, ctx) { if (rf & 1) {
    const _r18 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "pro-tabs-nav", 4);
    ɵɵlistener("tabScroll", function ProTabSetComponent_pro_tabs_nav_0_Template_pro_tabs_nav_tabScroll_0_listener($event) { ɵɵrestoreView(_r18); const ctx_r17 = ɵɵnextContext(); return ctx_r17.nzTabListScroll.emit($event); })("selectFocusedIndex", function ProTabSetComponent_pro_tabs_nav_0_Template_pro_tabs_nav_selectFocusedIndex_0_listener($event) { ɵɵrestoreView(_r18); const ctx_r19 = ɵɵnextContext(); return ctx_r19.setSelectedIndex($event); })("addClicked", function ProTabSetComponent_pro_tabs_nav_0_Template_pro_tabs_nav_addClicked_0_listener() { ɵɵrestoreView(_r18); const ctx_r20 = ɵɵnextContext(); return ctx_r20.onAdd(); });
    ɵɵtemplate(1, ProTabSetComponent_pro_tabs_nav_0_div_1_Template, 6, 19, "div", 5);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ctx_r0.nzTabBarStyle)("selectedIndex", ctx_r0.nzSelectedIndex || 0)("inkBarAnimated", ctx_r0.inkBarAnimated)("addable", ctx_r0.addable)("addIcon", ctx_r0.nzAddIcon)("hideBar", ctx_r0.nzHideAll)("position", ctx_r0.position)("extraTemplate", ctx_r0.nzTabBarExtraContent);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r0.tabs);
} }
function ProTabSetComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 14);
} if (rf & 2) {
    const tab_r21 = ctx.$implicit;
    const i_r22 = ctx.index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("active", ctx_r1.nzSelectedIndex == i_r22 && !ctx_r1.nzHideAll)("content", tab_r21.content)("forceRender", tab_r21.nzForceRender)("tabPaneAnimated", ctx_r1.tabPaneAnimated);
} }
let nextId = 0;
class ProTabSetComponent {
    constructor(cdr, router) {
        this.cdr = cdr;
        this.router = router;
        this.nzTabPosition = 'top';
        this.nzCanDeactivate = null;
        this.nzAddIcon = 'plus';
        this.nzTabBarStyle = null;
        this.nzType = 'line';
        this.nzSize = 'default';
        this.nzAnimated = true;
        this.nzTabBarGutter = undefined;
        this.nzHideAdd = false;
        this.nzCentered = false;
        this.nzHideAll = false;
        this.nzLinkRouter = false;
        this.nzLinkExact = true;
        this.nzSelectChange = new EventEmitter(true);
        this.nzSelectedIndexChange = new EventEmitter();
        this.nzTabListScroll = new EventEmitter();
        this.nzClose = new EventEmitter();
        this.nzAdd = new EventEmitter();
        /**
         * @deprecated Not supported.
         * @breaking-change 11.0.0
         */
        this.nzShowPagination = true;
        /**
         * @deprecated Not supported.
         * @breaking-change 11.0.0
         */
        this.nzOnNextClick = new EventEmitter();
        /**
         * @deprecated Not supported.
         * @breaking-change 11.0.0
         */
        this.nzOnPrevClick = new EventEmitter();
        // Pick up only direct descendants under ivy rendering engine
        // We filter out only the tabs that belong to this tab set in `tabs`.
        this.allTabs = new QueryList();
        // All the direct tabs for this tab set
        this.tabs = new QueryList();
        this.destroy$ = new Subject();
        this.indexToSelect = 0;
        this.selectedIndex = null;
        this.tabLabelSubscription = Subscription.EMPTY;
        this.tabsSubscription = Subscription.EMPTY;
        this.canDeactivateSubscription = Subscription.EMPTY;
        this.tabSetId = nextId++;
    }
    get nzSelectedIndex() {
        return this.selectedIndex;
    }
    set nzSelectedIndex(value) {
        this.indexToSelect = coerceNumberProperty(value, null);
    }
    get position() {
        return ['top', 'bottom'].indexOf(this.nzTabPosition) === -1 ? 'vertical' : 'horizontal';
    }
    get addable() {
        return this.nzType === 'editable-card' && !this.nzHideAdd;
    }
    get closable() {
        return this.nzType === 'editable-card';
    }
    get line() {
        return this.nzType === 'line';
    }
    get inkBarAnimated() {
        return this.line && (typeof this.nzAnimated === 'boolean' ? this.nzAnimated : this.nzAnimated.inkBar);
    }
    get tabPaneAnimated() {
        return (this.position === 'horizontal' && this.line && (typeof this.nzAnimated === 'boolean' ? this.nzAnimated : this.nzAnimated.tabPane));
    }
    ngOnInit() {
        if (this.nzOnNextClick.observers.length) {
            warnDeprecation(`(nzOnNextClick) of pro-tabset is not support, will be removed in 11.0.0`);
        }
        if (this.nzOnPrevClick.observers.length) {
            warnDeprecation(`(nzOnPrevClick) of pro-tabset is not support, will be removed in 11.0.0`);
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.tabs.destroy();
        this.tabLabelSubscription.unsubscribe();
        this.tabsSubscription.unsubscribe();
        this.canDeactivateSubscription.unsubscribe();
    }
    ngAfterContentInit() {
        Promise.resolve().then(() => {
            this.setUpRouter();
        });
        this.subscribeToTabLabels();
        this.subscribeToAllTabChanges();
        // Subscribe to changes in the amount of tabs, in order to be
        // able to re-render the content as new tabs are added or removed.
        this.tabsSubscription = this.tabs.changes.subscribe(() => {
            const indexToSelect = this.clampTabIndex(this.indexToSelect);
            // Maintain the previously-selected tab if a new tab is added or removed and there is no
            // explicit change that selects a different tab.
            if (indexToSelect === this.selectedIndex) {
                const tabs = this.tabs.toArray();
                for (let i = 0; i < tabs.length; i++) {
                    if (tabs[i].isActive) {
                        // Assign both to the `indexToSelect` and `selectedIndex` so we don't fire a changed
                        // event, otherwise the consumer may end up in an infinite loop in some edge cases like
                        // adding a tab within the `nzSelectedIndexChange` event.
                        this.indexToSelect = this.selectedIndex = i;
                        break;
                    }
                }
            }
            this.subscribeToTabLabels();
            this.cdr.markForCheck();
        });
    }
    ngAfterContentChecked() {
        // Don't clamp the `indexToSelect` immediately in the setter because it can happen that
        // the amount of tabs changes before the actual change detection runs.
        const indexToSelect = (this.indexToSelect = this.clampTabIndex(this.indexToSelect));
        // If there is a change in selected index, emit a change event. Should not trigger if
        // the selected index has not yet been initialized.
        if (this.selectedIndex !== indexToSelect) {
            const isFirstRun = this.selectedIndex == null;
            if (!isFirstRun) {
                this.nzSelectChange.emit(this.createChangeEvent(indexToSelect));
            }
            // Changing these values after change detection has run
            // since the checked content may contain references to them.
            Promise.resolve().then(() => {
                this.tabs.forEach((tab, index) => (tab.isActive = index === indexToSelect));
                if (!isFirstRun) {
                    this.nzSelectedIndexChange.emit(indexToSelect);
                }
            });
        }
        // Setup the position for each tab and optionally setup an origin on the next selected tab.
        this.tabs.forEach((tab, index) => {
            tab.position = index - indexToSelect;
            // If there is already a selected tab, then set up an origin for the next selected tab
            // if it doesn't have one already.
            if (this.selectedIndex != null && tab.position === 0 && !tab.origin) {
                tab.origin = indexToSelect - this.selectedIndex;
            }
        });
        if (this.selectedIndex !== indexToSelect) {
            this.selectedIndex = indexToSelect;
            this.cdr.markForCheck();
        }
    }
    onClose(index, e) {
        e.preventDefault();
        e.stopPropagation();
        this.nzClose.emit({ index });
    }
    onAdd() {
        this.nzAdd.emit();
    }
    clampTabIndex(index) {
        return Math.min(this.tabs.length - 1, Math.max(index || 0, 0));
    }
    createChangeEvent(index) {
        const event = new NzTabChangeEvent();
        event.index = index;
        if (this.tabs && this.tabs.length) {
            event.tab = this.tabs.toArray()[index];
            this.tabs.forEach((tab, i) => {
                if (i !== index) {
                    tab.nzDeselect.emit();
                }
            });
            event.tab.nzSelect.emit();
        }
        return event;
    }
    subscribeToTabLabels() {
        if (this.tabLabelSubscription) {
            this.tabLabelSubscription.unsubscribe();
        }
        this.tabLabelSubscription = merge(...this.tabs.map(tab => tab.stateChanges)).subscribe(() => this.cdr.markForCheck());
    }
    subscribeToAllTabChanges() {
        this.allTabs.changes.pipe(startWith(this.allTabs)).subscribe((tabs) => {
            this.tabs.reset(tabs.filter(tab => tab.closestTabSet === this));
            this.tabs.notifyOnChanges();
        });
    }
    canDeactivateFun(pre, next) {
        return of(true);
    }
    clickNavItem(tab, index) {
        if (!tab.nzDisabled) {
            // ignore nzCanDeactivate
            tab.nzClick.emit();
            this.setSelectedIndex(index);
        }
    }
    contextmenuNavItem(tab, e) {
        if (!tab.nzDisabled) {
            // ignore nzCanDeactivate
            tab.nzContextmenu.emit(e);
        }
    }
    setSelectedIndex(index) {
        this.canDeactivateSubscription.unsubscribe();
        this.canDeactivateSubscription = this.canDeactivateFun(this.selectedIndex, index).subscribe(can => {
            if (can) {
                this.nzSelectedIndex = index;
                this.tabNavBarRef.focusIndex = index;
                this.cdr.markForCheck();
            }
        });
    }
    getTabIndex(tab, index) {
        if (tab.nzDisabled) {
            return null;
        }
        return this.selectedIndex === index ? 0 : -1;
    }
    getTabContentId(i) {
        return `pro-tabs-${this.tabSetId}-tab-${i}`;
    }
    setUpRouter() {
        if (this.nzLinkRouter) {
            if (!this.router) {
                throw new Error(`${PREFIX} you should import 'RouterModule' if you want to use 'nzLinkRouter'!`);
            }
            this.router.events
                .pipe(takeUntil(this.destroy$), filter(e => e instanceof NavigationEnd), startWith(true), delay(0))
                .subscribe(() => {
                this.updateRouterActive();
                this.cdr.markForCheck();
            });
        }
    }
    updateRouterActive() {
        if (this.router.navigated) {
            const index = this.findShouldActiveTabIndex();
            if (index !== this.selectedIndex) {
                this.setSelectedIndex(index);
                this.nzSelectedIndexChange.emit(index);
            }
            this.nzHideAll = index === -1;
        }
    }
    findShouldActiveTabIndex() {
        const tabs = this.tabs.toArray();
        const isActive = this.isLinkActive(this.router);
        return tabs.findIndex(tab => {
            const c = tab.linkDirective;
            return c ? isActive(c.routerLink) || isActive(c.routerLinkWithHref) : false;
        });
    }
    isLinkActive(router) {
        return (link) => (link ? router.isActive(link.urlTree, this.nzLinkExact) : false);
    }
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('nzShowPagination')) {
            warnDeprecation(`[nzOnPrevClick] of pro-tabset is not support, will be removed in 11.0.0`);
        }
    }
    isNonEmptyString(value) {
        return typeof value === 'string' && value !== '';
    }
    isTemplateRef(value) {
        return value instanceof TemplateRef;
    }
}
ProTabSetComponent.ɵfac = function ProTabSetComponent_Factory(t) { return new (t || ProTabSetComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Router, 8)); };
ProTabSetComponent.ɵcmp = ɵɵdefineComponent({ type: ProTabSetComponent, selectors: [["pro-tabset"]], contentQueries: function ProTabSetComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵɵcontentQuery(dirIndex, ProTabComponent, 1);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.allTabs = _t);
    } }, viewQuery: function ProTabSetComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(ProTabNavBarComponent, 1);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tabNavBarRef = _t.first);
    } }, hostAttrs: [1, "ant-pro-tabs"], hostVars: 22, hostBindings: function ProTabSetComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵclassProp("ant-pro-tabs-card", ctx.nzType === "card" || ctx.nzType === "editable-card")("ant-pro-tabs-editable", ctx.nzType === "editable-card")("ant-pro-tabs-editable-card", ctx.nzType === "editable-card")("ant-pro-tabs-centered", ctx.nzCentered)("ant-pro-tabs-top", ctx.nzTabPosition === "top")("ant-pro-tabs-bottom", ctx.nzTabPosition === "bottom")("ant-pro-tabs-left", ctx.nzTabPosition === "left")("ant-pro-tabs-right", ctx.nzTabPosition === "right")("ant-pro-tabs-default", ctx.nzSize === "default")("ant-pro-tabs-small", ctx.nzSize === "small")("ant-pro-tabs-large", ctx.nzSize === "large");
    } }, inputs: { nzSelectedIndex: "nzSelectedIndex", nzTabPosition: "nzTabPosition", nzTabBarExtraContent: "nzTabBarExtraContent", nzCanDeactivate: "nzCanDeactivate", nzAddIcon: "nzAddIcon", nzTabBarStyle: "nzTabBarStyle", nzType: "nzType", nzSize: "nzSize", nzAnimated: "nzAnimated", nzTabBarGutter: "nzTabBarGutter", nzHideAdd: "nzHideAdd", nzCentered: "nzCentered", nzHideAll: "nzHideAll", nzLinkRouter: "nzLinkRouter", nzLinkExact: "nzLinkExact", nzShowPagination: "nzShowPagination" }, outputs: { nzSelectChange: "nzSelectChange", nzSelectedIndexChange: "nzSelectedIndexChange", nzTabListScroll: "nzTabListScroll", nzClose: "nzClose", nzAdd: "nzAdd", nzOnNextClick: "nzOnNextClick", nzOnPrevClick: "nzOnPrevClick" }, exportAs: ["proTabset"], features: [ɵɵProvidersFeature([
            {
                provide: PRO_TAB_SET,
                useExisting: ProTabSetComponent
            }
        ]), ɵɵNgOnChangesFeature], decls: 4, vars: 14, consts: [[3, "ngStyle", "selectedIndex", "inkBarAnimated", "addable", "addIcon", "hideBar", "position", "extraTemplate", "tabScroll", "selectFocusedIndex", "addClicked", 4, "ngIf"], [1, "ant-pro-tabs-content-holder"], [1, "ant-pro-tabs-content"], ["pro-tab-body", "", 3, "active", "content", "forceRender", "tabPaneAnimated", 4, "ngFor", "ngForOf"], [3, "ngStyle", "selectedIndex", "inkBarAnimated", "addable", "addIcon", "hideBar", "position", "extraTemplate", "tabScroll", "selectFocusedIndex", "addClicked"], ["class", "ant-pro-tabs-tab", 3, "margin-right", "margin-bottom", "ant-pro-tabs-tab-active", "ant-pro-tabs-tab-disabled", "click", "contextmenu", 4, "ngFor", "ngForOf"], [1, "ant-pro-tabs-tab", 3, "click", "contextmenu"], ["role", "tab", "ProTabNavItem", "", "cdkMonitorElementFocus", "", 1, "ant-pro-tabs-tab-btn", 3, "disabled", "tab", "active"], [3, "ngSwitch"], [3, "ngTemplateOutlet", 4, "ngSwitchCase"], [4, "ngSwitchCase"], ["pro-tab-close-button", "", 3, "closeIcon", "click", 4, "ngIf"], [3, "ngTemplateOutlet"], ["pro-tab-close-button", "", 3, "closeIcon", "click"], ["pro-tab-body", "", 3, "active", "content", "forceRender", "tabPaneAnimated"]], template: function ProTabSetComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, ProTabSetComponent_pro_tabs_nav_0_Template, 2, 9, "pro-tabs-nav", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵtemplate(3, ProTabSetComponent_div_3_Template, 1, 4, "div", 3);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.tabs.length);
        ɵɵadvance(2);
        ɵɵstyleProp("margin-left", ctx.tabPaneAnimated ? -(ctx.nzSelectedIndex || 0) * 100 : null, "%");
        ɵɵclassProp("ant-pro-tabs-content-top", ctx.nzTabPosition === "top")("ant-pro-tabs-content-bottom", ctx.nzTabPosition === "bottom")("ant-pro-tabs-content-left", ctx.nzTabPosition === "left")("ant-pro-tabs-content-right", ctx.nzTabPosition === "right")("ant-pro-tabs-content-animated", ctx.tabPaneAnimated);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.tabs);
    } }, directives: [NgIf, NgForOf, ProTabNavBarComponent, NgStyle, ProTabNavItemDirective, CdkMonitorFocus, NgSwitch, NgSwitchCase, NgTemplateOutlet, ProTabCloseButtonComponent, ProTabBodyComponent], encapsulation: 2 });
__decorate([
    InputBoolean()
], ProTabSetComponent.prototype, "nzHideAdd", void 0);
__decorate([
    InputBoolean()
], ProTabSetComponent.prototype, "nzCentered", void 0);
__decorate([
    InputBoolean()
], ProTabSetComponent.prototype, "nzHideAll", void 0);
__decorate([
    InputBoolean()
], ProTabSetComponent.prototype, "nzLinkRouter", void 0);
__decorate([
    InputBoolean()
], ProTabSetComponent.prototype, "nzLinkExact", void 0);
__decorate([
    InputBoolean()
], ProTabSetComponent.prototype, "nzShowPagination", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ProTabSetComponent, [{
        type: Component,
        args: [{
                selector: 'pro-tabset',
                exportAs: 'proTabset',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.Default,
                providers: [
                    {
                        provide: PRO_TAB_SET,
                        useExisting: ProTabSetComponent
                    }
                ],
                template: `
      <pro-tabs-nav
              *ngIf="tabs.length"
              [ngStyle]="nzTabBarStyle"
              [selectedIndex]="nzSelectedIndex || 0"
              [inkBarAnimated]="inkBarAnimated"
              [addable]="addable"
              [addIcon]="nzAddIcon"
              [hideBar]="nzHideAll"
              [position]="position"
              [extraTemplate]="nzTabBarExtraContent"
              (tabScroll)="nzTabListScroll.emit($event)"
              (selectFocusedIndex)="setSelectedIndex($event)"
              (addClicked)="onAdd()"
      >
          <div
                  class="ant-pro-tabs-tab"
                  [style.margin-right.px]="position === 'horizontal' ? nzTabBarGutter : null"
                  [style.margin-bottom.px]="position === 'vertical' ? nzTabBarGutter : null"
                  [class.ant-pro-tabs-tab-active]="nzSelectedIndex === i"
                  [class.ant-pro-tabs-tab-disabled]="tab.nzDisabled"
                  (click)="clickNavItem(tab, i)"
                  (contextmenu)="contextmenuNavItem(tab, $event)"
                  *ngFor="let tab of tabs; let i = index"
          >
              <div
                      role="tab"
                      [attr.tabIndex]="getTabIndex(tab, i)"
                      [attr.aria-disabled]="tab.nzDisabled"
                      [attr.aria-selected]="nzSelectedIndex === i && !nzHideAll"
                      [attr.aria-controls]="getTabContentId(i)"
                      [disabled]="tab.nzDisabled"
                      [tab]="tab"
                      [active]="nzSelectedIndex === i"
                      class="ant-pro-tabs-tab-btn"
                      ProTabNavItem
                      cdkMonitorElementFocus
              >
                  <ng-container [ngSwitch]="true">
                    <ng-container *ngSwitchCase="isTemplateRef(tab.label)" [ngTemplateOutlet]="tab.label"></ng-container>
                    <ng-container *ngSwitchCase="isNonEmptyString(tab.label)">{{tab.label}}</ng-container>
                  </ng-container>
                  <button
                          pro-tab-close-button
                          *ngIf="tab.nzClosable && closable && !tab.nzDisabled"
                          [closeIcon]="tab.nzCloseIcon"
                          (click)="onClose(i, $event)"
                  ></button>
              </div>
          </div>
      </pro-tabs-nav>
      <div class="ant-pro-tabs-content-holder">
          <div
                  class="ant-pro-tabs-content"
                  [class.ant-pro-tabs-content-top]="nzTabPosition === 'top'"
                  [class.ant-pro-tabs-content-bottom]="nzTabPosition === 'bottom'"
                  [class.ant-pro-tabs-content-left]="nzTabPosition === 'left'"
                  [class.ant-pro-tabs-content-right]="nzTabPosition === 'right'"
                  [class.ant-pro-tabs-content-animated]="tabPaneAnimated"
                  [style.margin-left.%]="tabPaneAnimated ? -(nzSelectedIndex || 0) * 100 : null"
          >
              <div
                      pro-tab-body
                      *ngFor="let tab of tabs; let i = index"
                      [active]="nzSelectedIndex == i && !nzHideAll"
                      [content]="tab.content"
                      [forceRender]="tab.nzForceRender"
                      [tabPaneAnimated]="tabPaneAnimated"
              ></div>
          </div>
      </div>
  `,
                host: {
                    class: 'ant-pro-tabs',
                    '[class.ant-pro-tabs-card]': `nzType === 'card' || nzType === 'editable-card'`,
                    '[class.ant-pro-tabs-editable]': `nzType === 'editable-card'`,
                    '[class.ant-pro-tabs-editable-card]': `nzType === 'editable-card'`,
                    '[class.ant-pro-tabs-centered]': `nzCentered`,
                    '[class.ant-pro-tabs-top]': `nzTabPosition === 'top'`,
                    '[class.ant-pro-tabs-bottom]': `nzTabPosition === 'bottom'`,
                    '[class.ant-pro-tabs-left]': `nzTabPosition === 'left'`,
                    '[class.ant-pro-tabs-right]': `nzTabPosition === 'right'`,
                    '[class.ant-pro-tabs-default]': `nzSize === 'default'`,
                    '[class.ant-pro-tabs-small]': `nzSize === 'small'`,
                    '[class.ant-pro-tabs-large]': `nzSize === 'large'`
                }
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: Router, decorators: [{
                type: Optional
            }] }]; }, { nzSelectedIndex: [{
            type: Input
        }], nzTabPosition: [{
            type: Input
        }], nzTabBarExtraContent: [{
            type: Input
        }], nzCanDeactivate: [{
            type: Input
        }], nzAddIcon: [{
            type: Input
        }], nzTabBarStyle: [{
            type: Input
        }], nzType: [{
            type: Input
        }], nzSize: [{
            type: Input
        }], nzAnimated: [{
            type: Input
        }], nzTabBarGutter: [{
            type: Input
        }], nzHideAdd: [{
            type: Input
        }], nzCentered: [{
            type: Input
        }], nzHideAll: [{
            type: Input
        }], nzLinkRouter: [{
            type: Input
        }], nzLinkExact: [{
            type: Input
        }], nzSelectChange: [{
            type: Output
        }], nzSelectedIndexChange: [{
            type: Output
        }], nzTabListScroll: [{
            type: Output
        }], nzClose: [{
            type: Output
        }], nzAdd: [{
            type: Output
        }], nzShowPagination: [{
            type: Input
        }], nzOnNextClick: [{
            type: Output
        }], nzOnPrevClick: [{
            type: Output
        }], allTabs: [{
            type: ContentChildren,
            args: [ProTabComponent, { descendants: true }]
        }], tabNavBarRef: [{
            type: ViewChild,
            args: [ProTabNavBarComponent]
        }] }); })();

const _c0$3 = ["tabset"];
function ReuseTabComponent_ng_container_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0);
} if (rf & 2) {
    const i_r2 = ɵɵnextContext().$implicit;
    ɵɵtextInterpolate1(" ", i_r2.title, " ");
} }
function ReuseTabComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "pro-tab", 3);
    ɵɵlistener("nzClick", function ReuseTabComponent_ng_container_2_Template_pro_tab_nzClick_1_listener() { ɵɵrestoreView(_r8); const index_r3 = ctx.index; const ctx_r7 = ɵɵnextContext(); return ctx_r7._to(index_r3); })("nzContextmenu", function ReuseTabComponent_ng_container_2_Template_pro_tab_nzContextmenu_1_listener($event) { ɵɵrestoreView(_r8); const i_r2 = ctx.$implicit; const ctx_r9 = ɵɵnextContext(); return ctx_r9.openMenu($event, i_r2); });
    ɵɵtemplate(2, ReuseTabComponent_ng_container_2_ng_template_2_Template, 1, 1, "ng-template", null, 4, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const i_r2 = ctx.$implicit;
    const _r4 = ɵɵreference(3);
    ɵɵadvance(1);
    ɵɵproperty("nzTitle", _r4)("nzClosable", i_r2.closable);
} }
class ReuseTabComponent {
    // #endregion
    constructor(reuseTabService, reuseTabContextService, cdr, router, route, doc) {
        this.reuseTabService = reuseTabService;
        this.reuseTabContextService = reuseTabContextService;
        this.cdr = cdr;
        this.router = router;
        this.route = route;
        this.doc = doc;
        this.unsubscribe$ = new Subject();
        this.updatePos$ = new Subject();
        this.list = [];
        this.pos = 0;
        // #region fields
        this.debug = false;
        this.allowClose = true;
        this.allowRefresh = true;
        this.keepingScroll = false;
        this.change = new EventEmitter();
        this.close = new EventEmitter();
    }
    set keepingScrollContainer(value) {
        this._keepingScrollContainer = typeof value === 'string' ? this.doc.querySelector(value) : value;
    }
    genTit(title) {
        return title.name;
    }
    get curUrl() {
        return this.reuseTabService.getUrl(this.route.snapshot);
    }
    get curUrlQueryParam() {
        return this.route.snapshot.queryParams;
    }
    genCurItem() {
        const url = this.curUrl;
        const snapshotTrue = this.reuseTabService.getTruthRoute(this.route.snapshot);
        return {
            url,
            queryParams: snapshotTrue.queryParams,
            title: this.genTit(this.reuseTabService.getTitle(url, snapshotTrue)),
            closable: this.allowClose && this.reuseTabService.count > 0 && this.reuseTabService.getClosable(url, snapshotTrue),
            refreshable: this.allowRefresh && this.reuseTabService.getRefreshable(url, snapshotTrue),
            active: false,
            last: false,
            index: 0,
        };
    }
    genList(notify) {
        const ls = this.reuseTabService.items.map((item, index) => ({
            url: item.url,
            queryParams: item._snapshot.queryParams,
            title: this.genTit(item.title),
            closable: this.allowClose && item.closable && this.reuseTabService.count > 0,
            refreshable: this.allowRefresh && item.refreshable,
            index: index,
            active: false,
            last: false,
        }));
        const url = this.curUrl;
        let addCurrent = ls.findIndex(w => w.url === url && this.reuseTabService.queryParamsEqual(w.queryParams, this.curUrlQueryParam)) === -1;
        if (notify && notify.active === 'close' && notify.url === url) {
            addCurrent = false;
            let toPos = 0;
            const curItem = this.list.find(w => w.url === url && this.reuseTabService.queryParamsEqual(w.queryParams, this.curUrlQueryParam));
            if (curItem.index === ls.length) {
                // When closed is last
                toPos = ls.length - 1;
            }
            else if (curItem.index < ls.length) {
                // Should be actived next tab when closed is middle
                toPos = Math.max(0, curItem.index);
            }
            this.router.navigate([ls[toPos].url], { queryParams: ls[toPos].queryParams });
        }
        if (addCurrent) {
            ls.push(this.genCurItem());
        }
        ls.forEach((item, index) => (item.index = index));
        if (ls.length === 1) {
            ls[0].closable = false;
        }
        this.list = ls;
        this.cdr.detectChanges();
        this.updatePos$.next();
    }
    updateTitle(res) {
        const item = this.list.find(w => {
            const urlWithParams = this.router.serializeUrl(this.router.createUrlTree([w.url], { queryParams: w.queryParams }));
            return urlWithParams === res.url;
        });
        if (!item)
            return;
        item.title = this.genTit(res.title);
        console.log(this.list);
        this.cdr.detectChanges();
    }
    refresh(item) {
        this.reuseTabService.runHook('onReuseInit', this.pos === item.index ? this.reuseTabService.componentRef : item.index, 'refresh');
    }
    // #region UI
    contextMenuChange(res) {
        let fn = null;
        switch (res.type) {
            case 'refresh':
                this.refresh(res.item);
                break;
            case 'close':
                this._close(null, res.item.index, res.includeNonCloseable);
                break;
            case 'closeRight':
                fn = () => {
                    this.reuseTabService.closeRight(res.item.url, res.item.queryParams, res.includeNonCloseable);
                    this.close.emit(null);
                };
                break;
            case 'closeOther':
                fn = () => {
                    this.reuseTabService.clear(res.includeNonCloseable);
                    this.close.emit(null);
                };
                break;
        }
        if (!fn) {
            return;
        }
        if (!res.item.active && res.item.index <= this.list.find(w => w.active).index) {
            this._to(res.item.index, fn);
        }
        else {
            fn();
        }
    }
    _to(index, cb) {
        index = Math.max(0, Math.min(index, this.list.length - 1));
        const item = this.list[index];
        this.router.navigate([item.url], { queryParams: item.queryParams }).then(res => {
            if (!res)
                return;
            this.item = item;
            this.change.emit(item);
            if (cb) {
                cb();
            }
            this.cdr.detectChanges();
        });
    }
    _close(e, idx, includeNonCloseable) {
        if (e != null) {
            e.preventDefault();
            e.stopPropagation();
        }
        const item = this.list[idx];
        this.reuseTabService.close(item.url, item.queryParams, includeNonCloseable);
        this.close.emit(item);
        this.cdr.detectChanges();
        return false;
    }
    myClose(event) {
        const idx = event.index;
        this._close(null, idx, false);
    }
    activate(instance) {
        this.reuseTabService.componentRef = { instance };
    }
    openMenu(event, item) {
        this.reuseTabContextService.show.next({
            event: event,
            item: item,
        });
        event.preventDefault();
        event.stopPropagation();
    }
    // #endregion
    ngOnInit() {
        this.updatePos$.pipe(takeUntil(this.unsubscribe$), debounceTime(50)).subscribe(() => {
            const url = this.reuseTabService.getUrl(this.route.snapshot);
            const ls = this.list.filter(w => w.url === url || !this.reuseTabService.isExclude(w.url));
            if (ls.length === 0) {
                return;
            }
            const last = ls[ls.length - 1];
            const item = ls.find(w => w.url === url && this.reuseTabService.queryParamsEqual(w.queryParams, this.route.snapshot.queryParams));
            last.last = true;
            const pos = item == null ? last.index : item.index;
            ls.forEach((i, idx) => (i.active = pos === idx));
            this.pos = pos;
            // TODO: 目前无法知道为什么 `pos` 无法通过 `nzSelectedIndex` 生效，因此强制使用组件实例的方式来修改，这种方式是安全的
            // https://github.com/ng-alain/ng-alain/issues/1736
            this.tabset.nzSelectedIndex = pos;
            this.list = ls;
            if (this.cdr && !this.cdr.destroyed) {
                this.cdr.detectChanges();
            }
        });
        // 路由缓存变化订阅
        this.reuseTabService.change.pipe(takeUntil(this.unsubscribe$)).subscribe(res => {
            switch (res && res.active) {
                case 'title':
                    if (this.list && this.list.length === 0) {
                        this.genList(res);
                    }
                    this.updateTitle(res);
                    return;
                case 'override':
                    if (res && res.list && res.list.length === this.list.length) {
                        this.updatePos$.next();
                        return;
                    }
                    break;
            }
            this.genList(res);
        });
        this.reuseTabService.init();
        this.reuseTabContextService.show
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(context => this.reuseTabContextService.open(context));
        this.reuseTabContextService.close
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(res => this.contextMenuChange(res));
    }
    ngOnChanges(changes) {
        if (changes.max)
            this.reuseTabService.max = this.max;
        if (changes.excludes)
            this.reuseTabService.excludes = this.excludes;
        if (changes.keepingScroll) {
            this.reuseTabService.keepingScroll = this.keepingScroll;
            this.reuseTabService.keepingScrollContainer = this._keepingScrollContainer;
        }
        this.reuseTabService.debug = this.debug;
        this.cdr.detectChanges();
    }
    ngOnDestroy() {
        const { unsubscribe$ } = this;
        unsubscribe$.next();
        unsubscribe$.complete();
    }
}
ReuseTabComponent.ɵfac = function ReuseTabComponent_Factory(t) { return new (t || ReuseTabComponent)(ɵɵdirectiveInject(ReuseTabService), ɵɵdirectiveInject(ReuseTabMenuService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(DOCUMENT)); };
ReuseTabComponent.ɵcmp = ɵɵdefineComponent({ type: ReuseTabComponent, selectors: [["pro-reuse-tab"]], viewQuery: function ReuseTabComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$3, 3);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tabset = _t.first);
    } }, hostVars: 4, hostBindings: function ReuseTabComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵclassProp("ant-pro-reuse-tab", true)("ant-pro-reuse-tab-line", true);
    } }, inputs: { debug: "debug", max: "max", tabMaxWidth: "tabMaxWidth", excludes: "excludes", allowClose: "allowClose", allowRefresh: "allowRefresh", keepingScroll: "keepingScroll", keepingScrollContainer: "keepingScrollContainer", tabBarExtraContent: "tabBarExtraContent", tabBarGutter: "tabBarGutter", tabBarStyle: "tabBarStyle" }, outputs: { change: "change", close: "close" }, exportAs: ["proReuseTab"], features: [ɵɵProvidersFeature([ReuseTabMenuService]), ɵɵNgOnChangesFeature], decls: 3, vars: 4, consts: [["nzType", "editable-card", 3, "nzSize", "nzHideAdd", "nzSelectedIndex", "nzClose"], ["tabset", ""], [4, "ngFor", "ngForOf"], [3, "nzTitle", "nzClosable", "nzClick", "nzContextmenu"], ["titleTemplate", ""]], template: function ReuseTabComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "pro-tabset", 0, 1);
        ɵɵlistener("nzClose", function ReuseTabComponent_Template_pro_tabset_nzClose_0_listener($event) { return ctx.myClose($event); });
        ɵɵtemplate(2, ReuseTabComponent_ng_container_2_Template, 4, 2, "ng-container", 2);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("nzSize", "small")("nzHideAdd", true)("nzSelectedIndex", ctx.pos);
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.list);
    } }, directives: [ProTabSetComponent, NgForOf, ProTabComponent], styles: [".ant-pro-reuse-tab{display:block;background-color:#f5f7f9;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;padding:6px}.ant-pro-reuse-tab .ant-pro-tabs .ant-pro-tabs-bar{margin:0;border-bottom:0}.ant-pro-reuse-tab .ant-pro-tabs>.ant-pro-tabs-nav{margin:0}.ant-pro-reuse-tab .ant-pro-tabs>.ant-pro-tabs-nav .ant-pro-tabs-tab{border:transparent;border-radius:4px!important;background:#fff;padding:6px 12px!important}.ant-pro-reuse-tab .ant-pro-tabs>.ant-pro-tabs-nav .ant-pro-tabs-tab:not(:last-of-type){margin-right:6px!important}.ant-pro-reuse-tab .ant-pro-tabs>.ant-pro-tabs-nav:before{border-bottom:transparent}.ant-pro-reuse-tab .ant-pro-tabs .ant-pro-tabs-tab-remove{margin:0;padding-right:0}.ant-pro-reuse-tab .ant-pro-tabs .ant-pro-tabs-nav-more{background:#fff!important}.ant-pro-reuse-tab-cm .ant-menu{border:1px solid #f7f5f5}.ant-pro-reuse-tab-cm .ant-menu-item{height:24px;line-height:24px}"], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean()
], ReuseTabComponent.prototype, "debug", void 0);
__decorate([
    InputNumber()
], ReuseTabComponent.prototype, "max", void 0);
__decorate([
    InputNumber()
], ReuseTabComponent.prototype, "tabMaxWidth", void 0);
__decorate([
    InputBoolean()
], ReuseTabComponent.prototype, "allowClose", void 0);
__decorate([
    InputBoolean()
], ReuseTabComponent.prototype, "allowRefresh", void 0);
__decorate([
    InputBoolean()
], ReuseTabComponent.prototype, "keepingScroll", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ReuseTabComponent, [{
        type: Component,
        args: [{
                selector: 'pro-reuse-tab',
                templateUrl: 'reuse-tab.component.html',
                styleUrls: ['reuse-tab.component.less'],
                host: {
                    '[class.ant-pro-reuse-tab]': 'true',
                    '[class.ant-pro-reuse-tab-line]': 'true',
                },
                providers: [ReuseTabMenuService],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                exportAs: 'proReuseTab',
                preserveWhitespaces: false
            }]
    }], function () { return [{ type: ReuseTabService }, { type: ReuseTabMenuService }, { type: ChangeDetectorRef }, { type: Router }, { type: ActivatedRoute }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, { tabset: [{
            type: ViewChild,
            args: ['tabset', { static: true }]
        }], debug: [{
            type: Input
        }], max: [{
            type: Input
        }], tabMaxWidth: [{
            type: Input
        }], excludes: [{
            type: Input
        }], allowClose: [{
            type: Input
        }], allowRefresh: [{
            type: Input
        }], keepingScroll: [{
            type: Input
        }], keepingScrollContainer: [{
            type: Input
        }], tabBarExtraContent: [{
            type: Input
        }], tabBarGutter: [{
            type: Input
        }], tabBarStyle: [{
            type: Input
        }], change: [{
            type: Output
        }], close: [{
            type: Output
        }] }); })();

function BasicLayoutComponent_ng_container_2_nz_sider_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c0$2 = function (a1, a2) { return { "ant-pro-sider-menu-sider": true, "fix-sider-bar": a1, "light": a2 }; };
function BasicLayoutComponent_ng_container_2_nz_sider_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-sider", 9);
    ɵɵlistener("nzCollapsedChange", function BasicLayoutComponent_ng_container_2_nz_sider_1_Template_nz_sider_nzCollapsedChange_0_listener($event) { ɵɵrestoreView(_r9); const ctx_r8 = ɵɵnextContext(2); return ctx_r8.collapsed = $event; });
    ɵɵtemplate(1, BasicLayoutComponent_ng_container_2_nz_sider_1_ng_container_1_Template, 1, 0, "ng-container", 10);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    const _r3 = ɵɵreference(9);
    ɵɵproperty("nzCollapsible", true)("nzTrigger", null)("nzCollapsed", ctx_r5.collapsed)("nzBreakpoint", "lg")("nzWidth", ctx_r5.siderWidth)("nzTheme", ctx_r5.navTheme)("ngClass", ɵɵpureFunction2(8, _c0$2, ctx_r5.fixSiderbar, ctx_r5.navTheme == "light"));
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r3);
} }
function BasicLayoutComponent_ng_container_2_nz_drawer_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
const _c1$2 = function () { return { padding: 0, height: "100vh" }; };
function BasicLayoutComponent_ng_container_2_nz_drawer_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-drawer", 11);
    ɵɵlistener("nzOnClose", function BasicLayoutComponent_ng_container_2_nz_drawer_2_Template_nz_drawer_nzOnClose_0_listener($event) { ɵɵrestoreView(_r12); const ctx_r11 = ɵɵnextContext(2); return ctx_r11.onDrawerClose($event); });
    ɵɵelementStart(1, "nz-sider", 12);
    ɵɵtemplate(2, BasicLayoutComponent_ng_container_2_nz_drawer_2_ng_container_2_Template, 1, 0, "ng-container", 10);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(2);
    const _r3 = ɵɵreference(9);
    ɵɵproperty("nzClosable", false)("nzVisible", !ctx_r6.collapsed)("nzPlacement", "left")("nzWrapClassName", "ant-pro-sider-menu")("nzWidth", ctx_r6.siderWidth)("ngStyle", ɵɵpureFunction0(13, _c1$2));
    ɵɵadvance(1);
    ɵɵproperty("nzCollapsible", true)("nzTrigger", null)("nzCollapsed", ctx_r6.isMobile ? false : ctx_r6.collapsed)("nzWidth", ctx_r6.siderWidth)("nzTheme", ctx_r6.navTheme)("ngClass", ɵɵpureFunction2(14, _c0$2, ctx_r6.fixSiderbar, ctx_r6.navTheme == "light"));
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r3);
} }
function BasicLayoutComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, BasicLayoutComponent_ng_container_2_nz_sider_1_Template, 2, 11, "nz-sider", 7);
    ɵɵtemplate(2, BasicLayoutComponent_ng_container_2_nz_drawer_2_Template, 3, 17, "nz-drawer", 8);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r0.isMobile);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.isMobile);
} }
function BasicLayoutComponent_nz_header_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function BasicLayoutComponent_nz_header_4_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r21 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 17);
    ɵɵlistener("onMenuHeaderClick", function BasicLayoutComponent_nz_header_4_ng_template_2_ng_container_0_Template_div_onMenuHeaderClick_1_listener($event) { ɵɵrestoreView(_r21); const ctx_r20 = ɵɵnextContext(3); return ctx_r20.onMenuHeaderClick.emit($event); });
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r17 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("theme", ctx_r17.navTheme)("menuData", ctx_r17.menuData)("logo", ctx_r17.logo)("title", ctx_r17.title)("contentWidth", ctx_r17.contentWidth)("rightContentRender", ctx_r17.rightContentRender)("menuHeaderRender", ctx_r17.menuHeaderRender);
} }
function BasicLayoutComponent_nz_header_4_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r23 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 18);
    ɵɵlistener("collapsedChange", function BasicLayoutComponent_nz_header_4_ng_template_2_ng_template_1_Template_div_collapsedChange_0_listener($event) { ɵɵrestoreView(_r23); const ctx_r22 = ɵɵnextContext(3); return ctx_r22.collapsed = $event; })("collapsedChange", function BasicLayoutComponent_nz_header_4_ng_template_2_ng_template_1_Template_div_collapsedChange_0_listener($event) { ɵɵrestoreView(_r23); const ctx_r24 = ɵɵnextContext(3); return ctx_r24.onCollapse.emit($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r19 = ɵɵnextContext(3);
    ɵɵproperty("isMobile", ctx_r19.isMobile)("collapsed", ctx_r19.collapsed)("logo", ctx_r19.logo)("collapsedButtonRender", ctx_r19.collapsedButtonRender)("rightContentRender", ctx_r19.rightContentRender);
} }
function BasicLayoutComponent_nz_header_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, BasicLayoutComponent_nz_header_4_ng_template_2_ng_container_0_Template, 2, 7, "ng-container", 15);
    ɵɵtemplate(1, BasicLayoutComponent_nz_header_4_ng_template_2_ng_template_1_Template, 1, 5, "ng-template", null, 16, ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const _r18 = ɵɵreference(2);
    const ctx_r15 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r15.layout === "topmenu" && !ctx_r15.isMobile)("ngIfElse", _r18);
} }
function BasicLayoutComponent_nz_header_4_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "pro-reuse-tab", 19);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵproperty("allowRefresh", false)("debug", false);
} }
const _c2$1 = function (a1) { return { padding: 0, width: a1, zIndex: 2 }; };
const _c3$1 = function (a0) { return { "ant-pro-fixed-header": a0 }; };
function BasicLayoutComponent_nz_header_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "nz-header", 13);
    ɵɵtemplate(1, BasicLayoutComponent_nz_header_4_ng_container_1_Template, 1, 0, "ng-container", 10);
    ɵɵtemplate(2, BasicLayoutComponent_nz_header_4_ng_template_2_Template, 3, 2, "ng-template", null, 14, ɵɵtemplateRefExtractor);
    ɵɵtemplate(4, BasicLayoutComponent_nz_header_4_ng_container_4_Template, 2, 2, "ng-container", 1);
    ɵɵelementEnd();
} if (rf & 2) {
    const _r14 = ɵɵreference(3);
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ɵɵpureFunction1(4, _c2$1, ctx_r1.getHeadWidth()))("ngClass", ɵɵpureFunction1(6, _c3$1, ctx_r1.fixedHeader));
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.headerRender ? ctx_r1.headerRender : _r14);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r1.fixedHeader && ctx_r1.reuseTab);
} }
function BasicLayoutComponent_nz_footer_7_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function BasicLayoutComponent_nz_footer_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, BasicLayoutComponent_nz_footer_7_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 10);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r25 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r25.footerRender);
} }
function BasicLayoutComponent_nz_footer_7_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 22);
} if (rf & 2) {
    const ctx_r27 = ɵɵnextContext(2);
    ɵɵproperty("links", ctx_r27.links)("copyright", ctx_r27.copyright);
} }
function BasicLayoutComponent_nz_footer_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "nz-footer", 20);
    ɵɵtemplate(1, BasicLayoutComponent_nz_footer_7_ng_container_1_Template, 2, 1, "ng-container", 15);
    ɵɵtemplate(2, BasicLayoutComponent_nz_footer_7_ng_template_2_Template, 1, 2, "ng-template", null, 21, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
} if (rf & 2) {
    const _r26 = ɵɵreference(3);
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.footerRender)("ngIfElse", _r26);
} }
function BasicLayoutComponent_ng_template_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function BasicLayoutComponent_ng_template_8_ng_template_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0, 31);
} if (rf & 2) {
    const ctx_r32 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r32.logo);
} }
function BasicLayoutComponent_ng_template_8_ng_template_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "img", 32);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r33 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("src", ctx_r33.logo, ɵɵsanitizeUrl);
} }
function BasicLayoutComponent_ng_template_8_ng_template_2_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0, 31);
} if (rf & 2) {
    const ctx_r34 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r34.title);
} }
function BasicLayoutComponent_ng_template_8_ng_template_2_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r35 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r35.title);
} }
function BasicLayoutComponent_ng_template_8_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "a", 27);
    ɵɵelementContainerStart(1, 28);
    ɵɵtemplate(2, BasicLayoutComponent_ng_template_8_ng_template_2_ng_container_2_Template, 1, 1, "ng-container", 29);
    ɵɵtemplate(3, BasicLayoutComponent_ng_template_8_ng_template_2_ng_container_3_Template, 2, 1, "ng-container", 30);
    ɵɵelementContainerEnd();
    ɵɵelementStart(4, "h1");
    ɵɵelementContainerStart(5, 28);
    ɵɵtemplate(6, BasicLayoutComponent_ng_template_8_ng_template_2_ng_container_6_Template, 1, 1, "ng-container", 29);
    ɵɵtemplate(7, BasicLayoutComponent_ng_template_8_ng_template_2_ng_container_7_Template, 2, 1, "ng-container", 30);
    ɵɵelementContainerEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r31 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitch", true);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", ctx_r31.isTemplateRef(ctx_r31.logo));
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", ctx_r31.isNonEmptyString(ctx_r31.logo));
    ɵɵadvance(2);
    ɵɵproperty("ngSwitch", true);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", ctx_r31.isTemplateRef(ctx_r31.title));
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", ctx_r31.isNonEmptyString(ctx_r31.title));
} }
const _c4$1 = function (a0, a1) { return { logo: a0, title: a1 }; };
const _c5$1 = function () { return { "width": "100%", "padding": "16px 0" }; };
function BasicLayoutComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r37 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 23);
    ɵɵlistener("click", function BasicLayoutComponent_ng_template_8_Template_div_click_0_listener($event) { ɵɵrestoreView(_r37); const ctx_r36 = ɵɵnextContext(); return ctx_r36.onMenuHeaderClick.emit($event); });
    ɵɵtemplate(1, BasicLayoutComponent_ng_template_8_ng_container_1_Template, 1, 0, "ng-container", 24);
    ɵɵtemplate(2, BasicLayoutComponent_ng_template_8_ng_template_2_Template, 8, 6, "ng-template", null, 25, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
    ɵɵelementStart(4, "pro-base-menu", 26);
    ɵɵlistener("openChange", function BasicLayoutComponent_ng_template_8_Template_pro_base_menu_openChange_4_listener($event) { ɵɵrestoreView(_r37); const ctx_r38 = ɵɵnextContext(); return ctx_r38.menuOpenChange($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const _r30 = ɵɵreference(3);
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r4.menuHeaderRender ? ctx_r4.menuHeaderRender : _r30)("ngTemplateOutletContext", ɵɵpureFunction2(10, _c4$1, ctx_r4.logo, ctx_r4.title));
    ɵɵadvance(3);
    ɵɵstyleMap(ɵɵpureFunction0(13, _c5$1));
    ɵɵproperty("menuData", ctx_r4.menuData)("mode", ctx_r4.mode)("theme", ctx_r4.navTheme)("openKeys", ctx_r4.openKeys)("selectedKey", ctx_r4.selectedKey)("collapsed", ctx_r4.isMobile ? false : ctx_r4.collapsed);
} }
const _c6 = function () { return ["ant-design-pro", "basicLayout"]; };
const _c7 = function (a0) { return { "padding-left": a0, "min-height": "100vh" }; };
const _c8 = ["*"];
class BasicLayoutComponent {
    constructor(breakpointObserver, cdf, activatedRoute, router) {
        this.breakpointObserver = breakpointObserver;
        this.cdf = cdf;
        this.activatedRoute = activatedRoute;
        this.router = router;
        // side menu
        this.title = 'Ant Design Pro'; // layout 的 左上角 的 title
        this.onMenuHeaderClick = new EventEmitter();
        this.mode = 'inline';
        // base menu
        this.layout = 'sidemenu'; // layout 的菜单模式,sidemenu：右侧导航，topmenu：顶部导航
        this.contentWidth = 'Fluid'; // layout 的内容模式,Fluid：定宽 1200px，Fixed：自适应
        this.navTheme = 'dark'; // 导航的主题
        this.fixedHeader = false; // 是否固定 header 到顶部
        this.fixSiderbar = false; // 是否固定导航
        this.autoHideHeader = false; // 是否下滑时自动隐藏 header
        this.menu = { locale: true }; // 关于 menu 的配置，暂时只有 locale,locale 可以关闭 menu 的自带的全球化
        // @Input() iconfontUrl:string; // 使用 IconFont 的图标配置
        // @Input() locale: string; // 当前 layout 的语言设置,'zh-CN' | 'zh-TW' | 'en-US'
        // @Input() settings: any; // layout 的设置
        this.siderWidth = 256; // 侧边菜单宽度
        this.onCollapse = new EventEmitter(); // 菜单的折叠收起事件
        // 是否禁用移动端模式，有的管理系统不需要移动端模式，此属性设置为true即可
        // @Input() @InputBoolean() disableMobile: boolean;
        // 多标签
        this.reuseTab = true;
        this.isMobile = false;
        this.openKeys = [];
        this.visible = true;
        this.ticking = false;
        this.oldScrollTop = 0;
        this.destroy$ = new Subject();
    }
    ngOnInit() {
        this.breakpointObserver
            .observe(['(max-width: 599px)'])
            .pipe(takeUntil(this.destroy$))
            .subscribe((state) => {
            // if (!this.disableMobile) {
            if (state.matches) {
                this.isMobile = true;
            }
            else {
                this.isMobile = false;
            }
            this.cdf.markForCheck();
            // }
        });
        this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
            if (!this.menuData || this.menuData.length < 1) {
                setTimeout(() => {
                    this.openKeys = this.getOpenKeys(this.router.url);
                    this.cdf.markForCheck();
                }, 900);
            }
            else {
                this.openKeys = this.getOpenKeys(this.router.url);
                this.cdf.markForCheck();
            }
        });
    }
    ngOnChanges(changes) {
        if (changes.layout) {
            this.openKeys = this.getOpenKeys(this.router.url);
            console.log('ngOnChanges');
        }
    }
    menuOpenChange(event) {
        if (event.status) {
            this.openKeys = this.getOpenKeys(event.item.path);
            console.log('menuOpenChange');
        }
    }
    getOpenKeys(path) {
        path = decodeURIComponent(path);
        let keys = new Array();
        let parent = this.getParent(path);
        while (parent) {
            keys.push(parent.path);
            parent = this.getParent(parent.path);
        }
        keys.push(path);
        return keys;
    }
    getParent(path) {
        const findChild = this.menuData.find(item => item.path === path);
        if (findChild) {
            return null;
        }
        for (const menu of this.menuData) {
            const fild = this.getNearParent(path, menu);
            if (fild) {
                return fild;
            }
        }
        return null;
    }
    getNearParent(path, menu) {
        if (!menu.children || menu.children.length < 1) {
            return null;
        }
        const fildChild = menu.children.find(item => item.path === path);
        if (fildChild) {
            return menu;
        }
        for (const child of menu.children) {
            const find = this.getNearParent(path, child);
            if (find) {
                return find;
            }
        }
        return null;
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    handScroll() {
        if (!this.autoHideHeader) {
            return;
        }
        const scrollTop = document.body.scrollTop + document.documentElement.scrollTop;
        if (!this.ticking) {
            requestAnimationFrame(() => {
                if (this.oldScrollTop > scrollTop) {
                    this.visible = true;
                }
                else if (scrollTop > 300 && this.visible) {
                    this.visible = false;
                }
                else if (scrollTop < 300 && !this.visible) {
                    this.visible = true;
                }
                this.oldScrollTop = scrollTop;
                this.ticking = false;
            });
        }
    }
    getPaddingLeft() {
        // If it is a fix menu, calculate padding, don't need padding in phone mode
        const hasLeftPadding = this.fixSiderbar && this.layout !== 'topmenu' && !this.isMobile;
        if (hasLeftPadding) {
            return (this.collapsed ? '80' : this.siderWidth) + 'px';
        }
        return undefined;
    }
    getHeadWidth() {
        if (this.isMobile || !this.fixedHeader || this.layout === 'topmenu') {
            return '100%';
        }
        return this.collapsed ? 'calc(100% - 80px)' : `calc(100% - ${this.siderWidth}px)`;
    }
    onDrawerClose(event) {
        this.collapsed = !this.collapsed;
    }
    getContentPaddingTop() {
        if (this.fixedHeader && this.reuseTab) {
            return "110px";
        }
        if (!this.fixedHeader) {
            return '0px';
        }
        else {
            return '';
        }
    }
    isNonEmptyString(value) {
        return typeof value === 'string' && value !== '';
    }
    isTemplateRef(value) {
        return value instanceof TemplateRef;
    }
}
BasicLayoutComponent.ɵfac = function BasicLayoutComponent_Factory(t) { return new (t || BasicLayoutComponent)(ɵɵdirectiveInject(BreakpointObserver), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(Router)); };
BasicLayoutComponent.ɵcmp = ɵɵdefineComponent({ type: BasicLayoutComponent, selectors: [["pro-basic-layout"]], hostBindings: function BasicLayoutComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("scroll", function BasicLayoutComponent_scroll_HostBindingHandler() { return ctx.handScroll(); }, false, ɵɵresolveWindow);
    } }, inputs: { title: "title", logo: "logo", menuHeaderRender: "menuHeaderRender", mode: "mode", layout: "layout", contentWidth: "contentWidth", navTheme: "navTheme", fixedHeader: "fixedHeader", fixSiderbar: "fixSiderbar", autoHideHeader: "autoHideHeader", menu: "menu", siderWidth: "siderWidth", collapsed: "collapsed", headerRender: "headerRender", rightContentRender: "rightContentRender", collapsedButtonRender: "collapsedButtonRender", footerRender: "footerRender", links: "links", copyright: "copyright", reuseTab: "reuseTab", menuData: "menuData" }, outputs: { onMenuHeaderClick: "onMenuHeaderClick", onCollapse: "onCollapse" }, exportAs: ["proBasicLayout"], features: [ɵɵNgOnChangesFeature], ngContentSelectors: _c8, decls: 10, vars: 10, consts: [[3, "ngClass"], [4, "ngIf"], [3, "ngStyle"], [3, "ngStyle", "ngClass", 4, "ngIf"], [1, "ant-pro-basicLayout-content"], ["style", "padding: 0", 4, "ngIf"], ["siderMenuTemplate", ""], ["class", "ant-pro-sider-menu", 3, "nzCollapsible", "nzTrigger", "nzCollapsed", "nzBreakpoint", "nzWidth", "nzTheme", "ngClass", "nzCollapsedChange", 4, "ngIf"], [3, "nzClosable", "nzVisible", "nzPlacement", "nzWrapClassName", "nzWidth", "ngStyle", "nzOnClose", 4, "ngIf"], [1, "ant-pro-sider-menu", 3, "nzCollapsible", "nzTrigger", "nzCollapsed", "nzBreakpoint", "nzWidth", "nzTheme", "ngClass", "nzCollapsedChange"], [4, "ngTemplateOutlet"], [3, "nzClosable", "nzVisible", "nzPlacement", "nzWrapClassName", "nzWidth", "ngStyle", "nzOnClose"], [2, "display", "block", 3, "nzCollapsible", "nzTrigger", "nzCollapsed", "nzWidth", "nzTheme", "ngClass"], [3, "ngStyle", "ngClass"], ["defaultDomTemplate", ""], [4, "ngIf", "ngIfElse"], ["globalHeader", ""], ["pro-top-nav-header", "", 3, "theme", "menuData", "logo", "title", "contentWidth", "rightContentRender", "menuHeaderRender", "onMenuHeaderClick"], ["pro-global-header", "", 3, "isMobile", "collapsed", "logo", "collapsedButtonRender", "rightContentRender", "collapsedChange"], [3, "allowRefresh", "debug"], [2, "padding", "0"], ["globalFooter", ""], ["pro-global-footer", "", 3, "links", "copyright"], ["id", "logo", 1, "ant-pro-sider-menu-logo", 3, "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["defaultHeaderTemplate", ""], [3, "menuData", "mode", "theme", "openKeys", "selectedKey", "collapsed", "openChange"], ["href", "/"], [3, "ngSwitch"], [3, "ngTemplateOutlet", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [3, "ngTemplateOutlet"], ["alt", "logo", 3, "src"]], template: function BasicLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "nz-layout");
        ɵɵtemplate(2, BasicLayoutComponent_ng_container_2_Template, 3, 2, "ng-container", 1);
        ɵɵelementStart(3, "nz-layout", 2);
        ɵɵtemplate(4, BasicLayoutComponent_nz_header_4_Template, 5, 8, "nz-header", 3);
        ɵɵelementStart(5, "nz-content", 4);
        ɵɵprojection(6);
        ɵɵelementEnd();
        ɵɵtemplate(7, BasicLayoutComponent_nz_footer_7_Template, 4, 2, "nz-footer", 5);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(8, BasicLayoutComponent_ng_template_8_Template, 5, 14, "ng-template", null, 6, ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        ɵɵproperty("ngClass", ɵɵpureFunction0(7, _c6));
        ɵɵadvance(2);
        ɵɵproperty("ngIf", !(ctx.layout === "topmenu" && !ctx.isMobile));
        ɵɵadvance(1);
        ɵɵproperty("ngStyle", ɵɵpureFunction1(8, _c7, ctx.getPaddingLeft()));
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.visible);
        ɵɵadvance(1);
        ɵɵstyleProp("padding-top", ctx.getContentPaddingTop());
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.footerRender !== false);
    } }, directives: [NgClass, NzLayoutComponent, NgIf, NgStyle, NzContentComponent, NzSiderComponent, NgTemplateOutlet, NzDrawerComponent, NzHeaderComponent, TopNavHeaderComponent, GlobalHeaderComponent, ReuseTabComponent, NzFooterComponent, GlobalFooterComponent, BaseMenuComponent, NgSwitch, NgSwitchCase], styles: [".ant-pro-basicLayout-content{margin:24px;padding-top:64px}.basicLayout .ant-layout{transition:all .2s}", ".ant-pro-fixed-header{position:fixed;top:0;right:0;z-index:9;width:100%;transition:width .2s}"], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean()
], BasicLayoutComponent.prototype, "fixedHeader", void 0);
__decorate([
    InputBoolean()
], BasicLayoutComponent.prototype, "fixSiderbar", void 0);
__decorate([
    InputBoolean()
], BasicLayoutComponent.prototype, "autoHideHeader", void 0);
__decorate([
    InputNumber()
], BasicLayoutComponent.prototype, "siderWidth", void 0);
__decorate([
    InputBoolean()
], BasicLayoutComponent.prototype, "collapsed", void 0);
__decorate([
    InputBoolean()
], BasicLayoutComponent.prototype, "reuseTab", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(BasicLayoutComponent, [{
        type: Component,
        args: [{
                selector: 'pro-basic-layout',
                templateUrl: 'basic-layout.component.html',
                styleUrls: ['basic-layout.component.less', 'header.component.less'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                exportAs: 'proBasicLayout',
                preserveWhitespaces: false
            }]
    }], function () { return [{ type: BreakpointObserver }, { type: ChangeDetectorRef }, { type: ActivatedRoute }, { type: Router }]; }, { title: [{
            type: Input
        }], logo: [{
            type: Input
        }], menuHeaderRender: [{
            type: Input
        }], onMenuHeaderClick: [{
            type: Output
        }], mode: [{
            type: Input
        }], layout: [{
            type: Input
        }], contentWidth: [{
            type: Input
        }], navTheme: [{
            type: Input
        }], fixedHeader: [{
            type: Input
        }], fixSiderbar: [{
            type: Input
        }], autoHideHeader: [{
            type: Input
        }], menu: [{
            type: Input
        }], siderWidth: [{
            type: Input
        }], collapsed: [{
            type: Input
        }], onCollapse: [{
            type: Output
        }], headerRender: [{
            type: Input
        }], rightContentRender: [{
            type: Input
        }], collapsedButtonRender: [{
            type: Input
        }], footerRender: [{
            type: Input
        }], links: [{
            type: Input
        }], copyright: [{
            type: Input
        }], reuseTab: [{
            type: Input
        }], menuData: [{
            type: Input
        }], handScroll: [{
            type: HostListener,
            args: ['window:scroll']
        }] }); })();

const _c0$1 = ["contentTemplate"];
function PageHeaderWrapperComponent_ng_container_3_1_ng_template_0_Template(rf, ctx) { }
function PageHeaderWrapperComponent_ng_container_3_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, PageHeaderWrapperComponent_ng_container_3_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function PageHeaderWrapperComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PageHeaderWrapperComponent_ng_container_3_1_Template, 1, 0, undefined, 6);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.pageHeaderRender);
} }
function PageHeaderWrapperComponent_ng_template_4_nz_breadcrumb_item_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-breadcrumb-item");
    ɵɵelementStart(1, "a", 11);
    ɵɵlistener("click", function PageHeaderWrapperComponent_ng_template_4_nz_breadcrumb_item_2_Template_a_click_1_listener($event) { ɵɵrestoreView(_r13); const breadcrumb_r11 = ctx.$implicit; const ctx_r12 = ɵɵnextContext(2); return ctx_r12.navigate(breadcrumb_r11.path, $event); });
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const breadcrumb_r11 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵattribute("href", breadcrumb_r11.path, ɵɵsanitizeUrl);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", breadcrumb_r11.name, " ");
} }
function PageHeaderWrapperComponent_ng_template_4_nz_page_header_tags_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PageHeaderWrapperComponent_ng_template_4_nz_page_header_tags_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "nz-page-header-tags");
    ɵɵtemplate(1, PageHeaderWrapperComponent_ng_template_4_nz_page_header_tags_3_ng_container_1_Template, 1, 0, "ng-container", 6);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r7.tags);
} }
function PageHeaderWrapperComponent_ng_template_4_nz_page_header_extra_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0, 15);
} if (rf & 2) {
    const ctx_r15 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r15.extra);
} }
function PageHeaderWrapperComponent_ng_template_4_nz_page_header_extra_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r16 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r16.extra);
} }
function PageHeaderWrapperComponent_ng_template_4_nz_page_header_extra_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "nz-page-header-extra");
    ɵɵelementContainerStart(1, 12);
    ɵɵtemplate(2, PageHeaderWrapperComponent_ng_template_4_nz_page_header_extra_4_ng_container_2_Template, 1, 1, "ng-container", 13);
    ɵɵtemplate(3, PageHeaderWrapperComponent_ng_template_4_nz_page_header_extra_4_ng_container_3_Template, 2, 1, "ng-container", 14);
    ɵɵelementContainerEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitch", true);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", ctx_r8.isTemplateRef(ctx_r8.extra));
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", ctx_r8.isNonEmptyString(ctx_r8.extra));
} }
function PageHeaderWrapperComponent_ng_template_4_nz_page_header_content_5_div_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0, 15);
} if (rf & 2) {
    const ctx_r19 = ɵɵnextContext(4);
    ɵɵproperty("ngTemplateOutlet", ctx_r19.content);
} }
function PageHeaderWrapperComponent_ng_template_4_nz_page_header_content_5_div_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r20 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r20.content);
} }
function PageHeaderWrapperComponent_ng_template_4_nz_page_header_content_5_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelementContainerStart(1, 12);
    ɵɵtemplate(2, PageHeaderWrapperComponent_ng_template_4_nz_page_header_content_5_div_4_ng_container_2_Template, 1, 1, "ng-container", 13);
    ɵɵtemplate(3, PageHeaderWrapperComponent_ng_template_4_nz_page_header_content_5_div_4_ng_container_3_Template, 2, 1, "ng-container", 14);
    ɵɵelementContainerEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r17 = ɵɵnextContext(3);
    ɵɵclassMapInterpolate1("", ctx_r17.prefixedClassName, "-content");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitch", true);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", ctx_r17.isTemplateRef(ctx_r17.content));
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", ctx_r17.isNonEmptyString(ctx_r17.content));
} }
function PageHeaderWrapperComponent_ng_template_4_nz_page_header_content_5_div_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0, 15);
} if (rf & 2) {
    const ctx_r21 = ɵɵnextContext(4);
    ɵɵproperty("ngTemplateOutlet", ctx_r21.extraContent);
} }
function PageHeaderWrapperComponent_ng_template_4_nz_page_header_content_5_div_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r22 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r22.extraContent);
} }
function PageHeaderWrapperComponent_ng_template_4_nz_page_header_content_5_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelementContainerStart(1, 12);
    ɵɵtemplate(2, PageHeaderWrapperComponent_ng_template_4_nz_page_header_content_5_div_5_ng_container_2_Template, 1, 1, "ng-container", 13);
    ɵɵtemplate(3, PageHeaderWrapperComponent_ng_template_4_nz_page_header_content_5_div_5_ng_container_3_Template, 2, 1, "ng-container", 14);
    ɵɵelementContainerEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r18 = ɵɵnextContext(3);
    ɵɵclassMapInterpolate1("", ctx_r18.prefixedClassName, "-extraContent");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitch", true);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", ctx_r18.isTemplateRef(ctx_r18.extraContent));
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", ctx_r18.isNonEmptyString(ctx_r18.extraContent));
} }
function PageHeaderWrapperComponent_ng_template_4_nz_page_header_content_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "nz-page-header-content");
    ɵɵelementStart(1, "div");
    ɵɵelementStart(2, "div");
    ɵɵelementStart(3, "div");
    ɵɵtemplate(4, PageHeaderWrapperComponent_ng_template_4_nz_page_header_content_5_div_4_Template, 4, 6, "div", 16);
    ɵɵtemplate(5, PageHeaderWrapperComponent_ng_template_4_nz_page_header_content_5_div_5_Template, 4, 6, "div", 16);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r9.prefixedClassName, "-detail");
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r9.prefixedClassName, "-main");
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r9.prefixedClassName, "-row");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r9.content);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r9.extraContent);
} }
function PageHeaderWrapperComponent_ng_template_4_nz_page_header_footer_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "nz-tab", 18);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const tab_r24 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("nzTitle", tab_r24.tab);
} }
function PageHeaderWrapperComponent_ng_template_4_nz_page_header_footer_6_Template(rf, ctx) { if (rf & 1) {
    const _r26 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-page-header-footer");
    ɵɵelementStart(1, "nz-tabset", 17);
    ɵɵlistener("nzSelectChange", function PageHeaderWrapperComponent_ng_template_4_nz_page_header_footer_6_Template_nz_tabset_nzSelectChange_1_listener($event) { ɵɵrestoreView(_r26); const ctx_r25 = ɵɵnextContext(2); return ctx_r25.selectChange($event); });
    ɵɵtemplate(2, PageHeaderWrapperComponent_ng_template_4_nz_page_header_footer_6_ng_container_2_Template, 2, 1, "ng-container", 9);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r10.prefixedClassName, "-tabs");
    ɵɵproperty("nzSelectedIndex", ctx_r10.getSelectedIndex())("nzTabBarExtraContent", ctx_r10.tabBarExtraContent);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r10.tabList);
} }
function PageHeaderWrapperComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r28 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-page-header", 7);
    ɵɵlistener("nzBack", function PageHeaderWrapperComponent_ng_template_4_Template_nz_page_header_nzBack_0_listener($event) { ɵɵrestoreView(_r28); const ctx_r27 = ɵɵnextContext(); return ctx_r27.back.emit($event); });
    ɵɵelementStart(1, "nz-breadcrumb", 8);
    ɵɵtemplate(2, PageHeaderWrapperComponent_ng_template_4_nz_breadcrumb_item_2_Template, 3, 2, "nz-breadcrumb-item", 9);
    ɵɵelementEnd();
    ɵɵtemplate(3, PageHeaderWrapperComponent_ng_template_4_nz_page_header_tags_3_Template, 2, 1, "nz-page-header-tags", 10);
    ɵɵtemplate(4, PageHeaderWrapperComponent_ng_template_4_nz_page_header_extra_4_Template, 4, 3, "nz-page-header-extra", 10);
    ɵɵtemplate(5, PageHeaderWrapperComponent_ng_template_4_nz_page_header_content_5_Template, 6, 11, "nz-page-header-content", 10);
    ɵɵtemplate(6, PageHeaderWrapperComponent_ng_template_4_nz_page_header_footer_6_Template, 3, 6, "nz-page-header-footer", 10);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("nzTitle", ctx_r2.title)("nzGhost", ctx_r2.ghost)("nzSubtitle", ctx_r2.subtitle)("nzBackIcon", ctx_r2.backIcon);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r2.breadcrumbs);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.tags);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.extra);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.content || ctx_r2.extraContent);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.tabList && ctx_r2.tabList.length);
} }
const _c1$1 = ["*"];
const ROUTE_DATA_BREADCRUMB_NAME = 'name';
const DefaultLocation = {
    name: '首页',
    params: {},
    path: '/'
};
class PageHeaderWrapperComponent {
    constructor(renderer, ngZone, cdr, injector) {
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.cdr = cdr;
        this.injector = injector;
        // nz-page-header原有属性
        this.ghost = true;
        this.backIcon = null;
        this.back = new EventEmitter();
        this.location = DefaultLocation; // 首页
        this.onTabChange = new EventEmitter();
        this.prefixedClassName = 'ant-pro-page-header-wrap';
        this.breadcrumbs = [];
        this.destroy$ = new Subject();
    }
    ngOnInit() {
        if (true) {
            this.registerRouterChange();
        }
        if (!this.title) {
            this.title = this.breadcrumbs[this.breadcrumbs.length - 1].name;
        }
    }
    ngAfterViewInit() {
        this.checkContent();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    checkContent() {
        if (this.isEmpty(this.contentTemplate.nativeElement)) {
            this.renderer.setStyle(this.contentTemplate.nativeElement, 'display', 'none');
        }
        else {
            this.renderer.removeStyle(this.contentTemplate.nativeElement, 'display');
        }
    }
    navigate(path, e) {
        e.preventDefault();
        this.ngZone
            .run(() => this.injector
            .get(Router)
            .navigateByUrl(path)
            .then())
            .then();
    }
    registerRouterChange() {
        try {
            const router = this.injector.get(Router);
            const activatedRoute = this.injector.get(ActivatedRoute);
            router.events
                .pipe(filter(e => e instanceof NavigationEnd), takeUntil(this.destroy$), startWith(true) // Trigger initial render.
            )
                .subscribe(() => {
                this.breadcrumbs = this.getBreadcrumbs(activatedRoute.root, '', [this.location]);
                this.cdr.markForCheck();
            });
        }
        catch (e) {
            throw new Error(`You should import RouterModule.`);
        }
    }
    getBreadcrumbs(route, path = '', breadcrumbs = []) {
        const children = route.children;
        // If there's no sub root, then stop the recurse and returns the generated breadcrumbs.
        if (children.length === 0) {
            return breadcrumbs;
        }
        for (const child of children) {
            if (child.outlet === PRIMARY_OUTLET) {
                // Only parse components in primary router-outlet (in another word, router-outlet without a specific name).
                // Parse this layer and generate a breadcrumb item.
                const routeURL = child.snapshot.url.map(segment => segment.path).join('/');
                const nextUrl = path + `/${routeURL}`;
                const breadcrumbName = child.snapshot.data[ROUTE_DATA_BREADCRUMB_NAME];
                // If have data, go to generate a breadcrumb for it.
                if (routeURL && breadcrumbName) {
                    const breadcrumb = {
                        name: breadcrumbName,
                        params: child.snapshot.params,
                        path: nextUrl
                    };
                    breadcrumbs.push(breadcrumb);
                }
                return this.getBreadcrumbs(child, nextUrl, breadcrumbs);
            }
        }
    }
    selectChange(event) {
        const selectedTab = this.tabList[event.index];
        this.onTabChange.emit(selectedTab);
    }
    getSelectedIndex() {
        const idx = this.tabList.findIndex(w => w.key === this.tabActiveKey);
        if (idx !== -1) {
            return idx;
        }
        else {
            return 0;
        }
    }
    isEmpty(element) {
        const nodes = element.childNodes;
        for (let i = 0; i < nodes.length; i++) {
            if (this.filterNotEmptyNode(nodes.item(i))) {
                return false;
            }
        }
        return true;
    }
    filterNotEmptyNode(node) {
        if (node) {
            if (node.nodeType === 1 && node.outerHTML.toString().trim().length !== 0) {
                // ELEMENT_NODE
                return node;
            }
            else if (node.nodeType === 3 && node.textContent.toString().trim().length !== 0) {
                // TEXT_NODE
                return node;
            }
            return null;
        }
        return null;
    }
    isNonEmptyString(value) {
        return typeof value === 'string' && value !== '';
    }
    isTemplateRef(value) {
        return value instanceof TemplateRef;
    }
}
PageHeaderWrapperComponent.ɵfac = function PageHeaderWrapperComponent_Factory(t) { return new (t || PageHeaderWrapperComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Injector)); };
PageHeaderWrapperComponent.ɵcmp = ɵɵdefineComponent({ type: PageHeaderWrapperComponent, selectors: [["pro-page-header-wrapper"]], viewQuery: function PageHeaderWrapperComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$1, 3);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentTemplate = _t.first);
    } }, inputs: { ghost: "ghost", title: "title", subtitle: "subtitle", backIcon: "backIcon", extra: "extra", tags: "tags", content: "content", extraContent: "extraContent", pageHeaderRender: "pageHeaderRender", location: "location", tabList: "tabList", tabActiveKey: "tabActiveKey", tabBarExtraContent: "tabBarExtraContent", contentWidth: "contentWidth" }, outputs: { back: "back", onTabChange: "onTabChange" }, exportAs: ["proPageHeaderWrapper"], ngContentSelectors: _c1$1, decls: 10, vars: 10, consts: [[2, "margin", "-24px -24px 0"], [3, "contentWidth"], [4, "ngIf", "ngIfElse"], ["defaultPageHeader", ""], [3, "cdkObserveContent"], ["contentTemplate", ""], [4, "ngTemplateOutlet"], [3, "nzTitle", "nzGhost", "nzSubtitle", "nzBackIcon", "nzBack"], ["nz-page-header-breadcrumb", ""], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "click"], [3, "ngSwitch"], [3, "ngTemplateOutlet", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [3, "ngTemplateOutlet"], [3, "class", 4, "ngIf"], [3, "nzSelectedIndex", "nzTabBarExtraContent", "nzSelectChange"], [3, "nzTitle"]], template: function PageHeaderWrapperComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div");
        ɵɵelementStart(2, "pro-grid-content", 1);
        ɵɵtemplate(3, PageHeaderWrapperComponent_ng_container_3_Template, 2, 1, "ng-container", 2);
        ɵɵtemplate(4, PageHeaderWrapperComponent_ng_template_4_Template, 7, 9, "ng-template", null, 3, ɵɵtemplateRefExtractor);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(6, "pro-grid-content", 1);
        ɵɵelementStart(7, "div", 4, 5);
        ɵɵlistener("cdkObserveContent", function PageHeaderWrapperComponent_Template_div_cdkObserveContent_7_listener() { return ctx.checkContent(); });
        ɵɵprojection(9);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r1 = ɵɵreference(5);
        ɵɵadvance(1);
        ɵɵclassMapInterpolate1("", ctx.prefixedClassName, "-page-header-warp");
        ɵɵadvance(1);
        ɵɵproperty("contentWidth", ctx.contentWidth);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.pageHeaderRender)("ngIfElse", _r1);
        ɵɵadvance(3);
        ɵɵproperty("contentWidth", ctx.contentWidth);
        ɵɵadvance(1);
        ɵɵclassMapInterpolate1("", ctx.prefixedClassName, "-children-content");
    } }, directives: [GridContentComponent, NgIf, NgTemplateOutlet, NzPageHeaderComponent, NzBreadCrumbComponent, NzPageHeaderBreadcrumbDirective, NgForOf, NzBreadCrumbItemComponent, NzPageHeaderTagDirective, NzPageHeaderExtraDirective, NgSwitch, NgSwitchCase, NzPageHeaderContentDirective, NzPageHeaderFooterDirective, NzTabSetComponent, NzTabComponent], styles: [".ant-pro-page-header-wrap-children-content{margin:24px 24px 0}.ant-pro-page-header-wrap-page-header-warp{background-color:#fff}.ant-pro-page-header-wrap-main .ant-pro-page-header-wrap-detail{display:flex}.ant-pro-page-header-wrap-main .ant-pro-page-header-wrap-row{display:flex;width:100%}.ant-pro-page-header-wrap-main .ant-pro-page-header-wrap-title-content{margin-bottom:16px}.ant-pro-page-header-wrap-main .ant-pro-page-header-wrap-content,.ant-pro-page-header-wrap-main .ant-pro-page-header-wrap-title{flex:auto}.ant-pro-page-header-wrap-main .ant-pro-page-header-wrap-extraContent,.ant-pro-page-header-wrap-main .ant-pro-page-header-wrap-main{flex:0 1 auto}.ant-pro-page-header-wrap-main .ant-pro-page-header-wrap-main{width:100%}.ant-pro-page-header-wrap-main .ant-pro-page-header-wrap-logo,.ant-pro-page-header-wrap-main .ant-pro-page-header-wrap-title{margin-bottom:16px}.ant-pro-page-header-wrap-main .ant-pro-page-header-wrap-extraContent{min-width:242px;margin-left:88px;text-align:right}@media screen and (max-width:1200px){.ant-pro-page-header-wrap-main .ant-pro-page-header-wrap-extraContent{margin-left:44px}}@media screen and (max-width:992px){.ant-pro-page-header-wrap-main .ant-pro-page-header-wrap-extraContent{margin-left:20px}}@media screen and (max-width:768px){.ant-pro-page-header-wrap-main .ant-pro-page-header-wrap-row{display:block}.ant-pro-page-header-wrap-main .ant-pro-page-header-wrap-action,.ant-pro-page-header-wrap-main .ant-pro-page-header-wrap-extraContent{margin-left:0;text-align:left}}@media screen and (max-width:576px){.ant-pro-page-header-wrap-detail{display:block}.ant-pro-page-header-wrap-extraContent{margin-left:0}}"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(PageHeaderWrapperComponent, [{
        type: Component,
        args: [{
                selector: 'pro-page-header-wrapper',
                templateUrl: 'page-header-wrapper.component.html',
                styleUrls: ['page-header-wrapper.component.less'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                exportAs: 'proPageHeaderWrapper',
                preserveWhitespaces: false
            }]
    }], function () { return [{ type: Renderer2 }, { type: NgZone }, { type: ChangeDetectorRef }, { type: Injector }]; }, { ghost: [{
            type: Input
        }], title: [{
            type: Input
        }], subtitle: [{
            type: Input
        }], backIcon: [{
            type: Input
        }], back: [{
            type: Output
        }], extra: [{
            type: Input
        }], tags: [{
            type: Input
        }], content: [{
            type: Input
        }], extraContent: [{
            type: Input
        }], pageHeaderRender: [{
            type: Input
        }], location: [{
            type: Input
        }], tabList: [{
            type: Input
        }], tabActiveKey: [{
            type: Input
        }], tabBarExtraContent: [{
            type: Input
        }], onTabChange: [{
            type: Output
        }], contentWidth: [{
            type: Input
        }], contentTemplate: [{
            type: ViewChild,
            args: ['contentTemplate', { static: true }]
        }] }); })();

function BlockCheckboxComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 1);
    ɵɵelementStart(2, "div", 2);
    ɵɵlistener("click", function BlockCheckboxComponent_ng_container_0_Template_div_click_2_listener() { ɵɵrestoreView(_r3); const item_r1 = ctx.$implicit; const ctx_r2 = ɵɵnextContext(); return ctx_r2.select(item_r1.key); });
    ɵɵelement(3, "img", 3);
    ɵɵelementStart(4, "div");
    ɵɵelement(5, "i", 4);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("nzTooltipTitle", item_r1.title);
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r0.baseClassName, "-item");
    ɵɵadvance(1);
    ɵɵproperty("src", item_r1.url, ɵɵsanitizeUrl);
    ɵɵattribute("alt", item_r1.key);
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r0.baseClassName, "-selectIcon");
    ɵɵstyleProp("display", ctx_r0.value === item_r1.key ? "block" : "none");
} }
class BlockCheckboxComponent {
    constructor() {
        this.list = [];
        this.onChange = new EventEmitter();
        this.baseClassName = 'ant-pro-setting-drawer-block-checbox';
    }
    ngOnInit() {
    }
    select(key) {
        this.value = key;
        this.onChange.emit(this.value);
    }
}
BlockCheckboxComponent.ɵfac = function BlockCheckboxComponent_Factory(t) { return new (t || BlockCheckboxComponent)(); };
BlockCheckboxComponent.ɵcmp = ɵɵdefineComponent({ type: BlockCheckboxComponent, selectors: [["pro-block-checkbox"]], hostVars: 2, hostBindings: function BlockCheckboxComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵclassMap(ctx.baseClassName);
    } }, inputs: { value: "value", list: "list" }, outputs: { onChange: "onChange" }, exportAs: ["proBlockCheckbox"], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], ["nz-tooltip", "", 3, "nzTooltipTitle"], [3, "click"], [3, "src"], ["nz-icon", "", "nzType", "check"]], template: function BlockCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, BlockCheckboxComponent_ng_container_0_Template, 6, 11, "ng-container", 0);
    } if (rf & 2) {
        ɵɵproperty("ngForOf", ctx.list);
    } }, directives: [NgForOf, NzTooltipDirective, ɵNzTransitionPatchDirective, NzIconDirective], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(BlockCheckboxComponent, [{
        type: Component,
        args: [{
                selector: 'pro-block-checkbox',
                templateUrl: 'block-checkbox.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                exportAs: 'proBlockCheckbox',
                preserveWhitespaces: false,
                host: {
                    '[class]': `baseClassName`,
                }
            }]
    }], function () { return []; }, { value: [{
            type: Input
        }], list: [{
            type: Input
        }], onChange: [{
            type: Output
        }] }); })();

function ThemeColorComponent_ng_container_4_i_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 6);
} }
function ThemeColorComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 4);
    ɵɵlistener("click", function ThemeColorComponent_ng_container_4_Template_div_click_1_listener() { ɵɵrestoreView(_r4); const color_r1 = ctx.$implicit; const ctx_r3 = ɵɵnextContext(); return ctx_r3.select(color_r1.color); });
    ɵɵtemplate(2, ThemeColorComponent_ng_container_4_i_2_Template, 1, 0, "i", 5);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const color_r1 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵstyleProp("background-color", color_r1.color);
    ɵɵproperty("nzTooltipTitle", color_r1.name);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", color_r1.color == ctx_r0.value);
} }
class ThemeColorComponent {
    constructor() {
        this.onChange = new EventEmitter();
    }
    ngOnInit() {
        this.colorList = this.colors || [
            {
                key: 'dust',
                color: '#F5222D',
                name: '薄暮'
            },
            {
                key: 'volcano',
                color: '#FA541C',
                name: '火山'
            },
            {
                key: 'sunset',
                color: '#FAAD14',
                name: '日暮'
            },
            {
                key: 'cyan',
                color: '#13C2C2',
                name: '明青'
            },
            {
                key: 'green',
                color: '#52C41A',
                name: '极光绿'
            },
            {
                key: 'daybreak',
                color: '#1890FF',
                name: '拂晓蓝（默认）'
            },
            {
                key: 'geekblue',
                color: '#2F54EB',
                name: '极客蓝'
            },
            {
                key: 'purple',
                color: '#722ED1',
                name: '酱紫'
            },
        ];
    }
    select(key) {
        this.value = key;
        this.onChange.emit(this.value);
    }
}
ThemeColorComponent.ɵfac = function ThemeColorComponent_Factory(t) { return new (t || ThemeColorComponent)(); };
ThemeColorComponent.ɵcmp = ɵɵdefineComponent({ type: ThemeColorComponent, selectors: [["pro-theme-color"]], inputs: { colors: "colors", title: "title", value: "value" }, outputs: { onChange: "onChange" }, exportAs: ["proThemeColor"], decls: 5, vars: 2, consts: [[1, "theme-color"], [1, "theme-color-title"], [1, "theme-color-content"], [4, "ngFor", "ngForOf"], ["nz-tooltip", "", 1, "theme-color-block", 3, "nzTooltipTitle", "click"], ["nz-icon", "", "nzType", "check", 4, "ngIf"], ["nz-icon", "", "nzType", "check"]], template: function ThemeColorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "h3", 1);
        ɵɵtext(2);
        ɵɵelementEnd();
        ɵɵelementStart(3, "div", 2);
        ɵɵtemplate(4, ThemeColorComponent_ng_container_4_Template, 3, 4, "ng-container", 3);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵtextInterpolate(ctx.title);
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.colorList);
    } }, directives: [NgForOf, NzTooltipDirective, NgIf, ɵNzTransitionPatchDirective, NzIconDirective], styles: [".ant-pro-setting-drawer-content{position:relative;min-height:100%;background:#fff}.ant-pro-setting-drawer-content .ant-list-item span{flex:1}.ant-pro-setting-drawer-block-checbox{display:flex;background:#fff}.ant-pro-setting-drawer-block-checbox-item{position:relative;margin-right:16px;border-radius:2px;cursor:pointer}.ant-pro-setting-drawer-block-checbox-item img{width:48px}.ant-pro-setting-drawer-block-checbox-selectIcon{position:absolute;top:0;right:0;width:100%;height:100%;padding-top:15px;padding-left:24px;color:#1890ff;font-weight:700;font-size:14px}.ant-pro-setting-drawer-color_block{display:inline-block;width:38px;height:22px;margin:4px 12px 4px 4px;vertical-align:middle;border-radius:4px;cursor:pointer}.ant-pro-setting-drawer-title{margin-bottom:12px;color:rgba(0,0,0,.85);font-size:14px;line-height:22px}.ant-pro-setting-drawer-handle{position:absolute;top:240px;right:300px;z-index:0;display:flex;align-items:center;justify-content:center;width:48px;height:48px;font-size:16px;text-align:center;background:#1890ff;border-radius:4px 0 0 4px;cursor:pointer;pointer-events:auto}.ant-pro-setting-drawer-production-hint{margin-top:16px;font-size:12px}.ant-pro-setting-drawer-content .theme-color{margin-top:24px;overflow:hidden}.ant-pro-setting-drawer-content .theme-color .theme-color-title{margin-bottom:12px;font-size:14px;line-height:22px}.ant-pro-setting-drawer-content .theme-color .theme-color-block{float:left;width:20px;height:20px;margin-right:8px;color:#fff;font-weight:700;text-align:center;border-radius:2px;cursor:pointer}"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ThemeColorComponent, [{
        type: Component,
        args: [{
                selector: 'pro-theme-color',
                templateUrl: 'theme-color.component.html',
                styleUrls: ['theme-color.component.less'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                exportAs: 'proThemeColor',
                preserveWhitespaces: false,
            }]
    }], function () { return []; }, { colors: [{
            type: Input
        }], title: [{
            type: Input
        }], value: [{
            type: Input
        }], onChange: [{
            type: Output
        }] }); })();

const _c0 = ["renderItemTemplate"];
const _c1 = ["contentWidthActionTemplate"];
const _c2 = ["fixedHeaderActionTemplate"];
const _c3 = ["hideHeaderActionTemplate"];
const _c4 = ["fixedSidebarActionTemplate"];
const _c5 = ["colorWeakActionTemplate"];
function SettingDrawerComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 16);
    ɵɵelementStart(1, "nz-list-item", 17);
    ɵɵelementStart(2, "span");
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    ɵɵproperty("nzTooltipTitle", item_r14.disabled ? item_r14.disabledReason : "")("nzTooltipPlacement", "left");
    ɵɵadvance(1);
    ɵɵproperty("nzActions", item_r14.action);
    ɵɵadvance(1);
    ɵɵstyleProp("opacity", item_r14.disabled ? 0.5 : 1);
    ɵɵadvance(1);
    ɵɵtextInterpolate(item_r14.title);
} }
function SettingDrawerComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 16);
    ɵɵelementStart(1, "nz-list-item", 17);
    ɵɵelementStart(2, "span");
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    ɵɵproperty("nzTooltipTitle", item_r15.disabled ? item_r15.disabledReason : "")("nzTooltipPlacement", "left");
    ɵɵadvance(1);
    ɵɵproperty("nzActions", item_r15.action);
    ɵɵadvance(1);
    ɵɵstyleProp("opacity", item_r15.disabled ? 0.5 : 1);
    ɵɵadvance(1);
    ɵɵtextInterpolate(item_r15.title);
} }
function SettingDrawerComponent_ng_template_25_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "nz-option", 21);
} if (rf & 2) {
    ɵɵproperty("nzLabel", "\u5B9A\u5BBD");
} }
function SettingDrawerComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    const _r18 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-select", 18);
    ɵɵlistener("ngModelChange", function SettingDrawerComponent_ng_template_25_Template_nz_select_ngModelChange_0_listener($event) { ɵɵrestoreView(_r18); const ctx_r17 = ɵɵnextContext(); return ctx_r17.changeSetting("contentWidth", $event); });
    ɵɵtemplate(1, SettingDrawerComponent_ng_template_25_nz_option_1_Template, 1, 1, "nz-option", 19);
    ɵɵelement(2, "nz-option", 20);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵproperty("ngModel", ctx_r5.settings.contentWidth);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r5.settings.layout !== "sidemenu");
    ɵɵadvance(1);
    ɵɵproperty("nzLabel", "\u6D41\u5F0F");
} }
function SettingDrawerComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    const _r20 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-switch", 22);
    ɵɵlistener("ngModelChange", function SettingDrawerComponent_ng_template_27_Template_nz_switch_ngModelChange_0_listener($event) { ɵɵrestoreView(_r20); const ctx_r19 = ɵɵnextContext(); return !!(ctx_r19.settings.fixedHeader = $event); })("ngModelChange", function SettingDrawerComponent_ng_template_27_Template_nz_switch_ngModelChange_0_listener($event) { ɵɵrestoreView(_r20); const ctx_r21 = ɵɵnextContext(); return ctx_r21.changeSetting("fixedHeader", $event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵɵnextContext();
    ɵɵproperty("ngModel", !!ctx_r7.settings.fixedHeader);
} }
function SettingDrawerComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    const _r23 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-switch", 23);
    ɵɵlistener("ngModelChange", function SettingDrawerComponent_ng_template_29_Template_nz_switch_ngModelChange_0_listener($event) { ɵɵrestoreView(_r23); const ctx_r22 = ɵɵnextContext(); return !!(ctx_r22.settings.autoHideHeader = $event); })("ngModelChange", function SettingDrawerComponent_ng_template_29_Template_nz_switch_ngModelChange_0_listener($event) { ɵɵrestoreView(_r23); const ctx_r24 = ɵɵnextContext(); return ctx_r24.changeSetting("autoHideHeader", $event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = ɵɵnextContext();
    ɵɵproperty("nzDisabled", !ctx_r9.settings.fixedHeader)("ngModel", !!ctx_r9.settings.autoHideHeader);
} }
function SettingDrawerComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    const _r26 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-switch", 23);
    ɵɵlistener("ngModelChange", function SettingDrawerComponent_ng_template_31_Template_nz_switch_ngModelChange_0_listener($event) { ɵɵrestoreView(_r26); const ctx_r25 = ɵɵnextContext(); return !!(ctx_r25.settings.fixSiderbar = $event); })("ngModelChange", function SettingDrawerComponent_ng_template_31_Template_nz_switch_ngModelChange_0_listener($event) { ɵɵrestoreView(_r26); const ctx_r27 = ɵɵnextContext(); return ctx_r27.changeSetting("fixSiderbar", $event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = ɵɵnextContext();
    ɵɵproperty("nzDisabled", ctx_r11.settings.layout === "topmenu")("ngModel", !!ctx_r11.settings.fixSiderbar);
} }
function SettingDrawerComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    const _r29 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-switch", 22);
    ɵɵlistener("ngModelChange", function SettingDrawerComponent_ng_template_33_Template_nz_switch_ngModelChange_0_listener($event) { ɵɵrestoreView(_r29); const ctx_r28 = ɵɵnextContext(); return !!(ctx_r28.settings.colorWeak = $event); })("ngModelChange", function SettingDrawerComponent_ng_template_33_Template_nz_switch_ngModelChange_0_listener($event) { ɵɵrestoreView(_r29); const ctx_r30 = ɵɵnextContext(); return ctx_r30.changeSetting("colorWeak", $event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r13 = ɵɵnextContext();
    ɵɵproperty("ngModel", !!ctx_r13.settings.colorWeak);
} }
class SettingDrawerComponent {
    constructor(zone, cdr, settingsService, messageService) {
        this.zone = zone;
        this.cdr = cdr;
        this.settingsService = settingsService;
        this.messageService = messageService;
        this.onSettingChange = new EventEmitter();
        this.onCollapseChange = new EventEmitter();
        this.collapse = false;
    }
    ngOnInit() {
        this.pageStyleList = [
            {
                key: 'dark',
                url: 'https://gw.alipayobjects.com/zos/antfincdn/XwFOFbLkSM/LCkqqYNmvBEbokSDscrm.svg',
                title: '暗色菜单风格'
            },
            {
                key: 'light',
                url: 'https://gw.alipayobjects.com/zos/antfincdn/NQ%24zoisaD2/jpRkZQMyYRryryPNtyIC.svg',
                title: '亮色菜单风格'
            },
        ];
        this.navigationModeList = [
            {
                key: 'sidemenu',
                url: 'https://gw.alipayobjects.com/zos/antfincdn/XwFOFbLkSM/LCkqqYNmvBEbokSDscrm.svg',
                title: '侧边菜单布局'
            },
            {
                key: 'topmenu',
                url: 'https://gw.alipayobjects.com/zos/antfincdn/URETY8%24STp/KDNDBbriJhLwuqMoxcAr.svg',
                title: '顶部菜单布局'
            },
        ];
        this.layoutSetting = [
            {
                title: '内容区域宽度',
                action: [this.contentWidthActionTemplate]
            },
            {
                title: '固定 Header',
                action: [this.fixedHeaderActionTemplate]
            },
            {
                title: '下滑时隐藏 Header',
                disabled: !this.settings.fixedHeader,
                disabledReason: '固定 Header 时可配置',
                action: [this.hideHeaderActionTemplate]
            },
            {
                title: '固定侧边菜单',
                disabled: this.settings.layout === 'topmenu',
                disabledReason: '侧边菜单布局时可配置',
                action: [this.fixedSidebarActionTemplate]
            },
        ];
        this.otherSettings = [
            {
                title: '色弱模式',
                action: [this.colorWeakActionTemplate]
            }
        ];
    }
    changeSetting(key, value) {
        this.settings[key] = value;
        if (key === 'layout') {
            this.settings.contentWidth = value === 'topmenu' ? 'Fixed' : 'Fluid';
            this.layoutSetting[3].disabled = value === 'topmenu' ? true : false;
        }
        if (key === 'fixedHeader') {
            if (value) {
                this.layoutSetting[2].disabled = false;
            }
            else {
                this.settings.autoHideHeader = false;
                this.layoutSetting[2].disabled = true;
            }
        }
        this.settingsService.setSettings(key, value);
        this.onSettingChange.emit(this.settings);
    }
    togglerContent() {
        this.collapse = !this.collapse;
        this.onCollapseChange.emit(this.collapse);
    }
}
SettingDrawerComponent.ɵfac = function SettingDrawerComponent_Factory(t) { return new (t || SettingDrawerComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(SettingsService), ɵɵdirectiveInject(NzMessageService)); };
SettingDrawerComponent.ɵcmp = ɵɵdefineComponent({ type: SettingDrawerComponent, selectors: [["pro-setting-drawer"]], viewQuery: function SettingDrawerComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0, 3);
        ɵɵviewQuery(_c1, 3);
        ɵɵviewQuery(_c2, 3);
        ɵɵviewQuery(_c3, 3);
        ɵɵviewQuery(_c4, 3);
        ɵɵviewQuery(_c5, 3);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.renderItemTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentWidthActionTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.fixedHeaderActionTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.hideHeaderActionTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.fixedSidebarActionTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.colorWeakActionTemplate = _t.first);
    } }, inputs: { settings: "settings" }, outputs: { onSettingChange: "onSettingChange", onCollapseChange: "onCollapseChange" }, exportAs: ["proSettingDrawer"], decls: 35, vars: 16, consts: [[2, "z-index", "999", 3, "nzVisible", "nzWidth", "nzPlacement", "nzOnClose"], [1, "ant-pro-setting-drawer-content"], [2, "margin-bottom", "24px"], [1, "ant-pro-setting-drawer-title"], [3, "list", "value", "onChange"], [3, "title", "value", "onChange"], [3, "nzSplit", "nzDataSource", "nzRenderItem"], ["renderItemTemplate1", ""], ["renderItemTemplate2", ""], [1, "ant-pro-setting-drawer-handle", 3, "click"], ["nz-icon", "", 2, "color", "#fff", "font-size", "20px", 3, "nzType"], ["contentWidthActionTemplate", ""], ["fixedHeaderActionTemplate", ""], ["hideHeaderActionTemplate", ""], ["fixedSidebarActionTemplate", ""], ["colorWeakActionTemplate", ""], ["nz-tooltip", "", 3, "nzTooltipTitle", "nzTooltipPlacement"], [3, "nzActions"], ["nzSize", "small", 2, "width", "80px", 3, "ngModel", "ngModelChange"], ["nzValue", "Fixed", 3, "nzLabel", 4, "ngIf"], ["nzValue", "Fluid", 3, "nzLabel"], ["nzValue", "Fixed", 3, "nzLabel"], ["nzSize", "small", 3, "ngModel", "ngModelChange"], ["nzSize", "small", 3, "nzDisabled", "ngModel", "ngModelChange"]], template: function SettingDrawerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "nz-drawer", 0);
        ɵɵlistener("nzOnClose", function SettingDrawerComponent_Template_nz_drawer_nzOnClose_0_listener() { return ctx.togglerContent(); });
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵelementStart(3, "h3", 3);
        ɵɵtext(4, " \u6574\u4F53\u98CE\u683C\u8BBE\u7F6E ");
        ɵɵelementEnd();
        ɵɵelementStart(5, "pro-block-checkbox", 4);
        ɵɵlistener("onChange", function SettingDrawerComponent_Template_pro_block_checkbox_onChange_5_listener($event) { return ctx.changeSetting("navTheme", $event); });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(6, "pro-theme-color", 5);
        ɵɵlistener("onChange", function SettingDrawerComponent_Template_pro_theme_color_onChange_6_listener($event) { return ctx.changeSetting("primaryColor", $event); });
        ɵɵelementEnd();
        ɵɵelement(7, "nz-divider");
        ɵɵelementStart(8, "div", 2);
        ɵɵelementStart(9, "h3", 3);
        ɵɵtext(10, " \u5BFC\u822A\u6A21\u5F0F ");
        ɵɵelementEnd();
        ɵɵelementStart(11, "pro-block-checkbox", 4);
        ɵɵlistener("onChange", function SettingDrawerComponent_Template_pro_block_checkbox_onChange_11_listener($event) { return ctx.changeSetting("layout", $event); });
        ɵɵelementEnd();
        ɵɵelementStart(12, "nz-list", 6);
        ɵɵtemplate(13, SettingDrawerComponent_ng_template_13_Template, 4, 6, "ng-template", null, 7, ɵɵtemplateRefExtractor);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelement(15, "nz-divider");
        ɵɵelementStart(16, "div", 2);
        ɵɵelementStart(17, "h3", 3);
        ɵɵtext(18, " \u5176\u4ED6\u8BBE\u7F6E ");
        ɵɵelementEnd();
        ɵɵelementStart(19, "nz-list", 6);
        ɵɵtemplate(20, SettingDrawerComponent_ng_template_20_Template, 4, 6, "ng-template", null, 8, ɵɵtemplateRefExtractor);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelement(22, "nz-divider");
        ɵɵelementEnd();
        ɵɵelementStart(23, "div", 9);
        ɵɵlistener("click", function SettingDrawerComponent_Template_div_click_23_listener() { return ctx.togglerContent(); });
        ɵɵelement(24, "i", 10);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(25, SettingDrawerComponent_ng_template_25_Template, 3, 3, "ng-template", null, 11, ɵɵtemplateRefExtractor);
        ɵɵtemplate(27, SettingDrawerComponent_ng_template_27_Template, 1, 1, "ng-template", null, 12, ɵɵtemplateRefExtractor);
        ɵɵtemplate(29, SettingDrawerComponent_ng_template_29_Template, 1, 2, "ng-template", null, 13, ɵɵtemplateRefExtractor);
        ɵɵtemplate(31, SettingDrawerComponent_ng_template_31_Template, 1, 2, "ng-template", null, 14, ɵɵtemplateRefExtractor);
        ɵɵtemplate(33, SettingDrawerComponent_ng_template_33_Template, 1, 1, "ng-template", null, 15, ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r0 = ɵɵreference(14);
        const _r2 = ɵɵreference(21);
        ɵɵproperty("nzVisible", ctx.collapse)("nzWidth", 300)("nzPlacement", "right");
        ɵɵadvance(5);
        ɵɵproperty("list", ctx.pageStyleList)("value", ctx.settings.navTheme);
        ɵɵadvance(1);
        ɵɵproperty("title", "\u4E3B\u9898\u8272(\u6682\u65F6\u4E0D\u652F\u6301)")("value", ctx.settings.primaryColor);
        ɵɵadvance(5);
        ɵɵproperty("list", ctx.navigationModeList)("value", ctx.settings.layout);
        ɵɵadvance(1);
        ɵɵproperty("nzSplit", false)("nzDataSource", ctx.layoutSetting)("nzRenderItem", _r0);
        ɵɵadvance(7);
        ɵɵproperty("nzSplit", false)("nzDataSource", ctx.otherSettings)("nzRenderItem", _r2);
        ɵɵadvance(5);
        ɵɵproperty("nzType", ctx.collapse ? "close" : "setting");
    } }, directives: [NzDrawerComponent, BlockCheckboxComponent, ThemeColorComponent, NzDividerComponent, NzListComponent, ɵNzTransitionPatchDirective, NzIconDirective, NzTooltipDirective, NzListItemComponent, NzSelectComponent, NgControlStatus, NgModel, NgIf, NzOptionComponent, NzSwitchComponent], styles: [".ant-pro-setting-drawer-content{position:relative;min-height:100%;background:#fff}.ant-pro-setting-drawer-content .ant-list-item span{flex:1}.ant-pro-setting-drawer-block-checbox{display:flex;background:#fff}.ant-pro-setting-drawer-block-checbox-item{position:relative;margin-right:16px;border-radius:2px;cursor:pointer}.ant-pro-setting-drawer-block-checbox-item img{width:48px}.ant-pro-setting-drawer-block-checbox-selectIcon{position:absolute;top:0;right:0;width:100%;height:100%;padding-top:15px;padding-left:24px;color:#1890ff;font-weight:700;font-size:14px}.ant-pro-setting-drawer-color_block{display:inline-block;width:38px;height:22px;margin:4px 12px 4px 4px;vertical-align:middle;border-radius:4px;cursor:pointer}.ant-pro-setting-drawer-title{margin-bottom:12px;color:rgba(0,0,0,.85);font-size:14px;line-height:22px}.ant-pro-setting-drawer-handle{position:absolute;top:240px;right:300px;z-index:0;display:flex;align-items:center;justify-content:center;width:48px;height:48px;font-size:16px;text-align:center;background:#1890ff;border-radius:4px 0 0 4px;cursor:pointer;pointer-events:auto}.ant-pro-setting-drawer-production-hint{margin-top:16px;font-size:12px}"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(SettingDrawerComponent, [{
        type: Component,
        args: [{
                selector: 'pro-setting-drawer',
                templateUrl: 'setting-drawer.component.html',
                styleUrls: ['setting-drawer.component.less'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                exportAs: 'proSettingDrawer',
                preserveWhitespaces: false
            }]
    }], function () { return [{ type: NgZone }, { type: ChangeDetectorRef }, { type: SettingsService }, { type: NzMessageService }]; }, { settings: [{
            type: Input
        }], onSettingChange: [{
            type: Output
        }], onCollapseChange: [{
            type: Output
        }], renderItemTemplate: [{
            type: ViewChild,
            args: ['renderItemTemplate', { static: true }]
        }], contentWidthActionTemplate: [{
            type: ViewChild,
            args: ['contentWidthActionTemplate', { static: true }]
        }], fixedHeaderActionTemplate: [{
            type: ViewChild,
            args: ['fixedHeaderActionTemplate', { static: true }]
        }], hideHeaderActionTemplate: [{
            type: ViewChild,
            args: ['hideHeaderActionTemplate', { static: true }]
        }], fixedSidebarActionTemplate: [{
            type: ViewChild,
            args: ['fixedSidebarActionTemplate', { static: true }]
        }], colorWeakActionTemplate: [{
            type: ViewChild,
            args: ['colorWeakActionTemplate', { static: true }]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const DIRECTIVES = [
    ProTabSetComponent,
    ProTabComponent,
    ProTabNavBarComponent,
    ProTabNavItemDirective,
    ProTabsInkBarDirective,
    ProTabScrollListDirective,
    ProTabNavOperationComponent,
    ProTabAddButtonComponent,
    ProTabCloseButtonComponent,
    ProTabDirective,
    ProTabBodyComponent,
    ProTabLinkDirective,
    ProTabLinkTemplateDirective
];
class ProTabsModule {
}
ProTabsModule.ɵmod = ɵɵdefineNgModule({ type: ProTabsModule });
ProTabsModule.ɵinj = ɵɵdefineInjector({ factory: function ProTabsModule_Factory(t) { return new (t || ProTabsModule)(); }, imports: [[
            CommonModule,
            ObserversModule,
            NzIconModule,
            PlatformModule,
            A11yModule,
            ScrollingModule,
            NzDropDownModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ProTabsModule, { declarations: [ProTabSetComponent,
        ProTabComponent,
        ProTabNavBarComponent,
        ProTabNavItemDirective,
        ProTabsInkBarDirective,
        ProTabScrollListDirective,
        ProTabNavOperationComponent,
        ProTabAddButtonComponent,
        ProTabCloseButtonComponent,
        ProTabDirective,
        ProTabBodyComponent,
        ProTabLinkDirective,
        ProTabLinkTemplateDirective], imports: [CommonModule,
        ObserversModule,
        NzIconModule,
        PlatformModule,
        A11yModule,
        ScrollingModule,
        NzDropDownModule], exports: [ProTabSetComponent,
        ProTabComponent,
        ProTabNavBarComponent,
        ProTabNavItemDirective,
        ProTabsInkBarDirective,
        ProTabScrollListDirective,
        ProTabNavOperationComponent,
        ProTabAddButtonComponent,
        ProTabCloseButtonComponent,
        ProTabDirective,
        ProTabBodyComponent,
        ProTabLinkDirective,
        ProTabLinkTemplateDirective] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ProTabsModule, [{
        type: NgModule,
        args: [{
                declarations: [DIRECTIVES],
                exports: [DIRECTIVES],
                imports: [
                    CommonModule,
                    ObserversModule,
                    NzIconModule,
                    PlatformModule,
                    A11yModule,
                    ScrollingModule,
                    NzDropDownModule
                ]
            }]
    }], null, null); })();

class ReuseTabModule {
}
ReuseTabModule.ɵmod = ɵɵdefineNgModule({ type: ReuseTabModule });
ReuseTabModule.ɵinj = ɵɵdefineInjector({ factory: function ReuseTabModule_Factory(t) { return new (t || ReuseTabModule)(); }, providers: [], imports: [[
            CommonModule,
            RouterModule,
            ProTabsModule,
            NzMenuModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ReuseTabModule, { declarations: [ReuseTabMenuComponent, ReuseTabComponent], imports: [CommonModule,
        RouterModule,
        ProTabsModule,
        NzMenuModule], exports: [ReuseTabComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ReuseTabModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    ProTabsModule,
                    NzMenuModule
                ],
                exports: [
                    ReuseTabComponent
                ],
                declarations: [ReuseTabMenuComponent, ReuseTabComponent],
                entryComponents: [ReuseTabMenuComponent],
                providers: []
            }]
    }], null, null); })();

const Layouts = [
    GlobalHeaderComponent,
    BasicLayoutComponent,
    GridContentComponent,
    PageHeaderWrapperComponent,
    TopNavHeaderComponent,
    SettingDrawerComponent,
    GlobalFooterComponent,
    BlockCheckboxComponent,
    ThemeColorComponent,
    BaseMenuComponent,
];
class ProLayoutModule {
}
ProLayoutModule.ɵmod = ɵɵdefineNgModule({ type: ProLayoutModule });
ProLayoutModule.ɵinj = ɵɵdefineInjector({ factory: function ProLayoutModule_Factory(t) { return new (t || ProLayoutModule)(); }, providers: [], imports: [[
            CommonModule,
            RouterModule,
            NzButtonModule,
            NzIconModule,
            NzLayoutModule,
            NzDropDownModule,
            NzMenuModule,
            NzSelectModule,
            NzListModule,
            NzPopoverModule,
            NzTableModule,
            NzTabsModule,
            NzTreeModule,
            NzTreeViewModule,
            NzAlertModule,
            NzDrawerModule,
            NzMessageModule,
            NzPageHeaderModule,
            NzBreadCrumbModule,
            NzDividerModule,
            NzToolTipModule,
            NzSwitchModule,
            FormsModule,
            ReactiveFormsModule,
            TranslateModule,
            ReuseTabModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ProLayoutModule, { declarations: [GlobalHeaderComponent,
        BasicLayoutComponent,
        GridContentComponent,
        PageHeaderWrapperComponent,
        TopNavHeaderComponent,
        SettingDrawerComponent,
        GlobalFooterComponent,
        BlockCheckboxComponent,
        ThemeColorComponent,
        BaseMenuComponent], imports: [CommonModule,
        RouterModule,
        NzButtonModule,
        NzIconModule,
        NzLayoutModule,
        NzDropDownModule,
        NzMenuModule,
        NzSelectModule,
        NzListModule,
        NzPopoverModule,
        NzTableModule,
        NzTabsModule,
        NzTreeModule,
        NzTreeViewModule,
        NzAlertModule,
        NzDrawerModule,
        NzMessageModule,
        NzPageHeaderModule,
        NzBreadCrumbModule,
        NzDividerModule,
        NzToolTipModule,
        NzSwitchModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        ReuseTabModule], exports: [GlobalHeaderComponent,
        BasicLayoutComponent,
        GridContentComponent,
        PageHeaderWrapperComponent,
        TopNavHeaderComponent,
        SettingDrawerComponent,
        GlobalFooterComponent,
        BlockCheckboxComponent,
        ThemeColorComponent,
        BaseMenuComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ProLayoutModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    NzButtonModule,
                    NzIconModule,
                    NzLayoutModule,
                    NzDropDownModule,
                    NzMenuModule,
                    NzSelectModule,
                    NzListModule,
                    NzPopoverModule,
                    NzTableModule,
                    NzTabsModule,
                    NzTreeModule,
                    NzTreeViewModule,
                    NzAlertModule,
                    NzDrawerModule,
                    NzMessageModule,
                    NzPageHeaderModule,
                    NzBreadCrumbModule,
                    NzDividerModule,
                    NzToolTipModule,
                    NzSwitchModule,
                    FormsModule,
                    ReactiveFormsModule,
                    TranslateModule,
                    ReuseTabModule
                ],
                exports: [
                    ...Layouts
                ],
                declarations: [
                    ...Layouts
                ],
                providers: [],
            }]
    }], null, null); })();

class ReuseTabStrategy {
    constructor(reuseTabService) {
        this.reuseTabService = reuseTabService;
    }
    /** 表示对所有路由允许复用 如果你有路由不想利用可以在这加一些业务逻辑判断 */
    shouldDetach(route) {
        return this.reuseTabService.shouldDetach(route);
    }
    /** 当路由离开时会触发。按path作为key存储路由快照&组件当前实例对象 */
    store(route, handle) {
        this.reuseTabService.store(route, handle);
    }
    /** 若 path 在缓存中有的都认为允许还原路由 */
    shouldAttach(route) {
        return this.reuseTabService.shouldAttach(route);
    }
    /** 从缓存中获取快照，若无则返回nul */
    retrieve(route) {
        return this.reuseTabService.retrieve(route);
    }
    /** 进入路由触发，判断是否同一路由 */
    shouldReuseRoute(future, curr) {
        return this.reuseTabService.shouldReuseRoute(future, curr);
    }
}

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/*
 * Public API Surface of pro-layout
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BaseMenuComponent, BasicLayoutComponent, BlockCheckboxComponent, DefaultLocation, GlobalFooterComponent, GlobalHeaderComponent, GridContentComponent, NzTabChangeEvent, PRO_LAYOUT, PRO_TAB_SET, PageHeaderWrapperComponent, ProLayoutModule, ProTabAddButtonComponent, ProTabBodyComponent, ProTabCloseButtonComponent, ProTabComponent, ProTabDirective, ProTabLinkDirective, ProTabLinkTemplateDirective, ProTabNavBarComponent, ProTabNavItemDirective, ProTabNavOperationComponent, ProTabScrollListDirective, ProTabSetComponent, ProTabsInkBarDirective, ProTabsModule, ROUTE_DATA_BREADCRUMB_NAME, ReuseTabComponent, ReuseTabMenuComponent, ReuseTabMenuService, ReuseTabModule, ReuseTabService, ReuseTabStrategy, ScrollService, SettingDrawerComponent, SettingsService, ThemeColorComponent, TopNavHeaderComponent };
//# sourceMappingURL=pro-layout.js.map
