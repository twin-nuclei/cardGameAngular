import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetailsPageComponent} from './components/detailsPage/details.page.component';
import {CanFindCardWithIdGuard} from './guards/can-find-card-with-id.guard';


const routes: Routes = [
  {path: '', component: DetailsPageComponent, canActivate: [CanFindCardWithIdGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsRoutingModule { }
