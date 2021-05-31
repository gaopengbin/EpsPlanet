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
import * as i6 from "ng-zorro-antd/button";
import * as i7 from "ng-zorro-antd/core/wave";
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
    print(callback) {
        callback(this.propertyList);
        console.log(this.propertyList);
    }
    addBtn(name, callback) {
        let btn = document.createElement('button');
        btn.textContent = name;
        btn.id = 'idBtn';
        btn.style.position = 'relative';
        btn.style.fontWeight = '400';
        btn.style.fontSize = '14px';
        btn.style.whiteSpace = 'nowrap';
        btn.style.textAlign = 'center';
        btn.style.border = '1px solid #d9d9d9';
        btn.style.boxShadow = '0 2px 0 rgb(0 0 0 / 2%)';
        btn.style.transition = 'all .3s cubic-bezier(.645,.045,.355,1)';
        btn.style.height = '32px';
        btn.style.padding = '4px 15px';
        btn.style.borderRadius = '2px';
        btn.style.backgroundColor = '#fff';
        callback(btn);
        document.getElementsByClassName('panel')[0].append(btn);
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
            let btn = document.getElementById('idBtn');
            btn.onclick = () => {
            };
        });
        this.identify.pickModel(this.view, (res, pickObj) => {
            this.pin1.customProp = true;
            this.showInfo = true;
            this.propertyList = res;
            window['pickObj'] = pickObj.tileset.xbsjTileset;
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
PlanetIdentifyComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PlanetIdentifyComponent, selectors: [["epsgis-planet-identify"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 15, vars: 12, consts: [["title", "\u8BC6\u522B", 1, "jimu-widget-onscreen-icon"], ["nz-icon", "", 3, "nzIconfont", "click"], [1, "dialog", 3, "hidden", "ngStyle"], [1, "panel"], ["nz-icon", "", "nzType", "close", "nzTheme", "outline", 2, "float", "right", 3, "click"], [3, "nzData", "nzFrontPagination", "nzShowPagination", "nzTitle"], ["basicTable", ""], [4, "ngFor", "ngForOf"], ["nz-button", "", 3, "click"], ["nz-icon", "", "nzType", "zoom-in", "nzTheme", "outline"], [1, "arrow"]], template: function PlanetIdentifyComponent_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵelementStart(11, "button", 8);
        i0.ɵɵlistener("click", function PlanetIdentifyComponent_Template_button_click_11_listener() { return ctx.zoomTo(); });
        i0.ɵɵelement(12, "i", 9);
        i0.ɵɵtext(13, "\u7F29\u653E\u81F3");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(14, "div", 10);
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
    } }, directives: [i2.NzIconDirective, i3.ɵNzTransitionPatchDirective, i4.NgStyle, i5.NzTableComponent, i5.NzTbodyComponent, i4.NgForOf, i6.NzButtonComponent, i7.NzWaveDirective, i5.NzTrDirective, i5.NzTableCellDirective], styles: [".ant-table-tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%], .ant-table-thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%], .ant-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%], .ant-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%]{padding:10px}  .ssmodal_content{overflow:overlay!important}.dialog[_ngcontent-%COMP%]{position:absolute;width:350px;min-height:60px;color:#000;border-radius:5px;cursor:pointer}.dialog[_ngcontent-%COMP%],   .ant-table-tbody>tr>td,   .ant-table-thead>tr>th{padding:5px}  tr.ant-table-row.ng-star-inserted:nth-child(odd){background-color:hsla(0,0%,66.3%,.6)}.arrow[_ngcontent-%COMP%]{margin-left:50px;width:0;height:0;border-top:10px solid #fff;border-left:10px solid transparent;border-right:10px solid transparent}.panel[_ngcontent-%COMP%]{background-color:#fff;padding:5px}.panel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#000}.panel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{color:#0ff}.panel[_ngcontent-%COMP%]   .ant-table-wrapper[_ngcontent-%COMP%]{max-height:350px;overflow:overlay}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpZnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZXBzcGxhbmV0L2NvbXBvbmVudHMvaWRlbnRpZnkvaWRlbnRpZnkuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZXBzcGxhbmV0L2NvbXBvbmVudHMvaWRlbnRpZnkvaWRlbnRpZnkuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzNDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7Ozs7Ozs7O0lDWWpFLDBCQUF5QztJQUNyQywwQkFBSTtJQUFBLFlBQWU7SUFBQSxpQkFBSztJQUN4QiwwQkFBSTtJQUFBLFlBQWdCO0lBQUEsaUJBQUs7SUFDN0IsaUJBQUs7OztJQUZHLGVBQWU7SUFBZixrQ0FBZTtJQUNmLGVBQWdCO0lBQWhCLG1DQUFnQjs7O0lEQTNCLHVCQUF1QixTQUF2Qix1QkFBd0IsU0FBUSx5QkFBeUI7SUFhcEUsWUFBb0IsUUFBa0I7UUFDcEMsS0FBSyxFQUFFLENBQUM7UUFEVSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBWnRDLFdBQU0sR0FBZSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLFVBQUssR0FBRyxFQUFFLENBQUE7UUFDVixTQUFJLEdBQUcsSUFBSSxDQUFBO1FBQ1gsaUJBQVksR0FBRztZQUNiO2dCQUNFLElBQUksRUFBRSxHQUFHO2dCQUNULEtBQUssRUFBRSxDQUFDO2FBQ1Q7U0FDRixDQUFDO1FBQ0YsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixlQUFVLEdBQUcsRUFB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d0JBQXdCO1FBQzdCLElBQUksRUFBRSwrQkFBK0I7UUFDckMsSUFBSSxFQUFFLHlCQUF5QjtLQUNoQyxDQUFDO0dBTVcsdUJBQXVCLENBZ05uQztTQWhOWSx1QkFBdUI7dUZBQXZCLHVCQUF1QjtjQUxuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsV0FBVyxFQUFFLDJCQUEyQjtnQkFDeEMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7YUFDekMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tcG9uZW50UmVnaXN0ZXIgfSBmcm9tIFwiZXBzZ2lzXCI7XG5pbXBvcnQgeyBCYXNlUGxhbmV0V2lkZ2V0Q29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZS13aWRnZXQvYmFzZS13aWRnZXQuY29tcG9uZW50JztcbmltcG9ydCB7IElkZW50aWZ5IH0gZnJvbSAnLi4vLi4vdXRpbHMvaWRlbnRpZnknO1xuaW1wb3J0IHsgZ2V0UG9zaXRpb25zSGVpZ2h0RnJvbVRlcnJhaW4gfSBmcm9tICcuLi8uLi91dGlscy9nZXRIZWlnaHQnXG5cbkBDb21wb25lbnRSZWdpc3Rlcih7XG4gIHVyaTogXCJlcHNnaXMtcGxhbmV0LWlkZW50aWZ5XCIsXG4gIHBhdGg6IFwiZXBzcGxhbmV0L2NvbXBvbmVudHMvaWRlbnRpZnlcIixcbiAgbmFtZTogXCJQbGFuZXRJZGVudGlmeUNvbXBvbmVudFwiXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImVwc2dpcy1wbGFuZXQtaWRlbnRpZnlcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9pZGVudGlmeS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vaWRlbnRpZnkuY29tcG9uZW50LnNjc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgUGxhbmV0SWRlbnRpZnlDb21wb25lbnQgZXh0ZW5kcyBCYXNlUGxhbmV0V2lkZ2V0Q29tcG9uZW50IHtcbiAgd2luUG9zOiBBcnJheTxhbnk+ID0gWzAsIDAsIDAsIDBdO1xuICB0aXRsZSA9IFwiXCJcbiAgcGluMSA9IG51bGxcbiAgcHJvcGVydHlMaXN0ID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiMVwiLFxuICAgICAgdmFsdWU6IDJcbiAgICB9XG4gIF07XG4gIHNob3dJbmZvID0gZmFsc2U7XG4gIHN3aXRjaFZhbHVlID0gZmFsc2U7XG4gIGN6bU9iakxpc3QgPSBbXVxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGlkZW50aWZ5OiBJZGVudGlmeSkge1xuICAgIHN1cGVyKCk7XG4gIH1cbiAgcHJpbnQoY2FsbGJhY2spOiBhbnkge1xuICAgIGNhbGxiYWNrKHRoaXMucHJvcGVydHlMaXN0KVxuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcGVydHlMaXN0KVxuICB9XG4gIGFkZEJ0bihuYW1lLCBjYWxsYmFjaykge1xuICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG4udGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIGJ0bi5pZD0naWRCdG4nXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5wcm9wZXJ0eUxpc3QpXG4gICAgLy8gbGV0IF90aGlzPXRoaXNcbiAgICAvLyBidG4ub25jbGljayA9ICgpPT57XG4gICAgLy8gICBjYWxsYmFjaygpXG4gICAgLy8gICBjb25zb2xlLmxvZyh0aGlzLnByb3BlcnR5TGlzdClcbiAgICAvLyB9O1xuICAgIGJ0bi5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgYnRuLnN0eWxlLmZvbnRXZWlnaHQgPSAnNDAwJztcbiAgICBidG4uc3R5bGUuZm9udFNpemUgPSAnMTRweCc7XG4gICAgYnRuLnN0eWxlLndoaXRlU3BhY2UgPSAnbm93cmFwJztcbiAgICBidG4uc3R5bGUudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgYnRuLnN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgI2Q5ZDlkOSc7XG4gICAgYnRuLnN0eWxlLmJveFNoYWRvdyA9ICcwIDJweCAwIHJnYigwIDAgMCAvIDIlKSc7XG4gICAgYnRuLnN0eWxlLnRyYW5zaXRpb24gPSAnYWxsIC4zcyBjdWJpYy1iZXppZXIoLjY0NSwuMDQ1LC4zNTUsMSknO1xuICAgIGJ0bi5zdHlsZS5oZWlnaHQgPSAnMzJweCc7XG4gICAgYnRuLnN0eWxlLnBhZGRpbmcgPSAnNHB4IDE1cHgnO1xuICAgIGJ0bi5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnMnB4JztcbiAgICBidG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZmYnO1xuICAgIGNhbGxiYWNrKGJ0bilcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYW5lbCcpWzBdLmFwcGVuZChidG4pO1xuICB9XG4gIC8v5Yid5aeL5YyW5b2x5YOP54K56YCJ6K+G5Yir5Yqf6IO9XG4gIEluaXQoKSB7XG4gICAgbGV0IHdpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkaWFsb2dcIilbMF07XG4gICAgd2luLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQod2luKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2VzaXVtLXZpZXdlclwiKVswXS5hcHBlbmQod2luKTtcbiAgICB3aW5kb3dbJ3Nob3dJbmZvJ10gPSB0aGlzLnNob3dJbmZvO1xuICAgIHRoaXMudmlldy5zY2VuZVRyZWUuJHJlZnMucGluLmNoaWxkcmVuLnB1c2goe1xuICAgICAgXCJyZWZcIjogJ3BpbjEnLFxuICAgICAgXCJjem1PYmplY3RcIjoge1xuICAgICAgICBcIm5hbWVcIjogJ1BpbjEnLFxuICAgICAgICBcInhic2pUeXBlXCI6IFwiUGluXCIsXG4gICAgICAgIFwicG9zaXRpb25cIjogWzEsIDEsIDBdLFxuICAgICAgICBcIm5lYXJcIjogMzAsXG4gICAgICAgIFwic2hvd1wiOiBmYWxzZSxcbiAgICAgICAgXCJjdXN0b21Qcm9wXCI6IHRoaXMuc2hvd0luZm9cbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMucGluMSA9IHRoaXMudmlldy5zY2VuZVRyZWUuJHJlZnMucGluMS5jem1PYmplY3Q7XG4gICAgWEUuTVZWTS53YXRjaCgoKSA9PiB0aGlzLnBpbjEud2luUG9zLCAoKSA9PiB7XG4gICAgICAvLyBkZWJ1Z2dlclxuICAgICAgdGhpcy53aW5Qb3MgPSB0aGlzLnBpbjEud2luUG9zXG4gICAgICBjb25zb2xlLmxvZyhcIndpblwiLCB0aGlzLndpblBvcylcbiAgICAgIC8vIHdpbltcInN0eWxlXCJdLmxlZnQgPSB0aGlzLndpblBvc1swXSAtIDgwICsgXCJweFwiO1xuICAgICAgLy8gd2luW1wic3R5bGVcIl0uYm90dG9tID0gdGhpcy53aW5Qb3NbM10gLSAzMjAgKyBcInB4XCI7XG4gICAgfSk7XG4gICAgWEUuTVZWTS53YXRjaCgoKSA9PiB0aGlzLnBpbjEuY3VzdG9tUHJvcCwgKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnBpbjEuY3VzdG9tUHJvcCkge1xuICAgICAgICB0aGlzLnNob3dJbmZvID0gZmFsc2VcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh0aGlzLnZpZXcgPT0gbnVsbCkgcmV0dXJuO1xuICAgIHRoaXMuYmluZEluZGVudGlmeSh0aGlzLnZpZXcuc2NlbmVUcmVlLiRyZWZzLmxheWVybGlzdClcbiAgICB0aGlzLmlkZW50aWZ5LnRlc3QodGhpcy5jem1PYmpMaXN0LCB0aGlzLnZpZXcsIHJlcyA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcInJlczpcIiwgcmVzKVxuICAgICAgdGhpcy5waW4xLmN1c3RvbVByb3AgPSB0cnVlXG4gICAgICB0aGlzLnNob3dJbmZvID0gdHJ1ZVxuICAgICAgdGhpcy5wcm9wZXJ0eUxpc3QgPSByZXNcbiAgICAgIGxldCBidG49ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lkQnRuJylcbiAgICAgIGJ0bi5vbmNsaWNrPSgpPT57XG4gICAgICAgIFxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5pZGVudGlmeS5waWNrTW9kZWwodGhpcy52aWV3LCAocmVzLCBwaWNrT2JqKSA9PiB7XG4gICAgICB0aGlzLnBpbjEuY3VzdG9tUHJvcCA9IHRydWVcbiAgICAgIHRoaXMuc2hvd0luZm8gPSB0cnVlXG4gICAgICB0aGlzLnByb3BlcnR5TGlzdCA9IHJlc1xuICAgICAgd2luZG93WydwaWNrT2JqJ109cGlja09iai50aWxlc2V0Lnhic2pUaWxlc2V0O1xuICAgICAgLy8gaGFuZGxlci5kZXN0cm95KClcbiAgICB9KVxuICB9XG4gIGJpbmRJbmRlbnRpZnkobGlzdCkge1xuICAgIGlmIChsaXN0LmNoaWxkcmVuICYmIGxpc3QuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgbGlzdC5jaGlsZHJlbi5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoaXRlbS5jaGlsZHJlbiAmJiBpdGVtLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0aGlzLmJpbmRJbmRlbnRpZnkoaXRlbSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmJpbmRDbGljayhpdGVtKVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5iaW5kQ2xpY2sobGlzdClcbiAgICB9XG4gIH1cbiAgYmluZENsaWNrKGl0ZW0pIHtcbiAgICAvLyBpZiAoaXRlbS5jem1PYmplY3QueGJzalR5cGUgIT09IFwiSW1hZ2VyeVwiKSByZXR1cm47XG4gICAgaWYgKGl0ZW0uY3ptT2JqZWN0Lnhic2pUeXBlID09IFwiSW1hZ2VyeVwiKSB7XG4gICAgICBpZiAoaXRlbS5jem1PYmplY3QueGJzakltYWdlcnlQcm92aWRlci50eXBlID09IFwiV2ViTWFwVGlsZVNlcnZpY2VJbWFnZXJ5UHJvdmlkZXJcIiB8fCBpdGVtLmN6bU9iamVjdC54YnNqSW1hZ2VyeVByb3ZpZGVyLnR5cGUgPT0gXCJXZWJNYXBTZXJ2aWNlSW1hZ2VyeVByb3ZpZGVyXCIpIHtcbiAgICAgICAgaWYgKGl0ZW0uY3ptT2JqZWN0Lnhic2pJbWFnZXJ5UHJvdmlkZXJbaXRlbS5jem1PYmplY3QueGJzakltYWdlcnlQcm92aWRlci50eXBlXS51cmwuaW5kZXhPZihcImFyY2dpc1wiKSAhPT0gLTEpIHtcbiAgICAgICAgICB0aGlzLmN6bU9iakxpc3QucHVzaChpdGVtLmN6bU9iamVjdClcblxuICAgICAgICAgIC8vIHRoaXMuaWRlbnRpZnkuZ2V0TGF5ZXJzKGl0ZW0uY3ptT2JqZWN0LCB0aGlzLnZpZXcsIHJlcyA9PiB7XG4gICAgICAgICAgLy8gICBjb25zb2xlLmxvZyhcInJlczpcIiwgcmVzKVxuICAgICAgICAgIC8vICAgdGhpcy5waW4xLmN1c3RvbVByb3AgPSB0cnVlXG4gICAgICAgICAgLy8gICB0aGlzLnNob3dJbmZvID0gdHJ1ZVxuICAgICAgICAgIC8vICAgdGhpcy5wcm9wZXJ0eUxpc3QgPSByZXNcbiAgICAgICAgICAvLyB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHRoaXMuY3ptT2JqTGlzdC5wdXNoKGl0ZW0pXG4gICAgICAgICAgdGhpcy5pZGVudGlmeS5HZXRGZWF0dXJlSW5mbyhpdGVtLmN6bU9iamVjdCwgdGhpcy52aWV3LCAncG9pbnQnLCByZXMgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaXRlbS5jem1PYmplY3QueGJzakltYWdlcnlQcm92aWRlcltpdGVtLmN6bU9iamVjdC54YnNqSW1hZ2VyeVByb3ZpZGVyLnR5cGVdKVxuICAgICAgICAgICAgdGhpcy50aXRsZSA9IGl0ZW0uY3ptT2JqZWN0Lnhic2pJbWFnZXJ5UHJvdmlkZXJbaXRlbS5jem1PYmplY3QueGJzakltYWdlcnlQcm92aWRlci50eXBlXS5sYXllclxuICAgICAgICAgICAgdGhpcy5waW4xLmN1c3RvbVByb3AgPSB0cnVlXG4gICAgICAgICAgICB0aGlzLnNob3dJbmZvID0gdHJ1ZVxuICAgICAgICAgICAgdGhpcy5wcm9wZXJ0eUxpc3QgPSByZXNcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXRlbS5jem1PYmplY3QueGJzalR5cGUgPT0gXCJUaWxlc2V0XCIpIHtcblxuICAgIH1cblxuICB9XG4gIGNsb3NlKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiY2xvc2VcIilcbiAgICB0aGlzLnNob3dJbmZvID0gZmFsc2U7XG4gIH1cbiAgem9vbVRvKCkge1xuICAgIGxldCBlbnRpdHlDb2xsZWN0aW9uID0gdGhpcy52aWV3LmN6bS52aWV3ZXIuZGF0YVNvdXJjZXMuZ2V0QnlOYW1lKFwiaGlnaExpZ2h0XCIpWzBdLmVudGl0aWVzXG5cbiAgICAvLyBsZXQgZW50aXR5ID0gZW50aXR5Q29sbGVjdGlvbi52YWx1ZXNbMF1cbiAgICAvLyBsZXQgcG9zaXRpb25zID0gZW50aXR5LnBvbHlsaW5lLnBvc2l0aW9ucy5fdmFsdWU7XG4gICAgLy8gY29uc29sZS5sb2coZW50aXR5LnBvbHlsaW5lLnBvc2l0aW9ucy5fdmFsdWUpXG4gICAgLy8gZ2V0UG9zaXRpb25zSGVpZ2h0RnJvbVRlcnJhaW4odGhpcy52aWV3LHBvc2l0aW9ucyxyZXM9PntcbiAgICAvLyAgIGNvbnNvbGUubG9nKFwiZ2V0UG9zaGVpZ2h0OlwiLHBvc2l0aW9ucylcbiAgICAvLyB9KVxuICAgIC8vICAgbGV0IHBvbHlDZW50ZXIgPSBDZXNpdW0uQm91bmRpbmdTcGhlcmUuZnJvbVBvaW50cyhlbnRpdHkucG9seWxpbmUucG9zaXRpb25zLl92YWx1ZSkuY2VudGVyXG4gICAgbGV0IHZpZXdlciA9IHRoaXMudmlldy5jem0udmlld2VyO1xuICAgIC8vICAgbGV0IGNhcnRvZ3JhcGhpYyA9IENlc2l1bS5DYXJ0b2dyYXBoaWMuZnJvbUNhcnRlc2lhbihwb2x5Q2VudGVyLCB2aWV3ZXIuc2NlbmUuZ2xvYmUuZWxsaXBzb2lkLCBuZXcgQ2VzaXVtLkNhcnRvZ3JhcGhpYygpKTtcbiAgICAvLyAgIGxldCBsYXQgPSBDZXNpdW0uTWF0aC50b0RlZ3JlZXMoY2FydG9ncmFwaGljLmxhdGl0dWRlKTtcbiAgICAvLyAgIGxldCBsbmcgPSBDZXNpdW0uTWF0aC50b0RlZ3JlZXMoY2FydG9ncmFwaGljLmxvbmdpdHVkZSk7XG4gICAgLy8gICBsZXQgaGVpZ2h0ID0gY2FydG9ncmFwaGljLmhlaWdodDtcbiAgICAvLyAgIHZpZXdlci5jYW1lcmEuZmx5VG8oe1xuICAgIC8vICAgICBkZXN0aW5hdGlvbiA6IENlc2l1bS5DYXJ0ZXNpYW4zLmZyb21EZWdyZWVzKGxuZywgbGF0LDEwMDApLFxuICAgIC8vICAgICBvcmllbnRhdGlvbiA6IHtcbiAgICAvLyAgICAgICAgIC8vaGVhZGluZyA6IENlc2l1bS5NYXRoLnRvUmFkaWFucygwLjApLFxuICAgIC8vICAgICAgICAvLyBwaXRjaCA6IENlc2l1bS5NYXRoLnRvUmFkaWFucygtMjUuMCksXG4gICAgLy8gICAgICAgICAvL3JvbGwgOiAwLjBcbiAgICAvLyAgICAgfVxuICAgIC8vIH0pO1xuICAgIHZpZXdlci5mbHlUbyhlbnRpdHlDb2xsZWN0aW9uKVxuICB9XG4gIHN3aXRjaChlKSB7XG4gICAgbGV0IGVhcnRoID0gdGhpcy52aWV3XG4gICAgY29uc29sZS5sb2codGhpcy5jem1PYmpMaXN0KVxuICAgIGlmIChlLnNyY0VsZW1lbnQuc3R5bGUuY29sb3IgPT0gJ2FxdWEnKSB7XG4gICAgICBlLnNyY0VsZW1lbnQuc3R5bGUuY29sb3IgPSBcIlwiXG4gICAgfSBlbHNlIHtcbiAgICAgIGUuc3JjRWxlbWVudC5zdHlsZS5jb2xvciA9ICdhcXVhJ1xuICAgIH1cblxuXG4gICAgZWFydGguZXBzcGxhbmV0LmFsbG93Q2xpY2sgPSAhZWFydGguZXBzcGxhbmV0LmFsbG93Q2xpY2s7XG4gICAgaWYgKCFlYXJ0aC5lcHNwbGFuZXQuYWxsb3dDbGljaykge1xuICAgICAgdGhpcy52aWV3LmludGVyYWN0aW9uLnBpY2tpbmcuZW5hYmxlZCA9IGZhbHNlXG4gICAgICB0aGlzLnZpZXcuaW50ZXJhY3Rpb24ucGlja2luZy5ob3ZlckVuYWJsZSA9IGZhbHNlXG4gICAgICB0aGlzLmlkZW50aWZ5LkNsZWFySGlnaExpZ2h0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmlldy5pbnRlcmFjdGlvbi5waWNraW5nLmVuYWJsZWQgPSB0cnVlXG4gICAgICB0aGlzLnZpZXcuaW50ZXJhY3Rpb24ucGlja2luZy5ob3ZlckVuYWJsZSA9IHRydWVcbiAgICB9XG5cbiAgfVxuICB0ZXN0KCkge1xuICAgIHRoaXMuaWRlbnRpZnkuZ2V0TGF5ZXJzKHRoaXMudmlldy5zY2VuZVRyZWUuJHJlZnMubGF5ZXJsaXN0LmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmN6bU9iamVjdCwgdGhpcy52aWV3LCByZXMgPT4ge1xuICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgdGhpcy5waW4xLmN1c3RvbVByb3AgPSB0cnVlXG4gICAgICB0aGlzLnNob3dJbmZvID0gdHJ1ZVxuICAgICAgdGhpcy5wcm9wZXJ0eUxpc3QgPSByZXNcbiAgICB9KVxuXG5cbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICAgIHRoaXMuSW5pdCgpO1xuICB9XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBzdXBlci5uZ0FmdGVyVmlld0luaXQoKTtcbiAgfVxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xuICB9XG59XG5cbiIsIjwhLS0gPG56LXN3aXRjaCBbKG5nTW9kZWwpXT1cInN3aXRjaFZhbHVlXCIgKG5nTW9kZWxDaGFuZ2UpPVwic3dpdGNoKCRldmVudClcIj48L256LXN3aXRjaD4gLS0+XHJcbjxkaXYgY2xhc3M9XCJqaW11LXdpZGdldC1vbnNjcmVlbi1pY29uXCIgdGl0bGU9XCLor4bliKtcIj5cclxuICAgIDxpIG56LWljb24gW256SWNvbmZvbnRdPVwiJ2ljb24tZXBzZ2lzLXdlaWJpYW90aS0nXCIgKGNsaWNrKT1cInN3aXRjaCgkZXZlbnQpXCI+PC9pPlxyXG48L2Rpdj5cclxuPCEtLSA8YnV0dG9uIG56LWJ1dHRvbiAoY2xpY2spPVwidGVzdCgpXCI+dGVzdDwvYnV0dG9uPiAtLT5cclxuPCEtLSA8ZXBzZ2lzLXBsYW5ldC1sYXllci1tYW5hZ2VyPjwvZXBzZ2lzLXBsYW5ldC1sYXllci1tYW5hZ2VyPiAtLT5cclxuXHJcbjxkaXYgW2hpZGRlbl09XCIhc2hvd0luZm9cIiBjbGFzcz1cImRpYWxvZ1wiXHJcbiAgICBbbmdTdHlsZV09XCJ7ICdsZWZ0JzogKHdpblBvc1swXS02NSApICsgJ3B4JywgJ2JvdHRvbSc6ICh3aW5Qb3NbM10pICsgJ3B4JyB9XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicGFuZWxcIj5cclxuICAgICAgICA8c3Bhbj57e3RpdGxlfX08L3NwYW4+PGkgbnotaWNvbiBuelR5cGU9XCJjbG9zZVwiIG56VGhlbWU9XCJvdXRsaW5lXCIgKGNsaWNrKT1cImNsb3NlKClcIiBzdHlsZT1cImZsb2F0OiByaWdodDtcIj48L2k+XHJcbiAgICAgICAgPG56LXRhYmxlICNiYXNpY1RhYmxlIFtuekRhdGFdPVwicHJvcGVydHlMaXN0XCIgW256RnJvbnRQYWdpbmF0aW9uXT1cImZhbHNlXCIgW256U2hvd1BhZ2luYXRpb25dPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICBbbnpUaXRsZV09XCJudWxsXCI+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgZGF0YSBvZiBiYXNpY1RhYmxlLmRhdGFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgZGF0YS5uYW1lIH19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgZGF0YS52YWx1ZSB9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvbnotdGFibGU+XHJcbiAgICAgICAgPCEtLSA8aSBuei1pY29uIG56VHlwZT1cInpvb20taW5cIiBuelRoZW1lPVwib3V0bGluZVwiIChjbGljayk9XCJ6b29tVG8oKVwiPjwvaT48c3Bhbj7nvKnmlL7oh7M8L3NwYW4+IC0tPlxyXG4gICAgICAgIDxidXR0b24gbnotYnV0dG9uIChjbGljayk9XCJ6b29tVG8oKVwiPjxpIG56LWljb24gbnpUeXBlPVwiem9vbS1pblwiIG56VGhlbWU9XCJvdXRsaW5lXCI+PC9pPue8qeaUvuiHszwvYnV0dG9uPlxyXG4gICAgICAgIDwhLS0gPGkgbnotaWNvbiBuelR5cGU9XCJ6b29tLWluXCIgbnpUaGVtZT1cIm91dGxpbmVcIiAoY2xpY2spPVwiem9vbVRvKClcIj48L2k+PHNwYW4+57yp5pS+6IezPC9zcGFuPiAtLT5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImFycm93XCI+PC9kaXY+XHJcbjwvZGl2PiJdfQ==