import { Directive } from '@angular/core';
import { BaseWidgetComponent, PropWatcher } from 'epsgis';
/**
 * 
 */
@Directive()
export class BasePlanetWidgetComponent extends BaseWidgetComponent {
  /**
   * earthSdk中通过_isVue判断的，误删
   */
  _isVue: boolean = true;
  watchers: Array<Function> = [];
  constructor() {
    super();
  }
  getCesiumView() {
    if (this.view) {
      return this.view.czm.viewer;
    }
    return null;
  }
  // get XE() {
  //   return window["XE"];
  // }
  /**
   * 
   * @param propertyName 属性名
   * @param func 函数
   * @param param { deep: true }
   */
  $watch(propertyName, func: Function, param) {
    this.watchers.push(PropWatcher.watch(this, propertyName, (prop, oldval, newval) => {
      // console.log("%s after %s,%s", prop, oldval, newval);
      func.call(func);
    }));
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    if (this.watchers && this.watchers.length >= 1) {
      this.watchers.forEach(f => f.call(f));
    }
    this.watchers.length = 0;
  }
}
