import { PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class SafeUrlPipe implements PipeTransform {
    private sanitizer;
    constructor(sanitizer: DomSanitizer);
    transform(url: any, tag?: string): any;
    static ɵfac: i0.ɵɵFactoryDef<SafeUrlPipe, never>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<SafeUrlPipe, "safeurl">;
}
//# sourceMappingURL=safeurl.pipe.d.ts.map