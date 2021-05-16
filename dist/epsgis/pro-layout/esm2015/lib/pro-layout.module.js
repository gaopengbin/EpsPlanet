import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzTreeViewModule } from 'ng-zorro-antd/tree-view';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { BaseMenuComponent } from './sider-menu/base-menu.component';
import { RouterModule } from '@angular/router';
import { BasicLayoutComponent } from './layout/basic-layout.component';
import { GlobalHeaderComponent } from './global-header/global-header.component';
import { GridContentComponent } from './grid-content/grid-content.component';
import { PageHeaderWrapperComponent } from './page-header-wrapper/page-header-wrapper.component';
import { TopNavHeaderComponent } from './top-nav-header/top-nav-header.component';
import { SettingDrawerComponent } from './setting-drawer/setting-drawer.component';
import { GlobalFooterComponent } from './global-footer/global-footer.component';
import { BlockCheckboxComponent } from './setting-drawer/block-checkbox/block-checkbox.component';
import { ThemeColorComponent } from './setting-drawer/theme-color/theme-color.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from "@ngx-translate/core";
import { ReuseTabModule } from "./reuse-tab/reuse-tab.module";
import * as i0 from "@angular/core";
const Layouts = [
    GlobalHeaderComponent,
    BasicLayoutComponent,
    GridContentComponent,
    PageHeaderWrapperComponent,
    TopNavHeaderComponent,
    SettingDrawerComponent,
    GlobalFooterComponent,
    BlockCheckboxComponent,
    ThemeColorComponent,
    BaseMenuComponent,
];
export class ProLayoutModule {
}
ProLayoutModule.ɵmod = i0.ɵɵdefineNgModule({ type: ProLayoutModule });
ProLayoutModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ProLayoutModule_Factory(t) { return new (t || ProLayoutModule)(); }, providers: [], imports: [[
            CommonModule,
            RouterModule,
            NzButtonModule,
            NzIconModule,
            NzLayoutModule,
            NzDropDownModule,
            NzMenuModule,
            NzSelectModule,
            NzListModule,
            NzPopoverModule,
            NzTableModule,
            NzTabsModule,
            NzTreeModule,
            NzTreeViewModule,
            NzAlertModule,
            NzDrawerModule,
            NzMessageModule,
            NzPageHeaderModule,
            NzBreadCrumbModule,
            NzDividerModule,
            NzToolTipModule,
            NzSwitchModule,
            FormsModule,
            ReactiveFormsModule,
            TranslateModule,
            ReuseTabModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ProLayoutModule, { declarations: [GlobalHeaderComponent,
        BasicLayoutComponent,
        GridContentComponent,
        PageHeaderWrapperComponent,
        TopNavHeaderComponent,
        SettingDrawerComponent,
        GlobalFooterComponent,
        BlockCheckboxComponent,
        ThemeColorComponent,
        BaseMenuComponent], imports: [CommonModule,
        RouterModule,
        NzButtonModule,
        NzIconModule,
        NzLayoutModule,
        NzDropDownModule,
        NzMenuModule,
        NzSelectModule,
        NzListModule,
        NzPopoverModule,
        NzTableModule,
        NzTabsModule,
        NzTreeModule,
        NzTreeViewModule,
        NzAlertModule,
        NzDrawerModule,
        NzMessageModule,
        NzPageHeaderModule,
        NzBreadCrumbModule,
        NzDividerModule,
        NzToolTipModule,
        NzSwitchModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        ReuseTabModule], exports: [GlobalHeaderComponent,
        BasicLayoutComponent,
        GridContentComponent,
        PageHeaderWrapperComponent,
        TopNavHeaderComponent,
        SettingDrawerComponent,
        GlobalFooterComponent,
        BlockCheckboxComponent,
        ThemeColorComponent,
        BaseMenuComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProLayoutModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    NzButtonModule,
                    NzIconModule,
                    NzLayoutModule,
                    NzDropDownModule,
                    NzMenuModule,
                    NzSelectModule,
                    NzListModule,
                    NzPopoverModule,
                    NzTableModule,
                    NzTabsModule,
                    NzTreeModule,
                    NzTreeViewModule,
                    NzAlertModule,
                    NzDrawerModule,
                    NzMessageModule,
                    NzPageHeaderModule,
                    NzBreadCrumbModule,
                    NzDividerModule,
                    NzToolTipModule,
                    NzSwitchModule,
                    FormsModule,
                    ReactiveFormsModule,
                    TranslateModule,
                    ReuseTabModule
                ],
                exports: [
                    ...Layouts
                ],
                declarations: [
                    ...Layouts
                ],
                providers: [],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvLWxheW91dC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9wcm8tbGF5b3V0L3NyYy9saWIvcHJvLWxheW91dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzNELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzlELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXRELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBQ25FLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUNyRSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQUM5RSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUMzRSxPQUFPLEVBQUMsMEJBQTBCLEVBQUMsTUFBTSxxREFBcUQsQ0FBQztBQUMvRixPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUNoRixPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUNqRixPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQUM5RSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSwwREFBMEQsQ0FBQztBQUNoRyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxvREFBb0QsQ0FBQztBQUN2RixPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQzs7QUFFNUQsTUFBTSxPQUFPLEdBQUc7SUFDZCxxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQiwwQkFBMEI7SUFDMUIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixpQkFBaUI7Q0FDbEIsQ0FBQztBQXlDRixNQUFNLE9BQU8sZUFBZTs7bURBQWYsZUFBZTs2R0FBZixlQUFlLG1CQUZmLEVBQUUsWUFwQ0o7WUFDUCxZQUFZO1lBQ1osWUFBWTtZQUVaLGNBQWM7WUFDZCxZQUFZO1lBQ1osY0FBYztZQUNkLGdCQUFnQjtZQUNoQixZQUFZO1lBQ1osY0FBYztZQUNkLFlBQVk7WUFDWixlQUFlO1lBQ2YsYUFBYTtZQUNiLFlBQVk7WUFDWixZQUFZO1lBQ1osZ0JBQWdCO1lBQ2hCLGFBQWE7WUFDYixjQUFjO1lBQ2QsZUFBZTtZQUNmLGtCQUFrQjtZQUNsQixrQkFBa0I7WUFDbEIsZUFBZTtZQUNmLGVBQWU7WUFDZixjQUFjO1lBRWQsV0FBVztZQUNYLG1CQUFtQjtZQUNuQixlQUFlO1lBQ2YsY0FBYztTQUNmO3dGQVNVLGVBQWUsbUJBbkQxQixxQkFBcUI7UUFDckIsb0JBQW9CO1FBQ3BCLG9CQUFvQjtRQUNwQiwwQkFBMEI7UUFDMUIscUJBQXFCO1FBQ3JCLHNCQUFzQjtRQUN0QixxQkFBcUI7UUFDckIsc0JBQXNCO1FBQ3RCLG1CQUFtQjtRQUNuQixpQkFBaUIsYUFLZixZQUFZO1FBQ1osWUFBWTtRQUVaLGNBQWM7UUFDZCxZQUFZO1FBQ1osY0FBYztRQUNkLGdCQUFnQjtRQUNoQixZQUFZO1FBQ1osY0FBYztRQUNkLFlBQVk7UUFDWixlQUFlO1FBQ2YsYUFBYTtRQUNiLFlBQVk7UUFDWixZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYixjQUFjO1FBQ2QsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLGVBQWU7UUFDZixjQUFjO1FBRWQsV0FBVztRQUNYLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsY0FBYyxhQXpDaEIscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQixvQkFBb0I7UUFDcEIsMEJBQTBCO1FBQzFCLHFCQUFxQjtRQUNyQixzQkFBc0I7UUFDdEIscUJBQXFCO1FBQ3JCLHNCQUFzQjtRQUN0QixtQkFBbUI7UUFDbkIsaUJBQWlCO3VGQTBDTixlQUFlO2NBdkMzQixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osWUFBWTtvQkFFWixjQUFjO29CQUNkLFlBQVk7b0JBQ1osY0FBYztvQkFDZCxnQkFBZ0I7b0JBQ2hCLFlBQVk7b0JBQ1osY0FBYztvQkFDZCxZQUFZO29CQUNaLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYixZQUFZO29CQUNaLFlBQVk7b0JBQ1osZ0JBQWdCO29CQUNoQixhQUFhO29CQUNiLGNBQWM7b0JBQ2QsZUFBZTtvQkFDZixrQkFBa0I7b0JBQ2xCLGtCQUFrQjtvQkFDbEIsZUFBZTtvQkFDZixlQUFlO29CQUNmLGNBQWM7b0JBRWQsV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLGVBQWU7b0JBQ2YsY0FBYztpQkFDZjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsR0FBRyxPQUFPO2lCQUNYO2dCQUNELFlBQVksRUFBRTtvQkFDWixHQUFHLE9BQU87aUJBQ1g7Z0JBQ0QsU0FBUyxFQUFFLEVBQUU7YUFDZCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IE56QnV0dG9uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9idXR0b24nO1xuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcbmltcG9ydCB7IE56TGF5b3V0TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9sYXlvdXQnO1xuaW1wb3J0IHsgTnpEcm9wRG93bk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvZHJvcGRvd24nO1xuaW1wb3J0IHsgTnpNZW51TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9tZW51JztcbmltcG9ydCB7IE56U2VsZWN0TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9zZWxlY3QnO1xuaW1wb3J0IHsgTnpMaXN0TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9saXN0JztcbmltcG9ydCB7IE56UG9wb3Zlck1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvcG9wb3Zlcic7XG5pbXBvcnQgeyBOelRhYmxlTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90YWJsZSc7XG5pbXBvcnQgeyBOelRhYnNNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3RhYnMnO1xuaW1wb3J0IHsgTnpUcmVlTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90cmVlJztcbmltcG9ydCB7IE56VHJlZVZpZXdNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3RyZWUtdmlldyc7XG5pbXBvcnQgeyBOekFsZXJ0TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9hbGVydCc7XG5pbXBvcnQgeyBOekRyYXdlck1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvZHJhd2VyJztcbmltcG9ydCB7IE56TWVzc2FnZU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvbWVzc2FnZSc7XG5pbXBvcnQgeyBOelBhZ2VIZWFkZXJNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3BhZ2UtaGVhZGVyJztcbmltcG9ydCB7IE56QnJlYWRDcnVtYk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvYnJlYWRjcnVtYic7XG5pbXBvcnQgeyBOekRpdmlkZXJNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2RpdmlkZXInO1xuaW1wb3J0IHsgTnpUb29sVGlwTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90b29sdGlwJztcbmltcG9ydCB7IE56U3dpdGNoTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9zd2l0Y2gnO1xuXG5pbXBvcnQge0Jhc2VNZW51Q29tcG9uZW50fSBmcm9tICcuL3NpZGVyLW1lbnUvYmFzZS1tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQge1JvdXRlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7QmFzaWNMYXlvdXRDb21wb25lbnR9IGZyb20gJy4vbGF5b3V0L2Jhc2ljLWxheW91dC5jb21wb25lbnQnO1xuaW1wb3J0IHtHbG9iYWxIZWFkZXJDb21wb25lbnR9IGZyb20gJy4vZ2xvYmFsLWhlYWRlci9nbG9iYWwtaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQge0dyaWRDb250ZW50Q29tcG9uZW50fSBmcm9tICcuL2dyaWQtY29udGVudC9ncmlkLWNvbnRlbnQuY29tcG9uZW50JztcbmltcG9ydCB7UGFnZUhlYWRlcldyYXBwZXJDb21wb25lbnR9IGZyb20gJy4vcGFnZS1oZWFkZXItd3JhcHBlci9wYWdlLWhlYWRlci13cmFwcGVyLmNvbXBvbmVudCc7XG5pbXBvcnQge1RvcE5hdkhlYWRlckNvbXBvbmVudH0gZnJvbSAnLi90b3AtbmF2LWhlYWRlci90b3AtbmF2LWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHtTZXR0aW5nRHJhd2VyQ29tcG9uZW50fSBmcm9tICcuL3NldHRpbmctZHJhd2VyL3NldHRpbmctZHJhd2VyLmNvbXBvbmVudCc7XG5pbXBvcnQge0dsb2JhbEZvb3RlckNvbXBvbmVudH0gZnJvbSAnLi9nbG9iYWwtZm9vdGVyL2dsb2JhbC1mb290ZXIuY29tcG9uZW50JztcbmltcG9ydCB7QmxvY2tDaGVja2JveENvbXBvbmVudH0gZnJvbSAnLi9zZXR0aW5nLWRyYXdlci9ibG9jay1jaGVja2JveC9ibG9jay1jaGVja2JveC5jb21wb25lbnQnO1xuaW1wb3J0IHtUaGVtZUNvbG9yQ29tcG9uZW50fSBmcm9tICcuL3NldHRpbmctZHJhd2VyL3RoZW1lLWNvbG9yL3RoZW1lLWNvbG9yLmNvbXBvbmVudCc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1RyYW5zbGF0ZU1vZHVsZX0gZnJvbSBcIkBuZ3gtdHJhbnNsYXRlL2NvcmVcIjtcbmltcG9ydCB7UmV1c2VUYWJNb2R1bGV9IGZyb20gXCIuL3JldXNlLXRhYi9yZXVzZS10YWIubW9kdWxlXCI7XG5cbmNvbnN0IExheW91dHMgPSBbXG4gIEdsb2JhbEhlYWRlckNvbXBvbmVudCxcbiAgQmFzaWNMYXlvdXRDb21wb25lbnQsXG4gIEdyaWRDb250ZW50Q29tcG9uZW50LFxuICBQYWdlSGVhZGVyV3JhcHBlckNvbXBvbmVudCxcbiAgVG9wTmF2SGVhZGVyQ29tcG9uZW50LFxuICBTZXR0aW5nRHJhd2VyQ29tcG9uZW50LFxuICBHbG9iYWxGb290ZXJDb21wb25lbnQsXG4gIEJsb2NrQ2hlY2tib3hDb21wb25lbnQsXG4gIFRoZW1lQ29sb3JDb21wb25lbnQsXG4gIEJhc2VNZW51Q29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG5cbiAgICBOekJ1dHRvbk1vZHVsZSxcbiAgICBOekljb25Nb2R1bGUsXG4gICAgTnpMYXlvdXRNb2R1bGUsXG4gICAgTnpEcm9wRG93bk1vZHVsZSxcbiAgICBOek1lbnVNb2R1bGUsXG4gICAgTnpTZWxlY3RNb2R1bGUsXG4gICAgTnpMaXN0TW9kdWxlLFxuICAgIE56UG9wb3Zlck1vZHVsZSxcbiAgICBOelRhYmxlTW9kdWxlLFxuICAgIE56VGFic01vZHVsZSxcbiAgICBOelRyZWVNb2R1bGUsXG4gICAgTnpUcmVlVmlld01vZHVsZSxcbiAgICBOekFsZXJ0TW9kdWxlLFxuICAgIE56RHJhd2VyTW9kdWxlLFxuICAgIE56TWVzc2FnZU1vZHVsZSxcbiAgICBOelBhZ2VIZWFkZXJNb2R1bGUsXG4gICAgTnpCcmVhZENydW1iTW9kdWxlLFxuICAgIE56RGl2aWRlck1vZHVsZSxcbiAgICBOelRvb2xUaXBNb2R1bGUsXG4gICAgTnpTd2l0Y2hNb2R1bGUsXG5cbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIFRyYW5zbGF0ZU1vZHVsZSxcbiAgICBSZXVzZVRhYk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLi4uTGF5b3V0c1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5MYXlvdXRzXG4gIF0sXG4gIHByb3ZpZGVyczogW10sXG59KVxuZXhwb3J0IGNsYXNzIFByb0xheW91dE1vZHVsZSB7XG59XG4iXX0=