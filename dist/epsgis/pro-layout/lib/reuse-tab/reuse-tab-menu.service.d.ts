import { Overlay } from '@angular/cdk/overlay';
import { Subject } from 'rxjs';
import { ReuseContextCloseEvent, ReuseContextEvent } from './reuse-tab.interface';
import * as i0 from "@angular/core";
export declare class ReuseTabMenuService {
    private overlay;
    private ref;
    show: Subject<ReuseContextEvent>;
    close: Subject<ReuseContextCloseEvent>;
    constructor(overlay: Overlay);
    remove(): void;
    open(context: ReuseContextEvent): void;
    static ɵfac: i0.ɵɵFactoryDef<ReuseTabMenuService, never>;
    static ɵprov: i0.ɵɵInjectableDef<ReuseTabMenuService>;
}
