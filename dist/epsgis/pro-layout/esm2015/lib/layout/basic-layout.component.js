import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { InputBoolean, InputNumber } from 'ng-zorro-antd/core/util';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/layout";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
import * as i4 from "ng-zorro-antd/layout";
import * as i5 from "ng-zorro-antd/drawer";
import * as i6 from "../top-nav-header/top-nav-header.component";
import * as i7 from "../global-header/global-header.component";
import * as i8 from "../reuse-tab/reuse-tab.component";
import * as i9 from "../global-footer/global-footer.component";
import * as i10 from "../sider-menu/base-menu.component";
function BasicLayoutComponent_ng_container_2_nz_sider_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c0 = function (a1, a2) { return { "ant-pro-sider-menu-sider": true, "fix-sider-bar": a1, "light": a2 }; };
function BasicLayoutComponent_ng_container_2_nz_sider_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nz-sider", 9);
    i0.ɵɵlistener("nzCollapsedChange", function BasicLayoutComponent_ng_container_2_nz_sider_1_Template_nz_sider_nzCollapsedChange_0_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(2); return ctx_r8.collapsed = $event; });
    i0.ɵɵtemplate(1, BasicLayoutComponent_ng_container_2_nz_sider_1_ng_container_1_Template, 1, 0, "ng-container", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    const _r3 = i0.ɵɵreference(9);
    i0.ɵɵproperty("nzCollapsible", true)("nzTrigger", null)("nzCollapsed", ctx_r5.collapsed)("nzBreakpoint", "lg")("nzWidth", ctx_r5.siderWidth)("nzTheme", ctx_r5.navTheme)("ngClass", i0.ɵɵpureFunction2(8, _c0, ctx_r5.fixSiderbar, ctx_r5.navTheme == "light"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r3);
} }
function BasicLayoutComponent_ng_container_2_nz_drawer_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c1 = function () { return { padding: 0, height: "100vh" }; };
function BasicLayoutComponent_ng_container_2_nz_drawer_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nz-drawer", 11);
    i0.ɵɵlistener("nzOnClose", function BasicLayoutComponent_ng_container_2_nz_drawer_2_Template_nz_drawer_nzOnClose_0_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(2); return ctx_r11.onDrawerClose($event); });
    i0.ɵɵelementStart(1, "nz-sider", 12);
    i0.ɵɵtemplate(2, BasicLayoutComponent_ng_container_2_nz_drawer_2_ng_container_2_Template, 1, 0, "ng-container", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    const _r3 = i0.ɵɵreference(9);
    i0.ɵɵproperty("nzClosable", false)("nzVisible", !ctx_r6.collapsed)("nzPlacement", "left")("nzWrapClassName", "ant-pro-sider-menu")("nzWidth", ctx_r6.siderWidth)("ngStyle", i0.ɵɵpureFunction0(13, _c1));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzCollapsible", true)("nzTrigger", null)("nzCollapsed", ctx_r6.isMobile ? false : ctx_r6.collapsed)("nzWidth", ctx_r6.siderWidth)("nzTheme", ctx_r6.navTheme)("ngClass", i0.ɵɵpureFunction2(14, _c0, ctx_r6.fixSiderbar, ctx_r6.navTheme == "light"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r3);
} }
function BasicLayoutComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BasicLayoutComponent_ng_container_2_nz_sider_1_Template, 2, 11, "nz-sider", 7);
    i0.ɵɵtemplate(2, BasicLayoutComponent_ng_container_2_nz_drawer_2_Template, 3, 17, "nz-drawer", 8);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.isMobile);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.isMobile);
} }
function BasicLayoutComponent_nz_header_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function BasicLayoutComponent_nz_header_4_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 17);
    i0.ɵɵlistener("onMenuHeaderClick", function BasicLayoutComponent_nz_header_4_ng_template_2_ng_container_0_Template_div_onMenuHeaderClick_1_listener($event) { i0.ɵɵrestoreView(_r21); const ctx_r20 = i0.ɵɵnextContext(3); return ctx_r20.onMenuHeaderClick.emit($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r17 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("theme", ctx_r17.navTheme)("menuData", ctx_r17.menuData)("logo", ctx_r17.logo)("title", ctx_r17.title)("contentWidth", ctx_r17.contentWidth)("rightContentRender", ctx_r17.rightContentRender)("menuHeaderRender", ctx_r17.menuHeaderRender);
} }
function BasicLayoutComponent_nz_header_4_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵlistener("collapsedChange", function BasicLayoutComponent_nz_header_4_ng_template_2_ng_template_1_Template_div_collapsedChange_0_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r22 = i0.ɵɵnextContext(3); return ctx_r22.collapsed = $event; })("collapsedChange", function BasicLayoutComponent_nz_header_4_ng_template_2_ng_template_1_Template_div_collapsedChange_0_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r24 = i0.ɵɵnextContext(3); return ctx_r24.onCollapse.emit($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r19 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("isMobile", ctx_r19.isMobile)("collapsed", ctx_r19.collapsed)("logo", ctx_r19.logo)("collapsedButtonRender", ctx_r19.collapsedButtonRender)("rightContentRender", ctx_r19.rightContentRender);
} }
function BasicLayoutComponent_nz_header_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, BasicLayoutComponent_nz_header_4_ng_template_2_ng_container_0_Template, 2, 7, "ng-container", 15);
    i0.ɵɵtemplate(1, BasicLayoutComponent_nz_header_4_ng_template_2_ng_template_1_Template, 1, 5, "ng-template", null, 16, i0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const _r18 = i0.ɵɵreference(2);
    const ctx_r15 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r15.layout === "topmenu" && !ctx_r15.isMobile)("ngIfElse", _r18);
} }
function BasicLayoutComponent_nz_header_4_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "pro-reuse-tab", 19);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("allowRefresh", false)("debug", false);
} }
const _c2 = function (a1) { return { padding: 0, width: a1, zIndex: 2 }; };
const _c3 = function (a0) { return { "ant-pro-fixed-header": a0 }; };
function BasicLayoutComponent_nz_header_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nz-header", 13);
    i0.ɵɵtemplate(1, BasicLayoutComponent_nz_header_4_ng_container_1_Template, 1, 0, "ng-container", 10);
    i0.ɵɵtemplate(2, BasicLayoutComponent_nz_header_4_ng_template_2_Template, 3, 2, "ng-template", null, 14, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, BasicLayoutComponent_nz_header_4_ng_container_4_Template, 2, 2, "ng-container", 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r14 = i0.ɵɵreference(3);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(4, _c2, ctx_r1.getHeadWidth()))("ngClass", i0.ɵɵpureFunction1(6, _c3, ctx_r1.fixedHeader));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1.headerRender ? ctx_r1.headerRender : _r14);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.fixedHeader && ctx_r1.reuseTab);
} }
function BasicLayoutComponent_nz_footer_7_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function BasicLayoutComponent_nz_footer_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BasicLayoutComponent_nz_footer_7_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r25.footerRender);
} }
function BasicLayoutComponent_nz_footer_7_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 22);
} if (rf & 2) {
    const ctx_r27 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("links", ctx_r27.links)("copyright", ctx_r27.copyright);
} }
function BasicLayoutComponent_nz_footer_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nz-footer", 20);
    i0.ɵɵtemplate(1, BasicLayoutComponent_nz_footer_7_ng_container_1_Template, 2, 1, "ng-container", 15);
    i0.ɵɵtemplate(2, BasicLayoutComponent_nz_footer_7_ng_template_2_Template, 1, 2, "ng-template", null, 21, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r26 = i0.ɵɵreference(3);
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.footerRender)("ngIfElse", _r26);
} }
function BasicLayoutComponent_ng_template_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function BasicLayoutComponent_ng_template_8_ng_template_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 31);
} if (rf & 2) {
    const ctx_r32 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r32.logo);
} }
function BasicLayoutComponent_ng_template_8_ng_template_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "img", 32);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r33 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", ctx_r33.logo, i0.ɵɵsanitizeUrl);
} }
function BasicLayoutComponent_ng_template_8_ng_template_2_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 31);
} if (rf & 2) {
    const ctx_r34 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r34.title);
} }
function BasicLayoutComponent_ng_template_8_ng_template_2_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r35 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r35.title);
} }
function BasicLayoutComponent_ng_template_8_ng_template_2_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const ctx_r31 = i0.ɵɵnextContext(2);
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
} }
const _c4 = function (a0, a1) { return { logo: a0, title: a1 }; };
const _c5 = function () { return { "width": "100%", "padding": "16px 0" }; };
function BasicLayoutComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r37 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵlistener("click", function BasicLayoutComponent_ng_template_8_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r37); const ctx_r36 = i0.ɵɵnextContext(); return ctx_r36.onMenuHeaderClick.emit($event); });
    i0.ɵɵtemplate(1, BasicLayoutComponent_ng_template_8_ng_container_1_Template, 1, 0, "ng-container", 24);
    i0.ɵɵtemplate(2, BasicLayoutComponent_ng_template_8_ng_template_2_Template, 8, 6, "ng-template", null, 25, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "pro-base-menu", 26);
    i0.ɵɵlistener("openChange", function BasicLayoutComponent_ng_template_8_Template_pro_base_menu_openChange_4_listener($event) { i0.ɵɵrestoreView(_r37); const ctx_r38 = i0.ɵɵnextContext(); return ctx_r38.menuOpenChange($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r30 = i0.ɵɵreference(3);
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r4.menuHeaderRender ? ctx_r4.menuHeaderRender : _r30)("ngTemplateOutletContext", i0.ɵɵpureFunction2(10, _c4, ctx_r4.logo, ctx_r4.title));
    i0.ɵɵadvance(3);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction0(13, _c5));
    i0.ɵɵproperty("menuData", ctx_r4.menuData)("mode", ctx_r4.mode)("theme", ctx_r4.navTheme)("openKeys", ctx_r4.openKeys)("selectedKey", ctx_r4.selectedKey)("collapsed", ctx_r4.isMobile ? false : ctx_r4.collapsed);
} }
const _c6 = function () { return ["ant-design-pro", "basicLayout"]; };
const _c7 = function (a0) { return { "padding-left": a0, "min-height": "100vh" }; };
const _c8 = ["*"];
export class BasicLayoutComponent {
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
BasicLayoutComponent.ɵfac = function BasicLayoutComponent_Factory(t) { return new (t || BasicLayoutComponent)(i0.ɵɵdirectiveInject(i1.BreakpointObserver), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.ActivatedRoute), i0.ɵɵdirectiveInject(i2.Router)); };
BasicLayoutComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BasicLayoutComponent, selectors: [["pro-basic-layout"]], hostBindings: function BasicLayoutComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("scroll", function BasicLayoutComponent_scroll_HostBindingHandler() { return ctx.handScroll(); }, false, i0.ɵɵresolveWindow);
    } }, inputs: { title: "title", logo: "logo", menuHeaderRender: "menuHeaderRender", mode: "mode", layout: "layout", contentWidth: "contentWidth", navTheme: "navTheme", fixedHeader: "fixedHeader", fixSiderbar: "fixSiderbar", autoHideHeader: "autoHideHeader", menu: "menu", siderWidth: "siderWidth", collapsed: "collapsed", headerRender: "headerRender", rightContentRender: "rightContentRender", collapsedButtonRender: "collapsedButtonRender", footerRender: "footerRender", links: "links", copyright: "copyright", reuseTab: "reuseTab", menuData: "menuData" }, outputs: { onMenuHeaderClick: "onMenuHeaderClick", onCollapse: "onCollapse" }, exportAs: ["proBasicLayout"], features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c8, decls: 10, vars: 10, consts: [[3, "ngClass"], [4, "ngIf"], [3, "ngStyle"], [3, "ngStyle", "ngClass", 4, "ngIf"], [1, "ant-pro-basicLayout-content"], ["style", "padding: 0", 4, "ngIf"], ["siderMenuTemplate", ""], ["class", "ant-pro-sider-menu", 3, "nzCollapsible", "nzTrigger", "nzCollapsed", "nzBreakpoint", "nzWidth", "nzTheme", "ngClass", "nzCollapsedChange", 4, "ngIf"], [3, "nzClosable", "nzVisible", "nzPlacement", "nzWrapClassName", "nzWidth", "ngStyle", "nzOnClose", 4, "ngIf"], [1, "ant-pro-sider-menu", 3, "nzCollapsible", "nzTrigger", "nzCollapsed", "nzBreakpoint", "nzWidth", "nzTheme", "ngClass", "nzCollapsedChange"], [4, "ngTemplateOutlet"], [3, "nzClosable", "nzVisible", "nzPlacement", "nzWrapClassName", "nzWidth", "ngStyle", "nzOnClose"], [2, "display", "block", 3, "nzCollapsible", "nzTrigger", "nzCollapsed", "nzWidth", "nzTheme", "ngClass"], [3, "ngStyle", "ngClass"], ["defaultDomTemplate", ""], [4, "ngIf", "ngIfElse"], ["globalHeader", ""], ["pro-top-nav-header", "", 3, "theme", "menuData", "logo", "title", "contentWidth", "rightContentRender", "menuHeaderRender", "onMenuHeaderClick"], ["pro-global-header", "", 3, "isMobile", "collapsed", "logo", "collapsedButtonRender", "rightContentRender", "collapsedChange"], [3, "allowRefresh", "debug"], [2, "padding", "0"], ["globalFooter", ""], ["pro-global-footer", "", 3, "links", "copyright"], ["id", "logo", 1, "ant-pro-sider-menu-logo", 3, "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["defaultHeaderTemplate", ""], [3, "menuData", "mode", "theme", "openKeys", "selectedKey", "collapsed", "openChange"], ["href", "/"], [3, "ngSwitch"], [3, "ngTemplateOutlet", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [3, "ngTemplateOutlet"], ["alt", "logo", 3, "src"]], template: function BasicLayoutComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
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
    } }, directives: [i3.NgClass, i4.NzLayoutComponent, i3.NgIf, i3.NgStyle, i4.NzContentComponent, i4.NzSiderComponent, i3.NgTemplateOutlet, i5.NzDrawerComponent, i4.NzHeaderComponent, i6.TopNavHeaderComponent, i7.GlobalHeaderComponent, i8.ReuseTabComponent, i4.NzFooterComponent, i9.GlobalFooterComponent, i10.BaseMenuComponent, i3.NgSwitch, i3.NgSwitchCase], styles: [".ant-pro-basicLayout-content{margin:24px;padding-top:64px}.basicLayout .ant-layout{transition:all .2s}", ".ant-pro-fixed-header{position:fixed;top:0;right:0;z-index:9;width:100%;transition:width .2s}"], encapsulation: 2, changeDetection: 0 });
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BasicLayoutComponent, [{
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
    }], function () { return [{ type: i1.BreakpointObserver }, { type: i0.ChangeDetectorRef }, { type: i2.ActivatedRoute }, { type: i2.Router }]; }, { title: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzaWMtbGF5b3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Byby1sYXlvdXQvc3JjL2xpYi9sYXlvdXQvYmFzaWMtbGF5b3V0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Byby1sYXlvdXQvc3JjL2xpYi9sYXlvdXQvYmFzaWMtbGF5b3V0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFBRSxZQUFZLEVBQ3ZCLFlBQVksRUFDWixLQUFLLEVBQ0csTUFBTSxFQUNkLFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFpQixhQUFhLEVBQVMsTUFBTSxpQkFBaUIsQ0FBQztBQUV0RSxPQUFPLEVBQUMsWUFBWSxFQUFFLFdBQVcsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBRWxFLE9BQU8sRUFBQyxNQUFNLEVBQUUsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7OztJQ0xyQix3QkFBbUU7Ozs7O0lBVHJFLG1DQVFpSDtJQUp2RyxtUEFBMkI7SUFLbkMsa0hBQW1FO0lBQ3JFLGlCQUFXOzs7O0lBUkQsb0NBQXNCLG1CQUFBLGlDQUFBLHNCQUFBLDhCQUFBLDRCQUFBLHVGQUFBO0lBT2YsZUFBbUM7SUFBbkMsc0NBQW1DOzs7SUFpQmhELHdCQUFtRTs7Ozs7SUFmdkUscUNBT29EO0lBRnpDLDJPQUFtQztJQUc1QyxvQ0FNaUg7SUFDL0csbUhBQW1FO0lBQ3JFLGlCQUFXO0lBQ2IsaUJBQVk7Ozs7SUFoQkQsa0NBQW9CLGdDQUFBLHVCQUFBLHlDQUFBLDhCQUFBLHdDQUFBO0lBT25CLGVBQXNCO0lBQXRCLG9DQUFzQixtQkFBQSwyREFBQSw4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QVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixXQUFXLEVBQUUsNkJBQTZCO2dCQUMxQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsRUFBRSx1QkFBdUIsQ0FBQztnQkFDbkUsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixtQkFBbUIsRUFBRSxLQUFLO2FBQzNCO3VKQUdVLEtBQUs7a0JBQWIsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLGdCQUFnQjtrQkFBeEIsS0FBSztZQUNJLGlCQUFpQjtrQkFBMUIsTUFBTTtZQUVFLElBQUk7a0JBQVosS0FBSztZQUdHLE1BQU07a0JBQWQsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBR21CLFdBQVc7a0JBQW5DLEtBQUs7WUFDbUIsV0FBVztrQkFBbkMsS0FBSztZQUNtQixjQUFjO2tCQUF0QyxLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBTWtCLFVBQVU7a0JBQWpDLEtBQUs7WUFDbUIsU0FBUztrQkFBakMsS0FBSztZQUNJLFVBQVU7a0JBQW5CLE1BQU07WUFHRSxZQUFZO2tCQUFwQixLQUFLO1lBQ0csa0JBQWtCO2tCQUExQixLQUFLO1lBQ0cscUJBQXFCO2tCQUE3QixLQUFLO1lBR0csWUFBWTtrQkFBcEIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFNbUIsUUFBUTtrQkFBaEMsS0FBSztZQUdHLFFBQVE7a0JBQWhCLEtBQUs7WUE2R04sVUFBVTtrQkFEVCxZQUFZO21CQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSxcbiAgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QnJlYWtwb2ludE9ic2VydmVyLCBCcmVha3BvaW50U3RhdGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9sYXlvdXQnO1xuaW1wb3J0IHtHbG9iYWxGb290ZXJQcm9wc30gZnJvbSAnLi4vZ2xvYmFsLWZvb3Rlci9nbG9iYWwtZm9vdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBOYXZpZ2F0aW9uRW5kLCBSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge0NvbnRlbnRXaWR0aH0gZnJvbSAnLi4vY29yZS9kZWZhdWx0LXNldHRpbmdzJztcbmltcG9ydCB7SW5wdXRCb29sZWFuLCBJbnB1dE51bWJlcn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHtNZW51RGF0YUl0ZW19IGZyb20gJy4uL3NpZGVyLW1lbnUvYmFzZS1tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQge2ZpbHRlciwgdGFrZVVudGlsfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1N1YmplY3R9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwcm8tYmFzaWMtbGF5b3V0JyxcbiAgdGVtcGxhdGVVcmw6ICdiYXNpYy1sYXlvdXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnYmFzaWMtbGF5b3V0LmNvbXBvbmVudC5sZXNzJywgJ2hlYWRlci5jb21wb25lbnQubGVzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgZXhwb3J0QXM6ICdwcm9CYXNpY0xheW91dCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIEJhc2ljTGF5b3V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIC8vIHNpZGUgbWVudVxuICBASW5wdXQoKSB0aXRsZTogVGVtcGxhdGVSZWY8dm9pZD4gfCBzdHJpbmcgPSAnQW50IERlc2lnbiBQcm8nOyAgIC8vIGxheW91dCDnmoQg5bem5LiK6KeSIOeahCB0aXRsZVxuICBASW5wdXQoKSBsb2dvOiBUZW1wbGF0ZVJlZjx2b2lkPiB8IHN0cmluZzsgLy8gbGF5b3V0IOeahCDlt6bkuIrop5IgbG9nbyDnmoQgdXJsXG4gIEBJbnB1dCgpIG1lbnVIZWFkZXJSZW5kZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBAT3V0cHV0KCkgb25NZW51SGVhZGVyQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBASW5wdXQoKSBtb2RlID0gJ2lubGluZSc7XG5cbiAgLy8gYmFzZSBtZW51XG4gIEBJbnB1dCgpIGxheW91dCA9ICdzaWRlbWVudSc7IC8vIGxheW91dCDnmoToj5zljZXmqKHlvI8sc2lkZW1lbnXvvJrlj7Pkvqflr7zoiKrvvIx0b3BtZW5177ya6aG26YOo5a+86IiqXG4gIEBJbnB1dCgpIGNvbnRlbnRXaWR0aDogQ29udGVudFdpZHRoID0gJ0ZsdWlkJzsgLy8gbGF5b3V0IOeahOWGheWuueaooeW8jyxGbHVpZO+8muWumuWuvSAxMjAwcHjvvIxGaXhlZO+8muiHqumAguW6lFxuICBASW5wdXQoKSBuYXZUaGVtZSA9ICdkYXJrJzsgLy8g5a+86Iiq55qE5Li76aKYXG5cblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZml4ZWRIZWFkZXIgPSBmYWxzZTsgLy8g5piv5ZCm5Zu65a6aIGhlYWRlciDliLDpobbpg6hcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGZpeFNpZGVyYmFyID0gZmFsc2U7IC8vIOaYr+WQpuWbuuWumuWvvOiIqlxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYXV0b0hpZGVIZWFkZXIgPSBmYWxzZTsgLy8g5piv5ZCm5LiL5ruR5pe26Ieq5Yqo6ZqQ6JePIGhlYWRlclxuICBASW5wdXQoKSBtZW51OiBhbnkgPSB7bG9jYWxlOiB0cnVlfTsgLy8g5YWz5LqOIG1lbnUg55qE6YWN572u77yM5pqC5pe25Y+q5pyJIGxvY2FsZSxsb2NhbGUg5Y+v5Lul5YWz6ZetIG1lbnUg55qE6Ieq5bim55qE5YWo55CD5YyWXG5cbiAgLy8gQElucHV0KCkgaWNvbmZvbnRVcmw6c3RyaW5nOyAvLyDkvb/nlKggSWNvbkZvbnQg55qE5Zu+5qCH6YWN572uXG4gIC8vIEBJbnB1dCgpIGxvY2FsZTogc3RyaW5nOyAvLyDlvZPliY0gbGF5b3V0IOeahOivreiogOiuvue9riwnemgtQ04nIHwgJ3poLVRXJyB8ICdlbi1VUydcbiAgLy8gQElucHV0KCkgc2V0dGluZ3M6IGFueTsgLy8gbGF5b3V0IOeahOiuvue9rlxuXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHNpZGVyV2lkdGggPSAyNTY7IC8vIOS+p+i+ueiPnOWNleWuveW6plxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgY29sbGFwc2VkOyAvLyDmjqfliLboj5zljZXnmoTmlLbotbflkozlsZXlvIBcbiAgQE91dHB1dCgpIG9uQ29sbGFwc2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7IC8vIOiPnOWNleeahOaKmOWPoOaUtui1t+S6i+S7tlxuXG4gIC8vIGhlYWRlclxuICBASW5wdXQoKSBoZWFkZXJSZW5kZXI6IFRlbXBsYXRlUmVmPHZvaWQ+OyAvLyDoh6rlrprkuYnlpLTnmoQgcmVuZGVyIOaWueazlVxuICBASW5wdXQoKSByaWdodENvbnRlbnRSZW5kZXI6IFRlbXBsYXRlUmVmPHZvaWQ+OyAvLyDoh6rlrprkuYnlpLTlj7Ppg6jnmoQgcmVuZGVyIOaWueazlVxuICBASW5wdXQoKSBjb2xsYXBzZWRCdXR0b25SZW5kZXI6IFRlbXBsYXRlUmVmPGJvb2xlYW4+OyAgLy8g6Ieq5a6a5LmJIGNvbGxhcHNlZCBidXR0b24g55qE5pa55rOVXG5cbiAgLy8gZm9vdGVyXG4gIEBJbnB1dCgpIGZvb3RlclJlbmRlcjogVGVtcGxhdGVSZWY8dm9pZD4gfCBmYWxzZTtcbiAgQElucHV0KCkgbGlua3M6IEdsb2JhbEZvb3RlclByb3BzWydsaW5rcyddO1xuICBASW5wdXQoKSBjb3B5cmlnaHQ6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIC8vIOaYr+WQpuemgeeUqOenu+WKqOerr+aooeW8j++8jOacieeahOeuoeeQhuezu+e7n+S4jemcgOimgeenu+WKqOerr+aooeW8j++8jOatpOWxnuaAp+iuvue9ruS4unRydWXljbPlj69cbiAgLy8gQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpc2FibGVNb2JpbGU6IGJvb2xlYW47XG5cbiAgLy8g5aSa5qCH562+XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSByZXVzZVRhYjogYm9vbGVhbiA9IHRydWU7XG5cbiAgLy8gd3JhcHBlclxuICBASW5wdXQoKSBtZW51RGF0YTogTWVudURhdGFJdGVtW107XG4gIGlzTW9iaWxlID0gZmFsc2U7XG4gIHNlbGVjdGVkS2V5OiBzdHJpbmc7XG4gIG9wZW5LZXlzOiBBcnJheTxzdHJpbmc+ID0gW107XG5cbiAgdmlzaWJsZSA9IHRydWU7XG4gIHRpY2tpbmcgPSBmYWxzZTtcbiAgb2xkU2Nyb2xsVG9wID0gMDtcbiAgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYnJlYWtwb2ludE9ic2VydmVyOiBCcmVha3BvaW50T2JzZXJ2ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgY2RmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYnJlYWtwb2ludE9ic2VydmVyXG4gICAgICAub2JzZXJ2ZShbJyhtYXgtd2lkdGg6IDU5OXB4KSddKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZSgoc3RhdGU6IEJyZWFrcG9pbnRTdGF0ZSkgPT4ge1xuICAgICAgICAvLyBpZiAoIXRoaXMuZGlzYWJsZU1vYmlsZSkge1xuICAgICAgICBpZiAoc3RhdGUubWF0Y2hlcykge1xuICAgICAgICAgIHRoaXMuaXNNb2JpbGUgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaXNNb2JpbGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNkZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgLy8gfVxuICAgICAgfSk7XG5cbiAgICB0aGlzLnJvdXRlci5ldmVudHMucGlwZShcbiAgICAgIGZpbHRlcihldmVudCA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLm1lbnVEYXRhIHx8IHRoaXMubWVudURhdGEubGVuZ3RoIDwgMSkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLm9wZW5LZXlzID0gdGhpcy5nZXRPcGVuS2V5cyh0aGlzLnJvdXRlci51cmwpO1xuICAgICAgICAgIHRoaXMuY2RmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9LCA5MDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vcGVuS2V5cyA9IHRoaXMuZ2V0T3BlbktleXModGhpcy5yb3V0ZXIudXJsKTtcbiAgICAgICAgdGhpcy5jZGYubWFya0ZvckNoZWNrKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMubGF5b3V0KSB7XG4gICAgICB0aGlzLm9wZW5LZXlzID0gdGhpcy5nZXRPcGVuS2V5cyh0aGlzLnJvdXRlci51cmwpO1xuICAgICAgY29uc29sZS5sb2coJ25nT25DaGFuZ2VzJyk7XG4gICAgfVxuICB9XG5cbiAgbWVudU9wZW5DaGFuZ2UoZXZlbnQ6IHsgc3RhdHVzOiBib29sZWFuOyBpdGVtOiBNZW51RGF0YUl0ZW0gfSkge1xuICAgIGlmIChldmVudC5zdGF0dXMpIHtcbiAgICAgIHRoaXMub3BlbktleXMgPSB0aGlzLmdldE9wZW5LZXlzKGV2ZW50Lml0ZW0ucGF0aCk7XG4gICAgICBjb25zb2xlLmxvZygnbWVudU9wZW5DaGFuZ2UnKTtcbiAgICB9XG4gIH1cblxuICBnZXRPcGVuS2V5cyhwYXRoOiBzdHJpbmcpOiBBcnJheTxzdHJpbmc+IHtcbiAgICBwYXRoID0gZGVjb2RlVVJJQ29tcG9uZW50KHBhdGgpO1xuICAgIGxldCBrZXlzOiBBcnJheTxzdHJpbmc+ID0gbmV3IEFycmF5PHN0cmluZz4oKTtcbiAgICBsZXQgcGFyZW50OiBNZW51RGF0YUl0ZW0gPSB0aGlzLmdldFBhcmVudChwYXRoKTtcbiAgICB3aGlsZShwYXJlbnQpe1xuICAgICAga2V5cy5wdXNoKHBhcmVudC5wYXRoKTtcbiAgICAgIHBhcmVudCA9IHRoaXMuZ2V0UGFyZW50KHBhcmVudC5wYXRoKTtcbiAgICB9XG4gICAga2V5cy5wdXNoKHBhdGgpO1xuICAgIHJldHVybiBrZXlzO1xuICB9XG5cbiAgZ2V0UGFyZW50KHBhdGg6IHN0cmluZyk6IE1lbnVEYXRhSXRlbSB7XG4gICAgY29uc3QgZmluZENoaWxkOiBNZW51RGF0YUl0ZW0gPSB0aGlzLm1lbnVEYXRhLmZpbmQoaXRlbSA9PiBpdGVtLnBhdGggPT09IHBhdGgpO1xuICAgIGlmKGZpbmRDaGlsZCl7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZm9yIChjb25zdCBtZW51IG9mIHRoaXMubWVudURhdGEpIHtcbiAgICAgIGNvbnN0IGZpbGQ6IE1lbnVEYXRhSXRlbSA9IHRoaXMuZ2V0TmVhclBhcmVudChwYXRoLCBtZW51KTtcbiAgICAgIGlmKGZpbGQpe1xuICAgICAgICByZXR1cm4gZmlsZDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXROZWFyUGFyZW50KHBhdGg6IHN0cmluZywgbWVudTogTWVudURhdGFJdGVtKTogTWVudURhdGFJdGVtIHtcbiAgICBpZighbWVudS5jaGlsZHJlbiB8fCBtZW51LmNoaWxkcmVuLmxlbmd0aCA8IDEpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBmaWxkQ2hpbGQ6IE1lbnVEYXRhSXRlbSA9IG1lbnUuY2hpbGRyZW4uZmluZChpdGVtID0+IGl0ZW0ucGF0aCA9PT0gcGF0aCk7XG4gICAgaWYoZmlsZENoaWxkKXtcbiAgICAgIHJldHVybiBtZW51O1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIG1lbnUuY2hpbGRyZW4pIHtcbiAgICAgIGNvbnN0IGZpbmQ6TWVudURhdGFJdGVtID0gdGhpcy5nZXROZWFyUGFyZW50KHBhdGgsIGNoaWxkKTtcbiAgICAgIGlmKGZpbmQpe1xuICAgICAgICByZXR1cm4gZmluZDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6c2Nyb2xsJylcbiAgaGFuZFNjcm9sbCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuYXV0b0hpZGVIZWFkZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgIGlmICghdGhpcy50aWNraW5nKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5vbGRTY3JvbGxUb3AgPiBzY3JvbGxUb3ApIHtcbiAgICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHNjcm9sbFRvcCA+IDMwMCAmJiB0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChzY3JvbGxUb3AgPCAzMDAgJiYgIXRoaXMudmlzaWJsZSkge1xuICAgICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vbGRTY3JvbGxUb3AgPSBzY3JvbGxUb3A7XG4gICAgICAgIHRoaXMudGlja2luZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0UGFkZGluZ0xlZnQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAvLyBJZiBpdCBpcyBhIGZpeCBtZW51LCBjYWxjdWxhdGUgcGFkZGluZywgZG9uJ3QgbmVlZCBwYWRkaW5nIGluIHBob25lIG1vZGVcbiAgICBjb25zdCBoYXNMZWZ0UGFkZGluZyA9IHRoaXMuZml4U2lkZXJiYXIgJiYgdGhpcy5sYXlvdXQgIT09ICd0b3BtZW51JyAmJiAhdGhpcy5pc01vYmlsZTtcbiAgICBpZiAoaGFzTGVmdFBhZGRpbmcpIHtcbiAgICAgIHJldHVybiAodGhpcy5jb2xsYXBzZWQgPyAnODAnIDogdGhpcy5zaWRlcldpZHRoKSArICdweCc7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXRIZWFkV2lkdGgoKSB7XG4gICAgaWYgKHRoaXMuaXNNb2JpbGUgfHwgIXRoaXMuZml4ZWRIZWFkZXIgfHwgdGhpcy5sYXlvdXQgPT09ICd0b3BtZW51Jykge1xuICAgICAgcmV0dXJuICcxMDAlJztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY29sbGFwc2VkID8gJ2NhbGMoMTAwJSAtIDgwcHgpJyA6IGBjYWxjKDEwMCUgLSAke3RoaXMuc2lkZXJXaWR0aH1weClgO1xuICB9XG5cbiAgb25EcmF3ZXJDbG9zZShldmVudDogRXZlbnQpIHtcbiAgICB0aGlzLmNvbGxhcHNlZCA9ICF0aGlzLmNvbGxhcHNlZDtcbiAgfVxuXG4gIGdldENvbnRlbnRQYWRkaW5nVG9wKCl7XG4gICAgaWYodGhpcy5maXhlZEhlYWRlciAmJiB0aGlzLnJldXNlVGFiKXtcbiAgICAgIHJldHVybiBcIjExMHB4XCI7XG4gICAgfVxuICAgIGlmKCF0aGlzLmZpeGVkSGVhZGVyKXtcbiAgICAgIHJldHVybiAnMHB4J1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuICcnXG4gICAgfVxuICB9XG5cbiAgaXNOb25FbXB0eVN0cmluZyh2YWx1ZToge30pOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZSAhPT0gJyc7XG4gIH1cblxuICBpc1RlbXBsYXRlUmVmKHZhbHVlOiB7fSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmO1xuICB9XG59XG4iLCI8ZGl2IFtuZ0NsYXNzXT1cIlsnYW50LWRlc2lnbi1wcm8nLCdiYXNpY0xheW91dCddXCI+XG4gIDxuei1sYXlvdXQ+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiEobGF5b3V0ID09PSAndG9wbWVudScgJiYgIWlzTW9iaWxlKVwiPlxuICAgICAgPG56LXNpZGVyICpuZ0lmPVwiIWlzTW9iaWxlXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImFudC1wcm8tc2lkZXItbWVudVwiXG4gICAgICAgICAgICAgICAgW256Q29sbGFwc2libGVdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgW256VHJpZ2dlcl09XCJudWxsXCJcbiAgICAgICAgICAgICAgICBbKG56Q29sbGFwc2VkKV09XCJjb2xsYXBzZWRcIlxuICAgICAgICAgICAgICAgIFtuekJyZWFrcG9pbnRdPVwiJ2xnJ1wiXG4gICAgICAgICAgICAgICAgW256V2lkdGhdPVwic2lkZXJXaWR0aFwiXG4gICAgICAgICAgICAgICAgW256VGhlbWVdPVwibmF2VGhlbWVcIlxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnYW50LXByby1zaWRlci1tZW51LXNpZGVyJzogdHJ1ZSwnZml4LXNpZGVyLWJhcic6IGZpeFNpZGVyYmFyLCdsaWdodCc6IG5hdlRoZW1lPT0nbGlnaHQnfVwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwic2lkZXJNZW51VGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvbnotc2lkZXI+XG4gICAgICA8bnotZHJhd2VyICpuZ0lmPVwiaXNNb2JpbGVcIlxuICAgICAgICAgICAgICAgICBbbnpDbG9zYWJsZV09XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgIFtuelZpc2libGVdPVwiIWNvbGxhcHNlZFwiXG4gICAgICAgICAgICAgICAgIFtuelBsYWNlbWVudF09XCInbGVmdCdcIlxuICAgICAgICAgICAgICAgICBbbnpXcmFwQ2xhc3NOYW1lXT1cIidhbnQtcHJvLXNpZGVyLW1lbnUnXCJcbiAgICAgICAgICAgICAgICAgKG56T25DbG9zZSk9XCJvbkRyYXdlckNsb3NlKCRldmVudClcIlxuICAgICAgICAgICAgICAgICBbbnpXaWR0aF09XCJzaWRlcldpZHRoXCJcbiAgICAgICAgICAgICAgICAgW25nU3R5bGVdPVwie3BhZGRpbmc6IDAsaGVpZ2h0OiAnMTAwdmgnfVwiPlxuICAgICAgICA8bnotc2lkZXIgW256Q29sbGFwc2libGVdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICBbbnpUcmlnZ2VyXT1cIm51bGxcIlxuICAgICAgICAgICAgICAgICAgW256Q29sbGFwc2VkXT1cImlzTW9iaWxlID8gZmFsc2UgOiBjb2xsYXBzZWRcIlxuICAgICAgICAgICAgICAgICAgW256V2lkdGhdPVwic2lkZXJXaWR0aFwiXG4gICAgICAgICAgICAgICAgICBbbnpUaGVtZV09XCJuYXZUaGVtZVwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT1cImRpc3BsYXk6IGJsb2NrXCJcbiAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnYW50LXByby1zaWRlci1tZW51LXNpZGVyJzogdHJ1ZSwnZml4LXNpZGVyLWJhcic6IGZpeFNpZGVyYmFyLCdsaWdodCc6IG5hdlRoZW1lPT0nbGlnaHQnfVwiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJzaWRlck1lbnVUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICA8L256LXNpZGVyPlxuICAgICAgPC9uei1kcmF3ZXI+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8bnotbGF5b3V0IFtuZ1N0eWxlXT1cInsncGFkZGluZy1sZWZ0JzpnZXRQYWRkaW5nTGVmdCgpLCdtaW4taGVpZ2h0JzogJzEwMHZoJyB9XCI+XG4gICAgICA8bnotaGVhZGVyICpuZ0lmPVwidmlzaWJsZVwiXG4gICAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cInsgcGFkZGluZzogMCx3aWR0aDogZ2V0SGVhZFdpZHRoKCksekluZGV4OiAyIH1cIlxuICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J2FudC1wcm8tZml4ZWQtaGVhZGVyJzogZml4ZWRIZWFkZXJ9XCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJoZWFkZXJSZW5kZXIgPyBoZWFkZXJSZW5kZXI6IGRlZmF1bHREb21UZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICA8bmctdGVtcGxhdGUgI2RlZmF1bHREb21UZW1wbGF0ZT5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibGF5b3V0ID09PSAndG9wbWVudScgJiYgIWlzTW9iaWxlO2Vsc2U6IGdsb2JhbEhlYWRlclwiPlxuICAgICAgICAgICAgPGRpdiBwcm8tdG9wLW5hdi1oZWFkZXJcbiAgICAgICAgICAgICAgICAgW3RoZW1lXT1cIm5hdlRoZW1lXCJcbiAgICAgICAgICAgICAgICAgW21lbnVEYXRhXT1cIm1lbnVEYXRhXCJcbiAgICAgICAgICAgICAgICAgW2xvZ29dPVwibG9nb1wiXG4gICAgICAgICAgICAgICAgIFt0aXRsZV09XCJ0aXRsZVwiXG4gICAgICAgICAgICAgICAgIFtjb250ZW50V2lkdGhdPVwiY29udGVudFdpZHRoXCJcbiAgICAgICAgICAgICAgICAgW3JpZ2h0Q29udGVudFJlbmRlcl09XCJyaWdodENvbnRlbnRSZW5kZXJcIlxuICAgICAgICAgICAgICAgICAob25NZW51SGVhZGVyQ2xpY2spPVwib25NZW51SGVhZGVyQ2xpY2suZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgW21lbnVIZWFkZXJSZW5kZXJdPVwibWVudUhlYWRlclJlbmRlclwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPG5nLXRlbXBsYXRlICNnbG9iYWxIZWFkZXI+XG4gICAgICAgICAgICA8ZGl2IHByby1nbG9iYWwtaGVhZGVyXG4gICAgICAgICAgICAgICAgIFtpc01vYmlsZV09XCJpc01vYmlsZVwiXG4gICAgICAgICAgICAgICAgIFsoY29sbGFwc2VkKV09XCJjb2xsYXBzZWRcIlxuICAgICAgICAgICAgICAgICBbbG9nb109XCJsb2dvXCJcbiAgICAgICAgICAgICAgICAgW2NvbGxhcHNlZEJ1dHRvblJlbmRlcl09XCJjb2xsYXBzZWRCdXR0b25SZW5kZXJcIlxuICAgICAgICAgICAgICAgICBbcmlnaHRDb250ZW50UmVuZGVyXT1cInJpZ2h0Q29udGVudFJlbmRlclwiXG4gICAgICAgICAgICAgICAgIChjb2xsYXBzZWRDaGFuZ2UpPVwib25Db2xsYXBzZS5lbWl0KCRldmVudClcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmaXhlZEhlYWRlciAmJiByZXVzZVRhYlwiPlxuICAgICAgICAgIDxwcm8tcmV1c2UtdGFiIFthbGxvd1JlZnJlc2hdPVwiZmFsc2VcIiBbZGVidWddPVwiZmFsc2VcIj48L3Byby1yZXVzZS10YWI+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9uei1oZWFkZXI+XG5cbiAgICAgIDxuei1jb250ZW50IGNsYXNzPVwiYW50LXByby1iYXNpY0xheW91dC1jb250ZW50XCIgW3N0eWxlLnBhZGRpbmctdG9wXT1cImdldENvbnRlbnRQYWRkaW5nVG9wKClcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgPC9uei1jb250ZW50PlxuXG4gICAgICA8bnotZm9vdGVyICpuZ0lmPVwiZm9vdGVyUmVuZGVyICE9PSBmYWxzZVwiIHN0eWxlPVwicGFkZGluZzogMFwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZm9vdGVyUmVuZGVyO2Vsc2U6IGdsb2JhbEZvb3RlclwiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJmb290ZXJSZW5kZXJcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjZ2xvYmFsRm9vdGVyPlxuICAgICAgICAgIDxkaXYgcHJvLWdsb2JhbC1mb290ZXIgW2xpbmtzXT1cImxpbmtzXCIgW2NvcHlyaWdodF09XCJjb3B5cmlnaHRcIj48L2Rpdj5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvbnotZm9vdGVyPlxuXG4gICAgPC9uei1sYXlvdXQ+XG4gIDwvbnotbGF5b3V0PlxuPC9kaXY+XG5cbjxuZy10ZW1wbGF0ZSAjc2lkZXJNZW51VGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJhbnQtcHJvLXNpZGVyLW1lbnUtbG9nb1wiIGlkPVwibG9nb1wiIChjbGljayk9XCJvbk1lbnVIZWFkZXJDbGljay5lbWl0KCRldmVudClcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwibWVudUhlYWRlclJlbmRlciA/IG1lbnVIZWFkZXJSZW5kZXI6IGRlZmF1bHRIZWFkZXJUZW1wbGF0ZTsgY29udGV4dDoge2xvZ286bG9nbyx0aXRsZTp0aXRsZX1cIlxuICAgICAgICAgICAgICAgICAgPjwvbmctY29udGFpbmVyPlxuICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdEhlYWRlclRlbXBsYXRlPlxuICAgICAgPGEgaHJlZj1cIi9cIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwidHJ1ZVwiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzVGVtcGxhdGVSZWYobG9nbylcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJsb2dvXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNOb25FbXB0eVN0cmluZyhsb2dvKVwiPjxpbWcgW3NyY109XCJsb2dvXCIgYWx0PVwibG9nb1wiLz48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDxoMT5cbiAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJ0cnVlXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc1RlbXBsYXRlUmVmKHRpdGxlKVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRpdGxlXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc05vbkVtcHR5U3RyaW5nKHRpdGxlKVwiPnt7dGl0bGV9fTwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L2gxPlxuICAgICAgPC9hPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIDwvZGl2PlxuICA8cHJvLWJhc2UtbWVudSBbc3R5bGVdPVwieyd3aWR0aCc6ICcxMDAlJywncGFkZGluZyc6ICcxNnB4IDAnfVwiXG4gICAgICAgICAgICAgICAgIFttZW51RGF0YV09XCJtZW51RGF0YVwiXG4gICAgICAgICAgICAgICAgIFttb2RlXT1cIm1vZGVcIlxuICAgICAgICAgICAgICAgICBbdGhlbWVdPVwibmF2VGhlbWVcIlxuICAgICAgICAgICAgICAgICBbb3BlbktleXNdPVwib3BlbktleXNcIlxuICAgICAgICAgICAgICAgICBbc2VsZWN0ZWRLZXldPVwic2VsZWN0ZWRLZXlcIlxuICAgICAgICAgICAgICAgICBbY29sbGFwc2VkXT1cImlzTW9iaWxlID8gZmFsc2UgOiBjb2xsYXBzZWRcIlxuICAgICAgICAgICAgICAgICAob3BlbkNoYW5nZSk9XCJtZW51T3BlbkNoYW5nZSgkZXZlbnQpXCI+XG4gIDwvcHJvLWJhc2UtbWVudT5cbjwvbmctdGVtcGxhdGU+XG4iXX0=