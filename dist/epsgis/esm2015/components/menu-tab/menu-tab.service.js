import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class MenuTabService {
    constructor() {
        this.index = 0;
        this.name = "";
    }
    add() {
        this.index++;
    }
    getIndex() {
        return this.index;
    }
    setName(n) {
        this.name = n;
    }
    getName() {
        return this.name;
    }
}
MenuTabService.ɵfac = function MenuTabService_Factory(t) { return new (t || MenuTabService)(); };
MenuTabService.ɵprov = i0.ɵɵdefineInjectable({ token: MenuTabService, factory: MenuTabService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MenuTabService, [{
        type: Injectable
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS10YWIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Vwc2dpcy9jb21wb25lbnRzL21lbnUtdGFiL21lbnUtdGFiLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFHM0MsTUFBTSxPQUFPLGNBQWM7SUFDdkI7UUFJQSxVQUFLLEdBQVMsQ0FBQyxDQUFDO1FBQ2hCLFNBQUksR0FBUyxFQUFFLENBQUM7SUFIaEIsQ0FBQztJQUlELEdBQUc7UUFDQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELFFBQVE7UUFDSixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUNELE9BQU8sQ0FBQyxDQUFTO1FBQ2IsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7SUFFbEIsQ0FBQztJQUNELE9BQU87UUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDckIsQ0FBQzs7NEVBcEJRLGNBQWM7c0RBQWQsY0FBYyxXQUFkLGNBQWM7dUZBQWQsY0FBYztjQUQxQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWVudVRhYlNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgaW5kZXg6IG51bWJlcj0wO1xuICAgIG5hbWU6IHN0cmluZz1cIlwiO1xuICAgIGFkZCgpIHtcbiAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgIH1cblxuICAgIGdldEluZGV4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbmRleDtcbiAgICB9XG4gICAgc2V0TmFtZShuOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbjtcblxuICAgIH1cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cbn0iXX0=