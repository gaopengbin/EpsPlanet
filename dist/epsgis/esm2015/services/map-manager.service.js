import { __awaiter } from "tslib";
import { aspect } from './aspect.service';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import * as i0 from "@angular/core";
import * as i1 from "./utils.service";
import * as i2 from "./request.service";
import * as i3 from "../models/app-config";
import * as i4 from "./event-emitter.service";
import * as i5 from "./common.service";
import * as i6 from "./component-loader.service";
export class MapManagerService {
    constructor(utils, httpService, globalParams, eventService, commonService, componentLoader) {
        this.utils = utils;
        this.httpService = httpService;
        this.globalParams = globalParams;
        this.eventService = eventService;
        this.commonService = commonService;
        this.componentLoader = componentLoader;
        this.originMapPosition = null;
        this.mapPosition = null;
        this.appConfig = null;
        this.id = "";
        this.mapDivId = '';
        this.map = null;
        this.view = null;
        this.previousInfoWindow = null;
        this.mobileInfoWindow = null;
        this.isMobileInfoWindow = false;
        this.tiandituToken = "95c02448602e3ee0683e07de5e772e96";
        this.layerInfosObj = null;
        this.options = null;
        this.urlParams = null;
        this.comRefMap = null;
        this.mapDivId = this.id = this.globalParams.jimuConfig.mapId;
        this.urlParams = this.globalParams.urlParams;
    }
    setAppConfig(config) {
        this.appConfig = config;
    }
    restorePosition() {
        this.changeMapPosition(this.originMapPosition);
    }
    changeMapPosition(position, triggerEvent = true) {
        this.mapPosition = _.merge(this.mapPosition, position);
        this.commonService.setWidgetPosition(this.comRefMap, this.mapPosition);
        if (this.comRefMap.instance.resize) {
            this.comRefMap.instance.resize();
        }
        if (triggerEvent) {
            this.eventService.rss.emit(this.eventService._mapPositionChanged, this.mapPosition);
        }
    }
    setMapPosition(position) {
        this.mapPosition = position;
        this.originMapPosition = _.cloneDeep(position);
    }
    getMapPosition() {
        return this.mapPosition;
    }
    centerAtMap(lgtd, lttd, s) {
    }
    showMap() {
        return __awaiter(this, void 0, void 0, function* () {
            let mapComp = this.componentLoader.findComponent(this.appConfig.map.uri);
            if (!mapComp) {
                console.log("没有找到map组件，请检查config.json文件map[uri]配置");
                return;
            }
            const _path = (typeof mapComp.prototype.getCompInfo === "function") ? mapComp.prototype.getCompInfo().path : "";
            let _config, _manifest;
            if (_path) {
                try {
                    const _rpath = this.globalParams.widgetRootPath + "/" + _path;
                    _manifest = yield this.httpService.getJsonFile(_rpath + "/manifest.json");
                    _config = this.appConfig.map.config;
                    if (!_config) {
                        let configPath = this.appConfig.map.configPath || 'config.json';
                        _config = yield this.httpService.getJsonFile(_rpath + "/" + configPath);
                    }
                }
                catch (err) {
                    console.log(err);
                }
            }
            this.comRefMap = this.componentLoader.createComponentToHome(mapComp);
            this.comRefMap.instance.setProps({
                appConfig: this.appConfig,
                config: _config,
                manifest: _manifest
            });
            let _position = _.cloneDeep(this.appConfig.map.position);
            this.commonService.setWidgetPosition(this.comRefMap, _position);
            aspect.after(this.comRefMap.instance, "afterNgOnInit", () => {
                this.initMap();
            });
            this.componentLoader.showInHome(this.comRefMap);
        });
    }
    destoryMap() {
        if (this.comRefMap) {
            this.comRefMap.destroy();
            console.log('destroy map.');
        }
    }
    initMap() {
        this.comRefMap.instance.initMap().then((map) => {
            console.log('map loaded.');
            if (this.globalParams.mapConfig.is3D === true) {
                this.view = map;
                this.comRefMap.instance.view = map;
            }
            else {
                this.comRefMap.instance.map = map;
                this.map = map;
            }
            this.eventService.rss.emit(this.eventService._createPanelContainer, this.commonService.getComponentRootNode(this.comRefMap));
            this.eventService.rss.emit(this.eventService._mapLoaded, map);
        }, (msg) => {
            console.log(msg);
        });
    }
}
MapManagerService.ɵfac = function MapManagerService_Factory(t) { return new (t || MapManagerService)(i0.ɵɵinject(i1.UtilsService), i0.ɵɵinject(i2.HttpReqService), i0.ɵɵinject(i3.AppGlobalConfig), i0.ɵɵinject(i4.EventEmitterService), i0.ɵɵinject(i5.CommonService), i0.ɵɵinject(i6.ComponentLoaderService)); };
MapManagerService.ɵprov = i0.ɵɵdefineInjectable({ token: MapManagerService, factory: MapManagerService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MapManagerService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.UtilsService }, { type: i2.HttpReqService }, { type: i3.AppGlobalConfig }, { type: i4.EventEmitterService }, { type: i5.CommonService }, { type: i6.ComponentLoaderService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLW1hbmFnZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2Vwc2dpcy9zZXJ2aWNlcy9tYXAtbWFuYWdlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFjLE1BQU0sa0JBQWtCLENBQUM7QUFFdEQsT0FBTyxFQUFFLFVBQVUsRUFBMEIsTUFBTSxlQUFlLENBQUM7QUFNbkUsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7Ozs7Ozs7O0FBTzVCLE1BQU0sT0FBTyxpQkFBaUI7SUFpQjVCLFlBQ1UsS0FBbUIsRUFDbkIsV0FBMkIsRUFDM0IsWUFBNkIsRUFDN0IsWUFBaUMsRUFDakMsYUFBNEIsRUFDNUIsZUFBdUM7UUFMdkMsVUFBSyxHQUFMLEtBQUssQ0FBYztRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBZ0I7UUFDM0IsaUJBQVksR0FBWixZQUFZLENBQWlCO1FBQzdCLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUNqQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixvQkFBZSxHQUFmLGVBQWUsQ0FBd0I7UUF0QmpELHNCQUFpQixHQUFRLElBQUksQ0FBQztRQUM5QixnQkFBVyxHQUFRLElBQUksQ0FBQztRQUN4QixjQUFTLEdBQVEsSUFBSSxDQUFDO1FBQ3RCLE9BQUUsR0FBVyxFQUFFLENBQUM7UUFDaEIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixRQUFHLEdBQVEsSUFBSSxDQUFDO1FBQ2hCLFNBQUksR0FBUSxJQUFJLENBQUM7UUFDakIsdUJBQWtCLEdBQVEsSUFBSSxDQUFDO1FBQy9CLHFCQUFnQixHQUFRLElBQUksQ0FBQztRQUM3Qix1QkFBa0IsR0FBWSxLQUFLLENBQUM7UUFDcEMsa0JBQWEsR0FBVyxrQ0FBa0MsQ0FBQztRQUMzRCxrQkFBYSxHQUFRLElBQUksQ0FBQztRQUMxQixZQUFPLEdBQVEsSUFBSSxD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QUFDLEdBQUcsRUFBRSxFQUFFO1lBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDM0IsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO2dCQUM3QyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztnQkFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQzthQUNwQztpQkFBTTtnQkFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO2dCQUNsQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQzthQUNoQjtZQUVELElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFFN0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2hFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O2tGQXRKVSxpQkFBaUI7eURBQWpCLGlCQUFpQixXQUFqQixpQkFBaUIsbUJBRmhCLE1BQU07dUZBRVAsaUJBQWlCO2NBSDdCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFzcGVjdCwgVGVzdEFzcGVjdCB9IGZyb20gJy4vYXNwZWN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyU2VydmljZSB9IGZyb20gJy4vY29tcG9uZW50LWxvYWRlci5zZXJ2aWNlJztcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yLCBDb21wb25lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFV0aWxzU2VydmljZSB9IGZyb20gJy4vdXRpbHMuc2VydmljZSc7XG5pbXBvcnQgeyBIdHRwUmVxU2VydmljZSB9IGZyb20gJy4vcmVxdWVzdC5zZXJ2aWNlJztcbmltcG9ydCB7IEV2ZW50RW1pdHRlclNlcnZpY2UgfSBmcm9tICcuL2V2ZW50LWVtaXR0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBDb21tb25TZXJ2aWNlIH0gZnJvbSAnLi9jb21tb24uc2VydmljZSc7XG5pbXBvcnQgeyBBcHBHbG9iYWxDb25maWcgfSBmcm9tICcuLi9tb2RlbHMvYXBwLWNvbmZpZyc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG4vKipcbiAqIGNyZWF0ZSBieSBydWlyIDE5MTAxNCAgbWFwTWFuYWdlci5qc1xuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBNYXBNYW5hZ2VyU2VydmljZSB7XG4gIG9yaWdpbk1hcFBvc2l0aW9uOiBhbnkgPSBudWxsO1xuICBtYXBQb3NpdGlvbjogYW55ID0gbnVsbDtcbiAgYXBwQ29uZmlnOiBhbnkgPSBudWxsO1xuICBpZDogc3RyaW5nID0gXCJcIjtcbiAgbWFwRGl2SWQ6IHN0cmluZyA9ICcnO1xuICBtYXA6IGFueSA9IG51bGw7XG4gIHZpZXc6IGFueSA9IG51bGw7XG4gIHByZXZpb3VzSW5mb1dpbmRvdzogYW55ID0gbnVsbDtcbiAgbW9iaWxlSW5mb1dpbmRvdzogYW55ID0gbnVsbDtcbiAgaXNNb2JpbGVJbmZvV2luZG93OiBib29sZWFuID0gZmFsc2U7XG4gIHRpYW5kaXR1VG9rZW46IHN0cmluZyA9IFwiOTVjMDI0NDg2MDJlM2VlMDY4M2UwN2RlNWU3NzJlOTZcIjsvL+WQjumdouaUvmNvbmZpZ1xuICBsYXllckluZm9zT2JqOiBhbnkgPSBudWxsO1xuICBvcHRpb25zOiBhbnkgPSBudWxsO1xuICB1cmxQYXJhbXM6IGFueSA9IG51bGw7XG4gIGNvbVJlZk1hcDogQ29tcG9uZW50UmVmPGFueT4gPSBudWxsO1xuICAvL2NvbXBvbmVudExvYWRlcjpDb21wb25lbnRMb2FkZXJTZXJ2aWNlO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHV0aWxzOiBVdGlsc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBodHRwU2VydmljZTogSHR0cFJlcVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBnbG9iYWxQYXJhbXM6IEFwcEdsb2JhbENvbmZpZyxcbiAgICBwcml2YXRlIGV2ZW50U2VydmljZTogRXZlbnRFbWl0dGVyU2VydmljZSxcbiAgICBwcml2YXRlIGNvbW1vblNlcnZpY2U6IENvbW1vblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb21wb25lbnRMb2FkZXI6IENvbXBvbmVudExvYWRlclNlcnZpY2VcbiAgICAvL3ByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yXG4gICkge1xuICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuXG4gICAgLy8gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgLy8gICB0aGlzLmNvbXBvbmVudExvYWRlciA9IGluamVjdG9yLmdldChDb21wb25lbnRMb2FkZXJTZXJ2aWNlKTtcbiAgICAvLyB9KTtcbiAgICAvLyB9LCA2MDApO1xuICAgIHRoaXMubWFwRGl2SWQgPSB0aGlzLmlkID0gdGhpcy5nbG9iYWxQYXJhbXMuamltdUNvbmZpZy5tYXBJZDtcbiAgICB0aGlzLnVybFBhcmFtcyA9IHRoaXMuZ2xvYmFsUGFyYW1zLnVybFBhcmFtcztcbiAgfVxuICBzZXRBcHBDb25maWcoY29uZmlnKSB7XG4gICAgdGhpcy5hcHBDb25maWcgPSBjb25maWc7XG4gIH1cbiAgcmVzdG9yZVBvc2l0aW9uKCkge1xuICAgIHRoaXMuY2hhbmdlTWFwUG9zaXRpb24odGhpcy5vcmlnaW5NYXBQb3NpdGlvbik7XG4gIH1cbiAgY2hhbmdlTWFwUG9zaXRpb24ocG9zaXRpb24sIHRyaWdnZXJFdmVudDogYm9vbGVhbiA9IHRydWUpIHtcbiAgICB0aGlzLm1hcFBvc2l0aW9uID0gXy5tZXJnZSh0aGlzLm1hcFBvc2l0aW9uLCBwb3NpdGlvbik7XG4gICAgdGhpcy5jb21tb25TZXJ2aWNlLnNldFdpZGdldFBvc2l0aW9uKHRoaXMuY29tUmVmTWFwLCB0aGlzLm1hcFBvc2l0aW9uKTtcbiAgICBpZiAodGhpcy5jb21SZWZNYXAuaW5zdGFuY2UucmVzaXplKSB7XG4gICAgICB0aGlzLmNvbVJlZk1hcC5pbnN0YW5jZS5yZXNpemUoKTtcbiAgICB9XG4gICAgaWYgKHRyaWdnZXJFdmVudCkge1xuICAgICAgdGhpcy5ldmVudFNlcnZpY2UucnNzLmVtaXQodGhpcy5ldmVudFNlcnZpY2UuX21hcFBvc2l0aW9uQ2hhbmdlZCwgdGhpcy5tYXBQb3NpdGlvbik7XG4gICAgfVxuICB9XG4gIHNldE1hcFBvc2l0aW9uKHBvc2l0aW9uKSB7XG4gICAgdGhpcy5tYXBQb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgIHRoaXMub3JpZ2luTWFwUG9zaXRpb24gPSBfLmNsb25lRGVlcChwb3NpdGlvbik7XG4gICAgLy/lvoXlvIDlj5FcbiAgfVxuXG4gIGdldE1hcFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm1hcFBvc2l0aW9uO1xuICB9XG4gIGNlbnRlckF0TWFwKGxndGQsIGx0dGQsIHMpIHtcblxuICB9XG4gIGFzeW5jIHNob3dNYXAoKSB7XG4gICAgbGV0IG1hcENvbXAgPSB0aGlzLmNvbXBvbmVudExvYWRlci5maW5kQ29tcG9uZW50KHRoaXMuYXBwQ29uZmlnLm1hcC51cmkpO1xuICAgIGlmICghbWFwQ29tcCkge1xuICAgICAgY29uc29sZS5sb2coXCLmsqHmnInmib7liLBtYXDnu4Tku7bvvIzor7fmo4Dmn6Vjb25maWcuanNvbuaWh+S7tm1hcFt1cmld6YWN572uXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBfcGF0aCA9ICh0eXBlb2YgbWFwQ29tcC5wcm90b3R5cGUuZ2V0Q29tcEluZm8gPT09IFwiZnVuY3Rpb25cIikgPyBtYXBDb21wLnByb3RvdHlwZS5nZXRDb21wSW5mbygpLnBhdGggOiBcIlwiO1xuICAgIGxldCBfY29uZmlnLCBfbWFuaWZlc3Q7XG4gICAgaWYgKF9wYXRoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBfcnBhdGggPSB0aGlzLmdsb2JhbFBhcmFtcy53aWRnZXRSb290UGF0aCArIFwiL1wiICsgX3BhdGg7XG4gICAgICAgIF9tYW5pZmVzdCA9IGF3YWl0IHRoaXMuaHR0cFNlcnZpY2UuZ2V0SnNvbkZpbGUoX3JwYXRoICsgXCIvbWFuaWZlc3QuanNvblwiKTtcbiAgICAgICAgLy8gbW9kaWZ5IGJ5IHN5IDIwMjAvNi8yMiDlop7liqDlr7ljb25maWdQYXRo5ZKMY29uZmln55qE5pSv5oyBXG4gICAgICAgIF9jb25maWcgPSB0aGlzLmFwcENvbmZpZy5tYXAuY29uZmlnO1xuICAgICAgICBpZiAoIV9jb25maWcpIHtcbiAgICAgICAgICBsZXQgY29uZmlnUGF0aCA9IHRoaXMuYXBwQ29uZmlnLm1hcC5jb25maWdQYXRoIHx8ICdjb25maWcuanNvbic7XG4gICAgICAgICAgX2NvbmZpZyA9IGF3YWl0IHRoaXMuaHR0cFNlcnZpY2UuZ2V0SnNvbkZpbGUoX3JwYXRoICsgXCIvXCIgKyBjb25maWdQYXRoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyB0aGlzLmFwcENvbmZpZy5tYXAuY29uZmlnID0gX2NvbmZpZztcbiAgICAgICAgLy8gdGhpcy5hcHBDb25maWcubWFwLm1hbmlmZXN0ID0gX21hbmlmZXN0O1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY29tUmVmTWFwID0gdGhpcy5jb21wb25lbnRMb2FkZXIuY3JlYXRlQ29tcG9uZW50VG9Ib21lKG1hcENvbXApO1xuICAgIC8vIHRoaXMuY29tUmVmTWFwLmluc3RhbmNlLnNob3dTZXR0aW5nV2hlbkluUGFuZWw9dHJ1ZTtcbiAgICB0aGlzLmNvbVJlZk1hcC5pbnN0YW5jZS5zZXRQcm9wcyh7XG4gICAgICBhcHBDb25maWc6IHRoaXMuYXBwQ29uZmlnLFxuICAgICAgY29uZmlnOiBfY29uZmlnLFxuICAgICAgbWFuaWZlc3Q6IF9tYW5pZmVzdFxuICAgIH0pO1xuICAgIGxldCBfcG9zaXRpb24gPSBfLmNsb25lRGVlcCh0aGlzLmFwcENvbmZpZy5tYXAucG9zaXRpb24pO1xuICAgIC8vIGlmIChfcG9zaXRpb24udG9wKSB7XG4gICAgLy8gICBpZiAoX3Bvc2l0aW9uLmhlaWdodCA9PT0gXCIxMDAlXCIpIHtcbiAgICAvLyAgICAgY29uc3QgX3RvcDogbnVtYmVyID0gcGFyc2VJbnQodGhpcy5jb21tb25TZXJ2aWNlLmdldFB4TnVtYmVyKF9wb3NpdGlvbi50b3AudG9TdHJpbmcoKSkudG9TdHJpbmcoKSwgMTApO1xuICAgIC8vICAgICBjb25zdCBoID0gZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQgLSBfdG9wO1xuICAgIC8vICAgICBfcG9zaXRpb24uaGVpZ2h0ID0gdGhpcy5jb21tb25TZXJ2aWNlLmdldFB4KGgpO1xuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgICB0aGlzLmNvbW1vblNlcnZpY2Uuc2V0V2lkZ2V0UG9zaXRpb24odGhpcy5jb21SZWZNYXAsIF9wb3NpdGlvbik7XG4gICAgLy9hc3BlY3QuYWZ0ZXIodGhpcy5jb21SZWZNYXAuaW5zdGFuY2UsIFwibmdPbkluaXRcIiwgdGhpcy50ZXN0KTtcbiAgICBhc3BlY3QuYWZ0ZXIodGhpcy5jb21SZWZNYXAuaW5zdGFuY2UsIFwiYWZ0ZXJOZ09uSW5pdFwiLCAoKT0+e1xuICAgICAgdGhpcy5pbml0TWFwKCk7XG4gICAgfSk7XG4gICAgdGhpcy5jb21wb25lbnRMb2FkZXIuc2hvd0luSG9tZSh0aGlzLmNvbVJlZk1hcCk7XG4gICAgLy90aGlzLmNvbVJlZk1hcC5pbnN0YW5jZVtcIm5nT25Jbml0XCJdKCk7XG4gICAgLy8gY29uc3QgdGVzdCA9IG5ldyBUZXN0QXNwZWN0KCk7XG4gICAgLy8gYXNwZWN0LmJlZm9yZSh0ZXN0LCBcInRlc3RCZWZvcmVcIiwgKCkgPT4ge1xuICAgIC8vICAgY29uc29sZS5sb2coXCJ0ZXN0QmVmb3JlIGNvbXBsYXRlXCIpO1xuICAgIC8vIH0pO1xuICAgIC8vIGFzcGVjdC5hZnRlcih0ZXN0LCBcInRlc3RBZnRlclwiLCAoKSA9PiB7XG4gICAgLy8gICBjb25zb2xlLmxvZyhcInRlc3RBZnRlciBjb21wbGF0ZVwiKTtcbiAgICAvLyB9KTtcbiAgICAvLyBhc3BlY3QuYXJvdW5kKHRlc3QsIFwidGVzdEFyb3VuZFwiLCAoKSA9PiB7XG4gICAgLy8gICBjb25zb2xlLmxvZyhcInRlc3RBcm91bmQgY29tcGxhdGVcIik7XG4gICAgLy8gfSk7XG4gICAgLy8gdGVzdC50ZXN0QmVmb3JlKCk7XG4gICAgLy8gdGVzdC50ZXN0QWZ0ZXIoKTtcbiAgICAvLyB0ZXN0LnRlc3RBcm91bmQoKTtcblxuICB9XG4gIC8qKlxuICAgKiDplIDmr4HlnLDlm77nu4Tku7ZcbiAgICovXG4gIGRlc3RvcnlNYXAoKSB7XG4gICAgaWYgKHRoaXMuY29tUmVmTWFwKSB7XG4gICAgICB0aGlzLmNvbVJlZk1hcC5kZXN0cm95KCk7XG4gICAgICBjb25zb2xlLmxvZygnZGVzdHJveSBtYXAuJyk7XG4gICAgfVxuICB9XG4gIGluaXRNYXAoKSB7XG4gICAgdGhpcy5jb21SZWZNYXAuaW5zdGFuY2UuaW5pdE1hcCgpLnRoZW4oKG1hcCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ21hcCBsb2FkZWQuJyk7XG4gICAgICBpZiAodGhpcy5nbG9iYWxQYXJhbXMubWFwQ29uZmlnLmlzM0QgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy52aWV3ID0gbWFwO1xuICAgICAgICB0aGlzLmNvbVJlZk1hcC5pbnN0YW5jZS52aWV3ID0gbWFwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb21SZWZNYXAuaW5zdGFuY2UubWFwID0gbWFwO1xuICAgICAgICB0aGlzLm1hcCA9IG1hcDtcbiAgICAgIH1cbiAgICAgIC8v5Zug5pyJb3BlbkF0U3RhcnTnmoRwYW5lbO+8jOaJgOS7peWFiOWIm+W7unBhbmVs5a655ZmoXG4gICAgICB0aGlzLmV2ZW50U2VydmljZS5yc3MuZW1pdCh0aGlzLmV2ZW50U2VydmljZS5fY3JlYXRlUGFuZWxDb250YWluZXIsIHRoaXMuY29tbW9uU2VydmljZS5nZXRDb21wb25lbnRSb290Tm9kZSh0aGlzLmNvbVJlZk1hcCkpO1xuICAgICAgLy/lho3liqDovb3lnLDlm77lj4rnu4Tku7ZcbiAgICAgIHRoaXMuZXZlbnRTZXJ2aWNlLnJzcy5lbWl0KHRoaXMuZXZlbnRTZXJ2aWNlLl9tYXBMb2FkZWQsIG1hcCk7XG4gICAgfSwgKG1zZykgPT4ge1xuICAgICAgY29uc29sZS5sb2cobXNnKTtcbiAgICB9KTtcbiAgfVxufVxuIl19