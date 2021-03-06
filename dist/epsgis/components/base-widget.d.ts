import { AfterViewInit, OnDestroy, OnInit } from "@angular/core";
import { EventManager } from "@angular/platform-browser";
import { ComponentLoaderService } from "../services/component-loader.service";
import { EventEmitterService } from "../services/event-emitter.service";
import { ServiceInjector } from "../services/service-injector";
import { WidgetPosition, WidgetState, WidgetType, WidgetWindowState } from "../models/base-widget";
import { AppGlobalConfig } from "../models/models";
import { CommonService } from "../services/common.service";
import { ConfigLoaderService } from "../services/config-loader.service";
import { ConfigManagerService } from "../services/config-manager.service";
import { MapManagerService } from "../services/map-manager.service";
import { PanelManagerService } from "../services/panel-manager.service";
import { HttpReqService } from "../services/request.service";
import { LayoutManagerService, WidgetManagerService, WidgetPlaceHolderService } from "../services/services";
import { UtilsService } from "../services/utils.service";
import { ModalManagerService } from "../services/modal-manager.service";
import { IComponentInfo } from "../decorator/component-register.decorator";
import { SettingService } from "../services/setting.service";
import * as i0 from "@angular/core";
export declare class BaseWidget implements OnInit, AfterViewInit, OnDestroy {
    type: WidgetType;
    id: string;
    label: string;
    icon: string;
    uri: string;
    originPosition: WidgetPosition;
    position: WidgetPosition;
    config: any;
    openAtStart: boolean;
    map: any;
    view: any;
    appConfig: any;
    folderUrl: string;
    state: WidgetState;
    windowState: WidgetWindowState;
    started: boolean;
    name: string;
    moveTopOnActive: boolean;
    widgetConfig: any;
    configId: string;
    style: string;
    title: string;
    tooltip: string;
    reqPara: any;
    gid: string;
    inPanel: boolean;
    isOnScreen: boolean;
    globalParams: AppGlobalConfig;
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
    eventService: EventEmitterService;
    jsEventManager: EventManager;
    componentLoader: ComponentLoaderService;
    modalManager: ModalManagerService;
    settingService: SettingService;
    private minZindex;
    private _compInfo;
    constructor();
    afterNgOnInit(): void;
    afterNgAfterViewInit(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    getCompInfo(): IComponentInfo;
    setServiceInjector(serviceInjector: ServiceInjector): void;
    setPosition(positionConfig: any): void;
    changePosition(positionConfig: any): void;
    setState(state: WidgetState): void;
    startup(): void;
    onOpen(): void;
    resize(position?: any): void;
    onDeActive(): void;
    onClose(): void;
    onAction(name: string, data?: any): void;
    setZIndex(index: string): void;
    onNormalize(): void;
    onMinimize(): void;
    onMaximize(): void;
    changeMap(map: any): void;
    onMapChange(map: any): void;
    changeView(view: any): void;
    onViewChange(view: any): void;
    get isSettingMode(): boolean;
    static ??fac: i0.????FactoryDef<BaseWidget, never>;
    static ??dir: i0.????DirectiveDefWithMeta<BaseWidget, never, never, {}, {}, never>;
}
//# sourceMappingURL=base-widget.d.ts.map