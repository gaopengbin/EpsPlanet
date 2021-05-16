/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, Host, Optional, Self } from '@angular/core';
import { warnDeprecation } from 'ng-zorro-antd/core/logger';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
/**
 * Fix https://github.com/angular/angular/issues/8563
 */
export class ProTabLinkTemplateDirective {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
ProTabLinkTemplateDirective.ɵfac = function ProTabLinkTemplateDirective_Factory(t) { return new (t || ProTabLinkTemplateDirective)(i0.ɵɵdirectiveInject(i0.TemplateRef, 1)); };
ProTabLinkTemplateDirective.ɵdir = i0.ɵɵdefineDirective({ type: ProTabLinkTemplateDirective, selectors: [["ng-template", "ProTabLink", ""]], exportAs: ["ProTabLinkTemplate"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProTabLinkTemplateDirective, [{
        type: Directive,
        args: [{
                selector: 'ng-template[ProTabLink]',
                exportAs: 'ProTabLinkTemplate'
            }]
    }], function () { return [{ type: i0.TemplateRef, decorators: [{
                type: Host
            }] }]; }, null); })();
/**
 * This component is for catching `routerLink` directive.
 */
export class ProTabLinkDirective {
    constructor(routerLink, routerLinkWithHref, ProTabLinkTemplateDirective) {
        this.routerLink = routerLink;
        this.routerLinkWithHref = routerLinkWithHref;
        if (!ProTabLinkTemplateDirective) {
            warnDeprecation(`'a[pro-tab-link]' is deprecated. Please use 'ng-template[ProTabLink] > a[pro-tab-link]' instead.`);
        }
    }
}
ProTabLinkDirective.ɵfac = function ProTabLinkDirective_Factory(t) { return new (t || ProTabLinkDirective)(i0.ɵɵdirectiveInject(i1.RouterLink, 10), i0.ɵɵdirectiveInject(i1.RouterLinkWithHref, 10), i0.ɵɵdirectiveInject(ProTabLinkTemplateDirective, 8)); };
ProTabLinkDirective.ɵdir = i0.ɵɵdefineDirective({ type: ProTabLinkDirective, selectors: [["a", "pro-tab-link", ""]], exportAs: ["ProTabLink"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProTabLinkDirective, [{
        type: Directive,
        args: [{
                selector: 'a[pro-tab-link]',
                exportAs: 'ProTabLink'
            }]
    }], function () { return [{ type: i1.RouterLink, decorators: [{
                type: Optional
            }, {
                type: Self
            }] }, { type: i1.RouterLinkWithHref, decorators: [{
                type: Optional
            }, {
                type: Self
            }] }, { type: ProTabLinkTemplateDirective, decorators: [{
                type: Optional
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWxpbmsuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcHJvLWxheW91dC9zcmMvbGliL3RhYnMvdGFiLWxpbmsuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7R0FHRztBQUVILE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFHN0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7QUFJNUQ7O0dBRUc7QUFLSCxNQUFNLE9BQU8sMkJBQTJCO0lBQ3RDLFlBQTJCLFdBQTRDO1FBQTVDLGdCQUFXLEdBQVgsV0FBVyxDQUFpQztJQUFHLENBQUM7O3NHQURoRSwyQkFBMkI7Z0VBQTNCLDJCQUEyQjt1RkFBM0IsMkJBQTJCO2NBSnZDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxRQUFRLEVBQUUsb0JBQW9CO2FBQy9COztzQkFFYyxJQUFJOztBQUduQjs7R0FFRztBQUtILE1BQU0sT0FBTyxtQkFBbUI7SUFDOUIsWUFDNkIsVUFBdUIsRUFDdkIsa0JBQXVDLEVBQ3RELDJCQUF5RDtRQUYxQyxlQUFVLEdBQVYsVUFBVSxDQUFhO1FBQ3ZCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBcUI7UUFHbEUsSUFBSSxDQUFDLDJCQUEyQixFQUFFO1lBQ2hDLGVBQWUsQ0FBQyxrR0FBa0csQ0FBQyxDQUFDO1NBQ3JIO0lBQ0gsQ0FBQzs7c0ZBVFUsbUJBQW1CLGlIQUljLDJCQUEyQjt3REFKNUQsbUJBQW1CO3VGQUFuQixtQkFBbUI7Y0FKL0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRSxZQUFZO2FBQ3ZCOztzQkFHSSxRQUFROztzQkFBSSxJQUFJOztzQkFDaEIsUUFBUTs7c0JBQUksSUFBSTswQkFDeUIsMkJBQTJCO3NCQUFwRSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0LCBPcHRpb25hbCwgU2VsZiwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlckxpbmssIFJvdXRlckxpbmtXaXRoSHJlZiB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IHdhcm5EZXByZWNhdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9sb2dnZXInO1xuXG5pbXBvcnQgeyBUYWJUZW1wbGF0ZUNvbnRleHQgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuXG4vKipcbiAqIEZpeCBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy84NTYzXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ25nLXRlbXBsYXRlW1Byb1RhYkxpbmtdJyxcbiAgZXhwb3J0QXM6ICdQcm9UYWJMaW5rVGVtcGxhdGUnXG59KVxuZXhwb3J0IGNsYXNzIFByb1RhYkxpbmtUZW1wbGF0ZURpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgcHVibGljIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxUYWJUZW1wbGF0ZUNvbnRleHQ+KSB7fVxufVxuXG4vKipcbiAqIFRoaXMgY29tcG9uZW50IGlzIGZvciBjYXRjaGluZyBgcm91dGVyTGlua2AgZGlyZWN0aXZlLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdhW3Byby10YWItbGlua10nLFxuICBleHBvcnRBczogJ1Byb1RhYkxpbmsnXG59KVxuZXhwb3J0IGNsYXNzIFByb1RhYkxpbmtEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBAU2VsZigpIHB1YmxpYyByb3V0ZXJMaW5rPzogUm91dGVyTGluayxcbiAgICBAT3B0aW9uYWwoKSBAU2VsZigpIHB1YmxpYyByb3V0ZXJMaW5rV2l0aEhyZWY/OiBSb3V0ZXJMaW5rV2l0aEhyZWYsXG4gICAgQE9wdGlvbmFsKCkgUHJvVGFiTGlua1RlbXBsYXRlRGlyZWN0aXZlPzogUHJvVGFiTGlua1RlbXBsYXRlRGlyZWN0aXZlXG4gICkge1xuICAgIGlmICghUHJvVGFiTGlua1RlbXBsYXRlRGlyZWN0aXZlKSB7XG4gICAgICB3YXJuRGVwcmVjYXRpb24oYCdhW3Byby10YWItbGlua10nIGlzIGRlcHJlY2F0ZWQuIFBsZWFzZSB1c2UgJ25nLXRlbXBsYXRlW1Byb1RhYkxpbmtdID4gYVtwcm8tdGFiLWxpbmtdJyBpbnN0ZWFkLmApO1xuICAgIH1cbiAgfVxufVxuIl19