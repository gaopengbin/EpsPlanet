import { BaseWidgetComponent } from 'epsgis';
import * as i0 from "@angular/core";
export declare class BasePlanetWidgetComponent extends BaseWidgetComponent {
    _isVue: boolean;
    watchers: Array<Function>;
    constructor();
    getCesiumView(): any;
    $watch(propertyName: any, func: Function, param: any): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<BasePlanetWidgetComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<BasePlanetWidgetComponent, never, never, {}, {}, never>;
}
//# sourceMappingURL=base-widget.component.d.ts.map