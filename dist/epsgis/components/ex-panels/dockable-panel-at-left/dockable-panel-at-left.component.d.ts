import { Renderer2, ChangeDetectorRef } from '@angular/core';
import { PanelOptions } from '../../../models/base-panel';
import { BaseDockablePanelComponent } from '../base-dockable-panel';
import * as i0 from "@angular/core";
export declare class DockablePanelAtLeftComponent extends BaseDockablePanelComponent {
    _render: Renderer2;
    cdr: ChangeDetectorRef;
    constructor(_render: Renderer2, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    setOptions(options: PanelOptions): void;
    protected _setPCPosition(): void;
    onResize(): void;
    onOpen(): void;
    onClose(): void;
    resize(): void;
    static ɵfac: i0.ɵɵFactoryDef<DockablePanelAtLeftComponent, [{ optional: true; }, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<DockablePanelAtLeftComponent, "epsgis-dockable-panel-at-left", never, {}, {}, never, never>;
}
//# sourceMappingURL=dockable-panel-at-left.component.d.ts.map