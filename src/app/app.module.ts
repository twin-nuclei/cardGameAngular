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

const appRoutes: Routes = [
  { path: 'details/:id', component: DetailsComponent},
  { path: '', component: DetailsComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    DetailsComponent,
    ControlsComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
