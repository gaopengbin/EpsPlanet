import { OnChanges, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export interface Segment {
    key: string;
    value: any;
    type: undefined | string;
    description: string;
    expanded: boolean;
}
export declare class EpsGISJsonViewerComponent implements OnInit, OnChanges {
    json: any;
    expanded: boolean;
    cleanOnChange: boolean;
    segments: Segment[];
    ngOnInit(): void;
    initJson(): void;
    ngOnChanges(): void;
    isExpandable(segment: Segment): boolean;
    toggle(segment: Segment): void;
    private parseKeyValue;
    static ɵfac: i0.ɵɵFactoryDef<EpsGISJsonViewerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<EpsGISJsonViewerComponent, "epsgis-json-viewer", never, { "json": "json"; "expanded": "expanded"; "cleanOnChange": "cleanOnChange"; }, {}, never, never>;
}
//# sourceMappingURL=json-viewer.component.d.ts.map