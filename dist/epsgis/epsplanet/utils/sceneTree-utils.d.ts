import { NzTreeNode } from 'ng-zorro-antd/tree';
import { ILayerNode, ILayerFolder } from '../models/layer-config';
import { IXbsjCzmObject } from '../models/layer-xbsj';
export declare class SceneTreeUtils {
    static SceneTree2NgZorroTree(root: any): Array<NzTreeNode>;
    private static convertChildren;
    private static convertCzmObject;
    static GetXbsjCzmObject(node: NzTreeNode): any;
    static loadLayers(layerConfig: any): {
        children: ({
            title: string;
            ref: string;
            children: any[];
            tilte?: undefined;
        } | {
            tilte: string;
            ref: string;
            children: any[];
            title?: undefined;
        })[];
    };
    static loadLayerNode(item: ILayerNode | ILayerFolder): IXbsjCzmObject | ILayerFolder;
}
//# sourceMappingURL=sceneTree-utils.d.ts.map