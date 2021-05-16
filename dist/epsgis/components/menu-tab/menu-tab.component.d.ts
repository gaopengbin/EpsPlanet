import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzContextMenuService, NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { AppGlobalConfig } from '../../models/app-config';
import { MenuTabService } from './menu-tab.service';
import * as i0 from "@angular/core";
export declare class MenuTabComponent implements OnInit, OnDestroy {
    private router;
    private activatedRoute;
    private nzDropdownService;
    private cdr;
    private appGlobal;
    private menuTabService;
    menuList: Array<ITabMenuItem>;
    currentIndex: number;
    urlMapTitle: Map<any, any>;
    dropdown: NzDropdownMenuComponent;
    showTab: boolean;
    constructor(router: Router, activatedRoute: ActivatedRoute, nzDropdownService: NzContextMenuService, cdr: ChangeDetectorRef, appGlobal: AppGlobalConfig, menuTabService: MenuTabService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private addToTab;
    private refreshMenuList;
    private clear;
    private recurseFindMenu;
    private findMenu;
    private getIndex;
    private closeByUrl;
    nzSelectChange($event: any): void;
    private navigateToUrl;
    contextMenu($event: MouseEvent, menu: ITabMenuItem, menuComp: NzDropdownMenuComponent): void;
    selectDropdown(evt: MouseEvent, menu: ITabMenuItem, func: string): void;
    private removeRoute;
    closeTabByRoute(activatedRoute: ActivatedRoute): void;
    closeTabByKey(key: string): void;
    closeTab(evt: MouseEvent, menu: ITabMenuItem): void;
    selectTab(evt: MouseEvent, menu: ITabMenuItem): void;
    closeLeftTab(evt: MouseEvent, menu: ITabMenuItem): void;
    closeRightTab(evt: MouseEvent, menu: ITabMenuItem): void;
    closeAllTab(evt: MouseEvent, menu: ITabMenuItem): void;
    static ɵfac: i0.ɵɵFactoryDef<MenuTabComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MenuTabComponent, "epsgis-menu-tab", never, {}, {}, never, ["*"]>;
}
export interface ITabMenuItem {
    title: string;
    url: string;
    canClose?: boolean;
    canSelect?: boolean;
    canCloseLeft?: boolean;
    canCloseRight?: boolean;
    canCloseExceptFirst?: boolean;
    key: string;
}
//# sourceMappingURL=menu-tab.component.d.ts.map