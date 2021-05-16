import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
export class SafeUrlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url, tag = "img") {
        if (tag == "img") {
            return this.sanitizer.bypassSecurityTrustUrl(url);
        }
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
SafeUrlPipe.ɵfac = function SafeUrlPipe_Factory(t) { return new (t || SafeUrlPipe)(i0.ɵɵdirectiveInject(i1.DomSanitizer)); };
SafeUrlPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "safeurl", type: SafeUrlPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SafeUrlPipe, [{
        type: Pipe,
        args: [{
                name: 'safeurl'
            }]
    }], function () { return [{ type: i1.DomSanitizer }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FmZXVybC5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZXBzZ2lzL3BpcGVzL3NhZmV1cmwucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7O0FBTXBELE1BQU0sT0FBTyxXQUFXO0lBS3RCLFlBQW9CLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7SUFBSSxDQUFDO0lBTWhELFNBQVMsQ0FBQyxHQUFRLEVBQUUsTUFBYyxLQUFLO1FBQ3JDLElBQUksR0FBRyxJQUFJLEtBQUssRUFBRTtZQUNoQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsc0JBQXNCLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbkQ7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsOEJBQThCLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7c0VBaEJVLFdBQVc7NkRBQVgsV0FBVzt1RkFBWCxXQUFXO2NBSHZCLElBQUk7ZUFBQztnQkFDSixJQUFJLEVBQUUsU0FBUzthQUNoQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdzYWZldXJsJ1xufSlcbmV4cG9ydCBjbGFzcyBTYWZlVXJsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSBzYW5pdGl6ZXIgXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7IH1cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0gdXJsIFxuICAgKiBAcGFyYW0gdGFnIFxuICAgKi9cbiAgdHJhbnNmb3JtKHVybDogYW55LCB0YWc6IHN0cmluZyA9IFwiaW1nXCIpOiBhbnkge1xuICAgIGlmICh0YWcgPT0gXCJpbWdcIikge1xuICAgICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RVcmwodXJsKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybCh1cmwpO1xuICB9XG5cbn1cbiJdfQ==