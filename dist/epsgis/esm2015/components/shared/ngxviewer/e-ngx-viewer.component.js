import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ComponentRegister } from '../../../decorator/component-register.decorator';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/common";
import * as i3 from "./pdf-viewer/pdf-viewer.component";
import * as i4 from "./image-viewer/image-viewer.component";
import * as i5 from "./video-viewer/video-viewer.component";
function EpsGISNgxViewerComponent_pdf_viewer_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "pdf-viewer", 4);
    i0.ɵɵlistener("ready", function EpsGISNgxViewerComponent_pdf_viewer_1_Template_pdf_viewer_ready_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.viewerReady($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("width", ctx_r0.width)("height", ctx_r0.height)("source", ctx_r0.source)("viewerUrl", ctx_r0.viewerUrl);
} }
function EpsGISNgxViewerComponent_image_viewer_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "image-viewer", 5);
    i0.ɵɵlistener("ready", function EpsGISNgxViewerComponent_image_viewer_2_Template_image_viewer_ready_0_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.viewerReady($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("source", ctx_r1.source)("width", ctx_r1.width)("height", ctx_r1.height)("first", ctx_r1.first);
} }
function EpsGISNgxViewerComponent_video_viewer_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "video-viewer", 6);
    i0.ɵɵlistener("ready", function EpsGISNgxViewerComponent_video_viewer_3_Template_video_viewer_ready_0_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.viewerReady($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("poster", ctx_r2.poster)("source", ctx_r2.source)("width", ctx_r2.width)("videoWidth", ctx_r2.videoWidth)("height", ctx_r2.height);
} }
let EpsGISNgxViewerComponent = class EpsGISNgxViewerComponent {
    constructor(activatedRoute, injector) {
        this.activatedRoute = activatedRoute;
        this.injector = injector;
        this.model = 'pdf';
        this.width = 600;
        this.videoWidth = 400;
        this.height = 800;
        this.poster = '';
        this.viewerUrl = '';
        this.first = 0;
        this.ready = new EventEmitter(false);
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((param) => {
            if (param['model']) {
                this.model = param['model'];
            }
            if (param['source']) {
                this.source = param['source'];
            }
            if (param['width']) {
                this.width = param['width'];
            }
            if (param['width']) {
                this.width = param['width'];
            }
            if (param['videoWidth']) {
                this.videoWidth = param['videoWidth'];
            }
            if (param['height']) {
                this.height = param['height'];
            }
            if (param['poster']) {
                this.poster = param['poster'];
            }
            if (param['viewerUrl']) {
                this.viewerUrl = param['viewerUrl'];
            }
            if (param['first']) {
                this.first = param['first'];
            }
        });
        this.model = this.injector.get("model", this.model);
        this.source = this.injector.get("source", this.source);
        this.width = this.injector.get("width", this.width);
        this.videoWidth = this.injector.get("videoWidth", this.videoWidth);
        this.height = this.injector.get("height", this.height);
        this.poster = this.injector.get("poster", this.poster);
        this.viewerUrl = this.injector.get("viewerUrl", this.viewerUrl);
        this.first = this.injector.get("first", this.first);
    }
    viewerReady($event) {
        this.ready.emit($event);
    }
};
EpsGISNgxViewerComponent.ɵfac = function EpsGISNgxViewerComponent_Factory(t) { return new (t || EpsGISNgxViewerComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i0.Injector)); };
EpsGISNgxViewerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: EpsGISNgxViewerComponent, selectors: [["epsgis-ngx-viewer"]], inputs: { model: "model", width: "width", videoWidth: "videoWidth", height: "height", source: "source", poster: "poster", viewerUrl: "viewerUrl", first: "first" }, outputs: { ready: "ready" }, decls: 4, vars: 3, consts: [[1, "epsgis-ngx-viewer"], [3, "width", "height", "source", "viewerUrl", "ready", 4, "ngIf"], [3, "source", "width", "height", "first", "ready", 4, "ngIf"], [3, "poster", "source", "width", "videoWidth", "height", "ready", 4, "ngIf"], [3, "width", "height", "source", "viewerUrl", "ready"], [3, "source", "width", "height", "first", "ready"], [3, "poster", "source", "width", "videoWidth", "height", "ready"]], template: function EpsGISNgxViewerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, EpsGISNgxViewerComponent_pdf_viewer_1_Template, 1, 4, "pdf-viewer", 1);
        i0.ɵɵtemplate(2, EpsGISNgxViewerComponent_image_viewer_2_Template, 1, 4, "image-viewer", 2);
        i0.ɵɵtemplate(3, EpsGISNgxViewerComponent_video_viewer_3_Template, 1, 5, "video-viewer", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.model == "pdf");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.model == "image");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.model == "video");
    } }, directives: [i2.NgIf, i3.PDFViewerComponent, i4.ImageViewerComponent, i5.VideoViewerComponent], styles: [""] });
EpsGISNgxViewerComponent = __decorate([
    ComponentRegister({
        uri: 'epsgis-ngx-viewer',
        path: "components/shared/ngxviewer"
    })
], EpsGISNgxViewerComponent);
export { EpsGISNgxViewerComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EpsGISNgxViewerComponent, [{
        type: Component,
        args: [{
                selector: 'epsgis-ngx-viewer',
                templateUrl: './e-ngx-viewer.component.html',
                styleUrls: ['./e-ngx-viewer.component.scss']
            }]
    }], function () { return [{ type: i1.ActivatedRoute }, { type: i0.Injector }]; }, { model: [{
            type: Input
        }], width: [{
            type: Input
        }], videoWidth: [{
            type: Input
        }], height: [{
            type: Input
        }], source: [{
            type: Input
        }], poster: [{
            type: Input
        }], viewerUrl: [{
            type: Input
        }], first: [{
            type: Input
        }], ready: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZS1uZ3gtdmlld2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Vwc2dpcy9jb21wb25lbnRzL3NoYXJlZC9uZ3h2aWV3ZXIvZS1uZ3gtdmlld2VyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Vwc2dpcy9jb21wb25lbnRzL3NoYXJlZC9uZ3h2aWV3ZXIvZS1uZ3gtdmlld2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBRXpGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDOzs7Ozs7Ozs7SUNEbkYscUNBQTZJO0lBQTlCLG9OQUE2QjtJQUFDLGlCQUFhOzs7SUFBdkgsb0NBQWUseUJBQUEseUJBQUEsK0JBQUE7Ozs7SUFDbEQsdUNBQXlJO0lBQTlCLHdOQUE2QjtJQUFDLGlCQUFlOzs7SUFBakgsc0NBQWlCLHVCQUFBLHlCQUFBLHVCQUFBOzs7O0lBQ3hELHVDQUFxSztJQUE5Qix3TkFBNkI7SUFBQyxpQkFBZTs7O0lBQTdJLHNDQUFpQix5QkFBQSx1QkFBQSxpQ0FBQSx5QkFBQTs7SURTNUMsd0JBQXdCLFNBQXhCLHdCQUF3QjtJQVlqQyxZQUFvQixjQUE4QixFQUN0QyxRQUFpQjtRQURULG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUN0QyxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBWHBCLFVBQUssR0FBVyxLQUFLLENBQUM7UUFDdEIsVUFBSyxHQUFXLEdBQUcsQ0FBQztRQUNwQixlQUFVLEdBQVcsR0FBRyxDQUFDO1FBQ3pCLFdBQU0sR0FBVyxHQUFHLENBQUM7UUFFckIsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixjQUFTLEdBQVcsRUFBRSxDQUFDO1FBQ3ZCLFVB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QUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVCLENBQUM7Q0FDSixDQUFBO2dHQTdEWSx3QkFBd0I7NkRBQXhCLHdCQUF3QjtRQ1pyQyw4QkFBK0I7UUFDOUIsdUZBQTBKO1FBQzFKLDJGQUF3SjtRQUN4SiwyRkFBb0w7UUFDckwsaUJBQU07O1FBSFEsZUFBb0I7UUFBcEIseUNBQW9CO1FBQ2xCLGVBQXNCO1FBQXRCLDJDQUFzQjtRQUN0QixlQUFzQjtRQUF0QiwyQ0FBc0I7O0FEU3pCLHdCQUF3QjtJQVRwQyxpQkFBaUIsQ0FBQztRQUNqQixHQUFHLEVBQUUsbUJBQW1CO1FBQ3hCLElBQUksRUFBRSw2QkFBNkI7S0FDcEMsQ0FBQztHQU1XLHdCQUF3QixDQTZEcEM7U0E3RFksd0JBQXdCO3VGQUF4Qix3QkFBd0I7Y0FMcEMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFdBQVcsRUFBRSwrQkFBK0I7Z0JBQzVDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2FBQy9DO3dGQUdZLEtBQUs7a0JBQWIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0ksS0FBSztrQkFBZCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENvbXBvbmVudFJlZ2lzdGVyIH0gZnJvbSAnLi4vLi4vLi4vZGVjb3JhdG9yL2NvbXBvbmVudC1yZWdpc3Rlci5kZWNvcmF0b3InO1xuQENvbXBvbmVudFJlZ2lzdGVyKHtcbiAgdXJpOiAnZXBzZ2lzLW5neC12aWV3ZXInLFxuICBwYXRoOiBcImNvbXBvbmVudHMvc2hhcmVkL25neHZpZXdlclwiXG59KVxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdlcHNnaXMtbmd4LXZpZXdlcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Utbmd4LXZpZXdlci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vZS1uZ3gtdmlld2VyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRXBzR0lTTmd4Vmlld2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBJbnB1dCgpIG1vZGVsOiBzdHJpbmcgPSAncGRmJzsgLy8g6KeG5Zu+5qih5byP77yM6buY6K6kcGRm44CC5bCG5a6e546waW1hZ2XkuI52aWRlb+aooeW8j1xuICAgIEBJbnB1dCgpIHdpZHRoOiBudW1iZXIgPSA2MDA7IC8vIOafpeeci+WZqOWuveW6plxuICAgIEBJbnB1dCgpIHZpZGVvV2lkdGg6IG51bWJlciA9IDQwMDsgLy/op4bpopHmkq3mlL7lmajlrr3luqZcbiAgICBASW5wdXQoKSBoZWlnaHQ6IG51bWJlciA9IDgwMDsgLy8g5p+l55yL5Zmo6auY5bqmXG4gICAgQElucHV0KCkgc291cmNlOiBzdHJpbmcgfCBzdHJpbmdbXTsgLy8gcGRm6Lev5b6E44CB5Zu+54mH5paH5Lu26Lev5b6E5pWw57uE5Y+K6KeG6aKR6Lev5b6EXG4gICAgQElucHV0KCkgcG9zdGVyOiBzdHJpbmcgPSAnJzsgLy8g6KeG6aKR6aKE6KeI5Zu+77yI5rW35oql5Zu+54mH77yJ6Lev5b6EXG4gICAgQElucHV0KCkgdmlld2VyVXJsOiBzdHJpbmcgPSAnJzsgLy8gcGRm5p+l55yL5Zmo6Lev5b6EKHBkZmpzL3dlYi92aWV3ZXIuaHRtbClcbiAgICBASW5wdXQoKSBmaXJzdDogbnVtYmVyID0gMDsgLy/nhafniYfpooTop4jpppblvKDkuIvmoIdcbiAgICBAT3V0cHV0KCkgcmVhZHk6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KGZhbHNlKTsgLy8g5p+l55yL5Zmo5Yid5aeL5a6M5oiQ5LqL5Lu2XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSBpbmplY3RvcjpJbmplY3Rvcikge31cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICAvL+i3r+eUseWPguaVsFxuICAgICAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtOiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAocGFyYW1bJ21vZGVsJ10pIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWwgPSBwYXJhbVsnbW9kZWwnXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHBhcmFtWydzb3VyY2UnXSkge1xuICAgICAgICAgICAgdGhpcy5zb3VyY2UgPSBwYXJhbVsnc291cmNlJ107XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChwYXJhbVsnd2lkdGgnXSkge1xuICAgICAgICAgICAgdGhpcy53aWR0aCA9IHBhcmFtWyd3aWR0aCddO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocGFyYW1bJ3dpZHRoJ10pIHtcbiAgICAgICAgICAgIHRoaXMud2lkdGggPSBwYXJhbVsnd2lkdGgnXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHBhcmFtWyd2aWRlb1dpZHRoJ10pIHtcbiAgICAgICAgICAgIHRoaXMudmlkZW9XaWR0aCA9IHBhcmFtWyd2aWRlb1dpZHRoJ107XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChwYXJhbVsnaGVpZ2h0J10pIHtcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gcGFyYW1bJ2hlaWdodCddO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocGFyYW1bJ3Bvc3RlciddKSB7XG4gICAgICAgICAgICB0aGlzLnBvc3RlciA9IHBhcmFtWydwb3N0ZXInXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHBhcmFtWyd2aWV3ZXJVcmwnXSkge1xuICAgICAgICAgICAgdGhpcy52aWV3ZXJVcmwgPSBwYXJhbVsndmlld2VyVXJsJ107XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChwYXJhbVsnZmlyc3QnXSkge1xuICAgICAgICAgICAgdGhpcy5maXJzdCA9IHBhcmFtWydmaXJzdCddO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgICAvL+iOt+WPluWKqOaAgee7hOS7tuWPguaVsFxuICAgICAgICAgdGhpcy5tb2RlbCA9IHRoaXMuaW5qZWN0b3IuZ2V0KFwibW9kZWxcIix0aGlzLm1vZGVsKTtcbiAgICAgICAgIHRoaXMuc291cmNlID0gdGhpcy5pbmplY3Rvci5nZXQoXCJzb3VyY2VcIix0aGlzLnNvdXJjZSk7XG4gICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5pbmplY3Rvci5nZXQoXCJ3aWR0aFwiLHRoaXMud2lkdGgpO1xuICAgICAgICAgdGhpcy52aWRlb1dpZHRoID0gdGhpcy5pbmplY3Rvci5nZXQoXCJ2aWRlb1dpZHRoXCIsdGhpcy52aWRlb1dpZHRoKTtcbiAgICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5pbmplY3Rvci5nZXQoXCJoZWlnaHRcIix0aGlzLmhlaWdodCk7XG4gICAgICAgICB0aGlzLnBvc3RlciA9IHRoaXMuaW5qZWN0b3IuZ2V0KFwicG9zdGVyXCIsdGhpcy5wb3N0ZXIpO1xuICAgICAgICAgdGhpcy52aWV3ZXJVcmwgPSB0aGlzLmluamVjdG9yLmdldChcInZpZXdlclVybFwiLHRoaXMudmlld2VyVXJsKTtcbiAgICAgICAgIHRoaXMuZmlyc3QgPSB0aGlzLmluamVjdG9yLmdldChcImZpcnN0XCIsdGhpcy5maXJzdCk7XG4gICAgfVxuXG4gICAgdmlld2VyUmVhZHkoJGV2ZW50OiBhbnkpIHtcbiAgICAgICAgdGhpcy5yZWFkeS5lbWl0KCRldmVudCk7XG4gICAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImVwc2dpcy1uZ3gtdmlld2VyXCI+XG5cdDxwZGYtdmlld2VyICpuZ0lmPVwibW9kZWwgPT0gJ3BkZidcIiBbd2lkdGhdPVwid2lkdGhcIiBbaGVpZ2h0XT1cImhlaWdodFwiIFtzb3VyY2VdPVwic291cmNlXCIgW3ZpZXdlclVybF09XCJ2aWV3ZXJVcmxcIiAocmVhZHkpPVwidmlld2VyUmVhZHkoJGV2ZW50KVwiPjwvcGRmLXZpZXdlcj5cblx0PGltYWdlLXZpZXdlciAqbmdJZj1cIm1vZGVsID09ICdpbWFnZSdcIiBbc291cmNlXT1cInNvdXJjZVwiIFt3aWR0aF09XCJ3aWR0aFwiIFtoZWlnaHRdPVwiaGVpZ2h0XCIgW2ZpcnN0XT1cImZpcnN0XCIgKHJlYWR5KT1cInZpZXdlclJlYWR5KCRldmVudClcIj48L2ltYWdlLXZpZXdlcj5cblx0PHZpZGVvLXZpZXdlciAqbmdJZj1cIm1vZGVsID09ICd2aWRlbydcIiBbcG9zdGVyXT1cInBvc3RlclwiIFtzb3VyY2VdPVwic291cmNlXCIgW3dpZHRoXT1cIndpZHRoXCIgW3ZpZGVvV2lkdGhdPSd2aWRlb1dpZHRoJyBbaGVpZ2h0XT1cImhlaWdodFwiIChyZWFkeSk9XCJ2aWV3ZXJSZWFkeSgkZXZlbnQpXCI+PC92aWRlby12aWV3ZXI+XG48L2Rpdj5cbiJdfQ==