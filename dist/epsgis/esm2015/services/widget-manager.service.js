import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import * as _ from "lodash";
import { WidgetState } from '../models/base-widget';
import { PanelDockMode } from '../models/base-panel';
import * as i0 from "@angular/core";
import * as i1 from "../models/models";
import * as i2 from "./event-emitter.service";
import * as i3 from "./utils.service";
import * as i4 from "./request.service";
import * as i5 from "./common.service";
import * as i6 from "./component-loader.service";
export class WidgetManagerService {
    constructor(globalParams, eventService, utils, httpService, commonService, componentLoader) {
        this.globalParams = globalParams;
        this.eventService = eventService;
        this.utils = utils;
        this.httpService = httpService;
        this.commonService = commonService;
        this.componentLoader = componentLoader;
        this.loaded = null;
        this.missedActions = null;
        this.activeWidget = null;
        this.map = null;
        this.view = null;
        this.appConfig = null;
        this.loaded = [];
        this.missedActions = [];
        this.activeWidget = null;
    }
    setMap(map) {
        if (this.globalParams.mapConfig.is3D === true) {
            this.view = map;
        }
        else {
            this.map = map;
        }
    }
    setAppConfig(appConfig) {
        this.appConfig = appConfig;
    }
    _onMapLoaded(map) {
    }
    _onMapChanged(map) {
    }
    loadConfig(compInfo, widget) {
        widget.appConfig = this.appConfig;
        widget.view = this.view;
        widget.map = this.map;
        let def = this.commonService.createPromiseDefer();
        let item = this.appConfig.widgetOnScreen.widgets.find(f => f.uri.toLowerCase() === compInfo.uri.toLowerCase());
        if (item) {
            if (!item.config) {
                this.tryLoadWidgetConfig(item).then(widgetJson => {
                    this.setWidgetPorp(widget, widgetJson);
                    widget.started = true;
                    widget.state = WidgetState.opened;
                    return def.resolve(true);
                }).catch(err => {
                    return def.resolve(true);
                });
            }
        }
        else {
            const aconfig = {
                "widgetOnScreen": {
                    "widgets": [{
                            "uri": compInfo.uri,
                            "label": compInfo.name
                        }]
                }
            };
            this.configLoader._upgradeAppConfig(aconfig);
            this.configLoader._processAfterTryLoad(aconfig);
            this.configLoader.loadWidgetsManifest(aconfig).then(appconfig => {
                const wConfig = appconfig.widgetOnScreen.widgets[0];
                this.tryLoadWidgetConfig(wConfig).then(widgetJson => {
                    this.setWidgetPorp(widget, widgetJson);
                    widget.started = true;
                    widget.state = WidgetState.opened;
                    return def.resolve(true);
                }).catch(err => {
                    return def.resolve(true);
                });
            });
        }
        return def.promise();
    }
    openWidget(options) {
        let _openPanelOrWidget = (_config) => {
            const _options = _.cloneDeep(options);
            let inPanel = _config.inPanel;
            if (options.onlyCreateWidget === true) {
                inPanel = false;
            }
            if (inPanel !== false) {
                this.panelManager.showPanel(_config, null, options.panel, _options).then((panel) => {
                    if (panel.instance.isDockable()) {
                        this.panelManager.onMapResize();
                    }
                    def.resolve(panel);
                });
            }
            else {
                this.loadWidget(_config, _options).then((compRef) => {
                    if (options.onlyCreateWidget === true) {
                        def.resolve(compRef);
                    }
                    else {
                        this.showWidget(compRef);
                        compRef.instance.setPosition(_config.position);
                        this.commonService.setWidgetPosition(compRef, _config.position);
                        _config.loaded = true;
                        compRef.instance.configId = _config.id;
                        def.resolve(compRef.instance);
                    }
                }).catch((err) => def.reject(err));
            }
        };
        let def = this.commonService.createPromiseDefer();
        if (!options.uri) {
            console.error("no uri");
            def.reject(new Error("no uri"));
            return def.promise();
        }
        let item = this.appConfig.widgetOnScreen.widgets.find(f => f.uri.toLowerCase() === options.uri.toLowerCase());
        if (item) {
            _openPanelOrWidget(item);
        }
        else {
            if (!options.position) {
                console.error("no position");
                def.reject(new Error("no position"));
                return def.promise();
            }
            let _config = {
                "label": "",
                "uri": options.uri,
                "position": {}
            };
            _config.position = _.merge(_config.position, options.position);
            if (options.panel) {
                _config.label = options.panel.title;
                if (options.panel.dockSide) {
                    switch (options.panel.dockSide) {
                        case PanelDockMode.left:
                            _config["panel"] = {
                                uri: "epsgis-dockable-panel-at-left"
                            };
                            break;
                        case PanelDockMode.bottom:
                            _config["panel"] = {
                                uri: "epsgis-dockable-panel-at-bottom"
                            };
                            break;
                        case PanelDockMode.right:
                            _config["panel"] = {
                                uri: "epsgis-dockable-panel-at-right"
                            };
                            break;
                        default:
                            break;
                    }
                }
            }
            if (!_config.label) {
                _config.label = _config.uri;
            }
            let _appConfig = {
                "widgetOnScreen": {
                    "widgets": [
                        _config
                    ]
                }
            };
            this.configLoader._processAfterTryLoad(_appConfig);
            this.configLoader.loadWidgetsManifest(_appConfig).then((cfg) => {
                const _widgetConfig = cfg.widgetOnScreen.widgets[0];
                this.appConfig.widgetOnScreen.widgets.push(_widgetConfig);
                _openPanelOrWidget(_widgetConfig);
            }).catch(err => def.reject(err));
        }
        return def.promise();
    }
    loadWidget(setting, openOptions) {
        let def = this.commonService.createPromiseDefer();
        let findWidget;
        setting = _.clone(setting);
        if (!setting.folderUrl) {
            this.utils.processWidgetSetting(setting);
        }
        findWidget = this.getWidgetById(setting.id);
        if (findWidget) {
            if (openOptions) {
                findWidget.instance.reqPara = openOptions.param;
            }
            def.resolve(findWidget);
        }
        else {
            def.resolve(this.createWidget(setting, openOptions));
        }
        return def.promise();
    }
    setWidgetPorp(widget, setting) {
        setting.rawConfig = _.cloneDeep(setting);
        setting['class'] = 'jimu-widget';
        if (!setting.label) {
            setting.label = setting.name;
        }
        if (this.globalParams.mapConfig.is3D) {
            if (this.view) {
                setting.view = this.view;
                widget.view = this.view;
            }
        }
        else {
            if (this.map) {
                setting.map = this.map;
                widget.map = this.map;
            }
        }
        widget.appConfig = this.appConfig;
        widget.widgetConfig = setting;
        widget.config = setting.config;
        widget.configId = widget.id = setting.id;
        widget.folderUrl = setting.folderUrl;
        widget.icon = setting.icon;
        widget.label = widget.title = widget.tooltip = setting.label;
        widget["baseClass"] = setting.class;
        widget.gid = setting.gid;
        widget.uri = setting.uri;
        widget.openAtStart = setting.openAtStart === true;
        if (setting.manifest
            && setting.manifest.properties
            && setting.manifest.properties.inPanel === false) {
            widget.inPanel = setting.inPanel = setting.manifest.properties.inPanel;
        }
        else {
            widget.inPanel = setting.inPanel = true;
        }
    }
    createWidget(setting, openOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            const def = this.commonService.createPromiseDefer();
            let widget;
            let _widget = this.getWidgetById(setting.id);
            if (_widget) {
                def.resolve(_widget);
                return def.promise();
            }
            try {
                let comp = this.componentLoader.findComponent(setting.uri), compRef = null, inMap = false;
                if (!comp) {
                    const _msg = 'widget [' + setting.uri + '] not find';
                    console.log(_msg);
                    def.reject(new Error(_msg));
                    return def.promise();
                }
                if (setting.position.relativeTo !== "map") {
                    compRef = this.componentLoader.createComponentToHome(comp);
                }
                else {
                    compRef = this.componentLoader.createComponentToMap(comp);
                    inMap = true;
                }
                if (!compRef) {
                    const _msg = `widget [${setting.label}] create fail`;
                    console.log(_msg);
                    def.reject(new Error(_msg));
                    return def.promise();
                }
                widget = compRef.instance;
                if (openOptions) {
                    widget.reqPara = openOptions.param;
                }
                if (!setting.config) {
                    yield this.tryLoadWidgetConfig(setting);
                }
                if (!setting.manifest) {
                    yield this.loadWidgetManifest(setting);
                }
                this.setWidgetPorp(widget, setting);
                this.loaded.push(compRef);
                console.log('widget [' + setting.uri + '] created.');
                this.eventService.rss.emit(this.eventService._widgetCreated, widget);
                def.resolve(compRef);
            }
            catch (err) {
                console.log('create [' + setting.uri + '] error:' + err.stack);
                def.reject(err);
            }
            return def.promise();
        });
    }
    getAllWidgets() {
        return this.loaded;
    }
    loadWidgetClass(setting) {
        return this.commonService.createPromiseDefer().promise();
    }
    loadWidgetResources(setting) {
        return this.commonService.createPromiseDefer().promise();
    }
    tryLoadWidgetConfig(widgetJson) {
        var def = this.commonService.createPromiseDefer();
        let configPath = widgetJson.configPath || 'config.json';
        var url = widgetJson.folderUrl + configPath;
        var foldrUrl = widgetJson.folderUrl.split('?');
        if (foldrUrl.length > 0) {
            url = foldrUrl[0] + configPath + '?' + (foldrUrl[1] ? foldrUrl[1] : '');
        }
        if (widgetJson.config) {
            def.resolve(widgetJson);
            return def.promise();
        }
        try {
            this.httpService.getJsonFile(url).then((config) => {
                widgetJson.config = config;
                def.resolve(widgetJson);
            }).catch(err => {
                console.error(`load [${widgetJson.uri}] config.json error`);
                console.error(err);
                def.resolve(widgetJson);
            });
        }
        catch (error) {
            console.error(error);
            def.resolve(widgetJson);
        }
        return def.promise();
    }
    _tryLoadWidgetConfig(setting) {
    }
    loadWidgetManifest(widgetJson) {
        let def = this.commonService.createPromiseDefer();
        var url = widgetJson.folderUrl + 'manifest.json';
        var foldrUrl = widgetJson.folderUrl.split('?');
        if (foldrUrl.length > 0) {
            url = foldrUrl[0] + 'manifest.json?' + (foldrUrl[1] ? foldrUrl[1] : '');
        }
        if (widgetJson.manifest) {
            def.resolve(widgetJson);
            return def.promise();
        }
        let process = (manifest) => {
            manifest.amdFolder = widgetJson.amdFolder;
            manifest.category = 'widget';
            let _w = "auto", _h = "auto";
            if (manifest.properties.inPanel !== false) {
                _w = "300";
                _h = "400";
            }
            if (typeof widgetJson.position.width === "undefined") {
                widgetJson.position.width = _w;
            }
            if (typeof widgetJson.position.height === "undefined") {
                widgetJson.position.height = _h;
            }
            if (!widgetJson.label) {
                this.utils.addI18NLabel(manifest).then(() => {
                    this._processManifest(manifest);
                    this.utils.addManifest2WidgetJson(widgetJson, manifest);
                    def.resolve(widgetJson);
                });
            }
            else {
                this._processManifest(manifest);
                this.utils.addManifest2WidgetJson(widgetJson, manifest);
                def.resolve(widgetJson);
            }
        };
        this.httpService.getJsonFile(url).then(process).catch((err) => {
            if (err.readyState === 4 && err.status === 200 && err.responseText === "") {
                var manifest = {};
                manifest.amdFolder = widgetJson.amdFolder;
                manifest.category = 'widget';
                process(manifest);
            }
            else {
                console.error(`load [${widgetJson.uri}] config.json error`);
                console.error(err);
                def.resolve(widgetJson);
            }
        });
        return def.promise();
    }
    loadWidgetSettingPage(setting) {
        const def = this.commonService.createPromiseDefer();
        return def.promise();
    }
    loadWidgetSettingClass(setting) {
        var def = this.commonService.createPromiseDefer();
        return def.promise();
    }
    loadWidgetSettingPageResources(setting) {
        var def = this.commonService.createPromiseDefer();
        return def.promise();
    }
    createWidgetSetting(setting, clazz) {
        return null;
    }
    _hideLoading() {
    }
    getWidgetById(id) {
        var ret;
        _.some(this.loaded, (w) => {
            if (w.instance.id === id) {
                ret = w;
                return true;
            }
        });
        return ret;
    }
    getWidgetByLabel(label) {
        var ret;
        _.some(this.loaded, (w) => {
            if (w.instance.label === label) {
                ret = w;
                return true;
            }
        });
        return ret;
    }
    getWidgetsByName(name) {
        var ret = [];
        _.some(this.loaded, (w) => {
            if (w.instance.name === name) {
                ret.push(w);
            }
        });
        return ret;
    }
    getOpenedWidgetByGroupId(groupId) {
        return _.find(this.loaded, (w) => {
            return w.instance.gid === groupId && (w.instance.state === WidgetState.opened || w.instance.state === WidgetState.active);
        });
    }
    showWidget(compRef) {
        if (!compRef)
            return;
        let widget = compRef.instance;
        if (typeof widget === 'string') {
            widget = this.getWidgetById(widget);
            if (!widget) {
                return;
            }
        }
        if (!widget.started) {
            try {
                widget.started = true;
                if (widget.widgetConfig.position.relativeTo === "browser") {
                    this.componentLoader.showInHome(compRef);
                }
                else {
                    this.componentLoader.showInMap(compRef);
                }
                widget.startup();
            }
            catch (err) {
                console.error('fail to startup widget ' + widget.name + '. ' + err.stack);
            }
        }
        if (widget.state === WidgetState.closed) {
            widget.setState(WidgetState.opened);
            try {
                widget.onOpen();
            }
            catch (err) {
                console.error('fail to open widget ' + widget.name + '. ' + err.stack);
            }
        }
    }
    closeOtherWidgetsInTheSameGroup(widget) {
        if (typeof widget === 'string') {
            widget = this.getWidgetById(widget);
            if (!widget) {
                return;
            }
        }
        var widgets = this.getAllWidgets();
        for (var i = 0; i < widgets.length; i++) {
            if (widgets[i].instance.gid === widget.instance.gid && widgets[i].instance.id !== widget.instance.id) {
                this.closeWidget(widgets[i]);
            }
        }
    }
    closeAllWidgetsInGroup(groupId) {
        var widgets = this.getAllWidgets();
        for (var i = 0; i < widgets.length; i++) {
            if (widgets[i].instance.gid === groupId) {
                this.closeWidget(widgets[i]);
            }
        }
    }
    closeWidget(widget) {
        let def = this.commonService.createPromiseDefer();
        let _widget;
        if (typeof widget === 'string') {
            _widget = this.getWidgetById(widget);
        }
        else {
            _widget = widget;
        }
        if (!_widget) {
            def.reject(new Error("widget is null"));
            return def.promise();
        }
        if (_widget.instance.state !== WidgetState.closed) {
            try {
                if (this.activeWidget && this.activeWidget.instance.id === _widget.instance.id) {
                    this.activeWidget.instance.onDeActive();
                    this.activeWidget = null;
                }
                this.commonService.getComponentRootNode(_widget).style.display = 'none';
                _widget.instance.setState(WidgetState.closed);
                _widget.instance.onClose();
                def.resolve(_widget);
            }
            catch (err) {
                console.log(console.error('fail to close widget ' + _widget.instance.name + '. ' + err.stack));
                def.reject(err);
            }
        }
        return def.promise();
    }
    destroyWidget(widget) {
        var m;
        if (typeof widget === 'string') {
            m = this.getWidgetById(widget);
            if (!m) {
                return;
            }
            else {
                widget = m;
            }
        }
        this._removeWidget(widget);
        try {
            widget.destroy();
            console.log('destroy widget [' + widget.instance.id + '].');
        }
        catch (err) {
            console.log(console.error('fail to destroy widget ' + widget.instance.name + '. ' + err.stack));
        }
    }
    _processManifest(manifest) {
        this.utils.addManifestProperies(manifest);
        this.utils.processManifestLabel(manifest, 'zh-cn');
    }
    _tryLoadResource(setting, flag) {
        return this.commonService.createPromiseDefer().promise();
    }
    _replaceId(id) {
        return id.replace(/\//g, '_').replace(/\./g, '_');
    }
    loadWidgetStyle(widgetSetting) {
    }
    loadWidgetSettingStyle(widgetSetting) {
    }
    loadWidgetConfig(widgetSetting) {
    }
    loadWidgetI18n(widgetSetting) {
    }
    loadWidgetSettingI18n(widgetSetting) {
    }
    loadWidgetTemplate(widgetSetting) {
        return this.commonService.createPromiseDefer().promise();
    }
    loadWidgetSettingTemplate(widgetSetting) {
        return this.commonService.createPromiseDefer().promise();
    }
    getOnScreenOffPanelWidgets() {
        return _.filter(this.loaded, function (widget) {
            return (widget.instance.isOnScreen && !widget.instance.inPanel) || (widget.instance.widgetConfig.isOnScreen && !widget.instance.widgetConfig.inPanel);
        });
    }
    _postWidgetStartup(widgetObject) {
    }
    _triggerMissedAction(widget) {
        this.missedActions.forEach(function (info) {
            if (info.id === widget.instance.id) {
                widget.instance.onAction(info.action.name, info.action.data);
            }
        });
    }
    _remove(id) {
        return _.some(this.loaded, (w, i) => {
            if (w.instance.id === id) {
                this.loaded.splice(i, 1);
                return true;
            }
        });
    }
    _onDestroyWidget(widget) {
        if (widget.instance.state !== WidgetState.closed) {
            this.closeWidget(widget);
        }
        this._removeWidget(widget);
        console.log('destroy widget [' + widget.instance.uri + '].');
    }
    _onDestroyWidgetSetting(settingWidget) {
        this.removeWidgetSettingStyle(settingWidget);
    }
    _removeWidget(widget) {
        var m;
        if (typeof widget === 'string') {
            m = this.getWidgetById(widget);
            if (!m) {
                return;
            }
            else {
                widget = m;
            }
        }
        if (this.activeWidget && this.activeWidget.instance.id === widget.instance.id) {
            this.activeWidget = null;
        }
        this._remove(widget.instance.id);
        if (this.getWidgetsByName(widget.instance.name).length === 0) {
            this.removeWidgetStyle(widget);
        }
    }
    removeWidgetStyle(widget) {
    }
    removeWidgetSettingStyle(widget) {
    }
    _onClickWidget(widget, evt) {
        this._activeWidget(widget);
    }
    _activeWidget(widget) {
    }
    getOffPanelWidgets() {
        return _.filter(this.loaded, function (widget) {
            return !widget.instance.inPanel;
        });
    }
}
WidgetManagerService.ɵfac = function WidgetManagerService_Factory(t) { return new (t || WidgetManagerService)(i0.ɵɵinject(i1.AppGlobalConfig), i0.ɵɵinject(i2.EventEmitterService), i0.ɵɵinject(i3.UtilsService), i0.ɵɵinject(i4.HttpReqService), i0.ɵɵinject(i5.CommonService), i0.ɵɵinject(i6.ComponentLoaderService)); };
WidgetManagerService.ɵprov = i0.ɵɵdefineInjectable({ token: WidgetManagerService, factory: WidgetManagerService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WidgetManagerService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.AppGlobalConfig }, { type: i2.EventEmitterService }, { type: i3.UtilsService }, { type: i4.HttpReqService }, { type: i5.CommonService }, { type: i6.ComponentLoaderService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LW1hbmFnZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2Vwc2dpcy9zZXJ2aWNlcy93aWRnZXQtbWFuYWdlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFHQSxPQUFPLEVBQUUsVUFBVSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUU1QixPQUFPLEVBQUUsV0FBVyxFQUFxQixNQUFNLHVCQUF1QixDQUFDO0FBRXZFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7Ozs7QUFZckQsTUFBTSxPQUFPLG9CQUFvQjtJQVMvQixZQUNVLFlBQTZCLEVBQzdCLFlBQWlDLEVBQ2pDLEtBQW1CLEVBQ25CLFdBQTJCLEVBQzNCLGFBQTRCLEVBQzVCLGVBQXVDO1FBTHZDLGlCQUFZLEdBQVosWUFBWSxDQUFpQjtRQUM3QixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDakMsVUFBSyxHQUFMLEtBQUssQ0FBYztRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBZ0I7UUFDM0Isa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsb0JBQWUsR0FBZixlQUFlLENBQXdCO1FBZGpELFdBQU0sR0FBNkMsSUFBSSxDQUFDO1FBQ3hELGtCQUFhLEdBQWUsSUFBSSxDQUFDO1FBQ2pDLGlCQUFZLEdBQXNDLElBQUksQ0FBQztRQUN2RCxRQUFHLEdBQVEsSUFBSSxDQUFDO1FBQ2hCLFNBQUksR0FBUSxJQUFJLENBQUM7UUFDakIsY0FBUyxHQUFRLElBQUksQ0FBQztRQVVwQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztJQUczQixDQUFDO0lBS0QsTUFBTSxDQUFDLEdBQUc7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Q0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzVELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNoQztJQUNILENBQUM7SUFDRCxpQkFBaUIsQ0FBQyxNQUFNO0lBRXhCLENBQUM7SUFDRCx3QkFBd0IsQ0FBQyxNQUFNO0lBRS9CLENBQUM7SUFDRCxjQUFjLENBQUMsTUFBTSxFQUFFLEdBQUc7UUFFeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ0QsYUFBYSxDQUFDLE1BQU07SUFHcEIsQ0FBQztJQUNELGtCQUFrQjtRQUNoQixPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxVQUFVLE1BQU07WUFDM0MsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7d0ZBaHpCVSxvQkFBb0I7NERBQXBCLG9CQUFvQixXQUFwQixvQkFBb0IsbUJBRm5CLE1BQU07dUZBRVAsb0JBQW9CO2NBSGhDLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vblNlcnZpY2UgfSBmcm9tICcuL2NvbW1vbi5zZXJ2aWNlJztcbmltcG9ydCB7IEh0dHBSZXFTZXJ2aWNlIH0gZnJvbSAnLi9yZXF1ZXN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyU2VydmljZSB9IGZyb20gJy4vZXZlbnQtZW1pdHRlci5zZXJ2aWNlJztcbmltcG9ydCB7IEluamVjdGFibGUsIENvbXBvbmVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXRpbHNTZXJ2aWNlIH0gZnJvbSAnLi91dGlscy5zZXJ2aWNlJztcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyU2VydmljZSB9IGZyb20gJy4vY29tcG9uZW50LWxvYWRlci5zZXJ2aWNlJztcbmltcG9ydCB7IFdpZGdldFN0YXRlLCBXaWRnZXRPcGVuT3B0aW9ucyB9IGZyb20gJy4uL21vZGVscy9iYXNlLXdpZGdldCc7XG5pbXBvcnQgeyBDb25maWdMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWctbG9hZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFuZWxEb2NrTW9kZSB9IGZyb20gJy4uL21vZGVscy9iYXNlLXBhbmVsJztcbmltcG9ydCB7IFBhbmVsTWFuYWdlclNlcnZpY2UgfSBmcm9tICcuL3BhbmVsLW1hbmFnZXIuc2VydmljZSc7XG5pbXBvcnQgeyBCYXNlV2lkZ2V0Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9iYXNlLXdpZGdldC9iYXNlLXdpZGdldC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXBwR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi4vbW9kZWxzL21vZGVscyc7XG5pbXBvcnQgeyBJQ29tcG9uZW50SW5mbyB9IGZyb20gJy4uL2RlY29yYXRvci9jb21wb25lbnQtcmVnaXN0ZXIuZGVjb3JhdG9yJztcbmltcG9ydCB7IEJhc2VXaWRnZXQgfSBmcm9tICcuLi9jb21wb25lbnRzL2Jhc2Utd2lkZ2V0Jztcbi8qKlxuICogY3JlYXRlIGJ5IHJ1aXIgMTkxMDE0ICB3aWRnZXRNYW5hZ2VyLmpzXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFdpZGdldE1hbmFnZXJTZXJ2aWNlIHtcbiAgbG9hZGVkOiBBcnJheTxDb21wb25lbnRSZWY8QmFzZVdpZGdldENvbXBvbmVudD4+ID0gbnVsbDtcbiAgbWlzc2VkQWN0aW9uczogQXJyYXk8YW55PiA9IG51bGw7XG4gIGFjdGl2ZVdpZGdldDogQ29tcG9uZW50UmVmPEJhc2VXaWRnZXRDb21wb25lbnQ+ID0gbnVsbDtcbiAgbWFwOiBhbnkgPSBudWxsO1xuICB2aWV3OiBhbnkgPSBudWxsO1xuICBhcHBDb25maWc6IGFueSA9IG51bGw7XG4gIGNvbmZpZ0xvYWRlcjogQ29uZmlnTG9hZGVyU2VydmljZTtcbiAgcGFuZWxNYW5hZ2VyOiBQYW5lbE1hbmFnZXJTZXJ2aWNlO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGdsb2JhbFBhcmFtczogQXBwR2xvYmFsQ29uZmlnLFxuICAgIHByaXZhdGUgZXZlbnRTZXJ2aWNlOiBFdmVudEVtaXR0ZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgdXRpbHM6IFV0aWxzU2VydmljZSxcbiAgICBwcml2YXRlIGh0dHBTZXJ2aWNlOiBIdHRwUmVxU2VydmljZSxcbiAgICBwcml2YXRlIGNvbW1vblNlcnZpY2U6IENvbW1vblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb21wb25lbnRMb2FkZXI6IENvbXBvbmVudExvYWRlclNlcnZpY2UpIHtcbiAgICB0aGlzLmxvYWRlZCA9IFtdO1xuICAgIHRoaXMubWlzc2VkQWN0aW9ucyA9IFtdO1xuICAgIHRoaXMuYWN0aXZlV2lkZ2V0ID0gbnVsbDtcbiAgICAvLyB0aGlzLmV2ZW50U2VydmljZS5yc3Mub24odGhpcy5ldmVudFNlcnZpY2UuX21hcExvYWRlZCwgdGhpcy5fb25NYXBMb2FkZWQpO1xuICAgIC8vIHRoaXMuZXZlbnRTZXJ2aWNlLnJzcy5vbih0aGlzLmV2ZW50U2VydmljZS5fbWFwQ2hhbmdlZCwgdGhpcy5fb25NYXBDaGFuZ2VkKTtcbiAgfVxuICAvKipcbiAgICAqIFxuICAgICogQHBhcmFtIG1hcCDkuoznu7TlnLDlm77miJbkuInnu7TlnLrmma9cbiAgICAqL1xuICBzZXRNYXAobWFwKSB7XG4gICAgaWYgKHRoaXMuZ2xvYmFsUGFyYW1zLm1hcENvbmZpZy5pczNEID09PSB0cnVlKSB7XG4gICAgICB0aGlzLnZpZXcgPSBtYXA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWFwID0gbWFwO1xuICAgIH1cbiAgfVxuICBzZXRBcHBDb25maWcoYXBwQ29uZmlnKSB7XG5cbiAgICB0aGlzLmFwcENvbmZpZyA9IGFwcENvbmZpZzsvL2FwcENvbmZpZ+acieS6m+mXrumimFxuICAgIC8vdGhpcy5hcHBDb25maWcgPSBfbGF5b3V0TWFuYWdlci5hcHBDb25maWc7XG5cbiAgfVxuICBfb25NYXBMb2FkZWQobWFwKSB7XG5cbiAgfVxuXG4gIF9vbk1hcENoYW5nZWQobWFwKSB7XG5cbiAgfVxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSBjb21wSW5mb1xuICAgKiBAcGFyYW0gd2lkZ2V0IFxuICAgKi9cbiAgbG9hZENvbmZpZyhjb21wSW5mbzogSUNvbXBvbmVudEluZm8sIHdpZGdldDogQmFzZVdpZGdldCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIC8vdmlldy9tYXAg6LWL5YC877yM5YW25a6ec2V0V2lkZ2V0UG9ycOS5n+S8mui1i+WAvFxuICAgIHdpZGdldC5hcHBDb25maWcgPSB0aGlzLmFwcENvbmZpZztcbiAgICB3aWRnZXQudmlldyA9IHRoaXMudmlldztcbiAgICB3aWRnZXQubWFwID0gdGhpcy5tYXA7XG4gICAgbGV0IGRlZiA9IHRoaXMuY29tbW9uU2VydmljZS5jcmVhdGVQcm9taXNlRGVmZXIoKTtcbiAgICAvL+S7jmFwcENvbmZpZ+S4reafpeaJvue7hOS7tueahOmFjee9ru+8jOafpeaJvuWIsOWQjuebtOaOpei1i+WAvFxuICAgIGxldCBpdGVtID0gdGhpcy5hcHBDb25maWcud2lkZ2V0T25TY3JlZW4ud2lkZ2V0cy5maW5kKGYgPT4gZi51cmkudG9Mb3dlckNhc2UoKSA9PT0gY29tcEluZm8udXJpLnRvTG93ZXJDYXNlKCkpO1xuICAgIGlmIChpdGVtKSB7XG4gICAgICBpZiAoIWl0ZW0uY29uZmlnKSB7XG4gICAgICAgIHRoaXMudHJ5TG9hZFdpZGdldENvbmZpZyhpdGVtKS50aGVuKHdpZGdldEpzb24gPT4ge1xuICAgICAgICAgIHRoaXMuc2V0V2lkZ2V0UG9ycCh3aWRnZXQsIHdpZGdldEpzb24pO1xuICAgICAgICAgIHdpZGdldC5zdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgICB3aWRnZXQuc3RhdGUgPSBXaWRnZXRTdGF0ZS5vcGVuZWQ7XG4gICAgICAgICAgcmV0dXJuIGRlZi5yZXNvbHZlKHRydWUpO1xuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgIHJldHVybiBkZWYucmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy/lpoLmnpzmsqHmnInmn6Xmib7liLDvvIzliJnor7fmsYLphY3nva7mlofku7bvvIzlho3otYvlgLxcbiAgICAgIGNvbnN0IGFjb25maWcgPSB7XG4gICAgICAgIFwid2lkZ2V0T25TY3JlZW5cIjpcbiAgICAgICAge1xuICAgICAgICAgIFwid2lkZ2V0c1wiOiBbe1xuICAgICAgICAgICAgXCJ1cmlcIjogY29tcEluZm8udXJpLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBjb21wSW5mby5uYW1lXG4gICAgICAgICAgfV1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHRoaXMuY29uZmlnTG9hZGVyLl91cGdyYWRlQXBwQ29uZmlnKGFjb25maWcpO1xuICAgICAgdGhpcy5jb25maWdMb2FkZXIuX3Byb2Nlc3NBZnRlclRyeUxvYWQoYWNvbmZpZyk7XG4gICAgICB0aGlzLmNvbmZpZ0xvYWRlci5sb2FkV2lkZ2V0c01hbmlmZXN0KGFjb25maWcpLnRoZW4oYXBwY29uZmlnID0+IHtcbiAgICAgICAgY29uc3Qgd0NvbmZpZyA9IGFwcGNvbmZpZy53aWRnZXRPblNjcmVlbi53aWRnZXRzWzBdO1xuICAgICAgICB0aGlzLnRyeUxvYWRXaWRnZXRDb25maWcod0NvbmZpZykudGhlbih3aWRnZXRKc29uID0+IHtcbiAgICAgICAgICB0aGlzLnNldFdpZGdldFBvcnAod2lkZ2V0LCB3aWRnZXRKc29uKTtcbiAgICAgICAgICB3aWRnZXQuc3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgd2lkZ2V0LnN0YXRlID0gV2lkZ2V0U3RhdGUub3BlbmVkO1xuICAgICAgICAgIHJldHVybiBkZWYucmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICByZXR1cm4gZGVmLnJlc29sdmUodHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBkZWYucHJvbWlzZSgpO1xuICB9XG4gIC8qKlxuICAgKiDmiZPlvIDnu4Tku7ZcbiAgICogQHBhcmFtIG9wdGlvbnMgXG4gICAqL1xuICBvcGVuV2lkZ2V0KG9wdGlvbnM6IFdpZGdldE9wZW5PcHRpb25zKTogUHJvbWlzZTxCYXNlV2lkZ2V0Q29tcG9uZW50PiB7XG4gICAgbGV0IF9vcGVuUGFuZWxPcldpZGdldCA9IChfY29uZmlnKSA9PiB7XG4gICAgICBjb25zdCBfb3B0aW9ucyA9IF8uY2xvbmVEZWVwKG9wdGlvbnMpO1xuICAgICAgbGV0IGluUGFuZWwgPSBfY29uZmlnLmluUGFuZWw7XG4gICAgICAvL+S7heWIm+W7uue7hOS7tuaXtu+8jHBhbmVs5LiN5pi+56S6XG4gICAgICBpZiAob3B0aW9ucy5vbmx5Q3JlYXRlV2lkZ2V0ID09PSB0cnVlKSB7IGluUGFuZWwgPSBmYWxzZTsgfVxuXG4gICAgICBpZiAoaW5QYW5lbCAhPT0gZmFsc2UpIHtcbiAgICAgICAgLy/miZPlvIBwYW5lbFxuICAgICAgICB0aGlzLnBhbmVsTWFuYWdlci5zaG93UGFuZWwoX2NvbmZpZywgbnVsbCwgb3B0aW9ucy5wYW5lbCwgX29wdGlvbnMpLnRoZW4oKHBhbmVsKSA9PiB7XG4gICAgICAgICAgaWYgKHBhbmVsLmluc3RhbmNlLmlzRG9ja2FibGUoKSkge1xuICAgICAgICAgICAgdGhpcy5wYW5lbE1hbmFnZXIub25NYXBSZXNpemUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGVmLnJlc29sdmUocGFuZWwpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8v5omT5byA57uE5Lu2XG4gICAgICAgIHRoaXMubG9hZFdpZGdldChfY29uZmlnLCBfb3B0aW9ucykudGhlbigoY29tcFJlZikgPT4ge1xuICAgICAgICAgIGlmIChvcHRpb25zLm9ubHlDcmVhdGVXaWRnZXQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGRlZi5yZXNvbHZlKGNvbXBSZWYpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1dpZGdldChjb21wUmVmKTtcbiAgICAgICAgICAgIGNvbXBSZWYuaW5zdGFuY2Uuc2V0UG9zaXRpb24oX2NvbmZpZy5wb3NpdGlvbik7XG4gICAgICAgICAgICB0aGlzLmNvbW1vblNlcnZpY2Uuc2V0V2lkZ2V0UG9zaXRpb24oY29tcFJlZiwgX2NvbmZpZy5wb3NpdGlvbik7XG4gICAgICAgICAgICBfY29uZmlnLmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICBjb21wUmVmLmluc3RhbmNlLmNvbmZpZ0lkID0gX2NvbmZpZy5pZDtcbiAgICAgICAgICAgIGRlZi5yZXNvbHZlKGNvbXBSZWYuaW5zdGFuY2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4gZGVmLnJlamVjdChlcnIpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IGRlZiA9IHRoaXMuY29tbW9uU2VydmljZS5jcmVhdGVQcm9taXNlRGVmZXIoKTtcbiAgICBpZiAoIW9wdGlvbnMudXJpKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwibm8gdXJpXCIpO1xuICAgICAgZGVmLnJlamVjdChuZXcgRXJyb3IoXCJubyB1cmlcIikpO1xuICAgICAgcmV0dXJuIGRlZi5wcm9taXNlKCk7XG4gICAgfVxuICAgIC8v5p+l5om+YXBwQ29uZmln77yM5piv5ZCm5pyJ6YWN572uXG4gICAgbGV0IGl0ZW0gPSB0aGlzLmFwcENvbmZpZy53aWRnZXRPblNjcmVlbi53aWRnZXRzLmZpbmQoZiA9PiBmLnVyaS50b0xvd2VyQ2FzZSgpID09PSBvcHRpb25zLnVyaS50b0xvd2VyQ2FzZSgpKTtcbiAgICBpZiAoaXRlbSkge1xuICAgICAgLy/mnInphY3nva5cbiAgICAgIF9vcGVuUGFuZWxPcldpZGdldChpdGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy/msqHmnInphY3nva5cbiAgICAgIGlmICghb3B0aW9ucy5wb3NpdGlvbikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwibm8gcG9zaXRpb25cIik7XG4gICAgICAgIGRlZi5yZWplY3QobmV3IEVycm9yKFwibm8gcG9zaXRpb25cIikpO1xuICAgICAgICByZXR1cm4gZGVmLnByb21pc2UoKTtcbiAgICAgIH1cbiAgICAgIC8v5pyJcG9zaXRpb24g5a6M5ZaE5bGe5oCnXG4gICAgICBsZXQgX2NvbmZpZyA9IHtcbiAgICAgICAgXCJsYWJlbFwiOiBcIlwiLFxuICAgICAgICBcInVyaVwiOiBvcHRpb25zLnVyaSxcbiAgICAgICAgXCJwb3NpdGlvblwiOiB7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBfY29uZmlnLnBvc2l0aW9uID0gXy5tZXJnZShfY29uZmlnLnBvc2l0aW9uLCBvcHRpb25zLnBvc2l0aW9uKTtcbiAgICAgIGlmIChvcHRpb25zLnBhbmVsKSB7XG4gICAgICAgIF9jb25maWcubGFiZWwgPSBvcHRpb25zLnBhbmVsLnRpdGxlO1xuICAgICAgICBpZiAob3B0aW9ucy5wYW5lbC5kb2NrU2lkZSkge1xuICAgICAgICAgIHN3aXRjaCAob3B0aW9ucy5wYW5lbC5kb2NrU2lkZSkge1xuICAgICAgICAgICAgY2FzZSBQYW5lbERvY2tNb2RlLmxlZnQ6XG4gICAgICAgICAgICAgIF9jb25maWdbXCJwYW5lbFwiXSA9IHtcbiAgICAgICAgICAgICAgICB1cmk6IFwiZXBzZ2lzLWRvY2thYmxlLXBhbmVsLWF0LWxlZnRcIlxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgUGFuZWxEb2NrTW9kZS5ib3R0b206XG4gICAgICAgICAgICAgIF9jb25maWdbXCJwYW5lbFwiXSA9IHtcbiAgICAgICAgICAgICAgICB1cmk6IFwiZXBzZ2lzLWRvY2thYmxlLXBhbmVsLWF0LWJvdHRvbVwiXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBQYW5lbERvY2tNb2RlLnJpZ2h0OlxuICAgICAgICAgICAgICBfY29uZmlnW1wicGFuZWxcIl0gPSB7XG4gICAgICAgICAgICAgICAgdXJpOiBcImVwc2dpcy1kb2NrYWJsZS1wYW5lbC1hdC1yaWdodFwiXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIV9jb25maWcubGFiZWwpIHtcbiAgICAgICAgX2NvbmZpZy5sYWJlbCA9IF9jb25maWcudXJpO1xuICAgICAgfVxuICAgICAgbGV0IF9hcHBDb25maWcgPSB7XG4gICAgICAgIFwid2lkZ2V0T25TY3JlZW5cIjoge1xuICAgICAgICAgIFwid2lkZ2V0c1wiOiBbXG4gICAgICAgICAgICBfY29uZmlnXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgdGhpcy5jb25maWdMb2FkZXIuX3Byb2Nlc3NBZnRlclRyeUxvYWQoX2FwcENvbmZpZyk7XG4gICAgICB0aGlzLmNvbmZpZ0xvYWRlci5sb2FkV2lkZ2V0c01hbmlmZXN0KF9hcHBDb25maWcpLnRoZW4oKGNmZykgPT4ge1xuICAgICAgICBjb25zdCBfd2lkZ2V0Q29uZmlnID0gY2ZnLndpZGdldE9uU2NyZWVuLndpZGdldHNbMF07XG4gICAgICAgIHRoaXMuYXBwQ29uZmlnLndpZGdldE9uU2NyZWVuLndpZGdldHMucHVzaChfd2lkZ2V0Q29uZmlnKTtcbiAgICAgICAgLy/liqDovb3nu4Tku7ZcbiAgICAgICAgX29wZW5QYW5lbE9yV2lkZ2V0KF93aWRnZXRDb25maWcpO1xuICAgICAgfSkuY2F0Y2goZXJyID0+IGRlZi5yZWplY3QoZXJyKSk7XG5cbiAgICB9XG4gICAgcmV0dXJuIGRlZi5wcm9taXNlKCk7XG4gIH1cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0gc2V0dGluZyBcbiAgICovXG4gIGxvYWRXaWRnZXQoc2V0dGluZywgb3Blbk9wdGlvbnM/OiBXaWRnZXRPcGVuT3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgLy9zZXR0aW5nIOiHs+WwkeimgeWMheWQq2lk5ZKMdXJp77yI57uE5Lu25Zyw5Z2A77yJXG4gICAgbGV0IGRlZiA9IHRoaXMuY29tbW9uU2VydmljZS5jcmVhdGVQcm9taXNlRGVmZXIoKTtcblxuICAgIGxldCBmaW5kV2lkZ2V0O1xuICAgIHNldHRpbmcgPSBfLmNsb25lKHNldHRpbmcpO1xuICAgIGlmICghc2V0dGluZy5mb2xkZXJVcmwpIHtcbiAgICAgIHRoaXMudXRpbHMucHJvY2Vzc1dpZGdldFNldHRpbmcoc2V0dGluZyk7XG4gICAgfVxuICAgIGZpbmRXaWRnZXQgPSB0aGlzLmdldFdpZGdldEJ5SWQoc2V0dGluZy5pZCk7XG4gICAgaWYgKGZpbmRXaWRnZXQpIHtcbiAgICAgIGlmIChvcGVuT3B0aW9ucykge1xuICAgICAgICBmaW5kV2lkZ2V0Lmluc3RhbmNlLnJlcVBhcmEgPSBvcGVuT3B0aW9ucy5wYXJhbTtcbiAgICAgIH1cbiAgICAgIGRlZi5yZXNvbHZlKGZpbmRXaWRnZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWYucmVzb2x2ZSh0aGlzLmNyZWF0ZVdpZGdldChzZXR0aW5nLCBvcGVuT3B0aW9ucykpO1xuICAgIH1cbiAgICByZXR1cm4gZGVmLnByb21pc2UoKTtcbiAgfVxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSB3aWRnZXQgXG4gICAqIEBwYXJhbSBzZXR0aW5nIFxuICAgKi9cbiAgcHJpdmF0ZSBzZXRXaWRnZXRQb3JwKHdpZGdldDogQmFzZVdpZGdldCwgc2V0dGluZykge1xuICAgIHNldHRpbmcucmF3Q29uZmlnID0gXy5jbG9uZURlZXAoc2V0dGluZyk7XG4gICAgc2V0dGluZ1snY2xhc3MnXSA9ICdqaW11LXdpZGdldCc7XG4gICAgaWYgKCFzZXR0aW5nLmxhYmVsKSB7XG4gICAgICBzZXR0aW5nLmxhYmVsID0gc2V0dGluZy5uYW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5nbG9iYWxQYXJhbXMubWFwQ29uZmlnLmlzM0QpIHtcbiAgICAgIGlmICh0aGlzLnZpZXcpIHtcbiAgICAgICAgc2V0dGluZy52aWV3ID0gdGhpcy52aWV3O1xuICAgICAgICB3aWRnZXQudmlldyA9IHRoaXMudmlldztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMubWFwKSB7XG4gICAgICAgIHNldHRpbmcubWFwID0gdGhpcy5tYXA7XG4gICAgICAgIHdpZGdldC5tYXAgPSB0aGlzLm1hcDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB3aWRnZXQuYXBwQ29uZmlnID0gdGhpcy5hcHBDb25maWc7XG4gICAgd2lkZ2V0LndpZGdldENvbmZpZyA9IHNldHRpbmc7XG4gICAgd2lkZ2V0LmNvbmZpZyA9IHNldHRpbmcuY29uZmlnO1xuICAgIHdpZGdldC5jb25maWdJZCA9IHdpZGdldC5pZCA9IHNldHRpbmcuaWQ7XG4gICAgd2lkZ2V0LmZvbGRlclVybCA9IHNldHRpbmcuZm9sZGVyVXJsO1xuICAgIHdpZGdldC5pY29uID0gc2V0dGluZy5pY29uO1xuICAgIHdpZGdldC5sYWJlbCA9IHdpZGdldC50aXRsZSA9IHdpZGdldC50b29sdGlwID0gc2V0dGluZy5sYWJlbDtcbiAgICB3aWRnZXRbXCJiYXNlQ2xhc3NcIl0gPSBzZXR0aW5nLmNsYXNzO1xuICAgIHdpZGdldC5naWQgPSBzZXR0aW5nLmdpZDtcbiAgICB3aWRnZXQudXJpID0gc2V0dGluZy51cmk7XG4gICAgd2lkZ2V0Lm9wZW5BdFN0YXJ0ID0gc2V0dGluZy5vcGVuQXRTdGFydCA9PT0gdHJ1ZTtcbiAgICBpZiAoc2V0dGluZy5tYW5pZmVzdFxuICAgICAgJiYgc2V0dGluZy5tYW5pZmVzdC5wcm9wZXJ0aWVzXG4gICAgICAmJiBzZXR0aW5nLm1hbmlmZXN0LnByb3BlcnRpZXMuaW5QYW5lbCA9PT0gZmFsc2UpIHtcbiAgICAgIHdpZGdldC5pblBhbmVsID0gc2V0dGluZy5pblBhbmVsID0gc2V0dGluZy5tYW5pZmVzdC5wcm9wZXJ0aWVzLmluUGFuZWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpZGdldC5pblBhbmVsID0gc2V0dGluZy5pblBhbmVsID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIOWIm+W7uue7hOS7tlxuICAgKiBAcGFyYW0gc2V0dGluZyBcbiAgICogQHBhcmFtIGNsYXp6IFxuICAgKiBAcGFyYW0gcmVzb3VjZXMgXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIGNyZWF0ZVdpZGdldChzZXR0aW5nOiBhbnksIG9wZW5PcHRpb25zPzogV2lkZ2V0T3Blbk9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IGRlZiA9IHRoaXMuY29tbW9uU2VydmljZS5jcmVhdGVQcm9taXNlRGVmZXIoKTtcbiAgICBsZXQgd2lkZ2V0O1xuICAgIGxldCBfd2lkZ2V0ID0gdGhpcy5nZXRXaWRnZXRCeUlkKHNldHRpbmcuaWQpO1xuICAgIGlmIChfd2lkZ2V0KSB7XG4gICAgICBkZWYucmVzb2x2ZShfd2lkZ2V0KTtcbiAgICAgIHJldHVybiBkZWYucHJvbWlzZSgpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgbGV0IGNvbXAgPSB0aGlzLmNvbXBvbmVudExvYWRlci5maW5kQ29tcG9uZW50KHNldHRpbmcudXJpKSwgY29tcFJlZiA9IG51bGwsIGluTWFwID0gZmFsc2U7XG4gICAgICBpZiAoIWNvbXApIHtcbiAgICAgICAgY29uc3QgX21zZyA9ICd3aWRnZXQgWycgKyBzZXR0aW5nLnVyaSArICddIG5vdCBmaW5kJztcbiAgICAgICAgY29uc29sZS5sb2coX21zZyk7XG4gICAgICAgIGRlZi5yZWplY3QobmV3IEVycm9yKF9tc2cpKTtcbiAgICAgICAgcmV0dXJuIGRlZi5wcm9taXNlKCk7XG4gICAgICB9XG4gICAgICBpZiAoc2V0dGluZy5wb3NpdGlvbi5yZWxhdGl2ZVRvICE9PSBcIm1hcFwiKSB7XG4gICAgICAgIGNvbXBSZWYgPSB0aGlzLmNvbXBvbmVudExvYWRlci5jcmVhdGVDb21wb25lbnRUb0hvbWUoY29tcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb21wUmVmID0gdGhpcy5jb21wb25lbnRMb2FkZXIuY3JlYXRlQ29tcG9uZW50VG9NYXAoY29tcCk7XG4gICAgICAgIGluTWFwID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmICghY29tcFJlZikge1xuICAgICAgICBjb25zdCBfbXNnID0gYHdpZGdldCBbJHtzZXR0aW5nLmxhYmVsfV0gY3JlYXRlIGZhaWxgO1xuICAgICAgICBjb25zb2xlLmxvZyhfbXNnKTtcbiAgICAgICAgZGVmLnJlamVjdChuZXcgRXJyb3IoX21zZykpO1xuICAgICAgICByZXR1cm4gZGVmLnByb21pc2UoKTtcbiAgICAgIH1cbiAgICAgIHdpZGdldCA9IGNvbXBSZWYuaW5zdGFuY2U7XG4gICAgICAvL2NvbXBSZWYuY29tcG9uZW50VHlwZS5nZXRDb21wSW5mbygpIOiOt+WPlue7hOS7tuS/oeaBr1xuXG4gICAgICBpZiAob3Blbk9wdGlvbnMpIHtcbiAgICAgICAgd2lkZ2V0LnJlcVBhcmEgPSBvcGVuT3B0aW9ucy5wYXJhbTtcbiAgICAgIH1cbiAgICAgIC8v6I635Y+W57uE5Lu255qEY29uZmlnLmpzb24g5oiWIG1hbmlmZXN0Lmpzb25cbiAgICAgIGlmICghc2V0dGluZy5jb25maWcpIHtcbiAgICAgICAgYXdhaXQgdGhpcy50cnlMb2FkV2lkZ2V0Q29uZmlnKHNldHRpbmcpO1xuICAgICAgfVxuICAgICAgaWYgKCFzZXR0aW5nLm1hbmlmZXN0KSB7XG4gICAgICAgIGF3YWl0IHRoaXMubG9hZFdpZGdldE1hbmlmZXN0KHNldHRpbmcpO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRXaWRnZXRQb3JwKHdpZGdldCwgc2V0dGluZyk7XG4gICAgICB0aGlzLmxvYWRlZC5wdXNoKGNvbXBSZWYpO1xuICAgICAgY29uc29sZS5sb2coJ3dpZGdldCBbJyArIHNldHRpbmcudXJpICsgJ10gY3JlYXRlZC4nKTtcbiAgICAgIHRoaXMuZXZlbnRTZXJ2aWNlLnJzcy5lbWl0KHRoaXMuZXZlbnRTZXJ2aWNlLl93aWRnZXRDcmVhdGVkLCB3aWRnZXQpO1xuICAgICAgZGVmLnJlc29sdmUoY29tcFJlZik7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZygnY3JlYXRlIFsnICsgc2V0dGluZy51cmkgKyAnXSBlcnJvcjonICsgZXJyLnN0YWNrKTtcbiAgICAgIGRlZi5yZWplY3QoZXJyKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlZi5wcm9taXNlKCk7XG4gIH1cbiAgLyoqXG4gICAqIOiOt+WPluaJgOacieW3sue7j+WKoOi9veeahOe7hOS7tlxuICAgKi9cbiAgZ2V0QWxsV2lkZ2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5sb2FkZWQ7XG4gIH1cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0gc2V0dGluZyBcbiAgICovXG4gIGxvYWRXaWRnZXRDbGFzcyhzZXR0aW5nOiBhbnkpIHtcbiAgICAvL+W+heW8gOWPkVxuICAgIHJldHVybiB0aGlzLmNvbW1vblNlcnZpY2UuY3JlYXRlUHJvbWlzZURlZmVyKCkucHJvbWlzZSgpO1xuICB9XG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIHNldHRpbmcgXG4gICAqL1xuICBsb2FkV2lkZ2V0UmVzb3VyY2VzKHNldHRpbmcpIHtcbiAgICAvL+W+heW8gOWPkVxuICAgIHJldHVybiB0aGlzLmNvbW1vblNlcnZpY2UuY3JlYXRlUHJvbWlzZURlZmVyKCkucHJvbWlzZSgpO1xuICB9XG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIHdpZGdldEpzb24gXG4gICAqL1xuICB0cnlMb2FkV2lkZ2V0Q29uZmlnKHdpZGdldEpzb24pIHtcbiAgICB2YXIgZGVmID0gdGhpcy5jb21tb25TZXJ2aWNlLmNyZWF0ZVByb21pc2VEZWZlcigpO1xuICAgIC8vIG1vZGlmeSBieSBzeSAyMDIwLzYvMjIg5aKe5Yqg5a+5Y29uZmlnUGF0aOeahOaUr+aMgVxuICAgIGxldCBjb25maWdQYXRoID0gd2lkZ2V0SnNvbi5jb25maWdQYXRoIHx8ICdjb25maWcuanNvbic7XG4gICAgdmFyIHVybCA9IHdpZGdldEpzb24uZm9sZGVyVXJsICsgY29uZmlnUGF0aDtcbiAgICB2YXIgZm9sZHJVcmwgPSB3aWRnZXRKc29uLmZvbGRlclVybC5zcGxpdCgnPycpO1xuICAgIGlmIChmb2xkclVybC5sZW5ndGggPiAwKSB7XG4gICAgICB1cmwgPSBmb2xkclVybFswXSArIGNvbmZpZ1BhdGggKyAnPycgKyAoZm9sZHJVcmxbMV0gPyBmb2xkclVybFsxXSA6ICcnKTtcbiAgICB9XG5cbiAgICBpZiAod2lkZ2V0SnNvbi5jb25maWcpIHtcbiAgICAgIGRlZi5yZXNvbHZlKHdpZGdldEpzb24pO1xuICAgICAgcmV0dXJuIGRlZi5wcm9taXNlKCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICB0aGlzLmh0dHBTZXJ2aWNlLmdldEpzb25GaWxlKHVybCkudGhlbigoY29uZmlnKSA9PiB7XG4gICAgICAgIHdpZGdldEpzb24uY29uZmlnID0gY29uZmlnO1xuICAgICAgICBkZWYucmVzb2x2ZSh3aWRnZXRKc29uKTtcbiAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYGxvYWQgWyR7d2lkZ2V0SnNvbi51cml9XSBjb25maWcuanNvbiBlcnJvcmApO1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIGRlZi5yZXNvbHZlKHdpZGdldEpzb24pO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgZGVmLnJlc29sdmUod2lkZ2V0SnNvbik7XG4gICAgfVxuICAgIHJldHVybiBkZWYucHJvbWlzZSgpO1xuICB9XG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIHNldHRpbmcgXG4gICAqL1xuICBfdHJ5TG9hZFdpZGdldENvbmZpZyhzZXR0aW5nKSB7XG5cbiAgfVxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSB3aWRnZXRKc29uIFxuICAgKi9cbiAgbG9hZFdpZGdldE1hbmlmZXN0KHdpZGdldEpzb246IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgbGV0IGRlZiA9IHRoaXMuY29tbW9uU2VydmljZS5jcmVhdGVQcm9taXNlRGVmZXIoKTtcbiAgICB2YXIgdXJsID0gd2lkZ2V0SnNvbi5mb2xkZXJVcmwgKyAnbWFuaWZlc3QuanNvbic7XG4gICAgdmFyIGZvbGRyVXJsID0gd2lkZ2V0SnNvbi5mb2xkZXJVcmwuc3BsaXQoJz8nKTtcbiAgICBpZiAoZm9sZHJVcmwubGVuZ3RoID4gMCkge1xuICAgICAgdXJsID0gZm9sZHJVcmxbMF0gKyAnbWFuaWZlc3QuanNvbj8nICsgKGZvbGRyVXJsWzFdID8gZm9sZHJVcmxbMV0gOiAnJyk7XG4gICAgfVxuXG4gICAgaWYgKHdpZGdldEpzb24ubWFuaWZlc3QpIHtcbiAgICAgIGRlZi5yZXNvbHZlKHdpZGdldEpzb24pO1xuICAgICAgcmV0dXJuIGRlZi5wcm9taXNlKCk7XG4gICAgfVxuICAgIC8vIGlmIChqaW11Q29uZmlnLmlzRGVzaWduTW9kZSA9PT0gdHJ1ZSkge1xuICAgIC8vICAgICB1cmw9YXBwSW5mby5wYXRoK3VybDtcbiAgICAvLyB9XG4gICAgbGV0IHByb2Nlc3MgPSAobWFuaWZlc3QpID0+IHtcbiAgICAgIG1hbmlmZXN0LmFtZEZvbGRlciA9IHdpZGdldEpzb24uYW1kRm9sZGVyO1xuICAgICAgbWFuaWZlc3QuY2F0ZWdvcnkgPSAnd2lkZ2V0JztcbiAgICAgIGxldCBfdyA9IFwiYXV0b1wiLCBfaCA9IFwiYXV0b1wiO1xuICAgICAgaWYgKG1hbmlmZXN0LnByb3BlcnRpZXMuaW5QYW5lbCAhPT0gZmFsc2UpIHtcbiAgICAgICAgLy93aWRnZXRcbiAgICAgICAgX3cgPSBcIjMwMFwiO1xuICAgICAgICBfaCA9IFwiNDAwXCI7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHdpZGdldEpzb24ucG9zaXRpb24ud2lkdGggPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgd2lkZ2V0SnNvbi5wb3NpdGlvbi53aWR0aCA9IF93O1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiB3aWRnZXRKc29uLnBvc2l0aW9uLmhlaWdodCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICB3aWRnZXRKc29uLnBvc2l0aW9uLmhlaWdodCA9IF9oO1xuICAgICAgfVxuICAgICAgaWYgKCF3aWRnZXRKc29uLmxhYmVsKSB7XG4gICAgICAgIHRoaXMudXRpbHMuYWRkSTE4TkxhYmVsKG1hbmlmZXN0KS50aGVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLl9wcm9jZXNzTWFuaWZlc3QobWFuaWZlc3QpO1xuICAgICAgICAgIHRoaXMudXRpbHMuYWRkTWFuaWZlc3QyV2lkZ2V0SnNvbih3aWRnZXRKc29uLCBtYW5pZmVzdCk7XG4gICAgICAgICAgZGVmLnJlc29sdmUod2lkZ2V0SnNvbik7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcHJvY2Vzc01hbmlmZXN0KG1hbmlmZXN0KTtcbiAgICAgICAgdGhpcy51dGlscy5hZGRNYW5pZmVzdDJXaWRnZXRKc29uKHdpZGdldEpzb24sIG1hbmlmZXN0KTtcbiAgICAgICAgZGVmLnJlc29sdmUod2lkZ2V0SnNvbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5odHRwU2VydmljZS5nZXRKc29uRmlsZSh1cmwpLnRoZW4ocHJvY2VzcykuY2F0Y2goKGVycikgPT4ge1xuICAgICAgaWYgKGVyci5yZWFkeVN0YXRlID09PSA0ICYmIGVyci5zdGF0dXMgPT09IDIwMCAmJiBlcnIucmVzcG9uc2VUZXh0ID09PSBcIlwiKSB7XG4gICAgICAgIC8v5pyJ5paH5Lu277yM5YaF5a655Li656m6XG4gICAgICAgIHZhciBtYW5pZmVzdDogYW55ID0ge307XG4gICAgICAgIG1hbmlmZXN0LmFtZEZvbGRlciA9IHdpZGdldEpzb24uYW1kRm9sZGVyO1xuICAgICAgICBtYW5pZmVzdC5jYXRlZ29yeSA9ICd3aWRnZXQnO1xuICAgICAgICBwcm9jZXNzKG1hbmlmZXN0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYGxvYWQgWyR7d2lkZ2V0SnNvbi51cml9XSBjb25maWcuanNvbiBlcnJvcmApO1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIGRlZi5yZXNvbHZlKHdpZGdldEpzb24pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBkZWYucHJvbWlzZSgpO1xuICB9XG4gIC8qKlxuICAgKiDliqDovb13aWRnZXTnmoTphY3nva7pobXpnaJcbiAgICogQHBhcmFtICBzZXR0aW5nIFxuICAgKi9cbiAgbG9hZFdpZGdldFNldHRpbmdQYWdlKHNldHRpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IGRlZiA9IHRoaXMuY29tbW9uU2VydmljZS5jcmVhdGVQcm9taXNlRGVmZXIoKTtcbiAgICAvL+W+heW8gOWPkVxuICAgIHJldHVybiBkZWYucHJvbWlzZSgpO1xuICB9XG4gIC8qKlxuICAgKiDliqDovb1zZXR0aW5n57G7XG4gICAqIEBwYXJhbSAgc2V0dGluZyBcbiAgICovXG4gIGxvYWRXaWRnZXRTZXR0aW5nQ2xhc3Moc2V0dGluZykge1xuICAgIHZhciBkZWYgPSB0aGlzLmNvbW1vblNlcnZpY2UuY3JlYXRlUHJvbWlzZURlZmVyKCk7XG4gICAgcmV0dXJuIGRlZi5wcm9taXNlKCk7XG4gIH1cbiAgLyoqXG4gICAqIOWKoOi9vXNldHRpbmfpnIDopoHnmoTotYTmupBcbiAgICogQHBhcmFtICBzZXR0aW5nIFxuICAgKi9cbiAgbG9hZFdpZGdldFNldHRpbmdQYWdlUmVzb3VyY2VzKHNldHRpbmcpIHtcbiAgICB2YXIgZGVmID0gdGhpcy5jb21tb25TZXJ2aWNlLmNyZWF0ZVByb21pc2VEZWZlcigpO1xuICAgIC8v5b6F5byA5Y+RXG4gICAgcmV0dXJuIGRlZi5wcm9taXNlKCk7XG5cbiAgfVxuICAvKipcbiAgICog5Yib5bu6c2V0dGluZ1xuICAgKiBAcGFyYW0gIHNldHRpbmcgXG4gICAqIEBwYXJhbSAgY2xhenogXG4gICAqL1xuICBjcmVhdGVXaWRnZXRTZXR0aW5nKHNldHRpbmcsIGNsYXp6KSB7XG4gICAgLy/lvoXlvIDlj5FcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBfaGlkZUxvYWRpbmcoKSB7XG5cbiAgfVxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSBpZCBcbiAgICovXG4gIGdldFdpZGdldEJ5SWQoaWQpIHtcbiAgICB2YXIgcmV0O1xuICAgIF8uc29tZSh0aGlzLmxvYWRlZCwgKHcpID0+IHtcbiAgICAgIGlmICh3Lmluc3RhbmNlLmlkID09PSBpZCkge1xuICAgICAgICByZXQgPSB3O1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIGxhYmVsIFxuICAgKi9cbiAgZ2V0V2lkZ2V0QnlMYWJlbChsYWJlbCkge1xuICAgIHZhciByZXQ7XG4gICAgXy5zb21lKHRoaXMubG9hZGVkLCAodykgPT4ge1xuICAgICAgaWYgKHcuaW5zdGFuY2UubGFiZWwgPT09IGxhYmVsKSB7XG4gICAgICAgIHJldCA9IHc7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXQ7XG4gIH1cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0gbmFtZSBcbiAgICovXG4gIGdldFdpZGdldHNCeU5hbWUobmFtZSkge1xuICAgIHZhciByZXQgPSBbXTtcbiAgICBfLnNvbWUodGhpcy5sb2FkZWQsICh3KSA9PiB7XG4gICAgICBpZiAody5pbnN0YW5jZS5uYW1lID09PSBuYW1lKSB7XG4gICAgICAgIHJldC5wdXNoKHcpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXQ7XG4gIH1cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0gZ3JvdXBJZCBcbiAgICovXG4gIGdldE9wZW5lZFdpZGdldEJ5R3JvdXBJZChncm91cElkKSB7XG4gICAgcmV0dXJuIF8uZmluZCh0aGlzLmxvYWRlZCwgKHcpID0+IHtcbiAgICAgIHJldHVybiB3Lmluc3RhbmNlLmdpZCA9PT0gZ3JvdXBJZCAmJiAody5pbnN0YW5jZS5zdGF0ZSA9PT0gV2lkZ2V0U3RhdGUub3BlbmVkIHx8IHcuaW5zdGFuY2Uuc3RhdGUgPT09IFdpZGdldFN0YXRlLmFjdGl2ZSk7XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0gY29tcFJlZiAgbmcg57uE5Lu2XG4gICAqL1xuICBzaG93V2lkZ2V0KGNvbXBSZWY6IENvbXBvbmVudFJlZjxCYXNlV2lkZ2V0Q29tcG9uZW50Pikge1xuICAgIGlmICghY29tcFJlZikgcmV0dXJuO1xuICAgIGxldCB3aWRnZXQgPSBjb21wUmVmLmluc3RhbmNlO1xuICAgIGlmICh0eXBlb2Ygd2lkZ2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgd2lkZ2V0ID0gdGhpcy5nZXRXaWRnZXRCeUlkKHdpZGdldCk7XG4gICAgICBpZiAoIXdpZGdldCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghd2lkZ2V0LnN0YXJ0ZWQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHdpZGdldC5zdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKHdpZGdldC53aWRnZXRDb25maWcucG9zaXRpb24ucmVsYXRpdmVUbyA9PT0gXCJicm93c2VyXCIpIHtcbiAgICAgICAgICB0aGlzLmNvbXBvbmVudExvYWRlci5zaG93SW5Ib21lKGNvbXBSZWYpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY29tcG9uZW50TG9hZGVyLnNob3dJbk1hcChjb21wUmVmKTtcbiAgICAgICAgfVxuICAgICAgICB3aWRnZXQuc3RhcnR1cCgpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2ZhaWwgdG8gc3RhcnR1cCB3aWRnZXQgJyArIHdpZGdldC5uYW1lICsgJy4gJyArIGVyci5zdGFjayk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh3aWRnZXQuc3RhdGUgPT09IFdpZGdldFN0YXRlLmNsb3NlZCkge1xuICAgICAgd2lkZ2V0LnNldFN0YXRlKFdpZGdldFN0YXRlLm9wZW5lZCk7XG4gICAgICB0cnkge1xuICAgICAgICB3aWRnZXQub25PcGVuKCk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignZmFpbCB0byBvcGVuIHdpZGdldCAnICsgd2lkZ2V0Lm5hbWUgKyAnLiAnICsgZXJyLnN0YWNrKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0gd2lkZ2V0IFxuICAgKi9cbiAgY2xvc2VPdGhlcldpZGdldHNJblRoZVNhbWVHcm91cCh3aWRnZXQ6IENvbXBvbmVudFJlZjxCYXNlV2lkZ2V0Q29tcG9uZW50Pikge1xuICAgIGlmICh0eXBlb2Ygd2lkZ2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgd2lkZ2V0ID0gdGhpcy5nZXRXaWRnZXRCeUlkKHdpZGdldCk7XG4gICAgICBpZiAoIXdpZGdldCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIHZhciB3aWRnZXRzID0gdGhpcy5nZXRBbGxXaWRnZXRzKCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB3aWRnZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAod2lkZ2V0c1tpXS5pbnN0YW5jZS5naWQgPT09IHdpZGdldC5pbnN0YW5jZS5naWQgJiYgd2lkZ2V0c1tpXS5pbnN0YW5jZS5pZCAhPT0gd2lkZ2V0Lmluc3RhbmNlLmlkKSB7XG4gICAgICAgIHRoaXMuY2xvc2VXaWRnZXQod2lkZ2V0c1tpXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIGdyb3VwSWQgXG4gICAqL1xuICBjbG9zZUFsbFdpZGdldHNJbkdyb3VwKGdyb3VwSWQpIHtcbiAgICB2YXIgd2lkZ2V0cyA9IHRoaXMuZ2V0QWxsV2lkZ2V0cygpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgd2lkZ2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHdpZGdldHNbaV0uaW5zdGFuY2UuZ2lkID09PSBncm91cElkKSB7XG4gICAgICAgIHRoaXMuY2xvc2VXaWRnZXQod2lkZ2V0c1tpXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIHdpZGdldCBcbiAgICovXG4gIGNsb3NlV2lkZ2V0KHdpZGdldDogQ29tcG9uZW50UmVmPEJhc2VXaWRnZXRDb21wb25lbnQ+IHwgc3RyaW5nKSB7XG4gICAgbGV0IGRlZiA9IHRoaXMuY29tbW9uU2VydmljZS5jcmVhdGVQcm9taXNlRGVmZXIoKTtcbiAgICBsZXQgX3dpZGdldDogQ29tcG9uZW50UmVmPEJhc2VXaWRnZXRDb21wb25lbnQ+O1xuICAgIGlmICh0eXBlb2Ygd2lkZ2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgX3dpZGdldCA9IHRoaXMuZ2V0V2lkZ2V0QnlJZCh3aWRnZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBfd2lkZ2V0ID0gd2lkZ2V0O1xuICAgIH1cbiAgICBpZiAoIV93aWRnZXQpIHtcbiAgICAgIGRlZi5yZWplY3QobmV3IEVycm9yKFwid2lkZ2V0IGlzIG51bGxcIikpO1xuICAgICAgcmV0dXJuIGRlZi5wcm9taXNlKCk7XG4gICAgfVxuICAgIGlmIChfd2lkZ2V0Lmluc3RhbmNlLnN0YXRlICE9PSBXaWRnZXRTdGF0ZS5jbG9zZWQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZVdpZGdldCAmJiB0aGlzLmFjdGl2ZVdpZGdldC5pbnN0YW5jZS5pZCA9PT0gX3dpZGdldC5pbnN0YW5jZS5pZCkge1xuICAgICAgICAgIHRoaXMuYWN0aXZlV2lkZ2V0Lmluc3RhbmNlLm9uRGVBY3RpdmUoKTtcbiAgICAgICAgICB0aGlzLmFjdGl2ZVdpZGdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21tb25TZXJ2aWNlLmdldENvbXBvbmVudFJvb3ROb2RlKF93aWRnZXQpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIF93aWRnZXQuaW5zdGFuY2Uuc2V0U3RhdGUoV2lkZ2V0U3RhdGUuY2xvc2VkKTtcblxuICAgICAgICBfd2lkZ2V0Lmluc3RhbmNlLm9uQ2xvc2UoKTtcbiAgICAgICAgZGVmLnJlc29sdmUoX3dpZGdldCk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coY29uc29sZS5lcnJvcignZmFpbCB0byBjbG9zZSB3aWRnZXQgJyArIF93aWRnZXQuaW5zdGFuY2UubmFtZSArICcuICcgKyBlcnIuc3RhY2spKTtcbiAgICAgICAgZGVmLnJlamVjdChlcnIpO1xuICAgICAgfVxuXG4gICAgfVxuICAgIHJldHVybiBkZWYucHJvbWlzZSgpO1xuICB9XG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIHdpZGdldCBcbiAgICovXG4gIGRlc3Ryb3lXaWRnZXQod2lkZ2V0OiBDb21wb25lbnRSZWY8QmFzZVdpZGdldENvbXBvbmVudD4pIHtcbiAgICB2YXIgbTtcbiAgICBpZiAodHlwZW9mIHdpZGdldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG0gPSB0aGlzLmdldFdpZGdldEJ5SWQod2lkZ2V0KTtcbiAgICAgIGlmICghbSkge1xuICAgICAgICAvL21heWJlLCB0aGUgd2lkZ2V0IGlzIGxvYWRpbmdcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2lkZ2V0ID0gbTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fcmVtb3ZlV2lkZ2V0KHdpZGdldCk7XG4gICAgdHJ5IHtcbiAgICAgIHdpZGdldC5kZXN0cm95KCk7XG4gICAgICBjb25zb2xlLmxvZygnZGVzdHJveSB3aWRnZXQgWycgKyB3aWRnZXQuaW5zdGFuY2UuaWQgKyAnXS4nKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGNvbnNvbGUuZXJyb3IoJ2ZhaWwgdG8gZGVzdHJveSB3aWRnZXQgJyArIHdpZGdldC5pbnN0YW5jZS5uYW1lICsgJy4gJyArIGVyci5zdGFjaykpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSBtYW5pZmVzdCBcbiAgICovXG4gIF9wcm9jZXNzTWFuaWZlc3QobWFuaWZlc3QpIHtcbiAgICB0aGlzLnV0aWxzLmFkZE1hbmlmZXN0UHJvcGVyaWVzKG1hbmlmZXN0KTtcbiAgICB0aGlzLnV0aWxzLnByb2Nlc3NNYW5pZmVzdExhYmVsKG1hbmlmZXN0LCAnemgtY24nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIHNldHRpbmcgXG4gICAqIEBwYXJhbSBmbGFnIFxuICAgKi9cbiAgX3RyeUxvYWRSZXNvdXJjZShzZXR0aW5nLCBmbGFnKSB7XG4gICAgLy/lvoXlvIDlj5FcbiAgICByZXR1cm4gdGhpcy5jb21tb25TZXJ2aWNlLmNyZWF0ZVByb21pc2VEZWZlcigpLnByb21pc2UoKTtcbiAgfVxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSBpZCBcbiAgICovXG4gIF9yZXBsYWNlSWQoaWQpIHtcbiAgICByZXR1cm4gaWQucmVwbGFjZSgvXFwvL2csICdfJykucmVwbGFjZSgvXFwuL2csICdfJyk7XG4gIH1cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0gd2lkZ2V0U2V0dGluZyBcbiAgICovXG4gIGxvYWRXaWRnZXRTdHlsZSh3aWRnZXRTZXR0aW5nKSB7XG4gICAgLy/lvoXlvIDlj5FcbiAgfVxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSB3aWRnZXRTZXR0aW5nIFxuICAgKi9cbiAgbG9hZFdpZGdldFNldHRpbmdTdHlsZSh3aWRnZXRTZXR0aW5nKSB7XG4gICAgLy/lvoXlvIDlj5FcbiAgfVxuXG4gIGxvYWRXaWRnZXRDb25maWcod2lkZ2V0U2V0dGluZykge1xuICAgIC8v5b6F5byA5Y+RXG4gIH1cblxuICBsb2FkV2lkZ2V0STE4bih3aWRnZXRTZXR0aW5nKSB7XG5cbiAgfVxuXG4gIGxvYWRXaWRnZXRTZXR0aW5nSTE4bih3aWRnZXRTZXR0aW5nKSB7XG5cbiAgfVxuXG4gIGxvYWRXaWRnZXRUZW1wbGF0ZSh3aWRnZXRTZXR0aW5nKSB7XG4gICAgLy/lvoXlvIDlj5FcbiAgICByZXR1cm4gdGhpcy5jb21tb25TZXJ2aWNlLmNyZWF0ZVByb21pc2VEZWZlcigpLnByb21pc2UoKTtcbiAgfVxuXG4gIGxvYWRXaWRnZXRTZXR0aW5nVGVtcGxhdGUod2lkZ2V0U2V0dGluZykge1xuXG4gICAgcmV0dXJuIHRoaXMuY29tbW9uU2VydmljZS5jcmVhdGVQcm9taXNlRGVmZXIoKS5wcm9taXNlKCk7XG4gIH1cbiAgLyoqXG4gICAqIFxuICAgKi9cbiAgZ2V0T25TY3JlZW5PZmZQYW5lbFdpZGdldHMoKSB7XG4gICAgcmV0dXJuIF8uZmlsdGVyKHRoaXMubG9hZGVkLCBmdW5jdGlvbiAod2lkZ2V0KSB7XG4gICAgICByZXR1cm4gKHdpZGdldC5pbnN0YW5jZS5pc09uU2NyZWVuICYmICF3aWRnZXQuaW5zdGFuY2UuaW5QYW5lbCkgfHwgKHdpZGdldC5pbnN0YW5jZS53aWRnZXRDb25maWcuaXNPblNjcmVlbiAmJiAhd2lkZ2V0Lmluc3RhbmNlLndpZGdldENvbmZpZy5pblBhbmVsKTtcbiAgICB9KTtcbiAgfVxuXG4gIF9wb3N0V2lkZ2V0U3RhcnR1cCh3aWRnZXRPYmplY3QpIHtcbiAgICAvL+W+heW8gOWPkVxuICB9XG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIHdpZGdldCBcbiAgICovXG4gIF90cmlnZ2VyTWlzc2VkQWN0aW9uKHdpZGdldDogQ29tcG9uZW50UmVmPEJhc2VXaWRnZXRDb21wb25lbnQ+KSB7XG4gICAgdGhpcy5taXNzZWRBY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKGluZm8pIHtcbiAgICAgIGlmIChpbmZvLmlkID09PSB3aWRnZXQuaW5zdGFuY2UuaWQpIHtcbiAgICAgICAgd2lkZ2V0Lmluc3RhbmNlLm9uQWN0aW9uKGluZm8uYWN0aW9uLm5hbWUsIGluZm8uYWN0aW9uLmRhdGEpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIGlkIFxuICAgKi9cbiAgX3JlbW92ZShpZCkge1xuICAgIHJldHVybiBfLnNvbWUodGhpcy5sb2FkZWQsICh3LCBpKSA9PiB7XG4gICAgICBpZiAody5pbnN0YW5jZS5pZCA9PT0gaWQpIHtcbiAgICAgICAgdGhpcy5sb2FkZWQuc3BsaWNlKGksIDEpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSB3aWRnZXQgXG4gICAqL1xuICBfb25EZXN0cm95V2lkZ2V0KHdpZGdldDogQ29tcG9uZW50UmVmPEJhc2VXaWRnZXRDb21wb25lbnQ+KSB7XG4gICAgaWYgKHdpZGdldC5pbnN0YW5jZS5zdGF0ZSAhPT0gV2lkZ2V0U3RhdGUuY2xvc2VkKSB7XG4gICAgICB0aGlzLmNsb3NlV2lkZ2V0KHdpZGdldCk7XG4gICAgfVxuICAgIHRoaXMuX3JlbW92ZVdpZGdldCh3aWRnZXQpO1xuICAgIGNvbnNvbGUubG9nKCdkZXN0cm95IHdpZGdldCBbJyArIHdpZGdldC5pbnN0YW5jZS51cmkgKyAnXS4nKTtcbiAgfVxuICBfb25EZXN0cm95V2lkZ2V0U2V0dGluZyhzZXR0aW5nV2lkZ2V0KSB7XG4gICAgdGhpcy5yZW1vdmVXaWRnZXRTZXR0aW5nU3R5bGUoc2V0dGluZ1dpZGdldCk7XG4gIH1cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0gd2lkZ2V0IFxuICAgKi9cbiAgX3JlbW92ZVdpZGdldCh3aWRnZXQ6IENvbXBvbmVudFJlZjxCYXNlV2lkZ2V0Q29tcG9uZW50Pikge1xuICAgIHZhciBtO1xuICAgIGlmICh0eXBlb2Ygd2lkZ2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgbSA9IHRoaXMuZ2V0V2lkZ2V0QnlJZCh3aWRnZXQpO1xuICAgICAgaWYgKCFtKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpZGdldCA9IG07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYWN0aXZlV2lkZ2V0ICYmIHRoaXMuYWN0aXZlV2lkZ2V0Lmluc3RhbmNlLmlkID09PSB3aWRnZXQuaW5zdGFuY2UuaWQpIHtcbiAgICAgIHRoaXMuYWN0aXZlV2lkZ2V0ID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5fcmVtb3ZlKHdpZGdldC5pbnN0YW5jZS5pZCk7XG4gICAgaWYgKHRoaXMuZ2V0V2lkZ2V0c0J5TmFtZSh3aWRnZXQuaW5zdGFuY2UubmFtZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLnJlbW92ZVdpZGdldFN0eWxlKHdpZGdldCk7XG4gICAgfVxuICB9XG4gIHJlbW92ZVdpZGdldFN0eWxlKHdpZGdldCkge1xuICAgIC8v5b6F5byA5Y+RXG4gIH1cbiAgcmVtb3ZlV2lkZ2V0U2V0dGluZ1N0eWxlKHdpZGdldCkge1xuICAgIC8v5b6F5byA5Y+RXG4gIH1cbiAgX29uQ2xpY2tXaWRnZXQod2lkZ2V0LCBldnQpIHtcblxuICAgIHRoaXMuX2FjdGl2ZVdpZGdldCh3aWRnZXQpO1xuICB9XG4gIF9hY3RpdmVXaWRnZXQod2lkZ2V0KSB7XG5cbiAgICAvL+W+heW8gOWPkVxuICB9XG4gIGdldE9mZlBhbmVsV2lkZ2V0cygpIHtcbiAgICByZXR1cm4gXy5maWx0ZXIodGhpcy5sb2FkZWQsIGZ1bmN0aW9uICh3aWRnZXQpIHtcbiAgICAgIHJldHVybiAhd2lkZ2V0Lmluc3RhbmNlLmluUGFuZWw7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==