import { BasePlanetWidgetComponent } from '../base-widget/base-widget.component';
import * as i0 from "@angular/core";
export declare class PlanetModeSwitchComponent extends BasePlanetWidgetComponent {
    viewType: string;
    visible: boolean;
    constructor();
    static getCompInfo(): {
        name: string;
        path: string;
    };
    clickMe(): void;
    change(value: boolean): void;
    changeViewMode(type: string): void;
    static ɵfac: i0.ɵɵFactoryDef<PlanetModeSwitchComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PlanetModeSwitchComponent, "epsgis-planet-mode-switch", never, {}, {}, never, never>;
}
//# sourceMappingURL=mode-switch.component.d.ts.map