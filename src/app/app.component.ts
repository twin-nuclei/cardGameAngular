import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { OverviewComponent } from './overview/overview.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  @ViewChild(OverviewComponent)
    overview: OverviewComponent;

}
