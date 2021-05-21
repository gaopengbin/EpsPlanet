import { BasePlanetWidgetComponent } from '../base-widget/base-widget.component';
import { Identify } from '../../utils/identify';
import * as i0 from "@angular/core";
export declare class PlanetIdentifyComponent extends BasePlanetWidgetComponent {
    private identify;
    winPos: Array<any>;
    title: string;
    pin1: any;
    propertyList: {
        name: string;
        value: number;
    }[];
    showInfo: boolean;
    switchValue: boolean;
    czmObjList: any[];
    constructor(identify: Identify);
    createInfoWin(): HTMLDivElement;
    Init(): void;
    bindIndentify(list: any): void;
    bindClick(item: any): void;
    close(): void;
    zoomTo(): void;
    switch(e: any): void;
    test(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<PlanetIdentifyComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PlanetIdentifyComponent, "epsgis-planet-identify", never, {}, {}, never, never>;
}
//# sourceMappingURL=identify.component.d.ts.map