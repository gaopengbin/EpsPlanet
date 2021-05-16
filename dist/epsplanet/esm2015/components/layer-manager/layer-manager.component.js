import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { ComponentRegister } from 'epsgis';
import { NzTreeNode } from 'ng-zorro-antd/tree';
import { SceneTreeUtils } from '../../utils/sceneTree-utils';
import { BasePlanetWidgetComponent } from '../base-widget/base-widget.component';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/dropdown";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/grid";
import * as i4 from "ng-zorro-antd/slider";
import * as i5 from "@angular/forms";
import * as i6 from "ng-zorro-antd/input-number";
const _c0 = function () { return { marginLeft: "16px" }; };
function PlanetLayerManagerComponent_div_0_nz_row_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nz-row");
    i0.ɵɵelementStart(1, "nz-col", 3);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "nz-col", 4);
    i0.ɵɵelementStart(5, "nz-slider", 5);
    i0.ɵɵlistener("ngModelChange", function PlanetLayerManagerComponent_div_0_nz_row_1_Template_nz_slider_ngModelChange_5_listener($event) { i0.ɵɵrestoreView(_r5); const item_r3 = ctx.$implicit; const ctx_r4 = i0.ɵɵnextContext(2); return (ctx_r4.selectedNode["origin"][item_r3.en] = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "nz-col", 6);
    i0.ɵɵelementStart(7, "nz-input-number", 7);
    i0.ɵɵlistener("ngModelChange", function PlanetLayerManagerComponent_div_0_nz_row_1_Template_nz_input_number_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r5); const item_r3 = ctx.$implicit; const ctx_r6 = i0.ɵɵnextContext(2); return (ctx_r6.selectedNode["origin"][item_r3.en] = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r3.zh);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("nzMin", 0)("nzMax", 1)("nzStep", 0.01)("ngModel", ctx_r2.selectedNode["origin"][item_r3.en]);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("nzMin", 0)("nzMax", 1)("nzStep", 0.01)("ngStyle", i0.ɵɵpureFunction0(10, _c0))("ngModel", ctx_r2.selectedNode["origin"][item_r3.en]);
} }
function PlanetLayerManagerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, PlanetLayerManagerComponent_div_0_nz_row_1_Template, 8, 11, "nz-row", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.config.basemapSchema);
} }
function PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_4_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nz-col", 4);
    i0.ɵɵelementStart(1, "nz-slider", 5);
    i0.ɵɵlistener("ngModelChange", function PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_4_Template_nz_slider_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r18); const item_r8 = i0.ɵɵnextContext().$implicit; const ctx_r17 = i0.ɵɵnextContext(2); return (ctx_r17.selectedNode["origin"][item_r8.en][1] = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext().$implicit;
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzMin", 0)("nzMax", 1)("nzStep", 0.01)("ngModel", ctx_r9.selectedNode["origin"][item_r8.en][1]);
} }
function PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_5_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nz-col", 4);
    i0.ɵɵelementStart(1, "nz-slider", 5);
    i0.ɵɵlistener("ngModelChange", function PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_5_Template_nz_slider_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r22); const item_r8 = i0.ɵɵnextContext().$implicit; const ctx_r21 = i0.ɵɵnextContext(2); return (ctx_r21.selectedNode["origin"][item_r8.en][0] = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext().$implicit;
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzMin", 0)("nzMax", 1)("nzStep", 0.01)("ngModel", ctx_r10.selectedNode["origin"][item_r8.en][0]);
} }
function PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_6_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nz-col", 4);
    i0.ɵɵelementStart(1, "nz-slider", 5);
    i0.ɵɵlistener("ngModelChange", function PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_6_Template_nz_slider_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r26); const item_r8 = i0.ɵɵnextContext().$implicit; const ctx_r25 = i0.ɵɵnextContext(2); return (ctx_r25.selectedNode["origin"][item_r8.en] = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext().$implicit;
    const ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzMin", 0)("nzMax", 256)("nzStep", 1)("ngModel", ctx_r11.selectedNode["origin"][item_r8.en]);
} }
function PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_7_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nz-col", 4);
    i0.ɵɵelementStart(1, "nz-slider", 5);
    i0.ɵɵlistener("ngModelChange", function PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_7_Template_nz_slider_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r30); const item_r8 = i0.ɵɵnextContext().$implicit; const ctx_r29 = i0.ɵɵnextContext(2); return (ctx_r29.selectedNode["origin"][item_r8.en] = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext().$implicit;
    const ctx_r12 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzMin", 0)("nzMax", 5)("nzStep", 0.01)("ngModel", ctx_r12.selectedNode["origin"][item_r8.en]);
} }
function PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_8_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nz-col", 6);
    i0.ɵɵelementStart(1, "nz-input-number", 7);
    i0.ɵɵlistener("ngModelChange", function PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_8_Template_nz_input_number_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r34); const item_r8 = i0.ɵɵnextContext().$implicit; const ctx_r33 = i0.ɵɵnextContext(2); return (ctx_r33.selectedNode["origin"][item_r8.en][1] = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext().$implicit;
    const ctx_r13 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzMin", 0)("nzMax", 1)("nzStep", 0.01)("ngStyle", i0.ɵɵpureFunction0(5, _c0))("ngModel", ctx_r13.selectedNode["origin"][item_r8.en][1]);
} }
function PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_9_Template(rf, ctx) { if (rf & 1) {
    const _r38 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nz-col", 6);
    i0.ɵɵelementStart(1, "nz-input-number", 7);
    i0.ɵɵlistener("ngModelChange", function PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_9_Template_nz_input_number_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r38); const item_r8 = i0.ɵɵnextContext().$implicit; const ctx_r37 = i0.ɵɵnextContext(2); return (ctx_r37.selectedNode["origin"][item_r8.en][0] = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext().$implicit;
    const ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzMin", 0)("nzMax", 1)("nzStep", 0.01)("ngStyle", i0.ɵɵpureFunction0(5, _c0))("ngModel", ctx_r14.selectedNode["origin"][item_r8.en][0]);
} }
function PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_10_Template(rf, ctx) { if (rf & 1) {
    const _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nz-col", 6);
    i0.ɵɵelementStart(1, "nz-input-number", 7);
    i0.ɵɵlistener("ngModelChange", function PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_10_Template_nz_input_number_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r42); const item_r8 = i0.ɵɵnextContext().$implicit; const ctx_r41 = i0.ɵɵnextContext(2); return (ctx_r41.selectedNode["origin"][item_r8.en] = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext().$implicit;
    const ctx_r15 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzMin", 0)("nzMax", 256)("nzStep", 1)("ngStyle", i0.ɵɵpureFunction0(5, _c0))("ngModel", ctx_r15.selectedNode["origin"][item_r8.en]);
} }
function PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_11_Template(rf, ctx) { if (rf & 1) {
    const _r46 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nz-col", 6);
    i0.ɵɵelementStart(1, "nz-input-number", 7);
    i0.ɵɵlistener("ngModelChange", function PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_11_Template_nz_input_number_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r46); const item_r8 = i0.ɵɵnextContext().$implicit; const ctx_r45 = i0.ɵɵnextContext(2); return (ctx_r45.selectedNode["origin"][item_r8.en] = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext().$implicit;
    const ctx_r16 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzMin", 0)("nzMax", 5)("nzStep", 0.01)("ngStyle", i0.ɵɵpureFunction0(5, _c0))("ngModel", ctx_r16.selectedNode["origin"][item_r8.en]);
} }
function PlanetLayerManagerComponent_div_1_nz_row_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nz-row");
    i0.ɵɵelementStart(1, "nz-col", 3);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_4_Template, 2, 4, "nz-col", 8);
    i0.ɵɵtemplate(5, PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_5_Template, 2, 4, "nz-col", 8);
    i0.ɵɵtemplate(6, PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_6_Template, 2, 4, "nz-col", 8);
    i0.ɵɵtemplate(7, PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_7_Template, 2, 4, "nz-col", 8);
    i0.ɵɵtemplate(8, PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_8_Template, 2, 6, "nz-col", 9);
    i0.ɵɵtemplate(9, PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_9_Template, 2, 6, "nz-col", 9);
    i0.ɵɵtemplate(10, PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_10_Template, 2, 6, "nz-col", 9);
    i0.ɵɵtemplate(11, PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_11_Template, 2, 6, "nz-col", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r8.zh);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r8.zh == "\u955C\u9762\u5F3A\u5EA6");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r8.zh == "\u6563\u5C04\u5F3A\u5EA6");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r8.zh == "\u663E\u793A\u7CBE\u5EA6");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r8.zh == "\u6750\u8D28\u5E95\u8272");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r8.zh == "\u955C\u9762\u5F3A\u5EA6");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r8.zh == "\u6563\u5C04\u5F3A\u5EA6");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r8.zh == "\u663E\u793A\u7CBE\u5EA6");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r8.zh == "\u6750\u8D28\u5E95\u8272");
} }
function PlanetLayerManagerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, PlanetLayerManagerComponent_div_1_nz_row_1_Template, 12, 9, "nz-row", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.config.tilesSchema);
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
PlanetLayerManagerComponent.ɵfac = function PlanetLayerManagerComponent_Factory(t) { return new (t || PlanetLayerManagerComponent)(i0.ɵɵdirectiveInject(i1.NzContextMenuService)); };
PlanetLayerManagerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PlanetLayerManagerComponent, selectors: [["epsgis-planet-layer-manager"]], inputs: { selectedNode: "selectedNode", type: "type" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 2, consts: [["class", "schema", 4, "ngIf"], [1, "schema"], [4, "ngFor", "ngForOf"], ["nzSpan", "4"], ["nzSpan", "14"], [3, "nzMin", "nzMax", "nzStep", "ngModel", "ngModelChange"], ["nzSpan", "2"], [3, "nzMin", "nzMax", "nzStep", "ngStyle", "ngModel", "ngModelChange"], ["nzSpan", "14", 4, "ngIf"], ["nzSpan", "2", 4, "ngIf"]], template: function PlanetLayerManagerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PlanetLayerManagerComponent_div_0_Template, 2, 1, "div", 0);
        i0.ɵɵtemplate(1, PlanetLayerManagerComponent_div_1_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.type == "\u5F71\u50CF");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.type !== "\u5F71\u50CF");
    } }, directives: [i2.NgIf, i2.NgForOf, i3.NzRowDirective, i3.NzColDirective, i4.NzSliderComponent, i5.NgControlStatus, i5.NgModel, i6.NzInputNumberComponent, i2.NgStyle], styles: ["nz-row[_ngcontent-%COMP%]{font-size:10px}nz-input-number[_ngcontent-%COMP%]{width:70px;height:30px}"] });
PlanetLayerManagerComponent = __decorate([
    ComponentRegister({
        uri: "epsgis-planet-layer-manager",
        path: "epsplanet/components/layer-manager",
        name: "PlanetLayerManagerComponent"
    })
], PlanetLayerManagerComponent);
export { PlanetLayerManagerComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PlanetLayerManagerComponent, [{
        type: Component,
        args: [{
                selector: "epsgis-planet-layer-manager",
                templateUrl: "./layer-manager.component.html",
                styleUrls: ["./layer-manager.component.scss"]
            }]
    }], function () { return [{ type: i1.NzContextMenuService }]; }, { selectedNode: [{
            type: Input
        }], type: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXItbWFuYWdlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9lcHNwbGFuZXQvY29tcG9uZW50cy9sYXllci1tYW5hZ2VyL2xheWVyLW1hbmFnZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZXBzcGxhbmV0L2NvbXBvbmVudHMvbGF5ZXItbWFuYWdlci9sYXllci1tYW5hZ2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQXFCLFNBQVMsRUFBMEIsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUUzQyxPQUFPLEVBQXFCLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7Ozs7Ozs7Ozs7SUNIL0UsOEJBQWtEO0lBQzlDLGlDQUFtQjtJQUNmLDRCQUFNO0lBQUEsWUFBVztJQUFBLGlCQUFPO0lBQzVCLGlCQUFTO0lBQ1QsaUNBQW9CO0lBQ2hCLG9DQUFpRztJQUE5QywrUEFBMEIsUUFBUSwyQkFBVztJQUFDLGlCQUFZO0lBQ2pILGlCQUFTO0lBQ1QsaUNBQW1CO0lBQ2YsMENBQ2tEO0lBQTlDLHFRQUEwQixRQUFRLDJCQUFXO0lBQ2pELGlCQUFrQjtJQUN0QixpQkFBUztJQUNiLGlCQUFTOzs7O0lBVkssZUFBVztJQUFYLGdDQUFXO0lBR04sZUFBVztJQUFYLHlCQUFXLFlBQUEsZ0JBQUEsc0RBQUE7SUFHTCxlQUFXO0lBQVgseUJBQVcsWUFBQSxnQkFBQSx3Q0FBQSxzREFBQTs7O0lBVHRDLDhCQUF1QztJQUNyQyx5RkFZUztJQUNYLGlCQUFNOzs7SUFicUIsZUFBdUI7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QUMxQyxJQUFJLEVBQUUsNkJBQTZCO0tBQ3BDLENBQUM7R0FNVywyQkFBMkIsQ0FnTHZDO1NBaExZLDJCQUEyQjt1RkFBM0IsMkJBQTJCO2NBTHZDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsNkJBQTZCO2dCQUN2QyxXQUFXLEVBQUUsZ0NBQWdDO2dCQUM3QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQzthQUM5Qzt1RUFHVSxZQUFZO2tCQUFwQixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgU2ltcGxlQ2hhbmdlcyAsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudFJlZ2lzdGVyIH0gZnJvbSAnZXBzZ2lzJztcbmltcG9ydCB7IE56Q29udGV4dE1lbnVTZXJ2aWNlLCBOekRyb3Bkb3duTWVudUNvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvZHJvcGRvd24nO1xuaW1wb3J0IHsgTnpGb3JtYXRFbWl0RXZlbnQsIE56VHJlZU5vZGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3RyZWUnO1xuaW1wb3J0IHsgU2NlbmVUcmVlVXRpbHMgfSBmcm9tICcuLi8uLi91dGlscy9zY2VuZVRyZWUtdXRpbHMnO1xuaW1wb3J0IHsgQmFzZVBsYW5ldFdpZGdldENvbXBvbmVudCB9IGZyb20gJy4uL2Jhc2Utd2lkZ2V0L2Jhc2Utd2lkZ2V0LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnRSZWdpc3Rlcih7XG4gIHVyaTogXCJlcHNnaXMtcGxhbmV0LWxheWVyLW1hbmFnZXJcIixcbiAgcGF0aDogXCJlcHNwbGFuZXQvY29tcG9uZW50cy9sYXllci1tYW5hZ2VyXCIsXG4gIG5hbWU6IFwiUGxhbmV0TGF5ZXJNYW5hZ2VyQ29tcG9uZW50XCJcbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiZXBzZ2lzLXBsYW5ldC1sYXllci1tYW5hZ2VyXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vbGF5ZXItbWFuYWdlci5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vbGF5ZXItbWFuYWdlci5jb21wb25lbnQuc2Nzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBQbGFuZXRMYXllck1hbmFnZXJDb21wb25lbnQgZXh0ZW5kcyBCYXNlUGxhbmV0V2lkZ2V0Q29tcG9uZW50IHtcbiAgLy8gQElucHV0KCkgY29uZmlnO1xuICBASW5wdXQoKSBzZWxlY3RlZE5vZGU7XG4gIEBJbnB1dCgpIHR5cGU7XG4gIGNvbmZpZz17XG4gICAgXCJiYXNlbWFwU2NoZW1hXCI6W1xuICAgICAgICB7XCJlblwiOlwiYWxwaGFcIixcInpoXCI6XCLpgI/mmI7luqZcIn0sXG4gICAgICAgIHtcImVuXCI6XCJicmlnaHRuZXNzXCIsXCJ6aFwiOlwi5Lqu5bqmXCJ9LFxuICAgICAgICB7XCJlblwiOlwic2F0dXJhdGlvblwiLFwiemhcIjpcIumlseWSjOW6plwifSxcbiAgICAgICAge1wiZW5cIjpcImNvbnRyYXN0XCIsXCJ6aFwiOlwi5a+55q+U5bqmXCJ9LFxuICAgICAgICB7XCJlblwiOlwiaHVlXCIsXCJ6aFwiOlwi6Imy55u4XCJ9LFxuICAgICAgICB7XCJlblwiOlwiZ2FtbWFcIixcInpoXCI6XCLkvL3pqaxcIn1cbiAgICBdLFxuICAgIFwidGlsZXNTY2hlbWFcIjpbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiZW5cIjpcIm1heGltdW1TY3JlZW5TcGFjZUVycm9yXCIsXG4gICAgICAgICAgICBcInpoXCI6XCLmmL7npLrnsr7luqZcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcImVuXCI6XCJpbWFnZUJhc2VkTGlnaHRpbmdGYWN0b3JcIixcbiAgICAgICAgICAgIFwiemhcIjpcIuaVo+WwhOW8uuW6plwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiZW5cIjpcImx1bWluYW5jZUF0WmVuaXRoXCIsXG4gICAgICAgICAgICBcInpoXCI6XCLmnZDotKjlupXoibJcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcImVuXCI6XCJpbWFnZUJhc2VkTGlnaHRpbmdGYWN0b3JcIixcbiAgICAgICAgICAgIFwiemhcIjpcIumVnOmdouW8uuW6plwiXG4gICAgICAgIH1cbiAgICBdXG59XG4gIHZhbHVlMTogMDtcbiAgYWN0aXZhdGVkTm9kZT86IE56VHJlZU5vZGU7XG4gIG9wZW5Gb2xkZXIoZGF0YTogTnpUcmVlTm9kZSB8IE56Rm9ybWF0RW1pdEV2ZW50KTogdm9pZCB7XG4gICAgLy8gZG8gc29tZXRoaW5nIGlmIHUgd2FudFxuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBOelRyZWVOb2RlKSB7XG4gICAgICBkYXRhLmlzRXhwYW5kZWQgPSAhZGF0YS5pc0V4cGFuZGVkO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBub2RlID0gZGF0YS5ub2RlO1xuICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgbm9kZS5pc0V4cGFuZGVkID0gIW5vZGUuaXNFeHBhbmRlZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhY3RpdmVOb2RlKGRhdGE6IE56Rm9ybWF0RW1pdEV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmF0ZWROb2RlID0gZGF0YS5ub2RlITtcbiAgfVxuXG4gIGNvbnRleHRNZW51KCRldmVudDogTW91c2VFdmVudCwgbWVudTogTnpEcm9wZG93bk1lbnVDb21wb25lbnQpOiB2b2lkIHtcbiAgICB0aGlzLm56Q29udGV4dE1lbnVTZXJ2aWNlLmNyZWF0ZSgkZXZlbnQsIG1lbnUpO1xuICB9XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbnpDb250ZXh0TWVudVNlcnZpY2U6IE56Q29udGV4dE1lbnVTZXJ2aWNlKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuICBzZWxlY3REcm9wZG93bigpOiB2b2lkIHtcbiAgICAvLyBkbyBzb21ldGhpbmdcbiAgfVxuXG4gIGxheWVyTm9kZXM6IGFueSA9IFtdO1xuXG4gIHN0YXRpYyBnZXRDb21wSW5mbygpIHtcbiAgICByZXR1cm4geyBuYW1lOiBcIlBsYW5ldExheWVyTWFuYWdlckNvbXBvbmVudFwiLCBwYXRoOiBcImVwc3BsYW5ldC9jb21wb25lbnRzL2xheWVyLW1hbmFnZXJcIiB9O1xuICB9XG4gIG5nT25Jbml0KCkge1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gICAgLy8gdGhpcy5zZWxlY3RlZE5vZGU9d2luZG93W1wic2VsZWN0ZWROb2RlXCJdXG4gICAgLy8gdGhpcy50eXBlPXRoaXMuc2VsZWN0ZWROb2RlW1wib3JpZ2luXCJdLmhhc093blByb3BlcnR5KCdsdW1pbmFuY2VBdFplbml0aCcpP1wi55Om54mHXCI6XCLlvbHlg49cIjtcbiAgICAvLyBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgLy8gICB0aGlzLnNlbGVjdGVkTm9kZT13aW5kb3dbXCJzZWxlY3RlZE5vZGVcIl1cbiAgICAvLyAgIHRoaXMudHlwZT10aGlzLnNlbGVjdGVkTm9kZVtcIm9yaWdpblwiXS5oYXNPd25Qcm9wZXJ0eSgnbHVtaW5hbmNlQXRaZW5pdGgnKT9cIueTpueJh1wiOlwi5b2x5YOPXCI7XG4gICAgLy8gfSwgMTAwKTtcblxuICB9XG4gIGxvYWRsb2NhdGUoKSB7XG4gICAgdmFyIGlzc2hvdywgX2xheWVycywgbGF5ZXIsIGZvcm1hdCwgc3R5bGUsIHRpbGVNYXRyaXhTZXQ7XG4gICAgdmFyIHdtdHMgPSBuZXcgWEUuVG9vbC5XTVRTUGFyc2VyKCk7XG4gICAgLy8gY29uc29sZS5sb2cod210cylcbiAgICBsZXQgdXJsID0gXCJodHRwOi8vam9qbzE5ODYuZjMzMjIubmV0Ojg4ODgvZ2Vvc2VydmVyL2d3Yy9zZXJ2aWNlL3dtdHM/UkVRVUVTVD1HZXRDYXBhYmlsaXRpZXNcIjtcbiAgICAvLyB1cmwgPSB3bXRzLmFkZFVybFBhcmFtKHVybCk7XG4gICAgd210c1xuICAgICAgLnBhcnNlcih1cmwpXG4gICAgICAudGhlbihsYXllcnMgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhsYXllcnMpXG4gICAgICAgIGlzc2hvdyA9IGZhbHNlO1xuICAgICAgICBfbGF5ZXJzID0gbGF5ZXJzO1xuICAgICAgICBpZiAobGF5ZXJzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICBcInNlcnZlciBoYXMgbm8gc3VwcHJvdGVkIGxheWVyc1wiLFxuICAgICAgICAgICAgXCJ3YXJuaW5nXCJcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8v6buY6K6k6YCJ5oup56ys5LiA5LiqTGF5ZXJcbiAgICAgICAgICBsYXllciA9IGxheWVyc1swXTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhsYXllci5yZWN0YW5nbGUpXG4gICAgICAgICAgZm9ybWF0ID0gbGF5ZXIudXJsc1swXS5mb3JtYXQ7XG4gICAgICAgICAgc3R5bGUgPSBsYXllci5zdHlsZXNbMF0uaWQ7XG4gICAgICAgICAgdGlsZU1hdHJpeFNldCA9IGxheWVyLnRpbGVNYXRyaXhTZXRzWzBdO1xuICAgICAgICAgIHRoaXMudmlldy5zY2VuZVRyZWUucm9vdC5jaGlsZHJlbi5wdXNoKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImN6bU9iamVjdFwiOiB7XG4gICAgICAgICAgICAgICAgXCJ4YnNqVHlwZVwiOiBcIkltYWdlcnlcIixcbiAgICAgICAgICAgICAgICAvLyBcInhic2pHdWlkXCI6IFwiMDJjYjNlN2UtOWFiNS00YWEwLTg2NjQtYTI4ZTJhZDk0YWJkXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IGxheWVyLnRpdGxlLFxuICAgICAgICAgICAgICAgIC8vIFwicmVjdGFuZ2xlXCI6IGxheWVyLnJlY3RhbmdsZSxcbiAgICAgICAgICAgICAgICBcInhic2pJbWFnZXJ5UHJvdmlkZXJcIjoge1xuICAgICAgICAgICAgICAgICAgXCJYYnNqSW1hZ2VyeVByb3ZpZGVyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJVcmxUZW1wbGF0ZUltYWdlcnlQcm92aWRlclwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwiV2ViTWFwVGlsZVNlcnZpY2VJbWFnZXJ5UHJvdmlkZXJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInVybFwiOiBsYXllci51cmxzWzBdLnRlbXBsYXRlLFxuICAgICAgICAgICAgICAgICAgICBcImZvcm1hdFwiOiBmb3JtYXQsXG4gICAgICAgICAgICAgICAgICAgIFwibGF5ZXJcIjogbGF5ZXIudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogc3R5bGUsXG4gICAgICAgICAgICAgICAgICAgIFwidGlsZU1hdHJpeFNldElEXCI6IHRpbGVNYXRyaXhTZXQudGlsZU1hdHJpeFNldElELFxuICAgICAgICAgICAgICAgICAgICBcInRpbGVNYXRyaXhMYWJlbHNcIjogdGlsZU1hdHJpeFNldC5wYXJhbXMudGlsZU1hdHJpeExhYmVscyxcbiAgICAgICAgICAgICAgICAgICAgXCJ0aWxpbmdTY2hlbWVcIjogdGlsZU1hdHJpeFNldC5wYXJhbXMudGlsaW5nU2NoZW1lLFxuICAgICAgICAgICAgICAgICAgICBcIm1heGltdW1MZXZlbFwiOiB0aWxlTWF0cml4U2V0Lm1heGltdW1MZXZlbFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiY3JlYXRlVGlsZU1hcFNlcnZpY2VJbWFnZXJ5UHJvdmlkZXJcIjoge30sXG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJXZWJNYXBUaWxlU2VydmljZUltYWdlcnlQcm92aWRlclwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKVxuICAgICAgICAgIHZhciB2aWV3ZXIgPSB3aW5kb3dbJ2VhcnRoJ10uY3ptLnZpZXdlcjtcbiAgICAgICAgICB2aWV3ZXIuY2FtZXJhLmZseVRvKHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uOiBDZXNpdW0uUmVjdGFuZ2xlLmZyb21EZWdyZWVzKC4uLmxheWVyLnJlY3RhbmdsZSlcbiAgICAgICAgICB9KVxuICAgICAgICAgIC8vIHRoaXMudmlldy5jYW1lcmEuZmx5VG8oe1xuICAgICAgICAgIC8vICAgZGVzdGluYXRpb246Q2VzaXVtLlJlY3RhbmdsZS5mcm9tRGVncmVlcygyLjA5NTQ0NDcyOTEyODI5NCwgMC41ODI5NTI1MDQ3MDMyNDUxLCAyLjA5NzQ0NDczMDgwMTU0MSwgMC41ODQzNzU4NTA2NzAyODg5KVxuICAgICAgICAgIC8vIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgaXNzaG93ID0gZmFsc2U7XG4gICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgIFwiR2V0Q2FwYWJpbGl0aWVzIGZhaWxlZDpcIiArIGVyci5tZXNzYWdlLFxuICAgICAgICAgIFwiZXJyb3JcIlxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgLy8gY29uc29sZS5sb2codXJsLCBsYXllcilcbiAgfVxuICB0ZXN0KCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2codGhpcy5zZWxlY3RlZE5vZGUpXG4gICAgfSwgMTAwKTtcbiAgfVxuICBvbkRibENsaWNrTm9kZSgkZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZygkZXZlbnQubm9kZS5vcmlnaW4ub3JpZ2luKVxuICB9XG4gIC8qKlxuICAqIOmAieS4reeKtuaAgeaUueWPmFxuICAqL1xuICBvbkNoZWNrZWRDaGFuZ2UoZXZ0OiBOekZvcm1hdEVtaXRFdmVudCk6IHZvaWQge1xuICAgIGlmIChldnQuZXZlbnROYW1lICE9PSBcImNoZWNrXCIgfHwgIWV2dC5ub2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChldnQubm9kZS5pc0NoZWNrZWQpIHtcbiAgICAgIC8v5Yqg6L295Zu+5bGCXG4gICAgICBTY2VuZVRyZWVVdGlscy5HZXRYYnNqQ3ptT2JqZWN0KGV2dC5ub2RlKS5zaG93ID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy/np7vpmaTlm77lsYJcbiAgICAgIFNjZW5lVHJlZVV0aWxzLkdldFhic2pDem1PYmplY3QoZXZ0Lm5vZGUpLnNob3cgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgb25SaWdodENsaWNrKCRldmVudCkge1xuXG4gIH1cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHN1cGVyLm5nQWZ0ZXJWaWV3SW5pdCgpO1xuICB9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XG4gIH1cbn0iLCI8IS0tIDxoMz57e3NlbGVjdGVkTm9kZS50aXRsZX19PC9oMz4gLS0+XHJcbjxkaXYgY2xhc3M9XCJzY2hlbWFcIiAqbmdJZj1cInR5cGU9PSflvbHlg48nXCI+XHJcbiAgPG56LXJvdyAqbmdGb3I9XCJsZXQgaXRlbSBvZiBjb25maWcuYmFzZW1hcFNjaGVtYVwiPlxyXG4gICAgICA8bnotY29sIG56U3Bhbj1cIjRcIj5cclxuICAgICAgICAgIDxzcGFuPnt7aXRlbS56aH19PC9zcGFuPlxyXG4gICAgICA8L256LWNvbD5cclxuICAgICAgPG56LWNvbCBuelNwYW49XCIxNFwiPlxyXG4gICAgICAgICAgPG56LXNsaWRlciBbbnpNaW5dPVwiMFwiIFtuek1heF09XCIxXCIgW256U3RlcF09XCIwLjAxXCIgWyhuZ01vZGVsKV09XCJzZWxlY3RlZE5vZGVbJ29yaWdpbiddW2l0ZW0uZW5dXCI+PC9uei1zbGlkZXI+XHJcbiAgICAgIDwvbnotY29sPlxyXG4gICAgICA8bnotY29sIG56U3Bhbj1cIjJcIj5cclxuICAgICAgICAgIDxuei1pbnB1dC1udW1iZXIgW256TWluXT1cIjBcIiBbbnpNYXhdPVwiMVwiIFtuelN0ZXBdPVwiMC4wMVwiIFtuZ1N0eWxlXT1cInsgbWFyZ2luTGVmdDogJzE2cHgnIH1cIlxyXG4gICAgICAgICAgICAgIFsobmdNb2RlbCldPVwic2VsZWN0ZWROb2RlWydvcmlnaW4nXVtpdGVtLmVuXVwiPlxyXG4gICAgICAgICAgPC9uei1pbnB1dC1udW1iZXI+XHJcbiAgICAgIDwvbnotY29sPlxyXG4gIDwvbnotcm93PlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cInNjaGVtYVwiICpuZ0lmPVwidHlwZSE9PSflvbHlg48nXCI+XHJcbiAgPG56LXJvdyAqbmdGb3I9XCJsZXQgaXRlbSBvZiBjb25maWcudGlsZXNTY2hlbWFcIj5cclxuICAgICAgPG56LWNvbCBuelNwYW49XCI0XCI+XHJcbiAgICAgICAgICA8c3Bhbj57e2l0ZW0uemh9fTwvc3Bhbj5cclxuICAgICAgPC9uei1jb2w+XHJcbiAgICAgIDxuei1jb2wgbnpTcGFuPVwiMTRcIiAqbmdJZj1cIml0ZW0uemg9PSfplZzpnaLlvLrluqYnXCI+XHJcbiAgICAgICAgICA8bnotc2xpZGVyIFtuek1pbl09XCIwXCIgW256TWF4XT1cIjFcIiBbbnpTdGVwXT1cIjAuMDFcIiBbKG5nTW9kZWwpXT1cInNlbGVjdGVkTm9kZVsnb3JpZ2luJ11baXRlbS5lbl1bMV1cIj48L256LXNsaWRlcj5cclxuICAgICAgPC9uei1jb2w+XHJcbiAgICAgIDxuei1jb2wgbnpTcGFuPVwiMTRcIiAqbmdJZj1cIml0ZW0uemg9PSfmlaPlsITlvLrluqYnXCI+XHJcbiAgICAgICAgICA8bnotc2xpZGVyIFtuek1pbl09XCIwXCIgW256TWF4XT1cIjFcIiBbbnpTdGVwXT1cIjAuMDFcIiBbKG5nTW9kZWwpXT1cInNlbGVjdGVkTm9kZVsnb3JpZ2luJ11baXRlbS5lbl1bMF1cIj48L256LXNsaWRlcj5cclxuICAgICAgPC9uei1jb2w+XHJcbiAgICAgIDxuei1jb2wgbnpTcGFuPVwiMTRcIiAqbmdJZj1cIml0ZW0uemg9PSfmmL7npLrnsr7luqYnXCI+XHJcbiAgICAgICAgICA8bnotc2xpZGVyIFtuek1pbl09XCIwXCIgW256TWF4XT1cIjI1NlwiIFtuelN0ZXBdPVwiMVwiIFsobmdNb2RlbCldPVwic2VsZWN0ZWROb2RlWydvcmlnaW4nXVtpdGVtLmVuXVwiPjwvbnotc2xpZGVyPlxyXG4gICAgICA8L256LWNvbD5cclxuICAgICAgPG56LWNvbCBuelNwYW49XCIxNFwiICpuZ0lmPVwiaXRlbS56aD09J+adkOi0qOW6leiJsidcIj5cclxuICAgICAgICAgIDxuei1zbGlkZXIgW256TWluXT1cIjBcIiBbbnpNYXhdPVwiNVwiIFtuelN0ZXBdPVwiMC4wMVwiIFsobmdNb2RlbCldPVwic2VsZWN0ZWROb2RlWydvcmlnaW4nXVtpdGVtLmVuXVwiPjwvbnotc2xpZGVyPlxyXG4gICAgICA8L256LWNvbD5cclxuXHJcbiAgICAgIDxuei1jb2wgbnpTcGFuPVwiMlwiICpuZ0lmPVwiaXRlbS56aD09J+mVnOmdouW8uuW6pidcIj5cclxuICAgICAgICAgIDxuei1pbnB1dC1udW1iZXIgW256TWluXT1cIjBcIiBbbnpNYXhdPVwiMVwiIFtuelN0ZXBdPVwiMC4wMVwiIFtuZ1N0eWxlXT1cInsgbWFyZ2luTGVmdDogJzE2cHgnIH1cIlxyXG4gICAgICAgICAgICAgIFsobmdNb2RlbCldPVwic2VsZWN0ZWROb2RlWydvcmlnaW4nXVtpdGVtLmVuXVsxXVwiPlxyXG4gICAgICAgICAgPC9uei1pbnB1dC1udW1iZXI+XHJcbiAgICAgIDwvbnotY29sPlxyXG4gICAgICA8bnotY29sIG56U3Bhbj1cIjJcIiAqbmdJZj1cIml0ZW0uemg9PSfmlaPlsITlvLrluqYnXCI+XHJcbiAgICAgICAgICA8bnotaW5wdXQtbnVtYmVyIFtuek1pbl09XCIwXCIgW256TWF4XT1cIjFcIiBbbnpTdGVwXT1cIjAuMDFcIiBbbmdTdHlsZV09XCJ7IG1hcmdpbkxlZnQ6ICcxNnB4JyB9XCJcclxuICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInNlbGVjdGVkTm9kZVsnb3JpZ2luJ11baXRlbS5lbl1bMF1cIj5cclxuICAgICAgICAgIDwvbnotaW5wdXQtbnVtYmVyPlxyXG4gICAgICA8L256LWNvbD5cclxuICAgICAgPG56LWNvbCBuelNwYW49XCIyXCIgKm5nSWY9XCJpdGVtLnpoPT0n5pi+56S657K+5bqmJ1wiPlxyXG4gICAgICAgICAgPG56LWlucHV0LW51bWJlciBbbnpNaW5dPVwiMFwiIFtuek1heF09XCIyNTZcIiBbbnpTdGVwXT1cIjFcIiBbbmdTdHlsZV09XCJ7IG1hcmdpbkxlZnQ6ICcxNnB4JyB9XCJcclxuICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInNlbGVjdGVkTm9kZVsnb3JpZ2luJ11baXRlbS5lbl1cIj5cclxuICAgICAgICAgIDwvbnotaW5wdXQtbnVtYmVyPlxyXG4gICAgICA8L256LWNvbD5cclxuICAgICAgPG56LWNvbCBuelNwYW49XCIyXCIgKm5nSWY9XCJpdGVtLnpoPT0n5p2Q6LSo5bqV6ImyJ1wiPlxyXG4gICAgICAgICAgPG56LWlucHV0LW51bWJlciBbbnpNaW5dPVwiMFwiIFtuek1heF09XCI1XCIgW256U3RlcF09XCIwLjAxXCIgW25nU3R5bGVdPVwieyBtYXJnaW5MZWZ0OiAnMTZweCcgfVwiXHJcbiAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJzZWxlY3RlZE5vZGVbJ29yaWdpbiddW2l0ZW0uZW5dXCI+XHJcbiAgICAgICAgICA8L256LWlucHV0LW51bWJlcj5cclxuICAgICAgPC9uei1jb2w+XHJcbiAgPC9uei1yb3c+XHJcbjwvZGl2PlxyXG48IS0tIDxidXR0b24gbnotYnV0dG9uIChjbGljayk9XCJ0ZXN0KClcIj50ZXN0PC9idXR0b24+XHJcbjxidXR0b24gbnotYnV0dG9uIG56LXBvcG92ZXIgbnpQb3BvdmVyVGl0bGU9XCJUaXRsZVwiIFtuelBvcG92ZXJDb250ZW50XT1cImNvbnRlbnRUZW1wbGF0ZVwiIG56UG9wb3ZlclRyaWdnZXI9XCJjbGlja1wiIChjbGljayk9XCJsb2FkbG9jYXRlKClcIj7liqDovb0m5a6a5L2NPC9idXR0b24+XHJcbjxuZy10ZW1wbGF0ZSAjY29udGVudFRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8cD5Db250ZW50PC9wPlxyXG4gICAgPHA+Q29udGVudDwvcD5cclxuICA8L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT4gLS0+Il19