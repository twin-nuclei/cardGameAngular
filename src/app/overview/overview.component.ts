import {Component, Input, OnInit} from '@angular/core';
import {PLAYERS} from '../players';
import {Player} from '../player';
import {PlayersService} from '../players.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html'
})
export class OverviewComponent implements OnInit {
  constructor(private playerService: PlayersService) {}
  players: Player[];

  sortPlayers(players: Player[]): void  {
    this.players = players;
  }
  getPlayers() {
    if (!this.players) {
      this.players = this.playerService.players;
    }
    return this.players;
  }
  isDataLoaded() {
    return this.playerService.isDataLoaded;
  }
  ngOnInit() {
    console.log(this.players);
  }
}
