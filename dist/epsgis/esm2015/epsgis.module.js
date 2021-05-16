import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf, APP_INITIALIZER } from '@angular/core';
import { AppGlobalConfig, AppGlobalConfigToken, AppInitService } from './models/app-config';
import { EpsGisWidgetBaseModule } from './components/widget-base.module';
import { EpsGisDirectivesModule } from './directives/directives.module';
import { EpsGisCompContainerModule } from './components/comp-container/comp-container.module';
import { EpsGisModalModule } from './components/modal/modal.module';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
export class EpsGisModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('EpsGisModule is already loaded. Import it in the AppModule only');
        }
    }
    static forRoot(config) {
        return {
            ngModule: EpsGisModule,
            providers: [
                {
                    provide: AppGlobalConfigToken,
                    useValue: config
                },
                {
                    provide: AppGlobalConfig,
                    useFactory: setGlobalConfig,
                    deps: [AppInitService]
                },
                { provide: APP_INITIALIZER, useFactory: loadGlobalConfig, deps: [AppGlobalConfigToken, AppInitService, HttpClient], multi: true }
            ]
        };
    }
}
EpsGisModule.ɵmod = i0.ɵɵdefineNgModule({ type: EpsGisModule });
EpsGisModule.ɵinj = i0.ɵɵdefineInjector({ factory: function EpsGisModule_Factory(t) { return new (t || EpsGisModule)(i0.ɵɵinject(EpsGisModule, 12)); }, imports: [[
            CommonModule,
            EpsGisWidgetBaseModule,
            EpsGisDirectivesModule,
            EpsGisCompContainerModule,
            EpsGisModalModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(EpsGisModule, { imports: [CommonModule,
        EpsGisWidgetBaseModule,
        EpsGisDirectivesModule,
        EpsGisCompContainerModule,
        EpsGisModalModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EpsGisModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    EpsGisWidgetBaseModule,
                    EpsGisDirectivesModule,
                    EpsGisCompContainerModule,
                    EpsGisModalModule
                ],
                declarations: [],
                exports: []
            }]
    }], function () { return [{ type: EpsGisModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();
export const loadGlobalConfig = (config, service) => {
    return () => service.init(config).loadGlobalConfig();
};
export const setGlobalConfig = (service) => {
    return service.getConfig();
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXBzZ2lzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2plY3RzL2Vwc2dpcy9lcHNnaXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQXVCLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRyxPQUFPLEVBQUUsZUFBZSxFQUFFLG9CQUFvQixFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFpQmxELE1BQU0sT0FBTyxZQUFZO0lBQ3JCLFlBQW9DLFlBQTBCO1FBQzFELElBQUksWUFBWSxFQUFFO1lBQ2QsTUFBTSxJQUFJLEtBQUssQ0FDWCxpRUFBaUUsQ0FBQyxDQUFDO1NBQzFFO0lBQ0wsQ0FBQztJQVNELE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBd0I7UUFDbkMsT0FBTztZQUNILFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRTtnQkFDUDtvQkFDSSxPQUFPLEVBQUUsb0JBQW9CO29CQUM3QixRQUFRLEVBQUUsTUFBTTtpQkFDbkI7Z0JBQ0Q7b0JBQ0ksT0FBTyxFQUFFLGVBQWU7b0JBQ3hCLFVBQVUsRUFBRSxlQUFlO29CQUMzQixJQUFJLEVBQUUsQ0FBQyxjQUFjLENBQUM7aUJBQ3pCO2dCQUNELEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLENBQUMsb0JBQW9CLEVBQUUsY0FBYyxFQUFFLFVBQVUsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7YUFFcEk7U0FDSixDQUFDO0lBQ04sQ0FBQzs7Z0RBaENRLFlBQVk7dUdBQVosWUFBWSxjQUM2QixZQUFZLHFCQVpyRDtZQUNMLFlBQVk7WUFFWixzQkFBc0I7WUFDdEIsc0JBQXNCO1lBQ3RCLHlCQUF5QjtZQUN6QixpQkFBaUI7U0FDcEI7d0ZBSVEsWUFBWSxjQVZqQixZQUFZO1FBRVosc0JBQXNCO1FBQ3RCLHNCQUFzQjtRQUN0Qix5QkFBeUI7UUFDekIsaUJBQWlCO3VGQUtaLFlBQVk7Y0FaeEIsUUFBUTtlQUFDO2dCQUNOLE9BQU8sRUFBRTtvQkFDTCxZQUFZO29CQUVaLHNCQUFzQjtvQkFDdEIsc0JBQXNCO29CQUN0Qix5QkFBeUI7b0JBQ3pCLGlCQUFpQjtpQkFDcEI7Z0JBQ0QsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRSxFQUFFO2FBQ2Q7c0NBRXFELFlBQVk7c0JBQWpELFFBQVE7O3NCQUFJLFFBQVE7O0FBbUNyQyxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLE1BQXVCLEVBQUUsT0FBdUIsRUFBRSxFQUFFO0lBQ2pGLE9BQU8sR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0FBQ3pELENBQUMsQ0FBQztBQUNGLE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FBRyxDQUFDLE9BQXVCLEVBQUUsRUFBRTtJQUN2RCxPQUFPLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUMvQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBBUFBfSU5JVElBTElaRVIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQXBwR2xvYmFsQ29uZmlnLCBBcHBHbG9iYWxDb25maWdUb2tlbiwgQXBwSW5pdFNlcnZpY2UgfSBmcm9tICcuL21vZGVscy9hcHAtY29uZmlnJztcclxuaW1wb3J0IHsgRXBzR2lzV2lkZ2V0QmFzZU1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy93aWRnZXQtYmFzZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBFcHNHaXNEaXJlY3RpdmVzTW9kdWxlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2RpcmVjdGl2ZXMubW9kdWxlJztcclxuaW1wb3J0IHsgRXBzR2lzQ29tcENvbnRhaW5lck1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9jb21wLWNvbnRhaW5lci9jb21wLWNvbnRhaW5lci5tb2R1bGUnO1xyXG5pbXBvcnQgeyBFcHNHaXNNb2RhbE1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9tb2RhbC9tb2RhbC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG4vKipcclxuICogZXBzZ2lz5YWl5Y+jXHJcbiAqL1xyXG4vL0BkeW5hbWljXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgIC8vIEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICAgICAgRXBzR2lzV2lkZ2V0QmFzZU1vZHVsZSxcclxuICAgICAgICBFcHNHaXNEaXJlY3RpdmVzTW9kdWxlLFxyXG4gICAgICAgIEVwc0dpc0NvbXBDb250YWluZXJNb2R1bGUsXHJcbiAgICAgICAgRXBzR2lzTW9kYWxNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtdLFxyXG4gICAgZXhwb3J0czogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIEVwc0dpc01vZHVsZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IEVwc0dpc01vZHVsZSkge1xyXG4gICAgICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgICAgICAgJ0Vwc0dpc01vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGl0IGluIHRoZSBBcHBNb2R1bGUgb25seScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgIEVycm9yIGR1cmluZyB0ZW1wbGF0ZSBjb21waWxlIG9mICdTU0dpc01vZHVsZSdcclxuICBGdW5jdGlvbiBjYWxscyBhcmUgbm90IHN1cHBvcnRlZCBpbiBkZWNvcmF0b3JzIGJ1dCAnY3JlYXRlR2xvYmFsQ29uZmlnJyB3YXMgY2FsbGVkXHJcbiAgICAgKi9cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gY29uZmlnICBcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZvclJvb3QoY29uZmlnPzogQXBwR2xvYmFsQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVyczxFcHNHaXNNb2R1bGU+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuZ01vZHVsZTogRXBzR2lzTW9kdWxlLFxyXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm92aWRlOiBBcHBHbG9iYWxDb25maWdUb2tlbixcclxuICAgICAgICAgICAgICAgICAgICB1c2VWYWx1ZTogY29uZmlnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3ZpZGU6IEFwcEdsb2JhbENvbmZpZyxcclxuICAgICAgICAgICAgICAgICAgICB1c2VGYWN0b3J5OiBzZXRHbG9iYWxDb25maWcsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVwczogW0FwcEluaXRTZXJ2aWNlXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLCB1c2VGYWN0b3J5OiBsb2FkR2xvYmFsQ29uZmlnLCBkZXBzOiBbQXBwR2xvYmFsQ29uZmlnVG9rZW4sIEFwcEluaXRTZXJ2aWNlLCBIdHRwQ2xpZW50XSwgbXVsdGk6IHRydWUgfVxyXG5cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZEdsb2JhbENvbmZpZyA9IChjb25maWc6IEFwcEdsb2JhbENvbmZpZywgc2VydmljZTogQXBwSW5pdFNlcnZpY2UpID0+IHtcclxuICAgIHJldHVybiAoKSA9PiBzZXJ2aWNlLmluaXQoY29uZmlnKS5sb2FkR2xvYmFsQ29uZmlnKCk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBzZXRHbG9iYWxDb25maWcgPSAoc2VydmljZTogQXBwSW5pdFNlcnZpY2UpID0+IHtcclxuICAgIHJldHVybiBzZXJ2aWNlLmdldENvbmZpZygpO1xyXG59OyJdfQ==