(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('lodash'), require('@angular/common/http'), require('ng-zorro-antd/result'), require('esri-loader'), require('@angular/forms'), require('ng-zorro-antd/icon'), require('@angular/platform-browser'), require('rxjs'), require('events'), require('@angular/router'), require('rxjs/operators'), require('@angular/cdk/portal'), require('@angular/cdk/overlay'), require('ng-zorro-antd/dropdown'), require('ng-zorro-antd/tabs'), require('ng-zorro-antd/menu')) :
    typeof define === 'function' && define.amd ? define('epsgis', ['exports', '@angular/common', '@angular/core', 'lodash', '@angular/common/http', 'ng-zorro-antd/result', 'esri-loader', '@angular/forms', 'ng-zorro-antd/icon', '@angular/platform-browser', 'rxjs', 'events', '@angular/router', 'rxjs/operators', '@angular/cdk/portal', '@angular/cdk/overlay', 'ng-zorro-antd/dropdown', 'ng-zorro-antd/tabs', 'ng-zorro-antd/menu'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.epsgis = {}, global.ng.common, global.ng.core, global['^4']['17']['15'], global.ng.common.http, global['^11']['1']['0'], global['^2']['12']['0'], global.ng.forms, global['^11']['1']['0'], global.ng.platformBrowser, global.rxjs, global.events, global.ng.router, global.rxjs.operators, global.ng.cdk.portal, global.ng.cdk.overlay, global['^11']['1']['0'], global['^11']['1']['0'], global['^11']['1']['0']));
}(this, (function (exports, i1$1, i0, _, i1, i1$3, esriLoader, i4, i2, i1$2, rxjs, events, i1$5, operators, portal, i1$4, i2$1, i5, i7) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var LogService = /** @class */ (function () {
        function LogService() {
        }
        LogService.overwriteLog = function (log) {
            var CONSOLE_METHODS = ['debug', 'error', 'info', "log", 'warn', 'time', 'timeEnd', 'count'];
            CONSOLE_METHODS.forEach(function (item) {
                window.console[item] = (function (oriLogFunc) {
                    return function () {
                        if (log) {
                            try {
                                oriLogFunc.call.apply(oriLogFunc, __spread([console], arguments));
                            }
                            catch (e) {
                                console.error('console.log error', e);
                            }
                        }
                    };
                })(window.console[item]);
            });
        };
        return LogService;
    }());

    var AppGlobalConfigToken = new i0.InjectionToken('app_global_config');
    var defaultGlobalConfigPath = "assets/global.json";
    var defuaultConfigPath = "assets/config.json";
    var AppInitService = /** @class */ (function () {
        function AppInitService(httpClient) {
            this.httpClient = httpClient;
        }
        AppInitService.prototype.getPath = function () {
            var fullPath, path;
            fullPath = window.location.pathname;
            if (fullPath === '/' || fullPath.substr(fullPath.length - 1) === '/') {
                path = fullPath;
            }
            else {
                var sections = fullPath.split('/');
                path = sections.join('/') + '/';
            }
            return path;
        };
        AppInitService.prototype.getUrlParams = function () {
            var s = window.location.search, p;
            if (s === '') {
                s = window.location.hash;
                if (s && s.indexOf('?') > 0) {
                    s = s.substring(s.indexOf('?'));
                }
            }
            if (s === '') {
                return {};
            }
            p = new Object();
            if (s.indexOf("?") != -1) {
                var strs = s.substr(1).split("&");
                for (var i = 0; i < strs.length; i++) {
                    p[strs[i].split("=")[0]] = decodeURIComponent((strs[i].split("=")[1]));
                }
            }
            return p;
        };
        AppInitService.prototype.init = function (__config) {
            var __mergedConfig = _.cloneDeep(defaultAppGlobalConfig);
            if (!__mergedConfig.path) {
                __mergedConfig.path = __mergedConfig.appInfo.path = this.getPath();
            }
            __mergedConfig.urlParams = _.merge(__mergedConfig.urlParams, this.getUrlParams());
            if (__mergedConfig.jimuConfig.isDesignMode === true
                && typeof __mergedConfig.urlParams.config === "string" && __mergedConfig.urlParams.config.length >= 1) {
                __mergedConfig.appInfo.configFile = "./project/" + __mergedConfig.urlParams.config + "/config.json";
                __mergedConfig.appInfo.extendInitjs = "./project/" + __mergedConfig.urlParams.config + "/thirdpartyLibs/init.js";
                __mergedConfig.appInfo.folderUrlPrefix = "./project/" + __mergedConfig.urlParams.config;
            }
            if (__config) {
                __mergedConfig = _.merge(__mergedConfig, __config);
            }
            this._mergedConfig = __mergedConfig;
            return this;
        };
        AppInitService.prototype.loadGlobalConfig = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this._mergedConfig.globalConfigFilePath = _this._mergedConfig.globalConfigFilePath || defaultGlobalConfigPath;
                if (_this._mergedConfig.globalConfigFilePath) {
                    _this.httpClient.get(_this._mergedConfig.globalConfigFilePath).toPromise().then(function (cfg) {
                        if (cfg) {
                            _this._mergedConfig = Object.assign(Object.assign({}, _this._mergedConfig), cfg);
                            if (cfg.title) {
                                document.title = cfg.title;
                            }
                        }
                        LogService.overwriteLog(_this._mergedConfig.log);
                        resolve(true);
                    }).catch(function (err) {
                        console.log("配置文件global.json读取失败");
                        resolve(true);
                    });
                }
                else {
                    console.log("没有global.json");
                    resolve(true);
                }
            });
        };
        AppInitService.prototype.getConfig = function () {
            return this._mergedConfig;
        };
        return AppInitService;
    }());
    AppInitService.ɵfac = function AppInitService_Factory(t) { return new (t || AppInitService)(i0.ɵɵinject(i1.HttpClient)); };
    AppInitService.ɵprov = i0.ɵɵdefineInjectable({ token: AppInitService, factory: AppInitService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppInitService, [{
                type: i0.Injectable,
                args: [{ providedIn: 'root' }]
            }], function () { return [{ type: i1.HttpClient }]; }, null);
    })();
    var AppGlobalConfig = /** @class */ (function () {
        function AppGlobalConfig() {
        }
        return AppGlobalConfig;
    }());
    AppGlobalConfig.ɵfac = function AppGlobalConfig_Factory(t) { return new (t || AppGlobalConfig)(); };
    AppGlobalConfig.ɵprov = i0.ɵɵdefineInjectable({ token: AppGlobalConfig, factory: AppGlobalConfig.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppGlobalConfig, [{
                type: i0.Injectable,
                args: [{ providedIn: 'root' }]
            }], null, null);
    })();
    var defaultAppGlobalConfig = {
        title: "EPSGIS",
        subtitle: "山维科技",
        logo: "",
        apiRootUrl: "",
        widgetRootPath: "widgets",
        wabVersion: undefined,
        path: "",
        urlParams: {
            mode: ""
        },
        jimuConfig: {
            zIndex: "auto",
            isDesignMode: false,
            isSettings: false,
            mapId: "mapContainer"
        },
        appInfo: {
            path: "",
            configFile: defuaultConfigPath,
            extendInitjs: "",
            folderUrlPrefix: "",
            appPath: "",
            isRunInMobile: false
        },
        dojoConfig: {
            locale: ""
        },
        epsoConfig: {
            showWorkAreaInAddUser: true,
            defaultCityCode: "520100"
        },
        globalConfigFilePath: defaultGlobalConfigPath,
        menuConfig: {
            notReuseRoutes: [],
            notShowInTabRoutes: [],
            menuData: []
        },
        mapConfig: {
            is3D: false,
            jsApi: ""
        },
        log: true
    };

    var ComponentContainerDirective = /** @class */ (function () {
        function ComponentContainerDirective(viewContainerRef) {
            this.viewContainerRef = viewContainerRef;
        }
        return ComponentContainerDirective;
    }());
    ComponentContainerDirective.ɵfac = function ComponentContainerDirective_Factory(t) { return new (t || ComponentContainerDirective)(i0.ɵɵdirectiveInject(i0.ViewContainerRef)); };
    ComponentContainerDirective.ɵdir = i0.ɵɵdefineDirective({ type: ComponentContainerDirective, selectors: [["", "component-host", ""]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ComponentContainerDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[component-host]'
                    }]
            }], function () { return [{ type: i0.ViewContainerRef }]; }, null);
    })();

    var EpsGisDirectivesModule = /** @class */ (function () {
        function EpsGisDirectivesModule() {
        }
        return EpsGisDirectivesModule;
    }());
    EpsGisDirectivesModule.ɵmod = i0.ɵɵdefineNgModule({ type: EpsGisDirectivesModule });
    EpsGisDirectivesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function EpsGisDirectivesModule_Factory(t) { return new (t || EpsGisDirectivesModule)(); }, imports: [[i1$1.CommonModule]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(EpsGisDirectivesModule, { declarations: [ComponentContainerDirective], imports: [i1$1.CommonModule], exports: [ComponentContainerDirective] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EpsGisDirectivesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i1$1.CommonModule],
                        declarations: [
                            ComponentContainerDirective
                        ],
                        exports: [ComponentContainerDirective]
                    }]
            }], null, null);
    })();

    (function (WidgetType) {
        WidgetType["widget"] = "widget";
        WidgetType["panel"] = "panel";
        WidgetType["icon"] = "icon";
    })(exports.WidgetType || (exports.WidgetType = {}));
    var WidgetPosition = /** @class */ (function () {
        function WidgetPosition(top, left, bottom, right, height, width, zIndex, position, relativeTo) {
            if (relativeTo === void 0) { relativeTo = ""; }
            this.top = top;
            this.left = left;
            this.bottom = bottom;
            this.right = right;
            this.height = height;
            this.width = width;
            this.zIndex = zIndex;
            this.position = position;
            this.relativeTo = relativeTo;
            this.position = "absolute";
        }
        return WidgetPosition;
    }());
    (function (WidgetState) {
        WidgetState["closed"] = "closed";
        WidgetState["opened"] = "opened";
        WidgetState["active"] = "active";
    })(exports.WidgetState || (exports.WidgetState = {}));
    (function (WidgetWindowState) {
        WidgetWindowState["normal"] = "normal";
        WidgetWindowState["minimized"] = "minimized";
        WidgetWindowState["maximized"] = "maximized";
        WidgetWindowState["collapsed"] = "collapsed";
    })(exports.WidgetWindowState || (exports.WidgetWindowState = {}));

    var BaseWidget = /** @class */ (function () {
        function BaseWidget() {
            this.type = exports.WidgetType.widget;
            this.id = "";
            this.label = undefined;
            this.icon = undefined;
            this.uri = undefined;
            this.originPosition = new WidgetPosition();
            this.position = new WidgetPosition();
            this.config = undefined;
            this.openAtStart = false;
            this.map = null;
            this.view = null;
            this.appConfig = null;
            this.folderUrl = null;
            this.state = exports.WidgetState.closed;
            this.windowState = exports.WidgetWindowState.normal;
            this.started = false;
            this.name = '';
            this.moveTopOnActive = true;
            this.widgetConfig = null;
            this.configId = null;
            this.style = "";
            this.title = "";
            this.tooltip = "";
            this.reqPara = undefined;
            this.gid = "";
            this.inPanel = true;
            this.isOnScreen = true;
            this.minZindex = 102;
            this._compInfo = { uri: "", name: "BaseWidgetComponent", path: "" };
        }
        BaseWidget.prototype.afterNgOnInit = function () {
        };
        BaseWidget.prototype.afterNgAfterViewInit = function () {
        };
        BaseWidget.prototype.ngOnInit = function () {
            this.afterNgOnInit();
        };
        BaseWidget.prototype.ngAfterViewInit = function () {
            this.afterNgAfterViewInit();
        };
        BaseWidget.prototype.ngOnDestroy = function () {
        };
        BaseWidget.prototype.getCompInfo = function () {
            return this._compInfo;
        };
        BaseWidget.prototype.setServiceInjector = function (serviceInjector) {
            if (!serviceInjector)
                return;
            this.globalParams = serviceInjector.config;
            this.utils = serviceInjector.utils;
            this.commonService = serviceInjector.commonService;
            this.httpService = serviceInjector.httpService;
            this.configLoader = serviceInjector.configLoader;
            this.configManager = serviceInjector.configManager;
            this.mapManager = serviceInjector.mapManager;
            this.panelManager = serviceInjector.panelManager;
            this.widgetManager = serviceInjector.widgetManager;
            this.widgetPlaceHolder = serviceInjector.widgetPlaceHolder;
            this.layoutManager = serviceInjector.layoutManager;
            this.eventService = this.layoutManager.eventService;
            this.jsEventManager = serviceInjector.jsEventManager;
            this.componentLoader = serviceInjector.componentManager;
            this.modalManager = serviceInjector.modalManaer;
            this.settingService = serviceInjector.settingService;
        };
        BaseWidget.prototype.setPosition = function (positionConfig) {
            this.position = this.commonService.getPosition(positionConfig);
            this.originPosition = _.cloneDeep(this.position);
        };
        BaseWidget.prototype.changePosition = function (positionConfig) {
            this.position = this.commonService.getPosition(positionConfig);
        };
        BaseWidget.prototype.setState = function (state) {
            this.state = state;
        };
        BaseWidget.prototype.startup = function () {
            this.started = true;
        };
        BaseWidget.prototype.onOpen = function () {
            this.state = exports.WidgetState.opened;
        };
        BaseWidget.prototype.resize = function (position) {
        };
        BaseWidget.prototype.onDeActive = function () {
        };
        BaseWidget.prototype.onClose = function () {
            this.state = exports.WidgetState.closed;
        };
        BaseWidget.prototype.onAction = function (name, data) {
        };
        BaseWidget.prototype.setZIndex = function (index) {
            switch (index) {
                case "active":
                    this.position.zIndex = this.minZindex;
                    break;
                case "deactive":
                    this.position.zIndex = "auto";
                    break;
                default:
                    this.position.zIndex = index;
                    break;
            }
        };
        BaseWidget.prototype.onNormalize = function () {
        };
        BaseWidget.prototype.onMinimize = function () { };
        BaseWidget.prototype.onMaximize = function () {
        };
        BaseWidget.prototype.changeMap = function (map) {
            this.map = map;
            this.eventService.rss.emit(this.eventService._mapChanged, map);
        };
        BaseWidget.prototype.onMapChange = function (map) {
        };
        BaseWidget.prototype.changeView = function (view) {
            this.view = view;
            this.eventService.rss.emit(this.eventService._viewChanged, view);
        };
        BaseWidget.prototype.onViewChange = function (view) {
        };
        Object.defineProperty(BaseWidget.prototype, "isSettingMode", {
            get: function () {
                var _a;
                return ((_a = this.globalParams) === null || _a === void 0 ? void 0 : _a.urlParams["mode"]) === "config";
            },
            enumerable: false,
            configurable: true
        });
        return BaseWidget;
    }());
    BaseWidget.ɵfac = function BaseWidget_Factory(t) { return new (t || BaseWidget)(); };
    BaseWidget.ɵdir = i0.ɵɵdefineDirective({ type: BaseWidget });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseWidget, [{
                type: i0.Directive
            }], function () { return []; }, null);
    })();

    var RequestResultModel = /** @class */ (function () {
        function RequestResultModel(success, msg, data) {
            if (msg === void 0) { msg = ""; }
            if (data === void 0) { data = null; }
            this.success = success;
            this.msg = msg;
            this.data = data;
            this.error = { errorCode: "", errorMsg: "" };
        }
        return RequestResultModel;
    }());
    (function (OrderByType) {
        OrderByType[OrderByType["asc"] = 0] = "asc";
        OrderByType[OrderByType["desc"] = 1] = "desc";
    })(exports.OrderByType || (exports.OrderByType = {}));

    var ComponentRegistry = new Map();
    var ComponentRegister = function (info) {
        return function (cls) {
            if (cls.getCompInfo && typeof cls.getCompInfo === "function") {
                var c = cls.getCompInfo();
                if (!info.path) {
                    info.path = c.path;
                }
                if (!info.name) {
                    info.name = c.name;
                }
            }
            cls.prototype.getCompInfo = function () {
                return info;
            };
            var reg = Object.assign({}, info, { component: cls });
            ComponentRegistry.set(info.uri.toLocaleLowerCase(), reg);
        };
    };
    function findComponentInfo(uri) {
        if (!uri) {
            return undefined;
        }
        return ComponentRegistry.get(uri.toLocaleLowerCase());
    }

    var JsonEditorComponent_1;
    var _c0 = ["jsoneditor"];
    var JsonEditorComponent = JsonEditorComponent_1 = /** @class */ (function () {
        function JsonEditorComponent(zone) {
            this.jsonRess = [
                "assets/json-editor/930/jsoneditor.min.css",
                "assets/json-editor/930/jsoneditor.min.js"
            ];
            this.dataChange = new i0.EventEmitter();
            this.onChange = new i0.EventEmitter();
            this.onError = new i0.EventEmitter();
            this.disabled = false;
            this.zone = zone;
        }
        Object.defineProperty(JsonEditorComponent.prototype, "data", {
            get: function () {
                return this._data;
            },
            set: function (val) {
                this._data = val;
                this.writeValue(val);
                this.dataChange.emit(val);
            },
            enumerable: false,
            configurable: true
        });
        JsonEditorComponent.prototype.ngOnInit = function () {
        };
        JsonEditorComponent.prototype.ngAfterViewInit = function () {
            this.initEditor(this.editorOptions || {});
        };
        JsonEditorComponent.prototype.ngOnDestroy = function () {
            this.destroy();
        };
        JsonEditorComponent.prototype.initEditor = function (options) {
            var _this = this;
            var defaultOptions = {
                enableSort: true,
                colorPicker: true,
                escapeUnicode: false,
                sortObjectKeys: true,
                history: true,
                modes: ['tree', 'view', 'form', 'code', 'text', 'preview'],
                language: "zh-CN",
                search: true,
                onChangeJSON: function (json) {
                },
                onChangeText: function (jsonString) {
                },
                onError: function (error) {
                }
            };
            if (this.onError.observers.length >= 1) {
                defaultOptions.onError = function (v) {
                    _this.onError.emit(v);
                };
            }
            var newOptions = Object.assign(options, defaultOptions);
            newOptions.onChange = function () {
                if (_this.editor) {
                    var value = _this.editor.get();
                    _this.updateValue(value);
                }
            },
                this.editor = new JSONEditor(this.jsonEditorContianer.nativeElement, newOptions, this.data);
        };
        Object.defineProperty(JsonEditorComponent.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (v) {
                if (v !== this._value) {
                    this._value = v;
                    this._onChange(v);
                }
            },
            enumerable: false,
            configurable: true
        });
        JsonEditorComponent.prototype._onChange = function (_) {
        };
        JsonEditorComponent.prototype._onTouched = function () {
        };
        JsonEditorComponent.prototype.registerOnChange = function (fn) {
            this._onChange = fn;
        };
        JsonEditorComponent.prototype.registerOnTouched = function (fn) {
            this._onTouched = fn;
        };
        JsonEditorComponent.prototype.setDisabledState = function (isDisabled) {
            this.disabled = isDisabled;
        };
        JsonEditorComponent.prototype.updateValue = function (value) {
            var _this = this;
            this.zone.run(function () {
                _this.value = value;
                _this._onTouched();
                if (_this.editor) {
                    _this.onChange.emit(value);
                }
            });
        };
        JsonEditorComponent.prototype.writeValue = function (value) {
            this._value = value;
            if (this.editor) {
                this.editor.set(value);
            }
        };
        JsonEditorComponent.prototype.getEditor = function () {
            return this.editor;
        };
        JsonEditorComponent.prototype.expandAll = function () {
            if (this.editor) {
                this.editor.expandAll();
            }
        };
        JsonEditorComponent.prototype.collapseAll = function () {
            if (this.editor) {
                this.editor.collapseAll();
            }
        };
        JsonEditorComponent.prototype.destroy = function () {
            if (this.editor) {
                this.editor.destroy();
            }
        };
        JsonEditorComponent.prototype.focus = function () {
            if (this.editor) {
                this.editor.focus();
            }
        };
        JsonEditorComponent.prototype.setMode = function (mode) {
            if (this.editor) {
                this.editor.setMode(mode);
            }
        };
        JsonEditorComponent.prototype.setModes = function (modes) {
            if (this.editor) {
                this.editor.setModes(modes);
            }
        };
        JsonEditorComponent.prototype.setName = function (name) {
            if (this.editor) {
                this.editor.setName(name);
            }
        };
        JsonEditorComponent.prototype.setSchema = function (schema) {
            if (this.editor) {
                this.editor.setSchema(schema);
            }
        };
        JsonEditorComponent.prototype.setText = function (jsonString) {
            if (this.editor) {
                this.editor.setText(jsonString);
            }
        };
        JsonEditorComponent.prototype.getMode = function () {
            if (this.editor) {
                return this.editor.getMode();
            }
        };
        JsonEditorComponent.prototype.getName = function () {
            if (this.editor) {
                return this.editor.getName();
            }
        };
        JsonEditorComponent.prototype.getText = function () {
            if (this.editor) {
                return this.editor.getText();
            }
        };
        return JsonEditorComponent;
    }());
    JsonEditorComponent.ɵfac = function JsonEditorComponent_Factory(t) { return new (t || JsonEditorComponent)(i0.ɵɵdirectiveInject(i0.NgZone)); };
    JsonEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: JsonEditorComponent, selectors: [["epsgis-json-editor"]], viewQuery: function JsonEditorComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0, 3);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.jsonEditorContianer = _t.first);
            }
        }, inputs: { data: "data", editorOptions: ["options", "editorOptions"], treeMaxHeight: "treeMaxHeight" }, outputs: { dataChange: "dataChange", onChange: "onChange", onError: "onError" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: i4.NG_VALUE_ACCESSOR,
                    useExisting: i0.forwardRef(function () { return JsonEditorComponent_1; }),
                    multi: true
                }
            ])], decls: 2, vars: 0, consts: [["jsoneditor", ""]], template: function JsonEditorComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "div", null, 0);
            }
        }, styles: ["[_nghost-%COMP%]     .jsoneditor-poweredBy{\n      display: none;\n    }\n    [_nghost-%COMP%] > div[_ngcontent-%COMP%]{\n        height: 100%;\n    }"] });
    JsonEditorComponent = JsonEditorComponent_1 = __decorate([
        ComponentRegister({
            uri: 'epsgis-json-editor',
            path: "components/shared/json-editor"
        })
    ], JsonEditorComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(JsonEditorComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'epsgis-json-editor',
                        providers: [
                            {
                                provide: i4.NG_VALUE_ACCESSOR,
                                useExisting: i0.forwardRef(function () { return JsonEditorComponent; }),
                                multi: true
                            }
                        ],
                        template: "<div #jsoneditor></div>",
                        styles: ["\n    :host ::ng-deep .jsoneditor-poweredBy{\n      display: none;\n    }\n    :host>div{\n        height: 100%;\n    }\n  "]
                    }]
            }], function () { return [{ type: i0.NgZone }]; }, { jsonEditorContianer: [{
                    type: i0.ViewChild,
                    args: ["jsoneditor", { static: true }]
                }], data: [{
                    type: i0.Input
                }], dataChange: [{
                    type: i0.Output
                }], editorOptions: [{
                    type: i0.Input,
                    args: ["options"]
                }], treeMaxHeight: [{
                    type: i0.Input
                }], onChange: [{
                    type: i0.Output
                }], onError: [{
                    type: i0.Output
                }] });
    })();

    var BaseSettingComponent = /** @class */ (function (_super) {
        __extends(BaseSettingComponent, _super);
        function BaseSettingComponent() {
            var _this = _super.call(this) || this;
            _this.configFileName = "config.json";
            _this.manifestFileName = "manifest.json";
            _this.validateResult = new RequestResultModel(false);
            _this._needLoadManifest = false;
            return _this;
        }
        Object.defineProperty(BaseSettingComponent.prototype, "needLoadManifest", {
            get: function () {
                return this._needLoadManifest;
            },
            set: function (value) {
                this._needLoadManifest = value;
            },
            enumerable: false,
            configurable: true
        });
        BaseSettingComponent.prototype.ngOnInit = function () {
            _super.prototype.ngOnInit.call(this);
        };
        BaseSettingComponent.prototype.ngAfterViewInit = function () {
            _super.prototype.ngAfterViewInit.call(this);
        };
        BaseSettingComponent.prototype.ngOnDestroy = function () {
            _super.prototype.ngOnDestroy.call(this);
        };
        Object.defineProperty(BaseSettingComponent.prototype, "configJsonPhysicalPath", {
            get: function () {
                return this.configJsonWebPath.replace(this.globalParams.widgetRootPath + "/", "");
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BaseSettingComponent.prototype, "manifestJsonPhysicalPath", {
            get: function () {
                return this.widgetInstance.getCompInfo().path + "/" + this.manifestFileName;
            },
            enumerable: false,
            configurable: true
        });
        BaseSettingComponent.prototype.getValidateResult = function () {
            return this.validateResult;
        };
        BaseSettingComponent.prototype.setValidateResult = function (success, errMsg, data) {
            this.validateResult.success = success;
            this.validateResult.msg = errMsg;
            this.validateResult.data = data;
        };
        BaseSettingComponent.prototype.saveConfigJson = function (json) {
            return this.settingService.saveConfig({ filePath: this.configJsonPhysicalPath, content: (typeof json === "string" ? json : JSON.stringify(json)) });
        };
        BaseSettingComponent.prototype.saveManifestJson = function (json) {
            return this.settingService.saveConfig({ filePath: this.manifestJsonPhysicalPath, content: typeof json === "string" ? json : JSON.stringify(json) });
        };
        BaseSettingComponent.prototype.onSaveError = function (error) {
            console.error(error);
        };
        return BaseSettingComponent;
    }(BaseWidget));
    BaseSettingComponent.ɵfac = function BaseSettingComponent_Factory(t) { return new (t || BaseSettingComponent)(); };
    BaseSettingComponent.ɵdir = i0.ɵɵdefineDirective({ type: BaseSettingComponent, features: [i0.ɵɵInheritDefinitionFeature] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseSettingComponent, [{
                type: i0.Directive
            }], function () { return []; }, null);
    })();

    var _c0$1 = ["config"];
    var _c1 = ["manifest"];
    function WidgetSettingComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r4_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 6);
            i0.ɵɵelementStart(1, "span");
            i0.ɵɵelementStart(2, "input", 7);
            i0.ɵɵlistener("ngModelChange", function WidgetSettingComponent_div_1_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r4_1); var ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.switchChecked = $event; })("change", function WidgetSettingComponent_div_1_Template_input_change_2_listener($event) { i0.ɵɵrestoreView(_r4_1); var ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.changeMode($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵtext(3, " \u7F16\u8F91\u5668 ");
            i0.ɵɵelementStart(4, "label", 8);
            i0.ɵɵelement(5, "em");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx_r0.switchChecked);
        }
    }
    var _c2 = function () { return { name: "\u7EC4\u4EF6\u914D\u7F6E\u4FE1\u606F" }; };
    var _c3 = function () { return { name: "\u7EC4\u4EF6\u4FE1\u606F" }; };
    var WidgetSettingComponent = /** @class */ (function (_super) {
        __extends(WidgetSettingComponent, _super);
        function WidgetSettingComponent() {
            var _this = _super.call(this) || this;
            _this.currentMode = 0;
            _this.showSwitchBtn = false;
            _this.previousMode = 0;
            _this.switchChecked = false;
            _this.needLoadManifest = true;
            return _this;
        }
        WidgetSettingComponent.prototype.ngOnInit = function () {
            this.setValidateResult(true);
            this.setServiceInjector(this.widgetInstance.componentLoader.getServiceInjector());
            this.widgetConfig = this.widgetInstance.widgetConfig;
            this.configJsonWebPath = this.widgetConfig.folderUrl.split('?')[0] + (this.widgetConfig.configPath || this.configFileName);
            this.manifestJsonWebPath = this.widgetConfig.folderUrl.split('?')[0] + this.manifestFileName;
            _super.prototype.ngOnInit.call(this);
        };
        WidgetSettingComponent.prototype.ngAfterViewInit = function () {
            this.loadWidgetConfig();
            if (this.needLoadManifest) {
                this.loadWidgetManifest();
            }
            _super.prototype.ngAfterViewInit.call(this);
        };
        WidgetSettingComponent.prototype.ngOnDestroy = function () {
            _super.prototype.ngOnDestroy.call(this);
        };
        WidgetSettingComponent.prototype.switchToConfigOrManifest = function () {
            if (this.currentMode != 2) {
                this.previousMode = this.currentMode;
                this.showSwitchBtn = false;
                this.currentMode = 2;
            }
            else {
                this.currentMode = this.previousMode;
                if (this.settingComponentInstance) {
                    this.showSwitchBtn = true;
                }
            }
        };
        WidgetSettingComponent.prototype.changeMode = function (evt) {
            if (this.switchChecked) {
                this.currentMode = 1;
            }
            else {
                this.currentMode = 3;
            }
        };
        WidgetSettingComponent.prototype.onSaveError = function (error) {
            if (this.settingComponentInstance) {
                this.settingComponentInstance.onSaveError(error);
            }
            else {
                console.error(error);
            }
        };
        WidgetSettingComponent.prototype.saveAll = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var result;
                switch (_this.currentMode) {
                    case 1:
                        result = _this.getValidateResult();
                        if (result.success && _this.editorConfig) {
                            _this.saveConfigJson(_this.editorConfig.getText()).then(function (res) {
                                if (res.success) {
                                    res.data = {
                                        config: _this.editorConfig.value,
                                        manifest: _this.editorManifest.value
                                    };
                                }
                                resolve(res);
                            }).catch(reject);
                        }
                        else {
                            resolve(new RequestResultModel(false, "验证失败"));
                        }
                        break;
                    case 2:
                        result = _this.getValidateResult();
                        if (result.success && _this.editorManifest) {
                            _this.saveManifestJson(_this.editorManifest.getText()).then(function (res) {
                                if (res.success) {
                                    res.data = {
                                        config: _this.editorConfig.value,
                                        manifest: _this.editorManifest.value
                                    };
                                }
                                resolve(res);
                            }).catch(reject);
                        }
                        else {
                            resolve(new RequestResultModel(false, "验证失败"));
                        }
                        break;
                    case 3:
                        if (_this.settingComponentInstance) {
                            result = _this.settingComponentInstance.getValidateResult();
                            if (result.success) {
                                _this.settingComponentInstance.saveConfigJson(result.data).then(function (res) {
                                    if (res.success) {
                                        res.data = {
                                            config: result.data,
                                            manifest: _this.editorManifest.value
                                        };
                                    }
                                    resolve(res);
                                }).catch(reject);
                            }
                            else {
                                resolve(new RequestResultModel(false, "验证失败"));
                            }
                        }
                        else {
                            resolve(new RequestResultModel(false, "无组件，无法保存"));
                        }
                        break;
                    default:
                        resolve(new RequestResultModel(false, "不支持的模式"));
                        break;
                }
            });
        };
        WidgetSettingComponent.prototype.loadWidgetConfig = function () {
            var _this = this;
            if (!this.configJsonWebPath) {
                console.log("configJsonWebPath is null");
                return;
            }
            this.settingService.getConfigContent(this.configJsonWebPath).then(function (result) {
                _this.configJson = result;
                _this.onConfigJsonLoad(true, null);
            }).catch(function (err) { return _this.onConfigJsonLoad(false, err); });
        };
        WidgetSettingComponent.prototype.loadWidgetManifest = function () {
            var _this = this;
            if (!this.manifestJsonWebPath) {
                console.log("manifestJsonWebPath is null");
                return;
            }
            this.settingService.getConfigContent(this.manifestJsonWebPath).then(function (result) {
                _this.manifestJson = result;
                _this.onManifestJsonLoad(true, null);
            }).catch(function (err) { return _this.onManifestJsonLoad(false, err); });
        };
        WidgetSettingComponent.prototype.onConfigJsonLoad = function (succes, err) {
            if (!succes) {
                console.error(err);
            }
            if (this.widgetConfig.hasSetting === true) {
                var settingUri = this.widgetConfig.uri + "-setting";
                var comp = this.componentLoader.findComponent(settingUri);
                if (!comp) {
                    console.info("\u672A\u627E\u5230setting\u7EC4\u4EF6[" + settingUri + "]\uFF0C\u8BF7\u68C0\u67E5\u7EC4\u4EF6\u5B9A\u4E49");
                    this.currentMode = 1;
                    return;
                }
                this.showSwitchBtn = true;
                this.currentMode = 3;
                this.switchChecked = false;
                var compRef = this.componentLoader.createComponent(comp, null, this.container);
                this.settingComponentInstance = compRef.instance;
                this.settingComponentInstance.widgetInstance = this.widgetInstance;
                this.settingComponentInstance.configJson = this.configJson;
                this.settingComponentInstance.configJsonWebPath = this.configJsonWebPath;
                this.settingComponentInstance.manifestJson = this.manifestJson;
                this.settingComponentInstance.manifestJsonWebPath = this.manifestJsonWebPath;
                this.container.clear();
                this.container.insert(compRef.hostView, 0);
            }
            else {
                this.currentMode = 1;
            }
        };
        WidgetSettingComponent.prototype.onManifestJsonLoad = function (succes, err) {
            if (!succes) {
                console.error(err);
            }
        };
        return WidgetSettingComponent;
    }(BaseSettingComponent));
    WidgetSettingComponent.ɵfac = function WidgetSettingComponent_Factory(t) { return new (t || WidgetSettingComponent)(); };
    WidgetSettingComponent.ɵcmp = i0.ɵɵdefineComponent({ type: WidgetSettingComponent, selectors: [["epsgis-widget-setting"]], viewQuery: function WidgetSettingComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0$1, 1, JsonEditorComponent);
                i0.ɵɵviewQuery(_c1, 1, JsonEditorComponent);
                i0.ɵɵviewQuery(ComponentContainerDirective, 1, i0.ViewContainerRef);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.editorConfig = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.editorManifest = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.container = _t.first);
            }
        }, features: [i0.ɵɵInheritDefinitionFeature], decls: 10, vars: 17, consts: [["class", "switch", 4, "ngIf"], [1, "margin5"], [3, "data", "options", "dataChange"], ["config", ""], ["component-host", ""], ["manifest", ""], [1, "switch"], ["type", "checkbox", "id", "custom-ui", 3, "ngModel", "ngModelChange", "change"], ["for", "custom-ui"]], template: function WidgetSettingComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div");
                i0.ɵɵtemplate(1, WidgetSettingComponent_div_1_Template, 6, 1, "div", 0);
                i0.ɵɵelement(2, "div", 1);
                i0.ɵɵelementStart(3, "epsgis-json-editor", 2, 3);
                i0.ɵɵlistener("dataChange", function WidgetSettingComponent_Template_epsgis_json_editor_dataChange_3_listener($event) { return ctx.configJson = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "div");
                i0.ɵɵelementContainer(6, 4);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "div");
                i0.ɵɵelementStart(8, "epsgis-json-editor", 2, 5);
                i0.ɵɵlistener("dataChange", function WidgetSettingComponent_Template_epsgis_json_editor_dataChange_8_listener($event) { return ctx.manifestJson = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵclassProp("show-config", ctx.currentMode == 1 || ctx.currentMode == 3);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.showSwitchBtn);
                i0.ɵɵadvance(2);
                i0.ɵɵclassProp("hide", ctx.currentMode != 1);
                i0.ɵɵproperty("data", ctx.configJson)("options", i0.ɵɵpureFunction0(15, _c2));
                i0.ɵɵadvance(2);
                i0.ɵɵclassProp("hide", ctx.currentMode != 3);
                i0.ɵɵadvance(2);
                i0.ɵɵclassProp("show-manifest", ctx.currentMode == 2);
                i0.ɵɵadvance(1);
                i0.ɵɵclassProp("hide", ctx.currentMode != 2);
                i0.ɵɵproperty("data", ctx.manifestJson)("options", i0.ɵɵpureFunction0(16, _c3));
            }
        }, directives: [i1$1.NgIf, JsonEditorComponent, ComponentContainerDirective, i4.CheckboxControlValueAccessor, i4.NgControlStatus, i4.NgModel], styles: [".show-manifest[_ngcontent-%COMP%]{display:\"\";height:100%}.show-config[_ngcontent-%COMP%]{display:\"\";height:calc(100% - 22px)}.hide[_ngcontent-%COMP%]{display:none}.margin5[_ngcontent-%COMP%]{margin-top:5px}.switch[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{clear:both;display:block;line-height:22px;text-align:right}.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:none}.switch[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:52px;background:#ccc;height:22px;border-radius:11px;float:right;box-shadow:inset 0 1px 2px rgba(0,0,0,.1);margin-left:20px}.switch[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{width:26px;height:20px;float:left;margin:1px;border-radius:10px;box-shadow:2px 3px 8px rgba(0,0,0,.1);background:#fff}.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]{background:#4390f7}.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{float:right}.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled + label[_ngcontent-%COMP%]{opacity:.5}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WidgetSettingComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'epsgis-widget-setting',
                        templateUrl: './widget-setting.component.html',
                        styleUrls: ['./widget-setting.component.scss'],
                    }]
            }], function () { return []; }, { editorConfig: [{
                    type: i0.ViewChild,
                    args: ["config", { read: JsonEditorComponent, static: false }]
                }], editorManifest: [{
                    type: i0.ViewChild,
                    args: ["manifest", { read: JsonEditorComponent, static: false }]
                }], container: [{
                    type: i0.ViewChild,
                    args: [ComponentContainerDirective, { read: i0.ViewContainerRef, static: false }]
                }] });
    })();

    var IconSettingComponent = /** @class */ (function () {
        function IconSettingComponent() {
        }
        return IconSettingComponent;
    }());
    IconSettingComponent.ɵfac = function IconSettingComponent_Factory(t) { return new (t || IconSettingComponent)(); };
    IconSettingComponent.ɵcmp = i0.ɵɵdefineComponent({ type: IconSettingComponent, selectors: [["epsgis-icon-setting"]], decls: 2, vars: 0, consts: [["viewBox", "0 0 1024 1024", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "height", "100%", "width", "100%"], ["d", "M512.6 706.2c-107 0-194.2-87-194.2-193.8 0-106.8 87-193.8 194.2-193.8 51.8 0 100.4 20.2 137.2 56.8 36.8 36.6 57 85.4 57 137 0 106.8-87.2 193.8-194.2 193.8M967.6 426h-0.2L876 405.8l-2.2-7c-6-19-13.8-38-24.2-58.2l-3.2-6.4 49.2-81.8c15-24 21.4-57 1.8-76.6l-46.2-46.2c-11.6-11.6-26.6-14-37-14-14.4 0-29.8 4.8-41.2 12.6l-0.2 0.2-79.8 51-6.6-3.4c-18.8-9.8-38.4-18-57.8-24.2l-7-2.2-20.4-92.2v-0.2c-4.8-26.2-27.6-54.4-56.4-54.4h-65.4c-27.8 0-46.6 27.8-52.8 55.4L404 148.8l-6.8 2.2c-20.8 6.6-41.6 15.4-61.6 25.8l-6.6 3.4L247.2 128l-0.2-0.2c-11.4-8-26.8-12.6-41.2-12.6-10.6 0-25.4 2.4-37 14L122.6 175.6c-19.6 19.6-13.2 52.6 1.8 76.6L175.8 338l-3.2 6.2c-9.6 19.2-16.8 37-22.2 54.4l-2.2 7L57 426h-0.2c-26.2 4.8-54.2 27.6-54.2 56.4v65.4c0 27.8 27.8 46.6 55.4 53l92 23 2.2 6.8c5.4 16.4 12.2 33 20.8 50.4l3 6.2-51.4 85.8c-15 24-21.4 57-1.8 76.6l46.2 46.2c11.6 11.6 26.6 14 37 14 14.4 0 29.8-4.8 41.2-12.6l0.2-0.2 82-52.2 6.6 3.4c20.2 10.6 41 19.4 61.8 26l6.8 2.2 22.6 90.8c6.4 27.6 25.2 55.4 52.8 55.4h65.4c28.8 0 51.6-28.2 56.4-54.4v-0.2l20.4-92.4 7-2.2c19.2-6.2 38.4-14.2 57-24l6.6-3.4 80 51 0.2 0.2c11.4 8 26.8 12.6 41.2 12.6 10.6 0 25.4-2.4 37-14l46.2-46.2c19.6-19.6 13.2-52.6-1.8-76.6l-49.2-82 3.2-6.2c9-18 16.8-36.2 22.6-54.2l2.2-6.6 92-23c27.6-6.4 55.4-25.2 55.4-53v-65.4c0-29-28.2-51.8-54.2-56.6"]], template: function IconSettingComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(0, "svg", 0);
                i0.ɵɵelement(1, "path", 1);
                i0.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IconSettingComponent, [{
                type: i0.Component,
                args: [{
                        selector: "epsgis-icon-setting",
                        template: "\n    <svg viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" height=\"100%\" width=\"100%\">\n          <path\n            d=\"M512.6 706.2c-107 0-194.2-87-194.2-193.8 0-106.8 87-193.8 194.2-193.8 51.8 0 100.4 20.2 137.2 56.8 36.8 36.6 57 85.4 57 137 0 106.8-87.2 193.8-194.2 193.8M967.6 426h-0.2L876 405.8l-2.2-7c-6-19-13.8-38-24.2-58.2l-3.2-6.4 49.2-81.8c15-24 21.4-57 1.8-76.6l-46.2-46.2c-11.6-11.6-26.6-14-37-14-14.4 0-29.8 4.8-41.2 12.6l-0.2 0.2-79.8 51-6.6-3.4c-18.8-9.8-38.4-18-57.8-24.2l-7-2.2-20.4-92.2v-0.2c-4.8-26.2-27.6-54.4-56.4-54.4h-65.4c-27.8 0-46.6 27.8-52.8 55.4L404 148.8l-6.8 2.2c-20.8 6.6-41.6 15.4-61.6 25.8l-6.6 3.4L247.2 128l-0.2-0.2c-11.4-8-26.8-12.6-41.2-12.6-10.6 0-25.4 2.4-37 14L122.6 175.6c-19.6 19.6-13.2 52.6 1.8 76.6L175.8 338l-3.2 6.2c-9.6 19.2-16.8 37-22.2 54.4l-2.2 7L57 426h-0.2c-26.2 4.8-54.2 27.6-54.2 56.4v65.4c0 27.8 27.8 46.6 55.4 53l92 23 2.2 6.8c5.4 16.4 12.2 33 20.8 50.4l3 6.2-51.4 85.8c-15 24-21.4 57-1.8 76.6l46.2 46.2c11.6 11.6 26.6 14 37 14 14.4 0 29.8-4.8 41.2-12.6l0.2-0.2 82-52.2 6.6 3.4c20.2 10.6 41 19.4 61.8 26l6.8 2.2 22.6 90.8c6.4 27.6 25.2 55.4 52.8 55.4h65.4c28.8 0 51.6-28.2 56.4-54.4v-0.2l20.4-92.4 7-2.2c19.2-6.2 38.4-14.2 57-24l6.6-3.4 80 51 0.2 0.2c11.4 8 26.8 12.6 41.2 12.6 10.6 0 25.4-2.4 37-14l46.2-46.2c19.6-19.6 13.2-52.6-1.8-76.6l-49.2-82 3.2-6.2c9-18 16.8-36.2 22.6-54.2l2.2-6.6 92-23c27.6-6.4 55.4-25.2 55.4-53v-65.4c0-29-28.2-51.8-54.2-56.6\">\n          </path>\n        </svg>\n    ",
                        styles: []
                    }]
            }], null, null);
    })();

    var BaseWidgetComponent = /** @class */ (function (_super) {
        __extends(BaseWidgetComponent, _super);
        function BaseWidgetComponent() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this.widgetSettingClassName = "ss-widget-setting";
            _this.showSettingWhenInPanel = false;
            return _this;
        }
        BaseWidgetComponent.prototype.ngOnInit = function () {
            var _this = this;
            if (!this.appConfig && this.widgetManager) {
                this.widgetManager.loadConfig(this.getCompInfo(), this).then(function () {
                    _this.afterNgOnInit();
                });
            }
            else {
                this.afterNgOnInit();
            }
        };
        BaseWidgetComponent.prototype.onMouseEnter = function (target) {
            var _this = this;
            if (this.isSettingMode === false) {
                return;
            }
            if (this.inPanel == true && this.showSettingWhenInPanel == false) {
                return;
            }
            if (target.lastElementChild.className == this.widgetSettingClassName) {
                target.lastElementChild.classList.remove("hide");
                target.lastElementChild.classList.add("show");
            }
            else {
                var div = document.createElement("div");
                div.className = this.widgetSettingClassName;
                if (!BaseWidgetComponent.settingIconEleNode) {
                    var settingIconCompRef = this.componentLoader.createComponent(IconSettingComponent);
                    BaseWidgetComponent.settingIconEleNode = settingIconCompRef.location.nativeElement;
                }
                var iconDiv = document.createElement("div");
                iconDiv.className = "icon";
                var newIconEle = BaseWidgetComponent.settingIconEleNode.cloneNode(true);
                iconDiv.appendChild(newIconEle);
                iconDiv.onclick = function () {
                    _this.openSetting();
                };
                iconDiv.cloneNode();
                div.appendChild(iconDiv);
                target.appendChild(div);
            }
        };
        BaseWidgetComponent.prototype.onMouseLeave = function (target) {
            if (this.isSettingMode === false) {
                return;
            }
            if (this.inPanel == true && this.showSettingWhenInPanel == false) {
                return;
            }
            if (target.lastElementChild.className == this.widgetSettingClassName) {
                target.lastElementChild.classList.remove("show");
                target.lastElementChild.classList.add("hide");
            }
        };
        BaseWidgetComponent.prototype.getPanel = function () {
            if (this.inPanel === false) {
                return null;
            }
            var panel = null;
            if (this.gid === 'widgetOnScreen' || this.gid === 'widgetPool') {
                panel = this.panelManager.getPanelById(this.id + '_panel');
            }
            else {
                panel = this.panelManager.getPanelById(this.gid + '_panel');
                if (panel) {
                    return panel;
                }
                else {
                    panel = this.panelManager.getPanelById(this.id + '_panel');
                }
            }
            if (!panel)
                panel = {
                    uri: "epsgis-on-screen-widget-panel"
                };
            return panel;
        };
        BaseWidgetComponent.prototype.onConfigChanged = function (config) {
        };
        BaseWidgetComponent.prototype.onAppConfigChanged = function (appConfig, reason, changedData) {
        };
        BaseWidgetComponent.prototype.onAction = function (action, data) {
        };
        BaseWidgetComponent.prototype.loadArcgisModules = function (modules, loadScriptOptions) {
            var _url = '';
            if (this.globalParams.mapConfig.jsApi) {
                _url = this.globalParams.mapConfig.jsApi;
            }
            if (this.appConfig && this.appConfig.map && this.appConfig.map.jsApi) {
                _url = this.appConfig.map.jsApi;
            }
            if (!_url) {
                console.error("no arcgis js api");
                return;
            }
            var options = {
                url: _url,
                css: _url.replace("init.js", "esri/css/main.css")
            };
            return esriLoader.loadModules(modules, Object.assign(options, loadScriptOptions));
        };
        BaseWidgetComponent.prototype.openSetting = function (options) {
            var saving = false;
            var newOptions = Object.assign({ width: 700, height: 400 }, options);
            var modal = this.modalManager.create({
                title: this.label + "-配置",
                content: WidgetSettingComponent,
                componentParams: {
                    widgetInstance: this
                },
                top: 60,
                width: newOptions.width,
                height: newOptions.height,
                titleBarButtons: [
                    {
                        icon: "icon-epsgis-i",
                        isIconfont: true,
                        onClick: function (instance) {
                            instance.switchToConfigOrManifest();
                        }
                    }
                ],
                okLoading: saving,
                onOk: function (instance) {
                    instance.saveAll().then(function (result) {
                        if (result.success) {
                            instance.widgetInstance.config = result.data.config;
                            instance.widgetInstance.widgetConfig.config = result.data.config;
                            instance.widgetInstance.widgetConfig.manifest = _.merge({}, instance.widgetInstance.widgetConfig.manifest, result.data.manifest);
                            instance.widgetInstance.onConfigChanged(instance.widgetInstance.widgetConfig);
                            modal.close();
                        }
                        else {
                            instance.onSaveError(new Error(result.msg));
                        }
                        saving = false;
                    }).catch(function (err) {
                        instance.onSaveError(err);
                        saving = false;
                    });
                    return false;
                }
            });
        };
        return BaseWidgetComponent;
    }(BaseWidget));
    BaseWidgetComponent.settingIconEleNode = null;
    BaseWidgetComponent.ɵfac = function BaseWidgetComponent_Factory(t) { return ɵBaseWidgetComponent_BaseFactory(t || BaseWidgetComponent); };
    BaseWidgetComponent.ɵdir = i0.ɵɵdefineDirective({ type: BaseWidgetComponent, hostBindings: function BaseWidgetComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("mouseenter", function BaseWidgetComponent_mouseenter_HostBindingHandler($event) { return ctx.onMouseEnter($event.target); })("mouseleave", function BaseWidgetComponent_mouseleave_HostBindingHandler($event) { return ctx.onMouseLeave($event.target); });
            }
        }, inputs: { showSettingWhenInPanel: "showSettingWhenInPanel" }, features: [i0.ɵɵInheritDefinitionFeature] });
    var ɵBaseWidgetComponent_BaseFactory = i0.ɵɵgetInheritedFactory(BaseWidgetComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseWidgetComponent, [{
                type: i0.Directive
            }], null, { showSettingWhenInPanel: [{
                    type: i0.Input
                }], onMouseEnter: [{
                    type: i0.HostListener,
                    args: ['mouseenter', ['$event.target']]
                }], onMouseLeave: [{
                    type: i0.HostListener,
                    args: ['mouseleave', ['$event.target']]
                }] });
    })();

    function OnScreenWidgetIconComponent_img_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "img", 2);
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("src", ctx_r0.icon, i0.ɵɵsanitizeUrl);
        }
    }
    function OnScreenWidgetIconComponent_i_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "i", 3);
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵproperty("nzIconfont", ctx_r1.icon);
        }
    }
    exports.OnScreenWidgetIconComponent = /** @class */ (function (_super) {
        __extends(OnScreenWidgetIconComponent, _super);
        function OnScreenWidgetIconComponent(viewContainerRef, cdrf) {
            var _this = _super.call(this) || this;
            _this.viewContainerRef = viewContainerRef;
            _this.cdrf = cdrf;
            _this.widget = null;
            _this.panel = null;
            _this.panelConfig = null;
            _this.isShowImg = true;
            _this.spacing = 2;
            _this.iconStyleDisplay = "";
            _this.type = exports.WidgetType.icon;
            return _this;
        }
        OnScreenWidgetIconComponent.prototype.ngOnInit = function () {
            _super.prototype.ngOnInit.call(this);
            this.startup();
        };
        OnScreenWidgetIconComponent.prototype.setProps = function (options) {
            if (options.compRef) {
                this.widget = options.compRef;
                this.appConfig = this.widget.instance.appConfig;
                if (this.globalParams.mapConfig.is3D) {
                    this.view = this.widget.instance.view;
                }
                else {
                    this.map = this.widget.instance.map;
                }
                this.widgetConfig = this.widget.instance.widgetConfig;
                this.config = this.widget.instance.config;
            }
            else {
                this.appConfig = options.appConfig;
                if (this.globalParams.mapConfig.is3D) {
                    this.view = options.map;
                }
                else {
                    this.map = options.map;
                }
                this.widgetConfig = options.widgetConfig;
            }
            this.id = this.configId = this.widgetConfig.id;
            this.label = this.tooltip = this.title = this.widgetConfig.label;
            this.folderUrl = this.widgetConfig.folderUrl;
            if (typeof (this.widgetConfig.icon) != "undefined" && this.widgetConfig.icon != "")
                this.icon = this.widgetConfig.icon;
            else if (typeof (this.widgetConfig.manifest.icon) != "undefined" && this.widgetConfig.manifest.icon != "") {
                this.icon = this.widgetConfig.manifest.icon;
                this.isShowImg = false;
            }
            else
                this.icon = this.folderUrl + "images/icon.png";
            this.uri = this.widgetConfig.uri;
            this.gid = this.widgetConfig.gid;
            var _position = _.cloneDeep(this.widgetConfig.position);
            _position.width = "32px";
            _position.height = "32px";
            _super.prototype.setPosition.call(this, _position);
            this.panelConfig = _.cloneDeep(this.widgetConfig);
            if (this.widgetConfig.showIcon === false) {
                this.iconStyleDisplay = "none";
            }
        };
        OnScreenWidgetIconComponent.prototype.ngOnDestroy = function () {
            this.destroy();
        };
        OnScreenWidgetIconComponent.prototype.ngAfterViewInit = function () {
        };
        OnScreenWidgetIconComponent.prototype.resetPanelPosition = function () {
            if (this.commonService.isMobile()) {
                return this.panelConfig.position;
            }
            var _isInMap = this.widgetConfig.position.relativeTo !== "browser";
            var _containerBounds;
            if (_isInMap) {
                var _ele = this.commonService.getComponentRootNode(this.mapManager.comRefMap);
                if (_ele) {
                    _containerBounds = this.commonService.getElementBounds(_ele);
                }
            }
            else {
                _containerBounds = document.querySelector("epsgis-comp-container").getBoundingClientRect();
            }
            var eleIcon = this.viewContainerRef.element.nativeElement, bounds = this.commonService.getElementBounds(eleIcon), inRight = false;
            if (_containerBounds.width - bounds.right < _containerBounds.width / 2) {
                inRight = true;
            }
            if (inRight) {
                this.panelConfig.position.left = bounds.left - parseFloat(this.widgetConfig.position.width) - this.spacing - _containerBounds.left;
                this.panelConfig.position.right = _containerBounds.right - bounds.left - this.spacing;
            }
            else {
                if (bounds.left + bounds.width + parseFloat(this.widgetConfig.position.width) + this.spacing > _containerBounds.width) {
                    this.panelConfig.position.left = bounds.left - parseFloat(this.widgetConfig.position.width) - this.spacing - _containerBounds.left;
                }
                else {
                    this.panelConfig.position.left = bounds.left + bounds.width + this.spacing - _containerBounds.left;
                }
            }
            if (parseFloat(this.panelConfig.position.left) <= -1) {
                if (inRight) {
                    this.panelConfig.position.left = this.spacing;
                    this.panelConfig.position.width = bounds.left - parseFloat(this.panelConfig.position.left) - this.spacing * 2 - _containerBounds.left;
                }
                else {
                    this.panelConfig.position.left = bounds.left + bounds.width + this.spacing - _containerBounds.left;
                    this.panelConfig.position.width = _containerBounds.width - bounds.right - this.spacing * 2;
                }
            }
            if (bounds.top + parseFloat(this.widgetConfig.position.height) + this.spacing > _containerBounds.height) {
                this.panelConfig.position.top = bounds.top - parseFloat(this.widgetConfig.position.height) + this.spacing - _containerBounds.top;
            }
            else {
                this.panelConfig.position.top = bounds.top - _containerBounds.top;
            }
            if (parseFloat(this.panelConfig.position.top) <= -1) {
                this.panelConfig.position.top = bounds.top - _containerBounds.top;
                this.panelConfig.position.height = _containerBounds.height - bounds.top - this.spacing * 2;
            }
            return this.panelConfig.position;
        };
        OnScreenWidgetIconComponent.prototype.onMouseClick = function (evt) {
            this.onClick(evt);
        };
        OnScreenWidgetIconComponent.prototype.startup = function () {
            this.started = true;
        };
        OnScreenWidgetIconComponent.prototype.onClick = function (evt) {
            if (this.state === exports.WidgetState.closed || (this.panel && this.panel.instance.state === exports.WidgetState.closed)) {
                this.switchToOpen();
            }
            else {
                this.switchToClose();
            }
        };
        OnScreenWidgetIconComponent.prototype._isDockPanel = function () {
            var _uri = "", _dock = "";
            if (this.widgetConfig.panel && this.widgetConfig.panel.dock) {
                _dock = this.widgetConfig.panel.dock.toLowerCase();
                return _dock === "left" || _dock === "right" || _dock === "bottom";
            }
            if (this.widgetConfig.panel && this.widgetConfig.panel.uri) {
                _uri = this.widgetConfig.panel.uri;
            }
            if (!_uri)
                return false;
            _uri = _uri.toLowerCase();
            return _uri === "epsgis-dockable-panel-at-left" ||
                _uri === "epsgis-dockable-panel-at-bottom" ||
                _uri === "epsgis-dockable-panel-at-right";
        };
        OnScreenWidgetIconComponent.prototype.switchToOpen = function () {
            var _this = this;
            if (!this._isDockPanel()) {
                this.panelManager.closeAllPanelsInGroup(this.widgetConfig.gid);
            }
            this.resetPanelPosition();
            if (this.widgetConfig.inPanel === false) {
                this.widgetManager.loadWidget(this.widgetConfig);
            }
            else {
                this.panelManager.showPanel(this.panelConfig, this.widget).then(function (panel) {
                    _this.panel = panel;
                    _this.state = exports.WidgetState.opened;
                    _this.panel.instance.panelIcon = _this;
                    if (_this.panel.instance.isDockable()) {
                        _this.panelManager.onMapResize();
                    }
                });
            }
        };
        OnScreenWidgetIconComponent.prototype.switchToClose = function () {
            var _this = this;
            if (this.widgetConfig.inPanel === false) {
                this.widgetManager.closeWidget(this.widget);
            }
            else {
                this.panelManager.closePanel(this.panel).then(function (panel) {
                    _this.state = exports.WidgetState.closed;
                });
            }
        };
        OnScreenWidgetIconComponent.prototype.moveTo = function (position) {
        };
        OnScreenWidgetIconComponent.prototype.destroy = function () {
            if (this.panel && this.panelManager) {
                this.panelManager.destroyPanel(this.panel);
            }
            else if (this.widget) {
                this.widgetManager.destroyWidget(this.widget);
            }
        };
        OnScreenWidgetIconComponent.prototype.getOffPanelWidgetPosition = function () {
        };
        OnScreenWidgetIconComponent.prototype._showLoading = function () {
        };
        OnScreenWidgetIconComponent.prototype._hideLoading = function () {
        };
        OnScreenWidgetIconComponent.prototype.onMapChange = function (map) {
            this.map = map;
        };
        OnScreenWidgetIconComponent.prototype.onViewChange = function (view) {
            this.view = view;
        };
        return OnScreenWidgetIconComponent;
    }(BaseWidgetComponent));
    exports.OnScreenWidgetIconComponent.ɵfac = function OnScreenWidgetIconComponent_Factory(t) { return new (t || exports.OnScreenWidgetIconComponent)(i0.ɵɵdirectiveInject(i0.ViewContainerRef, 8), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    exports.OnScreenWidgetIconComponent.ɵcmp = i0.ɵɵdefineComponent({ type: exports.OnScreenWidgetIconComponent, selectors: [["epsgis-on-screen-widget-icon"]], hostVars: 2, hostBindings: function OnScreenWidgetIconComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("click", function OnScreenWidgetIconComponent_click_HostBindingHandler($event) { return ctx.onMouseClick($event); });
            }
            if (rf & 2) {
                i0.ɵɵstyleProp("display", ctx.iconStyleDisplay);
            }
        }, features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 2, consts: [[3, "src", 4, "ngIf"], ["nz-icon", "", 3, "nzIconfont", 4, "ngIf"], [3, "src"], ["nz-icon", "", 3, "nzIconfont"]], template: function OnScreenWidgetIconComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, OnScreenWidgetIconComponent_img_0_Template, 1, 1, "img", 0);
                i0.ɵɵtemplate(1, OnScreenWidgetIconComponent_i_1_Template, 1, 1, "i", 1);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", ctx.isShowImg);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", !ctx.isShowImg);
            }
        }, directives: [i1$1.NgIf, i2.NzIconDirective], styles: [""] });
    exports.OnScreenWidgetIconComponent = __decorate([
        ComponentRegister({
            uri: "epsgis-on-screen-widget-icon",
            path: "components/on-screen-widget-icon"
        })
    ], exports.OnScreenWidgetIconComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(exports.OnScreenWidgetIconComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'epsgis-on-screen-widget-icon',
                        templateUrl: './on-screen-widget-icon.component.html',
                        styleUrls: ['./on-screen-widget-icon.component.scss'],
                    }]
            }], function () {
            return [{ type: i0.ViewContainerRef, decorators: [{
                            type: i0.Optional
                        }] }, { type: i0.ChangeDetectorRef }];
        }, { iconStyleDisplay: [{
                    type: i0.HostBinding,
                    args: ["style.display"]
                }], onMouseClick: [{
                    type: i0.HostListener,
                    args: ['click', ['$event']]
                }] });
    })();

    (function (PanelInMobileShowMode) {
        PanelInMobileShowMode["default"] = "default";
        PanelInMobileShowMode["drawer"] = "drawer";
        PanelInMobileShowMode["drawerRight"] = "drawerright";
        PanelInMobileShowMode["popup"] = "popup";
        PanelInMobileShowMode["action"] = "action";
        PanelInMobileShowMode["popover"] = "popover";
        PanelInMobileShowMode["modal"] = "modal";
    })(exports.PanelInMobileShowMode || (exports.PanelInMobileShowMode = {}));
    (function (PanelDockMode) {
        PanelDockMode["none"] = "none";
        PanelDockMode["left"] = "left";
        PanelDockMode["right"] = "right";
        PanelDockMode["bottom"] = "bottom";
    })(exports.PanelDockMode || (exports.PanelDockMode = {}));
    var DefaultPanelOptions = {
        id: "ss_panel",
        title: "SS Panel",
        showTitle: true,
        modal: false,
        autoOpen: false,
        animationTime: 300,
        customClass: "",
        buttonsPosition: "right",
        buttonClose: true,
        buttonCloseText: "关闭",
        buttonMaximize: true,
        buttonMaximizeText: "最大化",
        buttonUnmaximizeText: "还原",
        buttonMinimize: false,
        buttonMinimizeText: "最小化",
        buttonUnminimizeText: "打开",
        buttonCollapse: true,
        buttonCollapseText: "收缩",
        buttonUnCollapseText: "展开",
        draggable: true,
        dragOpacity: 0.6,
        resizable: true,
        resizeOpacity: 0.6,
        statusBar: false,
        height: 200,
        width: 400,
        maxHeight: undefined,
        maxWidth: undefined,
        minHeight: 100,
        minWidth: 200,
        collapsedWidth: undefined,
        keepInViewport: true,
        mouseMoveEvents: true,
        dockSide: exports.PanelDockMode.none,
        relativeTo: "map",
        innerHtml: "",
        url: ""
    };

    var AspectService = /** @class */ (function () {
        function AspectService() {
            this.nextId = 0;
            this.after = this._aspect("after");
            this.before = this._aspect("after");
            this.around = this._aspect("around");
        }
        AspectService.getInstance = function () {
            if (!this._instance) {
                this._instance = new AspectService();
            }
            return this._instance;
        };
        AspectService.prototype.advise = function (dispatcher, type, advice, receiveArguments) {
            var _this = this;
            var previous = dispatcher[type];
            var around = type == "around";
            var signal;
            if (around) {
                var advised_1 = advice(function () {
                    return previous.advice(_this, arguments);
                });
                signal = {
                    remove: function () {
                        if (advised_1) {
                            advised_1 = dispatcher = advice = null;
                        }
                    },
                    advice: function (target, args) {
                        return advised_1 ?
                            advised_1.apply(target, args) :
                            previous.advice(target, args);
                    }
                };
            }
            else {
                signal = {
                    remove: function () {
                        if (signal.advice) {
                            var previous_1 = signal.previous;
                            var next = signal.next;
                            if (!next && !previous_1) {
                                delete dispatcher[type];
                            }
                            else {
                                if (previous_1) {
                                    previous_1.next = next;
                                }
                                else {
                                    dispatcher[type] = next;
                                }
                                if (next) {
                                    next.previous = previous_1;
                                }
                            }
                            dispatcher = advice = signal.advice = null;
                        }
                    },
                    id: dispatcher.nextId++,
                    advice: advice,
                    receiveArguments: receiveArguments
                };
            }
            if (previous && !around) {
                if (type == "after") {
                    previous.next = signal;
                    signal.previous = previous;
                }
                else if (type == "before") {
                    dispatcher[type] = signal;
                    signal.next = previous;
                    previous.previous = signal;
                }
            }
            else {
                dispatcher[type] = signal;
            }
            return signal;
        };
        AspectService.prototype._aspect = function (type) {
            var _this = this;
            return function (target, methodName, advice, receiveArguments) {
                var existing = target[methodName], dispatcher;
                if (!existing || existing.target != target) {
                    target[methodName] = dispatcher = function () {
                        var executionId = dispatcher.nextId;
                        var args = arguments;
                        var before = dispatcher.before;
                        while (before) {
                            if (before.advice) {
                                args = before.advice.apply(_this, args) || args;
                            }
                            before = before.next;
                        }
                        if (dispatcher.around) {
                            var results_1 = dispatcher.around.advice(_this, args);
                        }
                        var after = dispatcher.after;
                        while (after && after.id < executionId) {
                            if (after.advice) {
                                if (after.receiveArguments) {
                                    var newResults = after.advice.apply(_this, args);
                                    results = newResults === undefined ? results : newResults;
                                }
                                else {
                                    results = after.advice.call(_this, results, args);
                                }
                            }
                            after = after.next;
                        }
                        return results;
                    };
                    if (existing) {
                        dispatcher.around = {
                            advice: function (target, args) {
                                return existing.apply(target, args);
                            }
                        };
                    }
                    dispatcher.target = target;
                    dispatcher.nextId = dispatcher.nextId || 0;
                }
                var results = _this.advise((dispatcher || existing), type, advice, receiveArguments);
                advice = null;
                return results;
            };
        };
        return AspectService;
    }());
    AspectService._instance = null;
    var aspect = AspectService.getInstance();
    var TestAspect = /** @class */ (function () {
        function TestAspect() {
            console.log("TestAspect constructor");
        }
        TestAspect.prototype.testBefore = function () {
            console.log("TestAspect testBefore");
        };
        TestAspect.prototype.testAfter = function () {
            console.log("TestAspect testAfter");
        };
        TestAspect.prototype.testAround = function () {
            console.log("TestAspect testAround");
        };
        return TestAspect;
    }());

    var _c0$2 = ["widget_content"];
    var _c1$1 = ["sspanel_overlay"];
    var _c2$1 = ["sspanel_titlebar"];
    var _c3$1 = ["sspanel"];
    var BasePanelComponent = /** @class */ (function (_super) {
        __extends(BasePanelComponent, _super);
        function BasePanelComponent(_render, cdr) {
            var _this = _super.call(this) || this;
            _this._render = _render;
            _this.cdr = cdr;
            _this.options = DefaultPanelOptions;
            _this.currentPosition = undefined;
            _this.savedPosition = undefined;
            _this.currentSize = undefined;
            _this.savedSize = undefined;
            _this.isMouseEvent = false;
            _this.originalPosition = undefined;
            _this.dockMode = exports.PanelDockMode.none;
            _this._isRunInMobile = false;
            _this._mobileShowMode = exports.PanelInMobileShowMode.action;
            _this._eventTempData = undefined;
            return _this;
        }
        BasePanelComponent.prototype.ngOnInit = function () {
            this._isRunInMobile = this.commonService.isMobileNotTablet();
            if (this.options.modal === true) {
                if (this.sspanelOverlay) {
                    this._render.setStyle(this.sspanelOverlay.nativeElement, "pointer-events", "auto");
                }
            }
            else {
                if (this.sspanelOverlay) {
                    this._render.setStyle(this.sspanelOverlay.nativeElement, "background-color", "transparent");
                }
            }
            if (this._isRunInMobile) {
                if (this._mobileShowMode === exports.PanelInMobileShowMode.drawer
                    || this._mobileShowMode === exports.PanelInMobileShowMode.drawerRight) {
                    this._render.setStyle(this.sspanelOverlay.nativeElement, "pointer-events", "auto");
                    this._render.setStyle(this.sspanelOverlay.nativeElement, "background-color", "#00000080");
                }
            }
            else {
                try {
                    this.xxxx = this._document_MouseMove.bind(this);
                    this.yyyy = this._document_MouseUp.bind(this);
                    this.started = true;
                }
                catch (error) {
                    console.log("open panel[" + this.widget.instance.uri + "] error");
                    console.error(error);
                }
            }
            _super.prototype.ngOnInit.call(this);
        };
        BasePanelComponent.prototype.ngOnDestroy = function () {
            _super.prototype.ngOnDestroy.call(this);
            if (this.widget) {
                this.widgetManager.destroyWidget(this.widget);
            }
        };
        BasePanelComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            Promise.resolve(null).then(function () {
                _this.startup();
                _this.state = exports.WidgetState.opened;
                _this.loadAllWidgetsInOrder();
                _this.onOpen();
                if (_this.cdr && _this.cdr["destroyed"] === false) {
                    _this.cdr.detectChanges();
                }
                _super.prototype.afterNgAfterViewInit.call(_this);
            });
        };
        BasePanelComponent.prototype.setPosition = function (positionConfig) {
            if (!this.widgetConfig.position.width) {
                this.widgetConfig.position.width = this.options.width;
            }
            if (!this.widgetConfig.position.height) {
                this.widgetConfig.position.height = this.options.height;
            }
            var w = this.commonService.getPxNumber(this.widgetConfig.position.width);
            var h = this.commonService.getPxNumber(this.widgetConfig.position.height);
            if (typeof w === "number" && w < this.options.minWidth) {
                this.widgetConfig.position.width = this.options.minWidth;
            }
            if (typeof h === "number" && h < this.options.minWidth) {
                this.widgetConfig.position.height = this.options.minHeight;
            }
            if (this.commonService.isMobileNotTablet()) {
                this._setMobilePosition();
            }
            else {
                this._setPCPosition();
            }
            _super.prototype.setPosition.call(this, this.widgetConfig.position);
        };
        BasePanelComponent.prototype._setPCPosition = function () {
            this.currentSize = { width: this.widgetConfig.position.width, height: this.widgetConfig.position.height };
            this.currentPosition = { left: undefined, top: undefined, width: undefined, height: undefined };
            this.currentPosition.left = this.commonService.getPxNumber(this.widgetConfig.position.left);
            this.currentPosition.top = this.commonService.getPxNumber(this.widgetConfig.position.top);
            this.currentPosition.width = this.commonService.getPxNumber(this.widgetConfig.position.width);
            this.currentPosition.height = this.commonService.getPxNumber(this.widgetConfig.position.height);
            this.savedPosition = _.cloneDeep(this.currentPosition);
            this.originalPosition = _.cloneDeep(this.currentPosition);
        };
        BasePanelComponent.prototype._setMobilePosition = function () {
        };
        BasePanelComponent.prototype.loadAllWidgetsInOrder = function () {
            var _this = this;
            var configs = [this.widgetConfig];
            _.forEach(configs, function (wConfig) {
                if (wConfig.visible === false) {
                    return;
                }
                _this.widgetManager.loadWidget(wConfig).then(function (widget) {
                    _this.widget = widget;
                    if (_this.options.showTitle === false) {
                        _this.widget.instance.showSettingWhenInPanel = true;
                    }
                    _this.widget.instance.reqPara = _this.reqPara;
                    _this.widgetContainer.insert(_this.widget.hostView);
                    aspect.after(_this.widget.instance, "afterNgAfterViewInit", function () {
                        _this.widget.instance.started = true;
                        _this.widget.instance.state = exports.WidgetState.opened;
                        _this.widget.instance.windowState = exports.WidgetWindowState.normal;
                        _this.widget.instance.startup();
                    });
                });
            });
        };
        BasePanelComponent.prototype.getAllWidgetConfigs = function () {
            var configs = [];
            if (Array.isArray(this.config.widgets)) {
                configs = this.config.widgets;
            }
            else {
                configs = [this.widgetConfig];
            }
            return configs;
        };
        BasePanelComponent.prototype.isDockable = function () {
            return this.dockMode === exports.PanelDockMode.left ||
                this.dockMode === exports.PanelDockMode.bottom ||
                this.dockMode === exports.PanelDockMode.right;
        };
        BasePanelComponent.prototype.startup = function () {
            this.started = true;
        };
        BasePanelComponent.prototype.setWidget = function (widget) {
            this.widget = widget;
            if (this.options.showTitle === false) {
                this.widget.instance.showSettingWhenInPanel = true;
            }
        };
        BasePanelComponent.prototype.setOptions = function (options) {
            if (this.widgetConfig && this.widgetConfig.panel) {
                _.merge(options, this.widgetConfig.panel);
            }
            this.options = _.merge(_.cloneDeep(DefaultPanelOptions), options);
            this.options.buttonSetting = this.isSettingMode;
        };
        BasePanelComponent.prototype.setWindowState = function (state) {
            this.windowState = state;
        };
        BasePanelComponent.prototype.setState = function (state) {
            switch (state) {
                case exports.WidgetState.opened:
                    this.showPanel();
                    break;
                case exports.WidgetState.closed:
                    this.hidePanel();
                    break;
                case exports.WidgetState.active:
                    break;
                default:
                    break;
            }
            this.state = state;
            if (this.widget) {
                this.widget.instance.setState(state);
            }
        };
        BasePanelComponent.prototype.showPanel = function () {
            this.sspanelOverlay.nativeElement.parentElement.style.display = '';
            if (this.widget) {
                this.commonService.getComponentRootNode(this.widget).style.display = '';
            }
            this.onOpen();
            this.state = exports.WidgetState.opened;
        };
        BasePanelComponent.prototype.hidePanel = function () {
            this.sspanelOverlay.nativeElement.parentElement.style.display = 'none';
            if (this.widget) {
                this.commonService.getComponentRootNode(this.widget).style.display = 'none';
            }
            this.onClose();
            this.state = exports.WidgetState.closed;
        };
        BasePanelComponent.prototype.closePanel = function (event) {
            this.panelManager.closePanel(this.id);
            if (event) {
                event.preventDefault();
                event.stopPropagation();
            }
        };
        BasePanelComponent.prototype.onNormalize = function () {
            if (this.widget) {
                this.widget.instance.onNormalize();
            }
        };
        BasePanelComponent.prototype.onMinimize = function () {
            if (this.widget) {
                this.widget.instance.onMinimize();
            }
        };
        BasePanelComponent.prototype.onMaximize = function () {
            if (this.widget) {
                this.widget.instance.onMaximize();
            }
        };
        BasePanelComponent.prototype.resize = function (position) {
            if (position) {
                if (position.left < 0) {
                    position.left = 0;
                }
                if (position.top < 0) {
                    position.top = 0;
                }
                if (position.width < this.options.minWidth) {
                    position.width = this.options.minWidth;
                }
                if (position.height < this.options.minHeight) {
                    position.height = this.options.minHeight;
                }
                this._render.setStyle(this.sspanel.nativeElement, "left", this._convertToStyleVal(position.left));
                this._render.setStyle(this.sspanel.nativeElement, "top", this._convertToStyleVal(position.top));
                this._render.setStyle(this.sspanel.nativeElement, "width", this._convertToStyleVal(position.width));
                this._render.setStyle(this.sspanel.nativeElement, "height", this._convertToStyleVal(position.height));
                this.widgetConfig.position = _.merge(this.widgetConfig.position, position);
                this.setPosition(position);
            }
        };
        BasePanelComponent.prototype.onResize = function () {
            if (this.widget) {
                this.widget.instance.resize();
            }
        };
        BasePanelComponent.prototype.onActive = function () {
        };
        BasePanelComponent.prototype.onDeActive = function () {
        };
        BasePanelComponent.prototype.onCollapse = function () {
        };
        BasePanelComponent.prototype.onExpand = function () {
        };
        BasePanelComponent.prototype.onMove = function () {
        };
        BasePanelComponent.prototype.onPositionChange = function (position) {
            this.setPosition(position);
        };
        BasePanelComponent.prototype.onOpen = function () {
            if (this.widget && this.widget.instance.started) {
                this.widget.instance.onOpen();
            }
        };
        BasePanelComponent.prototype.onClose = function () {
            if (this.widget) {
                this.widgetManager.closeWidget(this.widget);
            }
        };
        BasePanelComponent.prototype.onMouseEnter = function (target) {
            if (this.moveTopOnActive) {
                this.panelManager._activePanel(this.id);
            }
        };
        BasePanelComponent.prototype.onMouseLeave = function () {
        };
        BasePanelComponent.prototype._getCurrentPosition = function () {
            var _position = this.currentPosition;
            if (_position.top === "auto") {
                _position.top = this.position.top;
            }
            if (_position.left === "auto" || _position.left === 0) {
                var _panelBounds = this.commonService.getElementBounds(this.sspanel.nativeElement);
                var _isInMap = this.widgetConfig.position.relativeTo !== "browser";
                var _containerBounds = void 0;
                if (_isInMap) {
                    var _ele = this.commonService.getComponentRootNode(this.mapManager.comRefMap);
                    if (_ele) {
                        _containerBounds = this.commonService.getElementBounds(_ele);
                    }
                }
                else {
                    _containerBounds = document.querySelector("epsgis-comp-container").getBoundingClientRect();
                }
                if (_containerBounds) {
                    _position.left = _panelBounds.left - _containerBounds.left;
                }
            }
            return _.merge({}, _position);
        };
        BasePanelComponent.prototype._setCurrentPosition = function (position) {
            this.currentPosition = _.merge(this.currentPosition, position);
        };
        BasePanelComponent.prototype._saveCurrentPosition = function () {
            this.savedPosition = this._getCurrentPosition();
        };
        BasePanelComponent.prototype._restoreSavedPosition = function () {
            return this._changePosition(this.savedPosition);
        };
        BasePanelComponent.prototype._changePosition = function (params) {
            var defRet = this.commonService.createPromiseDefer();
            var settings = this.options;
            var animationTime = (params.animationTime !== undefined) ? parseInt(params.animationTime) : settings.animationTime;
            var newPosition = {
                top: params.top,
                left: params.left,
                bottom: params.bottom,
                right: params.right
            };
            if (params.check) {
                if (!(this.state === exports.WidgetState.opened) ||
                    this.windowState === exports.WidgetWindowState.maximized ||
                    this.windowState === exports.WidgetWindowState.minimized)
                    return;
                if (settings.keepInViewport) {
                    var size = this._getCurrentSize();
                    var $window = this._getWindowSize();
                    if (newPosition.top > $window.height() - size.height)
                        newPosition.top = $window.height() - size.height;
                    if (newPosition.left > $window.width() - size.width)
                        newPosition.left = $window.width() - size.width;
                    if (newPosition.top < 0)
                        newPosition.top = 0;
                    if (newPosition.left < 0)
                        newPosition.left = 0;
                }
            }
            var currentPosition = this._getCurrentPosition();
            if (currentPosition.top != newPosition.top || currentPosition.left != newPosition.left) {
                this.position = _.merge(this.position, {
                    left: newPosition.left + "px",
                    top: newPosition.top + "px"
                });
                this.sspanel.nativeElement.style.left = newPosition.left + "px";
                this.sspanel.nativeElement.style.top = newPosition.top + "px";
                this._setCurrentPosition(newPosition);
                defRet.resolve();
            }
            else {
                defRet.resolve();
            }
            return defRet.promise();
        };
        BasePanelComponent.prototype._getWindowSize = function () {
            return {
                height: function () {
                    return window.innerHeight;
                },
                width: function () {
                    return window.outerWidth;
                }
            };
        };
        BasePanelComponent.prototype._getCurrentSize = function () {
            return _.merge({}, this.currentSize);
        };
        BasePanelComponent.prototype._saveCurrentSize = function () {
            this.savedSize = this._getCurrentSize();
        };
        BasePanelComponent.prototype._setCurrentSize = function (size) {
            this.currentSize = _.merge(this.currentSize, size);
        };
        BasePanelComponent.prototype._restoreSavedSize = function () {
            return this._changeSize(_.merge({
                checkPosition: true,
                checkSize: false,
                event: false
            }, this.savedSize));
        };
        BasePanelComponent.prototype._convertToStyleVal = function (val) {
            if (val == "0")
                return "0px";
            if (!val)
                return "";
            if (val === "auto" || val == "100%")
                return val;
            var _w = parseFloat(val), _ws = "";
            if (isNaN(_w)) {
                _ws = val;
            }
            else {
                if (_w < 0) {
                    _w = 0;
                }
                _ws = _w + "px";
            }
            return _ws;
        };
        BasePanelComponent.prototype._changeSize = function (params) {
            var defRet = this.commonService.createPromiseDefer();
            var settings = this.options;
            var animationTime = (params.animationTime !== undefined) ? parseInt(params.animationTime) : settings.animationTime;
            var newSize = {
                width: params.width,
                height: params.height
            };
            if (params.checkSize) {
                if (this.state === exports.WidgetState.closed
                    || this.windowState === exports.WidgetWindowState.minimized ||
                    this.windowState === exports.WidgetWindowState.maximized)
                    return;
                if (settings.maxWidth && newSize.width > settings.maxWidth)
                    newSize.width = settings.maxWidth;
                if (settings.minWidth && newSize.width < settings.minWidth)
                    newSize.width = settings.minWidth;
                if (settings.maxHeight && newSize.height > settings.maxHeight)
                    newSize.height = settings.maxHeight;
                if (settings.minHeight && newSize.height < settings.minHeight)
                    newSize.height = settings.minHeight;
                if (this.windowState === exports.WidgetWindowState.collapsed) {
                    this.currentSize = _.merge({}, newSize);
                    delete newSize.height;
                }
            }
            var currentSize = this._getCurrentSize();
            if (currentSize.width != newSize.width || currentSize.height != newSize.height) {
                if (newSize.height) {
                    this._render.setStyle(this.sspanel.nativeElement, "height", this._convertToStyleVal(newSize.height));
                }
                if (newSize.width) {
                    this._render.setStyle(this.sspanel.nativeElement, "width", this._convertToStyleVal(newSize.width));
                }
                this._setCurrentSize(newSize);
                defRet.resolve();
            }
            else {
                defRet.resolve();
            }
            return defRet.promise();
        };
        BasePanelComponent.prototype._getBordersWidth = function (border) {
            if (border !== undefined) {
                return this._getBorderWidth(this.sspanel.nativeElement, border);
            }
            return {
                top: this._getBorderWidth(this.sspanel.nativeElement, "top"),
                bottom: this._getBorderWidth(this.sspanel.nativeElement, "top"),
                left: this._getBorderWidth(this.sspanel.nativeElement, "top"),
                right: this._getBorderWidth(this.sspanel.nativeElement, "top")
            };
        };
        BasePanelComponent.prototype._getBorderWidth = function (ele, border) {
            if (border.toLowerCase() === "top")
                border = "Top";
            if (border.toLowerCase() === "left")
                border = "Left";
            if (border.toLowerCase() === "right")
                border = "Right";
            if (border.toLowerCase() === "bottom")
                border = "Bottom";
            var w = ele.style["border" + border + "Width"];
            if (!w)
                w = 0;
            return parseInt(w, 10);
        };
        BasePanelComponent.prototype._contentClick = function (evt) {
            this.panelManager._activePanel(this.id);
        };
        BasePanelComponent.prototype._titlebar_MouseDown = function (event) {
            if (this.commonService.isMobile())
                return;
            if (this.isDockable())
                return;
            if (this.options.draggable !== true)
                return;
            this.isMouseEvent = false;
            this.panelManager._activePanel(this.id);
            var currentPosition = this._getCurrentPosition();
            var settings = this.options;
            if (!settings.modal) {
                this.sspanelOverlay.nativeElement.style.backgroundColor = "transparent";
                this.sspanelOverlay.nativeElement.style.width = "100%";
                this.sspanelOverlay.nativeElement.style.height = "100%";
            }
            this._addDocumentMouseEventHandlers({
                action: "drag",
                opacity: settings.dragOpacity,
                compensationX: event.pageX - parseFloat(currentPosition.left.toString()),
                compensationY: event.pageY - parseFloat(currentPosition.top.toString())
            });
            event.preventDefault();
            event.stopPropagation();
        };
        BasePanelComponent.prototype._resizer_MouseDown = function (event, resizeParams) {
            if (this.commonService.isMobile())
                return;
            var currentPosition = this._getCurrentPosition();
            var currentSize = this._getCurrentSize();
            var _data = {
                action: "resize",
                dimension: resizeParams.dimension,
                directionX: resizeParams.directionX,
                directionY: resizeParams.directionY,
                opacity: this.options.resizeOpacity,
                startX: event.pageX + ((resizeParams.directionX == "left") ? parseFloat(currentSize.width) : -parseFloat(currentSize.width)),
                startY: event.pageY + ((resizeParams.directionY == "top") ? parseFloat(currentSize.height) : -parseFloat(currentSize.height)),
                compensationX: event.pageX - parseInt(currentPosition.left.toString(), 10),
                compensationY: event.pageY - parseInt(currentPosition.top.toString(), 10)
            };
            this._addDocumentMouseEventHandlers(_data);
            event.preventDefault();
        };
        BasePanelComponent.prototype._addDocumentMouseEventHandlers = function (eventData) {
            this.sspanel.nativeElement.style.opacity = eventData.opacity;
            this.sspanel.nativeElement.style.filter = "alpha(opacity=" + eventData.opacity * 100 + ")";
            if (!this.options.mouseMoveEvents) {
                this.tempSavedData = {
                    position: this._getCurrentPosition(),
                    size: this._getCurrentSize()
                };
            }
            this._eventTempData = eventData;
            document.addEventListener("mousemove", this.xxxx, false);
            document.addEventListener("mouseup", this.yyyy, false);
        };
        BasePanelComponent.prototype._document_MouseMove = function (event) {
            var settings = this.options;
            var currentPosition = this._getCurrentPosition();
            var currentSize = this._getCurrentSize();
            var newPosition = {};
            var newSize = {};
            event.data = this._eventTempData;
            switch (event.data.action) {
                case "drag":
                    newPosition.top = event.pageY - event.data.compensationY;
                    newPosition.left = event.pageX - event.data.compensationX;
                    if (settings.keepInViewport) {
                        var size = this._getCurrentSize();
                        var $window = this._getWindowSize();
                        if (newPosition.top < 0)
                            newPosition.top = 0;
                        if (newPosition.left < 0)
                            newPosition.left = 0;
                        if (newPosition.top > $window.height() - size.height)
                            newPosition.top = $window.height() - size.height;
                        if (newPosition.left > $window.width() - size.width)
                            newPosition.left = $window.width() - size.width;
                    }
                    this.isMouseEvent = true;
                    break;
                case "resize":
                    if (event.data.dimension != "height" && event.pageX > 0) {
                        var newWidth = (event.data.directionX == "left") ? event.data.startX - event.pageX : event.pageX - event.data.startX;
                        if (newWidth >= settings.minWidth && (!settings.maxWidth || newWidth <= settings.maxWidth)) {
                            newSize.width = newWidth;
                            if (event.data.directionX == "left")
                                newPosition.left = event.pageX - event.data.compensationX;
                        }
                    }
                    if (event.data.dimension != "width" && event.pageY > 0) {
                        var newHeight = (event.data.directionY == "top") ? event.data.startY - event.pageY : event.pageY - event.data.startY;
                        if (newHeight >= settings.minHeight && (!settings.maxHeight || newHeight <= settings.maxHeight)) {
                            newSize.height = newHeight;
                            if (event.data.directionY == "top")
                                newPosition.top = event.pageY - event.data.compensationY;
                        }
                    }
                    break;
            }
            if ((newPosition.top !== undefined && newPosition.top != currentPosition.top) || (newPosition.left !== undefined && newPosition.left != currentPosition.left)) {
                if (newPosition.top < 0) {
                    newPosition.top = 0;
                }
                if (newPosition.left < 0) {
                    newPosition.left = 0;
                }
                this._changePosition(newPosition);
                this._setCurrentPosition(newPosition);
                if (settings.mouseMoveEvents) {
                    this.onMove();
                }
            }
            if ((newSize.width !== undefined && newSize.width != currentSize.width) || (newSize.height !== undefined && newSize.height != currentSize.height)) {
                if (newSize.height) {
                    if (newSize.height <= this.options.minHeight) {
                        newSize.height = this.options.minHeight;
                    }
                    this._render.setStyle(this.sspanel.nativeElement, "height", this._convertToStyleVal(newSize.height));
                }
                if (newSize.width) {
                    if (newSize.width <= this.options.minWidth) {
                        newSize.width = this.options.minWidth;
                    }
                    this._render.setStyle(this.sspanel.nativeElement, "width", this._convertToStyleVal(newSize.width));
                }
                this._setCurrentSize(newSize);
                if (settings.mouseMoveEvents) {
                    this._setIframeStyle();
                    this.onResize();
                }
            }
        };
        BasePanelComponent.prototype._document_MouseUp = function (event) {
            var settings = this.options;
            this.sspanel.nativeElement.style.opacity = 1;
            this.sspanel.nativeElement.style.filter = "alpha(opacity=" + 1 * 100 + ")";
            document.removeEventListener("mousemove", this.xxxx);
            document.removeEventListener("mouseup", this.yyyy);
            if (this.isMouseEvent !== true)
                return;
            if (!settings.modal) {
                this.sspanelOverlay.nativeElement.style.width = "0px";
                this.sspanelOverlay.nativeElement.style.height = "0px";
                this.sspanelOverlay.nativeElement.style.backgoundColor = "";
            }
            if (!settings.mouseMoveEvents) {
                var currentPosition = this._getCurrentPosition();
                var currentSize = this._getCurrentSize();
                var savedData = this.tempSavedData;
                if (savedData.position.top != currentPosition.top || savedData.position.left != currentPosition.left) {
                    this.onMove();
                }
                if (savedData.size.width != currentSize.width || savedData.size.height != currentSize.height) {
                    this._setIframeStyle();
                    this.onResize();
                }
                this.tempSavedData = undefined;
                this._eventTempData = undefined;
            }
        };
        BasePanelComponent.prototype._setIframeStyle = function () {
        };
        BasePanelComponent.prototype._isDockSide = function () {
            return false;
        };
        BasePanelComponent.prototype._maximize = function () {
            var _this = this;
            if (this.state === exports.WidgetState.closed ||
                this.windowState === exports.WidgetWindowState.maximized ||
                this.windowState === exports.WidgetWindowState.minimized ||
                this.windowState === exports.WidgetWindowState.collapsed) {
                return;
            }
            var settings = this.options;
            var eles = this.sspanel.nativeElement.querySelectorAll(".sspanel_statusbar_handle *, .sspanel_resizer, .sspanel_titlebar_button_collapse");
            eles.forEach(function (h, idx, arr) {
                _this._render.setStyle(h, "display", "none");
            });
            if (settings.draggable) {
                this._render.removeClass(this.sspanel_titlebar.nativeElement, "sspanel_titlebar_draggable");
            }
            if (!settings.modal) {
                this._render.setStyle(this.sspanelOverlay.nativeElement, "background-color", "transparent");
                this._render.setStyle(this.sspanelOverlay.nativeElement, "width", "100%");
                this._render.setStyle(this.sspanelOverlay.nativeElement, "height", "100%");
            }
            this._saveCurrentPosition();
            this._saveCurrentSize();
            var nposition = {
                top: 0,
                left: 0
            };
            if (this._isDockSide()) {
            }
            var defPosition = this._changePosition(nposition);
            var defSize = this._changeSize({
                width: "100%",
                height: "100%"
            });
            return Promise.all([defPosition, defSize]).then(function () {
                _this.windowState = exports.WidgetWindowState.maximized;
                _this._setIframeStyle();
                _this.onMaximize();
            });
        };
        BasePanelComponent.prototype._unmaximize = function () {
            var _this = this;
            if (this.state === exports.WidgetState.closed
                || this.windowState !== exports.WidgetWindowState.maximized)
                return;
            var settings = this.options;
            var defPosition = this._restoreSavedPosition();
            var defSize = this._restoreSavedSize();
            var eles = this.sspanel.nativeElement.querySelectorAll(".sspanel_statusbar_handle *, .sspanel_resizer, .sspanel_titlebar_button_collapse");
            eles.forEach(function (h, idx, arr) {
                _this._render.setStyle(h, "display", "");
            });
            if (settings.draggable) {
                this._render.addClass(this.sspanel_titlebar.nativeElement, "sspanel_titlebar_draggable");
            }
            if (!settings.modal) {
                this._render.setStyle(this.sspanelOverlay.nativeElement, "background-color", "");
                this._render.setStyle(this.sspanelOverlay.nativeElement, "width", "0");
                this._render.setStyle(this.sspanelOverlay.nativeElement, "height", "0");
            }
            return Promise.all([defPosition, defSize]).then(function () {
                _this.windowState = exports.WidgetWindowState.normal;
                _this._setIframeStyle();
                _this.onNormalize();
            });
        };
        BasePanelComponent.prototype._minimize = function () {
        };
        BasePanelComponent.prototype._unminimize = function () {
        };
        BasePanelComponent.prototype._collapse = function () {
            var _this = this;
            if (this.started !== true ||
                this.state === exports.WidgetState.closed ||
                this.windowState === exports.WidgetWindowState.maximized ||
                this.windowState === exports.WidgetWindowState.collapsed ||
                this.windowState === exports.WidgetWindowState.minimized)
                return;
            var settings = this.options;
            var eles = this.sspanel.nativeElement.querySelectorAll(".sspanel_content, .sspanel_statusbar, .sspanel_resizer, .sspanel_titlebar_button_maximize, .sspanel_titlebar_button_minimize");
            eles.forEach(function (h, idx, arr) {
                _this._render.setStyle(h, "display", "none");
            });
            this._saveCurrentSize();
            var defSize = this._changeSize({
                width: settings.collapsedWidth,
                height: this._getBordersWidth("top") + this._getBordersWidth("bottom") + this.sspanel_titlebar.nativeElement.offsetHeight
            });
            return Promise.all([defSize]).then(function () {
                _this.windowState = exports.WidgetWindowState.collapsed;
                _this.onCollapse();
            });
        };
        BasePanelComponent.prototype._uncollapse = function () {
            var _this = this;
            if (this.started != true || this.state === exports.WidgetState.closed || this.windowState !== exports.WidgetWindowState.collapsed)
                return;
            var settings = this.options;
            var defSize = this._restoreSavedSize();
            var eles = this.sspanel.nativeElement.querySelectorAll(".sspanel_content, .sspanel_statusbar, .sspanel_resizer, .sspanel_titlebar_button_maximize, .sspanel_titlebar_button_minimize");
            eles.forEach(function (h, idx, arr) {
                _this._render.setStyle(h, "display", "");
            });
            return defSize.then(function () {
                _this.windowState = exports.WidgetWindowState.normal;
                _this.onNormalize();
            });
        };
        BasePanelComponent.prototype._buttonMax_Click = function (event) {
            if (this.windowState !== exports.WidgetWindowState.maximized) {
                this._maximize();
            }
            else {
                this._unmaximize();
            }
            event.preventDefault();
            event.stopPropagation();
        };
        BasePanelComponent.prototype._buttonCollapse_Click = function (event) {
            if (this.windowState !== exports.WidgetWindowState.collapsed) {
                this._collapse();
            }
            else {
                this._uncollapse();
            }
            event.preventDefault();
            event.stopPropagation();
        };
        BasePanelComponent.prototype._buttonMin_Click = function (event) {
            if (this.windowState !== exports.WidgetWindowState.minimized) {
                this._minimize();
            }
            else {
                this._unminimize();
            }
            event.preventDefault();
            event.stopPropagation();
        };
        BasePanelComponent.prototype.openWidgetSetting = function () {
            if (!this.widget) {
                this.widget = this.widgetManager.getWidgetById(this.widgetConfig.id).instance;
            }
            if (!this.widget) {
                return;
            }
            this.widget.instance.openSetting();
        };
        return BasePanelComponent;
    }(BaseWidget));
    BasePanelComponent.ɵfac = function BasePanelComponent_Factory(t) { return new (t || BasePanelComponent)(i0.ɵɵdirectiveInject(i0.Renderer2, 8), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef, 8)); };
    BasePanelComponent.ɵdir = i0.ɵɵdefineDirective({ type: BasePanelComponent, viewQuery: function BasePanelComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0$2, 3, i0.ViewContainerRef);
                i0.ɵɵviewQuery(_c1$1, 3);
                i0.ɵɵviewQuery(_c2$1, 3);
                i0.ɵɵviewQuery(_c3$1, 3);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.widgetContainer = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sspanelOverlay = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sspanel_titlebar = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sspanel = _t.first);
            }
        }, hostBindings: function BasePanelComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("mouseenter", function BasePanelComponent_mouseenter_HostBindingHandler($event) { return ctx.onMouseEnter($event.target); })("mouseleave", function BasePanelComponent_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
            }
        }, features: [i0.ɵɵInheritDefinitionFeature] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BasePanelComponent, [{
                type: i0.Directive
            }], function () {
            return [{ type: i0.Renderer2, decorators: [{
                            type: i0.Optional
                        }] }, { type: i0.ChangeDetectorRef, decorators: [{
                            type: i0.Optional
                        }] }];
        }, { widgetContainer: [{
                    type: i0.ViewChild,
                    args: ["widget_content", { read: i0.ViewContainerRef, static: true }]
                }], sspanelOverlay: [{
                    type: i0.ViewChild,
                    args: ["sspanel_overlay", { static: true }]
                }], sspanel_titlebar: [{
                    type: i0.ViewChild,
                    args: ["sspanel_titlebar", { static: true }]
                }], sspanel: [{
                    type: i0.ViewChild,
                    args: ["sspanel", { static: true }]
                }], onMouseEnter: [{
                    type: i0.HostListener,
                    args: ['mouseenter', ['$event.target']]
                }], onMouseLeave: [{
                    type: i0.HostListener,
                    args: ['mouseleave']
                }] });
    })();

    var IconUnCollapsedComponent = /** @class */ (function () {
        function IconUnCollapsedComponent() {
        }
        return IconUnCollapsedComponent;
    }());
    IconUnCollapsedComponent.ɵfac = function IconUnCollapsedComponent_Factory(t) { return new (t || IconUnCollapsedComponent)(); };
    IconUnCollapsedComponent.ɵcmp = i0.ɵɵdefineComponent({ type: IconUnCollapsedComponent, selectors: [["epsgis-icon-uncollapsed"]], decls: 3, vars: 0, consts: [["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 10 10", "height", "100%", "width", "100%"], ["fill", "none"], ["points", "1,3 9,3 5,8 1,3 9,3"]], template: function IconUnCollapsedComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(0, "svg", 0);
                i0.ɵɵelementStart(1, "g", 1);
                i0.ɵɵelement(2, "polyline", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IconUnCollapsedComponent, [{
                type: i0.Component,
                args: [{
                        selector: "epsgis-icon-uncollapsed",
                        template: "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                viewBox=\"0 0 10 10\" height=\"100%\" width=\"100%\">\n                <g fill=\"none\">\n                <polyline points=\"1,3 9,3 5,8 1,3 9,3\"></polyline>\n                </g>\n            </svg>",
                        styles: []
                    }]
            }], null, null);
    })();

    var IconCollapsedComponent = /** @class */ (function () {
        function IconCollapsedComponent() {
        }
        return IconCollapsedComponent;
    }());
    IconCollapsedComponent.ɵfac = function IconCollapsedComponent_Factory(t) { return new (t || IconCollapsedComponent)(); };
    IconCollapsedComponent.ɵcmp = i0.ɵɵdefineComponent({ type: IconCollapsedComponent, selectors: [["epsgis-icon-collapsed"]], decls: 3, vars: 0, consts: [["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 10 10", "height", "100%", "width", "100%"], ["fill", "none"], ["points", "1,7 9,7 5,2 1,7 9,7"]], template: function IconCollapsedComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(0, "svg", 0);
                i0.ɵɵelementStart(1, "g", 1);
                i0.ɵɵelement(2, "polyline", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IconCollapsedComponent, [{
                type: i0.Component,
                args: [{
                        selector: "epsgis-icon-collapsed",
                        template: "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n            viewBox=\"0 0 10 10\" height=\"100%\" width=\"100%\">\n            <g fill=\"none\">\n            <polyline points=\"1,7 9,7 5,2 1,7 9,7\"></polyline>\n            </g>\n            </svg>",
                        styles: []
                    }]
            }], null, null);
    })();

    var IconUnMaximizeComponent = /** @class */ (function () {
        function IconUnMaximizeComponent() {
        }
        return IconUnMaximizeComponent;
    }());
    IconUnMaximizeComponent.ɵfac = function IconUnMaximizeComponent_Factory(t) { return new (t || IconUnMaximizeComponent)(); };
    IconUnMaximizeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: IconUnMaximizeComponent, selectors: [["epsgis-icon-unmaximize"]], decls: 7, vars: 0, consts: [["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 10 10", "height", "100%", "width", "100%"], ["fill", "none"], ["x", "1", "y", "3", "height", "6", "width", "6"], ["y1", "3", "x1", "3", "y2", "1", "x2", "3"], ["y1", "1", "x1", "2.5", "y2", "1", "x2", "9.5"], ["y1", "1", "x1", "9", "y2", "7", "x2", "9"], ["y1", "7", "x1", "9.5", "y2", "7", "x2", "7"]], template: function IconUnMaximizeComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(0, "svg", 0);
                i0.ɵɵelementStart(1, "g", 1);
                i0.ɵɵelement(2, "rect", 2);
                i0.ɵɵelement(3, "line", 3);
                i0.ɵɵelement(4, "line", 4);
                i0.ɵɵelement(5, "line", 5);
                i0.ɵɵelement(6, "line", 6);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IconUnMaximizeComponent, [{
                type: i0.Component,
                args: [{
                        selector: "epsgis-icon-unmaximize",
                        template: "\n    <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\n              xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 10 10\" height=\"100%\" width=\"100%\">\n              <g fill=\"none\">\n                <rect x=\"1\" y=\"3\" height=\"6\" width=\"6\"></rect>\n                <line y1=\"3\" x1=\"3\" y2=\"1\" x2=\"3\"></line>\n                <line y1=\"1\" x1=\"2.5\" y2=\"1\" x2=\"9.5\"></line>\n                <line y1=\"1\" x1=\"9\" y2=\"7\" x2=\"9\"></line>\n                <line y1=\"7\" x1=\"9.5\" y2=\"7\" x2=\"7\"></line>\n              </g>\n    </svg>\n    ",
                        styles: []
                    }]
            }], null, null);
    })();

    var IconMaximizeComponent = /** @class */ (function () {
        function IconMaximizeComponent() {
        }
        return IconMaximizeComponent;
    }());
    IconMaximizeComponent.ɵfac = function IconMaximizeComponent_Factory(t) { return new (t || IconMaximizeComponent)(); };
    IconMaximizeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: IconMaximizeComponent, selectors: [["epsgis-icon-maximize"]], decls: 3, vars: 0, consts: [["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 10 10", "height", "100%", "width", "100%"], ["fill", "none"], ["x", "1", "y", "1", "height", "8", "width", "8"]], template: function IconMaximizeComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(0, "svg", 0);
                i0.ɵɵelementStart(1, "g", 1);
                i0.ɵɵelement(2, "rect", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IconMaximizeComponent, [{
                type: i0.Component,
                args: [{
                        selector: "epsgis-icon-maximize",
                        template: "\n    <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\n              xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 10 10\" height=\"100%\" width=\"100%\">\n              <g fill=\"none\">\n                <rect x=\"1\" y=\"1\" height=\"8\" width=\"8\"></rect>\n              </g>\n    </svg>\n    ",
                        styles: []
                    }]
            }], null, null);
    })();

    var IconCloseComponent = /** @class */ (function () {
        function IconCloseComponent() {
        }
        return IconCloseComponent;
    }());
    IconCloseComponent.ɵfac = function IconCloseComponent_Factory(t) { return new (t || IconCloseComponent)(); };
    IconCloseComponent.ɵcmp = i0.ɵɵdefineComponent({ type: IconCloseComponent, selectors: [["epsgis-icon-close"]], decls: 4, vars: 0, consts: [["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 10 10", "height", "100%", "width", "100%"], ["y2", "0", "x2", "10", "y1", "10", "x1", "0"], ["y2", "10", "x2", "10", "y1", "0", "x1", "0"]], template: function IconCloseComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(0, "svg", 0);
                i0.ɵɵelementStart(1, "g");
                i0.ɵɵelement(2, "line", 1);
                i0.ɵɵelement(3, "line", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IconCloseComponent, [{
                type: i0.Component,
                args: [{
                        selector: "epsgis-icon-close",
                        template: "\n    <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n            viewBox=\"0 0 10 10\" height=\"100%\" width=\"100%\">\n            <g>\n              <line y2=\"0\" x2=\"10\" y1=\"10\" x1=\"0\"></line>\n              <line y2=\"10\" x2=\"10\" y1=\"0\" x1=\"0\"></line>\n            </g>\n    </svg>\n    ",
                        styles: []
                    }]
            }], null, null);
    })();

    var _c0$3 = ["sspanel-titlebar", ""];
    function PanelTitleBarComponent_ng_container_0_img_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "img", 7);
        }
        if (rf & 2) {
            var ctx_r5 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("src", ctx_r5.icon, i0.ɵɵsanitizeUrl);
        }
    }
    function PanelTitleBarComponent_ng_container_0_i_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "i", 8);
        }
        if (rf & 2) {
            var ctx_r6 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("nzIconfont", ctx_r6.icon);
        }
    }
    function PanelTitleBarComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "div", 4);
            i0.ɵɵtemplate(2, PanelTitleBarComponent_ng_container_0_img_2_Template, 1, 1, "img", 5);
            i0.ɵɵtemplate(3, PanelTitleBarComponent_ng_container_0_i_3_Template, 1, 1, "i", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx_r0.isShowImg);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx_r0.isShowImg);
        }
    }
    function PanelTitleBarComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r8_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 9);
            i0.ɵɵlistener("click", function PanelTitleBarComponent_div_4_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r8_1); var ctx_r7 = i0.ɵɵnextContext(); return ctx_r7._buttonSettingClick($event); });
            i0.ɵɵelement(1, "epsgis-icon-setting");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵpropertyInterpolate("title", ctx_r1.options.buttonSettingText);
        }
    }
    function PanelTitleBarComponent_ng_container_5_ng_container_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r14_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 13);
            i0.ɵɵlistener("click", function PanelTitleBarComponent_ng_container_5_ng_container_1_div_1_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r14_1); var ctx_r13 = i0.ɵɵnextContext(3); return ctx_r13._buttonCollapseClick($event); });
            i0.ɵɵelement(1, "epsgis-icon-uncollapsed");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r12 = i0.ɵɵnextContext(3);
            i0.ɵɵpropertyInterpolate("title", ctx_r12.options.buttonUnCollapseText);
        }
    }
    function PanelTitleBarComponent_ng_container_5_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, PanelTitleBarComponent_ng_container_5_ng_container_1_div_1_Template, 2, 1, "div", 12);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r9 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r9.options.buttonCollapse);
        }
    }
    function PanelTitleBarComponent_ng_container_5_ng_template_2_div_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r17_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 15);
            i0.ɵɵlistener("click", function PanelTitleBarComponent_ng_container_5_ng_template_2_div_0_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r17_1); var ctx_r16 = i0.ɵɵnextContext(3); return ctx_r16._buttonCollapseClick($event); });
            i0.ɵɵelement(1, "epsgis-icon-collapsed");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r15 = i0.ɵɵnextContext(3);
            i0.ɵɵpropertyInterpolate("title", ctx_r15.options.buttonCollapseText);
        }
    }
    function PanelTitleBarComponent_ng_container_5_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, PanelTitleBarComponent_ng_container_5_ng_template_2_div_0_Template, 2, 1, "div", 14);
        }
        if (rf & 2) {
            var ctx_r11 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("ngIf", ctx_r11.options.buttonCollapse);
        }
    }
    function PanelTitleBarComponent_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, PanelTitleBarComponent_ng_container_5_ng_container_1_Template, 2, 1, "ng-container", 10);
            i0.ɵɵtemplate(2, PanelTitleBarComponent_ng_container_5_ng_template_2_Template, 1, 1, "ng-template", null, 11, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var _r10 = i0.ɵɵreference(3);
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r2.windowState == "collapsed")("ngIfElse", _r10);
        }
    }
    function PanelTitleBarComponent_ng_container_6_ng_container_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r23_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 18);
            i0.ɵɵlistener("click", function PanelTitleBarComponent_ng_container_6_ng_container_1_div_1_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r23_1); var ctx_r22 = i0.ɵɵnextContext(3); return ctx_r22._buttonMaximizeClick($event); });
            i0.ɵɵelement(1, "epsgis-icon-unmaximize");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r21 = i0.ɵɵnextContext(3);
            i0.ɵɵpropertyInterpolate("title", ctx_r21.options.buttonUnmaximizeText);
        }
    }
    function PanelTitleBarComponent_ng_container_6_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, PanelTitleBarComponent_ng_container_6_ng_container_1_div_1_Template, 2, 1, "div", 17);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r18 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r18.options.buttonMaximize);
        }
    }
    function PanelTitleBarComponent_ng_container_6_ng_template_2_div_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r26_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 20);
            i0.ɵɵlistener("click", function PanelTitleBarComponent_ng_container_6_ng_template_2_div_0_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r26_1); var ctx_r25 = i0.ɵɵnextContext(3); return ctx_r25._buttonMaximizeClick($event); });
            i0.ɵɵelement(1, "epsgis-icon-maximize");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r24 = i0.ɵɵnextContext(3);
            i0.ɵɵpropertyInterpolate("title", ctx_r24.options.buttonMaximizeText);
        }
    }
    function PanelTitleBarComponent_ng_container_6_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, PanelTitleBarComponent_ng_container_6_ng_template_2_div_0_Template, 2, 1, "div", 19);
        }
        if (rf & 2) {
            var ctx_r20 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("ngIf", ctx_r20.options.buttonMaximize);
        }
    }
    function PanelTitleBarComponent_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, PanelTitleBarComponent_ng_container_6_ng_container_1_Template, 2, 1, "ng-container", 10);
            i0.ɵɵtemplate(2, PanelTitleBarComponent_ng_container_6_ng_template_2_Template, 1, 1, "ng-template", null, 16, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var _r19 = i0.ɵɵreference(3);
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r3.windowState == "maximized")("ngIfElse", _r19);
        }
    }
    function PanelTitleBarComponent_ng_container_7_div_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r29_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 22);
            i0.ɵɵlistener("click", function PanelTitleBarComponent_ng_container_7_div_1_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r29_1); var ctx_r28 = i0.ɵɵnextContext(2); return ctx_r28._buttonCloseClick($event); });
            i0.ɵɵelement(1, "epsgis-icon-close");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r27 = i0.ɵɵnextContext(2);
            i0.ɵɵpropertyInterpolate("title", ctx_r27.options.buttonCloseText);
        }
    }
    function PanelTitleBarComponent_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, PanelTitleBarComponent_ng_container_7_div_1_Template, 2, 1, "div", 21);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r4 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r4.options.buttonClose);
        }
    }
    var PanelTitleBarComponent = /** @class */ (function () {
        function PanelTitleBarComponent(ele) {
            var _this = this;
            this.ele = ele;
            this.options = DefaultPanelOptions;
            this.hasIcon = false;
            this.onMouseDown = new i0.EventEmitter();
            this.onClickSetting = new i0.EventEmitter();
            this.onClickCollapse = new i0.EventEmitter();
            this.onClickMaximize = new i0.EventEmitter();
            this.onClickClose = new i0.EventEmitter();
            this.ele.nativeElement.onmousedown = function (evt) {
                _this._titlebarMouseDown(evt);
            };
        }
        Object.defineProperty(PanelTitleBarComponent.prototype, "nativeElement", {
            get: function () {
                return this.ele.nativeElement;
            },
            enumerable: false,
            configurable: true
        });
        PanelTitleBarComponent.prototype._titlebarMouseDown = function (evt) {
            if (this.onMouseDown.observers.length >= 1) {
                this.onMouseDown.emit(evt);
            }
        };
        PanelTitleBarComponent.prototype._buttonSettingClick = function (evt) {
            if (this.onClickSetting.observers.length >= 1) {
                this.onClickSetting.emit(evt);
            }
        };
        PanelTitleBarComponent.prototype._buttonCollapseClick = function (evt) {
            if (this.onClickCollapse.observers.length >= 1) {
                this.onClickCollapse.emit(evt);
            }
        };
        PanelTitleBarComponent.prototype._buttonMaximizeClick = function (evt) {
            if (this.onClickMaximize.observers.length >= 1) {
                this.onClickMaximize.emit(evt);
            }
        };
        PanelTitleBarComponent.prototype._buttonCloseClick = function (evt) {
            if (this.onClickClose.observers.length >= 1) {
                this.onClickClose.emit(evt);
            }
        };
        return PanelTitleBarComponent;
    }());
    PanelTitleBarComponent.ɵfac = function PanelTitleBarComponent_Factory(t) { return new (t || PanelTitleBarComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    PanelTitleBarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PanelTitleBarComponent, selectors: [["div", "sspanel-titlebar", ""]], inputs: { options: "options", hasIcon: "hasIcon", isShowImg: "isShowImg", icon: "icon", windowState: "windowState" }, outputs: { onMouseDown: "onMouseDown", onClickSetting: "onClickSetting", onClickCollapse: "onClickCollapse", onClickMaximize: "onClickMaximize", onClickClose: "onClickClose" }, attrs: _c0$3, decls: 8, vars: 6, consts: [[4, "ngIf"], [1, "sspanel_titlebar_text"], [1, "sspanel_titlebar_text_span"], ["class", "sspanel_titlebar_button sspanel_titlebar_button_setting", 3, "title", "click", 4, "ngIf"], [1, "icon"], [3, "src", 4, "ngIf"], ["nz-icon", "", 3, "nzIconfont", 4, "ngIf"], [3, "src"], ["nz-icon", "", 3, "nzIconfont"], [1, "sspanel_titlebar_button", "sspanel_titlebar_button_setting", 3, "title", "click"], [4, "ngIf", "ngIfElse"], ["showCollapsedButton", ""], ["class", "sspanel_titlebar_button sspanel_titlebar_button_uncollapse", 3, "title", "click", 4, "ngIf"], [1, "sspanel_titlebar_button", "sspanel_titlebar_button_uncollapse", 3, "title", "click"], ["class", "sspanel_titlebar_button sspanel_titlebar_button_collapse", 3, "title", "click", 4, "ngIf"], [1, "sspanel_titlebar_button", "sspanel_titlebar_button_collapse", 3, "title", "click"], ["showMaximizeButton", ""], ["class", "sspanel_titlebar_button sspanel_titlebar_button_unmaximize", 3, "title", "click", 4, "ngIf"], [1, "sspanel_titlebar_button", "sspanel_titlebar_button_unmaximize", 3, "title", "click"], ["class", "sspanel_titlebar_button sspanel_titlebar_button_maximize", 3, "title", "click", 4, "ngIf"], [1, "sspanel_titlebar_button", "sspanel_titlebar_button_maximize", 3, "title", "click"], ["class", "sspanel_titlebar_button sspanel_titlebar_button_close", 3, "title", "click", 4, "ngIf"], [1, "sspanel_titlebar_button", "sspanel_titlebar_button_close", 3, "title", "click"]], template: function PanelTitleBarComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, PanelTitleBarComponent_ng_container_0_Template, 4, 2, "ng-container", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵelementStart(2, "span", 2);
                i0.ɵɵtext(3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(4, PanelTitleBarComponent_div_4_Template, 2, 1, "div", 3);
                i0.ɵɵtemplate(5, PanelTitleBarComponent_ng_container_5_Template, 4, 2, "ng-container", 0);
                i0.ɵɵtemplate(6, PanelTitleBarComponent_ng_container_6_Template, 4, 2, "ng-container", 0);
                i0.ɵɵtemplate(7, PanelTitleBarComponent_ng_container_7_Template, 2, 1, "ng-container", 0);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", ctx.hasIcon);
                i0.ɵɵadvance(3);
                i0.ɵɵtextInterpolate(ctx.options.title);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.options.buttonSetting);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.options.buttonCollapse);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.options.buttonMaximize);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.options.buttonClose);
            }
        }, directives: [i1$1.NgIf, i2.NzIconDirective, IconSettingComponent, IconUnCollapsedComponent, IconCollapsedComponent, IconUnMaximizeComponent, IconMaximizeComponent, IconCloseComponent], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PanelTitleBarComponent, [{
                type: i0.Component,
                args: [{
                        selector: "div[sspanel-titlebar]",
                        template: "\n    <!-- \u8FD9\u5F71\u54CD\u6837\u5F0F -->\n    <!-- <div class=\"sspanel_titlebar sspanel_titlebar_draggable\" #sspanel_titlebar\n      (mousedown)=\"_titlebarMouseDown($event);\"> -->\n      <ng-container *ngIf=\"hasIcon\">\n        <div class=\"icon\">\n          <img *ngIf=\"isShowImg\" [src]=\"icon\">\n          <i *ngIf=\"!isShowImg\" nz-icon [nzIconfont]=\"icon\"></i>\n        </div>\n      </ng-container>\n      <div class=\"sspanel_titlebar_text\"><span class=\"sspanel_titlebar_text_span\">{{options.title}}</span></div>\n      <div *ngIf=\"options.buttonSetting\" class=\"sspanel_titlebar_button sspanel_titlebar_button_setting\" title=\"{{options.buttonSettingText}}\" (click)=\"_buttonSettingClick($event);\">\n        <epsgis-icon-setting></epsgis-icon-setting>\n      </div>\n      <ng-container *ngIf=\"options.buttonCollapse\">\n        <ng-container *ngIf=\"windowState=='collapsed'; else showCollapsedButton\">\n          <div *ngIf=\"options.buttonCollapse\"  class=\"sspanel_titlebar_button sspanel_titlebar_button_uncollapse\" title=\"{{options.buttonUnCollapseText}}\"\n            (click)=\"_buttonCollapseClick($event);\">\n            <epsgis-icon-uncollapsed></epsgis-icon-uncollapsed>\n          </div>\n        </ng-container>\n        <ng-template #showCollapsedButton>\n          <div *ngIf=\"options.buttonCollapse\" class=\"sspanel_titlebar_button sspanel_titlebar_button_collapse\" title=\"{{options.buttonCollapseText}}\"\n            (click)=\"_buttonCollapseClick($event);\">\n            <epsgis-icon-collapsed></epsgis-icon-collapsed>\n          </div>\n        </ng-template>\n      </ng-container>\n      <ng-container *ngIf=\"options.buttonMaximize\">\n        <ng-container *ngIf=\"windowState == 'maximized'; else showMaximizeButton\">\n          <div *ngIf=\"options.buttonMaximize\" class=\"sspanel_titlebar_button sspanel_titlebar_button_unmaximize\" title=\"{{options.buttonUnmaximizeText}}\"\n            (click)=\"_buttonMaximizeClick($event);\">\n            <epsgis-icon-unmaximize></epsgis-icon-unmaximize>\n          </div>\n        </ng-container>\n        <ng-template #showMaximizeButton>\n          <div *ngIf=\"options.buttonMaximize\" class=\"sspanel_titlebar_button sspanel_titlebar_button_maximize\" title=\"{{options.buttonMaximizeText}}\"\n            (click)=\"_buttonMaximizeClick($event);\">\n            <epsgis-icon-maximize></epsgis-icon-maximize>\n            \n          </div>\n        </ng-template>\n      </ng-container>\n\n      <ng-container *ngIf=\"options.buttonClose\">\n        <div  *ngIf=\"options.buttonClose\" class=\"sspanel_titlebar_button sspanel_titlebar_button_close\" title=\"{{options.buttonCloseText}}\"\n          (click)=\"_buttonCloseClick($event);\">\n          <epsgis-icon-close></epsgis-icon-close>\n        </div>\n      </ng-container>\n    <!-- </div> -->\n    ",
                        styles: []
                    }]
            }], function () { return [{ type: i0.ElementRef }]; }, { options: [{
                    type: i0.Input
                }], hasIcon: [{
                    type: i0.Input
                }], isShowImg: [{
                    type: i0.Input
                }], icon: [{
                    type: i0.Input
                }], windowState: [{
                    type: i0.Input
                }], onMouseDown: [{
                    type: i0.Output
                }], onClickSetting: [{
                    type: i0.Output
                }], onClickCollapse: [{
                    type: i0.Output
                }], onClickMaximize: [{
                    type: i0.Output
                }], onClickClose: [{
                    type: i0.Output
                }] });
    })();

    function OnScreenWidgetPanelComponent_ng_template_7_Template(rf, ctx) { }
    exports.OnScreenWidgetPanelComponent = /** @class */ (function (_super) {
        __extends(OnScreenWidgetPanelComponent, _super);
        function OnScreenWidgetPanelComponent(_render, cdr) {
            var _this = _super.call(this, _render, cdr) || this;
            _this.cdr = cdr;
            return _this;
        }
        OnScreenWidgetPanelComponent.prototype.ngOnInit = function () { _super.prototype.ngOnInit.call(this); };
        OnScreenWidgetPanelComponent.prototype.ngAfterViewInit = function () {
            _super.prototype.ngAfterViewInit.call(this);
        };
        return OnScreenWidgetPanelComponent;
    }(BasePanelComponent));
    exports.OnScreenWidgetPanelComponent.ɵfac = function OnScreenWidgetPanelComponent_Factory(t) { return new (t || exports.OnScreenWidgetPanelComponent)(i0.ɵɵdirectiveInject(i0.Renderer2, 8), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef, 8)); };
    exports.OnScreenWidgetPanelComponent.ɵcmp = i0.ɵɵdefineComponent({ type: exports.OnScreenWidgetPanelComponent, selectors: [["epsgis-on-screen-widget-panel"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 18, vars: 5, consts: [[1, "sspanel_overlay"], ["sspanel_overlay", ""], [1, "sspanel", 3, "id", "ngStyle"], ["sspanel", ""], ["sspanel-titlebar", "", 1, "sspanel_titlebar", "sspanel_titlebar_draggable", 3, "hasIcon", "options", "windowState", "onMouseDown", "onClickSetting", "onClickCollapse", "onClickMaximize", "onClickClose"], ["sspanel_titlebar", ""], [1, "sspanel_content", 3, "click"], ["widget_content", ""], [1, "sspanel_resizer", "sspanel_resizer_top", 3, "mousedown"], [1, "sspanel_resizer", "sspanel_resizer_bottom", 3, "mousedown"], [1, "sspanel_resizer", "sspanel_resizer_left", 3, "mousedown"], [1, "sspanel_resizer", "sspanel_resizer_right", 3, "mousedown"], [1, "sspanel_resizer", "sspanel_resizer_topleft", 3, "mousedown"], [1, "sspanel_resizer", "sspanel_resizer_topright", 3, "mousedown"], [1, "sspanel_resizer", "sspanel_resizer_bottomleft", 3, "mousedown"], [1, "sspanel_resizer", "sspanel_resizer_bottomright", 3, "mousedown"], [1, "sspanel_minplaceholder"]], template: function OnScreenWidgetPanelComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0, 1);
                i0.ɵɵelementStart(2, "div", 2, 3);
                i0.ɵɵelementStart(4, "div", 4, 5);
                i0.ɵɵlistener("onMouseDown", function OnScreenWidgetPanelComponent_Template_div_onMouseDown_4_listener($event) { return ctx._titlebar_MouseDown($event); })("onClickSetting", function OnScreenWidgetPanelComponent_Template_div_onClickSetting_4_listener() { return ctx.openWidgetSetting(); })("onClickCollapse", function OnScreenWidgetPanelComponent_Template_div_onClickCollapse_4_listener($event) { return ctx._buttonCollapse_Click($event); })("onClickMaximize", function OnScreenWidgetPanelComponent_Template_div_onClickMaximize_4_listener($event) { return ctx._buttonMax_Click($event); })("onClickClose", function OnScreenWidgetPanelComponent_Template_div_onClickClose_4_listener($event) { return ctx.closePanel($event); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "div", 6);
                i0.ɵɵlistener("click", function OnScreenWidgetPanelComponent_Template_div_click_6_listener($event) { return ctx._contentClick($event); });
                i0.ɵɵtemplate(7, OnScreenWidgetPanelComponent_ng_template_7_Template, 0, 0, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "div", 8);
                i0.ɵɵlistener("mousedown", function OnScreenWidgetPanelComponent_Template_div_mousedown_9_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "height", directionY: "top" }); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(10, "div", 9);
                i0.ɵɵlistener("mousedown", function OnScreenWidgetPanelComponent_Template_div_mousedown_10_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "height", directionY: "bottom" }); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(11, "div", 10);
                i0.ɵɵlistener("mousedown", function OnScreenWidgetPanelComponent_Template_div_mousedown_11_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "width", directionX: "left" }); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(12, "div", 11);
                i0.ɵɵlistener("mousedown", function OnScreenWidgetPanelComponent_Template_div_mousedown_12_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "width", directionX: "right" }); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(13, "div", 12);
                i0.ɵɵlistener("mousedown", function OnScreenWidgetPanelComponent_Template_div_mousedown_13_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "both", directionX: "left", directionY: "top" }); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(14, "div", 13);
                i0.ɵɵlistener("mousedown", function OnScreenWidgetPanelComponent_Template_div_mousedown_14_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "both", directionX: "right", directionY: "top" }); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(15, "div", 14);
                i0.ɵɵlistener("mousedown", function OnScreenWidgetPanelComponent_Template_div_mousedown_15_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "both", directionX: "left", directionY: "bottom" }); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(16, "div", 15);
                i0.ɵɵlistener("mousedown", function OnScreenWidgetPanelComponent_Template_div_mousedown_16_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "both", directionX: "right", directionY: "bottom" }); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelement(17, "div", 16);
            }
            if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵpropertyInterpolate("id", ctx.options.id);
                i0.ɵɵproperty("ngStyle", ctx.position);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("hasIcon", false)("options", ctx.options)("windowState", ctx.windowState);
            }
        }, directives: [i1$1.NgStyle, PanelTitleBarComponent], styles: [""] });
    exports.OnScreenWidgetPanelComponent = __decorate([
        ComponentRegister({
            uri: "epsgis-on-screen-widget-panel",
            path: "components/on-screen-widget-panel"
        })
    ], exports.OnScreenWidgetPanelComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(exports.OnScreenWidgetPanelComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'epsgis-on-screen-widget-panel',
                        templateUrl: './on-screen-widget-panel.component.html',
                        styleUrls: ['./on-screen-widget-panel.component.scss']
                    }]
            }], function () {
            return [{ type: i0.Renderer2, decorators: [{
                            type: i0.Optional
                        }] }, { type: i0.ChangeDetectorRef, decorators: [{
                            type: i0.Optional
                        }] }];
        }, null);
    })();

    var _c0$4 = ["center_collapse"];
    var BaseDockablePanelComponent = /** @class */ (function (_super) {
        __extends(BaseDockablePanelComponent, _super);
        function BaseDockablePanelComponent(_render, cdr) {
            var _this = _super.call(this, _render, cdr) || this;
            _this._render = _render;
            _this.cdr = cdr;
            _this.zIndex = 100;
            _this._isCollapse = false;
            _this.moveTopOnActive = false;
            return _this;
        }
        Object.defineProperty(BaseDockablePanelComponent.prototype, "mapBounds", {
            get: function () {
                var rect = this.commonService.getElementBounds(this.commonService.getComponentRootNode(this.mapManager.comRefMap));
                rect.top = rect.top - this._getMapTop();
                rect.left = rect.left - this._getMapLeft();
                return rect;
            },
            enumerable: false,
            configurable: true
        });
        BaseDockablePanelComponent.prototype._getMapTop = function () {
            var ele = this.commonService.getComponentRootNode(this.mapManager.comRefMap);
            var rect = ele.getBoundingClientRect();
            var mapSettingTop = "0";
            if (this.widgetManager.appConfig.map.position && this.widgetManager.appConfig.map.position.top)
                mapSettingTop = this.widgetManager.appConfig.map.position.top;
            var chv = parseFloat(this.commonService.getPxNumber(mapSettingTop).toString());
            var mapTop = rect.top - chv;
            return mapTop;
        };
        BaseDockablePanelComponent.prototype._getMapLeft = function () {
            var ele = this.commonService.getComponentRootNode(this.mapManager.comRefMap);
            var rect = ele.getBoundingClientRect();
            var mapSettingLeft = 0;
            if (this.widgetManager.appConfig.map.position && this.widgetManager.appConfig.map.position.left)
                mapSettingLeft = this.widgetManager.appConfig.map.position.left;
            var chv = parseFloat(this.commonService.getPxNumber(mapSettingLeft).toString());
            var mapLeft = rect.left - chv;
            return mapLeft;
        };
        BaseDockablePanelComponent.prototype.ngOnInit = function () {
            _super.prototype.ngOnInit.call(this);
        };
        BaseDockablePanelComponent.prototype.ngAfterViewInit = function () {
            _super.prototype.ngAfterViewInit.call(this);
        };
        BaseDockablePanelComponent.prototype.ngOnDestroy = function () {
            _super.prototype.ngOnDestroy.call(this);
        };
        BaseDockablePanelComponent.prototype._setPCPosition = function () {
            this.widgetConfig.position.zIndex = this.zIndex;
            _super.prototype._setPCPosition.call(this);
        };
        BaseDockablePanelComponent.prototype.onMove = function () {
            _super.prototype.onMove.call(this);
        };
        BaseDockablePanelComponent.prototype.onClose = function () {
            _super.prototype.onClose.call(this);
        };
        BaseDockablePanelComponent.prototype._resizeMapWhenResize = function () {
            switch (this.dockMode) {
                case exports.PanelDockMode.left:
                    this.mapManager.changeMapPosition({ left: this.commonService.getPx(this.currentSize.width) });
                    break;
                case exports.PanelDockMode.bottom:
                    this.mapManager.changeMapPosition({ bottom: this.commonService.getPx(this.currentSize.height) });
                    break;
                case exports.PanelDockMode.right:
                    this.mapManager.changeMapPosition({ right: this.commonService.getPx(this.currentSize.width) });
                    break;
                default:
                    break;
            }
        };
        BaseDockablePanelComponent.prototype._resizeMapWhenClose = function () {
            switch (this.dockMode) {
                case exports.PanelDockMode.left:
                    this.mapManager.changeMapPosition({ left: this.commonService.getPx(this.mapManager.originMapPosition.left) });
                    break;
                case exports.PanelDockMode.bottom:
                    this.mapManager.changeMapPosition({ bottom: this.commonService.getPx(this.mapManager.originMapPosition.bottom) });
                    break;
                case exports.PanelDockMode.right:
                    this.mapManager.changeMapPosition({ right: this.commonService.getPx(this.mapManager.originMapPosition.right) });
                    break;
                default:
                    break;
            }
        };
        BaseDockablePanelComponent.prototype.showPanel = function () {
            this.__expand(false);
            _super.prototype.showPanel.call(this);
        };
        BaseDockablePanelComponent.prototype.hidePanel = function () {
            this.__collapse(false);
            _super.prototype.hidePanel.call(this);
        };
        BaseDockablePanelComponent.prototype.__collapse = function (runOnClose) {
            var _eleSvg = this.sspanel_center_collapse.nativeElement.querySelector("svg");
            if (this.dockMode === exports.PanelDockMode.left) {
                var _left = -this.commonService.getElementBounds(this.sspanel.nativeElement).width;
                this._render.setStyle(this.sspanel.nativeElement, "left", _left + "px");
            }
            else if (this.dockMode === exports.PanelDockMode.bottom) {
                var _bottom = -this.commonService.getElementBounds(this.sspanel.nativeElement).height;
                this._render.setStyle(this.sspanel.nativeElement, "bottom", _bottom + "px");
            }
            else if (this.dockMode === exports.PanelDockMode.right) {
                var _right = -this.commonService.getElementBounds(this.sspanel.nativeElement).width;
                this._render.setStyle(this.sspanel.nativeElement, "right", _right + "px");
            }
            this._render.addClass(_eleSvg, "expand");
            this._resizeMapWhenClose();
            this._isCollapse = true;
        };
        BaseDockablePanelComponent.prototype.__expand = function (runOnOpen) {
            var _eleSvg = this.sspanel_center_collapse.nativeElement.querySelector("svg");
            if (this.dockMode === exports.PanelDockMode.left) {
                this._render.setStyle(this.sspanel.nativeElement, "left", "0px");
            }
            else if (this.dockMode === exports.PanelDockMode.bottom) {
                this._render.setStyle(this.sspanel.nativeElement, "bottom", "0px");
            }
            else if (this.dockMode === exports.PanelDockMode.right) {
                this._render.setStyle(this.sspanel.nativeElement, "right", "0px");
            }
            this._render.removeClass(_eleSvg, "expand");
            this._resizeMapWhenResize();
            this._isCollapse = false;
        };
        BaseDockablePanelComponent.prototype.collapsePanel = function (evt) {
            if (this._isCollapse) {
                this.__expand(false);
            }
            else {
                this.__collapse(false);
            }
        };
        return BaseDockablePanelComponent;
    }(BasePanelComponent));
    BaseDockablePanelComponent.ɵfac = function BaseDockablePanelComponent_Factory(t) { return new (t || BaseDockablePanelComponent)(i0.ɵɵdirectiveInject(i0.Renderer2, 8), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef, 8)); };
    BaseDockablePanelComponent.ɵdir = i0.ɵɵdefineDirective({ type: BaseDockablePanelComponent, viewQuery: function BaseDockablePanelComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0$4, 3);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sspanel_center_collapse = _t.first);
            }
        }, features: [i0.ɵɵInheritDefinitionFeature] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseDockablePanelComponent, [{
                type: i0.Directive
            }], function () {
            return [{ type: i0.Renderer2, decorators: [{
                            type: i0.Optional
                        }] }, { type: i0.ChangeDetectorRef, decorators: [{
                            type: i0.Optional
                        }] }];
        }, { sspanel_center_collapse: [{
                    type: i0.ViewChild,
                    args: ["center_collapse", { static: true }]
                }] });
    })();

    function DockablePanelAtBottomComponent_ng_template_7_Template(rf, ctx) { }
    var _c0$5 = function (a0) { return { "notitle": a0 }; };
    var _c1$2 = function (a0) { return { "display": a0 }; };
    exports.DockablePanelAtBottomComponent = /** @class */ (function (_super) {
        __extends(DockablePanelAtBottomComponent, _super);
        function DockablePanelAtBottomComponent(_render, cdr) {
            var _this = _super.call(this, _render, cdr) || this;
            _this._render = _render;
            _this.cdr = cdr;
            _this.dockMode = exports.PanelDockMode.bottom;
            return _this;
        }
        DockablePanelAtBottomComponent.prototype.ngOnInit = function () {
            _super.prototype.ngOnInit.call(this);
        };
        DockablePanelAtBottomComponent.prototype.setOptions = function (options) {
            options.modal = false;
            options.draggable = false;
            options.buttonClose = true;
            options.buttonCollapse = false;
            options.buttonMaximize = false;
            options.buttonMinimize = false;
            options.centerCollapse = true;
            options.dockSide = exports.PanelDockMode.bottom;
            _super.prototype.setOptions.call(this, options);
        };
        DockablePanelAtBottomComponent.prototype._setPCPosition = function () {
            this.widgetConfig.position = _.merge(this.widgetConfig.position, {
                left: this.mapBounds.left,
                top: "auto",
                bottom: 0,
                right: 0,
                width: this.mapBounds.width
            });
            _super.prototype._setPCPosition.call(this);
        };
        DockablePanelAtBottomComponent.prototype.onResize = function () {
            _super.prototype._resizeMapWhenResize.call(this);
            _super.prototype.onResize.call(this);
        };
        DockablePanelAtBottomComponent.prototype.onOpen = function () {
            _super.prototype._resizeMapWhenResize.call(this);
            _super.prototype.onOpen.call(this);
        };
        DockablePanelAtBottomComponent.prototype.onClose = function () {
            _super.prototype._resizeMapWhenClose.call(this);
            _super.prototype.onClose.call(this);
        };
        DockablePanelAtBottomComponent.prototype.resize = function () {
            this.widgetConfig.position = _.merge(this.widgetConfig.position, {
                left: this.mapBounds.left,
                width: this.mapBounds.width
            });
            this._render.setStyle(this.sspanel.nativeElement, "left", this._convertToStyleVal(this.mapBounds.left));
            this._render.setStyle(this.sspanel.nativeElement, "width", this._convertToStyleVal(this.mapBounds.width));
        };
        return DockablePanelAtBottomComponent;
    }(BaseDockablePanelComponent));
    exports.DockablePanelAtBottomComponent.ɵfac = function DockablePanelAtBottomComponent_Factory(t) { return new (t || exports.DockablePanelAtBottomComponent)(i0.ɵɵdirectiveInject(i0.Renderer2, 8), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef, 8)); };
    exports.DockablePanelAtBottomComponent.ɵcmp = i0.ɵɵdefineComponent({ type: exports.DockablePanelAtBottomComponent, selectors: [["epsgis-dockable-panel-at-bottom"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 14, vars: 11, consts: [[1, "sspanel_overlay", 2, "display", "none"], ["sspanel_overlay", ""], [1, "sspanel", 3, "id", "ngClass", "ngStyle"], ["sspanel", ""], ["sspanel-titlebar", "", 1, "sspanel_titlebar", "sspanel_titlebar_draggable", 3, "hasIcon", "options", "windowState", "onClickSetting", "onClickClose"], ["sspanel_titlebar", ""], [1, "sspanel_content", 3, "click"], ["widget_content", ""], [1, "sspanel_resizer", "sspanel_resizer_top", 3, "mousedown"], [1, "collapse", 3, "ngStyle", "click"], ["center_collapse", ""], ["t", "1575033841131", "viewBox", "0 0 1024 1024", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "p-id", "16367", "width", "16", "height", "16", 1, "icon"], ["d", "M128.759037 245.033739l383.064442 383.064442 388.096039-388.097062 0.033769 0.070608c13.138228-12.709463 31.024597-20.528546 50.730405-20.528546 40.377616 0 73.114205 32.736589 73.114205 73.115228 0 19.705807-7.820106 37.591153-20.530592 50.730405l0.035816 0.034792-438.681134 438.685227-0.035816-0.035816c-13.280468 13.780865-31.915897 22.3838-52.585659 22.3838-0.071631 0-0.107447 0-0.178055 0-0.072655 0-0.10847 0-0.146333 0-20.669762 0-39.341007-8.601912-52.621475-22.3838l-0.035816 0.035816L20.336676 343.425653l0.179079-0.179079c-12.565177-13.139252-20.313651-30.951943-20.313651-50.587142 0-40.378639 32.736589-73.115228 73.114205-73.115228C95.485213 219.544205 115.334283 229.432413 128.759037 245.033739z", "p-id", "16368", "fill", "#bababa"]], template: function DockablePanelAtBottomComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "div", 0, 1);
                i0.ɵɵelementStart(2, "div", 2, 3);
                i0.ɵɵelementStart(4, "div", 4, 5);
                i0.ɵɵlistener("onClickSetting", function DockablePanelAtBottomComponent_Template_div_onClickSetting_4_listener() { return ctx.openWidgetSetting(); })("onClickClose", function DockablePanelAtBottomComponent_Template_div_onClickClose_4_listener($event) { return ctx.closePanel($event); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "div", 6);
                i0.ɵɵlistener("click", function DockablePanelAtBottomComponent_Template_div_click_6_listener($event) { return ctx._contentClick($event); });
                i0.ɵɵtemplate(7, DockablePanelAtBottomComponent_ng_template_7_Template, 0, 0, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "div", 8);
                i0.ɵɵlistener("mousedown", function DockablePanelAtBottomComponent_Template_div_mousedown_9_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "height", directionY: "top" }); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(10, "div", 9, 10);
                i0.ɵɵlistener("click", function DockablePanelAtBottomComponent_Template_div_click_10_listener($event) { return ctx.collapsePanel($event); });
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(12, "svg", 11);
                i0.ɵɵelement(13, "path", 12);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵpropertyInterpolate("id", ctx.options.id);
                i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c0$5, ctx.options.showTitle === false))("ngStyle", ctx.position);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("hasIcon", false)("options", ctx.options)("windowState", ctx.windowState);
                i0.ɵɵadvance(6);
                i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(9, _c1$2, ctx.options.centerCollapse ? "block" : "none"));
            }
        }, directives: [i1$1.NgClass, i1$1.NgStyle, PanelTitleBarComponent], styles: [".notitle[_ngcontent-%COMP%], .sspanel[_ngcontent-%COMP%]{border:none}.notitle[_ngcontent-%COMP%]   .sspanel_titlebar[_ngcontent-%COMP%]{display:none}.notitle[_ngcontent-%COMP%]   .sspanel_content[_ngcontent-%COMP%]{border:none}.notitle[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]{background:#fcfcfc}.notitle[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover   path[_ngcontent-%COMP%]{fill:#000}.collapse[_ngcontent-%COMP%]{position:absolute;left:50%;top:-16px;width:60px;height:16px;line-height:16px;padding-left:24px;cursor:pointer;background:#549dfe;border-radius:5px 5px 0 0;box-shadow:0 -3px 6px 0 #a0a0a0}.collapse[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover   path[_ngcontent-%COMP%]{fill:#fff}"] });
    exports.DockablePanelAtBottomComponent = __decorate([
        ComponentRegister({
            uri: 'epsgis-dockable-panel-at-bottom',
            path: "components/ex-panels/dockable-panel-at-bottom"
        })
    ], exports.DockablePanelAtBottomComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(exports.DockablePanelAtBottomComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'epsgis-dockable-panel-at-bottom',
                        templateUrl: './dockable-panel-at-bottom.component.html',
                        styleUrls: ['./dockable-panel-at-bottom.component.scss'],
                    }]
            }], function () {
            return [{ type: i0.Renderer2, decorators: [{
                            type: i0.Optional
                        }] }, { type: i0.ChangeDetectorRef, decorators: [{
                            type: i0.Optional
                        }] }];
        }, null);
    })();

    function DockablePanelAtRightComponent_ng_template_7_Template(rf, ctx) { }
    var _c0$6 = function (a0) { return { "notitle": a0 }; };
    var _c1$3 = function (a0) { return { "display": a0 }; };
    exports.DockablePanelAtRightComponent = /** @class */ (function (_super) {
        __extends(DockablePanelAtRightComponent, _super);
        function DockablePanelAtRightComponent(_render, cdr) {
            var _this = _super.call(this, _render, cdr) || this;
            _this._render = _render;
            _this.cdr = cdr;
            _this.dockMode = exports.PanelDockMode.right;
            return _this;
        }
        DockablePanelAtRightComponent.prototype.setOptions = function (options) {
            options.modal = false;
            options.draggable = false;
            options.buttonClose = false;
            options.buttonCollapse = false;
            options.buttonMaximize = false;
            options.buttonMinimize = false;
            options.centerCollapse = true;
            options.dockSide = exports.PanelDockMode.right;
            _super.prototype.setOptions.call(this, options);
        };
        DockablePanelAtRightComponent.prototype._setPCPosition = function () {
            this.widgetConfig.position = _.merge(this.widgetConfig.position, {
                left: "auto",
                top: this.mapBounds.top,
                bottom: 0,
                right: 0,
                height: "auto"
            });
            _super.prototype._setPCPosition.call(this);
        };
        DockablePanelAtRightComponent.prototype.onResize = function () {
            _super.prototype._resizeMapWhenResize.call(this);
            _super.prototype.onResize.call(this);
        };
        DockablePanelAtRightComponent.prototype.onOpen = function () {
            _super.prototype._resizeMapWhenResize.call(this);
            _super.prototype.onOpen.call(this);
        };
        DockablePanelAtRightComponent.prototype.onClose = function () {
            _super.prototype._resizeMapWhenClose.call(this);
            _super.prototype.onClose.call(this);
        };
        DockablePanelAtRightComponent.prototype.resize = function () {
        };
        return DockablePanelAtRightComponent;
    }(BaseDockablePanelComponent));
    exports.DockablePanelAtRightComponent.ɵfac = function DockablePanelAtRightComponent_Factory(t) { return new (t || exports.DockablePanelAtRightComponent)(i0.ɵɵdirectiveInject(i0.Renderer2, 8), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef, 8)); };
    exports.DockablePanelAtRightComponent.ɵcmp = i0.ɵɵdefineComponent({ type: exports.DockablePanelAtRightComponent, selectors: [["epsgis-dockable-panel-at-right"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 14, vars: 11, consts: [[1, "sspanel_overlay", 2, "display", "none"], ["sspanel_overlay", ""], [1, "sspanel", 3, "id", "ngClass", "ngStyle"], ["sspanel", ""], ["sspanel-titlebar", "", 1, "sspanel_titlebar", "sspanel_titlebar_draggable", 3, "hasIcon", "options", "windowState", "onClickSetting", "onClickClose"], ["sspanel_titlebar", ""], [1, "sspanel_content", 3, "click"], ["widget_content", ""], [1, "sspanel_resizer", "sspanel_resizer_left", 3, "mousedown"], [1, "collapse", 3, "ngStyle", "click"], ["center_collapse", ""], ["viewBox", "0 0 1024 1024", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16"], ["d", "M245.034251 895.239428l383.063419-383.063419L240.001631 124.07997l0.070608-0.033769c-12.709463-13.137205-20.530592-31.024597-20.530592-50.731428 0-40.376593 32.736589-73.111135 73.115228-73.111135 19.705807 0 37.591153 7.819083 50.730405 20.528546l0.034792-0.035816 438.686251 438.681134-0.035816 0.034792c13.779841 13.281491 22.3838 31.915897 22.3838 52.586682 0 0.071631 0 0.106424 0 0.178055 0 0.072655 0 0.10847 0 0.144286 0 20.669762-8.603959 39.341007-22.3838 52.623521l0.035816 0.033769L343.426165 1003.661789l-0.180102-0.179079c-13.140275 12.565177-30.950919 20.313651-50.588165 20.313651-40.378639 0-73.115228-32.736589-73.115228-73.114205C219.544717 928.512229 229.432924 908.664182 245.034251 895.239428z", "fill", "#bababa"]], template: function DockablePanelAtRightComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "div", 0, 1);
                i0.ɵɵelementStart(2, "div", 2, 3);
                i0.ɵɵelementStart(4, "div", 4, 5);
                i0.ɵɵlistener("onClickSetting", function DockablePanelAtRightComponent_Template_div_onClickSetting_4_listener() { return ctx.openWidgetSetting(); })("onClickClose", function DockablePanelAtRightComponent_Template_div_onClickClose_4_listener($event) { return ctx.closePanel($event); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "div", 6);
                i0.ɵɵlistener("click", function DockablePanelAtRightComponent_Template_div_click_6_listener($event) { return ctx._contentClick($event); });
                i0.ɵɵtemplate(7, DockablePanelAtRightComponent_ng_template_7_Template, 0, 0, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "div", 8);
                i0.ɵɵlistener("mousedown", function DockablePanelAtRightComponent_Template_div_mousedown_9_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "width", directionX: "left" }); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(10, "div", 9, 10);
                i0.ɵɵlistener("click", function DockablePanelAtRightComponent_Template_div_click_10_listener($event) { return ctx.collapsePanel($event); });
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(12, "svg", 11);
                i0.ɵɵelement(13, "path", 12);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵpropertyInterpolate("id", ctx.options.id);
                i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c0$6, ctx.options.showTitle === false))("ngStyle", ctx.position);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("hasIcon", false)("options", ctx.options)("windowState", ctx.windowState);
                i0.ɵɵadvance(6);
                i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(9, _c1$3, ctx.options.centerCollapse ? "block" : "none"));
            }
        }, directives: [i1$1.NgClass, i1$1.NgStyle, PanelTitleBarComponent], styles: [".notitle[_ngcontent-%COMP%]{border:none}.notitle[_ngcontent-%COMP%]   .sspanel_titlebar[_ngcontent-%COMP%]{display:none}.notitle[_ngcontent-%COMP%]   .sspanel_content[_ngcontent-%COMP%]{border:none}.collapse[_ngcontent-%COMP%]{position:absolute;top:50%;left:-16px;width:16px;height:60px;line-height:60px;cursor:pointer;background:#fcfcfc;border-radius:5px 0 0 5px;box-shadow:-6px 0 6px 0 #a0a0a0}.collapse[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover   path[_ngcontent-%COMP%]{fill:#000}"] });
    exports.DockablePanelAtRightComponent = __decorate([
        ComponentRegister({
            uri: 'epsgis-dockable-panel-at-right',
            path: "components/ex-panels/dockable-panel-at-right"
        })
    ], exports.DockablePanelAtRightComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(exports.DockablePanelAtRightComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'epsgis-dockable-panel-at-right',
                        templateUrl: './dockable-panel-at-right.component.html',
                        styleUrls: ['./dockable-panel-at-right.component.scss'],
                    }]
            }], function () {
            return [{ type: i0.Renderer2, decorators: [{
                            type: i0.Optional
                        }] }, { type: i0.ChangeDetectorRef, decorators: [{
                            type: i0.Optional
                        }] }];
        }, null);
    })();

    function DockablePanelAtLeftComponent_ng_template_7_Template(rf, ctx) { }
    var _c0$7 = function (a0) { return { "notitle": a0 }; };
    var _c1$4 = function (a0) { return { "display": a0 }; };
    exports.DockablePanelAtLeftComponent = /** @class */ (function (_super) {
        __extends(DockablePanelAtLeftComponent, _super);
        function DockablePanelAtLeftComponent(_render, cdr) {
            var _this = _super.call(this, _render, cdr) || this;
            _this._render = _render;
            _this.cdr = cdr;
            _this.dockMode = exports.PanelDockMode.left;
            return _this;
        }
        DockablePanelAtLeftComponent.prototype.ngOnInit = function () {
            _super.prototype.ngOnInit.call(this);
        };
        DockablePanelAtLeftComponent.prototype.ngAfterViewInit = function () {
            _super.prototype.ngAfterViewInit.call(this);
        };
        DockablePanelAtLeftComponent.prototype.ngOnDestroy = function () {
            _super.prototype.ngOnDestroy.call(this);
        };
        DockablePanelAtLeftComponent.prototype.setOptions = function (options) {
            options.modal = false;
            options.draggable = false;
            options.buttonClose = false;
            options.buttonCollapse = false;
            options.buttonMaximize = false;
            options.buttonMinimize = false;
            options.centerCollapse = true;
            options.dockSide = exports.PanelDockMode.left;
            _super.prototype.setOptions.call(this, options);
        };
        DockablePanelAtLeftComponent.prototype._setPCPosition = function () {
            this.widgetConfig.position = _.merge(this.widgetConfig.position, {
                left: 0,
                top: this.mapBounds.top,
                bottom: 0,
                right: 0,
                height: "auto"
            });
            _super.prototype._setPCPosition.call(this);
        };
        DockablePanelAtLeftComponent.prototype.onResize = function () {
            _super.prototype._resizeMapWhenResize.call(this);
            _super.prototype.onResize.call(this);
        };
        DockablePanelAtLeftComponent.prototype.onOpen = function () {
            _super.prototype._resizeMapWhenResize.call(this);
            _super.prototype.onOpen.call(this);
        };
        DockablePanelAtLeftComponent.prototype.onClose = function () {
            _super.prototype._resizeMapWhenClose.call(this);
            _super.prototype.onClose.call(this);
        };
        DockablePanelAtLeftComponent.prototype.resize = function () {
        };
        return DockablePanelAtLeftComponent;
    }(BaseDockablePanelComponent));
    exports.DockablePanelAtLeftComponent.ɵfac = function DockablePanelAtLeftComponent_Factory(t) { return new (t || exports.DockablePanelAtLeftComponent)(i0.ɵɵdirectiveInject(i0.Renderer2, 8), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef, 8)); };
    exports.DockablePanelAtLeftComponent.ɵcmp = i0.ɵɵdefineComponent({ type: exports.DockablePanelAtLeftComponent, selectors: [["epsgis-dockable-panel-at-left"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 14, vars: 11, consts: [[1, "sspanel_overlay", 2, "display", "none"], ["sspanel_overlay", ""], [1, "sspanel", 3, "id", "ngClass", "ngStyle"], ["sspanel", ""], ["sspanel-titlebar", "", 1, "sspanel_titlebar", "sspanel_titlebar_draggable", 3, "hasIcon", "options", "windowState", "onClickSetting", "onClickClose"], ["sspanel_titlebar", ""], [1, "sspanel_content", 3, "click"], ["widget_content", ""], [1, "sspanel_resizer", "sspanel_resizer_right", 3, "mousedown"], [1, "collapse", 3, "ngStyle", "click"], ["center_collapse", ""], ["viewBox", "0 0 1024 1024", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16"], ["d", "M778.965749 128.759549l-383.064442 383.063419 388.097062 388.096039-0.070608 0.033769c12.709463 13.137205 20.529569 31.024597 20.529569 50.731428 0 40.376593-32.736589 73.112158-73.115228 73.112158-19.705807 0-37.591153-7.819083-50.730405-20.528546l-0.034792 0.035816L241.890654 564.622498l0.035816-0.035816c-13.779841-13.281491-22.3838-31.915897-22.3838-52.585659 0-0.071631 0-0.106424 0-0.178055 0-0.072655 0-0.10847 0-0.144286 0-20.669762 8.603959-39.341007 22.3838-52.622498l-0.035816-0.034792L680.573835 20.337187l0.180102 0.179079c13.139252-12.5662 30.950919-20.313651 50.587142-20.313651 40.378639 0 73.115228 32.736589 73.115228 73.114205C804.455283 95.485725 794.567076 115.334795 778.965749 128.759549z", "fill", "#bababa"]], template: function DockablePanelAtLeftComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "div", 0, 1);
                i0.ɵɵelementStart(2, "div", 2, 3);
                i0.ɵɵelementStart(4, "div", 4, 5);
                i0.ɵɵlistener("onClickSetting", function DockablePanelAtLeftComponent_Template_div_onClickSetting_4_listener() { return ctx.openWidgetSetting(); })("onClickClose", function DockablePanelAtLeftComponent_Template_div_onClickClose_4_listener($event) { return ctx.closePanel($event); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "div", 6);
                i0.ɵɵlistener("click", function DockablePanelAtLeftComponent_Template_div_click_6_listener($event) { return ctx._contentClick($event); });
                i0.ɵɵtemplate(7, DockablePanelAtLeftComponent_ng_template_7_Template, 0, 0, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "div", 8);
                i0.ɵɵlistener("mousedown", function DockablePanelAtLeftComponent_Template_div_mousedown_9_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "width", directionX: "right" }); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(10, "div", 9, 10);
                i0.ɵɵlistener("click", function DockablePanelAtLeftComponent_Template_div_click_10_listener($event) { return ctx.collapsePanel($event); });
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(12, "svg", 11);
                i0.ɵɵelement(13, "path", 12);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵpropertyInterpolate("id", ctx.options.id);
                i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c0$7, ctx.options.showTitle === false))("ngStyle", ctx.position);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("hasIcon", false)("options", ctx.options)("windowState", ctx.windowState);
                i0.ɵɵadvance(6);
                i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(9, _c1$4, ctx.options.centerCollapse ? "block" : "none"));
            }
        }, directives: [i1$1.NgClass, i1$1.NgStyle, PanelTitleBarComponent], styles: [".notitle[_ngcontent-%COMP%]{border:none}.notitle[_ngcontent-%COMP%]   .sspanel_titlebar[_ngcontent-%COMP%]{display:none}.notitle[_ngcontent-%COMP%]   .sspanel_content[_ngcontent-%COMP%]{border:none}.collapse[_ngcontent-%COMP%]{position:absolute;top:50%;right:-16px;width:16px;height:60px;line-height:60px;cursor:pointer;background:#fcfcfc;border-radius:0 5px 5px 0;box-shadow:3px 0 3px 0 #a0a0a0}.collapse[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover   path[_ngcontent-%COMP%]{fill:#000}"] });
    exports.DockablePanelAtLeftComponent = __decorate([
        ComponentRegister({
            uri: 'epsgis-dockable-panel-at-left',
            path: "components/ex-panels/dockable-panel-at-left"
        })
    ], exports.DockablePanelAtLeftComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(exports.DockablePanelAtLeftComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'epsgis-dockable-panel-at-left',
                        templateUrl: './dockable-panel-at-left.component.html',
                        styleUrls: ['./dockable-panel-at-left.component.scss'],
                    }]
            }], function () {
            return [{ type: i0.Renderer2, decorators: [{
                            type: i0.Optional
                        }] }, { type: i0.ChangeDetectorRef, decorators: [{
                            type: i0.Optional
                        }] }];
        }, null);
    })();

    var BaseMobilePanelComponent = /** @class */ (function (_super) {
        __extends(BaseMobilePanelComponent, _super);
        function BaseMobilePanelComponent(_render, cdr) {
            var _this = _super.call(this, _render, cdr) || this;
            _this._render = _render;
            _this.cdr = cdr;
            _this.zIndex = 9999;
            _this.moveTopOnActive = false;
            return _this;
        }
        BaseMobilePanelComponent.prototype.ngOnInit = function () {
            _super.prototype.ngOnInit.call(this);
        };
        BaseMobilePanelComponent.prototype.ngAfterViewInit = function () {
            _super.prototype.ngAfterViewInit.call(this);
        };
        BaseMobilePanelComponent.prototype.ngOnDestroy = function () {
            _super.prototype.ngOnDestroy.call(this);
        };
        BaseMobilePanelComponent.prototype.setOptions = function (options) {
            if (this.widgetConfig && this.widgetConfig.mobile) {
                _.merge(options, this.widgetConfig.mobile);
            }
            _super.prototype.setOptions.call(this, options);
        };
        BaseMobilePanelComponent.prototype.getWidthHeight = function () {
            var _a = this.widgetConfig.position, width = _a.width, height = _a.height;
            if (this.widgetConfig.mobile
                && this.widgetConfig.mobile.position) {
                width = this.widgetConfig.mobile.position.width;
                height = this.widgetConfig.mobile.position.height;
            }
            var _w = this.commonService.getPxNumber(width), _h = this.commonService.getPxNumber(height);
            if (typeof _w === "number") {
                if (_w <= 0 || _w > innerWidth) {
                    _w = "100%";
                }
            }
            if (typeof _h === "number") {
                if (_h <= 0 || _w > innerHeight) {
                    _h = "100%";
                }
            }
            return { width: _w, height: _h };
        };
        return BaseMobilePanelComponent;
    }(BasePanelComponent));
    BaseMobilePanelComponent.ɵfac = function BaseMobilePanelComponent_Factory(t) { return new (t || BaseMobilePanelComponent)(i0.ɵɵdirectiveInject(i0.Renderer2, 8), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef, 8)); };
    BaseMobilePanelComponent.ɵdir = i0.ɵɵdefineDirective({ type: BaseMobilePanelComponent, features: [i0.ɵɵInheritDefinitionFeature] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseMobilePanelComponent, [{
                type: i0.Directive
            }], function () {
            return [{ type: i0.Renderer2, decorators: [{
                            type: i0.Optional
                        }] }, { type: i0.ChangeDetectorRef, decorators: [{
                            type: i0.Optional
                        }] }];
        }, null);
    })();

    function MobileActionPanelComponent_div_4_ng_container_4_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r12_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "div", 14);
            i0.ɵɵlistener("click", function MobileActionPanelComponent_div_4_ng_container_4_ng_container_1_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r12_1); var ctx_r11 = i0.ɵɵnextContext(3); return ctx_r11._buttonMax_Click($event); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(2, "svg", 15);
            i0.ɵɵelementStart(3, "g", 16);
            i0.ɵɵelement(4, "rect", 17);
            i0.ɵɵelement(5, "line", 18);
            i0.ɵɵelement(6, "line", 19);
            i0.ɵɵelement(7, "line", 20);
            i0.ɵɵelement(8, "line", 21);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r8 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(1);
            i0.ɵɵpropertyInterpolate("title", ctx_r8.options.buttonUnmaximizeText);
        }
    }
    function MobileActionPanelComponent_div_4_ng_container_4_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r14_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 14);
            i0.ɵɵlistener("click", function MobileActionPanelComponent_div_4_ng_container_4_ng_template_2_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r14_1); var ctx_r13 = i0.ɵɵnextContext(3); return ctx_r13._buttonMax_Click($event); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(1, "svg", 15);
            i0.ɵɵelementStart(2, "g", 16);
            i0.ɵɵelement(3, "rect", 22);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r10 = i0.ɵɵnextContext(3);
            i0.ɵɵpropertyInterpolate("title", ctx_r10.options.buttonMaximizeText);
        }
    }
    function MobileActionPanelComponent_div_4_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, MobileActionPanelComponent_div_4_ng_container_4_ng_container_1_Template, 9, 1, "ng-container", 12);
            i0.ɵɵtemplate(2, MobileActionPanelComponent_div_4_ng_container_4_ng_template_2_Template, 4, 1, "ng-template", null, 13, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var _r9 = i0.ɵɵreference(3);
            var ctx_r6 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r6.windowState == "maximized")("ngIfElse", _r9);
        }
    }
    function MobileActionPanelComponent_div_4_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r16_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "div", 23);
            i0.ɵɵlistener("click", function MobileActionPanelComponent_div_4_ng_container_5_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r16_1); var ctx_r15 = i0.ɵɵnextContext(2); return ctx_r15.closePanel($event); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(2, "svg", 15);
            i0.ɵɵelementStart(3, "g");
            i0.ɵɵelement(4, "line", 24);
            i0.ɵɵelement(5, "line", 25);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r7 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵpropertyInterpolate("title", ctx_r7.options.buttonCloseText);
        }
    }
    function MobileActionPanelComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r18_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 8, 9);
            i0.ɵɵlistener("mousedown", function MobileActionPanelComponent_div_4_Template_div_mousedown_0_listener($event) { i0.ɵɵrestoreView(_r18_1); var ctx_r17 = i0.ɵɵnextContext(); return ctx_r17._titlebar_MouseDown($event); });
            i0.ɵɵelementStart(2, "div", 10);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, MobileActionPanelComponent_div_4_ng_container_4_Template, 4, 2, "ng-container", 11);
            i0.ɵɵtemplate(5, MobileActionPanelComponent_div_4_ng_container_5_Template, 6, 1, "ng-container", 11);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", ctx_r2.options.title, "");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r2.options.buttonMaximize);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r2.options.buttonClose);
        }
    }
    function MobileActionPanelComponent_ng_template_6_Template(rf, ctx) { }
    exports.MobileActionPanelComponent = /** @class */ (function (_super) {
        __extends(MobileActionPanelComponent, _super);
        function MobileActionPanelComponent(_render, cdr) {
            var _this = _super.call(this, _render, cdr) || this;
            _this._render = _render;
            _this.cdr = cdr;
            _this._mobileShowMode = exports.PanelInMobileShowMode.action;
            return _this;
        }
        MobileActionPanelComponent.prototype.setOptions = function (options) {
            options.buttonCollapse = false;
            options.buttonMaximize = false;
            _super.prototype.setOptions.call(this, options);
        };
        MobileActionPanelComponent.prototype._setMobilePosition = function () {
            var obj = this.getWidthHeight();
            var _pos = new WidgetPosition("auto", 0, 0, 0, obj.height, "100%");
            this.widgetConfig.position = _pos;
            this._render.setStyle(this.sspanel.nativeElement, "max-height", obj.height);
        };
        return MobileActionPanelComponent;
    }(BaseMobilePanelComponent));
    exports.MobileActionPanelComponent.ɵfac = function MobileActionPanelComponent_Factory(t) { return new (t || exports.MobileActionPanelComponent)(i0.ɵɵdirectiveInject(i0.Renderer2, 8), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef, 8)); };
    exports.MobileActionPanelComponent.ɵcmp = i0.ɵɵdefineComponent({ type: exports.MobileActionPanelComponent, selectors: [["epsgis-mobile-action-panel"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 9, vars: 3, consts: [[1, "sspanel_overlay"], ["sspanel_overlay", ""], [1, "sspanel", 3, "id", "ngStyle"], ["sspanel", ""], ["class", "sspanel_titlebar sspanel_titlebar_draggable", 3, "mousedown", 4, "ngIf"], [1, "sspanel_content", 3, "click"], ["widget_content", ""], [1, "sspanel_resizer", "sspanel_resizer_top", 3, "mousedown"], [1, "sspanel_titlebar", "sspanel_titlebar_draggable", 3, "mousedown"], ["sspanel_titlebar", ""], [1, "sspanel_titlebar_text"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["showMaximizeButton", ""], [1, "sspanel_titlebar_button", "sspanel_titlebar_button_maximize", 3, "title", "click"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 10 10", "height", "100%", "width", "100%"], ["fill", "none"], ["x", "1", "y", "3", "height", "6", "width", "6"], ["y1", "3", "x1", "3", "y2", "1", "x2", "3"], ["y1", "1", "x1", "2.5", "y2", "1", "x2", "9.5"], ["y1", "1", "x1", "9", "y2", "7", "x2", "9"], ["y1", "7", "x1", "9.5", "y2", "7", "x2", "7"], ["x", "1", "y", "1", "height", "8", "width", "8"], [1, "sspanel_titlebar_button", "sspanel_titlebar_button_close", 3, "title", "click"], ["y2", "0", "x2", "10", "y1", "10", "x1", "0"], ["y2", "10", "x2", "10", "y1", "0", "x1", "0"]], template: function MobileActionPanelComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0, 1);
                i0.ɵɵelementStart(2, "div", 2, 3);
                i0.ɵɵtemplate(4, MobileActionPanelComponent_div_4_Template, 6, 3, "div", 4);
                i0.ɵɵelementStart(5, "div", 5);
                i0.ɵɵlistener("click", function MobileActionPanelComponent_Template_div_click_5_listener($event) { return ctx._contentClick($event); });
                i0.ɵɵtemplate(6, MobileActionPanelComponent_ng_template_6_Template, 0, 0, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(8, "div", 7);
                i0.ɵɵlistener("mousedown", function MobileActionPanelComponent_Template_div_mousedown_8_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "height", directionY: "top" }); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵpropertyInterpolate("id", ctx.options.id);
                i0.ɵɵproperty("ngStyle", ctx.position);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", ctx.options.showTitle);
            }
        }, directives: [i1$1.NgStyle, i1$1.NgIf], styles: [".sspanel[_ngcontent-%COMP%]{border:none}"] });
    exports.MobileActionPanelComponent = __decorate([
        ComponentRegister({
            uri: 'epsgis-mobile-action-panel',
            path: "components/mobile/action-panel"
        })
    ], exports.MobileActionPanelComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(exports.MobileActionPanelComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'epsgis-mobile-action-panel',
                        templateUrl: './action-panel.component.html',
                        styleUrls: ['./action-panel.component.scss']
                    }]
            }], function () {
            return [{ type: i0.Renderer2, decorators: [{
                            type: i0.Optional
                        }] }, { type: i0.ChangeDetectorRef, decorators: [{
                            type: i0.Optional
                        }] }];
        }, null);
    })();

    function MobileDrawerPanelComponent_div_4_ng_container_4_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r13_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "div", 13);
            i0.ɵɵlistener("click", function MobileDrawerPanelComponent_div_4_ng_container_4_ng_container_1_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r13_1); var ctx_r12 = i0.ɵɵnextContext(3); return ctx_r12._buttonCollapse_Click($event); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(2, "svg", 14);
            i0.ɵɵelementStart(3, "g", 15);
            i0.ɵɵelement(4, "polyline", 16);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r9 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(1);
            i0.ɵɵpropertyInterpolate("title", ctx_r9.options.buttonUnCollapseText);
        }
    }
    function MobileDrawerPanelComponent_div_4_ng_container_4_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r15_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 13);
            i0.ɵɵlistener("click", function MobileDrawerPanelComponent_div_4_ng_container_4_ng_template_2_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r15_1); var ctx_r14 = i0.ɵɵnextContext(3); return ctx_r14._buttonCollapse_Click($event); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(1, "svg", 14);
            i0.ɵɵelementStart(2, "g", 15);
            i0.ɵɵelement(3, "polyline", 17);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r11 = i0.ɵɵnextContext(3);
            i0.ɵɵpropertyInterpolate("title", ctx_r11.options.buttonCollapseText);
        }
    }
    function MobileDrawerPanelComponent_div_4_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, MobileDrawerPanelComponent_div_4_ng_container_4_ng_container_1_Template, 5, 1, "ng-container", 11);
            i0.ɵɵtemplate(2, MobileDrawerPanelComponent_div_4_ng_container_4_ng_template_2_Template, 4, 1, "ng-template", null, 12, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var _r10 = i0.ɵɵreference(3);
            var ctx_r6 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r6.windowState == "collapsed")("ngIfElse", _r10);
        }
    }
    function MobileDrawerPanelComponent_div_4_ng_container_5_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r20_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "div", 19);
            i0.ɵɵlistener("click", function MobileDrawerPanelComponent_div_4_ng_container_5_ng_container_1_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r20_1); var ctx_r19 = i0.ɵɵnextContext(3); return ctx_r19._buttonMax_Click($event); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(2, "svg", 14);
            i0.ɵɵelementStart(3, "g", 15);
            i0.ɵɵelement(4, "rect", 20);
            i0.ɵɵelement(5, "line", 21);
            i0.ɵɵelement(6, "line", 22);
            i0.ɵɵelement(7, "line", 23);
            i0.ɵɵelement(8, "line", 24);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r16 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(1);
            i0.ɵɵpropertyInterpolate("title", ctx_r16.options.buttonUnmaximizeText);
        }
    }
    function MobileDrawerPanelComponent_div_4_ng_container_5_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r22_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 19);
            i0.ɵɵlistener("click", function MobileDrawerPanelComponent_div_4_ng_container_5_ng_template_2_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r22_1); var ctx_r21 = i0.ɵɵnextContext(3); return ctx_r21._buttonMax_Click($event); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(1, "svg", 14);
            i0.ɵɵelementStart(2, "g", 15);
            i0.ɵɵelement(3, "rect", 25);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r18 = i0.ɵɵnextContext(3);
            i0.ɵɵpropertyInterpolate("title", ctx_r18.options.buttonMaximizeText);
        }
    }
    function MobileDrawerPanelComponent_div_4_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, MobileDrawerPanelComponent_div_4_ng_container_5_ng_container_1_Template, 9, 1, "ng-container", 11);
            i0.ɵɵtemplate(2, MobileDrawerPanelComponent_div_4_ng_container_5_ng_template_2_Template, 4, 1, "ng-template", null, 18, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var _r17 = i0.ɵɵreference(3);
            var ctx_r7 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r7.windowState == "maximized")("ngIfElse", _r17);
        }
    }
    function MobileDrawerPanelComponent_div_4_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
            var _r24_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "div", 26);
            i0.ɵɵlistener("click", function MobileDrawerPanelComponent_div_4_ng_container_6_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r24_1); var ctx_r23 = i0.ɵɵnextContext(2); return ctx_r23.closePanel($event); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(2, "svg", 14);
            i0.ɵɵelementStart(3, "g");
            i0.ɵɵelement(4, "line", 27);
            i0.ɵɵelement(5, "line", 28);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r8 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵpropertyInterpolate("title", ctx_r8.options.buttonCloseText);
        }
    }
    function MobileDrawerPanelComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r26_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 7, 8);
            i0.ɵɵlistener("mousedown", function MobileDrawerPanelComponent_div_4_Template_div_mousedown_0_listener($event) { i0.ɵɵrestoreView(_r26_1); var ctx_r25 = i0.ɵɵnextContext(); return ctx_r25._titlebar_MouseDown($event); });
            i0.ɵɵelementStart(2, "div", 9);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, MobileDrawerPanelComponent_div_4_ng_container_4_Template, 4, 2, "ng-container", 10);
            i0.ɵɵtemplate(5, MobileDrawerPanelComponent_div_4_ng_container_5_Template, 4, 2, "ng-container", 10);
            i0.ɵɵtemplate(6, MobileDrawerPanelComponent_div_4_ng_container_6_Template, 6, 1, "ng-container", 10);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", ctx_r2.options.title, "");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r2.options.buttonCollapse);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r2.options.buttonMaximize);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r2.options.buttonClose);
        }
    }
    function MobileDrawerPanelComponent_ng_template_6_Template(rf, ctx) { }
    exports.MobileDrawerPanelComponent = /** @class */ (function (_super) {
        __extends(MobileDrawerPanelComponent, _super);
        function MobileDrawerPanelComponent(_render, cdr) {
            var _this = _super.call(this, _render, cdr) || this;
            _this._render = _render;
            _this.cdr = cdr;
            _this._mobileShowMode = exports.PanelInMobileShowMode.drawer;
            return _this;
        }
        MobileDrawerPanelComponent.prototype.ngOnDestroy = function () {
            this._sspanelOverlayClickHandler();
            _super.prototype.ngOnDestroy.call(this);
        };
        MobileDrawerPanelComponent.prototype.setOptions = function (options) {
            options.buttonCollapse = false;
            options.buttonMaximize = false;
            _super.prototype.setOptions.call(this, options);
        };
        MobileDrawerPanelComponent.prototype._setMobilePosition = function () {
            var _this = this;
            var _width = "80%";
            if (this.widgetConfig.mobile && this.widgetConfig.mobile.position) {
                var obj = this.getWidthHeight();
                if (obj.width) {
                    _width = obj.width;
                }
            }
            var _pos = new WidgetPosition(0, 0, 0, 20, "100%", _width);
            this.widgetConfig.position = _pos;
            this._sspanelOverlayClickHandler = this.jsEventManager.addEventListener(this.sspanelOverlay.nativeElement, "click", function (evt) {
                if (evt.target === _this.sspanelOverlay.nativeElement) {
                    _this.closePanel(evt);
                }
            });
        };
        return MobileDrawerPanelComponent;
    }(BaseMobilePanelComponent));
    exports.MobileDrawerPanelComponent.ɵfac = function MobileDrawerPanelComponent_Factory(t) { return new (t || exports.MobileDrawerPanelComponent)(i0.ɵɵdirectiveInject(i0.Renderer2, 8), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef, 8)); };
    exports.MobileDrawerPanelComponent.ɵcmp = i0.ɵɵdefineComponent({ type: exports.MobileDrawerPanelComponent, selectors: [["epsgis-mobile-drawer-panel"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 8, vars: 3, consts: [[1, "sspanel_overlay"], ["sspanel_overlay", ""], [1, "sspanel", 3, "id", "ngStyle"], ["sspanel", ""], ["class", "sspanel_titlebar sspanel_titlebar_draggable", 3, "mousedown", 4, "ngIf"], [1, "sspanel_content", 3, "click"], ["widget_content", ""], [1, "sspanel_titlebar", "sspanel_titlebar_draggable", 3, "mousedown"], ["sspanel_titlebar", ""], [1, "sspanel_titlebar_text"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["showCollapsedButton", ""], [1, "sspanel_titlebar_button", "sspanel_titlebar_button_collapse", 3, "title", "click"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 10 10", "height", "100%", "width", "100%"], ["fill", "none"], ["points", "1,3 9,3 5,8 1,3 9,3"], ["points", "1,7 9,7 5,2 1,7 9,7"], ["showMaximizeButton", ""], [1, "sspanel_titlebar_button", "sspanel_titlebar_button_maximize", 3, "title", "click"], ["x", "1", "y", "3", "height", "6", "width", "6"], ["y1", "3", "x1", "3", "y2", "1", "x2", "3"], ["y1", "1", "x1", "2.5", "y2", "1", "x2", "9.5"], ["y1", "1", "x1", "9", "y2", "7", "x2", "9"], ["y1", "7", "x1", "9.5", "y2", "7", "x2", "7"], ["x", "1", "y", "1", "height", "8", "width", "8"], [1, "sspanel_titlebar_button", "sspanel_titlebar_button_close", 3, "title", "click"], ["y2", "0", "x2", "10", "y1", "10", "x1", "0"], ["y2", "10", "x2", "10", "y1", "0", "x1", "0"]], template: function MobileDrawerPanelComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0, 1);
                i0.ɵɵelementStart(2, "div", 2, 3);
                i0.ɵɵtemplate(4, MobileDrawerPanelComponent_div_4_Template, 7, 4, "div", 4);
                i0.ɵɵelementStart(5, "div", 5);
                i0.ɵɵlistener("click", function MobileDrawerPanelComponent_Template_div_click_5_listener($event) { return ctx._contentClick($event); });
                i0.ɵɵtemplate(6, MobileDrawerPanelComponent_ng_template_6_Template, 0, 0, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵpropertyInterpolate("id", ctx.options.id);
                i0.ɵɵproperty("ngStyle", ctx.position);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", ctx.options.showTitle);
            }
        }, directives: [i1$1.NgStyle, i1$1.NgIf], styles: [".sspanel[_ngcontent-%COMP%]{border:none}.sspanel_titlebar[_ngcontent-%COMP%]{background:#3880ff;height:44px}.sspanel_titlebar_text[_ngcontent-%COMP%]{text-align:center}.sspanel_titlebar_button[_ngcontent-%COMP%]{display:none}"] });
    exports.MobileDrawerPanelComponent = __decorate([
        ComponentRegister({
            uri: "epsgis-mobile-drawer-panel",
            path: "components/mobile/drawer-panel"
        })
    ], exports.MobileDrawerPanelComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(exports.MobileDrawerPanelComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'epsgis-mobile-drawer-panel',
                        templateUrl: './drawer-panel.component.html',
                        styleUrls: ['./drawer-panel.component.scss']
                    }]
            }], function () {
            return [{ type: i0.Renderer2, decorators: [{
                            type: i0.Optional
                        }] }, { type: i0.ChangeDetectorRef, decorators: [{
                            type: i0.Optional
                        }] }];
        }, null);
    })();

    function MobileModalPanelComponent_div_4_ng_container_4_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r13_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "div", 14);
            i0.ɵɵlistener("click", function MobileModalPanelComponent_div_4_ng_container_4_ng_container_1_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r13_1); var ctx_r12 = i0.ɵɵnextContext(3); return ctx_r12._buttonCollapse_Click($event); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(2, "svg", 15);
            i0.ɵɵelementStart(3, "g", 16);
            i0.ɵɵelement(4, "polyline", 17);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r9 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(1);
            i0.ɵɵpropertyInterpolate("title", ctx_r9.options.buttonUnCollapseText);
        }
    }
    function MobileModalPanelComponent_div_4_ng_container_4_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r15_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 14);
            i0.ɵɵlistener("click", function MobileModalPanelComponent_div_4_ng_container_4_ng_template_2_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r15_1); var ctx_r14 = i0.ɵɵnextContext(3); return ctx_r14._buttonCollapse_Click($event); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(1, "svg", 15);
            i0.ɵɵelementStart(2, "g", 16);
            i0.ɵɵelement(3, "polyline", 18);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r11 = i0.ɵɵnextContext(3);
            i0.ɵɵpropertyInterpolate("title", ctx_r11.options.buttonCollapseText);
        }
    }
    function MobileModalPanelComponent_div_4_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, MobileModalPanelComponent_div_4_ng_container_4_ng_container_1_Template, 5, 1, "ng-container", 12);
            i0.ɵɵtemplate(2, MobileModalPanelComponent_div_4_ng_container_4_ng_template_2_Template, 4, 1, "ng-template", null, 13, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var _r10 = i0.ɵɵreference(3);
            var ctx_r6 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r6.windowState == "collapsed")("ngIfElse", _r10);
        }
    }
    function MobileModalPanelComponent_div_4_ng_container_5_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r20_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "div", 20);
            i0.ɵɵlistener("click", function MobileModalPanelComponent_div_4_ng_container_5_ng_container_1_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r20_1); var ctx_r19 = i0.ɵɵnextContext(3); return ctx_r19._buttonMax_Click($event); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(2, "svg", 15);
            i0.ɵɵelementStart(3, "g", 16);
            i0.ɵɵelement(4, "rect", 21);
            i0.ɵɵelement(5, "line", 22);
            i0.ɵɵelement(6, "line", 23);
            i0.ɵɵelement(7, "line", 24);
            i0.ɵɵelement(8, "line", 25);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r16 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(1);
            i0.ɵɵpropertyInterpolate("title", ctx_r16.options.buttonUnmaximizeText);
        }
    }
    function MobileModalPanelComponent_div_4_ng_container_5_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r22_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 20);
            i0.ɵɵlistener("click", function MobileModalPanelComponent_div_4_ng_container_5_ng_template_2_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r22_1); var ctx_r21 = i0.ɵɵnextContext(3); return ctx_r21._buttonMax_Click($event); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(1, "svg", 15);
            i0.ɵɵelementStart(2, "g", 16);
            i0.ɵɵelement(3, "rect", 26);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r18 = i0.ɵɵnextContext(3);
            i0.ɵɵpropertyInterpolate("title", ctx_r18.options.buttonMaximizeText);
        }
    }
    function MobileModalPanelComponent_div_4_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, MobileModalPanelComponent_div_4_ng_container_5_ng_container_1_Template, 9, 1, "ng-container", 12);
            i0.ɵɵtemplate(2, MobileModalPanelComponent_div_4_ng_container_5_ng_template_2_Template, 4, 1, "ng-template", null, 19, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var _r17 = i0.ɵɵreference(3);
            var ctx_r7 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r7.windowState == "maximized")("ngIfElse", _r17);
        }
    }
    function MobileModalPanelComponent_div_4_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
            var _r24_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "div", 27);
            i0.ɵɵlistener("click", function MobileModalPanelComponent_div_4_ng_container_6_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r24_1); var ctx_r23 = i0.ɵɵnextContext(2); return ctx_r23.closePanel($event); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(2, "svg", 15);
            i0.ɵɵelementStart(3, "g");
            i0.ɵɵelement(4, "line", 28);
            i0.ɵɵelement(5, "line", 29);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r8 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵpropertyInterpolate("title", ctx_r8.options.buttonCloseText);
        }
    }
    function MobileModalPanelComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r26_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 8, 9);
            i0.ɵɵlistener("mousedown", function MobileModalPanelComponent_div_4_Template_div_mousedown_0_listener($event) { i0.ɵɵrestoreView(_r26_1); var ctx_r25 = i0.ɵɵnextContext(); return ctx_r25._titlebar_MouseDown($event); });
            i0.ɵɵelementStart(2, "div", 10);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, MobileModalPanelComponent_div_4_ng_container_4_Template, 4, 2, "ng-container", 11);
            i0.ɵɵtemplate(5, MobileModalPanelComponent_div_4_ng_container_5_Template, 4, 2, "ng-container", 11);
            i0.ɵɵtemplate(6, MobileModalPanelComponent_div_4_ng_container_6_Template, 6, 1, "ng-container", 11);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", ctx_r2.options.title, "");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r2.options.buttonCollapse);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r2.options.buttonMaximize);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r2.options.buttonClose);
        }
    }
    function MobileModalPanelComponent_ng_template_6_Template(rf, ctx) { }
    exports.MobileModalPanelComponent = /** @class */ (function (_super) {
        __extends(MobileModalPanelComponent, _super);
        function MobileModalPanelComponent(_render, cdr) {
            var _this = _super.call(this, _render, cdr) || this;
            _this._render = _render;
            _this.cdr = cdr;
            _this._mobileShowMode = exports.PanelInMobileShowMode.modal;
            return _this;
        }
        MobileModalPanelComponent.prototype.ngOnInit = function () {
            _super.prototype.ngOnInit.call(this);
        };
        MobileModalPanelComponent.prototype.setOptions = function (options) {
            options.buttonCollapse = false;
            options.buttonMaximize = false;
            options.modal = true;
            _super.prototype.setOptions.call(this, options);
        };
        MobileModalPanelComponent.prototype._setMobilePosition = function () {
            var _pos = new WidgetPosition(0, 0, 0, 0, "100%", "100%", "", "unset");
            this.widgetConfig.position = _pos;
        };
        return MobileModalPanelComponent;
    }(BaseMobilePanelComponent));
    exports.MobileModalPanelComponent.ɵfac = function MobileModalPanelComponent_Factory(t) { return new (t || exports.MobileModalPanelComponent)(i0.ɵɵdirectiveInject(i0.Renderer2, 8), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef, 8)); };
    exports.MobileModalPanelComponent.ɵcmp = i0.ɵɵdefineComponent({ type: exports.MobileModalPanelComponent, selectors: [["epsgis-mobile-modal-panel"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 9, vars: 3, consts: [[1, "sspanel_overlay"], ["sspanel_overlay", ""], [1, "sspanel", 3, "id", "ngStyle"], ["sspanel", ""], ["class", "sspanel_titlebar sspanel_titlebar_draggable", 3, "mousedown", 4, "ngIf"], [1, "sspanel_content", 3, "click"], ["widget_content", ""], [1, "sspanel_minplaceholder"], [1, "sspanel_titlebar", "sspanel_titlebar_draggable", 3, "mousedown"], ["sspanel_titlebar", ""], [1, "sspanel_titlebar_text"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["showCollapsedButton", ""], [1, "sspanel_titlebar_button", "sspanel_titlebar_button_collapse", 3, "title", "click"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 10 10", "height", "100%", "width", "100%"], ["fill", "none"], ["points", "1,3 9,3 5,8 1,3 9,3"], ["points", "1,7 9,7 5,2 1,7 9,7"], ["showMaximizeButton", ""], [1, "sspanel_titlebar_button", "sspanel_titlebar_button_maximize", 3, "title", "click"], ["x", "1", "y", "3", "height", "6", "width", "6"], ["y1", "3", "x1", "3", "y2", "1", "x2", "3"], ["y1", "1", "x1", "2.5", "y2", "1", "x2", "9.5"], ["y1", "1", "x1", "9", "y2", "7", "x2", "9"], ["y1", "7", "x1", "9.5", "y2", "7", "x2", "7"], ["x", "1", "y", "1", "height", "8", "width", "8"], [1, "sspanel_titlebar_button", "sspanel_titlebar_button_close", 3, "title", "click"], ["y2", "0", "x2", "10", "y1", "10", "x1", "0"], ["y2", "10", "x2", "10", "y1", "0", "x1", "0"]], template: function MobileModalPanelComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0, 1);
                i0.ɵɵelementStart(2, "div", 2, 3);
                i0.ɵɵtemplate(4, MobileModalPanelComponent_div_4_Template, 7, 4, "div", 4);
                i0.ɵɵelementStart(5, "div", 5);
                i0.ɵɵlistener("click", function MobileModalPanelComponent_Template_div_click_5_listener($event) { return ctx._contentClick($event); });
                i0.ɵɵtemplate(6, MobileModalPanelComponent_ng_template_6_Template, 0, 0, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelement(8, "div", 7);
            }
            if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵpropertyInterpolate("id", ctx.options.id);
                i0.ɵɵproperty("ngStyle", ctx.position);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", ctx.options.showTitle);
            }
        }, directives: [i1$1.NgStyle, i1$1.NgIf], styles: [".sspanel[_ngcontent-%COMP%]{border:none;box-shadow:none}"] });
    exports.MobileModalPanelComponent = __decorate([
        ComponentRegister({
            uri: 'epsgis-mobile-modal-panel',
            path: "components/mobile/modal-panel"
        })
    ], exports.MobileModalPanelComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(exports.MobileModalPanelComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'epsgis-mobile-modal-panel',
                        templateUrl: './modal-panel.component.html',
                        styleUrls: ['./modal-panel.component.scss']
                    }]
            }], function () {
            return [{ type: i0.Renderer2, decorators: [{
                            type: i0.Optional
                        }] }, { type: i0.ChangeDetectorRef, decorators: [{
                            type: i0.Optional
                        }] }];
        }, null);
    })();

    function MobilePopupPanelComponent_div_4_ng_container_4_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r13_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "div", 14);
            i0.ɵɵlistener("click", function MobilePopupPanelComponent_div_4_ng_container_4_ng_container_1_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r13_1); var ctx_r12 = i0.ɵɵnextContext(3); return ctx_r12._buttonCollapse_Click($event); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(2, "svg", 15);
            i0.ɵɵelementStart(3, "g", 16);
            i0.ɵɵelement(4, "polyline", 17);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r9 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(1);
            i0.ɵɵpropertyInterpolate("title", ctx_r9.options.buttonUnCollapseText);
        }
    }
    function MobilePopupPanelComponent_div_4_ng_container_4_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r15_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 14);
            i0.ɵɵlistener("click", function MobilePopupPanelComponent_div_4_ng_container_4_ng_template_2_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r15_1); var ctx_r14 = i0.ɵɵnextContext(3); return ctx_r14._buttonCollapse_Click($event); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(1, "svg", 15);
            i0.ɵɵelementStart(2, "g", 16);
            i0.ɵɵelement(3, "polyline", 18);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r11 = i0.ɵɵnextContext(3);
            i0.ɵɵpropertyInterpolate("title", ctx_r11.options.buttonCollapseText);
        }
    }
    function MobilePopupPanelComponent_div_4_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, MobilePopupPanelComponent_div_4_ng_container_4_ng_container_1_Template, 5, 1, "ng-container", 12);
            i0.ɵɵtemplate(2, MobilePopupPanelComponent_div_4_ng_container_4_ng_template_2_Template, 4, 1, "ng-template", null, 13, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var _r10 = i0.ɵɵreference(3);
            var ctx_r6 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r6.windowState == "collapsed")("ngIfElse", _r10);
        }
    }
    function MobilePopupPanelComponent_div_4_ng_container_5_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r20_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "div", 20);
            i0.ɵɵlistener("click", function MobilePopupPanelComponent_div_4_ng_container_5_ng_container_1_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r20_1); var ctx_r19 = i0.ɵɵnextContext(3); return ctx_r19._buttonMax_Click($event); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(2, "svg", 15);
            i0.ɵɵelementStart(3, "g", 16);
            i0.ɵɵelement(4, "rect", 21);
            i0.ɵɵelement(5, "line", 22);
            i0.ɵɵelement(6, "line", 23);
            i0.ɵɵelement(7, "line", 24);
            i0.ɵɵelement(8, "line", 25);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r16 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(1);
            i0.ɵɵpropertyInterpolate("title", ctx_r16.options.buttonUnmaximizeText);
        }
    }
    function MobilePopupPanelComponent_div_4_ng_container_5_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r22_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 20);
            i0.ɵɵlistener("click", function MobilePopupPanelComponent_div_4_ng_container_5_ng_template_2_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r22_1); var ctx_r21 = i0.ɵɵnextContext(3); return ctx_r21._buttonMax_Click($event); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(1, "svg", 15);
            i0.ɵɵelementStart(2, "g", 16);
            i0.ɵɵelement(3, "rect", 26);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r18 = i0.ɵɵnextContext(3);
            i0.ɵɵpropertyInterpolate("title", ctx_r18.options.buttonMaximizeText);
        }
    }
    function MobilePopupPanelComponent_div_4_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, MobilePopupPanelComponent_div_4_ng_container_5_ng_container_1_Template, 9, 1, "ng-container", 12);
            i0.ɵɵtemplate(2, MobilePopupPanelComponent_div_4_ng_container_5_ng_template_2_Template, 4, 1, "ng-template", null, 19, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var _r17 = i0.ɵɵreference(3);
            var ctx_r7 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r7.windowState == "maximized")("ngIfElse", _r17);
        }
    }
    function MobilePopupPanelComponent_div_4_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
            var _r24_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "div", 27);
            i0.ɵɵlistener("click", function MobilePopupPanelComponent_div_4_ng_container_6_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r24_1); var ctx_r23 = i0.ɵɵnextContext(2); return ctx_r23.closePanel($event); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(2, "svg", 15);
            i0.ɵɵelementStart(3, "g");
            i0.ɵɵelement(4, "line", 28);
            i0.ɵɵelement(5, "line", 29);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r8 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵpropertyInterpolate("title", ctx_r8.options.buttonCloseText);
        }
    }
    function MobilePopupPanelComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r26_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 8, 9);
            i0.ɵɵlistener("mousedown", function MobilePopupPanelComponent_div_4_Template_div_mousedown_0_listener($event) { i0.ɵɵrestoreView(_r26_1); var ctx_r25 = i0.ɵɵnextContext(); return ctx_r25._titlebar_MouseDown($event); });
            i0.ɵɵelementStart(2, "div", 10);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, MobilePopupPanelComponent_div_4_ng_container_4_Template, 4, 2, "ng-container", 11);
            i0.ɵɵtemplate(5, MobilePopupPanelComponent_div_4_ng_container_5_Template, 4, 2, "ng-container", 11);
            i0.ɵɵtemplate(6, MobilePopupPanelComponent_div_4_ng_container_6_Template, 6, 1, "ng-container", 11);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", ctx_r2.options.title, "");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r2.options.buttonCollapse);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r2.options.buttonMaximize);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r2.options.buttonClose);
        }
    }
    function MobilePopupPanelComponent_ng_template_6_Template(rf, ctx) { }
    exports.MobilePopupPanelComponent = /** @class */ (function (_super) {
        __extends(MobilePopupPanelComponent, _super);
        function MobilePopupPanelComponent(_render, cdr) {
            var _this = _super.call(this, _render, cdr) || this;
            _this._render = _render;
            _this.cdr = cdr;
            _this._mobileShowMode = exports.PanelInMobileShowMode.popup;
            return _this;
        }
        MobilePopupPanelComponent.prototype.ngOnInit = function () {
            _super.prototype.ngOnInit.call(this);
        };
        MobilePopupPanelComponent.prototype.setOptions = function (options) {
            options.buttonCollapse = false;
            options.buttonMaximize = false;
            options.modal = false;
            _super.prototype.setOptions.call(this, options);
        };
        MobilePopupPanelComponent.prototype._setMobilePosition = function () {
            var obj = _super.prototype.getWidthHeight.call(this);
            var _pos = new WidgetPosition(0, 0, 0, 0, obj.height, obj.width, "", "unset");
            this.widgetConfig.position = _pos;
        };
        return MobilePopupPanelComponent;
    }(BaseMobilePanelComponent));
    exports.MobilePopupPanelComponent.ɵfac = function MobilePopupPanelComponent_Factory(t) { return new (t || exports.MobilePopupPanelComponent)(i0.ɵɵdirectiveInject(i0.Renderer2, 8), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef, 8)); };
    exports.MobilePopupPanelComponent.ɵcmp = i0.ɵɵdefineComponent({ type: exports.MobilePopupPanelComponent, selectors: [["epsgis-mobile-popup-panel"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 9, vars: 3, consts: [[1, "sspanel_overlay"], ["sspanel_overlay", ""], [1, "sspanel", 3, "id", "ngStyle"], ["sspanel", ""], ["class", "sspanel_titlebar sspanel_titlebar_draggable", 3, "mousedown", 4, "ngIf"], [1, "sspanel_content", 3, "click"], ["widget_content", ""], [1, "sspanel_minplaceholder"], [1, "sspanel_titlebar", "sspanel_titlebar_draggable", 3, "mousedown"], ["sspanel_titlebar", ""], [1, "sspanel_titlebar_text"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["showCollapsedButton", ""], [1, "sspanel_titlebar_button", "sspanel_titlebar_button_collapse", 3, "title", "click"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 10 10", "height", "100%", "width", "100%"], ["fill", "none"], ["points", "1,3 9,3 5,8 1,3 9,3"], ["points", "1,7 9,7 5,2 1,7 9,7"], ["showMaximizeButton", ""], [1, "sspanel_titlebar_button", "sspanel_titlebar_button_maximize", 3, "title", "click"], ["x", "1", "y", "3", "height", "6", "width", "6"], ["y1", "3", "x1", "3", "y2", "1", "x2", "3"], ["y1", "1", "x1", "2.5", "y2", "1", "x2", "9.5"], ["y1", "1", "x1", "9", "y2", "7", "x2", "9"], ["y1", "7", "x1", "9.5", "y2", "7", "x2", "7"], ["x", "1", "y", "1", "height", "8", "width", "8"], [1, "sspanel_titlebar_button", "sspanel_titlebar_button_close", 3, "title", "click"], ["y2", "0", "x2", "10", "y1", "10", "x1", "0"], ["y2", "10", "x2", "10", "y1", "0", "x1", "0"]], template: function MobilePopupPanelComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0, 1);
                i0.ɵɵelementStart(2, "div", 2, 3);
                i0.ɵɵtemplate(4, MobilePopupPanelComponent_div_4_Template, 7, 4, "div", 4);
                i0.ɵɵelementStart(5, "div", 5);
                i0.ɵɵlistener("click", function MobilePopupPanelComponent_Template_div_click_5_listener($event) { return ctx._contentClick($event); });
                i0.ɵɵtemplate(6, MobilePopupPanelComponent_ng_template_6_Template, 0, 0, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelement(8, "div", 7);
            }
            if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵpropertyInterpolate("id", ctx.options.id);
                i0.ɵɵproperty("ngStyle", ctx.position);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", ctx.options.showTitle);
            }
        }, directives: [i1$1.NgStyle, i1$1.NgIf], styles: [".sspanel_overlay[_ngcontent-%COMP%]{display:flex}.sspanel[_ngcontent-%COMP%]{position:unset;margin:auto}"] });
    exports.MobilePopupPanelComponent = __decorate([
        ComponentRegister({
            uri: 'epsgis-mobile-popup-panel',
            path: "components/mobile/popup-panel"
        })
    ], exports.MobilePopupPanelComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(exports.MobilePopupPanelComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'epsgis-mobile-popup-panel',
                        templateUrl: './popup-panel.component.html',
                        styleUrls: ['./popup-panel.component.scss']
                    }]
            }], function () {
            return [{ type: i0.Renderer2, decorators: [{
                            type: i0.Optional
                        }] }, { type: i0.ChangeDetectorRef, decorators: [{
                            type: i0.Optional
                        }] }];
        }, null);
    })();

    function MobileDrawerRightPanelComponent_div_4_ng_container_4_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r13_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "div", 13);
            i0.ɵɵlistener("click", function MobileDrawerRightPanelComponent_div_4_ng_container_4_ng_container_1_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r13_1); var ctx_r12 = i0.ɵɵnextContext(3); return ctx_r12._buttonCollapse_Click($event); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(2, "svg", 14);
            i0.ɵɵelementStart(3, "g", 15);
            i0.ɵɵelement(4, "polyline", 16);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r9 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(1);
            i0.ɵɵpropertyInterpolate("title", ctx_r9.options.buttonUnCollapseText);
        }
    }
    function MobileDrawerRightPanelComponent_div_4_ng_container_4_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r15_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 13);
            i0.ɵɵlistener("click", function MobileDrawerRightPanelComponent_div_4_ng_container_4_ng_template_2_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r15_1); var ctx_r14 = i0.ɵɵnextContext(3); return ctx_r14._buttonCollapse_Click($event); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(1, "svg", 14);
            i0.ɵɵelementStart(2, "g", 15);
            i0.ɵɵelement(3, "polyline", 17);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r11 = i0.ɵɵnextContext(3);
            i0.ɵɵpropertyInterpolate("title", ctx_r11.options.buttonCollapseText);
        }
    }
    function MobileDrawerRightPanelComponent_div_4_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, MobileDrawerRightPanelComponent_div_4_ng_container_4_ng_container_1_Template, 5, 1, "ng-container", 11);
            i0.ɵɵtemplate(2, MobileDrawerRightPanelComponent_div_4_ng_container_4_ng_template_2_Template, 4, 1, "ng-template", null, 12, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var _r10 = i0.ɵɵreference(3);
            var ctx_r6 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r6.windowState == "collapsed")("ngIfElse", _r10);
        }
    }
    function MobileDrawerRightPanelComponent_div_4_ng_container_5_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r20_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "div", 19);
            i0.ɵɵlistener("click", function MobileDrawerRightPanelComponent_div_4_ng_container_5_ng_container_1_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r20_1); var ctx_r19 = i0.ɵɵnextContext(3); return ctx_r19._buttonMax_Click($event); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(2, "svg", 14);
            i0.ɵɵelementStart(3, "g", 15);
            i0.ɵɵelement(4, "rect", 20);
            i0.ɵɵelement(5, "line", 21);
            i0.ɵɵelement(6, "line", 22);
            i0.ɵɵelement(7, "line", 23);
            i0.ɵɵelement(8, "line", 24);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r16 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(1);
            i0.ɵɵpropertyInterpolate("title", ctx_r16.options.buttonUnmaximizeText);
        }
    }
    function MobileDrawerRightPanelComponent_div_4_ng_container_5_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r22_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 19);
            i0.ɵɵlistener("click", function MobileDrawerRightPanelComponent_div_4_ng_container_5_ng_template_2_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r22_1); var ctx_r21 = i0.ɵɵnextContext(3); return ctx_r21._buttonMax_Click($event); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(1, "svg", 14);
            i0.ɵɵelementStart(2, "g", 15);
            i0.ɵɵelement(3, "rect", 25);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r18 = i0.ɵɵnextContext(3);
            i0.ɵɵpropertyInterpolate("title", ctx_r18.options.buttonMaximizeText);
        }
    }
    function MobileDrawerRightPanelComponent_div_4_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, MobileDrawerRightPanelComponent_div_4_ng_container_5_ng_container_1_Template, 9, 1, "ng-container", 11);
            i0.ɵɵtemplate(2, MobileDrawerRightPanelComponent_div_4_ng_container_5_ng_template_2_Template, 4, 1, "ng-template", null, 18, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var _r17 = i0.ɵɵreference(3);
            var ctx_r7 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r7.windowState == "maximized")("ngIfElse", _r17);
        }
    }
    function MobileDrawerRightPanelComponent_div_4_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
            var _r24_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "div", 26);
            i0.ɵɵlistener("click", function MobileDrawerRightPanelComponent_div_4_ng_container_6_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r24_1); var ctx_r23 = i0.ɵɵnextContext(2); return ctx_r23.closePanel($event); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(2, "svg", 14);
            i0.ɵɵelementStart(3, "g");
            i0.ɵɵelement(4, "line", 27);
            i0.ɵɵelement(5, "line", 28);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r8 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵpropertyInterpolate("title", ctx_r8.options.buttonCloseText);
        }
    }
    function MobileDrawerRightPanelComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r26_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 7, 8);
            i0.ɵɵlistener("mousedown", function MobileDrawerRightPanelComponent_div_4_Template_div_mousedown_0_listener($event) { i0.ɵɵrestoreView(_r26_1); var ctx_r25 = i0.ɵɵnextContext(); return ctx_r25._titlebar_MouseDown($event); });
            i0.ɵɵelementStart(2, "div", 9);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, MobileDrawerRightPanelComponent_div_4_ng_container_4_Template, 4, 2, "ng-container", 10);
            i0.ɵɵtemplate(5, MobileDrawerRightPanelComponent_div_4_ng_container_5_Template, 4, 2, "ng-container", 10);
            i0.ɵɵtemplate(6, MobileDrawerRightPanelComponent_div_4_ng_container_6_Template, 6, 1, "ng-container", 10);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", ctx_r2.options.title, "");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r2.options.buttonCollapse);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r2.options.buttonMaximize);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r2.options.buttonClose);
        }
    }
    function MobileDrawerRightPanelComponent_ng_template_6_Template(rf, ctx) { }
    var MobileDrawerRightPanelComponent = /** @class */ (function (_super) {
        __extends(MobileDrawerRightPanelComponent, _super);
        function MobileDrawerRightPanelComponent(_render, cdr) {
            var _this = _super.call(this, _render, cdr) || this;
            _this._render = _render;
            _this.cdr = cdr;
            _this._mobileShowMode = exports.PanelInMobileShowMode.drawerRight;
            return _this;
        }
        MobileDrawerRightPanelComponent.prototype.ngOnDestroy = function () {
            this._sspanelOverlayClickHandler();
            _super.prototype.ngOnDestroy.call(this);
        };
        MobileDrawerRightPanelComponent.prototype.setOptions = function (options) {
            options.buttonCollapse = false;
            options.buttonMaximize = false;
            _super.prototype.setOptions.call(this, options);
        };
        MobileDrawerRightPanelComponent.prototype._setMobilePosition = function () {
            var _this = this;
            var _width = "80%";
            if (this.widgetConfig.mobile && this.widgetConfig.mobile.position) {
                var obj = this.getWidthHeight();
                if (obj.width) {
                    _width = obj.width;
                }
            }
            var _pos = new WidgetPosition(0, "auto", 0, 0, "100%", _width);
            this.widgetConfig.position = _pos;
            this._sspanelOverlayClickHandler = this.jsEventManager.addEventListener(this.sspanelOverlay.nativeElement, "click", function (evt) {
                if (evt.target === _this.sspanelOverlay.nativeElement) {
                    _this.closePanel(evt);
                }
            });
        };
        return MobileDrawerRightPanelComponent;
    }(BaseMobilePanelComponent));
    MobileDrawerRightPanelComponent.ɵfac = function MobileDrawerRightPanelComponent_Factory(t) { return new (t || MobileDrawerRightPanelComponent)(i0.ɵɵdirectiveInject(i0.Renderer2, 8), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef, 8)); };
    MobileDrawerRightPanelComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MobileDrawerRightPanelComponent, selectors: [["epsgis-mobile-drawer-right-panel"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 8, vars: 3, consts: [[1, "sspanel_overlay"], ["sspanel_overlay", ""], [1, "sspanel", 3, "id", "ngStyle"], ["sspanel", ""], ["class", "sspanel_titlebar sspanel_titlebar_draggable", 3, "mousedown", 4, "ngIf"], [1, "sspanel_content", 3, "click"], ["widget_content", ""], [1, "sspanel_titlebar", "sspanel_titlebar_draggable", 3, "mousedown"], ["sspanel_titlebar", ""], [1, "sspanel_titlebar_text"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["showCollapsedButton", ""], [1, "sspanel_titlebar_button", "sspanel_titlebar_button_collapse", 3, "title", "click"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 10 10", "height", "100%", "width", "100%"], ["fill", "none"], ["points", "1,3 9,3 5,8 1,3 9,3"], ["points", "1,7 9,7 5,2 1,7 9,7"], ["showMaximizeButton", ""], [1, "sspanel_titlebar_button", "sspanel_titlebar_button_maximize", 3, "title", "click"], ["x", "1", "y", "3", "height", "6", "width", "6"], ["y1", "3", "x1", "3", "y2", "1", "x2", "3"], ["y1", "1", "x1", "2.5", "y2", "1", "x2", "9.5"], ["y1", "1", "x1", "9", "y2", "7", "x2", "9"], ["y1", "7", "x1", "9.5", "y2", "7", "x2", "7"], ["x", "1", "y", "1", "height", "8", "width", "8"], [1, "sspanel_titlebar_button", "sspanel_titlebar_button_close", 3, "title", "click"], ["y2", "0", "x2", "10", "y1", "10", "x1", "0"], ["y2", "10", "x2", "10", "y1", "0", "x1", "0"]], template: function MobileDrawerRightPanelComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0, 1);
                i0.ɵɵelementStart(2, "div", 2, 3);
                i0.ɵɵtemplate(4, MobileDrawerRightPanelComponent_div_4_Template, 7, 4, "div", 4);
                i0.ɵɵelementStart(5, "div", 5);
                i0.ɵɵlistener("click", function MobileDrawerRightPanelComponent_Template_div_click_5_listener($event) { return ctx._contentClick($event); });
                i0.ɵɵtemplate(6, MobileDrawerRightPanelComponent_ng_template_6_Template, 0, 0, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵpropertyInterpolate("id", ctx.options.id);
                i0.ɵɵproperty("ngStyle", ctx.position);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", ctx.options.showTitle);
            }
        }, directives: [i1$1.NgStyle, i1$1.NgIf], styles: [".sspanel[_ngcontent-%COMP%]{border:none}.sspanel_titlebar[_ngcontent-%COMP%]{background:linear-gradient(270deg,#5677fc,#50bfff)}.sspanel_titlebar_text[_ngcontent-%COMP%]{order:5;text-align:right}.sspanel_titlebar_button[_ngcontent-%COMP%]{order:1}.sspanel_titlebar_button_collapse[_ngcontent-%COMP%]{order:3}.sspanel_titlebar_button_maximize[_ngcontent-%COMP%]{order:2}.sspanel_titlebar[_ngcontent-%COMP%]{background:#3880ff;height:44px}.sspanel_titlebar_text[_ngcontent-%COMP%]{text-align:center}.sspanel_titlebar_button[_ngcontent-%COMP%]{display:none}"] });
    MobileDrawerRightPanelComponent = __decorate([
        ComponentRegister({
            uri: 'epsgis-mobile-drawer-right-panel',
            path: "components/mobile/drawer-panel-right"
        })
    ], MobileDrawerRightPanelComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MobileDrawerRightPanelComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'epsgis-mobile-drawer-right-panel',
                        templateUrl: './drawer-panel-right.component.html',
                        styleUrls: ['./drawer-panel-right.component.scss']
                    }]
            }], function () {
            return [{ type: i0.Renderer2, decorators: [{
                            type: i0.Optional
                        }] }, { type: i0.ChangeDetectorRef, decorators: [{
                            type: i0.Optional
                        }] }];
        }, null);
    })();

    var SafeUrlPipe = /** @class */ (function () {
        function SafeUrlPipe(sanitizer) {
            this.sanitizer = sanitizer;
        }
        SafeUrlPipe.prototype.transform = function (url, tag) {
            if (tag === void 0) { tag = "img"; }
            if (tag == "img") {
                return this.sanitizer.bypassSecurityTrustUrl(url);
            }
            return this.sanitizer.bypassSecurityTrustResourceUrl(url);
        };
        return SafeUrlPipe;
    }());
    SafeUrlPipe.ɵfac = function SafeUrlPipe_Factory(t) { return new (t || SafeUrlPipe)(i0.ɵɵdirectiveInject(i1$2.DomSanitizer)); };
    SafeUrlPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "safeurl", type: SafeUrlPipe, pure: true });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SafeUrlPipe, [{
                type: i0.Pipe,
                args: [{
                        name: 'safeurl'
                    }]
            }], function () { return [{ type: i1$2.DomSanitizer }]; }, null);
    })();

    var _c0$8 = ["iframeContent"];
    function IframePanelComponent_iframe_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "iframe", 17, 18);
            i0.ɵɵpipe(2, "safeurl");
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵproperty("src", i0.ɵɵpipeBind2(2, 1, ctx_r3.url, "iframe"), i0.ɵɵsanitizeResourceUrl);
        }
    }
    function IframePanelComponent_ng_container_8_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0, null, 19);
            i0.ɵɵtext(2);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r4 = i0.ɵɵnextContext();
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx_r4.url, " ");
        }
    }
    var _c1$5 = function (a0) { return { "notitle": a0 }; };
    exports.IframePanelComponent = /** @class */ (function (_super) {
        __extends(IframePanelComponent, _super);
        function IframePanelComponent(_render, cdr) {
            var _this = _super.call(this, _render, cdr) || this;
            _this._render = _render;
            _this.cdr = cdr;
            _this.url = "";
            _this.isShowIframe = false;
            return _this;
        }
        IframePanelComponent.prototype.ngOnInit = function () {
            _super.prototype.ngOnInit.call(this);
            this.url = this.options.url;
            if (this.options.url) {
                this.isShowIframe = true;
            }
        };
        IframePanelComponent.prototype.ngAfterViewInit = function () {
            this.startup();
            this.state = exports.WidgetState.opened;
        };
        return IframePanelComponent;
    }(BasePanelComponent));
    exports.IframePanelComponent.ɵfac = function IframePanelComponent_Factory(t) { return new (t || exports.IframePanelComponent)(i0.ɵɵdirectiveInject(i0.Renderer2, 8), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef, 8)); };
    exports.IframePanelComponent.ɵcmp = i0.ɵɵdefineComponent({ type: exports.IframePanelComponent, selectors: [["epsgis-iframe-panel"]], viewQuery: function IframePanelComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0$8, 3);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.iframeEl = _t.first);
            }
        }, features: [i0.ɵɵInheritDefinitionFeature], decls: 17, vars: 10, consts: [[1, "sspanel_overlay", 2, "display", "none"], ["sspanel_overlay", ""], [1, "sspanel", 3, "id", "ngClass", "ngStyle"], ["sspanel", ""], ["sspanel-titlebar", "", 1, "sspanel_titlebar", "sspanel_titlebar_draggable", 3, "hasIcon", "options", "windowState", "onClickSetting", "onClickClose"], ["sspanel_titlebar", ""], [1, "sspanel_content", 3, "click"], ["class", "iframe_content", 3, "src", 4, "ngIf"], [4, "ngIf"], [1, "sspanel_resizer", "sspanel_resizer_top", 3, "mousedown"], [1, "sspanel_resizer", "sspanel_resizer_bottom", 3, "mousedown"], [1, "sspanel_resizer", "sspanel_resizer_left", 3, "mousedown"], [1, "sspanel_resizer", "sspanel_resizer_right", 3, "mousedown"], [1, "sspanel_resizer", "sspanel_resizer_topleft", 3, "mousedown"], [1, "sspanel_resizer", "sspanel_resizer_topright", 3, "mousedown"], [1, "sspanel_resizer", "sspanel_resizer_bottomleft", 3, "mousedown"], [1, "sspanel_resizer", "sspanel_resizer_bottomright", 3, "mousedown"], [1, "iframe_content", 3, "src"], ["iframeContent", ""], ["content", ""]], template: function IframePanelComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "div", 0, 1);
                i0.ɵɵelementStart(2, "div", 2, 3);
                i0.ɵɵelementStart(4, "div", 4, 5);
                i0.ɵɵlistener("onClickSetting", function IframePanelComponent_Template_div_onClickSetting_4_listener() { return ctx.openWidgetSetting(); })("onClickClose", function IframePanelComponent_Template_div_onClickClose_4_listener($event) { return ctx.closePanel($event); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "div", 6);
                i0.ɵɵlistener("click", function IframePanelComponent_Template_div_click_6_listener($event) { return ctx._contentClick($event); });
                i0.ɵɵtemplate(7, IframePanelComponent_iframe_7_Template, 3, 4, "iframe", 7);
                i0.ɵɵtemplate(8, IframePanelComponent_ng_container_8_Template, 3, 1, "ng-container", 8);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "div", 9);
                i0.ɵɵlistener("mousedown", function IframePanelComponent_Template_div_mousedown_9_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "height", directionY: "top" }); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(10, "div", 10);
                i0.ɵɵlistener("mousedown", function IframePanelComponent_Template_div_mousedown_10_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "height", directionY: "bottom" }); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(11, "div", 11);
                i0.ɵɵlistener("mousedown", function IframePanelComponent_Template_div_mousedown_11_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "width", directionX: "left" }); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(12, "div", 12);
                i0.ɵɵlistener("mousedown", function IframePanelComponent_Template_div_mousedown_12_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "width", directionX: "right" }); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(13, "div", 13);
                i0.ɵɵlistener("mousedown", function IframePanelComponent_Template_div_mousedown_13_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "both", directionX: "left", directionY: "top" }); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(14, "div", 14);
                i0.ɵɵlistener("mousedown", function IframePanelComponent_Template_div_mousedown_14_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "both", directionX: "right", directionY: "top" }); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(15, "div", 15);
                i0.ɵɵlistener("mousedown", function IframePanelComponent_Template_div_mousedown_15_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "both", directionX: "left", directionY: "bottom" }); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(16, "div", 16);
                i0.ɵɵlistener("mousedown", function IframePanelComponent_Template_div_mousedown_16_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "both", directionX: "right", directionY: "bottom" }); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵpropertyInterpolate("id", ctx.options.id);
                i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(8, _c1$5, ctx.options.showTitle === false))("ngStyle", ctx.position);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("hasIcon", false)("options", ctx.options)("windowState", ctx.windowState);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngIf", ctx.isShowIframe);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", !ctx.isShowIframe);
            }
        }, directives: [i1$1.NgClass, i1$1.NgStyle, PanelTitleBarComponent, i1$1.NgIf], pipes: [SafeUrlPipe], styles: [".iframe_content[_ngcontent-%COMP%]{width:100%;height:100%;border:0}"] });
    exports.IframePanelComponent = __decorate([
        ComponentRegister({
            uri: 'epsgis-iframe-panel',
            path: "components/ex-panels/iframe-panel"
        })
    ], exports.IframePanelComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(exports.IframePanelComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'epsgis-iframe-panel',
                        templateUrl: './iframe-panel.component.html',
                        styleUrls: ['./iframe-panel.component.scss'],
                    }]
            }], function () {
            return [{ type: i0.Renderer2, decorators: [{
                            type: i0.Optional
                        }] }, { type: i0.ChangeDetectorRef, decorators: [{
                            type: i0.Optional
                        }] }];
        }, { iframeEl: [{
                    type: i0.ViewChild,
                    args: ["iframeContent", { static: true }]
                }] });
    })();

    var PipesModule = /** @class */ (function () {
        function PipesModule() {
        }
        return PipesModule;
    }());
    PipesModule.ɵmod = i0.ɵɵdefineNgModule({ type: PipesModule });
    PipesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PipesModule_Factory(t) { return new (t || PipesModule)(); }, imports: [[
                i1$1.CommonModule
            ]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PipesModule, { declarations: [SafeUrlPipe], imports: [i1$1.CommonModule], exports: [SafeUrlPipe] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PipesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1$1.CommonModule
                        ],
                        declarations: [
                            SafeUrlPipe
                        ],
                        exports: [
                            SafeUrlPipe
                        ]
                    }]
            }], null, null);
    })();

    var ResultfofComponent = /** @class */ (function () {
        function ResultfofComponent() {
        }
        ResultfofComponent.prototype.ngOnInit = function () { };
        return ResultfofComponent;
    }());
    ResultfofComponent.ɵfac = function ResultfofComponent_Factory(t) { return new (t || ResultfofComponent)(); };
    ResultfofComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ResultfofComponent, selectors: [["epsgis-result-fof"]], decls: 2, vars: 0, consts: [["nzStatus", "404", "nzTitle", "404", "nzSubTitle", "\u62B1\u6B49\uFF0C\u60A8\u8BBF\u95EE\u7684\u9875\u9762\u4E0D\u5B58\u5728\u3002"], ["nz-result-extra", ""]], template: function ResultfofComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "nz-result", 0);
                i0.ɵɵelement(1, "div", 1);
                i0.ɵɵelementEnd();
            }
        }, directives: [i1$3.NzResultComponent, i1$3.NzResultExtraDirective], styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ResultfofComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'epsgis-result-fof',
                        templateUrl: './resultfof.component.html',
                        styleUrls: ['./resultfof.component.scss']
                    }]
            }], function () { return []; }, null);
    })();

    var ResultfooComponent = /** @class */ (function () {
        function ResultfooComponent() {
        }
        ResultfooComponent.prototype.ngOnInit = function () { };
        return ResultfooComponent;
    }());
    ResultfooComponent.ɵfac = function ResultfooComponent_Factory(t) { return new (t || ResultfooComponent)(); };
    ResultfooComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ResultfooComponent, selectors: [["epsgis-result-foo"]], decls: 2, vars: 0, consts: [["nzStatus", "500", "nzTitle", "500", "nzSubTitle", "\u62B1\u6B49\uFF0C\u670D\u52A1\u5668\u4E0A\u6709\u9519\u8BEF."], ["nz-result-extra", ""]], template: function ResultfooComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "nz-result", 0);
                i0.ɵɵelement(1, "div", 1);
                i0.ɵɵelementEnd();
            }
        }, directives: [i1$3.NzResultComponent, i1$3.NzResultExtraDirective], styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ResultfooComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'epsgis-result-foo',
                        templateUrl: './resultfoo.component.html',
                        styleUrls: ['./resultfoo.component.scss']
                    }]
            }], function () { return []; }, null);
    })();

    var ResultfotComponent = /** @class */ (function () {
        function ResultfotComponent() {
        }
        ResultfotComponent.prototype.ngOnInit = function () { };
        return ResultfotComponent;
    }());
    ResultfotComponent.ɵfac = function ResultfotComponent_Factory(t) { return new (t || ResultfotComponent)(); };
    ResultfotComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ResultfotComponent, selectors: [["epsgis-result-fot"]], decls: 2, vars: 0, consts: [["nzStatus", "403", "nzTitle", "403", "nzSubTitle", "\u62B1\u6B49\uFF0C\u60A8\u65E0\u6743\u8BBF\u95EE\u6B64\u9875\u9762\u3002"], ["nz-result-extra", ""]], template: function ResultfotComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "nz-result", 0);
                i0.ɵɵelement(1, "div", 1);
                i0.ɵɵelementEnd();
            }
        }, directives: [i1$3.NzResultComponent, i1$3.NzResultExtraDirective], styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ResultfotComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'epsgis-result-fot',
                        templateUrl: './resultfot.component.html',
                        styleUrls: ['./resultfot.component.scss']
                    }]
            }], function () { return []; }, null);
    })();

    var EpsGisSharedModule = /** @class */ (function () {
        function EpsGisSharedModule() {
        }
        return EpsGisSharedModule;
    }());
    EpsGisSharedModule.ɵmod = i0.ɵɵdefineNgModule({ type: EpsGisSharedModule });
    EpsGisSharedModule.ɵinj = i0.ɵɵdefineInjector({ factory: function EpsGisSharedModule_Factory(t) { return new (t || EpsGisSharedModule)(); }, imports: [[
                i1$1.CommonModule
            ]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(EpsGisSharedModule, { declarations: [JsonEditorComponent], imports: [i1$1.CommonModule], exports: [JsonEditorComponent] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EpsGisSharedModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1$1.CommonModule
                        ],
                        declarations: [
                            JsonEditorComponent
                        ],
                        entryComponents: [],
                        exports: [JsonEditorComponent]
                    }]
            }], null, null);
    })();

    var IconArrowDownComponent = /** @class */ (function () {
        function IconArrowDownComponent() {
        }
        return IconArrowDownComponent;
    }());
    IconArrowDownComponent.ɵfac = function IconArrowDownComponent_Factory(t) { return new (t || IconArrowDownComponent)(); };
    IconArrowDownComponent.ɵcmp = i0.ɵɵdefineComponent({ type: IconArrowDownComponent, selectors: [["epsgis-icon-arrow-down"]], decls: 2, vars: 0, consts: [["t", "1575033841131", "viewBox", "0 0 1024 1024", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "p-id", "16367", "width", "16", "height", "16", 1, "icon"], ["d", "M128.759037 245.033739l383.064442 383.064442 388.096039-388.097062 0.033769 0.070608c13.138228-12.709463 31.024597-20.528546 50.730405-20.528546 40.377616 0 73.114205 32.736589 73.114205 73.115228 0 19.705807-7.820106 37.591153-20.530592 50.730405l0.035816 0.034792-438.681134 438.685227-0.035816-0.035816c-13.280468 13.780865-31.915897 22.3838-52.585659 22.3838-0.071631 0-0.107447 0-0.178055 0-0.072655 0-0.10847 0-0.146333 0-20.669762 0-39.341007-8.601912-52.621475-22.3838l-0.035816 0.035816L20.336676 343.425653l0.179079-0.179079c-12.565177-13.139252-20.313651-30.951943-20.313651-50.587142 0-40.378639 32.736589-73.115228 73.114205-73.115228C95.485213 219.544205 115.334283 229.432413 128.759037 245.033739z", "p-id", "16368", "fill", "#bababa"]], template: function IconArrowDownComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(0, "svg", 0);
                i0.ɵɵelement(1, "path", 1);
                i0.ɵɵelementEnd();
            }
        }, styles: [".expand[_ngcontent-%COMP%] {\n          -webkit-transform: rotate(180deg);\n          -moz-transform: rotate(180deg);\n          -o-transform: rotate(180deg);\n          -ms-transform: rotate(180deg);\n          transform: rotate(180deg);\n      }"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IconArrowDownComponent, [{
                type: i0.Component,
                args: [{
                        selector: "epsgis-icon-arrow-down",
                        template: "\n    <svg t=\"1575033841131\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\n      p-id=\"16367\" width=\"16\" height=\"16\">\n      <path\n        d=\"M128.759037 245.033739l383.064442 383.064442 388.096039-388.097062 0.033769 0.070608c13.138228-12.709463 31.024597-20.528546 50.730405-20.528546 40.377616 0 73.114205 32.736589 73.114205 73.115228 0 19.705807-7.820106 37.591153-20.530592 50.730405l0.035816 0.034792-438.681134 438.685227-0.035816-0.035816c-13.280468 13.780865-31.915897 22.3838-52.585659 22.3838-0.071631 0-0.107447 0-0.178055 0-0.072655 0-0.10847 0-0.146333 0-20.669762 0-39.341007-8.601912-52.621475-22.3838l-0.035816 0.035816L20.336676 343.425653l0.179079-0.179079c-12.565177-13.139252-20.313651-30.951943-20.313651-50.587142 0-40.378639 32.736589-73.115228 73.114205-73.115228C95.485213 219.544205 115.334283 229.432413 128.759037 245.033739z\"\n        p-id=\"16368\" fill=\"#bababa\"></path>\n    </svg>\n    ",
                        styles: [
                            "\n      .expand {\n          -webkit-transform: rotate(180deg);\n          -moz-transform: rotate(180deg);\n          -o-transform: rotate(180deg);\n          -ms-transform: rotate(180deg);\n          transform: rotate(180deg);\n      }\n      "
                        ]
                    }]
            }], null, null);
    })();

    var IconArrowLeftComponent = /** @class */ (function () {
        function IconArrowLeftComponent() {
        }
        return IconArrowLeftComponent;
    }());
    IconArrowLeftComponent.ɵfac = function IconArrowLeftComponent_Factory(t) { return new (t || IconArrowLeftComponent)(); };
    IconArrowLeftComponent.ɵcmp = i0.ɵɵdefineComponent({ type: IconArrowLeftComponent, selectors: [["epsgis-icon-arrow-left"]], decls: 2, vars: 0, consts: [["viewBox", "0 0 1024 1024", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16"], ["d", "M778.965749 128.759549l-383.064442 383.063419 388.097062 388.096039-0.070608 0.033769c12.709463 13.137205 20.529569 31.024597 20.529569 50.731428 0 40.376593-32.736589 73.112158-73.115228 73.112158-19.705807 0-37.591153-7.819083-50.730405-20.528546l-0.034792 0.035816L241.890654 564.622498l0.035816-0.035816c-13.779841-13.281491-22.3838-31.915897-22.3838-52.585659 0-0.071631 0-0.106424 0-0.178055 0-0.072655 0-0.10847 0-0.144286 0-20.669762 8.603959-39.341007 22.3838-52.622498l-0.035816-0.034792L680.573835 20.337187l0.180102 0.179079c13.139252-12.5662 30.950919-20.313651 50.587142-20.313651 40.378639 0 73.115228 32.736589 73.115228 73.114205C804.455283 95.485725 794.567076 115.334795 778.965749 128.759549z"]], template: function IconArrowLeftComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(0, "svg", 0);
                i0.ɵɵelement(1, "path", 1);
                i0.ɵɵelementEnd();
            }
        }, styles: [".expand[_ngcontent-%COMP%]{\n            -webkit-transform: rotate(180deg);\n            -moz-transform: rotate(180deg);\n            -o-transform: rotate(180deg);\n            -ms-transform: rotate(180deg);\n            transform: rotate(180deg);\n        }"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IconArrowLeftComponent, [{
                type: i0.Component,
                args: [{
                        selector: "epsgis-icon-arrow-left",
                        template: "\n    <svg viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\n      width=\"16\" height=\"16\">\n      <path\n        d=\"M778.965749 128.759549l-383.064442 383.063419 388.097062 388.096039-0.070608 0.033769c12.709463 13.137205 20.529569 31.024597 20.529569 50.731428 0 40.376593-32.736589 73.112158-73.115228 73.112158-19.705807 0-37.591153-7.819083-50.730405-20.528546l-0.034792 0.035816L241.890654 564.622498l0.035816-0.035816c-13.779841-13.281491-22.3838-31.915897-22.3838-52.585659 0-0.071631 0-0.106424 0-0.178055 0-0.072655 0-0.10847 0-0.144286 0-20.669762 8.603959-39.341007 22.3838-52.622498l-0.035816-0.034792L680.573835 20.337187l0.180102 0.179079c13.139252-12.5662 30.950919-20.313651 50.587142-20.313651 40.378639 0 73.115228 32.736589 73.115228 73.114205C804.455283 95.485725 794.567076 115.334795 778.965749 128.759549z\"\n        ></path>\n    </svg>\n    ",
                        styles: [
                            "\n\n        .expand{\n            -webkit-transform: rotate(180deg);\n            -moz-transform: rotate(180deg);\n            -o-transform: rotate(180deg);\n            -ms-transform: rotate(180deg);\n            transform: rotate(180deg);\n        }\n        "
                        ]
                    }]
            }], null, null);
    })();

    var IconArrowRightComponent = /** @class */ (function () {
        function IconArrowRightComponent() {
        }
        return IconArrowRightComponent;
    }());
    IconArrowRightComponent.ɵfac = function IconArrowRightComponent_Factory(t) { return new (t || IconArrowRightComponent)(); };
    IconArrowRightComponent.ɵcmp = i0.ɵɵdefineComponent({ type: IconArrowRightComponent, selectors: [["epsgis-icon-arrow-right"]], decls: 2, vars: 0, consts: [["viewBox", "0 0 1024 1024", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16"], ["d", "M245.034251 895.239428l383.063419-383.063419L240.001631 124.07997l0.070608-0.033769c-12.709463-13.137205-20.530592-31.024597-20.530592-50.731428 0-40.376593 32.736589-73.111135 73.115228-73.111135 19.705807 0 37.591153 7.819083 50.730405 20.528546l0.034792-0.035816 438.686251 438.681134-0.035816 0.034792c13.779841 13.281491 22.3838 31.915897 22.3838 52.586682 0 0.071631 0 0.106424 0 0.178055 0 0.072655 0 0.10847 0 0.144286 0 20.669762-8.603959 39.341007-22.3838 52.623521l0.035816 0.033769L343.426165 1003.661789l-0.180102-0.179079c-13.140275 12.565177-30.950919 20.313651-50.588165 20.313651-40.378639 0-73.115228-32.736589-73.115228-73.114205C219.544717 928.512229 229.432924 908.664182 245.034251 895.239428z", "fill", "#bababa"]], template: function IconArrowRightComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(0, "svg", 0);
                i0.ɵɵelement(1, "path", 1);
                i0.ɵɵelementEnd();
            }
        }, styles: [".expand[_ngcontent-%COMP%]{\n            -webkit-transform: rotate(180deg);\n            -moz-transform: rotate(180deg);\n            -o-transform: rotate(180deg);\n            -ms-transform: rotate(180deg);\n            transform: rotate(180deg);\n        }"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IconArrowRightComponent, [{
                type: i0.Component,
                args: [{
                        selector: "epsgis-icon-arrow-right",
                        template: "\n    <svg viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\n      width=\"16\" height=\"16\">\n      <path\n        d=\"M245.034251 895.239428l383.063419-383.063419L240.001631 124.07997l0.070608-0.033769c-12.709463-13.137205-20.530592-31.024597-20.530592-50.731428 0-40.376593 32.736589-73.111135 73.115228-73.111135 19.705807 0 37.591153 7.819083 50.730405 20.528546l0.034792-0.035816 438.686251 438.681134-0.035816 0.034792c13.779841 13.281491 22.3838 31.915897 22.3838 52.586682 0 0.071631 0 0.106424 0 0.178055 0 0.072655 0 0.10847 0 0.144286 0 20.669762-8.603959 39.341007-22.3838 52.623521l0.035816 0.033769L343.426165 1003.661789l-0.180102-0.179079c-13.140275 12.565177-30.950919 20.313651-50.588165 20.313651-40.378639 0-73.115228-32.736589-73.115228-73.114205C219.544717 928.512229 229.432924 908.664182 245.034251 895.239428z\"\n        fill=\"#bababa\"></path>\n    </svg>\n    ",
                        styles: [
                            "\n        .expand{\n            -webkit-transform: rotate(180deg);\n            -moz-transform: rotate(180deg);\n            -o-transform: rotate(180deg);\n            -ms-transform: rotate(180deg);\n            transform: rotate(180deg);\n        }\n        "
                        ]
                    }]
            }], null, null);
    })();

    var _components = [
        IconCloseComponent,
        IconCollapsedComponent,
        IconUnCollapsedComponent,
        IconMaximizeComponent,
        IconUnMaximizeComponent,
        IconSettingComponent,
        IconArrowLeftComponent,
        IconArrowRightComponent,
        IconArrowDownComponent
    ];
    var EpsGisIconModule = /** @class */ (function () {
        function EpsGisIconModule() {
        }
        return EpsGisIconModule;
    }());
    EpsGisIconModule.ɵmod = i0.ɵɵdefineNgModule({ type: EpsGisIconModule });
    EpsGisIconModule.ɵinj = i0.ɵɵdefineInjector({ factory: function EpsGisIconModule_Factory(t) { return new (t || EpsGisIconModule)(); }, imports: [[i1$1.CommonModule]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(EpsGisIconModule, { declarations: [IconCloseComponent,
                IconCollapsedComponent,
                IconUnCollapsedComponent,
                IconMaximizeComponent,
                IconUnMaximizeComponent,
                IconSettingComponent,
                IconArrowLeftComponent,
                IconArrowRightComponent,
                IconArrowDownComponent], imports: [i1$1.CommonModule], exports: [IconCloseComponent,
                IconCollapsedComponent,
                IconUnCollapsedComponent,
                IconMaximizeComponent,
                IconUnMaximizeComponent,
                IconSettingComponent,
                IconArrowLeftComponent,
                IconArrowRightComponent,
                IconArrowDownComponent] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EpsGisIconModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i1$1.CommonModule],
                        declarations: _components,
                        exports: _components
                    }]
            }], null, null);
    })();

    var EpsGisWidgetBaseModule = /** @class */ (function () {
        function EpsGisWidgetBaseModule() {
        }
        return EpsGisWidgetBaseModule;
    }());
    EpsGisWidgetBaseModule.ɵmod = i0.ɵɵdefineNgModule({ type: EpsGisWidgetBaseModule });
    EpsGisWidgetBaseModule.ɵinj = i0.ɵɵdefineInjector({ factory: function EpsGisWidgetBaseModule_Factory(t) { return new (t || EpsGisWidgetBaseModule)(); }, providers: [], imports: [[
                i1$1.CommonModule,
                i4.FormsModule,
                i2.NzIconModule,
                i1$3.NzResultModule,
                EpsGisDirectivesModule,
                PipesModule,
                EpsGisSharedModule,
                EpsGisIconModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(EpsGisWidgetBaseModule, { declarations: [exports.OnScreenWidgetIconComponent,
                exports.OnScreenWidgetPanelComponent,
                exports.DockablePanelAtLeftComponent,
                exports.DockablePanelAtBottomComponent,
                exports.DockablePanelAtRightComponent,
                exports.IframePanelComponent,
                exports.MobileActionPanelComponent,
                exports.MobileDrawerPanelComponent,
                exports.MobileModalPanelComponent,
                exports.MobilePopupPanelComponent,
                MobileDrawerRightPanelComponent,
                ResultfofComponent,
                ResultfooComponent,
                ResultfotComponent,
                WidgetSettingComponent,
                PanelTitleBarComponent], imports: [i1$1.CommonModule,
                i4.FormsModule,
                i2.NzIconModule,
                i1$3.NzResultModule,
                EpsGisDirectivesModule,
                PipesModule,
                EpsGisSharedModule,
                EpsGisIconModule], exports: [PanelTitleBarComponent,
                ResultfofComponent,
                ResultfooComponent,
                ResultfotComponent] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EpsGisWidgetBaseModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1$1.CommonModule,
                            i4.FormsModule,
                            i2.NzIconModule,
                            i1$3.NzResultModule,
                            EpsGisDirectivesModule,
                            PipesModule,
                            EpsGisSharedModule,
                            EpsGisIconModule
                        ],
                        declarations: [
                            exports.OnScreenWidgetIconComponent,
                            exports.OnScreenWidgetPanelComponent,
                            exports.DockablePanelAtLeftComponent,
                            exports.DockablePanelAtBottomComponent,
                            exports.DockablePanelAtRightComponent,
                            exports.IframePanelComponent,
                            exports.MobileActionPanelComponent,
                            exports.MobileDrawerPanelComponent,
                            exports.MobileModalPanelComponent,
                            exports.MobilePopupPanelComponent,
                            MobileDrawerRightPanelComponent,
                            ResultfofComponent,
                            ResultfooComponent,
                            ResultfotComponent,
                            WidgetSettingComponent,
                            PanelTitleBarComponent
                        ],
                        entryComponents: [
                            exports.OnScreenWidgetIconComponent,
                            exports.OnScreenWidgetPanelComponent,
                            exports.DockablePanelAtLeftComponent,
                            exports.DockablePanelAtBottomComponent,
                            exports.DockablePanelAtRightComponent,
                            exports.IframePanelComponent,
                            exports.MobileActionPanelComponent,
                            exports.MobileDrawerPanelComponent,
                            exports.MobileModalPanelComponent,
                            exports.MobilePopupPanelComponent,
                            MobileDrawerRightPanelComponent,
                            WidgetSettingComponent
                        ],
                        exports: [
                            PanelTitleBarComponent,
                            ResultfofComponent,
                            ResultfooComponent,
                            ResultfotComponent
                        ],
                        providers: []
                    }]
            }], null, null);
    })();

    var SharedUtilsService = /** @class */ (function () {
        function SharedUtilsService() {
            this.widgetProperties = ['inPanel', 'hasLocale', 'hasStyle', 'hasConfig', 'hasUIFile',
                'hasSettingPage', 'hasSettingUIFile', 'hasSettingLocale', 'hasSettingStyle',
                'keepConfigAfterMapSwithched', 'isController', 'hasVersionManager', 'isThemeWidget',
                'supportMultiInstance'
            ];
        }
        SharedUtilsService.prototype.isHostedService = function () {
            return false;
        };
        SharedUtilsService.prototype.processWidgetProperties = function (manifest) {
            if (typeof manifest.properties === "undefined") {
                manifest.properties = {};
            }
            if (typeof manifest.properties.isController === 'undefined') {
                manifest.properties.isController = false;
            }
            if (typeof manifest.properties.isThemeWidget === 'undefined') {
                manifest.properties.isThemeWidget = false;
            }
            if (typeof manifest.properties.hasVersionManager === 'undefined') {
                manifest.properties.hasVersionManager = false;
            }
            this.widgetProperties.forEach(function (p) {
                if (typeof manifest.properties[p] === 'undefined') {
                    manifest.properties[p] = true;
                }
            });
            manifest.properties.hasLocale = false;
            manifest.properties.supportMultiInstance = false;
            manifest.properties.hasVersionManager = false;
            manifest.properties.hasSettingLocale = false;
            if (manifest.properties.hasSetting !== true) {
                manifest.properties.hasSettingPage = false;
                manifest.properties.hasSettingUIFile = false;
                manifest.properties.hasSettingStyle = false;
            }
        };
        SharedUtilsService.prototype.processWidgetUriPara = function (widget) {
            if (typeof (widget.uri) === "string" && widget.uri.length >= 1) {
                var url = widget.uri, paraString, p = new Object();
                var index = url.lastIndexOf("?");
                if (index >= 0) {
                    widget.uri = url.substring(0, index);
                    paraString = url.substring(index + 1);
                    var strs = paraString.split("&");
                    for (var i = 0; i < strs.length; i++) {
                        p[strs[i].split("=")[0]] = decodeURIComponent((strs[i].split("=")[1]));
                    }
                    widget.reqPara = p;
                }
            }
            else {
                widget.uri = "";
            }
        };
        SharedUtilsService.prototype.getConfigElementById = function (appConfig, id) {
            var c;
            if (id === 'map') {
                return appConfig.map;
            }
            this.visitElement(appConfig, function (e) {
                if (e.id === id) {
                    c = e;
                    return true;
                }
            });
            return c;
        };
        SharedUtilsService.prototype.visitElement = function (appConfig, cb) {
            this.visitBigSection(appConfig, 'widgetOnScreen', cb);
            this.visitBigSection(appConfig, 'widgetPool', cb);
        };
        SharedUtilsService.prototype.visitBigSection = function (appConfig, section, cb) {
            var _this = this;
            var i, j, group, widget, isOnScreen = (section === 'widgetOnScreen'), tempobject, isHeadMenu = (section === "widgetPool");
            if (appConfig[section]) {
                if (appConfig[section].groups) {
                    for (i = 0; i < appConfig[section].groups.length; i++) {
                        group = appConfig[section].groups[i];
                        tempobject = {
                            index: i,
                            isWidget: false,
                            groupId: group.id,
                            gid: group.id,
                            isThemeWidget: false,
                            isOnScreen: isOnScreen
                        };
                        group = _.extend(group, tempobject);
                        cb(group, tempobject);
                        if (!group.widgets) {
                            continue;
                        }
                        for (j = 0; j < group.widgets.length; j++) {
                            widget = group.widgets[j];
                            tempobject = {
                                index: j,
                                isWidget: true,
                                groupId: group.id,
                                gid: group.id,
                                isThemeWidget: false,
                                isOnScreen: isOnScreen
                            };
                            widget = _.extend(widget, tempobject);
                            Object.assign;
                            this.processWidgetUriPara(widget);
                            cb(widget, tempobject);
                        }
                    }
                }
                if (appConfig[section].widgets) {
                    var visitHeaderMenu_1 = function (widget, cb) {
                        if (widget.children && widget.children.length >= 1) {
                            for (var k = 0; k < widget.children.length; k++) {
                                var item = widget.children[k];
                                tempobject = {
                                    index: i,
                                    isWidget: true,
                                    groupId: section,
                                    gid: section,
                                    isThemeWidget: false,
                                    isOnScreen: isOnScreen,
                                    isHeadMenu: isHeadMenu
                                };
                                if (item.groupId || item.gid) {
                                    tempobject.groupId = item.groupId || item.gid;
                                    tempobject.gid = tempobject.groupId;
                                }
                                item = _.extend(item, tempobject);
                                _this.processWidgetUriPara(item);
                                cb(item, tempobject);
                                visitHeaderMenu_1(item, cb);
                            }
                        }
                    };
                    for (i = 0; i < appConfig[section].widgets.length; i++) {
                        widget = appConfig[section].widgets[i];
                        tempobject = {
                            index: i,
                            isWidget: true,
                            groupId: section,
                            gid: section,
                            isThemeWidget: false,
                            isOnScreen: isOnScreen,
                            isHeadMenu: isHeadMenu
                        };
                        if (widget.groupId || widget.gid) {
                            tempobject.groupId = widget.groupId || widget.gid;
                            tempobject.gid = tempobject.groupId;
                        }
                        widget = _.extend(widget, tempobject);
                        this.processWidgetUriPara(widget);
                        cb(widget, tempobject);
                        visitHeaderMenu_1(widget, cb);
                    }
                }
            }
        };
        SharedUtilsService.prototype.getConfigElementByLabel = function (appConfig, label) {
            var c;
            if (label === 'map') {
                return appConfig.map;
            }
            this.visitElement(appConfig, function (e) {
                if (e.label || e.name === label) {
                    c = e;
                    return true;
                }
            });
            return c;
        };
        SharedUtilsService.prototype.getConfigElementsByName = function (appConfig, name) {
            var elements = [];
            if (name === 'map') {
                return [appConfig.map];
            }
            this.visitElement(appConfig, function (e) {
                if (e.name === name) {
                    elements.push(e);
                }
            });
            return elements;
        };
        SharedUtilsService.prototype.getConfigElementsByUri = function (appConfig, uri) {
            var elements = [];
            if (uri === 'map') {
                return [appConfig.map];
            }
            this.visitElement(appConfig, function (e) {
                if (e.uri && e.uri.toLowerCase() === uri.toLowerCase()) {
                    elements.push(e);
                }
            });
            return elements;
        };
        SharedUtilsService.prototype.getWidgetNameFromUri = function (uri) {
            var segs = uri.split('/');
            segs.pop();
            return segs.pop();
        };
        SharedUtilsService.prototype.getAmdFolderFromUri = function (uri) {
            var segs = uri.split('/');
            segs.pop();
            return segs.join('/') + '/';
        };
        return SharedUtilsService;
    }());
    SharedUtilsService.ɵfac = function SharedUtilsService_Factory(t) { return new (t || SharedUtilsService)(); };
    SharedUtilsService.ɵprov = i0.ɵɵdefineInjectable({ token: SharedUtilsService, factory: SharedUtilsService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SharedUtilsService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    var getPlatforms = function (win) { return setupPlatforms(win); };
    var isPlatform = function (winOrPlatform, platform) {
        if (typeof winOrPlatform === 'string') {
            platform = winOrPlatform;
            winOrPlatform = undefined;
        }
        if (!winOrPlatform) {
            winOrPlatform = window;
        }
        if (!platform) {
            platform = "desktop";
        }
        return PLATFORMS_MAP[platform](winOrPlatform);
    };
    var setupPlatforms = function (win) {
        if (win === void 0) { win = window; }
        win.Ionic = win.Ionic || {};
        var platforms = win.Ionic.platforms;
        if (platforms == null) {
            platforms = win.Ionic.platforms = detectPlatforms(win);
            platforms.forEach(function (p) { return win.document.documentElement.classList.add("plt-" + p); });
        }
        return platforms;
    };
    var detectPlatforms = function (win) { return Object.keys(PLATFORMS_MAP).filter(function (p) { return PLATFORMS_MAP[p](win); }); };
    var isMobileWeb = function (win) { return isMobile(win) && !isHybrid(win); };
    var isIpad = function (win) {
        if (testUserAgent(win, /iPad/i)) {
            return true;
        }
        if (testUserAgent(win, /Macintosh/i) && isMobile(win)) {
            return true;
        }
        return false;
    };
    var isIphone = function (win) { return testUserAgent(win, /iPhone/i); };
    var isIOS = function (win) { return testUserAgent(win, /iPhone|iPod/i) || isIpad(win); };
    var isAndroid = function (win) { return testUserAgent(win, /android|sink/i); };
    var isAndroidTablet = function (win) {
        return isAndroid(win) && !testUserAgent(win, /mobile/i);
    };
    var isPhablet = function (win) {
        var width = win.innerWidth;
        var height = win.innerHeight;
        var smallest = Math.min(width, height);
        var largest = Math.max(width, height);
        return (smallest > 390 && smallest < 520) &&
            (largest > 620 && largest < 800);
    };
    var isTablet = function (win) {
        var width = win.innerWidth;
        var height = win.innerHeight;
        var smallest = Math.min(width, height);
        var largest = Math.max(width, height);
        return (isIpad(win) ||
            isAndroidTablet(win) ||
            ((smallest > 460 && smallest < 820) &&
                (largest > 780 && largest < 1400)));
    };
    var isMobile = function (win) {
        var isTouchScreen = !!navigator.userAgent.match(/AppleWebkit.*Mobile.*/) || "ontouchstart" in win ||
            (matchMedia(win, '(pointer:coarse)') || !!matchMedia(win, "-moz-touch-enabled"));
        return isTouchScreen;
    };
    var isDesktop = function (win) { return !isMobile(win); };
    var isHybrid = function (win) { return isCordova(win) || isCapacitorNative(win); };
    var isCordova = function (win) { return !!(win['cordova'] || win['phonegap'] || win['PhoneGap']); };
    var isCapacitorNative = function (win) {
        var capacitor = win['Capacitor'];
        return !!(capacitor && capacitor.isNative);
    };
    var isElectron = function (win) { return testUserAgent(win, /electron/i); };
    var isPWA = function (win) { return !!(win.matchMedia('(display-mode: standalone)').matches || win.navigator.standalone); };
    var testUserAgent = function (win, expr) { return expr.test(win.navigator.userAgent); };
    var matchMedia = function (win, query) { return win.matchMedia(query).matches; };
    var PLATFORMS_MAP = {
        'ipad': isIpad,
        'iphone': isIphone,
        'ios': isIOS,
        'android': isAndroid,
        'phablet': isPhablet,
        'tablet': isTablet,
        'cordova': isCordova,
        'capacitor': isCapacitorNative,
        'electron': isElectron,
        'pwa': isPWA,
        'mobile': isMobile,
        'mobileweb': isMobileWeb,
        'desktop': isDesktop,
        'hybrid': isHybrid
    };

    var UtilsService = /** @class */ (function (_super) {
        __extends(UtilsService, _super);
        function UtilsService(globalParams) {
            var _this = _super.call(this) || this;
            _this.globalParams = globalParams;
            return _this;
        }
        UtilsService.prototype.getUriInfo = function (uri) {
            if (!uri || uri.indexOf(this.globalParams.appInfo.folderUrlPrefix) >= 0)
                return {};
            var pos, firstSeg, info = {}, amdFolder;
            pos = uri.indexOf('/');
            firstSeg = uri.substring(0, pos);
            amdFolder = uri.substring(0, uri.lastIndexOf('/') + 1);
            if (this.globalParams.jimuConfig.isDesignMode === true && this.globalParams.appInfo.folderUrlPrefix) {
                info.folderUrl = this.globalParams.appInfo.folderUrlPrefix + "/" + amdFolder;
            }
            else {
                info.folderUrl = amdFolder;
            }
            info.amdFolder = amdFolder;
            return info;
        };
        UtilsService.prototype.processWidgetSetting = function (setting) {
            if (!setting.uri) {
                return setting;
            }
            _.extend(setting, this.getUriInfo(setting.uri));
            if (!setting.position) {
                setting.position = {
                    "left": 100,
                    "top": 100,
                    "width": 300,
                    "height": 400,
                    "relativeTo": "map"
                };
            }
            return setting;
        };
        UtilsService.prototype.addManifest2WidgetJson = function (widgetJson, manifest) {
            _.extend(widgetJson, manifest.properties);
            widgetJson.name = manifest.name;
            if (!widgetJson.label) {
                widgetJson.label = manifest.label;
            }
            widgetJson.manifest = manifest;
        };
        UtilsService.prototype.addManifestProperies = function (manifest) {
            if (manifest.url) {
                manifest.icon = manifest.url + 'images/icon.png';
            }
            if (manifest.category === "theme") {
                this.addThemeManifestProperies(manifest);
            }
            else {
                this.addWidgetManifestProperties(manifest);
            }
        };
        UtilsService.prototype.addThemeManifestProperies = function (manifest) {
            manifest.panels.forEach(function (panel) {
                panel.uri = 'panels/' + panel.name + '/Panel.js';
            });
            manifest.styles.forEach(function (style) {
                style.uri = 'styles/' + style.name + '/style.css';
            });
            manifest.layouts.forEach(function (layout) {
                layout.uri = 'layouts/' + layout.name + '/config.json';
                layout.icon = 'layouts/' + layout.name + '/icon.png';
                layout.RTLIcon = 'layouts/' + layout.name + '/icon_rtl.png';
            });
        };
        UtilsService.prototype.addWidgetManifestProperties = function (manifest) {
            if (typeof manifest['2D'] !== 'undefined') {
                manifest.support2D = manifest['2D'];
            }
            if (typeof manifest['3D'] !== 'undefined') {
                manifest.support3D = manifest['3D'];
            }
            if (typeof manifest['2D'] === 'undefined' && typeof manifest['3D'] === 'undefined') {
                manifest.support2D = true;
            }
            delete manifest['2D'];
            delete manifest['3D'];
            if (typeof manifest.properties === 'undefined') {
                manifest.properties = {};
            }
            _super.prototype.processWidgetProperties.call(this, manifest);
        };
        UtilsService.prototype.processManifestLabel = function (manifest, locale) {
            manifest.label = manifest.i18nLabels && (manifest.i18nLabels[locale] ||
                manifest.i18nLabels.defaultLabel) ||
                manifest.label ||
                manifest.name;
            if (manifest.layouts) {
                _.forEach(manifest.layouts, function (layout) {
                    var key = 'i18nLabels_layout_' + layout.name;
                    layout.label = manifest[key] && (manifest[key][locale] ||
                        manifest[key].defaultLabel) ||
                        layout.label ||
                        layout.name;
                });
            }
            if (manifest.styles) {
                _.forEach(manifest.styles, function (_style) {
                    var key = 'i18nLabels_style_' + _style.name;
                    _style.label = manifest[key] && (manifest[key][locale] ||
                        manifest[key].defaultLabel) ||
                        _style.label ||
                        _style.name;
                });
            }
        };
        UtilsService.prototype.replacePlaceHolder = function (obj, props) {
            var str = JSON.stringify(obj), m = str.match(/\$\{(\w)+\}/g), i;
            if (m === null) {
                return obj;
            }
            for (i = 0; i < m.length; i++) {
                var p = m[i].match(/(\w)+/g)[0];
                if (props[p]) {
                    str = str.replace(m[i], props[p]);
                }
            }
            return JSON.parse(str);
        };
        UtilsService.prototype.addI18NLabel = function (manifest) {
            return new Promise(function (resolve, reject) {
                if (manifest.i18nLabels) {
                    resolve(manifest);
                    return;
                }
                manifest.i18nLabels = {};
                if (manifest.properties && manifest.properties.hasLocale === false) {
                    resolve(manifest);
                }
                resolve(manifest);
            });
        };
        UtilsService.prototype.processUrlInAppConfig = function (url) {
            if (!url) {
                return;
            }
            if (url.startWith('data:') || url.startWith('http') || url.startWith('/')) {
                return url;
            }
            else {
                return this.globalParams.appInfo.appPath + url;
            }
        };
        UtilsService.prototype.isEqual = function (o1, o2) {
            var leftChain, rightChain;
            function compare2Objects(x, y) {
                var p;
                if (x === null && y === null || typeof x === 'undefined' && typeof y === 'undefined') {
                    return true;
                }
                if (x === null && y !== null || y === null && x !== null ||
                    typeof x === 'undefined' && typeof y !== 'undefined' ||
                    typeof y === 'undefined' && typeof x !== 'undefined') {
                    return false;
                }
                if (isNaN(x) && isNaN(y) && typeof x === 'number' && typeof y === 'number') {
                    return true;
                }
                if (x === y) {
                    return true;
                }
                if ((typeof x === 'function' && typeof y === 'function') ||
                    (x instanceof Date && y instanceof Date) ||
                    (x instanceof RegExp && y instanceof RegExp) ||
                    (x instanceof String && y instanceof String) ||
                    (x instanceof Number && y instanceof Number)) {
                    return x.toString() === y.toString();
                }
                if (leftChain.indexOf(x) > -1 || rightChain.indexOf(y) > -1) {
                    return false;
                }
                if (y !== null) {
                    for (p in y) {
                        if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
                            return false;
                        }
                        else if (typeof y[p] !== typeof x[p]) {
                            return false;
                        }
                    }
                    for (p in x) {
                        if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
                            return false;
                        }
                        else if (typeof y[p] !== typeof x[p]) {
                            return false;
                        }
                        switch (typeof (x[p])) {
                            case 'object':
                            case 'function':
                                leftChain.push(x);
                                rightChain.push(y);
                                if (!compare2Objects(x[p], y[p])) {
                                    return false;
                                }
                                leftChain.pop();
                                rightChain.pop();
                                break;
                            default:
                                if (x[p] !== y[p]) {
                                    return false;
                                }
                                break;
                        }
                    }
                }
                return true;
            }
            leftChain = [];
            rightChain = [];
            if (!compare2Objects(o1, o2)) {
                return false;
            }
            return true;
        };
        UtilsService.prototype.deleteMapOptions = function (mapOptions) {
            if (!mapOptions) {
                return;
            }
            delete mapOptions.extent;
            delete mapOptions.lods;
            delete mapOptions.center;
            delete mapOptions.scale;
            delete mapOptions.zoom;
            delete mapOptions.maxScale;
            delete mapOptions.maxZoom;
            delete mapOptions.minScale;
            delete mapOptions.minZoom;
        };
        UtilsService.prototype.reCreateObject = function (obj) {
            var ret;
            function copyArray(_array) {
                var retArray = [];
                _array.forEach(function (a) {
                    if (Array.isArray(a)) {
                        retArray.push(copyArray(a));
                    }
                    else if (typeof a === 'object') {
                        retArray.push(copyObject(a));
                    }
                    else {
                        retArray.push(a);
                    }
                });
                return retArray;
            }
            function copyObject(_obj) {
                var ret = {};
                for (var p in _obj) {
                    if (!_obj.hasOwnProperty(p)) {
                        continue;
                    }
                    if (_obj[p] === null) {
                        ret[p] = null;
                    }
                    else if (Array.isArray(_obj[p])) {
                        ret[p] = copyArray(_obj[p]);
                    }
                    else if (typeof _obj[p] === 'object') {
                        ret[p] = copyObject(_obj[p]);
                    }
                    else {
                        ret[p] = _obj[p];
                    }
                }
                return ret;
            }
            if (Array.isArray(obj)) {
                ret = copyArray(obj);
            }
            else {
                ret = copyObject(obj);
            }
            return ret;
        };
        UtilsService.prototype.getPositionStyle = function (_position) {
            var style = {};
            if (!_position) {
                return style;
            }
            var position = _.clone(_position);
            if (false) {
                var temp = void 0;
                if (typeof position.left !== 'undefined' && typeof position.right !== 'undefined') {
                    temp = position.left;
                    position.left = position.right;
                    position.right = temp;
                }
                else if (typeof position.left !== 'undefined') {
                    position.right = position.left;
                    delete position.left;
                }
                else if (typeof position.right !== 'undefined') {
                    position.left = position.right;
                    delete position.right;
                }
                if (typeof position.paddingLeft !== 'undefined' &&
                    typeof position.paddingRight !== 'undefined') {
                    temp = position.paddingLeft;
                    position.paddingLeft = position.paddingRight;
                    position.paddingRight = temp;
                }
                else if (typeof position.paddingLeft !== 'undefined') {
                    position.paddingRight = position.paddingLeft;
                    delete position.paddingLeft;
                }
                else if (typeof position.paddingRight !== 'undefined') {
                    position.paddingLeft = position.paddingRight;
                    delete position.paddingRight;
                }
            }
            var ps = ['left', 'top', 'right', 'bottom', 'width', 'height',
                'padding', 'paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom'
            ];
            for (var i = 0; i < ps.length; i++) {
                var p = ps[i];
                if (typeof position[p] === 'number') {
                    style[p] = position[p] + 'px';
                }
                else if (typeof position[p] !== 'undefined') {
                    style[p] = position[p];
                }
                else {
                    if (p.substr(0, 7) === 'padding') {
                        style[p] = 0;
                    }
                    else {
                        style[p] = 'auto';
                    }
                }
            }
            if (typeof position.zIndex === 'undefined') {
                style.zIndex = this.globalParams.jimuConfig.zIndex;
            }
            else {
                style.zIndex = position.zIndex;
            }
            return style;
        };
        UtilsService.detectChanges = function (cdr) {
            if (cdr && cdr["destroyed"] === false) {
                cdr.detectChanges();
            }
        };
        return UtilsService;
    }(SharedUtilsService));
    UtilsService.ɵfac = function UtilsService_Factory(t) { return new (t || UtilsService)(i0.ɵɵinject(AppGlobalConfig)); };
    UtilsService.ɵprov = i0.ɵɵdefineInjectable({ token: UtilsService, factory: UtilsService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UtilsService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: AppGlobalConfig }]; }, null);
    })();

    var PlatformService = /** @class */ (function () {
        function PlatformService(doc, zone) {
            var _this = this;
            this.doc = doc;
            this.backButton = new rxjs.Subject();
            this.pause = new rxjs.Subject();
            this.resume = new rxjs.Subject();
            this.resize = new rxjs.Subject();
            zone.run(function () {
                _this.win = doc.defaultView;
                _this.backButton.subscribeWithPriority = function (priority, callback) {
                    return this.subscribe(function (ev) { return (ev.register(priority, function () { return zone.run(callback); })); });
                };
                proxyEvent(_this.pause, doc, 'pause');
                proxyEvent(_this.resume, doc, 'resume');
                proxyEvent(_this.backButton, doc, 'ionBackButton');
                proxyEvent(_this.resize, _this.win, 'resize');
                var readyResolve;
                _this._readyPromise = new Promise(function (res) { readyResolve = res; });
                if (_this.win && _this.win['cordova']) {
                    doc.addEventListener('deviceready', function () {
                        readyResolve('cordova');
                    }, { once: true });
                }
                else {
                    readyResolve('dom');
                }
            });
        }
        PlatformService.prototype.is = function (platformName) {
            return isPlatform(this.win, platformName);
        };
        PlatformService.prototype.platforms = function () {
            return getPlatforms(this.win);
        };
        PlatformService.prototype.ready = function () {
            return this._readyPromise;
        };
        Object.defineProperty(PlatformService.prototype, "isRTL", {
            get: function () {
                return this.doc.dir === 'rtl';
            },
            enumerable: false,
            configurable: true
        });
        PlatformService.prototype.getQueryParam = function (key) {
            return readQueryParam(this.win.location.href, key);
        };
        PlatformService.prototype.isLandscape = function () {
            return !this.isPortrait();
        };
        PlatformService.prototype.isPortrait = function () {
            return this.win.matchMedia && this.win.matchMedia('(orientation: portrait)').matches;
        };
        PlatformService.prototype.testUserAgent = function (expression) {
            var nav = this.win.navigator;
            return !!(nav && nav.userAgent && nav.userAgent.indexOf(expression) >= 0);
        };
        PlatformService.prototype.url = function () {
            return this.win.location.href;
        };
        PlatformService.prototype.width = function () {
            return this.win.innerWidth;
        };
        PlatformService.prototype.height = function () {
            return this.win.innerHeight;
        };
        return PlatformService;
    }());
    PlatformService.ɵfac = function PlatformService_Factory(t) { return new (t || PlatformService)(i0.ɵɵinject(i1$1.DOCUMENT), i0.ɵɵinject(i0.NgZone)); };
    PlatformService.ɵprov = i0.ɵɵdefineInjectable({ token: PlatformService, factory: PlatformService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PlatformService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1$1.DOCUMENT]
                        }] }, { type: i0.NgZone }];
        }, null);
    })();
    var readQueryParam = function (url, key) {
        key = key.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + key + '=([^&#]*)');
        var results = regex.exec(url);
        return results ? decodeURIComponent(results[1].replace(/\+/g, ' ')) : null;
    };
    var proxyEvent = function (emitter, el, eventName) {
        if (el) {
            el.addEventListener(eventName, function (ev) {
                emitter.next(ev != null ? ev.detail : undefined);
            });
        }
    };

    var CommonService = /** @class */ (function () {
        function CommonService(utils, platform) {
            this.utils = utils;
            this.platform = platform;
        }
        CommonService.prototype.createPromiseDefer = function () {
            var resolve, reject;
            var promise = new Promise(function () {
                resolve = arguments[0];
                reject = arguments[1];
            });
            return {
                resolve: resolve,
                reject: reject,
                promise: function () { return promise; }
            };
        };
        CommonService.prototype.getComponentRootNode = function (componentRef) {
            if (!componentRef) {
                console.log('componentRef undefined');
                return null;
            }
            return componentRef.hostView.rootNodes[0];
        };
        CommonService.prototype.getElementBounds = function (ele) {
            if (!ele)
                return null;
            var rect = ele.getBoundingClientRect();
            var top = document.documentElement.clientTop;
            var left = document.documentElement.clientLeft;
            return {
                top: rect.top - top,
                left: rect.left - left,
                bottom: rect.bottom - top,
                right: rect.right - left,
                width: rect.width,
                height: rect.height
            };
        };
        CommonService.prototype.getPx = function (px) {
            if (!px)
                return "0px";
            if (typeof px === "string" && px.indexOf("px") >= 0) {
                return px;
            }
            if (px.toString().indexOf("%") >= 0 || px === "auto")
                return px;
            if (typeof px === "number")
                return px + "px";
            var _temp = parseFloat(px);
            if (isNaN(_temp)) {
                return "0px";
            }
            return _temp + "px";
        };
        CommonService.prototype.getPxNumber = function (px) {
            if (!px)
                return 0;
            if (typeof px === "string" && px.indexOf("px") >= 0) {
                return parseInt(px, 10);
            }
            if (px.toString().indexOf("%") >= 0 || px === "auto")
                return px;
            if (typeof px === "number")
                return px;
            var _temp = parseFloat(px.toString());
            if (isNaN(_temp)) {
                return 0;
            }
            return _temp;
        };
        CommonService.prototype.getPosition = function (positionConfig) {
            var _position = new WidgetPosition();
            if (positionConfig.top || positionConfig.top == 0) {
                _position.top = this.getPx(positionConfig.top);
            }
            if (positionConfig.left || positionConfig.left == 0) {
                _position.left = this.getPx(positionConfig.left);
            }
            if (positionConfig.right || positionConfig.right == 0) {
                _position.right = this.getPx(positionConfig.right);
            }
            if (positionConfig.bottom || positionConfig.bottom == 0) {
                _position.bottom = this.getPx(positionConfig.bottom);
            }
            if (positionConfig.width || positionConfig.width == 0) {
                _position.width = this.getPx(positionConfig.width);
            }
            else {
                _position.width = "100%";
            }
            if (positionConfig.height || positionConfig.height == 0) {
                _position.height = this.getPx(positionConfig.height);
            }
            else {
                _position.height = "100%";
            }
            if (positionConfig.zIndex || positionConfig.zIndex == 0) {
                _position.zIndex = positionConfig.zIndex;
            }
            return _position;
        };
        CommonService.prototype.setWidgetPosition = function (compRef, widgetPosition) {
            var ele = this.getComponentRootNode(compRef);
            var css = this.utils.getPositionStyle(widgetPosition);
            ele.style.position = "absolute";
            if (css.top || css.top == 0) {
                ele.style.top = css.top;
            }
            if (css.right || css.right == 0) {
                ele.style.right = css.right;
            }
            if (css.bottom || css.bottom == 0) {
                ele.style.bottom = css.bottom;
            }
            if (css.left || css.left == 0) {
                ele.style.left = css.left;
            }
            if (css.width || css.width == 0) {
                ele.style.width = css.width;
            }
            if (css.height || css.height == 0) {
                ele.style.height = css.height;
            }
            if (css.zIndex || css.zIndex == 0) {
                ele.style.zIndex = css.zIndex;
            }
        };
        CommonService.prototype.is = function (platformName) {
            return isPlatform(this.win, platformName);
        };
        CommonService.prototype.getPlatformName = function () {
            if (this.isAndroid())
                return 'android';
            if (this.isIos())
                return 'ios';
            if (!this.isMobile())
                return 'browser';
            return 'unknown';
        };
        CommonService.prototype.isMobileNotTablet = function () {
            return this.isMobile()
                && this.platform.is("ipad") == false
                && this.platform.is("phablet") == false
                && this.platform.is("tablet") == false;
        };
        CommonService.prototype.isMobile = function () {
            return this.platform.is("mobile") || this.platform.is("mobileweb");
        };
        CommonService.prototype.isMobileRealMachine = function () {
            return this.platform.is('mobile') && !this.platform.is('mobileweb');
        };
        CommonService.prototype.isAndroid = function () {
            return this.isMobileRealMachine() && this.platform.is('android');
        };
        CommonService.prototype.isIos = function () {
            return this.isMobileRealMachine() && (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone'));
        };
        return CommonService;
    }());
    CommonService.ɵfac = function CommonService_Factory(t) { return new (t || CommonService)(i0.ɵɵinject(UtilsService), i0.ɵɵinject(PlatformService)); };
    CommonService.ɵprov = i0.ɵɵdefineInjectable({ token: CommonService, factory: CommonService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CommonService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: UtilsService }, { type: PlatformService }]; }, null);
    })();

    var ComponentLoaderService = /** @class */ (function () {
        function ComponentLoaderService(componentFactoryResolver) {
            this.componentFactoryResolver = componentFactoryResolver;
            this.viewContainerInHome = null;
            this.viewContainerInMap = null;
            this.serviceInjector = null;
            this.factories = null;
            this.factoriesArray = null;
            this.factories = this.componentFactoryResolver["_factories"];
            if (this.factories) {
                this.factoriesArray = Array.from(this.factories);
            }
        }
        ComponentLoaderService.prototype.createComponent = function (component, params, container) {
            var inputs = {};
            if (params) {
                inputs = params;
            }
            var inputProviders = Object.keys(inputs).map(function (inputName) {
                return { provide: inputName, useValue: inputs[inputName] };
            });
            var injector = i0.Injector.create({ providers: inputProviders, parent: container === null || container === void 0 ? void 0 : container.parentInjector });
            var factory = this.componentFactoryResolver.resolveComponentFactory(component);
            var compRef = factory.create(injector);
            if (typeof compRef.instance.setServiceInjector === "function") {
                compRef.instance.setServiceInjector(this.serviceInjector);
            }
            return compRef;
        };
        ComponentLoaderService.prototype.getComponentPath = function (name) {
            var compInfo = findComponentInfo(name);
            if (compInfo) {
                return compInfo.path || compInfo.uri;
            }
            var comp = this.findComponent(name);
            if (comp) {
                return (typeof comp.getCompInfo === "function") ? comp.getCompInfo().path : "";
            }
            return "";
        };
        ComponentLoaderService.prototype.findComponent = function (name) {
            var comp = null;
            if (this.factories) {
                if (!this.factories || this.factories.size <= 0)
                    return null;
                var item = this.factoriesArray.find(function (value, index, arr) {
                    return value[1].selector.toLowerCase() === name.toLowerCase();
                });
                if (item) {
                    comp = item[0];
                }
            }
            else {
                var compInfo = findComponentInfo(name);
                if (compInfo) {
                    return compInfo.component;
                }
            }
            return comp;
        };
        ComponentLoaderService.prototype.getServiceInjector = function () {
            return this.serviceInjector;
        };
        ComponentLoaderService.prototype.setServiceInjector = function (serviceInjector) {
            this.serviceInjector = serviceInjector;
        };
        ComponentLoaderService.prototype.setViewContainerInHome = function (container) {
            this.viewContainerInHome = container;
        };
        ComponentLoaderService.prototype.createComponentToHome = function (component, params) {
            return this.createComponent(component, params, this.viewContainerInHome);
        };
        ComponentLoaderService.prototype.showInHome = function (compRef) {
            if (!compRef) {
                return;
            }
            if (!this.viewContainerInHome) {
                console.error("未设置容器，无法显示组件");
                return;
            }
            this.viewContainerInHome.insert(compRef.hostView);
        };
        ComponentLoaderService.prototype.setViewContainerInMap = function (container) {
            this.viewContainerInMap = container;
        };
        ComponentLoaderService.prototype.createComponentToMap = function (component, params) {
            return this.createComponent(component, params, this.viewContainerInMap);
        };
        ComponentLoaderService.prototype.showInMap = function (compRef) {
            if (!compRef) {
                return;
            }
            if (!this.viewContainerInMap) {
                console.error("未设置容器，无法显示组件");
                return;
            }
            this.viewContainerInMap.insert(compRef.hostView);
        };
        ComponentLoaderService.prototype.ngOnDestroy = function () {
            if (this.viewContainerInHome) {
                this.viewContainerInHome.clear();
            }
            if (this.viewContainerInMap) {
                this.viewContainerInMap.clear();
            }
        };
        return ComponentLoaderService;
    }());
    ComponentLoaderService.ɵfac = function ComponentLoaderService_Factory(t) { return new (t || ComponentLoaderService)(i0.ɵɵinject(i0.ComponentFactoryResolver)); };
    ComponentLoaderService.ɵprov = i0.ɵɵdefineInjectable({ token: ComponentLoaderService, factory: ComponentLoaderService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ComponentLoaderService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: i0.ComponentFactoryResolver }]; }, null);
    })();

    var BaseWidgetFrame = /** @class */ (function () {
        function BaseWidgetFrame() {
        }
        return BaseWidgetFrame;
    }());

    var BaseWidgetPanel = /** @class */ (function () {
        function BaseWidgetPanel() {
        }
        return BaseWidgetPanel;
    }());

    var BaseWidgetSetting = /** @class */ (function () {
        function BaseWidgetSetting() {
        }
        return BaseWidgetSetting;
    }());

    var OnScreenWidgetPanel = /** @class */ (function () {
        function OnScreenWidgetPanel() {
        }
        return OnScreenWidgetPanel;
    }());

    var WidgetPlaceholder = /** @class */ (function () {
        function WidgetPlaceholder(options) {
            this.index = 0;
            this.configId = "";
            this.id = "dijit__WidgetBase_" + this.index;
            this.class = 'jimu-widget-placeholder';
            this.params = null;
            this.params = options;
        }
        WidgetPlaceholder.prototype.postCreate = function () {
        };
        WidgetPlaceholder.prototype.moveTo = function (position) {
        };
        WidgetPlaceholder.prototype.setIndex = function (index) {
        };
        return WidgetPlaceholder;
    }());

    var EventEmitterService = /** @class */ (function () {
        function EventEmitterService() {
            this.rss = new events.EventEmitter();
            this._mapLoaded = "manLoaded";
            this._mapChanged = "mapChanged";
            this._viewLoaded = "viewLoaded";
            this._viewChanged = "viewChanged";
            this._widget_Created = "widget-created";
            this._widgetCreated = "widgetCreated";
            this._designConfigChanged = "DesignConfigChanged";
            this._appConfigLoaded = "appConfigLoaded";
            this._appConfigChanged = "appConfigChanged";
            this._header_ConfigChanged = "header-configChanged";
            this._createPanelContainer = "createPanelContainer";
            this._mapPositionChanged = "mapPositionChanged";
            this._checkChangeDetector = "detectChanges";
            this._imageViewerIndexChanged = "imageViewerIndexChanged";
        }
        EventEmitterService.prototype.removeListener = function (event, listener) {
            if (typeof listener === "function") {
                return this.rss.removeListener(event, listener);
            }
            return this.rss;
        };
        return EventEmitterService;
    }());
    EventEmitterService.ɵfac = function EventEmitterService_Factory(t) { return new (t || EventEmitterService)(); };
    EventEmitterService.ɵprov = i0.ɵɵdefineInjectable({ token: EventEmitterService, factory: EventEmitterService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EventEmitterService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    var HttpReqService = /** @class */ (function () {
        function HttpReqService(httpClient, config) {
            this.httpClient = httpClient;
            this.config = config;
            this.ServiceUrl = '';
            this.headers = new i1.HttpHeaders().set("Content-type", "application/json; charset=UTF-8");
            this._tokenKey = "__token";
            this._tokenValue = "";
            this.ServiceUrl = config.apiRootUrl;
        }
        HttpReqService.prototype.getLocalToken = function () {
            if (window.sessionStorage) {
                var str = sessionStorage.getItem(this._tokenKey);
                if (str != "") {
                    return JSON.parse(str);
                }
            }
            else {
                console.log("浏览器不支持sessionStorage");
            }
            return null;
        };
        HttpReqService.prototype.getTokenKey = function () {
            return this._tokenKey;
        };
        HttpReqService.prototype.setAccessToken = function (token) {
            this._tokenValue = token;
        };
        HttpReqService.prototype.getAccessToken = function () {
            var token = "";
            if (this._tokenValue) {
                token = this._tokenValue;
            }
            else {
                var m = this.getLocalToken();
                if (m) {
                    this.setAccessToken(m.access_token);
                    token = m.access_token;
                }
            }
            return token;
        };
        HttpReqService.prototype.getAuthHeaders = function () {
            return this.headers.set("Authorization", "Bearer " + this.getAccessToken());
        };
        HttpReqService.prototype.getJsonFile = function (configFilePath) {
            return this.httpClient.get(configFilePath, { responseType: 'json' }).toPromise();
        };
        HttpReqService.prototype._toHttpParams = function (paras) {
            if (!paras)
                return null;
            var obj = {};
            paras.forEach(function (x) {
                obj[x.name] = x.value;
            });
            return new i1.HttpParams({ fromObject: obj });
        };
        HttpReqService.prototype._toParaString = function (para) {
            if (!para || para.length <= 0)
                return '';
            var str = '';
            para.forEach(function (s) {
                str += "&" + s.name + "=" + s.value;
            });
            return str.substring(1);
        };
        HttpReqService.prototype._toHttpParams2 = function (para) {
            var _httpParams = null;
            if (typeof para === "string") {
                _httpParams = new i1.HttpParams({ fromString: para });
            }
            else {
                _httpParams = new i1.HttpParams({ fromObject: para });
            }
            return _httpParams;
        };
        HttpReqService.prototype._toParaString2 = function (para) {
            if (!para)
                return '';
            if (typeof para === "string") {
                if (para.startsWith("&") || para.startsWith("?")) {
                    return para.substring(1);
                }
                return para;
            }
            else {
                var str = '';
                for (var key in para) {
                    if (para.hasOwnProperty(key)) {
                        str += "&" + key + "=" + para[key];
                    }
                }
                return str.substring(1);
            }
        };
        HttpReqService.prototype.getNoAuthGeneric = function (apiName, para, serviceUrl) {
            var url = this.ServiceUrl;
            if (serviceUrl)
                url = serviceUrl;
            return this.httpClient.get(url + "/" + apiName, {
                headers: this.headers,
                params: this._toHttpParams2(para)
            }).toPromise();
        };
        HttpReqService.prototype.getNoAuth = function (apiName, para, serviceUrl) {
            return this.getNoAuthGeneric(apiName, para, serviceUrl);
        };
        HttpReqService.prototype.getGeneric = function (apiName, para, serviceUrl) {
            var url = this.ServiceUrl;
            if (serviceUrl)
                url = serviceUrl;
            return this.httpClient.get(url + "/" + apiName, {
                headers: this.getAuthHeaders(),
                params: this._toHttpParams2(para)
            }).toPromise();
        };
        HttpReqService.prototype.get = function (apiName, para, serviceUrl) {
            return this.getGeneric(apiName, para, serviceUrl);
        };
        HttpReqService.prototype.getPage = function (apiName, pageIndex, pageSize, orderBy, direction, para, serviceUrl) {
            if (pageIndex <= 0) {
                pageIndex = 1;
            }
            if (pageSize <= 0) {
                pageSize = 20;
            }
            var pager = {
                page: pageIndex.toString(),
                size: pageSize.toString(),
                orderby: orderBy ? orderBy : "",
                direction: direction === exports.OrderByType.desc ? "1" : "0"
            };
            var paraString = this._toParaString2(pager);
            if (para) {
                paraString = paraString + "&" + this._toParaString2(para);
            }
            return this.getGeneric(apiName, paraString, serviceUrl);
        };
        HttpReqService.prototype.postNoAuthGeneric = function (apiName, para, serviceUrl, receiveAsObject) {
            var url = this.ServiceUrl;
            if (typeof serviceUrl === 'string' && serviceUrl)
                url = serviceUrl;
            if (receiveAsObject === true || (typeof serviceUrl === 'boolean' && serviceUrl === true)) {
                return this.httpClient.post(url + "/" + apiName, para, { headers: this.headers }).toPromise();
            }
            else {
                return this.httpClient.post(url + "/" + apiName, this._toParaString2(para), {
                    headers: {
                        'Content-Type': "application/x-www-form-urlencoded;charset=UTF-8"
                    }
                }).toPromise();
            }
        };
        HttpReqService.prototype.postNoAuth = function (apiName, para, serviceUrl, receiveAsObject) {
            return this.postNoAuthGeneric(apiName, para, serviceUrl, receiveAsObject);
        };
        HttpReqService.prototype.postGeneric = function (apiName, para, serviceUrl, receiveAsObject) {
            var url = this.ServiceUrl;
            if (typeof serviceUrl === 'string' && serviceUrl)
                url = serviceUrl;
            if (receiveAsObject === true || (typeof serviceUrl === 'boolean' && serviceUrl === true)) {
                return this.httpClient.post(url + "/" + apiName, para, { headers: this.getAuthHeaders() }).toPromise();
            }
            else {
                return this.httpClient.post(url + "/" + apiName, this._toParaString2(para), {
                    headers: {
                        'Content-Type': "application/x-www-form-urlencoded;charset=UTF-8",
                        "Authorization": "Bearer " + this.getAccessToken()
                    }
                }).toPromise();
            }
        };
        HttpReqService.prototype.post = function (apiName, para, serviceUrl, receiveAsObject) {
            return this.postGeneric(apiName, para, serviceUrl, receiveAsObject);
        };
        HttpReqService.prototype.postPage = function (apiName, pageIndex, pageSize, orderBy, direction, para, serviceUrl, receiveAsObject) {
            if (pageIndex <= 0) {
                pageIndex = 1;
            }
            if (pageSize <= 0) {
                pageSize = 20;
            }
            var pager = {
                page: pageIndex.toString(),
                size: pageSize.toString(),
                orderby: orderBy ? orderBy : "",
                direction: direction === exports.OrderByType.desc ? "1" : "0"
            };
            var paraString = this._toParaString2(pager);
            if (para) {
                paraString = paraString + "&" + this._toParaString2(para);
            }
            return this.postGeneric(apiName, paraString, serviceUrl, receiveAsObject);
        };
        HttpReqService.prototype.deleteGeneric = function (apiName, para, serviceUrl) {
            var url = this.ServiceUrl;
            if (serviceUrl)
                url = serviceUrl;
            return this.httpClient.delete(url + "/" + apiName, {
                params: this._toHttpParams2(para),
                headers: {
                    "Authorization": "Bearer " + this.getAccessToken()
                }
            }).toPromise();
        };
        HttpReqService.prototype.delete = function (apiName, para, serviceUrl) {
            return this.deleteGeneric(apiName, para, serviceUrl);
        };
        return HttpReqService;
    }());
    HttpReqService.ɵfac = function HttpReqService_Factory(t) { return new (t || HttpReqService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(AppGlobalConfig)); };
    HttpReqService.ɵprov = i0.ɵɵdefineInjectable({ token: HttpReqService, factory: HttpReqService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HttpReqService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: i1.HttpClient }, { type: AppGlobalConfig }]; }, null);
    })();

    var WidgetManagerService = /** @class */ (function () {
        function WidgetManagerService(globalParams, eventService, utils, httpService, commonService, componentLoader) {
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
        WidgetManagerService.prototype.setMap = function (map) {
            if (this.globalParams.mapConfig.is3D === true) {
                this.view = map;
            }
            else {
                this.map = map;
            }
        };
        WidgetManagerService.prototype.setAppConfig = function (appConfig) {
            this.appConfig = appConfig;
        };
        WidgetManagerService.prototype._onMapLoaded = function (map) {
        };
        WidgetManagerService.prototype._onMapChanged = function (map) {
        };
        WidgetManagerService.prototype.loadConfig = function (compInfo, widget) {
            var _this = this;
            widget.appConfig = this.appConfig;
            widget.view = this.view;
            widget.map = this.map;
            var def = this.commonService.createPromiseDefer();
            var item = this.appConfig.widgetOnScreen.widgets.find(function (f) { return f.uri.toLowerCase() === compInfo.uri.toLowerCase(); });
            if (item) {
                if (!item.config) {
                    this.tryLoadWidgetConfig(item).then(function (widgetJson) {
                        _this.setWidgetPorp(widget, widgetJson);
                        widget.started = true;
                        widget.state = exports.WidgetState.opened;
                        return def.resolve(true);
                    }).catch(function (err) {
                        return def.resolve(true);
                    });
                }
            }
            else {
                var aconfig = {
                    "widgetOnScreen": {
                        "widgets": [{
                                "uri": compInfo.uri,
                                "label": compInfo.name
                            }]
                    }
                };
                this.configLoader._upgradeAppConfig(aconfig);
                this.configLoader._processAfterTryLoad(aconfig);
                this.configLoader.loadWidgetsManifest(aconfig).then(function (appconfig) {
                    var wConfig = appconfig.widgetOnScreen.widgets[0];
                    _this.tryLoadWidgetConfig(wConfig).then(function (widgetJson) {
                        _this.setWidgetPorp(widget, widgetJson);
                        widget.started = true;
                        widget.state = exports.WidgetState.opened;
                        return def.resolve(true);
                    }).catch(function (err) {
                        return def.resolve(true);
                    });
                });
            }
            return def.promise();
        };
        WidgetManagerService.prototype.openWidget = function (options) {
            var _this = this;
            var _openPanelOrWidget = function (_config) {
                var _options = _.cloneDeep(options);
                var inPanel = _config.inPanel;
                if (options.onlyCreateWidget === true) {
                    inPanel = false;
                }
                if (inPanel !== false) {
                    _this.panelManager.showPanel(_config, null, options.panel, _options).then(function (panel) {
                        if (panel.instance.isDockable()) {
                            _this.panelManager.onMapResize();
                        }
                        def.resolve(panel);
                    });
                }
                else {
                    _this.loadWidget(_config, _options).then(function (compRef) {
                        if (options.onlyCreateWidget === true) {
                            def.resolve(compRef);
                        }
                        else {
                            _this.showWidget(compRef);
                            compRef.instance.setPosition(_config.position);
                            _this.commonService.setWidgetPosition(compRef, _config.position);
                            _config.loaded = true;
                            compRef.instance.configId = _config.id;
                            def.resolve(compRef.instance);
                        }
                    }).catch(function (err) { return def.reject(err); });
                }
            };
            var def = this.commonService.createPromiseDefer();
            if (!options.uri) {
                console.error("no uri");
                def.reject(new Error("no uri"));
                return def.promise();
            }
            var item = this.appConfig.widgetOnScreen.widgets.find(function (f) { return f.uri.toLowerCase() === options.uri.toLowerCase(); });
            if (item) {
                _openPanelOrWidget(item);
            }
            else {
                if (!options.position) {
                    console.error("no position");
                    def.reject(new Error("no position"));
                    return def.promise();
                }
                var _config = {
                    "label": "",
                    "uri": options.uri,
                    "position": {}
                };
                _config.position = _.merge(_config.position, options.position);
                if (options.panel) {
                    _config.label = options.panel.title;
                    if (options.panel.dockSide) {
                        switch (options.panel.dockSide) {
                            case exports.PanelDockMode.left:
                                _config["panel"] = {
                                    uri: "epsgis-dockable-panel-at-left"
                                };
                                break;
                            case exports.PanelDockMode.bottom:
                                _config["panel"] = {
                                    uri: "epsgis-dockable-panel-at-bottom"
                                };
                                break;
                            case exports.PanelDockMode.right:
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
                var _appConfig = {
                    "widgetOnScreen": {
                        "widgets": [
                            _config
                        ]
                    }
                };
                this.configLoader._processAfterTryLoad(_appConfig);
                this.configLoader.loadWidgetsManifest(_appConfig).then(function (cfg) {
                    var _widgetConfig = cfg.widgetOnScreen.widgets[0];
                    _this.appConfig.widgetOnScreen.widgets.push(_widgetConfig);
                    _openPanelOrWidget(_widgetConfig);
                }).catch(function (err) { return def.reject(err); });
            }
            return def.promise();
        };
        WidgetManagerService.prototype.loadWidget = function (setting, openOptions) {
            var def = this.commonService.createPromiseDefer();
            var findWidget;
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
        };
        WidgetManagerService.prototype.setWidgetPorp = function (widget, setting) {
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
        };
        WidgetManagerService.prototype.createWidget = function (setting, openOptions) {
            return __awaiter(this, void 0, void 0, function () {
                var def, widget, _widget, comp, compRef, inMap, _msg, _msg, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            def = this.commonService.createPromiseDefer();
                            _widget = this.getWidgetById(setting.id);
                            if (_widget) {
                                def.resolve(_widget);
                                return [2 /*return*/, def.promise()];
                            }
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 6, , 7]);
                            comp = this.componentLoader.findComponent(setting.uri), compRef = null, inMap = false;
                            if (!comp) {
                                _msg = 'widget [' + setting.uri + '] not find';
                                console.log(_msg);
                                def.reject(new Error(_msg));
                                return [2 /*return*/, def.promise()];
                            }
                            if (setting.position.relativeTo !== "map") {
                                compRef = this.componentLoader.createComponentToHome(comp);
                            }
                            else {
                                compRef = this.componentLoader.createComponentToMap(comp);
                                inMap = true;
                            }
                            if (!compRef) {
                                _msg = "widget [" + setting.label + "] create fail";
                                console.log(_msg);
                                def.reject(new Error(_msg));
                                return [2 /*return*/, def.promise()];
                            }
                            widget = compRef.instance;
                            if (openOptions) {
                                widget.reqPara = openOptions.param;
                            }
                            if (!!setting.config) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.tryLoadWidgetConfig(setting)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3:
                            if (!!setting.manifest) return [3 /*break*/, 5];
                            return [4 /*yield*/, this.loadWidgetManifest(setting)];
                        case 4:
                            _a.sent();
                            _a.label = 5;
                        case 5:
                            this.setWidgetPorp(widget, setting);
                            this.loaded.push(compRef);
                            console.log('widget [' + setting.uri + '] created.');
                            this.eventService.rss.emit(this.eventService._widgetCreated, widget);
                            def.resolve(compRef);
                            return [3 /*break*/, 7];
                        case 6:
                            err_1 = _a.sent();
                            console.log('create [' + setting.uri + '] error:' + err_1.stack);
                            def.reject(err_1);
                            return [3 /*break*/, 7];
                        case 7: return [2 /*return*/, def.promise()];
                    }
                });
            });
        };
        WidgetManagerService.prototype.getAllWidgets = function () {
            return this.loaded;
        };
        WidgetManagerService.prototype.loadWidgetClass = function (setting) {
            return this.commonService.createPromiseDefer().promise();
        };
        WidgetManagerService.prototype.loadWidgetResources = function (setting) {
            return this.commonService.createPromiseDefer().promise();
        };
        WidgetManagerService.prototype.tryLoadWidgetConfig = function (widgetJson) {
            var def = this.commonService.createPromiseDefer();
            var configPath = widgetJson.configPath || 'config.json';
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
                this.httpService.getJsonFile(url).then(function (config) {
                    widgetJson.config = config;
                    def.resolve(widgetJson);
                }).catch(function (err) {
                    console.error("load [" + widgetJson.uri + "] config.json error");
                    console.error(err);
                    def.resolve(widgetJson);
                });
            }
            catch (error) {
                console.error(error);
                def.resolve(widgetJson);
            }
            return def.promise();
        };
        WidgetManagerService.prototype._tryLoadWidgetConfig = function (setting) {
        };
        WidgetManagerService.prototype.loadWidgetManifest = function (widgetJson) {
            var _this = this;
            var def = this.commonService.createPromiseDefer();
            var url = widgetJson.folderUrl + 'manifest.json';
            var foldrUrl = widgetJson.folderUrl.split('?');
            if (foldrUrl.length > 0) {
                url = foldrUrl[0] + 'manifest.json?' + (foldrUrl[1] ? foldrUrl[1] : '');
            }
            if (widgetJson.manifest) {
                def.resolve(widgetJson);
                return def.promise();
            }
            var process = function (manifest) {
                manifest.amdFolder = widgetJson.amdFolder;
                manifest.category = 'widget';
                var _w = "auto", _h = "auto";
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
                    _this.utils.addI18NLabel(manifest).then(function () {
                        _this._processManifest(manifest);
                        _this.utils.addManifest2WidgetJson(widgetJson, manifest);
                        def.resolve(widgetJson);
                    });
                }
                else {
                    _this._processManifest(manifest);
                    _this.utils.addManifest2WidgetJson(widgetJson, manifest);
                    def.resolve(widgetJson);
                }
            };
            this.httpService.getJsonFile(url).then(process).catch(function (err) {
                if (err.readyState === 4 && err.status === 200 && err.responseText === "") {
                    var manifest = {};
                    manifest.amdFolder = widgetJson.amdFolder;
                    manifest.category = 'widget';
                    process(manifest);
                }
                else {
                    console.error("load [" + widgetJson.uri + "] config.json error");
                    console.error(err);
                    def.resolve(widgetJson);
                }
            });
            return def.promise();
        };
        WidgetManagerService.prototype.loadWidgetSettingPage = function (setting) {
            var def = this.commonService.createPromiseDefer();
            return def.promise();
        };
        WidgetManagerService.prototype.loadWidgetSettingClass = function (setting) {
            var def = this.commonService.createPromiseDefer();
            return def.promise();
        };
        WidgetManagerService.prototype.loadWidgetSettingPageResources = function (setting) {
            var def = this.commonService.createPromiseDefer();
            return def.promise();
        };
        WidgetManagerService.prototype.createWidgetSetting = function (setting, clazz) {
            return null;
        };
        WidgetManagerService.prototype._hideLoading = function () {
        };
        WidgetManagerService.prototype.getWidgetById = function (id) {
            var ret;
            _.some(this.loaded, function (w) {
                if (w.instance.id === id) {
                    ret = w;
                    return true;
                }
            });
            return ret;
        };
        WidgetManagerService.prototype.getWidgetByLabel = function (label) {
            var ret;
            _.some(this.loaded, function (w) {
                if (w.instance.label === label) {
                    ret = w;
                    return true;
                }
            });
            return ret;
        };
        WidgetManagerService.prototype.getWidgetsByName = function (name) {
            var ret = [];
            _.some(this.loaded, function (w) {
                if (w.instance.name === name) {
                    ret.push(w);
                }
            });
            return ret;
        };
        WidgetManagerService.prototype.getOpenedWidgetByGroupId = function (groupId) {
            return _.find(this.loaded, function (w) {
                return w.instance.gid === groupId && (w.instance.state === exports.WidgetState.opened || w.instance.state === exports.WidgetState.active);
            });
        };
        WidgetManagerService.prototype.showWidget = function (compRef) {
            if (!compRef)
                return;
            var widget = compRef.instance;
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
            if (widget.state === exports.WidgetState.closed) {
                widget.setState(exports.WidgetState.opened);
                try {
                    widget.onOpen();
                }
                catch (err) {
                    console.error('fail to open widget ' + widget.name + '. ' + err.stack);
                }
            }
        };
        WidgetManagerService.prototype.closeOtherWidgetsInTheSameGroup = function (widget) {
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
        };
        WidgetManagerService.prototype.closeAllWidgetsInGroup = function (groupId) {
            var widgets = this.getAllWidgets();
            for (var i = 0; i < widgets.length; i++) {
                if (widgets[i].instance.gid === groupId) {
                    this.closeWidget(widgets[i]);
                }
            }
        };
        WidgetManagerService.prototype.closeWidget = function (widget) {
            var def = this.commonService.createPromiseDefer();
            var _widget;
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
            if (_widget.instance.state !== exports.WidgetState.closed) {
                try {
                    if (this.activeWidget && this.activeWidget.instance.id === _widget.instance.id) {
                        this.activeWidget.instance.onDeActive();
                        this.activeWidget = null;
                    }
                    this.commonService.getComponentRootNode(_widget).style.display = 'none';
                    _widget.instance.setState(exports.WidgetState.closed);
                    _widget.instance.onClose();
                    def.resolve(_widget);
                }
                catch (err) {
                    console.log(console.error('fail to close widget ' + _widget.instance.name + '. ' + err.stack));
                    def.reject(err);
                }
            }
            return def.promise();
        };
        WidgetManagerService.prototype.destroyWidget = function (widget) {
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
        };
        WidgetManagerService.prototype._processManifest = function (manifest) {
            this.utils.addManifestProperies(manifest);
            this.utils.processManifestLabel(manifest, 'zh-cn');
        };
        WidgetManagerService.prototype._tryLoadResource = function (setting, flag) {
            return this.commonService.createPromiseDefer().promise();
        };
        WidgetManagerService.prototype._replaceId = function (id) {
            return id.replace(/\//g, '_').replace(/\./g, '_');
        };
        WidgetManagerService.prototype.loadWidgetStyle = function (widgetSetting) {
        };
        WidgetManagerService.prototype.loadWidgetSettingStyle = function (widgetSetting) {
        };
        WidgetManagerService.prototype.loadWidgetConfig = function (widgetSetting) {
        };
        WidgetManagerService.prototype.loadWidgetI18n = function (widgetSetting) {
        };
        WidgetManagerService.prototype.loadWidgetSettingI18n = function (widgetSetting) {
        };
        WidgetManagerService.prototype.loadWidgetTemplate = function (widgetSetting) {
            return this.commonService.createPromiseDefer().promise();
        };
        WidgetManagerService.prototype.loadWidgetSettingTemplate = function (widgetSetting) {
            return this.commonService.createPromiseDefer().promise();
        };
        WidgetManagerService.prototype.getOnScreenOffPanelWidgets = function () {
            return _.filter(this.loaded, function (widget) {
                return (widget.instance.isOnScreen && !widget.instance.inPanel) || (widget.instance.widgetConfig.isOnScreen && !widget.instance.widgetConfig.inPanel);
            });
        };
        WidgetManagerService.prototype._postWidgetStartup = function (widgetObject) {
        };
        WidgetManagerService.prototype._triggerMissedAction = function (widget) {
            this.missedActions.forEach(function (info) {
                if (info.id === widget.instance.id) {
                    widget.instance.onAction(info.action.name, info.action.data);
                }
            });
        };
        WidgetManagerService.prototype._remove = function (id) {
            var _this = this;
            return _.some(this.loaded, function (w, i) {
                if (w.instance.id === id) {
                    _this.loaded.splice(i, 1);
                    return true;
                }
            });
        };
        WidgetManagerService.prototype._onDestroyWidget = function (widget) {
            if (widget.instance.state !== exports.WidgetState.closed) {
                this.closeWidget(widget);
            }
            this._removeWidget(widget);
            console.log('destroy widget [' + widget.instance.uri + '].');
        };
        WidgetManagerService.prototype._onDestroyWidgetSetting = function (settingWidget) {
            this.removeWidgetSettingStyle(settingWidget);
        };
        WidgetManagerService.prototype._removeWidget = function (widget) {
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
        };
        WidgetManagerService.prototype.removeWidgetStyle = function (widget) {
        };
        WidgetManagerService.prototype.removeWidgetSettingStyle = function (widget) {
        };
        WidgetManagerService.prototype._onClickWidget = function (widget, evt) {
            this._activeWidget(widget);
        };
        WidgetManagerService.prototype._activeWidget = function (widget) {
        };
        WidgetManagerService.prototype.getOffPanelWidgets = function () {
            return _.filter(this.loaded, function (widget) {
                return !widget.instance.inPanel;
            });
        };
        return WidgetManagerService;
    }());
    WidgetManagerService.ɵfac = function WidgetManagerService_Factory(t) { return new (t || WidgetManagerService)(i0.ɵɵinject(AppGlobalConfig), i0.ɵɵinject(EventEmitterService), i0.ɵɵinject(UtilsService), i0.ɵɵinject(HttpReqService), i0.ɵɵinject(CommonService), i0.ɵɵinject(ComponentLoaderService)); };
    WidgetManagerService.ɵprov = i0.ɵɵdefineInjectable({ token: WidgetManagerService, factory: WidgetManagerService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WidgetManagerService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: AppGlobalConfig }, { type: EventEmitterService }, { type: UtilsService }, { type: HttpReqService }, { type: CommonService }, { type: ComponentLoaderService }]; }, null);
    })();

    var ConfigLoaderService = /** @class */ (function () {
        function ConfigLoaderService(widgetManager, utils, httpService, globalParams, commonService, componentLoader) {
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
        ConfigLoaderService.prototype._removeHash = function (urlParams) {
            for (var p in urlParams) {
                if (urlParams[p]) {
                    urlParams[p] = urlParams[p].replace('#', '');
                }
            }
        };
        ConfigLoaderService.prototype.loadConfig = function (config) {
            var _this = this;
            console.time('Load Config');
            var def = this.commonService.createPromiseDefer();
            var _processResult = function (appConfig) {
                _this.rawAppConfig = _.cloneDeep(appConfig);
                var globalConfigTemp = _.cloneDeep(_this.globalParams.mapConfig);
                appConfig = _.merge(globalConfigTemp, appConfig);
                appConfig = _this._upgradeAppConfig(appConfig);
                _this._processAfterTryLoad(appConfig);
                if (appConfig.title) {
                    document.title = appConfig.title;
                }
                _this.loadWidgetsManifest(appConfig).then(function (appConfig) {
                    return _this._upgradeAllWidgetsConfig(appConfig);
                }).then(function (appConfig) {
                    _this._configLoaded = true;
                    _this.appConfig = appConfig;
                    def.resolve(_this.getAppConfig());
                });
            };
            if (typeof config === "string") {
                this._tryLoadConfig(config).then(_processResult).catch(function (error) {
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
        };
        ConfigLoaderService.prototype.getAppConfig = function () {
            var _this = this;
            var c = _.clone(this.appConfig);
            c.getConfigElementById = function (id) {
                return _this.utils.getConfigElementById(_this, id);
            };
            c.getConfigElementsByName = function (name) {
                return _this.utils.getConfigElementsByName(_this, name);
            };
            c.visitElement = function (cb) {
                _this.utils.visitElement(_this, cb);
            };
            this._addAuthorizedCrossOriginDomains(this.portalSelf, c);
            return c;
        };
        ConfigLoaderService.prototype._addAuthorizedCrossOriginDomains = function (portalSelf, appConfig) {
        };
        ConfigLoaderService.prototype._tryLoadConfig = function (configJsonFile) {
            if (configJsonFile) {
                this.configFile = configJsonFile;
            }
            else {
                this.configFile = this.globalParams.appInfo.configFile;
            }
            return this.httpService.getJsonFile(this.configFile);
        };
        ConfigLoaderService.prototype._processAfterTryLoad = function (appConfig) {
            this.addNeedValues(appConfig);
            this.processProxy(appConfig);
            return appConfig;
        };
        ConfigLoaderService.prototype.getUriInfo = function (uri) {
        };
        ConfigLoaderService.prototype.processWidgetSetting = function (setting) {
            this.utils.processWidgetSetting(setting);
        };
        ConfigLoaderService.prototype._processWidgetJsons = function (appConfig) {
            var _this = this;
            this.utils.visitElement(appConfig, function (e, info) {
                if (info.isWidget && e.uri) {
                    _this.processWidgetSetting(e);
                }
            });
        };
        ConfigLoaderService.prototype._processNoUriWidgets = function (appConfig) {
            var i = 0;
            this.utils.visitElement(appConfig, function (e, info) {
                if (info.isWidget) {
                    i++;
                    e.placeholderIndex = i;
                }
            });
        };
        ConfigLoaderService.prototype._addElementId = function (appConfig) {
            var maxId = 0, i;
            this.utils.visitElement(appConfig, function (e) {
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
            this.utils.visitElement(appConfig, function (e) {
                if (!e.id) {
                    maxId++;
                    e.id = e.uri ? (e.uri.replace(/\//g, '_') + '_' + maxId) : ('' + '_' + maxId);
                }
            });
        };
        ConfigLoaderService.prototype.addNeedValues = function (appConfig) {
            this._processNoUriWidgets(appConfig);
            this._addElementId(appConfig);
            this._processWidgetJsons(appConfig);
        };
        ConfigLoaderService.prototype.processProxy = function (appConfig) {
            if (appConfig.httpProxy && appConfig.httpProxy.useProxy && appConfig.httpProxy.url) { }
            if (appConfig.httpProxy && appConfig.httpProxy.useProxy && appConfig.httpProxy.rules) {
            }
        };
        ConfigLoaderService.prototype._upgradeAppConfig = function (appConfig) {
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
        };
        ConfigLoaderService.prototype._upgradeAllWidgetsConfig = function (appConfig) {
            return Promise.resolve(appConfig);
        };
        ConfigLoaderService.prototype.loadWidgetsManifest = function (config) {
            var _this = this;
            var defs = [], def = this.commonService.createPromiseDefer();
            if (this.globalParams.jimuConfig.isSettings === true) {
            }
            else {
                this.utils.visitElement(config, function (e) {
                    if (!e.widgets && e.uri) {
                        var _path = _this.componentLoader.getComponentPath(e.uri);
                        if (_path) {
                            e.folderUrl = e.amdFolder = _this.globalParams.widgetRootPath + "/" + _path + "/";
                            if (e.icon) {
                                e.icon = _this.globalParams.widgetRootPath + "/" + _path + "/" + e.icon;
                            }
                            defs.push(_this.widgetManager.loadWidgetManifest(e));
                        }
                        else {
                            console.log("widget [" + e.uri + "] not config componentPath");
                            defs.push(Promise.resolve(e));
                        }
                    }
                });
            }
            Promise.all(defs).then(function () {
                def.resolve(config);
            });
            return def.promise();
        };
        ConfigLoaderService.prototype._addNeedValuesForManifest = function (manifest) {
            this.utils.addManifestProperies(manifest);
            this.utils.processManifestLabel(manifest, this.globalParams.dojoConfig.locale);
        };
        ConfigLoaderService.prototype._loadMergedWidgetManifests = function () {
            var file = this.globalParams.appInfo.appPath + 'widgets/widgets-manifest.json';
            return this.httpService.getJsonFile(file);
        };
        return ConfigLoaderService;
    }());
    ConfigLoaderService.ɵfac = function ConfigLoaderService_Factory(t) { return new (t || ConfigLoaderService)(i0.ɵɵinject(WidgetManagerService), i0.ɵɵinject(UtilsService), i0.ɵɵinject(HttpReqService), i0.ɵɵinject(AppGlobalConfig), i0.ɵɵinject(CommonService), i0.ɵɵinject(ComponentLoaderService)); };
    ConfigLoaderService.ɵprov = i0.ɵɵdefineInjectable({ token: ConfigLoaderService, factory: ConfigLoaderService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConfigLoaderService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: WidgetManagerService }, { type: UtilsService }, { type: HttpReqService }, { type: AppGlobalConfig }, { type: CommonService }, { type: ComponentLoaderService }]; }, null);
    })();

    var ConfigManagerService = /** @class */ (function () {
        function ConfigManagerService(utils, globalParams, eventService, widgetManager, configLoader, commonService) {
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
        ConfigManagerService.prototype.listenBuilderEvents = function () {
            this.eventService.rss.on(this.eventService._designConfigChanged, this._onDesignConfigChanged);
        };
        ConfigManagerService.prototype.loadConfig = function (config) {
            var _this = this;
            this.widgetManager.configLoader = this.configLoader;
            return this.configLoader.loadConfig(config).then(function (appConfig) {
                _this.portalSelf = _this.configLoader.portalSelf;
                _this.appConfig = _this._addDefaultValues(appConfig);
                _this.globalParams.appInfo.isRunInMobile = _this._isRunInMobile();
                if (_this.appConfig.logo && _this.globalParams.appInfo.folderUrlPrefix) {
                    _this.appConfig.logo = _this.globalParams.appInfo.folderUrlPrefix + "/" + _this.appConfig.logo;
                }
                _this.eventService.rss.emit(_this.eventService._appConfigLoaded, _this.appConfig);
            }, function (err) {
                console.error(err);
                if (err && err.message && typeof err.message === 'string') {
                }
            });
        };
        ConfigManagerService.prototype._isRunInMobile = function () {
            return false;
        };
        ConfigManagerService.prototype._addDefaultValues = function (config) {
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
        };
        ConfigManagerService.prototype._addDefaultPortalUrl = function (config) {
            config.portalUrl = 'https://www.supermap.com/cn';
        };
        ConfigManagerService.prototype._addDefaultGeometryService = function (appConfig) {
        };
        ConfigManagerService.prototype._addDefaultStyle = function (config) {
            if (config.theme) {
                if (!config.theme.styles || config.theme.styles.length === 0) {
                    config.theme.styles = ['default'];
                }
            }
        };
        ConfigManagerService.prototype._addDefaultMap = function (config) {
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
        };
        ConfigManagerService.prototype._addDefaultVisible = function (config) {
            if (config.visible === undefined) {
                config.visible = true;
            }
        };
        ConfigManagerService.prototype._addDefaultPanelAndPosition = function (config) {
        };
        ConfigManagerService.prototype.processMenuWidgetConfig = function (menus) {
            var _this = this;
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
            _.forEach(menus, function (widget, index, list) {
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
                _this.utils.processWidgetUriPara(widget);
                visitHeaderMenu(widget);
                if (widget.isWidget && widget.uri) {
                    _self.configLoader.processWidgetSetting(widget);
                    defs.push(_self.widgetManager.loadWidgetManifest(widget));
                }
                i++;
            });
            Promise.all(defs).then(function () {
                def.resolve(menus);
            });
            return def.promise();
        };
        ConfigManagerService.prototype._onWidgetAdded = function (obj, any) {
            var _this = this;
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
                this.widgetManager.loadWidgetManifest(widget).then(function (config) {
                    _this.appConfig.widgetOnScreen.widgets.push(config);
                    _this.eventService.rss.emit(_this.eventService._appConfigChanged, { type: "widgetAdded", appConfig: _this.appConfig, data: config });
                }).catch(function (err) {
                    console.log("loadWidgetManifest err", err);
                });
            }
        };
        ConfigManagerService.prototype._getCleanConfig = function (config) {
            var _this = this;
            var newConfig = _.clone(config);
            var properties = this.utils.widgetProperties;
            delete newConfig.mode;
            this.utils.visitElement(newConfig, function (e, info) {
                if (e.widgets) {
                    delete e.isOnScreen;
                    delete e.gid;
                    delete e.openType;
                    if (info.isOnScreen) {
                        if (e.panel && _this.utils.isEqual(e.panel, newConfig.widgetOnScreen.panel)) {
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
        };
        ConfigManagerService.prototype.getAppConfig = function () {
            var _this = this;
            var c;
            if (this.globalParams.appInfo.isRunInMobile) {
            }
            else {
                c = _.clone(this.appConfig);
            }
            c.getConfigElementById = function (id) {
                return _this.utils.getConfigElementById(_this, id);
            };
            c.getConfigElementByLabel = function (label) {
                return _this.utils.getConfigElementByLabel(_this, label);
            };
            c.getConfigElementsByName = function (name) {
                return _this.utils.getConfigElementsByName(_this, name);
            };
            c.getConfigElementsByUri = function (uri) {
                return _this.utils.getConfigElementsByUri(_this, uri);
            };
            c.getCleanConfig = function () {
                if (_this._originConfig) {
                    return _this._getCleanConfig(_this._originConfig);
                }
                else {
                    return _this._getCleanConfig(_this.appConfig);
                }
            };
            c.visitElement = function (cb) {
                this.utils.visitElement(this, cb);
            };
            return c;
        };
        ConfigManagerService.prototype._getAppConfigFromTheme = function (theme) {
            var _this = this;
            var def = this.commonService.createPromiseDefer();
            var config, styles = [];
            var currentConfig = this.getAppConfig().getCleanConfig();
            currentConfig.mode = this.urlParams.mode;
            _.forEach(currentConfig.widgetPool.groups, function (group) {
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
            this.configLoader.loadWidgetsManifest(config).then(function () {
                _this._addDefaultValues(config);
                def.resolve(config);
            });
            return def.promise();
        };
        ConfigManagerService.prototype._onDesignConfigChanged = function (params) {
            var _this = this;
            var _preProcessConfig4Design = {
                appAttributeChanged: function (_params) {
                    _params.data.appConfig.logo = _this.globalParams.appInfo.folderUrlPrefix + "/" + _params.data.appConfig.logo;
                    _params.data.changeData.logo = _params.data.appConfig.logo;
                },
                mapChanged: function (_params) {
                    var newJson = _this.utils.reCreateObject(_params.data.appConfig.map);
                    if (newJson.itemId && newJson.itemId !== _this.appConfig.map.itemId) {
                        if (_this.appConfig.map.mapOptions) {
                            _this.utils.deleteMapOptions(_this.appConfig.map.mapOptions);
                        }
                    }
                    _.extend(_this.appConfig.map, newJson);
                    _params.data.appConfig = _this.getAppConfig();
                    _this.eventService.rss.emit(_this.eventService._appConfigChanged, _params);
                },
                themeChanged: function (_params) {
                    _this._getAppConfigFromTheme(_params.data).then(function (config) {
                        _this.appConfig = config;
                        _params.data.appConfig = _this.getAppConfig();
                        _this.eventService.rss.emit(_this.eventService._appConfigChanged, _params);
                    });
                },
                layoutChanged: function (_params) {
                    _this._getAppConfigFromTheme(_params.data).then(function (config) {
                        _this.appConfig = config;
                        _params.data.appConfig = _this.getAppConfig();
                        _this.eventService.rss.emit(_this.eventService._appConfigChanged, _params);
                    });
                },
                styleChanged: function (_params) {
                    _this.appConfig.theme.styles = _this._genStyles(_this.appConfig.theme.styles, _params.data.appConfig.theme.styles[0]);
                    _params.data.appConfig = _this.getAppConfig();
                    _this.eventService.rss.emit(_this.eventService._appConfigChanged, _params);
                },
                widgetChanged: function (_params) {
                    _params.data.appConfig = _this.getAppConfig();
                    _this.eventService.rss.emit(_this.eventService._appConfigChanged, _params);
                },
                widgetPoolChanged: function (_params) {
                    _params.data.appConfig = _this.getAppConfig();
                },
                actionTriggered: function (_params) {
                    var id = "", actionInfo = _params.data.actionInfo, widget = actionInfo.widget, cwidget = undefined;
                    if (widget.id) {
                        id = widget.id;
                    }
                    else if (widget.uri || widget.oldUri) {
                        var uri = widget.uri ? widget.uri : widget.oldUri;
                        if (_this.globalParams.appInfo.folderUrlPrefix) {
                            uri = _this.globalParams.appInfo.folderUrlPrefix + "/" + uri;
                        }
                        var arr = _this.utils.getConfigElementsByUri(_this.appConfig, uri);
                        var _widget = _.find(arr, function (w, index) {
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
        };
        ConfigManagerService.prototype._genStyles = function (allStyle, currentStyle) {
            var styles = [];
            styles.push(currentStyle);
            _.forEach(allStyle, function (_style) {
                if (styles.indexOf(_style) < 0) {
                    styles.push(_style);
                }
            });
            return styles;
        };
        return ConfigManagerService;
    }());
    ConfigManagerService.ɵfac = function ConfigManagerService_Factory(t) { return new (t || ConfigManagerService)(i0.ɵɵinject(UtilsService), i0.ɵɵinject(AppGlobalConfig), i0.ɵɵinject(EventEmitterService), i0.ɵɵinject(WidgetManagerService), i0.ɵɵinject(ConfigLoaderService), i0.ɵɵinject(CommonService)); };
    ConfigManagerService.ɵprov = i0.ɵɵdefineInjectable({ token: ConfigManagerService, factory: ConfigManagerService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConfigManagerService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: UtilsService }, { type: AppGlobalConfig }, { type: EventEmitterService }, { type: WidgetManagerService }, { type: ConfigLoaderService }, { type: CommonService }]; }, null);
    })();

    var PanelManagerService = /** @class */ (function () {
        function PanelManagerService(globalParams, commonService, widgetManager, appRef, componentFactoryResolver, componentLoader, eventService) {
            var _this = this;
            this.globalParams = globalParams;
            this.commonService = commonService;
            this.widgetManager = widgetManager;
            this.appRef = appRef;
            this.componentFactoryResolver = componentFactoryResolver;
            this.componentLoader = componentLoader;
            this.eventService = eventService;
            this.panels = [];
            this.activePanel = null;
            this.map = null;
            this.view = null;
            this.panelAddToMap = true;
            this.eventService.rss.on(this.eventService._createPanelContainer, function (ele) {
                _this.createPanelContainer(ele);
            });
            this.eventService.rss.on(this.eventService._mapPositionChanged, function (pos) {
                _this.onMapResize();
            });
        }
        PanelManagerService.prototype.create = function (component, params) {
            var inputs = {};
            if (params) {
                inputs = params;
            }
            var inputProviders = Object.keys(inputs).map(function (inputName) {
                return { provide: inputName, useValue: inputs[inputName] };
            });
            var factory = this.componentFactoryResolver.resolveComponentFactory(component);
            var compRef = factory.create(i0.ReflectiveInjector.resolveAndCreate(inputProviders));
            return compRef;
        };
        PanelManagerService.prototype.createPanelContainer = function (eleMapContainer) {
            var container = document.querySelector(".sspanel_container");
            if (container == null) {
                container = window.document.createElement("div");
                container.className = "sspanel_container";
                if (this.commonService.isMobileNotTablet()) {
                    var ionApp = document.querySelector("ion-app");
                    if (ionApp) {
                        ionApp.appendChild(container);
                    }
                    else {
                        window.document.body.appendChild(container);
                    }
                }
                else {
                    if (this.panelAddToMap) {
                        if (eleMapContainer) {
                            eleMapContainer.appendChild(container);
                        }
                        else {
                            window.document.body.appendChild(container);
                        }
                    }
                    else {
                        window.document.body.appendChild(container);
                    }
                }
            }
            this.panelContainer = container;
        };
        PanelManagerService.prototype.show = function (panel) {
            if (!panel.instance.started) {
                if (panel.instance.isDockable()) {
                    this.componentLoader.showInHome(panel);
                }
                else {
                    this.panelContainer.appendChild(this.commonService.getComponentRootNode(panel));
                    this.appRef.attachView(panel.hostView);
                }
            }
        };
        PanelManagerService.prototype.setMap = function (map) {
            if (this.globalParams.mapConfig.is3D === true) {
                this.view = map;
            }
            else {
                this.map = map;
            }
        };
        PanelManagerService.prototype._findPanelUri = function (widgetConfig) {
            var _uri_default = "epsgis-on-screen-widget-panel";
            if (this.commonService.isMobileNotTablet()) {
                if (widgetConfig.panel) {
                    switch (widgetConfig.panel.dock) {
                        case "left": return "epsgis-mobile-drawer-panel";
                        case "right": return "epsgis-mobile-drawer-right-panel";
                        case "bottom": return "epsgis-mobile-action-panel";
                    }
                    switch (widgetConfig.panel.uri) {
                        case "epsgis-dockable-panel-at-left":
                            return "epsgis-mobile-drawer-panel";
                        case "epsgis-dockable-panel-at-bottom":
                            return "epsgis-mobile-action-panel";
                        case "epsgis-dockable-panel-at-right":
                            return "epsgis-mobile-drawer-right-panel";
                    }
                }
                if (widgetConfig.mobile && widgetConfig.mobile.mode) {
                    switch (widgetConfig.mobile.mode.toLowerCase()) {
                        case "drawer":
                            return "epsgis-mobile-drawer-panel";
                        case "drawerright":
                            return "epsgis-mobile-drawer-right-panel";
                        case "modal":
                            return "epsgis-mobile-modal-panel";
                        case "popup":
                            return "epsgis-mobile-popup-panel";
                        case "popover":
                            return _uri_default;
                    }
                }
                return "epsgis-mobile-action-panel";
            }
            else {
                if (widgetConfig.panel) {
                    switch (widgetConfig.panel.dock) {
                        case "left": return "epsgis-dockable-panel-at-left";
                        case "right": return "epsgis-dockable-panel-at-right";
                        case "bottom": return "epsgis-dockable-panel-at-bottom";
                    }
                    if (widgetConfig.panel.uri) {
                        return widgetConfig.panel.uri;
                    }
                }
                return _uri_default;
            }
        };
        PanelManagerService.prototype.showPanel = function (config, widget, options, openOptions) {
            var def = this.commonService.createPromiseDefer();
            var pid = config.id + '_panel', panel = this.getPanelById(pid);
            if (panel) {
                if (panel.instance.state === exports.WidgetState.closed) {
                    if (openOptions) {
                        panel.instance.reqPara = openOptions.param;
                        if (panel.instance.widget) {
                            panel.instance.widget.instance.reqPara = openOptions.param;
                        }
                    }
                    this.openPanel(panel);
                }
                def.resolve(panel);
            }
            else {
                try {
                    var _comp = this.componentLoader.findComponent(this._findPanelUri(config));
                    if (!_comp) {
                        var _msg = "not find panel [" + config.panel.uri + "]";
                        console.error(_msg);
                        return def.reject(new Error(_msg));
                    }
                    panel = this.componentLoader.createComponent(_comp);
                    if (!options) {
                        options = {};
                        options.id = pid;
                        options.title = config.label;
                    }
                    options.buttonMaximize = !(config.maximizable === false);
                    options.buttonCollapse = !(config.collapsible === false);
                    options.modal = config.modal === true;
                    if (openOptions && openOptions.panel) {
                        options = _.merge(options, openOptions.panel);
                    }
                    panel.instance.label = panel.instance.title = panel.instance.tooltip = config.label;
                    panel.instance.widgetConfig = config;
                    if (this.globalParams.mapConfig.is3D) {
                        panel.instance.view = this.view;
                    }
                    else {
                        panel.instance.map = this.map;
                    }
                    panel.instance.id = pid;
                    panel.instance.gid = config.gid;
                    if (openOptions) {
                        panel.instance.reqPara = openOptions.param;
                    }
                    panel.instance.setOptions(options);
                    panel.instance.setPosition(config.position);
                    if (widget) {
                        panel.instance.setWidget(widget);
                        panel.instance.widget.instance.reqPara = openOptions.param;
                    }
                    console.log('panel [' + pid + '] created.');
                    this.openPanel(panel);
                    this.panels.push(panel);
                    def.resolve(panel);
                }
                catch (error) {
                    console.log('create panel error: ' + error + ', panelId: ' + pid);
                    def.reject(error);
                    return;
                }
            }
            return def.promise();
        };
        PanelManagerService.prototype.showPanelNotWidget = function (panelOptions) {
            var position = {
                width: panelOptions.width + 'px',
                height: panelOptions.height + 'px',
                relativeTo: panelOptions.relativeTo,
            };
            var config = {
                id: panelOptions.id ? panelOptions.id : "ss_panel",
                label: panelOptions.title ? panelOptions.title : "SS Panel",
                position: position,
                dockSide: panelOptions.dockSide,
                panel: {
                    uri: 'epsgis-iframe-panel'
                },
                resizable: panelOptions.resizable,
                draggable: panelOptions.draggable,
                gid: "panelOfNotWidget"
            };
            this.closeAllPanelsInGroup(config.gid);
            var def = this.commonService.createPromiseDefer();
            var pid = config.id, panel = this.getPanelById(pid);
            if (panel) {
                if (panel.instance.state === exports.WidgetState.closed) {
                    this.openPanel(panel);
                }
                def.resolve(panel);
            }
            else {
                this.showPanel(config, null, panelOptions);
            }
            return def.promise();
        };
        PanelManagerService.prototype.closeOtherPanelsInTheSameGroup = function (panel) {
            if (typeof panel === 'string') {
                panel = this.getPanelById(panel);
                if (!panel) {
                    return;
                }
            }
            for (var i = 0; i < this.panels.length; i++) {
                if (this.panels[i].instance.isDockable())
                    continue;
                if (this.panels[i].instance.gid === panel.instance.gid
                    && this.panels[i].instance.id !== panel.instance.id) {
                    this.closePanel(this.panels[i]);
                }
            }
        };
        PanelManagerService.prototype.closeAllPanelsInGroup = function (groupId) {
            for (var i = 0; i < this.panels.length; i++) {
                if (this.panels[i].instance.isDockable())
                    continue;
                if (this.panels[i].instance.gid === groupId) {
                    this.closePanel(this.panels[i]);
                }
            }
        };
        PanelManagerService.prototype.openPanel = function (panel) {
            var _this = this;
            var def = this.commonService.createPromiseDefer();
            if (!panel.instance.started) {
                try {
                    this.show(panel);
                }
                catch (err) {
                    console.error('fail to startup panel ' + panel.instance.id + '. ' + err.stack);
                }
            }
            if (panel.instance.state === exports.WidgetState.opened) {
                def.resolve(panel);
                return def.promise();
            }
            if (panel.instance.started) {
                panel.instance.setState(exports.WidgetState.opened);
                this.playOpenPanelAnimation(panel).then(function () {
                    _this._activePanel(panel);
                    def.resolve(panel);
                });
            }
            return def.promise();
        };
        PanelManagerService.prototype.closePanel = function (panel) {
            var _this = this;
            var def = this.commonService.createPromiseDefer();
            var _panel;
            if (typeof panel === 'string') {
                _panel = this.getPanelById(panel);
            }
            else {
                _panel = panel;
            }
            if (!_panel) {
                def.reject(new Error("panel is null"));
                return def.promise();
            }
            if (_panel.instance.state === exports.WidgetState.closed) {
                def.resolve(_panel);
                return def.promise();
            }
            this.playClosePanelAnimation(_panel).then(function () {
                if (_this.activePanel && _this.activePanel.instance.id === _panel.instance.id) {
                    _this.activePanel.instance.onDeActive();
                    _this.activePanel = null;
                }
                _panel.instance.setState(exports.WidgetState.closed);
                def.resolve(_panel);
            });
            return def.promise();
        };
        PanelManagerService.prototype.minimizePanel = function (panel) {
            if (typeof panel === 'string') {
                panel = this.getPanelById(panel);
                if (!panel) {
                    return;
                }
            }
            if (panel.instance.state === exports.WidgetState.closed) {
                this.openPanel(panel);
            }
            panel.instance.setWindowState(exports.WidgetWindowState.minimized);
            try {
                panel.instance.onMinimize();
            }
            catch (err) {
                console.log(console.error('fail to minimize panel ' + panel.instance.id + '. ' + err.stack));
            }
        };
        PanelManagerService.prototype.maximizePanel = function (panel) {
            if (typeof panel === 'string') {
                panel = this.getPanelById(panel);
                if (!panel) {
                    return;
                }
            }
            if (panel.instance.state === exports.WidgetState.closed) {
                this.openPanel(panel);
            }
            panel.instance.setWindowState(exports.WidgetWindowState.maximized);
            try {
                panel.instance.onMaximize();
            }
            catch (err) {
                console.log(console.error('fail to maximize panel ' + panel.instance.id + '. ' + err.stack));
            }
        };
        PanelManagerService.prototype.normalizePanel = function (panel) {
            if (typeof panel === 'string') {
                panel = this.getPanelById(panel);
                if (!panel) {
                    return;
                }
            }
            if (panel.instance.state === exports.WidgetState.closed) {
                this.openPanel(panel);
            }
            panel.instance.setWindowState(exports.WidgetWindowState.normal);
            try {
                panel.instance.onNormalize();
            }
            catch (err) {
                console.log(console.error('fail to noralize panel ' + panel.instance.id + '. ' + err.stack));
            }
        };
        PanelManagerService.prototype.changeWindowStateTo = function (panel, state) {
            if (typeof panel === 'string') {
                panel = this.getPanelById(panel);
                if (!panel) {
                    return;
                }
            }
            if (state === exports.WidgetWindowState.normal) {
                this.normalizePanel(panel);
            }
            else if (state === exports.WidgetWindowState.minimized) {
                this.minimizePanel(panel);
            }
            else if (state === exports.WidgetWindowState.maximized) {
                this.maximizePanel(panel);
            }
            else {
                console.log('error state: ' + state);
            }
        };
        PanelManagerService.prototype.getPanelById = function (pid) {
            for (var i = 0; i < this.panels.length; i++) {
                if (this.panels[i].instance.id === pid) {
                    return this.panels[i];
                }
            }
        };
        PanelManagerService.prototype.onWindowResize = function () {
            for (var i = 0; i < this.panels.length; i++) {
                if (this.panels[i].instance.state !== exports.WidgetState.closed &&
                    this.panels[i].instance.position.relativeTo !== 'map') {
                    this.panels[i].instance.resize();
                }
            }
        };
        PanelManagerService.prototype.onMapResize = function () {
            for (var i = 0; i < this.panels.length; i++) {
                if (this.panels[i].instance.isDockable()) {
                    this.panels[i].instance.resize();
                }
                else {
                }
            }
        };
        PanelManagerService.prototype.destroyPanel = function (panel) {
            if (typeof panel === 'string') {
                panel = this.getPanelById(panel);
                if (!panel) {
                    return;
                }
            }
            if (panel.instance.state !== exports.WidgetState.closed) {
                this.closePanel(panel);
            }
            this._removePanel(panel);
            try {
                panel.destroy();
                console.log('destroy panel [' + panel.instance.id + '].');
            }
            catch (err) {
                console.log(console.error('fail to destroy panel ' + panel.instance.id + '. ' + err.stack));
            }
        };
        PanelManagerService.prototype.destroyAllPanels = function () {
            var _this = this;
            var allPanelIds = _.map(this.panels, function (panel) {
                return panel.instance.id;
            });
            _.forEach(allPanelIds, function (panelId) {
                _this.destroyPanel(panelId);
            });
            this.panels = [];
        };
        PanelManagerService.prototype.playOpenPanelAnimation = function (panel) {
            return Promise.resolve(true);
        };
        PanelManagerService.prototype.playClosePanelAnimation = function (panel) {
            return Promise.resolve(true);
        };
        PanelManagerService.prototype.getPositionOnMobile = function (panel) {
            if (typeof panel === 'string') {
                panel = this.getPanelById(panel);
                if (!panel) {
                    return {};
                }
            }
        };
        PanelManagerService.prototype._onPanelClick = function (panel) {
            this._activePanel(panel);
        };
        PanelManagerService.prototype._activePanel = function (panel) {
            var _this = this;
            if (typeof panel === "string") {
                panel = this.getPanelById(panel);
            }
            if (!panel)
                return;
            if (panel.instance.isDockable())
                return;
            if (this.activePanel) {
                if (this.activePanel.instance.id === panel["instance"].id) {
                    if (this.activePanel.instance.moveTopOnActive) {
                        this.activePanel.instance.setZIndex("active");
                    }
                    return;
                }
                if (this.activePanel.instance.state === exports.WidgetState.active) {
                    this.activePanel.instance.setState(exports.WidgetState.opened);
                    if (this.activePanel.instance.position.zIndex !== 'undefined') {
                        this.activePanel.instance.setZIndex("deactive");
                    }
                    else {
                        this.activePanel.instance.setZIndex("deactive");
                    }
                    this.activePanel.instance.onDeActive();
                }
            }
            var aw = this.widgetManager.activeWidget;
            if (aw && aw.instance.state === exports.WidgetState.active && aw.instance.getPanel() !== panel) {
                aw.instance.setState(exports.WidgetState.opened);
                if (aw.instance.inPanel === false) {
                    if (aw.instance.position.zIndex !== 'undefined') {
                        aw.instance.setZIndex("deactive");
                    }
                    else {
                        aw.instance.setZIndex("deactive");
                    }
                }
                aw.instance.onDeActive();
                this.widgetManager.activeWidget = null;
            }
            this.activePanel = panel;
            if (this.activePanel.instance.state === exports.WidgetState.active) {
                return;
            }
            this.activePanel.instance.setState(exports.WidgetState.active);
            if (this.activePanel.instance.moveTopOnActive) {
                this.activePanel.instance.setZIndex("active");
            }
            _.forEach(this.panels, function (p, index, arr) {
                if (p.instance.isDockable() == false && p.instance.id != _this.activePanel.instance.id) {
                    p.instance.setZIndex("deactive");
                }
            });
            this.activePanel.instance.onActive();
        };
        PanelManagerService.prototype._removePanel = function (panel) {
            var index = this.panels.indexOf(panel);
            if (index > -1) {
                this.panels.splice(index, 1);
            }
            if (this.activePanel && this.activePanel.instance.id === panel.instance.id) {
                this.activePanel = null;
            }
        };
        PanelManagerService.prototype._onMoveStart = function (mover) {
        };
        PanelManagerService.prototype._onWidgetActived = function (widget) {
            if (this.activePanel &&
                this.activePanel.instance.state === exports.WidgetState.active &&
                widget.getPanel() !== this.activePanel) {
                this.activePanel.instance.setState(exports.WidgetState.opened);
                if (this.activePanel.instance.position.zIndex !== 'undefined') {
                }
                else {
                }
                this.activePanel.instance.onDeActive();
                this.activePanel = null;
            }
        };
        PanelManagerService.prototype._loadPanelClass = function (panelUri) {
        };
        PanelManagerService.prototype._loadThemeI18N = function (panelUri) {
        };
        PanelManagerService.prototype.getAllPanels = function () {
            return this.panels;
        };
        return PanelManagerService;
    }());
    PanelManagerService.ɵfac = function PanelManagerService_Factory(t) { return new (t || PanelManagerService)(i0.ɵɵinject(AppGlobalConfig), i0.ɵɵinject(CommonService), i0.ɵɵinject(WidgetManagerService), i0.ɵɵinject(i0.ApplicationRef), i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(ComponentLoaderService), i0.ɵɵinject(EventEmitterService)); };
    PanelManagerService.ɵprov = i0.ɵɵdefineInjectable({ token: PanelManagerService, factory: PanelManagerService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PanelManagerService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: AppGlobalConfig }, { type: CommonService }, { type: WidgetManagerService }, { type: i0.ApplicationRef }, { type: i0.ComponentFactoryResolver }, { type: ComponentLoaderService }, { type: EventEmitterService }]; }, null);
    })();

    var MapManagerService = /** @class */ (function () {
        function MapManagerService(utils, httpService, globalParams, eventService, commonService, componentLoader) {
            this.utils = utils;
            this.httpService = httpService;
            this.globalParams = globalParams;
            this.eventService = eventService;
            this.commonService = commonService;
            this.componentLoader = componentLoader;
            this.originMapPosition = null;
            this.mapPosition = null;
            this.appConfig = null;
            this.id = "";
            this.mapDivId = '';
            this.map = null;
            this.view = null;
            this.previousInfoWindow = null;
            this.mobileInfoWindow = null;
            this.isMobileInfoWindow = false;
            this.tiandituToken = "95c02448602e3ee0683e07de5e772e96";
            this.layerInfosObj = null;
            this.options = null;
            this.urlParams = null;
            this.comRefMap = null;
            this.mapDivId = this.id = this.globalParams.jimuConfig.mapId;
            this.urlParams = this.globalParams.urlParams;
        }
        MapManagerService.prototype.setAppConfig = function (config) {
            this.appConfig = config;
        };
        MapManagerService.prototype.restorePosition = function () {
            this.changeMapPosition(this.originMapPosition);
        };
        MapManagerService.prototype.changeMapPosition = function (position, triggerEvent) {
            if (triggerEvent === void 0) { triggerEvent = true; }
            this.mapPosition = _.merge(this.mapPosition, position);
            this.commonService.setWidgetPosition(this.comRefMap, this.mapPosition);
            if (this.comRefMap.instance.resize) {
                this.comRefMap.instance.resize();
            }
            if (triggerEvent) {
                this.eventService.rss.emit(this.eventService._mapPositionChanged, this.mapPosition);
            }
        };
        MapManagerService.prototype.setMapPosition = function (position) {
            this.mapPosition = position;
            this.originMapPosition = _.cloneDeep(position);
        };
        MapManagerService.prototype.getMapPosition = function () {
            return this.mapPosition;
        };
        MapManagerService.prototype.centerAtMap = function (lgtd, lttd, s) {
        };
        MapManagerService.prototype.showMap = function () {
            return __awaiter(this, void 0, void 0, function () {
                var mapComp, _path, _config, _manifest, _rpath, configPath, err_1, _position;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            mapComp = this.componentLoader.findComponent(this.appConfig.map.uri);
                            if (!mapComp) {
                                console.log("没有找到map组件，请检查config.json文件map[uri]配置");
                                return [2 /*return*/];
                            }
                            _path = (typeof mapComp.prototype.getCompInfo === "function") ? mapComp.prototype.getCompInfo().path : "";
                            if (!_path) return [3 /*break*/, 6];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 5, , 6]);
                            _rpath = this.globalParams.widgetRootPath + "/" + _path;
                            return [4 /*yield*/, this.httpService.getJsonFile(_rpath + "/manifest.json")];
                        case 2:
                            _manifest = _a.sent();
                            _config = this.appConfig.map.config;
                            if (!!_config) return [3 /*break*/, 4];
                            configPath = this.appConfig.map.configPath || 'config.json';
                            return [4 /*yield*/, this.httpService.getJsonFile(_rpath + "/" + configPath)];
                        case 3:
                            _config = _a.sent();
                            _a.label = 4;
                        case 4: return [3 /*break*/, 6];
                        case 5:
                            err_1 = _a.sent();
                            console.log(err_1);
                            return [3 /*break*/, 6];
                        case 6:
                            this.comRefMap = this.componentLoader.createComponentToHome(mapComp);
                            this.comRefMap.instance.setProps({
                                appConfig: this.appConfig,
                                config: _config,
                                manifest: _manifest
                            });
                            _position = _.cloneDeep(this.appConfig.map.position);
                            this.commonService.setWidgetPosition(this.comRefMap, _position);
                            aspect.after(this.comRefMap.instance, "afterNgOnInit", function () {
                                _this.initMap();
                            });
                            this.componentLoader.showInHome(this.comRefMap);
                            return [2 /*return*/];
                    }
                });
            });
        };
        MapManagerService.prototype.destoryMap = function () {
            if (this.comRefMap) {
                this.comRefMap.destroy();
                console.log('destroy map.');
            }
        };
        MapManagerService.prototype.initMap = function () {
            var _this = this;
            this.comRefMap.instance.initMap().then(function (map) {
                console.log('map loaded.');
                if (_this.globalParams.mapConfig.is3D === true) {
                    _this.view = map;
                    _this.comRefMap.instance.view = map;
                }
                else {
                    _this.comRefMap.instance.map = map;
                    _this.map = map;
                }
                _this.eventService.rss.emit(_this.eventService._createPanelContainer, _this.commonService.getComponentRootNode(_this.comRefMap));
                _this.eventService.rss.emit(_this.eventService._mapLoaded, map);
            }, function (msg) {
                console.log(msg);
            });
        };
        return MapManagerService;
    }());
    MapManagerService.ɵfac = function MapManagerService_Factory(t) { return new (t || MapManagerService)(i0.ɵɵinject(UtilsService), i0.ɵɵinject(HttpReqService), i0.ɵɵinject(AppGlobalConfig), i0.ɵɵinject(EventEmitterService), i0.ɵɵinject(CommonService), i0.ɵɵinject(ComponentLoaderService)); };
    MapManagerService.ɵprov = i0.ɵɵdefineInjectable({ token: MapManagerService, factory: MapManagerService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MapManagerService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: UtilsService }, { type: HttpReqService }, { type: AppGlobalConfig }, { type: EventEmitterService }, { type: CommonService }, { type: ComponentLoaderService }]; }, null);
    })();

    var LayoutManagerService = /** @class */ (function () {
        function LayoutManagerService(panelManager, widgetManager, utils, httpService, globalParams, eventService, commonService, mapManager, componentLoader) {
            var _this = this;
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
            this.eventService.rss.on(this.eventService._appConfigLoaded, function (config) { return _this.onAppConfigLoaded(config); });
            this.eventService.rss.on(this.eventService._appConfigChanged, function (config) { return _this.onAppConfigChanged(config); });
            this.eventService.rss.on(this.eventService._mapLoaded, function (map) { return _this.onMapLoaded(map); });
            this.eventService.rss.on(this.eventService._mapChanged, function (map) { return _this.onMapChanged(map); });
            this.eventService.rss.on(this.eventService._viewChanged, function (view) { return _this.onViewChanged(view); });
        }
        LayoutManagerService.prototype.startup = function () {
            console.log("layout startup");
            this.widgetManager.panelManager = this.panelManager;
        };
        LayoutManagerService.prototype.resize = function () {
            _.forEach(this.widgetManager.getAllWidgets(), function (w) {
                if (w.instance.inPanel === false) {
                    w.instance.resize();
                }
            });
        };
        LayoutManagerService.prototype.onAppConfigLoaded = function (config) {
            this.appConfig = config;
            if (this.appConfig.theme) {
                this._loadTheme(this.appConfig.theme);
            }
            this._loadMap();
        };
        LayoutManagerService.prototype.onAppConfigChanged = function (params) {
        };
        LayoutManagerService.prototype._loadMap = function () {
            this.mapManager.setAppConfig(this.appConfig);
            this.mapManager.setMapPosition(this.appConfig.map.position);
            this.mapManager.showMap();
        };
        LayoutManagerService.prototype.onMapLoaded = function (map) {
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
        };
        LayoutManagerService.prototype.onMapChanged = function (map) {
            var _this = this;
            this.map = map;
            this.panelManager.map = map;
            this.widgetManager.map = map;
            this.mapManager.map = map;
            this.preloadWidgetIcons.forEach(function (icon) {
                icon.instance.map = _this.map;
                icon.instance.onMapChange(_this.map);
            });
            this.panelManager.getAllPanels().forEach(function (panel) {
                panel.instance.map = _this.map;
                panel.instance.onMapChange(_this.map);
            });
            this.widgetManager.getAllWidgets().forEach(function (widget) {
                widget.instance.map = _this.map;
                widget.instance.onMapChange(_this.map);
            });
        };
        LayoutManagerService.prototype.onViewChanged = function (view) {
            var _this = this;
            this.view = view;
            this.panelManager.view = view;
            this.widgetManager.view = view;
            this.mapManager.view = view;
            this.preloadWidgetIcons.forEach(function (icon) {
                icon.instance.view = _this.view;
                icon.instance.onViewChange(_this.view);
            });
            this.panelManager.getAllPanels().forEach(function (panel) {
                panel.instance.view = _this.view;
                panel.instance.onViewChange(_this.view);
            });
            this.widgetManager.getAllWidgets().forEach(function (widget) {
                widget.instance.view = _this.view;
                widget.instance.onViewChange(_this.view);
            });
        };
        LayoutManagerService.prototype._loadPreloadWidgets = function (appConfig) {
            var _this = this;
            console.time('Load widgetOnScreen');
            var defs = [], def = this.commonService.createPromiseDefer();
            _.each(appConfig.widgetOnScreen.widgets, function (widgetConfig, index, list) {
                if (widgetConfig.headerMenu === true) {
                    return true;
                }
                if (widgetConfig.visible === false || (_this.commonService.isMobile() && typeof widgetConfig.mobile !== "undefined" && widgetConfig.mobile.visible === false)) {
                    _this.invisibleWidgetIds.push(widgetConfig.id);
                }
                else {
                    defs.push(_this._loadPreloadWidget(widgetConfig, appConfig));
                }
            });
            Promise.all(defs).then(function () {
                console.timeEnd('Load widgetOnScreen');
                _this.eventService.rss.emit(_this.eventService._checkChangeDetector, defs);
                _this._hideLoading();
            }).catch(function () {
                _this._hideLoading();
            });
            return def.promise();
        };
        LayoutManagerService.prototype._hideLoading = function () {
        };
        LayoutManagerService.prototype._doPostLoad = function () {
        };
        LayoutManagerService.prototype._loadPreloadWidget = function (widgetConfig, appConfig) {
            return __awaiter(this, void 0, void 0, function () {
                var def, _tempUrl, placeholder, iconDijit;
                var _this = this;
                return __generator(this, function (_a) {
                    def = this.commonService.createPromiseDefer();
                    if (!widgetConfig || !widgetConfig.uri) {
                        console.error("widget [" + widgetConfig.label + "] no uri");
                        return [2 /*return*/, def.resolve(null)];
                    }
                    if (((this.globalParams.jimuConfig.isDesignMode === true && this.urlParams.config && this.globalParams.appInfo.folderUrlPrefix) || appConfig.mode === 'config') && !widgetConfig.uri) {
                        if (widgetConfig.oldUri) {
                            _tempUrl = widgetConfig.oldUri;
                            if (_tempUrl.startsWith("/")) {
                                _tempUrl = _tempUrl.substring(1);
                            }
                            widgetConfig.amdFolder = _tempUrl.substring(0, _tempUrl.toLowerCase().lastIndexOf("/widget")) + "/";
                            widgetConfig.folderUrl = this.globalParams.appInfo.folderUrlPrefix + "/" + widgetConfig.amdFolder;
                            this.widgetManager.loadWidgetManifest(widgetConfig).then(function (widgetConfigNew) {
                                var placeholder = _this._createPreloadWidgetPlaceHolder(widgetConfigNew);
                                def.resolve(placeholder);
                            });
                        }
                        else {
                            placeholder = this._createPreloadWidgetPlaceHolder(widgetConfig);
                            def.resolve(placeholder);
                        }
                        return [2 /*return*/, def.promise()];
                    }
                    if (widgetConfig.inPanel || widgetConfig.closeable) {
                        iconDijit = this._createPreloadWidgetIcon(widgetConfig);
                        def.resolve(iconDijit);
                    }
                    else {
                        this.widgetManager.loadWidget(widgetConfig).then(function (compRef) {
                            _this.widgetManager.showWidget(compRef);
                            compRef.instance.setPosition(widgetConfig.position);
                            _this.commonService.setWidgetPosition(compRef, widgetConfig.position);
                            widgetConfig.loaded = true;
                            compRef.instance.configId = widgetConfig.id;
                            def.resolve(compRef);
                        }).catch(function (err) {
                            console.error(err);
                        });
                    }
                    return [2 /*return*/, def.promise()];
                });
            });
        };
        LayoutManagerService.prototype._createPreloadWidgetPlaceHolder = function (widgetConfig) {
        };
        LayoutManagerService.prototype._createPreloadWidgetIcon = function (widgetConfig, component) {
            var _this = this;
            var iconDijit = null;
            var inMap = false;
            if (widgetConfig.position.relativeTo === "browser") {
                iconDijit = this.componentLoader.createComponentToHome(exports.OnScreenWidgetIconComponent);
            }
            else {
                inMap = true;
                iconDijit = this.componentLoader.createComponentToMap(exports.OnScreenWidgetIconComponent);
            }
            iconDijit.instance.setProps({
                compRef: component,
                appConfig: this.appConfig,
                map: this.globalParams.mapConfig.is3D ? this.view : this.map,
                widgetConfig: widgetConfig
            });
            aspect.before(iconDijit.instance, 'destroy', function () {
                _this._onDestroyIcon(iconDijit);
            });
            this.preloadWidgetIcons.push(iconDijit);
            if (inMap) {
                this.componentLoader.showInMap(iconDijit);
            }
            else {
                this.componentLoader.showInHome(iconDijit);
            }
            var _ele = this.commonService.getComponentRootNode(iconDijit);
            if (_ele) {
                _ele.classList.add("jimu-widget-onscreen-icon");
                _ele.title = widgetConfig.label;
            }
            var _position = _.cloneDeep(widgetConfig.position);
            delete _position.height;
            delete _position.width;
            this.commonService.setWidgetPosition(iconDijit, _position);
            if (widgetConfig.openAtStart === true) {
                iconDijit.instance.switchToOpen();
            }
            return iconDijit;
        };
        LayoutManagerService.prototype._onDestroyPlaceholder = function (placeholder) {
            var index = 0, idx = -1;
            for (; index < this.widgetPlaceholders.length; index++) {
                var ci = this.widgetPlaceholders[index];
                if (placeholder.id === ci.id || placeholder.configId === ci.configId) {
                    idx = index;
                    break;
                }
            }
            if (idx >= 0) {
                this.widgetPlaceholders.splice(idx, 1);
            }
            console.log('destroy placeholder [' + placeholder.id + '].');
        };
        LayoutManagerService.prototype._onDestroyIcon = function (icon) {
            var index = 0, idx = -1;
            for (; index < this.preloadWidgetIcons.length; index++) {
                var ci = this.preloadWidgetIcons[index];
                if (icon.instance.id === ci.instance.id) {
                    idx = index;
                    break;
                }
            }
            if (idx >= 0) {
                this.preloadWidgetIcons.splice(idx, 1);
            }
            console.log('destroy icon [' + icon.instance.id + '].');
        };
        LayoutManagerService.prototype._loadPreloadGroup = function (groupJson, appConfig) {
            var def = this.commonService.createPromiseDefer();
            if (!appConfig.mode && (!groupJson.widgets || groupJson.widgets.length === 0)) {
                def.resolve(null);
                return def;
            }
            return def.promise();
        };
        LayoutManagerService.prototype._getThemeCommonStyleId = function (theme) {
            return 'theme_' + theme.name + '_style_common';
        };
        LayoutManagerService.prototype._getThemeCurrentStyleId = function (theme) {
            return 'theme_' + theme.name + '_style_' + theme.styles[0];
        };
        LayoutManagerService.prototype._loadTheme = function (theme) {
        };
        LayoutManagerService.prototype._loadThemeCommonStyle = function (theme) {
        };
        LayoutManagerService.prototype._removeThemeCommonStyle = function (theme) {
        };
        LayoutManagerService.prototype._loadThemeCurrentStyle = function (theme) {
        };
        LayoutManagerService.prototype._removeThemeCurrentStyle = function (theme) {
        };
        LayoutManagerService.prototype._destroyPreloadWidgetIcons = function () {
            for (var index = this.preloadWidgetIcons.length - 1; index >= 0; index--) {
                var icon = this.preloadWidgetIcons[index];
                icon.destroy();
            }
            this.preloadWidgetIcons = [];
        };
        LayoutManagerService.prototype._destroyOffPanelWidgets = function () {
            var _this = this;
            _.forEach(this.widgetManager.getOffPanelWidgets(), function (widget) {
                _this.widgetManager.destroyWidget(widget);
            });
        };
        LayoutManagerService.prototype._destroyWidgetPlaceholders = function () {
            for (var index = this.widgetPlaceholders.length - 1; index >= 0; index--) {
                var placeholder = this.widgetPlaceholders[index];
                placeholder.destroy();
            }
            this.widgetPlaceholders = [];
        };
        LayoutManagerService.prototype._destroyPreloadPanels = function () {
            this.panelManager.destroyAllPanels();
        };
        LayoutManagerService.prototype._destroyPreloadGroupPanels = function () {
            this.preloadGroupPanels = [];
        };
        LayoutManagerService.prototype._onThemeChange = function (appConfig) {
        };
        LayoutManagerService.prototype._onLayoutChange2 = function (appConfig) {
        };
        LayoutManagerService.prototype._onLayoutChange = function (appConfig) {
            this._onLayoutChange2(appConfig);
        };
        LayoutManagerService.prototype._onStyleChange = function (appConfig) {
        };
        LayoutManagerService.prototype._changeMapPosition = function (appConfig) {
        };
        LayoutManagerService.prototype._onMapChange = function (appConfig) {
        };
        LayoutManagerService.prototype._onWidgetPoolChange = function (appConfig, changeData) {
        };
        LayoutManagerService.prototype._onActionTriggerd = function (appConfig, action, eleid) {
            var panelIcon = _.find(this.preloadWidgetIcons, function (w, index) {
                return w.instance.configId === eleid;
            });
            if (panelIcon) {
                panelIcon.instance.onAction(action, "TODO");
            }
            var widget = _.find(this.widgetManager.getOnScreenOffPanelWidgets(), function (w) {
                return (w.instance.id === eleid);
            });
            if (widget) {
                widget.instance.onAction(action, "TODO");
            }
            var placeholder = _.find(this.widgetPlaceholders, function (w, index) {
                return w.configId === eleid;
            });
            if (placeholder) {
                placeholder.onAction(action, "TODO");
            }
        };
        LayoutManagerService.prototype._onWidgetChange = function (appConfig, changeData, action) {
            var changedWidgets = changeData.widgetList;
            if (!changedWidgets || changedWidgets.length <= 0) {
                return;
            }
            var _self = this;
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
                var _this = this;
                var uri = this.globalParams.appInfo.folderUrlPrefix + "/" + (wc.oldUri ? wc.oldUri : wc.uri);
                var icon = _.find(_self.preloadWidgetIcons, function (w) { return wc.id === w.instance.configId || uri === w.instance.uri; });
                var state = undefined, widgetConfig = undefined;
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
                    var widget = _.find(_self.widgetManager.getOnScreenOffPanelWidgets(), function (w) {
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
                        var eleConfig = this.utils.getConfigElementById(appConfig, wc.id);
                        if (eleConfig) {
                            var placeholder = _.find(_self.widgetPlaceholders, function (w) {
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
                                _self.widgetManager.loadWidgetManifest(widgetConfig).then(function (config) {
                                    loadWidget(widgetConfig, appConfig, false, '');
                                }).catch(function (err) {
                                    console.log("loadWidgetManifest err", err);
                                });
                            }
                        }
                        else {
                            _.forEach(_self.invisibleWidgetIds, function (widgetId) {
                                if (widgetId === wc.id && wc.visible !== false) {
                                    widgetConfig = _this.utils.getConfigElementById(appConfig, wc.id);
                                    _self._loadPreloadWidget(widgetConfig, appConfig);
                                    var i = _self.invisibleWidgetIds.indexOf(widgetConfig.id);
                                    _self.invisibleWidgetIds.splice(i, 1);
                                }
                            });
                        }
                    }
                }
            }
            _.forEach(changedWidgets, process);
        };
        return LayoutManagerService;
    }());
    LayoutManagerService.ɵfac = function LayoutManagerService_Factory(t) { return new (t || LayoutManagerService)(i0.ɵɵinject(PanelManagerService), i0.ɵɵinject(WidgetManagerService), i0.ɵɵinject(UtilsService), i0.ɵɵinject(HttpReqService), i0.ɵɵinject(AppGlobalConfig), i0.ɵɵinject(EventEmitterService), i0.ɵɵinject(CommonService), i0.ɵɵinject(MapManagerService), i0.ɵɵinject(ComponentLoaderService)); };
    LayoutManagerService.ɵprov = i0.ɵɵdefineInjectable({ token: LayoutManagerService, factory: LayoutManagerService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayoutManagerService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: PanelManagerService }, { type: WidgetManagerService }, { type: UtilsService }, { type: HttpReqService }, { type: AppGlobalConfig }, { type: EventEmitterService }, { type: CommonService }, { type: MapManagerService }, { type: ComponentLoaderService }]; }, null);
    })();

    var WidgetPlaceHolderService = /** @class */ (function () {
        function WidgetPlaceHolderService() {
        }
        return WidgetPlaceHolderService;
    }());
    WidgetPlaceHolderService.ɵfac = function WidgetPlaceHolderService_Factory(t) { return new (t || WidgetPlaceHolderService)(); };
    WidgetPlaceHolderService.ɵprov = i0.ɵɵdefineInjectable({ token: WidgetPlaceHolderService, factory: WidgetPlaceHolderService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WidgetPlaceHolderService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    function isPromise(obj) {
        return !!obj && typeof obj.then === 'function' && typeof obj.catch === 'function';
    }
    var SsModalRef = /** @class */ (function () {
        function SsModalRef(config, containerRef) {
            var _this = this;
            this.config = config;
            this.containerRef = containerRef;
            this.componentInstance = null;
            this.state = 0;
            this.afterClose = new rxjs.Subject();
            this.afterOpen = new rxjs.Subject();
            this.containerInstance = containerRef.instance;
            this.containerInstance.cancelTriggered.subscribe(function () { return _this.trigger("cancel"); });
            this.containerInstance.okTriggered.subscribe(function () { return _this.trigger("ok"); });
            this.containerInstance.onCloseTreggered.subscribe(function () {
                _this.afterClose.next(_this.result);
                _this.afterClose.complete();
                if (config.afterClose instanceof i0.EventEmitter) {
                    config.afterClose.emit(_this.result);
                }
                _this.containerRef = null;
                _this.containerInstance = null;
                _this.componentRef = null;
                _this.componentInstance = null;
            });
        }
        SsModalRef.prototype.getContentComponent = function () {
            return this.componentInstance;
        };
        SsModalRef.prototype.getElement = function () {
            return this.containerInstance.getNativeElement();
        };
        SsModalRef.prototype.destroy = function (result) {
            this.close(result);
        };
        SsModalRef.prototype.triggerOk = function () {
            this.trigger("ok");
        };
        SsModalRef.prototype.triggerCancel = function () {
            this.trigger("cancel");
        };
        SsModalRef.prototype.open = function () {
        };
        SsModalRef.prototype.close = function (result) {
            this.result = result;
            this.componentRef.destroy();
            this.containerRef.destroy();
            this.state = 2;
            this.afterClose.next(this.result);
        };
        SsModalRef.prototype.updateConfig = function (config) {
            Object.assign(this.config, config);
            this.containerInstance.cdr.markForCheck();
        };
        SsModalRef.prototype.getState = function () {
            return this.state;
        };
        SsModalRef.prototype.getConfig = function () {
            return this.config;
        };
        SsModalRef.prototype.getBackdropElement = function () {
            return null;
        };
        SsModalRef.prototype.trigger = function (action) {
            var _this = this;
            var trigger = { ok: this.config.onOk, cancel: this.config.onCancel }[action];
            var loadingKey = { ok: 'okLoading', cancel: 'cancelLoading' }[action];
            var loading = this.config[loadingKey];
            if (loading) {
                return;
            }
            if (trigger instanceof i0.EventEmitter) {
                trigger.emit(this.getContentComponent());
            }
            else if (typeof trigger === 'function') {
                var result = trigger(this.getContentComponent());
                var caseClose = function (doClose) { return doClose !== false && _this.close(doClose); };
                if (isPromise(result)) {
                    this.config[loadingKey] = true;
                    var handleThen = function (doClose) {
                        _this.config[loadingKey] = false;
                        _this.closeWhitResult(doClose);
                    };
                    result.then(handleThen).catch(handleThen);
                }
                else {
                    caseClose(result);
                }
            }
        };
        SsModalRef.prototype.closeWhitResult = function (result) {
            if (result !== false) {
                this.close(result);
            }
        };
        return SsModalRef;
    }());

    var noopFun = function () { return void 0; };
    var SsModalOptions = /** @class */ (function () {
        function SsModalOptions() {
            this.closable = true;
            this.okLoading = false;
            this.okDisabled = false;
            this.cancelDisabled = false;
            this.cancelLoading = false;
            this.noAnimation = false;
            this.autofocus = 'auto';
            this.mask = true;
            this.maskClosable = true;
            this.keyboard = true;
            this.zIndex = 1000;
            this.top = 50;
            this.width = 520;
            this.height = 400;
            this.closeIcon = 'close';
            this.okType = 'primary';
            this.modalType = 'default';
            this.onCancel = noopFun;
            this.onOk = noopFun;
            this.closeOnNavigation = true;
            this.iconType = 'question-circle';
            this.fullScreen = false;
        }
        return SsModalOptions;
    }());

    function applyConfigDefaults(config, defaultOptions) {
        return Object.assign(Object.assign({}, defaultOptions), config);
    }
    function setContentInstanceParams(instance, params) {
        Object.assign(instance, params);
    }
    function getConfigFromComponent(component) {
        var mask = component.mask, maskClosable = component.maskClosable, closable = component.closable, okLoading = component.okLoading, okDisabled = component.okDisabled, cancelDisabled = component.cancelDisabled, cancelLoading = component.cancelLoading, keyboard = component.keyboard, noAnimation = component.noAnimation, content = component.content, componentParams = component.componentParams, footer = component.footer, getContainer = component.getContainer, zIndex = component.zIndex, width = component.width, wrapClassName = component.wrapClassName, className = component.className, styles = component.styles, title = component.title, closeIcon = component.closeIcon, maskStyle = component.maskStyle, bodyStyle = component.bodyStyle, okText = component.okText, cancelText = component.cancelText, okType = component.okType, iconType = component.iconType, modalType = component.modalType, onOk = component.onOk, onCancel = component.onCancel, afterOpen = component.afterOpen, afterClose = component.afterClose;
        return {
            mask: mask,
            maskClosable: maskClosable,
            closable: closable,
            okLoading: okLoading,
            okDisabled: okDisabled,
            cancelDisabled: cancelDisabled,
            cancelLoading: cancelLoading,
            keyboard: keyboard,
            noAnimation: noAnimation,
            content: content,
            componentParams: componentParams,
            footer: footer,
            getContainer: getContainer,
            zIndex: zIndex,
            width: width,
            wrapClassName: wrapClassName,
            className: className,
            styles: styles,
            title: title,
            closeIcon: closeIcon,
            maskStyle: maskStyle,
            bodyStyle: bodyStyle,
            okText: okText,
            cancelText: cancelText,
            okType: okType,
            iconType: iconType,
            modalType: modalType,
            onOk: onOk,
            onCancel: onCancel,
            afterOpen: afterOpen,
            afterClose: afterClose
        };
    }

    var _c0$9 = ["ssmodal_overlay"];
    var _c1$6 = ["ssmodal_titlebar"];
    var _c2$2 = ["ssmodal"];
    function ModalContainerComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "div", 21);
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵproperty("modalRef", ctx_r3.modalRef);
        }
    }
    function ModalContainerComponent_ng_container_10_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r14_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "div", 24);
            i0.ɵɵlistener("click", function ModalContainerComponent_ng_container_10_ng_container_1_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r14_1); var ctx_r13 = i0.ɵɵnextContext(2); return ctx_r13._buttonCollapse_Click($event); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(2, "svg", 25);
            i0.ɵɵelementStart(3, "g", 26);
            i0.ɵɵelement(4, "polyline", 27);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r10 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵpropertyInterpolate("title", ctx_r10.options.buttonUnCollapseText);
        }
    }
    function ModalContainerComponent_ng_container_10_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r16_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 24);
            i0.ɵɵlistener("click", function ModalContainerComponent_ng_container_10_ng_template_2_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r16_1); var ctx_r15 = i0.ɵɵnextContext(2); return ctx_r15._buttonCollapse_Click($event); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(1, "svg", 25);
            i0.ɵɵelementStart(2, "g", 26);
            i0.ɵɵelement(3, "polyline", 28);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r12 = i0.ɵɵnextContext(2);
            i0.ɵɵpropertyInterpolate("title", ctx_r12.options.buttonCollapseText);
        }
    }
    function ModalContainerComponent_ng_container_10_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, ModalContainerComponent_ng_container_10_ng_container_1_Template, 5, 1, "ng-container", 22);
            i0.ɵɵtemplate(2, ModalContainerComponent_ng_container_10_ng_template_2_Template, 4, 1, "ng-template", null, 23, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var _r11 = i0.ɵɵreference(3);
            var ctx_r4 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r4.windowState == "collapsed")("ngIfElse", _r11);
        }
    }
    function ModalContainerComponent_ng_container_11_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r21_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "div", 30);
            i0.ɵɵlistener("click", function ModalContainerComponent_ng_container_11_ng_container_1_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r21_1); var ctx_r20 = i0.ɵɵnextContext(2); return ctx_r20._buttonMax_Click($event); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(2, "svg", 25);
            i0.ɵɵelementStart(3, "g", 26);
            i0.ɵɵelement(4, "rect", 31);
            i0.ɵɵelement(5, "line", 32);
            i0.ɵɵelement(6, "line", 33);
            i0.ɵɵelement(7, "line", 34);
            i0.ɵɵelement(8, "line", 35);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r17 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵpropertyInterpolate("title", ctx_r17.options.buttonUnmaximizeText);
        }
    }
    function ModalContainerComponent_ng_container_11_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r23_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 30);
            i0.ɵɵlistener("click", function ModalContainerComponent_ng_container_11_ng_template_2_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r23_1); var ctx_r22 = i0.ɵɵnextContext(2); return ctx_r22._buttonMax_Click($event); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(1, "svg", 25);
            i0.ɵɵelementStart(2, "g", 26);
            i0.ɵɵelement(3, "rect", 36);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r19 = i0.ɵɵnextContext(2);
            i0.ɵɵpropertyInterpolate("title", ctx_r19.options.buttonMaximizeText);
        }
    }
    function ModalContainerComponent_ng_container_11_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, ModalContainerComponent_ng_container_11_ng_container_1_Template, 9, 1, "ng-container", 22);
            i0.ɵɵtemplate(2, ModalContainerComponent_ng_container_11_ng_template_2_Template, 4, 1, "ng-template", null, 29, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var _r18 = i0.ɵɵreference(3);
            var ctx_r5 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r5.windowState == "maximized")("ngIfElse", _r18);
        }
    }
    function ModalContainerComponent_ng_container_12_Template(rf, ctx) {
        if (rf & 1) {
            var _r25_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "div", 37);
            i0.ɵɵlistener("click", function ModalContainerComponent_ng_container_12_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r25_1); var ctx_r24 = i0.ɵɵnextContext(); return ctx_r24.closePanel($event); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(2, "svg", 25);
            i0.ɵɵelementStart(3, "g");
            i0.ɵɵelement(4, "line", 38);
            i0.ɵɵelement(5, "line", 39);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r6 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵpropertyInterpolate("title", ctx_r6.options.buttonCloseText);
        }
    }
    function ModalContainerComponent_ng_template_14_Template(rf, ctx) { }
    function ModalContainerComponent_div_16_div_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r28_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 44);
            i0.ɵɵlistener("cancelTriggered", function ModalContainerComponent_div_16_div_2_Template_div_cancelTriggered_0_listener() { i0.ɵɵrestoreView(_r28_1); var ctx_r27 = i0.ɵɵnextContext(2); return ctx_r27.onCloseClick(); })("okTriggered", function ModalContainerComponent_div_16_div_2_Template_div_okTriggered_0_listener() { i0.ɵɵrestoreView(_r28_1); var ctx_r29 = i0.ɵɵnextContext(2); return ctx_r29.onOkClick(); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r26 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("modalRef", ctx_r26.modalRef);
        }
    }
    function ModalContainerComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
            var _r31_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 40);
            i0.ɵɵelementStart(1, "div", 41);
            i0.ɵɵtemplate(2, ModalContainerComponent_div_16_div_2_Template, 1, 1, "div", 42);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 43);
            i0.ɵɵlistener("mousedown", function ModalContainerComponent_div_16_Template_div_mousedown_3_listener($event) { i0.ɵɵrestoreView(_r31_1); var ctx_r30 = i0.ɵɵnextContext(); return ctx_r30._resizer_MouseDown($event, { dimension: "height", directionY: "bottom" }); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r9 = i0.ɵɵnextContext();
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx_r9.config.footer !== null);
        }
    }
    function throwNzModalContentAlreadyAttachedError() {
        throw Error('Attempting to attach modal content after content is already attached');
    }
    exports.ModalContainerComponent = /** @class */ (function (_super) {
        __extends(ModalContainerComponent, _super);
        function ModalContainerComponent(elementRef, cdr, render, zone, config, commonService, panelManager, widgetManager, globalParams, mapManager) {
            var _this = _super.call(this, render, cdr) || this;
            _this.elementRef = elementRef;
            _this.cdr = cdr;
            _this.render = render;
            _this.zone = zone;
            _this.config = config;
            _this.commonService = commonService;
            _this.panelManager = panelManager;
            _this.widgetManager = widgetManager;
            _this.globalParams = globalParams;
            _this.mapManager = mapManager;
            _this.animationStateChanged = new i0.EventEmitter();
            _this.containerClick = new i0.EventEmitter();
            _this.cancelTriggered = new i0.EventEmitter();
            _this.okTriggered = new i0.EventEmitter();
            _this.isStringContent = false;
            _this.elementFocusedBeforeModalWasOpened = null;
            _this.latestMousedownTarget = null;
            _this.oldMaskStyle = null;
            _this.onCloseTreggered = new i0.EventEmitter();
            _this.showStatusBar = false;
            _this.defaultZIndex = 110;
            _this.document = document;
            _this.isStringContent = typeof config.content === 'string';
            _this.setContainer();
            if (_this.config.footer != null) {
                _this.showStatusBar = true;
            }
            else if (_this.config.okDisabled !== true) {
                _this.showStatusBar = true;
            }
            else if (_this.config.cancelDisabled !== true) {
                _this.showStatusBar = true;
            }
            return _this;
        }
        ModalContainerComponent.prototype.ngOnInit = function () {
            if (this.commonService.isMobile()) {
                this.widgetConfig = {
                    position: new WidgetPosition(0, 0, 0, 0, "100%", "100%", "", "unset")
                };
            }
            else {
                var left = 0;
                if (this.config.width === "100%") {
                    left = 0;
                }
                else if (this.config.width === "auto") {
                }
                else if (typeof this.config.width === "number") {
                    left = (window.innerWidth - this.config.width) / 2;
                }
                else if (typeof this.config.width === "string") {
                    var x = parseInt(this.config.width, 10);
                    left = (window.innerWidth - x) / 2;
                }
                this.widgetConfig = {
                    position: {
                        top: this.config.top,
                        left: left,
                        width: this.config.width,
                        height: this.config.height,
                        zIndex: this.config.zIndex || this.defaultZIndex
                    }
                };
            }
            var _index = this.defaultZIndex - 1;
            if (this.config.zIndex >= 1) {
                _index = this.config.zIndex - 1;
            }
            this.render.setStyle(this.sspanelOverlay.nativeElement, 'z-index', _index);
            this.setOptions({
                buttonMaximize: true,
                buttonClose: true,
                buttonCollapse: false,
                modal: this.config.mask,
                title: this.config.title.toString(),
                minHeight: 100,
                minWidth: 200
            });
            this.label = this.tooltip = this.config.title.toString();
            if (this.globalParams.mapConfig.is3D) {
                this.view = this.mapManager.view;
            }
            else {
                this.map = this.mapManager.map;
            }
            this.id = "ss-modal";
            this.gid = "ss-modal";
            this.setPosition(this.widgetConfig.position);
            this.state = exports.WidgetState.opened;
            this.windowState = exports.WidgetWindowState.normal;
            _super.prototype.ngOnInit.call(this);
        };
        ModalContainerComponent.prototype.ngAfterViewInit = function () {
            this.modalRef.afterOpen.next();
            if (this.config.fullScreen) {
                this._maximize();
            }
        };
        ModalContainerComponent.prototype.onClose = function () {
            this.onCloseTreggered.emit();
        };
        ModalContainerComponent.prototype.onMousedown = function (e) {
            this.latestMousedownTarget = e.target || null;
        };
        ModalContainerComponent.prototype.onMouseup = function (e) {
            if (e.target === this.latestMousedownTarget && e.target === this.elementRef.nativeElement) {
                this.containerClick.emit();
            }
            this.latestMousedownTarget = null;
        };
        ModalContainerComponent.prototype.onCloseClick = function () {
            this.cancelTriggered.emit();
        };
        ModalContainerComponent.prototype.onOkClick = function () {
            this.okTriggered.emit();
        };
        ModalContainerComponent.prototype.attachComponentPortal = function (compRef) {
            this.savePreviouslyFocusedElement();
            this.setModalTransformOrigin();
            this.widgetContainer.insert(compRef.hostView);
            return compRef;
        };
        ModalContainerComponent.prototype.attachTemplatePortal = function () {
            return null;
        };
        ModalContainerComponent.prototype.getNativeElement = function () {
            return this.elementRef.nativeElement;
        };
        ModalContainerComponent.prototype.animationDisabled = function () {
            return false;
        };
        ModalContainerComponent.prototype.setModalTransformOrigin = function () {
            var modalElement = this.modalElementRef.nativeElement;
            if (this.elementFocusedBeforeModalWasOpened) {
                var previouslyDOMRect = this.elementFocusedBeforeModalWasOpened.getBoundingClientRect();
                var lastPosition = this.commonService.getElementBounds(this.elementFocusedBeforeModalWasOpened);
                var x = lastPosition.left + previouslyDOMRect.width / 2;
                var y = lastPosition.top + previouslyDOMRect.height / 2;
                var transformOrigin = x - modalElement.offsetLeft + "px " + (y - modalElement.offsetTop) + "px 0px";
                this.render.setStyle(modalElement, 'transform-origin', transformOrigin);
            }
        };
        ModalContainerComponent.prototype.savePreviouslyFocusedElement = function () {
            var _this = this;
            if (this.document) {
                this.elementFocusedBeforeModalWasOpened = this.document.activeElement;
                if (this.elementRef.nativeElement.focus) {
                    Promise.resolve().then(function () { return _this.elementRef.nativeElement.focus(); });
                }
            }
        };
        ModalContainerComponent.prototype.trapFocus = function () {
        };
        ModalContainerComponent.prototype.restoreFocus = function () {
        };
        ModalContainerComponent.prototype.setEnterAnimationClass = function () {
        };
        ModalContainerComponent.prototype.setExitAnimationClass = function () {
        };
        ModalContainerComponent.prototype.cleanAnimationClass = function () {
            if (this.animationDisabled()) {
                return;
            }
        };
        ModalContainerComponent.prototype.bindBackdropStyle = function () {
        };
        ModalContainerComponent.prototype.setContainer = function () {
            var container = this.getContainer();
            if (container) {
                this.render.appendChild(container, this.elementRef.nativeElement);
            }
        };
        ModalContainerComponent.prototype.resetContainer = function () {
            var container = this.getContainer();
            if (container) {
            }
        };
        ModalContainerComponent.prototype.getContainer = function () {
            return this.config.getContainer;
        };
        ModalContainerComponent.prototype.onAnimationDone = function (event) {
        };
        ModalContainerComponent.prototype.onAnimationStart = function (event) {
        };
        ModalContainerComponent.prototype.startExitAnimation = function () {
            this.state = exports.WidgetState.closed;
            this.cdr.markForCheck();
        };
        ModalContainerComponent.prototype.closePanel = function (event) {
            this.cancelTriggered.emit();
        };
        return ModalContainerComponent;
    }(BasePanelComponent));
    exports.ModalContainerComponent.ɵfac = function ModalContainerComponent_Factory(t) { return new (t || exports.ModalContainerComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(SsModalOptions), i0.ɵɵdirectiveInject(CommonService), i0.ɵɵdirectiveInject(PanelManagerService), i0.ɵɵdirectiveInject(WidgetManagerService), i0.ɵɵdirectiveInject(AppGlobalConfig), i0.ɵɵdirectiveInject(MapManagerService)); };
    exports.ModalContainerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: exports.ModalContainerComponent, selectors: [["epsgis-modal-container"]], viewQuery: function ModalContainerComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0$9, 3);
                i0.ɵɵviewQuery(_c1$6, 3);
                i0.ɵɵviewQuery(_c2$2, 3);
                i0.ɵɵviewQuery(_c2$2, 3);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sspanelOverlay = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sspanel_titlebar = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sspanel = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.modalElementRef = _t.first);
            }
        }, features: [i0.ɵɵInheritDefinitionFeature], decls: 25, vars: 8, consts: [[1, "ssmodal_overlay"], ["ssmodal_overlay", ""], [1, "ssmodal", 3, "id", "ngStyle"], ["ssmodal", ""], [1, "ssmodal_titlebar", "ssmodal_titlebar_draggable", 3, "mousedown"], ["ssmodal_titlebar", ""], [1, "ssmodal_titlebar_text"], [1, "ssmodal_titlebar_text_span"], ["class", "ssmodal_titlebar_custom_buttons", "ss-modal-titlebar-button", "", 3, "modalRef", 4, "ngIf"], [4, "ngIf"], [1, "ssmodal_content", 3, "click"], ["widget_content", ""], ["class", "ssmodal_statusbar", 4, "ngIf"], [1, "ssmodal_resizer", "ssmodal_resizer_top", 3, "mousedown"], [1, "ssmodal_resizer", "ssmodal_resizer_left", 3, "mousedown"], [1, "ssmodal_resizer", "ssmodal_resizer_right", 3, "mousedown"], [1, "ssmodal_resizer", "ssmodal_resizer_topleft", 3, "mousedown"], [1, "ssmodal_resizer", "ssmodal_resizer_topright", 3, "mousedown"], [1, "ssmodal_resizer", "ssmodal_resizer_bottomleft", 3, "mousedown"], [1, "ssmodal_resizer", "ssmodal_resizer_bottomright", 3, "mousedown"], [1, "ssmodal_minplaceholder"], ["ss-modal-titlebar-button", "", 1, "ssmodal_titlebar_custom_buttons", 3, "modalRef"], [4, "ngIf", "ngIfElse"], ["showCollapsedButton", ""], [1, "ssmodal_titlebar_button", "ssmodal_titlebar_button_collapse", 3, "title", "click"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 10 10", "height", "100%", "width", "100%"], ["fill", "none"], ["points", "1,3 9,3 5,8 1,3 9,3"], ["points", "1,7 9,7 5,2 1,7 9,7"], ["showMaximizeButton", ""], [1, "ssmodal_titlebar_button", "ssmodal_titlebar_button_maximize", 3, "title", "click"], ["x", "1", "y", "3", "height", "6", "width", "6"], ["y1", "3", "x1", "3", "y2", "1", "x2", "3"], ["y1", "1", "x1", "2.5", "y2", "1", "x2", "9.5"], ["y1", "1", "x1", "9", "y2", "7", "x2", "9"], ["y1", "7", "x1", "9.5", "y2", "7", "x2", "7"], ["x", "1", "y", "1", "height", "8", "width", "8"], [1, "ssmodal_titlebar_button", "ssmodal_titlebar_button_close", 3, "title", "click"], ["y2", "0", "x2", "10", "y1", "10", "x1", "0"], ["y2", "10", "x2", "10", "y1", "0", "x1", "0"], [1, "ssmodal_statusbar"], [1, "ssmodal_statusbar_content"], ["ss-modal-footer", "", 3, "modalRef", "cancelTriggered", "okTriggered", 4, "ngIf"], [1, "ssmodal_resizer", "ssmodal_resizer_bottom", 3, "mousedown"], ["ss-modal-footer", "", 3, "modalRef", "cancelTriggered", "okTriggered"]], template: function ModalContainerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0, 1);
                i0.ɵɵelementStart(2, "div", 2, 3);
                i0.ɵɵelementStart(4, "div", 4, 5);
                i0.ɵɵlistener("mousedown", function ModalContainerComponent_Template_div_mousedown_4_listener($event) { return ctx._titlebar_MouseDown($event); });
                i0.ɵɵelementStart(6, "div", 6);
                i0.ɵɵelementStart(7, "span", 7);
                i0.ɵɵtext(8);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(9, ModalContainerComponent_div_9_Template, 1, 1, "div", 8);
                i0.ɵɵtemplate(10, ModalContainerComponent_ng_container_10_Template, 4, 2, "ng-container", 9);
                i0.ɵɵtemplate(11, ModalContainerComponent_ng_container_11_Template, 4, 2, "ng-container", 9);
                i0.ɵɵtemplate(12, ModalContainerComponent_ng_container_12_Template, 6, 1, "ng-container", 9);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(13, "div", 10);
                i0.ɵɵlistener("click", function ModalContainerComponent_Template_div_click_13_listener($event) { return ctx._contentClick($event); });
                i0.ɵɵtemplate(14, ModalContainerComponent_ng_template_14_Template, 0, 0, "ng-template", null, 11, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(16, ModalContainerComponent_div_16_Template, 4, 1, "div", 12);
                i0.ɵɵelementStart(17, "div", 13);
                i0.ɵɵlistener("mousedown", function ModalContainerComponent_Template_div_mousedown_17_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "height", directionY: "top" }); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(18, "div", 14);
                i0.ɵɵlistener("mousedown", function ModalContainerComponent_Template_div_mousedown_18_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "width", directionX: "left" }); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(19, "div", 15);
                i0.ɵɵlistener("mousedown", function ModalContainerComponent_Template_div_mousedown_19_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "width", directionX: "right" }); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(20, "div", 16);
                i0.ɵɵlistener("mousedown", function ModalContainerComponent_Template_div_mousedown_20_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "both", directionX: "left", directionY: "top" }); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(21, "div", 17);
                i0.ɵɵlistener("mousedown", function ModalContainerComponent_Template_div_mousedown_21_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "both", directionX: "right", directionY: "top" }); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(22, "div", 18);
                i0.ɵɵlistener("mousedown", function ModalContainerComponent_Template_div_mousedown_22_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "both", directionX: "left", directionY: "bottom" }); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(23, "div", 19);
                i0.ɵɵlistener("mousedown", function ModalContainerComponent_Template_div_mousedown_23_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "both", directionX: "right", directionY: "bottom" }); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelement(24, "div", 20);
            }
            if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵpropertyInterpolate("id", ctx.options.id);
                i0.ɵɵproperty("ngStyle", ctx.position);
                i0.ɵɵadvance(6);
                i0.ɵɵtextInterpolate(ctx.options.title);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.config.titleBarButtons);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.options.buttonCollapse);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.options.buttonMaximize);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.options.buttonClose);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("ngIf", ctx.showStatusBar);
            }
        }, styles: [""] });
    exports.ModalContainerComponent = __decorate([
        ComponentRegister({
            uri: 'epsgis-modal-container',
            path: "components/modal/modal-container"
        })
    ], exports.ModalContainerComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(exports.ModalContainerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'epsgis-modal-container',
                        templateUrl: './modal-container.component.html',
                        styleUrls: ['./modal-container.component.scss'],
                    }]
            }], function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }, { type: i0.NgZone }, { type: SsModalOptions }, { type: CommonService }, { type: PanelManagerService }, { type: WidgetManagerService }, { type: AppGlobalConfig }, { type: MapManagerService }]; }, { sspanelOverlay: [{
                    type: i0.ViewChild,
                    args: ["ssmodal_overlay", { static: true }]
                }], sspanel_titlebar: [{
                    type: i0.ViewChild,
                    args: ["ssmodal_titlebar", { static: true }]
                }], sspanel: [{
                    type: i0.ViewChild,
                    args: ["ssmodal", { static: true }]
                }], modalElementRef: [{
                    type: i0.ViewChild,
                    args: ['ssmodal', { static: true }]
                }] });
    })();

    var ModalManagerService = /** @class */ (function () {
        function ModalManagerService(overlay, injector, parentModal, componentFactoryResolver, appRef, commonService) {
            var _this = this;
            this.overlay = overlay;
            this.injector = injector;
            this.parentModal = parentModal;
            this.componentFactoryResolver = componentFactoryResolver;
            this.appRef = appRef;
            this.commonService = commonService;
            this.openModalsAtThisLevel = [];
            this.afterAllClosedAtThisLevel = new rxjs.Subject();
            this.factories = new Map();
            this.factoriesArray = null;
            this.afterAllClose = rxjs.defer(function () { return _this.openModals.length ? _this._afterAllClosed : _this._afterAllClosed.pipe(operators.startWith(undefined)); });
            this.modalContainerClass = "ssmodal_container";
            this.factories = this.componentFactoryResolver["_factories"];
            if (this.factories) {
                this.factoriesArray = Array.from(this.factories);
            }
        }
        Object.defineProperty(ModalManagerService.prototype, "openModals", {
            get: function () {
                return this.parentModal ? this.parentModal.openModals : this.openModalsAtThisLevel;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ModalManagerService.prototype, "_afterAllClosed", {
            get: function () {
                var parent = this.parentModal;
                return parent ? parent._afterAllClosed : this.afterAllClosedAtThisLevel;
            },
            enumerable: false,
            configurable: true
        });
        ModalManagerService.prototype.createModalContainer = function () {
            var container = document.querySelector(this.modalContainerClass);
            if (container == null) {
                container = window.document.createElement("div");
                container.className = this.modalContainerClass;
                window.document.body.appendChild(container);
            }
            this.modalContainer = container;
        };
        ModalManagerService.prototype.create = function (config) {
            return this.open(config.content, config);
        };
        ModalManagerService.prototype.closeAll = function () {
            this.closeModals(this.openModals);
        };
        ModalManagerService.prototype.attachModalContainer2 = function (overlayRef, config) {
            var userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
            var injector = new portal.PortalInjector(userInjector || this.injector, new WeakMap([
                [i1$4.OverlayRef, overlayRef],
                [SsModalOptions, config]
            ]));
            var ContainerComponent = exports.ModalContainerComponent;
            var containerPortal = new portal.ComponentPortal(ContainerComponent, config.viewContainerRef, injector);
            var containerRef = overlayRef.attach(containerPortal);
            return containerRef.instance;
        };
        ModalManagerService.prototype.open = function (componentOrTemplateRef, config) {
            var _this = this;
            var configMerged = applyConfigDefaults(config || {}, new SsModalOptions());
            var modalContainerRef = this.attachModalContainer(configMerged);
            var modalRef = this.attachModalContent(componentOrTemplateRef, configMerged, modalContainerRef);
            modalContainerRef.instance.modalRef = modalRef;
            this.openModals.push(modalRef);
            modalRef.afterClose.subscribe(function () { return _this.removeOpenModal(modalRef); });
            return modalRef;
        };
        ModalManagerService.prototype.removeOpenModal = function (modalRef) {
            var index = this.openModals.indexOf(modalRef);
            if (index > -1) {
                this.openModals.splice(index, 1);
                if (!this.openModals.length) {
                    this._afterAllClosed.next();
                }
            }
        };
        ModalManagerService.prototype.closeModals = function (dialogs) {
            var i = dialogs.length;
            while (i--) {
                dialogs[i].close();
                if (!this.openModals.length) {
                    this._afterAllClosed.next();
                }
            }
        };
        ModalManagerService.prototype.attachModalContainer = function (config) {
            var userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
            var injector = new portal.PortalInjector(userInjector || this.injector, new WeakMap([
                [SsModalOptions, config]
            ]));
            this.createModalContainer();
            var inputs = {
                config: config
            };
            var inputProviders = Object.keys(inputs).map(function (inputName) {
                return { provide: inputName, useValue: inputs[inputName] };
            });
            var ContainerComponent = exports.ModalContainerComponent;
            var factory = this.componentFactoryResolver.resolveComponentFactory(ContainerComponent);
            var injectorc = i0.Injector.create({ providers: inputProviders, parent: injector });
            var containerRef = factory.create(injectorc);
            this.modalContainer.appendChild(this.commonService.getComponentRootNode(containerRef));
            this.appRef.attachView(containerRef.hostView);
            return containerRef;
        };
        ModalManagerService.prototype.findComponent = function (name) {
            var comp = null;
            if (this.factories) {
                if (!this.factories || this.factories.size <= 0)
                    return null;
                var item = this.factoriesArray.find(function (value, index, arr) {
                    return value[1].selector.toLowerCase() === name.toLowerCase() || value[0].name.toLowerCase() === name.toLocaleLowerCase();
                });
                if (item) {
                    comp = item[0];
                }
            }
            else {
                var compInfo = findComponentInfo(name);
                if (compInfo) {
                    return compInfo.component;
                }
            }
            return comp;
        };
        ModalManagerService.prototype.attachModalContent = function (componentOrTemplateRef, config, modalContainerRef) {
            var modalRef = new SsModalRef(config, modalContainerRef);
            if (componentOrTemplateRef instanceof i0.TemplateRef) {
            }
            else if (componentOrTemplateRef && typeof componentOrTemplateRef !== 'string') {
                var inputs_1 = {};
                if (config.componentParams) {
                    inputs_1 = config.componentParams;
                }
                var inputProviders = Object.keys(inputs_1).map(function (inputName) {
                    return { provide: inputName, useValue: inputs_1[inputName] };
                });
                var component = componentOrTemplateRef;
                if (this.factories && !this.factories.get(componentOrTemplateRef)) {
                    component = this.findComponent(componentOrTemplateRef.name);
                }
                var factory = this.componentFactoryResolver.resolveComponentFactory(component);
                var injector = i0.Injector.create({ providers: inputProviders, parent: this.createInjector(modalRef, config) });
                var compRef = factory.create(injector);
                setContentInstanceParams(compRef.instance, config.componentParams);
                modalContainerRef.instance.attachComponentPortal(compRef);
                modalRef.componentInstance = compRef.instance;
                modalRef.componentRef = compRef;
            }
            return modalRef;
        };
        ModalManagerService.prototype.createInjector = function (modalRef, config) {
            var userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
            var injectionTokens = new WeakMap([[SsModalRef, modalRef]]);
            return new portal.PortalInjector(userInjector || this.injector, injectionTokens);
        };
        ModalManagerService.prototype.ngOnDestroy = function () {
            this.closeModals(this.openModalsAtThisLevel);
            this.afterAllClosedAtThisLevel.complete();
        };
        return ModalManagerService;
    }());
    ModalManagerService.ɵfac = function ModalManagerService_Factory(t) { return new (t || ModalManagerService)(i0.ɵɵinject(i1$4.Overlay), i0.ɵɵinject(i0.Injector), i0.ɵɵinject(ModalManagerService, 12), i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i0.ApplicationRef), i0.ɵɵinject(CommonService)); };
    ModalManagerService.ɵprov = i0.ɵɵdefineInjectable({ token: ModalManagerService, factory: ModalManagerService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalManagerService, [{
                type: i0.Injectable,
                args: [{ providedIn: 'root' }]
            }], function () {
            return [{ type: i1$4.Overlay }, { type: i0.Injector }, { type: ModalManagerService, decorators: [{
                            type: i0.Optional
                        }, {
                            type: i0.SkipSelf
                        }] }, { type: i0.ComponentFactoryResolver }, { type: i0.ApplicationRef }, { type: CommonService }];
        }, null);
    })();

    var SettingService = /** @class */ (function () {
        function SettingService(req) {
            this.req = req;
            this.API_SAVE_SETTING = "api/setting/content";
        }
        SettingService.prototype.getConfigContent = function (filePath) {
            return this.req.getJsonFile(filePath);
        };
        SettingService.prototype.saveConfig = function (data) {
            if (!data) {
                return Promise.resolve({
                    success: false,
                    msg: "data is null",
                    data: null
                });
            }
            if (!data.filePath) {
                return Promise.resolve({
                    success: false,
                    msg: "data.filePath is null",
                    data: null
                });
            }
            return this.req.postNoAuth(this.API_SAVE_SETTING, data, this.req.config.settingApiUrl, true);
        };
        return SettingService;
    }());
    SettingService.ɵfac = function SettingService_Factory(t) { return new (t || SettingService)(i0.ɵɵinject(HttpReqService)); };
    SettingService.ɵprov = i0.ɵɵdefineInjectable({ token: SettingService, factory: SettingService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SettingService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: HttpReqService }]; }, null);
    })();

    var ServiceInjector = /** @class */ (function () {
        function ServiceInjector(config, utils, commonService, httpService, configLoader, configManager, mapManager, panelManager, widgetManager, widgetPlaceHolder, layoutManager, jsEventManager, route, componentManager, modalManaer, settingService) {
            var _this = this;
            this.config = config;
            this.utils = utils;
            this.commonService = commonService;
            this.httpService = httpService;
            this.configLoader = configLoader;
            this.configManager = configManager;
            this.mapManager = mapManager;
            this.panelManager = panelManager;
            this.widgetManager = widgetManager;
            this.widgetPlaceHolder = widgetPlaceHolder;
            this.layoutManager = layoutManager;
            this.jsEventManager = jsEventManager;
            this.route = route;
            this.componentManager = componentManager;
            this.modalManaer = modalManaer;
            this.settingService = settingService;
            if (!config) {
                config = Object.assign({}, defaultAppGlobalConfig);
            }
            this.route.queryParams.subscribe(function (params) {
                _this.config.urlParams = Object.assign(_this.config.urlParams, params);
            });
        }
        return ServiceInjector;
    }());
    ServiceInjector.ɵfac = function ServiceInjector_Factory(t) { return new (t || ServiceInjector)(i0.ɵɵinject(AppGlobalConfig), i0.ɵɵinject(UtilsService), i0.ɵɵinject(CommonService), i0.ɵɵinject(HttpReqService), i0.ɵɵinject(ConfigLoaderService), i0.ɵɵinject(ConfigManagerService), i0.ɵɵinject(MapManagerService), i0.ɵɵinject(PanelManagerService), i0.ɵɵinject(WidgetManagerService), i0.ɵɵinject(WidgetPlaceHolderService), i0.ɵɵinject(LayoutManagerService), i0.ɵɵinject(i1$2.EventManager), i0.ɵɵinject(i1$5.ActivatedRoute), i0.ɵɵinject(ComponentLoaderService), i0.ɵɵinject(ModalManagerService), i0.ɵɵinject(SettingService)); };
    ServiceInjector.ɵprov = i0.ɵɵdefineInjectable({ token: ServiceInjector, factory: ServiceInjector.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ServiceInjector, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: AppGlobalConfig }, { type: UtilsService }, { type: CommonService }, { type: HttpReqService }, { type: ConfigLoaderService }, { type: ConfigManagerService }, { type: MapManagerService }, { type: PanelManagerService }, { type: WidgetManagerService }, { type: WidgetPlaceHolderService }, { type: LayoutManagerService }, { type: i1$2.EventManager }, { type: i1$5.ActivatedRoute }, { type: ComponentLoaderService }, { type: ModalManagerService }, { type: SettingService }]; }, null);
    })();

    var SimpleLoaderService = /** @class */ (function () {
        function SimpleLoaderService() {
        }
        SimpleLoaderService.getInstance = function () {
            if (!this._instance) {
                this._instance = new SimpleLoaderService();
            }
            return this._instance;
        };
        SimpleLoaderService.prototype.is = function (type, obj) {
            var clas = Object.prototype.toString.call(obj).slice(8, -1);
            return obj !== undefined && obj !== null && clas === type;
        };
        SimpleLoaderService.prototype.isArray = function (item) {
            return this.is("Array", item);
        };
        SimpleLoaderService.prototype.getExtension = function (url) {
            url = url || "";
            var items = url.split("?")[0].split(".");
            return items[items.length - 1].toLowerCase();
        };
        SimpleLoaderService.prototype.createElement = function (config) {
            var e = document.createElement(config.element);
            for (var i in config) {
                if (i !== 'element' && i !== 'appendTo') {
                    e[i] = config[i];
                }
            }
            var root = document.getElementsByTagName(config.appendTo)[0];
            return (typeof root.appendChild(e) === 'object');
        };
        SimpleLoaderService.prototype.elementLoaded = function (url, onLoad) {
            if (onLoad) {
                onLoad(url);
            }
        };
        SimpleLoaderService.prototype.elementReadyStateChanged = function (url, thisObj, onLoad) {
            if (thisObj.readyState === 'loaded' || thisObj.readyState === 'complete') {
                this.elementLoaded(url, onLoad);
            }
        };
        SimpleLoaderService.prototype.loadCss = function (url, onLoad) {
            var _this = this;
            var result = this.createElement({
                element: 'link',
                rel: 'stylesheet',
                type: 'text/css',
                href: url,
                onload: function () {
                    _this.elementLoaded(url, onLoad);
                },
                appendTo: 'head'
            });
            var ti = setInterval(function () {
                var styles = document.styleSheets;
                for (var i = 0; i < styles.length; i++) {
                    if (styles[i].href &&
                        styles[i].href.substr(styles[i].href.indexOf(url), styles[i].href.length) === url) {
                        clearInterval(ti);
                        _this.elementLoaded(url, onLoad);
                    }
                }
            }, 500);
            return result;
        };
        SimpleLoaderService.prototype.loadJs = function (url, onLoad) {
            var _this = this;
            var result = this.createElement({
                element: 'script',
                type: 'text/javascript',
                onload: function () {
                    _this.elementLoaded(url, onLoad);
                },
                onreadystatechange: function () {
                    _this.elementReadyStateChanged(url, _this, onLoad);
                },
                src: url,
                appendTo: 'body'
            });
            return result;
        };
        SimpleLoaderService.prototype.loadResources = function (ress, onOneBeginLoad, onOneLoad, onLoad) {
            var loaded = [];
            var checkHaveLoaded = function (url) {
                for (var i = 0; i < loaded.length; i++) {
                    if (loaded[i] === url) {
                        return true;
                    }
                }
                return false;
            };
            var _onOneLoad = function (url) {
                if (checkHaveLoaded(url)) {
                    return;
                }
                loaded.push(url);
                if (onOneLoad) {
                    onOneLoad(url, loaded.length);
                }
                if (loaded.length === ress.length) {
                    if (onLoad) {
                        onLoad();
                    }
                }
            };
            for (var i = 0; i < ress.length; i++) {
                this.loadResource(ress[i], onOneBeginLoad, _onOneLoad);
            }
        };
        SimpleLoaderService.prototype.loadResource = function (url, onBeginLoad, onLoad) {
            if (onBeginLoad) {
                onBeginLoad(url);
            }
            var type = this.getExtension(url);
            if (type.toLowerCase() === 'css') {
                this.loadCss(url, onLoad);
            }
            else {
                this.loadJs(url, onLoad);
            }
        };
        return SimpleLoaderService;
    }());
    SimpleLoaderService._instance = null;
    var simpleLoader = SimpleLoaderService.getInstance();

    var AuthService = /** @class */ (function () {
        function AuthService(req) {
            this.req = req;
            this._tokenKey = "";
            this._userKey = "__current_user";
            this._currentUser = null;
            this._tokenKey = this.req.getTokenKey();
        }
        AuthService.prototype.saveInfo2Local = function (key, data) {
            if (window.sessionStorage) {
                sessionStorage.setItem(key, JSON.stringify(data));
            }
            else {
                console.log("浏览器不支持sessionStorage");
            }
        };
        AuthService.prototype.getInfoFromLocal = function (key) {
            if (window.sessionStorage) {
                return sessionStorage.getItem(key);
            }
            else {
                console.log("浏览器不支持sessionStorage");
            }
            return "";
        };
        AuthService.prototype.saveToken = function (data) {
            this.saveInfo2Local(this._tokenKey, data);
            this.req.setAccessToken(data.access_token);
        };
        AuthService.prototype.getLocalToken = function () {
            var str = this.getInfoFromLocal(this._tokenKey);
            if (str != "") {
                return JSON.parse(str);
            }
            return null;
        };
        AuthService.prototype.refreshToken = function (refresh_token) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.req.get('epsoffice/token/refresh', { "refresh_token": refresh_token }).then(function (result) {
                    if (result.success) {
                        _this.saveToken(result.data);
                    }
                    resolve(result);
                }).catch(function (err) { return reject(err); });
            });
        };
        AuthService.prototype.userLogin = function (username, password) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.req.post("epsoffice/user/login", { "username": username, "password": password })
                    .then(function (result) {
                    if (result.success) {
                        _this._currentUser = result.data;
                        _this.saveInfo2Local(_this._userKey, result.data);
                        _this.saveToken(result.data.token);
                    }
                    resolve(result);
                }).catch(reject);
            });
        };
        AuthService.prototype.checkLogin = function () {
            return this.req.get("epsoffice/user/login/validate");
        };
        AuthService.prototype.logout = function () {
            var _this = this;
            return new Promise(function (resove, reject) {
                _this.req.post("epsoffice/user/logout").then(function (result) {
                    if (result.success) {
                        _this.removeToken();
                    }
                    resove(result.success);
                }).catch(function (err) {
                    console.error(err);
                    resove(false);
                });
            });
        };
        AuthService.prototype.removeToken = function () {
            this._currentUser = null;
            this.req.setAccessToken("");
            sessionStorage.removeItem(this._tokenKey);
            sessionStorage.removeItem(this._userKey);
        };
        AuthService.prototype.getRemoteUser = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.req.get("epsoffice/user/login/info").then(function (result) {
                    if (result.success) {
                        _this._currentUser = result.data;
                        _this.saveInfo2Local(_this._userKey, result.data);
                        _this._currentUser.token = _this.getLocalToken();
                        resolve(result.data);
                    }
                    else {
                        console.error(result.msg);
                        resolve(null);
                    }
                }).catch(function (err) {
                    console.error(err);
                    resolve(null);
                });
            });
        };
        AuthService.prototype.getCurrentUser = function () {
            if (this._currentUser) {
                return this._currentUser;
            }
            var str = this.getInfoFromLocal(this._userKey);
            if (str) {
                var _user = JSON.parse(str);
                this._currentUser = _user;
                this._currentUser.token = this.getLocalToken();
            }
            return this._currentUser;
        };
        return AuthService;
    }());
    AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(i0.ɵɵinject(HttpReqService)); };
    AuthService.ɵprov = i0.ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: HttpReqService }]; }, null);
    })();

    var GISAuthService = /** @class */ (function () {
        function GISAuthService() {
        }
        GISAuthService.decrypt = function (str, pwd) {
            try {
                if (str == '') {
                    return '';
                }
                if (!pwd || pwd == '') {
                    pwd = 'sunway_webgis_auth_code';
                }
                pwd = encodeURIComponent(pwd);
                if (str == undefined || str.length < 8) {
                    return '';
                }
                if (pwd == undefined || pwd.length <= 0) {
                    return '';
                }
                var prand = '';
                for (var i = 0, len = pwd.length; i < len; i += 1) {
                    prand += pwd.charCodeAt(i).toString();
                }
                var sPos = Math.floor(prand.length / 5);
                var mult = parseInt(prand.charAt(sPos) + prand.charAt(sPos * 2) + prand.charAt(sPos * 3) +
                    prand.charAt(sPos * 4) + prand.charAt(sPos * 5));
                var incr = Math.round(pwd.length / 2);
                var modu = Math.pow(2, 31) - 1;
                var salt = parseInt(str.substring(str.length - 8, str.length), 16);
                str = str.substring(0, str.length - 8);
                prand += salt;
                while (prand.length > 10) {
                    prand = (parseInt(prand.substring(0, 10)) +
                        parseInt(prand.substring(10, prand.length))).toString();
                }
                if (this.isIE()) {
                    prand++;
                }
                prand = (mult * prand + incr) % modu;
                var encChr = '';
                var encStr = '';
                for (var i = 0, len = str.length; i < len; i += 2) {
                    encChr = parseInt(str.substring(i, i + 2), 16) ^ Math.floor((prand / modu) * 255);
                    encStr += String.fromCharCode(encChr);
                    prand = (mult * prand + incr) % modu;
                }
                return decodeURIComponent(encStr);
            }
            catch (error) {
                return "";
            }
        };
        GISAuthService.validateAuth = function (encryptCode) {
            var _this = this;
            setTimeout(function () {
                _this.doValidateAuth(encryptCode);
            }, 0);
        };
        GISAuthService.doValidateAuth = function (encryptCode) {
            this.encryptCode = encryptCode;
            var enCodeStr = this.decrypt(this.encryptCode);
            var hosts = enCodeStr.split('|')[0];
            var deadline = enCodeStr.split('|')[1];
            this.authtype = enCodeStr.split('|')[2];
            var hostname = window.location.hostname.toUpperCase();
            if (hostname === "LOCALHOST") {
                return;
            }
            var bHostPass = false;
            var hostArry = hosts.split(',');
            hostArry.forEach(function (host) {
                if (host.toUpperCase() === hostname) {
                    bHostPass = true;
                    return;
                }
            });
            if (!bHostPass) {
                this.showAuthDlg("软件未授权，请联系软件提供商，获取授权码！");
                return;
            }
            if (typeof (deadline) == "undefined") {
                this.showAuthDlg("软件未授权，请联系软件提供商，获取授权码！");
            }
            var oDate1 = this.getServerDate();
            var oDate2 = new Date(deadline);
            if (oDate1.getTime() > oDate2.getTime()) {
                this.showAuthDlg(this.authtype + "有限期至【" + deadline + "】" + "已过期，请重新授权！@山维科技");
            }
            if (this.authtype != "正式版") {
                this.showAuthInfo("开发预览版，有限期至【" + deadline + "】" + "@山维科技");
            }
        };
        GISAuthService.isIE = function () {
            if (!!window["ActiveXObject"] || "ActiveXObject" in window) {
                return true;
            }
            else {
                return false;
            }
        };
        GISAuthService.getServerDate = function () {
            var xhr = null;
            if (window['XMLHttpRequest']) {
                xhr = new window['XMLHttpRequest']();
            }
            else {
                xhr = new window["ActiveXObject"]("Microsoft");
            }
            xhr.open("GET", "/", false);
            xhr.send(null);
            var date = xhr.getResponseHeader("Date");
            return new Date(date);
        };
        GISAuthService.showAuthInfo = function (msg) {
            var chObj = document.getElementById("copyrightinfo");
            if (chObj) {
                chObj.innerHTML = msg;
            }
            else {
                var node = document.createElement("div");
                node.id = "copyrightinfo";
                node.style.position = "absolute";
                node.style.bottom = "0px";
                node.style.right = "20px";
                node.style.fontSize = "14px";
                node.style.zIndex = "700";
                node.style.color = "#e51c23";
                var textnode = document.createTextNode(msg);
                node.appendChild(textnode);
                document.body.appendChild(node);
            }
        };
        GISAuthService.showAuthDlg = function (msg) {
            var chObj = document.getElementById("copyDlginfo");
            if (!chObj) {
                var oMask = document.createElement("div");
                oMask.id = "mask";
                oMask.style.background = "#000";
                oMask.style.opacity = "0.65";
                oMask.style.width = "100%";
                oMask.style.position = "absolute";
                oMask.style.left = "0";
                oMask.style.top = "0";
                oMask.style.bottom = "0";
                oMask.style.zIndex = "1000";
                document.body.appendChild(oMask);
                var html = '<div style="text-align:center; margin-top:150px;"><p style="color:red">' + msg + '</p><a href="#" id="hideWin">刷新</a> </div>';
                var node = document.createElement("div");
                node.id = "copyDlginfo";
                node.style.position = "absolute";
                node.style.top = "0";
                node.style.right = "0";
                node.style.bottom = "0";
                node.style.left = "0";
                node.style.margin = "auto";
                node.style.fontSize = "14px";
                node.style.borderRadius = "20px";
                node.style.zIndex = "1001";
                node.style.width = "500px";
                node.style.height = "300px";
                node.style.color = "#e51c23";
                node.style.background = "#fff";
                node.innerHTML = html;
                document.body.appendChild(node);
                document.getElementById('hideWin').onclick = function () {
                    window.location.reload();
                };
            }
        };
        return GISAuthService;
    }());
    GISAuthService.message = "请获取开发授权！";
    GISAuthService.authtype = "开发版";
    GISAuthService.encryptCode = "";

    function CompContainerComponent_ng_template_0_Template(rf, ctx) { }
    var CompContainerComponent = /** @class */ (function () {
        function CompContainerComponent(serviceInjector, cdr, eventService, componentLoader) {
            var _this = this;
            this.serviceInjector = serviceInjector;
            this.cdr = cdr;
            this.eventService = eventService;
            this.componentLoader = componentLoader;
            this.jsonFileChange = new i0.EventEmitter();
            this.configChange = new i0.EventEmitter();
            this.autoLoad = true;
            this.eventService.rss.on(this.eventService._checkChangeDetector, function (obj) {
                UtilsService.detectChanges(_this.cdr);
            });
        }
        Object.defineProperty(CompContainerComponent.prototype, "jsonFile", {
            get: function () {
                return this._configJsonFile;
            },
            set: function (value) {
                this._configJsonFile = value;
                this.configJsonFile = value;
                this.jsonFileChange.emit(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CompContainerComponent.prototype, "config", {
            get: function () {
                return this._config;
            },
            set: function (value) {
                this._config = value;
                if (typeof value === "string") {
                    this._configJsonFile = value;
                    this.configJsonFile = value;
                }
                this.configChange.emit(value);
            },
            enumerable: false,
            configurable: true
        });
        CompContainerComponent.prototype.ngOnInit = function () {
        };
        CompContainerComponent.prototype.ngAfterViewInit = function () {
            this.componentLoader.setViewContainerInHome(this.container);
            this.componentLoader.setServiceInjector(this.serviceInjector);
            if (this.autoLoad) {
                this._init();
            }
        };
        CompContainerComponent.prototype._init = function () {
            this.serviceInjector.layoutManager.startup();
            if (this.config) {
                this.serviceInjector.configManager.loadConfig(this.config);
            }
            else {
                var _configJsonFile = this.serviceInjector.config.appInfo.configFile;
                if (this.configJsonFile) {
                    _configJsonFile = this.configJsonFile;
                }
                this.serviceInjector.configManager.loadConfig(_configJsonFile);
            }
        };
        CompContainerComponent.prototype.clear = function () {
            this.serviceInjector.layoutManager._destroyPreloadWidgetIcons();
            this.serviceInjector.layoutManager._destroyOffPanelWidgets();
            this.serviceInjector.layoutManager._destroyWidgetPlaceholders();
            this.serviceInjector.layoutManager._destroyPreloadPanels();
            this.serviceInjector.layoutManager._destroyPreloadGroupPanels();
            this.serviceInjector.mapManager.destoryMap();
        };
        CompContainerComponent.prototype.reload = function () {
            this.clear();
            this._init();
        };
        return CompContainerComponent;
    }());
    CompContainerComponent.ɵfac = function CompContainerComponent_Factory(t) { return new (t || CompContainerComponent)(i0.ɵɵdirectiveInject(ServiceInjector), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(EventEmitterService), i0.ɵɵdirectiveInject(ComponentLoaderService)); };
    CompContainerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CompContainerComponent, selectors: [["epsgis-comp-container"]], viewQuery: function CompContainerComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(ComponentContainerDirective, 3, i0.ViewContainerRef);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.container = _t.first);
            }
        }, inputs: { configJsonFile: ["config-json-file", "configJsonFile"], jsonFile: "jsonFile", config: "config", autoLoad: "autoLoad" }, outputs: { jsonFileChange: "jsonFileChange", configChange: "configChange" }, decls: 1, vars: 0, consts: [["component-host", ""]], template: function CompContainerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, CompContainerComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
            }
        }, directives: [ComponentContainerDirective], styles: ["epsgis-comp-container{width:100%;height:100%}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CompContainerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'epsgis-comp-container',
                        templateUrl: './comp-container.component.html',
                        styleUrls: ['./comp-container.component.scss'],
                    }]
            }], function () { return [{ type: ServiceInjector }, { type: i0.ChangeDetectorRef }, { type: EventEmitterService }, { type: ComponentLoaderService }]; }, { container: [{
                    type: i0.ViewChild,
                    args: [ComponentContainerDirective, { read: i0.ViewContainerRef, static: true }]
                }], configJsonFile: [{
                    type: i0.Input,
                    args: ["config-json-file"]
                }], jsonFile: [{
                    type: i0.Input
                }], jsonFileChange: [{
                    type: i0.Output
                }], config: [{
                    type: i0.Input
                }], configChange: [{
                    type: i0.Output
                }], autoLoad: [{
                    type: i0.Input
                }] });
    })();

    var EpsGisCompContainerModule = /** @class */ (function () {
        function EpsGisCompContainerModule() {
        }
        return EpsGisCompContainerModule;
    }());
    EpsGisCompContainerModule.ɵmod = i0.ɵɵdefineNgModule({ type: EpsGisCompContainerModule });
    EpsGisCompContainerModule.ɵinj = i0.ɵɵdefineInjector({ factory: function EpsGisCompContainerModule_Factory(t) { return new (t || EpsGisCompContainerModule)(); }, providers: [], imports: [[
                i1$1.CommonModule,
                EpsGisDirectivesModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(EpsGisCompContainerModule, { declarations: [CompContainerComponent], imports: [i1$1.CommonModule,
                EpsGisDirectivesModule], exports: [CompContainerComponent] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EpsGisCompContainerModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1$1.CommonModule,
                            EpsGisDirectivesModule
                        ],
                        declarations: [
                            CompContainerComponent
                        ],
                        entryComponents: [CompContainerComponent],
                        exports: [CompContainerComponent],
                        providers: []
                    }]
            }], null, null);
    })();

    function SSModalComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵprojection(0);
        }
    }
    var _c0$a = ["*"];
    exports.SSModalComponent = /** @class */ (function (_super) {
        __extends(SSModalComponent, _super);
        function SSModalComponent(modalService, viewContainerRef, _render, cdr) {
            var _this = _super.call(this, _render, cdr) || this;
            _this.modalService = modalService;
            _this.viewContainerRef = viewContainerRef;
            _this._render = _render;
            _this.cdr = cdr;
            _this.mask = true;
            _this.maskClosable = true;
            _this.visible = false;
            _this.closable = true;
            _this.okLoading = false;
            _this.okDisabled = false;
            _this.cancelDisabled = false;
            _this.cancelLoading = false;
            _this.keyboard = true;
            _this.noAnimation = false;
            _this.zIndex = 1000;
            _this.width = 520;
            _this.closeIcon = 'close';
            _this.okType = 'primary';
            _this.iconType = 'question-circle';
            _this.modalType = 'default';
            _this.onOk = new i0.EventEmitter();
            _this.onCancel = new i0.EventEmitter();
            _this.afterOpen = new i0.EventEmitter();
            _this.afterClose = new i0.EventEmitter();
            _this.visibleChange = new i0.EventEmitter();
            _this.modalRef = null;
            return _this;
        }
        Object.defineProperty(SSModalComponent.prototype, "afterOpenObservable", {
            get: function () {
                return this.afterOpen.asObservable();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SSModalComponent.prototype, "afterCloseObservable", {
            get: function () {
                return this.afterClose.asObservable();
            },
            enumerable: false,
            configurable: true
        });
        SSModalComponent.prototype.ngOnInit = function () {
        };
        SSModalComponent.prototype.onCloseClick = function () {
        };
        SSModalComponent.prototype.onOkClick = function () {
        };
        SSModalComponent.prototype.getConfig = function () {
            var componentConfig = getConfigFromComponent(this);
            componentConfig.viewContainerRef = this.viewContainerRef;
            if (!this.content) {
                componentConfig.content = this.contentTemplateRef;
            }
            return componentConfig;
        };
        SSModalComponent.prototype.ngOnChanges = function (changes) {
            var Visible = changes.Visible, otherChanges = __rest(changes, ["Visible"]);
            if (Object.keys(otherChanges).length && this.modalRef) {
                this.modalRef.updateConfig(getConfigFromComponent(this));
            }
            if (Visible) {
                if (this.visible) {
                    this.open();
                }
                else {
                    this.close();
                }
            }
        };
        SSModalComponent.prototype.open = function () {
            if (!this.visible) {
                this.visible = true;
                this.visibleChange.emit(true);
            }
            if (!this.modalRef) {
                var config = this.getConfig();
                this.modalRef = this.modalService.create(config);
            }
        };
        SSModalComponent.prototype.close = function (result) {
            if (this.visible) {
                this.visible = false;
                this.visibleChange.emit(false);
            }
            if (this.modalRef) {
                this.modalRef.close(result);
                this.modalRef = null;
            }
        };
        SSModalComponent.prototype.destroy = function (result) {
            this.close(result);
        };
        SSModalComponent.prototype.triggerOk = function () {
            this.modalRef != null ? this.modalRef.triggerOk() : null;
        };
        SSModalComponent.prototype.triggerCancel = function () {
            this.modalRef != null ? this.modalRef.triggerCancel() : null;
        };
        SSModalComponent.prototype.getContentComponent = function () {
            return this.modalRef != null ? this.modalRef.getContentComponent() : null;
        };
        SSModalComponent.prototype.getElement = function () {
            return this.modalRef != null ? this.modalRef.getElement() : null;
        };
        SSModalComponent.prototype.getModalRef = function () {
            return this.modalRef;
        };
        return SSModalComponent;
    }(BasePanelComponent));
    exports.SSModalComponent.ɵfac = function SSModalComponent_Factory(t) { return new (t || exports.SSModalComponent)(i0.ɵɵdirectiveInject(ModalManagerService), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.Renderer2, 8), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef, 8)); };
    exports.SSModalComponent.ɵcmp = i0.ɵɵdefineComponent({ type: exports.SSModalComponent, selectors: [["epsgis-modal"]], viewQuery: function SSModalComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(i0.TemplateRef, 3);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.contentTemplateRef = _t.first);
            }
        }, inputs: { mask: "mask", maskClosable: "maskClosable", visible: "visible", closable: "closable", okLoading: "okLoading", okDisabled: "okDisabled", cancelDisabled: "cancelDisabled", cancelLoading: "cancelLoading", keyboard: "keyboard", noAnimation: "noAnimation", content: "content", componentParams: "componentParams", footer: "footer", getContainer: "getContainer", zIndex: "zIndex", width: "width", wrapClassName: "wrapClassName", className: "className", styles: "styles", title: "title", closeIcon: "closeIcon", maskStyle: "maskStyle", bodyStyle: "bodyStyle", okText: "okText", cancelText: "cancelText", okType: "okType", iconType: "iconType", modalType: "modalType", onOk: "onOk", onCancel: "onCancel" }, outputs: { onOk: "onOk", onCancel: "onCancel", afterOpen: "afterOpen", afterClose: "afterClose", visibleChange: "visibleChange" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0$a, decls: 1, vars: 0, template: function SSModalComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵtemplate(0, SSModalComponent_ng_template_0_Template, 1, 0, "ng-template");
            }
        }, styles: [".ssmodal_container[_ngcontent-%COMP%]{box-sizing:border-box;position:absolute;top:0;bottom:0;right:0;left:0;display:flex;justify-content:flex-start;align-content:flex-start;pointer-events:none}.sspanel_statusbar[_ngcontent-%COMP%]{box-sizing:border-box;flex:0 0 auto;display:flex;align-items:flex-end}.statusbar_content[_ngcontent-%COMP%]{box-sizing:border-box;flex:1 1 auto;overflow:hidden;text-align:left;text-overflow:ellipsis;white-space:nowrap}.statusbar_handle[_ngcontent-%COMP%]{box-sizing:border-box;display:flex}.statusbar_handle_resizable[_ngcontent-%COMP%]{cursor:se-resize}"], changeDetection: 0 });
    exports.SSModalComponent = __decorate([
        ComponentRegister({
            uri: 'epsgis-modal',
            path: "epsgis/components/modal"
        })
    ], exports.SSModalComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(exports.SSModalComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'epsgis-modal',
                        template: " <ng-template><ng-content></ng-content></ng-template> ",
                        styleUrls: ['./modal.component.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () {
            return [{ type: ModalManagerService }, { type: i0.ViewContainerRef }, { type: i0.Renderer2, decorators: [{
                            type: i0.Optional
                        }] }, { type: i0.ChangeDetectorRef, decorators: [{
                            type: i0.Optional
                        }] }];
        }, { mask: [{
                    type: i0.Input
                }], maskClosable: [{
                    type: i0.Input
                }], visible: [{
                    type: i0.Input
                }], closable: [{
                    type: i0.Input
                }], okLoading: [{
                    type: i0.Input
                }], okDisabled: [{
                    type: i0.Input
                }], cancelDisabled: [{
                    type: i0.Input
                }], cancelLoading: [{
                    type: i0.Input
                }], keyboard: [{
                    type: i0.Input
                }], noAnimation: [{
                    type: i0.Input
                }], content: [{
                    type: i0.Input
                }], componentParams: [{
                    type: i0.Input
                }], footer: [{
                    type: i0.Input
                }], getContainer: [{
                    type: i0.Input
                }], zIndex: [{
                    type: i0.Input
                }], width: [{
                    type: i0.Input
                }], wrapClassName: [{
                    type: i0.Input
                }], className: [{
                    type: i0.Input
                }], styles: [{
                    type: i0.Input
                }], title: [{
                    type: i0.Input
                }], closeIcon: [{
                    type: i0.Input
                }], maskStyle: [{
                    type: i0.Input
                }], bodyStyle: [{
                    type: i0.Input
                }], okText: [{
                    type: i0.Input
                }], cancelText: [{
                    type: i0.Input
                }], okType: [{
                    type: i0.Input
                }], iconType: [{
                    type: i0.Input
                }], modalType: [{
                    type: i0.Input
                }], onOk: [{
                    type: i0.Input
                }, {
                    type: i0.Output
                }], onCancel: [{
                    type: i0.Input
                }, {
                    type: i0.Output
                }], afterOpen: [{
                    type: i0.Output
                }], afterClose: [{
                    type: i0.Output
                }], visibleChange: [{
                    type: i0.Output
                }], contentTemplateRef: [{
                    type: i0.ViewChild,
                    args: [i0.TemplateRef, { static: true }]
                }] });
    })();

    var _c0$b = ["ss-modal-footer", ""];
    function SsModalFooterComponent_ng_container_0_div_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "div", 4);
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("innerHTML", ctx_r3.config.title, i0.ɵɵsanitizeHtml);
        }
    }
    function SsModalFooterComponent_ng_container_0_ng_container_3_button_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r8_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 6);
            i0.ɵɵlistener("click", function SsModalFooterComponent_ng_container_0_ng_container_3_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r8_1); var button_r6 = ctx.$implicit; var ctx_r7 = i0.ɵɵnextContext(3); return ctx_r7.onButtonClick(button_r6); });
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var button_r6 = ctx.$implicit;
            var ctx_r5 = i0.ɵɵnextContext(3);
            i0.ɵɵclassMap(ctx_r5.getButtonClass(button_r6));
            i0.ɵɵproperty("hidden", !ctx_r5.getButtonCallableProp(button_r6, "show"));
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", button_r6.label, " ");
        }
    }
    function SsModalFooterComponent_ng_container_0_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, SsModalFooterComponent_ng_container_0_ng_container_3_button_1_Template, 2, 4, "button", 5);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r4 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r4.buttons);
        }
    }
    function SsModalFooterComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementContainerStart(1);
            i0.ɵɵtemplate(2, SsModalFooterComponent_ng_container_0_div_2_Template, 1, 1, "div", 2);
            i0.ɵɵtemplate(3, SsModalFooterComponent_ng_container_0_ng_container_3_Template, 2, 1, "ng-container", 3);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx_r0.buttonsFooter);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.buttonsFooter);
        }
    }
    function SsModalFooterComponent_ng_template_1_button_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r12_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 9);
            i0.ɵɵlistener("click", function SsModalFooterComponent_ng_template_1_button_0_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r12_1); var ctx_r11 = i0.ɵɵnextContext(2); return ctx_r11.onCancel(); });
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r9 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("disabled", ctx_r9.config.cancelDisabled);
            i0.ɵɵattribute("cdkFocusInitial", ctx_r9.config.autofocus === "cancel");
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx_r9.config.cancelText || ctx_r9.locale.cancelText, " ");
        }
    }
    function SsModalFooterComponent_ng_template_1_button_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r14_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 10);
            i0.ɵɵlistener("click", function SsModalFooterComponent_ng_template_1_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r14_1); var ctx_r13 = i0.ɵɵnextContext(2); return ctx_r13.onOk(); });
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r10 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("disabled", ctx_r10.config.okDisabled);
            i0.ɵɵattribute("cdkFocusInitial", ctx_r10.config.autofocus === "ok");
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx_r10.config.okText || ctx_r10.locale.okText, " ");
        }
    }
    function SsModalFooterComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, SsModalFooterComponent_ng_template_1_button_0_Template, 2, 3, "button", 7);
            i0.ɵɵtemplate(1, SsModalFooterComponent_ng_template_1_button_1_Template, 2, 3, "button", 8);
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngIf", ctx_r2.config.cancelText !== null);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r2.config.okText !== null);
        }
    }
    var SsModalFooterComponent = /** @class */ (function () {
        function SsModalFooterComponent(config) {
            this.config = config;
            this.buttonsFooter = false;
            this.buttons = [];
            this.locale = { okText: "确定", cancelText: "取消" };
            this.cancelTriggered = new i0.EventEmitter();
            this.okTriggered = new i0.EventEmitter();
            this.destroy$ = new rxjs.Subject();
            if (Array.isArray(config.footer)) {
                this.buttonsFooter = true;
                this.buttons = config.footer.map(mergeDefaultOption);
            }
        }
        SsModalFooterComponent.prototype.getButtonClass = function (button) {
            switch (button.type) {
                case "primary":
                    return "ss-btn ss-btn-primary";
                case "dashed":
                    return "ss-btn ss-btn-dashed";
                case "danger":
                    return "ss-btn ss-btn-danger";
                case "link":
                    return "ss-btn ss-btn-link";
            }
            return "ss-btn ss-btn-default";
        };
        SsModalFooterComponent.prototype.onCancel = function () {
            this.cancelTriggered.emit();
        };
        SsModalFooterComponent.prototype.onOk = function () {
            this.okTriggered.emit();
        };
        SsModalFooterComponent.prototype.getButtonCallableProp = function (options, prop) {
            var value = options[prop];
            if (this.modalRef) {
                var componentInstance = this.modalRef.getContentComponent();
                return typeof value === 'function' ? value.apply(options, componentInstance && [componentInstance]) : value;
            }
            return false;
        };
        SsModalFooterComponent.prototype.onButtonClick = function (options) {
            var loading = this.getButtonCallableProp(options, 'loading');
            if (!loading) {
                var result = this.getButtonCallableProp(options, 'onClick');
                if (options.autoLoading && isPromise(result)) {
                    options.loading = true;
                    result.then(function () { return (options.loading = false); }).catch(function () { return (options.loading = false); });
                }
            }
        };
        SsModalFooterComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        return SsModalFooterComponent;
    }());
    SsModalFooterComponent.ɵfac = function SsModalFooterComponent_Factory(t) { return new (t || SsModalFooterComponent)(i0.ɵɵdirectiveInject(SsModalOptions)); };
    SsModalFooterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SsModalFooterComponent, selectors: [["div", "ss-modal-footer", ""]], hostAttrs: [1, ""], inputs: { modalRef: "modalRef" }, outputs: { cancelTriggered: "cancelTriggered", okTriggered: "okTriggered" }, attrs: _c0$b, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["defaultFooterButtons", ""], [3, "innerHTML", 4, "ngIf"], [4, "ngIf"], [3, "innerHTML"], ["nz-button", "", 3, "hidden", "class", "click", 4, "ngFor", "ngForOf"], ["nz-button", "", 3, "hidden", "click"], ["nz-button", "", "class", "ss-btn ss-btn-default", 3, "disabled", "click", 4, "ngIf"], ["nz-button", "", "class", "ss-btn ss-btn-primary ", 3, "disabled", "click", 4, "ngIf"], ["nz-button", "", 1, "ss-btn", "ss-btn-default", 3, "disabled", "click"], ["nz-button", "", 1, "ss-btn", "ss-btn-primary", 3, "disabled", "click"]], template: function SsModalFooterComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, SsModalFooterComponent_ng_container_0_Template, 4, 2, "ng-container", 0);
                i0.ɵɵtemplate(1, SsModalFooterComponent_ng_template_1_Template, 2, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                var _r1 = i0.ɵɵreference(2);
                i0.ɵɵproperty("ngIf", ctx.config.footer)("ngIfElse", _r1);
            }
        }, directives: [i1$1.NgIf, i1$1.NgForOf], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SsModalFooterComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'div[ss-modal-footer]',
                        template: "\n    <ng-container *ngIf=\"config.footer; else defaultFooterButtons\">\n      <ng-container>\n        <div *ngIf=\"!buttonsFooter\" [innerHTML]=\"config.title\"></div>\n        <ng-container *ngIf=\"buttonsFooter\">\n          <button\n            *ngFor=\"let button of buttons\"\n            nz-button\n            (click)=\"onButtonClick(button)\"\n            [hidden]=\"!getButtonCallableProp(button, 'show')\"\n            [class]=\"getButtonClass(button)\"\n          >\n            {{ button.label }}\n          </button>\n        </ng-container>\n      </ng-container>\n    </ng-container>\n    <ng-template #defaultFooterButtons>\n      <button\n        *ngIf=\"config.cancelText !== null\"\n        [attr.cdkFocusInitial]=\"config.autofocus === 'cancel'\"\n        nz-button\n        (click)=\"onCancel()\"\n        [disabled]=\"config.cancelDisabled\"\n        class=\"ss-btn ss-btn-default\"\n      >\n        {{ config.cancelText || locale.cancelText }}\n      </button>\n      <button\n        *ngIf=\"config.okText !== null\"\n        [attr.cdkFocusInitial]=\"config.autofocus === 'ok'\"\n        nz-button\n        class=\"ss-btn ss-btn-primary \"\n        (click)=\"onOk()\"\n        [disabled]=\"config.okDisabled\"\n      >\n        {{ config.okText || locale.okText }}\n      </button>\n    </ng-template>\n  ",
                        host: {
                            class: ''
                        },
                        changeDetection: i0.ChangeDetectionStrategy.Default
                    }]
            }], function () { return [{ type: SsModalOptions }]; }, { cancelTriggered: [{
                    type: i0.Output
                }], okTriggered: [{
                    type: i0.Output
                }], modalRef: [{
                    type: i0.Input
                }] });
    })();
    function mergeDefaultOption(options) {
        return Object.assign({ type: null, size: 'default', autoLoading: true, show: true, loading: false, disabled: false }, options);
    }

    var BaseMapComponent = /** @class */ (function (_super) {
        __extends(BaseMapComponent, _super);
        function BaseMapComponent(componentLoader) {
            var _this = _super.call(this) || this;
            _this.componentLoader = componentLoader;
            _this._is3d = false;
            return _this;
        }
        Object.defineProperty(BaseMapComponent.prototype, "is3D", {
            get: function () {
                return this._is3d;
            },
            set: function (val) {
                this._is3d = val;
                this.globalParams.mapConfig.is3D = val;
            },
            enumerable: false,
            configurable: true
        });
        BaseMapComponent.prototype.ngOnInit = function () {
            this.componentLoader.setViewContainerInMap(this.container);
            _super.prototype.ngOnInit.call(this);
        };
        BaseMapComponent.prototype.setProps = function (options) {
            var _a, _b, _c;
            this.appConfig = options.appConfig;
            if (!this.appConfig.map.jsApi) {
                if (this.globalParams.mapConfig.jsApi) {
                    this.appConfig.map.jsApi = this.globalParams.mapConfig.jsApi;
                }
                else {
                    this.appConfig.map.jsApi = this.config.mapJsApi;
                }
            }
            this.widgetConfig = this.appConfig.map;
            this.config = options.config;
            this.widgetConfig.manifest = options.manifest;
            this.started = true;
            this.state = exports.WidgetState.opened;
            this.name = (_a = options.manifest) === null || _a === void 0 ? void 0 : _a.name;
            this.inPanel = (_c = (_b = options.manifest) === null || _b === void 0 ? void 0 : _b.properties) === null || _c === void 0 ? void 0 : _c.inPanel;
            this.label = "地图";
            this.uri = this.getCompInfo().uri;
            this.folderUrl = this.globalParams.widgetRootPath + "/" + this.getCompInfo().path + "/";
            this.widgetConfig.folderUrl = this.folderUrl;
            _super.prototype.setPosition.call(this, this.appConfig.map.position);
        };
        BaseMapComponent.prototype.initMap = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_d) {
                    return [2 /*return*/, Promise.resolve(null)];
                });
            });
        };
        return BaseMapComponent;
    }(BaseWidgetComponent));
    BaseMapComponent.ɵfac = function BaseMapComponent_Factory(t) { return new (t || BaseMapComponent)(i0.ɵɵdirectiveInject(ComponentLoaderService)); };
    BaseMapComponent.ɵdir = i0.ɵɵdefineDirective({ type: BaseMapComponent, viewQuery: function BaseMapComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(ComponentContainerDirective, 3, i0.ViewContainerRef);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.container = _t.first);
            }
        }, features: [i0.ɵɵInheritDefinitionFeature] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseMapComponent, [{
                type: i0.Directive
            }], function () { return [{ type: ComponentLoaderService }]; }, { container: [{
                    type: i0.ViewChild,
                    args: [ComponentContainerDirective, { read: i0.ViewContainerRef, static: true }]
                }] });
    })();

    var SsModalFooterDirective = /** @class */ (function () {
        function SsModalFooterDirective(ssModalRef, templateRef) {
            this.ssModalRef = ssModalRef;
            this.templateRef = templateRef;
            if (this.ssModalRef) {
                this.ssModalRef.updateConfig({
                    footer: this.templateRef
                });
            }
        }
        return SsModalFooterDirective;
    }());
    SsModalFooterDirective.ɵfac = function SsModalFooterDirective_Factory(t) { return new (t || SsModalFooterDirective)(i0.ɵɵdirectiveInject(SsModalRef, 8), i0.ɵɵdirectiveInject(i0.TemplateRef)); };
    SsModalFooterDirective.ɵdir = i0.ɵɵdefineDirective({ type: SsModalFooterDirective, selectors: [["", "SsModalFooter", ""]], exportAs: ["SsModalFooter"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SsModalFooterDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[SsModalFooter]',
                        exportAs: 'SsModalFooter'
                    }]
            }], function () {
            return [{ type: SsModalRef, decorators: [{
                            type: i0.Optional
                        }] }, { type: i0.TemplateRef }];
        }, null);
    })();

    var SSModalAPI = /** @class */ (function () {
        function SSModalAPI() {
        }
        return SSModalAPI;
    }());

    var _c0$c = ["pdfViewerContainer"];
    function PDFViewerComponent_iframe_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "iframe", 3);
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵstyleProp("height", ctx_r1.pdfViewHeight);
            i0.ɵɵproperty("src", ctx_r1.pdfUrl, i0.ɵɵsanitizeResourceUrl);
        }
    }
    exports.PDFViewerComponent = /** @class */ (function () {
        function PDFViewerComponent(domSanitizer) {
            this.domSanitizer = domSanitizer;
            this.width = 0;
            this.height = 0;
            this.ready = new i0.EventEmitter(false);
            this.pdfViewHeight = "600px";
        }
        PDFViewerComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            setTimeout(function () {
                _this.resetViewHeight();
            }, 1000);
        };
        PDFViewerComponent.prototype.ngOnInit = function () {
            this.pdfUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.viewerUrl + "?file=" + this.source);
            this.ready.emit("pdf viewer initialize!");
        };
        PDFViewerComponent.prototype.resetViewHeight = function () {
            var height = this.getMainWindowHeight();
            if (height > 0) {
                this.pdfViewHeight = height - 5 + "px";
            }
            else {
                this.pdfViewHeight = "600px";
            }
        };
        PDFViewerComponent.prototype.getMainWindowHeight = function () {
            var e_1, _a;
            var parentNode = this.pdfViewerContainer.nativeElement.parentNode;
            while (parentNode) {
                if (parentNode.className &&
                    (parentNode.className === "ssmodal_content" ||
                        parentNode.className === "sspanel_content")) {
                    break;
                }
                parentNode = parentNode.parentNode;
            }
            if (parentNode) {
                return parentNode.clientHeight - 30;
            }
            else {
                parentNode = this.pdfViewerContainer.nativeElement.parentNode;
                var contentNode = null;
                while (parentNode) {
                    if (parentNode.childNodes && parentNode.childNodes.length > 0) {
                        try {
                            for (var _b = (e_1 = void 0, __values(parentNode.childNodes)), _c = _b.next(); !_c.done; _c = _b.next()) {
                                var child = _c.value;
                                if (child.nodeName.toLocaleUpperCase() === "NZ-CONTENT") {
                                    contentNode = child;
                                    break;
                                }
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                    }
                    if (contentNode) {
                        break;
                    }
                    parentNode = parentNode.parentNode;
                }
                if (contentNode) {
                    return contentNode.clientHeight;
                }
            }
            return this.height;
        };
        return PDFViewerComponent;
    }());
    exports.PDFViewerComponent.ɵfac = function PDFViewerComponent_Factory(t) { return new (t || exports.PDFViewerComponent)(i0.ɵɵdirectiveInject(i1$2.DomSanitizer)); };
    exports.PDFViewerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: exports.PDFViewerComponent, selectors: [["pdf-viewer"]], viewQuery: function PDFViewerComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0$c, 1);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.pdfViewerContainer = _t.first);
            }
        }, inputs: { width: "width", height: "height", viewerUrl: "viewerUrl", source: "source" }, outputs: { ready: "ready" }, decls: 3, vars: 1, consts: [[1, "pdfViewerContainer"], ["pdfViewerContainer", ""], ["frameborder", "0", 3, "src", "height", 4, "ngIf"], ["frameborder", "0", 3, "src"]], template: function PDFViewerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0, 1);
                i0.ɵɵtemplate(2, PDFViewerComponent_iframe_2_Template, 1, 3, "iframe", 2);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", ctx.pdfUrl);
            }
        }, directives: [i1$1.NgIf], styles: ["iframe[_ngcontent-%COMP%]{width:100%;height:100%;border:0}"] });
    exports.PDFViewerComponent = __decorate([
        ComponentRegister({
            uri: "pdf-viewer",
            path: "components/shared/ngxviewer/pdf-viewer"
        })
    ], exports.PDFViewerComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(exports.PDFViewerComponent, [{
                type: i0.Component,
                args: [{
                        selector: "pdf-viewer",
                        templateUrl: "./pdf-viewer.component.html",
                        styleUrls: ["./pdf-viewer.component.scss"],
                    }]
            }], function () { return [{ type: i1$2.DomSanitizer }]; }, { pdfViewerContainer: [{
                    type: i0.ViewChild,
                    args: ["pdfViewerContainer"]
                }], width: [{
                    type: i0.Input
                }], height: [{
                    type: i0.Input
                }], viewerUrl: [{
                    type: i0.Input
                }], source: [{
                    type: i0.Input
                }], ready: [{
                    type: i0.Output
                }] });
    })();

    var _c0$d = ["imageViewerContainer"];
    var _c1$7 = ["showImg"];
    function ImageViewerComponent_div_16_img_11_Template(rf, ctx) {
        if (rf & 1) {
            var _r9_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "img", 55);
            i0.ɵɵlistener("click", function ImageViewerComponent_div_16_img_11_Template_img_click_0_listener() { i0.ɵɵrestoreView(_r9_1); var imgUrl_r6 = ctx.$implicit; var i_r7 = ctx.index; var ctx_r8 = i0.ɵɵnextContext(2); return ctx_r8.changeCurrentImageUrl(imgUrl_r6, i_r7); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var imgUrl_r6 = ctx.$implicit;
            i0.ɵɵproperty("src", imgUrl_r6, i0.ɵɵsanitizeUrl);
        }
    }
    function ImageViewerComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
            var _r11_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵnamespaceSVG();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(0, "div", 43);
            i0.ɵɵelementStart(1, "div", 44);
            i0.ɵɵlistener("click", function ImageViewerComponent_div_16_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r11_1); var _r4 = i0.ɵɵreference(10); var ctx_r10 = i0.ɵɵnextContext(); var _r1 = i0.ɵɵreference(3); return ctx_r10.previousImg(_r4, _r1); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(2, "svg", 45);
            i0.ɵɵelement(3, "path", 46);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(4, "div", 47);
            i0.ɵɵlistener("click", function ImageViewerComponent_div_16_Template_div_click_4_listener() { i0.ɵɵrestoreView(_r11_1); var _r4 = i0.ɵɵreference(10); var ctx_r12 = i0.ɵɵnextContext(); var _r1 = i0.ɵɵreference(3); return ctx_r12.nextImg(_r4, _r1); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(5, "svg", 48);
            i0.ɵɵelement(6, "path", 49);
            i0.ɵɵelement(7, "path", 50);
            i0.ɵɵelement(8, "path", 51);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(9, "div", 52, 53);
            i0.ɵɵtemplate(11, ImageViewerComponent_div_16_img_11_Template, 1, 1, "img", 54);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵadvance(9);
            i0.ɵɵstyleProp("left", ctx_r3.moreImgInitLeft + "px");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx_r3.imageSources);
        }
    }
    exports.ImageViewerComponent = /** @class */ (function () {
        function ImageViewerComponent(domSanitizer, eventService) {
            this.domSanitizer = domSanitizer;
            this.eventService = eventService;
            this.width = 0;
            this.height = 0;
            this.first = 0;
            this.ready = new i0.EventEmitter(false);
            this.imageSources = [];
            this.radian = 0;
            this.x = 1;
            this.y = 1;
            this.zoom = 0.1;
            this.moreImgInitLeft = 0;
            this.currentImageTempTop = 0;
            this.currentImageTempLeft = 0;
            this.dragStartClientX = 0;
            this.dragStartClientY = 0;
            this.isStartMove = false;
            this.imageViewHeight = "400px";
            this.mainWindowHeight = 0;
        }
        ImageViewerComponent.prototype.ngOnInit = function () {
            this.convertUrl(this.source);
        };
        ImageViewerComponent.prototype.convertUrl = function (sources) {
            var _this = this;
            this.imageSources.splice(0);
            if (sources && sources.length > 0) {
                sources.forEach(function (imgUrl) {
                    _this.imageSources.push(_this.domSanitizer.bypassSecurityTrustResourceUrl(imgUrl));
                });
                if (this.first == null) {
                    this.currentImageUrl = this.imageSources[0];
                }
                else {
                    this.currentImageUrl = this.imageSources[this.first];
                }
                this.ready.emit("image viewer initialize!");
            }
            else {
                throw "没有图片源，请传入！";
            }
        };
        ImageViewerComponent.prototype.changeImageSources = function (sources) {
            this.source = sources;
            this.convertUrl(this.source);
        };
        ImageViewerComponent.prototype.currentImageLoaded = function (img, viewer) {
            var _this = this;
            this.currentImage = img;
            this.initTop = (viewer.clientHeight - img.offsetHeight) / 2;
            this.initLeft = (viewer.clientWidth - img.offsetWidth) / 2;
            if (this.currentImage) {
                this.currentImage.style.top = this.initTop + "px";
                this.currentImage.style.left = this.initLeft + "px";
            }
            this.mainWindowHeight = this.getMainWindowHeight();
            if (this.imageSources.length > 1) {
                this.imageViewHeight = this.mainWindowHeight - 96 + "px";
            }
            else {
                this.imageViewHeight = this.mainWindowHeight - 46 + "px";
            }
            if (this.checkBrowser().firefox) {
                viewer.addEventListener("DOMMouseScroll", function (e) {
                    _this.currentImageZoomByWheel(e);
                });
            }
            else {
                viewer.addEventListener("mousewheel", function (e) {
                    _this.currentImageZoomByWheel(e);
                });
            }
        };
        ImageViewerComponent.prototype.preOrNextImg = function (type) {
            var index = this.imageSources.indexOf(this.currentImageUrl);
            if (type == "pre") {
                if (index != 0) {
                    index--;
                    this.currentImageUrl = this.imageSources[index];
                    this.eventService.rss.emit(this.eventService._imageViewerIndexChanged, {
                        index: index,
                    });
                }
            }
            else if (type == "next") {
                if (index != this.imageSources.length - 1) {
                    index++;
                    this.currentImageUrl = this.imageSources[index];
                    this.eventService.rss.emit(this.eventService._imageViewerIndexChanged, {
                        index: index,
                    });
                }
            }
            this.currentImgReset();
        };
        ImageViewerComponent.prototype.changeCurrentImg = function () {
            var matrix = this.getMatrix(this.radian, this.x, this.y);
            if (this.currentImage) {
                this.currentImage.style.transform =
                    "matrix(" +
                        matrix.M11.toFixed(16) +
                        "," +
                        matrix.M21.toFixed(16) +
                        "," +
                        matrix.M12.toFixed(16) +
                        "," +
                        matrix.M22.toFixed(16) +
                        ", 0, 0)";
            }
        };
        ImageViewerComponent.prototype.getMatrix = function (radian, x, y) {
            var Cos = Math.cos(radian), Sin = Math.sin(radian);
            return {
                M11: Cos * x,
                M12: -Sin * y,
                M21: Sin * x,
                M22: Cos * y,
            };
        };
        ImageViewerComponent.prototype.vertical = function () {
            this.radian = Math.PI - this.radian;
            this.y *= -1;
        };
        ImageViewerComponent.prototype.horizontal = function () {
            this.radian = Math.PI - this.radian;
            this.x *= -1;
        };
        ImageViewerComponent.prototype.rotate = function (radian) {
            this.radian = radian;
        };
        ImageViewerComponent.prototype.rotateLeftBy90 = function () {
            this.radian -= Math.PI / 2;
        };
        ImageViewerComponent.prototype.rotateRightBy90 = function () {
            this.radian += Math.PI / 2;
        };
        ImageViewerComponent.prototype.rotateByDegress = function (degress) {
            this.radian = (degress * Math.PI) / 180;
        };
        ImageViewerComponent.prototype.getZoom = function (scale, zoom) {
            return scale > 0 && scale > -zoom
                ? zoom
                : scale < 0 && scale < zoom
                    ? -zoom
                    : 0;
        };
        ImageViewerComponent.prototype.scale = function (zoom) {
            if (zoom) {
                var hZoom = this.getZoom(this.x, zoom), vZoom = this.getZoom(this.y, zoom);
                if (hZoom && vZoom) {
                    this.x += hZoom;
                    this.y += vZoom;
                }
            }
        };
        ImageViewerComponent.prototype.zoomin = function () {
            this.scale(Math.abs(this.zoom));
        };
        ImageViewerComponent.prototype.zoomout = function () {
            this.scale(-Math.abs(this.zoom));
        };
        ImageViewerComponent.prototype.reset = function () {
            this.radian = 0;
            this.x = 1;
            this.y = 1;
            this.zoom = 0.1;
            if (this.currentImage) {
                this.currentImage.style.top = this.initTop + "px";
                this.currentImage.style.left = this.initLeft + "px";
            }
        };
        ImageViewerComponent.prototype.imageZoomin = function () {
            this.zoomin();
            this.changeCurrentImg();
        };
        ImageViewerComponent.prototype.imageZoomout = function () {
            this.zoomout();
            this.changeCurrentImg();
        };
        ImageViewerComponent.prototype.rotateLeft = function () {
            this.rotateLeftBy90();
            this.changeCurrentImg();
        };
        ImageViewerComponent.prototype.rotateRight = function () {
            this.rotateRightBy90();
            this.changeCurrentImg();
        };
        ImageViewerComponent.prototype.flipVertical = function () {
            this.horizontal();
            this.changeCurrentImg();
        };
        ImageViewerComponent.prototype.flipHorizontal = function () {
            this.vertical();
            this.changeCurrentImg();
        };
        ImageViewerComponent.prototype.currentImgReset = function () {
            this.reset();
            this.changeCurrentImg();
        };
        ImageViewerComponent.prototype.previousImg = function (moreImg, viewer) {
            var moveVal = Number(moreImg.style.left.split("px")[0]) + viewer.clientWidth;
            this.moreImgInitLeft = moveVal < 0 ? moveVal : 0;
            if (this.moreImgInitLeft <= 0) {
                this.moreImgInitLeft = 30;
            }
        };
        ImageViewerComponent.prototype.nextImg = function (moreImg, viewer) {
            var moveVal = Number(moreImg.style.left.split("px")[0]) - viewer.clientWidth;
            this.moreImgInitLeft =
                -moreImg.clientWidth < moveVal ? moveVal : this.moreImgInitLeft;
            if (this.moreImgInitLeft <= 0) {
                this.moreImgInitLeft = 30;
            }
        };
        ImageViewerComponent.prototype.changeCurrentImageUrl = function (imgUrl, index) {
            this.currentImageUrl = imgUrl;
            this.currentImgReset();
            this.eventService.rss.emit(this.eventService._imageViewerIndexChanged, {
                index: index,
            });
        };
        ImageViewerComponent.prototype.changeCurrentIndex = function (index) {
            if (index >= 0 && index < this.imageSources.length) {
                this.currentImageUrl = this.imageSources[index];
                this.currentImgReset();
            }
        };
        ImageViewerComponent.prototype.currentImageZoomByWheel = function (e) {
            e.preventDefault();
            var scale = (e.wheelDelta ? e.wheelDelta / -180 : (e.detail || 0) / 3) *
                Math.abs(this.zoom);
            this.scale(scale);
            if (this.x >= 0.1 && this.y >= 0.1) {
                this.changeCurrentImg();
            }
        };
        ImageViewerComponent.prototype.currentImageDragStart = function (e) {
            if (this.currentImage) {
                this.currentImageTempTop = parseInt(this.currentImage.style.top);
                this.currentImageTempLeft = parseInt(this.currentImage.style.left);
            }
            this.dragStartClientX = e.clientX;
            this.dragStartClientY = e.clientY;
            if (this.currentImage) {
                this.currentImage.style.transition = "all 0s ease-out";
            }
            this.isStartMove = true;
        };
        ImageViewerComponent.prototype.setImageHeight = function () {
            var height = this.getMainWindowHeight();
            if (height !== this.mainWindowHeight) {
                this.mainWindowHeight = height;
                if (this.imageSources.length > 1) {
                    this.imageViewHeight = height - 96 + "px";
                }
                else {
                    this.imageViewHeight = height - 46 + "px";
                }
            }
        };
        ImageViewerComponent.prototype.currentImageDrag = function (e) {
            this.setImageHeight();
            if (this.isStartMove) {
                var offsetX = e.clientX - this.dragStartClientX;
                var offsetY = e.clientY - this.dragStartClientY;
                if (this.currentImage) {
                    this.currentImage.style.top = this.currentImageTempTop + offsetY + "px";
                    this.currentImage.style.left =
                        this.currentImageTempLeft + offsetX + "px";
                }
            }
        };
        ImageViewerComponent.prototype.currentImageDragEnd = function (e) {
            if (this.currentImage) {
                this.currentImage.style.transition = "all 0.5s ease-out";
            }
            this.isStartMove = false;
        };
        ImageViewerComponent.prototype.cancleCurrentImageDrag = function (e) {
            e.preventDefault();
        };
        ImageViewerComponent.prototype.getMainWindowHeight = function () {
            var e_1, _a;
            var parentNode = this.imageViewerContainer.nativeElement.parentNode;
            while (parentNode) {
                if (parentNode.className &&
                    (parentNode.className === "ssmodal_content" ||
                        parentNode.className === "sspanel_content")) {
                    break;
                }
                parentNode = parentNode.parentNode;
            }
            if (parentNode) {
                return parentNode.clientHeight - 30;
            }
            else {
                parentNode = this.imageViewerContainer.nativeElement.parentNode;
                var contentNode = null;
                while (parentNode) {
                    if (parentNode.childNodes && parentNode.childNodes.length > 0) {
                        try {
                            for (var _b = (e_1 = void 0, __values(parentNode.childNodes)), _c = _b.next(); !_c.done; _c = _b.next()) {
                                var child = _c.value;
                                if (child.nodeName.toLocaleUpperCase() === "NZ-CONTENT") {
                                    contentNode = child;
                                    break;
                                }
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                    }
                    if (contentNode) {
                        break;
                    }
                    parentNode = parentNode.parentNode;
                }
                if (contentNode) {
                    return contentNode.clientHeight;
                }
            }
            return this.height;
        };
        ImageViewerComponent.prototype.checkBrowser = function () {
            var browser = {}, ua = navigator.userAgent;
            if (window["opera"]) {
                browser.ver = window["opera"].version();
                browser.opera = parseFloat(browser.ver);
            }
            else {
                if (/Edge\/(\S+)/.test(ua)) {
                    browser.ver = RegExp["$1"];
                    browser.misEdge = parseFloat(browser.ver);
                }
                else if (/OPR\/(\S+)/.test(ua)) {
                    browser.ver = RegExp["$1"];
                    browser.opera = parseFloat(browser.ver);
                }
                else if (/Chrome\/(\S+)/.test(ua)) {
                    browser.ver = RegExp["$1"];
                    browser.chrome = parseFloat(browser.ver);
                }
                else if (/Version\/(\S+)/.test(ua)) {
                    browser.ver = RegExp["$1"];
                    browser.safari = parseFloat(browser.ver);
                }
                else if (/Firefox\/(\S+)/.test(ua)) {
                    browser.ver = RegExp["$1"];
                    browser.firefox = parseFloat(browser.ver);
                }
                else if (/MSIE ([^;]+)/.test(ua) || /rv:([^\)]+)\) like Gecko/.test(ua)) {
                    browser.ver = RegExp["$1"];
                    browser.ie = parseFloat(browser.ver);
                }
                else if (/KHTML\/(\S+)/.test(ua) || /Konqueror\/(\S+)/.test(ua)) {
                    browser.ver = RegExp["$1"];
                    browser.konq = parseFloat(browser.ver);
                }
            }
            return browser;
        };
        return ImageViewerComponent;
    }());
    exports.ImageViewerComponent.ɵfac = function ImageViewerComponent_Factory(t) { return new (t || exports.ImageViewerComponent)(i0.ɵɵdirectiveInject(i1$2.DomSanitizer), i0.ɵɵdirectiveInject(EventEmitterService)); };
    exports.ImageViewerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: exports.ImageViewerComponent, selectors: [["image-viewer"]], viewQuery: function ImageViewerComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0$d, 1);
                i0.ɵɵviewQuery(_c1$7, 1);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.imageViewerContainer = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.showImg = _t.first);
            }
        }, inputs: { width: "width", height: "height", source: "source", first: "first" }, outputs: { ready: "ready" }, decls: 43, vars: 6, consts: [[1, "imageViewerContainer"], ["imageViewerContainer", ""], [1, "imageViewer", 3, "dragstart", "mousedown", "mousemove", "mouseup"], ["imageViewer", ""], [3, "src", "load"], ["showImg", ""], [1, "previousImg", 3, "click"], ["aria-hidden", "true", "title", "\u4E0A\u4E00\u5F20", 1, "fa", "fa-chevron-circle-left"], ["t", "1588945968636", "viewBox", "0 0 1024 1024", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "p-id", "18261", "width", "60", "height", "60", 1, "icon"], ["d", "M564.3264 737.0752l41.5744-41.5744-184.4224-184.1152 184.4224-184.1152-41.5744-41.5744L338.944 511.3856z", "p-id", "18262"], ["d", "M511.7952 101.5808c-226.304 0-409.8048 183.5008-409.8048 409.8048s183.5008 409.8048 409.8048 409.8048S921.6 737.792 921.6 511.3856 738.0992 101.5808 511.7952 101.5808z m0 58.5728c194.048 0 351.3344 157.2864 351.3344 351.3344s-157.3888 351.232-351.3344 351.232c-194.048 0-351.3344-157.2864-351.3344-351.3344 0-93.184 36.9664-182.4768 102.912-248.4224s155.2384-102.8096 248.4224-102.8096z", "p-id", "18263"], [1, "nextImg", 3, "click"], ["aria-hidden", "true", "title", "\u4E0B\u4E00\u5F20", 1, "fa", "fa-chevron-circle-right"], ["t", "1588946002551", "viewBox", "0 0 1024 1024", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "p-id", "18478", "width", "60", "height", "60", 1, "icon"], ["d", "M459.3664 737.0752L417.792 695.5008l184.4224-184.1152L417.792 327.2704l41.5744-41.5744 225.3824 225.6896z", "p-id", "18479"], ["d", "M511.7952 101.5808c-226.304 0-409.8048 183.5008-409.8048 409.8048s183.5008 409.8048 409.8048 409.8048S921.6 737.792 921.6 511.3856 738.0992 101.5808 511.7952 101.5808z m0 58.5728c194.048 0 351.3344 157.2864 351.3344 351.3344s-157.3888 351.232-351.3344 351.232c-194.048 0-351.3344-157.2864-351.3344-351.3344 0-93.184 36.9664-182.4768 102.912-248.4224s155.2384-102.8096 248.4224-102.8096z", "p-id", "18480"], ["class", "smallImageViewer", 4, "ngIf"], [1, "imageTools"], ["title", "\u653E\u5927", 1, "toolsBtn", "imageZoomin", 3, "click"], ["t", "1588941022678", "viewBox", "0 0 1027 1024", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "p-id", "8990", "width", "20", "height", "20", 1, "icon"], ["d", "M722.489 642.844c45.511-62.577 73.955-136.533 73.955-216.177 0-204.8-164.977-369.778-369.777-369.778S56.889 221.867 56.889 426.667s164.978 369.777 369.778 369.777c79.644 0 153.6-28.444 216.177-68.266l221.867 221.866c22.756 22.756 56.889 22.756 79.645 0 22.755-22.755 22.755-56.888 0-79.644L722.489 642.844z m-295.822 96.712c-170.667 0-312.89-142.223-312.89-312.89S256 113.779 426.668 113.779 739.556 256 739.556 426.667s-142.223 312.889-312.89 312.889", "p-id", "8991"], ["d", "M227.556 398.222h398.222v56.89H227.556z", "p-id", "8992"], ["d", "M398.222 227.556h56.89v398.222h-56.89z", "p-id", "8993"], ["title", "\u7F29\u5C0F", 1, "toolsBtn", "imageZoomout", 3, "click"], ["t", "1588941306698", "viewBox", "0 0 1024 1024", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "p-id", "9115", "width", "20", "height", "20", 1, "icon"], ["d", "M446.258717 823.960011c-51.124378 0-100.745519-10.005888-147.456377-29.814026-45.097104-19.050891-85.673242-46.388517-120.438023-81.153298-34.762735-34.764781-62.102407-75.340919-81.153298-120.438023-19.803022-46.709835-29.814026-96.324836-29.814026-147.449213s10.011005-100.745519 29.814026-147.456377c19.050891-45.097104 46.38954-85.673242 81.153298-120.438023 34.764781-34.762735 75.340919-62.102407 120.438023-81.153298 46.709835-19.803022 96.331999-29.814026 147.456377-29.814026 51.124378 0 100.739379 10.011005 147.449213 29.814026 45.097104 19.050891 85.673242 46.38954 120.438023 81.153298 34.764781 34.764781 62.102407 75.340919 81.153298 120.438023 19.808138 46.709835 29.813003 96.331999 29.813003 147.456377s-10.005888 100.739379-29.813003 147.449213c-19.050891 45.097104-46.388517 85.673242-81.153298 120.438023-34.764781 34.764781-75.340919 62.102407-120.438023 81.153298-46.604434 19.808138-96.220459 29.814026-147.449213 29.814026z m0-688.833451c-170.920788 0-309.97889 139.058103-309.978891 309.978891 0 170.915671 139.058103 309.971727 309.978891 309.971727 170.915671 0 309.971727-139.057079 309.971727-309.971727 0-170.920788-138.951679-309.97889-309.971727-309.978891z m0 0", "p-id", "9116"], ["d", "M924.025031 957.314205c-8.823969 0-17.646915-3.337002-24.321942-10.115382L680.137395 727.635175c-13.453407-13.453407-13.453407-35.307134 0-48.76054 13.453407-13.453407 35.300994-13.453407 48.755424 0l219.563648 219.565694c13.453407 13.453407 13.453407 35.305087 0 48.759518-6.779404 6.77838-15.603373 10.114358-24.431436 10.114358z m0 0", "p-id", "9117"], ["d", "M602.106204 488.047472H290.730501c-16.679891 0-30.133298-13.453407-30.133298-30.135344 0-16.685008 13.453407-30.139437 30.133298-30.139438h311.265186c16.687054 0 30.140461 13.453407 30.140461 30.139438 0 16.681938-13.45443 30.135344-30.029944 30.135344z m0 0", "p-id", "9118"], ["title", "\u5411\u5DE6\u65CB\u8F6C", 1, "toolsBtn", "rotateLeft", 3, "click"], ["t", "1588941359139", "viewBox", "0 0 1024 1024", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "p-id", "9333", "width", "20", "height", "20", 1, "icon"], ["d", "M296.78775165 822.42764344a29.24918237 29.24918237 0 0 0 11.88822868 9.74972721 366.76451243 366.76451243 0 0 0 423.03239697-29.18019793c162.18119742-127.48228586 196.37422746-360.55595902 75.100495-518.98903088S456.301571 100.94781045 292.07385008 230.29266234a90.07000608 90.07000608 0 0 0-13.17592873 10.96844358c-12.57806845-15.8433068-23.52351697-30.99677536-33.82511584-43.8047899-12.8769982-16.97004443-22.07485451-30.2149576-25.70800781-33.96308395a18.16576575 18.16576575 0 0 0-14.57860182-10.00266835 19.33849276 19.33849276 0 0 0-21.70694032 16.39517847l0.3679142 1.14973193-1.33368944 20.67218142-19.49945517 135.66837756-3.1502653 18.78662109-2.71336744 16.09624873a19.82137999 19.82137999 0 0 0 3.05828656 14.14170319 16.09624795 16.09624795 0 0 0 12.44010034 7.08234912l15.86630188 2.02352844 18.62565868 2.32245896 134.08174776 13.79678406 19.75239556 1.9085554 1.14973193-0.3679142a21.08608498 21.08608498 0 0 0 21.3850155-17.63688915 18.39571183 18.39571183 0 0 0-6.43849871-16.71710329c-2.52941073-4.1620299-12.83100961-16.97004443-25.68501352-33.94008965-8.82994211-12.09518046-19.49945518-26.00693834-30.19196253-39.96468481 3.90908875-3.90908875 9.26683997-6.99037039 13.19892302-10.92245345 132.33415478-104.39566674 320.33833383-85.49407262 418.52544794 43.22992316a306.51855469 306.51855469 0 0 1-61.25772156 422.98640759 298.07952184 298.07952184 0 0 1-349.05863961 20.94811763 33.94008889 33.94008889 0 0 0-38.49302728 3.35721709 33.71014281 33.71014281 0 0 0-6.94438178 47.92083044z", "fill", "#333333", "p-id", "9334"], ["title", "\u5411\u53F3\u65CB\u8F6C", 1, "toolsBtn", "rotateRight", 3, "click"], ["t", "1588941386678", "viewBox", "0 0 1024 1024", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "p-id", "9485", "width", "20", "height", "20", 1, "icon"], ["d", "M727.29746405 822.42764344a29.24918237 29.24918237 0 0 1-11.91122374 9.74972721 366.76451243 366.76451243 0 0 1-422.98640759-29.20319301C130.2416296 675.49189255 96.00261019 442.44121292 217.27634341 284.03113615s350.57628573-183.12931506 514.84999526-53.80745826a90.07000608 90.07000608 0 0 1 13.15293443 10.96844359c12.57806845-15.8203125 23.52351697-30.97378029 33.84811014-43.78179482 12.83100961-16.97004443 22.02886514-30.2149576 25.70800782-33.96308396a18.16576575 18.16576575 0 0 1 14.55560752-10.04865772 19.33849276 19.33849276 0 0 1 21.70694031 16.39517846l-0.34491988 1.14973194 1.33368941 20.69517649 19.36148706 135.76035631 3.17326038 18.7866211 2.71336744 16.09624793a19.82137999 19.82137999 0 0 1-3.05828733 14.14170397 16.09624795 16.09624795 0 0 1-12.44010035 7.05935405l-15.88929616 2.0465235-18.57966932 2.29946389-134.10474207 13.79678407-19.75239632 1.9315497-1.14973194-0.3909085a21.08608498 21.08608498 0 0 1-21.38501549-17.61389485 18.39571183 18.39571183 0 0 1 6.43849949-16.7171033c2.50641566-4.1850242 12.83100961-16.97004443 25.68501351-33.94008887 8.82994211-12.11817552 19.49945518-26.02993264 30.19196255-39.96468481-3.90908875-3.90908875-9.26683997-7.01336545-13.19892381-10.94544852-132.33415478-104.39566674-320.33833383-85.49407262-418.52544717 43.22992316A306.51855469 306.51855469 0 0 0 332.87039983 750.45441943a298.07952184 298.07952184 0 0 0 348.98965516 20.74116586 33.94008889 33.94008889 0 0 1 38.51602234 3.38021216 33.71014281 33.71014281 0 0 1 6.9443818 47.92082966z", "fill", "#333333", "p-id", "9486"], ["title", "\u5782\u76F4\u7FFB\u8F6C", 1, "toolsBtn", "flipVertical", 3, "click"], ["t", "1588941411559", "viewBox", "0 0 1024 1024", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "p-id", "9669", "width", "20", "height", "20", 1, "icon"], ["d", "M494.03 74.72l-109.59 144.09c-12.48 16.41-5.82 29.97 14.79000001 30.09L482 249.47 482 774.53l-82.77 0.54c-20.64 0.15-27.27 13.68-14.79 30.09l109.59 144.09c12.48 16.41 32.43 16.05 44.31000001-0.81l101.81999999-144.51c11.88-16.86 4.74-30.54-15.9-30.39L542.00000001 774.14l-1e-8-524.25 82.23 0.54c20.64 0.15 27.78-13.53 15.9-30.39l-101.82-144.51c-11.88-16.86-31.8-17.25-44.28-0.81z", "p-id", "9670"], ["title", "\u6C34\u5E73\u7FFB\u8F6C", 1, "toolsBtn", "flipHorizontal", 3, "click"], ["t", "1588941431636", "viewBox", "0 0 1024 1024", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "p-id", "9885", "width", "20", "height", "20", 1, "icon"], ["d", "M978.432 492.832l-153.696-116.896c-17.504-13.312-31.968-6.208-32.096 15.776L792.032 480H231.968l-0.608-88.288c-0.16-22.016-14.592-29.088-32.096-15.776l-153.696 116.896c-17.504 13.312-17.12 34.592 0.864 47.264l154.144 108.608c17.984 12.672 32.576 5.056 32.416-16.96L232.384 544h559.2l-0.576 87.712c-0.16 22.016 14.432 29.632 32.416 16.96l154.144-108.608c17.984-12.672 18.4-33.92 0.864-47.232z", "p-id", "9886"], ["title", "\u91CD\u7F6E", 1, "toolsBtn", "imageReset", 3, "click"], ["t", "1588941445066", "viewBox", "0 0 1024 1024", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "p-id", "10072", "width", "20", "height", "20", 1, "icon"], ["d", "M666.1 731.4c-48.6 35-105.6 52.5-163.8 51.8-7.7-0.1-15.3-0.7-22.9-1.3-3.1-0.3-6.1-0.8-9.2-1.3-6-0.8-11.9-1.5-17.7-2.8-3.6-0.6-7.2-1.7-10.6-2.5-5.7-1.3-11.4-2.6-16.9-4.3-2.6-1-5.1-1.9-7.8-3-6.5-2.1-12.9-4.4-19-7-1.4-0.6-2.8-1.2-4.1-1.7-7.2-3.4-14.4-6.9-21.3-10.6-0.3-0.2-0.6-0.3-0.9-0.5-23.5-13.3-44.9-29.6-63.7-49-0.3-0.3-0.6-0.7-0.9-1-5.8-6-11.4-12.2-16.7-18.9-1.1-1.4-2.1-2.7-3.3-4.3-38.2-49.1-61.2-111.3-61.2-178.8h73.6L182 314.7 64.2 496.1h73.5c0 79.4 24.2 153.1 65.2 214.2 0.5 0.9 0.8 1.9 1.4 2.6 4.2 6.3 9 12 13.5 17.8 1.8 2.1 3.3 4.3 5.1 6.7 6.6 8.2 13.9 16.1 21.1 23.8 0.8 0.8 1.4 1.4 2 2.1 24.7 25.4 52.4 46.6 82.7 63.8 0.8 0.5 1.5 0.8 2.4 1.4 8.7 4.8 17.7 9.3 26.7 13.3 2.3 1 4.5 2.1 6.7 3 7.8 3.4 15.8 6.2 23.8 9.1 3.8 1.4 7.5 2.6 11.4 3.9 7 2.1 14.2 3.9 21.5 5.6 4.8 1.2 9.5 2.4 14.4 3.4 2 0.5 3.9 1.2 5.9 1.4 6.9 1.3 13.7 1.9 20.5 2.8 2.5 0.5 5 0.9 7.4 1.2 12.3 1.2 24.5 2 36.8 2 74.7 0 147.7-23.5 210.3-68.5 19.9-14.4 24.8-42.7 10.9-63.1-13.9-20.8-41.3-25.7-61.3-11.2z m219.5-206.6c0-79.3-23.9-152.9-64.7-213.6-0.6-1-1-2.1-1.5-3-5.3-7.5-10.7-14.4-16.2-21.5-0.6-0.8-1.3-1.7-1.8-2.6-37.5-46.4-84.4-82.4-137.4-106-1.6-0.6-2.9-1.4-4.5-2-8.5-3.6-17.2-6.7-26-9.8-3-1-6.2-2.2-9.3-3.2-7.7-2.4-15.3-4.3-23.1-6.2-4.3-1-8.7-2.1-13-3-2.1-0.4-4.1-1-6.3-1.5-5.8-1-11.5-1.5-17.4-2.3-4.1-0.5-8-1.1-12-1.5-9.8-1-19.5-1.4-29.2-1.5-1.8 0-3.5-0.3-5.3-0.3-0.3 0-0.6 0.1-0.9 0.1-74.6 0.1-147.5 23.2-210 68.3-19.9 14.3-24.8 42.6-10.8 63.2 13.9 20.4 41.5 25.5 61.5 11 48.2-34.7 104.6-52.3 162.3-51.8 8.3 0.1 16.6 0.5 24.6 1.3 2.5 0.2 4.9 0.6 7.4 1 6.6 0.8 13.2 1.7 19.8 3.2 2.8 0.5 5.7 1.3 8.4 1.9 6.5 1.5 12.7 3 18.9 5 2.1 0.6 4 1.3 5.8 2.1 7.2 2.4 14.2 4.9 21 7.9 0.8 0.2 1.4 0.8 2.1 1 41.2 18.2 77.3 46.1 105.5 81.2 0.1 0.1 0.2 0.4 0.4 0.6 39.6 49.6 63.5 113 63.5 182h-73.7l117.9 181.5 117.6-181.5h-73.6z", "p-id", "10073"], [1, "smallImageViewer"], ["title", "\u5411\u5DE6\u67E5\u770B", 1, "toImg", "previousImgs", 3, "click"], ["t", "1588946161601", "viewBox", "0 0 1024 1024", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "p-id", "4499", "width", "16", "height", "16", 1, "icon"], ["d", "M854.656 182.656a32 32 0 1 0-45.312-45.312l-352 352a32 32 0 0 0 0 45.312l352 352a32 32 0 0 0 45.312-45.312L525.248 512l329.408-329.344z m-320 0a32 32 0 1 0-45.312-45.312l-352 352a32 32 0 0 0 0 45.312l352 352a32 32 0 0 0 45.312-45.312L205.248 512l329.408-329.344z", "fill", "#ffffff", "p-id", "4500"], ["title", "\u5411\u53F3\u67E5\u770B", 1, "toImg", "nextImgs", 3, "click"], ["t", "1588946137834", "viewBox", "0 0 1024 1024", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "p-id", "4373", "width", "16", "height", "16", 1, "icon"], ["d", "M556.8 535.893L170.667 149.76c-13.227-13.227-13.227-34.987 0-48.213 13.226-13.227 34.986-13.227 48.213 0L605.013 487.68c13.227 13.227 13.227 34.987 0 48.213-13.226 13.227-34.986 13.227-48.213 0z", "fill", "#ffffff", "p-id", "4374"], ["d", "M170.667 873.813L556.8 487.68c13.227-13.227 34.987-13.227 48.213 0 13.227 13.227 13.227 34.987 0 48.213L218.88 922.027c-13.227 13.226-34.987 13.226-48.213 0a33.493 33.493 0 0 1 0-48.214zM825.173 536.32L439.04 150.187c-13.227-13.227-13.227-34.987 0-48.214 13.227-13.226 34.987-13.226 48.213 0l386.134 386.134c13.226 13.226 13.226 34.986 0 48.213a33.493 33.493 0 0 1-48.214 0z", "fill", "#ffffff", "p-id", "4375"], ["d", "M439.04 874.24l386.133-386.133c13.227-13.227 34.987-13.227 48.214 0 13.226 13.226 13.226 34.986 0 48.213L487.253 922.453c-13.226 13.227-34.986 13.227-48.213 0-13.227-13.226-13.227-34.56 0-48.213z", "fill", "#ffffff", "p-id", "4376"], [1, "moreImg"], ["moreImg", ""], [3, "src", "click", 4, "ngFor", "ngForOf"], [3, "src", "click"]], template: function ImageViewerComponent_Template(rf, ctx) {
            if (rf & 1) {
                var _r13_1 = i0.ɵɵgetCurrentView();
                i0.ɵɵelementStart(0, "div", 0, 1);
                i0.ɵɵelementStart(2, "div", 2, 3);
                i0.ɵɵlistener("dragstart", function ImageViewerComponent_Template_div_dragstart_2_listener($event) { return ctx.cancleCurrentImageDrag($event); })("mousedown", function ImageViewerComponent_Template_div_mousedown_2_listener($event) { return ctx.currentImageDragStart($event); })("mousemove", function ImageViewerComponent_Template_div_mousemove_2_listener($event) { return ctx.currentImageDrag($event); })("mouseup", function ImageViewerComponent_Template_div_mouseup_2_listener($event) { return ctx.currentImageDragEnd($event); });
                i0.ɵɵelementStart(4, "img", 4, 5);
                i0.ɵɵlistener("load", function ImageViewerComponent_Template_img_load_4_listener() { i0.ɵɵrestoreView(_r13_1); var _r2 = i0.ɵɵreference(5); var _r1 = i0.ɵɵreference(3); return ctx.currentImageLoaded(_r2, _r1); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "div", 6);
                i0.ɵɵlistener("click", function ImageViewerComponent_Template_div_click_6_listener() { return ctx.preOrNextImg("pre"); });
                i0.ɵɵelementStart(7, "span", 7);
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(8, "svg", 8);
                i0.ɵɵelement(9, "path", 9);
                i0.ɵɵelement(10, "path", 10);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵnamespaceHTML();
                i0.ɵɵelementStart(11, "div", 11);
                i0.ɵɵlistener("click", function ImageViewerComponent_Template_div_click_11_listener() { return ctx.preOrNextImg("next"); });
                i0.ɵɵelementStart(12, "span", 12);
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(13, "svg", 13);
                i0.ɵɵelement(14, "path", 14);
                i0.ɵɵelement(15, "path", 15);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(16, ImageViewerComponent_div_16_Template, 12, 3, "div", 16);
                i0.ɵɵnamespaceHTML();
                i0.ɵɵelementStart(17, "div", 17);
                i0.ɵɵelementStart(18, "button", 18);
                i0.ɵɵlistener("click", function ImageViewerComponent_Template_button_click_18_listener() { return ctx.imageZoomin(); });
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(19, "svg", 19);
                i0.ɵɵelement(20, "path", 20);
                i0.ɵɵelement(21, "path", 21);
                i0.ɵɵelement(22, "path", 22);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵnamespaceHTML();
                i0.ɵɵelementStart(23, "button", 23);
                i0.ɵɵlistener("click", function ImageViewerComponent_Template_button_click_23_listener() { return ctx.imageZoomout(); });
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(24, "svg", 24);
                i0.ɵɵelement(25, "path", 25);
                i0.ɵɵelement(26, "path", 26);
                i0.ɵɵelement(27, "path", 27);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵnamespaceHTML();
                i0.ɵɵelementStart(28, "button", 28);
                i0.ɵɵlistener("click", function ImageViewerComponent_Template_button_click_28_listener() { return ctx.rotateLeft(); });
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(29, "svg", 29);
                i0.ɵɵelement(30, "path", 30);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵnamespaceHTML();
                i0.ɵɵelementStart(31, "button", 31);
                i0.ɵɵlistener("click", function ImageViewerComponent_Template_button_click_31_listener() { return ctx.rotateRight(); });
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(32, "svg", 32);
                i0.ɵɵelement(33, "path", 33);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵnamespaceHTML();
                i0.ɵɵelementStart(34, "button", 34);
                i0.ɵɵlistener("click", function ImageViewerComponent_Template_button_click_34_listener() { return ctx.flipVertical(); });
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(35, "svg", 35);
                i0.ɵɵelement(36, "path", 36);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵnamespaceHTML();
                i0.ɵɵelementStart(37, "button", 37);
                i0.ɵɵlistener("click", function ImageViewerComponent_Template_button_click_37_listener() { return ctx.flipHorizontal(); });
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(38, "svg", 38);
                i0.ɵɵelement(39, "path", 39);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵnamespaceHTML();
                i0.ɵɵelementStart(40, "button", 40);
                i0.ɵɵlistener("click", function ImageViewerComponent_Template_button_click_40_listener() { return ctx.currentImgReset(); });
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(41, "svg", 41);
                i0.ɵɵelement(42, "path", 42);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(1);
                i0.ɵɵadvance(2);
                i0.ɵɵstyleProp("width", _r0.style.width)("height", ctx.imageViewHeight);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("src", ctx.currentImageUrl, i0.ɵɵsanitizeUrl);
                i0.ɵɵadvance(12);
                i0.ɵɵproperty("ngIf", ctx.imageSources.length > 1);
            }
        }, directives: [i1$1.NgIf, i1$1.NgForOf], styles: [".imageViewerContainer[_ngcontent-%COMP%]{margin:0;padding:0;height:100%;min-width:400px;min-height:400px;background-color:#3e3e3e}.imageViewerContainer[_ngcontent-%COMP%]   .imageViewer[_ngcontent-%COMP%]{position:relative;overflow:hidden}.imageViewerContainer[_ngcontent-%COMP%]   .imageViewer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;border:0;padding:0;margin:0;width:auto;height:98%;visibility:visible;transition:all .5s ease-out}.imageViewerContainer[_ngcontent-%COMP%]   .imageViewer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:absolute;width:80px;height:100%;background:rgba(112,109,109,0);transition:all .5s}.imageViewerContainer[_ngcontent-%COMP%]   .imageViewer[_ngcontent-%COMP%]   div.previousImg[_ngcontent-%COMP%]{top:0;left:0}.imageViewerContainer[_ngcontent-%COMP%]   .imageViewer[_ngcontent-%COMP%]   div.nextImg[_ngcontent-%COMP%]{top:0;right:0}.imageViewerContainer[_ngcontent-%COMP%]   .imageViewer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover{background:rgba(112,109,109,.5)}.imageViewerContainer[_ngcontent-%COMP%]   .imageViewer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{opacity:1;color:#f5f5f5}.imageViewerContainer[_ngcontent-%COMP%]   .imageViewer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;font-size:60px;width:1em;height:1em;text-align:center;top:50%;margin-top:-30px;left:50%;margin-left:-30px;opacity:.2;color:#797979;transition:all .5s;cursor:pointer}.imageViewerContainer[_ngcontent-%COMP%]   .smallImageViewer[_ngcontent-%COMP%]{border-top:2px solid #888484;border-bottom:2px solid #888484;margin-top:2px;height:50px;position:relative;overflow:hidden;white-space:nowrap}.imageViewerContainer[_ngcontent-%COMP%]   .smallImageViewer[_ngcontent-%COMP%]   .moreImg[_ngcontent-%COMP%]{height:100%;position:absolute;z-index:1;top:0;transition:left .6s ease-out}.imageViewerContainer[_ngcontent-%COMP%]   .smallImageViewer[_ngcontent-%COMP%]   .moreImg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:relative;cursor:pointer;margin:0 2px 0 0;height:100%;transform:scale(1);transition:transform .5s;z-index:1}.imageViewerContainer[_ngcontent-%COMP%]   .smallImageViewer[_ngcontent-%COMP%]   .moreImg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{transform:scale(1.5);z-index:2}.imageViewerContainer[_ngcontent-%COMP%]   .smallImageViewer[_ngcontent-%COMP%]   .toImg[_ngcontent-%COMP%]{height:100%;width:25px;color:#fff;text-align:center;line-height:50px;font-weight:700;opacity:.8;cursor:pointer;overflow:hidden;background-color:#3e3e3e;position:absolute;z-index:9;top:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:opacity .5s}.imageViewerContainer[_ngcontent-%COMP%]   .smallImageViewer[_ngcontent-%COMP%]   .toImg[_ngcontent-%COMP%]:hover{opacity:1}.imageViewerContainer[_ngcontent-%COMP%]   .smallImageViewer[_ngcontent-%COMP%]   .previousImgs[_ngcontent-%COMP%]{left:0}.imageViewerContainer[_ngcontent-%COMP%]   .smallImageViewer[_ngcontent-%COMP%]   .nextImgs[_ngcontent-%COMP%]{right:0}.imageViewerContainer[_ngcontent-%COMP%]   .imageTools[_ngcontent-%COMP%]{text-align:center;height:46px;line-height:46px}.imageViewerContainer[_ngcontent-%COMP%]   .imageTools[_ngcontent-%COMP%]   .toolsBtn[_ngcontent-%COMP%]{margin:0 5px;padding:4px 8px;color:#3e3e3e;font-size:16px;font-weight:400;line-height:1.5;display:inline-block;text-align:center;white-space:nowrap;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-image:none;background-color:#fff;border:1px solid #ccc;border-radius:4px;cursor:pointer;transition:all .3s}.imageViewerContainer[_ngcontent-%COMP%]   .imageTools[_ngcontent-%COMP%]   .toolsBtn[_ngcontent-%COMP%]:hover{color:#fff;background-color:#3e3e3e;border-color:#888484}"] });
    exports.ImageViewerComponent = __decorate([
        ComponentRegister({
            uri: "image-viewer",
            path: "components/shared/ngxviewer/image-viewer"
        })
    ], exports.ImageViewerComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(exports.ImageViewerComponent, [{
                type: i0.Component,
                args: [{
                        selector: "image-viewer",
                        templateUrl: "./image-viewer.component.html",
                        styleUrls: ["./image-viewer.component.scss"],
                    }]
            }], function () { return [{ type: i1$2.DomSanitizer }, { type: EventEmitterService }]; }, { imageViewerContainer: [{
                    type: i0.ViewChild,
                    args: ["imageViewerContainer"]
                }], showImg: [{
                    type: i0.ViewChild,
                    args: ["showImg"]
                }], width: [{
                    type: i0.Input
                }], height: [{
                    type: i0.Input
                }], source: [{
                    type: i0.Input
                }], first: [{
                    type: i0.Input
                }], ready: [{
                    type: i0.Output
                }] });
    })();

    var _c0$e = ["videoToolbar"];
    var _c1$8 = function (a0, a1) { return { "label-default": a0, "label-primary": a1 }; };
    function VideoViewerComponent_span_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r7_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "span", 9);
            i0.ɵɵlistener("click", function VideoViewerComponent_span_1_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r7_1); var video_r4 = ctx.$implicit; var i_r5 = ctx.index; var ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.selectVideo(video_r4, i_r5); });
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var i_r5 = ctx.index;
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(2, _c1$8, i_r5 != ctx_r0.sub, i_r5 == ctx_r0.sub));
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("\u89C6\u9891", i_r5 + 1, " ");
        }
    }
    var _c2$3 = function (a0, a1) { return { "fa-repeat": a0, "fa-play-circle-o": a1 }; };
    function VideoViewerComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
            var _r9_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "span", 10);
            i0.ɵɵlistener("click", function VideoViewerComponent_div_7_Template_span_click_1_listener() { i0.ɵɵrestoreView(_r9_1); var ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.playOrPause(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(2, _c2$3, ctx_r2.videoElem.ended, !ctx_r2.videoElem.ended))("title", ctx_r2.videoElem.ended ? "\u91CD\u64AD" : "\u64AD\u653E");
        }
    }
    function VideoViewerComponent_div_8_span_11_Template(rf, ctx) {
        if (rf & 1) {
            var _r15_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "span", 29);
            i0.ɵɵlistener("click", function VideoViewerComponent_div_8_span_11_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r15_1); var ctx_r14 = i0.ɵɵnextContext(2); return ctx_r14.playOrPause(); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r11 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("title", ctx_r11.videoElem.ended ? "\u91CD\u64AD" : "\u64AD\u653E");
        }
    }
    function VideoViewerComponent_div_8_span_12_Template(rf, ctx) {
        if (rf & 1) {
            var _r17_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "span", 30);
            i0.ɵɵlistener("click", function VideoViewerComponent_div_8_span_12_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r17_1); var ctx_r16 = i0.ɵɵnextContext(2); return ctx_r16.playOrPause(); });
            i0.ɵɵelementEnd();
        }
    }
    var _c3$2 = function (a0, a1, a2) { return { "fa-volume-down": a0, "fa-volume-up": a1, "fa-volume-off": a2 }; };
    function VideoViewerComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
            var _r19_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 11, 12);
            i0.ɵɵelementStart(2, "div", 13);
            i0.ɵɵelementStart(3, "span", 14);
            i0.ɵɵlistener("mousedown", function VideoViewerComponent_div_8_Template_span_mousedown_3_listener($event) { i0.ɵɵrestoreView(_r19_1); var ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.progressBallDragStart($event); })("mousemove", function VideoViewerComponent_div_8_Template_span_mousemove_3_listener($event) { i0.ɵɵrestoreView(_r19_1); var ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.progressBallDrag($event); })("mouseup", function VideoViewerComponent_div_8_Template_span_mouseup_3_listener($event) { i0.ɵɵrestoreView(_r19_1); var ctx_r21 = i0.ɵɵnextContext(); return ctx_r21.progressBallDragEnd($event); })("mouseleave", function VideoViewerComponent_div_8_Template_span_mouseleave_3_listener($event) { i0.ɵɵrestoreView(_r19_1); var ctx_r22 = i0.ɵɵnextContext(); return ctx_r22.progressBallDragEnd($event); });
            i0.ɵɵelementStart(4, "span");
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 15);
            i0.ɵɵlistener("mousemove", function VideoViewerComponent_div_8_Template_div_mousemove_6_listener($event) { i0.ɵɵrestoreView(_r19_1); var ctx_r23 = i0.ɵɵnextContext(); return ctx_r23.videoToolbarProgressMove($event); })("click", function VideoViewerComponent_div_8_Template_div_click_6_listener($event) { i0.ɵɵrestoreView(_r19_1); var ctx_r24 = i0.ɵɵnextContext(); return ctx_r24.videoToolbarProgressClick($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 16);
            i0.ɵɵlistener("mousemove", function VideoViewerComponent_div_8_Template_div_mousemove_7_listener($event) { i0.ɵɵrestoreView(_r19_1); var ctx_r25 = i0.ɵɵnextContext(); return ctx_r25.videoToolbarProgressMove($event); })("click", function VideoViewerComponent_div_8_Template_div_click_7_listener($event) { i0.ɵɵrestoreView(_r19_1); var ctx_r26 = i0.ɵɵnextContext(); return ctx_r26.videoToolbarProgressClick($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "span", 17);
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "div", 18);
            i0.ɵɵtemplate(11, VideoViewerComponent_div_8_span_11_Template, 1, 1, "span", 19);
            i0.ɵɵtemplate(12, VideoViewerComponent_div_8_span_12_Template, 1, 0, "span", 20);
            i0.ɵɵelementStart(13, "span", 21);
            i0.ɵɵelementStart(14, "span");
            i0.ɵɵtext(15);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(16);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "div", 22);
            i0.ɵɵelementStart(18, "span", 23);
            i0.ɵɵlistener("click", function VideoViewerComponent_div_8_Template_span_click_18_listener() { i0.ɵɵrestoreView(_r19_1); var ctx_r27 = i0.ɵɵnextContext(); return ctx_r27.isMuted(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "span", 24, 25);
            i0.ɵɵelementStart(21, "span", 26);
            i0.ɵɵlistener("mousedown", function VideoViewerComponent_div_8_Template_span_mousedown_21_listener($event) { i0.ɵɵrestoreView(_r19_1); var ctx_r28 = i0.ɵɵnextContext(); return ctx_r28.volumeBallDragStart($event); })("mousemove", function VideoViewerComponent_div_8_Template_span_mousemove_21_listener($event) { i0.ɵɵrestoreView(_r19_1); var _r13 = i0.ɵɵreference(20); var ctx_r29 = i0.ɵɵnextContext(); return ctx_r29.volumeBallDrag($event, _r13.clientWidth); })("mouseup", function VideoViewerComponent_div_8_Template_span_mouseup_21_listener($event) { i0.ɵɵrestoreView(_r19_1); var ctx_r30 = i0.ɵɵnextContext(); return ctx_r30.volumeBallDragEnd($event); })("mouseleave", function VideoViewerComponent_div_8_Template_span_mouseleave_21_listener($event) { i0.ɵɵrestoreView(_r19_1); var ctx_r31 = i0.ɵɵnextContext(); return ctx_r31.volumeBallDragEnd($event); });
            i0.ɵɵelementStart(22, "span");
            i0.ɵɵtext(23);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "span", 27);
            i0.ɵɵlistener("click", function VideoViewerComponent_div_8_Template_span_click_24_listener($event) { i0.ɵɵrestoreView(_r19_1); var _r13 = i0.ɵɵreference(20); var ctx_r32 = i0.ɵɵnextContext(); return ctx_r32.volumeValClick($event, _r13.clientWidth); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "span", 28);
            i0.ɵɵlistener("click", function VideoViewerComponent_div_8_Template_span_click_25_listener($event) { i0.ɵɵrestoreView(_r19_1); var _r13 = i0.ɵɵreference(20); var ctx_r33 = i0.ɵɵnextContext(); return ctx_r33.volumeValClick($event, _r13.clientWidth); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var _r10 = i0.ɵɵreference(1);
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵadvance(2);
            i0.ɵɵstyleProp("height", ctx_r3.videoToolbarProgressHeight + "px");
            i0.ɵɵadvance(1);
            i0.ɵɵstyleProp("left", ctx_r3.play_progress + "px")("margin-left", ctx_r3.play_progress > 16 ? "-16px" : "0")("opacity", ctx_r3.showProgressBall ? 1 : 0);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx_r3.getFormatTime(ctx_r3.play_progress / _r10.clientWidth * ctx_r3.videoElem.duration), " ");
            i0.ɵɵadvance(1);
            i0.ɵɵstyleProp("width", ctx_r3.play_progress + "px");
            i0.ɵɵadvance(2);
            i0.ɵɵstyleProp("left", ctx_r3.timeTipOffsetX - 16 + "px");
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx_r3.timeTip, " ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx_r3.videoElem.paused);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx_r3.videoElem.paused);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx_r3.currentTime);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("\u00A0/\u00A0", ctx_r3.totalTime, " ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(24, _c3$2, ctx_r3.videoElem.volume > 0 && ctx_r3.videoElem.volume < 0.5, ctx_r3.videoElem.volume >= 0.5, ctx_r3.videoElem.volume == 0));
            i0.ɵɵadvance(3);
            i0.ɵɵstyleProp("left", ctx_r3.videoElem.volume * 100 - 8 + "px");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", (ctx_r3.videoElem.volume * 100).toFixed(0) + "%", " ");
            i0.ɵɵadvance(1);
            i0.ɵɵstyleProp("width", ctx_r3.videoElem.volume * 100 + "px");
        }
    }
    exports.VideoViewerComponent = /** @class */ (function () {
        function VideoViewerComponent(domSanitizer) {
            this.domSanitizer = domSanitizer;
            this.width = 0;
            this.videoWidth = 0;
            this.height = 0;
            this.source = [];
            this.ready = new i0.EventEmitter(false);
            this.sub = 0;
            this.play_progress = 0;
            this.videoToolbarProgressHeight = 3;
            this.preVolume = 1;
            this.showProgressBall = false;
            this.progressBallDragStartClientX = 0;
            this.isProgressBallStartMove = false;
            this.volumeBallDragStartClientX = 0;
            this.isVolumeBallStartMove = false;
            this.timeTipOffsetX = 0;
        }
        VideoViewerComponent.prototype.ngOnInit = function () {
            this.videoUrl = this.source[0];
            this.ready.emit('video viewer initialize!');
        };
        VideoViewerComponent.prototype.onLoadedmetadata = function (e) {
            this.videoElem = e.target;
            this.totalTime = this.getFormatTime(this.videoElem.duration);
            this.currentTime = this.getFormatTime(this.videoElem.currentTime);
        };
        VideoViewerComponent.prototype.OnPlayEnded = function (e) {
            console.log("\u64AD\u653E\u7ED3\u675F\uFF1A" + this.videoElem.ended);
        };
        VideoViewerComponent.prototype.onPlay = function (e) {
            console.log('play');
        };
        VideoViewerComponent.prototype.onTimeupdate = function (e) {
            this.currentTime = this.getFormatTime(this.videoElem.currentTime);
            this.play_progress = this.videoElem.currentTime / this.videoElem.duration * this.videoToolbar.nativeElement.clientWidth;
        };
        VideoViewerComponent.prototype.onProgress = function (e) {
            console.log('progress');
        };
        VideoViewerComponent.prototype.onCanplaythrough = function (e) {
            console.log('canplaythrough');
        };
        VideoViewerComponent.prototype.videoToolbarProgressClick = function (e) {
            this.play_progress = e.offsetX;
            var tempCurrentTime = this.play_progress / this.videoToolbar.nativeElement.clientWidth * this.videoElem.duration;
            this.videoElem.currentTime = tempCurrentTime;
            this.currentTime = this.getFormatTime(tempCurrentTime);
        };
        VideoViewerComponent.prototype.videoToolbarProgressMove = function (e) {
            var tempCurrentTime = e.offsetX / this.videoToolbar.nativeElement.clientWidth * this.videoElem.duration;
            this.timeTipOffsetX = e.offsetX;
            this.timeTip = this.getFormatTime(tempCurrentTime);
        };
        VideoViewerComponent.prototype.progressBallDragStart = function (e) {
            e.stopPropagation();
            this.progressBallDragStartClientX = e.clientX;
            this.isProgressBallStartMove = true;
        };
        VideoViewerComponent.prototype.progressBallDrag = function (e) {
            e.stopPropagation();
            if (this.isProgressBallStartMove) {
                var offsetX = e.clientX - this.progressBallDragStartClientX;
                this.progressBallDragStartClientX = e.clientX;
                this.play_progress = (this.play_progress + offsetX);
                if (this.play_progress >= this.videoToolbar.nativeElement.clientWidth) {
                    this.play_progress = this.videoToolbar.nativeElement.clientWidth;
                }
                else if (this.play_progress <= 0) {
                    this.play_progress = 0;
                }
                var tempCurrentTime = this.play_progress / this.videoToolbar.nativeElement.clientWidth * this.videoElem.duration;
                this.videoElem.currentTime = tempCurrentTime;
                this.currentTime = this.getFormatTime(tempCurrentTime);
            }
        };
        VideoViewerComponent.prototype.progressBallDragEnd = function (e) {
            e.stopPropagation();
            this.isProgressBallStartMove = false;
        };
        VideoViewerComponent.prototype.volumeValClick = function (e, width) {
            console.log(e.offsetX);
            this.videoElem.volume = e.offsetX / width;
        };
        VideoViewerComponent.prototype.volumeBallDragStart = function (e) {
            e.stopPropagation();
            this.volumeBallDragStartClientX = e.clientX;
            this.isVolumeBallStartMove = true;
        };
        VideoViewerComponent.prototype.volumeBallDrag = function (e, width) {
            e.stopPropagation();
            if (this.isVolumeBallStartMove) {
                var offsetX = e.clientX - this.volumeBallDragStartClientX;
                this.volumeBallDragStartClientX = e.clientX;
                var volume = this.videoElem.volume + offsetX / width;
                if (volume <= 0) {
                    this.videoElem.volume = 0;
                }
                else if (volume >= 1) {
                    this.videoElem.volume = 1;
                }
                else {
                    this.videoElem.volume = volume;
                }
            }
        };
        VideoViewerComponent.prototype.volumeBallDragEnd = function (e) {
            e.stopPropagation();
            this.isVolumeBallStartMove = false;
        };
        VideoViewerComponent.prototype.videoMouseover = function (e) {
            this.videoToolbarProgressHeight = 16;
            this.showProgressBall = true;
        };
        VideoViewerComponent.prototype.videoMouseout = function (e) {
            this.videoToolbarProgressHeight = 3;
            this.showProgressBall = false;
        };
        VideoViewerComponent.prototype.play = function () {
            this.videoElem.ended && (this.videoElem.currentTime = 0);
            this.videoElem.play();
        };
        VideoViewerComponent.prototype.pause = function () {
            this.videoElem.pause();
        };
        VideoViewerComponent.prototype.playOrPause = function () {
            this.videoElem.paused ? this.play() : this.pause();
        };
        VideoViewerComponent.prototype.selectVideo = function (path, i) {
            this.sub = JSON.parse(JSON.stringify(i));
            this.videoUrl = path;
            this.videoElem.load();
        };
        VideoViewerComponent.prototype.isMuted = function () {
            if (this.videoElem.muted) {
                this.videoElem.muted = false;
                this.videoElem.volume = this.preVolume;
            }
            else {
                this.videoElem.muted = true;
                this.preVolume = this.videoElem.volume;
                this.videoElem.volume = 0;
            }
        };
        VideoViewerComponent.prototype.getFormatTime = function (value) {
            var h = parseInt(value / 3600 + '') < 10 ? '0' + parseInt(value / 3600 + '') : '' + parseInt(value / 3600 + ''), m = parseInt(value % 3600 / 60 + '') < 10 ? '0' + parseInt(value % 3600 / 60 + '') : '' + parseInt(value % 3600 / 60 + ''), s;
            if (value >= 60) {
                s = value % 3600 % 60 < 10 ? '0' + parseInt(value % 3600 % 60 + '') : '' + parseInt(value % 3600 % 60 + '');
            }
            else if (value < 60 && value >= 10) {
                s = '' + parseInt(value + '');
            }
            else if (value < 10) {
                s = '0' + parseInt(value + '');
            }
            return h + ":" + m + ":" + s;
        };
        return VideoViewerComponent;
    }());
    exports.VideoViewerComponent.ɵfac = function VideoViewerComponent_Factory(t) { return new (t || exports.VideoViewerComponent)(i0.ɵɵdirectiveInject(i1$2.DomSanitizer)); };
    exports.VideoViewerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: exports.VideoViewerComponent, selectors: [["video-viewer"]], viewQuery: function VideoViewerComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0$e, 3);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.videoToolbar = _t.first);
            }
        }, inputs: { width: "width", videoWidth: "videoWidth", height: "height", source: "source", poster: "poster" }, outputs: { ready: "ready" }, decls: 9, vars: 8, consts: [[1, "video-list"], ["class", "label", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "videoViewerContainer", 3, "mouseover", "mouseout"], ["videoViewerContainer", ""], [1, "videoViewer"], [3, "width", "poster", "click", "loadedmetadata", "ended", "timeupdate", "progress", "canplaythrough", "play"], ["type", "video/mp4", 3, "src"], [4, "ngIf"], ["class", "videoToolbar", 4, "ngIf"], [1, "label", 3, "ngClass", "click"], [1, "fa", 3, "ngClass", "title", "click"], [1, "videoToolbar"], ["videoToolbar", ""], [1, "videoToolbar_progress"], [1, "progress_val_ball", 3, "mousedown", "mousemove", "mouseup", "mouseleave"], [1, "videoToolbar_play_progress", 3, "mousemove", "click"], [1, "videoToolbar_buffer_progress", 3, "mousemove", "click"], [1, "timeTip"], [1, "videoToolbar_play_btn"], ["class", "playBtn fa fa-play-circle-o", "aria-hidden", "true", 3, "title", "click", 4, "ngIf"], ["class", "playBtn fa fa-pause-circle-o", "aria-hidden", "true", "title", "\u6682\u505C", 3, "click", 4, "ngIf"], [1, "playTime"], [1, "videoToolbar_volume_btn"], ["aria-hidden", "true", "title", "\u9759\u97F3\u8BBE\u7F6E", 1, "mutedBtn", "fa", 3, "ngClass", "click"], [1, "volume_val"], ["volume_val", ""], [1, "volume_val_ball", 3, "mousedown", "mousemove", "mouseup", "mouseleave"], [1, "volume_val_active", 3, "click"], [1, "volume_val_notActive", 3, "click"], ["aria-hidden", "true", 1, "playBtn", "fa", "fa-play-circle-o", 3, "title", "click"], ["aria-hidden", "true", "title", "\u6682\u505C", 1, "playBtn", "fa", "fa-pause-circle-o", 3, "click"]], template: function VideoViewerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p", 0);
                i0.ɵɵtemplate(1, VideoViewerComponent_span_1_Template, 2, 5, "span", 1);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "div", 2, 3);
                i0.ɵɵlistener("mouseover", function VideoViewerComponent_Template_div_mouseover_2_listener($event) { return ctx.videoMouseover($event); })("mouseout", function VideoViewerComponent_Template_div_mouseout_2_listener($event) { return ctx.videoMouseout($event); });
                i0.ɵɵelementStart(4, "div", 4);
                i0.ɵɵelementStart(5, "video", 5);
                i0.ɵɵlistener("click", function VideoViewerComponent_Template_video_click_5_listener() { return ctx.playOrPause(); })("loadedmetadata", function VideoViewerComponent_Template_video_loadedmetadata_5_listener($event) { return ctx.onLoadedmetadata($event); })("ended", function VideoViewerComponent_Template_video_ended_5_listener($event) { return ctx.OnPlayEnded($event); })("timeupdate", function VideoViewerComponent_Template_video_timeupdate_5_listener($event) { return ctx.onTimeupdate($event); })("progress", function VideoViewerComponent_Template_video_progress_5_listener($event) { return ctx.onProgress($event); })("canplaythrough", function VideoViewerComponent_Template_video_canplaythrough_5_listener($event) { return ctx.onCanplaythrough($event); })("play", function VideoViewerComponent_Template_video_play_5_listener($event) { return ctx.onPlay($event); });
                i0.ɵɵelement(6, "source", 6);
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(7, VideoViewerComponent_div_7_Template, 2, 5, "div", 7);
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(8, VideoViewerComponent_div_8_Template, 26, 28, "div", 8);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.source);
                i0.ɵɵadvance(1);
                i0.ɵɵstyleProp("width", ctx.width + "px");
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("width", ctx.videoWidth)("poster", ctx.poster, i0.ɵɵsanitizeUrl);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("src", ctx.videoUrl, i0.ɵɵsanitizeUrl);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.videoElem && ctx.videoElem.paused);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.videoElem);
            }
        }, directives: [i1$1.NgForOf, i1$1.NgIf, i1$1.NgClass], styles: ["p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{cursor:pointer;margin-right:6px}.videoViewerContainer[_ngcontent-%COMP%]{position:relative;margin:0;padding:0;height:100%;min-width:200px;min-height:200px;background-color:#3e3e3e}.videoViewerContainer[_ngcontent-%COMP%]   .videoViewer[_ngcontent-%COMP%]{position:relative;margin-bottom:53px}.videoViewerContainer[_ngcontent-%COMP%]   .videoViewer[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{display:block;margin-left:50%;transform:translateX(-50%)}.videoViewerContainer[_ngcontent-%COMP%]   .videoViewer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:absolute;top:0;left:0;bottom:0;right:0;background:rgba(62,62,62,.5)}.videoViewerContainer[_ngcontent-%COMP%]   .videoViewer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:80px;position:absolute;left:50%;top:50%;margin-left:-40px;margin-top:-40px;color:#e2e2e2;transition:color .8s}.videoViewerContainer[_ngcontent-%COMP%]   .videoViewer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{color:#4bcef2;cursor:pointer}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]{position:absolute;width:100%;left:0;bottom:0;font-size:40px;color:#bfb9b9}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_play_btn[_ngcontent-%COMP%]{float:left;padding:0 10px}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_play_btn[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:inline-block;margin-right:20px}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_play_btn[_ngcontent-%COMP%] > span.playBtn[_ngcontent-%COMP%]:hover{color:#45bdde;cursor:pointer}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_play_btn[_ngcontent-%COMP%] > span.playTime[_ngcontent-%COMP%]{font-size:.5em;vertical-align:middle}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_play_btn[_ngcontent-%COMP%] > span.playTime[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#e2e2e2}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_volume_btn[_ngcontent-%COMP%]{float:right;padding:0 15px}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_volume_btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;cursor:pointer;font-size:.8em}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_volume_btn[_ngcontent-%COMP%]   span.mutedBtn[_ngcontent-%COMP%]{height:32px;width:32px;text-align:left;line-height:32px}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_volume_btn[_ngcontent-%COMP%]   span.volume_val[_ngcontent-%COMP%]{position:relative;width:100px;margin-bottom:3px;height:6px;vertical-align:middle;cursor:pointer}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_volume_btn[_ngcontent-%COMP%]   span.volume_val[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;border-radius:2px}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_volume_btn[_ngcontent-%COMP%]   span.volume_val[_ngcontent-%COMP%] > span.volume_val_ball[_ngcontent-%COMP%]{bottom:0;height:16px;width:16px;border-radius:16px;background:#e2e2e2;z-index:3;margin-bottom:-5px}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_volume_btn[_ngcontent-%COMP%]   span.volume_val[_ngcontent-%COMP%] > span.volume_val_ball[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;display:none;font-size:12px;top:-25px;left:-8px;padding:2px;background:#000;color:#fff}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_volume_btn[_ngcontent-%COMP%]   span.volume_val[_ngcontent-%COMP%] > span.volume_val_ball[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{display:inline-block}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_volume_btn[_ngcontent-%COMP%]   span.volume_val[_ngcontent-%COMP%] > span.volume_val_active[_ngcontent-%COMP%]{z-index:2;background:#45bdde}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_volume_btn[_ngcontent-%COMP%]   span.volume_val[_ngcontent-%COMP%] > span.volume_val_notActive[_ngcontent-%COMP%]{z-index:1;background:#989393}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_progress[_ngcontent-%COMP%]{position:relative;width:100%;background:rgba(112,109,109,.6);transition:height .5s;cursor:pointer}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_progress[_ngcontent-%COMP%]   .timeTip[_ngcontent-%COMP%]{position:absolute;display:none;top:-25px;left:-16px;padding:2px;background:#000;font-size:12px;color:#fff}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_progress[_ngcontent-%COMP%]   .progress_val_ball[_ngcontent-%COMP%]{position:absolute;left:0;bottom:0;height:16px;width:16px;border-radius:16px;background:#f7f7f7;z-index:3;opacity:0;transition:opacity .5s;font-size:12px}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_progress[_ngcontent-%COMP%]   .progress_val_ball[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;display:none;top:-25px;left:-16px;padding:2px;background:#000;color:#fff}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_progress[_ngcontent-%COMP%]   .progress_val_ball[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{display:inline-block}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_progress[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:absolute;width:0;height:100%;border-radius:16px}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_progress[_ngcontent-%COMP%]   div.videoToolbar_play_progress[_ngcontent-%COMP%]{z-index:2;background:#45bdde}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_progress[_ngcontent-%COMP%]   div.videoToolbar_play_progress[_ngcontent-%COMP%]:hover ~ .timeTip[_ngcontent-%COMP%]{display:inline-block}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_progress[_ngcontent-%COMP%]   div.videoToolbar_buffer_progress[_ngcontent-%COMP%]{width:100%;z-index:1;background:rgba(191,185,185,.6)}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_progress[_ngcontent-%COMP%]   div.videoToolbar_buffer_progress[_ngcontent-%COMP%]:hover ~ .timeTip[_ngcontent-%COMP%]{display:inline-block}"] });
    exports.VideoViewerComponent = __decorate([
        ComponentRegister({
            uri: 'video-viewer',
            path: "components/shared/ngxviewer/video-viewer"
        })
    ], exports.VideoViewerComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(exports.VideoViewerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'video-viewer',
                        templateUrl: './video-viewer.component.html',
                        styleUrls: ['./video-viewer.component.scss']
                    }]
            }], function () { return [{ type: i1$2.DomSanitizer }]; }, { videoToolbar: [{
                    type: i0.ViewChild,
                    args: ['videoToolbar', { static: true }]
                }], width: [{
                    type: i0.Input
                }], videoWidth: [{
                    type: i0.Input
                }], height: [{
                    type: i0.Input
                }], source: [{
                    type: i0.Input
                }], poster: [{
                    type: i0.Input
                }], ready: [{
                    type: i0.Output
                }] });
    })();

    function EpsGISNgxViewerComponent_pdf_viewer_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r4_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "pdf-viewer", 4);
            i0.ɵɵlistener("ready", function EpsGISNgxViewerComponent_pdf_viewer_1_Template_pdf_viewer_ready_0_listener($event) { i0.ɵɵrestoreView(_r4_1); var ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.viewerReady($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("width", ctx_r0.width)("height", ctx_r0.height)("source", ctx_r0.source)("viewerUrl", ctx_r0.viewerUrl);
        }
    }
    function EpsGISNgxViewerComponent_image_viewer_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r6_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "image-viewer", 5);
            i0.ɵɵlistener("ready", function EpsGISNgxViewerComponent_image_viewer_2_Template_image_viewer_ready_0_listener($event) { i0.ɵɵrestoreView(_r6_1); var ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.viewerReady($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵproperty("source", ctx_r1.source)("width", ctx_r1.width)("height", ctx_r1.height)("first", ctx_r1.first);
        }
    }
    function EpsGISNgxViewerComponent_video_viewer_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r8_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "video-viewer", 6);
            i0.ɵɵlistener("ready", function EpsGISNgxViewerComponent_video_viewer_3_Template_video_viewer_ready_0_listener($event) { i0.ɵɵrestoreView(_r8_1); var ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.viewerReady($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵproperty("poster", ctx_r2.poster)("source", ctx_r2.source)("width", ctx_r2.width)("videoWidth", ctx_r2.videoWidth)("height", ctx_r2.height);
        }
    }
    exports.EpsGISNgxViewerComponent = /** @class */ (function () {
        function EpsGISNgxViewerComponent(activatedRoute, injector) {
            this.activatedRoute = activatedRoute;
            this.injector = injector;
            this.model = 'pdf';
            this.width = 600;
            this.videoWidth = 400;
            this.height = 800;
            this.poster = '';
            this.viewerUrl = '';
            this.first = 0;
            this.ready = new i0.EventEmitter(false);
        }
        EpsGISNgxViewerComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.activatedRoute.params.subscribe(function (param) {
                if (param['model']) {
                    _this.model = param['model'];
                }
                if (param['source']) {
                    _this.source = param['source'];
                }
                if (param['width']) {
                    _this.width = param['width'];
                }
                if (param['width']) {
                    _this.width = param['width'];
                }
                if (param['videoWidth']) {
                    _this.videoWidth = param['videoWidth'];
                }
                if (param['height']) {
                    _this.height = param['height'];
                }
                if (param['poster']) {
                    _this.poster = param['poster'];
                }
                if (param['viewerUrl']) {
                    _this.viewerUrl = param['viewerUrl'];
                }
                if (param['first']) {
                    _this.first = param['first'];
                }
            });
            this.model = this.injector.get("model", this.model);
            this.source = this.injector.get("source", this.source);
            this.width = this.injector.get("width", this.width);
            this.videoWidth = this.injector.get("videoWidth", this.videoWidth);
            this.height = this.injector.get("height", this.height);
            this.poster = this.injector.get("poster", this.poster);
            this.viewerUrl = this.injector.get("viewerUrl", this.viewerUrl);
            this.first = this.injector.get("first", this.first);
        };
        EpsGISNgxViewerComponent.prototype.viewerReady = function ($event) {
            this.ready.emit($event);
        };
        return EpsGISNgxViewerComponent;
    }());
    exports.EpsGISNgxViewerComponent.ɵfac = function EpsGISNgxViewerComponent_Factory(t) { return new (t || exports.EpsGISNgxViewerComponent)(i0.ɵɵdirectiveInject(i1$5.ActivatedRoute), i0.ɵɵdirectiveInject(i0.Injector)); };
    exports.EpsGISNgxViewerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: exports.EpsGISNgxViewerComponent, selectors: [["epsgis-ngx-viewer"]], inputs: { model: "model", width: "width", videoWidth: "videoWidth", height: "height", source: "source", poster: "poster", viewerUrl: "viewerUrl", first: "first" }, outputs: { ready: "ready" }, decls: 4, vars: 3, consts: [[1, "epsgis-ngx-viewer"], [3, "width", "height", "source", "viewerUrl", "ready", 4, "ngIf"], [3, "source", "width", "height", "first", "ready", 4, "ngIf"], [3, "poster", "source", "width", "videoWidth", "height", "ready", 4, "ngIf"], [3, "width", "height", "source", "viewerUrl", "ready"], [3, "source", "width", "height", "first", "ready"], [3, "poster", "source", "width", "videoWidth", "height", "ready"]], template: function EpsGISNgxViewerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵtemplate(1, EpsGISNgxViewerComponent_pdf_viewer_1_Template, 1, 4, "pdf-viewer", 1);
                i0.ɵɵtemplate(2, EpsGISNgxViewerComponent_image_viewer_2_Template, 1, 4, "image-viewer", 2);
                i0.ɵɵtemplate(3, EpsGISNgxViewerComponent_video_viewer_3_Template, 1, 5, "video-viewer", 3);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.model == "pdf");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.model == "image");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.model == "video");
            }
        }, directives: [i1$1.NgIf, exports.PDFViewerComponent, exports.ImageViewerComponent, exports.VideoViewerComponent], styles: [""] });
    exports.EpsGISNgxViewerComponent = __decorate([
        ComponentRegister({
            uri: 'epsgis-ngx-viewer',
            path: "components/shared/ngxviewer"
        })
    ], exports.EpsGISNgxViewerComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(exports.EpsGISNgxViewerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'epsgis-ngx-viewer',
                        templateUrl: './e-ngx-viewer.component.html',
                        styleUrls: ['./e-ngx-viewer.component.scss']
                    }]
            }], function () { return [{ type: i1$5.ActivatedRoute }, { type: i0.Injector }]; }, { model: [{
                    type: i0.Input
                }], width: [{
                    type: i0.Input
                }], videoWidth: [{
                    type: i0.Input
                }], height: [{
                    type: i0.Input
                }], source: [{
                    type: i0.Input
                }], poster: [{
                    type: i0.Input
                }], viewerUrl: [{
                    type: i0.Input
                }], first: [{
                    type: i0.Input
                }], ready: [{
                    type: i0.Output
                }] });
    })();

    var _c0$f = function (a0, a1) { return { "collapse": a0, "expand": a1 }; };
    function EpsGISJsonViewerComponent_section_1_div_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "div", 9);
        }
        if (rf & 2) {
            var segment_r1 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(1, _c0$f, segment_r1.expanded, !segment_r1.expanded));
        }
    }
    function EpsGISJsonViewerComponent_section_1_span_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 10);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var segment_r1 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(segment_r1.description);
        }
    }
    function EpsGISJsonViewerComponent_section_1_section_8_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 11);
            i0.ɵɵelement(1, "epsgis-json-viewer", 12);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var segment_r1 = i0.ɵɵnextContext().$implicit;
            var ctx_r4 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("json", segment_r1.value)("expanded", ctx_r4.expanded);
        }
    }
    var _c1$9 = function (a1) { return ["segment", a1]; };
    var _c2$4 = function (a1, a2) { return { "segment-main": true, "expandable": a1, "expanded": a2 }; };
    function EpsGISJsonViewerComponent_section_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r9_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "section", 2);
            i0.ɵɵelementStart(1, "section", 3);
            i0.ɵɵlistener("click", function EpsGISJsonViewerComponent_section_1_Template_section_click_1_listener() { i0.ɵɵrestoreView(_r9_1); var segment_r1 = ctx.$implicit; var ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.toggle(segment_r1); });
            i0.ɵɵtemplate(2, EpsGISJsonViewerComponent_section_1_div_2_Template, 1, 4, "div", 4);
            i0.ɵɵelementStart(3, "span", 5);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "span", 6);
            i0.ɵɵtext(6, ": ");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(7, EpsGISJsonViewerComponent_section_1_span_7_Template, 2, 1, "span", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(8, EpsGISJsonViewerComponent_section_1_section_8_Template, 2, 2, "section", 8);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var segment_r1 = ctx.$implicit;
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c1$9, "segment-type-" + segment_r1.type));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(8, _c2$4, ctx_r0.isExpandable(segment_r1), segment_r1.expanded));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.isExpandable(segment_r1));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(segment_r1.key);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", !segment_r1.expanded || !ctx_r0.isExpandable(segment_r1));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", segment_r1.expanded && ctx_r0.isExpandable(segment_r1));
        }
    }
    exports.EpsGISJsonViewerComponent = /** @class */ (function () {
        function EpsGISJsonViewerComponent() {
            this.expanded = true;
            this.cleanOnChange = true;
            this.segments = [];
        }
        EpsGISJsonViewerComponent.prototype.ngOnInit = function () {
            this.initJson();
        };
        EpsGISJsonViewerComponent.prototype.initJson = function () {
            if (typeof this.json === 'string') {
                this.json = JSON.parse(this.json);
            }
            this.ngOnChanges();
        };
        EpsGISJsonViewerComponent.prototype.ngOnChanges = function () {
            var _this = this;
            if (this.cleanOnChange) {
                this.segments = [];
            }
            if (typeof this.json === 'object') {
                Object.keys(this.json).forEach(function (key) {
                    _this.segments.push(_this.parseKeyValue(key, _this.json[key]));
                });
            }
            else {
                this.segments.push(this.parseKeyValue("(" + typeof this.json + ")", this.json));
            }
        };
        EpsGISJsonViewerComponent.prototype.isExpandable = function (segment) {
            return segment.type === 'object' || segment.type === 'array';
        };
        EpsGISJsonViewerComponent.prototype.toggle = function (segment) {
            if (this.isExpandable(segment)) {
                segment.expanded = !segment.expanded;
            }
        };
        EpsGISJsonViewerComponent.prototype.parseKeyValue = function (key, value) {
            var segment = {
                key: key,
                value: value,
                type: undefined,
                description: '' + value,
                expanded: this.expanded
            };
            switch (typeof segment.value) {
                case 'number': {
                    segment.type = 'number';
                    break;
                }
                case 'boolean': {
                    segment.type = 'boolean';
                    break;
                }
                case 'function': {
                    segment.type = 'function';
                    break;
                }
                case 'string': {
                    segment.type = 'string';
                    segment.description = '"' + segment.value + '"';
                    break;
                }
                case 'undefined': {
                    segment.type = 'undefined';
                    segment.description = 'undefined';
                    break;
                }
                case 'object': {
                    if (segment.value === null) {
                        segment.type = 'null';
                        segment.description = 'null';
                    }
                    else if (Array.isArray(segment.value)) {
                        segment.type = 'array';
                        segment.description = 'Array[' + segment.value.length + '] ' + JSON.stringify(segment.value);
                    }
                    else if (segment.value instanceof Date) {
                        segment.type = 'date';
                    }
                    else {
                        segment.type = 'object';
                        segment.description = 'Object ' + JSON.stringify(segment.value);
                    }
                    break;
                }
            }
            return segment;
        };
        return EpsGISJsonViewerComponent;
    }());
    exports.EpsGISJsonViewerComponent.ɵfac = function EpsGISJsonViewerComponent_Factory(t) { return new (t || exports.EpsGISJsonViewerComponent)(); };
    exports.EpsGISJsonViewerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: exports.EpsGISJsonViewerComponent, selectors: [["epsgis-json-viewer"]], inputs: { json: "json", expanded: "expanded", cleanOnChange: "cleanOnChange" }, features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 1, consts: [[1, "json-viewer"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [3, "ngClass", "click"], ["class", "toggler", 3, "ngClass", 4, "ngIf"], [1, "segment-key"], [1, "segment-separator"], ["class", "segment-value", 4, "ngIf"], ["class", "children", 4, "ngIf"], [1, "toggler", 3, "ngClass"], [1, "segment-value"], [1, "children"], [3, "json", "expanded"]], template: function EpsGISJsonViewerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "section", 0);
                i0.ɵɵtemplate(1, EpsGISJsonViewerComponent_section_1_Template, 9, 11, "section", 1);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.segments);
            }
        }, directives: [i1$1.NgForOf, i1$1.NgClass, i1$1.NgIf, exports.EpsGISJsonViewerComponent], styles: [".json-viewer[_ngcontent-%COMP%]{width:100%;height:100%;overflow:auto;position:relative}.json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]{padding:2px;margin:1px 1px 1px 12px}.json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]   .segment-main[_ngcontent-%COMP%]{word-wrap:break-word}.json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]   .segment-main[_ngcontent-%COMP%]   .toggler[_ngcontent-%COMP%]{position:absolute;margin-left:-14px;margin-top:3px;font-size:.8em;line-height:1.2em;vertical-align:middle;color:#787878}.json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]   .segment-main[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]:before{content:\"-\"}.json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]   .segment-main[_ngcontent-%COMP%]   .expand[_ngcontent-%COMP%]:before{content:\"+\"}.json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]   .segment-main[_ngcontent-%COMP%]   .segment-key[_ngcontent-%COMP%]{color:#4e187c}.json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]   .segment-main[_ngcontent-%COMP%]   .segment-separator[_ngcontent-%COMP%]{color:#999}.json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]   .segment-main[_ngcontent-%COMP%]   .segment-value[_ngcontent-%COMP%]{color:#000}.json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]   .children[_ngcontent-%COMP%]{margin-left:12px}.json-viewer[_ngcontent-%COMP%]   .segment-type-string[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-value[_ngcontent-%COMP%]{color:#ff6b6b}.json-viewer[_ngcontent-%COMP%]   .segment-type-number[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-value[_ngcontent-%COMP%]{color:#009688}.json-viewer[_ngcontent-%COMP%]   .segment-type-boolean[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-value[_ngcontent-%COMP%]{color:#b938a4}.json-viewer[_ngcontent-%COMP%]   .segment-type-date[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-value[_ngcontent-%COMP%]{color:#05668d}.json-viewer[_ngcontent-%COMP%]   .segment-type-array[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-value[_ngcontent-%COMP%], .json-viewer[_ngcontent-%COMP%]   .segment-type-function[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-value[_ngcontent-%COMP%], .json-viewer[_ngcontent-%COMP%]   .segment-type-object[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-value[_ngcontent-%COMP%]{color:#999}.json-viewer[_ngcontent-%COMP%]   .segment-type-null[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-value[_ngcontent-%COMP%], .json-viewer[_ngcontent-%COMP%]   .segment-type-undefined[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-value[_ngcontent-%COMP%]{color:#fff}.json-viewer[_ngcontent-%COMP%]   .segment-type-null[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-value[_ngcontent-%COMP%]{background-color:red}.json-viewer[_ngcontent-%COMP%]   .segment-type-undefined[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-key[_ngcontent-%COMP%]{color:#999}.json-viewer[_ngcontent-%COMP%]   .segment-type-undefined[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-value[_ngcontent-%COMP%]{background-color:#999}.json-viewer[_ngcontent-%COMP%]   .segment-type-array[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%], .json-viewer[_ngcontent-%COMP%]   .segment-type-object[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%]{white-space:nowrap}.json-viewer[_ngcontent-%COMP%]   .expanded[_ngcontent-%COMP%] > .toggler[_ngcontent-%COMP%]:after{transform:rotate(90deg)}.json-viewer[_ngcontent-%COMP%]   .expandable[_ngcontent-%COMP%], .json-viewer[_ngcontent-%COMP%]   .expandable[_ngcontent-%COMP%] > .toggler[_ngcontent-%COMP%]{cursor:pointer}"] });
    exports.EpsGISJsonViewerComponent = __decorate([
        ComponentRegister({
            uri: 'epsgis-json-viewer',
            path: "components/shared/jsonviewer"
        })
    ], exports.EpsGISJsonViewerComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(exports.EpsGISJsonViewerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'epsgis-json-viewer',
                        templateUrl: './json-viewer.component.html',
                        styleUrls: ['./json-viewer.component.scss']
                    }]
            }], null, { json: [{
                    type: i0.Input
                }], expanded: [{
                    type: i0.Input
                }], cleanOnChange: [{
                    type: i0.Input
                }] });
    })();

    var SimpleReuseStrategy = /** @class */ (function () {
        function SimpleReuseStrategy(injector) {
            this.injector = injector;
        }
        SimpleReuseStrategy.prototype.shouldDetach = function (route) {
            if (!route.routeConfig || route.routeConfig.loadChildren) {
                return false;
            }
            if (route.data.reuse === false) {
                return false;
            }
            var url = route['_routerState'].url;
            if (!this.appGlobal) {
                this.appGlobal = this.injector.get(AppGlobalConfig);
            }
            if (this.appGlobal.menuConfig
                && this.appGlobal.menuConfig.notReuseRoutes
                && this.appGlobal.menuConfig.notReuseRoutes.length >= 1) {
                return !this.appGlobal.menuConfig.notReuseRoutes.some(function (n) { return url.toLocaleLowerCase().indexOf(n.toLocaleLowerCase()) >= 0; });
            }
            return true;
        };
        SimpleReuseStrategy.prototype.store = function (route, handle) {
            if (!route.routeConfig || route.routeConfig.loadChildren)
                return;
            var key = SimpleReuseStrategy.getRouteUrl(route);
            if (SimpleReuseStrategy.waitDelete && SimpleReuseStrategy.waitDelete === key) {
                SimpleReuseStrategy.waitDelete = null;
                return;
            }
            SimpleReuseStrategy.snapshots[key] = handle;
        };
        SimpleReuseStrategy.prototype.shouldAttach = function (route) {
            if (!route.routeConfig || route.routeConfig.loadChildren)
                return false;
            return !!SimpleReuseStrategy.snapshots[SimpleReuseStrategy.getRouteUrl(route)];
        };
        SimpleReuseStrategy.prototype.retrieve = function (route) {
            if (!route.routeConfig) {
                return null;
            }
            if (route.routeConfig.loadChildren) {
                Object.keys(SimpleReuseStrategy.snapshots).forEach(function (key) { return delete SimpleReuseStrategy.snapshots[key]; });
                return null;
            }
            return SimpleReuseStrategy.snapshots[SimpleReuseStrategy.getRouteUrl(route)];
        };
        SimpleReuseStrategy.prototype.shouldReuseRoute = function (future, curr) {
            return future.routeConfig === curr.routeConfig && JSON.stringify(future.params) === JSON.stringify(curr.params);
        };
        SimpleReuseStrategy.getRouteUrl = function (route) {
            var key = route['_routerState'].url.replace(/\//g, '_') + '_' + (route.routeConfig.loadChildren || route.routeConfig.component.toString().split('(')[0].split(' ')[1]);
            return key;
        };
        SimpleReuseStrategy.deleteRouteSnapshot = function (key) {
            if (SimpleReuseStrategy.snapshots[key]) {
                this.deactivateOutlet(this.snapshots[key]);
                delete SimpleReuseStrategy.snapshots[key];
            }
            else {
                SimpleReuseStrategy.waitDelete = key;
            }
        };
        SimpleReuseStrategy.deactivateOutlet = function (handle) {
            var componentRef = handle ? handle['componentRef'] : null;
            if (componentRef) {
                componentRef.destroy();
            }
        };
        SimpleReuseStrategy.clearRouteSnapshot = function () {
            for (var key in this.snapshots) {
                if (this.snapshots[key]) {
                    this.deactivateOutlet(this.snapshots[key]);
                }
            }
            this.snapshots = {};
            SimpleReuseStrategy.waitDelete = "";
        };
        return SimpleReuseStrategy;
    }());
    SimpleReuseStrategy.snapshots = {};

    var MenuTabService = /** @class */ (function () {
        function MenuTabService() {
            this.index = 0;
            this.name = "";
        }
        MenuTabService.prototype.add = function () {
            this.index++;
        };
        MenuTabService.prototype.getIndex = function () {
            return this.index;
        };
        MenuTabService.prototype.setName = function (n) {
            this.name = n;
        };
        MenuTabService.prototype.getName = function () {
            return this.name;
        };
        return MenuTabService;
    }());
    MenuTabService.ɵfac = function MenuTabService_Factory(t) { return new (t || MenuTabService)(); };
    MenuTabService.ɵprov = i0.ɵɵdefineInjectable({ token: MenuTabService, factory: MenuTabService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MenuTabService, [{
                type: i0.Injectable
            }], function () { return []; }, null);
    })();

    function MenuTabComponent_nz_tab_1_ng_template_1_i_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r17_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "i", 11);
            i0.ɵɵlistener("click", function MenuTabComponent_nz_tab_1_ng_template_1_i_2_Template_i_click_0_listener($event) { i0.ɵɵrestoreView(_r17_1); var menu_r1 = i0.ɵɵnextContext(2).$implicit; var ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.closeTab($event, menu_r1); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵproperty("nzType", "close")("nzTheme", "outline");
        }
    }
    function MenuTabComponent_nz_tab_1_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r20_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 9);
            i0.ɵɵlistener("contextmenu", function MenuTabComponent_nz_tab_1_ng_template_1_Template_div_contextmenu_0_listener($event) { i0.ɵɵrestoreView(_r20_1); var menu_r1 = i0.ɵɵnextContext().$implicit; var _r4 = i0.ɵɵreference(4); var ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.contextMenu($event, menu_r1, _r4); });
            i0.ɵɵtext(1);
            i0.ɵɵtemplate(2, MenuTabComponent_nz_tab_1_ng_template_1_i_2_Template, 1, 2, "i", 10);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var menu_r1 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", menu_r1.title, " ");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", menu_r1.canClose);
        }
    }
    function MenuTabComponent_nz_tab_1_li_6_Template(rf, ctx) {
        if (rf & 1) {
            var _r24_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "li", 12);
            i0.ɵɵlistener("click", function MenuTabComponent_nz_tab_1_li_6_Template_li_click_0_listener($event) { i0.ɵɵrestoreView(_r24_1); var menu_r1 = i0.ɵɵnextContext().$implicit; var ctx_r22 = i0.ɵɵnextContext(); return ctx_r22.selectDropdown($event, menu_r1, "closeTab"); });
            i0.ɵɵelement(1, "i", 13);
            i0.ɵɵelementStart(2, "span", 14);
            i0.ɵɵtext(3, "\u5173\u95ED");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzType", "close")("nzTheme", "outline");
        }
    }
    function MenuTabComponent_nz_tab_1_li_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "li", 15);
        }
    }
    function MenuTabComponent_nz_tab_1_li_9_Template(rf, ctx) {
        if (rf & 1) {
            var _r27_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "li", 12);
            i0.ɵɵlistener("click", function MenuTabComponent_nz_tab_1_li_9_Template_li_click_0_listener($event) { i0.ɵɵrestoreView(_r27_1); var menu_r1 = i0.ɵɵnextContext().$implicit; var ctx_r25 = i0.ɵɵnextContext(); return ctx_r25.selectDropdown($event, menu_r1, "selectTab"); });
            i0.ɵɵelement(1, "i", 13);
            i0.ɵɵelementStart(2, "span", 14);
            i0.ɵɵtext(3, "\u9009\u4E2D");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzType", "check")("nzTheme", "outline");
        }
    }
    function MenuTabComponent_nz_tab_1_li_10_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "li", 15);
        }
    }
    function MenuTabComponent_nz_tab_1_li_11_Template(rf, ctx) {
        if (rf & 1) {
            var _r30_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "li", 12);
            i0.ɵɵlistener("click", function MenuTabComponent_nz_tab_1_li_11_Template_li_click_0_listener($event) { i0.ɵɵrestoreView(_r30_1); var menu_r1 = i0.ɵɵnextContext().$implicit; var ctx_r28 = i0.ɵɵnextContext(); return ctx_r28.selectDropdown($event, menu_r1, "closeLeftTab"); });
            i0.ɵɵelement(1, "i", 13);
            i0.ɵɵelementStart(2, "span");
            i0.ɵɵtext(3, "\u5173\u95ED\u5DE6\u4FA7\u9875\u9762");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzType", "close")("nzTheme", "outline");
        }
    }
    function MenuTabComponent_nz_tab_1_li_12_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "li", 15);
        }
    }
    function MenuTabComponent_nz_tab_1_li_13_Template(rf, ctx) {
        if (rf & 1) {
            var _r33_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "li", 12);
            i0.ɵɵlistener("click", function MenuTabComponent_nz_tab_1_li_13_Template_li_click_0_listener($event) { i0.ɵɵrestoreView(_r33_1); var menu_r1 = i0.ɵɵnextContext().$implicit; var ctx_r31 = i0.ɵɵnextContext(); return ctx_r31.selectDropdown($event, menu_r1, "closeRightTab"); });
            i0.ɵɵelement(1, "i", 13);
            i0.ɵɵelementStart(2, "span");
            i0.ɵɵtext(3, "\u5173\u95ED\u53F3\u4FA7\u9875\u9762");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzType", "close")("nzTheme", "outline");
        }
    }
    function MenuTabComponent_nz_tab_1_li_14_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "li", 15);
        }
    }
    function MenuTabComponent_nz_tab_1_li_15_Template(rf, ctx) {
        if (rf & 1) {
            var _r36_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "li", 12);
            i0.ɵɵlistener("click", function MenuTabComponent_nz_tab_1_li_15_Template_li_click_0_listener($event) { i0.ɵɵrestoreView(_r36_1); var menu_r1 = i0.ɵɵnextContext().$implicit; var ctx_r34 = i0.ɵɵnextContext(); return ctx_r34.selectDropdown($event, menu_r1, "closeAllTab"); });
            i0.ɵɵelement(1, "i", 13);
            i0.ɵɵelementStart(2, "span");
            i0.ɵɵtext(3, "\u4FDD\u7559\u7B2C\u4E00\u9875");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzType", "close")("nzTheme", "outline");
        }
    }
    function MenuTabComponent_nz_tab_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "nz-tab", 3);
            i0.ɵɵtemplate(1, MenuTabComponent_nz_tab_1_ng_template_1_Template, 3, 2, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementStart(3, "nz-dropdown-menu", null, 5);
            i0.ɵɵelementStart(5, "ul", 6);
            i0.ɵɵtemplate(6, MenuTabComponent_nz_tab_1_li_6_Template, 4, 2, "li", 7);
            i0.ɵɵtemplate(7, MenuTabComponent_nz_tab_1_li_7_Template, 1, 0, "li", 8);
            i0.ɵɵelement(8, "li");
            i0.ɵɵtemplate(9, MenuTabComponent_nz_tab_1_li_9_Template, 4, 2, "li", 7);
            i0.ɵɵtemplate(10, MenuTabComponent_nz_tab_1_li_10_Template, 1, 0, "li", 8);
            i0.ɵɵtemplate(11, MenuTabComponent_nz_tab_1_li_11_Template, 4, 2, "li", 7);
            i0.ɵɵtemplate(12, MenuTabComponent_nz_tab_1_li_12_Template, 1, 0, "li", 8);
            i0.ɵɵtemplate(13, MenuTabComponent_nz_tab_1_li_13_Template, 4, 2, "li", 7);
            i0.ɵɵtemplate(14, MenuTabComponent_nz_tab_1_li_14_Template, 1, 0, "li", 8);
            i0.ɵɵtemplate(15, MenuTabComponent_nz_tab_1_li_15_Template, 4, 2, "li", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var menu_r1 = ctx.$implicit;
            var _r2 = i0.ɵɵreference(2);
            i0.ɵɵproperty("nzTitle", _r2);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngIf", menu_r1.canClose);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", menu_r1.canSelect);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", menu_r1.canSelect);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", menu_r1.canCloseLeft);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", menu_r1.canCloseLeft);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", menu_r1.canCloseRight);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", menu_r1.canCloseRight);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", menu_r1.canCloseExceptFirst);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", menu_r1.canCloseExceptFirst);
        }
    }
    var _c0$g = ["*"];
    var MenuTabComponent = /** @class */ (function () {
        function MenuTabComponent(router, activatedRoute, nzDropdownService, cdr, appGlobal, menuTabService) {
            var _this = this;
            this.router = router;
            this.activatedRoute = activatedRoute;
            this.nzDropdownService = nzDropdownService;
            this.cdr = cdr;
            this.appGlobal = appGlobal;
            this.menuTabService = menuTabService;
            this.menuList = [];
            this.currentIndex = -1;
            this.urlMapTitle = new Map();
            this.showTab = true;
            this.recurseFindMenu = function (url, arr) {
                var menu = null;
                if (arr && arr.length >= 1) {
                    for (var index = 0; index < arr.length; index++) {
                        var m = arr[index];
                        if (m.path == url) {
                            menu = m;
                        }
                        else {
                            menu = _this.recurseFindMenu(url, m.children);
                        }
                        if (menu) {
                            break;
                        }
                    }
                }
                return menu;
            };
            this.router.events.pipe(operators.filter(function (event) { return event instanceof i1$5.NavigationEnd; }))
                .pipe(operators.map(function () { return _this.activatedRoute; }))
                .pipe(operators.map(function (route) {
                while (route.firstChild) {
                    route = route.firstChild;
                }
                return route;
            }))
                .pipe(operators.filter(function (route) { return route.outlet === 'primary'; }))
                .subscribe(function (route) {
                _this.addToTab(route);
            });
        }
        MenuTabComponent.prototype.ngOnInit = function () {
        };
        MenuTabComponent.prototype.ngOnDestroy = function () {
        };
        MenuTabComponent.prototype.addToTab = function (activatedRoute) {
            var _this = this;
            if (this.router.url.indexOf("/login") >= 0) {
                this.clear();
                return;
            }
            var routeData = activatedRoute.data["value"];
            if (routeData.showInTab === false) {
                this.showTab = false;
                return;
            }
            if (this.appGlobal.menuConfig
                && this.appGlobal.menuConfig.notShowInTabRoutes
                && this.appGlobal.menuConfig.notShowInTabRoutes.length >= 1) {
                var exists = this.appGlobal.menuConfig.notShowInTabRoutes.some(function (n) { return _this.router.url.toLocaleLowerCase().indexOf(n.toLocaleLowerCase()) >= 0; });
                if (exists) {
                    this.showTab = false;
                    return;
                }
            }
            this.showTab = true;
            var title = routeData.title;
            if (!title) {
                var m = this.findMenu(this.router.url);
                title = m ? m.name : this.router.url;
            }
            this.router;
            var menu = {
                title: title,
                url: this.router.url,
                key: SimpleReuseStrategy.getRouteUrl(activatedRoute.snapshot)
            };
            var exitMenu = this.menuList.find(function (info) { return info.url === menu.url; });
            if (!exitMenu) {
                this.menuList.push(menu);
            }
            this.currentIndex = this.menuList.findIndex(function (p) { return p.url === menu.url; });
            this.refreshMenuList();
        };
        MenuTabComponent.prototype.refreshMenuList = function () {
            var _this = this;
            if (!this.menuList || this.menuList.length < 1) {
                return;
            }
            if (this.menuList.length === 1) {
                this.menuList[0].canClose = false;
                this.menuList[0].canSelect = false;
                this.menuList[0].canCloseLeft = false;
                this.menuList[0].canCloseRight = false;
                this.menuList[0].canCloseExceptFirst = false;
            }
            else {
                var index_1 = 0;
                this.menuList.forEach(function (item) {
                    item.canClose = true;
                    item.canCloseExceptFirst = true;
                    item.canSelect = false;
                    if (index_1 !== _this.currentIndex) {
                        item.canSelect = true;
                    }
                    item.canCloseLeft = true;
                    item.canCloseRight = true;
                    if (index_1 === 0) {
                        item.canCloseLeft = false;
                    }
                    else if (index_1 === (_this.menuList.length - 1)) {
                        item.canCloseRight = false;
                    }
                    index_1++;
                });
            }
        };
        MenuTabComponent.prototype.clear = function () {
            this.urlMapTitle.clear();
            this.menuList.splice(0);
            SimpleReuseStrategy.clearRouteSnapshot();
        };
        MenuTabComponent.prototype.findMenu = function (url) {
            if (this.urlMapTitle.has(url)) {
                return this.urlMapTitle.get(url);
            }
            if (!this.appGlobal || !this.appGlobal.menuConfig.menuData) {
                return null;
            }
            var m = this.recurseFindMenu(url, this.appGlobal.menuConfig.menuData);
            if (m) {
                this.urlMapTitle.set(url, m);
            }
            return m;
        };
        MenuTabComponent.prototype.getIndex = function (menu) {
            return this.menuList.findIndex(function (p) { return p.url === menu.url; });
        };
        MenuTabComponent.prototype.closeByUrl = function (key) {
            if (this.menuList.length === 1) {
                return;
            }
            var index = this.menuList.findIndex(function (p) { return p.key === key; });
            if (index <= -1) {
                console.log("没有找到tab，无法关闭,key:" + key);
                return;
            }
            this.menuList.splice(index, 1);
            SimpleReuseStrategy.deleteRouteSnapshot(key);
            if (this.currentIndex === index) {
                var menu = this.menuList[index - 1];
                if (!menu) {
                    menu = this.menuList[index];
                }
                this.router.navigate([menu.url]);
            }
        };
        MenuTabComponent.prototype.nzSelectChange = function ($event) {
            this.currentIndex = $event.index;
            var menu = this.menuList[this.currentIndex];
            this.router.navigate([menu.url]);
        };
        MenuTabComponent.prototype.navigateToUrl = function (index) {
            if (this.menuList.length == 0) {
                return;
            }
            if (index <= -1) {
                index = 0;
            }
            if (index >= this.menuList.length) {
                index = this.menuList.length - 1;
            }
            this.currentIndex = index;
        };
        MenuTabComponent.prototype.contextMenu = function ($event, menu, menuComp) {
            this.nzDropdownService.create($event, menuComp);
        };
        MenuTabComponent.prototype.selectDropdown = function (evt, menu, func) {
            this.nzDropdownService.close();
            this[func](evt, menu);
            UtilsService.detectChanges(this.cdr);
        };
        MenuTabComponent.prototype.removeRoute = function (predicate, thisArg) {
            var arr = this.menuList.filter(predicate);
            if (arr && arr.length >= 1) {
                arr.forEach(function (m) {
                    SimpleReuseStrategy.deleteRouteSnapshot(m.key);
                });
            }
        };
        MenuTabComponent.prototype.closeTabByRoute = function (activatedRoute) {
            var key = SimpleReuseStrategy.getRouteUrl(activatedRoute.snapshot);
            this.closeTabByKey(key);
        };
        MenuTabComponent.prototype.closeTabByKey = function (key) {
            this.closeByUrl(key);
        };
        MenuTabComponent.prototype.closeTab = function (evt, menu) {
            this.closeByUrl(menu.key);
            this.refreshMenuList();
        };
        MenuTabComponent.prototype.selectTab = function (evt, menu) {
            this.navigateToUrl(this.getIndex(menu));
            this.refreshMenuList();
        };
        MenuTabComponent.prototype.closeLeftTab = function (evt, menu) {
            var index = this.getIndex(menu);
            if (index >= 1) {
                this.removeRoute(function (v, i, a) {
                    if (i < index) {
                        return v;
                    }
                });
                this.menuList.splice(0, index);
                this.navigateToUrl(0);
            }
            this.refreshMenuList();
        };
        MenuTabComponent.prototype.closeRightTab = function (evt, menu) {
            var index = this.getIndex(menu);
            if (index >= 0) {
                this.removeRoute(function (v, i, a) {
                    if (i > index) {
                        return v;
                    }
                });
                this.menuList.splice(index + 1);
                this.navigateToUrl(index);
            }
            this.refreshMenuList();
        };
        MenuTabComponent.prototype.closeAllTab = function (evt, menu) {
            this.removeRoute(function (v, i, a) {
                if (i >= 1) {
                    return v;
                }
            });
            this.menuList.splice(1);
            this.navigateToUrl(0);
            this.refreshMenuList();
        };
        return MenuTabComponent;
    }());
    MenuTabComponent.ɵfac = function MenuTabComponent_Factory(t) { return new (t || MenuTabComponent)(i0.ɵɵdirectiveInject(i1$5.Router), i0.ɵɵdirectiveInject(i1$5.ActivatedRoute), i0.ɵɵdirectiveInject(i2$1.NzContextMenuService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(AppGlobalConfig), i0.ɵɵdirectiveInject(MenuTabService)); };
    MenuTabComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MenuTabComponent, selectors: [["epsgis-menu-tab"]], ngContentSelectors: _c0$g, decls: 4, vars: 6, consts: [["nzShowPagination", "true", 2, "margin-left", "-1px", 3, "nzAnimated", "nzSelectedIndex", "nzType", "nzSelectChange"], [3, "nzTitle", 4, "ngFor", "ngForOf"], [1, "tab-content"], [3, "nzTitle"], ["nzTabHeading", ""], ["menuComp", "nzDropdownMenu"], ["nz-menu", "", "nzInDropDown", "", 1, "dropdown-menu"], ["nz-menu-item", "", 3, "click", 4, "ngIf"], ["nz-menu-divider", "", 4, "ngIf"], [3, "contextmenu"], ["nz-icon", "", 3, "nzType", "nzTheme", "click", 4, "ngIf"], ["nz-icon", "", 3, "nzType", "nzTheme", "click"], ["nz-menu-item", "", 3, "click"], ["nz-icon", "", 3, "nzType", "nzTheme"], [1, "danger"], ["nz-menu-divider", ""]], template: function MenuTabComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵelementStart(0, "nz-tabset", 0);
                i0.ɵɵlistener("nzSelectChange", function MenuTabComponent_Template_nz_tabset_nzSelectChange_0_listener($event) { return ctx.nzSelectChange($event); });
                i0.ɵɵtemplate(1, MenuTabComponent_nz_tab_1_Template, 16, 10, "nz-tab", 1);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "div", 2);
                i0.ɵɵprojection(3);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵclassProp("hide", !ctx.showTab);
                i0.ɵɵproperty("nzAnimated", true)("nzSelectedIndex", ctx.currentIndex)("nzType", "line");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.menuList);
            }
        }, directives: [i5.NzTabSetComponent, i1$1.NgForOf, i5.NzTabComponent, i2$1.NzDropdownMenuComponent, i7.NzMenuDirective, i1$1.NgIf, i2.NzIconDirective, i7.NzMenuItemDirective, i7.NzMenuDividerDirective], styles: [".close-red[_ngcontent-%COMP%]{color:red}[_nghost-%COMP%]     .anticon-close{margin-left:10px}[_nghost-%COMP%]     .anticon-close :hover{color:red}[_nghost-%COMP%]     .ant-tabs-bar{margin:0}.hide[_ngcontent-%COMP%]{display:none}.tab-content[_ngcontent-%COMP%]{width:100%;height:calc(100vh - 50px);position:relative}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MenuTabComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'epsgis-menu-tab',
                        templateUrl: './menu-tab.component.html',
                        styleUrls: ['./menu-tab.component.scss']
                    }]
            }], function () { return [{ type: i1$5.Router }, { type: i1$5.ActivatedRoute }, { type: i2$1.NzContextMenuService }, { type: i0.ChangeDetectorRef }, { type: AppGlobalConfig }, { type: MenuTabService }]; }, null);
    })();

    var _c0$h = ["ss-modal-titlebar-button", ""];
    function SsModalTitleBarButtonComponent_ng_container_0_div_1_i_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "i", 5);
        }
        if (rf & 2) {
            var button_r2 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵstyleMap(button_r2.style);
            i0.ɵɵproperty("nzIconfont", button_r2.icon);
        }
    }
    function SsModalTitleBarButtonComponent_ng_container_0_div_1_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "i", 6);
        }
        if (rf & 2) {
            var button_r2 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵstyleMap(button_r2.style);
            i0.ɵɵproperty("nzType", button_r2.icon)("nzTheme", button_r2.theme)("nzSpin", button_r2.spin)("nzTwotoneColor", button_r2.twotoneColor)("nzRotate", button_r2.rotate);
        }
    }
    function SsModalTitleBarButtonComponent_ng_container_0_div_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r9_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 2);
            i0.ɵɵlistener("click", function SsModalTitleBarButtonComponent_ng_container_0_div_1_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r9_1); var button_r2 = ctx.$implicit; var ctx_r8 = i0.ɵɵnextContext(2); return ctx_r8.onButtonClick(button_r2); });
            i0.ɵɵtemplate(1, SsModalTitleBarButtonComponent_ng_container_0_div_1_i_1_Template, 1, 3, "i", 3);
            i0.ɵɵtemplate(2, SsModalTitleBarButtonComponent_ng_container_0_div_1_ng_template_2_Template, 1, 7, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var button_r2 = ctx.$implicit;
            var _r4 = i0.ɵɵreference(3);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", button_r2.isIconfont)("ngIfElse", _r4);
        }
    }
    function SsModalTitleBarButtonComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, SsModalTitleBarButtonComponent_ng_container_0_div_1_Template, 4, 2, "div", 1);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r0.buttons);
        }
    }
    var SsModalTitleBarButtonComponent = /** @class */ (function () {
        function SsModalTitleBarButtonComponent(config) {
            this.config = config;
            this.buttons = [];
            this.destroy$ = new rxjs.Subject();
            if (Array.isArray(config.titleBarButtons)) {
                this.buttons = config.titleBarButtons.map(mergeDefaultOption$1);
            }
        }
        SsModalTitleBarButtonComponent.prototype.getButtonCallableProp = function (options, prop) {
            var value = options[prop];
            if (this.modalRef) {
                var componentInstance = this.modalRef.getContentComponent();
                return typeof value === 'function' ? value.apply(options, componentInstance && [componentInstance]) : value;
            }
            return false;
        };
        SsModalTitleBarButtonComponent.prototype.onButtonClick = function (options) {
            this.getButtonCallableProp(options, 'onClick');
        };
        SsModalTitleBarButtonComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        return SsModalTitleBarButtonComponent;
    }());
    SsModalTitleBarButtonComponent.ɵfac = function SsModalTitleBarButtonComponent_Factory(t) { return new (t || SsModalTitleBarButtonComponent)(i0.ɵɵdirectiveInject(SsModalOptions)); };
    SsModalTitleBarButtonComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SsModalTitleBarButtonComponent, selectors: [["div", "ss-modal-titlebar-button", ""]], hostAttrs: [1, ""], inputs: { modalRef: "modalRef" }, attrs: _c0$h, decls: 1, vars: 1, consts: [[4, "ngIf"], ["class", "ssmodal_titlebar_button", 3, "click", 4, "ngFor", "ngForOf"], [1, "ssmodal_titlebar_button", 3, "click"], ["nz-icon", "", 3, "nzIconfont", "style", 4, "ngIf", "ngIfElse"], ["ngzorro", ""], ["nz-icon", "", 3, "nzIconfont"], ["nz-icon", "", 3, "nzType", "nzTheme", "nzSpin", "nzTwotoneColor", "nzRotate"]], template: function SsModalTitleBarButtonComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, SsModalTitleBarButtonComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", ctx.buttons && ctx.buttons.length >= 1);
            }
        }, directives: [i1$1.NgIf, i1$1.NgForOf, i2.NzIconDirective], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SsModalTitleBarButtonComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'div[ss-modal-titlebar-button]',
                        template: "\n    <ng-container *ngIf=\"buttons && buttons.length>=1;\">\n          <div class=\"ssmodal_titlebar_button\" *ngFor=\"let button of buttons\"  (click)=\"onButtonClick(button)\">\n            <i\n            nz-icon\n            *ngIf=\"button.isIconfont;else ngzorro\"\n            [nzIconfont]=\"button.icon\"\n            \n            [style]=\"button.style\"\n            >\n            </i>\n\n          <ng-template #ngzorro>\n                <i nz-icon \n                [nzType]=\"button.icon\" \n                [nzTheme]=\"button.theme\"\n                [nzSpin]=\"button.spin\"\n                [nzTwotoneColor]=\"button.twotoneColor\"\n                [nzRotate]=\"button.rotate\"\n                [style]=\"button.style\"\n                ></i>\n          </ng-template>\n          </div>\n      </ng-container>\n      \n  ",
                        host: {
                            class: ''
                        },
                        changeDetection: i0.ChangeDetectionStrategy.Default
                    }]
            }], function () { return [{ type: SsModalOptions }]; }, { modalRef: [{
                    type: i0.Input
                }] });
    })();
    function mergeDefaultOption$1(options) {
        return Object.assign({ icon: null, theme: 'outline', spin: false, twotoneColor: null, isIconfont: false, rotate: null, title: "", style: "" }, options);
    }

    var EpsGisModalModule = /** @class */ (function () {
        function EpsGisModalModule() {
        }
        return EpsGisModalModule;
    }());
    EpsGisModalModule.ɵmod = i0.ɵɵdefineNgModule({ type: EpsGisModalModule });
    EpsGisModalModule.ɵinj = i0.ɵɵdefineInjector({ factory: function EpsGisModalModule_Factory(t) { return new (t || EpsGisModalModule)(); }, imports: [[
                i1$1.CommonModule,
                i2.NzIconModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(EpsGisModalModule, { declarations: [exports.ModalContainerComponent, exports.SSModalComponent, SsModalFooterComponent, SsModalFooterDirective, SsModalTitleBarButtonComponent], imports: [i1$1.CommonModule,
                i2.NzIconModule], exports: [exports.SSModalComponent, SsModalFooterComponent, SsModalTitleBarButtonComponent] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EpsGisModalModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [exports.ModalContainerComponent, exports.SSModalComponent, SsModalFooterComponent, SsModalFooterDirective, SsModalTitleBarButtonComponent],
                        exports: [exports.SSModalComponent, SsModalFooterComponent, SsModalTitleBarButtonComponent],
                        entryComponents: [exports.ModalContainerComponent, exports.SSModalComponent],
                        imports: [
                            i1$1.CommonModule,
                            i2.NzIconModule
                        ]
                    }]
            }], null, null);
    })();
    i0.ɵɵsetComponentScope(exports.ModalContainerComponent, [i1$1.NgStyle, i1$1.NgIf, SsModalTitleBarButtonComponent, SsModalFooterComponent], []);

    var EpsGisModule = /** @class */ (function () {
        function EpsGisModule(parentModule) {
            if (parentModule) {
                throw new Error('EpsGisModule is already loaded. Import it in the AppModule only');
            }
        }
        EpsGisModule.forRoot = function (config) {
            return {
                ngModule: EpsGisModule,
                providers: [
                    {
                        provide: AppGlobalConfigToken,
                        useValue: config
                    },
                    {
                        provide: AppGlobalConfig,
                        useFactory: setGlobalConfig,
                        deps: [AppInitService]
                    },
                    { provide: i0.APP_INITIALIZER, useFactory: loadGlobalConfig, deps: [AppGlobalConfigToken, AppInitService, i1.HttpClient], multi: true }
                ]
            };
        };
        return EpsGisModule;
    }());
    EpsGisModule.ɵmod = i0.ɵɵdefineNgModule({ type: EpsGisModule });
    EpsGisModule.ɵinj = i0.ɵɵdefineInjector({ factory: function EpsGisModule_Factory(t) { return new (t || EpsGisModule)(i0.ɵɵinject(EpsGisModule, 12)); }, imports: [[
                i1$1.CommonModule,
                EpsGisWidgetBaseModule,
                EpsGisDirectivesModule,
                EpsGisCompContainerModule,
                EpsGisModalModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(EpsGisModule, { imports: [i1$1.CommonModule,
                EpsGisWidgetBaseModule,
                EpsGisDirectivesModule,
                EpsGisCompContainerModule,
                EpsGisModalModule] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EpsGisModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1$1.CommonModule,
                            EpsGisWidgetBaseModule,
                            EpsGisDirectivesModule,
                            EpsGisCompContainerModule,
                            EpsGisModalModule
                        ],
                        declarations: [],
                        exports: []
                    }]
            }], function () {
            return [{ type: EpsGisModule, decorators: [{
                            type: i0.Optional
                        }, {
                            type: i0.SkipSelf
                        }] }];
        }, null);
    })();
    var loadGlobalConfig = function (config, service) {
        return function () { return service.init(config).loadGlobalConfig(); };
    };
    var setGlobalConfig = function (service) {
        return service.getConfig();
    };

    var EpsGISNgxViewerModule = /** @class */ (function () {
        function EpsGISNgxViewerModule() {
        }
        return EpsGISNgxViewerModule;
    }());
    EpsGISNgxViewerModule.ɵmod = i0.ɵɵdefineNgModule({ type: EpsGISNgxViewerModule });
    EpsGISNgxViewerModule.ɵinj = i0.ɵɵdefineInjector({ factory: function EpsGISNgxViewerModule_Factory(t) { return new (t || EpsGISNgxViewerModule)(); }, imports: [[
                i1$1.CommonModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(EpsGISNgxViewerModule, { declarations: [exports.EpsGISNgxViewerComponent,
                exports.PDFViewerComponent,
                exports.ImageViewerComponent,
                exports.VideoViewerComponent,
                exports.EpsGISJsonViewerComponent], imports: [i1$1.CommonModule], exports: [exports.EpsGISNgxViewerComponent,
                exports.PDFViewerComponent,
                exports.ImageViewerComponent,
                exports.VideoViewerComponent,
                exports.EpsGISJsonViewerComponent] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EpsGISNgxViewerModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1$1.CommonModule
                        ],
                        entryComponents: [
                            exports.EpsGISNgxViewerComponent,
                            exports.PDFViewerComponent,
                            exports.ImageViewerComponent,
                            exports.VideoViewerComponent,
                            exports.EpsGISJsonViewerComponent
                        ],
                        declarations: [
                            exports.EpsGISNgxViewerComponent,
                            exports.PDFViewerComponent,
                            exports.ImageViewerComponent,
                            exports.VideoViewerComponent,
                            exports.EpsGISJsonViewerComponent
                        ],
                        exports: [
                            exports.EpsGISNgxViewerComponent,
                            exports.PDFViewerComponent,
                            exports.ImageViewerComponent,
                            exports.VideoViewerComponent,
                            exports.EpsGISJsonViewerComponent
                        ]
                    }]
            }], null, null);
    })();

    var EpsGisMenuTabModule = /** @class */ (function () {
        function EpsGisMenuTabModule() {
        }
        return EpsGisMenuTabModule;
    }());
    EpsGisMenuTabModule.ɵmod = i0.ɵɵdefineNgModule({ type: EpsGisMenuTabModule });
    EpsGisMenuTabModule.ɵinj = i0.ɵɵdefineInjector({ factory: function EpsGisMenuTabModule_Factory(t) { return new (t || EpsGisMenuTabModule)(); }, providers: [
            MenuTabService
        ], imports: [[
                i1$1.CommonModule,
                i5.NzTabsModule,
                i2.NzIconModule,
                i2$1.NzDropDownModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(EpsGisMenuTabModule, { declarations: [MenuTabComponent], imports: [i1$1.CommonModule,
                i5.NzTabsModule,
                i2.NzIconModule,
                i2$1.NzDropDownModule], exports: [MenuTabComponent] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EpsGisMenuTabModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1$1.CommonModule,
                            i5.NzTabsModule,
                            i2.NzIconModule,
                            i2$1.NzDropDownModule
                        ],
                        declarations: [
                            MenuTabComponent
                        ],
                        entryComponents: [
                            MenuTabComponent
                        ],
                        exports: [
                            MenuTabComponent
                        ],
                        providers: [
                            MenuTabService
                        ]
                    }]
            }], null, null);
    })();

    var IdGenerater = /** @class */ (function () {
        function IdGenerater() {
        }
        IdGenerater.newGuid = function (format) {
            if (format === void 0) { format = "N"; }
            var d = new Date().getTime();
            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);
                return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
            if (format === "N" || format === "n") {
                uuid = uuid.replace(/-/g, "");
            }
            if (format === "B" || format === "b") {
                uuid = "{" + uuid + "}";
            }
            if (format === "P" || format === "p") {
                uuid = "(" + uuid + ")";
            }
            if (format === "X" || format === "x") {
            }
            return uuid;
        };
        ;
        return IdGenerater;
    }());

    var LocalStorageHelper = /** @class */ (function () {
        function LocalStorageHelper() {
        }
        LocalStorageHelper.setItem = function (key, data) {
            if (window.localStorage) {
                if (typeof data === "object") {
                    localStorage.setItem(key, JSON.stringify(data));
                }
                else {
                    localStorage.setItem(key, data);
                }
            }
            else {
                console.log("浏览器不支持localStorage");
            }
        };
        LocalStorageHelper.getItem = function (key) {
            if (window.localStorage) {
                return localStorage.getItem(key);
            }
            else {
                console.log("浏览器不支持localStorage");
            }
        };
        return LocalStorageHelper;
    }());

    var Md5 = /** @class */ (function () {
        function Md5() {
            this._state = new Int32Array(4);
            this._buffer = new ArrayBuffer(68);
            this._buffer8 = new Uint8Array(this._buffer, 0, 68);
            this._buffer32 = new Uint32Array(this._buffer, 0, 17);
            this.start();
        }
        Md5.hashStr = function (str, raw) {
            if (raw === void 0) { raw = false; }
            return Md5.onePassHasher
                .start()
                .appendStr(str)
                .end(raw);
        };
        Md5.hashAsciiStr = function (str, raw) {
            if (raw === void 0) { raw = false; }
            return Md5.onePassHasher
                .start()
                .appendAsciiStr(str)
                .end(raw);
        };
        Md5._hex = function (x) {
            var hc = Md5.hexChars;
            var ho = Md5.hexOut;
            var n;
            var offset;
            var j;
            var i;
            for (i = 0; i < 4; i += 1) {
                offset = i * 8;
                n = x[i];
                for (j = 0; j < 8; j += 2) {
                    ho[offset + 1 + j] = hc.charAt(n & 0x0F);
                    n >>>= 4;
                    ho[offset + 0 + j] = hc.charAt(n & 0x0F);
                    n >>>= 4;
                }
            }
            return ho.join('');
        };
        Md5._md5cycle = function (x, k) {
            var a = x[0];
            var b = x[1];
            var c = x[2];
            var d = x[3];
            a += (b & c | ~b & d) + k[0] - 680876936 | 0;
            a = (a << 7 | a >>> 25) + b | 0;
            d += (a & b | ~a & c) + k[1] - 389564586 | 0;
            d = (d << 12 | d >>> 20) + a | 0;
            c += (d & a | ~d & b) + k[2] + 606105819 | 0;
            c = (c << 17 | c >>> 15) + d | 0;
            b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
            b = (b << 22 | b >>> 10) + c | 0;
            a += (b & c | ~b & d) + k[4] - 176418897 | 0;
            a = (a << 7 | a >>> 25) + b | 0;
            d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
            d = (d << 12 | d >>> 20) + a | 0;
            c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
            c = (c << 17 | c >>> 15) + d | 0;
            b += (c & d | ~c & a) + k[7] - 45705983 | 0;
            b = (b << 22 | b >>> 10) + c | 0;
            a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
            a = (a << 7 | a >>> 25) + b | 0;
            d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
            d = (d << 12 | d >>> 20) + a | 0;
            c += (d & a | ~d & b) + k[10] - 42063 | 0;
            c = (c << 17 | c >>> 15) + d | 0;
            b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
            b = (b << 22 | b >>> 10) + c | 0;
            a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
            a = (a << 7 | a >>> 25) + b | 0;
            d += (a & b | ~a & c) + k[13] - 40341101 | 0;
            d = (d << 12 | d >>> 20) + a | 0;
            c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
            c = (c << 17 | c >>> 15) + d | 0;
            b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
            b = (b << 22 | b >>> 10) + c | 0;
            a += (b & d | c & ~d) + k[1] - 165796510 | 0;
            a = (a << 5 | a >>> 27) + b | 0;
            d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
            d = (d << 9 | d >>> 23) + a | 0;
            c += (d & b | a & ~b) + k[11] + 643717713 | 0;
            c = (c << 14 | c >>> 18) + d | 0;
            b += (c & a | d & ~a) + k[0] - 373897302 | 0;
            b = (b << 20 | b >>> 12) + c | 0;
            a += (b & d | c & ~d) + k[5] - 701558691 | 0;
            a = (a << 5 | a >>> 27) + b | 0;
            d += (a & c | b & ~c) + k[10] + 38016083 | 0;
            d = (d << 9 | d >>> 23) + a | 0;
            c += (d & b | a & ~b) + k[15] - 660478335 | 0;
            c = (c << 14 | c >>> 18) + d | 0;
            b += (c & a | d & ~a) + k[4] - 405537848 | 0;
            b = (b << 20 | b >>> 12) + c | 0;
            a += (b & d | c & ~d) + k[9] + 568446438 | 0;
            a = (a << 5 | a >>> 27) + b | 0;
            d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
            d = (d << 9 | d >>> 23) + a | 0;
            c += (d & b | a & ~b) + k[3] - 187363961 | 0;
            c = (c << 14 | c >>> 18) + d | 0;
            b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
            b = (b << 20 | b >>> 12) + c | 0;
            a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
            a = (a << 5 | a >>> 27) + b | 0;
            d += (a & c | b & ~c) + k[2] - 51403784 | 0;
            d = (d << 9 | d >>> 23) + a | 0;
            c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
            c = (c << 14 | c >>> 18) + d | 0;
            b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
            b = (b << 20 | b >>> 12) + c | 0;
            a += (b ^ c ^ d) + k[5] - 378558 | 0;
            a = (a << 4 | a >>> 28) + b | 0;
            d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
            d = (d << 11 | d >>> 21) + a | 0;
            c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
            c = (c << 16 | c >>> 16) + d | 0;
            b += (c ^ d ^ a) + k[14] - 35309556 | 0;
            b = (b << 23 | b >>> 9) + c | 0;
            a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
            a = (a << 4 | a >>> 28) + b | 0;
            d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
            d = (d << 11 | d >>> 21) + a | 0;
            c += (d ^ a ^ b) + k[7] - 155497632 | 0;
            c = (c << 16 | c >>> 16) + d | 0;
            b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
            b = (b << 23 | b >>> 9) + c | 0;
            a += (b ^ c ^ d) + k[13] + 681279174 | 0;
            a = (a << 4 | a >>> 28) + b | 0;
            d += (a ^ b ^ c) + k[0] - 358537222 | 0;
            d = (d << 11 | d >>> 21) + a | 0;
            c += (d ^ a ^ b) + k[3] - 722521979 | 0;
            c = (c << 16 | c >>> 16) + d | 0;
            b += (c ^ d ^ a) + k[6] + 76029189 | 0;
            b = (b << 23 | b >>> 9) + c | 0;
            a += (b ^ c ^ d) + k[9] - 640364487 | 0;
            a = (a << 4 | a >>> 28) + b | 0;
            d += (a ^ b ^ c) + k[12] - 421815835 | 0;
            d = (d << 11 | d >>> 21) + a | 0;
            c += (d ^ a ^ b) + k[15] + 530742520 | 0;
            c = (c << 16 | c >>> 16) + d | 0;
            b += (c ^ d ^ a) + k[2] - 995338651 | 0;
            b = (b << 23 | b >>> 9) + c | 0;
            a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
            a = (a << 6 | a >>> 26) + b | 0;
            d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
            d = (d << 10 | d >>> 22) + a | 0;
            c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
            c = (c << 15 | c >>> 17) + d | 0;
            b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
            b = (b << 21 | b >>> 11) + c | 0;
            a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
            a = (a << 6 | a >>> 26) + b | 0;
            d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
            d = (d << 10 | d >>> 22) + a | 0;
            c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
            c = (c << 15 | c >>> 17) + d | 0;
            b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
            b = (b << 21 | b >>> 11) + c | 0;
            a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
            a = (a << 6 | a >>> 26) + b | 0;
            d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
            d = (d << 10 | d >>> 22) + a | 0;
            c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
            c = (c << 15 | c >>> 17) + d | 0;
            b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
            b = (b << 21 | b >>> 11) + c | 0;
            a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
            a = (a << 6 | a >>> 26) + b | 0;
            d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
            d = (d << 10 | d >>> 22) + a | 0;
            c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
            c = (c << 15 | c >>> 17) + d | 0;
            b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
            b = (b << 21 | b >>> 11) + c | 0;
            x[0] = a + x[0] | 0;
            x[1] = b + x[1] | 0;
            x[2] = c + x[2] | 0;
            x[3] = d + x[3] | 0;
        };
        Md5.prototype.start = function () {
            this._dataLength = 0;
            this._bufferLength = 0;
            this._state.set(Md5.stateIdentity);
            return this;
        };
        Md5.prototype.appendStr = function (str) {
            var buf8 = this._buffer8;
            var buf32 = this._buffer32;
            var bufLen = this._bufferLength;
            var code;
            var i;
            for (i = 0; i < str.length; i += 1) {
                code = str.charCodeAt(i);
                if (code < 128) {
                    buf8[bufLen++] = code;
                }
                else if (code < 0x800) {
                    buf8[bufLen++] = (code >>> 6) + 0xC0;
                    buf8[bufLen++] = code & 0x3F | 0x80;
                }
                else if (code < 0xD800 || code > 0xDBFF) {
                    buf8[bufLen++] = (code >>> 12) + 0xE0;
                    buf8[bufLen++] = (code >>> 6 & 0x3F) | 0x80;
                    buf8[bufLen++] = (code & 0x3F) | 0x80;
                }
                else {
                    code = ((code - 0xD800) * 0x400) + (str.charCodeAt(++i) - 0xDC00) + 0x10000;
                    if (code > 0x10FFFF) {
                        throw new Error('Unicode standard supports code points up to U+10FFFF');
                    }
                    buf8[bufLen++] = (code >>> 18) + 0xF0;
                    buf8[bufLen++] = (code >>> 12 & 0x3F) | 0x80;
                    buf8[bufLen++] = (code >>> 6 & 0x3F) | 0x80;
                    buf8[bufLen++] = (code & 0x3F) | 0x80;
                }
                if (bufLen >= 64) {
                    this._dataLength += 64;
                    Md5._md5cycle(this._state, buf32);
                    bufLen -= 64;
                    buf32[0] = buf32[16];
                }
            }
            this._bufferLength = bufLen;
            return this;
        };
        Md5.prototype.appendAsciiStr = function (str) {
            var buf8 = this._buffer8;
            var buf32 = this._buffer32;
            var bufLen = this._bufferLength;
            var i;
            var j = 0;
            for (;;) {
                i = Math.min(str.length - j, 64 - bufLen);
                while (i--) {
                    buf8[bufLen++] = str.charCodeAt(j++);
                }
                if (bufLen < 64) {
                    break;
                }
                this._dataLength += 64;
                Md5._md5cycle(this._state, buf32);
                bufLen = 0;
            }
            this._bufferLength = bufLen;
            return this;
        };
        Md5.prototype.appendByteArray = function (input) {
            var buf8 = this._buffer8;
            var buf32 = this._buffer32;
            var bufLen = this._bufferLength;
            var i;
            var j = 0;
            for (;;) {
                i = Math.min(input.length - j, 64 - bufLen);
                while (i--) {
                    buf8[bufLen++] = input[j++];
                }
                if (bufLen < 64) {
                    break;
                }
                this._dataLength += 64;
                Md5._md5cycle(this._state, buf32);
                bufLen = 0;
            }
            this._bufferLength = bufLen;
            return this;
        };
        Md5.prototype.getState = function () {
            var self = this;
            var s = self._state;
            return {
                buffer: String.fromCharCode.apply(null, self._buffer8),
                buflen: self._bufferLength,
                length: self._dataLength,
                state: [s[0], s[1], s[2], s[3]]
            };
        };
        Md5.prototype.setState = function (state) {
            var buf = state.buffer;
            var x = state.state;
            var s = this._state;
            var i;
            this._dataLength = state.length;
            this._bufferLength = state.buflen;
            s[0] = x[0];
            s[1] = x[1];
            s[2] = x[2];
            s[3] = x[3];
            for (i = 0; i < buf.length; i += 1) {
                this._buffer8[i] = buf.charCodeAt(i);
            }
        };
        Md5.prototype.end = function (raw) {
            if (raw === void 0) { raw = false; }
            var bufLen = this._bufferLength;
            var buf8 = this._buffer8;
            var buf32 = this._buffer32;
            var i = (bufLen >> 2) + 1;
            var dataBitsLen;
            this._dataLength += bufLen;
            buf8[bufLen] = 0x80;
            buf8[bufLen + 1] = buf8[bufLen + 2] = buf8[bufLen + 3] = 0;
            buf32.set(Md5.buffer32Identity.subarray(i), i);
            if (bufLen > 55) {
                Md5._md5cycle(this._state, buf32);
                buf32.set(Md5.buffer32Identity);
            }
            dataBitsLen = this._dataLength * 8;
            if (dataBitsLen <= 0xFFFFFFFF) {
                buf32[14] = dataBitsLen;
            }
            else {
                var matches = dataBitsLen.toString(16).match(/(.*?)(.{0,8})$/);
                if (matches === null) {
                    return;
                }
                var lo = parseInt(matches[2], 16);
                var hi = parseInt(matches[1], 16) || 0;
                buf32[14] = lo;
                buf32[15] = hi;
            }
            Md5._md5cycle(this._state, buf32);
            return raw ? this._state : Md5._hex(this._state);
        };
        return Md5;
    }());
    Md5.stateIdentity = new Int32Array([1732584193, -271733879, -1732584194, 271733878]);
    Md5.buffer32Identity = new Int32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    Md5.hexChars = '0123456789abcdef';
    Md5.hexOut = [];
    Md5.onePassHasher = new Md5();
    if (Md5.hashStr('hello') !== '5d41402abc4b2a76b9719d911017c592') {
        console.error('Md5 self test failed.');
    }

    var PropWatcher = /** @class */ (function () {
        function PropWatcher() {
        }
        PropWatcher.watch = function (obj, prop, after, before) {
            var oldval = obj[prop], newval = oldval, getter = function () {
                return newval;
            }, setter = function (val) {
                oldval = newval;
                if (before && typeof before === "function") {
                    newval = before.call(obj, prop, oldval, val);
                }
                else {
                    newval = val;
                }
                if (oldval != newval) {
                    Promise.resolve().then(function () { after.call(obj, prop, oldval, newval); });
                }
                return newval;
            };
            if (delete obj[prop]) {
                if (Object.defineProperty) {
                    Object.defineProperty(obj, prop, {
                        configurable: true,
                        get: getter,
                        set: setter
                    });
                }
                else if (Object.prototype["__defineGetter__"] && Object.prototype["__defineGetter__"]) {
                    Object.prototype["__defineGetter__"].call(obj, prop, getter);
                    Object.prototype["__defineGetter__"].call(obj, prop, setter);
                }
            }
            return function () { PropWatcher.unwatch(obj, prop); };
        };
        PropWatcher.unwatch = function (obj, prop) {
            var val = obj[prop];
            delete obj[prop];
            obj[prop] = val;
        };
        return PropWatcher;
    }());

    exports.AppGlobalConfig = AppGlobalConfig;
    exports.AppGlobalConfigToken = AppGlobalConfigToken;
    exports.AppInitService = AppInitService;
    exports.AuthService = AuthService;
    exports.BaseMapComponent = BaseMapComponent;
    exports.BasePanelComponent = BasePanelComponent;
    exports.BaseSettingComponent = BaseSettingComponent;
    exports.BaseWidgetComponent = BaseWidgetComponent;
    exports.BaseWidgetFrame = BaseWidgetFrame;
    exports.BaseWidgetPanel = BaseWidgetPanel;
    exports.BaseWidgetSetting = BaseWidgetSetting;
    exports.CommonService = CommonService;
    exports.CompContainerComponent = CompContainerComponent;
    exports.ComponentContainerDirective = ComponentContainerDirective;
    exports.ComponentLoaderService = ComponentLoaderService;
    exports.ComponentRegister = ComponentRegister;
    exports.ComponentRegistry = ComponentRegistry;
    exports.ConfigLoaderService = ConfigLoaderService;
    exports.ConfigManagerService = ConfigManagerService;
    exports.DefaultPanelOptions = DefaultPanelOptions;
    exports.EpsGISNgxViewerModule = EpsGISNgxViewerModule;
    exports.EpsGisCompContainerModule = EpsGisCompContainerModule;
    exports.EpsGisDirectivesModule = EpsGisDirectivesModule;
    exports.EpsGisMenuTabModule = EpsGisMenuTabModule;
    exports.EpsGisModalModule = EpsGisModalModule;
    exports.EpsGisModule = EpsGisModule;
    exports.EpsGisWidgetBaseModule = EpsGisWidgetBaseModule;
    exports.EventEmitterService = EventEmitterService;
    exports.GISAuthService = GISAuthService;
    exports.HttpReqService = HttpReqService;
    exports.IdGenerater = IdGenerater;
    exports.LayoutManagerService = LayoutManagerService;
    exports.LocalStorageHelper = LocalStorageHelper;
    exports.MapManagerService = MapManagerService;
    exports.Md5 = Md5;
    exports.MenuTabComponent = MenuTabComponent;
    exports.MenuTabService = MenuTabService;
    exports.ModalManagerService = ModalManagerService;
    exports.OnScreenWidgetPanel = OnScreenWidgetPanel;
    exports.PanelManagerService = PanelManagerService;
    exports.PanelTitleBarComponent = PanelTitleBarComponent;
    exports.PipesModule = PipesModule;
    exports.PlatformService = PlatformService;
    exports.PropWatcher = PropWatcher;
    exports.RequestResultModel = RequestResultModel;
    exports.ResultfofComponent = ResultfofComponent;
    exports.ResultfooComponent = ResultfooComponent;
    exports.ResultfotComponent = ResultfotComponent;
    exports.SSModalAPI = SSModalAPI;
    exports.SafeUrlPipe = SafeUrlPipe;
    exports.ServiceInjector = ServiceInjector;
    exports.SharedUtilsService = SharedUtilsService;
    exports.SimpleReuseStrategy = SimpleReuseStrategy;
    exports.SsModalFooterComponent = SsModalFooterComponent;
    exports.SsModalFooterDirective = SsModalFooterDirective;
    exports.SsModalOptions = SsModalOptions;
    exports.SsModalRef = SsModalRef;
    exports.SsModalTitleBarButtonComponent = SsModalTitleBarButtonComponent;
    exports.TestAspect = TestAspect;
    exports.UtilsService = UtilsService;
    exports.WidgetManagerService = WidgetManagerService;
    exports.WidgetPlaceHolderService = WidgetPlaceHolderService;
    exports.WidgetPlaceholder = WidgetPlaceholder;
    exports.WidgetPosition = WidgetPosition;
    exports.WidgetSettingComponent = WidgetSettingComponent;
    exports.applyConfigDefaults = applyConfigDefaults;
    exports.aspect = aspect;
    exports.defaultAppGlobalConfig = defaultAppGlobalConfig;
    exports.findComponentInfo = findComponentInfo;
    exports.getConfigFromComponent = getConfigFromComponent;
    exports.getPlatforms = getPlatforms;
    exports.isPlatform = isPlatform;
    exports.isPromise = isPromise;
    exports.loadGlobalConfig = loadGlobalConfig;
    exports.setContentInstanceParams = setContentInstanceParams;
    exports.setGlobalConfig = setGlobalConfig;
    exports.setupPlatforms = setupPlatforms;
    exports.simpleLoader = simpleLoader;
    exports.testUserAgent = testUserAgent;
    exports.throwNzModalContentAlreadyAttachedError = throwNzModalContentAlreadyAttachedError;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=epsgis.umd.js.map
