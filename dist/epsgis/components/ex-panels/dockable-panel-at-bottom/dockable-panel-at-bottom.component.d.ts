import { Renderer2, ChangeDetectorRef } from '@angular/core';
import { PanelOptions } from '../../../models/base-panel';
import { BaseDockablePanelComponent } from '../base-dockable-panel';
import * as i0 from "@angular/core";
export declare class DockablePanelAtBottomComponent extends BaseDockablePanelComponent {
    _render: Renderer2;
    cdr: ChangeDetectorRef;
    constructor(_render: Renderer2, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    setOptions(options: PanelOptions): void;
    protected _setPCPosition(): void;
    onResize(): void;
    onOpen(): void;
    onClose(): void;
    resize(): void;
    static ɵfac: i0.ɵɵFactoryDef<DockablePanelAtBottomComponent, [{ optional: true; }, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<DockablePanelAtBottomComponent, "epsgis-dockable-panel-at-bottom", never, {}, {}, never, never>;
}
//# sourceMappingURL=dockable-panel-at-bottom.component.d.ts.map