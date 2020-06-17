import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Player} from './player';
import {map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { PLAYERS } from './players';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  constructor(private http: HttpClient) { }
  players = PLAYERS;
  player = null;

  selectedPlayer: EventEmitter<Player> = new EventEmitter();

  getPlayers() {
    return this.http.get<Player[]>('assets/players.json').pipe(map(data => data));
  }
}
