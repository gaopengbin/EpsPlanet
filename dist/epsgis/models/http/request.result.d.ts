export declare class RequestResultModel {
    success: boolean;
    msg: string;
    data: any;
    error?: {
        errorCode?: string;
        errorMsg?: string;
    };
    constructor(success: boolean, msg?: string, data?: any);
}
export interface TokenModel {
    access_token?: string;
    token_type?: string;
    expires_in?: number;
    refresh_token?: string;
    error?: string;
    error_description?: string;
    client_id?: string;
    user_name?: string;
    userid?: string;
    issued?: string;
    expires?: string;
}
export declare enum OrderByType {
    asc = 0,
    desc = 1
}
export interface CurrentLoginUser {
    userid?: string;
    user_name?: string;
    login_name?: string;
    org_id?: string;
    org_name?: string;
    depart_ids?: string[];
    depart_names?: string[];
    role_ids?: string[];
    role_names?: string[];
    super_admin?: boolean;
    org_admin?: boolean;
    depart_admin?: boolean;
    real_name?: string;
    gender?: number;
    mobile?: string;
    email?: string;
    login_date?: string;
    last_login_date?: string;
    token?: TokenModel;
    work_area?: string;
    leader?: boolean;
}
//# sourceMappingURL=request.result.d.ts.map