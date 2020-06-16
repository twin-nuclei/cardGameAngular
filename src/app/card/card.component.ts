import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Player} from '../player';
import {PLAYERS} from '../players';
import {PlayersService} from '../players.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {
  constructor(private playersService: PlayersService) { }
  @Input() player: Player;

  selectPlayer() {
    this.playersService.selectedPlayer.emit(this.player);
  }

  ngOnInit(): void {
  }

}
