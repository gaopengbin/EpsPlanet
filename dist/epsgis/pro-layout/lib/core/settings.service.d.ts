import { InjectionToken } from '@angular/core';
import { Settings } from './default-settings';
import * as i0 from "@angular/core";
/**
 * custom layout setting
 */
export declare const PRO_LAYOUT: InjectionToken<Settings>;
export declare class SettingsService {
    private setting;
    constructor(customSettings: Settings);
    get settings(): Settings;
    setSettings(name: string | Settings, value?: any): boolean;
    static ɵfac: i0.ɵɵFactoryDef<SettingsService, [{ optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<SettingsService>;
}
