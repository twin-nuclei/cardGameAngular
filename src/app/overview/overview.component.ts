import {Component, Input} from '@angular/core';
import {PLAYERS} from '../players';
import {Player} from '../player';
import {PlayersService} from '../players.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html'
})
export class OverviewComponent {
  constructor(private playerService: PlayersService) {}
  @Input() players: Player[] = [];


  sortPlayers(players: Player[]): void  {
    this.players = players;
  }
}
