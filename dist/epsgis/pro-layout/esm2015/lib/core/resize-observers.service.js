import { coerceElement } from '@angular/cdk/coercion';
import { Injectable } from '@angular/core';
import ResizeObserver from 'resize-observer-polyfill';
import { Observable, Subject } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * Factory that creates a new ResizeObserver and allows us to stub it out in unit tests.
 */
export class NzResizeObserverFactory {
    create(callback) {
        return typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(callback);
    }
}
NzResizeObserverFactory.ɵfac = function NzResizeObserverFactory_Factory(t) { return new (t || NzResizeObserverFactory)(); };
NzResizeObserverFactory.ɵprov = i0.ɵɵdefineInjectable({ token: NzResizeObserverFactory, factory: NzResizeObserverFactory.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NzResizeObserverFactory, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
/** An injectable service that allows watching elements for changes to their content. */
export class NzResizeObserver {
    constructor(nzResizeObserverFactory) {
        this.nzResizeObserverFactory = nzResizeObserverFactory;
        /** Keeps track of the existing ResizeObservers so they can be reused. */
        this.observedElements = new Map();
    }
    ngOnDestroy() {
        this.observedElements.forEach((_, element) => this.cleanupObserver(element));
    }
    observe(elementOrRef) {
        const element = coerceElement(elementOrRef);
        return new Observable((observer) => {
            const stream = this.observeElement(element);
            const subscription = stream.subscribe(observer);
            return () => {
                subscription.unsubscribe();
                this.unobserveElement(element);
            };
        });
    }
    /**
     * Observes the given element by using the existing ResizeObserver if available, or creating a
     * new one if not.
     */
    observeElement(element) {
        if (!this.observedElements.has(element)) {
            const stream = new Subject();
            const observer = this.nzResizeObserverFactory.create(mutations => stream.next(mutations));
            if (observer) {
                observer.observe(element);
            }
            this.observedElements.set(element, { observer, stream, count: 1 });
        }
        else {
            this.observedElements.get(element).count++;
        }
        return this.observedElements.get(element).stream;
    }
    /**
     * Un-observes the given element and cleans up the underlying ResizeObserver if nobody else is
     * observing this element.
     */
    unobserveElement(element) {
        if (this.observedElements.has(element)) {
            this.observedElements.get(element).count--;
            if (!this.observedElements.get(element).count) {
                this.cleanupObserver(element);
            }
        }
    }
    /** Clean up the underlying ResizeObserver for the specified element. */
    cleanupObserver(element) {
        if (this.observedElements.has(element)) {
            const { observer, stream } = this.observedElements.get(element);
            if (observer) {
                observer.disconnect();
            }
            stream.complete();
            this.observedElements.delete(element);
        }
    }
}
NzResizeObserver.ɵfac = function NzResizeObserver_Factory(t) { return new (t || NzResizeObserver)(i0.ɵɵinject(NzResizeObserverFactory)); };
NzResizeObserver.ɵprov = i0.ɵɵdefineInjectable({ token: NzResizeObserver, factory: NzResizeObserver.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NzResizeObserver, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: NzResizeObserverFactory }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplLW9ic2VydmVycy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcHJvLWxheW91dC9zcmMvbGliL2NvcmUvcmVzaXplLW9ic2VydmVycy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RCxPQUFPLEVBQWMsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sY0FBYyxNQUFNLDBCQUEwQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxVQUFVLEVBQVksT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUVyRDs7R0FFRztBQUVILE1BQU0sT0FBTyx1QkFBdUI7SUFDbEMsTUFBTSxDQUFDLFFBQWdDO1FBQ3JDLE9BQU8sT0FBTyxjQUFjLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7OzhGQUhVLHVCQUF1QjsrREFBdkIsdUJBQXVCLFdBQXZCLHVCQUF1QixtQkFEVixNQUFNO3VGQUNuQix1QkFBdUI7Y0FEbkMsVUFBVTtlQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7QUFPbEMsd0ZBQXdGO0FBRXhGLE1BQU0sT0FBTyxnQkFBZ0I7SUFXM0IsWUFBb0IsdUJBQWdEO1FBQWhELDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFWcEUseUVBQXlFO1FBQ2pFLHFCQUFnQixHQUFHLElBQUksR0FBRyxFQU8vQixDQUFDO0lBRW1FLENBQUM7SUFFeEUsV0FBVztRQUNULElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQUVELE9BQU8sQ0FBQyxZQUEyQztRQUNqRCxNQUFNLE9BQU8sR0FBRyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFNUMsT0FBTyxJQUFJLFVBQVUsQ0FBQyxDQUFDLFFBQXlDLEVBQUUsRUFBRTtZQUNsRSxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzVDLE1BQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFaEQsT0FBTyxHQUFHLEVBQUU7Z0JBQ1YsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUMzQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDakMsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssY0FBYyxDQUFDLE9BQWdCO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3ZDLE1BQU0sTUFBTSxHQUFHLElBQUksT0FBTyxFQUF5QixDQUFDO1lBQ3BELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDMUYsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUMzQjtZQUNELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNwRTthQUFNO1lBQ0wsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUM3QztRQUNELE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUUsQ0FBQyxNQUFNLENBQUM7SUFDcEQsQ0FBQztJQUVEOzs7T0FHRztJQUNLLGdCQUFnQixDQUFDLE9BQWdCO1FBQ3ZDLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBRSxDQUFDLEtBQUssRUFBRTtnQkFDOUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUMvQjtTQUNGO0lBQ0gsQ0FBQztJQUVELHdFQUF3RTtJQUNoRSxlQUFlLENBQUMsT0FBZ0I7UUFDdEMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3RDLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUUsQ0FBQztZQUNqRSxJQUFJLFFBQVEsRUFBRTtnQkFDWixRQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDdkI7WUFDRCxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN2QztJQUNILENBQUM7O2dGQXhFVSxnQkFBZ0IsY0FXa0IsdUJBQXVCO3dEQVh6RCxnQkFBZ0IsV0FBaEIsZ0JBQWdCLG1CQURILE1BQU07dUZBQ25CLGdCQUFnQjtjQUQ1QixVQUFVO2VBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFO3NDQVlhLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvZXJjZUVsZW1lbnQgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHsgRWxlbWVudFJlZiwgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgUmVzaXplT2JzZXJ2ZXIgZnJvbSAncmVzaXplLW9ic2VydmVyLXBvbHlmaWxsJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogRmFjdG9yeSB0aGF0IGNyZWF0ZXMgYSBuZXcgUmVzaXplT2JzZXJ2ZXIgYW5kIGFsbG93cyB1cyB0byBzdHViIGl0IG91dCBpbiB1bml0IHRlc3RzLlxuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIE56UmVzaXplT2JzZXJ2ZXJGYWN0b3J5IHtcbiAgY3JlYXRlKGNhbGxiYWNrOiBSZXNpemVPYnNlcnZlckNhbGxiYWNrKTogUmVzaXplT2JzZXJ2ZXIgfCBudWxsIHtcbiAgICByZXR1cm4gdHlwZW9mIFJlc2l6ZU9ic2VydmVyID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiBuZXcgUmVzaXplT2JzZXJ2ZXIoY2FsbGJhY2spO1xuICB9XG59XG5cbi8qKiBBbiBpbmplY3RhYmxlIHNlcnZpY2UgdGhhdCBhbGxvd3Mgd2F0Y2hpbmcgZWxlbWVudHMgZm9yIGNoYW5nZXMgdG8gdGhlaXIgY29udGVudC4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgTnpSZXNpemVPYnNlcnZlciBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIC8qKiBLZWVwcyB0cmFjayBvZiB0aGUgZXhpc3RpbmcgUmVzaXplT2JzZXJ2ZXJzIHNvIHRoZXkgY2FuIGJlIHJldXNlZC4gKi9cbiAgcHJpdmF0ZSBvYnNlcnZlZEVsZW1lbnRzID0gbmV3IE1hcDxcbiAgICBFbGVtZW50LFxuICAgIHtcbiAgICAgIG9ic2VydmVyOiBSZXNpemVPYnNlcnZlciB8IG51bGw7XG4gICAgICBzdHJlYW06IFN1YmplY3Q8UmVzaXplT2JzZXJ2ZXJFbnRyeVtdPjtcbiAgICAgIGNvdW50OiBudW1iZXI7XG4gICAgfVxuICA+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuelJlc2l6ZU9ic2VydmVyRmFjdG9yeTogTnpSZXNpemVPYnNlcnZlckZhY3RvcnkpIHt9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5vYnNlcnZlZEVsZW1lbnRzLmZvckVhY2goKF8sIGVsZW1lbnQpID0+IHRoaXMuY2xlYW51cE9ic2VydmVyKGVsZW1lbnQpKTtcbiAgfVxuXG4gIG9ic2VydmUoZWxlbWVudE9yUmVmOiBFbGVtZW50IHwgRWxlbWVudFJlZjxFbGVtZW50Pik6IE9ic2VydmFibGU8UmVzaXplT2JzZXJ2ZXJFbnRyeVtdPiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGNvZXJjZUVsZW1lbnQoZWxlbWVudE9yUmVmKTtcblxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IE9ic2VydmVyPFJlc2l6ZU9ic2VydmVyRW50cnlbXT4pID0+IHtcbiAgICAgIGNvbnN0IHN0cmVhbSA9IHRoaXMub2JzZXJ2ZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICBjb25zdCBzdWJzY3JpcHRpb24gPSBzdHJlYW0uc3Vic2NyaWJlKG9ic2VydmVyKTtcblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMudW5vYnNlcnZlRWxlbWVudChlbGVtZW50KTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogT2JzZXJ2ZXMgdGhlIGdpdmVuIGVsZW1lbnQgYnkgdXNpbmcgdGhlIGV4aXN0aW5nIFJlc2l6ZU9ic2VydmVyIGlmIGF2YWlsYWJsZSwgb3IgY3JlYXRpbmcgYVxuICAgKiBuZXcgb25lIGlmIG5vdC5cbiAgICovXG4gIHByaXZhdGUgb2JzZXJ2ZUVsZW1lbnQoZWxlbWVudDogRWxlbWVudCk6IFN1YmplY3Q8UmVzaXplT2JzZXJ2ZXJFbnRyeVtdPiB7XG4gICAgaWYgKCF0aGlzLm9ic2VydmVkRWxlbWVudHMuaGFzKGVsZW1lbnQpKSB7XG4gICAgICBjb25zdCBzdHJlYW0gPSBuZXcgU3ViamVjdDxSZXNpemVPYnNlcnZlckVudHJ5W10+KCk7XG4gICAgICBjb25zdCBvYnNlcnZlciA9IHRoaXMubnpSZXNpemVPYnNlcnZlckZhY3RvcnkuY3JlYXRlKG11dGF0aW9ucyA9PiBzdHJlYW0ubmV4dChtdXRhdGlvbnMpKTtcbiAgICAgIGlmIChvYnNlcnZlcikge1xuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICAgICAgfVxuICAgICAgdGhpcy5vYnNlcnZlZEVsZW1lbnRzLnNldChlbGVtZW50LCB7IG9ic2VydmVyLCBzdHJlYW0sIGNvdW50OiAxIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9ic2VydmVkRWxlbWVudHMuZ2V0KGVsZW1lbnQpIS5jb3VudCsrO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5vYnNlcnZlZEVsZW1lbnRzLmdldChlbGVtZW50KSEuc3RyZWFtO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuLW9ic2VydmVzIHRoZSBnaXZlbiBlbGVtZW50IGFuZCBjbGVhbnMgdXAgdGhlIHVuZGVybHlpbmcgUmVzaXplT2JzZXJ2ZXIgaWYgbm9ib2R5IGVsc2UgaXNcbiAgICogb2JzZXJ2aW5nIHRoaXMgZWxlbWVudC5cbiAgICovXG4gIHByaXZhdGUgdW5vYnNlcnZlRWxlbWVudChlbGVtZW50OiBFbGVtZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMub2JzZXJ2ZWRFbGVtZW50cy5oYXMoZWxlbWVudCkpIHtcbiAgICAgIHRoaXMub2JzZXJ2ZWRFbGVtZW50cy5nZXQoZWxlbWVudCkhLmNvdW50LS07XG4gICAgICBpZiAoIXRoaXMub2JzZXJ2ZWRFbGVtZW50cy5nZXQoZWxlbWVudCkhLmNvdW50KSB7XG4gICAgICAgIHRoaXMuY2xlYW51cE9ic2VydmVyKGVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKiBDbGVhbiB1cCB0aGUgdW5kZXJseWluZyBSZXNpemVPYnNlcnZlciBmb3IgdGhlIHNwZWNpZmllZCBlbGVtZW50LiAqL1xuICBwcml2YXRlIGNsZWFudXBPYnNlcnZlcihlbGVtZW50OiBFbGVtZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMub2JzZXJ2ZWRFbGVtZW50cy5oYXMoZWxlbWVudCkpIHtcbiAgICAgIGNvbnN0IHsgb2JzZXJ2ZXIsIHN0cmVhbSB9ID0gdGhpcy5vYnNlcnZlZEVsZW1lbnRzLmdldChlbGVtZW50KSE7XG4gICAgICBpZiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgfVxuICAgICAgc3RyZWFtLmNvbXBsZXRlKCk7XG4gICAgICB0aGlzLm9ic2VydmVkRWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxufVxuIl19