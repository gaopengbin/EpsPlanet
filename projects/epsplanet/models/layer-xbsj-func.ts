
//////////////////////////////////////////////////////////////////////////////////
//初始化一个空的对象
//////////////////////////////////////////////////////////////////////////////////

import { IXbsjCzmObject, IXbsjImageryLayerNode, IXbsjTilesetLayerNode, IXbsjTerrainLayerNode } from './layer-xbsj';
import { ILayerFolder } from './layer-config';
import { LayerType } from './layer';

export function newXbsjFolderNode(title: string): ILayerFolder {
    return {
        title: title,
        children: []
    };
}

export function newXbsjLayerNode(type: string, title: string, url: string): IXbsjCzmObject {
    const _type = type.toLocaleLowerCase();
    let result: IXbsjCzmObject = { czmObject: null };
    switch (_type) {
        case LayerType.Imagery.toLocaleLowerCase():
            result.czmObject = newXbsjImageryLayerNode(title, url);
            break;
        case LayerType.Tileset.toLocaleLowerCase():
            result.czmObject = newXbsjTilesetLayerNode(title, url);
            break;
        case LayerType.Terrain.toLocaleLowerCase():
            result.czmObject = newXbsjTerrainLayerNode(title, url);
            break;
        default:
            break;
    }
    return result;
}
function newXbsjImageryLayerNode(title: string, url: string): IXbsjImageryLayerNode {
    let node: IXbsjImageryLayerNode = {
        xbsjType: LayerType.Imagery,
        name: title,
        enable: true,
        show: true,
        xbsjImageryProvider: {
            XbsjImageryProvider: {
                url: url
            }
        }

    };
    return node;
}

function newXbsjTilesetLayerNode(title: string, url: string): IXbsjTilesetLayerNode {
    let node: IXbsjTilesetLayerNode = {
        xbsjType: LayerType.Tileset,
        name: title,
        url: url,
        enable: true,
        show: true,
    };
    return node;
}

function newXbsjTerrainLayerNode(title: string, url: string): IXbsjTerrainLayerNode {
    return {
        xbsjType: LayerType.Terrain,
        name: title,
        enable: true,
        show: true,
        xbsjTerrainProvider: {
            type: "XbsjCesiumTerrainProvider",
            XbsjEllipsoidTerrainProvider: {},
            XbsjCesiumTerrainProvider: {
                url: url,
                requestVertexNormals: true,
                requestWaterMask: true
            }
        }
    }
}