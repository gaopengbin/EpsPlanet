export interface IXbsjBaseLayerNode {
    xbsjType: string;
    name: string;
    xbsjGuid?: string;
    enable?: boolean;
    show?: boolean;
    [key: string]: any;
}
export interface IXbsjCzmObject {
    czmObject: IXbsjImageryLayerNode | IXbsjTilesetLayerNode | IXbsjTerrainLayerNode;
    ref?: string;
}
export interface IXbsjImageryLayerNode extends IXbsjBaseLayerNode {
    xbsjImageryProvider?: IXbsjImageryProvider;
}
export interface IXbsjImageryProvider {
    XbsjImageryProvider?: IXbsjImageryProviderChild;
    UrlTemplateImageryProvider?: IUrlTemplateImageryProvider;
    WebMapTileServiceImageryProvider?: IWebMapTileServiceImageryProvider;
    createTileMapServiceImageryProvider?: IcreateTileMapServiceImageryProvider;
    type?: string;
}
export interface IXbsjImageryProviderChild {
    url: string;
    srcCoordType?: string;
    destCoordType?: string;
    ignoreDefualt?: boolean;
    maximumLevel?: number;
    minimumLevel?: number;
    rectangle?: Array<number>;
    tilingScheme?: string;
}
export interface IUrlTemplateImageryProvider {
    url: string;
    ignoreDefualt?: boolean;
    maximumLevel?: number;
    minimumLevel?: number;
    rectangle?: Array<number>;
    tilingScheme?: string;
}
export interface IWebMapTileServiceImageryProvider {
    url: string;
    format?: string;
    ignoreDefualt?: boolean;
    layer?: string;
    maximumLevel?: number;
    minimumLevel?: number;
    rectangle?: Array<number>;
    style?: string;
    tileHeight?: number;
    tileMatrixLabels?: string;
    tileMatrixSetID?: string;
    tileWidth?: number;
    tilingScheme?: string;
}
export interface IcreateTileMapServiceImageryProvider {
    url?: string;
    fileExtension?: string;
    ignoreDefualt?: boolean;
    maximumLevel?: number;
    rectangle?: Array<number>;
}
export interface IXbsjTilesetLayerNode extends IXbsjBaseLayerNode {
    url: string;
    shadows?: string;
    xbsjPosition?: number[];
    xbsjUseOriginTransform?: boolean;
    xbsjLeftTopView?: boolean;
    xbsjStyle?: string;
    xbsjClippingPlanes?: any;
    xbsjCustomShader?: any;
}
export interface IXbsjTerrainLayerNode extends IXbsjBaseLayerNode {
    xbsjTerrainProvider: IXbsjTerrainProvider;
}
export interface IXbsjTerrainProvider {
    type: string;
    GoogleEarthEnterpriseTerrainProvider?: IGoogleEarthEnterpriseTerrainProvider;
    XbsjEllipsoidTerrainProvider?: IXbsjEllipsoidTerrainProvider;
    XbsjCesiumTerrainProvider: IXbsjCesiumTerrainProvider;
}
export interface IGoogleEarthEnterpriseTerrainProvider {
    url: string;
    ignoreDefualt?: boolean;
}
export interface IXbsjEllipsoidTerrainProvider {
    ignoreDefualt?: boolean;
    tilingScheme?: string;
}
export interface IXbsjCesiumTerrainProvider {
    url: string;
    ignoreDefualt?: boolean;
    requestMetadata?: boolean;
    requestVertexNormals?: boolean;
    requestWaterMask?: boolean;
}
//# sourceMappingURL=layer-xbsj.d.ts.map