import {Component, OnInit} from '@angular/core';
import {Player} from '../../../shared/interfaces/player';
import {PlayersService} from '../../../shared/services/players.service';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.component.html'
})
export class OverviewPageComponent implements OnInit {
  constructor(private playerService: PlayersService,
              private route: ActivatedRoute) {}
  players: Observable<Player[]> = this.playerService.getAllPlayers();
  sortOrder: string;

  ngOnInit() {
    this.route.queryParams
      .subscribe(
        (params) => {
          if (params.sort === 'ascending') {
            this.sortOrder = 'realName';
          } else if (params.sort === 'ascending') {
            this.sortOrder = '-realName';
          } else {
            this.sortOrder = null;
          }
        }
    );
  }
}
