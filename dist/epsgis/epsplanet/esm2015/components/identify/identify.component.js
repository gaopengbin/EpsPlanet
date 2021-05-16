import { __decorate } from "tslib";
import { Component } from "@angular/core";
import { ComponentRegister } from "epsgis";
import { BasePlanetWidgetComponent } from '../base-widget/base-widget.component';
import * as i0 from "@angular/core";
import * as i1 from "../../utils/identify";
import * as i2 from "ng-zorro-antd/switch";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/common";
import * as i5 from "ng-zorro-antd/icon";
import * as i6 from "ng-zorro-antd/core/transition-patch";
import * as i7 from "ng-zorro-antd/table";
function PlanetIdentifyComponent_tr_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelementStart(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(data_r2.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(data_r2.value);
} }
const _c0 = function (a0, a1) { return { "left": a0, "bottom": a1 }; };
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
PlanetIdentifyComponent.ɵfac = function PlanetIdentifyComponent_Factory(t) { return new (t || PlanetIdentifyComponent)(i0.ɵɵdirectiveInject(i1.Identify)); };
PlanetIdentifyComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PlanetIdentifyComponent, selectors: [["epsgis-planet-identify"]], hostAttrs: ["title", "\u8BC6\u522B"], hostVars: 2, hostBindings: function PlanetIdentifyComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("jimu-widget-onscreen-icon", true);
    } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 14, vars: 12, consts: [[3, "ngModel", "ngModelChange"], [1, "dialog", 3, "hidden", "ngStyle"], [1, "panel"], ["nz-icon", "", "nzType", "close", "nzTheme", "outline", 2, "float", "right", 3, "click"], [3, "nzData", "nzFrontPagination", "nzShowPagination", "nzTitle"], ["basicTable", ""], [4, "ngFor", "ngForOf"], ["nz-icon", "", "nzType", "zoom-in", "nzTheme", "outline", 3, "click"], [1, "arrow"]], template: function PlanetIdentifyComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "nz-switch", 0);
        i0.ɵɵlistener("ngModelChange", function PlanetIdentifyComponent_Template_nz_switch_ngModelChange_0_listener($event) { return ctx.switchValue = $event; })("ngModelChange", function PlanetIdentifyComponent_Template_nz_switch_ngModelChange_0_listener($event) { return ctx.switch($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "span");
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "i", 3);
        i0.ɵɵlistener("click", function PlanetIdentifyComponent_Template_i_click_5_listener() { return ctx.close(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "nz-table", 4, 5);
        i0.ɵɵelementStart(8, "tbody");
        i0.ɵɵtemplate(9, PlanetIdentifyComponent_tr_9_Template, 5, 2, "tr", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "i", 7);
        i0.ɵɵlistener("click", function PlanetIdentifyComponent_Template_i_click_10_listener() { return ctx.zoomTo(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "span");
        i0.ɵɵtext(12, "\u7F29\u653E\u81F3");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(13, "div", 8);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(7);
        i0.ɵɵproperty("ngModel", ctx.switchValue);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("hidden", !ctx.showInfo)("ngStyle", i0.ɵɵpureFunction2(9, _c0, ctx.winPos[0] - 65 + "px", ctx.winPos[3] + "px"));
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.title);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("nzData", ctx.propertyList)("nzFrontPagination", false)("nzShowPagination", false)("nzTitle", null);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", _r0.data);
    } }, directives: [i2.NzSwitchComponent, i3.NgControlStatus, i3.NgModel, i4.NgStyle, i5.NzIconDirective, i6.ɵNzTransitionPatchDirective, i7.NzTableComponent, i7.NzTbodyComponent, i4.NgForOf, i7.NzTrDirective, i7.NzTableCellDirective], styles: [".ant-table-tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%], .ant-table-thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%], .ant-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%], .ant-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%]{padding:10px}  .ssmodal_content{overflow:overlay!important}.dialog[_ngcontent-%COMP%]{position:absolute;width:300px;min-height:60px;color:#000;border-radius:5px;cursor:pointer}.dialog[_ngcontent-%COMP%],   .ant-table-tbody>tr>td,   .ant-table-thead>tr>th{padding:5px}  tr.ant-table-row.ng-star-inserted:nth-child(odd){background-color:hsla(0,0%,66.3%,.6)}.arrow[_ngcontent-%COMP%]{margin-left:50px;width:0;height:0;border-top:10px solid #fff;border-left:10px solid transparent;border-right:10px solid transparent}.panel[_ngcontent-%COMP%]{background-color:#fff;padding:5px}.panel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#000}.panel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{color:#0ff}.panel[_ngcontent-%COMP%]   .ant-table-wrapper[_ngcontent-%COMP%]{max-height:350px;overflow:overlay}"] });
PlanetIdentifyComponent = __decorate([
    ComponentRegister({
        uri: "epsgis-planet-identify",
        path: "epsplanet/components/identify",
        name: "PlanetIdentifyComponent"
    })
], PlanetIdentifyComponent);
export { PlanetIdentifyComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PlanetIdentifyComponent, [{
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
    }], function () { return [{ type: i1.Identify }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpZnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZXBzcGxhbmV0L2NvbXBvbmVudHMvaWRlbnRpZnkvaWRlbnRpZnkuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZXBzcGxhbmV0L2NvbXBvbmVudHMvaWRlbnRpZnkvaWRlbnRpZnkuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzNDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7Ozs7Ozs7O0lDU2pFLDBCQUF5QztJQUNyQywwQkFBSTtJQUFBLFlBQWU7SUFBQSxpQkFBSztJQUN4QiwwQkFBSTtJQUFBLFlBQWdCO0lBQUEsaUJBQUs7SUFDN0IsaUJBQUs7OztJQUZHLGVBQWU7SUFBZixrQ0FBZTtJQUNmLGVBQWdCO0lBQWhCLG1DQUFnQjs7O0lETTNCLHVCQUF1QixTQUF2Qix1QkFBd0IsU0FBUSx5QkFBeUI7SUFZcEUsWUFBb0IsUUFBa0I7UUFDcEMsS0FBSyxFQUFFLENBQUM7UUFEVSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBWHRDLFdBQU0sR0FBZSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLFVBQUssR0FBRyxFQUFFLENBQUE7UUFDVixTQUFJLEdBQUcsSUFBSSxDQUFBO1FBQ1gsaUJBQVksR0FBRztZQUNiO2dCQUNFLElBQUksRUFBRSxHQUFHO2dCQUNULEtBQUssRUFBRSxDQUFDO2FBQ1Q7U0FDRixDQUFDO1FBQ0YsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixnQkFBVyxHQUFHLEtBQUssQ0FBQztJQUdwQixDQUFDO0lBQ0QsYUFB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S0FDaEMsQ0FBQztHQVdXLHVCQUF1QixDQXFJbkM7U0FySVksdUJBQXVCO3VGQUF2Qix1QkFBdUI7Y0FWbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFdBQVcsRUFBRSwyQkFBMkI7Z0JBQ3hDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO2dCQUN4QyxJQUFJLEVBQUU7b0JBQ0osbUNBQW1DLEVBQUUsTUFBTTtvQkFFM0MsT0FBTyxFQUFFLElBQUk7aUJBQ2Q7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21wb25lbnRSZWdpc3RlciB9IGZyb20gXCJlcHNnaXNcIjtcbmltcG9ydCB7IEJhc2VQbGFuZXRXaWRnZXRDb21wb25lbnQgfSBmcm9tICcuLi9iYXNlLXdpZGdldC9iYXNlLXdpZGdldC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWRlbnRpZnkgfSBmcm9tICcuLi8uLi91dGlscy9pZGVudGlmeSc7XG5AQ29tcG9uZW50UmVnaXN0ZXIoe1xuICB1cmk6IFwiZXBzZ2lzLXBsYW5ldC1pZGVudGlmeVwiLFxuICBwYXRoOiBcImVwc3BsYW5ldC9jb21wb25lbnRzL2lkZW50aWZ5XCIsXG4gIG5hbWU6IFwiUGxhbmV0SWRlbnRpZnlDb21wb25lbnRcIlxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJlcHNnaXMtcGxhbmV0LWlkZW50aWZ5XCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vaWRlbnRpZnkuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2lkZW50aWZ5LmNvbXBvbmVudC5zY3NzXCJdLFxuICBob3N0OiB7XG4gICAgXCJbY2xhc3MuamltdS13aWRnZXQtb25zY3JlZW4taWNvbl1cIjogXCJ0cnVlXCIsXG4gICAgLy8gXCJbY2xhc3MuaWNvbl1cIjogXCJ0cnVlXCIsXG4gICAgXCJ0aXRsZVwiOiBcIuivhuWIq1wiXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgUGxhbmV0SWRlbnRpZnlDb21wb25lbnQgZXh0ZW5kcyBCYXNlUGxhbmV0V2lkZ2V0Q29tcG9uZW50IHtcbiAgd2luUG9zOiBBcnJheTxhbnk+ID0gWzAsIDAsIDAsIDBdO1xuICB0aXRsZSA9IFwiXCJcbiAgcGluMSA9IG51bGxcbiAgcHJvcGVydHlMaXN0ID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiMVwiLFxuICAgICAgdmFsdWU6IDJcbiAgICB9XG4gIF07XG4gIHNob3dJbmZvID0gZmFsc2U7XG4gIHN3aXRjaFZhbHVlID0gZmFsc2U7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaWRlbnRpZnk6IElkZW50aWZ5KSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuICBjcmVhdGVJbmZvV2luKCkge1xuICAgIGxldCB3aW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3aW4uY2xhc3NOYW1lID0gXCJkaWFsb2dcIjtcbiAgICB3aW4uc3R5bGUubGVmdCA9IHRoaXMud2luUG9zWzBdIC0gODAgKyBcInB4XCI7XG4gICAgd2luLnN0eWxlLmJvdHRvbSA9IHRoaXMud2luUG9zWzNdIC0gMzIwICsgXCJweFwiO1xuICAgIHdpbi5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cInBhbmVsXCI+XG4gICAgPHNwYW4+JHt0aGlzLnRpdGxlfTwvc3Bhbj48aSBuei1pY29uIG56VHlwZT1cImNsb3NlXCIgbnpUaGVtZT1cIm91dGxpbmVcIiAoY2xpY2spPVwiY2xvc2UoKVwiIHN0eWxlPVwiZmxvYXQ6IHJpZ2h0O1wiPjwvaT5cbiAgICA8bnotdGFibGUgI2Jhc2ljVGFibGUgW256RGF0YV09XCJwcm9wZXJ0eUxpc3RcIiBbbnpGcm9udFBhZ2luYXRpb25dPVwiZmFsc2VcIiBbbnpTaG93UGFnaW5hdGlvbl09XCJmYWxzZVwiXG4gICAgICAgIFtuelRpdGxlXT1cIm51bGxcIj5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgPHRyICpuZ0Zvcj1cImxldCBkYXRhIG9mIGJhc2ljVGFibGUuZGF0YVwiPlxuICAgICAgICAgICAgICAgIDx0ZD57eyBkYXRhLm5hbWUgfX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57eyBkYXRhLnZhbHVlIH19PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgPC9uei10YWJsZT5cbiAgICA8aSBuei1pY29uIG56VHlwZT1cInpvb20taW5cIiBuelRoZW1lPVwib3V0bGluZVwiIChjbGljayk9XCJ6b29tVG8oKVwiPjwvaT48c3Bhbj7nvKnmlL7oh7M8L3NwYW4+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJhcnJvd1wiPjwvZGl2PmA7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNlc2l1bS12aWV3ZXJcIilbMF0uYXBwZW5kKHdpbik7XG4gICAgcmV0dXJuIHdpblxuICB9XG4gIC8v5Yid5aeL5YyW5b2x5YOP54K56YCJ6K+G5Yir5Yqf6IO9XG4gIEluaXQoKSB7XG4gICAgbGV0IHdpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkaWFsb2dcIilbMF07XG4gICAgd2luLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQod2luKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2VzaXVtLXZpZXdlclwiKVswXS5hcHBlbmQod2luKTtcbiAgICB3aW5kb3dbJ3Nob3dJbmZvJ10gPSB0aGlzLnNob3dJbmZvO1xuICAgIHRoaXMudmlldy5zY2VuZVRyZWUuJHJlZnMucGluLmNoaWxkcmVuLnB1c2goe1xuICAgICAgXCJyZWZcIjogJ3BpbjEnLFxuICAgICAgXCJjem1PYmplY3RcIjoge1xuICAgICAgICBcIm5hbWVcIjogJ1BpbjEnLFxuICAgICAgICBcInhic2pUeXBlXCI6IFwiUGluXCIsXG4gICAgICAgIFwicG9zaXRpb25cIjogWzEsIDEsIDBdLFxuICAgICAgICBcIm5lYXJcIjogMzAsXG4gICAgICAgIFwic2hvd1wiOiBmYWxzZSxcbiAgICAgICAgXCJjdXN0b21Qcm9wXCI6IHRoaXMuc2hvd0luZm9cbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMucGluMSA9IHRoaXMudmlldy5zY2VuZVRyZWUuJHJlZnMucGluMS5jem1PYmplY3Q7XG4gICAgWEUuTVZWTS53YXRjaCgoKSA9PiB0aGlzLnBpbjEud2luUG9zLCAoKSA9PiB7XG4gICAgICAvLyBkZWJ1Z2dlclxuICAgICAgdGhpcy53aW5Qb3MgPSB0aGlzLnBpbjEud2luUG9zXG4gICAgICBjb25zb2xlLmxvZyhcIndpblwiLCB0aGlzLndpblBvcylcbiAgICAgIC8vIHdpbltcInN0eWxlXCJdLmxlZnQgPSB0aGlzLndpblBvc1swXSAtIDgwICsgXCJweFwiO1xuICAgICAgLy8gd2luW1wic3R5bGVcIl0uYm90dG9tID0gdGhpcy53aW5Qb3NbM10gLSAzMjAgKyBcInB4XCI7XG4gICAgfSk7XG4gICAgWEUuTVZWTS53YXRjaCgoKSA9PiB0aGlzLnBpbjEuY3VzdG9tUHJvcCwgKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnBpbjEuY3VzdG9tUHJvcCkge1xuICAgICAgICB0aGlzLnNob3dJbmZvID0gZmFsc2VcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh0aGlzLnZpZXcgPT0gbnVsbCkgcmV0dXJuO1xuICAgIHRoaXMudmlldy5zY2VuZVRyZWUuJHJlZnMubGF5ZXJsaXN0LmNoaWxkcmVuLmZvckVhY2goZ3JvdXAgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coZ3JvdXApXG4gICAgICBpZiAoZ3JvdXAuY2hpbGRyZW4pIHtcbiAgICAgICAgZ3JvdXAuY2hpbGRyZW4uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpdGVtKVxuICAgICAgICAgIGlmIChpdGVtLmN6bU9iamVjdC54YnNqVHlwZSAhPT0gXCJJbWFnZXJ5XCIpIHJldHVybjtcbiAgICAgICAgICBpZiAoaXRlbS5jem1PYmplY3QueGJzakltYWdlcnlQcm92aWRlci50eXBlID09IFwiV2ViTWFwVGlsZVNlcnZpY2VJbWFnZXJ5UHJvdmlkZXJcIiB8fCBpdGVtLmN6bU9iamVjdC54YnNqSW1hZ2VyeVByb3ZpZGVyLnR5cGUgPT0gXCJTU1dlYk1hcFNlcnZpY2VJbWFnZXJ5UHJvdmlkZXJcIikge1xuICAgICAgICAgICAgaWYgKGl0ZW0uY3ptT2JqZWN0Lnhic2pJbWFnZXJ5UHJvdmlkZXJbaXRlbS5jem1PYmplY3QueGJzakltYWdlcnlQcm92aWRlci50eXBlXS51cmwuaW5kZXhPZihcImFyY2dpc1wiKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgdGhpcy5pZGVudGlmeS5nZXRMYXllcnMoaXRlbS5jem1PYmplY3QsIHRoaXMudmlldywgcmVzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlczpcIiwgcmVzKVxuICAgICAgICAgICAgICAgIHRoaXMucGluMS5jdXN0b21Qcm9wID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0luZm8gPSB0cnVlXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wZXJ0eUxpc3QgPSByZXNcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuaWRlbnRpZnkuR2V0RmVhdHVyZUluZm8oaXRlbS5jem1PYmplY3QsIHRoaXMudmlldywgJ3BvaW50JywgcmVzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtLmN6bU9iamVjdC54YnNqSW1hZ2VyeVByb3ZpZGVyW2l0ZW0uY3ptT2JqZWN0Lnhic2pJbWFnZXJ5UHJvdmlkZXIudHlwZV0pXG4gICAgICAgICAgICAgICAgdGhpcy50aXRsZSA9IGl0ZW0uY3ptT2JqZWN0Lnhic2pJbWFnZXJ5UHJvdmlkZXJbaXRlbS5jem1PYmplY3QueGJzakltYWdlcnlQcm92aWRlci50eXBlXS5sYXllclxuICAgICAgICAgICAgICAgIHRoaXMucGluMS5jdXN0b21Qcm9wID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0luZm8gPSB0cnVlXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wZXJ0eUxpc3QgPSByZXNcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGNsb3NlKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiY2xvc2VcIilcbiAgICB0aGlzLnNob3dJbmZvID0gZmFsc2U7XG4gIH1cbiAgem9vbVRvKCkge1xuICAgIGxldCBlbnRpdHlDb2xsZWN0aW9uID0gdGhpcy52aWV3LmN6bS52aWV3ZXIuZGF0YVNvdXJjZXMuZ2V0QnlOYW1lKFwiaGlnaExpZ2h0XCIpWzBdLmVudGl0aWVzXG4gICAgdGhpcy52aWV3LmN6bS52aWV3ZXIuZmx5VG8oZW50aXR5Q29sbGVjdGlvbilcbiAgfVxuICBzd2l0Y2goJGV2ZW50KSB7XG4gICAgd2luZG93W1wiYWxsb3dDbGlja1wiXSA9ICRldmVudDtcbiAgICBpZiAoISRldmVudCkge1xuICAgICAgdGhpcy5pZGVudGlmeS5DbGVhckhpZ2hMaWdodCgpO1xuICAgIH1cblxuICB9XG4gIHRlc3QoKSB7XG4gICAgdGhpcy5pZGVudGlmeS5nZXRMYXllcnModGhpcy52aWV3LnNjZW5lVHJlZS4kcmVmcy5sYXllcmxpc3QuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uY3ptT2JqZWN0LCB0aGlzLnZpZXcsIHJlcyA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICB0aGlzLnBpbjEuY3VzdG9tUHJvcCA9IHRydWVcbiAgICAgIHRoaXMuc2hvd0luZm8gPSB0cnVlXG4gICAgICB0aGlzLnByb3BlcnR5TGlzdCA9IHJlc1xuICAgIH0pXG5cblxuICB9XG4gIG5nT25Jbml0KCkge1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gICAgdGhpcy5Jbml0KCk7XG4gIH1cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHN1cGVyLm5nQWZ0ZXJWaWV3SW5pdCgpO1xuICB9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XG4gIH1cbn1cblxuIiwiPG56LXN3aXRjaCBbKG5nTW9kZWwpXT1cInN3aXRjaFZhbHVlXCIgKG5nTW9kZWxDaGFuZ2UpPVwic3dpdGNoKCRldmVudClcIj48L256LXN3aXRjaD5cclxuPCEtLSA8YnV0dG9uIG56LWJ1dHRvbiAoY2xpY2spPVwidGVzdCgpXCI+dGVzdDwvYnV0dG9uPiAtLT5cclxuPCEtLSA8ZXBzZ2lzLXBsYW5ldC1sYXllci1tYW5hZ2VyPjwvZXBzZ2lzLXBsYW5ldC1sYXllci1tYW5hZ2VyPiAtLT5cclxuXHJcbjxkaXYgW2hpZGRlbl09XCIhc2hvd0luZm9cIiBjbGFzcz1cImRpYWxvZ1wiXHJcbiAgICBbbmdTdHlsZV09XCJ7ICdsZWZ0JzogKHdpblBvc1swXS02NSApICsgJ3B4JywgJ2JvdHRvbSc6ICh3aW5Qb3NbM10pICsgJ3B4JyB9XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicGFuZWxcIj5cclxuICAgICAgICA8c3Bhbj57e3RpdGxlfX08L3NwYW4+PGkgbnotaWNvbiBuelR5cGU9XCJjbG9zZVwiIG56VGhlbWU9XCJvdXRsaW5lXCIgKGNsaWNrKT1cImNsb3NlKClcIiBzdHlsZT1cImZsb2F0OiByaWdodDtcIj48L2k+XHJcbiAgICAgICAgPG56LXRhYmxlICNiYXNpY1RhYmxlIFtuekRhdGFdPVwicHJvcGVydHlMaXN0XCIgW256RnJvbnRQYWdpbmF0aW9uXT1cImZhbHNlXCIgW256U2hvd1BhZ2luYXRpb25dPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICBbbnpUaXRsZV09XCJudWxsXCI+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgZGF0YSBvZiBiYXNpY1RhYmxlLmRhdGFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgZGF0YS5uYW1lIH19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgZGF0YS52YWx1ZSB9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvbnotdGFibGU+XHJcbiAgICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJ6b29tLWluXCIgbnpUaGVtZT1cIm91dGxpbmVcIiAoY2xpY2spPVwiem9vbVRvKClcIj48L2k+PHNwYW4+57yp5pS+6IezPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYXJyb3dcIj48L2Rpdj5cclxuPC9kaXY+Il19