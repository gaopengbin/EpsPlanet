import { __decorate } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { ChangeDetectionStrategy, Component, ContentChildren, EventEmitter, Input, Optional, Output, QueryList, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { merge, of, Subject, Subscription } from 'rxjs';
import { delay, filter, startWith, takeUntil } from 'rxjs/operators';
import { PREFIX, warnDeprecation } from 'ng-zorro-antd/core/logger';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { NzTabChangeEvent } from './interfaces';
import { ProTabNavBarComponent } from './tab-nav-bar.component';
import { ProTabComponent, PRO_TAB_SET } from './tab.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/common";
import * as i3 from "./tab-nav-bar.component";
import * as i4 from "./tab-nav-item.directive";
import * as i5 from "@angular/cdk/a11y";
import * as i6 from "./tab-close-button.component";
import * as i7 from "./tab-body.component";
function ProTabSetComponent_pro_tabs_nav_0_div_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 12);
} if (rf & 2) {
    const tab_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngTemplateOutlet", tab_r3.label);
} }
function ProTabSetComponent_pro_tabs_nav_0_div_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const tab_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(tab_r3.label);
} }
function ProTabSetComponent_pro_tabs_nav_0_div_1_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 13);
    i0.ɵɵlistener("click", function ProTabSetComponent_pro_tabs_nav_0_div_1_button_5_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r12); const i_r4 = i0.ɵɵnextContext().index; const ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.onClose(i_r4, $event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("closeIcon", tab_r3.nzCloseIcon);
} }
function ProTabSetComponent_pro_tabs_nav_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵlistener("click", function ProTabSetComponent_pro_tabs_nav_0_div_1_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r15); const tab_r3 = ctx.$implicit; const i_r4 = ctx.index; const ctx_r14 = i0.ɵɵnextContext(2); return ctx_r14.clickNavItem(tab_r3, i_r4); })("contextmenu", function ProTabSetComponent_pro_tabs_nav_0_div_1_Template_div_contextmenu_0_listener($event) { i0.ɵɵrestoreView(_r15); const tab_r3 = ctx.$implicit; const ctx_r16 = i0.ɵɵnextContext(2); return ctx_r16.contextmenuNavItem(tab_r3, $event); });
    i0.ɵɵelementStart(1, "div", 7);
    i0.ɵɵelementContainerStart(2, 8);
    i0.ɵɵtemplate(3, ProTabSetComponent_pro_tabs_nav_0_div_1_ng_container_3_Template, 1, 1, "ng-container", 9);
    i0.ɵɵtemplate(4, ProTabSetComponent_pro_tabs_nav_0_div_1_ng_container_4_Template, 2, 1, "ng-container", 10);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵtemplate(5, ProTabSetComponent_pro_tabs_nav_0_div_1_button_5_Template, 1, 1, "button", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = i0.ɵɵnextContext(2);
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
} }
function ProTabSetComponent_pro_tabs_nav_0_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "pro-tabs-nav", 4);
    i0.ɵɵlistener("tabScroll", function ProTabSetComponent_pro_tabs_nav_0_Template_pro_tabs_nav_tabScroll_0_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.nzTabListScroll.emit($event); })("selectFocusedIndex", function ProTabSetComponent_pro_tabs_nav_0_Template_pro_tabs_nav_selectFocusedIndex_0_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.setSelectedIndex($event); })("addClicked", function ProTabSetComponent_pro_tabs_nav_0_Template_pro_tabs_nav_addClicked_0_listener() { i0.ɵɵrestoreView(_r18); const ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.onAdd(); });
    i0.ɵɵtemplate(1, ProTabSetComponent_pro_tabs_nav_0_div_1_Template, 6, 19, "div", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngStyle", ctx_r0.nzTabBarStyle)("selectedIndex", ctx_r0.nzSelectedIndex || 0)("inkBarAnimated", ctx_r0.inkBarAnimated)("addable", ctx_r0.addable)("addIcon", ctx_r0.nzAddIcon)("hideBar", ctx_r0.nzHideAll)("position", ctx_r0.position)("extraTemplate", ctx_r0.nzTabBarExtraContent);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.tabs);
} }
function ProTabSetComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 14);
} if (rf & 2) {
    const tab_r21 = ctx.$implicit;
    const i_r22 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("active", ctx_r1.nzSelectedIndex == i_r22 && !ctx_r1.nzHideAll)("content", tab_r21.content)("forceRender", tab_r21.nzForceRender)("tabPaneAnimated", ctx_r1.tabPaneAnimated);
} }
let nextId = 0;
export class ProTabSetComponent {
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
ProTabSetComponent.ɵfac = function ProTabSetComponent_Factory(t) { return new (t || ProTabSetComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.Router, 8)); };
ProTabSetComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ProTabSetComponent, selectors: [["pro-tabset"]], contentQueries: function ProTabSetComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, ProTabComponent, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.allTabs = _t);
    } }, viewQuery: function ProTabSetComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(ProTabNavBarComponent, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tabNavBarRef = _t.first);
    } }, hostAttrs: [1, "ant-pro-tabs"], hostVars: 22, hostBindings: function ProTabSetComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("ant-pro-tabs-card", ctx.nzType === "card" || ctx.nzType === "editable-card")("ant-pro-tabs-editable", ctx.nzType === "editable-card")("ant-pro-tabs-editable-card", ctx.nzType === "editable-card")("ant-pro-tabs-centered", ctx.nzCentered)("ant-pro-tabs-top", ctx.nzTabPosition === "top")("ant-pro-tabs-bottom", ctx.nzTabPosition === "bottom")("ant-pro-tabs-left", ctx.nzTabPosition === "left")("ant-pro-tabs-right", ctx.nzTabPosition === "right")("ant-pro-tabs-default", ctx.nzSize === "default")("ant-pro-tabs-small", ctx.nzSize === "small")("ant-pro-tabs-large", ctx.nzSize === "large");
    } }, inputs: { nzSelectedIndex: "nzSelectedIndex", nzTabPosition: "nzTabPosition", nzTabBarExtraContent: "nzTabBarExtraContent", nzCanDeactivate: "nzCanDeactivate", nzAddIcon: "nzAddIcon", nzTabBarStyle: "nzTabBarStyle", nzType: "nzType", nzSize: "nzSize", nzAnimated: "nzAnimated", nzTabBarGutter: "nzTabBarGutter", nzHideAdd: "nzHideAdd", nzCentered: "nzCentered", nzHideAll: "nzHideAll", nzLinkRouter: "nzLinkRouter", nzLinkExact: "nzLinkExact", nzShowPagination: "nzShowPagination" }, outputs: { nzSelectChange: "nzSelectChange", nzSelectedIndexChange: "nzSelectedIndexChange", nzTabListScroll: "nzTabListScroll", nzClose: "nzClose", nzAdd: "nzAdd", nzOnNextClick: "nzOnNextClick", nzOnPrevClick: "nzOnPrevClick" }, exportAs: ["proTabset"], features: [i0.ɵɵProvidersFeature([
            {
                provide: PRO_TAB_SET,
                useExisting: ProTabSetComponent
            }
        ]), i0.ɵɵNgOnChangesFeature], decls: 4, vars: 14, consts: [[3, "ngStyle", "selectedIndex", "inkBarAnimated", "addable", "addIcon", "hideBar", "position", "extraTemplate", "tabScroll", "selectFocusedIndex", "addClicked", 4, "ngIf"], [1, "ant-pro-tabs-content-holder"], [1, "ant-pro-tabs-content"], ["pro-tab-body", "", 3, "active", "content", "forceRender", "tabPaneAnimated", 4, "ngFor", "ngForOf"], [3, "ngStyle", "selectedIndex", "inkBarAnimated", "addable", "addIcon", "hideBar", "position", "extraTemplate", "tabScroll", "selectFocusedIndex", "addClicked"], ["class", "ant-pro-tabs-tab", 3, "margin-right", "margin-bottom", "ant-pro-tabs-tab-active", "ant-pro-tabs-tab-disabled", "click", "contextmenu", 4, "ngFor", "ngForOf"], [1, "ant-pro-tabs-tab", 3, "click", "contextmenu"], ["role", "tab", "ProTabNavItem", "", "cdkMonitorElementFocus", "", 1, "ant-pro-tabs-tab-btn", 3, "disabled", "tab", "active"], [3, "ngSwitch"], [3, "ngTemplateOutlet", 4, "ngSwitchCase"], [4, "ngSwitchCase"], ["pro-tab-close-button", "", 3, "closeIcon", "click", 4, "ngIf"], [3, "ngTemplateOutlet"], ["pro-tab-close-button", "", 3, "closeIcon", "click"], ["pro-tab-body", "", 3, "active", "content", "forceRender", "tabPaneAnimated"]], template: function ProTabSetComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ProTabSetComponent_pro_tabs_nav_0_Template, 2, 9, "pro-tabs-nav", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵtemplate(3, ProTabSetComponent_div_3_Template, 1, 4, "div", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.tabs.length);
        i0.ɵɵadvance(2);
        i0.ɵɵstyleProp("margin-left", ctx.tabPaneAnimated ? -(ctx.nzSelectedIndex || 0) * 100 : null, "%");
        i0.ɵɵclassProp("ant-pro-tabs-content-top", ctx.nzTabPosition === "top")("ant-pro-tabs-content-bottom", ctx.nzTabPosition === "bottom")("ant-pro-tabs-content-left", ctx.nzTabPosition === "left")("ant-pro-tabs-content-right", ctx.nzTabPosition === "right")("ant-pro-tabs-content-animated", ctx.tabPaneAnimated);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.tabs);
    } }, directives: [i2.NgIf, i2.NgForOf, i3.ProTabNavBarComponent, i2.NgStyle, i4.ProTabNavItemDirective, i5.CdkMonitorFocus, i2.NgSwitch, i2.NgSwitchCase, i2.NgTemplateOutlet, i6.ProTabCloseButtonComponent, i7.ProTabBodyComponent], encapsulation: 2 });
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProTabSetComponent, [{
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
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.Router, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFic2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Byby1sYXlvdXQvc3JjL2xpYi90YWJzL3RhYnNldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7R0FHRztBQUVILE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQzNELE9BQU8sRUFHTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULGVBQWUsRUFDZixZQUFZLEVBQ1osS0FBSyxFQUlMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUVULFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxhQUFhLEVBQXlDLE1BQU0saUJBQWlCLENBQUM7QUFFdEYsT0FBTyxFQUFDLEtBQUssRUFBYyxFQUFFLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUNsRSxPQUFPLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBUyxTQUFTLEVBQUUsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFMUUsT0FBTyxFQUFDLE1BQU0sRUFBRSxlQUFlLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUVsRSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFFckQsT0FBTyxFQUVMLGdCQUFnQixFQU1qQixNQUFNLGNBQWMsQ0FBQztBQUN0QixPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUMsZUFBZSxFQUFFLFdBQVcsRUFBQyxNQUFNLGlCQUFpQixDQUFDOzs7Ozs7Ozs7O0lBd0R6Qyw0QkFBcUc7OztJQUE5QywrQ0FBOEI7OztJQUNyRiw2QkFBMEQ7SUFBQSxZQUFhO0lBQUEsMEJBQWU7OztJQUE1QixlQUFhO0lBQWIsa0NBQWE7Ozs7SUFFekUs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QkFBdkMsTUFBTTtZQUNZLGVBQWU7a0JBQWpDLE1BQU07WUFDWSxPQUFPO2tCQUF6QixNQUFNO1lBQ1ksS0FBSztrQkFBdkIsTUFBTTtZQU1rQixnQkFBZ0I7a0JBQXhDLEtBQUs7WUFLYSxhQUFhO2tCQUEvQixNQUFNO1lBS1ksYUFBYTtrQkFBL0IsTUFBTTtZQThCZ0QsT0FBTztrQkFBN0QsZUFBZTttQkFBQyxlQUFlLEVBQUUsRUFBQyxXQUFXLEVBQUUsSUFBSSxFQUFDO1lBQ25CLFlBQVk7a0JBQTdDLFNBQVM7bUJBQUMscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtjb2VyY2VOdW1iZXJQcm9wZXJ0eX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudENoZWNrZWQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05hdmlnYXRpb25FbmQsIFJvdXRlciwgUm91dGVyTGluaywgUm91dGVyTGlua1dpdGhIcmVmfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQge21lcmdlLCBPYnNlcnZhYmxlLCBvZiwgU3ViamVjdCwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7ZGVsYXksIGZpbHRlciwgZmlyc3QsIHN0YXJ0V2l0aCwgdGFrZVVudGlsfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7UFJFRklYLCB3YXJuRGVwcmVjYXRpb259IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9sb2dnZXInO1xuaW1wb3J0IHtOelNpemVMRFNUeXBlfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHtJbnB1dEJvb2xlYW59IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcblxuaW1wb3J0IHtcbiAgTnpBbmltYXRlZEludGVyZmFjZSxcbiAgTnpUYWJDaGFuZ2VFdmVudCxcbiAgTnpUYWJQb3NpdGlvbixcbiAgTnpUYWJQb3NpdGlvbk1vZGUsXG4gIE56VGFic0NhbkRlYWN0aXZhdGVGbixcbiAgTnpUYWJTY3JvbGxFdmVudCxcbiAgTnpUYWJUeXBlXG59IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5pbXBvcnQge1Byb1RhYk5hdkJhckNvbXBvbmVudH0gZnJvbSAnLi90YWItbmF2LWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHtQcm9UYWJDb21wb25lbnQsIFBST19UQUJfU0VUfSBmcm9tICcuL3RhYi5jb21wb25lbnQnO1xuXG5cbmxldCBuZXh0SWQgPSAwO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwcm8tdGFic2V0JyxcbiAgZXhwb3J0QXM6ICdwcm9UYWJzZXQnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5EZWZhdWx0LFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBQUk9fVEFCX1NFVCxcbiAgICAgIHVzZUV4aXN0aW5nOiBQcm9UYWJTZXRDb21wb25lbnRcbiAgICB9XG4gIF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgICA8cHJvLXRhYnMtbmF2XG4gICAgICAgICAgICAgICpuZ0lmPVwidGFicy5sZW5ndGhcIlxuICAgICAgICAgICAgICBbbmdTdHlsZV09XCJuelRhYkJhclN0eWxlXCJcbiAgICAgICAgICAgICAgW3NlbGVjdGVkSW5kZXhdPVwibnpTZWxlY3RlZEluZGV4IHx8IDBcIlxuICAgICAgICAgICAgICBbaW5rQmFyQW5pbWF0ZWRdPVwiaW5rQmFyQW5pbWF0ZWRcIlxuICAgICAgICAgICAgICBbYWRkYWJsZV09XCJhZGRhYmxlXCJcbiAgICAgICAgICAgICAgW2FkZEljb25dPVwibnpBZGRJY29uXCJcbiAgICAgICAgICAgICAgW2hpZGVCYXJdPVwibnpIaWRlQWxsXCJcbiAgICAgICAgICAgICAgW3Bvc2l0aW9uXT1cInBvc2l0aW9uXCJcbiAgICAgICAgICAgICAgW2V4dHJhVGVtcGxhdGVdPVwibnpUYWJCYXJFeHRyYUNvbnRlbnRcIlxuICAgICAgICAgICAgICAodGFiU2Nyb2xsKT1cIm56VGFiTGlzdFNjcm9sbC5lbWl0KCRldmVudClcIlxuICAgICAgICAgICAgICAoc2VsZWN0Rm9jdXNlZEluZGV4KT1cInNldFNlbGVjdGVkSW5kZXgoJGV2ZW50KVwiXG4gICAgICAgICAgICAgIChhZGRDbGlja2VkKT1cIm9uQWRkKClcIlxuICAgICAgPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYW50LXByby10YWJzLXRhYlwiXG4gICAgICAgICAgICAgICAgICBbc3R5bGUubWFyZ2luLXJpZ2h0LnB4XT1cInBvc2l0aW9uID09PSAnaG9yaXpvbnRhbCcgPyBuelRhYkJhckd1dHRlciA6IG51bGxcIlxuICAgICAgICAgICAgICAgICAgW3N0eWxlLm1hcmdpbi1ib3R0b20ucHhdPVwicG9zaXRpb24gPT09ICd2ZXJ0aWNhbCcgPyBuelRhYkJhckd1dHRlciA6IG51bGxcIlxuICAgICAgICAgICAgICAgICAgW2NsYXNzLmFudC1wcm8tdGFicy10YWItYWN0aXZlXT1cIm56U2VsZWN0ZWRJbmRleCA9PT0gaVwiXG4gICAgICAgICAgICAgICAgICBbY2xhc3MuYW50LXByby10YWJzLXRhYi1kaXNhYmxlZF09XCJ0YWIubnpEaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgICAoY2xpY2spPVwiY2xpY2tOYXZJdGVtKHRhYiwgaSlcIlxuICAgICAgICAgICAgICAgICAgKGNvbnRleHRtZW51KT1cImNvbnRleHRtZW51TmF2SXRlbSh0YWIsICRldmVudClcIlxuICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IHRhYiBvZiB0YWJzOyBsZXQgaSA9IGluZGV4XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICByb2xlPVwidGFiXCJcbiAgICAgICAgICAgICAgICAgICAgICBbYXR0ci50YWJJbmRleF09XCJnZXRUYWJJbmRleCh0YWIsIGkpXCJcbiAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWRpc2FibGVkXT1cInRhYi5uekRpc2FibGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLXNlbGVjdGVkXT1cIm56U2VsZWN0ZWRJbmRleCA9PT0gaSAmJiAhbnpIaWRlQWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cImdldFRhYkNvbnRlbnRJZChpKVwiXG4gICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cInRhYi5uekRpc2FibGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICBbdGFiXT1cInRhYlwiXG4gICAgICAgICAgICAgICAgICAgICAgW2FjdGl2ZV09XCJuelNlbGVjdGVkSW5kZXggPT09IGlcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYW50LXByby10YWJzLXRhYi1idG5cIlxuICAgICAgICAgICAgICAgICAgICAgIFByb1RhYk5hdkl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICBjZGtNb25pdG9yRWxlbWVudEZvY3VzXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNUZW1wbGF0ZVJlZih0YWIubGFiZWwpXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwidGFiLmxhYmVsXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzTm9uRW1wdHlTdHJpbmcodGFiLmxhYmVsKVwiPnt7dGFiLmxhYmVsfX08L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm8tdGFiLWNsb3NlLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cInRhYi5uekNsb3NhYmxlICYmIGNsb3NhYmxlICYmICF0YWIubnpEaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtjbG9zZUljb25dPVwidGFiLm56Q2xvc2VJY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uQ2xvc2UoaSwgJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICA+PC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9wcm8tdGFicy1uYXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LXByby10YWJzLWNvbnRlbnQtaG9sZGVyXCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJhbnQtcHJvLXRhYnMtY29udGVudFwiXG4gICAgICAgICAgICAgICAgICBbY2xhc3MuYW50LXByby10YWJzLWNvbnRlbnQtdG9wXT1cIm56VGFiUG9zaXRpb24gPT09ICd0b3AnXCJcbiAgICAgICAgICAgICAgICAgIFtjbGFzcy5hbnQtcHJvLXRhYnMtY29udGVudC1ib3R0b21dPVwibnpUYWJQb3NpdGlvbiA9PT0gJ2JvdHRvbSdcIlxuICAgICAgICAgICAgICAgICAgW2NsYXNzLmFudC1wcm8tdGFicy1jb250ZW50LWxlZnRdPVwibnpUYWJQb3NpdGlvbiA9PT0gJ2xlZnQnXCJcbiAgICAgICAgICAgICAgICAgIFtjbGFzcy5hbnQtcHJvLXRhYnMtY29udGVudC1yaWdodF09XCJuelRhYlBvc2l0aW9uID09PSAncmlnaHQnXCJcbiAgICAgICAgICAgICAgICAgIFtjbGFzcy5hbnQtcHJvLXRhYnMtY29udGVudC1hbmltYXRlZF09XCJ0YWJQYW5lQW5pbWF0ZWRcIlxuICAgICAgICAgICAgICAgICAgW3N0eWxlLm1hcmdpbi1sZWZ0LiVdPVwidGFiUGFuZUFuaW1hdGVkID8gLShuelNlbGVjdGVkSW5kZXggfHwgMCkgKiAxMDAgOiBudWxsXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBwcm8tdGFiLWJvZHlcbiAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgdGFiIG9mIHRhYnM7IGxldCBpID0gaW5kZXhcIlxuICAgICAgICAgICAgICAgICAgICAgIFthY3RpdmVdPVwibnpTZWxlY3RlZEluZGV4ID09IGkgJiYgIW56SGlkZUFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgW2NvbnRlbnRdPVwidGFiLmNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgIFtmb3JjZVJlbmRlcl09XCJ0YWIubnpGb3JjZVJlbmRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgW3RhYlBhbmVBbmltYXRlZF09XCJ0YWJQYW5lQW5pbWF0ZWRcIlxuICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgYCxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnYW50LXByby10YWJzJyxcbiAgICAnW2NsYXNzLmFudC1wcm8tdGFicy1jYXJkXSc6IGBuelR5cGUgPT09ICdjYXJkJyB8fCBuelR5cGUgPT09ICdlZGl0YWJsZS1jYXJkJ2AsXG4gICAgJ1tjbGFzcy5hbnQtcHJvLXRhYnMtZWRpdGFibGVdJzogYG56VHlwZSA9PT0gJ2VkaXRhYmxlLWNhcmQnYCxcbiAgICAnW2NsYXNzLmFudC1wcm8tdGFicy1lZGl0YWJsZS1jYXJkXSc6IGBuelR5cGUgPT09ICdlZGl0YWJsZS1jYXJkJ2AsXG4gICAgJ1tjbGFzcy5hbnQtcHJvLXRhYnMtY2VudGVyZWRdJzogYG56Q2VudGVyZWRgLFxuICAgICdbY2xhc3MuYW50LXByby10YWJzLXRvcF0nOiBgbnpUYWJQb3NpdGlvbiA9PT0gJ3RvcCdgLFxuICAgICdbY2xhc3MuYW50LXByby10YWJzLWJvdHRvbV0nOiBgbnpUYWJQb3NpdGlvbiA9PT0gJ2JvdHRvbSdgLFxuICAgICdbY2xhc3MuYW50LXByby10YWJzLWxlZnRdJzogYG56VGFiUG9zaXRpb24gPT09ICdsZWZ0J2AsXG4gICAgJ1tjbGFzcy5hbnQtcHJvLXRhYnMtcmlnaHRdJzogYG56VGFiUG9zaXRpb24gPT09ICdyaWdodCdgLFxuICAgICdbY2xhc3MuYW50LXByby10YWJzLWRlZmF1bHRdJzogYG56U2l6ZSA9PT0gJ2RlZmF1bHQnYCxcbiAgICAnW2NsYXNzLmFudC1wcm8tdGFicy1zbWFsbF0nOiBgbnpTaXplID09PSAnc21hbGwnYCxcbiAgICAnW2NsYXNzLmFudC1wcm8tdGFicy1sYXJnZV0nOiBgbnpTaXplID09PSAnbGFyZ2UnYFxuICB9XG59KVxuZXhwb3J0IGNsYXNzIFByb1RhYlNldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpXG4gIGdldCBuelNlbGVjdGVkSW5kZXgoKTogbnVtYmVyIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRJbmRleDtcbiAgfVxuXG4gIHNldCBuelNlbGVjdGVkSW5kZXgodmFsdWU6IG51bGwgfCBudW1iZXIpIHtcbiAgICB0aGlzLmluZGV4VG9TZWxlY3QgPSBjb2VyY2VOdW1iZXJQcm9wZXJ0eSh2YWx1ZSwgbnVsbCk7XG4gIH1cblxuICBASW5wdXQoKSBuelRhYlBvc2l0aW9uOiBOelRhYlBvc2l0aW9uID0gJ3RvcCc7XG4gIEBJbnB1dCgpIG56VGFiQmFyRXh0cmFDb250ZW50PzogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIG56Q2FuRGVhY3RpdmF0ZTogTnpUYWJzQ2FuRGVhY3RpdmF0ZUZuIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG56QWRkSWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PiA9ICdwbHVzJztcbiAgQElucHV0KCkgbnpUYWJCYXJTdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBuelR5cGU6IE56VGFiVHlwZSA9ICdsaW5lJztcbiAgQElucHV0KCkgbnpTaXplOiBOelNpemVMRFNUeXBlID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBuekFuaW1hdGVkOiBOekFuaW1hdGVkSW50ZXJmYWNlIHwgYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIG56VGFiQmFyR3V0dGVyPzogbnVtYmVyID0gdW5kZWZpbmVkO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpIaWRlQWRkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekNlbnRlcmVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekhpZGVBbGwgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56TGlua1JvdXRlciA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpMaW5rRXhhY3QgPSB0cnVlO1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNlbGVjdENoYW5nZTogRXZlbnRFbWl0dGVyPE56VGFiQ2hhbmdlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxOelRhYkNoYW5nZUV2ZW50Pih0cnVlKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56U2VsZWN0ZWRJbmRleENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56VGFiTGlzdFNjcm9sbCA9IG5ldyBFdmVudEVtaXR0ZXI8TnpUYWJTY3JvbGxFdmVudD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPHsgaW5kZXg6IG51bWJlciB9PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpBZGQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIE5vdCBzdXBwb3J0ZWQuXG4gICAqIEBicmVha2luZy1jaGFuZ2UgMTEuMC4wXG4gICAqL1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93UGFnaW5hdGlvbiA9IHRydWU7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBOb3Qgc3VwcG9ydGVkLlxuICAgKiBAYnJlYWtpbmctY2hhbmdlIDExLjAuMFxuICAgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25OZXh0Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBOb3Qgc3VwcG9ydGVkLlxuICAgKiBAYnJlYWtpbmctY2hhbmdlIDExLjAuMFxuICAgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25QcmV2Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgZ2V0IHBvc2l0aW9uKCk6IE56VGFiUG9zaXRpb25Nb2RlIHtcbiAgICByZXR1cm4gWyd0b3AnLCAnYm90dG9tJ10uaW5kZXhPZih0aGlzLm56VGFiUG9zaXRpb24pID09PSAtMSA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCc7XG4gIH1cblxuICBnZXQgYWRkYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uelR5cGUgPT09ICdlZGl0YWJsZS1jYXJkJyAmJiAhdGhpcy5uekhpZGVBZGQ7XG4gIH1cblxuICBnZXQgY2xvc2FibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnpUeXBlID09PSAnZWRpdGFibGUtY2FyZCc7XG4gIH1cblxuICBnZXQgbGluZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uelR5cGUgPT09ICdsaW5lJztcbiAgfVxuXG4gIGdldCBpbmtCYXJBbmltYXRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5saW5lICYmICh0eXBlb2YgdGhpcy5uekFuaW1hdGVkID09PSAnYm9vbGVhbicgPyB0aGlzLm56QW5pbWF0ZWQgOiB0aGlzLm56QW5pbWF0ZWQuaW5rQmFyKTtcbiAgfVxuXG4gIGdldCB0YWJQYW5lQW5pbWF0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMucG9zaXRpb24gPT09ICdob3Jpem9udGFsJyAmJiB0aGlzLmxpbmUgJiYgKHR5cGVvZiB0aGlzLm56QW5pbWF0ZWQgPT09ICdib29sZWFuJyA/IHRoaXMubnpBbmltYXRlZCA6IHRoaXMubnpBbmltYXRlZC50YWJQYW5lKVxuICAgICk7XG4gIH1cblxuICAvLyBQaWNrIHVwIG9ubHkgZGlyZWN0IGRlc2NlbmRhbnRzIHVuZGVyIGl2eSByZW5kZXJpbmcgZW5naW5lXG4gIC8vIFdlIGZpbHRlciBvdXQgb25seSB0aGUgdGFicyB0aGF0IGJlbG9uZyB0byB0aGlzIHRhYiBzZXQgaW4gYHRhYnNgLlxuICBAQ29udGVudENoaWxkcmVuKFByb1RhYkNvbXBvbmVudCwge2Rlc2NlbmRhbnRzOiB0cnVlfSkgYWxsVGFiczogUXVlcnlMaXN0PFByb1RhYkNvbXBvbmVudD4gPSBuZXcgUXVlcnlMaXN0PFByb1RhYkNvbXBvbmVudD4oKTtcbiAgQFZpZXdDaGlsZChQcm9UYWJOYXZCYXJDb21wb25lbnQpIHRhYk5hdkJhclJlZiE6IFByb1RhYk5hdkJhckNvbXBvbmVudDtcblxuICAvLyBBbGwgdGhlIGRpcmVjdCB0YWJzIGZvciB0aGlzIHRhYiBzZXRcbiAgdGFiczogUXVlcnlMaXN0PFByb1RhYkNvbXBvbmVudD4gPSBuZXcgUXVlcnlMaXN0PFByb1RhYkNvbXBvbmVudD4oKTtcblxuICBwcml2YXRlIHJlYWRvbmx5IHRhYlNldElkITogbnVtYmVyO1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBpbmRleFRvU2VsZWN0OiBudW1iZXIgfCBudWxsID0gMDtcbiAgcHJpdmF0ZSBzZWxlY3RlZEluZGV4OiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSB0YWJMYWJlbFN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgcHJpdmF0ZSB0YWJzU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuICBwcml2YXRlIGNhbkRlYWN0aXZhdGVTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBAT3B0aW9uYWwoKSBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgdGhpcy50YWJTZXRJZCA9IG5leHRJZCsrO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpPbk5leHRDbGljay5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICB3YXJuRGVwcmVjYXRpb24oYChuek9uTmV4dENsaWNrKSBvZiBwcm8tdGFic2V0IGlzIG5vdCBzdXBwb3J0LCB3aWxsIGJlIHJlbW92ZWQgaW4gMTEuMC4wYCk7XG4gICAgfVxuICAgIGlmICh0aGlzLm56T25QcmV2Q2xpY2sub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgd2FybkRlcHJlY2F0aW9uKGAobnpPblByZXZDbGljaykgb2YgcHJvLXRhYnNldCBpcyBub3Qgc3VwcG9ydCwgd2lsbCBiZSByZW1vdmVkIGluIDExLjAuMGApO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgICB0aGlzLnRhYnMuZGVzdHJveSgpO1xuICAgIHRoaXMudGFiTGFiZWxTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLnRhYnNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLmNhbkRlYWN0aXZhdGVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuc2V0VXBSb3V0ZXIoKTtcbiAgICB9KTtcbiAgICB0aGlzLnN1YnNjcmliZVRvVGFiTGFiZWxzKCk7XG4gICAgdGhpcy5zdWJzY3JpYmVUb0FsbFRhYkNoYW5nZXMoKTtcblxuICAgIC8vIFN1YnNjcmliZSB0byBjaGFuZ2VzIGluIHRoZSBhbW91bnQgb2YgdGFicywgaW4gb3JkZXIgdG8gYmVcbiAgICAvLyBhYmxlIHRvIHJlLXJlbmRlciB0aGUgY29udGVudCBhcyBuZXcgdGFicyBhcmUgYWRkZWQgb3IgcmVtb3ZlZC5cbiAgICB0aGlzLnRhYnNTdWJzY3JpcHRpb24gPSB0aGlzLnRhYnMuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgY29uc3QgaW5kZXhUb1NlbGVjdCA9IHRoaXMuY2xhbXBUYWJJbmRleCh0aGlzLmluZGV4VG9TZWxlY3QpO1xuXG4gICAgICAvLyBNYWludGFpbiB0aGUgcHJldmlvdXNseS1zZWxlY3RlZCB0YWIgaWYgYSBuZXcgdGFiIGlzIGFkZGVkIG9yIHJlbW92ZWQgYW5kIHRoZXJlIGlzIG5vXG4gICAgICAvLyBleHBsaWNpdCBjaGFuZ2UgdGhhdCBzZWxlY3RzIGEgZGlmZmVyZW50IHRhYi5cbiAgICAgIGlmIChpbmRleFRvU2VsZWN0ID09PSB0aGlzLnNlbGVjdGVkSW5kZXgpIHtcbiAgICAgICAgY29uc3QgdGFicyA9IHRoaXMudGFicy50b0FycmF5KCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHRhYnNbaV0uaXNBY3RpdmUpIHtcbiAgICAgICAgICAgIC8vIEFzc2lnbiBib3RoIHRvIHRoZSBgaW5kZXhUb1NlbGVjdGAgYW5kIGBzZWxlY3RlZEluZGV4YCBzbyB3ZSBkb24ndCBmaXJlIGEgY2hhbmdlZFxuICAgICAgICAgICAgLy8gZXZlbnQsIG90aGVyd2lzZSB0aGUgY29uc3VtZXIgbWF5IGVuZCB1cCBpbiBhbiBpbmZpbml0ZSBsb29wIGluIHNvbWUgZWRnZSBjYXNlcyBsaWtlXG4gICAgICAgICAgICAvLyBhZGRpbmcgYSB0YWIgd2l0aGluIHRoZSBgbnpTZWxlY3RlZEluZGV4Q2hhbmdlYCBldmVudC5cbiAgICAgICAgICAgIHRoaXMuaW5kZXhUb1NlbGVjdCA9IHRoaXMuc2VsZWN0ZWRJbmRleCA9IGk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuc3Vic2NyaWJlVG9UYWJMYWJlbHMoKTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuICAgIC8vIERvbid0IGNsYW1wIHRoZSBgaW5kZXhUb1NlbGVjdGAgaW1tZWRpYXRlbHkgaW4gdGhlIHNldHRlciBiZWNhdXNlIGl0IGNhbiBoYXBwZW4gdGhhdFxuICAgIC8vIHRoZSBhbW91bnQgb2YgdGFicyBjaGFuZ2VzIGJlZm9yZSB0aGUgYWN0dWFsIGNoYW5nZSBkZXRlY3Rpb24gcnVucy5cbiAgICBjb25zdCBpbmRleFRvU2VsZWN0ID0gKHRoaXMuaW5kZXhUb1NlbGVjdCA9IHRoaXMuY2xhbXBUYWJJbmRleCh0aGlzLmluZGV4VG9TZWxlY3QpKTtcblxuICAgIC8vIElmIHRoZXJlIGlzIGEgY2hhbmdlIGluIHNlbGVjdGVkIGluZGV4LCBlbWl0IGEgY2hhbmdlIGV2ZW50LiBTaG91bGQgbm90IHRyaWdnZXIgaWZcbiAgICAvLyB0aGUgc2VsZWN0ZWQgaW5kZXggaGFzIG5vdCB5ZXQgYmVlbiBpbml0aWFsaXplZC5cbiAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ICE9PSBpbmRleFRvU2VsZWN0KSB7XG4gICAgICBjb25zdCBpc0ZpcnN0UnVuID0gdGhpcy5zZWxlY3RlZEluZGV4ID09IG51bGw7XG5cbiAgICAgIGlmICghaXNGaXJzdFJ1bikge1xuICAgICAgICB0aGlzLm56U2VsZWN0Q2hhbmdlLmVtaXQodGhpcy5jcmVhdGVDaGFuZ2VFdmVudChpbmRleFRvU2VsZWN0KSk7XG4gICAgICB9XG5cbiAgICAgIC8vIENoYW5naW5nIHRoZXNlIHZhbHVlcyBhZnRlciBjaGFuZ2UgZGV0ZWN0aW9uIGhhcyBydW5cbiAgICAgIC8vIHNpbmNlIHRoZSBjaGVja2VkIGNvbnRlbnQgbWF5IGNvbnRhaW4gcmVmZXJlbmNlcyB0byB0aGVtLlxuICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMudGFicy5mb3JFYWNoKCh0YWIsIGluZGV4KSA9PiAodGFiLmlzQWN0aXZlID0gaW5kZXggPT09IGluZGV4VG9TZWxlY3QpKTtcblxuICAgICAgICBpZiAoIWlzRmlyc3RSdW4pIHtcbiAgICAgICAgICB0aGlzLm56U2VsZWN0ZWRJbmRleENoYW5nZS5lbWl0KGluZGV4VG9TZWxlY3QpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBTZXR1cCB0aGUgcG9zaXRpb24gZm9yIGVhY2ggdGFiIGFuZCBvcHRpb25hbGx5IHNldHVwIGFuIG9yaWdpbiBvbiB0aGUgbmV4dCBzZWxlY3RlZCB0YWIuXG4gICAgdGhpcy50YWJzLmZvckVhY2goKHRhYjogUHJvVGFiQ29tcG9uZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICB0YWIucG9zaXRpb24gPSBpbmRleCAtIGluZGV4VG9TZWxlY3Q7XG5cbiAgICAgIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSBzZWxlY3RlZCB0YWIsIHRoZW4gc2V0IHVwIGFuIG9yaWdpbiBmb3IgdGhlIG5leHQgc2VsZWN0ZWQgdGFiXG4gICAgICAvLyBpZiBpdCBkb2Vzbid0IGhhdmUgb25lIGFscmVhZHkuXG4gICAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ICE9IG51bGwgJiYgdGFiLnBvc2l0aW9uID09PSAwICYmICF0YWIub3JpZ2luKSB7XG4gICAgICAgIHRhYi5vcmlnaW4gPSBpbmRleFRvU2VsZWN0IC0gdGhpcy5zZWxlY3RlZEluZGV4O1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleCAhPT0gaW5kZXhUb1NlbGVjdCkge1xuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gaW5kZXhUb1NlbGVjdDtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2xvc2UoaW5kZXg6IG51bWJlciwgZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMubnpDbG9zZS5lbWl0KHtpbmRleH0pO1xuICB9XG5cbiAgb25BZGQoKTogdm9pZCB7XG4gICAgdGhpcy5uekFkZC5lbWl0KCk7XG4gIH1cblxuICBwcml2YXRlIGNsYW1wVGFiSW5kZXgoaW5kZXg6IG51bWJlciB8IG51bGwpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLm1pbih0aGlzLnRhYnMubGVuZ3RoIC0gMSwgTWF0aC5tYXgoaW5kZXggfHwgMCwgMCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVDaGFuZ2VFdmVudChpbmRleDogbnVtYmVyKTogTnpUYWJDaGFuZ2VFdmVudCB7XG4gICAgY29uc3QgZXZlbnQgPSBuZXcgTnpUYWJDaGFuZ2VFdmVudCgpO1xuICAgIGV2ZW50LmluZGV4ID0gaW5kZXg7XG4gICAgaWYgKHRoaXMudGFicyAmJiB0aGlzLnRhYnMubGVuZ3RoKSB7XG4gICAgICBldmVudC50YWIgPSB0aGlzLnRhYnMudG9BcnJheSgpW2luZGV4XTtcbiAgICAgIHRoaXMudGFicy5mb3JFYWNoKCh0YWIsIGkpID0+IHtcbiAgICAgICAgaWYgKGkgIT09IGluZGV4KSB7XG4gICAgICAgICAgdGFiLm56RGVzZWxlY3QuZW1pdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGV2ZW50LnRhYi5uelNlbGVjdC5lbWl0KCk7XG4gICAgfVxuICAgIHJldHVybiBldmVudDtcbiAgfVxuXG4gIHByaXZhdGUgc3Vic2NyaWJlVG9UYWJMYWJlbHMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudGFiTGFiZWxTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMudGFiTGFiZWxTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICB0aGlzLnRhYkxhYmVsU3Vic2NyaXB0aW9uID0gbWVyZ2UoLi4udGhpcy50YWJzLm1hcCh0YWIgPT4gdGFiLnN0YXRlQ2hhbmdlcykpLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKSk7XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmliZVRvQWxsVGFiQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLmFsbFRhYnMuY2hhbmdlcy5waXBlKHN0YXJ0V2l0aCh0aGlzLmFsbFRhYnMpKS5zdWJzY3JpYmUoKHRhYnM6IFF1ZXJ5TGlzdDxQcm9UYWJDb21wb25lbnQ+KSA9PiB7XG4gICAgICB0aGlzLnRhYnMucmVzZXQodGFicy5maWx0ZXIodGFiID0+IHRhYi5jbG9zZXN0VGFiU2V0ID09PSB0aGlzKSk7XG4gICAgICB0aGlzLnRhYnMubm90aWZ5T25DaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBjYW5EZWFjdGl2YXRlRnVuKHByZTogbnVtYmVyLCBuZXh0OiBudW1iZXIpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gb2YodHJ1ZSk7XG4gIH1cblxuICBjbGlja05hdkl0ZW0odGFiOiBQcm9UYWJDb21wb25lbnQsIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoIXRhYi5uekRpc2FibGVkKSB7XG4gICAgICAvLyBpZ25vcmUgbnpDYW5EZWFjdGl2YXRlXG4gICAgICB0YWIubnpDbGljay5lbWl0KCk7XG4gICAgICB0aGlzLnNldFNlbGVjdGVkSW5kZXgoaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnRleHRtZW51TmF2SXRlbSh0YWI6IFByb1RhYkNvbXBvbmVudCwgZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGFiLm56RGlzYWJsZWQpIHtcbiAgICAgIC8vIGlnbm9yZSBuekNhbkRlYWN0aXZhdGVcbiAgICAgIHRhYi5uekNvbnRleHRtZW51LmVtaXQoZSk7XG4gICAgfVxuICB9XG5cbiAgc2V0U2VsZWN0ZWRJbmRleChpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5jYW5EZWFjdGl2YXRlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5jYW5EZWFjdGl2YXRlU3Vic2NyaXB0aW9uID0gdGhpcy5jYW5EZWFjdGl2YXRlRnVuKHRoaXMuc2VsZWN0ZWRJbmRleCEsIGluZGV4KS5zdWJzY3JpYmUoY2FuID0+IHtcbiAgICAgIGlmIChjYW4pIHtcbiAgICAgICAgdGhpcy5uelNlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy50YWJOYXZCYXJSZWYuZm9jdXNJbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGdldFRhYkluZGV4KHRhYjogUHJvVGFiQ29tcG9uZW50LCBpbmRleDogbnVtYmVyKTogbnVtYmVyIHwgbnVsbCB7XG4gICAgaWYgKHRhYi5uekRpc2FibGVkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRJbmRleCA9PT0gaW5kZXggPyAwIDogLTE7XG4gIH1cblxuICBnZXRUYWJDb250ZW50SWQoaTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYHByby10YWJzLSR7dGhpcy50YWJTZXRJZH0tdGFiLSR7aX1gO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRVcFJvdXRlcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uekxpbmtSb3V0ZXIpIHtcbiAgICAgIGlmICghdGhpcy5yb3V0ZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke1BSRUZJWH0geW91IHNob3VsZCBpbXBvcnQgJ1JvdXRlck1vZHVsZScgaWYgeW91IHdhbnQgdG8gdXNlICduekxpbmtSb3V0ZXInIWApO1xuICAgICAgfVxuICAgICAgdGhpcy5yb3V0ZXIuZXZlbnRzXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgICAgICBmaWx0ZXIoZSA9PiBlIGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCksXG4gICAgICAgICAgc3RhcnRXaXRoKHRydWUpLFxuICAgICAgICAgIGRlbGF5KDApXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy51cGRhdGVSb3V0ZXJBY3RpdmUoKTtcbiAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVSb3V0ZXJBY3RpdmUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucm91dGVyLm5hdmlnYXRlZCkge1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmZpbmRTaG91bGRBY3RpdmVUYWJJbmRleCgpO1xuICAgICAgaWYgKGluZGV4ICE9PSB0aGlzLnNlbGVjdGVkSW5kZXgpIHtcbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZEluZGV4KGluZGV4KTtcbiAgICAgICAgdGhpcy5uelNlbGVjdGVkSW5kZXhDaGFuZ2UuZW1pdChpbmRleCk7XG4gICAgICB9XG4gICAgICB0aGlzLm56SGlkZUFsbCA9IGluZGV4ID09PSAtMTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZpbmRTaG91bGRBY3RpdmVUYWJJbmRleCgpOiBudW1iZXIge1xuICAgIGNvbnN0IHRhYnMgPSB0aGlzLnRhYnMudG9BcnJheSgpO1xuICAgIGNvbnN0IGlzQWN0aXZlID0gdGhpcy5pc0xpbmtBY3RpdmUodGhpcy5yb3V0ZXIpO1xuXG4gICAgcmV0dXJuIHRhYnMuZmluZEluZGV4KHRhYiA9PiB7XG4gICAgICBjb25zdCBjID0gdGFiLmxpbmtEaXJlY3RpdmU7XG4gICAgICByZXR1cm4gYyA/IGlzQWN0aXZlKGMucm91dGVyTGluaykgfHwgaXNBY3RpdmUoYy5yb3V0ZXJMaW5rV2l0aEhyZWYpIDogZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGlzTGlua0FjdGl2ZShyb3V0ZXI6IFJvdXRlcik6IChsaW5rPzogUm91dGVyTGluayB8IFJvdXRlckxpbmtXaXRoSHJlZikgPT4gYm9vbGVhbiB7XG4gICAgcmV0dXJuIChsaW5rPzogUm91dGVyTGluayB8IFJvdXRlckxpbmtXaXRoSHJlZikgPT4gKGxpbmsgPyByb3V0ZXIuaXNBY3RpdmUobGluay51cmxUcmVlLCB0aGlzLm56TGlua0V4YWN0KSA6IGZhbHNlKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnbnpTaG93UGFnaW5hdGlvbicpKSB7XG4gICAgICB3YXJuRGVwcmVjYXRpb24oYFtuek9uUHJldkNsaWNrXSBvZiBwcm8tdGFic2V0IGlzIG5vdCBzdXBwb3J0LCB3aWxsIGJlIHJlbW92ZWQgaW4gMTEuMC4wYCk7XG4gICAgfVxuICB9XG5cbiAgaXNOb25FbXB0eVN0cmluZyh2YWx1ZToge30pOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZSAhPT0gJyc7XG4gIH1cblxuICBpc1RlbXBsYXRlUmVmKHZhbHVlOiB7fSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmO1xuICB9XG59XG4iXX0=