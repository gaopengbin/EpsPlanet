import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { InputBoolean, InputNumber } from "ng-zorro-antd/core/util";
import { Subject } from "rxjs";
import { DOCUMENT } from "@angular/common";
import { debounceTime, takeUntil } from "rxjs/operators";
import { ReuseTabMenuService } from "./reuse-tab-menu.service";
import * as i0 from "@angular/core";
import * as i1 from "./reuse-tab.service";
import * as i2 from "./reuse-tab-menu.service";
import * as i3 from "@angular/router";
import * as i4 from "../tabs/tabset.component";
import * as i5 from "@angular/common";
import * as i6 from "../tabs/tab.component";
const _c0 = ["tabset"];
function ReuseTabComponent_ng_container_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const i_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵtextInterpolate1(" ", i_r2.title, " ");
} }
function ReuseTabComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "pro-tab", 3);
    i0.ɵɵlistener("nzClick", function ReuseTabComponent_ng_container_2_Template_pro_tab_nzClick_1_listener() { i0.ɵɵrestoreView(_r8); const index_r3 = ctx.index; const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7._to(index_r3); })("nzContextmenu", function ReuseTabComponent_ng_container_2_Template_pro_tab_nzContextmenu_1_listener($event) { i0.ɵɵrestoreView(_r8); const i_r2 = ctx.$implicit; const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.openMenu($event, i_r2); });
    i0.ɵɵtemplate(2, ReuseTabComponent_ng_container_2_ng_template_2_Template, 1, 1, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const i_r2 = ctx.$implicit;
    const _r4 = i0.ɵɵreference(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzTitle", _r4)("nzClosable", i_r2.closable);
} }
export class ReuseTabComponent {
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
ReuseTabComponent.ɵfac = function ReuseTabComponent_Factory(t) { return new (t || ReuseTabComponent)(i0.ɵɵdirectiveInject(i1.ReuseTabService), i0.ɵɵdirectiveInject(i2.ReuseTabMenuService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i3.Router), i0.ɵɵdirectiveInject(i3.ActivatedRoute), i0.ɵɵdirectiveInject(DOCUMENT)); };
ReuseTabComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ReuseTabComponent, selectors: [["pro-reuse-tab"]], viewQuery: function ReuseTabComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 3);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tabset = _t.first);
    } }, hostVars: 4, hostBindings: function ReuseTabComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("ant-pro-reuse-tab", true)("ant-pro-reuse-tab-line", true);
    } }, inputs: { debug: "debug", max: "max", tabMaxWidth: "tabMaxWidth", excludes: "excludes", allowClose: "allowClose", allowRefresh: "allowRefresh", keepingScroll: "keepingScroll", keepingScrollContainer: "keepingScrollContainer", tabBarExtraContent: "tabBarExtraContent", tabBarGutter: "tabBarGutter", tabBarStyle: "tabBarStyle" }, outputs: { change: "change", close: "close" }, exportAs: ["proReuseTab"], features: [i0.ɵɵProvidersFeature([ReuseTabMenuService]), i0.ɵɵNgOnChangesFeature], decls: 3, vars: 4, consts: [["nzType", "editable-card", 3, "nzSize", "nzHideAdd", "nzSelectedIndex", "nzClose"], ["tabset", ""], [4, "ngFor", "ngForOf"], [3, "nzTitle", "nzClosable", "nzClick", "nzContextmenu"], ["titleTemplate", ""]], template: function ReuseTabComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "pro-tabset", 0, 1);
        i0.ɵɵlistener("nzClose", function ReuseTabComponent_Template_pro_tabset_nzClose_0_listener($event) { return ctx.myClose($event); });
        i0.ɵɵtemplate(2, ReuseTabComponent_ng_container_2_Template, 4, 2, "ng-container", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("nzSize", "small")("nzHideAdd", true)("nzSelectedIndex", ctx.pos);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.list);
    } }, directives: [i4.ProTabSetComponent, i5.NgForOf, i6.ProTabComponent], styles: [".ant-pro-reuse-tab{display:block;background-color:#f5f7f9;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;padding:6px}.ant-pro-reuse-tab .ant-pro-tabs .ant-pro-tabs-bar{margin:0;border-bottom:0}.ant-pro-reuse-tab .ant-pro-tabs>.ant-pro-tabs-nav{margin:0}.ant-pro-reuse-tab .ant-pro-tabs>.ant-pro-tabs-nav .ant-pro-tabs-tab{border:transparent;border-radius:4px!important;background:#fff;padding:6px 12px!important}.ant-pro-reuse-tab .ant-pro-tabs>.ant-pro-tabs-nav .ant-pro-tabs-tab:not(:last-of-type){margin-right:6px!important}.ant-pro-reuse-tab .ant-pro-tabs>.ant-pro-tabs-nav:before{border-bottom:transparent}.ant-pro-reuse-tab .ant-pro-tabs .ant-pro-tabs-tab-remove{margin:0;padding-right:0}.ant-pro-reuse-tab .ant-pro-tabs .ant-pro-tabs-nav-more{background:#fff!important}.ant-pro-reuse-tab-cm .ant-menu{border:1px solid #f7f5f5}.ant-pro-reuse-tab-cm .ant-menu-item{height:24px;line-height:24px}"], encapsulation: 2, changeDetection: 0 });
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ReuseTabComponent, [{
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
    }], function () { return [{ type: i1.ReuseTabService }, { type: i2.ReuseTabMenuService }, { type: i0.ChangeDetectorRef }, { type: i3.Router }, { type: i3.ActivatedRoute }, { type: undefined, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Byby1sYXlvdXQvc3JjL2xpYi9yZXVzZS10YWIvcmV1c2UtdGFiLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Byby1sYXlvdXQvc3JjL2xpYi9yZXVzZS10YWIvcmV1c2UtdGFiLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxZQUFZLEVBQUUsTUFBTSxFQUNwQixLQUFLLEVBSUwsTUFBTSxFQUVOLFNBQVMsRUFBRSxpQkFBaUIsRUFDN0IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLFlBQVksRUFBRSxXQUFXLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUNsRSxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBUzdCLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QyxPQUFPLEVBQUMsWUFBWSxFQUFFLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7Ozs7O0lDakJyRCxZQUNGOzs7SUFERSwyQ0FDRjs7OztJQUpKLDZCQUEwRDtJQUN4RCxrQ0FBeUg7SUFBNUQsZ09BQXNCLDhPQUFBO0lBQ2pGLGtJQUVjO0lBQ2hCLGlCQUFVO0lBQ1osMEJBQWU7Ozs7SUFMSixlQUF5QjtJQUF6Qiw2QkFBeUIsNkJBQUE7O0FEb0N0QyxNQUFNLE9BQU8saUJBQWlCO0lBOEI1QixhQUFhO0lBRWIsWUFBb0IsZUFBZ0MsRUFDaEMsc0JBQTJDLEVBQzNDLEdBQXNCLEVBQ3RCLE1BQWMsRUFDZCxLQUFxQixFQUNILEdBQVE7UUFMMUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hD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LEVBQUUsYUFBYTtnQkFDdkIsbUJBQW1CLEVBQUUsS0FBSzthQUMzQjs7c0JBc0NjLE1BQU07dUJBQUMsUUFBUTt3QkFuQ2lCLE1BQU07a0JBQWxELFNBQVM7bUJBQUMsUUFBUSxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQztZQVNWLEtBQUs7a0JBQTdCLEtBQUs7WUFDa0IsR0FBRztrQkFBMUIsS0FBSztZQUNrQixXQUFXO2tCQUFsQyxLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNtQixVQUFVO2tCQUFsQyxLQUFLO1lBQ21CLFlBQVk7a0JBQXBDLEtBQUs7WUFDbUIsYUFBYTtrQkFBckMsS0FBSztZQUdGLHNCQUFzQjtrQkFEekIsS0FBSztZQUtHLGtCQUFrQjtrQkFBMUIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ2EsTUFBTTtrQkFBeEIsTUFBTTtZQUNZLEtBQUs7a0JBQXZCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLCBJbmplY3QsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsIFNpbXBsZUNoYW5nZSwgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24sIFZpZXdSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0lucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXJ9IGZyb20gXCJuZy16b3Jyby1hbnRkL2NvcmUvdXRpbFwiO1xuaW1wb3J0IHtTdWJqZWN0fSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtcbiAgUmV1c2VDb250ZXh0Q2xvc2VFdmVudCxcbiAgUmV1c2VJdGVtLFxuICBSZXVzZVRhYkNhY2hlZCxcbiAgUmV1c2VUYWJOb3RpZnksXG4gIFJldXNlVGl0bGVcbn0gZnJvbSBcIi4vcmV1c2UtdGFiLmludGVyZmFjZVwiO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQge1JldXNlVGFiU2VydmljZX0gZnJvbSBcIi4vcmV1c2UtdGFiLnNlcnZpY2VcIjtcbmltcG9ydCB7ZGVib3VuY2VUaW1lLCB0YWtlVW50aWx9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHtSZXVzZVRhYk1lbnVTZXJ2aWNlfSBmcm9tIFwiLi9yZXVzZS10YWItbWVudS5zZXJ2aWNlXCI7XG5pbXBvcnQge1Byb1RhYlNldENvbXBvbmVudH0gZnJvbSBcIi4uL3RhYnNcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncHJvLXJldXNlLXRhYicsXG4gIHRlbXBsYXRlVXJsOiAncmV1c2UtdGFiLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3JldXNlLXRhYi5jb21wb25lbnQubGVzcyddLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtcHJvLXJldXNlLXRhYl0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5hbnQtcHJvLXJldXNlLXRhYi1saW5lXSc6ICd0cnVlJyxcbiAgfSxcbiAgcHJvdmlkZXJzOiBbUmV1c2VUYWJNZW51U2VydmljZV0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBleHBvcnRBczogJ3Byb1JldXNlVGFiJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2Vcbn0pXG5leHBvcnQgY2xhc3MgUmV1c2VUYWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblxuICBAVmlld0NoaWxkKCd0YWJzZXQnLCB7c3RhdGljOiB0cnVlfSkgcHJpdmF0ZSB0YWJzZXQ6IFByb1RhYlNldENvbXBvbmVudDtcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIHVwZGF0ZVBvcyQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIF9rZWVwaW5nU2Nyb2xsQ29udGFpbmVyOiBFbGVtZW50O1xuICBsaXN0OiBSZXVzZUl0ZW1bXSA9IFtdO1xuICBpdGVtOiBSZXVzZUl0ZW07XG4gIHBvcyA9IDA7XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRlYnVnID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG1heDogbnVtYmVyO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSB0YWJNYXhXaWR0aDogbnVtYmVyO1xuICBASW5wdXQoKSBleGNsdWRlczogUmVnRXhwW107XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhbGxvd0Nsb3NlID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGFsbG93UmVmcmVzaCA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBrZWVwaW5nU2Nyb2xsID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgc2V0IGtlZXBpbmdTY3JvbGxDb250YWluZXIodmFsdWU6IHN0cmluZyB8IEVsZW1lbnQpIHtcbiAgICB0aGlzLl9rZWVwaW5nU2Nyb2xsQ29udGFpbmVyID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3IodmFsdWUpIDogdmFsdWU7XG4gIH1cblxuICBASW5wdXQoKSB0YWJCYXJFeHRyYUNvbnRlbnQ6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSB0YWJCYXJHdXR0ZXI6IG51bWJlcjtcbiAgQElucHV0KCkgdGFiQmFyU3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIEBPdXRwdXQoKSByZWFkb25seSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFJldXNlSXRlbT4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxSZXVzZUl0ZW0gfCBudWxsPigpO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJldXNlVGFiU2VydmljZTogUmV1c2VUYWJTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIHJldXNlVGFiQ29udGV4dFNlcnZpY2U6IFJldXNlVGFiTWVudVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnkpIHtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuVGl0KHRpdGxlOiBSZXVzZVRpdGxlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGl0bGUubmFtZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGN1clVybCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnJldXNlVGFiU2VydmljZS5nZXRVcmwodGhpcy5yb3V0ZS5zbmFwc2hvdCk7XG4gIH1cblxuICBwcml2YXRlIGdldCBjdXJVcmxRdWVyeVBhcmFtKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbXM7XG4gIH1cblxuICBwcml2YXRlIGdlbkN1ckl0ZW0oKTogUmV1c2VJdGVtIHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmN1clVybDtcbiAgICBjb25zdCBzbmFwc2hvdFRydWUgPSB0aGlzLnJldXNlVGFiU2VydmljZS5nZXRUcnV0aFJvdXRlKHRoaXMucm91dGUuc25hcHNob3QpO1xuICAgIHJldHVybiB7XG4gICAgICB1cmwsXG4gICAgICBxdWVyeVBhcmFtczogc25hcHNob3RUcnVlLnF1ZXJ5UGFyYW1zLFxuICAgICAgdGl0bGU6IHRoaXMuZ2VuVGl0KHRoaXMucmV1c2VUYWJTZXJ2aWNlLmdldFRpdGxlKHVybCwgc25hcHNob3RUcnVlKSksXG4gICAgICBjbG9zYWJsZTogdGhpcy5hbGxvd0Nsb3NlICYmIHRoaXMucmV1c2VUYWJTZXJ2aWNlLmNvdW50ID4gMCAmJiB0aGlzLnJldXNlVGFiU2VydmljZS5nZXRDbG9zYWJsZSh1cmwsIHNuYXBzaG90VHJ1ZSksXG4gICAgICByZWZyZXNoYWJsZTogdGhpcy5hbGxvd1JlZnJlc2ggJiYgdGhpcy5yZXVzZVRhYlNlcnZpY2UuZ2V0UmVmcmVzaGFibGUodXJsLCBzbmFwc2hvdFRydWUpLFxuICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgIGxhc3Q6IGZhbHNlLFxuICAgICAgaW5kZXg6IDAsXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuTGlzdChub3RpZnk6IFJldXNlVGFiTm90aWZ5IHwgbnVsbCk6IHZvaWQge1xuICAgIGNvbnN0IGxzID0gdGhpcy5yZXVzZVRhYlNlcnZpY2UuaXRlbXMubWFwKFxuICAgICAgKGl0ZW06IFJldXNlVGFiQ2FjaGVkLCBpbmRleDogbnVtYmVyKSA9PlxuICAgICAgICAoe1xuICAgICAgICAgIHVybDogaXRlbS51cmwsXG4gICAgICAgICAgcXVlcnlQYXJhbXM6IGl0ZW0uX3NuYXBzaG90LnF1ZXJ5UGFyYW1zLFxuICAgICAgICAgIHRpdGxlOiB0aGlzLmdlblRpdChpdGVtLnRpdGxlKSxcbiAgICAgICAgICBjbG9zYWJsZTogdGhpcy5hbGxvd0Nsb3NlICYmIGl0ZW0uY2xvc2FibGUgJiYgdGhpcy5yZXVzZVRhYlNlcnZpY2UuY291bnQgPiAwLFxuICAgICAgICAgIHJlZnJlc2hhYmxlOiB0aGlzLmFsbG93UmVmcmVzaCAmJiBpdGVtLnJlZnJlc2hhYmxlLFxuICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICAgIGxhc3Q6IGZhbHNlLFxuICAgICAgICB9IGFzIFJldXNlSXRlbSksXG4gICAgKTtcblxuICAgIGNvbnN0IHVybCA9IHRoaXMuY3VyVXJsO1xuICAgIGxldCBhZGRDdXJyZW50ID0gbHMuZmluZEluZGV4KHcgPT4gdy51cmwgPT09IHVybCAmJiB0aGlzLnJldXNlVGFiU2VydmljZS5xdWVyeVBhcmFtc0VxdWFsKHcucXVlcnlQYXJhbXMsIHRoaXMuY3VyVXJsUXVlcnlQYXJhbSkpID09PSAtMTtcbiAgICBpZiAobm90aWZ5ICYmIG5vdGlmeS5hY3RpdmUgPT09ICdjbG9zZScgJiYgbm90aWZ5LnVybCA9PT0gdXJsKSB7XG4gICAgICBhZGRDdXJyZW50ID0gZmFsc2U7XG4gICAgICBsZXQgdG9Qb3MgPSAwO1xuICAgICAgY29uc3QgY3VySXRlbSA9IHRoaXMubGlzdC5maW5kKHcgPT4gdy51cmwgPT09IHVybCAmJiB0aGlzLnJldXNlVGFiU2VydmljZS5xdWVyeVBhcmFtc0VxdWFsKHcucXVlcnlQYXJhbXMsIHRoaXMuY3VyVXJsUXVlcnlQYXJhbSkpITtcbiAgICAgIGlmIChjdXJJdGVtLmluZGV4ID09PSBscy5sZW5ndGgpIHtcbiAgICAgICAgLy8gV2hlbiBjbG9zZWQgaXMgbGFzdFxuICAgICAgICB0b1BvcyA9IGxzLmxlbmd0aCAtIDE7XG4gICAgICB9IGVsc2UgaWYgKGN1ckl0ZW0uaW5kZXggPCBscy5sZW5ndGgpIHtcbiAgICAgICAgLy8gU2hvdWxkIGJlIGFjdGl2ZWQgbmV4dCB0YWIgd2hlbiBjbG9zZWQgaXMgbWlkZGxlXG4gICAgICAgIHRvUG9zID0gTWF0aC5tYXgoMCwgY3VySXRlbS5pbmRleCk7XG4gICAgICB9XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbbHNbdG9Qb3NdLnVybF0sIHtxdWVyeVBhcmFtczogbHNbdG9Qb3NdLnF1ZXJ5UGFyYW1zfSk7XG4gICAgfVxuXG4gICAgaWYgKGFkZEN1cnJlbnQpIHtcbiAgICAgIGxzLnB1c2godGhpcy5nZW5DdXJJdGVtKCkpO1xuICAgIH1cblxuICAgIGxzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiAoaXRlbS5pbmRleCA9IGluZGV4KSk7XG4gICAgaWYgKGxzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgbHNbMF0uY2xvc2FibGUgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5saXN0ID0gbHM7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHRoaXMudXBkYXRlUG9zJC5uZXh0KCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVRpdGxlKHJlczogUmV1c2VUYWJOb3RpZnkpOiB2b2lkIHtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5saXN0LmZpbmQodyA9PiB7XG4gICAgICBjb25zdCB1cmxXaXRoUGFyYW1zID0gdGhpcy5yb3V0ZXIuc2VyaWFsaXplVXJsKHRoaXMucm91dGVyLmNyZWF0ZVVybFRyZWUoW3cudXJsXSwge3F1ZXJ5UGFyYW1zOiB3LnF1ZXJ5UGFyYW1zfSkpO1xuICAgICAgcmV0dXJuIHVybFdpdGhQYXJhbXMgPT09IHJlcy51cmxcbiAgICB9KTtcbiAgICBpZiAoIWl0ZW0pIHJldHVybjtcbiAgICBpdGVtLnRpdGxlID0gdGhpcy5nZW5UaXQocmVzIS50aXRsZSEpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMubGlzdCk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSByZWZyZXNoKGl0ZW06IFJldXNlSXRlbSk6IHZvaWQge1xuICAgIHRoaXMucmV1c2VUYWJTZXJ2aWNlLnJ1bkhvb2soJ29uUmV1c2VJbml0JywgdGhpcy5wb3MgPT09IGl0ZW0uaW5kZXggPyB0aGlzLnJldXNlVGFiU2VydmljZS5jb21wb25lbnRSZWYgOiBpdGVtLmluZGV4LCAncmVmcmVzaCcpO1xuICB9XG5cbiAgLy8gI3JlZ2lvbiBVSVxuXG4gIGNvbnRleHRNZW51Q2hhbmdlKHJlczogUmV1c2VDb250ZXh0Q2xvc2VFdmVudCk6IHZvaWQge1xuICAgIGxldCBmbjogKCgpID0+IHZvaWQpIHwgbnVsbCA9IG51bGw7XG4gICAgc3dpdGNoIChyZXMudHlwZSkge1xuICAgICAgY2FzZSAncmVmcmVzaCc6XG4gICAgICAgIHRoaXMucmVmcmVzaChyZXMuaXRlbSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2xvc2UnOlxuICAgICAgICB0aGlzLl9jbG9zZShudWxsLCByZXMuaXRlbS5pbmRleCwgcmVzLmluY2x1ZGVOb25DbG9zZWFibGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Nsb3NlUmlnaHQnOlxuICAgICAgICBmbiA9ICgpID0+IHtcbiAgICAgICAgICB0aGlzLnJldXNlVGFiU2VydmljZS5jbG9zZVJpZ2h0KHJlcy5pdGVtLnVybCwgcmVzLml0ZW0ucXVlcnlQYXJhbXMsIHJlcy5pbmNsdWRlTm9uQ2xvc2VhYmxlKTtcbiAgICAgICAgICB0aGlzLmNsb3NlLmVtaXQobnVsbCk7XG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2xvc2VPdGhlcic6XG4gICAgICAgIGZuID0gKCkgPT4ge1xuICAgICAgICAgIHRoaXMucmV1c2VUYWJTZXJ2aWNlLmNsZWFyKHJlcy5pbmNsdWRlTm9uQ2xvc2VhYmxlKTtcbiAgICAgICAgICB0aGlzLmNsb3NlLmVtaXQobnVsbCk7XG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAoIWZuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghcmVzLml0ZW0uYWN0aXZlICYmIHJlcy5pdGVtLmluZGV4IDw9IHRoaXMubGlzdC5maW5kKHcgPT4gdy5hY3RpdmUpIS5pbmRleCkge1xuICAgICAgdGhpcy5fdG8ocmVzLml0ZW0uaW5kZXgsIGZuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm4oKTtcbiAgICB9XG4gIH1cblxuICBfdG8oaW5kZXg6IG51bWJlciwgY2I/OiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgaW5kZXggPSBNYXRoLm1heCgwLCBNYXRoLm1pbihpbmRleCwgdGhpcy5saXN0Lmxlbmd0aCAtIDEpKTtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5saXN0W2luZGV4XTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbaXRlbS51cmxdLCB7cXVlcnlQYXJhbXM6IGl0ZW0ucXVlcnlQYXJhbXN9KS50aGVuKHJlcyA9PiB7XG4gICAgICBpZiAoIXJlcykgcmV0dXJuO1xuICAgICAgdGhpcy5pdGVtID0gaXRlbTtcbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQoaXRlbSk7XG4gICAgICBpZiAoY2IpIHtcbiAgICAgICAgY2IoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIF9jbG9zZShlOiBFdmVudCB8IG51bGwsIGlkeDogbnVtYmVyLCBpbmNsdWRlTm9uQ2xvc2VhYmxlOiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgaWYgKGUgIT0gbnVsbCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gICAgY29uc3QgaXRlbSA9IHRoaXMubGlzdFtpZHhdO1xuICAgIHRoaXMucmV1c2VUYWJTZXJ2aWNlLmNsb3NlKGl0ZW0udXJsLCBpdGVtLnF1ZXJ5UGFyYW1zLCBpbmNsdWRlTm9uQ2xvc2VhYmxlKTtcbiAgICB0aGlzLmNsb3NlLmVtaXQoaXRlbSk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIG15Q2xvc2UoZXZlbnQpIHtcbiAgICBjb25zdCBpZHggPSBldmVudC5pbmRleDtcbiAgICB0aGlzLl9jbG9zZShudWxsLCBpZHgsIGZhbHNlKTtcbiAgfVxuXG4gIGFjdGl2YXRlKGluc3RhbmNlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnJldXNlVGFiU2VydmljZS5jb21wb25lbnRSZWYgPSB7aW5zdGFuY2V9O1xuICB9XG5cbiAgb3Blbk1lbnUoZXZlbnQsIGl0ZW06IFJldXNlSXRlbSk6IHZvaWQge1xuICAgIHRoaXMucmV1c2VUYWJDb250ZXh0U2VydmljZS5zaG93Lm5leHQoe1xuICAgICAgZXZlbnQ6IGV2ZW50LFxuICAgICAgaXRlbTogaXRlbSxcbiAgICB9KTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlUG9zJC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCksIGRlYm91bmNlVGltZSg1MCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBjb25zdCB1cmwgPSB0aGlzLnJldXNlVGFiU2VydmljZS5nZXRVcmwodGhpcy5yb3V0ZS5zbmFwc2hvdCk7XG4gICAgICBjb25zdCBscyA9IHRoaXMubGlzdC5maWx0ZXIodyA9PiB3LnVybCA9PT0gdXJsIHx8ICF0aGlzLnJldXNlVGFiU2VydmljZS5pc0V4Y2x1ZGUody51cmwpKTtcbiAgICAgIGlmIChscy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBsYXN0ID0gbHNbbHMubGVuZ3RoIC0gMV07XG4gICAgICBjb25zdCBpdGVtID0gbHMuZmluZCh3ID0+IHcudXJsID09PSB1cmwgJiYgdGhpcy5yZXVzZVRhYlNlcnZpY2UucXVlcnlQYXJhbXNFcXVhbCh3LnF1ZXJ5UGFyYW1zLCB0aGlzLnJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zKSk7XG4gICAgICBsYXN0Lmxhc3QgPSB0cnVlO1xuICAgICAgY29uc3QgcG9zID0gaXRlbSA9PSBudWxsID8gbGFzdC5pbmRleCA6IGl0ZW0uaW5kZXg7XG4gICAgICBscy5mb3JFYWNoKChpLCBpZHgpID0+IChpLmFjdGl2ZSA9IHBvcyA9PT0gaWR4KSk7XG4gICAgICB0aGlzLnBvcyA9IHBvcztcbiAgICAgIC8vIFRPRE86IOebruWJjeaXoOazleefpemBk+S4uuS7gOS5iCBgcG9zYCDml6Dms5XpgJrov4cgYG56U2VsZWN0ZWRJbmRleGAg55Sf5pWI77yM5Zug5q2k5by65Yi25L2/55So57uE5Lu25a6e5L6L55qE5pa55byP5p2l5L+u5pS577yM6L+Z56eN5pa55byP5piv5a6J5YWo55qEXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbmctYWxhaW4vbmctYWxhaW4vaXNzdWVzLzE3MzZcbiAgICAgIHRoaXMudGFic2V0Lm56U2VsZWN0ZWRJbmRleCA9IHBvcztcbiAgICAgIHRoaXMubGlzdCA9IGxzO1xuICAgICAgaWYgKHRoaXMuY2RyICYmICEodGhpcy5jZHIgYXMgVmlld1JlZikuZGVzdHJveWVkKSB7XG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIOi3r+eUsee8k+WtmOWPmOWMluiuoumYhVxuICAgIHRoaXMucmV1c2VUYWJTZXJ2aWNlLmNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgc3dpdGNoIChyZXMgJiYgcmVzLmFjdGl2ZSkge1xuICAgICAgICBjYXNlICd0aXRsZSc6XG4gICAgICAgICAgaWYgKHRoaXMubGlzdCAmJiB0aGlzLmxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmdlbkxpc3QocmVzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy51cGRhdGVUaXRsZShyZXMpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY2FzZSAnb3ZlcnJpZGUnOlxuICAgICAgICAgIGlmIChyZXMgJiYgcmVzLmxpc3QgJiYgcmVzLmxpc3QubGVuZ3RoID09PSB0aGlzLmxpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBvcyQubmV4dCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHRoaXMuZ2VuTGlzdChyZXMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZXVzZVRhYlNlcnZpY2UuaW5pdCgpO1xuXG4gICAgdGhpcy5yZXVzZVRhYkNvbnRleHRTZXJ2aWNlLnNob3dcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpXG4gICAgICAuc3Vic2NyaWJlKGNvbnRleHQgPT4gdGhpcy5yZXVzZVRhYkNvbnRleHRTZXJ2aWNlLm9wZW4oY29udGV4dCkpO1xuICAgIHRoaXMucmV1c2VUYWJDb250ZXh0U2VydmljZS5jbG9zZVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSlcbiAgICAgIC5zdWJzY3JpYmUocmVzID0+IHRoaXMuY29udGV4dE1lbnVDaGFuZ2UocmVzKSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtQIGluIGtleW9mIHRoaXNdPzogU2ltcGxlQ2hhbmdlIH0gJiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMubWF4KSB0aGlzLnJldXNlVGFiU2VydmljZS5tYXggPSB0aGlzLm1heDtcbiAgICBpZiAoY2hhbmdlcy5leGNsdWRlcykgdGhpcy5yZXVzZVRhYlNlcnZpY2UuZXhjbHVkZXMgPSB0aGlzLmV4Y2x1ZGVzO1xuICAgIGlmIChjaGFuZ2VzLmtlZXBpbmdTY3JvbGwpIHtcbiAgICAgIHRoaXMucmV1c2VUYWJTZXJ2aWNlLmtlZXBpbmdTY3JvbGwgPSB0aGlzLmtlZXBpbmdTY3JvbGw7XG4gICAgICB0aGlzLnJldXNlVGFiU2VydmljZS5rZWVwaW5nU2Nyb2xsQ29udGFpbmVyID0gdGhpcy5fa2VlcGluZ1Njcm9sbENvbnRhaW5lcjtcbiAgICB9XG5cbiAgICB0aGlzLnJldXNlVGFiU2VydmljZS5kZWJ1ZyA9IHRoaXMuZGVidWc7XG5cbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBjb25zdCB7dW5zdWJzY3JpYmUkfSA9IHRoaXM7XG4gICAgdW5zdWJzY3JpYmUkLm5leHQoKTtcbiAgICB1bnN1YnNjcmliZSQuY29tcGxldGUoKTtcbiAgfVxufVxuIiwiPHByby10YWJzZXQgI3RhYnNldFxuICAgICAgICAgICAgbnpUeXBlPVwiZWRpdGFibGUtY2FyZFwiXG4gICAgICAgICAgICBbbnpTaXplXT1cIidzbWFsbCdcIlxuICAgICAgICAgICAgW256SGlkZUFkZF09XCJ0cnVlXCJcbiAgICAgICAgICAgIFtuelNlbGVjdGVkSW5kZXhdPVwicG9zXCJcbiAgICAgICAgICAgIChuekNsb3NlKT1cIm15Q2xvc2UoJGV2ZW50KVwiPlxuICA8bmctY29udGFpbmVyICAqbmdGb3I9XCJsZXQgaSBvZiBsaXN0OyBsZXQgaW5kZXggPSBpbmRleFwiID5cbiAgICA8cHJvLXRhYiBbbnpUaXRsZV09XCJ0aXRsZVRlbXBsYXRlXCIgW256Q2xvc2FibGVdPVwiaS5jbG9zYWJsZVwiIChuekNsaWNrKT1cIl90byhpbmRleClcIiAobnpDb250ZXh0bWVudSk9XCJvcGVuTWVudSgkZXZlbnQsaSlcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSAjdGl0bGVUZW1wbGF0ZT5cbiAgICAgICAge3tpLnRpdGxlfX1cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC9wcm8tdGFiPlxuICA8L25nLWNvbnRhaW5lcj5cbjwvcHJvLXRhYnNldD5cbiJdfQ==