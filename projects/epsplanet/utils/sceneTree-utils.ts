import { NzTreeNode } from 'ng-zorro-antd/tree';
import { IdGenerater } from 'epsgis';
import { isArray } from 'lodash';
import { ILayerNode, ILayerFolder } from '../models/layer-config';
import { newXbsjFolderNode, newXbsjLayerNode } from '../models/layer-xbsj-func';
import { IXbsjCzmObject } from '../models/layer-xbsj';

/**
 *  场景树帮助类 create by ruir
 */
export class SceneTreeUtils {
    /**
     * 将场景树数据转为ngZorro结构的树数据
     * @param root this.view.sceneTree.root
     */
    static SceneTree2NgZorroTree(root: any): Array<NzTreeNode> {
        if (!root || !root.children || root.children.length <= 0) {
            return root;
        }
        let rootNode: NzTreeNode = null;
        if (root.title && root.title !== "未命名") {
            rootNode = new NzTreeNode({
                title: root.title,
                expanded: root.expand === true,
                key: root.guid || root.xbsjGuid || IdGenerater.newGuid(),
                origin: root,
                isLeaf: false,
                parentNode: null
            });
            rootNode.level = -1
            // rootNode.isExpanded = root.expand === true;
        }
        const _layerNodes: Array<NzTreeNode> = [];
        if (rootNode) {
            rootNode.children.push(...SceneTreeUtils.convertChildren(root.children, rootNode));
            _layerNodes.push(rootNode);
        } else {
            _layerNodes.push(...SceneTreeUtils.convertChildren(root.children, rootNode));
        }

        return _layerNodes;
    }
    /**
     * 
     * @param children 
     * @param parentNode 
     */
    private static convertChildren(children: Array<any>, parentNode: any): Array<NzTreeNode> {
        if (!children || children.length <= 0) {
            return [];
        }
        const _layerNodes: Array<NzTreeNode> = [];
        children.forEach(item => {
            let node: NzTreeNode = null;
            if (item.children) { // item.title
                node = new NzTreeNode({
                    level: parentNode.level + 1,
                    title: item.title,
                    isExpanded: item.expand === true,
                    // isChecked: true,
                    // checked:item.isSelected,
                    key: item.guid || item.xbsjGuid || IdGenerater.newGuid(),
                    origin: item,
                    isLeaf: false,
                    parentNode: parentNode
                });
                node.parentNode = parentNode;
                node.level = parentNode.level + 1;
                if (item.children.length >= 1) {
                    node.children.push(...SceneTreeUtils.convertChildren(item.children, node));
                }

                // node.isExpanded = item.expand === true;
                let checkList = []
                node.children.forEach((child: any) => {
                    if (child.children && child.children.length > 0) {
                        checkList.push(child.isChecked)
                    } else {
                        if (child.origin.origin.show) {
                            checkList.push(true)
                        } else {
                            checkList.push(false)
                        }
                    }


                })
                if (SceneTreeUtils.isAllEqual(checkList) && checkList[0] == true) {
                    node.isChecked = true
                } else if (SceneTreeUtils.isAllEqual(checkList) && checkList[0] == false) {
                    node.isChecked = false
                } else if (!SceneTreeUtils.isAllEqual(checkList)) {
                    node.isHalfChecked = true
                }
                // node.isChecked = true;//初始默认勾选父节点
                _layerNodes.push(node);
            } else {
                //之前叶节点拿不到parentNode,强行从它的origin中取到parentNode,用于实现节点的单选
                let childNode = SceneTreeUtils.convertCzmObject(item.czmObject, parentNode)
                childNode.parentNode = childNode.origin.parentNode;
                childNode.level = childNode.parentNode.level + 1
                _layerNodes.push(childNode);
                // _layerNodes.push(SceneTreeUtils.convertCzmObject(item.czmObject, parentNode));
            }
        });
        return _layerNodes;
    }

    static isAllEqual(array) {
        if (array.length > 0) {
            return !array.some(function (value, index) {
                return value !== array[0];
            });
        } else {
            return true;
        }
    }
    /**
     * 
     * @param czmObject 
     */
    private static convertCzmObject(czmObject: any, parentNode: NzTreeNode): NzTreeNode {
        if (!czmObject) {
            return null;
        }
        return new NzTreeNode({
            title: czmObject.name,
            key: czmObject.guid || czmObject.xbsjGuid || IdGenerater.newGuid(),
            origin: czmObject,
            isLeaf: true,
            // checked: czmObject.isSelected,
            checked: czmObject.show,
            parentNode: parentNode
        });
    }
    /**
     * 
     */
    static GetXbsjCzmObject(node: NzTreeNode) {
        // return node?.origin?.origin;
        return node && node.origin && node.origin.origin;
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////
    /**
     * 图层加载
     * @param layerConfig 
     */
    static loadLayers(layerConfig: any) {
        if (!layerConfig) {
            return null;
        }
        if (!layerConfig.basemaps && !layerConfig.layers) {
            return null;
        }
        const _layerNodes: Array<any> = [];
        //固定底图和其他图层分组
        const _layerlist = [
            {
                "title": "basemap",
                "ref": "basemap",
                "children": [],
            },
            {
                "title": "layerlist",
                "ref": "layerlist",
                "children": [],
            },
            {
                "tilte": "pin",
                "ref": "pin",
                "children": []
            }
        ]

        //底图
        if (typeof layerConfig.basemaps === "object" && isArray(layerConfig.basemaps)) {
            layerConfig.basemaps.forEach((item: ILayerNode | ILayerFolder) => {
                _layerlist[0].children.push(SceneTreeUtils.loadLayerNode(item));
            });
        }
        //图层
        if (typeof layerConfig.layers === "object" && isArray(layerConfig.layers)) {
            layerConfig.layers.forEach((item: ILayerNode | ILayerFolder) => {
                _layerlist[1].children.push(SceneTreeUtils.loadLayerNode(item));
            });
        }
        return { children: _layerlist };
    }
    /**
     * 
     */
    static loadLayerNode(item: ILayerNode | ILayerFolder) {
        if (isArray(item.children)) {
            //目录
            const node: ILayerFolder = newXbsjFolderNode(item.title);
            if (item.children && item.children.length >= 1) {
                item.children.forEach((child: ILayerNode | ILayerFolder) => {
                    node.children.push(SceneTreeUtils.loadLayerNode(child))
                })
            }
            return node;
        } else if (item.url || item.layer) {
            //图层
            // tianditu 需要将layer转换为url

            const node: IXbsjCzmObject = newXbsjLayerNode(item.type, item.title, item.url);
            node.czmObject.xbsjGuid = item.guid;
            node.czmObject.show = item.show?true:false;
            node.ref = item.ref;
            if (node.czmObject.hasOwnProperty("xbsjImageryProvider")) {
                //影像图层处理
                if (item.srcCoordType) {
                    //原坐标系
                    node.czmObject.xbsjImageryProvider.XbsjImageryProvider.srcCoordType = item.srcCoordType;
                }
                if (item.dstCoordType) {
                    //转换目标坐标系
                    node.czmObject.xbsjImageryProvider.XbsjImageryProvider.dstCoordType = item.dstCoordType;
                }
            } else if (node.czmObject.hasOwnProperty("xbsjTerrainProvider")) {
                //地形图层处理
            }
            else if (node.hasOwnProperty("url")) {
                //瓦片图层处理

            }
            if (item.extendOptions) {
                node.czmObject = Object.assign(node.czmObject, item.extendOptions);
            }
            return node;
        }
        return null;
    }
}