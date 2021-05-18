import { __decorate } from "tslib";
import { Component } from "@angular/core";
import { ComponentRegister } from 'epsgis';
import { SceneTreeUtils } from '../../utils/sceneTree-utils';
import { BasePlanetWidgetComponent } from '../base-widget/base-widget.component';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/dropdown";
import * as i2 from "ng-zorro-antd/tabs";
import * as i3 from "@angular/common";
import * as i4 from "ng-zorro-antd/divider";
import * as i5 from "ng-zorro-antd/tree";
function PlanetBasemapGalleryComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 5);
    i0.ɵɵlistener("click", function PlanetBasemapGalleryComponent_li_3_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r6); const item_r4 = ctx.$implicit; const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.selectImage(item_r4); });
    i0.ɵɵelementStart(1, "div", 6);
    i0.ɵɵelement(2, "img", 7);
    i0.ɵɵelement(3, "br");
    i0.ɵɵelementStart(4, "span", 8);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", item_r4.imgUrl, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("title", item_r4.title);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r4.title);
} }
function PlanetBasemapGalleryComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 5);
    i0.ɵɵlistener("click", function PlanetBasemapGalleryComponent_li_7_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r9); const item_r7 = ctx.$implicit; const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.selectTerrain(item_r7); });
    i0.ɵɵelementStart(1, "div", 6);
    i0.ɵɵelement(2, "img", 7);
    i0.ɵɵelement(3, "br");
    i0.ɵɵelementStart(4, "span", 8);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", item_r7.imgUrl, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("title", item_r7.czmObject.name);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r7.czmObject.name);
} }
function PlanetBasemapGalleryComponent_ng_template_10_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelementStart(1, "span", 11);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r10 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(node_r10.title);
} }
function PlanetBasemapGalleryComponent_ng_template_10_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelementStart(1, "span", 11);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r10 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(node_r10.title);
} }
function PlanetBasemapGalleryComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 9);
    i0.ɵɵtemplate(1, PlanetBasemapGalleryComponent_ng_template_10_span_1_Template, 3, 1, "span", 10);
    i0.ɵɵtemplate(2, PlanetBasemapGalleryComponent_ng_template_10_span_2_Template, 3, 1, "span", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r10 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !node_r10.isLeaf);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", node_r10.isLeaf);
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
        let node = SceneTreeUtils.loadLayerNode(item);
        node.czmObject.show = true;
        const earth = this.view;
        earth.sceneTree.$refs.basemap.children[0] = node;
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
PlanetBasemapGalleryComponent.ɵfac = function PlanetBasemapGalleryComponent_Factory(t) { return new (t || PlanetBasemapGalleryComponent)(i0.ɵɵdirectiveInject(i1.NzContextMenuService)); };
PlanetBasemapGalleryComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PlanetBasemapGalleryComponent, selectors: [["epsgis-planet-basemap-gallery"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 12, vars: 4, consts: [["nzTitle", "\u5F71\u50CF"], [3, "click", 4, "ngFor", "ngForOf"], ["nzTitle", "\u5730\u5F62"], ["nzBlockNode", "", "nzCheckable", "", 3, "nzData", "nzTreeTemplate", "nzClick", "nzCheckBoxChange"], ["nzTreeTemplate", ""], [3, "click"], [1, "backimg"], [3, "src"], [2, "width", "100%", "white-space", "nowrap", "text-overflow", "ellipsis", "overflow", "hidden", "text-align", "left", 3, "title"], [1, "custom-node"], [4, "ngIf"], [1, "folder-name"]], template: function PlanetBasemapGalleryComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "nz-tabset");
        i0.ɵɵelementStart(1, "nz-tab", 0);
        i0.ɵɵelementStart(2, "ul");
        i0.ɵɵtemplate(3, PlanetBasemapGalleryComponent_li_3_Template, 6, 3, "li", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "nz-tabset");
        i0.ɵɵelementStart(5, "nz-tab", 2);
        i0.ɵɵelementStart(6, "ul");
        i0.ɵɵtemplate(7, PlanetBasemapGalleryComponent_li_7_Template, 6, 3, "li", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(8, "nz-divider");
        i0.ɵɵelementStart(9, "nz-tree", 3);
        i0.ɵɵlistener("nzClick", function PlanetBasemapGalleryComponent_Template_nz_tree_nzClick_9_listener($event) { return ctx.activeNode($event); })("nzCheckBoxChange", function PlanetBasemapGalleryComponent_Template_nz_tree_nzCheckBoxChange_9_listener($event) { return ctx.onCheckedChange($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(10, PlanetBasemapGalleryComponent_ng_template_10_Template, 3, 2, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r2 = i0.ɵɵreference(11);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.config.basemaps);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngForOf", ctx.config.terrain);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("nzData", ctx.layerNodes)("nzTreeTemplate", _r2);
    } }, directives: [i2.NzTabSetComponent, i2.NzTabComponent, i3.NgForOf, i4.NzDividerComponent, i5.NzTreeComponent, i3.NgIf], styles: ["*[_ngcontent-%COMP%]{margin:0;padding:0}img[_ngcontent-%COMP%]{width:70px;height:70px}li[_ngcontent-%COMP%]{float:left;list-style:none;height:100px;cursor:pointer}.backimg[_ngcontent-%COMP%]{width:70px;height:70px;border:1px solid;border-radius:3px;background:grey;margin:3px}.backimg[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;width:70px;text-align:center}.ipt[_ngcontent-%COMP%], .ipt1[_ngcontent-%COMP%], .ipt2[_ngcontent-%COMP%]{margin-bottom:5px}.ant-input[_ngcontent-%COMP%]{width:70%}nz-select[_ngcontent-%COMP%]{width:50%}.footer[_ngcontent-%COMP%]{margin-top:5px;float:right}.footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:50px}.schema[_ngcontent-%COMP%]{position:absolute;top:5px;left:5px}  .ant-tabs-tab{padding:0}"] });
PlanetBasemapGalleryComponent = __decorate([
    ComponentRegister({
        uri: "epsgis-planet-basemap-gallery",
        path: "epsplanet/components/basemap-gallery",
        name: "PlanetBasemapGalleryComponent"
    })
], PlanetBasemapGalleryComponent);
export { PlanetBasemapGalleryComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PlanetBasemapGalleryComponent, [{
        type: Component,
        args: [{
                selector: "epsgis-planet-basemap-gallery",
                templateUrl: "./basemap-gallery.component.html",
                styleUrls: ["./basemap-gallery.component.scss"]
            }]
    }], function () { return [{ type: i1.NzContextMenuService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZW1hcC1nYWxsZXJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Vwc3BsYW5ldC9jb21wb25lbnRzL2Jhc2VtYXAtZ2FsbGVyeS9iYXNlbWFwLWdhbGxlcnkuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZXBzcGxhbmV0L2NvbXBvbmVudHMvYmFzZW1hcC1nYWxsZXJ5L2Jhc2VtYXAtZ2FsbGVyeS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFHM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzdELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7Ozs7Ozs7SUNGckUsNkJBQTBFO0lBQTVCLG1PQUEyQjtJQUNyRSw4QkFBcUI7SUFDakIseUJBQXlCO0lBQUEscUJBQUk7SUFDN0IsK0JBQ21HO0lBQUEsWUFBYztJQUFBLGlCQUFPO0lBQzVILGlCQUFNO0lBQ1YsaUJBQUs7OztJQUpRLGVBQW1CO0lBQW5CLHNEQUFtQjtJQUNsQixlQUFvQjtJQUFwQixxQ0FBb0I7SUFDeUUsZUFBYztJQUFkLG1DQUFjOzs7O0lBK0J6SCw2QkFBMkU7SUFBOUIscU9BQTZCO0lBQ3RFLDhCQUFxQjtJQUNqQix5QkFBeUI7SUFBQSxxQkFBSTtJQUM3QiwrQkFDbUc7SUFBQSxZQUF1QjtJQUFBLGlCQUFPO0lBQ3JJLGlCQUFNO0lBQ1YsaUJBQUs7OztJQUpRLGVBQW1CO0lBQW5CLHNEQUFtQjtJQUNsQixlQUE2QjtJQUE3Qiw4Q0FBNkI7SUFDZ0UsZUFBdUI7SUFBdkIsNENBQXVCOzs7SUFnQjFJLDRCQUEyQjtJQUV6QixnQ0FBMEI7SUFBQSxZQUFn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LElBQUMsMEhBQ1YsMkJBQXVCLElBRGI7UUFFSSxpQkFBVTtRQUM5QyxpSUFXYzs7O1FBaEVtQixlQUF1QjtRQUF2Qiw2Q0FBdUI7UUFtQ3ZCLGVBQXNCO1FBQXRCLDRDQUFzQjtRQWNyRCxlQUFxQjtRQUFyQix1Q0FBcUIsdUJBQUE7O0FEbkNWLDZCQUE2QjtJQVZ6QyxpQkFBaUIsQ0FBQztRQUNqQixHQUFHLEVBQUUsK0JBQStCO1FBQ3BDLElBQUksRUFBRSxzQ0FBc0M7UUFDNUMsSUFBSSxFQUFFLCtCQUErQjtLQUN0QyxDQUFDO0dBTVcsNkJBQTZCLENBcUZ6QztTQXJGWSw2QkFBNkI7dUZBQTdCLDZCQUE2QjtjQUx6QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsV0FBVyxFQUFFLGtDQUFrQztnQkFDL0MsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7YUFDaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tcG9uZW50UmVnaXN0ZXIgfSBmcm9tICdlcHNnaXMnO1xuaW1wb3J0IHsgTnpDb250ZXh0TWVudVNlcnZpY2UsIE56RHJvcGRvd25NZW51Q29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9kcm9wZG93bic7XG5pbXBvcnQgeyBOekZvcm1hdEVtaXRFdmVudCwgTnpUcmVlTm9kZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdHJlZSc7XG5pbXBvcnQgeyBTY2VuZVRyZWVVdGlscyB9IGZyb20gJy4uLy4uL3V0aWxzL3NjZW5lVHJlZS11dGlscyc7XG5pbXBvcnQgeyBCYXNlUGxhbmV0V2lkZ2V0Q29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZS13aWRnZXQvYmFzZS13aWRnZXQuY29tcG9uZW50JztcblxuQENvbXBvbmVudFJlZ2lzdGVyKHtcbiAgdXJpOiBcImVwc2dpcy1wbGFuZXQtYmFzZW1hcC1nYWxsZXJ5XCIsXG4gIHBhdGg6IFwiZXBzcGxhbmV0L2NvbXBvbmVudHMvYmFzZW1hcC1nYWxsZXJ5XCIsXG4gIG5hbWU6IFwiUGxhbmV0QmFzZW1hcEdhbGxlcnlDb21wb25lbnRcIlxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJlcHNnaXMtcGxhbmV0LWJhc2VtYXAtZ2FsbGVyeVwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2Jhc2VtYXAtZ2FsbGVyeS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vYmFzZW1hcC1nYWxsZXJ5LmNvbXBvbmVudC5zY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIFBsYW5ldEJhc2VtYXBHYWxsZXJ5Q29tcG9uZW50IGV4dGVuZHMgQmFzZVBsYW5ldFdpZGdldENvbXBvbmVudCB7XG4gIGFjdGl2YXRlZE5vZGU/OiBOelRyZWVOb2RlO1xuICBsYXllck5vZGVzOiBhbnkgPSBbXTtcbiAgYmFzZW1hcDogYW55O1xuICB0ZXJyYWluRGF0YSA9IFt7XG4gICAgXCJjem1PYmplY3RcIjoge1xuICAgICAgXCJpbWdcIjogXCJodHRwczovL2xhYjIuY2VzaXVtbGFiLmNvbS91cGxvYWQvM2ZkMWFjNjAtMjY4My00YWU4LWE1ZGEtYzAyNTBlZGM4MzZiLzIwMTlfMDhfMDJfMTlfNDVfMzguanBnXCIsXG4gICAgICBcInhic2pUeXBlXCI6IFwiVGVycmFpblwiLFxuICAgICAgXCJ4YnNqR3VpZFwiOiBcIjBiMzRlYmQ0LTVhNWItNGYxZC1iMmU4LWE0MTc5NzE5M2FhOFwiLFxuICAgICAgXCJuYW1lXCI6IFwi5Lit5Zu9MTTnuqfvvIjmtYvor5XvvIlcIixcbiAgICAgIFwieGJzalRlcnJhaW5Qcm92aWRlclwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIlhic2pDZXNpdW1UZXJyYWluUHJvdmlkZXJcIixcbiAgICAgICAgXCJYYnNqRWxsaXBzb2lkVGVycmFpblByb3ZpZGVyXCI6IHt9LFxuICAgICAgICBcIlhic2pDZXNpdW1UZXJyYWluUHJvdmlkZXJcIjoge1xuICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9sYWIuZWFydGhzZGsuY29tL3RlcnJhaW4vNTc3ZmQ1YjBhYzFmMTFlOTlkYmQ4ZmQwNDQ4ODM2MzhcIixcbiAgICAgICAgICBcInJlcXVlc3RWZXJ0ZXhOb3JtYWxzXCI6IHRydWUsXG4gICAgICAgICAgXCJyZXF1ZXN0V2F0ZXJNYXNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJHb29nbGVFYXJ0aEVudGVycHJpc2VUZXJyYWluUHJvdmlkZXJcIjoge31cbiAgICAgIH1cbiAgICB9XG4gIH1dO1xuICB0ZXJyYWluSWNvbiA9IFwiaHR0cHM6Ly9sYWIyLmNlc2l1bWxhYi5jb20vdXBsb2FkLzNmZDFhYzYwLTI2ODMtNGFlOC1hNWRhLWMwMjUwZWRjODM2Yi8yMDE5XzA4XzAyXzE5XzQ1XzM4LmpwZ1wiO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG56Q29udGV4dE1lbnVTZXJ2aWNlOiBOekNvbnRleHRNZW51U2VydmljZSkge1xuICAgIHN1cGVyKCk7XG4gIH1cbiAgYWN0aXZlTm9kZShkYXRhOiBOekZvcm1hdEVtaXRFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZhdGVkTm9kZSA9IGRhdGEubm9kZSE7XG4gIH1cbiAgY29udGV4dE1lbnUoJGV2ZW50OiBNb3VzZUV2ZW50LCBtZW51OiBOekRyb3Bkb3duTWVudUNvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMubnpDb250ZXh0TWVudVNlcnZpY2UuY3JlYXRlKCRldmVudCwgbWVudSk7XG4gIH1cbiAgLyoqXG4gICog6YCJ5Lit54q25oCB5pS55Y+YXG4gICovXG4gIG9uQ2hlY2tlZENoYW5nZShldnQ6IE56Rm9ybWF0RW1pdEV2ZW50KTogdm9pZCB7XG4gICAgLy8gU2NlbmVUcmVlVXRpbHMuR2V0WGJzakN6bU9iamVjdChldnQubm9kZSkuc2hvdyA9IGZhbHNlXG4gICAgaWYgKGV2dC5ldmVudE5hbWUgIT09IFwiY2hlY2tcIiB8fCAhZXZ0Lm5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGV2dC5ub2RlLmlzQ2hlY2tlZCkge1xuICAgICAgLy/liqDovb3lm77lsYJcbiAgICAgIC8vIGV2dC5ub2RlLm9yaWdpbi5vcmlnaW4uc2hvdz10cnVlXG4gICAgICBTY2VuZVRyZWVVdGlscy5HZXRYYnNqQ3ptT2JqZWN0KGV2dC5ub2RlKS5zaG93ID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy/np7vpmaTlm77lsYJcbiAgICAgIFNjZW5lVHJlZVV0aWxzLkdldFhic2pDem1PYmplY3QoZXZ0Lm5vZGUpLnNob3cgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgb25SaWdodENsaWNrKCRldmVudCkge1xuXG4gIH1cbiAgbmdPbkluaXQoKSB7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgICB2YXIgdXczID0gWEUuTVZWTS53YXRjaCgoKSA9PiBbLi4udGhpcy52aWV3LnNjZW5lVHJlZS4kcmVmcy5iYXNlbWFwLmNoaWxkcmVuXSwgKCkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coXCLlupXlm77lj5jljJZcIilcbiAgICAgIHRoaXMubG9hZEJhc2VUcmVlKCk7XG4gICAgfSk7XG4gIH1cbiAgbG9hZEJhc2VUcmVlKCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgX2xheWVyTm9kZXMgPSBTY2VuZVRyZWVVdGlscy5TY2VuZVRyZWUyTmdab3Jyb1RyZWUodGhpcy52aWV3LnNjZW5lVHJlZS4kcmVmcy5iYXNlbWFwKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKF9sYXllck5vZGVzKVxuICAgICAgdGhpcy5sYXllck5vZGVzID0gWy4uLl9sYXllck5vZGVzWzBdW1wiX2NoaWxkcmVuXCJdXTtcbiAgICAgIHRoaXMudmlldy5zY2VuZVRyZWUuJHJlZnMuYmFzZW1hcC5jaGlsZHJlblswXS5jem1PYmplY3QueGJzalpJbmRleD0tMVxuICAgIH0sIDEwMCk7XG5cbiAgfVxuICBzZWxlY3RJbWFnZShpdGVtKSB7XG4gICAgY29uc29sZS5sb2coU2NlbmVUcmVlVXRpbHMubG9hZExheWVyTm9kZShpdGVtKSlcbiAgICBsZXQgbm9kZT1TY2VuZVRyZWVVdGlscy5sb2FkTGF5ZXJOb2RlKGl0ZW0pXG4gICAgbm9kZS5jem1PYmplY3Quc2hvdz10cnVlO1xuICAgIGNvbnN0IGVhcnRoID0gdGhpcy52aWV3O1xuICAgIC8vIGVhcnRoLnNjZW5lVHJlZS5yb290LmNoaWxkcmVuWzBdID0ge307XG4gICAgZWFydGguc2NlbmVUcmVlLiRyZWZzLmJhc2VtYXAuY2hpbGRyZW5bMF0gPSBub2RlO1xuICB9XG4gIHNlbGVjdFRlcnJhaW4oaXRlbSkge1xuICAgIHRoaXMudmlldy5zY2VuZVRyZWUuJHJlZnMuYmFzZW1hcC5jaGlsZHJlbi5wdXNoKGl0ZW0pXG4gIH1cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHN1cGVyLm5nQWZ0ZXJWaWV3SW5pdCgpO1xuICB9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XG4gIH1cbn0iLCI8bnotdGFic2V0PlxyXG4gICAgPG56LXRhYiBuelRpdGxlPVwi5b2x5YOPXCI+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgdGhpcy5jb25maWcuYmFzZW1hcHNcIiAoY2xpY2spPVwic2VsZWN0SW1hZ2UoaXRlbSlcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYWNraW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBbc3JjXT1cIml0ZW0uaW1nVXJsXCI+PGJyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIFt0aXRsZV09XCJpdGVtLnRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDoxMDAlO3doaXRlLXNwYWNlOm5vd3JhcDt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO292ZXJmbG93OmhpZGRlbjt0ZXh0LWFsaWduOiBsZWZ0O1wiPnt7aXRlbS50aXRsZX19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvbnotdGFiPlxyXG4gICAgPCEtLSA8bnotdGFiIG56VGl0bGU9XCLlnLDlvaJcIj5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBpdGVtIG9mIHRlcnJhaW5EYXRhXCIgKGNsaWNrKT1cInNlbGVjdFRlcnJhaW4oaXRlbSlcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYWNraW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBbc3JjXT1cIml0ZW0uY3ptT2JqZWN0LmltZ1wiPjxicj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBbdGl0bGVdPVwiaXRlbS5jem1PYmplY3QubmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6MTAwJTt3aGl0ZS1zcGFjZTpub3dyYXA7dGV4dC1vdmVyZmxvdzplbGxpcHNpcztvdmVyZmxvdzpoaWRkZW47dGV4dC1hbGlnbjogbGVmdDtcIj57e2l0ZW0uY3ptT2JqZWN0Lm5hbWV9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICA8L256LXRhYj4gLS0+XHJcbjwvbnotdGFic2V0PlxyXG48bnotdGFic2V0PlxyXG4gICAgPCEtLSA8bnotdGFiIG56VGl0bGU9XCLlvbHlg49cIj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgaXRlbSBvZiB0aGlzLmNvbmZpZy5iYXNlbWFwc1wiIChjbGljayk9XCJzZWxlY3RJbWFnZShpdGVtKVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJhY2tpbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIFtzcmNdPVwiaXRlbS5pbWdVcmxcIj48YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gW3RpdGxlXT1cIml0ZW0udGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOjEwMCU7d2hpdGUtc3BhY2U6bm93cmFwO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7b3ZlcmZsb3c6aGlkZGVuO3RleHQtYWxpZ246IGxlZnQ7XCI+e3tpdGVtLnRpdGxlfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgPC9uei10YWI+IC0tPlxyXG4gICAgPG56LXRhYiBuelRpdGxlPVwi5Zyw5b2iXCI+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgaXRlbSBvZiB0aGlzLmNvbmZpZy50ZXJyYWluXCIgKGNsaWNrKT1cInNlbGVjdFRlcnJhaW4oaXRlbSlcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYWNraW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBbc3JjXT1cIml0ZW0uaW1nVXJsXCI+PGJyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIFt0aXRsZV09XCJpdGVtLmN6bU9iamVjdC5uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDoxMDAlO3doaXRlLXNwYWNlOm5vd3JhcDt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO292ZXJmbG93OmhpZGRlbjt0ZXh0LWFsaWduOiBsZWZ0O1wiPnt7aXRlbS5jem1PYmplY3QubmFtZX19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvbnotdGFiPlxyXG48L256LXRhYnNldD5cclxuPG56LWRpdmlkZXI+PC9uei1kaXZpZGVyPlxyXG48bnotdHJlZSBcclxuICBuekJsb2NrTm9kZVxyXG4gIG56Q2hlY2thYmxlXHJcbiAgW256RGF0YV09XCJsYXllck5vZGVzXCIgXHJcbiAgKG56Q2xpY2spPVwiYWN0aXZlTm9kZSgkZXZlbnQpXCIgXHJcbiAgKG56Q2hlY2tCb3hDaGFuZ2UpPVwib25DaGVja2VkQ2hhbmdlKCRldmVudCk7XCJcclxuICBbbnpUcmVlVGVtcGxhdGVdPVwibnpUcmVlVGVtcGxhdGVcIj48L256LXRyZWU+XHJcbjxuZy10ZW1wbGF0ZSAjbnpUcmVlVGVtcGxhdGUgbGV0LW5vZGUgbGV0LW9yaWdpbj1cIm9yaWdpblwiPlxyXG4gIDxzcGFuIGNsYXNzPVwiY3VzdG9tLW5vZGVcIj5cclxuICAgIDxzcGFuICpuZ0lmPVwiIW5vZGUuaXNMZWFmXCI+XHJcbiAgICAgIDwhLS0gPGkgbnotaWNvbiBbbnpUeXBlXT1cIm5vZGUuaXNFeHBhbmRlZCA/ICdmb2xkZXItb3BlbicgOiAnZm9sZGVyJ1wiIChjbGljayk9XCJvcGVuRm9sZGVyKG5vZGUpXCI+PC9pPiAtLT5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJmb2xkZXItbmFtZVwiPnt7IG5vZGUudGl0bGUgfX08L3NwYW4+XHJcbiAgICA8L3NwYW4+XHJcbiAgICA8c3BhbiAqbmdJZj1cIm5vZGUuaXNMZWFmXCI+XHJcbiAgICAgIDwhLS0gPGkgbnotaWNvbiBbbnpUeXBlXT1cIm5vZGUuaXNFeHBhbmRlZCA/ICdmb2xkZXItb3BlbicgOiAnZm9sZGVyJ1wiIChjbGljayk9XCJvcGVuRm9sZGVyKG5vZGUpXCI+PC9pPiAtLT5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJmb2xkZXItbmFtZVwiPnt7IG5vZGUudGl0bGUgfX08L3NwYW4+XHJcbiAgICA8L3NwYW4+XHJcbiAgPC9zcGFuPlxyXG48L25nLXRlbXBsYXRlPiJdfQ==