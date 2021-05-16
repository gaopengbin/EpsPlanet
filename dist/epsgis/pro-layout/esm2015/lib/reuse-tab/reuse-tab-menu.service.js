import { ConnectionPositionPair } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ElementRef, Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { ReuseTabMenuComponent } from './reuse-tab-menu.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
export class ReuseTabMenuService {
    constructor(overlay) {
        this.overlay = overlay;
        this.show = new Subject();
        this.close = new Subject();
    }
    remove() {
        if (!this.ref)
            return;
        this.ref.detach();
        this.ref.dispose();
        this.ref = null;
    }
    open(context) {
        this.remove();
        const { event, item } = context;
        const fakeElement = new ElementRef({
            getBoundingClientRect: () => ({
                bottom: event.clientY,
                height: 0,
                left: event.clientX,
                right: event.clientX,
                top: event.clientY,
                width: 0,
            }),
        });
        const positions = [
            new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
        ];
        const positionStrategy = this.overlay.position().flexibleConnectedTo(fakeElement).withPositions(positions);
        this.ref = this.overlay.create({
            positionStrategy,
            panelClass: 'ant-pro-reuse-tab-cm',
            scrollStrategy: this.overlay.scrollStrategies.close(),
        });
        const comp = this.ref.attach(new ComponentPortal(ReuseTabMenuComponent));
        const instance = comp.instance;
        instance.item = Object.assign({}, item);
        instance.event = event;
        const sub$ = new Subscription();
        sub$.add(instance.close.subscribe((res) => {
            this.close.next(res);
            this.remove();
        }));
        comp.onDestroy(() => sub$.unsubscribe());
    }
}
ReuseTabMenuService.ɵfac = function ReuseTabMenuService_Factory(t) { return new (t || ReuseTabMenuService)(i0.ɵɵinject(i1.Overlay)); };
ReuseTabMenuService.ɵprov = i0.ɵɵdefineInjectable({ token: ReuseTabMenuService, factory: ReuseTabMenuService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ReuseTabMenuService, [{
        type: Injectable
    }], function () { return [{ type: i1.Overlay }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLW1lbnUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Byby1sYXlvdXQvc3JjL2xpYi9yZXVzZS10YWIvcmV1c2UtdGFiLW1lbnUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsc0JBQXNCLEVBQXNCLE1BQU0sc0JBQXNCLENBQUM7QUFDakYsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBQyxVQUFVLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBQyxPQUFPLEVBQUUsWUFBWSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDRCQUE0QixDQUFDOzs7QUFPakUsTUFBTSxPQUFPLG1CQUFtQjtJQU05QixZQUFvQixPQUFnQjtRQUFoQixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBSHBDLFNBQUksR0FBK0IsSUFBSSxPQUFPLEVBQXFCLENBQUM7UUFDcEUsVUFBSyxHQUFvQyxJQUFJLE9BQU8sRUFBMEIsQ0FBQztJQUcvRSxDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRztZQUFFLE9BQU87UUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxJQUFJLENBQUMsT0FBMEI7UUFDN0IsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2QsTUFBTSxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUMsR0FBRyxPQUFPLENBQUM7UUFDOUIsTUFBTSxXQUFXLEdBQUcsSUFBSSxVQUFVLENBQUM7WUFDakMscUJBQXFCLEVBQUUsR0FBZSxFQUFFLENBQUMsQ0FBQztnQkFDeEMsTUFBTSxFQUFFLEtBQUssQ0FBQyxPQUFPO2dCQUNyQixNQUFNLEVBQUUsQ0FBQztnQkFDVCxJQUFJLEVBQUUsS0FBSyxDQUFDLE9BQU87Z0JBQ25CLEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTztnQkFDcEIsR0FBRyxFQUFFLEtBQUssQ0FBQyxPQUFPO2dCQUNsQixLQUFLLEVBQUUsQ0FBQzthQUNULENBQUM7U0FDSCxDQUFDLENBQUM7UUFDSCxNQUFNLFNBQVMsR0FBRztZQUNoQixJQUFJLHNCQUFzQixDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFDLEVBQUUsRUFBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUMsQ0FBQztZQUN2RyxJQUFJLHNCQUFzQixDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFDLEVBQUUsRUFBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUMsQ0FBQztTQUN4RyxDQUFDO1FBQ0YsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzRyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQzdCLGdCQUFnQjtZQUNoQixVQUFVLEVBQUUsc0JBQXNCO1lBQ2xDLGNBQWMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRTtTQUN0RCxDQUFDLENBQUM7UUFDSCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7UUFDekUsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUMvQixRQUFRLENBQUMsSUFBSSxxQkFBTyxJQUFJLENBQUMsQ0FBQztRQUMxQixRQUFRLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUV2QixNQUFNLElBQUksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxHQUFHLENBQ04sUUFBUSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUEyQixFQUFFLEVBQUU7WUFDdkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUNILENBQUM7UUFDRixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7O3NGQXBEVSxtQkFBbUI7MkRBQW5CLG1CQUFtQixXQUFuQixtQkFBbUI7dUZBQW5CLG1CQUFtQjtjQUQvQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb25uZWN0aW9uUG9zaXRpb25QYWlyLCBPdmVybGF5LCBPdmVybGF5UmVmfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQge0NvbXBvbmVudFBvcnRhbH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQge0VsZW1lbnRSZWYsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTdWJqZWN0LCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtSZXVzZVRhYk1lbnVDb21wb25lbnR9IGZyb20gJy4vcmV1c2UtdGFiLW1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7XG4gIFJldXNlQ29udGV4dENsb3NlRXZlbnQsXG4gIFJldXNlQ29udGV4dEV2ZW50XG59IGZyb20gJy4vcmV1c2UtdGFiLmludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSZXVzZVRhYk1lbnVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSByZWY6IE92ZXJsYXlSZWYgfCBudWxsO1xuXG4gIHNob3c6IFN1YmplY3Q8UmV1c2VDb250ZXh0RXZlbnQ+ID0gbmV3IFN1YmplY3Q8UmV1c2VDb250ZXh0RXZlbnQ+KCk7XG4gIGNsb3NlOiBTdWJqZWN0PFJldXNlQ29udGV4dENsb3NlRXZlbnQ+ID0gbmV3IFN1YmplY3Q8UmV1c2VDb250ZXh0Q2xvc2VFdmVudD4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXkpIHtcbiAgfVxuXG4gIHJlbW92ZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucmVmKSByZXR1cm47XG4gICAgdGhpcy5yZWYuZGV0YWNoKCk7XG4gICAgdGhpcy5yZWYuZGlzcG9zZSgpO1xuICAgIHRoaXMucmVmID0gbnVsbDtcbiAgfVxuXG4gIG9wZW4oY29udGV4dDogUmV1c2VDb250ZXh0RXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLnJlbW92ZSgpO1xuICAgIGNvbnN0IHtldmVudCwgaXRlbX0gPSBjb250ZXh0O1xuICAgIGNvbnN0IGZha2VFbGVtZW50ID0gbmV3IEVsZW1lbnRSZWYoe1xuICAgICAgZ2V0Qm91bmRpbmdDbGllbnRSZWN0OiAoKTogQ2xpZW50UmVjdCA9PiAoe1xuICAgICAgICBib3R0b206IGV2ZW50LmNsaWVudFksXG4gICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgbGVmdDogZXZlbnQuY2xpZW50WCxcbiAgICAgICAgcmlnaHQ6IGV2ZW50LmNsaWVudFgsXG4gICAgICAgIHRvcDogZXZlbnQuY2xpZW50WSxcbiAgICAgICAgd2lkdGg6IDAsXG4gICAgICB9KSxcbiAgICB9KTtcbiAgICBjb25zdCBwb3NpdGlvbnMgPSBbXG4gICAgICBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcih7b3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ2JvdHRvbSd9LCB7b3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAndG9wJ30pLFxuICAgICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoe29yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICd0b3AnfSwge292ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ2JvdHRvbSd9KSxcbiAgICBdO1xuICAgIGNvbnN0IHBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXkucG9zaXRpb24oKS5mbGV4aWJsZUNvbm5lY3RlZFRvKGZha2VFbGVtZW50KS53aXRoUG9zaXRpb25zKHBvc2l0aW9ucyk7XG4gICAgdGhpcy5yZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKHtcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3ksXG4gICAgICBwYW5lbENsYXNzOiAnYW50LXByby1yZXVzZS10YWItY20nLFxuICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmNsb3NlKCksXG4gICAgfSk7XG4gICAgY29uc3QgY29tcCA9IHRoaXMucmVmLmF0dGFjaChuZXcgQ29tcG9uZW50UG9ydGFsKFJldXNlVGFiTWVudUNvbXBvbmVudCkpO1xuICAgIGNvbnN0IGluc3RhbmNlID0gY29tcC5pbnN0YW5jZTtcbiAgICBpbnN0YW5jZS5pdGVtID0gey4uLml0ZW19O1xuICAgIGluc3RhbmNlLmV2ZW50ID0gZXZlbnQ7XG5cbiAgICBjb25zdCBzdWIkID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuICAgIHN1YiQuYWRkKFxuICAgICAgaW5zdGFuY2UuY2xvc2Uuc3Vic2NyaWJlKChyZXM6IFJldXNlQ29udGV4dENsb3NlRXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy5jbG9zZS5uZXh0KHJlcyk7XG4gICAgICAgIHRoaXMucmVtb3ZlKCk7XG4gICAgICB9KSxcbiAgICApO1xuICAgIGNvbXAub25EZXN0cm95KCgpID0+IHN1YiQudW5zdWJzY3JpYmUoKSk7XG4gIH1cbn1cbiJdfQ==