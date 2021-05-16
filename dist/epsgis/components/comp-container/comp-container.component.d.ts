import { OnInit, ViewContainerRef, EventEmitter, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ServiceInjector } from '../../services/service-injector';
import { ComponentLoaderService } from '../../services/component-loader.service';
import { EventEmitterService } from '../../services/event-emitter.service';
import * as i0 from "@angular/core";
export declare class CompContainerComponent implements OnInit, AfterViewInit {
    serviceInjector: ServiceInjector;
    cdr: ChangeDetectorRef;
    eventService: EventEmitterService;
    componentLoader: ComponentLoaderService;
    container: ViewContainerRef;
    configJsonFile: string;
    private _configJsonFile;
    get jsonFile(): string;
    set jsonFile(value: string);
    jsonFileChange: EventEmitter<any>;
    private _config;
    get config(): any;
    set config(value: any);
    configChange: EventEmitter<any>;
    autoLoad: boolean;
    constructor(serviceInjector: ServiceInjector, cdr: ChangeDetectorRef, eventService: EventEmitterService, componentLoader: ComponentLoaderService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    private _init;
    clear(): void;
    reload(): void;
    static ɵfac: i0.ɵɵFactoryDef<CompContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CompContainerComponent, "epsgis-comp-container", never, { "configJsonFile": "config-json-file"; "jsonFile": "jsonFile"; "config": "config"; "autoLoad": "autoLoad"; }, { "jsonFileChange": "jsonFileChange"; "configChange": "configChange"; }, never, never>;
}
//# sourceMappingURL=comp-container.component.d.ts.map