import { LayerServiceSource, LayerType } from './layer';
import { IXbsjCzmObject } from './layer-xbsj';
export interface ILayerFolder {
    title: string;
    expand?: false;
    children?: Array<IXbsjCzmObject | ILayerFolder>;
    [key: string]: any;
}
export interface ILayerNode {
    type: LayerType;
    source: LayerServiceSource;
    title: string;
    url: string;
    layer?: string;
    rectangle?: any;
    token?: string;
    opacity?: number;
    ref?: string;
    guid?: string;
    srcCoordType?: string;
    destCoordType?: string;
    [key: string]: any;
    extendOptions?: any;
}
//# sourceMappingURL=layer-config.d.ts.map