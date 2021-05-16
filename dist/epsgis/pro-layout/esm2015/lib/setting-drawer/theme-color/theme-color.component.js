import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/tooltip";
import * as i3 from "ng-zorro-antd/core/transition-patch";
import * as i4 from "ng-zorro-antd/icon";
function ThemeColorComponent_ng_container_4_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 6);
} }
function ThemeColorComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 4);
    i0.ɵɵlistener("click", function ThemeColorComponent_ng_container_4_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r4); const color_r1 = ctx.$implicit; const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.select(color_r1.color); });
    i0.ɵɵtemplate(2, ThemeColorComponent_ng_container_4_i_2_Template, 1, 0, "i", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const color_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("background-color", color_r1.color);
    i0.ɵɵproperty("nzTooltipTitle", color_r1.name);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", color_r1.color == ctx_r0.value);
} }
export class ThemeColorComponent {
    constructor() {
        this.onChange = new EventEmitter();
    }
    ngOnInit() {
        this.colorList = this.colors || [
            {
                key: 'dust',
                color: '#F5222D',
                name: '薄暮'
            },
            {
                key: 'volcano',
                color: '#FA541C',
                name: '火山'
            },
            {
                key: 'sunset',
                color: '#FAAD14',
                name: '日暮'
            },
            {
                key: 'cyan',
                color: '#13C2C2',
                name: '明青'
            },
            {
                key: 'green',
                color: '#52C41A',
                name: '极光绿'
            },
            {
                key: 'daybreak',
                color: '#1890FF',
                name: '拂晓蓝（默认）'
            },
            {
                key: 'geekblue',
                color: '#2F54EB',
                name: '极客蓝'
            },
            {
                key: 'purple',
                color: '#722ED1',
                name: '酱紫'
            },
        ];
    }
    select(key) {
        this.value = key;
        this.onChange.emit(this.value);
    }
}
ThemeColorComponent.ɵfac = function ThemeColorComponent_Factory(t) { return new (t || ThemeColorComponent)(); };
ThemeColorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ThemeColorComponent, selectors: [["pro-theme-color"]], inputs: { colors: "colors", title: "title", value: "value" }, outputs: { onChange: "onChange" }, exportAs: ["proThemeColor"], decls: 5, vars: 2, consts: [[1, "theme-color"], [1, "theme-color-title"], [1, "theme-color-content"], [4, "ngFor", "ngForOf"], ["nz-tooltip", "", 1, "theme-color-block", 3, "nzTooltipTitle", "click"], ["nz-icon", "", "nzType", "check", 4, "ngIf"], ["nz-icon", "", "nzType", "check"]], template: function ThemeColorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "h3", 1);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 2);
        i0.ɵɵtemplate(4, ThemeColorComponent_ng_container_4_Template, 3, 4, "ng-container", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.title);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.colorList);
    } }, directives: [i1.NgForOf, i2.NzTooltipDirective, i1.NgIf, i3.ɵNzTransitionPatchDirective, i4.NzIconDirective], styles: [".ant-pro-setting-drawer-content{position:relative;min-height:100%;background:#fff}.ant-pro-setting-drawer-content .ant-list-item span{flex:1}.ant-pro-setting-drawer-block-checbox{display:flex;background:#fff}.ant-pro-setting-drawer-block-checbox-item{position:relative;margin-right:16px;border-radius:2px;cursor:pointer}.ant-pro-setting-drawer-block-checbox-item img{width:48px}.ant-pro-setting-drawer-block-checbox-selectIcon{position:absolute;top:0;right:0;width:100%;height:100%;padding-top:15px;padding-left:24px;color:#1890ff;font-weight:700;font-size:14px}.ant-pro-setting-drawer-color_block{display:inline-block;width:38px;height:22px;margin:4px 12px 4px 4px;vertical-align:middle;border-radius:4px;cursor:pointer}.ant-pro-setting-drawer-title{margin-bottom:12px;color:rgba(0,0,0,.85);font-size:14px;line-height:22px}.ant-pro-setting-drawer-handle{position:absolute;top:240px;right:300px;z-index:0;display:flex;align-items:center;justify-content:center;width:48px;height:48px;font-size:16px;text-align:center;background:#1890ff;border-radius:4px 0 0 4px;cursor:pointer;pointer-events:auto}.ant-pro-setting-drawer-production-hint{margin-top:16px;font-size:12px}.ant-pro-setting-drawer-content .theme-color{margin-top:24px;overflow:hidden}.ant-pro-setting-drawer-content .theme-color .theme-color-title{margin-bottom:12px;font-size:14px;line-height:22px}.ant-pro-setting-drawer-content .theme-color .theme-color-block{float:left;width:20px;height:20px;margin-right:8px;color:#fff;font-weight:700;text-align:center;border-radius:2px;cursor:pointer}"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ThemeColorComponent, [{
        type: Component,
        args: [{
                selector: 'pro-theme-color',
                templateUrl: 'theme-color.component.html',
                styleUrls: ['theme-color.component.less'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                exportAs: 'proThemeColor',
                preserveWhitespaces: false,
            }]
    }], function () { return []; }, { colors: [{
            type: Input
        }], title: [{
            type: Input
        }], value: [{
            type: Input
        }], onChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtY29sb3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcHJvLWxheW91dC9zcmMvbGliL3NldHRpbmctZHJhd2VyL3RoZW1lLWNvbG9yL3RoZW1lLWNvbG9yLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Byby1sYXlvdXQvc3JjL2xpYi9zZXR0aW5nLWRyYXdlci90aGVtZS1jb2xvci90aGVtZS1jb2xvci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0lDU2pILHVCQUEyRDs7OztJQU4vRCw2QkFBOEM7SUFDNUMsOEJBSW1DO0lBQTlCLHVPQUE2QjtJQUNoQywrRUFBMkQ7SUFDN0QsaUJBQU07SUFDUiwwQkFBZTs7OztJQUpSLGVBQXNDO0lBQXRDLGtEQUFzQztJQUZ0Qyw4Q0FBNkI7SUFJTCxlQUEwQjtJQUExQixxREFBMEI7O0FERTdELE1BQU0sT0FBTyxtQkFBbUI7SUFTOUI7UUFKVSxhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFNM0QsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUk7WUFDOUI7Z0JBQ0UsR0FBRyxFQUFFLE1BQU07Z0JBQ1gsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLElBQUksRUFBRSxJQUFJO2FBQ1g7WUFDRDtnQkFDRSxHQUFHLEVBQUUsU0FBUztnQkFDZCxLQUFLLEVBQUUsU0FBUztnQkFDaEIsSUFBSSxFQUFFLElBQUk7YUFDWDtZQUNEO2dCQUNFLEdBQUcsRUFBRSxRQUFRO2dCQUNiLEtBQUssRUFBRSxTQUFTO2dCQUNoQixJQUFJLEVBQUUsSUFBSTthQUNYO1lBQ0Q7Z0JBQ0UsR0FBRyxFQUFFLE1BQU07Z0JBQ1gsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLElBQUksRUFBRSxJQUFJO2FBQ1g7WUFDRDtnQkFDRSxHQUFHLEVBQUUsT0FBTztnQkFDWixLQUFLLEVBQUUsU0FBUztnQkFDaEIsSUFBSSxFQUFFLEtBQUs7YUFDWjtZQUNEO2dCQUNFLEdBQUcsRUFBRSxVQUFVO2dCQUNmLEtBQUssRUFBRSxTQUFTO2dCQUNoQixJQUFJLEVBQUUsU0FBUzthQUNoQjtZQUNEO2dCQUNFLEdBQUcsRUFBRSxVQUFVO2dCQUNmLEtBQUssRUFBRSxTQUFTO2dCQUNoQixJQUFJLEVBQUUsS0FBSzthQUNaO1lBQ0Q7Z0JBQ0UsR0FBRyxFQUFFLFFBQVE7Z0JBQ2IsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLElBQUksRUFBRSxJQUFJO2FBQ1g7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELE1BQU0sQ0FBQyxHQUFXO1FBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDOztzRkE3RFUsbUJBQW1CO3dEQUFuQixtQkFBbUI7UUNYaEMsOEJBQXlCO1FBQ3ZCLDZCQUE4QjtRQUFBLFlBQVM7UUFBQSxpQkFBSztRQUM1Qyw4QkFBaUM7UUFDL0Isc0ZBUWU7UUFDakIsaUJBQU07UUFDUixpQkFBTTs7UUFaMEIsZUFBUztRQUFULCtCQUFTO1FBRUwsZUFBWTtRQUFaLHVDQUFZOzt1RkRRbkMsbUJBQW1CO2NBVC9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixXQUFXLEVBQUUsNEJBQTRCO2dCQUN6QyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztnQkFDekMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxRQUFRLEVBQUUsZUFBZTtnQkFDekIsbUJBQW1CLEVBQUUsS0FBSzthQUMzQjtzQ0FHVSxNQUFNO2tCQUFkLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDSSxRQUFRO2tCQUFqQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwcm8tdGhlbWUtY29sb3InLFxuICB0ZW1wbGF0ZVVybDogJ3RoZW1lLWNvbG9yLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3RoZW1lLWNvbG9yLmNvbXBvbmVudC5sZXNzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBleHBvcnRBczogJ3Byb1RoZW1lQ29sb3InLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgVGhlbWVDb2xvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgY29sb3JzOiBhbnlbXTtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgdmFsdWU6IHN0cmluZztcbiAgQE91dHB1dCgpIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb2xvckxpc3Q6IGFueVtdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNvbG9yTGlzdCA9IHRoaXMuY29sb3JzIHx8IFtcbiAgICAgIHtcbiAgICAgICAga2V5OiAnZHVzdCcsXG4gICAgICAgIGNvbG9yOiAnI0Y1MjIyRCcsXG4gICAgICAgIG5hbWU6ICfoloTmmq4nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6ICd2b2xjYW5vJyxcbiAgICAgICAgY29sb3I6ICcjRkE1NDFDJyxcbiAgICAgICAgbmFtZTogJ+eBq+WxsSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ3N1bnNldCcsXG4gICAgICAgIGNvbG9yOiAnI0ZBQUQxNCcsXG4gICAgICAgIG5hbWU6ICfml6Xmmq4nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6ICdjeWFuJyxcbiAgICAgICAgY29sb3I6ICcjMTNDMkMyJyxcbiAgICAgICAgbmFtZTogJ+aYjumdkidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ2dyZWVuJyxcbiAgICAgICAgY29sb3I6ICcjNTJDNDFBJyxcbiAgICAgICAgbmFtZTogJ+aegeWFiee7vydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ2RheWJyZWFrJyxcbiAgICAgICAgY29sb3I6ICcjMTg5MEZGJyxcbiAgICAgICAgbmFtZTogJ+aLguaZk+iTne+8iOm7mOiupO+8iSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ2dlZWtibHVlJyxcbiAgICAgICAgY29sb3I6ICcjMkY1NEVCJyxcbiAgICAgICAgbmFtZTogJ+aegeWuouiTnSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ3B1cnBsZScsXG4gICAgICAgIGNvbG9yOiAnIzcyMkVEMScsXG4gICAgICAgIG5hbWU6ICfphbHntKsnXG4gICAgICB9LFxuICAgIF07XG4gIH1cblxuICBzZWxlY3Qoa2V5OiBzdHJpbmcpIHtcbiAgICB0aGlzLnZhbHVlID0ga2V5O1xuICAgIHRoaXMub25DaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cInRoZW1lLWNvbG9yXCI+XG4gIDxoMyBjbGFzcz1cInRoZW1lLWNvbG9yLXRpdGxlXCI+e3t0aXRsZX19PC9oMz5cbiAgPGRpdiBjbGFzcz1cInRoZW1lLWNvbG9yLWNvbnRlbnRcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBjb2xvciBvZiBjb2xvckxpc3RcIj5cbiAgICAgIDxkaXYgbnotdG9vbHRpcFxuICAgICAgICAgICBbbnpUb29sdGlwVGl0bGVdPVwiY29sb3IubmFtZVwiXG4gICAgICAgICAgIGNsYXNzPVwidGhlbWUtY29sb3ItYmxvY2tcIlxuICAgICAgICAgICBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJjb2xvci5jb2xvclwiXG4gICAgICAgICAgIChjbGljayk9XCJzZWxlY3QoY29sb3IuY29sb3IpXCI+XG4gICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwiY2hlY2tcIiAqbmdJZj1cImNvbG9yLmNvbG9yID09IHZhbHVlXCI+PC9pPlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=