import { Subject } from 'rxjs';
import { SSModalAPI } from './modal-options';
import { SsModalOptions } from './modal-types';
import { ModalContainerComponent } from './modal-container/modal-container.component';
import { ComponentRef } from '@angular/core';
export declare const enum SsModalState {
    OPEN = 0,
    CLOSING = 1,
    CLOSED = 2
}
export declare const enum SsTriggerAction {
    CANCEL = "cancel",
    OK = "ok"
}
export declare function isPromise<T>(obj: any): obj is Promise<T>;
export declare class SsModalRef<T = any, R = any> implements SSModalAPI<T, R> {
    private config;
    private containerRef;
    containerInstance: ModalContainerComponent;
    componentRef: ComponentRef<T>;
    componentInstance: T | null;
    result?: R;
    state: SsModalState;
    afterClose: Subject<R>;
    afterOpen: Subject<void>;
    private closeTimeout?;
    constructor(config: SsModalOptions, containerRef: ComponentRef<ModalContainerComponent>);
    getContentComponent(): T;
    getElement(): HTMLElement;
    destroy(result?: R): void;
    triggerOk(): void;
    triggerCancel(): void;
    open(): void;
    close(result?: R): void;
    updateConfig(config: SsModalOptions): void;
    getState(): SsModalState;
    getConfig(): SsModalOptions;
    getBackdropElement(): HTMLElement | null;
    private trigger;
    private closeWhitResult;
}
//# sourceMappingURL=modal-ref.d.ts.map