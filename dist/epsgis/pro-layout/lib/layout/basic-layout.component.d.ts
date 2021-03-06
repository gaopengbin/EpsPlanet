import { ChangeDetectorRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { GlobalFooterProps } from '../global-footer/global-footer.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentWidth } from '../core/default-settings';
import { MenuDataItem } from '../sider-menu/base-menu.component';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class BasicLayoutComponent implements OnInit, OnChanges, OnDestroy {
    private breakpointObserver;
    private cdf;
    private activatedRoute;
    private router;
    title: TemplateRef<void> | string;
    logo: TemplateRef<void> | string;
    menuHeaderRender: TemplateRef<void>;
    onMenuHeaderClick: EventEmitter<any>;
    mode: string;
    layout: string;
    contentWidth: ContentWidth;
    navTheme: string;
    fixedHeader: boolean;
    fixSiderbar: boolean;
    autoHideHeader: boolean;
    menu: any;
    siderWidth: number;
    collapsed: any;
    onCollapse: EventEmitter<boolean>;
    headerRender: TemplateRef<void>;
    rightContentRender: TemplateRef<void>;
    collapsedButtonRender: TemplateRef<boolean>;
    footerRender: TemplateRef<void> | false;
    links: GlobalFooterProps['links'];
    copyright: TemplateRef<void>;
    reuseTab: boolean;
    menuData: MenuDataItem[];
    isMobile: boolean;
    selectedKey: string;
    openKeys: Array<string>;
    visible: boolean;
    ticking: boolean;
    oldScrollTop: number;
    destroy$: Subject<unknown>;
    constructor(breakpointObserver: BreakpointObserver, cdf: ChangeDetectorRef, activatedRoute: ActivatedRoute, router: Router);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    menuOpenChange(event: {
        status: boolean;
        item: MenuDataItem;
    }): void;
    getOpenKeys(path: string): Array<string>;
    getParent(path: string): MenuDataItem;
    getNearParent(path: string, menu: MenuDataItem): MenuDataItem;
    ngOnDestroy(): void;
    handScroll(): void;
    getPaddingLeft(): string | undefined;
    getHeadWidth(): string;
    onDrawerClose(event: Event): void;
    getContentPaddingTop(): "" | "110px" | "0px";
    isNonEmptyString(value: {}): boolean;
    isTemplateRef(value: {}): boolean;
    static ??fac: i0.????FactoryDef<BasicLayoutComponent, never>;
    static ??cmp: i0.????ComponentDefWithMeta<BasicLayoutComponent, "pro-basic-layout", ["proBasicLayout"], { "title": "title"; "logo": "logo"; "menuHeaderRender": "menuHeaderRender"; "mode": "mode"; "layout": "layout"; "contentWidth": "contentWidth"; "navTheme": "navTheme"; "fixedHeader": "fixedHeader"; "fixSiderbar": "fixSiderbar"; "autoHideHeader": "autoHideHeader"; "menu": "menu"; "siderWidth": "siderWidth"; "collapsed": "collapsed"; "headerRender": "headerRender"; "rightContentRender": "rightContentRender"; "collapsedButtonRender": "collapsedButtonRender"; "footerRender": "footerRender"; "links": "links"; "copyright": "copyright"; "reuseTab": "reuseTab"; "menuData": "menuData"; }, { "onMenuHeaderClick": "onMenuHeaderClick"; "onCollapse": "onCollapse"; }, never, ["*"]>;
}
