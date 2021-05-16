import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { EpsGISNgxViewerComponent } from "./e-ngx-viewer.component";
import { PDFViewerComponent } from "./pdf-viewer/pdf-viewer.component";
import { ImageViewerComponent } from "./image-viewer/image-viewer.component";
import { VideoViewerComponent } from './video-viewer/video-viewer.component';
import { EpsGISJsonViewerComponent } from '../jsonviewer/json-viewer.component';
import * as i0 from "@angular/core";
export class EpsGISNgxViewerModule {
}
EpsGISNgxViewerModule.ɵmod = i0.ɵɵdefineNgModule({ type: EpsGISNgxViewerModule });
EpsGISNgxViewerModule.ɵinj = i0.ɵɵdefineInjector({ factory: function EpsGISNgxViewerModule_Factory(t) { return new (t || EpsGISNgxViewerModule)(); }, imports: [[
            CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(EpsGISNgxViewerModule, { declarations: [EpsGISNgxViewerComponent,
        PDFViewerComponent,
        ImageViewerComponent,
        VideoViewerComponent,
        EpsGISJsonViewerComponent], imports: [CommonModule], exports: [EpsGISNgxViewerComponent,
        PDFViewerComponent,
        ImageViewerComponent,
        VideoViewerComponent,
        EpsGISJsonViewerComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EpsGISNgxViewerModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                entryComponents: [
                    EpsGISNgxViewerComponent,
                    PDFViewerComponent,
                    ImageViewerComponent,
                    VideoViewerComponent,
                    EpsGISJsonViewerComponent
                ],
                declarations: [
                    EpsGISNgxViewerComponent,
                    PDFViewerComponent,
                    ImageViewerComponent,
                    VideoViewerComponent,
                    EpsGISJsonViewerComponent
                ],
                exports: [
                    EpsGISNgxViewerComponent,
                    PDFViewerComponent,
                    ImageViewerComponent,
                    VideoViewerComponent,
                    EpsGISJsonViewerComponent
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZS1uZ3gtdmlld2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Vwc2dpcy9jb21wb25lbnRzL3NoYXJlZC9uZ3h2aWV3ZXIvZS1uZ3gtdmlld2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQzs7QUE0QmhGLE1BQU0sT0FBTyxxQkFBcUI7O3lEQUFyQixxQkFBcUI7eUhBQXJCLHFCQUFxQixrQkF6QnJCO1lBQ0wsWUFBWTtTQUNmO3dGQXVCUSxxQkFBcUIsbUJBZDFCLHdCQUF3QjtRQUN4QixrQkFBa0I7UUFDbEIsb0JBQW9CO1FBQ3BCLG9CQUFvQjtRQUNwQix5QkFBeUIsYUFkekIsWUFBWSxhQWlCWix3QkFBd0I7UUFDeEIsa0JBQWtCO1FBQ2xCLG9CQUFvQjtRQUNwQixvQkFBb0I7UUFDcEIseUJBQXlCO3VGQUdwQixxQkFBcUI7Y0ExQmpDLFFBQVE7ZUFBQztnQkFDTixPQUFPLEVBQUU7b0JBQ0wsWUFBWTtpQkFDZjtnQkFDRCxlQUFlLEVBQUM7b0JBQ1osd0JBQXdCO29CQUN4QixrQkFBa0I7b0JBQ2xCLG9CQUFvQjtvQkFDcEIsb0JBQW9CO29CQUNwQix5QkFBeUI7aUJBQzVCO2dCQUNELFlBQVksRUFBRTtvQkFDVix3QkFBd0I7b0JBQ3hCLGtCQUFrQjtvQkFDbEIsb0JBQW9CO29CQUNwQixvQkFBb0I7b0JBQ3BCLHlCQUF5QjtpQkFDNUI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLHdCQUF3QjtvQkFDeEIsa0JBQWtCO29CQUNsQixvQkFBb0I7b0JBQ3BCLG9CQUFvQjtvQkFDcEIseUJBQXlCO2lCQUM1QjthQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IGxhaXhpYW5ncmFuIG9uIDIwMTYvMTEvMjkuXG4gKiBob21lcGFnZe+8mmh0dHA6Ly93d3cubGFpeGlhbmdyYW4uY24uXG4gKi9cblxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVwc0dJU05neFZpZXdlckNvbXBvbmVudCB9IGZyb20gXCIuL2Utbmd4LXZpZXdlci5jb21wb25lbnRcIjtcbmltcG9ydCB7IFBERlZpZXdlckNvbXBvbmVudCB9IGZyb20gXCIuL3BkZi12aWV3ZXIvcGRmLXZpZXdlci5jb21wb25lbnRcIjtcbmltcG9ydCB7IEltYWdlVmlld2VyQ29tcG9uZW50IH0gZnJvbSBcIi4vaW1hZ2Utdmlld2VyL2ltYWdlLXZpZXdlci5jb21wb25lbnRcIjtcbmltcG9ydCB7IFZpZGVvVmlld2VyQ29tcG9uZW50IH0gZnJvbSAnLi92aWRlby12aWV3ZXIvdmlkZW8tdmlld2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFcHNHSVNKc29uVmlld2VyQ29tcG9uZW50IH0gZnJvbSAnLi4vanNvbnZpZXdlci9qc29uLXZpZXdlci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlXG4gICAgXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6W1xuICAgICAgICBFcHNHSVNOZ3hWaWV3ZXJDb21wb25lbnQsXG4gICAgICAgIFBERlZpZXdlckNvbXBvbmVudCxcbiAgICAgICAgSW1hZ2VWaWV3ZXJDb21wb25lbnQsXG4gICAgICAgIFZpZGVvVmlld2VyQ29tcG9uZW50LFxuICAgICAgICBFcHNHSVNKc29uVmlld2VyQ29tcG9uZW50XG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgRXBzR0lTTmd4Vmlld2VyQ29tcG9uZW50LFxuICAgICAgICBQREZWaWV3ZXJDb21wb25lbnQsXG4gICAgICAgIEltYWdlVmlld2VyQ29tcG9uZW50LFxuICAgICAgICBWaWRlb1ZpZXdlckNvbXBvbmVudCxcbiAgICAgICAgRXBzR0lTSnNvblZpZXdlckNvbXBvbmVudFxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBFcHNHSVNOZ3hWaWV3ZXJDb21wb25lbnQsXG4gICAgICAgIFBERlZpZXdlckNvbXBvbmVudCxcbiAgICAgICAgSW1hZ2VWaWV3ZXJDb21wb25lbnQsXG4gICAgICAgIFZpZGVvVmlld2VyQ29tcG9uZW50LFxuICAgICAgICBFcHNHSVNKc29uVmlld2VyQ29tcG9uZW50XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBFcHNHSVNOZ3hWaWV3ZXJNb2R1bGUge1xufSJdfQ==