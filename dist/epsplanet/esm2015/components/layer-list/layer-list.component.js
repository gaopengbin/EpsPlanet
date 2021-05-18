import { __decorate } from "tslib";
import { Component } from '@angular/core';
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
function PlanetLayerListComponent_ng_template_2_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelementStart(1, "span", 6);
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
    i0.ɵɵelementStart(0, "span", 7);
    i0.ɵɵelementStart(1, "span", 6);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 8);
    i0.ɵɵlistener("click", function PlanetLayerListComponent_ng_template_2_span_2_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r10); const node_r3 = i0.ɵɵnextContext().$implicit; const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.setting(node_r3); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "i", 9);
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
    i0.ɵɵtemplate(2, PlanetLayerListComponent_ng_template_2_span_2_Template, 5, 3, "span", 5);
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
        this.testnode = [
            {
                title: 'parent 0',
                key: '100',
                author: 'NG ZORRO',
                children: [
                    { title: 'leaf 0-0', key: '1000', author: 'NG ZORRO' },
                    { title: 'leaf 0-1', key: '1001', author: 'NG ZORRO', isLeaf: true }
                ]
            },
            {
                title: 'parent 1',
                key: '101',
                author: 'NG ZORRO',
                children: [
                    { title: 'leaf 1-0', key: '1010', author: 'NG ZORRO', isLeaf: true },
                    { title: 'leaf 1-1', key: '1011', author: 'NG ZORRO', isLeaf: true }
                ]
            }
        ];
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
            this.layerNodes = _layerNodes[0]["children"];
            console.log(this.layerNodes);
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
PlanetLayerListComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PlanetLayerListComponent, selectors: [["epsgis-planet-layer-list"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 2, consts: [["nzBlockNode", "", "nzCheckable", "", 3, "nzData", "nzTreeTemplate", "nzClick", "nzDblClick", "nzCheckBoxChange", "nzContextMenu"], ["nzTreeComponent", ""], ["nzTreeTemplate", ""], [1, "custom-node"], [4, "ngIf"], ["class", "leaf", 4, "ngIf"], [1, "folder-name"], [1, "leaf"], ["title", "\u53C2\u6570\u8C03\u6574", "nz-icon", "", 2, "float", "right", 3, "nzIconfont", "click"], ["title", "\u7F29\u653E\u81F3", "nz-icon", "", 2, "float", "right", 3, "nzIconfont", "click"]], template: function PlanetLayerListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "nz-tree", 0, 1);
        i0.ɵɵlistener("nzClick", function PlanetLayerListComponent_Template_nz_tree_nzClick_0_listener($event) { return ctx.onLeftClickNode($event); })("nzDblClick", function PlanetLayerListComponent_Template_nz_tree_nzDblClick_0_listener($event) { return ctx.onDblClickNode($event); })("nzCheckBoxChange", function PlanetLayerListComponent_Template_nz_tree_nzCheckBoxChange_0_listener($event) { return ctx.onCheckedChange($event); })("nzContextMenu", function PlanetLayerListComponent_Template_nz_tree_nzContextMenu_0_listener($event) { return ctx.onRightClick($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(2, PlanetLayerListComponent_ng_template_2_Template, 3, 2, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(3);
        i0.ɵɵproperty("nzData", ctx.layerNodes)("nzTreeTemplate", _r1);
    } }, directives: [i2.NzTreeComponent, i3.NgIf, i4.NzIconDirective, i5.ɵNzTransitionPatchDirective], styles: ["i[_ngcontent-%COMP%]{font-size:16px;margin-right:5px}i[_ngcontent-%COMP%]:hover{font-size:20px}  .sspanel_content{overflow:overlay!important}  .leaf .ant-tree-checkbox-inner{left:30px}"] });
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
    }], function () { return [{ type: i1.ModalManagerService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXItbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9lcHNwbGFuZXQvY29tcG9uZW50cy9sYXllci1saXN0L2xheWVyLWxpc3QuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZXBzcGxhbmV0L2NvbXBvbmVudHMvbGF5ZXItbGlzdC9sYXllci1saXN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUEwQixNQUFNLGVBQWUsQ0FBQztBQUNsRSxPQUFPLEVBQUUsaUJBQWlCLEVBQXVCLE1BQU0sUUFBUSxDQUFDO0FBQ2hFLE9BQU8sRUFBcUIsVUFBVSxFQUFtQixNQUFNLG9CQUFvQixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNqRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQzs7Ozs7Ozs7SUNRakYsNEJBQTJCO0lBQ3pCLCtCQUEwQjtJQUFBLFlBQWdCO0lBQUEsaUJBQU87SUFDbkQsaUJBQU87OztJQURxQixlQUFnQjtJQUFoQixtQ0FBZ0I7Ozs7SUFFNUMsK0JBQXVDO0lBRXJDLCtCQUEwQjtJQUFBLFlBQWdCO0lBQUEsaUJBQU87SUFDakQsNEJBQTJHO0lBQXhCLHlQQUF1QjtJQUFDLGlCQUFJO0lBQy9HLDRCQUE0RztJQUF0Qix5UEFBcUI7SUFBQyxpQkFBSTtJQUtsSCxpQkFBTzs7O0lBUHFCLGVBQWdCO0lBQWhCLG1DQUFnQjtJQUNJLGVBQW9DO0lBQXBDLGtEQUFvQztJQUNyQyxlQUF3QztJQUF4QyxzREFBd0M7OztJQVJ6RiwrQkFBMEI7SUFDeEIseUZBRU87SUFDUCx5RkFTTztJQUNULGlCQUFPOzs7SUFiRSxlQUFrQjtJQUFs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QVNzQztRQUpsQyxnSEFBVywyQkFBdUIsSUFBQyx5R0FDckIsMEJBQXNCLElBREQscUhBRWYsMkJBQXVCLElBRlIsK0dBR2xCLHdCQUFvQixJQUhGO1FBS3ZDLGlCQUFVO1FBQ1YsMEhBZ0JjOzs7UUF6QlYsdUNBQXFCLHVCQUFBOztBRGNaLHdCQUF3QjtJQVZwQyxpQkFBaUIsQ0FBQztRQUNqQixHQUFHLEVBQUUsMEJBQTBCO1FBQy9CLElBQUksRUFBRSxpQ0FBaUM7UUFDdkMsSUFBSSxFQUFFLDBCQUEwQjtLQUNqQyxDQUFDO0dBTVcsd0JBQXdCLENBdUpwQztTQXZKWSx3QkFBd0I7dUZBQXhCLHdCQUF3QjtjQUxwQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsV0FBVyxFQUFFLDZCQUE2QjtnQkFDMUMsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7YUFDM0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudFJlZ2lzdGVyLCBNb2RhbE1hbmFnZXJTZXJ2aWNlIH0gZnJvbSAnZXBzZ2lzJztcbmltcG9ydCB7IE56Rm9ybWF0RW1pdEV2ZW50LCBOelRyZWVOb2RlLCBOelRyZWVDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL3RyZWUnO1xuaW1wb3J0IHsgU2NlbmVUcmVlVXRpbHMgfSBmcm9tICcuLi8uLi91dGlscy9zY2VuZVRyZWUtdXRpbHMnO1xuaW1wb3J0IHsgQmFzZVBsYW5ldFdpZGdldENvbXBvbmVudCB9IGZyb20gJy4uL2Jhc2Utd2lkZ2V0L2Jhc2Utd2lkZ2V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQbGFuZXRMYXllck1hbmFnZXJDb21wb25lbnQgfSBmcm9tICcuLi9sYXllci1tYW5hZ2VyL2xheWVyLW1hbmFnZXIuY29tcG9uZW50JztcbkBDb21wb25lbnRSZWdpc3Rlcih7XG4gIHVyaTogXCJlcHNnaXMtcGxhbmV0LWxheWVyLWxpc3RcIixcbiAgcGF0aDogXCJlcHNwbGFuZXQvY29tcG9uZW50cy9sYXllci1saXN0XCIsXG4gIG5hbWU6IFwiUGxhbmV0TGF5ZXJMaXN0Q29tcG9uZW50XCJcbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlcHNnaXMtcGxhbmV0LWxheWVyLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vbGF5ZXItbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xheWVyLWxpc3QuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgUGxhbmV0TGF5ZXJMaXN0Q29tcG9uZW50IGV4dGVuZHMgQmFzZVBsYW5ldFdpZGdldENvbXBvbmVudCB7XG4gIC8vIEBWaWV3Q2hpbGQoJ256VHJlZUNvbXBvbmVudCcsIHsgc3RhdGljOiBmYWxzZSB9KSBuelRyZWVDb21wb25lbnQhOiBOelRyZWVDb21wb25lbnQ7XG4gIHRlc3Rub2RlPVtcbiAgICB7XG4gICAgICB0aXRsZTogJ3BhcmVudCAwJyxcbiAgICAgIGtleTogJzEwMCcsXG4gICAgICBhdXRob3I6ICdORyBaT1JSTycsXG4gICAgICBcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHsgdGl0bGU6ICdsZWFmIDAtMCcsIGtleTogJzEwMDAnLCBhdXRob3I6ICdORyBaT1JSTycgfSxcbiAgICAgICAgeyB0aXRsZTogJ2xlYWYgMC0xJywga2V5OiAnMTAwMScsIGF1dGhvcjogJ05HIFpPUlJPJywgaXNMZWFmOiB0cnVlIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAncGFyZW50IDEnLFxuICAgICAga2V5OiAnMTAxJyxcbiAgICAgIGF1dGhvcjogJ05HIFpPUlJPJyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHsgdGl0bGU6ICdsZWFmIDEtMCcsIGtleTogJzEwMTAnLCBhdXRob3I6ICdORyBaT1JSTycsIGlzTGVhZjogdHJ1ZSB9LFxuICAgICAgICB7IHRpdGxlOiAnbGVhZiAxLTEnLCBrZXk6ICcxMDExJywgYXV0aG9yOiAnTkcgWk9SUk8nLCBpc0xlYWY6IHRydWUgfVxuICAgICAgXVxuICAgIH1cbiAgXVxuICBsYXllck5vZGVzOiBhbnkgPSBbXTtcbiAgc2VsZWN0ZWROb2RlOiBhbnk7XG4gIHR5cGU6IGFueTtcbiAgbGlzdE9mRGF0YSA9IFtdO1xuICBpc1Nob3cgPSBmYWxzZTtcbiAgYWN0aXZhdGVkTm9kZT86IE56VHJlZU5vZGU7XG4gIHRwbENvbnRlbnQ6IFRlbXBsYXRlUmVmPHt9PlxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxNYW5hZ2VyU2VydmljZSkge1xuICAgIHN1cGVyKCk7XG4gIH1cbiAgc3RhdGljIGdldENvbXBJbmZvKCkge1xuICAgIHJldHVybiB7IG5hbWU6IFwiUGxhbmV0TGF5ZXJMaXN0Q29tcG9uZW50XCIsIHBhdGg6IFwiZXBzcGxhbmV0L2NvbXBvbmVudHMvbGF5ZXItbGlzdFwiIH07XG4gIH1cbiAgbmdPbkluaXQoKSB7XG4gICAgLy/mraPluLhcbiAgICAvLyBYRS5NVlZNLndhdGNoKCgpID0+IFsuLi50aGlzLnZpZXcuc2NlbmVUcmVlLnJvb3QuY2hpbGRyZW5dLCAoKSA9PiB7XG4gICAgLy8gICBjb25zb2xlLmxvZygnc2NlbmVUcmVl5Y+R55Sf5Y+Y5YyW77yBJyk7XG4gICAgLy8gfSk7XG4gICAgLy/mraPluLhcbiAgICAvLyB2YXIgdXczID0gWEUuTVZWTS53YXRjaCh0aGlzLnZpZXcuc2NlbmVUcmVlLnJvb3QuY2hpbGRyZW4sICgpID0+IHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdzY2VuZVRyZWXlj5HnlJ/lj5jljJYzMzPvvIEnKTtcbiAgICAvLyB9KTtcbiAgICAvL+aJp+ihjOWkmuasoVxuICAgIC8vIHZhciB1dzIgPSBYRS5NVlZNLndhdGNoKHRoaXMudmlldy5zY2VuZVRyZWUucm9vdCwgJ2NoaWxkcmVuJywgKCkgPT4ge1xuICAgIC8vICAgY29uc29sZS5sb2coJ3NjZW5lVHJlZeWPkeeUn+WPmOWMljIyMicpO1xuICAgIC8vIH0pO1xuICAgIC8v5omn6KGM5aSa5qyhXG4gICAgLy8gWEUuTVZWTS53YXRjaCgoKSA9PiB0aGlzLnZpZXcuc2NlbmVUcmVlLnJvb3QudG9KU09OU3RyKCksICgpID0+IGNvbnNvbGUubG9nKCcxMjMnKSlcbiAgICB2YXIgdXczID0gWEUuTVZWTS53YXRjaCgoKSA9PiBbLi4udGhpcy52aWV3LnNjZW5lVHJlZS5yb290LmNoaWxkcmVuXSwgKCkgPT4ge1xuICAgICAgdGhpcy5sb2FkU2NlbmVUcmVlKCk7XG4gICAgfSk7XG4gIH1cbiAgb3BlbkZvbGRlcihkYXRhOiBOelRyZWVOb2RlIHwgTnpGb3JtYXRFbWl0RXZlbnQpOiB2b2lkIHtcbiAgICAvLyBkbyBzb21ldGhpbmcgaWYgdSB3YW50XG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgICBpZiAoZGF0YSBpbnN0YW5jZW9mIE56VHJlZU5vZGUpIHtcbiAgICAgIGRhdGEuaXNFeHBhbmRlZCA9ICFkYXRhLmlzRXhwYW5kZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBkYXRhLm5vZGU7XG4gICAgICBpZiAobm9kZSkge1xuICAgICAgICBub2RlLmlzRXhwYW5kZWQgPSAhbm9kZS5pc0V4cGFuZGVkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBsb2FkU2NlbmVUcmVlKCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgX2xheWVyTm9kZXMgPSBTY2VuZVRyZWVVdGlscy5TY2VuZVRyZWUyTmdab3Jyb1RyZWUodGhpcy52aWV3LnNjZW5lVHJlZS4kcmVmcy5sYXllcmxpc3QpO1xuICAgICAgY29uc29sZS5sb2coXCJzY2VuZVRyZWU6XCIsIF9sYXllck5vZGVzKVxuICAgICAgdGhpcy5sYXllck5vZGVzID0gX2xheWVyTm9kZXNbMF1bXCJjaGlsZHJlblwiXTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMubGF5ZXJOb2RlcylcbiAgICB9LCAxMDApO1xuXG4gIH1cblxuICBzZXR0aW5nKG5vZGUpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNvbmZpZylcbiAgICB0aGlzLnNlbGVjdGVkTm9kZSA9IG5vZGUub3JpZ2luO1xuICAgIHRoaXMudHlwZSA9IHRoaXMuc2VsZWN0ZWROb2RlW1wib3JpZ2luXCJdLmhhc093blByb3BlcnR5KCdsdW1pbmFuY2VBdFplbml0aCcpID8gXCLnk6bniYdcIiA6IFwi5b2x5YOPXCI7XG4gICAgdGhpcy5pc1Nob3cgPSB0cnVlO1xuICAgIHRoaXMubW9kYWxTZXJ2aWNlLmNyZWF0ZSh7XG4gICAgICB0aXRsZTogXCLlm77lsYLigJxcIiArIG5vZGUudGl0bGUgKyBcIuKAneWPguaVsFwiLFxuICAgICAgY29udGVudDogUGxhbmV0TGF5ZXJNYW5hZ2VyQ29tcG9uZW50LFxuICAgICAgY29tcG9uZW50UGFyYW1zOiB7XG4gICAgICAgIHNlbGVjdGVkTm9kZTogdGhpcy5zZWxlY3RlZE5vZGUsXG4gICAgICAgIHR5cGU6IHRoaXMudHlwZVxuICAgICAgfSxcbiAgICAgIGZvb3RlcjogbnVsbCxcbiAgICAgIG1hc2s6IGZhbHNlLFxuICAgICAgd2lkdGg6IDMyMFxuICAgIH0pXG4gIH1cbiAgZmx5VG8obm9kZSkge1xuICAgIG5vZGUub3JpZ2luLm9yaWdpbi5mbHlUbygpXG4gICAgY29uc29sZS5sb2cobm9kZSlcbiAgfVxuXG4gIC8qKlxuICAgKiDljZXlh7voioLngrlcbiAgICovXG4gIG9uTGVmdENsaWNrTm9kZShldnQ6IE56Rm9ybWF0RW1pdEV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coZXZ0Lm5vZGUpXG4gICAgdGhpcy5zZWxlY3RlZE5vZGUgPSBldnQubm9kZS5vcmlnaW47XG4gIH1cbiAgLyoqXG4gICAqIOmAieS4reeKtuaAgeaUueWPmFxuICAgKi9cbiAgb25DaGVja2VkQ2hhbmdlKGV2dDogTnpGb3JtYXRFbWl0RXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZyhldnQpXG4gICAgaWYgKGV2dC5ldmVudE5hbWUgIT09IFwiY2hlY2tcIiB8fCAhZXZ0Lm5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGV2dC5ub2RlLmNoaWxkcmVuLmxlbmd0aCA9PSAwKSB7XG4gICAgICBpZiAoZXZ0Lm5vZGUuaXNDaGVja2VkKSB7XG4gICAgICAgIC8v5Yqg6L295Zu+5bGCXG4gICAgICAgIFNjZW5lVHJlZVV0aWxzLkdldFhic2pDem1PYmplY3QoZXZ0Lm5vZGUpLnNob3cgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy/np7vpmaTlm77lsYJcbiAgICAgICAgU2NlbmVUcmVlVXRpbHMuR2V0WGJzakN6bU9iamVjdChldnQubm9kZSkuc2hvdyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7Ly/li77pgInkuLrniLboioLngrnml7ZcbiAgICAgIGlmIChldnQubm9kZS5pc0NoZWNrZWQpIHtcbiAgICAgICAgLy/liqDovb3lm77lsYJcbiAgICAgICAgZXZ0Lm5vZGUuY2hpbGRyZW4uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICBTY2VuZVRyZWVVdGlscy5HZXRYYnNqQ3ptT2JqZWN0KGl0ZW0pLnNob3cgPSB0cnVlO1xuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy/np7vpmaTlm77lsYJcbiAgICAgICAgZXZ0Lm5vZGUuY2hpbGRyZW4uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICBTY2VuZVRyZWVVdGlscy5HZXRYYnNqQ3ptT2JqZWN0KGl0ZW0pLnNob3cgPSBmYWxzZTtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIOWPjOWHu+iKgueCuVxuICAgKi9cbiAgb25EYmxDbGlja05vZGUoZXZ0OiBOekZvcm1hdEVtaXRFdmVudCkge1xuICAgIGlmIChldnQuZXZlbnROYW1lICE9PSBcImRibGNsaWNrXCIgfHwgIWV2dC5ub2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFNjZW5lVHJlZVV0aWxzLkdldFhic2pDem1PYmplY3QoZXZ0Lm5vZGUpLmZseVRvKCk7XG4gIH1cbiAgLyoqXG4gICAqIOaYvuekuuWPs+mUruiPnOWNlVxuICAgKi9cbiAgb25SaWdodENsaWNrKGV2dDogTnpGb3JtYXRFbWl0RXZlbnQpIHtcblxuICB9XG59XG4iLCI8bnotdHJlZSBcbiAgICAjbnpUcmVlQ29tcG9uZW50XG4gICAgW256RGF0YV09XCJsYXllck5vZGVzXCIgXG4gICAgbnpCbG9ja05vZGUgXG4gICAgbnpDaGVja2FibGUgXG4gICAgKG56Q2xpY2spPVwib25MZWZ0Q2xpY2tOb2RlKCRldmVudClcIlxuICAgIChuekRibENsaWNrKT1cIm9uRGJsQ2xpY2tOb2RlKCRldmVudCk7XCIgXG4gICAgKG56Q2hlY2tCb3hDaGFuZ2UpPVwib25DaGVja2VkQ2hhbmdlKCRldmVudCk7XCJcbiAgICAobnpDb250ZXh0TWVudSk9XCJvblJpZ2h0Q2xpY2soJGV2ZW50KTtcIlxuICAgIFtuelRyZWVUZW1wbGF0ZV09XCJuelRyZWVUZW1wbGF0ZVwiPlxuPC9uei10cmVlPlxuPG5nLXRlbXBsYXRlICNuelRyZWVUZW1wbGF0ZSBsZXQtbm9kZSBsZXQtb3JpZ2luPVwib3JpZ2luXCI+XG4gICAgPHNwYW4gY2xhc3M9XCJjdXN0b20tbm9kZVwiPlxuICAgICAgPHNwYW4gKm5nSWY9XCIhbm9kZS5pc0xlYWZcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmb2xkZXItbmFtZVwiPnt7IG5vZGUudGl0bGUgfX08L3NwYW4+XG4gICAgICA8L3NwYW4+XG4gICAgICA8c3BhbiAqbmdJZj1cIm5vZGUuaXNMZWFmXCIgY2xhc3M9XCJsZWFmXCI+XG4gICAgICAgIDwhLS0gPGkgbnotaWNvbiBbbnpUeXBlXT1cIm5vZGUuaXNFeHBhbmRlZCA/ICdmb2xkZXItb3BlbicgOiAnZm9sZGVyJ1wiIChjbGljayk9XCJvcGVuRm9sZGVyKG5vZGUpXCI+PC9pPiAtLT5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmb2xkZXItbmFtZVwiPnt7IG5vZGUudGl0bGUgfX08L3NwYW4+XG4gICAgICAgIDxpIHRpdGxlPVwi5Y+C5pWw6LCD5pW0XCIgc3R5bGU9XCJmbG9hdDogcmlnaHQ7XCIgbnotaWNvbiBbbnpJY29uZm9udF09XCInaWNvbi1lcHNnaXMtc2V0dGluZydcIiAoY2xpY2spPVwic2V0dGluZyhub2RlKVwiPjwvaT5cbiAgICAgICAgPGkgdGl0bGU9XCLnvKnmlL7oh7NcIiBzdHlsZT1cImZsb2F0OiByaWdodDtcIiBuei1pY29uIFtuekljb25mb250XT1cIidpY29uLWVwc2dpcy13b2Rld2VpemhpMSdcIiAoY2xpY2spPVwiZmx5VG8obm9kZSlcIj48L2k+XG5cbiAgICAgICAgPCEtLSA8ZGl2ICpuZ0lmPVwibm9kZS5pc0V4cGFuZGVkXCI+XG4gICAgICAgICAgICA8aSBuei1pY29uIFtuekljb25mb250XT1cIidpY29uLWVwc2dpcy13b2Rld2VpemhpMSdcIiAoY2xpY2spPVwiZmx5VG8obm9kZSlcIj48L2k+XG4gICAgICAgIDwvZGl2PiAtLT5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L3NwYW4+XG48L25nLXRlbXBsYXRlPiJdfQ==