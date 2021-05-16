import { Optional, Directive } from '@angular/core';
import { BasePanelComponent } from '../base-panel/base-panel.component';
import * as _ from 'lodash';
import * as i0 from "@angular/core";
export class BaseMobilePanelComponent extends BasePanelComponent {
    constructor(_render, cdr) {
        super(_render, cdr);
        this._render = _render;
        this.cdr = cdr;
        this.zIndex = 9999;
        this.moveTopOnActive = false;
    }
    ngOnInit() {
        super.ngOnInit();
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    setOptions(options) {
        if (this.widgetConfig && this.widgetConfig.mobile) {
            _.merge(options, this.widgetConfig.mobile);
        }
        super.setOptions(options);
    }
    getWidthHeight() {
        let { width, height } = this.widgetConfig.position;
        if (this.widgetConfig.mobile
            && this.widgetConfig.mobile.position) {
            width = this.widgetConfig.mobile.position.width;
            height = this.widgetConfig.mobile.position.height;
        }
        let _w = this.commonService.getPxNumber(width), _h = this.commonService.getPxNumber(height);
        if (typeof _w === "number") {
            if (_w <= 0 || _w > innerWidth) {
                _w = "100%";
            }
        }
        if (typeof _h === "number") {
            if (_h <= 0 || _w > innerHeight) {
                _h = "100%";
            }
        }
        return { width: _w, height: _h };
    }
}
BaseMobilePanelComponent.ɵfac = function BaseMobilePanelComponent_Factory(t) { return new (t || BaseMobilePanelComponent)(i0.ɵɵdirectiveInject(i0.Renderer2, 8), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef, 8)); };
BaseMobilePanelComponent.ɵdir = i0.ɵɵdefineDirective({ type: BaseMobilePanelComponent, features: [i0.ɵɵInheritDefinitionFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseMobilePanelComponent, [{
        type: Directive
    }], function () { return [{ type: i0.Renderer2, decorators: [{
                type: Optional
            }] }, { type: i0.ChangeDetectorRef, decorators: [{
                type: Optional
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1tb2JpbGUtcGFuZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9lcHNnaXMvY29tcG9uZW50cy9tb2JpbGUvYmFzZS1tb2JpbGUtcGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBZ0MsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3hFLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDOztBQU01QixNQUFNLE9BQU8sd0JBQXlCLFNBQVEsa0JBQWtCO0lBSTVELFlBQStCLE9BQWtCLEVBQW9CLEdBQXFCO1FBQ3RGLEtBQUssQ0FBQyxPQUFPLEVBQUMsR0FBRyxDQUFDLENBQUM7UUFEUSxZQUFPLEdBQVAsT0FBTyxDQUFXO1FBQW9CLFFBQUcsR0FBSCxHQUFHLENBQWtCO1FBRjFGLFdBQU0sR0FBVyxJQUFJLENBQUM7UUFJbEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDakMsQ0FBQztJQUlELFFBQVE7UUFDSixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUlELGVBQWU7UUFDWCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUlELFdBQVc7UUFDUCxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUNELFVBQVUsQ0FBQyxPQUFPO1FBQ2QsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFO1lBQy9DLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDOUM7UUFDRCxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDUyxjQUFjO1FBQ3BCLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUM7UUFDbkQsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU07ZUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO1lBRXRDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ2hELE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1NBQ3JEO1FBQ0QsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQzFDLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoRCxJQUFJLE9BQU8sRUFBRSxLQUFLLFFBQVEsRUFBRTtZQUN4QixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLFVBQVUsRUFBRTtnQkFDNUIsRUFBRSxHQUFHLE1BQU0sQ0FBQTthQUNkO1NBQ0o7UUFDRCxJQUFJLE9BQU8sRUFBRSxLQUFLLFFBQVEsRUFBRTtZQUN4QixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLFdBQVcsRUFBRTtnQkFDN0IsRUFBRSxHQUFHLE1BQU0sQ0FBQTthQUNkO1NBQ0o7UUFDRCxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLENBQUM7SUFDckMsQ0FBQzs7Z0dBckRRLHdCQUF3Qjs2REFBeEIsd0JBQXdCO3VGQUF4Qix3QkFBd0I7Y0FEcEMsU0FBUzs7c0JBS08sUUFBUTs7c0JBQThCLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPcHRpb25hbCwgUmVuZGVyZXIyLCBDaGFuZ2VEZXRlY3RvclJlZiwgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlUGFuZWxDb21wb25lbnQgfSBmcm9tICcuLi9iYXNlLXBhbmVsL2Jhc2UtcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuLyoqXG4gKiBcbiAqL1xuQERpcmVjdGl2ZSgpXG5leHBvcnQgY2xhc3MgQmFzZU1vYmlsZVBhbmVsQ29tcG9uZW50IGV4dGVuZHMgQmFzZVBhbmVsQ29tcG9uZW50IHtcblxuICAgIHpJbmRleDogbnVtYmVyID0gOTk5OTtcblxuICAgIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHB1YmxpYyBfcmVuZGVyOiBSZW5kZXJlcjIsQE9wdGlvbmFsKCkgcHVibGljIGNkcjpDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgICAgICBzdXBlcihfcmVuZGVyLGNkcik7XG4gICAgICAgIHRoaXMubW92ZVRvcE9uQWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFxuICAgICAqL1xuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBzdXBlci5uZ09uSW5pdCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKi9cbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLm5nQWZ0ZXJWaWV3SW5pdCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKi9cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgc3VwZXIubmdPbkRlc3Ryb3koKTtcbiAgICB9XG4gICAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICAgIGlmICh0aGlzLndpZGdldENvbmZpZyAmJiB0aGlzLndpZGdldENvbmZpZy5tb2JpbGUpIHtcbiAgICAgICAgICAgIF8ubWVyZ2Uob3B0aW9ucywgdGhpcy53aWRnZXRDb25maWcubW9iaWxlKTtcbiAgICAgICAgfVxuICAgICAgICBzdXBlci5zZXRPcHRpb25zKG9wdGlvbnMpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0V2lkdGhIZWlnaHQoKSB7XG4gICAgICAgIGxldCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMud2lkZ2V0Q29uZmlnLnBvc2l0aW9uO1xuICAgICAgICBpZiAodGhpcy53aWRnZXRDb25maWcubW9iaWxlXG4gICAgICAgICAgICAmJiB0aGlzLndpZGdldENvbmZpZy5tb2JpbGUucG9zaXRpb24pIHtcbiAgICAgICAgICAgIC8v5pqC5pSv5oyB6auY5a695Y+v6K6+572uXG4gICAgICAgICAgICB3aWR0aCA9IHRoaXMud2lkZ2V0Q29uZmlnLm1vYmlsZS5wb3NpdGlvbi53aWR0aDtcbiAgICAgICAgICAgIGhlaWdodCA9IHRoaXMud2lkZ2V0Q29uZmlnLm1vYmlsZS5wb3NpdGlvbi5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IF93ID0gdGhpcy5jb21tb25TZXJ2aWNlLmdldFB4TnVtYmVyKHdpZHRoKSxcbiAgICAgICAgICAgIF9oID0gdGhpcy5jb21tb25TZXJ2aWNlLmdldFB4TnVtYmVyKGhlaWdodCk7XG4gICAgICAgIGlmICh0eXBlb2YgX3cgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIGlmIChfdyA8PSAwIHx8IF93ID4gaW5uZXJXaWR0aCkge1xuICAgICAgICAgICAgICAgIF93ID0gXCIxMDAlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIF9oID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICBpZiAoX2ggPD0gMCB8fCBfdyA+IGlubmVySGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgX2ggPSBcIjEwMCVcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHdpZHRoOiBfdywgaGVpZ2h0OiBfaCB9O1xuICAgIH1cbn1cbiJdfQ==