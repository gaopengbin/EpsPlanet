import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { RequestResultModel } from '.././../../models/http/request.result';
import { ComponentContainerDirective } from '../../../directives/component-container.directive';
import { JsonEditorComponent } from '../../shared/json-editor/json-editor.component';
import { BaseSettingComponent } from '../base-setting.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../shared/json-editor/json-editor.component";
import * as i3 from "../../../directives/component-container.directive";
import * as i4 from "@angular/forms";
const _c0 = ["config"];
const _c1 = ["manifest"];
function WidgetSettingComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵelementStart(2, "input", 7);
    i0.ɵɵlistener("ngModelChange", function WidgetSettingComponent_div_1_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.switchChecked = $event; })("change", function WidgetSettingComponent_div_1_Template_input_change_2_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.changeMode($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " \u7F16\u8F91\u5668 ");
    i0.ɵɵelementStart(4, "label", 8);
    i0.ɵɵelement(5, "em");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r0.switchChecked);
} }
const _c2 = function () { return { name: "\u7EC4\u4EF6\u914D\u7F6E\u4FE1\u606F" }; };
const _c3 = function () { return { name: "\u7EC4\u4EF6\u4FE1\u606F" }; };
export class WidgetSettingComponent extends BaseSettingComponent {
    constructor() {
        super();
        this.currentMode = 0;
        this.showSwitchBtn = false;
        this.previousMode = 0;
        this.switchChecked = false;
        this.needLoadManifest = true;
    }
    ngOnInit() {
        this.setValidateResult(true);
        this.setServiceInjector(this.widgetInstance.componentLoader.getServiceInjector());
        this.widgetConfig = this.widgetInstance.widgetConfig;
        this.configJsonWebPath = this.widgetConfig.folderUrl.split('?')[0] + (this.widgetConfig.configPath || this.configFileName);
        this.manifestJsonWebPath = this.widgetConfig.folderUrl.split('?')[0] + this.manifestFileName;
        super.ngOnInit();
    }
    ngAfterViewInit() {
        this.loadWidgetConfig();
        if (this.needLoadManifest) {
            this.loadWidgetManifest();
        }
        super.ngAfterViewInit();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    switchToConfigOrManifest() {
        if (this.currentMode != 2) {
            this.previousMode = this.currentMode;
            this.showSwitchBtn = false;
            this.currentMode = 2;
        }
        else {
            this.currentMode = this.previousMode;
            if (this.settingComponentInstance) {
                this.showSwitchBtn = true;
            }
        }
    }
    changeMode(evt) {
        if (this.switchChecked) {
            this.currentMode = 1;
        }
        else {
            this.currentMode = 3;
        }
    }
    onSaveError(error) {
        if (this.settingComponentInstance) {
            this.settingComponentInstance.onSaveError(error);
        }
        else {
            console.error(error);
        }
    }
    saveAll() {
        return new Promise((resolve, reject) => {
            let result;
            switch (this.currentMode) {
                case 1:
                    result = this.getValidateResult();
                    if (result.success && this.editorConfig) {
                        this.saveConfigJson(this.editorConfig.getText()).then(res => {
                            if (res.success) {
                                res.data = {
                                    config: this.editorConfig.value,
                                    manifest: this.editorManifest.value
                                };
                            }
                            resolve(res);
                        }).catch(reject);
                    }
                    else {
                        resolve(new RequestResultModel(false, "验证失败"));
                    }
                    break;
                case 2:
                    result = this.getValidateResult();
                    if (result.success && this.editorManifest) {
                        this.saveManifestJson(this.editorManifest.getText()).then(res => {
                            if (res.success) {
                                res.data = {
                                    config: this.editorConfig.value,
                                    manifest: this.editorManifest.value
                                };
                            }
                            resolve(res);
                        }).catch(reject);
                    }
                    else {
                        resolve(new RequestResultModel(false, "验证失败"));
                    }
                    break;
                case 3:
                    if (this.settingComponentInstance) {
                        result = this.settingComponentInstance.getValidateResult();
                        if (result.success) {
                            this.settingComponentInstance.saveConfigJson(result.data).then(res => {
                                if (res.success) {
                                    res.data = {
                                        config: result.data,
                                        manifest: this.editorManifest.value
                                    };
                                }
                                resolve(res);
                            }).catch(reject);
                        }
                        else {
                            resolve(new RequestResultModel(false, "验证失败"));
                        }
                    }
                    else {
                        resolve(new RequestResultModel(false, "无组件，无法保存"));
                    }
                    break;
                default:
                    resolve(new RequestResultModel(false, "不支持的模式"));
                    break;
            }
        });
    }
    loadWidgetConfig() {
        if (!this.configJsonWebPath) {
            console.log("configJsonWebPath is null");
            return;
        }
        this.settingService.getConfigContent(this.configJsonWebPath).then(result => {
            this.configJson = result;
            this.onConfigJsonLoad(true, null);
        }).catch(err => this.onConfigJsonLoad(false, err));
    }
    loadWidgetManifest() {
        if (!this.manifestJsonWebPath) {
            console.log("manifestJsonWebPath is null");
            return;
        }
        this.settingService.getConfigContent(this.manifestJsonWebPath).then(result => {
            this.manifestJson = result;
            this.onManifestJsonLoad(true, null);
        }).catch(err => this.onManifestJsonLoad(false, err));
    }
    onConfigJsonLoad(succes, err) {
        if (!succes) {
            console.error(err);
        }
        if (this.widgetConfig.hasSetting === true) {
            const settingUri = this.widgetConfig.uri + "-setting";
            const comp = this.componentLoader.findComponent(settingUri);
            if (!comp) {
                console.info(`未找到setting组件[${settingUri}]，请检查组件定义`);
                this.currentMode = 1;
                return;
            }
            this.showSwitchBtn = true;
            this.currentMode = 3;
            this.switchChecked = false;
            const compRef = this.componentLoader.createComponent(comp, null, this.container);
            this.settingComponentInstance = compRef.instance;
            this.settingComponentInstance.widgetInstance = this.widgetInstance;
            this.settingComponentInstance.configJson = this.configJson;
            this.settingComponentInstance.configJsonWebPath = this.configJsonWebPath;
            this.settingComponentInstance.manifestJson = this.manifestJson;
            this.settingComponentInstance.manifestJsonWebPath = this.manifestJsonWebPath;
            this.container.clear();
            this.container.insert(compRef.hostView, 0);
        }
        else {
            this.currentMode = 1;
        }
    }
    onManifestJsonLoad(succes, err) {
        if (!succes) {
            console.error(err);
        }
    }
}
WidgetSettingComponent.ɵfac = function WidgetSettingComponent_Factory(t) { return new (t || WidgetSettingComponent)(); };
WidgetSettingComponent.ɵcmp = i0.ɵɵdefineComponent({ type: WidgetSettingComponent, selectors: [["epsgis-widget-setting"]], viewQuery: function WidgetSettingComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 1, JsonEditorComponent);
        i0.ɵɵviewQuery(_c1, 1, JsonEditorComponent);
        i0.ɵɵviewQuery(ComponentContainerDirective, 1, ViewContainerRef);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.editorConfig = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.editorManifest = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.container = _t.first);
    } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 10, vars: 17, consts: [["class", "switch", 4, "ngIf"], [1, "margin5"], [3, "data", "options", "dataChange"], ["config", ""], ["component-host", ""], ["manifest", ""], [1, "switch"], ["type", "checkbox", "id", "custom-ui", 3, "ngModel", "ngModelChange", "change"], ["for", "custom-ui"]], template: function WidgetSettingComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵtemplate(1, WidgetSettingComponent_div_1_Template, 6, 1, "div", 0);
        i0.ɵɵelement(2, "div", 1);
        i0.ɵɵelementStart(3, "epsgis-json-editor", 2, 3);
        i0.ɵɵlistener("dataChange", function WidgetSettingComponent_Template_epsgis_json_editor_dataChange_3_listener($event) { return ctx.configJson = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div");
        i0.ɵɵelementContainer(6, 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div");
        i0.ɵɵelementStart(8, "epsgis-json-editor", 2, 5);
        i0.ɵɵlistener("dataChange", function WidgetSettingComponent_Template_epsgis_json_editor_dataChange_8_listener($event) { return ctx.manifestJson = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassProp("show-config", ctx.currentMode == 1 || ctx.currentMode == 3);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showSwitchBtn);
        i0.ɵɵadvance(2);
        i0.ɵɵclassProp("hide", ctx.currentMode != 1);
        i0.ɵɵproperty("data", ctx.configJson)("options", i0.ɵɵpureFunction0(15, _c2));
        i0.ɵɵadvance(2);
        i0.ɵɵclassProp("hide", ctx.currentMode != 3);
        i0.ɵɵadvance(2);
        i0.ɵɵclassProp("show-manifest", ctx.currentMode == 2);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("hide", ctx.currentMode != 2);
        i0.ɵɵproperty("data", ctx.manifestJson)("options", i0.ɵɵpureFunction0(16, _c3));
    } }, directives: [i1.NgIf, i2.JsonEditorComponent, i3.ComponentContainerDirective, i4.CheckboxControlValueAccessor, i4.NgControlStatus, i4.NgModel], styles: [".show-manifest[_ngcontent-%COMP%]{display:\"\";height:100%}.show-config[_ngcontent-%COMP%]{display:\"\";height:calc(100% - 22px)}.hide[_ngcontent-%COMP%]{display:none}.margin5[_ngcontent-%COMP%]{margin-top:5px}.switch[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{clear:both;display:block;line-height:22px;text-align:right}.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:none}.switch[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:52px;background:#ccc;height:22px;border-radius:11px;float:right;box-shadow:inset 0 1px 2px rgba(0,0,0,.1);margin-left:20px}.switch[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{width:26px;height:20px;float:left;margin:1px;border-radius:10px;box-shadow:2px 3px 8px rgba(0,0,0,.1);background:#fff}.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]{background:#4390f7}.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{float:right}.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled + label[_ngcontent-%COMP%]{opacity:.5}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WidgetSettingComponent, [{
        type: Component,
        args: [{
                selector: 'epsgis-widget-setting',
                templateUrl: './widget-setting.component.html',
                styleUrls: ['./widget-setting.component.scss'],
            }]
    }], function () { return []; }, { editorConfig: [{
            type: ViewChild,
            args: ["config", { read: JsonEditorComponent, static: false }]
        }], editorManifest: [{
            type: ViewChild,
            args: ["manifest", { read: JsonEditorComponent, static: false }]
        }], container: [{
            type: ViewChild,
            args: [ComponentContainerDirective, { read: ViewContainerRef, static: false }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LXNldHRpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZXBzZ2lzL2NvbXBvbmVudHMvc2V0dGluZy93aWRnZXQtc2V0dGluZy93aWRnZXQtc2V0dGluZy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9lcHNnaXMvY29tcG9uZW50cy9zZXR0aW5nL3dpZGdldC1zZXR0aW5nL3dpZGdldC1zZXR0aW5nLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7Ozs7Ozs7O0lDUTdELDhCQUEwQztJQUN0Qyw0QkFBTTtJQUNGLGdDQUFrRztJQUE1RCx5TkFBMkIsMExBQUE7SUFBakUsaUJBQWtHO0lBQ2xHLG9DQUNBO0lBQUEsZ0NBQXVCO0lBQUEscUJBQVM7SUFBQSxpQkFBUTtJQUM1QyxpQkFBTztJQUNYLGlCQUFNOzs7SUFKd0MsZUFBMkI7SUFBM0IsOENBQTJCOzs7O0FERzdFLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxvQkFBb0I7SUFTOUQ7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQUxWLGdCQUFXLEdBQVMsQ0FBQyxDQUFDO1FBQ3RCLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBQ3ZCLGlCQUFZLEdBQVMsQ0FBQyxDQUFDO1FBQy9CLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBRzdCLElBQUksQ0FB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QjsrQkFDSixtQkFBbUI7K0JBQ2pCLG1CQUFtQjt1QkFDdkMsMkJBQTJCLEtBQVUsZ0JBQWdCOzs7Ozs7O1FDaEJsRSwyQkFBNEQ7UUFReEQsdUVBTU07UUFDTix5QkFBMkI7UUFDM0IsZ0RBQ2dDO1FBRDBCLDBKQUFxQjtRQUUvRSxpQkFBcUI7UUFDckIsMkJBQW1DO1FBQy9CLDJCQUE0QztRQUNoRCxpQkFBTTtRQUNWLGlCQUFNO1FBQ04sMkJBQTRDO1FBQ3hDLGdEQUE4RztRQUFsRCw0SkFBdUI7UUFDbkYsaUJBQXFCO1FBQ3pCLGlCQUFNOztRQTFCRCwyRUFBc0Q7UUFRbEMsZUFBbUI7UUFBbkIsd0NBQW1CO1FBUVosZUFBNkI7UUFBN0IsNENBQTZCO1FBQUMscUNBQXFCLHdDQUFBO1FBRzFFLGVBQTZCO1FBQTdCLDRDQUE2QjtRQUlqQyxlQUFzQztRQUF0QyxxREFBc0M7UUFDVCxlQUE2QjtRQUE3Qiw0Q0FBNkI7UUFBQyx1Q0FBdUIsd0NBQUE7O3VGRFgxRSxzQkFBc0I7Y0FMbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFdBQVcsRUFBRSxpQ0FBaUM7Z0JBQzlDLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO2FBQy9DO3NDQUVvRSxZQUFZO2tCQUE5RSxTQUFTO21CQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxtQkFBbUIsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO1lBQ0ksY0FBYztrQkFBbEYsU0FBUzttQkFBQyxVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtZQUNnQixTQUFTO2tCQUEzRixTQUFTO21CQUFDLDJCQUEyQixFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVxdWVzdFJlc3VsdE1vZGVsIH0gZnJvbSAnLi4vLi8uLi8uLi9tb2RlbHMvaHR0cC9yZXF1ZXN0LnJlc3VsdCc7XG5pbXBvcnQgeyBDb21wb25lbnRDb250YWluZXJEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi8uLi9kaXJlY3RpdmVzL2NvbXBvbmVudC1jb250YWluZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IEpzb25FZGl0b3JDb21wb25lbnQgfSBmcm9tICcuLi8uLi9zaGFyZWQvanNvbi1lZGl0b3IvanNvbi1lZGl0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IEJhc2VTZXR0aW5nQ29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZS1zZXR0aW5nLmNvbXBvbmVudCc7XG4vKipcbiAqIDHkuLpjb25maWfvvIwy5Li6bWFuaWZlc3TvvIwz5Li6Y29uZmln5a6a5Yi25byA5Y+RXG4gKi9cbmRlY2xhcmUgdHlwZSBtb2RlID0gMCB8IDEgfCAyIHwgMztcbi8qKlxuICog57uE5Lu26K6+572uXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Vwc2dpcy13aWRnZXQtc2V0dGluZycsXG4gIHRlbXBsYXRlVXJsOiAnLi93aWRnZXQtc2V0dGluZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3dpZGdldC1zZXR0aW5nLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFdpZGdldFNldHRpbmdDb21wb25lbnQgZXh0ZW5kcyBCYXNlU2V0dGluZ0NvbXBvbmVudCB7XG4gIEBWaWV3Q2hpbGQoXCJjb25maWdcIiwgeyByZWFkOiBKc29uRWRpdG9yQ29tcG9uZW50LCBzdGF0aWM6IGZhbHNlIH0pIGVkaXRvckNvbmZpZzogSnNvbkVkaXRvckNvbXBvbmVudDtcbiAgQFZpZXdDaGlsZChcIm1hbmlmZXN0XCIsIHsgcmVhZDogSnNvbkVkaXRvckNvbXBvbmVudCwgc3RhdGljOiBmYWxzZSB9KSBlZGl0b3JNYW5pZmVzdDogSnNvbkVkaXRvckNvbXBvbmVudDtcbiAgQFZpZXdDaGlsZChDb21wb25lbnRDb250YWluZXJEaXJlY3RpdmUsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiBmYWxzZSB9KSBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XG4gIHNldHRpbmdDb21wb25lbnRJbnN0YW5jZTogQmFzZVNldHRpbmdDb21wb25lbnQ7XG4gIGN1cnJlbnRNb2RlOiBtb2RlID0gMDtcbiAgc2hvd1N3aXRjaEJ0bjogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIHByZXZpb3VzTW9kZTogbW9kZSA9IDA7XG4gIHN3aXRjaENoZWNrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm5lZWRMb2FkTWFuaWZlc3QgPSB0cnVlO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXRWYWxpZGF0ZVJlc3VsdCh0cnVlKTsvL3Rlc3RcbiAgICB0aGlzLnNldFNlcnZpY2VJbmplY3Rvcih0aGlzLndpZGdldEluc3RhbmNlLmNvbXBvbmVudExvYWRlci5nZXRTZXJ2aWNlSW5qZWN0b3IoKSk7XG4gICAgdGhpcy53aWRnZXRDb25maWcgPSB0aGlzLndpZGdldEluc3RhbmNlLndpZGdldENvbmZpZztcbiAgICB0aGlzLmNvbmZpZ0pzb25XZWJQYXRoID0gdGhpcy53aWRnZXRDb25maWcuZm9sZGVyVXJsLnNwbGl0KCc/JylbMF0gKyAodGhpcy53aWRnZXRDb25maWcuY29uZmlnUGF0aCB8fCB0aGlzLmNvbmZpZ0ZpbGVOYW1lKTtcbiAgICB0aGlzLm1hbmlmZXN0SnNvbldlYlBhdGggPSB0aGlzLndpZGdldENvbmZpZy5mb2xkZXJVcmwuc3BsaXQoJz8nKVswXSArIHRoaXMubWFuaWZlc3RGaWxlTmFtZTtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICB9XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAvL+WIhuW8gOWKoOi9veS4pOS4quaWh+S7tlxuICAgIHRoaXMubG9hZFdpZGdldENvbmZpZygpO1xuICAgIGlmICh0aGlzLm5lZWRMb2FkTWFuaWZlc3QpIHtcbiAgICAgIHRoaXMubG9hZFdpZGdldE1hbmlmZXN0KCk7XG4gICAgfVxuICAgIHN1cGVyLm5nQWZ0ZXJWaWV3SW5pdCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgc3VwZXIubmdPbkRlc3Ryb3koKTtcbiAgfVxuICBzd2l0Y2hUb0NvbmZpZ09yTWFuaWZlc3QoKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudE1vZGUgIT0gMikge1xuICAgICAgdGhpcy5wcmV2aW91c01vZGUgPSB0aGlzLmN1cnJlbnRNb2RlO1xuICAgICAgdGhpcy5zaG93U3dpdGNoQnRuID0gZmFsc2U7XG4gICAgICB0aGlzLmN1cnJlbnRNb2RlID0gMjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jdXJyZW50TW9kZSA9IHRoaXMucHJldmlvdXNNb2RlO1xuICAgICAgaWYgKHRoaXMuc2V0dGluZ0NvbXBvbmVudEluc3RhbmNlKSB7XG4gICAgICAgIHRoaXMuc2hvd1N3aXRjaEJ0biA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIGV2dCBFdmVudFxuICAgKi9cbiAgY2hhbmdlTW9kZShldnQ6IGFueSkge1xuICAgIC8vZXZ0LnRhcmdldC5jaGVja2VkXG4gICAgaWYgKHRoaXMuc3dpdGNoQ2hlY2tlZCkge1xuICAgICAgdGhpcy5jdXJyZW50TW9kZSA9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3VycmVudE1vZGUgPSAzO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICog5L+d5a2Y5aSx6LSl5pe2XG4gICAqIEBwYXJhbSBlcnJvciBcbiAgICovXG4gIG9uU2F2ZUVycm9yKGVycm9yOiBFcnJvcikge1xuICAgIGlmICh0aGlzLnNldHRpbmdDb21wb25lbnRJbnN0YW5jZSkge1xuICAgICAgdGhpcy5zZXR0aW5nQ29tcG9uZW50SW5zdGFuY2Uub25TYXZlRXJyb3IoZXJyb3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvL+aaguaXtui/meagt1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiDkv53lrZhcbiAgICogQHJldHVybnMgXG4gICAqL1xuICBzYXZlQWxsKCk6IFByb21pc2U8UmVxdWVzdFJlc3VsdE1vZGVsPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFJlcXVlc3RSZXN1bHRNb2RlbD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbGV0IHJlc3VsdDogUmVxdWVzdFJlc3VsdE1vZGVsO1xuICAgICAgc3dpdGNoICh0aGlzLmN1cnJlbnRNb2RlKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAvL2NvbmZpZy5qc29uXG4gICAgICAgICAgcmVzdWx0ID0gdGhpcy5nZXRWYWxpZGF0ZVJlc3VsdCgpO1xuICAgICAgICAgIGlmIChyZXN1bHQuc3VjY2VzcyAmJiB0aGlzLmVkaXRvckNvbmZpZykge1xuICAgICAgICAgICAgdGhpcy5zYXZlQ29uZmlnSnNvbih0aGlzLmVkaXRvckNvbmZpZy5nZXRUZXh0KCkpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgcmVzLmRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICBjb25maWc6IHRoaXMuZWRpdG9yQ29uZmlnLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgbWFuaWZlc3Q6IHRoaXMuZWRpdG9yTWFuaWZlc3QudmFsdWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzb2x2ZShuZXcgUmVxdWVzdFJlc3VsdE1vZGVsKGZhbHNlLCBcIumqjOivgeWksei0pVwiKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgLy9tYW5pZmVzdC5qc29uXG4gICAgICAgICAgcmVzdWx0ID0gdGhpcy5nZXRWYWxpZGF0ZVJlc3VsdCgpO1xuICAgICAgICAgIGlmIChyZXN1bHQuc3VjY2VzcyAmJiB0aGlzLmVkaXRvck1hbmlmZXN0KSB7XG4gICAgICAgICAgICB0aGlzLnNhdmVNYW5pZmVzdEpzb24odGhpcy5lZGl0b3JNYW5pZmVzdC5nZXRUZXh0KCkpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgcmVzLmRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICBjb25maWc6IHRoaXMuZWRpdG9yQ29uZmlnLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgbWFuaWZlc3Q6IHRoaXMuZWRpdG9yTWFuaWZlc3QudmFsdWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzb2x2ZShuZXcgUmVxdWVzdFJlc3VsdE1vZGVsKGZhbHNlLCBcIumqjOivgeWksei0pVwiKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgLy9jb25maWcuanNvblxuICAgICAgICAgIGlmICh0aGlzLnNldHRpbmdDb21wb25lbnRJbnN0YW5jZSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5zZXR0aW5nQ29tcG9uZW50SW5zdGFuY2UuZ2V0VmFsaWRhdGVSZXN1bHQoKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgICAgICAgICAgICB0aGlzLnNldHRpbmdDb21wb25lbnRJbnN0YW5jZS5zYXZlQ29uZmlnSnNvbihyZXN1bHQuZGF0YSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXMuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgcmVzLmRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZzogcmVzdWx0LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIG1hbmlmZXN0OiB0aGlzLmVkaXRvck1hbmlmZXN0LnZhbHVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgICAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICByZXNvbHZlKG5ldyBSZXF1ZXN0UmVzdWx0TW9kZWwoZmFsc2UsIFwi6aqM6K+B5aSx6LSlXCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzb2x2ZShuZXcgUmVxdWVzdFJlc3VsdE1vZGVsKGZhbHNlLCBcIuaXoOe7hOS7tu+8jOaXoOazleS/neWtmFwiKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlc29sdmUobmV3IFJlcXVlc3RSZXN1bHRNb2RlbChmYWxzZSwgXCLkuI3mlK/mjIHnmoTmqKHlvI9cIikpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiDliqDovb1jb25maWcuanNvblxuICAgKiBAcmV0dXJucyBcbiAgICovXG4gIGxvYWRXaWRnZXRDb25maWcoKSB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZ0pzb25XZWJQYXRoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImNvbmZpZ0pzb25XZWJQYXRoIGlzIG51bGxcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8v5Yqg6L29Y29uZmlnLmpzb25cbiAgICB0aGlzLnNldHRpbmdTZXJ2aWNlLmdldENvbmZpZ0NvbnRlbnQodGhpcy5jb25maWdKc29uV2ViUGF0aCkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgdGhpcy5jb25maWdKc29uID0gcmVzdWx0O1xuICAgICAgdGhpcy5vbkNvbmZpZ0pzb25Mb2FkKHRydWUsIG51bGwpO1xuICAgIH0pLmNhdGNoKGVyciA9PiB0aGlzLm9uQ29uZmlnSnNvbkxvYWQoZmFsc2UsIGVycikpO1xuICB9XG4gIC8qKlxuICAqIOWKoOi9vW1hbmlmZXN0Lmpzb25cbiAgKiBAcmV0dXJucyBcbiAgKi9cbiAgbG9hZFdpZGdldE1hbmlmZXN0KCkge1xuICAgIGlmICghdGhpcy5tYW5pZmVzdEpzb25XZWJQYXRoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIm1hbmlmZXN0SnNvbldlYlBhdGggaXMgbnVsbFwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy/liqDovb1tYW5pZmVzdC5qc29uXG4gICAgdGhpcy5zZXR0aW5nU2VydmljZS5nZXRDb25maWdDb250ZW50KHRoaXMubWFuaWZlc3RKc29uV2ViUGF0aCkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgdGhpcy5tYW5pZmVzdEpzb24gPSByZXN1bHQ7XG4gICAgICB0aGlzLm9uTWFuaWZlc3RKc29uTG9hZCh0cnVlLCBudWxsKTtcbiAgICB9KS5jYXRjaChlcnIgPT4gdGhpcy5vbk1hbmlmZXN0SnNvbkxvYWQoZmFsc2UsIGVycikpO1xuICB9XG4gIC8qKlxuICAgKiBjb25maWcuanNvbuaWh+S7tuWKoOi9veWujOaIkOWQjuS6i+S7tlxuICAgKiBAcGFyYW0gc3VjY2VzIGNvbmZpZy5qc29u5paH5Lu25Yqg6L295oiQ5Yqf5pe25Li6dHJ1ZVxuICAgKiBAcGFyYW0gZXJyIFxuICAgKi9cbiAgb25Db25maWdKc29uTG9hZChzdWNjZXM6IGJvb2xlYW4sIGVycjogRXJyb3IpIHtcbiAgICBpZiAoIXN1Y2Nlcykge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGlmICh0aGlzLndpZGdldENvbmZpZy5oYXNTZXR0aW5nID09PSB0cnVlKSB7XG4gICAgICAvL+aciXNldHRpbmdcbiAgICAgIC8vIOafpeaJvnNldHRpbmfnu4Tku7ZcbiAgICAgIGNvbnN0IHNldHRpbmdVcmkgPSB0aGlzLndpZGdldENvbmZpZy51cmkgKyBcIi1zZXR0aW5nXCI7XG4gICAgICBjb25zdCBjb21wID0gdGhpcy5jb21wb25lbnRMb2FkZXIuZmluZENvbXBvbmVudChzZXR0aW5nVXJpKTtcbiAgICAgIGlmICghY29tcCkge1xuICAgICAgICBjb25zb2xlLmluZm8oYOacquaJvuWIsHNldHRpbmfnu4Tku7ZbJHtzZXR0aW5nVXJpfV3vvIzor7fmo4Dmn6Xnu4Tku7blrprkuYlgKTtcbiAgICAgICAgLy/nlYzpnaLorr7nva7kuLpqc29u57yW6L6R5ZmoXG4gICAgICAgIHRoaXMuY3VycmVudE1vZGUgPSAxO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvL+eVjOmdouiuvue9ruS4uuWumuWItueahOW8gOWPkeeVjOmdolxuICAgICAgdGhpcy5zaG93U3dpdGNoQnRuID0gdHJ1ZTtcbiAgICAgIHRoaXMuY3VycmVudE1vZGUgPSAzO1xuICAgICAgdGhpcy5zd2l0Y2hDaGVja2VkID0gZmFsc2U7XG4gICAgICBjb25zdCBjb21wUmVmID0gdGhpcy5jb21wb25lbnRMb2FkZXIuY3JlYXRlQ29tcG9uZW50KGNvbXAsIG51bGwsIHRoaXMuY29udGFpbmVyKTtcbiAgICAgIHRoaXMuc2V0dGluZ0NvbXBvbmVudEluc3RhbmNlID0gY29tcFJlZi5pbnN0YW5jZTtcbiAgICAgIC8v6K6+572u5Yeg5Liq5YWz6ZSu5bGe5oCnXG4gICAgICB0aGlzLnNldHRpbmdDb21wb25lbnRJbnN0YW5jZS53aWRnZXRJbnN0YW5jZSA9IHRoaXMud2lkZ2V0SW5zdGFuY2U7XG4gICAgICB0aGlzLnNldHRpbmdDb21wb25lbnRJbnN0YW5jZS5jb25maWdKc29uID0gdGhpcy5jb25maWdKc29uO1xuICAgICAgdGhpcy5zZXR0aW5nQ29tcG9uZW50SW5zdGFuY2UuY29uZmlnSnNvbldlYlBhdGggPSB0aGlzLmNvbmZpZ0pzb25XZWJQYXRoO1xuICAgICAgdGhpcy5zZXR0aW5nQ29tcG9uZW50SW5zdGFuY2UubWFuaWZlc3RKc29uID0gdGhpcy5tYW5pZmVzdEpzb247XG4gICAgICB0aGlzLnNldHRpbmdDb21wb25lbnRJbnN0YW5jZS5tYW5pZmVzdEpzb25XZWJQYXRoID0gdGhpcy5tYW5pZmVzdEpzb25XZWJQYXRoO1xuICAgICAgdGhpcy5jb250YWluZXIuY2xlYXIoKTtcbiAgICAgIHRoaXMuY29udGFpbmVyLmluc2VydChjb21wUmVmLmhvc3RWaWV3LCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy/nlYzpnaLorr7nva7kuLpqc29u57yW6L6R5ZmoXG4gICAgICB0aGlzLmN1cnJlbnRNb2RlID0gMTtcbiAgICB9XG5cbiAgfVxuICAvKipcbiAgICogbWFuaWZlc3QuanNvbuaWh+S7tuWKoOi9veWujOaIkOWQjuS6i+S7tlxuICAgKiBAcGFyYW0gc3VjY2VzIG1hbmlmZXN0Lmpzb27mlofku7bliqDovb3miJDlip/ml7bkuLp0cnVlXG4gICAqIEBwYXJhbSBlcnIgXG4gICAqL1xuICBvbk1hbmlmZXN0SnNvbkxvYWQoc3VjY2VzOiBib29sZWFuLCBlcnI6IEVycm9yKSB7XG4gICAgaWYgKCFzdWNjZXMpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgfVxuXG59XG4iLCI8IS0tXG4gICAgMeOAgW1hbmlmZXN0Lmpzb27phY3nva7pu5jorqTkuI3mmL7npLrvvIznlKjkuIDkuKrmjInpkq7mnaXliIfmjaLvvIjmr5TlpoLlm77moIdp77yJ77yM54K55Ye75pe26KaB5LmI5pi+56S6bWFuaWZlc3TopoHkuYhjb25maWdcbiAgICAy44CB5qC55o2uaGFzU2V0dGluZ+WIpOaWreaYr+WQpuacieiuvue9rue7hOS7tu+8jOacieeahOivne+8jOWImeWKoOi9ve+8jOW5tuWPr+S7peWIh+aNouS4umpzb27nvJbovpHmqKHlvI/vvJvlpoLmnpzmsqHmnInvvIzliJnlj6rmmL7npLpqc29u57yW6L6R5ZmoXG4tLT5cbjxkaXYgW2NsYXNzLnNob3ctY29uZmlnXT1cImN1cnJlbnRNb2RlPT0xIHx8IGN1cnJlbnRNb2RlPT0zXCI+XG4gICAgPCEtLSA8ZGl2IGNsYXNzPVwic3NyYWRpb1wiPlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJyYWRpb190eXBlXCIgdHlwZT1cInJhZGlvXCIgbmFtZT1cInR5cGVcIiBpZD1cInJhZGlvMVwiIGNoZWNrZWQ9XCJjaGVja2VkXCJcbiAgICAgICAgICAgIChjaGFuZ2UpPVwidGhpcy5jdXJyZW50TW9kZT0xXCIgLz5cbiAgICAgICAgPGxhYmVsIGZvcj1cInJhZGlvMVwiPue8lui+keWZqDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBjbGFzcz1cInJhZGlvX3R5cGVcIiB0eXBlPVwicmFkaW9cIiBuYW1lPVwidHlwZVwiIGlkPVwicmFkaW8yXCIgKGNoYW5nZSk9XCJ0aGlzLmN1cnJlbnRNb2RlPTNcIiAvPlxuICAgICAgICA8bGFiZWwgZm9yPVwicmFkaW8yXCI+5a6a5Yi2VUk8L2xhYmVsPlxuICAgIDwvZGl2PiAtLT5cbiAgICA8ZGl2IGNsYXNzPVwic3dpdGNoXCIgKm5nSWY9XCJzaG93U3dpdGNoQnRuXCI+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiY3VzdG9tLXVpXCIgWyhuZ01vZGVsKV09XCJzd2l0Y2hDaGVja2VkXCIgKGNoYW5nZSk9XCJjaGFuZ2VNb2RlKCRldmVudClcIiAvPlxuICAgICAgICAgICAg57yW6L6R5ZmoXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY3VzdG9tLXVpXCI+PGVtPjwvZW0+PC9sYWJlbD5cbiAgICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJtYXJnaW41XCI+PC9kaXY+XG4gICAgPGVwc2dpcy1qc29uLWVkaXRvciAjY29uZmlnIFtjbGFzcy5oaWRlXT1cImN1cnJlbnRNb2RlIT0xXCIgWyhkYXRhKV09XCJjb25maWdKc29uXCJcbiAgICAgICAgW29wdGlvbnNdPVwie25hbWU6J+e7hOS7tumFjee9ruS/oeaBryd9XCI+XG4gICAgPC9lcHNnaXMtanNvbi1lZGl0b3I+XG4gICAgPGRpdiBbY2xhc3MuaGlkZV09XCJjdXJyZW50TW9kZSE9M1wiPlxuICAgICAgICA8bmctY29udGFpbmVyIGNvbXBvbmVudC1ob3N0PjwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuPC9kaXY+XG48ZGl2IFtjbGFzcy5zaG93LW1hbmlmZXN0XT1cImN1cnJlbnRNb2RlPT0yXCI+XG4gICAgPGVwc2dpcy1qc29uLWVkaXRvciAjbWFuaWZlc3QgW2NsYXNzLmhpZGVdPVwiY3VycmVudE1vZGUhPTJcIiBbKGRhdGEpXT1cIm1hbmlmZXN0SnNvblwiIFtvcHRpb25zXT1cIntuYW1lOifnu4Tku7bkv6Hmga8nfVwiPlxuICAgIDwvZXBzZ2lzLWpzb24tZWRpdG9yPlxuPC9kaXY+XG48IS0tIDxkaXY+XG4gICAgPGxhYmVsIGNsYXNzPVwic3NTd2l0Y2hcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiPlxuICAgICAgICA8aT48L2k+XG4gICAgPC9sYWJlbD4gXG4gICAgPGlucHV0IGNsYXNzPSdzd2l0Y2gtY29tcG9uZW50JyB0eXBlPSdjaGVja2JveCc+XG48bGFiZWw+dGVzdDwvbGFiZWw+XG5cbjwvZGl2PiAtLT4iXX0=