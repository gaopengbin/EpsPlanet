import { OnInit } from '@angular/core';
import { BasePlanetWidgetComponent } from '../base-widget/base-widget.component';
import * as i0 from "@angular/core";
export declare class PlanetLocationComponent extends BasePlanetWidgetComponent implements OnInit {
    markerXY: any;
    XValue: number;
    YValue: number;
    ZValue: number;
    item4326: {
        X: {
            label: string;
            min: string;
            max: string;
            placeHolder: string;
        };
        Y: {
            label: string;
            min: string;
            max: string;
            placeHolder: string;
        };
        Z: {
            label: string;
            placeHolder: string;
        };
    };
    itemOther: {
        X: {
            label: string;
            min: string;
            max: string;
            placeHolder: string;
        };
        Y: {
            label: string;
            min: string;
            max: string;
            placeHolder: string;
        };
    };
    item: any;
    constructor();
    ngOnInit(): void;
    static getCompInfo(): {
        path: string;
    };
    initialize(): void;
    location(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<PlanetLocationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PlanetLocationComponent, "epsgis-planet-location", never, {}, {}, never, never>;
}
//# sourceMappingURL=location.component.d.ts.map