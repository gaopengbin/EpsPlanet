import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { EpsGisCompContainerModule, EpsGisModule } from 'epsgis';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

@NgModule({
  imports: [
    CommonModule,
    EpsGisCompContainerModule,
    NzLayoutModule,
    RouterModule.forChild([
      {
        path: "", redirectTo: "home", pathMatch: "full"
      },
      {
        path: "home", component: HomeComponent
      }
    ])
  ],
  declarations: [HomeComponent]

})
export class HomeModule { }
