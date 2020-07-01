import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {PlayersService} from '../players.service';

@Injectable({
  providedIn: 'root'
})
export class CanFindCardWithIdGuard implements CanActivate {

  constructor(private router: Router, private playerService: PlayersService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

    return new Observable<boolean>((observer) => {
      const playerId = +next.params.id;
      this.playerService
        .getAllPlayers()
        .subscribe( players => {
          const selectedPlayer = players.filter(player => player.id === playerId)[0];
          if (!!selectedPlayer) {
            observer.next(true);
          } else {
            this.router.navigate(['card-no-found']);
            observer.next(false);
          }
        });
      }
    );
  }
}
