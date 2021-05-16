import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { ComponentRegister } from 'epsgis';
import { NzTreeNode } from 'ng-zorro-antd/tree';
import { SceneTreeUtils } from '../../utils/sceneTree-utils';
import { BasePlanetWidgetComponent } from '../base-widget/base-widget.component';
import { PlanetLayerManagerComponent } from '../layer-manager/layer-manager.component';
import * as i0 from "@angular/core";
import * as i1 from "epsgis";
import * as i2 from "ng-zorro-antd/tree";
import * as i3 from "@angular/common";
import * as i4 from "ng-zorro-antd/icon";
import * as i5 from "ng-zorro-antd/core/transition-patch";
const _c0 = ["nzTreeComponent"];
function PlanetLayerListComponent_ng_template_2_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelementStart(1, "span", 5);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(node_r3.title);
} }
function PlanetLayerListComponent_ng_template_2_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelementStart(1, "span", 5);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 6);
    i0.ɵɵlistener("click", function PlanetLayerListComponent_ng_template_2_span_2_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r10); const node_r3 = i0.ɵɵnextContext().$implicit; const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.setting(node_r3); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "i", 7);
    i0.ɵɵlistener("click", function PlanetLayerListComponent_ng_template_2_span_2_Template_i_click_4_listener() { i0.ɵɵrestoreView(_r10); const node_r3 = i0.ɵɵnextContext().$implicit; const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.flyTo(node_r3); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(node_r3.title);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzIconfont", "icon-epsgis-setting");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzIconfont", "icon-epsgis-wodeweizhi1");
} }
function PlanetLayerListComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 3);
    i0.ɵɵtemplate(1, PlanetLayerListComponent_ng_template_2_span_1_Template, 3, 1, "span", 4);
    i0.ɵɵtemplate(2, PlanetLayerListComponent_ng_template_2_span_2_Template, 5, 3, "span", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r3 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !node_r3.isLeaf);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", node_r3.isLeaf);
} }
let PlanetLayerListComponent = class PlanetLayerListComponent extends BasePlanetWidgetComponent {
    constructor(modalService) {
        super();
        this.modalService = modalService;
        this.layerNodes = [];
        this.listOfData = [];
        this.isShow = false;
    }
    static getCompInfo() {
        return { name: "PlanetLayerListComponent", path: "epsplanet/components/layer-list" };
    }
    ngOnInit() {
        var uw3 = XE.MVVM.watch(() => [...this.view.sceneTree.root.children], () => {
            this.loadSceneTree();
        });
    }
    openFolder(data) {
        console.log(data);
        if (data instanceof NzTreeNode) {
            data.isExpanded = !data.isExpanded;
        }
        else {
            const node = data.node;
            if (node) {
                node.isExpanded = !node.isExpanded;
            }
        }
    }
    loadSceneTree() {
        setTimeout(() => {
            const _layerNodes = SceneTreeUtils.SceneTree2NgZorroTree(this.view.sceneTree.$refs.layerlist);
            console.log("sceneTree:", _layerNodes);
            this.layerNodes = [..._layerNodes[0]["children"]];
        }, 100);
    }
    setting(node) {
        console.log(this.config);
        this.selectedNode = node.origin;
        this.type = this.selectedNode["origin"].hasOwnProperty('luminanceAtZenith') ? "瓦片" : "影像";
        this.isShow = true;
        this.modalService.create({
            title: "图层“" + node.title + "”参数",
            content: PlanetLayerManagerComponent,
            componentParams: {
                selectedNode: this.selectedNode,
                type: this.type
            },
            footer: null,
            mask: false,
            width: 320
        });
    }
    flyTo(node) {
        node.origin.origin.flyTo();
        console.log(node);
    }
    onLeftClickNode(evt) {
        console.log(evt.node);
        this.selectedNode = evt.node.origin;
    }
    onCheckedChange(evt) {
        console.log(evt);
        if (evt.eventName !== "check" || !evt.node) {
            return;
        }
        if (evt.node.children.length == 0) {
            if (evt.node.isChecked) {
                SceneTreeUtils.GetXbsjCzmObject(evt.node).show = true;
            }
            else {
                SceneTreeUtils.GetXbsjCzmObject(evt.node).show = false;
            }
        }
        else {
            if (evt.node.isChecked) {
                evt.node.children.forEach(item => {
                    SceneTreeUtils.GetXbsjCzmObject(item).show = true;
                });
            }
            else {
                evt.node.children.forEach(item => {
                    SceneTreeUtils.GetXbsjCzmObject(item).show = false;
                });
            }
        }
    }
    onDblClickNode(evt) {
        if (evt.eventName !== "dblclick" || !evt.node) {
            return;
        }
        SceneTreeUtils.GetXbsjCzmObject(evt.node).flyTo();
    }
    onRightClick(evt) {
    }
};
PlanetLayerListComponent.ɵfac = function PlanetLayerListComponent_Factory(t) { return new (t || PlanetLayerListComponent)(i0.ɵɵdirectiveInject(i1.ModalManagerService)); };
PlanetLayerListComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PlanetLayerListComponent, selectors: [["epsgis-planet-layer-list"]], viewQuery: function PlanetLayerListComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.nzTreeComponent = _t.first);
    } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 2, consts: [["nzBlockNode", "", "nzCheckable", "", 3, "nzData", "nzTreeTemplate", "nzClick", "nzDblClick", "nzCheckBoxChange", "nzContextMenu"], ["nzTreeComponent", ""], ["nzTreeTemplate", ""], [1, "custom-node"], [4, "ngIf"], [1, "folder-name"], ["title", "\u53C2\u6570\u8C03\u6574", "nz-icon", "", 2, "float", "right", 3, "nzIconfont", "click"], ["title", "\u7F29\u653E\u81F3", "nz-icon", "", 2, "float", "right", 3, "nzIconfont", "click"]], template: function PlanetLayerListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "nz-tree", 0, 1);
        i0.ɵɵlistener("nzClick", function PlanetLayerListComponent_Template_nz_tree_nzClick_0_listener($event) { return ctx.onLeftClickNode($event); })("nzDblClick", function PlanetLayerListComponent_Template_nz_tree_nzDblClick_0_listener($event) { return ctx.onDblClickNode($event); })("nzCheckBoxChange", function PlanetLayerListComponent_Template_nz_tree_nzCheckBoxChange_0_listener($event) { return ctx.onCheckedChange($event); })("nzContextMenu", function PlanetLayerListComponent_Template_nz_tree_nzContextMenu_0_listener($event) { return ctx.onRightClick($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(2, PlanetLayerListComponent_ng_template_2_Template, 3, 2, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(3);
        i0.ɵɵproperty("nzData", ctx.layerNodes)("nzTreeTemplate", _r1);
    } }, directives: [i2.NzTreeComponent, i3.NgIf, i4.NzIconDirective, i5.ɵNzTransitionPatchDirective], styles: ["i[_ngcontent-%COMP%]{font-size:16px;margin-right:5px}i[_ngcontent-%COMP%]:hover{font-size:20px}  .sspanel_content{overflow:overlay!important}"] });
PlanetLayerListComponent = __decorate([
    ComponentRegister({
        uri: "epsgis-planet-layer-list",
        path: "epsplanet/components/layer-list",
        name: "PlanetLayerListComponent"
    })
], PlanetLayerListComponent);
export { PlanetLayerListComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PlanetLayerListComponent, [{
        type: Component,
        args: [{
                selector: 'epsgis-planet-layer-list',
                templateUrl: './layer-list.component.html',
                styleUrls: ['./layer-list.component.scss'],
            }]
    }], function () { return [{ type: i1.ModalManagerService }]; }, { nzTreeComponent: [{
            type: ViewChild,
            args: ['nzTreeComponent', { static: false }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXItbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9lcHNwbGFuZXQvY29tcG9uZW50cy9sYXllci1saXN0L2xheWVyLWxpc3QuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZXBzcGxhbmV0L2NvbXBvbmVudHMvbGF5ZXItbGlzdC9sYXllci1saXN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUNsRSxPQUFPLEVBQUUsaUJBQWlCLEVBQXVCLE1BQU0sUUFBUSxDQUFDO0FBQ2hFLE9BQU8sRUFBcUIsVUFBVSxFQUFtQixNQUFNLG9CQUFvQixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNqRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQzs7Ozs7Ozs7O0lDUWpGLDRCQUEyQjtJQUV6QiwrQkFBMEI7SUFBQSxZQUFnQjtJQUFBLGlCQUFPO0lBQ25ELGlCQUFPOzs7SUFEcUIsZUFBZ0I7SUFBaEIsbUNBQWdCOzs7O0lBRTVDLDRCQUEwQjtJQUV4QiwrQkFBMEI7SUFBQSxZQUFnQjtJQUFBLGlCQUFPO0lBQ2pELDRCQUEyRztJQUF4Qix5UEFBdUI7SUFBQyxpQkFBSTtJQUMvRyw0QkFBNEc7SUFBdEIseVBBQXFCO0lBQUMsaUJBQUk7SUFLbEgsaUJBQU87OztJQVBxQixlQUFnQjtJQUFoQixtQ0FBZ0I7SUFDSSxlQUFvQztJQUFwQyxrREFBb0M7SUFDckMsZUFBd0M7SUFBeEMsc0RBQXdDOzs7SUFUekYsK0JBQTBCO0lBQ3hCLHlGQUdPO0lBQ1AseUZBU087SUFDVCxpQkFBTzs7O0lBZEUs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QUM7Z0JBQ3JELENBQUMsQ0FBQyxDQUFBO2FBQ0g7U0FDRjtJQUNILENBQUM7SUFJRCxjQUFjLENBQUMsR0FBc0I7UUFDbkMsSUFBSSxHQUFHLENBQUMsU0FBUyxLQUFLLFVBQVUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUU7WUFDN0MsT0FBTztTQUNSO1FBQ0QsY0FBYyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNwRCxDQUFDO0lBSUQsWUFBWSxDQUFDLEdBQXNCO0lBRW5DLENBQUM7Q0FDRixDQUFBO2dHQW5JWSx3QkFBd0I7NkRBQXhCLHdCQUF3Qjs7Ozs7O1FDaEJyQyxxQ0FTc0M7UUFKbEMsZ0hBQVcsMkJBQXVCLElBQUMseUdBQ3JCLDBCQUFzQixJQURELHFIQUVmLDJCQUF1QixJQUZSLCtHQUdsQix3QkFBb0IsSUFIRjtRQUt2QyxpQkFBVTtRQUNWLDBIQWlCYzs7O1FBMUJWLHVDQUFxQix1QkFBQTs7QURjWix3QkFBd0I7SUFWcEMsaUJBQWlCLENBQUM7UUFDakIsR0FBRyxFQUFFLDBCQUEwQjtRQUMvQixJQUFJLEVBQUUsaUNBQWlDO1FBQ3ZDLElBQUksRUFBRSwwQkFBMEI7S0FDakMsQ0FBQztHQU1XLHdCQUF3QixDQW1JcEM7U0FuSVksd0JBQXdCO3VGQUF4Qix3QkFBd0I7Y0FMcEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFdBQVcsRUFBRSw2QkFBNkI7Z0JBQzFDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2FBQzNDO3NFQUVrRCxlQUFlO2tCQUEvRCxTQUFTO21CQUFDLGlCQUFpQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50UmVnaXN0ZXIsIE1vZGFsTWFuYWdlclNlcnZpY2UgfSBmcm9tICdlcHNnaXMnO1xuaW1wb3J0IHsgTnpGb3JtYXRFbWl0RXZlbnQsIE56VHJlZU5vZGUsIE56VHJlZUNvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvdHJlZSc7XG5pbXBvcnQgeyBTY2VuZVRyZWVVdGlscyB9IGZyb20gJy4uLy4uL3V0aWxzL3NjZW5lVHJlZS11dGlscyc7XG5pbXBvcnQgeyBCYXNlUGxhbmV0V2lkZ2V0Q29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZS13aWRnZXQvYmFzZS13aWRnZXQuY29tcG9uZW50JztcbmltcG9ydCB7IFBsYW5ldExheWVyTWFuYWdlckNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVyLW1hbmFnZXIvbGF5ZXItbWFuYWdlci5jb21wb25lbnQnO1xuQENvbXBvbmVudFJlZ2lzdGVyKHtcbiAgdXJpOiBcImVwc2dpcy1wbGFuZXQtbGF5ZXItbGlzdFwiLFxuICBwYXRoOiBcImVwc3BsYW5ldC9jb21wb25lbnRzL2xheWVyLWxpc3RcIixcbiAgbmFtZTogXCJQbGFuZXRMYXllckxpc3RDb21wb25lbnRcIlxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Vwc2dpcy1wbGFuZXQtbGF5ZXItbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9sYXllci1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGF5ZXItbGlzdC5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBQbGFuZXRMYXllckxpc3RDb21wb25lbnQgZXh0ZW5kcyBCYXNlUGxhbmV0V2lkZ2V0Q29tcG9uZW50IHtcbiAgQFZpZXdDaGlsZCgnbnpUcmVlQ29tcG9uZW50JywgeyBzdGF0aWM6IGZhbHNlIH0pIG56VHJlZUNvbXBvbmVudCE6IE56VHJlZUNvbXBvbmVudDtcblxuICBsYXllck5vZGVzOiBhbnkgPSBbXTtcbiAgc2VsZWN0ZWROb2RlOiBhbnk7XG4gIHR5cGU6IGFueTtcbiAgbGlzdE9mRGF0YSA9IFtdO1xuICBpc1Nob3cgPSBmYWxzZTtcbiAgYWN0aXZhdGVkTm9kZT86IE56VHJlZU5vZGU7XG4gIHRwbENvbnRlbnQ6IFRlbXBsYXRlUmVmPHt9PlxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxNYW5hZ2VyU2VydmljZSkge1xuXG4gICAgc3VwZXIoKTtcbiAgfVxuICBzdGF0aWMgZ2V0Q29tcEluZm8oKSB7XG4gICAgcmV0dXJuIHsgbmFtZTogXCJQbGFuZXRMYXllckxpc3RDb21wb25lbnRcIiwgcGF0aDogXCJlcHNwbGFuZXQvY29tcG9uZW50cy9sYXllci1saXN0XCIgfTtcbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgICAvL+ato+W4uFxuICAgIC8vIFhFLk1WVk0ud2F0Y2goKCkgPT4gWy4uLnRoaXMudmlldy5zY2VuZVRyZWUucm9vdC5jaGlsZHJlbl0sICgpID0+IHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdzY2VuZVRyZWXlj5HnlJ/lj5jljJbvvIEnKTtcbiAgICAvLyB9KTtcbiAgICAvL+ato+W4uFxuICAgIC8vIHZhciB1dzMgPSBYRS5NVlZNLndhdGNoKHRoaXMudmlldy5zY2VuZVRyZWUucm9vdC5jaGlsZHJlbiwgKCkgPT4ge1xuICAgIC8vICAgY29uc29sZS5sb2coJ3NjZW5lVHJlZeWPkeeUn+WPmOWMljMzM++8gScpO1xuICAgIC8vIH0pO1xuICAgIC8v5omn6KGM5aSa5qyhXG4gICAgLy8gdmFyIHV3MiA9IFhFLk1WVk0ud2F0Y2godGhpcy52aWV3LnNjZW5lVHJlZS5yb290LCAnY2hpbGRyZW4nLCAoKSA9PiB7XG4gICAgLy8gICBjb25zb2xlLmxvZygnc2NlbmVUcmVl5Y+R55Sf5Y+Y5YyWMjIyJyk7XG4gICAgLy8gfSk7XG4gICAgLy/miafooYzlpJrmrKFcbiAgICAvLyBYRS5NVlZNLndhdGNoKCgpID0+IHRoaXMudmlldy5zY2VuZVRyZWUucm9vdC50b0pTT05TdHIoKSwgKCkgPT4gY29uc29sZS5sb2coJzEyMycpKVxuICAgIHZhciB1dzMgPSBYRS5NVlZNLndhdGNoKCgpID0+IFsuLi50aGlzLnZpZXcuc2NlbmVUcmVlLnJvb3QuY2hpbGRyZW5dLCAoKSA9PiB7XG4gICAgICB0aGlzLmxvYWRTY2VuZVRyZWUoKTtcbiAgICB9KTtcbiAgfVxuICBvcGVuRm9sZGVyKGRhdGE6IE56VHJlZU5vZGUgfCBOekZvcm1hdEVtaXRFdmVudCk6IHZvaWQge1xuICAgIC8vIGRvIHNvbWV0aGluZyBpZiB1IHdhbnRcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIGlmIChkYXRhIGluc3RhbmNlb2YgTnpUcmVlTm9kZSkge1xuICAgICAgZGF0YS5pc0V4cGFuZGVkID0gIWRhdGEuaXNFeHBhbmRlZDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgbm9kZSA9IGRhdGEubm9kZTtcbiAgICAgIGlmIChub2RlKSB7XG4gICAgICAgIG5vZGUuaXNFeHBhbmRlZCA9ICFub2RlLmlzRXhwYW5kZWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGxvYWRTY2VuZVRyZWUoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBfbGF5ZXJOb2RlcyA9IFNjZW5lVHJlZVV0aWxzLlNjZW5lVHJlZTJOZ1pvcnJvVHJlZSh0aGlzLnZpZXcuc2NlbmVUcmVlLiRyZWZzLmxheWVybGlzdCk7XG4gICAgICBjb25zb2xlLmxvZyhcInNjZW5lVHJlZTpcIiwgX2xheWVyTm9kZXMpXG4gICAgICB0aGlzLmxheWVyTm9kZXMgPSBbLi4uX2xheWVyTm9kZXNbMF1bXCJjaGlsZHJlblwiXV07XG4gICAgfSwgMTAwKTtcblxuICB9XG5cbiAgc2V0dGluZyhub2RlKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5jb25maWcpXG4gICAgdGhpcy5zZWxlY3RlZE5vZGUgPSBub2RlLm9yaWdpbjtcbiAgICB0aGlzLnR5cGUgPSB0aGlzLnNlbGVjdGVkTm9kZVtcIm9yaWdpblwiXS5oYXNPd25Qcm9wZXJ0eSgnbHVtaW5hbmNlQXRaZW5pdGgnKSA/IFwi55Om54mHXCIgOiBcIuW9seWDj1wiO1xuICAgIHRoaXMuaXNTaG93ID0gdHJ1ZTtcbiAgICB0aGlzLm1vZGFsU2VydmljZS5jcmVhdGUoe1xuICAgICAgdGl0bGU6IFwi5Zu+5bGC4oCcXCIgKyBub2RlLnRpdGxlICsgXCLigJ3lj4LmlbBcIixcbiAgICAgIGNvbnRlbnQ6IFBsYW5ldExheWVyTWFuYWdlckNvbXBvbmVudCxcbiAgICAgIGNvbXBvbmVudFBhcmFtczoge1xuICAgICAgICBzZWxlY3RlZE5vZGU6IHRoaXMuc2VsZWN0ZWROb2RlLFxuICAgICAgICB0eXBlOiB0aGlzLnR5cGVcbiAgICAgIH0sXG4gICAgICBmb290ZXI6IG51bGwsXG4gICAgICBtYXNrOiBmYWxzZSxcbiAgICAgIHdpZHRoOiAzMjBcbiAgICB9KVxuICB9XG4gIGZseVRvKG5vZGUpIHtcbiAgICBub2RlLm9yaWdpbi5vcmlnaW4uZmx5VG8oKVxuICAgIGNvbnNvbGUubG9nKG5vZGUpXG4gIH1cblxuICAvKipcbiAgICog5Y2V5Ye76IqC54K5XG4gICAqL1xuICBvbkxlZnRDbGlja05vZGUoZXZ0OiBOekZvcm1hdEVtaXRFdmVudCkge1xuICAgIGNvbnNvbGUubG9nKGV2dC5ub2RlKVxuICAgIHRoaXMuc2VsZWN0ZWROb2RlID0gZXZ0Lm5vZGUub3JpZ2luO1xuICB9XG4gIC8qKlxuICAgKiDpgInkuK3nirbmgIHmlLnlj5hcbiAgICovXG4gIG9uQ2hlY2tlZENoYW5nZShldnQ6IE56Rm9ybWF0RW1pdEV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coZXZ0KVxuICAgIGlmIChldnQuZXZlbnROYW1lICE9PSBcImNoZWNrXCIgfHwgIWV2dC5ub2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChldnQubm9kZS5jaGlsZHJlbi5sZW5ndGggPT0gMCkge1xuICAgICAgaWYgKGV2dC5ub2RlLmlzQ2hlY2tlZCkge1xuICAgICAgICAvL+WKoOi9veWbvuWxglxuICAgICAgICBTY2VuZVRyZWVVdGlscy5HZXRYYnNqQ3ptT2JqZWN0KGV2dC5ub2RlKS5zaG93ID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8v56e76Zmk5Zu+5bGCXG4gICAgICAgIFNjZW5lVHJlZVV0aWxzLkdldFhic2pDem1PYmplY3QoZXZ0Lm5vZGUpLnNob3cgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2Ugey8v5Yu+6YCJ5Li654i26IqC54K55pe2XG4gICAgICBpZiAoZXZ0Lm5vZGUuaXNDaGVja2VkKSB7XG4gICAgICAgIC8v5Yqg6L295Zu+5bGCXG4gICAgICAgIGV2dC5ub2RlLmNoaWxkcmVuLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgU2NlbmVUcmVlVXRpbHMuR2V0WGJzakN6bU9iamVjdChpdGVtKS5zaG93ID0gdHJ1ZTtcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8v56e76Zmk5Zu+5bGCXG4gICAgICAgIGV2dC5ub2RlLmNoaWxkcmVuLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgU2NlbmVUcmVlVXRpbHMuR2V0WGJzakN6bU9iamVjdChpdGVtKS5zaG93ID0gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiDlj4zlh7voioLngrlcbiAgICovXG4gIG9uRGJsQ2xpY2tOb2RlKGV2dDogTnpGb3JtYXRFbWl0RXZlbnQpIHtcbiAgICBpZiAoZXZ0LmV2ZW50TmFtZSAhPT0gXCJkYmxjbGlja1wiIHx8ICFldnQubm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBTY2VuZVRyZWVVdGlscy5HZXRYYnNqQ3ptT2JqZWN0KGV2dC5ub2RlKS5mbHlUbygpO1xuICB9XG4gIC8qKlxuICAgKiDmmL7npLrlj7PplK7oj5zljZVcbiAgICovXG4gIG9uUmlnaHRDbGljayhldnQ6IE56Rm9ybWF0RW1pdEV2ZW50KSB7XG5cbiAgfVxufVxuIiwiPG56LXRyZWUgXG4gICAgI256VHJlZUNvbXBvbmVudFxuICAgIFtuekRhdGFdPVwibGF5ZXJOb2Rlc1wiIFxuICAgIG56QmxvY2tOb2RlIFxuICAgIG56Q2hlY2thYmxlIFxuICAgIChuekNsaWNrKT1cIm9uTGVmdENsaWNrTm9kZSgkZXZlbnQpXCJcbiAgICAobnpEYmxDbGljayk9XCJvbkRibENsaWNrTm9kZSgkZXZlbnQpO1wiIFxuICAgIChuekNoZWNrQm94Q2hhbmdlKT1cIm9uQ2hlY2tlZENoYW5nZSgkZXZlbnQpO1wiXG4gICAgKG56Q29udGV4dE1lbnUpPVwib25SaWdodENsaWNrKCRldmVudCk7XCJcbiAgICBbbnpUcmVlVGVtcGxhdGVdPVwibnpUcmVlVGVtcGxhdGVcIj5cbjwvbnotdHJlZT5cbjxuZy10ZW1wbGF0ZSAjbnpUcmVlVGVtcGxhdGUgbGV0LW5vZGUgbGV0LW9yaWdpbj1cIm9yaWdpblwiPlxuICAgIDxzcGFuIGNsYXNzPVwiY3VzdG9tLW5vZGVcIj5cbiAgICAgIDxzcGFuICpuZ0lmPVwiIW5vZGUuaXNMZWFmXCI+XG4gICAgICAgIDwhLS0gPGkgbnotaWNvbiBbbnpUeXBlXT1cIm5vZGUuaXNFeHBhbmRlZCA/ICdmb2xkZXItb3BlbicgOiAnZm9sZGVyJ1wiIChjbGljayk9XCJvcGVuRm9sZGVyKG5vZGUpXCI+PC9pPiAtLT5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmb2xkZXItbmFtZVwiPnt7IG5vZGUudGl0bGUgfX08L3NwYW4+XG4gICAgICA8L3NwYW4+XG4gICAgICA8c3BhbiAqbmdJZj1cIm5vZGUuaXNMZWFmXCI+XG4gICAgICAgIDwhLS0gPGkgbnotaWNvbiBbbnpUeXBlXT1cIm5vZGUuaXNFeHBhbmRlZCA/ICdmb2xkZXItb3BlbicgOiAnZm9sZGVyJ1wiIChjbGljayk9XCJvcGVuRm9sZGVyKG5vZGUpXCI+PC9pPiAtLT5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmb2xkZXItbmFtZVwiPnt7IG5vZGUudGl0bGUgfX08L3NwYW4+XG4gICAgICAgIDxpIHRpdGxlPVwi5Y+C5pWw6LCD5pW0XCIgc3R5bGU9XCJmbG9hdDogcmlnaHQ7XCIgbnotaWNvbiBbbnpJY29uZm9udF09XCInaWNvbi1lcHNnaXMtc2V0dGluZydcIiAoY2xpY2spPVwic2V0dGluZyhub2RlKVwiPjwvaT5cbiAgICAgICAgPGkgdGl0bGU9XCLnvKnmlL7oh7NcIiBzdHlsZT1cImZsb2F0OiByaWdodDtcIiBuei1pY29uIFtuekljb25mb250XT1cIidpY29uLWVwc2dpcy13b2Rld2VpemhpMSdcIiAoY2xpY2spPVwiZmx5VG8obm9kZSlcIj48L2k+XG5cbiAgICAgICAgPCEtLSA8ZGl2ICpuZ0lmPVwibm9kZS5pc0V4cGFuZGVkXCI+XG4gICAgICAgICAgICA8aSBuei1pY29uIFtuekljb25mb250XT1cIidpY29uLWVwc2dpcy13b2Rld2VpemhpMSdcIiAoY2xpY2spPVwiZmx5VG8obm9kZSlcIj48L2k+XG4gICAgICAgIDwvZGl2PiAtLT5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L3NwYW4+XG48L25nLXRlbXBsYXRlPiJdfQ==