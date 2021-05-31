import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { ComponentRegister } from 'epsgis';
import { BasePlanetWidgetComponent } from '../base-widget/base-widget.component';
import { PlanetIdentifyComponent } from '../identify/identify.component';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/input-number";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/common";
import * as i4 from "ng-zorro-antd/button";
import * as i5 from "ng-zorro-antd/core/wave";
import * as i6 from "ng-zorro-antd/core/transition-patch";
function PlanetLocationComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "nz-input-number", 3);
    i0.ɵɵlistener("ngModelChange", function PlanetLocationComponent_div_8_Template_nz_input_number_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.ZValue = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.item.Z.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r0.ZValue)("nzStep", 1)("nzPlaceHolder", ctx_r0.item.Z.placeHolder);
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
    test(res) {
        console.log(res);
    }
    addbtn() {
        PlanetIdentifyComponent.prototype.addBtn('test', (btn, pickObj) => {
            btn.onclick = () => {
                console.log(window['pickObj']);
            };
        });
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
PlanetLocationComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PlanetLocationComponent, selectors: [["epsgis-planet-location"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 12, vars: 13, consts: [[3, "ngModel", "nzMin", "nzMax", "nzStep", "nzPlaceHolder", "ngModelChange"], [4, "ngIf"], ["nz-button", "", "nzType", "primary", 3, "click"], [3, "ngModel", "nzStep", "nzPlaceHolder", "ngModelChange"]], template: function PlanetLocationComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelementStart(1, "span");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "nz-input-number", 0);
        i0.ɵɵlistener("ngModelChange", function PlanetLocationComponent_Template_nz_input_number_ngModelChange_3_listener($event) { return ctx.XValue = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div");
        i0.ɵɵelementStart(5, "span");
        i0.ɵɵtext(6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "nz-input-number", 0);
        i0.ɵɵlistener("ngModelChange", function PlanetLocationComponent_Template_nz_input_number_ngModelChange_7_listener($event) { return ctx.YValue = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(8, PlanetLocationComponent_div_8_Template, 4, 4, "div", 1);
        i0.ɵɵelementStart(9, "div");
        i0.ɵɵelementStart(10, "button", 2);
        i0.ɵɵlistener("click", function PlanetLocationComponent_Template_button_click_10_listener() { return ctx.location(); });
        i0.ɵɵtext(11, "\u5B9A\u4F4D");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.item.X.label);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.XValue)("nzMin", ctx.item.X.min)("nzMax", ctx.item.X.max)("nzStep", 0.0001)("nzPlaceHolder", ctx.item.X.placeHolder);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.item.Y.label);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.YValue)("nzMin", ctx.item.Y.min)("nzMax", ctx.item.Y.max)("nzStep", 0.0001)("nzPlaceHolder", ctx.item.Y.placeHolder);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.item.Z);
    } }, directives: [i1.NzInputNumberComponent, i2.NgControlStatus, i2.NgModel, i3.NgIf, i4.NzButtonComponent, i5.NzWaveDirective, i6.ɵNzTransitionPatchDirective], styles: ["div[_ngcontent-%COMP%]{margin-bottom:5px;text-align:center}nz-input-number[_ngcontent-%COMP%]{width:80%}"] });
PlanetLocationComponent = __decorate([
    ComponentRegister({
        uri: "epsgis-planet-location",
        path: "epsplanet/components/location",
        name: "PlanetLocationComponent"
    })
], PlanetLocationComponent);
export { PlanetLocationComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PlanetLocationComponent, [{
        type: Component,
        args: [{
                selector: 'epsgis-planet-location',
                templateUrl: './location.component.html',
                styleUrls: ['./location.component.scss'],
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZXBzcGxhbmV0L2NvbXBvbmVudHMvbG9jYXRpb24vbG9jYXRpb24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZXBzcGxhbmV0L2NvbXBvbmVudHMvbG9jYXRpb24vbG9jYXRpb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzNDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFBOzs7Ozs7Ozs7O0lDaUJ4RSwyQkFBb0I7SUFDbEIsNEJBQU07SUFBQSxZQUFnQjtJQUFBLGlCQUFPO0lBQzdCLDBDQUd5QztJQUZyQyw2TkFBb0I7SUFHeEIsaUJBQWtCO0lBQ3BCLGlCQUFNOzs7SUFORSxlQUFnQjtJQUFoQix5Q0FBZ0I7SUFFbEIsZUFBb0I7SUFBcEIsdUNBQW9CLGFBQUEsNENBQUE7O0lEVGIsdUJBQXVCLFNBQXZCLHVCQUF3QixTQUFRLHlCQUF5QjtJQStDcEU7UUFFRSxLQUFLLEVBQUUsQ0FBQztRQTlDVixXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRVgsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUVYLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFHWCxhQUFRLEdBQUc7WUFDVCxDQUFDLEVBQUU7Z0JBQ0QsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osR0FBRyxFQUFFLE1BQU07Z0JBQ1gsR0FBRyxFQUFFLEtBQUs7Z0JBQ1YsV0FBVyxFQUFFLE9BQU87YUFDckI7WUFDRCxDQUFDLEVBQUU7Z0JBQ0QsS0FBSyxFQUFFLEtBQUs7Z0JBQ1os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dUJBQXVCLENBd0huQztTQXhIWSx1QkFBdUI7dUZBQXZCLHVCQUF1QjtjQUxuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsV0FBVyxFQUFFLDJCQUEyQjtnQkFDeEMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7YUFDekMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50UmVnaXN0ZXIgfSBmcm9tICdlcHNnaXMnO1xuaW1wb3J0IHsgQmFzZVBsYW5ldFdpZGdldENvbXBvbmVudCB9IGZyb20gJy4uL2Jhc2Utd2lkZ2V0L2Jhc2Utd2lkZ2V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQbGFuZXRJZGVudGlmeUNvbXBvbmVudCB9IGZyb20gJy4uL2lkZW50aWZ5L2lkZW50aWZ5LmNvbXBvbmVudCdcbkBDb21wb25lbnRSZWdpc3Rlcih7XG4gIHVyaTogXCJlcHNnaXMtcGxhbmV0LWxvY2F0aW9uXCIsXG4gIHBhdGg6IFwiZXBzcGxhbmV0L2NvbXBvbmVudHMvbG9jYXRpb25cIixcbiAgbmFtZTogXCJQbGFuZXRMb2NhdGlvbkNvbXBvbmVudFwiXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXBzZ2lzLXBsYW5ldC1sb2NhdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2NhdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xvY2F0aW9uLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFBsYW5ldExvY2F0aW9uQ29tcG9uZW50IGV4dGVuZHMgQmFzZVBsYW5ldFdpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG1hcmtlclhZOiBhbnk7XG4gIC8vIOe7j+W6piDmiJYgeFxuICBYVmFsdWUgPSAwO1xuICAvLyDnuqzluqYg5oiWIHlcbiAgWVZhbHVlID0gMDtcbiAgLy/pq5jluqZcbiAgWlZhbHVlID0gMDtcblxuICAvL+WcsOeQhuWdkOagh+ezuyAgLS0tLS0tLS0gIOebruWJjeWPquWBmuS6huatpOWdkOagh+ezu+S4i+eahOWumuS9jVxuICBpdGVtNDMyNiA9IHtcbiAgICBYOiB7XG4gICAgICBsYWJlbDogXCLnu4/luqbvvJpcIixcbiAgICAgIG1pbjogXCItMTgwXCIsXG4gICAgICBtYXg6IFwiMTgwXCIsXG4gICAgICBwbGFjZUhvbGRlcjogXCLor7fovpPlhaXnu4/luqZcIlxuICAgIH0sXG4gICAgWToge1xuICAgICAgbGFiZWw6IFwi57qs5bqm77yaXCIsXG4gICAgICBtaW46IFwiLTkwXCIsXG4gICAgICBtYXg6IFwiOTBcIixcbiAgICAgIHBsYWNlSG9sZGVyOiBcIuivt+i+k+WFpee6rOW6plwiXG4gICAgfSxcbiAgICBaOiB7XG4gICAgICBsYWJlbDogXCLpq5jluqbvvJpcIixcbiAgICAgIHBsYWNlSG9sZGVyOiBcIuivt+i+k+WFpemrmOW6plwiXG4gICAgfVxuICB9O1xuICAvL1xuICBpdGVtT3RoZXIgPSB7XG4gICAgWDoge1xuICAgICAgbGFiZWw6IFwiWO+8mlwiLFxuICAgICAgbWluOiBcIi05OTk5OTk5OVwiLFxuICAgICAgbWF4OiBcIjk5OTk5OTk5XCIsXG4gICAgICBwbGFjZUhvbGRlcjogXCLor7fovpPlhaXmqKrlnZDmoIdcIlxuICAgIH0sXG4gICAgWToge1xuICAgICAgbGFiZWw6IFwiWe+8mlwiLFxuICAgICAgbWluOiBcIi05OTk5OTk5OVwiLFxuICAgICAgbWF4OiBcIjk5OTk5OTk5XCIsXG4gICAgICBwbGFjZUhvbGRlcjogXCLor7fovpPlhaXnurXlnZDmoIdcIlxuICAgIH1cbiAgfTtcblxuICAvLyDpu5jorqQ0MzI2XG4gIGl0ZW06IGFueSA9IHRoaXMuaXRlbTQzMjY7XG5cbiAgY29uc3RydWN0b3IoXG4gICkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIC8vIHRoaXMuYWRkYnRuKClcbiAgfVxuICAvKipcbiAgKiDojrflj5bnu4Tku7bkv6Hmga9cbiAgKi9cbiAgc3RhdGljIGdldENvbXBJbmZvKCkge1xuICAgIHJldHVybiB7IHBhdGg6IFwiZXBzcGxhbmV0L2NvbXBvbmVudHMvbG9jYXRpb25cIiB9O1xuICB9XG4gIC8vXG4gIGluaXRpYWxpemUoKSB7XG4gICAgdGhpcy5YVmFsdWUgPSB0aGlzLmNvbmZpZy5sb25naXR1ZGU7XG4gICAgdGhpcy5ZVmFsdWUgPSB0aGlzLmNvbmZpZy5sYXRpdHVkZTtcbiAgICB0aGlzLlpWYWx1ZSA9IHRoaXMuY29uZmlnLmhlaWdodDtcbiAgfVxuICB0ZXN0KHJlcykge1xuICAgIC8vIGFsZXJ0KCdmZicpXG4gICAgY29uc29sZS5sb2cocmVzKVxuICB9XG4gIGFkZGJ0bigpIHtcbiAgICBQbGFuZXRJZGVudGlmeUNvbXBvbmVudC5wcm90b3R5cGUuYWRkQnRuKCd0ZXN0JywgKGJ0bixwaWNrT2JqKT0+e1xuICAgICAgYnRuLm9uY2xpY2s9KCk9PntcbiAgICAgICAgY29uc29sZS5sb2cod2luZG93WydwaWNrT2JqJ10pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICAvL+W8gOWni+WumuS9jVxuICBsb2NhdGlvbigpIHtcbiAgICB2YXIgcG9zaXRpb24gPSBudWxsO1xuICAgIC8v5Yig6Zmk5LmL5YmN5re75Yqg55qE5a6e5L2TXG4gICAgaWYgKHRoaXMubWFya2VyWFkpIHtcbiAgICAgIHRoaXMudmlldy5jem0udmlld2VyLmVudGl0aWVzLnJlbW92ZSh0aGlzLm1hcmtlclhZKTtcbiAgICB9XG4gICAgaWYgKHRydWUpIHtcbiAgICAgIHBvc2l0aW9uID0gQ2VzaXVtLkNhcnRlc2lhbjMuZnJvbURlZ3JlZXModGhpcy5YVmFsdWUsIHRoaXMuWVZhbHVlLCB0aGlzLlpWYWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdGhpcy5wb3NpdGlvbiA9IFxuICAgIH1cbiAgICAvL+a3u+WKoOWumuS9jeeCueWunuS9k1xuICAgIHRoaXMubWFya2VyWFkgPSBuZXcgQ2VzaXVtLkVudGl0eSh7XG4gICAgICBpZDogJ+inhuinkuWumuS9jeWdkOaghycsXG4gICAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4gICAgICBwb2ludDoge1xuICAgICAgICBwaXhlbFNpemU6IDYsXG4gICAgICAgIGNvbG9yOiBDZXNpdW0uQ29sb3IuV0hJVEUud2l0aEFscGhhKDAuOSksXG4gICAgICAgIG91dGxpbmVDb2xvcjogQ2VzaXVtLkNvbG9yLldISVRFLndpdGhBbHBoYSgwLjkpLFxuICAgICAgICBvdXRsaW5lV2lkdGg6IDFcbiAgICAgIH0sXG4gICAgICBiaWxsYm9hcmQ6IHtcbiAgICAgICAgaW1hZ2U6IHRoaXMuZm9sZGVyVXJsICsgXCJpbWFnZXMvbG9jYXRpb240LnBuZ1wiLFxuICAgICAgICBob3Jpem9udGFsT3JpZ2luOiBDZXNpdW0uSG9yaXpvbnRhbE9yaWdpbi5DRU5URVIsXG4gICAgICAgIHZlcnRpY2FsT3JpZ2luOiBDZXNpdW0uVmVydGljYWxPcmlnaW4uQk9UVE9NLFxuICAgICAgICBzY2FsZTogLjZcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgdGhpcy52aWV3LmN6bS52aWV3ZXIuZW50aXRpZXMuYWRkKHRoaXMubWFya2VyWFkpO1xuICAgIC8v5a6a5L2NXG4gICAgdGhpcy52aWV3LmN6bS5jYW1lcmEuc2V0Vmlldyh7XG4gICAgICBkZXN0aW5hdGlvbjogcG9zaXRpb25cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XG4gIH1cblxufVxuIiwiPGRpdj5cbiAgPHNwYW4+e3tpdGVtLlgubGFiZWx9fTwvc3Bhbj5cbiAgPG56LWlucHV0LW51bWJlclxuICAgICAgWyhuZ01vZGVsKV09XCJYVmFsdWVcIiBcbiAgICAgIFtuek1pbl09XCJpdGVtLlgubWluXCIgXG4gICAgICBbbnpNYXhdPVwiaXRlbS5YLm1heFwiXG4gICAgICBbbnpTdGVwXT1cIjAuMDAwMVwiIFxuICAgICAgW256UGxhY2VIb2xkZXJdPVwiaXRlbS5YLnBsYWNlSG9sZGVyXCI+XG4gIDwvbnotaW5wdXQtbnVtYmVyPlxuPC9kaXY+XG48ZGl2PlxuICA8c3Bhbj57e2l0ZW0uWS5sYWJlbH19PC9zcGFuPlxuICA8bnotaW5wdXQtbnVtYmVyIFxuICAgICAgWyhuZ01vZGVsKV09XCJZVmFsdWVcIiBcbiAgICAgIFtuek1pbl09XCJpdGVtLlkubWluXCIgXG4gICAgICBbbnpNYXhdPVwiaXRlbS5ZLm1heFwiXG4gICAgICBbbnpTdGVwXT1cIjAuMDAwMVwiIFxuICAgICAgW256UGxhY2VIb2xkZXJdPVwiaXRlbS5ZLnBsYWNlSG9sZGVyXCI+XG4gIDwvbnotaW5wdXQtbnVtYmVyPlxuPC9kaXY+XG48ZGl2ICpuZ0lmPVwiaXRlbS5aXCI+XG4gIDxzcGFuPnt7aXRlbS5aLmxhYmVsfX08L3NwYW4+XG4gIDxuei1pbnB1dC1udW1iZXIgXG4gICAgICBbKG5nTW9kZWwpXT1cIlpWYWx1ZVwiIFxuICAgICAgW256U3RlcF09XCIxXCIgXG4gICAgICBbbnpQbGFjZUhvbGRlcl09XCJpdGVtLloucGxhY2VIb2xkZXJcIj5cbiAgPC9uei1pbnB1dC1udW1iZXI+XG48L2Rpdj5cbjxkaXY+XG4gIDxidXR0b24gbnotYnV0dG9uIG56VHlwZT1cInByaW1hcnlcIiAoY2xpY2spPVwibG9jYXRpb24oKVwiPuWumuS9jTwvYnV0dG9uPlxuPC9kaXY+Il19