import { AfterViewInit, ChangeDetectorRef, EventEmitter, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export interface RouterData {
    name?: string;
    locale?: string;
    guard?: any;
    [key: string]: any;
}
export interface MenuDataItem {
    name?: string;
    icon?: string;
    locale?: string;
    path: string;
    guard?: any;
    external?: boolean;
    externalClick?: (menuDataItem: MenuDataItem) => void;
    children?: MenuDataItem[];
    [key: string]: any;
}
export declare class BaseMenuComponent implements OnInit, AfterViewInit {
    private cdf;
    style: {
        [key: string]: string;
    };
    mode: string;
    menuData: MenuDataItem[];
    theme: string;
    collapsed: boolean;
    /** @deprecated */
    selectedKey: string;
    openKeys: Array<string>;
    openChange: EventEmitter<any>;
    constructor(cdf: ChangeDetectorRef);
    ngAfterViewInit(): void;
    ngOnInit(): void;
    onOpenChange(status: any, menuData: any): void;
    static ɵfac: i0.ɵɵFactoryDef<BaseMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<BaseMenuComponent, "pro-base-menu", ["proBaseMenu"], { "style": "style"; "mode": "mode"; "menuData": "menuData"; "theme": "theme"; "collapsed": "collapsed"; "selectedKey": "selectedKey"; "openKeys": "openKeys"; }, { "openChange": "openChange"; }, never, never>;
}
