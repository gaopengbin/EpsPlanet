import { Injectable } from '@angular/core';
import { SharedUtilsService } from './shared/shared-utils.service';
import * as _ from "lodash";
import * as i0 from "@angular/core";
import * as i1 from "../models/app-config";
export class UtilsService extends SharedUtilsService {
    constructor(globalParams) {
        super();
        this.globalParams = globalParams;
    }
    getUriInfo(uri) {
        if (!uri || uri.indexOf(this.globalParams.appInfo.folderUrlPrefix) >= 0)
            return {};
        let pos, firstSeg, info = {}, amdFolder;
        pos = uri.indexOf('/');
        firstSeg = uri.substring(0, pos);
        amdFolder = uri.substring(0, uri.lastIndexOf('/') + 1);
        if (this.globalParams.jimuConfig.isDesignMode === true && this.globalParams.appInfo.folderUrlPrefix) {
            info.folderUrl = this.globalParams.appInfo.folderUrlPrefix + "/" + amdFolder;
        }
        else {
            info.folderUrl = amdFolder;
        }
        info.amdFolder = amdFolder;
        return info;
    }
    processWidgetSetting(setting) {
        if (!setting.uri) {
            return setting;
        }
        _.extend(setting, this.getUriInfo(setting.uri));
        if (!setting.position) {
            setting.position = {
                "left": 100,
                "top": 100,
                "width": 300,
                "height": 400,
                "relativeTo": "map"
            };
        }
        return setting;
    }
    addManifest2WidgetJson(widgetJson, manifest) {
        _.extend(widgetJson, manifest.properties);
        widgetJson.name = manifest.name;
        if (!widgetJson.label) {
            widgetJson.label = manifest.label;
        }
        widgetJson.manifest = manifest;
    }
    addManifestProperies(manifest) {
        if (manifest.url) {
            manifest.icon = manifest.url + 'images/icon.png';
        }
        if (manifest.category === "theme") {
            this.addThemeManifestProperies(manifest);
        }
        else {
            this.addWidgetManifestProperties(manifest);
        }
    }
    addThemeManifestProperies(manifest) {
        manifest.panels.forEach(function (panel) {
            panel.uri = 'panels/' + panel.name + '/Panel.js';
        });
        manifest.styles.forEach(function (style) {
            style.uri = 'styles/' + style.name + '/style.css';
        });
        manifest.layouts.forEach(function (layout) {
            layout.uri = 'layouts/' + layout.name + '/config.json';
            layout.icon = 'layouts/' + layout.name + '/icon.png';
            layout.RTLIcon = 'layouts/' + layout.name + '/icon_rtl.png';
        });
    }
    addWidgetManifestProperties(manifest) {
        if (typeof manifest['2D'] !== 'undefined') {
            manifest.support2D = manifest['2D'];
        }
        if (typeof manifest['3D'] !== 'undefined') {
            manifest.support3D = manifest['3D'];
        }
        if (typeof manifest['2D'] === 'undefined' && typeof manifest['3D'] === 'undefined') {
            manifest.support2D = true;
        }
        delete manifest['2D'];
        delete manifest['3D'];
        if (typeof manifest.properties === 'undefined') {
            manifest.properties = {};
        }
        super.processWidgetProperties(manifest);
    }
    processManifestLabel(manifest, locale) {
        manifest.label = manifest.i18nLabels && (manifest.i18nLabels[locale] ||
            manifest.i18nLabels.defaultLabel) ||
            manifest.label ||
            manifest.name;
        if (manifest.layouts) {
            _.forEach(manifest.layouts, (layout) => {
                let key = 'i18nLabels_layout_' + layout.name;
                layout.label = manifest[key] && (manifest[key][locale] ||
                    manifest[key].defaultLabel) ||
                    layout.label ||
                    layout.name;
            });
        }
        if (manifest.styles) {
            _.forEach(manifest.styles, (_style) => {
                let key = 'i18nLabels_style_' + _style.name;
                _style.label = manifest[key] && (manifest[key][locale] ||
                    manifest[key].defaultLabel) ||
                    _style.label ||
                    _style.name;
            });
        }
    }
    replacePlaceHolder(obj, props) {
        let str = JSON.stringify(obj), m = str.match(/\$\{(\w)+\}/g), i;
        if (m === null) {
            return obj;
        }
        for (i = 0; i < m.length; i++) {
            let p = m[i].match(/(\w)+/g)[0];
            if (props[p]) {
                str = str.replace(m[i], props[p]);
            }
        }
        return JSON.parse(str);
    }
    addI18NLabel(manifest) {
        return new Promise((resolve, reject) => {
            if (manifest.i18nLabels) {
                resolve(manifest);
                return;
            }
            manifest.i18nLabels = {};
            if (manifest.properties && manifest.properties.hasLocale === false) {
                resolve(manifest);
            }
            resolve(manifest);
        });
    }
    processUrlInAppConfig(url) {
        if (!url) {
            return;
        }
        if (url.startWith('data:') || url.startWith('http') || url.startWith('/')) {
            return url;
        }
        else {
            return this.globalParams.appInfo.appPath + url;
        }
    }
    isEqual(o1, o2) {
        let leftChain, rightChain;
        function compare2Objects(x, y) {
            let p;
            if (x === null && y === null || typeof x === 'undefined' && typeof y === 'undefined') {
                return true;
            }
            if (x === null && y !== null || y === null && x !== null ||
                typeof x === 'undefined' && typeof y !== 'undefined' ||
                typeof y === 'undefined' && typeof x !== 'undefined') {
                return false;
            }
            if (isNaN(x) && isNaN(y) && typeof x === 'number' && typeof y === 'number') {
                return true;
            }
            if (x === y) {
                return true;
            }
            if ((typeof x === 'function' && typeof y === 'function') ||
                (x instanceof Date && y instanceof Date) ||
                (x instanceof RegExp && y instanceof RegExp) ||
                (x instanceof String && y instanceof String) ||
                (x instanceof Number && y instanceof Number)) {
                return x.toString() === y.toString();
            }
            if (leftChain.indexOf(x) > -1 || rightChain.indexOf(y) > -1) {
                return false;
            }
            if (y !== null) {
                for (p in y) {
                    if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
                        return false;
                    }
                    else if (typeof y[p] !== typeof x[p]) {
                        return false;
                    }
                }
                for (p in x) {
                    if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
                        return false;
                    }
                    else if (typeof y[p] !== typeof x[p]) {
                        return false;
                    }
                    switch (typeof (x[p])) {
                        case 'object':
                        case 'function':
                            leftChain.push(x);
                            rightChain.push(y);
                            if (!compare2Objects(x[p], y[p])) {
                                return false;
                            }
                            leftChain.pop();
                            rightChain.pop();
                            break;
                        default:
                            if (x[p] !== y[p]) {
                                return false;
                            }
                            break;
                    }
                }
            }
            return true;
        }
        leftChain = [];
        rightChain = [];
        if (!compare2Objects(o1, o2)) {
            return false;
        }
        return true;
    }
    deleteMapOptions(mapOptions) {
        if (!mapOptions) {
            return;
        }
        delete mapOptions.extent;
        delete mapOptions.lods;
        delete mapOptions.center;
        delete mapOptions.scale;
        delete mapOptions.zoom;
        delete mapOptions.maxScale;
        delete mapOptions.maxZoom;
        delete mapOptions.minScale;
        delete mapOptions.minZoom;
    }
    reCreateObject(obj) {
        let ret;
        function copyArray(_array) {
            let retArray = [];
            _array.forEach(function (a) {
                if (Array.isArray(a)) {
                    retArray.push(copyArray(a));
                }
                else if (typeof a === 'object') {
                    retArray.push(copyObject(a));
                }
                else {
                    retArray.push(a);
                }
            });
            return retArray;
        }
        function copyObject(_obj) {
            let ret = {};
            for (let p in _obj) {
                if (!_obj.hasOwnProperty(p)) {
                    continue;
                }
                if (_obj[p] === null) {
                    ret[p] = null;
                }
                else if (Array.isArray(_obj[p])) {
                    ret[p] = copyArray(_obj[p]);
                }
                else if (typeof _obj[p] === 'object') {
                    ret[p] = copyObject(_obj[p]);
                }
                else {
                    ret[p] = _obj[p];
                }
            }
            return ret;
        }
        if (Array.isArray(obj)) {
            ret = copyArray(obj);
        }
        else {
            ret = copyObject(obj);
        }
        return ret;
    }
    getPositionStyle(_position) {
        let style = {};
        if (!_position) {
            return style;
        }
        let position = _.clone(_position);
        if (false) {
            let temp;
            if (typeof position.left !== 'undefined' && typeof position.right !== 'undefined') {
                temp = position.left;
                position.left = position.right;
                position.right = temp;
            }
            else if (typeof position.left !== 'undefined') {
                position.right = position.left;
                delete position.left;
            }
            else if (typeof position.right !== 'undefined') {
                position.left = position.right;
                delete position.right;
            }
            if (typeof position.paddingLeft !== 'undefined' &&
                typeof position.paddingRight !== 'undefined') {
                temp = position.paddingLeft;
                position.paddingLeft = position.paddingRight;
                position.paddingRight = temp;
            }
            else if (typeof position.paddingLeft !== 'undefined') {
                position.paddingRight = position.paddingLeft;
                delete position.paddingLeft;
            }
            else if (typeof position.paddingRight !== 'undefined') {
                position.paddingLeft = position.paddingRight;
                delete position.paddingRight;
            }
        }
        let ps = ['left', 'top', 'right', 'bottom', 'width', 'height',
            'padding', 'paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom'
        ];
        for (let i = 0; i < ps.length; i++) {
            let p = ps[i];
            if (typeof position[p] === 'number') {
                style[p] = position[p] + 'px';
            }
            else if (typeof position[p] !== 'undefined') {
                style[p] = position[p];
            }
            else {
                if (p.substr(0, 7) === 'padding') {
                    style[p] = 0;
                }
                else {
                    style[p] = 'auto';
                }
            }
        }
        if (typeof position.zIndex === 'undefined') {
            style.zIndex = this.globalParams.jimuConfig.zIndex;
        }
        else {
            style.zIndex = position.zIndex;
        }
        return style;
    }
    static detectChanges(cdr) {
        if (cdr && cdr["destroyed"] === false) {
            cdr.detectChanges();
        }
    }
}
UtilsService.ɵfac = function UtilsService_Factory(t) { return new (t || UtilsService)(i0.ɵɵinject(i1.AppGlobalConfig)); };
UtilsService.ɵprov = i0.ɵɵdefineInjectable({ token: UtilsService, factory: UtilsService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UtilsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.AppGlobalConfig }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2Vwc2dpcy9zZXJ2aWNlcy91dGlscy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ25FLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDOzs7QUFRNUIsTUFBTSxPQUFPLFlBQWEsU0FBUSxrQkFBa0I7SUFFbEQsWUFBb0IsWUFBNkI7UUFDL0MsS0FBSyxFQUFFLENBQUM7UUFEVSxpQkFBWSxHQUFaLFlBQVksQ0FBaUI7SUFFakQsQ0FBQztJQUtELFVBQVUsQ0FBQyxHQUFXO1FBRXBCLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDO1lBQUUsT0FBTyxFQUFFLENBQUM7UUFDbkYsSUFBSSxHQUFHLEVBQ0wsUUFBUSxFQUNSLElBQUksR0FBUSxFQUFFLEVBQ2QsU0FBUyxDQUFDO1FBQ1osR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkIsUUFBUSxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRWpDLFNBQVMsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsWUFBWSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUU7WUFDbkcsSUFBSSxDQUFD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LEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDeEI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxTQUFTLEVBQUU7b0JBQ2hDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ2Q7cUJBQU07b0JBQ0wsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztpQkFDbkI7YUFDRjtTQUNGO1FBRUQsSUFBSSxPQUFPLFFBQVEsQ0FBQyxNQUFNLEtBQUssV0FBVyxFQUFFO1lBRzFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO1NBQ3BEO2FBQU07WUFDTCxLQUFLLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7U0FDaEM7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFNRCxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQXNCO1FBQ3pDLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxXQUFXLENBQUMsS0FBSyxLQUFLLEVBQUU7WUFDckMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQzs7d0VBeGNVLFlBQVk7b0RBQVosWUFBWSxXQUFaLFlBQVksbUJBRlgsTUFBTTt1RkFFUCxZQUFZO2NBSHhCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTaGFyZWRVdGlsc1NlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC9zaGFyZWQtdXRpbHMuc2VydmljZSc7XG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCB7IEFwcEdsb2JhbENvbmZpZyB9IGZyb20gJy4uL21vZGVscy9hcHAtY29uZmlnJztcbi8qKlxuICogY3JlYXRlIGJ5IHJ1aXIgMTkxMDE0ICB1dGlscy5qc1xuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBVdGlsc1NlcnZpY2UgZXh0ZW5kcyBTaGFyZWRVdGlsc1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZ2xvYmFsUGFyYW1zOiBBcHBHbG9iYWxDb25maWcpIHtcbiAgICBzdXBlcigpO1xuICB9XG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIHVyaSBcbiAgICovXG4gIGdldFVyaUluZm8odXJpOiBzdHJpbmcpIHtcbiAgICAvL+iPnOWNleeahOWPr+iDveW+queOr+iwg+eUqOS6hiDlt7LlpITnkIbov4cg55u05o6l6L+U5Zuee30gcnVpciAxOTA0MTJcbiAgICBpZiAoIXVyaSB8fCB1cmkuaW5kZXhPZih0aGlzLmdsb2JhbFBhcmFtcy5hcHBJbmZvLmZvbGRlclVybFByZWZpeCkgPj0gMCkgcmV0dXJuIHt9O1xuICAgIGxldCBwb3MsXG4gICAgICBmaXJzdFNlZyxcbiAgICAgIGluZm86IGFueSA9IHt9LFxuICAgICAgYW1kRm9sZGVyO1xuICAgIHBvcyA9IHVyaS5pbmRleE9mKCcvJyk7XG4gICAgZmlyc3RTZWcgPSB1cmkuc3Vic3RyaW5nKDAsIHBvcyk7XG4gICAgLy9jb25maWcgdXNpbmcgcGFja2FnZVxuICAgIGFtZEZvbGRlciA9IHVyaS5zdWJzdHJpbmcoMCwgdXJpLmxhc3RJbmRleE9mKCcvJykgKyAxKTtcbiAgICBpZiAodGhpcy5nbG9iYWxQYXJhbXMuamltdUNvbmZpZy5pc0Rlc2lnbk1vZGUgPT09IHRydWUgJiYgdGhpcy5nbG9iYWxQYXJhbXMuYXBwSW5mby5mb2xkZXJVcmxQcmVmaXgpIHtcbiAgICAgIGluZm8uZm9sZGVyVXJsID0gdGhpcy5nbG9iYWxQYXJhbXMuYXBwSW5mby5mb2xkZXJVcmxQcmVmaXggKyBcIi9cIiArIGFtZEZvbGRlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5mby5mb2xkZXJVcmwgPSBhbWRGb2xkZXI7Ly9yZXF1aXJlKG1vLmdldFJlcXVpcmVDb25maWcoKSkudG9VcmwoYW1kRm9sZGVyKTtcbiAgICB9XG5cbiAgICBpbmZvLmFtZEZvbGRlciA9IGFtZEZvbGRlcjtcbiAgICByZXR1cm4gaW5mbztcbiAgfVxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSBzZXR0aW5nIFxuICAgKi9cbiAgcHJvY2Vzc1dpZGdldFNldHRpbmcoc2V0dGluZzogYW55KSB7XG4gICAgaWYgKCFzZXR0aW5nLnVyaSkge1xuICAgICAgcmV0dXJuIHNldHRpbmc7XG4gICAgfVxuICAgIF8uZXh0ZW5kKHNldHRpbmcsIHRoaXMuZ2V0VXJpSW5mbyhzZXR0aW5nLnVyaSkpO1xuICAgIC8qXG4gICAgKjE5MTEwOCBpY29u5LiN566h5pyJ5peg6YWN572u6YO95LiN5pWi77yM5rKh6YWN5bCx5pivdW5kZWZpbmVkXG4gICAgaWYgKHRoaXMuZ2xvYmFsUGFyYW1zLmppbXVDb25maWcuaXNEZXNpZ25Nb2RlID09PSB0cnVlICYmIHRoaXMuZ2xvYmFsUGFyYW1zLmFwcEluZm8uZm9sZGVyVXJsUHJlZml4KSB7XG4gICAgICBpZiAoc2V0dGluZy5pY29uKSB7XG4gICAgICAgIGlmIChzZXR0aW5nLmljb24uaW5kZXhPZih0aGlzLmdsb2JhbFBhcmFtcy5hcHBJbmZvLmZvbGRlclVybFByZWZpeCkgPD0gLTEpXG4gICAgICAgICAgc2V0dGluZy5pY29uID0gdGhpcy5nbG9iYWxQYXJhbXMuYXBwSW5mby5mb2xkZXJVcmxQcmVmaXggKyAnLycgKyBzZXR0aW5nLmljb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXR0aW5nLmljb24gPSB0aGlzLmdsb2JhbFBhcmFtcy5hcHBJbmZvLmZvbGRlclVybFByZWZpeCArICcvJyArIHNldHRpbmcuYW1kRm9sZGVyICsgJ2ltYWdlcy9pY29uLnBuZyc7XG4gICAgICB9XG4gICAgICBpZiAoc2V0dGluZy50aHVtYm5haWwpIHtcbiAgICAgICAgaWYgKHNldHRpbmcudGh1bWJuYWlsLmluZGV4T2YodGhpcy5nbG9iYWxQYXJhbXMuYXBwSW5mby5mb2xkZXJVcmxQcmVmaXgpIDw9IC0xKVxuICAgICAgICAgIHNldHRpbmcudGh1bWJuYWlsID0gdGhpcy5nbG9iYWxQYXJhbXMuYXBwSW5mby5mb2xkZXJVcmxQcmVmaXggKyAnLycgKyBzZXR0aW5nLmljb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXR0aW5nLnRodW1ibmFpbCA9IHRoaXMuZ2xvYmFsUGFyYW1zLmFwcEluZm8uZm9sZGVyVXJsUHJlZml4ICsgJy8nICsgc2V0dGluZy5hbWRGb2xkZXIgKyAnaW1hZ2VzL3RodW1ibmFpbC5wbmcnO1xuICAgICAgfVxuICAgICAgaWYgKHNldHRpbmcudXJpLmluZGV4T2YodGhpcy5nbG9iYWxQYXJhbXMuYXBwSW5mby5mb2xkZXJVcmxQcmVmaXgpIDw9IC0xKVxuICAgICAgICBzZXR0aW5nLnVyaSA9IHRoaXMuZ2xvYmFsUGFyYW1zLmFwcEluZm8uZm9sZGVyVXJsUHJlZml4ICsgJy8nICsgc2V0dGluZy51cmk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghc2V0dGluZy5pY29uICYmIHNldHRpbmcuaXNIZWFkTWVudSAhPT0gdHJ1ZSkge1xuICAgICAgICBzZXR0aW5nLmljb24gPSBzZXR0aW5nLmFtZEZvbGRlciArICdpbWFnZXMvaWNvbi5wbmcnO1xuICAgICAgfVxuICAgICAgaWYgKCFzZXR0aW5nLnRodW1ibmFpbCAmJiBzZXR0aW5nLmlzSGVhZE1lbnUgIT09IHRydWUpIHtcbiAgICAgICAgc2V0dGluZy50aHVtYm5haWwgPSBzZXR0aW5nLmFtZEZvbGRlciArICdpbWFnZXMvdGh1bWJuYWlsLnBuZyc7XG4gICAgICB9XG4gICAgfSovXG5cbiAgICBpZiAoIXNldHRpbmcucG9zaXRpb24pIHtcbiAgICAgIHNldHRpbmcucG9zaXRpb24gPSB7XG4gICAgICAgIFwibGVmdFwiOiAxMDAsXG4gICAgICAgIFwidG9wXCI6IDEwMCxcbiAgICAgICAgXCJ3aWR0aFwiOiAzMDAsXG4gICAgICAgIFwiaGVpZ2h0XCI6IDQwMCxcbiAgICAgICAgXCJyZWxhdGl2ZVRvXCI6IFwibWFwXCJcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy9zZXR0aW5nLmxhYmVsIGhhcyBiZWVuIHByb2Nlc3NlZCB3aGVuIGxvYWRpbmcgY29uZmlnLlxuICAgIHJldHVybiBzZXR0aW5nO1xuICB9XG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIHdpZGdldEpzb24gXG4gICAqIEBwYXJhbSBtYW5pZmVzdCBcbiAgICovXG4gIGFkZE1hbmlmZXN0MldpZGdldEpzb24od2lkZ2V0SnNvbjogYW55LCBtYW5pZmVzdDogYW55KSB7XG4gICAgXy5leHRlbmQod2lkZ2V0SnNvbiwgbWFuaWZlc3QucHJvcGVydGllcyk7XG4gICAgd2lkZ2V0SnNvbi5uYW1lID0gbWFuaWZlc3QubmFtZTtcbiAgICBpZiAoIXdpZGdldEpzb24ubGFiZWwpIHtcbiAgICAgIHdpZGdldEpzb24ubGFiZWwgPSBtYW5pZmVzdC5sYWJlbDtcbiAgICB9XG4gICAgd2lkZ2V0SnNvbi5tYW5pZmVzdCA9IG1hbmlmZXN0O1xuICB9XG4gIGFkZE1hbmlmZXN0UHJvcGVyaWVzKG1hbmlmZXN0OiBhbnkpIHtcbiAgICBpZiAobWFuaWZlc3QudXJsKSB7XG4gICAgICBtYW5pZmVzdC5pY29uID0gbWFuaWZlc3QudXJsICsgJ2ltYWdlcy9pY29uLnBuZyc7XG4gICAgfVxuXG4gICAgaWYgKG1hbmlmZXN0LmNhdGVnb3J5ID09PSBcInRoZW1lXCIpIHtcbiAgICAgIHRoaXMuYWRkVGhlbWVNYW5pZmVzdFByb3BlcmllcyhtYW5pZmVzdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRkV2lkZ2V0TWFuaWZlc3RQcm9wZXJ0aWVzKG1hbmlmZXN0KTtcbiAgICB9XG4gIH1cbiAgYWRkVGhlbWVNYW5pZmVzdFByb3BlcmllcyhtYW5pZmVzdDogYW55KSB7XG4gICAgbWFuaWZlc3QucGFuZWxzLmZvckVhY2goZnVuY3Rpb24gKHBhbmVsKSB7XG4gICAgICBwYW5lbC51cmkgPSAncGFuZWxzLycgKyBwYW5lbC5uYW1lICsgJy9QYW5lbC5qcyc7XG4gICAgfSk7XG5cbiAgICBtYW5pZmVzdC5zdHlsZXMuZm9yRWFjaChmdW5jdGlvbiAoc3R5bGUpIHtcbiAgICAgIHN0eWxlLnVyaSA9ICdzdHlsZXMvJyArIHN0eWxlLm5hbWUgKyAnL3N0eWxlLmNzcyc7XG4gICAgfSk7XG5cbiAgICBtYW5pZmVzdC5sYXlvdXRzLmZvckVhY2goZnVuY3Rpb24gKGxheW91dCkge1xuICAgICAgbGF5b3V0LnVyaSA9ICdsYXlvdXRzLycgKyBsYXlvdXQubmFtZSArICcvY29uZmlnLmpzb24nO1xuICAgICAgbGF5b3V0Lmljb24gPSAnbGF5b3V0cy8nICsgbGF5b3V0Lm5hbWUgKyAnL2ljb24ucG5nJztcbiAgICAgIGxheW91dC5SVExJY29uID0gJ2xheW91dHMvJyArIGxheW91dC5uYW1lICsgJy9pY29uX3J0bC5wbmcnO1xuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIG1hbmlmZXN0IFxuICAgKi9cbiAgYWRkV2lkZ2V0TWFuaWZlc3RQcm9wZXJ0aWVzKG1hbmlmZXN0OiBhbnkpIHtcbiAgICAvL2JlY2F1c2UgdGluZ28gZGIgZW5naW5lIGRvZXNuJ3Qgc3VwcG9ydCAyRCwgM0QgcHJvcGVydHksIHNvLCBjaGFuZ2UgaGVyZVxuICAgIGlmICh0eXBlb2YgbWFuaWZlc3RbJzJEJ10gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBtYW5pZmVzdC5zdXBwb3J0MkQgPSBtYW5pZmVzdFsnMkQnXTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBtYW5pZmVzdFsnM0QnXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIG1hbmlmZXN0LnN1cHBvcnQzRCA9IG1hbmlmZXN0WyczRCddO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgbWFuaWZlc3RbJzJEJ10gPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtYW5pZmVzdFsnM0QnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIG1hbmlmZXN0LnN1cHBvcnQyRCA9IHRydWU7XG4gICAgfVxuXG4gICAgZGVsZXRlIG1hbmlmZXN0WycyRCddO1xuICAgIGRlbGV0ZSBtYW5pZmVzdFsnM0QnXTtcblxuICAgIGlmICh0eXBlb2YgbWFuaWZlc3QucHJvcGVydGllcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIG1hbmlmZXN0LnByb3BlcnRpZXMgPSB7fTtcbiAgICB9XG5cbiAgICBzdXBlci5wcm9jZXNzV2lkZ2V0UHJvcGVydGllcyhtYW5pZmVzdCk7XG4gIH1cblxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSBtYW5pZmVzdCBcbiAgICogQHBhcmFtIGxvY2FsZSBcbiAgICovXG4gIHByb2Nlc3NNYW5pZmVzdExhYmVsKG1hbmlmZXN0LCBsb2NhbGUpIHtcbiAgICBtYW5pZmVzdC5sYWJlbCA9IG1hbmlmZXN0LmkxOG5MYWJlbHMgJiYgKG1hbmlmZXN0LmkxOG5MYWJlbHNbbG9jYWxlXSB8fFxuICAgICAgbWFuaWZlc3QuaTE4bkxhYmVscy5kZWZhdWx0TGFiZWwpIHx8XG4gICAgICBtYW5pZmVzdC5sYWJlbCB8fFxuICAgICAgbWFuaWZlc3QubmFtZTtcbiAgICBpZiAobWFuaWZlc3QubGF5b3V0cykge1xuICAgICAgXy5mb3JFYWNoKG1hbmlmZXN0LmxheW91dHMsIChsYXlvdXQpID0+IHtcbiAgICAgICAgbGV0IGtleSA9ICdpMThuTGFiZWxzX2xheW91dF8nICsgbGF5b3V0Lm5hbWU7XG4gICAgICAgIGxheW91dC5sYWJlbCA9IG1hbmlmZXN0W2tleV0gJiYgKG1hbmlmZXN0W2tleV1bbG9jYWxlXSB8fFxuICAgICAgICAgIG1hbmlmZXN0W2tleV0uZGVmYXVsdExhYmVsKSB8fFxuICAgICAgICAgIGxheW91dC5sYWJlbCB8fFxuICAgICAgICAgIGxheW91dC5uYW1lO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChtYW5pZmVzdC5zdHlsZXMpIHtcbiAgICAgIF8uZm9yRWFjaChtYW5pZmVzdC5zdHlsZXMsIChfc3R5bGUpID0+IHtcbiAgICAgICAgbGV0IGtleSA9ICdpMThuTGFiZWxzX3N0eWxlXycgKyBfc3R5bGUubmFtZTtcbiAgICAgICAgX3N0eWxlLmxhYmVsID0gbWFuaWZlc3Rba2V5XSAmJiAobWFuaWZlc3Rba2V5XVtsb2NhbGVdIHx8XG4gICAgICAgICAgbWFuaWZlc3Rba2V5XS5kZWZhdWx0TGFiZWwpIHx8XG4gICAgICAgICAgX3N0eWxlLmxhYmVsIHx8XG4gICAgICAgICAgX3N0eWxlLm5hbWU7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0gb2JqIFxuICAgKiBAcGFyYW0gcHJvcHMgXG4gICAqL1xuICByZXBsYWNlUGxhY2VIb2xkZXIob2JqLCBwcm9wcykge1xuICAgIGxldCBzdHIgPSBKU09OLnN0cmluZ2lmeShvYmopLFxuICAgICAgbSA9IHN0ci5tYXRjaCgvXFwkXFx7KFxcdykrXFx9L2cpLFxuICAgICAgaTtcblxuICAgIGlmIChtID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cbiAgICBmb3IgKGkgPSAwOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHAgPSBtW2ldLm1hdGNoKC8oXFx3KSsvZylbMF07XG4gICAgICBpZiAocHJvcHNbcF0pIHtcbiAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UobVtpXSwgcHJvcHNbcF0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gSlNPTi5wYXJzZShzdHIpO1xuICB9XG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIG1hbmlmZXN0IFxuICAgKi9cbiAgYWRkSTE4TkxhYmVsKG1hbmlmZXN0OiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAobWFuaWZlc3QuaTE4bkxhYmVscykge1xuICAgICAgICByZXNvbHZlKG1hbmlmZXN0KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbWFuaWZlc3QuaTE4bkxhYmVscyA9IHt9O1xuICAgICAgaWYgKG1hbmlmZXN0LnByb3BlcnRpZXMgJiYgbWFuaWZlc3QucHJvcGVydGllcy5oYXNMb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHJlc29sdmUobWFuaWZlc3QpO1xuICAgICAgfVxuICAgICAgcmVzb2x2ZShtYW5pZmVzdCk7XG4gICAgfSk7XG5cbiAgfVxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSB1cmwgXG4gICAqL1xuICBwcm9jZXNzVXJsSW5BcHBDb25maWcodXJsKSB7XG4gICAgaWYgKCF1cmwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHVybC5zdGFydFdpdGgoJ2RhdGE6JykgfHwgdXJsLnN0YXJ0V2l0aCgnaHR0cCcpIHx8IHVybC5zdGFydFdpdGgoJy8nKSkge1xuICAgICAgcmV0dXJuIHVybDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuZ2xvYmFsUGFyYW1zLmFwcEluZm8uYXBwUGF0aCArIHVybDtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0gbzEgXG4gICAqIEBwYXJhbSBvMiBcbiAgICovXG4gIGlzRXF1YWwobzEsIG8yKSB7XG4gICAgbGV0IGxlZnRDaGFpbiwgcmlnaHRDaGFpbjtcblxuICAgIGZ1bmN0aW9uIGNvbXBhcmUyT2JqZWN0cyh4LCB5KSB7XG4gICAgICBsZXQgcDtcbiAgICAgIGlmICh4ID09PSBudWxsICYmIHkgPT09IG51bGwgfHwgdHlwZW9mIHggPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHggPT09IG51bGwgJiYgeSAhPT0gbnVsbCB8fCB5ID09PSBudWxsICYmIHggIT09IG51bGwgfHxcbiAgICAgICAgdHlwZW9mIHggPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB5ICE9PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICB0eXBlb2YgeSA9PT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8gcmVtZW1iZXIgdGhhdCBOYU4gPT09IE5hTiByZXR1cm5zIGZhbHNlXG4gICAgICAvLyBhbmQgaXNOYU4odW5kZWZpbmVkKSByZXR1cm5zIHRydWVcbiAgICAgIGlmIChpc05hTih4KSAmJiBpc05hTih5KSAmJiB0eXBlb2YgeCA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHkgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgLy8gQ29tcGFyZSBwcmltaXRpdmVzIGFuZCBmdW5jdGlvbnMuXG4gICAgICAvLyBDaGVjayBpZiBib3RoIGFyZ3VtZW50cyBsaW5rIHRvIHRoZSBzYW1lIG9iamVjdC5cbiAgICAgIC8vIEVzcGVjaWFsbHkgdXNlZnVsIG9uIHN0ZXAgd2hlbiBjb21wYXJpbmcgcHJvdG90eXBlc1xuICAgICAgaWYgKHggPT09IHkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICAvLyBXb3JrcyBpbiBjYXNlIHdoZW4gZnVuY3Rpb25zIGFyZSBjcmVhdGVkIGluIGNvbnN0cnVjdG9yLlxuICAgICAgLy8gQ29tcGFyaW5nIGRhdGVzIGlzIGEgY29tbW9uIHNjZW5hcmlvLiBBbm90aGVyIGJ1aWx0LWlucz9cbiAgICAgIC8vIFdlIGNhbiBldmVuIGhhbmRsZSBmdW5jdGlvbnMgcGFzc2VkIGFjcm9zcyBpZnJhbWVzXG4gICAgICBpZiAoKHR5cGVvZiB4ID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB5ID09PSAnZnVuY3Rpb24nKSB8fFxuICAgICAgICAoeCBpbnN0YW5jZW9mIERhdGUgJiYgeSBpbnN0YW5jZW9mIERhdGUpIHx8XG4gICAgICAgICh4IGluc3RhbmNlb2YgUmVnRXhwICYmIHkgaW5zdGFuY2VvZiBSZWdFeHApIHx8XG4gICAgICAgICh4IGluc3RhbmNlb2YgU3RyaW5nICYmIHkgaW5zdGFuY2VvZiBTdHJpbmcpIHx8XG4gICAgICAgICh4IGluc3RhbmNlb2YgTnVtYmVyICYmIHkgaW5zdGFuY2VvZiBOdW1iZXIpKSB7XG4gICAgICAgIHJldHVybiB4LnRvU3RyaW5nKCkgPT09IHkudG9TdHJpbmcoKTtcbiAgICAgIH1cbiAgICAgIC8vIGNoZWNrIGZvciBpbmZpbml0aXZlIGxpbmtpbmcgbG9vcHNcbiAgICAgIGlmIChsZWZ0Q2hhaW4uaW5kZXhPZih4KSA+IC0xIHx8IHJpZ2h0Q2hhaW4uaW5kZXhPZih5KSA+IC0xKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIC8vIFF1aWNrIGNoZWNraW5nIG9mIG9uZSBvYmplY3QgYmVlaW5nIGEgc3Vic2V0IG9mIGFub3RoZXIuXG4gICAgICAvLyB0b2RvOiBjYWNoZSB0aGUgc3RydWN0dXJlIG9mIGFyZ3VtZW50c1swXSBmb3IgcGVyZm9ybWFuY2VcbiAgICAgIGlmICh5ICE9PSBudWxsKSB7XG4gICAgICAgIGZvciAocCBpbiB5KSB7XG4gICAgICAgICAgaWYgKHkuaGFzT3duUHJvcGVydHkocCkgIT09IHguaGFzT3duUHJvcGVydHkocCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB5W3BdICE9PSB0eXBlb2YgeFtwXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKHAgaW4geCkge1xuICAgICAgICAgIGlmICh5Lmhhc093blByb3BlcnR5KHApICE9PSB4Lmhhc093blByb3BlcnR5KHApKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgeVtwXSAhPT0gdHlwZW9mIHhbcF0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3dpdGNoICh0eXBlb2YgKHhbcF0pKSB7XG4gICAgICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgICAgICAgICBsZWZ0Q2hhaW4ucHVzaCh4KTtcbiAgICAgICAgICAgICAgcmlnaHRDaGFpbi5wdXNoKHkpO1xuICAgICAgICAgICAgICBpZiAoIWNvbXBhcmUyT2JqZWN0cyh4W3BdLCB5W3BdKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBsZWZ0Q2hhaW4ucG9wKCk7XG4gICAgICAgICAgICAgIHJpZ2h0Q2hhaW4ucG9wKCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgaWYgKHhbcF0gIT09IHlbcF0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGxlZnRDaGFpbiA9IFtdOyAvL3RvZG86IHRoaXMgY2FuIGJlIGNhY2hlZFxuICAgIHJpZ2h0Q2hhaW4gPSBbXTtcbiAgICBpZiAoIWNvbXBhcmUyT2JqZWN0cyhvMSwgbzIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIG1hcE9wdGlvbnMgXG4gICAqL1xuICBkZWxldGVNYXBPcHRpb25zKG1hcE9wdGlvbnM6IGFueSkge1xuICAgIGlmICghbWFwT3B0aW9ucykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkZWxldGUgbWFwT3B0aW9ucy5leHRlbnQ7XG4gICAgZGVsZXRlIG1hcE9wdGlvbnMubG9kcztcbiAgICBkZWxldGUgbWFwT3B0aW9ucy5jZW50ZXI7XG4gICAgZGVsZXRlIG1hcE9wdGlvbnMuc2NhbGU7XG4gICAgZGVsZXRlIG1hcE9wdGlvbnMuem9vbTtcbiAgICBkZWxldGUgbWFwT3B0aW9ucy5tYXhTY2FsZTtcbiAgICBkZWxldGUgbWFwT3B0aW9ucy5tYXhab29tO1xuICAgIGRlbGV0ZSBtYXBPcHRpb25zLm1pblNjYWxlO1xuICAgIGRlbGV0ZSBtYXBPcHRpb25zLm1pblpvb207XG4gIH1cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0gb2JqIFxuICAgKi9cbiAgcmVDcmVhdGVPYmplY3Qob2JqOiBhbnkpIHtcbiAgICBsZXQgcmV0O1xuXG4gICAgZnVuY3Rpb24gY29weUFycmF5KF9hcnJheSkge1xuICAgICAgbGV0IHJldEFycmF5ID0gW107XG4gICAgICBfYXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoYSkge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhKSkge1xuICAgICAgICAgIHJldEFycmF5LnB1c2goY29weUFycmF5KGEpKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICByZXRBcnJheS5wdXNoKGNvcHlPYmplY3QoYSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldEFycmF5LnB1c2goYSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJldEFycmF5O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvcHlPYmplY3QoX29iaikge1xuICAgICAgbGV0IHJldCA9IHt9O1xuICAgICAgZm9yIChsZXQgcCBpbiBfb2JqKSB7XG4gICAgICAgIGlmICghX29iai5oYXNPd25Qcm9wZXJ0eShwKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfb2JqW3BdID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0W3BdID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KF9vYmpbcF0pKSB7XG4gICAgICAgICAgcmV0W3BdID0gY29weUFycmF5KF9vYmpbcF0pO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBfb2JqW3BdID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHJldFtwXSA9IGNvcHlPYmplY3QoX29ialtwXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0W3BdID0gX29ialtwXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgICByZXQgPSBjb3B5QXJyYXkob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0ID0gY29weU9iamVjdChvYmopO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIF9wb3NpdGlvbiBcbiAgICovXG4gIGdldFBvc2l0aW9uU3R5bGUoX3Bvc2l0aW9uOiBhbnkpIHtcbiAgICBsZXQgc3R5bGU6IGFueSA9IHt9O1xuICAgIGlmICghX3Bvc2l0aW9uKSB7XG4gICAgICByZXR1cm4gc3R5bGU7XG4gICAgfVxuICAgIGxldCBwb3NpdGlvbiA9IF8uY2xvbmUoX3Bvc2l0aW9uKTtcbiAgICAvLyBpZiAod2luZG93LmlzUlRMKSB7XG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICBsZXQgdGVtcDtcbiAgICAgIGlmICh0eXBlb2YgcG9zaXRpb24ubGVmdCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHBvc2l0aW9uLnJpZ2h0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0ZW1wID0gcG9zaXRpb24ubGVmdDtcbiAgICAgICAgcG9zaXRpb24ubGVmdCA9IHBvc2l0aW9uLnJpZ2h0O1xuICAgICAgICBwb3NpdGlvbi5yaWdodCA9IHRlbXA7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwb3NpdGlvbi5sZWZ0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBwb3NpdGlvbi5yaWdodCA9IHBvc2l0aW9uLmxlZnQ7XG4gICAgICAgIGRlbGV0ZSBwb3NpdGlvbi5sZWZ0O1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcG9zaXRpb24ucmlnaHQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHBvc2l0aW9uLmxlZnQgPSBwb3NpdGlvbi5yaWdodDtcbiAgICAgICAgZGVsZXRlIHBvc2l0aW9uLnJpZ2h0O1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHBvc2l0aW9uLnBhZGRpbmdMZWZ0ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICB0eXBlb2YgcG9zaXRpb24ucGFkZGluZ1JpZ2h0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0ZW1wID0gcG9zaXRpb24ucGFkZGluZ0xlZnQ7XG4gICAgICAgIHBvc2l0aW9uLnBhZGRpbmdMZWZ0ID0gcG9zaXRpb24ucGFkZGluZ1JpZ2h0O1xuICAgICAgICBwb3NpdGlvbi5wYWRkaW5nUmlnaHQgPSB0ZW1wO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcG9zaXRpb24ucGFkZGluZ0xlZnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHBvc2l0aW9uLnBhZGRpbmdSaWdodCA9IHBvc2l0aW9uLnBhZGRpbmdMZWZ0O1xuICAgICAgICBkZWxldGUgcG9zaXRpb24ucGFkZGluZ0xlZnQ7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwb3NpdGlvbi5wYWRkaW5nUmlnaHQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHBvc2l0aW9uLnBhZGRpbmdMZWZ0ID0gcG9zaXRpb24ucGFkZGluZ1JpZ2h0O1xuICAgICAgICBkZWxldGUgcG9zaXRpb24ucGFkZGluZ1JpZ2h0O1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBwcyA9IFsnbGVmdCcsICd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ3dpZHRoJywgJ2hlaWdodCcsXG4gICAgICAncGFkZGluZycsICdwYWRkaW5nTGVmdCcsICdwYWRkaW5nUmlnaHQnLCAncGFkZGluZ1RvcCcsICdwYWRkaW5nQm90dG9tJ1xuICAgIF07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHAgPSBwc1tpXTtcbiAgICAgIGlmICh0eXBlb2YgcG9zaXRpb25bcF0gPT09ICdudW1iZXInKSB7XG4gICAgICAgIHN0eWxlW3BdID0gcG9zaXRpb25bcF0gKyAncHgnO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcG9zaXRpb25bcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHN0eWxlW3BdID0gcG9zaXRpb25bcF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocC5zdWJzdHIoMCwgNykgPT09ICdwYWRkaW5nJykge1xuICAgICAgICAgIHN0eWxlW3BdID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdHlsZVtwXSA9ICdhdXRvJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcG9zaXRpb24uekluZGV4ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy9zZXQgemluZGV4PWF1dG8gaW5zdGVhZCBvZiAwLCBiZWNhdXNlIGlubmVyIGRvbSBvZiB3aWRnZXQgbWF5IG5lZWQgdG8gb3ZlcmxheSBvdGhlciB3aWRnZXRcbiAgICAgIC8vdGhhdCBoYXMgdGhlIHNhbWUgemluZGV4LlxuICAgICAgc3R5bGUuekluZGV4ID0gdGhpcy5nbG9iYWxQYXJhbXMuamltdUNvbmZpZy56SW5kZXg7Ly8nYXV0byc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLnpJbmRleCA9IHBvc2l0aW9uLnpJbmRleDtcbiAgICB9XG4gICAgcmV0dXJuIHN0eWxlO1xuICB9XG5cbiAgLyoqXG4gICAqIOWPmOabtOajgOa1i1xuICAgKiBAcGFyYW0gY2RyIENoYW5nZURldGVjdG9yUmVmXG4gICAqL1xuICBzdGF0aWMgZGV0ZWN0Q2hhbmdlcyhjZHI6IENoYW5nZURldGVjdG9yUmVmKTogdm9pZCB7XG4gICAgaWYgKGNkciAmJiBjZHJbXCJkZXN0cm95ZWRcIl0gPT09IGZhbHNlKSB7XG4gICAgICBjZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbiAgfVxufVxuIl19