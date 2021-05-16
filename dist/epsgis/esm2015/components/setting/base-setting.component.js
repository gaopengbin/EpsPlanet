import { BaseWidget } from '../base-widget';
import { Directive } from '@angular/core';
import { RequestResultModel } from '../../models/http/request.result';
import * as i0 from "@angular/core";
export class BaseSettingComponent extends BaseWidget {
    constructor() {
        super();
        this.configFileName = "config.json";
        this.manifestFileName = "manifest.json";
        this.validateResult = new RequestResultModel(false);
        this._needLoadManifest = false;
    }
    get needLoadManifest() {
        return this._needLoadManifest;
    }
    set needLoadManifest(value) {
        this._needLoadManifest = value;
    }
    ngOnInit() {
        super.ngOnInit();
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    get configJsonPhysicalPath() {
        return this.configJsonWebPath.replace(this.globalParams.widgetRootPath + "/", "");
    }
    get manifestJsonPhysicalPath() {
        return this.widgetInstance.getCompInfo().path + "/" + this.manifestFileName;
    }
    getValidateResult() {
        return this.validateResult;
    }
    setValidateResult(success, errMsg, data) {
        this.validateResult.success = success;
        this.validateResult.msg = errMsg;
        this.validateResult.data = data;
    }
    saveConfigJson(json) {
        return this.settingService.saveConfig({ filePath: this.configJsonPhysicalPath, content: (typeof json === "string" ? json : JSON.stringify(json)) });
    }
    saveManifestJson(json) {
        return this.settingService.saveConfig({ filePath: this.manifestJsonPhysicalPath, content: typeof json === "string" ? json : JSON.stringify(json) });
    }
    onSaveError(error) {
        console.error(error);
    }
}
BaseSettingComponent.ɵfac = function BaseSettingComponent_Factory(t) { return new (t || BaseSettingComponent)(); };
BaseSettingComponent.ɵdir = i0.ɵɵdefineDirective({ type: BaseSettingComponent, features: [i0.ɵɵInheritDefinitionFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseSettingComponent, [{
        type: Directive
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1zZXR0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Vwc2dpcy9jb21wb25lbnRzL3NldHRpbmcvYmFzZS1zZXR0aW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7QUFNdEUsTUFBTSxPQUFPLG9CQUFxQixTQUFRLFVBQVU7SUF3Q2hEO1FBQ0ksS0FBSyxFQUFFLENBQUM7UUFuQ1osbUJBQWMsR0FBRyxhQUFhLENBQUM7UUFNL0IscUJBQWdCLEdBQUcsZUFBZSxDQUFDO1FBZ0IzQixtQkFBYyxHQUF1QixJQUFJLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBS25FLHNCQUFpQixHQUFHLEtBQUssQ0FBQztJQVNsQyxDQUFDO0lBUkQsSUFBVyxnQkFBZ0I7UUFDdkIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDbEMsQ0FBQztJQUNELElBQVcsZ0JBQWdCLENBQUMsS0FBSztRQUM3QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQ25DLENBQUM7SUFJRCxRQUFRO1FBQ0osS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxlQUFlO1FBQ1gsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxXQUFXO1FBQ1AsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFJRCxJQUFXLHNCQUFzQjtRQUM3QixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLEdBQUcsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFJRCxJQUFXLHdCQUF3QjtRQUMvQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUE7SUFDL0UsQ0FBQztJQUNELGlCQUFpQjtRQUNiLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUMvQixDQUFDO0lBT0QsaUJBQWlCLENBQUMsT0FBZ0IsRUFBRSxNQUFlLEVBQUUsSUFBVTtRQUMzRCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNwQyxDQUFDO0lBSUQsY0FBYyxDQUFDLElBQVM7UUFDcEIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsc0JBQXNCLEVBQUUsT0FBTyxFQUFFLENBQUMsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDdkosQ0FBQztJQUlELGdCQUFnQixDQUFDLElBQVM7UUFDdEIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsd0JBQXdCLEVBQUUsT0FBTyxFQUFFLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUN2SixDQUFDO0lBS0QsV0FBVyxDQUFDLEtBQVk7UUFDcEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDOzt3RkFqR1Esb0JBQW9CO3lEQUFwQixvQkFBb0I7dUZBQXBCLG9CQUFvQjtjQURoQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZVdpZGdldCB9IGZyb20gJy4uL2Jhc2Utd2lkZ2V0JztcbmltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZVdpZGdldENvbXBvbmVudCB9IGZyb20gJy4uL2Jhc2Utd2lkZ2V0L2Jhc2Utd2lkZ2V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXF1ZXN0UmVzdWx0TW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMvaHR0cC9yZXF1ZXN0LnJlc3VsdCc7XG5cbi8qKlxuICog57uE5Lu2c2V0dGluZ+WfuuexuyBydWlyXG4gKi9cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGNsYXNzIEJhc2VTZXR0aW5nQ29tcG9uZW50IGV4dGVuZHMgQmFzZVdpZGdldCB7XG5cbiAgICAvKipcbiAgICAgKiDnu4Tku7blrp7kvotcbiAgICAgKi9cbiAgICB3aWRnZXRJbnN0YW5jZTogQmFzZVdpZGdldENvbXBvbmVudDtcbiAgICBjb25maWdGaWxlTmFtZSA9IFwiY29uZmlnLmpzb25cIjtcbiAgICAvKipcbiAgICAgKiBjb25maWcuanNvbue9keermei3r+W+hFxuICAgICAqL1xuICAgIGNvbmZpZ0pzb25XZWJQYXRoOiBzdHJpbmc7XG5cbiAgICBtYW5pZmVzdEZpbGVOYW1lID0gXCJtYW5pZmVzdC5qc29uXCI7XG4gICAgLyoqXG4gICAgICogbWFuaWZlc3QuanNvbue9keermei3r+W+hFxuICAgICAqL1xuICAgIG1hbmlmZXN0SnNvbldlYlBhdGg6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBjb25maWcuanNvbuaWh+S7tmpzb27mlbDmja5cbiAgICAgKi9cbiAgICBjb25maWdKc29uOiBhbnk7XG4gICAgLyoqXG4gICAgICogbWFuaWZlc3QuanNvbuaWh+S7tmpzb27mlbDmja5cbiAgICAgKi9cbiAgICBtYW5pZmVzdEpzb246IGFueTtcbiAgICAvKipcbiAgICAqIOmqjOivgee7k+aenFxuICAgICovXG4gICAgcHJpdmF0ZSB2YWxpZGF0ZVJlc3VsdDogUmVxdWVzdFJlc3VsdE1vZGVsID0gbmV3IFJlcXVlc3RSZXN1bHRNb2RlbChmYWxzZSk7XG5cbiAgICAvKipcbiAgICAgKiDmmK/lkKbpnIDopoHliqDovb1tYW5pZmVzdC5qc29uXG4gICAgICovXG4gICAgcHJpdmF0ZSBfbmVlZExvYWRNYW5pZmVzdCA9IGZhbHNlO1xuICAgIHB1YmxpYyBnZXQgbmVlZExvYWRNYW5pZmVzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25lZWRMb2FkTWFuaWZlc3Q7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgbmVlZExvYWRNYW5pZmVzdCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9uZWVkTG9hZE1hbmlmZXN0ID0gdmFsdWU7XG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgc3VwZXIubmdPbkluaXQoKTtcbiAgICB9XG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICBzdXBlci5uZ0FmdGVyVmlld0luaXQoKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIubmdPbkRlc3Ryb3koKTtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBjb25maWcuanNvbueJqeeQhuaWh+S7tui3r+W+hFxuICAgICovXG4gICAgcHVibGljIGdldCBjb25maWdKc29uUGh5c2ljYWxQYXRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWdKc29uV2ViUGF0aC5yZXBsYWNlKHRoaXMuZ2xvYmFsUGFyYW1zLndpZGdldFJvb3RQYXRoICsgXCIvXCIsIFwiXCIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBtYW5pZmVzdC5qc29u54mp55CG5paH5Lu26Lev5b6EXG4gICAgICovXG4gICAgcHVibGljIGdldCBtYW5pZmVzdEpzb25QaHlzaWNhbFBhdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLndpZGdldEluc3RhbmNlLmdldENvbXBJbmZvKCkucGF0aCArIFwiL1wiICsgdGhpcy5tYW5pZmVzdEZpbGVOYW1lXG4gICAgfVxuICAgIGdldFZhbGlkYXRlUmVzdWx0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0ZVJlc3VsdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6K6+572u6aqM6K+B57uT5p6cXG4gICAgICogQHBhcmFtIHN1Y2Nlc3Mg5piv5ZCm5oiQ5YqfXG4gICAgICogQHBhcmFtIGVyck1zZyDplJnor6/kv6Hmga9cbiAgICAgKiBAcGFyYW0gZGF0YSDopoHkv53lrZjnmoTmlbDmja5cbiAgICAgKi9cbiAgICBzZXRWYWxpZGF0ZVJlc3VsdChzdWNjZXNzOiBib29sZWFuLCBlcnJNc2c/OiBzdHJpbmcsIGRhdGE/OiBhbnkpIHtcbiAgICAgICAgdGhpcy52YWxpZGF0ZVJlc3VsdC5zdWNjZXNzID0gc3VjY2VzcztcbiAgICAgICAgdGhpcy52YWxpZGF0ZVJlc3VsdC5tc2cgPSBlcnJNc2c7XG4gICAgICAgIHRoaXMudmFsaWRhdGVSZXN1bHQuZGF0YSA9IGRhdGE7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOS/neWtmGNvbmZpZy5qc29uXG4gICAgICovXG4gICAgc2F2ZUNvbmZpZ0pzb24oanNvbjogYW55KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldHRpbmdTZXJ2aWNlLnNhdmVDb25maWcoeyBmaWxlUGF0aDogdGhpcy5jb25maWdKc29uUGh5c2ljYWxQYXRoLCBjb250ZW50OiAodHlwZW9mIGpzb24gPT09IFwic3RyaW5nXCIgPyBqc29uIDogSlNPTi5zdHJpbmdpZnkoanNvbikpIH0pXG4gICAgfVxuICAgIC8qKlxuICAgICAqIOS/neWtmG1hbmlmZXN0Lmpzb25cbiAgICAgKi9cbiAgICBzYXZlTWFuaWZlc3RKc29uKGpzb246IGFueSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXR0aW5nU2VydmljZS5zYXZlQ29uZmlnKHsgZmlsZVBhdGg6IHRoaXMubWFuaWZlc3RKc29uUGh5c2ljYWxQYXRoLCBjb250ZW50OiB0eXBlb2YganNvbiA9PT0gXCJzdHJpbmdcIiA/IGpzb24gOiBKU09OLnN0cmluZ2lmeShqc29uKSB9KVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDkv53lrZjlpLHotKXkuovku7ZcbiAgICAgKiBAcGFyYW0gZXJyb3IgXG4gICAgICovXG4gICAgb25TYXZlRXJyb3IoZXJyb3I6IEVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbn1cbi8vIGV4cG9ydCBpbnRlcmZhY2UgSUpzb25GaWxlTG9hZCB7XG4vLyAgICAgb25Db25maWdKc29uTG9hZChzdWNjZXM6IGJvb2xlYW4sIGVycjogRXJyb3IpO1xuLy8gICAgIG9uTWFuaWZlc3RKc29uTG9hZChzdWNjZXM6IGJvb2xlYW4sIGVycjogRXJyb3IpO1xuLy8gICAgIHNhdmVDb25maWdKc29uKCk7XG4vLyAgICAgc2F2ZU1hbmlmZXN0SnNvbigpO1xuLy8gfVxuIl19