/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, TemplateRef } from '@angular/core';
import { ProTabNavItemDirective } from './tab-nav-item.directive';
import * as i0 from "@angular/core";
export declare class ProTabNavOperationComponent implements OnDestroy {
    cdr: ChangeDetectorRef;
    private elementRef;
    items: ProTabNavItemDirective[];
    addable: boolean;
    addIcon: string | TemplateRef<any>;
    readonly addClicked: EventEmitter<void>;
    readonly selected: EventEmitter<ProTabNavItemDirective>;
    closeAnimationWaitTimeoutId: number;
    menuOpened: boolean;
    private readonly element;
    constructor(cdr: ChangeDetectorRef, elementRef: ElementRef<HTMLElement>);
    onSelect(item: ProTabNavItemDirective): void;
    onContextmenu(item: ProTabNavItemDirective, e: MouseEvent): void;
    showItems(): void;
    menuVisChange(visible: boolean): void;
    getElementWidth(): number;
    getElementHeight(): number;
    ngOnDestroy(): void;
    isNonEmptyString(value: {}): boolean;
    isTemplateRef(value: {}): boolean;
    static ɵfac: i0.ɵɵFactoryDef<ProTabNavOperationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ProTabNavOperationComponent, "pro-tab-nav-operation", ["ProTabNavOperation"], { "items": "items"; "addable": "addable"; "addIcon": "addIcon"; }, { "addClicked": "addClicked"; "selected": "selected"; }, never, never>;
}
