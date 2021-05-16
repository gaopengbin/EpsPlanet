import { HttpReqService } from './request.service';
import { TokenModel, RequestResultModel, CurrentLoginUser } from '../models/http/request.result';
import * as i0 from "@angular/core";
export declare class AuthService {
    private req;
    private _tokenKey;
    private _userKey;
    private _currentUser;
    constructor(req: HttpReqService);
    private saveInfo2Local;
    private getInfoFromLocal;
    private saveToken;
    getLocalToken(): TokenModel;
    refreshToken(refresh_token: string): Promise<RequestResultModel>;
    userLogin(username: string, password: string): Promise<RequestResultModel>;
    checkLogin(): Promise<RequestResultModel>;
    logout(): Promise<boolean>;
    removeToken(): void;
    getRemoteUser(): Promise<CurrentLoginUser>;
    getCurrentUser(): CurrentLoginUser;
    static ɵfac: i0.ɵɵFactoryDef<AuthService, never>;
    static ɵprov: i0.ɵɵInjectableDef<AuthService>;
}
//# sourceMappingURL=auth.service.d.ts.map