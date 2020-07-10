import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { OverviewPageComponent } from '../../modules/overview/components/overviewPage/overview.page.component';
import { PlayersService } from '../../modules/shared/services/players.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [PlayersService]
})
export class AppComponent implements OnInit {
  constructor(private playerService: PlayersService) {}

  @ViewChild(OverviewPageComponent)
    overview: OverviewPageComponent;

  ngOnInit() {
  }

}
