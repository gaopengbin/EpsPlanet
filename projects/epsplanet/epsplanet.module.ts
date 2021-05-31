import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EpsGisDirectivesModule } from 'epsgis';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzTreeViewModule } from 'ng-zorro-antd/tree-view';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzFormModule } from 'ng-zorro-antd/form';
import { PlanetEarthComponent } from './components/earth/earth.component';
import { PlanetHomeComponent } from './components/home/home.component';
import { PlanetLayerListComponent } from './components/layer-list/layer-list.component';
import { PlanetLayerManagerComponent } from './components/layer-manager/layer-manager.component';
import { PlanetLocationComponent } from './components/location/location.component';
import { PlanetModeSwitchComponent } from './components/mode-switch/mode-switch.component';
import { PlanetStatusBarComponent } from './components/status-bar/status-bar.component';
import { PlanetZoomComponent } from './components/zoom/zoom.component';
import { PlanetBasemapGalleryComponent } from './components/basemap-gallery/basemap-gallery.component';
import { PlanetIdentifyComponent } from './components/identify/identify.component';
import { PlanetEqueryComponent } from './components/equery/equery.component';
const components = [
  PlanetEarthComponent,
  PlanetLayerListComponent,
  PlanetLayerManagerComponent,
  PlanetStatusBarComponent,
  PlanetHomeComponent,
  PlanetLocationComponent,
  PlanetModeSwitchComponent,
  PlanetZoomComponent,
  PlanetBasemapGalleryComponent,
  PlanetIdentifyComponent,
  PlanetEqueryComponent
];
@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NzInputModule,
    NzInputNumberModule,
    NzIconModule,
    NzTreeModule,
    NzTreeViewModule,
    NzPopoverModule,
    NzDividerModule,
    NzSelectModule,
    NzButtonModule,
    NzMenuModule,
    NzDropDownModule,
    NzSliderModule,
    NzGridModule,
    NzTabsModule,
    NzModalModule,
    NzTableModule,
    NzSwitchModule,
    NzToolTipModule,
    NzFormModule,
    EpsGisDirectivesModule
  ],
  exports:components,
  entryComponents: [...components]
})
export class EpsGisForPlanetModule { }

