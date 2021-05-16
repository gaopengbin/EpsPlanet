import { NzContextMenuService, NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { NzFormatEmitEvent, NzTreeNode } from 'ng-zorro-antd/tree';
import { BasePlanetWidgetComponent } from '../base-widget/base-widget.component';
import * as i0 from "@angular/core";
export declare class PlanetLayerManagerComponent extends BasePlanetWidgetComponent {
    private nzContextMenuService;
    selectedNode: any;
    type: any;
    config: {
        basemapSchema: {
            en: string;
            zh: string;
        }[];
        tilesSchema: {
            en: string;
            zh: string;
        }[];
    };
    value1: 0;
    activatedNode?: NzTreeNode;
    openFolder(data: NzTreeNode | NzFormatEmitEvent): void;
    activeNode(data: NzFormatEmitEvent): void;
    contextMenu($event: MouseEvent, menu: NzDropdownMenuComponent): void;
    constructor(nzContextMenuService: NzContextMenuService);
    selectDropdown(): void;
    layerNodes: any;
    static getCompInfo(): {
        name: string;
        path: string;
    };
    ngOnInit(): void;
    loadlocate(): void;
    test(): void;
    onDblClickNode($event: any): void;
    onCheckedChange(evt: NzFormatEmitEvent): void;
    onRightClick($event: any): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<PlanetLayerManagerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PlanetLayerManagerComponent, "epsgis-planet-layer-manager", never, { "selectedNode": "selectedNode"; "type": "type"; }, {}, never, never>;
}
//# sourceMappingURL=layer-manager.component.d.ts.map