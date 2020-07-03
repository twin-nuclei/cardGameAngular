import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Player} from '../../../shared/interfaces/player';
import {PlayersService} from '../../../shared/services/players.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.sass'],
})
export class ControlsComponent implements OnInit {
  constructor(private playerService: PlayersService) {}
  players: Player[];

  @Output() sortPlayers: EventEmitter<boolean> = new EventEmitter();

  emitPlayersAscending(){
    this.sortPlayers.emit(true);
  }

  emitPlayersDescending() {
    this.sortPlayers.emit(false);
  }

  submit(): void {
    alert('submitted!');
  }

  ngOnInit(): void {
  }

}
