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
    switch(e) {
        console.log(e);
        if (e.srcElement.style.color == 'aqua') {
            e.srcElement.style.color = "";
        }
        else {
            e.srcElement.style.color = 'aqua';
        }
        window["allowClick"] = !window["allowClick"];
        if (!window["allowClick"]) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpZnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZXBzcGxhbmV0L2NvbXBvbmVudHMvaWRlbnRpZnkvaWRlbnRpZnkuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZXBzcGxhbmV0L2NvbXBvbmVudHMvaWRlbnRpZnkvaWRlbnRpZnkuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzNDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7Ozs7OztJQ1lqRSwwQkFBeUM7SUFDckMsMEJBQUk7SUFBQSxZQUFlO0lBQUEsaUJBQUs7SUFDeEIsMEJBQUk7SUFBQSxZQUFnQjtJQUFBLGlCQUFLO0lBQzdCLGlCQUFLOzs7SUFGRyxlQUFlO0lBQWYsa0NBQWU7SUFDZixlQUFnQjtJQUFoQixtQ0FBZ0I7OztJREczQix1QkFBdUIsU0FBdkIsdUJBQXdCLFNBQVEseUJBQXlCO0lBWXBFLFlBQW9CLFFBQWtCO1FBQ3BDLEtBQUssRUFBRSxDQUFDO1FBRFUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQVh0QyxXQUFNLEdBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNsQyxVQUFLLEdBQUcsRUFBRSxDQUFBO1FBQ1YsU0FBSSxHQUFHLElBQUksQ0FBQTtRQUNYLGlCQUFZLEdBQUc7WUFDYjtnQkFDRSxJQUFJLEVBQUUsR0FBRztnQkFDVCxLQUFLLEVBQUUsQ0FBQzthQUNUO1NBQ0YsQ0FBQztRQUNGLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7SUFHcEIsQ0FBQztJQUNELGFBQWE7UUFDWCxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztRQUM1QyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUM7UUFDL0MsR0FBRyxDQUFDLFNBQVMsR0FBRztZQUNSLElBQUksQ0FBQyxLQUFLOzs7Ozs7Ozs7Ozs7MEJBWUksQ0FBQztRQUN2QixRQUFRLENBQUMsc0JBQXNCLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hFLE9BQU8sR0FBRyxDQUFBO0lBQ1osQ0FBQztJQUVELElBQUk7UUFDRixJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkQsR0FBRyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsUUFBUSxDQUFDLHNCQUFzQixDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoRSxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDMUMsS0FBSyxFQUFFLE1BQU07WUFDYixXQUFXLEVBQUU7Z0JBQ1gsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsVUFBVSxFQUFFLEtBQUs7Z0JBQ2pCLFVBQVUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNyQixNQUFNLEVBQUUsRUFBRTtnQkFDVixNQUFNLEVBQUUsS0FBSztnQkFDYixZQUFZLEVBQUUsSUFBSSxDQUFDLFFBQVE7YUFDNUI7U0FDRixDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3JELEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUV6QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFBO1lBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUdqQyxDQUFDLENBQUMsQ0FBQztRQUNILEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRTtZQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFBO2FBQ3RCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSTtZQUFFLE9BQU87UUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBRTNELElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRTtnQkFDbEIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBRTVCLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEtBQUssU0FBUzt3QkFBRSxPQUFPO29CQUNsRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsSUFBSSxJQUFJLGtDQUFrQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsSUFBSSxJQUFJLGdDQUFnQyxFQUFFO3dCQUNoSyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFOzRCQUM1RyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUU7Z0NBQ3ZELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFBO2dDQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUE7Z0NBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBO2dDQUNwQixJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQTs0QkFDekIsQ0FBQyxDQUFDLENBQUE7eUJBQ0g7NkJBQU07NEJBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUMsRUFBRTtnQ0FDckUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtnQ0FDeEYsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFBO2dDQUM5RixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUE7Z0NBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBO2dDQUNwQixJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQTs0QkFDekIsQ0FBQyxDQUFDLENBQUM7eUJBQ0o7cUJBRUY7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELEtBQUs7UUFFSCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBQ0QsTUFBTTtRQUNKLElBQUksZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFBO1FBQzFGLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtJQUM5QyxDQUFDO0lBQ0QsTUFBTSxDQUFDLENBQUM7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2QsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksTUFBTSxFQUFFO1lBQ3RDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUE7U0FDOUI7YUFBSTtZQUNILENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBQyxNQUFNLENBQUE7U0FDaEM7UUFHRCxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ2hDO0lBRUgsQ0FBQztJQUNELElBQUk7UUFDRixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUU7WUFDOUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUE7WUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUE7WUFDcEIsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUE7UUFDekIsQ0FBQyxDQUFDLENBQUE7SUFHSixDQUFDO0lBQ0QsUUFBUTtRQUNOLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBQ0QsZUFBZTtRQUNiLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBQ0QsV0FBVztRQUNULEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN0QixDQUFDO0NBQ0YsQ0FBQTs4RkE3SVksdUJBQXVCOzREQUF2Qix1QkFBdUI7OztRQ2xCcEMsOEJBQWtEO1FBQzlDLDRCQUE0RTtRQUF6QixxR0FBUyxrQkFBYyxJQUFDO1FBQUMsaUJBQUk7UUFDcEYsaUJBQU07UUFJTiw4QkFDaUY7UUFDN0UsOEJBQW1CO1FBQ2YsNEJBQU07UUFBQSxZQUFTO1FBQUEsaUJBQU87UUFBQSw0QkFBb0Y7UUFBeEMsK0ZBQVMsV0FBTyxJQUFDO1FBQXVCLGlCQUFJO1FBQzlHLHNDQUNxQjtRQUNqQiw2QkFBTztRQUNILHdFQUdLO1FBQ1QsaUJBQVE7UUFDWixpQkFBVztRQUNYLDZCQUFpRTtRQUFuQixnR0FBUyxZQUFRLElBQUM7UUFBQyxpQkFBSTtRQUFBLDZCQUFNO1FBQUEsbUNBQUc7UUFBQSxpQkFBTztRQUN6RixpQkFBTTtRQUNOLDBCQUF5QjtRQUM3QixpQkFBTTs7O1FBckJTLGVBQXVDO1FBQXZDLHFEQUF1QztRQUtqRCxlQUFvQjtRQUFwQixzQ0FBb0Isd0ZBQUE7UUFHWCxlQUFTO1FBQVQsK0JBQVM7UUFDTyxlQUF1QjtRQUF2Qix5Q0FBdUIsNEJBQUEsMkJBQUEsaUJBQUE7UUFHaEIsZUFBa0I7UUFBbEIsa0NBQWtCOztBREsxQyx1QkFBdUI7SUFmbkMsaUJBQWlCLENBQUM7UUFDakIsR0FBRyxFQUFFLHdCQUF3QjtRQUM3QixJQUFJLEVBQUUsK0JBQStCO1FBQ3JDLElBQUksRUFBRSx5QkFBeUI7S0FDaEMsQ0FBQztHQVdXLHVCQUF1QixDQTZJbkM7U0E3SVksdUJBQXVCO3VGQUF2Qix1QkFBdUI7Y0FWbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFdBQVcsRUFBRSwyQkFBMkI7Z0JBQ3hDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO2dCQUN4QyxJQUFJLEVBQUU7b0JBQ0osbUNBQW1DLEVBQUUsTUFBTTtvQkFFM0MsT0FBTyxFQUFFLElBQUk7aUJBQ2Q7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21wb25lbnRSZWdpc3RlciB9IGZyb20gXCJlcHNnaXNcIjtcbmltcG9ydCB7IEJhc2VQbGFuZXRXaWRnZXRDb21wb25lbnQgfSBmcm9tICcuLi9iYXNlLXdpZGdldC9iYXNlLXdpZGdldC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWRlbnRpZnkgfSBmcm9tICcuLi8uLi91dGlscy9pZGVudGlmeSc7XG5AQ29tcG9uZW50UmVnaXN0ZXIoe1xuICB1cmk6IFwiZXBzZ2lzLXBsYW5ldC1pZGVudGlmeVwiLFxuICBwYXRoOiBcImVwc3BsYW5ldC9jb21wb25lbnRzL2lkZW50aWZ5XCIsXG4gIG5hbWU6IFwiUGxhbmV0SWRlbnRpZnlDb21wb25lbnRcIlxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJlcHNnaXMtcGxhbmV0LWlkZW50aWZ5XCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vaWRlbnRpZnkuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2lkZW50aWZ5LmNvbXBvbmVudC5zY3NzXCJdLFxuICBob3N0OiB7XG4gICAgXCJbY2xhc3MuamltdS13aWRnZXQtb25zY3JlZW4taWNvbl1cIjogXCJ0cnVlXCIsXG4gICAgLy8gXCJbY2xhc3MuaWNvbl1cIjogXCJ0cnVlXCIsXG4gICAgXCJ0aXRsZVwiOiBcIuivhuWIq1wiXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgUGxhbmV0SWRlbnRpZnlDb21wb25lbnQgZXh0ZW5kcyBCYXNlUGxhbmV0V2lkZ2V0Q29tcG9uZW50IHtcbiAgd2luUG9zOiBBcnJheTxhbnk+ID0gWzAsIDAsIDAsIDBdO1xuICB0aXRsZSA9IFwiXCJcbiAgcGluMSA9IG51bGxcbiAgcHJvcGVydHlMaXN0ID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiMVwiLFxuICAgICAgdmFsdWU6IDJcbiAgICB9XG4gIF07XG4gIHNob3dJbmZvID0gZmFsc2U7XG4gIHN3aXRjaFZhbHVlID0gZmFsc2U7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaWRlbnRpZnk6IElkZW50aWZ5KSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuICBjcmVhdGVJbmZvV2luKCkge1xuICAgIGxldCB3aW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3aW4uY2xhc3NOYW1lID0gXCJkaWFsb2dcIjtcbiAgICB3aW4uc3R5bGUubGVmdCA9IHRoaXMud2luUG9zWzBdIC0gODAgKyBcInB4XCI7XG4gICAgd2luLnN0eWxlLmJvdHRvbSA9IHRoaXMud2luUG9zWzNdIC0gMzIwICsgXCJweFwiO1xuICAgIHdpbi5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cInBhbmVsXCI+XG4gICAgPHNwYW4+JHt0aGlzLnRpdGxlfTwvc3Bhbj48aSBuei1pY29uIG56VHlwZT1cImNsb3NlXCIgbnpUaGVtZT1cIm91dGxpbmVcIiAoY2xpY2spPVwiY2xvc2UoKVwiIHN0eWxlPVwiZmxvYXQ6IHJpZ2h0O1wiPjwvaT5cbiAgICA8bnotdGFibGUgI2Jhc2ljVGFibGUgW256RGF0YV09XCJwcm9wZXJ0eUxpc3RcIiBbbnpGcm9udFBhZ2luYXRpb25dPVwiZmFsc2VcIiBbbnpTaG93UGFnaW5hdGlvbl09XCJmYWxzZVwiXG4gICAgICAgIFtuelRpdGxlXT1cIm51bGxcIj5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgPHRyICpuZ0Zvcj1cImxldCBkYXRhIG9mIGJhc2ljVGFibGUuZGF0YVwiPlxuICAgICAgICAgICAgICAgIDx0ZD57eyBkYXRhLm5hbWUgfX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57eyBkYXRhLnZhbHVlIH19PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgPC9uei10YWJsZT5cbiAgICA8aSBuei1pY29uIG56VHlwZT1cInpvb20taW5cIiBuelRoZW1lPVwib3V0bGluZVwiIChjbGljayk9XCJ6b29tVG8oKVwiPjwvaT48c3Bhbj7nvKnmlL7oh7M8L3NwYW4+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJhcnJvd1wiPjwvZGl2PmA7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNlc2l1bS12aWV3ZXJcIilbMF0uYXBwZW5kKHdpbik7XG4gICAgcmV0dXJuIHdpblxuICB9XG4gIC8v5Yid5aeL5YyW5b2x5YOP54K56YCJ6K+G5Yir5Yqf6IO9XG4gIEluaXQoKSB7XG4gICAgbGV0IHdpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkaWFsb2dcIilbMF07XG4gICAgd2luLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQod2luKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2VzaXVtLXZpZXdlclwiKVswXS5hcHBlbmQod2luKTtcbiAgICB3aW5kb3dbJ3Nob3dJbmZvJ10gPSB0aGlzLnNob3dJbmZvO1xuICAgIHRoaXMudmlldy5zY2VuZVRyZWUuJHJlZnMucGluLmNoaWxkcmVuLnB1c2goe1xuICAgICAgXCJyZWZcIjogJ3BpbjEnLFxuICAgICAgXCJjem1PYmplY3RcIjoge1xuICAgICAgICBcIm5hbWVcIjogJ1BpbjEnLFxuICAgICAgICBcInhic2pUeXBlXCI6IFwiUGluXCIsXG4gICAgICAgIFwicG9zaXRpb25cIjogWzEsIDEsIDBdLFxuICAgICAgICBcIm5lYXJcIjogMzAsXG4gICAgICAgIFwic2hvd1wiOiBmYWxzZSxcbiAgICAgICAgXCJjdXN0b21Qcm9wXCI6IHRoaXMuc2hvd0luZm9cbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMucGluMSA9IHRoaXMudmlldy5zY2VuZVRyZWUuJHJlZnMucGluMS5jem1PYmplY3Q7XG4gICAgWEUuTVZWTS53YXRjaCgoKSA9PiB0aGlzLnBpbjEud2luUG9zLCAoKSA9PiB7XG4gICAgICAvLyBkZWJ1Z2dlclxuICAgICAgdGhpcy53aW5Qb3MgPSB0aGlzLnBpbjEud2luUG9zXG4gICAgICBjb25zb2xlLmxvZyhcIndpblwiLCB0aGlzLndpblBvcylcbiAgICAgIC8vIHdpbltcInN0eWxlXCJdLmxlZnQgPSB0aGlzLndpblBvc1swXSAtIDgwICsgXCJweFwiO1xuICAgICAgLy8gd2luW1wic3R5bGVcIl0uYm90dG9tID0gdGhpcy53aW5Qb3NbM10gLSAzMjAgKyBcInB4XCI7XG4gICAgfSk7XG4gICAgWEUuTVZWTS53YXRjaCgoKSA9PiB0aGlzLnBpbjEuY3VzdG9tUHJvcCwgKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnBpbjEuY3VzdG9tUHJvcCkge1xuICAgICAgICB0aGlzLnNob3dJbmZvID0gZmFsc2VcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh0aGlzLnZpZXcgPT0gbnVsbCkgcmV0dXJuO1xuICAgIHRoaXMudmlldy5zY2VuZVRyZWUuJHJlZnMubGF5ZXJsaXN0LmNoaWxkcmVuLmZvckVhY2goZ3JvdXAgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coZ3JvdXApXG4gICAgICBpZiAoZ3JvdXAuY2hpbGRyZW4pIHtcbiAgICAgICAgZ3JvdXAuY2hpbGRyZW4uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpdGVtKVxuICAgICAgICAgIGlmIChpdGVtLmN6bU9iamVjdC54YnNqVHlwZSAhPT0gXCJJbWFnZXJ5XCIpIHJldHVybjtcbiAgICAgICAgICBpZiAoaXRlbS5jem1PYmplY3QueGJzakltYWdlcnlQcm92aWRlci50eXBlID09IFwiV2ViTWFwVGlsZVNlcnZpY2VJbWFnZXJ5UHJvdmlkZXJcIiB8fCBpdGVtLmN6bU9iamVjdC54YnNqSW1hZ2VyeVByb3ZpZGVyLnR5cGUgPT0gXCJTU1dlYk1hcFNlcnZpY2VJbWFnZXJ5UHJvdmlkZXJcIikge1xuICAgICAgICAgICAgaWYgKGl0ZW0uY3ptT2JqZWN0Lnhic2pJbWFnZXJ5UHJvdmlkZXJbaXRlbS5jem1PYmplY3QueGJzakltYWdlcnlQcm92aWRlci50eXBlXS51cmwuaW5kZXhPZihcImFyY2dpc1wiKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgdGhpcy5pZGVudGlmeS5nZXRMYXllcnMoaXRlbS5jem1PYmplY3QsIHRoaXMudmlldywgcmVzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlczpcIiwgcmVzKVxuICAgICAgICAgICAgICAgIHRoaXMucGluMS5jdXN0b21Qcm9wID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0luZm8gPSB0cnVlXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wZXJ0eUxpc3QgPSByZXNcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuaWRlbnRpZnkuR2V0RmVhdHVyZUluZm8oaXRlbS5jem1PYmplY3QsIHRoaXMudmlldywgJ3BvaW50JywgcmVzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtLmN6bU9iamVjdC54YnNqSW1hZ2VyeVByb3ZpZGVyW2l0ZW0uY3ptT2JqZWN0Lnhic2pJbWFnZXJ5UHJvdmlkZXIudHlwZV0pXG4gICAgICAgICAgICAgICAgdGhpcy50aXRsZSA9IGl0ZW0uY3ptT2JqZWN0Lnhic2pJbWFnZXJ5UHJvdmlkZXJbaXRlbS5jem1PYmplY3QueGJzakltYWdlcnlQcm92aWRlci50eXBlXS5sYXllclxuICAgICAgICAgICAgICAgIHRoaXMucGluMS5jdXN0b21Qcm9wID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0luZm8gPSB0cnVlXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wZXJ0eUxpc3QgPSByZXNcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGNsb3NlKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiY2xvc2VcIilcbiAgICB0aGlzLnNob3dJbmZvID0gZmFsc2U7XG4gIH1cbiAgem9vbVRvKCkge1xuICAgIGxldCBlbnRpdHlDb2xsZWN0aW9uID0gdGhpcy52aWV3LmN6bS52aWV3ZXIuZGF0YVNvdXJjZXMuZ2V0QnlOYW1lKFwiaGlnaExpZ2h0XCIpWzBdLmVudGl0aWVzXG4gICAgdGhpcy52aWV3LmN6bS52aWV3ZXIuZmx5VG8oZW50aXR5Q29sbGVjdGlvbilcbiAgfVxuICBzd2l0Y2goZSkge1xuICAgIGNvbnNvbGUubG9nKGUpXG4gICAgaWYgKGUuc3JjRWxlbWVudC5zdHlsZS5jb2xvciA9PSAnYXF1YScpIHtcbiAgICAgIGUuc3JjRWxlbWVudC5zdHlsZS5jb2xvciA9IFwiXCJcbiAgICB9ZWxzZXtcbiAgICAgIGUuc3JjRWxlbWVudC5zdHlsZS5jb2xvcj0nYXF1YSdcbiAgICB9XG5cblxuICAgIHdpbmRvd1tcImFsbG93Q2xpY2tcIl0gPSAhd2luZG93W1wiYWxsb3dDbGlja1wiXTtcbiAgICBpZiAoIXdpbmRvd1tcImFsbG93Q2xpY2tcIl0pIHtcbiAgICAgIHRoaXMuaWRlbnRpZnkuQ2xlYXJIaWdoTGlnaHQoKTtcbiAgICB9XG5cbiAgfVxuICB0ZXN0KCkge1xuICAgIHRoaXMuaWRlbnRpZnkuZ2V0TGF5ZXJzKHRoaXMudmlldy5zY2VuZVRyZWUuJHJlZnMubGF5ZXJsaXN0LmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmN6bU9iamVjdCwgdGhpcy52aWV3LCByZXMgPT4ge1xuICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgdGhpcy5waW4xLmN1c3RvbVByb3AgPSB0cnVlXG4gICAgICB0aGlzLnNob3dJbmZvID0gdHJ1ZVxuICAgICAgdGhpcy5wcm9wZXJ0eUxpc3QgPSByZXNcbiAgICB9KVxuXG5cbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICAgIHRoaXMuSW5pdCgpO1xuICB9XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBzdXBlci5uZ0FmdGVyVmlld0luaXQoKTtcbiAgfVxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xuICB9XG59XG5cbiIsIjwhLS0gPG56LXN3aXRjaCBbKG5nTW9kZWwpXT1cInN3aXRjaFZhbHVlXCIgKG5nTW9kZWxDaGFuZ2UpPVwic3dpdGNoKCRldmVudClcIj48L256LXN3aXRjaD4gLS0+XHJcbjxkaXYgY2xhc3M9XCJqaW11LXdpZGdldC1vbnNjcmVlbi1pY29uXCIgdGl0bGU9XCLor4bliKtcIj5cclxuICAgIDxpIG56LWljb24gW256SWNvbmZvbnRdPVwiJ2ljb24tZXBzZ2lzLXdlaWJpYW90aS0nXCIgKGNsaWNrKT1cInN3aXRjaCgkZXZlbnQpXCI+PC9pPlxyXG48L2Rpdj5cclxuPCEtLSA8YnV0dG9uIG56LWJ1dHRvbiAoY2xpY2spPVwidGVzdCgpXCI+dGVzdDwvYnV0dG9uPiAtLT5cclxuPCEtLSA8ZXBzZ2lzLXBsYW5ldC1sYXllci1tYW5hZ2VyPjwvZXBzZ2lzLXBsYW5ldC1sYXllci1tYW5hZ2VyPiAtLT5cclxuXHJcbjxkaXYgW2hpZGRlbl09XCIhc2hvd0luZm9cIiBjbGFzcz1cImRpYWxvZ1wiXHJcbiAgICBbbmdTdHlsZV09XCJ7ICdsZWZ0JzogKHdpblBvc1swXS02NSApICsgJ3B4JywgJ2JvdHRvbSc6ICh3aW5Qb3NbM10pICsgJ3B4JyB9XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicGFuZWxcIj5cclxuICAgICAgICA8c3Bhbj57e3RpdGxlfX08L3NwYW4+PGkgbnotaWNvbiBuelR5cGU9XCJjbG9zZVwiIG56VGhlbWU9XCJvdXRsaW5lXCIgKGNsaWNrKT1cImNsb3NlKClcIiBzdHlsZT1cImZsb2F0OiByaWdodDtcIj48L2k+XHJcbiAgICAgICAgPG56LXRhYmxlICNiYXNpY1RhYmxlIFtuekRhdGFdPVwicHJvcGVydHlMaXN0XCIgW256RnJvbnRQYWdpbmF0aW9uXT1cImZhbHNlXCIgW256U2hvd1BhZ2luYXRpb25dPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICBbbnpUaXRsZV09XCJudWxsXCI+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgZGF0YSBvZiBiYXNpY1RhYmxlLmRhdGFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgZGF0YS5uYW1lIH19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgZGF0YS52YWx1ZSB9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvbnotdGFibGU+XHJcbiAgICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJ6b29tLWluXCIgbnpUaGVtZT1cIm91dGxpbmVcIiAoY2xpY2spPVwiem9vbVRvKClcIj48L2k+PHNwYW4+57yp5pS+6IezPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYXJyb3dcIj48L2Rpdj5cclxuPC9kaXY+Il19