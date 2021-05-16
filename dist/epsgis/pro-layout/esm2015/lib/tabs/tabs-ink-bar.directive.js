/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, Inject, Input, Optional } from '@angular/core';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import { reqAnimFrame } from "ng-zorro-antd/core/polyfill";
import * as i0 from "@angular/core";
export class ProTabsInkBarDirective {
    constructor(elementRef, ngZone, animationMode) {
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.animationMode = animationMode;
        this.position = 'horizontal';
        this.animated = true;
    }
    get _animated() {
        return this.animationMode !== 'NoopAnimations' && this.animated;
    }
    alignToElement(element) {
        this.ngZone.runOutsideAngular(() => {
            reqAnimFrame(() => this.setStyles(element));
        });
    }
    setStyles(element) {
        const inkBar = this.elementRef.nativeElement;
        if (this.position === 'horizontal') {
            inkBar.style.top = '';
            inkBar.style.height = '';
            inkBar.style.left = this.getLeftPosition(element);
            inkBar.style.width = this.getElementWidth(element);
        }
        else {
            inkBar.style.left = '';
            inkBar.style.width = '';
            inkBar.style.top = this.getTopPosition(element);
            inkBar.style.height = this.getElementHeight(element);
        }
    }
    getLeftPosition(element) {
        return element ? (element.offsetLeft || 0) + 'px' : '0';
    }
    getElementWidth(element) {
        return element ? (element.offsetWidth || 0) + 'px' : '0';
    }
    getTopPosition(element) {
        return element ? (element.offsetTop || 0) + 'px' : '0';
    }
    getElementHeight(element) {
        return element ? (element.offsetHeight || 0) + 'px' : '0';
    }
}
ProTabsInkBarDirective.ɵfac = function ProTabsInkBarDirective_Factory(t) { return new (t || ProTabsInkBarDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8)); };
ProTabsInkBarDirective.ɵdir = i0.ɵɵdefineDirective({ type: ProTabsInkBarDirective, selectors: [["pro-tabs-ink-bar"], ["", "pro-tabs-ink-bar", ""]], hostAttrs: [1, "ant-pro-tabs-ink-bar"], hostVars: 2, hostBindings: function ProTabsInkBarDirective_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("ant-pro-tabs-ink-bar-animated", ctx._animated);
    } }, inputs: { position: "position", animated: "animated" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProTabsInkBarDirective, [{
        type: Directive,
        args: [{
                selector: 'pro-tabs-ink-bar, [pro-tabs-ink-bar]',
                host: {
                    class: 'ant-pro-tabs-ink-bar',
                    '[class.ant-pro-tabs-ink-bar-animated]': '_animated'
                }
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.NgZone }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [ANIMATION_MODULE_TYPE]
            }] }]; }, { position: [{
            type: Input
        }], animated: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy1pbmstYmFyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Byby1sYXlvdXQvc3JjL2xpYi90YWJzL3RhYnMtaW5rLWJhci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHO0FBRUgsT0FBTyxFQUFFLFNBQVMsRUFBYyxNQUFNLEVBQUUsS0FBSyxFQUFVLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUk3RSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sNkJBQTZCLENBQUM7O0FBU3pELE1BQU0sT0FBTyxzQkFBc0I7SUFRakMsWUFDVSxVQUFtQyxFQUNuQyxNQUFjLEVBQzRCLGFBQXNCO1FBRmhFLGVBQVUsR0FBVixVQUFVLENBQXlCO1FBQ25DLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDNEIsa0JBQWEsR0FBYixhQUFhLENBQVM7UUFWakUsYUFBUSxHQUFzQixZQUFZLENBQUM7UUFDM0MsYUFBUSxHQUFHLElBQUksQ0FBQztJQVV0QixDQUFDO0lBUkosSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsYUFBYSxLQUFLLGdCQUFnQixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDbEUsQ0FBQztJQVFELGNBQWMsQ0FBQyxPQUFvQjtRQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRTtZQUNqQyxZQUFZLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzlDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFNBQVMsQ0FBQyxPQUFvQjtRQUM1QixNQUFNLE1BQU0sR0FBZ0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDMUQsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLFlBQVksRUFBRTtZQUNsQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7WUFDdEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbEQsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNwRDthQUFNO1lBQ0wsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ3ZCLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUN4QixNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2hELE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN0RDtJQUNILENBQUM7SUFFRCxlQUFlLENBQUMsT0FBb0I7UUFDbEMsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUMxRCxDQUFDO0lBRUQsZUFBZSxDQUFDLE9BQW9CO1FBQ2xDLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDM0QsQ0FBQztJQUVELGNBQWMsQ0FBQyxPQUFvQjtRQUNqQyxPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQ3pELENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxPQUFvQjtRQUNuQyxPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQzVELENBQUM7OzRGQWpEVSxzQkFBc0IsNkZBV1gscUJBQXFCOzJEQVhoQyxzQkFBc0I7Ozt1RkFBdEIsc0JBQXNCO2NBUGxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsc0NBQXNDO2dCQUNoRCxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLHNCQUFzQjtvQkFDN0IsdUNBQXVDLEVBQUUsV0FBVztpQkFDckQ7YUFDRjs7c0JBWUksUUFBUTs7c0JBQUksTUFBTTt1QkFBQyxxQkFBcUI7d0JBVmxDLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbmplY3QsIElucHV0LCBOZ1pvbmUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBTklNQVRJT05fTU9EVUxFX1RZUEUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xuXG5cbmltcG9ydCB7IE56VGFiUG9zaXRpb25Nb2RlIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7cmVxQW5pbUZyYW1lfSBmcm9tIFwibmctem9ycm8tYW50ZC9jb3JlL3BvbHlmaWxsXCI7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ3Byby10YWJzLWluay1iYXIsIFtwcm8tdGFicy1pbmstYmFyXScsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ2FudC1wcm8tdGFicy1pbmstYmFyJyxcbiAgICAnW2NsYXNzLmFudC1wcm8tdGFicy1pbmstYmFyLWFuaW1hdGVkXSc6ICdfYW5pbWF0ZWQnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgUHJvVGFic0lua0JhckRpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIHBvc2l0aW9uOiBOelRhYlBvc2l0aW9uTW9kZSA9ICdob3Jpem9udGFsJztcbiAgQElucHV0KCkgYW5pbWF0ZWQgPSB0cnVlO1xuXG4gIGdldCBfYW5pbWF0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYW5pbWF0aW9uTW9kZSAhPT0gJ05vb3BBbmltYXRpb25zJyAmJiB0aGlzLmFuaW1hdGVkO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQU5JTUFUSU9OX01PRFVMRV9UWVBFKSBwdWJsaWMgYW5pbWF0aW9uTW9kZT86IHN0cmluZ1xuICApIHt9XG5cbiAgYWxpZ25Ub0VsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICByZXFBbmltRnJhbWUoKCkgPT4gdGhpcy5zZXRTdHlsZXMoZWxlbWVudCkpO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0U3R5bGVzKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgaW5rQmFyOiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIGlmICh0aGlzLnBvc2l0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIGlua0Jhci5zdHlsZS50b3AgPSAnJztcbiAgICAgIGlua0Jhci5zdHlsZS5oZWlnaHQgPSAnJztcbiAgICAgIGlua0Jhci5zdHlsZS5sZWZ0ID0gdGhpcy5nZXRMZWZ0UG9zaXRpb24oZWxlbWVudCk7XG4gICAgICBpbmtCYXIuc3R5bGUud2lkdGggPSB0aGlzLmdldEVsZW1lbnRXaWR0aChlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5rQmFyLnN0eWxlLmxlZnQgPSAnJztcbiAgICAgIGlua0Jhci5zdHlsZS53aWR0aCA9ICcnO1xuICAgICAgaW5rQmFyLnN0eWxlLnRvcCA9IHRoaXMuZ2V0VG9wUG9zaXRpb24oZWxlbWVudCk7XG4gICAgICBpbmtCYXIuc3R5bGUuaGVpZ2h0ID0gdGhpcy5nZXRFbGVtZW50SGVpZ2h0KGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIGdldExlZnRQb3NpdGlvbihlbGVtZW50OiBIVE1MRWxlbWVudCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGVsZW1lbnQgPyAoZWxlbWVudC5vZmZzZXRMZWZ0IHx8IDApICsgJ3B4JyA6ICcwJztcbiAgfVxuXG4gIGdldEVsZW1lbnRXaWR0aChlbGVtZW50OiBIVE1MRWxlbWVudCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGVsZW1lbnQgPyAoZWxlbWVudC5vZmZzZXRXaWR0aCB8fCAwKSArICdweCcgOiAnMCc7XG4gIH1cblxuICBnZXRUb3BQb3NpdGlvbihlbGVtZW50OiBIVE1MRWxlbWVudCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGVsZW1lbnQgPyAoZWxlbWVudC5vZmZzZXRUb3AgfHwgMCkgKyAncHgnIDogJzAnO1xuICB9XG5cbiAgZ2V0RWxlbWVudEhlaWdodChlbGVtZW50OiBIVE1MRWxlbWVudCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGVsZW1lbnQgPyAoZWxlbWVudC5vZmZzZXRIZWlnaHQgfHwgMCkgKyAncHgnIDogJzAnO1xuICB9XG59XG4iXX0=