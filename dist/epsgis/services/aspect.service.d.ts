declare class AspectService {
    nextId: number;
    private static _instance;
    private constructor();
    static getInstance(): AspectService;
    private advise;
    private _aspect;
    after: (target: any, methodName: string, advice: Function, receiveArguments?: boolean) => any;
    before: (target: any, methodName: string, advice: Function, receiveArguments?: boolean) => any;
    around: (target: any, methodName: string, advice: Function, receiveArguments?: boolean) => any;
}
export declare let aspect: AspectService;
export declare class TestAspect {
    constructor();
    testBefore(): void;
    testAfter(): void;
    testAround(): void;
}
export {};
//# sourceMappingURL=aspect.service.d.ts.map