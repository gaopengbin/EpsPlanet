import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from '@angular/router';
import { ReuseTabService } from './reuse-tab.service';
export declare class ReuseTabStrategy implements RouteReuseStrategy {
    private reuseTabService;
    constructor(reuseTabService: ReuseTabService);
    /** 表示对所有路由允许复用 如果你有路由不想利用可以在这加一些业务逻辑判断 */
    shouldDetach(route: ActivatedRouteSnapshot): boolean;
    /** 当路由离开时会触发。按path作为key存储路由快照&组件当前实例对象 */
    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void;
    /** 若 path 在缓存中有的都认为允许还原路由 */
    shouldAttach(route: ActivatedRouteSnapshot): boolean;
    /** 从缓存中获取快照，若无则返回nul */
    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null;
    /** 进入路由触发，判断是否同一路由 */
    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean;
}
