export declare const ComponentRegistry: Map<string, IRegisteredComponentInfo>;
export interface IComponentInfo {
    uri: string;
    path?: string;
    name?: string;
}
export interface IRegisteredComponentInfo extends IComponentInfo {
    component: any;
}
export declare const ComponentRegister: (info: IComponentInfo) => any;
export declare function findComponentInfo(uri: string): IRegisteredComponentInfo;
//# sourceMappingURL=component-register.decorator.d.ts.map