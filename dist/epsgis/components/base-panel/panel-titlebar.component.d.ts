import { ElementRef, EventEmitter } from "@angular/core";
import { PanelOptions } from "../../models/base-panel";
import { WidgetWindowState } from "../../models/base-widget";
import * as i0 from "@angular/core";
export declare class PanelTitleBarComponent {
    private ele;
    options: PanelOptions;
    hasIcon: boolean;
    isShowImg: boolean;
    icon: string;
    windowState: WidgetWindowState;
    onMouseDown: EventEmitter<any>;
    onClickSetting: EventEmitter<any>;
    onClickCollapse: EventEmitter<any>;
    onClickMaximize: EventEmitter<any>;
    onClickClose: EventEmitter<any>;
    constructor(ele: ElementRef);
    get nativeElement(): any;
    _titlebarMouseDown(evt: any): void;
    _buttonSettingClick(evt: any): void;
    _buttonCollapseClick(evt: any): void;
    _buttonMaximizeClick(evt: any): void;
    _buttonCloseClick(evt: any): void;
    static ɵfac: i0.ɵɵFactoryDef<PanelTitleBarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PanelTitleBarComponent, "div[sspanel-titlebar]", never, { "options": "options"; "hasIcon": "hasIcon"; "isShowImg": "isShowImg"; "icon": "icon"; "windowState": "windowState"; }, { "onMouseDown": "onMouseDown"; "onClickSetting": "onClickSetting"; "onClickCollapse": "onClickCollapse"; "onClickMaximize": "onClickMaximize"; "onClickClose": "onClickClose"; }, never, never>;
}
//# sourceMappingURL=panel-titlebar.component.d.ts.map