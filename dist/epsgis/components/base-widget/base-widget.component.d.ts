import { ILoadScriptOptions } from 'esri-loader';
import { BaseWidget } from '../base-widget';
import * as i0 from "@angular/core";
export declare class BaseWidgetComponent extends BaseWidget {
    widgetSettingClassName: string;
    showSettingWhenInPanel: boolean;
    ngOnInit(): void;
    private static settingIconEleNode;
    onMouseEnter(target: HTMLElement): void;
    onMouseLeave(target: HTMLElement): void;
    getPanel(): any;
    onConfigChanged(config: any): void;
    onAppConfigChanged(appConfig: any, reason: any, changedData: any): void;
    onAction(action: any, data: any): void;
    loadArcgisModules<T extends any[] = any[]>(modules: string[], loadScriptOptions?: ILoadScriptOptions): Promise<T>;
    openSetting(options?: {
        width: number;
        height: number;
    }): void;
    static ɵfac: i0.ɵɵFactoryDef<BaseWidgetComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<BaseWidgetComponent, never, never, { "showSettingWhenInPanel": "showSettingWhenInPanel"; }, {}, never>;
}
//# sourceMappingURL=base-widget.component.d.ts.map