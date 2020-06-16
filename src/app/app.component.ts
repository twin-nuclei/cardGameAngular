import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { OverviewComponent } from './overview/overview.component';
import { PlayersService } from './players.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [PlayersService]
})
export class AppComponent {
  constructor(private cardService: PlayersService) {}

  @ViewChild(OverviewComponent)
    overview: OverviewComponent;

}
