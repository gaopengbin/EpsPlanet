import { Directive, Optional } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./modal-ref";
export class SsModalFooterDirective {
    constructor(ssModalRef, templateRef) {
        this.ssModalRef = ssModalRef;
        this.templateRef = templateRef;
        if (this.ssModalRef) {
            this.ssModalRef.updateConfig({
                footer: this.templateRef
            });
        }
    }
}
SsModalFooterDirective.ɵfac = function SsModalFooterDirective_Factory(t) { return new (t || SsModalFooterDirective)(i0.ɵɵdirectiveInject(i1.SsModalRef, 8), i0.ɵɵdirectiveInject(i0.TemplateRef)); };
SsModalFooterDirective.ɵdir = i0.ɵɵdefineDirective({ type: SsModalFooterDirective, selectors: [["", "SsModalFooter", ""]], exportAs: ["SsModalFooter"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SsModalFooterDirective, [{
        type: Directive,
        args: [{
                selector: '[SsModalFooter]',
                exportAs: 'SsModalFooter'
            }]
    }], function () { return [{ type: i1.SsModalRef, decorators: [{
                type: Optional
            }] }, { type: i0.TemplateRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtZm9vdGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Vwc2dpcy9jb21wb25lbnRzL21vZGFsL21vZGFsLWZvb3Rlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQWUsTUFBTSxlQUFlLENBQUM7OztBQU9qRSxNQUFNLE9BQU8sc0JBQXNCO0lBQ2pDLFlBQWdDLFVBQXNCLEVBQVMsV0FBNEI7UUFBM0QsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFpQjtRQUN6RixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUM7Z0JBQzNCLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVzthQUN6QixDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7OzRGQVBVLHNCQUFzQjsyREFBdEIsc0JBQXNCO3VGQUF0QixzQkFBc0I7Y0FKbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRSxlQUFlO2FBQzFCOztzQkFFYyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBEaXJlY3RpdmUsIE9wdGlvbmFsLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3NNb2RhbFJlZiB9IGZyb20gJy4vbW9kYWwtcmVmJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW1NzTW9kYWxGb290ZXJdJyxcbiAgZXhwb3J0QXM6ICdTc01vZGFsRm9vdGVyJ1xufSlcbmV4cG9ydCBjbGFzcyBTc01vZGFsRm9vdGVyRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHJpdmF0ZSBzc01vZGFsUmVmOiBTc01vZGFsUmVmLCBwdWJsaWMgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPHt9Pikge1xuICAgIGlmICh0aGlzLnNzTW9kYWxSZWYpIHtcbiAgICAgIHRoaXMuc3NNb2RhbFJlZi51cGRhdGVDb25maWcoe1xuICAgICAgICBmb290ZXI6IHRoaXMudGVtcGxhdGVSZWZcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19