import { ChangeDetectorRef, Component, SimpleChanges , OnInit, Input } from '@angular/core';
import { ComponentRegister } from 'epsgis';
import { NzContextMenuService, NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { NzFormatEmitEvent, NzTreeNode } from 'ng-zorro-antd/tree';
import { SceneTreeUtils } from '../../utils/sceneTree-utils';
import { BasePlanetWidgetComponent } from '../base-widget/base-widget.component';

@ComponentRegister({
  uri: "epsgis-planet-layer-manager",
  path: "epsplanet/components/layer-manager",
  name: "PlanetLayerManagerComponent"
})
@Component({
  selector: "epsgis-planet-layer-manager",
  templateUrl: "./layer-manager.component.html",
  styleUrls: ["./layer-manager.component.scss"]
})
export class PlanetLayerManagerComponent extends BasePlanetWidgetComponent {
  // @Input() config;
  @Input() selectedNode;
  @Input() type;
  config={
    "basemapSchema":[
        {"en":"alpha","zh":"透明度"},
        {"en":"brightness","zh":"亮度"},
        {"en":"saturation","zh":"饱和度"},
        {"en":"contrast","zh":"对比度"},
        {"en":"hue","zh":"色相"},
        {"en":"gamma","zh":"伽马"}
    ],
    "tilesSchema":[
        {
            "en":"maximumScreenSpaceError",
            "zh":"显示精度"
        },
        {
            "en":"imageBasedLightingFactor",
            "zh":"散射强度"
        },
        {
            "en":"luminanceAtZenith",
            "zh":"材质底色"
        },
        {
            "en":"imageBasedLightingFactor",
            "zh":"镜面强度"
        }
    ]
}
  value1: 0;
  activatedNode?: NzTreeNode;
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

  activeNode(data: NzFormatEmitEvent): void {
    this.activatedNode = data.node!;
  }

  contextMenu($event: MouseEvent, menu: NzDropdownMenuComponent): void {
    this.nzContextMenuService.create($event, menu);
  }
  constructor(private nzContextMenuService: NzContextMenuService) {
    super();
  }
  selectDropdown(): void {
    // do something
  }

  layerNodes: any = [];

  static getCompInfo() {
    return { name: "PlanetLayerManagerComponent", path: "epsplanet/components/layer-manager" };
  }
  ngOnInit() {
    super.ngOnInit();
    // this.selectedNode=window["selectedNode"]
    // this.type=this.selectedNode["origin"].hasOwnProperty('luminanceAtZenith')?"瓦片":"影像";
    // setInterval(() => {
    //   this.selectedNode=window["selectedNode"]
    //   this.type=this.selectedNode["origin"].hasOwnProperty('luminanceAtZenith')?"瓦片":"影像";
    // }, 100);

  }
  loadlocate() {
    var isshow, _layers, layer, format, style, tileMatrixSet;
    var wmts = new XE.Tool.WMTSParser();
    // console.log(wmts)
    let url = "http://jojo1986.f3322.net:8888/geoserver/gwc/service/wmts?REQUEST=GetCapabilities";
    // url = wmts.addUrlParam(url);
    wmts
      .parser(url)
      .then(layers => {
        console.log(layers)
        isshow = false;
        _layers = layers;
        if (layers.length == 0) {
          console.log(
            "server has no supproted layers",
            "warning"
          );
        } else {
          //默认选择第一个Layer
          layer = layers[0];
          console.log(layer.rectangle)
          format = layer.urls[0].format;
          style = layer.styles[0].id;
          tileMatrixSet = layer.tileMatrixSets[0];
          this.view.sceneTree.root.children.push(
            {
              "czmObject": {
                "xbsjType": "Imagery",
                // "xbsjGuid": "02cb3e7e-9ab5-4aa0-8664-a28e2ad94abd",
                "name": layer.title,
                // "rectangle": layer.rectangle,
                "xbsjImageryProvider": {
                  "XbsjImageryProvider": {},
                  "UrlTemplateImageryProvider": {},
                  "WebMapTileServiceImageryProvider": {
                    "url": layer.urls[0].template,
                    "format": format,
                    "layer": layer.title,
                    "style": style,
                    "tileMatrixSetID": tileMatrixSet.tileMatrixSetID,
                    "tileMatrixLabels": tileMatrixSet.params.tileMatrixLabels,
                    "tilingScheme": tileMatrixSet.params.tilingScheme,
                    "maximumLevel": tileMatrixSet.maximumLevel
                  },
                  "createTileMapServiceImageryProvider": {},
                  "type": "WebMapTileServiceImageryProvider"
                }
              }
            }
          )
          var viewer = window['earth'].czm.viewer;
          viewer.camera.flyTo({
            destination: Cesium.Rectangle.fromDegrees(...layer.rectangle)
          })
          // this.view.camera.flyTo({
          //   destination:Cesium.Rectangle.fromDegrees(2.095444729128294, 0.5829525047032451, 2.097444730801541, 0.5843758506702889)
          // })
        }
      })
      .catch(err => {
        isshow = false;
        console.log(
          "GetCapabilities failed:" + err.message,
          "error"
        );
      });
    // console.log(url, layer)
  }
  test() {
    setTimeout(() => {
      console.log(this.selectedNode)
    }, 100);
  }
  onDblClickNode($event) {
    console.log($event.node.origin.origin)
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
  ngAfterViewInit() {
    super.ngAfterViewInit();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
}