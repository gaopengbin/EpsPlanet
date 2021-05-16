import { __decorate } from "tslib";
import { Component, Optional, HostListener, HostBinding } from '@angular/core';
import { WidgetType, WidgetState } from '../../models/base-widget';
import { BaseWidgetComponent } from '../base-widget/base-widget.component';
import * as _ from "lodash";
import { ComponentRegister } from '../../decorator/decorators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/icon";
function OnScreenWidgetIconComponent_img_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 2);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("src", ctx_r0.icon, i0.ɵɵsanitizeUrl);
} }
function OnScreenWidgetIconComponent_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 3);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzIconfont", ctx_r1.icon);
} }
let OnScreenWidgetIconComponent = class OnScreenWidgetIconComponent extends BaseWidgetComponent {
    constructor(viewContainerRef, cdrf) {
        super();
        this.viewContainerRef = viewContainerRef;
        this.cdrf = cdrf;
        this.widget = null;
        this.panel = null;
        this.panelConfig = null;
        this.isShowImg = true;
        this.spacing = 2;
        this.iconStyleDisplay = "";
        this.type = WidgetType.icon;
    }
    ngOnInit() {
        super.ngOnInit();
        this.startup();
    }
    setProps(options) {
        if (options.compRef) {
            this.widget = options.compRef;
            this.appConfig = this.widget.instance.appConfig;
            if (this.globalParams.mapConfig.is3D) {
                this.view = this.widget.instance.view;
            }
            else {
                this.map = this.widget.instance.map;
            }
            this.widgetConfig = this.widget.instance.widgetConfig;
            this.config = this.widget.instance.config;
        }
        else {
            this.appConfig = options.appConfig;
            if (this.globalParams.mapConfig.is3D) {
                this.view = options.map;
            }
            else {
                this.map = options.map;
            }
            this.widgetConfig = options.widgetConfig;
        }
        this.id = this.configId = this.widgetConfig.id;
        this.label = this.tooltip = this.title = this.widgetConfig.label;
        this.folderUrl = this.widgetConfig.folderUrl;
        if (typeof (this.widgetConfig.icon) != "undefined" && this.widgetConfig.icon != "")
            this.icon = this.widgetConfig.icon;
        else if (typeof (this.widgetConfig.manifest.icon) != "undefined" && this.widgetConfig.manifest.icon != "") {
            this.icon = this.widgetConfig.manifest.icon;
            this.isShowImg = false;
        }
        else
            this.icon = this.folderUrl + "images/icon.png";
        this.uri = this.widgetConfig.uri;
        this.gid = this.widgetConfig.gid;
        let _position = _.cloneDeep(this.widgetConfig.position);
        _position.width = "32px";
        _position.height = "32px";
        super.setPosition(_position);
        this.panelConfig = _.cloneDeep(this.widgetConfig);
        if (this.widgetConfig.showIcon === false) {
            this.iconStyleDisplay = "none";
        }
    }
    ngOnDestroy() {
        this.destroy();
    }
    ngAfterViewInit() {
    }
    resetPanelPosition() {
        if (this.commonService.isMobile()) {
            return this.panelConfig.position;
        }
        const _isInMap = this.widgetConfig.position.relativeTo !== "browser";
        let _containerBounds;
        if (_isInMap) {
            const _ele = this.commonService.getComponentRootNode(this.mapManager.comRefMap);
            if (_ele) {
                _containerBounds = this.commonService.getElementBounds(_ele);
            }
        }
        else {
            _containerBounds = document.querySelector("epsgis-comp-container").getBoundingClientRect();
        }
        let eleIcon = this.viewContainerRef.element.nativeElement, bounds = this.commonService.getElementBounds(eleIcon), inRight = false;
        if (_containerBounds.width - bounds.right < _containerBounds.width / 2) {
            inRight = true;
        }
        if (inRight) {
            this.panelConfig.position.left = bounds.left - parseFloat(this.widgetConfig.position.width) - this.spacing - _containerBounds.left;
            this.panelConfig.position.right = _containerBounds.right - bounds.left - this.spacing;
        }
        else {
            if (bounds.left + bounds.width + parseFloat(this.widgetConfig.position.width) + this.spacing > _containerBounds.width) {
                this.panelConfig.position.left = bounds.left - parseFloat(this.widgetConfig.position.width) - this.spacing - _containerBounds.left;
            }
            else {
                this.panelConfig.position.left = bounds.left + bounds.width + this.spacing - _containerBounds.left;
            }
        }
        if (parseFloat(this.panelConfig.position.left) <= -1) {
            if (inRight) {
                this.panelConfig.position.left = this.spacing;
                this.panelConfig.position.width = bounds.left - parseFloat(this.panelConfig.position.left) - this.spacing * 2 - _containerBounds.left;
            }
            else {
                this.panelConfig.position.left = bounds.left + bounds.width + this.spacing - _containerBounds.left;
                this.panelConfig.position.width = _containerBounds.width - bounds.right - this.spacing * 2;
            }
        }
        if (bounds.top + parseFloat(this.widgetConfig.position.height) + this.spacing > _containerBounds.height) {
            this.panelConfig.position.top = bounds.top - parseFloat(this.widgetConfig.position.height) + this.spacing - _containerBounds.top;
        }
        else {
            this.panelConfig.position.top = bounds.top - _containerBounds.top;
        }
        if (parseFloat(this.panelConfig.position.top) <= -1) {
            this.panelConfig.position.top = bounds.top - _containerBounds.top;
            this.panelConfig.position.height = _containerBounds.height - bounds.top - this.spacing * 2;
        }
        return this.panelConfig.position;
    }
    onMouseClick(evt) {
        this.onClick(evt);
    }
    startup() {
        this.started = true;
    }
    onClick(evt) {
        if (this.state === WidgetState.closed || (this.panel && this.panel.instance.state === WidgetState.closed)) {
            this.switchToOpen();
        }
        else {
            this.switchToClose();
        }
    }
    _isDockPanel() {
        let _uri = "", _dock = "";
        if (this.widgetConfig.panel && this.widgetConfig.panel.dock) {
            _dock = this.widgetConfig.panel.dock.toLowerCase();
            return _dock === "left" || _dock === "right" || _dock === "bottom";
        }
        if (this.widgetConfig.panel && this.widgetConfig.panel.uri) {
            _uri = this.widgetConfig.panel.uri;
        }
        if (!_uri)
            return false;
        _uri = _uri.toLowerCase();
        return _uri === "epsgis-dockable-panel-at-left" ||
            _uri === "epsgis-dockable-panel-at-bottom" ||
            _uri === "epsgis-dockable-panel-at-right";
    }
    switchToOpen() {
        if (!this._isDockPanel()) {
            this.panelManager.closeAllPanelsInGroup(this.widgetConfig.gid);
        }
        this.resetPanelPosition();
        if (this.widgetConfig.inPanel === false) {
            this.widgetManager.loadWidget(this.widgetConfig);
        }
        else {
            this.panelManager.showPanel(this.panelConfig, this.widget).then((panel) => {
                this.panel = panel;
                this.state = WidgetState.opened;
                this.panel.instance.panelIcon = this;
                if (this.panel.instance.isDockable()) {
                    this.panelManager.onMapResize();
                }
            });
        }
    }
    switchToClose() {
        if (this.widgetConfig.inPanel === false) {
            this.widgetManager.closeWidget(this.widget);
        }
        else {
            this.panelManager.closePanel(this.panel).then(panel => {
                this.state = WidgetState.closed;
            });
        }
    }
    moveTo(position) {
    }
    destroy() {
        if (this.panel && this.panelManager) {
            this.panelManager.destroyPanel(this.panel);
        }
        else if (this.widget) {
            this.widgetManager.destroyWidget(this.widget);
        }
    }
    getOffPanelWidgetPosition() {
    }
    _showLoading() {
    }
    _hideLoading() {
    }
    onMapChange(map) {
        this.map = map;
    }
    onViewChange(view) {
        this.view = view;
    }
};
OnScreenWidgetIconComponent.ɵfac = function OnScreenWidgetIconComponent_Factory(t) { return new (t || OnScreenWidgetIconComponent)(i0.ɵɵdirectiveInject(i0.ViewContainerRef, 8), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
OnScreenWidgetIconComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OnScreenWidgetIconComponent, selectors: [["epsgis-on-screen-widget-icon"]], hostVars: 2, hostBindings: function OnScreenWidgetIconComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function OnScreenWidgetIconComponent_click_HostBindingHandler($event) { return ctx.onMouseClick($event); });
    } if (rf & 2) {
        i0.ɵɵstyleProp("display", ctx.iconStyleDisplay);
    } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 2, consts: [[3, "src", 4, "ngIf"], ["nz-icon", "", 3, "nzIconfont", 4, "ngIf"], [3, "src"], ["nz-icon", "", 3, "nzIconfont"]], template: function OnScreenWidgetIconComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, OnScreenWidgetIconComponent_img_0_Template, 1, 1, "img", 0);
        i0.ɵɵtemplate(1, OnScreenWidgetIconComponent_i_1_Template, 1, 1, "i", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.isShowImg);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.isShowImg);
    } }, directives: [i1.NgIf, i2.NzIconDirective], styles: [""] });
OnScreenWidgetIconComponent = __decorate([
    ComponentRegister({
        uri: "epsgis-on-screen-widget-icon",
        path: "components/on-screen-widget-icon"
    })
], OnScreenWidgetIconComponent);
export { OnScreenWidgetIconComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OnScreenWidgetIconComponent, [{
        type: Component,
        args: [{
                selector: 'epsgis-on-screen-widget-icon',
                templateUrl: './on-screen-widget-icon.component.html',
                styleUrls: ['./on-screen-widget-icon.component.scss'],
            }]
    }], function () { return [{ type: i0.ViewContainerRef, decorators: [{
                type: Optional
            }] }, { type: i0.ChangeDetectorRef }]; }, { iconStyleDisplay: [{
            type: HostBinding,
            args: ["style.display"]
        }], onMouseClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib24tc2NyZWVuLXdpZGdldC1pY29uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Vwc2dpcy9jb21wb25lbnRzL29uLXNjcmVlbi13aWRnZXQtaWNvbi9vbi1zY3JlZW4td2lkZ2V0LWljb24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZXBzZ2lzL2NvbXBvbmVudHMvb24tc2NyZWVuLXdpZGdldC1pY29uL29uLXNjcmVlbi13aWRnZXQtaWNvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxRQUFRLEVBQTRELFlBQVksRUFBRSxXQUFXLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3BLLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFNUIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7O0lDTC9ELHlCQUFvQzs7O0lBQWIsbURBQVk7OztJQUNuQyx1QkFBdUQ7OztJQUF6Qix3Q0FBbUI7O0lEa0JwQywyQkFBMkIsU0FBM0IsMkJBQTRCLFNBQVEsbUJBQW1CO0lBUWxFLFlBQStCLGdCQUFrQyxFQUFTLElBQXVCO1FBQy9GLEtBQUssRUFBRSxDQUFDO1FBRHFCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBUyxTQUFJLEdBQUosSUFBSSxDQUFtQjtRQVBqRyxXQUFNLEdBQVEsSUFBSSxDQUFDO1FBQ25CLFVBQUssR0FBK0MsSUFBSSxDQUFDO1FBQ3pELGdCQUFXLEdBQVEsSUFBSSxDQUFDO1FBQ3hCLGNBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsWUFBTyxHQUFXLENBQUMs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QUMsTUFBTSxDQUFDLENBQUM7U0FDL0M7SUFDSCxDQUFDO0lBQ0QseUJBQXlCO0lBRXpCLENBQUM7SUFDTyxZQUFZO0lBRXBCLENBQUM7SUFDTyxZQUFZO0lBRXBCLENBQUM7SUFDRCxXQUFXLENBQUMsR0FBRztRQUNiLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLENBQUM7SUFDRCxZQUFZLENBQUMsSUFBSTtRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7Q0FDRixDQUFBO3NHQTdPWSwyQkFBMkI7Z0VBQTNCLDJCQUEyQjs4R0FBM0Isd0JBQW9COzs7O1FDbkJqQyw0RUFBb0M7UUFDcEMsd0VBQXVEOztRQURqRCxvQ0FBZTtRQUNqQixlQUFnQjtRQUFoQixxQ0FBZ0I7O0FEa0JQLDJCQUEyQjtJQVR2QyxpQkFBaUIsQ0FBQztRQUNqQixHQUFHLEVBQUUsOEJBQThCO1FBQ25DLElBQUksRUFBRSxrQ0FBa0M7S0FDekMsQ0FBQztHQU1XLDJCQUEyQixDQTZPdkM7U0E3T1ksMkJBQTJCO3VGQUEzQiwyQkFBMkI7Y0FMdkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLFdBQVcsRUFBRSx3Q0FBd0M7Z0JBQ3JELFNBQVMsRUFBRSxDQUFDLHdDQUF3QyxDQUFDO2FBQ3REOztzQkFTYyxRQUFRO3dEQURTLGdCQUFnQjtrQkFBN0MsV0FBVzttQkFBQyxlQUFlO1lBc0k1QixZQUFZO2tCQURYLFlBQVk7bUJBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9wdGlvbmFsLCBWaWV3Q29udGFpbmVyUmVmLCBDb21wb25lbnRSZWYsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCwgSG9zdExpc3RlbmVyLCBIb3N0QmluZGluZywgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFdpZGdldFR5cGUsIFdpZGdldFN0YXRlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Jhc2Utd2lkZ2V0JztcbmltcG9ydCB7IEJhc2VXaWRnZXRDb21wb25lbnQgfSBmcm9tICcuLi9iYXNlLXdpZGdldC9iYXNlLXdpZGdldC5jb21wb25lbnQnO1xuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgeyBPblNjcmVlbldpZGdldFBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi4vb24tc2NyZWVuLXdpZGdldC1wYW5lbC9vbi1zY3JlZW4td2lkZ2V0LXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21wb25lbnRSZWdpc3RlciB9IGZyb20gJy4uLy4uL2RlY29yYXRvci9kZWNvcmF0b3JzJztcblxuLyoqXG4gKiBjcmVhdGUgYnkgcnVpciAxOTEwMTQgIE9uU2NyZWVuV2lkZ2V0SWNvbi5qc1xuICovXG5AQ29tcG9uZW50UmVnaXN0ZXIoe1xuICB1cmk6IFwiZXBzZ2lzLW9uLXNjcmVlbi13aWRnZXQtaWNvblwiLFxuICBwYXRoOiBcImNvbXBvbmVudHMvb24tc2NyZWVuLXdpZGdldC1pY29uXCJcbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlcHNnaXMtb24tc2NyZWVuLXdpZGdldC1pY29uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL29uLXNjcmVlbi13aWRnZXQtaWNvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL29uLXNjcmVlbi13aWRnZXQtaWNvbi5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBPblNjcmVlbldpZGdldEljb25Db21wb25lbnQgZXh0ZW5kcyBCYXNlV2lkZ2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuICB3aWRnZXQ6IGFueSA9IG51bGw7XG4gIHBhbmVsOiBDb21wb25lbnRSZWY8T25TY3JlZW5XaWRnZXRQYW5lbENvbXBvbmVudD4gPSBudWxsO1xuICBwYW5lbENvbmZpZzogYW55ID0gbnVsbDtcbiAgaXNTaG93SW1nOiBCb29sZWFuID0gdHJ1ZTtcbiAgc3BhY2luZzogbnVtYmVyID0gMjtcbiAgLy8gQEhvc3RCaW5kaW5nKCdjbGFzcy5oaWRlJykgaXNIaWRlSWNvbjogYm9vbGVhbiA9IGZhbHNlOy8vIOacqui1t+S9nOeUqFxuICBASG9zdEJpbmRpbmcoXCJzdHlsZS5kaXNwbGF5XCIpIGljb25TdHlsZURpc3BsYXk6IHN0cmluZyA9IFwiXCI7XG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHB1YmxpYyB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBwdWJsaWMgY2RyZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudHlwZSA9IFdpZGdldFR5cGUuaWNvbjtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gICAgdGhpcy5zdGFydHVwKCk7XG4gIH1cbiAgLyoqXG4gICAqIOiuvue9ruWPguaVsFxuICAgKiBAcGFyYW0gb3B0aW9ucyBcbiAgICovXG4gIHNldFByb3BzKG9wdGlvbnM6IHsgY29tcFJlZjogYW55LCBhcHBDb25maWc6IGFueSwgbWFwOiBhbnksIHdpZGdldENvbmZpZzogYW55IH0pIHtcbiAgICBpZiAob3B0aW9ucy5jb21wUmVmKSB7XG4gICAgICB0aGlzLndpZGdldCA9IG9wdGlvbnMuY29tcFJlZjtcbiAgICAgIHRoaXMuYXBwQ29uZmlnID0gdGhpcy53aWRnZXQuaW5zdGFuY2UuYXBwQ29uZmlnO1xuICAgICAgaWYgKHRoaXMuZ2xvYmFsUGFyYW1zLm1hcENvbmZpZy5pczNEKSB7XG4gICAgICAgIHRoaXMudmlldyA9IHRoaXMud2lkZ2V0Lmluc3RhbmNlLnZpZXc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1hcCA9IHRoaXMud2lkZ2V0Lmluc3RhbmNlLm1hcDtcbiAgICAgIH1cbiAgICAgIHRoaXMud2lkZ2V0Q29uZmlnID0gdGhpcy53aWRnZXQuaW5zdGFuY2Uud2lkZ2V0Q29uZmlnO1xuICAgICAgdGhpcy5jb25maWcgPSB0aGlzLndpZGdldC5pbnN0YW5jZS5jb25maWc7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hcHBDb25maWcgPSBvcHRpb25zLmFwcENvbmZpZztcbiAgICAgIGlmICh0aGlzLmdsb2JhbFBhcmFtcy5tYXBDb25maWcuaXMzRCkge1xuICAgICAgICB0aGlzLnZpZXcgPSBvcHRpb25zLm1hcDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubWFwID0gb3B0aW9ucy5tYXA7XG4gICAgICB9XG4gICAgICB0aGlzLndpZGdldENvbmZpZyA9IG9wdGlvbnMud2lkZ2V0Q29uZmlnO1xuICAgICAgLy90aGlzLmNvbmZpZyA9IHRoaXMud2lkZ2V0Q29uZmlnLmNvbmZpZzsvL+i/meaXtui/mOayoeaciVxuICAgIH1cbiAgICB0aGlzLmlkID0gdGhpcy5jb25maWdJZCA9IHRoaXMud2lkZ2V0Q29uZmlnLmlkO1xuICAgIHRoaXMubGFiZWwgPSB0aGlzLnRvb2x0aXAgPSB0aGlzLnRpdGxlID0gdGhpcy53aWRnZXRDb25maWcubGFiZWw7XG4gICAgdGhpcy5mb2xkZXJVcmwgPSB0aGlzLndpZGdldENvbmZpZy5mb2xkZXJVcmw7XG4gICAgaWYgKHR5cGVvZiAodGhpcy53aWRnZXRDb25maWcuaWNvbikgIT0gXCJ1bmRlZmluZWRcIiAmJiB0aGlzLndpZGdldENvbmZpZy5pY29uICE9IFwiXCIpXG4gICAgICB0aGlzLmljb24gPSB0aGlzLndpZGdldENvbmZpZy5pY29uO1xuICAgIGVsc2UgaWYgKHR5cGVvZiAodGhpcy53aWRnZXRDb25maWcubWFuaWZlc3QuaWNvbikgIT0gXCJ1bmRlZmluZWRcIiAmJiB0aGlzLndpZGdldENvbmZpZy5tYW5pZmVzdC5pY29uICE9IFwiXCIpIHtcbiAgICAgIHRoaXMuaWNvbiA9IHRoaXMud2lkZ2V0Q29uZmlnLm1hbmlmZXN0Lmljb247XG4gICAgICB0aGlzLmlzU2hvd0ltZyA9IGZhbHNlO1xuICAgIH1cbiAgICBlbHNlXG4gICAgICB0aGlzLmljb24gPSB0aGlzLmZvbGRlclVybCArIFwiaW1hZ2VzL2ljb24ucG5nXCI7Ly9mb2xkZXJVcmzlkI7pnaLmnInluKYvXG4gICAgdGhpcy51cmkgPSB0aGlzLndpZGdldENvbmZpZy51cmk7XG4gICAgdGhpcy5naWQgPSB0aGlzLndpZGdldENvbmZpZy5naWQ7XG5cbiAgICAvLyBsZXQgX3Bvc2l0aW9uOiBXaWRnZXRQb3NpdGlvbiA9IHtcbiAgICAvLyAgIHdpZHRoOiBcIjMycHhcIixcbiAgICAvLyAgIGhlaWdodDogXCIzMnB4XCIsXG4gICAgLy8gICB6SW5kZXg6IHRoaXMuZ2xvYmFsUGFyYW1zLmppbXVDb25maWcuekluZGV4XG4gICAgLy8gfVxuICAgIGxldCBfcG9zaXRpb24gPSBfLmNsb25lRGVlcCh0aGlzLndpZGdldENvbmZpZy5wb3NpdGlvbik7XG4gICAgX3Bvc2l0aW9uLndpZHRoID0gXCIzMnB4XCI7XG4gICAgX3Bvc2l0aW9uLmhlaWdodCA9IFwiMzJweFwiO1xuICAgIHN1cGVyLnNldFBvc2l0aW9uKF9wb3NpdGlvbik7XG4gICAgdGhpcy5wYW5lbENvbmZpZyA9IF8uY2xvbmVEZWVwKHRoaXMud2lkZ2V0Q29uZmlnKTtcbiAgICBpZiAodGhpcy53aWRnZXRDb25maWcuc2hvd0ljb24gPT09IGZhbHNlKSB7XG4gICAgICAvLyB0aGlzLmlzSGlkZUljb24gPSB0cnVlO1xuICAgICAgdGhpcy5pY29uU3R5bGVEaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuICB9XG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSgpO1xuICB9XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAvL3RoaXMucmVzZXRQYW5lbFBvc2l0aW9uKCk7XG4gIH1cbiAgcmVzZXRQYW5lbFBvc2l0aW9uKCkge1xuICAgIGlmICh0aGlzLmNvbW1vblNlcnZpY2UuaXNNb2JpbGUoKSkge1xuICAgICAgcmV0dXJuIHRoaXMucGFuZWxDb25maWcucG9zaXRpb247XG4gICAgfVxuICAgIGNvbnN0IF9pc0luTWFwOiBib29sZWFuID0gdGhpcy53aWRnZXRDb25maWcucG9zaXRpb24ucmVsYXRpdmVUbyAhPT0gXCJicm93c2VyXCI7XG4gICAgbGV0IF9jb250YWluZXJCb3VuZHM6IENsaWVudFJlY3QgfCBET01SZWN0O1xuICAgIGlmIChfaXNJbk1hcCkge1xuICAgICAgY29uc3QgX2VsZSA9IHRoaXMuY29tbW9uU2VydmljZS5nZXRDb21wb25lbnRSb290Tm9kZSh0aGlzLm1hcE1hbmFnZXIuY29tUmVmTWFwKTtcbiAgICAgIGlmIChfZWxlKSB7XG4gICAgICAgIF9jb250YWluZXJCb3VuZHMgPSB0aGlzLmNvbW1vblNlcnZpY2UuZ2V0RWxlbWVudEJvdW5kcyhfZWxlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy/lupTojrflj5blpJblsYLlrrnlmajvvIhlcHNnaXMtY29tcC1jb250YWluZXLvvInnmoTpq5jlrr1cbiAgICAgIF9jb250YWluZXJCb3VuZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZXBzZ2lzLWNvbXAtY29udGFpbmVyXCIpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIH1cbiAgICAvLy5maXJzdENoaWxkXG4gICAgbGV0IGVsZUljb24gPSB0aGlzLnZpZXdDb250YWluZXJSZWYuZWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgYm91bmRzID0gdGhpcy5jb21tb25TZXJ2aWNlLmdldEVsZW1lbnRCb3VuZHMoZWxlSWNvbiksXG4gICAgICBpblJpZ2h0OiBib29sZWFuID0gZmFsc2U7XG4gICAgaWYgKF9jb250YWluZXJCb3VuZHMud2lkdGggLSBib3VuZHMucmlnaHQgPCBfY29udGFpbmVyQm91bmRzLndpZHRoIC8gMikge1xuICAgICAgaW5SaWdodCA9IHRydWU7XG4gICAgfVxuICAgIGlmIChpblJpZ2h0KSB7XG4gICAgICAvL3RoaXMucGFuZWxDb25maWcucG9zaXRpb24ubGVmdCA9IFwiYXV0b1wiO1xuICAgICAgdGhpcy5wYW5lbENvbmZpZy5wb3NpdGlvbi5sZWZ0ID0gYm91bmRzLmxlZnQgLSBwYXJzZUZsb2F0KHRoaXMud2lkZ2V0Q29uZmlnLnBvc2l0aW9uLndpZHRoKSAtIHRoaXMuc3BhY2luZyAtIF9jb250YWluZXJCb3VuZHMubGVmdDtcbiAgICAgIHRoaXMucGFuZWxDb25maWcucG9zaXRpb24ucmlnaHQgPSBfY29udGFpbmVyQm91bmRzLnJpZ2h0IC0gYm91bmRzLmxlZnQgLSB0aGlzLnNwYWNpbmc7IC8vdGhpcy53aWRnZXRDb25maWcucG9zaXRpb24ucmlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8v5aaC5p6c5Zu+5qCH55qEbGVmdCvlm77moIfnmoTlrr3luqYrcGFuZWznmoTlrr3luqblsI/kuo7nrYnkuo7lj6/op4bljLrln5/nmoTlrr3luqbliJnmraPluLjvvIzlj43kuYtwYW5lbOeahGxlZnQ95Zu+5qCH55qEbGVmdC1wYW5lbOeahOWuveW6plxuICAgICAgaWYgKGJvdW5kcy5sZWZ0ICsgYm91bmRzLndpZHRoICsgcGFyc2VGbG9hdCh0aGlzLndpZGdldENvbmZpZy5wb3NpdGlvbi53aWR0aCkgKyB0aGlzLnNwYWNpbmcgPiBfY29udGFpbmVyQm91bmRzLndpZHRoKSB7XG4gICAgICAgIHRoaXMucGFuZWxDb25maWcucG9zaXRpb24ubGVmdCA9IGJvdW5kcy5sZWZ0IC0gcGFyc2VGbG9hdCh0aGlzLndpZGdldENvbmZpZy5wb3NpdGlvbi53aWR0aCkgLSB0aGlzLnNwYWNpbmcgLSBfY29udGFpbmVyQm91bmRzLmxlZnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBhbmVsQ29uZmlnLnBvc2l0aW9uLmxlZnQgPSBib3VuZHMubGVmdCArIGJvdW5kcy53aWR0aCArIHRoaXMuc3BhY2luZyAtIF9jb250YWluZXJCb3VuZHMubGVmdDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvL2xlZnTlsI/kuo4w5LqGIHBhbmVs5a695bqm5aSq5a69IOmHjeaWsOWumuS9jVxuICAgIGlmIChwYXJzZUZsb2F0KHRoaXMucGFuZWxDb25maWcucG9zaXRpb24ubGVmdCkgPD0gLTEpIHtcbiAgICAgIGlmIChpblJpZ2h0KSB7XG4gICAgICAgIHRoaXMucGFuZWxDb25maWcucG9zaXRpb24ubGVmdCA9IHRoaXMuc3BhY2luZztcbiAgICAgICAgdGhpcy5wYW5lbENvbmZpZy5wb3NpdGlvbi53aWR0aCA9IGJvdW5kcy5sZWZ0IC0gcGFyc2VGbG9hdCh0aGlzLnBhbmVsQ29uZmlnLnBvc2l0aW9uLmxlZnQpIC0gdGhpcy5zcGFjaW5nICogMiAtIF9jb250YWluZXJCb3VuZHMubGVmdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGFuZWxDb25maWcucG9zaXRpb24ubGVmdCA9IGJvdW5kcy5sZWZ0ICsgYm91bmRzLndpZHRoICsgdGhpcy5zcGFjaW5nIC0gX2NvbnRhaW5lckJvdW5kcy5sZWZ0O1xuICAgICAgICB0aGlzLnBhbmVsQ29uZmlnLnBvc2l0aW9uLndpZHRoID0gX2NvbnRhaW5lckJvdW5kcy53aWR0aCAtIGJvdW5kcy5yaWdodCAtIHRoaXMuc3BhY2luZyAqIDI7XG4gICAgICB9XG4gICAgfVxuICAgIC8v5aaC5p6c5Zu+5qCH55qEdG9wK3BhbmVs55qE6auY5bqm5bCP5LqO562J5LqO5Y+v6KeG5Yy65Z+f55qE6auY5bqm5YiZ5q2j5bi477yM5Y+N5LmLcGFuZWznmoR0b3A95Zu+5qCH55qEdG9wLXBhbmVs55qE6auY5bqmXG4gICAgaWYgKGJvdW5kcy50b3AgKyBwYXJzZUZsb2F0KHRoaXMud2lkZ2V0Q29uZmlnLnBvc2l0aW9uLmhlaWdodCkgKyB0aGlzLnNwYWNpbmcgPiBfY29udGFpbmVyQm91bmRzLmhlaWdodCkge1xuICAgICAgdGhpcy5wYW5lbENvbmZpZy5wb3NpdGlvbi50b3AgPSBib3VuZHMudG9wIC0gcGFyc2VGbG9hdCh0aGlzLndpZGdldENvbmZpZy5wb3NpdGlvbi5oZWlnaHQpICsgdGhpcy5zcGFjaW5nIC0gX2NvbnRhaW5lckJvdW5kcy50b3A7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGFuZWxDb25maWcucG9zaXRpb24udG9wID0gYm91bmRzLnRvcCAtIF9jb250YWluZXJCb3VuZHMudG9wO1xuICAgIH1cbiAgICAvL3RvcOWwj+S6jjDkuoYgIHBhbmVs6auY5bqm5aSq6auYIOmHjeaWsOWumuS9jVxuICAgIGlmIChwYXJzZUZsb2F0KHRoaXMucGFuZWxDb25maWcucG9zaXRpb24udG9wKSA8PSAtMSkge1xuICAgICAgdGhpcy5wYW5lbENvbmZpZy5wb3NpdGlvbi50b3AgPSBib3VuZHMudG9wIC0gX2NvbnRhaW5lckJvdW5kcy50b3A7XG4gICAgICB0aGlzLnBhbmVsQ29uZmlnLnBvc2l0aW9uLmhlaWdodCA9IF9jb250YWluZXJCb3VuZHMuaGVpZ2h0IC0gYm91bmRzLnRvcCAtIHRoaXMuc3BhY2luZyAqIDI7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnBhbmVsQ29uZmlnLnBvc2l0aW9uO1xuICB9XG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIGV2dCBcbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgb25Nb3VzZUNsaWNrKGV2dCkge1xuICAgIHRoaXMub25DbGljayhldnQpO1xuICB9XG5cbiAgc3RhcnR1cCgpIHtcbiAgICB0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xuICB9XG4gIC8qKlxuICAgKiDljZXlh7vlm77moIfml7ZcbiAgICogQHBhcmFtIGV2dCBcbiAgICovXG4gIG9uQ2xpY2soZXZ0KSB7XG4gICAgaWYgKHRoaXMuc3RhdGUgPT09IFdpZGdldFN0YXRlLmNsb3NlZCB8fCAodGhpcy5wYW5lbCAmJiB0aGlzLnBhbmVsLmluc3RhbmNlLnN0YXRlID09PSBXaWRnZXRTdGF0ZS5jbG9zZWQpKSB7XG4gICAgICB0aGlzLnN3aXRjaFRvT3BlbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN3aXRjaFRvQ2xvc2UoKTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfaXNEb2NrUGFuZWwoKSB7XG4gICAgbGV0IF91cmkgPSBcIlwiLCBfZG9jayA9IFwiXCI7XG4gICAgaWYgKHRoaXMud2lkZ2V0Q29uZmlnLnBhbmVsICYmIHRoaXMud2lkZ2V0Q29uZmlnLnBhbmVsLmRvY2spIHtcbiAgICAgIF9kb2NrID0gdGhpcy53aWRnZXRDb25maWcucGFuZWwuZG9jay50b0xvd2VyQ2FzZSgpO1xuICAgICAgcmV0dXJuIF9kb2NrID09PSBcImxlZnRcIiB8fCBfZG9jayA9PT0gXCJyaWdodFwiIHx8IF9kb2NrID09PSBcImJvdHRvbVwiO1xuICAgIH1cbiAgICBpZiAodGhpcy53aWRnZXRDb25maWcucGFuZWwgJiYgdGhpcy53aWRnZXRDb25maWcucGFuZWwudXJpKSB7XG4gICAgICBfdXJpID0gdGhpcy53aWRnZXRDb25maWcucGFuZWwudXJpO1xuICAgIH1cbiAgICBpZiAoIV91cmkpIHJldHVybiBmYWxzZTtcbiAgICBfdXJpID0gX3VyaS50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiBfdXJpID09PSBcImVwc2dpcy1kb2NrYWJsZS1wYW5lbC1hdC1sZWZ0XCIgfHxcbiAgICAgIF91cmkgPT09IFwiZXBzZ2lzLWRvY2thYmxlLXBhbmVsLWF0LWJvdHRvbVwiIHx8XG4gICAgICBfdXJpID09PSBcImVwc2dpcy1kb2NrYWJsZS1wYW5lbC1hdC1yaWdodFwiO1xuICB9XG4gIC8qKlxuICAgKiBcbiAgICovXG4gIHN3aXRjaFRvT3BlbigpIHtcbiAgICBpZiAoIXRoaXMuX2lzRG9ja1BhbmVsKCkpIHtcbiAgICAgIC8v5ZCM57uE5LqS5palXG4gICAgICB0aGlzLnBhbmVsTWFuYWdlci5jbG9zZUFsbFBhbmVsc0luR3JvdXAodGhpcy53aWRnZXRDb25maWcuZ2lkKTtcbiAgICB9XG4gICAgdGhpcy5yZXNldFBhbmVsUG9zaXRpb24oKTtcbiAgICBpZiAodGhpcy53aWRnZXRDb25maWcuaW5QYW5lbCA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMud2lkZ2V0TWFuYWdlci5sb2FkV2lkZ2V0KHRoaXMud2lkZ2V0Q29uZmlnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wYW5lbE1hbmFnZXIuc2hvd1BhbmVsKHRoaXMucGFuZWxDb25maWcsIHRoaXMud2lkZ2V0KS50aGVuKChwYW5lbDogQ29tcG9uZW50UmVmPE9uU2NyZWVuV2lkZ2V0UGFuZWxDb21wb25lbnQ+KSA9PiB7XG4gICAgICAgIHRoaXMucGFuZWwgPSBwYW5lbDtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFdpZGdldFN0YXRlLm9wZW5lZDtcbiAgICAgICAgdGhpcy5wYW5lbC5pbnN0YW5jZS5wYW5lbEljb24gPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5wYW5lbC5pbnN0YW5jZS5pc0RvY2thYmxlKCkpIHtcbiAgICAgICAgICB0aGlzLnBhbmVsTWFuYWdlci5vbk1hcFJlc2l6ZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgfVxuICAvKipcbiAgICogXG4gICAqL1xuICBzd2l0Y2hUb0Nsb3NlKCkge1xuICAgIGlmICh0aGlzLndpZGdldENvbmZpZy5pblBhbmVsID09PSBmYWxzZSkge1xuICAgICAgdGhpcy53aWRnZXRNYW5hZ2VyLmNsb3NlV2lkZ2V0KHRoaXMud2lkZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wYW5lbE1hbmFnZXIuY2xvc2VQYW5lbCh0aGlzLnBhbmVsKS50aGVuKHBhbmVsID0+IHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFdpZGdldFN0YXRlLmNsb3NlZDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICog56e75YqoXG4gICAqIEBwYXJhbSBwb3NpdGlvbiBcbiAgICovXG4gIG1vdmVUbyhwb3NpdGlvbikge1xuICB9XG4gIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMucGFuZWwgJiYgdGhpcy5wYW5lbE1hbmFnZXIpIHtcbiAgICAgIHRoaXMucGFuZWxNYW5hZ2VyLmRlc3Ryb3lQYW5lbCh0aGlzLnBhbmVsKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMud2lkZ2V0KSB7XG4gICAgICB0aGlzLndpZGdldE1hbmFnZXIuZGVzdHJveVdpZGdldCh0aGlzLndpZGdldCk7XG4gICAgfVxuICB9XG4gIGdldE9mZlBhbmVsV2lkZ2V0UG9zaXRpb24oKSB7XG5cbiAgfVxuICBwcml2YXRlIF9zaG93TG9hZGluZygpIHtcblxuICB9XG4gIHByaXZhdGUgX2hpZGVMb2FkaW5nKCkge1xuXG4gIH1cbiAgb25NYXBDaGFuZ2UobWFwKSB7XG4gICAgdGhpcy5tYXAgPSBtYXA7XG4gIH1cbiAgb25WaWV3Q2hhbmdlKHZpZXcpIHtcbiAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICB9XG59XG4iLCI8aW1nICpuZ0lmPVwiaXNTaG93SW1nXCIgW3NyY109XCJpY29uXCI+XG48aSAqbmdJZj1cIiFpc1Nob3dJbWdcIiBuei1pY29uIFtuekljb25mb250XT1cImljb25cIj4gPC9pPiJdfQ==