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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXItbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9lcHNwbGFuZXQvY29tcG9uZW50cy9sYXllci1saXN0L2xheWVyLWxpc3QuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZXBzcGxhbmV0L2NvbXBvbmVudHMvbGF5ZXItbGlzdC9sYXllci1saXN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUEwQixNQUFNLGVBQWUsQ0FBQztBQUNsRSxPQUFPLEVBQUUsaUJBQWlCLEVBQXVCLE1BQU0sUUFBUSxDQUFDO0FBQ2hFLE9BQU8sRUFBcUIsVUFBVSxFQUFtQixNQUFNLG9CQUFvQixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNqRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQzs7Ozs7Ozs7SUNRakYsNEJBQTJCO0lBQ3pCLCtCQUEwQjtJQUFBLFlBQWdCO0lBQUEsaUJBQU87SUFDbkQsaUJBQU87OztJQURxQixlQUFnQjtJQUFoQixtQ0FBZ0I7Ozs7SUFFNUMsK0JBQXVDO0lBRXJDLCtCQUEwQjtJQUFBLFlBQWdCO0lBQUEsaUJBQU87SUFDakQsNEJBQTJHO0lBQXhCLHlQQUF1QjtJQUFDLGlCQUFJO0lBQy9HLDRCQUE0RztJQUF0Qix5UEFBcUI7SUFBQyxpQkFBSTtJQUtsSCxpQkFBTzs7O0lBUHFCLGVBQWdCO0lBQWhCLG1DQUFnQjtJQUNJLGVBQW9DO0lBQXBDLGtEQUFvQztJQUNyQyxlQUF3QztJQUF4QyxzREFBd0M7OztJQVJ6RiwrQkFBMEI7SUFDeEIseUZBRU87SUFDUCx5RkFTTztJQUNULGlCQUFPOzs7SUFiRSxlQUFrQjtJQUFs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QUUsQ0FBQyw2QkFBNkIsQ0FBQzthQUMzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50UmVnaXN0ZXIsIE1vZGFsTWFuYWdlclNlcnZpY2UgfSBmcm9tICdlcHNnaXMnO1xuaW1wb3J0IHsgTnpGb3JtYXRFbWl0RXZlbnQsIE56VHJlZU5vZGUsIE56VHJlZUNvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvdHJlZSc7XG5pbXBvcnQgeyBTY2VuZVRyZWVVdGlscyB9IGZyb20gJy4uLy4uL3V0aWxzL3NjZW5lVHJlZS11dGlscyc7XG5pbXBvcnQgeyBCYXNlUGxhbmV0V2lkZ2V0Q29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZS13aWRnZXQvYmFzZS13aWRnZXQuY29tcG9uZW50JztcbmltcG9ydCB7IFBsYW5ldExheWVyTWFuYWdlckNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVyLW1hbmFnZXIvbGF5ZXItbWFuYWdlci5jb21wb25lbnQnO1xuQENvbXBvbmVudFJlZ2lzdGVyKHtcbiAgdXJpOiBcImVwc2dpcy1wbGFuZXQtbGF5ZXItbGlzdFwiLFxuICBwYXRoOiBcImVwc3BsYW5ldC9jb21wb25lbnRzL2xheWVyLWxpc3RcIixcbiAgbmFtZTogXCJQbGFuZXRMYXllckxpc3RDb21wb25lbnRcIlxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Vwc2dpcy1wbGFuZXQtbGF5ZXItbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9sYXllci1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGF5ZXItbGlzdC5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBQbGFuZXRMYXllckxpc3RDb21wb25lbnQgZXh0ZW5kcyBCYXNlUGxhbmV0V2lkZ2V0Q29tcG9uZW50IHtcbiAgLy8gQFZpZXdDaGlsZCgnbnpUcmVlQ29tcG9uZW50JywgeyBzdGF0aWM6IGZhbHNlIH0pIG56VHJlZUNvbXBvbmVudCE6IE56VHJlZUNvbXBvbmVudDtcbiAgdGVzdG5vZGUgPSBbXG4gICAge1xuICAgICAgdGl0bGU6ICdwYXJlbnQgMCcsXG4gICAgICBrZXk6ICcxMDAnLFxuICAgICAgYXV0aG9yOiAnTkcgWk9SUk8nLFxuXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICB7IHRpdGxlOiAnbGVhZiAwLTAnLCBrZXk6ICcxMDAwJywgYXV0aG9yOiAnTkcgWk9SUk8nIH0sXG4gICAgICAgIHsgdGl0bGU6ICdsZWFmIDAtMScsIGtleTogJzEwMDEnLCBhdXRob3I6ICdORyBaT1JSTycsIGlzTGVhZjogdHJ1ZSB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ3BhcmVudCAxJyxcbiAgICAgIGtleTogJzEwMScsXG4gICAgICBhdXRob3I6ICdORyBaT1JSTycsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICB7IHRpdGxlOiAnbGVhZiAxLTAnLCBrZXk6ICcxMDEwJywgYXV0aG9yOiAnTkcgWk9SUk8nLCBpc0xlYWY6IHRydWUgfSxcbiAgICAgICAgeyB0aXRsZTogJ2xlYWYgMS0xJywga2V5OiAnMTAxMScsIGF1dGhvcjogJ05HIFpPUlJPJywgaXNMZWFmOiB0cnVlIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbiAgbGF5ZXJOb2RlczogYW55ID0gW107XG4gIHNlbGVjdGVkTm9kZTogYW55O1xuICB0eXBlOiBhbnk7XG4gIGxpc3RPZkRhdGEgPSBbXTtcbiAgaXNTaG93ID0gZmFsc2U7XG4gIGFjdGl2YXRlZE5vZGU/OiBOelRyZWVOb2RlO1xuICB0cGxDb250ZW50OiBUZW1wbGF0ZVJlZjx7fT5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsTWFuYWdlclNlcnZpY2UpIHtcbiAgICBzdXBlcigpO1xuICB9XG4gIHN0YXRpYyBnZXRDb21wSW5mbygpIHtcbiAgICByZXR1cm4geyBuYW1lOiBcIlBsYW5ldExheWVyTGlzdENvbXBvbmVudFwiLCBwYXRoOiBcImVwc3BsYW5ldC9jb21wb25lbnRzL2xheWVyLWxpc3RcIiB9O1xuICB9XG4gIG5nT25Jbml0KCkge1xuICAgIC8v5q2j5bi4XG4gICAgLy8gWEUuTVZWTS53YXRjaCgoKSA9PiBbLi4udGhpcy52aWV3LnNjZW5lVHJlZS5yb290LmNoaWxkcmVuXSwgKCkgPT4ge1xuICAgIC8vICAgY29uc29sZS5sb2coJ3NjZW5lVHJlZeWPkeeUn+WPmOWMlu+8gScpO1xuICAgIC8vIH0pO1xuICAgIC8v5q2j5bi4XG4gICAgLy8gdmFyIHV3MyA9IFhFLk1WVk0ud2F0Y2godGhpcy52aWV3LnNjZW5lVHJlZS5yb290LmNoaWxkcmVuLCAoKSA9PiB7XG4gICAgLy8gICBjb25zb2xlLmxvZygnc2NlbmVUcmVl5Y+R55Sf5Y+Y5YyWMzMz77yBJyk7XG4gICAgLy8gfSk7XG4gICAgLy/miafooYzlpJrmrKFcbiAgICAvLyB2YXIgdXcyID0gWEUuTVZWTS53YXRjaCh0aGlzLnZpZXcuc2NlbmVUcmVlLnJvb3QsICdjaGlsZHJlbicsICgpID0+IHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdzY2VuZVRyZWXlj5HnlJ/lj5jljJYyMjInKTtcbiAgICAvLyB9KTtcbiAgICAvL+aJp+ihjOWkmuasoVxuICAgIC8vIFhFLk1WVk0ud2F0Y2goKCkgPT4gdGhpcy52aWV3LnNjZW5lVHJlZS5yb290LnRvSlNPTlN0cigpLCAoKSA9PiBjb25zb2xlLmxvZygnMTIzJykpXG4gICAgdmFyIHV3MyA9IFhFLk1WVk0ud2F0Y2goKCkgPT4gWy4uLnRoaXMudmlldy5zY2VuZVRyZWUucm9vdC5jaGlsZHJlbl0sICgpID0+IHtcbiAgICAgIHRoaXMubG9hZFNjZW5lVHJlZSgpO1xuICAgIH0pO1xuICB9XG4gIG9wZW5Gb2xkZXIoZGF0YTogTnpUcmVlTm9kZSB8IE56Rm9ybWF0RW1pdEV2ZW50KTogdm9pZCB7XG4gICAgLy8gZG8gc29tZXRoaW5nIGlmIHUgd2FudFxuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBOelRyZWVOb2RlKSB7XG4gICAgICBkYXRhLmlzRXhwYW5kZWQgPSAhZGF0YS5pc0V4cGFuZGVkO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBub2RlID0gZGF0YS5ub2RlO1xuICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgbm9kZS5pc0V4cGFuZGVkID0gIW5vZGUuaXNFeHBhbmRlZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbG9hZFNjZW5lVHJlZSgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IF9sYXllck5vZGVzID0gU2NlbmVUcmVlVXRpbHMuU2NlbmVUcmVlMk5nWm9ycm9UcmVlKHRoaXMudmlldy5zY2VuZVRyZWUuJHJlZnMubGF5ZXJsaXN0KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwic2NlbmVUcmVlOlwiLCBfbGF5ZXJOb2RlcylcbiAgICAgIHRoaXMubGF5ZXJOb2RlcyA9IF9sYXllck5vZGVzWzBdW1wiY2hpbGRyZW5cIl07XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmxheWVyTm9kZXMpXG4gICAgfSwgMTAwKTtcblxuICB9XG5cbiAgc2V0dGluZyhub2RlKSB7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5jb25maWcpXG4gICAgdGhpcy5zZWxlY3RlZE5vZGUgPSBub2RlLm9yaWdpbjtcbiAgICB0aGlzLnR5cGUgPSB0aGlzLnNlbGVjdGVkTm9kZVtcIm9yaWdpblwiXS5oYXNPd25Qcm9wZXJ0eSgnbHVtaW5hbmNlQXRaZW5pdGgnKSA/IFwi55Om54mHXCIgOiBcIuW9seWDj1wiO1xuICAgIHRoaXMuaXNTaG93ID0gdHJ1ZTtcbiAgICB0aGlzLm1vZGFsU2VydmljZS5jcmVhdGUoe1xuICAgICAgdGl0bGU6IFwi5Zu+5bGC4oCcXCIgKyBub2RlLnRpdGxlICsgXCLigJ3lj4LmlbBcIixcbiAgICAgIGNvbnRlbnQ6IFBsYW5ldExheWVyTWFuYWdlckNvbXBvbmVudCxcbiAgICAgIGNvbXBvbmVudFBhcmFtczoge1xuICAgICAgICBzZWxlY3RlZE5vZGU6IHRoaXMuc2VsZWN0ZWROb2RlLFxuICAgICAgICB0eXBlOiB0aGlzLnR5cGVcbiAgICAgIH0sXG4gICAgICBmb290ZXI6IG51bGwsXG4gICAgICBtYXNrOiBmYWxzZSxcbiAgICAgIHdpZHRoOiAzMjBcbiAgICB9KVxuICB9XG4gIGZseVRvKG5vZGUpIHtcbiAgICBub2RlLm9yaWdpbi5vcmlnaW4uZmx5VG8oKVxuICAgIC8vIGNvbnNvbGUubG9nKG5vZGUpXG4gIH1cblxuICAvKipcbiAgICog5Y2V5Ye76IqC54K5XG4gICAqL1xuICBvbkxlZnRDbGlja05vZGUoZXZ0OiBOekZvcm1hdEVtaXRFdmVudCkge1xuICAgIGNvbnNvbGUubG9nKGV2dC5ub2RlKVxuICAgIHRoaXMuc2VsZWN0ZWROb2RlID0gZXZ0Lm5vZGUub3JpZ2luO1xuICB9XG4gIC8qKlxuICAgKiDpgInkuK3nirbmgIHmlLnlj5hcbiAgICovXG4gIG9uQ2hlY2tlZENoYW5nZShldnQ6IE56Rm9ybWF0RW1pdEV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coZXZ0KVxuICAgIGlmIChldnQuZXZlbnROYW1lICE9PSBcImNoZWNrXCIgfHwgIWV2dC5ub2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2hvd09ySGlkZUxheWVyKGV2dC5ub2RlKVxuICAgIC8vIGlmIChldnQubm9kZS5jaGlsZHJlbi5sZW5ndGggPT0gMCkge1xuICAgIC8vICAgaWYgKGV2dC5ub2RlLmlzQ2hlY2tlZCkge1xuICAgIC8vICAgICAvL+WKoOi9veWbvuWxglxuICAgIC8vICAgICBTY2VuZVRyZWVVdGlscy5HZXRYYnNqQ3ptT2JqZWN0KGV2dC5ub2RlKS5zaG93ID0gdHJ1ZTtcbiAgICAvLyAgIH0gZWxzZSB7XG4gICAgLy8gICAgIC8v56e76Zmk5Zu+5bGCXG4gICAgLy8gICAgIFNjZW5lVHJlZVV0aWxzLkdldFhic2pDem1PYmplY3QoZXZ0Lm5vZGUpLnNob3cgPSBmYWxzZTtcbiAgICAvLyAgIH1cbiAgICAvLyB9IGVsc2Ugey8v5Yu+6YCJ5Li654i26IqC54K55pe2XG4gICAgLy8gICBpZiAoZXZ0Lm5vZGUuaXNDaGVja2VkKSB7XG4gICAgLy8gICAgIC8v5Yqg6L295Zu+5bGCXG4gICAgLy8gICAgIGV2dC5ub2RlLmNoaWxkcmVuLmZvckVhY2goaXRlbSA9PiB7XG4gICAgLy8gICAgICAgU2NlbmVUcmVlVXRpbHMuR2V0WGJzakN6bU9iamVjdChpdGVtKS5zaG93ID0gdHJ1ZTtcbiAgICAvLyAgICAgfSlcbiAgICAvLyAgIH0gZWxzZSB7XG4gICAgLy8gICAgIC8v56e76Zmk5Zu+5bGCXG4gICAgLy8gICAgIGV2dC5ub2RlLmNoaWxkcmVuLmZvckVhY2goaXRlbSA9PiB7XG4gICAgLy8gICAgICAgU2NlbmVUcmVlVXRpbHMuR2V0WGJzakN6bU9iamVjdChpdGVtKS5zaG93ID0gZmFsc2U7XG4gICAgLy8gICAgIH0pXG4gICAgLy8gICB9XG4gICAgLy8gfVxuICB9XG4gIHNob3dPckhpZGVMYXllcihwYXJlbnROb2RlKSB7XG4gICAgaWYgKCFwYXJlbnROb2RlLmNoaWxkcmVuIHx8IHBhcmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoID09IDApIHtcbiAgICAgIGlmIChwYXJlbnROb2RlLmlzQ2hlY2tlZCkge1xuICAgICAgICAvL+WKoOi9veWbvuWxglxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInByZWFyZW1ha3JtXCIscGFyZW50Tm9kZSlcbiAgICAgICAgLy8gcGFyZW50Tm9kZS5vcmlnaW4ub3JpZ2luLnNob3c9dHJ1ZVxuICAgICAgICBTY2VuZVRyZWVVdGlscy5HZXRYYnNqQ3ptT2JqZWN0KHBhcmVudE5vZGUpLnNob3cgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy/np7vpmaTlm77lsYJcbiAgICAgICAgU2NlbmVUcmVlVXRpbHMuR2V0WGJzakN6bU9iamVjdChwYXJlbnROb2RlKS5zaG93ID0gZmFsc2U7XG4gICAgICAgIC8vIHBhcmVudE5vZGUub3JpZ2luLm9yaWdpbi5zaG93PWZhbHNlXG5cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGFyZW50Tm9kZS5jaGlsZHJlbi5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICB0aGlzLnNob3dPckhpZGVMYXllcihpdGVtKVxuICAgICAgICAvLyBpZiAoaXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vICAgdGhpcy5zaG93T3JIaWRlTGF5ZXIoaXRlbS5jaGlsZHJlbilcbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgLy8gICB0aGlzLnNob3dPckhpZGVMYXllcihpdGVtKVxuICAgICAgICAvLyB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuICAvKipcbiAgICog5Y+M5Ye76IqC54K5XG4gICAqL1xuICBvbkRibENsaWNrTm9kZShldnQ6IE56Rm9ybWF0RW1pdEV2ZW50KSB7XG4gICAgaWYgKGV2dC5ldmVudE5hbWUgIT09IFwiZGJsY2xpY2tcIiB8fCAhZXZ0Lm5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgU2NlbmVUcmVlVXRpbHMuR2V0WGJzakN6bU9iamVjdChldnQubm9kZSkuZmx5VG8oKTtcbiAgfVxuICAvKipcbiAgICog5pi+56S65Y+z6ZSu6I+c5Y2VXG4gICAqL1xuICBvblJpZ2h0Q2xpY2soZXZ0OiBOekZvcm1hdEVtaXRFdmVudCkge1xuXG4gIH1cbn1cbiIsIjxuei10cmVlIFxuICAgICNuelRyZWVDb21wb25lbnRcbiAgICBbbnpEYXRhXT1cImxheWVyTm9kZXNcIiBcbiAgICBuekJsb2NrTm9kZSBcbiAgICBuekNoZWNrYWJsZSBcbiAgICAobnpDbGljayk9XCJvbkxlZnRDbGlja05vZGUoJGV2ZW50KVwiXG4gICAgKG56RGJsQ2xpY2spPVwib25EYmxDbGlja05vZGUoJGV2ZW50KTtcIiBcbiAgICAobnpDaGVja0JveENoYW5nZSk9XCJvbkNoZWNrZWRDaGFuZ2UoJGV2ZW50KTtcIlxuICAgIChuekNvbnRleHRNZW51KT1cIm9uUmlnaHRDbGljaygkZXZlbnQpO1wiXG4gICAgW256VHJlZVRlbXBsYXRlXT1cIm56VHJlZVRlbXBsYXRlXCI+XG48L256LXRyZWU+XG48bmctdGVtcGxhdGUgI256VHJlZVRlbXBsYXRlIGxldC1ub2RlIGxldC1vcmlnaW49XCJvcmlnaW5cIj5cbiAgICA8c3BhbiBjbGFzcz1cImN1c3RvbS1ub2RlXCI+XG4gICAgICA8c3BhbiAqbmdJZj1cIiFub2RlLmlzTGVhZlwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImZvbGRlci1uYW1lXCI+e3sgbm9kZS50aXRsZSB9fTwvc3Bhbj5cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxzcGFuICpuZ0lmPVwibm9kZS5pc0xlYWZcIiBjbGFzcz1cImxlYWZcIj5cbiAgICAgICAgPCEtLSA8aSBuei1pY29uIFtuelR5cGVdPVwibm9kZS5pc0V4cGFuZGVkID8gJ2ZvbGRlci1vcGVuJyA6ICdmb2xkZXInXCIgKGNsaWNrKT1cIm9wZW5Gb2xkZXIobm9kZSlcIj48L2k+IC0tPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImZvbGRlci1uYW1lXCI+e3sgbm9kZS50aXRsZSB9fTwvc3Bhbj5cbiAgICAgICAgPGkgdGl0bGU9XCLlj4LmlbDosIPmlbRcIiBzdHlsZT1cImZsb2F0OiByaWdodDtcIiBuei1pY29uIFtuekljb25mb250XT1cIidpY29uLWVwc2dpcy1zZXR0aW5nJ1wiIChjbGljayk9XCJzZXR0aW5nKG5vZGUpXCI+PC9pPlxuICAgICAgICA8aSB0aXRsZT1cIue8qeaUvuiHs1wiIHN0eWxlPVwiZmxvYXQ6IHJpZ2h0O1wiIG56LWljb24gW256SWNvbmZvbnRdPVwiJ2ljb24tZXBzZ2lzLXdvZGV3ZWl6aGkxJ1wiIChjbGljayk9XCJmbHlUbyhub2RlKVwiPjwvaT5cblxuICAgICAgICA8IS0tIDxkaXYgKm5nSWY9XCJub2RlLmlzRXhwYW5kZWRcIj5cbiAgICAgICAgICAgIDxpIG56LWljb24gW256SWNvbmZvbnRdPVwiJ2ljb24tZXBzZ2lzLXdvZGV3ZWl6aGkxJ1wiIChjbGljayk9XCJmbHlUbyhub2RlKVwiPjwvaT5cbiAgICAgICAgPC9kaXY+IC0tPlxuICAgICAgPC9zcGFuPlxuICAgIDwvc3Bhbj5cbjwvbmctdGVtcGxhdGU+Il19