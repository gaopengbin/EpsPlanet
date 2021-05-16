import { ViewContainerRef } from '@angular/core';
import { RequestResultModel } from '.././../../models/http/request.result';
import { JsonEditorComponent } from '../../shared/json-editor/json-editor.component';
import { BaseSettingComponent } from '../base-setting.component';
import * as i0 from "@angular/core";
declare type mode = 0 | 1 | 2 | 3;
export declare class WidgetSettingComponent extends BaseSettingComponent {
    editorConfig: JsonEditorComponent;
    editorManifest: JsonEditorComponent;
    container: ViewContainerRef;
    settingComponentInstance: BaseSettingComponent;
    currentMode: mode;
    showSwitchBtn: boolean;
    private previousMode;
    switchChecked: boolean;
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    switchToConfigOrManifest(): void;
    changeMode(evt: any): void;
    onSaveError(error: Error): void;
    saveAll(): Promise<RequestResultModel>;
    loadWidgetConfig(): void;
    loadWidgetManifest(): void;
    onConfigJsonLoad(succes: boolean, err: Error): void;
    onManifestJsonLoad(succes: boolean, err: Error): void;
    static ɵfac: i0.ɵɵFactoryDef<WidgetSettingComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<WidgetSettingComponent, "epsgis-widget-setting", never, {}, {}, never, never>;
}
export {};
//# sourceMappingURL=widget-setting.component.d.ts.map