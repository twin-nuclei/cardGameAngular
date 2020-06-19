import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Player} from './player';
import {map } from 'rxjs/operators';
import { PLAYERS } from './players';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  playersUrl = 'assets/players.json';
  constructor(private http: HttpClient) { }
  players = PLAYERS;
  player = null;

  selectedPlayer: EventEmitter<Player> = new EventEmitter();

  getPlayers() {
    return this.http.get<Player[]>(this.playersUrl).pipe(map(data => data));
  }
}
