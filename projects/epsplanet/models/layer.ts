/**
 * 图层类型
 */
export enum LayerType {
    Imagery = "Imagery",
    Tileset = "Tileset",
    Terrain = "Terrain"
}
/**
 * 图层服务来源
 */
export enum LayerServiceSource {
    ArcGis,
    SuperMap,
    TianDiTu,
    BaiDu,
    GaoDe,
    EpsPlanet
}