import { InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
export declare const AppGlobalConfigToken: InjectionToken<AppGlobalConfig>;
export declare class AppInitService {
    private httpClient;
    private _mergedConfig;
    constructor(httpClient: HttpClient);
    private getPath;
    private getUrlParams;
    init(__config: AppGlobalConfig): this;
    loadGlobalConfig(): Promise<boolean>;
    getConfig(): AppGlobalConfig;
    static ɵfac: i0.ɵɵFactoryDef<AppInitService, never>;
    static ɵprov: i0.ɵɵInjectableDef<AppInitService>;
}
export declare class AppGlobalConfig {
    title?: string;
    subtitle?: string;
    logo?: string;
    apiRootUrl?: string;
    jobApiUrl?: string;
    settingApiUrl?: string;
    widgetRootPath?: string;
    wabVersion?: string;
    path?: string;
    urlParams?: UrlParams;
    jimuConfig?: JimuConfig;
    appInfo?: AppInfo;
    dojoConfig?: DojoConfig;
    epsoConfig?: EpsoConfig;
    globalConfigFilePath?: string;
    menuConfig?: {
        notReuseRoutes?: Array<String>;
        notShowInTabRoutes?: Array<String>;
        menuData?: Array<MenuItem>;
    };
    mapConfig?: {
        is3D?: boolean;
        jsApi?: string;
        [key: string]: any;
    };
    log?: boolean;
    [key: string]: any;
    static ɵfac: i0.ɵɵFactoryDef<AppGlobalConfig, never>;
    static ɵprov: i0.ɵɵInjectableDef<AppGlobalConfig>;
}
interface JimuConfig {
    mapId?: string;
    zIndex?: string;
    isSettings?: boolean;
    isDesignMode?: boolean;
    [key: string]: any;
}
interface AppInfo {
    path?: string;
    configFile?: string;
    extendInitjs?: string;
    folderUrlPrefix?: string;
    appPath?: string;
    isRunInMobile?: boolean;
    [key: string]: any;
}
interface DojoConfig {
    locale?: string;
    [key: string]: any;
}
interface UrlParams {
    [key: string]: string | number | boolean;
}
interface EpsoConfig {
    showWorkAreaInAddUser?: boolean;
    WorkAreaMinDepthInAddUser?: number;
    defaultCityCode?: string;
    [key: string]: any;
}
interface MenuItem {
    name?: string;
    path?: string;
    children?: MenuItem[];
    [key: string]: any;
}
export declare const defaultAppGlobalConfig: AppGlobalConfig;
export {};
//# sourceMappingURL=app-config.d.ts.map