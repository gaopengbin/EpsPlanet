/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { A11yModule } from '@angular/cdk/a11y';
import { ObserversModule } from '@angular/cdk/observers';
import { PlatformModule } from '@angular/cdk/platform';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ProTabAddButtonComponent } from './tab-add-button.component';
import { ProTabBodyComponent } from './tab-body.component';
import { ProTabCloseButtonComponent } from './tab-close-button.component';
import { ProTabLinkDirective, ProTabLinkTemplateDirective } from './tab-link.directive';
import { ProTabNavBarComponent } from './tab-nav-bar.component';
import { ProTabNavItemDirective } from './tab-nav-item.directive';
import { ProTabNavOperationComponent } from './tab-nav-operation.component';
import { ProTabScrollListDirective } from './tab-scroll-list.directive';
import { ProTabComponent } from './tab.component';
import { ProTabDirective } from './tab.directive';
import { ProTabsInkBarDirective } from './tabs-ink-bar.directive';
import { ProTabSetComponent } from './tabset.component';
import * as i0 from "@angular/core";
const DIRECTIVES = [
    ProTabSetComponent,
    ProTabComponent,
    ProTabNavBarComponent,
    ProTabNavItemDirective,
    ProTabsInkBarDirective,
    ProTabScrollListDirective,
    ProTabNavOperationComponent,
    ProTabAddButtonComponent,
    ProTabCloseButtonComponent,
    ProTabDirective,
    ProTabBodyComponent,
    ProTabLinkDirective,
    ProTabLinkTemplateDirective
];
export class ProTabsModule {
}
ProTabsModule.ɵmod = i0.ɵɵdefineNgModule({ type: ProTabsModule });
ProTabsModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ProTabsModule_Factory(t) { return new (t || ProTabsModule)(); }, imports: [[
            CommonModule,
            ObserversModule,
            NzIconModule,
            PlatformModule,
            A11yModule,
            ScrollingModule,
            NzDropDownModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ProTabsModule, { declarations: [ProTabSetComponent,
        ProTabComponent,
        ProTabNavBarComponent,
        ProTabNavItemDirective,
        ProTabsInkBarDirective,
        ProTabScrollListDirective,
        ProTabNavOperationComponent,
        ProTabAddButtonComponent,
        ProTabCloseButtonComponent,
        ProTabDirective,
        ProTabBodyComponent,
        ProTabLinkDirective,
        ProTabLinkTemplateDirective], imports: [CommonModule,
        ObserversModule,
        NzIconModule,
        PlatformModule,
        A11yModule,
        ScrollingModule,
        NzDropDownModule], exports: [ProTabSetComponent,
        ProTabComponent,
        ProTabNavBarComponent,
        ProTabNavItemDirective,
        ProTabsInkBarDirective,
        ProTabScrollListDirective,
        ProTabNavOperationComponent,
        ProTabAddButtonComponent,
        ProTabCloseButtonComponent,
        ProTabDirective,
        ProTabBodyComponent,
        ProTabLinkDirective,
        ProTabLinkTemplateDirective] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProTabsModule, [{
        type: NgModule,
        args: [{
                declarations: [DIRECTIVES],
                exports: [DIRECTIVES],
                imports: [
                    CommonModule,
                    ObserversModule,
                    NzIconModule,
                    PlatformModule,
                    A11yModule,
                    ScrollingModule,
                    NzDropDownModule
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wcm8tbGF5b3V0L3NyYy9saWIvdGFicy90YWJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBR0c7QUFDSCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzVFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBRXhELE1BQU0sVUFBVSxHQUFHO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDJCQUEyQjtDQUM1QixDQUFDO0FBZUYsTUFBTSxPQUFPLGFBQWE7O2lEQUFiLGFBQWE7eUdBQWIsYUFBYSxrQkFWZjtZQUNQLFlBQVk7WUFDWixlQUFlO1lBQ2YsWUFBWTtZQUNaLGNBQWM7WUFDZCxVQUFVO1lBQ1YsZUFBZTtZQUNmLGdCQUFnQjtTQUNqQjt3RkFFVSxhQUFhLG1CQTVCeEIsa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixxQkFBcUI7UUFDckIsc0JBQXNCO1FBQ3RCLHNCQUFzQjtRQUN0Qix5QkFBeUI7UUFDekIsMkJBQTJCO1FBQzNCLHdCQUF3QjtRQUN4QiwwQkFBMEI7UUFDMUIsZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsMkJBQTJCLGFBT3pCLFlBQVk7UUFDWixlQUFlO1FBQ2YsWUFBWTtRQUNaLGNBQWM7UUFDZCxVQUFVO1FBQ1YsZUFBZTtRQUNmLGdCQUFnQixhQXpCbEIsa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixxQkFBcUI7UUFDckIsc0JBQXNCO1FBQ3RCLHNCQUFzQjtRQUN0Qix5QkFBeUI7UUFDekIsMkJBQTJCO1FBQzNCLHdCQUF3QjtRQUN4QiwwQkFBMEI7UUFDMUIsZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsMkJBQTJCO3VGQWdCaEIsYUFBYTtjQWJ6QixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUMxQixPQUFPLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ3JCLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGVBQWU7b0JBQ2YsWUFBWTtvQkFDWixjQUFjO29CQUNkLFVBQVU7b0JBQ1YsZUFBZTtvQkFDZixnQkFBZ0I7aUJBQ2pCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuaW1wb3J0IHsgQTExeU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7IE9ic2VydmVyc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vYnNlcnZlcnMnO1xuaW1wb3J0IHsgUGxhdGZvcm1Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgU2Nyb2xsaW5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpEcm9wRG93bk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvZHJvcGRvd24nO1xuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcblxuaW1wb3J0IHsgUHJvVGFiQWRkQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi90YWItYWRkLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvVGFiQm9keUNvbXBvbmVudCB9IGZyb20gJy4vdGFiLWJvZHkuY29tcG9uZW50JztcbmltcG9ydCB7IFByb1RhYkNsb3NlQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi90YWItY2xvc2UtYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9UYWJMaW5rRGlyZWN0aXZlLCBQcm9UYWJMaW5rVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3RhYi1saW5rLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBQcm9UYWJOYXZCYXJDb21wb25lbnQgfSBmcm9tICcuL3RhYi1uYXYtYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9UYWJOYXZJdGVtRGlyZWN0aXZlIH0gZnJvbSAnLi90YWItbmF2LWl0ZW0uZGlyZWN0aXZlJztcbmltcG9ydCB7IFByb1RhYk5hdk9wZXJhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vdGFiLW5hdi1vcGVyYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IFByb1RhYlNjcm9sbExpc3REaXJlY3RpdmUgfSBmcm9tICcuL3RhYi1zY3JvbGwtbGlzdC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUHJvVGFiQ29tcG9uZW50IH0gZnJvbSAnLi90YWIuY29tcG9uZW50JztcbmltcG9ydCB7IFByb1RhYkRpcmVjdGl2ZSB9IGZyb20gJy4vdGFiLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBQcm9UYWJzSW5rQmFyRGlyZWN0aXZlIH0gZnJvbSAnLi90YWJzLWluay1iYXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IFByb1RhYlNldENvbXBvbmVudCB9IGZyb20gJy4vdGFic2V0LmNvbXBvbmVudCc7XG5cbmNvbnN0IERJUkVDVElWRVMgPSBbXG4gIFByb1RhYlNldENvbXBvbmVudCxcbiAgUHJvVGFiQ29tcG9uZW50LFxuICBQcm9UYWJOYXZCYXJDb21wb25lbnQsXG4gIFByb1RhYk5hdkl0ZW1EaXJlY3RpdmUsXG4gIFByb1RhYnNJbmtCYXJEaXJlY3RpdmUsXG4gIFByb1RhYlNjcm9sbExpc3REaXJlY3RpdmUsXG4gIFByb1RhYk5hdk9wZXJhdGlvbkNvbXBvbmVudCxcbiAgUHJvVGFiQWRkQnV0dG9uQ29tcG9uZW50LFxuICBQcm9UYWJDbG9zZUJ1dHRvbkNvbXBvbmVudCxcbiAgUHJvVGFiRGlyZWN0aXZlLFxuICBQcm9UYWJCb2R5Q29tcG9uZW50LFxuICBQcm9UYWJMaW5rRGlyZWN0aXZlLFxuICBQcm9UYWJMaW5rVGVtcGxhdGVEaXJlY3RpdmVcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0RJUkVDVElWRVNdLFxuICBleHBvcnRzOiBbRElSRUNUSVZFU10sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgT2JzZXJ2ZXJzTW9kdWxlLFxuICAgIE56SWNvbk1vZHVsZSxcbiAgICBQbGF0Zm9ybU1vZHVsZSxcbiAgICBBMTF5TW9kdWxlLFxuICAgIFNjcm9sbGluZ01vZHVsZSxcbiAgICBOekRyb3BEb3duTW9kdWxlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgUHJvVGFic01vZHVsZSB7fVxuIl19