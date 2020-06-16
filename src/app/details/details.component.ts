import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import {PLAYERS} from '../players';
import {PlayersService} from '../players.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {
  player = {realName: '', playerName: '', asset: ''};

  constructor(private playersService: PlayersService) {
  }

  ngOnInit(): void {
    this.playersService.selectedPlayer.subscribe( player => this.player = player);
  }

}
