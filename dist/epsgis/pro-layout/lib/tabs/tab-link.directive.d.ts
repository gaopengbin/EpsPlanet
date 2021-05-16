/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { TemplateRef } from '@angular/core';
import { RouterLink, RouterLinkWithHref } from '@angular/router';
import { TabTemplateContext } from './interfaces';
import * as i0 from "@angular/core";
/**
 * Fix https://github.com/angular/angular/issues/8563
 */
export declare class ProTabLinkTemplateDirective {
    templateRef: TemplateRef<TabTemplateContext>;
    constructor(templateRef: TemplateRef<TabTemplateContext>);
    static ɵfac: i0.ɵɵFactoryDef<ProTabLinkTemplateDirective, [{ host: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ProTabLinkTemplateDirective, "ng-template[ProTabLink]", ["ProTabLinkTemplate"], {}, {}, never>;
}
/**
 * This component is for catching `routerLink` directive.
 */
export declare class ProTabLinkDirective {
    routerLink?: RouterLink;
    routerLinkWithHref?: RouterLinkWithHref;
    constructor(routerLink?: RouterLink, routerLinkWithHref?: RouterLinkWithHref, ProTabLinkTemplateDirective?: ProTabLinkTemplateDirective);
    static ɵfac: i0.ɵɵFactoryDef<ProTabLinkDirective, [{ optional: true; self: true; }, { optional: true; self: true; }, { optional: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ProTabLinkDirective, "a[pro-tab-link]", ["ProTabLink"], {}, {}, never>;
}
