import { BaseWidget } from '../base-widget';
import { BaseWidgetComponent } from '../base-widget/base-widget.component';
import { RequestResultModel } from '../../models/http/request.result';
import * as i0 from "@angular/core";
export declare class BaseSettingComponent extends BaseWidget {
    widgetInstance: BaseWidgetComponent;
    configFileName: string;
    configJsonWebPath: string;
    manifestFileName: string;
    manifestJsonWebPath: string;
    configJson: any;
    manifestJson: any;
    private validateResult;
    private _needLoadManifest;
    get needLoadManifest(): boolean;
    set needLoadManifest(value: boolean);
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    get configJsonPhysicalPath(): string;
    get manifestJsonPhysicalPath(): string;
    getValidateResult(): RequestResultModel;
    setValidateResult(success: boolean, errMsg?: string, data?: any): void;
    saveConfigJson(json: any): Promise<RequestResultModel>;
    saveManifestJson(json: any): Promise<RequestResultModel>;
    onSaveError(error: Error): void;
    static ɵfac: i0.ɵɵFactoryDef<BaseSettingComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<BaseSettingComponent, never, never, {}, {}, never>;
}
//# sourceMappingURL=base-setting.component.d.ts.map