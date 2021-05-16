import { Component } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { UtilsService } from '../../services/utils.service';
import { filter, map } from 'rxjs/operators';
import { SimpleReuseStrategy } from '../../strategy/simple-reuse-strategy';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "ng-zorro-antd/dropdown";
import * as i3 from "../../models/app-config";
import * as i4 from "./menu-tab.service";
import * as i5 from "ng-zorro-antd/tabs";
import * as i6 from "@angular/common";
import * as i7 from "ng-zorro-antd/menu";
import * as i8 from "ng-zorro-antd/icon";
function MenuTabComponent_nz_tab_1_ng_template_1_i_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 11);
    i0.ɵɵlistener("click", function MenuTabComponent_nz_tab_1_ng_template_1_i_2_Template_i_click_0_listener($event) { i0.ɵɵrestoreView(_r17); const menu_r1 = i0.ɵɵnextContext(2).$implicit; const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.closeTab($event, menu_r1); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("nzType", "close")("nzTheme", "outline");
} }
function MenuTabComponent_nz_tab_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵlistener("contextmenu", function MenuTabComponent_nz_tab_1_ng_template_1_Template_div_contextmenu_0_listener($event) { i0.ɵɵrestoreView(_r20); const menu_r1 = i0.ɵɵnextContext().$implicit; const _r4 = i0.ɵɵreference(4); const ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.contextMenu($event, menu_r1, _r4); });
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, MenuTabComponent_nz_tab_1_ng_template_1_i_2_Template, 1, 2, "i", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const menu_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", menu_r1.title, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", menu_r1.canClose);
} }
function MenuTabComponent_nz_tab_1_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 12);
    i0.ɵɵlistener("click", function MenuTabComponent_nz_tab_1_li_6_Template_li_click_0_listener($event) { i0.ɵɵrestoreView(_r24); const menu_r1 = i0.ɵɵnextContext().$implicit; const ctx_r22 = i0.ɵɵnextContext(); return ctx_r22.selectDropdown($event, menu_r1, "closeTab"); });
    i0.ɵɵelement(1, "i", 13);
    i0.ɵɵelementStart(2, "span", 14);
    i0.ɵɵtext(3, "\u5173\u95ED");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzType", "close")("nzTheme", "outline");
} }
function MenuTabComponent_nz_tab_1_li_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "li", 15);
} }
function MenuTabComponent_nz_tab_1_li_9_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 12);
    i0.ɵɵlistener("click", function MenuTabComponent_nz_tab_1_li_9_Template_li_click_0_listener($event) { i0.ɵɵrestoreView(_r27); const menu_r1 = i0.ɵɵnextContext().$implicit; const ctx_r25 = i0.ɵɵnextContext(); return ctx_r25.selectDropdown($event, menu_r1, "selectTab"); });
    i0.ɵɵelement(1, "i", 13);
    i0.ɵɵelementStart(2, "span", 14);
    i0.ɵɵtext(3, "\u9009\u4E2D");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzType", "check")("nzTheme", "outline");
} }
function MenuTabComponent_nz_tab_1_li_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "li", 15);
} }
function MenuTabComponent_nz_tab_1_li_11_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 12);
    i0.ɵɵlistener("click", function MenuTabComponent_nz_tab_1_li_11_Template_li_click_0_listener($event) { i0.ɵɵrestoreView(_r30); const menu_r1 = i0.ɵɵnextContext().$implicit; const ctx_r28 = i0.ɵɵnextContext(); return ctx_r28.selectDropdown($event, menu_r1, "closeLeftTab"); });
    i0.ɵɵelement(1, "i", 13);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "\u5173\u95ED\u5DE6\u4FA7\u9875\u9762");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzType", "close")("nzTheme", "outline");
} }
function MenuTabComponent_nz_tab_1_li_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "li", 15);
} }
function MenuTabComponent_nz_tab_1_li_13_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 12);
    i0.ɵɵlistener("click", function MenuTabComponent_nz_tab_1_li_13_Template_li_click_0_listener($event) { i0.ɵɵrestoreView(_r33); const menu_r1 = i0.ɵɵnextContext().$implicit; const ctx_r31 = i0.ɵɵnextContext(); return ctx_r31.selectDropdown($event, menu_r1, "closeRightTab"); });
    i0.ɵɵelement(1, "i", 13);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "\u5173\u95ED\u53F3\u4FA7\u9875\u9762");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzType", "close")("nzTheme", "outline");
} }
function MenuTabComponent_nz_tab_1_li_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "li", 15);
} }
function MenuTabComponent_nz_tab_1_li_15_Template(rf, ctx) { if (rf & 1) {
    const _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 12);
    i0.ɵɵlistener("click", function MenuTabComponent_nz_tab_1_li_15_Template_li_click_0_listener($event) { i0.ɵɵrestoreView(_r36); const menu_r1 = i0.ɵɵnextContext().$implicit; const ctx_r34 = i0.ɵɵnextContext(); return ctx_r34.selectDropdown($event, menu_r1, "closeAllTab"); });
    i0.ɵɵelement(1, "i", 13);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "\u4FDD\u7559\u7B2C\u4E00\u9875");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzType", "close")("nzTheme", "outline");
} }
function MenuTabComponent_nz_tab_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nz-tab", 3);
    i0.ɵɵtemplate(1, MenuTabComponent_nz_tab_1_ng_template_1_Template, 3, 2, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementStart(3, "nz-dropdown-menu", null, 5);
    i0.ɵɵelementStart(5, "ul", 6);
    i0.ɵɵtemplate(6, MenuTabComponent_nz_tab_1_li_6_Template, 4, 2, "li", 7);
    i0.ɵɵtemplate(7, MenuTabComponent_nz_tab_1_li_7_Template, 1, 0, "li", 8);
    i0.ɵɵelement(8, "li");
    i0.ɵɵtemplate(9, MenuTabComponent_nz_tab_1_li_9_Template, 4, 2, "li", 7);
    i0.ɵɵtemplate(10, MenuTabComponent_nz_tab_1_li_10_Template, 1, 0, "li", 8);
    i0.ɵɵtemplate(11, MenuTabComponent_nz_tab_1_li_11_Template, 4, 2, "li", 7);
    i0.ɵɵtemplate(12, MenuTabComponent_nz_tab_1_li_12_Template, 1, 0, "li", 8);
    i0.ɵɵtemplate(13, MenuTabComponent_nz_tab_1_li_13_Template, 4, 2, "li", 7);
    i0.ɵɵtemplate(14, MenuTabComponent_nz_tab_1_li_14_Template, 1, 0, "li", 8);
    i0.ɵɵtemplate(15, MenuTabComponent_nz_tab_1_li_15_Template, 4, 2, "li", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const menu_r1 = ctx.$implicit;
    const _r2 = i0.ɵɵreference(2);
    i0.ɵɵproperty("nzTitle", _r2);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", menu_r1.canClose);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", menu_r1.canSelect);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", menu_r1.canSelect);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", menu_r1.canCloseLeft);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", menu_r1.canCloseLeft);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", menu_r1.canCloseRight);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", menu_r1.canCloseRight);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", menu_r1.canCloseExceptFirst);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", menu_r1.canCloseExceptFirst);
} }
const _c0 = ["*"];
export class MenuTabComponent {
    constructor(router, activatedRoute, nzDropdownService, cdr, appGlobal, menuTabService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.nzDropdownService = nzDropdownService;
        this.cdr = cdr;
        this.appGlobal = appGlobal;
        this.menuTabService = menuTabService;
        this.menuList = [];
        this.currentIndex = -1;
        this.urlMapTitle = new Map();
        this.showTab = true;
        this.recurseFindMenu = (url, arr) => {
            let menu = null;
            if (arr && arr.length >= 1) {
                for (let index = 0; index < arr.length; index++) {
                    const m = arr[index];
                    if (m.path == url) {
                        menu = m;
                    }
                    else {
                        menu = this.recurseFindMenu(url, m.children);
                    }
                    if (menu) {
                        break;
                    }
                }
            }
            return menu;
        };
        this.router.events.pipe(filter(event => event instanceof NavigationEnd))
            .pipe(map(() => this.activatedRoute))
            .pipe(map(route => {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }))
            .pipe(filter(route => route.outlet === 'primary'))
            .subscribe(route => {
            this.addToTab(route);
        });
    }
    ngOnInit() {
    }
    ngOnDestroy() {
    }
    addToTab(activatedRoute) {
        if (this.router.url.indexOf("/login") >= 0) {
            this.clear();
            return;
        }
        const routeData = activatedRoute.data["value"];
        if (routeData.showInTab === false) {
            this.showTab = false;
            return;
        }
        if (this.appGlobal.menuConfig
            && this.appGlobal.menuConfig.notShowInTabRoutes
            && this.appGlobal.menuConfig.notShowInTabRoutes.length >= 1) {
            const exists = this.appGlobal.menuConfig.notShowInTabRoutes.some(n => this.router.url.toLocaleLowerCase().indexOf(n.toLocaleLowerCase()) >= 0);
            if (exists) {
                this.showTab = false;
                return;
            }
        }
        this.showTab = true;
        let title = routeData.title;
        if (!title) {
            const m = this.findMenu(this.router.url);
            title = m ? m.name : this.router.url;
        }
        this.router;
        let menu = {
            title: title,
            url: this.router.url,
            key: SimpleReuseStrategy.getRouteUrl(activatedRoute.snapshot)
        };
        const exitMenu = this.menuList.find(info => info.url === menu.url);
        if (!exitMenu) {
            this.menuList.push(menu);
        }
        this.currentIndex = this.menuList.findIndex(p => p.url === menu.url);
        this.refreshMenuList();
    }
    refreshMenuList() {
        if (!this.menuList || this.menuList.length < 1) {
            return;
        }
        if (this.menuList.length === 1) {
            this.menuList[0].canClose = false;
            this.menuList[0].canSelect = false;
            this.menuList[0].canCloseLeft = false;
            this.menuList[0].canCloseRight = false;
            this.menuList[0].canCloseExceptFirst = false;
        }
        else {
            let index = 0;
            this.menuList.forEach(item => {
                item.canClose = true;
                item.canCloseExceptFirst = true;
                item.canSelect = false;
                if (index !== this.currentIndex) {
                    item.canSelect = true;
                }
                item.canCloseLeft = true;
                item.canCloseRight = true;
                if (index === 0) {
                    item.canCloseLeft = false;
                }
                else if (index === (this.menuList.length - 1)) {
                    item.canCloseRight = false;
                }
                index++;
            });
        }
    }
    clear() {
        this.urlMapTitle.clear();
        this.menuList.splice(0);
        SimpleReuseStrategy.clearRouteSnapshot();
    }
    findMenu(url) {
        if (this.urlMapTitle.has(url)) {
            return this.urlMapTitle.get(url);
        }
        if (!this.appGlobal || !this.appGlobal.menuConfig.menuData) {
            return null;
        }
        const m = this.recurseFindMenu(url, this.appGlobal.menuConfig.menuData);
        if (m) {
            this.urlMapTitle.set(url, m);
        }
        return m;
    }
    getIndex(menu) {
        return this.menuList.findIndex(p => p.url === menu.url);
    }
    closeByUrl(key) {
        if (this.menuList.length === 1) {
            return;
        }
        const index = this.menuList.findIndex(p => p.key === key);
        if (index <= -1) {
            console.log("没有找到tab，无法关闭,key:" + key);
            return;
        }
        this.menuList.splice(index, 1);
        SimpleReuseStrategy.deleteRouteSnapshot(key);
        if (this.currentIndex === index) {
            let menu = this.menuList[index - 1];
            if (!menu) {
                menu = this.menuList[index];
            }
            this.router.navigate([menu.url]);
        }
    }
    nzSelectChange($event) {
        this.currentIndex = $event.index;
        const menu = this.menuList[this.currentIndex];
        this.router.navigate([menu.url]);
    }
    navigateToUrl(index) {
        if (this.menuList.length == 0) {
            return;
        }
        if (index <= -1) {
            index = 0;
        }
        if (index >= this.menuList.length) {
            index = this.menuList.length - 1;
        }
        this.currentIndex = index;
    }
    contextMenu($event, menu, menuComp) {
        this.nzDropdownService.create($event, menuComp);
    }
    selectDropdown(evt, menu, func) {
        this.nzDropdownService.close();
        this[func](evt, menu);
        UtilsService.detectChanges(this.cdr);
    }
    removeRoute(predicate, thisArg) {
        const arr = this.menuList.filter(predicate);
        if (arr && arr.length >= 1) {
            arr.forEach(m => {
                SimpleReuseStrategy.deleteRouteSnapshot(m.key);
            });
        }
    }
    closeTabByRoute(activatedRoute) {
        const key = SimpleReuseStrategy.getRouteUrl(activatedRoute.snapshot);
        this.closeTabByKey(key);
    }
    closeTabByKey(key) {
        this.closeByUrl(key);
    }
    closeTab(evt, menu) {
        this.closeByUrl(menu.key);
        this.refreshMenuList();
    }
    selectTab(evt, menu) {
        this.navigateToUrl(this.getIndex(menu));
        this.refreshMenuList();
    }
    closeLeftTab(evt, menu) {
        const index = this.getIndex(menu);
        if (index >= 1) {
            this.removeRoute((v, i, a) => {
                if (i < index) {
                    return v;
                }
            });
            this.menuList.splice(0, index);
            this.navigateToUrl(0);
        }
        this.refreshMenuList();
    }
    closeRightTab(evt, menu) {
        const index = this.getIndex(menu);
        if (index >= 0) {
            this.removeRoute((v, i, a) => {
                if (i > index) {
                    return v;
                }
            });
            this.menuList.splice(index + 1);
            this.navigateToUrl(index);
        }
        this.refreshMenuList();
    }
    closeAllTab(evt, menu) {
        this.removeRoute((v, i, a) => { if (i >= 1) {
            return v;
        } });
        this.menuList.splice(1);
        this.navigateToUrl(0);
        this.refreshMenuList();
    }
}
MenuTabComponent.ɵfac = function MenuTabComponent_Factory(t) { return new (t || MenuTabComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.NzContextMenuService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i3.AppGlobalConfig), i0.ɵɵdirectiveInject(i4.MenuTabService)); };
MenuTabComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MenuTabComponent, selectors: [["epsgis-menu-tab"]], ngContentSelectors: _c0, decls: 4, vars: 6, consts: [["nzShowPagination", "true", 2, "margin-left", "-1px", 3, "nzAnimated", "nzSelectedIndex", "nzType", "nzSelectChange"], [3, "nzTitle", 4, "ngFor", "ngForOf"], [1, "tab-content"], [3, "nzTitle"], ["nzTabHeading", ""], ["menuComp", "nzDropdownMenu"], ["nz-menu", "", "nzInDropDown", "", 1, "dropdown-menu"], ["nz-menu-item", "", 3, "click", 4, "ngIf"], ["nz-menu-divider", "", 4, "ngIf"], [3, "contextmenu"], ["nz-icon", "", 3, "nzType", "nzTheme", "click", 4, "ngIf"], ["nz-icon", "", 3, "nzType", "nzTheme", "click"], ["nz-menu-item", "", 3, "click"], ["nz-icon", "", 3, "nzType", "nzTheme"], [1, "danger"], ["nz-menu-divider", ""]], template: function MenuTabComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "nz-tabset", 0);
        i0.ɵɵlistener("nzSelectChange", function MenuTabComponent_Template_nz_tabset_nzSelectChange_0_listener($event) { return ctx.nzSelectChange($event); });
        i0.ɵɵtemplate(1, MenuTabComponent_nz_tab_1_Template, 16, 10, "nz-tab", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵprojection(3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassProp("hide", !ctx.showTab);
        i0.ɵɵproperty("nzAnimated", true)("nzSelectedIndex", ctx.currentIndex)("nzType", "line");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.menuList);
    } }, directives: [i5.NzTabSetComponent, i6.NgForOf, i5.NzTabComponent, i2.NzDropdownMenuComponent, i7.NzMenuDirective, i6.NgIf, i8.NzIconDirective, i7.NzMenuItemDirective, i7.NzMenuDividerDirective], styles: [".close-red[_ngcontent-%COMP%]{color:red}[_nghost-%COMP%]     .anticon-close{margin-left:10px}[_nghost-%COMP%]     .anticon-close :hover{color:red}[_nghost-%COMP%]     .ant-tabs-bar{margin:0}.hide[_ngcontent-%COMP%]{display:none}.tab-content[_ngcontent-%COMP%]{width:100%;height:calc(100vh - 50px);position:relative}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MenuTabComponent, [{
        type: Component,
        args: [{
                selector: 'epsgis-menu-tab',
                templateUrl: './menu-tab.component.html',
                styleUrls: ['./menu-tab.component.scss']
            }]
    }], function () { return [{ type: i1.Router }, { type: i1.ActivatedRoute }, { type: i2.NzContextMenuService }, { type: i0.ChangeDetectorRef }, { type: i3.AppGlobalConfig }, { type: i4.MenuTabService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS10YWIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZXBzZ2lzL2NvbXBvbmVudHMvbWVudS10YWIvbWVudS10YWIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZXBzZ2lzL2NvbXBvbmVudHMvbWVudS10YWIvbWVudS10YWIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFxQixTQUFTLEVBQWtDLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBd0IsYUFBYSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDOUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRzVELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7Ozs7Ozs7Ozs7OztJQ0NuRSw2QkFBMEc7SUFBaEMseVFBQStCO0lBQUMsaUJBQUk7O0lBQW5HLGdDQUFrQixzQkFBQTs7OztJQUgvQiw4QkFBdUQ7SUFBbEQseVRBQWlEO0lBQ3BELFlBQ0E7SUFDQSxxRkFBOEc7SUFDaEgsaUJBQU07OztJQUhKLGVBQ0E7SUFEQSw4Q0FDQTtJQUNxRCxlQUFtQjtJQUFuQix1Q0FBbUI7Ozs7SUFNeEUsOEJBQXdGO0lBQXZFLCtQQUFvQyxVQUFVLEtBQUU7SUFDL0Qsd0JBQXdEO0lBQ3hELGdDQUFxQjtJQUFBLDRCQUFFO0lBQUEsaUJBQU87SUFDaEMsaUJBQUs7O0lBRlEsZUFBa0I7SUFBbEIsZ0NBQWtCLHNCQUFBOzs7SUFHL0IseUJBQTJDOzs7O0lBQzNDLDhCQUEwRjtJQUF6RSwrUEFBb0MsV0FBVyxLQUFFO0lBQ2hFLHdCQUF3RDtJQUN4RCxnQ0FBcUI7SUFBQSw0QkFBRTtJQUFBLGlCQUFPO0lBQ2hDLGlCQUFLOztJ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QUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQzs7Z0ZBM1VVLGdCQUFnQjtxREFBaEIsZ0JBQWdCOztRQ2Y3QixvQ0FDOEQ7UUFBNUQsd0hBQWtCLDBCQUFzQixJQUFDO1FBQ3pDLHlFQXNDUztRQUNYLGlCQUFZO1FBQ1osOEJBQXlCO1FBRXZCLGtCQUF5QjtRQUMzQixpQkFBTTs7UUE3Q0ssb0NBQXVCO1FBQTRCLGlDQUFtQixxQ0FBQSxrQkFBQTtRQUV0RCxlQUFXO1FBQVgsc0NBQVc7O3VGRGF6QixnQkFBZ0I7Y0FONUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFdBQVcsRUFBRSwyQkFBMkI7Z0JBQ3hDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO2FBRXpDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgRGF0YSwgTmF2aWdhdGlvbkVuZCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFV0aWxzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3V0aWxzLnNlcnZpY2UnO1xuLy8gaW1wb3J0IHsgTnpEcm9wZG93bkNvbnRleHRDb21wb25lbnQsIE56RHJvcGRvd25TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XG5pbXBvcnQgeyBOekNvbnRleHRNZW51U2VydmljZSwgTnpEcm9wZG93bk1lbnVDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL2Ryb3Bkb3duJztcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU2ltcGxlUmV1c2VTdHJhdGVneSB9IGZyb20gJy4uLy4uL3N0cmF0ZWd5L3NpbXBsZS1yZXVzZS1zdHJhdGVneSc7XG5pbXBvcnQgeyBBcHBHbG9iYWxDb25maWcgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXBwLWNvbmZpZyc7XG5pbXBvcnQgeyBNZW51VGFiU2VydmljZSB9IGZyb20gJy4vbWVudS10YWIuc2VydmljZSc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlcHNnaXMtbWVudS10YWInLFxuICB0ZW1wbGF0ZVVybDogJy4vbWVudS10YWIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tZW51LXRhYi5jb21wb25lbnQuc2NzcyddXG4gIC8vIHByb3ZpZGVyczogW01lbnVUYWJTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBNZW51VGFiQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIC8qKlxuICAgKiDmiZPlvIDnmoTot6/nlLHliJfooahcbiAgICovXG4gIG1lbnVMaXN0OiBBcnJheTxJVGFiTWVudUl0ZW0+ID0gW107XG4gIC8qKlxuICAgKiDlvZPliY3pgInkuK10YWLntKLlvJVcbiAgICovXG4gIGN1cnJlbnRJbmRleCA9IC0xO1xuICB1cmxNYXBUaXRsZSA9IG5ldyBNYXAoKTtcbiAgZHJvcGRvd246IE56RHJvcGRvd25NZW51Q29tcG9uZW50O1xuICBzaG93VGFiOiBib29sZWFuID0gdHJ1ZTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAvLyBwcml2YXRlIHRpdGxlU2VydmljZTogVGl0bGUsXG4gICAgcHJpdmF0ZSBuekRyb3Bkb3duU2VydmljZTogTnpDb250ZXh0TWVudVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgYXBwR2xvYmFsOiBBcHBHbG9iYWxDb25maWcsXG4gICAgcHJpdmF0ZSBtZW51VGFiU2VydmljZTogTWVudVRhYlNlcnZpY2VcbiAgKSB7XG4gICAgLy8g6Lev55Sx5LqL5Lu2XG4gICAgdGhpcy5yb3V0ZXIuZXZlbnRzLnBpcGUoZmlsdGVyKGV2ZW50ID0+IGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkpXG4gICAgICAucGlwZShtYXAoKCkgPT4gdGhpcy5hY3RpdmF0ZWRSb3V0ZSkpXG4gICAgICAucGlwZShtYXAocm91dGUgPT4ge1xuICAgICAgICB3aGlsZSAocm91dGUuZmlyc3RDaGlsZCkgeyByb3V0ZSA9IHJvdXRlLmZpcnN0Q2hpbGQ7IH1cbiAgICAgICAgcmV0dXJuIHJvdXRlO1xuICAgICAgfSkpXG4gICAgICAucGlwZShmaWx0ZXIocm91dGUgPT4gcm91dGUub3V0bGV0ID09PSAncHJpbWFyeScpKVxuICAgICAgLy8ucGlwZShtZXJnZU1hcCgocm91dGUpPT5yb3V0ZS5kYXRhKSlcbiAgICAgIC8vIC5zdWJzY3JpYmUoKGRhdGEpID0+IHRoaXMuYWRkVG9UYWIoZGF0YSkpXG4gICAgICAuc3Vic2NyaWJlKHJvdXRlID0+IHtcbiAgICAgICAgdGhpcy5hZGRUb1RhYihyb3V0ZSk7XG4gICAgICB9KTtcbiAgfVxuICBuZ09uSW5pdCgpIHtcblxuICB9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIC8v5pyN55So6YeM6LCD55So5LqGZGVzdG9yee+8jOi/memHjOWGjeiwg+eUqOWwseS8mumAoOaIkOmAkuW9kuiwg+eUqFxuICAgIC8vIHRoaXMuY2xlYXIoKTtcbiAgfVxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSBhY3RpdmF0ZWRSb3V0ZSBcbiAgICovXG4gIHByaXZhdGUgYWRkVG9UYWIoYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XG4gICAgLy9hY3RpdmF0ZWRSb3V0ZVtcIl9yb3V0ZXJTdGF0ZVwiXS5zbmFwc2hvdC51cmw7XG4gICAgLy8gdGhpcy5tZW51VGFiU2VydmljZS5hZGQoKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcImluZGV4OnMlLG5hZW06cyVcIiwgdGhpcy5tZW51VGFiU2VydmljZS5nZXRJbmRleCgpLCB0aGlzLm1lbnVUYWJTZXJ2aWNlLmdldE5hbWUoKSk7XG4gICAgaWYgKHRoaXMucm91dGVyLnVybC5pbmRleE9mKFwiL2xvZ2luXCIpID49IDApIHtcbiAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgcm91dGVEYXRhID0gYWN0aXZhdGVkUm91dGUuZGF0YVtcInZhbHVlXCJdO1xuICAgIGlmIChyb3V0ZURhdGEuc2hvd0luVGFiID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5zaG93VGFiID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmFwcEdsb2JhbC5tZW51Q29uZmlnXG4gICAgICAmJiB0aGlzLmFwcEdsb2JhbC5tZW51Q29uZmlnLm5vdFNob3dJblRhYlJvdXRlc1xuICAgICAgJiYgdGhpcy5hcHBHbG9iYWwubWVudUNvbmZpZy5ub3RTaG93SW5UYWJSb3V0ZXMubGVuZ3RoID49IDFcbiAgICApIHtcbiAgICAgIGNvbnN0IGV4aXN0cyA9IHRoaXMuYXBwR2xvYmFsLm1lbnVDb25maWcubm90U2hvd0luVGFiUm91dGVzLnNvbWUobiA9PiB0aGlzLnJvdXRlci51cmwudG9Mb2NhbGVMb3dlckNhc2UoKS5pbmRleE9mKG4udG9Mb2NhbGVMb3dlckNhc2UoKSkgPj0gMCk7XG4gICAgICBpZiAoZXhpc3RzKSB7XG4gICAgICAgIHRoaXMuc2hvd1RhYiA9IGZhbHNlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2hvd1RhYiA9IHRydWU7XG4gICAgLy/lhYjlj5bphY3nva7nmoTmoIfpopjvvIzmsqHmnInlho3ku47oj5zljZXph4zmn6Xmib5cbiAgICBsZXQgdGl0bGUgPSByb3V0ZURhdGEudGl0bGU7XG4gICAgaWYgKCF0aXRsZSkge1xuICAgICAgLy/mn6Xmib7oj5zljZVcbiAgICAgIGNvbnN0IG0gPSB0aGlzLmZpbmRNZW51KHRoaXMucm91dGVyLnVybCk7XG4gICAgICB0aXRsZSA9IG0gPyBtLm5hbWUgOiB0aGlzLnJvdXRlci51cmw7XG4gICAgfVxuICAgIHRoaXMucm91dGVyXG4gICAgbGV0IG1lbnU6IElUYWJNZW51SXRlbSA9IHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIHVybDogdGhpcy5yb3V0ZXIudXJsLFxuICAgICAga2V5OiBTaW1wbGVSZXVzZVN0cmF0ZWd5LmdldFJvdXRlVXJsKGFjdGl2YXRlZFJvdXRlLnNuYXBzaG90KVxuICAgIH07XG5cbiAgICAvLyB0aGlzLnRpdGxlU2VydmljZS5zZXRUaXRsZShtZW51LnRpdGxlKTsgLy8g6K6+572u572R6aG15qCH6aKYXG4gICAgY29uc3QgZXhpdE1lbnUgPSB0aGlzLm1lbnVMaXN0LmZpbmQoaW5mbyA9PiBpbmZvLnVybCA9PT0gbWVudS51cmwpO1xuICAgIGlmICghZXhpdE1lbnUpIHsvLyDlpoLmnpzkuI3lrZjlnKjpgqPkuYjkuI3mt7vliqDvvIxcbiAgICAgIHRoaXMubWVudUxpc3QucHVzaChtZW51KTtcbiAgICB9XG4gICAgdGhpcy5jdXJyZW50SW5kZXggPSB0aGlzLm1lbnVMaXN0LmZpbmRJbmRleChwID0+IHAudXJsID09PSBtZW51LnVybCk7XG4gICAgdGhpcy5yZWZyZXNoTWVudUxpc3QoKTtcbiAgfVxuXG4gIC8qKuWIt+aWsOiPnOWNlemhuSAqL1xuICBwcml2YXRlIHJlZnJlc2hNZW51TGlzdCgpIHtcbiAgICBpZighdGhpcy5tZW51TGlzdCB8fCB0aGlzLm1lbnVMaXN0Lmxlbmd0aCA8IDEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYodGhpcy5tZW51TGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICAgIHRoaXMubWVudUxpc3RbMF0uY2FuQ2xvc2UgPSBmYWxzZTtcbiAgICAgIHRoaXMubWVudUxpc3RbMF0uY2FuU2VsZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLm1lbnVMaXN0WzBdLmNhbkNsb3NlTGVmdCA9IGZhbHNlO1xuICAgICAgdGhpcy5tZW51TGlzdFswXS5jYW5DbG9zZVJpZ2h0ID0gZmFsc2U7XG4gICAgICB0aGlzLm1lbnVMaXN0WzBdLmNhbkNsb3NlRXhjZXB0Rmlyc3QgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSAwO1xuICAgICAgdGhpcy5tZW51TGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpdGVtLmNhbkNsb3NlID0gdHJ1ZTtcbiAgICAgICAgaXRlbS5jYW5DbG9zZUV4Y2VwdEZpcnN0ID0gdHJ1ZTtcbiAgICAgICAgaXRlbS5jYW5TZWxlY3QgPSBmYWxzZTtcbiAgICAgICAgaWYoaW5kZXggIT09IHRoaXMuY3VycmVudEluZGV4KSB7XG4gICAgICAgICAgaXRlbS5jYW5TZWxlY3QgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGl0ZW0uY2FuQ2xvc2VMZWZ0ID0gdHJ1ZTtcbiAgICAgICAgaXRlbS5jYW5DbG9zZVJpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgaWYoaW5kZXggPT09IDApIHtcbiAgICAgICAgICBpdGVtLmNhbkNsb3NlTGVmdCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYoaW5kZXggPT09ICh0aGlzLm1lbnVMaXN0Lmxlbmd0aCAtMSkpIHtcbiAgICAgICAgICBpdGVtLmNhbkNsb3NlUmlnaHQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpbmRleCsrO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbGVhcigpIHtcbiAgICB0aGlzLnVybE1hcFRpdGxlLmNsZWFyKCk7XG4gICAgdGhpcy5tZW51TGlzdC5zcGxpY2UoMCk7XG4gICAgU2ltcGxlUmV1c2VTdHJhdGVneS5jbGVhclJvdXRlU25hcHNob3QoKTtcbiAgfVxuICBwcml2YXRlIHJlY3Vyc2VGaW5kTWVudSA9ICh1cmw6IHN0cmluZywgYXJyOiBBcnJheTxhbnk+KSA9PiB7XG4gICAgbGV0IG1lbnUgPSBudWxsO1xuICAgIGlmIChhcnIgJiYgYXJyLmxlbmd0aCA+PSAxKSB7XG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBtID0gYXJyW2luZGV4XTtcbiAgICAgICAgaWYgKG0ucGF0aCA9PSB1cmwpIHtcbiAgICAgICAgICBtZW51ID0gbTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtZW51ID0gdGhpcy5yZWN1cnNlRmluZE1lbnUodXJsLCBtLmNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWVudSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZW51O1xuICB9O1xuICBwcml2YXRlIGZpbmRNZW51KHVybDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMudXJsTWFwVGl0bGUuaGFzKHVybCkpIHtcbiAgICAgIHJldHVybiB0aGlzLnVybE1hcFRpdGxlLmdldCh1cmwpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuYXBwR2xvYmFsIHx8ICF0aGlzLmFwcEdsb2JhbC5tZW51Q29uZmlnLm1lbnVEYXRhKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgbSA9IHRoaXMucmVjdXJzZUZpbmRNZW51KHVybCwgdGhpcy5hcHBHbG9iYWwubWVudUNvbmZpZy5tZW51RGF0YSk7XG4gICAgaWYgKG0pIHtcbiAgICAgIHRoaXMudXJsTWFwVGl0bGUuc2V0KHVybCwgbSk7XG4gICAgfVxuICAgIHJldHVybiBtO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRJbmRleChtZW51OiBJVGFiTWVudUl0ZW0pIHtcbiAgICByZXR1cm4gdGhpcy5tZW51TGlzdC5maW5kSW5kZXgocCA9PiBwLnVybCA9PT0gbWVudS51cmwpO1xuICB9XG4gIC8qKlxuICAgKiDlhbPpl63pgInpobnmoIfnrb5cbiAgICogQHBhcmFtIGtleSBcbiAgICovXG4gIHByaXZhdGUgY2xvc2VCeVVybChrZXk6IHN0cmluZykge1xuICAgIC8vIOWmguaenOWPquacieS4gOS4quS4jeWPr+S7peWFs+mXrVxuICAgIGlmICh0aGlzLm1lbnVMaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyDpgJrov4d1cmzmn6Xmib50YWLntKLlvJVcbiAgICBjb25zdCBpbmRleCA9IHRoaXMubWVudUxpc3QuZmluZEluZGV4KHAgPT4gcC5rZXkgPT09IGtleSk7XG4gICAgaWYgKGluZGV4IDw9IC0xKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIuayoeacieaJvuWIsHRhYu+8jOaXoOazleWFs+mXrSxrZXk6XCIgKyBrZXkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm1lbnVMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgLy8g5Yig6Zmk5aSN55SoXG4gICAgU2ltcGxlUmV1c2VTdHJhdGVneS5kZWxldGVSb3V0ZVNuYXBzaG90KGtleSk7XG4gICAgLy8g5aaC5p6c5b2T5YmN5Yig6Zmk55qE5a+56LGh5piv5b2T5YmN6YCJ5Lit55qE77yM6YKj5LmI6ZyA6KaB6Lez6L2sXG4gICAgaWYgKHRoaXMuY3VycmVudEluZGV4ID09PSBpbmRleCkge1xuICAgICAgLy8g5pi+56S65LiK5LiA5Liq6YCJ5LitXG4gICAgICBsZXQgbWVudSA9IHRoaXMubWVudUxpc3RbaW5kZXggLSAxXTtcbiAgICAgIGlmICghbWVudSkgey8vIOWmguaenOS4iuS4gOS4quayoeacieS4i+S4gOS4qumAieS4rVxuICAgICAgICBtZW51ID0gdGhpcy5tZW51TGlzdFtpbmRleF07XG4gICAgICB9XG4gICAgICAvLyDot7Povazot6/nlLFcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFttZW51LnVybF0pO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogdGFi5Y+R55Sf5pS55Y+YXG4gICAqL1xuICBuelNlbGVjdENoYW5nZSgkZXZlbnQpIHtcbiAgICB0aGlzLmN1cnJlbnRJbmRleCA9ICRldmVudC5pbmRleDtcbiAgICBjb25zdCBtZW51ID0gdGhpcy5tZW51TGlzdFt0aGlzLmN1cnJlbnRJbmRleF07XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW21lbnUudXJsXSk7XG4gIH1cblxuICBwcml2YXRlIG5hdmlnYXRlVG9VcmwoaW5kZXg6IG51bWJlcikge1xuICAgIGlmICh0aGlzLm1lbnVMaXN0Lmxlbmd0aCA9PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpbmRleCA8PSAtMSkge1xuICAgICAgaW5kZXggPSAwO1xuICAgIH1cbiAgICBpZiAoaW5kZXggPj0gdGhpcy5tZW51TGlzdC5sZW5ndGgpIHtcbiAgICAgIGluZGV4ID0gdGhpcy5tZW51TGlzdC5sZW5ndGggLSAxO1xuICAgIH1cbiAgICAvLyBjb25zdCBtZW51ID0gdGhpcy5tZW51TGlzdFtpbmRleF07XG4gICAgLy8g6Lez6L2s6Lev55SxXG4gICAgLy8gdGhpcy5yb3V0ZXIubmF2aWdhdGUoW21lbnUudXJsXSk7XG4gICAgdGhpcy5jdXJyZW50SW5kZXggPSBpbmRleDtcbiAgfVxuXG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtICRldmVudCBcbiAgICogQHBhcmFtIHRlbXBsYXRlICB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD4sXG4gICAqIEBwYXJhbSBtZW51IFxuICAgKi9cbiAgY29udGV4dE1lbnUoJGV2ZW50OiBNb3VzZUV2ZW50LCBtZW51OiBJVGFiTWVudUl0ZW0sbWVudUNvbXA6TnpEcm9wZG93bk1lbnVDb21wb25lbnQpOiB2b2lkIHtcbiAgICAvLyB0aGlzLmRyb3Bkb3duID0gdGhpcy5uekRyb3Bkb3duU2VydmljZS5jcmVhdGUoJGV2ZW50LCB0ZW1wbGF0ZSk7XG4gICAgdGhpcy5uekRyb3Bkb3duU2VydmljZS5jcmVhdGUoJGV2ZW50LCBtZW51Q29tcCk7XG4gIH1cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0gZXZ0IFxuICAgKiBAcGFyYW0gbm9kZSBcbiAgICogQHBhcmFtIG1lbnUgXG4gICAqL1xuICBzZWxlY3REcm9wZG93bihldnQ6IE1vdXNlRXZlbnQsIG1lbnU6IElUYWJNZW51SXRlbSwgZnVuYzogc3RyaW5nKTogdm9pZCB7XG4gICAgLy90aGlzLmRyb3Bkb3duLmNsb3NlKCk7XG4gICAgdGhpcy5uekRyb3Bkb3duU2VydmljZS5jbG9zZSgpO1xuICAgIHRoaXNbZnVuY10oZXZ0LCBtZW51KTtcbiAgICAvL+mAmui/h3jlhbPpl63nmoTlj6/ku6Xoh6rliqjliLfmlrDvvIzlj7PplK7oj5zljZXlhbPpl63nmoTkuI3ooYzjgILjgILjgILjgILoibnvvIzlk6rph4zpl67popjvvJ/vvJ/vvJ9cbiAgICBVdGlsc1NlcnZpY2UuZGV0ZWN0Q2hhbmdlcyh0aGlzLmNkcik7XG4gIH1cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0gcHJlZGljYXRlIFxuICAgKiBAcGFyYW0gdGhpc0FyZyBcbiAgICovXG4gIHByaXZhdGUgcmVtb3ZlUm91dGUocHJlZGljYXRlOiAodmFsdWU6IElUYWJNZW51SXRlbSwgaW5kZXg6IG51bWJlciwgYXJyYXk6IElUYWJNZW51SXRlbVtdKSA9PiBJVGFiTWVudUl0ZW0sIHRoaXNBcmc/OiBhbnkpIHtcbiAgICBjb25zdCBhcnIgPSB0aGlzLm1lbnVMaXN0LmZpbHRlcihwcmVkaWNhdGUpO1xuICAgIGlmIChhcnIgJiYgYXJyLmxlbmd0aCA+PSAxKSB7XG4gICAgICBhcnIuZm9yRWFjaChtID0+IHtcbiAgICAgICAgU2ltcGxlUmV1c2VTdHJhdGVneS5kZWxldGVSb3V0ZVNuYXBzaG90KG0ua2V5KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSBrZXkgXG4gICAqL1xuICBjbG9zZVRhYkJ5Um91dGUoYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XG4gICAgY29uc3Qga2V5ID0gU2ltcGxlUmV1c2VTdHJhdGVneS5nZXRSb3V0ZVVybChhY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdClcbiAgICB0aGlzLmNsb3NlVGFiQnlLZXkoa2V5KTtcbiAgfVxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSBrZXkgXG4gICAqL1xuICBjbG9zZVRhYkJ5S2V5KGtleTogc3RyaW5nKSB7XG4gICAgdGhpcy5jbG9zZUJ5VXJsKGtleSk7XG4gIH1cbiAgLyoqXG4gICAqIOWFs+mXrXRhYlxuICAgKiBAcGFyYW0gbWVudSBcbiAgICovXG4gIGNsb3NlVGFiKGV2dDogTW91c2VFdmVudCwgbWVudTogSVRhYk1lbnVJdGVtKSB7XG4gICAgdGhpcy5jbG9zZUJ5VXJsKG1lbnUua2V5KTtcbiAgICB0aGlzLnJlZnJlc2hNZW51TGlzdCgpO1xuICB9XG4gIC8qKlxuICAgKiDpgInkuK10YWJcbiAgICogQHBhcmFtIG1lbnUgXG4gICAqL1xuICBzZWxlY3RUYWIoZXZ0OiBNb3VzZUV2ZW50LCBtZW51OiBJVGFiTWVudUl0ZW0pIHtcbiAgICB0aGlzLm5hdmlnYXRlVG9VcmwodGhpcy5nZXRJbmRleChtZW51KSk7XG4gICAgdGhpcy5yZWZyZXNoTWVudUxpc3QoKTtcbiAgfVxuICAvKipcbiAgICog5YWz6Zet5bem5L6ndGFiXG4gICAqIEBwYXJhbSBtZW51IFxuICAgKi9cbiAgY2xvc2VMZWZ0VGFiKGV2dDogTW91c2VFdmVudCwgbWVudTogSVRhYk1lbnVJdGVtKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdldEluZGV4KG1lbnUpO1xuICAgIGlmIChpbmRleCA+PSAxKSB7XG4gICAgICB0aGlzLnJlbW92ZVJvdXRlKCh2OiBJVGFiTWVudUl0ZW0sIGk6IG51bWJlciwgYTogQXJyYXk8SVRhYk1lbnVJdGVtPikgPT4ge1xuICAgICAgICBpZiAoaSA8IGluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5tZW51TGlzdC5zcGxpY2UoMCwgaW5kZXgpO1xuICAgICAgdGhpcy5uYXZpZ2F0ZVRvVXJsKDApO1xuICAgIH1cbiAgICB0aGlzLnJlZnJlc2hNZW51TGlzdCgpO1xuICB9XG4gIC8qKlxuICAgKiDlhbPpl63lj7Pkvqd0YWJcbiAgICogQHBhcmFtIG1lbnUgXG4gICAqL1xuICBjbG9zZVJpZ2h0VGFiKGV2dDogTW91c2VFdmVudCwgbWVudTogSVRhYk1lbnVJdGVtKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdldEluZGV4KG1lbnUpO1xuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICB0aGlzLnJlbW92ZVJvdXRlKCh2OiBJVGFiTWVudUl0ZW0sIGk6IG51bWJlciwgYTogQXJyYXk8SVRhYk1lbnVJdGVtPikgPT4ge1xuICAgICAgICBpZiAoaSA+IGluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5tZW51TGlzdC5zcGxpY2UoaW5kZXggKyAxKTtcbiAgICAgIHRoaXMubmF2aWdhdGVUb1VybChpbmRleCk7XG4gICAgfVxuICAgIHRoaXMucmVmcmVzaE1lbnVMaXN0KCk7XG4gIH1cbiAgLyoqXG4gICAqIOWFs+mXreaJgOacie+8iOaUueS4uuS6huS/neeVmeesrOS4gOmhte+8iVxuICAgKiBAcGFyYW0gbWVudSBcbiAgICovXG4gIGNsb3NlQWxsVGFiKGV2dDogTW91c2VFdmVudCwgbWVudTogSVRhYk1lbnVJdGVtKSB7XG4gICAgdGhpcy5yZW1vdmVSb3V0ZSgodjogSVRhYk1lbnVJdGVtLCBpOiBudW1iZXIsIGE6IEFycmF5PElUYWJNZW51SXRlbT4pID0+IHsgaWYgKGkgPj0gMSkgeyByZXR1cm4gdjsgfSB9KTtcbiAgICAvL+WIoOmZpOaJgOacieeahOivne+8jHRhYuaYr+WFqOmDqOWFs+mXreS6hu+8jOS9huaYr+mhtemdouayoeacieWFs+mXreWujFxuICAgIC8vIHRoaXMubWVudUxpc3Quc3BsaWNlKDApO1xuICAgIC8vIHRoaXMuY3VycmVudEluZGV4ID0gLTE7XG4gICAgdGhpcy5tZW51TGlzdC5zcGxpY2UoMSk7XG4gICAgdGhpcy5uYXZpZ2F0ZVRvVXJsKDApO1xuICAgIHRoaXMucmVmcmVzaE1lbnVMaXN0KCk7XG4gIH1cbn1cbi8qKuiPnOWNlemhuSAqL1xuZXhwb3J0IGludGVyZmFjZSBJVGFiTWVudUl0ZW0ge1xuICB0aXRsZTogc3RyaW5nO1xuICB1cmw6IHN0cmluZztcbiAgY2FuQ2xvc2U/OiBib29sZWFuO1xuICBjYW5TZWxlY3Q/OiBib29sZWFuO1xuICBjYW5DbG9zZUxlZnQ/OiBib29sZWFuO1xuICBjYW5DbG9zZVJpZ2h0PzogYm9vbGVhbjtcbiAgY2FuQ2xvc2VFeGNlcHRGaXJzdD86IGJvb2xlYW47XG4gIGtleTogc3RyaW5nO1xufSIsIjxuei10YWJzZXQgW2NsYXNzLmhpZGVdPVwiIXNob3dUYWJcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAtMXB4O1wiIFtuekFuaW1hdGVkXT1cInRydWVcIiBbbnpTZWxlY3RlZEluZGV4XT1cImN1cnJlbnRJbmRleFwiIG56U2hvd1BhZ2luYXRpb249XCJ0cnVlXCJcbiAgKG56U2VsZWN0Q2hhbmdlKT1cIm56U2VsZWN0Q2hhbmdlKCRldmVudClcIiBbbnpUeXBlXT1cIidsaW5lJ1wiPlxuICA8bnotdGFiICpuZ0Zvcj1cImxldCBtZW51IG9mIG1lbnVMaXN0XCIgW256VGl0bGVdPVwibnpUYWJIZWFkaW5nXCI+XG4gICAgPG5nLXRlbXBsYXRlICNuelRhYkhlYWRpbmc+XG4gICAgICA8ZGl2IChjb250ZXh0bWVudSk9XCJjb250ZXh0TWVudSgkZXZlbnQsbWVudSxtZW51Q29tcClcIj5cbiAgICAgICAge3ttZW51LnRpdGxlfX1cbiAgICAgICAgPCEtLSA8aSAqbmdJZj1cIm1lbnUuaXNSZW1vdmVcIiAoY2xpY2spPVwiY2xvc2VVcmwobWVudS51cmwpXCIgY2xhc3M9XCJhbnRpY29uIGFudGljb24tY3Jvc3MgY2xvc2UtcmVkXCIgPjwvaT4gLS0+XG4gICAgICAgIDxpIG56LWljb24gW256VHlwZV09XCInY2xvc2UnXCIgW256VGhlbWVdPVwiJ291dGxpbmUnXCIgKm5nSWY9XCJtZW51LmNhbkNsb3NlXCIgKGNsaWNrKT1cImNsb3NlVGFiKCRldmVudCxtZW51KVwiPjwvaT5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPCEtLSA8bmctdGVtcGxhdGUgI2NvbnRleHRUZW1wbGF0ZT4gLS0+XG4gICAgICA8bnotZHJvcGRvd24tbWVudSAjbWVudUNvbXA9XCJuekRyb3Bkb3duTWVudVwiPlxuICAgICAgPHVsIG56LW1lbnUgbnpJbkRyb3BEb3duIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiPlxuICAgICAgICA8bGkgbnotbWVudS1pdGVtIChjbGljayk9XCJzZWxlY3REcm9wZG93bigkZXZlbnQsbWVudSwnY2xvc2VUYWInKVwiICpuZ0lmPVwibWVudS5jYW5DbG9zZVwiPlxuICAgICAgICAgIDxpIG56LWljb24gW256VHlwZV09XCInY2xvc2UnXCIgW256VGhlbWVdPVwiJ291dGxpbmUnXCI+PC9pPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGFuZ2VyXCI+5YWz6ZetPC9zcGFuPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgbnotbWVudS1kaXZpZGVyICpuZ0lmPVwibWVudS5jYW5TZWxlY3RcIj48bGk+XG4gICAgICAgIDxsaSBuei1tZW51LWl0ZW0gKGNsaWNrKT1cInNlbGVjdERyb3Bkb3duKCRldmVudCxtZW51LCdzZWxlY3RUYWInKVwiICpuZ0lmPVwibWVudS5jYW5TZWxlY3RcIj5cbiAgICAgICAgICA8aSBuei1pY29uIFtuelR5cGVdPVwiJ2NoZWNrJ1wiIFtuelRoZW1lXT1cIidvdXRsaW5lJ1wiPjwvaT5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImRhbmdlclwiPumAieS4rTwvc3Bhbj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIG56LW1lbnUtZGl2aWRlciAqbmdJZj1cIm1lbnUuY2FuQ2xvc2VMZWZ0XCI+PC9saT5cbiAgICAgICAgPGxpIG56LW1lbnUtaXRlbSAoY2xpY2spPVwic2VsZWN0RHJvcGRvd24oJGV2ZW50LG1lbnUsJ2Nsb3NlTGVmdFRhYicpO1wiICpuZ0lmPVwibWVudS5jYW5DbG9zZUxlZnRcIj5cbiAgICAgICAgICA8aSBuei1pY29uIFtuelR5cGVdPVwiJ2Nsb3NlJ1wiIFtuelRoZW1lXT1cIidvdXRsaW5lJ1wiPjwvaT5cbiAgICAgICAgICA8c3Bhbj7lhbPpl63lt6bkvqfpobXpnaI8L3NwYW4+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBuei1tZW51LWRpdmlkZXIgKm5nSWY9XCJtZW51LmNhbkNsb3NlUmlnaHRcIj48L2xpPlxuICAgICAgICA8bGkgbnotbWVudS1pdGVtIChjbGljayk9XCJzZWxlY3REcm9wZG93bigkZXZlbnQsbWVudSwnY2xvc2VSaWdodFRhYicpO1wiICpuZ0lmPVwibWVudS5jYW5DbG9zZVJpZ2h0XCI+XG4gICAgICAgICAgPGkgbnotaWNvbiBbbnpUeXBlXT1cIidjbG9zZSdcIiBbbnpUaGVtZV09XCInb3V0bGluZSdcIj48L2k+XG4gICAgICAgICAgPHNwYW4+5YWz6Zet5Y+z5L6n6aG16Z2iPC9zcGFuPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgbnotbWVudS1kaXZpZGVyICpuZ0lmPVwibWVudS5jYW5DbG9zZUV4Y2VwdEZpcnN0XCI+PC9saT5cbiAgICAgICAgPGxpIG56LW1lbnUtaXRlbSAoY2xpY2spPVwic2VsZWN0RHJvcGRvd24oJGV2ZW50LG1lbnUsJ2Nsb3NlQWxsVGFiJyk7XCIgKm5nSWY9XCJtZW51LmNhbkNsb3NlRXhjZXB0Rmlyc3RcIj5cbiAgICAgICAgICA8aSBuei1pY29uIFtuelR5cGVdPVwiJ2Nsb3NlJ1wiIFtuelRoZW1lXT1cIidvdXRsaW5lJ1wiPjwvaT5cbiAgICAgICAgICA8c3Bhbj7kv53nlZnnrKzkuIDpobU8L3NwYW4+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvbnotZHJvcGRvd24tbWVudT5cbiAgICA8IS0tIDwvbmctdGVtcGxhdGU+IC0tPlxuICA8L256LXRhYj5cbjwvbnotdGFic2V0PlxuPGRpdiBjbGFzcz1cInRhYi1jb250ZW50XCI+XG4gIDwhLS3ot6/nlLHnmoTlhoXlrrnkvJrooqvmmL7npLrlnKjov5nph4wtLT5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+Il19