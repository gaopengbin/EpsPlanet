import { WidgetState, WidgetWindowState } from '../models/base-widget';
import { Injectable, ReflectiveInjector } from '@angular/core';
import * as _ from "lodash";
import * as i0 from "@angular/core";
import * as i1 from "../models/app-config";
import * as i2 from "./common.service";
import * as i3 from "./widget-manager.service";
import * as i4 from "./component-loader.service";
import * as i5 from "./event-emitter.service";
export class PanelManagerService {
    constructor(globalParams, commonService, widgetManager, appRef, componentFactoryResolver, componentLoader, eventService) {
        this.globalParams = globalParams;
        this.commonService = commonService;
        this.widgetManager = widgetManager;
        this.appRef = appRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.componentLoader = componentLoader;
        this.eventService = eventService;
        this.panels = [];
        this.activePanel = null;
        this.map = null;
        this.view = null;
        this.panelAddToMap = true;
        this.eventService.rss.on(this.eventService._createPanelContainer, (ele) => {
            this.createPanelContainer(ele);
        });
        this.eventService.rss.on(this.eventService._mapPositionChanged, (pos) => {
            this.onMapResize();
        });
    }
    create(component, params) {
        let inputs = {};
        if (params) {
            inputs = params;
        }
        let inputProviders = Object.keys(inputs).map((inputName) => {
            return { provide: inputName, useValue: inputs[inputName] };
        });
        const factory = this.componentFactoryResolver.resolveComponentFactory(component);
        const compRef = factory.create(ReflectiveInjector.resolveAndCreate(inputProviders));
        return compRef;
    }
    createPanelContainer(eleMapContainer) {
        let container = document.querySelector(".sspanel_container");
        if (container == null) {
            container = window.document.createElement("div");
            container.className = "sspanel_container";
            if (this.commonService.isMobileNotTablet()) {
                const ionApp = document.querySelector("ion-app");
                if (ionApp) {
                    ionApp.appendChild(container);
                }
                else {
                    window.document.body.appendChild(container);
                }
            }
            else {
                if (this.panelAddToMap) {
                    if (eleMapContainer) {
                        eleMapContainer.appendChild(container);
                    }
                    else {
                        window.document.body.appendChild(container);
                    }
                }
                else {
                    window.document.body.appendChild(container);
                }
            }
        }
        this.panelContainer = container;
    }
    show(panel) {
        if (!panel.instance.started) {
            if (panel.instance.isDockable()) {
                this.componentLoader.showInHome(panel);
            }
            else {
                this.panelContainer.appendChild(this.commonService.getComponentRootNode(panel));
                this.appRef.attachView(panel.hostView);
            }
        }
    }
    setMap(map) {
        if (this.globalParams.mapConfig.is3D === true) {
            this.view = map;
        }
        else {
            this.map = map;
        }
    }
    _findPanelUri(widgetConfig) {
        const _uri_default = "epsgis-on-screen-widget-panel";
        if (this.commonService.isMobileNotTablet()) {
            if (widgetConfig.panel) {
                switch (widgetConfig.panel.dock) {
                    case "left": return "epsgis-mobile-drawer-panel";
                    case "right": return "epsgis-mobile-drawer-right-panel";
                    case "bottom": return "epsgis-mobile-action-panel";
                }
                switch (widgetConfig.panel.uri) {
                    case "epsgis-dockable-panel-at-left":
                        return "epsgis-mobile-drawer-panel";
                    case "epsgis-dockable-panel-at-bottom":
                        return "epsgis-mobile-action-panel";
                    case "epsgis-dockable-panel-at-right":
                        return "epsgis-mobile-drawer-right-panel";
                }
            }
            if (widgetConfig.mobile && widgetConfig.mobile.mode) {
                switch (widgetConfig.mobile.mode.toLowerCase()) {
                    case "drawer":
                        return "epsgis-mobile-drawer-panel";
                    case "drawerright":
                        return "epsgis-mobile-drawer-right-panel";
                    case "modal":
                        return "epsgis-mobile-modal-panel";
                    case "popup":
                        return "epsgis-mobile-popup-panel";
                    case "popover":
                        return _uri_default;
                }
            }
            return "epsgis-mobile-action-panel";
        }
        else {
            if (widgetConfig.panel) {
                switch (widgetConfig.panel.dock) {
                    case "left": return "epsgis-dockable-panel-at-left";
                    case "right": return "epsgis-dockable-panel-at-right";
                    case "bottom": return "epsgis-dockable-panel-at-bottom";
                }
                if (widgetConfig.panel.uri) {
                    return widgetConfig.panel.uri;
                }
            }
            return _uri_default;
        }
    }
    showPanel(config, widget, options, openOptions) {
        let def = this.commonService.createPromiseDefer();
        let pid = config.id + '_panel', panel = this.getPanelById(pid);
        if (panel) {
            if (panel.instance.state === WidgetState.closed) {
                if (openOptions) {
                    panel.instance.reqPara = openOptions.param;
                    if (panel.instance.widget) {
                        panel.instance.widget.instance.reqPara = openOptions.param;
                    }
                }
                this.openPanel(panel);
            }
            def.resolve(panel);
        }
        else {
            try {
                const _comp = this.componentLoader.findComponent(this._findPanelUri(config));
                if (!_comp) {
                    const _msg = `not find panel [${config.panel.uri}]`;
                    console.error(_msg);
                    return def.reject(new Error(_msg));
                }
                panel = this.componentLoader.createComponent(_comp);
                if (!options) {
                    options = {};
                    options.id = pid;
                    options.title = config.label;
                }
                options.buttonMaximize = !(config.maximizable === false);
                options.buttonCollapse = !(config.collapsible === false);
                options.modal = config.modal === true;
                if (openOptions && openOptions.panel) {
                    options = _.merge(options, openOptions.panel);
                }
                panel.instance.label = panel.instance.title = panel.instance.tooltip = config.label;
                panel.instance.widgetConfig = config;
                if (this.globalParams.mapConfig.is3D) {
                    panel.instance.view = this.view;
                }
                else {
                    panel.instance.map = this.map;
                }
                panel.instance.id = pid;
                panel.instance.gid = config.gid;
                if (openOptions) {
                    panel.instance.reqPara = openOptions.param;
                }
                panel.instance.setOptions(options);
                panel.instance.setPosition(config.position);
                if (widget) {
                    panel.instance.setWidget(widget);
                    panel.instance.widget.instance.reqPara = openOptions.param;
                }
                console.log('panel [' + pid + '] created.');
                this.openPanel(panel);
                this.panels.push(panel);
                def.resolve(panel);
            }
            catch (error) {
                console.log('create panel error: ' + error + ', panelId: ' + pid);
                def.reject(error);
                return;
            }
        }
        return def.promise();
    }
    showPanelNotWidget(panelOptions) {
        let position = {
            width: panelOptions.width + 'px',
            height: panelOptions.height + 'px',
            relativeTo: panelOptions.relativeTo,
        };
        let config = {
            id: panelOptions.id ? panelOptions.id : "ss_panel",
            label: panelOptions.title ? panelOptions.title : "SS Panel",
            position: position,
            dockSide: panelOptions.dockSide,
            panel: {
                uri: 'epsgis-iframe-panel'
            },
            resizable: panelOptions.resizable,
            draggable: panelOptions.draggable,
            gid: "panelOfNotWidget"
        };
        this.closeAllPanelsInGroup(config.gid);
        let def = this.commonService.createPromiseDefer();
        let pid = config.id, panel = this.getPanelById(pid);
        if (panel) {
            if (panel.instance.state === WidgetState.closed) {
                this.openPanel(panel);
            }
            def.resolve(panel);
        }
        else {
            this.showPanel(config, null, panelOptions);
        }
        return def.promise();
    }
    closeOtherPanelsInTheSameGroup(panel) {
        if (typeof panel === 'string') {
            panel = this.getPanelById(panel);
            if (!panel) {
                return;
            }
        }
        for (let i = 0; i < this.panels.length; i++) {
            if (this.panels[i].instance.isDockable())
                continue;
            if (this.panels[i].instance.gid === panel.instance.gid
                && this.panels[i].instance.id !== panel.instance.id) {
                this.closePanel(this.panels[i]);
            }
        }
    }
    closeAllPanelsInGroup(groupId) {
        for (let i = 0; i < this.panels.length; i++) {
            if (this.panels[i].instance.isDockable())
                continue;
            if (this.panels[i].instance.gid === groupId) {
                this.closePanel(this.panels[i]);
            }
        }
    }
    openPanel(panel) {
        let def = this.commonService.createPromiseDefer();
        if (!panel.instance.started) {
            try {
                this.show(panel);
            }
            catch (err) {
                console.error('fail to startup panel ' + panel.instance.id + '. ' + err.stack);
            }
        }
        if (panel.instance.state === WidgetState.opened) {
            def.resolve(panel);
            return def.promise();
        }
        if (panel.instance.started) {
            panel.instance.setState(WidgetState.opened);
            this.playOpenPanelAnimation(panel).then(() => {
                this._activePanel(panel);
                def.resolve(panel);
            });
        }
        return def.promise();
    }
    closePanel(panel) {
        let def = this.commonService.createPromiseDefer();
        let _panel;
        if (typeof panel === 'string') {
            _panel = this.getPanelById(panel);
        }
        else {
            _panel = panel;
        }
        if (!_panel) {
            def.reject(new Error("panel is null"));
            return def.promise();
        }
        if (_panel.instance.state === WidgetState.closed) {
            def.resolve(_panel);
            return def.promise();
        }
        this.playClosePanelAnimation(_panel).then(() => {
            if (this.activePanel && this.activePanel.instance.id === _panel.instance.id) {
                this.activePanel.instance.onDeActive();
                this.activePanel = null;
            }
            _panel.instance.setState(WidgetState.closed);
            def.resolve(_panel);
        });
        return def.promise();
    }
    minimizePanel(panel) {
        if (typeof panel === 'string') {
            panel = this.getPanelById(panel);
            if (!panel) {
                return;
            }
        }
        if (panel.instance.state === WidgetState.closed) {
            this.openPanel(panel);
        }
        panel.instance.setWindowState(WidgetWindowState.minimized);
        try {
            panel.instance.onMinimize();
        }
        catch (err) {
            console.log(console.error('fail to minimize panel ' + panel.instance.id + '. ' + err.stack));
        }
    }
    maximizePanel(panel) {
        if (typeof panel === 'string') {
            panel = this.getPanelById(panel);
            if (!panel) {
                return;
            }
        }
        if (panel.instance.state === WidgetState.closed) {
            this.openPanel(panel);
        }
        panel.instance.setWindowState(WidgetWindowState.maximized);
        try {
            panel.instance.onMaximize();
        }
        catch (err) {
            console.log(console.error('fail to maximize panel ' + panel.instance.id + '. ' + err.stack));
        }
    }
    normalizePanel(panel) {
        if (typeof panel === 'string') {
            panel = this.getPanelById(panel);
            if (!panel) {
                return;
            }
        }
        if (panel.instance.state === WidgetState.closed) {
            this.openPanel(panel);
        }
        panel.instance.setWindowState(WidgetWindowState.normal);
        try {
            panel.instance.onNormalize();
        }
        catch (err) {
            console.log(console.error('fail to noralize panel ' + panel.instance.id + '. ' + err.stack));
        }
    }
    changeWindowStateTo(panel, state) {
        if (typeof panel === 'string') {
            panel = this.getPanelById(panel);
            if (!panel) {
                return;
            }
        }
        if (state === WidgetWindowState.normal) {
            this.normalizePanel(panel);
        }
        else if (state === WidgetWindowState.minimized) {
            this.minimizePanel(panel);
        }
        else if (state === WidgetWindowState.maximized) {
            this.maximizePanel(panel);
        }
        else {
            console.log('error state: ' + state);
        }
    }
    getPanelById(pid) {
        for (let i = 0; i < this.panels.length; i++) {
            if (this.panels[i].instance.id === pid) {
                return this.panels[i];
            }
        }
    }
    onWindowResize() {
        for (let i = 0; i < this.panels.length; i++) {
            if (this.panels[i].instance.state !== WidgetState.closed &&
                this.panels[i].instance.position.relativeTo !== 'map') {
                this.panels[i].instance.resize();
            }
        }
    }
    onMapResize() {
        for (let i = 0; i < this.panels.length; i++) {
            if (this.panels[i].instance.isDockable()) {
                this.panels[i].instance.resize();
            }
            else {
            }
        }
    }
    destroyPanel(panel) {
        if (typeof panel === 'string') {
            panel = this.getPanelById(panel);
            if (!panel) {
                return;
            }
        }
        if (panel.instance.state !== WidgetState.closed) {
            this.closePanel(panel);
        }
        this._removePanel(panel);
        try {
            panel.destroy();
            console.log('destroy panel [' + panel.instance.id + '].');
        }
        catch (err) {
            console.log(console.error('fail to destroy panel ' + panel.instance.id + '. ' + err.stack));
        }
    }
    destroyAllPanels() {
        let allPanelIds = _.map(this.panels, function (panel) {
            return panel.instance.id;
        });
        _.forEach(allPanelIds, (panelId) => {
            this.destroyPanel(panelId);
        });
        this.panels = [];
    }
    playOpenPanelAnimation(panel) {
        return Promise.resolve(true);
    }
    playClosePanelAnimation(panel) {
        return Promise.resolve(true);
    }
    getPositionOnMobile(panel) {
        if (typeof panel === 'string') {
            panel = this.getPanelById(panel);
            if (!panel) {
                return {};
            }
        }
    }
    _onPanelClick(panel) {
        this._activePanel(panel);
    }
    _activePanel(panel) {
        if (typeof panel === "string") {
            panel = this.getPanelById(panel);
        }
        if (!panel)
            return;
        if (panel.instance.isDockable())
            return;
        if (this.activePanel) {
            if (this.activePanel.instance.id === panel["instance"].id) {
                if (this.activePanel.instance.moveTopOnActive) {
                    this.activePanel.instance.setZIndex("active");
                }
                return;
            }
            if (this.activePanel.instance.state === WidgetState.active) {
                this.activePanel.instance.setState(WidgetState.opened);
                if (this.activePanel.instance.position.zIndex !== 'undefined') {
                    this.activePanel.instance.setZIndex("deactive");
                }
                else {
                    this.activePanel.instance.setZIndex("deactive");
                }
                this.activePanel.instance.onDeActive();
            }
        }
        let aw = this.widgetManager.activeWidget;
        if (aw && aw.instance.state === WidgetState.active && aw.instance.getPanel() !== panel) {
            aw.instance.setState(WidgetState.opened);
            if (aw.instance.inPanel === false) {
                if (aw.instance.position.zIndex !== 'undefined') {
                    aw.instance.setZIndex("deactive");
                }
                else {
                    aw.instance.setZIndex("deactive");
                }
            }
            aw.instance.onDeActive();
            this.widgetManager.activeWidget = null;
        }
        this.activePanel = panel;
        if (this.activePanel.instance.state === WidgetState.active) {
            return;
        }
        this.activePanel.instance.setState(WidgetState.active);
        if (this.activePanel.instance.moveTopOnActive) {
            this.activePanel.instance.setZIndex("active");
        }
        _.forEach(this.panels, (p, index, arr) => {
            if (p.instance.isDockable() == false && p.instance.id != this.activePanel.instance.id) {
                p.instance.setZIndex("deactive");
            }
        });
        this.activePanel.instance.onActive();
    }
    _removePanel(panel) {
        let index = this.panels.indexOf(panel);
        if (index > -1) {
            this.panels.splice(index, 1);
        }
        if (this.activePanel && this.activePanel.instance.id === panel.instance.id) {
            this.activePanel = null;
        }
    }
    _onMoveStart(mover) {
    }
    _onWidgetActived(widget) {
        if (this.activePanel &&
            this.activePanel.instance.state === WidgetState.active &&
            widget.getPanel() !== this.activePanel) {
            this.activePanel.instance.setState(WidgetState.opened);
            if (this.activePanel.instance.position.zIndex !== 'undefined') {
            }
            else {
            }
            this.activePanel.instance.onDeActive();
            this.activePanel = null;
        }
    }
    _loadPanelClass(panelUri) {
    }
    _loadThemeI18N(panelUri) {
    }
    getAllPanels() {
        return this.panels;
    }
}
PanelManagerService.ɵfac = function PanelManagerService_Factory(t) { return new (t || PanelManagerService)(i0.ɵɵinject(i1.AppGlobalConfig), i0.ɵɵinject(i2.CommonService), i0.ɵɵinject(i3.WidgetManagerService), i0.ɵɵinject(i0.ApplicationRef), i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i4.ComponentLoaderService), i0.ɵɵinject(i5.EventEmitterService)); };
PanelManagerService.ɵprov = i0.ɵɵdefineInjectable({ token: PanelManagerService, factory: PanelManagerService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PanelManagerService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.AppGlobalConfig }, { type: i2.CommonService }, { type: i3.WidgetManagerService }, { type: i0.ApplicationRef }, { type: i0.ComponentFactoryResolver }, { type: i4.ComponentLoaderService }, { type: i5.EventEmitterService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtbWFuYWdlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZXBzZ2lzL3NlcnZpY2VzL3BhbmVsLW1hbmFnZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFxQixNQUFNLHVCQUF1QixDQUFDO0FBQzFGLE9BQU8sRUFBRSxVQUFVLEVBQTJFLGtCQUFrQixFQUFxQixNQUFNLGVBQWUsQ0FBQztBQU0zSixPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQzs7Ozs7OztBQWM1QixNQUFNLE9BQU8sbUJBQW1CO0lBb0Q5QixZQUNVLFlBQTZCLEVBQzlCLGFBQTRCLEVBQzVCLGFBQW1DLEVBQ2xDLE1BQXNCLEVBQ3RCLHdCQUFrRCxFQUNsRCxlQUF1QyxFQUN4QyxZQUFpQztRQU5oQyxpQkFBWSxHQUFaLFlBQVksQ0FBaUI7UUFDOUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQ2xDLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3RCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsb0JBQWUsR0FBZixlQUFlLENBQXdCO1FBQ3hDLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQTNCMUMsV0FBTSxHQUFzRCxFQUFFLENBQUM7UUFJL0QsZ0JBQVcsR0FBK0MsSUFBSSxDQUFDO1FBQy9ELFFBQUcsR0FBUSxJQUFJLENBQUM7UUFDaEIsU0FBSSxHQUFRLElBQUksQ0FBQztRQVFqQixrQkFBYSxHQUFZLElBQUksQ0FBQztRQWU1QixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ3hFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FB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O1lBQzFFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQUVELFlBQVksQ0FBQyxLQUFLO0lBRWxCLENBQUM7SUFLRCxnQkFBZ0IsQ0FBQyxNQUFNO1FBQ3JCLElBQUksSUFBSSxDQUFDLFdBQVc7WUFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSyxLQUFLLFdBQVcsQ0FBQyxNQUFNO1lBQ3RELE1BQU0sQ0FBQyxRQUFRLEVBQUUsS0FBSyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFdkQsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLFdBQVcsRUFBRTthQUU5RDtpQkFBTTthQUVOO1lBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDdkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRUQsZUFBZSxDQUFDLFFBQVE7SUFFeEIsQ0FBQztJQUVELGNBQWMsQ0FBQyxRQUFRO0lBRXZCLENBQUM7SUFDRCxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7O3NGQTl0QlUsbUJBQW1COzJEQUFuQixtQkFBbUIsV0FBbkIsbUJBQW1CLG1CQUZsQixNQUFNO3VGQUVQLG1CQUFtQjtjQUgvQixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBXaWRnZXRTdGF0ZSwgV2lkZ2V0V2luZG93U3RhdGUsIFdpZGdldE9wZW5PcHRpb25zIH0gZnJvbSAnLi4vbW9kZWxzL2Jhc2Utd2lkZ2V0JztcbmltcG9ydCB7IEluamVjdGFibGUsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgQ29tcG9uZW50UmVmLCBFbWJlZGRlZFZpZXdSZWYsIEFwcGxpY2F0aW9uUmVmLCBSZWZsZWN0aXZlSW5qZWN0b3IsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBpbXBvcnQgeyBPdmVybGF5LCBPdmVybGF5Q29uZmlnLCBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuLy8gaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG4vLyBpbXBvcnQgeyBDb21wb25lbnRMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi9jb21wb25lbnQtbG9hZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tbW9uU2VydmljZSB9IGZyb20gJy4vY29tbW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgV2lkZ2V0TWFuYWdlclNlcnZpY2UgfSBmcm9tICcuL3dpZGdldC1tYW5hZ2VyLnNlcnZpY2UnO1xuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgeyBQYW5lbE9wdGlvbnMgfSBmcm9tICcuLi9tb2RlbHMvYmFzZS1wYW5lbCc7XG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi9jb21wb25lbnQtbG9hZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXBwR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi4vbW9kZWxzL2FwcC1jb25maWcnO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyU2VydmljZSB9IGZyb20gJy4vZXZlbnQtZW1pdHRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9uU2NyZWVuV2lkZ2V0UGFuZWxDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL29uLXNjcmVlbi13aWRnZXQtcGFuZWwvb24tc2NyZWVuLXdpZGdldC1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmFzZVdpZGdldENvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvYmFzZS13aWRnZXQvYmFzZS13aWRnZXQuY29tcG9uZW50JztcblxuLyoqXG4gKiBjcmVhdGUgYnkgcnVpciAxOTEwMTQgIHBhbmVsTWFuYWdlci5qc1xuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBQYW5lbE1hbmFnZXJTZXJ2aWNlIHtcblxuICAvLyBwcml2YXRlIF9vdmVybGF5Q29ubmVjdFJlZjogT3ZlcmxheVJlZjtcbiAgLy8gY29uc3RydWN0b3IocHVibGljIG92ZXJsYXk6IE92ZXJsYXksIHB1YmxpYyBjY2M6IENvbXBvbmVudExvYWRlclNlcnZpY2UpIHtcblxuICAvLyB9XG4gIC8vIGdsb2JhbE92ZXJsYXlQb3NpdGlvbiA9IDA7XG4gIC8vIG9wZW5QYW5lbCh2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmKSB7XG4gIC8vICAgY29uc3Qgc3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXkucG9zaXRpb24oKS5jb25uZWN0ZWRUbyhcbiAgLy8gICAgIHZpZXdDb250YWluZXIuZWxlbWVudC5uYXRpdmVFbGVtZW50LCB7XG4gIC8vICAgICBvcmlnaW5YOiAnZW5kJyxcbiAgLy8gICAgIG9yaWdpblk6ICd0b3AnLFxuICAvLyAgIH0ge1xuICAvLyAgICAgb3ZlcmxheVg6ICdzdGFydCcsXG4gIC8vICAgICBvdmVybGF5WTogJ3RvcCdcbiAgLy8gICB9XG5cbiAgLy8gICApO1xuICAvLyAgIHN0cmF0ZWd5LndpdGhMb2NrZWRQb3NpdGlvbih0cnVlKTtcbiAgLy8gICBjb25zdCBjb25maWcgPSBuZXcgT3ZlcmxheUNvbmZpZyh7IHBvc2l0aW9uU3RyYXRlZ3k6IHN0cmF0ZWd5IH0pO1xuICAvLyAgIGNvbmZpZy5zY3JvbGxTdHJhdGVneSA9IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLnJlcG9zaXRpb24oKTtcbiAgLy8gICB0aGlzLl9vdmVybGF5Q29ubmVjdFJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUoY29uZmlnKTtcbiAgLy8gICB0aGlzLl9vdmVybGF5Q29ubmVjdFJlZi5hdHRhY2gobmV3IENvbXBvbmVudFBvcnRhbChPblNjcmVlbldpZGdldFBhbmVsQ29tcG9uZW50LCB2aWV3Q29udGFpbmVyKSk7XG4gIC8vIH1cbiAgLy8gY2xvc2VQYW5lbCgpIHtcbiAgLy8gICBpZiAodGhpcy5fb3ZlcmxheUNvbm5lY3RSZWYgJiYgdGhpcy5fb3ZlcmxheUNvbm5lY3RSZWYuaGFzQXR0YWNoZWQoKSkge1xuICAvLyAgICAgdGhpcy5fb3ZlcmxheUNvbm5lY3RSZWYuZGlzcG9zZSgpO1xuICAvLyAgIH1cbiAgLy8gfVxuICAvKipcbiAgICog5omA5pyJ5omT5byA55qEcGFuZWxcbiAgICovXG4gIHBhbmVsczogQXJyYXk8Q29tcG9uZW50UmVmPE9uU2NyZWVuV2lkZ2V0UGFuZWxDb21wb25lbnQ+PiA9IFtdO1xuICAvKipcbiAgICog5b2T5YmN5r+A5rS755qEcGFuZWxcbiAgICovXG4gIGFjdGl2ZVBhbmVsOiBDb21wb25lbnRSZWY8T25TY3JlZW5XaWRnZXRQYW5lbENvbXBvbmVudD4gPSBudWxsO1xuICBtYXA6IGFueSA9IG51bGw7XG4gIHZpZXc6IGFueSA9IG51bGw7XG4gIC8qKlxuICAgKiBcbiAgICovXG4gIHBhbmVsQ29udGFpbmVyOiBFbGVtZW50O1xuICAvKipcbiAgICogcGFuZWzlrrnlmajliqDovb3liLBtYXDlrrnlmajkuK1cbiAgICovXG4gIHBhbmVsQWRkVG9NYXA6IGJvb2xlYW4gPSB0cnVlO1xuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSBjb21tb25TZXJ2aWNlIFxuICAgKiBAcGFyYW0gd2lkZ2V0TWFuYWdlciBcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZ2xvYmFsUGFyYW1zOiBBcHBHbG9iYWxDb25maWcsXG4gICAgcHVibGljIGNvbW1vblNlcnZpY2U6IENvbW1vblNlcnZpY2UsXG4gICAgcHVibGljIHdpZGdldE1hbmFnZXI6IFdpZGdldE1hbmFnZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgYXBwUmVmOiBBcHBsaWNhdGlvblJlZixcbiAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgY29tcG9uZW50TG9hZGVyOiBDb21wb25lbnRMb2FkZXJTZXJ2aWNlLFxuICAgIHB1YmxpYyBldmVudFNlcnZpY2U6IEV2ZW50RW1pdHRlclNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5ldmVudFNlcnZpY2UucnNzLm9uKHRoaXMuZXZlbnRTZXJ2aWNlLl9jcmVhdGVQYW5lbENvbnRhaW5lciwgKGVsZSkgPT4ge1xuICAgICAgdGhpcy5jcmVhdGVQYW5lbENvbnRhaW5lcihlbGUpOyAvL+ebtOaOpeWGmeWxheeEtuS4jeaJp+ihjO+8n++8n++8n1xuICAgIH0pO1xuICAgIHRoaXMuZXZlbnRTZXJ2aWNlLnJzcy5vbih0aGlzLmV2ZW50U2VydmljZS5fbWFwUG9zaXRpb25DaGFuZ2VkLCAocG9zKSA9PiB7XG4gICAgICB0aGlzLm9uTWFwUmVzaXplKCk7XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0gY29tcG9uZW50IFxuICAgKiBAcGFyYW0gcGFyYW1zIFxuICAgKi9cbiAgcHJpdmF0ZSBjcmVhdGU8VD4oY29tcG9uZW50OiBDb21wb25lbnRUeXBlPFQ+LCBwYXJhbXM6IGFueSkge1xuICAgIGxldCBpbnB1dHMgPSB7fTtcbiAgICBpZiAocGFyYW1zKSB7XG4gICAgICBpbnB1dHMgPSBwYXJhbXM7XG4gICAgfVxuICAgIGxldCBpbnB1dFByb3ZpZGVycyA9IE9iamVjdC5rZXlzKGlucHV0cykubWFwKChpbnB1dE5hbWUpID0+IHtcbiAgICAgIHJldHVybiB7IHByb3ZpZGU6IGlucHV0TmFtZSwgdXNlVmFsdWU6IGlucHV0c1tpbnB1dE5hbWVdIH07XG4gICAgfSk7XG5cbiAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50KTtcbiAgICBjb25zdCBjb21wUmVmID0gZmFjdG9yeS5jcmVhdGUoUmVmbGVjdGl2ZUluamVjdG9yLnJlc29sdmVBbmRDcmVhdGUoaW5wdXRQcm92aWRlcnMpKTtcbiAgICByZXR1cm4gY29tcFJlZjtcbiAgfVxuXG4gIC8qKlxuICAgKiBcbiAgICovXG4gIHByaXZhdGUgY3JlYXRlUGFuZWxDb250YWluZXIoZWxlTWFwQ29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xuICAgIC8vIOWuueWZqFxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNzcGFuZWxfY29udGFpbmVyXCIpO1xuICAgIGlmIChjb250YWluZXIgPT0gbnVsbCkge1xuICAgICAgY29udGFpbmVyID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb250YWluZXIuY2xhc3NOYW1lID0gXCJzc3BhbmVsX2NvbnRhaW5lclwiO1xuICAgICAgaWYgKHRoaXMuY29tbW9uU2VydmljZS5pc01vYmlsZU5vdFRhYmxldCgpKSB7XG4gICAgICAgIC8vdGhpcy5jb21wb25lbnRMb2FkZXIudmlld0NvbnRhaW5lckluSG9tZS5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnRcbiAgICAgICAgY29uc3QgaW9uQXBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlvbi1hcHBcIik7XG4gICAgICAgIGlmIChpb25BcHApIHtcbiAgICAgICAgICBpb25BcHAuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgICB9XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLnBhbmVsQWRkVG9NYXApIHtcbiAgICAgICAgICBpZiAoZWxlTWFwQ29udGFpbmVyKSB7XG4gICAgICAgICAgICBlbGVNYXBDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnBhbmVsQ29udGFpbmVyID0gY29udGFpbmVyO1xuICB9XG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIHBhbmVsIFxuICAgKi9cbiAgcHJpdmF0ZSBzaG93KHBhbmVsOiBDb21wb25lbnRSZWY8T25TY3JlZW5XaWRnZXRQYW5lbENvbXBvbmVudD4pIHtcbiAgICBpZiAoIXBhbmVsLmluc3RhbmNlLnN0YXJ0ZWQpIHtcbiAgICAgIGlmIChwYW5lbC5pbnN0YW5jZS5pc0RvY2thYmxlKCkpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnRMb2FkZXIuc2hvd0luSG9tZShwYW5lbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBhbmVsQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29tbW9uU2VydmljZS5nZXRDb21wb25lbnRSb290Tm9kZShwYW5lbCkpO1xuICAgICAgICAvLyDliqDlhaVhbmd1bGFy6ISP5qOA5p+lXG4gICAgICAgIHRoaXMuYXBwUmVmLmF0dGFjaFZpZXcocGFuZWwuaG9zdFZpZXcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIG1hcCDkuoznu7TlnLDlm77miJbkuInnu7TlnLrmma9cbiAgICovXG4gIHNldE1hcChtYXApIHtcbiAgICBpZiAodGhpcy5nbG9iYWxQYXJhbXMubWFwQ29uZmlnLmlzM0QgPT09IHRydWUpIHtcbiAgICAgIHRoaXMudmlldyA9IG1hcDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tYXAgPSBtYXA7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiDojrflj5ZwYW5lbOe7hOS7tnVyaVxuICAgKiBAcGFyYW0gd2lkZ2V0Q29uZmlnIFxuICAgKi9cbiAgcHJpdmF0ZSBfZmluZFBhbmVsVXJpKHdpZGdldENvbmZpZzogYW55KSB7XG4gICAgY29uc3QgX3VyaV9kZWZhdWx0OiBzdHJpbmcgPSBcImVwc2dpcy1vbi1zY3JlZW4td2lkZ2V0LXBhbmVsXCI7XG4gICAgaWYgKHRoaXMuY29tbW9uU2VydmljZS5pc01vYmlsZU5vdFRhYmxldCgpKSB7XG4gICAgICAvL+ajgOafpeaYr+WQpuacieWBnOmdoFvlt6blgZzpnaA944CLZHJhd2Vy77yM5Y+z5YGc6Z2gPeOAi2RyYXdlclJpZ2h077yM5bqV6YOo5YGc6Z2gPeOAi2FjdGlvbl0gXG4gICAgICBpZiAod2lkZ2V0Q29uZmlnLnBhbmVsKSB7XG4gICAgICAgIHN3aXRjaCAod2lkZ2V0Q29uZmlnLnBhbmVsLmRvY2spIHtcbiAgICAgICAgICBjYXNlIFwibGVmdFwiOiByZXR1cm4gXCJlcHNnaXMtbW9iaWxlLWRyYXdlci1wYW5lbFwiO1xuICAgICAgICAgIGNhc2UgXCJyaWdodFwiOiByZXR1cm4gXCJlcHNnaXMtbW9iaWxlLWRyYXdlci1yaWdodC1wYW5lbFwiO1xuICAgICAgICAgIGNhc2UgXCJib3R0b21cIjogcmV0dXJuIFwiZXBzZ2lzLW1vYmlsZS1hY3Rpb24tcGFuZWxcIjtcbiAgICAgICAgfVxuICAgICAgICAvL3VyaSDkuYvliY3nmoTphY3nva7mlrnlvI/vvIzlgJLmmK/kuZ/lj6/ku6XkuI3opoFcbiAgICAgICAgc3dpdGNoICh3aWRnZXRDb25maWcucGFuZWwudXJpKSB7XG4gICAgICAgICAgY2FzZSBcImVwc2dpcy1kb2NrYWJsZS1wYW5lbC1hdC1sZWZ0XCI6XG4gICAgICAgICAgICByZXR1cm4gXCJlcHNnaXMtbW9iaWxlLWRyYXdlci1wYW5lbFwiXG4gICAgICAgICAgY2FzZSBcImVwc2dpcy1kb2NrYWJsZS1wYW5lbC1hdC1ib3R0b21cIjpcbiAgICAgICAgICAgIHJldHVybiBcImVwc2dpcy1tb2JpbGUtYWN0aW9uLXBhbmVsXCI7XG4gICAgICAgICAgY2FzZSBcImVwc2dpcy1kb2NrYWJsZS1wYW5lbC1hdC1yaWdodFwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiZXBzZ2lzLW1vYmlsZS1kcmF3ZXItcmlnaHQtcGFuZWxcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHdpZGdldENvbmZpZy5tb2JpbGUgJiYgd2lkZ2V0Q29uZmlnLm1vYmlsZS5tb2RlKSB7XG4gICAgICAgIHN3aXRjaCAod2lkZ2V0Q29uZmlnLm1vYmlsZS5tb2RlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICBjYXNlIFwiZHJhd2VyXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJlcHNnaXMtbW9iaWxlLWRyYXdlci1wYW5lbFwiO1xuICAgICAgICAgIGNhc2UgXCJkcmF3ZXJyaWdodFwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiZXBzZ2lzLW1vYmlsZS1kcmF3ZXItcmlnaHQtcGFuZWxcIjtcbiAgICAgICAgICBjYXNlIFwibW9kYWxcIjpcbiAgICAgICAgICAgIHJldHVybiBcImVwc2dpcy1tb2JpbGUtbW9kYWwtcGFuZWxcIjtcbiAgICAgICAgICBjYXNlIFwicG9wdXBcIjpcbiAgICAgICAgICAgIHJldHVybiBcImVwc2dpcy1tb2JpbGUtcG9wdXAtcGFuZWxcIjtcbiAgICAgICAgICBjYXNlIFwicG9wb3ZlclwiOlxuICAgICAgICAgICAgcmV0dXJuIF91cmlfZGVmYXVsdDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIFwiZXBzZ2lzLW1vYmlsZS1hY3Rpb24tcGFuZWxcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHdpZGdldENvbmZpZy5wYW5lbCkge1xuICAgICAgICBzd2l0Y2ggKHdpZGdldENvbmZpZy5wYW5lbC5kb2NrKSB7XG4gICAgICAgICAgY2FzZSBcImxlZnRcIjogcmV0dXJuIFwiZXBzZ2lzLWRvY2thYmxlLXBhbmVsLWF0LWxlZnRcIjtcbiAgICAgICAgICBjYXNlIFwicmlnaHRcIjogcmV0dXJuIFwiZXBzZ2lzLWRvY2thYmxlLXBhbmVsLWF0LXJpZ2h0XCI7XG4gICAgICAgICAgY2FzZSBcImJvdHRvbVwiOiByZXR1cm4gXCJlcHNnaXMtZG9ja2FibGUtcGFuZWwtYXQtYm90dG9tXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdpZGdldENvbmZpZy5wYW5lbC51cmkpIHtcbiAgICAgICAgICByZXR1cm4gd2lkZ2V0Q29uZmlnLnBhbmVsLnVyaTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIF91cmlfZGVmYXVsdDtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0gY29uZmlnIFxuICAgKiBAcGFyYW0gd2lkZ2V0XG4gICAqIEBwYXJhbSBvcHRpb25zIFxuICAgKi9cbiAgc2hvd1BhbmVsKGNvbmZpZzogYW55LCB3aWRnZXQ/OiBDb21wb25lbnRSZWY8QmFzZVdpZGdldENvbXBvbmVudD4sIG9wdGlvbnM/OiBQYW5lbE9wdGlvbnMsIG9wZW5PcHRpb25zPzogV2lkZ2V0T3Blbk9wdGlvbnMpOiBQcm9taXNlPENvbXBvbmVudFJlZjxPblNjcmVlbldpZGdldFBhbmVsQ29tcG9uZW50Pj4ge1xuICAgIGxldCBkZWYgPSB0aGlzLmNvbW1vblNlcnZpY2UuY3JlYXRlUHJvbWlzZURlZmVyKCk7XG4gICAgbGV0IHBpZCA9IGNvbmZpZy5pZCArICdfcGFuZWwnLFxuICAgICAgcGFuZWwgPSB0aGlzLmdldFBhbmVsQnlJZChwaWQpO1xuICAgIGlmIChwYW5lbCkge1xuICAgICAgaWYgKHBhbmVsLmluc3RhbmNlLnN0YXRlID09PSBXaWRnZXRTdGF0ZS5jbG9zZWQpIHtcbiAgICAgICAgaWYgKG9wZW5PcHRpb25zKSB7XG4gICAgICAgICAgcGFuZWwuaW5zdGFuY2UucmVxUGFyYSA9IG9wZW5PcHRpb25zLnBhcmFtO1xuICAgICAgICAgIGlmIChwYW5lbC5pbnN0YW5jZS53aWRnZXQpIHtcbiAgICAgICAgICAgIHBhbmVsLmluc3RhbmNlLndpZGdldC5pbnN0YW5jZS5yZXFQYXJhID0gb3Blbk9wdGlvbnMucGFyYW07IC8vY29uZmlnLnJlcVBhcmE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMub3BlblBhbmVsKHBhbmVsKTtcbiAgICAgIH1cbiAgICAgIGRlZi5yZXNvbHZlKHBhbmVsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgX2NvbXAgPSB0aGlzLmNvbXBvbmVudExvYWRlci5maW5kQ29tcG9uZW50KHRoaXMuX2ZpbmRQYW5lbFVyaShjb25maWcpKTtcbiAgICAgICAgaWYgKCFfY29tcCkge1xuICAgICAgICAgIGNvbnN0IF9tc2cgPSBgbm90IGZpbmQgcGFuZWwgWyR7Y29uZmlnLnBhbmVsLnVyaX1dYDtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKF9tc2cpO1xuICAgICAgICAgIHJldHVybiBkZWYucmVqZWN0KG5ldyBFcnJvcihfbXNnKSk7XG4gICAgICAgIH1cbiAgICAgICAgcGFuZWwgPSB0aGlzLmNvbXBvbmVudExvYWRlci5jcmVhdGVDb21wb25lbnQoX2NvbXApO1xuICAgICAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgICAgICBvcHRpb25zID0ge307XG4gICAgICAgICAgb3B0aW9ucy5pZCA9IHBpZDtcbiAgICAgICAgICBvcHRpb25zLnRpdGxlID0gY29uZmlnLmxhYmVsO1xuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnMuYnV0dG9uTWF4aW1pemUgPSAhKGNvbmZpZy5tYXhpbWl6YWJsZSA9PT0gZmFsc2UpO1xuICAgICAgICBvcHRpb25zLmJ1dHRvbkNvbGxhcHNlID0gIShjb25maWcuY29sbGFwc2libGUgPT09IGZhbHNlKTtcbiAgICAgICAgb3B0aW9ucy5tb2RhbCA9IGNvbmZpZy5tb2RhbCA9PT0gdHJ1ZTtcbiAgICAgICAgaWYgKG9wZW5PcHRpb25zICYmIG9wZW5PcHRpb25zLnBhbmVsKSB7XG4gICAgICAgICAgb3B0aW9ucyA9IF8ubWVyZ2Uob3B0aW9ucywgb3Blbk9wdGlvbnMucGFuZWwpO1xuICAgICAgICB9XG4gICAgICAgIHBhbmVsLmluc3RhbmNlLmxhYmVsID0gcGFuZWwuaW5zdGFuY2UudGl0bGUgPSBwYW5lbC5pbnN0YW5jZS50b29sdGlwID0gY29uZmlnLmxhYmVsO1xuICAgICAgICBwYW5lbC5pbnN0YW5jZS53aWRnZXRDb25maWcgPSBjb25maWc7XG4gICAgICAgIGlmICh0aGlzLmdsb2JhbFBhcmFtcy5tYXBDb25maWcuaXMzRCkge1xuICAgICAgICAgIHBhbmVsLmluc3RhbmNlLnZpZXcgPSB0aGlzLnZpZXc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFuZWwuaW5zdGFuY2UubWFwID0gdGhpcy5tYXA7XG4gICAgICAgIH1cbiAgICAgICAgcGFuZWwuaW5zdGFuY2UuaWQgPSBwaWQ7XG4gICAgICAgIHBhbmVsLmluc3RhbmNlLmdpZCA9IGNvbmZpZy5naWQ7XG4gICAgICAgIGlmIChvcGVuT3B0aW9ucykge1xuICAgICAgICAgIHBhbmVsLmluc3RhbmNlLnJlcVBhcmEgPSBvcGVuT3B0aW9ucy5wYXJhbTtcbiAgICAgICAgfVxuICAgICAgICBwYW5lbC5pbnN0YW5jZS5zZXRPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICBwYW5lbC5pbnN0YW5jZS5zZXRQb3NpdGlvbihjb25maWcucG9zaXRpb24pO1xuICAgICAgICBpZiAod2lkZ2V0KSB7XG4gICAgICAgICAgcGFuZWwuaW5zdGFuY2Uuc2V0V2lkZ2V0KHdpZGdldCk7XG4gICAgICAgICAgcGFuZWwuaW5zdGFuY2Uud2lkZ2V0Lmluc3RhbmNlLnJlcVBhcmEgPSBvcGVuT3B0aW9ucy5wYXJhbTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZygncGFuZWwgWycgKyBwaWQgKyAnXSBjcmVhdGVkLicpO1xuICAgICAgICB0aGlzLm9wZW5QYW5lbChwYW5lbCk7XG4gICAgICAgIHRoaXMucGFuZWxzLnB1c2gocGFuZWwpO1xuICAgICAgICBkZWYucmVzb2x2ZShwYW5lbCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZygnY3JlYXRlIHBhbmVsIGVycm9yOiAnICsgZXJyb3IgKyAnLCBwYW5lbElkOiAnICsgcGlkKTtcbiAgICAgICAgZGVmLnJlamVjdChlcnJvcik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRlZi5wcm9taXNlKCk7XG4gIH1cbiAgLyoqXG4gICAqIOaJk+W8gHBhbmVs77yI6Z2Z5oCB5YaF5a655oiW572R6aG15Zyw5Z2A77yJXG4gICAqIEBwYXJhbSAgcGFuZWxPcHRpb25zIHBhbmVs55qE5Y+C5pWw6YWN572uXG4gICAqICB7XG4gICAgICAgICAgaWQ6IFwic3NfcGFuZWxcIixcbiAgICAgICAgICB0aXRsZTogXCJTUyBQYW5lbFwiLFxuICAgICAgICAgIG1vZGFsOiBmYWxzZVxuICAgICAgICAgIGJ1dHRvbnNQb3NpdGlvbjogXCJyaWdodFwiXG4gICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlXG4gICAgICAgICAgcmVzaXphYmxlOiB0cnVlXG4gICAgICAgICAgc3RhdHVzQmFyOiBmYWxzZSxcbiAgICAgICAgICB0b3A6IFwiYXV0b1wiLFxuICAgICAgICAgIGxlZnQ6IFwiYXV0b1wiLFxuICAgICAgICAgIHJpZ2h0OiBcImF1dG9cIixcbiAgICAgICAgICBib3R0b206IFwiYXV0b1wiLFxuICAgICAgICAgIGhlaWdodDogMjAwLFxuICAgICAgICAgIHdpZHRoOiA0MDAsXG4gICAgICAgICAgbWF4SGVpZ2h0OiB1bmRlZmluZWQsXG4gICAgICAgICAgbWF4V2lkdGg6IHVuZGVmaW5lZCxcbiAgICAgICAgICBtaW5IZWlnaHQ6IDEwMCxcbiAgICAgICAgICBtaW5XaWR0aDogMjAwLFxuICAgICAgICAgIGRvY2tTaWRlOiBcIlwiLCAvL2JvdHRvbVxuICAgICAgICAgIGlubmVySHRtbDpcIlwiLC8v6Z2Z5oCB5YaF5a65XG4gICAgICAgICAgdXJsOlwiXCIvL+iuvue9rlVSTOaXtu+8jOW1jOWll2lmcmFtZVxuICAgICAgfVxuICAgKi9cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0gcGFuZWxPcHRpb25zIFxuICAgKi9cbiAgc2hvd1BhbmVsTm90V2lkZ2V0KHBhbmVsT3B0aW9uczogUGFuZWxPcHRpb25zKSB7XG4gICAgbGV0IHBvc2l0aW9uID0ge1xuICAgICAgd2lkdGg6IHBhbmVsT3B0aW9ucy53aWR0aCArICdweCcsXG4gICAgICBoZWlnaHQ6IHBhbmVsT3B0aW9ucy5oZWlnaHQgKyAncHgnLFxuICAgICAgcmVsYXRpdmVUbzogcGFuZWxPcHRpb25zLnJlbGF0aXZlVG8sXG4gICAgfTtcbiAgICBsZXQgY29uZmlnID0ge1xuICAgICAgaWQ6IHBhbmVsT3B0aW9ucy5pZCA/IHBhbmVsT3B0aW9ucy5pZCA6IFwic3NfcGFuZWxcIixcbiAgICAgIGxhYmVsOiBwYW5lbE9wdGlvbnMudGl0bGUgPyBwYW5lbE9wdGlvbnMudGl0bGUgOiBcIlNTIFBhbmVsXCIsXG4gICAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4gICAgICBkb2NrU2lkZTpwYW5lbE9wdGlvbnMuZG9ja1NpZGUsXG4gICAgICBwYW5lbDoge1xuICAgICAgICB1cmk6ICdlcHNnaXMtaWZyYW1lLXBhbmVsJyAgICBcbiAgICAgIH0sXG4gICAgICByZXNpemFibGU6cGFuZWxPcHRpb25zLnJlc2l6YWJsZSxcbiAgICAgIGRyYWdnYWJsZTpwYW5lbE9wdGlvbnMuZHJhZ2dhYmxlLFxuICAgICAgZ2lkOiBcInBhbmVsT2ZOb3RXaWRnZXRcIlxuICAgIH07XG4gICAgdGhpcy5jbG9zZUFsbFBhbmVsc0luR3JvdXAoY29uZmlnLmdpZCk7XG4gICAgbGV0IGRlZiA9IHRoaXMuY29tbW9uU2VydmljZS5jcmVhdGVQcm9taXNlRGVmZXIoKTtcbiAgICBsZXQgcGlkID0gY29uZmlnLmlkLFxuICAgICAgcGFuZWwgPSB0aGlzLmdldFBhbmVsQnlJZChwaWQpO1xuICAgIGlmIChwYW5lbCkge1xuICAgICAgaWYgKHBhbmVsLmluc3RhbmNlLnN0YXRlID09PSBXaWRnZXRTdGF0ZS5jbG9zZWQpIHtcbiAgICAgICAgdGhpcy5vcGVuUGFuZWwocGFuZWwpO1xuICAgICAgfVxuICAgICAgZGVmLnJlc29sdmUocGFuZWwpO1xuICAgIH0gZWxzZSB7XG5cbiAgICAgIHRoaXMuc2hvd1BhbmVsKGNvbmZpZywgbnVsbCwgcGFuZWxPcHRpb25zKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlZi5wcm9taXNlKCk7XG4gIH1cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0gcGFuZWwgXG4gICAqL1xuICBjbG9zZU90aGVyUGFuZWxzSW5UaGVTYW1lR3JvdXAocGFuZWw6IHN0cmluZyB8IENvbXBvbmVudFJlZjxPblNjcmVlbldpZGdldFBhbmVsQ29tcG9uZW50Pikge1xuICAgIGlmICh0eXBlb2YgcGFuZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICBwYW5lbCA9IHRoaXMuZ2V0UGFuZWxCeUlkKHBhbmVsKTtcbiAgICAgIGlmICghcGFuZWwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wYW5lbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLnBhbmVsc1tpXS5pbnN0YW5jZS5pc0RvY2thYmxlKCkpIGNvbnRpbnVlO1xuICAgICAgaWYgKHRoaXMucGFuZWxzW2ldLmluc3RhbmNlLmdpZCA9PT0gcGFuZWwuaW5zdGFuY2UuZ2lkXG4gICAgICAgICYmIHRoaXMucGFuZWxzW2ldLmluc3RhbmNlLmlkICE9PSBwYW5lbC5pbnN0YW5jZS5pZCkge1xuICAgICAgICB0aGlzLmNsb3NlUGFuZWwodGhpcy5wYW5lbHNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSBncm91cElkIFxuICAgKi9cbiAgY2xvc2VBbGxQYW5lbHNJbkdyb3VwKGdyb3VwSWQ6IHN0cmluZykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wYW5lbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLnBhbmVsc1tpXS5pbnN0YW5jZS5pc0RvY2thYmxlKCkpIGNvbnRpbnVlO1xuICAgICAgaWYgKHRoaXMucGFuZWxzW2ldLmluc3RhbmNlLmdpZCA9PT0gZ3JvdXBJZCkge1xuXG4gICAgICAgIHRoaXMuY2xvc2VQYW5lbCh0aGlzLnBhbmVsc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIHBhbmVsIFxuICAgKi9cbiAgb3BlblBhbmVsKHBhbmVsOiBDb21wb25lbnRSZWY8T25TY3JlZW5XaWRnZXRQYW5lbENvbXBvbmVudD4pIHsvLyB8IHN0cmluZ1xuICAgIGxldCBkZWYgPSB0aGlzLmNvbW1vblNlcnZpY2UuY3JlYXRlUHJvbWlzZURlZmVyKCk7XG4gICAgaWYgKCFwYW5lbC5pbnN0YW5jZS5zdGFydGVkKSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLnNob3cocGFuZWwpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2ZhaWwgdG8gc3RhcnR1cCBwYW5lbCAnICsgcGFuZWwuaW5zdGFuY2UuaWQgKyAnLiAnICsgZXJyLnN0YWNrKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocGFuZWwuaW5zdGFuY2Uuc3RhdGUgPT09IFdpZGdldFN0YXRlLm9wZW5lZCkge1xuICAgICAgZGVmLnJlc29sdmUocGFuZWwpO1xuICAgICAgcmV0dXJuIGRlZi5wcm9taXNlKCk7XG4gICAgfVxuICAgIGlmIChwYW5lbC5pbnN0YW5jZS5zdGFydGVkKSB7XG4gICAgICBwYW5lbC5pbnN0YW5jZS5zZXRTdGF0ZShXaWRnZXRTdGF0ZS5vcGVuZWQpO1xuICAgICAgdGhpcy5wbGF5T3BlblBhbmVsQW5pbWF0aW9uKHBhbmVsKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5fYWN0aXZlUGFuZWwocGFuZWwpO1xuICAgICAgICBkZWYucmVzb2x2ZShwYW5lbCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGRlZi5wcm9taXNlKCk7XG4gIH1cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0gcGFuZWwgXG4gICAqL1xuICBjbG9zZVBhbmVsKHBhbmVsOiBDb21wb25lbnRSZWY8T25TY3JlZW5XaWRnZXRQYW5lbENvbXBvbmVudD4gfCBzdHJpbmcpIHtcbiAgICBsZXQgZGVmID0gdGhpcy5jb21tb25TZXJ2aWNlLmNyZWF0ZVByb21pc2VEZWZlcigpO1xuICAgIGxldCBfcGFuZWw6IENvbXBvbmVudFJlZjxPblNjcmVlbldpZGdldFBhbmVsQ29tcG9uZW50PjtcbiAgICBpZiAodHlwZW9mIHBhbmVsID09PSAnc3RyaW5nJykge1xuICAgICAgX3BhbmVsID0gdGhpcy5nZXRQYW5lbEJ5SWQocGFuZWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBfcGFuZWwgPSA8Q29tcG9uZW50UmVmPE9uU2NyZWVuV2lkZ2V0UGFuZWxDb21wb25lbnQ+PnBhbmVsO1xuICAgIH1cbiAgICBpZiAoIV9wYW5lbCkge1xuICAgICAgZGVmLnJlamVjdChuZXcgRXJyb3IoXCJwYW5lbCBpcyBudWxsXCIpKTtcbiAgICAgIHJldHVybiBkZWYucHJvbWlzZSgpO1xuICAgIH1cbiAgICBpZiAoX3BhbmVsLmluc3RhbmNlLnN0YXRlID09PSBXaWRnZXRTdGF0ZS5jbG9zZWQpIHtcbiAgICAgIGRlZi5yZXNvbHZlKF9wYW5lbCk7XG4gICAgICByZXR1cm4gZGVmLnByb21pc2UoKTtcbiAgICB9XG4gICAgdGhpcy5wbGF5Q2xvc2VQYW5lbEFuaW1hdGlvbihfcGFuZWwpLnRoZW4oKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuYWN0aXZlUGFuZWwgJiYgdGhpcy5hY3RpdmVQYW5lbC5pbnN0YW5jZS5pZCA9PT0gX3BhbmVsLmluc3RhbmNlLmlkKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlUGFuZWwuaW5zdGFuY2Uub25EZUFjdGl2ZSgpO1xuICAgICAgICB0aGlzLmFjdGl2ZVBhbmVsID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIF9wYW5lbC5pbnN0YW5jZS5zZXRTdGF0ZShXaWRnZXRTdGF0ZS5jbG9zZWQpO1xuICAgICAgZGVmLnJlc29sdmUoX3BhbmVsKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZGVmLnByb21pc2UoKTtcbiAgfVxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSBwYW5lbCBcbiAgICovXG4gIG1pbmltaXplUGFuZWwocGFuZWw6IENvbXBvbmVudFJlZjxPblNjcmVlbldpZGdldFBhbmVsQ29tcG9uZW50PiB8IHN0cmluZykge1xuICAgIGlmICh0eXBlb2YgcGFuZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICBwYW5lbCA9IHRoaXMuZ2V0UGFuZWxCeUlkKHBhbmVsKTtcbiAgICAgIGlmICghcGFuZWwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwYW5lbC5pbnN0YW5jZS5zdGF0ZSA9PT0gV2lkZ2V0U3RhdGUuY2xvc2VkKSB7XG4gICAgICB0aGlzLm9wZW5QYW5lbChwYW5lbCk7XG4gICAgfVxuXG4gICAgcGFuZWwuaW5zdGFuY2Uuc2V0V2luZG93U3RhdGUoV2lkZ2V0V2luZG93U3RhdGUubWluaW1pemVkKTtcblxuICAgIHRyeSB7XG4gICAgICBwYW5lbC5pbnN0YW5jZS5vbk1pbmltaXplKCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhjb25zb2xlLmVycm9yKCdmYWlsIHRvIG1pbmltaXplIHBhbmVsICcgKyBwYW5lbC5pbnN0YW5jZS5pZCArICcuICcgKyBlcnIuc3RhY2spKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0gcGFuZWwgXG4gICAqL1xuICBtYXhpbWl6ZVBhbmVsKHBhbmVsOiBDb21wb25lbnRSZWY8T25TY3JlZW5XaWRnZXRQYW5lbENvbXBvbmVudD4gfCBzdHJpbmcpIHtcbiAgICBpZiAodHlwZW9mIHBhbmVsID09PSAnc3RyaW5nJykge1xuICAgICAgcGFuZWwgPSB0aGlzLmdldFBhbmVsQnlJZChwYW5lbCk7XG4gICAgICBpZiAoIXBhbmVsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocGFuZWwuaW5zdGFuY2Uuc3RhdGUgPT09IFdpZGdldFN0YXRlLmNsb3NlZCkge1xuICAgICAgdGhpcy5vcGVuUGFuZWwocGFuZWwpO1xuICAgIH1cblxuICAgIHBhbmVsLmluc3RhbmNlLnNldFdpbmRvd1N0YXRlKFdpZGdldFdpbmRvd1N0YXRlLm1heGltaXplZCk7XG4gICAgdHJ5IHtcbiAgICAgIHBhbmVsLmluc3RhbmNlLm9uTWF4aW1pemUoKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGNvbnNvbGUuZXJyb3IoJ2ZhaWwgdG8gbWF4aW1pemUgcGFuZWwgJyArIHBhbmVsLmluc3RhbmNlLmlkICsgJy4gJyArIGVyci5zdGFjaykpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSBwYW5lbCBcbiAgICovXG4gIG5vcm1hbGl6ZVBhbmVsKHBhbmVsOiBDb21wb25lbnRSZWY8T25TY3JlZW5XaWRnZXRQYW5lbENvbXBvbmVudD4gfCBzdHJpbmcpIHtcbiAgICBpZiAodHlwZW9mIHBhbmVsID09PSAnc3RyaW5nJykge1xuICAgICAgcGFuZWwgPSB0aGlzLmdldFBhbmVsQnlJZChwYW5lbCk7XG4gICAgICBpZiAoIXBhbmVsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocGFuZWwuaW5zdGFuY2Uuc3RhdGUgPT09IFdpZGdldFN0YXRlLmNsb3NlZCkge1xuICAgICAgdGhpcy5vcGVuUGFuZWwocGFuZWwpO1xuICAgIH1cblxuICAgIHBhbmVsLmluc3RhbmNlLnNldFdpbmRvd1N0YXRlKFdpZGdldFdpbmRvd1N0YXRlLm5vcm1hbCk7XG4gICAgdHJ5IHtcbiAgICAgIHBhbmVsLmluc3RhbmNlLm9uTm9ybWFsaXplKCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhjb25zb2xlLmVycm9yKCdmYWlsIHRvIG5vcmFsaXplIHBhbmVsICcgKyBwYW5lbC5pbnN0YW5jZS5pZCArICcuICcgKyBlcnIuc3RhY2spKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0gcGFuZWwgXG4gICAqIEBwYXJhbSBzdGF0ZSBcbiAgICovXG4gIGNoYW5nZVdpbmRvd1N0YXRlVG8ocGFuZWw6IENvbXBvbmVudFJlZjxPblNjcmVlbldpZGdldFBhbmVsQ29tcG9uZW50PiB8IHN0cmluZywgc3RhdGU6IFdpZGdldFdpbmRvd1N0YXRlKSB7XG4gICAgaWYgKHR5cGVvZiBwYW5lbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHBhbmVsID0gdGhpcy5nZXRQYW5lbEJ5SWQocGFuZWwpO1xuICAgICAgaWYgKCFwYW5lbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlID09PSBXaWRnZXRXaW5kb3dTdGF0ZS5ub3JtYWwpIHtcbiAgICAgIHRoaXMubm9ybWFsaXplUGFuZWwocGFuZWwpO1xuICAgIH0gZWxzZSBpZiAoc3RhdGUgPT09IFdpZGdldFdpbmRvd1N0YXRlLm1pbmltaXplZCkge1xuICAgICAgdGhpcy5taW5pbWl6ZVBhbmVsKHBhbmVsKTtcbiAgICB9IGVsc2UgaWYgKHN0YXRlID09PSBXaWRnZXRXaW5kb3dTdGF0ZS5tYXhpbWl6ZWQpIHtcbiAgICAgIHRoaXMubWF4aW1pemVQYW5lbChwYW5lbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBzdGF0ZTogJyArIHN0YXRlKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0gcGlkIFxuICAgKi9cbiAgZ2V0UGFuZWxCeUlkKHBpZDogc3RyaW5nKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBhbmVscy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMucGFuZWxzW2ldLmluc3RhbmNlLmlkID09PSBwaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFuZWxzW2ldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvKipcbiAgICogXG4gICAqL1xuICBvbldpbmRvd1Jlc2l6ZSgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFuZWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5wYW5lbHNbaV0uaW5zdGFuY2Uuc3RhdGUgIT09IFdpZGdldFN0YXRlLmNsb3NlZCAmJlxuICAgICAgICB0aGlzLnBhbmVsc1tpXS5pbnN0YW5jZS5wb3NpdGlvbi5yZWxhdGl2ZVRvICE9PSAnbWFwJykge1xuICAgICAgICB0aGlzLnBhbmVsc1tpXS5pbnN0YW5jZS5yZXNpemUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFxuICAgKi9cbiAgb25NYXBSZXNpemUoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBhbmVscy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMucGFuZWxzW2ldLmluc3RhbmNlLmlzRG9ja2FibGUoKSkge1xuICAgICAgICB0aGlzLnBhbmVsc1tpXS5pbnN0YW5jZS5yZXNpemUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGlmICh0aGlzLnBhbmVsc1tpXS5pbnN0YW5jZS5zdGF0ZSAhPT0gV2lkZ2V0U3RhdGUuY2xvc2VkICYmXG4gICAgICAgIC8vICAgdGhpcy5wYW5lbHNbaV0uaW5zdGFuY2UucG9zaXRpb24ucmVsYXRpdmVUbyA9PT0gJ2Jyb3dzZXInKSB7XG4gICAgICAgIC8vICAgaWYgKHRoaXMucGFuZWxzW2ldLmluc3RhbmNlLnBhbmVsSWNvbikge1xuICAgICAgICAvLyAgICAgdGhpcy5wYW5lbHNbaV0uaW5zdGFuY2UucmVzaXplKHRoaXMucGFuZWxzW2ldLmluc3RhbmNlLnBhbmVsSWNvbi5yZXNldFBhbmVsUG9zaXRpb24oKSk7XG4gICAgICAgIC8vICAgfSBlbHNlIHtcbiAgICAgICAgLy8gICAgIC8v5ZKL546pP1xuICAgICAgICAvLyAgIH1cbiAgICAgICAgLy8gfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSBwYW5lbCBcbiAgICovXG4gIGRlc3Ryb3lQYW5lbChwYW5lbDogc3RyaW5nIHwgQ29tcG9uZW50UmVmPE9uU2NyZWVuV2lkZ2V0UGFuZWxDb21wb25lbnQ+KSB7XG4gICAgaWYgKHR5cGVvZiBwYW5lbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHBhbmVsID0gdGhpcy5nZXRQYW5lbEJ5SWQocGFuZWwpO1xuICAgICAgaWYgKCFwYW5lbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBhbmVsLmluc3RhbmNlLnN0YXRlICE9PSBXaWRnZXRTdGF0ZS5jbG9zZWQpIHtcbiAgICAgIHRoaXMuY2xvc2VQYW5lbChwYW5lbCk7XG4gICAgfVxuICAgIHRoaXMuX3JlbW92ZVBhbmVsKHBhbmVsKTtcbiAgICB0cnkge1xuICAgICAgcGFuZWwuZGVzdHJveSgpO1xuICAgICAgY29uc29sZS5sb2coJ2Rlc3Ryb3kgcGFuZWwgWycgKyBwYW5lbC5pbnN0YW5jZS5pZCArICddLicpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coY29uc29sZS5lcnJvcignZmFpbCB0byBkZXN0cm95IHBhbmVsICcgKyBwYW5lbC5pbnN0YW5jZS5pZCArICcuICcgKyBlcnIuc3RhY2spKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFxuICAgKi9cbiAgZGVzdHJveUFsbFBhbmVscygpIHtcbiAgICBsZXQgYWxsUGFuZWxJZHMgPSBfLm1hcCh0aGlzLnBhbmVscywgZnVuY3Rpb24gKHBhbmVsKSB7XG4gICAgICByZXR1cm4gcGFuZWwuaW5zdGFuY2UuaWQ7XG4gICAgfSk7XG4gICAgXy5mb3JFYWNoKGFsbFBhbmVsSWRzLCAocGFuZWxJZCkgPT4ge1xuICAgICAgdGhpcy5kZXN0cm95UGFuZWwocGFuZWxJZCk7XG4gICAgfSk7XG4gICAgdGhpcy5wYW5lbHMgPSBbXTtcbiAgfVxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSBwYW5lbCBcbiAgICovXG4gIHBsYXlPcGVuUGFuZWxBbmltYXRpb24ocGFuZWw6IHN0cmluZyB8IENvbXBvbmVudFJlZjxPblNjcmVlbldpZGdldFBhbmVsQ29tcG9uZW50Pikge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSk7XG4gIH1cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0gcGFuZWwgXG4gICAqL1xuICBwbGF5Q2xvc2VQYW5lbEFuaW1hdGlvbihwYW5lbDogc3RyaW5nIHwgQ29tcG9uZW50UmVmPE9uU2NyZWVuV2lkZ2V0UGFuZWxDb21wb25lbnQ+KSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKTtcbiAgfVxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSBwYW5lbCBcbiAgICovXG4gIGdldFBvc2l0aW9uT25Nb2JpbGUocGFuZWw6IHN0cmluZyB8IENvbXBvbmVudFJlZjxPblNjcmVlbldpZGdldFBhbmVsQ29tcG9uZW50Pikge1xuXG4gICAgaWYgKHR5cGVvZiBwYW5lbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHBhbmVsID0gdGhpcy5nZXRQYW5lbEJ5SWQocGFuZWwpO1xuICAgICAgaWYgKCFwYW5lbCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgICB9XG4gICAgfVxuICAgIC8v5b6F5byA5Y+RXG4gIH1cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0gcGFuZWwgXG4gICAqL1xuICBfb25QYW5lbENsaWNrKHBhbmVsKSB7XG4gICAgdGhpcy5fYWN0aXZlUGFuZWwocGFuZWwpO1xuICB9XG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIHBhbmVsIFxuICAgKi9cbiAgX2FjdGl2ZVBhbmVsKHBhbmVsOiBDb21wb25lbnRSZWY8T25TY3JlZW5XaWRnZXRQYW5lbENvbXBvbmVudD4gfCBzdHJpbmcpIHtcbiAgICBpZiAodHlwZW9mIHBhbmVsID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBwYW5lbCA9IHRoaXMuZ2V0UGFuZWxCeUlkKHBhbmVsKTtcbiAgICB9XG4gICAgaWYgKCFwYW5lbCkgcmV0dXJuO1xuICAgIGlmIChwYW5lbC5pbnN0YW5jZS5pc0RvY2thYmxlKCkpIHJldHVybjtcbiAgICBpZiAodGhpcy5hY3RpdmVQYW5lbCkge1xuICAgICAgaWYgKHRoaXMuYWN0aXZlUGFuZWwuaW5zdGFuY2UuaWQgPT09IHBhbmVsW1wiaW5zdGFuY2VcIl0uaWQpIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlUGFuZWwuaW5zdGFuY2UubW92ZVRvcE9uQWN0aXZlKSB7XG4gICAgICAgICAgdGhpcy5hY3RpdmVQYW5lbC5pbnN0YW5jZS5zZXRaSW5kZXgoXCJhY3RpdmVcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuYWN0aXZlUGFuZWwuaW5zdGFuY2Uuc3RhdGUgPT09IFdpZGdldFN0YXRlLmFjdGl2ZSkge1xuICAgICAgICB0aGlzLmFjdGl2ZVBhbmVsLmluc3RhbmNlLnNldFN0YXRlKFdpZGdldFN0YXRlLm9wZW5lZCk7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZVBhbmVsLmluc3RhbmNlLnBvc2l0aW9uLnpJbmRleCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyB0aGlzLmFjdGl2ZVBhbmVsLmluc3RhbmNlLnNldFpJbmRleCh0aGlzLmFjdGl2ZVBhbmVsLmluc3RhbmNlLnBvc2l0aW9uLnpJbmRleCk7XG4gICAgICAgICAgdGhpcy5hY3RpdmVQYW5lbC5pbnN0YW5jZS5zZXRaSW5kZXgoXCJkZWFjdGl2ZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmFjdGl2ZVBhbmVsLmluc3RhbmNlLnNldFpJbmRleChcImRlYWN0aXZlXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWN0aXZlUGFuZWwuaW5zdGFuY2Uub25EZUFjdGl2ZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBhdyA9IHRoaXMud2lkZ2V0TWFuYWdlci5hY3RpdmVXaWRnZXQ7XG4gICAgaWYgKGF3ICYmIGF3Lmluc3RhbmNlLnN0YXRlID09PSBXaWRnZXRTdGF0ZS5hY3RpdmUgJiYgYXcuaW5zdGFuY2UuZ2V0UGFuZWwoKSAhPT0gcGFuZWwpIHtcbiAgICAgIGF3Lmluc3RhbmNlLnNldFN0YXRlKFdpZGdldFN0YXRlLm9wZW5lZCk7XG4gICAgICBpZiAoYXcuaW5zdGFuY2UuaW5QYW5lbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgaWYgKGF3Lmluc3RhbmNlLnBvc2l0aW9uLnpJbmRleCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBhdy5pbnN0YW5jZS5zZXRaSW5kZXgoYXcuaW5zdGFuY2UucG9zaXRpb24uekluZGV4KTtcbiAgICAgICAgICBhdy5pbnN0YW5jZS5zZXRaSW5kZXgoXCJkZWFjdGl2ZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhdy5pbnN0YW5jZS5zZXRaSW5kZXgoXCJkZWFjdGl2ZVwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYXcuaW5zdGFuY2Uub25EZUFjdGl2ZSgpO1xuICAgICAgdGhpcy53aWRnZXRNYW5hZ2VyLmFjdGl2ZVdpZGdldCA9IG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5hY3RpdmVQYW5lbCA9IHBhbmVsO1xuICAgIGlmICh0aGlzLmFjdGl2ZVBhbmVsLmluc3RhbmNlLnN0YXRlID09PSBXaWRnZXRTdGF0ZS5hY3RpdmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5hY3RpdmVQYW5lbC5pbnN0YW5jZS5zZXRTdGF0ZShXaWRnZXRTdGF0ZS5hY3RpdmUpO1xuICAgIGlmICh0aGlzLmFjdGl2ZVBhbmVsLmluc3RhbmNlLm1vdmVUb3BPbkFjdGl2ZSkge1xuICAgICAgdGhpcy5hY3RpdmVQYW5lbC5pbnN0YW5jZS5zZXRaSW5kZXgoXCJhY3RpdmVcIik7XG4gICAgfVxuICAgIF8uZm9yRWFjaCh0aGlzLnBhbmVscywgKHAsIGluZGV4LCBhcnIpID0+IHtcbiAgICAgIGlmIChwLmluc3RhbmNlLmlzRG9ja2FibGUoKSA9PSBmYWxzZSAmJiBwLmluc3RhbmNlLmlkICE9IHRoaXMuYWN0aXZlUGFuZWwuaW5zdGFuY2UuaWQpIHtcbiAgICAgICAgcC5pbnN0YW5jZS5zZXRaSW5kZXgoXCJkZWFjdGl2ZVwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmFjdGl2ZVBhbmVsLmluc3RhbmNlLm9uQWN0aXZlKCk7XG5cbiAgfVxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSBwYW5lbCBcbiAgICovXG4gIF9yZW1vdmVQYW5lbChwYW5lbDogQ29tcG9uZW50UmVmPE9uU2NyZWVuV2lkZ2V0UGFuZWxDb21wb25lbnQ+KSB7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5wYW5lbHMuaW5kZXhPZihwYW5lbCk7XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMucGFuZWxzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYWN0aXZlUGFuZWwgJiYgdGhpcy5hY3RpdmVQYW5lbC5pbnN0YW5jZS5pZCA9PT0gcGFuZWwuaW5zdGFuY2UuaWQpIHtcbiAgICAgIHRoaXMuYWN0aXZlUGFuZWwgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIF9vbk1vdmVTdGFydChtb3Zlcikge1xuICAgIC8vXG4gIH1cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0gd2lkZ2V0IFxuICAgKi9cbiAgX29uV2lkZ2V0QWN0aXZlZCh3aWRnZXQpIHtcbiAgICBpZiAodGhpcy5hY3RpdmVQYW5lbCAmJlxuICAgICAgdGhpcy5hY3RpdmVQYW5lbC5pbnN0YW5jZS5zdGF0ZSA9PT0gV2lkZ2V0U3RhdGUuYWN0aXZlICYmXG4gICAgICB3aWRnZXQuZ2V0UGFuZWwoKSAhPT0gdGhpcy5hY3RpdmVQYW5lbCkge1xuICAgICAgdGhpcy5hY3RpdmVQYW5lbC5pbnN0YW5jZS5zZXRTdGF0ZShXaWRnZXRTdGF0ZS5vcGVuZWQpO1xuXG4gICAgICBpZiAodGhpcy5hY3RpdmVQYW5lbC5pbnN0YW5jZS5wb3NpdGlvbi56SW5kZXggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8v5b6F5byA5Y+RIOiuvue9rmluZGV4XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvL+W+heW8gOWPkSDorr7nva5pbmRleFxuICAgICAgfVxuICAgICAgdGhpcy5hY3RpdmVQYW5lbC5pbnN0YW5jZS5vbkRlQWN0aXZlKCk7XG4gICAgICB0aGlzLmFjdGl2ZVBhbmVsID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBfbG9hZFBhbmVsQ2xhc3MocGFuZWxVcmkpIHtcblxuICB9XG5cbiAgX2xvYWRUaGVtZUkxOE4ocGFuZWxVcmkpIHtcblxuICB9XG4gIGdldEFsbFBhbmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5wYW5lbHM7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9uZW50VHlwZTxUPiB7XG4gIG5ldyguLi5hcmdzOiBhbnlbXSk6IFQ7XG59XG4iXX0=