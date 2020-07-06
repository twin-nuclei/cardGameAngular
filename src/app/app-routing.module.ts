import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetailsPageComponent} from './modules/details/components/detailsPage/details.page.component';
import {CanFindCardWithIdGuard} from './modules/details/guards/can-find-card-with-id.guard';
import {Error404Component} from './modules/shared/components/error404/error404.component';



const routes: Routes = [
  { path: '', redirectTo: '/overviewPage', pathMatch: 'full'},
  { path: 'overview', loadChildren: () => import('./modules/overview/overview.module').then(m => m.OverviewModule)},
  { path: 'detailsPage/:id', loadChildren: () => import('./modules/details/details.module').then(m => m.DetailsModule)},
  { path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
