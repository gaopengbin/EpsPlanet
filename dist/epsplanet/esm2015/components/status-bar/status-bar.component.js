import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { UtilsService, ComponentRegister } from 'epsgis';
import { BasePlanetWidgetComponent } from '../base-widget/base-widget.component';
import * as i0 from "@angular/core";
let PlanetStatusBarComponent = class PlanetStatusBarComponent extends BasePlanetWidgetComponent {
    constructor(cdr) {
        super();
        this.cdr = cdr;
        this.fpsString = "";
        this.cameraString = "";
        this.baseVelocity = 0.0;
        this.velocity = 0.0;
        this.velocityRatio = 1.0;
        this.lang = {
            longitude: "经度",
            latitude: "纬度",
            height: "高度",
            fps: "帧率",
            heading: "偏航角",
            pitch: "俯仰角",
            roll: "翻滚角",
            meter: "米",
            velocity: "键盘运动速度",
            createPolylineTip: "左键添加点，右键删除点，shift+右键创建完成",
            editPolylineTip: "鼠标移动到其中一个点会出现一个操作栏，点击移动按钮，可以移动折线位置；点击增加按钮，可以在该位置增加一个点；点击删除按钮，可以删除该点",
            createRectangleTip: "点击左键确定矩形中心点，移动鼠标确定矩形方向和对角线长度，再次点击左键创建完成",
            editRectangleTip: "左键点击其中一个点移动矩形位置",
            createCircleTip: "点击左键确定圆的圆心，移动鼠标确定圆的半径，再次点击左键创建完成",
            editCircleTip: "左键点击其中一个点移动圆位置",
            createDoubleArrowTip: "在四个不同位置点击左键创建双箭头",
            editDoubleArrowTip: "左键点击其中一个点移动双箭头位置",
            createFlattenedPolygonTip: "左键添加点，右键删除点，shift+右键停止绘制，上下移动鼠标确定高度，再次点击左键创建完成",
            editFlattenedPolygonTip: "鼠标移动到其中一个点会出现一个操作栏，点击移动按钮，可以移动折线位置；点击增加按钮，可以在该位置增加一个点；点击删除按钮，可以删除该点",
            movableObjectTip: "鼠标左键点击坐标轴x,y,z任意一个轴，轴变黄色，可沿着相应位置进行移动，再次点击，轴恢复原色，停止移动，点击右键坐标轴消失",
            rotatableObjectTip: "鼠标左键点击旋转坐标轴任意一个轴，轴变黄色，可沿着相应位置进行旋转，再次点击，轴恢复原色，停止旋转，点击右键旋转坐标轴消失",
            positionPickingTip: "点击鼠标左键拾取位置"
        };
        this._disposers = [];
    }
    static getCompInfo() {
        return { name: "PlanetStatusBarComponent", path: "epsplanet/components/status-bar" };
    }
    ngOnInit() {
        this._scene = this.view.czm.scene;
        this._camera = this.view.czm.camera;
        const td = Cesium.Math.toDegrees;
        const updateCameraString = () => {
            const camera = this._camera;
            var l = td(camera.positionCartographic.longitude).toFixed(5);
            var b = td(camera.positionCartographic.latitude).toFixed(5);
            var h = camera.positionCartographic.height.toFixed(2);
            var y = td(camera.heading).toFixed(2);
            var p = td(camera.pitch).toFixed(2);
            var r = td(camera.roll).toFixed(2);
            this.cameraString = `${this.lang.longitude}: ${l}° ${this.lang.latitude}: ${b}° ${this.lang.height}: ${h}${this.lang.meter} ${this.lang.heading}: ${y}° ${this.lang.pitch}: ${p}° ${this.lang.roll}: ${r}°`;
            UtilsService.detectChanges(this.cdr);
        };
        this._disposers = [];
        this._disposers.push(this._camera.changed.addEventListener(updateCameraString));
        updateCameraString();
        this._scene.debugShowFramesPerSecond = true;
        const tempDisposer = this._scene._postRender.addEventListener(() => {
            tempDisposer();
            this._scene._performanceContainer.style.visibility = "hidden";
        });
        this._disposers.push(this._scene._postRender.addEventListener(() => {
            if (this._scene._performanceDisplay) {
                this.fpsString = `${this.lang.fps}: ${this._scene._performanceDisplay._fpsText.nodeValue} `;
            }
            else {
                this.fpsString = "";
            }
        }));
        this._disposers.push(XE.MVVM.track(this, "baseVelocity", this.view.camera.immersion, "baseVelocity"));
        this._disposers.push(XE.MVVM.track(this, "velocity", this.view.camera.immersion, "velocity"));
        this._disposers.push(XE.MVVM.bind(this, "velocityRatio", this.view.camera.immersion, "velocityRatio"));
        if (this._uw1) {
            this._uw1 = this._uw1();
        }
        else {
            this._uw1 = XE.MVVM.watch(() => this.view.interaction.creatingPolylineBinding.target, () => {
                if (this.view.interaction.creatingPolylineBinding.target !==
                    undefined) {
                    if (this.view.interaction.creatingPolylineBinding.target
                        .xbsjType === "GeoRectangle") {
                    }
                    else if (this.view.interaction.creatingPolylineBinding.target
                        .xbsjType === "GeoCircle") {
                    }
                    else if (this.view.interaction.creatingPolylineBinding.target
                        .xbsjType === "GeoDoubleArrow") {
                    }
                    else {
                    }
                }
            });
        }
        if (this._uw2) {
            this._uw2 = this._uw2();
        }
        else {
            this._uw2 = XE.MVVM.watch(() => this.view.interaction.editingPolylineBinding.target, () => {
                if (this.view.interaction.editingPolylineBinding.target !==
                    undefined) {
                    if (this.view.interaction.editingPolylineBinding.target
                        .xbsjType === "GeoRectangle") {
                    }
                    else if (this.view.interaction.editingPolylineBinding.target
                        .xbsjType === "GeoCircle") {
                    }
                    else if (this.view.interaction.editingPolylineBinding.target
                        .xbsjType === "GeoDoubleArrow") {
                    }
                    else {
                    }
                }
            });
        }
        if (this._uw3) {
            this._uw3 = this._uw3();
        }
        else {
            this._uw3 = XE.MVVM.watch(() => this.view.interaction.creatingPolygonBinding.target, () => {
                if (this.view.interaction.creatingPolygonBinding.target !==
                    undefined) {
                }
            });
        }
        if (this._uw4) {
            this._uw4 = this._uw4();
        }
        else {
            this._uw4 = XE.MVVM.watch(() => this.view.interaction.flattenedPolygonCreatingBinding.target, () => {
                if (this.view.interaction.flattenedPolygonCreatingBinding
                    .target !== undefined) {
                }
            });
        }
        if (this._uw5) {
            this._uw5 = this._uw5();
        }
        else {
            this._uw5 = XE.MVVM.watch(() => this.view.interaction.editingPolygonBinding.target, () => {
                if (this.view.interaction.editingPolygonBinding.target !==
                    undefined) {
                }
            });
        }
        if (this._uw6) {
            this._uw6 = this._uw4();
        }
        else {
            this._uw6 = XE.MVVM.watch(() => this.view.interaction.movableObjectBinding.target, () => {
                if (this.view.interaction.movableObjectBinding.target !==
                    undefined) {
                }
            });
        }
        if (this._uw7) {
            this._uw7 = this._uw4();
        }
        else {
            this._uw7 = XE.MVVM.watch(() => this.view.interaction.rotatableObjectBinding.target, () => {
                if (this.view.interaction.rotatableObjectBinding.target !==
                    undefined) {
                }
            });
        }
        if (this._uw8) {
            this._uw8 = this._uw4();
        }
        else {
            this._uw8 = XE.MVVM.watch(() => this.view.interaction.positionPickingBinding.target, () => {
                if (this.view.interaction.positionPickingBinding.target !==
                    undefined) {
                }
            });
        }
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this._disposers.forEach(d => d());
        this._disposers.length = 0;
        this._uw1 = this._uw1 && this._uw1();
        this._uw2 = this._uw2 && this._uw2();
        this._uw3 = this._uw3 && this._uw3();
        this._uw4 = this._uw4 && this._uw4();
        this._uw5 = this._uw5 && this._uw5();
        this._uw6 = this._uw6 && this._uw6();
        this._uw7 = this._uw7 && this._uw7();
        this._uw8 = this._uw8 && this._uw8();
    }
    velocityString() {
        return ` ${this.lang.velocity}: ${this.velocity.toFixed(1)} km/h (${this.baseVelocity.toFixed(1)} × ${this.velocityRatio.toFixed(1)})`;
    }
};
PlanetStatusBarComponent.ɵfac = function PlanetStatusBarComponent_Factory(t) { return new (t || PlanetStatusBarComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
PlanetStatusBarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PlanetStatusBarComponent, selectors: [["epsgis-planet-status-bar"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 3, consts: [[1, "status-info"]], template: function PlanetStatusBarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate3("", ctx.fpsString, " ", ctx.cameraString, " ", ctx.velocityString(), "");
    } }, styles: [".status-info[_ngcontent-%COMP%]{background-color: #4c555e; color:#fff; font-size: 14px;}"] });
PlanetStatusBarComponent = __decorate([
    ComponentRegister({
        uri: "epsgis-planet-status-bar",
        path: "epsplanet/components/status-bar",
        name: "PlanetStatusBarComponent"
    })
], PlanetStatusBarComponent);
export { PlanetStatusBarComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PlanetStatusBarComponent, [{
        type: Component,
        args: [{
                selector: 'epsgis-planet-status-bar',
                template: `<div class="status-info">{{ fpsString }} {{cameraString}} {{ velocityString() }}</div>`,
                styles: [
                    `.status-info{background-color: #4c555e; color:#fff; font-size: 14px;}`
                ]
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9lcHNwbGFuZXQvY29tcG9uZW50cy9zdGF0dXMtYmFyL3N0YXR1cy1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQXFCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFDLGlCQUFpQixFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3hELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOztJQWlCcEUsd0JBQXdCLFNBQXhCLHdCQUF5QixTQUFRLHlCQUF5QjtJQWdEckUsWUFDVSxHQUFzQjtRQUFJLEtBQUssRUFBRSxDQUFDO1FBQWxDLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBOUNoQyxjQUFTLEdBQVcsRUFBRSxDQUFDO1FBQ3ZCLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBQzFCLGlCQUFZLEdBQUcsR0FBRyxDQUFDO1FBQ25CLGFBQVEsR0FBRyxHQUFHLENBQUM7UUFDZixrQkFBYSxHQUFHLEdBQUcsQ0FBQztRQUNwQixTQUFJLEdBQVE7WUFDVixTQUFTLEVBQUUsSUFBSTtZQUNmLFFBQVEsRUFBRSxJQUFJO1lBQ2QsTUFBTSxFQUFFLElBQUk7WUFDWixHQUFHLEVBQUUsSUFBSTtZQUNULE9BQU8sRUFBRSxLQUFLO1lBQ2QsS0FBSyxFQUFFLEtBQUs7WUFDWixJQUFJLEVBQUUsS0FBSztZQUNYLEtBQUssRUFBRSxHQUFHO1lBQ1YsUUFBUSxFQUFFLFFBQVE7WUFDbEIsaUJBQWlCLEVBQUUsMEJBQTBCO1lBQzdDLGVBQWUsRUFDYixxRUFBcUU7WUFDdkUsa0JBQWtCLEVBQ2hCLHlDQUF5QztZQUMzQyxnQkFBZ0IsRUFBRSxpQkFBaUI7WUFDbkMsZUFBZSxFQUNiLGtDQUFrQztZQUNwQyxhQUFhLEVBQUUsZ0JBQWdCO1lB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eyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVdGlsc1NlcnZpY2UsQ29tcG9uZW50UmVnaXN0ZXIgfSBmcm9tICdlcHNnaXMnO1xuaW1wb3J0IHsgQmFzZVBsYW5ldFdpZGdldENvbXBvbmVudCB9IGZyb20gJy4uL2Jhc2Utd2lkZ2V0L2Jhc2Utd2lkZ2V0LmNvbXBvbmVudCc7XG4vKipcbiAqIOeKtuaAgeagj++8jOaYvuekuue7j+e6rOW6puOAgemrmOW6puetieS/oeaBr1xuICovXG5cbkBDb21wb25lbnRSZWdpc3Rlcih7XG4gIHVyaTogXCJlcHNnaXMtcGxhbmV0LXN0YXR1cy1iYXJcIixcbiAgcGF0aDogXCJlcHNwbGFuZXQvY29tcG9uZW50cy9zdGF0dXMtYmFyXCIsXG4gIG5hbWU6IFwiUGxhbmV0U3RhdHVzQmFyQ29tcG9uZW50XCJcbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlcHNnaXMtcGxhbmV0LXN0YXR1cy1iYXInLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJzdGF0dXMtaW5mb1wiPnt7IGZwc1N0cmluZyB9fSB7e2NhbWVyYVN0cmluZ319IHt7IHZlbG9jaXR5U3RyaW5nKCkgfX08L2Rpdj5gLFxuICBzdHlsZXM6IFtcbiAgICBgLnN0YXR1cy1pbmZve2JhY2tncm91bmQtY29sb3I6ICM0YzU1NWU7IGNvbG9yOiNmZmY7IGZvbnQtc2l6ZTogMTRweDt9YFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFBsYW5ldFN0YXR1c0JhckNvbXBvbmVudCBleHRlbmRzIEJhc2VQbGFuZXRXaWRnZXRDb21wb25lbnQge1xuICBfc2NlbmU6IGFueTtcbiAgX2NhbWVyYTogYW55O1xuICBmcHNTdHJpbmc6IHN0cmluZyA9IFwiXCI7XG4gIGNhbWVyYVN0cmluZzogc3RyaW5nID0gXCJcIjtcbiAgYmFzZVZlbG9jaXR5ID0gMC4wO1xuICB2ZWxvY2l0eSA9IDAuMDtcbiAgdmVsb2NpdHlSYXRpbyA9IDEuMDtcbiAgbGFuZzogYW55ID0ge1xuICAgIGxvbmdpdHVkZTogXCLnu4/luqZcIixcbiAgICBsYXRpdHVkZTogXCLnuqzluqZcIixcbiAgICBoZWlnaHQ6IFwi6auY5bqmXCIsXG4gICAgZnBzOiBcIuW4p+eOh1wiLFxuICAgIGhlYWRpbmc6IFwi5YGP6Iiq6KeSXCIsXG4gICAgcGl0Y2g6IFwi5L+v5Luw6KeSXCIsXG4gICAgcm9sbDogXCLnv7vmu5rop5JcIixcbiAgICBtZXRlcjogXCLnsbNcIixcbiAgICB2ZWxvY2l0eTogXCLplK7nm5jov5DliqjpgJ/luqZcIixcbiAgICBjcmVhdGVQb2x5bGluZVRpcDogXCLlt6bplK7mt7vliqDngrnvvIzlj7PplK7liKDpmaTngrnvvIxzaGlmdCvlj7PplK7liJvlu7rlrozmiJBcIixcbiAgICBlZGl0UG9seWxpbmVUaXA6XG4gICAgICBcIum8oOagh+enu+WKqOWIsOWFtuS4reS4gOS4queCueS8muWHuueOsOS4gOS4quaTjeS9nOagj++8jOeCueWHu+enu+WKqOaMiemSru+8jOWPr+S7peenu+WKqOaKmOe6v+S9jee9ru+8m+eCueWHu+WinuWKoOaMiemSru+8jOWPr+S7peWcqOivpeS9jee9ruWinuWKoOS4gOS4queCue+8m+eCueWHu+WIoOmZpOaMiemSru+8jOWPr+S7peWIoOmZpOivpeeCuVwiLFxuICAgIGNyZWF0ZVJlY3RhbmdsZVRpcDpcbiAgICAgIFwi54K55Ye75bem6ZSu56Gu5a6a55+p5b2i5Lit5b+D54K577yM56e75Yqo6byg5qCH56Gu5a6a55+p5b2i5pa55ZCR5ZKM5a+56KeS57q/6ZW/5bqm77yM5YaN5qyh54K55Ye75bem6ZSu5Yib5bu65a6M5oiQXCIsXG4gICAgZWRpdFJlY3RhbmdsZVRpcDogXCLlt6bplK7ngrnlh7vlhbbkuK3kuIDkuKrngrnnp7vliqjnn6nlvaLkvY3nva5cIixcbiAgICBjcmVhdGVDaXJjbGVUaXA6XG4gICAgICBcIueCueWHu+W3pumUruehruWumuWchueahOWchuW/g++8jOenu+WKqOm8oOagh+ehruWumuWchueahOWNiuW+hO+8jOWGjeasoeeCueWHu+W3pumUruWIm+W7uuWujOaIkFwiLFxuICAgIGVkaXRDaXJjbGVUaXA6IFwi5bem6ZSu54K55Ye75YW25Lit5LiA5Liq54K556e75Yqo5ZyG5L2N572uXCIsXG4gICAgY3JlYXRlRG91YmxlQXJyb3dUaXA6IFwi5Zyo5Zub5Liq5LiN5ZCM5L2N572u54K55Ye75bem6ZSu5Yib5bu65Y+M566t5aS0XCIsXG4gICAgZWRpdERvdWJsZUFycm93VGlwOiBcIuW3pumUrueCueWHu+WFtuS4reS4gOS4queCueenu+WKqOWPjOeureWktOS9jee9rlwiLFxuICAgIGNyZWF0ZUZsYXR0ZW5lZFBvbHlnb25UaXA6XG4gICAgICBcIuW3pumUrua3u+WKoOeCue+8jOWPs+mUruWIoOmZpOeCue+8jHNoaWZ0K+WPs+mUruWBnOatoue7mOWItu+8jOS4iuS4i+enu+WKqOm8oOagh+ehruWumumrmOW6pu+8jOWGjeasoeeCueWHu+W3pumUruWIm+W7uuWujOaIkFwiLFxuICAgIGVkaXRGbGF0dGVuZWRQb2x5Z29uVGlwOlxuICAgICAgXCLpvKDmoIfnp7vliqjliLDlhbbkuK3kuIDkuKrngrnkvJrlh7rnjrDkuIDkuKrmk43kvZzmoI/vvIzngrnlh7vnp7vliqjmjInpkq7vvIzlj6/ku6Xnp7vliqjmipjnur/kvY3nva7vvJvngrnlh7vlop7liqDmjInpkq7vvIzlj6/ku6XlnKjor6XkvY3nva7lop7liqDkuIDkuKrngrnvvJvngrnlh7vliKDpmaTmjInpkq7vvIzlj6/ku6XliKDpmaTor6XngrlcIixcbiAgICBtb3ZhYmxlT2JqZWN0VGlwOlxuICAgICAgXCLpvKDmoIflt6bplK7ngrnlh7vlnZDmoIfovbR4LHkseuS7u+aEj+S4gOS4qui9tO+8jOi9tOWPmOm7hOiJsu+8jOWPr+ayv+edgOebuOW6lOS9jee9rui/m+ihjOenu+WKqO+8jOWGjeasoeeCueWHu++8jOi9tOaBouWkjeWOn+iJsu+8jOWBnOatouenu+WKqO+8jOeCueWHu+WPs+mUruWdkOagh+i9tOa2iOWksVwiLFxuICAgIHJvdGF0YWJsZU9iamVjdFRpcDpcbiAgICAgIFwi6byg5qCH5bem6ZSu54K55Ye75peL6L2s5Z2Q5qCH6L205Lu75oSP5LiA5Liq6L2077yM6L205Y+Y6buE6Imy77yM5Y+v5rK/552A55u45bqU5L2N572u6L+b6KGM5peL6L2s77yM5YaN5qyh54K55Ye777yM6L205oGi5aSN5Y6f6Imy77yM5YGc5q2i5peL6L2s77yM54K55Ye75Y+z6ZSu5peL6L2s5Z2Q5qCH6L205raI5aSxXCIsXG4gICAgcG9zaXRpb25QaWNraW5nVGlwOiBcIueCueWHu+m8oOagh+W3pumUruaLvuWPluS9jee9rlwiXG4gIH07XG4gIF9kaXNwb3NlcnM6IEFycmF5PGFueT4gPSBbXTtcbiAgX3V3MTogRnVuY3Rpb247XG4gIF91dzI6IEZ1bmN0aW9uO1xuICBfdXczOiBGdW5jdGlvbjtcbiAgX3V3NDogRnVuY3Rpb247XG4gIF91dzU6IEZ1bmN0aW9uO1xuICBfdXc2OiBGdW5jdGlvbjtcbiAgX3V3NzogRnVuY3Rpb247XG4gIF91dzg6IEZ1bmN0aW9uO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgc3VwZXIoKTsgfVxuICBzdGF0aWMgZ2V0Q29tcEluZm8oKSB7XG4gICAgcmV0dXJuIHsgbmFtZTogXCJQbGFuZXRTdGF0dXNCYXJDb21wb25lbnRcIiwgcGF0aDogXCJlcHNwbGFuZXQvY29tcG9uZW50cy9zdGF0dXMtYmFyXCIgfTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3NjZW5lID0gdGhpcy52aWV3LmN6bS5zY2VuZTtcbiAgICB0aGlzLl9jYW1lcmEgPSB0aGlzLnZpZXcuY3ptLmNhbWVyYTtcbiAgICBjb25zdCB0ZCA9IENlc2l1bS5NYXRoLnRvRGVncmVlcztcbiAgICBjb25zdCB1cGRhdGVDYW1lcmFTdHJpbmcgPSAoKSA9PiB7XG4gICAgICBjb25zdCBjYW1lcmEgPSB0aGlzLl9jYW1lcmE7XG5cbiAgICAgIHZhciBsID0gdGQoY2FtZXJhLnBvc2l0aW9uQ2FydG9ncmFwaGljLmxvbmdpdHVkZSkudG9GaXhlZCg1KTtcbiAgICAgIHZhciBiID0gdGQoY2FtZXJhLnBvc2l0aW9uQ2FydG9ncmFwaGljLmxhdGl0dWRlKS50b0ZpeGVkKDUpO1xuICAgICAgdmFyIGggPSBjYW1lcmEucG9zaXRpb25DYXJ0b2dyYXBoaWMuaGVpZ2h0LnRvRml4ZWQoMik7XG4gICAgICB2YXIgeSA9IHRkKGNhbWVyYS5oZWFkaW5nKS50b0ZpeGVkKDIpO1xuICAgICAgdmFyIHAgPSB0ZChjYW1lcmEucGl0Y2gpLnRvRml4ZWQoMik7XG4gICAgICB2YXIgciA9IHRkKGNhbWVyYS5yb2xsKS50b0ZpeGVkKDIpO1xuXG4gICAgICB0aGlzLmNhbWVyYVN0cmluZyA9IGAke3RoaXMubGFuZy5sb25naXR1ZGV9OiAke2x9wrAgJHt0aGlzLmxhbmcubGF0aXR1ZGV9OiAke2J9wrAgJHt0aGlzLmxhbmcuaGVpZ2h0fTogJHtofSR7dGhpcy5sYW5nLm1ldGVyfSAke3RoaXMubGFuZy5oZWFkaW5nfTogJHt5fcKwICR7dGhpcy5sYW5nLnBpdGNofTogJHtwfcKwICR7dGhpcy5sYW5nLnJvbGx9OiAke3J9wrBgO1xuICAgICAgVXRpbHNTZXJ2aWNlLmRldGVjdENoYW5nZXModGhpcy5jZHIpO1xuICAgIH07XG5cbiAgICB0aGlzLl9kaXNwb3NlcnMgPSBbXTtcbiAgICB0aGlzLl9kaXNwb3NlcnMucHVzaChcbiAgICAgIHRoaXMuX2NhbWVyYS5jaGFuZ2VkLmFkZEV2ZW50TGlzdGVuZXIodXBkYXRlQ2FtZXJhU3RyaW5nKVxuICAgICk7XG4gICAgdXBkYXRlQ2FtZXJhU3RyaW5nKCk7XG4gICAgLy8g5bin546H55qE6K6h566X5YCf5Yqp5LqGQ2VzaXVt5Lit55qE5Lic6KW/77yM6ZyA6KaB5byA5ZCvZGVidWdTaG93RnJhbWVzUGVyU2Vjb25kXG4gICAgdGhpcy5fc2NlbmUuZGVidWdTaG93RnJhbWVzUGVyU2Vjb25kID0gdHJ1ZTtcbiAgICBjb25zdCB0ZW1wRGlzcG9zZXIgPSB0aGlzLl9zY2VuZS5fcG9zdFJlbmRlci5hZGRFdmVudExpc3RlbmVyKCgpID0+IHtcbiAgICAgIHRlbXBEaXNwb3NlcigpO1xuICAgICAgdGhpcy5fc2NlbmUuX3BlcmZvcm1hbmNlQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiOyAvLyDpmpDol4/pu5jorqTnmoTluKfnjofmmL7npLrnqpflj6NcbiAgICB9KTtcblxuICAgIHRoaXMuX2Rpc3Bvc2Vycy5wdXNoKFxuICAgICAgdGhpcy5fc2NlbmUuX3Bvc3RSZW5kZXIuYWRkRXZlbnRMaXN0ZW5lcigoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9zY2VuZS5fcGVyZm9ybWFuY2VEaXNwbGF5KSB7XG4gICAgICAgICAgdGhpcy5mcHNTdHJpbmcgPSBgJHt0aGlzLmxhbmcuZnBzfTogJHt0aGlzLl9zY2VuZS5fcGVyZm9ybWFuY2VEaXNwbGF5Ll9mcHNUZXh0Lm5vZGVWYWx1ZX0gYDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmZwc1N0cmluZyA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgICB0aGlzLl9kaXNwb3NlcnMucHVzaChcbiAgICAgIFhFLk1WVk0udHJhY2soXG4gICAgICAgIHRoaXMsXG4gICAgICAgIFwiYmFzZVZlbG9jaXR5XCIsXG4gICAgICAgIHRoaXMudmlldy5jYW1lcmEuaW1tZXJzaW9uLFxuICAgICAgICBcImJhc2VWZWxvY2l0eVwiXG4gICAgICApXG4gICAgKTtcbiAgICB0aGlzLl9kaXNwb3NlcnMucHVzaChcbiAgICAgIFhFLk1WVk0udHJhY2soXG4gICAgICAgIHRoaXMsXG4gICAgICAgIFwidmVsb2NpdHlcIixcbiAgICAgICAgdGhpcy52aWV3LmNhbWVyYS5pbW1lcnNpb24sXG4gICAgICAgIFwidmVsb2NpdHlcIlxuICAgICAgKVxuICAgICk7XG4gICAgdGhpcy5fZGlzcG9zZXJzLnB1c2goXG4gICAgICBYRS5NVlZNLmJpbmQoXG4gICAgICAgIHRoaXMsXG4gICAgICAgIFwidmVsb2NpdHlSYXRpb1wiLFxuICAgICAgICB0aGlzLnZpZXcuY2FtZXJhLmltbWVyc2lvbixcbiAgICAgICAgXCJ2ZWxvY2l0eVJhdGlvXCJcbiAgICAgIClcbiAgICApO1xuXG4gICAgaWYgKHRoaXMuX3V3MSkge1xuICAgICAgdGhpcy5fdXcxID0gdGhpcy5fdXcxKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3V3MSA9IFhFLk1WVk0ud2F0Y2goXG4gICAgICAgICgpID0+IHRoaXMudmlldy5pbnRlcmFjdGlvbi5jcmVhdGluZ1BvbHlsaW5lQmluZGluZy50YXJnZXQsXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLnZpZXcuaW50ZXJhY3Rpb24uY3JlYXRpbmdQb2x5bGluZUJpbmRpbmcudGFyZ2V0ICE9PVxuICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHRoaXMudmlldy5pbnRlcmFjdGlvbi5jcmVhdGluZ1BvbHlsaW5lQmluZGluZy50YXJnZXRcbiAgICAgICAgICAgICAgICAueGJzalR5cGUgPT09IFwiR2VvUmVjdGFuZ2xlXCJcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAvLyB0aGlzLiRyb290LiRlYXJ0aFVJLnByb21wdEluZm8odGhpcy5sYW5nLmNyZWF0ZVJlY3RhbmdsZVRpcCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICB0aGlzLnZpZXcuaW50ZXJhY3Rpb24uY3JlYXRpbmdQb2x5bGluZUJpbmRpbmcudGFyZ2V0XG4gICAgICAgICAgICAgICAgLnhic2pUeXBlID09PSBcIkdlb0NpcmNsZVwiXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgLy8gdGhpcy4kcm9vdC4kZWFydGhVSS5wcm9tcHRJbmZvKHRoaXMubGFuZy5jcmVhdGVDaXJjbGVUaXApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgdGhpcy52aWV3LmludGVyYWN0aW9uLmNyZWF0aW5nUG9seWxpbmVCaW5kaW5nLnRhcmdldFxuICAgICAgICAgICAgICAgIC54YnNqVHlwZSA9PT0gXCJHZW9Eb3VibGVBcnJvd1wiXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgLy8gdGhpcy4kcm9vdC4kZWFydGhVSS5wcm9tcHRJbmZvKHRoaXMubGFuZy5jcmVhdGVEb3VibGVBcnJvd1RpcCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyB0aGlzLiRyb290LiRlYXJ0aFVJLnByb21wdEluZm8odGhpcy5sYW5nLmNyZWF0ZVBvbHlsaW5lVGlwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICAgIGlmICh0aGlzLl91dzIpIHtcbiAgICAgIHRoaXMuX3V3MiA9IHRoaXMuX3V3MigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl91dzIgPSBYRS5NVlZNLndhdGNoKFxuICAgICAgICAoKSA9PiB0aGlzLnZpZXcuaW50ZXJhY3Rpb24uZWRpdGluZ1BvbHlsaW5lQmluZGluZy50YXJnZXQsXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLnZpZXcuaW50ZXJhY3Rpb24uZWRpdGluZ1BvbHlsaW5lQmluZGluZy50YXJnZXQgIT09XG4gICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgdGhpcy52aWV3LmludGVyYWN0aW9uLmVkaXRpbmdQb2x5bGluZUJpbmRpbmcudGFyZ2V0XG4gICAgICAgICAgICAgICAgLnhic2pUeXBlID09PSBcIkdlb1JlY3RhbmdsZVwiXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgLy90aGlzLiRyb290LiRlYXJ0aFVJLnByb21wdEluZm8odGhpcy5sYW5nLmVkaXRSZWN0YW5nbGVUaXApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgdGhpcy52aWV3LmludGVyYWN0aW9uLmVkaXRpbmdQb2x5bGluZUJpbmRpbmcudGFyZ2V0XG4gICAgICAgICAgICAgICAgLnhic2pUeXBlID09PSBcIkdlb0NpcmNsZVwiXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgLy8gdGhpcy4kcm9vdC4kZWFydGhVSS5wcm9tcHRJbmZvKHRoaXMubGFuZy5lZGl0Q2lyY2xlVGlwKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgIHRoaXMudmlldy5pbnRlcmFjdGlvbi5lZGl0aW5nUG9seWxpbmVCaW5kaW5nLnRhcmdldFxuICAgICAgICAgICAgICAgIC54YnNqVHlwZSA9PT0gXCJHZW9Eb3VibGVBcnJvd1wiXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgLy8gdGhpcy4kcm9vdC4kZWFydGhVSS5wcm9tcHRJbmZvKHRoaXMubGFuZy5lZGl0RG91YmxlQXJyb3dUaXApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gdGhpcy4kcm9vdC4kZWFydGhVSS5wcm9tcHRJbmZvKHRoaXMubGFuZy5lZGl0UG9seWxpbmVUaXApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3V3Mykge1xuICAgICAgdGhpcy5fdXczID0gdGhpcy5fdXczKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3V3MyA9IFhFLk1WVk0ud2F0Y2goXG4gICAgICAgICgpID0+IHRoaXMudmlldy5pbnRlcmFjdGlvbi5jcmVhdGluZ1BvbHlnb25CaW5kaW5nLnRhcmdldCxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMudmlldy5pbnRlcmFjdGlvbi5jcmVhdGluZ1BvbHlnb25CaW5kaW5nLnRhcmdldCAhPT1cbiAgICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgLy8gdGhpcy4kcm9vdC4kZWFydGhVSS5wcm9tcHRJbmZvKHRoaXMubGFuZy5jcmVhdGVQb2x5Z29uVGlwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICAgIGlmICh0aGlzLl91dzQpIHtcbiAgICAgIHRoaXMuX3V3NCA9IHRoaXMuX3V3NCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl91dzQgPSBYRS5NVlZNLndhdGNoKFxuICAgICAgICAoKSA9PlxuICAgICAgICAgIHRoaXMudmlldy5pbnRlcmFjdGlvbi5mbGF0dGVuZWRQb2x5Z29uQ3JlYXRpbmdCaW5kaW5nLnRhcmdldCxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMudmlldy5pbnRlcmFjdGlvbi5mbGF0dGVuZWRQb2x5Z29uQ3JlYXRpbmdCaW5kaW5nXG4gICAgICAgICAgICAgIC50YXJnZXQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgLy8gdGhpcy4kcm9vdC4kZWFydGhVSS5wcm9tcHRJbmZvKHRoaXMubGFuZy5jcmVhdGVGbGF0dGVuZWRQb2x5Z29uVGlwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICAgIGlmICh0aGlzLl91dzUpIHtcbiAgICAgIHRoaXMuX3V3NSA9IHRoaXMuX3V3NSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl91dzUgPSBYRS5NVlZNLndhdGNoKFxuICAgICAgICAoKSA9PiB0aGlzLnZpZXcuaW50ZXJhY3Rpb24uZWRpdGluZ1BvbHlnb25CaW5kaW5nLnRhcmdldCxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMudmlldy5pbnRlcmFjdGlvbi5lZGl0aW5nUG9seWdvbkJpbmRpbmcudGFyZ2V0ICE9PVxuICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICAvL3RoaXMuJHJvb3QuJGVhcnRoVUkucHJvbXB0SW5mbyh0aGlzLmxhbmcuZWRpdEZsYXR0ZW5lZFBvbHlnb25UaXApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3V3Nikge1xuICAgICAgdGhpcy5fdXc2ID0gdGhpcy5fdXc0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3V3NiA9IFhFLk1WVk0ud2F0Y2goXG4gICAgICAgICgpID0+IHRoaXMudmlldy5pbnRlcmFjdGlvbi5tb3ZhYmxlT2JqZWN0QmluZGluZy50YXJnZXQsXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLnZpZXcuaW50ZXJhY3Rpb24ubW92YWJsZU9iamVjdEJpbmRpbmcudGFyZ2V0ICE9PVxuICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICAvLyB0aGlzLiRyb290LiRlYXJ0aFVJLnByb21wdEluZm8odGhpcy5sYW5nLm1vdmFibGVPYmplY3RUaXApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3V3Nykge1xuICAgICAgdGhpcy5fdXc3ID0gdGhpcy5fdXc0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3V3NyA9IFhFLk1WVk0ud2F0Y2goXG4gICAgICAgICgpID0+IHRoaXMudmlldy5pbnRlcmFjdGlvbi5yb3RhdGFibGVPYmplY3RCaW5kaW5nLnRhcmdldCxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMudmlldy5pbnRlcmFjdGlvbi5yb3RhdGFibGVPYmplY3RCaW5kaW5nLnRhcmdldCAhPT1cbiAgICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgLy90aGlzLiRyb290LiRlYXJ0aFVJLnByb21wdEluZm8odGhpcy5sYW5nLnJvdGF0YWJsZU9iamVjdFRpcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdXc4KSB7XG4gICAgICB0aGlzLl91dzggPSB0aGlzLl91dzQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdXc4ID0gWEUuTVZWTS53YXRjaChcbiAgICAgICAgKCkgPT4gdGhpcy52aWV3LmludGVyYWN0aW9uLnBvc2l0aW9uUGlja2luZ0JpbmRpbmcudGFyZ2V0LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy52aWV3LmludGVyYWN0aW9uLnBvc2l0aW9uUGlja2luZ0JpbmRpbmcudGFyZ2V0ICE9PVxuICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICAvL3RoaXMuJHJvb3QuJGVhcnRoVUkucHJvbXB0SW5mbyh0aGlzLmxhbmcucG9zaXRpb25QaWNraW5nVGlwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuXG4gIH1cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgc3VwZXIubmdPbkRlc3Ryb3koKTtcbiAgICB0aGlzLl9kaXNwb3NlcnMuZm9yRWFjaChkID0+IGQoKSk7XG4gICAgdGhpcy5fZGlzcG9zZXJzLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5fdXcxID0gdGhpcy5fdXcxICYmIHRoaXMuX3V3MSgpO1xuICAgIHRoaXMuX3V3MiA9IHRoaXMuX3V3MiAmJiB0aGlzLl91dzIoKTtcbiAgICB0aGlzLl91dzMgPSB0aGlzLl91dzMgJiYgdGhpcy5fdXczKCk7XG4gICAgdGhpcy5fdXc0ID0gdGhpcy5fdXc0ICYmIHRoaXMuX3V3NCgpO1xuICAgIHRoaXMuX3V3NSA9IHRoaXMuX3V3NSAmJiB0aGlzLl91dzUoKTtcbiAgICB0aGlzLl91dzYgPSB0aGlzLl91dzYgJiYgdGhpcy5fdXc2KCk7XG4gICAgdGhpcy5fdXc3ID0gdGhpcy5fdXc3ICYmIHRoaXMuX3V3NygpO1xuICAgIHRoaXMuX3V3OCA9IHRoaXMuX3V3OCAmJiB0aGlzLl91dzgoKTtcbiAgfVxuICB2ZWxvY2l0eVN0cmluZygpIHtcbiAgICByZXR1cm4gYCAke3RoaXMubGFuZy52ZWxvY2l0eX06ICR7dGhpcy52ZWxvY2l0eS50b0ZpeGVkKFxuICAgICAgMVxuICAgICl9IGttL2ggKCR7dGhpcy5iYXNlVmVsb2NpdHkudG9GaXhlZCgxKX0gw5cgJHt0aGlzLnZlbG9jaXR5UmF0aW8udG9GaXhlZChcbiAgICAgIDFcbiAgICApfSlgO1xuICB9XG59XG4iXX0=