import * as i0 from "@angular/core";
export declare class SharedUtilsService {
    widgetProperties: Array<string>;
    constructor();
    isHostedService(): boolean;
    processWidgetProperties(manifest: any): void;
    processWidgetUriPara(widget: any): void;
    getConfigElementById(appConfig: any, id: any): any;
    visitElement(appConfig: any, cb: Function): void;
    private visitBigSection;
    getConfigElementByLabel(appConfig: any, label: string): any;
    getConfigElementsByName(appConfig: any, name: string): any[];
    getConfigElementsByUri(appConfig: any, uri: string): any[];
    getWidgetNameFromUri(uri: string): string;
    getAmdFolderFromUri(uri: string): string;
    static ɵfac: i0.ɵɵFactoryDef<SharedUtilsService, never>;
    static ɵprov: i0.ɵɵInjectableDef<SharedUtilsService>;
}
//# sourceMappingURL=shared-utils.service.d.ts.map