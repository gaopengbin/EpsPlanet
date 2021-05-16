import { CommonService } from './common.service';
import { HttpReqService } from './request.service';
import { EventEmitterService } from './event-emitter.service';
import { ComponentRef } from '@angular/core';
import { UtilsService } from './utils.service';
import { ComponentLoaderService } from './component-loader.service';
import { WidgetOpenOptions } from '../models/base-widget';
import { ConfigLoaderService } from './config-loader.service';
import { PanelManagerService } from './panel-manager.service';
import { BaseWidgetComponent } from '../components/base-widget/base-widget.component';
import { AppGlobalConfig } from '../models/models';
import { IComponentInfo } from '../decorator/component-register.decorator';
import { BaseWidget } from '../components/base-widget';
import * as i0 from "@angular/core";
export declare class WidgetManagerService {
    private globalParams;
    private eventService;
    private utils;
    private httpService;
    private commonService;
    private componentLoader;
    loaded: Array<ComponentRef<BaseWidgetComponent>>;
    missedActions: Array<any>;
    activeWidget: ComponentRef<BaseWidgetComponent>;
    map: any;
    view: any;
    appConfig: any;
    configLoader: ConfigLoaderService;
    panelManager: PanelManagerService;
    constructor(globalParams: AppGlobalConfig, eventService: EventEmitterService, utils: UtilsService, httpService: HttpReqService, commonService: CommonService, componentLoader: ComponentLoaderService);
    setMap(map: any): void;
    setAppConfig(appConfig: any): void;
    _onMapLoaded(map: any): void;
    _onMapChanged(map: any): void;
    loadConfig(compInfo: IComponentInfo, widget: BaseWidget): Promise<boolean>;
    openWidget(options: WidgetOpenOptions): Promise<BaseWidgetComponent>;
    loadWidget(setting: any, openOptions?: WidgetOpenOptions): Promise<any>;
    private setWidgetPorp;
    private createWidget;
    getAllWidgets(): ComponentRef<BaseWidgetComponent>[];
    loadWidgetClass(setting: any): Promise<any>;
    loadWidgetResources(setting: any): Promise<any>;
    tryLoadWidgetConfig(widgetJson: any): Promise<any>;
    _tryLoadWidgetConfig(setting: any): void;
    loadWidgetManifest(widgetJson: any): Promise<any>;
    loadWidgetSettingPage(setting: any): Promise<any>;
    loadWidgetSettingClass(setting: any): Promise<any>;
    loadWidgetSettingPageResources(setting: any): Promise<any>;
    createWidgetSetting(setting: any, clazz: any): any;
    _hideLoading(): void;
    getWidgetById(id: any): any;
    getWidgetByLabel(label: any): any;
    getWidgetsByName(name: any): any[];
    getOpenedWidgetByGroupId(groupId: any): ComponentRef<BaseWidgetComponent>;
    showWidget(compRef: ComponentRef<BaseWidgetComponent>): void;
    closeOtherWidgetsInTheSameGroup(widget: ComponentRef<BaseWidgetComponent>): void;
    closeAllWidgetsInGroup(groupId: any): void;
    closeWidget(widget: ComponentRef<BaseWidgetComponent> | string): Promise<any>;
    destroyWidget(widget: ComponentRef<BaseWidgetComponent>): void;
    _processManifest(manifest: any): void;
    _tryLoadResource(setting: any, flag: any): Promise<any>;
    _replaceId(id: any): any;
    loadWidgetStyle(widgetSetting: any): void;
    loadWidgetSettingStyle(widgetSetting: any): void;
    loadWidgetConfig(widgetSetting: any): void;
    loadWidgetI18n(widgetSetting: any): void;
    loadWidgetSettingI18n(widgetSetting: any): void;
    loadWidgetTemplate(widgetSetting: any): Promise<any>;
    loadWidgetSettingTemplate(widgetSetting: any): Promise<any>;
    getOnScreenOffPanelWidgets(): ComponentRef<BaseWidgetComponent>[];
    _postWidgetStartup(widgetObject: any): void;
    _triggerMissedAction(widget: ComponentRef<BaseWidgetComponent>): void;
    _remove(id: any): boolean;
    _onDestroyWidget(widget: ComponentRef<BaseWidgetComponent>): void;
    _onDestroyWidgetSetting(settingWidget: any): void;
    _removeWidget(widget: ComponentRef<BaseWidgetComponent>): void;
    removeWidgetStyle(widget: any): void;
    removeWidgetSettingStyle(widget: any): void;
    _onClickWidget(widget: any, evt: any): void;
    _activeWidget(widget: any): void;
    getOffPanelWidgets(): ComponentRef<BaseWidgetComponent>[];
    static ɵfac: i0.ɵɵFactoryDef<WidgetManagerService, never>;
    static ɵprov: i0.ɵɵInjectableDef<WidgetManagerService>;
}
//# sourceMappingURL=widget-manager.service.d.ts.map