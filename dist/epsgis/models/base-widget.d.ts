import { PanelOptions } from './base-panel';
export declare enum WidgetType {
    widget = "widget",
    panel = "panel",
    icon = "icon"
}
export declare class WidgetPosition {
    top?: number | string;
    left?: number | string;
    bottom?: number | string;
    right?: number | string;
    height?: number | string;
    width?: number | string;
    zIndex?: number | string;
    position?: string;
    relativeTo: string;
    [key: string]: any;
    constructor(top?: number | string, left?: number | string, bottom?: number | string, right?: number | string, height?: number | string, width?: number | string, zIndex?: number | string, position?: string, relativeTo?: string);
}
export declare enum WidgetState {
    closed = "closed",
    opened = "opened",
    active = "active"
}
export declare enum WidgetWindowState {
    normal = "normal",
    minimized = "minimized",
    maximized = "maximized",
    collapsed = "collapsed"
}
export interface WidgetOpenOptions {
    uri: string;
    position?: WidgetPosition;
    panel?: PanelOptions;
    param?: any;
    onlyCreateWidget?: boolean;
}
//# sourceMappingURL=base-widget.d.ts.map