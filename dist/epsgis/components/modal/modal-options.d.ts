import { Observable } from 'rxjs';
export declare abstract class SSModalAPI<T, R> {
    abstract afterOpen: Observable<void>;
    abstract afterClose: Observable<R>;
    abstract open(): void;
    abstract close(result?: R): void;
    abstract destroy(result?: R): void;
    abstract triggerOk(): void;
    abstract triggerCancel(): void;
    abstract getContentComponent(): T | void;
    abstract getElement(): HTMLElement | void;
}
//# sourceMappingURL=modal-options.d.ts.map