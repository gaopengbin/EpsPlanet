import { TemplateRef } from '@angular/core';
import { ModalManagerService } from 'epsgis';
import { NzFormatEmitEvent, NzTreeNode, NzTreeComponent } from 'ng-zorro-antd/tree';
import { BasePlanetWidgetComponent } from '../base-widget/base-widget.component';
import * as i0 from "@angular/core";
export declare class PlanetLayerListComponent extends BasePlanetWidgetComponent {
    private modalService;
    nzTreeComponent: NzTreeComponent;
    layerNodes: any;
    selectedNode: any;
    type: any;
    listOfData: any[];
    isShow: boolean;
    activatedNode?: NzTreeNode;
    tplContent: TemplateRef<{}>;
    constructor(modalService: ModalManagerService);
    static getCompInfo(): {
        name: string;
        path: string;
    };
    ngOnInit(): void;
    openFolder(data: NzTreeNode | NzFormatEmitEvent): void;
    loadSceneTree(): void;
    setting(node: any): void;
    flyTo(node: any): void;
    onLeftClickNode(evt: NzFormatEmitEvent): void;
    onCheckedChange(evt: NzFormatEmitEvent): void;
    onDblClickNode(evt: NzFormatEmitEvent): void;
    onRightClick(evt: NzFormatEmitEvent): void;
    static ɵfac: i0.ɵɵFactoryDef<PlanetLayerListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PlanetLayerListComponent, "epsgis-planet-layer-list", never, {}, {}, never, never>;
}
//# sourceMappingURL=layer-list.component.d.ts.map