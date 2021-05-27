import { Component, TemplateRef } from '@angular/core';
import { ComponentRegister, ModalManagerService } from 'epsgis';
import { NzFormatEmitEvent, NzTreeNode } from 'ng-zorro-antd/tree';
import { SceneTreeUtils } from '../../utils/sceneTree-utils';
import { BasePlanetWidgetComponent } from '../base-widget/base-widget.component';
import { PlanetLayerManagerComponent } from '../layer-manager/layer-manager.component';
@ComponentRegister({
  uri: "epsgis-planet-layer-list",
  path: "epsplanet/components/layer-list",
  name: "PlanetLayerListComponent"
})
@Component({
  selector: 'epsgis-planet-layer-list',
  templateUrl: './layer-list.component.html',
  styleUrls: ['./layer-list.component.scss'],
})
export class PlanetLayerListComponent extends BasePlanetWidgetComponent {
  layerNodes: any = [];
  selectedNode: any;
  type: any;
  listOfData = [];
  isShow = false;
  activatedNode?: NzTreeNode;
  tplContent: TemplateRef<{}>
  constructor(private modalService: ModalManagerService) {
    super();
  }
  static getCompInfo() {
    return { name: "PlanetLayerListComponent", path: "epsplanet/components/layer-list" };
  }
  ngOnInit() {
    //正常
    // XE.MVVM.watch(() => [...this.view.sceneTree.root.children], () => {
    //   console.log('sceneTree发生变化！');
    // });
    //正常
    // var uw3 = XE.MVVM.watch(this.view.sceneTree.root.children, () => {
    //   console.log('sceneTree发生变化333！');
    // });
    //执行多次
    // var uw2 = XE.MVVM.watch(this.view.sceneTree.root, 'children', () => {
    //   console.log('sceneTree发生变化222');
    // });
    //执行多次
    // XE.MVVM.watch(() => this.view.sceneTree.root.toJSONStr(), () => console.log('123'))
    var uw3 = XE.MVVM.watch(() => [...this.view.sceneTree.root.children], () => {
      this.loadSceneTree();
    });
  }
  openFolder(data: NzTreeNode | NzFormatEmitEvent): void {
    // do something if u want
    console.log(data)
    if (data instanceof NzTreeNode) {
      data.isExpanded = !data.isExpanded;
    } else {
      const node = data.node;
      if (node) {
        node.isExpanded = !node.isExpanded;
      }
    }
  }
  loadSceneTree() {
    setTimeout(() => {
      const _layerNodes = SceneTreeUtils.SceneTree2NgZorroTree(this.view.sceneTree.$refs.layerlist);
      // console.log("sceneTree:", _layerNodes)
      this.layerNodes = _layerNodes[0]["children"];
      // console.log(this.layerNodes)
    }, 100);

  }

  setting(node) {
    // console.log(this.config)
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
    })
  }
  flyTo(node) {
    node.origin.origin.flyTo()
    // console.log(node)
  }

  /**
   * 单击节点
   */
  onLeftClickNode(evt: NzFormatEmitEvent) {
    console.log(evt.node)
    this.selectedNode = evt.node.origin;
  }
  /**
   * 选中状态改变
   */
  onCheckedChange(evt: NzFormatEmitEvent) {
    console.log(evt)
    if (evt.eventName !== "check" || !evt.node) {
      return;
    }
    this.showOrHideLayer(evt.node)
  }
  showOrHideLayer(parentNode) {
    if (!parentNode.children || parentNode.children.length == 0) {
      if (parentNode.isChecked) {
        //加载图层
        SceneTreeUtils.GetXbsjCzmObject(parentNode).show = true;
      } else {
        //移除图层
        SceneTreeUtils.GetXbsjCzmObject(parentNode).show = false;
      }
    } else {
      parentNode.children.forEach(item => {
        this.showOrHideLayer(item)
      })
    }
  }
  /**
   * 双击节点
   */
  onDblClickNode(evt: NzFormatEmitEvent) {
    if (evt.eventName !== "dblclick" || !evt.node) {
      return;
    }
    SceneTreeUtils.GetXbsjCzmObject(evt.node).flyTo();
  }
  /**
   * 显示右键菜单
   */
  onRightClick(evt: NzFormatEmitEvent) {

  }
}
