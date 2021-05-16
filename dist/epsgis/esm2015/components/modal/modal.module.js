import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SSModalComponent } from './modal.component';
import { SsModalFooterComponent } from './modal-footer.component';
import { ModalContainerComponent } from './modal-container/modal-container.component';
import { SsModalFooterDirective } from '../components';
import { SsModalTitleBarButtonComponent } from './modal-titlebar-button.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class EpsGisModalModule {
}
EpsGisModalModule.ɵmod = i0.ɵɵdefineNgModule({ type: EpsGisModalModule });
EpsGisModalModule.ɵinj = i0.ɵɵdefineInjector({ factory: function EpsGisModalModule_Factory(t) { return new (t || EpsGisModalModule)(); }, imports: [[
            CommonModule,
            NzIconModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(EpsGisModalModule, { declarations: [ModalContainerComponent, SSModalComponent, SsModalFooterComponent, SsModalFooterDirective, SsModalTitleBarButtonComponent], imports: [CommonModule,
        NzIconModule], exports: [SSModalComponent, SsModalFooterComponent, SsModalTitleBarButtonComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EpsGisModalModule, [{
        type: NgModule,
        args: [{
                declarations: [ModalContainerComponent, SSModalComponent, SsModalFooterComponent, SsModalFooterDirective, SsModalTitleBarButtonComponent],
                exports: [SSModalComponent, SsModalFooterComponent, SsModalTitleBarButtonComponent],
                entryComponents: [ModalContainerComponent, SSModalComponent],
                imports: [
                    CommonModule,
                    NzIconModule
                ]
            }]
    }], null, null); })();
i0.ɵɵsetComponentScope(ModalContainerComponent, [i1.NgStyle, i1.NgIf, SsModalTitleBarButtonComponent, SsModalFooterComponent], []);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZXBzZ2lzL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNuRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7OztBQWFsRCxNQUFNLE9BQU8saUJBQWlCOztxREFBakIsaUJBQWlCO2lIQUFqQixpQkFBaUIsa0JBTG5CO1lBQ1AsWUFBWTtZQUNaLFlBQVk7U0FDYjt3RkFFVSxpQkFBaUIsbUJBUmIsdUJBQXVCLEVBQUUsZ0JBQWdCLEVBQUUsc0JBQXNCLEVBQUMsc0JBQXNCLEVBQUMsOEJBQThCLGFBSXBJLFlBQVk7UUFDWixZQUFZLGFBSkosZ0JBQWdCLEVBQUUsc0JBQXNCLEVBQUMsOEJBQThCO3VGQU90RSxpQkFBaUI7Y0FUN0IsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLHVCQUF1QixFQUFFLGdCQUFnQixFQUFFLHNCQUFzQixFQUFDLHNCQUFzQixFQUFDLDhCQUE4QixDQUFDO2dCQUN2SSxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxzQkFBc0IsRUFBQyw4QkFBOEIsQ0FBQztnQkFDbEYsZUFBZSxFQUFFLENBQUMsdUJBQXVCLEVBQUUsZ0JBQWdCLENBQUM7Z0JBQzVELE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFlBQVk7aUJBQ2I7YUFDRjs7dUJBUGdCLHVCQUF1Qix3QkFBa0UsOEJBQThCLEVBQTVFLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU1NNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IFNzTW9kYWxGb290ZXJDb21wb25lbnQgfSBmcm9tICcuL21vZGFsLWZvb3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9kYWxDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL21vZGFsLWNvbnRhaW5lci9tb2RhbC1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFNzTW9kYWxGb290ZXJEaXJlY3RpdmUgfSBmcm9tICcuLi9jb21wb25lbnRzJztcbmltcG9ydCB7IFNzTW9kYWxUaXRsZUJhckJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwtdGl0bGViYXItYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOekljb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xuXG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTW9kYWxDb250YWluZXJDb21wb25lbnQsIFNTTW9kYWxDb21wb25lbnQsIFNzTW9kYWxGb290ZXJDb21wb25lbnQsU3NNb2RhbEZvb3RlckRpcmVjdGl2ZSxTc01vZGFsVGl0bGVCYXJCdXR0b25Db21wb25lbnRdLFxuICBleHBvcnRzOiBbU1NNb2RhbENvbXBvbmVudCwgU3NNb2RhbEZvb3RlckNvbXBvbmVudCxTc01vZGFsVGl0bGVCYXJCdXR0b25Db21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtNb2RhbENvbnRhaW5lckNvbXBvbmVudCwgU1NNb2RhbENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTnpJY29uTW9kdWxlXG4gIF1cbn0pICAgXG5leHBvcnQgY2xhc3MgRXBzR2lzTW9kYWxNb2R1bGUgeyB9XG4iXX0=