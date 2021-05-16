import { EventEmitter } from 'events';
import * as i0 from "@angular/core";
export declare class EventEmitterService {
    rss: EventEmitter;
    readonly _mapLoaded: string;
    readonly _mapChanged: string;
    readonly _viewLoaded: string;
    readonly _viewChanged: string;
    readonly _widget_Created: string;
    readonly _widgetCreated: string;
    readonly _designConfigChanged: string;
    readonly _appConfigLoaded: string;
    readonly _appConfigChanged: string;
    readonly _header_ConfigChanged = "header-configChanged";
    readonly _createPanelContainer: string;
    readonly _mapPositionChanged: string;
    readonly _checkChangeDetector: string;
    readonly _imageViewerIndexChanged: string;
    constructor();
    removeListener(event: string | any, listener: (...args: any[]) => void): any;
    static ɵfac: i0.ɵɵFactoryDef<EventEmitterService, never>;
    static ɵprov: i0.ɵɵInjectableDef<EventEmitterService>;
}
//# sourceMappingURL=event-emitter.service.d.ts.map