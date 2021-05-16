/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ProTabAddButtonComponent {
    private elementRef;
    addIcon: string | TemplateRef<any>;
    private readonly element;
    constructor(elementRef: ElementRef<HTMLElement>);
    getElementWidth(): number;
    getElementHeight(): number;
    isNonEmptyString(value: {}): boolean;
    isTemplateRef(value: {}): boolean;
    static ɵfac: i0.ɵɵFactoryDef<ProTabAddButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ProTabAddButtonComponent, "pro-tab-add-button, button[pro-tab-add-button]", never, { "addIcon": "addIcon"; }, {}, never, never>;
}
