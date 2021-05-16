import { Renderer2, ChangeDetectorRef } from '@angular/core';
import { BaseMobilePanelComponent } from '../base-mobile-panel';
import * as i0 from "@angular/core";
export declare class MobileDrawerRightPanelComponent extends BaseMobilePanelComponent {
    _render: Renderer2;
    cdr: ChangeDetectorRef;
    _sspanelOverlayClickHandler: Function;
    constructor(_render: Renderer2, cdr: ChangeDetectorRef);
    ngOnDestroy(): void;
    setOptions(options: any): void;
    _setMobilePosition(): void;
    static ɵfac: i0.ɵɵFactoryDef<MobileDrawerRightPanelComponent, [{ optional: true; }, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MobileDrawerRightPanelComponent, "epsgis-mobile-drawer-right-panel", never, {}, {}, never, never>;
}
//# sourceMappingURL=drawer-panel-right.component.d.ts.map