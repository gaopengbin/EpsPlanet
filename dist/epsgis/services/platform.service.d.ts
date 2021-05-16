import { NgZone } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Platforms } from "../utils/platform";
import * as i0 from "@angular/core";
export interface BackButtonEventDetail {
    register(priority: number, handler: () => Promise<any> | void): void;
}
export interface BackButtonEmitter extends Subject<BackButtonEventDetail> {
    subscribeWithPriority(priority: number, callback: () => Promise<any> | void): Subscription;
}
export declare class PlatformService {
    private doc;
    private _readyPromise;
    private win;
    backButton: BackButtonEmitter;
    pause: Subject<void>;
    resume: Subject<void>;
    resize: Subject<void>;
    constructor(doc: any, zone: NgZone);
    is(platformName: Platforms): boolean;
    platforms(): string[];
    ready(): Promise<string>;
    get isRTL(): boolean;
    getQueryParam(key: string): string | null;
    isLandscape(): boolean;
    isPortrait(): boolean;
    testUserAgent(expression: string): boolean;
    url(): any;
    width(): any;
    height(): number;
    static ɵfac: i0.ɵɵFactoryDef<PlatformService, never>;
    static ɵprov: i0.ɵɵInjectableDef<PlatformService>;
}
//# sourceMappingURL=platform.service.d.ts.map