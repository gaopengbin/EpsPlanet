import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import defaultSettings from './default-settings';
import * as i0 from "@angular/core";
/**
 * custom layout setting
 */
export const PRO_LAYOUT = new InjectionToken('pro-layout');
export class SettingsService {
    constructor(customSettings) {
        this.setting = Object.assign(Object.assign({}, defaultSettings), customSettings);
    }
    get settings() {
        return this.setting;
    }
    setSettings(name, value) {
        if (typeof name === 'string') {
            this.setting[name] = value;
        }
        else {
            this.setting = name;
        }
        return true;
    }
}
SettingsService.ɵfac = function SettingsService_Factory(t) { return new (t || SettingsService)(i0.ɵɵinject(PRO_LAYOUT, 8)); };
SettingsService.ɵprov = i0.ɵɵdefineInjectable({ token: SettingsService, factory: SettingsService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SettingsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [PRO_LAYOUT]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Byby1sYXlvdXQvc3JjL2xpYi9jb3JlL3NldHRpbmdzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLGVBQTJCLE1BQU0sb0JBQW9CLENBQUM7O0FBRTdEOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sVUFBVSxHQUFHLElBQUksY0FBYyxDQUFXLFlBQVksQ0FBQyxDQUFDO0FBS3JFLE1BQU0sT0FBTyxlQUFlO0lBSTFCLFlBQTRDLGNBQXdCO1FBQ2xFLElBQUksQ0FBQyxPQUFPLG1DQUNQLGVBQWUsR0FDZixjQUFjLENBQ2xCLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxXQUFXLENBQUMsSUFBdUIsRUFBRSxLQUFXO1FBQzlDLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO1NBQzVCO2FBQU07WUFDTCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztTQUNyQjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7OEVBdEJVLGVBQWUsY0FJTSxVQUFVO3VEQUovQixlQUFlLFdBQWYsZUFBZSxtQkFGZCxNQUFNO3VGQUVQLGVBQWU7Y0FIM0IsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COztzQkFLYyxRQUFROztzQkFBSSxNQUFNO3VCQUFDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4sIE9wdGlvbmFsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBkZWZhdWx0U2V0dGluZ3MsIHtTZXR0aW5nc30gZnJvbSAnLi9kZWZhdWx0LXNldHRpbmdzJztcblxuLyoqXG4gKiBjdXN0b20gbGF5b3V0IHNldHRpbmdcbiAqL1xuZXhwb3J0IGNvbnN0IFBST19MQVlPVVQgPSBuZXcgSW5qZWN0aW9uVG9rZW48U2V0dGluZ3M+KCdwcm8tbGF5b3V0Jyk7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNldHRpbmdzU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBzZXR0aW5nOiBTZXR0aW5ncztcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KFBST19MQVlPVVQpIGN1c3RvbVNldHRpbmdzOiBTZXR0aW5ncykge1xuICAgIHRoaXMuc2V0dGluZyA9IHtcbiAgICAgIC4uLmRlZmF1bHRTZXR0aW5ncyxcbiAgICAgIC4uLmN1c3RvbVNldHRpbmdzLFxuICAgIH07XG4gIH1cblxuICBnZXQgc2V0dGluZ3MoKTogU2V0dGluZ3Mge1xuICAgIHJldHVybiB0aGlzLnNldHRpbmc7XG4gIH1cblxuICBzZXRTZXR0aW5ncyhuYW1lOiBzdHJpbmcgfCBTZXR0aW5ncywgdmFsdWU/OiBhbnkpOiBib29sZWFuIHtcbiAgICBpZiAodHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLnNldHRpbmdbbmFtZV0gPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXR0aW5nID0gbmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiJdfQ==