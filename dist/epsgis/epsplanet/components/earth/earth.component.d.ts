import { ElementRef } from '@angular/core';
import { BaseMapComponent, ComponentLoaderService } from 'epsgis';
import * as i0 from "@angular/core";
export declare class PlanetEarthComponent extends BaseMapComponent {
    componentLoader: ComponentLoaderService;
    earthContainer: ElementRef;
    resources: ReadonlyArray<string>;
    constructor(componentLoader: ComponentLoaderService);
    static getCompInfo(): {
        name: string;
        path: string;
    };
    ngOnInit(): void;
    initMap(): Promise<any>;
    static ɵfac: i0.ɵɵFactoryDef<PlanetEarthComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PlanetEarthComponent, "epsgis-planet-earth", never, {}, {}, never, never>;
}
//# sourceMappingURL=earth.component.d.ts.map