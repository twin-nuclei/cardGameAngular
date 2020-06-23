import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../player';
import {PLAYERS} from '../players';
import {PlayersService} from '../players.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {
  constructor(private playerService: PlayersService) {}
  player: Player = {id: 0, realName: '', playerName: '', asset: ''};
  players: Player[] = this.playerService.players;

  ngOnInit(): void {
    this.playerService
      .selectedPlayer
      .subscribe(playerId => {
        this.player = this.playerService.players.filter(player => player.id === playerId)[0];
      });
  }

}
