import { EventEmitter, OnInit } from '@angular/core';
import { CloseType, ReuseContextCloseEvent, ReuseItem } from "./reuse-tab.interface";
import * as i0 from "@angular/core";
export declare class ReuseTabMenuComponent implements OnInit {
    item: ReuseItem;
    event: MouseEvent;
    readonly close: EventEmitter<ReuseContextCloseEvent>;
    documentClick(event: any): void;
    documentContextmenu(event: any): void;
    get includeNonCloseable(): boolean;
    constructor();
    ngOnInit(): void;
    private notify;
    click(e: MouseEvent, type: CloseType): void;
    closeMenu(event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDef<ReuseTabMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ReuseTabMenuComponent, "pro-reuse-tab-context-menu", ["proReuseTabContextMenu"], { "item": "item"; "event": "event"; }, { "close": "close"; }, never, never>;
}
