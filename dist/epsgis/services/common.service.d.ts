import { UtilsService } from './utils.service';
import { ComponentRef } from '@angular/core';
import { WidgetPosition } from '../models/base-widget';
import { Platforms } from '../utils/platform';
import { PlatformService } from "./platform.service";
import * as i0 from "@angular/core";
export declare class CommonService {
    private utils;
    private platform;
    constructor(utils: UtilsService, platform: PlatformService);
    createPromiseDefer(): {
        resolve: any;
        reject: any;
        promise: () => Promise<any>;
    };
    getComponentRootNode(componentRef: ComponentRef<any>): HTMLElement;
    getElementBounds(ele: HTMLElement): {
        top: number;
        left: number;
        bottom: number;
        right: number;
        width: number;
        height: number;
    };
    getPx(px: any): any;
    getPxNumber(px: number | string): number | string;
    getPosition(positionConfig: any): WidgetPosition;
    setWidgetPosition(compRef: ComponentRef<any>, widgetPosition: any): void;
    private win;
    is(platformName: Platforms): boolean;
    getPlatformName(): string;
    isMobileNotTablet(): boolean;
    isMobile(): boolean;
    isMobileRealMachine(): boolean;
    isAndroid(): boolean;
    isIos(): boolean;
    static ɵfac: i0.ɵɵFactoryDef<CommonService, never>;
    static ɵprov: i0.ɵɵInjectableDef<CommonService>;
}
//# sourceMappingURL=common.service.d.ts.map