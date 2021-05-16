import { __decorate } from "tslib";
import { Component } from "@angular/core";
import { BaseWidgetComponent, ComponentRegister } from "epsgis";
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
function EpsGisForPlanetLoadWmtsComponent_nz_option_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nz-option", 11);
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    i0.ɵɵproperty("nzLabel", item_r2.name)("nzValue", item_r2.czmObject);
} }
function EpsGisForPlanetLoadWmtsComponent_nz_option_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nz-option", 11);
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    i0.ɵɵproperty("nzLabel", item_r3.name)("nzValue", item_r3.index);
} }
let EpsGisForPlanetLoadWmtsComponent = class EpsGisForPlanetLoadWmtsComponent extends BaseWidgetComponent {
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
    ngOnInit() {
        super.ngOnInit();
        console.log(qs);
        this.view.sceneTree.$refs.layerlist.children.forEach(group => {
            if (group.children) {
                group.children.forEach(item => {
                    if (item.czmObject.xbsjType !== "Imagery")
                        return;
                    this.serverList.push({
                        name: item.czmObject.name,
                        czmObject: item.czmObject
                    });
                    if (item.czmObject.xbsjImageryProvider.type == "WebMapTileServiceImageryProvider" || item.czmObject.xbsjImageryProvider.type == "SSWebMapServiceImageryProvider") {
                        if (item.czmObject.xbsjImageryProvider[item.czmObject.xbsjImageryProvider.type].url.indexOf("arcgis") !== -1) {
                        }
                        else {
                        }
                    }
                });
            }
        });
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
EpsGisForPlanetLoadWmtsComponent.ɵfac = function EpsGisForPlanetLoadWmtsComponent_Factory(t) { return new (t || EpsGisForPlanetLoadWmtsComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
EpsGisForPlanetLoadWmtsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: EpsGisForPlanetLoadWmtsComponent, selectors: [["app-eps-gis-for-planet-load-wmts"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 29, vars: 7, consts: [["nz-form", "", "nzLayout", "horizontal", 1, "ant-advanced-search-form", 3, "formGroup"], ["nzShowSearch", "", "nzAllowClear", "", "nzPlaceHolder", "Select a server", "formControlName", "server", 3, "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["nzShowSearch", "", "nzAllowClear", "", "nzPlaceHolder", "Select a layer", "formControlName", "layer", 3, "ngModelChange"], [3, "hidden"], ["nz-input", "", "placeholder", "placeholder", "formControlName", "platForm", 3, "disabled"], ["nz-input", "", "placeholder", "placeholder", "formControlName", "where"], ["nz-row", ""], ["nz-col", "", 1, "search-area", 3, "nzSpan"], ["nz-button", "", 3, "nzType", "click"], ["nz-button", "", 3, "click"], [3, "nzLabel", "nzValue"]], template: function EpsGisForPlanetLoadWmtsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵelementStart(1, "nz-form-item");
        i0.ɵɵelementStart(2, "nz-form-label");
        i0.ɵɵtext(3, "\u670D\u52A1");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "nz-form-control");
        i0.ɵɵelementStart(5, "nz-select", 1);
        i0.ɵɵlistener("ngModelChange", function EpsGisForPlanetLoadWmtsComponent_Template_nz_select_ngModelChange_5_listener($event) { return ctx.changeServer($event); });
        i0.ɵɵtemplate(6, EpsGisForPlanetLoadWmtsComponent_nz_option_6_Template, 1, 2, "nz-option", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "nz-form-item");
        i0.ɵɵelementStart(8, "nz-form-label");
        i0.ɵɵtext(9, "\u56FE\u5C42");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "nz-form-control");
        i0.ɵɵelementStart(11, "nz-select", 3);
        i0.ɵɵlistener("ngModelChange", function EpsGisForPlanetLoadWmtsComponent_Template_nz_select_ngModelChange_11_listener($event) { return ctx.changeLayer($event); });
        i0.ɵɵtemplate(12, EpsGisForPlanetLoadWmtsComponent_nz_option_12_Template, 1, 2, "nz-option", 2);
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
        i0.ɵɵlistener("click", function EpsGisForPlanetLoadWmtsComponent_Template_button_click_25_listener() { return ctx.Search(); });
        i0.ɵɵtext(26, "Search");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(27, "button", 10);
        i0.ɵɵlistener("click", function EpsGisForPlanetLoadWmtsComponent_Template_button_click_27_listener() { return ctx.resetForm(); });
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
EpsGisForPlanetLoadWmtsComponent = __decorate([
    ComponentRegister({
        uri: "app-eps-gis-for-planet-load-wmts",
        path: "epsplanet/components/load-wmts",
        name: "EpsGisForPlanetLoadWmtsComponent"
    })
], EpsGisForPlanetLoadWmtsComponent);
export { EpsGisForPlanetLoadWmtsComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EpsGisForPlanetLoadWmtsComponent, [{
        type: Component,
        args: [{
                selector: "app-eps-gis-for-planet-load-wmts",
                templateUrl: "./load-wmts.component.html",
                styleUrls: ["./load-wmts.component.scss"]
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC13bXRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Vwc3BsYW5ldC9jb21wb25lbnRzL2xvYWQtd210cy9sb2FkLXdtdHMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZXBzcGxhbmV0L2NvbXBvbmVudHMvbG9hZC13bXRzL2xvYWQtd210cy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsaUJBQWlCLEVBQXVCLE1BQU0sUUFBUSxDQUFDO0FBRXJGLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsTUFBTSxJQUFJLENBQUM7QUFDcEIsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFBOzs7Ozs7Ozs7Ozs7SUNBVCxnQ0FBd0c7OztJQUE3RCxzQ0FBcUIsOEJBQUE7OztJQVFoRSxnQ0FBbUc7OztJQUF6RCxzQ0FBcUIsMEJBQUE7O0lES2xFLGdDQUFnQyxTQUFoQyxnQ0FBaUMsU0FBUSxtQkFBbUI7SUFZdkUsWUFBb0IsRUFBZTtRQUNqQyxLQUFLLEVBQUUsQ0FBQztRQURVLE9BQUUsR0FBRixFQUFFLENBQWE7UUFYbkMsZUFBVSxHQUFHLEVBQUUsQ0FBQTtRQUNmLGNBQVMsR0FBRyxFQUFFLENBQUE7UUFFZCxpQkFBWSxHQUE0QyxFQUFFLENBQUM7UUFDM0QsZUFBVSxHQUFHLElBQUksQ0FBQztJQVNsQixDQUFDO0lBTkQsU0FBUztRQUNQLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDMUIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFJRCxNQUFNLENBQUMsV0FBVztRQUNoQixPQUFPLEVBQUUsSUFBSSxFQUFFLGtDQUFr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QztTQTdIWSxnQ0FBZ0M7dUZBQWhDLGdDQUFnQztjQUw1QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtDQUFrQztnQkFDNUMsV0FBVyxFQUFFLDRCQUE0QjtnQkFDekMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7YUFDMUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQmFzZVdpZGdldENvbXBvbmVudCwgQ29tcG9uZW50UmVnaXN0ZXIsIE1vZGFsTWFuYWdlclNlcnZpY2UgfSBmcm9tIFwiZXBzZ2lzXCI7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUXVlcnkgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9xdWVyeSc7XG5pbXBvcnQgcXMgZnJvbSAncXMnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5cbkBDb21wb25lbnRSZWdpc3Rlcih7XG4gIHVyaTogXCJhcHAtZXBzLWdpcy1mb3ItcGxhbmV0LWxvYWQtd210c1wiLFxuICBwYXRoOiBcImVwc3BsYW5ldC9jb21wb25lbnRzL2xvYWQtd210c1wiLFxuICBuYW1lOiBcIkVwc0dpc0ZvclBsYW5ldExvYWRXbXRzQ29tcG9uZW50XCJcbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYXBwLWVwcy1naXMtZm9yLXBsYW5ldC1sb2FkLXdtdHNcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9sb2FkLXdtdHMuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2xvYWQtd210cy5jb21wb25lbnQuc2Nzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBFcHNHaXNGb3JQbGFuZXRMb2FkV210c0NvbXBvbmVudCBleHRlbmRzIEJhc2VXaWRnZXRDb21wb25lbnQge1xuICBzZXJ2ZXJMaXN0ID0gW11cbiAgbGF5ZXJMaXN0ID0gW11cbiAgdmFsaWRhdGVGb3JtITogRm9ybUdyb3VwO1xuICBjb250cm9sQXJyYXk6IEFycmF5PHsgaW5kZXg6IG51bWJlcjsgc2hvdzogYm9vbGVhbiB9PiA9IFtdO1xuICBpc0NvbGxhcHNlID0gdHJ1ZTtcblxuXG4gIHJlc2V0Rm9ybSgpOiB2b2lkIHtcbiAgICB0aGlzLnZhbGlkYXRlRm9ybS5yZXNldCgpO1xuICAgIFF1ZXJ5LmNsZWFySGlnaExpZ2h0KCk7XG4gIH1cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIpIHtcbiAgICBzdXBlcigpO1xuICB9XG4gIHN0YXRpYyBnZXRDb21wSW5mbygpIHtcbiAgICByZXR1cm4geyBuYW1lOiBcIkVwc0dpc0ZvclBsYW5ldExvYWRXbXRzQ29tcG9uZW50XCIsIHBhdGg6IFwiZXBzcGxhbmV0L2NvbXBvbmVudHMvbG9hZC13bXRzXCIgfTtcbiAgfVxuICBTZWFyY2goKSB7XG4gICAgY29uc29sZS5sb2codGhpcy52YWxpZGF0ZUZvcm0udmFsdWUpXG4gICAgbGV0IGN6bU9iamVjdCA9IHRoaXMudmFsaWRhdGVGb3JtLnZhbHVlLnNlcnZlcjtcbiAgICBsZXQgdHlwZSA9IGN6bU9iamVjdC54YnNqSW1hZ2VyeVByb3ZpZGVyLnR5cGU7XG4gICAgbGV0IHVybCA9IGN6bU9iamVjdC54YnNqSW1hZ2VyeVByb3ZpZGVyW3R5cGVdLnVybDtcbiAgICBpZiAodXJsLmluZGV4T2YoJ2FyY2dpcycpICE9PSAtMSkge1xuICAgICAgLy8gbGV0IHJlcXVlc3RVcmwgPSBcIlwiXG4gICAgICBsZXQgaW5kZXggPSB0aGlzLnZhbGlkYXRlRm9ybS52YWx1ZS5sYXllcjtcbiAgICAgIGxldCBwYXJhbXMgPSB0aGlzLnZhbGlkYXRlRm9ybS52YWx1ZS53aGVyZTtcbiAgICAgIFF1ZXJ5LkFyY2dpc1F1ZXJ5KGN6bU9iamVjdCwgaW5kZXgsIHBhcmFtcywgcmVzID0+IHsgfSlcbiAgICB9XG4gICAgaWYgKHVybC5pbmRleE9mKCdnZW9zZXJ2ZXInKSAhPT0gLTEpIHtcbiAgICAgIGxldCBwYXJhbSA9IHRoaXMudmFsaWRhdGVGb3JtLnZhbHVlLndoZXJlO1xuICAgICAgUXVlcnkuR2Vvc2VydmVyUXVlcnkoY3ptT2JqZWN0LCBwYXJhbSlcbiAgICB9XG4gICAgLy8gbGV0IHVybD1gaHR0cDovL2xvY2FsaG9zdDo2MDgwL2FyY2dpcy9yZXN0L3NlcnZpY2VzL2R4bS9NYXBTZXJ2ZXIvMi9xdWVyeT90ZXh0PSZvYmplY3RJZHM9JnRpbWU9Jmdlb21ldHJ5PSZnZW9tZXRyeVR5cGU9ZXNyaUdlb21ldHJ5RW52ZWxvcGUmaW5TUj0mc3BhdGlhbFJlbD1lc3JpU3BhdGlhbFJlbEludGVyc2VjdHMmcmVsYXRpb25QYXJhbT0mb3V0RmllbGRzPSZyZXR1cm5HZW9tZXRyeT10cnVlJm1heEFsbG93YWJsZU9mZnNldD0mZ2VvbWV0cnlQcmVjaXNpb249Jm91dFNSPSZyZXR1cm5JZHNPbmx5PWZhbHNlJnJldHVybkNvdW50T25seT1mYWxzZSZvcmRlckJ5RmllbGRzPSZncm91cEJ5RmllbGRzRm9yU3RhdGlzdGljcz0mb3V0U3RhdGlzdGljcz0mcmV0dXJuWj1mYWxzZSZyZXR1cm5NPWZhbHNlJmdkYlZlcnNpb249JnJldHVybkRpc3RpbmN0VmFsdWVzPWZhbHNlJmY9cGpzb25gXG4gIH1cbiAgem9vbVRvKCkge1xuXG4gIH1cbiAgdGVzdCgpIHtcblxuICB9XG4gIGNoYW5nZVNlcnZlcih2YWx1ZSkge1xuICAgIHRoaXMubGF5ZXJMaXN0ID0gW107XG4gICAgbGV0IHR5cGUgPSB2YWx1ZS54YnNqSW1hZ2VyeVByb3ZpZGVyLnR5cGU7XG4gICAgbGV0IHVybCA9IHZhbHVlLnhic2pJbWFnZXJ5UHJvdmlkZXJbdHlwZV0udXJsO1xuICAgIGxldCByZXF1ZXN0VXJsID0gXCJcIlxuICAgIGlmICh1cmwuaW5kZXhPZignYXJjZ2lzJykgIT09IC0xKSB7XG4gICAgICB0aGlzLnZhbGlkYXRlRm9ybS5jb250cm9scy5wbGF0Rm9ybS5zZXRWYWx1ZShcIkFyY0dJU1wiKVxuICAgICAgaWYgKHZhbHVlLnhic2pJbWFnZXJ5UHJvdmlkZXIudHlwZSA9PSBcIldlYk1hcFRpbGVTZXJ2aWNlSW1hZ2VyeVByb3ZpZGVyXCIpIHtcbiAgICAgICAgcmVxdWVzdFVybCA9IHVybC5zcGxpdCgnTWFwU2VydmVyJylbMF0gKyBcIk1hcFNlcnZlci9sYXllcnM/Zj1wanNvblwiXG4gICAgICB9IGVsc2UgaWYgKHZhbHVlLnhic2pJbWFnZXJ5UHJvdmlkZXIudHlwZSA9PSBcIlNTV2ViTWFwU2VydmljZUltYWdlcnlQcm92aWRlclwiKSB7XG4gICAgICAgIHJlcXVlc3RVcmwgPSB1cmwuc3BsaXQoJ2FyY2dpcycpWzBdICsgJ2FyY2dpcy9yZXN0JyArIHVybC5zcGxpdCgnYXJjZ2lzJylbMV0uc3BsaXQoJ01hcFNlcnZlcicpWzBdICsgXCJNYXBTZXJ2ZXIvbGF5ZXJzP2Y9cGpzb25cIjtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVxdWVzdFVybClcbiAgICAgIH1cbiAgICAgIGF4aW9zLmdldChyZXF1ZXN0VXJsKS50aGVuKHJlcyA9PiB7XG4gICAgICAgIHJlcy5kYXRhLmxheWVycy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgIHRoaXMubGF5ZXJMaXN0LnB1c2goe1xuICAgICAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgaW5kZXg6IGl0ZW0uaWRcbiAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgfVxuICAgIGlmICh1cmwuaW5kZXhPZignZ2Vvc2VydmVyJykgIT09IC0xKSB7XG4gICAgICB0aGlzLnZhbGlkYXRlRm9ybS5jb250cm9scy5wbGF0Rm9ybS5zZXRWYWx1ZShcIkdlb1NlcnZlclwiKVxuICAgICAgaWYgKHZhbHVlLnhic2pJbWFnZXJ5UHJvdmlkZXIudHlwZSA9PSBcIldlYk1hcFRpbGVTZXJ2aWNlSW1hZ2VyeVByb3ZpZGVyXCIpIHtcbiAgICAgICAgbGV0IGxheWVyID0gdmFsdWUueGJzakltYWdlcnlQcm92aWRlclt0eXBlXS5sYXllclxuICAgICAgICB0aGlzLmxheWVyTGlzdC5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBsYXllcixcbiAgICAgICAgICBpbmRleDogMFxuICAgICAgICB9KVxuICAgICAgICAvLyByZXF1ZXN0VXJsID0gdXJsLnNwbGl0KCdNYXBTZXJ2ZXInKVswXSArIFwiTWFwU2VydmVyL2xheWVycz9mPXBqc29uXCJcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUueGJzakltYWdlcnlQcm92aWRlci50eXBlID09IFwiU1NXZWJNYXBTZXJ2aWNlSW1hZ2VyeVByb3ZpZGVyXCIpIHtcbiAgICAgICAgbGV0IGxheWVyID0gdmFsdWUueGJzakltYWdlcnlQcm92aWRlclt0eXBlXS5sYXllclxuICAgICAgICB0aGlzLmxheWVyTGlzdC5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBsYXllcixcbiAgICAgICAgICBpbmRleDogMFxuICAgICAgICB9KVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXF1ZXN0VXJsKVxuICAgICAgfVxuICAgIH1cblxuXG4gIH1cbiAgY2hhbmdlTGF5ZXIodmFsdWUpIHtcbiAgICAvLyBsZXQgdHlwZSA9IHZhbHVlLnhic2pJbWFnZXJ5UHJvdmlkZXIudHlwZTtcbiAgICAvLyBsZXQgdXJsID0gdmFsdWUueGJzakltYWdlcnlQcm92aWRlclt0eXBlXS51cmw7XG4gICAgLy8gaWYgKHVybC5pbmRleE9mKCdhcmNnaXMnKSAhPT0gLTEpIHRoaXMudmFsaWRhdGVGb3JtLmNvbnRyb2xzLnBsYXRGb3JtLnNldFZhbHVlKFwiQXJjR0lTXCIpXG4gICAgLy8gaWYgKHVybC5pbmRleE9mKCdnZW9zZXJ2ZXInKSAhPT0gLTEpIHRoaXMudmFsaWRhdGVGb3JtLmNvbnRyb2xzLnBsYXRGb3JtLnNldFZhbHVlKFwiR2VvU2VydmVyXCIpXG4gIH1cbiAgbmdPbkluaXQoKSB7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgICBjb25zb2xlLmxvZyhxcylcbiAgICB0aGlzLnZpZXcuc2NlbmVUcmVlLiRyZWZzLmxheWVybGlzdC5jaGlsZHJlbi5mb3JFYWNoKGdyb3VwID0+IHtcbiAgICAgIGlmIChncm91cC5jaGlsZHJlbikge1xuICAgICAgICBncm91cC5jaGlsZHJlbi5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgIGlmIChpdGVtLmN6bU9iamVjdC54YnNqVHlwZSAhPT0gXCJJbWFnZXJ5XCIpIHJldHVybjtcbiAgICAgICAgICB0aGlzLnNlcnZlckxpc3QucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiBpdGVtLmN6bU9iamVjdC5uYW1lLFxuICAgICAgICAgICAgY3ptT2JqZWN0OiBpdGVtLmN6bU9iamVjdFxuICAgICAgICAgIH0pXG4gICAgICAgICAgaWYgKGl0ZW0uY3ptT2JqZWN0Lnhic2pJbWFnZXJ5UHJvdmlkZXIudHlwZSA9PSBcIldlYk1hcFRpbGVTZXJ2aWNlSW1hZ2VyeVByb3ZpZGVyXCIgfHwgaXRlbS5jem1PYmplY3QueGJzakltYWdlcnlQcm92aWRlci50eXBlID09IFwiU1NXZWJNYXBTZXJ2aWNlSW1hZ2VyeVByb3ZpZGVyXCIpIHtcbiAgICAgICAgICAgIGlmIChpdGVtLmN6bU9iamVjdC54YnNqSW1hZ2VyeVByb3ZpZGVyW2l0ZW0uY3ptT2JqZWN0Lnhic2pJbWFnZXJ5UHJvdmlkZXIudHlwZV0udXJsLmluZGV4T2YoXCJhcmNnaXNcIikgIT09IC0xKSB7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMudmFsaWRhdGVGb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICBzZXJ2ZXI6IFtudWxsXSxcbiAgICAgIGxheWVyOiBbbnVsbF0sXG4gICAgICBwbGF0Rm9ybTogW251bGxdLFxuICAgICAgd2hlcmU6IFtudWxsXVxuICAgIH0pO1xuICB9XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBzdXBlci5uZ0FmdGVyVmlld0luaXQoKTtcbiAgfVxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xuICB9XG59IiwiPGZvcm0gbnotZm9ybSBbZm9ybUdyb3VwXT1cInZhbGlkYXRlRm9ybVwiIGNsYXNzPVwiYW50LWFkdmFuY2VkLXNlYXJjaC1mb3JtXCIgbnpMYXlvdXQ9XCJob3Jpem9udGFsXCI+XHJcbiAgICA8bnotZm9ybS1pdGVtPlxyXG4gICAgICAgIDxuei1mb3JtLWxhYmVsPuacjeWKoTwvbnotZm9ybS1sYWJlbD5cclxuICAgICAgICA8bnotZm9ybS1jb250cm9sPlxyXG4gICAgICAgICAgICA8bnotc2VsZWN0IG56U2hvd1NlYXJjaCBuekFsbG93Q2xlYXIgbnpQbGFjZUhvbGRlcj1cIlNlbGVjdCBhIHNlcnZlclwiIGZvcm1Db250cm9sTmFtZT1cInNlcnZlclwiIChuZ01vZGVsQ2hhbmdlKT1cImNoYW5nZVNlcnZlcigkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICA8bnotb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIHNlcnZlckxpc3RcIiBbbnpMYWJlbF09XCJpdGVtLm5hbWVcIiBbbnpWYWx1ZV09XCJpdGVtLmN6bU9iamVjdFwiPjwvbnotb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDwvbnotc2VsZWN0PlxyXG4gICAgICAgIDwvbnotZm9ybS1jb250cm9sPlxyXG4gICAgPC9uei1mb3JtLWl0ZW0+XHJcbiAgICA8bnotZm9ybS1pdGVtPlxyXG4gICAgICAgIDxuei1mb3JtLWxhYmVsPuWbvuWxgjwvbnotZm9ybS1sYWJlbD5cclxuICAgICAgICA8bnotZm9ybS1jb250cm9sPlxyXG4gICAgICAgICAgICA8bnotc2VsZWN0IG56U2hvd1NlYXJjaCBuekFsbG93Q2xlYXIgbnpQbGFjZUhvbGRlcj1cIlNlbGVjdCBhIGxheWVyXCIgZm9ybUNvbnRyb2xOYW1lPVwibGF5ZXJcIiAobmdNb2RlbENoYW5nZSk9XCJjaGFuZ2VMYXllcigkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICA8bnotb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGxheWVyTGlzdFwiIFtuekxhYmVsXT1cIml0ZW0ubmFtZVwiIFtuelZhbHVlXT1cIml0ZW0uaW5kZXhcIj48L256LW9wdGlvbj5cclxuICAgICAgICAgICAgICA8L256LXNlbGVjdD5cclxuICAgICAgICA8L256LWZvcm0tY29udHJvbD5cclxuICAgIDwvbnotZm9ybS1pdGVtPlxyXG4gICAgPG56LWZvcm0taXRlbSBbaGlkZGVuXT10cnVlPlxyXG4gICAgICAgIDxuei1mb3JtLWxhYmVsPuacjeWKoeW5s+WPsDwvbnotZm9ybS1sYWJlbD5cclxuICAgICAgICA8bnotZm9ybS1jb250cm9sPlxyXG4gICAgICAgICAgICA8aW5wdXQgbnotaW5wdXQgcGxhY2Vob2xkZXI9XCJwbGFjZWhvbGRlclwiIGZvcm1Db250cm9sTmFtZT1cInBsYXRGb3JtXCIgW2Rpc2FibGVkXT1cInRydWVcIiAvPlxyXG4gICAgICAgIDwvbnotZm9ybS1jb250cm9sPlxyXG4gICAgPC9uei1mb3JtLWl0ZW0+XHJcbiAgICA8bnotZm9ybS1pdGVtPlxyXG4gICAgICAgIDxuei1mb3JtLWxhYmVsPuadoeS7tjwvbnotZm9ybS1sYWJlbD5cclxuICAgICAgICA8bnotZm9ybS1jb250cm9sPlxyXG4gICAgICAgICAgICA8aW5wdXQgbnotaW5wdXQgcGxhY2Vob2xkZXI9XCJwbGFjZWhvbGRlclwiIGZvcm1Db250cm9sTmFtZT1cIndoZXJlXCIvPlxyXG4gICAgICAgIDwvbnotZm9ybS1jb250cm9sPlxyXG4gICAgPC9uei1mb3JtLWl0ZW0+XHJcbiAgICA8ZGl2IG56LXJvdz5cclxuICAgICAgICA8ZGl2IG56LWNvbCBbbnpTcGFuXT1cIjI0XCIgY2xhc3M9XCJzZWFyY2gtYXJlYVwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG56LWJ1dHRvbiBbbnpUeXBlXT1cIidwcmltYXJ5J1wiIChjbGljayk9XCJTZWFyY2goKVwiPlNlYXJjaDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG56LWJ1dHRvbiAoY2xpY2spPVwicmVzZXRGb3JtKClcIj5DbGVhcjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZm9ybT4iXX0=