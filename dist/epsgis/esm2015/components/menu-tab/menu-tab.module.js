import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { MenuTabComponent } from './menu-tab.component';
import { MenuTabService } from './menu-tab.service';
import * as i0 from "@angular/core";
export class EpsGisMenuTabModule {
}
EpsGisMenuTabModule.ɵmod = i0.ɵɵdefineNgModule({ type: EpsGisMenuTabModule });
EpsGisMenuTabModule.ɵinj = i0.ɵɵdefineInjector({ factory: function EpsGisMenuTabModule_Factory(t) { return new (t || EpsGisMenuTabModule)(); }, providers: [
        MenuTabService
    ], imports: [[
            CommonModule,
            NzTabsModule,
            NzIconModule,
            NzDropDownModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(EpsGisMenuTabModule, { declarations: [MenuTabComponent], imports: [CommonModule,
        NzTabsModule,
        NzIconModule,
        NzDropDownModule], exports: [MenuTabComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EpsGisMenuTabModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    NzTabsModule,
                    NzIconModule,
                    NzDropDownModule
                ],
                declarations: [
                    MenuTabComponent
                ],
                entryComponents: [
                    MenuTabComponent
                ],
                exports: [
                    MenuTabComponent
                ],
                providers: [
                    MenuTabService
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS10YWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZXBzZ2lzL2NvbXBvbmVudHMvbWVudS10YWIvbWVudS10YWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQXNCcEQsTUFBTSxPQUFPLG1CQUFtQjs7dURBQW5CLG1CQUFtQjtxSEFBbkIsbUJBQW1CLG1CQUpqQjtRQUNQLGNBQWM7S0FDakIsWUFqQlE7WUFDTCxZQUFZO1lBQ1osWUFBWTtZQUNaLFlBQVk7WUFDWixnQkFBZ0I7U0FDbkI7d0ZBY1EsbUJBQW1CLG1CQVp4QixnQkFBZ0IsYUFOaEIsWUFBWTtRQUNaLFlBQVk7UUFDWixZQUFZO1FBQ1osZ0JBQWdCLGFBU2hCLGdCQUFnQjt1RkFNWCxtQkFBbUI7Y0FwQi9CLFFBQVE7ZUFBQztnQkFDTixPQUFPLEVBQUU7b0JBQ0wsWUFBWTtvQkFDWixZQUFZO29CQUNaLFlBQVk7b0JBQ1osZ0JBQWdCO2lCQUNuQjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1YsZ0JBQWdCO2lCQUNuQjtnQkFDRCxlQUFlLEVBQUU7b0JBQ2IsZ0JBQWdCO2lCQUNuQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ0wsZ0JBQWdCO2lCQUNuQjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1AsY0FBYztpQkFDakI7YUFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpEcm9wRG93bk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvZHJvcGRvd24nO1xuaW1wb3J0IHsgTnpUYWJzTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90YWJzJztcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XG5pbXBvcnQgeyBNZW51VGFiQ29tcG9uZW50IH0gZnJvbSAnLi9tZW51LXRhYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWVudVRhYlNlcnZpY2UgfSBmcm9tICcuL21lbnUtdGFiLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBOelRhYnNNb2R1bGUsXG4gICAgICAgIE56SWNvbk1vZHVsZSxcbiAgICAgICAgTnpEcm9wRG93bk1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIE1lbnVUYWJDb21wb25lbnRcbiAgICBdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW1xuICAgICAgICBNZW51VGFiQ29tcG9uZW50XG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIE1lbnVUYWJDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBNZW51VGFiU2VydmljZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgRXBzR2lzTWVudVRhYk1vZHVsZSB7IH0iXX0=