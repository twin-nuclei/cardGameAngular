import { Injectable } from '@angular/core';
import {Player} from './player';
import {PLAYERS} from './players';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  getPlayers(): Player[] {
    return PLAYERS;
  }
}
