import { EventEmitter, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ThemeColorComponent implements OnInit {
    colors: any[];
    title: string;
    value: string;
    onChange: EventEmitter<any>;
    colorList: any[];
    constructor();
    ngOnInit(): void;
    select(key: string): void;
    static ɵfac: i0.ɵɵFactoryDef<ThemeColorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ThemeColorComponent, "pro-theme-color", ["proThemeColor"], { "colors": "colors"; "title": "title"; "value": "value"; }, { "onChange": "onChange"; }, never, never>;
}
