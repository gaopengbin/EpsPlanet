import { OnInit, EventEmitter, AfterViewInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import * as i0 from "@angular/core";
export declare class PDFViewerComponent implements OnInit, AfterViewInit {
    domSanitizer: DomSanitizer;
    pdfViewerContainer: any;
    width: number;
    height: number;
    viewerUrl: string;
    source: string;
    ready: EventEmitter<any>;
    pdfUrl: SafeResourceUrl;
    pdfViewHeight: string;
    constructor(domSanitizer: DomSanitizer);
    ngAfterViewInit(): void;
    ngOnInit(): void;
    resetViewHeight(): void;
    getMainWindowHeight(): number;
    static ɵfac: i0.ɵɵFactoryDef<PDFViewerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PDFViewerComponent, "pdf-viewer", never, { "width": "width"; "height": "height"; "viewerUrl": "viewerUrl"; "source": "source"; }, { "ready": "ready"; }, never, never>;
}
//# sourceMappingURL=pdf-viewer.component.d.ts.map