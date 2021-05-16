import { ComponentFactoryResolver, Type, ViewContainerRef, OnDestroy, ComponentRef } from '@angular/core';
import { ServiceInjector } from './service-injector';
import * as i0 from "@angular/core";
export declare class ComponentLoaderService implements OnDestroy {
    private componentFactoryResolver;
    viewContainerInHome: ViewContainerRef;
    viewContainerInMap: ViewContainerRef;
    private serviceInjector;
    factories: any;
    factoriesArray: Array<any>;
    constructor(componentFactoryResolver: ComponentFactoryResolver);
    createComponent(component: Type<any>, params?: any, container?: ViewContainerRef): ComponentRef<any>;
    getComponentPath(name: string): any;
    findComponent(name: string): any;
    getServiceInjector(): ServiceInjector;
    setServiceInjector(serviceInjector: ServiceInjector): void;
    setViewContainerInHome(container: ViewContainerRef): void;
    createComponentToHome(component: Type<any>, params?: any): ComponentRef<any>;
    showInHome(compRef: ComponentRef<any>): void;
    setViewContainerInMap(container: ViewContainerRef): void;
    createComponentToMap(component: Type<any>, params?: any): ComponentRef<any>;
    showInMap(compRef: ComponentRef<any>): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<ComponentLoaderService, never>;
    static ɵprov: i0.ɵɵInjectableDef<ComponentLoaderService>;
}
//# sourceMappingURL=component-loader.service.d.ts.map