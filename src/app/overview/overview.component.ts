import {Component, Input, OnInit} from '@angular/core';
import {PLAYERS} from '../players';
import {Player} from '../player';
import {PlayersService} from '../players.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html'
})
export class OverviewComponent implements OnInit {
  constructor(private playerService: PlayersService) {}
  players: Observable<Player[]> = this.playerService.getAllPlayers();
  sortOrder = 'realName';

  sortPlayers(ascending: boolean): void  {
    if (ascending) {
      this.sortOrder = 'realName';
    } else {
      this.sortOrder = '-realName';
    }
  }


  ngOnInit() {
  }
}
