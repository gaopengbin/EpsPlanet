import { ChangeDetectorRef } from '@angular/core';
import { BasePlanetWidgetComponent } from '../base-widget/base-widget.component';
import * as i0 from "@angular/core";
export declare class PlanetStatusBarComponent extends BasePlanetWidgetComponent {
    private cdr;
    _scene: any;
    _camera: any;
    fpsString: string;
    cameraString: string;
    baseVelocity: number;
    velocity: number;
    velocityRatio: number;
    lang: any;
    _disposers: Array<any>;
    _uw1: Function;
    _uw2: Function;
    _uw3: Function;
    _uw4: Function;
    _uw5: Function;
    _uw6: Function;
    _uw7: Function;
    _uw8: Function;
    constructor(cdr: ChangeDetectorRef);
    static getCompInfo(): {
        name: string;
        path: string;
    };
    ngOnInit(): void;
    ngOnDestroy(): void;
    velocityString(): string;
    static ɵfac: i0.ɵɵFactoryDef<PlanetStatusBarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PlanetStatusBarComponent, "epsgis-planet-status-bar", never, {}, {}, never, never>;
}
//# sourceMappingURL=status-bar.component.d.ts.map