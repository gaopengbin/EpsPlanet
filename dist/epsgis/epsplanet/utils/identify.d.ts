import { HttpReqService } from 'epsgis';
import * as i0 from "@angular/core";
export declare class Identify {
    private http;
    earth: any;
    constructor(http: HttpReqService);
    httpReq(method: any, url: any): Promise<Object>;
    GetFeatureInfo(czmObject: any, earth: any, type: any, callback: any): void;
    InitHandler(): void;
    getLayers(czmObject: any, earth: any, callback: any): void;
    test(list: any, earth: any, callback: any): void;
    httpFuncA(czmObject: any, typeName: any, bufferCoordinates: any, addr: any, requestUrl: any, callback: any): void;
    httpFuncB(requestUrl: any, callback: any): void;
    httpFunc(query: any, callback: any): void;
    pickModel(earth: any, callback: any): void;
    Cartesian2ToWGS84(viewer: any, position: any): {
        lon: any;
        lat: any;
    };
    Cartesian2ToCartographic(viewer: any, position: any): any[];
    GetWFSUrl(ImageryProvider: any): string;
    Buffer(position: any, meters: any): string;
    pointsToDegreesArray(points: any): string;
    ClearHighLight(): void;
    xml2Json(xml: any): {};
    stringToXml(xmlString: any): any;
    static ɵfac: i0.ɵɵFactoryDef<Identify, never>;
    static ɵprov: i0.ɵɵInjectableDef<Identify>;
}
//# sourceMappingURL=identify.d.ts.map