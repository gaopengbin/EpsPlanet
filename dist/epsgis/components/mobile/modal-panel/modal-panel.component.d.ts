import { Renderer2, ChangeDetectorRef } from '@angular/core';
import { BaseMobilePanelComponent } from '../base-mobile-panel';
import { PanelOptions } from '../../../models/base-panel';
import * as i0 from "@angular/core";
export declare class MobileModalPanelComponent extends BaseMobilePanelComponent {
    _render: Renderer2;
    cdr: ChangeDetectorRef;
    constructor(_render: Renderer2, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    setOptions(options: PanelOptions): void;
    _setMobilePosition(): void;
    static ɵfac: i0.ɵɵFactoryDef<MobileModalPanelComponent, [{ optional: true; }, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MobileModalPanelComponent, "epsgis-mobile-modal-panel", never, {}, {}, never, never>;
}
//# sourceMappingURL=modal-panel.component.d.ts.map