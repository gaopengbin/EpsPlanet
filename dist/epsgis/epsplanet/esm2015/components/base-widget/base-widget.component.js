import { Directive } from '@angular/core';
import { BaseWidgetComponent, PropWatcher } from 'epsgis';
import * as i0 from "@angular/core";
export class BasePlanetWidgetComponent extends BaseWidgetComponent {
    constructor() {
        super();
        this._isVue = true;
        this.watchers = [];
    }
    getCesiumView() {
        if (this.view) {
            return this.view.czm.viewer;
        }
        return null;
    }
    $watch(propertyName, func, param) {
        this.watchers.push(PropWatcher.watch(this, propertyName, (prop, oldval, newval) => {
            func.call(func);
        }));
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        if (this.watchers && this.watchers.length >= 1) {
            this.watchers.forEach(f => f.call(f));
        }
        this.watchers.length = 0;
    }
}
BasePlanetWidgetComponent.ɵfac = function BasePlanetWidgetComponent_Factory(t) { return new (t || BasePlanetWidgetComponent)(); };
BasePlanetWidgetComponent.ɵdir = i0.ɵɵdefineDirective({ type: BasePlanetWidgetComponent, features: [i0.ɵɵInheritDefinitionFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BasePlanetWidgetComponent, [{
        type: Directive
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS13aWRnZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZXBzcGxhbmV0L2NvbXBvbmVudHMvYmFzZS13aWRnZXQvYmFzZS13aWRnZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxNQUFNLFFBQVEsQ0FBQzs7QUFLMUQsTUFBTSxPQUFPLHlCQUEwQixTQUFRLG1CQUFtQjtJQU1oRTtRQUNFLEtBQUssRUFBRSxDQUFDO1FBSFYsV0FBTSxHQUFZLElBQUksQ0FBQztRQUN2QixhQUFRLEdBQW9CLEVBQUUsQ0FBQztJQUcvQixDQUFDO0lBQ0QsYUFBYTtRQUNYLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO1NBQzdCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBVUQsTUFBTSxDQUFDLFlBQVksRUFBRSxJQUFjLEVBQUUsS0FBSztRQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBRWhGLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7SUFDRCxXQUFXO1FBQ1QsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BCLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDOUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkM7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7a0dBcENVLHlCQUF5Qjs4REFBekIseUJBQXlCO3VGQUF6Qix5QkFBeUI7Y0FEckMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZVdpZGdldENvbXBvbmVudCwgUHJvcFdhdGNoZXIgfSBmcm9tICdlcHNnaXMnO1xuLyoqXG4gKiBcbiAqL1xuQERpcmVjdGl2ZSgpXG5leHBvcnQgY2xhc3MgQmFzZVBsYW5ldFdpZGdldENvbXBvbmVudCBleHRlbmRzIEJhc2VXaWRnZXRDb21wb25lbnQge1xuICAvKipcbiAgICogZWFydGhTZGvkuK3pgJrov4dfaXNWdWXliKTmlq3nmoTvvIzor6/liKBcbiAgICovXG4gIF9pc1Z1ZTogYm9vbGVhbiA9IHRydWU7XG4gIHdhdGNoZXJzOiBBcnJheTxGdW5jdGlvbj4gPSBbXTtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuICBnZXRDZXNpdW1WaWV3KCkge1xuICAgIGlmICh0aGlzLnZpZXcpIHtcbiAgICAgIHJldHVybiB0aGlzLnZpZXcuY3ptLnZpZXdlcjtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgLy8gZ2V0IFhFKCkge1xuICAvLyAgIHJldHVybiB3aW5kb3dbXCJYRVwiXTtcbiAgLy8gfVxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSBwcm9wZXJ0eU5hbWUg5bGe5oCn5ZCNXG4gICAqIEBwYXJhbSBmdW5jIOWHveaVsFxuICAgKiBAcGFyYW0gcGFyYW0geyBkZWVwOiB0cnVlIH1cbiAgICovXG4gICR3YXRjaChwcm9wZXJ0eU5hbWUsIGZ1bmM6IEZ1bmN0aW9uLCBwYXJhbSkge1xuICAgIHRoaXMud2F0Y2hlcnMucHVzaChQcm9wV2F0Y2hlci53YXRjaCh0aGlzLCBwcm9wZXJ0eU5hbWUsIChwcm9wLCBvbGR2YWwsIG5ld3ZhbCkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coXCIlcyBhZnRlciAlcywlc1wiLCBwcm9wLCBvbGR2YWwsIG5ld3ZhbCk7XG4gICAgICBmdW5jLmNhbGwoZnVuYyk7XG4gICAgfSkpO1xuICB9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XG4gICAgaWYgKHRoaXMud2F0Y2hlcnMgJiYgdGhpcy53YXRjaGVycy5sZW5ndGggPj0gMSkge1xuICAgICAgdGhpcy53YXRjaGVycy5mb3JFYWNoKGYgPT4gZi5jYWxsKGYpKTtcbiAgICB9XG4gICAgdGhpcy53YXRjaGVycy5sZW5ndGggPSAwO1xuICB9XG59XG4iXX0=