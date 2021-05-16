import { RequestResultModel } from '../models/http/request.result';
import { HttpReqService } from './request.service';
import * as i0 from "@angular/core";
export declare class SettingService {
    req: HttpReqService;
    readonly API_SAVE_SETTING: string;
    constructor(req: HttpReqService);
    getConfigContent(filePath: string): Promise<Object>;
    saveConfig(data: ISettingSaveModel): Promise<RequestResultModel>;
    static ɵfac: i0.ɵɵFactoryDef<SettingService, never>;
    static ɵprov: i0.ɵɵInjectableDef<SettingService>;
}
export interface ISettingSaveModel {
    filePath: string;
    content: string;
}
//# sourceMappingURL=setting.service.d.ts.map