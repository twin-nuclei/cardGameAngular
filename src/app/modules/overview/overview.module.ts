import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OverviewPageComponent} from './components/overviewPage/overview.page.component';
import {ControlsComponent} from './components/controls/controls.component';
import {CardComponent} from './components/card/card.component';
import { OverviewRoutingModule } from './overview-routing.module';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    OverviewPageComponent,
    ControlsComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    OverviewRoutingModule,
    SharedModule
  ]
})
export class OverviewModule { }
