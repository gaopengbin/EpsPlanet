import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./request.service";
export class SettingService {
    constructor(req) {
        this.req = req;
        this.API_SAVE_SETTING = "api/setting/content";
    }
    getConfigContent(filePath) {
        return this.req.getJsonFile(filePath);
    }
    saveConfig(data) {
        if (!data) {
            return Promise.resolve({
                success: false,
                msg: "data is null",
                data: null
            });
        }
        if (!data.filePath) {
            return Promise.resolve({
                success: false,
                msg: "data.filePath is null",
                data: null
            });
        }
        return this.req.postNoAuth(this.API_SAVE_SETTING, data, this.req.config.settingApiUrl, true);
    }
}
SettingService.ɵfac = function SettingService_Factory(t) { return new (t || SettingService)(i0.ɵɵinject(i1.HttpReqService)); };
SettingService.ɵprov = i0.ɵɵdefineInjectable({ token: SettingService, factory: SettingService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SettingService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpReqService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZXBzZ2lzL3NlcnZpY2VzL3NldHRpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFVM0MsTUFBTSxPQUFPLGNBQWM7SUFFekIsWUFBbUIsR0FBbUI7UUFBbkIsUUFBRyxHQUFILEdBQUcsQ0FBZ0I7UUFEN0IscUJBQWdCLEdBQVcscUJBQXFCLENBQUM7SUFDaEIsQ0FBQztJQUszQyxnQkFBZ0IsQ0FBQyxRQUFnQjtRQUMvQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFLRCxVQUFVLENBQUMsSUFBdUI7UUFDaEMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQztnQkFDckIsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsR0FBRyxFQUFFLGNBQWM7Z0JBQ25CLElBQUksRUFBRSxJQUFJO2FBQ1gsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUM7Z0JBQ3JCLE9BQU8sRUFBRSxLQUFLO2dCQUNkLEdBQUcsRUFBRSx1QkFBdUI7Z0JBQzVCLElBQUksRUFBRSxJQUFJO2FBQ1gsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9GLENBQUM7OzRFQTlCVSxjQUFjO3NEQUFkLGNBQWMsV0FBZCxjQUFjLG1CQUZiLE1BQU07dUZBRVAsY0FBYztjQUgxQixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXF1ZXN0UmVzdWx0TW9kZWwgfSBmcm9tICcuLi9tb2RlbHMvaHR0cC9yZXF1ZXN0LnJlc3VsdCc7XG5pbXBvcnQgeyBIdHRwUmVxU2VydmljZSB9IGZyb20gJy4vcmVxdWVzdC5zZXJ2aWNlJztcblxuLyoqXG4gKiBTZXR0aW5n5pyN5YqhXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNldHRpbmdTZXJ2aWNlIHtcbiAgcmVhZG9ubHkgQVBJX1NBVkVfU0VUVElORzogc3RyaW5nID0gXCJhcGkvc2V0dGluZy9jb250ZW50XCI7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZXE6IEh0dHBSZXFTZXJ2aWNlKSB7IH1cbiAgLyoqXG4gICAqIOiOt+WPlumFjee9ruaWh+S7tuWGheWuuVxuICAgKiBAcGFyYW0gZmlsZVBhdGgg6YWN572u5paH5Lu26Lev5b6EXG4gICAqL1xuICBnZXRDb25maWdDb250ZW50KGZpbGVQYXRoOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXEuZ2V0SnNvbkZpbGUoZmlsZVBhdGgpO1xuICB9XG4gIC8qKlxuICAgKiDkv53lrZjphY3nva7mlofku7ZcbiAgICogQHBhcmFtIGRhdGEgXG4gICAqL1xuICBzYXZlQ29uZmlnKGRhdGE6IElTZXR0aW5nU2F2ZU1vZGVsKTogUHJvbWlzZTxSZXF1ZXN0UmVzdWx0TW9kZWw+IHtcbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbXNnOiBcImRhdGEgaXMgbnVsbFwiLFxuICAgICAgICBkYXRhOiBudWxsXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKCFkYXRhLmZpbGVQYXRoKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1zZzogXCJkYXRhLmZpbGVQYXRoIGlzIG51bGxcIixcbiAgICAgICAgZGF0YTogbnVsbFxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnJlcS5wb3N0Tm9BdXRoKHRoaXMuQVBJX1NBVkVfU0VUVElORywgZGF0YSwgdGhpcy5yZXEuY29uZmlnLnNldHRpbmdBcGlVcmwsIHRydWUpO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIElTZXR0aW5nU2F2ZU1vZGVsIHtcbiAgZmlsZVBhdGg6IHN0cmluZztcbiAgY29udGVudDogc3RyaW5nO1xufVxuXG4iXX0=