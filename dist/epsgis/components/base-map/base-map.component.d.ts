import { OnInit, ViewContainerRef } from '@angular/core';
import { BaseWidgetComponent } from '../base-widget/base-widget.component';
import { ComponentLoaderService } from '../../services/component-loader.service';
import * as i0 from "@angular/core";
export declare class BaseMapComponent extends BaseWidgetComponent implements OnInit {
    componentLoader: ComponentLoaderService;
    container: ViewContainerRef;
    private _is3d;
    get is3D(): boolean;
    set is3D(val: boolean);
    constructor(componentLoader: ComponentLoaderService);
    ngOnInit(): void;
    setProps(options: {
        appConfig: any;
        config: any;
        manifest: any;
    }): void;
    initMap(): Promise<any>;
    static ɵfac: i0.ɵɵFactoryDef<BaseMapComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<BaseMapComponent, never, never, {}, {}, never>;
}
//# sourceMappingURL=base-map.component.d.ts.map