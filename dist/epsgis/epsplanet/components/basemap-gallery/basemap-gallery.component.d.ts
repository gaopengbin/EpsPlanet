import { NzContextMenuService, NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { NzFormatEmitEvent, NzTreeNode } from 'ng-zorro-antd/tree';
import { BasePlanetWidgetComponent } from '../base-widget/base-widget.component';
import * as i0 from "@angular/core";
export declare class PlanetBasemapGalleryComponent extends BasePlanetWidgetComponent {
    private nzContextMenuService;
    activatedNode?: NzTreeNode;
    layerNodes: any;
    basemap: any;
    terrainData: {
        czmObject: {
            img: string;
            xbsjType: string;
            xbsjGuid: string;
            name: string;
            xbsjTerrainProvider: {
                type: string;
                XbsjEllipsoidTerrainProvider: {};
                XbsjCesiumTerrainProvider: {
                    url: string;
                    requestVertexNormals: boolean;
                    requestWaterMask: boolean;
                };
                GoogleEarthEnterpriseTerrainProvider: {};
            };
        };
    }[];
    terrainIcon: string;
    constructor(nzContextMenuService: NzContextMenuService);
    activeNode(data: NzFormatEmitEvent): void;
    contextMenu($event: MouseEvent, menu: NzDropdownMenuComponent): void;
    onCheckedChange(evt: NzFormatEmitEvent): void;
    onRightClick($event: any): void;
    ngOnInit(): void;
    loadBaseTree(): void;
    selectImage(item: any): void;
    selectTerrain(item: any): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<PlanetBasemapGalleryComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PlanetBasemapGalleryComponent, "epsgis-planet-basemap-gallery", never, {}, {}, never, never>;
}
//# sourceMappingURL=basemap-gallery.component.d.ts.map