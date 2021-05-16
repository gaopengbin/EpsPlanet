import { Renderer2, ChangeDetectorRef } from '@angular/core';
import { BaseMobilePanelComponent } from '../base-mobile-panel';
import * as i0 from "@angular/core";
export declare class MobileDrawerPanelComponent extends BaseMobilePanelComponent {
    _render: Renderer2;
    cdr: ChangeDetectorRef;
    _sspanelOverlayClickHandler: Function;
    constructor(_render: Renderer2, cdr: ChangeDetectorRef);
    ngOnDestroy(): void;
    setOptions(options: any): void;
    _setMobilePosition(): void;
    static ɵfac: i0.ɵɵFactoryDef<MobileDrawerPanelComponent, [{ optional: true; }, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MobileDrawerPanelComponent, "epsgis-mobile-drawer-panel", never, {}, {}, never, never>;
}
//# sourceMappingURL=drawer-panel.component.d.ts.map