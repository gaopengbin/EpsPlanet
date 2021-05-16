import { EventManager } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AppGlobalConfig } from '../models/app-config';
import { LayoutManagerService } from './layout-manager.service';
import { WidgetPlaceHolderService } from './widget-place-holder.service';
import { PanelManagerService } from './panel-manager.service';
import { MapManagerService } from './map-manager.service';
import { ConfigManagerService } from './config-manager.service';
import { ConfigLoaderService } from './config-loader.service';
import { WidgetManagerService } from './widget-manager.service';
import { CommonService } from './common.service';
import { UtilsService } from './utils.service';
import { HttpReqService } from './request.service';
import { ModalManagerService } from './modal-manager.service';
import { ComponentLoaderService } from './component-loader.service';
import { SettingService } from './setting.service';
import * as i0 from "@angular/core";
export declare class ServiceInjector {
    config: AppGlobalConfig;
    utils: UtilsService;
    commonService: CommonService;
    httpService: HttpReqService;
    configLoader: ConfigLoaderService;
    configManager: ConfigManagerService;
    mapManager: MapManagerService;
    panelManager: PanelManagerService;
    widgetManager: WidgetManagerService;
    widgetPlaceHolder: WidgetPlaceHolderService;
    layoutManager: LayoutManagerService;
    jsEventManager: EventManager;
    private route;
    componentManager: ComponentLoaderService;
    modalManaer: ModalManagerService;
    settingService: SettingService;
    constructor(config: AppGlobalConfig, utils: UtilsService, commonService: CommonService, httpService: HttpReqService, configLoader: ConfigLoaderService, configManager: ConfigManagerService, mapManager: MapManagerService, panelManager: PanelManagerService, widgetManager: WidgetManagerService, widgetPlaceHolder: WidgetPlaceHolderService, layoutManager: LayoutManagerService, jsEventManager: EventManager, route: ActivatedRoute, componentManager: ComponentLoaderService, modalManaer: ModalManagerService, settingService: SettingService);
    static ɵfac: i0.ɵɵFactoryDef<ServiceInjector, never>;
    static ɵprov: i0.ɵɵInjectableDef<ServiceInjector>;
}
//# sourceMappingURL=service-injector.d.ts.map