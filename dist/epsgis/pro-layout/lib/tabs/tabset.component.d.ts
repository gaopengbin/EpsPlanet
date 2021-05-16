import { AfterContentChecked, AfterContentInit, ChangeDetectorRef, EventEmitter, OnChanges, OnDestroy, OnInit, QueryList, SimpleChanges, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NzSizeLDSType } from 'ng-zorro-antd/core/types';
import { NzAnimatedInterface, NzTabChangeEvent, NzTabPosition, NzTabPositionMode, NzTabsCanDeactivateFn, NzTabScrollEvent, NzTabType } from './interfaces';
import { ProTabNavBarComponent } from './tab-nav-bar.component';
import { ProTabComponent } from './tab.component';
import * as i0 from "@angular/core";
export declare class ProTabSetComponent implements OnInit, AfterContentChecked, OnDestroy, AfterContentInit, OnChanges {
    private cdr;
    private router;
    get nzSelectedIndex(): number | null;
    set nzSelectedIndex(value: null | number);
    nzTabPosition: NzTabPosition;
    nzTabBarExtraContent?: TemplateRef<void>;
    nzCanDeactivate: NzTabsCanDeactivateFn | null;
    nzAddIcon: string | TemplateRef<any>;
    nzTabBarStyle: {
        [key: string]: string;
    } | null;
    nzType: NzTabType;
    nzSize: NzSizeLDSType;
    nzAnimated: NzAnimatedInterface | boolean;
    nzTabBarGutter?: number;
    nzHideAdd: boolean;
    nzCentered: boolean;
    nzHideAll: boolean;
    nzLinkRouter: boolean;
    nzLinkExact: boolean;
    readonly nzSelectChange: EventEmitter<NzTabChangeEvent>;
    readonly nzSelectedIndexChange: EventEmitter<number>;
    readonly nzTabListScroll: EventEmitter<NzTabScrollEvent>;
    readonly nzClose: EventEmitter<{
        index: number;
    }>;
    readonly nzAdd: EventEmitter<void>;
    /**
     * @deprecated Not supported.
     * @breaking-change 11.0.0
     */
    nzShowPagination: boolean;
    /**
     * @deprecated Not supported.
     * @breaking-change 11.0.0
     */
    readonly nzOnNextClick: EventEmitter<void>;
    /**
     * @deprecated Not supported.
     * @breaking-change 11.0.0
     */
    readonly nzOnPrevClick: EventEmitter<void>;
    get position(): NzTabPositionMode;
    get addable(): boolean;
    get closable(): boolean;
    get line(): boolean;
    get inkBarAnimated(): boolean;
    get tabPaneAnimated(): boolean;
    allTabs: QueryList<ProTabComponent>;
    tabNavBarRef: ProTabNavBarComponent;
    tabs: QueryList<ProTabComponent>;
    private readonly tabSetId;
    private destroy$;
    private indexToSelect;
    private selectedIndex;
    private tabLabelSubscription;
    private tabsSubscription;
    private canDeactivateSubscription;
    constructor(cdr: ChangeDetectorRef, router: Router);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterContentInit(): void;
    ngAfterContentChecked(): void;
    onClose(index: number, e: MouseEvent): void;
    onAdd(): void;
    private clampTabIndex;
    private createChangeEvent;
    private subscribeToTabLabels;
    private subscribeToAllTabChanges;
    canDeactivateFun(pre: number, next: number): Observable<boolean>;
    clickNavItem(tab: ProTabComponent, index: number): void;
    contextmenuNavItem(tab: ProTabComponent, e: MouseEvent): void;
    setSelectedIndex(index: number): void;
    getTabIndex(tab: ProTabComponent, index: number): number | null;
    getTabContentId(i: number): string;
    private setUpRouter;
    private updateRouterActive;
    private findShouldActiveTabIndex;
    private isLinkActive;
    ngOnChanges(changes: SimpleChanges): void;
    isNonEmptyString(value: {}): boolean;
    isTemplateRef(value: {}): boolean;
    static ɵfac: i0.ɵɵFactoryDef<ProTabSetComponent, [null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ProTabSetComponent, "pro-tabset", ["proTabset"], { "nzSelectedIndex": "nzSelectedIndex"; "nzTabPosition": "nzTabPosition"; "nzTabBarExtraContent": "nzTabBarExtraContent"; "nzCanDeactivate": "nzCanDeactivate"; "nzAddIcon": "nzAddIcon"; "nzTabBarStyle": "nzTabBarStyle"; "nzType": "nzType"; "nzSize": "nzSize"; "nzAnimated": "nzAnimated"; "nzTabBarGutter": "nzTabBarGutter"; "nzHideAdd": "nzHideAdd"; "nzCentered": "nzCentered"; "nzHideAll": "nzHideAll"; "nzLinkRouter": "nzLinkRouter"; "nzLinkExact": "nzLinkExact"; "nzShowPagination": "nzShowPagination"; }, { "nzSelectChange": "nzSelectChange"; "nzSelectedIndexChange": "nzSelectedIndexChange"; "nzTabListScroll": "nzTabListScroll"; "nzClose": "nzClose"; "nzAdd": "nzAdd"; "nzOnNextClick": "nzOnNextClick"; "nzOnPrevClick": "nzOnPrevClick"; }, ["allTabs"], never>;
}
