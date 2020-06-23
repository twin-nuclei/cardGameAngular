import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Player} from './player';
import {map } from 'rxjs/operators';
import { PLAYERS } from './players';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  constructor(private http: HttpClient) {}
  playersUrl = 'assets/players.json';
  players: Player[] = [];
  isDataLoaded = false;

  selectedPlayer: EventEmitter<number> = new EventEmitter();

  getPlayers() {
    return this.http
      .get<Player[]>(this.playersUrl)
      .pipe(map(data => data))
      .subscribe(
        players => {
          this.players = players;
          this.isDataLoaded = true;
        },
        error => {
          console.log('Error retrieving players');
          console.error(error);
        }
      );
  }
}
