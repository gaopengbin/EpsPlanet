import { Injectable } from '@angular/core';
import * as _ from "lodash";
import * as i0 from "@angular/core";
import * as i1 from "./widget-manager.service";
import * as i2 from "./utils.service";
import * as i3 from "./request.service";
import * as i4 from "../models/app-config";
import * as i5 from "./common.service";
import * as i6 from "./component-loader.service";
export class ConfigLoaderService {
    constructor(widgetManager, utils, httpService, globalParams, commonService, componentLoader) {
        this.widgetManager = widgetManager;
        this.utils = utils;
        this.httpService = httpService;
        this.globalParams = globalParams;
        this.commonService = commonService;
        this.componentLoader = componentLoader;
        this.urlParams = null;
        this.appConfig = null;
        this.rawAppConfig = null;
        this.configFile = null;
        this._configLoaded = false;
        this.portalSelf = null;
        this.options = null;
        this.urlParams = globalParams.urlParams;
        this._removeHash(this.urlParams);
    }
    _removeHash(urlParams) {
        for (var p in urlParams) {
            if (urlParams[p]) {
                urlParams[p] = urlParams[p].replace('#', '');
            }
        }
    }
    loadConfig(config) {
        console.time('Load Config');
        const def = this.commonService.createPromiseDefer();
        const _processResult = (appConfig) => {
            this.rawAppConfig = _.cloneDeep(appConfig);
            let globalConfigTemp = _.cloneDeep(this.globalParams.mapConfig);
            appConfig = _.merge(globalConfigTemp, appConfig);
            appConfig = this._upgradeAppConfig(appConfig);
            this._processAfterTryLoad(appConfig);
            if (appConfig.title) {
                document.title = appConfig.title;
            }
            this.loadWidgetsManifest(appConfig).then((appConfig) => {
                return this._upgradeAllWidgetsConfig(appConfig);
            }).then((appConfig) => {
                this._configLoaded = true;
                this.appConfig = appConfig;
                def.resolve(this.getAppConfig());
            });
        };
        if (typeof config === "string") {
            this._tryLoadConfig(config).then(_processResult).catch((error) => {
                if (error.readyState === 4 && error.status === 200 && error.responseText !== "") {
                    try {
                        var _obj = JSON.parse(error.responseText);
                    }
                    catch (error) {
                        console.log("将json串转为对象出错");
                        def.reject(error);
                        return;
                    }
                    _processResult(_obj);
                }
                else {
                    console.log("Load Config error");
                    def.reject(error);
                }
            });
        }
        else {
            _processResult(config);
        }
        return def.promise();
    }
    getAppConfig() {
        var c = _.clone(this.appConfig);
        c.getConfigElementById = (id) => {
            return this.utils.getConfigElementById(this, id);
        };
        c.getConfigElementsByName = (name) => {
            return this.utils.getConfigElementsByName(this, name);
        };
        c.visitElement = (cb) => {
            this.utils.visitElement(this, cb);
        };
        this._addAuthorizedCrossOriginDomains(this.portalSelf, c);
        return c;
    }
    _addAuthorizedCrossOriginDomains(portalSelf, appConfig) {
    }
    _tryLoadConfig(configJsonFile) {
        if (configJsonFile) {
            this.configFile = configJsonFile;
        }
        else {
            this.configFile = this.globalParams.appInfo.configFile;
        }
        return this.httpService.getJsonFile(this.configFile);
    }
    _processAfterTryLoad(appConfig) {
        this.addNeedValues(appConfig);
        this.processProxy(appConfig);
        return appConfig;
    }
    getUriInfo(uri) {
    }
    processWidgetSetting(setting) {
        this.utils.processWidgetSetting(setting);
    }
    _processWidgetJsons(appConfig) {
        this.utils.visitElement(appConfig, (e, info) => {
            if (info.isWidget && e.uri) {
                this.processWidgetSetting(e);
            }
        });
    }
    _processNoUriWidgets(appConfig) {
        var i = 0;
        this.utils.visitElement(appConfig, (e, info) => {
            if (info.isWidget) {
                i++;
                e.placeholderIndex = i;
            }
        });
    }
    _addElementId(appConfig) {
        var maxId = 0, i;
        this.utils.visitElement(appConfig, (e) => {
            if (!e.id) {
                return;
            }
            e.id = e.id.replace(/\//g, '_');
            var li = e.id.lastIndexOf('_');
            if (li > -1) {
                i = e.id.substr(li + 1);
                maxId = Math.max(maxId, i);
            }
        });
        this.utils.visitElement(appConfig, (e) => {
            if (!e.id) {
                maxId++;
                e.id = e.uri ? (e.uri.replace(/\//g, '_') + '_' + maxId) : ('' + '_' + maxId);
            }
        });
    }
    addNeedValues(appConfig) {
        this._processNoUriWidgets(appConfig);
        this._addElementId(appConfig);
        this._processWidgetJsons(appConfig);
    }
    processProxy(appConfig) {
        if (appConfig.httpProxy && appConfig.httpProxy.useProxy && appConfig.httpProxy.url) { }
        if (appConfig.httpProxy && appConfig.httpProxy.useProxy && appConfig.httpProxy.rules) {
        }
    }
    _upgradeAppConfig(appConfig) {
        var appVersion = this.globalParams.wabVersion;
        var configVersion = appConfig.wabVersion;
        var newConfig = {};
        if (appVersion === configVersion) {
            return appConfig;
        }
        {
            newConfig.isUpgraded = true;
            return newConfig;
        }
    }
    _upgradeAllWidgetsConfig(appConfig) {
        return Promise.resolve(appConfig);
    }
    loadWidgetsManifest(config) {
        let defs = [], def = this.commonService.createPromiseDefer();
        if (this.globalParams.jimuConfig.isSettings === true) {
        }
        else {
            this.utils.visitElement(config, (e) => {
                if (!e.widgets && e.uri) {
                    const _path = this.componentLoader.getComponentPath(e.uri);
                    if (_path) {
                        e.folderUrl = e.amdFolder = this.globalParams.widgetRootPath + "/" + _path + "/";
                        if (e.icon) {
                            e.icon = this.globalParams.widgetRootPath + "/" + _path + "/" + e.icon;
                        }
                        defs.push(this.widgetManager.loadWidgetManifest(e));
                    }
                    else {
                        console.log(`widget [${e.uri}] not config componentPath`);
                        defs.push(Promise.resolve(e));
                    }
                }
            });
        }
        Promise.all(defs).then(() => {
            def.resolve(config);
        });
        return def.promise();
    }
    _addNeedValuesForManifest(manifest) {
        this.utils.addManifestProperies(manifest);
        this.utils.processManifestLabel(manifest, this.globalParams.dojoConfig.locale);
    }
    _loadMergedWidgetManifests() {
        var file = this.globalParams.appInfo.appPath + 'widgets/widgets-manifest.json';
        return this.httpService.getJsonFile(file);
    }
}
ConfigLoaderService.ɵfac = function ConfigLoaderService_Factory(t) { return new (t || ConfigLoaderService)(i0.ɵɵinject(i1.WidgetManagerService), i0.ɵɵinject(i2.UtilsService), i0.ɵɵinject(i3.HttpReqService), i0.ɵɵinject(i4.AppGlobalConfig), i0.ɵɵinject(i5.CommonService), i0.ɵɵinject(i6.ComponentLoaderService)); };
ConfigLoaderService.ɵprov = i0.ɵɵdefineInjectable({ token: ConfigLoaderService, factory: ConfigLoaderService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConfigLoaderService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.WidgetManagerService }, { type: i2.UtilsService }, { type: i3.HttpReqService }, { type: i4.AppGlobalConfig }, { type: i5.CommonService }, { type: i6.ComponentLoaderService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLWxvYWRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZXBzZ2lzL3NlcnZpY2VzL2NvbmZpZy1sb2FkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDOzs7Ozs7OztBQWM1QixNQUFNLE9BQU8sbUJBQW1CO0lBUTlCLFlBQ1UsYUFBbUMsRUFDbkMsS0FBbUIsRUFDbkIsV0FBMkIsRUFDM0IsWUFBNkIsRUFDN0IsYUFBNEIsRUFDNUIsZUFBdUM7UUFMdkMsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQ25DLFVBQUssR0FBTCxLQUFLLENBQWM7UUFDbkIsZ0JBQVcsR0FBWCxXQUFXLENBQWdCO1FBQzNCLGlCQUFZLEdBQVosWUFBWSxDQUFpQjtRQUM3QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixvQkFBZSxHQUFmLGVBQWUsQ0FBd0I7UUFiakQsY0FBUyxHQUFRLElBQUksQ0FBQztRQUN0QixjQUFTLEdBQVEsSUFBSSxDQUFDO1FBQ3RCLGlCQUFZLEdBQVEsSUFBSSxDQUFDO1FBQ3pCLGVBQVUsR0FBVyxJQUFJLENBQUM7UUFDMUIsa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFDL0IsZUFBVSxHQUFRLElBQUksQ0FBQztRQUN2QixZQUFPLEdBQVEsSUFBSSxDQUFDO1FBUWxCLElBQUksQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDLFNBQVMsQ0FBQztRQUN4QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBS08sV0FBVyxDQUFDLFNBQWM7UUFDaEMsS0FBSyxJQUFJLENBQUMsSUFBSSxTQUFTLEVBQUU7WUFDdkIsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2hC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bUJBRmxCLE1BQU07dUZBRVAsbUJBQW1CO2NBSC9CLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHsgV2lkZ2V0TWFuYWdlclNlcnZpY2UgfSBmcm9tICcuL3dpZGdldC1tYW5hZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXRpbHNTZXJ2aWNlIH0gZnJvbSAnLi91dGlscy5zZXJ2aWNlJztcbmltcG9ydCB7IEFwcEdsb2JhbENvbmZpZyB9IGZyb20gJy4uL21vZGVscy9hcHAtY29uZmlnJztcbmltcG9ydCB7IENvbW1vblNlcnZpY2UgfSBmcm9tICcuL2NvbW1vbi5zZXJ2aWNlJztcbmltcG9ydCB7IENvbXBvbmVudExvYWRlclNlcnZpY2UgfSBmcm9tICcuL2NvbXBvbmVudC1sb2FkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBIdHRwUmVxU2VydmljZSB9IGZyb20gJy4vcmVxdWVzdC5zZXJ2aWNlJztcblxuLyoqXG4gKiBjcmVhdGUgYnkgcnVpciAxOTEwMTQgIGNvbmZpZ0xvYWRlci5qc1xuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDb25maWdMb2FkZXJTZXJ2aWNlIHtcbiAgdXJsUGFyYW1zOiBhbnkgPSBudWxsO1xuICBhcHBDb25maWc6IGFueSA9IG51bGw7XG4gIHJhd0FwcENvbmZpZzogYW55ID0gbnVsbDtcbiAgY29uZmlnRmlsZTogc3RyaW5nID0gbnVsbDtcbiAgX2NvbmZpZ0xvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwb3J0YWxTZWxmOiBhbnkgPSBudWxsO1xuICBvcHRpb25zOiBhbnkgPSBudWxsO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHdpZGdldE1hbmFnZXI6IFdpZGdldE1hbmFnZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgdXRpbHM6IFV0aWxzU2VydmljZSxcbiAgICBwcml2YXRlIGh0dHBTZXJ2aWNlOiBIdHRwUmVxU2VydmljZSxcbiAgICBwcml2YXRlIGdsb2JhbFBhcmFtczogQXBwR2xvYmFsQ29uZmlnLFxuICAgIHByaXZhdGUgY29tbW9uU2VydmljZTogQ29tbW9uU2VydmljZSxcbiAgICBwcml2YXRlIGNvbXBvbmVudExvYWRlcjogQ29tcG9uZW50TG9hZGVyU2VydmljZSkge1xuICAgIHRoaXMudXJsUGFyYW1zID0gZ2xvYmFsUGFyYW1zLnVybFBhcmFtcztcbiAgICB0aGlzLl9yZW1vdmVIYXNoKHRoaXMudXJsUGFyYW1zKTtcbiAgfVxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSB1cmxQYXJhbXMgXG4gICAqL1xuICBwcml2YXRlIF9yZW1vdmVIYXNoKHVybFBhcmFtczogYW55KSB7XG4gICAgZm9yICh2YXIgcCBpbiB1cmxQYXJhbXMpIHtcbiAgICAgIGlmICh1cmxQYXJhbXNbcF0pIHtcbiAgICAgICAgdXJsUGFyYW1zW3BdID0gdXJsUGFyYW1zW3BdLnJlcGxhY2UoJyMnLCAnJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiDliqDovb3mgLvnmoTphY3nva7mlofku7bvvIhjb25maWcuanNvbu+8iVxuICAgKi9cbiAgbG9hZENvbmZpZyhjb25maWc/OiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnNvbGUudGltZSgnTG9hZCBDb25maWcnKTtcbiAgICBjb25zdCBkZWYgPSB0aGlzLmNvbW1vblNlcnZpY2UuY3JlYXRlUHJvbWlzZURlZmVyKCk7XG5cbiAgICBjb25zdCBfcHJvY2Vzc1Jlc3VsdCA9IChhcHBDb25maWcpID0+IHtcbiAgICAgIC8v5Y6f5aeL6YWN572uXG4gICAgICB0aGlzLnJhd0FwcENvbmZpZyA9IF8uY2xvbmVEZWVwKGFwcENvbmZpZyk7XG4gICAgICBsZXQgZ2xvYmFsQ29uZmlnVGVtcCA9IF8uY2xvbmVEZWVwKHRoaXMuZ2xvYmFsUGFyYW1zLm1hcENvbmZpZykgO1xuICAgICAgLy8wOTI05pS55Li65ZCI5bm25YWo5bGA6YWN572uXG4gICAgICBhcHBDb25maWcgPV8ubWVyZ2UoZ2xvYmFsQ29uZmlnVGVtcCxhcHBDb25maWcpO1xuICAgICAgYXBwQ29uZmlnID0gdGhpcy5fdXBncmFkZUFwcENvbmZpZyhhcHBDb25maWcpO1xuICAgICAgdGhpcy5fcHJvY2Vzc0FmdGVyVHJ5TG9hZChhcHBDb25maWcpO1xuICAgICAgLy9jb25maWcuanNvbuS4reacieWumuS5iXRpdGxl5pe277yM5Lul5a6D5Li65YeGXG4gICAgICBpZiAoYXBwQ29uZmlnLnRpdGxlKSB7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gYXBwQ29uZmlnLnRpdGxlO1xuICAgICAgfVxuICAgICAgdGhpcy5sb2FkV2lkZ2V0c01hbmlmZXN0KGFwcENvbmZpZykudGhlbigoYXBwQ29uZmlnKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl91cGdyYWRlQWxsV2lkZ2V0c0NvbmZpZyhhcHBDb25maWcpO1xuICAgICAgfSkudGhlbigoYXBwQ29uZmlnKSA9PiB7XG4gICAgICAgIHRoaXMuX2NvbmZpZ0xvYWRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuYXBwQ29uZmlnID0gYXBwQ29uZmlnO1xuICAgICAgICBkZWYucmVzb2x2ZSh0aGlzLmdldEFwcENvbmZpZygpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgdGhpcy5fdHJ5TG9hZENvbmZpZyhjb25maWcpLnRoZW4oX3Byb2Nlc3NSZXN1bHQpLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBpZiAoZXJyb3IucmVhZHlTdGF0ZSA9PT0gNCAmJiBlcnJvci5zdGF0dXMgPT09IDIwMCAmJiBlcnJvci5yZXNwb25zZVRleHQgIT09IFwiXCIpIHtcbiAgICAgICAgICAvL+W9k2pzb27mlofku7ZtaW1l57G75Z6L6YWN572u5Li6XCJhcHBsaWNhdGlvbi94LWphdmFzY3JpcHRcIiDml7bvvIzkvJrlsIZqc29u5b2T5YGa5a2X56ym5Liy6L+U5Zue5Yiw6L+Z6YeMXG4gICAgICAgICAgLy/ov5nnp43mg4XlhrXlhbbku5bmnInor7fmsYJqc29u55qE5Zyw5pa56YO96ZyA6KaB5L+u5pS5XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBfb2JqID0gSlNPTi5wYXJzZShlcnJvci5yZXNwb25zZVRleHQpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWwhmpzb27kuLLovazkuLrlr7nosaHlh7rplJlcIik7XG4gICAgICAgICAgICBkZWYucmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgX3Byb2Nlc3NSZXN1bHQoX29iaik7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvYWQgQ29uZmlnIGVycm9yXCIpO1xuICAgICAgICAgIGRlZi5yZWplY3QoZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgX3Byb2Nlc3NSZXN1bHQoY29uZmlnKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlZi5wcm9taXNlKCk7XG4gIH1cbiAgLyoqXG4gICAqIFxuICAgKi9cbiAgZ2V0QXBwQ29uZmlnKCkge1xuICAgIHZhciBjID0gXy5jbG9uZSh0aGlzLmFwcENvbmZpZyk7XG4gICAgYy5nZXRDb25maWdFbGVtZW50QnlJZCA9IChpZCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMudXRpbHMuZ2V0Q29uZmlnRWxlbWVudEJ5SWQodGhpcywgaWQpO1xuICAgIH07XG5cbiAgICBjLmdldENvbmZpZ0VsZW1lbnRzQnlOYW1lID0gKG5hbWUpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnV0aWxzLmdldENvbmZpZ0VsZW1lbnRzQnlOYW1lKHRoaXMsIG5hbWUpO1xuICAgIH07XG5cbiAgICBjLnZpc2l0RWxlbWVudCA9IChjYikgPT4ge1xuICAgICAgdGhpcy51dGlscy52aXNpdEVsZW1lbnQodGhpcywgY2IpO1xuICAgIH07XG5cbiAgICB0aGlzLl9hZGRBdXRob3JpemVkQ3Jvc3NPcmlnaW5Eb21haW5zKHRoaXMucG9ydGFsU2VsZiwgYyk7XG5cbiAgICByZXR1cm4gYztcbiAgfVxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSBwb3J0YWxTZWxmIFxuICAgKiBAcGFyYW0gYXBwQ29uZmlnIFxuICAgKi9cbiAgX2FkZEF1dGhvcml6ZWRDcm9zc09yaWdpbkRvbWFpbnMocG9ydGFsU2VsZiwgYXBwQ29uZmlnKSB7XG5cbiAgfVxuICAvKipcbiAgICogXG4gICAqL1xuICBfdHJ5TG9hZENvbmZpZyhjb25maWdKc29uRmlsZT86IHN0cmluZykge1xuICAgIGlmIChjb25maWdKc29uRmlsZSkge1xuICAgICAgdGhpcy5jb25maWdGaWxlID0gY29uZmlnSnNvbkZpbGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29uZmlnRmlsZSA9IHRoaXMuZ2xvYmFsUGFyYW1zLmFwcEluZm8uY29uZmlnRmlsZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0SnNvbkZpbGUodGhpcy5jb25maWdGaWxlKTtcbiAgfVxuICBfcHJvY2Vzc0FmdGVyVHJ5TG9hZChhcHBDb25maWcpIHtcblxuICAgIC8vdGhpcy5fcHJvY2Vzc1VybFBhcmFtcyhhcHBDb25maWcpO1xuXG4gICAgdGhpcy5hZGROZWVkVmFsdWVzKGFwcENvbmZpZyk7XG4gICAgdGhpcy5wcm9jZXNzUHJveHkoYXBwQ29uZmlnKTtcblxuICAgIHJldHVybiBhcHBDb25maWc7XG4gIH1cbiAgZ2V0VXJpSW5mbyh1cmkpIHtcbiAgICAvL+W3suenu+akjeWIsHV0aWxzXG4gIH1cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0gc2V0dGluZyBcbiAgICovXG4gIHByb2Nlc3NXaWRnZXRTZXR0aW5nKHNldHRpbmcpIHtcbiAgICB0aGlzLnV0aWxzLnByb2Nlc3NXaWRnZXRTZXR0aW5nKHNldHRpbmcpO1xuICB9XG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIGFwcENvbmZpZyBcbiAgICovXG4gIF9wcm9jZXNzV2lkZ2V0SnNvbnMoYXBwQ29uZmlnKSB7XG4gICAgdGhpcy51dGlscy52aXNpdEVsZW1lbnQoYXBwQ29uZmlnLCAoZSwgaW5mbykgPT4ge1xuICAgICAgaWYgKGluZm8uaXNXaWRnZXQgJiYgZS51cmkpIHtcbiAgICAgICAgdGhpcy5wcm9jZXNzV2lkZ2V0U2V0dGluZyhlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIF9wcm9jZXNzTm9VcmlXaWRnZXRzKGFwcENvbmZpZykge1xuICAgIHZhciBpID0gMDtcbiAgICB0aGlzLnV0aWxzLnZpc2l0RWxlbWVudChhcHBDb25maWcsIChlLCBpbmZvKSA9PiB7XG4gICAgICBpZiAoaW5mby5pc1dpZGdldCkgey8qICYmICFlLnVyaSAqL1xuICAgICAgICBpKys7XG4gICAgICAgIGUucGxhY2Vob2xkZXJJbmRleCA9IGk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBfYWRkRWxlbWVudElkKGFwcENvbmZpZykge1xuICAgIHZhciBtYXhJZCA9IDAsXG4gICAgICBpO1xuXG4gICAgdGhpcy51dGlscy52aXNpdEVsZW1lbnQoYXBwQ29uZmlnLCAoZSkgPT4ge1xuICAgICAgaWYgKCFlLmlkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vZml4IGVsZW1lbnQgaWRcbiAgICAgIGUuaWQgPSBlLmlkLnJlcGxhY2UoL1xcLy9nLCAnXycpO1xuXG4gICAgICB2YXIgbGkgPSBlLmlkLmxhc3RJbmRleE9mKCdfJyk7XG4gICAgICBpZiAobGkgPiAtMSkge1xuICAgICAgICBpID0gZS5pZC5zdWJzdHIobGkgKyAxKTtcbiAgICAgICAgbWF4SWQgPSBNYXRoLm1heChtYXhJZCwgaSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnV0aWxzLnZpc2l0RWxlbWVudChhcHBDb25maWcsIChlKSA9PiB7XG4gICAgICBpZiAoIWUuaWQpIHtcbiAgICAgICAgbWF4SWQrKztcbiAgICAgICAgZS5pZCA9IGUudXJpID8gKGUudXJpLnJlcGxhY2UoL1xcLy9nLCAnXycpICsgJ18nICsgbWF4SWQpIDogKCcnICsgJ18nICsgbWF4SWQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGFkZE5lZWRWYWx1ZXMoYXBwQ29uZmlnKSB7XG4gICAgdGhpcy5fcHJvY2Vzc05vVXJpV2lkZ2V0cyhhcHBDb25maWcpO1xuICAgIHRoaXMuX2FkZEVsZW1lbnRJZChhcHBDb25maWcpO1xuICAgIHRoaXMuX3Byb2Nlc3NXaWRnZXRKc29ucyhhcHBDb25maWcpO1xuICB9XG4gIHByb2Nlc3NQcm94eShhcHBDb25maWcpIHtcblxuICAgIGlmIChhcHBDb25maWcuaHR0cFByb3h5ICYmIGFwcENvbmZpZy5odHRwUHJveHkudXNlUHJveHkgJiYgYXBwQ29uZmlnLmh0dHBQcm94eS51cmwpIHsgfVxuICAgIGlmIChhcHBDb25maWcuaHR0cFByb3h5ICYmIGFwcENvbmZpZy5odHRwUHJveHkudXNlUHJveHkgJiYgYXBwQ29uZmlnLmh0dHBQcm94eS5ydWxlcykge1xuXG4gICAgfVxuICB9XG4gIF91cGdyYWRlQXBwQ29uZmlnKGFwcENvbmZpZykge1xuICAgIHZhciBhcHBWZXJzaW9uID0gdGhpcy5nbG9iYWxQYXJhbXMud2FiVmVyc2lvbjtcbiAgICB2YXIgY29uZmlnVmVyc2lvbiA9IGFwcENvbmZpZy53YWJWZXJzaW9uO1xuICAgIHZhciBuZXdDb25maWc6IGFueSA9IHt9O1xuXG4gICAgaWYgKGFwcFZlcnNpb24gPT09IGNvbmZpZ1ZlcnNpb24pIHtcbiAgICAgIHJldHVybiBhcHBDb25maWc7XG4gICAgfSB7XG5cbiAgICAgIG5ld0NvbmZpZy5pc1VwZ3JhZGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXdDb25maWc7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIGFwcENvbmZpZyBcbiAgICovXG4gIF91cGdyYWRlQWxsV2lkZ2V0c0NvbmZpZyhhcHBDb25maWcpOiBQcm9taXNlPGFueT4ge1xuICAgIC8qXG4gICAgdmFyIGRlZnMgPSBbXTtcbiAgICBpZiAoYXBwQ29uZmlnLmlzVXBncmFkZWQgIT09IHVuZGVmaW5lZCAmJiAhYXBwQ29uZmlnLmlzVXBncmFkZWQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoYXBwQ29uZmlnKTtcbiAgICB9XG4gICAgZGVsZXRlIGFwcENvbmZpZy5pc1VwZ3JhZGVkO1xuICAgIHRoaXMudXRpbHMudmlzaXRFbGVtZW50KGFwcENvbmZpZywgKGUpID0+IHtcbiAgICAgIGlmICghZS51cmkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGUuY29uZmlnKSB7XG4gICAgICAgIC8v5pu05pawXG4gICAgICAgIGRlZnMucHVzaCh0aGlzLndpZGdldE1hbmFnZXIudHJ5TG9hZFdpZGdldENvbmZpZyhlKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlLnZlcnNpb24gPSBlLm1hbmlmZXN0ID8gZS5tYW5pZmVzdC52ZXJzaW9uIDogXCJcIjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIFByb21pc2UuYWxsKGRlZnMpLnRoZW4oKCkgPT4ge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKGFwcENvbmZpZyk7XG4gICAgfSk7Ki9cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGFwcENvbmZpZyk7XG4gIH1cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0gY29uZmlnIFxuICAgKi9cbiAgbG9hZFdpZGdldHNNYW5pZmVzdChjb25maWc6IGFueSkge1xuICAgIGxldCBkZWZzID0gW10sIGRlZiA9IHRoaXMuY29tbW9uU2VydmljZS5jcmVhdGVQcm9taXNlRGVmZXIoKTtcblxuICAgIGlmICh0aGlzLmdsb2JhbFBhcmFtcy5qaW11Q29uZmlnLmlzU2V0dGluZ3MgPT09IHRydWUpIHtcblxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnV0aWxzLnZpc2l0RWxlbWVudChjb25maWcsIChlKSA9PiB7XG4gICAgICAgIGlmICghZS53aWRnZXRzICYmIGUudXJpKSB7XG4gICAgICAgICAgY29uc3QgX3BhdGggPSB0aGlzLmNvbXBvbmVudExvYWRlci5nZXRDb21wb25lbnRQYXRoKGUudXJpKTtcbiAgICAgICAgICBpZiAoX3BhdGgpIHtcbiAgICAgICAgICAgIGUuZm9sZGVyVXJsID0gZS5hbWRGb2xkZXIgPSB0aGlzLmdsb2JhbFBhcmFtcy53aWRnZXRSb290UGF0aCArIFwiL1wiICsgX3BhdGggKyBcIi9cIjtcbiAgICAgICAgICAgIGlmIChlLmljb24pIHtcbiAgICAgICAgICAgICAgZS5pY29uID0gdGhpcy5nbG9iYWxQYXJhbXMud2lkZ2V0Um9vdFBhdGggKyBcIi9cIiArIF9wYXRoICsgXCIvXCIgKyBlLmljb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZzLnB1c2godGhpcy53aWRnZXRNYW5hZ2VyLmxvYWRXaWRnZXRNYW5pZmVzdChlKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGB3aWRnZXQgWyR7ZS51cml9XSBub3QgY29uZmlnIGNvbXBvbmVudFBhdGhgKTtcbiAgICAgICAgICAgIGRlZnMucHVzaChQcm9taXNlLnJlc29sdmUoZSkpO1xuICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgUHJvbWlzZS5hbGwoZGVmcykudGhlbigoKSA9PiB7XG4gICAgICBkZWYucmVzb2x2ZShjb25maWcpO1xuICAgIH0pO1xuICAgIHJldHVybiBkZWYucHJvbWlzZSgpO1xuICB9XG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIG1hbmlmZXN0IFxuICAgKi9cbiAgX2FkZE5lZWRWYWx1ZXNGb3JNYW5pZmVzdChtYW5pZmVzdDogT2JqZWN0KSB7XG4gICAgdGhpcy51dGlscy5hZGRNYW5pZmVzdFByb3BlcmllcyhtYW5pZmVzdCk7XG4gICAgdGhpcy51dGlscy5wcm9jZXNzTWFuaWZlc3RMYWJlbChtYW5pZmVzdCwgdGhpcy5nbG9iYWxQYXJhbXMuZG9qb0NvbmZpZy5sb2NhbGUpO1xuICB9XG4gIC8qKlxuICAgKiBcbiAgICovXG4gIF9sb2FkTWVyZ2VkV2lkZ2V0TWFuaWZlc3RzKCkge1xuICAgIHZhciBmaWxlID0gdGhpcy5nbG9iYWxQYXJhbXMuYXBwSW5mby5hcHBQYXRoICsgJ3dpZGdldHMvd2lkZ2V0cy1tYW5pZmVzdC5qc29uJztcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXRKc29uRmlsZShmaWxlKTtcbiAgfVxufVxuIl19