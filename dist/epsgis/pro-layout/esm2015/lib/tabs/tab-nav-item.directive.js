import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class ProTabNavItemDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.disabled = false;
        this.active = false;
        this.el = elementRef.nativeElement;
        this.parentElement = this.el.parentElement;
    }
    focus() {
        this.el.focus();
    }
    get width() {
        return this.parentElement.offsetWidth;
    }
    get height() {
        return this.parentElement.offsetHeight;
    }
    get left() {
        return this.parentElement.offsetLeft;
    }
    get top() {
        return this.parentElement.offsetTop;
    }
}
ProTabNavItemDirective.ɵfac = function ProTabNavItemDirective_Factory(t) { return new (t || ProTabNavItemDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
ProTabNavItemDirective.ɵdir = i0.ɵɵdefineDirective({ type: ProTabNavItemDirective, selectors: [["", "ProTabNavItem", ""]], inputs: { disabled: "disabled", tab: "tab", active: "active" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProTabNavItemDirective, [{
        type: Directive,
        args: [{
                selector: '[ProTabNavItem]'
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { disabled: [{
            type: Input
        }], tab: [{
            type: Input
        }], active: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLW5hdi1pdGVtLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Byby1sYXlvdXQvc3JjL2xpYi90YWJzL3RhYi1uYXYtaXRlbS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTzdELE1BQU0sT0FBTyxzQkFBc0I7SUFPakMsWUFBbUIsVUFBbUM7UUFBbkMsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7UUFON0MsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixXQUFNLEdBQVksS0FBSyxDQUFDO1FBSy9CLElBQUksQ0FBQyxFQUFFLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYyxDQUFDO0lBQzlDLENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUN4QyxDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztJQUN6QyxDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQztJQUN2QyxDQUFDO0lBRUQsSUFBSSxHQUFHO1FBQ0wsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztJQUN0QyxDQUFDOzs0RkE5QlUsc0JBQXNCOzJEQUF0QixzQkFBc0I7dUZBQXRCLHNCQUFzQjtjQUhsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjthQUM1Qjs2REFFVSxRQUFRO2tCQUFoQixLQUFLO1lBQ0csR0FBRztrQkFBWCxLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgRm9jdXNhYmxlT3B0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQcm9UYWJDb21wb25lbnQgfSBmcm9tICcuL3RhYi5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbUHJvVGFiTmF2SXRlbV0nXG59KVxuZXhwb3J0IGNsYXNzIFByb1RhYk5hdkl0ZW1EaXJlY3RpdmUgaW1wbGVtZW50cyBGb2N1c2FibGVPcHRpb24ge1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSB0YWIhOiBQcm9UYWJDb21wb25lbnQ7XG4gIEBJbnB1dCgpIGFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIGVsITogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgcGFyZW50RWxlbWVudCE6IEhUTUxFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pikge1xuICAgIHRoaXMuZWwgPSBlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5wYXJlbnRFbGVtZW50ID0gdGhpcy5lbC5wYXJlbnRFbGVtZW50ITtcbiAgfVxuXG4gIGZvY3VzKCk6IHZvaWQge1xuICAgIHRoaXMuZWwuZm9jdXMoKTtcbiAgfVxuXG4gIGdldCB3aWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gIH1cblxuICBnZXQgbGVmdCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnBhcmVudEVsZW1lbnQub2Zmc2V0TGVmdDtcbiAgfVxuXG4gIGdldCB0b3AoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnRFbGVtZW50Lm9mZnNldFRvcDtcbiAgfVxufVxuIl19