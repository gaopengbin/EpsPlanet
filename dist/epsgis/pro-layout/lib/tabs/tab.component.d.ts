/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { EventEmitter, InjectionToken, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { TabTemplateContext } from './interfaces';
import { Subject } from 'rxjs';
import { ProTabLinkDirective, ProTabLinkTemplateDirective } from './tab-link.directive';
import * as i0 from "@angular/core";
/**
 * Used to provide a tab set to a tab without causing a circular dependency.
 */
export declare const PRO_TAB_SET: InjectionToken<any>;
export declare class ProTabComponent implements OnChanges, OnDestroy, OnInit {
    closestTabSet: any;
    nzTitle: string | TemplateRef<TabTemplateContext>;
    nzClosable: boolean;
    nzCloseIcon: string | TemplateRef<any>;
    nzDisabled: boolean;
    nzForceRender: boolean;
    readonly nzSelect: EventEmitter<void>;
    readonly nzDeselect: EventEmitter<void>;
    readonly nzClick: EventEmitter<void>;
    readonly nzContextmenu: EventEmitter<MouseEvent>;
    /**
     * @deprecated Will be removed in 11.0.0
     * @breaking-change 11.0.0
     */
    tabLinkTemplate: TemplateRef<void>;
    ProTabLinkTemplateDirective: ProTabLinkTemplateDirective;
    template: TemplateRef<void> | null;
    linkDirective: ProTabLinkDirective;
    contentTemplate: TemplateRef<any>;
    isActive: boolean;
    position: number | null;
    origin: number | null;
    readonly stateChanges: Subject<void>;
    get content(): TemplateRef<any>;
    get label(): string | TemplateRef<any>;
    constructor(closestTabSet: any);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<ProTabComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ProTabComponent, "pro-tab", ["proTab"], { "nzTitle": "nzTitle"; "nzClosable": "nzClosable"; "nzCloseIcon": "nzCloseIcon"; "nzDisabled": "nzDisabled"; "nzForceRender": "nzForceRender"; }, { "nzSelect": "nzSelect"; "nzDeselect": "nzDeselect"; "nzClick": "nzClick"; "nzContextmenu": "nzContextmenu"; }, ["ProTabLinkTemplateDirective", "template", "linkDirective"], ["[pro-tab-link]", "*"]>;
}
