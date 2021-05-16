import { OnInit, ViewContainerRef, ComponentRef, OnDestroy, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { BaseWidgetComponent } from '../base-widget/base-widget.component';
import { OnScreenWidgetPanelComponent } from '../on-screen-widget-panel/on-screen-widget-panel.component';
import * as i0 from "@angular/core";
export declare class OnScreenWidgetIconComponent extends BaseWidgetComponent implements OnInit, OnDestroy, AfterViewInit {
    viewContainerRef: ViewContainerRef;
    cdrf: ChangeDetectorRef;
    widget: any;
    panel: ComponentRef<OnScreenWidgetPanelComponent>;
    panelConfig: any;
    isShowImg: Boolean;
    spacing: number;
    iconStyleDisplay: string;
    constructor(viewContainerRef: ViewContainerRef, cdrf: ChangeDetectorRef);
    ngOnInit(): void;
    setProps(options: {
        compRef: any;
        appConfig: any;
        map: any;
        widgetConfig: any;
    }): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    resetPanelPosition(): any;
    onMouseClick(evt: any): void;
    startup(): void;
    onClick(evt: any): void;
    private _isDockPanel;
    switchToOpen(): void;
    switchToClose(): void;
    moveTo(position: any): void;
    destroy(): void;
    getOffPanelWidgetPosition(): void;
    private _showLoading;
    private _hideLoading;
    onMapChange(map: any): void;
    onViewChange(view: any): void;
    static ɵfac: i0.ɵɵFactoryDef<OnScreenWidgetIconComponent, [{ optional: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<OnScreenWidgetIconComponent, "epsgis-on-screen-widget-icon", never, {}, {}, never, never>;
}
//# sourceMappingURL=on-screen-widget-icon.component.d.ts.map