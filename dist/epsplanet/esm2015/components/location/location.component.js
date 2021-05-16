import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { ComponentRegister } from 'epsgis';
import { BasePlanetWidgetComponent } from '../base-widget/base-widget.component';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZXBzcGxhbmV0L2NvbXBvbmVudHMvbG9jYXRpb24vbG9jYXRpb24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZXBzcGxhbmV0L2NvbXBvbmVudHMvbG9jYXRpb24vbG9jYXRpb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzNDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7Ozs7Ozs7O0lDa0JqRiwyQkFBb0I7SUFDbEIsNEJBQU07SUFBQSxZQUFnQjtJQUFBLGlCQUFPO0lBQzdCLDBDQUd5QztJQUZyQyw2TkFBb0I7SUFHeEIsaUJBQWtCO0lBQ3BCLGlCQUFNOzs7SUFORSxlQUFnQjtJQUFoQix5Q0FBZ0I7SUFFbEIsZUFBb0I7SUFBcEIsdUNBQW9CLGFBQUEsNENBQUE7O0lEVGIsdUJBQXVCLFNBQXZCLHVCQUF3QixTQUFRLHlCQUF5QjtJQStDcEU7UUFFRSxLQUFLLEVBQUUsQ0FBQztRQTlDVixXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRVgsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUVYLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFHWCxhQUFRLEdBQUc7WUFDVCxDQUFDLEVBQUU7Z0JBQ0QsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osR0FBRyxFQUFFLE1BQU07Z0JBQ1gsR0FBRyxFQUFFLEtBQUs7Z0JBQ1YsV0FBVyxFQUFFLE9BQU87YUFDckI7WUFDRCxDQUFDLEVBQUU7Z0JBQ0QsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osR0FBRyxFQUFFLEtBQUs7Z0JBQ1YsR0FBRyxFQUFFLElBQUk7Z0JBQ1QsV0FB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QUs7UUFDSCw0QkFBTTtRQUFBLFlBQWdCO1FBQUEsaUJBQU87UUFDN0IsMENBS3lDO1FBSnJDLDBKQUFvQjtRQUt4QixpQkFBa0I7UUFDcEIsaUJBQU07UUFDTiwyQkFBSztRQUNILDRCQUFNO1FBQUEsWUFBZ0I7UUFBQSxpQkFBTztRQUM3QiwwQ0FLeUM7UUFKckMsMEpBQW9CO1FBS3hCLGlCQUFrQjtRQUNwQixpQkFBTTtRQUNOLHdFQU9NO1FBQ04sMkJBQUs7UUFDSCxrQ0FBd0Q7UUFBckIscUdBQVMsY0FBVSxJQUFDO1FBQUMsNkJBQUU7UUFBQSxpQkFBUztRQUNyRSxpQkFBTTs7UUE3QkUsZUFBZ0I7UUFBaEIsc0NBQWdCO1FBRWxCLGVBQW9CO1FBQXBCLG9DQUFvQix5QkFBQSx5QkFBQSxrQkFBQSx5Q0FBQTtRQVFsQixlQUFnQjtRQUFoQixzQ0FBZ0I7UUFFbEIsZUFBb0I7UUFBcEIsb0NBQW9CLHlCQUFBLHlCQUFBLGtCQUFBLHlDQUFBO1FBT3BCLGVBQVk7UUFBWixpQ0FBWTs7QUROTCx1QkFBdUI7SUFWbkMsaUJBQWlCLENBQUM7UUFDakIsR0FBRyxFQUFDLHdCQUF3QjtRQUM1QixJQUFJLEVBQUMsK0JBQStCO1FBQ3BDLElBQUksRUFBQyx5QkFBeUI7S0FDL0IsQ0FBQztHQU1XLHVCQUF1QixDQTRHbkM7U0E1R1ksdUJBQXVCO3VGQUF2Qix1QkFBdUI7Y0FMbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFdBQVcsRUFBRSwyQkFBMkI7Z0JBQ3hDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO2FBQ3pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudFJlZ2lzdGVyIH0gZnJvbSAnZXBzZ2lzJztcbmltcG9ydCB7IEJhc2VQbGFuZXRXaWRnZXRDb21wb25lbnQgfSBmcm9tICcuLi9iYXNlLXdpZGdldC9iYXNlLXdpZGdldC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50UmVnaXN0ZXIoe1xuICB1cmk6XCJlcHNnaXMtcGxhbmV0LWxvY2F0aW9uXCIsXG4gIHBhdGg6XCJlcHNwbGFuZXQvY29tcG9uZW50cy9sb2NhdGlvblwiLFxuICBuYW1lOlwiUGxhbmV0TG9jYXRpb25Db21wb25lbnRcIlxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Vwc2dpcy1wbGFuZXQtbG9jYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9jYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2NhdGlvbi5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBQbGFuZXRMb2NhdGlvbkNvbXBvbmVudCBleHRlbmRzIEJhc2VQbGFuZXRXaWRnZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBtYXJrZXJYWTogYW55O1xuICAvLyDnu4/luqYg5oiWIHhcbiAgWFZhbHVlID0gMDtcbiAgLy8g57qs5bqmIOaIliB5XG4gIFlWYWx1ZSA9IDA7XG4gIC8v6auY5bqmXG4gIFpWYWx1ZSA9IDA7XG5cbiAgLy/lnLDnkIblnZDmoIfns7sgIC0tLS0tLS0tICDnm67liY3lj6rlgZrkuobmraTlnZDmoIfns7vkuIvnmoTlrprkvY1cbiAgaXRlbTQzMjYgPSB7XG4gICAgWDoge1xuICAgICAgbGFiZWw6IFwi57uP5bqm77yaXCIsXG4gICAgICBtaW46IFwiLTE4MFwiLFxuICAgICAgbWF4OiBcIjE4MFwiLFxuICAgICAgcGxhY2VIb2xkZXI6IFwi6K+36L6T5YWl57uP5bqmXCJcbiAgICB9LFxuICAgIFk6IHtcbiAgICAgIGxhYmVsOiBcIue6rOW6pu+8mlwiLFxuICAgICAgbWluOiBcIi05MFwiLFxuICAgICAgbWF4OiBcIjkwXCIsXG4gICAgICBwbGFjZUhvbGRlcjogXCLor7fovpPlhaXnuqzluqZcIlxuICAgIH0sXG4gICAgWjoge1xuICAgICAgbGFiZWw6IFwi6auY5bqm77yaXCIsXG4gICAgICBwbGFjZUhvbGRlcjogXCLor7fovpPlhaXpq5jluqZcIlxuICAgIH1cbiAgfTtcbiAgLy9cbiAgaXRlbU90aGVyID0ge1xuICAgIFg6IHtcbiAgICAgIGxhYmVsOiBcIljvvJpcIixcbiAgICAgIG1pbjogXCItOTk5OTk5OTlcIixcbiAgICAgIG1heDogXCI5OTk5OTk5OVwiLFxuICAgICAgcGxhY2VIb2xkZXI6IFwi6K+36L6T5YWl5qiq5Z2Q5qCHXCJcbiAgICB9LFxuICAgIFk6IHtcbiAgICAgIGxhYmVsOiBcIlnvvJpcIixcbiAgICAgIG1pbjogXCItOTk5OTk5OTlcIixcbiAgICAgIG1heDogXCI5OTk5OTk5OVwiLFxuICAgICAgcGxhY2VIb2xkZXI6IFwi6K+36L6T5YWl57q15Z2Q5qCHXCJcbiAgICB9XG4gIH07XG5cbiAgLy8g6buY6K6kNDMyNlxuICBpdGVtOiBhbnkgPSB0aGlzLml0ZW00MzI2O1xuXG4gIGNvbnN0cnVjdG9yKFxuICApIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxuICAvKipcbiAgKiDojrflj5bnu4Tku7bkv6Hmga9cbiAgKi9cbiAgc3RhdGljIGdldENvbXBJbmZvKCkge1xuICAgIHJldHVybiB7IHBhdGg6IFwiZXBzcGxhbmV0L2NvbXBvbmVudHMvbG9jYXRpb25cIiB9O1xuICB9XG4gIC8vXG4gIGluaXRpYWxpemUoKSB7XG4gICAgdGhpcy5YVmFsdWUgPSB0aGlzLmNvbmZpZy5sb25naXR1ZGU7XG4gICAgdGhpcy5ZVmFsdWUgPSB0aGlzLmNvbmZpZy5sYXRpdHVkZTtcbiAgICB0aGlzLlpWYWx1ZSA9IHRoaXMuY29uZmlnLmhlaWdodDtcbiAgfVxuICAvL+W8gOWni+WumuS9jVxuICBsb2NhdGlvbigpIHtcbiAgICB2YXIgcG9zaXRpb24gPSBudWxsO1xuICAgIC8v5Yig6Zmk5LmL5YmN5re75Yqg55qE5a6e5L2TXG4gICAgaWYgKHRoaXMubWFya2VyWFkpIHtcbiAgICAgIHRoaXMudmlldy5jem0udmlld2VyLmVudGl0aWVzLnJlbW92ZSh0aGlzLm1hcmtlclhZKTtcbiAgICB9XG4gICAgaWYgKHRydWUpIHtcbiAgICAgIHBvc2l0aW9uID0gQ2VzaXVtLkNhcnRlc2lhbjMuZnJvbURlZ3JlZXModGhpcy5YVmFsdWUsIHRoaXMuWVZhbHVlLCB0aGlzLlpWYWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdGhpcy5wb3NpdGlvbiA9IFxuICAgIH1cbiAgICAvL+a3u+WKoOWumuS9jeeCueWunuS9k1xuICAgIHRoaXMubWFya2VyWFkgPSBuZXcgQ2VzaXVtLkVudGl0eSh7XG4gICAgICBpZDogJ+inhuinkuWumuS9jeWdkOaghycsXG4gICAgICBwb3NpdGlvbjogcG9zaXRpb24sIFxuICAgICAgcG9pbnQ6IHtcbiAgICAgICAgcGl4ZWxTaXplOiA2LFxuICAgICAgICBjb2xvcjogQ2VzaXVtLkNvbG9yLldISVRFLndpdGhBbHBoYSgwLjkpLFxuICAgICAgICBvdXRsaW5lQ29sb3I6IENlc2l1bS5Db2xvci5XSElURS53aXRoQWxwaGEoMC45KSxcbiAgICAgICAgb3V0bGluZVdpZHRoOiAxXG4gICAgICB9LFxuICAgICAgYmlsbGJvYXJkOiB7XG4gICAgICAgIGltYWdlOiB0aGlzLmZvbGRlclVybCtcImltYWdlcy9sb2NhdGlvbjQucG5nXCIsXG4gICAgICAgIGhvcml6b250YWxPcmlnaW46IENlc2l1bS5Ib3Jpem9udGFsT3JpZ2luLkNFTlRFUixcbiAgICAgICAgdmVydGljYWxPcmlnaW46IENlc2l1bS5WZXJ0aWNhbE9yaWdpbi5CT1RUT00sXG4gICAgICAgIHNjYWxlOiAuNlxuICAgICAgfSxcbiAgICB9KTtcbiAgICB0aGlzLnZpZXcuY3ptLnZpZXdlci5lbnRpdGllcy5hZGQodGhpcy5tYXJrZXJYWSk7XG4gICAgLy/lrprkvY1cbiAgICB0aGlzLnZpZXcuY3ptLmNhbWVyYS5zZXRWaWV3KHtcbiAgICAgIGRlc3RpbmF0aW9uOiBwb3NpdGlvblxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgc3VwZXIubmdPbkRlc3Ryb3koKTtcbiAgfVxuXG59XG4iLCI8ZGl2PlxuICA8c3Bhbj57e2l0ZW0uWC5sYWJlbH19PC9zcGFuPlxuICA8bnotaW5wdXQtbnVtYmVyXG4gICAgICBbKG5nTW9kZWwpXT1cIlhWYWx1ZVwiIFxuICAgICAgW256TWluXT1cIml0ZW0uWC5taW5cIiBcbiAgICAgIFtuek1heF09XCJpdGVtLlgubWF4XCJcbiAgICAgIFtuelN0ZXBdPVwiMC4wMDAxXCIgXG4gICAgICBbbnpQbGFjZUhvbGRlcl09XCJpdGVtLlgucGxhY2VIb2xkZXJcIj5cbiAgPC9uei1pbnB1dC1udW1iZXI+XG48L2Rpdj5cbjxkaXY+XG4gIDxzcGFuPnt7aXRlbS5ZLmxhYmVsfX08L3NwYW4+XG4gIDxuei1pbnB1dC1udW1iZXIgXG4gICAgICBbKG5nTW9kZWwpXT1cIllWYWx1ZVwiIFxuICAgICAgW256TWluXT1cIml0ZW0uWS5taW5cIiBcbiAgICAgIFtuek1heF09XCJpdGVtLlkubWF4XCJcbiAgICAgIFtuelN0ZXBdPVwiMC4wMDAxXCIgXG4gICAgICBbbnpQbGFjZUhvbGRlcl09XCJpdGVtLlkucGxhY2VIb2xkZXJcIj5cbiAgPC9uei1pbnB1dC1udW1iZXI+XG48L2Rpdj5cbjxkaXYgKm5nSWY9XCJpdGVtLlpcIj5cbiAgPHNwYW4+e3tpdGVtLloubGFiZWx9fTwvc3Bhbj5cbiAgPG56LWlucHV0LW51bWJlciBcbiAgICAgIFsobmdNb2RlbCldPVwiWlZhbHVlXCIgXG4gICAgICBbbnpTdGVwXT1cIjFcIiBcbiAgICAgIFtuelBsYWNlSG9sZGVyXT1cIml0ZW0uWi5wbGFjZUhvbGRlclwiPlxuICA8L256LWlucHV0LW51bWJlcj5cbjwvZGl2PlxuPGRpdj5cbiAgPGJ1dHRvbiBuei1idXR0b24gbnpUeXBlPVwicHJpbWFyeVwiIChjbGljayk9XCJsb2NhdGlvbigpXCI+5a6a5L2NPC9idXR0b24+XG48L2Rpdj4iXX0=