import { CommonModule, NgIf, NgStyle, NgClass, DOCUMENT, NgForOf } from '@angular/common';
import { InjectionToken, ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdirectiveInject, ViewContainerRef, ɵɵdefineDirective, Directive, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, EventEmitter, NgZone, ɵɵdefineComponent, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵProvidersFeature, forwardRef, ɵɵelement, Component, ViewChild, Input, Output, ɵɵInheritDefinitionFeature, ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵelementEnd, ɵɵtext, ɵɵadvance, ɵɵproperty, ɵɵtemplate, ɵɵelementContainer, ɵɵclassProp, ɵɵpureFunction0, ɵɵnamespaceSVG, ɵɵgetInheritedFactory, HostListener, ɵɵsanitizeUrl, ChangeDetectorRef, ɵɵstyleProp, Optional, HostBinding, Renderer2, ɵɵelementContainerStart, ɵɵelementContainerEnd, ɵɵpropertyInterpolate, ɵɵtemplateRefExtractor, ɵɵreference, ElementRef, ɵɵtextInterpolate, ɵɵpureFunction1, ɵɵtextInterpolate1, ɵɵdefinePipe, Pipe, ɵɵpipe, ɵɵpipeBind2, ɵɵsanitizeResourceUrl, Inject, Injector, ComponentFactoryResolver, ReflectiveInjector, ApplicationRef, TemplateRef, SkipSelf, ɵɵprojection, ɵɵNgOnChangesFeature, ɵɵprojectionDef, ChangeDetectionStrategy, ɵɵsanitizeHtml, ɵɵclassMap, ɵɵattribute, ɵɵnamespaceHTML, ɵɵpureFunction2, ɵɵpureFunction3, ɵɵstyleMap, ɵɵsetComponentScope, APP_INITIALIZER } from '@angular/core';
import { cloneDeep, merge, forEach, extend, clone, some, find, filter, map, each } from 'lodash';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { NzResultComponent, NzResultExtraDirective, NzResultModule } from 'ng-zorro-antd/result';
import { __decorate, __awaiter, __rest } from 'tslib';
import { loadModules } from 'esri-loader';
import { NG_VALUE_ACCESSOR, CheckboxControlValueAccessor, NgControlStatus, NgModel, FormsModule } from '@angular/forms';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { DomSanitizer, EventManager } from '@angular/platform-browser';
import { Subject, defer } from 'rxjs';
import { EventEmitter as EventEmitter$1 } from 'events';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { startWith, filter as filter$1, map as map$1 } from 'rxjs/operators';
import { PortalInjector, ComponentPortal } from '@angular/cdk/portal';
import { OverlayRef, Overlay } from '@angular/cdk/overlay';
import { NzContextMenuService, NzDropdownMenuComponent, NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTabSetComponent, NzTabComponent, NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzMenuDirective, NzMenuItemDirective, NzMenuDividerDirective } from 'ng-zorro-antd/menu';

class LogService {
    static overwriteLog(log) {
        const CONSOLE_METHODS = ['debug', 'error', 'info', "log", 'warn', 'time', 'timeEnd', 'count'];
        CONSOLE_METHODS.forEach((item) => {
            window.console[item] = (function (oriLogFunc) {
                return function () {
                    if (log) {
                        try {
                            oriLogFunc.call(console, ...arguments);
                        }
                        catch (e) {
                            console.error('console.log error', e);
                        }
                    }
                };
            })(window.console[item]);
        });
    }
}

const AppGlobalConfigToken = new InjectionToken('app_global_config');
const defaultGlobalConfigPath = "assets/global.json";
const defuaultConfigPath = "assets/config.json";
class AppInitService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getPath() {
        let fullPath, path;
        fullPath = window.location.pathname;
        if (fullPath === '/' || fullPath.substr(fullPath.length - 1) === '/') {
            path = fullPath;
        }
        else {
            let sections = fullPath.split('/');
            path = sections.join('/') + '/';
        }
        return path;
    }
    getUrlParams() {
        let s = window.location.search, p;
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
            let strs = s.substr(1).split("&");
            for (let i = 0; i < strs.length; i++) {
                p[strs[i].split("=")[0]] = decodeURIComponent((strs[i].split("=")[1]));
            }
        }
        return p;
    }
    init(__config) {
        let __mergedConfig = cloneDeep(defaultAppGlobalConfig);
        if (!__mergedConfig.path) {
            __mergedConfig.path = __mergedConfig.appInfo.path = this.getPath();
        }
        __mergedConfig.urlParams = merge(__mergedConfig.urlParams, this.getUrlParams());
        if (__mergedConfig.jimuConfig.isDesignMode === true
            && typeof __mergedConfig.urlParams.config === "string" && __mergedConfig.urlParams.config.length >= 1) {
            __mergedConfig.appInfo.configFile = "./project/" + __mergedConfig.urlParams.config + "/config.json";
            __mergedConfig.appInfo.extendInitjs = "./project/" + __mergedConfig.urlParams.config + "/thirdpartyLibs/init.js";
            __mergedConfig.appInfo.folderUrlPrefix = "./project/" + __mergedConfig.urlParams.config;
        }
        if (__config) {
            __mergedConfig = merge(__mergedConfig, __config);
        }
        this._mergedConfig = __mergedConfig;
        return this;
    }
    loadGlobalConfig() {
        return new Promise((resolve, reject) => {
            this._mergedConfig.globalConfigFilePath = this._mergedConfig.globalConfigFilePath || defaultGlobalConfigPath;
            if (this._mergedConfig.globalConfigFilePath) {
                this.httpClient.get(this._mergedConfig.globalConfigFilePath).toPromise().then((cfg) => {
                    if (cfg) {
                        this._mergedConfig = Object.assign(Object.assign({}, this._mergedConfig), cfg);
                        if (cfg.title) {
                            document.title = cfg.title;
                        }
                    }
                    LogService.overwriteLog(this._mergedConfig.log);
                    resolve(true);
                }).catch(err => {
                    console.log("配置文件global.json读取失败");
                    resolve(true);
                });
            }
            else {
                console.log("没有global.json");
                resolve(true);
            }
        });
    }
    getConfig() {
        return this._mergedConfig;
    }
}
AppInitService.ɵfac = function AppInitService_Factory(t) { return new (t || AppInitService)(ɵɵinject(HttpClient)); };
AppInitService.ɵprov = ɵɵdefineInjectable({ token: AppInitService, factory: AppInitService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(AppInitService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: HttpClient }]; }, null); })();
class AppGlobalConfig {
}
AppGlobalConfig.ɵfac = function AppGlobalConfig_Factory(t) { return new (t || AppGlobalConfig)(); };
AppGlobalConfig.ɵprov = ɵɵdefineInjectable({ token: AppGlobalConfig, factory: AppGlobalConfig.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(AppGlobalConfig, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
const defaultAppGlobalConfig = {
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

class ComponentContainerDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
ComponentContainerDirective.ɵfac = function ComponentContainerDirective_Factory(t) { return new (t || ComponentContainerDirective)(ɵɵdirectiveInject(ViewContainerRef)); };
ComponentContainerDirective.ɵdir = ɵɵdefineDirective({ type: ComponentContainerDirective, selectors: [["", "component-host", ""]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ComponentContainerDirective, [{
        type: Directive,
        args: [{
                selector: '[component-host]'
            }]
    }], function () { return [{ type: ViewContainerRef }]; }, null); })();

class EpsGisDirectivesModule {
}
EpsGisDirectivesModule.ɵmod = ɵɵdefineNgModule({ type: EpsGisDirectivesModule });
EpsGisDirectivesModule.ɵinj = ɵɵdefineInjector({ factory: function EpsGisDirectivesModule_Factory(t) { return new (t || EpsGisDirectivesModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(EpsGisDirectivesModule, { declarations: [ComponentContainerDirective], imports: [CommonModule], exports: [ComponentContainerDirective] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(EpsGisDirectivesModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [
                    ComponentContainerDirective
                ],
                exports: [ComponentContainerDirective]
            }]
    }], null, null); })();

var WidgetType;
(function (WidgetType) {
    WidgetType["widget"] = "widget";
    WidgetType["panel"] = "panel";
    WidgetType["icon"] = "icon";
})(WidgetType || (WidgetType = {}));
class WidgetPosition {
    constructor(top, left, bottom, right, height, width, zIndex, position, relativeTo = "") {
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
}
var WidgetState;
(function (WidgetState) {
    WidgetState["closed"] = "closed";
    WidgetState["opened"] = "opened";
    WidgetState["active"] = "active";
})(WidgetState || (WidgetState = {}));
var WidgetWindowState;
(function (WidgetWindowState) {
    WidgetWindowState["normal"] = "normal";
    WidgetWindowState["minimized"] = "minimized";
    WidgetWindowState["maximized"] = "maximized";
    WidgetWindowState["collapsed"] = "collapsed";
})(WidgetWindowState || (WidgetWindowState = {}));

class BaseWidget {
    constructor() {
        this.type = WidgetType.widget;
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
        this.state = WidgetState.closed;
        this.windowState = WidgetWindowState.normal;
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
    afterNgOnInit() {
    }
    afterNgAfterViewInit() {
    }
    ngOnInit() {
        this.afterNgOnInit();
    }
    ngAfterViewInit() {
        this.afterNgAfterViewInit();
    }
    ngOnDestroy() {
    }
    getCompInfo() {
        return this._compInfo;
    }
    setServiceInjector(serviceInjector) {
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
    }
    setPosition(positionConfig) {
        this.position = this.commonService.getPosition(positionConfig);
        this.originPosition = cloneDeep(this.position);
    }
    changePosition(positionConfig) {
        this.position = this.commonService.getPosition(positionConfig);
    }
    setState(state) {
        this.state = state;
    }
    startup() {
        this.started = true;
    }
    onOpen() {
        this.state = WidgetState.opened;
    }
    resize(position) {
    }
    onDeActive() {
    }
    onClose() {
        this.state = WidgetState.closed;
    }
    onAction(name, data) {
    }
    setZIndex(index) {
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
    }
    onNormalize() {
    }
    onMinimize() { }
    onMaximize() {
    }
    changeMap(map) {
        this.map = map;
        this.eventService.rss.emit(this.eventService._mapChanged, map);
    }
    onMapChange(map) {
    }
    changeView(view) {
        this.view = view;
        this.eventService.rss.emit(this.eventService._viewChanged, view);
    }
    onViewChange(view) {
    }
    get isSettingMode() {
        var _a;
        return ((_a = this.globalParams) === null || _a === void 0 ? void 0 : _a.urlParams["mode"]) === "config";
    }
}
BaseWidget.ɵfac = function BaseWidget_Factory(t) { return new (t || BaseWidget)(); };
BaseWidget.ɵdir = ɵɵdefineDirective({ type: BaseWidget });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(BaseWidget, [{
        type: Directive
    }], function () { return []; }, null); })();

class RequestResultModel {
    constructor(success, msg = "", data = null) {
        this.success = success;
        this.msg = msg;
        this.data = data;
        this.error = { errorCode: "", errorMsg: "" };
    }
}
var OrderByType;
(function (OrderByType) {
    OrderByType[OrderByType["asc"] = 0] = "asc";
    OrderByType[OrderByType["desc"] = 1] = "desc";
})(OrderByType || (OrderByType = {}));

const ComponentRegistry = new Map();
const ComponentRegister = (info) => {
    return (cls) => {
        if (cls.getCompInfo && typeof cls.getCompInfo === "function") {
            const c = cls.getCompInfo();
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
        const reg = Object.assign({}, info, { component: cls });
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
const _c0 = ["jsoneditor"];
let JsonEditorComponent = JsonEditorComponent_1 = class JsonEditorComponent {
    constructor(zone) {
        this.jsonRess = [
            "assets/json-editor/930/jsoneditor.min.css",
            "assets/json-editor/930/jsoneditor.min.js"
        ];
        this.dataChange = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onError = new EventEmitter();
        this.disabled = false;
        this.zone = zone;
    }
    get data() {
        return this._data;
    }
    set data(val) {
        this._data = val;
        this.writeValue(val);
        this.dataChange.emit(val);
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.initEditor(this.editorOptions || {});
    }
    ngOnDestroy() {
        this.destroy();
    }
    initEditor(options) {
        let defaultOptions = {
            enableSort: true,
            colorPicker: true,
            escapeUnicode: false,
            sortObjectKeys: true,
            history: true,
            modes: ['tree', 'view', 'form', 'code', 'text', 'preview'],
            language: "zh-CN",
            search: true,
            onChangeJSON: (json) => {
            },
            onChangeText: (jsonString) => {
            },
            onError: (error) => {
            }
        };
        if (this.onError.observers.length >= 1) {
            defaultOptions.onError = (v) => {
                this.onError.emit(v);
            };
        }
        const newOptions = Object.assign(options, defaultOptions);
        newOptions.onChange = () => {
            if (this.editor) {
                const value = this.editor.get();
                this.updateValue(value);
            }
        },
            this.editor = new JSONEditor(this.jsonEditorContianer.nativeElement, newOptions, this.data);
    }
    get value() {
        return this._value;
    }
    set value(v) {
        if (v !== this._value) {
            this._value = v;
            this._onChange(v);
        }
    }
    _onChange(_) {
    }
    _onTouched() {
    }
    registerOnChange(fn) {
        this._onChange = fn;
    }
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    updateValue(value) {
        this.zone.run(() => {
            this.value = value;
            this._onTouched();
            if (this.editor) {
                this.onChange.emit(value);
            }
        });
    }
    writeValue(value) {
        this._value = value;
        if (this.editor) {
            this.editor.set(value);
        }
    }
    getEditor() {
        return this.editor;
    }
    expandAll() {
        if (this.editor) {
            this.editor.expandAll();
        }
    }
    collapseAll() {
        if (this.editor) {
            this.editor.collapseAll();
        }
    }
    destroy() {
        if (this.editor) {
            this.editor.destroy();
        }
    }
    focus() {
        if (this.editor) {
            this.editor.focus();
        }
    }
    setMode(mode) {
        if (this.editor) {
            this.editor.setMode(mode);
        }
    }
    setModes(modes) {
        if (this.editor) {
            this.editor.setModes(modes);
        }
    }
    setName(name) {
        if (this.editor) {
            this.editor.setName(name);
        }
    }
    setSchema(schema) {
        if (this.editor) {
            this.editor.setSchema(schema);
        }
    }
    setText(jsonString) {
        if (this.editor) {
            this.editor.setText(jsonString);
        }
    }
    getMode() {
        if (this.editor) {
            return this.editor.getMode();
        }
    }
    getName() {
        if (this.editor) {
            return this.editor.getName();
        }
    }
    getText() {
        if (this.editor) {
            return this.editor.getText();
        }
    }
};
JsonEditorComponent.ɵfac = function JsonEditorComponent_Factory(t) { return new (t || JsonEditorComponent)(ɵɵdirectiveInject(NgZone)); };
JsonEditorComponent.ɵcmp = ɵɵdefineComponent({ type: JsonEditorComponent, selectors: [["epsgis-json-editor"]], viewQuery: function JsonEditorComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0, 3);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.jsonEditorContianer = _t.first);
    } }, inputs: { data: "data", editorOptions: ["options", "editorOptions"], treeMaxHeight: "treeMaxHeight" }, outputs: { dataChange: "dataChange", onChange: "onChange", onError: "onError" }, features: [ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => JsonEditorComponent_1),
                multi: true
            }
        ])], decls: 2, vars: 0, consts: [["jsoneditor", ""]], template: function JsonEditorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "div", null, 0);
    } }, styles: ["[_nghost-%COMP%]     .jsoneditor-poweredBy{\n      display: none;\n    }\n    [_nghost-%COMP%] > div[_ngcontent-%COMP%]{\n        height: 100%;\n    }"] });
JsonEditorComponent = JsonEditorComponent_1 = __decorate([
    ComponentRegister({
        uri: 'epsgis-json-editor',
        path: "components/shared/json-editor"
    })
], JsonEditorComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(JsonEditorComponent, [{
        type: Component,
        args: [{
                selector: 'epsgis-json-editor',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => JsonEditorComponent),
                        multi: true
                    }
                ],
                template: `<div #jsoneditor></div>`,
                styles: [`
    :host ::ng-deep .jsoneditor-poweredBy{
      display: none;
    }
    :host>div{
        height: 100%;
    }
  `]
            }]
    }], function () { return [{ type: NgZone }]; }, { jsonEditorContianer: [{
            type: ViewChild,
            args: ["jsoneditor", { static: true }]
        }], data: [{
            type: Input
        }], dataChange: [{
            type: Output
        }], editorOptions: [{
            type: Input,
            args: ["options"]
        }], treeMaxHeight: [{
            type: Input
        }], onChange: [{
            type: Output
        }], onError: [{
            type: Output
        }] }); })();

class BaseSettingComponent extends BaseWidget {
    constructor() {
        super();
        this.configFileName = "config.json";
        this.manifestFileName = "manifest.json";
        this.validateResult = new RequestResultModel(false);
        this._needLoadManifest = false;
    }
    get needLoadManifest() {
        return this._needLoadManifest;
    }
    set needLoadManifest(value) {
        this._needLoadManifest = value;
    }
    ngOnInit() {
        super.ngOnInit();
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    get configJsonPhysicalPath() {
        return this.configJsonWebPath.replace(this.globalParams.widgetRootPath + "/", "");
    }
    get manifestJsonPhysicalPath() {
        return this.widgetInstance.getCompInfo().path + "/" + this.manifestFileName;
    }
    getValidateResult() {
        return this.validateResult;
    }
    setValidateResult(success, errMsg, data) {
        this.validateResult.success = success;
        this.validateResult.msg = errMsg;
        this.validateResult.data = data;
    }
    saveConfigJson(json) {
        return this.settingService.saveConfig({ filePath: this.configJsonPhysicalPath, content: (typeof json === "string" ? json : JSON.stringify(json)) });
    }
    saveManifestJson(json) {
        return this.settingService.saveConfig({ filePath: this.manifestJsonPhysicalPath, content: typeof json === "string" ? json : JSON.stringify(json) });
    }
    onSaveError(error) {
        console.error(error);
    }
}
BaseSettingComponent.ɵfac = function BaseSettingComponent_Factory(t) { return new (t || BaseSettingComponent)(); };
BaseSettingComponent.ɵdir = ɵɵdefineDirective({ type: BaseSettingComponent, features: [ɵɵInheritDefinitionFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(BaseSettingComponent, [{
        type: Directive
    }], function () { return []; }, null); })();

const _c0$1 = ["config"];
const _c1 = ["manifest"];
function WidgetSettingComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 6);
    ɵɵelementStart(1, "span");
    ɵɵelementStart(2, "input", 7);
    ɵɵlistener("ngModelChange", function WidgetSettingComponent_div_1_Template_input_ngModelChange_2_listener($event) { ɵɵrestoreView(_r4); const ctx_r3 = ɵɵnextContext(); return ctx_r3.switchChecked = $event; })("change", function WidgetSettingComponent_div_1_Template_input_change_2_listener($event) { ɵɵrestoreView(_r4); const ctx_r5 = ɵɵnextContext(); return ctx_r5.changeMode($event); });
    ɵɵelementEnd();
    ɵɵtext(3, " \u7F16\u8F91\u5668 ");
    ɵɵelementStart(4, "label", 8);
    ɵɵelement(5, "em");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngModel", ctx_r0.switchChecked);
} }
const _c2 = function () { return { name: "\u7EC4\u4EF6\u914D\u7F6E\u4FE1\u606F" }; };
const _c3 = function () { return { name: "\u7EC4\u4EF6\u4FE1\u606F" }; };
class WidgetSettingComponent extends BaseSettingComponent {
    constructor() {
        super();
        this.currentMode = 0;
        this.showSwitchBtn = false;
        this.previousMode = 0;
        this.switchChecked = false;
        this.needLoadManifest = true;
    }
    ngOnInit() {
        this.setValidateResult(true);
        this.setServiceInjector(this.widgetInstance.componentLoader.getServiceInjector());
        this.widgetConfig = this.widgetInstance.widgetConfig;
        this.configJsonWebPath = this.widgetConfig.folderUrl.split('?')[0] + (this.widgetConfig.configPath || this.configFileName);
        this.manifestJsonWebPath = this.widgetConfig.folderUrl.split('?')[0] + this.manifestFileName;
        super.ngOnInit();
    }
    ngAfterViewInit() {
        this.loadWidgetConfig();
        if (this.needLoadManifest) {
            this.loadWidgetManifest();
        }
        super.ngAfterViewInit();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    switchToConfigOrManifest() {
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
    }
    changeMode(evt) {
        if (this.switchChecked) {
            this.currentMode = 1;
        }
        else {
            this.currentMode = 3;
        }
    }
    onSaveError(error) {
        if (this.settingComponentInstance) {
            this.settingComponentInstance.onSaveError(error);
        }
        else {
            console.error(error);
        }
    }
    saveAll() {
        return new Promise((resolve, reject) => {
            let result;
            switch (this.currentMode) {
                case 1:
                    result = this.getValidateResult();
                    if (result.success && this.editorConfig) {
                        this.saveConfigJson(this.editorConfig.getText()).then(res => {
                            if (res.success) {
                                res.data = {
                                    config: this.editorConfig.value,
                                    manifest: this.editorManifest.value
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
                    result = this.getValidateResult();
                    if (result.success && this.editorManifest) {
                        this.saveManifestJson(this.editorManifest.getText()).then(res => {
                            if (res.success) {
                                res.data = {
                                    config: this.editorConfig.value,
                                    manifest: this.editorManifest.value
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
                    if (this.settingComponentInstance) {
                        result = this.settingComponentInstance.getValidateResult();
                        if (result.success) {
                            this.settingComponentInstance.saveConfigJson(result.data).then(res => {
                                if (res.success) {
                                    res.data = {
                                        config: result.data,
                                        manifest: this.editorManifest.value
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
    }
    loadWidgetConfig() {
        if (!this.configJsonWebPath) {
            console.log("configJsonWebPath is null");
            return;
        }
        this.settingService.getConfigContent(this.configJsonWebPath).then(result => {
            this.configJson = result;
            this.onConfigJsonLoad(true, null);
        }).catch(err => this.onConfigJsonLoad(false, err));
    }
    loadWidgetManifest() {
        if (!this.manifestJsonWebPath) {
            console.log("manifestJsonWebPath is null");
            return;
        }
        this.settingService.getConfigContent(this.manifestJsonWebPath).then(result => {
            this.manifestJson = result;
            this.onManifestJsonLoad(true, null);
        }).catch(err => this.onManifestJsonLoad(false, err));
    }
    onConfigJsonLoad(succes, err) {
        if (!succes) {
            console.error(err);
        }
        if (this.widgetConfig.hasSetting === true) {
            const settingUri = this.widgetConfig.uri + "-setting";
            const comp = this.componentLoader.findComponent(settingUri);
            if (!comp) {
                console.info(`未找到setting组件[${settingUri}]，请检查组件定义`);
                this.currentMode = 1;
                return;
            }
            this.showSwitchBtn = true;
            this.currentMode = 3;
            this.switchChecked = false;
            const compRef = this.componentLoader.createComponent(comp, null, this.container);
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
    }
    onManifestJsonLoad(succes, err) {
        if (!succes) {
            console.error(err);
        }
    }
}
WidgetSettingComponent.ɵfac = function WidgetSettingComponent_Factory(t) { return new (t || WidgetSettingComponent)(); };
WidgetSettingComponent.ɵcmp = ɵɵdefineComponent({ type: WidgetSettingComponent, selectors: [["epsgis-widget-setting"]], viewQuery: function WidgetSettingComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$1, 1, JsonEditorComponent);
        ɵɵviewQuery(_c1, 1, JsonEditorComponent);
        ɵɵviewQuery(ComponentContainerDirective, 1, ViewContainerRef);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.editorConfig = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.editorManifest = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.container = _t.first);
    } }, features: [ɵɵInheritDefinitionFeature], decls: 10, vars: 17, consts: [["class", "switch", 4, "ngIf"], [1, "margin5"], [3, "data", "options", "dataChange"], ["config", ""], ["component-host", ""], ["manifest", ""], [1, "switch"], ["type", "checkbox", "id", "custom-ui", 3, "ngModel", "ngModelChange", "change"], ["for", "custom-ui"]], template: function WidgetSettingComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div");
        ɵɵtemplate(1, WidgetSettingComponent_div_1_Template, 6, 1, "div", 0);
        ɵɵelement(2, "div", 1);
        ɵɵelementStart(3, "epsgis-json-editor", 2, 3);
        ɵɵlistener("dataChange", function WidgetSettingComponent_Template_epsgis_json_editor_dataChange_3_listener($event) { return ctx.configJson = $event; });
        ɵɵelementEnd();
        ɵɵelementStart(5, "div");
        ɵɵelementContainer(6, 4);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(7, "div");
        ɵɵelementStart(8, "epsgis-json-editor", 2, 5);
        ɵɵlistener("dataChange", function WidgetSettingComponent_Template_epsgis_json_editor_dataChange_8_listener($event) { return ctx.manifestJson = $event; });
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵclassProp("show-config", ctx.currentMode == 1 || ctx.currentMode == 3);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.showSwitchBtn);
        ɵɵadvance(2);
        ɵɵclassProp("hide", ctx.currentMode != 1);
        ɵɵproperty("data", ctx.configJson)("options", ɵɵpureFunction0(15, _c2));
        ɵɵadvance(2);
        ɵɵclassProp("hide", ctx.currentMode != 3);
        ɵɵadvance(2);
        ɵɵclassProp("show-manifest", ctx.currentMode == 2);
        ɵɵadvance(1);
        ɵɵclassProp("hide", ctx.currentMode != 2);
        ɵɵproperty("data", ctx.manifestJson)("options", ɵɵpureFunction0(16, _c3));
    } }, directives: [NgIf, JsonEditorComponent, ComponentContainerDirective, CheckboxControlValueAccessor, NgControlStatus, NgModel], styles: [".show-manifest[_ngcontent-%COMP%]{display:\"\";height:100%}.show-config[_ngcontent-%COMP%]{display:\"\";height:calc(100% - 22px)}.hide[_ngcontent-%COMP%]{display:none}.margin5[_ngcontent-%COMP%]{margin-top:5px}.switch[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{clear:both;display:block;line-height:22px;text-align:right}.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:none}.switch[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:52px;background:#ccc;height:22px;border-radius:11px;float:right;box-shadow:inset 0 1px 2px rgba(0,0,0,.1);margin-left:20px}.switch[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{width:26px;height:20px;float:left;margin:1px;border-radius:10px;box-shadow:2px 3px 8px rgba(0,0,0,.1);background:#fff}.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]{background:#4390f7}.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{float:right}.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled + label[_ngcontent-%COMP%]{opacity:.5}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(WidgetSettingComponent, [{
        type: Component,
        args: [{
                selector: 'epsgis-widget-setting',
                templateUrl: './widget-setting.component.html',
                styleUrls: ['./widget-setting.component.scss'],
            }]
    }], function () { return []; }, { editorConfig: [{
            type: ViewChild,
            args: ["config", { read: JsonEditorComponent, static: false }]
        }], editorManifest: [{
            type: ViewChild,
            args: ["manifest", { read: JsonEditorComponent, static: false }]
        }], container: [{
            type: ViewChild,
            args: [ComponentContainerDirective, { read: ViewContainerRef, static: false }]
        }] }); })();

class IconSettingComponent {
}
IconSettingComponent.ɵfac = function IconSettingComponent_Factory(t) { return new (t || IconSettingComponent)(); };
IconSettingComponent.ɵcmp = ɵɵdefineComponent({ type: IconSettingComponent, selectors: [["epsgis-icon-setting"]], decls: 2, vars: 0, consts: [["viewBox", "0 0 1024 1024", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "height", "100%", "width", "100%"], ["d", "M512.6 706.2c-107 0-194.2-87-194.2-193.8 0-106.8 87-193.8 194.2-193.8 51.8 0 100.4 20.2 137.2 56.8 36.8 36.6 57 85.4 57 137 0 106.8-87.2 193.8-194.2 193.8M967.6 426h-0.2L876 405.8l-2.2-7c-6-19-13.8-38-24.2-58.2l-3.2-6.4 49.2-81.8c15-24 21.4-57 1.8-76.6l-46.2-46.2c-11.6-11.6-26.6-14-37-14-14.4 0-29.8 4.8-41.2 12.6l-0.2 0.2-79.8 51-6.6-3.4c-18.8-9.8-38.4-18-57.8-24.2l-7-2.2-20.4-92.2v-0.2c-4.8-26.2-27.6-54.4-56.4-54.4h-65.4c-27.8 0-46.6 27.8-52.8 55.4L404 148.8l-6.8 2.2c-20.8 6.6-41.6 15.4-61.6 25.8l-6.6 3.4L247.2 128l-0.2-0.2c-11.4-8-26.8-12.6-41.2-12.6-10.6 0-25.4 2.4-37 14L122.6 175.6c-19.6 19.6-13.2 52.6 1.8 76.6L175.8 338l-3.2 6.2c-9.6 19.2-16.8 37-22.2 54.4l-2.2 7L57 426h-0.2c-26.2 4.8-54.2 27.6-54.2 56.4v65.4c0 27.8 27.8 46.6 55.4 53l92 23 2.2 6.8c5.4 16.4 12.2 33 20.8 50.4l3 6.2-51.4 85.8c-15 24-21.4 57-1.8 76.6l46.2 46.2c11.6 11.6 26.6 14 37 14 14.4 0 29.8-4.8 41.2-12.6l0.2-0.2 82-52.2 6.6 3.4c20.2 10.6 41 19.4 61.8 26l6.8 2.2 22.6 90.8c6.4 27.6 25.2 55.4 52.8 55.4h65.4c28.8 0 51.6-28.2 56.4-54.4v-0.2l20.4-92.4 7-2.2c19.2-6.2 38.4-14.2 57-24l6.6-3.4 80 51 0.2 0.2c11.4 8 26.8 12.6 41.2 12.6 10.6 0 25.4-2.4 37-14l46.2-46.2c19.6-19.6 13.2-52.6-1.8-76.6l-49.2-82 3.2-6.2c9-18 16.8-36.2 22.6-54.2l2.2-6.6 92-23c27.6-6.4 55.4-25.2 55.4-53v-65.4c0-29-28.2-51.8-54.2-56.6"]], template: function IconSettingComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵnamespaceSVG();
        ɵɵelementStart(0, "svg", 0);
        ɵɵelement(1, "path", 1);
        ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(IconSettingComponent, [{
        type: Component,
        args: [{
                selector: "epsgis-icon-setting",
                template: `
    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" height="100%" width="100%">
          <path
            d="M512.6 706.2c-107 0-194.2-87-194.2-193.8 0-106.8 87-193.8 194.2-193.8 51.8 0 100.4 20.2 137.2 56.8 36.8 36.6 57 85.4 57 137 0 106.8-87.2 193.8-194.2 193.8M967.6 426h-0.2L876 405.8l-2.2-7c-6-19-13.8-38-24.2-58.2l-3.2-6.4 49.2-81.8c15-24 21.4-57 1.8-76.6l-46.2-46.2c-11.6-11.6-26.6-14-37-14-14.4 0-29.8 4.8-41.2 12.6l-0.2 0.2-79.8 51-6.6-3.4c-18.8-9.8-38.4-18-57.8-24.2l-7-2.2-20.4-92.2v-0.2c-4.8-26.2-27.6-54.4-56.4-54.4h-65.4c-27.8 0-46.6 27.8-52.8 55.4L404 148.8l-6.8 2.2c-20.8 6.6-41.6 15.4-61.6 25.8l-6.6 3.4L247.2 128l-0.2-0.2c-11.4-8-26.8-12.6-41.2-12.6-10.6 0-25.4 2.4-37 14L122.6 175.6c-19.6 19.6-13.2 52.6 1.8 76.6L175.8 338l-3.2 6.2c-9.6 19.2-16.8 37-22.2 54.4l-2.2 7L57 426h-0.2c-26.2 4.8-54.2 27.6-54.2 56.4v65.4c0 27.8 27.8 46.6 55.4 53l92 23 2.2 6.8c5.4 16.4 12.2 33 20.8 50.4l3 6.2-51.4 85.8c-15 24-21.4 57-1.8 76.6l46.2 46.2c11.6 11.6 26.6 14 37 14 14.4 0 29.8-4.8 41.2-12.6l0.2-0.2 82-52.2 6.6 3.4c20.2 10.6 41 19.4 61.8 26l6.8 2.2 22.6 90.8c6.4 27.6 25.2 55.4 52.8 55.4h65.4c28.8 0 51.6-28.2 56.4-54.4v-0.2l20.4-92.4 7-2.2c19.2-6.2 38.4-14.2 57-24l6.6-3.4 80 51 0.2 0.2c11.4 8 26.8 12.6 41.2 12.6 10.6 0 25.4-2.4 37-14l46.2-46.2c19.6-19.6 13.2-52.6-1.8-76.6l-49.2-82 3.2-6.2c9-18 16.8-36.2 22.6-54.2l2.2-6.6 92-23c27.6-6.4 55.4-25.2 55.4-53v-65.4c0-29-28.2-51.8-54.2-56.6">
          </path>
        </svg>
    `,
                styles: []
            }]
    }], null, null); })();

class BaseWidgetComponent extends BaseWidget {
    constructor() {
        super(...arguments);
        this.widgetSettingClassName = "ss-widget-setting";
        this.showSettingWhenInPanel = false;
    }
    ngOnInit() {
        if (!this.appConfig && this.widgetManager) {
            this.widgetManager.loadConfig(this.getCompInfo(), this).then(() => {
                this.afterNgOnInit();
            });
        }
        else {
            this.afterNgOnInit();
        }
    }
    onMouseEnter(target) {
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
            const div = document.createElement("div");
            div.className = this.widgetSettingClassName;
            if (!BaseWidgetComponent.settingIconEleNode) {
                const settingIconCompRef = this.componentLoader.createComponent(IconSettingComponent);
                BaseWidgetComponent.settingIconEleNode = settingIconCompRef.location.nativeElement;
            }
            const iconDiv = document.createElement("div");
            iconDiv.className = "icon";
            const newIconEle = BaseWidgetComponent.settingIconEleNode.cloneNode(true);
            iconDiv.appendChild(newIconEle);
            iconDiv.onclick = () => {
                this.openSetting();
            };
            iconDiv.cloneNode();
            div.appendChild(iconDiv);
            target.appendChild(div);
        }
    }
    onMouseLeave(target) {
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
    }
    getPanel() {
        if (this.inPanel === false) {
            return null;
        }
        let panel = null;
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
    }
    onConfigChanged(config) {
    }
    onAppConfigChanged(appConfig, reason, changedData) {
    }
    onAction(action, data) {
    }
    loadArcgisModules(modules, loadScriptOptions) {
        let _url = '';
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
        let options = {
            url: _url,
            css: _url.replace("init.js", "esri/css/main.css")
        };
        return loadModules(modules, Object.assign(options, loadScriptOptions));
    }
    openSetting(options) {
        let saving = false;
        const newOptions = Object.assign({ width: 700, height: 400 }, options);
        const modal = this.modalManager.create({
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
                    onClick: (instance) => {
                        instance.switchToConfigOrManifest();
                    }
                }
            ],
            okLoading: saving,
            onOk: (instance) => {
                instance.saveAll().then(result => {
                    if (result.success) {
                        instance.widgetInstance.config = result.data.config;
                        instance.widgetInstance.widgetConfig.config = result.data.config;
                        instance.widgetInstance.widgetConfig.manifest = merge({}, instance.widgetInstance.widgetConfig.manifest, result.data.manifest);
                        instance.widgetInstance.onConfigChanged(instance.widgetInstance.widgetConfig);
                        modal.close();
                    }
                    else {
                        instance.onSaveError(new Error(result.msg));
                    }
                    saving = false;
                }).catch(err => {
                    instance.onSaveError(err);
                    saving = false;
                });
                return false;
            }
        });
    }
}
BaseWidgetComponent.settingIconEleNode = null;
BaseWidgetComponent.ɵfac = function BaseWidgetComponent_Factory(t) { return ɵBaseWidgetComponent_BaseFactory(t || BaseWidgetComponent); };
BaseWidgetComponent.ɵdir = ɵɵdefineDirective({ type: BaseWidgetComponent, hostBindings: function BaseWidgetComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("mouseenter", function BaseWidgetComponent_mouseenter_HostBindingHandler($event) { return ctx.onMouseEnter($event.target); })("mouseleave", function BaseWidgetComponent_mouseleave_HostBindingHandler($event) { return ctx.onMouseLeave($event.target); });
    } }, inputs: { showSettingWhenInPanel: "showSettingWhenInPanel" }, features: [ɵɵInheritDefinitionFeature] });
const ɵBaseWidgetComponent_BaseFactory = ɵɵgetInheritedFactory(BaseWidgetComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(BaseWidgetComponent, [{
        type: Directive
    }], null, { showSettingWhenInPanel: [{
            type: Input
        }], onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter', ['$event.target']]
        }], onMouseLeave: [{
            type: HostListener,
            args: ['mouseleave', ['$event.target']]
        }] }); })();

function OnScreenWidgetIconComponent_img_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "img", 2);
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("src", ctx_r0.icon, ɵɵsanitizeUrl);
} }
function OnScreenWidgetIconComponent_i_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 3);
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("nzIconfont", ctx_r1.icon);
} }
let OnScreenWidgetIconComponent = class OnScreenWidgetIconComponent extends BaseWidgetComponent {
    constructor(viewContainerRef, cdrf) {
        super();
        this.viewContainerRef = viewContainerRef;
        this.cdrf = cdrf;
        this.widget = null;
        this.panel = null;
        this.panelConfig = null;
        this.isShowImg = true;
        this.spacing = 2;
        this.iconStyleDisplay = "";
        this.type = WidgetType.icon;
    }
    ngOnInit() {
        super.ngOnInit();
        this.startup();
    }
    setProps(options) {
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
        let _position = cloneDeep(this.widgetConfig.position);
        _position.width = "32px";
        _position.height = "32px";
        super.setPosition(_position);
        this.panelConfig = cloneDeep(this.widgetConfig);
        if (this.widgetConfig.showIcon === false) {
            this.iconStyleDisplay = "none";
        }
    }
    ngOnDestroy() {
        this.destroy();
    }
    ngAfterViewInit() {
    }
    resetPanelPosition() {
        if (this.commonService.isMobile()) {
            return this.panelConfig.position;
        }
        const _isInMap = this.widgetConfig.position.relativeTo !== "browser";
        let _containerBounds;
        if (_isInMap) {
            const _ele = this.commonService.getComponentRootNode(this.mapManager.comRefMap);
            if (_ele) {
                _containerBounds = this.commonService.getElementBounds(_ele);
            }
        }
        else {
            _containerBounds = document.querySelector("epsgis-comp-container").getBoundingClientRect();
        }
        let eleIcon = this.viewContainerRef.element.nativeElement, bounds = this.commonService.getElementBounds(eleIcon), inRight = false;
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
    }
    onMouseClick(evt) {
        this.onClick(evt);
    }
    startup() {
        this.started = true;
    }
    onClick(evt) {
        if (this.state === WidgetState.closed || (this.panel && this.panel.instance.state === WidgetState.closed)) {
            this.switchToOpen();
        }
        else {
            this.switchToClose();
        }
    }
    _isDockPanel() {
        let _uri = "", _dock = "";
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
    }
    switchToOpen() {
        if (!this._isDockPanel()) {
            this.panelManager.closeAllPanelsInGroup(this.widgetConfig.gid);
        }
        this.resetPanelPosition();
        if (this.widgetConfig.inPanel === false) {
            this.widgetManager.loadWidget(this.widgetConfig);
        }
        else {
            this.panelManager.showPanel(this.panelConfig, this.widget).then((panel) => {
                this.panel = panel;
                this.state = WidgetState.opened;
                this.panel.instance.panelIcon = this;
                if (this.panel.instance.isDockable()) {
                    this.panelManager.onMapResize();
                }
            });
        }
    }
    switchToClose() {
        if (this.widgetConfig.inPanel === false) {
            this.widgetManager.closeWidget(this.widget);
        }
        else {
            this.panelManager.closePanel(this.panel).then(panel => {
                this.state = WidgetState.closed;
            });
        }
    }
    moveTo(position) {
    }
    destroy() {
        if (this.panel && this.panelManager) {
            this.panelManager.destroyPanel(this.panel);
        }
        else if (this.widget) {
            this.widgetManager.destroyWidget(this.widget);
        }
    }
    getOffPanelWidgetPosition() {
    }
    _showLoading() {
    }
    _hideLoading() {
    }
    onMapChange(map) {
        this.map = map;
    }
    onViewChange(view) {
        this.view = view;
    }
};
OnScreenWidgetIconComponent.ɵfac = function OnScreenWidgetIconComponent_Factory(t) { return new (t || OnScreenWidgetIconComponent)(ɵɵdirectiveInject(ViewContainerRef, 8), ɵɵdirectiveInject(ChangeDetectorRef)); };
OnScreenWidgetIconComponent.ɵcmp = ɵɵdefineComponent({ type: OnScreenWidgetIconComponent, selectors: [["epsgis-on-screen-widget-icon"]], hostVars: 2, hostBindings: function OnScreenWidgetIconComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("click", function OnScreenWidgetIconComponent_click_HostBindingHandler($event) { return ctx.onMouseClick($event); });
    } if (rf & 2) {
        ɵɵstyleProp("display", ctx.iconStyleDisplay);
    } }, features: [ɵɵInheritDefinitionFeature], decls: 2, vars: 2, consts: [[3, "src", 4, "ngIf"], ["nz-icon", "", 3, "nzIconfont", 4, "ngIf"], [3, "src"], ["nz-icon", "", 3, "nzIconfont"]], template: function OnScreenWidgetIconComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, OnScreenWidgetIconComponent_img_0_Template, 1, 1, "img", 0);
        ɵɵtemplate(1, OnScreenWidgetIconComponent_i_1_Template, 1, 1, "i", 1);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.isShowImg);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.isShowImg);
    } }, directives: [NgIf, NzIconDirective], styles: [""] });
OnScreenWidgetIconComponent = __decorate([
    ComponentRegister({
        uri: "epsgis-on-screen-widget-icon",
        path: "components/on-screen-widget-icon"
    })
], OnScreenWidgetIconComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(OnScreenWidgetIconComponent, [{
        type: Component,
        args: [{
                selector: 'epsgis-on-screen-widget-icon',
                templateUrl: './on-screen-widget-icon.component.html',
                styleUrls: ['./on-screen-widget-icon.component.scss'],
            }]
    }], function () { return [{ type: ViewContainerRef, decorators: [{
                type: Optional
            }] }, { type: ChangeDetectorRef }]; }, { iconStyleDisplay: [{
            type: HostBinding,
            args: ["style.display"]
        }], onMouseClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }] }); })();

var PanelInMobileShowMode;
(function (PanelInMobileShowMode) {
    PanelInMobileShowMode["default"] = "default";
    PanelInMobileShowMode["drawer"] = "drawer";
    PanelInMobileShowMode["drawerRight"] = "drawerright";
    PanelInMobileShowMode["popup"] = "popup";
    PanelInMobileShowMode["action"] = "action";
    PanelInMobileShowMode["popover"] = "popover";
    PanelInMobileShowMode["modal"] = "modal";
})(PanelInMobileShowMode || (PanelInMobileShowMode = {}));
var PanelDockMode;
(function (PanelDockMode) {
    PanelDockMode["none"] = "none";
    PanelDockMode["left"] = "left";
    PanelDockMode["right"] = "right";
    PanelDockMode["bottom"] = "bottom";
})(PanelDockMode || (PanelDockMode = {}));
const DefaultPanelOptions = {
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
    dockSide: PanelDockMode.none,
    relativeTo: "map",
    innerHtml: "",
    url: ""
};

class AspectService {
    constructor() {
        this.nextId = 0;
        this.after = this._aspect("after");
        this.before = this._aspect("after");
        this.around = this._aspect("around");
    }
    static getInstance() {
        if (!this._instance) {
            this._instance = new AspectService();
        }
        return this._instance;
    }
    advise(dispatcher, type, advice, receiveArguments) {
        let previous = dispatcher[type];
        let around = type == "around";
        let signal;
        if (around) {
            let advised = advice(() => {
                return previous.advice(this, arguments);
            });
            signal = {
                remove: () => {
                    if (advised) {
                        advised = dispatcher = advice = null;
                    }
                },
                advice: (target, args) => {
                    return advised ?
                        advised.apply(target, args) :
                        previous.advice(target, args);
                }
            };
        }
        else {
            signal = {
                remove: () => {
                    if (signal.advice) {
                        let previous = signal.previous;
                        let next = signal.next;
                        if (!next && !previous) {
                            delete dispatcher[type];
                        }
                        else {
                            if (previous) {
                                previous.next = next;
                            }
                            else {
                                dispatcher[type] = next;
                            }
                            if (next) {
                                next.previous = previous;
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
    }
    _aspect(type) {
        return (target, methodName, advice, receiveArguments) => {
            let existing = target[methodName], dispatcher;
            if (!existing || existing.target != target) {
                target[methodName] = dispatcher = () => {
                    let executionId = dispatcher.nextId;
                    let args = arguments;
                    let before = dispatcher.before;
                    while (before) {
                        if (before.advice) {
                            args = before.advice.apply(this, args) || args;
                        }
                        before = before.next;
                    }
                    if (dispatcher.around) {
                        let results = dispatcher.around.advice(this, args);
                    }
                    let after = dispatcher.after;
                    while (after && after.id < executionId) {
                        if (after.advice) {
                            if (after.receiveArguments) {
                                let newResults = after.advice.apply(this, args);
                                results = newResults === undefined ? results : newResults;
                            }
                            else {
                                results = after.advice.call(this, results, args);
                            }
                        }
                        after = after.next;
                    }
                    return results;
                };
                if (existing) {
                    dispatcher.around = {
                        advice: (target, args) => {
                            return existing.apply(target, args);
                        }
                    };
                }
                dispatcher.target = target;
                dispatcher.nextId = dispatcher.nextId || 0;
            }
            let results = this.advise((dispatcher || existing), type, advice, receiveArguments);
            advice = null;
            return results;
        };
    }
}
AspectService._instance = null;
let aspect = AspectService.getInstance();
class TestAspect {
    constructor() {
        console.log("TestAspect constructor");
    }
    testBefore() {
        console.log("TestAspect testBefore");
    }
    testAfter() {
        console.log("TestAspect testAfter");
    }
    testAround() {
        console.log("TestAspect testAround");
    }
}

const _c0$2 = ["widget_content"];
const _c1$1 = ["sspanel_overlay"];
const _c2$1 = ["sspanel_titlebar"];
const _c3$1 = ["sspanel"];
class BasePanelComponent extends BaseWidget {
    constructor(_render, cdr) {
        super();
        this._render = _render;
        this.cdr = cdr;
        this.options = DefaultPanelOptions;
        this.currentPosition = undefined;
        this.savedPosition = undefined;
        this.currentSize = undefined;
        this.savedSize = undefined;
        this.isMouseEvent = false;
        this.originalPosition = undefined;
        this.dockMode = PanelDockMode.none;
        this._isRunInMobile = false;
        this._mobileShowMode = PanelInMobileShowMode.action;
        this._eventTempData = undefined;
    }
    ngOnInit() {
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
            if (this._mobileShowMode === PanelInMobileShowMode.drawer
                || this._mobileShowMode === PanelInMobileShowMode.drawerRight) {
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
                console.log(`open panel[${this.widget.instance.uri}] error`);
                console.error(error);
            }
        }
        super.ngOnInit();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        if (this.widget) {
            this.widgetManager.destroyWidget(this.widget);
        }
    }
    ngAfterViewInit() {
        Promise.resolve(null).then(() => {
            this.startup();
            this.state = WidgetState.opened;
            this.loadAllWidgetsInOrder();
            this.onOpen();
            if (this.cdr && this.cdr["destroyed"] === false) {
                this.cdr.detectChanges();
            }
            super.afterNgAfterViewInit();
        });
    }
    setPosition(positionConfig) {
        if (!this.widgetConfig.position.width) {
            this.widgetConfig.position.width = this.options.width;
        }
        if (!this.widgetConfig.position.height) {
            this.widgetConfig.position.height = this.options.height;
        }
        let w = this.commonService.getPxNumber(this.widgetConfig.position.width);
        let h = this.commonService.getPxNumber(this.widgetConfig.position.height);
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
        super.setPosition(this.widgetConfig.position);
    }
    _setPCPosition() {
        this.currentSize = { width: this.widgetConfig.position.width, height: this.widgetConfig.position.height };
        this.currentPosition = { left: undefined, top: undefined, width: undefined, height: undefined };
        this.currentPosition.left = this.commonService.getPxNumber(this.widgetConfig.position.left);
        this.currentPosition.top = this.commonService.getPxNumber(this.widgetConfig.position.top);
        this.currentPosition.width = this.commonService.getPxNumber(this.widgetConfig.position.width);
        this.currentPosition.height = this.commonService.getPxNumber(this.widgetConfig.position.height);
        this.savedPosition = cloneDeep(this.currentPosition);
        this.originalPosition = cloneDeep(this.currentPosition);
    }
    _setMobilePosition() {
    }
    loadAllWidgetsInOrder() {
        const configs = [this.widgetConfig];
        forEach(configs, (wConfig) => {
            if (wConfig.visible === false) {
                return;
            }
            this.widgetManager.loadWidget(wConfig).then((widget) => {
                this.widget = widget;
                if (this.options.showTitle === false) {
                    this.widget.instance.showSettingWhenInPanel = true;
                }
                this.widget.instance.reqPara = this.reqPara;
                this.widgetContainer.insert(this.widget.hostView);
                aspect.after(this.widget.instance, "afterNgAfterViewInit", () => {
                    this.widget.instance.started = true;
                    this.widget.instance.state = WidgetState.opened;
                    this.widget.instance.windowState = WidgetWindowState.normal;
                    this.widget.instance.startup();
                });
            });
        });
    }
    getAllWidgetConfigs() {
        let configs = [];
        if (Array.isArray(this.config.widgets)) {
            configs = this.config.widgets;
        }
        else {
            configs = [this.widgetConfig];
        }
        return configs;
    }
    isDockable() {
        return this.dockMode === PanelDockMode.left ||
            this.dockMode === PanelDockMode.bottom ||
            this.dockMode === PanelDockMode.right;
    }
    startup() {
        this.started = true;
    }
    setWidget(widget) {
        this.widget = widget;
        if (this.options.showTitle === false) {
            this.widget.instance.showSettingWhenInPanel = true;
        }
    }
    setOptions(options) {
        if (this.widgetConfig && this.widgetConfig.panel) {
            merge(options, this.widgetConfig.panel);
        }
        this.options = merge(cloneDeep(DefaultPanelOptions), options);
        this.options.buttonSetting = this.isSettingMode;
    }
    setWindowState(state) {
        this.windowState = state;
    }
    setState(state) {
        switch (state) {
            case WidgetState.opened:
                this.showPanel();
                break;
            case WidgetState.closed:
                this.hidePanel();
                break;
            case WidgetState.active:
                break;
            default:
                break;
        }
        this.state = state;
        if (this.widget) {
            this.widget.instance.setState(state);
        }
    }
    showPanel() {
        this.sspanelOverlay.nativeElement.parentElement.style.display = '';
        if (this.widget) {
            this.commonService.getComponentRootNode(this.widget).style.display = '';
        }
        this.onOpen();
        this.state = WidgetState.opened;
    }
    hidePanel() {
        this.sspanelOverlay.nativeElement.parentElement.style.display = 'none';
        if (this.widget) {
            this.commonService.getComponentRootNode(this.widget).style.display = 'none';
        }
        this.onClose();
        this.state = WidgetState.closed;
    }
    closePanel(event) {
        this.panelManager.closePanel(this.id);
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
    }
    onNormalize() {
        if (this.widget) {
            this.widget.instance.onNormalize();
        }
    }
    onMinimize() {
        if (this.widget) {
            this.widget.instance.onMinimize();
        }
    }
    onMaximize() {
        if (this.widget) {
            this.widget.instance.onMaximize();
        }
    }
    resize(position) {
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
            this.widgetConfig.position = merge(this.widgetConfig.position, position);
            this.setPosition(position);
        }
    }
    onResize() {
        if (this.widget) {
            this.widget.instance.resize();
        }
    }
    onActive() {
    }
    onDeActive() {
    }
    onCollapse() {
    }
    onExpand() {
    }
    onMove() {
    }
    onPositionChange(position) {
        this.setPosition(position);
    }
    onOpen() {
        if (this.widget && this.widget.instance.started) {
            this.widget.instance.onOpen();
        }
    }
    onClose() {
        if (this.widget) {
            this.widgetManager.closeWidget(this.widget);
        }
    }
    onMouseEnter(target) {
        if (this.moveTopOnActive) {
            this.panelManager._activePanel(this.id);
        }
    }
    onMouseLeave() {
    }
    _getCurrentPosition() {
        let _position = this.currentPosition;
        if (_position.top === "auto") {
            _position.top = this.position.top;
        }
        if (_position.left === "auto" || _position.left === 0) {
            const _panelBounds = this.commonService.getElementBounds(this.sspanel.nativeElement);
            const _isInMap = this.widgetConfig.position.relativeTo !== "browser";
            let _containerBounds;
            if (_isInMap) {
                const _ele = this.commonService.getComponentRootNode(this.mapManager.comRefMap);
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
        return merge({}, _position);
    }
    _setCurrentPosition(position) {
        this.currentPosition = merge(this.currentPosition, position);
    }
    _saveCurrentPosition() {
        this.savedPosition = this._getCurrentPosition();
    }
    _restoreSavedPosition() {
        return this._changePosition(this.savedPosition);
    }
    _changePosition(params) {
        let defRet = this.commonService.createPromiseDefer();
        let settings = this.options;
        let animationTime = (params.animationTime !== undefined) ? parseInt(params.animationTime) : settings.animationTime;
        let newPosition = {
            top: params.top,
            left: params.left,
            bottom: params.bottom,
            right: params.right
        };
        if (params.check) {
            if (!(this.state === WidgetState.opened) ||
                this.windowState === WidgetWindowState.maximized ||
                this.windowState === WidgetWindowState.minimized)
                return;
            if (settings.keepInViewport) {
                let size = this._getCurrentSize();
                let $window = this._getWindowSize();
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
        let currentPosition = this._getCurrentPosition();
        if (currentPosition.top != newPosition.top || currentPosition.left != newPosition.left) {
            this.position = merge(this.position, {
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
    }
    _getWindowSize() {
        return {
            height: () => {
                return window.innerHeight;
            },
            width: () => {
                return window.outerWidth;
            }
        };
    }
    _getCurrentSize() {
        return merge({}, this.currentSize);
    }
    _saveCurrentSize() {
        this.savedSize = this._getCurrentSize();
    }
    _setCurrentSize(size) {
        this.currentSize = merge(this.currentSize, size);
    }
    _restoreSavedSize() {
        return this._changeSize(merge({
            checkPosition: true,
            checkSize: false,
            event: false
        }, this.savedSize));
    }
    _convertToStyleVal(val) {
        if (val == "0")
            return "0px";
        if (!val)
            return "";
        if (val === "auto" || val == "100%")
            return val;
        let _w = parseFloat(val), _ws = "";
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
    }
    _changeSize(params) {
        let defRet = this.commonService.createPromiseDefer();
        let settings = this.options;
        let animationTime = (params.animationTime !== undefined) ? parseInt(params.animationTime) : settings.animationTime;
        let newSize = {
            width: params.width,
            height: params.height
        };
        if (params.checkSize) {
            if (this.state === WidgetState.closed
                || this.windowState === WidgetWindowState.minimized ||
                this.windowState === WidgetWindowState.maximized)
                return;
            if (settings.maxWidth && newSize.width > settings.maxWidth)
                newSize.width = settings.maxWidth;
            if (settings.minWidth && newSize.width < settings.minWidth)
                newSize.width = settings.minWidth;
            if (settings.maxHeight && newSize.height > settings.maxHeight)
                newSize.height = settings.maxHeight;
            if (settings.minHeight && newSize.height < settings.minHeight)
                newSize.height = settings.minHeight;
            if (this.windowState === WidgetWindowState.collapsed) {
                this.currentSize = merge({}, newSize);
                delete newSize.height;
            }
        }
        let currentSize = this._getCurrentSize();
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
    }
    _getBordersWidth(border) {
        if (border !== undefined) {
            return this._getBorderWidth(this.sspanel.nativeElement, border);
        }
        return {
            top: this._getBorderWidth(this.sspanel.nativeElement, "top"),
            bottom: this._getBorderWidth(this.sspanel.nativeElement, "top"),
            left: this._getBorderWidth(this.sspanel.nativeElement, "top"),
            right: this._getBorderWidth(this.sspanel.nativeElement, "top")
        };
    }
    _getBorderWidth(ele, border) {
        if (border.toLowerCase() === "top")
            border = "Top";
        if (border.toLowerCase() === "left")
            border = "Left";
        if (border.toLowerCase() === "right")
            border = "Right";
        if (border.toLowerCase() === "bottom")
            border = "Bottom";
        let w = ele.style[`border${border}Width`];
        if (!w)
            w = 0;
        return parseInt(w, 10);
    }
    _contentClick(evt) {
        this.panelManager._activePanel(this.id);
    }
    _titlebar_MouseDown(event) {
        if (this.commonService.isMobile())
            return;
        if (this.isDockable())
            return;
        if (this.options.draggable !== true)
            return;
        this.isMouseEvent = false;
        this.panelManager._activePanel(this.id);
        let currentPosition = this._getCurrentPosition();
        let settings = this.options;
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
    }
    _resizer_MouseDown(event, resizeParams) {
        if (this.commonService.isMobile())
            return;
        let currentPosition = this._getCurrentPosition();
        let currentSize = this._getCurrentSize();
        let _data = {
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
    }
    _addDocumentMouseEventHandlers(eventData) {
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
    }
    _document_MouseMove(event) {
        let settings = this.options;
        let currentPosition = this._getCurrentPosition();
        let currentSize = this._getCurrentSize();
        let newPosition = {};
        let newSize = {};
        event.data = this._eventTempData;
        switch (event.data.action) {
            case "drag":
                newPosition.top = event.pageY - event.data.compensationY;
                newPosition.left = event.pageX - event.data.compensationX;
                if (settings.keepInViewport) {
                    let size = this._getCurrentSize();
                    let $window = this._getWindowSize();
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
                    let newWidth = (event.data.directionX == "left") ? event.data.startX - event.pageX : event.pageX - event.data.startX;
                    if (newWidth >= settings.minWidth && (!settings.maxWidth || newWidth <= settings.maxWidth)) {
                        newSize.width = newWidth;
                        if (event.data.directionX == "left")
                            newPosition.left = event.pageX - event.data.compensationX;
                    }
                }
                if (event.data.dimension != "width" && event.pageY > 0) {
                    let newHeight = (event.data.directionY == "top") ? event.data.startY - event.pageY : event.pageY - event.data.startY;
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
    }
    _document_MouseUp(event) {
        let settings = this.options;
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
            let currentPosition = this._getCurrentPosition();
            let currentSize = this._getCurrentSize();
            let savedData = this.tempSavedData;
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
    }
    _setIframeStyle() {
    }
    _isDockSide() {
        return false;
    }
    _maximize() {
        if (this.state === WidgetState.closed ||
            this.windowState === WidgetWindowState.maximized ||
            this.windowState === WidgetWindowState.minimized ||
            this.windowState === WidgetWindowState.collapsed) {
            return;
        }
        let settings = this.options;
        let eles = this.sspanel.nativeElement.querySelectorAll(".sspanel_statusbar_handle *, .sspanel_resizer, .sspanel_titlebar_button_collapse");
        eles.forEach((h, idx, arr) => {
            this._render.setStyle(h, "display", "none");
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
        let nposition = {
            top: 0,
            left: 0
        };
        if (this._isDockSide()) {
        }
        let defPosition = this._changePosition(nposition);
        let defSize = this._changeSize({
            width: "100%",
            height: "100%"
        });
        return Promise.all([defPosition, defSize]).then(() => {
            this.windowState = WidgetWindowState.maximized;
            this._setIframeStyle();
            this.onMaximize();
        });
    }
    _unmaximize() {
        if (this.state === WidgetState.closed
            || this.windowState !== WidgetWindowState.maximized)
            return;
        let settings = this.options;
        let defPosition = this._restoreSavedPosition();
        let defSize = this._restoreSavedSize();
        let eles = this.sspanel.nativeElement.querySelectorAll(".sspanel_statusbar_handle *, .sspanel_resizer, .sspanel_titlebar_button_collapse");
        eles.forEach((h, idx, arr) => {
            this._render.setStyle(h, "display", "");
        });
        if (settings.draggable) {
            this._render.addClass(this.sspanel_titlebar.nativeElement, "sspanel_titlebar_draggable");
        }
        if (!settings.modal) {
            this._render.setStyle(this.sspanelOverlay.nativeElement, "background-color", "");
            this._render.setStyle(this.sspanelOverlay.nativeElement, "width", "0");
            this._render.setStyle(this.sspanelOverlay.nativeElement, "height", "0");
        }
        return Promise.all([defPosition, defSize]).then(() => {
            this.windowState = WidgetWindowState.normal;
            this._setIframeStyle();
            this.onNormalize();
        });
    }
    _minimize() {
    }
    _unminimize() {
    }
    _collapse() {
        if (this.started !== true ||
            this.state === WidgetState.closed ||
            this.windowState === WidgetWindowState.maximized ||
            this.windowState === WidgetWindowState.collapsed ||
            this.windowState === WidgetWindowState.minimized)
            return;
        let settings = this.options;
        let eles = this.sspanel.nativeElement.querySelectorAll(".sspanel_content, .sspanel_statusbar, .sspanel_resizer, .sspanel_titlebar_button_maximize, .sspanel_titlebar_button_minimize");
        eles.forEach((h, idx, arr) => {
            this._render.setStyle(h, "display", "none");
        });
        this._saveCurrentSize();
        let defSize = this._changeSize({
            width: settings.collapsedWidth,
            height: this._getBordersWidth("top") + this._getBordersWidth("bottom") + this.sspanel_titlebar.nativeElement.offsetHeight
        });
        return Promise.all([defSize]).then(() => {
            this.windowState = WidgetWindowState.collapsed;
            this.onCollapse();
        });
    }
    _uncollapse() {
        if (this.started != true || this.state === WidgetState.closed || this.windowState !== WidgetWindowState.collapsed)
            return;
        let settings = this.options;
        let defSize = this._restoreSavedSize();
        let eles = this.sspanel.nativeElement.querySelectorAll(".sspanel_content, .sspanel_statusbar, .sspanel_resizer, .sspanel_titlebar_button_maximize, .sspanel_titlebar_button_minimize");
        eles.forEach((h, idx, arr) => {
            this._render.setStyle(h, "display", "");
        });
        return defSize.then(() => {
            this.windowState = WidgetWindowState.normal;
            this.onNormalize();
        });
    }
    _buttonMax_Click(event) {
        if (this.windowState !== WidgetWindowState.maximized) {
            this._maximize();
        }
        else {
            this._unmaximize();
        }
        event.preventDefault();
        event.stopPropagation();
    }
    _buttonCollapse_Click(event) {
        if (this.windowState !== WidgetWindowState.collapsed) {
            this._collapse();
        }
        else {
            this._uncollapse();
        }
        event.preventDefault();
        event.stopPropagation();
    }
    _buttonMin_Click(event) {
        if (this.windowState !== WidgetWindowState.minimized) {
            this._minimize();
        }
        else {
            this._unminimize();
        }
        event.preventDefault();
        event.stopPropagation();
    }
    openWidgetSetting() {
        if (!this.widget) {
            this.widget = this.widgetManager.getWidgetById(this.widgetConfig.id).instance;
        }
        if (!this.widget) {
            return;
        }
        this.widget.instance.openSetting();
    }
}
BasePanelComponent.ɵfac = function BasePanelComponent_Factory(t) { return new (t || BasePanelComponent)(ɵɵdirectiveInject(Renderer2, 8), ɵɵdirectiveInject(ChangeDetectorRef, 8)); };
BasePanelComponent.ɵdir = ɵɵdefineDirective({ type: BasePanelComponent, viewQuery: function BasePanelComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$2, 3, ViewContainerRef);
        ɵɵviewQuery(_c1$1, 3);
        ɵɵviewQuery(_c2$1, 3);
        ɵɵviewQuery(_c3$1, 3);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.widgetContainer = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.sspanelOverlay = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.sspanel_titlebar = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.sspanel = _t.first);
    } }, hostBindings: function BasePanelComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("mouseenter", function BasePanelComponent_mouseenter_HostBindingHandler($event) { return ctx.onMouseEnter($event.target); })("mouseleave", function BasePanelComponent_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, features: [ɵɵInheritDefinitionFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(BasePanelComponent, [{
        type: Directive
    }], function () { return [{ type: Renderer2, decorators: [{
                type: Optional
            }] }, { type: ChangeDetectorRef, decorators: [{
                type: Optional
            }] }]; }, { widgetContainer: [{
            type: ViewChild,
            args: ["widget_content", { read: ViewContainerRef, static: true }]
        }], sspanelOverlay: [{
            type: ViewChild,
            args: ["sspanel_overlay", { static: true }]
        }], sspanel_titlebar: [{
            type: ViewChild,
            args: ["sspanel_titlebar", { static: true }]
        }], sspanel: [{
            type: ViewChild,
            args: ["sspanel", { static: true }]
        }], onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter', ['$event.target']]
        }], onMouseLeave: [{
            type: HostListener,
            args: ['mouseleave']
        }] }); })();

class IconUnCollapsedComponent {
}
IconUnCollapsedComponent.ɵfac = function IconUnCollapsedComponent_Factory(t) { return new (t || IconUnCollapsedComponent)(); };
IconUnCollapsedComponent.ɵcmp = ɵɵdefineComponent({ type: IconUnCollapsedComponent, selectors: [["epsgis-icon-uncollapsed"]], decls: 3, vars: 0, consts: [["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 10 10", "height", "100%", "width", "100%"], ["fill", "none"], ["points", "1,3 9,3 5,8 1,3 9,3"]], template: function IconUnCollapsedComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵnamespaceSVG();
        ɵɵelementStart(0, "svg", 0);
        ɵɵelementStart(1, "g", 1);
        ɵɵelement(2, "polyline", 2);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(IconUnCollapsedComponent, [{
        type: Component,
        args: [{
                selector: "epsgis-icon-uncollapsed",
                template: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 10 10" height="100%" width="100%">
                <g fill="none">
                <polyline points="1,3 9,3 5,8 1,3 9,3"></polyline>
                </g>
            </svg>`,
                styles: []
            }]
    }], null, null); })();

class IconCollapsedComponent {
}
IconCollapsedComponent.ɵfac = function IconCollapsedComponent_Factory(t) { return new (t || IconCollapsedComponent)(); };
IconCollapsedComponent.ɵcmp = ɵɵdefineComponent({ type: IconCollapsedComponent, selectors: [["epsgis-icon-collapsed"]], decls: 3, vars: 0, consts: [["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 10 10", "height", "100%", "width", "100%"], ["fill", "none"], ["points", "1,7 9,7 5,2 1,7 9,7"]], template: function IconCollapsedComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵnamespaceSVG();
        ɵɵelementStart(0, "svg", 0);
        ɵɵelementStart(1, "g", 1);
        ɵɵelement(2, "polyline", 2);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(IconCollapsedComponent, [{
        type: Component,
        args: [{
                selector: "epsgis-icon-collapsed",
                template: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 10 10" height="100%" width="100%">
            <g fill="none">
            <polyline points="1,7 9,7 5,2 1,7 9,7"></polyline>
            </g>
            </svg>`,
                styles: []
            }]
    }], null, null); })();

class IconUnMaximizeComponent {
}
IconUnMaximizeComponent.ɵfac = function IconUnMaximizeComponent_Factory(t) { return new (t || IconUnMaximizeComponent)(); };
IconUnMaximizeComponent.ɵcmp = ɵɵdefineComponent({ type: IconUnMaximizeComponent, selectors: [["epsgis-icon-unmaximize"]], decls: 7, vars: 0, consts: [["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 10 10", "height", "100%", "width", "100%"], ["fill", "none"], ["x", "1", "y", "3", "height", "6", "width", "6"], ["y1", "3", "x1", "3", "y2", "1", "x2", "3"], ["y1", "1", "x1", "2.5", "y2", "1", "x2", "9.5"], ["y1", "1", "x1", "9", "y2", "7", "x2", "9"], ["y1", "7", "x1", "9.5", "y2", "7", "x2", "7"]], template: function IconUnMaximizeComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵnamespaceSVG();
        ɵɵelementStart(0, "svg", 0);
        ɵɵelementStart(1, "g", 1);
        ɵɵelement(2, "rect", 2);
        ɵɵelement(3, "line", 3);
        ɵɵelement(4, "line", 4);
        ɵɵelement(5, "line", 5);
        ɵɵelement(6, "line", 6);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(IconUnMaximizeComponent, [{
        type: Component,
        args: [{
                selector: "epsgis-icon-unmaximize",
                template: `
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10 10" height="100%" width="100%">
              <g fill="none">
                <rect x="1" y="3" height="6" width="6"></rect>
                <line y1="3" x1="3" y2="1" x2="3"></line>
                <line y1="1" x1="2.5" y2="1" x2="9.5"></line>
                <line y1="1" x1="9" y2="7" x2="9"></line>
                <line y1="7" x1="9.5" y2="7" x2="7"></line>
              </g>
    </svg>
    `,
                styles: []
            }]
    }], null, null); })();

class IconMaximizeComponent {
}
IconMaximizeComponent.ɵfac = function IconMaximizeComponent_Factory(t) { return new (t || IconMaximizeComponent)(); };
IconMaximizeComponent.ɵcmp = ɵɵdefineComponent({ type: IconMaximizeComponent, selectors: [["epsgis-icon-maximize"]], decls: 3, vars: 0, consts: [["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 10 10", "height", "100%", "width", "100%"], ["fill", "none"], ["x", "1", "y", "1", "height", "8", "width", "8"]], template: function IconMaximizeComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵnamespaceSVG();
        ɵɵelementStart(0, "svg", 0);
        ɵɵelementStart(1, "g", 1);
        ɵɵelement(2, "rect", 2);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(IconMaximizeComponent, [{
        type: Component,
        args: [{
                selector: "epsgis-icon-maximize",
                template: `
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10 10" height="100%" width="100%">
              <g fill="none">
                <rect x="1" y="1" height="8" width="8"></rect>
              </g>
    </svg>
    `,
                styles: []
            }]
    }], null, null); })();

class IconCloseComponent {
}
IconCloseComponent.ɵfac = function IconCloseComponent_Factory(t) { return new (t || IconCloseComponent)(); };
IconCloseComponent.ɵcmp = ɵɵdefineComponent({ type: IconCloseComponent, selectors: [["epsgis-icon-close"]], decls: 4, vars: 0, consts: [["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 10 10", "height", "100%", "width", "100%"], ["y2", "0", "x2", "10", "y1", "10", "x1", "0"], ["y2", "10", "x2", "10", "y1", "0", "x1", "0"]], template: function IconCloseComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵnamespaceSVG();
        ɵɵelementStart(0, "svg", 0);
        ɵɵelementStart(1, "g");
        ɵɵelement(2, "line", 1);
        ɵɵelement(3, "line", 2);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(IconCloseComponent, [{
        type: Component,
        args: [{
                selector: "epsgis-icon-close",
                template: `
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 10 10" height="100%" width="100%">
            <g>
              <line y2="0" x2="10" y1="10" x1="0"></line>
              <line y2="10" x2="10" y1="0" x1="0"></line>
            </g>
    </svg>
    `,
                styles: []
            }]
    }], null, null); })();

const _c0$3 = ["sspanel-titlebar", ""];
function PanelTitleBarComponent_ng_container_0_img_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "img", 7);
} if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵproperty("src", ctx_r5.icon, ɵɵsanitizeUrl);
} }
function PanelTitleBarComponent_ng_container_0_i_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 8);
} if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵproperty("nzIconfont", ctx_r6.icon);
} }
function PanelTitleBarComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 4);
    ɵɵtemplate(2, PanelTitleBarComponent_ng_container_0_img_2_Template, 1, 1, "img", 5);
    ɵɵtemplate(3, PanelTitleBarComponent_ng_container_0_i_3_Template, 1, 1, "i", 6);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.isShowImg);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r0.isShowImg);
} }
function PanelTitleBarComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 9);
    ɵɵlistener("click", function PanelTitleBarComponent_div_4_Template_div_click_0_listener($event) { ɵɵrestoreView(_r8); const ctx_r7 = ɵɵnextContext(); return ctx_r7._buttonSettingClick($event); });
    ɵɵelement(1, "epsgis-icon-setting");
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵpropertyInterpolate("title", ctx_r1.options.buttonSettingText);
} }
function PanelTitleBarComponent_ng_container_5_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 13);
    ɵɵlistener("click", function PanelTitleBarComponent_ng_container_5_ng_container_1_div_1_Template_div_click_0_listener($event) { ɵɵrestoreView(_r14); const ctx_r13 = ɵɵnextContext(3); return ctx_r13._buttonCollapseClick($event); });
    ɵɵelement(1, "epsgis-icon-uncollapsed");
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = ɵɵnextContext(3);
    ɵɵpropertyInterpolate("title", ctx_r12.options.buttonUnCollapseText);
} }
function PanelTitleBarComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PanelTitleBarComponent_ng_container_5_ng_container_1_div_1_Template, 2, 1, "div", 12);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r9.options.buttonCollapse);
} }
function PanelTitleBarComponent_ng_container_5_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r17 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 15);
    ɵɵlistener("click", function PanelTitleBarComponent_ng_container_5_ng_template_2_div_0_Template_div_click_0_listener($event) { ɵɵrestoreView(_r17); const ctx_r16 = ɵɵnextContext(3); return ctx_r16._buttonCollapseClick($event); });
    ɵɵelement(1, "epsgis-icon-collapsed");
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = ɵɵnextContext(3);
    ɵɵpropertyInterpolate("title", ctx_r15.options.buttonCollapseText);
} }
function PanelTitleBarComponent_ng_container_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, PanelTitleBarComponent_ng_container_5_ng_template_2_div_0_Template, 2, 1, "div", 14);
} if (rf & 2) {
    const ctx_r11 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r11.options.buttonCollapse);
} }
function PanelTitleBarComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PanelTitleBarComponent_ng_container_5_ng_container_1_Template, 2, 1, "ng-container", 10);
    ɵɵtemplate(2, PanelTitleBarComponent_ng_container_5_ng_template_2_Template, 1, 1, "ng-template", null, 11, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r10 = ɵɵreference(3);
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.windowState == "collapsed")("ngIfElse", _r10);
} }
function PanelTitleBarComponent_ng_container_6_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r23 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 18);
    ɵɵlistener("click", function PanelTitleBarComponent_ng_container_6_ng_container_1_div_1_Template_div_click_0_listener($event) { ɵɵrestoreView(_r23); const ctx_r22 = ɵɵnextContext(3); return ctx_r22._buttonMaximizeClick($event); });
    ɵɵelement(1, "epsgis-icon-unmaximize");
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r21 = ɵɵnextContext(3);
    ɵɵpropertyInterpolate("title", ctx_r21.options.buttonUnmaximizeText);
} }
function PanelTitleBarComponent_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PanelTitleBarComponent_ng_container_6_ng_container_1_div_1_Template, 2, 1, "div", 17);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r18 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r18.options.buttonMaximize);
} }
function PanelTitleBarComponent_ng_container_6_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r26 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 20);
    ɵɵlistener("click", function PanelTitleBarComponent_ng_container_6_ng_template_2_div_0_Template_div_click_0_listener($event) { ɵɵrestoreView(_r26); const ctx_r25 = ɵɵnextContext(3); return ctx_r25._buttonMaximizeClick($event); });
    ɵɵelement(1, "epsgis-icon-maximize");
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r24 = ɵɵnextContext(3);
    ɵɵpropertyInterpolate("title", ctx_r24.options.buttonMaximizeText);
} }
function PanelTitleBarComponent_ng_container_6_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, PanelTitleBarComponent_ng_container_6_ng_template_2_div_0_Template, 2, 1, "div", 19);
} if (rf & 2) {
    const ctx_r20 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r20.options.buttonMaximize);
} }
function PanelTitleBarComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PanelTitleBarComponent_ng_container_6_ng_container_1_Template, 2, 1, "ng-container", 10);
    ɵɵtemplate(2, PanelTitleBarComponent_ng_container_6_ng_template_2_Template, 1, 1, "ng-template", null, 16, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r19 = ɵɵreference(3);
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r3.windowState == "maximized")("ngIfElse", _r19);
} }
function PanelTitleBarComponent_ng_container_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r29 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 22);
    ɵɵlistener("click", function PanelTitleBarComponent_ng_container_7_div_1_Template_div_click_0_listener($event) { ɵɵrestoreView(_r29); const ctx_r28 = ɵɵnextContext(2); return ctx_r28._buttonCloseClick($event); });
    ɵɵelement(1, "epsgis-icon-close");
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r27 = ɵɵnextContext(2);
    ɵɵpropertyInterpolate("title", ctx_r27.options.buttonCloseText);
} }
function PanelTitleBarComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PanelTitleBarComponent_ng_container_7_div_1_Template, 2, 1, "div", 21);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r4.options.buttonClose);
} }
class PanelTitleBarComponent {
    constructor(ele) {
        this.ele = ele;
        this.options = DefaultPanelOptions;
        this.hasIcon = false;
        this.onMouseDown = new EventEmitter();
        this.onClickSetting = new EventEmitter();
        this.onClickCollapse = new EventEmitter();
        this.onClickMaximize = new EventEmitter();
        this.onClickClose = new EventEmitter();
        this.ele.nativeElement.onmousedown = (evt) => {
            this._titlebarMouseDown(evt);
        };
    }
    get nativeElement() {
        return this.ele.nativeElement;
    }
    _titlebarMouseDown(evt) {
        if (this.onMouseDown.observers.length >= 1) {
            this.onMouseDown.emit(evt);
        }
    }
    _buttonSettingClick(evt) {
        if (this.onClickSetting.observers.length >= 1) {
            this.onClickSetting.emit(evt);
        }
    }
    _buttonCollapseClick(evt) {
        if (this.onClickCollapse.observers.length >= 1) {
            this.onClickCollapse.emit(evt);
        }
    }
    _buttonMaximizeClick(evt) {
        if (this.onClickMaximize.observers.length >= 1) {
            this.onClickMaximize.emit(evt);
        }
    }
    _buttonCloseClick(evt) {
        if (this.onClickClose.observers.length >= 1) {
            this.onClickClose.emit(evt);
        }
    }
}
PanelTitleBarComponent.ɵfac = function PanelTitleBarComponent_Factory(t) { return new (t || PanelTitleBarComponent)(ɵɵdirectiveInject(ElementRef)); };
PanelTitleBarComponent.ɵcmp = ɵɵdefineComponent({ type: PanelTitleBarComponent, selectors: [["div", "sspanel-titlebar", ""]], inputs: { options: "options", hasIcon: "hasIcon", isShowImg: "isShowImg", icon: "icon", windowState: "windowState" }, outputs: { onMouseDown: "onMouseDown", onClickSetting: "onClickSetting", onClickCollapse: "onClickCollapse", onClickMaximize: "onClickMaximize", onClickClose: "onClickClose" }, attrs: _c0$3, decls: 8, vars: 6, consts: [[4, "ngIf"], [1, "sspanel_titlebar_text"], [1, "sspanel_titlebar_text_span"], ["class", "sspanel_titlebar_button sspanel_titlebar_button_setting", 3, "title", "click", 4, "ngIf"], [1, "icon"], [3, "src", 4, "ngIf"], ["nz-icon", "", 3, "nzIconfont", 4, "ngIf"], [3, "src"], ["nz-icon", "", 3, "nzIconfont"], [1, "sspanel_titlebar_button", "sspanel_titlebar_button_setting", 3, "title", "click"], [4, "ngIf", "ngIfElse"], ["showCollapsedButton", ""], ["class", "sspanel_titlebar_button sspanel_titlebar_button_uncollapse", 3, "title", "click", 4, "ngIf"], [1, "sspanel_titlebar_button", "sspanel_titlebar_button_uncollapse", 3, "title", "click"], ["class", "sspanel_titlebar_button sspanel_titlebar_button_collapse", 3, "title", "click", 4, "ngIf"], [1, "sspanel_titlebar_button", "sspanel_titlebar_button_collapse", 3, "title", "click"], ["showMaximizeButton", ""], ["class", "sspanel_titlebar_button sspanel_titlebar_button_unmaximize", 3, "title", "click", 4, "ngIf"], [1, "sspanel_titlebar_button", "sspanel_titlebar_button_unmaximize", 3, "title", "click"], ["class", "sspanel_titlebar_button sspanel_titlebar_button_maximize", 3, "title", "click", 4, "ngIf"], [1, "sspanel_titlebar_button", "sspanel_titlebar_button_maximize", 3, "title", "click"], ["class", "sspanel_titlebar_button sspanel_titlebar_button_close", 3, "title", "click", 4, "ngIf"], [1, "sspanel_titlebar_button", "sspanel_titlebar_button_close", 3, "title", "click"]], template: function PanelTitleBarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, PanelTitleBarComponent_ng_container_0_Template, 4, 2, "ng-container", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "span", 2);
        ɵɵtext(3);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(4, PanelTitleBarComponent_div_4_Template, 2, 1, "div", 3);
        ɵɵtemplate(5, PanelTitleBarComponent_ng_container_5_Template, 4, 2, "ng-container", 0);
        ɵɵtemplate(6, PanelTitleBarComponent_ng_container_6_Template, 4, 2, "ng-container", 0);
        ɵɵtemplate(7, PanelTitleBarComponent_ng_container_7_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.hasIcon);
        ɵɵadvance(3);
        ɵɵtextInterpolate(ctx.options.title);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.options.buttonSetting);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.options.buttonCollapse);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.options.buttonMaximize);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.options.buttonClose);
    } }, directives: [NgIf, NzIconDirective, IconSettingComponent, IconUnCollapsedComponent, IconCollapsedComponent, IconUnMaximizeComponent, IconMaximizeComponent, IconCloseComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(PanelTitleBarComponent, [{
        type: Component,
        args: [{
                selector: "div[sspanel-titlebar]",
                template: `
    <!-- 这影响样式 -->
    <!-- <div class="sspanel_titlebar sspanel_titlebar_draggable" #sspanel_titlebar
      (mousedown)="_titlebarMouseDown($event);"> -->
      <ng-container *ngIf="hasIcon">
        <div class="icon">
          <img *ngIf="isShowImg" [src]="icon">
          <i *ngIf="!isShowImg" nz-icon [nzIconfont]="icon"></i>
        </div>
      </ng-container>
      <div class="sspanel_titlebar_text"><span class="sspanel_titlebar_text_span">{{options.title}}</span></div>
      <div *ngIf="options.buttonSetting" class="sspanel_titlebar_button sspanel_titlebar_button_setting" title="{{options.buttonSettingText}}" (click)="_buttonSettingClick($event);">
        <epsgis-icon-setting></epsgis-icon-setting>
      </div>
      <ng-container *ngIf="options.buttonCollapse">
        <ng-container *ngIf="windowState=='collapsed'; else showCollapsedButton">
          <div *ngIf="options.buttonCollapse"  class="sspanel_titlebar_button sspanel_titlebar_button_uncollapse" title="{{options.buttonUnCollapseText}}"
            (click)="_buttonCollapseClick($event);">
            <epsgis-icon-uncollapsed></epsgis-icon-uncollapsed>
          </div>
        </ng-container>
        <ng-template #showCollapsedButton>
          <div *ngIf="options.buttonCollapse" class="sspanel_titlebar_button sspanel_titlebar_button_collapse" title="{{options.buttonCollapseText}}"
            (click)="_buttonCollapseClick($event);">
            <epsgis-icon-collapsed></epsgis-icon-collapsed>
          </div>
        </ng-template>
      </ng-container>
      <ng-container *ngIf="options.buttonMaximize">
        <ng-container *ngIf="windowState == 'maximized'; else showMaximizeButton">
          <div *ngIf="options.buttonMaximize" class="sspanel_titlebar_button sspanel_titlebar_button_unmaximize" title="{{options.buttonUnmaximizeText}}"
            (click)="_buttonMaximizeClick($event);">
            <epsgis-icon-unmaximize></epsgis-icon-unmaximize>
          </div>
        </ng-container>
        <ng-template #showMaximizeButton>
          <div *ngIf="options.buttonMaximize" class="sspanel_titlebar_button sspanel_titlebar_button_maximize" title="{{options.buttonMaximizeText}}"
            (click)="_buttonMaximizeClick($event);">
            <epsgis-icon-maximize></epsgis-icon-maximize>
            
          </div>
        </ng-template>
      </ng-container>

      <ng-container *ngIf="options.buttonClose">
        <div  *ngIf="options.buttonClose" class="sspanel_titlebar_button sspanel_titlebar_button_close" title="{{options.buttonCloseText}}"
          (click)="_buttonCloseClick($event);">
          <epsgis-icon-close></epsgis-icon-close>
        </div>
      </ng-container>
    <!-- </div> -->
    `,
                styles: []
            }]
    }], function () { return [{ type: ElementRef }]; }, { options: [{
            type: Input
        }], hasIcon: [{
            type: Input
        }], isShowImg: [{
            type: Input
        }], icon: [{
            type: Input
        }], windowState: [{
            type: Input
        }], onMouseDown: [{
            type: Output
        }], onClickSetting: [{
            type: Output
        }], onClickCollapse: [{
            type: Output
        }], onClickMaximize: [{
            type: Output
        }], onClickClose: [{
            type: Output
        }] }); })();

function OnScreenWidgetPanelComponent_ng_template_7_Template(rf, ctx) { }
let OnScreenWidgetPanelComponent = class OnScreenWidgetPanelComponent extends BasePanelComponent {
    constructor(_render, cdr) {
        super(_render, cdr);
        this.cdr = cdr;
    }
    ngOnInit() { super.ngOnInit(); }
    ngAfterViewInit() {
        super.ngAfterViewInit();
    }
};
OnScreenWidgetPanelComponent.ɵfac = function OnScreenWidgetPanelComponent_Factory(t) { return new (t || OnScreenWidgetPanelComponent)(ɵɵdirectiveInject(Renderer2, 8), ɵɵdirectiveInject(ChangeDetectorRef, 8)); };
OnScreenWidgetPanelComponent.ɵcmp = ɵɵdefineComponent({ type: OnScreenWidgetPanelComponent, selectors: [["epsgis-on-screen-widget-panel"]], features: [ɵɵInheritDefinitionFeature], decls: 18, vars: 5, consts: [[1, "sspanel_overlay"], ["sspanel_overlay", ""], [1, "sspanel", 3, "id", "ngStyle"], ["sspanel", ""], ["sspanel-titlebar", "", 1, "sspanel_titlebar", "sspanel_titlebar_draggable", 3, "hasIcon", "options", "windowState", "onMouseDown", "onClickSetting", "onClickCollapse", "onClickMaximize", "onClickClose"], ["sspanel_titlebar", ""], [1, "sspanel_content", 3, "click"], ["widget_content", ""], [1, "sspanel_resizer", "sspanel_resizer_top", 3, "mousedown"], [1, "sspanel_resizer", "sspanel_resizer_bottom", 3, "mousedown"], [1, "sspanel_resizer", "sspanel_resizer_left", 3, "mousedown"], [1, "sspanel_resizer", "sspanel_resizer_right", 3, "mousedown"], [1, "sspanel_resizer", "sspanel_resizer_topleft", 3, "mousedown"], [1, "sspanel_resizer", "sspanel_resizer_topright", 3, "mousedown"], [1, "sspanel_resizer", "sspanel_resizer_bottomleft", 3, "mousedown"], [1, "sspanel_resizer", "sspanel_resizer_bottomright", 3, "mousedown"], [1, "sspanel_minplaceholder"]], template: function OnScreenWidgetPanelComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0, 1);
        ɵɵelementStart(2, "div", 2, 3);
        ɵɵelementStart(4, "div", 4, 5);
        ɵɵlistener("onMouseDown", function OnScreenWidgetPanelComponent_Template_div_onMouseDown_4_listener($event) { return ctx._titlebar_MouseDown($event); })("onClickSetting", function OnScreenWidgetPanelComponent_Template_div_onClickSetting_4_listener() { return ctx.openWidgetSetting(); })("onClickCollapse", function OnScreenWidgetPanelComponent_Template_div_onClickCollapse_4_listener($event) { return ctx._buttonCollapse_Click($event); })("onClickMaximize", function OnScreenWidgetPanelComponent_Template_div_onClickMaximize_4_listener($event) { return ctx._buttonMax_Click($event); })("onClickClose", function OnScreenWidgetPanelComponent_Template_div_onClickClose_4_listener($event) { return ctx.closePanel($event); });
        ɵɵelementEnd();
        ɵɵelementStart(6, "div", 6);
        ɵɵlistener("click", function OnScreenWidgetPanelComponent_Template_div_click_6_listener($event) { return ctx._contentClick($event); });
        ɵɵtemplate(7, OnScreenWidgetPanelComponent_ng_template_7_Template, 0, 0, "ng-template", null, 7, ɵɵtemplateRefExtractor);
        ɵɵelementEnd();
        ɵɵelementStart(9, "div", 8);
        ɵɵlistener("mousedown", function OnScreenWidgetPanelComponent_Template_div_mousedown_9_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "height", directionY: "top" }); });
        ɵɵelementEnd();
        ɵɵelementStart(10, "div", 9);
        ɵɵlistener("mousedown", function OnScreenWidgetPanelComponent_Template_div_mousedown_10_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "height", directionY: "bottom" }); });
        ɵɵelementEnd();
        ɵɵelementStart(11, "div", 10);
        ɵɵlistener("mousedown", function OnScreenWidgetPanelComponent_Template_div_mousedown_11_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "width", directionX: "left" }); });
        ɵɵelementEnd();
        ɵɵelementStart(12, "div", 11);
        ɵɵlistener("mousedown", function OnScreenWidgetPanelComponent_Template_div_mousedown_12_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "width", directionX: "right" }); });
        ɵɵelementEnd();
        ɵɵelementStart(13, "div", 12);
        ɵɵlistener("mousedown", function OnScreenWidgetPanelComponent_Template_div_mousedown_13_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "both", directionX: "left", directionY: "top" }); });
        ɵɵelementEnd();
        ɵɵelementStart(14, "div", 13);
        ɵɵlistener("mousedown", function OnScreenWidgetPanelComponent_Template_div_mousedown_14_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "both", directionX: "right", directionY: "top" }); });
        ɵɵelementEnd();
        ɵɵelementStart(15, "div", 14);
        ɵɵlistener("mousedown", function OnScreenWidgetPanelComponent_Template_div_mousedown_15_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "both", directionX: "left", directionY: "bottom" }); });
        ɵɵelementEnd();
        ɵɵelementStart(16, "div", 15);
        ɵɵlistener("mousedown", function OnScreenWidgetPanelComponent_Template_div_mousedown_16_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "both", directionX: "right", directionY: "bottom" }); });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelement(17, "div", 16);
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵpropertyInterpolate("id", ctx.options.id);
        ɵɵproperty("ngStyle", ctx.position);
        ɵɵadvance(2);
        ɵɵproperty("hasIcon", false)("options", ctx.options)("windowState", ctx.windowState);
    } }, directives: [NgStyle, PanelTitleBarComponent], styles: [""] });
OnScreenWidgetPanelComponent = __decorate([
    ComponentRegister({
        uri: "epsgis-on-screen-widget-panel",
        path: "components/on-screen-widget-panel"
    })
], OnScreenWidgetPanelComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(OnScreenWidgetPanelComponent, [{
        type: Component,
        args: [{
                selector: 'epsgis-on-screen-widget-panel',
                templateUrl: './on-screen-widget-panel.component.html',
                styleUrls: ['./on-screen-widget-panel.component.scss']
            }]
    }], function () { return [{ type: Renderer2, decorators: [{
                type: Optional
            }] }, { type: ChangeDetectorRef, decorators: [{
                type: Optional
            }] }]; }, null); })();

const _c0$4 = ["center_collapse"];
class BaseDockablePanelComponent extends BasePanelComponent {
    constructor(_render, cdr) {
        super(_render, cdr);
        this._render = _render;
        this.cdr = cdr;
        this.zIndex = 100;
        this._isCollapse = false;
        this.moveTopOnActive = false;
    }
    get mapBounds() {
        var rect = this.commonService.getElementBounds(this.commonService.getComponentRootNode(this.mapManager.comRefMap));
        rect.top = rect.top - this._getMapTop();
        rect.left = rect.left - this._getMapLeft();
        return rect;
    }
    _getMapTop() {
        var ele = this.commonService.getComponentRootNode(this.mapManager.comRefMap);
        const rect = ele.getBoundingClientRect();
        let mapSettingTop = "0";
        if (this.widgetManager.appConfig.map.position && this.widgetManager.appConfig.map.position.top)
            mapSettingTop = this.widgetManager.appConfig.map.position.top;
        let chv = parseFloat(this.commonService.getPxNumber(mapSettingTop).toString());
        const mapTop = rect.top - chv;
        return mapTop;
    }
    _getMapLeft() {
        var ele = this.commonService.getComponentRootNode(this.mapManager.comRefMap);
        const rect = ele.getBoundingClientRect();
        var mapSettingLeft = 0;
        if (this.widgetManager.appConfig.map.position && this.widgetManager.appConfig.map.position.left)
            mapSettingLeft = this.widgetManager.appConfig.map.position.left;
        var chv = parseFloat(this.commonService.getPxNumber(mapSettingLeft).toString());
        const mapLeft = rect.left - chv;
        return mapLeft;
    }
    ngOnInit() {
        super.ngOnInit();
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    _setPCPosition() {
        this.widgetConfig.position.zIndex = this.zIndex;
        super._setPCPosition();
    }
    onMove() {
        super.onMove();
    }
    onClose() {
        super.onClose();
    }
    _resizeMapWhenResize() {
        switch (this.dockMode) {
            case PanelDockMode.left:
                this.mapManager.changeMapPosition({ left: this.commonService.getPx(this.currentSize.width) });
                break;
            case PanelDockMode.bottom:
                this.mapManager.changeMapPosition({ bottom: this.commonService.getPx(this.currentSize.height) });
                break;
            case PanelDockMode.right:
                this.mapManager.changeMapPosition({ right: this.commonService.getPx(this.currentSize.width) });
                break;
            default:
                break;
        }
    }
    _resizeMapWhenClose() {
        switch (this.dockMode) {
            case PanelDockMode.left:
                this.mapManager.changeMapPosition({ left: this.commonService.getPx(this.mapManager.originMapPosition.left) });
                break;
            case PanelDockMode.bottom:
                this.mapManager.changeMapPosition({ bottom: this.commonService.getPx(this.mapManager.originMapPosition.bottom) });
                break;
            case PanelDockMode.right:
                this.mapManager.changeMapPosition({ right: this.commonService.getPx(this.mapManager.originMapPosition.right) });
                break;
            default:
                break;
        }
    }
    showPanel() {
        this.__expand(false);
        super.showPanel();
    }
    hidePanel() {
        this.__collapse(false);
        super.hidePanel();
    }
    __collapse(runOnClose) {
        const _eleSvg = this.sspanel_center_collapse.nativeElement.querySelector("svg");
        if (this.dockMode === PanelDockMode.left) {
            const _left = -this.commonService.getElementBounds(this.sspanel.nativeElement).width;
            this._render.setStyle(this.sspanel.nativeElement, "left", _left + "px");
        }
        else if (this.dockMode === PanelDockMode.bottom) {
            const _bottom = -this.commonService.getElementBounds(this.sspanel.nativeElement).height;
            this._render.setStyle(this.sspanel.nativeElement, "bottom", _bottom + "px");
        }
        else if (this.dockMode === PanelDockMode.right) {
            const _right = -this.commonService.getElementBounds(this.sspanel.nativeElement).width;
            this._render.setStyle(this.sspanel.nativeElement, "right", _right + "px");
        }
        this._render.addClass(_eleSvg, "expand");
        this._resizeMapWhenClose();
        this._isCollapse = true;
    }
    __expand(runOnOpen) {
        const _eleSvg = this.sspanel_center_collapse.nativeElement.querySelector("svg");
        if (this.dockMode === PanelDockMode.left) {
            this._render.setStyle(this.sspanel.nativeElement, "left", "0px");
        }
        else if (this.dockMode === PanelDockMode.bottom) {
            this._render.setStyle(this.sspanel.nativeElement, "bottom", "0px");
        }
        else if (this.dockMode === PanelDockMode.right) {
            this._render.setStyle(this.sspanel.nativeElement, "right", "0px");
        }
        this._render.removeClass(_eleSvg, "expand");
        this._resizeMapWhenResize();
        this._isCollapse = false;
    }
    collapsePanel(evt) {
        if (this._isCollapse) {
            this.__expand(false);
        }
        else {
            this.__collapse(false);
        }
    }
}
BaseDockablePanelComponent.ɵfac = function BaseDockablePanelComponent_Factory(t) { return new (t || BaseDockablePanelComponent)(ɵɵdirectiveInject(Renderer2, 8), ɵɵdirectiveInject(ChangeDetectorRef, 8)); };
BaseDockablePanelComponent.ɵdir = ɵɵdefineDirective({ type: BaseDockablePanelComponent, viewQuery: function BaseDockablePanelComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$4, 3);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.sspanel_center_collapse = _t.first);
    } }, features: [ɵɵInheritDefinitionFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(BaseDockablePanelComponent, [{
        type: Directive
    }], function () { return [{ type: Renderer2, decorators: [{
                type: Optional
            }] }, { type: ChangeDetectorRef, decorators: [{
                type: Optional
            }] }]; }, { sspanel_center_collapse: [{
            type: ViewChild,
            args: ["center_collapse", { static: true }]
        }] }); })();

function DockablePanelAtBottomComponent_ng_template_7_Template(rf, ctx) { }
const _c0$5 = function (a0) { return { "notitle": a0 }; };
const _c1$2 = function (a0) { return { "display": a0 }; };
let DockablePanelAtBottomComponent = class DockablePanelAtBottomComponent extends BaseDockablePanelComponent {
    constructor(_render, cdr) {
        super(_render, cdr);
        this._render = _render;
        this.cdr = cdr;
        this.dockMode = PanelDockMode.bottom;
    }
    ngOnInit() {
        super.ngOnInit();
    }
    setOptions(options) {
        options.modal = false;
        options.draggable = false;
        options.buttonClose = true;
        options.buttonCollapse = false;
        options.buttonMaximize = false;
        options.buttonMinimize = false;
        options.centerCollapse = true;
        options.dockSide = PanelDockMode.bottom;
        super.setOptions(options);
    }
    _setPCPosition() {
        this.widgetConfig.position = merge(this.widgetConfig.position, {
            left: this.mapBounds.left,
            top: "auto",
            bottom: 0,
            right: 0,
            width: this.mapBounds.width
        });
        super._setPCPosition();
    }
    onResize() {
        super._resizeMapWhenResize();
        super.onResize();
    }
    onOpen() {
        super._resizeMapWhenResize();
        super.onOpen();
    }
    onClose() {
        super._resizeMapWhenClose();
        super.onClose();
    }
    resize() {
        this.widgetConfig.position = merge(this.widgetConfig.position, {
            left: this.mapBounds.left,
            width: this.mapBounds.width
        });
        this._render.setStyle(this.sspanel.nativeElement, "left", this._convertToStyleVal(this.mapBounds.left));
        this._render.setStyle(this.sspanel.nativeElement, "width", this._convertToStyleVal(this.mapBounds.width));
    }
};
DockablePanelAtBottomComponent.ɵfac = function DockablePanelAtBottomComponent_Factory(t) { return new (t || DockablePanelAtBottomComponent)(ɵɵdirectiveInject(Renderer2, 8), ɵɵdirectiveInject(ChangeDetectorRef, 8)); };
DockablePanelAtBottomComponent.ɵcmp = ɵɵdefineComponent({ type: DockablePanelAtBottomComponent, selectors: [["epsgis-dockable-panel-at-bottom"]], features: [ɵɵInheritDefinitionFeature], decls: 14, vars: 11, consts: [[1, "sspanel_overlay", 2, "display", "none"], ["sspanel_overlay", ""], [1, "sspanel", 3, "id", "ngClass", "ngStyle"], ["sspanel", ""], ["sspanel-titlebar", "", 1, "sspanel_titlebar", "sspanel_titlebar_draggable", 3, "hasIcon", "options", "windowState", "onClickSetting", "onClickClose"], ["sspanel_titlebar", ""], [1, "sspanel_content", 3, "click"], ["widget_content", ""], [1, "sspanel_resizer", "sspanel_resizer_top", 3, "mousedown"], [1, "collapse", 3, "ngStyle", "click"], ["center_collapse", ""], ["t", "1575033841131", "viewBox", "0 0 1024 1024", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "p-id", "16367", "width", "16", "height", "16", 1, "icon"], ["d", "M128.759037 245.033739l383.064442 383.064442 388.096039-388.097062 0.033769 0.070608c13.138228-12.709463 31.024597-20.528546 50.730405-20.528546 40.377616 0 73.114205 32.736589 73.114205 73.115228 0 19.705807-7.820106 37.591153-20.530592 50.730405l0.035816 0.034792-438.681134 438.685227-0.035816-0.035816c-13.280468 13.780865-31.915897 22.3838-52.585659 22.3838-0.071631 0-0.107447 0-0.178055 0-0.072655 0-0.10847 0-0.146333 0-20.669762 0-39.341007-8.601912-52.621475-22.3838l-0.035816 0.035816L20.336676 343.425653l0.179079-0.179079c-12.565177-13.139252-20.313651-30.951943-20.313651-50.587142 0-40.378639 32.736589-73.115228 73.114205-73.115228C95.485213 219.544205 115.334283 229.432413 128.759037 245.033739z", "p-id", "16368", "fill", "#bababa"]], template: function DockablePanelAtBottomComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "div", 0, 1);
        ɵɵelementStart(2, "div", 2, 3);
        ɵɵelementStart(4, "div", 4, 5);
        ɵɵlistener("onClickSetting", function DockablePanelAtBottomComponent_Template_div_onClickSetting_4_listener() { return ctx.openWidgetSetting(); })("onClickClose", function DockablePanelAtBottomComponent_Template_div_onClickClose_4_listener($event) { return ctx.closePanel($event); });
        ɵɵelementEnd();
        ɵɵelementStart(6, "div", 6);
        ɵɵlistener("click", function DockablePanelAtBottomComponent_Template_div_click_6_listener($event) { return ctx._contentClick($event); });
        ɵɵtemplate(7, DockablePanelAtBottomComponent_ng_template_7_Template, 0, 0, "ng-template", null, 7, ɵɵtemplateRefExtractor);
        ɵɵelementEnd();
        ɵɵelementStart(9, "div", 8);
        ɵɵlistener("mousedown", function DockablePanelAtBottomComponent_Template_div_mousedown_9_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "height", directionY: "top" }); });
        ɵɵelementEnd();
        ɵɵelementStart(10, "div", 9, 10);
        ɵɵlistener("click", function DockablePanelAtBottomComponent_Template_div_click_10_listener($event) { return ctx.collapsePanel($event); });
        ɵɵnamespaceSVG();
        ɵɵelementStart(12, "svg", 11);
        ɵɵelement(13, "path", 12);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵpropertyInterpolate("id", ctx.options.id);
        ɵɵproperty("ngClass", ɵɵpureFunction1(7, _c0$5, ctx.options.showTitle === false))("ngStyle", ctx.position);
        ɵɵadvance(2);
        ɵɵproperty("hasIcon", false)("options", ctx.options)("windowState", ctx.windowState);
        ɵɵadvance(6);
        ɵɵproperty("ngStyle", ɵɵpureFunction1(9, _c1$2, ctx.options.centerCollapse ? "block" : "none"));
    } }, directives: [NgClass, NgStyle, PanelTitleBarComponent], styles: [".notitle[_ngcontent-%COMP%], .sspanel[_ngcontent-%COMP%]{border:none}.notitle[_ngcontent-%COMP%]   .sspanel_titlebar[_ngcontent-%COMP%]{display:none}.notitle[_ngcontent-%COMP%]   .sspanel_content[_ngcontent-%COMP%]{border:none}.notitle[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]{background:#fcfcfc}.notitle[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover   path[_ngcontent-%COMP%]{fill:#000}.collapse[_ngcontent-%COMP%]{position:absolute;left:50%;top:-16px;width:60px;height:16px;line-height:16px;padding-left:24px;cursor:pointer;background:#549dfe;border-radius:5px 5px 0 0;box-shadow:0 -3px 6px 0 #a0a0a0}.collapse[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover   path[_ngcontent-%COMP%]{fill:#fff}"] });
DockablePanelAtBottomComponent = __decorate([
    ComponentRegister({
        uri: 'epsgis-dockable-panel-at-bottom',
        path: "components/ex-panels/dockable-panel-at-bottom"
    })
], DockablePanelAtBottomComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(DockablePanelAtBottomComponent, [{
        type: Component,
        args: [{
                selector: 'epsgis-dockable-panel-at-bottom',
                templateUrl: './dockable-panel-at-bottom.component.html',
                styleUrls: ['./dockable-panel-at-bottom.component.scss'],
            }]
    }], function () { return [{ type: Renderer2, decorators: [{
                type: Optional
            }] }, { type: ChangeDetectorRef, decorators: [{
                type: Optional
            }] }]; }, null); })();

function DockablePanelAtRightComponent_ng_template_7_Template(rf, ctx) { }
const _c0$6 = function (a0) { return { "notitle": a0 }; };
const _c1$3 = function (a0) { return { "display": a0 }; };
let DockablePanelAtRightComponent = class DockablePanelAtRightComponent extends BaseDockablePanelComponent {
    constructor(_render, cdr) {
        super(_render, cdr);
        this._render = _render;
        this.cdr = cdr;
        this.dockMode = PanelDockMode.right;
    }
    setOptions(options) {
        options.modal = false;
        options.draggable = false;
        options.buttonClose = false;
        options.buttonCollapse = false;
        options.buttonMaximize = false;
        options.buttonMinimize = false;
        options.centerCollapse = true;
        options.dockSide = PanelDockMode.right;
        super.setOptions(options);
    }
    _setPCPosition() {
        this.widgetConfig.position = merge(this.widgetConfig.position, {
            left: "auto",
            top: this.mapBounds.top,
            bottom: 0,
            right: 0,
            height: "auto"
        });
        super._setPCPosition();
    }
    onResize() {
        super._resizeMapWhenResize();
        super.onResize();
    }
    onOpen() {
        super._resizeMapWhenResize();
        super.onOpen();
    }
    onClose() {
        super._resizeMapWhenClose();
        super.onClose();
    }
    resize() {
    }
};
DockablePanelAtRightComponent.ɵfac = function DockablePanelAtRightComponent_Factory(t) { return new (t || DockablePanelAtRightComponent)(ɵɵdirectiveInject(Renderer2, 8), ɵɵdirectiveInject(ChangeDetectorRef, 8)); };
DockablePanelAtRightComponent.ɵcmp = ɵɵdefineComponent({ type: DockablePanelAtRightComponent, selectors: [["epsgis-dockable-panel-at-right"]], features: [ɵɵInheritDefinitionFeature], decls: 14, vars: 11, consts: [[1, "sspanel_overlay", 2, "display", "none"], ["sspanel_overlay", ""], [1, "sspanel", 3, "id", "ngClass", "ngStyle"], ["sspanel", ""], ["sspanel-titlebar", "", 1, "sspanel_titlebar", "sspanel_titlebar_draggable", 3, "hasIcon", "options", "windowState", "onClickSetting", "onClickClose"], ["sspanel_titlebar", ""], [1, "sspanel_content", 3, "click"], ["widget_content", ""], [1, "sspanel_resizer", "sspanel_resizer_left", 3, "mousedown"], [1, "collapse", 3, "ngStyle", "click"], ["center_collapse", ""], ["viewBox", "0 0 1024 1024", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16"], ["d", "M245.034251 895.239428l383.063419-383.063419L240.001631 124.07997l0.070608-0.033769c-12.709463-13.137205-20.530592-31.024597-20.530592-50.731428 0-40.376593 32.736589-73.111135 73.115228-73.111135 19.705807 0 37.591153 7.819083 50.730405 20.528546l0.034792-0.035816 438.686251 438.681134-0.035816 0.034792c13.779841 13.281491 22.3838 31.915897 22.3838 52.586682 0 0.071631 0 0.106424 0 0.178055 0 0.072655 0 0.10847 0 0.144286 0 20.669762-8.603959 39.341007-22.3838 52.623521l0.035816 0.033769L343.426165 1003.661789l-0.180102-0.179079c-13.140275 12.565177-30.950919 20.313651-50.588165 20.313651-40.378639 0-73.115228-32.736589-73.115228-73.114205C219.544717 928.512229 229.432924 908.664182 245.034251 895.239428z", "fill", "#bababa"]], template: function DockablePanelAtRightComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "div", 0, 1);
        ɵɵelementStart(2, "div", 2, 3);
        ɵɵelementStart(4, "div", 4, 5);
        ɵɵlistener("onClickSetting", function DockablePanelAtRightComponent_Template_div_onClickSetting_4_listener() { return ctx.openWidgetSetting(); })("onClickClose", function DockablePanelAtRightComponent_Template_div_onClickClose_4_listener($event) { return ctx.closePanel($event); });
        ɵɵelementEnd();
        ɵɵelementStart(6, "div", 6);
        ɵɵlistener("click", function DockablePanelAtRightComponent_Template_div_click_6_listener($event) { return ctx._contentClick($event); });
        ɵɵtemplate(7, DockablePanelAtRightComponent_ng_template_7_Template, 0, 0, "ng-template", null, 7, ɵɵtemplateRefExtractor);
        ɵɵelementEnd();
        ɵɵelementStart(9, "div", 8);
        ɵɵlistener("mousedown", function DockablePanelAtRightComponent_Template_div_mousedown_9_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "width", directionX: "left" }); });
        ɵɵelementEnd();
        ɵɵelementStart(10, "div", 9, 10);
        ɵɵlistener("click", function DockablePanelAtRightComponent_Template_div_click_10_listener($event) { return ctx.collapsePanel($event); });
        ɵɵnamespaceSVG();
        ɵɵelementStart(12, "svg", 11);
        ɵɵelement(13, "path", 12);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵpropertyInterpolate("id", ctx.options.id);
        ɵɵproperty("ngClass", ɵɵpureFunction1(7, _c0$6, ctx.options.showTitle === false))("ngStyle", ctx.position);
        ɵɵadvance(2);
        ɵɵproperty("hasIcon", false)("options", ctx.options)("windowState", ctx.windowState);
        ɵɵadvance(6);
        ɵɵproperty("ngStyle", ɵɵpureFunction1(9, _c1$3, ctx.options.centerCollapse ? "block" : "none"));
    } }, directives: [NgClass, NgStyle, PanelTitleBarComponent], styles: [".notitle[_ngcontent-%COMP%]{border:none}.notitle[_ngcontent-%COMP%]   .sspanel_titlebar[_ngcontent-%COMP%]{display:none}.notitle[_ngcontent-%COMP%]   .sspanel_content[_ngcontent-%COMP%]{border:none}.collapse[_ngcontent-%COMP%]{position:absolute;top:50%;left:-16px;width:16px;height:60px;line-height:60px;cursor:pointer;background:#fcfcfc;border-radius:5px 0 0 5px;box-shadow:-6px 0 6px 0 #a0a0a0}.collapse[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover   path[_ngcontent-%COMP%]{fill:#000}"] });
DockablePanelAtRightComponent = __decorate([
    ComponentRegister({
        uri: 'epsgis-dockable-panel-at-right',
        path: "components/ex-panels/dockable-panel-at-right"
    })
], DockablePanelAtRightComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(DockablePanelAtRightComponent, [{
        type: Component,
        args: [{
                selector: 'epsgis-dockable-panel-at-right',
                templateUrl: './dockable-panel-at-right.component.html',
                styleUrls: ['./dockable-panel-at-right.component.scss'],
            }]
    }], function () { return [{ type: Renderer2, decorators: [{
                type: Optional
            }] }, { type: ChangeDetectorRef, decorators: [{
                type: Optional
            }] }]; }, null); })();

function DockablePanelAtLeftComponent_ng_template_7_Template(rf, ctx) { }
const _c0$7 = function (a0) { return { "notitle": a0 }; };
const _c1$4 = function (a0) { return { "display": a0 }; };
let DockablePanelAtLeftComponent = class DockablePanelAtLeftComponent extends BaseDockablePanelComponent {
    constructor(_render, cdr) {
        super(_render, cdr);
        this._render = _render;
        this.cdr = cdr;
        this.dockMode = PanelDockMode.left;
    }
    ngOnInit() {
        super.ngOnInit();
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    setOptions(options) {
        options.modal = false;
        options.draggable = false;
        options.buttonClose = false;
        options.buttonCollapse = false;
        options.buttonMaximize = false;
        options.buttonMinimize = false;
        options.centerCollapse = true;
        options.dockSide = PanelDockMode.left;
        super.setOptions(options);
    }
    _setPCPosition() {
        this.widgetConfig.position = merge(this.widgetConfig.position, {
            left: 0,
            top: this.mapBounds.top,
            bottom: 0,
            right: 0,
            height: "auto"
        });
        super._setPCPosition();
    }
    onResize() {
        super._resizeMapWhenResize();
        super.onResize();
    }
    onOpen() {
        super._resizeMapWhenResize();
        super.onOpen();
    }
    onClose() {
        super._resizeMapWhenClose();
        super.onClose();
    }
    resize() {
    }
};
DockablePanelAtLeftComponent.ɵfac = function DockablePanelAtLeftComponent_Factory(t) { return new (t || DockablePanelAtLeftComponent)(ɵɵdirectiveInject(Renderer2, 8), ɵɵdirectiveInject(ChangeDetectorRef, 8)); };
DockablePanelAtLeftComponent.ɵcmp = ɵɵdefineComponent({ type: DockablePanelAtLeftComponent, selectors: [["epsgis-dockable-panel-at-left"]], features: [ɵɵInheritDefinitionFeature], decls: 14, vars: 11, consts: [[1, "sspanel_overlay", 2, "display", "none"], ["sspanel_overlay", ""], [1, "sspanel", 3, "id", "ngClass", "ngStyle"], ["sspanel", ""], ["sspanel-titlebar", "", 1, "sspanel_titlebar", "sspanel_titlebar_draggable", 3, "hasIcon", "options", "windowState", "onClickSetting", "onClickClose"], ["sspanel_titlebar", ""], [1, "sspanel_content", 3, "click"], ["widget_content", ""], [1, "sspanel_resizer", "sspanel_resizer_right", 3, "mousedown"], [1, "collapse", 3, "ngStyle", "click"], ["center_collapse", ""], ["viewBox", "0 0 1024 1024", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16"], ["d", "M778.965749 128.759549l-383.064442 383.063419 388.097062 388.096039-0.070608 0.033769c12.709463 13.137205 20.529569 31.024597 20.529569 50.731428 0 40.376593-32.736589 73.112158-73.115228 73.112158-19.705807 0-37.591153-7.819083-50.730405-20.528546l-0.034792 0.035816L241.890654 564.622498l0.035816-0.035816c-13.779841-13.281491-22.3838-31.915897-22.3838-52.585659 0-0.071631 0-0.106424 0-0.178055 0-0.072655 0-0.10847 0-0.144286 0-20.669762 8.603959-39.341007 22.3838-52.622498l-0.035816-0.034792L680.573835 20.337187l0.180102 0.179079c13.139252-12.5662 30.950919-20.313651 50.587142-20.313651 40.378639 0 73.115228 32.736589 73.115228 73.114205C804.455283 95.485725 794.567076 115.334795 778.965749 128.759549z", "fill", "#bababa"]], template: function DockablePanelAtLeftComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "div", 0, 1);
        ɵɵelementStart(2, "div", 2, 3);
        ɵɵelementStart(4, "div", 4, 5);
        ɵɵlistener("onClickSetting", function DockablePanelAtLeftComponent_Template_div_onClickSetting_4_listener() { return ctx.openWidgetSetting(); })("onClickClose", function DockablePanelAtLeftComponent_Template_div_onClickClose_4_listener($event) { return ctx.closePanel($event); });
        ɵɵelementEnd();
        ɵɵelementStart(6, "div", 6);
        ɵɵlistener("click", function DockablePanelAtLeftComponent_Template_div_click_6_listener($event) { return ctx._contentClick($event); });
        ɵɵtemplate(7, DockablePanelAtLeftComponent_ng_template_7_Template, 0, 0, "ng-template", null, 7, ɵɵtemplateRefExtractor);
        ɵɵelementEnd();
        ɵɵelementStart(9, "div", 8);
        ɵɵlistener("mousedown", function DockablePanelAtLeftComponent_Template_div_mousedown_9_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "width", directionX: "right" }); });
        ɵɵelementEnd();
        ɵɵelementStart(10, "div", 9, 10);
        ɵɵlistener("click", function DockablePanelAtLeftComponent_Template_div_click_10_listener($event) { return ctx.collapsePanel($event); });
        ɵɵnamespaceSVG();
        ɵɵelementStart(12, "svg", 11);
        ɵɵelement(13, "path", 12);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵpropertyInterpolate("id", ctx.options.id);
        ɵɵproperty("ngClass", ɵɵpureFunction1(7, _c0$7, ctx.options.showTitle === false))("ngStyle", ctx.position);
        ɵɵadvance(2);
        ɵɵproperty("hasIcon", false)("options", ctx.options)("windowState", ctx.windowState);
        ɵɵadvance(6);
        ɵɵproperty("ngStyle", ɵɵpureFunction1(9, _c1$4, ctx.options.centerCollapse ? "block" : "none"));
    } }, directives: [NgClass, NgStyle, PanelTitleBarComponent], styles: [".notitle[_ngcontent-%COMP%]{border:none}.notitle[_ngcontent-%COMP%]   .sspanel_titlebar[_ngcontent-%COMP%]{display:none}.notitle[_ngcontent-%COMP%]   .sspanel_content[_ngcontent-%COMP%]{border:none}.collapse[_ngcontent-%COMP%]{position:absolute;top:50%;right:-16px;width:16px;height:60px;line-height:60px;cursor:pointer;background:#fcfcfc;border-radius:0 5px 5px 0;box-shadow:3px 0 3px 0 #a0a0a0}.collapse[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover   path[_ngcontent-%COMP%]{fill:#000}"] });
DockablePanelAtLeftComponent = __decorate([
    ComponentRegister({
        uri: 'epsgis-dockable-panel-at-left',
        path: "components/ex-panels/dockable-panel-at-left"
    })
], DockablePanelAtLeftComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(DockablePanelAtLeftComponent, [{
        type: Component,
        args: [{
                selector: 'epsgis-dockable-panel-at-left',
                templateUrl: './dockable-panel-at-left.component.html',
                styleUrls: ['./dockable-panel-at-left.component.scss'],
            }]
    }], function () { return [{ type: Renderer2, decorators: [{
                type: Optional
            }] }, { type: ChangeDetectorRef, decorators: [{
                type: Optional
            }] }]; }, null); })();

class BaseMobilePanelComponent extends BasePanelComponent {
    constructor(_render, cdr) {
        super(_render, cdr);
        this._render = _render;
        this.cdr = cdr;
        this.zIndex = 9999;
        this.moveTopOnActive = false;
    }
    ngOnInit() {
        super.ngOnInit();
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    setOptions(options) {
        if (this.widgetConfig && this.widgetConfig.mobile) {
            merge(options, this.widgetConfig.mobile);
        }
        super.setOptions(options);
    }
    getWidthHeight() {
        let { width, height } = this.widgetConfig.position;
        if (this.widgetConfig.mobile
            && this.widgetConfig.mobile.position) {
            width = this.widgetConfig.mobile.position.width;
            height = this.widgetConfig.mobile.position.height;
        }
        let _w = this.commonService.getPxNumber(width), _h = this.commonService.getPxNumber(height);
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
    }
}
BaseMobilePanelComponent.ɵfac = function BaseMobilePanelComponent_Factory(t) { return new (t || BaseMobilePanelComponent)(ɵɵdirectiveInject(Renderer2, 8), ɵɵdirectiveInject(ChangeDetectorRef, 8)); };
BaseMobilePanelComponent.ɵdir = ɵɵdefineDirective({ type: BaseMobilePanelComponent, features: [ɵɵInheritDefinitionFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(BaseMobilePanelComponent, [{
        type: Directive
    }], function () { return [{ type: Renderer2, decorators: [{
                type: Optional
            }] }, { type: ChangeDetectorRef, decorators: [{
                type: Optional
            }] }]; }, null); })();

function MobileActionPanelComponent_div_4_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 14);
    ɵɵlistener("click", function MobileActionPanelComponent_div_4_ng_container_4_ng_container_1_Template_div_click_1_listener($event) { ɵɵrestoreView(_r12); const ctx_r11 = ɵɵnextContext(3); return ctx_r11._buttonMax_Click($event); });
    ɵɵnamespaceSVG();
    ɵɵelementStart(2, "svg", 15);
    ɵɵelementStart(3, "g", 16);
    ɵɵelement(4, "rect", 17);
    ɵɵelement(5, "line", 18);
    ɵɵelement(6, "line", 19);
    ɵɵelement(7, "line", 20);
    ɵɵelement(8, "line", 21);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("title", ctx_r8.options.buttonUnmaximizeText);
} }
function MobileActionPanelComponent_div_4_ng_container_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 14);
    ɵɵlistener("click", function MobileActionPanelComponent_div_4_ng_container_4_ng_template_2_Template_div_click_0_listener($event) { ɵɵrestoreView(_r14); const ctx_r13 = ɵɵnextContext(3); return ctx_r13._buttonMax_Click($event); });
    ɵɵnamespaceSVG();
    ɵɵelementStart(1, "svg", 15);
    ɵɵelementStart(2, "g", 16);
    ɵɵelement(3, "rect", 22);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(3);
    ɵɵpropertyInterpolate("title", ctx_r10.options.buttonMaximizeText);
} }
function MobileActionPanelComponent_div_4_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MobileActionPanelComponent_div_4_ng_container_4_ng_container_1_Template, 9, 1, "ng-container", 12);
    ɵɵtemplate(2, MobileActionPanelComponent_div_4_ng_container_4_ng_template_2_Template, 4, 1, "ng-template", null, 13, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r9 = ɵɵreference(3);
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r6.windowState == "maximized")("ngIfElse", _r9);
} }
function MobileActionPanelComponent_div_4_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r16 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 23);
    ɵɵlistener("click", function MobileActionPanelComponent_div_4_ng_container_5_Template_div_click_1_listener($event) { ɵɵrestoreView(_r16); const ctx_r15 = ɵɵnextContext(2); return ctx_r15.closePanel($event); });
    ɵɵnamespaceSVG();
    ɵɵelementStart(2, "svg", 15);
    ɵɵelementStart(3, "g");
    ɵɵelement(4, "line", 24);
    ɵɵelement(5, "line", 25);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("title", ctx_r7.options.buttonCloseText);
} }
function MobileActionPanelComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r18 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 8, 9);
    ɵɵlistener("mousedown", function MobileActionPanelComponent_div_4_Template_div_mousedown_0_listener($event) { ɵɵrestoreView(_r18); const ctx_r17 = ɵɵnextContext(); return ctx_r17._titlebar_MouseDown($event); });
    ɵɵelementStart(2, "div", 10);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵtemplate(4, MobileActionPanelComponent_div_4_ng_container_4_Template, 4, 2, "ng-container", 11);
    ɵɵtemplate(5, MobileActionPanelComponent_div_4_ng_container_5_Template, 6, 1, "ng-container", 11);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ctx_r2.options.title, "");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.options.buttonMaximize);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.options.buttonClose);
} }
function MobileActionPanelComponent_ng_template_6_Template(rf, ctx) { }
let MobileActionPanelComponent = class MobileActionPanelComponent extends BaseMobilePanelComponent {
    constructor(_render, cdr) {
        super(_render, cdr);
        this._render = _render;
        this.cdr = cdr;
        this._mobileShowMode = PanelInMobileShowMode.action;
    }
    setOptions(options) {
        options.buttonCollapse = false;
        options.buttonMaximize = false;
        super.setOptions(options);
    }
    _setMobilePosition() {
        const obj = this.getWidthHeight();
        let _pos = new WidgetPosition("auto", 0, 0, 0, obj.height, "100%");
        this.widgetConfig.position = _pos;
        this._render.setStyle(this.sspanel.nativeElement, "max-height", obj.height);
    }
};
MobileActionPanelComponent.ɵfac = function MobileActionPanelComponent_Factory(t) { return new (t || MobileActionPanelComponent)(ɵɵdirectiveInject(Renderer2, 8), ɵɵdirectiveInject(ChangeDetectorRef, 8)); };
MobileActionPanelComponent.ɵcmp = ɵɵdefineComponent({ type: MobileActionPanelComponent, selectors: [["epsgis-mobile-action-panel"]], features: [ɵɵInheritDefinitionFeature], decls: 9, vars: 3, consts: [[1, "sspanel_overlay"], ["sspanel_overlay", ""], [1, "sspanel", 3, "id", "ngStyle"], ["sspanel", ""], ["class", "sspanel_titlebar sspanel_titlebar_draggable", 3, "mousedown", 4, "ngIf"], [1, "sspanel_content", 3, "click"], ["widget_content", ""], [1, "sspanel_resizer", "sspanel_resizer_top", 3, "mousedown"], [1, "sspanel_titlebar", "sspanel_titlebar_draggable", 3, "mousedown"], ["sspanel_titlebar", ""], [1, "sspanel_titlebar_text"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["showMaximizeButton", ""], [1, "sspanel_titlebar_button", "sspanel_titlebar_button_maximize", 3, "title", "click"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 10 10", "height", "100%", "width", "100%"], ["fill", "none"], ["x", "1", "y", "3", "height", "6", "width", "6"], ["y1", "3", "x1", "3", "y2", "1", "x2", "3"], ["y1", "1", "x1", "2.5", "y2", "1", "x2", "9.5"], ["y1", "1", "x1", "9", "y2", "7", "x2", "9"], ["y1", "7", "x1", "9.5", "y2", "7", "x2", "7"], ["x", "1", "y", "1", "height", "8", "width", "8"], [1, "sspanel_titlebar_button", "sspanel_titlebar_button_close", 3, "title", "click"], ["y2", "0", "x2", "10", "y1", "10", "x1", "0"], ["y2", "10", "x2", "10", "y1", "0", "x1", "0"]], template: function MobileActionPanelComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0, 1);
        ɵɵelementStart(2, "div", 2, 3);
        ɵɵtemplate(4, MobileActionPanelComponent_div_4_Template, 6, 3, "div", 4);
        ɵɵelementStart(5, "div", 5);
        ɵɵlistener("click", function MobileActionPanelComponent_Template_div_click_5_listener($event) { return ctx._contentClick($event); });
        ɵɵtemplate(6, MobileActionPanelComponent_ng_template_6_Template, 0, 0, "ng-template", null, 6, ɵɵtemplateRefExtractor);
        ɵɵelementEnd();
        ɵɵelementStart(8, "div", 7);
        ɵɵlistener("mousedown", function MobileActionPanelComponent_Template_div_mousedown_8_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "height", directionY: "top" }); });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵpropertyInterpolate("id", ctx.options.id);
        ɵɵproperty("ngStyle", ctx.position);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.options.showTitle);
    } }, directives: [NgStyle, NgIf], styles: [".sspanel[_ngcontent-%COMP%]{border:none}"] });
MobileActionPanelComponent = __decorate([
    ComponentRegister({
        uri: 'epsgis-mobile-action-panel',
        path: "components/mobile/action-panel"
    })
], MobileActionPanelComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MobileActionPanelComponent, [{
        type: Component,
        args: [{
                selector: 'epsgis-mobile-action-panel',
                templateUrl: './action-panel.component.html',
                styleUrls: ['./action-panel.component.scss']
            }]
    }], function () { return [{ type: Renderer2, decorators: [{
                type: Optional
            }] }, { type: ChangeDetectorRef, decorators: [{
                type: Optional
            }] }]; }, null); })();

function MobileDrawerPanelComponent_div_4_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 13);
    ɵɵlistener("click", function MobileDrawerPanelComponent_div_4_ng_container_4_ng_container_1_Template_div_click_1_listener($event) { ɵɵrestoreView(_r13); const ctx_r12 = ɵɵnextContext(3); return ctx_r12._buttonCollapse_Click($event); });
    ɵɵnamespaceSVG();
    ɵɵelementStart(2, "svg", 14);
    ɵɵelementStart(3, "g", 15);
    ɵɵelement(4, "polyline", 16);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("title", ctx_r9.options.buttonUnCollapseText);
} }
function MobileDrawerPanelComponent_div_4_ng_container_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r15 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 13);
    ɵɵlistener("click", function MobileDrawerPanelComponent_div_4_ng_container_4_ng_template_2_Template_div_click_0_listener($event) { ɵɵrestoreView(_r15); const ctx_r14 = ɵɵnextContext(3); return ctx_r14._buttonCollapse_Click($event); });
    ɵɵnamespaceSVG();
    ɵɵelementStart(1, "svg", 14);
    ɵɵelementStart(2, "g", 15);
    ɵɵelement(3, "polyline", 17);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = ɵɵnextContext(3);
    ɵɵpropertyInterpolate("title", ctx_r11.options.buttonCollapseText);
} }
function MobileDrawerPanelComponent_div_4_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MobileDrawerPanelComponent_div_4_ng_container_4_ng_container_1_Template, 5, 1, "ng-container", 11);
    ɵɵtemplate(2, MobileDrawerPanelComponent_div_4_ng_container_4_ng_template_2_Template, 4, 1, "ng-template", null, 12, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r10 = ɵɵreference(3);
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r6.windowState == "collapsed")("ngIfElse", _r10);
} }
function MobileDrawerPanelComponent_div_4_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 19);
    ɵɵlistener("click", function MobileDrawerPanelComponent_div_4_ng_container_5_ng_container_1_Template_div_click_1_listener($event) { ɵɵrestoreView(_r20); const ctx_r19 = ɵɵnextContext(3); return ctx_r19._buttonMax_Click($event); });
    ɵɵnamespaceSVG();
    ɵɵelementStart(2, "svg", 14);
    ɵɵelementStart(3, "g", 15);
    ɵɵelement(4, "rect", 20);
    ɵɵelement(5, "line", 21);
    ɵɵelement(6, "line", 22);
    ɵɵelement(7, "line", 23);
    ɵɵelement(8, "line", 24);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r16 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("title", ctx_r16.options.buttonUnmaximizeText);
} }
function MobileDrawerPanelComponent_div_4_ng_container_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r22 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 19);
    ɵɵlistener("click", function MobileDrawerPanelComponent_div_4_ng_container_5_ng_template_2_Template_div_click_0_listener($event) { ɵɵrestoreView(_r22); const ctx_r21 = ɵɵnextContext(3); return ctx_r21._buttonMax_Click($event); });
    ɵɵnamespaceSVG();
    ɵɵelementStart(1, "svg", 14);
    ɵɵelementStart(2, "g", 15);
    ɵɵelement(3, "rect", 25);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r18 = ɵɵnextContext(3);
    ɵɵpropertyInterpolate("title", ctx_r18.options.buttonMaximizeText);
} }
function MobileDrawerPanelComponent_div_4_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MobileDrawerPanelComponent_div_4_ng_container_5_ng_container_1_Template, 9, 1, "ng-container", 11);
    ɵɵtemplate(2, MobileDrawerPanelComponent_div_4_ng_container_5_ng_template_2_Template, 4, 1, "ng-template", null, 18, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r17 = ɵɵreference(3);
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r7.windowState == "maximized")("ngIfElse", _r17);
} }
function MobileDrawerPanelComponent_div_4_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r24 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 26);
    ɵɵlistener("click", function MobileDrawerPanelComponent_div_4_ng_container_6_Template_div_click_1_listener($event) { ɵɵrestoreView(_r24); const ctx_r23 = ɵɵnextContext(2); return ctx_r23.closePanel($event); });
    ɵɵnamespaceSVG();
    ɵɵelementStart(2, "svg", 14);
    ɵɵelementStart(3, "g");
    ɵɵelement(4, "line", 27);
    ɵɵelement(5, "line", 28);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("title", ctx_r8.options.buttonCloseText);
} }
function MobileDrawerPanelComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r26 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 7, 8);
    ɵɵlistener("mousedown", function MobileDrawerPanelComponent_div_4_Template_div_mousedown_0_listener($event) { ɵɵrestoreView(_r26); const ctx_r25 = ɵɵnextContext(); return ctx_r25._titlebar_MouseDown($event); });
    ɵɵelementStart(2, "div", 9);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵtemplate(4, MobileDrawerPanelComponent_div_4_ng_container_4_Template, 4, 2, "ng-container", 10);
    ɵɵtemplate(5, MobileDrawerPanelComponent_div_4_ng_container_5_Template, 4, 2, "ng-container", 10);
    ɵɵtemplate(6, MobileDrawerPanelComponent_div_4_ng_container_6_Template, 6, 1, "ng-container", 10);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ctx_r2.options.title, "");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.options.buttonCollapse);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.options.buttonMaximize);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.options.buttonClose);
} }
function MobileDrawerPanelComponent_ng_template_6_Template(rf, ctx) { }
let MobileDrawerPanelComponent = class MobileDrawerPanelComponent extends BaseMobilePanelComponent {
    constructor(_render, cdr) {
        super(_render, cdr);
        this._render = _render;
        this.cdr = cdr;
        this._mobileShowMode = PanelInMobileShowMode.drawer;
    }
    ngOnDestroy() {
        this._sspanelOverlayClickHandler();
        super.ngOnDestroy();
    }
    setOptions(options) {
        options.buttonCollapse = false;
        options.buttonMaximize = false;
        super.setOptions(options);
    }
    _setMobilePosition() {
        let _width = "80%";
        if (this.widgetConfig.mobile && this.widgetConfig.mobile.position) {
            const obj = this.getWidthHeight();
            if (obj.width) {
                _width = obj.width;
            }
        }
        let _pos = new WidgetPosition(0, 0, 0, 20, "100%", _width);
        this.widgetConfig.position = _pos;
        this._sspanelOverlayClickHandler = this.jsEventManager.addEventListener(this.sspanelOverlay.nativeElement, "click", (evt) => {
            if (evt.target === this.sspanelOverlay.nativeElement) {
                this.closePanel(evt);
            }
        });
    }
};
MobileDrawerPanelComponent.ɵfac = function MobileDrawerPanelComponent_Factory(t) { return new (t || MobileDrawerPanelComponent)(ɵɵdirectiveInject(Renderer2, 8), ɵɵdirectiveInject(ChangeDetectorRef, 8)); };
MobileDrawerPanelComponent.ɵcmp = ɵɵdefineComponent({ type: MobileDrawerPanelComponent, selectors: [["epsgis-mobile-drawer-panel"]], features: [ɵɵInheritDefinitionFeature], decls: 8, vars: 3, consts: [[1, "sspanel_overlay"], ["sspanel_overlay", ""], [1, "sspanel", 3, "id", "ngStyle"], ["sspanel", ""], ["class", "sspanel_titlebar sspanel_titlebar_draggable", 3, "mousedown", 4, "ngIf"], [1, "sspanel_content", 3, "click"], ["widget_content", ""], [1, "sspanel_titlebar", "sspanel_titlebar_draggable", 3, "mousedown"], ["sspanel_titlebar", ""], [1, "sspanel_titlebar_text"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["showCollapsedButton", ""], [1, "sspanel_titlebar_button", "sspanel_titlebar_button_collapse", 3, "title", "click"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 10 10", "height", "100%", "width", "100%"], ["fill", "none"], ["points", "1,3 9,3 5,8 1,3 9,3"], ["points", "1,7 9,7 5,2 1,7 9,7"], ["showMaximizeButton", ""], [1, "sspanel_titlebar_button", "sspanel_titlebar_button_maximize", 3, "title", "click"], ["x", "1", "y", "3", "height", "6", "width", "6"], ["y1", "3", "x1", "3", "y2", "1", "x2", "3"], ["y1", "1", "x1", "2.5", "y2", "1", "x2", "9.5"], ["y1", "1", "x1", "9", "y2", "7", "x2", "9"], ["y1", "7", "x1", "9.5", "y2", "7", "x2", "7"], ["x", "1", "y", "1", "height", "8", "width", "8"], [1, "sspanel_titlebar_button", "sspanel_titlebar_button_close", 3, "title", "click"], ["y2", "0", "x2", "10", "y1", "10", "x1", "0"], ["y2", "10", "x2", "10", "y1", "0", "x1", "0"]], template: function MobileDrawerPanelComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0, 1);
        ɵɵelementStart(2, "div", 2, 3);
        ɵɵtemplate(4, MobileDrawerPanelComponent_div_4_Template, 7, 4, "div", 4);
        ɵɵelementStart(5, "div", 5);
        ɵɵlistener("click", function MobileDrawerPanelComponent_Template_div_click_5_listener($event) { return ctx._contentClick($event); });
        ɵɵtemplate(6, MobileDrawerPanelComponent_ng_template_6_Template, 0, 0, "ng-template", null, 6, ɵɵtemplateRefExtractor);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵpropertyInterpolate("id", ctx.options.id);
        ɵɵproperty("ngStyle", ctx.position);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.options.showTitle);
    } }, directives: [NgStyle, NgIf], styles: [".sspanel[_ngcontent-%COMP%]{border:none}.sspanel_titlebar[_ngcontent-%COMP%]{background:#3880ff;height:44px}.sspanel_titlebar_text[_ngcontent-%COMP%]{text-align:center}.sspanel_titlebar_button[_ngcontent-%COMP%]{display:none}"] });
MobileDrawerPanelComponent = __decorate([
    ComponentRegister({
        uri: "epsgis-mobile-drawer-panel",
        path: "components/mobile/drawer-panel"
    })
], MobileDrawerPanelComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MobileDrawerPanelComponent, [{
        type: Component,
        args: [{
                selector: 'epsgis-mobile-drawer-panel',
                templateUrl: './drawer-panel.component.html',
                styleUrls: ['./drawer-panel.component.scss']
            }]
    }], function () { return [{ type: Renderer2, decorators: [{
                type: Optional
            }] }, { type: ChangeDetectorRef, decorators: [{
                type: Optional
            }] }]; }, null); })();

function MobileModalPanelComponent_div_4_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 14);
    ɵɵlistener("click", function MobileModalPanelComponent_div_4_ng_container_4_ng_container_1_Template_div_click_1_listener($event) { ɵɵrestoreView(_r13); const ctx_r12 = ɵɵnextContext(3); return ctx_r12._buttonCollapse_Click($event); });
    ɵɵnamespaceSVG();
    ɵɵelementStart(2, "svg", 15);
    ɵɵelementStart(3, "g", 16);
    ɵɵelement(4, "polyline", 17);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("title", ctx_r9.options.buttonUnCollapseText);
} }
function MobileModalPanelComponent_div_4_ng_container_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r15 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 14);
    ɵɵlistener("click", function MobileModalPanelComponent_div_4_ng_container_4_ng_template_2_Template_div_click_0_listener($event) { ɵɵrestoreView(_r15); const ctx_r14 = ɵɵnextContext(3); return ctx_r14._buttonCollapse_Click($event); });
    ɵɵnamespaceSVG();
    ɵɵelementStart(1, "svg", 15);
    ɵɵelementStart(2, "g", 16);
    ɵɵelement(3, "polyline", 18);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = ɵɵnextContext(3);
    ɵɵpropertyInterpolate("title", ctx_r11.options.buttonCollapseText);
} }
function MobileModalPanelComponent_div_4_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MobileModalPanelComponent_div_4_ng_container_4_ng_container_1_Template, 5, 1, "ng-container", 12);
    ɵɵtemplate(2, MobileModalPanelComponent_div_4_ng_container_4_ng_template_2_Template, 4, 1, "ng-template", null, 13, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r10 = ɵɵreference(3);
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r6.windowState == "collapsed")("ngIfElse", _r10);
} }
function MobileModalPanelComponent_div_4_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 20);
    ɵɵlistener("click", function MobileModalPanelComponent_div_4_ng_container_5_ng_container_1_Template_div_click_1_listener($event) { ɵɵrestoreView(_r20); const ctx_r19 = ɵɵnextContext(3); return ctx_r19._buttonMax_Click($event); });
    ɵɵnamespaceSVG();
    ɵɵelementStart(2, "svg", 15);
    ɵɵelementStart(3, "g", 16);
    ɵɵelement(4, "rect", 21);
    ɵɵelement(5, "line", 22);
    ɵɵelement(6, "line", 23);
    ɵɵelement(7, "line", 24);
    ɵɵelement(8, "line", 25);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r16 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("title", ctx_r16.options.buttonUnmaximizeText);
} }
function MobileModalPanelComponent_div_4_ng_container_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r22 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 20);
    ɵɵlistener("click", function MobileModalPanelComponent_div_4_ng_container_5_ng_template_2_Template_div_click_0_listener($event) { ɵɵrestoreView(_r22); const ctx_r21 = ɵɵnextContext(3); return ctx_r21._buttonMax_Click($event); });
    ɵɵnamespaceSVG();
    ɵɵelementStart(1, "svg", 15);
    ɵɵelementStart(2, "g", 16);
    ɵɵelement(3, "rect", 26);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r18 = ɵɵnextContext(3);
    ɵɵpropertyInterpolate("title", ctx_r18.options.buttonMaximizeText);
} }
function MobileModalPanelComponent_div_4_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MobileModalPanelComponent_div_4_ng_container_5_ng_container_1_Template, 9, 1, "ng-container", 12);
    ɵɵtemplate(2, MobileModalPanelComponent_div_4_ng_container_5_ng_template_2_Template, 4, 1, "ng-template", null, 19, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r17 = ɵɵreference(3);
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r7.windowState == "maximized")("ngIfElse", _r17);
} }
function MobileModalPanelComponent_div_4_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r24 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 27);
    ɵɵlistener("click", function MobileModalPanelComponent_div_4_ng_container_6_Template_div_click_1_listener($event) { ɵɵrestoreView(_r24); const ctx_r23 = ɵɵnextContext(2); return ctx_r23.closePanel($event); });
    ɵɵnamespaceSVG();
    ɵɵelementStart(2, "svg", 15);
    ɵɵelementStart(3, "g");
    ɵɵelement(4, "line", 28);
    ɵɵelement(5, "line", 29);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("title", ctx_r8.options.buttonCloseText);
} }
function MobileModalPanelComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r26 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 8, 9);
    ɵɵlistener("mousedown", function MobileModalPanelComponent_div_4_Template_div_mousedown_0_listener($event) { ɵɵrestoreView(_r26); const ctx_r25 = ɵɵnextContext(); return ctx_r25._titlebar_MouseDown($event); });
    ɵɵelementStart(2, "div", 10);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵtemplate(4, MobileModalPanelComponent_div_4_ng_container_4_Template, 4, 2, "ng-container", 11);
    ɵɵtemplate(5, MobileModalPanelComponent_div_4_ng_container_5_Template, 4, 2, "ng-container", 11);
    ɵɵtemplate(6, MobileModalPanelComponent_div_4_ng_container_6_Template, 6, 1, "ng-container", 11);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ctx_r2.options.title, "");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.options.buttonCollapse);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.options.buttonMaximize);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.options.buttonClose);
} }
function MobileModalPanelComponent_ng_template_6_Template(rf, ctx) { }
let MobileModalPanelComponent = class MobileModalPanelComponent extends BaseMobilePanelComponent {
    constructor(_render, cdr) {
        super(_render, cdr);
        this._render = _render;
        this.cdr = cdr;
        this._mobileShowMode = PanelInMobileShowMode.modal;
    }
    ngOnInit() {
        super.ngOnInit();
    }
    setOptions(options) {
        options.buttonCollapse = false;
        options.buttonMaximize = false;
        options.modal = true;
        super.setOptions(options);
    }
    _setMobilePosition() {
        let _pos = new WidgetPosition(0, 0, 0, 0, "100%", "100%", "", "unset");
        this.widgetConfig.position = _pos;
    }
};
MobileModalPanelComponent.ɵfac = function MobileModalPanelComponent_Factory(t) { return new (t || MobileModalPanelComponent)(ɵɵdirectiveInject(Renderer2, 8), ɵɵdirectiveInject(ChangeDetectorRef, 8)); };
MobileModalPanelComponent.ɵcmp = ɵɵdefineComponent({ type: MobileModalPanelComponent, selectors: [["epsgis-mobile-modal-panel"]], features: [ɵɵInheritDefinitionFeature], decls: 9, vars: 3, consts: [[1, "sspanel_overlay"], ["sspanel_overlay", ""], [1, "sspanel", 3, "id", "ngStyle"], ["sspanel", ""], ["class", "sspanel_titlebar sspanel_titlebar_draggable", 3, "mousedown", 4, "ngIf"], [1, "sspanel_content", 3, "click"], ["widget_content", ""], [1, "sspanel_minplaceholder"], [1, "sspanel_titlebar", "sspanel_titlebar_draggable", 3, "mousedown"], ["sspanel_titlebar", ""], [1, "sspanel_titlebar_text"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["showCollapsedButton", ""], [1, "sspanel_titlebar_button", "sspanel_titlebar_button_collapse", 3, "title", "click"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 10 10", "height", "100%", "width", "100%"], ["fill", "none"], ["points", "1,3 9,3 5,8 1,3 9,3"], ["points", "1,7 9,7 5,2 1,7 9,7"], ["showMaximizeButton", ""], [1, "sspanel_titlebar_button", "sspanel_titlebar_button_maximize", 3, "title", "click"], ["x", "1", "y", "3", "height", "6", "width", "6"], ["y1", "3", "x1", "3", "y2", "1", "x2", "3"], ["y1", "1", "x1", "2.5", "y2", "1", "x2", "9.5"], ["y1", "1", "x1", "9", "y2", "7", "x2", "9"], ["y1", "7", "x1", "9.5", "y2", "7", "x2", "7"], ["x", "1", "y", "1", "height", "8", "width", "8"], [1, "sspanel_titlebar_button", "sspanel_titlebar_button_close", 3, "title", "click"], ["y2", "0", "x2", "10", "y1", "10", "x1", "0"], ["y2", "10", "x2", "10", "y1", "0", "x1", "0"]], template: function MobileModalPanelComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0, 1);
        ɵɵelementStart(2, "div", 2, 3);
        ɵɵtemplate(4, MobileModalPanelComponent_div_4_Template, 7, 4, "div", 4);
        ɵɵelementStart(5, "div", 5);
        ɵɵlistener("click", function MobileModalPanelComponent_Template_div_click_5_listener($event) { return ctx._contentClick($event); });
        ɵɵtemplate(6, MobileModalPanelComponent_ng_template_6_Template, 0, 0, "ng-template", null, 6, ɵɵtemplateRefExtractor);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelement(8, "div", 7);
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵpropertyInterpolate("id", ctx.options.id);
        ɵɵproperty("ngStyle", ctx.position);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.options.showTitle);
    } }, directives: [NgStyle, NgIf], styles: [".sspanel[_ngcontent-%COMP%]{border:none;box-shadow:none}"] });
MobileModalPanelComponent = __decorate([
    ComponentRegister({
        uri: 'epsgis-mobile-modal-panel',
        path: "components/mobile/modal-panel"
    })
], MobileModalPanelComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MobileModalPanelComponent, [{
        type: Component,
        args: [{
                selector: 'epsgis-mobile-modal-panel',
                templateUrl: './modal-panel.component.html',
                styleUrls: ['./modal-panel.component.scss']
            }]
    }], function () { return [{ type: Renderer2, decorators: [{
                type: Optional
            }] }, { type: ChangeDetectorRef, decorators: [{
                type: Optional
            }] }]; }, null); })();

function MobilePopupPanelComponent_div_4_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 14);
    ɵɵlistener("click", function MobilePopupPanelComponent_div_4_ng_container_4_ng_container_1_Template_div_click_1_listener($event) { ɵɵrestoreView(_r13); const ctx_r12 = ɵɵnextContext(3); return ctx_r12._buttonCollapse_Click($event); });
    ɵɵnamespaceSVG();
    ɵɵelementStart(2, "svg", 15);
    ɵɵelementStart(3, "g", 16);
    ɵɵelement(4, "polyline", 17);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("title", ctx_r9.options.buttonUnCollapseText);
} }
function MobilePopupPanelComponent_div_4_ng_container_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r15 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 14);
    ɵɵlistener("click", function MobilePopupPanelComponent_div_4_ng_container_4_ng_template_2_Template_div_click_0_listener($event) { ɵɵrestoreView(_r15); const ctx_r14 = ɵɵnextContext(3); return ctx_r14._buttonCollapse_Click($event); });
    ɵɵnamespaceSVG();
    ɵɵelementStart(1, "svg", 15);
    ɵɵelementStart(2, "g", 16);
    ɵɵelement(3, "polyline", 18);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = ɵɵnextContext(3);
    ɵɵpropertyInterpolate("title", ctx_r11.options.buttonCollapseText);
} }
function MobilePopupPanelComponent_div_4_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MobilePopupPanelComponent_div_4_ng_container_4_ng_container_1_Template, 5, 1, "ng-container", 12);
    ɵɵtemplate(2, MobilePopupPanelComponent_div_4_ng_container_4_ng_template_2_Template, 4, 1, "ng-template", null, 13, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r10 = ɵɵreference(3);
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r6.windowState == "collapsed")("ngIfElse", _r10);
} }
function MobilePopupPanelComponent_div_4_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 20);
    ɵɵlistener("click", function MobilePopupPanelComponent_div_4_ng_container_5_ng_container_1_Template_div_click_1_listener($event) { ɵɵrestoreView(_r20); const ctx_r19 = ɵɵnextContext(3); return ctx_r19._buttonMax_Click($event); });
    ɵɵnamespaceSVG();
    ɵɵelementStart(2, "svg", 15);
    ɵɵelementStart(3, "g", 16);
    ɵɵelement(4, "rect", 21);
    ɵɵelement(5, "line", 22);
    ɵɵelement(6, "line", 23);
    ɵɵelement(7, "line", 24);
    ɵɵelement(8, "line", 25);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r16 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("title", ctx_r16.options.buttonUnmaximizeText);
} }
function MobilePopupPanelComponent_div_4_ng_container_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r22 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 20);
    ɵɵlistener("click", function MobilePopupPanelComponent_div_4_ng_container_5_ng_template_2_Template_div_click_0_listener($event) { ɵɵrestoreView(_r22); const ctx_r21 = ɵɵnextContext(3); return ctx_r21._buttonMax_Click($event); });
    ɵɵnamespaceSVG();
    ɵɵelementStart(1, "svg", 15);
    ɵɵelementStart(2, "g", 16);
    ɵɵelement(3, "rect", 26);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r18 = ɵɵnextContext(3);
    ɵɵpropertyInterpolate("title", ctx_r18.options.buttonMaximizeText);
} }
function MobilePopupPanelComponent_div_4_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MobilePopupPanelComponent_div_4_ng_container_5_ng_container_1_Template, 9, 1, "ng-container", 12);
    ɵɵtemplate(2, MobilePopupPanelComponent_div_4_ng_container_5_ng_template_2_Template, 4, 1, "ng-template", null, 19, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r17 = ɵɵreference(3);
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r7.windowState == "maximized")("ngIfElse", _r17);
} }
function MobilePopupPanelComponent_div_4_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r24 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 27);
    ɵɵlistener("click", function MobilePopupPanelComponent_div_4_ng_container_6_Template_div_click_1_listener($event) { ɵɵrestoreView(_r24); const ctx_r23 = ɵɵnextContext(2); return ctx_r23.closePanel($event); });
    ɵɵnamespaceSVG();
    ɵɵelementStart(2, "svg", 15);
    ɵɵelementStart(3, "g");
    ɵɵelement(4, "line", 28);
    ɵɵelement(5, "line", 29);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("title", ctx_r8.options.buttonCloseText);
} }
function MobilePopupPanelComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r26 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 8, 9);
    ɵɵlistener("mousedown", function MobilePopupPanelComponent_div_4_Template_div_mousedown_0_listener($event) { ɵɵrestoreView(_r26); const ctx_r25 = ɵɵnextContext(); return ctx_r25._titlebar_MouseDown($event); });
    ɵɵelementStart(2, "div", 10);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵtemplate(4, MobilePopupPanelComponent_div_4_ng_container_4_Template, 4, 2, "ng-container", 11);
    ɵɵtemplate(5, MobilePopupPanelComponent_div_4_ng_container_5_Template, 4, 2, "ng-container", 11);
    ɵɵtemplate(6, MobilePopupPanelComponent_div_4_ng_container_6_Template, 6, 1, "ng-container", 11);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ctx_r2.options.title, "");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.options.buttonCollapse);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.options.buttonMaximize);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.options.buttonClose);
} }
function MobilePopupPanelComponent_ng_template_6_Template(rf, ctx) { }
let MobilePopupPanelComponent = class MobilePopupPanelComponent extends BaseMobilePanelComponent {
    constructor(_render, cdr) {
        super(_render, cdr);
        this._render = _render;
        this.cdr = cdr;
        this._mobileShowMode = PanelInMobileShowMode.popup;
    }
    ngOnInit() {
        super.ngOnInit();
    }
    setOptions(options) {
        options.buttonCollapse = false;
        options.buttonMaximize = false;
        options.modal = false;
        super.setOptions(options);
    }
    _setMobilePosition() {
        const obj = super.getWidthHeight();
        let _pos = new WidgetPosition(0, 0, 0, 0, obj.height, obj.width, "", "unset");
        this.widgetConfig.position = _pos;
    }
};
MobilePopupPanelComponent.ɵfac = function MobilePopupPanelComponent_Factory(t) { return new (t || MobilePopupPanelComponent)(ɵɵdirectiveInject(Renderer2, 8), ɵɵdirectiveInject(ChangeDetectorRef, 8)); };
MobilePopupPanelComponent.ɵcmp = ɵɵdefineComponent({ type: MobilePopupPanelComponent, selectors: [["epsgis-mobile-popup-panel"]], features: [ɵɵInheritDefinitionFeature], decls: 9, vars: 3, consts: [[1, "sspanel_overlay"], ["sspanel_overlay", ""], [1, "sspanel", 3, "id", "ngStyle"], ["sspanel", ""], ["class", "sspanel_titlebar sspanel_titlebar_draggable", 3, "mousedown", 4, "ngIf"], [1, "sspanel_content", 3, "click"], ["widget_content", ""], [1, "sspanel_minplaceholder"], [1, "sspanel_titlebar", "sspanel_titlebar_draggable", 3, "mousedown"], ["sspanel_titlebar", ""], [1, "sspanel_titlebar_text"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["showCollapsedButton", ""], [1, "sspanel_titlebar_button", "sspanel_titlebar_button_collapse", 3, "title", "click"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 10 10", "height", "100%", "width", "100%"], ["fill", "none"], ["points", "1,3 9,3 5,8 1,3 9,3"], ["points", "1,7 9,7 5,2 1,7 9,7"], ["showMaximizeButton", ""], [1, "sspanel_titlebar_button", "sspanel_titlebar_button_maximize", 3, "title", "click"], ["x", "1", "y", "3", "height", "6", "width", "6"], ["y1", "3", "x1", "3", "y2", "1", "x2", "3"], ["y1", "1", "x1", "2.5", "y2", "1", "x2", "9.5"], ["y1", "1", "x1", "9", "y2", "7", "x2", "9"], ["y1", "7", "x1", "9.5", "y2", "7", "x2", "7"], ["x", "1", "y", "1", "height", "8", "width", "8"], [1, "sspanel_titlebar_button", "sspanel_titlebar_button_close", 3, "title", "click"], ["y2", "0", "x2", "10", "y1", "10", "x1", "0"], ["y2", "10", "x2", "10", "y1", "0", "x1", "0"]], template: function MobilePopupPanelComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0, 1);
        ɵɵelementStart(2, "div", 2, 3);
        ɵɵtemplate(4, MobilePopupPanelComponent_div_4_Template, 7, 4, "div", 4);
        ɵɵelementStart(5, "div", 5);
        ɵɵlistener("click", function MobilePopupPanelComponent_Template_div_click_5_listener($event) { return ctx._contentClick($event); });
        ɵɵtemplate(6, MobilePopupPanelComponent_ng_template_6_Template, 0, 0, "ng-template", null, 6, ɵɵtemplateRefExtractor);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelement(8, "div", 7);
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵpropertyInterpolate("id", ctx.options.id);
        ɵɵproperty("ngStyle", ctx.position);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.options.showTitle);
    } }, directives: [NgStyle, NgIf], styles: [".sspanel_overlay[_ngcontent-%COMP%]{display:flex}.sspanel[_ngcontent-%COMP%]{position:unset;margin:auto}"] });
MobilePopupPanelComponent = __decorate([
    ComponentRegister({
        uri: 'epsgis-mobile-popup-panel',
        path: "components/mobile/popup-panel"
    })
], MobilePopupPanelComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MobilePopupPanelComponent, [{
        type: Component,
        args: [{
                selector: 'epsgis-mobile-popup-panel',
                templateUrl: './popup-panel.component.html',
                styleUrls: ['./popup-panel.component.scss']
            }]
    }], function () { return [{ type: Renderer2, decorators: [{
                type: Optional
            }] }, { type: ChangeDetectorRef, decorators: [{
                type: Optional
            }] }]; }, null); })();

function MobileDrawerRightPanelComponent_div_4_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 13);
    ɵɵlistener("click", function MobileDrawerRightPanelComponent_div_4_ng_container_4_ng_container_1_Template_div_click_1_listener($event) { ɵɵrestoreView(_r13); const ctx_r12 = ɵɵnextContext(3); return ctx_r12._buttonCollapse_Click($event); });
    ɵɵnamespaceSVG();
    ɵɵelementStart(2, "svg", 14);
    ɵɵelementStart(3, "g", 15);
    ɵɵelement(4, "polyline", 16);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("title", ctx_r9.options.buttonUnCollapseText);
} }
function MobileDrawerRightPanelComponent_div_4_ng_container_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r15 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 13);
    ɵɵlistener("click", function MobileDrawerRightPanelComponent_div_4_ng_container_4_ng_template_2_Template_div_click_0_listener($event) { ɵɵrestoreView(_r15); const ctx_r14 = ɵɵnextContext(3); return ctx_r14._buttonCollapse_Click($event); });
    ɵɵnamespaceSVG();
    ɵɵelementStart(1, "svg", 14);
    ɵɵelementStart(2, "g", 15);
    ɵɵelement(3, "polyline", 17);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = ɵɵnextContext(3);
    ɵɵpropertyInterpolate("title", ctx_r11.options.buttonCollapseText);
} }
function MobileDrawerRightPanelComponent_div_4_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MobileDrawerRightPanelComponent_div_4_ng_container_4_ng_container_1_Template, 5, 1, "ng-container", 11);
    ɵɵtemplate(2, MobileDrawerRightPanelComponent_div_4_ng_container_4_ng_template_2_Template, 4, 1, "ng-template", null, 12, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r10 = ɵɵreference(3);
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r6.windowState == "collapsed")("ngIfElse", _r10);
} }
function MobileDrawerRightPanelComponent_div_4_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 19);
    ɵɵlistener("click", function MobileDrawerRightPanelComponent_div_4_ng_container_5_ng_container_1_Template_div_click_1_listener($event) { ɵɵrestoreView(_r20); const ctx_r19 = ɵɵnextContext(3); return ctx_r19._buttonMax_Click($event); });
    ɵɵnamespaceSVG();
    ɵɵelementStart(2, "svg", 14);
    ɵɵelementStart(3, "g", 15);
    ɵɵelement(4, "rect", 20);
    ɵɵelement(5, "line", 21);
    ɵɵelement(6, "line", 22);
    ɵɵelement(7, "line", 23);
    ɵɵelement(8, "line", 24);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r16 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("title", ctx_r16.options.buttonUnmaximizeText);
} }
function MobileDrawerRightPanelComponent_div_4_ng_container_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r22 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 19);
    ɵɵlistener("click", function MobileDrawerRightPanelComponent_div_4_ng_container_5_ng_template_2_Template_div_click_0_listener($event) { ɵɵrestoreView(_r22); const ctx_r21 = ɵɵnextContext(3); return ctx_r21._buttonMax_Click($event); });
    ɵɵnamespaceSVG();
    ɵɵelementStart(1, "svg", 14);
    ɵɵelementStart(2, "g", 15);
    ɵɵelement(3, "rect", 25);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r18 = ɵɵnextContext(3);
    ɵɵpropertyInterpolate("title", ctx_r18.options.buttonMaximizeText);
} }
function MobileDrawerRightPanelComponent_div_4_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MobileDrawerRightPanelComponent_div_4_ng_container_5_ng_container_1_Template, 9, 1, "ng-container", 11);
    ɵɵtemplate(2, MobileDrawerRightPanelComponent_div_4_ng_container_5_ng_template_2_Template, 4, 1, "ng-template", null, 18, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r17 = ɵɵreference(3);
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r7.windowState == "maximized")("ngIfElse", _r17);
} }
function MobileDrawerRightPanelComponent_div_4_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r24 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 26);
    ɵɵlistener("click", function MobileDrawerRightPanelComponent_div_4_ng_container_6_Template_div_click_1_listener($event) { ɵɵrestoreView(_r24); const ctx_r23 = ɵɵnextContext(2); return ctx_r23.closePanel($event); });
    ɵɵnamespaceSVG();
    ɵɵelementStart(2, "svg", 14);
    ɵɵelementStart(3, "g");
    ɵɵelement(4, "line", 27);
    ɵɵelement(5, "line", 28);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("title", ctx_r8.options.buttonCloseText);
} }
function MobileDrawerRightPanelComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r26 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 7, 8);
    ɵɵlistener("mousedown", function MobileDrawerRightPanelComponent_div_4_Template_div_mousedown_0_listener($event) { ɵɵrestoreView(_r26); const ctx_r25 = ɵɵnextContext(); return ctx_r25._titlebar_MouseDown($event); });
    ɵɵelementStart(2, "div", 9);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵtemplate(4, MobileDrawerRightPanelComponent_div_4_ng_container_4_Template, 4, 2, "ng-container", 10);
    ɵɵtemplate(5, MobileDrawerRightPanelComponent_div_4_ng_container_5_Template, 4, 2, "ng-container", 10);
    ɵɵtemplate(6, MobileDrawerRightPanelComponent_div_4_ng_container_6_Template, 6, 1, "ng-container", 10);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ctx_r2.options.title, "");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.options.buttonCollapse);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.options.buttonMaximize);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.options.buttonClose);
} }
function MobileDrawerRightPanelComponent_ng_template_6_Template(rf, ctx) { }
let MobileDrawerRightPanelComponent = class MobileDrawerRightPanelComponent extends BaseMobilePanelComponent {
    constructor(_render, cdr) {
        super(_render, cdr);
        this._render = _render;
        this.cdr = cdr;
        this._mobileShowMode = PanelInMobileShowMode.drawerRight;
    }
    ngOnDestroy() {
        this._sspanelOverlayClickHandler();
        super.ngOnDestroy();
    }
    setOptions(options) {
        options.buttonCollapse = false;
        options.buttonMaximize = false;
        super.setOptions(options);
    }
    _setMobilePosition() {
        let _width = "80%";
        if (this.widgetConfig.mobile && this.widgetConfig.mobile.position) {
            const obj = this.getWidthHeight();
            if (obj.width) {
                _width = obj.width;
            }
        }
        let _pos = new WidgetPosition(0, "auto", 0, 0, "100%", _width);
        this.widgetConfig.position = _pos;
        this._sspanelOverlayClickHandler = this.jsEventManager.addEventListener(this.sspanelOverlay.nativeElement, "click", (evt) => {
            if (evt.target === this.sspanelOverlay.nativeElement) {
                this.closePanel(evt);
            }
        });
    }
};
MobileDrawerRightPanelComponent.ɵfac = function MobileDrawerRightPanelComponent_Factory(t) { return new (t || MobileDrawerRightPanelComponent)(ɵɵdirectiveInject(Renderer2, 8), ɵɵdirectiveInject(ChangeDetectorRef, 8)); };
MobileDrawerRightPanelComponent.ɵcmp = ɵɵdefineComponent({ type: MobileDrawerRightPanelComponent, selectors: [["epsgis-mobile-drawer-right-panel"]], features: [ɵɵInheritDefinitionFeature], decls: 8, vars: 3, consts: [[1, "sspanel_overlay"], ["sspanel_overlay", ""], [1, "sspanel", 3, "id", "ngStyle"], ["sspanel", ""], ["class", "sspanel_titlebar sspanel_titlebar_draggable", 3, "mousedown", 4, "ngIf"], [1, "sspanel_content", 3, "click"], ["widget_content", ""], [1, "sspanel_titlebar", "sspanel_titlebar_draggable", 3, "mousedown"], ["sspanel_titlebar", ""], [1, "sspanel_titlebar_text"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["showCollapsedButton", ""], [1, "sspanel_titlebar_button", "sspanel_titlebar_button_collapse", 3, "title", "click"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 10 10", "height", "100%", "width", "100%"], ["fill", "none"], ["points", "1,3 9,3 5,8 1,3 9,3"], ["points", "1,7 9,7 5,2 1,7 9,7"], ["showMaximizeButton", ""], [1, "sspanel_titlebar_button", "sspanel_titlebar_button_maximize", 3, "title", "click"], ["x", "1", "y", "3", "height", "6", "width", "6"], ["y1", "3", "x1", "3", "y2", "1", "x2", "3"], ["y1", "1", "x1", "2.5", "y2", "1", "x2", "9.5"], ["y1", "1", "x1", "9", "y2", "7", "x2", "9"], ["y1", "7", "x1", "9.5", "y2", "7", "x2", "7"], ["x", "1", "y", "1", "height", "8", "width", "8"], [1, "sspanel_titlebar_button", "sspanel_titlebar_button_close", 3, "title", "click"], ["y2", "0", "x2", "10", "y1", "10", "x1", "0"], ["y2", "10", "x2", "10", "y1", "0", "x1", "0"]], template: function MobileDrawerRightPanelComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0, 1);
        ɵɵelementStart(2, "div", 2, 3);
        ɵɵtemplate(4, MobileDrawerRightPanelComponent_div_4_Template, 7, 4, "div", 4);
        ɵɵelementStart(5, "div", 5);
        ɵɵlistener("click", function MobileDrawerRightPanelComponent_Template_div_click_5_listener($event) { return ctx._contentClick($event); });
        ɵɵtemplate(6, MobileDrawerRightPanelComponent_ng_template_6_Template, 0, 0, "ng-template", null, 6, ɵɵtemplateRefExtractor);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵpropertyInterpolate("id", ctx.options.id);
        ɵɵproperty("ngStyle", ctx.position);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.options.showTitle);
    } }, directives: [NgStyle, NgIf], styles: [".sspanel[_ngcontent-%COMP%]{border:none}.sspanel_titlebar[_ngcontent-%COMP%]{background:linear-gradient(270deg,#5677fc,#50bfff)}.sspanel_titlebar_text[_ngcontent-%COMP%]{order:5;text-align:right}.sspanel_titlebar_button[_ngcontent-%COMP%]{order:1}.sspanel_titlebar_button_collapse[_ngcontent-%COMP%]{order:3}.sspanel_titlebar_button_maximize[_ngcontent-%COMP%]{order:2}.sspanel_titlebar[_ngcontent-%COMP%]{background:#3880ff;height:44px}.sspanel_titlebar_text[_ngcontent-%COMP%]{text-align:center}.sspanel_titlebar_button[_ngcontent-%COMP%]{display:none}"] });
MobileDrawerRightPanelComponent = __decorate([
    ComponentRegister({
        uri: 'epsgis-mobile-drawer-right-panel',
        path: "components/mobile/drawer-panel-right"
    })
], MobileDrawerRightPanelComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MobileDrawerRightPanelComponent, [{
        type: Component,
        args: [{
                selector: 'epsgis-mobile-drawer-right-panel',
                templateUrl: './drawer-panel-right.component.html',
                styleUrls: ['./drawer-panel-right.component.scss']
            }]
    }], function () { return [{ type: Renderer2, decorators: [{
                type: Optional
            }] }, { type: ChangeDetectorRef, decorators: [{
                type: Optional
            }] }]; }, null); })();

class SafeUrlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url, tag = "img") {
        if (tag == "img") {
            return this.sanitizer.bypassSecurityTrustUrl(url);
        }
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
SafeUrlPipe.ɵfac = function SafeUrlPipe_Factory(t) { return new (t || SafeUrlPipe)(ɵɵdirectiveInject(DomSanitizer)); };
SafeUrlPipe.ɵpipe = ɵɵdefinePipe({ name: "safeurl", type: SafeUrlPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(SafeUrlPipe, [{
        type: Pipe,
        args: [{
                name: 'safeurl'
            }]
    }], function () { return [{ type: DomSanitizer }]; }, null); })();

const _c0$8 = ["iframeContent"];
function IframePanelComponent_iframe_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "iframe", 17, 18);
    ɵɵpipe(2, "safeurl");
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("src", ɵɵpipeBind2(2, 1, ctx_r3.url, "iframe"), ɵɵsanitizeResourceUrl);
} }
function IframePanelComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0, null, 19);
    ɵɵtext(2);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r4.url, " ");
} }
const _c1$5 = function (a0) { return { "notitle": a0 }; };
let IframePanelComponent = class IframePanelComponent extends BasePanelComponent {
    constructor(_render, cdr) {
        super(_render, cdr);
        this._render = _render;
        this.cdr = cdr;
        this.url = "";
        this.isShowIframe = false;
    }
    ngOnInit() {
        super.ngOnInit();
        this.url = this.options.url;
        if (this.options.url) {
            this.isShowIframe = true;
        }
    }
    ngAfterViewInit() {
        this.startup();
        this.state = WidgetState.opened;
    }
};
IframePanelComponent.ɵfac = function IframePanelComponent_Factory(t) { return new (t || IframePanelComponent)(ɵɵdirectiveInject(Renderer2, 8), ɵɵdirectiveInject(ChangeDetectorRef, 8)); };
IframePanelComponent.ɵcmp = ɵɵdefineComponent({ type: IframePanelComponent, selectors: [["epsgis-iframe-panel"]], viewQuery: function IframePanelComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$8, 3);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.iframeEl = _t.first);
    } }, features: [ɵɵInheritDefinitionFeature], decls: 17, vars: 10, consts: [[1, "sspanel_overlay", 2, "display", "none"], ["sspanel_overlay", ""], [1, "sspanel", 3, "id", "ngClass", "ngStyle"], ["sspanel", ""], ["sspanel-titlebar", "", 1, "sspanel_titlebar", "sspanel_titlebar_draggable", 3, "hasIcon", "options", "windowState", "onClickSetting", "onClickClose"], ["sspanel_titlebar", ""], [1, "sspanel_content", 3, "click"], ["class", "iframe_content", 3, "src", 4, "ngIf"], [4, "ngIf"], [1, "sspanel_resizer", "sspanel_resizer_top", 3, "mousedown"], [1, "sspanel_resizer", "sspanel_resizer_bottom", 3, "mousedown"], [1, "sspanel_resizer", "sspanel_resizer_left", 3, "mousedown"], [1, "sspanel_resizer", "sspanel_resizer_right", 3, "mousedown"], [1, "sspanel_resizer", "sspanel_resizer_topleft", 3, "mousedown"], [1, "sspanel_resizer", "sspanel_resizer_topright", 3, "mousedown"], [1, "sspanel_resizer", "sspanel_resizer_bottomleft", 3, "mousedown"], [1, "sspanel_resizer", "sspanel_resizer_bottomright", 3, "mousedown"], [1, "iframe_content", 3, "src"], ["iframeContent", ""], ["content", ""]], template: function IframePanelComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "div", 0, 1);
        ɵɵelementStart(2, "div", 2, 3);
        ɵɵelementStart(4, "div", 4, 5);
        ɵɵlistener("onClickSetting", function IframePanelComponent_Template_div_onClickSetting_4_listener() { return ctx.openWidgetSetting(); })("onClickClose", function IframePanelComponent_Template_div_onClickClose_4_listener($event) { return ctx.closePanel($event); });
        ɵɵelementEnd();
        ɵɵelementStart(6, "div", 6);
        ɵɵlistener("click", function IframePanelComponent_Template_div_click_6_listener($event) { return ctx._contentClick($event); });
        ɵɵtemplate(7, IframePanelComponent_iframe_7_Template, 3, 4, "iframe", 7);
        ɵɵtemplate(8, IframePanelComponent_ng_container_8_Template, 3, 1, "ng-container", 8);
        ɵɵelementEnd();
        ɵɵelementStart(9, "div", 9);
        ɵɵlistener("mousedown", function IframePanelComponent_Template_div_mousedown_9_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "height", directionY: "top" }); });
        ɵɵelementEnd();
        ɵɵelementStart(10, "div", 10);
        ɵɵlistener("mousedown", function IframePanelComponent_Template_div_mousedown_10_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "height", directionY: "bottom" }); });
        ɵɵelementEnd();
        ɵɵelementStart(11, "div", 11);
        ɵɵlistener("mousedown", function IframePanelComponent_Template_div_mousedown_11_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "width", directionX: "left" }); });
        ɵɵelementEnd();
        ɵɵelementStart(12, "div", 12);
        ɵɵlistener("mousedown", function IframePanelComponent_Template_div_mousedown_12_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "width", directionX: "right" }); });
        ɵɵelementEnd();
        ɵɵelementStart(13, "div", 13);
        ɵɵlistener("mousedown", function IframePanelComponent_Template_div_mousedown_13_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "both", directionX: "left", directionY: "top" }); });
        ɵɵelementEnd();
        ɵɵelementStart(14, "div", 14);
        ɵɵlistener("mousedown", function IframePanelComponent_Template_div_mousedown_14_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "both", directionX: "right", directionY: "top" }); });
        ɵɵelementEnd();
        ɵɵelementStart(15, "div", 15);
        ɵɵlistener("mousedown", function IframePanelComponent_Template_div_mousedown_15_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "both", directionX: "left", directionY: "bottom" }); });
        ɵɵelementEnd();
        ɵɵelementStart(16, "div", 16);
        ɵɵlistener("mousedown", function IframePanelComponent_Template_div_mousedown_16_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "both", directionX: "right", directionY: "bottom" }); });
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵpropertyInterpolate("id", ctx.options.id);
        ɵɵproperty("ngClass", ɵɵpureFunction1(8, _c1$5, ctx.options.showTitle === false))("ngStyle", ctx.position);
        ɵɵadvance(2);
        ɵɵproperty("hasIcon", false)("options", ctx.options)("windowState", ctx.windowState);
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.isShowIframe);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.isShowIframe);
    } }, directives: [NgClass, NgStyle, PanelTitleBarComponent, NgIf], pipes: [SafeUrlPipe], styles: [".iframe_content[_ngcontent-%COMP%]{width:100%;height:100%;border:0}"] });
IframePanelComponent = __decorate([
    ComponentRegister({
        uri: 'epsgis-iframe-panel',
        path: "components/ex-panels/iframe-panel"
    })
], IframePanelComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(IframePanelComponent, [{
        type: Component,
        args: [{
                selector: 'epsgis-iframe-panel',
                templateUrl: './iframe-panel.component.html',
                styleUrls: ['./iframe-panel.component.scss'],
            }]
    }], function () { return [{ type: Renderer2, decorators: [{
                type: Optional
            }] }, { type: ChangeDetectorRef, decorators: [{
                type: Optional
            }] }]; }, { iframeEl: [{
            type: ViewChild,
            args: ["iframeContent", { static: true }]
        }] }); })();

class PipesModule {
}
PipesModule.ɵmod = ɵɵdefineNgModule({ type: PipesModule });
PipesModule.ɵinj = ɵɵdefineInjector({ factory: function PipesModule_Factory(t) { return new (t || PipesModule)(); }, imports: [[
            CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PipesModule, { declarations: [SafeUrlPipe], imports: [CommonModule], exports: [SafeUrlPipe] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(PipesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    SafeUrlPipe
                ],
                exports: [
                    SafeUrlPipe
                ]
            }]
    }], null, null); })();

class ResultfofComponent {
    constructor() { }
    ngOnInit() { }
}
ResultfofComponent.ɵfac = function ResultfofComponent_Factory(t) { return new (t || ResultfofComponent)(); };
ResultfofComponent.ɵcmp = ɵɵdefineComponent({ type: ResultfofComponent, selectors: [["epsgis-result-fof"]], decls: 2, vars: 0, consts: [["nzStatus", "404", "nzTitle", "404", "nzSubTitle", "\u62B1\u6B49\uFF0C\u60A8\u8BBF\u95EE\u7684\u9875\u9762\u4E0D\u5B58\u5728\u3002"], ["nz-result-extra", ""]], template: function ResultfofComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "nz-result", 0);
        ɵɵelement(1, "div", 1);
        ɵɵelementEnd();
    } }, directives: [NzResultComponent, NzResultExtraDirective], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ResultfofComponent, [{
        type: Component,
        args: [{
                selector: 'epsgis-result-fof',
                templateUrl: './resultfof.component.html',
                styleUrls: ['./resultfof.component.scss']
            }]
    }], function () { return []; }, null); })();

class ResultfooComponent {
    constructor() { }
    ngOnInit() { }
}
ResultfooComponent.ɵfac = function ResultfooComponent_Factory(t) { return new (t || ResultfooComponent)(); };
ResultfooComponent.ɵcmp = ɵɵdefineComponent({ type: ResultfooComponent, selectors: [["epsgis-result-foo"]], decls: 2, vars: 0, consts: [["nzStatus", "500", "nzTitle", "500", "nzSubTitle", "\u62B1\u6B49\uFF0C\u670D\u52A1\u5668\u4E0A\u6709\u9519\u8BEF."], ["nz-result-extra", ""]], template: function ResultfooComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "nz-result", 0);
        ɵɵelement(1, "div", 1);
        ɵɵelementEnd();
    } }, directives: [NzResultComponent, NzResultExtraDirective], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ResultfooComponent, [{
        type: Component,
        args: [{
                selector: 'epsgis-result-foo',
                templateUrl: './resultfoo.component.html',
                styleUrls: ['./resultfoo.component.scss']
            }]
    }], function () { return []; }, null); })();

class ResultfotComponent {
    constructor() { }
    ngOnInit() { }
}
ResultfotComponent.ɵfac = function ResultfotComponent_Factory(t) { return new (t || ResultfotComponent)(); };
ResultfotComponent.ɵcmp = ɵɵdefineComponent({ type: ResultfotComponent, selectors: [["epsgis-result-fot"]], decls: 2, vars: 0, consts: [["nzStatus", "403", "nzTitle", "403", "nzSubTitle", "\u62B1\u6B49\uFF0C\u60A8\u65E0\u6743\u8BBF\u95EE\u6B64\u9875\u9762\u3002"], ["nz-result-extra", ""]], template: function ResultfotComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "nz-result", 0);
        ɵɵelement(1, "div", 1);
        ɵɵelementEnd();
    } }, directives: [NzResultComponent, NzResultExtraDirective], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ResultfotComponent, [{
        type: Component,
        args: [{
                selector: 'epsgis-result-fot',
                templateUrl: './resultfot.component.html',
                styleUrls: ['./resultfot.component.scss']
            }]
    }], function () { return []; }, null); })();

class EpsGisSharedModule {
}
EpsGisSharedModule.ɵmod = ɵɵdefineNgModule({ type: EpsGisSharedModule });
EpsGisSharedModule.ɵinj = ɵɵdefineInjector({ factory: function EpsGisSharedModule_Factory(t) { return new (t || EpsGisSharedModule)(); }, imports: [[
            CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(EpsGisSharedModule, { declarations: [JsonEditorComponent], imports: [CommonModule], exports: [JsonEditorComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(EpsGisSharedModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    JsonEditorComponent
                ],
                entryComponents: [],
                exports: [JsonEditorComponent]
            }]
    }], null, null); })();

class IconArrowDownComponent {
}
IconArrowDownComponent.ɵfac = function IconArrowDownComponent_Factory(t) { return new (t || IconArrowDownComponent)(); };
IconArrowDownComponent.ɵcmp = ɵɵdefineComponent({ type: IconArrowDownComponent, selectors: [["epsgis-icon-arrow-down"]], decls: 2, vars: 0, consts: [["t", "1575033841131", "viewBox", "0 0 1024 1024", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "p-id", "16367", "width", "16", "height", "16", 1, "icon"], ["d", "M128.759037 245.033739l383.064442 383.064442 388.096039-388.097062 0.033769 0.070608c13.138228-12.709463 31.024597-20.528546 50.730405-20.528546 40.377616 0 73.114205 32.736589 73.114205 73.115228 0 19.705807-7.820106 37.591153-20.530592 50.730405l0.035816 0.034792-438.681134 438.685227-0.035816-0.035816c-13.280468 13.780865-31.915897 22.3838-52.585659 22.3838-0.071631 0-0.107447 0-0.178055 0-0.072655 0-0.10847 0-0.146333 0-20.669762 0-39.341007-8.601912-52.621475-22.3838l-0.035816 0.035816L20.336676 343.425653l0.179079-0.179079c-12.565177-13.139252-20.313651-30.951943-20.313651-50.587142 0-40.378639 32.736589-73.115228 73.114205-73.115228C95.485213 219.544205 115.334283 229.432413 128.759037 245.033739z", "p-id", "16368", "fill", "#bababa"]], template: function IconArrowDownComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵnamespaceSVG();
        ɵɵelementStart(0, "svg", 0);
        ɵɵelement(1, "path", 1);
        ɵɵelementEnd();
    } }, styles: [".expand[_ngcontent-%COMP%] {\n          -webkit-transform: rotate(180deg);\n          -moz-transform: rotate(180deg);\n          -o-transform: rotate(180deg);\n          -ms-transform: rotate(180deg);\n          transform: rotate(180deg);\n      }"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(IconArrowDownComponent, [{
        type: Component,
        args: [{
                selector: "epsgis-icon-arrow-down",
                template: `
    <svg t="1575033841131" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
      p-id="16367" width="16" height="16">
      <path
        d="M128.759037 245.033739l383.064442 383.064442 388.096039-388.097062 0.033769 0.070608c13.138228-12.709463 31.024597-20.528546 50.730405-20.528546 40.377616 0 73.114205 32.736589 73.114205 73.115228 0 19.705807-7.820106 37.591153-20.530592 50.730405l0.035816 0.034792-438.681134 438.685227-0.035816-0.035816c-13.280468 13.780865-31.915897 22.3838-52.585659 22.3838-0.071631 0-0.107447 0-0.178055 0-0.072655 0-0.10847 0-0.146333 0-20.669762 0-39.341007-8.601912-52.621475-22.3838l-0.035816 0.035816L20.336676 343.425653l0.179079-0.179079c-12.565177-13.139252-20.313651-30.951943-20.313651-50.587142 0-40.378639 32.736589-73.115228 73.114205-73.115228C95.485213 219.544205 115.334283 229.432413 128.759037 245.033739z"
        p-id="16368" fill="#bababa"></path>
    </svg>
    `,
                styles: [
                    `
      .expand {
          -webkit-transform: rotate(180deg);
          -moz-transform: rotate(180deg);
          -o-transform: rotate(180deg);
          -ms-transform: rotate(180deg);
          transform: rotate(180deg);
      }
      `
                ]
            }]
    }], null, null); })();

class IconArrowLeftComponent {
}
IconArrowLeftComponent.ɵfac = function IconArrowLeftComponent_Factory(t) { return new (t || IconArrowLeftComponent)(); };
IconArrowLeftComponent.ɵcmp = ɵɵdefineComponent({ type: IconArrowLeftComponent, selectors: [["epsgis-icon-arrow-left"]], decls: 2, vars: 0, consts: [["viewBox", "0 0 1024 1024", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16"], ["d", "M778.965749 128.759549l-383.064442 383.063419 388.097062 388.096039-0.070608 0.033769c12.709463 13.137205 20.529569 31.024597 20.529569 50.731428 0 40.376593-32.736589 73.112158-73.115228 73.112158-19.705807 0-37.591153-7.819083-50.730405-20.528546l-0.034792 0.035816L241.890654 564.622498l0.035816-0.035816c-13.779841-13.281491-22.3838-31.915897-22.3838-52.585659 0-0.071631 0-0.106424 0-0.178055 0-0.072655 0-0.10847 0-0.144286 0-20.669762 8.603959-39.341007 22.3838-52.622498l-0.035816-0.034792L680.573835 20.337187l0.180102 0.179079c13.139252-12.5662 30.950919-20.313651 50.587142-20.313651 40.378639 0 73.115228 32.736589 73.115228 73.114205C804.455283 95.485725 794.567076 115.334795 778.965749 128.759549z"]], template: function IconArrowLeftComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵnamespaceSVG();
        ɵɵelementStart(0, "svg", 0);
        ɵɵelement(1, "path", 1);
        ɵɵelementEnd();
    } }, styles: [".expand[_ngcontent-%COMP%]{\n            -webkit-transform: rotate(180deg);\n            -moz-transform: rotate(180deg);\n            -o-transform: rotate(180deg);\n            -ms-transform: rotate(180deg);\n            transform: rotate(180deg);\n        }"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(IconArrowLeftComponent, [{
        type: Component,
        args: [{
                selector: "epsgis-icon-arrow-left",
                template: `
    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
      width="16" height="16">
      <path
        d="M778.965749 128.759549l-383.064442 383.063419 388.097062 388.096039-0.070608 0.033769c12.709463 13.137205 20.529569 31.024597 20.529569 50.731428 0 40.376593-32.736589 73.112158-73.115228 73.112158-19.705807 0-37.591153-7.819083-50.730405-20.528546l-0.034792 0.035816L241.890654 564.622498l0.035816-0.035816c-13.779841-13.281491-22.3838-31.915897-22.3838-52.585659 0-0.071631 0-0.106424 0-0.178055 0-0.072655 0-0.10847 0-0.144286 0-20.669762 8.603959-39.341007 22.3838-52.622498l-0.035816-0.034792L680.573835 20.337187l0.180102 0.179079c13.139252-12.5662 30.950919-20.313651 50.587142-20.313651 40.378639 0 73.115228 32.736589 73.115228 73.114205C804.455283 95.485725 794.567076 115.334795 778.965749 128.759549z"
        ></path>
    </svg>
    `,
                styles: [
                    `

        .expand{
            -webkit-transform: rotate(180deg);
            -moz-transform: rotate(180deg);
            -o-transform: rotate(180deg);
            -ms-transform: rotate(180deg);
            transform: rotate(180deg);
        }
        `
                ]
            }]
    }], null, null); })();

class IconArrowRightComponent {
}
IconArrowRightComponent.ɵfac = function IconArrowRightComponent_Factory(t) { return new (t || IconArrowRightComponent)(); };
IconArrowRightComponent.ɵcmp = ɵɵdefineComponent({ type: IconArrowRightComponent, selectors: [["epsgis-icon-arrow-right"]], decls: 2, vars: 0, consts: [["viewBox", "0 0 1024 1024", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16"], ["d", "M245.034251 895.239428l383.063419-383.063419L240.001631 124.07997l0.070608-0.033769c-12.709463-13.137205-20.530592-31.024597-20.530592-50.731428 0-40.376593 32.736589-73.111135 73.115228-73.111135 19.705807 0 37.591153 7.819083 50.730405 20.528546l0.034792-0.035816 438.686251 438.681134-0.035816 0.034792c13.779841 13.281491 22.3838 31.915897 22.3838 52.586682 0 0.071631 0 0.106424 0 0.178055 0 0.072655 0 0.10847 0 0.144286 0 20.669762-8.603959 39.341007-22.3838 52.623521l0.035816 0.033769L343.426165 1003.661789l-0.180102-0.179079c-13.140275 12.565177-30.950919 20.313651-50.588165 20.313651-40.378639 0-73.115228-32.736589-73.115228-73.114205C219.544717 928.512229 229.432924 908.664182 245.034251 895.239428z", "fill", "#bababa"]], template: function IconArrowRightComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵnamespaceSVG();
        ɵɵelementStart(0, "svg", 0);
        ɵɵelement(1, "path", 1);
        ɵɵelementEnd();
    } }, styles: [".expand[_ngcontent-%COMP%]{\n            -webkit-transform: rotate(180deg);\n            -moz-transform: rotate(180deg);\n            -o-transform: rotate(180deg);\n            -ms-transform: rotate(180deg);\n            transform: rotate(180deg);\n        }"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(IconArrowRightComponent, [{
        type: Component,
        args: [{
                selector: "epsgis-icon-arrow-right",
                template: `
    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
      width="16" height="16">
      <path
        d="M245.034251 895.239428l383.063419-383.063419L240.001631 124.07997l0.070608-0.033769c-12.709463-13.137205-20.530592-31.024597-20.530592-50.731428 0-40.376593 32.736589-73.111135 73.115228-73.111135 19.705807 0 37.591153 7.819083 50.730405 20.528546l0.034792-0.035816 438.686251 438.681134-0.035816 0.034792c13.779841 13.281491 22.3838 31.915897 22.3838 52.586682 0 0.071631 0 0.106424 0 0.178055 0 0.072655 0 0.10847 0 0.144286 0 20.669762-8.603959 39.341007-22.3838 52.623521l0.035816 0.033769L343.426165 1003.661789l-0.180102-0.179079c-13.140275 12.565177-30.950919 20.313651-50.588165 20.313651-40.378639 0-73.115228-32.736589-73.115228-73.114205C219.544717 928.512229 229.432924 908.664182 245.034251 895.239428z"
        fill="#bababa"></path>
    </svg>
    `,
                styles: [
                    `
        .expand{
            -webkit-transform: rotate(180deg);
            -moz-transform: rotate(180deg);
            -o-transform: rotate(180deg);
            -ms-transform: rotate(180deg);
            transform: rotate(180deg);
        }
        `
                ]
            }]
    }], null, null); })();

const _components = [
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
class EpsGisIconModule {
}
EpsGisIconModule.ɵmod = ɵɵdefineNgModule({ type: EpsGisIconModule });
EpsGisIconModule.ɵinj = ɵɵdefineInjector({ factory: function EpsGisIconModule_Factory(t) { return new (t || EpsGisIconModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(EpsGisIconModule, { declarations: [IconCloseComponent,
        IconCollapsedComponent,
        IconUnCollapsedComponent,
        IconMaximizeComponent,
        IconUnMaximizeComponent,
        IconSettingComponent,
        IconArrowLeftComponent,
        IconArrowRightComponent,
        IconArrowDownComponent], imports: [CommonModule], exports: [IconCloseComponent,
        IconCollapsedComponent,
        IconUnCollapsedComponent,
        IconMaximizeComponent,
        IconUnMaximizeComponent,
        IconSettingComponent,
        IconArrowLeftComponent,
        IconArrowRightComponent,
        IconArrowDownComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(EpsGisIconModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: _components,
                exports: _components
            }]
    }], null, null); })();

class EpsGisWidgetBaseModule {
}
EpsGisWidgetBaseModule.ɵmod = ɵɵdefineNgModule({ type: EpsGisWidgetBaseModule });
EpsGisWidgetBaseModule.ɵinj = ɵɵdefineInjector({ factory: function EpsGisWidgetBaseModule_Factory(t) { return new (t || EpsGisWidgetBaseModule)(); }, providers: [], imports: [[
            CommonModule,
            FormsModule,
            NzIconModule,
            NzResultModule,
            EpsGisDirectivesModule,
            PipesModule,
            EpsGisSharedModule,
            EpsGisIconModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(EpsGisWidgetBaseModule, { declarations: [OnScreenWidgetIconComponent,
        OnScreenWidgetPanelComponent,
        DockablePanelAtLeftComponent,
        DockablePanelAtBottomComponent,
        DockablePanelAtRightComponent,
        IframePanelComponent,
        MobileActionPanelComponent,
        MobileDrawerPanelComponent,
        MobileModalPanelComponent,
        MobilePopupPanelComponent,
        MobileDrawerRightPanelComponent,
        ResultfofComponent,
        ResultfooComponent,
        ResultfotComponent,
        WidgetSettingComponent,
        PanelTitleBarComponent], imports: [CommonModule,
        FormsModule,
        NzIconModule,
        NzResultModule,
        EpsGisDirectivesModule,
        PipesModule,
        EpsGisSharedModule,
        EpsGisIconModule], exports: [PanelTitleBarComponent,
        ResultfofComponent,
        ResultfooComponent,
        ResultfotComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(EpsGisWidgetBaseModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    NzIconModule,
                    NzResultModule,
                    EpsGisDirectivesModule,
                    PipesModule,
                    EpsGisSharedModule,
                    EpsGisIconModule
                ],
                declarations: [
                    OnScreenWidgetIconComponent,
                    OnScreenWidgetPanelComponent,
                    DockablePanelAtLeftComponent,
                    DockablePanelAtBottomComponent,
                    DockablePanelAtRightComponent,
                    IframePanelComponent,
                    MobileActionPanelComponent,
                    MobileDrawerPanelComponent,
                    MobileModalPanelComponent,
                    MobilePopupPanelComponent,
                    MobileDrawerRightPanelComponent,
                    ResultfofComponent,
                    ResultfooComponent,
                    ResultfotComponent,
                    WidgetSettingComponent,
                    PanelTitleBarComponent
                ],
                entryComponents: [
                    OnScreenWidgetIconComponent,
                    OnScreenWidgetPanelComponent,
                    DockablePanelAtLeftComponent,
                    DockablePanelAtBottomComponent,
                    DockablePanelAtRightComponent,
                    IframePanelComponent,
                    MobileActionPanelComponent,
                    MobileDrawerPanelComponent,
                    MobileModalPanelComponent,
                    MobilePopupPanelComponent,
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
    }], null, null); })();

class SharedUtilsService {
    constructor() {
        this.widgetProperties = ['inPanel', 'hasLocale', 'hasStyle', 'hasConfig', 'hasUIFile',
            'hasSettingPage', 'hasSettingUIFile', 'hasSettingLocale', 'hasSettingStyle',
            'keepConfigAfterMapSwithched', 'isController', 'hasVersionManager', 'isThemeWidget',
            'supportMultiInstance'
        ];
    }
    isHostedService() {
        return false;
    }
    processWidgetProperties(manifest) {
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
    }
    processWidgetUriPara(widget) {
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
    }
    getConfigElementById(appConfig, id) {
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
    }
    visitElement(appConfig, cb) {
        this.visitBigSection(appConfig, 'widgetOnScreen', cb);
        this.visitBigSection(appConfig, 'widgetPool', cb);
    }
    visitBigSection(appConfig, section, cb) {
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
                    group = extend(group, tempobject);
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
                        widget = extend(widget, tempobject);
                        Object.assign;
                        this.processWidgetUriPara(widget);
                        cb(widget, tempobject);
                    }
                }
            }
            if (appConfig[section].widgets) {
                let visitHeaderMenu = (widget, cb) => {
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
                            item = extend(item, tempobject);
                            this.processWidgetUriPara(item);
                            cb(item, tempobject);
                            visitHeaderMenu(item, cb);
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
                    widget = extend(widget, tempobject);
                    this.processWidgetUriPara(widget);
                    cb(widget, tempobject);
                    visitHeaderMenu(widget, cb);
                }
            }
        }
    }
    getConfigElementByLabel(appConfig, label) {
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
    }
    getConfigElementsByName(appConfig, name) {
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
    }
    getConfigElementsByUri(appConfig, uri) {
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
    }
    getWidgetNameFromUri(uri) {
        var segs = uri.split('/');
        segs.pop();
        return segs.pop();
    }
    getAmdFolderFromUri(uri) {
        var segs = uri.split('/');
        segs.pop();
        return segs.join('/') + '/';
    }
}
SharedUtilsService.ɵfac = function SharedUtilsService_Factory(t) { return new (t || SharedUtilsService)(); };
SharedUtilsService.ɵprov = ɵɵdefineInjectable({ token: SharedUtilsService, factory: SharedUtilsService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(SharedUtilsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

const getPlatforms = (win) => setupPlatforms(win);
const isPlatform = (winOrPlatform, platform) => {
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
const setupPlatforms = (win = window) => {
    win.Ionic = win.Ionic || {};
    let platforms = win.Ionic.platforms;
    if (platforms == null) {
        platforms = win.Ionic.platforms = detectPlatforms(win);
        platforms.forEach(p => win.document.documentElement.classList.add(`plt-${p}`));
    }
    return platforms;
};
const detectPlatforms = (win) => Object.keys(PLATFORMS_MAP).filter(p => PLATFORMS_MAP[p](win));
const isMobileWeb = (win) => isMobile(win) && !isHybrid(win);
const isIpad = (win) => {
    if (testUserAgent(win, /iPad/i)) {
        return true;
    }
    if (testUserAgent(win, /Macintosh/i) && isMobile(win)) {
        return true;
    }
    return false;
};
const isIphone = (win) => testUserAgent(win, /iPhone/i);
const isIOS = (win) => testUserAgent(win, /iPhone|iPod/i) || isIpad(win);
const isAndroid = (win) => testUserAgent(win, /android|sink/i);
const isAndroidTablet = (win) => {
    return isAndroid(win) && !testUserAgent(win, /mobile/i);
};
const isPhablet = (win) => {
    const width = win.innerWidth;
    const height = win.innerHeight;
    const smallest = Math.min(width, height);
    const largest = Math.max(width, height);
    return (smallest > 390 && smallest < 520) &&
        (largest > 620 && largest < 800);
};
const isTablet = (win) => {
    const width = win.innerWidth;
    const height = win.innerHeight;
    const smallest = Math.min(width, height);
    const largest = Math.max(width, height);
    return (isIpad(win) ||
        isAndroidTablet(win) ||
        ((smallest > 460 && smallest < 820) &&
            (largest > 780 && largest < 1400)));
};
const isMobile = (win) => {
    let isTouchScreen = !!navigator.userAgent.match(/AppleWebkit.*Mobile.*/) || "ontouchstart" in win ||
        (matchMedia(win, '(pointer:coarse)') || !!matchMedia(win, "-moz-touch-enabled"));
    return isTouchScreen;
};
const isDesktop = (win) => !isMobile(win);
const isHybrid = (win) => isCordova(win) || isCapacitorNative(win);
const isCordova = (win) => !!(win['cordova'] || win['phonegap'] || win['PhoneGap']);
const isCapacitorNative = (win) => {
    const capacitor = win['Capacitor'];
    return !!(capacitor && capacitor.isNative);
};
const isElectron = (win) => testUserAgent(win, /electron/i);
const isPWA = (win) => !!(win.matchMedia('(display-mode: standalone)').matches || win.navigator.standalone);
const testUserAgent = (win, expr) => expr.test(win.navigator.userAgent);
const matchMedia = (win, query) => win.matchMedia(query).matches;
const PLATFORMS_MAP = {
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

class UtilsService extends SharedUtilsService {
    constructor(globalParams) {
        super();
        this.globalParams = globalParams;
    }
    getUriInfo(uri) {
        if (!uri || uri.indexOf(this.globalParams.appInfo.folderUrlPrefix) >= 0)
            return {};
        let pos, firstSeg, info = {}, amdFolder;
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
    }
    processWidgetSetting(setting) {
        if (!setting.uri) {
            return setting;
        }
        extend(setting, this.getUriInfo(setting.uri));
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
    }
    addManifest2WidgetJson(widgetJson, manifest) {
        extend(widgetJson, manifest.properties);
        widgetJson.name = manifest.name;
        if (!widgetJson.label) {
            widgetJson.label = manifest.label;
        }
        widgetJson.manifest = manifest;
    }
    addManifestProperies(manifest) {
        if (manifest.url) {
            manifest.icon = manifest.url + 'images/icon.png';
        }
        if (manifest.category === "theme") {
            this.addThemeManifestProperies(manifest);
        }
        else {
            this.addWidgetManifestProperties(manifest);
        }
    }
    addThemeManifestProperies(manifest) {
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
    }
    addWidgetManifestProperties(manifest) {
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
        super.processWidgetProperties(manifest);
    }
    processManifestLabel(manifest, locale) {
        manifest.label = manifest.i18nLabels && (manifest.i18nLabels[locale] ||
            manifest.i18nLabels.defaultLabel) ||
            manifest.label ||
            manifest.name;
        if (manifest.layouts) {
            forEach(manifest.layouts, (layout) => {
                let key = 'i18nLabels_layout_' + layout.name;
                layout.label = manifest[key] && (manifest[key][locale] ||
                    manifest[key].defaultLabel) ||
                    layout.label ||
                    layout.name;
            });
        }
        if (manifest.styles) {
            forEach(manifest.styles, (_style) => {
                let key = 'i18nLabels_style_' + _style.name;
                _style.label = manifest[key] && (manifest[key][locale] ||
                    manifest[key].defaultLabel) ||
                    _style.label ||
                    _style.name;
            });
        }
    }
    replacePlaceHolder(obj, props) {
        let str = JSON.stringify(obj), m = str.match(/\$\{(\w)+\}/g), i;
        if (m === null) {
            return obj;
        }
        for (i = 0; i < m.length; i++) {
            let p = m[i].match(/(\w)+/g)[0];
            if (props[p]) {
                str = str.replace(m[i], props[p]);
            }
        }
        return JSON.parse(str);
    }
    addI18NLabel(manifest) {
        return new Promise((resolve, reject) => {
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
    }
    processUrlInAppConfig(url) {
        if (!url) {
            return;
        }
        if (url.startWith('data:') || url.startWith('http') || url.startWith('/')) {
            return url;
        }
        else {
            return this.globalParams.appInfo.appPath + url;
        }
    }
    isEqual(o1, o2) {
        let leftChain, rightChain;
        function compare2Objects(x, y) {
            let p;
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
    }
    deleteMapOptions(mapOptions) {
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
    }
    reCreateObject(obj) {
        let ret;
        function copyArray(_array) {
            let retArray = [];
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
            let ret = {};
            for (let p in _obj) {
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
    }
    getPositionStyle(_position) {
        let style = {};
        if (!_position) {
            return style;
        }
        let position = clone(_position);
        if (false) {
            let temp;
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
        let ps = ['left', 'top', 'right', 'bottom', 'width', 'height',
            'padding', 'paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom'
        ];
        for (let i = 0; i < ps.length; i++) {
            let p = ps[i];
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
    }
    static detectChanges(cdr) {
        if (cdr && cdr["destroyed"] === false) {
            cdr.detectChanges();
        }
    }
}
UtilsService.ɵfac = function UtilsService_Factory(t) { return new (t || UtilsService)(ɵɵinject(AppGlobalConfig)); };
UtilsService.ɵprov = ɵɵdefineInjectable({ token: UtilsService, factory: UtilsService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(UtilsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: AppGlobalConfig }]; }, null); })();

class PlatformService {
    constructor(doc, zone) {
        this.doc = doc;
        this.backButton = new Subject();
        this.pause = new Subject();
        this.resume = new Subject();
        this.resize = new Subject();
        zone.run(() => {
            this.win = doc.defaultView;
            this.backButton.subscribeWithPriority = function (priority, callback) {
                return this.subscribe(ev => (ev.register(priority, () => zone.run(callback))));
            };
            proxyEvent(this.pause, doc, 'pause');
            proxyEvent(this.resume, doc, 'resume');
            proxyEvent(this.backButton, doc, 'ionBackButton');
            proxyEvent(this.resize, this.win, 'resize');
            let readyResolve;
            this._readyPromise = new Promise(res => { readyResolve = res; });
            if (this.win && this.win['cordova']) {
                doc.addEventListener('deviceready', () => {
                    readyResolve('cordova');
                }, { once: true });
            }
            else {
                readyResolve('dom');
            }
        });
    }
    is(platformName) {
        return isPlatform(this.win, platformName);
    }
    platforms() {
        return getPlatforms(this.win);
    }
    ready() {
        return this._readyPromise;
    }
    get isRTL() {
        return this.doc.dir === 'rtl';
    }
    getQueryParam(key) {
        return readQueryParam(this.win.location.href, key);
    }
    isLandscape() {
        return !this.isPortrait();
    }
    isPortrait() {
        return this.win.matchMedia && this.win.matchMedia('(orientation: portrait)').matches;
    }
    testUserAgent(expression) {
        const nav = this.win.navigator;
        return !!(nav && nav.userAgent && nav.userAgent.indexOf(expression) >= 0);
    }
    url() {
        return this.win.location.href;
    }
    width() {
        return this.win.innerWidth;
    }
    height() {
        return this.win.innerHeight;
    }
}
PlatformService.ɵfac = function PlatformService_Factory(t) { return new (t || PlatformService)(ɵɵinject(DOCUMENT), ɵɵinject(NgZone)); };
PlatformService.ɵprov = ɵɵdefineInjectable({ token: PlatformService, factory: PlatformService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(PlatformService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: NgZone }]; }, null); })();
const readQueryParam = (url, key) => {
    key = key.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + key + '=([^&#]*)');
    const results = regex.exec(url);
    return results ? decodeURIComponent(results[1].replace(/\+/g, ' ')) : null;
};
const proxyEvent = (emitter, el, eventName) => {
    if (el) {
        el.addEventListener(eventName, (ev) => {
            emitter.next(ev != null ? ev.detail : undefined);
        });
    }
};

class CommonService {
    constructor(utils, platform) {
        this.utils = utils;
        this.platform = platform;
    }
    createPromiseDefer() {
        let resolve, reject;
        const promise = new Promise(function () {
            resolve = arguments[0];
            reject = arguments[1];
        });
        return {
            resolve: resolve,
            reject: reject,
            promise: () => promise
        };
    }
    getComponentRootNode(componentRef) {
        if (!componentRef) {
            console.log('componentRef undefined');
            return null;
        }
        return componentRef.hostView.rootNodes[0];
    }
    getElementBounds(ele) {
        if (!ele)
            return null;
        const rect = ele.getBoundingClientRect();
        const top = document.documentElement.clientTop;
        const left = document.documentElement.clientLeft;
        return {
            top: rect.top - top,
            left: rect.left - left,
            bottom: rect.bottom - top,
            right: rect.right - left,
            width: rect.width,
            height: rect.height
        };
    }
    getPx(px) {
        if (!px)
            return "0px";
        if (typeof px === "string" && px.indexOf("px") >= 0) {
            return px;
        }
        if (px.toString().indexOf("%") >= 0 || px === "auto")
            return px;
        if (typeof px === "number")
            return px + "px";
        let _temp = parseFloat(px);
        if (isNaN(_temp)) {
            return "0px";
        }
        return _temp + "px";
    }
    getPxNumber(px) {
        if (!px)
            return 0;
        if (typeof px === "string" && px.indexOf("px") >= 0) {
            return parseInt(px, 10);
        }
        if (px.toString().indexOf("%") >= 0 || px === "auto")
            return px;
        if (typeof px === "number")
            return px;
        let _temp = parseFloat(px.toString());
        if (isNaN(_temp)) {
            return 0;
        }
        return _temp;
    }
    getPosition(positionConfig) {
        let _position = new WidgetPosition();
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
    }
    setWidgetPosition(compRef, widgetPosition) {
        let ele = this.getComponentRootNode(compRef);
        let css = this.utils.getPositionStyle(widgetPosition);
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
    }
    is(platformName) {
        return isPlatform(this.win, platformName);
    }
    getPlatformName() {
        if (this.isAndroid())
            return 'android';
        if (this.isIos())
            return 'ios';
        if (!this.isMobile())
            return 'browser';
        return 'unknown';
    }
    isMobileNotTablet() {
        return this.isMobile()
            && this.platform.is("ipad") == false
            && this.platform.is("phablet") == false
            && this.platform.is("tablet") == false;
    }
    isMobile() {
        return this.platform.is("mobile") || this.platform.is("mobileweb");
    }
    isMobileRealMachine() {
        return this.platform.is('mobile') && !this.platform.is('mobileweb');
    }
    isAndroid() {
        return this.isMobileRealMachine() && this.platform.is('android');
    }
    isIos() {
        return this.isMobileRealMachine() && (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone'));
    }
}
CommonService.ɵfac = function CommonService_Factory(t) { return new (t || CommonService)(ɵɵinject(UtilsService), ɵɵinject(PlatformService)); };
CommonService.ɵprov = ɵɵdefineInjectable({ token: CommonService, factory: CommonService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CommonService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: UtilsService }, { type: PlatformService }]; }, null); })();

class ComponentLoaderService {
    constructor(componentFactoryResolver) {
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
    createComponent(component, params, container) {
        let inputs = {};
        if (params) {
            inputs = params;
        }
        let inputProviders = Object.keys(inputs).map((inputName) => {
            return { provide: inputName, useValue: inputs[inputName] };
        });
        const injector = Injector.create({ providers: inputProviders, parent: container === null || container === void 0 ? void 0 : container.parentInjector });
        const factory = this.componentFactoryResolver.resolveComponentFactory(component);
        const compRef = factory.create(injector);
        if (typeof compRef.instance.setServiceInjector === "function") {
            compRef.instance.setServiceInjector(this.serviceInjector);
        }
        return compRef;
    }
    getComponentPath(name) {
        const compInfo = findComponentInfo(name);
        if (compInfo) {
            return compInfo.path || compInfo.uri;
        }
        const comp = this.findComponent(name);
        if (comp) {
            return (typeof comp.getCompInfo === "function") ? comp.getCompInfo().path : "";
        }
        return "";
    }
    findComponent(name) {
        let comp = null;
        if (this.factories) {
            if (!this.factories || this.factories.size <= 0)
                return null;
            let item = this.factoriesArray.find((value, index, arr) => {
                return value[1].selector.toLowerCase() === name.toLowerCase();
            });
            if (item) {
                comp = item[0];
            }
        }
        else {
            const compInfo = findComponentInfo(name);
            if (compInfo) {
                return compInfo.component;
            }
        }
        return comp;
    }
    getServiceInjector() {
        return this.serviceInjector;
    }
    setServiceInjector(serviceInjector) {
        this.serviceInjector = serviceInjector;
    }
    setViewContainerInHome(container) {
        this.viewContainerInHome = container;
    }
    createComponentToHome(component, params) {
        return this.createComponent(component, params, this.viewContainerInHome);
    }
    showInHome(compRef) {
        if (!compRef) {
            return;
        }
        if (!this.viewContainerInHome) {
            console.error("未设置容器，无法显示组件");
            return;
        }
        this.viewContainerInHome.insert(compRef.hostView);
    }
    setViewContainerInMap(container) {
        this.viewContainerInMap = container;
    }
    createComponentToMap(component, params) {
        return this.createComponent(component, params, this.viewContainerInMap);
    }
    showInMap(compRef) {
        if (!compRef) {
            return;
        }
        if (!this.viewContainerInMap) {
            console.error("未设置容器，无法显示组件");
            return;
        }
        this.viewContainerInMap.insert(compRef.hostView);
    }
    ngOnDestroy() {
        if (this.viewContainerInHome) {
            this.viewContainerInHome.clear();
        }
        if (this.viewContainerInMap) {
            this.viewContainerInMap.clear();
        }
    }
}
ComponentLoaderService.ɵfac = function ComponentLoaderService_Factory(t) { return new (t || ComponentLoaderService)(ɵɵinject(ComponentFactoryResolver)); };
ComponentLoaderService.ɵprov = ɵɵdefineInjectable({ token: ComponentLoaderService, factory: ComponentLoaderService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ComponentLoaderService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ComponentFactoryResolver }]; }, null); })();

class BaseWidgetFrame {
}

class BaseWidgetPanel {
}

class BaseWidgetSetting {
}

class OnScreenWidgetPanel {
}

class WidgetPlaceholder {
    constructor(options) {
        this.index = 0;
        this.configId = "";
        this.id = "dijit__WidgetBase_" + this.index;
        this.class = 'jimu-widget-placeholder';
        this.params = null;
        this.params = options;
    }
    postCreate() {
    }
    moveTo(position) {
    }
    setIndex(index) {
    }
}

class EventEmitterService {
    constructor() {
        this.rss = new EventEmitter$1();
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
    removeListener(event, listener) {
        if (typeof listener === "function") {
            return this.rss.removeListener(event, listener);
        }
        return this.rss;
    }
}
EventEmitterService.ɵfac = function EventEmitterService_Factory(t) { return new (t || EventEmitterService)(); };
EventEmitterService.ɵprov = ɵɵdefineInjectable({ token: EventEmitterService, factory: EventEmitterService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(EventEmitterService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class HttpReqService {
    constructor(httpClient, config) {
        this.httpClient = httpClient;
        this.config = config;
        this.ServiceUrl = '';
        this.headers = new HttpHeaders().set("Content-type", "application/json; charset=UTF-8");
        this._tokenKey = "__token";
        this._tokenValue = "";
        this.ServiceUrl = config.apiRootUrl;
    }
    getLocalToken() {
        if (window.sessionStorage) {
            let str = sessionStorage.getItem(this._tokenKey);
            if (str != "") {
                return JSON.parse(str);
            }
        }
        else {
            console.log("浏览器不支持sessionStorage");
        }
        return null;
    }
    getTokenKey() {
        return this._tokenKey;
    }
    setAccessToken(token) {
        this._tokenValue = token;
    }
    getAccessToken() {
        let token = "";
        if (this._tokenValue) {
            token = this._tokenValue;
        }
        else {
            let m = this.getLocalToken();
            if (m) {
                this.setAccessToken(m.access_token);
                token = m.access_token;
            }
        }
        return token;
    }
    getAuthHeaders() {
        return this.headers.set("Authorization", `Bearer ${this.getAccessToken()}`);
    }
    getJsonFile(configFilePath) {
        return this.httpClient.get(configFilePath, { responseType: 'json' }).toPromise();
    }
    _toHttpParams(paras) {
        if (!paras)
            return null;
        let obj = {};
        paras.forEach(x => {
            obj[x.name] = x.value;
        });
        return new HttpParams({ fromObject: obj });
    }
    _toParaString(para) {
        if (!para || para.length <= 0)
            return '';
        let str = '';
        para.forEach(s => {
            str += `&${s.name}=${s.value}`;
        });
        return str.substring(1);
    }
    _toHttpParams2(para) {
        let _httpParams = null;
        if (typeof para === "string") {
            _httpParams = new HttpParams({ fromString: para });
        }
        else {
            _httpParams = new HttpParams({ fromObject: para });
        }
        return _httpParams;
    }
    _toParaString2(para) {
        if (!para)
            return '';
        if (typeof para === "string") {
            if (para.startsWith("&") || para.startsWith("?")) {
                return para.substring(1);
            }
            return para;
        }
        else {
            let str = '';
            for (const key in para) {
                if (para.hasOwnProperty(key)) {
                    str += `&${key}=${para[key]}`;
                }
            }
            return str.substring(1);
        }
    }
    getNoAuthGeneric(apiName, para, serviceUrl) {
        let url = this.ServiceUrl;
        if (serviceUrl)
            url = serviceUrl;
        return this.httpClient.get(`${url}/${apiName}`, {
            headers: this.headers,
            params: this._toHttpParams2(para)
        }).toPromise();
    }
    getNoAuth(apiName, para, serviceUrl) {
        return this.getNoAuthGeneric(apiName, para, serviceUrl);
    }
    getGeneric(apiName, para, serviceUrl) {
        let url = this.ServiceUrl;
        if (serviceUrl)
            url = serviceUrl;
        return this.httpClient.get(`${url}/${apiName}`, {
            headers: this.getAuthHeaders(),
            params: this._toHttpParams2(para)
        }).toPromise();
    }
    get(apiName, para, serviceUrl) {
        return this.getGeneric(apiName, para, serviceUrl);
    }
    getPage(apiName, pageIndex, pageSize, orderBy, direction, para, serviceUrl) {
        if (pageIndex <= 0) {
            pageIndex = 1;
        }
        if (pageSize <= 0) {
            pageSize = 20;
        }
        let pager = {
            page: pageIndex.toString(),
            size: pageSize.toString(),
            orderby: orderBy ? orderBy : "",
            direction: direction === OrderByType.desc ? "1" : "0"
        };
        let paraString = this._toParaString2(pager);
        if (para) {
            paraString = paraString + "&" + this._toParaString2(para);
        }
        return this.getGeneric(apiName, paraString, serviceUrl);
    }
    postNoAuthGeneric(apiName, para, serviceUrl, receiveAsObject) {
        let url = this.ServiceUrl;
        if (typeof serviceUrl === 'string' && serviceUrl)
            url = serviceUrl;
        if (receiveAsObject === true || (typeof serviceUrl === 'boolean' && serviceUrl === true)) {
            return this.httpClient.post(`${url}/${apiName}`, para, { headers: this.headers }).toPromise();
        }
        else {
            return this.httpClient.post(`${url}/${apiName}`, this._toParaString2(para), {
                headers: {
                    'Content-Type': "application/x-www-form-urlencoded;charset=UTF-8"
                }
            }).toPromise();
        }
    }
    postNoAuth(apiName, para, serviceUrl, receiveAsObject) {
        return this.postNoAuthGeneric(apiName, para, serviceUrl, receiveAsObject);
    }
    postGeneric(apiName, para, serviceUrl, receiveAsObject) {
        let url = this.ServiceUrl;
        if (typeof serviceUrl === 'string' && serviceUrl)
            url = serviceUrl;
        if (receiveAsObject === true || (typeof serviceUrl === 'boolean' && serviceUrl === true)) {
            return this.httpClient.post(`${url}/${apiName}`, para, { headers: this.getAuthHeaders() }).toPromise();
        }
        else {
            return this.httpClient.post(`${url}/${apiName}`, this._toParaString2(para), {
                headers: {
                    'Content-Type': "application/x-www-form-urlencoded;charset=UTF-8",
                    "Authorization": `Bearer ${this.getAccessToken()}`
                }
            }).toPromise();
        }
    }
    post(apiName, para, serviceUrl, receiveAsObject) {
        return this.postGeneric(apiName, para, serviceUrl, receiveAsObject);
    }
    postPage(apiName, pageIndex, pageSize, orderBy, direction, para, serviceUrl, receiveAsObject) {
        if (pageIndex <= 0) {
            pageIndex = 1;
        }
        if (pageSize <= 0) {
            pageSize = 20;
        }
        let pager = {
            page: pageIndex.toString(),
            size: pageSize.toString(),
            orderby: orderBy ? orderBy : "",
            direction: direction === OrderByType.desc ? "1" : "0"
        };
        let paraString = this._toParaString2(pager);
        if (para) {
            paraString = paraString + "&" + this._toParaString2(para);
        }
        return this.postGeneric(apiName, paraString, serviceUrl, receiveAsObject);
    }
    deleteGeneric(apiName, para, serviceUrl) {
        let url = this.ServiceUrl;
        if (serviceUrl)
            url = serviceUrl;
        return this.httpClient.delete(`${url}/${apiName}`, {
            params: this._toHttpParams2(para),
            headers: {
                "Authorization": `Bearer ${this.getAccessToken()}`
            }
        }).toPromise();
    }
    delete(apiName, para, serviceUrl) {
        return this.deleteGeneric(apiName, para, serviceUrl);
    }
}
HttpReqService.ɵfac = function HttpReqService_Factory(t) { return new (t || HttpReqService)(ɵɵinject(HttpClient), ɵɵinject(AppGlobalConfig)); };
HttpReqService.ɵprov = ɵɵdefineInjectable({ token: HttpReqService, factory: HttpReqService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(HttpReqService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: HttpClient }, { type: AppGlobalConfig }]; }, null); })();

class WidgetManagerService {
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
            const _options = cloneDeep(options);
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
            _config.position = merge(_config.position, options.position);
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
        setting = clone(setting);
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
        setting.rawConfig = cloneDeep(setting);
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
        some(this.loaded, (w) => {
            if (w.instance.id === id) {
                ret = w;
                return true;
            }
        });
        return ret;
    }
    getWidgetByLabel(label) {
        var ret;
        some(this.loaded, (w) => {
            if (w.instance.label === label) {
                ret = w;
                return true;
            }
        });
        return ret;
    }
    getWidgetsByName(name) {
        var ret = [];
        some(this.loaded, (w) => {
            if (w.instance.name === name) {
                ret.push(w);
            }
        });
        return ret;
    }
    getOpenedWidgetByGroupId(groupId) {
        return find(this.loaded, (w) => {
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
        return filter(this.loaded, function (widget) {
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
        return some(this.loaded, (w, i) => {
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
        return filter(this.loaded, function (widget) {
            return !widget.instance.inPanel;
        });
    }
}
WidgetManagerService.ɵfac = function WidgetManagerService_Factory(t) { return new (t || WidgetManagerService)(ɵɵinject(AppGlobalConfig), ɵɵinject(EventEmitterService), ɵɵinject(UtilsService), ɵɵinject(HttpReqService), ɵɵinject(CommonService), ɵɵinject(ComponentLoaderService)); };
WidgetManagerService.ɵprov = ɵɵdefineInjectable({ token: WidgetManagerService, factory: WidgetManagerService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(WidgetManagerService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: AppGlobalConfig }, { type: EventEmitterService }, { type: UtilsService }, { type: HttpReqService }, { type: CommonService }, { type: ComponentLoaderService }]; }, null); })();

class ConfigLoaderService {
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
            this.rawAppConfig = cloneDeep(appConfig);
            let globalConfigTemp = cloneDeep(this.globalParams.mapConfig);
            appConfig = merge(globalConfigTemp, appConfig);
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
        var c = clone(this.appConfig);
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
ConfigLoaderService.ɵfac = function ConfigLoaderService_Factory(t) { return new (t || ConfigLoaderService)(ɵɵinject(WidgetManagerService), ɵɵinject(UtilsService), ɵɵinject(HttpReqService), ɵɵinject(AppGlobalConfig), ɵɵinject(CommonService), ɵɵinject(ComponentLoaderService)); };
ConfigLoaderService.ɵprov = ɵɵdefineInjectable({ token: ConfigLoaderService, factory: ConfigLoaderService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ConfigLoaderService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: WidgetManagerService }, { type: UtilsService }, { type: HttpReqService }, { type: AppGlobalConfig }, { type: CommonService }, { type: ComponentLoaderService }]; }, null); })();

class ConfigManagerService {
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
                    item = extend(item, tempobject);
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
        forEach(menus, (widget, index, list) => {
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
        var widget = extend({}, obj);
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
        var newConfig = clone(config);
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
            c = clone(this.appConfig);
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
        forEach(currentConfig.widgetPool.groups, (group) => {
            delete group.panel;
        });
        if (theme.appConfig) {
            config = clone(theme.appConfig);
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
                extend(this.appConfig.map, newJson);
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
                    var _widget = find(arr, (w, index) => {
                        return w.isOnScreen === actionInfo.isOnScreen;
                    });
                    if (_widget) {
                        id = _widget.id;
                    }
                }
                _params.data.eleid = id;
            }
        };
        var _params = extend({}, params);
        _preProcessConfig4Design[_params.type].call(this, _params);
    }
    _genStyles(allStyle, currentStyle) {
        var styles = [];
        styles.push(currentStyle);
        forEach(allStyle, function (_style) {
            if (styles.indexOf(_style) < 0) {
                styles.push(_style);
            }
        });
        return styles;
    }
}
ConfigManagerService.ɵfac = function ConfigManagerService_Factory(t) { return new (t || ConfigManagerService)(ɵɵinject(UtilsService), ɵɵinject(AppGlobalConfig), ɵɵinject(EventEmitterService), ɵɵinject(WidgetManagerService), ɵɵinject(ConfigLoaderService), ɵɵinject(CommonService)); };
ConfigManagerService.ɵprov = ɵɵdefineInjectable({ token: ConfigManagerService, factory: ConfigManagerService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ConfigManagerService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: UtilsService }, { type: AppGlobalConfig }, { type: EventEmitterService }, { type: WidgetManagerService }, { type: ConfigLoaderService }, { type: CommonService }]; }, null); })();

class PanelManagerService {
    constructor(globalParams, commonService, widgetManager, appRef, componentFactoryResolver, componentLoader, eventService) {
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
        this.eventService.rss.on(this.eventService._createPanelContainer, (ele) => {
            this.createPanelContainer(ele);
        });
        this.eventService.rss.on(this.eventService._mapPositionChanged, (pos) => {
            this.onMapResize();
        });
    }
    create(component, params) {
        let inputs = {};
        if (params) {
            inputs = params;
        }
        let inputProviders = Object.keys(inputs).map((inputName) => {
            return { provide: inputName, useValue: inputs[inputName] };
        });
        const factory = this.componentFactoryResolver.resolveComponentFactory(component);
        const compRef = factory.create(ReflectiveInjector.resolveAndCreate(inputProviders));
        return compRef;
    }
    createPanelContainer(eleMapContainer) {
        let container = document.querySelector(".sspanel_container");
        if (container == null) {
            container = window.document.createElement("div");
            container.className = "sspanel_container";
            if (this.commonService.isMobileNotTablet()) {
                const ionApp = document.querySelector("ion-app");
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
    }
    show(panel) {
        if (!panel.instance.started) {
            if (panel.instance.isDockable()) {
                this.componentLoader.showInHome(panel);
            }
            else {
                this.panelContainer.appendChild(this.commonService.getComponentRootNode(panel));
                this.appRef.attachView(panel.hostView);
            }
        }
    }
    setMap(map) {
        if (this.globalParams.mapConfig.is3D === true) {
            this.view = map;
        }
        else {
            this.map = map;
        }
    }
    _findPanelUri(widgetConfig) {
        const _uri_default = "epsgis-on-screen-widget-panel";
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
    }
    showPanel(config, widget, options, openOptions) {
        let def = this.commonService.createPromiseDefer();
        let pid = config.id + '_panel', panel = this.getPanelById(pid);
        if (panel) {
            if (panel.instance.state === WidgetState.closed) {
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
                const _comp = this.componentLoader.findComponent(this._findPanelUri(config));
                if (!_comp) {
                    const _msg = `not find panel [${config.panel.uri}]`;
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
                    options = merge(options, openOptions.panel);
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
    }
    showPanelNotWidget(panelOptions) {
        let position = {
            width: panelOptions.width + 'px',
            height: panelOptions.height + 'px',
            relativeTo: panelOptions.relativeTo,
        };
        let config = {
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
        let def = this.commonService.createPromiseDefer();
        let pid = config.id, panel = this.getPanelById(pid);
        if (panel) {
            if (panel.instance.state === WidgetState.closed) {
                this.openPanel(panel);
            }
            def.resolve(panel);
        }
        else {
            this.showPanel(config, null, panelOptions);
        }
        return def.promise();
    }
    closeOtherPanelsInTheSameGroup(panel) {
        if (typeof panel === 'string') {
            panel = this.getPanelById(panel);
            if (!panel) {
                return;
            }
        }
        for (let i = 0; i < this.panels.length; i++) {
            if (this.panels[i].instance.isDockable())
                continue;
            if (this.panels[i].instance.gid === panel.instance.gid
                && this.panels[i].instance.id !== panel.instance.id) {
                this.closePanel(this.panels[i]);
            }
        }
    }
    closeAllPanelsInGroup(groupId) {
        for (let i = 0; i < this.panels.length; i++) {
            if (this.panels[i].instance.isDockable())
                continue;
            if (this.panels[i].instance.gid === groupId) {
                this.closePanel(this.panels[i]);
            }
        }
    }
    openPanel(panel) {
        let def = this.commonService.createPromiseDefer();
        if (!panel.instance.started) {
            try {
                this.show(panel);
            }
            catch (err) {
                console.error('fail to startup panel ' + panel.instance.id + '. ' + err.stack);
            }
        }
        if (panel.instance.state === WidgetState.opened) {
            def.resolve(panel);
            return def.promise();
        }
        if (panel.instance.started) {
            panel.instance.setState(WidgetState.opened);
            this.playOpenPanelAnimation(panel).then(() => {
                this._activePanel(panel);
                def.resolve(panel);
            });
        }
        return def.promise();
    }
    closePanel(panel) {
        let def = this.commonService.createPromiseDefer();
        let _panel;
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
        if (_panel.instance.state === WidgetState.closed) {
            def.resolve(_panel);
            return def.promise();
        }
        this.playClosePanelAnimation(_panel).then(() => {
            if (this.activePanel && this.activePanel.instance.id === _panel.instance.id) {
                this.activePanel.instance.onDeActive();
                this.activePanel = null;
            }
            _panel.instance.setState(WidgetState.closed);
            def.resolve(_panel);
        });
        return def.promise();
    }
    minimizePanel(panel) {
        if (typeof panel === 'string') {
            panel = this.getPanelById(panel);
            if (!panel) {
                return;
            }
        }
        if (panel.instance.state === WidgetState.closed) {
            this.openPanel(panel);
        }
        panel.instance.setWindowState(WidgetWindowState.minimized);
        try {
            panel.instance.onMinimize();
        }
        catch (err) {
            console.log(console.error('fail to minimize panel ' + panel.instance.id + '. ' + err.stack));
        }
    }
    maximizePanel(panel) {
        if (typeof panel === 'string') {
            panel = this.getPanelById(panel);
            if (!panel) {
                return;
            }
        }
        if (panel.instance.state === WidgetState.closed) {
            this.openPanel(panel);
        }
        panel.instance.setWindowState(WidgetWindowState.maximized);
        try {
            panel.instance.onMaximize();
        }
        catch (err) {
            console.log(console.error('fail to maximize panel ' + panel.instance.id + '. ' + err.stack));
        }
    }
    normalizePanel(panel) {
        if (typeof panel === 'string') {
            panel = this.getPanelById(panel);
            if (!panel) {
                return;
            }
        }
        if (panel.instance.state === WidgetState.closed) {
            this.openPanel(panel);
        }
        panel.instance.setWindowState(WidgetWindowState.normal);
        try {
            panel.instance.onNormalize();
        }
        catch (err) {
            console.log(console.error('fail to noralize panel ' + panel.instance.id + '. ' + err.stack));
        }
    }
    changeWindowStateTo(panel, state) {
        if (typeof panel === 'string') {
            panel = this.getPanelById(panel);
            if (!panel) {
                return;
            }
        }
        if (state === WidgetWindowState.normal) {
            this.normalizePanel(panel);
        }
        else if (state === WidgetWindowState.minimized) {
            this.minimizePanel(panel);
        }
        else if (state === WidgetWindowState.maximized) {
            this.maximizePanel(panel);
        }
        else {
            console.log('error state: ' + state);
        }
    }
    getPanelById(pid) {
        for (let i = 0; i < this.panels.length; i++) {
            if (this.panels[i].instance.id === pid) {
                return this.panels[i];
            }
        }
    }
    onWindowResize() {
        for (let i = 0; i < this.panels.length; i++) {
            if (this.panels[i].instance.state !== WidgetState.closed &&
                this.panels[i].instance.position.relativeTo !== 'map') {
                this.panels[i].instance.resize();
            }
        }
    }
    onMapResize() {
        for (let i = 0; i < this.panels.length; i++) {
            if (this.panels[i].instance.isDockable()) {
                this.panels[i].instance.resize();
            }
            else {
            }
        }
    }
    destroyPanel(panel) {
        if (typeof panel === 'string') {
            panel = this.getPanelById(panel);
            if (!panel) {
                return;
            }
        }
        if (panel.instance.state !== WidgetState.closed) {
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
    }
    destroyAllPanels() {
        let allPanelIds = map(this.panels, function (panel) {
            return panel.instance.id;
        });
        forEach(allPanelIds, (panelId) => {
            this.destroyPanel(panelId);
        });
        this.panels = [];
    }
    playOpenPanelAnimation(panel) {
        return Promise.resolve(true);
    }
    playClosePanelAnimation(panel) {
        return Promise.resolve(true);
    }
    getPositionOnMobile(panel) {
        if (typeof panel === 'string') {
            panel = this.getPanelById(panel);
            if (!panel) {
                return {};
            }
        }
    }
    _onPanelClick(panel) {
        this._activePanel(panel);
    }
    _activePanel(panel) {
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
            if (this.activePanel.instance.state === WidgetState.active) {
                this.activePanel.instance.setState(WidgetState.opened);
                if (this.activePanel.instance.position.zIndex !== 'undefined') {
                    this.activePanel.instance.setZIndex("deactive");
                }
                else {
                    this.activePanel.instance.setZIndex("deactive");
                }
                this.activePanel.instance.onDeActive();
            }
        }
        let aw = this.widgetManager.activeWidget;
        if (aw && aw.instance.state === WidgetState.active && aw.instance.getPanel() !== panel) {
            aw.instance.setState(WidgetState.opened);
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
        if (this.activePanel.instance.state === WidgetState.active) {
            return;
        }
        this.activePanel.instance.setState(WidgetState.active);
        if (this.activePanel.instance.moveTopOnActive) {
            this.activePanel.instance.setZIndex("active");
        }
        forEach(this.panels, (p, index, arr) => {
            if (p.instance.isDockable() == false && p.instance.id != this.activePanel.instance.id) {
                p.instance.setZIndex("deactive");
            }
        });
        this.activePanel.instance.onActive();
    }
    _removePanel(panel) {
        let index = this.panels.indexOf(panel);
        if (index > -1) {
            this.panels.splice(index, 1);
        }
        if (this.activePanel && this.activePanel.instance.id === panel.instance.id) {
            this.activePanel = null;
        }
    }
    _onMoveStart(mover) {
    }
    _onWidgetActived(widget) {
        if (this.activePanel &&
            this.activePanel.instance.state === WidgetState.active &&
            widget.getPanel() !== this.activePanel) {
            this.activePanel.instance.setState(WidgetState.opened);
            if (this.activePanel.instance.position.zIndex !== 'undefined') {
            }
            else {
            }
            this.activePanel.instance.onDeActive();
            this.activePanel = null;
        }
    }
    _loadPanelClass(panelUri) {
    }
    _loadThemeI18N(panelUri) {
    }
    getAllPanels() {
        return this.panels;
    }
}
PanelManagerService.ɵfac = function PanelManagerService_Factory(t) { return new (t || PanelManagerService)(ɵɵinject(AppGlobalConfig), ɵɵinject(CommonService), ɵɵinject(WidgetManagerService), ɵɵinject(ApplicationRef), ɵɵinject(ComponentFactoryResolver), ɵɵinject(ComponentLoaderService), ɵɵinject(EventEmitterService)); };
PanelManagerService.ɵprov = ɵɵdefineInjectable({ token: PanelManagerService, factory: PanelManagerService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(PanelManagerService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: AppGlobalConfig }, { type: CommonService }, { type: WidgetManagerService }, { type: ApplicationRef }, { type: ComponentFactoryResolver }, { type: ComponentLoaderService }, { type: EventEmitterService }]; }, null); })();

class MapManagerService {
    constructor(utils, httpService, globalParams, eventService, commonService, componentLoader) {
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
    setAppConfig(config) {
        this.appConfig = config;
    }
    restorePosition() {
        this.changeMapPosition(this.originMapPosition);
    }
    changeMapPosition(position, triggerEvent = true) {
        this.mapPosition = merge(this.mapPosition, position);
        this.commonService.setWidgetPosition(this.comRefMap, this.mapPosition);
        if (this.comRefMap.instance.resize) {
            this.comRefMap.instance.resize();
        }
        if (triggerEvent) {
            this.eventService.rss.emit(this.eventService._mapPositionChanged, this.mapPosition);
        }
    }
    setMapPosition(position) {
        this.mapPosition = position;
        this.originMapPosition = cloneDeep(position);
    }
    getMapPosition() {
        return this.mapPosition;
    }
    centerAtMap(lgtd, lttd, s) {
    }
    showMap() {
        return __awaiter(this, void 0, void 0, function* () {
            let mapComp = this.componentLoader.findComponent(this.appConfig.map.uri);
            if (!mapComp) {
                console.log("没有找到map组件，请检查config.json文件map[uri]配置");
                return;
            }
            const _path = (typeof mapComp.prototype.getCompInfo === "function") ? mapComp.prototype.getCompInfo().path : "";
            let _config, _manifest;
            if (_path) {
                try {
                    const _rpath = this.globalParams.widgetRootPath + "/" + _path;
                    _manifest = yield this.httpService.getJsonFile(_rpath + "/manifest.json");
                    _config = this.appConfig.map.config;
                    if (!_config) {
                        let configPath = this.appConfig.map.configPath || 'config.json';
                        _config = yield this.httpService.getJsonFile(_rpath + "/" + configPath);
                    }
                }
                catch (err) {
                    console.log(err);
                }
            }
            this.comRefMap = this.componentLoader.createComponentToHome(mapComp);
            this.comRefMap.instance.setProps({
                appConfig: this.appConfig,
                config: _config,
                manifest: _manifest
            });
            let _position = cloneDeep(this.appConfig.map.position);
            this.commonService.setWidgetPosition(this.comRefMap, _position);
            aspect.after(this.comRefMap.instance, "afterNgOnInit", () => {
                this.initMap();
            });
            this.componentLoader.showInHome(this.comRefMap);
        });
    }
    destoryMap() {
        if (this.comRefMap) {
            this.comRefMap.destroy();
            console.log('destroy map.');
        }
    }
    initMap() {
        this.comRefMap.instance.initMap().then((map) => {
            console.log('map loaded.');
            if (this.globalParams.mapConfig.is3D === true) {
                this.view = map;
                this.comRefMap.instance.view = map;
            }
            else {
                this.comRefMap.instance.map = map;
                this.map = map;
            }
            this.eventService.rss.emit(this.eventService._createPanelContainer, this.commonService.getComponentRootNode(this.comRefMap));
            this.eventService.rss.emit(this.eventService._mapLoaded, map);
        }, (msg) => {
            console.log(msg);
        });
    }
}
MapManagerService.ɵfac = function MapManagerService_Factory(t) { return new (t || MapManagerService)(ɵɵinject(UtilsService), ɵɵinject(HttpReqService), ɵɵinject(AppGlobalConfig), ɵɵinject(EventEmitterService), ɵɵinject(CommonService), ɵɵinject(ComponentLoaderService)); };
MapManagerService.ɵprov = ɵɵdefineInjectable({ token: MapManagerService, factory: MapManagerService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MapManagerService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: UtilsService }, { type: HttpReqService }, { type: AppGlobalConfig }, { type: EventEmitterService }, { type: CommonService }, { type: ComponentLoaderService }]; }, null); })();

class LayoutManagerService {
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
        forEach(this.widgetManager.getAllWidgets(), (w) => {
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
        each(appConfig.widgetOnScreen.widgets, (widgetConfig, index, list) => {
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
        let _position = cloneDeep(widgetConfig.position);
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
        forEach(this.widgetManager.getOffPanelWidgets(), (widget) => {
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
        let panelIcon = find(this.preloadWidgetIcons, (w, index) => {
            return w.instance.configId === eleid;
        });
        if (panelIcon) {
            panelIcon.instance.onAction(action, "TODO");
        }
        let widget = find(this.widgetManager.getOnScreenOffPanelWidgets(), (w) => {
            return (w.instance.id === eleid);
        });
        if (widget) {
            widget.instance.onAction(action, "TODO");
        }
        let placeholder = find(this.widgetPlaceholders, (w, index) => {
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
            let icon = find(_self.preloadWidgetIcons, function (w) { return wc.id === w.instance.configId || uri === w.instance.uri; });
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
                let widget = find(_self.widgetManager.getOnScreenOffPanelWidgets(), function (w) {
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
                        let placeholder = find(_self.widgetPlaceholders, function (w) {
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
                            widgetConfig = extend(eleConfig, wc);
                            this.configManager.configLoader._processAfterTryLoad(appConfig);
                            _self.widgetManager.loadWidgetManifest(widgetConfig).then((config) => {
                                loadWidget(widgetConfig, appConfig, false, '');
                            }).catch(function (err) {
                                console.log("loadWidgetManifest err", err);
                            });
                        }
                    }
                    else {
                        forEach(_self.invisibleWidgetIds, (widgetId) => {
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
        forEach(changedWidgets, process);
    }
}
LayoutManagerService.ɵfac = function LayoutManagerService_Factory(t) { return new (t || LayoutManagerService)(ɵɵinject(PanelManagerService), ɵɵinject(WidgetManagerService), ɵɵinject(UtilsService), ɵɵinject(HttpReqService), ɵɵinject(AppGlobalConfig), ɵɵinject(EventEmitterService), ɵɵinject(CommonService), ɵɵinject(MapManagerService), ɵɵinject(ComponentLoaderService)); };
LayoutManagerService.ɵprov = ɵɵdefineInjectable({ token: LayoutManagerService, factory: LayoutManagerService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(LayoutManagerService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: PanelManagerService }, { type: WidgetManagerService }, { type: UtilsService }, { type: HttpReqService }, { type: AppGlobalConfig }, { type: EventEmitterService }, { type: CommonService }, { type: MapManagerService }, { type: ComponentLoaderService }]; }, null); })();

class WidgetPlaceHolderService {
    constructor() { }
}
WidgetPlaceHolderService.ɵfac = function WidgetPlaceHolderService_Factory(t) { return new (t || WidgetPlaceHolderService)(); };
WidgetPlaceHolderService.ɵprov = ɵɵdefineInjectable({ token: WidgetPlaceHolderService, factory: WidgetPlaceHolderService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(WidgetPlaceHolderService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

function isPromise(obj) {
    return !!obj && typeof obj.then === 'function' && typeof obj.catch === 'function';
}
class SsModalRef {
    constructor(config, containerRef) {
        this.config = config;
        this.containerRef = containerRef;
        this.componentInstance = null;
        this.state = 0;
        this.afterClose = new Subject();
        this.afterOpen = new Subject();
        this.containerInstance = containerRef.instance;
        this.containerInstance.cancelTriggered.subscribe(() => this.trigger("cancel"));
        this.containerInstance.okTriggered.subscribe(() => this.trigger("ok"));
        this.containerInstance.onCloseTreggered.subscribe(() => {
            this.afterClose.next(this.result);
            this.afterClose.complete();
            if (config.afterClose instanceof EventEmitter) {
                config.afterClose.emit(this.result);
            }
            this.containerRef = null;
            this.containerInstance = null;
            this.componentRef = null;
            this.componentInstance = null;
        });
    }
    getContentComponent() {
        return this.componentInstance;
    }
    getElement() {
        return this.containerInstance.getNativeElement();
    }
    destroy(result) {
        this.close(result);
    }
    triggerOk() {
        this.trigger("ok");
    }
    triggerCancel() {
        this.trigger("cancel");
    }
    open() {
    }
    close(result) {
        this.result = result;
        this.componentRef.destroy();
        this.containerRef.destroy();
        this.state = 2;
        this.afterClose.next(this.result);
    }
    updateConfig(config) {
        Object.assign(this.config, config);
        this.containerInstance.cdr.markForCheck();
    }
    getState() {
        return this.state;
    }
    getConfig() {
        return this.config;
    }
    getBackdropElement() {
        return null;
    }
    trigger(action) {
        const trigger = { ok: this.config.onOk, cancel: this.config.onCancel }[action];
        const loadingKey = { ok: 'okLoading', cancel: 'cancelLoading' }[action];
        const loading = this.config[loadingKey];
        if (loading) {
            return;
        }
        if (trigger instanceof EventEmitter) {
            trigger.emit(this.getContentComponent());
        }
        else if (typeof trigger === 'function') {
            const result = trigger(this.getContentComponent());
            const caseClose = (doClose) => doClose !== false && this.close(doClose);
            if (isPromise(result)) {
                this.config[loadingKey] = true;
                const handleThen = (doClose) => {
                    this.config[loadingKey] = false;
                    this.closeWhitResult(doClose);
                };
                result.then(handleThen).catch(handleThen);
            }
            else {
                caseClose(result);
            }
        }
    }
    closeWhitResult(result) {
        if (result !== false) {
            this.close(result);
        }
    }
}

const noopFun = () => void 0;
class SsModalOptions {
    constructor() {
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
}

function applyConfigDefaults(config, defaultOptions) {
    return Object.assign(Object.assign({}, defaultOptions), config);
}
function setContentInstanceParams(instance, params) {
    Object.assign(instance, params);
}
function getConfigFromComponent(component) {
    const { mask, maskClosable, closable, okLoading, okDisabled, cancelDisabled, cancelLoading, keyboard, noAnimation, content, componentParams, footer, getContainer, zIndex, width, wrapClassName, className, styles, title, closeIcon, maskStyle, bodyStyle, okText, cancelText, okType, iconType, modalType, onOk, onCancel, afterOpen, afterClose } = component;
    return {
        mask,
        maskClosable,
        closable,
        okLoading,
        okDisabled,
        cancelDisabled,
        cancelLoading,
        keyboard,
        noAnimation,
        content,
        componentParams,
        footer,
        getContainer,
        zIndex,
        width,
        wrapClassName,
        className,
        styles,
        title,
        closeIcon,
        maskStyle,
        bodyStyle,
        okText,
        cancelText,
        okType,
        iconType,
        modalType,
        onOk,
        onCancel,
        afterOpen,
        afterClose
    };
}

const _c0$9 = ["ssmodal_overlay"];
const _c1$6 = ["ssmodal_titlebar"];
const _c2$2 = ["ssmodal"];
function ModalContainerComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 21);
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("modalRef", ctx_r3.modalRef);
} }
function ModalContainerComponent_ng_container_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 24);
    ɵɵlistener("click", function ModalContainerComponent_ng_container_10_ng_container_1_Template_div_click_1_listener($event) { ɵɵrestoreView(_r14); const ctx_r13 = ɵɵnextContext(2); return ctx_r13._buttonCollapse_Click($event); });
    ɵɵnamespaceSVG();
    ɵɵelementStart(2, "svg", 25);
    ɵɵelementStart(3, "g", 26);
    ɵɵelement(4, "polyline", 27);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("title", ctx_r10.options.buttonUnCollapseText);
} }
function ModalContainerComponent_ng_container_10_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 24);
    ɵɵlistener("click", function ModalContainerComponent_ng_container_10_ng_template_2_Template_div_click_0_listener($event) { ɵɵrestoreView(_r16); const ctx_r15 = ɵɵnextContext(2); return ctx_r15._buttonCollapse_Click($event); });
    ɵɵnamespaceSVG();
    ɵɵelementStart(1, "svg", 25);
    ɵɵelementStart(2, "g", 26);
    ɵɵelement(3, "polyline", 28);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = ɵɵnextContext(2);
    ɵɵpropertyInterpolate("title", ctx_r12.options.buttonCollapseText);
} }
function ModalContainerComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ModalContainerComponent_ng_container_10_ng_container_1_Template, 5, 1, "ng-container", 22);
    ɵɵtemplate(2, ModalContainerComponent_ng_container_10_ng_template_2_Template, 4, 1, "ng-template", null, 23, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r11 = ɵɵreference(3);
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r4.windowState == "collapsed")("ngIfElse", _r11);
} }
function ModalContainerComponent_ng_container_11_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 30);
    ɵɵlistener("click", function ModalContainerComponent_ng_container_11_ng_container_1_Template_div_click_1_listener($event) { ɵɵrestoreView(_r21); const ctx_r20 = ɵɵnextContext(2); return ctx_r20._buttonMax_Click($event); });
    ɵɵnamespaceSVG();
    ɵɵelementStart(2, "svg", 25);
    ɵɵelementStart(3, "g", 26);
    ɵɵelement(4, "rect", 31);
    ɵɵelement(5, "line", 32);
    ɵɵelement(6, "line", 33);
    ɵɵelement(7, "line", 34);
    ɵɵelement(8, "line", 35);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r17 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("title", ctx_r17.options.buttonUnmaximizeText);
} }
function ModalContainerComponent_ng_container_11_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r23 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 30);
    ɵɵlistener("click", function ModalContainerComponent_ng_container_11_ng_template_2_Template_div_click_0_listener($event) { ɵɵrestoreView(_r23); const ctx_r22 = ɵɵnextContext(2); return ctx_r22._buttonMax_Click($event); });
    ɵɵnamespaceSVG();
    ɵɵelementStart(1, "svg", 25);
    ɵɵelementStart(2, "g", 26);
    ɵɵelement(3, "rect", 36);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r19 = ɵɵnextContext(2);
    ɵɵpropertyInterpolate("title", ctx_r19.options.buttonMaximizeText);
} }
function ModalContainerComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ModalContainerComponent_ng_container_11_ng_container_1_Template, 9, 1, "ng-container", 22);
    ɵɵtemplate(2, ModalContainerComponent_ng_container_11_ng_template_2_Template, 4, 1, "ng-template", null, 29, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r18 = ɵɵreference(3);
    const ctx_r5 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r5.windowState == "maximized")("ngIfElse", _r18);
} }
function ModalContainerComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    const _r25 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 37);
    ɵɵlistener("click", function ModalContainerComponent_ng_container_12_Template_div_click_1_listener($event) { ɵɵrestoreView(_r25); const ctx_r24 = ɵɵnextContext(); return ctx_r24.closePanel($event); });
    ɵɵnamespaceSVG();
    ɵɵelementStart(2, "svg", 25);
    ɵɵelementStart(3, "g");
    ɵɵelement(4, "line", 38);
    ɵɵelement(5, "line", 39);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("title", ctx_r6.options.buttonCloseText);
} }
function ModalContainerComponent_ng_template_14_Template(rf, ctx) { }
function ModalContainerComponent_div_16_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r28 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 44);
    ɵɵlistener("cancelTriggered", function ModalContainerComponent_div_16_div_2_Template_div_cancelTriggered_0_listener() { ɵɵrestoreView(_r28); const ctx_r27 = ɵɵnextContext(2); return ctx_r27.onCloseClick(); })("okTriggered", function ModalContainerComponent_div_16_div_2_Template_div_okTriggered_0_listener() { ɵɵrestoreView(_r28); const ctx_r29 = ɵɵnextContext(2); return ctx_r29.onOkClick(); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r26 = ɵɵnextContext(2);
    ɵɵproperty("modalRef", ctx_r26.modalRef);
} }
function ModalContainerComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r31 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 40);
    ɵɵelementStart(1, "div", 41);
    ɵɵtemplate(2, ModalContainerComponent_div_16_div_2_Template, 1, 1, "div", 42);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 43);
    ɵɵlistener("mousedown", function ModalContainerComponent_div_16_Template_div_mousedown_3_listener($event) { ɵɵrestoreView(_r31); const ctx_r30 = ɵɵnextContext(); return ctx_r30._resizer_MouseDown($event, { dimension: "height", directionY: "bottom" }); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r9.config.footer !== null);
} }
function throwNzModalContentAlreadyAttachedError() {
    throw Error('Attempting to attach modal content after content is already attached');
}
let ModalContainerComponent = class ModalContainerComponent extends BasePanelComponent {
    constructor(elementRef, cdr, render, zone, config, commonService, panelManager, widgetManager, globalParams, mapManager) {
        super(render, cdr);
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.render = render;
        this.zone = zone;
        this.config = config;
        this.commonService = commonService;
        this.panelManager = panelManager;
        this.widgetManager = widgetManager;
        this.globalParams = globalParams;
        this.mapManager = mapManager;
        this.animationStateChanged = new EventEmitter();
        this.containerClick = new EventEmitter();
        this.cancelTriggered = new EventEmitter();
        this.okTriggered = new EventEmitter();
        this.isStringContent = false;
        this.elementFocusedBeforeModalWasOpened = null;
        this.latestMousedownTarget = null;
        this.oldMaskStyle = null;
        this.onCloseTreggered = new EventEmitter();
        this.showStatusBar = false;
        this.defaultZIndex = 110;
        this.document = document;
        this.isStringContent = typeof config.content === 'string';
        this.setContainer();
        if (this.config.footer != null) {
            this.showStatusBar = true;
        }
        else if (this.config.okDisabled !== true) {
            this.showStatusBar = true;
        }
        else if (this.config.cancelDisabled !== true) {
            this.showStatusBar = true;
        }
    }
    ngOnInit() {
        if (this.commonService.isMobile()) {
            this.widgetConfig = {
                position: new WidgetPosition(0, 0, 0, 0, "100%", "100%", "", "unset")
            };
        }
        else {
            let left = 0;
            if (this.config.width === "100%") {
                left = 0;
            }
            else if (this.config.width === "auto") {
            }
            else if (typeof this.config.width === "number") {
                left = (window.innerWidth - this.config.width) / 2;
            }
            else if (typeof this.config.width === "string") {
                let x = parseInt(this.config.width, 10);
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
        let _index = this.defaultZIndex - 1;
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
        this.state = WidgetState.opened;
        this.windowState = WidgetWindowState.normal;
        super.ngOnInit();
    }
    ngAfterViewInit() {
        this.modalRef.afterOpen.next();
        if (this.config.fullScreen) {
            this._maximize();
        }
    }
    onClose() {
        this.onCloseTreggered.emit();
    }
    onMousedown(e) {
        this.latestMousedownTarget = e.target || null;
    }
    onMouseup(e) {
        if (e.target === this.latestMousedownTarget && e.target === this.elementRef.nativeElement) {
            this.containerClick.emit();
        }
        this.latestMousedownTarget = null;
    }
    onCloseClick() {
        this.cancelTriggered.emit();
    }
    onOkClick() {
        this.okTriggered.emit();
    }
    attachComponentPortal(compRef) {
        this.savePreviouslyFocusedElement();
        this.setModalTransformOrigin();
        this.widgetContainer.insert(compRef.hostView);
        return compRef;
    }
    attachTemplatePortal() {
        return null;
    }
    getNativeElement() {
        return this.elementRef.nativeElement;
    }
    animationDisabled() {
        return false;
    }
    setModalTransformOrigin() {
        const modalElement = this.modalElementRef.nativeElement;
        if (this.elementFocusedBeforeModalWasOpened) {
            const previouslyDOMRect = this.elementFocusedBeforeModalWasOpened.getBoundingClientRect();
            const lastPosition = this.commonService.getElementBounds(this.elementFocusedBeforeModalWasOpened);
            const x = lastPosition.left + previouslyDOMRect.width / 2;
            const y = lastPosition.top + previouslyDOMRect.height / 2;
            const transformOrigin = `${x - modalElement.offsetLeft}px ${y - modalElement.offsetTop}px 0px`;
            this.render.setStyle(modalElement, 'transform-origin', transformOrigin);
        }
    }
    savePreviouslyFocusedElement() {
        if (this.document) {
            this.elementFocusedBeforeModalWasOpened = this.document.activeElement;
            if (this.elementRef.nativeElement.focus) {
                Promise.resolve().then(() => this.elementRef.nativeElement.focus());
            }
        }
    }
    trapFocus() {
    }
    restoreFocus() {
    }
    setEnterAnimationClass() {
    }
    setExitAnimationClass() {
    }
    cleanAnimationClass() {
        if (this.animationDisabled()) {
            return;
        }
    }
    bindBackdropStyle() {
    }
    setContainer() {
        const container = this.getContainer();
        if (container) {
            this.render.appendChild(container, this.elementRef.nativeElement);
        }
    }
    resetContainer() {
        const container = this.getContainer();
        if (container) {
        }
    }
    getContainer() {
        return this.config.getContainer;
    }
    onAnimationDone(event) {
    }
    onAnimationStart(event) {
    }
    startExitAnimation() {
        this.state = WidgetState.closed;
        this.cdr.markForCheck();
    }
    closePanel(event) {
        this.cancelTriggered.emit();
    }
};
ModalContainerComponent.ɵfac = function ModalContainerComponent_Factory(t) { return new (t || ModalContainerComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(SsModalOptions), ɵɵdirectiveInject(CommonService), ɵɵdirectiveInject(PanelManagerService), ɵɵdirectiveInject(WidgetManagerService), ɵɵdirectiveInject(AppGlobalConfig), ɵɵdirectiveInject(MapManagerService)); };
ModalContainerComponent.ɵcmp = ɵɵdefineComponent({ type: ModalContainerComponent, selectors: [["epsgis-modal-container"]], viewQuery: function ModalContainerComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$9, 3);
        ɵɵviewQuery(_c1$6, 3);
        ɵɵviewQuery(_c2$2, 3);
        ɵɵviewQuery(_c2$2, 3);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.sspanelOverlay = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.sspanel_titlebar = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.sspanel = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.modalElementRef = _t.first);
    } }, features: [ɵɵInheritDefinitionFeature], decls: 25, vars: 8, consts: [[1, "ssmodal_overlay"], ["ssmodal_overlay", ""], [1, "ssmodal", 3, "id", "ngStyle"], ["ssmodal", ""], [1, "ssmodal_titlebar", "ssmodal_titlebar_draggable", 3, "mousedown"], ["ssmodal_titlebar", ""], [1, "ssmodal_titlebar_text"], [1, "ssmodal_titlebar_text_span"], ["class", "ssmodal_titlebar_custom_buttons", "ss-modal-titlebar-button", "", 3, "modalRef", 4, "ngIf"], [4, "ngIf"], [1, "ssmodal_content", 3, "click"], ["widget_content", ""], ["class", "ssmodal_statusbar", 4, "ngIf"], [1, "ssmodal_resizer", "ssmodal_resizer_top", 3, "mousedown"], [1, "ssmodal_resizer", "ssmodal_resizer_left", 3, "mousedown"], [1, "ssmodal_resizer", "ssmodal_resizer_right", 3, "mousedown"], [1, "ssmodal_resizer", "ssmodal_resizer_topleft", 3, "mousedown"], [1, "ssmodal_resizer", "ssmodal_resizer_topright", 3, "mousedown"], [1, "ssmodal_resizer", "ssmodal_resizer_bottomleft", 3, "mousedown"], [1, "ssmodal_resizer", "ssmodal_resizer_bottomright", 3, "mousedown"], [1, "ssmodal_minplaceholder"], ["ss-modal-titlebar-button", "", 1, "ssmodal_titlebar_custom_buttons", 3, "modalRef"], [4, "ngIf", "ngIfElse"], ["showCollapsedButton", ""], [1, "ssmodal_titlebar_button", "ssmodal_titlebar_button_collapse", 3, "title", "click"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 10 10", "height", "100%", "width", "100%"], ["fill", "none"], ["points", "1,3 9,3 5,8 1,3 9,3"], ["points", "1,7 9,7 5,2 1,7 9,7"], ["showMaximizeButton", ""], [1, "ssmodal_titlebar_button", "ssmodal_titlebar_button_maximize", 3, "title", "click"], ["x", "1", "y", "3", "height", "6", "width", "6"], ["y1", "3", "x1", "3", "y2", "1", "x2", "3"], ["y1", "1", "x1", "2.5", "y2", "1", "x2", "9.5"], ["y1", "1", "x1", "9", "y2", "7", "x2", "9"], ["y1", "7", "x1", "9.5", "y2", "7", "x2", "7"], ["x", "1", "y", "1", "height", "8", "width", "8"], [1, "ssmodal_titlebar_button", "ssmodal_titlebar_button_close", 3, "title", "click"], ["y2", "0", "x2", "10", "y1", "10", "x1", "0"], ["y2", "10", "x2", "10", "y1", "0", "x1", "0"], [1, "ssmodal_statusbar"], [1, "ssmodal_statusbar_content"], ["ss-modal-footer", "", 3, "modalRef", "cancelTriggered", "okTriggered", 4, "ngIf"], [1, "ssmodal_resizer", "ssmodal_resizer_bottom", 3, "mousedown"], ["ss-modal-footer", "", 3, "modalRef", "cancelTriggered", "okTriggered"]], template: function ModalContainerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0, 1);
        ɵɵelementStart(2, "div", 2, 3);
        ɵɵelementStart(4, "div", 4, 5);
        ɵɵlistener("mousedown", function ModalContainerComponent_Template_div_mousedown_4_listener($event) { return ctx._titlebar_MouseDown($event); });
        ɵɵelementStart(6, "div", 6);
        ɵɵelementStart(7, "span", 7);
        ɵɵtext(8);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(9, ModalContainerComponent_div_9_Template, 1, 1, "div", 8);
        ɵɵtemplate(10, ModalContainerComponent_ng_container_10_Template, 4, 2, "ng-container", 9);
        ɵɵtemplate(11, ModalContainerComponent_ng_container_11_Template, 4, 2, "ng-container", 9);
        ɵɵtemplate(12, ModalContainerComponent_ng_container_12_Template, 6, 1, "ng-container", 9);
        ɵɵelementEnd();
        ɵɵelementStart(13, "div", 10);
        ɵɵlistener("click", function ModalContainerComponent_Template_div_click_13_listener($event) { return ctx._contentClick($event); });
        ɵɵtemplate(14, ModalContainerComponent_ng_template_14_Template, 0, 0, "ng-template", null, 11, ɵɵtemplateRefExtractor);
        ɵɵelementEnd();
        ɵɵtemplate(16, ModalContainerComponent_div_16_Template, 4, 1, "div", 12);
        ɵɵelementStart(17, "div", 13);
        ɵɵlistener("mousedown", function ModalContainerComponent_Template_div_mousedown_17_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "height", directionY: "top" }); });
        ɵɵelementEnd();
        ɵɵelementStart(18, "div", 14);
        ɵɵlistener("mousedown", function ModalContainerComponent_Template_div_mousedown_18_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "width", directionX: "left" }); });
        ɵɵelementEnd();
        ɵɵelementStart(19, "div", 15);
        ɵɵlistener("mousedown", function ModalContainerComponent_Template_div_mousedown_19_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "width", directionX: "right" }); });
        ɵɵelementEnd();
        ɵɵelementStart(20, "div", 16);
        ɵɵlistener("mousedown", function ModalContainerComponent_Template_div_mousedown_20_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "both", directionX: "left", directionY: "top" }); });
        ɵɵelementEnd();
        ɵɵelementStart(21, "div", 17);
        ɵɵlistener("mousedown", function ModalContainerComponent_Template_div_mousedown_21_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "both", directionX: "right", directionY: "top" }); });
        ɵɵelementEnd();
        ɵɵelementStart(22, "div", 18);
        ɵɵlistener("mousedown", function ModalContainerComponent_Template_div_mousedown_22_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "both", directionX: "left", directionY: "bottom" }); });
        ɵɵelementEnd();
        ɵɵelementStart(23, "div", 19);
        ɵɵlistener("mousedown", function ModalContainerComponent_Template_div_mousedown_23_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "both", directionX: "right", directionY: "bottom" }); });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelement(24, "div", 20);
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵpropertyInterpolate("id", ctx.options.id);
        ɵɵproperty("ngStyle", ctx.position);
        ɵɵadvance(6);
        ɵɵtextInterpolate(ctx.options.title);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.config.titleBarButtons);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.options.buttonCollapse);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.options.buttonMaximize);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.options.buttonClose);
        ɵɵadvance(4);
        ɵɵproperty("ngIf", ctx.showStatusBar);
    } }, styles: [""] });
ModalContainerComponent = __decorate([
    ComponentRegister({
        uri: 'epsgis-modal-container',
        path: "components/modal/modal-container"
    })
], ModalContainerComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ModalContainerComponent, [{
        type: Component,
        args: [{
                selector: 'epsgis-modal-container',
                templateUrl: './modal-container.component.html',
                styleUrls: ['./modal-container.component.scss'],
            }]
    }], function () { return [{ type: ElementRef }, { type: ChangeDetectorRef }, { type: Renderer2 }, { type: NgZone }, { type: SsModalOptions }, { type: CommonService }, { type: PanelManagerService }, { type: WidgetManagerService }, { type: AppGlobalConfig }, { type: MapManagerService }]; }, { sspanelOverlay: [{
            type: ViewChild,
            args: ["ssmodal_overlay", { static: true }]
        }], sspanel_titlebar: [{
            type: ViewChild,
            args: ["ssmodal_titlebar", { static: true }]
        }], sspanel: [{
            type: ViewChild,
            args: ["ssmodal", { static: true }]
        }], modalElementRef: [{
            type: ViewChild,
            args: ['ssmodal', { static: true }]
        }] }); })();

class ModalManagerService {
    constructor(overlay, injector, parentModal, componentFactoryResolver, appRef, commonService) {
        this.overlay = overlay;
        this.injector = injector;
        this.parentModal = parentModal;
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.commonService = commonService;
        this.openModalsAtThisLevel = [];
        this.afterAllClosedAtThisLevel = new Subject();
        this.factories = new Map();
        this.factoriesArray = null;
        this.afterAllClose = defer(() => this.openModals.length ? this._afterAllClosed : this._afterAllClosed.pipe(startWith(undefined)));
        this.modalContainerClass = "ssmodal_container";
        this.factories = this.componentFactoryResolver["_factories"];
        if (this.factories) {
            this.factoriesArray = Array.from(this.factories);
        }
    }
    get openModals() {
        return this.parentModal ? this.parentModal.openModals : this.openModalsAtThisLevel;
    }
    get _afterAllClosed() {
        const parent = this.parentModal;
        return parent ? parent._afterAllClosed : this.afterAllClosedAtThisLevel;
    }
    createModalContainer() {
        let container = document.querySelector(this.modalContainerClass);
        if (container == null) {
            container = window.document.createElement("div");
            container.className = this.modalContainerClass;
            window.document.body.appendChild(container);
        }
        this.modalContainer = container;
    }
    create(config) {
        return this.open(config.content, config);
    }
    closeAll() {
        this.closeModals(this.openModals);
    }
    attachModalContainer2(overlayRef, config) {
        const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
        const injector = new PortalInjector(userInjector || this.injector, new WeakMap([
            [OverlayRef, overlayRef],
            [SsModalOptions, config]
        ]));
        const ContainerComponent = ModalContainerComponent;
        const containerPortal = new ComponentPortal(ContainerComponent, config.viewContainerRef, injector);
        const containerRef = overlayRef.attach(containerPortal);
        return containerRef.instance;
    }
    open(componentOrTemplateRef, config) {
        const configMerged = applyConfigDefaults(config || {}, new SsModalOptions());
        const modalContainerRef = this.attachModalContainer(configMerged);
        const modalRef = this.attachModalContent(componentOrTemplateRef, configMerged, modalContainerRef);
        modalContainerRef.instance.modalRef = modalRef;
        this.openModals.push(modalRef);
        modalRef.afterClose.subscribe(() => this.removeOpenModal(modalRef));
        return modalRef;
    }
    removeOpenModal(modalRef) {
        const index = this.openModals.indexOf(modalRef);
        if (index > -1) {
            this.openModals.splice(index, 1);
            if (!this.openModals.length) {
                this._afterAllClosed.next();
            }
        }
    }
    closeModals(dialogs) {
        let i = dialogs.length;
        while (i--) {
            dialogs[i].close();
            if (!this.openModals.length) {
                this._afterAllClosed.next();
            }
        }
    }
    attachModalContainer(config) {
        const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
        const injector = new PortalInjector(userInjector || this.injector, new WeakMap([
            [SsModalOptions, config]
        ]));
        this.createModalContainer();
        let inputs = {
            config: config
        };
        let inputProviders = Object.keys(inputs).map((inputName) => {
            return { provide: inputName, useValue: inputs[inputName] };
        });
        const ContainerComponent = ModalContainerComponent;
        const factory = this.componentFactoryResolver.resolveComponentFactory(ContainerComponent);
        const injectorc = Injector.create({ providers: inputProviders, parent: injector });
        const containerRef = factory.create(injectorc);
        this.modalContainer.appendChild(this.commonService.getComponentRootNode(containerRef));
        this.appRef.attachView(containerRef.hostView);
        return containerRef;
    }
    findComponent(name) {
        let comp = null;
        if (this.factories) {
            if (!this.factories || this.factories.size <= 0)
                return null;
            let item = this.factoriesArray.find((value, index, arr) => {
                return value[1].selector.toLowerCase() === name.toLowerCase() || value[0].name.toLowerCase() === name.toLocaleLowerCase();
            });
            if (item) {
                comp = item[0];
            }
        }
        else {
            const compInfo = findComponentInfo(name);
            if (compInfo) {
                return compInfo.component;
            }
        }
        return comp;
    }
    attachModalContent(componentOrTemplateRef, config, modalContainerRef) {
        const modalRef = new SsModalRef(config, modalContainerRef);
        if (componentOrTemplateRef instanceof TemplateRef) {
        }
        else if (componentOrTemplateRef && typeof componentOrTemplateRef !== 'string') {
            let inputs = {};
            if (config.componentParams) {
                inputs = config.componentParams;
            }
            let inputProviders = Object.keys(inputs).map((inputName) => {
                return { provide: inputName, useValue: inputs[inputName] };
            });
            let component = componentOrTemplateRef;
            if (this.factories && !this.factories.get(componentOrTemplateRef)) {
                component = this.findComponent(componentOrTemplateRef.name);
            }
            const factory = this.componentFactoryResolver.resolveComponentFactory(component);
            const injector = Injector.create({ providers: inputProviders, parent: this.createInjector(modalRef, config) });
            const compRef = factory.create(injector);
            setContentInstanceParams(compRef.instance, config.componentParams);
            modalContainerRef.instance.attachComponentPortal(compRef);
            modalRef.componentInstance = compRef.instance;
            modalRef.componentRef = compRef;
        }
        return modalRef;
    }
    createInjector(modalRef, config) {
        const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
        const injectionTokens = new WeakMap([[SsModalRef, modalRef]]);
        return new PortalInjector(userInjector || this.injector, injectionTokens);
    }
    ngOnDestroy() {
        this.closeModals(this.openModalsAtThisLevel);
        this.afterAllClosedAtThisLevel.complete();
    }
}
ModalManagerService.ɵfac = function ModalManagerService_Factory(t) { return new (t || ModalManagerService)(ɵɵinject(Overlay), ɵɵinject(Injector), ɵɵinject(ModalManagerService, 12), ɵɵinject(ComponentFactoryResolver), ɵɵinject(ApplicationRef), ɵɵinject(CommonService)); };
ModalManagerService.ɵprov = ɵɵdefineInjectable({ token: ModalManagerService, factory: ModalManagerService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ModalManagerService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: Overlay }, { type: Injector }, { type: ModalManagerService, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }, { type: ComponentFactoryResolver }, { type: ApplicationRef }, { type: CommonService }]; }, null); })();

class SettingService {
    constructor(req) {
        this.req = req;
        this.API_SAVE_SETTING = "api/setting/content";
    }
    getConfigContent(filePath) {
        return this.req.getJsonFile(filePath);
    }
    saveConfig(data) {
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
    }
}
SettingService.ɵfac = function SettingService_Factory(t) { return new (t || SettingService)(ɵɵinject(HttpReqService)); };
SettingService.ɵprov = ɵɵdefineInjectable({ token: SettingService, factory: SettingService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(SettingService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: HttpReqService }]; }, null); })();

class ServiceInjector {
    constructor(config, utils, commonService, httpService, configLoader, configManager, mapManager, panelManager, widgetManager, widgetPlaceHolder, layoutManager, jsEventManager, route, componentManager, modalManaer, settingService) {
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
        this.route.queryParams.subscribe(params => {
            this.config.urlParams = Object.assign(this.config.urlParams, params);
        });
    }
}
ServiceInjector.ɵfac = function ServiceInjector_Factory(t) { return new (t || ServiceInjector)(ɵɵinject(AppGlobalConfig), ɵɵinject(UtilsService), ɵɵinject(CommonService), ɵɵinject(HttpReqService), ɵɵinject(ConfigLoaderService), ɵɵinject(ConfigManagerService), ɵɵinject(MapManagerService), ɵɵinject(PanelManagerService), ɵɵinject(WidgetManagerService), ɵɵinject(WidgetPlaceHolderService), ɵɵinject(LayoutManagerService), ɵɵinject(EventManager), ɵɵinject(ActivatedRoute), ɵɵinject(ComponentLoaderService), ɵɵinject(ModalManagerService), ɵɵinject(SettingService)); };
ServiceInjector.ɵprov = ɵɵdefineInjectable({ token: ServiceInjector, factory: ServiceInjector.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ServiceInjector, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: AppGlobalConfig }, { type: UtilsService }, { type: CommonService }, { type: HttpReqService }, { type: ConfigLoaderService }, { type: ConfigManagerService }, { type: MapManagerService }, { type: PanelManagerService }, { type: WidgetManagerService }, { type: WidgetPlaceHolderService }, { type: LayoutManagerService }, { type: EventManager }, { type: ActivatedRoute }, { type: ComponentLoaderService }, { type: ModalManagerService }, { type: SettingService }]; }, null); })();

class SimpleLoaderService {
    constructor() {
    }
    static getInstance() {
        if (!this._instance) {
            this._instance = new SimpleLoaderService();
        }
        return this._instance;
    }
    is(type, obj) {
        let clas = Object.prototype.toString.call(obj).slice(8, -1);
        return obj !== undefined && obj !== null && clas === type;
    }
    isArray(item) {
        return this.is("Array", item);
    }
    getExtension(url) {
        url = url || "";
        let items = url.split("?")[0].split(".");
        return items[items.length - 1].toLowerCase();
    }
    createElement(config) {
        let e = document.createElement(config.element);
        for (let i in config) {
            if (i !== 'element' && i !== 'appendTo') {
                e[i] = config[i];
            }
        }
        let root = document.getElementsByTagName(config.appendTo)[0];
        return (typeof root.appendChild(e) === 'object');
    }
    elementLoaded(url, onLoad) {
        if (onLoad) {
            onLoad(url);
        }
    }
    elementReadyStateChanged(url, thisObj, onLoad) {
        if (thisObj.readyState === 'loaded' || thisObj.readyState === 'complete') {
            this.elementLoaded(url, onLoad);
        }
    }
    loadCss(url, onLoad) {
        let result = this.createElement({
            element: 'link',
            rel: 'stylesheet',
            type: 'text/css',
            href: url,
            onload: () => {
                this.elementLoaded(url, onLoad);
            },
            appendTo: 'head'
        });
        let ti = setInterval(() => {
            let styles = document.styleSheets;
            for (let i = 0; i < styles.length; i++) {
                if (styles[i].href &&
                    styles[i].href.substr(styles[i].href.indexOf(url), styles[i].href.length) === url) {
                    clearInterval(ti);
                    this.elementLoaded(url, onLoad);
                }
            }
        }, 500);
        return result;
    }
    loadJs(url, onLoad) {
        let result = this.createElement({
            element: 'script',
            type: 'text/javascript',
            onload: () => {
                this.elementLoaded(url, onLoad);
            },
            onreadystatechange: () => {
                this.elementReadyStateChanged(url, this, onLoad);
            },
            src: url,
            appendTo: 'body'
        });
        return result;
    }
    loadResources(ress, onOneBeginLoad, onOneLoad, onLoad) {
        let loaded = [];
        const checkHaveLoaded = (url) => {
            for (let i = 0; i < loaded.length; i++) {
                if (loaded[i] === url) {
                    return true;
                }
            }
            return false;
        };
        const _onOneLoad = (url) => {
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
        for (let i = 0; i < ress.length; i++) {
            this.loadResource(ress[i], onOneBeginLoad, _onOneLoad);
        }
    }
    loadResource(url, onBeginLoad, onLoad) {
        if (onBeginLoad) {
            onBeginLoad(url);
        }
        let type = this.getExtension(url);
        if (type.toLowerCase() === 'css') {
            this.loadCss(url, onLoad);
        }
        else {
            this.loadJs(url, onLoad);
        }
    }
}
SimpleLoaderService._instance = null;
const simpleLoader = SimpleLoaderService.getInstance();

class AuthService {
    constructor(req) {
        this.req = req;
        this._tokenKey = "";
        this._userKey = "__current_user";
        this._currentUser = null;
        this._tokenKey = this.req.getTokenKey();
    }
    saveInfo2Local(key, data) {
        if (window.sessionStorage) {
            sessionStorage.setItem(key, JSON.stringify(data));
        }
        else {
            console.log("浏览器不支持sessionStorage");
        }
    }
    getInfoFromLocal(key) {
        if (window.sessionStorage) {
            return sessionStorage.getItem(key);
        }
        else {
            console.log("浏览器不支持sessionStorage");
        }
        return "";
    }
    saveToken(data) {
        this.saveInfo2Local(this._tokenKey, data);
        this.req.setAccessToken(data.access_token);
    }
    getLocalToken() {
        let str = this.getInfoFromLocal(this._tokenKey);
        if (str != "") {
            return JSON.parse(str);
        }
        return null;
    }
    refreshToken(refresh_token) {
        return new Promise((resolve, reject) => {
            this.req.get('epsoffice/token/refresh', { "refresh_token": refresh_token }).then(result => {
                if (result.success) {
                    this.saveToken(result.data);
                }
                resolve(result);
            }).catch(err => reject(err));
        });
    }
    userLogin(username, password) {
        return new Promise((resolve, reject) => {
            this.req.post("epsoffice/user/login", { "username": username, "password": password })
                .then(result => {
                if (result.success) {
                    this._currentUser = result.data;
                    this.saveInfo2Local(this._userKey, result.data);
                    this.saveToken(result.data.token);
                }
                resolve(result);
            }).catch(reject);
        });
    }
    checkLogin() {
        return this.req.get("epsoffice/user/login/validate");
    }
    logout() {
        return new Promise((resove, reject) => {
            this.req.post("epsoffice/user/logout").then(result => {
                if (result.success) {
                    this.removeToken();
                }
                resove(result.success);
            }).catch(err => {
                console.error(err);
                resove(false);
            });
        });
    }
    removeToken() {
        this._currentUser = null;
        this.req.setAccessToken("");
        sessionStorage.removeItem(this._tokenKey);
        sessionStorage.removeItem(this._userKey);
    }
    getRemoteUser() {
        return new Promise((resolve, reject) => {
            this.req.get("epsoffice/user/login/info").then(result => {
                if (result.success) {
                    this._currentUser = result.data;
                    this.saveInfo2Local(this._userKey, result.data);
                    this._currentUser.token = this.getLocalToken();
                    resolve(result.data);
                }
                else {
                    console.error(result.msg);
                    resolve(null);
                }
            }).catch(err => {
                console.error(err);
                resolve(null);
            });
        });
    }
    getCurrentUser() {
        if (this._currentUser) {
            return this._currentUser;
        }
        const str = this.getInfoFromLocal(this._userKey);
        if (str) {
            const _user = JSON.parse(str);
            this._currentUser = _user;
            this._currentUser.token = this.getLocalToken();
        }
        return this._currentUser;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(ɵɵinject(HttpReqService)); };
AuthService.ɵprov = ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(AuthService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: HttpReqService }]; }, null); })();

class GISAuthService {
    static decrypt(str, pwd) {
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
    }
    static validateAuth(encryptCode) {
        setTimeout(() => {
            this.doValidateAuth(encryptCode);
        }, 0);
    }
    static doValidateAuth(encryptCode) {
        this.encryptCode = encryptCode;
        var enCodeStr = this.decrypt(this.encryptCode);
        var hosts = enCodeStr.split('|')[0];
        var deadline = enCodeStr.split('|')[1];
        this.authtype = enCodeStr.split('|')[2];
        let hostname = window.location.hostname.toUpperCase();
        if (hostname === "LOCALHOST") {
            return;
        }
        var bHostPass = false;
        var hostArry = hosts.split(',');
        hostArry.forEach(host => {
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
    }
    static isIE() {
        if (!!window["ActiveXObject"] || "ActiveXObject" in window) {
            return true;
        }
        else {
            return false;
        }
    }
    static getServerDate() {
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
    }
    static showAuthInfo(msg) {
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
    }
    static showAuthDlg(msg) {
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
    }
}
GISAuthService.message = "请获取开发授权！";
GISAuthService.authtype = "开发版";
GISAuthService.encryptCode = "";

function CompContainerComponent_ng_template_0_Template(rf, ctx) { }
class CompContainerComponent {
    constructor(serviceInjector, cdr, eventService, componentLoader) {
        this.serviceInjector = serviceInjector;
        this.cdr = cdr;
        this.eventService = eventService;
        this.componentLoader = componentLoader;
        this.jsonFileChange = new EventEmitter();
        this.configChange = new EventEmitter();
        this.autoLoad = true;
        this.eventService.rss.on(this.eventService._checkChangeDetector, (obj) => {
            UtilsService.detectChanges(this.cdr);
        });
    }
    get jsonFile() {
        return this._configJsonFile;
    }
    set jsonFile(value) {
        this._configJsonFile = value;
        this.configJsonFile = value;
        this.jsonFileChange.emit(value);
    }
    get config() {
        return this._config;
    }
    set config(value) {
        this._config = value;
        if (typeof value === "string") {
            this._configJsonFile = value;
            this.configJsonFile = value;
        }
        this.configChange.emit(value);
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.componentLoader.setViewContainerInHome(this.container);
        this.componentLoader.setServiceInjector(this.serviceInjector);
        if (this.autoLoad) {
            this._init();
        }
    }
    _init() {
        this.serviceInjector.layoutManager.startup();
        if (this.config) {
            this.serviceInjector.configManager.loadConfig(this.config);
        }
        else {
            let _configJsonFile = this.serviceInjector.config.appInfo.configFile;
            if (this.configJsonFile) {
                _configJsonFile = this.configJsonFile;
            }
            this.serviceInjector.configManager.loadConfig(_configJsonFile);
        }
    }
    clear() {
        this.serviceInjector.layoutManager._destroyPreloadWidgetIcons();
        this.serviceInjector.layoutManager._destroyOffPanelWidgets();
        this.serviceInjector.layoutManager._destroyWidgetPlaceholders();
        this.serviceInjector.layoutManager._destroyPreloadPanels();
        this.serviceInjector.layoutManager._destroyPreloadGroupPanels();
        this.serviceInjector.mapManager.destoryMap();
    }
    reload() {
        this.clear();
        this._init();
    }
}
CompContainerComponent.ɵfac = function CompContainerComponent_Factory(t) { return new (t || CompContainerComponent)(ɵɵdirectiveInject(ServiceInjector), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(EventEmitterService), ɵɵdirectiveInject(ComponentLoaderService)); };
CompContainerComponent.ɵcmp = ɵɵdefineComponent({ type: CompContainerComponent, selectors: [["epsgis-comp-container"]], viewQuery: function CompContainerComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(ComponentContainerDirective, 3, ViewContainerRef);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.container = _t.first);
    } }, inputs: { configJsonFile: ["config-json-file", "configJsonFile"], jsonFile: "jsonFile", config: "config", autoLoad: "autoLoad" }, outputs: { jsonFileChange: "jsonFileChange", configChange: "configChange" }, decls: 1, vars: 0, consts: [["component-host", ""]], template: function CompContainerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, CompContainerComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
    } }, directives: [ComponentContainerDirective], styles: ["epsgis-comp-container{width:100%;height:100%}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CompContainerComponent, [{
        type: Component,
        args: [{
                selector: 'epsgis-comp-container',
                templateUrl: './comp-container.component.html',
                styleUrls: ['./comp-container.component.scss'],
            }]
    }], function () { return [{ type: ServiceInjector }, { type: ChangeDetectorRef }, { type: EventEmitterService }, { type: ComponentLoaderService }]; }, { container: [{
            type: ViewChild,
            args: [ComponentContainerDirective, { read: ViewContainerRef, static: true }]
        }], configJsonFile: [{
            type: Input,
            args: ["config-json-file"]
        }], jsonFile: [{
            type: Input
        }], jsonFileChange: [{
            type: Output
        }], config: [{
            type: Input
        }], configChange: [{
            type: Output
        }], autoLoad: [{
            type: Input
        }] }); })();

class EpsGisCompContainerModule {
}
EpsGisCompContainerModule.ɵmod = ɵɵdefineNgModule({ type: EpsGisCompContainerModule });
EpsGisCompContainerModule.ɵinj = ɵɵdefineInjector({ factory: function EpsGisCompContainerModule_Factory(t) { return new (t || EpsGisCompContainerModule)(); }, providers: [], imports: [[
            CommonModule,
            EpsGisDirectivesModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(EpsGisCompContainerModule, { declarations: [CompContainerComponent], imports: [CommonModule,
        EpsGisDirectivesModule], exports: [CompContainerComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(EpsGisCompContainerModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    EpsGisDirectivesModule
                ],
                declarations: [
                    CompContainerComponent
                ],
                entryComponents: [CompContainerComponent],
                exports: [CompContainerComponent],
                providers: []
            }]
    }], null, null); })();

function SSModalComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵprojection(0);
} }
const _c0$a = ["*"];
let SSModalComponent = class SSModalComponent extends BasePanelComponent {
    constructor(modalService, viewContainerRef, _render, cdr) {
        super(_render, cdr);
        this.modalService = modalService;
        this.viewContainerRef = viewContainerRef;
        this._render = _render;
        this.cdr = cdr;
        this.mask = true;
        this.maskClosable = true;
        this.visible = false;
        this.closable = true;
        this.okLoading = false;
        this.okDisabled = false;
        this.cancelDisabled = false;
        this.cancelLoading = false;
        this.keyboard = true;
        this.noAnimation = false;
        this.zIndex = 1000;
        this.width = 520;
        this.closeIcon = 'close';
        this.okType = 'primary';
        this.iconType = 'question-circle';
        this.modalType = 'default';
        this.onOk = new EventEmitter();
        this.onCancel = new EventEmitter();
        this.afterOpen = new EventEmitter();
        this.afterClose = new EventEmitter();
        this.visibleChange = new EventEmitter();
        this.modalRef = null;
    }
    get afterOpenObservable() {
        return this.afterOpen.asObservable();
    }
    get afterCloseObservable() {
        return this.afterClose.asObservable();
    }
    ngOnInit() {
    }
    onCloseClick() {
    }
    onOkClick() {
    }
    getConfig() {
        const componentConfig = getConfigFromComponent(this);
        componentConfig.viewContainerRef = this.viewContainerRef;
        if (!this.content) {
            componentConfig.content = this.contentTemplateRef;
        }
        return componentConfig;
    }
    ngOnChanges(changes) {
        const { Visible } = changes, otherChanges = __rest(changes, ["Visible"]);
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
    }
    open() {
        if (!this.visible) {
            this.visible = true;
            this.visibleChange.emit(true);
        }
        if (!this.modalRef) {
            const config = this.getConfig();
            this.modalRef = this.modalService.create(config);
        }
    }
    close(result) {
        if (this.visible) {
            this.visible = false;
            this.visibleChange.emit(false);
        }
        if (this.modalRef) {
            this.modalRef.close(result);
            this.modalRef = null;
        }
    }
    destroy(result) {
        this.close(result);
    }
    triggerOk() {
        this.modalRef != null ? this.modalRef.triggerOk() : null;
    }
    triggerCancel() {
        this.modalRef != null ? this.modalRef.triggerCancel() : null;
    }
    getContentComponent() {
        return this.modalRef != null ? this.modalRef.getContentComponent() : null;
    }
    getElement() {
        return this.modalRef != null ? this.modalRef.getElement() : null;
    }
    getModalRef() {
        return this.modalRef;
    }
};
SSModalComponent.ɵfac = function SSModalComponent_Factory(t) { return new (t || SSModalComponent)(ɵɵdirectiveInject(ModalManagerService), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(Renderer2, 8), ɵɵdirectiveInject(ChangeDetectorRef, 8)); };
SSModalComponent.ɵcmp = ɵɵdefineComponent({ type: SSModalComponent, selectors: [["epsgis-modal"]], viewQuery: function SSModalComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(TemplateRef, 3);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentTemplateRef = _t.first);
    } }, inputs: { mask: "mask", maskClosable: "maskClosable", visible: "visible", closable: "closable", okLoading: "okLoading", okDisabled: "okDisabled", cancelDisabled: "cancelDisabled", cancelLoading: "cancelLoading", keyboard: "keyboard", noAnimation: "noAnimation", content: "content", componentParams: "componentParams", footer: "footer", getContainer: "getContainer", zIndex: "zIndex", width: "width", wrapClassName: "wrapClassName", className: "className", styles: "styles", title: "title", closeIcon: "closeIcon", maskStyle: "maskStyle", bodyStyle: "bodyStyle", okText: "okText", cancelText: "cancelText", okType: "okType", iconType: "iconType", modalType: "modalType", onOk: "onOk", onCancel: "onCancel" }, outputs: { onOk: "onOk", onCancel: "onCancel", afterOpen: "afterOpen", afterClose: "afterClose", visibleChange: "visibleChange" }, features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature], ngContentSelectors: _c0$a, decls: 1, vars: 0, template: function SSModalComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵtemplate(0, SSModalComponent_ng_template_0_Template, 1, 0, "ng-template");
    } }, styles: [".ssmodal_container[_ngcontent-%COMP%]{box-sizing:border-box;position:absolute;top:0;bottom:0;right:0;left:0;display:flex;justify-content:flex-start;align-content:flex-start;pointer-events:none}.sspanel_statusbar[_ngcontent-%COMP%]{box-sizing:border-box;flex:0 0 auto;display:flex;align-items:flex-end}.statusbar_content[_ngcontent-%COMP%]{box-sizing:border-box;flex:1 1 auto;overflow:hidden;text-align:left;text-overflow:ellipsis;white-space:nowrap}.statusbar_handle[_ngcontent-%COMP%]{box-sizing:border-box;display:flex}.statusbar_handle_resizable[_ngcontent-%COMP%]{cursor:se-resize}"], changeDetection: 0 });
SSModalComponent = __decorate([
    ComponentRegister({
        uri: 'epsgis-modal',
        path: "epsgis/components/modal"
    })
], SSModalComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(SSModalComponent, [{
        type: Component,
        args: [{
                selector: 'epsgis-modal',
                template: ` <ng-template><ng-content></ng-content></ng-template> `,
                styleUrls: ['./modal.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ModalManagerService }, { type: ViewContainerRef }, { type: Renderer2, decorators: [{
                type: Optional
            }] }, { type: ChangeDetectorRef, decorators: [{
                type: Optional
            }] }]; }, { mask: [{
            type: Input
        }], maskClosable: [{
            type: Input
        }], visible: [{
            type: Input
        }], closable: [{
            type: Input
        }], okLoading: [{
            type: Input
        }], okDisabled: [{
            type: Input
        }], cancelDisabled: [{
            type: Input
        }], cancelLoading: [{
            type: Input
        }], keyboard: [{
            type: Input
        }], noAnimation: [{
            type: Input
        }], content: [{
            type: Input
        }], componentParams: [{
            type: Input
        }], footer: [{
            type: Input
        }], getContainer: [{
            type: Input
        }], zIndex: [{
            type: Input
        }], width: [{
            type: Input
        }], wrapClassName: [{
            type: Input
        }], className: [{
            type: Input
        }], styles: [{
            type: Input
        }], title: [{
            type: Input
        }], closeIcon: [{
            type: Input
        }], maskStyle: [{
            type: Input
        }], bodyStyle: [{
            type: Input
        }], okText: [{
            type: Input
        }], cancelText: [{
            type: Input
        }], okType: [{
            type: Input
        }], iconType: [{
            type: Input
        }], modalType: [{
            type: Input
        }], onOk: [{
            type: Input
        }, {
            type: Output
        }], onCancel: [{
            type: Input
        }, {
            type: Output
        }], afterOpen: [{
            type: Output
        }], afterClose: [{
            type: Output
        }], visibleChange: [{
            type: Output
        }], contentTemplateRef: [{
            type: ViewChild,
            args: [TemplateRef, { static: true }]
        }] }); })();

const _c0$b = ["ss-modal-footer", ""];
function SsModalFooterComponent_ng_container_0_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 4);
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵproperty("innerHTML", ctx_r3.config.title, ɵɵsanitizeHtml);
} }
function SsModalFooterComponent_ng_container_0_ng_container_3_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 6);
    ɵɵlistener("click", function SsModalFooterComponent_ng_container_0_ng_container_3_button_1_Template_button_click_0_listener() { ɵɵrestoreView(_r8); const button_r6 = ctx.$implicit; const ctx_r7 = ɵɵnextContext(3); return ctx_r7.onButtonClick(button_r6); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const button_r6 = ctx.$implicit;
    const ctx_r5 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r5.getButtonClass(button_r6));
    ɵɵproperty("hidden", !ctx_r5.getButtonCallableProp(button_r6, "show"));
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", button_r6.label, " ");
} }
function SsModalFooterComponent_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SsModalFooterComponent_ng_container_0_ng_container_3_button_1_Template, 2, 4, "button", 5);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r4.buttons);
} }
function SsModalFooterComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementContainerStart(1);
    ɵɵtemplate(2, SsModalFooterComponent_ng_container_0_div_2_Template, 1, 1, "div", 2);
    ɵɵtemplate(3, SsModalFooterComponent_ng_container_0_ng_container_3_Template, 2, 1, "ng-container", 3);
    ɵɵelementContainerEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r0.buttonsFooter);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.buttonsFooter);
} }
function SsModalFooterComponent_ng_template_1_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 9);
    ɵɵlistener("click", function SsModalFooterComponent_ng_template_1_button_0_Template_button_click_0_listener() { ɵɵrestoreView(_r12); const ctx_r11 = ɵɵnextContext(2); return ctx_r11.onCancel(); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(2);
    ɵɵproperty("disabled", ctx_r9.config.cancelDisabled);
    ɵɵattribute("cdkFocusInitial", ctx_r9.config.autofocus === "cancel");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r9.config.cancelText || ctx_r9.locale.cancelText, " ");
} }
function SsModalFooterComponent_ng_template_1_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 10);
    ɵɵlistener("click", function SsModalFooterComponent_ng_template_1_button_1_Template_button_click_0_listener() { ɵɵrestoreView(_r14); const ctx_r13 = ɵɵnextContext(2); return ctx_r13.onOk(); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(2);
    ɵɵproperty("disabled", ctx_r10.config.okDisabled);
    ɵɵattribute("cdkFocusInitial", ctx_r10.config.autofocus === "ok");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r10.config.okText || ctx_r10.locale.okText, " ");
} }
function SsModalFooterComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, SsModalFooterComponent_ng_template_1_button_0_Template, 2, 3, "button", 7);
    ɵɵtemplate(1, SsModalFooterComponent_ng_template_1_button_1_Template, 2, 3, "button", 8);
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r2.config.cancelText !== null);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.config.okText !== null);
} }
class SsModalFooterComponent {
    constructor(config) {
        this.config = config;
        this.buttonsFooter = false;
        this.buttons = [];
        this.locale = { okText: "确定", cancelText: "取消" };
        this.cancelTriggered = new EventEmitter();
        this.okTriggered = new EventEmitter();
        this.destroy$ = new Subject();
        if (Array.isArray(config.footer)) {
            this.buttonsFooter = true;
            this.buttons = config.footer.map(mergeDefaultOption);
        }
    }
    getButtonClass(button) {
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
    }
    onCancel() {
        this.cancelTriggered.emit();
    }
    onOk() {
        this.okTriggered.emit();
    }
    getButtonCallableProp(options, prop) {
        const value = options[prop];
        if (this.modalRef) {
            const componentInstance = this.modalRef.getContentComponent();
            return typeof value === 'function' ? value.apply(options, componentInstance && [componentInstance]) : value;
        }
        return false;
    }
    onButtonClick(options) {
        const loading = this.getButtonCallableProp(options, 'loading');
        if (!loading) {
            const result = this.getButtonCallableProp(options, 'onClick');
            if (options.autoLoading && isPromise(result)) {
                options.loading = true;
                result.then(() => (options.loading = false)).catch(() => (options.loading = false));
            }
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
SsModalFooterComponent.ɵfac = function SsModalFooterComponent_Factory(t) { return new (t || SsModalFooterComponent)(ɵɵdirectiveInject(SsModalOptions)); };
SsModalFooterComponent.ɵcmp = ɵɵdefineComponent({ type: SsModalFooterComponent, selectors: [["div", "ss-modal-footer", ""]], hostAttrs: [1, ""], inputs: { modalRef: "modalRef" }, outputs: { cancelTriggered: "cancelTriggered", okTriggered: "okTriggered" }, attrs: _c0$b, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["defaultFooterButtons", ""], [3, "innerHTML", 4, "ngIf"], [4, "ngIf"], [3, "innerHTML"], ["nz-button", "", 3, "hidden", "class", "click", 4, "ngFor", "ngForOf"], ["nz-button", "", 3, "hidden", "click"], ["nz-button", "", "class", "ss-btn ss-btn-default", 3, "disabled", "click", 4, "ngIf"], ["nz-button", "", "class", "ss-btn ss-btn-primary ", 3, "disabled", "click", 4, "ngIf"], ["nz-button", "", 1, "ss-btn", "ss-btn-default", 3, "disabled", "click"], ["nz-button", "", 1, "ss-btn", "ss-btn-primary", 3, "disabled", "click"]], template: function SsModalFooterComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, SsModalFooterComponent_ng_container_0_Template, 4, 2, "ng-container", 0);
        ɵɵtemplate(1, SsModalFooterComponent_ng_template_1_Template, 2, 2, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = ɵɵreference(2);
        ɵɵproperty("ngIf", ctx.config.footer)("ngIfElse", _r1);
    } }, directives: [NgIf, NgForOf], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(SsModalFooterComponent, [{
        type: Component,
        args: [{
                selector: 'div[ss-modal-footer]',
                template: `
    <ng-container *ngIf="config.footer; else defaultFooterButtons">
      <ng-container>
        <div *ngIf="!buttonsFooter" [innerHTML]="config.title"></div>
        <ng-container *ngIf="buttonsFooter">
          <button
            *ngFor="let button of buttons"
            nz-button
            (click)="onButtonClick(button)"
            [hidden]="!getButtonCallableProp(button, 'show')"
            [class]="getButtonClass(button)"
          >
            {{ button.label }}
          </button>
        </ng-container>
      </ng-container>
    </ng-container>
    <ng-template #defaultFooterButtons>
      <button
        *ngIf="config.cancelText !== null"
        [attr.cdkFocusInitial]="config.autofocus === 'cancel'"
        nz-button
        (click)="onCancel()"
        [disabled]="config.cancelDisabled"
        class="ss-btn ss-btn-default"
      >
        {{ config.cancelText || locale.cancelText }}
      </button>
      <button
        *ngIf="config.okText !== null"
        [attr.cdkFocusInitial]="config.autofocus === 'ok'"
        nz-button
        class="ss-btn ss-btn-primary "
        (click)="onOk()"
        [disabled]="config.okDisabled"
      >
        {{ config.okText || locale.okText }}
      </button>
    </ng-template>
  `,
                host: {
                    class: ''
                },
                changeDetection: ChangeDetectionStrategy.Default
            }]
    }], function () { return [{ type: SsModalOptions }]; }, { cancelTriggered: [{
            type: Output
        }], okTriggered: [{
            type: Output
        }], modalRef: [{
            type: Input
        }] }); })();
function mergeDefaultOption(options) {
    return Object.assign({ type: null, size: 'default', autoLoading: true, show: true, loading: false, disabled: false }, options);
}

class BaseMapComponent extends BaseWidgetComponent {
    constructor(componentLoader) {
        super();
        this.componentLoader = componentLoader;
        this._is3d = false;
    }
    get is3D() {
        return this._is3d;
    }
    set is3D(val) {
        this._is3d = val;
        this.globalParams.mapConfig.is3D = val;
    }
    ngOnInit() {
        this.componentLoader.setViewContainerInMap(this.container);
        super.ngOnInit();
    }
    setProps(options) {
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
        this.state = WidgetState.opened;
        this.name = (_a = options.manifest) === null || _a === void 0 ? void 0 : _a.name;
        this.inPanel = (_c = (_b = options.manifest) === null || _b === void 0 ? void 0 : _b.properties) === null || _c === void 0 ? void 0 : _c.inPanel;
        this.label = "地图";
        this.uri = this.getCompInfo().uri;
        this.folderUrl = this.globalParams.widgetRootPath + "/" + this.getCompInfo().path + "/";
        this.widgetConfig.folderUrl = this.folderUrl;
        super.setPosition(this.appConfig.map.position);
    }
    initMap() {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(null);
        });
    }
}
BaseMapComponent.ɵfac = function BaseMapComponent_Factory(t) { return new (t || BaseMapComponent)(ɵɵdirectiveInject(ComponentLoaderService)); };
BaseMapComponent.ɵdir = ɵɵdefineDirective({ type: BaseMapComponent, viewQuery: function BaseMapComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(ComponentContainerDirective, 3, ViewContainerRef);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.container = _t.first);
    } }, features: [ɵɵInheritDefinitionFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(BaseMapComponent, [{
        type: Directive
    }], function () { return [{ type: ComponentLoaderService }]; }, { container: [{
            type: ViewChild,
            args: [ComponentContainerDirective, { read: ViewContainerRef, static: true }]
        }] }); })();

class SsModalFooterDirective {
    constructor(ssModalRef, templateRef) {
        this.ssModalRef = ssModalRef;
        this.templateRef = templateRef;
        if (this.ssModalRef) {
            this.ssModalRef.updateConfig({
                footer: this.templateRef
            });
        }
    }
}
SsModalFooterDirective.ɵfac = function SsModalFooterDirective_Factory(t) { return new (t || SsModalFooterDirective)(ɵɵdirectiveInject(SsModalRef, 8), ɵɵdirectiveInject(TemplateRef)); };
SsModalFooterDirective.ɵdir = ɵɵdefineDirective({ type: SsModalFooterDirective, selectors: [["", "SsModalFooter", ""]], exportAs: ["SsModalFooter"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(SsModalFooterDirective, [{
        type: Directive,
        args: [{
                selector: '[SsModalFooter]',
                exportAs: 'SsModalFooter'
            }]
    }], function () { return [{ type: SsModalRef, decorators: [{
                type: Optional
            }] }, { type: TemplateRef }]; }, null); })();

class SSModalAPI {
}

const _c0$c = ["pdfViewerContainer"];
function PDFViewerComponent_iframe_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "iframe", 3);
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵstyleProp("height", ctx_r1.pdfViewHeight);
    ɵɵproperty("src", ctx_r1.pdfUrl, ɵɵsanitizeResourceUrl);
} }
let PDFViewerComponent = class PDFViewerComponent {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
        this.width = 0;
        this.height = 0;
        this.ready = new EventEmitter(false);
        this.pdfViewHeight = "600px";
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.resetViewHeight();
        }, 1000);
    }
    ngOnInit() {
        this.pdfUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.viewerUrl + "?file=" + this.source);
        this.ready.emit("pdf viewer initialize!");
    }
    resetViewHeight() {
        let height = this.getMainWindowHeight();
        if (height > 0) {
            this.pdfViewHeight = height - 5 + "px";
        }
        else {
            this.pdfViewHeight = "600px";
        }
    }
    getMainWindowHeight() {
        let parentNode = this.pdfViewerContainer.nativeElement.parentNode;
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
            let contentNode = null;
            while (parentNode) {
                if (parentNode.childNodes && parentNode.childNodes.length > 0) {
                    for (const child of parentNode.childNodes) {
                        if (child.nodeName.toLocaleUpperCase() === "NZ-CONTENT") {
                            contentNode = child;
                            break;
                        }
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
    }
};
PDFViewerComponent.ɵfac = function PDFViewerComponent_Factory(t) { return new (t || PDFViewerComponent)(ɵɵdirectiveInject(DomSanitizer)); };
PDFViewerComponent.ɵcmp = ɵɵdefineComponent({ type: PDFViewerComponent, selectors: [["pdf-viewer"]], viewQuery: function PDFViewerComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$c, 1);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.pdfViewerContainer = _t.first);
    } }, inputs: { width: "width", height: "height", viewerUrl: "viewerUrl", source: "source" }, outputs: { ready: "ready" }, decls: 3, vars: 1, consts: [[1, "pdfViewerContainer"], ["pdfViewerContainer", ""], ["frameborder", "0", 3, "src", "height", 4, "ngIf"], ["frameborder", "0", 3, "src"]], template: function PDFViewerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0, 1);
        ɵɵtemplate(2, PDFViewerComponent_iframe_2_Template, 1, 3, "iframe", 2);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.pdfUrl);
    } }, directives: [NgIf], styles: ["iframe[_ngcontent-%COMP%]{width:100%;height:100%;border:0}"] });
PDFViewerComponent = __decorate([
    ComponentRegister({
        uri: "pdf-viewer",
        path: "components/shared/ngxviewer/pdf-viewer"
    })
], PDFViewerComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(PDFViewerComponent, [{
        type: Component,
        args: [{
                selector: "pdf-viewer",
                templateUrl: "./pdf-viewer.component.html",
                styleUrls: ["./pdf-viewer.component.scss"],
            }]
    }], function () { return [{ type: DomSanitizer }]; }, { pdfViewerContainer: [{
            type: ViewChild,
            args: ["pdfViewerContainer"]
        }], width: [{
            type: Input
        }], height: [{
            type: Input
        }], viewerUrl: [{
            type: Input
        }], source: [{
            type: Input
        }], ready: [{
            type: Output
        }] }); })();

const _c0$d = ["imageViewerContainer"];
const _c1$7 = ["showImg"];
function ImageViewerComponent_div_16_img_11_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "img", 55);
    ɵɵlistener("click", function ImageViewerComponent_div_16_img_11_Template_img_click_0_listener() { ɵɵrestoreView(_r9); const imgUrl_r6 = ctx.$implicit; const i_r7 = ctx.index; const ctx_r8 = ɵɵnextContext(2); return ctx_r8.changeCurrentImageUrl(imgUrl_r6, i_r7); });
    ɵɵelementEnd();
} if (rf & 2) {
    const imgUrl_r6 = ctx.$implicit;
    ɵɵproperty("src", imgUrl_r6, ɵɵsanitizeUrl);
} }
function ImageViewerComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵnamespaceHTML();
    ɵɵelementStart(0, "div", 43);
    ɵɵelementStart(1, "div", 44);
    ɵɵlistener("click", function ImageViewerComponent_div_16_Template_div_click_1_listener() { ɵɵrestoreView(_r11); const _r4 = ɵɵreference(10); const ctx_r10 = ɵɵnextContext(); const _r1 = ɵɵreference(3); return ctx_r10.previousImg(_r4, _r1); });
    ɵɵnamespaceSVG();
    ɵɵelementStart(2, "svg", 45);
    ɵɵelement(3, "path", 46);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵnamespaceHTML();
    ɵɵelementStart(4, "div", 47);
    ɵɵlistener("click", function ImageViewerComponent_div_16_Template_div_click_4_listener() { ɵɵrestoreView(_r11); const _r4 = ɵɵreference(10); const ctx_r12 = ɵɵnextContext(); const _r1 = ɵɵreference(3); return ctx_r12.nextImg(_r4, _r1); });
    ɵɵnamespaceSVG();
    ɵɵelementStart(5, "svg", 48);
    ɵɵelement(6, "path", 49);
    ɵɵelement(7, "path", 50);
    ɵɵelement(8, "path", 51);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵnamespaceHTML();
    ɵɵelementStart(9, "div", 52, 53);
    ɵɵtemplate(11, ImageViewerComponent_div_16_img_11_Template, 1, 1, "img", 54);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(9);
    ɵɵstyleProp("left", ctx_r3.moreImgInitLeft + "px");
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r3.imageSources);
} }
let ImageViewerComponent = class ImageViewerComponent {
    constructor(domSanitizer, eventService) {
        this.domSanitizer = domSanitizer;
        this.eventService = eventService;
        this.width = 0;
        this.height = 0;
        this.first = 0;
        this.ready = new EventEmitter(false);
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
    ngOnInit() {
        this.convertUrl(this.source);
    }
    convertUrl(sources) {
        this.imageSources.splice(0);
        if (sources && sources.length > 0) {
            sources.forEach((imgUrl) => {
                this.imageSources.push(this.domSanitizer.bypassSecurityTrustResourceUrl(imgUrl));
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
    }
    changeImageSources(sources) {
        this.source = sources;
        this.convertUrl(this.source);
    }
    currentImageLoaded(img, viewer) {
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
            viewer.addEventListener("DOMMouseScroll", (e) => {
                this.currentImageZoomByWheel(e);
            });
        }
        else {
            viewer.addEventListener("mousewheel", (e) => {
                this.currentImageZoomByWheel(e);
            });
        }
    }
    preOrNextImg(type) {
        let index = this.imageSources.indexOf(this.currentImageUrl);
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
    }
    changeCurrentImg() {
        let matrix = this.getMatrix(this.radian, this.x, this.y);
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
    }
    getMatrix(radian, x, y) {
        let Cos = Math.cos(radian), Sin = Math.sin(radian);
        return {
            M11: Cos * x,
            M12: -Sin * y,
            M21: Sin * x,
            M22: Cos * y,
        };
    }
    vertical() {
        this.radian = Math.PI - this.radian;
        this.y *= -1;
    }
    horizontal() {
        this.radian = Math.PI - this.radian;
        this.x *= -1;
    }
    rotate(radian) {
        this.radian = radian;
    }
    rotateLeftBy90() {
        this.radian -= Math.PI / 2;
    }
    rotateRightBy90() {
        this.radian += Math.PI / 2;
    }
    rotateByDegress(degress) {
        this.radian = (degress * Math.PI) / 180;
    }
    getZoom(scale, zoom) {
        return scale > 0 && scale > -zoom
            ? zoom
            : scale < 0 && scale < zoom
                ? -zoom
                : 0;
    }
    scale(zoom) {
        if (zoom) {
            let hZoom = this.getZoom(this.x, zoom), vZoom = this.getZoom(this.y, zoom);
            if (hZoom && vZoom) {
                this.x += hZoom;
                this.y += vZoom;
            }
        }
    }
    zoomin() {
        this.scale(Math.abs(this.zoom));
    }
    zoomout() {
        this.scale(-Math.abs(this.zoom));
    }
    reset() {
        this.radian = 0;
        this.x = 1;
        this.y = 1;
        this.zoom = 0.1;
        if (this.currentImage) {
            this.currentImage.style.top = this.initTop + "px";
            this.currentImage.style.left = this.initLeft + "px";
        }
    }
    imageZoomin() {
        this.zoomin();
        this.changeCurrentImg();
    }
    imageZoomout() {
        this.zoomout();
        this.changeCurrentImg();
    }
    rotateLeft() {
        this.rotateLeftBy90();
        this.changeCurrentImg();
    }
    rotateRight() {
        this.rotateRightBy90();
        this.changeCurrentImg();
    }
    flipVertical() {
        this.horizontal();
        this.changeCurrentImg();
    }
    flipHorizontal() {
        this.vertical();
        this.changeCurrentImg();
    }
    currentImgReset() {
        this.reset();
        this.changeCurrentImg();
    }
    previousImg(moreImg, viewer) {
        let moveVal = Number(moreImg.style.left.split("px")[0]) + viewer.clientWidth;
        this.moreImgInitLeft = moveVal < 0 ? moveVal : 0;
        if (this.moreImgInitLeft <= 0) {
            this.moreImgInitLeft = 30;
        }
    }
    nextImg(moreImg, viewer) {
        let moveVal = Number(moreImg.style.left.split("px")[0]) - viewer.clientWidth;
        this.moreImgInitLeft =
            -moreImg.clientWidth < moveVal ? moveVal : this.moreImgInitLeft;
        if (this.moreImgInitLeft <= 0) {
            this.moreImgInitLeft = 30;
        }
    }
    changeCurrentImageUrl(imgUrl, index) {
        this.currentImageUrl = imgUrl;
        this.currentImgReset();
        this.eventService.rss.emit(this.eventService._imageViewerIndexChanged, {
            index: index,
        });
    }
    changeCurrentIndex(index) {
        if (index >= 0 && index < this.imageSources.length) {
            this.currentImageUrl = this.imageSources[index];
            this.currentImgReset();
        }
    }
    currentImageZoomByWheel(e) {
        e.preventDefault();
        let scale = (e.wheelDelta ? e.wheelDelta / -180 : (e.detail || 0) / 3) *
            Math.abs(this.zoom);
        this.scale(scale);
        if (this.x >= 0.1 && this.y >= 0.1) {
            this.changeCurrentImg();
        }
    }
    currentImageDragStart(e) {
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
    }
    setImageHeight() {
        const height = this.getMainWindowHeight();
        if (height !== this.mainWindowHeight) {
            this.mainWindowHeight = height;
            if (this.imageSources.length > 1) {
                this.imageViewHeight = height - 96 + "px";
            }
            else {
                this.imageViewHeight = height - 46 + "px";
            }
        }
    }
    currentImageDrag(e) {
        this.setImageHeight();
        if (this.isStartMove) {
            let offsetX = e.clientX - this.dragStartClientX;
            let offsetY = e.clientY - this.dragStartClientY;
            if (this.currentImage) {
                this.currentImage.style.top = this.currentImageTempTop + offsetY + "px";
                this.currentImage.style.left =
                    this.currentImageTempLeft + offsetX + "px";
            }
        }
    }
    currentImageDragEnd(e) {
        if (this.currentImage) {
            this.currentImage.style.transition = "all 0.5s ease-out";
        }
        this.isStartMove = false;
    }
    cancleCurrentImageDrag(e) {
        e.preventDefault();
    }
    getMainWindowHeight() {
        let parentNode = this.imageViewerContainer.nativeElement.parentNode;
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
            let contentNode = null;
            while (parentNode) {
                if (parentNode.childNodes && parentNode.childNodes.length > 0) {
                    for (const child of parentNode.childNodes) {
                        if (child.nodeName.toLocaleUpperCase() === "NZ-CONTENT") {
                            contentNode = child;
                            break;
                        }
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
    }
    checkBrowser() {
        let browser = {}, ua = navigator.userAgent;
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
    }
};
ImageViewerComponent.ɵfac = function ImageViewerComponent_Factory(t) { return new (t || ImageViewerComponent)(ɵɵdirectiveInject(DomSanitizer), ɵɵdirectiveInject(EventEmitterService)); };
ImageViewerComponent.ɵcmp = ɵɵdefineComponent({ type: ImageViewerComponent, selectors: [["image-viewer"]], viewQuery: function ImageViewerComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$d, 1);
        ɵɵviewQuery(_c1$7, 1);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.imageViewerContainer = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.showImg = _t.first);
    } }, inputs: { width: "width", height: "height", source: "source", first: "first" }, outputs: { ready: "ready" }, decls: 43, vars: 6, consts: [[1, "imageViewerContainer"], ["imageViewerContainer", ""], [1, "imageViewer", 3, "dragstart", "mousedown", "mousemove", "mouseup"], ["imageViewer", ""], [3, "src", "load"], ["showImg", ""], [1, "previousImg", 3, "click"], ["aria-hidden", "true", "title", "\u4E0A\u4E00\u5F20", 1, "fa", "fa-chevron-circle-left"], ["t", "1588945968636", "viewBox", "0 0 1024 1024", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "p-id", "18261", "width", "60", "height", "60", 1, "icon"], ["d", "M564.3264 737.0752l41.5744-41.5744-184.4224-184.1152 184.4224-184.1152-41.5744-41.5744L338.944 511.3856z", "p-id", "18262"], ["d", "M511.7952 101.5808c-226.304 0-409.8048 183.5008-409.8048 409.8048s183.5008 409.8048 409.8048 409.8048S921.6 737.792 921.6 511.3856 738.0992 101.5808 511.7952 101.5808z m0 58.5728c194.048 0 351.3344 157.2864 351.3344 351.3344s-157.3888 351.232-351.3344 351.232c-194.048 0-351.3344-157.2864-351.3344-351.3344 0-93.184 36.9664-182.4768 102.912-248.4224s155.2384-102.8096 248.4224-102.8096z", "p-id", "18263"], [1, "nextImg", 3, "click"], ["aria-hidden", "true", "title", "\u4E0B\u4E00\u5F20", 1, "fa", "fa-chevron-circle-right"], ["t", "1588946002551", "viewBox", "0 0 1024 1024", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "p-id", "18478", "width", "60", "height", "60", 1, "icon"], ["d", "M459.3664 737.0752L417.792 695.5008l184.4224-184.1152L417.792 327.2704l41.5744-41.5744 225.3824 225.6896z", "p-id", "18479"], ["d", "M511.7952 101.5808c-226.304 0-409.8048 183.5008-409.8048 409.8048s183.5008 409.8048 409.8048 409.8048S921.6 737.792 921.6 511.3856 738.0992 101.5808 511.7952 101.5808z m0 58.5728c194.048 0 351.3344 157.2864 351.3344 351.3344s-157.3888 351.232-351.3344 351.232c-194.048 0-351.3344-157.2864-351.3344-351.3344 0-93.184 36.9664-182.4768 102.912-248.4224s155.2384-102.8096 248.4224-102.8096z", "p-id", "18480"], ["class", "smallImageViewer", 4, "ngIf"], [1, "imageTools"], ["title", "\u653E\u5927", 1, "toolsBtn", "imageZoomin", 3, "click"], ["t", "1588941022678", "viewBox", "0 0 1027 1024", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "p-id", "8990", "width", "20", "height", "20", 1, "icon"], ["d", "M722.489 642.844c45.511-62.577 73.955-136.533 73.955-216.177 0-204.8-164.977-369.778-369.777-369.778S56.889 221.867 56.889 426.667s164.978 369.777 369.778 369.777c79.644 0 153.6-28.444 216.177-68.266l221.867 221.866c22.756 22.756 56.889 22.756 79.645 0 22.755-22.755 22.755-56.888 0-79.644L722.489 642.844z m-295.822 96.712c-170.667 0-312.89-142.223-312.89-312.89S256 113.779 426.668 113.779 739.556 256 739.556 426.667s-142.223 312.889-312.89 312.889", "p-id", "8991"], ["d", "M227.556 398.222h398.222v56.89H227.556z", "p-id", "8992"], ["d", "M398.222 227.556h56.89v398.222h-56.89z", "p-id", "8993"], ["title", "\u7F29\u5C0F", 1, "toolsBtn", "imageZoomout", 3, "click"], ["t", "1588941306698", "viewBox", "0 0 1024 1024", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "p-id", "9115", "width", "20", "height", "20", 1, "icon"], ["d", "M446.258717 823.960011c-51.124378 0-100.745519-10.005888-147.456377-29.814026-45.097104-19.050891-85.673242-46.388517-120.438023-81.153298-34.762735-34.764781-62.102407-75.340919-81.153298-120.438023-19.803022-46.709835-29.814026-96.324836-29.814026-147.449213s10.011005-100.745519 29.814026-147.456377c19.050891-45.097104 46.38954-85.673242 81.153298-120.438023 34.764781-34.762735 75.340919-62.102407 120.438023-81.153298 46.709835-19.803022 96.331999-29.814026 147.456377-29.814026 51.124378 0 100.739379 10.011005 147.449213 29.814026 45.097104 19.050891 85.673242 46.38954 120.438023 81.153298 34.764781 34.764781 62.102407 75.340919 81.153298 120.438023 19.808138 46.709835 29.813003 96.331999 29.813003 147.456377s-10.005888 100.739379-29.813003 147.449213c-19.050891 45.097104-46.388517 85.673242-81.153298 120.438023-34.764781 34.764781-75.340919 62.102407-120.438023 81.153298-46.604434 19.808138-96.220459 29.814026-147.449213 29.814026z m0-688.833451c-170.920788 0-309.97889 139.058103-309.978891 309.978891 0 170.915671 139.058103 309.971727 309.978891 309.971727 170.915671 0 309.971727-139.057079 309.971727-309.971727 0-170.920788-138.951679-309.97889-309.971727-309.978891z m0 0", "p-id", "9116"], ["d", "M924.025031 957.314205c-8.823969 0-17.646915-3.337002-24.321942-10.115382L680.137395 727.635175c-13.453407-13.453407-13.453407-35.307134 0-48.76054 13.453407-13.453407 35.300994-13.453407 48.755424 0l219.563648 219.565694c13.453407 13.453407 13.453407 35.305087 0 48.759518-6.779404 6.77838-15.603373 10.114358-24.431436 10.114358z m0 0", "p-id", "9117"], ["d", "M602.106204 488.047472H290.730501c-16.679891 0-30.133298-13.453407-30.133298-30.135344 0-16.685008 13.453407-30.139437 30.133298-30.139438h311.265186c16.687054 0 30.140461 13.453407 30.140461 30.139438 0 16.681938-13.45443 30.135344-30.029944 30.135344z m0 0", "p-id", "9118"], ["title", "\u5411\u5DE6\u65CB\u8F6C", 1, "toolsBtn", "rotateLeft", 3, "click"], ["t", "1588941359139", "viewBox", "0 0 1024 1024", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "p-id", "9333", "width", "20", "height", "20", 1, "icon"], ["d", "M296.78775165 822.42764344a29.24918237 29.24918237 0 0 0 11.88822868 9.74972721 366.76451243 366.76451243 0 0 0 423.03239697-29.18019793c162.18119742-127.48228586 196.37422746-360.55595902 75.100495-518.98903088S456.301571 100.94781045 292.07385008 230.29266234a90.07000608 90.07000608 0 0 0-13.17592873 10.96844358c-12.57806845-15.8433068-23.52351697-30.99677536-33.82511584-43.8047899-12.8769982-16.97004443-22.07485451-30.2149576-25.70800781-33.96308395a18.16576575 18.16576575 0 0 0-14.57860182-10.00266835 19.33849276 19.33849276 0 0 0-21.70694032 16.39517847l0.3679142 1.14973193-1.33368944 20.67218142-19.49945517 135.66837756-3.1502653 18.78662109-2.71336744 16.09624873a19.82137999 19.82137999 0 0 0 3.05828656 14.14170319 16.09624795 16.09624795 0 0 0 12.44010034 7.08234912l15.86630188 2.02352844 18.62565868 2.32245896 134.08174776 13.79678406 19.75239556 1.9085554 1.14973193-0.3679142a21.08608498 21.08608498 0 0 0 21.3850155-17.63688915 18.39571183 18.39571183 0 0 0-6.43849871-16.71710329c-2.52941073-4.1620299-12.83100961-16.97004443-25.68501352-33.94008965-8.82994211-12.09518046-19.49945518-26.00693834-30.19196253-39.96468481 3.90908875-3.90908875 9.26683997-6.99037039 13.19892302-10.92245345 132.33415478-104.39566674 320.33833383-85.49407262 418.52544794 43.22992316a306.51855469 306.51855469 0 0 1-61.25772156 422.98640759 298.07952184 298.07952184 0 0 1-349.05863961 20.94811763 33.94008889 33.94008889 0 0 0-38.49302728 3.35721709 33.71014281 33.71014281 0 0 0-6.94438178 47.92083044z", "fill", "#333333", "p-id", "9334"], ["title", "\u5411\u53F3\u65CB\u8F6C", 1, "toolsBtn", "rotateRight", 3, "click"], ["t", "1588941386678", "viewBox", "0 0 1024 1024", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "p-id", "9485", "width", "20", "height", "20", 1, "icon"], ["d", "M727.29746405 822.42764344a29.24918237 29.24918237 0 0 1-11.91122374 9.74972721 366.76451243 366.76451243 0 0 1-422.98640759-29.20319301C130.2416296 675.49189255 96.00261019 442.44121292 217.27634341 284.03113615s350.57628573-183.12931506 514.84999526-53.80745826a90.07000608 90.07000608 0 0 1 13.15293443 10.96844359c12.57806845-15.8203125 23.52351697-30.97378029 33.84811014-43.78179482 12.83100961-16.97004443 22.02886514-30.2149576 25.70800782-33.96308396a18.16576575 18.16576575 0 0 1 14.55560752-10.04865772 19.33849276 19.33849276 0 0 1 21.70694031 16.39517846l-0.34491988 1.14973194 1.33368941 20.69517649 19.36148706 135.76035631 3.17326038 18.7866211 2.71336744 16.09624793a19.82137999 19.82137999 0 0 1-3.05828733 14.14170397 16.09624795 16.09624795 0 0 1-12.44010035 7.05935405l-15.88929616 2.0465235-18.57966932 2.29946389-134.10474207 13.79678407-19.75239632 1.9315497-1.14973194-0.3909085a21.08608498 21.08608498 0 0 1-21.38501549-17.61389485 18.39571183 18.39571183 0 0 1 6.43849949-16.7171033c2.50641566-4.1850242 12.83100961-16.97004443 25.68501351-33.94008887 8.82994211-12.11817552 19.49945518-26.02993264 30.19196255-39.96468481-3.90908875-3.90908875-9.26683997-7.01336545-13.19892381-10.94544852-132.33415478-104.39566674-320.33833383-85.49407262-418.52544717 43.22992316A306.51855469 306.51855469 0 0 0 332.87039983 750.45441943a298.07952184 298.07952184 0 0 0 348.98965516 20.74116586 33.94008889 33.94008889 0 0 1 38.51602234 3.38021216 33.71014281 33.71014281 0 0 1 6.9443818 47.92082966z", "fill", "#333333", "p-id", "9486"], ["title", "\u5782\u76F4\u7FFB\u8F6C", 1, "toolsBtn", "flipVertical", 3, "click"], ["t", "1588941411559", "viewBox", "0 0 1024 1024", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "p-id", "9669", "width", "20", "height", "20", 1, "icon"], ["d", "M494.03 74.72l-109.59 144.09c-12.48 16.41-5.82 29.97 14.79000001 30.09L482 249.47 482 774.53l-82.77 0.54c-20.64 0.15-27.27 13.68-14.79 30.09l109.59 144.09c12.48 16.41 32.43 16.05 44.31000001-0.81l101.81999999-144.51c11.88-16.86 4.74-30.54-15.9-30.39L542.00000001 774.14l-1e-8-524.25 82.23 0.54c20.64 0.15 27.78-13.53 15.9-30.39l-101.82-144.51c-11.88-16.86-31.8-17.25-44.28-0.81z", "p-id", "9670"], ["title", "\u6C34\u5E73\u7FFB\u8F6C", 1, "toolsBtn", "flipHorizontal", 3, "click"], ["t", "1588941431636", "viewBox", "0 0 1024 1024", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "p-id", "9885", "width", "20", "height", "20", 1, "icon"], ["d", "M978.432 492.832l-153.696-116.896c-17.504-13.312-31.968-6.208-32.096 15.776L792.032 480H231.968l-0.608-88.288c-0.16-22.016-14.592-29.088-32.096-15.776l-153.696 116.896c-17.504 13.312-17.12 34.592 0.864 47.264l154.144 108.608c17.984 12.672 32.576 5.056 32.416-16.96L232.384 544h559.2l-0.576 87.712c-0.16 22.016 14.432 29.632 32.416 16.96l154.144-108.608c17.984-12.672 18.4-33.92 0.864-47.232z", "p-id", "9886"], ["title", "\u91CD\u7F6E", 1, "toolsBtn", "imageReset", 3, "click"], ["t", "1588941445066", "viewBox", "0 0 1024 1024", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "p-id", "10072", "width", "20", "height", "20", 1, "icon"], ["d", "M666.1 731.4c-48.6 35-105.6 52.5-163.8 51.8-7.7-0.1-15.3-0.7-22.9-1.3-3.1-0.3-6.1-0.8-9.2-1.3-6-0.8-11.9-1.5-17.7-2.8-3.6-0.6-7.2-1.7-10.6-2.5-5.7-1.3-11.4-2.6-16.9-4.3-2.6-1-5.1-1.9-7.8-3-6.5-2.1-12.9-4.4-19-7-1.4-0.6-2.8-1.2-4.1-1.7-7.2-3.4-14.4-6.9-21.3-10.6-0.3-0.2-0.6-0.3-0.9-0.5-23.5-13.3-44.9-29.6-63.7-49-0.3-0.3-0.6-0.7-0.9-1-5.8-6-11.4-12.2-16.7-18.9-1.1-1.4-2.1-2.7-3.3-4.3-38.2-49.1-61.2-111.3-61.2-178.8h73.6L182 314.7 64.2 496.1h73.5c0 79.4 24.2 153.1 65.2 214.2 0.5 0.9 0.8 1.9 1.4 2.6 4.2 6.3 9 12 13.5 17.8 1.8 2.1 3.3 4.3 5.1 6.7 6.6 8.2 13.9 16.1 21.1 23.8 0.8 0.8 1.4 1.4 2 2.1 24.7 25.4 52.4 46.6 82.7 63.8 0.8 0.5 1.5 0.8 2.4 1.4 8.7 4.8 17.7 9.3 26.7 13.3 2.3 1 4.5 2.1 6.7 3 7.8 3.4 15.8 6.2 23.8 9.1 3.8 1.4 7.5 2.6 11.4 3.9 7 2.1 14.2 3.9 21.5 5.6 4.8 1.2 9.5 2.4 14.4 3.4 2 0.5 3.9 1.2 5.9 1.4 6.9 1.3 13.7 1.9 20.5 2.8 2.5 0.5 5 0.9 7.4 1.2 12.3 1.2 24.5 2 36.8 2 74.7 0 147.7-23.5 210.3-68.5 19.9-14.4 24.8-42.7 10.9-63.1-13.9-20.8-41.3-25.7-61.3-11.2z m219.5-206.6c0-79.3-23.9-152.9-64.7-213.6-0.6-1-1-2.1-1.5-3-5.3-7.5-10.7-14.4-16.2-21.5-0.6-0.8-1.3-1.7-1.8-2.6-37.5-46.4-84.4-82.4-137.4-106-1.6-0.6-2.9-1.4-4.5-2-8.5-3.6-17.2-6.7-26-9.8-3-1-6.2-2.2-9.3-3.2-7.7-2.4-15.3-4.3-23.1-6.2-4.3-1-8.7-2.1-13-3-2.1-0.4-4.1-1-6.3-1.5-5.8-1-11.5-1.5-17.4-2.3-4.1-0.5-8-1.1-12-1.5-9.8-1-19.5-1.4-29.2-1.5-1.8 0-3.5-0.3-5.3-0.3-0.3 0-0.6 0.1-0.9 0.1-74.6 0.1-147.5 23.2-210 68.3-19.9 14.3-24.8 42.6-10.8 63.2 13.9 20.4 41.5 25.5 61.5 11 48.2-34.7 104.6-52.3 162.3-51.8 8.3 0.1 16.6 0.5 24.6 1.3 2.5 0.2 4.9 0.6 7.4 1 6.6 0.8 13.2 1.7 19.8 3.2 2.8 0.5 5.7 1.3 8.4 1.9 6.5 1.5 12.7 3 18.9 5 2.1 0.6 4 1.3 5.8 2.1 7.2 2.4 14.2 4.9 21 7.9 0.8 0.2 1.4 0.8 2.1 1 41.2 18.2 77.3 46.1 105.5 81.2 0.1 0.1 0.2 0.4 0.4 0.6 39.6 49.6 63.5 113 63.5 182h-73.7l117.9 181.5 117.6-181.5h-73.6z", "p-id", "10073"], [1, "smallImageViewer"], ["title", "\u5411\u5DE6\u67E5\u770B", 1, "toImg", "previousImgs", 3, "click"], ["t", "1588946161601", "viewBox", "0 0 1024 1024", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "p-id", "4499", "width", "16", "height", "16", 1, "icon"], ["d", "M854.656 182.656a32 32 0 1 0-45.312-45.312l-352 352a32 32 0 0 0 0 45.312l352 352a32 32 0 0 0 45.312-45.312L525.248 512l329.408-329.344z m-320 0a32 32 0 1 0-45.312-45.312l-352 352a32 32 0 0 0 0 45.312l352 352a32 32 0 0 0 45.312-45.312L205.248 512l329.408-329.344z", "fill", "#ffffff", "p-id", "4500"], ["title", "\u5411\u53F3\u67E5\u770B", 1, "toImg", "nextImgs", 3, "click"], ["t", "1588946137834", "viewBox", "0 0 1024 1024", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "p-id", "4373", "width", "16", "height", "16", 1, "icon"], ["d", "M556.8 535.893L170.667 149.76c-13.227-13.227-13.227-34.987 0-48.213 13.226-13.227 34.986-13.227 48.213 0L605.013 487.68c13.227 13.227 13.227 34.987 0 48.213-13.226 13.227-34.986 13.227-48.213 0z", "fill", "#ffffff", "p-id", "4374"], ["d", "M170.667 873.813L556.8 487.68c13.227-13.227 34.987-13.227 48.213 0 13.227 13.227 13.227 34.987 0 48.213L218.88 922.027c-13.227 13.226-34.987 13.226-48.213 0a33.493 33.493 0 0 1 0-48.214zM825.173 536.32L439.04 150.187c-13.227-13.227-13.227-34.987 0-48.214 13.227-13.226 34.987-13.226 48.213 0l386.134 386.134c13.226 13.226 13.226 34.986 0 48.213a33.493 33.493 0 0 1-48.214 0z", "fill", "#ffffff", "p-id", "4375"], ["d", "M439.04 874.24l386.133-386.133c13.227-13.227 34.987-13.227 48.214 0 13.226 13.226 13.226 34.986 0 48.213L487.253 922.453c-13.226 13.227-34.986 13.227-48.213 0-13.227-13.226-13.227-34.56 0-48.213z", "fill", "#ffffff", "p-id", "4376"], [1, "moreImg"], ["moreImg", ""], [3, "src", "click", 4, "ngFor", "ngForOf"], [3, "src", "click"]], template: function ImageViewerComponent_Template(rf, ctx) { if (rf & 1) {
        const _r13 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "div", 0, 1);
        ɵɵelementStart(2, "div", 2, 3);
        ɵɵlistener("dragstart", function ImageViewerComponent_Template_div_dragstart_2_listener($event) { return ctx.cancleCurrentImageDrag($event); })("mousedown", function ImageViewerComponent_Template_div_mousedown_2_listener($event) { return ctx.currentImageDragStart($event); })("mousemove", function ImageViewerComponent_Template_div_mousemove_2_listener($event) { return ctx.currentImageDrag($event); })("mouseup", function ImageViewerComponent_Template_div_mouseup_2_listener($event) { return ctx.currentImageDragEnd($event); });
        ɵɵelementStart(4, "img", 4, 5);
        ɵɵlistener("load", function ImageViewerComponent_Template_img_load_4_listener() { ɵɵrestoreView(_r13); const _r2 = ɵɵreference(5); const _r1 = ɵɵreference(3); return ctx.currentImageLoaded(_r2, _r1); });
        ɵɵelementEnd();
        ɵɵelementStart(6, "div", 6);
        ɵɵlistener("click", function ImageViewerComponent_Template_div_click_6_listener() { return ctx.preOrNextImg("pre"); });
        ɵɵelementStart(7, "span", 7);
        ɵɵnamespaceSVG();
        ɵɵelementStart(8, "svg", 8);
        ɵɵelement(9, "path", 9);
        ɵɵelement(10, "path", 10);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelementStart(11, "div", 11);
        ɵɵlistener("click", function ImageViewerComponent_Template_div_click_11_listener() { return ctx.preOrNextImg("next"); });
        ɵɵelementStart(12, "span", 12);
        ɵɵnamespaceSVG();
        ɵɵelementStart(13, "svg", 13);
        ɵɵelement(14, "path", 14);
        ɵɵelement(15, "path", 15);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(16, ImageViewerComponent_div_16_Template, 12, 3, "div", 16);
        ɵɵnamespaceHTML();
        ɵɵelementStart(17, "div", 17);
        ɵɵelementStart(18, "button", 18);
        ɵɵlistener("click", function ImageViewerComponent_Template_button_click_18_listener() { return ctx.imageZoomin(); });
        ɵɵnamespaceSVG();
        ɵɵelementStart(19, "svg", 19);
        ɵɵelement(20, "path", 20);
        ɵɵelement(21, "path", 21);
        ɵɵelement(22, "path", 22);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelementStart(23, "button", 23);
        ɵɵlistener("click", function ImageViewerComponent_Template_button_click_23_listener() { return ctx.imageZoomout(); });
        ɵɵnamespaceSVG();
        ɵɵelementStart(24, "svg", 24);
        ɵɵelement(25, "path", 25);
        ɵɵelement(26, "path", 26);
        ɵɵelement(27, "path", 27);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelementStart(28, "button", 28);
        ɵɵlistener("click", function ImageViewerComponent_Template_button_click_28_listener() { return ctx.rotateLeft(); });
        ɵɵnamespaceSVG();
        ɵɵelementStart(29, "svg", 29);
        ɵɵelement(30, "path", 30);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelementStart(31, "button", 31);
        ɵɵlistener("click", function ImageViewerComponent_Template_button_click_31_listener() { return ctx.rotateRight(); });
        ɵɵnamespaceSVG();
        ɵɵelementStart(32, "svg", 32);
        ɵɵelement(33, "path", 33);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelementStart(34, "button", 34);
        ɵɵlistener("click", function ImageViewerComponent_Template_button_click_34_listener() { return ctx.flipVertical(); });
        ɵɵnamespaceSVG();
        ɵɵelementStart(35, "svg", 35);
        ɵɵelement(36, "path", 36);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelementStart(37, "button", 37);
        ɵɵlistener("click", function ImageViewerComponent_Template_button_click_37_listener() { return ctx.flipHorizontal(); });
        ɵɵnamespaceSVG();
        ɵɵelementStart(38, "svg", 38);
        ɵɵelement(39, "path", 39);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelementStart(40, "button", 40);
        ɵɵlistener("click", function ImageViewerComponent_Template_button_click_40_listener() { return ctx.currentImgReset(); });
        ɵɵnamespaceSVG();
        ɵɵelementStart(41, "svg", 41);
        ɵɵelement(42, "path", 42);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵɵreference(1);
        ɵɵadvance(2);
        ɵɵstyleProp("width", _r0.style.width)("height", ctx.imageViewHeight);
        ɵɵadvance(2);
        ɵɵproperty("src", ctx.currentImageUrl, ɵɵsanitizeUrl);
        ɵɵadvance(12);
        ɵɵproperty("ngIf", ctx.imageSources.length > 1);
    } }, directives: [NgIf, NgForOf], styles: [".imageViewerContainer[_ngcontent-%COMP%]{margin:0;padding:0;height:100%;min-width:400px;min-height:400px;background-color:#3e3e3e}.imageViewerContainer[_ngcontent-%COMP%]   .imageViewer[_ngcontent-%COMP%]{position:relative;overflow:hidden}.imageViewerContainer[_ngcontent-%COMP%]   .imageViewer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;border:0;padding:0;margin:0;width:auto;height:98%;visibility:visible;transition:all .5s ease-out}.imageViewerContainer[_ngcontent-%COMP%]   .imageViewer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:absolute;width:80px;height:100%;background:rgba(112,109,109,0);transition:all .5s}.imageViewerContainer[_ngcontent-%COMP%]   .imageViewer[_ngcontent-%COMP%]   div.previousImg[_ngcontent-%COMP%]{top:0;left:0}.imageViewerContainer[_ngcontent-%COMP%]   .imageViewer[_ngcontent-%COMP%]   div.nextImg[_ngcontent-%COMP%]{top:0;right:0}.imageViewerContainer[_ngcontent-%COMP%]   .imageViewer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover{background:rgba(112,109,109,.5)}.imageViewerContainer[_ngcontent-%COMP%]   .imageViewer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{opacity:1;color:#f5f5f5}.imageViewerContainer[_ngcontent-%COMP%]   .imageViewer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;font-size:60px;width:1em;height:1em;text-align:center;top:50%;margin-top:-30px;left:50%;margin-left:-30px;opacity:.2;color:#797979;transition:all .5s;cursor:pointer}.imageViewerContainer[_ngcontent-%COMP%]   .smallImageViewer[_ngcontent-%COMP%]{border-top:2px solid #888484;border-bottom:2px solid #888484;margin-top:2px;height:50px;position:relative;overflow:hidden;white-space:nowrap}.imageViewerContainer[_ngcontent-%COMP%]   .smallImageViewer[_ngcontent-%COMP%]   .moreImg[_ngcontent-%COMP%]{height:100%;position:absolute;z-index:1;top:0;transition:left .6s ease-out}.imageViewerContainer[_ngcontent-%COMP%]   .smallImageViewer[_ngcontent-%COMP%]   .moreImg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:relative;cursor:pointer;margin:0 2px 0 0;height:100%;transform:scale(1);transition:transform .5s;z-index:1}.imageViewerContainer[_ngcontent-%COMP%]   .smallImageViewer[_ngcontent-%COMP%]   .moreImg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{transform:scale(1.5);z-index:2}.imageViewerContainer[_ngcontent-%COMP%]   .smallImageViewer[_ngcontent-%COMP%]   .toImg[_ngcontent-%COMP%]{height:100%;width:25px;color:#fff;text-align:center;line-height:50px;font-weight:700;opacity:.8;cursor:pointer;overflow:hidden;background-color:#3e3e3e;position:absolute;z-index:9;top:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:opacity .5s}.imageViewerContainer[_ngcontent-%COMP%]   .smallImageViewer[_ngcontent-%COMP%]   .toImg[_ngcontent-%COMP%]:hover{opacity:1}.imageViewerContainer[_ngcontent-%COMP%]   .smallImageViewer[_ngcontent-%COMP%]   .previousImgs[_ngcontent-%COMP%]{left:0}.imageViewerContainer[_ngcontent-%COMP%]   .smallImageViewer[_ngcontent-%COMP%]   .nextImgs[_ngcontent-%COMP%]{right:0}.imageViewerContainer[_ngcontent-%COMP%]   .imageTools[_ngcontent-%COMP%]{text-align:center;height:46px;line-height:46px}.imageViewerContainer[_ngcontent-%COMP%]   .imageTools[_ngcontent-%COMP%]   .toolsBtn[_ngcontent-%COMP%]{margin:0 5px;padding:4px 8px;color:#3e3e3e;font-size:16px;font-weight:400;line-height:1.5;display:inline-block;text-align:center;white-space:nowrap;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-image:none;background-color:#fff;border:1px solid #ccc;border-radius:4px;cursor:pointer;transition:all .3s}.imageViewerContainer[_ngcontent-%COMP%]   .imageTools[_ngcontent-%COMP%]   .toolsBtn[_ngcontent-%COMP%]:hover{color:#fff;background-color:#3e3e3e;border-color:#888484}"] });
ImageViewerComponent = __decorate([
    ComponentRegister({
        uri: "image-viewer",
        path: "components/shared/ngxviewer/image-viewer"
    })
], ImageViewerComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ImageViewerComponent, [{
        type: Component,
        args: [{
                selector: "image-viewer",
                templateUrl: "./image-viewer.component.html",
                styleUrls: ["./image-viewer.component.scss"],
            }]
    }], function () { return [{ type: DomSanitizer }, { type: EventEmitterService }]; }, { imageViewerContainer: [{
            type: ViewChild,
            args: ["imageViewerContainer"]
        }], showImg: [{
            type: ViewChild,
            args: ["showImg"]
        }], width: [{
            type: Input
        }], height: [{
            type: Input
        }], source: [{
            type: Input
        }], first: [{
            type: Input
        }], ready: [{
            type: Output
        }] }); })();

const _c0$e = ["videoToolbar"];
const _c1$8 = function (a0, a1) { return { "label-default": a0, "label-primary": a1 }; };
function VideoViewerComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 9);
    ɵɵlistener("click", function VideoViewerComponent_span_1_Template_span_click_0_listener() { ɵɵrestoreView(_r7); const video_r4 = ctx.$implicit; const i_r5 = ctx.index; const ctx_r6 = ɵɵnextContext(); return ctx_r6.selectVideo(video_r4, i_r5); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const i_r5 = ctx.index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction2(2, _c1$8, i_r5 != ctx_r0.sub, i_r5 == ctx_r0.sub));
    ɵɵadvance(1);
    ɵɵtextInterpolate1("\u89C6\u9891", i_r5 + 1, " ");
} }
const _c2$3 = function (a0, a1) { return { "fa-repeat": a0, "fa-play-circle-o": a1 }; };
function VideoViewerComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "span", 10);
    ɵɵlistener("click", function VideoViewerComponent_div_7_Template_span_click_1_listener() { ɵɵrestoreView(_r9); const ctx_r8 = ɵɵnextContext(); return ctx_r8.playOrPause(); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ɵɵpureFunction2(2, _c2$3, ctx_r2.videoElem.ended, !ctx_r2.videoElem.ended))("title", ctx_r2.videoElem.ended ? "\u91CD\u64AD" : "\u64AD\u653E");
} }
function VideoViewerComponent_div_8_span_11_Template(rf, ctx) { if (rf & 1) {
    const _r15 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 29);
    ɵɵlistener("click", function VideoViewerComponent_div_8_span_11_Template_span_click_0_listener() { ɵɵrestoreView(_r15); const ctx_r14 = ɵɵnextContext(2); return ctx_r14.playOrPause(); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = ɵɵnextContext(2);
    ɵɵproperty("title", ctx_r11.videoElem.ended ? "\u91CD\u64AD" : "\u64AD\u653E");
} }
function VideoViewerComponent_div_8_span_12_Template(rf, ctx) { if (rf & 1) {
    const _r17 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 30);
    ɵɵlistener("click", function VideoViewerComponent_div_8_span_12_Template_span_click_0_listener() { ɵɵrestoreView(_r17); const ctx_r16 = ɵɵnextContext(2); return ctx_r16.playOrPause(); });
    ɵɵelementEnd();
} }
const _c3$2 = function (a0, a1, a2) { return { "fa-volume-down": a0, "fa-volume-up": a1, "fa-volume-off": a2 }; };
function VideoViewerComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r19 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 11, 12);
    ɵɵelementStart(2, "div", 13);
    ɵɵelementStart(3, "span", 14);
    ɵɵlistener("mousedown", function VideoViewerComponent_div_8_Template_span_mousedown_3_listener($event) { ɵɵrestoreView(_r19); const ctx_r18 = ɵɵnextContext(); return ctx_r18.progressBallDragStart($event); })("mousemove", function VideoViewerComponent_div_8_Template_span_mousemove_3_listener($event) { ɵɵrestoreView(_r19); const ctx_r20 = ɵɵnextContext(); return ctx_r20.progressBallDrag($event); })("mouseup", function VideoViewerComponent_div_8_Template_span_mouseup_3_listener($event) { ɵɵrestoreView(_r19); const ctx_r21 = ɵɵnextContext(); return ctx_r21.progressBallDragEnd($event); })("mouseleave", function VideoViewerComponent_div_8_Template_span_mouseleave_3_listener($event) { ɵɵrestoreView(_r19); const ctx_r22 = ɵɵnextContext(); return ctx_r22.progressBallDragEnd($event); });
    ɵɵelementStart(4, "span");
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(6, "div", 15);
    ɵɵlistener("mousemove", function VideoViewerComponent_div_8_Template_div_mousemove_6_listener($event) { ɵɵrestoreView(_r19); const ctx_r23 = ɵɵnextContext(); return ctx_r23.videoToolbarProgressMove($event); })("click", function VideoViewerComponent_div_8_Template_div_click_6_listener($event) { ɵɵrestoreView(_r19); const ctx_r24 = ɵɵnextContext(); return ctx_r24.videoToolbarProgressClick($event); });
    ɵɵelementEnd();
    ɵɵelementStart(7, "div", 16);
    ɵɵlistener("mousemove", function VideoViewerComponent_div_8_Template_div_mousemove_7_listener($event) { ɵɵrestoreView(_r19); const ctx_r25 = ɵɵnextContext(); return ctx_r25.videoToolbarProgressMove($event); })("click", function VideoViewerComponent_div_8_Template_div_click_7_listener($event) { ɵɵrestoreView(_r19); const ctx_r26 = ɵɵnextContext(); return ctx_r26.videoToolbarProgressClick($event); });
    ɵɵelementEnd();
    ɵɵelementStart(8, "span", 17);
    ɵɵtext(9);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(10, "div", 18);
    ɵɵtemplate(11, VideoViewerComponent_div_8_span_11_Template, 1, 1, "span", 19);
    ɵɵtemplate(12, VideoViewerComponent_div_8_span_12_Template, 1, 0, "span", 20);
    ɵɵelementStart(13, "span", 21);
    ɵɵelementStart(14, "span");
    ɵɵtext(15);
    ɵɵelementEnd();
    ɵɵtext(16);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(17, "div", 22);
    ɵɵelementStart(18, "span", 23);
    ɵɵlistener("click", function VideoViewerComponent_div_8_Template_span_click_18_listener() { ɵɵrestoreView(_r19); const ctx_r27 = ɵɵnextContext(); return ctx_r27.isMuted(); });
    ɵɵelementEnd();
    ɵɵelementStart(19, "span", 24, 25);
    ɵɵelementStart(21, "span", 26);
    ɵɵlistener("mousedown", function VideoViewerComponent_div_8_Template_span_mousedown_21_listener($event) { ɵɵrestoreView(_r19); const ctx_r28 = ɵɵnextContext(); return ctx_r28.volumeBallDragStart($event); })("mousemove", function VideoViewerComponent_div_8_Template_span_mousemove_21_listener($event) { ɵɵrestoreView(_r19); const _r13 = ɵɵreference(20); const ctx_r29 = ɵɵnextContext(); return ctx_r29.volumeBallDrag($event, _r13.clientWidth); })("mouseup", function VideoViewerComponent_div_8_Template_span_mouseup_21_listener($event) { ɵɵrestoreView(_r19); const ctx_r30 = ɵɵnextContext(); return ctx_r30.volumeBallDragEnd($event); })("mouseleave", function VideoViewerComponent_div_8_Template_span_mouseleave_21_listener($event) { ɵɵrestoreView(_r19); const ctx_r31 = ɵɵnextContext(); return ctx_r31.volumeBallDragEnd($event); });
    ɵɵelementStart(22, "span");
    ɵɵtext(23);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(24, "span", 27);
    ɵɵlistener("click", function VideoViewerComponent_div_8_Template_span_click_24_listener($event) { ɵɵrestoreView(_r19); const _r13 = ɵɵreference(20); const ctx_r32 = ɵɵnextContext(); return ctx_r32.volumeValClick($event, _r13.clientWidth); });
    ɵɵelementEnd();
    ɵɵelementStart(25, "span", 28);
    ɵɵlistener("click", function VideoViewerComponent_div_8_Template_span_click_25_listener($event) { ɵɵrestoreView(_r19); const _r13 = ɵɵreference(20); const ctx_r33 = ɵɵnextContext(); return ctx_r33.volumeValClick($event, _r13.clientWidth); });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const _r10 = ɵɵreference(1);
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵstyleProp("height", ctx_r3.videoToolbarProgressHeight + "px");
    ɵɵadvance(1);
    ɵɵstyleProp("left", ctx_r3.play_progress + "px")("margin-left", ctx_r3.play_progress > 16 ? "-16px" : "0")("opacity", ctx_r3.showProgressBall ? 1 : 0);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r3.getFormatTime(ctx_r3.play_progress / _r10.clientWidth * ctx_r3.videoElem.duration), " ");
    ɵɵadvance(1);
    ɵɵstyleProp("width", ctx_r3.play_progress + "px");
    ɵɵadvance(2);
    ɵɵstyleProp("left", ctx_r3.timeTipOffsetX - 16 + "px");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r3.timeTip, " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r3.videoElem.paused);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r3.videoElem.paused);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ctx_r3.currentTime);
    ɵɵadvance(1);
    ɵɵtextInterpolate1("\u00A0/\u00A0", ctx_r3.totalTime, " ");
    ɵɵadvance(2);
    ɵɵproperty("ngClass", ɵɵpureFunction3(24, _c3$2, ctx_r3.videoElem.volume > 0 && ctx_r3.videoElem.volume < 0.5, ctx_r3.videoElem.volume >= 0.5, ctx_r3.videoElem.volume == 0));
    ɵɵadvance(3);
    ɵɵstyleProp("left", ctx_r3.videoElem.volume * 100 - 8 + "px");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", (ctx_r3.videoElem.volume * 100).toFixed(0) + "%", " ");
    ɵɵadvance(1);
    ɵɵstyleProp("width", ctx_r3.videoElem.volume * 100 + "px");
} }
let VideoViewerComponent = class VideoViewerComponent {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
        this.width = 0;
        this.videoWidth = 0;
        this.height = 0;
        this.source = [];
        this.ready = new EventEmitter(false);
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
    ngOnInit() {
        this.videoUrl = this.source[0];
        this.ready.emit('video viewer initialize!');
    }
    onLoadedmetadata(e) {
        this.videoElem = e.target;
        this.totalTime = this.getFormatTime(this.videoElem.duration);
        this.currentTime = this.getFormatTime(this.videoElem.currentTime);
    }
    OnPlayEnded(e) {
        console.log(`播放结束：${this.videoElem.ended}`);
    }
    onPlay(e) {
        console.log('play');
    }
    onTimeupdate(e) {
        this.currentTime = this.getFormatTime(this.videoElem.currentTime);
        this.play_progress = this.videoElem.currentTime / this.videoElem.duration * this.videoToolbar.nativeElement.clientWidth;
    }
    onProgress(e) {
        console.log('progress');
    }
    onCanplaythrough(e) {
        console.log('canplaythrough');
    }
    videoToolbarProgressClick(e) {
        this.play_progress = e.offsetX;
        let tempCurrentTime = this.play_progress / this.videoToolbar.nativeElement.clientWidth * this.videoElem.duration;
        this.videoElem.currentTime = tempCurrentTime;
        this.currentTime = this.getFormatTime(tempCurrentTime);
    }
    videoToolbarProgressMove(e) {
        let tempCurrentTime = e.offsetX / this.videoToolbar.nativeElement.clientWidth * this.videoElem.duration;
        this.timeTipOffsetX = e.offsetX;
        this.timeTip = this.getFormatTime(tempCurrentTime);
    }
    progressBallDragStart(e) {
        e.stopPropagation();
        this.progressBallDragStartClientX = e.clientX;
        this.isProgressBallStartMove = true;
    }
    progressBallDrag(e) {
        e.stopPropagation();
        if (this.isProgressBallStartMove) {
            let offsetX = e.clientX - this.progressBallDragStartClientX;
            this.progressBallDragStartClientX = e.clientX;
            this.play_progress = (this.play_progress + offsetX);
            if (this.play_progress >= this.videoToolbar.nativeElement.clientWidth) {
                this.play_progress = this.videoToolbar.nativeElement.clientWidth;
            }
            else if (this.play_progress <= 0) {
                this.play_progress = 0;
            }
            let tempCurrentTime = this.play_progress / this.videoToolbar.nativeElement.clientWidth * this.videoElem.duration;
            this.videoElem.currentTime = tempCurrentTime;
            this.currentTime = this.getFormatTime(tempCurrentTime);
        }
    }
    progressBallDragEnd(e) {
        e.stopPropagation();
        this.isProgressBallStartMove = false;
    }
    volumeValClick(e, width) {
        console.log(e.offsetX);
        this.videoElem.volume = e.offsetX / width;
    }
    volumeBallDragStart(e) {
        e.stopPropagation();
        this.volumeBallDragStartClientX = e.clientX;
        this.isVolumeBallStartMove = true;
    }
    volumeBallDrag(e, width) {
        e.stopPropagation();
        if (this.isVolumeBallStartMove) {
            let offsetX = e.clientX - this.volumeBallDragStartClientX;
            this.volumeBallDragStartClientX = e.clientX;
            let volume = this.videoElem.volume + offsetX / width;
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
    }
    volumeBallDragEnd(e) {
        e.stopPropagation();
        this.isVolumeBallStartMove = false;
    }
    videoMouseover(e) {
        this.videoToolbarProgressHeight = 16;
        this.showProgressBall = true;
    }
    videoMouseout(e) {
        this.videoToolbarProgressHeight = 3;
        this.showProgressBall = false;
    }
    play() {
        this.videoElem.ended && (this.videoElem.currentTime = 0);
        this.videoElem.play();
    }
    pause() {
        this.videoElem.pause();
    }
    playOrPause() {
        this.videoElem.paused ? this.play() : this.pause();
    }
    selectVideo(path, i) {
        this.sub = JSON.parse(JSON.stringify(i));
        this.videoUrl = path;
        this.videoElem.load();
    }
    isMuted() {
        if (this.videoElem.muted) {
            this.videoElem.muted = false;
            this.videoElem.volume = this.preVolume;
        }
        else {
            this.videoElem.muted = true;
            this.preVolume = this.videoElem.volume;
            this.videoElem.volume = 0;
        }
    }
    getFormatTime(value) {
        let h = parseInt(value / 3600 + '') < 10 ? '0' + parseInt(value / 3600 + '') : '' + parseInt(value / 3600 + ''), m = parseInt(value % 3600 / 60 + '') < 10 ? '0' + parseInt(value % 3600 / 60 + '') : '' + parseInt(value % 3600 / 60 + ''), s;
        if (value >= 60) {
            s = value % 3600 % 60 < 10 ? '0' + parseInt(value % 3600 % 60 + '') : '' + parseInt(value % 3600 % 60 + '');
        }
        else if (value < 60 && value >= 10) {
            s = '' + parseInt(value + '');
        }
        else if (value < 10) {
            s = '0' + parseInt(value + '');
        }
        return `${h}:${m}:${s}`;
    }
};
VideoViewerComponent.ɵfac = function VideoViewerComponent_Factory(t) { return new (t || VideoViewerComponent)(ɵɵdirectiveInject(DomSanitizer)); };
VideoViewerComponent.ɵcmp = ɵɵdefineComponent({ type: VideoViewerComponent, selectors: [["video-viewer"]], viewQuery: function VideoViewerComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$e, 3);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.videoToolbar = _t.first);
    } }, inputs: { width: "width", videoWidth: "videoWidth", height: "height", source: "source", poster: "poster" }, outputs: { ready: "ready" }, decls: 9, vars: 8, consts: [[1, "video-list"], ["class", "label", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "videoViewerContainer", 3, "mouseover", "mouseout"], ["videoViewerContainer", ""], [1, "videoViewer"], [3, "width", "poster", "click", "loadedmetadata", "ended", "timeupdate", "progress", "canplaythrough", "play"], ["type", "video/mp4", 3, "src"], [4, "ngIf"], ["class", "videoToolbar", 4, "ngIf"], [1, "label", 3, "ngClass", "click"], [1, "fa", 3, "ngClass", "title", "click"], [1, "videoToolbar"], ["videoToolbar", ""], [1, "videoToolbar_progress"], [1, "progress_val_ball", 3, "mousedown", "mousemove", "mouseup", "mouseleave"], [1, "videoToolbar_play_progress", 3, "mousemove", "click"], [1, "videoToolbar_buffer_progress", 3, "mousemove", "click"], [1, "timeTip"], [1, "videoToolbar_play_btn"], ["class", "playBtn fa fa-play-circle-o", "aria-hidden", "true", 3, "title", "click", 4, "ngIf"], ["class", "playBtn fa fa-pause-circle-o", "aria-hidden", "true", "title", "\u6682\u505C", 3, "click", 4, "ngIf"], [1, "playTime"], [1, "videoToolbar_volume_btn"], ["aria-hidden", "true", "title", "\u9759\u97F3\u8BBE\u7F6E", 1, "mutedBtn", "fa", 3, "ngClass", "click"], [1, "volume_val"], ["volume_val", ""], [1, "volume_val_ball", 3, "mousedown", "mousemove", "mouseup", "mouseleave"], [1, "volume_val_active", 3, "click"], [1, "volume_val_notActive", 3, "click"], ["aria-hidden", "true", 1, "playBtn", "fa", "fa-play-circle-o", 3, "title", "click"], ["aria-hidden", "true", "title", "\u6682\u505C", 1, "playBtn", "fa", "fa-pause-circle-o", 3, "click"]], template: function VideoViewerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p", 0);
        ɵɵtemplate(1, VideoViewerComponent_span_1_Template, 2, 5, "span", 1);
        ɵɵelementEnd();
        ɵɵelementStart(2, "div", 2, 3);
        ɵɵlistener("mouseover", function VideoViewerComponent_Template_div_mouseover_2_listener($event) { return ctx.videoMouseover($event); })("mouseout", function VideoViewerComponent_Template_div_mouseout_2_listener($event) { return ctx.videoMouseout($event); });
        ɵɵelementStart(4, "div", 4);
        ɵɵelementStart(5, "video", 5);
        ɵɵlistener("click", function VideoViewerComponent_Template_video_click_5_listener() { return ctx.playOrPause(); })("loadedmetadata", function VideoViewerComponent_Template_video_loadedmetadata_5_listener($event) { return ctx.onLoadedmetadata($event); })("ended", function VideoViewerComponent_Template_video_ended_5_listener($event) { return ctx.OnPlayEnded($event); })("timeupdate", function VideoViewerComponent_Template_video_timeupdate_5_listener($event) { return ctx.onTimeupdate($event); })("progress", function VideoViewerComponent_Template_video_progress_5_listener($event) { return ctx.onProgress($event); })("canplaythrough", function VideoViewerComponent_Template_video_canplaythrough_5_listener($event) { return ctx.onCanplaythrough($event); })("play", function VideoViewerComponent_Template_video_play_5_listener($event) { return ctx.onPlay($event); });
        ɵɵelement(6, "source", 6);
        ɵɵelementEnd();
        ɵɵtemplate(7, VideoViewerComponent_div_7_Template, 2, 5, "div", 7);
        ɵɵelementEnd();
        ɵɵtemplate(8, VideoViewerComponent_div_8_Template, 26, 28, "div", 8);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.source);
        ɵɵadvance(1);
        ɵɵstyleProp("width", ctx.width + "px");
        ɵɵadvance(3);
        ɵɵproperty("width", ctx.videoWidth)("poster", ctx.poster, ɵɵsanitizeUrl);
        ɵɵadvance(1);
        ɵɵproperty("src", ctx.videoUrl, ɵɵsanitizeUrl);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.videoElem && ctx.videoElem.paused);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.videoElem);
    } }, directives: [NgForOf, NgIf, NgClass], styles: ["p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{cursor:pointer;margin-right:6px}.videoViewerContainer[_ngcontent-%COMP%]{position:relative;margin:0;padding:0;height:100%;min-width:200px;min-height:200px;background-color:#3e3e3e}.videoViewerContainer[_ngcontent-%COMP%]   .videoViewer[_ngcontent-%COMP%]{position:relative;margin-bottom:53px}.videoViewerContainer[_ngcontent-%COMP%]   .videoViewer[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{display:block;margin-left:50%;transform:translateX(-50%)}.videoViewerContainer[_ngcontent-%COMP%]   .videoViewer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:absolute;top:0;left:0;bottom:0;right:0;background:rgba(62,62,62,.5)}.videoViewerContainer[_ngcontent-%COMP%]   .videoViewer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:80px;position:absolute;left:50%;top:50%;margin-left:-40px;margin-top:-40px;color:#e2e2e2;transition:color .8s}.videoViewerContainer[_ngcontent-%COMP%]   .videoViewer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{color:#4bcef2;cursor:pointer}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]{position:absolute;width:100%;left:0;bottom:0;font-size:40px;color:#bfb9b9}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_play_btn[_ngcontent-%COMP%]{float:left;padding:0 10px}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_play_btn[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:inline-block;margin-right:20px}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_play_btn[_ngcontent-%COMP%] > span.playBtn[_ngcontent-%COMP%]:hover{color:#45bdde;cursor:pointer}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_play_btn[_ngcontent-%COMP%] > span.playTime[_ngcontent-%COMP%]{font-size:.5em;vertical-align:middle}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_play_btn[_ngcontent-%COMP%] > span.playTime[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#e2e2e2}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_volume_btn[_ngcontent-%COMP%]{float:right;padding:0 15px}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_volume_btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;cursor:pointer;font-size:.8em}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_volume_btn[_ngcontent-%COMP%]   span.mutedBtn[_ngcontent-%COMP%]{height:32px;width:32px;text-align:left;line-height:32px}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_volume_btn[_ngcontent-%COMP%]   span.volume_val[_ngcontent-%COMP%]{position:relative;width:100px;margin-bottom:3px;height:6px;vertical-align:middle;cursor:pointer}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_volume_btn[_ngcontent-%COMP%]   span.volume_val[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;border-radius:2px}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_volume_btn[_ngcontent-%COMP%]   span.volume_val[_ngcontent-%COMP%] > span.volume_val_ball[_ngcontent-%COMP%]{bottom:0;height:16px;width:16px;border-radius:16px;background:#e2e2e2;z-index:3;margin-bottom:-5px}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_volume_btn[_ngcontent-%COMP%]   span.volume_val[_ngcontent-%COMP%] > span.volume_val_ball[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;display:none;font-size:12px;top:-25px;left:-8px;padding:2px;background:#000;color:#fff}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_volume_btn[_ngcontent-%COMP%]   span.volume_val[_ngcontent-%COMP%] > span.volume_val_ball[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{display:inline-block}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_volume_btn[_ngcontent-%COMP%]   span.volume_val[_ngcontent-%COMP%] > span.volume_val_active[_ngcontent-%COMP%]{z-index:2;background:#45bdde}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_volume_btn[_ngcontent-%COMP%]   span.volume_val[_ngcontent-%COMP%] > span.volume_val_notActive[_ngcontent-%COMP%]{z-index:1;background:#989393}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_progress[_ngcontent-%COMP%]{position:relative;width:100%;background:rgba(112,109,109,.6);transition:height .5s;cursor:pointer}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_progress[_ngcontent-%COMP%]   .timeTip[_ngcontent-%COMP%]{position:absolute;display:none;top:-25px;left:-16px;padding:2px;background:#000;font-size:12px;color:#fff}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_progress[_ngcontent-%COMP%]   .progress_val_ball[_ngcontent-%COMP%]{position:absolute;left:0;bottom:0;height:16px;width:16px;border-radius:16px;background:#f7f7f7;z-index:3;opacity:0;transition:opacity .5s;font-size:12px}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_progress[_ngcontent-%COMP%]   .progress_val_ball[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;display:none;top:-25px;left:-16px;padding:2px;background:#000;color:#fff}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_progress[_ngcontent-%COMP%]   .progress_val_ball[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{display:inline-block}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_progress[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:absolute;width:0;height:100%;border-radius:16px}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_progress[_ngcontent-%COMP%]   div.videoToolbar_play_progress[_ngcontent-%COMP%]{z-index:2;background:#45bdde}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_progress[_ngcontent-%COMP%]   div.videoToolbar_play_progress[_ngcontent-%COMP%]:hover ~ .timeTip[_ngcontent-%COMP%]{display:inline-block}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_progress[_ngcontent-%COMP%]   div.videoToolbar_buffer_progress[_ngcontent-%COMP%]{width:100%;z-index:1;background:rgba(191,185,185,.6)}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_progress[_ngcontent-%COMP%]   div.videoToolbar_buffer_progress[_ngcontent-%COMP%]:hover ~ .timeTip[_ngcontent-%COMP%]{display:inline-block}"] });
VideoViewerComponent = __decorate([
    ComponentRegister({
        uri: 'video-viewer',
        path: "components/shared/ngxviewer/video-viewer"
    })
], VideoViewerComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(VideoViewerComponent, [{
        type: Component,
        args: [{
                selector: 'video-viewer',
                templateUrl: './video-viewer.component.html',
                styleUrls: ['./video-viewer.component.scss']
            }]
    }], function () { return [{ type: DomSanitizer }]; }, { videoToolbar: [{
            type: ViewChild,
            args: ['videoToolbar', { static: true }]
        }], width: [{
            type: Input
        }], videoWidth: [{
            type: Input
        }], height: [{
            type: Input
        }], source: [{
            type: Input
        }], poster: [{
            type: Input
        }], ready: [{
            type: Output
        }] }); })();

function EpsGISNgxViewerComponent_pdf_viewer_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "pdf-viewer", 4);
    ɵɵlistener("ready", function EpsGISNgxViewerComponent_pdf_viewer_1_Template_pdf_viewer_ready_0_listener($event) { ɵɵrestoreView(_r4); const ctx_r3 = ɵɵnextContext(); return ctx_r3.viewerReady($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("width", ctx_r0.width)("height", ctx_r0.height)("source", ctx_r0.source)("viewerUrl", ctx_r0.viewerUrl);
} }
function EpsGISNgxViewerComponent_image_viewer_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "image-viewer", 5);
    ɵɵlistener("ready", function EpsGISNgxViewerComponent_image_viewer_2_Template_image_viewer_ready_0_listener($event) { ɵɵrestoreView(_r6); const ctx_r5 = ɵɵnextContext(); return ctx_r5.viewerReady($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("source", ctx_r1.source)("width", ctx_r1.width)("height", ctx_r1.height)("first", ctx_r1.first);
} }
function EpsGISNgxViewerComponent_video_viewer_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "video-viewer", 6);
    ɵɵlistener("ready", function EpsGISNgxViewerComponent_video_viewer_3_Template_video_viewer_ready_0_listener($event) { ɵɵrestoreView(_r8); const ctx_r7 = ɵɵnextContext(); return ctx_r7.viewerReady($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("poster", ctx_r2.poster)("source", ctx_r2.source)("width", ctx_r2.width)("videoWidth", ctx_r2.videoWidth)("height", ctx_r2.height);
} }
let EpsGISNgxViewerComponent = class EpsGISNgxViewerComponent {
    constructor(activatedRoute, injector) {
        this.activatedRoute = activatedRoute;
        this.injector = injector;
        this.model = 'pdf';
        this.width = 600;
        this.videoWidth = 400;
        this.height = 800;
        this.poster = '';
        this.viewerUrl = '';
        this.first = 0;
        this.ready = new EventEmitter(false);
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((param) => {
            if (param['model']) {
                this.model = param['model'];
            }
            if (param['source']) {
                this.source = param['source'];
            }
            if (param['width']) {
                this.width = param['width'];
            }
            if (param['width']) {
                this.width = param['width'];
            }
            if (param['videoWidth']) {
                this.videoWidth = param['videoWidth'];
            }
            if (param['height']) {
                this.height = param['height'];
            }
            if (param['poster']) {
                this.poster = param['poster'];
            }
            if (param['viewerUrl']) {
                this.viewerUrl = param['viewerUrl'];
            }
            if (param['first']) {
                this.first = param['first'];
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
    }
    viewerReady($event) {
        this.ready.emit($event);
    }
};
EpsGISNgxViewerComponent.ɵfac = function EpsGISNgxViewerComponent_Factory(t) { return new (t || EpsGISNgxViewerComponent)(ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(Injector)); };
EpsGISNgxViewerComponent.ɵcmp = ɵɵdefineComponent({ type: EpsGISNgxViewerComponent, selectors: [["epsgis-ngx-viewer"]], inputs: { model: "model", width: "width", videoWidth: "videoWidth", height: "height", source: "source", poster: "poster", viewerUrl: "viewerUrl", first: "first" }, outputs: { ready: "ready" }, decls: 4, vars: 3, consts: [[1, "epsgis-ngx-viewer"], [3, "width", "height", "source", "viewerUrl", "ready", 4, "ngIf"], [3, "source", "width", "height", "first", "ready", 4, "ngIf"], [3, "poster", "source", "width", "videoWidth", "height", "ready", 4, "ngIf"], [3, "width", "height", "source", "viewerUrl", "ready"], [3, "source", "width", "height", "first", "ready"], [3, "poster", "source", "width", "videoWidth", "height", "ready"]], template: function EpsGISNgxViewerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, EpsGISNgxViewerComponent_pdf_viewer_1_Template, 1, 4, "pdf-viewer", 1);
        ɵɵtemplate(2, EpsGISNgxViewerComponent_image_viewer_2_Template, 1, 4, "image-viewer", 2);
        ɵɵtemplate(3, EpsGISNgxViewerComponent_video_viewer_3_Template, 1, 5, "video-viewer", 3);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.model == "pdf");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.model == "image");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.model == "video");
    } }, directives: [NgIf, PDFViewerComponent, ImageViewerComponent, VideoViewerComponent], styles: [""] });
EpsGISNgxViewerComponent = __decorate([
    ComponentRegister({
        uri: 'epsgis-ngx-viewer',
        path: "components/shared/ngxviewer"
    })
], EpsGISNgxViewerComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(EpsGISNgxViewerComponent, [{
        type: Component,
        args: [{
                selector: 'epsgis-ngx-viewer',
                templateUrl: './e-ngx-viewer.component.html',
                styleUrls: ['./e-ngx-viewer.component.scss']
            }]
    }], function () { return [{ type: ActivatedRoute }, { type: Injector }]; }, { model: [{
            type: Input
        }], width: [{
            type: Input
        }], videoWidth: [{
            type: Input
        }], height: [{
            type: Input
        }], source: [{
            type: Input
        }], poster: [{
            type: Input
        }], viewerUrl: [{
            type: Input
        }], first: [{
            type: Input
        }], ready: [{
            type: Output
        }] }); })();

const _c0$f = function (a0, a1) { return { "collapse": a0, "expand": a1 }; };
function EpsGISJsonViewerComponent_section_1_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 9);
} if (rf & 2) {
    const segment_r1 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngClass", ɵɵpureFunction2(1, _c0$f, segment_r1.expanded, !segment_r1.expanded));
} }
function EpsGISJsonViewerComponent_section_1_span_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const segment_r1 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(segment_r1.description);
} }
function EpsGISJsonViewerComponent_section_1_section_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "section", 11);
    ɵɵelement(1, "epsgis-json-viewer", 12);
    ɵɵelementEnd();
} if (rf & 2) {
    const segment_r1 = ɵɵnextContext().$implicit;
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("json", segment_r1.value)("expanded", ctx_r4.expanded);
} }
const _c1$9 = function (a1) { return ["segment", a1]; };
const _c2$4 = function (a1, a2) { return { "segment-main": true, "expandable": a1, "expanded": a2 }; };
function EpsGISJsonViewerComponent_section_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "section", 2);
    ɵɵelementStart(1, "section", 3);
    ɵɵlistener("click", function EpsGISJsonViewerComponent_section_1_Template_section_click_1_listener() { ɵɵrestoreView(_r9); const segment_r1 = ctx.$implicit; const ctx_r8 = ɵɵnextContext(); return ctx_r8.toggle(segment_r1); });
    ɵɵtemplate(2, EpsGISJsonViewerComponent_section_1_div_2_Template, 1, 4, "div", 4);
    ɵɵelementStart(3, "span", 5);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementStart(5, "span", 6);
    ɵɵtext(6, ": ");
    ɵɵelementEnd();
    ɵɵtemplate(7, EpsGISJsonViewerComponent_section_1_span_7_Template, 2, 1, "span", 7);
    ɵɵelementEnd();
    ɵɵtemplate(8, EpsGISJsonViewerComponent_section_1_section_8_Template, 2, 2, "section", 8);
    ɵɵelementEnd();
} if (rf & 2) {
    const segment_r1 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction1(6, _c1$9, "segment-type-" + segment_r1.type));
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ɵɵpureFunction2(8, _c2$4, ctx_r0.isExpandable(segment_r1), segment_r1.expanded));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.isExpandable(segment_r1));
    ɵɵadvance(2);
    ɵɵtextInterpolate(segment_r1.key);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", !segment_r1.expanded || !ctx_r0.isExpandable(segment_r1));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", segment_r1.expanded && ctx_r0.isExpandable(segment_r1));
} }
let EpsGISJsonViewerComponent = class EpsGISJsonViewerComponent {
    constructor() {
        this.expanded = true;
        this.cleanOnChange = true;
        this.segments = [];
    }
    ngOnInit() {
        this.initJson();
    }
    initJson() {
        if (typeof this.json === 'string') {
            this.json = JSON.parse(this.json);
        }
        this.ngOnChanges();
    }
    ngOnChanges() {
        if (this.cleanOnChange) {
            this.segments = [];
        }
        if (typeof this.json === 'object') {
            Object.keys(this.json).forEach(key => {
                this.segments.push(this.parseKeyValue(key, this.json[key]));
            });
        }
        else {
            this.segments.push(this.parseKeyValue(`(${typeof this.json})`, this.json));
        }
    }
    isExpandable(segment) {
        return segment.type === 'object' || segment.type === 'array';
    }
    toggle(segment) {
        if (this.isExpandable(segment)) {
            segment.expanded = !segment.expanded;
        }
    }
    parseKeyValue(key, value) {
        const segment = {
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
    }
};
EpsGISJsonViewerComponent.ɵfac = function EpsGISJsonViewerComponent_Factory(t) { return new (t || EpsGISJsonViewerComponent)(); };
EpsGISJsonViewerComponent.ɵcmp = ɵɵdefineComponent({ type: EpsGISJsonViewerComponent, selectors: [["epsgis-json-viewer"]], inputs: { json: "json", expanded: "expanded", cleanOnChange: "cleanOnChange" }, features: [ɵɵNgOnChangesFeature], decls: 2, vars: 1, consts: [[1, "json-viewer"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [3, "ngClass", "click"], ["class", "toggler", 3, "ngClass", 4, "ngIf"], [1, "segment-key"], [1, "segment-separator"], ["class", "segment-value", 4, "ngIf"], ["class", "children", 4, "ngIf"], [1, "toggler", 3, "ngClass"], [1, "segment-value"], [1, "children"], [3, "json", "expanded"]], template: function EpsGISJsonViewerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "section", 0);
        ɵɵtemplate(1, EpsGISJsonViewerComponent_section_1_Template, 9, 11, "section", 1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.segments);
    } }, directives: [NgForOf, NgClass, NgIf, EpsGISJsonViewerComponent], styles: [".json-viewer[_ngcontent-%COMP%]{width:100%;height:100%;overflow:auto;position:relative}.json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]{padding:2px;margin:1px 1px 1px 12px}.json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]   .segment-main[_ngcontent-%COMP%]{word-wrap:break-word}.json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]   .segment-main[_ngcontent-%COMP%]   .toggler[_ngcontent-%COMP%]{position:absolute;margin-left:-14px;margin-top:3px;font-size:.8em;line-height:1.2em;vertical-align:middle;color:#787878}.json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]   .segment-main[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]:before{content:\"-\"}.json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]   .segment-main[_ngcontent-%COMP%]   .expand[_ngcontent-%COMP%]:before{content:\"+\"}.json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]   .segment-main[_ngcontent-%COMP%]   .segment-key[_ngcontent-%COMP%]{color:#4e187c}.json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]   .segment-main[_ngcontent-%COMP%]   .segment-separator[_ngcontent-%COMP%]{color:#999}.json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]   .segment-main[_ngcontent-%COMP%]   .segment-value[_ngcontent-%COMP%]{color:#000}.json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]   .children[_ngcontent-%COMP%]{margin-left:12px}.json-viewer[_ngcontent-%COMP%]   .segment-type-string[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-value[_ngcontent-%COMP%]{color:#ff6b6b}.json-viewer[_ngcontent-%COMP%]   .segment-type-number[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-value[_ngcontent-%COMP%]{color:#009688}.json-viewer[_ngcontent-%COMP%]   .segment-type-boolean[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-value[_ngcontent-%COMP%]{color:#b938a4}.json-viewer[_ngcontent-%COMP%]   .segment-type-date[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-value[_ngcontent-%COMP%]{color:#05668d}.json-viewer[_ngcontent-%COMP%]   .segment-type-array[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-value[_ngcontent-%COMP%], .json-viewer[_ngcontent-%COMP%]   .segment-type-function[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-value[_ngcontent-%COMP%], .json-viewer[_ngcontent-%COMP%]   .segment-type-object[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-value[_ngcontent-%COMP%]{color:#999}.json-viewer[_ngcontent-%COMP%]   .segment-type-null[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-value[_ngcontent-%COMP%], .json-viewer[_ngcontent-%COMP%]   .segment-type-undefined[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-value[_ngcontent-%COMP%]{color:#fff}.json-viewer[_ngcontent-%COMP%]   .segment-type-null[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-value[_ngcontent-%COMP%]{background-color:red}.json-viewer[_ngcontent-%COMP%]   .segment-type-undefined[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-key[_ngcontent-%COMP%]{color:#999}.json-viewer[_ngcontent-%COMP%]   .segment-type-undefined[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-value[_ngcontent-%COMP%]{background-color:#999}.json-viewer[_ngcontent-%COMP%]   .segment-type-array[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%], .json-viewer[_ngcontent-%COMP%]   .segment-type-object[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%]{white-space:nowrap}.json-viewer[_ngcontent-%COMP%]   .expanded[_ngcontent-%COMP%] > .toggler[_ngcontent-%COMP%]:after{transform:rotate(90deg)}.json-viewer[_ngcontent-%COMP%]   .expandable[_ngcontent-%COMP%], .json-viewer[_ngcontent-%COMP%]   .expandable[_ngcontent-%COMP%] > .toggler[_ngcontent-%COMP%]{cursor:pointer}"] });
EpsGISJsonViewerComponent = __decorate([
    ComponentRegister({
        uri: 'epsgis-json-viewer',
        path: "components/shared/jsonviewer"
    })
], EpsGISJsonViewerComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(EpsGISJsonViewerComponent, [{
        type: Component,
        args: [{
                selector: 'epsgis-json-viewer',
                templateUrl: './json-viewer.component.html',
                styleUrls: ['./json-viewer.component.scss']
            }]
    }], null, { json: [{
            type: Input
        }], expanded: [{
            type: Input
        }], cleanOnChange: [{
            type: Input
        }] }); })();

class SimpleReuseStrategy {
    constructor(injector) {
        this.injector = injector;
    }
    shouldDetach(route) {
        if (!route.routeConfig || route.routeConfig.loadChildren) {
            return false;
        }
        if (route.data.reuse === false) {
            return false;
        }
        const url = route['_routerState'].url;
        if (!this.appGlobal) {
            this.appGlobal = this.injector.get(AppGlobalConfig);
        }
        if (this.appGlobal.menuConfig
            && this.appGlobal.menuConfig.notReuseRoutes
            && this.appGlobal.menuConfig.notReuseRoutes.length >= 1) {
            return !this.appGlobal.menuConfig.notReuseRoutes.some(n => url.toLocaleLowerCase().indexOf(n.toLocaleLowerCase()) >= 0);
        }
        return true;
    }
    store(route, handle) {
        if (!route.routeConfig || route.routeConfig.loadChildren)
            return;
        const key = SimpleReuseStrategy.getRouteUrl(route);
        if (SimpleReuseStrategy.waitDelete && SimpleReuseStrategy.waitDelete === key) {
            SimpleReuseStrategy.waitDelete = null;
            return;
        }
        SimpleReuseStrategy.snapshots[key] = handle;
    }
    shouldAttach(route) {
        if (!route.routeConfig || route.routeConfig.loadChildren)
            return false;
        return !!SimpleReuseStrategy.snapshots[SimpleReuseStrategy.getRouteUrl(route)];
    }
    retrieve(route) {
        if (!route.routeConfig) {
            return null;
        }
        if (route.routeConfig.loadChildren) {
            Object.keys(SimpleReuseStrategy.snapshots).forEach(key => delete SimpleReuseStrategy.snapshots[key]);
            return null;
        }
        return SimpleReuseStrategy.snapshots[SimpleReuseStrategy.getRouteUrl(route)];
    }
    shouldReuseRoute(future, curr) {
        return future.routeConfig === curr.routeConfig && JSON.stringify(future.params) === JSON.stringify(curr.params);
    }
    static getRouteUrl(route) {
        const key = route['_routerState'].url.replace(/\//g, '_') + '_' + (route.routeConfig.loadChildren || route.routeConfig.component.toString().split('(')[0].split(' ')[1]);
        return key;
    }
    static deleteRouteSnapshot(key) {
        if (SimpleReuseStrategy.snapshots[key]) {
            this.deactivateOutlet(this.snapshots[key]);
            delete SimpleReuseStrategy.snapshots[key];
        }
        else {
            SimpleReuseStrategy.waitDelete = key;
        }
    }
    static deactivateOutlet(handle) {
        const componentRef = handle ? handle['componentRef'] : null;
        if (componentRef) {
            componentRef.destroy();
        }
    }
    static clearRouteSnapshot() {
        for (const key in this.snapshots) {
            if (this.snapshots[key]) {
                this.deactivateOutlet(this.snapshots[key]);
            }
        }
        this.snapshots = {};
        SimpleReuseStrategy.waitDelete = "";
    }
}
SimpleReuseStrategy.snapshots = {};

class MenuTabService {
    constructor() {
        this.index = 0;
        this.name = "";
    }
    add() {
        this.index++;
    }
    getIndex() {
        return this.index;
    }
    setName(n) {
        this.name = n;
    }
    getName() {
        return this.name;
    }
}
MenuTabService.ɵfac = function MenuTabService_Factory(t) { return new (t || MenuTabService)(); };
MenuTabService.ɵprov = ɵɵdefineInjectable({ token: MenuTabService, factory: MenuTabService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MenuTabService, [{
        type: Injectable
    }], function () { return []; }, null); })();

function MenuTabComponent_nz_tab_1_ng_template_1_i_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "i", 11);
    ɵɵlistener("click", function MenuTabComponent_nz_tab_1_ng_template_1_i_2_Template_i_click_0_listener($event) { ɵɵrestoreView(_r17); const menu_r1 = ɵɵnextContext(2).$implicit; const ctx_r15 = ɵɵnextContext(); return ctx_r15.closeTab($event, menu_r1); });
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵproperty("nzType", "close")("nzTheme", "outline");
} }
function MenuTabComponent_nz_tab_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 9);
    ɵɵlistener("contextmenu", function MenuTabComponent_nz_tab_1_ng_template_1_Template_div_contextmenu_0_listener($event) { ɵɵrestoreView(_r20); const menu_r1 = ɵɵnextContext().$implicit; const _r4 = ɵɵreference(4); const ctx_r18 = ɵɵnextContext(); return ctx_r18.contextMenu($event, menu_r1, _r4); });
    ɵɵtext(1);
    ɵɵtemplate(2, MenuTabComponent_nz_tab_1_ng_template_1_i_2_Template, 1, 2, "i", 10);
    ɵɵelementEnd();
} if (rf & 2) {
    const menu_r1 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", menu_r1.title, " ");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", menu_r1.canClose);
} }
function MenuTabComponent_nz_tab_1_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r24 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 12);
    ɵɵlistener("click", function MenuTabComponent_nz_tab_1_li_6_Template_li_click_0_listener($event) { ɵɵrestoreView(_r24); const menu_r1 = ɵɵnextContext().$implicit; const ctx_r22 = ɵɵnextContext(); return ctx_r22.selectDropdown($event, menu_r1, "closeTab"); });
    ɵɵelement(1, "i", 13);
    ɵɵelementStart(2, "span", 14);
    ɵɵtext(3, "\u5173\u95ED");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵproperty("nzType", "close")("nzTheme", "outline");
} }
function MenuTabComponent_nz_tab_1_li_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "li", 15);
} }
function MenuTabComponent_nz_tab_1_li_9_Template(rf, ctx) { if (rf & 1) {
    const _r27 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 12);
    ɵɵlistener("click", function MenuTabComponent_nz_tab_1_li_9_Template_li_click_0_listener($event) { ɵɵrestoreView(_r27); const menu_r1 = ɵɵnextContext().$implicit; const ctx_r25 = ɵɵnextContext(); return ctx_r25.selectDropdown($event, menu_r1, "selectTab"); });
    ɵɵelement(1, "i", 13);
    ɵɵelementStart(2, "span", 14);
    ɵɵtext(3, "\u9009\u4E2D");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵproperty("nzType", "check")("nzTheme", "outline");
} }
function MenuTabComponent_nz_tab_1_li_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "li", 15);
} }
function MenuTabComponent_nz_tab_1_li_11_Template(rf, ctx) { if (rf & 1) {
    const _r30 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 12);
    ɵɵlistener("click", function MenuTabComponent_nz_tab_1_li_11_Template_li_click_0_listener($event) { ɵɵrestoreView(_r30); const menu_r1 = ɵɵnextContext().$implicit; const ctx_r28 = ɵɵnextContext(); return ctx_r28.selectDropdown($event, menu_r1, "closeLeftTab"); });
    ɵɵelement(1, "i", 13);
    ɵɵelementStart(2, "span");
    ɵɵtext(3, "\u5173\u95ED\u5DE6\u4FA7\u9875\u9762");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵproperty("nzType", "close")("nzTheme", "outline");
} }
function MenuTabComponent_nz_tab_1_li_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "li", 15);
} }
function MenuTabComponent_nz_tab_1_li_13_Template(rf, ctx) { if (rf & 1) {
    const _r33 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 12);
    ɵɵlistener("click", function MenuTabComponent_nz_tab_1_li_13_Template_li_click_0_listener($event) { ɵɵrestoreView(_r33); const menu_r1 = ɵɵnextContext().$implicit; const ctx_r31 = ɵɵnextContext(); return ctx_r31.selectDropdown($event, menu_r1, "closeRightTab"); });
    ɵɵelement(1, "i", 13);
    ɵɵelementStart(2, "span");
    ɵɵtext(3, "\u5173\u95ED\u53F3\u4FA7\u9875\u9762");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵproperty("nzType", "close")("nzTheme", "outline");
} }
function MenuTabComponent_nz_tab_1_li_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "li", 15);
} }
function MenuTabComponent_nz_tab_1_li_15_Template(rf, ctx) { if (rf & 1) {
    const _r36 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 12);
    ɵɵlistener("click", function MenuTabComponent_nz_tab_1_li_15_Template_li_click_0_listener($event) { ɵɵrestoreView(_r36); const menu_r1 = ɵɵnextContext().$implicit; const ctx_r34 = ɵɵnextContext(); return ctx_r34.selectDropdown($event, menu_r1, "closeAllTab"); });
    ɵɵelement(1, "i", 13);
    ɵɵelementStart(2, "span");
    ɵɵtext(3, "\u4FDD\u7559\u7B2C\u4E00\u9875");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵproperty("nzType", "close")("nzTheme", "outline");
} }
function MenuTabComponent_nz_tab_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "nz-tab", 3);
    ɵɵtemplate(1, MenuTabComponent_nz_tab_1_ng_template_1_Template, 3, 2, "ng-template", null, 4, ɵɵtemplateRefExtractor);
    ɵɵelementStart(3, "nz-dropdown-menu", null, 5);
    ɵɵelementStart(5, "ul", 6);
    ɵɵtemplate(6, MenuTabComponent_nz_tab_1_li_6_Template, 4, 2, "li", 7);
    ɵɵtemplate(7, MenuTabComponent_nz_tab_1_li_7_Template, 1, 0, "li", 8);
    ɵɵelement(8, "li");
    ɵɵtemplate(9, MenuTabComponent_nz_tab_1_li_9_Template, 4, 2, "li", 7);
    ɵɵtemplate(10, MenuTabComponent_nz_tab_1_li_10_Template, 1, 0, "li", 8);
    ɵɵtemplate(11, MenuTabComponent_nz_tab_1_li_11_Template, 4, 2, "li", 7);
    ɵɵtemplate(12, MenuTabComponent_nz_tab_1_li_12_Template, 1, 0, "li", 8);
    ɵɵtemplate(13, MenuTabComponent_nz_tab_1_li_13_Template, 4, 2, "li", 7);
    ɵɵtemplate(14, MenuTabComponent_nz_tab_1_li_14_Template, 1, 0, "li", 8);
    ɵɵtemplate(15, MenuTabComponent_nz_tab_1_li_15_Template, 4, 2, "li", 7);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const menu_r1 = ctx.$implicit;
    const _r2 = ɵɵreference(2);
    ɵɵproperty("nzTitle", _r2);
    ɵɵadvance(6);
    ɵɵproperty("ngIf", menu_r1.canClose);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", menu_r1.canSelect);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", menu_r1.canSelect);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", menu_r1.canCloseLeft);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", menu_r1.canCloseLeft);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", menu_r1.canCloseRight);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", menu_r1.canCloseRight);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", menu_r1.canCloseExceptFirst);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", menu_r1.canCloseExceptFirst);
} }
const _c0$g = ["*"];
class MenuTabComponent {
    constructor(router, activatedRoute, nzDropdownService, cdr, appGlobal, menuTabService) {
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
        this.recurseFindMenu = (url, arr) => {
            let menu = null;
            if (arr && arr.length >= 1) {
                for (let index = 0; index < arr.length; index++) {
                    const m = arr[index];
                    if (m.path == url) {
                        menu = m;
                    }
                    else {
                        menu = this.recurseFindMenu(url, m.children);
                    }
                    if (menu) {
                        break;
                    }
                }
            }
            return menu;
        };
        this.router.events.pipe(filter$1(event => event instanceof NavigationEnd))
            .pipe(map$1(() => this.activatedRoute))
            .pipe(map$1(route => {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }))
            .pipe(filter$1(route => route.outlet === 'primary'))
            .subscribe(route => {
            this.addToTab(route);
        });
    }
    ngOnInit() {
    }
    ngOnDestroy() {
    }
    addToTab(activatedRoute) {
        if (this.router.url.indexOf("/login") >= 0) {
            this.clear();
            return;
        }
        const routeData = activatedRoute.data["value"];
        if (routeData.showInTab === false) {
            this.showTab = false;
            return;
        }
        if (this.appGlobal.menuConfig
            && this.appGlobal.menuConfig.notShowInTabRoutes
            && this.appGlobal.menuConfig.notShowInTabRoutes.length >= 1) {
            const exists = this.appGlobal.menuConfig.notShowInTabRoutes.some(n => this.router.url.toLocaleLowerCase().indexOf(n.toLocaleLowerCase()) >= 0);
            if (exists) {
                this.showTab = false;
                return;
            }
        }
        this.showTab = true;
        let title = routeData.title;
        if (!title) {
            const m = this.findMenu(this.router.url);
            title = m ? m.name : this.router.url;
        }
        this.router;
        let menu = {
            title: title,
            url: this.router.url,
            key: SimpleReuseStrategy.getRouteUrl(activatedRoute.snapshot)
        };
        const exitMenu = this.menuList.find(info => info.url === menu.url);
        if (!exitMenu) {
            this.menuList.push(menu);
        }
        this.currentIndex = this.menuList.findIndex(p => p.url === menu.url);
        this.refreshMenuList();
    }
    refreshMenuList() {
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
            let index = 0;
            this.menuList.forEach(item => {
                item.canClose = true;
                item.canCloseExceptFirst = true;
                item.canSelect = false;
                if (index !== this.currentIndex) {
                    item.canSelect = true;
                }
                item.canCloseLeft = true;
                item.canCloseRight = true;
                if (index === 0) {
                    item.canCloseLeft = false;
                }
                else if (index === (this.menuList.length - 1)) {
                    item.canCloseRight = false;
                }
                index++;
            });
        }
    }
    clear() {
        this.urlMapTitle.clear();
        this.menuList.splice(0);
        SimpleReuseStrategy.clearRouteSnapshot();
    }
    findMenu(url) {
        if (this.urlMapTitle.has(url)) {
            return this.urlMapTitle.get(url);
        }
        if (!this.appGlobal || !this.appGlobal.menuConfig.menuData) {
            return null;
        }
        const m = this.recurseFindMenu(url, this.appGlobal.menuConfig.menuData);
        if (m) {
            this.urlMapTitle.set(url, m);
        }
        return m;
    }
    getIndex(menu) {
        return this.menuList.findIndex(p => p.url === menu.url);
    }
    closeByUrl(key) {
        if (this.menuList.length === 1) {
            return;
        }
        const index = this.menuList.findIndex(p => p.key === key);
        if (index <= -1) {
            console.log("没有找到tab，无法关闭,key:" + key);
            return;
        }
        this.menuList.splice(index, 1);
        SimpleReuseStrategy.deleteRouteSnapshot(key);
        if (this.currentIndex === index) {
            let menu = this.menuList[index - 1];
            if (!menu) {
                menu = this.menuList[index];
            }
            this.router.navigate([menu.url]);
        }
    }
    nzSelectChange($event) {
        this.currentIndex = $event.index;
        const menu = this.menuList[this.currentIndex];
        this.router.navigate([menu.url]);
    }
    navigateToUrl(index) {
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
    }
    contextMenu($event, menu, menuComp) {
        this.nzDropdownService.create($event, menuComp);
    }
    selectDropdown(evt, menu, func) {
        this.nzDropdownService.close();
        this[func](evt, menu);
        UtilsService.detectChanges(this.cdr);
    }
    removeRoute(predicate, thisArg) {
        const arr = this.menuList.filter(predicate);
        if (arr && arr.length >= 1) {
            arr.forEach(m => {
                SimpleReuseStrategy.deleteRouteSnapshot(m.key);
            });
        }
    }
    closeTabByRoute(activatedRoute) {
        const key = SimpleReuseStrategy.getRouteUrl(activatedRoute.snapshot);
        this.closeTabByKey(key);
    }
    closeTabByKey(key) {
        this.closeByUrl(key);
    }
    closeTab(evt, menu) {
        this.closeByUrl(menu.key);
        this.refreshMenuList();
    }
    selectTab(evt, menu) {
        this.navigateToUrl(this.getIndex(menu));
        this.refreshMenuList();
    }
    closeLeftTab(evt, menu) {
        const index = this.getIndex(menu);
        if (index >= 1) {
            this.removeRoute((v, i, a) => {
                if (i < index) {
                    return v;
                }
            });
            this.menuList.splice(0, index);
            this.navigateToUrl(0);
        }
        this.refreshMenuList();
    }
    closeRightTab(evt, menu) {
        const index = this.getIndex(menu);
        if (index >= 0) {
            this.removeRoute((v, i, a) => {
                if (i > index) {
                    return v;
                }
            });
            this.menuList.splice(index + 1);
            this.navigateToUrl(index);
        }
        this.refreshMenuList();
    }
    closeAllTab(evt, menu) {
        this.removeRoute((v, i, a) => { if (i >= 1) {
            return v;
        } });
        this.menuList.splice(1);
        this.navigateToUrl(0);
        this.refreshMenuList();
    }
}
MenuTabComponent.ɵfac = function MenuTabComponent_Factory(t) { return new (t || MenuTabComponent)(ɵɵdirectiveInject(Router), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(NzContextMenuService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(AppGlobalConfig), ɵɵdirectiveInject(MenuTabService)); };
MenuTabComponent.ɵcmp = ɵɵdefineComponent({ type: MenuTabComponent, selectors: [["epsgis-menu-tab"]], ngContentSelectors: _c0$g, decls: 4, vars: 6, consts: [["nzShowPagination", "true", 2, "margin-left", "-1px", 3, "nzAnimated", "nzSelectedIndex", "nzType", "nzSelectChange"], [3, "nzTitle", 4, "ngFor", "ngForOf"], [1, "tab-content"], [3, "nzTitle"], ["nzTabHeading", ""], ["menuComp", "nzDropdownMenu"], ["nz-menu", "", "nzInDropDown", "", 1, "dropdown-menu"], ["nz-menu-item", "", 3, "click", 4, "ngIf"], ["nz-menu-divider", "", 4, "ngIf"], [3, "contextmenu"], ["nz-icon", "", 3, "nzType", "nzTheme", "click", 4, "ngIf"], ["nz-icon", "", 3, "nzType", "nzTheme", "click"], ["nz-menu-item", "", 3, "click"], ["nz-icon", "", 3, "nzType", "nzTheme"], [1, "danger"], ["nz-menu-divider", ""]], template: function MenuTabComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "nz-tabset", 0);
        ɵɵlistener("nzSelectChange", function MenuTabComponent_Template_nz_tabset_nzSelectChange_0_listener($event) { return ctx.nzSelectChange($event); });
        ɵɵtemplate(1, MenuTabComponent_nz_tab_1_Template, 16, 10, "nz-tab", 1);
        ɵɵelementEnd();
        ɵɵelementStart(2, "div", 2);
        ɵɵprojection(3);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵclassProp("hide", !ctx.showTab);
        ɵɵproperty("nzAnimated", true)("nzSelectedIndex", ctx.currentIndex)("nzType", "line");
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.menuList);
    } }, directives: [NzTabSetComponent, NgForOf, NzTabComponent, NzDropdownMenuComponent, NzMenuDirective, NgIf, NzIconDirective, NzMenuItemDirective, NzMenuDividerDirective], styles: [".close-red[_ngcontent-%COMP%]{color:red}[_nghost-%COMP%]     .anticon-close{margin-left:10px}[_nghost-%COMP%]     .anticon-close :hover{color:red}[_nghost-%COMP%]     .ant-tabs-bar{margin:0}.hide[_ngcontent-%COMP%]{display:none}.tab-content[_ngcontent-%COMP%]{width:100%;height:calc(100vh - 50px);position:relative}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MenuTabComponent, [{
        type: Component,
        args: [{
                selector: 'epsgis-menu-tab',
                templateUrl: './menu-tab.component.html',
                styleUrls: ['./menu-tab.component.scss']
            }]
    }], function () { return [{ type: Router }, { type: ActivatedRoute }, { type: NzContextMenuService }, { type: ChangeDetectorRef }, { type: AppGlobalConfig }, { type: MenuTabService }]; }, null); })();

const _c0$h = ["ss-modal-titlebar-button", ""];
function SsModalTitleBarButtonComponent_ng_container_0_div_1_i_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 5);
} if (rf & 2) {
    const button_r2 = ɵɵnextContext().$implicit;
    ɵɵstyleMap(button_r2.style);
    ɵɵproperty("nzIconfont", button_r2.icon);
} }
function SsModalTitleBarButtonComponent_ng_container_0_div_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 6);
} if (rf & 2) {
    const button_r2 = ɵɵnextContext().$implicit;
    ɵɵstyleMap(button_r2.style);
    ɵɵproperty("nzType", button_r2.icon)("nzTheme", button_r2.theme)("nzSpin", button_r2.spin)("nzTwotoneColor", button_r2.twotoneColor)("nzRotate", button_r2.rotate);
} }
function SsModalTitleBarButtonComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 2);
    ɵɵlistener("click", function SsModalTitleBarButtonComponent_ng_container_0_div_1_Template_div_click_0_listener() { ɵɵrestoreView(_r9); const button_r2 = ctx.$implicit; const ctx_r8 = ɵɵnextContext(2); return ctx_r8.onButtonClick(button_r2); });
    ɵɵtemplate(1, SsModalTitleBarButtonComponent_ng_container_0_div_1_i_1_Template, 1, 3, "i", 3);
    ɵɵtemplate(2, SsModalTitleBarButtonComponent_ng_container_0_div_1_ng_template_2_Template, 1, 7, "ng-template", null, 4, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
} if (rf & 2) {
    const button_r2 = ctx.$implicit;
    const _r4 = ɵɵreference(3);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", button_r2.isIconfont)("ngIfElse", _r4);
} }
function SsModalTitleBarButtonComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SsModalTitleBarButtonComponent_ng_container_0_div_1_Template, 4, 2, "div", 1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r0.buttons);
} }
class SsModalTitleBarButtonComponent {
    constructor(config) {
        this.config = config;
        this.buttons = [];
        this.destroy$ = new Subject();
        if (Array.isArray(config.titleBarButtons)) {
            this.buttons = config.titleBarButtons.map(mergeDefaultOption$1);
        }
    }
    getButtonCallableProp(options, prop) {
        const value = options[prop];
        if (this.modalRef) {
            const componentInstance = this.modalRef.getContentComponent();
            return typeof value === 'function' ? value.apply(options, componentInstance && [componentInstance]) : value;
        }
        return false;
    }
    onButtonClick(options) {
        this.getButtonCallableProp(options, 'onClick');
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
SsModalTitleBarButtonComponent.ɵfac = function SsModalTitleBarButtonComponent_Factory(t) { return new (t || SsModalTitleBarButtonComponent)(ɵɵdirectiveInject(SsModalOptions)); };
SsModalTitleBarButtonComponent.ɵcmp = ɵɵdefineComponent({ type: SsModalTitleBarButtonComponent, selectors: [["div", "ss-modal-titlebar-button", ""]], hostAttrs: [1, ""], inputs: { modalRef: "modalRef" }, attrs: _c0$h, decls: 1, vars: 1, consts: [[4, "ngIf"], ["class", "ssmodal_titlebar_button", 3, "click", 4, "ngFor", "ngForOf"], [1, "ssmodal_titlebar_button", 3, "click"], ["nz-icon", "", 3, "nzIconfont", "style", 4, "ngIf", "ngIfElse"], ["ngzorro", ""], ["nz-icon", "", 3, "nzIconfont"], ["nz-icon", "", 3, "nzType", "nzTheme", "nzSpin", "nzTwotoneColor", "nzRotate"]], template: function SsModalTitleBarButtonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, SsModalTitleBarButtonComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.buttons && ctx.buttons.length >= 1);
    } }, directives: [NgIf, NgForOf, NzIconDirective], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(SsModalTitleBarButtonComponent, [{
        type: Component,
        args: [{
                selector: 'div[ss-modal-titlebar-button]',
                template: `
    <ng-container *ngIf="buttons && buttons.length>=1;">
          <div class="ssmodal_titlebar_button" *ngFor="let button of buttons"  (click)="onButtonClick(button)">
            <i
            nz-icon
            *ngIf="button.isIconfont;else ngzorro"
            [nzIconfont]="button.icon"
            
            [style]="button.style"
            >
            </i>

          <ng-template #ngzorro>
                <i nz-icon 
                [nzType]="button.icon" 
                [nzTheme]="button.theme"
                [nzSpin]="button.spin"
                [nzTwotoneColor]="button.twotoneColor"
                [nzRotate]="button.rotate"
                [style]="button.style"
                ></i>
          </ng-template>
          </div>
      </ng-container>
      
  `,
                host: {
                    class: ''
                },
                changeDetection: ChangeDetectionStrategy.Default
            }]
    }], function () { return [{ type: SsModalOptions }]; }, { modalRef: [{
            type: Input
        }] }); })();
function mergeDefaultOption$1(options) {
    return Object.assign({ icon: null, theme: 'outline', spin: false, twotoneColor: null, isIconfont: false, rotate: null, title: "", style: "" }, options);
}

class EpsGisModalModule {
}
EpsGisModalModule.ɵmod = ɵɵdefineNgModule({ type: EpsGisModalModule });
EpsGisModalModule.ɵinj = ɵɵdefineInjector({ factory: function EpsGisModalModule_Factory(t) { return new (t || EpsGisModalModule)(); }, imports: [[
            CommonModule,
            NzIconModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(EpsGisModalModule, { declarations: [ModalContainerComponent, SSModalComponent, SsModalFooterComponent, SsModalFooterDirective, SsModalTitleBarButtonComponent], imports: [CommonModule,
        NzIconModule], exports: [SSModalComponent, SsModalFooterComponent, SsModalTitleBarButtonComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(EpsGisModalModule, [{
        type: NgModule,
        args: [{
                declarations: [ModalContainerComponent, SSModalComponent, SsModalFooterComponent, SsModalFooterDirective, SsModalTitleBarButtonComponent],
                exports: [SSModalComponent, SsModalFooterComponent, SsModalTitleBarButtonComponent],
                entryComponents: [ModalContainerComponent, SSModalComponent],
                imports: [
                    CommonModule,
                    NzIconModule
                ]
            }]
    }], null, null); })();
ɵɵsetComponentScope(ModalContainerComponent, [NgStyle, NgIf, SsModalTitleBarButtonComponent, SsModalFooterComponent], []);

class EpsGisModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('EpsGisModule is already loaded. Import it in the AppModule only');
        }
    }
    static forRoot(config) {
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
                { provide: APP_INITIALIZER, useFactory: loadGlobalConfig, deps: [AppGlobalConfigToken, AppInitService, HttpClient], multi: true }
            ]
        };
    }
}
EpsGisModule.ɵmod = ɵɵdefineNgModule({ type: EpsGisModule });
EpsGisModule.ɵinj = ɵɵdefineInjector({ factory: function EpsGisModule_Factory(t) { return new (t || EpsGisModule)(ɵɵinject(EpsGisModule, 12)); }, imports: [[
            CommonModule,
            EpsGisWidgetBaseModule,
            EpsGisDirectivesModule,
            EpsGisCompContainerModule,
            EpsGisModalModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(EpsGisModule, { imports: [CommonModule,
        EpsGisWidgetBaseModule,
        EpsGisDirectivesModule,
        EpsGisCompContainerModule,
        EpsGisModalModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(EpsGisModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    EpsGisWidgetBaseModule,
                    EpsGisDirectivesModule,
                    EpsGisCompContainerModule,
                    EpsGisModalModule
                ],
                declarations: [],
                exports: []
            }]
    }], function () { return [{ type: EpsGisModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();
const loadGlobalConfig = (config, service) => {
    return () => service.init(config).loadGlobalConfig();
};
const setGlobalConfig = (service) => {
    return service.getConfig();
};

class EpsGISNgxViewerModule {
}
EpsGISNgxViewerModule.ɵmod = ɵɵdefineNgModule({ type: EpsGISNgxViewerModule });
EpsGISNgxViewerModule.ɵinj = ɵɵdefineInjector({ factory: function EpsGISNgxViewerModule_Factory(t) { return new (t || EpsGISNgxViewerModule)(); }, imports: [[
            CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(EpsGISNgxViewerModule, { declarations: [EpsGISNgxViewerComponent,
        PDFViewerComponent,
        ImageViewerComponent,
        VideoViewerComponent,
        EpsGISJsonViewerComponent], imports: [CommonModule], exports: [EpsGISNgxViewerComponent,
        PDFViewerComponent,
        ImageViewerComponent,
        VideoViewerComponent,
        EpsGISJsonViewerComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(EpsGISNgxViewerModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                entryComponents: [
                    EpsGISNgxViewerComponent,
                    PDFViewerComponent,
                    ImageViewerComponent,
                    VideoViewerComponent,
                    EpsGISJsonViewerComponent
                ],
                declarations: [
                    EpsGISNgxViewerComponent,
                    PDFViewerComponent,
                    ImageViewerComponent,
                    VideoViewerComponent,
                    EpsGISJsonViewerComponent
                ],
                exports: [
                    EpsGISNgxViewerComponent,
                    PDFViewerComponent,
                    ImageViewerComponent,
                    VideoViewerComponent,
                    EpsGISJsonViewerComponent
                ]
            }]
    }], null, null); })();

class EpsGisMenuTabModule {
}
EpsGisMenuTabModule.ɵmod = ɵɵdefineNgModule({ type: EpsGisMenuTabModule });
EpsGisMenuTabModule.ɵinj = ɵɵdefineInjector({ factory: function EpsGisMenuTabModule_Factory(t) { return new (t || EpsGisMenuTabModule)(); }, providers: [
        MenuTabService
    ], imports: [[
            CommonModule,
            NzTabsModule,
            NzIconModule,
            NzDropDownModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(EpsGisMenuTabModule, { declarations: [MenuTabComponent], imports: [CommonModule,
        NzTabsModule,
        NzIconModule,
        NzDropDownModule], exports: [MenuTabComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(EpsGisMenuTabModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    NzTabsModule,
                    NzIconModule,
                    NzDropDownModule
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
    }], null, null); })();

class IdGenerater {
    static newGuid(format = "N") {
        let d = new Date().getTime();
        let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            let r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        if (format === "N" || format === "n") {
            uuid = uuid.replace(/-/g, "");
        }
        if (format === "B" || format === "b") {
            uuid = `{${uuid}}`;
        }
        if (format === "P" || format === "p") {
            uuid = `(${uuid})`;
        }
        if (format === "X" || format === "x") {
        }
        return uuid;
    }
    ;
}

class LocalStorageHelper {
    static setItem(key, data) {
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
    }
    static getItem(key) {
        if (window.localStorage) {
            return localStorage.getItem(key);
        }
        else {
            console.log("浏览器不支持localStorage");
        }
    }
}

class Md5 {
    constructor() {
        this._state = new Int32Array(4);
        this._buffer = new ArrayBuffer(68);
        this._buffer8 = new Uint8Array(this._buffer, 0, 68);
        this._buffer32 = new Uint32Array(this._buffer, 0, 17);
        this.start();
    }
    static hashStr(str, raw = false) {
        return Md5.onePassHasher
            .start()
            .appendStr(str)
            .end(raw);
    }
    static hashAsciiStr(str, raw = false) {
        return Md5.onePassHasher
            .start()
            .appendAsciiStr(str)
            .end(raw);
    }
    static _hex(x) {
        const hc = Md5.hexChars;
        const ho = Md5.hexOut;
        let n;
        let offset;
        let j;
        let i;
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
    }
    static _md5cycle(x, k) {
        let a = x[0];
        let b = x[1];
        let c = x[2];
        let d = x[3];
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
    }
    start() {
        this._dataLength = 0;
        this._bufferLength = 0;
        this._state.set(Md5.stateIdentity);
        return this;
    }
    appendStr(str) {
        const buf8 = this._buffer8;
        const buf32 = this._buffer32;
        let bufLen = this._bufferLength;
        let code;
        let i;
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
    }
    appendAsciiStr(str) {
        const buf8 = this._buffer8;
        const buf32 = this._buffer32;
        let bufLen = this._bufferLength;
        let i;
        let j = 0;
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
    }
    appendByteArray(input) {
        const buf8 = this._buffer8;
        const buf32 = this._buffer32;
        let bufLen = this._bufferLength;
        let i;
        let j = 0;
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
    }
    getState() {
        const self = this;
        const s = self._state;
        return {
            buffer: String.fromCharCode.apply(null, self._buffer8),
            buflen: self._bufferLength,
            length: self._dataLength,
            state: [s[0], s[1], s[2], s[3]]
        };
    }
    setState(state) {
        const buf = state.buffer;
        const x = state.state;
        const s = this._state;
        let i;
        this._dataLength = state.length;
        this._bufferLength = state.buflen;
        s[0] = x[0];
        s[1] = x[1];
        s[2] = x[2];
        s[3] = x[3];
        for (i = 0; i < buf.length; i += 1) {
            this._buffer8[i] = buf.charCodeAt(i);
        }
    }
    end(raw = false) {
        const bufLen = this._bufferLength;
        const buf8 = this._buffer8;
        const buf32 = this._buffer32;
        const i = (bufLen >> 2) + 1;
        let dataBitsLen;
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
            const matches = dataBitsLen.toString(16).match(/(.*?)(.{0,8})$/);
            if (matches === null) {
                return;
            }
            const lo = parseInt(matches[2], 16);
            const hi = parseInt(matches[1], 16) || 0;
            buf32[14] = lo;
            buf32[15] = hi;
        }
        Md5._md5cycle(this._state, buf32);
        return raw ? this._state : Md5._hex(this._state);
    }
}
Md5.stateIdentity = new Int32Array([1732584193, -271733879, -1732584194, 271733878]);
Md5.buffer32Identity = new Int32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
Md5.hexChars = '0123456789abcdef';
Md5.hexOut = [];
Md5.onePassHasher = new Md5();
if (Md5.hashStr('hello') !== '5d41402abc4b2a76b9719d911017c592') {
    console.error('Md5 self test failed.');
}

class PropWatcher {
    static watch(obj, prop, after, before) {
        let oldval = obj[prop], newval = oldval, getter = () => {
            return newval;
        }, setter = (val) => {
            oldval = newval;
            if (before && typeof before === "function") {
                newval = before.call(obj, prop, oldval, val);
            }
            else {
                newval = val;
            }
            if (oldval != newval) {
                Promise.resolve().then(() => { after.call(obj, prop, oldval, newval); });
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
        return () => { PropWatcher.unwatch(obj, prop); };
    }
    static unwatch(obj, prop) {
        let val = obj[prop];
        delete obj[prop];
        obj[prop] = val;
    }
}

export { AppGlobalConfig, AppGlobalConfigToken, AppInitService, AuthService, BaseMapComponent, BasePanelComponent, BaseSettingComponent, BaseWidgetComponent, BaseWidgetFrame, BaseWidgetPanel, BaseWidgetSetting, CommonService, CompContainerComponent, ComponentContainerDirective, ComponentLoaderService, ComponentRegister, ComponentRegistry, ConfigLoaderService, ConfigManagerService, DefaultPanelOptions, DockablePanelAtBottomComponent, DockablePanelAtLeftComponent, DockablePanelAtRightComponent, EpsGISJsonViewerComponent, EpsGISNgxViewerComponent, EpsGISNgxViewerModule, EpsGisCompContainerModule, EpsGisDirectivesModule, EpsGisMenuTabModule, EpsGisModalModule, EpsGisModule, EpsGisWidgetBaseModule, EventEmitterService, GISAuthService, HttpReqService, IdGenerater, IframePanelComponent, ImageViewerComponent, LayoutManagerService, LocalStorageHelper, MapManagerService, Md5, MenuTabComponent, MenuTabService, MobileActionPanelComponent, MobileDrawerPanelComponent, MobileModalPanelComponent, MobilePopupPanelComponent, ModalContainerComponent, ModalManagerService, OnScreenWidgetIconComponent, OnScreenWidgetPanel, OnScreenWidgetPanelComponent, OrderByType, PDFViewerComponent, PanelDockMode, PanelInMobileShowMode, PanelManagerService, PanelTitleBarComponent, PipesModule, PlatformService, PropWatcher, RequestResultModel, ResultfofComponent, ResultfooComponent, ResultfotComponent, SSModalAPI, SSModalComponent, SafeUrlPipe, ServiceInjector, SharedUtilsService, SimpleReuseStrategy, SsModalFooterComponent, SsModalFooterDirective, SsModalOptions, SsModalRef, SsModalTitleBarButtonComponent, TestAspect, UtilsService, VideoViewerComponent, WidgetManagerService, WidgetPlaceHolderService, WidgetPlaceholder, WidgetPosition, WidgetSettingComponent, WidgetState, WidgetType, WidgetWindowState, applyConfigDefaults, aspect, defaultAppGlobalConfig, findComponentInfo, getConfigFromComponent, getPlatforms, isPlatform, isPromise, loadGlobalConfig, setContentInstanceParams, setGlobalConfig, setupPlatforms, simpleLoader, testUserAgent, throwNzModalContentAlreadyAttachedError };
//# sourceMappingURL=epsgis.js.map
