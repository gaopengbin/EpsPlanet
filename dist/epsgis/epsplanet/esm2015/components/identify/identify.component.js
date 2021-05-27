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
        let viewer = this.view.czm.viewer;
        viewer.flyTo(entityCollection);
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
PlanetIdentifyComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PlanetIdentifyComponent, selectors: [["epsgis-planet-identify"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 15, vars: 12, consts: [["title", "\u8BC6\u522B", 1, "jimu-widget-onscreen-icon"], ["nz-icon", "", 3, "nzIconfont", "click"], [1, "dialog", 3, "hidden", "ngStyle"], [1, "panel"], ["nz-icon", "", "nzType", "close", "nzTheme", "outline", 2, "float", "right", 3, "click"], [3, "nzData", "nzFrontPagination", "nzShowPagination", "nzTitle"], ["basicTable", ""], [4, "ngFor", "ngForOf"], ["nz-icon", "", "nzType", "zoom-in", "nzTheme", "outline", 3, "click"], [1, "arrow"]], template: function PlanetIdentifyComponent_Template(rf, ctx) { if (rf & 1) {
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
                styleUrls: ["./identify.component.scss"]
            }]
    }], function () { return [{ type: i1.Identify }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpZnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZXBzcGxhbmV0L2NvbXBvbmVudHMvaWRlbnRpZnkvaWRlbnRpZnkuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZXBzcGxhbmV0L2NvbXBvbmVudHMvaWRlbnRpZnkvaWRlbnRpZnkuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzNDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7Ozs7OztJQ1lqRSwwQkFBeUM7SUFDckMsMEJBQUk7SUFBQSxZQUFlO0lBQUEsaUJBQUs7SUFDeEIsMEJBQUk7SUFBQSxZQUFnQjtJQUFBLGlCQUFLO0lBQzdCLGlCQUFLOzs7SUFGRyxlQUFlO0lBQWYsa0NBQWU7SUFDZixlQUFnQjtJQUFoQixtQ0FBZ0I7OztJREEzQix1QkFBdUIsU0FBdkIsdUJBQXdCLFNBQVEseUJBQXlCO0lBYXBFLFlBQW9CLFFBQWtCO1FBQ3BDLEtBQUssRUFBRSxDQUFDO1FBRFUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQVp0QyxXQUFNLEdBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNsQyxVQUFLLEdBQUcsRUFBRSxDQUFBO1FBQ1YsU0FBSSxHQUFHLElBQUksQ0FBQTtRQUNYLGlCQUFZLEdBQUc7WUFDYjtnQkFDRSxJQUFJLEVBQUUsR0FBRztnQkFDVCxLQUFLLEVBQUUsQ0FBQzthQUNUO1NBQ0YsQ0FBQztRQUNGLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsZUFBVSxHQUFHLEVBQUUs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QUc7UUFBQSxpQkFBTztRQUN6RixpQkFBTTtRQUNOLDBCQUF5QjtRQUM3QixpQkFBTTs7O1FBckJTLGVBQXVDO1FBQXZDLHFEQUF1QztRQUtqRCxlQUFvQjtRQUFwQixzQ0FBb0Isd0ZBQUE7UUFHWCxlQUFTO1FBQVQsK0JBQVM7UUFDTyxlQUF1QjtRQUF2Qix5Q0FBdUIsNEJBQUEsMkJBQUEsaUJBQUE7UUFHaEIsZUFBa0I7UUFBbEIsa0NBQWtCOztBREUxQyx1QkFBdUI7SUFWbkMsaUJBQWlCLENBQUM7UUFDakIsR0FBRyxFQUFFLHdCQUF3QjtRQUM3QixJQUFJLEVBQUUsK0JBQStCO1FBQ3JDLElBQUksRUFBRSx5QkFBeUI7S0FDaEMsQ0FBQztHQU1XLHVCQUF1QixDQW9NbkM7U0FwTVksdUJBQXVCO3VGQUF2Qix1QkFBdUI7Y0FMbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFdBQVcsRUFBRSwyQkFBMkI7Z0JBQ3hDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO2FBQ3pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbXBvbmVudFJlZ2lzdGVyIH0gZnJvbSBcImVwc2dpc1wiO1xuaW1wb3J0IHsgQmFzZVBsYW5ldFdpZGdldENvbXBvbmVudCB9IGZyb20gJy4uL2Jhc2Utd2lkZ2V0L2Jhc2Utd2lkZ2V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZGVudGlmeSB9IGZyb20gJy4uLy4uL3V0aWxzL2lkZW50aWZ5JztcbmltcG9ydCB7IGdldFBvc2l0aW9uc0hlaWdodEZyb21UZXJyYWluIH0gZnJvbSAnLi4vLi4vdXRpbHMvZ2V0SGVpZ2h0J1xuXG5AQ29tcG9uZW50UmVnaXN0ZXIoe1xuICB1cmk6IFwiZXBzZ2lzLXBsYW5ldC1pZGVudGlmeVwiLFxuICBwYXRoOiBcImVwc3BsYW5ldC9jb21wb25lbnRzL2lkZW50aWZ5XCIsXG4gIG5hbWU6IFwiUGxhbmV0SWRlbnRpZnlDb21wb25lbnRcIlxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJlcHNnaXMtcGxhbmV0LWlkZW50aWZ5XCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vaWRlbnRpZnkuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2lkZW50aWZ5LmNvbXBvbmVudC5zY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIFBsYW5ldElkZW50aWZ5Q29tcG9uZW50IGV4dGVuZHMgQmFzZVBsYW5ldFdpZGdldENvbXBvbmVudCB7XG4gIHdpblBvczogQXJyYXk8YW55PiA9IFswLCAwLCAwLCAwXTtcbiAgdGl0bGUgPSBcIlwiXG4gIHBpbjEgPSBudWxsXG4gIHByb3BlcnR5TGlzdCA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBcIjFcIixcbiAgICAgIHZhbHVlOiAyXG4gICAgfVxuICBdO1xuICBzaG93SW5mbyA9IGZhbHNlO1xuICBzd2l0Y2hWYWx1ZSA9IGZhbHNlO1xuICBjem1PYmpMaXN0ID0gW11cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpZGVudGlmeTogSWRlbnRpZnkpIHtcbiAgICBzdXBlcigpO1xuICB9XG4gIGNyZWF0ZUluZm9XaW4oKSB7XG4gICAgbGV0IHdpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdpbi5jbGFzc05hbWUgPSBcImRpYWxvZ1wiO1xuICAgIHdpbi5zdHlsZS5sZWZ0ID0gdGhpcy53aW5Qb3NbMF0gLSA4MCArIFwicHhcIjtcbiAgICB3aW4uc3R5bGUuYm90dG9tID0gdGhpcy53aW5Qb3NbM10gLSAzMjAgKyBcInB4XCI7XG4gICAgd2luLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwicGFuZWxcIj5cbiAgICA8c3Bhbj4ke3RoaXMudGl0bGV9PC9zcGFuPjxpIG56LWljb24gbnpUeXBlPVwiY2xvc2VcIiBuelRoZW1lPVwib3V0bGluZVwiIChjbGljayk9XCJjbG9zZSgpXCIgc3R5bGU9XCJmbG9hdDogcmlnaHQ7XCI+PC9pPlxuICAgIDxuei10YWJsZSAjYmFzaWNUYWJsZSBbbnpEYXRhXT1cInByb3BlcnR5TGlzdFwiIFtuekZyb250UGFnaW5hdGlvbl09XCJmYWxzZVwiIFtuelNob3dQYWdpbmF0aW9uXT1cImZhbHNlXCJcbiAgICAgICAgW256VGl0bGVdPVwibnVsbFwiPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICA8dHIgKm5nRm9yPVwibGV0IGRhdGEgb2YgYmFzaWNUYWJsZS5kYXRhXCI+XG4gICAgICAgICAgICAgICAgPHRkPnt7IGRhdGEubmFtZSB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPnt7IGRhdGEudmFsdWUgfX08L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgPC90Ym9keT5cbiAgICA8L256LXRhYmxlPlxuICAgIDxpIG56LWljb24gbnpUeXBlPVwiem9vbS1pblwiIG56VGhlbWU9XCJvdXRsaW5lXCIgKGNsaWNrKT1cInpvb21UbygpXCI+PC9pPjxzcGFuPue8qeaUvuiHszwvc3Bhbj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cImFycm93XCI+PC9kaXY+YDtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2VzaXVtLXZpZXdlclwiKVswXS5hcHBlbmQod2luKTtcbiAgICByZXR1cm4gd2luXG4gIH1cbiAgLy/liJ3lp4vljJblvbHlg4/ngrnpgInor4bliKvlip/og71cbiAgSW5pdCgpIHtcbiAgICBsZXQgd2luID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRpYWxvZ1wiKVswXTtcbiAgICB3aW4ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh3aW4pO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjZXNpdW0tdmlld2VyXCIpWzBdLmFwcGVuZCh3aW4pO1xuICAgIHdpbmRvd1snc2hvd0luZm8nXSA9IHRoaXMuc2hvd0luZm87XG4gICAgdGhpcy52aWV3LnNjZW5lVHJlZS4kcmVmcy5waW4uY2hpbGRyZW4ucHVzaCh7XG4gICAgICBcInJlZlwiOiAncGluMScsXG4gICAgICBcImN6bU9iamVjdFwiOiB7XG4gICAgICAgIFwibmFtZVwiOiAnUGluMScsXG4gICAgICAgIFwieGJzalR5cGVcIjogXCJQaW5cIixcbiAgICAgICAgXCJwb3NpdGlvblwiOiBbMSwgMSwgMF0sXG4gICAgICAgIFwibmVhclwiOiAzMCxcbiAgICAgICAgXCJzaG93XCI6IGZhbHNlLFxuICAgICAgICBcImN1c3RvbVByb3BcIjogdGhpcy5zaG93SW5mb1xuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5waW4xID0gdGhpcy52aWV3LnNjZW5lVHJlZS4kcmVmcy5waW4xLmN6bU9iamVjdDtcbiAgICBYRS5NVlZNLndhdGNoKCgpID0+IHRoaXMucGluMS53aW5Qb3MsICgpID0+IHtcbiAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICB0aGlzLndpblBvcyA9IHRoaXMucGluMS53aW5Qb3NcbiAgICAgIGNvbnNvbGUubG9nKFwid2luXCIsIHRoaXMud2luUG9zKVxuICAgICAgLy8gd2luW1wic3R5bGVcIl0ubGVmdCA9IHRoaXMud2luUG9zWzBdIC0gODAgKyBcInB4XCI7XG4gICAgICAvLyB3aW5bXCJzdHlsZVwiXS5ib3R0b20gPSB0aGlzLndpblBvc1szXSAtIDMyMCArIFwicHhcIjtcbiAgICB9KTtcbiAgICBYRS5NVlZNLndhdGNoKCgpID0+IHRoaXMucGluMS5jdXN0b21Qcm9wLCAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMucGluMS5jdXN0b21Qcm9wKSB7XG4gICAgICAgIHRoaXMuc2hvd0luZm8gPSBmYWxzZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMudmlldyA9PSBudWxsKSByZXR1cm47XG4gICAgdGhpcy5iaW5kSW5kZW50aWZ5KHRoaXMudmlldy5zY2VuZVRyZWUuJHJlZnMubGF5ZXJsaXN0KVxuICAgIHRoaXMuaWRlbnRpZnkudGVzdCh0aGlzLmN6bU9iakxpc3QsIHRoaXMudmlldywgcmVzID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwicmVzOlwiLCByZXMpXG4gICAgICB0aGlzLnBpbjEuY3VzdG9tUHJvcCA9IHRydWVcbiAgICAgIHRoaXMuc2hvd0luZm8gPSB0cnVlXG4gICAgICB0aGlzLnByb3BlcnR5TGlzdCA9IHJlc1xuICAgIH0pXG4gICAgdGhpcy5pZGVudGlmeS5waWNrTW9kZWwodGhpcy52aWV3LCAocmVzLCBoYW5kbGVyKSA9PiB7XG4gICAgICB0aGlzLnBpbjEuY3VzdG9tUHJvcCA9IHRydWVcbiAgICAgIHRoaXMuc2hvd0luZm8gPSB0cnVlXG4gICAgICB0aGlzLnByb3BlcnR5TGlzdCA9IHJlc1xuICAgICAgLy8gaGFuZGxlci5kZXN0cm95KClcbiAgICB9KVxuICB9XG4gIGJpbmRJbmRlbnRpZnkobGlzdCkge1xuICAgIGlmIChsaXN0LmNoaWxkcmVuICYmIGxpc3QuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgbGlzdC5jaGlsZHJlbi5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoaXRlbS5jaGlsZHJlbiAmJiBpdGVtLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0aGlzLmJpbmRJbmRlbnRpZnkoaXRlbSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmJpbmRDbGljayhpdGVtKVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5iaW5kQ2xpY2sobGlzdClcbiAgICB9XG4gIH1cbiAgYmluZENsaWNrKGl0ZW0pIHtcbiAgICAvLyBpZiAoaXRlbS5jem1PYmplY3QueGJzalR5cGUgIT09IFwiSW1hZ2VyeVwiKSByZXR1cm47XG4gICAgaWYgKGl0ZW0uY3ptT2JqZWN0Lnhic2pUeXBlID09IFwiSW1hZ2VyeVwiKSB7XG4gICAgICBpZiAoaXRlbS5jem1PYmplY3QueGJzakltYWdlcnlQcm92aWRlci50eXBlID09IFwiV2ViTWFwVGlsZVNlcnZpY2VJbWFnZXJ5UHJvdmlkZXJcIiB8fCBpdGVtLmN6bU9iamVjdC54YnNqSW1hZ2VyeVByb3ZpZGVyLnR5cGUgPT0gXCJXZWJNYXBTZXJ2aWNlSW1hZ2VyeVByb3ZpZGVyXCIpIHtcbiAgICAgICAgaWYgKGl0ZW0uY3ptT2JqZWN0Lnhic2pJbWFnZXJ5UHJvdmlkZXJbaXRlbS5jem1PYmplY3QueGJzakltYWdlcnlQcm92aWRlci50eXBlXS51cmwuaW5kZXhPZihcImFyY2dpc1wiKSAhPT0gLTEpIHtcbiAgICAgICAgICB0aGlzLmN6bU9iakxpc3QucHVzaChpdGVtLmN6bU9iamVjdClcblxuICAgICAgICAgIC8vIHRoaXMuaWRlbnRpZnkuZ2V0TGF5ZXJzKGl0ZW0uY3ptT2JqZWN0LCB0aGlzLnZpZXcsIHJlcyA9PiB7XG4gICAgICAgICAgLy8gICBjb25zb2xlLmxvZyhcInJlczpcIiwgcmVzKVxuICAgICAgICAgIC8vICAgdGhpcy5waW4xLmN1c3RvbVByb3AgPSB0cnVlXG4gICAgICAgICAgLy8gICB0aGlzLnNob3dJbmZvID0gdHJ1ZVxuICAgICAgICAgIC8vICAgdGhpcy5wcm9wZXJ0eUxpc3QgPSByZXNcbiAgICAgICAgICAvLyB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHRoaXMuY3ptT2JqTGlzdC5wdXNoKGl0ZW0pXG4gICAgICAgICAgdGhpcy5pZGVudGlmeS5HZXRGZWF0dXJlSW5mbyhpdGVtLmN6bU9iamVjdCwgdGhpcy52aWV3LCAncG9pbnQnLCByZXMgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaXRlbS5jem1PYmplY3QueGJzakltYWdlcnlQcm92aWRlcltpdGVtLmN6bU9iamVjdC54YnNqSW1hZ2VyeVByb3ZpZGVyLnR5cGVdKVxuICAgICAgICAgICAgdGhpcy50aXRsZSA9IGl0ZW0uY3ptT2JqZWN0Lnhic2pJbWFnZXJ5UHJvdmlkZXJbaXRlbS5jem1PYmplY3QueGJzakltYWdlcnlQcm92aWRlci50eXBlXS5sYXllclxuICAgICAgICAgICAgdGhpcy5waW4xLmN1c3RvbVByb3AgPSB0cnVlXG4gICAgICAgICAgICB0aGlzLnNob3dJbmZvID0gdHJ1ZVxuICAgICAgICAgICAgdGhpcy5wcm9wZXJ0eUxpc3QgPSByZXNcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXRlbS5jem1PYmplY3QueGJzalR5cGUgPT0gXCJUaWxlc2V0XCIpIHtcblxuICAgIH1cblxuICB9XG4gIGNsb3NlKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiY2xvc2VcIilcbiAgICB0aGlzLnNob3dJbmZvID0gZmFsc2U7XG4gIH1cbiAgem9vbVRvKCkge1xuICAgIGxldCBlbnRpdHlDb2xsZWN0aW9uID0gdGhpcy52aWV3LmN6bS52aWV3ZXIuZGF0YVNvdXJjZXMuZ2V0QnlOYW1lKFwiaGlnaExpZ2h0XCIpWzBdLmVudGl0aWVzXG4gICAgXG4gICAgLy8gbGV0IGVudGl0eSA9IGVudGl0eUNvbGxlY3Rpb24udmFsdWVzWzBdXG4gICAgLy8gbGV0IHBvc2l0aW9ucyA9IGVudGl0eS5wb2x5bGluZS5wb3NpdGlvbnMuX3ZhbHVlO1xuICAgIC8vIGNvbnNvbGUubG9nKGVudGl0eS5wb2x5bGluZS5wb3NpdGlvbnMuX3ZhbHVlKVxuICAgIC8vIGdldFBvc2l0aW9uc0hlaWdodEZyb21UZXJyYWluKHRoaXMudmlldyxwb3NpdGlvbnMscmVzPT57XG4gICAgLy8gICBjb25zb2xlLmxvZyhcImdldFBvc2hlaWdodDpcIixwb3NpdGlvbnMpXG4gICAgLy8gfSlcbiAgLy8gICBsZXQgcG9seUNlbnRlciA9IENlc2l1bS5Cb3VuZGluZ1NwaGVyZS5mcm9tUG9pbnRzKGVudGl0eS5wb2x5bGluZS5wb3NpdGlvbnMuX3ZhbHVlKS5jZW50ZXJcbiAgICBsZXQgdmlld2VyID0gdGhpcy52aWV3LmN6bS52aWV3ZXI7XG4gIC8vICAgbGV0IGNhcnRvZ3JhcGhpYyA9IENlc2l1bS5DYXJ0b2dyYXBoaWMuZnJvbUNhcnRlc2lhbihwb2x5Q2VudGVyLCB2aWV3ZXIuc2NlbmUuZ2xvYmUuZWxsaXBzb2lkLCBuZXcgQ2VzaXVtLkNhcnRvZ3JhcGhpYygpKTtcbiAgLy8gICBsZXQgbGF0ID0gQ2VzaXVtLk1hdGgudG9EZWdyZWVzKGNhcnRvZ3JhcGhpYy5sYXRpdHVkZSk7XG4gIC8vICAgbGV0IGxuZyA9IENlc2l1bS5NYXRoLnRvRGVncmVlcyhjYXJ0b2dyYXBoaWMubG9uZ2l0dWRlKTtcbiAgLy8gICBsZXQgaGVpZ2h0ID0gY2FydG9ncmFwaGljLmhlaWdodDtcbiAgLy8gICB2aWV3ZXIuY2FtZXJhLmZseVRvKHtcbiAgLy8gICAgIGRlc3RpbmF0aW9uIDogQ2VzaXVtLkNhcnRlc2lhbjMuZnJvbURlZ3JlZXMobG5nLCBsYXQsMTAwMCksXG4gIC8vICAgICBvcmllbnRhdGlvbiA6IHtcbiAgLy8gICAgICAgICAvL2hlYWRpbmcgOiBDZXNpdW0uTWF0aC50b1JhZGlhbnMoMC4wKSxcbiAgLy8gICAgICAgIC8vIHBpdGNoIDogQ2VzaXVtLk1hdGgudG9SYWRpYW5zKC0yNS4wKSxcbiAgLy8gICAgICAgICAvL3JvbGwgOiAwLjBcbiAgLy8gICAgIH1cbiAgLy8gfSk7XG4gIHZpZXdlci5mbHlUbyhlbnRpdHlDb2xsZWN0aW9uKVxuICB9XG4gIHN3aXRjaChlKSB7XG4gICAgbGV0IGVhcnRoID0gdGhpcy52aWV3XG4gICAgY29uc29sZS5sb2codGhpcy5jem1PYmpMaXN0KVxuICAgIGlmIChlLnNyY0VsZW1lbnQuc3R5bGUuY29sb3IgPT0gJ2FxdWEnKSB7XG4gICAgICBlLnNyY0VsZW1lbnQuc3R5bGUuY29sb3IgPSBcIlwiXG4gICAgfSBlbHNlIHtcbiAgICAgIGUuc3JjRWxlbWVudC5zdHlsZS5jb2xvciA9ICdhcXVhJ1xuICAgIH1cblxuXG4gICAgZWFydGguZXBzcGxhbmV0LmFsbG93Q2xpY2sgPSAhZWFydGguZXBzcGxhbmV0LmFsbG93Q2xpY2s7XG4gICAgaWYgKCFlYXJ0aC5lcHNwbGFuZXQuYWxsb3dDbGljaykge1xuICAgICAgdGhpcy52aWV3LmludGVyYWN0aW9uLnBpY2tpbmcuZW5hYmxlZCA9IGZhbHNlXG4gICAgICB0aGlzLnZpZXcuaW50ZXJhY3Rpb24ucGlja2luZy5ob3ZlckVuYWJsZSA9IGZhbHNlXG4gICAgICB0aGlzLmlkZW50aWZ5LkNsZWFySGlnaExpZ2h0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmlldy5pbnRlcmFjdGlvbi5waWNraW5nLmVuYWJsZWQgPSB0cnVlXG4gICAgICB0aGlzLnZpZXcuaW50ZXJhY3Rpb24ucGlja2luZy5ob3ZlckVuYWJsZSA9IHRydWVcbiAgICB9XG5cbiAgfVxuICB0ZXN0KCkge1xuICAgIHRoaXMuaWRlbnRpZnkuZ2V0TGF5ZXJzKHRoaXMudmlldy5zY2VuZVRyZWUuJHJlZnMubGF5ZXJsaXN0LmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmN6bU9iamVjdCwgdGhpcy52aWV3LCByZXMgPT4ge1xuICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgdGhpcy5waW4xLmN1c3RvbVByb3AgPSB0cnVlXG4gICAgICB0aGlzLnNob3dJbmZvID0gdHJ1ZVxuICAgICAgdGhpcy5wcm9wZXJ0eUxpc3QgPSByZXNcbiAgICB9KVxuXG5cbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICAgIHRoaXMuSW5pdCgpO1xuICB9XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBzdXBlci5uZ0FmdGVyVmlld0luaXQoKTtcbiAgfVxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xuICB9XG59XG5cbiIsIjwhLS0gPG56LXN3aXRjaCBbKG5nTW9kZWwpXT1cInN3aXRjaFZhbHVlXCIgKG5nTW9kZWxDaGFuZ2UpPVwic3dpdGNoKCRldmVudClcIj48L256LXN3aXRjaD4gLS0+XHJcbjxkaXYgY2xhc3M9XCJqaW11LXdpZGdldC1vbnNjcmVlbi1pY29uXCIgdGl0bGU9XCLor4bliKtcIj5cclxuICAgIDxpIG56LWljb24gW256SWNvbmZvbnRdPVwiJ2ljb24tZXBzZ2lzLXdlaWJpYW90aS0nXCIgKGNsaWNrKT1cInN3aXRjaCgkZXZlbnQpXCI+PC9pPlxyXG48L2Rpdj5cclxuPCEtLSA8YnV0dG9uIG56LWJ1dHRvbiAoY2xpY2spPVwidGVzdCgpXCI+dGVzdDwvYnV0dG9uPiAtLT5cclxuPCEtLSA8ZXBzZ2lzLXBsYW5ldC1sYXllci1tYW5hZ2VyPjwvZXBzZ2lzLXBsYW5ldC1sYXllci1tYW5hZ2VyPiAtLT5cclxuXHJcbjxkaXYgW2hpZGRlbl09XCIhc2hvd0luZm9cIiBjbGFzcz1cImRpYWxvZ1wiXHJcbiAgICBbbmdTdHlsZV09XCJ7ICdsZWZ0JzogKHdpblBvc1swXS02NSApICsgJ3B4JywgJ2JvdHRvbSc6ICh3aW5Qb3NbM10pICsgJ3B4JyB9XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicGFuZWxcIj5cclxuICAgICAgICA8c3Bhbj57e3RpdGxlfX08L3NwYW4+PGkgbnotaWNvbiBuelR5cGU9XCJjbG9zZVwiIG56VGhlbWU9XCJvdXRsaW5lXCIgKGNsaWNrKT1cImNsb3NlKClcIiBzdHlsZT1cImZsb2F0OiByaWdodDtcIj48L2k+XHJcbiAgICAgICAgPG56LXRhYmxlICNiYXNpY1RhYmxlIFtuekRhdGFdPVwicHJvcGVydHlMaXN0XCIgW256RnJvbnRQYWdpbmF0aW9uXT1cImZhbHNlXCIgW256U2hvd1BhZ2luYXRpb25dPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICBbbnpUaXRsZV09XCJudWxsXCI+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgZGF0YSBvZiBiYXNpY1RhYmxlLmRhdGFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgZGF0YS5uYW1lIH19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgZGF0YS52YWx1ZSB9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvbnotdGFibGU+XHJcbiAgICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJ6b29tLWluXCIgbnpUaGVtZT1cIm91dGxpbmVcIiAoY2xpY2spPVwiem9vbVRvKClcIj48L2k+PHNwYW4+57yp5pS+6IezPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYXJyb3dcIj48L2Rpdj5cclxuPC9kaXY+Il19