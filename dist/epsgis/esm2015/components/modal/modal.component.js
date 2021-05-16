import { __decorate, __rest } from "tslib";
import { Component, ChangeDetectionStrategy, Input, TemplateRef, Output, EventEmitter, ViewChild, Optional } from '@angular/core';
import { getConfigFromComponent } from './utils';
import { BasePanelComponent } from '../base-panel/base-panel.component';
import { ComponentRegister } from '../../decorator/component-register.decorator';
import * as i0 from "@angular/core";
import * as i1 from "../../services/modal-manager.service";
function SSModalComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
const _c0 = ["*"];
let SSModalComponent = class SSModalComponent extends BasePanelComponent {
    constructor(modalService, viewContainerRef, _render, cdr) {
        super(_render, cdr);
        this.modalService = modalService;
        this.viewContainerRef = viewContainerRef;
        this._render = _render;
        this.cdr = cdr;
        this.mask = true;
        this.maskClosable = true;
        this.visible = false;
        this.closable = true;
        this.okLoading = false;
        this.okDisabled = false;
        this.cancelDisabled = false;
        this.cancelLoading = false;
        this.keyboard = true;
        this.noAnimation = false;
        this.zIndex = 1000;
        this.width = 520;
        this.closeIcon = 'close';
        this.okType = 'primary';
        this.iconType = 'question-circle';
        this.modalType = 'default';
        this.onOk = new EventEmitter();
        this.onCancel = new EventEmitter();
        this.afterOpen = new EventEmitter();
        this.afterClose = new EventEmitter();
        this.visibleChange = new EventEmitter();
        this.modalRef = null;
    }
    get afterOpenObservable() {
        return this.afterOpen.asObservable();
    }
    get afterCloseObservable() {
        return this.afterClose.asObservable();
    }
    ngOnInit() {
    }
    onCloseClick() {
    }
    onOkClick() {
    }
    getConfig() {
        const componentConfig = getConfigFromComponent(this);
        componentConfig.viewContainerRef = this.viewContainerRef;
        if (!this.content) {
            componentConfig.content = this.contentTemplateRef;
        }
        return componentConfig;
    }
    ngOnChanges(changes) {
        const { Visible } = changes, otherChanges = __rest(changes, ["Visible"]);
        if (Object.keys(otherChanges).length && this.modalRef) {
            this.modalRef.updateConfig(getConfigFromComponent(this));
        }
        if (Visible) {
            if (this.visible) {
                this.open();
            }
            else {
                this.close();
            }
        }
    }
    open() {
        if (!this.visible) {
            this.visible = true;
            this.visibleChange.emit(true);
        }
        if (!this.modalRef) {
            const config = this.getConfig();
            this.modalRef = this.modalService.create(config);
        }
    }
    close(result) {
        if (this.visible) {
            this.visible = false;
            this.visibleChange.emit(false);
        }
        if (this.modalRef) {
            this.modalRef.close(result);
            this.modalRef = null;
        }
    }
    destroy(result) {
        this.close(result);
    }
    triggerOk() {
        this.modalRef != null ? this.modalRef.triggerOk() : null;
    }
    triggerCancel() {
        this.modalRef != null ? this.modalRef.triggerCancel() : null;
    }
    getContentComponent() {
        return this.modalRef != null ? this.modalRef.getContentComponent() : null;
    }
    getElement() {
        return this.modalRef != null ? this.modalRef.getElement() : null;
    }
    getModalRef() {
        return this.modalRef;
    }
};
SSModalComponent.ɵfac = function SSModalComponent_Factory(t) { return new (t || SSModalComponent)(i0.ɵɵdirectiveInject(i1.ModalManagerService), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.Renderer2, 8), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef, 8)); };
SSModalComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SSModalComponent, selectors: [["epsgis-modal"]], viewQuery: function SSModalComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(TemplateRef, 3);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.contentTemplateRef = _t.first);
    } }, inputs: { mask: "mask", maskClosable: "maskClosable", visible: "visible", closable: "closable", okLoading: "okLoading", okDisabled: "okDisabled", cancelDisabled: "cancelDisabled", cancelLoading: "cancelLoading", keyboard: "keyboard", noAnimation: "noAnimation", content: "content", componentParams: "componentParams", footer: "footer", getContainer: "getContainer", zIndex: "zIndex", width: "width", wrapClassName: "wrapClassName", className: "className", styles: "styles", title: "title", closeIcon: "closeIcon", maskStyle: "maskStyle", bodyStyle: "bodyStyle", okText: "okText", cancelText: "cancelText", okType: "okType", iconType: "iconType", modalType: "modalType", onOk: "onOk", onCancel: "onCancel" }, outputs: { onOk: "onOk", onCancel: "onCancel", afterOpen: "afterOpen", afterClose: "afterClose", visibleChange: "visibleChange" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function SSModalComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, SSModalComponent_ng_template_0_Template, 1, 0, "ng-template");
    } }, styles: [".ssmodal_container[_ngcontent-%COMP%]{box-sizing:border-box;position:absolute;top:0;bottom:0;right:0;left:0;display:flex;justify-content:flex-start;align-content:flex-start;pointer-events:none}.sspanel_statusbar[_ngcontent-%COMP%]{box-sizing:border-box;flex:0 0 auto;display:flex;align-items:flex-end}.statusbar_content[_ngcontent-%COMP%]{box-sizing:border-box;flex:1 1 auto;overflow:hidden;text-align:left;text-overflow:ellipsis;white-space:nowrap}.statusbar_handle[_ngcontent-%COMP%]{box-sizing:border-box;display:flex}.statusbar_handle_resizable[_ngcontent-%COMP%]{cursor:se-resize}"], changeDetection: 0 });
SSModalComponent = __decorate([
    ComponentRegister({
        uri: 'epsgis-modal',
        path: "epsgis/components/modal"
    })
], SSModalComponent);
export { SSModalComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SSModalComponent, [{
        type: Component,
        args: [{
                selector: 'epsgis-modal',
                template: ` <ng-template><ng-content></ng-content></ng-template> `,
                styleUrls: ['./modal.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.ModalManagerService }, { type: i0.ViewContainerRef }, { type: i0.Renderer2, decorators: [{
                type: Optional
            }] }, { type: i0.ChangeDetectorRef, decorators: [{
                type: Optional
            }] }]; }, { mask: [{
            type: Input
        }], maskClosable: [{
            type: Input
        }], visible: [{
            type: Input
        }], closable: [{
            type: Input
        }], okLoading: [{
            type: Input
        }], okDisabled: [{
            type: Input
        }], cancelDisabled: [{
            type: Input
        }], cancelLoading: [{
            type: Input
        }], keyboard: [{
            type: Input
        }], noAnimation: [{
            type: Input
        }], content: [{
            type: Input
        }], componentParams: [{
            type: Input
        }], footer: [{
            type: Input
        }], getContainer: [{
            type: Input
        }], zIndex: [{
            type: Input
        }], width: [{
            type: Input
        }], wrapClassName: [{
            type: Input
        }], className: [{
            type: Input
        }], styles: [{
            type: Input
        }], title: [{
            type: Input
        }], closeIcon: [{
            type: Input
        }], maskStyle: [{
            type: Input
        }], bodyStyle: [{
            type: Input
        }], okText: [{
            type: Input
        }], cancelText: [{
            type: Input
        }], okType: [{
            type: Input
        }], iconType: [{
            type: Input
        }], modalType: [{
            type: Input
        }], onOk: [{
            type: Input
        }, {
            type: Output
        }], onCancel: [{
            type: Input
        }, {
            type: Output
        }], afterOpen: [{
            type: Output
        }], afterClose: [{
            type: Output
        }], visibleChange: [{
            type: Output
        }], contentTemplateRef: [{
            type: ViewChild,
            args: [TemplateRef, { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZXBzZ2lzL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLHVCQUF1QixFQUE0QixLQUFLLEVBQUUsV0FBVyxFQUFRLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUErQixRQUFRLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBTTFOLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNqRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUV4RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQzs7OztJQU90RCxrQkFBeUI7OztJQUl2QyxnQkFBZ0IsU0FBaEIsZ0JBQW1DLFNBQVEsa0JBQWtCO0lBMER4RSxZQUNVLFlBQWlDLEVBQ2pDLGdCQUFrQyxFQUN2QixPQUFrQixFQUNoQixHQUFzQjtRQUMzQyxLQUFLLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBSlgsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQ2pDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDdkIsWUFBTyxHQUFQLE9BQU8sQ0FBVztRQUNoQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQTVEcEMsU0FBSSxHQUFZLElBQUksQ0FBQztRQUNyQixpQkFBWSxHQUFZLElBQUksQ0FBQztRQUM3QixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLGFBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBQ2hDLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBQy9CLGFBQVEsR0FB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QUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBJbnB1dCwgVGVtcGxhdGVSZWYsIFR5cGUsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYsIFJlbmRlcmVyMiwgT3B0aW9uYWwsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTU01vZGFsQVBJIH0gZnJvbSAnLi9tb2RhbC1vcHRpb25zJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFNzU3R5bGVPYmplY3RMaWtlLCBTc0J1dHRvblR5cGUsIFNzTW9kYWxUeXBlcywgT25DbGlja0NhbGxiYWNrLCBTc01vZGFsT3B0aW9ucywgU3NNb2RhbEJ1dHRvbk9wdGlvbnMgfSBmcm9tICcuL21vZGFsLXR5cGVzJztcbmltcG9ydCB7IFNzTW9kYWxSZWYgfSBmcm9tICcuL21vZGFsLXJlZic7XG5pbXBvcnQgeyBNb2RhbE1hbmFnZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbW9kYWwtbWFuYWdlci5zZXJ2aWNlJztcbmltcG9ydCB7IGdldENvbmZpZ0Zyb21Db21wb25lbnQgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IEJhc2VQYW5lbENvbXBvbmVudCB9IGZyb20gJy4uL2Jhc2UtcGFuZWwvYmFzZS1wYW5lbC5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBDb21wb25lbnRSZWdpc3RlciB9IGZyb20gJy4uLy4uL2RlY29yYXRvci9jb21wb25lbnQtcmVnaXN0ZXIuZGVjb3JhdG9yJztcbkBDb21wb25lbnRSZWdpc3Rlcih7XG4gIHVyaTogJ2Vwc2dpcy1tb2RhbCcsXG4gIHBhdGg6IFwiZXBzZ2lzL2NvbXBvbmVudHMvbW9kYWxcIlxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Vwc2dpcy1tb2RhbCcsXG4gIHRlbXBsYXRlOiBgIDxuZy10ZW1wbGF0ZT48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9uZy10ZW1wbGF0ZT4gYCxcbiAgc3R5bGVVcmxzOiBbJy4vbW9kYWwuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgU1NNb2RhbENvbXBvbmVudDxUID0gYW55LCBSID0gYW55PiBleHRlbmRzIEJhc2VQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgU1NNb2RhbEFQSTxULCBSPiB7XG5cbiAgQElucHV0KCkgbWFzazogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIG1hc2tDbG9zYWJsZTogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIHZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgY2xvc2FibGU6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBva0xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgb2tEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBjYW5jZWxEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBjYW5jZWxMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGtleWJvYXJkOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgbm9BbmltYXRpb24gPSBmYWxzZTtcbiAgQElucHV0KCkgY29udGVudD86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHt9PiB8IFR5cGU8VD47XG4gIEBJbnB1dCgpIGNvbXBvbmVudFBhcmFtcz86IFQ7XG4gIEBJbnB1dCgpIGZvb3Rlcj86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHt9PiB8IEFycmF5PFNzTW9kYWxCdXR0b25PcHRpb25zPFQ+PiB8IG51bGw7XG4gIEBJbnB1dCgpIGdldENvbnRhaW5lcj86IEhUTUxFbGVtZW50O1xuICBASW5wdXQoKSB6SW5kZXg6IG51bWJlciA9IDEwMDA7XG4gIEBJbnB1dCgpIHdpZHRoOiBudW1iZXIgfCBzdHJpbmcgPSA1MjA7XG4gIEBJbnB1dCgpIHdyYXBDbGFzc05hbWU/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNsYXNzTmFtZT86IHN0cmluZztcbiAgQElucHV0KCkgc3R5bGVzPzogb2JqZWN0O1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nOy8vfCBUZW1wbGF0ZVJlZjx7fT47XG4gIEBJbnB1dCgpIGNsb3NlSWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gPSAnY2xvc2UnO1xuICBASW5wdXQoKSBtYXNrU3R5bGU/OiBTc1N0eWxlT2JqZWN0TGlrZTtcbiAgQElucHV0KCkgYm9keVN0eWxlPzogU3NTdHlsZU9iamVjdExpa2U7XG4gIEBJbnB1dCgpIG9rVGV4dD86IHN0cmluZyB8IG51bGw7XG4gIEBJbnB1dCgpIGNhbmNlbFRleHQ/OiBzdHJpbmcgfCBudWxsO1xuICBASW5wdXQoKSBva1R5cGU6IFNzQnV0dG9uVHlwZSA9ICdwcmltYXJ5JztcbiAgQElucHV0KCkgaWNvblR5cGU6IHN0cmluZyA9ICdxdWVzdGlvbi1jaXJjbGUnOyAvLyBDb25maXJtIE1vZGFsIE9OTFlcbiAgQElucHV0KCkgbW9kYWxUeXBlOiBTc01vZGFsVHlwZXMgPSAnZGVmYXVsdCc7XG5cbiAgQElucHV0KClcbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IG9uT2s6IEV2ZW50RW1pdHRlcjxUPiB8IE9uQ2xpY2tDYWxsYmFjazxUPiA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcbiAgQElucHV0KClcbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IG9uQ2FuY2VsOiBFdmVudEVtaXR0ZXI8VD4gfCBPbkNsaWNrQ2FsbGJhY2s8VD4gPSBuZXcgRXZlbnRFbWl0dGVyPFQ+KCk7XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGFmdGVyT3BlbiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGFmdGVyQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPFI+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSB2aXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYsIHsgc3RhdGljOiB0cnVlIH0pIGNvbnRlbnRUZW1wbGF0ZVJlZiE6IFRlbXBsYXRlUmVmPHt9PjtcblxuICBtb2RhbFJlZjogU3NNb2RhbFJlZiB8IG51bGwgPSBudWxsO1xuXG4gIGdldCBhZnRlck9wZW5PYnNlcnZhYmxlKCk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLmFmdGVyT3Blbi5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIGdldCBhZnRlckNsb3NlT2JzZXJ2YWJsZSgpOiBPYnNlcnZhYmxlPFI+IHtcbiAgICByZXR1cm4gdGhpcy5hZnRlckNsb3NlLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG4gIC8vIHNldCBtb2RhbEZvb3Rlcih2YWx1ZTogTnpNb2RhbEZvb3RlckRpcmVjdGl2ZSkge1xuICAvLyAgIGlmICh2YWx1ZSAmJiB2YWx1ZS50ZW1wbGF0ZVJlZikge1xuICAvLyAgICAgdGhpcy5zZXRGb290ZXJXaXRoVGVtcGxhdGUodmFsdWUudGVtcGxhdGVSZWYpO1xuICAvLyAgIH1cbiAgLy8gfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxNYW5hZ2VyU2VydmljZSxcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIF9yZW5kZXI6IFJlbmRlcmVyMlxuICAgICwgQE9wdGlvbmFsKCkgcHVibGljIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBzdXBlcihfcmVuZGVyLCBjZHIpXG4gIH1cbiAgbmdPbkluaXQoKSB7XG5cbiAgfVxuXG5cbiAgb25DbG9zZUNsaWNrKCk6IHZvaWQge1xuICB9XG5cbiAgb25Pa0NsaWNrKCk6IHZvaWQge1xuICB9XG4gIHByaXZhdGUgZ2V0Q29uZmlnKCk6IFNzTW9kYWxPcHRpb25zIHtcbiAgICBjb25zdCBjb21wb25lbnRDb25maWcgPSBnZXRDb25maWdGcm9tQ29tcG9uZW50KHRoaXMpO1xuICAgIGNvbXBvbmVudENvbmZpZy52aWV3Q29udGFpbmVyUmVmID0gdGhpcy52aWV3Q29udGFpbmVyUmVmO1xuICAgIGlmICghdGhpcy5jb250ZW50KSB7XG4gICAgICBjb21wb25lbnRDb25maWcuY29udGVudCA9IHRoaXMuY29udGVudFRlbXBsYXRlUmVmO1xuICAgIH1cbiAgICByZXR1cm4gY29tcG9uZW50Q29uZmlnO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgVmlzaWJsZSwgLi4ub3RoZXJDaGFuZ2VzIH0gPSBjaGFuZ2VzO1xuXG4gICAgaWYgKE9iamVjdC5rZXlzKG90aGVyQ2hhbmdlcykubGVuZ3RoICYmIHRoaXMubW9kYWxSZWYpIHtcbiAgICAgIHRoaXMubW9kYWxSZWYudXBkYXRlQ29uZmlnKGdldENvbmZpZ0Zyb21Db21wb25lbnQodGhpcykpO1xuICAgIH1cblxuICAgIGlmIChWaXNpYmxlKSB7XG4gICAgICBpZiAodGhpcy52aXNpYmxlKSB7XG4gICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgb3BlbigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgIHRoaXMudmlzaWJsZUNoYW5nZS5lbWl0KHRydWUpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5tb2RhbFJlZikge1xuICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5nZXRDb25maWcoKTtcbiAgICAgIHRoaXMubW9kYWxSZWYgPSB0aGlzLm1vZGFsU2VydmljZS5jcmVhdGUoY29uZmlnKTtcbiAgICB9XG4gIH1cbiAgY2xvc2UocmVzdWx0PzogUik6IHZvaWQge1xuICAgIGlmICh0aGlzLnZpc2libGUpIHtcbiAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgdGhpcy52aXNpYmxlQ2hhbmdlLmVtaXQoZmFsc2UpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm1vZGFsUmVmKSB7XG4gICAgICB0aGlzLm1vZGFsUmVmLmNsb3NlKHJlc3VsdCk7XG4gICAgICB0aGlzLm1vZGFsUmVmID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgZGVzdHJveShyZXN1bHQ/OiBSKTogdm9pZCB7XG4gICAgdGhpcy5jbG9zZShyZXN1bHQpO1xuICB9XG4gIHRyaWdnZXJPaygpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGFsUmVmICE9IG51bGwgPyB0aGlzLm1vZGFsUmVmLnRyaWdnZXJPaygpIDogbnVsbDtcbiAgfVxuICB0cmlnZ2VyQ2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMubW9kYWxSZWYgIT0gbnVsbCA/IHRoaXMubW9kYWxSZWYudHJpZ2dlckNhbmNlbCgpIDogbnVsbDtcbiAgfVxuICBnZXRDb250ZW50Q29tcG9uZW50KCk6IHZvaWQgfCBUIHtcbiAgICByZXR1cm4gdGhpcy5tb2RhbFJlZiAhPSBudWxsID8gdGhpcy5tb2RhbFJlZi5nZXRDb250ZW50Q29tcG9uZW50KCkgOiBudWxsO1xuICB9XG4gIGdldEVsZW1lbnQoKTogdm9pZCB8IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5tb2RhbFJlZiAhPSBudWxsID8gdGhpcy5tb2RhbFJlZi5nZXRFbGVtZW50KCkgOiBudWxsO1xuICB9XG5cbiAgZ2V0TW9kYWxSZWYoKTogU3NNb2RhbFJlZiB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLm1vZGFsUmVmO1xuICB9XG59XG4iXX0=