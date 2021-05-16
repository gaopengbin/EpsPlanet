import { CommonService } from './common.service';
import { ConfigLoaderService } from './config-loader.service';
import { WidgetManagerService } from './widget-manager.service';
import { UtilsService } from './utils.service';
import { EventEmitterService } from './event-emitter.service';
import { AppGlobalConfig } from '../models/app-config';
import * as i0 from "@angular/core";
export declare class ConfigManagerService {
    private utils;
    private globalParams;
    private eventService;
    private widgetManager;
    private configLoader;
    private commonService;
    urlParams: any;
    appConfig: any;
    configFile: any;
    _configLoaded: any;
    portalSelf: any;
    _originConfig: any;
    constructor(utils: UtilsService, globalParams: AppGlobalConfig, eventService: EventEmitterService, widgetManager: WidgetManagerService, configLoader: ConfigLoaderService, commonService: CommonService);
    listenBuilderEvents(): void;
    loadConfig(config?: any): Promise<void>;
    _isRunInMobile(): boolean;
    _addDefaultValues(config: any): any;
    _addDefaultPortalUrl(config: any): void;
    _addDefaultGeometryService(appConfig: any): void;
    _addDefaultStyle(config: any): void;
    _addDefaultMap(config: any): void;
    _addDefaultVisible(config: any): void;
    _addDefaultPanelAndPosition(config: any): void;
    processMenuWidgetConfig(menus: any): Promise<any>;
    _onWidgetAdded(obj: any, any: any): void;
    _getCleanConfig(config: any): any;
    getAppConfig(): any;
    _getAppConfigFromTheme(theme: any): Promise<any>;
    _onDesignConfigChanged(params: any): void;
    _genStyles(allStyle: any, currentStyle: any): any[];
    static ɵfac: i0.ɵɵFactoryDef<ConfigManagerService, never>;
    static ɵprov: i0.ɵɵInjectableDef<ConfigManagerService>;
}
//# sourceMappingURL=config-manager.service.d.ts.map