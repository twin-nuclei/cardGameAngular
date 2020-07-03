import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetailsComponent} from './components/details/details.component';
import {CanFindCardWithIdGuard} from './guards/can-find-card-with-id.guard';


const routes: Routes = [
  {path: '', component: DetailsComponent, canActivate: [CanFindCardWithIdGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsRoutingModule { }
