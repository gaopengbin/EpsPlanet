import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestResultModel, TokenModel, OrderByType } from '../models/http/request.result';
import { AppGlobalConfig } from '../models/models';
import * as i0 from "@angular/core";
export declare class HttpReqService {
    httpClient: HttpClient;
    config: AppGlobalConfig;
    private ServiceUrl;
    headers: HttpHeaders;
    private _tokenKey;
    private _tokenValue;
    constructor(httpClient: HttpClient, config: AppGlobalConfig);
    getLocalToken(): TokenModel;
    getTokenKey(): string;
    setAccessToken(token: string): void;
    getAccessToken(): string;
    getAuthHeaders(): HttpHeaders;
    getJsonFile(configFilePath: string): Promise<Object>;
    private _toHttpParams;
    private _toParaString;
    private _toHttpParams2;
    private _toParaString2;
    getNoAuthGeneric<T>(apiName: string, para?: ObjectPara | string, serviceUrl?: string): Promise<T>;
    getNoAuth(apiName: string, para?: ObjectPara | string, serviceUrl?: string): Promise<RequestResultModel>;
    getGeneric<T>(apiName: string, para?: ObjectPara | string, serviceUrl?: string): Promise<T>;
    get(apiName: string, para?: ObjectPara | string, serviceUrl?: string): Promise<RequestResultModel>;
    getPage(apiName: string, pageIndex: number, pageSize: number, orderBy?: string, direction?: OrderByType, para?: ObjectPara | string, serviceUrl?: string): Promise<RequestResultModel>;
    postNoAuthGeneric<T>(apiName: string, para?: ObjectPara | string | any, serviceUrl?: string | boolean, receiveAsObject?: boolean): Promise<T>;
    postNoAuth(apiName: string, para?: ObjectPara | string | any, serviceUrl?: string | boolean, receiveAsObject?: boolean): Promise<RequestResultModel>;
    postGeneric<T>(apiName: string, para?: ObjectPara | string | any, serviceUrl?: string | boolean, receiveAsObject?: boolean): Promise<T>;
    post(apiName: string, para?: ObjectPara | string | any, serviceUrl?: string | boolean, receiveAsObject?: boolean): Promise<RequestResultModel>;
    postPage(apiName: string, pageIndex: number, pageSize: number, orderBy?: string, direction?: OrderByType, para?: ObjectPara | string | any, serviceUrl?: string | boolean, receiveAsObject?: boolean): Promise<RequestResultModel>;
    deleteGeneric<T>(apiName: string, para: ObjectPara | string, serviceUrl?: string): Promise<T>;
    delete(apiName: string, para?: ObjectPara | string, serviceUrl?: string): Promise<RequestResultModel>;
    static ɵfac: i0.ɵɵFactoryDef<HttpReqService, never>;
    static ɵprov: i0.ɵɵInjectableDef<HttpReqService>;
}
export interface ObjectPara {
    [param: string]: string | ReadonlyArray<string>;
}
//# sourceMappingURL=request.service.d.ts.map