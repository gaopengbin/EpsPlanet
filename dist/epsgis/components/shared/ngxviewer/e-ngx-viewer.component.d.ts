import { OnInit, EventEmitter, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as i0 from "@angular/core";
export declare class EpsGISNgxViewerComponent implements OnInit {
    private activatedRoute;
    private injector;
    model: string;
    width: number;
    videoWidth: number;
    height: number;
    source: string | string[];
    poster: string;
    viewerUrl: string;
    first: number;
    ready: EventEmitter<any>;
    constructor(activatedRoute: ActivatedRoute, injector: Injector);
    ngOnInit(): void;
    viewerReady($event: any): void;
    static ɵfac: i0.ɵɵFactoryDef<EpsGISNgxViewerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<EpsGISNgxViewerComponent, "epsgis-ngx-viewer", never, { "model": "model"; "width": "width"; "videoWidth": "videoWidth"; "height": "height"; "source": "source"; "poster": "poster"; "viewerUrl": "viewerUrl"; "first": "first"; }, { "ready": "ready"; }, never, never>;
}
//# sourceMappingURL=e-ngx-viewer.component.d.ts.map