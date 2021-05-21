import { __decorate } from "tslib";
import { Component } from "@angular/core";
import { ComponentRegister } from "epsgis";
import { BasePlanetWidgetComponent } from '../base-widget/base-widget.component';
import * as i0 from "@angular/core";
import * as i1 from "../../utils/identify";
import * as i2 from "ng-zorro-antd/icon";
import * as i3 from "ng-zorro-antd/core/transition-patch";
import * as i4 from "@angular/common";
import * as i5 from "ng-zorro-antd/table";
function PlanetIdentifyComponent_tr_10_Template(rf, ctx) { if (rf & 1) {
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
        this.czmObjList = [];
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
        this.bindIndentify(this.view.sceneTree.$refs.layerlist);
        this.identify.test(this.czmObjList, this.view, res => {
            console.log("res:", res);
            this.pin1.customProp = true;
            this.showInfo = true;
            this.propertyList = res;
        });
        this.identify.pickModel(this.view, (res, handler) => {
            this.pin1.customProp = true;
            this.showInfo = true;
            this.propertyList = res;
        });
    }
    bindIndentify(list) {
        if (list.children && list.children.length > 0) {
            list.children.forEach(item => {
                if (item.children && item.children.length > 0) {
                    this.bindIndentify(item);
                }
                else {
                    this.bindClick(item);
                }
            });
        }
        else {
            this.bindClick(list);
        }
    }
    bindClick(item) {
        if (item.czmObject.xbsjType == "Imagery") {
            if (item.czmObject.xbsjImageryProvider.type == "WebMapTileServiceImageryProvider" || item.czmObject.xbsjImageryProvider.type == "WebMapServiceImageryProvider") {
                if (item.czmObject.xbsjImageryProvider[item.czmObject.xbsjImageryProvider.type].url.indexOf("arcgis") !== -1) {
                    this.czmObjList.push(item.czmObject);
                }
                else {
                    this.identify.GetFeatureInfo(item.czmObject, this.view, 'point', res => {
                        this.title = item.czmObject.xbsjImageryProvider[item.czmObject.xbsjImageryProvider.type].layer;
                        this.pin1.customProp = true;
                        this.showInfo = true;
                        this.propertyList = res;
                    });
                }
            }
        }
        else if (item.czmObject.xbsjType == "Tileset") {
        }
    }
    close() {
        this.showInfo = false;
    }
    zoomTo() {
        let entityCollection = this.view.czm.viewer.dataSources.getByName("highLight")[0].entities;
        this.view.czm.viewer.flyTo(entityCollection);
    }
    switch(e) {
        let earth = this.view;
        console.log(this.czmObjList);
        if (e.srcElement.style.color == 'aqua') {
            e.srcElement.style.color = "";
        }
        else {
            e.srcElement.style.color = 'aqua';
        }
        earth.epsplanet.allowClick = !earth.epsplanet.allowClick;
        if (!earth.epsplanet.allowClick) {
            this.view.interaction.picking.enabled = false;
            this.view.interaction.picking.hoverEnable = false;
            this.identify.ClearHighLight();
        }
        else {
            this.view.interaction.picking.enabled = true;
            this.view.interaction.picking.hoverEnable = true;
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
    } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 15, vars: 12, consts: [["title", "\u8BC6\u522B", 1, "jimu-widget-onscreen-icon"], ["nz-icon", "", 3, "nzIconfont", "click"], [1, "dialog", 3, "hidden", "ngStyle"], [1, "panel"], ["nz-icon", "", "nzType", "close", "nzTheme", "outline", 2, "float", "right", 3, "click"], [3, "nzData", "nzFrontPagination", "nzShowPagination", "nzTitle"], ["basicTable", ""], [4, "ngFor", "ngForOf"], ["nz-icon", "", "nzType", "zoom-in", "nzTheme", "outline", 3, "click"], [1, "arrow"]], template: function PlanetIdentifyComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "i", 1);
        i0.ɵɵlistener("click", function PlanetIdentifyComponent_Template_i_click_1_listener($event) { return ctx.switch($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵelementStart(4, "span");
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "i", 4);
        i0.ɵɵlistener("click", function PlanetIdentifyComponent_Template_i_click_6_listener() { return ctx.close(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "nz-table", 5, 6);
        i0.ɵɵelementStart(9, "tbody");
        i0.ɵɵtemplate(10, PlanetIdentifyComponent_tr_10_Template, 5, 2, "tr", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "i", 8);
        i0.ɵɵlistener("click", function PlanetIdentifyComponent_Template_i_click_11_listener() { return ctx.zoomTo(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "span");
        i0.ɵɵtext(13, "\u7F29\u653E\u81F3");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(14, "div", 9);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(8);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("nzIconfont", "icon-epsgis-weibiaoti-");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("hidden", !ctx.showInfo)("ngStyle", i0.ɵɵpureFunction2(9, _c0, ctx.winPos[0] - 65 + "px", ctx.winPos[3] + "px"));
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.title);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("nzData", ctx.propertyList)("nzFrontPagination", false)("nzShowPagination", false)("nzTitle", null);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", _r0.data);
    } }, directives: [i2.NzIconDirective, i3.ɵNzTransitionPatchDirective, i4.NgStyle, i5.NzTableComponent, i5.NzTbodyComponent, i4.NgForOf, i5.NzTrDirective, i5.NzTableCellDirective], styles: [".ant-table-tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%], .ant-table-thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%], .ant-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%], .ant-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%]{padding:10px}  .ssmodal_content{overflow:overlay!important}.dialog[_ngcontent-%COMP%]{position:absolute;width:300px;min-height:60px;color:#000;border-radius:5px;cursor:pointer}.dialog[_ngcontent-%COMP%],   .ant-table-tbody>tr>td,   .ant-table-thead>tr>th{padding:5px}  tr.ant-table-row.ng-star-inserted:nth-child(odd){background-color:hsla(0,0%,66.3%,.6)}.arrow[_ngcontent-%COMP%]{margin-left:50px;width:0;height:0;border-top:10px solid #fff;border-left:10px solid transparent;border-right:10px solid transparent}.panel[_ngcontent-%COMP%]{background-color:#fff;padding:5px}.panel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#000}.panel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{color:#0ff}.panel[_ngcontent-%COMP%]   .ant-table-wrapper[_ngcontent-%COMP%]{max-height:350px;overflow:overlay}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpZnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZXBzcGxhbmV0L2NvbXBvbmVudHMvaWRlbnRpZnkvaWRlbnRpZnkuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZXBzcGxhbmV0L2NvbXBvbmVudHMvaWRlbnRpZnkvaWRlbnRpZnkuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzNDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7Ozs7OztJQ1lqRSwwQkFBeUM7SUFDckMsMEJBQUk7SUFBQSxZQUFlO0lBQUEsaUJBQUs7SUFDeEIsMEJBQUk7SUFBQSxZQUFnQjtJQUFBLGlCQUFLO0lBQzdCLGlCQUFLOzs7SUFGRyxlQUFlO0lBQWYsa0NBQWU7SUFDZixlQUFnQjtJQUFoQixtQ0FBZ0I7OztJREczQix1QkFBdUIsU0FBdkIsdUJBQXdCLFNBQVEseUJBQXlCO0lBYXBFLFlBQW9CLFFBQWtCO1FBQ3BDLEtBQUssRUFBRSxDQUFDO1FBRFUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQVp0QyxXQUFNLEdBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNsQyxVQUFLLEdBQUcsRUFBRSxDQUFBO1FBQ1YsU0FBSSxHQUFHLElBQUksQ0FBQTtRQUNYLGlCQUFZLEdBQUc7WUFDYjtnQkFDRSxJQUFJLEVBQUUsR0FBRztnQkFDVCxLQUFLLEVBQUUsQ0FBQzthQUNUO1NBQ0YsQ0FBQztRQUNGLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsZUFBVSxHQUFHLEVBQUUs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Q04sMEJBQXlCO1FBQzdCLGlCQUFNOzs7UUFyQlMsZUFBdUM7UUFBdkMscURBQXVDO1FBS2pELGVBQW9CO1FBQXBCLHNDQUFvQix3RkFBQTtRQUdYLGVBQVM7UUFBVCwrQkFBUztRQUNPLGVBQXVCO1FBQXZCLHlDQUF1Qiw0QkFBQSwyQkFBQSxpQkFBQTtRQUdoQixlQUFrQjtRQUFsQixrQ0FBa0I7O0FESzFDLHVCQUF1QjtJQWZuQyxpQkFBaUIsQ0FBQztRQUNqQixHQUFHLEVBQUUsd0JBQXdCO1FBQzdCLElBQUksRUFBRSwrQkFBK0I7UUFDckMsSUFBSSxFQUFFLHlCQUF5QjtLQUNoQyxDQUFDO0dBV1csdUJBQXVCLENBZ0xuQztTQWhMWSx1QkFBdUI7dUZBQXZCLHVCQUF1QjtjQVZuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsV0FBVyxFQUFFLDJCQUEyQjtnQkFDeEMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7Z0JBQ3hDLElBQUksRUFBRTtvQkFDSixtQ0FBbUMsRUFBRSxNQUFNO29CQUUzQyxPQUFPLEVBQUUsSUFBSTtpQkFDZDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbXBvbmVudFJlZ2lzdGVyIH0gZnJvbSBcImVwc2dpc1wiO1xuaW1wb3J0IHsgQmFzZVBsYW5ldFdpZGdldENvbXBvbmVudCB9IGZyb20gJy4uL2Jhc2Utd2lkZ2V0L2Jhc2Utd2lkZ2V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZGVudGlmeSB9IGZyb20gJy4uLy4uL3V0aWxzL2lkZW50aWZ5JztcbkBDb21wb25lbnRSZWdpc3Rlcih7XG4gIHVyaTogXCJlcHNnaXMtcGxhbmV0LWlkZW50aWZ5XCIsXG4gIHBhdGg6IFwiZXBzcGxhbmV0L2NvbXBvbmVudHMvaWRlbnRpZnlcIixcbiAgbmFtZTogXCJQbGFuZXRJZGVudGlmeUNvbXBvbmVudFwiXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImVwc2dpcy1wbGFuZXQtaWRlbnRpZnlcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9pZGVudGlmeS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vaWRlbnRpZnkuY29tcG9uZW50LnNjc3NcIl0sXG4gIGhvc3Q6IHtcbiAgICBcIltjbGFzcy5qaW11LXdpZGdldC1vbnNjcmVlbi1pY29uXVwiOiBcInRydWVcIixcbiAgICAvLyBcIltjbGFzcy5pY29uXVwiOiBcInRydWVcIixcbiAgICBcInRpdGxlXCI6IFwi6K+G5YirXCJcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBQbGFuZXRJZGVudGlmeUNvbXBvbmVudCBleHRlbmRzIEJhc2VQbGFuZXRXaWRnZXRDb21wb25lbnQge1xuICB3aW5Qb3M6IEFycmF5PGFueT4gPSBbMCwgMCwgMCwgMF07XG4gIHRpdGxlID0gXCJcIlxuICBwaW4xID0gbnVsbFxuICBwcm9wZXJ0eUxpc3QgPSBbXG4gICAge1xuICAgICAgbmFtZTogXCIxXCIsXG4gICAgICB2YWx1ZTogMlxuICAgIH1cbiAgXTtcbiAgc2hvd0luZm8gPSBmYWxzZTtcbiAgc3dpdGNoVmFsdWUgPSBmYWxzZTtcbiAgY3ptT2JqTGlzdCA9IFtdXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaWRlbnRpZnk6IElkZW50aWZ5KSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuICBjcmVhdGVJbmZvV2luKCkge1xuICAgIGxldCB3aW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3aW4uY2xhc3NOYW1lID0gXCJkaWFsb2dcIjtcbiAgICB3aW4uc3R5bGUubGVmdCA9IHRoaXMud2luUG9zWzBdIC0gODAgKyBcInB4XCI7XG4gICAgd2luLnN0eWxlLmJvdHRvbSA9IHRoaXMud2luUG9zWzNdIC0gMzIwICsgXCJweFwiO1xuICAgIHdpbi5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cInBhbmVsXCI+XG4gICAgPHNwYW4+JHt0aGlzLnRpdGxlfTwvc3Bhbj48aSBuei1pY29uIG56VHlwZT1cImNsb3NlXCIgbnpUaGVtZT1cIm91dGxpbmVcIiAoY2xpY2spPVwiY2xvc2UoKVwiIHN0eWxlPVwiZmxvYXQ6IHJpZ2h0O1wiPjwvaT5cbiAgICA8bnotdGFibGUgI2Jhc2ljVGFibGUgW256RGF0YV09XCJwcm9wZXJ0eUxpc3RcIiBbbnpGcm9udFBhZ2luYXRpb25dPVwiZmFsc2VcIiBbbnpTaG93UGFnaW5hdGlvbl09XCJmYWxzZVwiXG4gICAgICAgIFtuelRpdGxlXT1cIm51bGxcIj5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgPHRyICpuZ0Zvcj1cImxldCBkYXRhIG9mIGJhc2ljVGFibGUuZGF0YVwiPlxuICAgICAgICAgICAgICAgIDx0ZD57eyBkYXRhLm5hbWUgfX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57eyBkYXRhLnZhbHVlIH19PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgPC9uei10YWJsZT5cbiAgICA8aSBuei1pY29uIG56VHlwZT1cInpvb20taW5cIiBuelRoZW1lPVwib3V0bGluZVwiIChjbGljayk9XCJ6b29tVG8oKVwiPjwvaT48c3Bhbj7nvKnmlL7oh7M8L3NwYW4+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJhcnJvd1wiPjwvZGl2PmA7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNlc2l1bS12aWV3ZXJcIilbMF0uYXBwZW5kKHdpbik7XG4gICAgcmV0dXJuIHdpblxuICB9XG4gIC8v5Yid5aeL5YyW5b2x5YOP54K56YCJ6K+G5Yir5Yqf6IO9XG4gIEluaXQoKSB7XG4gICAgbGV0IHdpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkaWFsb2dcIilbMF07XG4gICAgd2luLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQod2luKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2VzaXVtLXZpZXdlclwiKVswXS5hcHBlbmQod2luKTtcbiAgICB3aW5kb3dbJ3Nob3dJbmZvJ10gPSB0aGlzLnNob3dJbmZvO1xuICAgIHRoaXMudmlldy5zY2VuZVRyZWUuJHJlZnMucGluLmNoaWxkcmVuLnB1c2goe1xuICAgICAgXCJyZWZcIjogJ3BpbjEnLFxuICAgICAgXCJjem1PYmplY3RcIjoge1xuICAgICAgICBcIm5hbWVcIjogJ1BpbjEnLFxuICAgICAgICBcInhic2pUeXBlXCI6IFwiUGluXCIsXG4gICAgICAgIFwicG9zaXRpb25cIjogWzEsIDEsIDBdLFxuICAgICAgICBcIm5lYXJcIjogMzAsXG4gICAgICAgIFwic2hvd1wiOiBmYWxzZSxcbiAgICAgICAgXCJjdXN0b21Qcm9wXCI6IHRoaXMuc2hvd0luZm9cbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMucGluMSA9IHRoaXMudmlldy5zY2VuZVRyZWUuJHJlZnMucGluMS5jem1PYmplY3Q7XG4gICAgWEUuTVZWTS53YXRjaCgoKSA9PiB0aGlzLnBpbjEud2luUG9zLCAoKSA9PiB7XG4gICAgICAvLyBkZWJ1Z2dlclxuICAgICAgdGhpcy53aW5Qb3MgPSB0aGlzLnBpbjEud2luUG9zXG4gICAgICBjb25zb2xlLmxvZyhcIndpblwiLCB0aGlzLndpblBvcylcbiAgICAgIC8vIHdpbltcInN0eWxlXCJdLmxlZnQgPSB0aGlzLndpblBvc1swXSAtIDgwICsgXCJweFwiO1xuICAgICAgLy8gd2luW1wic3R5bGVcIl0uYm90dG9tID0gdGhpcy53aW5Qb3NbM10gLSAzMjAgKyBcInB4XCI7XG4gICAgfSk7XG4gICAgWEUuTVZWTS53YXRjaCgoKSA9PiB0aGlzLnBpbjEuY3VzdG9tUHJvcCwgKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnBpbjEuY3VzdG9tUHJvcCkge1xuICAgICAgICB0aGlzLnNob3dJbmZvID0gZmFsc2VcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh0aGlzLnZpZXcgPT0gbnVsbCkgcmV0dXJuO1xuICAgIHRoaXMuYmluZEluZGVudGlmeSh0aGlzLnZpZXcuc2NlbmVUcmVlLiRyZWZzLmxheWVybGlzdClcbiAgICB0aGlzLmlkZW50aWZ5LnRlc3QodGhpcy5jem1PYmpMaXN0LCB0aGlzLnZpZXcsIHJlcyA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcInJlczpcIiwgcmVzKVxuICAgICAgdGhpcy5waW4xLmN1c3RvbVByb3AgPSB0cnVlXG4gICAgICB0aGlzLnNob3dJbmZvID0gdHJ1ZVxuICAgICAgdGhpcy5wcm9wZXJ0eUxpc3QgPSByZXNcbiAgICB9KVxuICAgIHRoaXMuaWRlbnRpZnkucGlja01vZGVsKHRoaXMudmlldywgKHJlcywgaGFuZGxlcikgPT4ge1xuICAgICAgdGhpcy5waW4xLmN1c3RvbVByb3AgPSB0cnVlXG4gICAgICB0aGlzLnNob3dJbmZvID0gdHJ1ZVxuICAgICAgdGhpcy5wcm9wZXJ0eUxpc3QgPSByZXNcbiAgICAgIC8vIGhhbmRsZXIuZGVzdHJveSgpXG4gICAgfSlcbiAgfVxuICBiaW5kSW5kZW50aWZ5KGxpc3QpIHtcbiAgICBpZiAobGlzdC5jaGlsZHJlbiAmJiBsaXN0LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgIGxpc3QuY2hpbGRyZW4uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4gJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGhpcy5iaW5kSW5kZW50aWZ5KGl0ZW0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5iaW5kQ2xpY2soaXRlbSlcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYmluZENsaWNrKGxpc3QpXG4gICAgfVxuICB9XG4gIGJpbmRDbGljayhpdGVtKSB7XG5cbiAgICAvLyBpZiAoaXRlbS5jem1PYmplY3QueGJzalR5cGUgIT09IFwiSW1hZ2VyeVwiKSByZXR1cm47XG4gICAgaWYgKGl0ZW0uY3ptT2JqZWN0Lnhic2pUeXBlID09IFwiSW1hZ2VyeVwiKSB7XG4gICAgICBpZiAoaXRlbS5jem1PYmplY3QueGJzakltYWdlcnlQcm92aWRlci50eXBlID09IFwiV2ViTWFwVGlsZVNlcnZpY2VJbWFnZXJ5UHJvdmlkZXJcIiB8fCBpdGVtLmN6bU9iamVjdC54YnNqSW1hZ2VyeVByb3ZpZGVyLnR5cGUgPT0gXCJXZWJNYXBTZXJ2aWNlSW1hZ2VyeVByb3ZpZGVyXCIpIHtcbiAgICAgICAgaWYgKGl0ZW0uY3ptT2JqZWN0Lnhic2pJbWFnZXJ5UHJvdmlkZXJbaXRlbS5jem1PYmplY3QueGJzakltYWdlcnlQcm92aWRlci50eXBlXS51cmwuaW5kZXhPZihcImFyY2dpc1wiKSAhPT0gLTEpIHtcbiAgICAgICAgICB0aGlzLmN6bU9iakxpc3QucHVzaChpdGVtLmN6bU9iamVjdClcblxuICAgICAgICAgIC8vIHRoaXMuaWRlbnRpZnkuZ2V0TGF5ZXJzKGl0ZW0uY3ptT2JqZWN0LCB0aGlzLnZpZXcsIHJlcyA9PiB7XG4gICAgICAgICAgLy8gICBjb25zb2xlLmxvZyhcInJlczpcIiwgcmVzKVxuICAgICAgICAgIC8vICAgdGhpcy5waW4xLmN1c3RvbVByb3AgPSB0cnVlXG4gICAgICAgICAgLy8gICB0aGlzLnNob3dJbmZvID0gdHJ1ZVxuICAgICAgICAgIC8vICAgdGhpcy5wcm9wZXJ0eUxpc3QgPSByZXNcbiAgICAgICAgICAvLyB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHRoaXMuY3ptT2JqTGlzdC5wdXNoKGl0ZW0pXG4gICAgICAgICAgdGhpcy5pZGVudGlmeS5HZXRGZWF0dXJlSW5mbyhpdGVtLmN6bU9iamVjdCwgdGhpcy52aWV3LCAncG9pbnQnLCByZXMgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaXRlbS5jem1PYmplY3QueGJzakltYWdlcnlQcm92aWRlcltpdGVtLmN6bU9iamVjdC54YnNqSW1hZ2VyeVByb3ZpZGVyLnR5cGVdKVxuICAgICAgICAgICAgdGhpcy50aXRsZSA9IGl0ZW0uY3ptT2JqZWN0Lnhic2pJbWFnZXJ5UHJvdmlkZXJbaXRlbS5jem1PYmplY3QueGJzakltYWdlcnlQcm92aWRlci50eXBlXS5sYXllclxuICAgICAgICAgICAgdGhpcy5waW4xLmN1c3RvbVByb3AgPSB0cnVlXG4gICAgICAgICAgICB0aGlzLnNob3dJbmZvID0gdHJ1ZVxuICAgICAgICAgICAgdGhpcy5wcm9wZXJ0eUxpc3QgPSByZXNcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXRlbS5jem1PYmplY3QueGJzalR5cGUgPT0gXCJUaWxlc2V0XCIpIHtcblxuICAgIH1cblxuICB9XG4gIGNsb3NlKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiY2xvc2VcIilcbiAgICB0aGlzLnNob3dJbmZvID0gZmFsc2U7XG4gIH1cbiAgem9vbVRvKCkge1xuICAgIGxldCBlbnRpdHlDb2xsZWN0aW9uID0gdGhpcy52aWV3LmN6bS52aWV3ZXIuZGF0YVNvdXJjZXMuZ2V0QnlOYW1lKFwiaGlnaExpZ2h0XCIpWzBdLmVudGl0aWVzXG4gICAgdGhpcy52aWV3LmN6bS52aWV3ZXIuZmx5VG8oZW50aXR5Q29sbGVjdGlvbilcbiAgfVxuICBzd2l0Y2goZSkge1xuICAgIGxldCBlYXJ0aD10aGlzLnZpZXdcbiAgICBjb25zb2xlLmxvZyh0aGlzLmN6bU9iakxpc3QpXG4gICAgaWYgKGUuc3JjRWxlbWVudC5zdHlsZS5jb2xvciA9PSAnYXF1YScpIHtcbiAgICAgIGUuc3JjRWxlbWVudC5zdHlsZS5jb2xvciA9IFwiXCJcbiAgICB9IGVsc2Uge1xuICAgICAgZS5zcmNFbGVtZW50LnN0eWxlLmNvbG9yID0gJ2FxdWEnXG4gICAgfVxuXG5cbiAgICBlYXJ0aC5lcHNwbGFuZXQuYWxsb3dDbGljayA9ICFlYXJ0aC5lcHNwbGFuZXQuYWxsb3dDbGljaztcbiAgICBpZiAoIWVhcnRoLmVwc3BsYW5ldC5hbGxvd0NsaWNrKSB7XG4gICAgICB0aGlzLnZpZXcuaW50ZXJhY3Rpb24ucGlja2luZy5lbmFibGVkID0gZmFsc2VcbiAgICAgIHRoaXMudmlldy5pbnRlcmFjdGlvbi5waWNraW5nLmhvdmVyRW5hYmxlID0gZmFsc2VcbiAgICAgIHRoaXMuaWRlbnRpZnkuQ2xlYXJIaWdoTGlnaHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52aWV3LmludGVyYWN0aW9uLnBpY2tpbmcuZW5hYmxlZCA9IHRydWVcbiAgICAgIHRoaXMudmlldy5pbnRlcmFjdGlvbi5waWNraW5nLmhvdmVyRW5hYmxlID0gdHJ1ZVxuICAgIH1cblxuICB9XG4gIHRlc3QoKSB7XG4gICAgdGhpcy5pZGVudGlmeS5nZXRMYXllcnModGhpcy52aWV3LnNjZW5lVHJlZS4kcmVmcy5sYXllcmxpc3QuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uY3ptT2JqZWN0LCB0aGlzLnZpZXcsIHJlcyA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICB0aGlzLnBpbjEuY3VzdG9tUHJvcCA9IHRydWVcbiAgICAgIHRoaXMuc2hvd0luZm8gPSB0cnVlXG4gICAgICB0aGlzLnByb3BlcnR5TGlzdCA9IHJlc1xuICAgIH0pXG5cblxuICB9XG4gIG5nT25Jbml0KCkge1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gICAgdGhpcy5Jbml0KCk7XG4gIH1cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHN1cGVyLm5nQWZ0ZXJWaWV3SW5pdCgpO1xuICB9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XG4gIH1cbn1cblxuIiwiPCEtLSA8bnotc3dpdGNoIFsobmdNb2RlbCldPVwic3dpdGNoVmFsdWVcIiAobmdNb2RlbENoYW5nZSk9XCJzd2l0Y2goJGV2ZW50KVwiPjwvbnotc3dpdGNoPiAtLT5cclxuPGRpdiBjbGFzcz1cImppbXUtd2lkZ2V0LW9uc2NyZWVuLWljb25cIiB0aXRsZT1cIuivhuWIq1wiPlxyXG4gICAgPGkgbnotaWNvbiBbbnpJY29uZm9udF09XCInaWNvbi1lcHNnaXMtd2VpYmlhb3RpLSdcIiAoY2xpY2spPVwic3dpdGNoKCRldmVudClcIj48L2k+XHJcbjwvZGl2PlxyXG48IS0tIDxidXR0b24gbnotYnV0dG9uIChjbGljayk9XCJ0ZXN0KClcIj50ZXN0PC9idXR0b24+IC0tPlxyXG48IS0tIDxlcHNnaXMtcGxhbmV0LWxheWVyLW1hbmFnZXI+PC9lcHNnaXMtcGxhbmV0LWxheWVyLW1hbmFnZXI+IC0tPlxyXG5cclxuPGRpdiBbaGlkZGVuXT1cIiFzaG93SW5mb1wiIGNsYXNzPVwiZGlhbG9nXCJcclxuICAgIFtuZ1N0eWxlXT1cInsgJ2xlZnQnOiAod2luUG9zWzBdLTY1ICkgKyAncHgnLCAnYm90dG9tJzogKHdpblBvc1szXSkgKyAncHgnIH1cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJwYW5lbFwiPlxyXG4gICAgICAgIDxzcGFuPnt7dGl0bGV9fTwvc3Bhbj48aSBuei1pY29uIG56VHlwZT1cImNsb3NlXCIgbnpUaGVtZT1cIm91dGxpbmVcIiAoY2xpY2spPVwiY2xvc2UoKVwiIHN0eWxlPVwiZmxvYXQ6IHJpZ2h0O1wiPjwvaT5cclxuICAgICAgICA8bnotdGFibGUgI2Jhc2ljVGFibGUgW256RGF0YV09XCJwcm9wZXJ0eUxpc3RcIiBbbnpGcm9udFBhZ2luYXRpb25dPVwiZmFsc2VcIiBbbnpTaG93UGFnaW5hdGlvbl09XCJmYWxzZVwiXHJcbiAgICAgICAgICAgIFtuelRpdGxlXT1cIm51bGxcIj5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cImxldCBkYXRhIG9mIGJhc2ljVGFibGUuZGF0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57eyBkYXRhLm5hbWUgfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57eyBkYXRhLnZhbHVlIH19PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC9uei10YWJsZT5cclxuICAgICAgICA8aSBuei1pY29uIG56VHlwZT1cInpvb20taW5cIiBuelRoZW1lPVwib3V0bGluZVwiIChjbGljayk9XCJ6b29tVG8oKVwiPjwvaT48c3Bhbj7nvKnmlL7oh7M8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJhcnJvd1wiPjwvZGl2PlxyXG48L2Rpdj4iXX0=