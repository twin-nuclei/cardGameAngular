import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Player} from '../interfaces/player';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  constructor(private http: HttpClient) {}
  playersUrl = 'assets/players.json';

  getAllPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.playersUrl);
  }
}
