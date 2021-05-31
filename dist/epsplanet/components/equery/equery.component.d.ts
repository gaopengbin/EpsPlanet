import { BasePlanetWidgetComponent } from '../base-widget/base-widget.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class PlanetEqueryComponent extends BasePlanetWidgetComponent {
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
    getAllLayers(group: any): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<PlanetEqueryComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PlanetEqueryComponent, "epsgis-planet-equery", never, {}, {}, never, never>;
}
//# sourceMappingURL=equery.component.d.ts.map