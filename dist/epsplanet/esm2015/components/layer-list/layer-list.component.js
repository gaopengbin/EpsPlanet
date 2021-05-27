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
            this.layerNodes = _layerNodes[0]["children"];
        }, 100);
    }
    setting(node) {
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
        this.showOrHideLayer(evt.node);
    }
    showOrHideLayer(parentNode) {
        if (!parentNode.children || parentNode.children.length == 0) {
            if (parentNode.isChecked) {
                SceneTreeUtils.GetXbsjCzmObject(parentNode).show = true;
            }
            else {
                SceneTreeUtils.GetXbsjCzmObject(parentNode).show = false;
            }
        }
        else {
            parentNode.children.forEach(item => {
                this.showOrHideLayer(item);
            });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXItbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9lcHNwbGFuZXQvY29tcG9uZW50cy9sYXllci1saXN0L2xheWVyLWxpc3QuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZXBzcGxhbmV0L2NvbXBvbmVudHMvbGF5ZXItbGlzdC9sYXllci1saXN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFlLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxpQkFBaUIsRUFBdUIsTUFBTSxRQUFRLENBQUM7QUFDaEUsT0FBTyxFQUFxQixVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDN0QsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDakYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sMENBQTBDLENBQUM7Ozs7Ozs7O0lDUWpGLDRCQUEyQjtJQUN6QiwrQkFBMEI7SUFBQSxZQUFnQjtJQUFBLGlCQUFPO0lBQ25ELGlCQUFPOzs7SUFEcUIsZUFBZ0I7SUFBaEIsbUNBQWdCOzs7O0lBRTVDLCtCQUF1QztJQUVyQywrQkFBMEI7SUFBQSxZQUFnQjtJQUFBLGlCQUFPO0lBQ2pELDRCQUEyRztJQUF4Qix5UEFBdUI7SUFBQyxpQkFBSTtJQUMvRyw0QkFBNEc7SUFBdEIseVBBQXFCO0lBQUMsaUJBQUk7SUFLbEgsaUJBQU87OztJQVBxQixlQUFnQjtJQUFoQixtQ0FBZ0I7SUFDSSxlQUFvQztJQUFwQyxrREFBb0M7SUFDckMsZUFBd0M7SUFBeEMsc0RBQXdDOzs7SUFSekYsK0JBQTBCO0lBQ3hCLHlGQUVPO0lBQ1AseUZBU087SUFDVCxpQkFBTzs7O0lBYkUsZUFBa0I7SUFBbEIs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MEJBQXNCLElBREQscUhBRWYsMkJBQXVCLElBRlIsK0dBR2xCLHdCQUFvQixJQUhGO1FBS3ZDLGlCQUFVO1FBQ1YsMEhBZ0JjOzs7UUF6QlYsdUNBQXFCLHVCQUFBOztBRGNaLHdCQUF3QjtJQVZwQyxpQkFBaUIsQ0FBQztRQUNqQixHQUFHLEVBQUUsMEJBQTBCO1FBQy9CLElBQUksRUFBRSxpQ0FBaUM7UUFDdkMsSUFBSSxFQUFFLDBCQUEwQjtLQUNqQyxDQUFDO0dBTVcsd0JBQXdCLENBNEhwQztTQTVIWSx3QkFBd0I7dUZBQXhCLHdCQUF3QjtjQUxwQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsV0FBVyxFQUFFLDZCQUE2QjtnQkFDMUMsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7YUFDM0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnRSZWdpc3RlciwgTW9kYWxNYW5hZ2VyU2VydmljZSB9IGZyb20gJ2Vwc2dpcyc7XG5pbXBvcnQgeyBOekZvcm1hdEVtaXRFdmVudCwgTnpUcmVlTm9kZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdHJlZSc7XG5pbXBvcnQgeyBTY2VuZVRyZWVVdGlscyB9IGZyb20gJy4uLy4uL3V0aWxzL3NjZW5lVHJlZS11dGlscyc7XG5pbXBvcnQgeyBCYXNlUGxhbmV0V2lkZ2V0Q29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZS13aWRnZXQvYmFzZS13aWRnZXQuY29tcG9uZW50JztcbmltcG9ydCB7IFBsYW5ldExheWVyTWFuYWdlckNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVyLW1hbmFnZXIvbGF5ZXItbWFuYWdlci5jb21wb25lbnQnO1xuQENvbXBvbmVudFJlZ2lzdGVyKHtcbiAgdXJpOiBcImVwc2dpcy1wbGFuZXQtbGF5ZXItbGlzdFwiLFxuICBwYXRoOiBcImVwc3BsYW5ldC9jb21wb25lbnRzL2xheWVyLWxpc3RcIixcbiAgbmFtZTogXCJQbGFuZXRMYXllckxpc3RDb21wb25lbnRcIlxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Vwc2dpcy1wbGFuZXQtbGF5ZXItbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9sYXllci1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGF5ZXItbGlzdC5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBQbGFuZXRMYXllckxpc3RDb21wb25lbnQgZXh0ZW5kcyBCYXNlUGxhbmV0V2lkZ2V0Q29tcG9uZW50IHtcbiAgbGF5ZXJOb2RlczogYW55ID0gW107XG4gIHNlbGVjdGVkTm9kZTogYW55O1xuICB0eXBlOiBhbnk7XG4gIGxpc3RPZkRhdGEgPSBbXTtcbiAgaXNTaG93ID0gZmFsc2U7XG4gIGFjdGl2YXRlZE5vZGU/OiBOelRyZWVOb2RlO1xuICB0cGxDb250ZW50OiBUZW1wbGF0ZVJlZjx7fT5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsTWFuYWdlclNlcnZpY2UpIHtcbiAgICBzdXBlcigpO1xuICB9XG4gIHN0YXRpYyBnZXRDb21wSW5mbygpIHtcbiAgICByZXR1cm4geyBuYW1lOiBcIlBsYW5ldExheWVyTGlzdENvbXBvbmVudFwiLCBwYXRoOiBcImVwc3BsYW5ldC9jb21wb25lbnRzL2xheWVyLWxpc3RcIiB9O1xuICB9XG4gIG5nT25Jbml0KCkge1xuICAgIC8v5q2j5bi4XG4gICAgLy8gWEUuTVZWTS53YXRjaCgoKSA9PiBbLi4udGhpcy52aWV3LnNjZW5lVHJlZS5yb290LmNoaWxkcmVuXSwgKCkgPT4ge1xuICAgIC8vICAgY29uc29sZS5sb2coJ3NjZW5lVHJlZeWPkeeUn+WPmOWMlu+8gScpO1xuICAgIC8vIH0pO1xuICAgIC8v5q2j5bi4XG4gICAgLy8gdmFyIHV3MyA9IFhFLk1WVk0ud2F0Y2godGhpcy52aWV3LnNjZW5lVHJlZS5yb290LmNoaWxkcmVuLCAoKSA9PiB7XG4gICAgLy8gICBjb25zb2xlLmxvZygnc2NlbmVUcmVl5Y+R55Sf5Y+Y5YyWMzMz77yBJyk7XG4gICAgLy8gfSk7XG4gICAgLy/miafooYzlpJrmrKFcbiAgICAvLyB2YXIgdXcyID0gWEUuTVZWTS53YXRjaCh0aGlzLnZpZXcuc2NlbmVUcmVlLnJvb3QsICdjaGlsZHJlbicsICgpID0+IHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdzY2VuZVRyZWXlj5HnlJ/lj5jljJYyMjInKTtcbiAgICAvLyB9KTtcbiAgICAvL+aJp+ihjOWkmuasoVxuICAgIC8vIFhFLk1WVk0ud2F0Y2goKCkgPT4gdGhpcy52aWV3LnNjZW5lVHJlZS5yb290LnRvSlNPTlN0cigpLCAoKSA9PiBjb25zb2xlLmxvZygnMTIzJykpXG4gICAgdmFyIHV3MyA9IFhFLk1WVk0ud2F0Y2goKCkgPT4gWy4uLnRoaXMudmlldy5zY2VuZVRyZWUucm9vdC5jaGlsZHJlbl0sICgpID0+IHtcbiAgICAgIHRoaXMubG9hZFNjZW5lVHJlZSgpO1xuICAgIH0pO1xuICB9XG4gIG9wZW5Gb2xkZXIoZGF0YTogTnpUcmVlTm9kZSB8IE56Rm9ybWF0RW1pdEV2ZW50KTogdm9pZCB7XG4gICAgLy8gZG8gc29tZXRoaW5nIGlmIHUgd2FudFxuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBOelRyZWVOb2RlKSB7XG4gICAgICBkYXRhLmlzRXhwYW5kZWQgPSAhZGF0YS5pc0V4cGFuZGVkO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBub2RlID0gZGF0YS5ub2RlO1xuICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgbm9kZS5pc0V4cGFuZGVkID0gIW5vZGUuaXNFeHBhbmRlZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbG9hZFNjZW5lVHJlZSgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IF9sYXllck5vZGVzID0gU2NlbmVUcmVlVXRpbHMuU2NlbmVUcmVlMk5nWm9ycm9UcmVlKHRoaXMudmlldy5zY2VuZVRyZWUuJHJlZnMubGF5ZXJsaXN0KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwic2NlbmVUcmVlOlwiLCBfbGF5ZXJOb2RlcylcbiAgICAgIHRoaXMubGF5ZXJOb2RlcyA9IF9sYXllck5vZGVzWzBdW1wiY2hpbGRyZW5cIl07XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmxheWVyTm9kZXMpXG4gICAgfSwgMTAwKTtcblxuICB9XG5cbiAgc2V0dGluZyhub2RlKSB7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5jb25maWcpXG4gICAgdGhpcy5zZWxlY3RlZE5vZGUgPSBub2RlLm9yaWdpbjtcbiAgICB0aGlzLnR5cGUgPSB0aGlzLnNlbGVjdGVkTm9kZVtcIm9yaWdpblwiXS5oYXNPd25Qcm9wZXJ0eSgnbHVtaW5hbmNlQXRaZW5pdGgnKSA/IFwi55Om54mHXCIgOiBcIuW9seWDj1wiO1xuICAgIHRoaXMuaXNTaG93ID0gdHJ1ZTtcbiAgICB0aGlzLm1vZGFsU2VydmljZS5jcmVhdGUoe1xuICAgICAgdGl0bGU6IFwi5Zu+5bGC4oCcXCIgKyBub2RlLnRpdGxlICsgXCLigJ3lj4LmlbBcIixcbiAgICAgIGNvbnRlbnQ6IFBsYW5ldExheWVyTWFuYWdlckNvbXBvbmVudCxcbiAgICAgIGNvbXBvbmVudFBhcmFtczoge1xuICAgICAgICBzZWxlY3RlZE5vZGU6IHRoaXMuc2VsZWN0ZWROb2RlLFxuICAgICAgICB0eXBlOiB0aGlzLnR5cGVcbiAgICAgIH0sXG4gICAgICBmb290ZXI6IG51bGwsXG4gICAgICBtYXNrOiBmYWxzZSxcbiAgICAgIHdpZHRoOiAzMjBcbiAgICB9KVxuICB9XG4gIGZseVRvKG5vZGUpIHtcbiAgICBub2RlLm9yaWdpbi5vcmlnaW4uZmx5VG8oKVxuICAgIC8vIGNvbnNvbGUubG9nKG5vZGUpXG4gIH1cblxuICAvKipcbiAgICog5Y2V5Ye76IqC54K5XG4gICAqL1xuICBvbkxlZnRDbGlja05vZGUoZXZ0OiBOekZvcm1hdEVtaXRFdmVudCkge1xuICAgIGNvbnNvbGUubG9nKGV2dC5ub2RlKVxuICAgIHRoaXMuc2VsZWN0ZWROb2RlID0gZXZ0Lm5vZGUub3JpZ2luO1xuICB9XG4gIC8qKlxuICAgKiDpgInkuK3nirbmgIHmlLnlj5hcbiAgICovXG4gIG9uQ2hlY2tlZENoYW5nZShldnQ6IE56Rm9ybWF0RW1pdEV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coZXZ0KVxuICAgIGlmIChldnQuZXZlbnROYW1lICE9PSBcImNoZWNrXCIgfHwgIWV2dC5ub2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2hvd09ySGlkZUxheWVyKGV2dC5ub2RlKVxuICB9XG4gIHNob3dPckhpZGVMYXllcihwYXJlbnROb2RlKSB7XG4gICAgaWYgKCFwYXJlbnROb2RlLmNoaWxkcmVuIHx8IHBhcmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoID09IDApIHtcbiAgICAgIGlmIChwYXJlbnROb2RlLmlzQ2hlY2tlZCkge1xuICAgICAgICAvL+WKoOi9veWbvuWxglxuICAgICAgICBTY2VuZVRyZWVVdGlscy5HZXRYYnNqQ3ptT2JqZWN0KHBhcmVudE5vZGUpLnNob3cgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy/np7vpmaTlm77lsYJcbiAgICAgICAgU2NlbmVUcmVlVXRpbHMuR2V0WGJzakN6bU9iamVjdChwYXJlbnROb2RlKS5zaG93ID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmVudE5vZGUuY2hpbGRyZW4uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgdGhpcy5zaG93T3JIaWRlTGF5ZXIoaXRlbSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiDlj4zlh7voioLngrlcbiAgICovXG4gIG9uRGJsQ2xpY2tOb2RlKGV2dDogTnpGb3JtYXRFbWl0RXZlbnQpIHtcbiAgICBpZiAoZXZ0LmV2ZW50TmFtZSAhPT0gXCJkYmxjbGlja1wiIHx8ICFldnQubm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBTY2VuZVRyZWVVdGlscy5HZXRYYnNqQ3ptT2JqZWN0KGV2dC5ub2RlKS5mbHlUbygpO1xuICB9XG4gIC8qKlxuICAgKiDmmL7npLrlj7PplK7oj5zljZVcbiAgICovXG4gIG9uUmlnaHRDbGljayhldnQ6IE56Rm9ybWF0RW1pdEV2ZW50KSB7XG5cbiAgfVxufVxuIiwiPG56LXRyZWUgXG4gICAgI256VHJlZUNvbXBvbmVudFxuICAgIFtuekRhdGFdPVwibGF5ZXJOb2Rlc1wiIFxuICAgIG56QmxvY2tOb2RlIFxuICAgIG56Q2hlY2thYmxlIFxuICAgIChuekNsaWNrKT1cIm9uTGVmdENsaWNrTm9kZSgkZXZlbnQpXCJcbiAgICAobnpEYmxDbGljayk9XCJvbkRibENsaWNrTm9kZSgkZXZlbnQpO1wiIFxuICAgIChuekNoZWNrQm94Q2hhbmdlKT1cIm9uQ2hlY2tlZENoYW5nZSgkZXZlbnQpO1wiXG4gICAgKG56Q29udGV4dE1lbnUpPVwib25SaWdodENsaWNrKCRldmVudCk7XCJcbiAgICBbbnpUcmVlVGVtcGxhdGVdPVwibnpUcmVlVGVtcGxhdGVcIj5cbjwvbnotdHJlZT5cbjxuZy10ZW1wbGF0ZSAjbnpUcmVlVGVtcGxhdGUgbGV0LW5vZGUgbGV0LW9yaWdpbj1cIm9yaWdpblwiPlxuICAgIDxzcGFuIGNsYXNzPVwiY3VzdG9tLW5vZGVcIj5cbiAgICAgIDxzcGFuICpuZ0lmPVwiIW5vZGUuaXNMZWFmXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZm9sZGVyLW5hbWVcIj57eyBub2RlLnRpdGxlIH19PC9zcGFuPlxuICAgICAgPC9zcGFuPlxuICAgICAgPHNwYW4gKm5nSWY9XCJub2RlLmlzTGVhZlwiIGNsYXNzPVwibGVhZlwiPlxuICAgICAgICA8IS0tIDxpIG56LWljb24gW256VHlwZV09XCJub2RlLmlzRXhwYW5kZWQgPyAnZm9sZGVyLW9wZW4nIDogJ2ZvbGRlcidcIiAoY2xpY2spPVwib3BlbkZvbGRlcihub2RlKVwiPjwvaT4gLS0+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZm9sZGVyLW5hbWVcIj57eyBub2RlLnRpdGxlIH19PC9zcGFuPlxuICAgICAgICA8aSB0aXRsZT1cIuWPguaVsOiwg+aVtFwiIHN0eWxlPVwiZmxvYXQ6IHJpZ2h0O1wiIG56LWljb24gW256SWNvbmZvbnRdPVwiJ2ljb24tZXBzZ2lzLXNldHRpbmcnXCIgKGNsaWNrKT1cInNldHRpbmcobm9kZSlcIj48L2k+XG4gICAgICAgIDxpIHRpdGxlPVwi57yp5pS+6IezXCIgc3R5bGU9XCJmbG9hdDogcmlnaHQ7XCIgbnotaWNvbiBbbnpJY29uZm9udF09XCInaWNvbi1lcHNnaXMtd29kZXdlaXpoaTEnXCIgKGNsaWNrKT1cImZseVRvKG5vZGUpXCI+PC9pPlxuXG4gICAgICAgIDwhLS0gPGRpdiAqbmdJZj1cIm5vZGUuaXNFeHBhbmRlZFwiPlxuICAgICAgICAgICAgPGkgbnotaWNvbiBbbnpJY29uZm9udF09XCInaWNvbi1lcHNnaXMtd29kZXdlaXpoaTEnXCIgKGNsaWNrKT1cImZseVRvKG5vZGUpXCI+PC9pPlxuICAgICAgICA8L2Rpdj4gLS0+XG4gICAgICA8L3NwYW4+XG4gICAgPC9zcGFuPlxuPC9uZy10ZW1wbGF0ZT4iXX0=