import { EventEmitter, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class BlockCheckboxComponent implements OnInit {
    value: string;
    list: {
        title: string;
        key: string;
        url: string;
    }[];
    onChange: EventEmitter<any>;
    baseClassName: string;
    constructor();
    ngOnInit(): void;
    select(key: string): void;
    static ɵfac: i0.ɵɵFactoryDef<BlockCheckboxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<BlockCheckboxComponent, "pro-block-checkbox", ["proBlockCheckbox"], { "value": "value"; "list": "list"; }, { "onChange": "onChange"; }, never, never>;
}
