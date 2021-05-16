import { ViewChild, ViewContainerRef, Optional, HostListener, Directive } from '@angular/core';
import { WidgetWindowState, WidgetState } from '../../models/base-widget';
import { PanelInMobileShowMode, PanelDockMode, DefaultPanelOptions } from '../../models/base-panel';
import * as _ from 'lodash';
import { aspect } from '../../services/aspect.service';
import { BaseWidget } from '../base-widget';
import * as i0 from "@angular/core";
const _c0 = ["widget_content"];
const _c1 = ["sspanel_overlay"];
const _c2 = ["sspanel_titlebar"];
const _c3 = ["sspanel"];
export class BasePanelComponent extends BaseWidget {
    constructor(_render, cdr) {
        super();
        this._render = _render;
        this.cdr = cdr;
        this.options = DefaultPanelOptions;
        this.currentPosition = undefined;
        this.savedPosition = undefined;
        this.currentSize = undefined;
        this.savedSize = undefined;
        this.isMouseEvent = false;
        this.originalPosition = undefined;
        this.dockMode = PanelDockMode.none;
        this._isRunInMobile = false;
        this._mobileShowMode = PanelInMobileShowMode.action;
        this._eventTempData = undefined;
    }
    ngOnInit() {
        this._isRunInMobile = this.commonService.isMobileNotTablet();
        if (this.options.modal === true) {
            if (this.sspanelOverlay) {
                this._render.setStyle(this.sspanelOverlay.nativeElement, "pointer-events", "auto");
            }
        }
        else {
            if (this.sspanelOverlay) {
                this._render.setStyle(this.sspanelOverlay.nativeElement, "background-color", "transparent");
            }
        }
        if (this._isRunInMobile) {
            if (this._mobileShowMode === PanelInMobileShowMode.drawer
                || this._mobileShowMode === PanelInMobileShowMode.drawerRight) {
                this._render.setStyle(this.sspanelOverlay.nativeElement, "pointer-events", "auto");
                this._render.setStyle(this.sspanelOverlay.nativeElement, "background-color", "#00000080");
            }
        }
        else {
            try {
                this.xxxx = this._document_MouseMove.bind(this);
                this.yyyy = this._document_MouseUp.bind(this);
                this.started = true;
            }
            catch (error) {
                console.log(`open panel[${this.widget.instance.uri}] error`);
                console.error(error);
            }
        }
        super.ngOnInit();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        if (this.widget) {
            this.widgetManager.destroyWidget(this.widget);
        }
    }
    ngAfterViewInit() {
        Promise.resolve(null).then(() => {
            this.startup();
            this.state = WidgetState.opened;
            this.loadAllWidgetsInOrder();
            this.onOpen();
            if (this.cdr && this.cdr["destroyed"] === false) {
                this.cdr.detectChanges();
            }
            super.afterNgAfterViewInit();
        });
    }
    setPosition(positionConfig) {
        if (!this.widgetConfig.position.width) {
            this.widgetConfig.position.width = this.options.width;
        }
        if (!this.widgetConfig.position.height) {
            this.widgetConfig.position.height = this.options.height;
        }
        let w = this.commonService.getPxNumber(this.widgetConfig.position.width);
        let h = this.commonService.getPxNumber(this.widgetConfig.position.height);
        if (typeof w === "number" && w < this.options.minWidth) {
            this.widgetConfig.position.width = this.options.minWidth;
        }
        if (typeof h === "number" && h < this.options.minWidth) {
            this.widgetConfig.position.height = this.options.minHeight;
        }
        if (this.commonService.isMobileNotTablet()) {
            this._setMobilePosition();
        }
        else {
            this._setPCPosition();
        }
        super.setPosition(this.widgetConfig.position);
    }
    _setPCPosition() {
        this.currentSize = { width: this.widgetConfig.position.width, height: this.widgetConfig.position.height };
        this.currentPosition = { left: undefined, top: undefined, width: undefined, height: undefined };
        this.currentPosition.left = this.commonService.getPxNumber(this.widgetConfig.position.left);
        this.currentPosition.top = this.commonService.getPxNumber(this.widgetConfig.position.top);
        this.currentPosition.width = this.commonService.getPxNumber(this.widgetConfig.position.width);
        this.currentPosition.height = this.commonService.getPxNumber(this.widgetConfig.position.height);
        this.savedPosition = _.cloneDeep(this.currentPosition);
        this.originalPosition = _.cloneDeep(this.currentPosition);
    }
    _setMobilePosition() {
    }
    loadAllWidgetsInOrder() {
        const configs = [this.widgetConfig];
        _.forEach(configs, (wConfig) => {
            if (wConfig.visible === false) {
                return;
            }
            this.widgetManager.loadWidget(wConfig).then((widget) => {
                this.widget = widget;
                if (this.options.showTitle === false) {
                    this.widget.instance.showSettingWhenInPanel = true;
                }
                this.widget.instance.reqPara = this.reqPara;
                this.widgetContainer.insert(this.widget.hostView);
                aspect.after(this.widget.instance, "afterNgAfterViewInit", () => {
                    this.widget.instance.started = true;
                    this.widget.instance.state = WidgetState.opened;
                    this.widget.instance.windowState = WidgetWindowState.normal;
                    this.widget.instance.startup();
                });
            });
        });
    }
    getAllWidgetConfigs() {
        let configs = [];
        if (Array.isArray(this.config.widgets)) {
            configs = this.config.widgets;
        }
        else {
            configs = [this.widgetConfig];
        }
        return configs;
    }
    isDockable() {
        return this.dockMode === PanelDockMode.left ||
            this.dockMode === PanelDockMode.bottom ||
            this.dockMode === PanelDockMode.right;
    }
    startup() {
        this.started = true;
    }
    setWidget(widget) {
        this.widget = widget;
        if (this.options.showTitle === false) {
            this.widget.instance.showSettingWhenInPanel = true;
        }
    }
    setOptions(options) {
        if (this.widgetConfig && this.widgetConfig.panel) {
            _.merge(options, this.widgetConfig.panel);
        }
        this.options = _.merge(_.cloneDeep(DefaultPanelOptions), options);
        this.options.buttonSetting = this.isSettingMode;
    }
    setWindowState(state) {
        this.windowState = state;
    }
    setState(state) {
        switch (state) {
            case WidgetState.opened:
                this.showPanel();
                break;
            case WidgetState.closed:
                this.hidePanel();
                break;
            case WidgetState.active:
                break;
            default:
                break;
        }
        this.state = state;
        if (this.widget) {
            this.widget.instance.setState(state);
        }
    }
    showPanel() {
        this.sspanelOverlay.nativeElement.parentElement.style.display = '';
        if (this.widget) {
            this.commonService.getComponentRootNode(this.widget).style.display = '';
        }
        this.onOpen();
        this.state = WidgetState.opened;
    }
    hidePanel() {
        this.sspanelOverlay.nativeElement.parentElement.style.display = 'none';
        if (this.widget) {
            this.commonService.getComponentRootNode(this.widget).style.display = 'none';
        }
        this.onClose();
        this.state = WidgetState.closed;
    }
    closePanel(event) {
        this.panelManager.closePanel(this.id);
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
    }
    onNormalize() {
        if (this.widget) {
            this.widget.instance.onNormalize();
        }
    }
    onMinimize() {
        if (this.widget) {
            this.widget.instance.onMinimize();
        }
    }
    onMaximize() {
        if (this.widget) {
            this.widget.instance.onMaximize();
        }
    }
    resize(position) {
        if (position) {
            if (position.left < 0) {
                position.left = 0;
            }
            if (position.top < 0) {
                position.top = 0;
            }
            if (position.width < this.options.minWidth) {
                position.width = this.options.minWidth;
            }
            if (position.height < this.options.minHeight) {
                position.height = this.options.minHeight;
            }
            this._render.setStyle(this.sspanel.nativeElement, "left", this._convertToStyleVal(position.left));
            this._render.setStyle(this.sspanel.nativeElement, "top", this._convertToStyleVal(position.top));
            this._render.setStyle(this.sspanel.nativeElement, "width", this._convertToStyleVal(position.width));
            this._render.setStyle(this.sspanel.nativeElement, "height", this._convertToStyleVal(position.height));
            this.widgetConfig.position = _.merge(this.widgetConfig.position, position);
            this.setPosition(position);
        }
    }
    onResize() {
        if (this.widget) {
            this.widget.instance.resize();
        }
    }
    onActive() {
    }
    onDeActive() {
    }
    onCollapse() {
    }
    onExpand() {
    }
    onMove() {
    }
    onPositionChange(position) {
        this.setPosition(position);
    }
    onOpen() {
        if (this.widget && this.widget.instance.started) {
            this.widget.instance.onOpen();
        }
    }
    onClose() {
        if (this.widget) {
            this.widgetManager.closeWidget(this.widget);
        }
    }
    onMouseEnter(target) {
        if (this.moveTopOnActive) {
            this.panelManager._activePanel(this.id);
        }
    }
    onMouseLeave() {
    }
    _getCurrentPosition() {
        let _position = this.currentPosition;
        if (_position.top === "auto") {
            _position.top = this.position.top;
        }
        if (_position.left === "auto" || _position.left === 0) {
            const _panelBounds = this.commonService.getElementBounds(this.sspanel.nativeElement);
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
            if (_containerBounds) {
                _position.left = _panelBounds.left - _containerBounds.left;
            }
        }
        return _.merge({}, _position);
    }
    _setCurrentPosition(position) {
        this.currentPosition = _.merge(this.currentPosition, position);
    }
    _saveCurrentPosition() {
        this.savedPosition = this._getCurrentPosition();
    }
    _restoreSavedPosition() {
        return this._changePosition(this.savedPosition);
    }
    _changePosition(params) {
        let defRet = this.commonService.createPromiseDefer();
        let settings = this.options;
        let animationTime = (params.animationTime !== undefined) ? parseInt(params.animationTime) : settings.animationTime;
        let newPosition = {
            top: params.top,
            left: params.left,
            bottom: params.bottom,
            right: params.right
        };
        if (params.check) {
            if (!(this.state === WidgetState.opened) ||
                this.windowState === WidgetWindowState.maximized ||
                this.windowState === WidgetWindowState.minimized)
                return;
            if (settings.keepInViewport) {
                let size = this._getCurrentSize();
                let $window = this._getWindowSize();
                if (newPosition.top > $window.height() - size.height)
                    newPosition.top = $window.height() - size.height;
                if (newPosition.left > $window.width() - size.width)
                    newPosition.left = $window.width() - size.width;
                if (newPosition.top < 0)
                    newPosition.top = 0;
                if (newPosition.left < 0)
                    newPosition.left = 0;
            }
        }
        let currentPosition = this._getCurrentPosition();
        if (currentPosition.top != newPosition.top || currentPosition.left != newPosition.left) {
            this.position = _.merge(this.position, {
                left: newPosition.left + "px",
                top: newPosition.top + "px"
            });
            this.sspanel.nativeElement.style.left = newPosition.left + "px";
            this.sspanel.nativeElement.style.top = newPosition.top + "px";
            this._setCurrentPosition(newPosition);
            defRet.resolve();
        }
        else {
            defRet.resolve();
        }
        return defRet.promise();
    }
    _getWindowSize() {
        return {
            height: () => {
                return window.innerHeight;
            },
            width: () => {
                return window.outerWidth;
            }
        };
    }
    _getCurrentSize() {
        return _.merge({}, this.currentSize);
    }
    _saveCurrentSize() {
        this.savedSize = this._getCurrentSize();
    }
    _setCurrentSize(size) {
        this.currentSize = _.merge(this.currentSize, size);
    }
    _restoreSavedSize() {
        return this._changeSize(_.merge({
            checkPosition: true,
            checkSize: false,
            event: false
        }, this.savedSize));
    }
    _convertToStyleVal(val) {
        if (val == "0")
            return "0px";
        if (!val)
            return "";
        if (val === "auto" || val == "100%")
            return val;
        let _w = parseFloat(val), _ws = "";
        if (isNaN(_w)) {
            _ws = val;
        }
        else {
            if (_w < 0) {
                _w = 0;
            }
            _ws = _w + "px";
        }
        return _ws;
    }
    _changeSize(params) {
        let defRet = this.commonService.createPromiseDefer();
        let settings = this.options;
        let animationTime = (params.animationTime !== undefined) ? parseInt(params.animationTime) : settings.animationTime;
        let newSize = {
            width: params.width,
            height: params.height
        };
        if (params.checkSize) {
            if (this.state === WidgetState.closed
                || this.windowState === WidgetWindowState.minimized ||
                this.windowState === WidgetWindowState.maximized)
                return;
            if (settings.maxWidth && newSize.width > settings.maxWidth)
                newSize.width = settings.maxWidth;
            if (settings.minWidth && newSize.width < settings.minWidth)
                newSize.width = settings.minWidth;
            if (settings.maxHeight && newSize.height > settings.maxHeight)
                newSize.height = settings.maxHeight;
            if (settings.minHeight && newSize.height < settings.minHeight)
                newSize.height = settings.minHeight;
            if (this.windowState === WidgetWindowState.collapsed) {
                this.currentSize = _.merge({}, newSize);
                delete newSize.height;
            }
        }
        let currentSize = this._getCurrentSize();
        if (currentSize.width != newSize.width || currentSize.height != newSize.height) {
            if (newSize.height) {
                this._render.setStyle(this.sspanel.nativeElement, "height", this._convertToStyleVal(newSize.height));
            }
            if (newSize.width) {
                this._render.setStyle(this.sspanel.nativeElement, "width", this._convertToStyleVal(newSize.width));
            }
            this._setCurrentSize(newSize);
            defRet.resolve();
        }
        else {
            defRet.resolve();
        }
        return defRet.promise();
    }
    _getBordersWidth(border) {
        if (border !== undefined) {
            return this._getBorderWidth(this.sspanel.nativeElement, border);
        }
        return {
            top: this._getBorderWidth(this.sspanel.nativeElement, "top"),
            bottom: this._getBorderWidth(this.sspanel.nativeElement, "top"),
            left: this._getBorderWidth(this.sspanel.nativeElement, "top"),
            right: this._getBorderWidth(this.sspanel.nativeElement, "top")
        };
    }
    _getBorderWidth(ele, border) {
        if (border.toLowerCase() === "top")
            border = "Top";
        if (border.toLowerCase() === "left")
            border = "Left";
        if (border.toLowerCase() === "right")
            border = "Right";
        if (border.toLowerCase() === "bottom")
            border = "Bottom";
        let w = ele.style[`border${border}Width`];
        if (!w)
            w = 0;
        return parseInt(w, 10);
    }
    _contentClick(evt) {
        this.panelManager._activePanel(this.id);
    }
    _titlebar_MouseDown(event) {
        if (this.commonService.isMobile())
            return;
        if (this.isDockable())
            return;
        if (this.options.draggable !== true)
            return;
        this.isMouseEvent = false;
        this.panelManager._activePanel(this.id);
        let currentPosition = this._getCurrentPosition();
        let settings = this.options;
        if (!settings.modal) {
            this.sspanelOverlay.nativeElement.style.backgroundColor = "transparent";
            this.sspanelOverlay.nativeElement.style.width = "100%";
            this.sspanelOverlay.nativeElement.style.height = "100%";
        }
        this._addDocumentMouseEventHandlers({
            action: "drag",
            opacity: settings.dragOpacity,
            compensationX: event.pageX - parseFloat(currentPosition.left.toString()),
            compensationY: event.pageY - parseFloat(currentPosition.top.toString())
        });
        event.preventDefault();
        event.stopPropagation();
    }
    _resizer_MouseDown(event, resizeParams) {
        if (this.commonService.isMobile())
            return;
        let currentPosition = this._getCurrentPosition();
        let currentSize = this._getCurrentSize();
        let _data = {
            action: "resize",
            dimension: resizeParams.dimension,
            directionX: resizeParams.directionX,
            directionY: resizeParams.directionY,
            opacity: this.options.resizeOpacity,
            startX: event.pageX + ((resizeParams.directionX == "left") ? parseFloat(currentSize.width) : -parseFloat(currentSize.width)),
            startY: event.pageY + ((resizeParams.directionY == "top") ? parseFloat(currentSize.height) : -parseFloat(currentSize.height)),
            compensationX: event.pageX - parseInt(currentPosition.left.toString(), 10),
            compensationY: event.pageY - parseInt(currentPosition.top.toString(), 10)
        };
        this._addDocumentMouseEventHandlers(_data);
        event.preventDefault();
    }
    _addDocumentMouseEventHandlers(eventData) {
        this.sspanel.nativeElement.style.opacity = eventData.opacity;
        this.sspanel.nativeElement.style.filter = "alpha(opacity=" + eventData.opacity * 100 + ")";
        if (!this.options.mouseMoveEvents) {
            this.tempSavedData = {
                position: this._getCurrentPosition(),
                size: this._getCurrentSize()
            };
        }
        this._eventTempData = eventData;
        document.addEventListener("mousemove", this.xxxx, false);
        document.addEventListener("mouseup", this.yyyy, false);
    }
    _document_MouseMove(event) {
        let settings = this.options;
        let currentPosition = this._getCurrentPosition();
        let currentSize = this._getCurrentSize();
        let newPosition = {};
        let newSize = {};
        event.data = this._eventTempData;
        switch (event.data.action) {
            case "drag":
                newPosition.top = event.pageY - event.data.compensationY;
                newPosition.left = event.pageX - event.data.compensationX;
                if (settings.keepInViewport) {
                    let size = this._getCurrentSize();
                    let $window = this._getWindowSize();
                    if (newPosition.top < 0)
                        newPosition.top = 0;
                    if (newPosition.left < 0)
                        newPosition.left = 0;
                    if (newPosition.top > $window.height() - size.height)
                        newPosition.top = $window.height() - size.height;
                    if (newPosition.left > $window.width() - size.width)
                        newPosition.left = $window.width() - size.width;
                }
                this.isMouseEvent = true;
                break;
            case "resize":
                if (event.data.dimension != "height" && event.pageX > 0) {
                    let newWidth = (event.data.directionX == "left") ? event.data.startX - event.pageX : event.pageX - event.data.startX;
                    if (newWidth >= settings.minWidth && (!settings.maxWidth || newWidth <= settings.maxWidth)) {
                        newSize.width = newWidth;
                        if (event.data.directionX == "left")
                            newPosition.left = event.pageX - event.data.compensationX;
                    }
                }
                if (event.data.dimension != "width" && event.pageY > 0) {
                    let newHeight = (event.data.directionY == "top") ? event.data.startY - event.pageY : event.pageY - event.data.startY;
                    if (newHeight >= settings.minHeight && (!settings.maxHeight || newHeight <= settings.maxHeight)) {
                        newSize.height = newHeight;
                        if (event.data.directionY == "top")
                            newPosition.top = event.pageY - event.data.compensationY;
                    }
                }
                break;
        }
        if ((newPosition.top !== undefined && newPosition.top != currentPosition.top) || (newPosition.left !== undefined && newPosition.left != currentPosition.left)) {
            if (newPosition.top < 0) {
                newPosition.top = 0;
            }
            if (newPosition.left < 0) {
                newPosition.left = 0;
            }
            this._changePosition(newPosition);
            this._setCurrentPosition(newPosition);
            if (settings.mouseMoveEvents) {
                this.onMove();
            }
        }
        if ((newSize.width !== undefined && newSize.width != currentSize.width) || (newSize.height !== undefined && newSize.height != currentSize.height)) {
            if (newSize.height) {
                if (newSize.height <= this.options.minHeight) {
                    newSize.height = this.options.minHeight;
                }
                this._render.setStyle(this.sspanel.nativeElement, "height", this._convertToStyleVal(newSize.height));
            }
            if (newSize.width) {
                if (newSize.width <= this.options.minWidth) {
                    newSize.width = this.options.minWidth;
                }
                this._render.setStyle(this.sspanel.nativeElement, "width", this._convertToStyleVal(newSize.width));
            }
            this._setCurrentSize(newSize);
            if (settings.mouseMoveEvents) {
                this._setIframeStyle();
                this.onResize();
            }
        }
    }
    _document_MouseUp(event) {
        let settings = this.options;
        this.sspanel.nativeElement.style.opacity = 1;
        this.sspanel.nativeElement.style.filter = "alpha(opacity=" + 1 * 100 + ")";
        document.removeEventListener("mousemove", this.xxxx);
        document.removeEventListener("mouseup", this.yyyy);
        if (this.isMouseEvent !== true)
            return;
        if (!settings.modal) {
            this.sspanelOverlay.nativeElement.style.width = "0px";
            this.sspanelOverlay.nativeElement.style.height = "0px";
            this.sspanelOverlay.nativeElement.style.backgoundColor = "";
        }
        if (!settings.mouseMoveEvents) {
            let currentPosition = this._getCurrentPosition();
            let currentSize = this._getCurrentSize();
            let savedData = this.tempSavedData;
            if (savedData.position.top != currentPosition.top || savedData.position.left != currentPosition.left) {
                this.onMove();
            }
            if (savedData.size.width != currentSize.width || savedData.size.height != currentSize.height) {
                this._setIframeStyle();
                this.onResize();
            }
            this.tempSavedData = undefined;
            this._eventTempData = undefined;
        }
    }
    _setIframeStyle() {
    }
    _isDockSide() {
        return false;
    }
    _maximize() {
        if (this.state === WidgetState.closed ||
            this.windowState === WidgetWindowState.maximized ||
            this.windowState === WidgetWindowState.minimized ||
            this.windowState === WidgetWindowState.collapsed) {
            return;
        }
        let settings = this.options;
        let eles = this.sspanel.nativeElement.querySelectorAll(".sspanel_statusbar_handle *, .sspanel_resizer, .sspanel_titlebar_button_collapse");
        eles.forEach((h, idx, arr) => {
            this._render.setStyle(h, "display", "none");
        });
        if (settings.draggable) {
            this._render.removeClass(this.sspanel_titlebar.nativeElement, "sspanel_titlebar_draggable");
        }
        if (!settings.modal) {
            this._render.setStyle(this.sspanelOverlay.nativeElement, "background-color", "transparent");
            this._render.setStyle(this.sspanelOverlay.nativeElement, "width", "100%");
            this._render.setStyle(this.sspanelOverlay.nativeElement, "height", "100%");
        }
        this._saveCurrentPosition();
        this._saveCurrentSize();
        let nposition = {
            top: 0,
            left: 0
        };
        if (this._isDockSide()) {
        }
        let defPosition = this._changePosition(nposition);
        let defSize = this._changeSize({
            width: "100%",
            height: "100%"
        });
        return Promise.all([defPosition, defSize]).then(() => {
            this.windowState = WidgetWindowState.maximized;
            this._setIframeStyle();
            this.onMaximize();
        });
    }
    _unmaximize() {
        if (this.state === WidgetState.closed
            || this.windowState !== WidgetWindowState.maximized)
            return;
        let settings = this.options;
        let defPosition = this._restoreSavedPosition();
        let defSize = this._restoreSavedSize();
        let eles = this.sspanel.nativeElement.querySelectorAll(".sspanel_statusbar_handle *, .sspanel_resizer, .sspanel_titlebar_button_collapse");
        eles.forEach((h, idx, arr) => {
            this._render.setStyle(h, "display", "");
        });
        if (settings.draggable) {
            this._render.addClass(this.sspanel_titlebar.nativeElement, "sspanel_titlebar_draggable");
        }
        if (!settings.modal) {
            this._render.setStyle(this.sspanelOverlay.nativeElement, "background-color", "");
            this._render.setStyle(this.sspanelOverlay.nativeElement, "width", "0");
            this._render.setStyle(this.sspanelOverlay.nativeElement, "height", "0");
        }
        return Promise.all([defPosition, defSize]).then(() => {
            this.windowState = WidgetWindowState.normal;
            this._setIframeStyle();
            this.onNormalize();
        });
    }
    _minimize() {
    }
    _unminimize() {
    }
    _collapse() {
        if (this.started !== true ||
            this.state === WidgetState.closed ||
            this.windowState === WidgetWindowState.maximized ||
            this.windowState === WidgetWindowState.collapsed ||
            this.windowState === WidgetWindowState.minimized)
            return;
        let settings = this.options;
        let eles = this.sspanel.nativeElement.querySelectorAll(".sspanel_content, .sspanel_statusbar, .sspanel_resizer, .sspanel_titlebar_button_maximize, .sspanel_titlebar_button_minimize");
        eles.forEach((h, idx, arr) => {
            this._render.setStyle(h, "display", "none");
        });
        this._saveCurrentSize();
        let defSize = this._changeSize({
            width: settings.collapsedWidth,
            height: this._getBordersWidth("top") + this._getBordersWidth("bottom") + this.sspanel_titlebar.nativeElement.offsetHeight
        });
        return Promise.all([defSize]).then(() => {
            this.windowState = WidgetWindowState.collapsed;
            this.onCollapse();
        });
    }
    _uncollapse() {
        if (this.started != true || this.state === WidgetState.closed || this.windowState !== WidgetWindowState.collapsed)
            return;
        let settings = this.options;
        let defSize = this._restoreSavedSize();
        let eles = this.sspanel.nativeElement.querySelectorAll(".sspanel_content, .sspanel_statusbar, .sspanel_resizer, .sspanel_titlebar_button_maximize, .sspanel_titlebar_button_minimize");
        eles.forEach((h, idx, arr) => {
            this._render.setStyle(h, "display", "");
        });
        return defSize.then(() => {
            this.windowState = WidgetWindowState.normal;
            this.onNormalize();
        });
    }
    _buttonMax_Click(event) {
        if (this.windowState !== WidgetWindowState.maximized) {
            this._maximize();
        }
        else {
            this._unmaximize();
        }
        event.preventDefault();
        event.stopPropagation();
    }
    _buttonCollapse_Click(event) {
        if (this.windowState !== WidgetWindowState.collapsed) {
            this._collapse();
        }
        else {
            this._uncollapse();
        }
        event.preventDefault();
        event.stopPropagation();
    }
    _buttonMin_Click(event) {
        if (this.windowState !== WidgetWindowState.minimized) {
            this._minimize();
        }
        else {
            this._unminimize();
        }
        event.preventDefault();
        event.stopPropagation();
    }
    openWidgetSetting() {
        if (!this.widget) {
            this.widget = this.widgetManager.getWidgetById(this.widgetConfig.id).instance;
        }
        if (!this.widget) {
            return;
        }
        this.widget.instance.openSetting();
    }
}
BasePanelComponent.ɵfac = function BasePanelComponent_Factory(t) { return new (t || BasePanelComponent)(i0.ɵɵdirectiveInject(i0.Renderer2, 8), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef, 8)); };
BasePanelComponent.ɵdir = i0.ɵɵdefineDirective({ type: BasePanelComponent, viewQuery: function BasePanelComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 3, ViewContainerRef);
        i0.ɵɵviewQuery(_c1, 3);
        i0.ɵɵviewQuery(_c2, 3);
        i0.ɵɵviewQuery(_c3, 3);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.widgetContainer = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sspanelOverlay = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sspanel_titlebar = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sspanel = _t.first);
    } }, hostBindings: function BasePanelComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("mouseenter", function BasePanelComponent_mouseenter_HostBindingHandler($event) { return ctx.onMouseEnter($event.target); })("mouseleave", function BasePanelComponent_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, features: [i0.ɵɵInheritDefinitionFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BasePanelComponent, [{
        type: Directive
    }], function () { return [{ type: i0.Renderer2, decorators: [{
                type: Optional
            }] }, { type: i0.ChangeDetectorRef, decorators: [{
                type: Optional
            }] }]; }, { widgetContainer: [{
            type: ViewChild,
            args: ["widget_content", { read: ViewContainerRef, static: true }]
        }], sspanelOverlay: [{
            type: ViewChild,
            args: ["sspanel_overlay", { static: true }]
        }], sspanel_titlebar: [{
            type: ViewChild,
            args: ["sspanel_titlebar", { static: true }]
        }], sspanel: [{
            type: ViewChild,
            args: ["sspanel", { static: true }]
        }], onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter', ['$event.target']]
        }], onMouseLeave: [{
            type: HostListener,
            args: ['mouseleave']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9lcHNnaXMvY29tcG9uZW50cy9iYXNlLXBhbmVsL2Jhc2UtcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBd0IsU0FBUyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBeUIsWUFBWSxFQUFpQyxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0ssT0FBTyxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBa0IsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRixPQUFPLEVBQStCLHFCQUFxQixFQUFFLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2pJLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBQzVCLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUd2RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7OztBQUs1QyxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsVUFBVTtJQXNEaEQsWUFBK0IsT0FBa0IsRUFDMUIsR0FBc0I7UUFFM0MsS0FBSyxFQUFFLENBQUM7UUFIcUIsWUFBTyxHQUFQLE9BQU8sQ0FBVztRQUMxQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQXREdEMsWUFBTyxHQUFpQixtQkFBbUIsQ0FBQztRQWdCekMsb0JBQWUsR0FBa0IsU0FBUyxDQUFDO1FBQzNDLGtCQUFhLEdBQWtCLFNBQVMsQ0FBQztRQUN6QyxnQkFBVyxHQUFnQyxTQUFTLENBQUM7UUFDckQsY0FBUyxHQUFnQyxTQUFTLENBQUM7UUFLbkQsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFJOUIscUJBQWdCLEdBQWtCLFNBQVMsQ0FBQztRQVF0RCxhQUFRLEdBQWtCLGFBQWEsQ0FBQyxJQUFJLENBQUM7UUFLN0MsbUJBQWMsR0FB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LENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUlTLGNBQWM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzFHLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUM7UUFDaEcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUYsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUYsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUYsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEcsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZUFB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IE9uSW5pdCwgQ29tcG9uZW50UmVmLCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYsIE9wdGlvbmFsLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIEhvc3RMaXN0ZW5lciwgQWZ0ZXJWaWV3SW5pdCwgQXBwbGljYXRpb25SZWYsIERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZVdpZGdldENvbXBvbmVudCB9IGZyb20gJy4uL2Jhc2Utd2lkZ2V0L2Jhc2Utd2lkZ2V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXaWRnZXRXaW5kb3dTdGF0ZSwgV2lkZ2V0U3RhdGUsIFdpZGdldFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Jhc2Utd2lkZ2V0JztcbmltcG9ydCB7IFBhbmVsT3B0aW9ucywgUGFuZWxQb3NpdGlvbiwgUGFuZWxJbk1vYmlsZVNob3dNb2RlLCBQYW5lbERvY2tNb2RlLCBEZWZhdWx0UGFuZWxPcHRpb25zIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Jhc2UtcGFuZWwnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgYXNwZWN0IH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXNwZWN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgT25TY3JlZW5XaWRnZXRJY29uQ29tcG9uZW50IH0gZnJvbSAnLi4vb24tc2NyZWVuLXdpZGdldC1pY29uL29uLXNjcmVlbi13aWRnZXQtaWNvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQmFzZVdpZGdldCB9IGZyb20gJy4uL2Jhc2Utd2lkZ2V0Jztcbi8qKlxuICogXG4gKi9cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGNsYXNzIEJhc2VQYW5lbENvbXBvbmVudCBleHRlbmRzIEJhc2VXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBwdWJsaWMgb3B0aW9uczogUGFuZWxPcHRpb25zID0gRGVmYXVsdFBhbmVsT3B0aW9ucztcbiAgd2lkZ2V0OiBDb21wb25lbnRSZWY8QmFzZVdpZGdldENvbXBvbmVudD47XG4gIEBWaWV3Q2hpbGQoXCJ3aWRnZXRfY29udGVudFwiLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYsIHN0YXRpYzogdHJ1ZSB9KSB3aWRnZXRDb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XG4gIC8vIEBWaWV3Q2hpbGQoQ29tcG9uZW50Q29udGFpbmVyRGlyZWN0aXZlLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYsIHN0YXRpYzogdHJ1ZSB9KSB3aWRnZXRDb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgQFZpZXdDaGlsZChcInNzcGFuZWxfb3ZlcmxheVwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBzc3BhbmVsT3ZlcmxheTogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcInNzcGFuZWxfdGl0bGViYXJcIiwgeyBzdGF0aWM6IHRydWUgfSkgc3NwYW5lbF90aXRsZWJhcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcInNzcGFuZWxcIiwgeyBzdGF0aWM6IHRydWUgfSkgc3NwYW5lbDogRWxlbWVudFJlZjtcblxuICAvKipcbiAgICogXG4gICAqL1xuICBwYW5lbENvbnRhaW5lcjogRWxlbWVudDtcbiAgLyoqXG4gICAqIOW9k+WJjeS9jee9rlxuICAgKi9cbiAgcHJvdGVjdGVkIGN1cnJlbnRQb3NpdGlvbjogUGFuZWxQb3NpdGlvbiA9IHVuZGVmaW5lZDtcbiAgcHJvdGVjdGVkIHNhdmVkUG9zaXRpb246IFBhbmVsUG9zaXRpb24gPSB1bmRlZmluZWQ7XG4gIHByb3RlY3RlZCBjdXJyZW50U2l6ZTogeyB3aWR0aDogYW55LCBoZWlnaHQ6IGFueSB9ID0gdW5kZWZpbmVkO1xuICBwcm90ZWN0ZWQgc2F2ZWRTaXplOiB7IHdpZHRoOiBhbnksIGhlaWdodDogYW55IH0gPSB1bmRlZmluZWQ7XG4gIHByb3RlY3RlZCB0ZW1wU2F2ZWREYXRhOiBhbnk7XG4gIC8vIHByaXZhdGUgbWF4aW1pemVkOiBib29sZWFuID0gZmFsc2U7XG4gIC8vIHByaXZhdGUgY29sbGFwc2VkOiBib29sZWFuID0gZmFsc2U7XG4gIC8vIHByaXZhdGUgbWluaW1pemVkOiBib29sZWFuID0gZmFsc2U7XG4gIHByb3RlY3RlZCBpc01vdXNlRXZlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLyoqXG4gICAqIOWOn+Wni+S9jee9ruWkp+Wwj1xuICAgKi9cbiAgcHJvdGVjdGVkIG9yaWdpbmFsUG9zaXRpb246IFBhbmVsUG9zaXRpb24gPSB1bmRlZmluZWQ7XG4gIC8qKlxuICAgKiDmi4nliqjlpKflsI/ml7bnmoTlj4LmlbBcbiAgICovXG4gIC8vcHJpdmF0ZSByZXNpemVQYXJhbXM6e2RpbWVuc2lvbj86c3RyaW5nLGRpcmVjdGlvblg/OnN0cmluZyxkaXJlY3Rpb25ZPzpzdHJpbmd9PXVuZGVmaW5lZDtcbiAgLyoqXG4gICAqIOWBnOmdoOaWueW8j1xuICAgKi9cbiAgZG9ja01vZGU6IFBhbmVsRG9ja01vZGUgPSBQYW5lbERvY2tNb2RlLm5vbmU7XG4gIC8vLy8vLy8vLy8vLy8v56e75Yqo56uvXG4gIC8qKlxuICAgKiDlvZPliY3mmK/lkKbov5DooYzlnKjnp7vliqjnq69cbiAgICovXG4gIF9pc1J1bkluTW9iaWxlOiBib29sZWFuID0gZmFsc2U7XG4gIC8qKlxuICAgKiDnp7vliqjnq6/lsZXnpLrmlrnlvI8g6buY6K6kYWN0aW9uXG4gICAqL1xuICBfbW9iaWxlU2hvd01vZGU6IFBhbmVsSW5Nb2JpbGVTaG93TW9kZSA9IFBhbmVsSW5Nb2JpbGVTaG93TW9kZS5hY3Rpb247XG5cbiAgLy8vLy8vLy8vLy8vL1xuICBwYW5lbEljb246IE9uU2NyZWVuV2lkZ2V0SWNvbkNvbXBvbmVudDtcbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0gX3JlbmRlciBcbiAgICovXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHB1YmxpYyBfcmVuZGVyOiBSZW5kZXJlcjJcbiAgICAsIEBPcHRpb25hbCgpIHB1YmxpYyBjZHI6IENoYW5nZURldGVjdG9yUmVmXG4gICAgLypwdWJsaWMgYXBwUmVmOiBBcHBsaWNhdGlvblJlZiovKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuICAvKipcbiAgICogXG4gICAqL1xuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9pc1J1bkluTW9iaWxlID0gdGhpcy5jb21tb25TZXJ2aWNlLmlzTW9iaWxlTm90VGFibGV0KCk7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5tb2RhbCA9PT0gdHJ1ZSkge1xuICAgICAgaWYgKHRoaXMuc3NwYW5lbE92ZXJsYXkpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyLnNldFN0eWxlKHRoaXMuc3NwYW5lbE92ZXJsYXkubmF0aXZlRWxlbWVudCwgXCJwb2ludGVyLWV2ZW50c1wiLCBcImF1dG9cIik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnNzcGFuZWxPdmVybGF5KSB7XG4gICAgICAgIHRoaXMuX3JlbmRlci5zZXRTdHlsZSh0aGlzLnNzcGFuZWxPdmVybGF5Lm5hdGl2ZUVsZW1lbnQsIFwiYmFja2dyb3VuZC1jb2xvclwiLCBcInRyYW5zcGFyZW50XCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pc1J1bkluTW9iaWxlKSB7XG4gICAgICBpZiAodGhpcy5fbW9iaWxlU2hvd01vZGUgPT09IFBhbmVsSW5Nb2JpbGVTaG93TW9kZS5kcmF3ZXJcbiAgICAgICAgfHwgdGhpcy5fbW9iaWxlU2hvd01vZGUgPT09IFBhbmVsSW5Nb2JpbGVTaG93TW9kZS5kcmF3ZXJSaWdodCkge1xuICAgICAgICB0aGlzLl9yZW5kZXIuc2V0U3R5bGUodGhpcy5zc3BhbmVsT3ZlcmxheS5uYXRpdmVFbGVtZW50LCBcInBvaW50ZXItZXZlbnRzXCIsIFwiYXV0b1wiKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyLnNldFN0eWxlKHRoaXMuc3NwYW5lbE92ZXJsYXkubmF0aXZlRWxlbWVudCwgXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwiIzAwMDAwMDgwXCIpO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vRWxlbWVudFJlZiBvayDov5nnp43mlrnlvI/kuI3og73oh6rliqjosIPnlKjpkqnlrZDlh73mlbDvvIjlpoJuZ09uSWl077yJXG4gICAgICAgIC8vIGNvbnN0IGVsZSA9ICh0aGlzLndpZGdldC5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55Pikucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAvLyB0aGlzLndpZGdldENvbnRhaW5lcltcImVsZW1lbnRSZWZcIl0ubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGVsZSk7XG4gICAgICAgIC8vRWxlbWVudFJlZiBpbnNlcnQgaXMgbm90IGEgZnVuY3Rpb25cbiAgICAgICAgLy8gdGhpcy53aWRnZXRDb250YWluZXIuaW5zZXJ0KHRoaXMud2lkZ2V0Lmhvc3RWaWV3KTtcblxuICAgICAgICAvLyBpZiAodGhpcy5vcHRpb25zLm1vZGFsICE9PSB0cnVlKSB7XG4gICAgICAgIC8vICAgdGhpcy5fcmVuZGVyLnNldFN0eWxlKHRoaXMuc3NwYW5lbE92ZXJsYXkubmF0aXZlRWxlbWVudCwgXCJ3aWR0aFwiLCAwKTtcbiAgICAgICAgLy8gICB0aGlzLl9yZW5kZXIuc2V0U3R5bGUodGhpcy5zc3BhbmVsT3ZlcmxheS5uYXRpdmVFbGVtZW50LCBcImhlaWdodFwiLCAwKTtcbiAgICAgICAgLy8gfVxuICAgICAgICB0aGlzLnh4eHggPSB0aGlzLl9kb2N1bWVudF9Nb3VzZU1vdmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy55eXl5ID0gdGhpcy5fZG9jdW1lbnRfTW91c2VVcC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coYG9wZW4gcGFuZWxbJHt0aGlzLndpZGdldC5pbnN0YW5jZS51cml9XSBlcnJvcmApO1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgfVxuICAvKipcbiAgICogXG4gICAqL1xuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xuICAgIGlmICh0aGlzLndpZGdldCkge1xuICAgICAgdGhpcy53aWRnZXRNYW5hZ2VyLmRlc3Ryb3lXaWRnZXQodGhpcy53aWRnZXQpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogXG4gICAqL1xuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgLy/pnIDlvILmraXmiafooYzvvIzlkKbliJnmo4DmtYvkvJrmiqXplJlFcnJvcjogRXhwcmVzc2lvbkNoYW5nZWRBZnRlckl0SGFzQmVlbkNoZWNrZWRFcnJvcjogRXhwcmVzc2lvbiBoYXMgY2hhbmdlZCBhZnRlciBpdCB3YXMgY2hlY2tlZC4uLlxuICAgIFByb21pc2UucmVzb2x2ZShudWxsKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuc3RhcnR1cCgpO1xuICAgICAgdGhpcy5zdGF0ZSA9IFdpZGdldFN0YXRlLm9wZW5lZDtcbiAgICAgIHRoaXMubG9hZEFsbFdpZGdldHNJbk9yZGVyKCk7XG4gICAgICB0aGlzLm9uT3BlbigpO1xuICAgICAgaWYgKHRoaXMuY2RyICYmIHRoaXMuY2RyW1wiZGVzdHJveWVkXCJdID09PSBmYWxzZSkge1xuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9XG4gICAgICBzdXBlci5hZnRlck5nQWZ0ZXJWaWV3SW5pdCgpO1xuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIHBvc2l0aW9uQ29uZmlnIFxuICAgKi9cbiAgc2V0UG9zaXRpb24ocG9zaXRpb25Db25maWc6IGFueSkge1xuICAgIGlmICghdGhpcy53aWRnZXRDb25maWcucG9zaXRpb24ud2lkdGgpIHtcbiAgICAgIHRoaXMud2lkZ2V0Q29uZmlnLnBvc2l0aW9uLndpZHRoID0gdGhpcy5vcHRpb25zLndpZHRoO1xuICAgIH1cbiAgICBpZiAoIXRoaXMud2lkZ2V0Q29uZmlnLnBvc2l0aW9uLmhlaWdodCkge1xuICAgICAgdGhpcy53aWRnZXRDb25maWcucG9zaXRpb24uaGVpZ2h0ID0gdGhpcy5vcHRpb25zLmhlaWdodDtcbiAgICB9XG4gICAgLy/liKTmlq3kuIvpq5jlrr3mmK/lkKblsI/kuo7kuobmnIDlsI/nmoTpq5jlrr3vvIzop6PlhrPlj5jmiJDkuIDmnaHnur/pl67pophcbiAgICBsZXQgdyA9IHRoaXMuY29tbW9uU2VydmljZS5nZXRQeE51bWJlcih0aGlzLndpZGdldENvbmZpZy5wb3NpdGlvbi53aWR0aCk7XG4gICAgbGV0IGggPSB0aGlzLmNvbW1vblNlcnZpY2UuZ2V0UHhOdW1iZXIodGhpcy53aWRnZXRDb25maWcucG9zaXRpb24uaGVpZ2h0KTtcbiAgICBpZiAodHlwZW9mIHcgPT09IFwibnVtYmVyXCIgJiYgdyA8IHRoaXMub3B0aW9ucy5taW5XaWR0aCkge1xuICAgICAgdGhpcy53aWRnZXRDb25maWcucG9zaXRpb24ud2lkdGggPSB0aGlzLm9wdGlvbnMubWluV2lkdGg7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgaCA9PT0gXCJudW1iZXJcIiAmJiBoIDwgdGhpcy5vcHRpb25zLm1pbldpZHRoKSB7XG4gICAgICB0aGlzLndpZGdldENvbmZpZy5wb3NpdGlvbi5oZWlnaHQgPSB0aGlzLm9wdGlvbnMubWluSGVpZ2h0O1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbW1vblNlcnZpY2UuaXNNb2JpbGVOb3RUYWJsZXQoKSkge1xuICAgICAgdGhpcy5fc2V0TW9iaWxlUG9zaXRpb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2V0UENQb3NpdGlvbigpO1xuICAgIH1cbiAgICBzdXBlci5zZXRQb3NpdGlvbih0aGlzLndpZGdldENvbmZpZy5wb3NpdGlvbik7XG4gIH1cbiAgLyoqXG4gICAqIFxuICAgKi9cbiAgcHJvdGVjdGVkIF9zZXRQQ1Bvc2l0aW9uKCkge1xuICAgIHRoaXMuY3VycmVudFNpemUgPSB7IHdpZHRoOiB0aGlzLndpZGdldENvbmZpZy5wb3NpdGlvbi53aWR0aCwgaGVpZ2h0OiB0aGlzLndpZGdldENvbmZpZy5wb3NpdGlvbi5oZWlnaHQgfTtcbiAgICB0aGlzLmN1cnJlbnRQb3NpdGlvbiA9IHsgbGVmdDogdW5kZWZpbmVkLCB0b3A6IHVuZGVmaW5lZCwgd2lkdGg6IHVuZGVmaW5lZCwgaGVpZ2h0OiB1bmRlZmluZWQgfTtcbiAgICB0aGlzLmN1cnJlbnRQb3NpdGlvbi5sZWZ0ID0gdGhpcy5jb21tb25TZXJ2aWNlLmdldFB4TnVtYmVyKHRoaXMud2lkZ2V0Q29uZmlnLnBvc2l0aW9uLmxlZnQpO1xuICAgIHRoaXMuY3VycmVudFBvc2l0aW9uLnRvcCA9IHRoaXMuY29tbW9uU2VydmljZS5nZXRQeE51bWJlcih0aGlzLndpZGdldENvbmZpZy5wb3NpdGlvbi50b3ApO1xuICAgIHRoaXMuY3VycmVudFBvc2l0aW9uLndpZHRoID0gdGhpcy5jb21tb25TZXJ2aWNlLmdldFB4TnVtYmVyKHRoaXMud2lkZ2V0Q29uZmlnLnBvc2l0aW9uLndpZHRoKTtcbiAgICB0aGlzLmN1cnJlbnRQb3NpdGlvbi5oZWlnaHQgPSB0aGlzLmNvbW1vblNlcnZpY2UuZ2V0UHhOdW1iZXIodGhpcy53aWRnZXRDb25maWcucG9zaXRpb24uaGVpZ2h0KTtcbiAgICB0aGlzLnNhdmVkUG9zaXRpb24gPSBfLmNsb25lRGVlcCh0aGlzLmN1cnJlbnRQb3NpdGlvbik7XG4gICAgdGhpcy5vcmlnaW5hbFBvc2l0aW9uID0gXy5jbG9uZURlZXAodGhpcy5jdXJyZW50UG9zaXRpb24pO1xuICB9XG4gIC8qKlxuICAqIOWtkOexu+e7p+aJv+WunueOsFxuICAqL1xuICBwcm90ZWN0ZWQgX3NldE1vYmlsZVBvc2l0aW9uKCkge1xuXG4gIH1cbiAgcHJpdmF0ZSBsb2FkQWxsV2lkZ2V0c0luT3JkZXIoKSB7XG4gICAgLy/lpJrkuKpcbiAgICAvLyBjb25zdCBjb25maWdzID0gdGhpcy5nZXRBbGxXaWRnZXRDb25maWdzKCk7XG4gICAgLy8gaWYgKF8uaXNBcnJheSh0aGlzLmNvbmZpZy53aWRnZXRzKSkge1xuICAgIC8vICAgY29uZmlncyA9IHRoaXMuY29uZmlnLndpZGdldHM7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIGNvbmZpZ3MgPSBbdGhpcy53aWRnZXRDb25maWddO1xuICAgIC8vIH1cbiAgICBjb25zdCBjb25maWdzID0gW3RoaXMud2lkZ2V0Q29uZmlnXTtcbiAgICBfLmZvckVhY2goY29uZmlncywgKHdDb25maWcpID0+IHtcbiAgICAgIGlmICh3Q29uZmlnLnZpc2libGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8v5Yqo55S7XG4gICAgICAvL+WKoOi9vee7hOS7tlxuICAgICAgdGhpcy53aWRnZXRNYW5hZ2VyLmxvYWRXaWRnZXQod0NvbmZpZykudGhlbigod2lkZ2V0KSA9PiB7XG4gICAgICAgIHRoaXMud2lkZ2V0ID0gd2lkZ2V0O1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNob3dUaXRsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICB0aGlzLndpZGdldC5pbnN0YW5jZS5zaG93U2V0dGluZ1doZW5JblBhbmVsID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLndpZGdldC5pbnN0YW5jZS5yZXFQYXJhID0gdGhpcy5yZXFQYXJhO1xuICAgICAgICAvL1ZpZXdDb250YWluZXJSZWYgaW5zZXJ0ICDov5nnp43mlrnlvI/lj6/oh6rliqjosIPnlKjpkqnlrZDlh73mlbBcbiAgICAgICAgdGhpcy53aWRnZXRDb250YWluZXIuaW5zZXJ0KHRoaXMud2lkZ2V0Lmhvc3RWaWV3KTtcbiAgICAgICAgLy8gdGhpcy5hcHBSZWYuYXR0YWNoVmlldyh0aGlzLndpZGdldC5ob3N0Vmlldyk7Ly/lt7Lnu4/liqDlhaXkuoZcbiAgICAgICAgLy9uZ0FmdGVyVmlld0luaXRcbiAgICAgICAgYXNwZWN0LmFmdGVyKHRoaXMud2lkZ2V0Lmluc3RhbmNlLCBcImFmdGVyTmdBZnRlclZpZXdJbml0XCIsICgpID0+IHtcbiAgICAgICAgICB0aGlzLndpZGdldC5pbnN0YW5jZS5zdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLndpZGdldC5pbnN0YW5jZS5zdGF0ZSA9IFdpZGdldFN0YXRlLm9wZW5lZDtcbiAgICAgICAgICB0aGlzLndpZGdldC5pbnN0YW5jZS53aW5kb3dTdGF0ZSA9IFdpZGdldFdpbmRvd1N0YXRlLm5vcm1hbDtcbiAgICAgICAgICB0aGlzLndpZGdldC5pbnN0YW5jZS5zdGFydHVwKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldEFsbFdpZGdldENvbmZpZ3MoKSB7XG4gICAgbGV0IGNvbmZpZ3MgPSBbXTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLmNvbmZpZy53aWRnZXRzKSkge1xuICAgICAgY29uZmlncyA9IHRoaXMuY29uZmlnLndpZGdldHM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbmZpZ3MgPSBbdGhpcy53aWRnZXRDb25maWddO1xuICAgIH1cbiAgICByZXR1cm4gY29uZmlncztcbiAgfVxuICAvKipcbiAgICog5piv5ZCm5YGc6Z2g55qEcGFuZWxcbiAgICovXG4gIGlzRG9ja2FibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZG9ja01vZGUgPT09IFBhbmVsRG9ja01vZGUubGVmdCB8fFxuICAgICAgdGhpcy5kb2NrTW9kZSA9PT0gUGFuZWxEb2NrTW9kZS5ib3R0b20gfHxcbiAgICAgIHRoaXMuZG9ja01vZGUgPT09IFBhbmVsRG9ja01vZGUucmlnaHQ7XG4gIH1cblxuICBzdGFydHVwKCkge1xuICAgIC8vIHRoaXMucGFuZWxDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5zc3BhbmVsT3ZlcmxheS5uYXRpdmVFbGVtZW50KTsgLy/ov5nnp43mlrnlvI/mnInpl67pophcbiAgICB0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xuICB9XG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIHdpZGdldCBcbiAgICovXG4gIHNldFdpZGdldCh3aWRnZXQ6IENvbXBvbmVudFJlZjxCYXNlV2lkZ2V0Q29tcG9uZW50Pikge1xuICAgIHRoaXMud2lkZ2V0ID0gd2lkZ2V0O1xuICAgIGlmICh0aGlzLm9wdGlvbnMuc2hvd1RpdGxlID09PSBmYWxzZSkge1xuICAgICAgdGhpcy53aWRnZXQuaW5zdGFuY2Uuc2hvd1NldHRpbmdXaGVuSW5QYW5lbCA9IHRydWU7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiDorr7nva5wYW5lbOWPguaVsFxuICAgKiBAcGFyYW0gb3B0aW9ucyBcbiAgICovXG4gIHNldE9wdGlvbnMob3B0aW9uczogUGFuZWxPcHRpb25zKSB7XG4gICAgaWYgKHRoaXMud2lkZ2V0Q29uZmlnICYmIHRoaXMud2lkZ2V0Q29uZmlnLnBhbmVsKSB7XG4gICAgICBfLm1lcmdlKG9wdGlvbnMsIHRoaXMud2lkZ2V0Q29uZmlnLnBhbmVsKTtcbiAgICB9XG4gICAgdGhpcy5vcHRpb25zID0gXy5tZXJnZShfLmNsb25lRGVlcChEZWZhdWx0UGFuZWxPcHRpb25zKSwgb3B0aW9ucyk7XG4gICAgdGhpcy5vcHRpb25zLmJ1dHRvblNldHRpbmcgPSB0aGlzLmlzU2V0dGluZ01vZGU7XG4gIH1cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0gc3RhdGUgXG4gICAqL1xuICBzZXRXaW5kb3dTdGF0ZShzdGF0ZTogV2lkZ2V0V2luZG93U3RhdGUpIHtcbiAgICB0aGlzLndpbmRvd1N0YXRlID0gc3RhdGU7XG4gIH1cbiAgc2V0U3RhdGUoc3RhdGU6IFdpZGdldFN0YXRlKSB7XG4gICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgY2FzZSBXaWRnZXRTdGF0ZS5vcGVuZWQ6XG4gICAgICAgIHRoaXMuc2hvd1BhbmVsKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBXaWRnZXRTdGF0ZS5jbG9zZWQ6XG4gICAgICAgIHRoaXMuaGlkZVBhbmVsKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBXaWRnZXRTdGF0ZS5hY3RpdmU6XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICBpZiAodGhpcy53aWRnZXQpIHtcbiAgICAgIHRoaXMud2lkZ2V0Lmluc3RhbmNlLnNldFN0YXRlKHN0YXRlKTtcbiAgICB9XG4gIH1cbiAgcHJvdGVjdGVkIHNob3dQYW5lbCgpIHtcbiAgICB0aGlzLnNzcGFuZWxPdmVybGF5Lm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgaWYgKHRoaXMud2lkZ2V0KSB7XG4gICAgICAvL3VuZGVmaW5lZD9cbiAgICAgIHRoaXMuY29tbW9uU2VydmljZS5nZXRDb21wb25lbnRSb290Tm9kZSh0aGlzLndpZGdldCkuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgIH1cbiAgICB0aGlzLm9uT3BlbigpO1xuICAgIHRoaXMuc3RhdGUgPSBXaWRnZXRTdGF0ZS5vcGVuZWQ7XG4gIH1cbiAgcHJvdGVjdGVkIGhpZGVQYW5lbCgpIHtcbiAgICAvL3RoaXMud2lkZ2V0Lmhvc3RWaWV3LnJvb3ROb2Rlc1swXS5wYXJlbnRFbGVtZW50LnBhcmVudE5vZGUucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnN0eWxlLmRpc3BsYXk9J25vbmUnXG4gICAgdGhpcy5zc3BhbmVsT3ZlcmxheS5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBpZiAodGhpcy53aWRnZXQpIHtcbiAgICAgIC8vdW5kZWZpbmVkP1xuICAgICAgdGhpcy5jb21tb25TZXJ2aWNlLmdldENvbXBvbmVudFJvb3ROb2RlKHRoaXMud2lkZ2V0KS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgICB0aGlzLm9uQ2xvc2UoKTtcbiAgICAvL+iuvue9rueKtuaAgVxuICAgIHRoaXMuc3RhdGUgPSBXaWRnZXRTdGF0ZS5jbG9zZWQ7XG4gIH1cbiAgLyoqXG4gICAqIOWFs+mXrXBhbmVsXG4gICAqIEBwYXJhbSBldmVudCBcbiAgICovXG4gIGNsb3NlUGFuZWwoZXZlbnQpIHtcbiAgICB0aGlzLnBhbmVsTWFuYWdlci5jbG9zZVBhbmVsKHRoaXMuaWQpO1xuICAgIC8vIHRoaXMuc2V0U3RhdGUoV2lkZ2V0U3RhdGUuY2xvc2VkKTtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH1cbiAgb25Ob3JtYWxpemUoKSB7XG4gICAgaWYgKHRoaXMud2lkZ2V0KSB7XG4gICAgICB0aGlzLndpZGdldC5pbnN0YW5jZS5vbk5vcm1hbGl6ZSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uTWluaW1pemUoKSB7XG4gICAgaWYgKHRoaXMud2lkZ2V0KSB7XG4gICAgICB0aGlzLndpZGdldC5pbnN0YW5jZS5vbk1pbmltaXplKCk7XG4gICAgfVxuICB9XG4gIG9uTWF4aW1pemUoKSB7XG4gICAgaWYgKHRoaXMud2lkZ2V0KSB7XG4gICAgICB0aGlzLndpZGdldC5pbnN0YW5jZS5vbk1heGltaXplKCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIHBvc2l0aW9uIFxuICAgKi9cbiAgcmVzaXplKHBvc2l0aW9uPzogYW55KSB7XG4gICAgaWYgKHBvc2l0aW9uKSB7XG4gICAgICBpZiAocG9zaXRpb24ubGVmdCA8IDApIHtcbiAgICAgICAgcG9zaXRpb24ubGVmdCA9IDA7XG4gICAgICB9XG4gICAgICBpZiAocG9zaXRpb24udG9wIDwgMCkge1xuICAgICAgICBwb3NpdGlvbi50b3AgPSAwO1xuICAgICAgfVxuICAgICAgaWYgKHBvc2l0aW9uLndpZHRoIDwgdGhpcy5vcHRpb25zLm1pbldpZHRoKSB7XG4gICAgICAgIHBvc2l0aW9uLndpZHRoID0gdGhpcy5vcHRpb25zLm1pbldpZHRoO1xuICAgICAgfVxuICAgICAgaWYgKHBvc2l0aW9uLmhlaWdodCA8IHRoaXMub3B0aW9ucy5taW5IZWlnaHQpIHtcbiAgICAgICAgcG9zaXRpb24uaGVpZ2h0ID0gdGhpcy5vcHRpb25zLm1pbkhlaWdodDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3JlbmRlci5zZXRTdHlsZSh0aGlzLnNzcGFuZWwubmF0aXZlRWxlbWVudCwgXCJsZWZ0XCIsIHRoaXMuX2NvbnZlcnRUb1N0eWxlVmFsKHBvc2l0aW9uLmxlZnQpKTtcbiAgICAgIHRoaXMuX3JlbmRlci5zZXRTdHlsZSh0aGlzLnNzcGFuZWwubmF0aXZlRWxlbWVudCwgXCJ0b3BcIiwgdGhpcy5fY29udmVydFRvU3R5bGVWYWwocG9zaXRpb24udG9wKSk7XG4gICAgICB0aGlzLl9yZW5kZXIuc2V0U3R5bGUodGhpcy5zc3BhbmVsLm5hdGl2ZUVsZW1lbnQsIFwid2lkdGhcIiwgdGhpcy5fY29udmVydFRvU3R5bGVWYWwocG9zaXRpb24ud2lkdGgpKTtcbiAgICAgIHRoaXMuX3JlbmRlci5zZXRTdHlsZSh0aGlzLnNzcGFuZWwubmF0aXZlRWxlbWVudCwgXCJoZWlnaHRcIiwgdGhpcy5fY29udmVydFRvU3R5bGVWYWwocG9zaXRpb24uaGVpZ2h0KSk7XG4gICAgICB0aGlzLndpZGdldENvbmZpZy5wb3NpdGlvbiA9IF8ubWVyZ2UodGhpcy53aWRnZXRDb25maWcucG9zaXRpb24sIHBvc2l0aW9uKTtcbiAgICAgIHRoaXMuc2V0UG9zaXRpb24ocG9zaXRpb24pO1xuICAgIH1cbiAgfVxuICBvblJlc2l6ZSgpIHtcbiAgICBpZiAodGhpcy53aWRnZXQpIHtcbiAgICAgIHRoaXMud2lkZ2V0Lmluc3RhbmNlLnJlc2l6ZSgpO1xuICAgIH1cbiAgfVxuICBvbkFjdGl2ZSgpIHtcbiAgfVxuXG4gIG9uRGVBY3RpdmUoKSB7XG4gIH1cbiAgb25Db2xsYXBzZSgpIHtcbiAgfVxuICBvbkV4cGFuZCgpIHtcbiAgfVxuICBvbk1vdmUoKSB7XG4gIH1cbiAgb25Qb3NpdGlvbkNoYW5nZShwb3NpdGlvbikge1xuICAgIHRoaXMuc2V0UG9zaXRpb24ocG9zaXRpb24pO1xuICB9XG4gIG9uT3BlbigpIHtcbiAgICBpZiAodGhpcy53aWRnZXQgJiYgdGhpcy53aWRnZXQuaW5zdGFuY2Uuc3RhcnRlZCkge1xuICAgICAgdGhpcy53aWRnZXQuaW5zdGFuY2Uub25PcGVuKCk7XG4gICAgfVxuICB9XG4gIG9uQ2xvc2UoKSB7XG4gICAgLy/lhbPpl613aWRnZXRcbiAgICBpZiAodGhpcy53aWRnZXQpIHtcbiAgICAgIHRoaXMud2lkZ2V0TWFuYWdlci5jbG9zZVdpZGdldCh0aGlzLndpZGdldCk7XG4gICAgfVxuICAgIC8vIGlmICh0aGlzLndpZGdldCkge1xuICAgIC8vICAgdGhpcy53aWRnZXQuaW5zdGFuY2Uub25DbG9zZSgpO1xuICAgIC8vIH1cbiAgfVxuICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJywgWyckZXZlbnQudGFyZ2V0J10pXG4gIG9uTW91c2VFbnRlcih0YXJnZXQpIHtcbiAgICBpZiAodGhpcy5tb3ZlVG9wT25BY3RpdmUpIHtcbiAgICAgIHRoaXMucGFuZWxNYW5hZ2VyLl9hY3RpdmVQYW5lbCh0aGlzLmlkKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJylcbiAgb25Nb3VzZUxlYXZlKCkge1xuXG4gIH1cbiAgLyoqXG4gICAqIFxuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKi9cbiAgLyoqXG4gICAqIOiOt+WPluW9k+WJjeS9jee9rlxuICAgKi9cbiAgcHJpdmF0ZSBfZ2V0Q3VycmVudFBvc2l0aW9uKCkge1xuXG4gICAgbGV0IF9wb3NpdGlvbiA9IHRoaXMuY3VycmVudFBvc2l0aW9uO1xuICAgIGlmIChfcG9zaXRpb24udG9wID09PSBcImF1dG9cIikge1xuICAgICAgX3Bvc2l0aW9uLnRvcCA9IHRoaXMucG9zaXRpb24udG9wO1xuICAgIH1cbiAgICBpZiAoX3Bvc2l0aW9uLmxlZnQgPT09IFwiYXV0b1wiIHx8IF9wb3NpdGlvbi5sZWZ0ID09PSAwKSB7XG4gICAgICAvL+ino+WGs+WcqOayoeaciWxlZnTlsZ7mgKfml7bvvIznrKzkuIDmrKHmi5bliqjkvJrot5HliLDlt6bovrnnmoTpl67pophcbiAgICAgIGNvbnN0IF9wYW5lbEJvdW5kcyA9IHRoaXMuY29tbW9uU2VydmljZS5nZXRFbGVtZW50Qm91bmRzKHRoaXMuc3NwYW5lbC5uYXRpdmVFbGVtZW50KTtcbiAgICAgIGNvbnN0IF9pc0luTWFwOiBib29sZWFuID0gdGhpcy53aWRnZXRDb25maWcucG9zaXRpb24ucmVsYXRpdmVUbyAhPT0gXCJicm93c2VyXCI7XG4gICAgICBsZXQgX2NvbnRhaW5lckJvdW5kczogQ2xpZW50UmVjdCB8IERPTVJlY3Q7XG4gICAgICBpZiAoX2lzSW5NYXApIHtcbiAgICAgICAgY29uc3QgX2VsZSA9IHRoaXMuY29tbW9uU2VydmljZS5nZXRDb21wb25lbnRSb290Tm9kZSh0aGlzLm1hcE1hbmFnZXIuY29tUmVmTWFwKTtcbiAgICAgICAgaWYgKF9lbGUpIHtcbiAgICAgICAgICBfY29udGFpbmVyQm91bmRzID0gdGhpcy5jb21tb25TZXJ2aWNlLmdldEVsZW1lbnRCb3VuZHMoX2VsZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8v5bqU6I635Y+W5aSW5bGC5a655Zmo77yIZXBzZ2lzLWNvbXAtY29udGFpbmVy77yJ55qE6auY5a69XG4gICAgICAgIF9jb250YWluZXJCb3VuZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZXBzZ2lzLWNvbXAtY29udGFpbmVyXCIpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgfVxuICAgICAgaWYgKF9jb250YWluZXJCb3VuZHMpIHtcbiAgICAgICAgLy/lh4/ljrvlrrnlmajnmoRsZWZ0XG4gICAgICAgIF9wb3NpdGlvbi5sZWZ0ID0gX3BhbmVsQm91bmRzLmxlZnQgLSBfY29udGFpbmVyQm91bmRzLmxlZnQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBfLm1lcmdlKHt9LCBfcG9zaXRpb24pO1xuICB9XG4gIC8qKlxuICAgKiDorr7nva7kvY3nva5cbiAgICogQHBhcmFtIHBvc2l0aW9uIFxuICAgKi9cbiAgcHJpdmF0ZSBfc2V0Q3VycmVudFBvc2l0aW9uKHBvc2l0aW9uOiBQYW5lbFBvc2l0aW9uKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJPYmplY3QuYXNzaWduOlwiKVxuICAgIC8vIGNvbnNvbGUubG9nKE9iamVjdC5hc3NpZ24oeyBhOiAxLCBiOiAyIH0sIHsgYTogMiwgYjogdW5kZWZpbmVkIH0pKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcIl8uZXh0ZW5kOlwiKVxuICAgIC8vIGNvbnNvbGUubG9nKF8uZXh0ZW5kKHsgYTogMSwgYjogMiB9LCB7IGE6IDIsIGI6IHVuZGVmaW5lZCB9KSk7XG4gICAgLy8gY29uc29sZS5sb2coXCJfLm1lcmdlOlwiKVxuICAgIC8vIGNvbnNvbGUubG9nKF8ubWVyZ2UoeyBhOiAxLCBiOiAyIH0sIHsgYTogMiwgYjogdW5kZWZpbmVkIH0pKTtcbiAgICB0aGlzLmN1cnJlbnRQb3NpdGlvbiA9IF8ubWVyZ2UodGhpcy5jdXJyZW50UG9zaXRpb24sIHBvc2l0aW9uKTtcbiAgfVxuICBwcml2YXRlIF9zYXZlQ3VycmVudFBvc2l0aW9uKCkge1xuICAgIHRoaXMuc2F2ZWRQb3NpdGlvbiA9IHRoaXMuX2dldEN1cnJlbnRQb3NpdGlvbigpO1xuICB9XG4gIHByaXZhdGUgX3Jlc3RvcmVTYXZlZFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9jaGFuZ2VQb3NpdGlvbih0aGlzLnNhdmVkUG9zaXRpb24pO1xuICB9XG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIHBhcmFtcyBcbiAgICovXG4gIHByaXZhdGUgX2NoYW5nZVBvc2l0aW9uKHBhcmFtczogV2lkZ2V0UG9zaXRpb24gfCBhbnkpIHtcbiAgICBsZXQgZGVmUmV0ID0gdGhpcy5jb21tb25TZXJ2aWNlLmNyZWF0ZVByb21pc2VEZWZlcigpO1xuICAgIGxldCBzZXR0aW5ncyA9IHRoaXMub3B0aW9ucztcbiAgICBsZXQgYW5pbWF0aW9uVGltZSA9IChwYXJhbXMuYW5pbWF0aW9uVGltZSAhPT0gdW5kZWZpbmVkKSA/IHBhcnNlSW50KHBhcmFtcy5hbmltYXRpb25UaW1lKSA6IHNldHRpbmdzLmFuaW1hdGlvblRpbWU7XG4gICAgbGV0IG5ld1Bvc2l0aW9uID0ge1xuICAgICAgdG9wOiBwYXJhbXMudG9wLFxuICAgICAgbGVmdDogcGFyYW1zLmxlZnQsXG4gICAgICBib3R0b206IHBhcmFtcy5ib3R0b20sXG4gICAgICByaWdodDogcGFyYW1zLnJpZ2h0XG4gICAgfTtcbiAgICBpZiAocGFyYW1zLmNoZWNrKSB7XG4gICAgICBpZiAoISh0aGlzLnN0YXRlID09PSBXaWRnZXRTdGF0ZS5vcGVuZWQpIHx8XG4gICAgICAgIHRoaXMud2luZG93U3RhdGUgPT09IFdpZGdldFdpbmRvd1N0YXRlLm1heGltaXplZCB8fFxuICAgICAgICB0aGlzLndpbmRvd1N0YXRlID09PSBXaWRnZXRXaW5kb3dTdGF0ZS5taW5pbWl6ZWQpIHJldHVybjtcbiAgICAgIGlmIChzZXR0aW5ncy5rZWVwSW5WaWV3cG9ydCkge1xuICAgICAgICBsZXQgc2l6ZSA9IHRoaXMuX2dldEN1cnJlbnRTaXplKCk7XG4gICAgICAgIGxldCAkd2luZG93ID0gdGhpcy5fZ2V0V2luZG93U2l6ZSgpO1xuICAgICAgICBpZiAobmV3UG9zaXRpb24udG9wID4gJHdpbmRvdy5oZWlnaHQoKSAtIHNpemUuaGVpZ2h0KSBuZXdQb3NpdGlvbi50b3AgPSAkd2luZG93LmhlaWdodCgpIC0gc2l6ZS5oZWlnaHQ7XG4gICAgICAgIGlmIChuZXdQb3NpdGlvbi5sZWZ0ID4gJHdpbmRvdy53aWR0aCgpIC0gc2l6ZS53aWR0aCkgbmV3UG9zaXRpb24ubGVmdCA9ICR3aW5kb3cud2lkdGgoKSAtIHNpemUud2lkdGg7XG4gICAgICAgIGlmIChuZXdQb3NpdGlvbi50b3AgPCAwKSBuZXdQb3NpdGlvbi50b3AgPSAwO1xuICAgICAgICBpZiAobmV3UG9zaXRpb24ubGVmdCA8IDApIG5ld1Bvc2l0aW9uLmxlZnQgPSAwO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgY3VycmVudFBvc2l0aW9uID0gdGhpcy5fZ2V0Q3VycmVudFBvc2l0aW9uKCk7XG4gICAgaWYgKGN1cnJlbnRQb3NpdGlvbi50b3AgIT0gbmV3UG9zaXRpb24udG9wIHx8IGN1cnJlbnRQb3NpdGlvbi5sZWZ0ICE9IG5ld1Bvc2l0aW9uLmxlZnQpIHtcbiAgICAgIC8v5Yqo55S7IOW+heWunueOsFxuICAgICAgdGhpcy5wb3NpdGlvbiA9IF8ubWVyZ2UodGhpcy5wb3NpdGlvbiwge1xuICAgICAgICBsZWZ0OiBuZXdQb3NpdGlvbi5sZWZ0ICsgXCJweFwiLFxuICAgICAgICB0b3A6IG5ld1Bvc2l0aW9uLnRvcCArIFwicHhcIlxuICAgICAgfSk7XG4gICAgICB0aGlzLnNzcGFuZWwubmF0aXZlRWxlbWVudC5zdHlsZS5sZWZ0ID0gbmV3UG9zaXRpb24ubGVmdCArIFwicHhcIjtcbiAgICAgIHRoaXMuc3NwYW5lbC5uYXRpdmVFbGVtZW50LnN0eWxlLnRvcCA9IG5ld1Bvc2l0aW9uLnRvcCArIFwicHhcIjtcbiAgICAgIHRoaXMuX3NldEN1cnJlbnRQb3NpdGlvbihuZXdQb3NpdGlvbik7XG4gICAgICBkZWZSZXQucmVzb2x2ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWZSZXQucmVzb2x2ZSgpO1xuICAgIH1cbiAgICByZXR1cm4gZGVmUmV0LnByb21pc2UoKTtcbiAgfVxuICBwcml2YXRlIF9nZXRXaW5kb3dTaXplKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoZWlnaHQ6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgIH0sXG4gICAgICB3aWR0aDogKCkgPT4ge1xuICAgICAgICByZXR1cm4gd2luZG93Lm91dGVyV2lkdGg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiDojrflj5ZwYW5lbOWkp+Wwj1xuICAgKi9cbiAgcHJpdmF0ZSBfZ2V0Q3VycmVudFNpemUoKSB7XG4gICAgcmV0dXJuIF8ubWVyZ2Uoe30sIHRoaXMuY3VycmVudFNpemUpO1xuICB9XG4gIC8qKlxuICAgKiBcbiAgICovXG4gIHByaXZhdGUgX3NhdmVDdXJyZW50U2l6ZSgpIHtcbiAgICAvL3RoaXMuX3NzUGFuZWwuZGF0YShcInNhdmVkU2l6ZVwiLCB0aGlzLl9nZXRDdXJyZW50U2l6ZSgpKTtcbiAgICB0aGlzLnNhdmVkU2l6ZSA9IHRoaXMuX2dldEN1cnJlbnRTaXplKCk7XG4gIH1cbiAgcHJpdmF0ZSBfc2V0Q3VycmVudFNpemUoc2l6ZSkge1xuICAgIHRoaXMuY3VycmVudFNpemUgPSBfLm1lcmdlKHRoaXMuY3VycmVudFNpemUsIHNpemUpO1xuICB9XG4gIHByaXZhdGUgX3Jlc3RvcmVTYXZlZFNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NoYW5nZVNpemUoXy5tZXJnZSh7XG4gICAgICBjaGVja1Bvc2l0aW9uOiB0cnVlLFxuICAgICAgY2hlY2tTaXplOiBmYWxzZSxcbiAgICAgIGV2ZW50OiBmYWxzZVxuICAgIH0sIHRoaXMuc2F2ZWRTaXplKSk7XG4gIH1cbiAgLyoqXG4gICAqIOi9rOaNouS4unN0eWxl6YeM55qE5qC35byP5YC877yM5pWw5a2X5YC86L2s5Li65bimcHjnmoTvvIzpnZ7mlbDlrZfnmoTnm7TmjqXov5Tlm55cbiAgICogQHBhcmFtIHZhbCBcbiAgICovXG4gIHByb3RlY3RlZCBfY29udmVydFRvU3R5bGVWYWwodmFsOiBhbnkpOiBzdHJpbmcge1xuICAgIGlmICh2YWwgPT0gXCIwXCIpIHJldHVybiBcIjBweFwiO1xuICAgIGlmICghdmFsKSByZXR1cm4gXCJcIjtcbiAgICBpZiAodmFsID09PSBcImF1dG9cIiB8fCB2YWwgPT0gXCIxMDAlXCIpIHJldHVybiB2YWw7XG4gICAgbGV0IF93ID0gcGFyc2VGbG9hdCh2YWwpLCBfd3MgPSBcIlwiO1xuICAgIGlmIChpc05hTihfdykpIHtcbiAgICAgIF93cyA9IHZhbDtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKF93IDwgMCkge1xuICAgICAgICBfdyA9IDA7XG4gICAgICB9XG4gICAgICBfd3MgPSBfdyArIFwicHhcIjtcbiAgICB9XG4gICAgcmV0dXJuIF93cztcbiAgfVxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSBwYXJhbXMgXG4gICAqL1xuICBwcml2YXRlIF9jaGFuZ2VTaXplKHBhcmFtcykge1xuXG4gICAgbGV0IGRlZlJldCA9IHRoaXMuY29tbW9uU2VydmljZS5jcmVhdGVQcm9taXNlRGVmZXIoKTtcbiAgICBsZXQgc2V0dGluZ3MgPSB0aGlzLm9wdGlvbnM7XG4gICAgbGV0IGFuaW1hdGlvblRpbWUgPSAocGFyYW1zLmFuaW1hdGlvblRpbWUgIT09IHVuZGVmaW5lZCkgPyBwYXJzZUludChwYXJhbXMuYW5pbWF0aW9uVGltZSkgOiBzZXR0aW5ncy5hbmltYXRpb25UaW1lO1xuICAgIGxldCBuZXdTaXplID0ge1xuICAgICAgd2lkdGg6IHBhcmFtcy53aWR0aCxcbiAgICAgIGhlaWdodDogcGFyYW1zLmhlaWdodFxuICAgIH07XG4gICAgaWYgKHBhcmFtcy5jaGVja1NpemUpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlID09PSBXaWRnZXRTdGF0ZS5jbG9zZWRcbiAgICAgICAgfHwgdGhpcy53aW5kb3dTdGF0ZSA9PT0gV2lkZ2V0V2luZG93U3RhdGUubWluaW1pemVkIHx8XG4gICAgICAgIHRoaXMud2luZG93U3RhdGUgPT09IFdpZGdldFdpbmRvd1N0YXRlLm1heGltaXplZCkgcmV0dXJuO1xuXG4gICAgICBpZiAoc2V0dGluZ3MubWF4V2lkdGggJiYgbmV3U2l6ZS53aWR0aCA+IHNldHRpbmdzLm1heFdpZHRoKSBuZXdTaXplLndpZHRoID0gc2V0dGluZ3MubWF4V2lkdGg7XG4gICAgICBpZiAoc2V0dGluZ3MubWluV2lkdGggJiYgbmV3U2l6ZS53aWR0aCA8IHNldHRpbmdzLm1pbldpZHRoKSBuZXdTaXplLndpZHRoID0gc2V0dGluZ3MubWluV2lkdGg7XG4gICAgICBpZiAoc2V0dGluZ3MubWF4SGVpZ2h0ICYmIG5ld1NpemUuaGVpZ2h0ID4gc2V0dGluZ3MubWF4SGVpZ2h0KSBuZXdTaXplLmhlaWdodCA9IHNldHRpbmdzLm1heEhlaWdodDtcbiAgICAgIGlmIChzZXR0aW5ncy5taW5IZWlnaHQgJiYgbmV3U2l6ZS5oZWlnaHQgPCBzZXR0aW5ncy5taW5IZWlnaHQpIG5ld1NpemUuaGVpZ2h0ID0gc2V0dGluZ3MubWluSGVpZ2h0O1xuICAgICAgaWYgKHRoaXMud2luZG93U3RhdGUgPT09IFdpZGdldFdpbmRvd1N0YXRlLmNvbGxhcHNlZCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRTaXplID0gXy5tZXJnZSh7fSwgbmV3U2l6ZSlcbiAgICAgICAgZGVsZXRlIG5ld1NpemUuaGVpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgY3VycmVudFNpemUgPSB0aGlzLl9nZXRDdXJyZW50U2l6ZSgpO1xuICAgIGlmIChjdXJyZW50U2l6ZS53aWR0aCAhPSBuZXdTaXplLndpZHRoIHx8IGN1cnJlbnRTaXplLmhlaWdodCAhPSBuZXdTaXplLmhlaWdodCkge1xuXG4gICAgICBpZiAobmV3U2l6ZS5oZWlnaHQpIHtcbiAgICAgICAgLy8gbmV3U2l6ZS5oZWlnaHQ9cGFyc2VGbG9hdChuZXdTaXplLmhlaWdodCk7IC8vTmFOIG9yIG51bWJlciBcbiAgICAgICAgdGhpcy5fcmVuZGVyLnNldFN0eWxlKHRoaXMuc3NwYW5lbC5uYXRpdmVFbGVtZW50LCBcImhlaWdodFwiLCB0aGlzLl9jb252ZXJ0VG9TdHlsZVZhbChuZXdTaXplLmhlaWdodCkpO1xuICAgICAgfVxuICAgICAgaWYgKG5ld1NpemUud2lkdGgpIHtcbiAgICAgICAgLy8gbmV3U2l6ZS53aWR0aCA9IHBhcnNlRmxvYXQobmV3U2l6ZS53aWR0aCk7Ly9OYU4gb3IgbnVtYmVyIFxuXG4gICAgICAgIHRoaXMuX3JlbmRlci5zZXRTdHlsZSh0aGlzLnNzcGFuZWwubmF0aXZlRWxlbWVudCwgXCJ3aWR0aFwiLCB0aGlzLl9jb252ZXJ0VG9TdHlsZVZhbChuZXdTaXplLndpZHRoKSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3NldEN1cnJlbnRTaXplKG5ld1NpemUpO1xuICAgICAgZGVmUmV0LnJlc29sdmUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVmUmV0LnJlc29sdmUoKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlZlJldC5wcm9taXNlKCk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRCb3JkZXJzV2lkdGgoYm9yZGVyOiBzdHJpbmcpOiBudW1iZXIgfCBhbnkge1xuICAgIGlmIChib3JkZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2dldEJvcmRlcldpZHRoKHRoaXMuc3NwYW5lbC5uYXRpdmVFbGVtZW50LCBib3JkZXIpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiB0aGlzLl9nZXRCb3JkZXJXaWR0aCh0aGlzLnNzcGFuZWwubmF0aXZlRWxlbWVudCwgXCJ0b3BcIiksXG4gICAgICBib3R0b206IHRoaXMuX2dldEJvcmRlcldpZHRoKHRoaXMuc3NwYW5lbC5uYXRpdmVFbGVtZW50LCBcInRvcFwiKSxcbiAgICAgIGxlZnQ6IHRoaXMuX2dldEJvcmRlcldpZHRoKHRoaXMuc3NwYW5lbC5uYXRpdmVFbGVtZW50LCBcInRvcFwiKSxcbiAgICAgIHJpZ2h0OiB0aGlzLl9nZXRCb3JkZXJXaWR0aCh0aGlzLnNzcGFuZWwubmF0aXZlRWxlbWVudCwgXCJ0b3BcIilcbiAgICB9O1xuICB9XG4gIHByaXZhdGUgX2dldEJvcmRlcldpZHRoKGVsZTogSFRNTEVsZW1lbnQsIGJvcmRlcjogc3RyaW5nKSB7XG4gICAgaWYgKGJvcmRlci50b0xvd2VyQ2FzZSgpID09PSBcInRvcFwiKSBib3JkZXIgPSBcIlRvcFwiO1xuICAgIGlmIChib3JkZXIudG9Mb3dlckNhc2UoKSA9PT0gXCJsZWZ0XCIpIGJvcmRlciA9IFwiTGVmdFwiO1xuICAgIGlmIChib3JkZXIudG9Mb3dlckNhc2UoKSA9PT0gXCJyaWdodFwiKSBib3JkZXIgPSBcIlJpZ2h0XCI7XG4gICAgaWYgKGJvcmRlci50b0xvd2VyQ2FzZSgpID09PSBcImJvdHRvbVwiKSBib3JkZXIgPSBcIkJvdHRvbVwiO1xuICAgIGxldCB3ID0gZWxlLnN0eWxlW2Bib3JkZXIke2JvcmRlcn1XaWR0aGBdO1xuICAgIGlmICghdykgdyA9IDA7XG4gICAgcmV0dXJuIHBhcnNlSW50KHcsIDEwKTtcbiAgfVxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSBldnQgXG4gICAqL1xuICBwdWJsaWMgX2NvbnRlbnRDbGljayhldnQ6IE1vdXNlRXZlbnQpIHtcbiAgICB0aGlzLnBhbmVsTWFuYWdlci5fYWN0aXZlUGFuZWwodGhpcy5pZCk7XG4gIH1cbiAgLyoqXG4gICAqIOWNleWHu+agh+mimFxuICAgKi9cbiAgcHVibGljIF90aXRsZWJhcl9Nb3VzZURvd24oZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBpZiAodGhpcy5jb21tb25TZXJ2aWNlLmlzTW9iaWxlKCkpIHJldHVybjtcbiAgICBpZiAodGhpcy5pc0RvY2thYmxlKCkpIHJldHVybjtcbiAgICBpZiAodGhpcy5vcHRpb25zLmRyYWdnYWJsZSAhPT0gdHJ1ZSkgcmV0dXJuO1xuICAgIHRoaXMuaXNNb3VzZUV2ZW50ID0gZmFsc2U7XG4gICAgLy8gaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXRbXCJjbGFzc05hbWVcIl0uaW5kZXhPZihcInNzcGFuZWxfdGl0bGViYXJfZHJhZ2dhYmxlXCIpIDw9IC0xKSB7XG4gICAgLy8gICByZXR1cm47XG4gICAgLy8gfVxuICAgIHRoaXMucGFuZWxNYW5hZ2VyLl9hY3RpdmVQYW5lbCh0aGlzLmlkKTtcbiAgICBsZXQgY3VycmVudFBvc2l0aW9uID0gdGhpcy5fZ2V0Q3VycmVudFBvc2l0aW9uKCk7XG4gICAgbGV0IHNldHRpbmdzID0gdGhpcy5vcHRpb25zO1xuICAgIGlmICghc2V0dGluZ3MubW9kYWwpIHtcbiAgICAgIHRoaXMuc3NwYW5lbE92ZXJsYXkubmF0aXZlRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCI7XG4gICAgICB0aGlzLnNzcGFuZWxPdmVybGF5Lm5hdGl2ZUVsZW1lbnQuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICAgIHRoaXMuc3NwYW5lbE92ZXJsYXkubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcblxuICAgIH1cbiAgICB0aGlzLl9hZGREb2N1bWVudE1vdXNlRXZlbnRIYW5kbGVycyh7XG4gICAgICBhY3Rpb246IFwiZHJhZ1wiLFxuICAgICAgb3BhY2l0eTogc2V0dGluZ3MuZHJhZ09wYWNpdHksXG4gICAgICBjb21wZW5zYXRpb25YOiBldmVudC5wYWdlWCAtIHBhcnNlRmxvYXQoY3VycmVudFBvc2l0aW9uLmxlZnQudG9TdHJpbmcoKSksXG4gICAgICBjb21wZW5zYXRpb25ZOiBldmVudC5wYWdlWSAtIHBhcnNlRmxvYXQoY3VycmVudFBvc2l0aW9uLnRvcC50b1N0cmluZygpKVxuICAgIH0pO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0gZXZlbnQgXG4gICAqIEBwYXJhbSByZXNpemVQYXJhbXMgXG4gICAqL1xuICBwdWJsaWMgX3Jlc2l6ZXJfTW91c2VEb3duKGV2ZW50OiBNb3VzZUV2ZW50LCByZXNpemVQYXJhbXM6IHsgZGltZW5zaW9uPzogc3RyaW5nLCBkaXJlY3Rpb25YPzogc3RyaW5nLCBkaXJlY3Rpb25ZPzogc3RyaW5nIH0pIHtcbiAgICBpZiAodGhpcy5jb21tb25TZXJ2aWNlLmlzTW9iaWxlKCkpIHJldHVybjtcbiAgICBsZXQgY3VycmVudFBvc2l0aW9uID0gdGhpcy5fZ2V0Q3VycmVudFBvc2l0aW9uKCk7XG4gICAgbGV0IGN1cnJlbnRTaXplID0gdGhpcy5fZ2V0Q3VycmVudFNpemUoKTtcbiAgICBsZXQgX2RhdGEgPSB7XG4gICAgICBhY3Rpb246IFwicmVzaXplXCIsXG4gICAgICBkaW1lbnNpb246IHJlc2l6ZVBhcmFtcy5kaW1lbnNpb24sXG4gICAgICBkaXJlY3Rpb25YOiByZXNpemVQYXJhbXMuZGlyZWN0aW9uWCxcbiAgICAgIGRpcmVjdGlvblk6IHJlc2l6ZVBhcmFtcy5kaXJlY3Rpb25ZLFxuICAgICAgb3BhY2l0eTogdGhpcy5vcHRpb25zLnJlc2l6ZU9wYWNpdHksXG4gICAgICBzdGFydFg6IGV2ZW50LnBhZ2VYICsgKChyZXNpemVQYXJhbXMuZGlyZWN0aW9uWCA9PSBcImxlZnRcIikgPyBwYXJzZUZsb2F0KGN1cnJlbnRTaXplLndpZHRoKSA6IC1wYXJzZUZsb2F0KGN1cnJlbnRTaXplLndpZHRoKSksXG4gICAgICBzdGFydFk6IGV2ZW50LnBhZ2VZICsgKChyZXNpemVQYXJhbXMuZGlyZWN0aW9uWSA9PSBcInRvcFwiKSA/IHBhcnNlRmxvYXQoY3VycmVudFNpemUuaGVpZ2h0KSA6IC1wYXJzZUZsb2F0KGN1cnJlbnRTaXplLmhlaWdodCkpLFxuICAgICAgY29tcGVuc2F0aW9uWDogZXZlbnQucGFnZVggLSBwYXJzZUludChjdXJyZW50UG9zaXRpb24ubGVmdC50b1N0cmluZygpLCAxMCksXG4gICAgICBjb21wZW5zYXRpb25ZOiBldmVudC5wYWdlWSAtIHBhcnNlSW50KGN1cnJlbnRQb3NpdGlvbi50b3AudG9TdHJpbmcoKSwgMTApXG4gICAgfTtcbiAgICAvLyBpZiAoaXNOYU4ocGFyc2VJbnQoY3VycmVudFBvc2l0aW9uLmxlZnQudG9TdHJpbmcoKSwgMTApKSkge1xuICAgIC8vICAgX2RhdGEuY29tcGVuc2F0aW9uWCA9IGV2ZW50LnBhZ2VYO1xuICAgIC8vIH1cbiAgICAvLyBpZiAoaXNOYU4ocGFyc2VJbnQoY3VycmVudFBvc2l0aW9uLnRvcC50b1N0cmluZygpLCAxMCkpKSB7XG4gICAgLy8gICBfZGF0YS5jb21wZW5zYXRpb25YID0gZXZlbnQucGFnZVk7XG4gICAgLy8gfVxuICAgIHRoaXMuX2FkZERvY3VtZW50TW91c2VFdmVudEhhbmRsZXJzKF9kYXRhKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIGV2ZW50RGF0YSBcbiAgICovXG4gIHByaXZhdGUgX2FkZERvY3VtZW50TW91c2VFdmVudEhhbmRsZXJzKGV2ZW50RGF0YSkge1xuICAgIHRoaXMuc3NwYW5lbC5uYXRpdmVFbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBldmVudERhdGEub3BhY2l0eTtcbiAgICB0aGlzLnNzcGFuZWwubmF0aXZlRWxlbWVudC5zdHlsZS5maWx0ZXIgPSBcImFscGhhKG9wYWNpdHk9XCIgKyBldmVudERhdGEub3BhY2l0eSAqIDEwMCArIFwiKVwiOyAvLyBJRTUtOFxuICAgIGlmICghdGhpcy5vcHRpb25zLm1vdXNlTW92ZUV2ZW50cykge1xuICAgICAgdGhpcy50ZW1wU2F2ZWREYXRhID0ge1xuICAgICAgICBwb3NpdGlvbjogdGhpcy5fZ2V0Q3VycmVudFBvc2l0aW9uKCksXG4gICAgICAgIHNpemU6IHRoaXMuX2dldEN1cnJlbnRTaXplKClcbiAgICAgIH1cbiAgICB9XG4gICAgLypcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsKGV2dDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgZXZ0W1wiZGF0YVwiXSA9IGV2ZW50RGF0YTtcbiAgICAgIHRoaXMuX2RvY3VtZW50X01vdXNlTW92ZShldnQpO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIChldnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGV2dFtcImRhdGFcIl0gPSBldmVudERhdGE7XG4gICAgICB0aGlzLl9kb2N1bWVudF9Nb3VzZVVwKGV2dCk7XG4gICAgfSk7Ki9cbiAgICB0aGlzLl9ldmVudFRlbXBEYXRhID0gZXZlbnREYXRhO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy54eHh4LCBmYWxzZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy55eXl5LCBmYWxzZSk7XG4gIH1cbiAgcHJpdmF0ZSBfZXZlbnRUZW1wRGF0YTogYW55ID0gdW5kZWZpbmVkO1xuICBwcml2YXRlIHh4eHg7XG4gIHByaXZhdGUgeXl5eTtcbiAgLyoqXG4gICAqIFxuICAgKi9cbiAgcHJpdmF0ZSBfZG9jdW1lbnRfTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgbGV0IHNldHRpbmdzID0gdGhpcy5vcHRpb25zO1xuICAgIGxldCBjdXJyZW50UG9zaXRpb24gPSB0aGlzLl9nZXRDdXJyZW50UG9zaXRpb24oKTtcbiAgICBsZXQgY3VycmVudFNpemUgPSB0aGlzLl9nZXRDdXJyZW50U2l6ZSgpO1xuICAgIGxldCBuZXdQb3NpdGlvbjogYW55ID0ge307XG4gICAgbGV0IG5ld1NpemU6IGFueSA9IHt9O1xuICAgIGV2ZW50LmRhdGEgPSB0aGlzLl9ldmVudFRlbXBEYXRhO1xuICAgIHN3aXRjaCAoZXZlbnQuZGF0YS5hY3Rpb24pIHtcbiAgICAgIGNhc2UgXCJkcmFnXCI6XG4gICAgICAgIG5ld1Bvc2l0aW9uLnRvcCA9IGV2ZW50LnBhZ2VZIC0gZXZlbnQuZGF0YS5jb21wZW5zYXRpb25ZO1xuICAgICAgICBuZXdQb3NpdGlvbi5sZWZ0ID0gZXZlbnQucGFnZVggLSBldmVudC5kYXRhLmNvbXBlbnNhdGlvblg7XG4gICAgICAgIGlmIChzZXR0aW5ncy5rZWVwSW5WaWV3cG9ydCkge1xuICAgICAgICAgIGxldCBzaXplID0gdGhpcy5fZ2V0Q3VycmVudFNpemUoKTtcbiAgICAgICAgICBsZXQgJHdpbmRvdyA9IHRoaXMuX2dldFdpbmRvd1NpemUoKTtcbiAgICAgICAgICBpZiAobmV3UG9zaXRpb24udG9wIDwgMCkgbmV3UG9zaXRpb24udG9wID0gMDtcbiAgICAgICAgICBpZiAobmV3UG9zaXRpb24ubGVmdCA8IDApIG5ld1Bvc2l0aW9uLmxlZnQgPSAwO1xuICAgICAgICAgIGlmIChuZXdQb3NpdGlvbi50b3AgPiAkd2luZG93LmhlaWdodCgpIC0gc2l6ZS5oZWlnaHQpIG5ld1Bvc2l0aW9uLnRvcCA9ICR3aW5kb3cuaGVpZ2h0KCkgLSBzaXplLmhlaWdodDtcbiAgICAgICAgICBpZiAobmV3UG9zaXRpb24ubGVmdCA+ICR3aW5kb3cud2lkdGgoKSAtIHNpemUud2lkdGgpIG5ld1Bvc2l0aW9uLmxlZnQgPSAkd2luZG93LndpZHRoKCkgLSBzaXplLndpZHRoO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNNb3VzZUV2ZW50ID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwicmVzaXplXCI6XG4gICAgICAgIGlmIChldmVudC5kYXRhLmRpbWVuc2lvbiAhPSBcImhlaWdodFwiICYmIGV2ZW50LnBhZ2VYID4gMCkge1xuICAgICAgICAgIGxldCBuZXdXaWR0aCA9IChldmVudC5kYXRhLmRpcmVjdGlvblggPT0gXCJsZWZ0XCIpID8gZXZlbnQuZGF0YS5zdGFydFggLSBldmVudC5wYWdlWCA6IGV2ZW50LnBhZ2VYIC0gZXZlbnQuZGF0YS5zdGFydFg7XG4gICAgICAgICAgaWYgKG5ld1dpZHRoID49IHNldHRpbmdzLm1pbldpZHRoICYmICghc2V0dGluZ3MubWF4V2lkdGggfHwgbmV3V2lkdGggPD0gc2V0dGluZ3MubWF4V2lkdGgpKSB7XG4gICAgICAgICAgICBuZXdTaXplLndpZHRoID0gbmV3V2lkdGg7XG4gICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5kaXJlY3Rpb25YID09IFwibGVmdFwiKSBuZXdQb3NpdGlvbi5sZWZ0ID0gZXZlbnQucGFnZVggLSBldmVudC5kYXRhLmNvbXBlbnNhdGlvblg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5kYXRhLmRpbWVuc2lvbiAhPSBcIndpZHRoXCIgJiYgZXZlbnQucGFnZVkgPiAwKSB7XG4gICAgICAgICAgbGV0IG5ld0hlaWdodCA9IChldmVudC5kYXRhLmRpcmVjdGlvblkgPT0gXCJ0b3BcIikgPyBldmVudC5kYXRhLnN0YXJ0WSAtIGV2ZW50LnBhZ2VZIDogZXZlbnQucGFnZVkgLSBldmVudC5kYXRhLnN0YXJ0WTtcbiAgICAgICAgICBpZiAobmV3SGVpZ2h0ID49IHNldHRpbmdzLm1pbkhlaWdodCAmJiAoIXNldHRpbmdzLm1heEhlaWdodCB8fCBuZXdIZWlnaHQgPD0gc2V0dGluZ3MubWF4SGVpZ2h0KSkge1xuICAgICAgICAgICAgbmV3U2l6ZS5oZWlnaHQgPSBuZXdIZWlnaHQ7XG4gICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5kaXJlY3Rpb25ZID09IFwidG9wXCIpIG5ld1Bvc2l0aW9uLnRvcCA9IGV2ZW50LnBhZ2VZIC0gZXZlbnQuZGF0YS5jb21wZW5zYXRpb25ZO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoKG5ld1Bvc2l0aW9uLnRvcCAhPT0gdW5kZWZpbmVkICYmIG5ld1Bvc2l0aW9uLnRvcCAhPSBjdXJyZW50UG9zaXRpb24udG9wKSB8fCAobmV3UG9zaXRpb24ubGVmdCAhPT0gdW5kZWZpbmVkICYmIG5ld1Bvc2l0aW9uLmxlZnQgIT0gY3VycmVudFBvc2l0aW9uLmxlZnQpKSB7XG4gICAgICBpZiAobmV3UG9zaXRpb24udG9wIDwgMCkge1xuICAgICAgICBuZXdQb3NpdGlvbi50b3AgPSAwO1xuICAgICAgfVxuICAgICAgaWYgKG5ld1Bvc2l0aW9uLmxlZnQgPCAwKSB7XG4gICAgICAgIG5ld1Bvc2l0aW9uLmxlZnQgPSAwO1xuICAgICAgfVxuICAgICAgdGhpcy5fY2hhbmdlUG9zaXRpb24obmV3UG9zaXRpb24pO1xuICAgICAgdGhpcy5fc2V0Q3VycmVudFBvc2l0aW9uKG5ld1Bvc2l0aW9uKTtcbiAgICAgIGlmIChzZXR0aW5ncy5tb3VzZU1vdmVFdmVudHMpIHtcbiAgICAgICAgdGhpcy5vbk1vdmUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKChuZXdTaXplLndpZHRoICE9PSB1bmRlZmluZWQgJiYgbmV3U2l6ZS53aWR0aCAhPSBjdXJyZW50U2l6ZS53aWR0aCkgfHwgKG5ld1NpemUuaGVpZ2h0ICE9PSB1bmRlZmluZWQgJiYgbmV3U2l6ZS5oZWlnaHQgIT0gY3VycmVudFNpemUuaGVpZ2h0KSkge1xuICAgICAgaWYgKG5ld1NpemUuaGVpZ2h0KSB7XG4gICAgICAgIGlmIChuZXdTaXplLmhlaWdodCA8PSB0aGlzLm9wdGlvbnMubWluSGVpZ2h0KSB7XG4gICAgICAgICAgbmV3U2l6ZS5oZWlnaHQgPSB0aGlzLm9wdGlvbnMubWluSGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3JlbmRlci5zZXRTdHlsZSh0aGlzLnNzcGFuZWwubmF0aXZlRWxlbWVudCwgXCJoZWlnaHRcIiwgdGhpcy5fY29udmVydFRvU3R5bGVWYWwobmV3U2l6ZS5oZWlnaHQpKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXdTaXplLndpZHRoKSB7XG4gICAgICAgIGlmIChuZXdTaXplLndpZHRoIDw9IHRoaXMub3B0aW9ucy5taW5XaWR0aCkge1xuICAgICAgICAgIG5ld1NpemUud2lkdGggPSB0aGlzLm9wdGlvbnMubWluV2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcmVuZGVyLnNldFN0eWxlKHRoaXMuc3NwYW5lbC5uYXRpdmVFbGVtZW50LCBcIndpZHRoXCIsIHRoaXMuX2NvbnZlcnRUb1N0eWxlVmFsKG5ld1NpemUud2lkdGgpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3NldEN1cnJlbnRTaXplKG5ld1NpemUpO1xuICAgICAgaWYgKHNldHRpbmdzLm1vdXNlTW92ZUV2ZW50cykge1xuICAgICAgICB0aGlzLl9zZXRJZnJhbWVTdHlsZSgpO1xuICAgICAgICB0aGlzLm9uUmVzaXplKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBcbiAgICovXG4gIHByaXZhdGUgX2RvY3VtZW50X01vdXNlVXAoZXZlbnQpIHtcbiAgICBsZXQgc2V0dGluZ3MgPSB0aGlzLm9wdGlvbnM7XG4gICAgLy8gdGhpcy5fc3NQYW5lbC5mYWRlVG8oMCwgMSk7XG4gICAgdGhpcy5zc3BhbmVsLm5hdGl2ZUVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgdGhpcy5zc3BhbmVsLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZmlsdGVyID0gXCJhbHBoYShvcGFjaXR5PVwiICsgMSAqIDEwMCArIFwiKVwiOyAvLyBJRTUtOFxuICAgIC8vIHJ1aXI6MjAyMDA1MTEg5Y675o6Jc2V0VGltZW91dO+8iOiuvue9rueuoeeQhuWRmG1vZGFs5ouW5Yqo6Zeu6aKY77yJXG4gICAgLy9zZXRUaW1lb3V0KCgpID0+IHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMueHh4eCk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy55eXl5KTtcbiAgICAvL30sIDEwKTtcbiAgICBpZiAodGhpcy5pc01vdXNlRXZlbnQgIT09IHRydWUpIHJldHVybjtcblxuICAgIGlmICghc2V0dGluZ3MubW9kYWwpIHtcbiAgICAgIHRoaXMuc3NwYW5lbE92ZXJsYXkubmF0aXZlRWxlbWVudC5zdHlsZS53aWR0aCA9IFwiMHB4XCI7XG4gICAgICB0aGlzLnNzcGFuZWxPdmVybGF5Lm5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gXCIwcHhcIjtcbiAgICAgIHRoaXMuc3NwYW5lbE92ZXJsYXkubmF0aXZlRWxlbWVudC5zdHlsZS5iYWNrZ291bmRDb2xvciA9IFwiXCI7XG4gICAgfVxuICAgIGlmICghc2V0dGluZ3MubW91c2VNb3ZlRXZlbnRzKSB7XG4gICAgICBsZXQgY3VycmVudFBvc2l0aW9uID0gdGhpcy5fZ2V0Q3VycmVudFBvc2l0aW9uKCk7XG4gICAgICBsZXQgY3VycmVudFNpemUgPSB0aGlzLl9nZXRDdXJyZW50U2l6ZSgpO1xuICAgICAgbGV0IHNhdmVkRGF0YSA9IHRoaXMudGVtcFNhdmVkRGF0YTtcbiAgICAgIGlmIChzYXZlZERhdGEucG9zaXRpb24udG9wICE9IGN1cnJlbnRQb3NpdGlvbi50b3AgfHwgc2F2ZWREYXRhLnBvc2l0aW9uLmxlZnQgIT0gY3VycmVudFBvc2l0aW9uLmxlZnQpIHtcbiAgICAgICAgLy8gdGhpcy5fdHJpZ2dlckV2ZW50KFwibW92ZVwiKTtcbiAgICAgICAgdGhpcy5vbk1vdmUoKTtcbiAgICAgIH1cbiAgICAgIGlmIChzYXZlZERhdGEuc2l6ZS53aWR0aCAhPSBjdXJyZW50U2l6ZS53aWR0aCB8fCBzYXZlZERhdGEuc2l6ZS5oZWlnaHQgIT0gY3VycmVudFNpemUuaGVpZ2h0KSB7XG4gICAgICAgIC8vIHRoaXMuX3RyaWdnZXJFdmVudChcInJlc2l6ZVwiKTtcbiAgICAgICAgdGhpcy5fc2V0SWZyYW1lU3R5bGUoKTtcbiAgICAgICAgdGhpcy5vblJlc2l6ZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy50ZW1wU2F2ZWREYXRhID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZXZlbnRUZW1wRGF0YSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfc2V0SWZyYW1lU3R5bGUoKSB7XG5cbiAgfVxuICBwcml2YXRlIF9pc0RvY2tTaWRlKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvKipcbiAgICog5pyA5aSn5YyWXG4gICAqL1xuICBwcm90ZWN0ZWQgX21heGltaXplKCkge1xuICAgIGlmICh0aGlzLnN0YXRlID09PSBXaWRnZXRTdGF0ZS5jbG9zZWQgfHxcbiAgICAgIHRoaXMud2luZG93U3RhdGUgPT09IFdpZGdldFdpbmRvd1N0YXRlLm1heGltaXplZCB8fFxuICAgICAgdGhpcy53aW5kb3dTdGF0ZSA9PT0gV2lkZ2V0V2luZG93U3RhdGUubWluaW1pemVkIHx8XG4gICAgICB0aGlzLndpbmRvd1N0YXRlID09PSBXaWRnZXRXaW5kb3dTdGF0ZS5jb2xsYXBzZWRcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHNldHRpbmdzID0gdGhpcy5vcHRpb25zO1xuICAgIC8v6ZqQ6JeP5pyA5aSn5YyW5oyJ6ZKu77yM5pi+56S66L+Y5Y6f5oyJ6ZKuXG4gICAgbGV0IGVsZXM6IEFycmF5PEhUTUxFbGVtZW50PiA9IHRoaXMuc3NwYW5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3NwYW5lbF9zdGF0dXNiYXJfaGFuZGxlICosIC5zc3BhbmVsX3Jlc2l6ZXIsIC5zc3BhbmVsX3RpdGxlYmFyX2J1dHRvbl9jb2xsYXBzZVwiKTtcbiAgICBlbGVzLmZvckVhY2goKGgsIGlkeCwgYXJyKSA9PiB7XG4gICAgICB0aGlzLl9yZW5kZXIuc2V0U3R5bGUoaCwgXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgICB9KTtcbiAgICAvL+makOiXj+eKtuaAgeagj1xuICAgIGlmIChzZXR0aW5ncy5kcmFnZ2FibGUpIHtcbiAgICAgIC8v6L+Z5pe2ICDnpoHmraLmi5bmi71cbiAgICAgIHRoaXMuX3JlbmRlci5yZW1vdmVDbGFzcyh0aGlzLnNzcGFuZWxfdGl0bGViYXIubmF0aXZlRWxlbWVudCwgXCJzc3BhbmVsX3RpdGxlYmFyX2RyYWdnYWJsZVwiKTtcbiAgICB9XG4gICAgaWYgKCFzZXR0aW5ncy5tb2RhbCkge1xuICAgICAgdGhpcy5fcmVuZGVyLnNldFN0eWxlKHRoaXMuc3NwYW5lbE92ZXJsYXkubmF0aXZlRWxlbWVudCwgXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwidHJhbnNwYXJlbnRcIik7XG4gICAgICB0aGlzLl9yZW5kZXIuc2V0U3R5bGUodGhpcy5zc3BhbmVsT3ZlcmxheS5uYXRpdmVFbGVtZW50LCBcIndpZHRoXCIsIFwiMTAwJVwiKTtcbiAgICAgIHRoaXMuX3JlbmRlci5zZXRTdHlsZSh0aGlzLnNzcGFuZWxPdmVybGF5Lm5hdGl2ZUVsZW1lbnQsIFwiaGVpZ2h0XCIsIFwiMTAwJVwiKTtcbiAgICB9XG5cbiAgICB0aGlzLl9zYXZlQ3VycmVudFBvc2l0aW9uKCk7XG4gICAgdGhpcy5fc2F2ZUN1cnJlbnRTaXplKCk7XG4gICAgbGV0IG5wb3NpdGlvbiA9IHtcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDBcbiAgICB9O1xuICAgIGlmICh0aGlzLl9pc0RvY2tTaWRlKCkpIHtcblxuICAgIH1cbiAgICBsZXQgZGVmUG9zaXRpb24gPSB0aGlzLl9jaGFuZ2VQb3NpdGlvbihucG9zaXRpb24pO1xuICAgIGxldCBkZWZTaXplID0gdGhpcy5fY2hhbmdlU2l6ZSh7XG4gICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICBoZWlnaHQ6IFwiMTAwJVwiXG4gICAgICAvLyB3aWR0aDp0aGlzLl9zc1BhbmVsT3B0aW9ucy5tYXhXaWR0aCxcbiAgICAgIC8vIGhlaWdodDp0aGlzLl9zc1BhbmVsT3B0aW9ucy5tYXhIZWlnaHRcbiAgICB9KTtcblxuICAgIHJldHVybiBQcm9taXNlLmFsbChbZGVmUG9zaXRpb24sIGRlZlNpemVdKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMud2luZG93U3RhdGUgPSBXaWRnZXRXaW5kb3dTdGF0ZS5tYXhpbWl6ZWQ7XG4gICAgICB0aGlzLl9zZXRJZnJhbWVTdHlsZSgpO1xuICAgICAgdGhpcy5vbk1heGltaXplKCk7XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIOacgOWkp+WMliDov5jljp9cbiAgICovXG4gIHByb3RlY3RlZCBfdW5tYXhpbWl6ZSgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gV2lkZ2V0U3RhdGUuY2xvc2VkXG4gICAgICB8fCB0aGlzLndpbmRvd1N0YXRlICE9PSBXaWRnZXRXaW5kb3dTdGF0ZS5tYXhpbWl6ZWQpXG4gICAgICByZXR1cm47XG4gICAgbGV0IHNldHRpbmdzID0gdGhpcy5vcHRpb25zO1xuICAgIGxldCBkZWZQb3NpdGlvbiA9IHRoaXMuX3Jlc3RvcmVTYXZlZFBvc2l0aW9uKCk7XG4gICAgbGV0IGRlZlNpemUgPSB0aGlzLl9yZXN0b3JlU2F2ZWRTaXplKCk7XG4gICAgLy/pmpDol4/ov5jljp/mjInpkq4g5pi+56S65pyA5aSn5YyW5oyJ6ZKuXG4gICAgLy/mmL7npLrnirbmgIHmoI/nrYlcbiAgICBsZXQgZWxlczogQXJyYXk8SFRNTEVsZW1lbnQ+ID0gdGhpcy5zc3BhbmVsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zc3BhbmVsX3N0YXR1c2Jhcl9oYW5kbGUgKiwgLnNzcGFuZWxfcmVzaXplciwgLnNzcGFuZWxfdGl0bGViYXJfYnV0dG9uX2NvbGxhcHNlXCIpO1xuICAgIGVsZXMuZm9yRWFjaCgoaCwgaWR4LCBhcnIpID0+IHtcbiAgICAgIHRoaXMuX3JlbmRlci5zZXRTdHlsZShoLCBcImRpc3BsYXlcIiwgXCJcIik7XG4gICAgfSk7XG4gICAgaWYgKHNldHRpbmdzLmRyYWdnYWJsZSkge1xuICAgICAgdGhpcy5fcmVuZGVyLmFkZENsYXNzKHRoaXMuc3NwYW5lbF90aXRsZWJhci5uYXRpdmVFbGVtZW50LCBcInNzcGFuZWxfdGl0bGViYXJfZHJhZ2dhYmxlXCIpXG4gICAgfVxuICAgIGlmICghc2V0dGluZ3MubW9kYWwpIHtcbiAgICAgIHRoaXMuX3JlbmRlci5zZXRTdHlsZSh0aGlzLnNzcGFuZWxPdmVybGF5Lm5hdGl2ZUVsZW1lbnQsIFwiYmFja2dyb3VuZC1jb2xvclwiLCBcIlwiKTtcbiAgICAgIHRoaXMuX3JlbmRlci5zZXRTdHlsZSh0aGlzLnNzcGFuZWxPdmVybGF5Lm5hdGl2ZUVsZW1lbnQsIFwid2lkdGhcIiwgXCIwXCIpO1xuICAgICAgdGhpcy5fcmVuZGVyLnNldFN0eWxlKHRoaXMuc3NwYW5lbE92ZXJsYXkubmF0aXZlRWxlbWVudCwgXCJoZWlnaHRcIiwgXCIwXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLmFsbChbZGVmUG9zaXRpb24sIGRlZlNpemVdKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMud2luZG93U3RhdGUgPSBXaWRnZXRXaW5kb3dTdGF0ZS5ub3JtYWw7XG4gICAgICB0aGlzLl9zZXRJZnJhbWVTdHlsZSgpO1xuICAgICAgdGhpcy5vbk5vcm1hbGl6ZSgpO1xuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiDmnIDlsI/ljJZcbiAgICovXG4gIHByaXZhdGUgX21pbmltaXplKCkge1xuICAgIC8v5pqC55WlXG4gIH1cbiAgLyoqXG4gICAqIOacgOWwj+WMliDov5jljp9cbiAgICovXG4gIHByaXZhdGUgX3VubWluaW1pemUoKSB7XG4gICAgLy/mmoLnlaVcbiAgfVxuICAvKipcbiAgICog5pS257ypXG4gICAqL1xuICBwcm90ZWN0ZWQgX2NvbGxhcHNlKCkge1xuICAgIGlmICh0aGlzLnN0YXJ0ZWQgIT09IHRydWUgfHxcbiAgICAgIHRoaXMuc3RhdGUgPT09IFdpZGdldFN0YXRlLmNsb3NlZCB8fFxuICAgICAgdGhpcy53aW5kb3dTdGF0ZSA9PT0gV2lkZ2V0V2luZG93U3RhdGUubWF4aW1pemVkIHx8XG4gICAgICB0aGlzLndpbmRvd1N0YXRlID09PSBXaWRnZXRXaW5kb3dTdGF0ZS5jb2xsYXBzZWQgfHxcbiAgICAgIHRoaXMud2luZG93U3RhdGUgPT09IFdpZGdldFdpbmRvd1N0YXRlLm1pbmltaXplZCkgcmV0dXJuO1xuXG4gICAgbGV0IHNldHRpbmdzID0gdGhpcy5vcHRpb25zO1xuICAgIC8v6ZqQ6JeP5pS257yp5oyJ6ZKuIOaYvuekuuWxleW8gOaMiemSrlxuICAgIC8v6ZqQ6JeP6L+Z5LiA5aCG44CC44CC44CCXG4gICAgbGV0IGVsZXM6IEFycmF5PEhUTUxFbGVtZW50PiA9IHRoaXMuc3NwYW5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3NwYW5lbF9jb250ZW50LCAuc3NwYW5lbF9zdGF0dXNiYXIsIC5zc3BhbmVsX3Jlc2l6ZXIsIC5zc3BhbmVsX3RpdGxlYmFyX2J1dHRvbl9tYXhpbWl6ZSwgLnNzcGFuZWxfdGl0bGViYXJfYnV0dG9uX21pbmltaXplXCIpO1xuICAgIGVsZXMuZm9yRWFjaCgoaCwgaWR4LCBhcnIpID0+IHtcbiAgICAgIHRoaXMuX3JlbmRlci5zZXRTdHlsZShoLCBcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgIH0pO1xuICAgIHRoaXMuX3NhdmVDdXJyZW50U2l6ZSgpO1xuICAgIGxldCBkZWZTaXplID0gdGhpcy5fY2hhbmdlU2l6ZSh7XG4gICAgICB3aWR0aDogc2V0dGluZ3MuY29sbGFwc2VkV2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuX2dldEJvcmRlcnNXaWR0aChcInRvcFwiKSArIHRoaXMuX2dldEJvcmRlcnNXaWR0aChcImJvdHRvbVwiKSArIHRoaXMuc3NwYW5lbF90aXRsZWJhci5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKFtkZWZTaXplXSkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLndpbmRvd1N0YXRlID0gV2lkZ2V0V2luZG93U3RhdGUuY29sbGFwc2VkO1xuICAgICAgdGhpcy5vbkNvbGxhcHNlKCk7XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIOWxleW8gFxuICAgKi9cbiAgcHJvdGVjdGVkIF91bmNvbGxhcHNlKCkge1xuICAgIGlmICh0aGlzLnN0YXJ0ZWQgIT0gdHJ1ZSB8fCB0aGlzLnN0YXRlID09PSBXaWRnZXRTdGF0ZS5jbG9zZWQgfHwgdGhpcy53aW5kb3dTdGF0ZSAhPT0gV2lkZ2V0V2luZG93U3RhdGUuY29sbGFwc2VkKSByZXR1cm47XG4gICAgbGV0IHNldHRpbmdzID0gdGhpcy5vcHRpb25zO1xuICAgIGxldCBkZWZTaXplID0gdGhpcy5fcmVzdG9yZVNhdmVkU2l6ZSgpO1xuICAgIC8vICDpmpDol4/lsZXlvIDmjInpkq7vvIzmmL7npLrmiYvmnK/mjInpkq5cbiAgICAvL+aYvuekuui/meS6m2RpdlxuICAgIGxldCBlbGVzOiBBcnJheTxIVE1MRWxlbWVudD4gPSB0aGlzLnNzcGFuZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNzcGFuZWxfY29udGVudCwgLnNzcGFuZWxfc3RhdHVzYmFyLCAuc3NwYW5lbF9yZXNpemVyLCAuc3NwYW5lbF90aXRsZWJhcl9idXR0b25fbWF4aW1pemUsIC5zc3BhbmVsX3RpdGxlYmFyX2J1dHRvbl9taW5pbWl6ZVwiKTtcbiAgICBlbGVzLmZvckVhY2goKGgsIGlkeCwgYXJyKSA9PiB7XG4gICAgICB0aGlzLl9yZW5kZXIuc2V0U3R5bGUoaCwgXCJkaXNwbGF5XCIsIFwiXCIpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRlZlNpemUudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLndpbmRvd1N0YXRlID0gV2lkZ2V0V2luZG93U3RhdGUubm9ybWFsO1xuICAgICAgdGhpcy5vbk5vcm1hbGl6ZSgpO1xuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiDmnIDlpKfljJZcbiAgICovXG4gIHB1YmxpYyBfYnV0dG9uTWF4X0NsaWNrKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMud2luZG93U3RhdGUgIT09IFdpZGdldFdpbmRvd1N0YXRlLm1heGltaXplZCkge1xuICAgICAgdGhpcy5fbWF4aW1pemUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdW5tYXhpbWl6ZSgpO1xuICAgIH1cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG4gIHB1YmxpYyBfYnV0dG9uQ29sbGFwc2VfQ2xpY2soZXZlbnQpIHtcbiAgICBpZiAodGhpcy53aW5kb3dTdGF0ZSAhPT0gV2lkZ2V0V2luZG93U3RhdGUuY29sbGFwc2VkKSB7XG4gICAgICB0aGlzLl9jb2xsYXBzZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl91bmNvbGxhcHNlKCk7XG4gICAgfVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbiAgcHVibGljIF9idXR0b25NaW5fQ2xpY2soZXZlbnQpIHtcbiAgICBpZiAodGhpcy53aW5kb3dTdGF0ZSAhPT0gV2lkZ2V0V2luZG93U3RhdGUubWluaW1pemVkKSB7XG4gICAgICB0aGlzLl9taW5pbWl6ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl91bm1pbmltaXplKCk7XG4gICAgfVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbiAgLyoqXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqL1xuICAvKipzZXR0aW5nKi9cblxuICAvKipcbiAgICog5omT5byA57uE5Lu26K6+572u56qX5Y+jXG4gICAqIEByZXR1cm5zIFxuICAgKi9cbiAgb3BlbldpZGdldFNldHRpbmcoKSB7XG4gICAgaWYgKCF0aGlzLndpZGdldCkge1xuICAgICAgdGhpcy53aWRnZXQgPSB0aGlzLndpZGdldE1hbmFnZXIuZ2V0V2lkZ2V0QnlJZCh0aGlzLndpZGdldENvbmZpZy5pZCkuaW5zdGFuY2U7XG4gICAgfVxuICAgIGlmICghdGhpcy53aWRnZXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy53aWRnZXQuaW5zdGFuY2Uub3BlblNldHRpbmcoKTtcbiAgfVxufSJdfQ==