import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { OverviewComponent } from '../../modules/overview/components/overview/overview.component';
import { PlayersService } from '../../modules/shared/services/players.service';
import {Player} from '../../modules/shared/interfaces/player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [PlayersService]
})
export class AppComponent implements OnInit {
  constructor(private playerService: PlayersService) {}
  players: Player[] = this.playerService.players;

  @ViewChild(OverviewComponent)
    overview: OverviewComponent;

  ngOnInit() {
    this.playerService.getPlayers();
  }

}
