import { Injectable } from '@angular/core';
import { EventEmitter } from 'events';
import * as i0 from "@angular/core";
export class EventEmitterService {
    constructor() {
        this.rss = new EventEmitter();
        this._mapLoaded = "manLoaded";
        this._mapChanged = "mapChanged";
        this._viewLoaded = "viewLoaded";
        this._viewChanged = "viewChanged";
        this._widget_Created = "widget-created";
        this._widgetCreated = "widgetCreated";
        this._designConfigChanged = "DesignConfigChanged";
        this._appConfigLoaded = "appConfigLoaded";
        this._appConfigChanged = "appConfigChanged";
        this._header_ConfigChanged = "header-configChanged";
        this._createPanelContainer = "createPanelContainer";
        this._mapPositionChanged = "mapPositionChanged";
        this._checkChangeDetector = "detectChanges";
        this._imageViewerIndexChanged = "imageViewerIndexChanged";
    }
    removeListener(event, listener) {
        if (typeof listener === "function") {
            return this.rss.removeListener(event, listener);
        }
        return this.rss;
    }
}
EventEmitterService.ɵfac = function EventEmitterService_Factory(t) { return new (t || EventEmitterService)(); };
EventEmitterService.ɵprov = i0.ɵɵdefineInjectable({ token: EventEmitterService, factory: EventEmitterService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EventEmitterService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtZW1pdHRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZXBzZ2lzL3NlcnZpY2VzL2V2ZW50LWVtaXR0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxRQUFRLENBQUM7O0FBS3RDLE1BQU0sT0FBTyxtQkFBbUI7SUF1RDlCO1FBckRBLFFBQUcsR0FBaUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUk5QixlQUFVLEdBQVcsV0FBVyxDQUFDO1FBSWpDLGdCQUFXLEdBQVcsWUFBWSxDQUFDO1FBSW5DLGdCQUFXLEdBQVcsWUFBWSxDQUFDO1FBSW5DLGlCQUFZLEdBQVcsYUFBYSxDQUFDO1FBSXJDLG9CQUFlLEdBQVcsZ0JBQWdCLENBQUM7UUFJM0MsbUJBQWMsR0FBVyxlQUFlLENBQUM7UUFJekMseUJBQW9CLEdBQVcscUJBQXFCLENBQUM7UUFJckQscUJBQWdCLEdBQVcsaUJBQWlCLENBQUM7UUFFN0Msc0JBQWlCLEdBQVcsa0JBQWtCLENBQUM7UUFDL0MsMEJBQXFCLEdBQUcsc0JBQXNCLENBQUM7UUFJL0MsMEJBQXFCLEdBQVcsc0JBQXNCLENBQUM7UUFJdkQsd0JBQW1CLEdBQVcsb0JBQW9CLENBQUM7UUFLbkQseUJBQW9CLEdBQVcsZUFBZSxDQUFDO1FBSS9DLDZCQUF3QixHQUFXLHlCQUF5QixDQUFDO0lBSXRFLENBQUM7SUFJRCxjQUFjLENBQUMsS0FBbUIsRUFBRSxRQUFrQztRQUNwRSxJQUFJLE9BQU8sUUFBUSxLQUFLLFVBQVUsRUFBRTtZQUNsQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztTQUNqRDtRQUNELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDOztzRkFuRVUsbUJBQW1COzJEQUFuQixtQkFBbUIsV0FBbkIsbUJBQW1CLG1CQUZsQixNQUFNO3VGQUVQLG1CQUFtQjtjQUgvQixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdldmVudHMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBFdmVudEVtaXR0ZXJTZXJ2aWNlIHtcblxuICByc3M6IEV2ZW50RW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLyoqXG4gICAqIOWcsOWbvuWKoOi9veWujOaIkFxuICAgKi9cbiAgcmVhZG9ubHkgX21hcExvYWRlZDogc3RyaW5nID0gXCJtYW5Mb2FkZWRcIjtcbiAgLyoqXG4gICAqIOWcsOWbvuaUueWPmFxuICAgKi9cbiAgcmVhZG9ubHkgX21hcENoYW5nZWQ6IHN0cmluZyA9IFwibWFwQ2hhbmdlZFwiO1xuICAvKipcbiAgICogXG4gICAqL1xuICByZWFkb25seSBfdmlld0xvYWRlZDogc3RyaW5nID0gXCJ2aWV3TG9hZGVkXCI7XG4gIC8qKlxuICAgKiBcbiAgICovXG4gIHJlYWRvbmx5IF92aWV3Q2hhbmdlZDogc3RyaW5nID0gXCJ2aWV3Q2hhbmdlZFwiO1xuICAvKipcbiAgICog57uE5Lu25Yib5bu65oiQ5YqfXG4gICAqL1xuICByZWFkb25seSBfd2lkZ2V0X0NyZWF0ZWQ6IHN0cmluZyA9IFwid2lkZ2V0LWNyZWF0ZWRcIjtcbiAgLyoqXG4gICAqIOe7hOS7tuWIm+W7uuaIkOWKn1xuICAgKi9cbiAgcmVhZG9ubHkgX3dpZGdldENyZWF0ZWQ6IHN0cmluZyA9IFwid2lkZ2V0Q3JlYXRlZFwiO1xuICAvKipcbiAgICogXG4gICAqL1xuICByZWFkb25seSBfZGVzaWduQ29uZmlnQ2hhbmdlZDogc3RyaW5nID0gXCJEZXNpZ25Db25maWdDaGFuZ2VkXCI7XG4gIC8qKlxuICAgKiBcbiAgICovXG4gIHJlYWRvbmx5IF9hcHBDb25maWdMb2FkZWQ6IHN0cmluZyA9IFwiYXBwQ29uZmlnTG9hZGVkXCI7XG5cbiAgcmVhZG9ubHkgX2FwcENvbmZpZ0NoYW5nZWQ6IHN0cmluZyA9IFwiYXBwQ29uZmlnQ2hhbmdlZFwiO1xuICByZWFkb25seSBfaGVhZGVyX0NvbmZpZ0NoYW5nZWQgPSBcImhlYWRlci1jb25maWdDaGFuZ2VkXCI7XG4gIC8qKlxuICAgKiBcbiAgICovXG4gIHJlYWRvbmx5IF9jcmVhdGVQYW5lbENvbnRhaW5lcjogc3RyaW5nID0gXCJjcmVhdGVQYW5lbENvbnRhaW5lclwiO1xuICAvKipcbiAgICogXG4gICAqL1xuICByZWFkb25seSBfbWFwUG9zaXRpb25DaGFuZ2VkOiBzdHJpbmcgPSBcIm1hcFBvc2l0aW9uQ2hhbmdlZFwiO1xuXG4gIC8qKlxuICAgKiDlj5jmm7Tmo4DmtYsgYWRkIHlseSAyMDIwMDMyN1xuICAgKi9cbiAgcmVhZG9ubHkgX2NoZWNrQ2hhbmdlRGV0ZWN0b3I6IHN0cmluZyA9IFwiZGV0ZWN0Q2hhbmdlc1wiO1xuICAvKipcbiAgICog5Zu+54mH5p+l55yL5Zmo77yM57Si5byV5pS55Y+YXG4gICAqL1xuICByZWFkb25seSBfaW1hZ2VWaWV3ZXJJbmRleENoYW5nZWQ6IHN0cmluZyA9IFwiaW1hZ2VWaWV3ZXJJbmRleENoYW5nZWRcIjtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy9Qb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5IGxlYWsgZGV0ZWN0ZWQuIDExIG1hcENoYW5nZWQgbGlzdGVuZXJzIGFkZGVkLiBVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byBpbmNyZWFzZSBsaW1pdFxuICAgIC8vdGhpcy5yc3Muc2V0TWF4TGlzdGVuZXJzKDUwKTtcbiAgfVxuICAvKipcbiAgICog56e76Zmk55uR5ZCsXG4gICAqL1xuICByZW1vdmVMaXN0ZW5lcihldmVudDogc3RyaW5nIHwgYW55LCBsaXN0ZW5lcjogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkKSB7XG4gICAgaWYgKHR5cGVvZiBsaXN0ZW5lciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICByZXR1cm4gdGhpcy5yc3MucmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucnNzO1xuICB9XG59XG4iXX0=