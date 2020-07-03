import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../../../shared/interfaces/player';
import {PlayersService} from '../../../shared/services/players.service';
import {ActivatedRoute, Params} from '@angular/router';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {
  constructor(private playerService: PlayersService,
              private route: ActivatedRoute) {}
  player: Player;

  ngOnInit(): void {
    const playerId = Number(this.route.snapshot.params.id);
    this.player = this.playerService.players.filter(player => player.id === playerId)[0];
    this.route.params.subscribe(
      (params: Params) => {
        this.player = this
          .playerService
          .players
          .filter(player => player.id === Number(params.id))[0];
      },
      error => {
        console.log('Could not load player');
        console.log(error);
      }
    );
  }

}
