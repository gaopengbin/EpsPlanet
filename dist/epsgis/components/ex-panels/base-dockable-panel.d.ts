import { Renderer2, ElementRef, ChangeDetectorRef } from '@angular/core';
import { BasePanelComponent } from '../base-panel/base-panel.component';
import * as i0 from "@angular/core";
export declare class BaseDockablePanelComponent extends BasePanelComponent {
    _render: Renderer2;
    cdr: ChangeDetectorRef;
    zIndex: number;
    _isCollapse: boolean;
    sspanel_center_collapse: ElementRef;
    constructor(_render: Renderer2, cdr: ChangeDetectorRef);
    get mapBounds(): {
        top: number;
        left: number;
        bottom: number;
        right: number;
        width: number;
        height: number;
    };
    _getMapTop(): number;
    _getMapLeft(): number;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    protected _setPCPosition(): void;
    onMove(): void;
    onClose(): void;
    _resizeMapWhenResize(): void;
    _resizeMapWhenClose(): void;
    showPanel(): void;
    hidePanel(): void;
    private __collapse;
    private __expand;
    collapsePanel(evt: any): void;
    static ɵfac: i0.ɵɵFactoryDef<BaseDockablePanelComponent, [{ optional: true; }, { optional: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<BaseDockablePanelComponent, never, never, {}, {}, never>;
}
//# sourceMappingURL=base-dockable-panel.d.ts.map