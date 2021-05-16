import { BaseWidgetComponent } from "epsgis";
import { FormBuilder, FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class EpsGisForPlanetLoadWmtsComponent extends BaseWidgetComponent {
    private fb;
    serverList: any[];
    layerList: any[];
    validateForm: FormGroup;
    controlArray: Array<{
        index: number;
        show: boolean;
    }>;
    isCollapse: boolean;
    resetForm(): void;
    constructor(fb: FormBuilder);
    static getCompInfo(): {
        name: string;
        path: string;
    };
    Search(): void;
    zoomTo(): void;
    test(): void;
    changeServer(value: any): void;
    changeLayer(value: any): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<EpsGisForPlanetLoadWmtsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<EpsGisForPlanetLoadWmtsComponent, "app-eps-gis-for-planet-load-wmts", never, {}, {}, never, never>;
}
//# sourceMappingURL=load-wmts.component.d.ts.map