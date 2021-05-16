import { loadModules } from 'esri-loader';
import { BaseWidget } from '../base-widget';
import { Directive, HostListener, Input } from '@angular/core';
import { WidgetSettingComponent } from '../setting/widget-setting/widget-setting.component';
import * as _ from 'lodash';
import { IconSettingComponent } from '../icon/icon-setting.component';
import * as i0 from "@angular/core";
export class BaseWidgetComponent extends BaseWidget {
    constructor() {
        super(...arguments);
        this.widgetSettingClassName = "ss-widget-setting";
        this.showSettingWhenInPanel = false;
    }
    ngOnInit() {
        if (!this.appConfig && this.widgetManager) {
            this.widgetManager.loadConfig(this.getCompInfo(), this).then(() => {
                this.afterNgOnInit();
            });
        }
        else {
            this.afterNgOnInit();
        }
    }
    onMouseEnter(target) {
        if (this.isSettingMode === false) {
            return;
        }
        if (this.inPanel == true && this.showSettingWhenInPanel == false) {
            return;
        }
        if (target.lastElementChild.className == this.widgetSettingClassName) {
            target.lastElementChild.classList.remove("hide");
            target.lastElementChild.classList.add("show");
        }
        else {
            const div = document.createElement("div");
            div.className = this.widgetSettingClassName;
            if (!BaseWidgetComponent.settingIconEleNode) {
                const settingIconCompRef = this.componentLoader.createComponent(IconSettingComponent);
                BaseWidgetComponent.settingIconEleNode = settingIconCompRef.location.nativeElement;
            }
            const iconDiv = document.createElement("div");
            iconDiv.className = "icon";
            const newIconEle = BaseWidgetComponent.settingIconEleNode.cloneNode(true);
            iconDiv.appendChild(newIconEle);
            iconDiv.onclick = () => {
                this.openSetting();
            };
            iconDiv.cloneNode();
            div.appendChild(iconDiv);
            target.appendChild(div);
        }
    }
    onMouseLeave(target) {
        if (this.isSettingMode === false) {
            return;
        }
        if (this.inPanel == true && this.showSettingWhenInPanel == false) {
            return;
        }
        if (target.lastElementChild.className == this.widgetSettingClassName) {
            target.lastElementChild.classList.remove("show");
            target.lastElementChild.classList.add("hide");
        }
    }
    getPanel() {
        if (this.inPanel === false) {
            return null;
        }
        let panel = null;
        if (this.gid === 'widgetOnScreen' || this.gid === 'widgetPool') {
            panel = this.panelManager.getPanelById(this.id + '_panel');
        }
        else {
            panel = this.panelManager.getPanelById(this.gid + '_panel');
            if (panel) {
                return panel;
            }
            else {
                panel = this.panelManager.getPanelById(this.id + '_panel');
            }
        }
        if (!panel)
            panel = {
                uri: "epsgis-on-screen-widget-panel"
            };
        return panel;
    }
    onConfigChanged(config) {
    }
    onAppConfigChanged(appConfig, reason, changedData) {
    }
    onAction(action, data) {
    }
    loadArcgisModules(modules, loadScriptOptions) {
        let _url = '';
        if (this.globalParams.mapConfig.jsApi) {
            _url = this.globalParams.mapConfig.jsApi;
        }
        if (this.appConfig && this.appConfig.map && this.appConfig.map.jsApi) {
            _url = this.appConfig.map.jsApi;
        }
        if (!_url) {
            console.error("no arcgis js api");
            return;
        }
        let options = {
            url: _url,
            css: _url.replace("init.js", "esri/css/main.css")
        };
        return loadModules(modules, Object.assign(options, loadScriptOptions));
    }
    openSetting(options) {
        let saving = false;
        const newOptions = Object.assign({ width: 700, height: 400 }, options);
        const modal = this.modalManager.create({
            title: this.label + "-配置",
            content: WidgetSettingComponent,
            componentParams: {
                widgetInstance: this
            },
            top: 60,
            width: newOptions.width,
            height: newOptions.height,
            titleBarButtons: [
                {
                    icon: "icon-epsgis-i",
                    isIconfont: true,
                    onClick: (instance) => {
                        instance.switchToConfigOrManifest();
                    }
                }
            ],
            okLoading: saving,
            onOk: (instance) => {
                instance.saveAll().then(result => {
                    if (result.success) {
                        instance.widgetInstance.config = result.data.config;
                        instance.widgetInstance.widgetConfig.config = result.data.config;
                        instance.widgetInstance.widgetConfig.manifest = _.merge({}, instance.widgetInstance.widgetConfig.manifest, result.data.manifest);
                        instance.widgetInstance.onConfigChanged(instance.widgetInstance.widgetConfig);
                        modal.close();
                    }
                    else {
                        instance.onSaveError(new Error(result.msg));
                    }
                    saving = false;
                }).catch(err => {
                    instance.onSaveError(err);
                    saving = false;
                });
                return false;
            }
        });
    }
}
BaseWidgetComponent.settingIconEleNode = null;
BaseWidgetComponent.ɵfac = function BaseWidgetComponent_Factory(t) { return ɵBaseWidgetComponent_BaseFactory(t || BaseWidgetComponent); };
BaseWidgetComponent.ɵdir = i0.ɵɵdefineDirective({ type: BaseWidgetComponent, hostBindings: function BaseWidgetComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("mouseenter", function BaseWidgetComponent_mouseenter_HostBindingHandler($event) { return ctx.onMouseEnter($event.target); })("mouseleave", function BaseWidgetComponent_mouseleave_HostBindingHandler($event) { return ctx.onMouseLeave($event.target); });
    } }, inputs: { showSettingWhenInPanel: "showSettingWhenInPanel" }, features: [i0.ɵɵInheritDefinitionFeature] });
const ɵBaseWidgetComponent_BaseFactory = i0.ɵɵgetInheritedFactory(BaseWidgetComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseWidgetComponent, [{
        type: Directive
    }], null, { showSettingWhenInPanel: [{
            type: Input
        }], onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter', ['$event.target']]
        }], onMouseLeave: [{
            type: HostListener,
            args: ['mouseleave', ['$event.target']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS13aWRnZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZXBzZ2lzL2NvbXBvbmVudHMvYmFzZS13aWRnZXQvYmFzZS13aWRnZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBc0IsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBbUI5RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzVGLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBQzVCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOztBQU90RSxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsVUFBVTtJQURuRDs7UUFHRSwyQkFBc0IsR0FBRyxtQkFBbUIsQ0FBQztRQU1wQywyQkFBc0IsR0FBRyxLQUFLLENBQUM7S0F5TXpDO0lBeE1DLFFBQVE7UUFFTixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUNoRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQztJQUdELFlBQVksQ0FBQyxNQUFtQjtRQUM5QixJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssS0FBSyxFQUFFO1lBRWhDLE9BQU87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QUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUNqSSxRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO3dCQUM5RSxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7cUJBQ2Y7eUJBQU07d0JBQ0wsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztxQkFDN0M7b0JBQ0QsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDakIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNiLFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzFCLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ2pCLENBQUMsQ0FBQyxDQUFDO2dCQUNILE9BQU8sS0FBSyxDQUFDO1lBQ2YsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7O0FBN0xjLHNDQUFrQixHQUFHLElBQUksQ0FBQztrSEFuQjlCLG1CQUFtQjt3REFBbkIsbUJBQW1CO2dIQUFuQiwrQkFBMkIsK0ZBQTNCLCtCQUEyQjs7a0VBQTNCLG1CQUFtQjt1RkFBbkIsbUJBQW1CO2NBRC9CLFNBQVM7Z0JBU0Msc0JBQXNCO2tCQUE5QixLQUFLO1lBYU4sWUFBWTtrQkFEWCxZQUFZO21CQUFDLFlBQVksRUFBRSxDQUFDLGVBQWUsQ0FBQztZQXVEN0MsWUFBWTtrQkFEWCxZQUFZO21CQUFDLFlBQVksRUFBRSxDQUFDLGVBQWUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElMb2FkU2NyaXB0T3B0aW9ucywgbG9hZE1vZHVsZXMgfSBmcm9tICdlc3JpLWxvYWRlcic7XG4vLyBpbXBvcnQgeyBBcHBHbG9iYWxDb25maWcgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXBwLWNvbmZpZyc7XG4vLyBpbXBvcnQgeyBXaWRnZXRUeXBlLCBXaWRnZXRQb3NpdGlvbiwgV2lkZ2V0U3RhdGUsIFdpZGdldFdpbmRvd1N0YXRlLCBDb21wb25lbnRJbmZvIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Jhc2Utd2lkZ2V0Jztcbi8vIGltcG9ydCB7IFdpZGdldE1hbmFnZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvd2lkZ2V0LW1hbmFnZXIuc2VydmljZSc7XG4vLyBpbXBvcnQgeyBQYW5lbE1hbmFnZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcGFuZWwtbWFuYWdlci5zZXJ2aWNlJztcbi8vIGltcG9ydCB7IENvbmZpZ0xvYWRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb25maWctbG9hZGVyLnNlcnZpY2UnO1xuLy8gaW1wb3J0IHsgQ29uZmlnTWFuYWdlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb25maWctbWFuYWdlci5zZXJ2aWNlJztcbi8vIGltcG9ydCB7IE1hcE1hbmFnZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbWFwLW1hbmFnZXIuc2VydmljZSc7XG4vLyBpbXBvcnQgeyBXaWRnZXRQbGFjZUhvbGRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy93aWRnZXQtcGxhY2UtaG9sZGVyLnNlcnZpY2UnO1xuLy8gaW1wb3J0IHsgTGF5b3V0TWFuYWdlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9sYXlvdXQtbWFuYWdlci5zZXJ2aWNlJztcbi8vIGltcG9ydCB7IFNlcnZpY2VJbmplY3RvciB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NlcnZpY2UtaW5qZWN0b3InO1xuLy8gaW1wb3J0IHsgRXZlbnRFbWl0dGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2V2ZW50LWVtaXR0ZXIuc2VydmljZSc7XG4vLyBpbXBvcnQgeyBFdmVudE1hbmFnZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbi8vIGltcG9ydCB7IEh0dHBSZXFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2VydmljZXMnO1xuLy8gaW1wb3J0IHsgTW9kYWxNYW5hZ2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL21vZGFsLW1hbmFnZXIuc2VydmljZSc7XG4vLyBpbXBvcnQgeyBVdGlsc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91dGlscy5zZXJ2aWNlJztcbi8vIGltcG9ydCB7IENvbW1vblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb21tb24uc2VydmljZSc7XG4vLyBpbXBvcnQgeyBDb21wb25lbnRMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29tcG9uZW50LWxvYWRlci5zZXJ2aWNlJztcbi8vIGltcG9ydCB7IE1vZGFsTWFuYWdlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvbW9kYWwtbWFuYWdlci5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBCYXNlV2lkZ2V0IH0gZnJvbSAnLi4vYmFzZS13aWRnZXQnO1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBXaWRnZXRTZXR0aW5nQ29tcG9uZW50IH0gZnJvbSAnLi4vc2V0dGluZy93aWRnZXQtc2V0dGluZy93aWRnZXQtc2V0dGluZy5jb21wb25lbnQnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgSWNvblNldHRpbmdDb21wb25lbnQgfSBmcm9tICcuLi9pY29uL2ljb24tc2V0dGluZy5jb21wb25lbnQnO1xuXG4vLyBAZHluYW1pY1xuLyoqXG4gKiBjcmVhdGUgYnkgcnVpciAxOTEwMTUgIOe7hOS7tuWfuuexu1xuICovXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBjbGFzcyBCYXNlV2lkZ2V0Q29tcG9uZW50IGV4dGVuZHMgQmFzZVdpZGdldCB7XG5cbiAgd2lkZ2V0U2V0dGluZ0NsYXNzTmFtZSA9IFwic3Mtd2lkZ2V0LXNldHRpbmdcIjtcbiAgLyoqXG4gICAqIGluUGFuZWzml7bmmK/lkKbopoHlnKjnu4Tku7bph4zmmL7npLrigJzorr7nva7igJ3mjInpkq7vvIzkuLvopoHnlKjkuo5QYW5lbOeahHNob3dUaXRsZeiuvue9ruS4umZhbHNl5pe25L2/55So77yMXG4gICAqIOS4jeaYvuekunRpdGxl5bCx5peg5rOV5Zyo5qCH6aKY5qCP5pi+56S66K6+572u5Zu+5qCHXG4gICAqIOaUueS4uklucHV077yM5Y+v5Lul5Zyo5qih5p2/6YeM5L2/55SoXG4gICAqL1xuICBASW5wdXQoKSBzaG93U2V0dGluZ1doZW5JblBhbmVsID0gZmFsc2U7XG4gIG5nT25Jbml0KCkge1xuICAgIC8vIHRoaXMubG9hZENvbmZpZ1xuICAgIGlmICghdGhpcy5hcHBDb25maWcgJiYgdGhpcy53aWRnZXRNYW5hZ2VyKSB7XG4gICAgICB0aGlzLndpZGdldE1hbmFnZXIubG9hZENvbmZpZyh0aGlzLmdldENvbXBJbmZvKCksIHRoaXMpLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmFmdGVyTmdPbkluaXQoKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFmdGVyTmdPbkluaXQoKTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBzdGF0aWMgc2V0dGluZ0ljb25FbGVOb2RlID0gbnVsbDtcbiAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicsIFsnJGV2ZW50LnRhcmdldCddKVxuICBvbk1vdXNlRW50ZXIodGFyZ2V0OiBIVE1MRWxlbWVudCkge1xuICAgIGlmICh0aGlzLmlzU2V0dGluZ01vZGUgPT09IGZhbHNlKSB7XG4gICAgICAvL+mdnumFjee9ruaooeW8j1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5pblBhbmVsID09IHRydWUgJiYgdGhpcy5zaG93U2V0dGluZ1doZW5JblBhbmVsID09IGZhbHNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8v6YCa6L+HY2xhc3NOYW1l5p+l5om+5Y+v6IO95a2Y5Zyo5aSa5Liq44CC44CC44CC5q+U5aaCbWFw5LiK5pyJd2lkZ2V05bCx5pyJ6Zeu6aKYXG4gICAgLy8gbGV0IG5vZGVzID0gdGFyZ2V0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUodGhpcy53aWRnZXRTZXR0aW5nQ2xhc3NOYW1lKTtcbiAgICBpZiAodGFyZ2V0Lmxhc3RFbGVtZW50Q2hpbGQuY2xhc3NOYW1lID09IHRoaXMud2lkZ2V0U2V0dGluZ0NsYXNzTmFtZSkge1xuICAgICAgdGFyZ2V0Lmxhc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICB0YXJnZXQubGFzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGRpdi5jbGFzc05hbWUgPSB0aGlzLndpZGdldFNldHRpbmdDbGFzc05hbWU7XG4gICAgICAvKlxuICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgYnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgICAgYnV0dG9uLmNsYXNzTmFtZSA9IFwiYnV0dG9uXCI7XG4gICAgICBidXR0b24udmFsdWUgPSBcIuiuvue9rlwiO1xuICAgICAgYnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMub3BlblNldHRpbmcoKTtcbiAgICAgIH1cbiAgICAgIGRpdi5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgKi9cbiAgICAgIC8v5Yib5bu6c3ZnXG4gICAgICAvLzEuY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJzdmdcIik7XG4gICAgICAvLzIu5Yqo5oCB5Yib5bu6SWNvblNldHRpbmdDb21wb25lbnTvvIzliqDlhaVcbiAgICAgIGlmICghQmFzZVdpZGdldENvbXBvbmVudC5zZXR0aW5nSWNvbkVsZU5vZGUpIHtcbiAgICAgICAgY29uc3Qgc2V0dGluZ0ljb25Db21wUmVmID0gdGhpcy5jb21wb25lbnRMb2FkZXIuY3JlYXRlQ29tcG9uZW50KEljb25TZXR0aW5nQ29tcG9uZW50KTtcbiAgICAgICAgQmFzZVdpZGdldENvbXBvbmVudC5zZXR0aW5nSWNvbkVsZU5vZGUgPSBzZXR0aW5nSWNvbkNvbXBSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGljb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgaWNvbkRpdi5jbGFzc05hbWUgPSBcImljb25cIjtcbiAgICAgIGNvbnN0IG5ld0ljb25FbGUgPSBCYXNlV2lkZ2V0Q29tcG9uZW50LnNldHRpbmdJY29uRWxlTm9kZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICBpY29uRGl2LmFwcGVuZENoaWxkKG5ld0ljb25FbGUpO1xuICAgICAgaWNvbkRpdi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICB0aGlzLm9wZW5TZXR0aW5nKCk7XG4gICAgICB9XG4gICAgICBpY29uRGl2LmNsb25lTm9kZSgpXG4gICAgICAvL2lmICh0YXJnZXQuaGFzQ2hpbGROb2Rlcykge1xuICAgICAgLy/mraTnp43mlrnlvI/kuLrmiormiYDmnInlhYPntKDmt7vliqDliLBkaXbkuK3vvIzpnIDkv67mlLnnm7jlhbPmoLflvI9cbiAgICAgIC8vICAgICAvL3RhcmdldC5jaGlsZHJlbiDkuI3ljIXmi6zmlofmnKzoioLngrnlkozlsZ7mgKfoioLngrlcbiAgICAgIC8vICAgICB0YXJnZXQuY2hpbGROb2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAvLyAgICAgICBkaXYuYXBwZW5kQ2hpbGQobm9kZSk7Ly/kvJrnp7vliqhcbiAgICAgIC8vICAgICB9KTtcbiAgICAgIC8vICAgfVxuICAgICAgZGl2LmFwcGVuZENoaWxkKGljb25EaXYpO1xuICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKGRpdik7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScsIFsnJGV2ZW50LnRhcmdldCddKVxuICBvbk1vdXNlTGVhdmUodGFyZ2V0OiBIVE1MRWxlbWVudCkge1xuICAgIGlmICh0aGlzLmlzU2V0dGluZ01vZGUgPT09IGZhbHNlKSB7XG4gICAgICAvL+mdnumFjee9ruaooeW8j1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5pblBhbmVsID09IHRydWUgJiYgdGhpcy5zaG93U2V0dGluZ1doZW5JblBhbmVsID09IGZhbHNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0YXJnZXQubGFzdEVsZW1lbnRDaGlsZC5jbGFzc05hbWUgPT0gdGhpcy53aWRnZXRTZXR0aW5nQ2xhc3NOYW1lKSB7XG4gICAgICB0YXJnZXQubGFzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICAgIHRhcmdldC5sYXN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICog6I635Y+W57uE5Lu255qEUGFuZWxcbiAgICogQHJldHVybnMgXG4gICAqL1xuICBnZXRQYW5lbCgpIHtcbiAgICBpZiAodGhpcy5pblBhbmVsID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGxldCBwYW5lbCA9IG51bGw7XG4gICAgaWYgKHRoaXMuZ2lkID09PSAnd2lkZ2V0T25TY3JlZW4nIHx8IHRoaXMuZ2lkID09PSAnd2lkZ2V0UG9vbCcpIHtcbiAgICAgIHBhbmVsID0gdGhpcy5wYW5lbE1hbmFnZXIuZ2V0UGFuZWxCeUlkKHRoaXMuaWQgKyAnX3BhbmVsJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhbmVsID0gdGhpcy5wYW5lbE1hbmFnZXIuZ2V0UGFuZWxCeUlkKHRoaXMuZ2lkICsgJ19wYW5lbCcpO1xuICAgICAgaWYgKHBhbmVsKSB7XG4gICAgICAgIHJldHVybiBwYW5lbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhbmVsID0gdGhpcy5wYW5lbE1hbmFnZXIuZ2V0UGFuZWxCeUlkKHRoaXMuaWQgKyAnX3BhbmVsJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghcGFuZWwpIHBhbmVsID0ge1xuICAgICAgdXJpOiBcImVwc2dpcy1vbi1zY3JlZW4td2lkZ2V0LXBhbmVsXCJcbiAgICB9O1xuICAgIHJldHVybiBwYW5lbDtcbiAgfVxuICAvKipcbiAgICog57uE5Lu26YWN572u5Y+Y5pu05ZCOXG4gICAqIEBwYXJhbSBjb25maWcgXG4gICAqL1xuICBvbkNvbmZpZ0NoYW5nZWQoY29uZmlnKSB7XG4gIH1cbiAgLyoqXG4gICAqIOezu+e7n+mFjee9ruWPmOabtOWQjlxuICAgKiBAcGFyYW0gYXBwQ29uZmlnIFxuICAgKiBAcGFyYW0gcmVhc29uIFxuICAgKiBAcGFyYW0gY2hhbmdlZERhdGEgXG4gICAqL1xuICBvbkFwcENvbmZpZ0NoYW5nZWQoYXBwQ29uZmlnLCByZWFzb24sIGNoYW5nZWREYXRhKSB7XG5cbiAgfVxuICAvKipcbiAgICog5Yqo5L2c77yM5q+U5aaC6auY5LquaWNvblxuICAgKiBAcGFyYW0gYWN0aW9uIFxuICAgKiBAcGFyYW0gZGF0YSBcbiAgICovXG4gIG9uQWN0aW9uKGFjdGlvbiwgZGF0YSkge1xuXG4gIH1cbiAgLyoqXG4gICAqIOWKoOi9vWFyY2dpcyBqcyDmqKHlnZdcbiAgICogQHBhcmFtIG1vZHVsZXMgXG4gICAqIEBwYXJhbSBsb2FkU2NyaXB0T3B0aW9ucyBcbiAgICovXG4gIGxvYWRBcmNnaXNNb2R1bGVzPFQgZXh0ZW5kcyBhbnlbXSA9IGFueVtdPihtb2R1bGVzOiBzdHJpbmdbXSwgbG9hZFNjcmlwdE9wdGlvbnM/OiBJTG9hZFNjcmlwdE9wdGlvbnMpOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgX3VybCA9ICcnO1xuICAgIC8vIGlmICh0aGlzLmNvbmZpZyAmJiB0aGlzLmNvbmZpZy5hcmNnaXNKc0FwaSkge1xuICAgIC8vICAgX3VybCA9IHRoaXMuY29uZmlnLmFyY2dpc0pzQXBpO1xuICAgIC8vIH1cbiAgICBpZiAodGhpcy5nbG9iYWxQYXJhbXMubWFwQ29uZmlnLmpzQXBpKSB7XG4gICAgICBfdXJsID0gdGhpcy5nbG9iYWxQYXJhbXMubWFwQ29uZmlnLmpzQXBpO1xuICAgIH1cbiAgICAvL2NvbmZpZy5qc29u5Lit6YWN572u5LqGanNBcGnliJnku6XlroPkuLrlh4ZcbiAgICBpZiAodGhpcy5hcHBDb25maWcgJiYgdGhpcy5hcHBDb25maWcubWFwICYmIHRoaXMuYXBwQ29uZmlnLm1hcC5qc0FwaSkge1xuICAgICAgX3VybCA9IHRoaXMuYXBwQ29uZmlnLm1hcC5qc0FwaTtcbiAgICB9XG4gICAgaWYgKCFfdXJsKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwibm8gYXJjZ2lzIGpzIGFwaVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IG9wdGlvbnM6IElMb2FkU2NyaXB0T3B0aW9ucyA9IHtcbiAgICAgIHVybDogX3VybCxcbiAgICAgIGNzczogX3VybC5yZXBsYWNlKFwiaW5pdC5qc1wiLCBcImVzcmkvY3NzL21haW4uY3NzXCIpXG4gICAgfVxuICAgIHJldHVybiBsb2FkTW9kdWxlcyhtb2R1bGVzLCBPYmplY3QuYXNzaWduKG9wdGlvbnMsIGxvYWRTY3JpcHRPcHRpb25zKSk7XG4gIH1cblxuICAvKipcbiAgICog5omT5byA57uE5Lu26K6+572u55WM6Z2iXG4gICAqIEBwYXJhbSBvcHRpb25zIFxuICAgKi9cbiAgb3BlblNldHRpbmcob3B0aW9ucz86IHsgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIgfSkge1xuICAgIGxldCBzYXZpbmcgPSBmYWxzZTtcbiAgICBjb25zdCBuZXdPcHRpb25zID0gT2JqZWN0LmFzc2lnbih7IHdpZHRoOiA3MDAsIGhlaWdodDogNDAwIH0sIG9wdGlvbnMpO1xuICAgIGNvbnN0IG1vZGFsID0gdGhpcy5tb2RhbE1hbmFnZXIuY3JlYXRlKHtcbiAgICAgIHRpdGxlOiB0aGlzLmxhYmVsICsgXCIt6YWN572uXCIsXG4gICAgICBjb250ZW50OiBXaWRnZXRTZXR0aW5nQ29tcG9uZW50LFxuICAgICAgY29tcG9uZW50UGFyYW1zOiB7XG4gICAgICAgIHdpZGdldEluc3RhbmNlOiB0aGlzXG4gICAgICB9LFxuICAgICAgdG9wOiA2MCxcbiAgICAgIHdpZHRoOiBuZXdPcHRpb25zLndpZHRoLFxuICAgICAgaGVpZ2h0OiBuZXdPcHRpb25zLmhlaWdodCxcbiAgICAgIHRpdGxlQmFyQnV0dG9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgaWNvbjogXCJpY29uLWVwc2dpcy1pXCIsXG4gICAgICAgICAgaXNJY29uZm9udDogdHJ1ZSxcbiAgICAgICAgICBvbkNsaWNrOiAoaW5zdGFuY2UpID0+IHtcbiAgICAgICAgICAgIGluc3RhbmNlLnN3aXRjaFRvQ29uZmlnT3JNYW5pZmVzdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIG9rTG9hZGluZzogc2F2aW5nLFxuICAgICAgb25PazogKGluc3RhbmNlOiBXaWRnZXRTZXR0aW5nQ29tcG9uZW50KSA9PiB7XG4gICAgICAgIGluc3RhbmNlLnNhdmVBbGwoKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICAgICAgICBpbnN0YW5jZS53aWRnZXRJbnN0YW5jZS5jb25maWcgPSByZXN1bHQuZGF0YS5jb25maWc7XG4gICAgICAgICAgICBpbnN0YW5jZS53aWRnZXRJbnN0YW5jZS53aWRnZXRDb25maWcuY29uZmlnID0gcmVzdWx0LmRhdGEuY29uZmlnO1xuICAgICAgICAgICAgaW5zdGFuY2Uud2lkZ2V0SW5zdGFuY2Uud2lkZ2V0Q29uZmlnLm1hbmlmZXN0ID0gXy5tZXJnZSh7fSwgaW5zdGFuY2Uud2lkZ2V0SW5zdGFuY2Uud2lkZ2V0Q29uZmlnLm1hbmlmZXN0LCByZXN1bHQuZGF0YS5tYW5pZmVzdCk7XG4gICAgICAgICAgICBpbnN0YW5jZS53aWRnZXRJbnN0YW5jZS5vbkNvbmZpZ0NoYW5nZWQoaW5zdGFuY2Uud2lkZ2V0SW5zdGFuY2Uud2lkZ2V0Q29uZmlnKTtcbiAgICAgICAgICAgIG1vZGFsLmNsb3NlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluc3RhbmNlLm9uU2F2ZUVycm9yKG5ldyBFcnJvcihyZXN1bHQubXNnKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNhdmluZyA9IGZhbHNlO1xuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgIGluc3RhbmNlLm9uU2F2ZUVycm9yKGVycik7XG4gICAgICAgICAgc2F2aW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==