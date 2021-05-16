/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { FocusKeyManager } from '@angular/cdk/a11y';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { DOWN_ARROW, ENTER, hasModifierKey, LEFT_ARROW, RIGHT_ARROW, SPACE, UP_ARROW } from '@angular/cdk/keycodes';
import { ChangeDetectionStrategy, Component, ContentChildren, EventEmitter, Input, Optional, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { animationFrameScheduler, asapScheduler, merge, of, Subject } from 'rxjs';
import { auditTime, takeUntil } from 'rxjs/operators';
import { ProTabAddButtonComponent } from './tab-add-button.component';
import { ProTabNavItemDirective } from './tab-nav-item.directive';
import { ProTabNavOperationComponent } from './tab-nav-operation.component';
import { ProTabsInkBarDirective } from './tabs-ink-bar.directive';
import { reqAnimFrame } from "ng-zorro-antd/core/polyfill";
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
import * as i2 from "../core/resize-observers.service";
import * as i3 from "@angular/cdk/bidi";
import * as i4 from "./tab-scroll-list.directive";
import * as i5 from "@angular/common";
import * as i6 from "./tabs-ink-bar.directive";
import * as i7 from "./tab-nav-operation.component";
import * as i8 from "./tab-add-button.component";
const _c0 = ["navWarp"];
const _c1 = ["navList"];
function ProTabNavBarComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 8);
    i0.ɵɵlistener("click", function ProTabNavBarComponent_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.addClicked.emit(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("addIcon", ctx_r2.addIcon);
} }
function ProTabNavBarComponent_div_8_1_ng_template_0_Template(rf, ctx) { }
function ProTabNavBarComponent_div_8_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ProTabNavBarComponent_div_8_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function ProTabNavBarComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtemplate(1, ProTabNavBarComponent_div_8_1_Template, 1, 0, undefined, 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r3.extraTemplate);
} }
const _c2 = ["*"];
const RESIZE_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? animationFrameScheduler : asapScheduler;
const CSS_TRANSFORM_TIME = 150;
export class ProTabNavBarComponent {
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
ProTabNavBarComponent.ɵfac = function ProTabNavBarComponent_Factory(t) { return new (t || ProTabNavBarComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i1.ViewportRuler), i0.ɵɵdirectiveInject(i2.NzResizeObserver), i0.ɵɵdirectiveInject(i3.Directionality, 8)); };
ProTabNavBarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ProTabNavBarComponent, selectors: [["pro-tabs-nav"]], contentQueries: function ProTabNavBarComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, ProTabNavItemDirective, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.items = _t);
    } }, viewQuery: function ProTabNavBarComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 3);
        i0.ɵɵviewQuery(_c1, 3);
        i0.ɵɵviewQuery(ProTabNavOperationComponent, 3);
        i0.ɵɵviewQuery(ProTabAddButtonComponent, 1);
        i0.ɵɵviewQuery(ProTabsInkBarDirective, 3);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.navWarpRef = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.navListRef = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.operationRef = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.addBtnRef = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inkBar = _t.first);
    } }, hostAttrs: ["role", "tablist", 1, "ant-pro-tabs-nav"], hostBindings: function ProTabNavBarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("keydown", function ProTabNavBarComponent_keydown_HostBindingHandler($event) { return ctx.handleKeydown($event); });
    } }, inputs: { position: "position", addable: "addable", hideBar: "hideBar", addIcon: "addIcon", inkBarAnimated: "inkBarAnimated", extraTemplate: "extraTemplate", selectedIndex: "selectedIndex" }, outputs: { indexFocused: "indexFocused", selectFocusedIndex: "selectFocusedIndex", addClicked: "addClicked", tabScroll: "tabScroll" }, exportAs: ["ProTabsNav"], features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c2, decls: 9, vars: 16, consts: [[1, "ant-pro-tabs-nav-wrap"], ["navWarp", ""], ["ProTabScrollList", "", 1, "ant-pro-tabs-nav-list", 3, "offsetChange", "tabScroll"], ["navList", ""], ["pro-tab-add-button", "", 3, "addIcon", "click", 4, "ngIf"], ["pro-tabs-ink-bar", "", 3, "hidden", "position", "animated"], [3, "addIcon", "addable", "items", "addClicked", "selected"], ["class", "ant-pro-tabs-extra-content", 4, "ngIf"], ["pro-tab-add-button", "", 3, "addIcon", "click"], [1, "ant-pro-tabs-extra-content"], [4, "ngTemplateOutlet"]], template: function ProTabNavBarComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        i0.ɵɵclassProp("ant-pro-tabs-nav-wrap-ping-left", ctx.pingLeft)("ant-pro-tabs-nav-wrap-ping-right", ctx.pingRight)("ant-pro-tabs-nav-wrap-ping-top", ctx.pingTop)("ant-pro-tabs-nav-wrap-ping-bottom", ctx.pingBottom);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", ctx.showAddButton);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("hidden", ctx.hideBar)("position", ctx.position)("animated", ctx.inkBarAnimated);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("addIcon", ctx.addIcon)("addable", ctx.addable)("items", ctx.hiddenItems);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.extraTemplate);
    } }, directives: [i4.ProTabScrollListDirective, i5.NgIf, i6.ProTabsInkBarDirective, i7.ProTabNavOperationComponent, i8.ProTabAddButtonComponent, i5.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProTabNavBarComponent, [{
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
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.NgZone }, { type: i1.ViewportRuler }, { type: i2.NzResizeObserver }, { type: i3.Directionality, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLW5hdi1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcHJvLWxheW91dC9zcmMvbGliL3RhYnMvdGFiLW5hdi1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7R0FHRztBQUVILE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVwRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFcEgsT0FBTyxFQUdMLHVCQUF1QixFQUV2QixTQUFTLEVBQ1QsZUFBZSxFQUVmLFlBQVksRUFDWixLQUFLLEVBS0wsUUFBUSxFQUNSLE1BQU0sRUFJTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUl0RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVsRSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sNkJBQTZCLENBQUM7Ozs7Ozs7Ozs7Ozs7O0lBc0JqRCxpQ0FBaUc7SUFBNUIscUtBQVMs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MkIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDbkIsU0FBUztrQkFBN0MsU0FBUzttQkFBQyx3QkFBd0I7WUFDa0IsTUFBTTtrQkFBMUQsU0FBUzttQkFBQyxzQkFBc0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDYSxLQUFLO2tCQUFwRSxlQUFlO21CQUFDLHNCQUFzQixFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IEZvY3VzS2V5TWFuYWdlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyBjb2VyY2VOdW1iZXJQcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyBET1dOX0FSUk9XLCBFTlRFUiwgaGFzTW9kaWZpZXJLZXksIExFRlRfQVJST1csIFJJR0hUX0FSUk9XLCBTUEFDRSwgVVBfQVJST1cgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHsgVmlld3BvcnRSdWxlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudENoZWNrZWQsXG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgYW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIsIGFzYXBTY2hlZHVsZXIsIG1lcmdlLCBvZiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgYXVkaXRUaW1lLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cblxuaW1wb3J0IHsgTnpUYWJQb3NpdGlvbk1vZGUsIE56VGFiU2Nyb2xsRXZlbnQsIE56VGFiU2Nyb2xsTGlzdE9mZnNldEV2ZW50IH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IFByb1RhYkFkZEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vdGFiLWFkZC1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IFByb1RhYk5hdkl0ZW1EaXJlY3RpdmUgfSBmcm9tICcuL3RhYi1uYXYtaXRlbS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUHJvVGFiTmF2T3BlcmF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi90YWItbmF2LW9wZXJhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvVGFic0lua0JhckRpcmVjdGl2ZSB9IGZyb20gJy4vdGFicy1pbmstYmFyLmRpcmVjdGl2ZSc7XG5pbXBvcnQge056UmVzaXplT2JzZXJ2ZXJ9IGZyb20gXCIuLi9jb3JlL3Jlc2l6ZS1vYnNlcnZlcnMuc2VydmljZVwiO1xuaW1wb3J0IHtyZXFBbmltRnJhbWV9IGZyb20gXCJuZy16b3Jyby1hbnRkL2NvcmUvcG9seWZpbGxcIjtcblxuY29uc3QgUkVTSVpFX1NDSEVEVUxFUiA9IHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgIT09ICd1bmRlZmluZWQnID8gYW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIgOiBhc2FwU2NoZWR1bGVyO1xuY29uc3QgQ1NTX1RSQU5TRk9STV9USU1FID0gMTUwO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwcm8tdGFicy1uYXYnLFxuICBleHBvcnRBczogJ1Byb1RhYnNOYXYnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJhbnQtcHJvLXRhYnMtbmF2LXdyYXBcIlxuICAgICAgW2NsYXNzLmFudC1wcm8tdGFicy1uYXYtd3JhcC1waW5nLWxlZnRdPVwicGluZ0xlZnRcIlxuICAgICAgW2NsYXNzLmFudC1wcm8tdGFicy1uYXYtd3JhcC1waW5nLXJpZ2h0XT1cInBpbmdSaWdodFwiXG4gICAgICBbY2xhc3MuYW50LXByby10YWJzLW5hdi13cmFwLXBpbmctdG9wXT1cInBpbmdUb3BcIlxuICAgICAgW2NsYXNzLmFudC1wcm8tdGFicy1uYXYtd3JhcC1waW5nLWJvdHRvbV09XCJwaW5nQm90dG9tXCJcbiAgICAgICNuYXZXYXJwXG4gICAgPlxuICAgICAgPGRpdiBjbGFzcz1cImFudC1wcm8tdGFicy1uYXYtbGlzdFwiICNuYXZMaXN0IFByb1RhYlNjcm9sbExpc3QgKG9mZnNldENoYW5nZSk9XCJvbk9mZnNldENoYW5nZSgkZXZlbnQpXCIgKHRhYlNjcm9sbCk9XCJ0YWJTY3JvbGwuZW1pdCgkZXZlbnQpXCI+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cInNob3dBZGRCdXR0b25cIiBwcm8tdGFiLWFkZC1idXR0b24gW2FkZEljb25dPVwiYWRkSWNvblwiIChjbGljayk9XCJhZGRDbGlja2VkLmVtaXQoKVwiPjwvYnV0dG9uPlxuICAgICAgICA8ZGl2IHByby10YWJzLWluay1iYXIgW2hpZGRlbl09XCJoaWRlQmFyXCIgW3Bvc2l0aW9uXT1cInBvc2l0aW9uXCIgW2FuaW1hdGVkXT1cImlua0JhckFuaW1hdGVkXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8cHJvLXRhYi1uYXYtb3BlcmF0aW9uXG4gICAgICAoYWRkQ2xpY2tlZCk9XCJhZGRDbGlja2VkLmVtaXQoKVwiXG4gICAgICAoc2VsZWN0ZWQpPVwib25TZWxlY3RlZEZyb21NZW51KCRldmVudClcIlxuICAgICAgW2FkZEljb25dPVwiYWRkSWNvblwiXG4gICAgICBbYWRkYWJsZV09XCJhZGRhYmxlXCJcbiAgICAgIFtpdGVtc109XCJoaWRkZW5JdGVtc1wiXG4gICAgPjwvcHJvLXRhYi1uYXYtb3BlcmF0aW9uPlxuICAgIDxkaXYgY2xhc3M9XCJhbnQtcHJvLXRhYnMtZXh0cmEtY29udGVudFwiICpuZ0lmPVwiZXh0cmFUZW1wbGF0ZVwiPlxuICAgICAgPG5nLXRlbXBsYXRlICpuZ1RlbXBsYXRlT3V0bGV0PVwiZXh0cmFUZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICByb2xlOiAndGFibGlzdCcsXG4gICAgY2xhc3M6ICdhbnQtcHJvLXRhYnMtbmF2JyxcbiAgICAnKGtleWRvd24pJzogJ2hhbmRsZUtleWRvd24oJGV2ZW50KSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBQcm9UYWJOYXZCYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIEFmdGVyQ29udGVudENoZWNrZWQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgaW5kZXhGb2N1c2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2VsZWN0Rm9jdXNlZEluZGV4OiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgYWRkQ2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHRhYlNjcm9sbCA9IG5ldyBFdmVudEVtaXR0ZXI8TnpUYWJTY3JvbGxFdmVudD4oKTtcblxuICBASW5wdXQoKSBwb3NpdGlvbjogTnpUYWJQb3NpdGlvbk1vZGUgPSAnaG9yaXpvbnRhbCc7XG4gIEBJbnB1dCgpIGFkZGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgaGlkZUJhcjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBhZGRJY29uOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+ID0gJ3BsdXMnO1xuICBASW5wdXQoKSBpbmtCYXJBbmltYXRlZCA9IHRydWU7XG4gIEBJbnB1dCgpIGV4dHJhVGVtcGxhdGU/OiBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBASW5wdXQoKVxuICBnZXQgc2VsZWN0ZWRJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZEluZGV4O1xuICB9XG4gIHNldCBzZWxlY3RlZEluZGV4KHZhbHVlOiBudW1iZXIpIHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGNvZXJjZU51bWJlclByb3BlcnR5KHZhbHVlKTtcbiAgICBpZiAodGhpcy5fc2VsZWN0ZWRJbmRleCAhPT0gbmV3VmFsdWUpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGVkSW5kZXggPSB2YWx1ZTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleENoYW5nZWQgPSB0cnVlO1xuICAgICAgaWYgKHRoaXMua2V5TWFuYWdlcikge1xuICAgICAgICB0aGlzLmtleU1hbmFnZXIudXBkYXRlQWN0aXZlSXRlbSh2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQFZpZXdDaGlsZCgnbmF2V2FycCcsIHsgc3RhdGljOiB0cnVlIH0pIG5hdldhcnBSZWYhOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgnbmF2TGlzdCcsIHsgc3RhdGljOiB0cnVlIH0pIG5hdkxpc3RSZWYhOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcbiAgQFZpZXdDaGlsZChQcm9UYWJOYXZPcGVyYXRpb25Db21wb25lbnQsIHsgc3RhdGljOiB0cnVlIH0pIG9wZXJhdGlvblJlZiE6IFByb1RhYk5hdk9wZXJhdGlvbkNvbXBvbmVudDtcbiAgQFZpZXdDaGlsZChQcm9UYWJBZGRCdXR0b25Db21wb25lbnQpIGFkZEJ0blJlZiE6IFByb1RhYkFkZEJ1dHRvbkNvbXBvbmVudDtcbiAgQFZpZXdDaGlsZChQcm9UYWJzSW5rQmFyRGlyZWN0aXZlLCB7IHN0YXRpYzogdHJ1ZSB9KSBpbmtCYXIhOiBQcm9UYWJzSW5rQmFyRGlyZWN0aXZlO1xuICBAQ29udGVudENoaWxkcmVuKFByb1RhYk5hdkl0ZW1EaXJlY3RpdmUsIHsgZGVzY2VuZGFudHM6IHRydWUgfSkgaXRlbXMhOiBRdWVyeUxpc3Q8UHJvVGFiTmF2SXRlbURpcmVjdGl2ZT47XG5cbiAgLyoqIFRyYWNrcyB3aGljaCBlbGVtZW50IGhhcyBmb2N1czsgdXNlZCBmb3Iga2V5Ym9hcmQgbmF2aWdhdGlvbiAqL1xuICBnZXQgZm9jdXNJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmtleU1hbmFnZXIgPyB0aGlzLmtleU1hbmFnZXIuYWN0aXZlSXRlbUluZGV4ISA6IDA7XG4gIH1cblxuICAvKiogV2hlbiB0aGUgZm9jdXMgaW5kZXggaXMgc2V0LCB3ZSBtdXN0IG1hbnVhbGx5IHNlbmQgZm9jdXMgdG8gdGhlIGNvcnJlY3QgbGFiZWwgKi9cbiAgc2V0IGZvY3VzSW5kZXgodmFsdWU6IG51bWJlcikge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkSW5kZXgodmFsdWUpIHx8IHRoaXMuZm9jdXNJbmRleCA9PT0gdmFsdWUgfHwgIXRoaXMua2V5TWFuYWdlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMua2V5TWFuYWdlci5zZXRBY3RpdmVJdGVtKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBzaG93QWRkQnV0dG9uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmhpZGRlbkl0ZW1zLmxlbmd0aCA9PT0gMCAmJiB0aGlzLmFkZGFibGU7XG4gIH1cblxuICB0cmFuc2xhdGU6IG51bGwgfCBzdHJpbmcgPSBudWxsO1xuICB0cmFuc2Zvcm1YID0gMDtcbiAgdHJhbnNmb3JtWSA9IDA7XG4gIHBpbmdMZWZ0ID0gZmFsc2U7XG4gIHBpbmdSaWdodCA9IGZhbHNlO1xuICBwaW5nVG9wID0gZmFsc2U7XG4gIHBpbmdCb3R0b20gPSBmYWxzZTtcbiAgaGlkZGVuSXRlbXM6IFByb1RhYk5hdkl0ZW1EaXJlY3RpdmVbXSA9IFtdO1xuXG4gIHByaXZhdGUga2V5TWFuYWdlciE6IEZvY3VzS2V5TWFuYWdlcjxQcm9UYWJOYXZJdGVtRGlyZWN0aXZlPjtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgX3NlbGVjdGVkSW5kZXggPSAwO1xuICBwcml2YXRlIHdyYXBwZXJXaWR0aCA9IDA7XG4gIHByaXZhdGUgd3JhcHBlckhlaWdodCA9IDA7XG4gIHByaXZhdGUgc2Nyb2xsTGlzdFdpZHRoID0gMDtcbiAgcHJpdmF0ZSBzY3JvbGxMaXN0SGVpZ2h0ID0gMDtcbiAgcHJpdmF0ZSBvcGVyYXRpb25XaWR0aCA9IDA7XG4gIHByaXZhdGUgb3BlcmF0aW9uSGVpZ2h0ID0gMDtcbiAgcHJpdmF0ZSBhZGRCdXR0b25XaWR0aCA9IDA7XG4gIHByaXZhdGUgYWRkQnV0dG9uSGVpZ2h0ID0gMDtcbiAgcHJpdmF0ZSBzZWxlY3RlZEluZGV4Q2hhbmdlZCA9IGZhbHNlO1xuICBwcml2YXRlIGxvY2tBbmltYXRpb25UaW1lb3V0SWQgPSAtMTtcbiAgcHJpdmF0ZSBjc3NUcmFuc2Zvcm1UaW1lV2FpdGluZ0lkID0gLTE7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSB2aWV3cG9ydFJ1bGVyOiBWaWV3cG9ydFJ1bGVyLFxuICAgIHByaXZhdGUgbnpSZXNpemVPYnNlcnZlcjogTnpSZXNpemVPYnNlcnZlcixcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcjogRGlyZWN0aW9uYWxpdHlcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge31cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgY29uc3QgZGlyQ2hhbmdlID0gdGhpcy5kaXIgPyB0aGlzLmRpci5jaGFuZ2UgOiBvZihudWxsKTtcbiAgICBjb25zdCByZXNpemUgPSB0aGlzLnZpZXdwb3J0UnVsZXIuY2hhbmdlKDE1MCk7XG5cbiAgICBjb25zdCByZWFsaWduID0gKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVTY3JvbGxMaXN0UG9zaXRpb24oKTtcbiAgICAgIHRoaXMuYWxpZ25JbmtCYXJUb1NlbGVjdGVkVGFiKCk7XG4gICAgfTtcbiAgICB0aGlzLmtleU1hbmFnZXIgPSBuZXcgRm9jdXNLZXlNYW5hZ2VyPFByb1RhYk5hdkl0ZW1EaXJlY3RpdmU+KHRoaXMuaXRlbXMpXG4gICAgICAud2l0aEhvcml6b250YWxPcmllbnRhdGlvbih0aGlzLmdldExheW91dERpcmVjdGlvbigpKVxuICAgICAgLndpdGhXcmFwKCk7XG4gICAgdGhpcy5rZXlNYW5hZ2VyLnVwZGF0ZUFjdGl2ZUl0ZW0oMCk7XG5cbiAgICByZXFBbmltRnJhbWUocmVhbGlnbik7XG5cbiAgICBtZXJnZSh0aGlzLm56UmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLm5hdldhcnBSZWYpLCB0aGlzLm56UmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLm5hdkxpc3RSZWYpKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLCBhdWRpdFRpbWUoMTYsIFJFU0laRV9TQ0hFRFVMRVIpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHJlYWxpZ24oKTtcbiAgICAgIH0pO1xuICAgIG1lcmdlKGRpckNoYW5nZSwgcmVzaXplLCB0aGlzLml0ZW1zLmNoYW5nZXMpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihyZWFsaWduKTtcbiAgICAgICAgdGhpcy5rZXlNYW5hZ2VyLndpdGhIb3Jpem9udGFsT3JpZW50YXRpb24odGhpcy5nZXRMYXlvdXREaXJlY3Rpb24oKSk7XG4gICAgICB9KTtcblxuICAgIHRoaXMua2V5TWFuYWdlci5jaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShuZXdGb2N1c0luZGV4ID0+IHtcbiAgICAgIHRoaXMuaW5kZXhGb2N1c2VkLmVtaXQobmV3Rm9jdXNJbmRleCk7XG4gICAgICB0aGlzLnNldFRhYkZvY3VzKG5ld0ZvY3VzSW5kZXgpO1xuICAgICAgdGhpcy5zY3JvbGxUb1RhYih0aGlzLmtleU1hbmFnZXIuYWN0aXZlSXRlbSEpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXhDaGFuZ2VkKSB7XG4gICAgICB0aGlzLnVwZGF0ZVNjcm9sbExpc3RQb3NpdGlvbigpO1xuICAgICAgdGhpcy5hbGlnbklua0JhclRvU2VsZWN0ZWRUYWIoKTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleENoYW5nZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmxvY2tBbmltYXRpb25UaW1lb3V0SWQpO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmNzc1RyYW5zZm9ybVRpbWVXYWl0aW5nSWQpO1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIG9uU2VsZWN0ZWRGcm9tTWVudSh0YWI6IFByb1RhYk5hdkl0ZW1EaXJlY3RpdmUpOiB2b2lkIHtcbiAgICBjb25zdCB0YWJJbmRleCA9IHRoaXMuaXRlbXMudG9BcnJheSgpLmZpbmRJbmRleChlID0+IGUgPT09IHRhYik7XG4gICAgaWYgKHRhYkluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy5rZXlNYW5hZ2VyLnVwZGF0ZUFjdGl2ZUl0ZW0odGFiSW5kZXgpO1xuICAgICAgaWYgKHRoaXMuZm9jdXNJbmRleCAhPT0gdGhpcy5zZWxlY3RlZEluZGV4KSB7XG4gICAgICAgIHRoaXMuc2VsZWN0Rm9jdXNlZEluZGV4LmVtaXQodGhpcy5mb2N1c0luZGV4KTtcbiAgICAgICAgdGhpcy5zY3JvbGxUb1RhYih0YWIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uT2Zmc2V0Q2hhbmdlKGU6IE56VGFiU2Nyb2xsTGlzdE9mZnNldEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMucG9zaXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgaWYgKHRoaXMubG9ja0FuaW1hdGlvblRpbWVvdXRJZCA9PT0gLTEpIHtcbiAgICAgICAgaWYgKHRoaXMudHJhbnNmb3JtWCA+PSAwICYmIGUueCA+IDApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudHJhbnNmb3JtWCA8PSB0aGlzLndyYXBwZXJXaWR0aCAtIHRoaXMuc2Nyb2xsTGlzdFdpZHRoICYmIGUueCA8IDApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGUuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMudHJhbnNmb3JtWCA9IHRoaXMuY2xhbXBUcmFuc2Zvcm1YKHRoaXMudHJhbnNmb3JtWCArIGUueCk7XG4gICAgICB0aGlzLnNldFRyYW5zZm9ybSh0aGlzLnRyYW5zZm9ybVgsIDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5sb2NrQW5pbWF0aW9uVGltZW91dElkID09PSAtMSkge1xuICAgICAgICBpZiAodGhpcy50cmFuc2Zvcm1ZID49IDAgJiYgZS55ID4gMCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50cmFuc2Zvcm1ZIDw9IHRoaXMud3JhcHBlckhlaWdodCAtIHRoaXMuc2Nyb2xsTGlzdEhlaWdodCAmJiBlLnkgPCAwKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLnRyYW5zZm9ybVkgPSB0aGlzLmNsYW1wVHJhbnNmb3JtWSh0aGlzLnRyYW5zZm9ybVkgKyBlLnkpO1xuICAgICAgdGhpcy5zZXRUcmFuc2Zvcm0oMCwgdGhpcy50cmFuc2Zvcm1ZKTtcbiAgICB9XG5cbiAgICB0aGlzLmxvY2tBbmltYXRpb24oKTtcbiAgICB0aGlzLnNldFZpc2libGVSYW5nZSgpO1xuICAgIHRoaXMuc2V0UGluZ1N0YXR1cygpO1xuICB9XG5cbiAgaGFuZGxlS2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmIChoYXNNb2RpZmllcktleShldmVudCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgIGNhc2UgTEVGVF9BUlJPVzpcbiAgICAgIGNhc2UgVVBfQVJST1c6XG4gICAgICBjYXNlIFJJR0hUX0FSUk9XOlxuICAgICAgY2FzZSBET1dOX0FSUk9XOlxuICAgICAgICB0aGlzLmxvY2tBbmltYXRpb24oKTtcbiAgICAgICAgdGhpcy5rZXlNYW5hZ2VyLm9uS2V5ZG93bihldmVudCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBFTlRFUjpcbiAgICAgIGNhc2UgU1BBQ0U6XG4gICAgICAgIGlmICh0aGlzLmZvY3VzSW5kZXggIT09IHRoaXMuc2VsZWN0ZWRJbmRleCkge1xuICAgICAgICAgIHRoaXMuc2VsZWN0Rm9jdXNlZEluZGV4LmVtaXQodGhpcy5mb2N1c0luZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMua2V5TWFuYWdlci5vbktleWRvd24oZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaXNWYWxpZEluZGV4KGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuaXRlbXMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IHRhYiA9IHRoaXMuaXRlbXMgPyB0aGlzLml0ZW1zLnRvQXJyYXkoKVtpbmRleF0gOiBudWxsO1xuICAgIHJldHVybiAhIXRhYiAmJiAhdGFiLmRpc2FibGVkO1xuICB9XG5cbiAgcHJpdmF0ZSBzY3JvbGxUb1RhYih0YWI6IFByb1RhYk5hdkl0ZW1EaXJlY3RpdmUpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXRlbXMuZmluZChlID0+IGUgPT09IHRhYikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdGFicyA9IHRoaXMuaXRlbXMudG9BcnJheSgpO1xuXG4gICAgaWYgKHRoaXMucG9zaXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgbGV0IG5ld1RyYW5zZm9ybSA9IHRoaXMudHJhbnNmb3JtWDtcbiAgICAgIGlmICh0aGlzLmdldExheW91dERpcmVjdGlvbigpID09PSAncnRsJykge1xuICAgICAgICBjb25zdCByaWdodCA9IHRhYnNbMF0ubGVmdCArIHRhYnNbMF0ud2lkdGggLSB0YWIubGVmdCAtIHRhYi53aWR0aDtcblxuICAgICAgICBpZiAocmlnaHQgPCB0aGlzLnRyYW5zZm9ybVgpIHtcbiAgICAgICAgICBuZXdUcmFuc2Zvcm0gPSByaWdodDtcbiAgICAgICAgfSBlbHNlIGlmIChyaWdodCArIHRhYi53aWR0aCA+IHRoaXMudHJhbnNmb3JtWCArIHRoaXMud3JhcHBlcldpZHRoKSB7XG4gICAgICAgICAgbmV3VHJhbnNmb3JtID0gcmlnaHQgKyB0YWIud2lkdGggLSB0aGlzLndyYXBwZXJXaWR0aDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0YWIubGVmdCA8IC10aGlzLnRyYW5zZm9ybVgpIHtcbiAgICAgICAgbmV3VHJhbnNmb3JtID0gLXRhYi5sZWZ0O1xuICAgICAgfSBlbHNlIGlmICh0YWIubGVmdCArIHRhYi53aWR0aCA+IC10aGlzLnRyYW5zZm9ybVggKyB0aGlzLndyYXBwZXJXaWR0aCkge1xuICAgICAgICBuZXdUcmFuc2Zvcm0gPSAtKHRhYi5sZWZ0ICsgdGFiLndpZHRoIC0gdGhpcy53cmFwcGVyV2lkdGgpO1xuICAgICAgfVxuICAgICAgdGhpcy50cmFuc2Zvcm1YID0gbmV3VHJhbnNmb3JtO1xuICAgICAgdGhpcy50cmFuc2Zvcm1ZID0gMDtcbiAgICAgIHRoaXMuc2V0VHJhbnNmb3JtKG5ld1RyYW5zZm9ybSwgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBuZXdUcmFuc2Zvcm0gPSB0aGlzLnRyYW5zZm9ybVk7XG5cbiAgICAgIGlmICh0YWIudG9wIDwgLXRoaXMudHJhbnNmb3JtWSkge1xuICAgICAgICBuZXdUcmFuc2Zvcm0gPSAtdGFiLnRvcDtcbiAgICAgIH0gZWxzZSBpZiAodGFiLnRvcCArIHRhYi5oZWlnaHQgPiAtdGhpcy50cmFuc2Zvcm1ZICsgdGhpcy53cmFwcGVySGVpZ2h0KSB7XG4gICAgICAgIG5ld1RyYW5zZm9ybSA9IC0odGFiLnRvcCArIHRhYi5oZWlnaHQgLSB0aGlzLndyYXBwZXJIZWlnaHQpO1xuICAgICAgfVxuICAgICAgdGhpcy50cmFuc2Zvcm1ZID0gbmV3VHJhbnNmb3JtO1xuICAgICAgdGhpcy50cmFuc2Zvcm1YID0gMDtcbiAgICAgIHRoaXMuc2V0VHJhbnNmb3JtKDAsIG5ld1RyYW5zZm9ybSk7XG4gICAgfVxuXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuY3NzVHJhbnNmb3JtVGltZVdhaXRpbmdJZCk7XG4gICAgdGhpcy5jc3NUcmFuc2Zvcm1UaW1lV2FpdGluZ0lkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNldFZpc2libGVSYW5nZSgpO1xuICAgIH0sIENTU19UUkFOU0ZPUk1fVElNRSk7XG4gIH1cblxuICBwcml2YXRlIGxvY2tBbmltYXRpb24oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubG9ja0FuaW1hdGlvblRpbWVvdXRJZCA9PT0gLTEpIHtcbiAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgdGhpcy5uYXZMaXN0UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJztcbiAgICAgICAgdGhpcy5sb2NrQW5pbWF0aW9uVGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5uYXZMaXN0UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9ICcnO1xuICAgICAgICAgIHRoaXMubG9ja0FuaW1hdGlvblRpbWVvdXRJZCA9IC0xO1xuICAgICAgICB9LCBDU1NfVFJBTlNGT1JNX1RJTUUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRUcmFuc2Zvcm0oeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLm5hdkxpc3RSZWYubmF0aXZlRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7eH1weCwgJHt5fXB4KWA7XG4gIH1cblxuICBwcml2YXRlIGNsYW1wVHJhbnNmb3JtWCh0cmFuc2Zvcm06IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3Qgc2Nyb2xsV2lkdGggPSB0aGlzLndyYXBwZXJXaWR0aCAtIHRoaXMuc2Nyb2xsTGlzdFdpZHRoO1xuICAgIGlmICh0aGlzLmdldExheW91dERpcmVjdGlvbigpID09PSAncnRsJykge1xuICAgICAgcmV0dXJuIE1hdGgubWF4KE1hdGgubWluKHNjcm9sbFdpZHRoLCB0cmFuc2Zvcm0pLCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHNjcm9sbFdpZHRoLCB0cmFuc2Zvcm0pLCAwKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNsYW1wVHJhbnNmb3JtWSh0cmFuc2Zvcm06IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHRoaXMud3JhcHBlckhlaWdodCAtIHRoaXMuc2Nyb2xsTGlzdEhlaWdodCwgdHJhbnNmb3JtKSwgMCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVNjcm9sbExpc3RQb3NpdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLnJlc2V0U2l6ZXMoKTtcbiAgICB0aGlzLnRyYW5zZm9ybVggPSB0aGlzLmNsYW1wVHJhbnNmb3JtWCh0aGlzLnRyYW5zZm9ybVgpO1xuICAgIHRoaXMudHJhbnNmb3JtWSA9IHRoaXMuY2xhbXBUcmFuc2Zvcm1ZKHRoaXMudHJhbnNmb3JtWSk7XG4gICAgdGhpcy5zZXRWaXNpYmxlUmFuZ2UoKTtcbiAgICB0aGlzLnNldFBpbmdTdGF0dXMoKTtcbiAgICBpZiAodGhpcy5rZXlNYW5hZ2VyKSB7XG4gICAgICB0aGlzLmtleU1hbmFnZXIudXBkYXRlQWN0aXZlSXRlbSh0aGlzLmtleU1hbmFnZXIuYWN0aXZlSXRlbUluZGV4ISk7XG4gICAgICBpZiAodGhpcy5rZXlNYW5hZ2VyLmFjdGl2ZUl0ZW0pIHtcbiAgICAgICAgdGhpcy5zY3JvbGxUb1RhYih0aGlzLmtleU1hbmFnZXIuYWN0aXZlSXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZXNldFNpemVzKCk6IHZvaWQge1xuICAgIHRoaXMuYWRkQnV0dG9uV2lkdGggPSB0aGlzLmFkZEJ0blJlZiA/IHRoaXMuYWRkQnRuUmVmLmdldEVsZW1lbnRXaWR0aCgpIDogMDtcbiAgICB0aGlzLmFkZEJ1dHRvbkhlaWdodCA9IHRoaXMuYWRkQnRuUmVmID8gdGhpcy5hZGRCdG5SZWYuZ2V0RWxlbWVudEhlaWdodCgpIDogMDtcbiAgICB0aGlzLm9wZXJhdGlvbldpZHRoID0gdGhpcy5vcGVyYXRpb25SZWYuZ2V0RWxlbWVudFdpZHRoKCk7XG4gICAgdGhpcy5vcGVyYXRpb25IZWlnaHQgPSB0aGlzLm9wZXJhdGlvblJlZi5nZXRFbGVtZW50SGVpZ2h0KCk7XG4gICAgdGhpcy53cmFwcGVyV2lkdGggPSB0aGlzLm5hdldhcnBSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCB8fCAwO1xuICAgIHRoaXMud3JhcHBlckhlaWdodCA9IHRoaXMubmF2V2FycFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCB8fCAwO1xuICAgIHRoaXMuc2Nyb2xsTGlzdEhlaWdodCA9IHRoaXMubmF2TGlzdFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCB8fCAwO1xuICAgIHRoaXMuc2Nyb2xsTGlzdFdpZHRoID0gdGhpcy5uYXZMaXN0UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggfHwgMDtcbiAgfVxuXG4gIHByaXZhdGUgYWxpZ25JbmtCYXJUb1NlbGVjdGVkVGFiKCk6IHZvaWQge1xuICAgIGNvbnN0IHNlbGVjdGVkSXRlbSA9IHRoaXMuaXRlbXMgJiYgdGhpcy5pdGVtcy5sZW5ndGggPyB0aGlzLml0ZW1zLnRvQXJyYXkoKVt0aGlzLnNlbGVjdGVkSW5kZXhdIDogbnVsbDtcbiAgICBjb25zdCBzZWxlY3RlZEl0ZW1FbGVtZW50ID0gc2VsZWN0ZWRJdGVtID8gc2VsZWN0ZWRJdGVtLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCA6IG51bGw7XG5cbiAgICBpZiAoc2VsZWN0ZWRJdGVtRWxlbWVudCkge1xuICAgICAgLyoqXG4gICAgICAgKiAuYW50LXByby10YWJzLW5hdi1saXN0IC0gVGFyZ2V0IG9mZnNldCBwYXJlbnQgZWxlbWVudFxuICAgICAgICogICDilJTilIDilIAuYW50LXByby10YWJzLXRhYlxuICAgICAgICogICAgICAgIOKUlOKUgOKUgC5hbnQtcHJvLXRhYnMtdGFiLWJ0biAtIEN1cnJlbnRseSBmb2N1c2VkIGVsZW1lbnRcbiAgICAgICAqL1xuICAgICAgdGhpcy5pbmtCYXIuYWxpZ25Ub0VsZW1lbnQoc2VsZWN0ZWRJdGVtRWxlbWVudC5wYXJlbnRFbGVtZW50ISk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRQaW5nU3RhdHVzKCk6IHZvaWQge1xuICAgIGNvbnN0IHBpbmcgPSB7XG4gICAgICB0b3A6IGZhbHNlLFxuICAgICAgcmlnaHQ6IGZhbHNlLFxuICAgICAgYm90dG9tOiBmYWxzZSxcbiAgICAgIGxlZnQ6IGZhbHNlXG4gICAgfTtcbiAgICBjb25zdCBuYXZXYXJwID0gdGhpcy5uYXZXYXJwUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKHRoaXMucG9zaXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgaWYgKHRoaXMuZ2V0TGF5b3V0RGlyZWN0aW9uKCkgPT09ICdydGwnKSB7XG4gICAgICAgIHBpbmcucmlnaHQgPSB0aGlzLnRyYW5zZm9ybVggPiAwO1xuICAgICAgICBwaW5nLmxlZnQgPSB0aGlzLnRyYW5zZm9ybVggKyB0aGlzLndyYXBwZXJXaWR0aCA8IHRoaXMuc2Nyb2xsTGlzdFdpZHRoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGluZy5sZWZ0ID0gdGhpcy50cmFuc2Zvcm1YIDwgMDtcbiAgICAgICAgcGluZy5yaWdodCA9IC10aGlzLnRyYW5zZm9ybVggKyB0aGlzLndyYXBwZXJXaWR0aCA8IHRoaXMuc2Nyb2xsTGlzdFdpZHRoO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwaW5nLnRvcCA9IHRoaXMudHJhbnNmb3JtWSA8IDA7XG4gICAgICBwaW5nLmJvdHRvbSA9IC10aGlzLnRyYW5zZm9ybVkgKyB0aGlzLndyYXBwZXJIZWlnaHQgPCB0aGlzLnNjcm9sbExpc3RIZWlnaHQ7XG4gICAgfVxuXG4gICAgKE9iamVjdC5rZXlzKHBpbmcpIGFzIEFycmF5PCd0b3AnIHwgJ3JpZ2h0JyB8ICdib3R0b20nIHwgJ2xlZnQnPikuZm9yRWFjaChwb3MgPT4ge1xuICAgICAgY29uc3QgY2xhc3NOYW1lID0gYGFudC1wcm8tdGFicy1uYXYtd3JhcC1waW5nLSR7cG9zfWA7XG4gICAgICBpZiAocGluZ1twb3NdKSB7XG4gICAgICAgIG5hdldhcnAuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmF2V2FycC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldFZpc2libGVSYW5nZSgpOiB2b2lkIHtcbiAgICBsZXQgdW5pdDogJ3dpZHRoJyB8ICdoZWlnaHQnO1xuICAgIGxldCBwb3NpdGlvbjogJ2xlZnQnIHwgJ3RvcCcgfCAncmlnaHQnO1xuICAgIGxldCB0cmFuc2Zvcm1TaXplOiBudW1iZXI7XG4gICAgbGV0IGJhc2ljU2l6ZTogbnVtYmVyO1xuICAgIGxldCB0YWJDb250ZW50U2l6ZTogbnVtYmVyO1xuICAgIGxldCBhZGRTaXplOiBudW1iZXI7XG4gICAgY29uc3QgdGFicyA9IHRoaXMuaXRlbXMudG9BcnJheSgpO1xuICAgIGNvbnN0IERFRkFVTFRfU0laRSA9IHsgd2lkdGg6IDAsIGhlaWdodDogMCwgbGVmdDogMCwgdG9wOiAwLCByaWdodDogMCB9O1xuXG4gICAgY29uc3QgZ2V0T2Zmc2V0ID0gKGluZGV4OiBudW1iZXIpOiBudW1iZXIgPT4ge1xuICAgICAgbGV0IG9mZnNldDogbnVtYmVyO1xuICAgICAgY29uc3Qgc2l6ZSA9IHRhYnNbaW5kZXhdIHx8IERFRkFVTFRfU0laRTtcbiAgICAgIGlmIChwb3NpdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICBvZmZzZXQgPSB0YWJzWzBdLmxlZnQgKyB0YWJzWzBdLndpZHRoIC0gdGFic1tpbmRleF0ubGVmdCAtIHRhYnNbaW5kZXhdLndpZHRoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2Zmc2V0ID0gc2l6ZVtwb3NpdGlvbl07XG4gICAgICB9XG4gICAgICByZXR1cm4gb2Zmc2V0O1xuICAgIH07XG5cbiAgICBpZiAodGhpcy5wb3NpdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICB1bml0ID0gJ3dpZHRoJztcbiAgICAgIGJhc2ljU2l6ZSA9IHRoaXMud3JhcHBlcldpZHRoO1xuICAgICAgdGFiQ29udGVudFNpemUgPSB0aGlzLnNjcm9sbExpc3RXaWR0aCAtICh0aGlzLmhpZGRlbkl0ZW1zLmxlbmd0aCA/IHRoaXMub3BlcmF0aW9uV2lkdGggOiAwKTtcbiAgICAgIGFkZFNpemUgPSB0aGlzLmFkZEJ1dHRvbldpZHRoO1xuICAgICAgdHJhbnNmb3JtU2l6ZSA9IE1hdGguYWJzKHRoaXMudHJhbnNmb3JtWCk7XG4gICAgICBpZiAodGhpcy5nZXRMYXlvdXREaXJlY3Rpb24oKSA9PT0gJ3J0bCcpIHtcbiAgICAgICAgcG9zaXRpb24gPSAncmlnaHQnO1xuICAgICAgICB0aGlzLnBpbmdSaWdodCA9IHRoaXMudHJhbnNmb3JtWCA+IDA7XG4gICAgICAgIHRoaXMucGluZ0xlZnQgPSB0aGlzLnRyYW5zZm9ybVggKyB0aGlzLndyYXBwZXJXaWR0aCA8IHRoaXMuc2Nyb2xsTGlzdFdpZHRoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5waW5nTGVmdCA9IHRoaXMudHJhbnNmb3JtWCA8IDA7XG4gICAgICAgIHRoaXMucGluZ1JpZ2h0ID0gLXRoaXMudHJhbnNmb3JtWCArIHRoaXMud3JhcHBlcldpZHRoIDwgdGhpcy5zY3JvbGxMaXN0V2lkdGg7XG4gICAgICAgIHBvc2l0aW9uID0gJ2xlZnQnO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB1bml0ID0gJ2hlaWdodCc7XG4gICAgICBiYXNpY1NpemUgPSB0aGlzLndyYXBwZXJIZWlnaHQ7XG4gICAgICB0YWJDb250ZW50U2l6ZSA9IHRoaXMuc2Nyb2xsTGlzdEhlaWdodCAtICh0aGlzLmhpZGRlbkl0ZW1zLmxlbmd0aCA/IHRoaXMub3BlcmF0aW9uSGVpZ2h0IDogMCk7XG4gICAgICBhZGRTaXplID0gdGhpcy5hZGRCdXR0b25IZWlnaHQ7XG4gICAgICBwb3NpdGlvbiA9ICd0b3AnO1xuICAgICAgdHJhbnNmb3JtU2l6ZSA9IC10aGlzLnRyYW5zZm9ybVk7XG4gICAgICB0aGlzLnBpbmdUb3AgPSB0aGlzLnRyYW5zZm9ybVkgPCAwO1xuICAgICAgdGhpcy5waW5nQm90dG9tID0gLXRoaXMudHJhbnNmb3JtWSArIHRoaXMud3JhcHBlckhlaWdodCA8IHRoaXMuc2Nyb2xsTGlzdEhlaWdodDtcbiAgICB9XG5cbiAgICBsZXQgbWVyZ2VkQmFzaWNTaXplID0gYmFzaWNTaXplO1xuICAgIGlmICh0YWJDb250ZW50U2l6ZSArIGFkZFNpemUgPiBiYXNpY1NpemUpIHtcbiAgICAgIG1lcmdlZEJhc2ljU2l6ZSA9IGJhc2ljU2l6ZSAtIGFkZFNpemU7XG4gICAgfVxuXG4gICAgaWYgKCF0YWJzLmxlbmd0aCkge1xuICAgICAgdGhpcy5oaWRkZW5JdGVtcyA9IFtdO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbGVuID0gdGFicy5sZW5ndGg7XG4gICAgbGV0IGVuZEluZGV4ID0gbGVuO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IG9mZnNldCA9IGdldE9mZnNldChpKTtcbiAgICAgIGNvbnN0IHNpemUgPSB0YWJzW2ldIHx8IERFRkFVTFRfU0laRTtcbiAgICAgIGlmIChvZmZzZXQgKyBzaXplW3VuaXRdID4gdHJhbnNmb3JtU2l6ZSArIG1lcmdlZEJhc2ljU2l6ZSkge1xuICAgICAgICBlbmRJbmRleCA9IGkgLSAxO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgc3RhcnRJbmRleCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IGxlbiAtIDE7IGkgPj0gMDsgaSAtPSAxKSB7XG4gICAgICBjb25zdCBvZmZzZXQgPSBnZXRPZmZzZXQoaSk7XG4gICAgICBpZiAob2Zmc2V0IDwgdHJhbnNmb3JtU2l6ZSkge1xuICAgICAgICBzdGFydEluZGV4ID0gaSArIDE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0SGlkZGVuVGFicyA9IHRhYnMuc2xpY2UoMCwgc3RhcnRJbmRleCk7XG4gICAgY29uc3QgZW5kSGlkZGVuVGFicyA9IHRhYnMuc2xpY2UoZW5kSW5kZXggKyAxKTtcbiAgICB0aGlzLmhpZGRlbkl0ZW1zID0gWy4uLnN0YXJ0SGlkZGVuVGFicywgLi4uZW5kSGlkZGVuVGFic107XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwcml2YXRlIGdldExheW91dERpcmVjdGlvbigpOiBEaXJlY3Rpb24ge1xuICAgIHJldHVybiB0aGlzLmRpciAmJiB0aGlzLmRpci52YWx1ZSA9PT0gJ3J0bCcgPyAncnRsJyA6ICdsdHInO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRUYWJGb2N1cyhfdGFiSW5kZXg6IG51bWJlcik6IHZvaWQge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBwb3NpdGlvbiB9ID0gY2hhbmdlcztcbiAgICAvLyBUaGUgZmlyc3Qgd2lsbCBiZSBhbGlnbmluZyBpbiBuZ0FmdGVyVmlld0luaXRcbiAgICBpZiAocG9zaXRpb24gJiYgIXBvc2l0aW9uLmlzRmlyc3RDaGFuZ2UoKSkge1xuICAgICAgdGhpcy5hbGlnbklua0JhclRvU2VsZWN0ZWRUYWIoKTtcbiAgICAgIHRoaXMubG9ja0FuaW1hdGlvbigpO1xuICAgICAgdGhpcy51cGRhdGVTY3JvbGxMaXN0UG9zaXRpb24oKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==