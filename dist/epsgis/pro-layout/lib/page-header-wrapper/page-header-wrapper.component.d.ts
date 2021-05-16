import { AfterViewInit, ChangeDetectorRef, EventEmitter, Injector, NgZone, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { Params } from '@angular/router';
import { ContentWidth } from '../core/default-settings';
import * as i0 from "@angular/core";
export declare const ROUTE_DATA_BREADCRUMB_NAME = "name";
export interface BreadcrumbOption {
    name?: string;
    locale?: string;
    icon?: string;
    path: string;
    params: Params;
    [key: string]: any;
}
export declare const DefaultLocation: BreadcrumbOption;
export declare class PageHeaderWrapperComponent implements OnInit, AfterViewInit, OnDestroy {
    private renderer;
    private ngZone;
    private cdr;
    private injector;
    ghost: boolean;
    title: TemplateRef<void> | string;
    subtitle: TemplateRef<void> | string;
    backIcon: string | TemplateRef<void> | null;
    back: EventEmitter<void>;
    extra: TemplateRef<void> | string;
    tags: TemplateRef<void>;
    content: TemplateRef<void> | string;
    extraContent: TemplateRef<void> | string;
    pageHeaderRender: TemplateRef<void>;
    location: BreadcrumbOption;
    tabList: {
        key: string;
        tab: string;
    }[];
    tabActiveKey: string;
    tabBarExtraContent: TemplateRef<void>;
    onTabChange: EventEmitter<{
        key: string;
        tab: string;
    }>;
    contentWidth: ContentWidth;
    private contentTemplate;
    prefixedClassName: string;
    breadcrumbs: BreadcrumbOption[] | undefined;
    private destroy$;
    constructor(renderer: Renderer2, ngZone: NgZone, cdr: ChangeDetectorRef, injector: Injector);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    checkContent(): void;
    navigate(path: string, e: MouseEvent): void;
    private registerRouterChange;
    private getBreadcrumbs;
    selectChange(event: any): void;
    getSelectedIndex(): number;
    private isEmpty;
    private filterNotEmptyNode;
    isNonEmptyString(value: {}): boolean;
    isTemplateRef(value: {}): boolean;
    static ɵfac: i0.ɵɵFactoryDef<PageHeaderWrapperComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PageHeaderWrapperComponent, "pro-page-header-wrapper", ["proPageHeaderWrapper"], { "ghost": "ghost"; "title": "title"; "subtitle": "subtitle"; "backIcon": "backIcon"; "extra": "extra"; "tags": "tags"; "content": "content"; "extraContent": "extraContent"; "pageHeaderRender": "pageHeaderRender"; "location": "location"; "tabList": "tabList"; "tabActiveKey": "tabActiveKey"; "tabBarExtraContent": "tabBarExtraContent"; "contentWidth": "contentWidth"; }, { "back": "back"; "onTabChange": "onTabChange"; }, never, ["*"]>;
}
