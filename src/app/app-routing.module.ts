import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
