import { OnInit, Renderer2, ChangeDetectorRef } from '@angular/core';
import { PanelOptions } from '../../../models/base-panel';
import { BaseDockablePanelComponent } from '../base-dockable-panel';
import * as i0 from "@angular/core";
export declare class DockablePanelAtRightComponent extends BaseDockablePanelComponent implements OnInit {
    _render: Renderer2;
    cdr: ChangeDetectorRef;
    constructor(_render: Renderer2, cdr: ChangeDetectorRef);
    setOptions(options: PanelOptions): void;
    protected _setPCPosition(): void;
    onResize(): void;
    onOpen(): void;
    onClose(): void;
    resize(): void;
    static ɵfac: i0.ɵɵFactoryDef<DockablePanelAtRightComponent, [{ optional: true; }, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<DockablePanelAtRightComponent, "epsgis-dockable-panel-at-right", never, {}, {}, never, never>;
}
//# sourceMappingURL=dockable-panel-at-right.component.d.ts.map