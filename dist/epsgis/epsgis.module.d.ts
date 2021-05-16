import { ModuleWithProviders } from '@angular/core';
import { AppGlobalConfig, AppInitService } from './models/app-config';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./components/widget-base.module";
import * as i3 from "./directives/directives.module";
import * as i4 from "./components/comp-container/comp-container.module";
import * as i5 from "./components/modal/modal.module";
export declare class EpsGisModule {
    constructor(parentModule: EpsGisModule);
    static forRoot(config?: AppGlobalConfig): ModuleWithProviders<EpsGisModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<EpsGisModule, never, [typeof i1.CommonModule, typeof i2.EpsGisWidgetBaseModule, typeof i3.EpsGisDirectivesModule, typeof i4.EpsGisCompContainerModule, typeof i5.EpsGisModalModule], never>;
    static ɵinj: i0.ɵɵInjectorDef<EpsGisModule>;
}
export declare const loadGlobalConfig: (config: AppGlobalConfig, service: AppInitService) => () => Promise<boolean>;
export declare const setGlobalConfig: (service: AppInitService) => AppGlobalConfig;
//# sourceMappingURL=epsgis.module.d.ts.map