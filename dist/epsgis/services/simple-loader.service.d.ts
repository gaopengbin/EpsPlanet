declare class SimpleLoaderService {
    private static _instance;
    private constructor();
    static getInstance(): SimpleLoaderService;
    private is;
    private isArray;
    private getExtension;
    private createElement;
    private elementLoaded;
    private elementReadyStateChanged;
    private loadCss;
    private loadJs;
    loadResources(ress: string[], onOneBeginLoad?: Function, onOneLoad?: Function, onLoad?: Function): void;
    loadResource(url: string, onBeginLoad?: Function, onLoad?: Function): void;
}
export declare const simpleLoader: SimpleLoaderService;
export {};
//# sourceMappingURL=simple-loader.service.d.ts.map