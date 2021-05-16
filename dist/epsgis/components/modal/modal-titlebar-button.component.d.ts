import { OnDestroy } from '@angular/core';
import { SsModalRef } from './modal-ref';
import { SsModalOptions, SsModalTitleBarButtonOptions } from './modal-types';
import * as i0 from "@angular/core";
export declare class SsModalTitleBarButtonComponent implements OnDestroy {
    config: SsModalOptions;
    buttons: SsModalTitleBarButtonOptions[];
    modalRef: SsModalRef;
    private destroy$;
    constructor(config: SsModalOptions);
    getButtonCallableProp(options: SsModalTitleBarButtonOptions, prop: keyof SsModalTitleBarButtonOptions): boolean;
    onButtonClick(options: SsModalTitleBarButtonOptions): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<SsModalTitleBarButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SsModalTitleBarButtonComponent, "div[ss-modal-titlebar-button]", never, { "modalRef": "modalRef"; }, {}, never, never>;
}
//# sourceMappingURL=modal-titlebar-button.component.d.ts.map