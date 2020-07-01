import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetailsComponent} from './details/details.component';
import {CanFindCardWithIdGuard} from './guards/can-find-card-with-id.guard';
import {NoCardSelectedComponent} from './no-card-selected/no-card-selected.component';
import {Error404Component} from './error/error404/error404.component';
import {CardNotFoundComponent} from './card-not-found/card-not-found.component';


const routes: Routes = [
  { path: 'details/:id', component: DetailsComponent, canActivate: [CanFindCardWithIdGuard]},
  { path: 'card-no-found', component: CardNotFoundComponent},
  { path: '', component: NoCardSelectedComponent},
  { path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
