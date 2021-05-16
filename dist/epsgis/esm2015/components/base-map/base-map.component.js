import { __awaiter } from "tslib";
import { ViewContainerRef, ViewChild, Directive } from '@angular/core';
import { BaseWidgetComponent } from '../base-widget/base-widget.component';
import { ComponentContainerDirective } from '../../directives/component-container.directive';
import { WidgetState } from '../../models/base-widget';
import * as i0 from "@angular/core";
import * as i1 from "../../services/component-loader.service";
export class BaseMapComponent extends BaseWidgetComponent {
    constructor(componentLoader) {
        super();
        this.componentLoader = componentLoader;
        this._is3d = false;
    }
    get is3D() {
        return this._is3d;
    }
    set is3D(val) {
        this._is3d = val;
        this.globalParams.mapConfig.is3D = val;
    }
    ngOnInit() {
        this.componentLoader.setViewContainerInMap(this.container);
        super.ngOnInit();
    }
    setProps(options) {
        var _a, _b, _c;
        this.appConfig = options.appConfig;
        if (!this.appConfig.map.jsApi) {
            if (this.globalParams.mapConfig.jsApi) {
                this.appConfig.map.jsApi = this.globalParams.mapConfig.jsApi;
            }
            else {
                this.appConfig.map.jsApi = this.config.mapJsApi;
            }
        }
        this.widgetConfig = this.appConfig.map;
        this.config = options.config;
        this.widgetConfig.manifest = options.manifest;
        this.started = true;
        this.state = WidgetState.opened;
        this.name = (_a = options.manifest) === null || _a === void 0 ? void 0 : _a.name;
        this.inPanel = (_c = (_b = options.manifest) === null || _b === void 0 ? void 0 : _b.properties) === null || _c === void 0 ? void 0 : _c.inPanel;
        this.label = "地图";
        this.uri = this.getCompInfo().uri;
        this.folderUrl = this.globalParams.widgetRootPath + "/" + this.getCompInfo().path + "/";
        this.widgetConfig.folderUrl = this.folderUrl;
        super.setPosition(this.appConfig.map.position);
    }
    initMap() {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(null);
        });
    }
}
BaseMapComponent.ɵfac = function BaseMapComponent_Factory(t) { return new (t || BaseMapComponent)(i0.ɵɵdirectiveInject(i1.ComponentLoaderService)); };
BaseMapComponent.ɵdir = i0.ɵɵdefineDirective({ type: BaseMapComponent, viewQuery: function BaseMapComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(ComponentContainerDirective, 3, ViewContainerRef);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.container = _t.first);
    } }, features: [i0.ɵɵInheritDefinitionFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseMapComponent, [{
        type: Directive
    }], function () { return [{ type: i1.ComponentLoaderService }]; }, { container: [{
            type: ViewChild,
            args: [ComponentContainerDirective, { read: ViewContainerRef, static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1tYXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZXBzZ2lzL2NvbXBvbmVudHMvYmFzZS1tYXAvYmFzZS1tYXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQVUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFxQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFM0UsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDN0YsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7QUFLdkQsTUFBTSxPQUFPLGdCQUFpQixTQUFRLG1CQUFtQjtJQWtCdkQsWUFDUyxlQUF1QztRQUU5QyxLQUFLLEVBQUUsQ0FBQztRQUZELG9CQUFlLEdBQWYsZUFBZSxDQUF3QjtRQWhCeEMsVUFBSyxHQUFZLEtBQUssQ0FBQztJQW1CL0IsQ0FBQztJQWZELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBSUQsSUFBSSxJQUFJLENBQUMsR0FBWTtRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0lBQ3pDLENBQUM7SUFPRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0QsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFLRCxRQUFRLENBQUMsT0FBdUQ7O1FBQzlELElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUVuQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFO1lBRTdCLElBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFDO2dCQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO2FBQzlEO2lCQUFJO2dCQUNILElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQzthQUNqRDtTQUNGO1FBQ0QsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQztRQUN2QyxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUM5QyxJQUFJLENBQUMsT0FBTyxHQUFDLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsS0FBSyxHQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7UUFDOUIsSUFBSSxDQUFDLElBQUksU0FBQyxPQUFPLENBQUMsUUFBUSwwQ0FBRSxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLE9BQU8sZUFBQyxPQUFPLENBQUMsUUFBUSwwQ0FBRSxVQUFVLDBDQUFFLE9BQU8sQ0FBQztRQUNuRCxJQUFJLENBQUMsS0FBSyxHQUFDLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUM7UUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsR0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksR0FBQyxHQUFHLENBQUM7UUFDaEYsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEdBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMzQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFJSyxPQUFPOztZQUNYLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixDQUFDO0tBQUE7O2dGQTVEVSxnQkFBZ0I7cURBQWhCLGdCQUFnQjt1QkFDaEIsMkJBQTJCLEtBQVUsZ0JBQWdCOzs7Ozt1RkFEckQsZ0JBQWdCO2NBRDVCLFNBQVM7eUVBRTBFLFNBQVM7a0JBQTFGLFNBQVM7bUJBQUMsMkJBQTJCLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZiwgVmlld0NoaWxkLCBDaGFuZ2VEZXRlY3RvclJlZiwgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlV2lkZ2V0Q29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZS13aWRnZXQvYmFzZS13aWRnZXQuY29tcG9uZW50JztcbmltcG9ydCB7IENvbXBvbmVudExvYWRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb21wb25lbnQtbG9hZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9uZW50Q29udGFpbmVyRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9jb21wb25lbnQtY29udGFpbmVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBXaWRnZXRTdGF0ZSB9IGZyb20gJy4uLy4uL21vZGVscy9iYXNlLXdpZGdldCc7XG4vKipcbiAqIFxuICovXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBjbGFzcyBCYXNlTWFwQ29tcG9uZW50IGV4dGVuZHMgQmFzZVdpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoQ29tcG9uZW50Q29udGFpbmVyRGlyZWN0aXZlLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYsIHN0YXRpYzogdHJ1ZSB9KSBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XG4gIC8vQFZpZXdDaGlsZCgnbWFwaW5uZXJjb250YWluZXInLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYsIHN0YXRpYzogdHJ1ZSB9KSBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XG4gIHByaXZhdGUgX2lzM2Q6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLyoqXG4gICAqIOaYr+WQpjNEXG4gICAqL1xuICBnZXQgaXMzRCgpIHtcbiAgICByZXR1cm4gdGhpcy5faXMzZDtcbiAgfVxuICAvKipcbiAgICogXG4gICAqL1xuICBzZXQgaXMzRCh2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pczNkID0gdmFsO1xuICAgIHRoaXMuZ2xvYmFsUGFyYW1zLm1hcENvbmZpZy5pczNEID0gdmFsOy8v6K6+572u5YWo5bGAIOeUqOS6juWFtuS7luWcsOaWueWPluWAvFxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGNvbXBvbmVudExvYWRlcjogQ29tcG9uZW50TG9hZGVyU2VydmljZVxuICApIHtcbiAgICBzdXBlcigpO1xuICB9XG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY29tcG9uZW50TG9hZGVyLnNldFZpZXdDb250YWluZXJJbk1hcCh0aGlzLmNvbnRhaW5lcik7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgfVxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSBvcHRpb25zIFxuICAgKi9cbiAgc2V0UHJvcHMob3B0aW9uczogeyBhcHBDb25maWc6IGFueSwgY29uZmlnOiBhbnksIG1hbmlmZXN0OiBhbnkgfSkge1xuICAgIHRoaXMuYXBwQ29uZmlnID0gb3B0aW9ucy5hcHBDb25maWc7XG4gICAgLy/pu5jorqTor7vlj5bmgLvnmoRjb25maWcuanNvbueahG1hcC5qc0FwaVxuICAgIGlmICghdGhpcy5hcHBDb25maWcubWFwLmpzQXBpKSB7XG4gICAgICAvL+WmguaenOayoeacie+8jOWImeivu+WPluW9k+WJjee7hOS7tueahOmFjee9rm1hcEpzQXBpXG4gICAgICBpZih0aGlzLmdsb2JhbFBhcmFtcy5tYXBDb25maWcuanNBcGkpe1xuICAgICAgICB0aGlzLmFwcENvbmZpZy5tYXAuanNBcGkgPSB0aGlzLmdsb2JhbFBhcmFtcy5tYXBDb25maWcuanNBcGk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgdGhpcy5hcHBDb25maWcubWFwLmpzQXBpID0gdGhpcy5jb25maWcubWFwSnNBcGk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMud2lkZ2V0Q29uZmlnID0gdGhpcy5hcHBDb25maWcubWFwO1xuICAgIHRoaXMuY29uZmlnID0gb3B0aW9ucy5jb25maWc7XG4gICAgdGhpcy53aWRnZXRDb25maWcubWFuaWZlc3QgPSBvcHRpb25zLm1hbmlmZXN0O1xuICAgIHRoaXMuc3RhcnRlZD10cnVlO1xuICAgIHRoaXMuc3RhdGU9V2lkZ2V0U3RhdGUub3BlbmVkO1xuICAgIHRoaXMubmFtZT1vcHRpb25zLm1hbmlmZXN0Py5uYW1lO1xuICAgIHRoaXMuaW5QYW5lbD1vcHRpb25zLm1hbmlmZXN0Py5wcm9wZXJ0aWVzPy5pblBhbmVsO1xuICAgIHRoaXMubGFiZWw9XCLlnLDlm75cIjtcbiAgICB0aGlzLnVyaT10aGlzLmdldENvbXBJbmZvKCkudXJpO1xuICAgIHRoaXMuZm9sZGVyVXJsPXRoaXMuZ2xvYmFsUGFyYW1zLndpZGdldFJvb3RQYXRoK1wiL1wiK3RoaXMuZ2V0Q29tcEluZm8oKS5wYXRoK1wiL1wiO1xuICAgIHRoaXMud2lkZ2V0Q29uZmlnLmZvbGRlclVybD10aGlzLmZvbGRlclVybDtcbiAgICBzdXBlci5zZXRQb3NpdGlvbih0aGlzLmFwcENvbmZpZy5tYXAucG9zaXRpb24pO1xuICB9XG4gIC8qKlxuICAgKiDliJ3lp4vljJblnLDlm75cbiAgICovXG4gIGFzeW5jIGluaXRNYXAoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xuICB9XG59XG4iXX0=