import { LayerServiceSource, LayerType } from './layer';
import { IXbsjCzmObject } from './layer-xbsj';

export interface ILayerFolder {
    title: string;
    expand?: false;
    children?: Array<IXbsjCzmObject | ILayerFolder>
    [key: string]: any;
}
/**
 * 图层节点配置
 */
export interface ILayerNode {
    type: LayerType;
    source: LayerServiceSource,
    title: string;
    url: string;
    /**
     * 兼容老的天地图配置属性
     */
    layer?: string;
    /**
     * 范围
     */
    rectangle?: any;
    token?: string;
    opacity?: number;
    ref?: string;
    guid?: string;
    srcCoordType?: string,
    destCoordType?: string
    [key: string]: any;
    /**
     * 扩展属性，属性名跟EsrthSdk中一致，主要处理一些我们未处理过的属性问题
     */
    extendOptions?: any;
}