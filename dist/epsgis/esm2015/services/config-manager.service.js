import { Injectable } from '@angular/core';
import * as _ from "lodash";
import * as i0 from "@angular/core";
import * as i1 from "./utils.service";
import * as i2 from "../models/app-config";
import * as i3 from "./event-emitter.service";
import * as i4 from "./widget-manager.service";
import * as i5 from "./config-loader.service";
import * as i6 from "./common.service";
export class ConfigManagerService {
    constructor(utils, globalParams, eventService, widgetManager, configLoader, commonService) {
        this.utils = utils;
        this.globalParams = globalParams;
        this.eventService = eventService;
        this.widgetManager = widgetManager;
        this.configLoader = configLoader;
        this.commonService = commonService;
        this.urlParams = null;
        this.appConfig = null;
        this.configFile = null;
        this._configLoaded = false;
        this.portalSelf = null;
        this._originConfig = null;
        this.urlParams = globalParams.urlParams;
        this.listenBuilderEvents();
    }
    listenBuilderEvents() {
        this.eventService.rss.on(this.eventService._designConfigChanged, this._onDesignConfigChanged);
    }
    loadConfig(config) {
        this.widgetManager.configLoader = this.configLoader;
        return this.configLoader.loadConfig(config).then((appConfig) => {
            this.portalSelf = this.configLoader.portalSelf;
            this.appConfig = this._addDefaultValues(appConfig);
            this.globalParams.appInfo.isRunInMobile = this._isRunInMobile();
            if (this.appConfig.logo && this.globalParams.appInfo.folderUrlPrefix) {
                this.appConfig.logo = this.globalParams.appInfo.folderUrlPrefix + "/" + this.appConfig.logo;
            }
            this.eventService.rss.emit(this.eventService._appConfigLoaded, this.appConfig);
        }, function (err) {
            console.error(err);
            if (err && err.message && typeof err.message === 'string') {
            }
        });
    }
    _isRunInMobile() {
        return false;
    }
    _addDefaultValues(config) {
        this._addDefaultPortalUrl(config);
        this._addDefaultGeometryService(config);
        this._addDefaultStyle(config);
        this._addDefaultMap(config);
        this._addDefaultVisible(config);
        if (typeof config.widgetOnScreen === 'undefined') {
            config.widgetOnScreen = {};
        }
        if (typeof config.widgetPool === 'undefined') {
            config.widgetPool = {};
        }
        return config;
    }
    _addDefaultPortalUrl(config) {
        config.portalUrl = 'https://www.supermap.com/cn';
    }
    _addDefaultGeometryService(appConfig) {
    }
    _addDefaultStyle(config) {
        if (config.theme) {
            if (!config.theme.styles || config.theme.styles.length === 0) {
                config.theme.styles = ['default'];
            }
        }
    }
    _addDefaultMap(config) {
        config.map.id = 'mapCantainer';
        if (typeof config.map['3D'] === 'undefined' && typeof config.map['2D'] === 'undefined') {
            config.map['2D'] = true;
        }
        if (typeof config.map.position === 'undefined') {
            config.map.position = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            };
        }
        if (typeof config.map.portalUrl === 'undefined') {
            config.map.portalUrl = config.portalUrl;
        }
    }
    _addDefaultVisible(config) {
        if (config.visible === undefined) {
            config.visible = true;
        }
    }
    _addDefaultPanelAndPosition(config) {
    }
    processMenuWidgetConfig(menus) {
        function visitHeaderMenu(widget, cb) {
            if (widget.children && widget.children.length >= 1) {
                for (var k = 0; k < widget.children.length; k++) {
                    var item = widget.children[k];
                    var tempobject = {
                        index: widget.index + "" + k,
                        isWidget: true,
                        groupId: section,
                        gid: section,
                        isThemeWidget: false,
                        isOnScreen: isOnScreen,
                        isHeadMenu: isHeadMenu
                    };
                    tempobject.id = item.uri ? (item.uri.replace(/\//g, '_') + '_' + (parseInt(tempobject.index) + 1)) : ('' + '_' + (parseInt(tempobject.index) + 1));
                    if (item.groupId || item.gid) {
                        tempobject.groupId = item.groupId || item.gid;
                        tempobject.gid = tempobject.groupId;
                    }
                    item = _.extend(item, tempobject);
                    this.utils.processWidgetUriPara(item);
                    if (item.isWidget && item.uri) {
                        _self.configLoader.processWidgetSetting(item);
                        defs.push(_self.widgetManager.loadWidgetManifest(item));
                    }
                    visitHeaderMenu(item, cb);
                }
            }
        }
        var isHeadMenu = true, isOnScreen = false, i, section = "widgetPool";
        var defs = [], def = this.commonService.createPromiseDefer();
        var maxId = this.appConfig.widgetOnScreen.widgets.length + 2;
        i = maxId - 1;
        var _self = this;
        _.forEach(menus, (widget, index, list) => {
            widget.id = widget.uri ? (widget.uri.replace(/\//g, '_') + '_' + maxId) : ('' + '_' + maxId);
            widget.index = i;
            widget.isWidget = true;
            widget.groupId = section;
            widget.gid = section;
            widget.isThemeWidget = widget.uri && widget.uri.indexOf('themes/' + _self.appConfig.theme.name) > -1;
            widget.isOnScreen = isOnScreen;
            widget.isHeadMenu = isHeadMenu;
            widget.reqPara = {};
            widget.version = undefined;
            this.utils.processWidgetUriPara(widget);
            visitHeaderMenu(widget);
            if (widget.isWidget && widget.uri) {
                _self.configLoader.processWidgetSetting(widget);
                defs.push(_self.widgetManager.loadWidgetManifest(widget));
            }
            i++;
        });
        Promise.all(defs).then(() => {
            def.resolve(menus);
        });
        return def.promise();
    }
    _onWidgetAdded(obj, any) {
        var widget = _.extend({}, obj);
        var maxId = this.appConfig.widgetOnScreen.widgets.length;
        widget.id = widget.uri ? (widget.uri.replace(/\//g, '_') + '_' + maxId) : ('' + '_' + maxId);
        widget.index = maxId - 1;
        widget.isWidget = true;
        widget.groupId = "widgetOnScreen";
        widget.gid = "widgetOnScreen";
        widget.isThemeWidget = widget.uri && widget.uri.indexOf('themes/' + this.appConfig.theme.name) > -1;
        widget.isOnScreen = true;
        widget.isHeadMenu = false;
        widget.reqPara = {};
        widget.version = undefined;
        this.utils.processWidgetUriPara(widget);
        if (widget.isWidget && widget.uri) {
            this.configLoader.processWidgetSetting(widget);
            this.widgetManager.loadWidgetManifest(widget).then((config) => {
                this.appConfig.widgetOnScreen.widgets.push(config);
                this.eventService.rss.emit(this.eventService._appConfigChanged, { type: "widgetAdded", appConfig: this.appConfig, data: config });
            }).catch(function (err) {
                console.log("loadWidgetManifest err", err);
            });
        }
    }
    _getCleanConfig(config) {
        var newConfig = _.clone(config);
        var properties = this.utils.widgetProperties;
        delete newConfig.mode;
        this.utils.visitElement(newConfig, (e, info) => {
            if (e.widgets) {
                delete e.isOnScreen;
                delete e.gid;
                delete e.openType;
                if (info.isOnScreen) {
                    if (e.panel && this.utils.isEqual(e.panel, newConfig.widgetOnScreen.panel)) {
                        delete e.panel;
                    }
                }
                return;
            }
            if (e.icon && e.icon === e.amdFolder + 'images/icon.png') {
                delete e.icon;
            }
            delete e.panel;
            delete e.folderUrl;
            delete e.amdFolder;
            delete e.thumbnail;
            delete e.configFile;
            delete e.gid;
            delete e.isOnScreen;
            properties.forEach(function (p) {
                delete e[p];
            });
            if (e.visible) {
                delete e.visible;
            }
            delete e.manifest;
        });
        delete newConfig.rawAppConfig;
        delete newConfig._ssl;
        delete newConfig.getConfigElementById;
        delete newConfig.getConfigElementsByName;
        delete newConfig.getConfigElementByLabel;
        delete newConfig.getConfigElementsByUri;
        delete newConfig.processNoUriWidgets;
        delete newConfig.addElementId;
        delete newConfig.getCleanConfig;
        delete newConfig.visitElement;
        delete newConfig.agolConfig;
        delete newConfig._itemData;
        delete newConfig.oldWabVersion;
        return newConfig;
    }
    getAppConfig() {
        var c;
        if (this.globalParams.appInfo.isRunInMobile) {
        }
        else {
            c = _.clone(this.appConfig);
        }
        c.getConfigElementById = (id) => {
            return this.utils.getConfigElementById(this, id);
        };
        c.getConfigElementByLabel = (label) => {
            return this.utils.getConfigElementByLabel(this, label);
        };
        c.getConfigElementsByName = (name) => {
            return this.utils.getConfigElementsByName(this, name);
        };
        c.getConfigElementsByUri = (uri) => {
            return this.utils.getConfigElementsByUri(this, uri);
        };
        c.getCleanConfig = () => {
            if (this._originConfig) {
                return this._getCleanConfig(this._originConfig);
            }
            else {
                return this._getCleanConfig(this.appConfig);
            }
        };
        c.visitElement = function (cb) {
            this.utils.visitElement(this, cb);
        };
        return c;
    }
    _getAppConfigFromTheme(theme) {
        var def = this.commonService.createPromiseDefer();
        var config, styles = [];
        var currentConfig = this.getAppConfig().getCleanConfig();
        currentConfig.mode = this.urlParams.mode;
        _.forEach(currentConfig.widgetPool.groups, (group) => {
            delete group.panel;
        });
        if (theme.appConfig) {
            config = _.clone(theme.appConfig);
            config.map = currentConfig.map;
            config.map.position = theme.appConfig.map.position;
            config.links = currentConfig.links;
            config.title = currentConfig.title;
            config.subtitle = currentConfig.subtitle;
            config.logo = currentConfig.logo;
        }
        else {
        }
        this.configLoader.addNeedValues(config);
        this.configLoader.loadWidgetsManifest(config).then(() => {
            this._addDefaultValues(config);
            def.resolve(config);
        });
        return def.promise();
    }
    _onDesignConfigChanged(params) {
        var _preProcessConfig4Design = {
            appAttributeChanged: (_params) => {
                _params.data.appConfig.logo = this.globalParams.appInfo.folderUrlPrefix + "/" + _params.data.appConfig.logo;
                _params.data.changeData.logo = _params.data.appConfig.logo;
            },
            mapChanged: (_params) => {
                var newJson = this.utils.reCreateObject(_params.data.appConfig.map);
                if (newJson.itemId && newJson.itemId !== this.appConfig.map.itemId) {
                    if (this.appConfig.map.mapOptions) {
                        this.utils.deleteMapOptions(this.appConfig.map.mapOptions);
                    }
                }
                _.extend(this.appConfig.map, newJson);
                _params.data.appConfig = this.getAppConfig();
                this.eventService.rss.emit(this.eventService._appConfigChanged, _params);
            },
            themeChanged: (_params) => {
                this._getAppConfigFromTheme(_params.data).then((config) => {
                    this.appConfig = config;
                    _params.data.appConfig = this.getAppConfig();
                    this.eventService.rss.emit(this.eventService._appConfigChanged, _params);
                });
            },
            layoutChanged: (_params) => {
                this._getAppConfigFromTheme(_params.data).then((config) => {
                    this.appConfig = config;
                    _params.data.appConfig = this.getAppConfig();
                    this.eventService.rss.emit(this.eventService._appConfigChanged, _params);
                });
            },
            styleChanged: (_params) => {
                this.appConfig.theme.styles = this._genStyles(this.appConfig.theme.styles, _params.data.appConfig.theme.styles[0]);
                _params.data.appConfig = this.getAppConfig();
                this.eventService.rss.emit(this.eventService._appConfigChanged, _params);
            },
            widgetChanged: (_params) => {
                _params.data.appConfig = this.getAppConfig();
                this.eventService.rss.emit(this.eventService._appConfigChanged, _params);
            },
            widgetPoolChanged: (_params) => {
                _params.data.appConfig = this.getAppConfig();
            },
            actionTriggered: (_params) => {
                var id = "", actionInfo = _params.data.actionInfo, widget = actionInfo.widget, cwidget = undefined;
                if (widget.id) {
                    id = widget.id;
                }
                else if (widget.uri || widget.oldUri) {
                    var uri = widget.uri ? widget.uri : widget.oldUri;
                    if (this.globalParams.appInfo.folderUrlPrefix) {
                        uri = this.globalParams.appInfo.folderUrlPrefix + "/" + uri;
                    }
                    var arr = this.utils.getConfigElementsByUri(this.appConfig, uri);
                    var _widget = _.find(arr, (w, index) => {
                        return w.isOnScreen === actionInfo.isOnScreen;
                    });
                    if (_widget) {
                        id = _widget.id;
                    }
                }
                _params.data.eleid = id;
            }
        };
        var _params = _.extend({}, params);
        _preProcessConfig4Design[_params.type].call(this, _params);
    }
    _genStyles(allStyle, currentStyle) {
        var styles = [];
        styles.push(currentStyle);
        _.forEach(allStyle, function (_style) {
            if (styles.indexOf(_style) < 0) {
                styles.push(_style);
            }
        });
        return styles;
    }
}
ConfigManagerService.ɵfac = function ConfigManagerService_Factory(t) { return new (t || ConfigManagerService)(i0.ɵɵinject(i1.UtilsService), i0.ɵɵinject(i2.AppGlobalConfig), i0.ɵɵinject(i3.EventEmitterService), i0.ɵɵinject(i4.WidgetManagerService), i0.ɵɵinject(i5.ConfigLoaderService), i0.ɵɵinject(i6.CommonService)); };
ConfigManagerService.ɵprov = i0.ɵɵdefineInjectable({ token: ConfigManagerService, factory: ConfigManagerService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConfigManagerService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.UtilsService }, { type: i2.AppGlobalConfig }, { type: i3.EventEmitterService }, { type: i4.WidgetManagerService }, { type: i5.ConfigLoaderService }, { type: i6.CommonService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLW1hbmFnZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2Vwc2dpcy9zZXJ2aWNlcy9jb25maWctbWFuYWdlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7Ozs7Ozs7O0FBUTVCLE1BQU0sT0FBTyxvQkFBb0I7SUFRL0IsWUFBb0IsS0FBbUIsRUFDN0IsWUFBNkIsRUFDN0IsWUFBaUMsRUFDakMsYUFBbUMsRUFDbkMsWUFBaUMsRUFDakMsYUFBNEI7UUFMbEIsVUFBSyxHQUFMLEtBQUssQ0FBYztRQUM3QixpQkFBWSxHQUFaLFlBQVksQ0FBaUI7UUFDN0IsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQ2pDLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNuQyxpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDakMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFadEMsY0FBUyxHQUFRLElBQUksQ0FBQztRQUN0QixjQUFTLEdBQVEsSUFBSSxDQUFDO1FBQ3RCLGVBQVUsR0FBUSxJQUFJLENBQUM7UUFDdkIsa0JBQWEsR0FBUSxLQUFLLENBQUM7UUFDM0IsZUFBVSxHQUFRLElBQUksQ0FBQztRQUN2QixrQkFBYSxHQUFRLElBQUksQ0FBQztRQVF4QixJQUFJLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQyxTQUFTLENBQUM7UUFDeEMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUNELG1CQUFtQjtRQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUNoRyxDQUFDO0lBQ0QsVUFBVSxD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QU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBRTdELENBQUM7SUFDRCxVQUFVLENBQUMsUUFBUSxFQUFFLFlBQVk7UUFDL0IsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDMUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsVUFBVSxNQUFNO1lBQ2xDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDckI7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O3dGQXZnQlUsb0JBQW9COzREQUFwQixvQkFBb0IsV0FBcEIsb0JBQW9CLG1CQUZuQixNQUFNO3VGQUVQLG9CQUFvQjtjQUhoQyxVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25TZXJ2aWNlIH0gZnJvbSAnLi9jb21tb24uc2VydmljZSc7XG5pbXBvcnQgeyBDb25maWdMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWctbG9hZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgV2lkZ2V0TWFuYWdlclNlcnZpY2UgfSBmcm9tICcuL3dpZGdldC1tYW5hZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXRpbHNTZXJ2aWNlIH0gZnJvbSAnLi91dGlscy5zZXJ2aWNlJztcbmltcG9ydCB7IEV2ZW50RW1pdHRlclNlcnZpY2UgfSBmcm9tICcuL2V2ZW50LWVtaXR0ZXIuc2VydmljZSc7XG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCB7IEFwcEdsb2JhbENvbmZpZyB9IGZyb20gJy4uL21vZGVscy9hcHAtY29uZmlnJztcbi8qKlxuICogY3JlYXRlIGJ5IHJ1aXIgMTkxMDE0ICBjb25maWdNYW5hZ2VyLmpzXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpZ01hbmFnZXJTZXJ2aWNlIHtcbiAgdXJsUGFyYW1zOiBhbnkgPSBudWxsO1xuICBhcHBDb25maWc6IGFueSA9IG51bGw7XG4gIGNvbmZpZ0ZpbGU6IGFueSA9IG51bGw7XG4gIF9jb25maWdMb2FkZWQ6IGFueSA9IGZhbHNlO1xuICBwb3J0YWxTZWxmOiBhbnkgPSBudWxsO1xuICBfb3JpZ2luQ29uZmlnOiBhbnkgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdXRpbHM6IFV0aWxzU2VydmljZSxcbiAgICBwcml2YXRlIGdsb2JhbFBhcmFtczogQXBwR2xvYmFsQ29uZmlnLFxuICAgIHByaXZhdGUgZXZlbnRTZXJ2aWNlOiBFdmVudEVtaXR0ZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgd2lkZ2V0TWFuYWdlcjogV2lkZ2V0TWFuYWdlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb25maWdMb2FkZXI6IENvbmZpZ0xvYWRlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb21tb25TZXJ2aWNlOiBDb21tb25TZXJ2aWNlKSB7XG4gICAgdGhpcy51cmxQYXJhbXMgPSBnbG9iYWxQYXJhbXMudXJsUGFyYW1zO1xuICAgIHRoaXMubGlzdGVuQnVpbGRlckV2ZW50cygpO1xuICB9XG4gIGxpc3RlbkJ1aWxkZXJFdmVudHMoKSB7XG4gICAgdGhpcy5ldmVudFNlcnZpY2UucnNzLm9uKHRoaXMuZXZlbnRTZXJ2aWNlLl9kZXNpZ25Db25maWdDaGFuZ2VkLCB0aGlzLl9vbkRlc2lnbkNvbmZpZ0NoYW5nZWQpO1xuICB9XG4gIGxvYWRDb25maWcoY29uZmlnPzogYW55KSB7XG4gICAgLy/ov5lpZuWIpOaWreaaguaXtuazqOmHiu+8jOS4jeefpemBk+W9k+aXtueahOmAu+i+kVxuICAgIC8vIGlmICh0aGlzLnVybFBhcmFtcy5tb2RlID09PSAncHJldmlldycgfHxcbiAgICAvLyAgIHRoaXMudXJsUGFyYW1zLm1vZGUgPT09ICdjb25maWcnKSB7XG4gICAgLy8gICByZXR1cm47XG4gICAgLy8gfVxuICAgIHRoaXMud2lkZ2V0TWFuYWdlci5jb25maWdMb2FkZXIgPSB0aGlzLmNvbmZpZ0xvYWRlcjtcbiAgICByZXR1cm4gdGhpcy5jb25maWdMb2FkZXIubG9hZENvbmZpZyhjb25maWcpLnRoZW4oKGFwcENvbmZpZykgPT4ge1xuICAgICAgdGhpcy5wb3J0YWxTZWxmID0gdGhpcy5jb25maWdMb2FkZXIucG9ydGFsU2VsZjtcbiAgICAgIHRoaXMuYXBwQ29uZmlnID0gdGhpcy5fYWRkRGVmYXVsdFZhbHVlcyhhcHBDb25maWcpO1xuXG4gICAgICB0aGlzLmdsb2JhbFBhcmFtcy5hcHBJbmZvLmlzUnVuSW5Nb2JpbGUgPSB0aGlzLl9pc1J1bkluTW9iaWxlKCk7XG5cbiAgICAgIGlmICh0aGlzLmFwcENvbmZpZy5sb2dvICYmIHRoaXMuZ2xvYmFsUGFyYW1zLmFwcEluZm8uZm9sZGVyVXJsUHJlZml4KSB7XG4gICAgICAgIHRoaXMuYXBwQ29uZmlnLmxvZ28gPSB0aGlzLmdsb2JhbFBhcmFtcy5hcHBJbmZvLmZvbGRlclVybFByZWZpeCArIFwiL1wiICsgdGhpcy5hcHBDb25maWcubG9nbztcbiAgICAgIH1cbiAgICAgIHRoaXMuZXZlbnRTZXJ2aWNlLnJzcy5lbWl0KHRoaXMuZXZlbnRTZXJ2aWNlLl9hcHBDb25maWdMb2FkZWQsIHRoaXMuYXBwQ29uZmlnKTtcbiAgICAgIC8vUnNzLmRvbmUoXCJhcHBDb25maWdMb2FkZWRcIiwgX3NlbGYuYXBwQ29uZmlnKTtcbiAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICBpZiAoZXJyICYmIGVyci5tZXNzYWdlICYmIHR5cGVvZiBlcnIubWVzc2FnZSA9PT0gJ3N0cmluZycpIHtcblxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIF9pc1J1bkluTW9iaWxlKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKiBBZGQgZGVmYXVsdCB2YWx1ZXNcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgX2FkZERlZmF1bHRWYWx1ZXMoY29uZmlnKSB7XG4gICAgdGhpcy5fYWRkRGVmYXVsdFBvcnRhbFVybChjb25maWcpO1xuICAgIHRoaXMuX2FkZERlZmF1bHRHZW9tZXRyeVNlcnZpY2UoY29uZmlnKTtcbiAgICB0aGlzLl9hZGREZWZhdWx0U3R5bGUoY29uZmlnKTtcbiAgICB0aGlzLl9hZGREZWZhdWx0TWFwKGNvbmZpZyk7XG4gICAgdGhpcy5fYWRkRGVmYXVsdFZpc2libGUoY29uZmlnKTtcblxuICAgIC8vcHJlbG9hZCB3aWRnZXRzXG4gICAgaWYgKHR5cGVvZiBjb25maWcud2lkZ2V0T25TY3JlZW4gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWcud2lkZ2V0T25TY3JlZW4gPSB7fTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy53aWRnZXRQb29sID09PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnLndpZGdldFBvb2wgPSB7fTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfVxuXG4gIF9hZGREZWZhdWx0UG9ydGFsVXJsKGNvbmZpZykge1xuICAgIGNvbmZpZy5wb3J0YWxVcmwgPSAnaHR0cHM6Ly93d3cuc3VwZXJtYXAuY29tL2NuJztcbiAgfVxuXG4gIF9hZGREZWZhdWx0R2VvbWV0cnlTZXJ2aWNlKGFwcENvbmZpZykge1xuXG5cbiAgfVxuXG4gIF9hZGREZWZhdWx0U3R5bGUoY29uZmlnKSB7XG4gICAgaWYgKGNvbmZpZy50aGVtZSkge1xuICAgICAgaWYgKCFjb25maWcudGhlbWUuc3R5bGVzIHx8IGNvbmZpZy50aGVtZS5zdHlsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbmZpZy50aGVtZS5zdHlsZXMgPSBbJ2RlZmF1bHQnXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfYWRkRGVmYXVsdE1hcChjb25maWcpIHtcbiAgICBjb25maWcubWFwLmlkID0gJ21hcENhbnRhaW5lcic7XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy5tYXBbJzNEJ10gPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjb25maWcubWFwWycyRCddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnLm1hcFsnMkQnXSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcubWFwLnBvc2l0aW9uID09PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnLm1hcC5wb3NpdGlvbiA9IHtcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgYm90dG9tOiAwXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLm1hcC5wb3J0YWxVcmwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWcubWFwLnBvcnRhbFVybCA9IGNvbmZpZy5wb3J0YWxVcmw7XG4gICAgfVxuICB9XG5cbiAgX2FkZERlZmF1bHRWaXNpYmxlKGNvbmZpZykge1xuICAgIGlmIChjb25maWcudmlzaWJsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25maWcudmlzaWJsZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgX2FkZERlZmF1bHRQYW5lbEFuZFBvc2l0aW9uKGNvbmZpZykge1xuXG4gIH1cbiAgcHJvY2Vzc01lbnVXaWRnZXRDb25maWcobWVudXMpIHtcblxuICAgIGZ1bmN0aW9uIHZpc2l0SGVhZGVyTWVudSh3aWRnZXQ6IGFueSwgY2I/OiBGdW5jdGlvbikgeyAvL+aUr+aMgeWtkOe7hOS7tlxuICAgICAgaWYgKHdpZGdldC5jaGlsZHJlbiAmJiB3aWRnZXQuY2hpbGRyZW4ubGVuZ3RoID49IDEpIHtcbiAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB3aWRnZXQuY2hpbGRyZW4ubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICB2YXIgaXRlbSA9IHdpZGdldC5jaGlsZHJlbltrXTtcbiAgICAgICAgICB2YXIgdGVtcG9iamVjdDogYW55ID0ge1xuICAgICAgICAgICAgaW5kZXg6IHdpZGdldC5pbmRleCArIFwiXCIgKyBrLFxuICAgICAgICAgICAgaXNXaWRnZXQ6IHRydWUsXG4gICAgICAgICAgICBncm91cElkOiBzZWN0aW9uLFxuICAgICAgICAgICAgZ2lkOiBzZWN0aW9uLCAvL+acieeahOWcsOaWueeUqOeahGdpZFxuICAgICAgICAgICAgaXNUaGVtZVdpZGdldDogZmFsc2UsXG4gICAgICAgICAgICBpc09uU2NyZWVuOiBpc09uU2NyZWVuLFxuICAgICAgICAgICAgaXNIZWFkTWVudTogaXNIZWFkTWVudVxuICAgICAgICAgIH07XG4gICAgICAgICAgdGVtcG9iamVjdC5pZCA9IGl0ZW0udXJpID8gKGl0ZW0udXJpLnJlcGxhY2UoL1xcLy9nLCAnXycpICsgJ18nICsgKHBhcnNlSW50KHRlbXBvYmplY3QuaW5kZXgpICsgMSkpIDogKCcnICsgJ18nICsgKHBhcnNlSW50KHRlbXBvYmplY3QuaW5kZXgpICsgMSkpXG4gICAgICAgICAgaWYgKGl0ZW0uZ3JvdXBJZCB8fCBpdGVtLmdpZCkge1xuICAgICAgICAgICAgdGVtcG9iamVjdC5ncm91cElkID0gaXRlbS5ncm91cElkIHx8IGl0ZW0uZ2lkO1xuICAgICAgICAgICAgdGVtcG9iamVjdC5naWQgPSB0ZW1wb2JqZWN0Lmdyb3VwSWQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGl0ZW0gPSBfLmV4dGVuZChpdGVtLCB0ZW1wb2JqZWN0KVxuICAgICAgICAgIHRoaXMudXRpbHMucHJvY2Vzc1dpZGdldFVyaVBhcmEoaXRlbSk7XG4gICAgICAgICAgaWYgKGl0ZW0uaXNXaWRnZXQgJiYgaXRlbS51cmkpIHtcbiAgICAgICAgICAgIF9zZWxmLmNvbmZpZ0xvYWRlci5wcm9jZXNzV2lkZ2V0U2V0dGluZyhpdGVtKTtcbiAgICAgICAgICAgIC8v5Yqg6L29bWFuaWZlc3RcbiAgICAgICAgICAgIGRlZnMucHVzaChfc2VsZi53aWRnZXRNYW5hZ2VyLmxvYWRXaWRnZXRNYW5pZmVzdChpdGVtKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZpc2l0SGVhZGVyTWVudShpdGVtLCBjYik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIGlzSGVhZE1lbnUgPSB0cnVlLCBpc09uU2NyZWVuID0gZmFsc2UsIGksIHNlY3Rpb24gPSBcIndpZGdldFBvb2xcIjsvL2hlYWRlck1lbnVcbiAgICB2YXIgZGVmcyA9IFtdLFxuICAgICAgZGVmID0gdGhpcy5jb21tb25TZXJ2aWNlLmNyZWF0ZVByb21pc2VEZWZlcigpO1xuICAgIHZhciBtYXhJZCA9IHRoaXMuYXBwQ29uZmlnLndpZGdldE9uU2NyZWVuLndpZGdldHMubGVuZ3RoICsgMjtcbiAgICBpID0gbWF4SWQgLSAxOyB2YXIgX3NlbGYgPSB0aGlzO1xuICAgIF8uZm9yRWFjaChtZW51cywgKHdpZGdldCwgaW5kZXgsIGxpc3QpID0+IHtcbiAgICAgIHdpZGdldC5pZCA9IHdpZGdldC51cmkgPyAod2lkZ2V0LnVyaS5yZXBsYWNlKC9cXC8vZywgJ18nKSArICdfJyArIG1heElkKSA6ICgnJyArICdfJyArIG1heElkKTtcbiAgICAgIHdpZGdldC5pbmRleCA9IGk7XG4gICAgICAvL+iuvue9ruWxnuaAp1xuICAgICAgd2lkZ2V0LmlzV2lkZ2V0ID0gdHJ1ZTtcbiAgICAgIHdpZGdldC5ncm91cElkID0gc2VjdGlvbjtcbiAgICAgIHdpZGdldC5naWQgPSBzZWN0aW9uOy8v5pyJ55qE5Zyw5pa555So55qEZ2lkXG4gICAgICB3aWRnZXQuaXNUaGVtZVdpZGdldCA9IHdpZGdldC51cmkgJiYgd2lkZ2V0LnVyaS5pbmRleE9mKCd0aGVtZXMvJyArIF9zZWxmLmFwcENvbmZpZy50aGVtZS5uYW1lKSA+IC0xO1xuICAgICAgd2lkZ2V0LmlzT25TY3JlZW4gPSBpc09uU2NyZWVuO1xuICAgICAgd2lkZ2V0LmlzSGVhZE1lbnUgPSBpc0hlYWRNZW51O1xuICAgICAgd2lkZ2V0LnJlcVBhcmEgPSB7fTtcbiAgICAgIHdpZGdldC52ZXJzaW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy51dGlscy5wcm9jZXNzV2lkZ2V0VXJpUGFyYSh3aWRnZXQpO1xuICAgICAgdmlzaXRIZWFkZXJNZW51KHdpZGdldCk7XG4gICAgICBpZiAod2lkZ2V0LmlzV2lkZ2V0ICYmIHdpZGdldC51cmkpIHtcbiAgICAgICAgX3NlbGYuY29uZmlnTG9hZGVyLnByb2Nlc3NXaWRnZXRTZXR0aW5nKHdpZGdldCk7XG4gICAgICAgIC8v5Yqg6L29bWFuaWZlc3RcbiAgICAgICAgZGVmcy5wdXNoKF9zZWxmLndpZGdldE1hbmFnZXIubG9hZFdpZGdldE1hbmlmZXN0KHdpZGdldCkpO1xuICAgICAgfVxuICAgICAgaSsrO1xuICAgIH0pO1xuICAgIFByb21pc2UuYWxsKGRlZnMpLnRoZW4oKCkgPT4ge1xuICAgICAgZGVmLnJlc29sdmUobWVudXMpO1xuICAgIH0pO1xuICAgIHJldHVybiBkZWYucHJvbWlzZSgpO1xuICB9XG4gIF9vbldpZGdldEFkZGVkKG9iaiwgYW55KSB7XG4gICAgdmFyIHdpZGdldCA9IF8uZXh0ZW5kKHt9LCBvYmopO1xuICAgIC8v6L+Z6YeM5bCG5Y6f5aeL55qEanNvbuWvueixoe+8jOe7j+i/h+WkhOeQhuWQjuS8oOmAkue7mWxheW91dG1hbmFnZXJcbiAgICAvL+a3u+WKoGlkXG4gICAgdmFyIG1heElkID0gdGhpcy5hcHBDb25maWcud2lkZ2V0T25TY3JlZW4ud2lkZ2V0cy5sZW5ndGg7XG4gICAgd2lkZ2V0LmlkID0gd2lkZ2V0LnVyaSA/ICh3aWRnZXQudXJpLnJlcGxhY2UoL1xcLy9nLCAnXycpICsgJ18nICsgbWF4SWQpIDogKCcnICsgJ18nICsgbWF4SWQpO1xuICAgIHdpZGdldC5pbmRleCA9IG1heElkIC0gMTtcbiAgICAvL+iuvue9ruWxnuaAp1xuICAgIHdpZGdldC5pc1dpZGdldCA9IHRydWU7XG4gICAgd2lkZ2V0Lmdyb3VwSWQgPSBcIndpZGdldE9uU2NyZWVuXCI7XG4gICAgd2lkZ2V0LmdpZCA9IFwid2lkZ2V0T25TY3JlZW5cIjsvL+acieeahOWcsOaWueeUqOeahGdpZFxuICAgIHdpZGdldC5pc1RoZW1lV2lkZ2V0ID0gd2lkZ2V0LnVyaSAmJiB3aWRnZXQudXJpLmluZGV4T2YoJ3RoZW1lcy8nICsgdGhpcy5hcHBDb25maWcudGhlbWUubmFtZSkgPiAtMTtcbiAgICB3aWRnZXQuaXNPblNjcmVlbiA9IHRydWU7XG4gICAgd2lkZ2V0LmlzSGVhZE1lbnUgPSBmYWxzZTtcbiAgICB3aWRnZXQucmVxUGFyYSA9IHt9O1xuICAgIHdpZGdldC52ZXJzaW9uID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudXRpbHMucHJvY2Vzc1dpZGdldFVyaVBhcmEod2lkZ2V0KTtcbiAgICBpZiAod2lkZ2V0LmlzV2lkZ2V0ICYmIHdpZGdldC51cmkpIHtcbiAgICAgIHRoaXMuY29uZmlnTG9hZGVyLnByb2Nlc3NXaWRnZXRTZXR0aW5nKHdpZGdldCk7XG4gICAgICAvL+WKoOi9vW1hbmlmZXN0XG4gICAgICB0aGlzLndpZGdldE1hbmFnZXIubG9hZFdpZGdldE1hbmlmZXN0KHdpZGdldCkudGhlbigoY29uZmlnKSA9PiB7XG4gICAgICAgIHRoaXMuYXBwQ29uZmlnLndpZGdldE9uU2NyZWVuLndpZGdldHMucHVzaChjb25maWcpO1xuICAgICAgICAvLyBSc3MuZG9uZShcImFwcENvbmZpZ0NoYW5nZWRcIiwgeyB0eXBlOiBcIndpZGdldEFkZGVkXCIsIGFwcENvbmZpZzogX3NlbGYuYXBwQ29uZmlnLCBkYXRhOiBjb25maWcgfSk7XG4gICAgICAgIHRoaXMuZXZlbnRTZXJ2aWNlLnJzcy5lbWl0KHRoaXMuZXZlbnRTZXJ2aWNlLl9hcHBDb25maWdDaGFuZ2VkLCB7IHR5cGU6IFwid2lkZ2V0QWRkZWRcIiwgYXBwQ29uZmlnOiB0aGlzLmFwcENvbmZpZywgZGF0YTogY29uZmlnIH0pO1xuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhcImxvYWRXaWRnZXRNYW5pZmVzdCBlcnJcIiwgZXJyKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICB9XG4gIF9nZXRDbGVhbkNvbmZpZyhjb25maWcpIHtcblxuICAgIHZhciBuZXdDb25maWcgPSBfLmNsb25lKGNvbmZpZyk7XG4gICAgdmFyIHByb3BlcnRpZXMgPSB0aGlzLnV0aWxzLndpZGdldFByb3BlcnRpZXM7XG5cbiAgICBkZWxldGUgbmV3Q29uZmlnLm1vZGU7XG4gICAgdGhpcy51dGlscy52aXNpdEVsZW1lbnQobmV3Q29uZmlnLCAoZSwgaW5mbykgPT4ge1xuICAgICAgaWYgKGUud2lkZ2V0cykge1xuICAgICAgICBkZWxldGUgZS5pc09uU2NyZWVuO1xuICAgICAgICBkZWxldGUgZS5naWQ7XG4gICAgICAgIGRlbGV0ZSBlLm9wZW5UeXBlO1xuICAgICAgICBpZiAoaW5mby5pc09uU2NyZWVuKSB7XG4gICAgICAgICAgaWYgKGUucGFuZWwgJiYgdGhpcy51dGlscy5pc0VxdWFsKGUucGFuZWwsIG5ld0NvbmZpZy53aWRnZXRPblNjcmVlbi5wYW5lbCkpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBlLnBhbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChlLmljb24gJiYgZS5pY29uID09PSBlLmFtZEZvbGRlciArICdpbWFnZXMvaWNvbi5wbmcnKSB7XG4gICAgICAgIGRlbGV0ZSBlLmljb247XG4gICAgICB9XG5cbiAgICAgIGRlbGV0ZSBlLnBhbmVsO1xuICAgICAgZGVsZXRlIGUuZm9sZGVyVXJsO1xuICAgICAgZGVsZXRlIGUuYW1kRm9sZGVyO1xuICAgICAgZGVsZXRlIGUudGh1bWJuYWlsO1xuICAgICAgZGVsZXRlIGUuY29uZmlnRmlsZTtcbiAgICAgIGRlbGV0ZSBlLmdpZDtcbiAgICAgIGRlbGV0ZSBlLmlzT25TY3JlZW47XG5cbiAgICAgIHByb3BlcnRpZXMuZm9yRWFjaChmdW5jdGlvbiAocCkge1xuICAgICAgICBkZWxldGUgZVtwXTtcbiAgICAgIH0pO1xuXG5cbiAgICAgIGlmIChlLnZpc2libGUpIHtcbiAgICAgICAgZGVsZXRlIGUudmlzaWJsZTtcbiAgICAgIH1cbiAgICAgIGRlbGV0ZSBlLm1hbmlmZXN0O1xuICAgIH0pO1xuICAgIGRlbGV0ZSBuZXdDb25maWcucmF3QXBwQ29uZmlnO1xuXG4gICAgZGVsZXRlIG5ld0NvbmZpZy5fc3NsO1xuXG4gICAgZGVsZXRlIG5ld0NvbmZpZy5nZXRDb25maWdFbGVtZW50QnlJZDtcbiAgICBkZWxldGUgbmV3Q29uZmlnLmdldENvbmZpZ0VsZW1lbnRzQnlOYW1lO1xuICAgIGRlbGV0ZSBuZXdDb25maWcuZ2V0Q29uZmlnRWxlbWVudEJ5TGFiZWw7XG5cbiAgICBkZWxldGUgbmV3Q29uZmlnLmdldENvbmZpZ0VsZW1lbnRzQnlVcmk7XG5cbiAgICBkZWxldGUgbmV3Q29uZmlnLnByb2Nlc3NOb1VyaVdpZGdldHM7XG4gICAgZGVsZXRlIG5ld0NvbmZpZy5hZGRFbGVtZW50SWQ7XG4gICAgZGVsZXRlIG5ld0NvbmZpZy5nZXRDbGVhbkNvbmZpZztcbiAgICBkZWxldGUgbmV3Q29uZmlnLnZpc2l0RWxlbWVudDtcblxuICAgIGRlbGV0ZSBuZXdDb25maWcuYWdvbENvbmZpZztcbiAgICBkZWxldGUgbmV3Q29uZmlnLl9pdGVtRGF0YTtcbiAgICBkZWxldGUgbmV3Q29uZmlnLm9sZFdhYlZlcnNpb247XG5cbiAgICByZXR1cm4gbmV3Q29uZmlnO1xuICB9XG4gIGdldEFwcENvbmZpZygpIHtcbiAgICB2YXIgYztcbiAgICBpZiAodGhpcy5nbG9iYWxQYXJhbXMuYXBwSW5mby5pc1J1bkluTW9iaWxlKSB7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgYyA9IF8uY2xvbmUodGhpcy5hcHBDb25maWcpO1xuICAgIH1cblxuICAgIGMuZ2V0Q29uZmlnRWxlbWVudEJ5SWQgPSAoaWQpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnV0aWxzLmdldENvbmZpZ0VsZW1lbnRCeUlkKHRoaXMsIGlkKTtcbiAgICB9O1xuXG4gICAgYy5nZXRDb25maWdFbGVtZW50QnlMYWJlbCA9IChsYWJlbCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMudXRpbHMuZ2V0Q29uZmlnRWxlbWVudEJ5TGFiZWwodGhpcywgbGFiZWwpO1xuICAgIH07XG5cbiAgICBjLmdldENvbmZpZ0VsZW1lbnRzQnlOYW1lID0gKG5hbWUpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnV0aWxzLmdldENvbmZpZ0VsZW1lbnRzQnlOYW1lKHRoaXMsIG5hbWUpO1xuICAgIH07XG5cbiAgICBjLmdldENvbmZpZ0VsZW1lbnRzQnlVcmkgPSAodXJpKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy51dGlscy5nZXRDb25maWdFbGVtZW50c0J5VXJpKHRoaXMsIHVyaSk7XG4gICAgfTtcblxuICAgIGMuZ2V0Q2xlYW5Db25maWcgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fb3JpZ2luQ29uZmlnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRDbGVhbkNvbmZpZyh0aGlzLl9vcmlnaW5Db25maWcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldENsZWFuQ29uZmlnKHRoaXMuYXBwQ29uZmlnKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgYy52aXNpdEVsZW1lbnQgPSBmdW5jdGlvbiAoY2IpIHtcbiAgICAgIHRoaXMudXRpbHMudmlzaXRFbGVtZW50KHRoaXMsIGNiKTtcbiAgICB9O1xuICAgIHJldHVybiBjO1xuICB9XG4gIF9nZXRBcHBDb25maWdGcm9tVGhlbWUodGhlbWUpIHtcbiAgICB2YXIgZGVmID0gdGhpcy5jb21tb25TZXJ2aWNlLmNyZWF0ZVByb21pc2VEZWZlcigpO1xuICAgIHZhciBjb25maWcsIHN0eWxlcyA9IFtdO1xuICAgIHZhciBjdXJyZW50Q29uZmlnID0gdGhpcy5nZXRBcHBDb25maWcoKS5nZXRDbGVhbkNvbmZpZygpO1xuXG4gICAgY3VycmVudENvbmZpZy5tb2RlID0gdGhpcy51cmxQYXJhbXMubW9kZTtcblxuICAgIF8uZm9yRWFjaChjdXJyZW50Q29uZmlnLndpZGdldFBvb2wuZ3JvdXBzLCAoZ3JvdXApID0+IHtcbiAgICAgIGRlbGV0ZSBncm91cC5wYW5lbDtcbiAgICB9KTtcblxuICAgIGlmICh0aGVtZS5hcHBDb25maWcpIHtcbiAgICAgIGNvbmZpZyA9IF8uY2xvbmUodGhlbWUuYXBwQ29uZmlnKTtcbiAgICAgIGNvbmZpZy5tYXAgPSBjdXJyZW50Q29uZmlnLm1hcDtcbiAgICAgIGNvbmZpZy5tYXAucG9zaXRpb24gPSB0aGVtZS5hcHBDb25maWcubWFwLnBvc2l0aW9uO1xuICAgICAgLy8gdGhpcy5fY29weVBvb2xUb1RoZW1lUG9vbChjdXJyZW50Q29uZmlnLCBjb25maWcpO1xuXG4gICAgICBjb25maWcubGlua3MgPSBjdXJyZW50Q29uZmlnLmxpbmtzO1xuICAgICAgY29uZmlnLnRpdGxlID0gY3VycmVudENvbmZpZy50aXRsZTtcbiAgICAgIGNvbmZpZy5zdWJ0aXRsZSA9IGN1cnJlbnRDb25maWcuc3VidGl0bGU7XG4gICAgICBjb25maWcubG9nbyA9IGN1cnJlbnRDb25maWcubG9nbztcbiAgICB9IGVsc2Uge1xuXG4gICAgfVxuXG4gICAgdGhpcy5jb25maWdMb2FkZXIuYWRkTmVlZFZhbHVlcyhjb25maWcpO1xuICAgIHRoaXMuY29uZmlnTG9hZGVyLmxvYWRXaWRnZXRzTWFuaWZlc3QoY29uZmlnKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuX2FkZERlZmF1bHRWYWx1ZXMoY29uZmlnKTtcbiAgICAgIGRlZi5yZXNvbHZlKGNvbmZpZyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRlZi5wcm9taXNlKCk7XG4gIH1cbiAgX29uRGVzaWduQ29uZmlnQ2hhbmdlZChwYXJhbXMpIHtcblxuICAgIC8v5qC55o2u5LiN5ZCM5LqL5Lu25aSE55CG55u45bqU55qE6YWN572uXG4gICAgdmFyIF9wcmVQcm9jZXNzQ29uZmlnNERlc2lnbiA9IHtcbiAgICAgIC8vIHR5cGU6J2FwcEF0dHJpYnV0ZUNoYW5nZWQnLFxuICAgICAgLy8gICAgIGRhdGE6e1xuICAgICAgLy8gICAgICdhcHBDb25maWcnOmFwcENvbmZpZyxcbiAgICAgIC8vICAgICAnY2hhbmdlRGF0YSc6eyd0aXRsZSc6J+agh+mimCcsJ3N1YnRpdGxlJzon5Ymv5qCH6aKYJywnbG9nbyc6JzEuanBnJywnbGlua3MnOid3d3cuYmFpZHUuY29tJ31cbiAgICAgIC8vICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIOWfuuacrOS/oeaBr+aUueWPmCDvvIzlpoJsb2dv77yM5Li744CB5Ymv5qCH6aKYXG4gICAgICAgKiBAcGFyYW0gIF9wYXJhbXMgXG4gICAgICAgKiBcbiAgICAgICAqL1xuICAgICAgYXBwQXR0cmlidXRlQ2hhbmdlZDogKF9wYXJhbXMpID0+IHtcbiAgICAgICAgX3BhcmFtcy5kYXRhLmFwcENvbmZpZy5sb2dvID0gdGhpcy5nbG9iYWxQYXJhbXMuYXBwSW5mby5mb2xkZXJVcmxQcmVmaXggKyBcIi9cIiArIF9wYXJhbXMuZGF0YS5hcHBDb25maWcubG9nbztcbiAgICAgICAgX3BhcmFtcy5kYXRhLmNoYW5nZURhdGEubG9nbyA9IF9wYXJhbXMuZGF0YS5hcHBDb25maWcubG9nbztcbiAgICAgICAgLy9Sc3MuZG9uZShcImFwcENvbmZpZ0NoYW5nZWRcIiwgX3BhcmFtcyk7XG5cbiAgICAgIH0sXG4gICAgICAvLyB0eXBlOidtYXBDaGFuZ2VkJyxcbiAgICAgIC8vIGRhdGE6e1xuICAgICAgLy8gJ2FwcENvbmZpZyc6YXBwQ29uZmlnLFxuICAgICAgLy8gJ2NoYW5nZURhdGEnOnt9XG4gICAgICAvLyB9XG4gICAgICAvKipcbiAgICAgICAqIOWcsOWbvuebuOWFs1xuICAgICAgICogQHBhcmFtICBfcGFyYW1zIFxuICAgICAgICovXG4gICAgICBtYXBDaGFuZ2VkOiAoX3BhcmFtcykgPT4ge1xuICAgICAgICB2YXIgbmV3SnNvbiA9IHRoaXMudXRpbHMucmVDcmVhdGVPYmplY3QoX3BhcmFtcy5kYXRhLmFwcENvbmZpZy5tYXApO1xuXG4gICAgICAgIGlmIChuZXdKc29uLml0ZW1JZCAmJiBuZXdKc29uLml0ZW1JZCAhPT0gdGhpcy5hcHBDb25maWcubWFwLml0ZW1JZCkge1xuICAgICAgICAgIGlmICh0aGlzLmFwcENvbmZpZy5tYXAubWFwT3B0aW9ucykge1xuICAgICAgICAgICAgdGhpcy51dGlscy5kZWxldGVNYXBPcHRpb25zKHRoaXMuYXBwQ29uZmlnLm1hcC5tYXBPcHRpb25zKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXy5leHRlbmQodGhpcy5hcHBDb25maWcubWFwLCBuZXdKc29uKTtcbiAgICAgICAgLy8gdGhpcy5jb25maWdMb2FkZXIuYWRkTmVlZFZhbHVlcyh0aGlzLmFwcENvbmZpZyk7XG4gICAgICAgIC8vIHRoaXMuX2FkZERlZmF1bHRWYWx1ZXModGhpcy5hcHBDb25maWcpO1xuICAgICAgICBfcGFyYW1zLmRhdGEuYXBwQ29uZmlnID0gdGhpcy5nZXRBcHBDb25maWcoKTtcbiAgICAgICAgLy8gUnNzLmRvbmUoXCJhcHBDb25maWdDaGFuZ2VkXCIsIF9wYXJhbXMpO1xuICAgICAgICB0aGlzLmV2ZW50U2VydmljZS5yc3MuZW1pdCh0aGlzLmV2ZW50U2VydmljZS5fYXBwQ29uZmlnQ2hhbmdlZCwgX3BhcmFtcyk7XG4gICAgICB9LFxuICAgICAgLy8gdHlwZTondGhlbWVDaGFuZ2VkJyxcbiAgICAgIC8vIGRhdGE6e1xuICAgICAgLy8gJ2FwcENvbmZpZyc6YXBwQ29uZmlnLFxuICAgICAgLy8gJ2NoYW5nZURhdGEnOnt9XG4gICAgICAvLyB9XG4gICAgICAvKipcbiAgICAgICAqIOS4u+mimFxuICAgICAgICogQHBhcmFtICBfcGFyYW1zIFxuICAgICAgICovXG4gICAgICB0aGVtZUNoYW5nZWQ6IChfcGFyYW1zKSA9PiB7XG4gICAgICAgIHRoaXMuX2dldEFwcENvbmZpZ0Zyb21UaGVtZShfcGFyYW1zLmRhdGEpLnRoZW4oKGNvbmZpZykgPT4ge1xuICAgICAgICAgIHRoaXMuYXBwQ29uZmlnID0gY29uZmlnO1xuICAgICAgICAgIF9wYXJhbXMuZGF0YS5hcHBDb25maWcgPSB0aGlzLmdldEFwcENvbmZpZygpO1xuICAgICAgICAgIC8vIFJzcy5kb25lKFwiYXBwQ29uZmlnQ2hhbmdlZFwiLCBfcGFyYW1zKTtcbiAgICAgICAgICB0aGlzLmV2ZW50U2VydmljZS5yc3MuZW1pdCh0aGlzLmV2ZW50U2VydmljZS5fYXBwQ29uZmlnQ2hhbmdlZCwgX3BhcmFtcyk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIC8vIHR5cGU6J2xheW91dENoYW5nZWQnLFxuICAgICAgLy8gZGF0YTp7XG4gICAgICAvLyAnYXBwQ29uZmlnJzphcHBDb25maWcsXG4gICAgICAvLyAnY2hhbmdlRGF0YSc6e31cbiAgICAgIC8vIH1cbiAgICAgIC8qKlxuICAgICAgICog5biD5bGAXG4gICAgICAgKiBAcGFyYW0gIF9wYXJhbXMgXG4gICAgICAgKi9cbiAgICAgIGxheW91dENoYW5nZWQ6IChfcGFyYW1zKSA9PiB7XG4gICAgICAgIHRoaXMuX2dldEFwcENvbmZpZ0Zyb21UaGVtZShfcGFyYW1zLmRhdGEpLnRoZW4oKGNvbmZpZykgPT4ge1xuICAgICAgICAgIHRoaXMuYXBwQ29uZmlnID0gY29uZmlnO1xuICAgICAgICAgIF9wYXJhbXMuZGF0YS5hcHBDb25maWcgPSB0aGlzLmdldEFwcENvbmZpZygpO1xuICAgICAgICAgIC8vIFJzcy5kb25lKFwiYXBwQ29uZmlnQ2hhbmdlZFwiLCBfcGFyYW1zKTtcbiAgICAgICAgICB0aGlzLmV2ZW50U2VydmljZS5yc3MuZW1pdCh0aGlzLmV2ZW50U2VydmljZS5fYXBwQ29uZmlnQ2hhbmdlZCwgX3BhcmFtcyk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIC8vIHR5cGU6J3N0eWxlQ2hhbmdlZCcsXG4gICAgICAvLyBkYXRhOntcbiAgICAgIC8vICdhcHBDb25maWcnOmFwcENvbmZpZyxcbiAgICAgIC8vICdjaGFuZ2VEYXRhJzp7J25hbWUnOidibHVlJ31cbiAgICAgIC8vIH1cbiAgICAgIC8qKlxuICAgICAgICog5qC35byPXG4gICAgICAgKiBAcGFyYW0gIF9wYXJhbXMgXG4gICAgICAgKi9cbiAgICAgIHN0eWxlQ2hhbmdlZDogKF9wYXJhbXMpID0+IHtcbiAgICAgICAgdGhpcy5hcHBDb25maWcudGhlbWUuc3R5bGVzID0gdGhpcy5fZ2VuU3R5bGVzKHRoaXMuYXBwQ29uZmlnLnRoZW1lLnN0eWxlcywgX3BhcmFtcy5kYXRhLmFwcENvbmZpZy50aGVtZS5zdHlsZXNbMF0pO1xuICAgICAgICBfcGFyYW1zLmRhdGEuYXBwQ29uZmlnID0gdGhpcy5nZXRBcHBDb25maWcoKTtcbiAgICAgICAgLy8gUnNzLmRvbmUoXCJhcHBDb25maWdDaGFuZ2VkXCIsIF9wYXJhbXMpO1xuICAgICAgICB0aGlzLmV2ZW50U2VydmljZS5yc3MuZW1pdCh0aGlzLmV2ZW50U2VydmljZS5fYXBwQ29uZmlnQ2hhbmdlZCwgX3BhcmFtcyk7XG4gICAgICB9LFxuICAgICAgLy8gdHlwZTond2lkZ2V0Q2hhbmdlZCcsXG4gICAgICAvLyBkYXRhOntcbiAgICAgIC8vICdhcHBDb25maWcnOmFwcENvbmZpZyxcbiAgICAgIC8vICdjaGFuZ2VEYXRhJzp7XG4gICAgICAvLyAgICAgd2lkZ2V0TGlzdDpbXS8v5Y+Y5pu05b6Xd2lkZ2V05pWw57uE77yM5aaC5p6cYWN0aW9u5Li6YWRk77yM6YKj6L+Z5bCx5piv5re75Yqg55qEd2lkZ2V077yM5YW25LuW5ZCM55CGXG4gICAgICAvLyB9XG4gICAgICAvLyBcImFjdGlvblwiOlwiYWRkXCIvL2RlbGV0ZSxtb2RpZnlcbiAgICAgIC8vIH1cbiAgICAgIC8qKlxuICAgICAgICogd2lkZ2V0XG4gICAgICAgKiBAcGFyYW0gIF9wYXJhbXMgXG4gICAgICAgKi9cbiAgICAgIHdpZGdldENoYW5nZWQ6IChfcGFyYW1zKSA9PiB7XG4gICAgICAgIF9wYXJhbXMuZGF0YS5hcHBDb25maWcgPSB0aGlzLmdldEFwcENvbmZpZygpO1xuICAgICAgICAvLyBSc3MuZG9uZShcImFwcENvbmZpZ0NoYW5nZWRcIiwgX3BhcmFtcyk7XG4gICAgICAgIHRoaXMuZXZlbnRTZXJ2aWNlLnJzcy5lbWl0KHRoaXMuZXZlbnRTZXJ2aWNlLl9hcHBDb25maWdDaGFuZ2VkLCBfcGFyYW1zKTtcbiAgICAgIH0sXG4gICAgICAvLyB0eXBlOid3aWRnZXRQb29sQ2hhbmdlZCcsXG4gICAgICAvLyBkYXRhOntcbiAgICAgIC8vICdhcHBDb25maWcnOmFwcENvbmZpZyxcbiAgICAgIC8vICdjaGFuZ2VEYXRhJzp7fVxuICAgICAgLy8gfVxuICAgICAgLyoqXG4gICAgICAgKiBcbiAgICAgICAqIEBwYXJhbSAgX3BhcmFtcyBcbiAgICAgICAqL1xuICAgICAgd2lkZ2V0UG9vbENoYW5nZWQ6IChfcGFyYW1zOiBhbnkpID0+IHtcbiAgICAgICAgX3BhcmFtcy5kYXRhLmFwcENvbmZpZyA9IHRoaXMuZ2V0QXBwQ29uZmlnKCk7XG4gICAgICB9XG4gICAgICAvLyB7XG4gICAgICAvLyAgICAgXCJ0eXBlXCI6IFwiYWN0aW9uVHJpZ2dlcmVkXCIsXG4gICAgICAvLyAgICAgXCJkYXRhXCI6IHtcbiAgICAgIC8vICAgICAgICAgXCJhY3Rpb25JbmZvXCI6IHtcbiAgICAgIC8vICAgICAgICAgICAgIFwid2lkZ2V0XCI6IHtcblxuICAgICAgLy8gICAgICAgICAgICAgfVxuICAgICAgLy8gICAgICAgICAgICAgXCJpc09uU2NyZWVuXCI6IHRydWUsXG4gICAgICAvLyAgICAgICAgICAgICBcImFjdGlvblwiOiBcImhpZ2hMaWdodFwiXG4gICAgICAvLyAgICAgICAgIH1cbiAgICAgIC8vICAgICAgICAgXCJjaGFuZ2VEYXRhXCI6IHt9XG4gICAgICAvLyAgICAgfVxuICAgICAgLy8gfVxuICAgICAgLCBhY3Rpb25UcmlnZ2VyZWQ6IChfcGFyYW1zKSA9PiB7XG4gICAgICAgIHZhciBpZCA9IFwiXCIsXG4gICAgICAgICAgYWN0aW9uSW5mbyA9IF9wYXJhbXMuZGF0YS5hY3Rpb25JbmZvLFxuICAgICAgICAgIHdpZGdldCA9IGFjdGlvbkluZm8ud2lkZ2V0LFxuICAgICAgICAgIGN3aWRnZXQgPSB1bmRlZmluZWRcbiAgICAgICAgICA7XG4gICAgICAgIGlmICh3aWRnZXQuaWQpIHtcbiAgICAgICAgICAvL2N3aWRnZXQgPSB0aGlzLndpZGdldE1hbmFnZXIuZ2V0V2lkZ2V0QnlJZCh3aWRnZXQuaWQpO1xuICAgICAgICAgIGlkID0gd2lkZ2V0LmlkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHdpZGdldC51cmkgfHwgd2lkZ2V0Lm9sZFVyaSkge1xuICAgICAgICAgIHZhciB1cmkgPSB3aWRnZXQudXJpID8gd2lkZ2V0LnVyaSA6IHdpZGdldC5vbGRVcmk7XG4gICAgICAgICAgaWYgKHRoaXMuZ2xvYmFsUGFyYW1zLmFwcEluZm8uZm9sZGVyVXJsUHJlZml4KSB7XG4gICAgICAgICAgICB1cmkgPSB0aGlzLmdsb2JhbFBhcmFtcy5hcHBJbmZvLmZvbGRlclVybFByZWZpeCArIFwiL1wiICsgdXJpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgYXJyID0gdGhpcy51dGlscy5nZXRDb25maWdFbGVtZW50c0J5VXJpKHRoaXMuYXBwQ29uZmlnLCB1cmkpO1xuICAgICAgICAgIHZhciBfd2lkZ2V0ID0gXy5maW5kKGFyciwgKHcsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdy5pc09uU2NyZWVuID09PSBhY3Rpb25JbmZvLmlzT25TY3JlZW5cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAoX3dpZGdldCkge1xuICAgICAgICAgICAgLy8gY3dpZGdldCA9IHRoaXMud2lkZ2V0TWFuYWdlci5nZXRXaWRnZXRCeUlkKF93aWRnZXQuaWQpO1xuICAgICAgICAgICAgaWQgPSBfd2lkZ2V0LmlkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBpZiAoY3dpZGdldCkgey8v6L+Z5Y+q5pivd2lkZ2V0XG4gICAgICAgIC8vICAgICBjd2lkZ2V0Lm9uQWN0aW9uKGFjdGlvbkluZm8uYWN0aW9uLCBfcGFyYW1zKTtcbiAgICAgICAgLy8gfVxuICAgICAgICBfcGFyYW1zLmRhdGEuZWxlaWQgPSBpZDtcbiAgICAgICAgLy9Sc3MuZG9uZShcImFwcENvbmZpZ0NoYW5nZWRcIiwgX3BhcmFtcyk7XG5cbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIF9wYXJhbXMgPSBfLmV4dGVuZCh7fSwgcGFyYW1zKTtcbiAgICBfcHJlUHJvY2Vzc0NvbmZpZzREZXNpZ25bX3BhcmFtcy50eXBlXS5jYWxsKHRoaXMsIF9wYXJhbXMpO1xuXG4gIH1cbiAgX2dlblN0eWxlcyhhbGxTdHlsZSwgY3VycmVudFN0eWxlKSB7XG4gICAgdmFyIHN0eWxlcyA9IFtdO1xuICAgIHN0eWxlcy5wdXNoKGN1cnJlbnRTdHlsZSk7XG4gICAgXy5mb3JFYWNoKGFsbFN0eWxlLCBmdW5jdGlvbiAoX3N0eWxlKSB7XG4gICAgICBpZiAoc3R5bGVzLmluZGV4T2YoX3N0eWxlKSA8IDApIHtcbiAgICAgICAgc3R5bGVzLnB1c2goX3N0eWxlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc3R5bGVzO1xuICB9XG5cbn1cbiJdfQ==