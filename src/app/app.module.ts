import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { HttpClientModule } from '@angular/common/http';
import {CanFindCardWithIdGuard} from './modules/details/guards/can-find-card-with-id.guard';
import { SharedModule } from './modules/shared/shared.module';
import {OverviewModule} from './modules/overview/overview.module';
import {DetailsModule} from './modules/details/details.module';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OverviewModule,
    DetailsModule,
    RouterModule,
    SharedModule
  ],
  providers: [CanFindCardWithIdGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
