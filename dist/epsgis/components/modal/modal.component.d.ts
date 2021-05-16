import { OnChanges, SimpleChanges, TemplateRef, Type, EventEmitter, ViewContainerRef, Renderer2, ChangeDetectorRef } from '@angular/core';
import { SSModalAPI } from './modal-options';
import { Observable } from 'rxjs';
import { SsStyleObjectLike, SsButtonType, SsModalTypes, OnClickCallback, SsModalButtonOptions } from './modal-types';
import { SsModalRef } from './modal-ref';
import { ModalManagerService } from '../../services/modal-manager.service';
import { BasePanelComponent } from '../base-panel/base-panel.component';
import * as i0 from "@angular/core";
export declare class SSModalComponent<T = any, R = any> extends BasePanelComponent implements OnChanges, SSModalAPI<T, R> {
    private modalService;
    private viewContainerRef;
    _render: Renderer2;
    cdr: ChangeDetectorRef;
    mask: boolean;
    maskClosable: boolean;
    visible: boolean;
    closable: boolean;
    okLoading: boolean;
    okDisabled: boolean;
    cancelDisabled: boolean;
    cancelLoading: boolean;
    keyboard: boolean;
    noAnimation: boolean;
    content?: string | TemplateRef<{}> | Type<T>;
    componentParams?: T;
    footer?: string | TemplateRef<{}> | Array<SsModalButtonOptions<T>> | null;
    getContainer?: HTMLElement;
    zIndex: number;
    width: number | string;
    wrapClassName?: string;
    className?: string;
    styles?: object;
    title: string;
    closeIcon: string | TemplateRef<void>;
    maskStyle?: SsStyleObjectLike;
    bodyStyle?: SsStyleObjectLike;
    okText?: string | null;
    cancelText?: string | null;
    okType: SsButtonType;
    iconType: string;
    modalType: SsModalTypes;
    readonly onOk: EventEmitter<T> | OnClickCallback<T>;
    readonly onCancel: EventEmitter<T> | OnClickCallback<T>;
    readonly afterOpen: EventEmitter<void>;
    readonly afterClose: EventEmitter<R>;
    readonly visibleChange: EventEmitter<boolean>;
    contentTemplateRef: TemplateRef<{}>;
    modalRef: SsModalRef | null;
    get afterOpenObservable(): Observable<void>;
    get afterCloseObservable(): Observable<R>;
    constructor(modalService: ModalManagerService, viewContainerRef: ViewContainerRef, _render: Renderer2, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    onCloseClick(): void;
    onOkClick(): void;
    private getConfig;
    ngOnChanges(changes: SimpleChanges): void;
    open(): void;
    close(result?: R): void;
    destroy(result?: R): void;
    triggerOk(): void;
    triggerCancel(): void;
    getContentComponent(): void | T;
    getElement(): void | HTMLElement;
    getModalRef(): SsModalRef | null;
    static ɵfac: i0.ɵɵFactoryDef<SSModalComponent<any, any>, [null, null, { optional: true; }, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SSModalComponent<any, any>, "epsgis-modal", never, { "mask": "mask"; "maskClosable": "maskClosable"; "visible": "visible"; "closable": "closable"; "okLoading": "okLoading"; "okDisabled": "okDisabled"; "cancelDisabled": "cancelDisabled"; "cancelLoading": "cancelLoading"; "keyboard": "keyboard"; "noAnimation": "noAnimation"; "content": "content"; "componentParams": "componentParams"; "footer": "footer"; "getContainer": "getContainer"; "zIndex": "zIndex"; "width": "width"; "wrapClassName": "wrapClassName"; "className": "className"; "styles": "styles"; "title": "title"; "closeIcon": "closeIcon"; "maskStyle": "maskStyle"; "bodyStyle": "bodyStyle"; "okText": "okText"; "cancelText": "cancelText"; "okType": "okType"; "iconType": "iconType"; "modalType": "modalType"; "onOk": "onOk"; "onCancel": "onCancel"; }, { "onOk": "onOk"; "onCancel": "onCancel"; "afterOpen": "afterOpen"; "afterClose": "afterClose"; "visibleChange": "visibleChange"; }, never, ["*"]>;
}
//# sourceMappingURL=modal.component.d.ts.map