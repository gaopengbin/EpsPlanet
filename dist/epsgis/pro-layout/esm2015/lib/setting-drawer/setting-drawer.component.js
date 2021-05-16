import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../core/settings.service";
import * as i2 from "ng-zorro-antd/message";
import * as i3 from "ng-zorro-antd/drawer";
import * as i4 from "./block-checkbox/block-checkbox.component";
import * as i5 from "./theme-color/theme-color.component";
import * as i6 from "ng-zorro-antd/divider";
import * as i7 from "ng-zorro-antd/list";
import * as i8 from "ng-zorro-antd/core/transition-patch";
import * as i9 from "ng-zorro-antd/icon";
import * as i10 from "ng-zorro-antd/tooltip";
import * as i11 from "ng-zorro-antd/select";
import * as i12 from "@angular/forms";
import * as i13 from "@angular/common";
import * as i14 from "ng-zorro-antd/switch";
const _c0 = ["renderItemTemplate"];
const _c1 = ["contentWidthActionTemplate"];
const _c2 = ["fixedHeaderActionTemplate"];
const _c3 = ["hideHeaderActionTemplate"];
const _c4 = ["fixedSidebarActionTemplate"];
const _c5 = ["colorWeakActionTemplate"];
function SettingDrawerComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 16);
    i0.ɵɵelementStart(1, "nz-list-item", 17);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    i0.ɵɵproperty("nzTooltipTitle", item_r14.disabled ? item_r14.disabledReason : "")("nzTooltipPlacement", "left");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzActions", item_r14.action);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("opacity", item_r14.disabled ? 0.5 : 1);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r14.title);
} }
function SettingDrawerComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 16);
    i0.ɵɵelementStart(1, "nz-list-item", 17);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    i0.ɵɵproperty("nzTooltipTitle", item_r15.disabled ? item_r15.disabledReason : "")("nzTooltipPlacement", "left");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzActions", item_r15.action);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("opacity", item_r15.disabled ? 0.5 : 1);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r15.title);
} }
function SettingDrawerComponent_ng_template_25_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nz-option", 21);
} if (rf & 2) {
    i0.ɵɵproperty("nzLabel", "\u5B9A\u5BBD");
} }
function SettingDrawerComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nz-select", 18);
    i0.ɵɵlistener("ngModelChange", function SettingDrawerComponent_ng_template_25_Template_nz_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.changeSetting("contentWidth", $event); });
    i0.ɵɵtemplate(1, SettingDrawerComponent_ng_template_25_nz_option_1_Template, 1, 1, "nz-option", 19);
    i0.ɵɵelement(2, "nz-option", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngModel", ctx_r5.settings.contentWidth);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.settings.layout !== "sidemenu");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzLabel", "\u6D41\u5F0F");
} }
function SettingDrawerComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nz-switch", 22);
    i0.ɵɵlistener("ngModelChange", function SettingDrawerComponent_ng_template_27_Template_nz_switch_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r19 = i0.ɵɵnextContext(); return !!(ctx_r19.settings.fixedHeader = $event); })("ngModelChange", function SettingDrawerComponent_ng_template_27_Template_nz_switch_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r21 = i0.ɵɵnextContext(); return ctx_r21.changeSetting("fixedHeader", $event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngModel", !!ctx_r7.settings.fixedHeader);
} }
function SettingDrawerComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nz-switch", 23);
    i0.ɵɵlistener("ngModelChange", function SettingDrawerComponent_ng_template_29_Template_nz_switch_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r22 = i0.ɵɵnextContext(); return !!(ctx_r22.settings.autoHideHeader = $event); })("ngModelChange", function SettingDrawerComponent_ng_template_29_Template_nz_switch_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r24 = i0.ɵɵnextContext(); return ctx_r24.changeSetting("autoHideHeader", $event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzDisabled", !ctx_r9.settings.fixedHeader)("ngModel", !!ctx_r9.settings.autoHideHeader);
} }
function SettingDrawerComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nz-switch", 23);
    i0.ɵɵlistener("ngModelChange", function SettingDrawerComponent_ng_template_31_Template_nz_switch_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r25 = i0.ɵɵnextContext(); return !!(ctx_r25.settings.fixSiderbar = $event); })("ngModelChange", function SettingDrawerComponent_ng_template_31_Template_nz_switch_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r27 = i0.ɵɵnextContext(); return ctx_r27.changeSetting("fixSiderbar", $event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzDisabled", ctx_r11.settings.layout === "topmenu")("ngModel", !!ctx_r11.settings.fixSiderbar);
} }
function SettingDrawerComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nz-switch", 22);
    i0.ɵɵlistener("ngModelChange", function SettingDrawerComponent_ng_template_33_Template_nz_switch_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r28 = i0.ɵɵnextContext(); return !!(ctx_r28.settings.colorWeak = $event); })("ngModelChange", function SettingDrawerComponent_ng_template_33_Template_nz_switch_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r30 = i0.ɵɵnextContext(); return ctx_r30.changeSetting("colorWeak", $event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngModel", !!ctx_r13.settings.colorWeak);
} }
export class SettingDrawerComponent {
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
SettingDrawerComponent.ɵfac = function SettingDrawerComponent_Factory(t) { return new (t || SettingDrawerComponent)(i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.SettingsService), i0.ɵɵdirectiveInject(i2.NzMessageService)); };
SettingDrawerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SettingDrawerComponent, selectors: [["pro-setting-drawer"]], viewQuery: function SettingDrawerComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 3);
        i0.ɵɵviewQuery(_c1, 3);
        i0.ɵɵviewQuery(_c2, 3);
        i0.ɵɵviewQuery(_c3, 3);
        i0.ɵɵviewQuery(_c4, 3);
        i0.ɵɵviewQuery(_c5, 3);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.renderItemTemplate = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.contentWidthActionTemplate = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.fixedHeaderActionTemplate = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.hideHeaderActionTemplate = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.fixedSidebarActionTemplate = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.colorWeakActionTemplate = _t.first);
    } }, inputs: { settings: "settings" }, outputs: { onSettingChange: "onSettingChange", onCollapseChange: "onCollapseChange" }, exportAs: ["proSettingDrawer"], decls: 35, vars: 16, consts: [[2, "z-index", "999", 3, "nzVisible", "nzWidth", "nzPlacement", "nzOnClose"], [1, "ant-pro-setting-drawer-content"], [2, "margin-bottom", "24px"], [1, "ant-pro-setting-drawer-title"], [3, "list", "value", "onChange"], [3, "title", "value", "onChange"], [3, "nzSplit", "nzDataSource", "nzRenderItem"], ["renderItemTemplate1", ""], ["renderItemTemplate2", ""], [1, "ant-pro-setting-drawer-handle", 3, "click"], ["nz-icon", "", 2, "color", "#fff", "font-size", "20px", 3, "nzType"], ["contentWidthActionTemplate", ""], ["fixedHeaderActionTemplate", ""], ["hideHeaderActionTemplate", ""], ["fixedSidebarActionTemplate", ""], ["colorWeakActionTemplate", ""], ["nz-tooltip", "", 3, "nzTooltipTitle", "nzTooltipPlacement"], [3, "nzActions"], ["nzSize", "small", 2, "width", "80px", 3, "ngModel", "ngModelChange"], ["nzValue", "Fixed", 3, "nzLabel", 4, "ngIf"], ["nzValue", "Fluid", 3, "nzLabel"], ["nzValue", "Fixed", 3, "nzLabel"], ["nzSize", "small", 3, "ngModel", "ngModelChange"], ["nzSize", "small", 3, "nzDisabled", "ngModel", "ngModelChange"]], template: function SettingDrawerComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(14);
        const _r2 = i0.ɵɵreference(21);
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
    } }, directives: [i3.NzDrawerComponent, i4.BlockCheckboxComponent, i5.ThemeColorComponent, i6.NzDividerComponent, i7.NzListComponent, i8.ɵNzTransitionPatchDirective, i9.NzIconDirective, i10.NzTooltipDirective, i7.NzListItemComponent, i11.NzSelectComponent, i12.NgControlStatus, i12.NgModel, i13.NgIf, i11.NzOptionComponent, i14.NzSwitchComponent], styles: [".ant-pro-setting-drawer-content{position:relative;min-height:100%;background:#fff}.ant-pro-setting-drawer-content .ant-list-item span{flex:1}.ant-pro-setting-drawer-block-checbox{display:flex;background:#fff}.ant-pro-setting-drawer-block-checbox-item{position:relative;margin-right:16px;border-radius:2px;cursor:pointer}.ant-pro-setting-drawer-block-checbox-item img{width:48px}.ant-pro-setting-drawer-block-checbox-selectIcon{position:absolute;top:0;right:0;width:100%;height:100%;padding-top:15px;padding-left:24px;color:#1890ff;font-weight:700;font-size:14px}.ant-pro-setting-drawer-color_block{display:inline-block;width:38px;height:22px;margin:4px 12px 4px 4px;vertical-align:middle;border-radius:4px;cursor:pointer}.ant-pro-setting-drawer-title{margin-bottom:12px;color:rgba(0,0,0,.85);font-size:14px;line-height:22px}.ant-pro-setting-drawer-handle{position:absolute;top:240px;right:300px;z-index:0;display:flex;align-items:center;justify-content:center;width:48px;height:48px;font-size:16px;text-align:center;background:#1890ff;border-radius:4px 0 0 4px;cursor:pointer;pointer-events:auto}.ant-pro-setting-drawer-production-hint{margin-top:16px;font-size:12px}"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SettingDrawerComponent, [{
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
    }], function () { return [{ type: i0.NgZone }, { type: i0.ChangeDetectorRef }, { type: i1.SettingsService }, { type: i2.NzMessageService }]; }, { settings: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy1kcmF3ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcHJvLWxheW91dC9zcmMvbGliL3NldHRpbmctZHJhd2VyL3NldHRpbmctZHJhd2VyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Byby1sYXlvdXQvc3JjL2xpYi9zZXR0aW5nLWRyYXdlci9zZXR0aW5nLWRyYXdlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFFTixTQUFTLEVBQ1QsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ3VCYixnQ0FFb0M7SUFDbEMsd0NBQXdDO0lBQ3JDLDRCQUFpRDtJQUFBLFlBQWM7SUFBQSxpQkFBTztJQUN6RSxpQkFBZTtJQUNqQixpQkFBTzs7O0lBTEQsaUZBQTRELDhCQUFBO0lBRWxELGVBQXlCO0lBQXpCLDJDQUF5QjtJQUM5QixlQUEwQztJQUExQyxzREFBMEM7SUFBQyxlQUFjO0lBQWQsb0NBQWM7OztJQWdCcEUsZ0NBRW9DO0lBQ2xDLHdDQUF3QztJQUNyQyw0QkFBaUQ7SUFBQSxZQUFjO0lBQUEsaUJBQU87SUFDekUsaUJBQWU7SUFDakIsaUJBQU87OztJQUxELGlGQUE0RCw4QkFBQTtJQUVsRCxlQUF5QjtJQUF6QiwyQ0FBeUI7SUFDOUIsZUFBMEM7SUFBMUMsc0RBQTBDO0lBQUMsZUFBYztJQUFkLG9DQUFjOzs7SUFtQjFFLGdDQUNZOztJQURzRCx3Q0FBZ0I7Ozs7SUFKcEYscUNBRytCO0lBRHBCLDZOQUErQixjQUFjLGFBQVU7SUFFaEUsbUdBQ1k7SUFDWixnQ0FBd0Q7SUFDMUQsaUJBQVk7OztJQVBELHNEQUFpQztJQUk5QixlQUFvQztJQUFwQyw0REFB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RSxLQUFLO2FBQzNCO3NKQUdVLFFBQVE7a0JBQWhCLEtBQUs7WUFDSSxlQUFlO2tCQUF4QixNQUFNO1lBQ0csZ0JBQWdCO2tCQUF6QixNQUFNO1lBRWlELGtCQUFrQjtrQkFBekUsU0FBUzttQkFBQyxvQkFBb0IsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUM7WUFDaUIsMEJBQTBCO2tCQUF6RixTQUFTO21CQUFDLDRCQUE0QixFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQztZQUNRLHlCQUF5QjtrQkFBdkYsU0FBUzttQkFBQywyQkFBMkIsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUM7WUFDUSx3QkFBd0I7a0JBQXJGLFNBQVM7bUJBQUMsMEJBQTBCLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDO1lBQ1csMEJBQTBCO2tCQUF6RixTQUFTO21CQUFDLDRCQUE0QixFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQztZQUNNLHVCQUF1QjtrQkFBbkYsU0FBUzttQkFBQyx5QkFBeUIsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCwgTmdab25lLFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTZXR0aW5nc30gZnJvbSAnLi4vY29yZS9kZWZhdWx0LXNldHRpbmdzJztcbmltcG9ydCB7TnpNZXNzYWdlU2VydmljZX0gZnJvbSAnbmctem9ycm8tYW50ZC9tZXNzYWdlJztcbmltcG9ydCB7U2V0dGluZ3NTZXJ2aWNlfSBmcm9tICcuLi9jb3JlL3NldHRpbmdzLnNlcnZpY2UnO1xuXG5pbnRlcmZhY2UgU2V0dGluZ0l0ZW1Qcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGFjdGlvbjogVGVtcGxhdGVSZWY8dm9pZD5bXTtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBkaXNhYmxlZFJlYXNvbj86IHN0cmluZztcbn1cblxudHlwZSBNZXJnZXJTZXR0aW5nc1R5cGU8VD4gPSBQYXJ0aWFsPFQ+ICYge1xuICBwcmltYXJ5Q29sb3I/OiBzdHJpbmc7XG4gIGNvbG9yV2Vhaz86IGJvb2xlYW47XG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwcm8tc2V0dGluZy1kcmF3ZXInLFxuICB0ZW1wbGF0ZVVybDogJ3NldHRpbmctZHJhd2VyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NldHRpbmctZHJhd2VyLmNvbXBvbmVudC5sZXNzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBleHBvcnRBczogJ3Byb1NldHRpbmdEcmF3ZXInLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBTZXR0aW5nRHJhd2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBzZXR0aW5nczogTWVyZ2VyU2V0dGluZ3NUeXBlPFNldHRpbmdzPjtcbiAgQE91dHB1dCgpIG9uU2V0dGluZ0NoYW5nZTogRXZlbnRFbWl0dGVyPE1lcmdlclNldHRpbmdzVHlwZTxTZXR0aW5ncz4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25Db2xsYXBzZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIEBWaWV3Q2hpbGQoJ3JlbmRlckl0ZW1UZW1wbGF0ZScsIHtzdGF0aWM6IHRydWV9KSBwdWJsaWMgcmVuZGVySXRlbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQFZpZXdDaGlsZCgnY29udGVudFdpZHRoQWN0aW9uVGVtcGxhdGUnLCB7c3RhdGljOiB0cnVlfSkgcHVibGljIGNvbnRlbnRXaWR0aEFjdGlvblRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQFZpZXdDaGlsZCgnZml4ZWRIZWFkZXJBY3Rpb25UZW1wbGF0ZScsIHtzdGF0aWM6IHRydWV9KSBwdWJsaWMgZml4ZWRIZWFkZXJBY3Rpb25UZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBWaWV3Q2hpbGQoJ2hpZGVIZWFkZXJBY3Rpb25UZW1wbGF0ZScsIHtzdGF0aWM6IHRydWV9KSBwdWJsaWMgaGlkZUhlYWRlckFjdGlvblRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQFZpZXdDaGlsZCgnZml4ZWRTaWRlYmFyQWN0aW9uVGVtcGxhdGUnLCB7c3RhdGljOiB0cnVlfSkgcHVibGljIGZpeGVkU2lkZWJhckFjdGlvblRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQFZpZXdDaGlsZCgnY29sb3JXZWFrQWN0aW9uVGVtcGxhdGUnLCB7c3RhdGljOiB0cnVlfSkgcHVibGljIGNvbG9yV2Vha0FjdGlvblRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBjb2xsYXBzZSA9IGZhbHNlO1xuICBwYWdlU3R5bGVMaXN0OiBhbnlbXTtcbiAgbmF2aWdhdGlvbk1vZGVMaXN0OiBhbnlbXTtcbiAgbGF5b3V0U2V0dGluZzogU2V0dGluZ0l0ZW1Qcm9wc1tdO1xuICBvdGhlclNldHRpbmdzOiBTZXR0aW5nSXRlbVByb3BzW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB6b25lOiBOZ1pvbmUsXG4gICAgICAgICAgICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBzZXR0aW5nc1NlcnZpY2U6IFNldHRpbmdzU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTnpNZXNzYWdlU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5wYWdlU3R5bGVMaXN0ID0gW1xuICAgICAge1xuICAgICAgICBrZXk6ICdkYXJrJyxcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3MvYW50ZmluY2RuL1h3Rk9GYkxrU00vTENrcXFZTm12QkVib2tTRHNjcm0uc3ZnJyxcbiAgICAgICAgdGl0bGU6ICfmmpfoibLoj5zljZXpo47moLwnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6ICdsaWdodCcsXG4gICAgICAgIHVybDogJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL2FudGZpbmNkbi9OUSUyNHpvaXNhRDIvanBSa1pRTXlZUnJ5cnlQTnR5SUMuc3ZnJyxcbiAgICAgICAgdGl0bGU6ICfkuq7oibLoj5zljZXpo47moLwnXG4gICAgICB9LFxuICAgIF07XG5cbiAgICB0aGlzLm5hdmlnYXRpb25Nb2RlTGlzdCA9IFtcbiAgICAgIHtcbiAgICAgICAga2V5OiAnc2lkZW1lbnUnLFxuICAgICAgICB1cmw6ICdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9hbnRmaW5jZG4vWHdGT0ZiTGtTTS9MQ2txcVlObXZCRWJva1NEc2NybS5zdmcnLFxuICAgICAgICB0aXRsZTogJ+S+p+i+ueiPnOWNleW4g+WxgCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ3RvcG1lbnUnLFxuICAgICAgICB1cmw6ICdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9hbnRmaW5jZG4vVVJFVFk4JTI0U1RwL0tETkRCYnJpSmhMd3VxTW94Y0FyLnN2ZycsXG4gICAgICAgIHRpdGxlOiAn6aG26YOo6I+c5Y2V5biD5bGAJ1xuICAgICAgfSxcbiAgICBdO1xuXG4gICAgdGhpcy5sYXlvdXRTZXR0aW5nID0gW1xuICAgICAge1xuICAgICAgICB0aXRsZTogJ+WGheWuueWMuuWfn+WuveW6picsXG4gICAgICAgIGFjdGlvbjogW3RoaXMuY29udGVudFdpZHRoQWN0aW9uVGVtcGxhdGVdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ+WbuuWumiBIZWFkZXInLFxuICAgICAgICBhY3Rpb246IFt0aGlzLmZpeGVkSGVhZGVyQWN0aW9uVGVtcGxhdGVdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ+S4i+a7keaXtumakOiXjyBIZWFkZXInLFxuICAgICAgICBkaXNhYmxlZDogIXRoaXMuc2V0dGluZ3MuZml4ZWRIZWFkZXIsXG4gICAgICAgIGRpc2FibGVkUmVhc29uOiAn5Zu65a6aIEhlYWRlciDml7blj6/phY3nva4nLFxuICAgICAgICBhY3Rpb246IFt0aGlzLmhpZGVIZWFkZXJBY3Rpb25UZW1wbGF0ZV1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAn5Zu65a6a5L6n6L656I+c5Y2VJyxcbiAgICAgICAgZGlzYWJsZWQ6IHRoaXMuc2V0dGluZ3MubGF5b3V0ID09PSAndG9wbWVudScsXG4gICAgICAgIGRpc2FibGVkUmVhc29uOiAn5L6n6L656I+c5Y2V5biD5bGA5pe25Y+v6YWN572uJyxcbiAgICAgICAgYWN0aW9uOiBbdGhpcy5maXhlZFNpZGViYXJBY3Rpb25UZW1wbGF0ZV1cbiAgICAgIH0sXG4gICAgXTtcblxuICAgIHRoaXMub3RoZXJTZXR0aW5ncyA9IFtcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICfoibLlvLHmqKHlvI8nLFxuICAgICAgICBhY3Rpb246IFt0aGlzLmNvbG9yV2Vha0FjdGlvblRlbXBsYXRlXVxuICAgICAgfVxuICAgIF07XG4gIH1cblxuICBjaGFuZ2VTZXR0aW5nKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgYm9vbGVhbikge1xuICAgIHRoaXMuc2V0dGluZ3Nba2V5XSA9IHZhbHVlO1xuICAgIGlmIChrZXkgPT09ICdsYXlvdXQnKSB7XG4gICAgICB0aGlzLnNldHRpbmdzLmNvbnRlbnRXaWR0aCA9IHZhbHVlID09PSAndG9wbWVudScgPyAnRml4ZWQnIDogJ0ZsdWlkJztcbiAgICAgIHRoaXMubGF5b3V0U2V0dGluZ1szXS5kaXNhYmxlZCA9IHZhbHVlID09PSAndG9wbWVudScgPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuICAgIGlmIChrZXkgPT09ICdmaXhlZEhlYWRlcicpIHtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmxheW91dFNldHRpbmdbMl0uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYXV0b0hpZGVIZWFkZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sYXlvdXRTZXR0aW5nWzJdLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXR0aW5nc1NlcnZpY2Uuc2V0U2V0dGluZ3Moa2V5LCB2YWx1ZSk7XG4gICAgdGhpcy5vblNldHRpbmdDaGFuZ2UuZW1pdCh0aGlzLnNldHRpbmdzKTtcbiAgfVxuXG4gIHRvZ2dsZXJDb250ZW50KCkge1xuICAgIHRoaXMuY29sbGFwc2UgPSAhdGhpcy5jb2xsYXBzZTtcbiAgICB0aGlzLm9uQ29sbGFwc2VDaGFuZ2UuZW1pdCh0aGlzLmNvbGxhcHNlKTtcbiAgfVxufVxuIiwiPG56LWRyYXdlciBbbnpWaXNpYmxlXT1cImNvbGxhcHNlXCJcbiAgICAgICAgICAgW256V2lkdGhdPVwiMzAwXCJcbiAgICAgICAgICAgKG56T25DbG9zZSk9XCJ0b2dnbGVyQ29udGVudCgpXCJcbiAgICAgICAgICAgW256UGxhY2VtZW50XT1cIidyaWdodCdcIlxuICAgICAgICAgICBzdHlsZT1cInotaW5kZXg6OTk5XCI+XG4gIDxkaXYgY2xhc3M9XCJhbnQtcHJvLXNldHRpbmctZHJhd2VyLWNvbnRlbnRcIj5cbiAgICA8ZGl2IHN0eWxlPVwibWFyZ2luLWJvdHRvbTogMjRweFwiPlxuICAgICAgPGgzIGNsYXNzPVwiYW50LXByby1zZXR0aW5nLWRyYXdlci10aXRsZVwiPlxuICAgICAgICDmlbTkvZPpo47moLzorr7nva5cbiAgICAgIDwvaDM+XG4gICAgICA8cHJvLWJsb2NrLWNoZWNrYm94IFtsaXN0XT1cInBhZ2VTdHlsZUxpc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwic2V0dGluZ3MubmF2VGhlbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAob25DaGFuZ2UpPVwiY2hhbmdlU2V0dGluZygnbmF2VGhlbWUnLCAkZXZlbnQpXCI+XG4gICAgICA8L3Byby1ibG9jay1jaGVja2JveD5cbiAgICA8L2Rpdj5cbiAgICA8cHJvLXRoZW1lLWNvbG9yIFt0aXRsZV09XCIn5Li76aKY6ImyKOaaguaXtuS4jeaUr+aMgSknXCJcbiAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJzZXR0aW5ncy5wcmltYXJ5Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgKG9uQ2hhbmdlKT1cImNoYW5nZVNldHRpbmcoJ3ByaW1hcnlDb2xvcicsICRldmVudClcIj5cbiAgICA8L3Byby10aGVtZS1jb2xvcj5cbiAgICA8bnotZGl2aWRlcj48L256LWRpdmlkZXI+XG5cbiAgICA8ZGl2IHN0eWxlPVwibWFyZ2luLWJvdHRvbTogMjRweFwiPlxuICAgICAgPGgzIGNsYXNzPVwiYW50LXByby1zZXR0aW5nLWRyYXdlci10aXRsZVwiPlxuICAgICAgICDlr7zoiKrmqKHlvI9cbiAgICAgIDwvaDM+XG4gICAgICA8cHJvLWJsb2NrLWNoZWNrYm94IFtsaXN0XT1cIm5hdmlnYXRpb25Nb2RlTGlzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJzZXR0aW5ncy5sYXlvdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAob25DaGFuZ2UpPVwiY2hhbmdlU2V0dGluZygnbGF5b3V0JywgJGV2ZW50KVwiPlxuICAgICAgPC9wcm8tYmxvY2stY2hlY2tib3g+XG4gICAgICA8bnotbGlzdCBbbnpTcGxpdF09XCJmYWxzZVwiXG4gICAgICAgICAgICAgICBbbnpEYXRhU291cmNlXT1cImxheW91dFNldHRpbmdcIlxuICAgICAgICAgICAgICAgW256UmVuZGVySXRlbV09XCJyZW5kZXJJdGVtVGVtcGxhdGUxXCI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjcmVuZGVySXRlbVRlbXBsYXRlMSBsZXQtaXRlbT5cbiAgICAgICAgICA8c3BhbiBuei10b29sdGlwXG4gICAgICAgICAgICAgICAgW256VG9vbHRpcFRpdGxlXT1cIiBpdGVtLmRpc2FibGVkID8gaXRlbS5kaXNhYmxlZFJlYXNvbiA6ICcnXCJcbiAgICAgICAgICAgICAgICBbbnpUb29sdGlwUGxhY2VtZW50XT1cIidsZWZ0J1wiPlxuICAgICAgICAgICAgPG56LWxpc3QtaXRlbSBbbnpBY3Rpb25zXT1cIml0ZW0uYWN0aW9uXCI+XG4gICAgICAgICAgICAgICA8c3BhbiBbc3R5bGUub3BhY2l0eV09XCJpdGVtLmRpc2FibGVkID8gMC41IDogMSBcIj57e2l0ZW0udGl0bGV9fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvbnotbGlzdC1pdGVtPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvbnotbGlzdD5cbiAgICA8L2Rpdj5cbiAgICA8bnotZGl2aWRlcj48L256LWRpdmlkZXI+XG5cbiAgICA8ZGl2IHN0eWxlPVwibWFyZ2luLWJvdHRvbTogMjRweFwiPlxuICAgICAgPGgzIGNsYXNzPVwiYW50LXByby1zZXR0aW5nLWRyYXdlci10aXRsZVwiPlxuICAgICAgICDlhbbku5borr7nva5cbiAgICAgIDwvaDM+XG4gICAgICA8bnotbGlzdCBbbnpTcGxpdF09XCJmYWxzZVwiXG4gICAgICAgICAgICAgICBbbnpEYXRhU291cmNlXT1cIm90aGVyU2V0dGluZ3NcIlxuICAgICAgICAgICAgICAgW256UmVuZGVySXRlbV09XCJyZW5kZXJJdGVtVGVtcGxhdGUyXCI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjcmVuZGVySXRlbVRlbXBsYXRlMiBsZXQtaXRlbT5cbiAgICAgICAgICA8c3BhbiBuei10b29sdGlwXG4gICAgICAgICAgICAgICAgW256VG9vbHRpcFRpdGxlXT1cIiBpdGVtLmRpc2FibGVkID8gaXRlbS5kaXNhYmxlZFJlYXNvbiA6ICcnXCJcbiAgICAgICAgICAgICAgICBbbnpUb29sdGlwUGxhY2VtZW50XT1cIidsZWZ0J1wiPlxuICAgICAgICAgICAgPG56LWxpc3QtaXRlbSBbbnpBY3Rpb25zXT1cIml0ZW0uYWN0aW9uXCI+XG4gICAgICAgICAgICAgICA8c3BhbiBbc3R5bGUub3BhY2l0eV09XCJpdGVtLmRpc2FibGVkID8gMC41IDogMSBcIj57e2l0ZW0udGl0bGV9fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvbnotbGlzdC1pdGVtPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvbnotbGlzdD5cbiAgICA8L2Rpdj5cbiAgICA8bnotZGl2aWRlcj48L256LWRpdmlkZXI+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJhbnQtcHJvLXNldHRpbmctZHJhd2VyLWhhbmRsZVwiIChjbGljayk9XCJ0b2dnbGVyQ29udGVudCgpXCI+XG4gICAgPGkgbnotaWNvbiBbbnpUeXBlXT1cImNvbGxhcHNlID8gJ2Nsb3NlJyA6ICdzZXR0aW5nJ1wiIHN0eWxlPVwiY29sb3I6ICNmZmY7Zm9udC1zaXplOiAyMHB4XCI+PC9pPlxuICA8L2Rpdj5cbjwvbnotZHJhd2VyPlxuXG48bmctdGVtcGxhdGUgI2NvbnRlbnRXaWR0aEFjdGlvblRlbXBsYXRlPlxuICA8bnotc2VsZWN0IFtuZ01vZGVsXT1cInNldHRpbmdzLmNvbnRlbnRXaWR0aFwiXG4gICAgICAgICAgICAgbnpTaXplPVwic21hbGxcIlxuICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImNoYW5nZVNldHRpbmcoJ2NvbnRlbnRXaWR0aCcsICRldmVudClcIlxuICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDgwcHhcIj5cbiAgICA8bnotb3B0aW9uICpuZ0lmPVwic2V0dGluZ3MubGF5b3V0ICE9PSAnc2lkZW1lbnUnXCIgbnpWYWx1ZT1cIkZpeGVkXCIgW256TGFiZWxdPVwiJ+WumuWuvSdcIj5cbiAgICA8L256LW9wdGlvbj5cbiAgICA8bnotb3B0aW9uIG56VmFsdWU9XCJGbHVpZFwiIFtuekxhYmVsXT1cIifmtYHlvI8nXCI+PC9uei1vcHRpb24+XG4gIDwvbnotc2VsZWN0PlxuPC9uZy10ZW1wbGF0ZT5cblxuPG5nLXRlbXBsYXRlICNmaXhlZEhlYWRlckFjdGlvblRlbXBsYXRlPlxuICA8bnotc3dpdGNoIG56U2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cIiEhc2V0dGluZ3MuZml4ZWRIZWFkZXJcIlxuICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInRoaXMuY2hhbmdlU2V0dGluZygnZml4ZWRIZWFkZXInLCAkZXZlbnQpXCI+XG4gIDwvbnotc3dpdGNoPlxuPC9uZy10ZW1wbGF0ZT5cbjxuZy10ZW1wbGF0ZSAjaGlkZUhlYWRlckFjdGlvblRlbXBsYXRlPlxuICA8bnotc3dpdGNoIG56U2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICBbbnpEaXNhYmxlZF09XCIhdGhpcy5zZXR0aW5ncy5maXhlZEhlYWRlclwiXG4gICAgICAgICAgICAgWyhuZ01vZGVsKV09XCIhIXNldHRpbmdzLmF1dG9IaWRlSGVhZGVyXCJcbiAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJ0aGlzLmNoYW5nZVNldHRpbmcoJ2F1dG9IaWRlSGVhZGVyJywgJGV2ZW50KVwiPlxuICA8L256LXN3aXRjaD5cbjwvbmctdGVtcGxhdGU+XG5cbjxuZy10ZW1wbGF0ZSAjZml4ZWRTaWRlYmFyQWN0aW9uVGVtcGxhdGU+XG4gIDxuei1zd2l0Y2ggbnpTaXplPVwic21hbGxcIlxuICAgICAgICAgICAgIFtuekRpc2FibGVkXT1cInRoaXMuc2V0dGluZ3MubGF5b3V0ID09PSAndG9wbWVudSdcIlxuICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiISFzZXR0aW5ncy5maXhTaWRlcmJhclwiXG4gICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwidGhpcy5jaGFuZ2VTZXR0aW5nKCdmaXhTaWRlcmJhcicsICRldmVudClcIj5cbiAgPC9uei1zd2l0Y2g+XG48L25nLXRlbXBsYXRlPlxuXG48bmctdGVtcGxhdGUgI2NvbG9yV2Vha0FjdGlvblRlbXBsYXRlPlxuICA8bnotc3dpdGNoIG56U2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cIiEhc2V0dGluZ3MuY29sb3JXZWFrXCJcbiAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJ0aGlzLmNoYW5nZVNldHRpbmcoJ2NvbG9yV2VhaycsICRldmVudClcIj5cbiAgPC9uei1zd2l0Y2g+XG48L25nLXRlbXBsYXRlPlxuIl19