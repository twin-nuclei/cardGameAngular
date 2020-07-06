import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import {DetailsPageComponent} from './components/detailsPage/details.page.component';


@NgModule({
  declarations: [
    DetailsPageComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule
  ]
})
export class DetailsModule { }
