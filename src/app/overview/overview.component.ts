import {Component} from '@angular/core';
import {PLAYERS} from '../players';
import {Player} from '../player';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html'
})
export class OverviewComponent {
  players = PLAYERS;
  cards = [];

  sortPlayers(players: Player[]): void  {
    this.players = players;
  }
}
