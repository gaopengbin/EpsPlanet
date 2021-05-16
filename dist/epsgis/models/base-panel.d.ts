export declare enum PanelInMobileShowMode {
    default = "default",
    drawer = "drawer",
    drawerRight = "drawerright",
    popup = "popup",
    action = "action",
    popover = "popover",
    modal = "modal"
}
export declare enum PanelDockMode {
    none = "none",
    left = "left",
    right = "right",
    bottom = "bottom"
}
export interface PanelPosition {
    top?: number | string;
    left?: number | string;
    width?: number | string;
    height?: number | string;
}
export interface PanelOptions {
    id?: string;
    title?: string;
    showTitle?: boolean;
    modal?: boolean;
    autoOpen?: boolean;
    animationTime?: number;
    customClass?: string;
    buttonsPosition?: string;
    buttonClose?: boolean;
    buttonCloseText?: string;
    buttonMaximize?: boolean;
    buttonMaximizeText?: string;
    buttonUnmaximizeText?: string;
    buttonMinimize?: boolean;
    buttonMinimizeText?: string;
    buttonUnminimizeText?: string;
    buttonCollapse?: boolean;
    buttonCollapseText?: string;
    buttonUnCollapseText?: string;
    draggable?: boolean;
    dragOpacity?: number;
    resizable?: boolean;
    resizeOpacity?: number;
    statusBar?: boolean;
    height?: number;
    width?: number;
    maxHeight?: any;
    maxWidth?: any;
    minHeight?: number;
    minWidth?: number;
    collapsedWidth?: number;
    keepInViewport?: boolean;
    mouseMoveEvents?: boolean;
    dockSide?: PanelDockMode;
    relativeTo?: string;
    innerHtml?: string;
    url?: string;
    centerCollapse?: boolean;
    buttonSetting?: boolean;
    buttonSettingText?: string;
}
export declare const DefaultPanelOptions: PanelOptions;
//# sourceMappingURL=base-panel.d.ts.map