import { NgIf, NgForOf, NgStyle, CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵInheritDefinitionFeature, ɵɵelement, ɵɵtemplate, ɵsetClassMetadata, Component, ViewChild, ɵɵdefineDirective, Directive, ɵɵlistener, ɵɵclassProp, ɵɵproperty, HostListener, ɵɵgetCurrentView, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵrestoreView, ɵɵnextContext, ɵɵadvance, ɵɵtextInterpolate, ɵɵpureFunction0, Input, ɵɵtemplateRefExtractor, ɵɵreference, ɵɵelementContainerStart, ɵɵnamespaceSVG, ɵɵelementContainerEnd, ɵɵnamespaceHTML, ChangeDetectorRef, ɵɵtextInterpolate3, ɵɵsanitizeUrl, ɵɵinject, ɵɵdefineInjectable, Injectable, ɵɵpureFunction2, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NgControlStatus, NgModel, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IdGenerater, BaseMapComponent, simpleLoader, ComponentLoaderService, ComponentContainerDirective, ComponentRegister, BaseWidgetComponent, PropWatcher, ModalManagerService, UtilsService, HttpReqService, EpsGisDirectivesModule } from 'epsgis';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberComponent, NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzTreeNode, NzTreeComponent, NzTreeModule } from 'ng-zorro-antd/tree';
import { NzTreeViewModule } from 'ng-zorro-antd/tree-view';
import { NzPopoverDirective, NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzDividerComponent, NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonComponent, NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzContextMenuService, NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzRowDirective, NzColDirective, NzGridModule } from 'ng-zorro-antd/grid';
import { NzSliderComponent, NzSliderModule } from 'ng-zorro-antd/slider';
import { NzTabSetComponent, NzTabComponent, NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTableComponent, NzTbodyComponent, NzTrDirective, NzTableCellDirective, NzTableModule } from 'ng-zorro-antd/table';
import { NzSwitchComponent, NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzFormModule } from 'ng-zorro-antd/form';
import { __decorate } from 'tslib';
import { isArray } from 'lodash';
import { ɵNzTransitionPatchDirective } from 'ng-zorro-antd/core/transition-patch';
import { NzWaveDirective } from 'ng-zorro-antd/core/wave';
import turf from 'turf';

var LayerType;
(function (LayerType) {
    LayerType["Imagery"] = "Imagery";
    LayerType["Tileset"] = "Tileset";
    LayerType["Terrain"] = "Terrain";
})(LayerType || (LayerType = {}));
var LayerServiceSource;
(function (LayerServiceSource) {
    LayerServiceSource[LayerServiceSource["ArcGis"] = 0] = "ArcGis";
    LayerServiceSource[LayerServiceSource["SuperMap"] = 1] = "SuperMap";
    LayerServiceSource[LayerServiceSource["TianDiTu"] = 2] = "TianDiTu";
    LayerServiceSource[LayerServiceSource["BaiDu"] = 3] = "BaiDu";
    LayerServiceSource[LayerServiceSource["GaoDe"] = 4] = "GaoDe";
    LayerServiceSource[LayerServiceSource["EpsPlanet"] = 5] = "EpsPlanet";
})(LayerServiceSource || (LayerServiceSource = {}));

function newXbsjFolderNode(title) {
    return {
        title: title,
        children: []
    };
}
function newXbsjLayerNode(type, title, url) {
    const _type = type.toLocaleLowerCase();
    let result = { czmObject: null };
    switch (_type) {
        case LayerType.Imagery.toLocaleLowerCase():
            result.czmObject = newXbsjImageryLayerNode(title, url);
            break;
        case LayerType.Tileset.toLocaleLowerCase():
            result.czmObject = newXbsjTilesetLayerNode(title, url);
            break;
        case LayerType.Terrain.toLocaleLowerCase():
            result.czmObject = newXbsjTerrainLayerNode(title, url);
            break;
        default:
            break;
    }
    return result;
}
function newXbsjImageryLayerNode(title, url) {
    let node = {
        xbsjType: LayerType.Imagery,
        name: title,
        enable: true,
        show: true,
        xbsjImageryProvider: {
            XbsjImageryProvider: {
                url: url
            }
        }
    };
    return node;
}
function newXbsjTilesetLayerNode(title, url) {
    let node = {
        xbsjType: LayerType.Tileset,
        name: title,
        url: url,
        enable: true,
        show: true,
    };
    return node;
}
function newXbsjTerrainLayerNode(title, url) {
    return {
        xbsjType: LayerType.Terrain,
        name: title,
        enable: true,
        show: true,
        xbsjTerrainProvider: {
            type: "XbsjCesiumTerrainProvider",
            XbsjEllipsoidTerrainProvider: {},
            XbsjCesiumTerrainProvider: {
                url: url,
                requestVertexNormals: true,
                requestWaterMask: true
            }
        }
    };
}

class SceneTreeUtils {
    static SceneTree2NgZorroTree(root) {
        if (!root || !root.children || root.children.length <= 0) {
            return root;
        }
        let rootNode = null;
        if (root.title && root.title !== "未命名") {
            rootNode = new NzTreeNode({
                title: root.title,
                expanded: root.expand === true,
                key: root.guid || root.xbsjGuid || IdGenerater.newGuid(),
                origin: root,
                isLeaf: false,
                parentNode: null
            });
        }
        const _layerNodes = [];
        if (rootNode) {
            rootNode.children.push(...SceneTreeUtils.convertChildren(root.children, rootNode));
            _layerNodes.push(rootNode);
        }
        else {
            _layerNodes.push(...SceneTreeUtils.convertChildren(root.children, rootNode));
        }
        return _layerNodes;
    }
    static convertChildren(children, parentNode) {
        if (!children || children.length <= 0) {
            return [];
        }
        const _layerNodes = [];
        children.forEach(item => {
            let node = null;
            if (item.children) {
                node = new NzTreeNode({
                    title: item.title,
                    expanded: item.expand === true,
                    isChecked: true,
                    key: item.guid || item.xbsjGuid || IdGenerater.newGuid(),
                    origin: item,
                    isLeaf: false,
                    parentNode: parentNode
                });
                if (item.children.length >= 1) {
                    node.children.push(...SceneTreeUtils.convertChildren(item.children, node));
                }
                console.log(node);
                node.isChecked = true;
                _layerNodes.push(node);
            }
            else {
                let childNode = SceneTreeUtils.convertCzmObject(item.czmObject, parentNode);
                childNode.parentNode = childNode.origin.parentNode;
                _layerNodes.push(childNode);
            }
        });
        return _layerNodes;
    }
    static convertCzmObject(czmObject, parentNode) {
        if (!czmObject) {
            return null;
        }
        return new NzTreeNode({
            title: czmObject.name,
            key: czmObject.guid || czmObject.xbsjGuid || IdGenerater.newGuid(),
            origin: czmObject,
            isLeaf: true,
            checked: czmObject.show,
            parentNode: parentNode
        });
    }
    static GetXbsjCzmObject(node) {
        return node && node.origin && node.origin.origin;
    }
    static loadLayers(layerConfig) {
        if (!layerConfig) {
            return null;
        }
        if (!layerConfig.basemaps && !layerConfig.layers) {
            return null;
        }
        const _layerNodes = [];
        const _layerlist = [
            {
                "title": "basemap",
                "ref": "basemap",
                "children": [],
            },
            {
                "title": "layerlist",
                "ref": "layerlist",
                "children": [],
            },
            {
                "tilte": "pin",
                "ref": "pin",
                "children": []
            }
        ];
        if (typeof layerConfig.basemaps === "object" && isArray(layerConfig.basemaps)) {
            layerConfig.basemaps.forEach((item) => {
                _layerlist[0].children.push(SceneTreeUtils.loadLayerNode(item));
            });
        }
        if (typeof layerConfig.layers === "object" && isArray(layerConfig.layers)) {
            layerConfig.layers.forEach((item) => {
                _layerlist[1].children.push(SceneTreeUtils.loadLayerNode(item));
            });
        }
        return { children: _layerlist };
    }
    static loadLayerNode(item) {
        if (isArray(item.children)) {
            const node = newXbsjFolderNode(item.title);
            if (item.children && item.children.length >= 1) {
                item.children.forEach((child) => {
                    node.children.push(SceneTreeUtils.loadLayerNode(child));
                });
            }
            return node;
        }
        else if (item.url || item.layer) {
            const node = newXbsjLayerNode(item.type, item.title, item.url);
            node.czmObject.xbsjGuid = item.guid;
            node.ref = item.ref;
            if (node.czmObject.hasOwnProperty("xbsjImageryProvider")) {
                if (item.srcCoordType) {
                    node.czmObject.xbsjImageryProvider.XbsjImageryProvider.srcCoordType = item.srcCoordType;
                }
                if (item.dstCoordType) {
                    node.czmObject.xbsjImageryProvider.XbsjImageryProvider.dstCoordType = item.dstCoordType;
                }
            }
            else if (node.czmObject.hasOwnProperty("xbsjTerrainProvider")) {
            }
            else if (node.hasOwnProperty("url")) {
            }
            if (item.extendOptions) {
                node.czmObject = Object.assign(node.czmObject, item.extendOptions);
            }
            return node;
        }
        return null;
    }
}

const _c0 = ["earthContainer"];
function PlanetEarthComponent_ng_template_2_Template(rf, ctx) { }
let PlanetEarthComponent = class PlanetEarthComponent extends BaseMapComponent {
    constructor(componentLoader) {
        super(componentLoader);
        this.componentLoader = componentLoader;
        this.resources = [
            "XbsjEarth/XbsjEarth.js"
        ];
    }
    static getCompInfo() {
        return { name: "PlanetEarthComponent", path: "epsplanet/components/earth" };
    }
    ngOnInit() {
        super.ngOnInit();
        this.is3D = true;
    }
    initMap() {
        this.is3D = true;
        return new Promise((resolve, reject) => {
            const jsApi = this.appConfig.map.jsApi;
            if (!jsApi) {
                reject("没有配置jsApi");
                return;
            }
            const resFullPaths = [];
            this.resources.forEach(path => {
                resFullPaths.push(jsApi + "/" + path);
            });
            simpleLoader.loadResources(resFullPaths, null, null, () => {
                const XE = window["XE"];
                if (!XE) {
                    reject("XE undefined");
                    return;
                }
                XE.ready().then(() => {
                    var earth = new XE.Earth("earthContainer", {
                        homeButton: true,
                        timeline: false,
                        sceneModePicker: true
                    });
                    earth.interaction.picking.enabled = true;
                    earth.interaction.picking.hoverEnable = true;
                    const layerNode = SceneTreeUtils.loadLayers(this.config).children;
                    console.log(layerNode);
                    earth.sceneTree.root.children.push(...layerNode);
                    earth.camera.navigator.showCompass = true;
                    earth.camera.navigator.showDistanceLegend = true;
                    window["earth"] = earth;
                    if (this.config.mapOptions && this.config.mapOptions.center) {
                        let x = 116.26984645340727, y = 40.10171604578351, h = 230;
                        if (this.config.mapOptions.center.length >= 1) {
                            x = this.config.mapOptions.center[0];
                        }
                        if (this.config.mapOptions.center.length >= 2) {
                            y = this.config.mapOptions.center[1];
                        }
                        if (this.config.mapOptions.center.length >= 3) {
                            h = this.config.mapOptions.center[2];
                        }
                        earth.czm.viewer.camera.flyTo({
                            destination: Cesium.Cartesian3.fromDegrees(x, y, h),
                            orientation: {
                                heading: Cesium.Math.toRadians(5),
                                pitch: Cesium.Math.toRadians(-36.0),
                            }
                        });
                    }
                    resolve(earth);
                });
            });
        });
    }
};
PlanetEarthComponent.ɵfac = function PlanetEarthComponent_Factory(t) { return new (t || PlanetEarthComponent)(ɵɵdirectiveInject(ComponentLoaderService)); };
PlanetEarthComponent.ɵcmp = ɵɵdefineComponent({ type: PlanetEarthComponent, selectors: [["epsgis-planet-earth"]], viewQuery: function PlanetEarthComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0, 3);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.earthContainer = _t.first);
    } }, features: [ɵɵInheritDefinitionFeature], decls: 3, vars: 0, consts: [["id", "earthContainer", 1, "earthContainer"], ["earthContainer", ""], ["component-host", ""]], template: function PlanetEarthComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "div", 0, 1);
        ɵɵtemplate(2, PlanetEarthComponent_ng_template_2_Template, 0, 0, "ng-template", 2);
    } }, directives: [ComponentContainerDirective], styles: [".earthContainer[_ngcontent-%COMP%]{width:100%;height:100%;background:grey}"] });
PlanetEarthComponent = __decorate([
    ComponentRegister({
        uri: "epsgis-planet-earth",
        path: "epsplanet/components/earth",
        name: "PlanetEarthComponent"
    })
], PlanetEarthComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(PlanetEarthComponent, [{
        type: Component,
        args: [{
                selector: 'epsgis-planet-earth',
                templateUrl: './earth.component.html',
                styleUrls: ['./earth.component.scss'],
            }]
    }], function () { return [{ type: ComponentLoaderService }]; }, { earthContainer: [{
            type: ViewChild,
            args: ["earthContainer", { static: true }]
        }] }); })();

class BasePlanetWidgetComponent extends BaseWidgetComponent {
    constructor() {
        super();
        this._isVue = true;
        this.watchers = [];
    }
    getCesiumView() {
        if (this.view) {
            return this.view.czm.viewer;
        }
        return null;
    }
    $watch(propertyName, func, param) {
        this.watchers.push(PropWatcher.watch(this, propertyName, (prop, oldval, newval) => {
            func.call(func);
        }));
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        if (this.watchers && this.watchers.length >= 1) {
            this.watchers.forEach(f => f.call(f));
        }
        this.watchers.length = 0;
    }
}
BasePlanetWidgetComponent.ɵfac = function BasePlanetWidgetComponent_Factory(t) { return new (t || BasePlanetWidgetComponent)(); };
BasePlanetWidgetComponent.ɵdir = ɵɵdefineDirective({ type: BasePlanetWidgetComponent, features: [ɵɵInheritDefinitionFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(BasePlanetWidgetComponent, [{
        type: Directive
    }], function () { return []; }, null); })();

let PlanetHomeComponent = class PlanetHomeComponent extends BasePlanetWidgetComponent {
    constructor() {
        super();
    }
    static getCompInfo() {
        return { path: "epsplanet/components/home" };
    }
    ngOnInit() {
        this.view.czm.viewer.homeButton._container.hidden = true;
    }
    onMouseClick(evt) {
        this.view.czm.viewer.homeButton._element.click();
    }
};
PlanetHomeComponent.ɵfac = function PlanetHomeComponent_Factory(t) { return new (t || PlanetHomeComponent)(); };
PlanetHomeComponent.ɵcmp = ɵɵdefineComponent({ type: PlanetHomeComponent, selectors: [["epsgis-planet-home"]], hostAttrs: ["title", "home"], hostVars: 2, hostBindings: function PlanetHomeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("click", function PlanetHomeComponent_click_HostBindingHandler($event) { return ctx.onMouseClick($event); });
    } if (rf & 2) {
        ɵɵclassProp("jimu-widget-onscreen-icon", true);
    } }, features: [ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [["nz-icon", "", 3, "nzIconfont"]], template: function PlanetHomeComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "i", 0);
    } if (rf & 2) {
        ɵɵproperty("nzIconfont", "icon-epsgis-home");
    } }, directives: [NzIconDirective, ɵNzTransitionPatchDirective], encapsulation: 2 });
PlanetHomeComponent = __decorate([
    ComponentRegister({
        uri: "epsgis-planet-home",
        path: "epsplanet/components/home",
        name: "PlanetHomeComponent"
    })
], PlanetHomeComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(PlanetHomeComponent, [{
        type: Component,
        args: [{
                selector: 'epsgis-planet-home',
                template: `<i  nz-icon [nzIconfont]="'icon-epsgis-home'"> </i>`,
                host: {
                    "[class.jimu-widget-onscreen-icon]": "true",
                    "title": "home"
                }
            }]
    }], function () { return []; }, { onMouseClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }] }); })();

const _c0$1 = function () { return { marginLeft: "16px" }; };
function PlanetLayerManagerComponent_div_0_nz_row_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-row");
    ɵɵelementStart(1, "nz-col", 3);
    ɵɵelementStart(2, "span");
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(4, "nz-col", 4);
    ɵɵelementStart(5, "nz-slider", 5);
    ɵɵlistener("ngModelChange", function PlanetLayerManagerComponent_div_0_nz_row_1_Template_nz_slider_ngModelChange_5_listener($event) { ɵɵrestoreView(_r5); const item_r3 = ctx.$implicit; const ctx_r4 = ɵɵnextContext(2); return (ctx_r4.selectedNode["origin"][item_r3.en] = $event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(6, "nz-col", 6);
    ɵɵelementStart(7, "nz-input-number", 7);
    ɵɵlistener("ngModelChange", function PlanetLayerManagerComponent_div_0_nz_row_1_Template_nz_input_number_ngModelChange_7_listener($event) { ɵɵrestoreView(_r5); const item_r3 = ctx.$implicit; const ctx_r6 = ɵɵnextContext(2); return (ctx_r6.selectedNode["origin"][item_r3.en] = $event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(3);
    ɵɵtextInterpolate(item_r3.zh);
    ɵɵadvance(2);
    ɵɵproperty("nzMin", 0)("nzMax", 1)("nzStep", 0.01)("ngModel", ctx_r2.selectedNode["origin"][item_r3.en]);
    ɵɵadvance(2);
    ɵɵproperty("nzMin", 0)("nzMax", 1)("nzStep", 0.01)("ngStyle", ɵɵpureFunction0(10, _c0$1))("ngModel", ctx_r2.selectedNode["origin"][item_r3.en]);
} }
function PlanetLayerManagerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, PlanetLayerManagerComponent_div_0_nz_row_1_Template, 8, 11, "nz-row", 2);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r0.config.basemapSchema);
} }
function PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_4_Template(rf, ctx) { if (rf & 1) {
    const _r18 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-col", 4);
    ɵɵelementStart(1, "nz-slider", 5);
    ɵɵlistener("ngModelChange", function PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_4_Template_nz_slider_ngModelChange_1_listener($event) { ɵɵrestoreView(_r18); const item_r8 = ɵɵnextContext().$implicit; const ctx_r17 = ɵɵnextContext(2); return (ctx_r17.selectedNode["origin"][item_r8.en][1] = $event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = ɵɵnextContext().$implicit;
    const ctx_r9 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("nzMin", 0)("nzMax", 1)("nzStep", 0.01)("ngModel", ctx_r9.selectedNode["origin"][item_r8.en][1]);
} }
function PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_5_Template(rf, ctx) { if (rf & 1) {
    const _r22 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-col", 4);
    ɵɵelementStart(1, "nz-slider", 5);
    ɵɵlistener("ngModelChange", function PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_5_Template_nz_slider_ngModelChange_1_listener($event) { ɵɵrestoreView(_r22); const item_r8 = ɵɵnextContext().$implicit; const ctx_r21 = ɵɵnextContext(2); return (ctx_r21.selectedNode["origin"][item_r8.en][0] = $event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = ɵɵnextContext().$implicit;
    const ctx_r10 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("nzMin", 0)("nzMax", 1)("nzStep", 0.01)("ngModel", ctx_r10.selectedNode["origin"][item_r8.en][0]);
} }
function PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_6_Template(rf, ctx) { if (rf & 1) {
    const _r26 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-col", 4);
    ɵɵelementStart(1, "nz-slider", 5);
    ɵɵlistener("ngModelChange", function PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_6_Template_nz_slider_ngModelChange_1_listener($event) { ɵɵrestoreView(_r26); const item_r8 = ɵɵnextContext().$implicit; const ctx_r25 = ɵɵnextContext(2); return (ctx_r25.selectedNode["origin"][item_r8.en] = $event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = ɵɵnextContext().$implicit;
    const ctx_r11 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("nzMin", 0)("nzMax", 256)("nzStep", 1)("ngModel", ctx_r11.selectedNode["origin"][item_r8.en]);
} }
function PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_7_Template(rf, ctx) { if (rf & 1) {
    const _r30 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-col", 4);
    ɵɵelementStart(1, "nz-slider", 5);
    ɵɵlistener("ngModelChange", function PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_7_Template_nz_slider_ngModelChange_1_listener($event) { ɵɵrestoreView(_r30); const item_r8 = ɵɵnextContext().$implicit; const ctx_r29 = ɵɵnextContext(2); return (ctx_r29.selectedNode["origin"][item_r8.en] = $event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = ɵɵnextContext().$implicit;
    const ctx_r12 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("nzMin", 0)("nzMax", 5)("nzStep", 0.01)("ngModel", ctx_r12.selectedNode["origin"][item_r8.en]);
} }
function PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_8_Template(rf, ctx) { if (rf & 1) {
    const _r34 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-col", 6);
    ɵɵelementStart(1, "nz-input-number", 7);
    ɵɵlistener("ngModelChange", function PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_8_Template_nz_input_number_ngModelChange_1_listener($event) { ɵɵrestoreView(_r34); const item_r8 = ɵɵnextContext().$implicit; const ctx_r33 = ɵɵnextContext(2); return (ctx_r33.selectedNode["origin"][item_r8.en][1] = $event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = ɵɵnextContext().$implicit;
    const ctx_r13 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("nzMin", 0)("nzMax", 1)("nzStep", 0.01)("ngStyle", ɵɵpureFunction0(5, _c0$1))("ngModel", ctx_r13.selectedNode["origin"][item_r8.en][1]);
} }
function PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_9_Template(rf, ctx) { if (rf & 1) {
    const _r38 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-col", 6);
    ɵɵelementStart(1, "nz-input-number", 7);
    ɵɵlistener("ngModelChange", function PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_9_Template_nz_input_number_ngModelChange_1_listener($event) { ɵɵrestoreView(_r38); const item_r8 = ɵɵnextContext().$implicit; const ctx_r37 = ɵɵnextContext(2); return (ctx_r37.selectedNode["origin"][item_r8.en][0] = $event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = ɵɵnextContext().$implicit;
    const ctx_r14 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("nzMin", 0)("nzMax", 1)("nzStep", 0.01)("ngStyle", ɵɵpureFunction0(5, _c0$1))("ngModel", ctx_r14.selectedNode["origin"][item_r8.en][0]);
} }
function PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_10_Template(rf, ctx) { if (rf & 1) {
    const _r42 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-col", 6);
    ɵɵelementStart(1, "nz-input-number", 7);
    ɵɵlistener("ngModelChange", function PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_10_Template_nz_input_number_ngModelChange_1_listener($event) { ɵɵrestoreView(_r42); const item_r8 = ɵɵnextContext().$implicit; const ctx_r41 = ɵɵnextContext(2); return (ctx_r41.selectedNode["origin"][item_r8.en] = $event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = ɵɵnextContext().$implicit;
    const ctx_r15 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("nzMin", 0)("nzMax", 256)("nzStep", 1)("ngStyle", ɵɵpureFunction0(5, _c0$1))("ngModel", ctx_r15.selectedNode["origin"][item_r8.en]);
} }
function PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_11_Template(rf, ctx) { if (rf & 1) {
    const _r46 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-col", 6);
    ɵɵelementStart(1, "nz-input-number", 7);
    ɵɵlistener("ngModelChange", function PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_11_Template_nz_input_number_ngModelChange_1_listener($event) { ɵɵrestoreView(_r46); const item_r8 = ɵɵnextContext().$implicit; const ctx_r45 = ɵɵnextContext(2); return (ctx_r45.selectedNode["origin"][item_r8.en] = $event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = ɵɵnextContext().$implicit;
    const ctx_r16 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("nzMin", 0)("nzMax", 5)("nzStep", 0.01)("ngStyle", ɵɵpureFunction0(5, _c0$1))("ngModel", ctx_r16.selectedNode["origin"][item_r8.en]);
} }
function PlanetLayerManagerComponent_div_1_nz_row_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "nz-row");
    ɵɵelementStart(1, "nz-col", 3);
    ɵɵelementStart(2, "span");
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(4, PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_4_Template, 2, 4, "nz-col", 8);
    ɵɵtemplate(5, PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_5_Template, 2, 4, "nz-col", 8);
    ɵɵtemplate(6, PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_6_Template, 2, 4, "nz-col", 8);
    ɵɵtemplate(7, PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_7_Template, 2, 4, "nz-col", 8);
    ɵɵtemplate(8, PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_8_Template, 2, 6, "nz-col", 9);
    ɵɵtemplate(9, PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_9_Template, 2, 6, "nz-col", 9);
    ɵɵtemplate(10, PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_10_Template, 2, 6, "nz-col", 9);
    ɵɵtemplate(11, PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_11_Template, 2, 6, "nz-col", 9);
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    ɵɵadvance(3);
    ɵɵtextInterpolate(item_r8.zh);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", item_r8.zh == "\u955C\u9762\u5F3A\u5EA6");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", item_r8.zh == "\u6563\u5C04\u5F3A\u5EA6");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", item_r8.zh == "\u663E\u793A\u7CBE\u5EA6");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", item_r8.zh == "\u6750\u8D28\u5E95\u8272");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", item_r8.zh == "\u955C\u9762\u5F3A\u5EA6");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", item_r8.zh == "\u6563\u5C04\u5F3A\u5EA6");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", item_r8.zh == "\u663E\u793A\u7CBE\u5EA6");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", item_r8.zh == "\u6750\u8D28\u5E95\u8272");
} }
function PlanetLayerManagerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, PlanetLayerManagerComponent_div_1_nz_row_1_Template, 12, 9, "nz-row", 2);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r1.config.tilesSchema);
} }
let PlanetLayerManagerComponent = class PlanetLayerManagerComponent extends BasePlanetWidgetComponent {
    constructor(nzContextMenuService) {
        super();
        this.nzContextMenuService = nzContextMenuService;
        this.config = {
            "basemapSchema": [
                { "en": "alpha", "zh": "透明度" },
                { "en": "brightness", "zh": "亮度" },
                { "en": "saturation", "zh": "饱和度" },
                { "en": "contrast", "zh": "对比度" },
                { "en": "hue", "zh": "色相" },
                { "en": "gamma", "zh": "伽马" }
            ],
            "tilesSchema": [
                {
                    "en": "maximumScreenSpaceError",
                    "zh": "显示精度"
                },
                {
                    "en": "imageBasedLightingFactor",
                    "zh": "散射强度"
                },
                {
                    "en": "luminanceAtZenith",
                    "zh": "材质底色"
                },
                {
                    "en": "imageBasedLightingFactor",
                    "zh": "镜面强度"
                }
            ]
        };
        this.layerNodes = [];
    }
    openFolder(data) {
        console.log(data);
        if (data instanceof NzTreeNode) {
            data.isExpanded = !data.isExpanded;
        }
        else {
            const node = data.node;
            if (node) {
                node.isExpanded = !node.isExpanded;
            }
        }
    }
    activeNode(data) {
        this.activatedNode = data.node;
    }
    contextMenu($event, menu) {
        this.nzContextMenuService.create($event, menu);
    }
    selectDropdown() {
    }
    static getCompInfo() {
        return { name: "PlanetLayerManagerComponent", path: "epsplanet/components/layer-manager" };
    }
    ngOnInit() {
        super.ngOnInit();
    }
    loadlocate() {
        var isshow, _layers, layer, format, style, tileMatrixSet;
        var wmts = new XE.Tool.WMTSParser();
        let url = "http://jojo1986.f3322.net:8888/geoserver/gwc/service/wmts?REQUEST=GetCapabilities";
        wmts
            .parser(url)
            .then(layers => {
            console.log(layers);
            isshow = false;
            _layers = layers;
            if (layers.length == 0) {
                console.log("server has no supproted layers", "warning");
            }
            else {
                layer = layers[0];
                console.log(layer.rectangle);
                format = layer.urls[0].format;
                style = layer.styles[0].id;
                tileMatrixSet = layer.tileMatrixSets[0];
                this.view.sceneTree.root.children.push({
                    "czmObject": {
                        "xbsjType": "Imagery",
                        "name": layer.title,
                        "xbsjImageryProvider": {
                            "XbsjImageryProvider": {},
                            "UrlTemplateImageryProvider": {},
                            "WebMapTileServiceImageryProvider": {
                                "url": layer.urls[0].template,
                                "format": format,
                                "layer": layer.title,
                                "style": style,
                                "tileMatrixSetID": tileMatrixSet.tileMatrixSetID,
                                "tileMatrixLabels": tileMatrixSet.params.tileMatrixLabels,
                                "tilingScheme": tileMatrixSet.params.tilingScheme,
                                "maximumLevel": tileMatrixSet.maximumLevel
                            },
                            "createTileMapServiceImageryProvider": {},
                            "type": "WebMapTileServiceImageryProvider"
                        }
                    }
                });
                var viewer = window['earth'].czm.viewer;
                viewer.camera.flyTo({
                    destination: Cesium.Rectangle.fromDegrees(...layer.rectangle)
                });
            }
        })
            .catch(err => {
            isshow = false;
            console.log("GetCapabilities failed:" + err.message, "error");
        });
    }
    test() {
        setTimeout(() => {
            console.log(this.selectedNode);
        }, 100);
    }
    onDblClickNode($event) {
        console.log($event.node.origin.origin);
    }
    onCheckedChange(evt) {
        if (evt.eventName !== "check" || !evt.node) {
            return;
        }
        if (evt.node.isChecked) {
            SceneTreeUtils.GetXbsjCzmObject(evt.node).show = true;
        }
        else {
            SceneTreeUtils.GetXbsjCzmObject(evt.node).show = false;
        }
    }
    onRightClick($event) {
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
};
PlanetLayerManagerComponent.ɵfac = function PlanetLayerManagerComponent_Factory(t) { return new (t || PlanetLayerManagerComponent)(ɵɵdirectiveInject(NzContextMenuService)); };
PlanetLayerManagerComponent.ɵcmp = ɵɵdefineComponent({ type: PlanetLayerManagerComponent, selectors: [["epsgis-planet-layer-manager"]], inputs: { selectedNode: "selectedNode", type: "type" }, features: [ɵɵInheritDefinitionFeature], decls: 2, vars: 2, consts: [["class", "schema", 4, "ngIf"], [1, "schema"], [4, "ngFor", "ngForOf"], ["nzSpan", "4"], ["nzSpan", "14"], [3, "nzMin", "nzMax", "nzStep", "ngModel", "ngModelChange"], ["nzSpan", "2"], [3, "nzMin", "nzMax", "nzStep", "ngStyle", "ngModel", "ngModelChange"], ["nzSpan", "14", 4, "ngIf"], ["nzSpan", "2", 4, "ngIf"]], template: function PlanetLayerManagerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, PlanetLayerManagerComponent_div_0_Template, 2, 1, "div", 0);
        ɵɵtemplate(1, PlanetLayerManagerComponent_div_1_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.type == "\u5F71\u50CF");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.type !== "\u5F71\u50CF");
    } }, directives: [NgIf, NgForOf, NzRowDirective, NzColDirective, NzSliderComponent, NgControlStatus, NgModel, NzInputNumberComponent, NgStyle], styles: ["nz-row[_ngcontent-%COMP%]{font-size:10px}nz-input-number[_ngcontent-%COMP%]{width:70px;height:30px}"] });
PlanetLayerManagerComponent = __decorate([
    ComponentRegister({
        uri: "epsgis-planet-layer-manager",
        path: "epsplanet/components/layer-manager",
        name: "PlanetLayerManagerComponent"
    })
], PlanetLayerManagerComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(PlanetLayerManagerComponent, [{
        type: Component,
        args: [{
                selector: "epsgis-planet-layer-manager",
                templateUrl: "./layer-manager.component.html",
                styleUrls: ["./layer-manager.component.scss"]
            }]
    }], function () { return [{ type: NzContextMenuService }]; }, { selectedNode: [{
            type: Input
        }], type: [{
            type: Input
        }] }); })();

const _c0$2 = ["nzTreeComponent"];
function PlanetLayerListComponent_ng_template_2_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵelementStart(1, "span", 5);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const node_r3 = ɵɵnextContext().$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(node_r3.title);
} }
function PlanetLayerListComponent_ng_template_2_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span");
    ɵɵelementStart(1, "span", 5);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "i", 6);
    ɵɵlistener("click", function PlanetLayerListComponent_ng_template_2_span_2_Template_i_click_3_listener() { ɵɵrestoreView(_r10); const node_r3 = ɵɵnextContext().$implicit; const ctx_r8 = ɵɵnextContext(); return ctx_r8.setting(node_r3); });
    ɵɵelementEnd();
    ɵɵelementStart(4, "i", 7);
    ɵɵlistener("click", function PlanetLayerListComponent_ng_template_2_span_2_Template_i_click_4_listener() { ɵɵrestoreView(_r10); const node_r3 = ɵɵnextContext().$implicit; const ctx_r11 = ɵɵnextContext(); return ctx_r11.flyTo(node_r3); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const node_r3 = ɵɵnextContext().$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(node_r3.title);
    ɵɵadvance(1);
    ɵɵproperty("nzIconfont", "icon-epsgis-setting");
    ɵɵadvance(1);
    ɵɵproperty("nzIconfont", "icon-epsgis-wodeweizhi1");
} }
function PlanetLayerListComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 3);
    ɵɵtemplate(1, PlanetLayerListComponent_ng_template_2_span_1_Template, 3, 1, "span", 4);
    ɵɵtemplate(2, PlanetLayerListComponent_ng_template_2_span_2_Template, 5, 3, "span", 4);
    ɵɵelementEnd();
} if (rf & 2) {
    const node_r3 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !node_r3.isLeaf);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", node_r3.isLeaf);
} }
let PlanetLayerListComponent = class PlanetLayerListComponent extends BasePlanetWidgetComponent {
    constructor(modalService) {
        super();
        this.modalService = modalService;
        this.layerNodes = [];
        this.listOfData = [];
        this.isShow = false;
    }
    static getCompInfo() {
        return { name: "PlanetLayerListComponent", path: "epsplanet/components/layer-list" };
    }
    ngOnInit() {
        var uw3 = XE.MVVM.watch(() => [...this.view.sceneTree.root.children], () => {
            this.loadSceneTree();
        });
    }
    openFolder(data) {
        console.log(data);
        if (data instanceof NzTreeNode) {
            data.isExpanded = !data.isExpanded;
        }
        else {
            const node = data.node;
            if (node) {
                node.isExpanded = !node.isExpanded;
            }
        }
    }
    loadSceneTree() {
        setTimeout(() => {
            const _layerNodes = SceneTreeUtils.SceneTree2NgZorroTree(this.view.sceneTree.$refs.layerlist);
            console.log("sceneTree:", _layerNodes);
            this.layerNodes = [..._layerNodes[0]["children"]];
        }, 100);
    }
    setting(node) {
        console.log(this.config);
        this.selectedNode = node.origin;
        this.type = this.selectedNode["origin"].hasOwnProperty('luminanceAtZenith') ? "瓦片" : "影像";
        this.isShow = true;
        this.modalService.create({
            title: "图层“" + node.title + "”参数",
            content: PlanetLayerManagerComponent,
            componentParams: {
                selectedNode: this.selectedNode,
                type: this.type
            },
            footer: null,
            mask: false,
            width: 320
        });
    }
    flyTo(node) {
        node.origin.origin.flyTo();
        console.log(node);
    }
    onLeftClickNode(evt) {
        console.log(evt.node);
        this.selectedNode = evt.node.origin;
    }
    onCheckedChange(evt) {
        console.log(evt);
        if (evt.eventName !== "check" || !evt.node) {
            return;
        }
        if (evt.node.children.length == 0) {
            if (evt.node.isChecked) {
                SceneTreeUtils.GetXbsjCzmObject(evt.node).show = true;
            }
            else {
                SceneTreeUtils.GetXbsjCzmObject(evt.node).show = false;
            }
        }
        else {
            if (evt.node.isChecked) {
                evt.node.children.forEach(item => {
                    SceneTreeUtils.GetXbsjCzmObject(item).show = true;
                });
            }
            else {
                evt.node.children.forEach(item => {
                    SceneTreeUtils.GetXbsjCzmObject(item).show = false;
                });
            }
        }
    }
    onDblClickNode(evt) {
        if (evt.eventName !== "dblclick" || !evt.node) {
            return;
        }
        SceneTreeUtils.GetXbsjCzmObject(evt.node).flyTo();
    }
    onRightClick(evt) {
    }
};
PlanetLayerListComponent.ɵfac = function PlanetLayerListComponent_Factory(t) { return new (t || PlanetLayerListComponent)(ɵɵdirectiveInject(ModalManagerService)); };
PlanetLayerListComponent.ɵcmp = ɵɵdefineComponent({ type: PlanetLayerListComponent, selectors: [["epsgis-planet-layer-list"]], viewQuery: function PlanetLayerListComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$2, 1);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzTreeComponent = _t.first);
    } }, features: [ɵɵInheritDefinitionFeature], decls: 4, vars: 2, consts: [["nzBlockNode", "", "nzCheckable", "", 3, "nzData", "nzTreeTemplate", "nzClick", "nzDblClick", "nzCheckBoxChange", "nzContextMenu"], ["nzTreeComponent", ""], ["nzTreeTemplate", ""], [1, "custom-node"], [4, "ngIf"], [1, "folder-name"], ["title", "\u53C2\u6570\u8C03\u6574", "nz-icon", "", 2, "float", "right", 3, "nzIconfont", "click"], ["title", "\u7F29\u653E\u81F3", "nz-icon", "", 2, "float", "right", 3, "nzIconfont", "click"]], template: function PlanetLayerListComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "nz-tree", 0, 1);
        ɵɵlistener("nzClick", function PlanetLayerListComponent_Template_nz_tree_nzClick_0_listener($event) { return ctx.onLeftClickNode($event); })("nzDblClick", function PlanetLayerListComponent_Template_nz_tree_nzDblClick_0_listener($event) { return ctx.onDblClickNode($event); })("nzCheckBoxChange", function PlanetLayerListComponent_Template_nz_tree_nzCheckBoxChange_0_listener($event) { return ctx.onCheckedChange($event); })("nzContextMenu", function PlanetLayerListComponent_Template_nz_tree_nzContextMenu_0_listener($event) { return ctx.onRightClick($event); });
        ɵɵelementEnd();
        ɵɵtemplate(2, PlanetLayerListComponent_ng_template_2_Template, 3, 2, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = ɵɵreference(3);
        ɵɵproperty("nzData", ctx.layerNodes)("nzTreeTemplate", _r1);
    } }, directives: [NzTreeComponent, NgIf, NzIconDirective, ɵNzTransitionPatchDirective], styles: ["i[_ngcontent-%COMP%]{font-size:16px;margin-right:5px}i[_ngcontent-%COMP%]:hover{font-size:20px}  .sspanel_content{overflow:overlay!important}"] });
PlanetLayerListComponent = __decorate([
    ComponentRegister({
        uri: "epsgis-planet-layer-list",
        path: "epsplanet/components/layer-list",
        name: "PlanetLayerListComponent"
    })
], PlanetLayerListComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(PlanetLayerListComponent, [{
        type: Component,
        args: [{
                selector: 'epsgis-planet-layer-list',
                templateUrl: './layer-list.component.html',
                styleUrls: ['./layer-list.component.scss'],
            }]
    }], function () { return [{ type: ModalManagerService }]; }, { nzTreeComponent: [{
            type: ViewChild,
            args: ['nzTreeComponent', { static: false }]
        }] }); })();

function PlanetLocationComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "nz-input-number", 3);
    ɵɵlistener("ngModelChange", function PlanetLocationComponent_div_8_Template_nz_input_number_ngModelChange_3_listener($event) { ɵɵrestoreView(_r2); const ctx_r1 = ɵɵnextContext(); return ctx_r1.ZValue = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r0.item.Z.label);
    ɵɵadvance(1);
    ɵɵproperty("ngModel", ctx_r0.ZValue)("nzStep", 1)("nzPlaceHolder", ctx_r0.item.Z.placeHolder);
} }
let PlanetLocationComponent = class PlanetLocationComponent extends BasePlanetWidgetComponent {
    constructor() {
        super();
        this.XValue = 0;
        this.YValue = 0;
        this.ZValue = 0;
        this.item4326 = {
            X: {
                label: "经度：",
                min: "-180",
                max: "180",
                placeHolder: "请输入经度"
            },
            Y: {
                label: "纬度：",
                min: "-90",
                max: "90",
                placeHolder: "请输入纬度"
            },
            Z: {
                label: "高度：",
                placeHolder: "请输入高度"
            }
        };
        this.itemOther = {
            X: {
                label: "X：",
                min: "-99999999",
                max: "99999999",
                placeHolder: "请输入横坐标"
            },
            Y: {
                label: "Y：",
                min: "-99999999",
                max: "99999999",
                placeHolder: "请输入纵坐标"
            }
        };
        this.item = this.item4326;
    }
    ngOnInit() {
        super.ngOnInit();
        this.initialize();
    }
    static getCompInfo() {
        return { path: "epsplanet/components/location" };
    }
    initialize() {
        this.XValue = this.config.longitude;
        this.YValue = this.config.latitude;
        this.ZValue = this.config.height;
    }
    location() {
        var position = null;
        if (this.markerXY) {
            this.view.czm.viewer.entities.remove(this.markerXY);
        }
        if (true) {
            position = Cesium.Cartesian3.fromDegrees(this.XValue, this.YValue, this.ZValue);
        }
        else {
        }
        this.markerXY = new Cesium.Entity({
            id: '视角定位坐标',
            position: position,
            point: {
                pixelSize: 6,
                color: Cesium.Color.WHITE.withAlpha(0.9),
                outlineColor: Cesium.Color.WHITE.withAlpha(0.9),
                outlineWidth: 1
            },
            billboard: {
                image: this.folderUrl + "images/location4.png",
                horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
                verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                scale: .6
            },
        });
        this.view.czm.viewer.entities.add(this.markerXY);
        this.view.czm.camera.setView({
            destination: position
        });
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
};
PlanetLocationComponent.ɵfac = function PlanetLocationComponent_Factory(t) { return new (t || PlanetLocationComponent)(); };
PlanetLocationComponent.ɵcmp = ɵɵdefineComponent({ type: PlanetLocationComponent, selectors: [["epsgis-planet-location"]], features: [ɵɵInheritDefinitionFeature], decls: 12, vars: 13, consts: [[3, "ngModel", "nzMin", "nzMax", "nzStep", "nzPlaceHolder", "ngModelChange"], [4, "ngIf"], ["nz-button", "", "nzType", "primary", 3, "click"], [3, "ngModel", "nzStep", "nzPlaceHolder", "ngModelChange"]], template: function PlanetLocationComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div");
        ɵɵelementStart(1, "span");
        ɵɵtext(2);
        ɵɵelementEnd();
        ɵɵelementStart(3, "nz-input-number", 0);
        ɵɵlistener("ngModelChange", function PlanetLocationComponent_Template_nz_input_number_ngModelChange_3_listener($event) { return ctx.XValue = $event; });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(4, "div");
        ɵɵelementStart(5, "span");
        ɵɵtext(6);
        ɵɵelementEnd();
        ɵɵelementStart(7, "nz-input-number", 0);
        ɵɵlistener("ngModelChange", function PlanetLocationComponent_Template_nz_input_number_ngModelChange_7_listener($event) { return ctx.YValue = $event; });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(8, PlanetLocationComponent_div_8_Template, 4, 4, "div", 1);
        ɵɵelementStart(9, "div");
        ɵɵelementStart(10, "button", 2);
        ɵɵlistener("click", function PlanetLocationComponent_Template_button_click_10_listener() { return ctx.location(); });
        ɵɵtext(11, "\u5B9A\u4F4D");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵtextInterpolate(ctx.item.X.label);
        ɵɵadvance(1);
        ɵɵproperty("ngModel", ctx.XValue)("nzMin", ctx.item.X.min)("nzMax", ctx.item.X.max)("nzStep", 0.0001)("nzPlaceHolder", ctx.item.X.placeHolder);
        ɵɵadvance(3);
        ɵɵtextInterpolate(ctx.item.Y.label);
        ɵɵadvance(1);
        ɵɵproperty("ngModel", ctx.YValue)("nzMin", ctx.item.Y.min)("nzMax", ctx.item.Y.max)("nzStep", 0.0001)("nzPlaceHolder", ctx.item.Y.placeHolder);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.item.Z);
    } }, directives: [NzInputNumberComponent, NgControlStatus, NgModel, NgIf, NzButtonComponent, NzWaveDirective, ɵNzTransitionPatchDirective], styles: ["div[_ngcontent-%COMP%]{margin-bottom:5px;text-align:center}nz-input-number[_ngcontent-%COMP%]{width:80%}"] });
PlanetLocationComponent = __decorate([
    ComponentRegister({
        uri: "epsgis-planet-location",
        path: "epsplanet/components/location",
        name: "PlanetLocationComponent"
    })
], PlanetLocationComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(PlanetLocationComponent, [{
        type: Component,
        args: [{
                selector: 'epsgis-planet-location',
                templateUrl: './location.component.html',
                styleUrls: ['./location.component.scss'],
            }]
    }], function () { return []; }, null); })();

function PlanetModeSwitchComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵnamespaceSVG();
    ɵɵelementStart(1, "svg", 3);
    ɵɵelement(2, "path", 4);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} }
function PlanetModeSwitchComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵnamespaceSVG();
    ɵɵelementStart(1, "svg", 3);
    ɵɵelement(2, "path", 5);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} }
function PlanetModeSwitchComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵnamespaceSVG();
    ɵɵelementStart(1, "svg", 3);
    ɵɵelement(2, "path", 6);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} }
function PlanetModeSwitchComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 7);
    ɵɵelementStart(1, "div", 8);
    ɵɵlistener("click", function PlanetModeSwitchComponent_ng_template_4_Template_div_click_1_listener() { ɵɵrestoreView(_r6); const ctx_r5 = ɵɵnextContext(); return ctx_r5.changeViewMode("3d"); });
    ɵɵnamespaceSVG();
    ɵɵelementStart(2, "svg", 9);
    ɵɵelement(3, "path", 4);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵnamespaceHTML();
    ɵɵelementStart(4, "div", 8);
    ɵɵlistener("click", function PlanetModeSwitchComponent_ng_template_4_Template_div_click_4_listener() { ɵɵrestoreView(_r6); const ctx_r7 = ɵɵnextContext(); return ctx_r7.changeViewMode("2d"); });
    ɵɵnamespaceSVG();
    ɵɵelementStart(5, "svg", 9);
    ɵɵelement(6, "path", 5);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵnamespaceHTML();
    ɵɵelementStart(7, "div", 8);
    ɵɵlistener("click", function PlanetModeSwitchComponent_ng_template_4_Template_div_click_7_listener() { ɵɵrestoreView(_r6); const ctx_r8 = ɵɵnextContext(); return ctx_r8.changeViewMode("columbus"); });
    ɵɵnamespaceSVG();
    ɵɵelementStart(8, "svg", 9);
    ɵɵelement(9, "path", 6);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
let PlanetModeSwitchComponent = class PlanetModeSwitchComponent extends BasePlanetWidgetComponent {
    constructor() {
        super();
        this.viewType = '3d';
    }
    static getCompInfo() {
        return { name: "PlanetModeSwitchComponent", path: "epsplanet/components/mode-switch" };
    }
    clickMe() {
        this.visible = false;
    }
    change(value) {
        console.log(value);
    }
    changeViewMode(type) {
        if (type == "2d") {
            Promise.resolve().then(() => { this.view.czm.viewer.scene.morphTo2D(1); });
        }
        else if (type == "columbus") {
            Promise.resolve().then(() => { this.view.czm.viewer.scene.morphToColumbusView(1); });
        }
        else {
            Promise.resolve().then(() => { this.view.czm.viewer.scene.morphTo3D(1); });
        }
        this.viewType = type;
    }
};
PlanetModeSwitchComponent.ɵfac = function PlanetModeSwitchComponent_Factory(t) { return new (t || PlanetModeSwitchComponent)(); };
PlanetModeSwitchComponent.ɵcmp = ɵɵdefineComponent({ type: PlanetModeSwitchComponent, selectors: [["epsgis-planet-mode-switch"]], hostAttrs: ["title", "\u6A21\u5F0F\u5207\u6362"], hostVars: 2, hostBindings: function PlanetModeSwitchComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵclassProp("jimu-widget-onscreen-icon", true);
    } }, features: [ɵɵInheritDefinitionFeature], decls: 6, vars: 6, consts: [["nz-popover", "", "nzPopoverTrigger", "click", 1, "icon", 3, "nzPopoverVisible", "nzPopoverContent", "nzPopoverPlacement", "nzPopoverVisibleChange"], [4, "ngIf"], ["contentTemplate", ""], ["width", "32", "height", "32", "viewBox", "0 0 64 64", 1, ""], ["d", "m 32.401392,4.9330437 c -7.087603,0 -14.096095,2.884602 -19.10793,7.8946843 -5.0118352,5.010083 -7.9296167,11.987468 -7.9296167,19.072999 0,7.085531 2.9177815,14.097848 7.9296167,19.107931 4.837653,4.835961 11.541408,7.631372 18.374354,7.82482 0.05712,0.01231 0.454119,0.139729 0.454119,0.139729 l 0.03493,-0.104797 c 0.08246,7.84e-4 0.162033,0.03493 0.244525,0.03493 0.08304,0 0.161515,-0.03414 0.244526,-0.03493 l 0.03493,0.104797 c 0,0 0.309474,-0.129487 0.349323,-0.139729 6.867765,-0.168094 13.582903,-2.965206 18.444218,-7.82482 2.558195,-2.5573 4.551081,-5.638134 5.903547,-8.977584 1.297191,-3.202966 2.02607,-6.661489 2.02607,-10.130347 0,-6.237309 -2.366261,-12.31219 -6.322734,-17.116794 -0.0034,-0.02316 0.0049,-0.04488 0,-0.06986 -0.01733,-0.08745 -0.104529,-0.278855 -0.104797,-0.279458 -5.31e-4,-0.0012 -0.522988,-0.628147 -0.523984,-0.62878         -3.47e-4,-2.2e-4 -0.133444,-0.03532 -0.244525,-0.06987 C 51.944299,13.447603 51.751076,13.104317 51.474391,12.827728 46.462556,7.8176457 39.488996,4.9330437 32.401392,4.9330437 z m -2.130866,3.5281554 0.104797,9.6762289 c -4.111695,-0.08361 -7.109829,-0.423664 -9.257041,-0.943171 1.198093,-2.269271 2.524531,-4.124404 3.91241,-5.414496 2.167498,-2.0147811 3.950145,-2.8540169 5.239834,-3.3185619 z m 2.794579,0 c 1.280302,0.4754953 3.022186,1.3285948 5.065173,3.2486979 1.424667,1.338973 2.788862,3.303645 3.982275,5.728886 -2.29082,0.403367 -5.381258,0.621049 -8.942651,0.698645 L 33.065105,8.4611991 z m 5.728886,0.2445256 c 4.004072,1.1230822 7.793098,3.1481363 10.724195,6.0782083 0.03468,0.03466 0.07033,0.06991 0.104797,0.104797 -0.45375,0.313891 -0.923054,0.663002 -1.956205,1.082899 -0.647388,0.263114 -1.906242,0.477396 -2.829511,0.733577 -1.382296,-2.988132         -3.027146,-5.368585 -4.785716,-7.0213781 -0.422866,-0.397432 -0.835818,-0.6453247 -1.25756,-0.9781032 z m -15.33525,0.7685092 c -0.106753,0.09503 -0.207753,0.145402 -0.31439,0.244526 -1.684973,1.5662541 -3.298068,3.8232211 -4.680919,6.5672591 -0.343797,-0.14942 -1.035052,-0.273198 -1.292493,-0.419186 -0.956528,-0.542427 -1.362964,-1.022024 -1.537018,-1.292493 -0.0241,-0.03745 -0.01868,-0.0401 -0.03493,-0.06986 2.250095,-2.163342 4.948824,-3.869984 7.859752,-5.0302421 z m -9.641296,7.0912431 c 0.464973,0.571618 0.937729,1.169056 1.956205,1.746612 0.349907,0.198425 1.107143,0.335404 1.537018,0.523983 -1.20166,3.172984 -1.998037,7.051901 -2.165798,11.772162 C 14.256557,30.361384 12.934823,30.161483 12.280427,29.90959 10.644437,29.279855 9.6888882,28.674891 9.1714586,28.267775 8.6540289,27.860658 8.6474751,27.778724 8.6474751,27.778724 l -0.069864,0.03493 C 9.3100294,23.691285         11.163248,19.798527 13.817445,16.565477 z m 37.552149,0.523984 c 2.548924,3.289983 4.265057,7.202594 4.890513,11.318043 -0.650428,0.410896 -1.756876,1.001936 -3.563088,1.606882 -1.171552,0.392383 -3.163859,0.759153 -4.960377,1.117832 -0.04367,-4.752703 -0.784809,-8.591423 -1.88634,-11.807094 0.917574,-0.263678 2.170552,-0.486495 2.864443,-0.76851 1.274693,-0.518066 2.003942,-1.001558 2.654849,-1.467153 z m -31.439008,2.619917 c 2.487341,0.672766 5.775813,1.137775 10.479669,1.222628 l 0.104797,10.689263 0,0.03493 0,0.733577 c -5.435005,-0.09059 -9.512219,-0.519044 -12.610536,-1.117831 0.106127,-4.776683 0.879334,-8.55791 2.02607,-11.562569 z m 23.264866,0.31439 c 1.073459,3.067541 1.833795,6.821314 1.816476,11.702298 -3.054474,0.423245 -7.062018,0.648559 -11.702298,0.698644 l 0,-0.838373 -0.104796,-10.654331 c 4.082416,-0.0864 7.404468,-0.403886 9.990618,-0.908238 z         M 8.2632205,30.922625 c 0.7558676,0.510548 1.5529563,1.013339 3.0041715,1.57195 0.937518,0.360875 2.612202,0.647642 3.91241,0.978102 0.112814,3.85566 0.703989,7.107756 1.606883,9.920754 -1.147172,-0.324262 -2.644553,-0.640648 -3.423359,-0.978102 -1.516688,-0.657177 -2.386627,-1.287332 -2.864443,-1.71168 -0.477816,-0.424347 -0.489051,-0.489051 -0.489051,-0.489051 L 9.8002387,40.319395 C 8.791691,37.621767 8.1584238,34.769583 8.1584238,31.900727 c 0,-0.330153 0.090589,-0.648169 0.1047967,-0.978102 z m 48.2763445,0.419186 c 0.0047,0.188973 0.06986,0.36991 0.06986,0.558916 0,2.938869 -0.620228,5.873558 -1.676747,8.628261 -0.07435,0.07583 -0.06552,0.07411 -0.454119,0.349323 -0.606965,0.429857 -1.631665,1.042044 -3.318562,1.676747 -1.208528,0.454713 -3.204964,0.850894 -5.135038,1.25756 0.84593,-2.765726 1.41808,-6.005357 1.606883,-9.815957 2.232369,-0.413371 4.483758,-0.840201         5.938479,-1.327425 1.410632,-0.472457 2.153108,-0.89469 2.96924,-1.327425 z m -38.530252,2.864443 c 3.208141,0.56697 7.372279,0.898588 12.575603,0.978103 l 0.174662,9.885821 c -4.392517,-0.06139 -8.106722,-0.320566 -10.863925,-0.803441 -1.051954,-2.664695 -1.692909,-6.043794 -1.88634,-10.060483 z m 26.793022,0.31439 c -0.246298,3.923551 -0.877762,7.263679 -1.816476,9.885822 -2.561957,0.361954 -5.766249,0.560708 -9.431703,0.62878 l -0.174661,-9.815957 c 4.491734,-0.04969 8.334769,-0.293032 11.42284,-0.698645 z M 12.035901,44.860585 c 0.09977,0.04523 0.105535,0.09465 0.209594,0.139729 1.337656,0.579602 3.441099,1.058072 5.589157,1.537018 1.545042,3.399208 3.548524,5.969402 5.589157,7.789888 -3.034411,-1.215537 -5.871615,-3.007978 -8.174142,-5.309699 -1.245911,-1.245475 -2.271794,-2.662961 -3.213766,-4.156936 z m 40.69605,0 c -0.941972,1.493975 -1.967855,2.911461         -3.213765,4.156936 -2.74253,2.741571 -6.244106,4.696717 -9.955686,5.868615 0.261347,-0.241079 0.507495,-0.394491 0.768509,-0.663713 1.674841,-1.727516 3.320792,-4.181056 4.645987,-7.265904 2.962447,-0.503021 5.408965,-1.122293 7.161107,-1.781544 0.284034,-0.106865 0.337297,-0.207323 0.593848,-0.31439 z m -31.404076,2.305527 c 2.645807,0.376448 5.701178,0.649995 9.466635,0.698645 l 0.139729,7.789888 c -1.38739,-0.480844 -3.316218,-1.29837 -5.659022,-3.388427 -1.388822,-1.238993 -2.743668,-3.0113 -3.947342,-5.100106 z m 20.365491,0.104797 c -1.04872,2.041937 -2.174337,3.779068 -3.353494,4.995309 -1.853177,1.911459 -3.425515,2.82679 -4.611055,3.353494 l -0.139729,-7.789887 c 3.13091,-0.05714 5.728238,-0.278725 8.104278,-0.558916 z"], ["d", "m 2.9825053,17.550598 0,1.368113 0,26.267766 0,1.368113 1.36811,0 54.9981397,0 1.36811,0 0,-1.368113 0,-26.267766 0,-1.368113 -1.36811,0 -54.9981397,0 -1.36811,0 z m 2.73623,2.736226 10.3292497,0 0,10.466063 -10.3292497,0 0,-10.466063 z m 13.0654697,0 11.69737,0 0,10.466063 -11.69737,0 0,-10.466063 z m 14.43359,0 11.69737,0 0,10.466063 -11.69737,0 0,-10.466063 z m 14.43359,0 10.32926,0 0,10.466063 -10.32926,0 0,-10.466063 z m -41.9326497,13.202288 10.3292497,0 0,10.329252 -10.3292497,0 0,-10.329252 z m 13.0654697,0 11.69737,0 0,10.329252 -11.69737,0 0,-10.329252 z m 14.43359,0 11.69737,0 0,10.329252 -11.69737,0 0,-10.329252 z m 14.43359,0 10.32926,0 0,10.329252 -10.32926,0 0,-10.329252 z"], ["d", "m 14.723969,17.675598 -0.340489,0.817175 -11.1680536,26.183638 -0.817175,1.872692 2.076986,0 54.7506996,0 2.07698,0 -0.81717,-1.872692 -11.16805,-26.183638 -0.34049,-0.817175 -0.91933,0 -32.414586,0 -0.919322,0 z m 1.838643,2.723916 6.196908,0 -2.928209,10.418977 -7.729111,0 4.460412,-10.418977 z m 9.02297,0 4.903049,0 0,10.418977 -7.831258,0 2.928209,-10.418977 z m 7.626964,0 5.584031,0 2.62176,10.418977 -8.205791,0 0,-10.418977 z m 8.410081,0 5.51593,0 4.46042,10.418977 -7.38863,0 -2.58772,-10.418977 z m -30.678091,13.142892 8.103649,0 -2.89416,10.282782 -9.6018026,0 4.3923136,-10.282782 z m 10.929711,0 8.614384,0 0,10.282782 -11.508544,0 2.89416,-10.282782 z m 11.338299,0 8.852721,0 2.58772,10.282782 -11.440441,0 0,-10.282782 z m 11.678781,0 7.86531,0 4.39231,10.282782 -9.6699,0 -2.58772,-10.282782 z"], [1, "container"], [1, "mode", 3, "click"], ["width", "40", "height", "40", "viewBox", "0 0 64 64", 1, ""]], template: function PlanetModeSwitchComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵlistener("nzPopoverVisibleChange", function PlanetModeSwitchComponent_Template_div_nzPopoverVisibleChange_0_listener($event) { return ctx.visible = $event; });
        ɵɵtemplate(1, PlanetModeSwitchComponent_ng_container_1_Template, 3, 0, "ng-container", 1);
        ɵɵtemplate(2, PlanetModeSwitchComponent_ng_container_2_Template, 3, 0, "ng-container", 1);
        ɵɵtemplate(3, PlanetModeSwitchComponent_ng_container_3_Template, 3, 0, "ng-container", 1);
        ɵɵelementEnd();
        ɵɵtemplate(4, PlanetModeSwitchComponent_ng_template_4_Template, 10, 0, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r3 = ɵɵreference(5);
        ɵɵproperty("nzPopoverVisible", ctx.visible)("nzPopoverContent", _r3)("nzPopoverPlacement", "right");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.viewType == "3d");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.viewType == "2d");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.viewType == "columbus");
    } }, directives: [NzPopoverDirective, NgIf], styles: [".icon[_ngcontent-%COMP%]{height:32px}.container[_ngcontent-%COMP%]{width:auto;height:50px;margin:-10px}.container[_ngcontent-%COMP%]   .mode[_ngcontent-%COMP%]{float:left;cursor:pointer;height:40px;line-height:40px;margin:5px;fill:#4e555d}.container[_ngcontent-%COMP%]   .mode[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{background-color:#4e555d;fill:#fff}"] });
PlanetModeSwitchComponent = __decorate([
    ComponentRegister({
        uri: "epsgis-planet-mode-switch",
        path: "epsplanet/components/mode-switch",
        name: "PlanetModeSwitchComponent"
    })
], PlanetModeSwitchComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(PlanetModeSwitchComponent, [{
        type: Component,
        args: [{
                selector: 'epsgis-planet-mode-switch',
                templateUrl: './mode-switch.component.html',
                styleUrls: ['./mode-switch.component.scss'],
                host: {
                    "[class.jimu-widget-onscreen-icon]": "true",
                    "title": "模式切换"
                }
            }]
    }], function () { return []; }, null); })();

let PlanetStatusBarComponent = class PlanetStatusBarComponent extends BasePlanetWidgetComponent {
    constructor(cdr) {
        super();
        this.cdr = cdr;
        this.fpsString = "";
        this.cameraString = "";
        this.baseVelocity = 0.0;
        this.velocity = 0.0;
        this.velocityRatio = 1.0;
        this.lang = {
            longitude: "经度",
            latitude: "纬度",
            height: "高度",
            fps: "帧率",
            heading: "偏航角",
            pitch: "俯仰角",
            roll: "翻滚角",
            meter: "米",
            velocity: "键盘运动速度",
            createPolylineTip: "左键添加点，右键删除点，shift+右键创建完成",
            editPolylineTip: "鼠标移动到其中一个点会出现一个操作栏，点击移动按钮，可以移动折线位置；点击增加按钮，可以在该位置增加一个点；点击删除按钮，可以删除该点",
            createRectangleTip: "点击左键确定矩形中心点，移动鼠标确定矩形方向和对角线长度，再次点击左键创建完成",
            editRectangleTip: "左键点击其中一个点移动矩形位置",
            createCircleTip: "点击左键确定圆的圆心，移动鼠标确定圆的半径，再次点击左键创建完成",
            editCircleTip: "左键点击其中一个点移动圆位置",
            createDoubleArrowTip: "在四个不同位置点击左键创建双箭头",
            editDoubleArrowTip: "左键点击其中一个点移动双箭头位置",
            createFlattenedPolygonTip: "左键添加点，右键删除点，shift+右键停止绘制，上下移动鼠标确定高度，再次点击左键创建完成",
            editFlattenedPolygonTip: "鼠标移动到其中一个点会出现一个操作栏，点击移动按钮，可以移动折线位置；点击增加按钮，可以在该位置增加一个点；点击删除按钮，可以删除该点",
            movableObjectTip: "鼠标左键点击坐标轴x,y,z任意一个轴，轴变黄色，可沿着相应位置进行移动，再次点击，轴恢复原色，停止移动，点击右键坐标轴消失",
            rotatableObjectTip: "鼠标左键点击旋转坐标轴任意一个轴，轴变黄色，可沿着相应位置进行旋转，再次点击，轴恢复原色，停止旋转，点击右键旋转坐标轴消失",
            positionPickingTip: "点击鼠标左键拾取位置"
        };
        this._disposers = [];
    }
    static getCompInfo() {
        return { name: "PlanetStatusBarComponent", path: "epsplanet/components/status-bar" };
    }
    ngOnInit() {
        this._scene = this.view.czm.scene;
        this._camera = this.view.czm.camera;
        const td = Cesium.Math.toDegrees;
        const updateCameraString = () => {
            const camera = this._camera;
            var l = td(camera.positionCartographic.longitude).toFixed(5);
            var b = td(camera.positionCartographic.latitude).toFixed(5);
            var h = camera.positionCartographic.height.toFixed(2);
            var y = td(camera.heading).toFixed(2);
            var p = td(camera.pitch).toFixed(2);
            var r = td(camera.roll).toFixed(2);
            this.cameraString = `${this.lang.longitude}: ${l}° ${this.lang.latitude}: ${b}° ${this.lang.height}: ${h}${this.lang.meter} ${this.lang.heading}: ${y}° ${this.lang.pitch}: ${p}° ${this.lang.roll}: ${r}°`;
            UtilsService.detectChanges(this.cdr);
        };
        this._disposers = [];
        this._disposers.push(this._camera.changed.addEventListener(updateCameraString));
        updateCameraString();
        this._scene.debugShowFramesPerSecond = true;
        const tempDisposer = this._scene._postRender.addEventListener(() => {
            tempDisposer();
            this._scene._performanceContainer.style.visibility = "hidden";
        });
        this._disposers.push(this._scene._postRender.addEventListener(() => {
            if (this._scene._performanceDisplay) {
                this.fpsString = `${this.lang.fps}: ${this._scene._performanceDisplay._fpsText.nodeValue} `;
            }
            else {
                this.fpsString = "";
            }
        }));
        this._disposers.push(XE.MVVM.track(this, "baseVelocity", this.view.camera.immersion, "baseVelocity"));
        this._disposers.push(XE.MVVM.track(this, "velocity", this.view.camera.immersion, "velocity"));
        this._disposers.push(XE.MVVM.bind(this, "velocityRatio", this.view.camera.immersion, "velocityRatio"));
        if (this._uw1) {
            this._uw1 = this._uw1();
        }
        else {
            this._uw1 = XE.MVVM.watch(() => this.view.interaction.creatingPolylineBinding.target, () => {
                if (this.view.interaction.creatingPolylineBinding.target !==
                    undefined) {
                    if (this.view.interaction.creatingPolylineBinding.target
                        .xbsjType === "GeoRectangle") {
                    }
                    else if (this.view.interaction.creatingPolylineBinding.target
                        .xbsjType === "GeoCircle") {
                    }
                    else if (this.view.interaction.creatingPolylineBinding.target
                        .xbsjType === "GeoDoubleArrow") {
                    }
                    else {
                    }
                }
            });
        }
        if (this._uw2) {
            this._uw2 = this._uw2();
        }
        else {
            this._uw2 = XE.MVVM.watch(() => this.view.interaction.editingPolylineBinding.target, () => {
                if (this.view.interaction.editingPolylineBinding.target !==
                    undefined) {
                    if (this.view.interaction.editingPolylineBinding.target
                        .xbsjType === "GeoRectangle") {
                    }
                    else if (this.view.interaction.editingPolylineBinding.target
                        .xbsjType === "GeoCircle") {
                    }
                    else if (this.view.interaction.editingPolylineBinding.target
                        .xbsjType === "GeoDoubleArrow") {
                    }
                    else {
                    }
                }
            });
        }
        if (this._uw3) {
            this._uw3 = this._uw3();
        }
        else {
            this._uw3 = XE.MVVM.watch(() => this.view.interaction.creatingPolygonBinding.target, () => {
                if (this.view.interaction.creatingPolygonBinding.target !==
                    undefined) {
                }
            });
        }
        if (this._uw4) {
            this._uw4 = this._uw4();
        }
        else {
            this._uw4 = XE.MVVM.watch(() => this.view.interaction.flattenedPolygonCreatingBinding.target, () => {
                if (this.view.interaction.flattenedPolygonCreatingBinding
                    .target !== undefined) {
                }
            });
        }
        if (this._uw5) {
            this._uw5 = this._uw5();
        }
        else {
            this._uw5 = XE.MVVM.watch(() => this.view.interaction.editingPolygonBinding.target, () => {
                if (this.view.interaction.editingPolygonBinding.target !==
                    undefined) {
                }
            });
        }
        if (this._uw6) {
            this._uw6 = this._uw4();
        }
        else {
            this._uw6 = XE.MVVM.watch(() => this.view.interaction.movableObjectBinding.target, () => {
                if (this.view.interaction.movableObjectBinding.target !==
                    undefined) {
                }
            });
        }
        if (this._uw7) {
            this._uw7 = this._uw4();
        }
        else {
            this._uw7 = XE.MVVM.watch(() => this.view.interaction.rotatableObjectBinding.target, () => {
                if (this.view.interaction.rotatableObjectBinding.target !==
                    undefined) {
                }
            });
        }
        if (this._uw8) {
            this._uw8 = this._uw4();
        }
        else {
            this._uw8 = XE.MVVM.watch(() => this.view.interaction.positionPickingBinding.target, () => {
                if (this.view.interaction.positionPickingBinding.target !==
                    undefined) {
                }
            });
        }
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this._disposers.forEach(d => d());
        this._disposers.length = 0;
        this._uw1 = this._uw1 && this._uw1();
        this._uw2 = this._uw2 && this._uw2();
        this._uw3 = this._uw3 && this._uw3();
        this._uw4 = this._uw4 && this._uw4();
        this._uw5 = this._uw5 && this._uw5();
        this._uw6 = this._uw6 && this._uw6();
        this._uw7 = this._uw7 && this._uw7();
        this._uw8 = this._uw8 && this._uw8();
    }
    velocityString() {
        return ` ${this.lang.velocity}: ${this.velocity.toFixed(1)} km/h (${this.baseVelocity.toFixed(1)} × ${this.velocityRatio.toFixed(1)})`;
    }
};
PlanetStatusBarComponent.ɵfac = function PlanetStatusBarComponent_Factory(t) { return new (t || PlanetStatusBarComponent)(ɵɵdirectiveInject(ChangeDetectorRef)); };
PlanetStatusBarComponent.ɵcmp = ɵɵdefineComponent({ type: PlanetStatusBarComponent, selectors: [["epsgis-planet-status-bar"]], features: [ɵɵInheritDefinitionFeature], decls: 2, vars: 3, consts: [[1, "status-info"]], template: function PlanetStatusBarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtext(1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵtextInterpolate3("", ctx.fpsString, " ", ctx.cameraString, " ", ctx.velocityString(), "");
    } }, styles: [".status-info[_ngcontent-%COMP%]{background-color: #4c555e; color:#fff; font-size: 14px;}"] });
PlanetStatusBarComponent = __decorate([
    ComponentRegister({
        uri: "epsgis-planet-status-bar",
        path: "epsplanet/components/status-bar",
        name: "PlanetStatusBarComponent"
    })
], PlanetStatusBarComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(PlanetStatusBarComponent, [{
        type: Component,
        args: [{
                selector: 'epsgis-planet-status-bar',
                template: `<div class="status-info">{{ fpsString }} {{cameraString}} {{ velocityString() }}</div>`,
                styles: [
                    `.status-info{background-color: #4c555e; color:#fff; font-size: 14px;}`
                ]
            }]
    }], function () { return [{ type: ChangeDetectorRef }]; }, null); })();

let PlanetZoomComponent = class PlanetZoomComponent extends BasePlanetWidgetComponent {
    constructor() {
        super();
    }
    static getCompInfo() {
        return { name: "PlanetZoomComponent", path: "epsplanet/components/zoom" };
    }
    ngOnInit() { }
    zoomIn() {
        const viewer = this.view.czm.viewer;
        this.getCesiumView().camera.zoomIn(viewer.camera.positionCartographic.height / Math.abs(Math.sin(viewer.camera.pitch)) * 0.2);
    }
    zoomOut() {
        const viewer = this.view.czm.viewer;
        viewer.camera.zoomOut(viewer.camera.positionCartographic.height / Math.abs(Math.sin(viewer.camera.pitch)) * 0.2);
    }
};
PlanetZoomComponent.ɵfac = function PlanetZoomComponent_Factory(t) { return new (t || PlanetZoomComponent)(); };
PlanetZoomComponent.ɵcmp = ɵɵdefineComponent({ type: PlanetZoomComponent, selectors: [["epsgis-planet-zoom"]], features: [ɵɵInheritDefinitionFeature], decls: 4, vars: 0, consts: [["title", "\u653E\u5927", 1, "jimu-widget-onscreen-icon", 3, "click"], ["nz-icon", "", "nzType", "plus", "nzTheme", "outline"], ["title", "\u7F29\u5C0F", 1, "jimu-widget-onscreen-icon", 2, "top", "33px", 3, "click"], ["nz-icon", "", "nzType", "minus", "nzTheme", "outline"]], template: function PlanetZoomComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵlistener("click", function PlanetZoomComponent_Template_div_click_0_listener() { return ctx.zoomIn(); });
        ɵɵelement(1, "i", 1);
        ɵɵelementEnd();
        ɵɵelementStart(2, "div", 2);
        ɵɵlistener("click", function PlanetZoomComponent_Template_div_click_2_listener() { return ctx.zoomOut(); });
        ɵɵelement(3, "i", 3);
        ɵɵelementEnd();
    } }, directives: [NzIconDirective, ɵNzTransitionPatchDirective], styles: [""] });
PlanetZoomComponent = __decorate([
    ComponentRegister({
        uri: "epsgis-planet-zoom",
        path: "epsplanet/components/zoom",
        name: "PlanetZoomComponent"
    })
], PlanetZoomComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(PlanetZoomComponent, [{
        type: Component,
        args: [{
                selector: 'epsgis-planet-zoom',
                templateUrl: './zoom.component.html',
                styleUrls: ['./zoom.component.scss'],
            }]
    }], function () { return []; }, null); })();

function PlanetBasemapGalleryComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 5);
    ɵɵlistener("click", function PlanetBasemapGalleryComponent_li_3_Template_li_click_0_listener() { ɵɵrestoreView(_r6); const item_r4 = ctx.$implicit; const ctx_r5 = ɵɵnextContext(); return ctx_r5.selectImage(item_r4); });
    ɵɵelementStart(1, "div", 6);
    ɵɵelement(2, "img", 7);
    ɵɵelement(3, "br");
    ɵɵelementStart(4, "span", 8);
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵproperty("src", item_r4.imgUrl, ɵɵsanitizeUrl);
    ɵɵadvance(2);
    ɵɵproperty("title", item_r4.title);
    ɵɵadvance(1);
    ɵɵtextInterpolate(item_r4.title);
} }
function PlanetBasemapGalleryComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 5);
    ɵɵlistener("click", function PlanetBasemapGalleryComponent_li_7_Template_li_click_0_listener() { ɵɵrestoreView(_r9); const item_r7 = ctx.$implicit; const ctx_r8 = ɵɵnextContext(); return ctx_r8.selectTerrain(item_r7); });
    ɵɵelementStart(1, "div", 6);
    ɵɵelement(2, "img", 7);
    ɵɵelement(3, "br");
    ɵɵelementStart(4, "span", 8);
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵproperty("src", item_r7.czmObject.img, ɵɵsanitizeUrl);
    ɵɵadvance(2);
    ɵɵproperty("title", item_r7.czmObject.name);
    ɵɵadvance(1);
    ɵɵtextInterpolate(item_r7.czmObject.name);
} }
function PlanetBasemapGalleryComponent_ng_template_10_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵelementStart(1, "span", 11);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const node_r10 = ɵɵnextContext().$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(node_r10.title);
} }
function PlanetBasemapGalleryComponent_ng_template_10_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵelementStart(1, "span", 11);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const node_r10 = ɵɵnextContext().$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(node_r10.title);
} }
function PlanetBasemapGalleryComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 9);
    ɵɵtemplate(1, PlanetBasemapGalleryComponent_ng_template_10_span_1_Template, 3, 1, "span", 10);
    ɵɵtemplate(2, PlanetBasemapGalleryComponent_ng_template_10_span_2_Template, 3, 1, "span", 10);
    ɵɵelementEnd();
} if (rf & 2) {
    const node_r10 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !node_r10.isLeaf);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", node_r10.isLeaf);
} }
let PlanetBasemapGalleryComponent = class PlanetBasemapGalleryComponent extends BasePlanetWidgetComponent {
    constructor(nzContextMenuService) {
        super();
        this.nzContextMenuService = nzContextMenuService;
        this.layerNodes = [];
        this.terrainData = [{
                "czmObject": {
                    "img": "https://lab2.cesiumlab.com/upload/3fd1ac60-2683-4ae8-a5da-c0250edc836b/2019_08_02_19_45_38.jpg",
                    "xbsjType": "Terrain",
                    "xbsjGuid": "0b34ebd4-5a5b-4f1d-b2e8-a41797193aa8",
                    "name": "中国14级（测试）",
                    "xbsjTerrainProvider": {
                        "type": "XbsjCesiumTerrainProvider",
                        "XbsjEllipsoidTerrainProvider": {},
                        "XbsjCesiumTerrainProvider": {
                            "url": "https://lab.earthsdk.com/terrain/577fd5b0ac1f11e99dbd8fd044883638",
                            "requestVertexNormals": true,
                            "requestWaterMask": true
                        },
                        "GoogleEarthEnterpriseTerrainProvider": {}
                    }
                }
            }];
        this.terrainIcon = "https://lab2.cesiumlab.com/upload/3fd1ac60-2683-4ae8-a5da-c0250edc836b/2019_08_02_19_45_38.jpg";
    }
    activeNode(data) {
        this.activatedNode = data.node;
    }
    contextMenu($event, menu) {
        this.nzContextMenuService.create($event, menu);
    }
    onCheckedChange(evt) {
        if (evt.eventName !== "check" || !evt.node) {
            return;
        }
        if (evt.node.isChecked) {
            SceneTreeUtils.GetXbsjCzmObject(evt.node).show = true;
        }
        else {
            SceneTreeUtils.GetXbsjCzmObject(evt.node).show = false;
        }
    }
    onRightClick($event) {
    }
    ngOnInit() {
        super.ngOnInit();
        var uw3 = XE.MVVM.watch(() => [...this.view.sceneTree.$refs.basemap.children], () => {
            this.loadBaseTree();
        });
    }
    loadBaseTree() {
        setTimeout(() => {
            const _layerNodes = SceneTreeUtils.SceneTree2NgZorroTree(this.view.sceneTree.$refs.basemap);
            this.layerNodes = [..._layerNodes[0]["_children"]];
            this.view.sceneTree.$refs.basemap.children[0].czmObject.xbsjZIndex = -1;
        }, 100);
    }
    selectImage(item) {
        console.log(SceneTreeUtils.loadLayerNode(item));
        const earth = this.view;
        earth.sceneTree.$refs.basemap.children[0] = SceneTreeUtils.loadLayerNode(item);
    }
    selectTerrain(item) {
        this.view.sceneTree.$refs.basemap.children.push(item);
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
};
PlanetBasemapGalleryComponent.ɵfac = function PlanetBasemapGalleryComponent_Factory(t) { return new (t || PlanetBasemapGalleryComponent)(ɵɵdirectiveInject(NzContextMenuService)); };
PlanetBasemapGalleryComponent.ɵcmp = ɵɵdefineComponent({ type: PlanetBasemapGalleryComponent, selectors: [["epsgis-planet-basemap-gallery"]], features: [ɵɵInheritDefinitionFeature], decls: 12, vars: 4, consts: [["nzTitle", "\u5F71\u50CF"], [3, "click", 4, "ngFor", "ngForOf"], ["nzTitle", "\u5730\u5F62"], ["nzBlockNode", "", "nzCheckable", "", 3, "nzData", "nzTreeTemplate", "nzClick", "nzCheckBoxChange"], ["nzTreeTemplate", ""], [3, "click"], [1, "backimg"], [3, "src"], [2, "width", "100%", "white-space", "nowrap", "text-overflow", "ellipsis", "overflow", "hidden", "text-align", "left", 3, "title"], [1, "custom-node"], [4, "ngIf"], [1, "folder-name"]], template: function PlanetBasemapGalleryComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "nz-tabset");
        ɵɵelementStart(1, "nz-tab", 0);
        ɵɵelementStart(2, "ul");
        ɵɵtemplate(3, PlanetBasemapGalleryComponent_li_3_Template, 6, 3, "li", 1);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(4, "nz-tabset");
        ɵɵelementStart(5, "nz-tab", 2);
        ɵɵelementStart(6, "ul");
        ɵɵtemplate(7, PlanetBasemapGalleryComponent_li_7_Template, 6, 3, "li", 1);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelement(8, "nz-divider");
        ɵɵelementStart(9, "nz-tree", 3);
        ɵɵlistener("nzClick", function PlanetBasemapGalleryComponent_Template_nz_tree_nzClick_9_listener($event) { return ctx.activeNode($event); })("nzCheckBoxChange", function PlanetBasemapGalleryComponent_Template_nz_tree_nzCheckBoxChange_9_listener($event) { return ctx.onCheckedChange($event); });
        ɵɵelementEnd();
        ɵɵtemplate(10, PlanetBasemapGalleryComponent_ng_template_10_Template, 3, 2, "ng-template", null, 4, ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r2 = ɵɵreference(11);
        ɵɵadvance(3);
        ɵɵproperty("ngForOf", ctx.config.basemaps);
        ɵɵadvance(4);
        ɵɵproperty("ngForOf", ctx.terrainData);
        ɵɵadvance(2);
        ɵɵproperty("nzData", ctx.layerNodes)("nzTreeTemplate", _r2);
    } }, directives: [NzTabSetComponent, NzTabComponent, NgForOf, NzDividerComponent, NzTreeComponent, NgIf], styles: ["*[_ngcontent-%COMP%]{margin:0;padding:0}img[_ngcontent-%COMP%]{width:70px;height:70px}li[_ngcontent-%COMP%]{float:left;list-style:none;height:100px;cursor:pointer}.backimg[_ngcontent-%COMP%]{width:70px;height:70px;border:1px solid;border-radius:3px;background:grey;margin:3px}.backimg[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;width:70px;text-align:center}.ipt[_ngcontent-%COMP%], .ipt1[_ngcontent-%COMP%], .ipt2[_ngcontent-%COMP%]{margin-bottom:5px}.ant-input[_ngcontent-%COMP%]{width:70%}nz-select[_ngcontent-%COMP%]{width:50%}.footer[_ngcontent-%COMP%]{margin-top:5px;float:right}.footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:50px}.schema[_ngcontent-%COMP%]{position:absolute;top:5px;left:5px}  .ant-tabs-tab{padding:0}"] });
PlanetBasemapGalleryComponent = __decorate([
    ComponentRegister({
        uri: "epsgis-planet-basemap-gallery",
        path: "epsplanet/components/basemap-gallery",
        name: "PlanetBasemapGalleryComponent"
    })
], PlanetBasemapGalleryComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(PlanetBasemapGalleryComponent, [{
        type: Component,
        args: [{
                selector: "epsgis-planet-basemap-gallery",
                templateUrl: "./basemap-gallery.component.html",
                styleUrls: ["./basemap-gallery.component.scss"]
            }]
    }], function () { return [{ type: NzContextMenuService }]; }, null); })();

let propertyLists = [];
let czmObjectList = [];
let resList = [];
let highLight = null;
window["allowClick"] = false;
class Identify {
    constructor(http) {
        this.http = http;
    }
    httpReq(method, url) {
        if (method == 'post') {
            return this.http.httpClient.post(url, "").toPromise();
        }
        if (method == 'get') {
            return this.http.httpClient.get(url).toPromise();
        }
    }
    GetFeatureInfo(czmObject, earth, type, callback) {
        if (highLight == null) {
            highLight = new Cesium.CustomDataSource('highLight');
            earth.czm.viewer.dataSources.add(highLight);
        }
        let scene = earth.czm.scene;
        let viewer = earth.czm.viewer;
        let WFSUrl = this.GetWFSUrl(czmObject.xbsjImageryProvider);
        let handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
        let filter = "";
        handler.setInputAction((click) => {
            if (!window["allowClick"])
                return;
            if (!czmObject.show)
                return;
            earth.sceneTree.$refs.pin1.czmObject.customProp = false;
            highLight.entities.removeAll();
            resList = [];
            earth.sceneTree.$refs.pin1.czmObject.position = this.Cartesian2ToCartographic(viewer, click.position);
            let position = this.Cartesian2ToWGS84(viewer, click.position);
            let bufferCoordinates = this.Buffer([position.lon, position.lat]);
            if (type == 'point') {
                filter = `<Filter xmlns="http://www.opengis.net/ogc" xmlns:gml="http://www.opengis.net/gml"><Intersects><PropertyName>the_geom</PropertyName><gml:outerBoundaryIs><gml:LinearRing><gml:coordinates>${bufferCoordinates}</gml:coordinates></gml:LinearRing></gml:outerBoundaryIs></Intersects></Filter>`;
            }
            else if (type = 'line') {
            }
            else if (type = 'polygon') {
            }
            this.httpReq('post', WFSUrl + filter).then((res) => {
                if (res.features.length > 0) {
                    let properties = res.features[0].properties;
                    let propertyList = [];
                    Object.keys(properties).map(key => propertyList.push({
                        name: key,
                        value: properties[key]
                    }));
                    propertyLists.push(propertyList);
                    czmObjectList.push(czmObject);
                    resList.push(res);
                    setTimeout(() => {
                        if (resList.length > 1) {
                            if (czmObjectList[0]._ci > czmObjectList[1]._ci) {
                                if (czmObjectList[0]._ci !== czmObject._ci)
                                    return;
                                if (typeof callback === 'function') {
                                    callback(propertyLists[0]);
                                    Cesium.GeoJsonDataSource.load(resList[0])
                                        .then(dataSource => {
                                        dataSource.entities.values.forEach(entity => {
                                            highLight.entities.add(entity);
                                        });
                                    });
                                }
                            }
                            else {
                                if (czmObjectList[1]._ci !== czmObject._ci)
                                    return;
                                if (typeof callback === 'function') {
                                    callback(propertyLists[1]);
                                    Cesium.GeoJsonDataSource.load(resList[1])
                                        .then(dataSource => {
                                        dataSource.entities.values.forEach(entity => {
                                            highLight.entities.add(entity);
                                        });
                                    });
                                }
                            }
                            return;
                        }
                        else {
                            if (typeof callback === 'function') {
                                callback(propertyList);
                                Cesium.GeoJsonDataSource.load(res)
                                    .then(dataSource => {
                                    dataSource.entities.values.forEach(entity => {
                                        highLight.entities.add(entity);
                                    });
                                });
                            }
                        }
                    }, 100);
                    setTimeout(() => {
                        resList = [];
                        propertyLists = [];
                        czmObjectList = [];
                    }, 1000);
                }
            }).catch(err => { });
        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
    }
    InitHandler() {
    }
    getLayers(czmObject, earth, callback) {
        let handler = new Cesium.ScreenSpaceEventHandler(earth.czm.scene.canvas);
        let url = czmObject.xbsjImageryProvider.WebMapTileServiceImageryProvider.url || czmObject.xbsjImageryProvider.SSWebMapServiceImageryProvider.url;
        let requestUrl = "";
        if (czmObject.xbsjImageryProvider.type == "WebMapTileServiceImageryProvider") {
            requestUrl = url.split('MapServer')[0] + "MapServer/layers?f=pjson";
        }
        else if (czmObject.xbsjImageryProvider.type == "SSWebMapServiceImageryProvider") {
            requestUrl = url.split('arcgis')[0] + 'arcgis/rest' + url.split('arcgis')[1].split('MapServer')[0] + "MapServer/layers?f=pjson";
        }
        this.httpReq('get', requestUrl).then((res) => {
            console.log(res);
            handler.setInputAction((click) => {
                if (res.layers == undefined)
                    return;
                if (!window["allowClick"])
                    return;
                if (!czmObject.show)
                    return;
                highLight.entities.removeAll();
                earth.sceneTree.$refs.pin1.czmObject.customProp = false;
                earth.sceneTree.$refs.pin1.czmObject.position = this.Cartesian2ToCartographic(earth.czm.viewer, click.position);
                let position = this.Cartesian2ToWGS84(earth.czm.viewer, click.position);
                let bufferCoordinates = this.Buffer([position.lon, position.lat]);
                let addr = this.GetWFSUrl(czmObject.xbsjImageryProvider);
                let typeName = url.split('/MapServer')[0].split('services/')[1];
                let resList = [];
                let geometryList = [];
                for (let i = 0; i < res.layers.length; i++) {
                    const item = res.layers[i];
                    let query = `${addr}`
                        + `typename=${typeName}:${item.name}&Filter=`
                        + `<ogc:Filter><ogc:Intersects><ogc:PropertyName>Shape</ogc:PropertyName>`
                        + `<gml:Polygon srsName="urn:x-ogc:def:crs:EPSG:4326"><gml:outerBoundaryIs><gml:LinearRing>`
                        + `<gml:coordinates>${bufferCoordinates}</gml:coordinates>`
                        + `</gml:LinearRing></gml:outerBoundaryIs></gml:Polygon></ogc:Intersects></ogc:Filter>`;
                    this.httpReq('get', query).then().catch((err) => {
                        let res = err.error.text;
                        if (this.xml2Json(this.stringToXml(res))['FeatureCollection']['featureMember']) {
                            let properties = this.xml2Json(this.stringToXml(res))['FeatureCollection']['featureMember'][item.name];
                            let propertyList = [];
                            let geojson = {};
                            if (properties == undefined || properties == null)
                                return;
                            Object.keys(properties).map(key => {
                                if (key !== "Shape") {
                                    propertyList.push({
                                        name: key,
                                        value: properties[key].value
                                    });
                                }
                                else {
                                    if (properties[key].MultiSurface) {
                                        let posList = properties[key].MultiSurface.surfaceMember.Polygon.exterior.LinearRing.posList.value.split(" ");
                                        posList.shift();
                                        let list = [];
                                        for (let i = 0; i < posList.length; i += 2) {
                                            list.push([posList[i], posList[i + 1]]);
                                        }
                                        geojson = {
                                            type: "Feature",
                                            geometry: {
                                                type: "LineString",
                                                coordinates: list
                                            }
                                        };
                                    }
                                    else if (properties[key].Point) {
                                        let posList = properties[key].Point.pos.value.split(" ");
                                        geojson =
                                            {
                                                type: "Feature",
                                                geometry: {
                                                    type: "Point",
                                                    coordinates: posList
                                                }
                                            };
                                    }
                                    else if (properties[key].MultiCurve) {
                                        let posList = properties[key].MultiCurve.curveMember.LineString.posList.value.split(" ");
                                        let list = [];
                                        for (let i = 0; i < posList.length; i += 2) {
                                            list.push([posList[i], posList[i + 1]]);
                                        }
                                        geojson =
                                            {
                                                type: "Feature",
                                                geometry: {
                                                    type: "LineString",
                                                    coordinates: list
                                                }
                                            };
                                    }
                                }
                            });
                            resList.push(propertyList);
                            geometryList.push(geojson);
                        }
                    });
                }
                setTimeout(() => {
                    if (resList.length > 0 && geometryList.length > 0) {
                        if (geometryList[0].geometry.type == "Point") {
                            Cesium.GeoJsonDataSource.load(geometryList[0]).then(dataSource => {
                                dataSource.entities.values.forEach(entity => {
                                    entity.billboard = null;
                                    entity.point = new Cesium.PointGraphics({
                                        show: true,
                                        color: Cesium.Color.AQUA,
                                        pixelSize: 10
                                    });
                                    highLight.entities.add(entity);
                                });
                            });
                        }
                        else if (geometryList[0].geometry.type == "LineString") {
                            Cesium.GeoJsonDataSource.load(geometryList[0]).then(dataSource => {
                                dataSource.entities.values.forEach(entity => {
                                    entity.polyline.width = 10;
                                    entity.polyline.material = new Cesium.PolylineGlowMaterialProperty({
                                        glowPower: 0.2,
                                        color: Cesium.Color.BLUE
                                    });
                                    highLight.entities.add(entity);
                                });
                            });
                        }
                        else {
                            Cesium.GeoJsonDataSource.load(geometryList[0]).then(dataSource => {
                                dataSource.entities.values.forEach(entity => {
                                    highLight.entities.add(entity);
                                });
                            });
                        }
                        callback(resList[0]);
                    }
                }, 500);
            }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
        });
    }
    Cartesian2ToWGS84(viewer, position) {
        var ray = viewer.camera.getPickRay(position);
        var cartesian = viewer.scene.globe.pick(ray, viewer.scene);
        var cartographic = Cesium.Cartographic.fromCartesian(cartesian);
        let lon = Cesium.Math.toDegrees(cartographic.longitude);
        let lat = Cesium.Math.toDegrees(cartographic.latitude);
        return { lon: lon, lat: lat };
    }
    Cartesian2ToCartographic(viewer, position) {
        var ray = viewer.camera.getPickRay(position);
        var cartesian = viewer.scene.globe.pick(ray, viewer.scene);
        var cartographic = Cesium.Cartographic.fromCartesian(cartesian);
        return [cartographic.longitude, cartographic.latitude, cartographic.height];
    }
    GetWFSUrl(ImageryProvider) {
        let WFSUrl = "";
        if (ImageryProvider.type == "WebMapTileServiceImageryProvider") {
            let WMTSImageryProvider = ImageryProvider.WebMapTileServiceImageryProvider;
            if (WMTSImageryProvider.url.indexOf('arcgis') !== -1) {
                WFSUrl = WMTSImageryProvider.url.split("rest")[0] + WMTSImageryProvider.url.split("rest/")[1].split("MapServer")[0] + "MapServer/WFSServer?request=GetFeature&service=WFS&version=1.1.0&";
            }
            else if (WMTSImageryProvider.url.indexOf('geoserver') !== -1) {
                WFSUrl = WMTSImageryProvider.url.split("gwc")[0] + WMTSImageryProvider.layer.split(":")[0] + "/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=" + WMTSImageryProvider.layer + "&maxFeatures=1&outputFormat=json&filter=";
            }
        }
        if (ImageryProvider.type == "SSWebMapServiceImageryProvider") {
            let SSWebMapServiceImageryProvider = ImageryProvider.SSWebMapServiceImageryProvider;
            if (SSWebMapServiceImageryProvider.url.indexOf('arcgis') !== -1) {
                WFSUrl = SSWebMapServiceImageryProvider.url.split("MapServer")[0] + "MapServer/WFSServer?request=GetFeature&service=WFS&version=1.1.0&";
            }
            else if (SSWebMapServiceImageryProvider.url.indexOf('geoserver') !== -1) {
                WFSUrl = SSWebMapServiceImageryProvider.url.split("wms")[0] + "/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=" + SSWebMapServiceImageryProvider.layer + "&maxFeatures=1&outputFormat=json&filter=";
            }
        }
        return WFSUrl;
    }
    Buffer(position) {
        let pointF = turf.point(position);
        let buffered = turf.buffer(pointF, 100, 'meters');
        let coordinates = buffered.geometry.coordinates;
        let points = coordinates[0];
        let degreesListStr = this.pointsToDegreesArray(points);
        return degreesListStr;
    }
    pointsToDegreesArray(points) {
        let degreesArray = "";
        points.map(item => {
            degreesArray += item[0] + "," + item[1] + " ";
        });
        return degreesArray;
    }
    ClearHighLight() {
        highLight.entities.removeAll();
    }
    xml2Json(xml) {
        var obj = {};
        if (xml.nodeType == 1) {
            if (xml.attributes.length > 0) {
                obj["@attributes"] = {};
                for (var j = 0; j < xml.attributes.length; j++) {
                    var attribute = xml.attributes.item(j);
                    if (attribute.nodeName.indexOf(":") == -1) {
                        obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
                    }
                    else {
                        obj["@attributes"][attribute.nodeName.split(":")[1]] = attribute.nodeValue;
                    }
                }
            }
        }
        else if (xml.nodeType == 3) {
            obj = xml.nodeValue;
        }
        if (xml.hasChildNodes()) {
            for (var i = 0; i < xml.childNodes.length; i++) {
                var item = xml.childNodes.item(i);
                var nodeName = item.nodeName;
                if (typeof (obj[nodeName.split(":")[1]]) == "undefined") {
                    if (nodeName.split(":")[1] == undefined) {
                        obj['value'] = this.xml2Json(item);
                    }
                    else {
                        obj[nodeName.split(":")[1]] = this.xml2Json(item);
                    }
                }
                else {
                    if (typeof (obj[nodeName.split(":")[1]].length) == "undefined") {
                        var old = obj[nodeName.split(":")[1]];
                        obj[nodeName.split(":")[1]] = [];
                        obj[nodeName.split(":")[1]].push(old);
                    }
                    obj[nodeName.split(":")[1]].push(this.xml2Json(item));
                }
            }
        }
        return obj;
    }
    stringToXml(xmlString) {
        var xmlDoc;
        if (typeof xmlString == "string") {
            if (document.implementation.createDocument) {
                var parser = new DOMParser();
                xmlDoc = parser.parseFromString(xmlString, "text/xml");
            }
        }
        else {
            xmlDoc = xmlString;
        }
        return xmlDoc;
    }
}
Identify.ɵfac = function Identify_Factory(t) { return new (t || Identify)(ɵɵinject(HttpReqService)); };
Identify.ɵprov = ɵɵdefineInjectable({ token: Identify, factory: Identify.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(Identify, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: HttpReqService }]; }, null); })();

function PlanetIdentifyComponent_tr_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "tr");
    ɵɵelementStart(1, "td");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "td");
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(data_r2.name);
    ɵɵadvance(2);
    ɵɵtextInterpolate(data_r2.value);
} }
const _c0$3 = function (a0, a1) { return { "left": a0, "bottom": a1 }; };
let PlanetIdentifyComponent = class PlanetIdentifyComponent extends BasePlanetWidgetComponent {
    constructor(identify) {
        super();
        this.identify = identify;
        this.winPos = [0, 0, 0, 0];
        this.title = "";
        this.pin1 = null;
        this.propertyList = [
            {
                name: "1",
                value: 2
            }
        ];
        this.showInfo = false;
        this.switchValue = false;
    }
    createInfoWin() {
        let win = document.createElement('div');
        win.className = "dialog";
        win.style.left = this.winPos[0] - 80 + "px";
        win.style.bottom = this.winPos[3] - 320 + "px";
        win.innerHTML = `<div class="panel">
    <span>${this.title}</span><i nz-icon nzType="close" nzTheme="outline" (click)="close()" style="float: right;"></i>
    <nz-table #basicTable [nzData]="propertyList" [nzFrontPagination]="false" [nzShowPagination]="false"
        [nzTitle]="null">
        <tbody>
            <tr *ngFor="let data of basicTable.data">
                <td>{{ data.name }}</td>
                <td>{{ data.value }}</td>
            </tr>
        </tbody>
    </nz-table>
    <i nz-icon nzType="zoom-in" nzTheme="outline" (click)="zoomTo()"></i><span>缩放至</span>
</div>
<div class="arrow"></div>`;
        document.getElementsByClassName("cesium-viewer")[0].append(win);
        return win;
    }
    Init() {
        let win = document.getElementsByClassName("dialog")[0];
        win.parentNode.removeChild(win);
        document.getElementsByClassName("cesium-viewer")[0].append(win);
        window['showInfo'] = this.showInfo;
        this.view.sceneTree.$refs.pin.children.push({
            "ref": 'pin1',
            "czmObject": {
                "name": 'Pin1',
                "xbsjType": "Pin",
                "position": [1, 1, 0],
                "near": 30,
                "show": false,
                "customProp": this.showInfo
            }
        });
        this.pin1 = this.view.sceneTree.$refs.pin1.czmObject;
        XE.MVVM.watch(() => this.pin1.winPos, () => {
            this.winPos = this.pin1.winPos;
            console.log("win", this.winPos);
        });
        XE.MVVM.watch(() => this.pin1.customProp, () => {
            if (!this.pin1.customProp) {
                this.showInfo = false;
            }
        });
        if (this.view == null)
            return;
        this.view.sceneTree.$refs.layerlist.children.forEach(group => {
            if (group.children) {
                group.children.forEach(item => {
                    if (item.czmObject.xbsjType !== "Imagery")
                        return;
                    if (item.czmObject.xbsjImageryProvider.type == "WebMapTileServiceImageryProvider" || item.czmObject.xbsjImageryProvider.type == "SSWebMapServiceImageryProvider") {
                        if (item.czmObject.xbsjImageryProvider[item.czmObject.xbsjImageryProvider.type].url.indexOf("arcgis") !== -1) {
                            this.identify.getLayers(item.czmObject, this.view, res => {
                                console.log("res:", res);
                                this.pin1.customProp = true;
                                this.showInfo = true;
                                this.propertyList = res;
                            });
                        }
                        else {
                            this.identify.GetFeatureInfo(item.czmObject, this.view, 'point', res => {
                                console.log(item.czmObject.xbsjImageryProvider[item.czmObject.xbsjImageryProvider.type]);
                                this.title = item.czmObject.xbsjImageryProvider[item.czmObject.xbsjImageryProvider.type].layer;
                                this.pin1.customProp = true;
                                this.showInfo = true;
                                this.propertyList = res;
                            });
                        }
                    }
                });
            }
        });
    }
    close() {
        this.showInfo = false;
    }
    zoomTo() {
        let entityCollection = this.view.czm.viewer.dataSources.getByName("highLight")[0].entities;
        this.view.czm.viewer.flyTo(entityCollection);
    }
    switch($event) {
        window["allowClick"] = $event;
        if (!$event) {
            this.identify.ClearHighLight();
        }
    }
    test() {
        this.identify.getLayers(this.view.sceneTree.$refs.layerlist.children[1].children[0].czmObject, this.view, res => {
            console.log(res);
            this.pin1.customProp = true;
            this.showInfo = true;
            this.propertyList = res;
        });
    }
    ngOnInit() {
        super.ngOnInit();
        this.Init();
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
};
PlanetIdentifyComponent.ɵfac = function PlanetIdentifyComponent_Factory(t) { return new (t || PlanetIdentifyComponent)(ɵɵdirectiveInject(Identify)); };
PlanetIdentifyComponent.ɵcmp = ɵɵdefineComponent({ type: PlanetIdentifyComponent, selectors: [["epsgis-planet-identify"]], hostAttrs: ["title", "\u8BC6\u522B"], hostVars: 2, hostBindings: function PlanetIdentifyComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵclassProp("jimu-widget-onscreen-icon", true);
    } }, features: [ɵɵInheritDefinitionFeature], decls: 14, vars: 12, consts: [[3, "ngModel", "ngModelChange"], [1, "dialog", 3, "hidden", "ngStyle"], [1, "panel"], ["nz-icon", "", "nzType", "close", "nzTheme", "outline", 2, "float", "right", 3, "click"], [3, "nzData", "nzFrontPagination", "nzShowPagination", "nzTitle"], ["basicTable", ""], [4, "ngFor", "ngForOf"], ["nz-icon", "", "nzType", "zoom-in", "nzTheme", "outline", 3, "click"], [1, "arrow"]], template: function PlanetIdentifyComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "nz-switch", 0);
        ɵɵlistener("ngModelChange", function PlanetIdentifyComponent_Template_nz_switch_ngModelChange_0_listener($event) { return ctx.switchValue = $event; })("ngModelChange", function PlanetIdentifyComponent_Template_nz_switch_ngModelChange_0_listener($event) { return ctx.switch($event); });
        ɵɵelementEnd();
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵelementStart(3, "span");
        ɵɵtext(4);
        ɵɵelementEnd();
        ɵɵelementStart(5, "i", 3);
        ɵɵlistener("click", function PlanetIdentifyComponent_Template_i_click_5_listener() { return ctx.close(); });
        ɵɵelementEnd();
        ɵɵelementStart(6, "nz-table", 4, 5);
        ɵɵelementStart(8, "tbody");
        ɵɵtemplate(9, PlanetIdentifyComponent_tr_9_Template, 5, 2, "tr", 6);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(10, "i", 7);
        ɵɵlistener("click", function PlanetIdentifyComponent_Template_i_click_10_listener() { return ctx.zoomTo(); });
        ɵɵelementEnd();
        ɵɵelementStart(11, "span");
        ɵɵtext(12, "\u7F29\u653E\u81F3");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelement(13, "div", 8);
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵɵreference(7);
        ɵɵproperty("ngModel", ctx.switchValue);
        ɵɵadvance(1);
        ɵɵproperty("hidden", !ctx.showInfo)("ngStyle", ɵɵpureFunction2(9, _c0$3, ctx.winPos[0] - 65 + "px", ctx.winPos[3] + "px"));
        ɵɵadvance(3);
        ɵɵtextInterpolate(ctx.title);
        ɵɵadvance(2);
        ɵɵproperty("nzData", ctx.propertyList)("nzFrontPagination", false)("nzShowPagination", false)("nzTitle", null);
        ɵɵadvance(3);
        ɵɵproperty("ngForOf", _r0.data);
    } }, directives: [NzSwitchComponent, NgControlStatus, NgModel, NgStyle, NzIconDirective, ɵNzTransitionPatchDirective, NzTableComponent, NzTbodyComponent, NgForOf, NzTrDirective, NzTableCellDirective], styles: [".ant-table-tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%], .ant-table-thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%], .ant-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%], .ant-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%]{padding:10px}  .ssmodal_content{overflow:overlay!important}.dialog[_ngcontent-%COMP%]{position:absolute;width:300px;min-height:60px;color:#000;border-radius:5px;cursor:pointer}.dialog[_ngcontent-%COMP%],   .ant-table-tbody>tr>td,   .ant-table-thead>tr>th{padding:5px}  tr.ant-table-row.ng-star-inserted:nth-child(odd){background-color:hsla(0,0%,66.3%,.6)}.arrow[_ngcontent-%COMP%]{margin-left:50px;width:0;height:0;border-top:10px solid #fff;border-left:10px solid transparent;border-right:10px solid transparent}.panel[_ngcontent-%COMP%]{background-color:#fff;padding:5px}.panel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#000}.panel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{color:#0ff}.panel[_ngcontent-%COMP%]   .ant-table-wrapper[_ngcontent-%COMP%]{max-height:350px;overflow:overlay}"] });
PlanetIdentifyComponent = __decorate([
    ComponentRegister({
        uri: "epsgis-planet-identify",
        path: "epsplanet/components/identify",
        name: "PlanetIdentifyComponent"
    })
], PlanetIdentifyComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(PlanetIdentifyComponent, [{
        type: Component,
        args: [{
                selector: "epsgis-planet-identify",
                templateUrl: "./identify.component.html",
                styleUrls: ["./identify.component.scss"],
                host: {
                    "[class.jimu-widget-onscreen-icon]": "true",
                    "title": "识别"
                }
            }]
    }], function () { return [{ type: Identify }]; }, null); })();

const components = [
    PlanetEarthComponent,
    PlanetLayerListComponent,
    PlanetLayerManagerComponent,
    PlanetStatusBarComponent,
    PlanetHomeComponent,
    PlanetLocationComponent,
    PlanetModeSwitchComponent,
    PlanetZoomComponent,
    PlanetBasemapGalleryComponent,
    PlanetIdentifyComponent
];
class EpsGisForPlanetModule {
}
EpsGisForPlanetModule.ɵmod = ɵɵdefineNgModule({ type: EpsGisForPlanetModule });
EpsGisForPlanetModule.ɵinj = ɵɵdefineInjector({ factory: function EpsGisForPlanetModule_Factory(t) { return new (t || EpsGisForPlanetModule)(); }, imports: [[
            CommonModule,
            HttpClientModule,
            ReactiveFormsModule,
            FormsModule,
            NzInputModule,
            NzInputNumberModule,
            NzIconModule,
            NzTreeModule,
            NzTreeViewModule,
            NzPopoverModule,
            NzDividerModule,
            NzSelectModule,
            NzButtonModule,
            NzMenuModule,
            NzDropDownModule,
            NzSliderModule,
            NzGridModule,
            NzTabsModule,
            NzModalModule,
            NzTableModule,
            NzSwitchModule,
            NzToolTipModule,
            NzFormModule,
            EpsGisDirectivesModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(EpsGisForPlanetModule, { declarations: [PlanetEarthComponent,
        PlanetLayerListComponent,
        PlanetLayerManagerComponent,
        PlanetStatusBarComponent,
        PlanetHomeComponent,
        PlanetLocationComponent,
        PlanetModeSwitchComponent,
        PlanetZoomComponent,
        PlanetBasemapGalleryComponent,
        PlanetIdentifyComponent], imports: [CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        NzInputModule,
        NzInputNumberModule,
        NzIconModule,
        NzTreeModule,
        NzTreeViewModule,
        NzPopoverModule,
        NzDividerModule,
        NzSelectModule,
        NzButtonModule,
        NzMenuModule,
        NzDropDownModule,
        NzSliderModule,
        NzGridModule,
        NzTabsModule,
        NzModalModule,
        NzTableModule,
        NzSwitchModule,
        NzToolTipModule,
        NzFormModule,
        EpsGisDirectivesModule], exports: [PlanetEarthComponent,
        PlanetLayerListComponent,
        PlanetLayerManagerComponent,
        PlanetStatusBarComponent,
        PlanetHomeComponent,
        PlanetLocationComponent,
        PlanetModeSwitchComponent,
        PlanetZoomComponent,
        PlanetBasemapGalleryComponent,
        PlanetIdentifyComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(EpsGisForPlanetModule, [{
        type: NgModule,
        args: [{
                declarations: components,
                imports: [
                    CommonModule,
                    HttpClientModule,
                    ReactiveFormsModule,
                    FormsModule,
                    NzInputModule,
                    NzInputNumberModule,
                    NzIconModule,
                    NzTreeModule,
                    NzTreeViewModule,
                    NzPopoverModule,
                    NzDividerModule,
                    NzSelectModule,
                    NzButtonModule,
                    NzMenuModule,
                    NzDropDownModule,
                    NzSliderModule,
                    NzGridModule,
                    NzTabsModule,
                    NzModalModule,
                    NzTableModule,
                    NzSwitchModule,
                    NzToolTipModule,
                    NzFormModule,
                    EpsGisDirectivesModule
                ],
                exports: components,
                entryComponents: [...components]
            }]
    }], null, null); })();

export { BasePlanetWidgetComponent, EpsGisForPlanetModule, Identify, LayerServiceSource, LayerType, PlanetBasemapGalleryComponent, PlanetEarthComponent, PlanetHomeComponent, PlanetIdentifyComponent, PlanetLayerListComponent, PlanetLayerManagerComponent, PlanetLocationComponent, PlanetModeSwitchComponent, PlanetStatusBarComponent, PlanetZoomComponent, SceneTreeUtils, newXbsjFolderNode, newXbsjLayerNode };
//# sourceMappingURL=epsplanet.js.map
