import { EpsGisDirectivesModule } from '../directives/directives.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzResultModule } from 'ng-zorro-antd/result';
import { OnScreenWidgetIconComponent } from './on-screen-widget-icon/on-screen-widget-icon.component';
import { OnScreenWidgetPanelComponent } from './on-screen-widget-panel/on-screen-widget-panel.component';
import { DockablePanelAtBottomComponent } from './ex-panels/dockable-panel-at-bottom/dockable-panel-at-bottom.component';
import { DockablePanelAtRightComponent } from './ex-panels/dockable-panel-at-right/dockable-panel-at-right.component';
import { DockablePanelAtLeftComponent } from "./ex-panels/dockable-panel-at-left/dockable-panel-at-left.component";
import { MobileActionPanelComponent } from './mobile/action-panel/action-panel.component';
import { MobileDrawerPanelComponent } from './mobile/drawer-panel/drawer-panel.component';
import { MobileModalPanelComponent } from './mobile/modal-panel/modal-panel.component';
import { MobilePopupPanelComponent } from './mobile/popup-panel/popup-panel.component';
import { MobileDrawerRightPanelComponent } from './mobile/drawer-panel-right/drawer-panel-right.component';
import { IframePanelComponent } from './ex-panels/iframe-panel/iframe-panel.component';
import { PipesModule } from '../pipes/pipes.module';
import { ResultfofComponent } from './shared/resultfof/resultfof.component';
import { ResultfooComponent } from './shared/resultfoo/resultfoo.component';
import { ResultfotComponent } from './shared/resultfot/resultfot.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { WidgetSettingComponent } from './setting/widget-setting/widget-setting.component';
import { EpsGisSharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { EpsGisIconModule } from './icon/icon-module';
import { PanelTitleBarComponent } from './base-panel/panel-titlebar.component';
import * as i0 from "@angular/core";
export class EpsGisWidgetBaseModule {
}
EpsGisWidgetBaseModule.ɵmod = i0.ɵɵdefineNgModule({ type: EpsGisWidgetBaseModule });
EpsGisWidgetBaseModule.ɵinj = i0.ɵɵdefineInjector({ factory: function EpsGisWidgetBaseModule_Factory(t) { return new (t || EpsGisWidgetBaseModule)(); }, providers: [], imports: [[
            CommonModule,
            FormsModule,
            NzIconModule,
            NzResultModule,
            EpsGisDirectivesModule,
            PipesModule,
            EpsGisSharedModule,
            EpsGisIconModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(EpsGisWidgetBaseModule, { declarations: [OnScreenWidgetIconComponent,
        OnScreenWidgetPanelComponent,
        DockablePanelAtLeftComponent,
        DockablePanelAtBottomComponent,
        DockablePanelAtRightComponent,
        IframePanelComponent,
        MobileActionPanelComponent,
        MobileDrawerPanelComponent,
        MobileModalPanelComponent,
        MobilePopupPanelComponent,
        MobileDrawerRightPanelComponent,
        ResultfofComponent,
        ResultfooComponent,
        ResultfotComponent,
        WidgetSettingComponent,
        PanelTitleBarComponent], imports: [CommonModule,
        FormsModule,
        NzIconModule,
        NzResultModule,
        EpsGisDirectivesModule,
        PipesModule,
        EpsGisSharedModule,
        EpsGisIconModule], exports: [PanelTitleBarComponent,
        ResultfofComponent,
        ResultfooComponent,
        ResultfotComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EpsGisWidgetBaseModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    NzIconModule,
                    NzResultModule,
                    EpsGisDirectivesModule,
                    PipesModule,
                    EpsGisSharedModule,
                    EpsGisIconModule
                ],
                declarations: [
                    OnScreenWidgetIconComponent,
                    OnScreenWidgetPanelComponent,
                    DockablePanelAtLeftComponent,
                    DockablePanelAtBottomComponent,
                    DockablePanelAtRightComponent,
                    IframePanelComponent,
                    MobileActionPanelComponent,
                    MobileDrawerPanelComponent,
                    MobileModalPanelComponent,
                    MobilePopupPanelComponent,
                    MobileDrawerRightPanelComponent,
                    ResultfofComponent,
                    ResultfooComponent,
                    ResultfotComponent,
                    WidgetSettingComponent,
                    PanelTitleBarComponent
                ],
                entryComponents: [
                    OnScreenWidgetIconComponent,
                    OnScreenWidgetPanelComponent,
                    DockablePanelAtLeftComponent,
                    DockablePanelAtBottomComponent,
                    DockablePanelAtRightComponent,
                    IframePanelComponent,
                    MobileActionPanelComponent,
                    MobileDrawerPanelComponent,
                    MobileModalPanelComponent,
                    MobilePopupPanelComponent,
                    MobileDrawerRightPanelComponent,
                    WidgetSettingComponent
                ],
                exports: [
                    PanelTitleBarComponent,
                    ResultfofComponent,
                    ResultfooComponent,
                    ResultfotComponent
                ],
                providers: []
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LWJhc2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZXBzZ2lzL2NvbXBvbmVudHMvd2lkZ2V0LWJhc2UubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUN0RyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUN6RyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSx5RUFBeUUsQ0FBQztBQUN6SCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQztBQUN0SCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxxRUFBcUUsQ0FBQztBQUNuSCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUMxRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUMxRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN2RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN2RixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUMzRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUN2RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDNUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7QUEwRC9FLE1BQU0sT0FBTyxzQkFBc0I7OzBEQUF0QixzQkFBc0I7MkhBQXRCLHNCQUFzQixtQkFKcEIsRUFFVixZQXJEUTtZQUNMLFlBQVk7WUFJWixXQUFXO1lBQ1gsWUFBWTtZQUNaLGNBQWM7WUFDZCxzQkFBc0I7WUFDdEIsV0FBVztZQUNYLGtCQUFrQjtZQUNsQixnQkFBZ0I7U0FDbkI7d0ZBMkNRLHNCQUFzQixtQkF6QzNCLDJCQUEyQjtRQUMzQiw0QkFBNEI7UUFDNUIsNEJBQTRCO1FBQzVCLDhCQUE4QjtRQUM5Qiw2QkFBNkI7UUFDN0Isb0JBQW9CO1FBQ3BCLDBCQUEwQjtRQUMxQiwwQkFBMEI7UUFDMUIseUJBQXlCO1FBQ3pCLHlCQUF5QjtRQUN6QiwrQkFBK0I7UUFDL0Isa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsc0JBQXNCO1FBQ3RCLHNCQUFzQixhQTVCdEIsWUFBWTtRQUlaLFdBQVc7UUFDWCxZQUFZO1FBQ1osY0FBYztRQUNkLHNCQUFzQjtRQUN0QixXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLGdCQUFnQixhQW1DaEIsc0JBQXNCO1FBQ3RCLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsa0JBQWtCO3VGQU1iLHNCQUFzQjtjQXhEbEMsUUFBUTtlQUFDO2dCQUNOLE9BQU8sRUFBRTtvQkFDTCxZQUFZO29CQUlaLFdBQVc7b0JBQ1gsWUFBWTtvQkFDWixjQUFjO29CQUNkLHNCQUFzQjtvQkFDdEIsV0FBVztvQkFDWCxrQkFBa0I7b0JBQ2xCLGdCQUFnQjtpQkFDbkI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNWLDJCQUEyQjtvQkFDM0IsNEJBQTRCO29CQUM1Qiw0QkFBNEI7b0JBQzVCLDhCQUE4QjtvQkFDOUIsNkJBQTZCO29CQUM3QixvQkFBb0I7b0JBQ3BCLDBCQUEwQjtvQkFDMUIsMEJBQTBCO29CQUMxQix5QkFBeUI7b0JBQ3pCLHlCQUF5QjtvQkFDekIsK0JBQStCO29CQUMvQixrQkFBa0I7b0JBQ2xCLGtCQUFrQjtvQkFDbEIsa0JBQWtCO29CQUNsQixzQkFBc0I7b0JBQ3RCLHNCQUFzQjtpQkFDekI7Z0JBQ0QsZUFBZSxFQUFFO29CQUNiLDJCQUEyQjtvQkFDM0IsNEJBQTRCO29CQUM1Qiw0QkFBNEI7b0JBQzVCLDhCQUE4QjtvQkFDOUIsNkJBQTZCO29CQUM3QixvQkFBb0I7b0JBQ3BCLDBCQUEwQjtvQkFDMUIsMEJBQTBCO29CQUMxQix5QkFBeUI7b0JBQ3pCLHlCQUF5QjtvQkFDekIsK0JBQStCO29CQUMvQixzQkFBc0I7aUJBQ3pCO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxzQkFBc0I7b0JBQ3RCLGtCQUFrQjtvQkFDbEIsa0JBQWtCO29CQUNsQixrQkFBa0I7aUJBQ3JCO2dCQUNELFNBQVMsRUFBRSxFQUVWO2FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFcHNHaXNEaXJlY3RpdmVzTW9kdWxlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9kaXJlY3RpdmVzLm1vZHVsZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56UmVzdWx0TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9yZXN1bHQnO1xyXG5pbXBvcnQgeyBPblNjcmVlbldpZGdldEljb25Db21wb25lbnQgfSBmcm9tICcuL29uLXNjcmVlbi13aWRnZXQtaWNvbi9vbi1zY3JlZW4td2lkZ2V0LWljb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgT25TY3JlZW5XaWRnZXRQYW5lbENvbXBvbmVudCB9IGZyb20gJy4vb24tc2NyZWVuLXdpZGdldC1wYW5lbC9vbi1zY3JlZW4td2lkZ2V0LXBhbmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERvY2thYmxlUGFuZWxBdEJvdHRvbUNvbXBvbmVudCB9IGZyb20gJy4vZXgtcGFuZWxzL2RvY2thYmxlLXBhbmVsLWF0LWJvdHRvbS9kb2NrYWJsZS1wYW5lbC1hdC1ib3R0b20uY29tcG9uZW50JztcclxuaW1wb3J0IHsgRG9ja2FibGVQYW5lbEF0UmlnaHRDb21wb25lbnQgfSBmcm9tICcuL2V4LXBhbmVscy9kb2NrYWJsZS1wYW5lbC1hdC1yaWdodC9kb2NrYWJsZS1wYW5lbC1hdC1yaWdodC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEb2NrYWJsZVBhbmVsQXRMZWZ0Q29tcG9uZW50IH0gZnJvbSBcIi4vZXgtcGFuZWxzL2RvY2thYmxlLXBhbmVsLWF0LWxlZnQvZG9ja2FibGUtcGFuZWwtYXQtbGVmdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTW9iaWxlQWN0aW9uUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL21vYmlsZS9hY3Rpb24tcGFuZWwvYWN0aW9uLXBhbmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1vYmlsZURyYXdlclBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9tb2JpbGUvZHJhd2VyLXBhbmVsL2RyYXdlci1wYW5lbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNb2JpbGVNb2RhbFBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9tb2JpbGUvbW9kYWwtcGFuZWwvbW9kYWwtcGFuZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTW9iaWxlUG9wdXBQYW5lbENvbXBvbmVudCB9IGZyb20gJy4vbW9iaWxlL3BvcHVwLXBhbmVsL3BvcHVwLXBhbmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1vYmlsZURyYXdlclJpZ2h0UGFuZWxDb21wb25lbnQgfSBmcm9tICcuL21vYmlsZS9kcmF3ZXItcGFuZWwtcmlnaHQvZHJhd2VyLXBhbmVsLXJpZ2h0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IElmcmFtZVBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9leC1wYW5lbHMvaWZyYW1lLXBhbmVsL2lmcmFtZS1wYW5lbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQaXBlc01vZHVsZSB9IGZyb20gJy4uL3BpcGVzL3BpcGVzLm1vZHVsZSc7XHJcbmltcG9ydCB7IFJlc3VsdGZvZkNvbXBvbmVudCB9IGZyb20gJy4vc2hhcmVkL3Jlc3VsdGZvZi9yZXN1bHRmb2YuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmVzdWx0Zm9vQ29tcG9uZW50IH0gZnJvbSAnLi9zaGFyZWQvcmVzdWx0Zm9vL3Jlc3VsdGZvby5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSZXN1bHRmb3RDb21wb25lbnQgfSBmcm9tICcuL3NoYXJlZC9yZXN1bHRmb3QvcmVzdWx0Zm90LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XHJcbmltcG9ydCB7IFdpZGdldFNldHRpbmdDb21wb25lbnQgfSBmcm9tICcuL3NldHRpbmcvd2lkZ2V0LXNldHRpbmcvd2lkZ2V0LXNldHRpbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRXBzR2lzU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBFcHNHaXNJY29uTW9kdWxlIH0gZnJvbSAnLi9pY29uL2ljb24tbW9kdWxlJztcclxuaW1wb3J0IHsgUGFuZWxUaXRsZUJhckNvbXBvbmVudCB9IGZyb20gJy4vYmFzZS1wYW5lbC9wYW5lbC10aXRsZWJhci5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgLy8gUG9ydGFsTW9kdWxlLFxyXG4gICAgICAgIC8vIE92ZXJsYXlNb2R1bGUsXHJcbiAgICAgICAgLy8gQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXHJcbiAgICAgICAgRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgTnpJY29uTW9kdWxlLFxyXG4gICAgICAgIE56UmVzdWx0TW9kdWxlLFxyXG4gICAgICAgIEVwc0dpc0RpcmVjdGl2ZXNNb2R1bGUsXHJcbiAgICAgICAgUGlwZXNNb2R1bGUsXHJcbiAgICAgICAgRXBzR2lzU2hhcmVkTW9kdWxlLFxyXG4gICAgICAgIEVwc0dpc0ljb25Nb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBPblNjcmVlbldpZGdldEljb25Db21wb25lbnQsXHJcbiAgICAgICAgT25TY3JlZW5XaWRnZXRQYW5lbENvbXBvbmVudCxcclxuICAgICAgICBEb2NrYWJsZVBhbmVsQXRMZWZ0Q29tcG9uZW50LFxyXG4gICAgICAgIERvY2thYmxlUGFuZWxBdEJvdHRvbUNvbXBvbmVudCxcclxuICAgICAgICBEb2NrYWJsZVBhbmVsQXRSaWdodENvbXBvbmVudCxcclxuICAgICAgICBJZnJhbWVQYW5lbENvbXBvbmVudCxcclxuICAgICAgICBNb2JpbGVBY3Rpb25QYW5lbENvbXBvbmVudCxcclxuICAgICAgICBNb2JpbGVEcmF3ZXJQYW5lbENvbXBvbmVudCxcclxuICAgICAgICBNb2JpbGVNb2RhbFBhbmVsQ29tcG9uZW50LFxyXG4gICAgICAgIE1vYmlsZVBvcHVwUGFuZWxDb21wb25lbnQsXHJcbiAgICAgICAgTW9iaWxlRHJhd2VyUmlnaHRQYW5lbENvbXBvbmVudCxcclxuICAgICAgICBSZXN1bHRmb2ZDb21wb25lbnQsXHJcbiAgICAgICAgUmVzdWx0Zm9vQ29tcG9uZW50LFxyXG4gICAgICAgIFJlc3VsdGZvdENvbXBvbmVudCxcclxuICAgICAgICBXaWRnZXRTZXR0aW5nQ29tcG9uZW50LFxyXG4gICAgICAgIFBhbmVsVGl0bGVCYXJDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcclxuICAgICAgICBPblNjcmVlbldpZGdldEljb25Db21wb25lbnQsXHJcbiAgICAgICAgT25TY3JlZW5XaWRnZXRQYW5lbENvbXBvbmVudCxcclxuICAgICAgICBEb2NrYWJsZVBhbmVsQXRMZWZ0Q29tcG9uZW50LFxyXG4gICAgICAgIERvY2thYmxlUGFuZWxBdEJvdHRvbUNvbXBvbmVudCxcclxuICAgICAgICBEb2NrYWJsZVBhbmVsQXRSaWdodENvbXBvbmVudCxcclxuICAgICAgICBJZnJhbWVQYW5lbENvbXBvbmVudCxcclxuICAgICAgICBNb2JpbGVBY3Rpb25QYW5lbENvbXBvbmVudCxcclxuICAgICAgICBNb2JpbGVEcmF3ZXJQYW5lbENvbXBvbmVudCxcclxuICAgICAgICBNb2JpbGVNb2RhbFBhbmVsQ29tcG9uZW50LFxyXG4gICAgICAgIE1vYmlsZVBvcHVwUGFuZWxDb21wb25lbnQsXHJcbiAgICAgICAgTW9iaWxlRHJhd2VyUmlnaHRQYW5lbENvbXBvbmVudCxcclxuICAgICAgICBXaWRnZXRTZXR0aW5nQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIFBhbmVsVGl0bGVCYXJDb21wb25lbnQsXHJcbiAgICAgICAgUmVzdWx0Zm9mQ29tcG9uZW50LFxyXG4gICAgICAgIFJlc3VsdGZvb0NvbXBvbmVudCxcclxuICAgICAgICBSZXN1bHRmb3RDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICAvL3sgcHJvdmlkZTogT3ZlcmxheUNvbnRhaW5lciwgdXNlQ2xhc3M6IEZ1bGxzY3JlZW5PdmVybGF5Q29udGFpbmVyIH1cclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEVwc0dpc1dpZGdldEJhc2VNb2R1bGUgeyB9Il19