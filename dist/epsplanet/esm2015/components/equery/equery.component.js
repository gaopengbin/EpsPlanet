import { __decorate } from "tslib";
import { Component } from "@angular/core";
import { ComponentRegister } from "epsgis";
import { BasePlanetWidgetComponent } from '../base-widget/base-widget.component';
import { Query } from '../../services/query';
import qs from 'qs';
import axios from 'axios';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "ng-zorro-antd/form";
import * as i3 from "ng-zorro-antd/grid";
import * as i4 from "ng-zorro-antd/select";
import * as i5 from "@angular/common";
import * as i6 from "ng-zorro-antd/input";
import * as i7 from "ng-zorro-antd/button";
import * as i8 from "ng-zorro-antd/core/wave";
import * as i9 from "ng-zorro-antd/core/transition-patch";
function PlanetEqueryComponent_nz_option_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nz-option", 11);
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    i0.ɵɵproperty("nzLabel", item_r2.name)("nzValue", item_r2.czmObject);
} }
function PlanetEqueryComponent_nz_option_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nz-option", 11);
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    i0.ɵɵproperty("nzLabel", item_r3.name)("nzValue", item_r3.index);
} }
let PlanetEqueryComponent = class PlanetEqueryComponent extends BasePlanetWidgetComponent {
    constructor(fb) {
        super();
        this.fb = fb;
        this.serverList = [];
        this.layerList = [];
        this.controlArray = [];
        this.isCollapse = true;
    }
    resetForm() {
        this.validateForm.reset();
        Query.clearHighLight();
    }
    static getCompInfo() {
        return { name: "EpsGisForPlanetLoadWmtsComponent", path: "epsplanet/components/load-wmts" };
    }
    Search() {
        console.log(this.validateForm.value);
        let czmObject = this.validateForm.value.server;
        let type = czmObject.xbsjImageryProvider.type;
        let url = czmObject.xbsjImageryProvider[type].url;
        if (url.indexOf('arcgis') !== -1) {
            let index = this.validateForm.value.layer;
            let params = this.validateForm.value.where;
            Query.ArcgisQuery(czmObject, index, params, res => { });
        }
        if (url.indexOf('geoserver') !== -1) {
            let param = this.validateForm.value.where;
            Query.GeoserverQuery(czmObject, param);
        }
    }
    zoomTo() {
    }
    test() {
    }
    changeServer(value) {
        this.layerList = [];
        let type = value.xbsjImageryProvider.type;
        let url = value.xbsjImageryProvider[type].url;
        let requestUrl = "";
        if (url.indexOf('arcgis') !== -1) {
            this.validateForm.controls.platForm.setValue("ArcGIS");
            if (value.xbsjImageryProvider.type == "WebMapTileServiceImageryProvider") {
                requestUrl = url.split('MapServer')[0] + "MapServer/layers?f=pjson";
            }
            else if (value.xbsjImageryProvider.type == "SSWebMapServiceImageryProvider") {
                requestUrl = url.split('arcgis')[0] + 'arcgis/rest' + url.split('arcgis')[1].split('MapServer')[0] + "MapServer/layers?f=pjson";
            }
            axios.get(requestUrl).then(res => {
                res.data.layers.forEach(item => {
                    this.layerList.push({
                        name: item.name,
                        index: item.id
                    });
                });
            });
        }
        if (url.indexOf('geoserver') !== -1) {
            this.validateForm.controls.platForm.setValue("GeoServer");
            if (value.xbsjImageryProvider.type == "WebMapTileServiceImageryProvider") {
                let layer = value.xbsjImageryProvider[type].layer;
                this.layerList.push({
                    name: layer,
                    index: 0
                });
            }
            else if (value.xbsjImageryProvider.type == "SSWebMapServiceImageryProvider") {
                let layer = value.xbsjImageryProvider[type].layer;
                this.layerList.push({
                    name: layer,
                    index: 0
                });
            }
        }
    }
    changeLayer(value) {
    }
    getAllLayers(group) {
        group.forEach(item => {
            if (item.children) {
                this.getAllLayers(item.children);
            }
            else {
                if (item.czmObject.xbsjType !== "Imagery")
                    return;
                this.serverList.push({
                    name: item.czmObject.name,
                    czmObject: item.czmObject
                });
            }
        });
    }
    ngOnInit() {
        super.ngOnInit();
        console.log(qs);
        this.getAllLayers(this.view.sceneTree.$refs.layerlist.children);
        this.validateForm = this.fb.group({
            server: [null],
            layer: [null],
            platForm: [null],
            where: [null]
        });
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
};
PlanetEqueryComponent.ɵfac = function PlanetEqueryComponent_Factory(t) { return new (t || PlanetEqueryComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
PlanetEqueryComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PlanetEqueryComponent, selectors: [["epsgis-planet-equery"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 29, vars: 7, consts: [["nz-form", "", "nzLayout", "horizontal", 1, "ant-advanced-search-form", 3, "formGroup"], ["nzShowSearch", "", "nzAllowClear", "", "nzPlaceHolder", "Select a server", "formControlName", "server", 3, "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["nzShowSearch", "", "nzAllowClear", "", "nzPlaceHolder", "Select a layer", "formControlName", "layer", 3, "ngModelChange"], [3, "hidden"], ["nz-input", "", "placeholder", "placeholder", "formControlName", "platForm", 3, "disabled"], ["nz-input", "", "placeholder", "placeholder", "formControlName", "where"], ["nz-row", ""], ["nz-col", "", 1, "search-area", 3, "nzSpan"], ["nz-button", "", 3, "nzType", "click"], ["nz-button", "", 3, "click"], [3, "nzLabel", "nzValue"]], template: function PlanetEqueryComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵelementStart(1, "nz-form-item");
        i0.ɵɵelementStart(2, "nz-form-label");
        i0.ɵɵtext(3, "\u670D\u52A1");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "nz-form-control");
        i0.ɵɵelementStart(5, "nz-select", 1);
        i0.ɵɵlistener("ngModelChange", function PlanetEqueryComponent_Template_nz_select_ngModelChange_5_listener($event) { return ctx.changeServer($event); });
        i0.ɵɵtemplate(6, PlanetEqueryComponent_nz_option_6_Template, 1, 2, "nz-option", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "nz-form-item");
        i0.ɵɵelementStart(8, "nz-form-label");
        i0.ɵɵtext(9, "\u56FE\u5C42");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "nz-form-control");
        i0.ɵɵelementStart(11, "nz-select", 3);
        i0.ɵɵlistener("ngModelChange", function PlanetEqueryComponent_Template_nz_select_ngModelChange_11_listener($event) { return ctx.changeLayer($event); });
        i0.ɵɵtemplate(12, PlanetEqueryComponent_nz_option_12_Template, 1, 2, "nz-option", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "nz-form-item", 4);
        i0.ɵɵelementStart(14, "nz-form-label");
        i0.ɵɵtext(15, "\u670D\u52A1\u5E73\u53F0");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "nz-form-control");
        i0.ɵɵelement(17, "input", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "nz-form-item");
        i0.ɵɵelementStart(19, "nz-form-label");
        i0.ɵɵtext(20, "\u6761\u4EF6");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "nz-form-control");
        i0.ɵɵelement(22, "input", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "div", 7);
        i0.ɵɵelementStart(24, "div", 8);
        i0.ɵɵelementStart(25, "button", 9);
        i0.ɵɵlistener("click", function PlanetEqueryComponent_Template_button_click_25_listener() { return ctx.Search(); });
        i0.ɵɵtext(26, "Search");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(27, "button", 10);
        i0.ɵɵlistener("click", function PlanetEqueryComponent_Template_button_click_27_listener() { return ctx.resetForm(); });
        i0.ɵɵtext(28, "Clear");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("formGroup", ctx.validateForm);
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngForOf", ctx.serverList);
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngForOf", ctx.layerList);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("hidden", true);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("disabled", true);
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("nzSpan", 24);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("nzType", "primary");
    } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i2.NzFormDirective, i1.FormGroupDirective, i3.NzRowDirective, i2.NzFormItemComponent, i3.NzColDirective, i2.NzFormLabelComponent, i2.NzFormControlComponent, i4.NzSelectComponent, i1.NgControlStatus, i1.FormControlName, i5.NgForOf, i6.NzInputDirective, i1.DefaultValueAccessor, i7.NzButtonComponent, i8.NzWaveDirective, i9.ɵNzTransitionPatchDirective, i4.NzOptionComponent], styles: [".sspanel{width:500px!important}.ant-advanced-search-form[_ngcontent-%COMP%]{padding:24px;background:#fbfbfb;border:1px solid #d9d9d9;border-radius:6px}.search-result-list[_ngcontent-%COMP%]{margin-top:16px;border:1px dashed #e9e9e9;border-radius:6px;background-color:#fafafa;min-height:200px;text-align:center;padding-top:80px}[nz-form-label][_ngcontent-%COMP%]{overflow:visible}.collapse[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{margin-left:8px}.collapse[_ngcontent-%COMP%]{font-size:12px}.search-area[_ngcontent-%COMP%]{text-align:right}"] });
PlanetEqueryComponent = __decorate([
    ComponentRegister({
        uri: "epsgis-planet-equery",
        path: "epsplanet/components/equery",
        name: "PlanetEqueryComponent"
    })
], PlanetEqueryComponent);
export { PlanetEqueryComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PlanetEqueryComponent, [{
        type: Component,
        args: [{
                selector: "epsgis-planet-equery",
                templateUrl: "./equery.component.html",
                styleUrls: ["./equery.component.scss"]
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1ZXJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Vwc3BsYW5ldC9jb21wb25lbnRzL2VxdWVyeS9lcXVlcnkuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZXBzcGxhbmV0L2NvbXBvbmVudHMvZXF1ZXJ5L2VxdWVyeS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDM0MsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFakYsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxNQUFNLElBQUksQ0FBQztBQUNwQixPQUFPLEtBQUssTUFBTSxPQUFPLENBQUE7Ozs7Ozs7Ozs7OztJQ0RULGdDQUF3Rzs7O0lBQTdELHNDQUFxQiw4QkFBQTs7O0lBUWhFLGdDQUFtRzs7O0lBQXpELHNDQUFxQiwwQkFBQTs7SURJbEUscUJBQXFCLFNBQXJCLHFCQUFzQixTQUFRLHlCQUF5QjtJQWFsRSxZQUFvQixFQUFlO1FBQ2pDLEtBQUssRUFBRSxDQUFDO1FBRFUsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQVhuQyxlQUFVLEdBQUcsRUFBRSxDQUFBO1FBQ2YsY0FBUyxHQUFHLEVBQUUsQ0FBQTtRQUVkLGlCQUFZLEdBQTRDLEVBQUUsQ0FBQztRQUMzRCxlQUFVLEdBQUcsSUFBSSxDQUFDO0lBU2xCLENBQUM7SUFORCxTQUFTO1FBQ1AsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMxQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUlELE1BQU0sQ0FBQyxXQUFXO1FBQ2hCLE9BQU8sRUFB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QUFDO1FBQzdILG9GQUFtRztRQUNyRyxpQkFBWTtRQUNsQixpQkFBa0I7UUFDdEIsaUJBQWU7UUFDZix3Q0FBNEI7UUFDeEIsc0NBQWU7UUFBQSx5Q0FBSTtRQUFBLGlCQUFnQjtRQUNuQyx3Q0FBaUI7UUFDYiw0QkFBeUY7UUFDN0YsaUJBQWtCO1FBQ3RCLGlCQUFlO1FBQ2YscUNBQWM7UUFDVixzQ0FBZTtRQUFBLDZCQUFFO1FBQUEsaUJBQWdCO1FBQ2pDLHdDQUFpQjtRQUNiLDRCQUFtRTtRQUN2RSxpQkFBa0I7UUFDdEIsaUJBQWU7UUFDZiwrQkFBWTtRQUNSLCtCQUE4QztRQUMxQyxrQ0FBMEQ7UUFBbkIsbUdBQVMsWUFBUSxJQUFDO1FBQUMsdUJBQU07UUFBQSxpQkFBUztRQUN6RSxtQ0FBd0M7UUFBdEIsbUdBQVMsZUFBVyxJQUFDO1FBQUMsc0JBQUs7UUFBQSxpQkFBUztRQUMxRCxpQkFBTTtRQUNWLGlCQUFNO1FBQ1YsaUJBQU87O1FBbkNPLDRDQUEwQjtRQUtJLGVBQWE7UUFBYix3Q0FBYTtRQVFiLGVBQVk7UUFBWix1Q0FBWTtRQUl0QyxlQUFhO1FBQWIsNkJBQWE7UUFHa0QsZUFBaUI7UUFBakIsK0JBQWlCO1FBVTlFLGVBQWE7UUFBYiwyQkFBYTtRQUNILGVBQW9CO1FBQXBCLGtDQUFvQjs7QURkckMscUJBQXFCO0lBVmpDLGlCQUFpQixDQUFDO1FBQ2pCLEdBQUcsRUFBRSxzQkFBc0I7UUFDM0IsSUFBSSxFQUFFLDZCQUE2QjtRQUNuQyxJQUFJLEVBQUUsdUJBQXVCO0tBQzlCLENBQUM7R0FNVyxxQkFBcUIsQ0E4SWpDO1NBOUlZLHFCQUFxQjt1RkFBckIscUJBQXFCO2NBTGpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxXQUFXLEVBQUUseUJBQXlCO2dCQUN0QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQzthQUN2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21wb25lbnRSZWdpc3RlciB9IGZyb20gXCJlcHNnaXNcIjtcbmltcG9ydCB7IEJhc2VQbGFuZXRXaWRnZXRDb21wb25lbnQgfSBmcm9tICcuLi9iYXNlLXdpZGdldC9iYXNlLXdpZGdldC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcXVlcnknO1xuaW1wb3J0IHFzIGZyb20gJ3FzJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbkBDb21wb25lbnRSZWdpc3Rlcih7XG4gIHVyaTogXCJlcHNnaXMtcGxhbmV0LWVxdWVyeVwiLFxuICBwYXRoOiBcImVwc3BsYW5ldC9jb21wb25lbnRzL2VxdWVyeVwiLFxuICBuYW1lOiBcIlBsYW5ldEVxdWVyeUNvbXBvbmVudFwiXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImVwc2dpcy1wbGFuZXQtZXF1ZXJ5XCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vZXF1ZXJ5LmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9lcXVlcnkuY29tcG9uZW50LnNjc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgUGxhbmV0RXF1ZXJ5Q29tcG9uZW50IGV4dGVuZHMgQmFzZVBsYW5ldFdpZGdldENvbXBvbmVudCB7XG5cbiAgc2VydmVyTGlzdCA9IFtdXG4gIGxheWVyTGlzdCA9IFtdXG4gIHZhbGlkYXRlRm9ybSE6IEZvcm1Hcm91cDtcbiAgY29udHJvbEFycmF5OiBBcnJheTx7IGluZGV4OiBudW1iZXI7IHNob3c6IGJvb2xlYW4gfT4gPSBbXTtcbiAgaXNDb2xsYXBzZSA9IHRydWU7XG5cblxuICByZXNldEZvcm0oKTogdm9pZCB7XG4gICAgdGhpcy52YWxpZGF0ZUZvcm0ucmVzZXQoKTtcbiAgICBRdWVyeS5jbGVhckhpZ2hMaWdodCgpO1xuICB9XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuICBzdGF0aWMgZ2V0Q29tcEluZm8oKSB7XG4gICAgcmV0dXJuIHsgbmFtZTogXCJFcHNHaXNGb3JQbGFuZXRMb2FkV210c0NvbXBvbmVudFwiLCBwYXRoOiBcImVwc3BsYW5ldC9jb21wb25lbnRzL2xvYWQtd210c1wiIH07XG4gIH1cbiAgU2VhcmNoKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMudmFsaWRhdGVGb3JtLnZhbHVlKVxuICAgIGxldCBjem1PYmplY3QgPSB0aGlzLnZhbGlkYXRlRm9ybS52YWx1ZS5zZXJ2ZXI7XG4gICAgbGV0IHR5cGUgPSBjem1PYmplY3QueGJzakltYWdlcnlQcm92aWRlci50eXBlO1xuICAgIGxldCB1cmwgPSBjem1PYmplY3QueGJzakltYWdlcnlQcm92aWRlclt0eXBlXS51cmw7XG4gICAgaWYgKHVybC5pbmRleE9mKCdhcmNnaXMnKSAhPT0gLTEpIHtcbiAgICAgIC8vIGxldCByZXF1ZXN0VXJsID0gXCJcIlxuICAgICAgbGV0IGluZGV4ID0gdGhpcy52YWxpZGF0ZUZvcm0udmFsdWUubGF5ZXI7XG4gICAgICBsZXQgcGFyYW1zID0gdGhpcy52YWxpZGF0ZUZvcm0udmFsdWUud2hlcmU7XG4gICAgICBRdWVyeS5BcmNnaXNRdWVyeShjem1PYmplY3QsIGluZGV4LCBwYXJhbXMsIHJlcyA9PiB7IH0pXG4gICAgfVxuICAgIGlmICh1cmwuaW5kZXhPZignZ2Vvc2VydmVyJykgIT09IC0xKSB7XG4gICAgICBsZXQgcGFyYW0gPSB0aGlzLnZhbGlkYXRlRm9ybS52YWx1ZS53aGVyZTtcbiAgICAgIFF1ZXJ5Lkdlb3NlcnZlclF1ZXJ5KGN6bU9iamVjdCwgcGFyYW0pXG4gICAgfVxuICAgIC8vIGxldCB1cmw9YGh0dHA6Ly9sb2NhbGhvc3Q6NjA4MC9hcmNnaXMvcmVzdC9zZXJ2aWNlcy9keG0vTWFwU2VydmVyLzIvcXVlcnk/dGV4dD0mb2JqZWN0SWRzPSZ0aW1lPSZnZW9tZXRyeT0mZ2VvbWV0cnlUeXBlPWVzcmlHZW9tZXRyeUVudmVsb3BlJmluU1I9JnNwYXRpYWxSZWw9ZXNyaVNwYXRpYWxSZWxJbnRlcnNlY3RzJnJlbGF0aW9uUGFyYW09Jm91dEZpZWxkcz0mcmV0dXJuR2VvbWV0cnk9dHJ1ZSZtYXhBbGxvd2FibGVPZmZzZXQ9Jmdlb21ldHJ5UHJlY2lzaW9uPSZvdXRTUj0mcmV0dXJuSWRzT25seT1mYWxzZSZyZXR1cm5Db3VudE9ubHk9ZmFsc2Umb3JkZXJCeUZpZWxkcz0mZ3JvdXBCeUZpZWxkc0ZvclN0YXRpc3RpY3M9Jm91dFN0YXRpc3RpY3M9JnJldHVyblo9ZmFsc2UmcmV0dXJuTT1mYWxzZSZnZGJWZXJzaW9uPSZyZXR1cm5EaXN0aW5jdFZhbHVlcz1mYWxzZSZmPXBqc29uYFxuICB9XG4gIHpvb21UbygpIHtcblxuICB9XG4gIHRlc3QoKSB7XG5cbiAgfVxuICBjaGFuZ2VTZXJ2ZXIodmFsdWUpIHtcbiAgICB0aGlzLmxheWVyTGlzdCA9IFtdO1xuICAgIGxldCB0eXBlID0gdmFsdWUueGJzakltYWdlcnlQcm92aWRlci50eXBlO1xuICAgIGxldCB1cmwgPSB2YWx1ZS54YnNqSW1hZ2VyeVByb3ZpZGVyW3R5cGVdLnVybDtcbiAgICBsZXQgcmVxdWVzdFVybCA9IFwiXCJcbiAgICBpZiAodXJsLmluZGV4T2YoJ2FyY2dpcycpICE9PSAtMSkge1xuICAgICAgdGhpcy52YWxpZGF0ZUZvcm0uY29udHJvbHMucGxhdEZvcm0uc2V0VmFsdWUoXCJBcmNHSVNcIilcbiAgICAgIGlmICh2YWx1ZS54YnNqSW1hZ2VyeVByb3ZpZGVyLnR5cGUgPT0gXCJXZWJNYXBUaWxlU2VydmljZUltYWdlcnlQcm92aWRlclwiKSB7XG4gICAgICAgIHJlcXVlc3RVcmwgPSB1cmwuc3BsaXQoJ01hcFNlcnZlcicpWzBdICsgXCJNYXBTZXJ2ZXIvbGF5ZXJzP2Y9cGpzb25cIlxuICAgICAgfSBlbHNlIGlmICh2YWx1ZS54YnNqSW1hZ2VyeVByb3ZpZGVyLnR5cGUgPT0gXCJTU1dlYk1hcFNlcnZpY2VJbWFnZXJ5UHJvdmlkZXJcIikge1xuICAgICAgICByZXF1ZXN0VXJsID0gdXJsLnNwbGl0KCdhcmNnaXMnKVswXSArICdhcmNnaXMvcmVzdCcgKyB1cmwuc3BsaXQoJ2FyY2dpcycpWzFdLnNwbGl0KCdNYXBTZXJ2ZXInKVswXSArIFwiTWFwU2VydmVyL2xheWVycz9mPXBqc29uXCI7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcXVlc3RVcmwpXG4gICAgICB9XG4gICAgICBheGlvcy5nZXQocmVxdWVzdFVybCkudGhlbihyZXMgPT4ge1xuICAgICAgICByZXMuZGF0YS5sYXllcnMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICB0aGlzLmxheWVyTGlzdC5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgIGluZGV4OiBpdGVtLmlkXG4gICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgIH1cbiAgICBpZiAodXJsLmluZGV4T2YoJ2dlb3NlcnZlcicpICE9PSAtMSkge1xuICAgICAgdGhpcy52YWxpZGF0ZUZvcm0uY29udHJvbHMucGxhdEZvcm0uc2V0VmFsdWUoXCJHZW9TZXJ2ZXJcIilcbiAgICAgIGlmICh2YWx1ZS54YnNqSW1hZ2VyeVByb3ZpZGVyLnR5cGUgPT0gXCJXZWJNYXBUaWxlU2VydmljZUltYWdlcnlQcm92aWRlclwiKSB7XG4gICAgICAgIGxldCBsYXllciA9IHZhbHVlLnhic2pJbWFnZXJ5UHJvdmlkZXJbdHlwZV0ubGF5ZXJcbiAgICAgICAgdGhpcy5sYXllckxpc3QucHVzaCh7XG4gICAgICAgICAgbmFtZTogbGF5ZXIsXG4gICAgICAgICAgaW5kZXg6IDBcbiAgICAgICAgfSlcbiAgICAgICAgLy8gcmVxdWVzdFVybCA9IHVybC5zcGxpdCgnTWFwU2VydmVyJylbMF0gKyBcIk1hcFNlcnZlci9sYXllcnM/Zj1wanNvblwiXG4gICAgICB9IGVsc2UgaWYgKHZhbHVlLnhic2pJbWFnZXJ5UHJvdmlkZXIudHlwZSA9PSBcIlNTV2ViTWFwU2VydmljZUltYWdlcnlQcm92aWRlclwiKSB7XG4gICAgICAgIGxldCBsYXllciA9IHZhbHVlLnhic2pJbWFnZXJ5UHJvdmlkZXJbdHlwZV0ubGF5ZXJcbiAgICAgICAgdGhpcy5sYXllckxpc3QucHVzaCh7XG4gICAgICAgICAgbmFtZTogbGF5ZXIsXG4gICAgICAgICAgaW5kZXg6IDBcbiAgICAgICAgfSlcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVxdWVzdFVybClcbiAgICAgIH1cbiAgICB9XG5cblxuICB9XG4gIGNoYW5nZUxheWVyKHZhbHVlKSB7XG4gICAgLy8gbGV0IHR5cGUgPSB2YWx1ZS54YnNqSW1hZ2VyeVByb3ZpZGVyLnR5cGU7XG4gICAgLy8gbGV0IHVybCA9IHZhbHVlLnhic2pJbWFnZXJ5UHJvdmlkZXJbdHlwZV0udXJsO1xuICAgIC8vIGlmICh1cmwuaW5kZXhPZignYXJjZ2lzJykgIT09IC0xKSB0aGlzLnZhbGlkYXRlRm9ybS5jb250cm9scy5wbGF0Rm9ybS5zZXRWYWx1ZShcIkFyY0dJU1wiKVxuICAgIC8vIGlmICh1cmwuaW5kZXhPZignZ2Vvc2VydmVyJykgIT09IC0xKSB0aGlzLnZhbGlkYXRlRm9ybS5jb250cm9scy5wbGF0Rm9ybS5zZXRWYWx1ZShcIkdlb1NlcnZlclwiKVxuICB9XG4gIGdldEFsbExheWVycyhncm91cCkge1xuICAgIGdyb3VwLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpZiAoaXRlbS5jaGlsZHJlbikge1xuICAgICAgICB0aGlzLmdldEFsbExheWVycyhpdGVtLmNoaWxkcmVuKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGl0ZW0uY3ptT2JqZWN0Lnhic2pUeXBlICE9PSBcIkltYWdlcnlcIikgcmV0dXJuO1xuICAgICAgICB0aGlzLnNlcnZlckxpc3QucHVzaCh7XG4gICAgICAgICAgbmFtZTogaXRlbS5jem1PYmplY3QubmFtZSxcbiAgICAgICAgICBjem1PYmplY3Q6IGl0ZW0uY3ptT2JqZWN0XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICAgIGNvbnNvbGUubG9nKHFzKVxuICAgIHRoaXMuZ2V0QWxsTGF5ZXJzKHRoaXMudmlldy5zY2VuZVRyZWUuJHJlZnMubGF5ZXJsaXN0LmNoaWxkcmVuKVxuICAgIC8vIHRoaXMudmlldy5zY2VuZVRyZWUuJHJlZnMubGF5ZXJsaXN0LmNoaWxkcmVuLmZvckVhY2goZ3JvdXAgPT4ge1xuICAgIC8vICAgaWYgKGdyb3VwLmNoaWxkcmVuKSB7XG4gICAgLy8gICAgIGdyb3VwLmNoaWxkcmVuLmZvckVhY2goaXRlbSA9PiB7XG4gICAgLy8gICAgICAgaWYgKGl0ZW0uY3ptT2JqZWN0Lnhic2pUeXBlICE9PSBcIkltYWdlcnlcIikgcmV0dXJuO1xuICAgIC8vICAgICAgIHRoaXMuc2VydmVyTGlzdC5wdXNoKHtcbiAgICAvLyAgICAgICAgIG5hbWU6IGl0ZW0uY3ptT2JqZWN0Lm5hbWUsXG4gICAgLy8gICAgICAgICBjem1PYmplY3Q6IGl0ZW0uY3ptT2JqZWN0XG4gICAgLy8gICAgICAgfSlcbiAgICAvLyAgICAgICBpZiAoaXRlbS5jem1PYmplY3QueGJzakltYWdlcnlQcm92aWRlci50eXBlID09IFwiV2ViTWFwVGlsZVNlcnZpY2VJbWFnZXJ5UHJvdmlkZXJcIiB8fCBpdGVtLmN6bU9iamVjdC54YnNqSW1hZ2VyeVByb3ZpZGVyLnR5cGUgPT0gXCJXZWJNYXBTZXJ2aWNlSW1hZ2VyeVByb3ZpZGVyXCIpIHtcbiAgICAvLyAgICAgICAgIGlmIChpdGVtLmN6bU9iamVjdC54YnNqSW1hZ2VyeVByb3ZpZGVyW2l0ZW0uY3ptT2JqZWN0Lnhic2pJbWFnZXJ5UHJvdmlkZXIudHlwZV0udXJsLmluZGV4T2YoXCJhcmNnaXNcIikgIT09IC0xKSB7XG5cbiAgICAvLyAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAvLyAgICAgICAgIH1cblxuICAgIC8vICAgICAgIH1cbiAgICAvLyAgICAgfSlcbiAgICAvLyAgIH0gZWxzZSB7XG5cbiAgICAvLyAgIH1cbiAgICAvLyB9KVxuICAgIHRoaXMudmFsaWRhdGVGb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICBzZXJ2ZXI6IFtudWxsXSxcbiAgICAgIGxheWVyOiBbbnVsbF0sXG4gICAgICBwbGF0Rm9ybTogW251bGxdLFxuICAgICAgd2hlcmU6IFtudWxsXVxuICAgIH0pO1xuICB9XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBzdXBlci5uZ0FmdGVyVmlld0luaXQoKTtcbiAgfVxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xuICB9XG59IiwiPGZvcm0gbnotZm9ybSBbZm9ybUdyb3VwXT1cInZhbGlkYXRlRm9ybVwiIGNsYXNzPVwiYW50LWFkdmFuY2VkLXNlYXJjaC1mb3JtXCIgbnpMYXlvdXQ9XCJob3Jpem9udGFsXCI+XHJcbiAgICA8bnotZm9ybS1pdGVtPlxyXG4gICAgICAgIDxuei1mb3JtLWxhYmVsPuacjeWKoTwvbnotZm9ybS1sYWJlbD5cclxuICAgICAgICA8bnotZm9ybS1jb250cm9sPlxyXG4gICAgICAgICAgICA8bnotc2VsZWN0IG56U2hvd1NlYXJjaCBuekFsbG93Q2xlYXIgbnpQbGFjZUhvbGRlcj1cIlNlbGVjdCBhIHNlcnZlclwiIGZvcm1Db250cm9sTmFtZT1cInNlcnZlclwiIChuZ01vZGVsQ2hhbmdlKT1cImNoYW5nZVNlcnZlcigkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICA8bnotb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIHNlcnZlckxpc3RcIiBbbnpMYWJlbF09XCJpdGVtLm5hbWVcIiBbbnpWYWx1ZV09XCJpdGVtLmN6bU9iamVjdFwiPjwvbnotb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDwvbnotc2VsZWN0PlxyXG4gICAgICAgIDwvbnotZm9ybS1jb250cm9sPlxyXG4gICAgPC9uei1mb3JtLWl0ZW0+XHJcbiAgICA8bnotZm9ybS1pdGVtPlxyXG4gICAgICAgIDxuei1mb3JtLWxhYmVsPuWbvuWxgjwvbnotZm9ybS1sYWJlbD5cclxuICAgICAgICA8bnotZm9ybS1jb250cm9sPlxyXG4gICAgICAgICAgICA8bnotc2VsZWN0IG56U2hvd1NlYXJjaCBuekFsbG93Q2xlYXIgbnpQbGFjZUhvbGRlcj1cIlNlbGVjdCBhIGxheWVyXCIgZm9ybUNvbnRyb2xOYW1lPVwibGF5ZXJcIiAobmdNb2RlbENoYW5nZSk9XCJjaGFuZ2VMYXllcigkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICA8bnotb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGxheWVyTGlzdFwiIFtuekxhYmVsXT1cIml0ZW0ubmFtZVwiIFtuelZhbHVlXT1cIml0ZW0uaW5kZXhcIj48L256LW9wdGlvbj5cclxuICAgICAgICAgICAgICA8L256LXNlbGVjdD5cclxuICAgICAgICA8L256LWZvcm0tY29udHJvbD5cclxuICAgIDwvbnotZm9ybS1pdGVtPlxyXG4gICAgPG56LWZvcm0taXRlbSBbaGlkZGVuXT10cnVlPlxyXG4gICAgICAgIDxuei1mb3JtLWxhYmVsPuacjeWKoeW5s+WPsDwvbnotZm9ybS1sYWJlbD5cclxuICAgICAgICA8bnotZm9ybS1jb250cm9sPlxyXG4gICAgICAgICAgICA8aW5wdXQgbnotaW5wdXQgcGxhY2Vob2xkZXI9XCJwbGFjZWhvbGRlclwiIGZvcm1Db250cm9sTmFtZT1cInBsYXRGb3JtXCIgW2Rpc2FibGVkXT1cInRydWVcIiAvPlxyXG4gICAgICAgIDwvbnotZm9ybS1jb250cm9sPlxyXG4gICAgPC9uei1mb3JtLWl0ZW0+XHJcbiAgICA8bnotZm9ybS1pdGVtPlxyXG4gICAgICAgIDxuei1mb3JtLWxhYmVsPuadoeS7tjwvbnotZm9ybS1sYWJlbD5cclxuICAgICAgICA8bnotZm9ybS1jb250cm9sPlxyXG4gICAgICAgICAgICA8aW5wdXQgbnotaW5wdXQgcGxhY2Vob2xkZXI9XCJwbGFjZWhvbGRlclwiIGZvcm1Db250cm9sTmFtZT1cIndoZXJlXCIvPlxyXG4gICAgICAgIDwvbnotZm9ybS1jb250cm9sPlxyXG4gICAgPC9uei1mb3JtLWl0ZW0+XHJcbiAgICA8ZGl2IG56LXJvdz5cclxuICAgICAgICA8ZGl2IG56LWNvbCBbbnpTcGFuXT1cIjI0XCIgY2xhc3M9XCJzZWFyY2gtYXJlYVwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG56LWJ1dHRvbiBbbnpUeXBlXT1cIidwcmltYXJ5J1wiIChjbGljayk9XCJTZWFyY2goKVwiPlNlYXJjaDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG56LWJ1dHRvbiAoY2xpY2spPVwicmVzZXRGb3JtKClcIj5DbGVhcjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZm9ybT4iXX0=