import { Injectable } from '@angular/core';
import * as _ from "lodash";
import * as i0 from "@angular/core";
export class SharedUtilsService {
    constructor() {
        this.widgetProperties = ['inPanel', 'hasLocale', 'hasStyle', 'hasConfig', 'hasUIFile',
            'hasSettingPage', 'hasSettingUIFile', 'hasSettingLocale', 'hasSettingStyle',
            'keepConfigAfterMapSwithched', 'isController', 'hasVersionManager', 'isThemeWidget',
            'supportMultiInstance'
        ];
    }
    isHostedService() {
        return false;
    }
    processWidgetProperties(manifest) {
        if (typeof manifest.properties === "undefined") {
            manifest.properties = {};
        }
        if (typeof manifest.properties.isController === 'undefined') {
            manifest.properties.isController = false;
        }
        if (typeof manifest.properties.isThemeWidget === 'undefined') {
            manifest.properties.isThemeWidget = false;
        }
        if (typeof manifest.properties.hasVersionManager === 'undefined') {
            manifest.properties.hasVersionManager = false;
        }
        this.widgetProperties.forEach(function (p) {
            if (typeof manifest.properties[p] === 'undefined') {
                manifest.properties[p] = true;
            }
        });
        manifest.properties.hasLocale = false;
        manifest.properties.supportMultiInstance = false;
        manifest.properties.hasVersionManager = false;
        manifest.properties.hasSettingLocale = false;
        if (manifest.properties.hasSetting !== true) {
            manifest.properties.hasSettingPage = false;
            manifest.properties.hasSettingUIFile = false;
            manifest.properties.hasSettingStyle = false;
        }
    }
    processWidgetUriPara(widget) {
        if (typeof (widget.uri) === "string" && widget.uri.length >= 1) {
            var url = widget.uri, paraString, p = new Object();
            var index = url.lastIndexOf("?");
            if (index >= 0) {
                widget.uri = url.substring(0, index);
                paraString = url.substring(index + 1);
                var strs = paraString.split("&");
                for (var i = 0; i < strs.length; i++) {
                    p[strs[i].split("=")[0]] = decodeURIComponent((strs[i].split("=")[1]));
                }
                widget.reqPara = p;
            }
        }
        else {
            widget.uri = "";
        }
    }
    getConfigElementById(appConfig, id) {
        var c;
        if (id === 'map') {
            return appConfig.map;
        }
        this.visitElement(appConfig, function (e) {
            if (e.id === id) {
                c = e;
                return true;
            }
        });
        return c;
    }
    visitElement(appConfig, cb) {
        this.visitBigSection(appConfig, 'widgetOnScreen', cb);
        this.visitBigSection(appConfig, 'widgetPool', cb);
    }
    visitBigSection(appConfig, section, cb) {
        var i, j, group, widget, isOnScreen = (section === 'widgetOnScreen'), tempobject, isHeadMenu = (section === "widgetPool");
        if (appConfig[section]) {
            if (appConfig[section].groups) {
                for (i = 0; i < appConfig[section].groups.length; i++) {
                    group = appConfig[section].groups[i];
                    tempobject = {
                        index: i,
                        isWidget: false,
                        groupId: group.id,
                        gid: group.id,
                        isThemeWidget: false,
                        isOnScreen: isOnScreen
                    };
                    group = _.extend(group, tempobject);
                    cb(group, tempobject);
                    if (!group.widgets) {
                        continue;
                    }
                    for (j = 0; j < group.widgets.length; j++) {
                        widget = group.widgets[j];
                        tempobject = {
                            index: j,
                            isWidget: true,
                            groupId: group.id,
                            gid: group.id,
                            isThemeWidget: false,
                            isOnScreen: isOnScreen
                        };
                        widget = _.extend(widget, tempobject);
                        Object.assign;
                        this.processWidgetUriPara(widget);
                        cb(widget, tempobject);
                    }
                }
            }
            if (appConfig[section].widgets) {
                let visitHeaderMenu = (widget, cb) => {
                    if (widget.children && widget.children.length >= 1) {
                        for (var k = 0; k < widget.children.length; k++) {
                            var item = widget.children[k];
                            tempobject = {
                                index: i,
                                isWidget: true,
                                groupId: section,
                                gid: section,
                                isThemeWidget: false,
                                isOnScreen: isOnScreen,
                                isHeadMenu: isHeadMenu
                            };
                            if (item.groupId || item.gid) {
                                tempobject.groupId = item.groupId || item.gid;
                                tempobject.gid = tempobject.groupId;
                            }
                            item = _.extend(item, tempobject);
                            this.processWidgetUriPara(item);
                            cb(item, tempobject);
                            visitHeaderMenu(item, cb);
                        }
                    }
                };
                for (i = 0; i < appConfig[section].widgets.length; i++) {
                    widget = appConfig[section].widgets[i];
                    tempobject = {
                        index: i,
                        isWidget: true,
                        groupId: section,
                        gid: section,
                        isThemeWidget: false,
                        isOnScreen: isOnScreen,
                        isHeadMenu: isHeadMenu
                    };
                    if (widget.groupId || widget.gid) {
                        tempobject.groupId = widget.groupId || widget.gid;
                        tempobject.gid = tempobject.groupId;
                    }
                    widget = _.extend(widget, tempobject);
                    this.processWidgetUriPara(widget);
                    cb(widget, tempobject);
                    visitHeaderMenu(widget, cb);
                }
            }
        }
    }
    getConfigElementByLabel(appConfig, label) {
        var c;
        if (label === 'map') {
            return appConfig.map;
        }
        this.visitElement(appConfig, function (e) {
            if (e.label || e.name === label) {
                c = e;
                return true;
            }
        });
        return c;
    }
    getConfigElementsByName(appConfig, name) {
        var elements = [];
        if (name === 'map') {
            return [appConfig.map];
        }
        this.visitElement(appConfig, function (e) {
            if (e.name === name) {
                elements.push(e);
            }
        });
        return elements;
    }
    getConfigElementsByUri(appConfig, uri) {
        var elements = [];
        if (uri === 'map') {
            return [appConfig.map];
        }
        this.visitElement(appConfig, function (e) {
            if (e.uri && e.uri.toLowerCase() === uri.toLowerCase()) {
                elements.push(e);
            }
        });
        return elements;
    }
    getWidgetNameFromUri(uri) {
        var segs = uri.split('/');
        segs.pop();
        return segs.pop();
    }
    getAmdFolderFromUri(uri) {
        var segs = uri.split('/');
        segs.pop();
        return segs.join('/') + '/';
    }
}
SharedUtilsService.ɵfac = function SharedUtilsService_Factory(t) { return new (t || SharedUtilsService)(); };
SharedUtilsService.ɵprov = i0.ɵɵdefineInjectable({ token: SharedUtilsService, factory: SharedUtilsService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SharedUtilsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLXV0aWxzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9lcHNnaXMvc2VydmljZXMvc2hhcmVkL3NoYXJlZC11dGlscy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7O0FBUTVCLE1BQU0sT0FBTyxrQkFBa0I7SUFPN0I7UUFMQSxxQkFBZ0IsR0FBa0IsQ0FBQyxTQUFTLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsV0FBVztZQUM3RixnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUI7WUFDM0UsNkJBQTZCLEVBQUUsY0FBYyxFQUFFLG1CQUFtQixFQUFFLGVBQWU7WUFDbkYsc0JBQXNCO1NBQ3ZCLENBQUM7SUFHRixDQUFDO0lBSUQsZUFBZTtRQUNiLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUtELHVCQUF1QixDQUFDLFFBQWE7UUFDbkMsSUFBSSxPQUFPLFFBQVEsQ0FBQyxVQUFVLEtBQUssV0FBVyxFQUFFO1lBQzlDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1NBQzFCO1FBQ0QsSUFBSSxPQUFPLFFBQVEsQ0FBQyxVQUFVLENBQUMsWUFBWSxLQUFLLFdBQVcsRUFBRTtZQUMzRCxRQUFRLENBQUMsVUFBVSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7U0FDMUM7UUFDRCxJQUFJLE9BQU8sUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEtBQUssV0FBVyxFQUFFO1lBQzVELFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztTQUMzQztRQUNELElBQUksT0FBTyxRQUFRLENBQUMsVUFBVSxDQUFDLGlCQUFpQixLQUFLLFdBQVcsRUFBRTtZQUNoRSxR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QVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XG5cbi8qKlxuICogY3JlYXRlIGJ5IHJ1aXIgMTkxMDE0ICBzaGFyZWQvdXRpbHMuanNcbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2hhcmVkVXRpbHNTZXJ2aWNlIHtcblxuICB3aWRnZXRQcm9wZXJ0aWVzOiBBcnJheTxzdHJpbmc+ID0gWydpblBhbmVsJywgJ2hhc0xvY2FsZScsICdoYXNTdHlsZScsICdoYXNDb25maWcnLCAnaGFzVUlGaWxlJyxcbiAgICAnaGFzU2V0dGluZ1BhZ2UnLCAnaGFzU2V0dGluZ1VJRmlsZScsICdoYXNTZXR0aW5nTG9jYWxlJywgJ2hhc1NldHRpbmdTdHlsZScsXG4gICAgJ2tlZXBDb25maWdBZnRlck1hcFN3aXRoY2hlZCcsICdpc0NvbnRyb2xsZXInLCAnaGFzVmVyc2lvbk1hbmFnZXInLCAnaXNUaGVtZVdpZGdldCcsXG4gICAgJ3N1cHBvcnRNdWx0aUluc3RhbmNlJ1xuICBdO1xuICBjb25zdHJ1Y3RvcigpIHtcblxuICB9XG4gIC8qKlxuICAgKiBcbiAgICovXG4gIGlzSG9zdGVkU2VydmljZSgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLyoqXG4gICAqIOe7mXdpZGdldOa3u+WKoOm7mOiupOWxnuaAp1xuICAgKiBAcGFyYW0gbWFuaWZlc3QgXG4gICAqL1xuICBwcm9jZXNzV2lkZ2V0UHJvcGVydGllcyhtYW5pZmVzdDogYW55KSB7XG4gICAgaWYgKHR5cGVvZiBtYW5pZmVzdC5wcm9wZXJ0aWVzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBtYW5pZmVzdC5wcm9wZXJ0aWVzID0ge307XG4gICAgfVxuICAgIGlmICh0eXBlb2YgbWFuaWZlc3QucHJvcGVydGllcy5pc0NvbnRyb2xsZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBtYW5pZmVzdC5wcm9wZXJ0aWVzLmlzQ29udHJvbGxlciA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG1hbmlmZXN0LnByb3BlcnRpZXMuaXNUaGVtZVdpZGdldCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIG1hbmlmZXN0LnByb3BlcnRpZXMuaXNUaGVtZVdpZGdldCA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG1hbmlmZXN0LnByb3BlcnRpZXMuaGFzVmVyc2lvbk1hbmFnZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBtYW5pZmVzdC5wcm9wZXJ0aWVzLmhhc1ZlcnNpb25NYW5hZ2VyID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy53aWRnZXRQcm9wZXJ0aWVzLmZvckVhY2goZnVuY3Rpb24gKHApIHtcbiAgICAgIGlmICh0eXBlb2YgbWFuaWZlc3QucHJvcGVydGllc1twXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbWFuaWZlc3QucHJvcGVydGllc1twXSA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgbWFuaWZlc3QucHJvcGVydGllcy5oYXNMb2NhbGUgPSBmYWxzZTtcbiAgICBtYW5pZmVzdC5wcm9wZXJ0aWVzLnN1cHBvcnRNdWx0aUluc3RhbmNlID0gZmFsc2U7XG4gICAgbWFuaWZlc3QucHJvcGVydGllcy5oYXNWZXJzaW9uTWFuYWdlciA9IGZhbHNlO1xuICAgIG1hbmlmZXN0LnByb3BlcnRpZXMuaGFzU2V0dGluZ0xvY2FsZSA9IGZhbHNlO1xuXG4gICAgaWYgKG1hbmlmZXN0LnByb3BlcnRpZXMuaGFzU2V0dGluZyAhPT0gdHJ1ZSkge1xuICAgICAgbWFuaWZlc3QucHJvcGVydGllcy5oYXNTZXR0aW5nUGFnZSA9IGZhbHNlO1xuICAgICAgbWFuaWZlc3QucHJvcGVydGllcy5oYXNTZXR0aW5nVUlGaWxlID0gZmFsc2U7XG4gICAgICBtYW5pZmVzdC5wcm9wZXJ0aWVzLmhhc1NldHRpbmdTdHlsZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICog5aaC5p6c57uE5Lu255qEdXJp5Lit5pyJ5Y+C5pWw77yM5YiZ6Kej5p6Q5Yiw57uE5Lu255qEcmVxUGFyYeWxnuaAp1xuICAgKiBAcGFyYW0gd2lkZ2V0IFxuICAgKi9cbiAgcHJvY2Vzc1dpZGdldFVyaVBhcmEod2lkZ2V0OiBhbnkpIHtcbiAgICBpZiAodHlwZW9mICh3aWRnZXQudXJpKSA9PT0gXCJzdHJpbmdcIiAmJiB3aWRnZXQudXJpLmxlbmd0aCA+PSAxKSB7XG4gICAgICB2YXIgdXJsID0gd2lkZ2V0LnVyaSxcbiAgICAgICAgcGFyYVN0cmluZywgcCA9IG5ldyBPYmplY3QoKTtcbiAgICAgIHZhciBpbmRleCA9IHVybC5sYXN0SW5kZXhPZihcIj9cIik7XG4gICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICB3aWRnZXQudXJpID0gdXJsLnN1YnN0cmluZygwLCBpbmRleCk7XG4gICAgICAgIHBhcmFTdHJpbmcgPSB1cmwuc3Vic3RyaW5nKGluZGV4ICsgMSk7XG4gICAgICAgIHZhciBzdHJzID0gcGFyYVN0cmluZy5zcGxpdChcIiZcIik7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3Rycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHBbc3Ryc1tpXS5zcGxpdChcIj1cIilbMF1dID0gZGVjb2RlVVJJQ29tcG9uZW50KChzdHJzW2ldLnNwbGl0KFwiPVwiKVsxXSkpO1xuICAgICAgICB9XG4gICAgICAgIHdpZGdldC5yZXFQYXJhID0gcDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgd2lkZ2V0LnVyaSA9IFwiXCI7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIGFwcENvbmZpZyDphY3nva7lr7nosaFcbiAgICogQHBhcmFtIGlkIFxuICAgKi9cbiAgZ2V0Q29uZmlnRWxlbWVudEJ5SWQoYXBwQ29uZmlnLCBpZCkge1xuICAgIHZhciBjO1xuICAgIGlmIChpZCA9PT0gJ21hcCcpIHtcbiAgICAgIHJldHVybiBhcHBDb25maWcubWFwO1xuICAgIH1cbiAgICB0aGlzLnZpc2l0RWxlbWVudChhcHBDb25maWcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoZS5pZCA9PT0gaWQpIHtcbiAgICAgICAgYyA9IGU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBjO1xuICB9XG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIGFwcENvbmZpZyBcbiAgICogQHBhcmFtIGNiIFxuICAgKi9cbiAgdmlzaXRFbGVtZW50KGFwcENvbmZpZzogYW55LCBjYjogRnVuY3Rpb24pIHtcbiAgICB0aGlzLnZpc2l0QmlnU2VjdGlvbihhcHBDb25maWcsICd3aWRnZXRPblNjcmVlbicsIGNiKTtcbiAgICB0aGlzLnZpc2l0QmlnU2VjdGlvbihhcHBDb25maWcsICd3aWRnZXRQb29sJywgY2IpO1xuICB9XG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIGFwcENvbmZpZyBcbiAgICogQHBhcmFtIHNlY3Rpb24gXG4gICAqIEBwYXJhbSBjYiBcbiAgICovXG4gIHByaXZhdGUgdmlzaXRCaWdTZWN0aW9uKGFwcENvbmZpZzogYW55LCBzZWN0aW9uOiBzdHJpbmcsIGNiOiBGdW5jdGlvbikge1xuICAgIHZhciBpLCBqLCBncm91cCwgd2lkZ2V0LCBpc09uU2NyZWVuID0gKHNlY3Rpb24gPT09ICd3aWRnZXRPblNjcmVlbicpLFxuICAgICAgdGVtcG9iamVjdCwgaXNIZWFkTWVudSA9IChzZWN0aW9uID09PSBcIndpZGdldFBvb2xcIik7XG5cblxuICAgIGlmIChhcHBDb25maWdbc2VjdGlvbl0pIHtcbiAgICAgIGlmIChhcHBDb25maWdbc2VjdGlvbl0uZ3JvdXBzKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBhcHBDb25maWdbc2VjdGlvbl0uZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgZ3JvdXAgPSBhcHBDb25maWdbc2VjdGlvbl0uZ3JvdXBzW2ldO1xuICAgICAgICAgIHRlbXBvYmplY3QgPSB7XG4gICAgICAgICAgICBpbmRleDogaSxcbiAgICAgICAgICAgIGlzV2lkZ2V0OiBmYWxzZSxcbiAgICAgICAgICAgIGdyb3VwSWQ6IGdyb3VwLmlkLFxuICAgICAgICAgICAgZ2lkOiBncm91cC5pZCxcbiAgICAgICAgICAgIGlzVGhlbWVXaWRnZXQ6IGZhbHNlLFxuICAgICAgICAgICAgaXNPblNjcmVlbjogaXNPblNjcmVlblxuICAgICAgICAgIH07XG4gICAgICAgICAgZ3JvdXAgPSBfLmV4dGVuZChncm91cCwgdGVtcG9iamVjdCk7Ly9PYmplY3QuYXNzaWduKCk7XG4gICAgICAgICAgY2IoZ3JvdXAsIHRlbXBvYmplY3QpO1xuICAgICAgICAgIGlmICghZ3JvdXAud2lkZ2V0cykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBncm91cC53aWRnZXRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICB3aWRnZXQgPSBncm91cC53aWRnZXRzW2pdO1xuICAgICAgICAgICAgdGVtcG9iamVjdCA9IHtcbiAgICAgICAgICAgICAgaW5kZXg6IGosXG4gICAgICAgICAgICAgIGlzV2lkZ2V0OiB0cnVlLFxuICAgICAgICAgICAgICBncm91cElkOiBncm91cC5pZCxcbiAgICAgICAgICAgICAgZ2lkOiBncm91cC5pZCxcbiAgICAgICAgICAgICAgLy9pc1RoZW1lV2lkZ2V0OiB3aWRnZXQudXJpICYmIHdpZGdldC51cmkuaW5kZXhPZigndGhlbWVzLycgKyBhcHBDb25maWcudGhlbWUubmFtZSkgPiAtMSxcbiAgICAgICAgICAgICAgaXNUaGVtZVdpZGdldDpmYWxzZSxcbiAgICAgICAgICAgICAgaXNPblNjcmVlbjogaXNPblNjcmVlblxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHdpZGdldCA9IF8uZXh0ZW5kKHdpZGdldCwgdGVtcG9iamVjdCk7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NXaWRnZXRVcmlQYXJhKHdpZGdldCk7XG4gICAgICAgICAgICBjYih3aWRnZXQsIHRlbXBvYmplY3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoYXBwQ29uZmlnW3NlY3Rpb25dLndpZGdldHMpIHtcbiAgICAgICAgbGV0IHZpc2l0SGVhZGVyTWVudSA9ICh3aWRnZXQsIGNiKSA9PiB7IC8v5pSv5oyB5a2Q57uE5Lu2XG4gICAgICAgICAgaWYgKHdpZGdldC5jaGlsZHJlbiAmJiB3aWRnZXQuY2hpbGRyZW4ubGVuZ3RoID49IDEpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgd2lkZ2V0LmNoaWxkcmVuLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgIHZhciBpdGVtID0gd2lkZ2V0LmNoaWxkcmVuW2tdO1xuICAgICAgICAgICAgICB0ZW1wb2JqZWN0ID0ge1xuICAgICAgICAgICAgICAgIGluZGV4OiBpLFxuICAgICAgICAgICAgICAgIGlzV2lkZ2V0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGdyb3VwSWQ6IHNlY3Rpb24sXG4gICAgICAgICAgICAgICAgZ2lkOiBzZWN0aW9uLCAvL+acieeahOWcsOaWueeUqOeahGdpZFxuICAgICAgICAgICAgICAgIC8vaXNUaGVtZVdpZGdldDogaXRlbS51cmkgJiYgaXRlbS51cmkuaW5kZXhPZigndGhlbWVzLycgKyBhcHBDb25maWcudGhlbWUubmFtZSkgPiAtMSxcbiAgICAgICAgICAgICAgICBpc1RoZW1lV2lkZ2V0OmZhbHNlLFxuICAgICAgICAgICAgICAgIGlzT25TY3JlZW46IGlzT25TY3JlZW4sXG4gICAgICAgICAgICAgICAgaXNIZWFkTWVudTogaXNIZWFkTWVudVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBpZiAoaXRlbS5ncm91cElkIHx8IGl0ZW0uZ2lkKSB7XG4gICAgICAgICAgICAgICAgdGVtcG9iamVjdC5ncm91cElkID0gaXRlbS5ncm91cElkIHx8IGl0ZW0uZ2lkO1xuICAgICAgICAgICAgICAgIHRlbXBvYmplY3QuZ2lkID0gdGVtcG9iamVjdC5ncm91cElkO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGl0ZW0gPSBfLmV4dGVuZChpdGVtLCB0ZW1wb2JqZWN0KVxuICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NXaWRnZXRVcmlQYXJhKGl0ZW0pO1xuICAgICAgICAgICAgICBjYihpdGVtLCB0ZW1wb2JqZWN0KTtcbiAgICAgICAgICAgICAgdmlzaXRIZWFkZXJNZW51KGl0ZW0sIGNiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGFwcENvbmZpZ1tzZWN0aW9uXS53aWRnZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgd2lkZ2V0ID0gYXBwQ29uZmlnW3NlY3Rpb25dLndpZGdldHNbaV07XG4gICAgICAgICAgdGVtcG9iamVjdCA9IHtcbiAgICAgICAgICAgIGluZGV4OiBpLFxuICAgICAgICAgICAgaXNXaWRnZXQ6IHRydWUsXG4gICAgICAgICAgICBncm91cElkOiBzZWN0aW9uLFxuICAgICAgICAgICAgZ2lkOiBzZWN0aW9uLCAvL+acieeahOWcsOaWueeUqOeahGdpZFxuICAgICAgICAgICAgLy9pc1RoZW1lV2lkZ2V0OiB3aWRnZXQudXJpICYmIHdpZGdldC51cmkuaW5kZXhPZigndGhlbWVzLycgKyBhcHBDb25maWcudGhlbWUubmFtZSkgPiAtMSxcbiAgICAgICAgICAgIGlzVGhlbWVXaWRnZXQ6ZmFsc2UsXG4gICAgICAgICAgICBpc09uU2NyZWVuOiBpc09uU2NyZWVuLFxuICAgICAgICAgICAgaXNIZWFkTWVudTogaXNIZWFkTWVudVxuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKHdpZGdldC5ncm91cElkIHx8IHdpZGdldC5naWQpIHtcbiAgICAgICAgICAgIHRlbXBvYmplY3QuZ3JvdXBJZCA9IHdpZGdldC5ncm91cElkIHx8IHdpZGdldC5naWQ7XG4gICAgICAgICAgICB0ZW1wb2JqZWN0LmdpZCA9IHRlbXBvYmplY3QuZ3JvdXBJZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgd2lkZ2V0ID0gXy5leHRlbmQod2lkZ2V0LCB0ZW1wb2JqZWN0KVxuICAgICAgICAgIHRoaXMucHJvY2Vzc1dpZGdldFVyaVBhcmEod2lkZ2V0KTtcbiAgICAgICAgICBjYih3aWRnZXQsIHRlbXBvYmplY3QpO1xuICAgICAgICAgIHZpc2l0SGVhZGVyTWVudSh3aWRnZXQsIGNiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAvKipcbiAgICog5qC55o2ubGFiZWzmiJZuYW1l5bGe5oCn5Y+W5b6X6YWN572uXG4gICAqIEBwYXJhbSBhcHBDb25maWcgXG4gICAqIEBwYXJhbSBsYWJlbCBcbiAgICovXG4gIGdldENvbmZpZ0VsZW1lbnRCeUxhYmVsKGFwcENvbmZpZzogYW55LCBsYWJlbDogc3RyaW5nKSB7XG4gICAgdmFyIGM7XG4gICAgaWYgKGxhYmVsID09PSAnbWFwJykge1xuICAgICAgcmV0dXJuIGFwcENvbmZpZy5tYXA7XG4gICAgfVxuICAgIHRoaXMudmlzaXRFbGVtZW50KGFwcENvbmZpZywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChlLmxhYmVsIHx8IGUubmFtZSA9PT0gbGFiZWwpIHtcbiAgICAgICAgYyA9IGU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBjO1xuXG4gIH1cbiAgLyoqXG4gICAqIOagueaNrm5hbWXlsZ7mgKflj5blvpfphY3nva5cbiAgICogQHBhcmFtIGFwcENvbmZpZyBcbiAgICogQHBhcmFtIG5hbWUgXG4gICAqL1xuICBnZXRDb25maWdFbGVtZW50c0J5TmFtZShhcHBDb25maWc6IGFueSwgbmFtZTogc3RyaW5nKSB7XG4gICAgdmFyIGVsZW1lbnRzID0gW107XG4gICAgaWYgKG5hbWUgPT09ICdtYXAnKSB7XG4gICAgICByZXR1cm4gW2FwcENvbmZpZy5tYXBdO1xuICAgIH1cbiAgICB0aGlzLnZpc2l0RWxlbWVudChhcHBDb25maWcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoZS5uYW1lID09PSBuYW1lKSB7XG4gICAgICAgIGVsZW1lbnRzLnB1c2goZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGVsZW1lbnRzO1xuICB9XG4gIC8qKlxuICAgKiDmoLnmja51cmnlj5blvpfphY3nva5cbiAgICogQHBhcmFtIGFwcENvbmZpZyBcbiAgICogQHBhcmFtIHVyaSBcbiAgICovXG4gIGdldENvbmZpZ0VsZW1lbnRzQnlVcmkoYXBwQ29uZmlnOiBhbnksIHVyaTogc3RyaW5nKSB7XG4gICAgdmFyIGVsZW1lbnRzID0gW107XG4gICAgaWYgKHVyaSA9PT0gJ21hcCcpIHtcbiAgICAgIHJldHVybiBbYXBwQ29uZmlnLm1hcF07XG4gICAgfVxuICAgIHRoaXMudmlzaXRFbGVtZW50KGFwcENvbmZpZywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChlLnVyaSAmJiBlLnVyaS50b0xvd2VyQ2FzZSgpID09PSB1cmkudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICBlbGVtZW50cy5wdXNoKGUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBlbGVtZW50cztcbiAgfVxuICAvKipcbiAgICog5qC55o2udXJp5Y+W5b6X57uE5Lu25ZCNXG4gICAqIEBwYXJhbSB1cmkgXG4gICAqL1xuICBnZXRXaWRnZXROYW1lRnJvbVVyaSh1cmk6IHN0cmluZykge1xuICAgIHZhciBzZWdzID0gdXJpLnNwbGl0KCcvJyk7XG4gICAgc2Vncy5wb3AoKTtcbiAgICByZXR1cm4gc2Vncy5wb3AoKTtcbiAgfVxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSB1cmkgXG4gICAqL1xuICBnZXRBbWRGb2xkZXJGcm9tVXJpKHVyaTogc3RyaW5nKSB7XG4gICAgdmFyIHNlZ3MgPSB1cmkuc3BsaXQoJy8nKTtcbiAgICBzZWdzLnBvcCgpO1xuICAgIHJldHVybiBzZWdzLmpvaW4oJy8nKSArICcvJztcbiAgfVxufVxuIl19