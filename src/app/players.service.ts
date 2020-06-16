import {EventEmitter, Injectable} from '@angular/core';
import {Player} from './player';
import {PLAYERS} from './players';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  players = this.getPlayers();
  player = null;

  selectedPlayer: EventEmitter<Player> = new EventEmitter();

  getPlayers(): Player[] {
    return PLAYERS;
  }
}
