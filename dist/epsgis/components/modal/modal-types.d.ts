import { TemplateRef, EventEmitter, Type, ViewContainerRef } from '@angular/core';
export declare type OnClickCallback<T> = (instance: T) => (false | void | {}) | Promise<false | void | {}>;
export declare type SsButtonType = 'primary' | 'default' | 'dashed' | 'danger' | 'link' | null;
export declare type SsButtonShape = 'circle' | 'round' | null;
export declare type SsButtonSize = 'large' | 'default' | 'small';
export declare type SsModalTypes = 'default' | 'confirm';
export declare type SsConfirmType = 'confirm' | 'info' | 'success' | 'error' | 'warning';
export interface SsStyleObjectLike {
    [key: string]: string;
}
export declare class SsModalOptions<T = any, R = any> {
    closable?: boolean;
    okLoading?: boolean;
    okDisabled?: boolean;
    cancelDisabled?: boolean;
    cancelLoading?: boolean;
    noAnimation?: boolean;
    autofocus?: 'ok' | 'cancel' | 'auto' | null;
    mask?: boolean;
    maskClosable?: boolean;
    keyboard?: boolean;
    zIndex?: number;
    top?: number | string;
    width?: number | string;
    height?: number | string;
    closeIcon?: string | TemplateRef<void>;
    okType?: SsButtonType;
    modalType?: SsModalTypes;
    onCancel?: EventEmitter<T> | OnClickCallback<T>;
    onOk?: EventEmitter<T> | OnClickCallback<T>;
    componentParams?: Partial<T>;
    maskStyle?: SsStyleObjectLike;
    bodyStyle?: SsStyleObjectLike;
    wrapClassName?: string;
    className?: string;
    styles?: object;
    title?: string | TemplateRef<{}>;
    footer?: string | TemplateRef<{}> | Array<SsModalButtonOptions<T>> | null;
    cancelText?: string | null;
    okText?: string | null;
    content?: string | TemplateRef<any> | Type<T>;
    closeOnNavigation?: boolean;
    viewContainerRef?: ViewContainerRef;
    getContainer?: HTMLElement;
    afterOpen?: EventEmitter<void>;
    afterClose?: EventEmitter<R>;
    iconType?: string;
    fullScreen?: boolean;
    titleBarButtons?: Array<SsModalTitleBarButtonOptions<T>> | null;
}
export interface SsModalButtonOptions<T = any> {
    label: string;
    type?: SsButtonType;
    shape?: SsButtonShape;
    ghost?: boolean;
    size?: SsButtonSize;
    autoLoading?: boolean;
    show?: boolean | ((this: SsModalButtonOptions<T>, contentComponentInstance?: T) => boolean);
    loading?: boolean | ((this: SsModalButtonOptions<T>, contentComponentInstance?: T) => boolean);
    disabled?: boolean | ((this: SsModalButtonOptions<T>, contentComponentInstance?: T) => boolean);
    onClick?(this: SsModalButtonOptions<T>, contentComponentInstance?: T): any | Promise<any>;
    [key: string]: any;
}
export interface SsModalTitleBarButtonOptions<T = any> {
    icon: string;
    theme?: string;
    spin?: boolean;
    twotoneColor?: string;
    isIconfont?: boolean;
    rotate?: number;
    title?: string;
    style?: string;
    onClick?(this: SsModalTitleBarButtonOptions<T>, contentComponentInstance?: T): any | Promise<any>;
}
//# sourceMappingURL=modal-types.d.ts.map