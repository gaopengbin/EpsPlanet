export declare class GISAuthService {
    static message: string;
    static authtype: string;
    static encryptCode: string;
    static decrypt(str: string, pwd?: string | number | boolean): string;
    static validateAuth(encryptCode: string): void;
    static doValidateAuth(encryptCode: string): void;
    static isIE(): boolean;
    static getServerDate(): Date;
    static showAuthInfo(msg: string): void;
    static showAuthDlg(msg: string): void;
}
//# sourceMappingURL=gis-auth.service.d.ts.map