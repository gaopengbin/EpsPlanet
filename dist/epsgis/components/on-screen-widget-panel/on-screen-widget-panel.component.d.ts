import { BasePanelComponent } from '../base-panel/base-panel.component';
import { OnInit, Renderer2, ChangeDetectorRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class OnScreenWidgetPanelComponent extends BasePanelComponent implements OnInit {
    cdr: ChangeDetectorRef;
    constructor(_render: Renderer2, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<OnScreenWidgetPanelComponent, [{ optional: true; }, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<OnScreenWidgetPanelComponent, "epsgis-on-screen-widget-panel", never, {}, {}, never, never>;
}
//# sourceMappingURL=on-screen-widget-panel.component.d.ts.map