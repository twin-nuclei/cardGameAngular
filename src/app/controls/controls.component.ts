import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Player} from '../player';
import {PLAYERS} from '../players';
import {PlayersService} from '../players.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.sass'],
})
export class ControlsComponent implements OnInit {
  constructor(private cardService: PlayersService) {}
  @Input() players: Player[] = [];

  @Output() sortPlayers: EventEmitter<Player[]> = new EventEmitter();

  emitPlayersAscending(){
    this.sortPlayers.emit(this.sortAscending());
  }

  emitPlayersDescending() {
    this.sortPlayers.emit(this.sortDescending());
  }

  sortAscending(): Player[] {
    return this.players.slice().sort(this.compare);
  }

  sortDescending(): Player[] {
    return this.sortAscending().reverse();
  }

  submit(): void {
    alert('submitted!');
  }

  compare(a: Player , b: Player): number {
    if ( a.realName < b.realName ){
      return -1;
    }
    if ( a.realName > b.realName ){
      return 1;
    }
    return 0;
  }

  ngOnInit(): void {
  }

}
