import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { OnScreenWidgetIconComponent } from '../components/on-screen-widget-icon/on-screen-widget-icon.component';
import { aspect } from './aspect.service';
import * as i0 from "@angular/core";
import * as i1 from "./panel-manager.service";
import * as i2 from "./widget-manager.service";
import * as i3 from "./utils.service";
import * as i4 from "./request.service";
import * as i5 from "../models/app-config";
import * as i6 from "./event-emitter.service";
import * as i7 from "./common.service";
import * as i8 from "./map-manager.service";
import * as i9 from "./component-loader.service";
export class LayoutManagerService {
    constructor(panelManager, widgetManager, utils, httpService, globalParams, eventService, commonService, mapManager, componentLoader) {
        this.panelManager = panelManager;
        this.widgetManager = widgetManager;
        this.utils = utils;
        this.httpService = httpService;
        this.globalParams = globalParams;
        this.eventService = eventService;
        this.commonService = commonService;
        this.mapManager = mapManager;
        this.componentLoader = componentLoader;
        this.map = null;
        this.view = null;
        this.mapId = 'mapContainer';
        this.widgetPlaceholders = [];
        this.preloadWidgetIcons = [];
        this.preloadGroupPanels = [];
        this.invisibleWidgetIds = [];
        this.id = "";
        this.urlParams = "";
        this.appConfig = null;
        this.widgetPlaceholders = [];
        this.preloadWidgetIcons = [];
        this.preloadGroupPanels = [];
        this.invisibleWidgetIds = [];
        this.eventService.rss.on(this.eventService._appConfigLoaded, (config) => this.onAppConfigLoaded(config));
        this.eventService.rss.on(this.eventService._appConfigChanged, (config) => this.onAppConfigChanged(config));
        this.eventService.rss.on(this.eventService._mapLoaded, (map) => this.onMapLoaded(map));
        this.eventService.rss.on(this.eventService._mapChanged, (map) => this.onMapChanged(map));
        this.eventService.rss.on(this.eventService._viewChanged, (view) => this.onViewChanged(view));
    }
    startup() {
        console.log("layout startup");
        this.widgetManager.panelManager = this.panelManager;
    }
    resize() {
        _.forEach(this.widgetManager.getAllWidgets(), (w) => {
            if (w.instance.inPanel === false) {
                w.instance.resize();
            }
        });
    }
    onAppConfigLoaded(config) {
        this.appConfig = config;
        if (this.appConfig.theme) {
            this._loadTheme(this.appConfig.theme);
        }
        this._loadMap();
    }
    onAppConfigChanged(params) {
    }
    _loadMap() {
        this.mapManager.setAppConfig(this.appConfig);
        this.mapManager.setMapPosition(this.appConfig.map.position);
        this.mapManager.showMap();
    }
    onMapLoaded(map) {
        if (this.globalParams.mapConfig.is3D === true) {
            this.view = map;
        }
        else {
            this.map = map;
        }
        this.panelManager.setMap(map);
        this.widgetManager.setMap(map);
        this.widgetManager.setAppConfig(this.appConfig);
        this._loadPreloadWidgets(this.appConfig);
    }
    onMapChanged(map) {
        this.map = map;
        this.panelManager.map = map;
        this.widgetManager.map = map;
        this.mapManager.map = map;
        this.preloadWidgetIcons.forEach(icon => {
            icon.instance.map = this.map;
            icon.instance.onMapChange(this.map);
        });
        this.panelManager.getAllPanels().forEach(panel => {
            panel.instance.map = this.map;
            panel.instance.onMapChange(this.map);
        });
        this.widgetManager.getAllWidgets().forEach(widget => {
            widget.instance.map = this.map;
            widget.instance.onMapChange(this.map);
        });
    }
    onViewChanged(view) {
        this.view = view;
        this.panelManager.view = view;
        this.widgetManager.view = view;
        this.mapManager.view = view;
        this.preloadWidgetIcons.forEach(icon => {
            icon.instance.view = this.view;
            icon.instance.onViewChange(this.view);
        });
        this.panelManager.getAllPanels().forEach(panel => {
            panel.instance.view = this.view;
            panel.instance.onViewChange(this.view);
        });
        this.widgetManager.getAllWidgets().forEach(widget => {
            widget.instance.view = this.view;
            widget.instance.onViewChange(this.view);
        });
    }
    _loadPreloadWidgets(appConfig) {
        console.time('Load widgetOnScreen');
        let defs = [], def = this.commonService.createPromiseDefer();
        _.each(appConfig.widgetOnScreen.widgets, (widgetConfig, index, list) => {
            if (widgetConfig.headerMenu === true) {
                return true;
            }
            if (widgetConfig.visible === false || (this.commonService.isMobile() && typeof widgetConfig.mobile !== "undefined" && widgetConfig.mobile.visible === false)) {
                this.invisibleWidgetIds.push(widgetConfig.id);
            }
            else {
                defs.push(this._loadPreloadWidget(widgetConfig, appConfig));
            }
        });
        Promise.all(defs).then(() => {
            console.timeEnd('Load widgetOnScreen');
            this.eventService.rss.emit(this.eventService._checkChangeDetector, defs);
            this._hideLoading();
        }).catch(() => {
            this._hideLoading();
        });
        return def.promise();
    }
    _hideLoading() {
    }
    _doPostLoad() {
    }
    _loadPreloadWidget(widgetConfig, appConfig) {
        return __awaiter(this, void 0, void 0, function* () {
            let def = this.commonService.createPromiseDefer();
            if (!widgetConfig || !widgetConfig.uri) {
                console.error(`widget [${widgetConfig.label}] no uri`);
                return def.resolve(null);
            }
            if (((this.globalParams.jimuConfig.isDesignMode === true && this.urlParams.config && this.globalParams.appInfo.folderUrlPrefix) || appConfig.mode === 'config') && !widgetConfig.uri) {
                if (widgetConfig.oldUri) {
                    let _tempUrl = widgetConfig.oldUri;
                    if (_tempUrl.startsWith("/")) {
                        _tempUrl = _tempUrl.substring(1);
                    }
                    widgetConfig.amdFolder = _tempUrl.substring(0, _tempUrl.toLowerCase().lastIndexOf("/widget")) + "/";
                    widgetConfig.folderUrl = this.globalParams.appInfo.folderUrlPrefix + "/" + widgetConfig.amdFolder;
                    this.widgetManager.loadWidgetManifest(widgetConfig).then((widgetConfigNew) => {
                        let placeholder = this._createPreloadWidgetPlaceHolder(widgetConfigNew);
                        def.resolve(placeholder);
                    });
                }
                else {
                    let placeholder = this._createPreloadWidgetPlaceHolder(widgetConfig);
                    def.resolve(placeholder);
                }
                return def.promise();
            }
            let iconDijit;
            if (widgetConfig.inPanel || widgetConfig.closeable) {
                iconDijit = this._createPreloadWidgetIcon(widgetConfig);
                def.resolve(iconDijit);
            }
            else {
                this.widgetManager.loadWidget(widgetConfig).then((compRef) => {
                    this.widgetManager.showWidget(compRef);
                    compRef.instance.setPosition(widgetConfig.position);
                    this.commonService.setWidgetPosition(compRef, widgetConfig.position);
                    widgetConfig.loaded = true;
                    compRef.instance.configId = widgetConfig.id;
                    def.resolve(compRef);
                }).catch((err) => {
                    console.error(err);
                });
            }
            return def.promise();
        });
    }
    _createPreloadWidgetPlaceHolder(widgetConfig) {
    }
    _createPreloadWidgetIcon(widgetConfig, component) {
        let iconDijit = null;
        let inMap = false;
        if (widgetConfig.position.relativeTo === "browser") {
            iconDijit = this.componentLoader.createComponentToHome(OnScreenWidgetIconComponent);
        }
        else {
            inMap = true;
            iconDijit = this.componentLoader.createComponentToMap(OnScreenWidgetIconComponent);
        }
        iconDijit.instance.setProps({
            compRef: component,
            appConfig: this.appConfig,
            map: this.globalParams.mapConfig.is3D ? this.view : this.map,
            widgetConfig: widgetConfig
        });
        aspect.before(iconDijit.instance, 'destroy', () => {
            this._onDestroyIcon(iconDijit);
        });
        this.preloadWidgetIcons.push(iconDijit);
        if (inMap) {
            this.componentLoader.showInMap(iconDijit);
        }
        else {
            this.componentLoader.showInHome(iconDijit);
        }
        let _ele = this.commonService.getComponentRootNode(iconDijit);
        if (_ele) {
            _ele.classList.add("jimu-widget-onscreen-icon");
            _ele.title = widgetConfig.label;
        }
        let _position = _.cloneDeep(widgetConfig.position);
        delete _position.height;
        delete _position.width;
        this.commonService.setWidgetPosition(iconDijit, _position);
        if (widgetConfig.openAtStart === true) {
            iconDijit.instance.switchToOpen();
        }
        return iconDijit;
    }
    _onDestroyPlaceholder(placeholder) {
        let index = 0, idx = -1;
        for (; index < this.widgetPlaceholders.length; index++) {
            let ci = this.widgetPlaceholders[index];
            if (placeholder.id === ci.id || placeholder.configId === ci.configId) {
                idx = index;
                break;
            }
        }
        if (idx >= 0) {
            this.widgetPlaceholders.splice(idx, 1);
        }
        console.log('destroy placeholder [' + placeholder.id + '].');
    }
    _onDestroyIcon(icon) {
        let index = 0, idx = -1;
        for (; index < this.preloadWidgetIcons.length; index++) {
            let ci = this.preloadWidgetIcons[index];
            if (icon.instance.id === ci.instance.id) {
                idx = index;
                break;
            }
        }
        if (idx >= 0) {
            this.preloadWidgetIcons.splice(idx, 1);
        }
        console.log('destroy icon [' + icon.instance.id + '].');
    }
    _loadPreloadGroup(groupJson, appConfig) {
        let def = this.commonService.createPromiseDefer();
        if (!appConfig.mode && (!groupJson.widgets || groupJson.widgets.length === 0)) {
            def.resolve(null);
            return def;
        }
        return def.promise();
    }
    _getThemeCommonStyleId(theme) {
        return 'theme_' + theme.name + '_style_common';
    }
    _getThemeCurrentStyleId(theme) {
        return 'theme_' + theme.name + '_style_' + theme.styles[0];
    }
    _loadTheme(theme) {
    }
    _loadThemeCommonStyle(theme) {
    }
    _removeThemeCommonStyle(theme) {
    }
    _loadThemeCurrentStyle(theme) {
    }
    _removeThemeCurrentStyle(theme) {
    }
    _destroyPreloadWidgetIcons() {
        for (let index = this.preloadWidgetIcons.length - 1; index >= 0; index--) {
            const icon = this.preloadWidgetIcons[index];
            icon.destroy();
        }
        this.preloadWidgetIcons = [];
    }
    _destroyOffPanelWidgets() {
        _.forEach(this.widgetManager.getOffPanelWidgets(), (widget) => {
            this.widgetManager.destroyWidget(widget);
        });
    }
    _destroyWidgetPlaceholders() {
        for (let index = this.widgetPlaceholders.length - 1; index >= 0; index--) {
            const placeholder = this.widgetPlaceholders[index];
            placeholder.destroy();
        }
        this.widgetPlaceholders = [];
    }
    _destroyPreloadPanels() {
        this.panelManager.destroyAllPanels();
    }
    _destroyPreloadGroupPanels() {
        this.preloadGroupPanels = [];
    }
    _onThemeChange(appConfig) {
    }
    _onLayoutChange2(appConfig) {
    }
    _onLayoutChange(appConfig) {
        this._onLayoutChange2(appConfig);
    }
    _onStyleChange(appConfig) {
    }
    _changeMapPosition(appConfig) {
    }
    _onMapChange(appConfig) {
    }
    _onWidgetPoolChange(appConfig, changeData) {
    }
    _onActionTriggerd(appConfig, action, eleid) {
        let panelIcon = _.find(this.preloadWidgetIcons, (w, index) => {
            return w.instance.configId === eleid;
        });
        if (panelIcon) {
            panelIcon.instance.onAction(action, "TODO");
        }
        let widget = _.find(this.widgetManager.getOnScreenOffPanelWidgets(), (w) => {
            return (w.instance.id === eleid);
        });
        if (widget) {
            widget.instance.onAction(action, "TODO");
        }
        let placeholder = _.find(this.widgetPlaceholders, (w, index) => {
            return w.configId === eleid;
        });
        if (placeholder) {
            placeholder.onAction(action, "TODO");
        }
    }
    _onWidgetChange(appConfig, changeData, action) {
        let changedWidgets = changeData.widgetList;
        if (!changedWidgets || changedWidgets.length <= 0) {
            return;
        }
        let _self = this;
        function loadWidget(widgetConfig, appConfig, isIcon, state) {
            if (widgetConfig.headerMenu === true) {
                return true;
            }
            if (widgetConfig.visible === false) {
                _self.invisibleWidgetIds.push(widgetConfig.id);
                return true;
            }
            _self._loadPreloadWidget(widgetConfig, appConfig).then(function (iconNew) {
                if (isIcon) {
                    if (widgetConfig.uri && state === 'opened') {
                        iconNew.onClick();
                    }
                }
            });
        }
        function process(wc) {
            let uri = this.globalParams.appInfo.folderUrlPrefix + "/" + (wc.oldUri ? wc.oldUri : wc.uri);
            let icon = _.find(_self.preloadWidgetIcons, function (w) { return wc.id === w.instance.configId || uri === w.instance.uri; });
            let state = undefined, widgetConfig = undefined;
            if (icon) {
                state = icon.instance.state, widgetConfig = icon.instance.widgetConfig;
                if (icon.instance.widget) {
                    icon.instance.widget.destroy();
                }
                icon.destroy();
                if (action === "delete") {
                    _self._createPreloadWidgetPlaceHolder(widgetConfig);
                }
                else if (action === "modify") {
                    loadWidget(widgetConfig, appConfig, true, state);
                }
            }
            else {
                let widget = _.find(_self.widgetManager.getOnScreenOffPanelWidgets(), function (w) {
                    return (wc.id === w.instance.configId) || uri === w.instance.uri;
                }, this);
                if (widget) {
                    widgetConfig = widget.instance.widgetConfig;
                    widget.destroy();
                    if (action === "delete") {
                        _self._createPreloadWidgetPlaceHolder(widgetConfig);
                    }
                    else if (action === "modify") {
                        loadWidget(widgetConfig, appConfig, false, '');
                    }
                }
                else {
                    let eleConfig = this.utils.getConfigElementById(appConfig, wc.id);
                    if (eleConfig) {
                        let placeholder = _.find(_self.widgetPlaceholders, function (w) {
                            return (wc.id === w.configId || wc.id === w.id);
                        }, this);
                        if (placeholder) {
                            placeholder.destroy();
                        }
                        if (eleConfig.loaded === true) {
                            delete eleConfig.amdFolder;
                            delete eleConfig.checked;
                            delete eleConfig.folderUrl;
                            delete eleConfig.hasConfig;
                            delete eleConfig.hasLocale;
                            delete eleConfig.hasSetting;
                            delete eleConfig.hasSettingLocale;
                            delete eleConfig.hasSettingPage;
                            delete eleConfig.hasSettingStyle;
                            delete eleConfig.hasSettingUIFile;
                            delete eleConfig.hasStyle;
                            delete eleConfig.hasUIFile;
                            delete eleConfig.hasVersionManager;
                            delete eleConfig.icon;
                            delete eleConfig.inPanel;
                            delete eleConfig.isController;
                            delete eleConfig.isHeadMenu;
                            delete eleConfig.keepConfigAfterMapSwithched;
                            delete eleConfig.loaded;
                            delete eleConfig.manifest;
                            delete eleConfig.supportMultiInstance;
                            delete eleConfig.thumbnail;
                            delete eleConfig.uri;
                            delete eleConfig.version;
                        }
                        {
                            widgetConfig = _.extend(eleConfig, wc);
                            this.configManager.configLoader._processAfterTryLoad(appConfig);
                            _self.widgetManager.loadWidgetManifest(widgetConfig).then((config) => {
                                loadWidget(widgetConfig, appConfig, false, '');
                            }).catch(function (err) {
                                console.log("loadWidgetManifest err", err);
                            });
                        }
                    }
                    else {
                        _.forEach(_self.invisibleWidgetIds, (widgetId) => {
                            if (widgetId === wc.id && wc.visible !== false) {
                                widgetConfig = this.utils.getConfigElementById(appConfig, wc.id);
                                _self._loadPreloadWidget(widgetConfig, appConfig);
                                let i = _self.invisibleWidgetIds.indexOf(widgetConfig.id);
                                _self.invisibleWidgetIds.splice(i, 1);
                            }
                        });
                    }
                }
            }
        }
        _.forEach(changedWidgets, process);
    }
}
LayoutManagerService.ɵfac = function LayoutManagerService_Factory(t) { return new (t || LayoutManagerService)(i0.ɵɵinject(i1.PanelManagerService), i0.ɵɵinject(i2.WidgetManagerService), i0.ɵɵinject(i3.UtilsService), i0.ɵɵinject(i4.HttpReqService), i0.ɵɵinject(i5.AppGlobalConfig), i0.ɵɵinject(i6.EventEmitterService), i0.ɵɵinject(i7.CommonService), i0.ɵɵinject(i8.MapManagerService), i0.ɵɵinject(i9.ComponentLoaderService)); };
LayoutManagerService.ɵprov = i0.ɵɵdefineInjectable({ token: LayoutManagerService, factory: LayoutManagerService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayoutManagerService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.PanelManagerService }, { type: i2.WidgetManagerService }, { type: i3.UtilsService }, { type: i4.HttpReqService }, { type: i5.AppGlobalConfig }, { type: i6.EventEmitterService }, { type: i7.CommonService }, { type: i8.MapManagerService }, { type: i9.ComponentLoaderService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LW1hbmFnZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2Vwc2dpcy9zZXJ2aWNlcy9sYXlvdXQtbWFuYWdlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFHQSxPQUFPLEVBQUUsVUFBVSxFQUFtQyxNQUFNLGVBQWUsQ0FBQztBQUM1RSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQU81QixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxxRUFBcUUsQ0FBQztBQUNsSCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7Ozs7Ozs7O0FBTzFDLE1BQU0sT0FBTyxvQkFBb0I7SUFZL0IsWUFDVSxZQUFpQyxFQUNqQyxhQUFtQyxFQUNuQyxLQUFtQixFQUNuQixXQUEyQixFQUMzQixZQUE2QixFQUM5QixZQUFpQyxFQUNoQyxhQUE0QixFQUM1QixVQUE2QixFQUM3QixlQUF1QztRQVJ2QyxpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDakMsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQ25DLFVBQUssR0FBTCxLQUFLLENBQWM7UUFDbkIsZ0JBQVcsR0FBWCxXQUFXLENBQWdCO1FBQzNCLGlCQUFZLEdBQVosWUFBWSxDQUFpQjtRQUM5QixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDaEMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFDN0Isb0JBQWUsR0FBZixlQUFlLENBQXdCO1FBbkJqRCxRQUFHLEdBQVEsSUFBSSxDQUFBO1FBQ2YsU0FBSSxHQUFRLElBQUksQ0FBQztRQUNqQixVQUFLLEdBQVcsY0FBYyxDQUFDO1FBQy9CLHVCQUFrQixHQUFlLEVBQUUsQ0FBQztRQUNwQyx1QkFBa0IsR0FBcUQsRUFBRSxDQUFDO1FBQzFFLHVCQUFrQixHQUFlLEVBQUUsQ0FBQztRQUNwQyx1QkFBa0Is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LEVBQUUsQ0FBQyxDQUFDOzRCQUNqRCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHO2dDQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFFLEdBQUcsQ0FBQyxDQUFDOzRCQUM3QyxDQUFDLENBQUMsQ0FBQzt5QkFFSjtxQkFDRjt5QkFBTTt3QkFDTCxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFOzRCQUMvQyxJQUFJLFFBQVEsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEtBQUssS0FBSyxFQUFFO2dDQUM5QyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dDQUNqRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dDQUNsRCxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztnQ0FDMUQsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7NkJBQ3ZDO3dCQUNILENBQUMsQ0FBQyxDQUFDO3FCQUNKO2lCQUNGO2FBQ0Y7UUFFSCxDQUFDO1FBQ0QsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDckMsQ0FBQzs7d0ZBcGtCVSxvQkFBb0I7NERBQXBCLG9CQUFvQixXQUFwQixvQkFBb0IsbUJBRm5CLE1BQU07dUZBRVAsb0JBQW9CO2NBSGhDLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1hcE1hbmFnZXJTZXJ2aWNlIH0gZnJvbSAnLi9tYXAtbWFuYWdlci5zZXJ2aWNlJztcbmltcG9ydCB7IFdpZGdldE1hbmFnZXJTZXJ2aWNlIH0gZnJvbSAnLi93aWRnZXQtbWFuYWdlci5zZXJ2aWNlJztcbmltcG9ydCB7IFBhbmVsTWFuYWdlclNlcnZpY2UgfSBmcm9tICcuL3BhbmVsLW1hbmFnZXIuc2VydmljZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBDb21wb25lbnRSZWYsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBVdGlsc1NlcnZpY2UgfSBmcm9tICcuL3V0aWxzLnNlcnZpY2UnO1xuaW1wb3J0IHsgSHR0cFJlcVNlcnZpY2UgfSBmcm9tICcuL3JlcXVlc3Quc2VydmljZSc7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXJTZXJ2aWNlIH0gZnJvbSAnLi9ldmVudC1lbWl0dGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tbW9uU2VydmljZSB9IGZyb20gJy4vY29tbW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXBwR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi4vbW9kZWxzL2FwcC1jb25maWcnO1xuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyU2VydmljZSB9IGZyb20gJy4vY29tcG9uZW50LWxvYWRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9uU2NyZWVuV2lkZ2V0SWNvbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvb24tc2NyZWVuLXdpZGdldC1pY29uL29uLXNjcmVlbi13aWRnZXQtaWNvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgYXNwZWN0IH0gZnJvbSAnLi9hc3BlY3Quc2VydmljZSc7XG4vKipcbiAqIGNyZWF0ZSBieSBydWlyIDE5MTAxNCAgbGF5b3V0TWFuYWdlci5qc1xuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMYXlvdXRNYW5hZ2VyU2VydmljZSB7XG5cbiAgbWFwOiBhbnkgPSBudWxsXG4gIHZpZXc6IGFueSA9IG51bGw7XG4gIG1hcElkOiBzdHJpbmcgPSAnbWFwQ29udGFpbmVyJztcbiAgd2lkZ2V0UGxhY2Vob2xkZXJzOiBBcnJheTxhbnk+ID0gW107XG4gIHByZWxvYWRXaWRnZXRJY29uczogQXJyYXk8Q29tcG9uZW50UmVmPE9uU2NyZWVuV2lkZ2V0SWNvbkNvbXBvbmVudD4+ID0gW107XG4gIHByZWxvYWRHcm91cFBhbmVsczogQXJyYXk8YW55PiA9IFtdO1xuICBpbnZpc2libGVXaWRnZXRJZHM6IEFycmF5PGFueT4gPSBbXTtcbiAgaWQ6IHN0cmluZyA9IFwiXCI7XG4gIHVybFBhcmFtczogYW55ID0gXCJcIjtcbiAgYXBwQ29uZmlnOiBhbnkgPSBudWxsO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHBhbmVsTWFuYWdlcjogUGFuZWxNYW5hZ2VyU2VydmljZSxcbiAgICBwcml2YXRlIHdpZGdldE1hbmFnZXI6IFdpZGdldE1hbmFnZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgdXRpbHM6IFV0aWxzU2VydmljZSxcbiAgICBwcml2YXRlIGh0dHBTZXJ2aWNlOiBIdHRwUmVxU2VydmljZSxcbiAgICBwcml2YXRlIGdsb2JhbFBhcmFtczogQXBwR2xvYmFsQ29uZmlnLFxuICAgIHB1YmxpYyBldmVudFNlcnZpY2U6IEV2ZW50RW1pdHRlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb21tb25TZXJ2aWNlOiBDb21tb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgbWFwTWFuYWdlcjogTWFwTWFuYWdlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb21wb25lbnRMb2FkZXI6IENvbXBvbmVudExvYWRlclNlcnZpY2VcbiAgICAvLyBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gTWFwTWFuYWdlclNlcnZpY2UpKVxuICAgIC8vIEBPcHRpb25hbCgpIHByaXZhdGUgbWFwTWFuYWdlcjogTWFwTWFuYWdlclNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy53aWRnZXRQbGFjZWhvbGRlcnMgPSBbXTtcbiAgICB0aGlzLnByZWxvYWRXaWRnZXRJY29ucyA9IFtdO1xuICAgIHRoaXMucHJlbG9hZEdyb3VwUGFuZWxzID0gW107XG4gICAgdGhpcy5pbnZpc2libGVXaWRnZXRJZHMgPSBbXTtcblxuICAgIHRoaXMuZXZlbnRTZXJ2aWNlLnJzcy5vbih0aGlzLmV2ZW50U2VydmljZS5fYXBwQ29uZmlnTG9hZGVkLCAoY29uZmlnKSA9PiB0aGlzLm9uQXBwQ29uZmlnTG9hZGVkKGNvbmZpZykpO1xuICAgIHRoaXMuZXZlbnRTZXJ2aWNlLnJzcy5vbih0aGlzLmV2ZW50U2VydmljZS5fYXBwQ29uZmlnQ2hhbmdlZCwgKGNvbmZpZykgPT4gdGhpcy5vbkFwcENvbmZpZ0NoYW5nZWQoY29uZmlnKSk7XG4gICAgdGhpcy5ldmVudFNlcnZpY2UucnNzLm9uKHRoaXMuZXZlbnRTZXJ2aWNlLl9tYXBMb2FkZWQsIChtYXApID0+IHRoaXMub25NYXBMb2FkZWQobWFwKSk7XG4gICAgdGhpcy5ldmVudFNlcnZpY2UucnNzLm9uKHRoaXMuZXZlbnRTZXJ2aWNlLl9tYXBDaGFuZ2VkLCAobWFwKSA9PiB0aGlzLm9uTWFwQ2hhbmdlZChtYXApKTtcbiAgICB0aGlzLmV2ZW50U2VydmljZS5yc3Mub24odGhpcy5ldmVudFNlcnZpY2UuX3ZpZXdDaGFuZ2VkLCAodmlldykgPT4gdGhpcy5vblZpZXdDaGFuZ2VkKHZpZXcpKTtcbiAgICAvL+W+heW8gOWPkVxuICB9XG4gIHN0YXJ0dXAoKSB7XG4gICAgY29uc29sZS5sb2coXCJsYXlvdXQgc3RhcnR1cFwiKTtcbiAgICB0aGlzLndpZGdldE1hbmFnZXIucGFuZWxNYW5hZ2VyID0gdGhpcy5wYW5lbE1hbmFnZXI7XG4gIH1cbiAgcmVzaXplKCkge1xuICAgIF8uZm9yRWFjaCh0aGlzLndpZGdldE1hbmFnZXIuZ2V0QWxsV2lkZ2V0cygpLCAodykgPT4ge1xuICAgICAgaWYgKHcuaW5zdGFuY2UuaW5QYW5lbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgdy5pbnN0YW5jZS5yZXNpemUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBvbkFwcENvbmZpZ0xvYWRlZChjb25maWcpIHtcbiAgICB0aGlzLmFwcENvbmZpZyA9IGNvbmZpZztcbiAgICBpZiAodGhpcy5hcHBDb25maWcudGhlbWUpIHtcbiAgICAgIHRoaXMuX2xvYWRUaGVtZSh0aGlzLmFwcENvbmZpZy50aGVtZSk7XG4gICAgfVxuICAgIHRoaXMuX2xvYWRNYXAoKTtcbiAgfVxuICBvbkFwcENvbmZpZ0NoYW5nZWQocGFyYW1zKSB7XG4gIH1cbiAgX2xvYWRNYXAoKSB7XG4gICAgLy/lvoXlvIDlj5FcbiAgICB0aGlzLm1hcE1hbmFnZXIuc2V0QXBwQ29uZmlnKHRoaXMuYXBwQ29uZmlnKTtcbiAgICB0aGlzLm1hcE1hbmFnZXIuc2V0TWFwUG9zaXRpb24odGhpcy5hcHBDb25maWcubWFwLnBvc2l0aW9uKTtcbiAgICB0aGlzLm1hcE1hbmFnZXIuc2hvd01hcCgpOy8qLnRoZW4obWFwPT57XG4gICAgICB0aGlzLm9uTWFwTG9hZGVkKG1hcCk7XG4gICAgfSk7Ki9cbiAgfVxuICBvbk1hcExvYWRlZChtYXApIHtcbiAgICBpZiAodGhpcy5nbG9iYWxQYXJhbXMubWFwQ29uZmlnLmlzM0QgPT09IHRydWUpIHtcbiAgICAgIHRoaXMudmlldyA9IG1hcDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tYXAgPSBtYXA7XG4gICAgfVxuICAgIHRoaXMucGFuZWxNYW5hZ2VyLnNldE1hcChtYXApO1xuICAgIHRoaXMud2lkZ2V0TWFuYWdlci5zZXRNYXAobWFwKTtcbiAgICB0aGlzLndpZGdldE1hbmFnZXIuc2V0QXBwQ29uZmlnKHRoaXMuYXBwQ29uZmlnKTtcbiAgICB0aGlzLl9sb2FkUHJlbG9hZFdpZGdldHModGhpcy5hcHBDb25maWcpO1xuICB9XG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIG1hcCBcbiAgICovXG4gIG9uTWFwQ2hhbmdlZChtYXApIHtcbiAgICB0aGlzLm1hcCA9IG1hcDtcbiAgICB0aGlzLnBhbmVsTWFuYWdlci5tYXAgPSBtYXA7Ly8uc2V0TWFwKG1hcCk7XG4gICAgdGhpcy53aWRnZXRNYW5hZ2VyLm1hcCA9IG1hcDsvLy5zZXRNYXAobWFwKTtcbiAgICB0aGlzLm1hcE1hbmFnZXIubWFwID0gbWFwO1xuICAgIHRoaXMucHJlbG9hZFdpZGdldEljb25zLmZvckVhY2goaWNvbiA9PiB7XG4gICAgICBpY29uLmluc3RhbmNlLm1hcCA9IHRoaXMubWFwO1xuICAgICAgaWNvbi5pbnN0YW5jZS5vbk1hcENoYW5nZSh0aGlzLm1hcCk7XG4gICAgfSk7XG4gICAgdGhpcy5wYW5lbE1hbmFnZXIuZ2V0QWxsUGFuZWxzKCkuZm9yRWFjaChwYW5lbCA9PiB7XG4gICAgICBwYW5lbC5pbnN0YW5jZS5tYXAgPSB0aGlzLm1hcDtcbiAgICAgIHBhbmVsLmluc3RhbmNlLm9uTWFwQ2hhbmdlKHRoaXMubWFwKTtcbiAgICB9KVxuICAgIHRoaXMud2lkZ2V0TWFuYWdlci5nZXRBbGxXaWRnZXRzKCkuZm9yRWFjaCh3aWRnZXQgPT4ge1xuICAgICAgd2lkZ2V0Lmluc3RhbmNlLm1hcCA9IHRoaXMubWFwO1xuICAgICAgd2lkZ2V0Lmluc3RhbmNlLm9uTWFwQ2hhbmdlKHRoaXMubWFwKTtcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSB2aWV3IFxuICAgKi9cbiAgb25WaWV3Q2hhbmdlZCh2aWV3KSB7XG4gICAgdGhpcy52aWV3ID0gdmlldztcbiAgICB0aGlzLnBhbmVsTWFuYWdlci52aWV3ID0gdmlldztcbiAgICB0aGlzLndpZGdldE1hbmFnZXIudmlldyA9IHZpZXc7XG4gICAgdGhpcy5tYXBNYW5hZ2VyLnZpZXcgPSB2aWV3O1xuICAgIHRoaXMucHJlbG9hZFdpZGdldEljb25zLmZvckVhY2goaWNvbiA9PiB7XG4gICAgICBpY29uLmluc3RhbmNlLnZpZXcgPSB0aGlzLnZpZXc7XG4gICAgICBpY29uLmluc3RhbmNlLm9uVmlld0NoYW5nZSh0aGlzLnZpZXcpO1xuICAgIH0pO1xuICAgIHRoaXMucGFuZWxNYW5hZ2VyLmdldEFsbFBhbmVscygpLmZvckVhY2gocGFuZWwgPT4ge1xuICAgICAgcGFuZWwuaW5zdGFuY2UudmlldyA9IHRoaXMudmlldztcbiAgICAgIHBhbmVsLmluc3RhbmNlLm9uVmlld0NoYW5nZSh0aGlzLnZpZXcpO1xuICAgIH0pXG4gICAgdGhpcy53aWRnZXRNYW5hZ2VyLmdldEFsbFdpZGdldHMoKS5mb3JFYWNoKHdpZGdldCA9PiB7XG4gICAgICB3aWRnZXQuaW5zdGFuY2UudmlldyA9IHRoaXMudmlldztcbiAgICAgIHdpZGdldC5pbnN0YW5jZS5vblZpZXdDaGFuZ2UodGhpcy52aWV3KTtcbiAgICB9KTtcbiAgfVxuICBfbG9hZFByZWxvYWRXaWRnZXRzKGFwcENvbmZpZykge1xuICAgIGNvbnNvbGUudGltZSgnTG9hZCB3aWRnZXRPblNjcmVlbicpO1xuICAgIGxldCBkZWZzID0gW10sXG4gICAgICBkZWYgPSB0aGlzLmNvbW1vblNlcnZpY2UuY3JlYXRlUHJvbWlzZURlZmVyKCk7XG4gICAgLy/liqDovb3nu4Tku7ZcbiAgICBfLmVhY2goYXBwQ29uZmlnLndpZGdldE9uU2NyZWVuLndpZGdldHMsICh3aWRnZXRDb25maWcsIGluZGV4LCBsaXN0KSA9PiB7XG4gICAgICBpZiAod2lkZ2V0Q29uZmlnLmhlYWRlck1lbnUgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBpZiAod2lkZ2V0Q29uZmlnLnZpc2libGUgPT09IGZhbHNlIHx8ICh0aGlzLmNvbW1vblNlcnZpY2UuaXNNb2JpbGUoKSAmJiB0eXBlb2Ygd2lkZ2V0Q29uZmlnLm1vYmlsZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aWRnZXRDb25maWcubW9iaWxlLnZpc2libGUgPT09IGZhbHNlKSkge1xuICAgICAgICB0aGlzLmludmlzaWJsZVdpZGdldElkcy5wdXNoKHdpZGdldENvbmZpZy5pZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWZzLnB1c2godGhpcy5fbG9hZFByZWxvYWRXaWRnZXQod2lkZ2V0Q29uZmlnLCBhcHBDb25maWcpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvL+WKoOi9veWIhue7hOS4reeahOmDqOS7tiDmnKrlrp7njrBcbiAgICAvLyBfLmZvckVhY2goYXBwQ29uZmlnLndpZGdldE9uU2NyZWVuLmdyb3VwcywgZnVuY3Rpb24oZ3JvdXBDb25maWcpIHtcbiAgICAvLyAgICAgZGVmcy5wdXNoKHRoaXMuX2xvYWRQcmVsb2FkR3JvdXAoZ3JvdXBDb25maWcsIGFwcENvbmZpZykpO1xuICAgIC8vICAgfSwgdGhpcyk7XG5cbiAgICBQcm9taXNlLmFsbChkZWZzKS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnNvbGUudGltZUVuZCgnTG9hZCB3aWRnZXRPblNjcmVlbicpO1xuICAgICAgLy9Sc3Mub25lKFwicHJlbG9hZFdpZGdldHNMb2FkZWRcIilcbiAgICAgIC8vY2xvc2VQcm9ncmVzc0JhcigpO1xuICAgICAgLy/nu4Tku7bliqDovb3lrozmiJDlj5HpgIHkuovku7bvvIzohI/mo4DmtYsgYWRkIHlseSAyMDIwMDMyN1xuICAgICAgdGhpcy5ldmVudFNlcnZpY2UucnNzLmVtaXQodGhpcy5ldmVudFNlcnZpY2UuX2NoZWNrQ2hhbmdlRGV0ZWN0b3IsIGRlZnMpO1xuICAgICAgdGhpcy5faGlkZUxvYWRpbmcoKTtcbiAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAvLyBjbG9zZVByb2dyZXNzQmFyKCk7XG4gICAgICB0aGlzLl9oaWRlTG9hZGluZygpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRlZi5wcm9taXNlKCk7XG4gIH1cbiAgX2hpZGVMb2FkaW5nKCkge1xuICAgIC8v5b6F5byA5Y+RXG4gIH1cbiAgX2RvUG9zdExvYWQoKSB7XG5cbiAgfVxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSB3aWRnZXRDb25maWcgXG4gICAqIEBwYXJhbSBhcHBDb25maWcgXG4gICAqL1xuICBhc3luYyBfbG9hZFByZWxvYWRXaWRnZXQod2lkZ2V0Q29uZmlnLCBhcHBDb25maWcpIHtcbiAgICBsZXQgZGVmID0gdGhpcy5jb21tb25TZXJ2aWNlLmNyZWF0ZVByb21pc2VEZWZlcigpO1xuICAgIC8v5Yib5bu657uE5Lu2XG4gICAgaWYgKCF3aWRnZXRDb25maWcgfHwgIXdpZGdldENvbmZpZy51cmkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYHdpZGdldCBbJHt3aWRnZXRDb25maWcubGFiZWx9XSBubyB1cmlgKTtcbiAgICAgIHJldHVybiBkZWYucmVzb2x2ZShudWxsKTtcbiAgICB9XG4gICAgLy9sZXQgY29tcFJlZiA9IGF3YWl0IHRoaXMud2lkZ2V0TWFuYWdlci5jcmVhdGVXaWRnZXQod2lkZ2V0Q29uZmlnKTtcblxuICAgIGlmICgoKHRoaXMuZ2xvYmFsUGFyYW1zLmppbXVDb25maWcuaXNEZXNpZ25Nb2RlID09PSB0cnVlICYmIHRoaXMudXJsUGFyYW1zLmNvbmZpZyAmJiB0aGlzLmdsb2JhbFBhcmFtcy5hcHBJbmZvLmZvbGRlclVybFByZWZpeCkgfHwgYXBwQ29uZmlnLm1vZGUgPT09ICdjb25maWcnKSAmJiAhd2lkZ2V0Q29uZmlnLnVyaSkge1xuICAgICAgLy9ydWlyIDE5MDcxOCDop6PlhrPljaDkvY3nrKblvpfpq5jlrr3lj5jmiJDkuoZwYW5lbOW+l+mrmOWuvemXrumimCDvvIjojrflj5bkuIttYW5pZmVzdOS/oeaBr++8iVxuICAgICAgaWYgKHdpZGdldENvbmZpZy5vbGRVcmkpIHtcbiAgICAgICAgbGV0IF90ZW1wVXJsID0gd2lkZ2V0Q29uZmlnLm9sZFVyaTtcbiAgICAgICAgaWYgKF90ZW1wVXJsLnN0YXJ0c1dpdGgoXCIvXCIpKSB7XG4gICAgICAgICAgX3RlbXBVcmwgPSBfdGVtcFVybC5zdWJzdHJpbmcoMSk7XG4gICAgICAgIH1cbiAgICAgICAgd2lkZ2V0Q29uZmlnLmFtZEZvbGRlciA9IF90ZW1wVXJsLnN1YnN0cmluZygwLCBfdGVtcFVybC50b0xvd2VyQ2FzZSgpLmxhc3RJbmRleE9mKFwiL3dpZGdldFwiKSkgKyBcIi9cIjtcbiAgICAgICAgd2lkZ2V0Q29uZmlnLmZvbGRlclVybCA9IHRoaXMuZ2xvYmFsUGFyYW1zLmFwcEluZm8uZm9sZGVyVXJsUHJlZml4ICsgXCIvXCIgKyB3aWRnZXRDb25maWcuYW1kRm9sZGVyO1xuICAgICAgICB0aGlzLndpZGdldE1hbmFnZXIubG9hZFdpZGdldE1hbmlmZXN0KHdpZGdldENvbmZpZykudGhlbigod2lkZ2V0Q29uZmlnTmV3KSA9PiB7XG4gICAgICAgICAgbGV0IHBsYWNlaG9sZGVyID0gdGhpcy5fY3JlYXRlUHJlbG9hZFdpZGdldFBsYWNlSG9sZGVyKHdpZGdldENvbmZpZ05ldyk7XG4gICAgICAgICAgZGVmLnJlc29sdmUocGxhY2Vob2xkZXIpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBwbGFjZWhvbGRlciA9IHRoaXMuX2NyZWF0ZVByZWxvYWRXaWRnZXRQbGFjZUhvbGRlcih3aWRnZXRDb25maWcpO1xuICAgICAgICBkZWYucmVzb2x2ZShwbGFjZWhvbGRlcik7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGVmLnByb21pc2UoKTtcbiAgICB9XG4gICAgbGV0IGljb25EaWppdDtcbiAgICBpZiAod2lkZ2V0Q29uZmlnLmluUGFuZWwgfHwgd2lkZ2V0Q29uZmlnLmNsb3NlYWJsZSkge1xuICAgICAgLy/liJvlu7rlm77moIdcbiAgICAgIGljb25EaWppdCA9IHRoaXMuX2NyZWF0ZVByZWxvYWRXaWRnZXRJY29uKHdpZGdldENvbmZpZyk7XG4gICAgICBkZWYucmVzb2x2ZShpY29uRGlqaXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvKlxuICAgICAgdGhpcy53aWRnZXRNYW5hZ2VyLm9wZW5XaWRnZXQoY29tcFJlZik7XG4gICAgICBjb21wUmVmLmluc3RhbmNlLnNldFBvc2l0aW9uKHdpZGdldENvbmZpZy5wb3NpdGlvbik7XG4gICAgICB0aGlzLmNvbW1vblNlcnZpY2Uuc2V0V2lkZ2V0UG9zaXRpb24oY29tcFJlZiwgd2lkZ2V0Q29uZmlnLnBvc2l0aW9uKTtcbiAgICAgIHdpZGdldENvbmZpZy5sb2FkZWQgPSB0cnVlO1xuICAgICAgZGVmLnJlc29sdmUoY29tcFJlZik7XG4gICAgICAqL1xuICAgICAgLy/liqDovb3nu4Tku7ZcbiAgICAgIHRoaXMud2lkZ2V0TWFuYWdlci5sb2FkV2lkZ2V0KHdpZGdldENvbmZpZykudGhlbigoY29tcFJlZikgPT4ge1xuICAgICAgICB0aGlzLndpZGdldE1hbmFnZXIuc2hvd1dpZGdldChjb21wUmVmKTtcbiAgICAgICAgY29tcFJlZi5pbnN0YW5jZS5zZXRQb3NpdGlvbih3aWRnZXRDb25maWcucG9zaXRpb24pO1xuICAgICAgICB0aGlzLmNvbW1vblNlcnZpY2Uuc2V0V2lkZ2V0UG9zaXRpb24oY29tcFJlZiwgd2lkZ2V0Q29uZmlnLnBvc2l0aW9uKTtcbiAgICAgICAgd2lkZ2V0Q29uZmlnLmxvYWRlZCA9IHRydWU7XG4gICAgICAgIGNvbXBSZWYuaW5zdGFuY2UuY29uZmlnSWQgPSB3aWRnZXRDb25maWcuaWQ7XG4gICAgICAgIGRlZi5yZXNvbHZlKGNvbXBSZWYpO1xuICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9KTtcblxuXG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZi5wcm9taXNlKCk7XG4gIH1cbiAgX2NyZWF0ZVByZWxvYWRXaWRnZXRQbGFjZUhvbGRlcih3aWRnZXRDb25maWcpIHtcblxuICB9XG4gIC8qKlxuICAgKiDliJvlu7rlm77moIdcbiAgICogQHBhcmFtIHdpZGdldENvbmZpZyDnu4Tku7bphY3nva5cbiAgICogQHBhcmFtIGNvbXBvbmVudCDnu4Tku7ZcbiAgICovXG4gIF9jcmVhdGVQcmVsb2FkV2lkZ2V0SWNvbih3aWRnZXRDb25maWcsIGNvbXBvbmVudD86IGFueSkge1xuICAgIGxldCBpY29uRGlqaXQgPSBudWxsO1xuICAgIGxldCBpbk1hcDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlmICh3aWRnZXRDb25maWcucG9zaXRpb24ucmVsYXRpdmVUbyA9PT0gXCJicm93c2VyXCIpIHtcbiAgICAgIGljb25EaWppdCA9IHRoaXMuY29tcG9uZW50TG9hZGVyLmNyZWF0ZUNvbXBvbmVudFRvSG9tZShPblNjcmVlbldpZGdldEljb25Db21wb25lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbk1hcCA9IHRydWU7XG4gICAgICBpY29uRGlqaXQgPSB0aGlzLmNvbXBvbmVudExvYWRlci5jcmVhdGVDb21wb25lbnRUb01hcChPblNjcmVlbldpZGdldEljb25Db21wb25lbnQpO1xuICAgIH1cblxuICAgIGljb25EaWppdC5pbnN0YW5jZS5zZXRQcm9wcyh7XG4gICAgICBjb21wUmVmOiBjb21wb25lbnQsXG4gICAgICBhcHBDb25maWc6IHRoaXMuYXBwQ29uZmlnLFxuICAgICAgbWFwOiB0aGlzLmdsb2JhbFBhcmFtcy5tYXBDb25maWcuaXMzRCA/IHRoaXMudmlldyA6IHRoaXMubWFwLFxuICAgICAgd2lkZ2V0Q29uZmlnOiB3aWRnZXRDb25maWdcbiAgICB9KTtcbiAgICBhc3BlY3QuYmVmb3JlKGljb25EaWppdC5pbnN0YW5jZSwgJ2Rlc3Ryb3knLCAoKSA9PiB7XG4gICAgICB0aGlzLl9vbkRlc3Ryb3lJY29uKGljb25EaWppdCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnByZWxvYWRXaWRnZXRJY29ucy5wdXNoKGljb25EaWppdCk7XG4gICAgaWYgKGluTWFwKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudExvYWRlci5zaG93SW5NYXAoaWNvbkRpaml0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb21wb25lbnRMb2FkZXIuc2hvd0luSG9tZShpY29uRGlqaXQpO1xuICAgIH1cbiAgICBsZXQgX2VsZSA9IHRoaXMuY29tbW9uU2VydmljZS5nZXRDb21wb25lbnRSb290Tm9kZShpY29uRGlqaXQpO1xuICAgIGlmIChfZWxlKSB7XG4gICAgICBfZWxlLmNsYXNzTGlzdC5hZGQoXCJqaW11LXdpZGdldC1vbnNjcmVlbi1pY29uXCIpO1xuICAgICAgX2VsZS50aXRsZSA9IHdpZGdldENvbmZpZy5sYWJlbDtcbiAgICB9XG4gICAgbGV0IF9wb3NpdGlvbiA9IF8uY2xvbmVEZWVwKHdpZGdldENvbmZpZy5wb3NpdGlvbik7XG4gICAgLy8gX3Bvc2l0aW9uLmhlaWdodCA9IDMyO1xuICAgIC8vIF9wb3NpdGlvbi53aWR0aCA9IDMyO1xuICAgIC8vcnVpciAyMDIxMDMxNSDliKDpmaTpq5jlrr3lsZ7mgKfvvIzopoHkuI3nhLbmoLflvI/ph4zkv67mlLnlkI7kvJrlm6Dov5nph4zorr7nva7ph4zpq5jlrr3lr7zoh7Tml6DmlYhcbiAgICBkZWxldGUgX3Bvc2l0aW9uLmhlaWdodDtcbiAgICBkZWxldGUgX3Bvc2l0aW9uLndpZHRoO1xuICAgIHRoaXMuY29tbW9uU2VydmljZS5zZXRXaWRnZXRQb3NpdGlvbihpY29uRGlqaXQsIF9wb3NpdGlvbik7XG5cbiAgICAvLyBpY29uRGlqaXQuc3RhcnR1cCgpO1xuICAgIC8v5Zu+5qCH5L2N572u5pi+56S65ZCO6Ieq5Yqo5omT5byAXG4gICAgaWYgKHdpZGdldENvbmZpZy5vcGVuQXRTdGFydCA9PT0gdHJ1ZSkge1xuICAgICAgaWNvbkRpaml0Lmluc3RhbmNlLnN3aXRjaFRvT3BlbigpO1xuICAgIH1cblxuICAgIHJldHVybiBpY29uRGlqaXQ7XG4gIH1cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0gcGxhY2Vob2xkZXIgXG4gICAqL1xuICBfb25EZXN0cm95UGxhY2Vob2xkZXIocGxhY2Vob2xkZXIpIHtcbiAgICBsZXQgaW5kZXggPSAwLCBpZHggPSAtMTtcbiAgICBmb3IgKDsgaW5kZXggPCB0aGlzLndpZGdldFBsYWNlaG9sZGVycy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGxldCBjaSA9IHRoaXMud2lkZ2V0UGxhY2Vob2xkZXJzW2luZGV4XTtcbiAgICAgIGlmIChwbGFjZWhvbGRlci5pZCA9PT0gY2kuaWQgfHwgcGxhY2Vob2xkZXIuY29uZmlnSWQgPT09IGNpLmNvbmZpZ0lkKSB7XG4gICAgICAgIGlkeCA9IGluZGV4O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlkeCA+PSAwKSB7XG4gICAgICB0aGlzLndpZGdldFBsYWNlaG9sZGVycy5zcGxpY2UoaWR4LCAxKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ2Rlc3Ryb3kgcGxhY2Vob2xkZXIgWycgKyBwbGFjZWhvbGRlci5pZCArICddLicpO1xuICB9XG4gIC8qKlxuICAgKiDplIDmr4Hlm77moIfkuYvliY1cbiAgICogQHBhcmFtICBpY29uIFxuICAgKi9cbiAgX29uRGVzdHJveUljb24oaWNvbikge1xuICAgIC8vX+eJiOacrOS9juS6hu+8jOayoeaciWZpbmRJbmRleOWHveaVsFxuICAgIC8vIGxldCBpZHggPSBfLmZpbmRJbmRleCh0aGlzLnByZWxvYWRXaWRnZXRJY29ucywgZnVuY3Rpb24gKGNpKSB7IHJldHVybiBpY29uLmlkID09PSBjaS5pZDsgfSwgdGhpcyk7XG4gICAgbGV0IGluZGV4ID0gMCwgaWR4ID0gLTE7XG4gICAgZm9yICg7IGluZGV4IDwgdGhpcy5wcmVsb2FkV2lkZ2V0SWNvbnMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBsZXQgY2kgPSB0aGlzLnByZWxvYWRXaWRnZXRJY29uc1tpbmRleF07XG4gICAgICBpZiAoaWNvbi5pbnN0YW5jZS5pZCA9PT0gY2kuaW5zdGFuY2UuaWQpIHtcbiAgICAgICAgaWR4ID0gaW5kZXg7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaWR4ID49IDApIHtcbiAgICAgIHRoaXMucHJlbG9hZFdpZGdldEljb25zLnNwbGljZShpZHgsIDEpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygnZGVzdHJveSBpY29uIFsnICsgaWNvbi5pbnN0YW5jZS5pZCArICddLicpO1xuICB9XG4gIF9sb2FkUHJlbG9hZEdyb3VwKGdyb3VwSnNvbiwgYXBwQ29uZmlnKSB7XG4gICAgbGV0IGRlZiA9IHRoaXMuY29tbW9uU2VydmljZS5jcmVhdGVQcm9taXNlRGVmZXIoKTtcbiAgICBpZiAoIWFwcENvbmZpZy5tb2RlICYmICghZ3JvdXBKc29uLndpZGdldHMgfHwgZ3JvdXBKc29uLndpZGdldHMubGVuZ3RoID09PSAwKSkge1xuICAgICAgZGVmLnJlc29sdmUobnVsbCk7XG4gICAgICByZXR1cm4gZGVmO1xuICAgIH1cbiAgICAvL+W+heW8gOWPkVxuICAgIHJldHVybiBkZWYucHJvbWlzZSgpO1xuICB9XG4gIF9nZXRUaGVtZUNvbW1vblN0eWxlSWQodGhlbWUpIHtcbiAgICByZXR1cm4gJ3RoZW1lXycgKyB0aGVtZS5uYW1lICsgJ19zdHlsZV9jb21tb24nO1xuICB9XG4gIF9nZXRUaGVtZUN1cnJlbnRTdHlsZUlkKHRoZW1lKSB7XG4gICAgcmV0dXJuICd0aGVtZV8nICsgdGhlbWUubmFtZSArICdfc3R5bGVfJyArIHRoZW1lLnN0eWxlc1swXTtcbiAgfVxuICBfbG9hZFRoZW1lKHRoZW1lKSB7XG4gICAgLy/lvoXlvIDlj5FcbiAgfVxuICBfbG9hZFRoZW1lQ29tbW9uU3R5bGUodGhlbWUpIHtcbiAgICAvL+W+heW8gOWPkVxuICB9XG4gIF9yZW1vdmVUaGVtZUNvbW1vblN0eWxlKHRoZW1lKSB7XG4gICAgLy/lvoXlvIDlj5FcbiAgfVxuICBfbG9hZFRoZW1lQ3VycmVudFN0eWxlKHRoZW1lKSB7XG4gICAgLy/lvoXlvIDlj5FcbiAgfVxuICBfcmVtb3ZlVGhlbWVDdXJyZW50U3R5bGUodGhlbWUpIHtcbiAgICAvL+W+heW8gOWPkVxuICB9XG5cbiAgX2Rlc3Ryb3lQcmVsb2FkV2lkZ2V0SWNvbnMoKSB7XG4gICAgLy8gXy5lYWNoKHRoaXMucHJlbG9hZFdpZGdldEljb25zLCBmdW5jdGlvbiAoaWNvbikge1xuICAgIC8vICAgICBpY29uLmRlc3Ryb3koKTtcbiAgICAvLyB9LCB0aGlzKTtcbiAgICAvL3J1aXIgMTkwNzE5Oui/memHjOmcgOimgeS7juWQjuW+gOWJjeW+queOr++8jOWboGljb24uZGVzdHJveSgpO+S4reS8muWIoOmZpOWFg+e0oFxuICAgIGZvciAobGV0IGluZGV4ID0gdGhpcy5wcmVsb2FkV2lkZ2V0SWNvbnMubGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgICAgY29uc3QgaWNvbiA9IHRoaXMucHJlbG9hZFdpZGdldEljb25zW2luZGV4XTtcbiAgICAgIGljb24uZGVzdHJveSgpO1xuICAgIH1cbiAgICB0aGlzLnByZWxvYWRXaWRnZXRJY29ucyA9IFtdO1xuICB9XG5cbiAgX2Rlc3Ryb3lPZmZQYW5lbFdpZGdldHMoKSB7XG4gICAgXy5mb3JFYWNoKHRoaXMud2lkZ2V0TWFuYWdlci5nZXRPZmZQYW5lbFdpZGdldHMoKSwgKHdpZGdldCkgPT4ge1xuICAgICAgdGhpcy53aWRnZXRNYW5hZ2VyLmRlc3Ryb3lXaWRnZXQod2lkZ2V0KTtcbiAgICB9KTtcbiAgfVxuICBfZGVzdHJveVdpZGdldFBsYWNlaG9sZGVycygpIHtcbiAgICAvLyBfLmZvckVhY2godGhpcy53aWRnZXRQbGFjZWhvbGRlcnMsIGZ1bmN0aW9uIChwbGFjZWhvbGRlcikge1xuICAgIC8vICAgICBwbGFjZWhvbGRlci5kZXN0cm95KCk7XG4gICAgLy8gfSwgdGhpcyk7XG4gICAgLy9ydWlyIDE5MDcxOTrov5nph4zpnIDopoHku47lkI7lvoDliY3lvqrnjq/vvIzlm6BwbGFjZWhvbGRlci5kZXN0cm95KCk75Lit5Lya5Yig6Zmk5YWD57SgXG4gICAgZm9yIChsZXQgaW5kZXggPSB0aGlzLndpZGdldFBsYWNlaG9sZGVycy5sZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgICBjb25zdCBwbGFjZWhvbGRlciA9IHRoaXMud2lkZ2V0UGxhY2Vob2xkZXJzW2luZGV4XTtcbiAgICAgIHBsYWNlaG9sZGVyLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgdGhpcy53aWRnZXRQbGFjZWhvbGRlcnMgPSBbXTtcbiAgfVxuICBfZGVzdHJveVByZWxvYWRQYW5lbHMoKSB7XG4gICAgdGhpcy5wYW5lbE1hbmFnZXIuZGVzdHJveUFsbFBhbmVscygpO1xuICB9XG4gIF9kZXN0cm95UHJlbG9hZEdyb3VwUGFuZWxzKCkge1xuICAgIC8vIF8uZm9yRWFjaCh0aGlzLnByZWxvYWRHcm91cFBhbmVscywgZnVuY3Rpb24gKHBhbmVsKSB7XG4gICAgLy8gICB0aGlzLnBhbmVsTWFuYWdlci5kZXN0cm95UGFuZWwocGFuZWwpO1xuICAgIC8vIH0sIHRoaXMpO1xuICAgIHRoaXMucHJlbG9hZEdyb3VwUGFuZWxzID0gW107XG4gIH1cbiAgLyoqXG4gICAqIOS4u+mimOaUueWPmFxuICAgKiBAcGFyYW0gIGFwcENvbmZpZyBcbiAgICovXG4gIF9vblRoZW1lQ2hhbmdlKGFwcENvbmZpZykge1xuICAgIC8v5b6F5byA5Y+RXG4gIH1cbiAgLyoqXG4gICog5biD5bGA5pS55Y+YXG4gICogQHBhcmFtICBhcHBDb25maWcgXG4gICovXG4gIF9vbkxheW91dENoYW5nZTIoYXBwQ29uZmlnKSB7XG4gICAgLy/lvoXlvIDlj5FcbiAgfVxuICAvKipcbiAgICog5biD5bGA5pS55Y+YXG4gICAqIEBwYXJhbSAgYXBwQ29uZmlnIFxuICAgKi9cbiAgX29uTGF5b3V0Q2hhbmdlKGFwcENvbmZpZykge1xuICAgIHRoaXMuX29uTGF5b3V0Q2hhbmdlMihhcHBDb25maWcpO1xuXG4gIH1cbiAgLyoqXG4gICAqIOagt+W8j+aUueWPmFxuICAgKiBAcGFyYW0gIGFwcENvbmZpZyBcbiAgICovXG4gIF9vblN0eWxlQ2hhbmdlKGFwcENvbmZpZykge1xuICAgIC8vIOW+heW8gOWPkVxuXG4gIH1cbiAgX2NoYW5nZU1hcFBvc2l0aW9uKGFwcENvbmZpZykge1xuXG4gICAgLy/lvoXlvIDlj5FcbiAgfVxuICAvKipcbiAgICog5Zu+5bGC44CBbWFw5L2N572u562J5pS55Y+YXG4gICAqIEBwYXJhbSAgYXBwQ29uZmlnIFxuICAgKi9cbiAgX29uTWFwQ2hhbmdlKGFwcENvbmZpZykge1xuXG4gICAgLy/lvoXlvIDlj5FcbiAgfVxuICAvKipcbiAgICog6I+c5Y2V5pS55Y+YXG4gICAqIEBwYXJhbSAgYXBwQ29uZmlnIFxuICAgKi9cbiAgX29uV2lkZ2V0UG9vbENoYW5nZShhcHBDb25maWc6IGFueSwgY2hhbmdlRGF0YT86IGFueSkge1xuXG4gIH1cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0gIGFwcENvbmZpZyBcbiAgICogQHBhcmFtICBhY3Rpb25cbiAgICogQHBhcmFtICBlbGVpZCDlhYPntKBpZFxuICAgKi9cbiAgX29uQWN0aW9uVHJpZ2dlcmQoYXBwQ29uZmlnLCBhY3Rpb24sIGVsZWlkKSB7XG4gICAgbGV0IHBhbmVsSWNvbiA9IF8uZmluZCh0aGlzLnByZWxvYWRXaWRnZXRJY29ucywgKHcsIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gdy5pbnN0YW5jZS5jb25maWdJZCA9PT0gZWxlaWQ7XG4gICAgfSk7XG4gICAgaWYgKHBhbmVsSWNvbikge1xuICAgICAgcGFuZWxJY29uLmluc3RhbmNlLm9uQWN0aW9uKGFjdGlvbixcIlRPRE9cIik7XG4gICAgfVxuICAgIC8vIGxldCB3aWRnZXQgPSB0aGlzLndpZGdldE1hbmFnZXIuZ2V0V2lkZ2V0QnlJZChlbGVpZCk7Ly/ku45wYW5lbOaJk+W8gOeahHdpZGdldOS5n+S8muiiq+mrmOS6rlxuICAgIGxldCB3aWRnZXQgPSBfLmZpbmQodGhpcy53aWRnZXRNYW5hZ2VyLmdldE9uU2NyZWVuT2ZmUGFuZWxXaWRnZXRzKCksICh3KSA9PiB7XG4gICAgICByZXR1cm4gKHcuaW5zdGFuY2UuaWQgPT09IGVsZWlkKTtcbiAgICB9KTtcbiAgICBpZiAod2lkZ2V0KSB7XG4gICAgICB3aWRnZXQuaW5zdGFuY2Uub25BY3Rpb24oYWN0aW9uLFwiVE9ET1wiKTtcbiAgICB9XG4gICAgbGV0IHBsYWNlaG9sZGVyID0gXy5maW5kKHRoaXMud2lkZ2V0UGxhY2Vob2xkZXJzLCAodywgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiB3LmNvbmZpZ0lkID09PSBlbGVpZDtcbiAgICB9KTtcbiAgICBpZiAocGxhY2Vob2xkZXIpIHtcbiAgICAgIHBsYWNlaG9sZGVyLm9uQWN0aW9uKGFjdGlvbixcIlRPRE9cIik7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiDnu4Tku7bmlLnlj5hcbiAgICogQHBhcmFtICBhcHBDb25maWcgXG4gICAqIEBwYXJhbSAgY2hhbmdlRGF0YSAgXG4gICAqIEBwYXJhbSAgYWN0aW9uIGFkZOOAgWRlbGV0ZeOAgWVkaXQgXG4gICAqL1xuICBfb25XaWRnZXRDaGFuZ2UoYXBwQ29uZmlnLCBjaGFuZ2VEYXRhLCBhY3Rpb24pIHtcbiAgICBsZXQgY2hhbmdlZFdpZGdldHMgPSBjaGFuZ2VEYXRhLndpZGdldExpc3Q7XG4gICAgaWYgKCFjaGFuZ2VkV2lkZ2V0cyB8fCBjaGFuZ2VkV2lkZ2V0cy5sZW5ndGggPD0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgX3NlbGYgPSB0aGlzO1xuICAgIGZ1bmN0aW9uIGxvYWRXaWRnZXQod2lkZ2V0Q29uZmlnLCBhcHBDb25maWcsIGlzSWNvbiwgc3RhdGUpIHtcbiAgICAgIGlmICh3aWRnZXRDb25maWcuaGVhZGVyTWVudSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmICh3aWRnZXRDb25maWcudmlzaWJsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgX3NlbGYuaW52aXNpYmxlV2lkZ2V0SWRzLnB1c2god2lkZ2V0Q29uZmlnLmlkKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBfc2VsZi5fbG9hZFByZWxvYWRXaWRnZXQod2lkZ2V0Q29uZmlnLCBhcHBDb25maWcpLnRoZW4oZnVuY3Rpb24gKGljb25OZXcpIHtcbiAgICAgICAgaWYgKGlzSWNvbikge1xuICAgICAgICAgIGlmICh3aWRnZXRDb25maWcudXJpICYmIHN0YXRlID09PSAnb3BlbmVkJykge1xuICAgICAgICAgICAgaWNvbk5ldy5vbkNsaWNrKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcHJvY2Vzcyh3Yykge1xuICAgICAgbGV0IHVyaSA9IHRoaXMuZ2xvYmFsUGFyYW1zLmFwcEluZm8uZm9sZGVyVXJsUHJlZml4ICsgXCIvXCIgKyAod2Mub2xkVXJpID8gd2Mub2xkVXJpIDogd2MudXJpKTtcbiAgICAgIGxldCBpY29uID0gXy5maW5kKF9zZWxmLnByZWxvYWRXaWRnZXRJY29ucywgZnVuY3Rpb24gKHcpIHsgcmV0dXJuIHdjLmlkID09PSB3Lmluc3RhbmNlLmNvbmZpZ0lkIHx8IHVyaSA9PT0gdy5pbnN0YW5jZS51cmkgfSk7XG4gICAgICBsZXQgc3RhdGUgPSB1bmRlZmluZWQsIHdpZGdldENvbmZpZyA9IHVuZGVmaW5lZDtcbiAgICAgIGlmIChpY29uKSB7XG4gICAgICAgIHN0YXRlID0gaWNvbi5pbnN0YW5jZS5zdGF0ZSwgd2lkZ2V0Q29uZmlnID0gaWNvbi5pbnN0YW5jZS53aWRnZXRDb25maWc7XG4gICAgICAgIGlmIChpY29uLmluc3RhbmNlLndpZGdldCkge1xuICAgICAgICAgIGljb24uaW5zdGFuY2Uud2lkZ2V0LmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgICBpY29uLmRlc3Ryb3koKTtcbiAgICAgICAgaWYgKGFjdGlvbiA9PT0gXCJkZWxldGVcIikgey8v5Yig6ZmkXG4gICAgICAgICAgX3NlbGYuX2NyZWF0ZVByZWxvYWRXaWRnZXRQbGFjZUhvbGRlcih3aWRnZXRDb25maWcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGFjdGlvbiA9PT0gXCJtb2RpZnlcIikgey8v57yW6L6R6YWN572uXG4gICAgICAgICAgbG9hZFdpZGdldCh3aWRnZXRDb25maWcsIGFwcENvbmZpZywgdHJ1ZSwgc3RhdGUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgd2lkZ2V0ID0gXy5maW5kKF9zZWxmLndpZGdldE1hbmFnZXIuZ2V0T25TY3JlZW5PZmZQYW5lbFdpZGdldHMoKSwgZnVuY3Rpb24gKHcpIHtcbiAgICAgICAgICByZXR1cm4gKHdjLmlkID09PSB3Lmluc3RhbmNlLmNvbmZpZ0lkKSB8fCB1cmkgPT09IHcuaW5zdGFuY2UudXJpO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgaWYgKHdpZGdldCkge1xuICAgICAgICAgIHdpZGdldENvbmZpZyA9IHdpZGdldC5pbnN0YW5jZS53aWRnZXRDb25maWc7XG4gICAgICAgICAgd2lkZ2V0LmRlc3Ryb3koKTtcbiAgICAgICAgICBpZiAoYWN0aW9uID09PSBcImRlbGV0ZVwiKSB7Ly/liKDpmaRcbiAgICAgICAgICAgIF9zZWxmLl9jcmVhdGVQcmVsb2FkV2lkZ2V0UGxhY2VIb2xkZXIod2lkZ2V0Q29uZmlnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAoYWN0aW9uID09PSBcIm1vZGlmeVwiKSB7Ly/nvJbovpHphY3nva5cbiAgICAgICAgICAgIGxvYWRXaWRnZXQod2lkZ2V0Q29uZmlnLCBhcHBDb25maWcsIGZhbHNlLCAnJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8v5Yig6Zmk57uE5Lu25ZCO5re75Yqg5oiW5Y2g5L2N56ym5re75YqgXG4gICAgICAgICAgbGV0IGVsZUNvbmZpZyA9IHRoaXMudXRpbHMuZ2V0Q29uZmlnRWxlbWVudEJ5SWQoYXBwQ29uZmlnLCB3Yy5pZCk7XG4gICAgICAgICAgaWYgKGVsZUNvbmZpZykge1xuICAgICAgICAgICAgbGV0IHBsYWNlaG9sZGVyID0gXy5maW5kKF9zZWxmLndpZGdldFBsYWNlaG9sZGVycywgZnVuY3Rpb24gKHcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuICh3Yy5pZCA9PT0gdy5jb25maWdJZCB8fCB3Yy5pZCA9PT0gdy5pZCk7XG4gICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgICAgIGlmIChwbGFjZWhvbGRlcikge1xuICAgICAgICAgICAgICBwbGFjZWhvbGRlci5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZWxlQ29uZmlnLmxvYWRlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICBkZWxldGUgZWxlQ29uZmlnLmFtZEZvbGRlcjtcbiAgICAgICAgICAgICAgZGVsZXRlIGVsZUNvbmZpZy5jaGVja2VkO1xuICAgICAgICAgICAgICBkZWxldGUgZWxlQ29uZmlnLmZvbGRlclVybDtcbiAgICAgICAgICAgICAgZGVsZXRlIGVsZUNvbmZpZy5oYXNDb25maWc7XG4gICAgICAgICAgICAgIGRlbGV0ZSBlbGVDb25maWcuaGFzTG9jYWxlO1xuICAgICAgICAgICAgICBkZWxldGUgZWxlQ29uZmlnLmhhc1NldHRpbmc7XG4gICAgICAgICAgICAgIGRlbGV0ZSBlbGVDb25maWcuaGFzU2V0dGluZ0xvY2FsZTtcbiAgICAgICAgICAgICAgZGVsZXRlIGVsZUNvbmZpZy5oYXNTZXR0aW5nUGFnZTtcbiAgICAgICAgICAgICAgZGVsZXRlIGVsZUNvbmZpZy5oYXNTZXR0aW5nU3R5bGU7XG4gICAgICAgICAgICAgIGRlbGV0ZSBlbGVDb25maWcuaGFzU2V0dGluZ1VJRmlsZTtcbiAgICAgICAgICAgICAgZGVsZXRlIGVsZUNvbmZpZy5oYXNTdHlsZTtcbiAgICAgICAgICAgICAgZGVsZXRlIGVsZUNvbmZpZy5oYXNVSUZpbGU7XG4gICAgICAgICAgICAgIGRlbGV0ZSBlbGVDb25maWcuaGFzVmVyc2lvbk1hbmFnZXI7XG4gICAgICAgICAgICAgIGRlbGV0ZSBlbGVDb25maWcuaWNvbjtcbiAgICAgICAgICAgICAgZGVsZXRlIGVsZUNvbmZpZy5pblBhbmVsO1xuICAgICAgICAgICAgICBkZWxldGUgZWxlQ29uZmlnLmlzQ29udHJvbGxlcjtcbiAgICAgICAgICAgICAgZGVsZXRlIGVsZUNvbmZpZy5pc0hlYWRNZW51O1xuICAgICAgICAgICAgICAvL2RlbGV0ZSBlbGVDb25maWcuaXNXaWRnZXQ7XG4gICAgICAgICAgICAgIGRlbGV0ZSBlbGVDb25maWcua2VlcENvbmZpZ0FmdGVyTWFwU3dpdGhjaGVkO1xuICAgICAgICAgICAgICBkZWxldGUgZWxlQ29uZmlnLmxvYWRlZDtcbiAgICAgICAgICAgICAgZGVsZXRlIGVsZUNvbmZpZy5tYW5pZmVzdDtcbiAgICAgICAgICAgICAgZGVsZXRlIGVsZUNvbmZpZy5zdXBwb3J0TXVsdGlJbnN0YW5jZTtcbiAgICAgICAgICAgICAgZGVsZXRlIGVsZUNvbmZpZy50aHVtYm5haWw7XG4gICAgICAgICAgICAgIGRlbGV0ZSBlbGVDb25maWcudXJpO1xuICAgICAgICAgICAgICBkZWxldGUgZWxlQ29uZmlnLnZlcnNpb247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgd2lkZ2V0Q29uZmlnID0gXy5leHRlbmQoZWxlQ29uZmlnLCB3Yyk7XG4gICAgICAgICAgICAgIHRoaXMuY29uZmlnTWFuYWdlci5jb25maWdMb2FkZXIuX3Byb2Nlc3NBZnRlclRyeUxvYWQoYXBwQ29uZmlnKTtcbiAgICAgICAgICAgICAgX3NlbGYud2lkZ2V0TWFuYWdlci5sb2FkV2lkZ2V0TWFuaWZlc3Qod2lkZ2V0Q29uZmlnKS50aGVuKChjb25maWcpID0+IHtcbiAgICAgICAgICAgICAgICBsb2FkV2lkZ2V0KHdpZGdldENvbmZpZywgYXBwQ29uZmlnLCBmYWxzZSwgJycpO1xuICAgICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2FkV2lkZ2V0TWFuaWZlc3QgZXJyXCIsIGVycik7XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uZm9yRWFjaChfc2VsZi5pbnZpc2libGVXaWRnZXRJZHMsICh3aWRnZXRJZCkgPT4ge1xuICAgICAgICAgICAgICBpZiAod2lkZ2V0SWQgPT09IHdjLmlkICYmIHdjLnZpc2libGUgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgd2lkZ2V0Q29uZmlnID0gdGhpcy51dGlscy5nZXRDb25maWdFbGVtZW50QnlJZChhcHBDb25maWcsIHdjLmlkKTtcbiAgICAgICAgICAgICAgICBfc2VsZi5fbG9hZFByZWxvYWRXaWRnZXQod2lkZ2V0Q29uZmlnLCBhcHBDb25maWcpO1xuICAgICAgICAgICAgICAgIGxldCBpID0gX3NlbGYuaW52aXNpYmxlV2lkZ2V0SWRzLmluZGV4T2Yod2lkZ2V0Q29uZmlnLmlkKTtcbiAgICAgICAgICAgICAgICBfc2VsZi5pbnZpc2libGVXaWRnZXRJZHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cbiAgICBfLmZvckVhY2goY2hhbmdlZFdpZGdldHMsIHByb2Nlc3MpO1xuICB9XG5cbn0iXX0=