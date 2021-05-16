import { Renderer2, ChangeDetectorRef } from '@angular/core';
import { BaseMobilePanelComponent } from '../base-mobile-panel';
import * as i0 from "@angular/core";
export declare class MobileActionPanelComponent extends BaseMobilePanelComponent {
    _render: Renderer2;
    cdr: ChangeDetectorRef;
    constructor(_render: Renderer2, cdr: ChangeDetectorRef);
    setOptions(options: any): void;
    _setMobilePosition(): void;
    static ɵfac: i0.ɵɵFactoryDef<MobileActionPanelComponent, [{ optional: true; }, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MobileActionPanelComponent, "epsgis-mobile-action-panel", never, {}, {}, never, never>;
}
//# sourceMappingURL=action-panel.component.d.ts.map