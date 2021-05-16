import { Renderer2, ElementRef, ChangeDetectorRef } from '@angular/core';
import { BasePanelComponent } from '../../base-panel/base-panel.component';
import * as i0 from "@angular/core";
export declare class IframePanelComponent extends BasePanelComponent {
    _render: Renderer2;
    cdr: ChangeDetectorRef;
    iframeEl: ElementRef;
    constructor(_render: Renderer2, cdr: ChangeDetectorRef);
    url: string;
    isShowIframe: boolean;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<IframePanelComponent, [{ optional: true; }, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<IframePanelComponent, "epsgis-iframe-panel", never, {}, {}, never, never>;
}
//# sourceMappingURL=iframe-panel.component.d.ts.map