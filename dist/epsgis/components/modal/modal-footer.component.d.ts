import { EventEmitter, OnDestroy } from '@angular/core';
import { SsModalRef } from './modal-ref';
import { SsModalButtonOptions, SsModalOptions } from './modal-types';
import * as i0 from "@angular/core";
export declare class SsModalFooterComponent implements OnDestroy {
    config: SsModalOptions;
    buttonsFooter: boolean;
    buttons: SsModalButtonOptions[];
    locale: {
        okText?: string;
        cancelText?: string;
    };
    readonly cancelTriggered: EventEmitter<void>;
    readonly okTriggered: EventEmitter<void>;
    modalRef: SsModalRef;
    private destroy$;
    constructor(config: SsModalOptions);
    getButtonClass(button: SsModalButtonOptions): "ss-btn ss-btn-primary" | "ss-btn ss-btn-dashed" | "ss-btn ss-btn-danger" | "ss-btn ss-btn-link" | "ss-btn ss-btn-default";
    onCancel(): void;
    onOk(): void;
    getButtonCallableProp(options: SsModalButtonOptions, prop: keyof SsModalButtonOptions): boolean;
    onButtonClick(options: SsModalButtonOptions): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<SsModalFooterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SsModalFooterComponent, "div[ss-modal-footer]", never, { "modalRef": "modalRef"; }, { "cancelTriggered": "cancelTriggered"; "okTriggered": "okTriggered"; }, never, never>;
}
//# sourceMappingURL=modal-footer.component.d.ts.map