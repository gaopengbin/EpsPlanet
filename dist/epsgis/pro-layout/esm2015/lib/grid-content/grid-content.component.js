import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = function (a0) { return { "wide": a0 }; };
const _c1 = ["*"];
export class GridContentComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
GridContentComponent.ɵfac = function GridContentComponent_Factory(t) { return new (t || GridContentComponent)(); };
GridContentComponent.ɵcmp = i0.ɵɵdefineComponent({ type: GridContentComponent, selectors: [["pro-grid-content"]], inputs: { contentWidth: "contentWidth" }, exportAs: ["proGridContent"], ngContentSelectors: _c1, decls: 2, vars: 3, consts: [[1, "ant-pro-grid-content", 3, "ngClass"]], template: function GridContentComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(1, _c0, ctx.contentWidth === "Fixed"));
    } }, directives: [i1.NgClass], styles: [".ant-pro-grid-content{width:100%;height:100%;min-height:100%;transition:.3s}.ant-pro-grid-content.wide{max-width:1200px;margin:0 auto}"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GridContentComponent, [{
        type: Component,
        args: [{
                selector: 'pro-grid-content',
                templateUrl: 'grid-content.component.html',
                styleUrls: ['grid-content.component.less'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                exportAs: 'proGridContent',
                preserveWhitespaces: false
            }]
    }], function () { return []; }, { contentWidth: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1jb250ZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Byby1sYXlvdXQvc3JjL2xpYi9ncmlkLWNvbnRlbnQvZ3JpZC1jb250ZW50LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Byby1sYXlvdXQvc3JjL2xpYi9ncmlkLWNvbnRlbnQvZ3JpZC1jb250ZW50LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDOzs7OztBQVluRyxNQUFNLE9BQU8sb0JBQW9CO0lBSS9CO0lBQ0EsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDOzt3RkFSVSxvQkFBb0I7eURBQXBCLG9CQUFvQjs7UUNaakMsOEJBQ29EO1FBQ2xELGtCQUF5QjtRQUMzQixpQkFBTTs7UUFGRCxrRkFBOEM7O3VGRFd0QyxvQkFBb0I7Y0FUaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFdBQVcsRUFBRSw2QkFBNkI7Z0JBQzFDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2dCQUMxQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLG1CQUFtQixFQUFFLEtBQUs7YUFDM0I7c0NBR1UsWUFBWTtrQkFBcEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb250ZW50V2lkdGh9IGZyb20gJy4uL2NvcmUvZGVmYXVsdC1zZXR0aW5ncyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Byby1ncmlkLWNvbnRlbnQnLFxuICB0ZW1wbGF0ZVVybDogJ2dyaWQtY29udGVudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydncmlkLWNvbnRlbnQuY29tcG9uZW50Lmxlc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGV4cG9ydEFzOiAncHJvR3JpZENvbnRlbnQnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBHcmlkQ29udGVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgY29udGVudFdpZHRoOiBDb250ZW50V2lkdGg7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImFudC1wcm8tZ3JpZC1jb250ZW50XCJcbiAgICAgW25nQ2xhc3NdPVwieyd3aWRlJzogY29udGVudFdpZHRoID09PSAnRml4ZWQnfVwiPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbiJdfQ==