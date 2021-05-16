import { ChangeDetectorRef } from '@angular/core';
import { SharedUtilsService } from './shared/shared-utils.service';
import { AppGlobalConfig } from '../models/app-config';
import * as i0 from "@angular/core";
export declare class UtilsService extends SharedUtilsService {
    private globalParams;
    constructor(globalParams: AppGlobalConfig);
    getUriInfo(uri: string): any;
    processWidgetSetting(setting: any): any;
    addManifest2WidgetJson(widgetJson: any, manifest: any): void;
    addManifestProperies(manifest: any): void;
    addThemeManifestProperies(manifest: any): void;
    addWidgetManifestProperties(manifest: any): void;
    processManifestLabel(manifest: any, locale: any): void;
    replacePlaceHolder(obj: any, props: any): any;
    addI18NLabel(manifest: any): Promise<any>;
    processUrlInAppConfig(url: any): any;
    isEqual(o1: any, o2: any): boolean;
    deleteMapOptions(mapOptions: any): void;
    reCreateObject(obj: any): any;
    getPositionStyle(_position: any): any;
    static detectChanges(cdr: ChangeDetectorRef): void;
    static ɵfac: i0.ɵɵFactoryDef<UtilsService, never>;
    static ɵprov: i0.ɵɵInjectableDef<UtilsService>;
}
//# sourceMappingURL=utils.service.d.ts.map