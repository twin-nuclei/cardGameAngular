import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../../../shared/interfaces/player';
import {PlayersService} from '../../../shared/services/players.service';
import {ActivatedRoute, Params} from '@angular/router';



@Component({
  selector: 'app-details',
  templateUrl: './details.page.component.html',
  styleUrls: ['./details.page.component.sass']
})
export class DetailsPageComponent implements OnInit {
  constructor(private playerService: PlayersService,
              private route: ActivatedRoute) {}
  player: Player;

  ngOnInit(): void {
    const playerId = Number(this.route.snapshot.params.id);
    this.playerService
      .getAllPlayers()
      .subscribe((players) => {
        this.player = players.filter(player => player.id === playerId)[0];
      }
    );
  }
}
