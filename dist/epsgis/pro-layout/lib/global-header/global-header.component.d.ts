import { EventEmitter, OnInit, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class GlobalHeaderComponent implements OnInit {
    isMobile: boolean;
    logo: TemplateRef<void> | string;
    collapsed: boolean;
    collapsedButtonRender: TemplateRef<boolean>;
    rightContentRender: TemplateRef<void>;
    collapsedChange: EventEmitter<boolean>;
    constructor();
    ngOnInit(): void;
    toggle(): void;
    isNonEmptyString(value: {}): boolean;
    isTemplateRef(value: {}): boolean;
    static ɵfac: i0.ɵɵFactoryDef<GlobalHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<GlobalHeaderComponent, "pro-global-header,[pro-global-header]", ["proGlobalHeader"], { "isMobile": "isMobile"; "logo": "logo"; "collapsed": "collapsed"; "collapsedButtonRender": "collapsedButtonRender"; "rightContentRender": "rightContentRender"; }, { "collapsedChange": "collapsedChange"; }, never, never>;
}
