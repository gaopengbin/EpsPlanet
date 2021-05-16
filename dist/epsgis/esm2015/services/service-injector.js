import { Injectable } from '@angular/core';
import { defaultAppGlobalConfig } from '../models/app-config';
import * as i0 from "@angular/core";
import * as i1 from "../models/app-config";
import * as i2 from "./utils.service";
import * as i3 from "./common.service";
import * as i4 from "./request.service";
import * as i5 from "./config-loader.service";
import * as i6 from "./config-manager.service";
import * as i7 from "./map-manager.service";
import * as i8 from "./panel-manager.service";
import * as i9 from "./widget-manager.service";
import * as i10 from "./widget-place-holder.service";
import * as i11 from "./layout-manager.service";
import * as i12 from "@angular/platform-browser";
import * as i13 from "@angular/router";
import * as i14 from "./component-loader.service";
import * as i15 from "./modal-manager.service";
import * as i16 from "./setting.service";
export class ServiceInjector {
    constructor(config, utils, commonService, httpService, configLoader, configManager, mapManager, panelManager, widgetManager, widgetPlaceHolder, layoutManager, jsEventManager, route, componentManager, modalManaer, settingService) {
        this.config = config;
        this.utils = utils;
        this.commonService = commonService;
        this.httpService = httpService;
        this.configLoader = configLoader;
        this.configManager = configManager;
        this.mapManager = mapManager;
        this.panelManager = panelManager;
        this.widgetManager = widgetManager;
        this.widgetPlaceHolder = widgetPlaceHolder;
        this.layoutManager = layoutManager;
        this.jsEventManager = jsEventManager;
        this.route = route;
        this.componentManager = componentManager;
        this.modalManaer = modalManaer;
        this.settingService = settingService;
        if (!config) {
            config = Object.assign({}, defaultAppGlobalConfig);
        }
        this.route.queryParams.subscribe(params => {
            this.config.urlParams = Object.assign(this.config.urlParams, params);
        });
    }
}
ServiceInjector.ɵfac = function ServiceInjector_Factory(t) { return new (t || ServiceInjector)(i0.ɵɵinject(i1.AppGlobalConfig), i0.ɵɵinject(i2.UtilsService), i0.ɵɵinject(i3.CommonService), i0.ɵɵinject(i4.HttpReqService), i0.ɵɵinject(i5.ConfigLoaderService), i0.ɵɵinject(i6.ConfigManagerService), i0.ɵɵinject(i7.MapManagerService), i0.ɵɵinject(i8.PanelManagerService), i0.ɵɵinject(i9.WidgetManagerService), i0.ɵɵinject(i10.WidgetPlaceHolderService), i0.ɵɵinject(i11.LayoutManagerService), i0.ɵɵinject(i12.EventManager), i0.ɵɵinject(i13.ActivatedRoute), i0.ɵɵinject(i14.ComponentLoaderService), i0.ɵɵinject(i15.ModalManagerService), i0.ɵɵinject(i16.SettingService)); };
ServiceInjector.ɵprov = i0.ɵɵdefineInjectable({ token: ServiceInjector, factory: ServiceInjector.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ServiceInjector, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.AppGlobalConfig }, { type: i2.UtilsService }, { type: i3.CommonService }, { type: i4.HttpReqService }, { type: i5.ConfigLoaderService }, { type: i6.ConfigManagerService }, { type: i7.MapManagerService }, { type: i8.PanelManagerService }, { type: i9.WidgetManagerService }, { type: i10.WidgetPlaceHolderService }, { type: i11.LayoutManagerService }, { type: i12.EventManager }, { type: i13.ActivatedRoute }, { type: i14.ComponentLoaderService }, { type: i15.ModalManagerService }, { type: i16.SettingService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS1pbmplY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2Vwc2dpcy9zZXJ2aWNlcy9zZXJ2aWNlLWluamVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFtQixzQkFBc0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQi9FLE1BQU0sT0FBTyxlQUFlO0lBRXhCLFlBQ1csTUFBdUIsRUFDdkIsS0FBbUIsRUFDbkIsYUFBNEIsRUFDNUIsV0FBMkIsRUFDM0IsWUFBaUMsRUFDakMsYUFBbUMsRUFDbkMsVUFBNkIsRUFDN0IsWUFBaUMsRUFDakMsYUFBbUMsRUFDbkMsaUJBQTJDLEVBQzNDLGFBQW1DLEVBQ25DLGNBQTRCLEVBQzNCLEtBQXFCLEVBQ3RCLGdCQUF3QyxFQUN4QyxXQUFnQyxFQUNoQyxjQUE4QjtRQWY5QixXQUFNLEdBQU4sTUFBTSxDQUFpQjtRQUN2QixVQUFLLEdBQUwsS0FBSyxDQUFjO1FBQ25CLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGdCQUFXLEdBQVgsV0FBVyxDQUFnQjtRQUMzQixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDakMsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQ25DLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBQzdCLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUNqQyxrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUEwQjtRQUMzQyxrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMsbUJBQWMsR0FBZCxjQUFjLENBQWM7UUFDM0IsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDdEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUF3QjtRQUN4QyxnQkFBVyxHQUFYLFdBQVcsQ0FBcUI7UUFDaEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBc0JyQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1QsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLHNCQUFzQixDQUFDLENBQUM7U0FDdEQ7UUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN6RSxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7OzhFQS9DUSxlQUFlO3VEQUFmLGVBQWUsV0FBZixlQUFlLG1CQUZaLE1BQU07dUZBRVQsZUFBZTtjQUgzQixVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEV2ZW50TWFuYWdlciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEFwcEdsb2JhbENvbmZpZywgZGVmYXVsdEFwcEdsb2JhbENvbmZpZyB9IGZyb20gJy4uL21vZGVscy9hcHAtY29uZmlnJztcclxuaW1wb3J0IHsgTGF5b3V0TWFuYWdlclNlcnZpY2UgfSBmcm9tICcuL2xheW91dC1tYW5hZ2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBXaWRnZXRQbGFjZUhvbGRlclNlcnZpY2UgfSBmcm9tICcuL3dpZGdldC1wbGFjZS1ob2xkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFBhbmVsTWFuYWdlclNlcnZpY2UgfSBmcm9tICcuL3BhbmVsLW1hbmFnZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IE1hcE1hbmFnZXJTZXJ2aWNlIH0gZnJvbSAnLi9tYXAtbWFuYWdlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29uZmlnTWFuYWdlclNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy1tYW5hZ2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb25maWdMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWctbG9hZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBXaWRnZXRNYW5hZ2VyU2VydmljZSB9IGZyb20gJy4vd2lkZ2V0LW1hbmFnZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IENvbW1vblNlcnZpY2UgfSBmcm9tICcuL2NvbW1vbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVXRpbHNTZXJ2aWNlIH0gZnJvbSAnLi91dGlscy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSHR0cFJlcVNlcnZpY2UgfSBmcm9tICcuL3JlcXVlc3Quc2VydmljZSc7XHJcbmltcG9ydCB7IE1vZGFsTWFuYWdlclNlcnZpY2UgfSBmcm9tICcuL21vZGFsLW1hbmFnZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudExvYWRlclNlcnZpY2UgfSBmcm9tICcuL2NvbXBvbmVudC1sb2FkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFNldHRpbmdTZXJ2aWNlIH0gZnJvbSAnLi9zZXR0aW5nLnNlcnZpY2UnO1xyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNlcnZpY2VJbmplY3RvciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIGNvbmZpZzogQXBwR2xvYmFsQ29uZmlnLFxyXG4gICAgICAgIHB1YmxpYyB1dGlsczogVXRpbHNTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBjb21tb25TZXJ2aWNlOiBDb21tb25TZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBodHRwU2VydmljZTogSHR0cFJlcVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGNvbmZpZ0xvYWRlcjogQ29uZmlnTG9hZGVyU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgY29uZmlnTWFuYWdlcjogQ29uZmlnTWFuYWdlclNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIG1hcE1hbmFnZXI6IE1hcE1hbmFnZXJTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBwYW5lbE1hbmFnZXI6IFBhbmVsTWFuYWdlclNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIHdpZGdldE1hbmFnZXI6IFdpZGdldE1hbmFnZXJTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyB3aWRnZXRQbGFjZUhvbGRlcjogV2lkZ2V0UGxhY2VIb2xkZXJTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBsYXlvdXRNYW5hZ2VyOiBMYXlvdXRNYW5hZ2VyU2VydmljZSxcclxuICAgICAgICBwdWJsaWMganNFdmVudE1hbmFnZXI6IEV2ZW50TWFuYWdlcixcclxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwdWJsaWMgY29tcG9uZW50TWFuYWdlcjogQ29tcG9uZW50TG9hZGVyU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgbW9kYWxNYW5hZXI6IE1vZGFsTWFuYWdlclNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIHNldHRpbmdTZXJ2aWNlOiBTZXR0aW5nU2VydmljZVxyXG4gICAgICAgIC8vIEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBDb25maWdMb2FkZXJTZXJ2aWNlKSlcclxuICAgICAgICAvLyBwdWJsaWMgY29uZmlnTG9hZGVyOiBDb25maWdMb2FkZXJTZXJ2aWNlLFxyXG5cclxuICAgICAgICAvLyBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gQ29uZmlnTWFuYWdlclNlcnZpY2UpKVxyXG4gICAgICAgIC8vIHB1YmxpYyBjb25maWdNYW5hZ2VyOiBDb25maWdNYW5hZ2VyU2VydmljZSxcclxuXHJcbiAgICAgICAgLy8gQEluamVjdChmb3J3YXJkUmVmKCgpID0+IFBhbmVsTWFuYWdlclNlcnZpY2UpKVxyXG4gICAgICAgIC8vIHB1YmxpYyBwYW5lbE1hbmFnZXI6IFBhbmVsTWFuYWdlclNlcnZpY2UsXHJcblxyXG4gICAgICAgIC8vIEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBXaWRnZXRNYW5hZ2VyU2VydmljZSkpXHJcbiAgICAgICAgLy8gcHVibGljIHdpZGdldE1hbmFnZXI6IFdpZGdldE1hbmFnZXJTZXJ2aWNlLFxyXG5cclxuICAgICAgICAvLyBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gV2lkZ2V0UGxhY2VIb2xkZXJTZXJ2aWNlKSlcclxuICAgICAgICAvLyBwdWJsaWMgd2lkZ2V0UGxhY2VIb2xkZXI6IFdpZGdldFBsYWNlSG9sZGVyU2VydmljZSxcclxuXHJcbiAgICAgICAgLy8gQEluamVjdChmb3J3YXJkUmVmKCgpID0+IE1hcE1hbmFnZXJTZXJ2aWNlKSlcclxuICAgICAgICAvLyBwdWJsaWMgbWFwTWFuYWdlcjogTWFwTWFuYWdlclNlcnZpY2UsXHJcblxyXG4gICAgICAgIC8vIEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBMYXlvdXRNYW5hZ2VyU2VydmljZSkpXHJcbiAgICAgICAgLy8gcHVibGljIGxheW91dE1hbmFnZXI6IExheW91dE1hbmFnZXJTZXJ2aWNlXHJcbiAgICApIHtcclxuICAgICAgICBpZiAoIWNvbmZpZykge1xyXG4gICAgICAgICAgICBjb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0QXBwR2xvYmFsQ29uZmlnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy91cmzkuK3lj4LmlbDmlLnlj5jml7bvvIzph43mlrDnu5nlhajlsYDlj4LmlbDkuK3nmoR1cmxQYXJhbXPotYvlgLxcclxuICAgICAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy51cmxQYXJhbXMgPSBPYmplY3QuYXNzaWduKHRoaXMuY29uZmlnLnVybFBhcmFtcywgcGFyYW1zKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXX0=