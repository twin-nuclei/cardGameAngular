import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { OverviewComponent } from './overview/overview.component';
import { ControlsComponent } from './controls/controls.component';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {NoCardSelectedComponent} from './no-card-selected/no-card-selected.component';
import {CardResolverService} from './card.resolver.service';

const appRoutes: Routes = [
  { path: 'details/:id', component: DetailsComponent, resolve: {player: CardResolverService}},
  { path: '', component: NoCardSelectedComponent},
  {path: 'not-found', component: NoCardSelectedComponent},
  {path: '**', redirectTo: '/not-found'}
];


@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    DetailsComponent,
    ControlsComponent,
    CardComponent,
    NoCardSelectedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CardResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
