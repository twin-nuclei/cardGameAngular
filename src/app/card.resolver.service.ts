import {ActivatedRouteSnapshot, RouterStateSnapshot, Resolve, Route, ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Player} from './player';
import {PlayersService} from './players.service';
import {Injectable} from '@angular/core';

@Injectable()
export class CardResolverService implements Resolve<Player>{
  constructor(private playerService: PlayersService, private route: ActivatedRoute) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Player> | Promise<Player> | Player {
    const dummyPlayer = {id: null, realName: '', playerName: '', asset: ''};
    console.log(this.route.snapshot);
    const playerId = Number(this.route.params['id']);
    console.log(playerId);
    const selectedPlayer = this.playerService.players.filter(player => player.id === playerId)[0];
    console.log(selectedPlayer);
    if (selectedPlayer) {
      return selectedPlayer;
    } else {
      return null;
    }
  }
}
