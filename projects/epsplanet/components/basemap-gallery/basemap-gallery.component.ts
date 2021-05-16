import { Component } from "@angular/core";
import { ComponentRegister } from 'epsgis';
import { NzContextMenuService, NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { NzFormatEmitEvent, NzTreeNode } from 'ng-zorro-antd/tree';
import { SceneTreeUtils } from '../../utils/sceneTree-utils';
import { BasePlanetWidgetComponent } from '../base-widget/base-widget.component';

@ComponentRegister({
  uri: "epsgis-planet-basemap-gallery",
  path: "epsplanet/components/basemap-gallery",
  name: "PlanetBasemapGalleryComponent"
})
@Component({
  selector: "epsgis-planet-basemap-gallery",
  templateUrl: "./basemap-gallery.component.html",
  styleUrls: ["./basemap-gallery.component.scss"]
})
export class PlanetBasemapGalleryComponent extends BasePlanetWidgetComponent {
  activatedNode?: NzTreeNode;
  layerNodes: any = [];
  basemap: any;
  terrainData = [{
    "czmObject": {
      "img": "https://lab2.cesiumlab.com/upload/3fd1ac60-2683-4ae8-a5da-c0250edc836b/2019_08_02_19_45_38.jpg",
      "xbsjType": "Terrain",
      "xbsjGuid": "0b34ebd4-5a5b-4f1d-b2e8-a41797193aa8",
      "name": "中国14级（测试）",
      "xbsjTerrainProvider": {
        "type": "XbsjCesiumTerrainProvider",
        "XbsjEllipsoidTerrainProvider": {},
        "XbsjCesiumTerrainProvider": {
          "url": "https://lab.earthsdk.com/terrain/577fd5b0ac1f11e99dbd8fd044883638",
          "requestVertexNormals": true,
          "requestWaterMask": true
        },
        "GoogleEarthEnterpriseTerrainProvider": {}
      }
    }
  }];
  terrainIcon = "https://lab2.cesiumlab.com/upload/3fd1ac60-2683-4ae8-a5da-c0250edc836b/2019_08_02_19_45_38.jpg";
  constructor(private nzContextMenuService: NzContextMenuService) {
    super();
  }
  activeNode(data: NzFormatEmitEvent): void {
    this.activatedNode = data.node!;
  }
  contextMenu($event: MouseEvent, menu: NzDropdownMenuComponent): void {
    this.nzContextMenuService.create($event, menu);
  }
  /**
  * 选中状态改变
  */
  onCheckedChange(evt: NzFormatEmitEvent): void {
    if (evt.eventName !== "check" || !evt.node) {
      return;
    }
    if (evt.node.isChecked) {
      //加载图层
      SceneTreeUtils.GetXbsjCzmObject(evt.node).show = true;
    } else {
      //移除图层
      SceneTreeUtils.GetXbsjCzmObject(evt.node).show = false;
    }
  }
  onRightClick($event) {

  }
  ngOnInit() {
    super.ngOnInit();
    var uw3 = XE.MVVM.watch(() => [...this.view.sceneTree.$refs.basemap.children], () => {
      // console.log("底图变化")
      this.loadBaseTree();
    });
  }
  loadBaseTree() {
    setTimeout(() => {
      const _layerNodes = SceneTreeUtils.SceneTree2NgZorroTree(this.view.sceneTree.$refs.basemap);
      // console.log(_layerNodes)
      this.layerNodes = [..._layerNodes[0]["_children"]];
      this.view.sceneTree.$refs.basemap.children[0].czmObject.xbsjZIndex=-1
    }, 100);

  }
  selectImage(item) {
    console.log(SceneTreeUtils.loadLayerNode(item))
    const earth = this.view;
    // earth.sceneTree.root.children[0] = {};
    earth.sceneTree.$refs.basemap.children[0] = SceneTreeUtils.loadLayerNode(item);
  }
  selectTerrain(item) {
    this.view.sceneTree.$refs.basemap.children.push(item)
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
}