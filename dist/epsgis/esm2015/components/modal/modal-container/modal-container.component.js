import { __decorate } from "tslib";
import { Component, EventEmitter, ViewChild } from '@angular/core';
import { BasePanelComponent } from '../../base-panel/base-panel.component';
import { WidgetState, WidgetWindowState, WidgetPosition } from '../../../models/base-widget';
import { ComponentRegister } from '../../../decorator/component-register.decorator';
import * as i0 from "@angular/core";
import * as i1 from "../modal-types";
import * as i2 from "../../../services/common.service";
import * as i3 from "../../../services/panel-manager.service";
import * as i4 from "../../../services/widget-manager.service";
import * as i5 from "../../../models/app-config";
import * as i6 from "../../../services/map-manager.service";
const _c0 = ["ssmodal_overlay"];
const _c1 = ["ssmodal_titlebar"];
const _c2 = ["ssmodal"];
function ModalContainerComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 21);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("modalRef", ctx_r3.modalRef);
} }
function ModalContainerComponent_ng_container_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 24);
    i0.ɵɵlistener("click", function ModalContainerComponent_ng_container_10_ng_container_1_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(2); return ctx_r13._buttonCollapse_Click($event); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 25);
    i0.ɵɵelementStart(3, "g", 26);
    i0.ɵɵelement(4, "polyline", 27);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("title", ctx_r10.options.buttonUnCollapseText);
} }
function ModalContainerComponent_ng_container_10_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 24);
    i0.ɵɵlistener("click", function ModalContainerComponent_ng_container_10_ng_template_2_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(2); return ctx_r15._buttonCollapse_Click($event); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 25);
    i0.ɵɵelementStart(2, "g", 26);
    i0.ɵɵelement(3, "polyline", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("title", ctx_r12.options.buttonCollapseText);
} }
function ModalContainerComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ModalContainerComponent_ng_container_10_ng_container_1_Template, 5, 1, "ng-container", 22);
    i0.ɵɵtemplate(2, ModalContainerComponent_ng_container_10_ng_template_2_Template, 4, 1, "ng-template", null, 23, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r11 = i0.ɵɵreference(3);
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.windowState == "collapsed")("ngIfElse", _r11);
} }
function ModalContainerComponent_ng_container_11_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 30);
    i0.ɵɵlistener("click", function ModalContainerComponent_ng_container_11_ng_container_1_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r21); const ctx_r20 = i0.ɵɵnextContext(2); return ctx_r20._buttonMax_Click($event); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 25);
    i0.ɵɵelementStart(3, "g", 26);
    i0.ɵɵelement(4, "rect", 31);
    i0.ɵɵelement(5, "line", 32);
    i0.ɵɵelement(6, "line", 33);
    i0.ɵɵelement(7, "line", 34);
    i0.ɵɵelement(8, "line", 35);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r17 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("title", ctx_r17.options.buttonUnmaximizeText);
} }
function ModalContainerComponent_ng_container_11_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 30);
    i0.ɵɵlistener("click", function ModalContainerComponent_ng_container_11_ng_template_2_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r22 = i0.ɵɵnextContext(2); return ctx_r22._buttonMax_Click($event); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 25);
    i0.ɵɵelementStart(2, "g", 26);
    i0.ɵɵelement(3, "rect", 36);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r19 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("title", ctx_r19.options.buttonMaximizeText);
} }
function ModalContainerComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ModalContainerComponent_ng_container_11_ng_container_1_Template, 9, 1, "ng-container", 22);
    i0.ɵɵtemplate(2, ModalContainerComponent_ng_container_11_ng_template_2_Template, 4, 1, "ng-template", null, 29, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r18 = i0.ɵɵreference(3);
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.windowState == "maximized")("ngIfElse", _r18);
} }
function ModalContainerComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 37);
    i0.ɵɵlistener("click", function ModalContainerComponent_ng_container_12_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r24 = i0.ɵɵnextContext(); return ctx_r24.closePanel($event); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 25);
    i0.ɵɵelementStart(3, "g");
    i0.ɵɵelement(4, "line", 38);
    i0.ɵɵelement(5, "line", 39);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("title", ctx_r6.options.buttonCloseText);
} }
function ModalContainerComponent_ng_template_14_Template(rf, ctx) { }
function ModalContainerComponent_div_16_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 44);
    i0.ɵɵlistener("cancelTriggered", function ModalContainerComponent_div_16_div_2_Template_div_cancelTriggered_0_listener() { i0.ɵɵrestoreView(_r28); const ctx_r27 = i0.ɵɵnextContext(2); return ctx_r27.onCloseClick(); })("okTriggered", function ModalContainerComponent_div_16_div_2_Template_div_okTriggered_0_listener() { i0.ɵɵrestoreView(_r28); const ctx_r29 = i0.ɵɵnextContext(2); return ctx_r29.onOkClick(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r26 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("modalRef", ctx_r26.modalRef);
} }
function ModalContainerComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 40);
    i0.ɵɵelementStart(1, "div", 41);
    i0.ɵɵtemplate(2, ModalContainerComponent_div_16_div_2_Template, 1, 1, "div", 42);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 43);
    i0.ɵɵlistener("mousedown", function ModalContainerComponent_div_16_Template_div_mousedown_3_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r30 = i0.ɵɵnextContext(); return ctx_r30._resizer_MouseDown($event, { dimension: "height", directionY: "bottom" }); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r9.config.footer !== null);
} }
export function throwNzModalContentAlreadyAttachedError() {
    throw Error('Attempting to attach modal content after content is already attached');
}
let ModalContainerComponent = class ModalContainerComponent extends BasePanelComponent {
    constructor(elementRef, cdr, render, zone, config, commonService, panelManager, widgetManager, globalParams, mapManager) {
        super(render, cdr);
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.render = render;
        this.zone = zone;
        this.config = config;
        this.commonService = commonService;
        this.panelManager = panelManager;
        this.widgetManager = widgetManager;
        this.globalParams = globalParams;
        this.mapManager = mapManager;
        this.animationStateChanged = new EventEmitter();
        this.containerClick = new EventEmitter();
        this.cancelTriggered = new EventEmitter();
        this.okTriggered = new EventEmitter();
        this.isStringContent = false;
        this.elementFocusedBeforeModalWasOpened = null;
        this.latestMousedownTarget = null;
        this.oldMaskStyle = null;
        this.onCloseTreggered = new EventEmitter();
        this.showStatusBar = false;
        this.defaultZIndex = 110;
        this.document = document;
        this.isStringContent = typeof config.content === 'string';
        this.setContainer();
        if (this.config.footer != null) {
            this.showStatusBar = true;
        }
        else if (this.config.okDisabled !== true) {
            this.showStatusBar = true;
        }
        else if (this.config.cancelDisabled !== true) {
            this.showStatusBar = true;
        }
    }
    ngOnInit() {
        if (this.commonService.isMobile()) {
            this.widgetConfig = {
                position: new WidgetPosition(0, 0, 0, 0, "100%", "100%", "", "unset")
            };
        }
        else {
            let left = 0;
            if (this.config.width === "100%") {
                left = 0;
            }
            else if (this.config.width === "auto") {
            }
            else if (typeof this.config.width === "number") {
                left = (window.innerWidth - this.config.width) / 2;
            }
            else if (typeof this.config.width === "string") {
                let x = parseInt(this.config.width, 10);
                left = (window.innerWidth - x) / 2;
            }
            this.widgetConfig = {
                position: {
                    top: this.config.top,
                    left: left,
                    width: this.config.width,
                    height: this.config.height,
                    zIndex: this.config.zIndex || this.defaultZIndex
                }
            };
        }
        let _index = this.defaultZIndex - 1;
        if (this.config.zIndex >= 1) {
            _index = this.config.zIndex - 1;
        }
        this.render.setStyle(this.sspanelOverlay.nativeElement, 'z-index', _index);
        this.setOptions({
            buttonMaximize: true,
            buttonClose: true,
            buttonCollapse: false,
            modal: this.config.mask,
            title: this.config.title.toString(),
            minHeight: 100,
            minWidth: 200
        });
        this.label = this.tooltip = this.config.title.toString();
        if (this.globalParams.mapConfig.is3D) {
            this.view = this.mapManager.view;
        }
        else {
            this.map = this.mapManager.map;
        }
        this.id = "ss-modal";
        this.gid = "ss-modal";
        this.setPosition(this.widgetConfig.position);
        this.state = WidgetState.opened;
        this.windowState = WidgetWindowState.normal;
        super.ngOnInit();
    }
    ngAfterViewInit() {
        this.modalRef.afterOpen.next();
        if (this.config.fullScreen) {
            this._maximize();
        }
    }
    onClose() {
        this.onCloseTreggered.emit();
    }
    onMousedown(e) {
        this.latestMousedownTarget = e.target || null;
    }
    onMouseup(e) {
        if (e.target === this.latestMousedownTarget && e.target === this.elementRef.nativeElement) {
            this.containerClick.emit();
        }
        this.latestMousedownTarget = null;
    }
    onCloseClick() {
        this.cancelTriggered.emit();
    }
    onOkClick() {
        this.okTriggered.emit();
    }
    attachComponentPortal(compRef) {
        this.savePreviouslyFocusedElement();
        this.setModalTransformOrigin();
        this.widgetContainer.insert(compRef.hostView);
        return compRef;
    }
    attachTemplatePortal() {
        return null;
    }
    getNativeElement() {
        return this.elementRef.nativeElement;
    }
    animationDisabled() {
        return false;
    }
    setModalTransformOrigin() {
        const modalElement = this.modalElementRef.nativeElement;
        if (this.elementFocusedBeforeModalWasOpened) {
            const previouslyDOMRect = this.elementFocusedBeforeModalWasOpened.getBoundingClientRect();
            const lastPosition = this.commonService.getElementBounds(this.elementFocusedBeforeModalWasOpened);
            const x = lastPosition.left + previouslyDOMRect.width / 2;
            const y = lastPosition.top + previouslyDOMRect.height / 2;
            const transformOrigin = `${x - modalElement.offsetLeft}px ${y - modalElement.offsetTop}px 0px`;
            this.render.setStyle(modalElement, 'transform-origin', transformOrigin);
        }
    }
    savePreviouslyFocusedElement() {
        if (this.document) {
            this.elementFocusedBeforeModalWasOpened = this.document.activeElement;
            if (this.elementRef.nativeElement.focus) {
                Promise.resolve().then(() => this.elementRef.nativeElement.focus());
            }
        }
    }
    trapFocus() {
    }
    restoreFocus() {
    }
    setEnterAnimationClass() {
    }
    setExitAnimationClass() {
    }
    cleanAnimationClass() {
        if (this.animationDisabled()) {
            return;
        }
    }
    bindBackdropStyle() {
    }
    setContainer() {
        const container = this.getContainer();
        if (container) {
            this.render.appendChild(container, this.elementRef.nativeElement);
        }
    }
    resetContainer() {
        const container = this.getContainer();
        if (container) {
        }
    }
    getContainer() {
        return this.config.getContainer;
    }
    onAnimationDone(event) {
    }
    onAnimationStart(event) {
    }
    startExitAnimation() {
        this.state = WidgetState.closed;
        this.cdr.markForCheck();
    }
    closePanel(event) {
        this.cancelTriggered.emit();
    }
};
ModalContainerComponent.ɵfac = function ModalContainerComponent_Factory(t) { return new (t || ModalContainerComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i1.SsModalOptions), i0.ɵɵdirectiveInject(i2.CommonService), i0.ɵɵdirectiveInject(i3.PanelManagerService), i0.ɵɵdirectiveInject(i4.WidgetManagerService), i0.ɵɵdirectiveInject(i5.AppGlobalConfig), i0.ɵɵdirectiveInject(i6.MapManagerService)); };
ModalContainerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ModalContainerComponent, selectors: [["epsgis-modal-container"]], viewQuery: function ModalContainerComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 3);
        i0.ɵɵviewQuery(_c1, 3);
        i0.ɵɵviewQuery(_c2, 3);
        i0.ɵɵviewQuery(_c2, 3);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sspanelOverlay = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sspanel_titlebar = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sspanel = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.modalElementRef = _t.first);
    } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 25, vars: 8, consts: [[1, "ssmodal_overlay"], ["ssmodal_overlay", ""], [1, "ssmodal", 3, "id", "ngStyle"], ["ssmodal", ""], [1, "ssmodal_titlebar", "ssmodal_titlebar_draggable", 3, "mousedown"], ["ssmodal_titlebar", ""], [1, "ssmodal_titlebar_text"], [1, "ssmodal_titlebar_text_span"], ["class", "ssmodal_titlebar_custom_buttons", "ss-modal-titlebar-button", "", 3, "modalRef", 4, "ngIf"], [4, "ngIf"], [1, "ssmodal_content", 3, "click"], ["widget_content", ""], ["class", "ssmodal_statusbar", 4, "ngIf"], [1, "ssmodal_resizer", "ssmodal_resizer_top", 3, "mousedown"], [1, "ssmodal_resizer", "ssmodal_resizer_left", 3, "mousedown"], [1, "ssmodal_resizer", "ssmodal_resizer_right", 3, "mousedown"], [1, "ssmodal_resizer", "ssmodal_resizer_topleft", 3, "mousedown"], [1, "ssmodal_resizer", "ssmodal_resizer_topright", 3, "mousedown"], [1, "ssmodal_resizer", "ssmodal_resizer_bottomleft", 3, "mousedown"], [1, "ssmodal_resizer", "ssmodal_resizer_bottomright", 3, "mousedown"], [1, "ssmodal_minplaceholder"], ["ss-modal-titlebar-button", "", 1, "ssmodal_titlebar_custom_buttons", 3, "modalRef"], [4, "ngIf", "ngIfElse"], ["showCollapsedButton", ""], [1, "ssmodal_titlebar_button", "ssmodal_titlebar_button_collapse", 3, "title", "click"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 10 10", "height", "100%", "width", "100%"], ["fill", "none"], ["points", "1,3 9,3 5,8 1,3 9,3"], ["points", "1,7 9,7 5,2 1,7 9,7"], ["showMaximizeButton", ""], [1, "ssmodal_titlebar_button", "ssmodal_titlebar_button_maximize", 3, "title", "click"], ["x", "1", "y", "3", "height", "6", "width", "6"], ["y1", "3", "x1", "3", "y2", "1", "x2", "3"], ["y1", "1", "x1", "2.5", "y2", "1", "x2", "9.5"], ["y1", "1", "x1", "9", "y2", "7", "x2", "9"], ["y1", "7", "x1", "9.5", "y2", "7", "x2", "7"], ["x", "1", "y", "1", "height", "8", "width", "8"], [1, "ssmodal_titlebar_button", "ssmodal_titlebar_button_close", 3, "title", "click"], ["y2", "0", "x2", "10", "y1", "10", "x1", "0"], ["y2", "10", "x2", "10", "y1", "0", "x1", "0"], [1, "ssmodal_statusbar"], [1, "ssmodal_statusbar_content"], ["ss-modal-footer", "", 3, "modalRef", "cancelTriggered", "okTriggered", 4, "ngIf"], [1, "ssmodal_resizer", "ssmodal_resizer_bottom", 3, "mousedown"], ["ss-modal-footer", "", 3, "modalRef", "cancelTriggered", "okTriggered"]], template: function ModalContainerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0, 1);
        i0.ɵɵelementStart(2, "div", 2, 3);
        i0.ɵɵelementStart(4, "div", 4, 5);
        i0.ɵɵlistener("mousedown", function ModalContainerComponent_Template_div_mousedown_4_listener($event) { return ctx._titlebar_MouseDown($event); });
        i0.ɵɵelementStart(6, "div", 6);
        i0.ɵɵelementStart(7, "span", 7);
        i0.ɵɵtext(8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(9, ModalContainerComponent_div_9_Template, 1, 1, "div", 8);
        i0.ɵɵtemplate(10, ModalContainerComponent_ng_container_10_Template, 4, 2, "ng-container", 9);
        i0.ɵɵtemplate(11, ModalContainerComponent_ng_container_11_Template, 4, 2, "ng-container", 9);
        i0.ɵɵtemplate(12, ModalContainerComponent_ng_container_12_Template, 6, 1, "ng-container", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "div", 10);
        i0.ɵɵlistener("click", function ModalContainerComponent_Template_div_click_13_listener($event) { return ctx._contentClick($event); });
        i0.ɵɵtemplate(14, ModalContainerComponent_ng_template_14_Template, 0, 0, "ng-template", null, 11, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(16, ModalContainerComponent_div_16_Template, 4, 1, "div", 12);
        i0.ɵɵelementStart(17, "div", 13);
        i0.ɵɵlistener("mousedown", function ModalContainerComponent_Template_div_mousedown_17_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "height", directionY: "top" }); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "div", 14);
        i0.ɵɵlistener("mousedown", function ModalContainerComponent_Template_div_mousedown_18_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "width", directionX: "left" }); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "div", 15);
        i0.ɵɵlistener("mousedown", function ModalContainerComponent_Template_div_mousedown_19_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "width", directionX: "right" }); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "div", 16);
        i0.ɵɵlistener("mousedown", function ModalContainerComponent_Template_div_mousedown_20_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "both", directionX: "left", directionY: "top" }); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "div", 17);
        i0.ɵɵlistener("mousedown", function ModalContainerComponent_Template_div_mousedown_21_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "both", directionX: "right", directionY: "top" }); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "div", 18);
        i0.ɵɵlistener("mousedown", function ModalContainerComponent_Template_div_mousedown_22_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "both", directionX: "left", directionY: "bottom" }); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "div", 19);
        i0.ɵɵlistener("mousedown", function ModalContainerComponent_Template_div_mousedown_23_listener($event) { return ctx._resizer_MouseDown($event, { dimension: "both", directionX: "right", directionY: "bottom" }); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(24, "div", 20);
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵpropertyInterpolate("id", ctx.options.id);
        i0.ɵɵproperty("ngStyle", ctx.position);
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate(ctx.options.title);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.config.titleBarButtons);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.options.buttonCollapse);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.options.buttonMaximize);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.options.buttonClose);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", ctx.showStatusBar);
    } }, styles: [""] });
ModalContainerComponent = __decorate([
    ComponentRegister({
        uri: 'epsgis-modal-container',
        path: "components/modal/modal-container"
    })
], ModalContainerComponent);
export { ModalContainerComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalContainerComponent, [{
        type: Component,
        args: [{
                selector: 'epsgis-modal-container',
                templateUrl: './modal-container.component.html',
                styleUrls: ['./modal-container.component.scss'],
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }, { type: i0.NgZone }, { type: i1.SsModalOptions }, { type: i2.CommonService }, { type: i3.PanelManagerService }, { type: i4.WidgetManagerService }, { type: i5.AppGlobalConfig }, { type: i6.MapManagerService }]; }, { sspanelOverlay: [{
            type: ViewChild,
            args: ["ssmodal_overlay", { static: true }]
        }], sspanel_titlebar: [{
            type: ViewChild,
            args: ["ssmodal_titlebar", { static: true }]
        }], sspanel: [{
            type: ViewChild,
            args: ["ssmodal", { static: true }]
        }], modalElementRef: [{
            type: ViewChild,
            args: ['ssmodal', { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Vwc2dpcy9jb21wb25lbnRzL21vZGFsL21vZGFsLWNvbnRhaW5lci9tb2RhbC1jb250YWluZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZXBzZ2lzL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwtY29udGFpbmVyL21vZGFsLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUMsWUFBWSxFQUE0RCxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUosT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFJM0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxjQUFjLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUs3RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQzs7Ozs7Ozs7Ozs7O0lDSjlFLDBCQUFpSTs7O0lBQTVCLDBDQUFxQjs7OztJQUV4SCw2QkFBeUU7SUFDdkUsK0JBQzJDO0lBQXpDLDRPQUF3QztJQUN4QyxtQkFDaUQ7SUFEakQsK0JBQ2lEO0lBQy9DLDZCQUFlO0lBQ2IsK0JBQWtEO0lBQ3BELGlCQUFJO0lBQ04saUJBQU07SUFBQSxpQkFBTTtJQUNoQiwwQkFBZTs7O0lBUnlELGVBQXdDO0lBQXhDLHVFQUF3Qzs7OztJQVU5RywrQkFDMkM7SUFBekMsMk9BQXdDO0lBQ3hDLG1CQUNpRDtJQURqRCwrQkFDaUQ7SUFDL0MsNkJBQWU7SUFDYiwrQkFBa0Q7SUFDcEQsaUJBQUk7SUFDTixpQkFBTTtJQUFBLGlCQUFNOzs7SUFQd0QscUVBQXNDOzs7SUFaaEgsNkJBQTZDO0lBQzNDLDJHQVNlO0lBQ2YsMElBU2M7SUFHaEIsMEJBQWU7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LGlCQUFpQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUNHLGdCQUFnQjtrQkFBaEUsU0FBUzttQkFBQyxrQkFBa0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDUCxPQUFPO2tCQUE5QyxTQUFTO21CQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDRSxlQUFlO2tCQUF0RCxTQUFTO21CQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdG9yUmVmLCBOZ1pvbmUsIENvbXBvbmVudFJlZiwgRW1iZWRkZWRWaWV3UmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VQYW5lbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Jhc2UtcGFuZWwvYmFzZS1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3NNb2RhbFJlZiB9IGZyb20gJy4uL21vZGFsLXJlZic7XG5pbXBvcnQgeyBTc01vZGFsT3B0aW9ucyB9IGZyb20gJy4uL21vZGFsLXR5cGVzJztcbmltcG9ydCB7IFNlcnZpY2VJbmplY3RvciB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3NlcnZpY2UtaW5qZWN0b3InO1xuaW1wb3J0IHsgV2lkZ2V0U3RhdGUsIFdpZGdldFdpbmRvd1N0YXRlLCBXaWRnZXRQb3NpdGlvbiB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9iYXNlLXdpZGdldCc7XG4vLyBpbXBvcnQgeyBDZGtQb3J0YWxPdXRsZXQsIENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuZXhwb3J0IGZ1bmN0aW9uIHRocm93TnpNb2RhbENvbnRlbnRBbHJlYWR5QXR0YWNoZWRFcnJvcigpOiBuZXZlciB7XG4gIHRocm93IEVycm9yKCdBdHRlbXB0aW5nIHRvIGF0dGFjaCBtb2RhbCBjb250ZW50IGFmdGVyIGNvbnRlbnQgaXMgYWxyZWFkeSBhdHRhY2hlZCcpO1xufVxuaW1wb3J0IHsgQ29tcG9uZW50UmVnaXN0ZXIgfSBmcm9tICcuLi8uLi8uLi9kZWNvcmF0b3IvY29tcG9uZW50LXJlZ2lzdGVyLmRlY29yYXRvcic7XG5pbXBvcnQgeyBDb21tb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvY29tbW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFuZWxNYW5hZ2VyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3BhbmVsLW1hbmFnZXIuc2VydmljZSc7XG5pbXBvcnQgeyBXaWRnZXRNYW5hZ2VyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3dpZGdldC1tYW5hZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXBwR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2FwcC1jb25maWcnO1xuaW1wb3J0IHsgTWFwTWFuYWdlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9tYXAtbWFuYWdlci5zZXJ2aWNlJztcbkBDb21wb25lbnRSZWdpc3Rlcih7XG4gIHVyaTogJ2Vwc2dpcy1tb2RhbC1jb250YWluZXInLFxuICBwYXRoOiBcImNvbXBvbmVudHMvbW9kYWwvbW9kYWwtY29udGFpbmVyXCJcbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlcHNnaXMtbW9kYWwtY29udGFpbmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21vZGFsLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21vZGFsLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbENvbnRhaW5lckNvbXBvbmVudCBleHRlbmRzIEJhc2VQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgYW5pbWF0aW9uU3RhdGVDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxBbmltYXRpb25FdmVudD4oKTtcbiAgY29udGFpbmVyQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIGNhbmNlbFRyaWdnZXJlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgb2tUcmlnZ2VyZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIGRvY3VtZW50OiBEb2N1bWVudDtcbiAgbW9kYWxSZWYhOiBTc01vZGFsUmVmO1xuICBpc1N0cmluZ0NvbnRlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBlbGVtZW50Rm9jdXNlZEJlZm9yZU1vZGFsV2FzT3BlbmVkOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIGxhdGVzdE1vdXNlZG93blRhcmdldDogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBvbGRNYXNrU3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBudWxsID0gbnVsbDtcblxuICBvbkNsb3NlVHJlZ2dlcmVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBWaWV3Q2hpbGQoXCJzc21vZGFsX292ZXJsYXlcIiwgeyBzdGF0aWM6IHRydWUgfSkgc3NwYW5lbE92ZXJsYXk6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJzc21vZGFsX3RpdGxlYmFyXCIsIHsgc3RhdGljOiB0cnVlIH0pIHNzcGFuZWxfdGl0bGViYXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJzc21vZGFsXCIsIHsgc3RhdGljOiB0cnVlIH0pIHNzcGFuZWw6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3NzbW9kYWwnLCB7IHN0YXRpYzogdHJ1ZSB9KSBtb2RhbEVsZW1lbnRSZWYhOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcbiAgLy8gcG9ydGFsT3V0bGV0ITogQ2RrUG9ydGFsT3V0bGV0O1xuICBzaG93U3RhdHVzQmFyOiBib29sZWFuID0gZmFsc2U7XG4gIGRlZmF1bHRaSW5kZXggPSAxMTA7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByb3RlY3RlZCByZW5kZXI6IFJlbmRlcmVyMixcbiAgICBwcm90ZWN0ZWQgem9uZTogTmdab25lLFxuICAgIHB1YmxpYyBjb25maWc6IFNzTW9kYWxPcHRpb25zLFxuICAgIC8vIHByaXZhdGUgc2VydmljZUluamVjdGVyOiBTZXJ2aWNlSW5qZWN0b3IsXG4gICAgcHVibGljIGNvbW1vblNlcnZpY2U6Q29tbW9uU2VydmljZSxcbiAgICBwdWJsaWMgcGFuZWxNYW5hZ2VyOlBhbmVsTWFuYWdlclNlcnZpY2UsXG4gICAgcHVibGljIHdpZGdldE1hbmFnZXI6V2lkZ2V0TWFuYWdlclNlcnZpY2UsXG4gICAgcHVibGljIGdsb2JhbFBhcmFtczpBcHBHbG9iYWxDb25maWcsXG4gICAgcHVibGljIG1hcE1hbmFnZXI6TWFwTWFuYWdlclNlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIocmVuZGVyLCBjZHIpO1xuICAgIC8vIHRoaXMuc2V0U2VydmljZUluamVjdG9yKHRoaXMuc2VydmljZUluamVjdGVyKTtcbiAgICB0aGlzLmRvY3VtZW50ID0gZG9jdW1lbnQ7XG4gICAgdGhpcy5pc1N0cmluZ0NvbnRlbnQgPSB0eXBlb2YgY29uZmlnLmNvbnRlbnQgPT09ICdzdHJpbmcnO1xuICAgIHRoaXMuc2V0Q29udGFpbmVyKCk7XG4gICAgaWYgKHRoaXMuY29uZmlnLmZvb3RlciAhPSBudWxsKSB7XG4gICAgICB0aGlzLnNob3dTdGF0dXNCYXIgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb25maWcub2tEaXNhYmxlZCAhPT0gdHJ1ZSkge1xuICAgICAgdGhpcy5zaG93U3RhdHVzQmFyID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29uZmlnLmNhbmNlbERpc2FibGVkICE9PSB0cnVlKSB7XG4gICAgICB0aGlzLnNob3dTdGF0dXNCYXIgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5jb21tb25TZXJ2aWNlLmlzTW9iaWxlKCkpIHtcbiAgICAgIHRoaXMud2lkZ2V0Q29uZmlnID0ge1xuICAgICAgICBwb3NpdGlvbjogbmV3IFdpZGdldFBvc2l0aW9uKDAsIDAsIDAsIDAsIFwiMTAwJVwiLCBcIjEwMCVcIiwgXCJcIiwgXCJ1bnNldFwiKVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGxlZnQgPSAwO1xuICAgICAgaWYgKHRoaXMuY29uZmlnLndpZHRoID09PSBcIjEwMCVcIikge1xuICAgICAgICBsZWZ0ID0gMDtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jb25maWcud2lkdGggPT09IFwiYXV0b1wiKSB7XG5cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMuY29uZmlnLndpZHRoID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIGxlZnQgPSAod2luZG93LmlubmVyV2lkdGggLSB0aGlzLmNvbmZpZy53aWR0aCkgLyAyO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcy5jb25maWcud2lkdGggPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgbGV0IHggPSBwYXJzZUludCh0aGlzLmNvbmZpZy53aWR0aCwgMTApO1xuICAgICAgICBsZWZ0ID0gKHdpbmRvdy5pbm5lcldpZHRoIC0geCkgLyAyO1xuICAgICAgfVxuICAgICAgdGhpcy53aWRnZXRDb25maWcgPSB7XG4gICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgdG9wOiB0aGlzLmNvbmZpZy50b3AsXG4gICAgICAgICAgbGVmdDogbGVmdCxcbiAgICAgICAgICB3aWR0aDogdGhpcy5jb25maWcud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiB0aGlzLmNvbmZpZy5oZWlnaHQsXG4gICAgICAgICAgekluZGV4OiB0aGlzLmNvbmZpZy56SW5kZXggfHwgdGhpcy5kZWZhdWx0WkluZGV4XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICAgIGxldCBfaW5kZXggPSB0aGlzLmRlZmF1bHRaSW5kZXggLSAxO1xuICAgIGlmICh0aGlzLmNvbmZpZy56SW5kZXggPj0gMSkge1xuICAgICAgX2luZGV4ID0gdGhpcy5jb25maWcuekluZGV4IC0gMTtcbiAgICB9XG4gICAgLy/lpoLmnpzorr7nva7kuoZ6SW5kZXjvvIzliJnlsIbog4zmma9kaXbnmoR6aW5kZXjlh48x44CC6Kej5Yaz6IOM5pmv5peg5rOV6YGu55uW6auY5LqO5a6D55qEZGl2XG4gICAgdGhpcy5yZW5kZXIuc2V0U3R5bGUodGhpcy5zc3BhbmVsT3ZlcmxheS5uYXRpdmVFbGVtZW50LCAnei1pbmRleCcsIF9pbmRleCk7XG4gICAgdGhpcy5zZXRPcHRpb25zKHtcbiAgICAgIGJ1dHRvbk1heGltaXplOiB0cnVlLFxuICAgICAgYnV0dG9uQ2xvc2U6IHRydWUsXG4gICAgICBidXR0b25Db2xsYXBzZTogZmFsc2UsXG4gICAgICBtb2RhbDogdGhpcy5jb25maWcubWFzayxcbiAgICAgIHRpdGxlOiB0aGlzLmNvbmZpZy50aXRsZS50b1N0cmluZygpLFxuICAgICAgbWluSGVpZ2h0OiAxMDAsXG4gICAgICBtaW5XaWR0aDogMjAwXG4gICAgfSk7XG4gICAgdGhpcy5sYWJlbCA9IHRoaXMudG9vbHRpcCA9IHRoaXMuY29uZmlnLnRpdGxlLnRvU3RyaW5nKCk7XG4gICAgaWYgKHRoaXMuZ2xvYmFsUGFyYW1zLm1hcENvbmZpZy5pczNEKSB7XG4gICAgICB0aGlzLnZpZXcgPSB0aGlzLm1hcE1hbmFnZXIudmlldztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tYXAgPSB0aGlzLm1hcE1hbmFnZXIubWFwO1xuICAgIH1cbiAgICB0aGlzLmlkID0gXCJzcy1tb2RhbFwiO1xuICAgIHRoaXMuZ2lkID0gXCJzcy1tb2RhbFwiO1xuXG4gICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLndpZGdldENvbmZpZy5wb3NpdGlvbik7XG4gICAgdGhpcy5zdGF0ZSA9IFdpZGdldFN0YXRlLm9wZW5lZDtcbiAgICB0aGlzLndpbmRvd1N0YXRlID0gV2lkZ2V0V2luZG93U3RhdGUubm9ybWFsO1xuXG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgfVxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5tb2RhbFJlZi5hZnRlck9wZW4ubmV4dCgpO1xuICAgIGlmICh0aGlzLmNvbmZpZy5mdWxsU2NyZWVuKSB7XG4gICAgICB0aGlzLl9tYXhpbWl6ZSgpO1xuICAgIH1cbiAgfVxuICBvbkNsb3NlKCkge1xuICAgIHRoaXMub25DbG9zZVRyZWdnZXJlZC5lbWl0KCk7XG4gIH1cbiAgb25Nb3VzZWRvd24oZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIHRoaXMubGF0ZXN0TW91c2Vkb3duVGFyZ2V0ID0gKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KSB8fCBudWxsO1xuICB9XG5cbiAgb25Nb3VzZXVwKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZS50YXJnZXQgPT09IHRoaXMubGF0ZXN0TW91c2Vkb3duVGFyZ2V0ICYmIGUudGFyZ2V0ID09PSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkge1xuICAgICAgdGhpcy5jb250YWluZXJDbGljay5lbWl0KCk7XG4gICAgfVxuICAgIHRoaXMubGF0ZXN0TW91c2Vkb3duVGFyZ2V0ID0gbnVsbDtcbiAgfVxuXG4gIG9uQ2xvc2VDbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmNhbmNlbFRyaWdnZXJlZC5lbWl0KCk7XG4gIH1cblxuICBvbk9rQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5va1RyaWdnZXJlZC5lbWl0KCk7XG4gIH1cblxuICAvLyAgYXR0YWNoMjxUPihwb3J0YWw6IENvbXBvbmVudFBvcnRhbDxUPil7XG4gIC8vICAgaWYgKHRoaXMucG9ydGFsT3V0bGV0Lmhhc0F0dGFjaGVkKCkpIHtcbiAgLy8gICAgIHRocm93TnpNb2RhbENvbnRlbnRBbHJlYWR5QXR0YWNoZWRFcnJvcigpO1xuICAvLyAgIH1cbiAgLy8gICB0aGlzLnNhdmVQcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQoKTtcbiAgLy8gICB0aGlzLnNldE1vZGFsVHJhbnNmb3JtT3JpZ2luKCk7XG4gIC8vICAgcmV0dXJuIHRoaXMucG9ydGFsT3V0bGV0LmF0dGFjaENvbXBvbmVudFBvcnRhbChwb3J0YWwpO1xuICAvLyAgfVxuICBhdHRhY2hDb21wb25lbnRQb3J0YWw8VD4oY29tcFJlZjogQ29tcG9uZW50UmVmPFQ+KTogQ29tcG9uZW50UmVmPFQ+IHtcbiAgICB0aGlzLnNhdmVQcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQoKTtcbiAgICB0aGlzLnNldE1vZGFsVHJhbnNmb3JtT3JpZ2luKCk7XG4gICAgdGhpcy53aWRnZXRDb250YWluZXIuaW5zZXJ0KGNvbXBSZWYuaG9zdFZpZXcpO1xuICAgIHJldHVybiBjb21wUmVmO1xuICB9XG5cbiAgYXR0YWNoVGVtcGxhdGVQb3J0YWw8Qz4oKTogRW1iZWRkZWRWaWV3UmVmPEM+IHtcbiAgICAvL1RPRE8gXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXROYXRpdmVFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIGFuaW1hdGlvbkRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIC8vIHJldHVybiB0aGlzLmNvbmZpZy5uek5vQW5pbWF0aW9uIHx8IHRoaXMuYW5pbWF0aW9uVHlwZSA9PT0gJ05vb3BBbmltYXRpb25zJztcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIHNldE1vZGFsVHJhbnNmb3JtT3JpZ2luKCk6IHZvaWQge1xuICAgIGNvbnN0IG1vZGFsRWxlbWVudCA9IHRoaXMubW9kYWxFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKHRoaXMuZWxlbWVudEZvY3VzZWRCZWZvcmVNb2RhbFdhc09wZW5lZCBhcyBIVE1MRWxlbWVudCkge1xuICAgICAgY29uc3QgcHJldmlvdXNseURPTVJlY3QgPSB0aGlzLmVsZW1lbnRGb2N1c2VkQmVmb3JlTW9kYWxXYXNPcGVuZWQhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICBjb25zdCBsYXN0UG9zaXRpb24gPSB0aGlzLmNvbW1vblNlcnZpY2UuZ2V0RWxlbWVudEJvdW5kcyh0aGlzLmVsZW1lbnRGb2N1c2VkQmVmb3JlTW9kYWxXYXNPcGVuZWQpO1xuICAgICAgY29uc3QgeCA9IGxhc3RQb3NpdGlvbi5sZWZ0ICsgcHJldmlvdXNseURPTVJlY3Qud2lkdGggLyAyO1xuICAgICAgY29uc3QgeSA9IGxhc3RQb3NpdGlvbi50b3AgKyBwcmV2aW91c2x5RE9NUmVjdC5oZWlnaHQgLyAyO1xuICAgICAgY29uc3QgdHJhbnNmb3JtT3JpZ2luID0gYCR7eCAtIG1vZGFsRWxlbWVudC5vZmZzZXRMZWZ0fXB4ICR7eSAtIG1vZGFsRWxlbWVudC5vZmZzZXRUb3B9cHggMHB4YDtcbiAgICAgIHRoaXMucmVuZGVyLnNldFN0eWxlKG1vZGFsRWxlbWVudCwgJ3RyYW5zZm9ybS1vcmlnaW4nLCB0cmFuc2Zvcm1PcmlnaW4pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2F2ZVByZXZpb3VzbHlGb2N1c2VkRWxlbWVudCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kb2N1bWVudCkge1xuICAgICAgdGhpcy5lbGVtZW50Rm9jdXNlZEJlZm9yZU1vZGFsV2FzT3BlbmVkID0gdGhpcy5kb2N1bWVudC5hY3RpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKSB7XG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB0cmFwRm9jdXMoKTogdm9pZCB7XG5cbiAgfVxuXG4gIHByaXZhdGUgcmVzdG9yZUZvY3VzKCk6IHZvaWQge1xuXG4gIH1cblxuICBwcml2YXRlIHNldEVudGVyQW5pbWF0aW9uQ2xhc3MoKTogdm9pZCB7XG5cbiAgfVxuXG4gIHByaXZhdGUgc2V0RXhpdEFuaW1hdGlvbkNsYXNzKCk6IHZvaWQge1xuXG4gIH1cblxuICBwcml2YXRlIGNsZWFuQW5pbWF0aW9uQ2xhc3MoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uRGlzYWJsZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICB9XG5cbiAgcHJpdmF0ZSBiaW5kQmFja2Ryb3BTdHlsZSgpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGNvbnRhaW5lciBlbGVtZW50LlxuICAgKiBAZGVwcmVjYXRlZCBOb3Qgc3VwcG9ydGVkLlxuICAgKiBAYnJlYWtpbmctY2hhbmdlIDEwLjAuMFxuICAgKi9cbiAgcHJpdmF0ZSBzZXRDb250YWluZXIoKTogdm9pZCB7XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5nZXRDb250YWluZXIoKTtcbiAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICB0aGlzLnJlbmRlci5hcHBlbmRDaGlsZChjb250YWluZXIsIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgdGhlIGNvbnRhaW5lciBlbGVtZW50LlxuICAgKiBAZGVwcmVjYXRlZCBOb3Qgc3VwcG9ydGVkLlxuICAgKiBAYnJlYWtpbmctY2hhbmdlIDEwLjAuMFxuICAgKi9cbiAgcHJpdmF0ZSByZXNldENvbnRhaW5lcigpOiB2b2lkIHtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmdldENvbnRhaW5lcigpO1xuICAgIGlmIChjb250YWluZXIpIHtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldENvbnRhaW5lcigpOiBIVE1MRWxlbWVudCB8IG51bGwge1xuICAgIC8vIGNvbnN0IHsgbnpHZXRDb250YWluZXIgfSA9IHRoaXMuY29uZmlnO1xuICAgIC8vIGNvbnN0IGNvbnRhaW5lciA9IHR5cGVvZiBuekdldENvbnRhaW5lciA9PT0gJ2Z1bmN0aW9uJyA/IG56R2V0Q29udGFpbmVyKCkgOiBuekdldENvbnRhaW5lcjtcbiAgICAvLyByZXR1cm4gY29udGFpbmVyIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPyBjb250YWluZXIgOiBudWxsO1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5nZXRDb250YWluZXI7XG4gIH1cblxuICBvbkFuaW1hdGlvbkRvbmUoZXZlbnQ6IEFuaW1hdGlvbkV2ZW50KTogdm9pZCB7XG5cbiAgfVxuXG4gIG9uQW5pbWF0aW9uU3RhcnQoZXZlbnQ6IEFuaW1hdGlvbkV2ZW50KTogdm9pZCB7XG5cbiAgfVxuXG4gIHN0YXJ0RXhpdEFuaW1hdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXRlID0gV2lkZ2V0U3RhdGUuY2xvc2VkO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG4gIC8qKlxuICAqIOWFs+mXrXBhbmVsXG4gICogQHBhcmFtIGV2ZW50IFxuICAqL1xuICBjbG9zZVBhbmVsKGV2ZW50KSB7XG4gICAgdGhpcy5jYW5jZWxUcmlnZ2VyZWQuZW1pdCgpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwic3Ntb2RhbF9vdmVybGF5XCIgI3NzbW9kYWxfb3ZlcmxheT5cbiAgPGRpdiBjbGFzcz1cInNzbW9kYWxcIiAjc3Ntb2RhbCBpZD1cInt7b3B0aW9ucy5pZH19XCIgW25nU3R5bGVdPVwicG9zaXRpb25cIj5cbiAgICA8ZGl2IGNsYXNzPVwic3Ntb2RhbF90aXRsZWJhciBzc21vZGFsX3RpdGxlYmFyX2RyYWdnYWJsZVwiICNzc21vZGFsX3RpdGxlYmFyXG4gICAgICAobW91c2Vkb3duKT1cIl90aXRsZWJhcl9Nb3VzZURvd24oJGV2ZW50KTtcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzc21vZGFsX3RpdGxlYmFyX3RleHRcIj48c3BhbiBjbGFzcz1cInNzbW9kYWxfdGl0bGViYXJfdGV4dF9zcGFuXCI+e3tvcHRpb25zLnRpdGxlfX08L3NwYW4+PC9kaXY+XG4gICAgICA8IS0taWNvbiBidXR0b24tLT5cbiAgICAgIDxkaXYgY2xhc3M9XCJzc21vZGFsX3RpdGxlYmFyX2N1c3RvbV9idXR0b25zXCIgKm5nSWY9XCJjb25maWcudGl0bGVCYXJCdXR0b25zXCIgc3MtbW9kYWwtdGl0bGViYXItYnV0dG9uIFttb2RhbFJlZl09XCJtb2RhbFJlZlwiPjwvZGl2PlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm9wdGlvbnMuYnV0dG9uQ29sbGFwc2VcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIndpbmRvd1N0YXRlPT0nY29sbGFwc2VkJzsgZWxzZSBzaG93Q29sbGFwc2VkQnV0dG9uXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNzbW9kYWxfdGl0bGViYXJfYnV0dG9uIHNzbW9kYWxfdGl0bGViYXJfYnV0dG9uX2NvbGxhcHNlXCIgdGl0bGU9XCJ7e29wdGlvbnMuYnV0dG9uVW5Db2xsYXBzZVRleHR9fVwiXG4gICAgICAgICAgICAoY2xpY2spPVwiX2J1dHRvbkNvbGxhcHNlX0NsaWNrKCRldmVudCk7XCI+XG4gICAgICAgICAgICA8c3ZnIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMCAxMFwiIGhlaWdodD1cIjEwMCVcIiB3aWR0aD1cIjEwMCVcIj5cbiAgICAgICAgICAgICAgPGcgZmlsbD1cIm5vbmVcIj5cbiAgICAgICAgICAgICAgICA8cG9seWxpbmUgcG9pbnRzPVwiMSwzIDksMyA1LDggMSwzIDksM1wiPjwvcG9seWxpbmU+XG4gICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgIDwvc3ZnPjwvZGl2PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPG5nLXRlbXBsYXRlICNzaG93Q29sbGFwc2VkQnV0dG9uPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzc21vZGFsX3RpdGxlYmFyX2J1dHRvbiBzc21vZGFsX3RpdGxlYmFyX2J1dHRvbl9jb2xsYXBzZVwiIHRpdGxlPVwie3tvcHRpb25zLmJ1dHRvbkNvbGxhcHNlVGV4dH19XCJcbiAgICAgICAgICAgIChjbGljayk9XCJfYnV0dG9uQ29sbGFwc2VfQ2xpY2soJGV2ZW50KTtcIj5cbiAgICAgICAgICAgIDxzdmcgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEwIDEwXCIgaGVpZ2h0PVwiMTAwJVwiIHdpZHRoPVwiMTAwJVwiPlxuICAgICAgICAgICAgICA8ZyBmaWxsPVwibm9uZVwiPlxuICAgICAgICAgICAgICAgIDxwb2x5bGluZSBwb2ludHM9XCIxLDcgOSw3IDUsMiAxLDcgOSw3XCI+PC9wb2x5bGluZT5cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPC9zdmc+PC9kaXY+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG5cblxuICAgICAgPC9uZy1jb250YWluZXI+XG5cblxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm9wdGlvbnMuYnV0dG9uTWF4aW1pemVcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIndpbmRvd1N0YXRlID09ICdtYXhpbWl6ZWQnOyBlbHNlIHNob3dNYXhpbWl6ZUJ1dHRvblwiPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNzbW9kYWxfdGl0bGViYXJfYnV0dG9uIHNzbW9kYWxfdGl0bGViYXJfYnV0dG9uX21heGltaXplXCIgdGl0bGU9XCJ7e29wdGlvbnMuYnV0dG9uVW5tYXhpbWl6ZVRleHR9fVwiXG4gICAgICAgICAgICAoY2xpY2spPVwiX2J1dHRvbk1heF9DbGljaygkZXZlbnQpO1wiPjxzdmcgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB2aWV3Qm94PVwiMCAwIDEwIDEwXCIgaGVpZ2h0PVwiMTAwJVwiIHdpZHRoPVwiMTAwJVwiPlxuICAgICAgICAgICAgICA8ZyBmaWxsPVwibm9uZVwiPlxuICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIxXCIgeT1cIjNcIiBoZWlnaHQ9XCI2XCIgd2lkdGg9XCI2XCI+PC9yZWN0PlxuICAgICAgICAgICAgICAgIDxsaW5lIHkxPVwiM1wiIHgxPVwiM1wiIHkyPVwiMVwiIHgyPVwiM1wiPjwvbGluZT5cbiAgICAgICAgICAgICAgICA8bGluZSB5MT1cIjFcIiB4MT1cIjIuNVwiIHkyPVwiMVwiIHgyPVwiOS41XCI+PC9saW5lPlxuICAgICAgICAgICAgICAgIDxsaW5lIHkxPVwiMVwiIHgxPVwiOVwiIHkyPVwiN1wiIHgyPVwiOVwiPjwvbGluZT5cbiAgICAgICAgICAgICAgICA8bGluZSB5MT1cIjdcIiB4MT1cIjkuNVwiIHkyPVwiN1wiIHgyPVwiN1wiPjwvbGluZT5cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPC9zdmc+PC9kaXY+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8bmctdGVtcGxhdGUgI3Nob3dNYXhpbWl6ZUJ1dHRvbj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzc21vZGFsX3RpdGxlYmFyX2J1dHRvbiBzc21vZGFsX3RpdGxlYmFyX2J1dHRvbl9tYXhpbWl6ZVwiIHRpdGxlPVwie3tvcHRpb25zLmJ1dHRvbk1heGltaXplVGV4dH19XCJcbiAgICAgICAgICAgIChjbGljayk9XCJfYnV0dG9uTWF4X0NsaWNrKCRldmVudCk7XCI+PHN2ZyB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHZpZXdCb3g9XCIwIDAgMTAgMTBcIiBoZWlnaHQ9XCIxMDAlXCIgd2lkdGg9XCIxMDAlXCI+XG4gICAgICAgICAgICAgIDxnIGZpbGw9XCJub25lXCI+XG4gICAgICAgICAgICAgICAgPHJlY3QgeD1cIjFcIiB5PVwiMVwiIGhlaWdodD1cIjhcIiB3aWR0aD1cIjhcIj48L3JlY3Q+XG4gICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgIDwvc3ZnPjwvZGl2PlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJvcHRpb25zLmJ1dHRvbkNsb3NlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzc21vZGFsX3RpdGxlYmFyX2J1dHRvbiBzc21vZGFsX3RpdGxlYmFyX2J1dHRvbl9jbG9zZVwiIHRpdGxlPVwie3tvcHRpb25zLmJ1dHRvbkNsb3NlVGV4dH19XCJcbiAgICAgICAgICAoY2xpY2spPVwiY2xvc2VQYW5lbCgkZXZlbnQpO1wiPlxuICAgICAgICAgIDxzdmcgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMCAxMFwiIGhlaWdodD1cIjEwMCVcIiB3aWR0aD1cIjEwMCVcIj5cbiAgICAgICAgICAgIDxnPlxuICAgICAgICAgICAgICA8bGluZSB5Mj1cIjBcIiB4Mj1cIjEwXCIgeTE9XCIxMFwiIHgxPVwiMFwiPjwvbGluZT5cbiAgICAgICAgICAgICAgPGxpbmUgeTI9XCIxMFwiIHgyPVwiMTBcIiB5MT1cIjBcIiB4MT1cIjBcIj48L2xpbmU+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgPC9zdmc+PC9kaXY+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwic3Ntb2RhbF9jb250ZW50XCIgKGNsaWNrKT1cIl9jb250ZW50Q2xpY2soJGV2ZW50KTtcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSAjd2lkZ2V0X2NvbnRlbnQ+PC9uZy10ZW1wbGF0ZT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwic3Ntb2RhbF9zdGF0dXNiYXJcIiAqbmdJZj1cInNob3dTdGF0dXNCYXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzc21vZGFsX3N0YXR1c2Jhcl9jb250ZW50XCI+XG4gICAgICAgIDxkaXYgKm5nSWY9XCJjb25maWcuZm9vdGVyICE9PSBudWxsXCIgc3MtbW9kYWwtZm9vdGVyIFttb2RhbFJlZl09XCJtb2RhbFJlZlwiIChjYW5jZWxUcmlnZ2VyZWQpPVwib25DbG9zZUNsaWNrKClcIlxuICAgICAgICAgIChva1RyaWdnZXJlZCk9XCJvbk9rQ2xpY2soKVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8IS0tIDxkaXYgY2xhc3M9XCJzc21vZGFsX3N0YXR1c2Jhcl9oYW5kbGVcIj4gLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzc21vZGFsX3Jlc2l6ZXIgc3Ntb2RhbF9yZXNpemVyX2JvdHRvbVwiXG4gICAgICAgICAgKG1vdXNlZG93bik9XCJfcmVzaXplcl9Nb3VzZURvd24oJGV2ZW50LHtkaW1lbnNpb246J2hlaWdodCcsZGlyZWN0aW9uWTonYm90dG9tJ30pO1wiPjwvZGl2PlxuICAgICAgPCEtLSA8L2Rpdj4gLS0+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInNzbW9kYWxfcmVzaXplciBzc21vZGFsX3Jlc2l6ZXJfdG9wXCJcbiAgICAgIChtb3VzZWRvd24pPVwiX3Jlc2l6ZXJfTW91c2VEb3duKCRldmVudCx7ZGltZW5zaW9uOidoZWlnaHQnLGRpcmVjdGlvblk6J3RvcCd9KTtcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwic3Ntb2RhbF9yZXNpemVyIHNzbW9kYWxfcmVzaXplcl9sZWZ0XCJcbiAgICAgIChtb3VzZWRvd24pPVwiX3Jlc2l6ZXJfTW91c2VEb3duKCRldmVudCx7ZGltZW5zaW9uOid3aWR0aCcsZGlyZWN0aW9uWDonbGVmdCd9KTtcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwic3Ntb2RhbF9yZXNpemVyIHNzbW9kYWxfcmVzaXplcl9yaWdodFwiXG4gICAgICAobW91c2Vkb3duKT1cIl9yZXNpemVyX01vdXNlRG93bigkZXZlbnQse2RpbWVuc2lvbjond2lkdGgnLGRpcmVjdGlvblg6J3JpZ2h0J30pO1wiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJzc21vZGFsX3Jlc2l6ZXIgc3Ntb2RhbF9yZXNpemVyX3RvcGxlZnRcIlxuICAgICAgKG1vdXNlZG93bik9XCJfcmVzaXplcl9Nb3VzZURvd24oJGV2ZW50LHtkaW1lbnNpb246J2JvdGgnLGRpcmVjdGlvblg6J2xlZnQnLGRpcmVjdGlvblk6J3RvcCd9KTtcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwic3Ntb2RhbF9yZXNpemVyIHNzbW9kYWxfcmVzaXplcl90b3ByaWdodFwiXG4gICAgICAobW91c2Vkb3duKT1cIl9yZXNpemVyX01vdXNlRG93bigkZXZlbnQse2RpbWVuc2lvbjonYm90aCcsZGlyZWN0aW9uWDoncmlnaHQnLGRpcmVjdGlvblk6J3RvcCd9KTtcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwic3Ntb2RhbF9yZXNpemVyIHNzbW9kYWxfcmVzaXplcl9ib3R0b21sZWZ0XCJcbiAgICAgIChtb3VzZWRvd24pPVwiX3Jlc2l6ZXJfTW91c2VEb3duKCRldmVudCx7ZGltZW5zaW9uOidib3RoJyxkaXJlY3Rpb25YOidsZWZ0JyxkaXJlY3Rpb25ZOidib3R0b20nfSk7XCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInNzbW9kYWxfcmVzaXplciBzc21vZGFsX3Jlc2l6ZXJfYm90dG9tcmlnaHRcIlxuICAgICAgKG1vdXNlZG93bik9XCJfcmVzaXplcl9Nb3VzZURvd24oJGV2ZW50LHtkaW1lbnNpb246J2JvdGgnLGRpcmVjdGlvblg6J3JpZ2h0JyxkaXJlY3Rpb25ZOidib3R0b20nfSk7XCI+PC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwic3Ntb2RhbF9taW5wbGFjZWhvbGRlclwiPjwvZGl2PiJdfQ==