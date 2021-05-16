import { NgModule } from '@angular/core';
import { ReuseTabMenuComponent } from "./reuse-tab-menu.component";
import { ReuseTabComponent } from "./reuse-tab.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { ProTabsModule } from "../tabs/tabs.module";
import * as i0 from "@angular/core";
export class ReuseTabModule {
}
ReuseTabModule.ɵmod = i0.ɵɵdefineNgModule({ type: ReuseTabModule });
ReuseTabModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ReuseTabModule_Factory(t) { return new (t || ReuseTabModule)(); }, providers: [], imports: [[
            CommonModule,
            RouterModule,
            ProTabsModule,
            NzMenuModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ReuseTabModule, { declarations: [ReuseTabMenuComponent, ReuseTabComponent], imports: [CommonModule,
        RouterModule,
        ProTabsModule,
        NzMenuModule], exports: [ReuseTabComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ReuseTabModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    ProTabsModule,
                    NzMenuModule
                ],
                exports: [
                    ReuseTabComponent
                ],
                declarations: [ReuseTabMenuComponent, ReuseTabComponent],
                entryComponents: [ReuseTabMenuComponent],
                providers: []
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Byby1sYXlvdXQvc3JjL2xpYi9yZXVzZS10YWIvcmV1c2UtdGFiLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXZDLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQ2pFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ3hELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQzs7QUFnQmxELE1BQU0sT0FBTyxjQUFjOztrREFBZCxjQUFjOzJHQUFkLGNBQWMsbUJBRmQsRUFBRSxZQVhKO1lBQ1AsWUFBWTtZQUNaLFlBQVk7WUFDWixhQUFhO1lBQ2IsWUFBWTtTQUNiO3dGQVFVLGNBQWMsbUJBSlYscUJBQXFCLEVBQUUsaUJBQWlCLGFBUnJELFlBQVk7UUFDWixZQUFZO1FBQ1osYUFBYTtRQUNiLFlBQVksYUFHWixpQkFBaUI7dUZBTVIsY0FBYztjQWQxQixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixhQUFhO29CQUNiLFlBQVk7aUJBQ2I7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGlCQUFpQjtpQkFDbEI7Z0JBQ0QsWUFBWSxFQUFFLENBQUMscUJBQXFCLEVBQUUsaUJBQWlCLENBQUM7Z0JBQ3hELGVBQWUsRUFBRSxDQUFDLHFCQUFxQixDQUFDO2dCQUN4QyxTQUFTLEVBQUUsRUFBRTthQUNkIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7UmV1c2VUYWJNZW51Q29tcG9uZW50fSBmcm9tIFwiLi9yZXVzZS10YWItbWVudS5jb21wb25lbnRcIjtcbmltcG9ydCB7UmV1c2VUYWJDb21wb25lbnR9IGZyb20gXCIuL3JldXNlLXRhYi5jb21wb25lbnRcIjtcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQge1JvdXRlck1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtOek1lbnVNb2R1bGV9IGZyb20gXCJuZy16b3Jyby1hbnRkL21lbnVcIjtcbmltcG9ydCB7UHJvVGFic01vZHVsZX0gZnJvbSBcIi4uL3RhYnMvdGFicy5tb2R1bGVcIjtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgUHJvVGFic01vZHVsZSxcbiAgICBOek1lbnVNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFJldXNlVGFiQ29tcG9uZW50XG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1JldXNlVGFiTWVudUNvbXBvbmVudCwgUmV1c2VUYWJDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtSZXVzZVRhYk1lbnVDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFJldXNlVGFiTW9kdWxlIHtcbn1cbiJdfQ==