import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OverviewPageComponent} from './components/overviewPage/overview.page.component';


const routes: Routes = [
  { path: '',
    children: [
      { path: '', component: OverviewPageComponent, pathMatch: 'full'},
      { path: ':sort', component: OverviewPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverviewRoutingModule { }
