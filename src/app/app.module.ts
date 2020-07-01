import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { OverviewComponent } from './overview/overview.component';
import { ControlsComponent } from './controls/controls.component';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';
import {NoCardSelectedComponent} from './no-card-selected/no-card-selected.component';
import {CanFindCardWithIdGuard} from './guards/can-find-card-with-id.guard';
import { Error404Component } from './error/error404/error404.component';
import { CardNotFoundComponent } from './card-not-found/card-not-found.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    DetailsComponent,
    ControlsComponent,
    CardComponent,
    NoCardSelectedComponent,
    Error404Component,
    CardNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [CanFindCardWithIdGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
