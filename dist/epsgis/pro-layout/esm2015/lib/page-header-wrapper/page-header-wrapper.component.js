import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, PRIMARY_OUTLET, Router } from '@angular/router';
import { filter, takeUntil, startWith } from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../grid-content/grid-content.component";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/page-header";
import * as i4 from "ng-zorro-antd/breadcrumb";
import * as i5 from "ng-zorro-antd/tabs";
const _c0 = ["contentTemplate"];
function PageHeaderWrapperComponent_ng_container_3_1_ng_template_0_Template(rf, ctx) { }
function PageHeaderWrapperComponent_ng_container_3_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PageHeaderWrapperComponent_ng_container_3_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function PageHeaderWrapperComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PageHeaderWrapperComponent_ng_container_3_1_Template, 1, 0, undefined, 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r0.pageHeaderRender);
} }
function PageHeaderWrapperComponent_ng_template_4_nz_breadcrumb_item_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nz-breadcrumb-item");
    i0.ɵɵelementStart(1, "a", 11);
    i0.ɵɵlistener("click", function PageHeaderWrapperComponent_ng_template_4_nz_breadcrumb_item_2_Template_a_click_1_listener($event) { i0.ɵɵrestoreView(_r13); const breadcrumb_r11 = ctx.$implicit; const ctx_r12 = i0.ɵɵnextContext(2); return ctx_r12.navigate(breadcrumb_r11.path, $event); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const breadcrumb_r11 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("href", breadcrumb_r11.path, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", breadcrumb_r11.name, " ");
} }
function PageHeaderWrapperComponent_ng_template_4_nz_page_header_tags_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PageHeaderWrapperComponent_ng_template_4_nz_page_header_tags_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nz-page-header-tags");
    i0.ɵɵtemplate(1, PageHeaderWrapperComponent_ng_template_4_nz_page_header_tags_3_ng_container_1_Template, 1, 0, "ng-container", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r7.tags);
} }
function PageHeaderWrapperComponent_ng_template_4_nz_page_header_extra_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 15);
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r15.extra);
} }
function PageHeaderWrapperComponent_ng_template_4_nz_page_header_extra_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r16.extra);
} }
function PageHeaderWrapperComponent_ng_template_4_nz_page_header_extra_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nz-page-header-extra");
    i0.ɵɵelementContainerStart(1, 12);
    i0.ɵɵtemplate(2, PageHeaderWrapperComponent_ng_template_4_nz_page_header_extra_4_ng_container_2_Template, 1, 1, "ng-container", 13);
    i0.ɵɵtemplate(3, PageHeaderWrapperComponent_ng_template_4_nz_page_header_extra_4_ng_container_3_Template, 2, 1, "ng-container", 14);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r8.isTemplateRef(ctx_r8.extra));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r8.isNonEmptyString(ctx_r8.extra));
} }
function PageHeaderWrapperComponent_ng_template_4_nz_page_header_content_5_div_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 15);
} if (rf & 2) {
    const ctx_r19 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r19.content);
} }
function PageHeaderWrapperComponent_ng_template_4_nz_page_header_content_5_div_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r20 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r20.content);
} }
function PageHeaderWrapperComponent_ng_template_4_nz_page_header_content_5_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementContainerStart(1, 12);
    i0.ɵɵtemplate(2, PageHeaderWrapperComponent_ng_template_4_nz_page_header_content_5_div_4_ng_container_2_Template, 1, 1, "ng-container", 13);
    i0.ɵɵtemplate(3, PageHeaderWrapperComponent_ng_template_4_nz_page_header_content_5_div_4_ng_container_3_Template, 2, 1, "ng-container", 14);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r17 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate1("", ctx_r17.prefixedClassName, "-content");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r17.isTemplateRef(ctx_r17.content));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r17.isNonEmptyString(ctx_r17.content));
} }
function PageHeaderWrapperComponent_ng_template_4_nz_page_header_content_5_div_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 15);
} if (rf & 2) {
    const ctx_r21 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r21.extraContent);
} }
function PageHeaderWrapperComponent_ng_template_4_nz_page_header_content_5_div_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r22 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r22.extraContent);
} }
function PageHeaderWrapperComponent_ng_template_4_nz_page_header_content_5_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementContainerStart(1, 12);
    i0.ɵɵtemplate(2, PageHeaderWrapperComponent_ng_template_4_nz_page_header_content_5_div_5_ng_container_2_Template, 1, 1, "ng-container", 13);
    i0.ɵɵtemplate(3, PageHeaderWrapperComponent_ng_template_4_nz_page_header_content_5_div_5_ng_container_3_Template, 2, 1, "ng-container", 14);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r18 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate1("", ctx_r18.prefixedClassName, "-extraContent");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r18.isTemplateRef(ctx_r18.extraContent));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r18.isNonEmptyString(ctx_r18.extraContent));
} }
function PageHeaderWrapperComponent_ng_template_4_nz_page_header_content_5_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
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
} }
function PageHeaderWrapperComponent_ng_template_4_nz_page_header_footer_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "nz-tab", 18);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const tab_r24 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzTitle", tab_r24.tab);
} }
function PageHeaderWrapperComponent_ng_template_4_nz_page_header_footer_6_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nz-page-header-footer");
    i0.ɵɵelementStart(1, "nz-tabset", 17);
    i0.ɵɵlistener("nzSelectChange", function PageHeaderWrapperComponent_ng_template_4_nz_page_header_footer_6_Template_nz_tabset_nzSelectChange_1_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r25 = i0.ɵɵnextContext(2); return ctx_r25.selectChange($event); });
    i0.ɵɵtemplate(2, PageHeaderWrapperComponent_ng_template_4_nz_page_header_footer_6_ng_container_2_Template, 2, 1, "ng-container", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("", ctx_r10.prefixedClassName, "-tabs");
    i0.ɵɵproperty("nzSelectedIndex", ctx_r10.getSelectedIndex())("nzTabBarExtraContent", ctx_r10.tabBarExtraContent);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r10.tabList);
} }
function PageHeaderWrapperComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nz-page-header", 7);
    i0.ɵɵlistener("nzBack", function PageHeaderWrapperComponent_ng_template_4_Template_nz_page_header_nzBack_0_listener($event) { i0.ɵɵrestoreView(_r28); const ctx_r27 = i0.ɵɵnextContext(); return ctx_r27.back.emit($event); });
    i0.ɵɵelementStart(1, "nz-breadcrumb", 8);
    i0.ɵɵtemplate(2, PageHeaderWrapperComponent_ng_template_4_nz_breadcrumb_item_2_Template, 3, 2, "nz-breadcrumb-item", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, PageHeaderWrapperComponent_ng_template_4_nz_page_header_tags_3_Template, 2, 1, "nz-page-header-tags", 10);
    i0.ɵɵtemplate(4, PageHeaderWrapperComponent_ng_template_4_nz_page_header_extra_4_Template, 4, 3, "nz-page-header-extra", 10);
    i0.ɵɵtemplate(5, PageHeaderWrapperComponent_ng_template_4_nz_page_header_content_5_Template, 6, 11, "nz-page-header-content", 10);
    i0.ɵɵtemplate(6, PageHeaderWrapperComponent_ng_template_4_nz_page_header_footer_6_Template, 3, 6, "nz-page-header-footer", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
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
} }
const _c1 = ["*"];
export const ROUTE_DATA_BREADCRUMB_NAME = 'name';
export const DefaultLocation = {
    name: '首页',
    params: {},
    path: '/'
};
export class PageHeaderWrapperComponent {
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
PageHeaderWrapperComponent.ɵfac = function PageHeaderWrapperComponent_Factory(t) { return new (t || PageHeaderWrapperComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.Injector)); };
PageHeaderWrapperComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PageHeaderWrapperComponent, selectors: [["pro-page-header-wrapper"]], viewQuery: function PageHeaderWrapperComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 3);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.contentTemplate = _t.first);
    } }, inputs: { ghost: "ghost", title: "title", subtitle: "subtitle", backIcon: "backIcon", extra: "extra", tags: "tags", content: "content", extraContent: "extraContent", pageHeaderRender: "pageHeaderRender", location: "location", tabList: "tabList", tabActiveKey: "tabActiveKey", tabBarExtraContent: "tabBarExtraContent", contentWidth: "contentWidth" }, outputs: { back: "back", onTabChange: "onTabChange" }, exportAs: ["proPageHeaderWrapper"], ngContentSelectors: _c1, decls: 10, vars: 10, consts: [[2, "margin", "-24px -24px 0"], [3, "contentWidth"], [4, "ngIf", "ngIfElse"], ["defaultPageHeader", ""], [3, "cdkObserveContent"], ["contentTemplate", ""], [4, "ngTemplateOutlet"], [3, "nzTitle", "nzGhost", "nzSubtitle", "nzBackIcon", "nzBack"], ["nz-page-header-breadcrumb", ""], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "click"], [3, "ngSwitch"], [3, "ngTemplateOutlet", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [3, "ngTemplateOutlet"], [3, "class", 4, "ngIf"], [3, "nzSelectedIndex", "nzTabBarExtraContent", "nzSelectChange"], [3, "nzTitle"]], template: function PageHeaderWrapperComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(5);
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
    } }, directives: [i1.GridContentComponent, i2.NgIf, i2.NgTemplateOutlet, i3.NzPageHeaderComponent, i4.NzBreadCrumbComponent, i3.NzPageHeaderBreadcrumbDirective, i2.NgForOf, i4.NzBreadCrumbItemComponent, i3.NzPageHeaderTagDirective, i3.NzPageHeaderExtraDirective, i2.NgSwitch, i2.NgSwitchCase, i3.NzPageHeaderContentDirective, i3.NzPageHeaderFooterDirective, i5.NzTabSetComponent, i5.NzTabComponent], styles: [".ant-pro-page-header-wrap-children-content{margin:24px 24px 0}.ant-pro-page-header-wrap-page-header-warp{background-color:#fff}.ant-pro-page-header-wrap-main .ant-pro-page-header-wrap-detail{display:flex}.ant-pro-page-header-wrap-main .ant-pro-page-header-wrap-row{display:flex;width:100%}.ant-pro-page-header-wrap-main .ant-pro-page-header-wrap-title-content{margin-bottom:16px}.ant-pro-page-header-wrap-main .ant-pro-page-header-wrap-content,.ant-pro-page-header-wrap-main .ant-pro-page-header-wrap-title{flex:auto}.ant-pro-page-header-wrap-main .ant-pro-page-header-wrap-extraContent,.ant-pro-page-header-wrap-main .ant-pro-page-header-wrap-main{flex:0 1 auto}.ant-pro-page-header-wrap-main .ant-pro-page-header-wrap-main{width:100%}.ant-pro-page-header-wrap-main .ant-pro-page-header-wrap-logo,.ant-pro-page-header-wrap-main .ant-pro-page-header-wrap-title{margin-bottom:16px}.ant-pro-page-header-wrap-main .ant-pro-page-header-wrap-extraContent{min-width:242px;margin-left:88px;text-align:right}@media screen and (max-width:1200px){.ant-pro-page-header-wrap-main .ant-pro-page-header-wrap-extraContent{margin-left:44px}}@media screen and (max-width:992px){.ant-pro-page-header-wrap-main .ant-pro-page-header-wrap-extraContent{margin-left:20px}}@media screen and (max-width:768px){.ant-pro-page-header-wrap-main .ant-pro-page-header-wrap-row{display:block}.ant-pro-page-header-wrap-main .ant-pro-page-header-wrap-action,.ant-pro-page-header-wrap-main .ant-pro-page-header-wrap-extraContent{margin-left:0;text-align:left}}@media screen and (max-width:576px){.ant-pro-page-header-wrap-detail{display:block}.ant-pro-page-header-wrap-extraContent{margin-left:0}}"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PageHeaderWrapperComponent, [{
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
    }], function () { return [{ type: i0.Renderer2 }, { type: i0.NgZone }, { type: i0.ChangeDetectorRef }, { type: i0.Injector }]; }, { ghost: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1oZWFkZXItd3JhcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wcm8tbGF5b3V0L3NyYy9saWIvcGFnZS1oZWFkZXItd3JhcHBlci9wYWdlLWhlYWRlci13cmFwcGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Byby1sYXlvdXQvc3JjL2xpYi9wYWdlLWhlYWRlci13cmFwcGVyL3BhZ2UtaGVhZGVyLXdyYXBwZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBQ0csWUFBWSxFQUN4QixLQUFLLEVBQ0csTUFBTSxFQUVkLFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBQyxjQUFjLEVBQUUsYUFBYSxFQUFVLGNBQWMsRUFBRSxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM5RixPQUFPLEVBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RCxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDOzs7Ozs7Ozs7O0lDWHJCLHlHQUFnRTs7O0lBRGxFLDZCQUErRDtJQUM3RCwwRkFBZ0U7SUFDbEUsMEJBQWU7OztJQURDLGVBQWtDO0lBQWxDLDBEQUFrQzs7OztJQVU1QywwQ0FBMkQ7SUFDekQsNkJBQytDO0lBQTVDLCtSQUEyQztJQUM1QyxZQUNGO0lBQUEsaUJBQUk7SUFDTixpQkFBcUI7OztJQUpoQixlQUE2QjtJQUE3Qiw2REFBNkI7SUFFOUIsZUFDRjtJQURFLG9EQUNGOzs7SUFNRix3QkFBc0Q7OztJQUR4RCwyQ0FBa0M7SUFDaEMsaUlBQXNEO0lBQ3hELGlCQUFzQjs7O0lBREwsZUFBc0I7SUFBdEIsOENBQXNCOzs7SUFNbkMs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LEtBQUs7WUFDSSxJQUFJO2tCQUFiLE1BQU07WUFFRSxLQUFLO2tCQUFiLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csZ0JBQWdCO2tCQUF4QixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUVHLE9BQU87a0JBQWYsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxrQkFBa0I7a0JBQTFCLEtBQUs7WUFDSSxXQUFXO2tCQUFwQixNQUFNO1lBRUUsWUFBWTtrQkFBcEIsS0FBSztZQUdFLGVBQWU7a0JBRHRCLFNBQVM7bUJBQUMsaUJBQWlCLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5qZWN0b3IsXG4gIElucHV0LCBOZ1pvbmUsIE9uRGVzdHJveSxcbiAgT25Jbml0LCBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIE5hdmlnYXRpb25FbmQsIFBhcmFtcywgUFJJTUFSWV9PVVRMRVQsIFJvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7ZmlsdGVyLCB0YWtlVW50aWwsIHN0YXJ0V2l0aH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtTdWJqZWN0fSBmcm9tICdyeGpzJztcbmltcG9ydCB7Q29udGVudFdpZHRofSBmcm9tICcuLi9jb3JlL2RlZmF1bHQtc2V0dGluZ3MnO1xuXG5leHBvcnQgY29uc3QgUk9VVEVfREFUQV9CUkVBRENSVU1CX05BTUUgPSAnbmFtZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnJlYWRjcnVtYk9wdGlvbiB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGxvY2FsZT86IHN0cmluZztcbiAgaWNvbj86IHN0cmluZztcbiAgcGF0aDogc3RyaW5nO1xuICBwYXJhbXM6IFBhcmFtcztcblxuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBjb25zdCBEZWZhdWx0TG9jYXRpb246IEJyZWFkY3J1bWJPcHRpb24gPSB7XG4gIG5hbWU6ICfpppbpobUnLFxuICBwYXJhbXM6IHt9LFxuICBwYXRoOiAnLydcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Byby1wYWdlLWhlYWRlci13cmFwcGVyJyxcbiAgdGVtcGxhdGVVcmw6ICdwYWdlLWhlYWRlci13cmFwcGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3BhZ2UtaGVhZGVyLXdyYXBwZXIuY29tcG9uZW50Lmxlc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGV4cG9ydEFzOiAncHJvUGFnZUhlYWRlcldyYXBwZXInLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBQYWdlSGVhZGVyV3JhcHBlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcblxuICAvLyBuei1wYWdlLWhlYWRlcuWOn+acieWxnuaAp1xuICBASW5wdXQoKSBnaG9zdCA9IHRydWU7XG4gIEBJbnB1dCgpIHRpdGxlOiBUZW1wbGF0ZVJlZjx2b2lkPiB8IHN0cmluZztcbiAgQElucHV0KCkgc3VidGl0bGU6IFRlbXBsYXRlUmVmPHZvaWQ+IHwgc3RyaW5nO1xuICBASW5wdXQoKSBiYWNrSWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcbiAgQE91dHB1dCgpIGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgQElucHV0KCkgZXh0cmE6IFRlbXBsYXRlUmVmPHZvaWQ+IHwgc3RyaW5nO1xuICBASW5wdXQoKSB0YWdzOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgY29udGVudDogVGVtcGxhdGVSZWY8dm9pZD4gfCBzdHJpbmc7XG4gIEBJbnB1dCgpIGV4dHJhQ29udGVudDogVGVtcGxhdGVSZWY8dm9pZD4gfCBzdHJpbmc7XG4gIEBJbnB1dCgpIHBhZ2VIZWFkZXJSZW5kZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBsb2NhdGlvbjogQnJlYWRjcnVtYk9wdGlvbiA9IERlZmF1bHRMb2NhdGlvbjsgLy8g6aaW6aG1XG5cbiAgQElucHV0KCkgdGFiTGlzdDogeyBrZXk6IHN0cmluZzsgdGFiOiBzdHJpbmc7IH1bXTtcbiAgQElucHV0KCkgdGFiQWN0aXZlS2V5OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRhYkJhckV4dHJhQ29udGVudDogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBPdXRwdXQoKSBvblRhYkNoYW5nZTogRXZlbnRFbWl0dGVyPHsga2V5OiBzdHJpbmc7IHRhYjogc3RyaW5nOyB9PiA9IG5ldyBFdmVudEVtaXR0ZXI8eyBrZXk6IHN0cmluZzsgdGFiOiBzdHJpbmc7IH0+KCk7XG5cbiAgQElucHV0KCkgY29udGVudFdpZHRoOiBDb250ZW50V2lkdGg7XG5cbiAgQFZpZXdDaGlsZCgnY29udGVudFRlbXBsYXRlJywge3N0YXRpYzogdHJ1ZX0pXG4gIHByaXZhdGUgY29udGVudFRlbXBsYXRlOiBFbGVtZW50UmVmO1xuXG4gIHByZWZpeGVkQ2xhc3NOYW1lID0gJ2FudC1wcm8tcGFnZS1oZWFkZXItd3JhcCc7XG5cbiAgYnJlYWRjcnVtYnM6IEJyZWFkY3J1bWJPcHRpb25bXSB8IHVuZGVmaW5lZCA9IFtdO1xuXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRydWUpIHtcbiAgICAgIHRoaXMucmVnaXN0ZXJSb3V0ZXJDaGFuZ2UoKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnRpdGxlKSB7XG4gICAgICB0aGlzLnRpdGxlID0gdGhpcy5icmVhZGNydW1ic1t0aGlzLmJyZWFkY3J1bWJzLmxlbmd0aCAtIDFdLm5hbWU7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tDb250ZW50KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBjaGVja0NvbnRlbnQoKSB7XG4gICAgaWYgKHRoaXMuaXNFbXB0eSh0aGlzLmNvbnRlbnRUZW1wbGF0ZS5uYXRpdmVFbGVtZW50KSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmNvbnRlbnRUZW1wbGF0ZS5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsICdub25lJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5jb250ZW50VGVtcGxhdGUubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknKTtcbiAgICB9XG4gIH1cblxuICBuYXZpZ2F0ZShwYXRoOiBzdHJpbmcsIGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0aGlzLm5nWm9uZVxuICAgICAgLnJ1bigoKSA9PlxuICAgICAgICB0aGlzLmluamVjdG9yXG4gICAgICAgICAgLmdldChSb3V0ZXIpXG4gICAgICAgICAgLm5hdmlnYXRlQnlVcmwocGF0aClcbiAgICAgICAgICAudGhlbigpXG4gICAgICApXG4gICAgICAudGhlbigpO1xuICB9XG5cbiAgcHJpdmF0ZSByZWdpc3RlclJvdXRlckNoYW5nZSgpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVyID0gdGhpcy5pbmplY3Rvci5nZXQoUm91dGVyKTtcbiAgICAgIGNvbnN0IGFjdGl2YXRlZFJvdXRlID0gdGhpcy5pbmplY3Rvci5nZXQoQWN0aXZhdGVkUm91dGUpO1xuICAgICAgcm91dGVyLmV2ZW50c1xuICAgICAgICAucGlwZShcbiAgICAgICAgICBmaWx0ZXIoZSA9PiBlIGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCksXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxuICAgICAgICAgIHN0YXJ0V2l0aCh0cnVlKSAvLyBUcmlnZ2VyIGluaXRpYWwgcmVuZGVyLlxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuYnJlYWRjcnVtYnMgPSB0aGlzLmdldEJyZWFkY3J1bWJzKGFjdGl2YXRlZFJvdXRlLnJvb3QsICcnLCBbdGhpcy5sb2NhdGlvbl0pO1xuICAgICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFlvdSBzaG91bGQgaW1wb3J0IFJvdXRlck1vZHVsZS5gKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldEJyZWFkY3J1bWJzKFxuICAgIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwYXRoOiBzdHJpbmcgPSAnJyxcbiAgICBicmVhZGNydW1iczogQnJlYWRjcnVtYk9wdGlvbltdID0gW11cbiAgKTogQnJlYWRjcnVtYk9wdGlvbltdIHwgdW5kZWZpbmVkIHtcbiAgICBjb25zdCBjaGlsZHJlbjogQWN0aXZhdGVkUm91dGVbXSA9IHJvdXRlLmNoaWxkcmVuO1xuICAgIC8vIElmIHRoZXJlJ3Mgbm8gc3ViIHJvb3QsIHRoZW4gc3RvcCB0aGUgcmVjdXJzZSBhbmQgcmV0dXJucyB0aGUgZ2VuZXJhdGVkIGJyZWFkY3J1bWJzLlxuICAgIGlmIChjaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBicmVhZGNydW1icztcbiAgICB9XG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgICAgaWYgKGNoaWxkLm91dGxldCA9PT0gUFJJTUFSWV9PVVRMRVQpIHtcbiAgICAgICAgLy8gT25seSBwYXJzZSBjb21wb25lbnRzIGluIHByaW1hcnkgcm91dGVyLW91dGxldCAoaW4gYW5vdGhlciB3b3JkLCByb3V0ZXItb3V0bGV0IHdpdGhvdXQgYSBzcGVjaWZpYyBuYW1lKS5cbiAgICAgICAgLy8gUGFyc2UgdGhpcyBsYXllciBhbmQgZ2VuZXJhdGUgYSBicmVhZGNydW1iIGl0ZW0uXG4gICAgICAgIGNvbnN0IHJvdXRlVVJMOiBzdHJpbmcgPSBjaGlsZC5zbmFwc2hvdC51cmwubWFwKHNlZ21lbnQgPT4gc2VnbWVudC5wYXRoKS5qb2luKCcvJyk7XG4gICAgICAgIGNvbnN0IG5leHRVcmwgPSBwYXRoICsgYC8ke3JvdXRlVVJMfWA7XG4gICAgICAgIGNvbnN0IGJyZWFkY3J1bWJOYW1lID0gY2hpbGQuc25hcHNob3QuZGF0YVtST1VURV9EQVRBX0JSRUFEQ1JVTUJfTkFNRV07XG4gICAgICAgIC8vIElmIGhhdmUgZGF0YSwgZ28gdG8gZ2VuZXJhdGUgYSBicmVhZGNydW1iIGZvciBpdC5cbiAgICAgICAgaWYgKHJvdXRlVVJMICYmIGJyZWFkY3J1bWJOYW1lKSB7XG4gICAgICAgICAgY29uc3QgYnJlYWRjcnVtYjogQnJlYWRjcnVtYk9wdGlvbiA9IHtcbiAgICAgICAgICAgIG5hbWU6IGJyZWFkY3J1bWJOYW1lLFxuICAgICAgICAgICAgcGFyYW1zOiBjaGlsZC5zbmFwc2hvdC5wYXJhbXMsXG4gICAgICAgICAgICBwYXRoOiBuZXh0VXJsXG4gICAgICAgICAgfTtcbiAgICAgICAgICBicmVhZGNydW1icy5wdXNoKGJyZWFkY3J1bWIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmdldEJyZWFkY3J1bWJzKGNoaWxkLCBuZXh0VXJsLCBicmVhZGNydW1icyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0Q2hhbmdlKGV2ZW50KSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRUYWIgPSB0aGlzLnRhYkxpc3RbZXZlbnQuaW5kZXhdO1xuICAgIHRoaXMub25UYWJDaGFuZ2UuZW1pdChzZWxlY3RlZFRhYik7XG4gIH1cblxuICBnZXRTZWxlY3RlZEluZGV4KCkge1xuICAgIGNvbnN0IGlkeCA9IHRoaXMudGFiTGlzdC5maW5kSW5kZXgodyA9PiB3LmtleSA9PT0gdGhpcy50YWJBY3RpdmVLZXkpO1xuICAgIGlmIChpZHggIT09IC0xKSB7XG4gICAgICByZXR1cm4gaWR4O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGlzRW1wdHkoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcbiAgICBjb25zdCBub2RlcyA9IGVsZW1lbnQuY2hpbGROb2RlcztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5maWx0ZXJOb3RFbXB0eU5vZGUobm9kZXMuaXRlbShpKSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgZmlsdGVyTm90RW1wdHlOb2RlKG5vZGU6IE5vZGUpOiBOb2RlIHwgbnVsbCB7XG4gICAgaWYgKG5vZGUpIHtcbiAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxICYmIChub2RlIGFzIEhUTUxFbGVtZW50KS5vdXRlckhUTUwudG9TdHJpbmcoKS50cmltKCkubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIC8vIEVMRU1FTlRfTk9ERVxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgIH0gZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMyAmJiBub2RlLnRleHRDb250ZW50IS50b1N0cmluZygpLnRyaW0oKS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgLy8gVEVYVF9OT0RFXG4gICAgICAgIHJldHVybiBub2RlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaXNOb25FbXB0eVN0cmluZyh2YWx1ZToge30pOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZSAhPT0gJyc7XG4gIH1cblxuICBpc1RlbXBsYXRlUmVmKHZhbHVlOiB7fSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmO1xuICB9XG59XG4iLCI8ZGl2IHN0eWxlPVwibWFyZ2luOiAtMjRweCAtMjRweCAwXCI+XG4gIDxkaXYgY2xhc3M9XCJ7e3ByZWZpeGVkQ2xhc3NOYW1lfX0tcGFnZS1oZWFkZXItd2FycFwiPlxuICAgIDxwcm8tZ3JpZC1jb250ZW50IFtjb250ZW50V2lkdGhdPVwiY29udGVudFdpZHRoXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwicGFnZUhlYWRlclJlbmRlcjtlbHNlOiBkZWZhdWx0UGFnZUhlYWRlclwiPlxuICAgICAgICA8bmctdGVtcGxhdGUgKm5nVGVtcGxhdGVPdXRsZXQ9XCJwYWdlSGVhZGVyUmVuZGVyXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0UGFnZUhlYWRlcj5cbiAgICAgICAgPG56LXBhZ2UtaGVhZGVyIFtuelRpdGxlXT1cInRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtuekdob3N0XT1cImdob3N0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtuelN1YnRpdGxlXT1cInN1YnRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtuekJhY2tJY29uXT1cImJhY2tJY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChuekJhY2spPVwiYmFjay5lbWl0KCRldmVudClcIj5cbiAgICAgICAgICA8IS0tIGJyZWFkY3J1bWIgLS0+XG4gICAgICAgICAgPG56LWJyZWFkY3J1bWIgbnotcGFnZS1oZWFkZXItYnJlYWRjcnVtYj5cbiAgICAgICAgICAgIDxuei1icmVhZGNydW1iLWl0ZW0gKm5nRm9yPVwibGV0IGJyZWFkY3J1bWIgb2YgYnJlYWRjcnVtYnNcIj5cbiAgICAgICAgICAgICAgPGEgW2F0dHIuaHJlZl09XCJicmVhZGNydW1iLnBhdGhcIlxuICAgICAgICAgICAgICAgICAoY2xpY2spPVwibmF2aWdhdGUoYnJlYWRjcnVtYi5wYXRoLCAkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAge3sgYnJlYWRjcnVtYi5uYW1lIH19XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbnotYnJlYWRjcnVtYi1pdGVtPlxuICAgICAgICAgIDwvbnotYnJlYWRjcnVtYj5cblxuICAgICAgICAgIDwhLS0gaGVhZGVyLWV4dHJhIC0tPlxuICAgICAgICAgIDxuei1wYWdlLWhlYWRlci10YWdzICpuZ0lmPVwidGFnc1wiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRhZ3NcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8L256LXBhZ2UtaGVhZGVyLXRhZ3M+XG5cbiAgICAgICAgICA8IS0tIGhlYWRlci1leHRyYSAtLT5cbiAgICAgICAgICA8bnotcGFnZS1oZWFkZXItZXh0cmEgKm5nSWY9XCJleHRyYVwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc1RlbXBsYXRlUmVmKGV4dHJhKVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImV4dHJhXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzTm9uRW1wdHlTdHJpbmcoZXh0cmEpXCI+e3tleHRyYX19PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8L256LXBhZ2UtaGVhZGVyLWV4dHJhPlxuXG4gICAgICAgICAgPCEtLSByZW5kZXJQYWdlSGVhZGVyIC0tPlxuICAgICAgICAgIDxuei1wYWdlLWhlYWRlci1jb250ZW50ICpuZ0lmPVwiY29udGVudCB8fCBleHRyYUNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ7e3ByZWZpeGVkQ2xhc3NOYW1lfX0tZGV0YWlsXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ7e3ByZWZpeGVkQ2xhc3NOYW1lfX0tbWFpblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ7e3ByZWZpeGVkQ2xhc3NOYW1lfX0tcm93XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiY29udGVudFwiIGNsYXNzPVwie3twcmVmaXhlZENsYXNzTmFtZX19LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzVGVtcGxhdGVSZWYoY29udGVudClcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJjb250ZW50XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNOb25FbXB0eVN0cmluZyhjb250ZW50KVwiPnt7Y29udGVudH19PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiZXh0cmFDb250ZW50XCIgY2xhc3M9XCJ7e3ByZWZpeGVkQ2xhc3NOYW1lfX0tZXh0cmFDb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc1RlbXBsYXRlUmVmKGV4dHJhQ29udGVudClcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJleHRyYUNvbnRlbnRcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc05vbkVtcHR5U3RyaW5nKGV4dHJhQ29udGVudClcIj57e2V4dHJhQ29udGVudH19PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9uei1wYWdlLWhlYWRlci1jb250ZW50PlxuXG4gICAgICAgICAgPCEtLSByZW5kZXJGb290ZXIgLS0+XG4gICAgICAgICAgPG56LXBhZ2UtaGVhZGVyLWZvb3RlciAqbmdJZj1cInRhYkxpc3QgJiYgdGFiTGlzdC5sZW5ndGhcIj5cbiAgICAgICAgICAgIDxuei10YWJzZXQgY2xhc3M9XCJ7e3ByZWZpeGVkQ2xhc3NOYW1lfX0tdGFic1wiXG4gICAgICAgICAgICAgICAgICAgICAgIFtuelNlbGVjdGVkSW5kZXhdPVwiZ2V0U2VsZWN0ZWRJbmRleCgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgKG56U2VsZWN0Q2hhbmdlKT1cInNlbGVjdENoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgW256VGFiQmFyRXh0cmFDb250ZW50XT1cInRhYkJhckV4dHJhQ29udGVudFwiPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCB0YWIgb2YgdGFiTGlzdFwiPlxuICAgICAgICAgICAgICAgIDxuei10YWIgW256VGl0bGVdPVwidGFiLnRhYlwiPjwvbnotdGFiPlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvbnotdGFic2V0PlxuICAgICAgICAgIDwvbnotcGFnZS1oZWFkZXItZm9vdGVyPlxuICAgICAgICA8L256LXBhZ2UtaGVhZGVyPlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8L3Byby1ncmlkLWNvbnRlbnQ+XG4gIDwvZGl2PlxuXG4gIDxwcm8tZ3JpZC1jb250ZW50IFtjb250ZW50V2lkdGhdPVwiY29udGVudFdpZHRoXCI+XG4gICAgPGRpdiBjbGFzcz1cInt7cHJlZml4ZWRDbGFzc05hbWV9fS1jaGlsZHJlbi1jb250ZW50XCIgKGNka09ic2VydmVDb250ZW50KT1cImNoZWNrQ29udGVudCgpXCIgI2NvbnRlbnRUZW1wbGF0ZT5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgPC9wcm8tZ3JpZC1jb250ZW50PlxuPC9kaXY+XG4iXX0=