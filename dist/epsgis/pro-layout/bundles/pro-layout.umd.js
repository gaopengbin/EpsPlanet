(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('ng-zorro-antd/core/transition-patch'), require('ng-zorro-antd/icon'), require('@angular/router'), require('ng-zorro-antd/core/util'), require('rxjs/operators'), require('rxjs'), require('@angular/cdk/layout'), require('ng-zorro-antd/layout'), require('ng-zorro-antd/drawer'), require('ng-zorro-antd/menu'), require('@ngx-translate/core'), require('@angular/cdk/overlay'), require('@angular/cdk/portal'), require('@angular/cdk/platform'), require('@angular/cdk/coercion'), require('ng-zorro-antd/core/logger'), require('@angular/cdk/a11y'), require('@angular/cdk/keycodes'), require('ng-zorro-antd/dropdown'), require('@angular/platform-browser/animations'), require('ng-zorro-antd/core/polyfill'), require('resize-observer-polyfill'), require('@angular/cdk/bidi'), require('ng-zorro-antd/page-header'), require('ng-zorro-antd/breadcrumb'), require('ng-zorro-antd/tabs'), require('ng-zorro-antd/message'), require('ng-zorro-antd/tooltip'), require('ng-zorro-antd/divider'), require('ng-zorro-antd/list'), require('ng-zorro-antd/select'), require('@angular/forms'), require('ng-zorro-antd/switch'), require('ng-zorro-antd/button'), require('ng-zorro-antd/popover'), require('ng-zorro-antd/table'), require('ng-zorro-antd/tree'), require('ng-zorro-antd/tree-view'), require('ng-zorro-antd/alert'), require('@angular/cdk/observers'), require('@angular/cdk/scrolling')) :
    typeof define === 'function' && define.amd ? define('pro-layout', ['exports', '@angular/core', '@angular/common', 'ng-zorro-antd/core/transition-patch', 'ng-zorro-antd/icon', '@angular/router', 'ng-zorro-antd/core/util', 'rxjs/operators', 'rxjs', '@angular/cdk/layout', 'ng-zorro-antd/layout', 'ng-zorro-antd/drawer', 'ng-zorro-antd/menu', '@ngx-translate/core', '@angular/cdk/overlay', '@angular/cdk/portal', '@angular/cdk/platform', '@angular/cdk/coercion', 'ng-zorro-antd/core/logger', '@angular/cdk/a11y', '@angular/cdk/keycodes', 'ng-zorro-antd/dropdown', '@angular/platform-browser/animations', 'ng-zorro-antd/core/polyfill', 'resize-observer-polyfill', '@angular/cdk/bidi', 'ng-zorro-antd/page-header', 'ng-zorro-antd/breadcrumb', 'ng-zorro-antd/tabs', 'ng-zorro-antd/message', 'ng-zorro-antd/tooltip', 'ng-zorro-antd/divider', 'ng-zorro-antd/list', 'ng-zorro-antd/select', '@angular/forms', 'ng-zorro-antd/switch', 'ng-zorro-antd/button', 'ng-zorro-antd/popover', 'ng-zorro-antd/table', 'ng-zorro-antd/tree', 'ng-zorro-antd/tree-view', 'ng-zorro-antd/alert', '@angular/cdk/observers', '@angular/cdk/scrolling'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['pro-layout'] = {}, global.ng.core, global.ng.common, global.i3, global.i2, global.ng.router, global.util, global.rxjs.operators, global.rxjs, global.ng.cdk.layout, global.i4, global.i5$1, global.i1$1, global.i6, global.ng.cdk.overlay, global.ng.cdk.portal, global.ng.cdk.platform, global.ng.cdk.coercion, global.logger, global.ng.cdk.a11y, global.ng.cdk.keycodes, global.i1$5, global.ng.platformBrowser.animations, global.polyfill, global.ResizeObserver, global.ng.cdk.bidi, global.i3$2, global.i4$1, global.i5$2, global.i2$2, global.i2$1, global.i6$1, global.i7, global.i11, global.ng.forms, global.i14, global.button, global.popover, global.table, global.tree, global.treeView, global.alert, global.ng.cdk.observers, global.ng.cdk.scrolling));
}(this, (function (exports, i0, i1, i3, i2, i1$2, util, operators, rxjs, i1$6, i4, i5$1, i1$1, i6, i1$3, portal, i1$4, coercion, logger, i5, keycodes, i1$5, animations, polyfill, ResizeObserver, i3$1, i3$2, i4$1, i5$2, i2$2, i2$1, i6$1, i7, i11, i12, i14, button, popover, table, tree, treeView, alert, observers, scrolling) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var ResizeObserver__default = /*#__PURE__*/_interopDefaultLegacy(ResizeObserver);

    var defaultSettings = {
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
    var PRO_LAYOUT = new i0.InjectionToken('pro-layout');
    var SettingsService = /** @class */ (function () {
        function SettingsService(customSettings) {
            this.setting = Object.assign(Object.assign({}, defaultSettings), customSettings);
        }
        Object.defineProperty(SettingsService.prototype, "settings", {
            get: function () {
                return this.setting;
            },
            enumerable: false,
            configurable: true
        });
        SettingsService.prototype.setSettings = function (name, value) {
            if (typeof name === 'string') {
                this.setting[name] = value;
            }
            else {
                this.setting = name;
            }
            return true;
        };
        return SettingsService;
    }());
    SettingsService.ɵfac = function SettingsService_Factory(t) { return new (t || SettingsService)(i0.ɵɵinject(PRO_LAYOUT, 8)); };
    SettingsService.ɵprov = i0.ɵɵdefineInjectable({ token: SettingsService, factory: SettingsService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SettingsService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Optional
                        }, {
                            type: i0.Inject,
                            args: [PRO_LAYOUT]
                        }] }];
        }, null);
    })();

    function GlobalFooterComponent_ng_container_1_a_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtext(1);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var link_r3 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", link_r3.title, " ");
        }
    }
    function GlobalFooterComponent_ng_container_1_a_1_ng_template_2_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function GlobalFooterComponent_ng_container_1_a_1_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, GlobalFooterComponent_ng_container_1_a_1_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 7);
        }
        if (rf & 2) {
            var link_r3 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵproperty("ngTemplateOutlet", link_r3.title);
        }
    }
    function GlobalFooterComponent_ng_container_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "a", 4);
            i0.ɵɵtemplate(1, GlobalFooterComponent_ng_container_1_a_1_ng_container_1_Template, 2, 1, "ng-container", 5);
            i0.ɵɵtemplate(2, GlobalFooterComponent_ng_container_1_a_1_ng_template_2_Template, 1, 1, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var link_r3 = ctx.$implicit;
            var _r5 = i0.ɵɵreference(3);
            var ctx_r2 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("title", link_r3.key)("target", link_r3.blankTarget ? "_blank" : "_self")("href", link_r3.href, i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r2.isString(link_r3.title))("ngIfElse", _r5);
        }
    }
    function GlobalFooterComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, GlobalFooterComponent_ng_container_1_a_1_Template, 4, 5, "a", 3);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r0.links);
        }
    }
    function GlobalFooterComponent_div_2_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtext(1);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r10 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx_r10.copyright, " ");
        }
    }
    function GlobalFooterComponent_div_2_ng_template_2_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function GlobalFooterComponent_div_2_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, GlobalFooterComponent_div_2_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 7);
        }
        if (rf & 2) {
            var ctx_r12 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("ngTemplateOutlet", ctx_r12.copyright);
        }
    }
    function GlobalFooterComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 8);
            i0.ɵɵtemplate(1, GlobalFooterComponent_div_2_ng_container_1_Template, 2, 1, "ng-container", 5);
            i0.ɵɵtemplate(2, GlobalFooterComponent_div_2_ng_template_2_Template, 1, 1, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var _r11 = i0.ɵɵreference(3);
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r1.isString(ctx_r1.copyright))("ngIfElse", _r11);
        }
    }
    var GlobalFooterComponent = /** @class */ (function () {
        function GlobalFooterComponent() {
            this.className = '';
        }
        GlobalFooterComponent.prototype.ngOnInit = function () {
        };
        GlobalFooterComponent.prototype.isString = function (val) {
            return typeof val === 'string';
        };
        return GlobalFooterComponent;
    }());
    GlobalFooterComponent.ɵfac = function GlobalFooterComponent_Factory(t) { return new (t || GlobalFooterComponent)(); };
    GlobalFooterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: GlobalFooterComponent, selectors: [["pro-global-footer"], ["", "pro-global-footer", ""]], hostVars: 2, hostBindings: function GlobalFooterComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵclassMap("ant-pro-global-footer " + ctx.className);
            }
        }, inputs: { className: "className", links: "links", copyright: "copyright" }, exportAs: ["proGlobalFooter"], decls: 3, vars: 2, consts: [[1, "ant-pro-global-footer-links"], [4, "ngIf"], ["class", "ant-pro-global-footer-copyright", 4, "ngIf"], [3, "title", "target", "href", 4, "ngFor", "ngForOf"], [3, "title", "target", "href"], [4, "ngIf", "ngIfElse"], ["titleTemplate", ""], [4, "ngTemplateOutlet"], [1, "ant-pro-global-footer-copyright"], ["copyrightTemplate", ""]], template: function GlobalFooterComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵtemplate(1, GlobalFooterComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(2, GlobalFooterComponent_div_2_Template, 4, 2, "div", 2);
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.links && ctx.links.length > 0);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.copyright);
            }
        }, directives: [i1.NgIf, i1.NgForOf, i1.NgTemplateOutlet], styles: [".ant-pro-global-footer{margin:48px 0 24px;padding:0 16px;text-align:center}.ant-pro-global-footer-links{margin-bottom:8px}.ant-pro-global-footer-links a{color:rgba(0,0,0,.45);transition:all .3s}.ant-pro-global-footer-links a:not(:last-child){margin-right:40px}.ant-pro-global-footer-links a:hover{color:rgba(0,0,0,.85)}.ant-pro-global-footer-copyright{color:rgba(0,0,0,.45);font-size:14px}"], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GlobalFooterComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pro-global-footer,[pro-global-footer]',
                        templateUrl: 'global-footer.component.html',
                        styleUrls: ['global-footer.component.less'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        exportAs: 'proGlobalFooter',
                        preserveWhitespaces: false,
                        host: {
                            '[class]': "'ant-pro-global-footer ' + className"
                        }
                    }]
            }], function () { return []; }, { className: [{
                    type: i0.Input
                }], links: [{
                    type: i0.Input
                }], copyright: [{
                    type: i0.Input
                }] });
    })();

    function GlobalHeaderComponent_ng_container_0_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0, 7);
        }
        if (rf & 2) {
            var ctx_r5 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("ngTemplateOutlet", ctx_r5.logo);
        }
    }
    function GlobalHeaderComponent_ng_container_0_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelement(1, "img", 8);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r6 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("src", ctx_r6.logo, i0.ɵɵsanitizeUrl);
        }
    }
    function GlobalHeaderComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "a", 3);
            i0.ɵɵelementContainerStart(2, 4);
            i0.ɵɵtemplate(3, GlobalHeaderComponent_ng_container_0_ng_container_3_Template, 1, 1, "ng-container", 5);
            i0.ɵɵtemplate(4, GlobalHeaderComponent_ng_container_0_ng_container_4_Template, 2, 1, "ng-container", 6);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngSwitch", true);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", ctx_r0.isTemplateRef(ctx_r0.logo));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", ctx_r0.isNonEmptyString(ctx_r0.logo));
        }
    }
    function GlobalHeaderComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function GlobalHeaderComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r8_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "span", 9);
            i0.ɵɵlistener("click", function GlobalHeaderComponent_ng_template_2_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r8_1); var ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.toggle(); });
            i0.ɵɵelement(1, "i", 10);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzType", ctx_r3.collapsed ? "menu-unfold" : "menu-fold");
        }
    }
    function GlobalHeaderComponent_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    var _c0$b = function () { return { theme: "light", layout: "sidemenu" }; };
    var _c1$7 = function (a0) { return { $implicit: a0 }; };
    var GlobalHeaderComponent = /** @class */ (function () {
        function GlobalHeaderComponent() {
            this.collapsedChange = new i0.EventEmitter();
        }
        GlobalHeaderComponent.prototype.ngOnInit = function () {
        };
        GlobalHeaderComponent.prototype.toggle = function () {
            this.collapsedChange.emit(!this.collapsed);
        };
        GlobalHeaderComponent.prototype.isNonEmptyString = function (value) {
            return typeof value === 'string' && value !== '';
        };
        GlobalHeaderComponent.prototype.isTemplateRef = function (value) {
            return value instanceof i0.TemplateRef;
        };
        return GlobalHeaderComponent;
    }());
    GlobalHeaderComponent.ɵfac = function GlobalHeaderComponent_Factory(t) { return new (t || GlobalHeaderComponent)(); };
    GlobalHeaderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: GlobalHeaderComponent, selectors: [["pro-global-header"], ["", "pro-global-header", ""]], hostVars: 2, hostBindings: function GlobalHeaderComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵclassMap("ant-pro-global-header");
            }
        }, inputs: { isMobile: "isMobile", logo: "logo", collapsed: "collapsed", collapsedButtonRender: "collapsedButtonRender", rightContentRender: "rightContentRender" }, outputs: { collapsedChange: "collapsedChange" }, exportAs: ["proGlobalHeader"], decls: 5, vars: 8, consts: [[4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["defaultCollapsedButtonTemplate", ""], ["key", "logo", 1, "ant-pro-global-header-logo"], [3, "ngSwitch"], [3, "ngTemplateOutlet", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [3, "ngTemplateOutlet"], ["alt", "logo", 3, "src"], [1, "ant-pro-global-header-trigger", 3, "click"], ["nz-icon", "", 3, "nzType"]], template: function GlobalHeaderComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, GlobalHeaderComponent_ng_container_0_Template, 5, 3, "ng-container", 0);
                i0.ɵɵtemplate(1, GlobalHeaderComponent_ng_container_1_Template, 1, 0, "ng-container", 1);
                i0.ɵɵtemplate(2, GlobalHeaderComponent_ng_template_2_Template, 2, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(4, GlobalHeaderComponent_ng_container_4_Template, 1, 0, "ng-container", 1);
            }
            if (rf & 2) {
                var _r2 = i0.ɵɵreference(3);
                i0.ɵɵproperty("ngIf", ctx.isMobile);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngTemplateOutlet", ctx.collapsedButtonRender ? ctx.collapsedButtonRender : _r2)("ngTemplateOutletContext", ctx.collapsed);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngTemplateOutlet", ctx.rightContentRender)("ngTemplateOutletContext", i0.ɵɵpureFunction1(6, _c1$7, i0.ɵɵpureFunction0(5, _c0$b)));
            }
        }, directives: [i1.NgIf, i1.NgTemplateOutlet, i1.NgSwitch, i1.NgSwitchCase, i3.ɵNzTransitionPatchDirective, i2.NzIconDirective], styles: [".ant-pro-global-header{position:relative;height:64px;padding:0;background:#fff;box-shadow:0 1px 4px rgba(0,21,41,.08)}.ant-pro-global-header-logo{display:inline-block;height:64px;padding:0 0 0 24px;font-size:20px;line-height:64px;vertical-align:top;cursor:pointer}.ant-pro-global-header-logo img{display:inline-block;width:32px;vertical-align:middle}.ant-pro-global-header-menu .anticon{margin-right:8px}.ant-pro-global-header-menu .ant-dropdown-menu-item{min-width:160px}.ant-pro-global-header-trigger{height:64px;padding:calc((64px - 26px) / 2) 24px;font-size:20px;cursor:pointer;transition:all .3s,padding 0s}.ant-pro-global-header-trigger:hover{background:#fff}.ant-pro-global-header .dark{height:64px}.ant-pro-global-header .dark .action,.ant-pro-global-header .dark .action>i{color:hsla(0,0%,100%,.85)}.ant-pro-global-header .dark .action.opened,.ant-pro-global-header .dark .action:hover{background:#1890ff}.ant-pro-global-header .dark .action .ant-badge{color:hsla(0,0%,100%,.85)}"], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GlobalHeaderComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pro-global-header,[pro-global-header]',
                        templateUrl: 'global-header.component.html',
                        styleUrls: ['global-header.component.less'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        exportAs: 'proGlobalHeader',
                        preserveWhitespaces: false,
                        host: {
                            '[class]': "'ant-pro-global-header'"
                        }
                    }]
            }], function () { return []; }, { isMobile: [{
                    type: i0.Input
                }], logo: [{
                    type: i0.Input
                }], collapsed: [{
                    type: i0.Input
                }], collapsedButtonRender: [{
                    type: i0.Input
                }], rightContentRender: [{
                    type: i0.Input
                }], collapsedChange: [{
                    type: i0.Output
                }] });
    })();

    var _c0$a = function (a0) { return { "wide": a0 }; };
    var _c1$6 = ["*"];
    var GridContentComponent = /** @class */ (function () {
        function GridContentComponent() {
        }
        GridContentComponent.prototype.ngOnInit = function () {
        };
        return GridContentComponent;
    }());
    GridContentComponent.ɵfac = function GridContentComponent_Factory(t) { return new (t || GridContentComponent)(); };
    GridContentComponent.ɵcmp = i0.ɵɵdefineComponent({ type: GridContentComponent, selectors: [["pro-grid-content"]], inputs: { contentWidth: "contentWidth" }, exportAs: ["proGridContent"], ngContentSelectors: _c1$6, decls: 2, vars: 3, consts: [[1, "ant-pro-grid-content", 3, "ngClass"]], template: function GridContentComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵprojection(1);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(1, _c0$a, ctx.contentWidth === "Fixed"));
            }
        }, directives: [i1.NgClass], styles: [".ant-pro-grid-content{width:100%;height:100%;min-height:100%;transition:.3s}.ant-pro-grid-content.wide{max-width:1200px;margin:0 auto}"], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GridContentComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pro-grid-content',
                        templateUrl: 'grid-content.component.html',
                        styleUrls: ['grid-content.component.less'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        exportAs: 'proGridContent',
                        preserveWhitespaces: false
                    }]
            }], function () { return []; }, { contentWidth: [{
                    type: i0.Input
                }] });
    })();

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    // tslint:disable-next-line:max-line-length
    var reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
    var isUrl = function (path) { return reg.test(path); };
    var isBrowser = function () { return typeof window !== 'undefined'; };

    function BaseMenuComponent_ng_container_1_ng_container_1_i_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "i", 8);
        }
        if (rf & 2) {
            var menuData_r1 = i0.ɵɵnextContext(2).$implicit;
            i0.ɵɵproperty("nzType", menuData_r1.icon);
        }
    }
    function BaseMenuComponent_ng_container_1_ng_container_1_span_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "translate");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var menuData_r1 = i0.ɵɵnextContext(2).$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, menuData_r1.locale));
        }
    }
    function BaseMenuComponent_ng_container_1_ng_container_1_span_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var menuData_r1 = i0.ɵɵnextContext(2).$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(menuData_r1.name);
        }
    }
    function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_i_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "i", 8);
        }
        if (rf & 2) {
            var menuData_r12 = i0.ɵɵnextContext(2).$implicit;
            i0.ɵɵproperty("nzType", menuData_r12.icon);
        }
    }
    function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_span_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "translate");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var menuData_r12 = i0.ɵɵnextContext(2).$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, menuData_r12.locale));
        }
    }
    function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_span_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var menuData_r12 = i0.ɵɵnextContext(2).$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(menuData_r12.name);
        }
    }
    function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_ng_container_2_a_1_i_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "i", 8);
        }
        if (rf & 2) {
            var menuData_r23 = i0.ɵɵnextContext(3).$implicit;
            i0.ɵɵproperty("nzType", menuData_r23.icon);
        }
    }
    function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_ng_container_2_a_1_span_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "translate");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var menuData_r23 = i0.ɵɵnextContext(3).$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, menuData_r23.locale));
        }
    }
    function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_ng_container_2_a_1_span_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var menuData_r23 = i0.ɵɵnextContext(3).$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(menuData_r23.name);
        }
    }
    function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_ng_container_2_a_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "a", 14);
            i0.ɵɵtemplate(1, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_ng_container_2_a_1_i_1_Template, 1, 1, "i", 6);
            i0.ɵɵtemplate(2, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_ng_container_2_a_1_span_2_Template, 3, 3, "span", 7);
            i0.ɵɵtemplate(3, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_ng_container_2_a_1_span_3_Template, 2, 1, "span", 7);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var menuData_r23 = i0.ɵɵnextContext(2).$implicit;
            i0.ɵɵproperty("href", menuData_r23.path, i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", menuData_r23.icon);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", menuData_r23.locale);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !menuData_r23.locale);
        }
    }
    function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_ng_container_2_a_2_i_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "i", 8);
        }
        if (rf & 2) {
            var menuData_r23 = i0.ɵɵnextContext(3).$implicit;
            i0.ɵɵproperty("nzType", menuData_r23.icon);
        }
    }
    function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_ng_container_2_a_2_span_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "translate");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var menuData_r23 = i0.ɵɵnextContext(3).$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, menuData_r23.locale));
        }
    }
    function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_ng_container_2_a_2_span_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var menuData_r23 = i0.ɵɵnextContext(3).$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(menuData_r23.name);
        }
    }
    function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_ng_container_2_a_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r43_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "a", 15);
            i0.ɵɵlistener("click", function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_ng_container_2_a_2_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r43_1); var menuData_r23 = i0.ɵɵnextContext(2).$implicit; return menuData_r23.externalClick(menuData_r23); });
            i0.ɵɵtemplate(1, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_ng_container_2_a_2_i_1_Template, 1, 1, "i", 6);
            i0.ɵɵtemplate(2, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_ng_container_2_a_2_span_2_Template, 3, 3, "span", 7);
            i0.ɵɵtemplate(3, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_ng_container_2_a_2_span_3_Template, 2, 1, "span", 7);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var menuData_r23 = i0.ɵɵnextContext(2).$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", menuData_r23.icon);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", menuData_r23.locale);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !menuData_r23.locale);
        }
    }
    function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_ng_container_2_a_1_Template, 4, 4, "a", 12);
            i0.ɵɵtemplate(2, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_ng_container_2_a_2_Template, 4, 3, "a", 13);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var menuData_r23 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !menuData_r23.externalClick);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", menuData_r23.externalClick);
        }
    }
    function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_a_3_i_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "i", 8);
        }
        if (rf & 2) {
            var menuData_r23 = i0.ɵɵnextContext(2).$implicit;
            i0.ɵɵproperty("nzType", menuData_r23.icon);
        }
    }
    function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_a_3_span_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "translate");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var menuData_r23 = i0.ɵɵnextContext(2).$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, menuData_r23.locale));
        }
    }
    function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_a_3_span_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var menuData_r23 = i0.ɵɵnextContext(2).$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(menuData_r23.name);
        }
    }
    function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_a_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "a", 16);
            i0.ɵɵtemplate(1, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_a_3_i_1_Template, 1, 1, "i", 6);
            i0.ɵɵtemplate(2, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_a_3_span_2_Template, 3, 3, "span", 7);
            i0.ɵɵtemplate(3, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_a_3_span_3_Template, 2, 1, "span", 7);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var menuData_r23 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵproperty("routerLink", menuData_r23.path);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", menuData_r23.icon);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", menuData_r23.locale);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !menuData_r23.locale);
        }
    }
    function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "li", 10);
            i0.ɵɵtemplate(2, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_ng_container_2_Template, 3, 2, "ng-container", 7);
            i0.ɵɵtemplate(3, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_a_3_Template, 4, 4, "a", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var menuData_r23 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzMatchRouter", true);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", menuData_r23.external);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !menuData_r23.external);
        }
    }
    function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r55_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "li", 4);
            i0.ɵɵlistener("nzOpenChange", function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_Template_li_nzOpenChange_1_listener($event) { i0.ɵɵrestoreView(_r55_1); var menuData_r12 = i0.ɵɵnextContext().$implicit; var ctx_r53 = i0.ɵɵnextContext(3); return ctx_r53.onOpenChange($event, menuData_r12); });
            i0.ɵɵelementStart(2, "span", 5);
            i0.ɵɵtemplate(3, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_i_3_Template, 1, 1, "i", 6);
            i0.ɵɵtemplate(4, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_span_4_Template, 3, 3, "span", 7);
            i0.ɵɵtemplate(5, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_span_5_Template, 2, 1, "span", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "ul");
            i0.ɵɵtemplate(7, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_ng_container_7_Template, 4, 3, "ng-container", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var menuData_r12 = i0.ɵɵnextContext().$implicit;
            var ctx_r13 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzOpen", ctx_r13.openKeys.indexOf(menuData_r12.path) !== -1 && ctx_r13.mode === "inline");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", menuData_r12.icon);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", menuData_r12.locale);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !menuData_r12.locale);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", menuData_r12.children);
        }
    }
    function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_ng_container_1_a_1_i_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "i", 8);
        }
        if (rf & 2) {
            var menuData_r12 = i0.ɵɵnextContext(4).$implicit;
            i0.ɵɵproperty("nzType", menuData_r12.icon);
        }
    }
    function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_ng_container_1_a_1_span_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "translate");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var menuData_r12 = i0.ɵɵnextContext(4).$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, menuData_r12.locale));
        }
    }
    function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_ng_container_1_a_1_span_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var menuData_r12 = i0.ɵɵnextContext(4).$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(menuData_r12.name);
        }
    }
    function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_ng_container_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "a", 14);
            i0.ɵɵtemplate(1, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_ng_container_1_a_1_i_1_Template, 1, 1, "i", 6);
            i0.ɵɵtemplate(2, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_ng_container_1_a_1_span_2_Template, 3, 3, "span", 7);
            i0.ɵɵtemplate(3, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_ng_container_1_a_1_span_3_Template, 2, 1, "span", 7);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var menuData_r12 = i0.ɵɵnextContext(3).$implicit;
            i0.ɵɵproperty("href", menuData_r12.path, i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", menuData_r12.icon);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", menuData_r12.locale);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !menuData_r12.locale);
        }
    }
    function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_ng_container_1_a_2_i_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "i", 8);
        }
        if (rf & 2) {
            var menuData_r12 = i0.ɵɵnextContext(4).$implicit;
            i0.ɵɵproperty("nzType", menuData_r12.icon);
        }
    }
    function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_ng_container_1_a_2_span_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "translate");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var menuData_r12 = i0.ɵɵnextContext(4).$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, menuData_r12.locale));
        }
    }
    function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_ng_container_1_a_2_span_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var menuData_r12 = i0.ɵɵnextContext(4).$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(menuData_r12.name);
        }
    }
    function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_ng_container_1_a_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r76_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "a", 15);
            i0.ɵɵlistener("click", function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_ng_container_1_a_2_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r76_1); var menuData_r12 = i0.ɵɵnextContext(3).$implicit; return menuData_r12.externalClick(menuData_r12); });
            i0.ɵɵtemplate(1, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_ng_container_1_a_2_i_1_Template, 1, 1, "i", 6);
            i0.ɵɵtemplate(2, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_ng_container_1_a_2_span_2_Template, 3, 3, "span", 7);
            i0.ɵɵtemplate(3, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_ng_container_1_a_2_span_3_Template, 2, 1, "span", 7);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var menuData_r12 = i0.ɵɵnextContext(3).$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", menuData_r12.icon);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", menuData_r12.locale);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !menuData_r12.locale);
        }
    }
    function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_ng_container_1_a_1_Template, 4, 4, "a", 12);
            i0.ɵɵtemplate(2, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_ng_container_1_a_2_Template, 4, 3, "a", 13);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var menuData_r12 = i0.ɵɵnextContext(2).$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !menuData_r12.externalClick);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", menuData_r12.externalClick);
        }
    }
    function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_a_2_i_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "i", 8);
        }
        if (rf & 2) {
            var menuData_r12 = i0.ɵɵnextContext(3).$implicit;
            i0.ɵɵproperty("nzType", menuData_r12.icon);
        }
    }
    function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_a_2_span_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "translate");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var menuData_r12 = i0.ɵɵnextContext(3).$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, menuData_r12.locale));
        }
    }
    function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_a_2_span_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var menuData_r12 = i0.ɵɵnextContext(3).$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(menuData_r12.name);
        }
    }
    function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_a_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "a", 16);
            i0.ɵɵtemplate(1, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_a_2_i_1_Template, 1, 1, "i", 6);
            i0.ɵɵtemplate(2, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_a_2_span_2_Template, 3, 3, "span", 7);
            i0.ɵɵtemplate(3, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_a_2_span_3_Template, 2, 1, "span", 7);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var menuData_r12 = i0.ɵɵnextContext(2).$implicit;
            i0.ɵɵproperty("routerLink", menuData_r12.path);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", menuData_r12.icon);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", menuData_r12.locale);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !menuData_r12.locale);
        }
    }
    function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "li", 10);
            i0.ɵɵtemplate(1, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_ng_container_1_Template, 3, 2, "ng-container", 7);
            i0.ɵɵtemplate(2, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_a_2_Template, 4, 4, "a", 11);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var menuData_r12 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵproperty("nzMatchRouter", true);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", menuData_r12.external);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !menuData_r12.external);
        }
    }
    function BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_container_1_Template, 8, 5, "ng-container", 2);
            i0.ɵɵtemplate(2, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_ng_template_2_Template, 3, 3, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var menuData_r12 = ctx.$implicit;
            var _r14 = i0.ɵɵreference(3);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", menuData_r12.children)("ngIfElse", _r14);
        }
    }
    function BaseMenuComponent_ng_container_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r89_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "li", 4);
            i0.ɵɵlistener("nzOpenChange", function BaseMenuComponent_ng_container_1_ng_container_1_Template_li_nzOpenChange_1_listener($event) { i0.ɵɵrestoreView(_r89_1); var menuData_r1 = i0.ɵɵnextContext().$implicit; var ctx_r87 = i0.ɵɵnextContext(); return ctx_r87.onOpenChange($event, menuData_r1); });
            i0.ɵɵelementStart(2, "span", 5);
            i0.ɵɵtemplate(3, BaseMenuComponent_ng_container_1_ng_container_1_i_3_Template, 1, 1, "i", 6);
            i0.ɵɵtemplate(4, BaseMenuComponent_ng_container_1_ng_container_1_span_4_Template, 3, 3, "span", 7);
            i0.ɵɵtemplate(5, BaseMenuComponent_ng_container_1_ng_container_1_span_5_Template, 2, 1, "span", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "ul");
            i0.ɵɵtemplate(7, BaseMenuComponent_ng_container_1_ng_container_1_ng_container_7_Template, 4, 2, "ng-container", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var menuData_r1 = i0.ɵɵnextContext().$implicit;
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzOpen", ctx_r2.openKeys.indexOf(menuData_r1.path) !== -1 && ctx_r2.mode === "inline");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", menuData_r1.icon);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", menuData_r1.locale);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !menuData_r1.locale);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", menuData_r1.children);
        }
    }
    function BaseMenuComponent_ng_container_1_ng_template_2_ng_container_1_a_1_i_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "i", 8);
        }
        if (rf & 2) {
            var menuData_r1 = i0.ɵɵnextContext(4).$implicit;
            i0.ɵɵproperty("nzType", menuData_r1.icon);
        }
    }
    function BaseMenuComponent_ng_container_1_ng_template_2_ng_container_1_a_1_span_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "translate");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var menuData_r1 = i0.ɵɵnextContext(4).$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, menuData_r1.locale));
        }
    }
    function BaseMenuComponent_ng_container_1_ng_template_2_ng_container_1_a_1_span_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var menuData_r1 = i0.ɵɵnextContext(4).$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(menuData_r1.name);
        }
    }
    function BaseMenuComponent_ng_container_1_ng_template_2_ng_container_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "a", 14);
            i0.ɵɵtemplate(1, BaseMenuComponent_ng_container_1_ng_template_2_ng_container_1_a_1_i_1_Template, 1, 1, "i", 6);
            i0.ɵɵtemplate(2, BaseMenuComponent_ng_container_1_ng_template_2_ng_container_1_a_1_span_2_Template, 3, 3, "span", 7);
            i0.ɵɵtemplate(3, BaseMenuComponent_ng_container_1_ng_template_2_ng_container_1_a_1_span_3_Template, 2, 1, "span", 7);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var menuData_r1 = i0.ɵɵnextContext(3).$implicit;
            i0.ɵɵproperty("href", menuData_r1.path, i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", menuData_r1.icon);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", menuData_r1.locale);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !menuData_r1.locale);
        }
    }
    function BaseMenuComponent_ng_container_1_ng_template_2_ng_container_1_a_2_i_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "i", 8);
        }
        if (rf & 2) {
            var menuData_r1 = i0.ɵɵnextContext(4).$implicit;
            i0.ɵɵproperty("nzType", menuData_r1.icon);
        }
    }
    function BaseMenuComponent_ng_container_1_ng_template_2_ng_container_1_a_2_span_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "translate");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var menuData_r1 = i0.ɵɵnextContext(4).$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, menuData_r1.locale));
        }
    }
    function BaseMenuComponent_ng_container_1_ng_template_2_ng_container_1_a_2_span_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var menuData_r1 = i0.ɵɵnextContext(4).$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(menuData_r1.name);
        }
    }
    function BaseMenuComponent_ng_container_1_ng_template_2_ng_container_1_a_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r110_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "a", 15);
            i0.ɵɵlistener("click", function BaseMenuComponent_ng_container_1_ng_template_2_ng_container_1_a_2_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r110_1); var menuData_r1 = i0.ɵɵnextContext(3).$implicit; return menuData_r1.externalClick(menuData_r1); });
            i0.ɵɵtemplate(1, BaseMenuComponent_ng_container_1_ng_template_2_ng_container_1_a_2_i_1_Template, 1, 1, "i", 6);
            i0.ɵɵtemplate(2, BaseMenuComponent_ng_container_1_ng_template_2_ng_container_1_a_2_span_2_Template, 3, 3, "span", 7);
            i0.ɵɵtemplate(3, BaseMenuComponent_ng_container_1_ng_template_2_ng_container_1_a_2_span_3_Template, 2, 1, "span", 7);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var menuData_r1 = i0.ɵɵnextContext(3).$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", menuData_r1.icon);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", menuData_r1.locale);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !menuData_r1.locale);
        }
    }
    function BaseMenuComponent_ng_container_1_ng_template_2_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, BaseMenuComponent_ng_container_1_ng_template_2_ng_container_1_a_1_Template, 4, 4, "a", 12);
            i0.ɵɵtemplate(2, BaseMenuComponent_ng_container_1_ng_template_2_ng_container_1_a_2_Template, 4, 3, "a", 13);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var menuData_r1 = i0.ɵɵnextContext(2).$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !menuData_r1.externalClick);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", menuData_r1.externalClick);
        }
    }
    function BaseMenuComponent_ng_container_1_ng_template_2_a_2_i_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "i", 8);
        }
        if (rf & 2) {
            var menuData_r1 = i0.ɵɵnextContext(3).$implicit;
            i0.ɵɵproperty("nzType", menuData_r1.icon);
        }
    }
    function BaseMenuComponent_ng_container_1_ng_template_2_a_2_span_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "translate");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var menuData_r1 = i0.ɵɵnextContext(3).$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, menuData_r1.locale));
        }
    }
    function BaseMenuComponent_ng_container_1_ng_template_2_a_2_span_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var menuData_r1 = i0.ɵɵnextContext(3).$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(menuData_r1.name);
        }
    }
    function BaseMenuComponent_ng_container_1_ng_template_2_a_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "a", 16);
            i0.ɵɵtemplate(1, BaseMenuComponent_ng_container_1_ng_template_2_a_2_i_1_Template, 1, 1, "i", 6);
            i0.ɵɵtemplate(2, BaseMenuComponent_ng_container_1_ng_template_2_a_2_span_2_Template, 3, 3, "span", 7);
            i0.ɵɵtemplate(3, BaseMenuComponent_ng_container_1_ng_template_2_a_2_span_3_Template, 2, 1, "span", 7);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var menuData_r1 = i0.ɵɵnextContext(2).$implicit;
            i0.ɵɵproperty("routerLink", menuData_r1.path);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", menuData_r1.icon);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", menuData_r1.locale);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !menuData_r1.locale);
        }
    }
    function BaseMenuComponent_ng_container_1_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "li", 10);
            i0.ɵɵtemplate(1, BaseMenuComponent_ng_container_1_ng_template_2_ng_container_1_Template, 3, 2, "ng-container", 7);
            i0.ɵɵtemplate(2, BaseMenuComponent_ng_container_1_ng_template_2_a_2_Template, 4, 4, "a", 11);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var menuData_r1 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵproperty("nzMatchRouter", true);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", menuData_r1.external);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !menuData_r1.external);
        }
    }
    function BaseMenuComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, BaseMenuComponent_ng_container_1_ng_container_1_Template, 8, 5, "ng-container", 2);
            i0.ɵɵtemplate(2, BaseMenuComponent_ng_container_1_ng_template_2_Template, 3, 3, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var menuData_r1 = ctx.$implicit;
            var _r3 = i0.ɵɵreference(3);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", menuData_r1.children)("ngIfElse", _r3);
        }
    }
    var _c0$9 = function (a0) { return { "top-nav-menu": a0 }; };
    var BaseMenuComponent = /** @class */ (function () {
        function BaseMenuComponent(cdf) {
            this.cdf = cdf;
            this.mode = 'inline';
            this.theme = 'dark';
            this.openKeys = [];
            this.openChange = new i0.EventEmitter();
        }
        BaseMenuComponent.prototype.ngAfterViewInit = function () {
        };
        BaseMenuComponent.prototype.ngOnInit = function () {
            console.log(this.menuData);
        };
        BaseMenuComponent.prototype.onOpenChange = function (status, menuData) {
            this.openChange.emit({ status: status, item: menuData });
        };
        return BaseMenuComponent;
    }());
    BaseMenuComponent.ɵfac = function BaseMenuComponent_Factory(t) { return new (t || BaseMenuComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    BaseMenuComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BaseMenuComponent, selectors: [["pro-base-menu"]], inputs: { style: "style", mode: "mode", menuData: "menuData", theme: "theme", collapsed: "collapsed", selectedKey: "selectedKey", openKeys: "openKeys" }, outputs: { openChange: "openChange" }, exportAs: ["proBaseMenu"], decls: 2, vars: 8, consts: [["nz-menu", "", 3, "ngStyle", "nzMode", "nzTheme", "ngClass", "nzInlineCollapsed"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], ["elseTemplate1", ""], ["nz-submenu", "", 3, "nzOpen", "nzOpenChange"], ["title", ""], ["nz-icon", "", 3, "nzType", 4, "ngIf"], [4, "ngIf"], ["nz-icon", "", 3, "nzType"], ["elseTemplate2", ""], ["nz-menu-item", "", 3, "nzMatchRouter"], [3, "routerLink", 4, "ngIf"], ["target", "_blank", 3, "href", 4, "ngIf"], [3, "click", 4, "ngIf"], ["target", "_blank", 3, "href"], [3, "click"], [3, "routerLink"]], template: function BaseMenuComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "ul", 0);
                i0.ɵɵtemplate(1, BaseMenuComponent_ng_container_1_Template, 4, 2, "ng-container", 1);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngStyle", ctx.style)("nzMode", ctx.mode)("nzTheme", ctx.theme)("ngClass", i0.ɵɵpureFunction1(6, _c0$9, ctx.mode === "horizontal"))("nzInlineCollapsed", ctx.collapsed);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.menuData);
            }
        }, directives: [i1$1.NzMenuDirective, i1.NgStyle, i1.NgClass, i1.NgForOf, i1.NgIf, i3.ɵNzTransitionPatchDirective, i1$1.NzSubMenuComponent, i2.NzIconDirective, i1$1.NzMenuItemDirective, i1$2.RouterLinkWithHref], pipes: [i6.TranslatePipe], styles: [".ant-pro-sider-menu-logo{position:relative;height:64px;padding-left:48px/2;overflow:hidden;line-height:64px;background:#001529;cursor:pointer;transition:all .3s}.ant-pro-sider-menu-logo img{display:inline-block;height:32px;vertical-align:middle}.ant-pro-sider-menu-logo h1{display:inline-block;margin:0 0 0 12px;color:#fff;font-weight:600;font-size:20px;font-family:Avenir,Helvetica Neue,Arial,Helvetica,sans-serif;vertical-align:middle}.ant-pro-sider-menu-sider{position:relative;z-index:10;min-height:100vh;box-shadow:2px 0 6px rgba(0,21,41,.35)}.ant-pro-sider-menu-sider.fix-sider-bar{position:fixed;top:0;left:0;box-shadow:2px 0 8px 0 rgba(29,35,41,.05)}.ant-pro-sider-menu-sider.fix-sider-bar .ant-menu-root{height:calc(100vh - 64px);overflow-y:auto}.ant-pro-sider-menu-sider.fix-sider-bar .ant-menu-inline{border-right:0}.ant-pro-sider-menu-sider.fix-sider-bar .ant-menu-inline .ant-menu-item,.ant-pro-sider-menu-sider.fix-sider-bar .ant-menu-inline .ant-menu-submenu-title{width:100%}.ant-pro-sider-menu-sider.light{background-color:#fff;box-shadow:2px 0 8px 0 rgba(29,35,41,.05)}.ant-pro-sider-menu-sider.light .ant-pro-sider-menu-logo{background:#fff;box-shadow:1px 1px 0 0 #f0f0f0}.ant-pro-sider-menu-sider.light .ant-pro-sider-menu-logo h1{color:#1890ff}.ant-pro-sider-menu-sider.light .ant-menu-light{border-right-color:transparent}.ant-pro-sider-menu-icon{width:14px;vertical-align:baseline}.ant-pro-sider-menu .top-nav-menu li.ant-menu-item{height:64px;line-height:64px}.ant-pro-sider-menu .drawer .drawer-content{background:#001529}.ant-pro-sider-menu .ant-menu-inline-collapsed>.ant-menu-item-group>.ant-menu-item-group-list>.ant-menu-item .sider-menu-item-img+span,.ant-pro-sider-menu .ant-menu-inline-collapsed>.ant-menu-item .sider-menu-item-img+span,.ant-pro-sider-menu .ant-menu-inline-collapsed>.ant-menu-submenu>.ant-menu-submenu-title .sider-menu-item-img+span{display:inline-block;max-width:0;opacity:0}.ant-pro-sider-menu .ant-menu-item .sider-menu-item-img+span,.ant-pro-sider-menu .ant-menu-submenu-title .sider-menu-item-img+span{opacity:1;transition:opacity .3s cubic-bezier(.645,.045,.355,1),width .3s cubic-bezier(.645,.045,.355,1)}.ant-pro-sider-menu .ant-drawer-body{padding:0}"], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseMenuComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pro-base-menu',
                        templateUrl: 'base-menu.component.html',
                        styleUrls: ['base-menu.component.less'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        exportAs: 'proBaseMenu',
                        preserveWhitespaces: false
                    }]
            }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { style: [{
                    type: i0.Input
                }], mode: [{
                    type: i0.Input
                }], menuData: [{
                    type: i0.Input
                }], theme: [{
                    type: i0.Input
                }], collapsed: [{
                    type: i0.Input
                }], selectedKey: [{
                    type: i0.Input
                }], openKeys: [{
                    type: i0.Input
                }], openChange: [{
                    type: i0.Output
                }] });
    })();

    function TopNavHeaderComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function TopNavHeaderComponent_ng_template_4_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0, 11);
        }
        if (rf & 2) {
            var ctx_r4 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("ngTemplateOutlet", ctx_r4.logo);
        }
    }
    function TopNavHeaderComponent_ng_template_4_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelement(1, "img", 12);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r5 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("src", ctx_r5.logo, i0.ɵɵsanitizeUrl);
        }
    }
    function TopNavHeaderComponent_ng_template_4_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0, 11);
        }
        if (rf & 2) {
            var ctx_r6 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("ngTemplateOutlet", ctx_r6.title);
        }
    }
    function TopNavHeaderComponent_ng_template_4_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtext(1);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r7 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r7.title);
        }
    }
    function TopNavHeaderComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
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
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
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
        }
    }
    function TopNavHeaderComponent_ng_container_8_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    var _c0$8 = function (a0) { return { "wide": a0 }; };
    var _c1$5 = function (a0, a1) { return { logo: a0, title: a1 }; };
    var _c2$4 = function (a0) { return { theme: a0, layout: "topmenu" }; };
    var _c3$3 = function (a0) { return { $implicit: a0 }; };
    var TopNavHeaderComponent = /** @class */ (function () {
        function TopNavHeaderComponent() {
            this.theme = 'light';
            this.onMenuHeaderClick = new i0.EventEmitter();
            this.baseClassName = 'ant-pro-top-nav-header';
        }
        TopNavHeaderComponent.prototype.ngOnInit = function () {
            var innerWidth = isBrowser() ? window.innerWidth : 0;
            this.maxWidth = (this.contentWidth === 'Fixed' && innerWidth > 1200 ? 1200 : innerWidth) - 280 - 120;
        };
        TopNavHeaderComponent.prototype.menuHeaderClick = function (event) {
            this.onMenuHeaderClick.emit(event);
        };
        TopNavHeaderComponent.prototype.isNonEmptyString = function (value) {
            return typeof value === 'string' && value !== '';
        };
        TopNavHeaderComponent.prototype.isTemplateRef = function (value) {
            return value instanceof i0.TemplateRef;
        };
        return TopNavHeaderComponent;
    }());
    TopNavHeaderComponent.ɵfac = function TopNavHeaderComponent_Factory(t) { return new (t || TopNavHeaderComponent)(); };
    TopNavHeaderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TopNavHeaderComponent, selectors: [["pro-top-nav-header"], ["", "pro-top-nav-header", ""]], hostVars: 4, hostBindings: function TopNavHeaderComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵclassMap(ctx.baseClassName);
                i0.ɵɵclassProp("light", ctx.theme === "light");
            }
        }, inputs: { theme: "theme", menuData: "menuData", logo: "logo", title: "title", contentWidth: "contentWidth", rightContentRender: "rightContentRender", menuHeaderRender: "menuHeaderRender" }, outputs: { onMenuHeaderClick: "onMenuHeaderClick" }, exportAs: ["proTopNavHeader"], decls: 9, vars: 31, consts: [[3, "ngClass"], [3, "click"], ["key", "logo", "id", "logo"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["defaultHeaderTemplate", ""], [2, "flex", "1", "overflow-x", "auto", "overflow-y", "hidden"], [3, "menuData", "theme", "mode"], ["href", "/"], [3, "ngSwitch"], [3, "ngTemplateOutlet", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [3, "ngTemplateOutlet"], ["alt", "logo", 3, "src"]], template: function TopNavHeaderComponent_Template(rf, ctx) {
            if (rf & 1) {
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
            }
            if (rf & 2) {
                var _r1 = i0.ɵɵreference(5);
                i0.ɵɵclassMapInterpolate1("", ctx.baseClassName, "-main");
                i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(22, _c0$8, ctx.contentWidth === "Fixed"));
                i0.ɵɵadvance(1);
                i0.ɵɵclassMapInterpolate1("", ctx.baseClassName, "-left");
                i0.ɵɵadvance(1);
                i0.ɵɵclassMapInterpolate1("", ctx.baseClassName, "-logo");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngTemplateOutlet", ctx.menuHeaderRender ? ctx.menuHeaderRender : _r1)("ngTemplateOutletContext", i0.ɵɵpureFunction2(24, _c1$5, ctx.title, ctx.title));
                i0.ɵɵadvance(3);
                i0.ɵɵclassMapInterpolate1("", ctx.baseClassName, "-menu");
                i0.ɵɵstyleProp("max-width", ctx.maxWidth, "px");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("menuData", ctx.menuData)("theme", ctx.theme)("mode", "horizontal");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngTemplateOutlet", ctx.rightContentRender)("ngTemplateOutletContext", i0.ɵɵpureFunction1(29, _c3$3, i0.ɵɵpureFunction1(27, _c2$4, ctx.theme)));
            }
        }, directives: [i1.NgClass, i1.NgTemplateOutlet, BaseMenuComponent, i1.NgSwitch, i1.NgSwitchCase], styles: [".ant-pro-top-nav-header{position:relative;width:100%;height:64px;box-shadow:0 3px 6px -4px rgba(0,0,0,.12),0 6px 16px 0 rgba(0,0,0,.08),0 9px 28px 8px rgba(0,0,0,.05);transition:background .3s,width .2s}.ant-pro-top-nav-header .ant-menu-submenu.ant-menu-submenu-horizontal{height:100%;line-height:64px}.ant-pro-top-nav-header .ant-menu-submenu.ant-menu-submenu-horizontal .ant-menu-submenu-title{height:100%}.ant-pro-top-nav-header.light{background-color:#fff}.ant-pro-top-nav-header.light h1{color:#002140}.ant-pro-top-nav-header-main{display:flex;height:64px;padding-left:24px}.ant-pro-top-nav-header-main.wide{max-width:1200px;margin:auto;padding-left:0}.ant-pro-top-nav-header-main .left{display:flex;flex:1}.ant-pro-top-nav-header-main .right{width:324px}.ant-pro-top-nav-header-logo{position:relative;width:165px;height:64px;overflow:hidden;line-height:64px;transition:all .3s}.ant-pro-top-nav-header-logo img{display:inline-block;height:32px;vertical-align:middle}.ant-pro-top-nav-header-logo h1{display:inline-block;margin:0 0 0 12px;color:#fff;font-weight:400;font-size:16px;vertical-align:top}.ant-pro-top-nav-header-menu .ant-menu.ant-menu-horizontal{height:64px;line-height:64px;border:none}"], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TopNavHeaderComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pro-top-nav-header,[pro-top-nav-header]',
                        templateUrl: 'top-nav-header.component.html',
                        styleUrls: ['top-nav-header.component.less'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        exportAs: 'proTopNavHeader',
                        preserveWhitespaces: false,
                        host: {
                            '[class]': "baseClassName",
                            '[class.light]': "theme === 'light'"
                        }
                    }]
            }], function () { return []; }, { theme: [{
                    type: i0.Input
                }], menuData: [{
                    type: i0.Input
                }], logo: [{
                    type: i0.Input
                }], title: [{
                    type: i0.Input
                }], contentWidth: [{
                    type: i0.Input
                }], rightContentRender: [{
                    type: i0.Input
                }], menuHeaderRender: [{
                    type: i0.Input
                }], onMenuHeaderClick: [{
                    type: i0.Output
                }] });
    })();

    function ReuseTabMenuComponent_li_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r2_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "li", 5);
            i0.ɵɵlistener("click", function ReuseTabMenuComponent_li_1_Template_li_click_0_listener($event) { i0.ɵɵrestoreView(_r2_1); var ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.click($event, "refresh"); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵproperty("innerHTML", "\u5237\u65B0", i0.ɵɵsanitizeHtml);
        }
    }
    var ReuseTabMenuComponent = /** @class */ (function () {
        function ReuseTabMenuComponent() {
            this.close = new i0.EventEmitter();
        }
        ReuseTabMenuComponent.prototype.documentClick = function (event) {
            this.closeMenu(event);
        };
        ReuseTabMenuComponent.prototype.documentContextmenu = function (event) {
            this.closeMenu(event);
        };
        Object.defineProperty(ReuseTabMenuComponent.prototype, "includeNonCloseable", {
            get: function () {
                return this.event.ctrlKey;
            },
            enumerable: false,
            configurable: true
        });
        ReuseTabMenuComponent.prototype.ngOnInit = function () {
            if (this.includeNonCloseable)
                this.item.closable = true;
        };
        ReuseTabMenuComponent.prototype.notify = function (type) {
            this.close.next({
                type: type,
                item: this.item,
                includeNonCloseable: this.includeNonCloseable,
            });
        };
        ReuseTabMenuComponent.prototype.click = function (e, type) {
            e.preventDefault();
            e.stopPropagation();
            if (type === 'refresh' && !this.item.refreshable)
                return;
            if (type === 'close' && !this.item.closable)
                return;
            if (type === 'closeRight' && this.item.last)
                return;
            this.notify(type);
        };
        ReuseTabMenuComponent.prototype.closeMenu = function (event) {
            if (event.type === 'click' && event.button === 2)
                return;
            this.notify(null);
        };
        return ReuseTabMenuComponent;
    }());
    ReuseTabMenuComponent.ɵfac = function ReuseTabMenuComponent_Factory(t) { return new (t || ReuseTabMenuComponent)(); };
    ReuseTabMenuComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ReuseTabMenuComponent, selectors: [["pro-reuse-tab-context-menu"]], hostBindings: function ReuseTabMenuComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("click", function ReuseTabMenuComponent_click_HostBindingHandler($event) { return ctx.documentClick($event); }, false, i0.ɵɵresolveDocument)("contextmenu", function ReuseTabMenuComponent_contextmenu_HostBindingHandler($event) { return ctx.documentContextmenu($event); }, false, i0.ɵɵresolveDocument);
            }
        }, inputs: { item: "item", event: "event" }, outputs: { close: "close" }, exportAs: ["proReuseTabContextMenu"], decls: 5, vars: 6, consts: [["nz-menu", ""], ["nz-menu-item", "", "data-type", "refresh", 3, "innerHTML", "click", 4, "ngIf"], ["nz-menu-item", "", "data-type", "close", 3, "nzDisabled", "innerHTML", "click"], ["nz-menu-item", "", "data-type", "closeOther", 3, "innerHTML", "click"], ["nz-menu-item", "", "data-type", "closeRight", 3, "nzDisabled", "innerHTML", "click"], ["nz-menu-item", "", "data-type", "refresh", 3, "innerHTML", "click"]], template: function ReuseTabMenuComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "ul", 0);
                i0.ɵɵtemplate(1, ReuseTabMenuComponent_li_1_Template, 1, 1, "li", 1);
                i0.ɵɵelementStart(2, "li", 2);
                i0.ɵɵlistener("click", function ReuseTabMenuComponent_Template_li_click_2_listener($event) { return ctx.click($event, "close"); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "li", 3);
                i0.ɵɵlistener("click", function ReuseTabMenuComponent_Template_li_click_3_listener($event) { return ctx.click($event, "closeOther"); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "li", 4);
                i0.ɵɵlistener("click", function ReuseTabMenuComponent_Template_li_click_4_listener($event) { return ctx.click($event, "closeRight"); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.item.refreshable);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("nzDisabled", !ctx.item.closable)("innerHTML", "\u5173\u95ED", i0.ɵɵsanitizeHtml);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("innerHTML", "\u5173\u95ED\u5176\u4ED6", i0.ɵɵsanitizeHtml);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("nzDisabled", ctx.item.last)("innerHTML", "\u5173\u95ED\u53F3\u4FA7", i0.ɵɵsanitizeHtml);
            }
        }, directives: [i1$1.NzMenuDirective, i1.NgIf, i1$1.NzMenuItemDirective], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ReuseTabMenuComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pro-reuse-tab-context-menu',
                        template: "\n      <ul nz-menu>\n          <li nz-menu-item (click)=\"click($event, 'refresh')\" *ngIf=\"item.refreshable\" data-type=\"refresh\" [innerHTML]=\"'\u5237\u65B0'\"></li>\n          <li nz-menu-item (click)=\"click($event, 'close')\" data-type=\"close\" [nzDisabled]=\"!item.closable\" [innerHTML]=\"'\u5173\u95ED'\"></li>\n          <li nz-menu-item (click)=\"click($event, 'closeOther')\" data-type=\"closeOther\" [innerHTML]=\"'\u5173\u95ED\u5176\u4ED6'\"></li>\n          <li nz-menu-item (click)=\"click($event, 'closeRight')\" data-type=\"closeRight\" [nzDisabled]=\"item.last\" [innerHTML]=\"'\u5173\u95ED\u53F3\u4FA7'\"></li>\n      </ul>\n  ",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        exportAs: 'proReuseTabContextMenu',
                        preserveWhitespaces: false
                    }]
            }], function () { return []; }, { item: [{
                    type: i0.Input
                }], event: [{
                    type: i0.Input
                }], close: [{
                    type: i0.Output
                }], documentClick: [{
                    type: i0.HostListener,
                    args: ['document:click', ['$event']]
                }], documentContextmenu: [{
                    type: i0.HostListener,
                    args: ['document:contextmenu', ['$event']]
                }] });
    })();

    var ReuseTabMenuService = /** @class */ (function () {
        function ReuseTabMenuService(overlay) {
            this.overlay = overlay;
            this.show = new rxjs.Subject();
            this.close = new rxjs.Subject();
        }
        ReuseTabMenuService.prototype.remove = function () {
            if (!this.ref)
                return;
            this.ref.detach();
            this.ref.dispose();
            this.ref = null;
        };
        ReuseTabMenuService.prototype.open = function (context) {
            var _this = this;
            this.remove();
            var event = context.event, item = context.item;
            var fakeElement = new i0.ElementRef({
                getBoundingClientRect: function () { return ({
                    bottom: event.clientY,
                    height: 0,
                    left: event.clientX,
                    right: event.clientX,
                    top: event.clientY,
                    width: 0,
                }); },
            });
            var positions = [
                new i1$3.ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
                new i1$3.ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
            ];
            var positionStrategy = this.overlay.position().flexibleConnectedTo(fakeElement).withPositions(positions);
            this.ref = this.overlay.create({
                positionStrategy: positionStrategy,
                panelClass: 'ant-pro-reuse-tab-cm',
                scrollStrategy: this.overlay.scrollStrategies.close(),
            });
            var comp = this.ref.attach(new portal.ComponentPortal(ReuseTabMenuComponent));
            var instance = comp.instance;
            instance.item = Object.assign({}, item);
            instance.event = event;
            var sub$ = new rxjs.Subscription();
            sub$.add(instance.close.subscribe(function (res) {
                _this.close.next(res);
                _this.remove();
            }));
            comp.onDestroy(function () { return sub$.unsubscribe(); });
        };
        return ReuseTabMenuService;
    }());
    ReuseTabMenuService.ɵfac = function ReuseTabMenuService_Factory(t) { return new (t || ReuseTabMenuService)(i0.ɵɵinject(i1$3.Overlay)); };
    ReuseTabMenuService.ɵprov = i0.ɵɵdefineInjectable({ token: ReuseTabMenuService, factory: ReuseTabMenuService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ReuseTabMenuService, [{
                type: i0.Injectable
            }], function () { return [{ type: i1$3.Overlay }]; }, null);
    })();

    var ScrollService = /** @class */ (function () {
        function ScrollService(_doc, platform) {
            this._doc = _doc;
            this.platform = platform;
        }
        ScrollService.prototype._getDoc = function () {
            return this._doc || document;
        };
        ScrollService.prototype._getWin = function () {
            var doc = this._getDoc();
            return doc.defaultView || window;
        };
        /**
         * 获取滚动条位置
         * @param element 指定元素，默认 `window`
         */
        ScrollService.prototype.getScrollPosition = function (element) {
            if (!this.platform.isBrowser) {
                return [0, 0];
            }
            var win = this._getWin();
            if (element && element !== win) {
                return [element.scrollLeft, element.scrollTop];
            }
            else {
                return [win.pageXOffset, win.pageYOffset];
            }
        };
        /**
         * 设置滚动条位置
         * @param element 指定元素
         */
        ScrollService.prototype.scrollToPosition = function (element, position) {
            if (!this.platform.isBrowser) {
                return;
            }
            (element || this._getWin()).scrollTo(position[0], position[1]);
        };
        /**
         * 设置滚动条至指定元素
         * @param element 指定元素，默认 `document.body`
         * @param topOffset 偏移值，默认 `0`
         */
        ScrollService.prototype.scrollToElement = function (element, topOffset) {
            if (topOffset === void 0) { topOffset = 0; }
            if (!this.platform.isBrowser) {
                return;
            }
            if (!element) {
                element = this._getDoc().body;
            }
            element.scrollIntoView();
            var win = this._getWin();
            if (win && win.scrollBy) {
                win.scrollBy(0, element.getBoundingClientRect().top - topOffset);
                if (win.pageYOffset < 20) {
                    win.scrollBy(0, -win.pageYOffset);
                }
            }
        };
        /**
         * 滚动至顶部
         * @param topOffset 偏移值，默认 `0`
         */
        ScrollService.prototype.scrollToTop = function (topOffset) {
            if (topOffset === void 0) { topOffset = 0; }
            if (!this.platform.isBrowser) {
                return;
            }
            this.scrollToElement(this._getDoc().body, topOffset);
        };
        return ScrollService;
    }());
    ScrollService.ɵfac = function ScrollService_Factory(t) { return new (t || ScrollService)(i0.ɵɵinject(i1.DOCUMENT), i0.ɵɵinject(i1$4.Platform)); };
    ScrollService.ɵprov = i0.ɵɵdefineInjectable({ token: ScrollService, factory: ScrollService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ScrollService, [{
                type: i0.Injectable,
                args: [{ providedIn: 'root' }]
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1.DOCUMENT]
                        }] }, { type: i1$4.Platform }];
        }, null);
    })();

    var ReuseTabService = /** @class */ (function () {
        // #endregion
        function ReuseTabService(injector) {
            this.injector = injector;
            this._inited = false;
            this._max = 500;
            this._keepingScroll = false;
            this._cachedChange = new rxjs.BehaviorSubject(null);
            this._cached = [];
            this._titleCached = {};
            this._closableCached = {};
            this.positionBuffer = {};
            this.debug = false;
            /** 排除规则，限 `mode=URL` */
            this.excludes = [];
        }
        Object.defineProperty(ReuseTabService.prototype, "snapshot", {
            get: function () {
                return this.injector.get(i1$2.ActivatedRoute).snapshot;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ReuseTabService.prototype, "inited", {
            // #region public
            get: function () {
                return this._inited;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ReuseTabService.prototype, "curUrl", {
            /** 当前路由地址 */
            get: function () {
                return this.getUrl(this.snapshot);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ReuseTabService.prototype, "curQueryParams", {
            /** 当前路由跳转参数 **/
            get: function () {
                return this.snapshot.queryParams;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ReuseTabService.prototype, "curUrlWithQueryParams", {
            /** url和路由参数 **/
            get: function () {
                var router = this.injector.get(i1$2.Router);
                var urlWithQueryParams = router.serializeUrl(router.createUrlTree([this.curUrl], { queryParams: this.curQueryParams }));
                return urlWithQueryParams;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ReuseTabService.prototype, "max", {
            /** 允许最多复用多少个页面，取值范围 `2-500`，值发生变更时会强制关闭且忽略可关闭条件 */
            set: function (value) {
                this._max = Math.min(Math.max(value, 2), 500);
                for (var i = this._cached.length; i > this._max; i--) {
                    this._cached.pop();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ReuseTabService.prototype, "keepingScroll", {
            get: function () {
                return this._keepingScroll;
            },
            set: function (value) {
                this._keepingScroll = value;
                this.initScroll();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ReuseTabService.prototype, "items", {
            /** 获取已缓存的路由 */
            get: function () {
                return this._cached;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ReuseTabService.prototype, "count", {
            /** 获取当前缓存的路由总数 */
            get: function () {
                return this._cached.length;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ReuseTabService.prototype, "change", {
            /** 订阅缓存变更通知 */
            get: function () {
                return this._cachedChange.asObservable(); // .pipe(filter(w => w !== null));
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ReuseTabService.prototype, "title", {
            /** 自定义当前标题 */
            set: function (value) {
                var urlWithQueryParams = this.curUrlWithQueryParams;
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
            },
            enumerable: false,
            configurable: true
        });
        /** 获取指定路径缓存所在位置，`-1` 表示无缓存 */
        ReuseTabService.prototype.index = function (url, queryParams) {
            var _this = this;
            return this._cached.findIndex(function (w) { return w.url === url && _this.queryParamsEqual(queryParams, w._snapshot.queryParams); });
        };
        /** 获取指定路径缓存是否存在 */
        ReuseTabService.prototype.exists = function (url, queryParams) {
            return this.index(url, queryParams) !== -1;
        };
        /** 获取指定路径缓存 */
        ReuseTabService.prototype.get = function (url, queryParams) {
            var _this = this;
            return this._cached.find(function (w) { return w.url === url && _this.queryParamsEqual(queryParams, w._snapshot.queryParams); }) || null;
        };
        ReuseTabService.prototype.remove = function (url, queryParams, includeNonCloseable) {
            var idx = typeof url === 'string' ? this.index(url, queryParams) : url;
            var item = idx !== -1 ? this._cached[idx] : null;
            if (!item || (!includeNonCloseable && !item.closable))
                return false;
            this.destroy(item._handle);
            this._cached.splice(idx, 1);
            // 删除标题缓存
            var router = this.injector.get(i1$2.Router);
            var urlWithQueryParams = router.serializeUrl(router.createUrlTree([item.url], { queryParams: item._snapshot.queryParams }));
            delete this._titleCached[urlWithQueryParams];
            return true;
        };
        /**
         * 常用于添加(修改)完成后关闭页面并跳转到列表页，并刷新列表页
         * @param toUrl
         * @param queryParams
         */
        ReuseTabService.prototype.closeCurAndToList = function (toUrl, queryParams) {
            // 缓存当前页数据
            var activatedRoute = this.injector.get(i1$2.ActivatedRoute);
            // 刷新列表页并跳转
            this.refreshPage(toUrl, queryParams);
            this.injector.get(i1$2.Router).navigate([toUrl], { queryParams: queryParams }).then();
            // 关闭当前页
            this.close(this.getUrl(activatedRoute.snapshot), activatedRoute.snapshot.queryParams, true, false);
        };
        /**
         * 刷新指定页面，页面需要实现Hook。
         * @param url: 全路径
         * @param queryParams
         */
        ReuseTabService.prototype.refreshPage = function (url, queryParams) {
            if (this.curUrl === url && this.queryParamsEqual(this.curQueryParams, queryParams)) {
                if (this.componentRef) {
                    this.runHook('onReuseInit', this.componentRef, "refresh");
                }
                else {
                    console.info('无法刷新未被缓存过的当前页');
                }
            }
            else {
                var reuseTabCached = this.get(url, queryParams);
                if (reuseTabCached && reuseTabCached._handle) {
                    this.runHook('onReuseInit', reuseTabCached._handle.componentRef, "refresh");
                }
            }
        };
        /**
         * 根据URL移除标签
         *
         * @param [includeNonCloseable=false] 是否强制包含不可关闭
         */
        ReuseTabService.prototype.close = function (url, queryParams, includeNonCloseable, autoPos) {
            if (includeNonCloseable === void 0) { includeNonCloseable = false; }
            if (autoPos === void 0) { autoPos = true; }
            this.removeUrlBuffer = url;
            this.removeQueryParamBuffer = queryParams;
            this.remove(url, queryParams, includeNonCloseable);
            if (autoPos) {
                this._cachedChange.next({ active: 'close', url: url, queryParams: queryParams, list: this._cached });
            }
            this.di('close tag', url);
            return true;
        };
        /**
         * 清除右边
         *
         * @param [includeNonCloseable=false] 是否强制包含不可关闭
         */
        ReuseTabService.prototype.closeRight = function (url, queryParams, includeNonCloseable) {
            if (includeNonCloseable === void 0) { includeNonCloseable = false; }
            var start = this.index(url, queryParams);
            for (var i = this.count - 1; i > start; i--) {
                this.remove(i, queryParams, includeNonCloseable);
            }
            this.removeUrlBuffer = null;
            this.removeQueryParamBuffer = {};
            this._cachedChange.next({ active: 'closeRight', url: url, queryParams: queryParams, list: this._cached });
            this.di('close right tages', url);
            return true;
        };
        /**
         * 清除所有缓存
         *
         * @param [includeNonCloseable=false] 是否强制包含不可关闭
         */
        ReuseTabService.prototype.clear = function (includeNonCloseable) {
            var _this = this;
            if (includeNonCloseable === void 0) { includeNonCloseable = false; }
            this._cached.forEach(function (w) {
                if (!includeNonCloseable && w.closable)
                    _this.destroy(w._handle);
            });
            this._cached = this._cached.filter(function (w) { return !includeNonCloseable && !w.closable; });
            this.removeUrlBuffer = null;
            this.removeQueryParamBuffer = {};
            this._cachedChange.next({ active: 'clear', list: this._cached });
            this.di('clear all catch');
        };
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
        ReuseTabService.prototype.move = function (url, queryParams, position) {
            var _this = this;
            var start = this._cached.findIndex(function (w) { return w.url === url && _this.queryParamsEqual(queryParams, w._snapshot.queryParams); });
            if (start === -1)
                return;
            var data = this._cached.slice();
            data.splice(position < 0 ? data.length + position : position, 0, data.splice(start, 1)[0]);
            this._cached = data;
            this._cachedChange.next({
                active: 'move',
                url: url,
                queryParams: queryParams,
                position: position,
                list: this._cached,
            });
        };
        /**
         * 强制关闭当前路由（包含不可关闭状态），并重新导航至 `newUrl` 路由
         */
        ReuseTabService.prototype.replace = function (newUrl, queryParams) {
            var curUrl = this.curUrl;
            var curQueryParams = this.curQueryParams;
            if (this.exists(curUrl, curQueryParams)) {
                this.close(curUrl, curQueryParams, true);
            }
            else {
                this.removeUrlBuffer = curUrl;
                this.removeQueryParamBuffer = curQueryParams;
            }
            this.injector.get(i1$2.Router).navigate([newUrl], { queryParams: queryParams }).then();
        };
        /**
         * 获取标题，顺序如下：
         *
         * 1. 组件内使用 `ReuseTabService.title = 'new title'` 重新指定文本
         * 2. 路由配置中 data 属性中包含 locale > name
         *
         * @param url 指定URL
         * @param route 指定路由快照
         */
        ReuseTabService.prototype.getTitle = function (url, route) {
            var router = this.injector.get(i1$2.Router);
            var urlWithQueryParams = router.serializeUrl(router.createUrlTree([url], { queryParams: route.queryParams }));
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
        };
        /**
         * 清除标题缓存
         */
        ReuseTabService.prototype.clearTitleCached = function () {
            this._titleCached = {};
        };
        Object.defineProperty(ReuseTabService.prototype, "closable", {
            /** 自定义当前 `closable` 状态 */
            set: function (value) {
                var urlWithQueryParams = this.curUrlWithQueryParams;
                this._closableCached[urlWithQueryParams] = value;
                this.di('update current tag closable: ', value);
                this._cachedChange.next({
                    active: 'closable',
                    closable: value,
                    list: this._cached,
                });
            },
            enumerable: false,
            configurable: true
        });
        /**
         * 获取 `closable` 状态，顺序如下：
         *
         * 1. 组件内使用 `ReuseTabService.closable = true` 重新指定 `closable` 状态
         * 2. 路由配置中 data 属性中包含 `reuseClosable`
         *
         * @param url 指定URL
         * @param route 指定路由快照
         */
        ReuseTabService.prototype.getClosable = function (url, route) {
            if (typeof this._closableCached[url] !== 'undefined') {
                var router = this.injector.get(i1$2.Router);
                var urlWithQueryParams = router.serializeUrl(router.createUrlTree([url], { queryParams: route.queryParams }));
                return this._closableCached[urlWithQueryParams];
            }
            if (route && route.data && typeof route.data.reuseClosable === 'boolean')
                return route.data.reuseClosable;
            return true;
        };
        ReuseTabService.prototype.getRefreshable = function (url, route) {
            if (route && route.data && typeof route.data.reuseRefreshable === 'boolean')
                return route.data.reuseClosable;
            return true;
        };
        /**
         * 清空 `closable` 缓存
         */
        ReuseTabService.prototype.clearClosableCached = function () {
            this._closableCached = {};
        };
        ReuseTabService.prototype.getTruthRoute = function (route) {
            var next = route;
            while (next.firstChild)
                next = next.firstChild;
            return next;
        };
        /**
         * 根据快照获取URL地址
         */
        ReuseTabService.prototype.getUrl = function (route) {
            var next = this.getTruthRoute(route);
            var segments = [];
            while (next) {
                segments.push(next.url.join('/'));
                next = next.parent;
            }
            var url = '/' +
                segments
                    .filter(function (i) { return i; })
                    .reverse()
                    .join('/');
            return url;
        };
        /**
         * 检查快照是否允许被复用
         */
        ReuseTabService.prototype.can = function (route) {
            var url = this.getUrl(route);
            if (url === this.removeUrlBuffer && this.queryParamsEqual(route.queryParams, this.removeQueryParamBuffer))
                return false;
            if (route.data && typeof route.data.reuse === 'boolean')
                return route.data.reuse;
            return !this.isExclude(url);
        };
        ReuseTabService.prototype.isExclude = function (url) {
            return this.excludes.findIndex(function (r) { return r.test(url); }) !== -1;
        };
        /**
         * 刷新，触发一个 refresh 类型事件
         */
        ReuseTabService.prototype.refresh = function (data) {
            this._cachedChange.next({ active: 'refresh', data: data });
        };
        // #endregion
        // #region privates
        ReuseTabService.prototype.destroy = function (_handle) {
            if (_handle && _handle.componentRef && _handle.componentRef.destroy)
                _handle.componentRef.destroy();
        };
        ReuseTabService.prototype.di = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!this.debug)
                return;
            console.warn.apply(console, __spread(args));
        };
        ReuseTabService.prototype.init = function () {
            this.initScroll();
            this._inited = true;
        };
        ReuseTabService.prototype.runHook = function (method, comp, type) {
            if (type === void 0) { type = 'init'; }
            // 非当前页
            if (typeof comp === 'number') {
                var item = this._cached[comp];
                comp = item._handle.componentRef;
            }
            var compThis = comp.instance;
            if (comp == null || !compThis) {
                return;
            }
            var fn = compThis[method];
            if (typeof fn !== 'function') {
                return;
            }
            if (method === 'onReuseInit') {
                fn.call(compThis, type);
            }
            else {
                fn.call(compThis);
            }
        };
        ReuseTabService.prototype.hasInValidRoute = function (route) {
            return !route.routeConfig || !!route.routeConfig.loadChildren || !!route.routeConfig.children;
        };
        /**
         * 决定是否允许路由复用，若 `true` 会触发 `store`
         */
        ReuseTabService.prototype.shouldDetach = function (route) {
            if (this.hasInValidRoute(route))
                return false;
            var ret = this.can(route);
            this.di('#shouldDetach', ret, this.getUrl(route));
            return ret;
        };
        /**
         * 存储
         */
        ReuseTabService.prototype.store = function (_snapshot, _handle) {
            var url = this.getUrl(_snapshot);
            var idx = this.index(url, _snapshot.queryParams);
            var isAdd = idx === -1;
            var item = {
                title: this.getTitle(url, _snapshot),
                closable: this.getClosable(url, _snapshot),
                refreshable: this.getRefreshable(url, _snapshot),
                position: this.getKeepingScroll(url, _snapshot) ? this.positionBuffer[url] : null,
                url: url,
                _snapshot: _snapshot,
                _handle: _handle,
            };
            if (isAdd) {
                if (this.count >= this._max) {
                    // Get the oldest closable location
                    var closeIdx = this._cached.findIndex(function (w) { return w.closable; });
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
                this._cachedChange.next({ active: 'override', item: item, list: this._cached });
            }
        };
        /**
         * 决定是否允许应用缓存数据
         */
        ReuseTabService.prototype.shouldAttach = function (route) {
            if (this.hasInValidRoute(route))
                return false;
            var url = this.getUrl(route);
            var data = this.get(url, route.queryParams);
            var ret = !!(data && data._handle);
            this.di('#shouldAttach', ret, url);
            if (ret) {
                var compRef = data._handle.componentRef;
                if (compRef) {
                    this.componentRef = compRef;
                    this.runHook('onReuseInit', compRef);
                }
            }
            else {
                this._cachedChange.next({ active: 'add', url: url, queryParams: route.queryParams, list: this._cached });
            }
            return ret;
        };
        /**
         * 提取复用数据
         */
        ReuseTabService.prototype.retrieve = function (route) {
            if (this.hasInValidRoute(route))
                return null;
            var url = this.getUrl(route);
            var data = this.get(url, route.queryParams);
            var ret = (data && data._handle) || null;
            this.di('#retrieve', url, ret);
            return ret;
        };
        /**
         * 决定是否应该进行复用路由处理
         */
        ReuseTabService.prototype.shouldReuseRoute = function (future, curr) {
            var ret = future.routeConfig === curr.routeConfig;
            if (!ret)
                return false;
            var path = ((future.routeConfig && future.routeConfig.path) || '');
            if (path.length > 0) {
                // if (this.routeParamMatchMode === 'strict') {
                //   ret = this.getUrl(future) === this.getUrl(curr);
                // } else {
                //   ret = path === ((curr.routeConfig && curr.routeConfig.path) || '');
                // }
                ret = this.getUrl(future) === this.getUrl(curr) && this.queryParamsEqual(future.queryParams, curr.queryParams);
            }
            this.di('=====================');
            this.di('#shouldReuseRoute', ret, this.getUrl(curr) + "=>" + this.getUrl(future), future, curr);
            return ret;
        };
        // #region scroll
        /**
         * 获取 `keepingScroll` 状态，顺序如下：
         *
         * 1. 路由配置中 data 属性中包含 `keepingScroll`
         * 2. 组件 `keepingScroll` 值
         */
        ReuseTabService.prototype.getKeepingScroll = function (url, route) {
            if (route && route.data && typeof route.data.reuseKeepingScroll === 'boolean')
                return route.data.reuseKeepingScroll;
            return this.keepingScroll;
        };
        Object.defineProperty(ReuseTabService.prototype, "isDisabledInRouter", {
            get: function () {
                var routerConfig = this.injector.get(i1$2.ROUTER_CONFIGURATION, {});
                return routerConfig.scrollPositionRestoration === 'disabled';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ReuseTabService.prototype, "ss", {
            get: function () {
                return this.injector.get(ScrollService);
            },
            enumerable: false,
            configurable: true
        });
        ReuseTabService.prototype.initScroll = function () {
            var _this = this;
            if (this._router$) {
                this._router$.unsubscribe();
            }
            this._router$ = this.injector.get(i1$2.Router).events.subscribe(function (e) {
                if (e instanceof i1$2.NavigationStart) {
                    var url = _this.curUrl;
                    if (_this.getKeepingScroll(url, _this.getTruthRoute(_this.snapshot))) {
                        _this.positionBuffer[url] = _this.ss.getScrollPosition(_this.keepingScrollContainer);
                    }
                    else {
                        delete _this.positionBuffer[url];
                    }
                }
                else if (e instanceof i1$2.NavigationEnd) {
                    var url = _this.curUrl;
                    var item_1 = _this.get(url, _this.snapshot.queryParams);
                    if (item_1 && item_1.position && _this.getKeepingScroll(url, _this.getTruthRoute(_this.snapshot))) {
                        if (_this.isDisabledInRouter) {
                            _this.ss.scrollToPosition(_this.keepingScrollContainer, item_1.position);
                        }
                        else {
                            setTimeout(function () { return _this.ss.scrollToPosition(_this.keepingScrollContainer, item_1.position); }, 1);
                        }
                    }
                }
            });
        };
        /**
         * 比较url查询参数
         * @param queryParams1
         * @param queryParams2
         */
        ReuseTabService.prototype.queryParamsEqual = function (queryParams1, queryParams2) {
            return JSON.stringify(queryParams1) === JSON.stringify(queryParams2);
        };
        // #endregion
        ReuseTabService.prototype.ngOnDestroy = function () {
            var _a = this, _cachedChange = _a._cachedChange, _router$ = _a._router$;
            this.clear();
            this._cached = [];
            _cachedChange.complete();
            if (_router$) {
                _router$.unsubscribe();
            }
        };
        return ReuseTabService;
    }());
    ReuseTabService.ɵfac = function ReuseTabService_Factory(t) { return new (t || ReuseTabService)(i0.ɵɵinject(i0.Injector)); };
    ReuseTabService.ɵprov = i0.ɵɵdefineInjectable({ token: ReuseTabService, factory: ReuseTabService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ReuseTabService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: i0.Injector }]; }, null);
    })();

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzTabChangeEvent = /** @class */ (function () {
        function NzTabChangeEvent() {
        }
        return NzTabChangeEvent;
    }());

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    function ProTabAddButtonComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0, 3);
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngTemplateOutlet", ctx_r0.addIcon);
        }
    }
    function ProTabAddButtonComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelement(1, "i", 4);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzType", ctx_r1.addIcon);
        }
    }
    var ProTabAddButtonComponent = /** @class */ (function () {
        function ProTabAddButtonComponent(elementRef) {
            this.elementRef = elementRef;
            this.addIcon = 'plus';
            this.element = this.elementRef.nativeElement;
        }
        ProTabAddButtonComponent.prototype.getElementWidth = function () {
            return this.element.offsetWidth || 0;
        };
        ProTabAddButtonComponent.prototype.getElementHeight = function () {
            return this.element.offsetHeight || 0;
        };
        ProTabAddButtonComponent.prototype.isNonEmptyString = function (value) {
            return typeof value === 'string' && value !== '';
        };
        ProTabAddButtonComponent.prototype.isTemplateRef = function (value) {
            return value instanceof i0.TemplateRef;
        };
        return ProTabAddButtonComponent;
    }());
    ProTabAddButtonComponent.ɵfac = function ProTabAddButtonComponent_Factory(t) { return new (t || ProTabAddButtonComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    ProTabAddButtonComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ProTabAddButtonComponent, selectors: [["pro-tab-add-button"], ["button", "pro-tab-add-button", ""]], hostAttrs: ["aria-label", "Add tab", "type", "button", 1, "ant-pro-tabs-nav-add"], inputs: { addIcon: "addIcon" }, decls: 3, vars: 3, consts: [[3, "ngSwitch"], [3, "ngTemplateOutlet", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [3, "ngTemplateOutlet"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"]], template: function ProTabAddButtonComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementContainerStart(0, 0);
                i0.ɵɵtemplate(1, ProTabAddButtonComponent_ng_container_1_Template, 1, 1, "ng-container", 1);
                i0.ɵɵtemplate(2, ProTabAddButtonComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
                i0.ɵɵelementContainerEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngSwitch", true);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngSwitchCase", ctx.isTemplateRef(ctx.addIcon));
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngSwitchCase", ctx.isNonEmptyString(ctx.addIcon));
            }
        }, directives: [i1.NgSwitch, i1.NgSwitchCase, i1.NgTemplateOutlet, i2.NzIconDirective], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProTabAddButtonComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pro-tab-add-button, button[pro-tab-add-button]',
                        template: "\n    <ng-container [ngSwitch]=\"true\">\n      <ng-container *ngSwitchCase=\"isTemplateRef(addIcon)\" [ngTemplateOutlet]=\"addIcon\"></ng-container>\n      <ng-container *ngSwitchCase=\"isNonEmptyString(addIcon)\"><i nz-icon [nzType]=\"addIcon\" nzTheme=\"outline\"></i></ng-container>\n    </ng-container>\n  ",
                        host: {
                            class: 'ant-pro-tabs-nav-add',
                            'aria-label': 'Add tab',
                            type: 'button'
                        }
                    }]
            }], function () { return [{ type: i0.ElementRef }]; }, { addIcon: [{
                    type: i0.Input
                }] });
    })();

    var ProTabNavItemDirective = /** @class */ (function () {
        function ProTabNavItemDirective(elementRef) {
            this.elementRef = elementRef;
            this.disabled = false;
            this.active = false;
            this.el = elementRef.nativeElement;
            this.parentElement = this.el.parentElement;
        }
        ProTabNavItemDirective.prototype.focus = function () {
            this.el.focus();
        };
        Object.defineProperty(ProTabNavItemDirective.prototype, "width", {
            get: function () {
                return this.parentElement.offsetWidth;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProTabNavItemDirective.prototype, "height", {
            get: function () {
                return this.parentElement.offsetHeight;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProTabNavItemDirective.prototype, "left", {
            get: function () {
                return this.parentElement.offsetLeft;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProTabNavItemDirective.prototype, "top", {
            get: function () {
                return this.parentElement.offsetTop;
            },
            enumerable: false,
            configurable: true
        });
        return ProTabNavItemDirective;
    }());
    ProTabNavItemDirective.ɵfac = function ProTabNavItemDirective_Factory(t) { return new (t || ProTabNavItemDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    ProTabNavItemDirective.ɵdir = i0.ɵɵdefineDirective({ type: ProTabNavItemDirective, selectors: [["", "ProTabNavItem", ""]], inputs: { disabled: "disabled", tab: "tab", active: "active" } });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProTabNavItemDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[ProTabNavItem]'
                    }]
            }], function () { return [{ type: i0.ElementRef }]; }, { disabled: [{
                    type: i0.Input
                }], tab: [{
                    type: i0.Input
                }], active: [{
                    type: i0.Input
                }] });
    })();

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    function ProTabNavOperationComponent_ul_5_li_1_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0, 12);
        }
        if (rf & 2) {
            var item_r5 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵproperty("ngTemplateOutlet", item_r5.tab.label);
        }
    }
    function ProTabNavOperationComponent_ul_5_li_1_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtext(1);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var item_r5 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(item_r5.tab.label);
        }
    }
    function ProTabNavOperationComponent_ul_5_li_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r11_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "li", 8);
            i0.ɵɵlistener("click", function ProTabNavOperationComponent_ul_5_li_1_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r11_1); var item_r5 = ctx.$implicit; var ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.onSelect(item_r5); })("contextmenu", function ProTabNavOperationComponent_ul_5_li_1_Template_li_contextmenu_0_listener($event) { i0.ɵɵrestoreView(_r11_1); var item_r5 = ctx.$implicit; var ctx_r12 = i0.ɵɵnextContext(2); return ctx_r12.onContextmenu(item_r5, $event); });
            i0.ɵɵelementContainerStart(1, 9);
            i0.ɵɵtemplate(2, ProTabNavOperationComponent_ul_5_li_1_ng_container_2_Template, 1, 1, "ng-container", 10);
            i0.ɵɵtemplate(3, ProTabNavOperationComponent_ul_5_li_1_ng_container_3_Template, 2, 1, "ng-container", 11);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r5 = ctx.$implicit;
            var ctx_r4 = i0.ɵɵnextContext(2);
            i0.ɵɵclassProp("ant-pro-tabs-dropdown-menu-item-disabled", item_r5.disabled);
            i0.ɵɵproperty("nzSelected", item_r5.active)("nzDisabled", item_r5.disabled);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitch", true);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", ctx_r4.isTemplateRef(item_r5.tab.label));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", ctx_r4.isNonEmptyString(item_r5.tab.label));
        }
    }
    function ProTabNavOperationComponent_ul_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "ul", 6);
            i0.ɵɵtemplate(1, ProTabNavOperationComponent_ul_5_li_1_Template, 4, 7, "li", 7);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r2.items);
        }
    }
    function ProTabNavOperationComponent_button_6_Template(rf, ctx) {
        if (rf & 1) {
            var _r14_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 13);
            i0.ɵɵlistener("click", function ProTabNavOperationComponent_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r14_1); var ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.addClicked.emit(); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵproperty("addIcon", ctx_r3.addIcon);
        }
    }
    var _c0$7 = function () { return { minWidth: "46px" }; };
    var ProTabNavOperationComponent = /** @class */ (function () {
        function ProTabNavOperationComponent(cdr, elementRef) {
            this.cdr = cdr;
            this.elementRef = elementRef;
            this.items = [];
            this.addable = false;
            this.addIcon = 'plus';
            this.addClicked = new i0.EventEmitter();
            this.selected = new i0.EventEmitter();
            this.closeAnimationWaitTimeoutId = -1;
            this.menuOpened = false;
            this.element = this.elementRef.nativeElement;
        }
        ProTabNavOperationComponent.prototype.onSelect = function (item) {
            if (!item.disabled) {
                // ignore nzCanDeactivate
                item.tab.nzClick.emit();
                this.selected.emit(item);
            }
        };
        ProTabNavOperationComponent.prototype.onContextmenu = function (item, e) {
            if (!item.disabled) {
                item.tab.nzContextmenu.emit(e);
            }
        };
        ProTabNavOperationComponent.prototype.showItems = function () {
            clearTimeout(this.closeAnimationWaitTimeoutId);
            this.menuOpened = true;
            this.cdr.markForCheck();
        };
        ProTabNavOperationComponent.prototype.menuVisChange = function (visible) {
            var _this = this;
            if (!visible) {
                this.closeAnimationWaitTimeoutId = setTimeout(function () {
                    _this.menuOpened = false;
                    _this.cdr.markForCheck();
                }, 150);
            }
        };
        ProTabNavOperationComponent.prototype.getElementWidth = function () {
            return this.element.offsetWidth || 0;
        };
        ProTabNavOperationComponent.prototype.getElementHeight = function () {
            return this.element.offsetHeight || 0;
        };
        ProTabNavOperationComponent.prototype.ngOnDestroy = function () {
            clearTimeout(this.closeAnimationWaitTimeoutId);
        };
        ProTabNavOperationComponent.prototype.isNonEmptyString = function (value) {
            return typeof value === 'string' && value !== '';
        };
        ProTabNavOperationComponent.prototype.isTemplateRef = function (value) {
            return value instanceof i0.TemplateRef;
        };
        return ProTabNavOperationComponent;
    }());
    ProTabNavOperationComponent.ɵfac = function ProTabNavOperationComponent_Factory(t) { return new (t || ProTabNavOperationComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    ProTabNavOperationComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ProTabNavOperationComponent, selectors: [["pro-tab-nav-operation"]], hostAttrs: [1, "ant-pro-tabs-nav-operations"], hostVars: 2, hostBindings: function ProTabNavOperationComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵclassProp("ant-pro-tabs-nav-operations-hidden", ctx.items.length === 0);
            }
        }, inputs: { items: "items", addable: "addable", addIcon: "addIcon" }, outputs: { addClicked: "addClicked", selected: "selected" }, exportAs: ["ProTabNavOperation"], decls: 7, vars: 6, consts: [["nz-dropdown", "", "type", "button", "tabindex", "-1", "aria-hidden", "true", "nzOverlayClassName", "pro-tabs-dropdown", 1, "ant-pro-tabs-nav-more", 3, "nzDropdownMenu", "nzOverlayStyle", "nzMatchWidthElement", "nzVisibleChange", "mouseenter"], ["dropdownTrigger", "nzDropdown"], ["nz-icon", "", "nzType", "ellipsis"], ["menu", "nzDropdownMenu"], ["nz-menu", "", 4, "ngIf"], ["pro-tab-add-button", "", 3, "addIcon", "click", 4, "ngIf"], ["nz-menu", ""], ["nz-menu-item", "", "class", "ant-pro-tabs-dropdown-menu-item", 3, "ant-pro-tabs-dropdown-menu-item-disabled", "nzSelected", "nzDisabled", "click", "contextmenu", 4, "ngFor", "ngForOf"], ["nz-menu-item", "", 1, "ant-pro-tabs-dropdown-menu-item", 3, "nzSelected", "nzDisabled", "click", "contextmenu"], [3, "ngSwitch"], [3, "ngTemplateOutlet", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [3, "ngTemplateOutlet"], ["pro-tab-add-button", "", 3, "addIcon", "click"]], template: function ProTabNavOperationComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "button", 0, 1);
                i0.ɵɵlistener("nzVisibleChange", function ProTabNavOperationComponent_Template_button_nzVisibleChange_0_listener($event) { return ctx.menuVisChange($event); })("mouseenter", function ProTabNavOperationComponent_Template_button_mouseenter_0_listener() { return ctx.showItems(); });
                i0.ɵɵelement(2, "i", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "nz-dropdown-menu", null, 3);
                i0.ɵɵtemplate(5, ProTabNavOperationComponent_ul_5_Template, 2, 1, "ul", 4);
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(6, ProTabNavOperationComponent_button_6_Template, 1, 1, "button", 5);
            }
            if (rf & 2) {
                var _r1 = i0.ɵɵreference(4);
                i0.ɵɵproperty("nzDropdownMenu", _r1)("nzOverlayStyle", i0.ɵɵpureFunction0(5, _c0$7))("nzMatchWidthElement", null);
                i0.ɵɵadvance(5);
                i0.ɵɵproperty("ngIf", ctx.menuOpened);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.addable);
            }
        }, directives: [i1$5.NzDropDownDirective, i2.NzIconDirective, i1$5.NzDropdownMenuComponent, i1.NgIf, i1$1.NzMenuDirective, i1.NgForOf, i1$1.NzMenuItemDirective, i1.NgSwitch, i1.NgSwitchCase, i1.NgTemplateOutlet, ProTabAddButtonComponent], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProTabNavOperationComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pro-tab-nav-operation',
                        exportAs: 'ProTabNavOperation',
                        preserveWhitespaces: false,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        template: "\n    <button\n      nz-dropdown\n      class=\"ant-pro-tabs-nav-more\"\n      type=\"button\"\n      tabindex=\"-1\"\n      aria-hidden=\"true\"\n      nzOverlayClassName=\"pro-tabs-dropdown\"\n      #dropdownTrigger=\"nzDropdown\"\n      [nzDropdownMenu]=\"menu\"\n      [nzOverlayStyle]=\"{ minWidth: '46px' }\"\n      [nzMatchWidthElement]=\"null\"\n      (nzVisibleChange)=\"menuVisChange($event)\"\n      (mouseenter)=\"showItems()\"\n    >\n      <i nz-icon nzType=\"ellipsis\"></i>\n    </button>\n    <nz-dropdown-menu #menu=\"nzDropdownMenu\">\n      <ul nz-menu *ngIf=\"menuOpened\">\n        <li\n          nz-menu-item\n          *ngFor=\"let item of items\"\n          class=\"ant-pro-tabs-dropdown-menu-item\"\n          [class.ant-pro-tabs-dropdown-menu-item-disabled]=\"item.disabled\"\n          [nzSelected]=\"item.active\"\n          [nzDisabled]=\"item.disabled\"\n          (click)=\"onSelect(item)\"\n          (contextmenu)=\"onContextmenu(item, $event)\"\n        >\n          <ng-container [ngSwitch]=\"true\">\n            <ng-container *ngSwitchCase=\"isTemplateRef(item.tab.label)\" [ngTemplateOutlet]=\"item.tab.label\"></ng-container>\n            <ng-container *ngSwitchCase=\"isNonEmptyString(item.tab.label)\">{{item.tab.label}}</ng-container>\n          </ng-container>\n        </li>\n      </ul>\n    </nz-dropdown-menu>\n    <button *ngIf=\"addable\" pro-tab-add-button [addIcon]=\"addIcon\" (click)=\"addClicked.emit()\"></button>\n  ",
                        host: {
                            class: 'ant-pro-tabs-nav-operations',
                            '[class.ant-pro-tabs-nav-operations-hidden]': 'items.length === 0'
                        }
                    }]
            }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }]; }, { items: [{
                    type: i0.Input
                }], addable: [{
                    type: i0.Input
                }], addIcon: [{
                    type: i0.Input
                }], addClicked: [{
                    type: i0.Output
                }], selected: [{
                    type: i0.Output
                }] });
    })();

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var ProTabsInkBarDirective = /** @class */ (function () {
        function ProTabsInkBarDirective(elementRef, ngZone, animationMode) {
            this.elementRef = elementRef;
            this.ngZone = ngZone;
            this.animationMode = animationMode;
            this.position = 'horizontal';
            this.animated = true;
        }
        Object.defineProperty(ProTabsInkBarDirective.prototype, "_animated", {
            get: function () {
                return this.animationMode !== 'NoopAnimations' && this.animated;
            },
            enumerable: false,
            configurable: true
        });
        ProTabsInkBarDirective.prototype.alignToElement = function (element) {
            var _this = this;
            this.ngZone.runOutsideAngular(function () {
                polyfill.reqAnimFrame(function () { return _this.setStyles(element); });
            });
        };
        ProTabsInkBarDirective.prototype.setStyles = function (element) {
            var inkBar = this.elementRef.nativeElement;
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
        };
        ProTabsInkBarDirective.prototype.getLeftPosition = function (element) {
            return element ? (element.offsetLeft || 0) + 'px' : '0';
        };
        ProTabsInkBarDirective.prototype.getElementWidth = function (element) {
            return element ? (element.offsetWidth || 0) + 'px' : '0';
        };
        ProTabsInkBarDirective.prototype.getTopPosition = function (element) {
            return element ? (element.offsetTop || 0) + 'px' : '0';
        };
        ProTabsInkBarDirective.prototype.getElementHeight = function (element) {
            return element ? (element.offsetHeight || 0) + 'px' : '0';
        };
        return ProTabsInkBarDirective;
    }());
    ProTabsInkBarDirective.ɵfac = function ProTabsInkBarDirective_Factory(t) { return new (t || ProTabsInkBarDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(animations.ANIMATION_MODULE_TYPE, 8)); };
    ProTabsInkBarDirective.ɵdir = i0.ɵɵdefineDirective({ type: ProTabsInkBarDirective, selectors: [["pro-tabs-ink-bar"], ["", "pro-tabs-ink-bar", ""]], hostAttrs: [1, "ant-pro-tabs-ink-bar"], hostVars: 2, hostBindings: function ProTabsInkBarDirective_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵclassProp("ant-pro-tabs-ink-bar-animated", ctx._animated);
            }
        }, inputs: { position: "position", animated: "animated" } });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProTabsInkBarDirective, [{
                type: i0.Directive,
                args: [{
                        selector: 'pro-tabs-ink-bar, [pro-tabs-ink-bar]',
                        host: {
                            class: 'ant-pro-tabs-ink-bar',
                            '[class.ant-pro-tabs-ink-bar-animated]': '_animated'
                        }
                    }]
            }], function () {
            return [{ type: i0.ElementRef }, { type: i0.NgZone }, { type: undefined, decorators: [{
                            type: i0.Optional
                        }, {
                            type: i0.Inject,
                            args: [animations.ANIMATION_MODULE_TYPE]
                        }] }];
        }, { position: [{
                    type: i0.Input
                }], animated: [{
                    type: i0.Input
                }] });
    })();

    /**
     * Factory that creates a new ResizeObserver and allows us to stub it out in unit tests.
     */
    var NzResizeObserverFactory = /** @class */ (function () {
        function NzResizeObserverFactory() {
        }
        NzResizeObserverFactory.prototype.create = function (callback) {
            return typeof ResizeObserver__default['default'] === 'undefined' ? null : new ResizeObserver__default['default'](callback);
        };
        return NzResizeObserverFactory;
    }());
    NzResizeObserverFactory.ɵfac = function NzResizeObserverFactory_Factory(t) { return new (t || NzResizeObserverFactory)(); };
    NzResizeObserverFactory.ɵprov = i0.ɵɵdefineInjectable({ token: NzResizeObserverFactory, factory: NzResizeObserverFactory.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NzResizeObserverFactory, [{
                type: i0.Injectable,
                args: [{ providedIn: 'root' }]
            }], null, null);
    })();
    /** An injectable service that allows watching elements for changes to their content. */
    var NzResizeObserver = /** @class */ (function () {
        function NzResizeObserver(nzResizeObserverFactory) {
            this.nzResizeObserverFactory = nzResizeObserverFactory;
            /** Keeps track of the existing ResizeObservers so they can be reused. */
            this.observedElements = new Map();
        }
        NzResizeObserver.prototype.ngOnDestroy = function () {
            var _this = this;
            this.observedElements.forEach(function (_, element) { return _this.cleanupObserver(element); });
        };
        NzResizeObserver.prototype.observe = function (elementOrRef) {
            var _this = this;
            var element = coercion.coerceElement(elementOrRef);
            return new rxjs.Observable(function (observer) {
                var stream = _this.observeElement(element);
                var subscription = stream.subscribe(observer);
                return function () {
                    subscription.unsubscribe();
                    _this.unobserveElement(element);
                };
            });
        };
        /**
         * Observes the given element by using the existing ResizeObserver if available, or creating a
         * new one if not.
         */
        NzResizeObserver.prototype.observeElement = function (element) {
            if (!this.observedElements.has(element)) {
                var stream_1 = new rxjs.Subject();
                var observer = this.nzResizeObserverFactory.create(function (mutations) { return stream_1.next(mutations); });
                if (observer) {
                    observer.observe(element);
                }
                this.observedElements.set(element, { observer: observer, stream: stream_1, count: 1 });
            }
            else {
                this.observedElements.get(element).count++;
            }
            return this.observedElements.get(element).stream;
        };
        /**
         * Un-observes the given element and cleans up the underlying ResizeObserver if nobody else is
         * observing this element.
         */
        NzResizeObserver.prototype.unobserveElement = function (element) {
            if (this.observedElements.has(element)) {
                this.observedElements.get(element).count--;
                if (!this.observedElements.get(element).count) {
                    this.cleanupObserver(element);
                }
            }
        };
        /** Clean up the underlying ResizeObserver for the specified element. */
        NzResizeObserver.prototype.cleanupObserver = function (element) {
            if (this.observedElements.has(element)) {
                var _a = this.observedElements.get(element), observer = _a.observer, stream = _a.stream;
                if (observer) {
                    observer.disconnect();
                }
                stream.complete();
                this.observedElements.delete(element);
            }
        };
        return NzResizeObserver;
    }());
    NzResizeObserver.ɵfac = function NzResizeObserver_Factory(t) { return new (t || NzResizeObserver)(i0.ɵɵinject(NzResizeObserverFactory)); };
    NzResizeObserver.ɵprov = i0.ɵɵdefineInjectable({ token: NzResizeObserver, factory: NzResizeObserver.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NzResizeObserver, [{
                type: i0.Injectable,
                args: [{ providedIn: 'root' }]
            }], function () { return [{ type: NzResizeObserverFactory }]; }, null);
    })();

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var MIN_SWIPE_DISTANCE = 0.1;
    var STOP_SWIPE_DISTANCE = 0.01;
    var REFRESH_INTERVAL = 20;
    var SPEED_OFF_MULTIPLE = Math.pow(0.995, REFRESH_INTERVAL);
    var ProTabScrollListDirective = /** @class */ (function () {
        function ProTabScrollListDirective(ngZone, elementRef) {
            var _this = this;
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
            this.unsubscribe = function () { return void 0; };
            this.offsetChange = new i0.EventEmitter();
            this.tabScroll = new i0.EventEmitter();
            this.onTouchEnd = function (e) {
                if (!_this.touchPosition) {
                    return;
                }
                var lastOffset = _this.lastOffset;
                var lastTimeDiff = _this.lastTimeDiff;
                _this.lastOffset = _this.touchPosition = null;
                if (lastOffset) {
                    var distanceX = lastOffset.x / lastTimeDiff;
                    var distanceY = lastOffset.y / lastTimeDiff;
                    var absX = Math.abs(distanceX);
                    var absY = Math.abs(distanceY);
                    // Skip swipe if low distance
                    if (Math.max(absX, absY) < MIN_SWIPE_DISTANCE) {
                        return;
                    }
                    var currentX_1 = distanceX;
                    var currentY_1 = distanceY;
                    _this.motion = window.setInterval(function () {
                        if (Math.abs(currentX_1) < STOP_SWIPE_DISTANCE && Math.abs(currentY_1) < STOP_SWIPE_DISTANCE) {
                            window.clearInterval(_this.motion);
                            return;
                        }
                        currentX_1 *= SPEED_OFF_MULTIPLE;
                        currentY_1 *= SPEED_OFF_MULTIPLE;
                        _this.onOffset(currentX_1 * REFRESH_INTERVAL, currentY_1 * REFRESH_INTERVAL, e);
                    }, REFRESH_INTERVAL);
                }
            };
            this.onTouchMove = function (e) {
                if (!_this.touchPosition) {
                    return;
                }
                e.preventDefault();
                var _a = e.touches[0], screenX = _a.screenX, screenY = _a.screenY;
                var offsetX = screenX - _this.touchPosition.x;
                var offsetY = screenY - _this.touchPosition.y;
                _this.onOffset(offsetX, offsetY, e);
                var now = Date.now();
                _this.lastTimeDiff = now - _this.lastTimestamp;
                _this.lastTimestamp = now;
                _this.lastOffset = { x: offsetX, y: offsetY };
                _this.touchPosition = { x: screenX, y: screenY };
            };
            this.onTouchStart = function (e) {
                var _a = e.touches[0], screenX = _a.screenX, screenY = _a.screenY;
                _this.touchPosition = { x: screenX, y: screenY };
                window.clearInterval(_this.motion);
            };
            this.onWheel = function (e) {
                var deltaX = e.deltaX, deltaY = e.deltaY;
                var mixed;
                var absX = Math.abs(deltaX);
                var absY = Math.abs(deltaY);
                if (absX === absY) {
                    mixed = _this.lastWheelDirection === 'x' ? deltaX : deltaY;
                }
                else if (absX > absY) {
                    mixed = deltaX;
                    _this.lastWheelDirection = 'x';
                }
                else {
                    mixed = deltaY;
                    _this.lastWheelDirection = 'y';
                }
                // Optimize mac touch scroll
                var now = Date.now();
                var absMixed = Math.abs(mixed);
                if (now - _this.lastWheelTimestamp > 100 || absMixed - _this.lastMixedWheel > 10) {
                    _this.lastWheelPrevent = false;
                }
                _this.onOffset(-mixed, -mixed, e);
                if (e.defaultPrevented || _this.lastWheelPrevent) {
                    _this.lastWheelPrevent = true;
                }
                _this.lastWheelTimestamp = now;
                _this.lastMixedWheel = absMixed;
            };
        }
        ProTabScrollListDirective.prototype.ngOnInit = function () {
            var _this = this;
            this.unsubscribe = this.ngZone.runOutsideAngular(function () {
                var el = _this.elementRef.nativeElement;
                var wheel$ = rxjs.fromEvent(el, 'wheel');
                var touchstart$ = rxjs.fromEvent(el, 'touchstart');
                var touchmove$ = rxjs.fromEvent(el, 'touchmove');
                var touchend$ = rxjs.fromEvent(el, 'touchend');
                var subscription = new rxjs.Subscription();
                subscription.add(_this.subscribeWrap('wheel', wheel$, _this.onWheel));
                subscription.add(_this.subscribeWrap('touchstart', touchstart$, _this.onTouchStart));
                subscription.add(_this.subscribeWrap('touchmove', touchmove$, _this.onTouchMove));
                subscription.add(_this.subscribeWrap('touchend', touchend$, _this.onTouchEnd));
                return function () {
                    subscription.unsubscribe();
                };
            });
        };
        ProTabScrollListDirective.prototype.subscribeWrap = function (type, observable, handler) {
            var _this = this;
            return observable.subscribe(function (event) {
                _this.tabScroll.emit({
                    type: type,
                    event: event
                });
                if (!event.defaultPrevented) {
                    handler(event);
                }
            });
        };
        ProTabScrollListDirective.prototype.onOffset = function (x, y, event) {
            var _this = this;
            this.ngZone.run(function () {
                _this.offsetChange.emit({
                    x: x,
                    y: y,
                    event: event
                });
            });
        };
        ProTabScrollListDirective.prototype.ngOnDestroy = function () {
            this.unsubscribe();
        };
        return ProTabScrollListDirective;
    }());
    ProTabScrollListDirective.ɵfac = function ProTabScrollListDirective_Factory(t) { return new (t || ProTabScrollListDirective)(i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    ProTabScrollListDirective.ɵdir = i0.ɵɵdefineDirective({ type: ProTabScrollListDirective, selectors: [["", "ProTabScrollList", ""]], outputs: { offsetChange: "offsetChange", tabScroll: "tabScroll" } });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProTabScrollListDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[ProTabScrollList]'
                    }]
            }], function () { return [{ type: i0.NgZone }, { type: i0.ElementRef }]; }, { offsetChange: [{
                    type: i0.Output
                }], tabScroll: [{
                    type: i0.Output
                }] });
    })();

    var _c0$6 = ["navWarp"];
    var _c1$4 = ["navList"];
    function ProTabNavBarComponent_button_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r5_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 8);
            i0.ɵɵlistener("click", function ProTabNavBarComponent_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5_1); var ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.addClicked.emit(); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵproperty("addIcon", ctx_r2.addIcon);
        }
    }
    function ProTabNavBarComponent_div_8_1_ng_template_0_Template(rf, ctx) { }
    function ProTabNavBarComponent_div_8_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, ProTabNavBarComponent_div_8_1_ng_template_0_Template, 0, 0, "ng-template");
        }
    }
    function ProTabNavBarComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 9);
            i0.ɵɵtemplate(1, ProTabNavBarComponent_div_8_1_Template, 1, 0, undefined, 10);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", ctx_r3.extraTemplate);
        }
    }
    var _c2$3 = ["*"];
    var RESIZE_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs.animationFrameScheduler : rxjs.asapScheduler;
    var CSS_TRANSFORM_TIME = 150;
    var ProTabNavBarComponent = /** @class */ (function () {
        function ProTabNavBarComponent(cdr, ngZone, viewportRuler, nzResizeObserver, dir) {
            this.cdr = cdr;
            this.ngZone = ngZone;
            this.viewportRuler = viewportRuler;
            this.nzResizeObserver = nzResizeObserver;
            this.dir = dir;
            this.indexFocused = new i0.EventEmitter();
            this.selectFocusedIndex = new i0.EventEmitter();
            this.addClicked = new i0.EventEmitter();
            this.tabScroll = new i0.EventEmitter();
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
            this.destroy$ = new rxjs.Subject();
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
        Object.defineProperty(ProTabNavBarComponent.prototype, "selectedIndex", {
            get: function () {
                return this._selectedIndex;
            },
            set: function (value) {
                var newValue = coercion.coerceNumberProperty(value);
                if (this._selectedIndex !== newValue) {
                    this._selectedIndex = value;
                    this.selectedIndexChanged = true;
                    if (this.keyManager) {
                        this.keyManager.updateActiveItem(value);
                    }
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProTabNavBarComponent.prototype, "focusIndex", {
            /** Tracks which element has focus; used for keyboard navigation */
            get: function () {
                return this.keyManager ? this.keyManager.activeItemIndex : 0;
            },
            /** When the focus index is set, we must manually send focus to the correct label */
            set: function (value) {
                if (!this.isValidIndex(value) || this.focusIndex === value || !this.keyManager) {
                    return;
                }
                this.keyManager.setActiveItem(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProTabNavBarComponent.prototype, "showAddButton", {
            get: function () {
                return this.hiddenItems.length === 0 && this.addable;
            },
            enumerable: false,
            configurable: true
        });
        ProTabNavBarComponent.prototype.ngOnInit = function () { };
        ProTabNavBarComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            var dirChange = this.dir ? this.dir.change : rxjs.of(null);
            var resize = this.viewportRuler.change(150);
            var realign = function () {
                _this.updateScrollListPosition();
                _this.alignInkBarToSelectedTab();
            };
            this.keyManager = new i5.FocusKeyManager(this.items)
                .withHorizontalOrientation(this.getLayoutDirection())
                .withWrap();
            this.keyManager.updateActiveItem(0);
            polyfill.reqAnimFrame(realign);
            rxjs.merge(this.nzResizeObserver.observe(this.navWarpRef), this.nzResizeObserver.observe(this.navListRef))
                .pipe(operators.takeUntil(this.destroy$), operators.auditTime(16, RESIZE_SCHEDULER))
                .subscribe(function () {
                realign();
            });
            rxjs.merge(dirChange, resize, this.items.changes)
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function () {
                Promise.resolve().then(realign);
                _this.keyManager.withHorizontalOrientation(_this.getLayoutDirection());
            });
            this.keyManager.change.pipe(operators.takeUntil(this.destroy$)).subscribe(function (newFocusIndex) {
                _this.indexFocused.emit(newFocusIndex);
                _this.setTabFocus(newFocusIndex);
                _this.scrollToTab(_this.keyManager.activeItem);
            });
        };
        ProTabNavBarComponent.prototype.ngAfterContentChecked = function () {
            if (this.selectedIndexChanged) {
                this.updateScrollListPosition();
                this.alignInkBarToSelectedTab();
                this.selectedIndexChanged = false;
                this.cdr.markForCheck();
            }
        };
        ProTabNavBarComponent.prototype.ngOnDestroy = function () {
            clearTimeout(this.lockAnimationTimeoutId);
            clearTimeout(this.cssTransformTimeWaitingId);
            this.destroy$.next();
            this.destroy$.complete();
        };
        ProTabNavBarComponent.prototype.onSelectedFromMenu = function (tab) {
            var tabIndex = this.items.toArray().findIndex(function (e) { return e === tab; });
            if (tabIndex !== -1) {
                this.keyManager.updateActiveItem(tabIndex);
                if (this.focusIndex !== this.selectedIndex) {
                    this.selectFocusedIndex.emit(this.focusIndex);
                    this.scrollToTab(tab);
                }
            }
        };
        ProTabNavBarComponent.prototype.onOffsetChange = function (e) {
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
        };
        ProTabNavBarComponent.prototype.handleKeydown = function (event) {
            if (keycodes.hasModifierKey(event)) {
                return;
            }
            switch (event.keyCode) {
                case keycodes.LEFT_ARROW:
                case keycodes.UP_ARROW:
                case keycodes.RIGHT_ARROW:
                case keycodes.DOWN_ARROW:
                    this.lockAnimation();
                    this.keyManager.onKeydown(event);
                    break;
                case keycodes.ENTER:
                case keycodes.SPACE:
                    if (this.focusIndex !== this.selectedIndex) {
                        this.selectFocusedIndex.emit(this.focusIndex);
                    }
                    break;
                default:
                    this.keyManager.onKeydown(event);
            }
        };
        ProTabNavBarComponent.prototype.isValidIndex = function (index) {
            if (!this.items) {
                return true;
            }
            var tab = this.items ? this.items.toArray()[index] : null;
            return !!tab && !tab.disabled;
        };
        ProTabNavBarComponent.prototype.scrollToTab = function (tab) {
            var _this = this;
            if (!this.items.find(function (e) { return e === tab; })) {
                return;
            }
            var tabs = this.items.toArray();
            if (this.position === 'horizontal') {
                var newTransform = this.transformX;
                if (this.getLayoutDirection() === 'rtl') {
                    var right = tabs[0].left + tabs[0].width - tab.left - tab.width;
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
                var newTransform = this.transformY;
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
            this.cssTransformTimeWaitingId = setTimeout(function () {
                _this.setVisibleRange();
            }, CSS_TRANSFORM_TIME);
        };
        ProTabNavBarComponent.prototype.lockAnimation = function () {
            var _this = this;
            if (this.lockAnimationTimeoutId === -1) {
                this.ngZone.runOutsideAngular(function () {
                    _this.navListRef.nativeElement.style.transition = 'none';
                    _this.lockAnimationTimeoutId = setTimeout(function () {
                        _this.navListRef.nativeElement.style.transition = '';
                        _this.lockAnimationTimeoutId = -1;
                    }, CSS_TRANSFORM_TIME);
                });
            }
        };
        ProTabNavBarComponent.prototype.setTransform = function (x, y) {
            this.navListRef.nativeElement.style.transform = "translate(" + x + "px, " + y + "px)";
        };
        ProTabNavBarComponent.prototype.clampTransformX = function (transform) {
            var scrollWidth = this.wrapperWidth - this.scrollListWidth;
            if (this.getLayoutDirection() === 'rtl') {
                return Math.max(Math.min(scrollWidth, transform), 0);
            }
            else {
                return Math.min(Math.max(scrollWidth, transform), 0);
            }
        };
        ProTabNavBarComponent.prototype.clampTransformY = function (transform) {
            return Math.min(Math.max(this.wrapperHeight - this.scrollListHeight, transform), 0);
        };
        ProTabNavBarComponent.prototype.updateScrollListPosition = function () {
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
        };
        ProTabNavBarComponent.prototype.resetSizes = function () {
            this.addButtonWidth = this.addBtnRef ? this.addBtnRef.getElementWidth() : 0;
            this.addButtonHeight = this.addBtnRef ? this.addBtnRef.getElementHeight() : 0;
            this.operationWidth = this.operationRef.getElementWidth();
            this.operationHeight = this.operationRef.getElementHeight();
            this.wrapperWidth = this.navWarpRef.nativeElement.offsetWidth || 0;
            this.wrapperHeight = this.navWarpRef.nativeElement.offsetHeight || 0;
            this.scrollListHeight = this.navListRef.nativeElement.offsetHeight || 0;
            this.scrollListWidth = this.navListRef.nativeElement.offsetWidth || 0;
        };
        ProTabNavBarComponent.prototype.alignInkBarToSelectedTab = function () {
            var selectedItem = this.items && this.items.length ? this.items.toArray()[this.selectedIndex] : null;
            var selectedItemElement = selectedItem ? selectedItem.elementRef.nativeElement : null;
            if (selectedItemElement) {
                /**
                 * .ant-pro-tabs-nav-list - Target offset parent element
                 *   └──.ant-pro-tabs-tab
                 *        └──.ant-pro-tabs-tab-btn - Currently focused element
                 */
                this.inkBar.alignToElement(selectedItemElement.parentElement);
            }
        };
        ProTabNavBarComponent.prototype.setPingStatus = function () {
            var ping = {
                top: false,
                right: false,
                bottom: false,
                left: false
            };
            var navWarp = this.navWarpRef.nativeElement;
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
            Object.keys(ping).forEach(function (pos) {
                var className = "ant-pro-tabs-nav-wrap-ping-" + pos;
                if (ping[pos]) {
                    navWarp.classList.add(className);
                }
                else {
                    navWarp.classList.remove(className);
                }
            });
        };
        ProTabNavBarComponent.prototype.setVisibleRange = function () {
            var unit;
            var position;
            var transformSize;
            var basicSize;
            var tabContentSize;
            var addSize;
            var tabs = this.items.toArray();
            var DEFAULT_SIZE = { width: 0, height: 0, left: 0, top: 0, right: 0 };
            var getOffset = function (index) {
                var offset;
                var size = tabs[index] || DEFAULT_SIZE;
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
            var mergedBasicSize = basicSize;
            if (tabContentSize + addSize > basicSize) {
                mergedBasicSize = basicSize - addSize;
            }
            if (!tabs.length) {
                this.hiddenItems = [];
                this.cdr.markForCheck();
                return;
            }
            var len = tabs.length;
            var endIndex = len;
            for (var i = 0; i < len; i += 1) {
                var offset = getOffset(i);
                var size = tabs[i] || DEFAULT_SIZE;
                if (offset + size[unit] > transformSize + mergedBasicSize) {
                    endIndex = i - 1;
                    break;
                }
            }
            var startIndex = 0;
            for (var i = len - 1; i >= 0; i -= 1) {
                var offset = getOffset(i);
                if (offset < transformSize) {
                    startIndex = i + 1;
                    break;
                }
            }
            var startHiddenTabs = tabs.slice(0, startIndex);
            var endHiddenTabs = tabs.slice(endIndex + 1);
            this.hiddenItems = __spread(startHiddenTabs, endHiddenTabs);
            this.cdr.markForCheck();
        };
        ProTabNavBarComponent.prototype.getLayoutDirection = function () {
            return this.dir && this.dir.value === 'rtl' ? 'rtl' : 'ltr';
        };
        ProTabNavBarComponent.prototype.setTabFocus = function (_tabIndex) { };
        ProTabNavBarComponent.prototype.ngOnChanges = function (changes) {
            var position = changes.position;
            // The first will be aligning in ngAfterViewInit
            if (position && !position.isFirstChange()) {
                this.alignInkBarToSelectedTab();
                this.lockAnimation();
                this.updateScrollListPosition();
            }
        };
        return ProTabNavBarComponent;
    }());
    ProTabNavBarComponent.ɵfac = function ProTabNavBarComponent_Factory(t) { return new (t || ProTabNavBarComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i1$3.ViewportRuler), i0.ɵɵdirectiveInject(NzResizeObserver), i0.ɵɵdirectiveInject(i3$1.Directionality, 8)); };
    ProTabNavBarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ProTabNavBarComponent, selectors: [["pro-tabs-nav"]], contentQueries: function ProTabNavBarComponent_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                i0.ɵɵcontentQuery(dirIndex, ProTabNavItemDirective, 1);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.items = _t);
            }
        }, viewQuery: function ProTabNavBarComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0$6, 3);
                i0.ɵɵviewQuery(_c1$4, 3);
                i0.ɵɵviewQuery(ProTabNavOperationComponent, 3);
                i0.ɵɵviewQuery(ProTabAddButtonComponent, 1);
                i0.ɵɵviewQuery(ProTabsInkBarDirective, 3);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.navWarpRef = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.navListRef = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.operationRef = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.addBtnRef = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inkBar = _t.first);
            }
        }, hostAttrs: ["role", "tablist", 1, "ant-pro-tabs-nav"], hostBindings: function ProTabNavBarComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("keydown", function ProTabNavBarComponent_keydown_HostBindingHandler($event) { return ctx.handleKeydown($event); });
            }
        }, inputs: { position: "position", addable: "addable", hideBar: "hideBar", addIcon: "addIcon", inkBarAnimated: "inkBarAnimated", extraTemplate: "extraTemplate", selectedIndex: "selectedIndex" }, outputs: { indexFocused: "indexFocused", selectFocusedIndex: "selectFocusedIndex", addClicked: "addClicked", tabScroll: "tabScroll" }, exportAs: ["ProTabsNav"], features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c2$3, decls: 9, vars: 16, consts: [[1, "ant-pro-tabs-nav-wrap"], ["navWarp", ""], ["ProTabScrollList", "", 1, "ant-pro-tabs-nav-list", 3, "offsetChange", "tabScroll"], ["navList", ""], ["pro-tab-add-button", "", 3, "addIcon", "click", 4, "ngIf"], ["pro-tabs-ink-bar", "", 3, "hidden", "position", "animated"], [3, "addIcon", "addable", "items", "addClicked", "selected"], ["class", "ant-pro-tabs-extra-content", 4, "ngIf"], ["pro-tab-add-button", "", 3, "addIcon", "click"], [1, "ant-pro-tabs-extra-content"], [4, "ngTemplateOutlet"]], template: function ProTabNavBarComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵelementStart(0, "div", 0, 1);
                i0.ɵɵelementStart(2, "div", 2, 3);
                i0.ɵɵlistener("offsetChange", function ProTabNavBarComponent_Template_div_offsetChange_2_listener($event) { return ctx.onOffsetChange($event); })("tabScroll", function ProTabNavBarComponent_Template_div_tabScroll_2_listener($event) { return ctx.tabScroll.emit($event); });
                i0.ɵɵprojection(4);
                i0.ɵɵtemplate(5, ProTabNavBarComponent_button_5_Template, 1, 1, "button", 4);
                i0.ɵɵelement(6, "div", 5);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "pro-tab-nav-operation", 6);
                i0.ɵɵlistener("addClicked", function ProTabNavBarComponent_Template_pro_tab_nav_operation_addClicked_7_listener() { return ctx.addClicked.emit(); })("selected", function ProTabNavBarComponent_Template_pro_tab_nav_operation_selected_7_listener($event) { return ctx.onSelectedFromMenu($event); });
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(8, ProTabNavBarComponent_div_8_Template, 2, 1, "div", 7);
            }
            if (rf & 2) {
                i0.ɵɵclassProp("ant-pro-tabs-nav-wrap-ping-left", ctx.pingLeft)("ant-pro-tabs-nav-wrap-ping-right", ctx.pingRight)("ant-pro-tabs-nav-wrap-ping-top", ctx.pingTop)("ant-pro-tabs-nav-wrap-ping-bottom", ctx.pingBottom);
                i0.ɵɵadvance(5);
                i0.ɵɵproperty("ngIf", ctx.showAddButton);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("hidden", ctx.hideBar)("position", ctx.position)("animated", ctx.inkBarAnimated);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("addIcon", ctx.addIcon)("addable", ctx.addable)("items", ctx.hiddenItems);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.extraTemplate);
            }
        }, directives: [ProTabScrollListDirective, i1.NgIf, ProTabsInkBarDirective, ProTabNavOperationComponent, ProTabAddButtonComponent, i1.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProTabNavBarComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pro-tabs-nav',
                        exportAs: 'ProTabsNav',
                        preserveWhitespaces: false,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        template: "\n    <div\n      class=\"ant-pro-tabs-nav-wrap\"\n      [class.ant-pro-tabs-nav-wrap-ping-left]=\"pingLeft\"\n      [class.ant-pro-tabs-nav-wrap-ping-right]=\"pingRight\"\n      [class.ant-pro-tabs-nav-wrap-ping-top]=\"pingTop\"\n      [class.ant-pro-tabs-nav-wrap-ping-bottom]=\"pingBottom\"\n      #navWarp\n    >\n      <div class=\"ant-pro-tabs-nav-list\" #navList ProTabScrollList (offsetChange)=\"onOffsetChange($event)\" (tabScroll)=\"tabScroll.emit($event)\">\n        <ng-content></ng-content>\n        <button *ngIf=\"showAddButton\" pro-tab-add-button [addIcon]=\"addIcon\" (click)=\"addClicked.emit()\"></button>\n        <div pro-tabs-ink-bar [hidden]=\"hideBar\" [position]=\"position\" [animated]=\"inkBarAnimated\"></div>\n      </div>\n    </div>\n    <pro-tab-nav-operation\n      (addClicked)=\"addClicked.emit()\"\n      (selected)=\"onSelectedFromMenu($event)\"\n      [addIcon]=\"addIcon\"\n      [addable]=\"addable\"\n      [items]=\"hiddenItems\"\n    ></pro-tab-nav-operation>\n    <div class=\"ant-pro-tabs-extra-content\" *ngIf=\"extraTemplate\">\n      <ng-template *ngTemplateOutlet=\"extraTemplate\"></ng-template>\n    </div>\n  ",
                        host: {
                            role: 'tablist',
                            class: 'ant-pro-tabs-nav',
                            '(keydown)': 'handleKeydown($event)'
                        }
                    }]
            }], function () {
            return [{ type: i0.ChangeDetectorRef }, { type: i0.NgZone }, { type: i1$3.ViewportRuler }, { type: NzResizeObserver }, { type: i3$1.Directionality, decorators: [{
                            type: i0.Optional
                        }] }];
        }, { indexFocused: [{
                    type: i0.Output
                }], selectFocusedIndex: [{
                    type: i0.Output
                }], addClicked: [{
                    type: i0.Output
                }], tabScroll: [{
                    type: i0.Output
                }], position: [{
                    type: i0.Input
                }], addable: [{
                    type: i0.Input
                }], hideBar: [{
                    type: i0.Input
                }], addIcon: [{
                    type: i0.Input
                }], inkBarAnimated: [{
                    type: i0.Input
                }], extraTemplate: [{
                    type: i0.Input
                }], selectedIndex: [{
                    type: i0.Input
                }], navWarpRef: [{
                    type: i0.ViewChild,
                    args: ['navWarp', { static: true }]
                }], navListRef: [{
                    type: i0.ViewChild,
                    args: ['navList', { static: true }]
                }], operationRef: [{
                    type: i0.ViewChild,
                    args: [ProTabNavOperationComponent, { static: true }]
                }], addBtnRef: [{
                    type: i0.ViewChild,
                    args: [ProTabAddButtonComponent]
                }], inkBar: [{
                    type: i0.ViewChild,
                    args: [ProTabsInkBarDirective, { static: true }]
                }], items: [{
                    type: i0.ContentChildren,
                    args: [ProTabNavItemDirective, { descendants: true }]
                }] });
    })();

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    /**
     * Fix https://github.com/angular/angular/issues/8563
     */
    var ProTabLinkTemplateDirective = /** @class */ (function () {
        function ProTabLinkTemplateDirective(templateRef) {
            this.templateRef = templateRef;
        }
        return ProTabLinkTemplateDirective;
    }());
    ProTabLinkTemplateDirective.ɵfac = function ProTabLinkTemplateDirective_Factory(t) { return new (t || ProTabLinkTemplateDirective)(i0.ɵɵdirectiveInject(i0.TemplateRef, 1)); };
    ProTabLinkTemplateDirective.ɵdir = i0.ɵɵdefineDirective({ type: ProTabLinkTemplateDirective, selectors: [["ng-template", "ProTabLink", ""]], exportAs: ["ProTabLinkTemplate"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProTabLinkTemplateDirective, [{
                type: i0.Directive,
                args: [{
                        selector: 'ng-template[ProTabLink]',
                        exportAs: 'ProTabLinkTemplate'
                    }]
            }], function () {
            return [{ type: i0.TemplateRef, decorators: [{
                            type: i0.Host
                        }] }];
        }, null);
    })();
    /**
     * This component is for catching `routerLink` directive.
     */
    var ProTabLinkDirective = /** @class */ (function () {
        function ProTabLinkDirective(routerLink, routerLinkWithHref, ProTabLinkTemplateDirective) {
            this.routerLink = routerLink;
            this.routerLinkWithHref = routerLinkWithHref;
            if (!ProTabLinkTemplateDirective) {
                logger.warnDeprecation("'a[pro-tab-link]' is deprecated. Please use 'ng-template[ProTabLink] > a[pro-tab-link]' instead.");
            }
        }
        return ProTabLinkDirective;
    }());
    ProTabLinkDirective.ɵfac = function ProTabLinkDirective_Factory(t) { return new (t || ProTabLinkDirective)(i0.ɵɵdirectiveInject(i1$2.RouterLink, 10), i0.ɵɵdirectiveInject(i1$2.RouterLinkWithHref, 10), i0.ɵɵdirectiveInject(ProTabLinkTemplateDirective, 8)); };
    ProTabLinkDirective.ɵdir = i0.ɵɵdefineDirective({ type: ProTabLinkDirective, selectors: [["a", "pro-tab-link", ""]], exportAs: ["ProTabLink"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProTabLinkDirective, [{
                type: i0.Directive,
                args: [{
                        selector: 'a[pro-tab-link]',
                        exportAs: 'ProTabLink'
                    }]
            }], function () {
            return [{ type: i1$2.RouterLink, decorators: [{
                            type: i0.Optional
                        }, {
                            type: i0.Self
                        }] }, { type: i1$2.RouterLinkWithHref, decorators: [{
                            type: i0.Optional
                        }, {
                            type: i0.Self
                        }] }, { type: ProTabLinkTemplateDirective, decorators: [{
                            type: i0.Optional
                        }] }];
        }, null);
    })();

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    /** Decorates the `ng-template` tags and reads out the template from it. */
    var ProTabDirective = /** @class */ (function () {
        function ProTabDirective() {
        }
        return ProTabDirective;
    }());
    ProTabDirective.ɵfac = function ProTabDirective_Factory(t) { return new (t || ProTabDirective)(); };
    ProTabDirective.ɵdir = i0.ɵɵdefineDirective({ type: ProTabDirective, selectors: [["", "pro-tab", ""]], exportAs: ["ProTab"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProTabDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[pro-tab]',
                        exportAs: 'ProTab'
                    }]
            }], null, null);
    })();

    var _c0$5 = ["tabLinkTemplate"];
    var _c1$3 = ["contentTemplate"];
    function ProTabComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵprojection(0);
        }
    }
    function ProTabComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵprojection(0, 1);
        }
    }
    var _c2$2 = [[["", "pro-tab-link", ""]], "*"];
    var _c3$2 = ["[pro-tab-link]", "*"];
    /**
     * Used to provide a tab set to a tab without causing a circular dependency.
     */
    var PRO_TAB_SET = new i0.InjectionToken('PRO_TAB_SET');
    var ProTabComponent = /** @class */ (function () {
        function ProTabComponent(closestTabSet) {
            this.closestTabSet = closestTabSet;
            this.nzTitle = '';
            this.nzClosable = false;
            this.nzCloseIcon = 'close';
            this.nzDisabled = false;
            this.nzForceRender = false;
            this.nzSelect = new i0.EventEmitter();
            this.nzDeselect = new i0.EventEmitter();
            this.nzClick = new i0.EventEmitter();
            this.nzContextmenu = new i0.EventEmitter();
            this.template = null;
            this.isActive = false;
            this.position = null;
            this.origin = null;
            this.stateChanges = new rxjs.Subject();
        }
        Object.defineProperty(ProTabComponent.prototype, "content", {
            get: function () {
                return this.template || this.contentTemplate;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProTabComponent.prototype, "label", {
            get: function () {
                return this.nzTitle || this.ProTabLinkTemplateDirective.templateRef || this.tabLinkTemplate;
            },
            enumerable: false,
            configurable: true
        });
        ProTabComponent.prototype.ngOnChanges = function (changes) {
            var nzTitle = changes.nzTitle, nzDisabled = changes.nzDisabled, nzForceRender = changes.nzForceRender;
            if (nzTitle || nzDisabled || nzForceRender) {
                this.stateChanges.next();
            }
        };
        ProTabComponent.prototype.ngOnDestroy = function () {
            this.stateChanges.complete();
        };
        ProTabComponent.prototype.ngOnInit = function () { };
        return ProTabComponent;
    }());
    ProTabComponent.ɵfac = function ProTabComponent_Factory(t) { return new (t || ProTabComponent)(i0.ɵɵdirectiveInject(PRO_TAB_SET)); };
    ProTabComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ProTabComponent, selectors: [["pro-tab"]], contentQueries: function ProTabComponent_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                i0.ɵɵcontentQuery(dirIndex, ProTabLinkTemplateDirective, 1);
                i0.ɵɵcontentQuery(dirIndex, ProTabDirective, 1, i0.TemplateRef);
                i0.ɵɵcontentQuery(dirIndex, ProTabLinkDirective, 1);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.ProTabLinkTemplateDirective = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.template = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.linkDirective = _t.first);
            }
        }, viewQuery: function ProTabComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0$5, 3);
                i0.ɵɵviewQuery(_c1$3, 3);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tabLinkTemplate = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.contentTemplate = _t.first);
            }
        }, inputs: { nzTitle: "nzTitle", nzClosable: "nzClosable", nzCloseIcon: "nzCloseIcon", nzDisabled: "nzDisabled", nzForceRender: "nzForceRender" }, outputs: { nzSelect: "nzSelect", nzDeselect: "nzDeselect", nzClick: "nzClick", nzContextmenu: "nzContextmenu" }, exportAs: ["proTab"], features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c3$2, decls: 4, vars: 0, consts: [["tabLinkTemplate", ""], ["contentTemplate", ""]], template: function ProTabComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef(_c2$2);
                i0.ɵɵtemplate(0, ProTabComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(2, ProTabComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
            }
        }, encapsulation: 2, changeDetection: 0 });
    __decorate([
        util.InputBoolean()
    ], ProTabComponent.prototype, "nzClosable", void 0);
    __decorate([
        util.InputBoolean()
    ], ProTabComponent.prototype, "nzDisabled", void 0);
    __decorate([
        util.InputBoolean()
    ], ProTabComponent.prototype, "nzForceRender", void 0);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProTabComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pro-tab',
                        exportAs: 'proTab',
                        preserveWhitespaces: false,
                        encapsulation: i0.ViewEncapsulation.None,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        template: "\n    <ng-template #tabLinkTemplate>\n      <ng-content select=\"[pro-tab-link]\"></ng-content>\n    </ng-template>\n    <ng-template #contentTemplate><ng-content></ng-content></ng-template>\n  "
                    }]
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [PRO_TAB_SET]
                        }] }];
        }, { nzTitle: [{
                    type: i0.Input
                }], nzClosable: [{
                    type: i0.Input
                }], nzCloseIcon: [{
                    type: i0.Input
                }], nzDisabled: [{
                    type: i0.Input
                }], nzForceRender: [{
                    type: i0.Input
                }], nzSelect: [{
                    type: i0.Output
                }], nzDeselect: [{
                    type: i0.Output
                }], nzClick: [{
                    type: i0.Output
                }], nzContextmenu: [{
                    type: i0.Output
                }], tabLinkTemplate: [{
                    type: i0.ViewChild,
                    args: ['tabLinkTemplate', { static: true }]
                }], ProTabLinkTemplateDirective: [{
                    type: i0.ContentChild,
                    args: [ProTabLinkTemplateDirective]
                }], template: [{
                    type: i0.ContentChild,
                    args: [ProTabDirective, { read: i0.TemplateRef }]
                }], linkDirective: [{
                    type: i0.ContentChild,
                    args: [ProTabLinkDirective]
                }], contentTemplate: [{
                    type: i0.ViewChild,
                    args: ['contentTemplate', { static: true }]
                }] });
    })();

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    function ProTabCloseButtonComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0, 3);
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngTemplateOutlet", ctx_r0.closeIcon);
        }
    }
    function ProTabCloseButtonComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelement(1, "i", 4);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzType", ctx_r1.closeIcon);
        }
    }
    var ProTabCloseButtonComponent = /** @class */ (function () {
        function ProTabCloseButtonComponent() {
            this.closeIcon = 'close';
        }
        ProTabCloseButtonComponent.prototype.isNonEmptyString = function (value) {
            return typeof value === 'string' && value !== '';
        };
        ProTabCloseButtonComponent.prototype.isTemplateRef = function (value) {
            return value instanceof i0.TemplateRef;
        };
        return ProTabCloseButtonComponent;
    }());
    ProTabCloseButtonComponent.ɵfac = function ProTabCloseButtonComponent_Factory(t) { return new (t || ProTabCloseButtonComponent)(); };
    ProTabCloseButtonComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ProTabCloseButtonComponent, selectors: [["pro-tab-close-button"], ["button", "pro-tab-close-button", ""]], hostAttrs: ["aria-label", "Close tab", "type", "button", 1, "ant-pro-tabs-tab-remove"], inputs: { closeIcon: "closeIcon" }, decls: 3, vars: 3, consts: [[3, "ngSwitch"], [3, "ngTemplateOutlet", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [3, "ngTemplateOutlet"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"]], template: function ProTabCloseButtonComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementContainerStart(0, 0);
                i0.ɵɵtemplate(1, ProTabCloseButtonComponent_ng_container_1_Template, 1, 1, "ng-container", 1);
                i0.ɵɵtemplate(2, ProTabCloseButtonComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
                i0.ɵɵelementContainerEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngSwitch", true);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngSwitchCase", ctx.isTemplateRef(ctx.closeIcon));
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngSwitchCase", ctx.isNonEmptyString(ctx.closeIcon));
            }
        }, directives: [i1.NgSwitch, i1.NgSwitchCase, i1.NgTemplateOutlet, i2.NzIconDirective], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProTabCloseButtonComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pro-tab-close-button, button[pro-tab-close-button]',
                        template: "\n    <ng-container [ngSwitch]=\"true\">\n      <ng-container *ngSwitchCase=\"isTemplateRef(closeIcon)\" [ngTemplateOutlet]=\"closeIcon\"></ng-container>\n      <ng-container *ngSwitchCase=\"isNonEmptyString(closeIcon)\"><i nz-icon [nzType]=\"closeIcon\" nzTheme=\"outline\"></i></ng-container>\n    </ng-container>\n  ",
                        host: {
                            class: 'ant-pro-tabs-tab-remove',
                            'aria-label': 'Close tab',
                            type: 'button'
                        }
                    }]
            }], function () { return []; }, { closeIcon: [{
                    type: i0.Input
                }] });
    })();

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var _c0$4 = ["pro-tab-body", ""];
    function ProTabBodyComponent_ng_container_0_1_ng_template_0_Template(rf, ctx) { }
    function ProTabBodyComponent_ng_container_0_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, ProTabBodyComponent_ng_container_0_1_ng_template_0_Template, 0, 0, "ng-template");
        }
    }
    function ProTabBodyComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, ProTabBodyComponent_ng_container_0_1_Template, 1, 0, undefined, 1);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", ctx_r0.content);
        }
    }
    var ProTabBodyComponent = /** @class */ (function () {
        function ProTabBodyComponent() {
            this.content = null;
            this.active = false;
            this.tabPaneAnimated = true;
            this.forceRender = false;
        }
        return ProTabBodyComponent;
    }());
    ProTabBodyComponent.ɵfac = function ProTabBodyComponent_Factory(t) { return new (t || ProTabBodyComponent)(); };
    ProTabBodyComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ProTabBodyComponent, selectors: [["", "pro-tab-body", ""]], hostAttrs: [1, "ant-pro-tabs-tabpane"], hostVars: 12, hostBindings: function ProTabBodyComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵattribute("tabindex", ctx.active ? 0 : -1)("aria-hidden", !ctx.active);
                i0.ɵɵstyleProp("visibility", ctx.tabPaneAnimated ? ctx.active ? null : "hidden" : null)("height", ctx.tabPaneAnimated ? ctx.active ? null : 0 : null)("overflow-y", ctx.tabPaneAnimated ? ctx.active ? null : "none" : null)("display", !ctx.tabPaneAnimated ? ctx.active ? null : "none" : null);
                i0.ɵɵclassProp("ant-pro-tabs-tabpane-active", ctx.active);
            }
        }, inputs: { content: "content", active: "active", tabPaneAnimated: "tabPaneAnimated", forceRender: "forceRender" }, exportAs: ["ProTabBody"], attrs: _c0$4, decls: 1, vars: 1, consts: [[4, "ngIf"], [4, "ngTemplateOutlet"]], template: function ProTabBodyComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, ProTabBodyComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", ctx.active || ctx.forceRender);
            }
        }, directives: [i1.NgIf, i1.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProTabBodyComponent, [{
                type: i0.Component,
                args: [{
                        selector: '[pro-tab-body]',
                        exportAs: 'ProTabBody',
                        preserveWhitespaces: false,
                        encapsulation: i0.ViewEncapsulation.None,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        template: "\n    <ng-container *ngIf=\"active || forceRender\">\n      <ng-template *ngTemplateOutlet=\"content\"></ng-template>\n    </ng-container>\n  ",
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
                    type: i0.Input
                }], active: [{
                    type: i0.Input
                }], tabPaneAnimated: [{
                    type: i0.Input
                }], forceRender: [{
                    type: i0.Input
                }] });
    })();

    function ProTabSetComponent_pro_tabs_nav_0_div_1_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0, 12);
        }
        if (rf & 2) {
            var tab_r3 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵproperty("ngTemplateOutlet", tab_r3.label);
        }
    }
    function ProTabSetComponent_pro_tabs_nav_0_div_1_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtext(1);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var tab_r3 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(tab_r3.label);
        }
    }
    function ProTabSetComponent_pro_tabs_nav_0_div_1_button_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r12_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 13);
            i0.ɵɵlistener("click", function ProTabSetComponent_pro_tabs_nav_0_div_1_button_5_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r12_1); var i_r4 = i0.ɵɵnextContext().index; var ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.onClose(i_r4, $event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var tab_r3 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵproperty("closeIcon", tab_r3.nzCloseIcon);
        }
    }
    function ProTabSetComponent_pro_tabs_nav_0_div_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r15_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 6);
            i0.ɵɵlistener("click", function ProTabSetComponent_pro_tabs_nav_0_div_1_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r15_1); var tab_r3 = ctx.$implicit; var i_r4 = ctx.index; var ctx_r14 = i0.ɵɵnextContext(2); return ctx_r14.clickNavItem(tab_r3, i_r4); })("contextmenu", function ProTabSetComponent_pro_tabs_nav_0_div_1_Template_div_contextmenu_0_listener($event) { i0.ɵɵrestoreView(_r15_1); var tab_r3 = ctx.$implicit; var ctx_r16 = i0.ɵɵnextContext(2); return ctx_r16.contextmenuNavItem(tab_r3, $event); });
            i0.ɵɵelementStart(1, "div", 7);
            i0.ɵɵelementContainerStart(2, 8);
            i0.ɵɵtemplate(3, ProTabSetComponent_pro_tabs_nav_0_div_1_ng_container_3_Template, 1, 1, "ng-container", 9);
            i0.ɵɵtemplate(4, ProTabSetComponent_pro_tabs_nav_0_div_1_ng_container_4_Template, 2, 1, "ng-container", 10);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵtemplate(5, ProTabSetComponent_pro_tabs_nav_0_div_1_button_5_Template, 1, 1, "button", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var tab_r3 = ctx.$implicit;
            var i_r4 = ctx.index;
            var ctx_r2 = i0.ɵɵnextContext(2);
            i0.ɵɵstyleProp("margin-right", ctx_r2.position === "horizontal" ? ctx_r2.nzTabBarGutter : null, "px")("margin-bottom", ctx_r2.position === "vertical" ? ctx_r2.nzTabBarGutter : null, "px");
            i0.ɵɵclassProp("ant-pro-tabs-tab-active", ctx_r2.nzSelectedIndex === i_r4)("ant-pro-tabs-tab-disabled", tab_r3.nzDisabled);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("disabled", tab_r3.nzDisabled)("tab", tab_r3)("active", ctx_r2.nzSelectedIndex === i_r4);
            i0.ɵɵattribute("tabIndex", ctx_r2.getTabIndex(tab_r3, i_r4))("aria-disabled", tab_r3.nzDisabled)("aria-selected", ctx_r2.nzSelectedIndex === i_r4 && !ctx_r2.nzHideAll)("aria-controls", ctx_r2.getTabContentId(i_r4));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitch", true);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", ctx_r2.isTemplateRef(tab_r3.label));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", ctx_r2.isNonEmptyString(tab_r3.label));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", tab_r3.nzClosable && ctx_r2.closable && !tab_r3.nzDisabled);
        }
    }
    function ProTabSetComponent_pro_tabs_nav_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r18_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "pro-tabs-nav", 4);
            i0.ɵɵlistener("tabScroll", function ProTabSetComponent_pro_tabs_nav_0_Template_pro_tabs_nav_tabScroll_0_listener($event) { i0.ɵɵrestoreView(_r18_1); var ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.nzTabListScroll.emit($event); })("selectFocusedIndex", function ProTabSetComponent_pro_tabs_nav_0_Template_pro_tabs_nav_selectFocusedIndex_0_listener($event) { i0.ɵɵrestoreView(_r18_1); var ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.setSelectedIndex($event); })("addClicked", function ProTabSetComponent_pro_tabs_nav_0_Template_pro_tabs_nav_addClicked_0_listener() { i0.ɵɵrestoreView(_r18_1); var ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.onAdd(); });
            i0.ɵɵtemplate(1, ProTabSetComponent_pro_tabs_nav_0_div_1_Template, 6, 19, "div", 5);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngStyle", ctx_r0.nzTabBarStyle)("selectedIndex", ctx_r0.nzSelectedIndex || 0)("inkBarAnimated", ctx_r0.inkBarAnimated)("addable", ctx_r0.addable)("addIcon", ctx_r0.nzAddIcon)("hideBar", ctx_r0.nzHideAll)("position", ctx_r0.position)("extraTemplate", ctx_r0.nzTabBarExtraContent);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r0.tabs);
        }
    }
    function ProTabSetComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "div", 14);
        }
        if (rf & 2) {
            var tab_r21 = ctx.$implicit;
            var i_r22 = ctx.index;
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵproperty("active", ctx_r1.nzSelectedIndex == i_r22 && !ctx_r1.nzHideAll)("content", tab_r21.content)("forceRender", tab_r21.nzForceRender)("tabPaneAnimated", ctx_r1.tabPaneAnimated);
        }
    }
    var nextId = 0;
    var ProTabSetComponent = /** @class */ (function () {
        function ProTabSetComponent(cdr, router) {
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
            this.nzSelectChange = new i0.EventEmitter(true);
            this.nzSelectedIndexChange = new i0.EventEmitter();
            this.nzTabListScroll = new i0.EventEmitter();
            this.nzClose = new i0.EventEmitter();
            this.nzAdd = new i0.EventEmitter();
            /**
             * @deprecated Not supported.
             * @breaking-change 11.0.0
             */
            this.nzShowPagination = true;
            /**
             * @deprecated Not supported.
             * @breaking-change 11.0.0
             */
            this.nzOnNextClick = new i0.EventEmitter();
            /**
             * @deprecated Not supported.
             * @breaking-change 11.0.0
             */
            this.nzOnPrevClick = new i0.EventEmitter();
            // Pick up only direct descendants under ivy rendering engine
            // We filter out only the tabs that belong to this tab set in `tabs`.
            this.allTabs = new i0.QueryList();
            // All the direct tabs for this tab set
            this.tabs = new i0.QueryList();
            this.destroy$ = new rxjs.Subject();
            this.indexToSelect = 0;
            this.selectedIndex = null;
            this.tabLabelSubscription = rxjs.Subscription.EMPTY;
            this.tabsSubscription = rxjs.Subscription.EMPTY;
            this.canDeactivateSubscription = rxjs.Subscription.EMPTY;
            this.tabSetId = nextId++;
        }
        Object.defineProperty(ProTabSetComponent.prototype, "nzSelectedIndex", {
            get: function () {
                return this.selectedIndex;
            },
            set: function (value) {
                this.indexToSelect = coercion.coerceNumberProperty(value, null);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProTabSetComponent.prototype, "position", {
            get: function () {
                return ['top', 'bottom'].indexOf(this.nzTabPosition) === -1 ? 'vertical' : 'horizontal';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProTabSetComponent.prototype, "addable", {
            get: function () {
                return this.nzType === 'editable-card' && !this.nzHideAdd;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProTabSetComponent.prototype, "closable", {
            get: function () {
                return this.nzType === 'editable-card';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProTabSetComponent.prototype, "line", {
            get: function () {
                return this.nzType === 'line';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProTabSetComponent.prototype, "inkBarAnimated", {
            get: function () {
                return this.line && (typeof this.nzAnimated === 'boolean' ? this.nzAnimated : this.nzAnimated.inkBar);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProTabSetComponent.prototype, "tabPaneAnimated", {
            get: function () {
                return (this.position === 'horizontal' && this.line && (typeof this.nzAnimated === 'boolean' ? this.nzAnimated : this.nzAnimated.tabPane));
            },
            enumerable: false,
            configurable: true
        });
        ProTabSetComponent.prototype.ngOnInit = function () {
            if (this.nzOnNextClick.observers.length) {
                logger.warnDeprecation("(nzOnNextClick) of pro-tabset is not support, will be removed in 11.0.0");
            }
            if (this.nzOnPrevClick.observers.length) {
                logger.warnDeprecation("(nzOnPrevClick) of pro-tabset is not support, will be removed in 11.0.0");
            }
        };
        ProTabSetComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
            this.tabs.destroy();
            this.tabLabelSubscription.unsubscribe();
            this.tabsSubscription.unsubscribe();
            this.canDeactivateSubscription.unsubscribe();
        };
        ProTabSetComponent.prototype.ngAfterContentInit = function () {
            var _this = this;
            Promise.resolve().then(function () {
                _this.setUpRouter();
            });
            this.subscribeToTabLabels();
            this.subscribeToAllTabChanges();
            // Subscribe to changes in the amount of tabs, in order to be
            // able to re-render the content as new tabs are added or removed.
            this.tabsSubscription = this.tabs.changes.subscribe(function () {
                var indexToSelect = _this.clampTabIndex(_this.indexToSelect);
                // Maintain the previously-selected tab if a new tab is added or removed and there is no
                // explicit change that selects a different tab.
                if (indexToSelect === _this.selectedIndex) {
                    var tabs = _this.tabs.toArray();
                    for (var i = 0; i < tabs.length; i++) {
                        if (tabs[i].isActive) {
                            // Assign both to the `indexToSelect` and `selectedIndex` so we don't fire a changed
                            // event, otherwise the consumer may end up in an infinite loop in some edge cases like
                            // adding a tab within the `nzSelectedIndexChange` event.
                            _this.indexToSelect = _this.selectedIndex = i;
                            break;
                        }
                    }
                }
                _this.subscribeToTabLabels();
                _this.cdr.markForCheck();
            });
        };
        ProTabSetComponent.prototype.ngAfterContentChecked = function () {
            var _this = this;
            // Don't clamp the `indexToSelect` immediately in the setter because it can happen that
            // the amount of tabs changes before the actual change detection runs.
            var indexToSelect = (this.indexToSelect = this.clampTabIndex(this.indexToSelect));
            // If there is a change in selected index, emit a change event. Should not trigger if
            // the selected index has not yet been initialized.
            if (this.selectedIndex !== indexToSelect) {
                var isFirstRun_1 = this.selectedIndex == null;
                if (!isFirstRun_1) {
                    this.nzSelectChange.emit(this.createChangeEvent(indexToSelect));
                }
                // Changing these values after change detection has run
                // since the checked content may contain references to them.
                Promise.resolve().then(function () {
                    _this.tabs.forEach(function (tab, index) { return (tab.isActive = index === indexToSelect); });
                    if (!isFirstRun_1) {
                        _this.nzSelectedIndexChange.emit(indexToSelect);
                    }
                });
            }
            // Setup the position for each tab and optionally setup an origin on the next selected tab.
            this.tabs.forEach(function (tab, index) {
                tab.position = index - indexToSelect;
                // If there is already a selected tab, then set up an origin for the next selected tab
                // if it doesn't have one already.
                if (_this.selectedIndex != null && tab.position === 0 && !tab.origin) {
                    tab.origin = indexToSelect - _this.selectedIndex;
                }
            });
            if (this.selectedIndex !== indexToSelect) {
                this.selectedIndex = indexToSelect;
                this.cdr.markForCheck();
            }
        };
        ProTabSetComponent.prototype.onClose = function (index, e) {
            e.preventDefault();
            e.stopPropagation();
            this.nzClose.emit({ index: index });
        };
        ProTabSetComponent.prototype.onAdd = function () {
            this.nzAdd.emit();
        };
        ProTabSetComponent.prototype.clampTabIndex = function (index) {
            return Math.min(this.tabs.length - 1, Math.max(index || 0, 0));
        };
        ProTabSetComponent.prototype.createChangeEvent = function (index) {
            var event = new NzTabChangeEvent();
            event.index = index;
            if (this.tabs && this.tabs.length) {
                event.tab = this.tabs.toArray()[index];
                this.tabs.forEach(function (tab, i) {
                    if (i !== index) {
                        tab.nzDeselect.emit();
                    }
                });
                event.tab.nzSelect.emit();
            }
            return event;
        };
        ProTabSetComponent.prototype.subscribeToTabLabels = function () {
            var _this = this;
            if (this.tabLabelSubscription) {
                this.tabLabelSubscription.unsubscribe();
            }
            this.tabLabelSubscription = rxjs.merge.apply(void 0, __spread(this.tabs.map(function (tab) { return tab.stateChanges; }))).subscribe(function () { return _this.cdr.markForCheck(); });
        };
        ProTabSetComponent.prototype.subscribeToAllTabChanges = function () {
            var _this = this;
            this.allTabs.changes.pipe(operators.startWith(this.allTabs)).subscribe(function (tabs) {
                _this.tabs.reset(tabs.filter(function (tab) { return tab.closestTabSet === _this; }));
                _this.tabs.notifyOnChanges();
            });
        };
        ProTabSetComponent.prototype.canDeactivateFun = function (pre, next) {
            return rxjs.of(true);
        };
        ProTabSetComponent.prototype.clickNavItem = function (tab, index) {
            if (!tab.nzDisabled) {
                // ignore nzCanDeactivate
                tab.nzClick.emit();
                this.setSelectedIndex(index);
            }
        };
        ProTabSetComponent.prototype.contextmenuNavItem = function (tab, e) {
            if (!tab.nzDisabled) {
                // ignore nzCanDeactivate
                tab.nzContextmenu.emit(e);
            }
        };
        ProTabSetComponent.prototype.setSelectedIndex = function (index) {
            var _this = this;
            this.canDeactivateSubscription.unsubscribe();
            this.canDeactivateSubscription = this.canDeactivateFun(this.selectedIndex, index).subscribe(function (can) {
                if (can) {
                    _this.nzSelectedIndex = index;
                    _this.tabNavBarRef.focusIndex = index;
                    _this.cdr.markForCheck();
                }
            });
        };
        ProTabSetComponent.prototype.getTabIndex = function (tab, index) {
            if (tab.nzDisabled) {
                return null;
            }
            return this.selectedIndex === index ? 0 : -1;
        };
        ProTabSetComponent.prototype.getTabContentId = function (i) {
            return "pro-tabs-" + this.tabSetId + "-tab-" + i;
        };
        ProTabSetComponent.prototype.setUpRouter = function () {
            var _this = this;
            if (this.nzLinkRouter) {
                if (!this.router) {
                    throw new Error(logger.PREFIX + " you should import 'RouterModule' if you want to use 'nzLinkRouter'!");
                }
                this.router.events
                    .pipe(operators.takeUntil(this.destroy$), operators.filter(function (e) { return e instanceof i1$2.NavigationEnd; }), operators.startWith(true), operators.delay(0))
                    .subscribe(function () {
                    _this.updateRouterActive();
                    _this.cdr.markForCheck();
                });
            }
        };
        ProTabSetComponent.prototype.updateRouterActive = function () {
            if (this.router.navigated) {
                var index = this.findShouldActiveTabIndex();
                if (index !== this.selectedIndex) {
                    this.setSelectedIndex(index);
                    this.nzSelectedIndexChange.emit(index);
                }
                this.nzHideAll = index === -1;
            }
        };
        ProTabSetComponent.prototype.findShouldActiveTabIndex = function () {
            var tabs = this.tabs.toArray();
            var isActive = this.isLinkActive(this.router);
            return tabs.findIndex(function (tab) {
                var c = tab.linkDirective;
                return c ? isActive(c.routerLink) || isActive(c.routerLinkWithHref) : false;
            });
        };
        ProTabSetComponent.prototype.isLinkActive = function (router) {
            var _this = this;
            return function (link) { return (link ? router.isActive(link.urlTree, _this.nzLinkExact) : false); };
        };
        ProTabSetComponent.prototype.ngOnChanges = function (changes) {
            if (changes.hasOwnProperty('nzShowPagination')) {
                logger.warnDeprecation("[nzOnPrevClick] of pro-tabset is not support, will be removed in 11.0.0");
            }
        };
        ProTabSetComponent.prototype.isNonEmptyString = function (value) {
            return typeof value === 'string' && value !== '';
        };
        ProTabSetComponent.prototype.isTemplateRef = function (value) {
            return value instanceof i0.TemplateRef;
        };
        return ProTabSetComponent;
    }());
    ProTabSetComponent.ɵfac = function ProTabSetComponent_Factory(t) { return new (t || ProTabSetComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1$2.Router, 8)); };
    ProTabSetComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ProTabSetComponent, selectors: [["pro-tabset"]], contentQueries: function ProTabSetComponent_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                i0.ɵɵcontentQuery(dirIndex, ProTabComponent, 1);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.allTabs = _t);
            }
        }, viewQuery: function ProTabSetComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(ProTabNavBarComponent, 1);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tabNavBarRef = _t.first);
            }
        }, hostAttrs: [1, "ant-pro-tabs"], hostVars: 22, hostBindings: function ProTabSetComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵclassProp("ant-pro-tabs-card", ctx.nzType === "card" || ctx.nzType === "editable-card")("ant-pro-tabs-editable", ctx.nzType === "editable-card")("ant-pro-tabs-editable-card", ctx.nzType === "editable-card")("ant-pro-tabs-centered", ctx.nzCentered)("ant-pro-tabs-top", ctx.nzTabPosition === "top")("ant-pro-tabs-bottom", ctx.nzTabPosition === "bottom")("ant-pro-tabs-left", ctx.nzTabPosition === "left")("ant-pro-tabs-right", ctx.nzTabPosition === "right")("ant-pro-tabs-default", ctx.nzSize === "default")("ant-pro-tabs-small", ctx.nzSize === "small")("ant-pro-tabs-large", ctx.nzSize === "large");
            }
        }, inputs: { nzSelectedIndex: "nzSelectedIndex", nzTabPosition: "nzTabPosition", nzTabBarExtraContent: "nzTabBarExtraContent", nzCanDeactivate: "nzCanDeactivate", nzAddIcon: "nzAddIcon", nzTabBarStyle: "nzTabBarStyle", nzType: "nzType", nzSize: "nzSize", nzAnimated: "nzAnimated", nzTabBarGutter: "nzTabBarGutter", nzHideAdd: "nzHideAdd", nzCentered: "nzCentered", nzHideAll: "nzHideAll", nzLinkRouter: "nzLinkRouter", nzLinkExact: "nzLinkExact", nzShowPagination: "nzShowPagination" }, outputs: { nzSelectChange: "nzSelectChange", nzSelectedIndexChange: "nzSelectedIndexChange", nzTabListScroll: "nzTabListScroll", nzClose: "nzClose", nzAdd: "nzAdd", nzOnNextClick: "nzOnNextClick", nzOnPrevClick: "nzOnPrevClick" }, exportAs: ["proTabset"], features: [i0.ɵɵProvidersFeature([
                {
                    provide: PRO_TAB_SET,
                    useExisting: ProTabSetComponent
                }
            ]), i0.ɵɵNgOnChangesFeature], decls: 4, vars: 14, consts: [[3, "ngStyle", "selectedIndex", "inkBarAnimated", "addable", "addIcon", "hideBar", "position", "extraTemplate", "tabScroll", "selectFocusedIndex", "addClicked", 4, "ngIf"], [1, "ant-pro-tabs-content-holder"], [1, "ant-pro-tabs-content"], ["pro-tab-body", "", 3, "active", "content", "forceRender", "tabPaneAnimated", 4, "ngFor", "ngForOf"], [3, "ngStyle", "selectedIndex", "inkBarAnimated", "addable", "addIcon", "hideBar", "position", "extraTemplate", "tabScroll", "selectFocusedIndex", "addClicked"], ["class", "ant-pro-tabs-tab", 3, "margin-right", "margin-bottom", "ant-pro-tabs-tab-active", "ant-pro-tabs-tab-disabled", "click", "contextmenu", 4, "ngFor", "ngForOf"], [1, "ant-pro-tabs-tab", 3, "click", "contextmenu"], ["role", "tab", "ProTabNavItem", "", "cdkMonitorElementFocus", "", 1, "ant-pro-tabs-tab-btn", 3, "disabled", "tab", "active"], [3, "ngSwitch"], [3, "ngTemplateOutlet", 4, "ngSwitchCase"], [4, "ngSwitchCase"], ["pro-tab-close-button", "", 3, "closeIcon", "click", 4, "ngIf"], [3, "ngTemplateOutlet"], ["pro-tab-close-button", "", 3, "closeIcon", "click"], ["pro-tab-body", "", 3, "active", "content", "forceRender", "tabPaneAnimated"]], template: function ProTabSetComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, ProTabSetComponent_pro_tabs_nav_0_Template, 2, 9, "pro-tabs-nav", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵelementStart(2, "div", 2);
                i0.ɵɵtemplate(3, ProTabSetComponent_div_3_Template, 1, 4, "div", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", ctx.tabs.length);
                i0.ɵɵadvance(2);
                i0.ɵɵstyleProp("margin-left", ctx.tabPaneAnimated ? -(ctx.nzSelectedIndex || 0) * 100 : null, "%");
                i0.ɵɵclassProp("ant-pro-tabs-content-top", ctx.nzTabPosition === "top")("ant-pro-tabs-content-bottom", ctx.nzTabPosition === "bottom")("ant-pro-tabs-content-left", ctx.nzTabPosition === "left")("ant-pro-tabs-content-right", ctx.nzTabPosition === "right")("ant-pro-tabs-content-animated", ctx.tabPaneAnimated);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.tabs);
            }
        }, directives: [i1.NgIf, i1.NgForOf, ProTabNavBarComponent, i1.NgStyle, ProTabNavItemDirective, i5.CdkMonitorFocus, i1.NgSwitch, i1.NgSwitchCase, i1.NgTemplateOutlet, ProTabCloseButtonComponent, ProTabBodyComponent], encapsulation: 2 });
    __decorate([
        util.InputBoolean()
    ], ProTabSetComponent.prototype, "nzHideAdd", void 0);
    __decorate([
        util.InputBoolean()
    ], ProTabSetComponent.prototype, "nzCentered", void 0);
    __decorate([
        util.InputBoolean()
    ], ProTabSetComponent.prototype, "nzHideAll", void 0);
    __decorate([
        util.InputBoolean()
    ], ProTabSetComponent.prototype, "nzLinkRouter", void 0);
    __decorate([
        util.InputBoolean()
    ], ProTabSetComponent.prototype, "nzLinkExact", void 0);
    __decorate([
        util.InputBoolean()
    ], ProTabSetComponent.prototype, "nzShowPagination", void 0);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProTabSetComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pro-tabset',
                        exportAs: 'proTabset',
                        preserveWhitespaces: false,
                        encapsulation: i0.ViewEncapsulation.None,
                        changeDetection: i0.ChangeDetectionStrategy.Default,
                        providers: [
                            {
                                provide: PRO_TAB_SET,
                                useExisting: ProTabSetComponent
                            }
                        ],
                        template: "\n      <pro-tabs-nav\n              *ngIf=\"tabs.length\"\n              [ngStyle]=\"nzTabBarStyle\"\n              [selectedIndex]=\"nzSelectedIndex || 0\"\n              [inkBarAnimated]=\"inkBarAnimated\"\n              [addable]=\"addable\"\n              [addIcon]=\"nzAddIcon\"\n              [hideBar]=\"nzHideAll\"\n              [position]=\"position\"\n              [extraTemplate]=\"nzTabBarExtraContent\"\n              (tabScroll)=\"nzTabListScroll.emit($event)\"\n              (selectFocusedIndex)=\"setSelectedIndex($event)\"\n              (addClicked)=\"onAdd()\"\n      >\n          <div\n                  class=\"ant-pro-tabs-tab\"\n                  [style.margin-right.px]=\"position === 'horizontal' ? nzTabBarGutter : null\"\n                  [style.margin-bottom.px]=\"position === 'vertical' ? nzTabBarGutter : null\"\n                  [class.ant-pro-tabs-tab-active]=\"nzSelectedIndex === i\"\n                  [class.ant-pro-tabs-tab-disabled]=\"tab.nzDisabled\"\n                  (click)=\"clickNavItem(tab, i)\"\n                  (contextmenu)=\"contextmenuNavItem(tab, $event)\"\n                  *ngFor=\"let tab of tabs; let i = index\"\n          >\n              <div\n                      role=\"tab\"\n                      [attr.tabIndex]=\"getTabIndex(tab, i)\"\n                      [attr.aria-disabled]=\"tab.nzDisabled\"\n                      [attr.aria-selected]=\"nzSelectedIndex === i && !nzHideAll\"\n                      [attr.aria-controls]=\"getTabContentId(i)\"\n                      [disabled]=\"tab.nzDisabled\"\n                      [tab]=\"tab\"\n                      [active]=\"nzSelectedIndex === i\"\n                      class=\"ant-pro-tabs-tab-btn\"\n                      ProTabNavItem\n                      cdkMonitorElementFocus\n              >\n                  <ng-container [ngSwitch]=\"true\">\n                    <ng-container *ngSwitchCase=\"isTemplateRef(tab.label)\" [ngTemplateOutlet]=\"tab.label\"></ng-container>\n                    <ng-container *ngSwitchCase=\"isNonEmptyString(tab.label)\">{{tab.label}}</ng-container>\n                  </ng-container>\n                  <button\n                          pro-tab-close-button\n                          *ngIf=\"tab.nzClosable && closable && !tab.nzDisabled\"\n                          [closeIcon]=\"tab.nzCloseIcon\"\n                          (click)=\"onClose(i, $event)\"\n                  ></button>\n              </div>\n          </div>\n      </pro-tabs-nav>\n      <div class=\"ant-pro-tabs-content-holder\">\n          <div\n                  class=\"ant-pro-tabs-content\"\n                  [class.ant-pro-tabs-content-top]=\"nzTabPosition === 'top'\"\n                  [class.ant-pro-tabs-content-bottom]=\"nzTabPosition === 'bottom'\"\n                  [class.ant-pro-tabs-content-left]=\"nzTabPosition === 'left'\"\n                  [class.ant-pro-tabs-content-right]=\"nzTabPosition === 'right'\"\n                  [class.ant-pro-tabs-content-animated]=\"tabPaneAnimated\"\n                  [style.margin-left.%]=\"tabPaneAnimated ? -(nzSelectedIndex || 0) * 100 : null\"\n          >\n              <div\n                      pro-tab-body\n                      *ngFor=\"let tab of tabs; let i = index\"\n                      [active]=\"nzSelectedIndex == i && !nzHideAll\"\n                      [content]=\"tab.content\"\n                      [forceRender]=\"tab.nzForceRender\"\n                      [tabPaneAnimated]=\"tabPaneAnimated\"\n              ></div>\n          </div>\n      </div>\n  ",
                        host: {
                            class: 'ant-pro-tabs',
                            '[class.ant-pro-tabs-card]': "nzType === 'card' || nzType === 'editable-card'",
                            '[class.ant-pro-tabs-editable]': "nzType === 'editable-card'",
                            '[class.ant-pro-tabs-editable-card]': "nzType === 'editable-card'",
                            '[class.ant-pro-tabs-centered]': "nzCentered",
                            '[class.ant-pro-tabs-top]': "nzTabPosition === 'top'",
                            '[class.ant-pro-tabs-bottom]': "nzTabPosition === 'bottom'",
                            '[class.ant-pro-tabs-left]': "nzTabPosition === 'left'",
                            '[class.ant-pro-tabs-right]': "nzTabPosition === 'right'",
                            '[class.ant-pro-tabs-default]': "nzSize === 'default'",
                            '[class.ant-pro-tabs-small]': "nzSize === 'small'",
                            '[class.ant-pro-tabs-large]': "nzSize === 'large'"
                        }
                    }]
            }], function () {
            return [{ type: i0.ChangeDetectorRef }, { type: i1$2.Router, decorators: [{
                            type: i0.Optional
                        }] }];
        }, { nzSelectedIndex: [{
                    type: i0.Input
                }], nzTabPosition: [{
                    type: i0.Input
                }], nzTabBarExtraContent: [{
                    type: i0.Input
                }], nzCanDeactivate: [{
                    type: i0.Input
                }], nzAddIcon: [{
                    type: i0.Input
                }], nzTabBarStyle: [{
                    type: i0.Input
                }], nzType: [{
                    type: i0.Input
                }], nzSize: [{
                    type: i0.Input
                }], nzAnimated: [{
                    type: i0.Input
                }], nzTabBarGutter: [{
                    type: i0.Input
                }], nzHideAdd: [{
                    type: i0.Input
                }], nzCentered: [{
                    type: i0.Input
                }], nzHideAll: [{
                    type: i0.Input
                }], nzLinkRouter: [{
                    type: i0.Input
                }], nzLinkExact: [{
                    type: i0.Input
                }], nzSelectChange: [{
                    type: i0.Output
                }], nzSelectedIndexChange: [{
                    type: i0.Output
                }], nzTabListScroll: [{
                    type: i0.Output
                }], nzClose: [{
                    type: i0.Output
                }], nzAdd: [{
                    type: i0.Output
                }], nzShowPagination: [{
                    type: i0.Input
                }], nzOnNextClick: [{
                    type: i0.Output
                }], nzOnPrevClick: [{
                    type: i0.Output
                }], allTabs: [{
                    type: i0.ContentChildren,
                    args: [ProTabComponent, { descendants: true }]
                }], tabNavBarRef: [{
                    type: i0.ViewChild,
                    args: [ProTabNavBarComponent]
                }] });
    })();

    var _c0$3 = ["tabset"];
    function ReuseTabComponent_ng_container_2_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtext(0);
        }
        if (rf & 2) {
            var i_r2 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵtextInterpolate1(" ", i_r2.title, " ");
        }
    }
    function ReuseTabComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r8_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "pro-tab", 3);
            i0.ɵɵlistener("nzClick", function ReuseTabComponent_ng_container_2_Template_pro_tab_nzClick_1_listener() { i0.ɵɵrestoreView(_r8_1); var index_r3 = ctx.index; var ctx_r7 = i0.ɵɵnextContext(); return ctx_r7._to(index_r3); })("nzContextmenu", function ReuseTabComponent_ng_container_2_Template_pro_tab_nzContextmenu_1_listener($event) { i0.ɵɵrestoreView(_r8_1); var i_r2 = ctx.$implicit; var ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.openMenu($event, i_r2); });
            i0.ɵɵtemplate(2, ReuseTabComponent_ng_container_2_ng_template_2_Template, 1, 1, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var i_r2 = ctx.$implicit;
            var _r4 = i0.ɵɵreference(3);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzTitle", _r4)("nzClosable", i_r2.closable);
        }
    }
    var ReuseTabComponent = /** @class */ (function () {
        // #endregion
        function ReuseTabComponent(reuseTabService, reuseTabContextService, cdr, router, route, doc) {
            this.reuseTabService = reuseTabService;
            this.reuseTabContextService = reuseTabContextService;
            this.cdr = cdr;
            this.router = router;
            this.route = route;
            this.doc = doc;
            this.unsubscribe$ = new rxjs.Subject();
            this.updatePos$ = new rxjs.Subject();
            this.list = [];
            this.pos = 0;
            // #region fields
            this.debug = false;
            this.allowClose = true;
            this.allowRefresh = true;
            this.keepingScroll = false;
            this.change = new i0.EventEmitter();
            this.close = new i0.EventEmitter();
        }
        Object.defineProperty(ReuseTabComponent.prototype, "keepingScrollContainer", {
            set: function (value) {
                this._keepingScrollContainer = typeof value === 'string' ? this.doc.querySelector(value) : value;
            },
            enumerable: false,
            configurable: true
        });
        ReuseTabComponent.prototype.genTit = function (title) {
            return title.name;
        };
        Object.defineProperty(ReuseTabComponent.prototype, "curUrl", {
            get: function () {
                return this.reuseTabService.getUrl(this.route.snapshot);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ReuseTabComponent.prototype, "curUrlQueryParam", {
            get: function () {
                return this.route.snapshot.queryParams;
            },
            enumerable: false,
            configurable: true
        });
        ReuseTabComponent.prototype.genCurItem = function () {
            var url = this.curUrl;
            var snapshotTrue = this.reuseTabService.getTruthRoute(this.route.snapshot);
            return {
                url: url,
                queryParams: snapshotTrue.queryParams,
                title: this.genTit(this.reuseTabService.getTitle(url, snapshotTrue)),
                closable: this.allowClose && this.reuseTabService.count > 0 && this.reuseTabService.getClosable(url, snapshotTrue),
                refreshable: this.allowRefresh && this.reuseTabService.getRefreshable(url, snapshotTrue),
                active: false,
                last: false,
                index: 0,
            };
        };
        ReuseTabComponent.prototype.genList = function (notify) {
            var _this = this;
            var ls = this.reuseTabService.items.map(function (item, index) { return ({
                url: item.url,
                queryParams: item._snapshot.queryParams,
                title: _this.genTit(item.title),
                closable: _this.allowClose && item.closable && _this.reuseTabService.count > 0,
                refreshable: _this.allowRefresh && item.refreshable,
                index: index,
                active: false,
                last: false,
            }); });
            var url = this.curUrl;
            var addCurrent = ls.findIndex(function (w) { return w.url === url && _this.reuseTabService.queryParamsEqual(w.queryParams, _this.curUrlQueryParam); }) === -1;
            if (notify && notify.active === 'close' && notify.url === url) {
                addCurrent = false;
                var toPos = 0;
                var curItem = this.list.find(function (w) { return w.url === url && _this.reuseTabService.queryParamsEqual(w.queryParams, _this.curUrlQueryParam); });
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
            ls.forEach(function (item, index) { return (item.index = index); });
            if (ls.length === 1) {
                ls[0].closable = false;
            }
            this.list = ls;
            this.cdr.detectChanges();
            this.updatePos$.next();
        };
        ReuseTabComponent.prototype.updateTitle = function (res) {
            var _this = this;
            var item = this.list.find(function (w) {
                var urlWithParams = _this.router.serializeUrl(_this.router.createUrlTree([w.url], { queryParams: w.queryParams }));
                return urlWithParams === res.url;
            });
            if (!item)
                return;
            item.title = this.genTit(res.title);
            console.log(this.list);
            this.cdr.detectChanges();
        };
        ReuseTabComponent.prototype.refresh = function (item) {
            this.reuseTabService.runHook('onReuseInit', this.pos === item.index ? this.reuseTabService.componentRef : item.index, 'refresh');
        };
        // #region UI
        ReuseTabComponent.prototype.contextMenuChange = function (res) {
            var _this = this;
            var fn = null;
            switch (res.type) {
                case 'refresh':
                    this.refresh(res.item);
                    break;
                case 'close':
                    this._close(null, res.item.index, res.includeNonCloseable);
                    break;
                case 'closeRight':
                    fn = function () {
                        _this.reuseTabService.closeRight(res.item.url, res.item.queryParams, res.includeNonCloseable);
                        _this.close.emit(null);
                    };
                    break;
                case 'closeOther':
                    fn = function () {
                        _this.reuseTabService.clear(res.includeNonCloseable);
                        _this.close.emit(null);
                    };
                    break;
            }
            if (!fn) {
                return;
            }
            if (!res.item.active && res.item.index <= this.list.find(function (w) { return w.active; }).index) {
                this._to(res.item.index, fn);
            }
            else {
                fn();
            }
        };
        ReuseTabComponent.prototype._to = function (index, cb) {
            var _this = this;
            index = Math.max(0, Math.min(index, this.list.length - 1));
            var item = this.list[index];
            this.router.navigate([item.url], { queryParams: item.queryParams }).then(function (res) {
                if (!res)
                    return;
                _this.item = item;
                _this.change.emit(item);
                if (cb) {
                    cb();
                }
                _this.cdr.detectChanges();
            });
        };
        ReuseTabComponent.prototype._close = function (e, idx, includeNonCloseable) {
            if (e != null) {
                e.preventDefault();
                e.stopPropagation();
            }
            var item = this.list[idx];
            this.reuseTabService.close(item.url, item.queryParams, includeNonCloseable);
            this.close.emit(item);
            this.cdr.detectChanges();
            return false;
        };
        ReuseTabComponent.prototype.myClose = function (event) {
            var idx = event.index;
            this._close(null, idx, false);
        };
        ReuseTabComponent.prototype.activate = function (instance) {
            this.reuseTabService.componentRef = { instance: instance };
        };
        ReuseTabComponent.prototype.openMenu = function (event, item) {
            this.reuseTabContextService.show.next({
                event: event,
                item: item,
            });
            event.preventDefault();
            event.stopPropagation();
        };
        // #endregion
        ReuseTabComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.updatePos$.pipe(operators.takeUntil(this.unsubscribe$), operators.debounceTime(50)).subscribe(function () {
                var url = _this.reuseTabService.getUrl(_this.route.snapshot);
                var ls = _this.list.filter(function (w) { return w.url === url || !_this.reuseTabService.isExclude(w.url); });
                if (ls.length === 0) {
                    return;
                }
                var last = ls[ls.length - 1];
                var item = ls.find(function (w) { return w.url === url && _this.reuseTabService.queryParamsEqual(w.queryParams, _this.route.snapshot.queryParams); });
                last.last = true;
                var pos = item == null ? last.index : item.index;
                ls.forEach(function (i, idx) { return (i.active = pos === idx); });
                _this.pos = pos;
                // TODO: 目前无法知道为什么 `pos` 无法通过 `nzSelectedIndex` 生效，因此强制使用组件实例的方式来修改，这种方式是安全的
                // https://github.com/ng-alain/ng-alain/issues/1736
                _this.tabset.nzSelectedIndex = pos;
                _this.list = ls;
                if (_this.cdr && !_this.cdr.destroyed) {
                    _this.cdr.detectChanges();
                }
            });
            // 路由缓存变化订阅
            this.reuseTabService.change.pipe(operators.takeUntil(this.unsubscribe$)).subscribe(function (res) {
                switch (res && res.active) {
                    case 'title':
                        if (_this.list && _this.list.length === 0) {
                            _this.genList(res);
                        }
                        _this.updateTitle(res);
                        return;
                    case 'override':
                        if (res && res.list && res.list.length === _this.list.length) {
                            _this.updatePos$.next();
                            return;
                        }
                        break;
                }
                _this.genList(res);
            });
            this.reuseTabService.init();
            this.reuseTabContextService.show
                .pipe(operators.takeUntil(this.unsubscribe$))
                .subscribe(function (context) { return _this.reuseTabContextService.open(context); });
            this.reuseTabContextService.close
                .pipe(operators.takeUntil(this.unsubscribe$))
                .subscribe(function (res) { return _this.contextMenuChange(res); });
        };
        ReuseTabComponent.prototype.ngOnChanges = function (changes) {
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
        };
        ReuseTabComponent.prototype.ngOnDestroy = function () {
            var unsubscribe$ = this.unsubscribe$;
            unsubscribe$.next();
            unsubscribe$.complete();
        };
        return ReuseTabComponent;
    }());
    ReuseTabComponent.ɵfac = function ReuseTabComponent_Factory(t) { return new (t || ReuseTabComponent)(i0.ɵɵdirectiveInject(ReuseTabService), i0.ɵɵdirectiveInject(ReuseTabMenuService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1$2.Router), i0.ɵɵdirectiveInject(i1$2.ActivatedRoute), i0.ɵɵdirectiveInject(i1.DOCUMENT)); };
    ReuseTabComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ReuseTabComponent, selectors: [["pro-reuse-tab"]], viewQuery: function ReuseTabComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0$3, 3);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tabset = _t.first);
            }
        }, hostVars: 4, hostBindings: function ReuseTabComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵclassProp("ant-pro-reuse-tab", true)("ant-pro-reuse-tab-line", true);
            }
        }, inputs: { debug: "debug", max: "max", tabMaxWidth: "tabMaxWidth", excludes: "excludes", allowClose: "allowClose", allowRefresh: "allowRefresh", keepingScroll: "keepingScroll", keepingScrollContainer: "keepingScrollContainer", tabBarExtraContent: "tabBarExtraContent", tabBarGutter: "tabBarGutter", tabBarStyle: "tabBarStyle" }, outputs: { change: "change", close: "close" }, exportAs: ["proReuseTab"], features: [i0.ɵɵProvidersFeature([ReuseTabMenuService]), i0.ɵɵNgOnChangesFeature], decls: 3, vars: 4, consts: [["nzType", "editable-card", 3, "nzSize", "nzHideAdd", "nzSelectedIndex", "nzClose"], ["tabset", ""], [4, "ngFor", "ngForOf"], [3, "nzTitle", "nzClosable", "nzClick", "nzContextmenu"], ["titleTemplate", ""]], template: function ReuseTabComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "pro-tabset", 0, 1);
                i0.ɵɵlistener("nzClose", function ReuseTabComponent_Template_pro_tabset_nzClose_0_listener($event) { return ctx.myClose($event); });
                i0.ɵɵtemplate(2, ReuseTabComponent_ng_container_2_Template, 4, 2, "ng-container", 2);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("nzSize", "small")("nzHideAdd", true)("nzSelectedIndex", ctx.pos);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngForOf", ctx.list);
            }
        }, directives: [ProTabSetComponent, i1.NgForOf, ProTabComponent], styles: [".ant-pro-reuse-tab{display:block;background-color:#f5f7f9;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;padding:6px}.ant-pro-reuse-tab .ant-pro-tabs .ant-pro-tabs-bar{margin:0;border-bottom:0}.ant-pro-reuse-tab .ant-pro-tabs>.ant-pro-tabs-nav{margin:0}.ant-pro-reuse-tab .ant-pro-tabs>.ant-pro-tabs-nav .ant-pro-tabs-tab{border:transparent;border-radius:4px!important;background:#fff;padding:6px 12px!important}.ant-pro-reuse-tab .ant-pro-tabs>.ant-pro-tabs-nav .ant-pro-tabs-tab:not(:last-of-type){margin-right:6px!important}.ant-pro-reuse-tab .ant-pro-tabs>.ant-pro-tabs-nav:before{border-bottom:transparent}.ant-pro-reuse-tab .ant-pro-tabs .ant-pro-tabs-tab-remove{margin:0;padding-right:0}.ant-pro-reuse-tab .ant-pro-tabs .ant-pro-tabs-nav-more{background:#fff!important}.ant-pro-reuse-tab-cm .ant-menu{border:1px solid #f7f5f5}.ant-pro-reuse-tab-cm .ant-menu-item{height:24px;line-height:24px}"], encapsulation: 2, changeDetection: 0 });
    __decorate([
        util.InputBoolean()
    ], ReuseTabComponent.prototype, "debug", void 0);
    __decorate([
        util.InputNumber()
    ], ReuseTabComponent.prototype, "max", void 0);
    __decorate([
        util.InputNumber()
    ], ReuseTabComponent.prototype, "tabMaxWidth", void 0);
    __decorate([
        util.InputBoolean()
    ], ReuseTabComponent.prototype, "allowClose", void 0);
    __decorate([
        util.InputBoolean()
    ], ReuseTabComponent.prototype, "allowRefresh", void 0);
    __decorate([
        util.InputBoolean()
    ], ReuseTabComponent.prototype, "keepingScroll", void 0);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ReuseTabComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pro-reuse-tab',
                        templateUrl: 'reuse-tab.component.html',
                        styleUrls: ['reuse-tab.component.less'],
                        host: {
                            '[class.ant-pro-reuse-tab]': 'true',
                            '[class.ant-pro-reuse-tab-line]': 'true',
                        },
                        providers: [ReuseTabMenuService],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        exportAs: 'proReuseTab',
                        preserveWhitespaces: false
                    }]
            }], function () {
            return [{ type: ReuseTabService }, { type: ReuseTabMenuService }, { type: i0.ChangeDetectorRef }, { type: i1$2.Router }, { type: i1$2.ActivatedRoute }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1.DOCUMENT]
                        }] }];
        }, { tabset: [{
                    type: i0.ViewChild,
                    args: ['tabset', { static: true }]
                }], debug: [{
                    type: i0.Input
                }], max: [{
                    type: i0.Input
                }], tabMaxWidth: [{
                    type: i0.Input
                }], excludes: [{
                    type: i0.Input
                }], allowClose: [{
                    type: i0.Input
                }], allowRefresh: [{
                    type: i0.Input
                }], keepingScroll: [{
                    type: i0.Input
                }], keepingScrollContainer: [{
                    type: i0.Input
                }], tabBarExtraContent: [{
                    type: i0.Input
                }], tabBarGutter: [{
                    type: i0.Input
                }], tabBarStyle: [{
                    type: i0.Input
                }], change: [{
                    type: i0.Output
                }], close: [{
                    type: i0.Output
                }] });
    })();

    function BasicLayoutComponent_ng_container_2_nz_sider_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    var _c0$2 = function (a1, a2) { return { "ant-pro-sider-menu-sider": true, "fix-sider-bar": a1, "light": a2 }; };
    function BasicLayoutComponent_ng_container_2_nz_sider_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r9_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "nz-sider", 9);
            i0.ɵɵlistener("nzCollapsedChange", function BasicLayoutComponent_ng_container_2_nz_sider_1_Template_nz_sider_nzCollapsedChange_0_listener($event) { i0.ɵɵrestoreView(_r9_1); var ctx_r8 = i0.ɵɵnextContext(2); return ctx_r8.collapsed = $event; });
            i0.ɵɵtemplate(1, BasicLayoutComponent_ng_container_2_nz_sider_1_ng_container_1_Template, 1, 0, "ng-container", 10);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r5 = i0.ɵɵnextContext(2);
            var _r3 = i0.ɵɵreference(9);
            i0.ɵɵproperty("nzCollapsible", true)("nzTrigger", null)("nzCollapsed", ctx_r5.collapsed)("nzBreakpoint", "lg")("nzWidth", ctx_r5.siderWidth)("nzTheme", ctx_r5.navTheme)("ngClass", i0.ɵɵpureFunction2(8, _c0$2, ctx_r5.fixSiderbar, ctx_r5.navTheme == "light"));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", _r3);
        }
    }
    function BasicLayoutComponent_ng_container_2_nz_drawer_2_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    var _c1$2 = function () { return { padding: 0, height: "100vh" }; };
    function BasicLayoutComponent_ng_container_2_nz_drawer_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r12_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "nz-drawer", 11);
            i0.ɵɵlistener("nzOnClose", function BasicLayoutComponent_ng_container_2_nz_drawer_2_Template_nz_drawer_nzOnClose_0_listener($event) { i0.ɵɵrestoreView(_r12_1); var ctx_r11 = i0.ɵɵnextContext(2); return ctx_r11.onDrawerClose($event); });
            i0.ɵɵelementStart(1, "nz-sider", 12);
            i0.ɵɵtemplate(2, BasicLayoutComponent_ng_container_2_nz_drawer_2_ng_container_2_Template, 1, 0, "ng-container", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r6 = i0.ɵɵnextContext(2);
            var _r3 = i0.ɵɵreference(9);
            i0.ɵɵproperty("nzClosable", false)("nzVisible", !ctx_r6.collapsed)("nzPlacement", "left")("nzWrapClassName", "ant-pro-sider-menu")("nzWidth", ctx_r6.siderWidth)("ngStyle", i0.ɵɵpureFunction0(13, _c1$2));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzCollapsible", true)("nzTrigger", null)("nzCollapsed", ctx_r6.isMobile ? false : ctx_r6.collapsed)("nzWidth", ctx_r6.siderWidth)("nzTheme", ctx_r6.navTheme)("ngClass", i0.ɵɵpureFunction2(14, _c0$2, ctx_r6.fixSiderbar, ctx_r6.navTheme == "light"));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", _r3);
        }
    }
    function BasicLayoutComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, BasicLayoutComponent_ng_container_2_nz_sider_1_Template, 2, 11, "nz-sider", 7);
            i0.ɵɵtemplate(2, BasicLayoutComponent_ng_container_2_nz_drawer_2_Template, 3, 17, "nz-drawer", 8);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx_r0.isMobile);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.isMobile);
        }
    }
    function BasicLayoutComponent_nz_header_4_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function BasicLayoutComponent_nz_header_4_ng_template_2_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r21_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "div", 17);
            i0.ɵɵlistener("onMenuHeaderClick", function BasicLayoutComponent_nz_header_4_ng_template_2_ng_container_0_Template_div_onMenuHeaderClick_1_listener($event) { i0.ɵɵrestoreView(_r21_1); var ctx_r20 = i0.ɵɵnextContext(3); return ctx_r20.onMenuHeaderClick.emit($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r17 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("theme", ctx_r17.navTheme)("menuData", ctx_r17.menuData)("logo", ctx_r17.logo)("title", ctx_r17.title)("contentWidth", ctx_r17.contentWidth)("rightContentRender", ctx_r17.rightContentRender)("menuHeaderRender", ctx_r17.menuHeaderRender);
        }
    }
    function BasicLayoutComponent_nz_header_4_ng_template_2_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r23_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 18);
            i0.ɵɵlistener("collapsedChange", function BasicLayoutComponent_nz_header_4_ng_template_2_ng_template_1_Template_div_collapsedChange_0_listener($event) { i0.ɵɵrestoreView(_r23_1); var ctx_r22 = i0.ɵɵnextContext(3); return ctx_r22.collapsed = $event; })("collapsedChange", function BasicLayoutComponent_nz_header_4_ng_template_2_ng_template_1_Template_div_collapsedChange_0_listener($event) { i0.ɵɵrestoreView(_r23_1); var ctx_r24 = i0.ɵɵnextContext(3); return ctx_r24.onCollapse.emit($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r19 = i0.ɵɵnextContext(3);
            i0.ɵɵproperty("isMobile", ctx_r19.isMobile)("collapsed", ctx_r19.collapsed)("logo", ctx_r19.logo)("collapsedButtonRender", ctx_r19.collapsedButtonRender)("rightContentRender", ctx_r19.rightContentRender);
        }
    }
    function BasicLayoutComponent_nz_header_4_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, BasicLayoutComponent_nz_header_4_ng_template_2_ng_container_0_Template, 2, 7, "ng-container", 15);
            i0.ɵɵtemplate(1, BasicLayoutComponent_nz_header_4_ng_template_2_ng_template_1_Template, 1, 5, "ng-template", null, 16, i0.ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
            var _r18 = i0.ɵɵreference(2);
            var ctx_r15 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("ngIf", ctx_r15.layout === "topmenu" && !ctx_r15.isMobile)("ngIfElse", _r18);
        }
    }
    function BasicLayoutComponent_nz_header_4_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelement(1, "pro-reuse-tab", 19);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("allowRefresh", false)("debug", false);
        }
    }
    var _c2$1 = function (a1) { return { padding: 0, width: a1, zIndex: 2 }; };
    var _c3$1 = function (a0) { return { "ant-pro-fixed-header": a0 }; };
    function BasicLayoutComponent_nz_header_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "nz-header", 13);
            i0.ɵɵtemplate(1, BasicLayoutComponent_nz_header_4_ng_container_1_Template, 1, 0, "ng-container", 10);
            i0.ɵɵtemplate(2, BasicLayoutComponent_nz_header_4_ng_template_2_Template, 3, 2, "ng-template", null, 14, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(4, BasicLayoutComponent_nz_header_4_ng_container_4_Template, 2, 2, "ng-container", 1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var _r14 = i0.ɵɵreference(3);
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(4, _c2$1, ctx_r1.getHeadWidth()))("ngClass", i0.ɵɵpureFunction1(6, _c3$1, ctx_r1.fixedHeader));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", ctx_r1.headerRender ? ctx_r1.headerRender : _r14);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx_r1.fixedHeader && ctx_r1.reuseTab);
        }
    }
    function BasicLayoutComponent_nz_footer_7_ng_container_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function BasicLayoutComponent_nz_footer_7_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, BasicLayoutComponent_nz_footer_7_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 10);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r25 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", ctx_r25.footerRender);
        }
    }
    function BasicLayoutComponent_nz_footer_7_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "div", 22);
        }
        if (rf & 2) {
            var ctx_r27 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("links", ctx_r27.links)("copyright", ctx_r27.copyright);
        }
    }
    function BasicLayoutComponent_nz_footer_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "nz-footer", 20);
            i0.ɵɵtemplate(1, BasicLayoutComponent_nz_footer_7_ng_container_1_Template, 2, 1, "ng-container", 15);
            i0.ɵɵtemplate(2, BasicLayoutComponent_nz_footer_7_ng_template_2_Template, 1, 2, "ng-template", null, 21, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var _r26 = i0.ɵɵreference(3);
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r2.footerRender)("ngIfElse", _r26);
        }
    }
    function BasicLayoutComponent_ng_template_8_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function BasicLayoutComponent_ng_template_8_ng_template_2_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0, 31);
        }
        if (rf & 2) {
            var ctx_r32 = i0.ɵɵnextContext(3);
            i0.ɵɵproperty("ngTemplateOutlet", ctx_r32.logo);
        }
    }
    function BasicLayoutComponent_ng_template_8_ng_template_2_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelement(1, "img", 32);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r33 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("src", ctx_r33.logo, i0.ɵɵsanitizeUrl);
        }
    }
    function BasicLayoutComponent_ng_template_8_ng_template_2_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0, 31);
        }
        if (rf & 2) {
            var ctx_r34 = i0.ɵɵnextContext(3);
            i0.ɵɵproperty("ngTemplateOutlet", ctx_r34.title);
        }
    }
    function BasicLayoutComponent_ng_template_8_ng_template_2_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtext(1);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r35 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r35.title);
        }
    }
    function BasicLayoutComponent_ng_template_8_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "a", 27);
            i0.ɵɵelementContainerStart(1, 28);
            i0.ɵɵtemplate(2, BasicLayoutComponent_ng_template_8_ng_template_2_ng_container_2_Template, 1, 1, "ng-container", 29);
            i0.ɵɵtemplate(3, BasicLayoutComponent_ng_template_8_ng_template_2_ng_container_3_Template, 2, 1, "ng-container", 30);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementStart(4, "h1");
            i0.ɵɵelementContainerStart(5, 28);
            i0.ɵɵtemplate(6, BasicLayoutComponent_ng_template_8_ng_template_2_ng_container_6_Template, 1, 1, "ng-container", 29);
            i0.ɵɵtemplate(7, BasicLayoutComponent_ng_template_8_ng_template_2_ng_container_7_Template, 2, 1, "ng-container", 30);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r31 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitch", true);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", ctx_r31.isTemplateRef(ctx_r31.logo));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", ctx_r31.isNonEmptyString(ctx_r31.logo));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngSwitch", true);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", ctx_r31.isTemplateRef(ctx_r31.title));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", ctx_r31.isNonEmptyString(ctx_r31.title));
        }
    }
    var _c4$1 = function (a0, a1) { return { logo: a0, title: a1 }; };
    var _c5$1 = function () { return { "width": "100%", "padding": "16px 0" }; };
    function BasicLayoutComponent_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
            var _r37_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 23);
            i0.ɵɵlistener("click", function BasicLayoutComponent_ng_template_8_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r37_1); var ctx_r36 = i0.ɵɵnextContext(); return ctx_r36.onMenuHeaderClick.emit($event); });
            i0.ɵɵtemplate(1, BasicLayoutComponent_ng_template_8_ng_container_1_Template, 1, 0, "ng-container", 24);
            i0.ɵɵtemplate(2, BasicLayoutComponent_ng_template_8_ng_template_2_Template, 8, 6, "ng-template", null, 25, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "pro-base-menu", 26);
            i0.ɵɵlistener("openChange", function BasicLayoutComponent_ng_template_8_Template_pro_base_menu_openChange_4_listener($event) { i0.ɵɵrestoreView(_r37_1); var ctx_r38 = i0.ɵɵnextContext(); return ctx_r38.menuOpenChange($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var _r30 = i0.ɵɵreference(3);
            var ctx_r4 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", ctx_r4.menuHeaderRender ? ctx_r4.menuHeaderRender : _r30)("ngTemplateOutletContext", i0.ɵɵpureFunction2(10, _c4$1, ctx_r4.logo, ctx_r4.title));
            i0.ɵɵadvance(3);
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(13, _c5$1));
            i0.ɵɵproperty("menuData", ctx_r4.menuData)("mode", ctx_r4.mode)("theme", ctx_r4.navTheme)("openKeys", ctx_r4.openKeys)("selectedKey", ctx_r4.selectedKey)("collapsed", ctx_r4.isMobile ? false : ctx_r4.collapsed);
        }
    }
    var _c6 = function () { return ["ant-design-pro", "basicLayout"]; };
    var _c7 = function (a0) { return { "padding-left": a0, "min-height": "100vh" }; };
    var _c8 = ["*"];
    var BasicLayoutComponent = /** @class */ (function () {
        function BasicLayoutComponent(breakpointObserver, cdf, activatedRoute, router) {
            this.breakpointObserver = breakpointObserver;
            this.cdf = cdf;
            this.activatedRoute = activatedRoute;
            this.router = router;
            // side menu
            this.title = 'Ant Design Pro'; // layout 的 左上角 的 title
            this.onMenuHeaderClick = new i0.EventEmitter();
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
            this.onCollapse = new i0.EventEmitter(); // 菜单的折叠收起事件
            // 是否禁用移动端模式，有的管理系统不需要移动端模式，此属性设置为true即可
            // @Input() @InputBoolean() disableMobile: boolean;
            // 多标签
            this.reuseTab = true;
            this.isMobile = false;
            this.openKeys = [];
            this.visible = true;
            this.ticking = false;
            this.oldScrollTop = 0;
            this.destroy$ = new rxjs.Subject();
        }
        BasicLayoutComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.breakpointObserver
                .observe(['(max-width: 599px)'])
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function (state) {
                // if (!this.disableMobile) {
                if (state.matches) {
                    _this.isMobile = true;
                }
                else {
                    _this.isMobile = false;
                }
                _this.cdf.markForCheck();
                // }
            });
            this.router.events.pipe(operators.filter(function (event) { return event instanceof i1$2.NavigationEnd; })).subscribe(function () {
                if (!_this.menuData || _this.menuData.length < 1) {
                    setTimeout(function () {
                        _this.openKeys = _this.getOpenKeys(_this.router.url);
                        _this.cdf.markForCheck();
                    }, 900);
                }
                else {
                    _this.openKeys = _this.getOpenKeys(_this.router.url);
                    _this.cdf.markForCheck();
                }
            });
        };
        BasicLayoutComponent.prototype.ngOnChanges = function (changes) {
            if (changes.layout) {
                this.openKeys = this.getOpenKeys(this.router.url);
                console.log('ngOnChanges');
            }
        };
        BasicLayoutComponent.prototype.menuOpenChange = function (event) {
            if (event.status) {
                this.openKeys = this.getOpenKeys(event.item.path);
                console.log('menuOpenChange');
            }
        };
        BasicLayoutComponent.prototype.getOpenKeys = function (path) {
            path = decodeURIComponent(path);
            var keys = new Array();
            var parent = this.getParent(path);
            while (parent) {
                keys.push(parent.path);
                parent = this.getParent(parent.path);
            }
            keys.push(path);
            return keys;
        };
        BasicLayoutComponent.prototype.getParent = function (path) {
            var e_1, _a;
            var findChild = this.menuData.find(function (item) { return item.path === path; });
            if (findChild) {
                return null;
            }
            try {
                for (var _b = __values(this.menuData), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var menu = _c.value;
                    var fild = this.getNearParent(path, menu);
                    if (fild) {
                        return fild;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return null;
        };
        BasicLayoutComponent.prototype.getNearParent = function (path, menu) {
            var e_2, _a;
            if (!menu.children || menu.children.length < 1) {
                return null;
            }
            var fildChild = menu.children.find(function (item) { return item.path === path; });
            if (fildChild) {
                return menu;
            }
            try {
                for (var _b = __values(menu.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var child = _c.value;
                    var find = this.getNearParent(path, child);
                    if (find) {
                        return find;
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return null;
        };
        BasicLayoutComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        BasicLayoutComponent.prototype.handScroll = function () {
            var _this = this;
            if (!this.autoHideHeader) {
                return;
            }
            var scrollTop = document.body.scrollTop + document.documentElement.scrollTop;
            if (!this.ticking) {
                requestAnimationFrame(function () {
                    if (_this.oldScrollTop > scrollTop) {
                        _this.visible = true;
                    }
                    else if (scrollTop > 300 && _this.visible) {
                        _this.visible = false;
                    }
                    else if (scrollTop < 300 && !_this.visible) {
                        _this.visible = true;
                    }
                    _this.oldScrollTop = scrollTop;
                    _this.ticking = false;
                });
            }
        };
        BasicLayoutComponent.prototype.getPaddingLeft = function () {
            // If it is a fix menu, calculate padding, don't need padding in phone mode
            var hasLeftPadding = this.fixSiderbar && this.layout !== 'topmenu' && !this.isMobile;
            if (hasLeftPadding) {
                return (this.collapsed ? '80' : this.siderWidth) + 'px';
            }
            return undefined;
        };
        BasicLayoutComponent.prototype.getHeadWidth = function () {
            if (this.isMobile || !this.fixedHeader || this.layout === 'topmenu') {
                return '100%';
            }
            return this.collapsed ? 'calc(100% - 80px)' : "calc(100% - " + this.siderWidth + "px)";
        };
        BasicLayoutComponent.prototype.onDrawerClose = function (event) {
            this.collapsed = !this.collapsed;
        };
        BasicLayoutComponent.prototype.getContentPaddingTop = function () {
            if (this.fixedHeader && this.reuseTab) {
                return "110px";
            }
            if (!this.fixedHeader) {
                return '0px';
            }
            else {
                return '';
            }
        };
        BasicLayoutComponent.prototype.isNonEmptyString = function (value) {
            return typeof value === 'string' && value !== '';
        };
        BasicLayoutComponent.prototype.isTemplateRef = function (value) {
            return value instanceof i0.TemplateRef;
        };
        return BasicLayoutComponent;
    }());
    BasicLayoutComponent.ɵfac = function BasicLayoutComponent_Factory(t) { return new (t || BasicLayoutComponent)(i0.ɵɵdirectiveInject(i1$6.BreakpointObserver), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1$2.ActivatedRoute), i0.ɵɵdirectiveInject(i1$2.Router)); };
    BasicLayoutComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BasicLayoutComponent, selectors: [["pro-basic-layout"]], hostBindings: function BasicLayoutComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("scroll", function BasicLayoutComponent_scroll_HostBindingHandler() { return ctx.handScroll(); }, false, i0.ɵɵresolveWindow);
            }
        }, inputs: { title: "title", logo: "logo", menuHeaderRender: "menuHeaderRender", mode: "mode", layout: "layout", contentWidth: "contentWidth", navTheme: "navTheme", fixedHeader: "fixedHeader", fixSiderbar: "fixSiderbar", autoHideHeader: "autoHideHeader", menu: "menu", siderWidth: "siderWidth", collapsed: "collapsed", headerRender: "headerRender", rightContentRender: "rightContentRender", collapsedButtonRender: "collapsedButtonRender", footerRender: "footerRender", links: "links", copyright: "copyright", reuseTab: "reuseTab", menuData: "menuData" }, outputs: { onMenuHeaderClick: "onMenuHeaderClick", onCollapse: "onCollapse" }, exportAs: ["proBasicLayout"], features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c8, decls: 10, vars: 10, consts: [[3, "ngClass"], [4, "ngIf"], [3, "ngStyle"], [3, "ngStyle", "ngClass", 4, "ngIf"], [1, "ant-pro-basicLayout-content"], ["style", "padding: 0", 4, "ngIf"], ["siderMenuTemplate", ""], ["class", "ant-pro-sider-menu", 3, "nzCollapsible", "nzTrigger", "nzCollapsed", "nzBreakpoint", "nzWidth", "nzTheme", "ngClass", "nzCollapsedChange", 4, "ngIf"], [3, "nzClosable", "nzVisible", "nzPlacement", "nzWrapClassName", "nzWidth", "ngStyle", "nzOnClose", 4, "ngIf"], [1, "ant-pro-sider-menu", 3, "nzCollapsible", "nzTrigger", "nzCollapsed", "nzBreakpoint", "nzWidth", "nzTheme", "ngClass", "nzCollapsedChange"], [4, "ngTemplateOutlet"], [3, "nzClosable", "nzVisible", "nzPlacement", "nzWrapClassName", "nzWidth", "ngStyle", "nzOnClose"], [2, "display", "block", 3, "nzCollapsible", "nzTrigger", "nzCollapsed", "nzWidth", "nzTheme", "ngClass"], [3, "ngStyle", "ngClass"], ["defaultDomTemplate", ""], [4, "ngIf", "ngIfElse"], ["globalHeader", ""], ["pro-top-nav-header", "", 3, "theme", "menuData", "logo", "title", "contentWidth", "rightContentRender", "menuHeaderRender", "onMenuHeaderClick"], ["pro-global-header", "", 3, "isMobile", "collapsed", "logo", "collapsedButtonRender", "rightContentRender", "collapsedChange"], [3, "allowRefresh", "debug"], [2, "padding", "0"], ["globalFooter", ""], ["pro-global-footer", "", 3, "links", "copyright"], ["id", "logo", 1, "ant-pro-sider-menu-logo", 3, "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["defaultHeaderTemplate", ""], [3, "menuData", "mode", "theme", "openKeys", "selectedKey", "collapsed", "openChange"], ["href", "/"], [3, "ngSwitch"], [3, "ngTemplateOutlet", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [3, "ngTemplateOutlet"], ["alt", "logo", 3, "src"]], template: function BasicLayoutComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "nz-layout");
                i0.ɵɵtemplate(2, BasicLayoutComponent_ng_container_2_Template, 3, 2, "ng-container", 1);
                i0.ɵɵelementStart(3, "nz-layout", 2);
                i0.ɵɵtemplate(4, BasicLayoutComponent_nz_header_4_Template, 5, 8, "nz-header", 3);
                i0.ɵɵelementStart(5, "nz-content", 4);
                i0.ɵɵprojection(6);
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(7, BasicLayoutComponent_nz_footer_7_Template, 4, 2, "nz-footer", 5);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(8, BasicLayoutComponent_ng_template_8_Template, 5, 14, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction0(7, _c6));
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", !(ctx.layout === "topmenu" && !ctx.isMobile));
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(8, _c7, ctx.getPaddingLeft()));
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.visible);
                i0.ɵɵadvance(1);
                i0.ɵɵstyleProp("padding-top", ctx.getContentPaddingTop());
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", ctx.footerRender !== false);
            }
        }, directives: [i1.NgClass, i4.NzLayoutComponent, i1.NgIf, i1.NgStyle, i4.NzContentComponent, i4.NzSiderComponent, i1.NgTemplateOutlet, i5$1.NzDrawerComponent, i4.NzHeaderComponent, TopNavHeaderComponent, GlobalHeaderComponent, ReuseTabComponent, i4.NzFooterComponent, GlobalFooterComponent, BaseMenuComponent, i1.NgSwitch, i1.NgSwitchCase], styles: [".ant-pro-basicLayout-content{margin:24px;padding-top:64px}.basicLayout .ant-layout{transition:all .2s}", ".ant-pro-fixed-header{position:fixed;top:0;right:0;z-index:9;width:100%;transition:width .2s}"], encapsulation: 2, changeDetection: 0 });
    __decorate([
        util.InputBoolean()
    ], BasicLayoutComponent.prototype, "fixedHeader", void 0);
    __decorate([
        util.InputBoolean()
    ], BasicLayoutComponent.prototype, "fixSiderbar", void 0);
    __decorate([
        util.InputBoolean()
    ], BasicLayoutComponent.prototype, "autoHideHeader", void 0);
    __decorate([
        util.InputNumber()
    ], BasicLayoutComponent.prototype, "siderWidth", void 0);
    __decorate([
        util.InputBoolean()
    ], BasicLayoutComponent.prototype, "collapsed", void 0);
    __decorate([
        util.InputBoolean()
    ], BasicLayoutComponent.prototype, "reuseTab", void 0);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BasicLayoutComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pro-basic-layout',
                        templateUrl: 'basic-layout.component.html',
                        styleUrls: ['basic-layout.component.less', 'header.component.less'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        exportAs: 'proBasicLayout',
                        preserveWhitespaces: false
                    }]
            }], function () { return [{ type: i1$6.BreakpointObserver }, { type: i0.ChangeDetectorRef }, { type: i1$2.ActivatedRoute }, { type: i1$2.Router }]; }, { title: [{
                    type: i0.Input
                }], logo: [{
                    type: i0.Input
                }], menuHeaderRender: [{
                    type: i0.Input
                }], onMenuHeaderClick: [{
                    type: i0.Output
                }], mode: [{
                    type: i0.Input
                }], layout: [{
                    type: i0.Input
                }], contentWidth: [{
                    type: i0.Input
                }], navTheme: [{
                    type: i0.Input
                }], fixedHeader: [{
                    type: i0.Input
                }], fixSiderbar: [{
                    type: i0.Input
                }], autoHideHeader: [{
                    type: i0.Input
                }], menu: [{
                    type: i0.Input
                }], siderWidth: [{
                    type: i0.Input
                }], collapsed: [{
                    type: i0.Input
                }], onCollapse: [{
                    type: i0.Output
                }], headerRender: [{
                    type: i0.Input
                }], rightContentRender: [{
                    type: i0.Input
                }], collapsedButtonRender: [{
                    type: i0.Input
                }], footerRender: [{
                    type: i0.Input
                }], links: [{
                    type: i0.Input
                }], copyright: [{
                    type: i0.Input
                }], reuseTab: [{
                    type: i0.Input
                }], menuData: [{
                    type: i0.Input
                }], handScroll: [{
                    type: i0.HostListener,
                    args: ['window:scroll']
                }] });
    })();

    var _c0$1 = ["contentTemplate"];
    function PageHeaderWrapperComponent_ng_container_3_1_ng_template_0_Template(rf, ctx) { }
    function PageHeaderWrapperComponent_ng_container_3_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, PageHeaderWrapperComponent_ng_container_3_1_ng_template_0_Template, 0, 0, "ng-template");
        }
    }
    function PageHeaderWrapperComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, PageHeaderWrapperComponent_ng_container_3_1_Template, 1, 0, undefined, 6);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", ctx_r0.pageHeaderRender);
        }
    }
    function PageHeaderWrapperComponent_ng_template_4_nz_breadcrumb_item_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r13_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "nz-breadcrumb-item");
            i0.ɵɵelementStart(1, "a", 11);
            i0.ɵɵlistener("click", function PageHeaderWrapperComponent_ng_template_4_nz_breadcrumb_item_2_Template_a_click_1_listener($event) { i0.ɵɵrestoreView(_r13_1); var breadcrumb_r11 = ctx.$implicit; var ctx_r12 = i0.ɵɵnextContext(2); return ctx_r12.navigate(breadcrumb_r11.path, $event); });
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var breadcrumb_r11 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵattribute("href", breadcrumb_r11.path, i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", breadcrumb_r11.name, " ");
        }
    }
    function PageHeaderWrapperComponent_ng_template_4_nz_page_header_tags_3_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function PageHeaderWrapperComponent_ng_template_4_nz_page_header_tags_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "nz-page-header-tags");
            i0.ɵɵtemplate(1, PageHeaderWrapperComponent_ng_template_4_nz_page_header_tags_3_ng_container_1_Template, 1, 0, "ng-container", 6);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r7 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", ctx_r7.tags);
        }
    }
    function PageHeaderWrapperComponent_ng_template_4_nz_page_header_extra_4_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0, 15);
        }
        if (rf & 2) {
            var ctx_r15 = i0.ɵɵnextContext(3);
            i0.ɵɵproperty("ngTemplateOutlet", ctx_r15.extra);
        }
    }
    function PageHeaderWrapperComponent_ng_template_4_nz_page_header_extra_4_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtext(1);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r16 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r16.extra);
        }
    }
    function PageHeaderWrapperComponent_ng_template_4_nz_page_header_extra_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "nz-page-header-extra");
            i0.ɵɵelementContainerStart(1, 12);
            i0.ɵɵtemplate(2, PageHeaderWrapperComponent_ng_template_4_nz_page_header_extra_4_ng_container_2_Template, 1, 1, "ng-container", 13);
            i0.ɵɵtemplate(3, PageHeaderWrapperComponent_ng_template_4_nz_page_header_extra_4_ng_container_3_Template, 2, 1, "ng-container", 14);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r8 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitch", true);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", ctx_r8.isTemplateRef(ctx_r8.extra));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", ctx_r8.isNonEmptyString(ctx_r8.extra));
        }
    }
    function PageHeaderWrapperComponent_ng_template_4_nz_page_header_content_5_div_4_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0, 15);
        }
        if (rf & 2) {
            var ctx_r19 = i0.ɵɵnextContext(4);
            i0.ɵɵproperty("ngTemplateOutlet", ctx_r19.content);
        }
    }
    function PageHeaderWrapperComponent_ng_template_4_nz_page_header_content_5_div_4_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtext(1);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r20 = i0.ɵɵnextContext(4);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r20.content);
        }
    }
    function PageHeaderWrapperComponent_ng_template_4_nz_page_header_content_5_div_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementContainerStart(1, 12);
            i0.ɵɵtemplate(2, PageHeaderWrapperComponent_ng_template_4_nz_page_header_content_5_div_4_ng_container_2_Template, 1, 1, "ng-container", 13);
            i0.ɵɵtemplate(3, PageHeaderWrapperComponent_ng_template_4_nz_page_header_content_5_div_4_ng_container_3_Template, 2, 1, "ng-container", 14);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r17 = i0.ɵɵnextContext(3);
            i0.ɵɵclassMapInterpolate1("", ctx_r17.prefixedClassName, "-content");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitch", true);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", ctx_r17.isTemplateRef(ctx_r17.content));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", ctx_r17.isNonEmptyString(ctx_r17.content));
        }
    }
    function PageHeaderWrapperComponent_ng_template_4_nz_page_header_content_5_div_5_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0, 15);
        }
        if (rf & 2) {
            var ctx_r21 = i0.ɵɵnextContext(4);
            i0.ɵɵproperty("ngTemplateOutlet", ctx_r21.extraContent);
        }
    }
    function PageHeaderWrapperComponent_ng_template_4_nz_page_header_content_5_div_5_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtext(1);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r22 = i0.ɵɵnextContext(4);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r22.extraContent);
        }
    }
    function PageHeaderWrapperComponent_ng_template_4_nz_page_header_content_5_div_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementContainerStart(1, 12);
            i0.ɵɵtemplate(2, PageHeaderWrapperComponent_ng_template_4_nz_page_header_content_5_div_5_ng_container_2_Template, 1, 1, "ng-container", 13);
            i0.ɵɵtemplate(3, PageHeaderWrapperComponent_ng_template_4_nz_page_header_content_5_div_5_ng_container_3_Template, 2, 1, "ng-container", 14);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r18 = i0.ɵɵnextContext(3);
            i0.ɵɵclassMapInterpolate1("", ctx_r18.prefixedClassName, "-extraContent");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitch", true);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", ctx_r18.isTemplateRef(ctx_r18.extraContent));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", ctx_r18.isNonEmptyString(ctx_r18.extraContent));
        }
    }
    function PageHeaderWrapperComponent_ng_template_4_nz_page_header_content_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "nz-page-header-content");
            i0.ɵɵelementStart(1, "div");
            i0.ɵɵelementStart(2, "div");
            i0.ɵɵelementStart(3, "div");
            i0.ɵɵtemplate(4, PageHeaderWrapperComponent_ng_template_4_nz_page_header_content_5_div_4_Template, 4, 6, "div", 16);
            i0.ɵɵtemplate(5, PageHeaderWrapperComponent_ng_template_4_nz_page_header_content_5_div_5_Template, 4, 6, "div", 16);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r9 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵclassMapInterpolate1("", ctx_r9.prefixedClassName, "-detail");
            i0.ɵɵadvance(1);
            i0.ɵɵclassMapInterpolate1("", ctx_r9.prefixedClassName, "-main");
            i0.ɵɵadvance(1);
            i0.ɵɵclassMapInterpolate1("", ctx_r9.prefixedClassName, "-row");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r9.content);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r9.extraContent);
        }
    }
    function PageHeaderWrapperComponent_ng_template_4_nz_page_header_footer_6_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelement(1, "nz-tab", 18);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var tab_r24 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzTitle", tab_r24.tab);
        }
    }
    function PageHeaderWrapperComponent_ng_template_4_nz_page_header_footer_6_Template(rf, ctx) {
        if (rf & 1) {
            var _r26_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "nz-page-header-footer");
            i0.ɵɵelementStart(1, "nz-tabset", 17);
            i0.ɵɵlistener("nzSelectChange", function PageHeaderWrapperComponent_ng_template_4_nz_page_header_footer_6_Template_nz_tabset_nzSelectChange_1_listener($event) { i0.ɵɵrestoreView(_r26_1); var ctx_r25 = i0.ɵɵnextContext(2); return ctx_r25.selectChange($event); });
            i0.ɵɵtemplate(2, PageHeaderWrapperComponent_ng_template_4_nz_page_header_footer_6_ng_container_2_Template, 2, 1, "ng-container", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r10 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵclassMapInterpolate1("", ctx_r10.prefixedClassName, "-tabs");
            i0.ɵɵproperty("nzSelectedIndex", ctx_r10.getSelectedIndex())("nzTabBarExtraContent", ctx_r10.tabBarExtraContent);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r10.tabList);
        }
    }
    function PageHeaderWrapperComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r28_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "nz-page-header", 7);
            i0.ɵɵlistener("nzBack", function PageHeaderWrapperComponent_ng_template_4_Template_nz_page_header_nzBack_0_listener($event) { i0.ɵɵrestoreView(_r28_1); var ctx_r27 = i0.ɵɵnextContext(); return ctx_r27.back.emit($event); });
            i0.ɵɵelementStart(1, "nz-breadcrumb", 8);
            i0.ɵɵtemplate(2, PageHeaderWrapperComponent_ng_template_4_nz_breadcrumb_item_2_Template, 3, 2, "nz-breadcrumb-item", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, PageHeaderWrapperComponent_ng_template_4_nz_page_header_tags_3_Template, 2, 1, "nz-page-header-tags", 10);
            i0.ɵɵtemplate(4, PageHeaderWrapperComponent_ng_template_4_nz_page_header_extra_4_Template, 4, 3, "nz-page-header-extra", 10);
            i0.ɵɵtemplate(5, PageHeaderWrapperComponent_ng_template_4_nz_page_header_content_5_Template, 6, 11, "nz-page-header-content", 10);
            i0.ɵɵtemplate(6, PageHeaderWrapperComponent_ng_template_4_nz_page_header_footer_6_Template, 3, 6, "nz-page-header-footer", 10);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵproperty("nzTitle", ctx_r2.title)("nzGhost", ctx_r2.ghost)("nzSubtitle", ctx_r2.subtitle)("nzBackIcon", ctx_r2.backIcon);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx_r2.breadcrumbs);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r2.tags);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r2.extra);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r2.content || ctx_r2.extraContent);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r2.tabList && ctx_r2.tabList.length);
        }
    }
    var _c1$1 = ["*"];
    var ROUTE_DATA_BREADCRUMB_NAME = 'name';
    var DefaultLocation = {
        name: '首页',
        params: {},
        path: '/'
    };
    var PageHeaderWrapperComponent = /** @class */ (function () {
        function PageHeaderWrapperComponent(renderer, ngZone, cdr, injector) {
            this.renderer = renderer;
            this.ngZone = ngZone;
            this.cdr = cdr;
            this.injector = injector;
            // nz-page-header原有属性
            this.ghost = true;
            this.backIcon = null;
            this.back = new i0.EventEmitter();
            this.location = DefaultLocation; // 首页
            this.onTabChange = new i0.EventEmitter();
            this.prefixedClassName = 'ant-pro-page-header-wrap';
            this.breadcrumbs = [];
            this.destroy$ = new rxjs.Subject();
        }
        PageHeaderWrapperComponent.prototype.ngOnInit = function () {
            if (true) {
                this.registerRouterChange();
            }
            if (!this.title) {
                this.title = this.breadcrumbs[this.breadcrumbs.length - 1].name;
            }
        };
        PageHeaderWrapperComponent.prototype.ngAfterViewInit = function () {
            this.checkContent();
        };
        PageHeaderWrapperComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        PageHeaderWrapperComponent.prototype.checkContent = function () {
            if (this.isEmpty(this.contentTemplate.nativeElement)) {
                this.renderer.setStyle(this.contentTemplate.nativeElement, 'display', 'none');
            }
            else {
                this.renderer.removeStyle(this.contentTemplate.nativeElement, 'display');
            }
        };
        PageHeaderWrapperComponent.prototype.navigate = function (path, e) {
            var _this = this;
            e.preventDefault();
            this.ngZone
                .run(function () { return _this.injector
                .get(i1$2.Router)
                .navigateByUrl(path)
                .then(); })
                .then();
        };
        PageHeaderWrapperComponent.prototype.registerRouterChange = function () {
            var _this = this;
            try {
                var router = this.injector.get(i1$2.Router);
                var activatedRoute_1 = this.injector.get(i1$2.ActivatedRoute);
                router.events
                    .pipe(operators.filter(function (e) { return e instanceof i1$2.NavigationEnd; }), operators.takeUntil(this.destroy$), operators.startWith(true) // Trigger initial render.
                )
                    .subscribe(function () {
                    _this.breadcrumbs = _this.getBreadcrumbs(activatedRoute_1.root, '', [_this.location]);
                    _this.cdr.markForCheck();
                });
            }
            catch (e) {
                throw new Error("You should import RouterModule.");
            }
        };
        PageHeaderWrapperComponent.prototype.getBreadcrumbs = function (route, path, breadcrumbs) {
            var e_1, _a;
            if (path === void 0) { path = ''; }
            if (breadcrumbs === void 0) { breadcrumbs = []; }
            var children = route.children;
            // If there's no sub root, then stop the recurse and returns the generated breadcrumbs.
            if (children.length === 0) {
                return breadcrumbs;
            }
            try {
                for (var children_1 = __values(children), children_1_1 = children_1.next(); !children_1_1.done; children_1_1 = children_1.next()) {
                    var child = children_1_1.value;
                    if (child.outlet === i1$2.PRIMARY_OUTLET) {
                        // Only parse components in primary router-outlet (in another word, router-outlet without a specific name).
                        // Parse this layer and generate a breadcrumb item.
                        var routeURL = child.snapshot.url.map(function (segment) { return segment.path; }).join('/');
                        var nextUrl = path + ("/" + routeURL);
                        var breadcrumbName = child.snapshot.data[ROUTE_DATA_BREADCRUMB_NAME];
                        // If have data, go to generate a breadcrumb for it.
                        if (routeURL && breadcrumbName) {
                            var breadcrumb = {
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
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (children_1_1 && !children_1_1.done && (_a = children_1.return)) _a.call(children_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        PageHeaderWrapperComponent.prototype.selectChange = function (event) {
            var selectedTab = this.tabList[event.index];
            this.onTabChange.emit(selectedTab);
        };
        PageHeaderWrapperComponent.prototype.getSelectedIndex = function () {
            var _this = this;
            var idx = this.tabList.findIndex(function (w) { return w.key === _this.tabActiveKey; });
            if (idx !== -1) {
                return idx;
            }
            else {
                return 0;
            }
        };
        PageHeaderWrapperComponent.prototype.isEmpty = function (element) {
            var nodes = element.childNodes;
            for (var i = 0; i < nodes.length; i++) {
                if (this.filterNotEmptyNode(nodes.item(i))) {
                    return false;
                }
            }
            return true;
        };
        PageHeaderWrapperComponent.prototype.filterNotEmptyNode = function (node) {
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
        };
        PageHeaderWrapperComponent.prototype.isNonEmptyString = function (value) {
            return typeof value === 'string' && value !== '';
        };
        PageHeaderWrapperComponent.prototype.isTemplateRef = function (value) {
            return value instanceof i0.TemplateRef;
        };
        return PageHeaderWrapperComponent;
    }());
    PageHeaderWrapperComponent.ɵfac = function PageHeaderWrapperComponent_Factory(t) { return new (t || PageHeaderWrapperComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.Injector)); };
    PageHeaderWrapperComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PageHeaderWrapperComponent, selectors: [["pro-page-header-wrapper"]], viewQuery: function PageHeaderWrapperComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0$1, 3);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.contentTemplate = _t.first);
            }
        }, inputs: { ghost: "ghost", title: "title", subtitle: "subtitle", backIcon: "backIcon", extra: "extra", tags: "tags", content: "content", extraContent: "extraContent", pageHeaderRender: "pageHeaderRender", location: "location", tabList: "tabList", tabActiveKey: "tabActiveKey", tabBarExtraContent: "tabBarExtraContent", contentWidth: "contentWidth" }, outputs: { back: "back", onTabChange: "onTabChange" }, exportAs: ["proPageHeaderWrapper"], ngContentSelectors: _c1$1, decls: 10, vars: 10, consts: [[2, "margin", "-24px -24px 0"], [3, "contentWidth"], [4, "ngIf", "ngIfElse"], ["defaultPageHeader", ""], [3, "cdkObserveContent"], ["contentTemplate", ""], [4, "ngTemplateOutlet"], [3, "nzTitle", "nzGhost", "nzSubtitle", "nzBackIcon", "nzBack"], ["nz-page-header-breadcrumb", ""], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "click"], [3, "ngSwitch"], [3, "ngTemplateOutlet", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [3, "ngTemplateOutlet"], [3, "class", 4, "ngIf"], [3, "nzSelectedIndex", "nzTabBarExtraContent", "nzSelectChange"], [3, "nzTitle"]], template: function PageHeaderWrapperComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "div");
                i0.ɵɵelementStart(2, "pro-grid-content", 1);
                i0.ɵɵtemplate(3, PageHeaderWrapperComponent_ng_container_3_Template, 2, 1, "ng-container", 2);
                i0.ɵɵtemplate(4, PageHeaderWrapperComponent_ng_template_4_Template, 7, 9, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "pro-grid-content", 1);
                i0.ɵɵelementStart(7, "div", 4, 5);
                i0.ɵɵlistener("cdkObserveContent", function PageHeaderWrapperComponent_Template_div_cdkObserveContent_7_listener() { return ctx.checkContent(); });
                i0.ɵɵprojection(9);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r1 = i0.ɵɵreference(5);
                i0.ɵɵadvance(1);
                i0.ɵɵclassMapInterpolate1("", ctx.prefixedClassName, "-page-header-warp");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("contentWidth", ctx.contentWidth);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.pageHeaderRender)("ngIfElse", _r1);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("contentWidth", ctx.contentWidth);
                i0.ɵɵadvance(1);
                i0.ɵɵclassMapInterpolate1("", ctx.prefixedClassName, "-children-content");
            }
        }, directives: [GridContentComponent, i1.NgIf, i1.NgTemplateOutlet, i3$2.NzPageHeaderComponent, i4$1.NzBreadCrumbComponent, i3$2.NzPageHeaderBreadcrumbDirective, i1.NgForOf, i4$1.NzBreadCrumbItemComponent, i3$2.NzPageHeaderTagDirective, i3$2.NzPageHeaderExtraDirective, i1.NgSwitch, i1.NgSwitchCase, i3$2.NzPageHeaderContentDirective, i3$2.NzPageHeaderFooterDirective, i5$2.NzTabSetComponent, i5$2.NzTabComponent], styles: [".ant-pro-page-header-wrap-children-content{margin:24px 24px 0}.ant-pro-page-header-wrap-page-header-warp{background-color:#fff}.ant-pro-page-header-wrap-main .ant-pro-page-header-wrap-detail{display:flex}.ant-pro-page-header-wrap-main .ant-pro-page-header-wrap-row{display:flex;width:100%}.ant-pro-page-header-wrap-main .ant-pro-page-header-wrap-title-content{margin-bottom:16px}.ant-pro-page-header-wrap-main .ant-pro-page-header-wrap-content,.ant-pro-page-header-wrap-main .ant-pro-page-header-wrap-title{flex:auto}.ant-pro-page-header-wrap-main .ant-pro-page-header-wrap-extraContent,.ant-pro-page-header-wrap-main .ant-pro-page-header-wrap-main{flex:0 1 auto}.ant-pro-page-header-wrap-main .ant-pro-page-header-wrap-main{width:100%}.ant-pro-page-header-wrap-main .ant-pro-page-header-wrap-logo,.ant-pro-page-header-wrap-main .ant-pro-page-header-wrap-title{margin-bottom:16px}.ant-pro-page-header-wrap-main .ant-pro-page-header-wrap-extraContent{min-width:242px;margin-left:88px;text-align:right}@media screen and (max-width:1200px){.ant-pro-page-header-wrap-main .ant-pro-page-header-wrap-extraContent{margin-left:44px}}@media screen and (max-width:992px){.ant-pro-page-header-wrap-main .ant-pro-page-header-wrap-extraContent{margin-left:20px}}@media screen and (max-width:768px){.ant-pro-page-header-wrap-main .ant-pro-page-header-wrap-row{display:block}.ant-pro-page-header-wrap-main .ant-pro-page-header-wrap-action,.ant-pro-page-header-wrap-main .ant-pro-page-header-wrap-extraContent{margin-left:0;text-align:left}}@media screen and (max-width:576px){.ant-pro-page-header-wrap-detail{display:block}.ant-pro-page-header-wrap-extraContent{margin-left:0}}"], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PageHeaderWrapperComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pro-page-header-wrapper',
                        templateUrl: 'page-header-wrapper.component.html',
                        styleUrls: ['page-header-wrapper.component.less'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        exportAs: 'proPageHeaderWrapper',
                        preserveWhitespaces: false
                    }]
            }], function () { return [{ type: i0.Renderer2 }, { type: i0.NgZone }, { type: i0.ChangeDetectorRef }, { type: i0.Injector }]; }, { ghost: [{
                    type: i0.Input
                }], title: [{
                    type: i0.Input
                }], subtitle: [{
                    type: i0.Input
                }], backIcon: [{
                    type: i0.Input
                }], back: [{
                    type: i0.Output
                }], extra: [{
                    type: i0.Input
                }], tags: [{
                    type: i0.Input
                }], content: [{
                    type: i0.Input
                }], extraContent: [{
                    type: i0.Input
                }], pageHeaderRender: [{
                    type: i0.Input
                }], location: [{
                    type: i0.Input
                }], tabList: [{
                    type: i0.Input
                }], tabActiveKey: [{
                    type: i0.Input
                }], tabBarExtraContent: [{
                    type: i0.Input
                }], onTabChange: [{
                    type: i0.Output
                }], contentWidth: [{
                    type: i0.Input
                }], contentTemplate: [{
                    type: i0.ViewChild,
                    args: ['contentTemplate', { static: true }]
                }] });
    })();

    function BlockCheckboxComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r3_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "span", 1);
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵlistener("click", function BlockCheckboxComponent_ng_container_0_Template_div_click_2_listener() { i0.ɵɵrestoreView(_r3_1); var item_r1 = ctx.$implicit; var ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.select(item_r1.key); });
            i0.ɵɵelement(3, "img", 3);
            i0.ɵɵelementStart(4, "div");
            i0.ɵɵelement(5, "i", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var item_r1 = ctx.$implicit;
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzTooltipTitle", item_r1.title);
            i0.ɵɵadvance(1);
            i0.ɵɵclassMapInterpolate1("", ctx_r0.baseClassName, "-item");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("src", item_r1.url, i0.ɵɵsanitizeUrl);
            i0.ɵɵattribute("alt", item_r1.key);
            i0.ɵɵadvance(1);
            i0.ɵɵclassMapInterpolate1("", ctx_r0.baseClassName, "-selectIcon");
            i0.ɵɵstyleProp("display", ctx_r0.value === item_r1.key ? "block" : "none");
        }
    }
    var BlockCheckboxComponent = /** @class */ (function () {
        function BlockCheckboxComponent() {
            this.list = [];
            this.onChange = new i0.EventEmitter();
            this.baseClassName = 'ant-pro-setting-drawer-block-checbox';
        }
        BlockCheckboxComponent.prototype.ngOnInit = function () {
        };
        BlockCheckboxComponent.prototype.select = function (key) {
            this.value = key;
            this.onChange.emit(this.value);
        };
        return BlockCheckboxComponent;
    }());
    BlockCheckboxComponent.ɵfac = function BlockCheckboxComponent_Factory(t) { return new (t || BlockCheckboxComponent)(); };
    BlockCheckboxComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BlockCheckboxComponent, selectors: [["pro-block-checkbox"]], hostVars: 2, hostBindings: function BlockCheckboxComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵclassMap(ctx.baseClassName);
            }
        }, inputs: { value: "value", list: "list" }, outputs: { onChange: "onChange" }, exportAs: ["proBlockCheckbox"], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], ["nz-tooltip", "", 3, "nzTooltipTitle"], [3, "click"], [3, "src"], ["nz-icon", "", "nzType", "check"]], template: function BlockCheckboxComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, BlockCheckboxComponent_ng_container_0_Template, 6, 11, "ng-container", 0);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngForOf", ctx.list);
            }
        }, directives: [i1.NgForOf, i2$1.NzTooltipDirective, i3.ɵNzTransitionPatchDirective, i2.NzIconDirective], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BlockCheckboxComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pro-block-checkbox',
                        templateUrl: 'block-checkbox.component.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        exportAs: 'proBlockCheckbox',
                        preserveWhitespaces: false,
                        host: {
                            '[class]': "baseClassName",
                        }
                    }]
            }], function () { return []; }, { value: [{
                    type: i0.Input
                }], list: [{
                    type: i0.Input
                }], onChange: [{
                    type: i0.Output
                }] });
    })();

    function ThemeColorComponent_ng_container_4_i_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "i", 6);
        }
    }
    function ThemeColorComponent_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r4_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "div", 4);
            i0.ɵɵlistener("click", function ThemeColorComponent_ng_container_4_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r4_1); var color_r1 = ctx.$implicit; var ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.select(color_r1.color); });
            i0.ɵɵtemplate(2, ThemeColorComponent_ng_container_4_i_2_Template, 1, 0, "i", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var color_r1 = ctx.$implicit;
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵstyleProp("background-color", color_r1.color);
            i0.ɵɵproperty("nzTooltipTitle", color_r1.name);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", color_r1.color == ctx_r0.value);
        }
    }
    var ThemeColorComponent = /** @class */ (function () {
        function ThemeColorComponent() {
            this.onChange = new i0.EventEmitter();
        }
        ThemeColorComponent.prototype.ngOnInit = function () {
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
        };
        ThemeColorComponent.prototype.select = function (key) {
            this.value = key;
            this.onChange.emit(this.value);
        };
        return ThemeColorComponent;
    }());
    ThemeColorComponent.ɵfac = function ThemeColorComponent_Factory(t) { return new (t || ThemeColorComponent)(); };
    ThemeColorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ThemeColorComponent, selectors: [["pro-theme-color"]], inputs: { colors: "colors", title: "title", value: "value" }, outputs: { onChange: "onChange" }, exportAs: ["proThemeColor"], decls: 5, vars: 2, consts: [[1, "theme-color"], [1, "theme-color-title"], [1, "theme-color-content"], [4, "ngFor", "ngForOf"], ["nz-tooltip", "", 1, "theme-color-block", 3, "nzTooltipTitle", "click"], ["nz-icon", "", "nzType", "check", 4, "ngIf"], ["nz-icon", "", "nzType", "check"]], template: function ThemeColorComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "h3", 1);
                i0.ɵɵtext(2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "div", 2);
                i0.ɵɵtemplate(4, ThemeColorComponent_ng_container_4_Template, 3, 4, "ng-container", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵtextInterpolate(ctx.title);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngForOf", ctx.colorList);
            }
        }, directives: [i1.NgForOf, i2$1.NzTooltipDirective, i1.NgIf, i3.ɵNzTransitionPatchDirective, i2.NzIconDirective], styles: [".ant-pro-setting-drawer-content{position:relative;min-height:100%;background:#fff}.ant-pro-setting-drawer-content .ant-list-item span{flex:1}.ant-pro-setting-drawer-block-checbox{display:flex;background:#fff}.ant-pro-setting-drawer-block-checbox-item{position:relative;margin-right:16px;border-radius:2px;cursor:pointer}.ant-pro-setting-drawer-block-checbox-item img{width:48px}.ant-pro-setting-drawer-block-checbox-selectIcon{position:absolute;top:0;right:0;width:100%;height:100%;padding-top:15px;padding-left:24px;color:#1890ff;font-weight:700;font-size:14px}.ant-pro-setting-drawer-color_block{display:inline-block;width:38px;height:22px;margin:4px 12px 4px 4px;vertical-align:middle;border-radius:4px;cursor:pointer}.ant-pro-setting-drawer-title{margin-bottom:12px;color:rgba(0,0,0,.85);font-size:14px;line-height:22px}.ant-pro-setting-drawer-handle{position:absolute;top:240px;right:300px;z-index:0;display:flex;align-items:center;justify-content:center;width:48px;height:48px;font-size:16px;text-align:center;background:#1890ff;border-radius:4px 0 0 4px;cursor:pointer;pointer-events:auto}.ant-pro-setting-drawer-production-hint{margin-top:16px;font-size:12px}.ant-pro-setting-drawer-content .theme-color{margin-top:24px;overflow:hidden}.ant-pro-setting-drawer-content .theme-color .theme-color-title{margin-bottom:12px;font-size:14px;line-height:22px}.ant-pro-setting-drawer-content .theme-color .theme-color-block{float:left;width:20px;height:20px;margin-right:8px;color:#fff;font-weight:700;text-align:center;border-radius:2px;cursor:pointer}"], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ThemeColorComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pro-theme-color',
                        templateUrl: 'theme-color.component.html',
                        styleUrls: ['theme-color.component.less'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        exportAs: 'proThemeColor',
                        preserveWhitespaces: false,
                    }]
            }], function () { return []; }, { colors: [{
                    type: i0.Input
                }], title: [{
                    type: i0.Input
                }], value: [{
                    type: i0.Input
                }], onChange: [{
                    type: i0.Output
                }] });
    })();

    var _c0 = ["renderItemTemplate"];
    var _c1 = ["contentWidthActionTemplate"];
    var _c2 = ["fixedHeaderActionTemplate"];
    var _c3 = ["hideHeaderActionTemplate"];
    var _c4 = ["fixedSidebarActionTemplate"];
    var _c5 = ["colorWeakActionTemplate"];
    function SettingDrawerComponent_ng_template_13_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 16);
            i0.ɵɵelementStart(1, "nz-list-item", 17);
            i0.ɵɵelementStart(2, "span");
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r14 = ctx.$implicit;
            i0.ɵɵproperty("nzTooltipTitle", item_r14.disabled ? item_r14.disabledReason : "")("nzTooltipPlacement", "left");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzActions", item_r14.action);
            i0.ɵɵadvance(1);
            i0.ɵɵstyleProp("opacity", item_r14.disabled ? 0.5 : 1);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(item_r14.title);
        }
    }
    function SettingDrawerComponent_ng_template_20_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 16);
            i0.ɵɵelementStart(1, "nz-list-item", 17);
            i0.ɵɵelementStart(2, "span");
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r15 = ctx.$implicit;
            i0.ɵɵproperty("nzTooltipTitle", item_r15.disabled ? item_r15.disabledReason : "")("nzTooltipPlacement", "left");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzActions", item_r15.action);
            i0.ɵɵadvance(1);
            i0.ɵɵstyleProp("opacity", item_r15.disabled ? 0.5 : 1);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(item_r15.title);
        }
    }
    function SettingDrawerComponent_ng_template_25_nz_option_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "nz-option", 21);
        }
        if (rf & 2) {
            i0.ɵɵproperty("nzLabel", "\u5B9A\u5BBD");
        }
    }
    function SettingDrawerComponent_ng_template_25_Template(rf, ctx) {
        if (rf & 1) {
            var _r18_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "nz-select", 18);
            i0.ɵɵlistener("ngModelChange", function SettingDrawerComponent_ng_template_25_Template_nz_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r18_1); var ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.changeSetting("contentWidth", $event); });
            i0.ɵɵtemplate(1, SettingDrawerComponent_ng_template_25_nz_option_1_Template, 1, 1, "nz-option", 19);
            i0.ɵɵelement(2, "nz-option", 20);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r5 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngModel", ctx_r5.settings.contentWidth);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r5.settings.layout !== "sidemenu");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzLabel", "\u6D41\u5F0F");
        }
    }
    function SettingDrawerComponent_ng_template_27_Template(rf, ctx) {
        if (rf & 1) {
            var _r20_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "nz-switch", 22);
            i0.ɵɵlistener("ngModelChange", function SettingDrawerComponent_ng_template_27_Template_nz_switch_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r20_1); var ctx_r19 = i0.ɵɵnextContext(); return !!(ctx_r19.settings.fixedHeader = $event); })("ngModelChange", function SettingDrawerComponent_ng_template_27_Template_nz_switch_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r20_1); var ctx_r21 = i0.ɵɵnextContext(); return ctx_r21.changeSetting("fixedHeader", $event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r7 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngModel", !!ctx_r7.settings.fixedHeader);
        }
    }
    function SettingDrawerComponent_ng_template_29_Template(rf, ctx) {
        if (rf & 1) {
            var _r23_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "nz-switch", 23);
            i0.ɵɵlistener("ngModelChange", function SettingDrawerComponent_ng_template_29_Template_nz_switch_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r23_1); var ctx_r22 = i0.ɵɵnextContext(); return !!(ctx_r22.settings.autoHideHeader = $event); })("ngModelChange", function SettingDrawerComponent_ng_template_29_Template_nz_switch_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r23_1); var ctx_r24 = i0.ɵɵnextContext(); return ctx_r24.changeSetting("autoHideHeader", $event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r9 = i0.ɵɵnextContext();
            i0.ɵɵproperty("nzDisabled", !ctx_r9.settings.fixedHeader)("ngModel", !!ctx_r9.settings.autoHideHeader);
        }
    }
    function SettingDrawerComponent_ng_template_31_Template(rf, ctx) {
        if (rf & 1) {
            var _r26_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "nz-switch", 23);
            i0.ɵɵlistener("ngModelChange", function SettingDrawerComponent_ng_template_31_Template_nz_switch_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r26_1); var ctx_r25 = i0.ɵɵnextContext(); return !!(ctx_r25.settings.fixSiderbar = $event); })("ngModelChange", function SettingDrawerComponent_ng_template_31_Template_nz_switch_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r26_1); var ctx_r27 = i0.ɵɵnextContext(); return ctx_r27.changeSetting("fixSiderbar", $event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r11 = i0.ɵɵnextContext();
            i0.ɵɵproperty("nzDisabled", ctx_r11.settings.layout === "topmenu")("ngModel", !!ctx_r11.settings.fixSiderbar);
        }
    }
    function SettingDrawerComponent_ng_template_33_Template(rf, ctx) {
        if (rf & 1) {
            var _r29_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "nz-switch", 22);
            i0.ɵɵlistener("ngModelChange", function SettingDrawerComponent_ng_template_33_Template_nz_switch_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r29_1); var ctx_r28 = i0.ɵɵnextContext(); return !!(ctx_r28.settings.colorWeak = $event); })("ngModelChange", function SettingDrawerComponent_ng_template_33_Template_nz_switch_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r29_1); var ctx_r30 = i0.ɵɵnextContext(); return ctx_r30.changeSetting("colorWeak", $event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r13 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngModel", !!ctx_r13.settings.colorWeak);
        }
    }
    var SettingDrawerComponent = /** @class */ (function () {
        function SettingDrawerComponent(zone, cdr, settingsService, messageService) {
            this.zone = zone;
            this.cdr = cdr;
            this.settingsService = settingsService;
            this.messageService = messageService;
            this.onSettingChange = new i0.EventEmitter();
            this.onCollapseChange = new i0.EventEmitter();
            this.collapse = false;
        }
        SettingDrawerComponent.prototype.ngOnInit = function () {
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
        };
        SettingDrawerComponent.prototype.changeSetting = function (key, value) {
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
        };
        SettingDrawerComponent.prototype.togglerContent = function () {
            this.collapse = !this.collapse;
            this.onCollapseChange.emit(this.collapse);
        };
        return SettingDrawerComponent;
    }());
    SettingDrawerComponent.ɵfac = function SettingDrawerComponent_Factory(t) { return new (t || SettingDrawerComponent)(i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(SettingsService), i0.ɵɵdirectiveInject(i2$2.NzMessageService)); };
    SettingDrawerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SettingDrawerComponent, selectors: [["pro-setting-drawer"]], viewQuery: function SettingDrawerComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0, 3);
                i0.ɵɵviewQuery(_c1, 3);
                i0.ɵɵviewQuery(_c2, 3);
                i0.ɵɵviewQuery(_c3, 3);
                i0.ɵɵviewQuery(_c4, 3);
                i0.ɵɵviewQuery(_c5, 3);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.renderItemTemplate = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.contentWidthActionTemplate = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.fixedHeaderActionTemplate = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.hideHeaderActionTemplate = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.fixedSidebarActionTemplate = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.colorWeakActionTemplate = _t.first);
            }
        }, inputs: { settings: "settings" }, outputs: { onSettingChange: "onSettingChange", onCollapseChange: "onCollapseChange" }, exportAs: ["proSettingDrawer"], decls: 35, vars: 16, consts: [[2, "z-index", "999", 3, "nzVisible", "nzWidth", "nzPlacement", "nzOnClose"], [1, "ant-pro-setting-drawer-content"], [2, "margin-bottom", "24px"], [1, "ant-pro-setting-drawer-title"], [3, "list", "value", "onChange"], [3, "title", "value", "onChange"], [3, "nzSplit", "nzDataSource", "nzRenderItem"], ["renderItemTemplate1", ""], ["renderItemTemplate2", ""], [1, "ant-pro-setting-drawer-handle", 3, "click"], ["nz-icon", "", 2, "color", "#fff", "font-size", "20px", 3, "nzType"], ["contentWidthActionTemplate", ""], ["fixedHeaderActionTemplate", ""], ["hideHeaderActionTemplate", ""], ["fixedSidebarActionTemplate", ""], ["colorWeakActionTemplate", ""], ["nz-tooltip", "", 3, "nzTooltipTitle", "nzTooltipPlacement"], [3, "nzActions"], ["nzSize", "small", 2, "width", "80px", 3, "ngModel", "ngModelChange"], ["nzValue", "Fixed", 3, "nzLabel", 4, "ngIf"], ["nzValue", "Fluid", 3, "nzLabel"], ["nzValue", "Fixed", 3, "nzLabel"], ["nzSize", "small", 3, "ngModel", "ngModelChange"], ["nzSize", "small", 3, "nzDisabled", "ngModel", "ngModelChange"]], template: function SettingDrawerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "nz-drawer", 0);
                i0.ɵɵlistener("nzOnClose", function SettingDrawerComponent_Template_nz_drawer_nzOnClose_0_listener() { return ctx.togglerContent(); });
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵelementStart(2, "div", 2);
                i0.ɵɵelementStart(3, "h3", 3);
                i0.ɵɵtext(4, " \u6574\u4F53\u98CE\u683C\u8BBE\u7F6E ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "pro-block-checkbox", 4);
                i0.ɵɵlistener("onChange", function SettingDrawerComponent_Template_pro_block_checkbox_onChange_5_listener($event) { return ctx.changeSetting("navTheme", $event); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "pro-theme-color", 5);
                i0.ɵɵlistener("onChange", function SettingDrawerComponent_Template_pro_theme_color_onChange_6_listener($event) { return ctx.changeSetting("primaryColor", $event); });
                i0.ɵɵelementEnd();
                i0.ɵɵelement(7, "nz-divider");
                i0.ɵɵelementStart(8, "div", 2);
                i0.ɵɵelementStart(9, "h3", 3);
                i0.ɵɵtext(10, " \u5BFC\u822A\u6A21\u5F0F ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(11, "pro-block-checkbox", 4);
                i0.ɵɵlistener("onChange", function SettingDrawerComponent_Template_pro_block_checkbox_onChange_11_listener($event) { return ctx.changeSetting("layout", $event); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(12, "nz-list", 6);
                i0.ɵɵtemplate(13, SettingDrawerComponent_ng_template_13_Template, 4, 6, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelement(15, "nz-divider");
                i0.ɵɵelementStart(16, "div", 2);
                i0.ɵɵelementStart(17, "h3", 3);
                i0.ɵɵtext(18, " \u5176\u4ED6\u8BBE\u7F6E ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(19, "nz-list", 6);
                i0.ɵɵtemplate(20, SettingDrawerComponent_ng_template_20_Template, 4, 6, "ng-template", null, 8, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelement(22, "nz-divider");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(23, "div", 9);
                i0.ɵɵlistener("click", function SettingDrawerComponent_Template_div_click_23_listener() { return ctx.togglerContent(); });
                i0.ɵɵelement(24, "i", 10);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(25, SettingDrawerComponent_ng_template_25_Template, 3, 3, "ng-template", null, 11, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(27, SettingDrawerComponent_ng_template_27_Template, 1, 1, "ng-template", null, 12, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(29, SettingDrawerComponent_ng_template_29_Template, 1, 2, "ng-template", null, 13, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(31, SettingDrawerComponent_ng_template_31_Template, 1, 2, "ng-template", null, 14, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(33, SettingDrawerComponent_ng_template_33_Template, 1, 1, "ng-template", null, 15, i0.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(14);
                var _r2 = i0.ɵɵreference(21);
                i0.ɵɵproperty("nzVisible", ctx.collapse)("nzWidth", 300)("nzPlacement", "right");
                i0.ɵɵadvance(5);
                i0.ɵɵproperty("list", ctx.pageStyleList)("value", ctx.settings.navTheme);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("title", "\u4E3B\u9898\u8272(\u6682\u65F6\u4E0D\u652F\u6301)")("value", ctx.settings.primaryColor);
                i0.ɵɵadvance(5);
                i0.ɵɵproperty("list", ctx.navigationModeList)("value", ctx.settings.layout);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("nzSplit", false)("nzDataSource", ctx.layoutSetting)("nzRenderItem", _r0);
                i0.ɵɵadvance(7);
                i0.ɵɵproperty("nzSplit", false)("nzDataSource", ctx.otherSettings)("nzRenderItem", _r2);
                i0.ɵɵadvance(5);
                i0.ɵɵproperty("nzType", ctx.collapse ? "close" : "setting");
            }
        }, directives: [i5$1.NzDrawerComponent, BlockCheckboxComponent, ThemeColorComponent, i6$1.NzDividerComponent, i7.NzListComponent, i3.ɵNzTransitionPatchDirective, i2.NzIconDirective, i2$1.NzTooltipDirective, i7.NzListItemComponent, i11.NzSelectComponent, i12.NgControlStatus, i12.NgModel, i1.NgIf, i11.NzOptionComponent, i14.NzSwitchComponent], styles: [".ant-pro-setting-drawer-content{position:relative;min-height:100%;background:#fff}.ant-pro-setting-drawer-content .ant-list-item span{flex:1}.ant-pro-setting-drawer-block-checbox{display:flex;background:#fff}.ant-pro-setting-drawer-block-checbox-item{position:relative;margin-right:16px;border-radius:2px;cursor:pointer}.ant-pro-setting-drawer-block-checbox-item img{width:48px}.ant-pro-setting-drawer-block-checbox-selectIcon{position:absolute;top:0;right:0;width:100%;height:100%;padding-top:15px;padding-left:24px;color:#1890ff;font-weight:700;font-size:14px}.ant-pro-setting-drawer-color_block{display:inline-block;width:38px;height:22px;margin:4px 12px 4px 4px;vertical-align:middle;border-radius:4px;cursor:pointer}.ant-pro-setting-drawer-title{margin-bottom:12px;color:rgba(0,0,0,.85);font-size:14px;line-height:22px}.ant-pro-setting-drawer-handle{position:absolute;top:240px;right:300px;z-index:0;display:flex;align-items:center;justify-content:center;width:48px;height:48px;font-size:16px;text-align:center;background:#1890ff;border-radius:4px 0 0 4px;cursor:pointer;pointer-events:auto}.ant-pro-setting-drawer-production-hint{margin-top:16px;font-size:12px}"], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SettingDrawerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pro-setting-drawer',
                        templateUrl: 'setting-drawer.component.html',
                        styleUrls: ['setting-drawer.component.less'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        exportAs: 'proSettingDrawer',
                        preserveWhitespaces: false
                    }]
            }], function () { return [{ type: i0.NgZone }, { type: i0.ChangeDetectorRef }, { type: SettingsService }, { type: i2$2.NzMessageService }]; }, { settings: [{
                    type: i0.Input
                }], onSettingChange: [{
                    type: i0.Output
                }], onCollapseChange: [{
                    type: i0.Output
                }], renderItemTemplate: [{
                    type: i0.ViewChild,
                    args: ['renderItemTemplate', { static: true }]
                }], contentWidthActionTemplate: [{
                    type: i0.ViewChild,
                    args: ['contentWidthActionTemplate', { static: true }]
                }], fixedHeaderActionTemplate: [{
                    type: i0.ViewChild,
                    args: ['fixedHeaderActionTemplate', { static: true }]
                }], hideHeaderActionTemplate: [{
                    type: i0.ViewChild,
                    args: ['hideHeaderActionTemplate', { static: true }]
                }], fixedSidebarActionTemplate: [{
                    type: i0.ViewChild,
                    args: ['fixedSidebarActionTemplate', { static: true }]
                }], colorWeakActionTemplate: [{
                    type: i0.ViewChild,
                    args: ['colorWeakActionTemplate', { static: true }]
                }] });
    })();

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var DIRECTIVES = [
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
    var ProTabsModule = /** @class */ (function () {
        function ProTabsModule() {
        }
        return ProTabsModule;
    }());
    ProTabsModule.ɵmod = i0.ɵɵdefineNgModule({ type: ProTabsModule });
    ProTabsModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ProTabsModule_Factory(t) { return new (t || ProTabsModule)(); }, imports: [[
                i1.CommonModule,
                observers.ObserversModule,
                i2.NzIconModule,
                i1$4.PlatformModule,
                i5.A11yModule,
                scrolling.ScrollingModule,
                i1$5.NzDropDownModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ProTabsModule, { declarations: [ProTabSetComponent,
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
                ProTabLinkTemplateDirective], imports: [i1.CommonModule,
                observers.ObserversModule,
                i2.NzIconModule,
                i1$4.PlatformModule,
                i5.A11yModule,
                scrolling.ScrollingModule,
                i1$5.NzDropDownModule], exports: [ProTabSetComponent,
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
                ProTabLinkTemplateDirective] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProTabsModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [DIRECTIVES],
                        exports: [DIRECTIVES],
                        imports: [
                            i1.CommonModule,
                            observers.ObserversModule,
                            i2.NzIconModule,
                            i1$4.PlatformModule,
                            i5.A11yModule,
                            scrolling.ScrollingModule,
                            i1$5.NzDropDownModule
                        ]
                    }]
            }], null, null);
    })();

    var ReuseTabModule = /** @class */ (function () {
        function ReuseTabModule() {
        }
        return ReuseTabModule;
    }());
    ReuseTabModule.ɵmod = i0.ɵɵdefineNgModule({ type: ReuseTabModule });
    ReuseTabModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ReuseTabModule_Factory(t) { return new (t || ReuseTabModule)(); }, providers: [], imports: [[
                i1.CommonModule,
                i1$2.RouterModule,
                ProTabsModule,
                i1$1.NzMenuModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ReuseTabModule, { declarations: [ReuseTabMenuComponent, ReuseTabComponent], imports: [i1.CommonModule,
                i1$2.RouterModule,
                ProTabsModule,
                i1$1.NzMenuModule], exports: [ReuseTabComponent] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ReuseTabModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.CommonModule,
                            i1$2.RouterModule,
                            ProTabsModule,
                            i1$1.NzMenuModule
                        ],
                        exports: [
                            ReuseTabComponent
                        ],
                        declarations: [ReuseTabMenuComponent, ReuseTabComponent],
                        entryComponents: [ReuseTabMenuComponent],
                        providers: []
                    }]
            }], null, null);
    })();

    var Layouts = [
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
    var ProLayoutModule = /** @class */ (function () {
        function ProLayoutModule() {
        }
        return ProLayoutModule;
    }());
    ProLayoutModule.ɵmod = i0.ɵɵdefineNgModule({ type: ProLayoutModule });
    ProLayoutModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ProLayoutModule_Factory(t) { return new (t || ProLayoutModule)(); }, providers: [], imports: [[
                i1.CommonModule,
                i1$2.RouterModule,
                button.NzButtonModule,
                i2.NzIconModule,
                i4.NzLayoutModule,
                i1$5.NzDropDownModule,
                i1$1.NzMenuModule,
                i11.NzSelectModule,
                i7.NzListModule,
                popover.NzPopoverModule,
                table.NzTableModule,
                i5$2.NzTabsModule,
                tree.NzTreeModule,
                treeView.NzTreeViewModule,
                alert.NzAlertModule,
                i5$1.NzDrawerModule,
                i2$2.NzMessageModule,
                i3$2.NzPageHeaderModule,
                i4$1.NzBreadCrumbModule,
                i6$1.NzDividerModule,
                i2$1.NzToolTipModule,
                i14.NzSwitchModule,
                i12.FormsModule,
                i12.ReactiveFormsModule,
                i6.TranslateModule,
                ReuseTabModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ProLayoutModule, { declarations: [GlobalHeaderComponent,
                BasicLayoutComponent,
                GridContentComponent,
                PageHeaderWrapperComponent,
                TopNavHeaderComponent,
                SettingDrawerComponent,
                GlobalFooterComponent,
                BlockCheckboxComponent,
                ThemeColorComponent,
                BaseMenuComponent], imports: [i1.CommonModule,
                i1$2.RouterModule,
                button.NzButtonModule,
                i2.NzIconModule,
                i4.NzLayoutModule,
                i1$5.NzDropDownModule,
                i1$1.NzMenuModule,
                i11.NzSelectModule,
                i7.NzListModule,
                popover.NzPopoverModule,
                table.NzTableModule,
                i5$2.NzTabsModule,
                tree.NzTreeModule,
                treeView.NzTreeViewModule,
                alert.NzAlertModule,
                i5$1.NzDrawerModule,
                i2$2.NzMessageModule,
                i3$2.NzPageHeaderModule,
                i4$1.NzBreadCrumbModule,
                i6$1.NzDividerModule,
                i2$1.NzToolTipModule,
                i14.NzSwitchModule,
                i12.FormsModule,
                i12.ReactiveFormsModule,
                i6.TranslateModule,
                ReuseTabModule], exports: [GlobalHeaderComponent,
                BasicLayoutComponent,
                GridContentComponent,
                PageHeaderWrapperComponent,
                TopNavHeaderComponent,
                SettingDrawerComponent,
                GlobalFooterComponent,
                BlockCheckboxComponent,
                ThemeColorComponent,
                BaseMenuComponent] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProLayoutModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.CommonModule,
                            i1$2.RouterModule,
                            button.NzButtonModule,
                            i2.NzIconModule,
                            i4.NzLayoutModule,
                            i1$5.NzDropDownModule,
                            i1$1.NzMenuModule,
                            i11.NzSelectModule,
                            i7.NzListModule,
                            popover.NzPopoverModule,
                            table.NzTableModule,
                            i5$2.NzTabsModule,
                            tree.NzTreeModule,
                            treeView.NzTreeViewModule,
                            alert.NzAlertModule,
                            i5$1.NzDrawerModule,
                            i2$2.NzMessageModule,
                            i3$2.NzPageHeaderModule,
                            i4$1.NzBreadCrumbModule,
                            i6$1.NzDividerModule,
                            i2$1.NzToolTipModule,
                            i14.NzSwitchModule,
                            i12.FormsModule,
                            i12.ReactiveFormsModule,
                            i6.TranslateModule,
                            ReuseTabModule
                        ],
                        exports: __spread(Layouts),
                        declarations: __spread(Layouts),
                        providers: [],
                    }]
            }], null, null);
    })();

    var ReuseTabStrategy = /** @class */ (function () {
        function ReuseTabStrategy(reuseTabService) {
            this.reuseTabService = reuseTabService;
        }
        /** 表示对所有路由允许复用 如果你有路由不想利用可以在这加一些业务逻辑判断 */
        ReuseTabStrategy.prototype.shouldDetach = function (route) {
            return this.reuseTabService.shouldDetach(route);
        };
        /** 当路由离开时会触发。按path作为key存储路由快照&组件当前实例对象 */
        ReuseTabStrategy.prototype.store = function (route, handle) {
            this.reuseTabService.store(route, handle);
        };
        /** 若 path 在缓存中有的都认为允许还原路由 */
        ReuseTabStrategy.prototype.shouldAttach = function (route) {
            return this.reuseTabService.shouldAttach(route);
        };
        /** 从缓存中获取快照，若无则返回nul */
        ReuseTabStrategy.prototype.retrieve = function (route) {
            return this.reuseTabService.retrieve(route);
        };
        /** 进入路由触发，判断是否同一路由 */
        ReuseTabStrategy.prototype.shouldReuseRoute = function (future, curr) {
            return this.reuseTabService.shouldReuseRoute(future, curr);
        };
        return ReuseTabStrategy;
    }());

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

    exports.BaseMenuComponent = BaseMenuComponent;
    exports.BasicLayoutComponent = BasicLayoutComponent;
    exports.BlockCheckboxComponent = BlockCheckboxComponent;
    exports.DefaultLocation = DefaultLocation;
    exports.GlobalFooterComponent = GlobalFooterComponent;
    exports.GlobalHeaderComponent = GlobalHeaderComponent;
    exports.GridContentComponent = GridContentComponent;
    exports.NzTabChangeEvent = NzTabChangeEvent;
    exports.PRO_LAYOUT = PRO_LAYOUT;
    exports.PRO_TAB_SET = PRO_TAB_SET;
    exports.PageHeaderWrapperComponent = PageHeaderWrapperComponent;
    exports.ProLayoutModule = ProLayoutModule;
    exports.ProTabAddButtonComponent = ProTabAddButtonComponent;
    exports.ProTabBodyComponent = ProTabBodyComponent;
    exports.ProTabCloseButtonComponent = ProTabCloseButtonComponent;
    exports.ProTabComponent = ProTabComponent;
    exports.ProTabDirective = ProTabDirective;
    exports.ProTabLinkDirective = ProTabLinkDirective;
    exports.ProTabLinkTemplateDirective = ProTabLinkTemplateDirective;
    exports.ProTabNavBarComponent = ProTabNavBarComponent;
    exports.ProTabNavItemDirective = ProTabNavItemDirective;
    exports.ProTabNavOperationComponent = ProTabNavOperationComponent;
    exports.ProTabScrollListDirective = ProTabScrollListDirective;
    exports.ProTabSetComponent = ProTabSetComponent;
    exports.ProTabsInkBarDirective = ProTabsInkBarDirective;
    exports.ProTabsModule = ProTabsModule;
    exports.ROUTE_DATA_BREADCRUMB_NAME = ROUTE_DATA_BREADCRUMB_NAME;
    exports.ReuseTabComponent = ReuseTabComponent;
    exports.ReuseTabMenuComponent = ReuseTabMenuComponent;
    exports.ReuseTabMenuService = ReuseTabMenuService;
    exports.ReuseTabModule = ReuseTabModule;
    exports.ReuseTabService = ReuseTabService;
    exports.ReuseTabStrategy = ReuseTabStrategy;
    exports.ScrollService = ScrollService;
    exports.SettingDrawerComponent = SettingDrawerComponent;
    exports.SettingsService = SettingsService;
    exports.ThemeColorComponent = ThemeColorComponent;
    exports.TopNavHeaderComponent = TopNavHeaderComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=pro-layout.umd.js.map
