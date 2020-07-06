import {Component, OnInit} from '@angular/core';
import {Player} from '../../../shared/interfaces/player';
import {PlayersService} from '../../../shared/services/players.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.component.html'
})
export class OverviewPageComponent implements OnInit {
  constructor(private playerService: PlayersService) {}
  players: Observable<Player[]> = this.playerService.getAllPlayers();
  sortOrder = '';

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
