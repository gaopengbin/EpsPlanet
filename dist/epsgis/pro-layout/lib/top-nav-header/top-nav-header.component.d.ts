import { EventEmitter, OnInit, TemplateRef } from '@angular/core';
import { ContentWidth, MenuTheme } from '../core/default-settings';
import { MenuDataItem } from '../sider-menu/base-menu.component';
import * as i0 from "@angular/core";
export declare class TopNavHeaderComponent implements OnInit {
    theme: MenuTheme;
    menuData: MenuDataItem[];
    logo: TemplateRef<void> | string;
    title: TemplateRef<void> | string;
    contentWidth: ContentWidth;
    rightContentRender: TemplateRef<void>;
    menuHeaderRender: TemplateRef<void>;
    onMenuHeaderClick: EventEmitter<any>;
    baseClassName: string;
    maxWidth: number;
    constructor();
    ngOnInit(): void;
    menuHeaderClick(event: Event): void;
    isNonEmptyString(value: {}): boolean;
    isTemplateRef(value: {}): boolean;
    static ɵfac: i0.ɵɵFactoryDef<TopNavHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<TopNavHeaderComponent, "pro-top-nav-header,[pro-top-nav-header]", ["proTopNavHeader"], { "theme": "theme"; "menuData": "menuData"; "logo": "logo"; "title": "title"; "contentWidth": "contentWidth"; "rightContentRender": "rightContentRender"; "menuHeaderRender": "menuHeaderRender"; }, { "onMenuHeaderClick": "onMenuHeaderClick"; }, never, never>;
}
