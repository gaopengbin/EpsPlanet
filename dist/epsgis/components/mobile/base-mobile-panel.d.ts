import { Renderer2, ChangeDetectorRef } from '@angular/core';
import { BasePanelComponent } from '../base-panel/base-panel.component';
import * as i0 from "@angular/core";
export declare class BaseMobilePanelComponent extends BasePanelComponent {
    _render: Renderer2;
    cdr: ChangeDetectorRef;
    zIndex: number;
    constructor(_render: Renderer2, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    setOptions(options: any): void;
    protected getWidthHeight(): {
        width: string | number;
        height: string | number;
    };
    static ɵfac: i0.ɵɵFactoryDef<BaseMobilePanelComponent, [{ optional: true; }, { optional: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<BaseMobilePanelComponent, never, never, {}, {}, never>;
}
//# sourceMappingURL=base-mobile-panel.d.ts.map