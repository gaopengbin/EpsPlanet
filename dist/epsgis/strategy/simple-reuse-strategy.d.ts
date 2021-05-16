import { Injector } from '@angular/core';
import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from '@angular/router';
export declare class SimpleReuseStrategy implements RouteReuseStrategy {
    private injector;
    static snapshots: {
        [key: string]: DetachedRouteHandle;
    };
    private static waitDelete;
    private appGlobal;
    constructor(injector: Injector);
    shouldDetach(route: ActivatedRouteSnapshot): boolean;
    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void;
    shouldAttach(route: ActivatedRouteSnapshot): boolean;
    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle;
    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean;
    static getRouteUrl(route: ActivatedRouteSnapshot): string;
    static deleteRouteSnapshot(key: string): void;
    private static deactivateOutlet;
    static clearRouteSnapshot(): void;
}
//# sourceMappingURL=simple-reuse-strategy.d.ts.map