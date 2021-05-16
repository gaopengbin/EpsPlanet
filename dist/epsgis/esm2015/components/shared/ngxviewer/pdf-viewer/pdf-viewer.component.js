import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ComponentRegister } from '../../../../decorator/component-register.decorator';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "@angular/common";
const _c0 = ["pdfViewerContainer"];
function PDFViewerComponent_iframe_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "iframe", 3);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("height", ctx_r1.pdfViewHeight);
    i0.ɵɵproperty("src", ctx_r1.pdfUrl, i0.ɵɵsanitizeResourceUrl);
} }
let PDFViewerComponent = class PDFViewerComponent {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
        this.width = 0;
        this.height = 0;
        this.ready = new EventEmitter(false);
        this.pdfViewHeight = "600px";
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.resetViewHeight();
        }, 1000);
    }
    ngOnInit() {
        this.pdfUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.viewerUrl + "?file=" + this.source);
        this.ready.emit("pdf viewer initialize!");
    }
    resetViewHeight() {
        let height = this.getMainWindowHeight();
        if (height > 0) {
            this.pdfViewHeight = height - 5 + "px";
        }
        else {
            this.pdfViewHeight = "600px";
        }
    }
    getMainWindowHeight() {
        let parentNode = this.pdfViewerContainer.nativeElement.parentNode;
        while (parentNode) {
            if (parentNode.className &&
                (parentNode.className === "ssmodal_content" ||
                    parentNode.className === "sspanel_content")) {
                break;
            }
            parentNode = parentNode.parentNode;
        }
        if (parentNode) {
            return parentNode.clientHeight - 30;
        }
        else {
            parentNode = this.pdfViewerContainer.nativeElement.parentNode;
            let contentNode = null;
            while (parentNode) {
                if (parentNode.childNodes && parentNode.childNodes.length > 0) {
                    for (const child of parentNode.childNodes) {
                        if (child.nodeName.toLocaleUpperCase() === "NZ-CONTENT") {
                            contentNode = child;
                            break;
                        }
                    }
                }
                if (contentNode) {
                    break;
                }
                parentNode = parentNode.parentNode;
            }
            if (contentNode) {
                return contentNode.clientHeight;
            }
        }
        return this.height;
    }
};
PDFViewerComponent.ɵfac = function PDFViewerComponent_Factory(t) { return new (t || PDFViewerComponent)(i0.ɵɵdirectiveInject(i1.DomSanitizer)); };
PDFViewerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PDFViewerComponent, selectors: [["pdf-viewer"]], viewQuery: function PDFViewerComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.pdfViewerContainer = _t.first);
    } }, inputs: { width: "width", height: "height", viewerUrl: "viewerUrl", source: "source" }, outputs: { ready: "ready" }, decls: 3, vars: 1, consts: [[1, "pdfViewerContainer"], ["pdfViewerContainer", ""], ["frameborder", "0", 3, "src", "height", 4, "ngIf"], ["frameborder", "0", 3, "src"]], template: function PDFViewerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0, 1);
        i0.ɵɵtemplate(2, PDFViewerComponent_iframe_2_Template, 1, 3, "iframe", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.pdfUrl);
    } }, directives: [i2.NgIf], styles: ["iframe[_ngcontent-%COMP%]{width:100%;height:100%;border:0}"] });
PDFViewerComponent = __decorate([
    ComponentRegister({
        uri: "pdf-viewer",
        path: "components/shared/ngxviewer/pdf-viewer"
    })
], PDFViewerComponent);
export { PDFViewerComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PDFViewerComponent, [{
        type: Component,
        args: [{
                selector: "pdf-viewer",
                templateUrl: "./pdf-viewer.component.html",
                styleUrls: ["./pdf-viewer.component.scss"],
            }]
    }], function () { return [{ type: i1.DomSanitizer }]; }, { pdfViewerContainer: [{
            type: ViewChild,
            args: ["pdfViewerContainer"]
        }], width: [{
            type: Input
        }], height: [{
            type: Input
        }], viewerUrl: [{
            type: Input
        }], source: [{
            type: Input
        }], ready: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXZpZXdlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9lcHNnaXMvY29tcG9uZW50cy9zaGFyZWQvbmd4dmlld2VyL3BkZi12aWV3ZXIvcGRmLXZpZXdlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9lcHNnaXMvY29tcG9uZW50cy9zaGFyZWQvbmd4dmlld2VyL3BkZi12aWV3ZXIvcGRmLXZpZXdlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBRXZHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDOzs7Ozs7SUNEdEYsNEJBQThGOzs7SUFBeEMsOENBQThCO0lBQTdELDZEQUFjOztJRFd6QixrQkFBa0IsU0FBbEIsa0JBQWtCO0lBWTdCLFlBQW1CLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBVHBDLFVBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUdsQixVQUFLLEdBQXNCLElBQUksWUFBWSxDQUFNLEtBQUssQ0FBQyxDQUFDO1FBR2xFLGtCQUFhLEdBQVcsT0FBTyxDQUFDO0lBRWdCLENBQUM7SUFFakQsZUFBZTtRQUNiLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsOEJBQThCLENBQzVELElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQ3hDLENBQUM7UUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDeEMsSUFBSSxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2QsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUN4QzthQUFNO1lBQ0wsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUM7U0FDOUI7SUFDSCxDQUFDO0lBR0QsbUJBQW1CO1FBQ2pCLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDO1FBQ2xFLE9BQU8sVUFBVSxFQUFFO1lBQ2pCLElBQUksVUFBVSxDQUFDLFNBQVM7Z0JBQ3RCLENBQUMsVUFBVSxDQUFDLFNBQVMsS0FBSyxpQkFBaUI7b0JBQ3pDLFVBQVUsQ0FBQyxTQUFTLEtBQUssaUJBQWlCLENBQUMsRUFDN0M7Z0JBQ0EsTUFBTTthQUNQO1lBQ0QsVUFBVSxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUM7U0FDcEM7UUFDRCxJQUFJLFVBQVUsRUFBRTtZQUNkLE9BQU8sVUFBVSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7U0FDckM7YUFBTTtZQUNMLFVBQVUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQztZQUM5RCxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDdkIsT0FBTyxVQUFVLEVBQUU7Z0JBQ2pCLElBQUksVUFBVSxDQUFDLFVBQVUsSUFBSSxVQUFVLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQzdELEtBQUssTUFBTSxLQUFLLElBQUksVUFBVSxDQUFDLFVBQVUsRUFBRTt3QkFDekMsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLEtBQUssWUFBWSxFQUFFOzRCQUN2RCxXQUFXLEdBQUcsS0FBSyxDQUFDOzRCQUNwQixNQUFNO3lCQUNQO3FCQUNGO2lCQUNGO2dCQUNELElBQUksV0FBVyxFQUFFO29CQUNmLE1BQU07aUJBQ1A7Z0JBQ0QsVUFBVSxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUM7YUFDcEM7WUFDRCxJQUFJLFdBQVcsRUFBRTtnQkFDZixPQUFPLFdBQVcsQ0FBQyxZQUFZLENBQUM7YUFDakM7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0NBQ0YsQ0FBQTtvRkF6RVksa0JBQWtCO3VEQUFsQixrQkFBa0I7Ozs7OztRQ1ovQixpQ0FBb0Q7UUFDbkQseUVBQThGO1FBQy9GLGlCQUFNOztRQURJLGVBQVk7UUFBWixpQ0FBWTs7QURXVCxrQkFBa0I7SUFUOUIsaUJBQWlCLENBQUM7UUFDakIsR0FBRyxFQUFFLFlBQVk7UUFDakIsSUFBSSxFQUFFLHdDQUF3QztLQUMvQyxDQUFDO0dBTVcsa0JBQWtCLENBeUU5QjtTQXpFWSxrQkFBa0I7dUZBQWxCLGtCQUFrQjtjQUw5QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFdBQVcsRUFBRSw2QkFBNkI7Z0JBQzFDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2FBQzNDOytEQUVrQyxrQkFBa0I7a0JBQWxELFNBQVM7bUJBQUMsb0JBQW9CO1lBRXRCLEtBQUs7a0JBQWIsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDSSxLQUFLO2tCQUFkLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RvbVNhbml0aXplciwgU2FmZVJlc291cmNlVXJsfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xuaW1wb3J0IHsgQ29tcG9uZW50UmVnaXN0ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9kZWNvcmF0b3IvY29tcG9uZW50LXJlZ2lzdGVyLmRlY29yYXRvcic7XG5AQ29tcG9uZW50UmVnaXN0ZXIoe1xuICB1cmk6IFwicGRmLXZpZXdlclwiLFxuICBwYXRoOiBcImNvbXBvbmVudHMvc2hhcmVkL25neHZpZXdlci9wZGYtdmlld2VyXCJcbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwicGRmLXZpZXdlclwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL3BkZi12aWV3ZXIuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL3BkZi12aWV3ZXIuY29tcG9uZW50LnNjc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIFBERlZpZXdlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBWaWV3Q2hpbGQoXCJwZGZWaWV3ZXJDb250YWluZXJcIikgcGRmVmlld2VyQ29udGFpbmVyOiBhbnk7XG5cbiAgQElucHV0KCkgd2lkdGg6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgpIGhlaWdodDogbnVtYmVyID0gMDtcbiAgQElucHV0KCkgdmlld2VyVXJsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNvdXJjZTogc3RyaW5nO1xuICBAT3V0cHV0KCkgcmVhZHk6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KGZhbHNlKTtcblxuICBwZGZVcmw6IFNhZmVSZXNvdXJjZVVybDtcbiAgcGRmVmlld0hlaWdodDogc3RyaW5nID0gXCI2MDBweFwiO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkb21TYW5pdGl6ZXI6IERvbVNhbml0aXplcikge31cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnJlc2V0Vmlld0hlaWdodCgpO1xuICAgIH0sIDEwMDApO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5wZGZVcmwgPSB0aGlzLmRvbVNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwoXG4gICAgICB0aGlzLnZpZXdlclVybCArIFwiP2ZpbGU9XCIgKyB0aGlzLnNvdXJjZVxuICAgICk7XG4gICAgdGhpcy5yZWFkeS5lbWl0KFwicGRmIHZpZXdlciBpbml0aWFsaXplIVwiKTtcbiAgfVxuXG4gIHJlc2V0Vmlld0hlaWdodCgpIHtcbiAgICBsZXQgaGVpZ2h0ID0gdGhpcy5nZXRNYWluV2luZG93SGVpZ2h0KCk7XG4gICAgaWYgKGhlaWdodCA+IDApIHtcbiAgICAgIHRoaXMucGRmVmlld0hlaWdodCA9IGhlaWdodCAtIDUgKyBcInB4XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGRmVmlld0hlaWdodCA9IFwiNjAwcHhcIjtcbiAgICB9XG4gIH1cblxuICAvKirnqpfkvZPpq5jluqYgKi9cbiAgZ2V0TWFpbldpbmRvd0hlaWdodCgpOiBudW1iZXIge1xuICAgIGxldCBwYXJlbnROb2RlID0gdGhpcy5wZGZWaWV3ZXJDb250YWluZXIubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlO1xuICAgIHdoaWxlIChwYXJlbnROb2RlKSB7XG4gICAgICBpZiAocGFyZW50Tm9kZS5jbGFzc05hbWUgJiZcbiAgICAgICAgKHBhcmVudE5vZGUuY2xhc3NOYW1lID09PSBcInNzbW9kYWxfY29udGVudFwiIHx8XG4gICAgICAgICAgcGFyZW50Tm9kZS5jbGFzc05hbWUgPT09IFwic3NwYW5lbF9jb250ZW50XCIpXG4gICAgICApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBwYXJlbnROb2RlID0gcGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIH1cbiAgICBpZiAocGFyZW50Tm9kZSkge1xuICAgICAgcmV0dXJuIHBhcmVudE5vZGUuY2xpZW50SGVpZ2h0IC0gMzA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmVudE5vZGUgPSB0aGlzLnBkZlZpZXdlckNvbnRhaW5lci5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICBsZXQgY29udGVudE5vZGUgPSBudWxsO1xuICAgICAgd2hpbGUgKHBhcmVudE5vZGUpIHtcbiAgICAgICAgaWYgKHBhcmVudE5vZGUuY2hpbGROb2RlcyAmJiBwYXJlbnROb2RlLmNoaWxkTm9kZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgcGFyZW50Tm9kZS5jaGlsZE5vZGVzKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGQubm9kZU5hbWUudG9Mb2NhbGVVcHBlckNhc2UoKSA9PT0gXCJOWi1DT05URU5UXCIpIHtcbiAgICAgICAgICAgICAgY29udGVudE5vZGUgPSBjaGlsZDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjb250ZW50Tm9kZSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHBhcmVudE5vZGUgPSBwYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICB9XG4gICAgICBpZiAoY29udGVudE5vZGUpIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnROb2RlLmNsaWVudEhlaWdodDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaGVpZ2h0O1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwicGRmVmlld2VyQ29udGFpbmVyXCIgI3BkZlZpZXdlckNvbnRhaW5lcj5cblx0PGlmcmFtZSAqbmdJZj1cInBkZlVybFwiIFtzcmNdPVwicGRmVXJsXCIgZnJhbWVib3JkZXI9XCIwXCIgW3N0eWxlLmhlaWdodF09XCJwZGZWaWV3SGVpZ2h0XCI+PC9pZnJhbWU+XG48L2Rpdj5cbiJdfQ==