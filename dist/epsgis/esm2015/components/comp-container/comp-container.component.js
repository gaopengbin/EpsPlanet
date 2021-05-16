import { Component, ViewChild, ViewContainerRef, Input, Output, EventEmitter } from '@angular/core';
import { ComponentContainerDirective } from '../../directives/component-container.directive';
import { UtilsService } from '../../services/services';
import * as i0 from "@angular/core";
import * as i1 from "../../services/service-injector";
import * as i2 from "../../services/event-emitter.service";
import * as i3 from "../../services/component-loader.service";
import * as i4 from "../../directives/component-container.directive";
function CompContainerComponent_ng_template_0_Template(rf, ctx) { }
export class CompContainerComponent {
    constructor(serviceInjector, cdr, eventService, componentLoader) {
        this.serviceInjector = serviceInjector;
        this.cdr = cdr;
        this.eventService = eventService;
        this.componentLoader = componentLoader;
        this.jsonFileChange = new EventEmitter();
        this.configChange = new EventEmitter();
        this.autoLoad = true;
        this.eventService.rss.on(this.eventService._checkChangeDetector, (obj) => {
            UtilsService.detectChanges(this.cdr);
        });
    }
    get jsonFile() {
        return this._configJsonFile;
    }
    set jsonFile(value) {
        this._configJsonFile = value;
        this.configJsonFile = value;
        this.jsonFileChange.emit(value);
    }
    get config() {
        return this._config;
    }
    set config(value) {
        this._config = value;
        if (typeof value === "string") {
            this._configJsonFile = value;
            this.configJsonFile = value;
        }
        this.configChange.emit(value);
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.componentLoader.setViewContainerInHome(this.container);
        this.componentLoader.setServiceInjector(this.serviceInjector);
        if (this.autoLoad) {
            this._init();
        }
    }
    _init() {
        this.serviceInjector.layoutManager.startup();
        if (this.config) {
            this.serviceInjector.configManager.loadConfig(this.config);
        }
        else {
            let _configJsonFile = this.serviceInjector.config.appInfo.configFile;
            if (this.configJsonFile) {
                _configJsonFile = this.configJsonFile;
            }
            this.serviceInjector.configManager.loadConfig(_configJsonFile);
        }
    }
    clear() {
        this.serviceInjector.layoutManager._destroyPreloadWidgetIcons();
        this.serviceInjector.layoutManager._destroyOffPanelWidgets();
        this.serviceInjector.layoutManager._destroyWidgetPlaceholders();
        this.serviceInjector.layoutManager._destroyPreloadPanels();
        this.serviceInjector.layoutManager._destroyPreloadGroupPanels();
        this.serviceInjector.mapManager.destoryMap();
    }
    reload() {
        this.clear();
        this._init();
    }
}
CompContainerComponent.ɵfac = function CompContainerComponent_Factory(t) { return new (t || CompContainerComponent)(i0.ɵɵdirectiveInject(i1.ServiceInjector), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.EventEmitterService), i0.ɵɵdirectiveInject(i3.ComponentLoaderService)); };
CompContainerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CompContainerComponent, selectors: [["epsgis-comp-container"]], viewQuery: function CompContainerComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(ComponentContainerDirective, 3, ViewContainerRef);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.container = _t.first);
    } }, inputs: { configJsonFile: ["config-json-file", "configJsonFile"], jsonFile: "jsonFile", config: "config", autoLoad: "autoLoad" }, outputs: { jsonFileChange: "jsonFileChange", configChange: "configChange" }, decls: 1, vars: 0, consts: [["component-host", ""]], template: function CompContainerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, CompContainerComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
    } }, directives: [i4.ComponentContainerDirective], styles: ["epsgis-comp-container{width:100%;height:100%}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CompContainerComponent, [{
        type: Component,
        args: [{
                selector: 'epsgis-comp-container',
                templateUrl: './comp-container.component.html',
                styleUrls: ['./comp-container.component.scss'],
            }]
    }], function () { return [{ type: i1.ServiceInjector }, { type: i0.ChangeDetectorRef }, { type: i2.EventEmitterService }, { type: i3.ComponentLoaderService }]; }, { container: [{
            type: ViewChild,
            args: [ComponentContainerDirective, { read: ViewContainerRef, static: true }]
        }], configJsonFile: [{
            type: Input,
            args: ["config-json-file"]
        }], jsonFile: [{
            type: Input
        }], jsonFileChange: [{
            type: Output
        }], config: [{
            type: Input
        }], configChange: [{
            type: Output
        }], autoLoad: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcC1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZXBzZ2lzL2NvbXBvbmVudHMvY29tcC1jb250YWluZXIvY29tcC1jb250YWluZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZXBzZ2lzL2NvbXBvbmVudHMvY29tcC1jb250YWluZXIvY29tcC1jb250YWluZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQW9DLE1BQU0sZUFBZSxDQUFDO0FBQzlJLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBSTdGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7OztBQVV2RCxNQUFNLE9BQU8sc0JBQXNCO0lBK0RqQyxZQUNTLGVBQWdDLEVBQ2hDLEdBQXNCLEVBQ3RCLFlBQWlDLEVBQ2pDLGVBQXVDO1FBSHZDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDakMsb0JBQWUsR0FBZixlQUFlLENBQXdCO1FBekNoRCxtQkFBYyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBMkJ2RCxpQkFBWSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBSTVDLGFBQVEsR0FBWSxJQUFJLENBQUM7UUFhaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxHQUFRLEVBQUUsRUFBRTtZQUM1RSxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMs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QkFBQywyQkFBMkIsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBQ3JELGNBQWM7a0JBQXhDLEtBQUs7bUJBQUMsa0JBQWtCO1lBU3JCLFFBQVE7a0JBRFgsS0FBSztZQWVOLGNBQWM7a0JBRGIsTUFBTTtZQVdILE1BQU07a0JBRFQsS0FBSztZQWtCTixZQUFZO2tCQURYLE1BQU07WUFLRSxRQUFRO2tCQUFoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50Q29udGFpbmVyRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9jb21wb25lbnQtY29udGFpbmVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTZXJ2aWNlSW5qZWN0b3IgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zZXJ2aWNlLWluamVjdG9yJztcbmltcG9ydCB7IENvbXBvbmVudExvYWRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb21wb25lbnQtbG9hZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2V2ZW50LWVtaXR0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBVdGlsc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zZXJ2aWNlcyc7XG4vLyBpbXBvcnQgeyBDb21wb25lbnRSZWdpc3RlciB9IGZyb20gJy4uLy4uL2RlY29yYXRvci9kZWNvcmF0b3JzJztcbi8vIEBDb21wb25lbnRSZWdpc3Rlcih7XG4vLyAgIHNlbGVjdG9yOiAnZXBzZ2lzLWNvbXAtY29udGFpbmVyJ1xuLy8gfSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Vwc2dpcy1jb21wLWNvbnRhaW5lcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21wLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbXAtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENvbXBDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuXG4gIEBWaWV3Q2hpbGQoQ29tcG9uZW50Q29udGFpbmVyRGlyZWN0aXZlLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYsIHN0YXRpYzogdHJ1ZSB9KSBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XG4gIEBJbnB1dChcImNvbmZpZy1qc29uLWZpbGVcIikgY29uZmlnSnNvbkZpbGU6IHN0cmluZztcbiAgLyoqXG4gICAgICog6Ieq5a6a5LmJbW9kZWzlj5jph49cbiAgICAgKi9cbiAgcHJpdmF0ZSBfY29uZmlnSnNvbkZpbGU6IHN0cmluZztcbiAgLyoqXG4gICAqIOi/lOWbnueItue7hOS7tuWPmOWMluWQjueahOWAvFxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IGpzb25GaWxlKCkge1xuICAgIHJldHVybiB0aGlzLl9jb25maWdKc29uRmlsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDnu4Tku7blgLzkuqfnlJ/lj5jljJblkI7niLbnu4Tku7bmlLnlj5hcbiAgICogQHBhcmFtIHZhbHVlXG4gICAqL1xuICBzZXQganNvbkZpbGUodmFsdWUpIHtcbiAgICB0aGlzLl9jb25maWdKc29uRmlsZSA9IHZhbHVlO1xuICAgIHRoaXMuY29uZmlnSnNvbkZpbGUgPSB2YWx1ZTtcbiAgICB0aGlzLmpzb25GaWxlQ2hhbmdlLmVtaXQodmFsdWUpO1xuICB9XG4gIEBPdXRwdXQoKVxuICBqc29uRmlsZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIC8v5aKe5Yqg5a+56LGh6YWN572uIHJ1aXIgMjAyMDA5MDlcbiAgLyoqXG4gICAgICog6Ieq5a6a5LmJbW9kZWzlj5jph49cbiAgICAgKi9cbiAgcHJpdmF0ZSBfY29uZmlnOiBhbnk7XG4gIC8qKlxuICAgKiDov5Tlm57niLbnu4Tku7blj5jljJblkI7nmoTlgLxcbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBjb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcbiAgfVxuXG4gIC8qKlxuICAgKiDnu4Tku7blgLzkuqfnlJ/lj5jljJblkI7niLbnu4Tku7bmlLnlj5hcbiAgICogQHBhcmFtIHZhbHVlXG4gICAqL1xuICBzZXQgY29uZmlnKHZhbHVlKSB7XG4gICAgdGhpcy5fY29uZmlnID0gdmFsdWU7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgdGhpcy5fY29uZmlnSnNvbkZpbGUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuY29uZmlnSnNvbkZpbGUgPSB2YWx1ZTtcbiAgICB9XG4gICAgdGhpcy5jb25maWdDaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gIH1cbiAgQE91dHB1dCgpXG4gIGNvbmZpZ0NoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIC8qKlxuICAgKiDpu5jorqTliqDovb1cbiAgICovXG4gIEBJbnB1dCgpIGF1dG9Mb2FkOiBib29sZWFuID0gdHJ1ZTtcbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0gc2VydmljZUluamVjdG9yIFxuICAgKiBAcGFyYW0gY29tcG9uZW50TG9hZGVyIFxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHNlcnZpY2VJbmplY3RvcjogU2VydmljZUluamVjdG9yLFxuICAgIHB1YmxpYyBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHB1YmxpYyBldmVudFNlcnZpY2U6IEV2ZW50RW1pdHRlclNlcnZpY2UsXG4gICAgcHVibGljIGNvbXBvbmVudExvYWRlcjogQ29tcG9uZW50TG9hZGVyU2VydmljZSkge1xuXG4gICAgLy/orqLpmIXlj5jljJbmo4DmtYvkuovku7bvvIzlvZPnu4Tku7bmiafooYzlrozlkI4gYWRkIHlseSAyMDIwMDMyN1xuICAgIHRoaXMuZXZlbnRTZXJ2aWNlLnJzcy5vbih0aGlzLmV2ZW50U2VydmljZS5fY2hlY2tDaGFuZ2VEZXRlY3RvciwgKG9iajogYW55KSA9PiB7XG4gICAgICBVdGlsc1NlcnZpY2UuZGV0ZWN0Q2hhbmdlcyh0aGlzLmNkcik7XG4gICAgICAvLyBzZXRJbnRlcnZhbCgoKSA9PiB7IHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTsgfSwgNTAwMCk7XG4gICAgfSk7XG4gIH1cbiAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgfVxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5jb21wb25lbnRMb2FkZXIuc2V0Vmlld0NvbnRhaW5lckluSG9tZSh0aGlzLmNvbnRhaW5lcik7XG4gICAgdGhpcy5jb21wb25lbnRMb2FkZXIuc2V0U2VydmljZUluamVjdG9yKHRoaXMuc2VydmljZUluamVjdG9yKTtcbiAgICBpZiAodGhpcy5hdXRvTG9hZCkge1xuICAgICAgdGhpcy5faW5pdCgpO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF9pbml0KCkge1xuICAgIHRoaXMuc2VydmljZUluamVjdG9yLmxheW91dE1hbmFnZXIuc3RhcnR1cCgpO1xuICAgIGlmICh0aGlzLmNvbmZpZykge1xuICAgICAgdGhpcy5zZXJ2aWNlSW5qZWN0b3IuY29uZmlnTWFuYWdlci5sb2FkQ29uZmlnKHRoaXMuY29uZmlnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IF9jb25maWdKc29uRmlsZSA9IHRoaXMuc2VydmljZUluamVjdG9yLmNvbmZpZy5hcHBJbmZvLmNvbmZpZ0ZpbGU7XG4gICAgICBpZiAodGhpcy5jb25maWdKc29uRmlsZSkge1xuICAgICAgICBfY29uZmlnSnNvbkZpbGUgPSB0aGlzLmNvbmZpZ0pzb25GaWxlO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXJ2aWNlSW5qZWN0b3IuY29uZmlnTWFuYWdlci5sb2FkQ29uZmlnKF9jb25maWdKc29uRmlsZSk7XG4gICAgfVxuICB9XG4gIC8v5a+55aSW5o+Q5L6b55qE5Ye95pWw5byA5aeLXG4gIC8qKlxuICAgKiDmuIXpmaTlt7Lnu4/liqDovb3nmoTnu4Tku7ZcbiAgICovXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuc2VydmljZUluamVjdG9yLmxheW91dE1hbmFnZXIuX2Rlc3Ryb3lQcmVsb2FkV2lkZ2V0SWNvbnMoKTtcbiAgICB0aGlzLnNlcnZpY2VJbmplY3Rvci5sYXlvdXRNYW5hZ2VyLl9kZXN0cm95T2ZmUGFuZWxXaWRnZXRzKCk7XG4gICAgdGhpcy5zZXJ2aWNlSW5qZWN0b3IubGF5b3V0TWFuYWdlci5fZGVzdHJveVdpZGdldFBsYWNlaG9sZGVycygpO1xuICAgIHRoaXMuc2VydmljZUluamVjdG9yLmxheW91dE1hbmFnZXIuX2Rlc3Ryb3lQcmVsb2FkUGFuZWxzKCk7XG4gICAgdGhpcy5zZXJ2aWNlSW5qZWN0b3IubGF5b3V0TWFuYWdlci5fZGVzdHJveVByZWxvYWRHcm91cFBhbmVscygpO1xuICAgIHRoaXMuc2VydmljZUluamVjdG9yLm1hcE1hbmFnZXIuZGVzdG9yeU1hcCgpO1xuICB9XG4gIHJlbG9hZCgpIHtcbiAgICB0aGlzLmNsZWFyKCk7XG4gICAgdGhpcy5faW5pdCgpO1xuICB9XG4gIC8vIOWvueWkluaPkOS+m+eahOWHveaVsOe7k+adn1xufVxuIiwiPG5nLXRlbXBsYXRlIGNvbXBvbmVudC1ob3N0PiA8L25nLXRlbXBsYXRlPiJdfQ==