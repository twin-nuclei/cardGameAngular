import {Component, OnInit} from '@angular/core';
import {Player} from '../../../shared/interfaces/player';
import {PlayersService} from '../../../shared/services/players.service';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {SortDirection} from '../../../../enums/sort-direction.enum';

const SORT_PROPERTY = 'realName';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.component.html'
})
export class OverviewPageComponent implements OnInit {
  constructor(private playerService: PlayersService,
              private route: ActivatedRoute) {
  }

  players: Observable<Player[]> = this.playerService.getAllPlayers();
  sortOrder: string;
  sortDirection: string;

  ngOnInit() {
    this.route.params
      .subscribe(
        (params) => {
          this.sortDirection = (params.sort === SortDirection.ASC) ? SortDirection.ASC : SortDirection.DESC;
          this.sortOrder = ((params.sort === SortDirection.DESC) ? '-' : '') + SORT_PROPERTY;
        }
      );
  }
}
