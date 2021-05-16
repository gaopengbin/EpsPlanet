export declare class PropWatcher {
    static watch(obj: any, prop: any, after: ((prop: any, oldval: any, newval: any) => void), before?: ((prop: any, oldval: any, newval: any) => any)): () => void;
    static unwatch(obj: any, prop: any): void;
}
//# sourceMappingURL=prop-watcher.d.ts.map