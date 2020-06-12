import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import {PLAYERS} from '../players';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {
  players = PLAYERS;

  constructor() { }

  ngOnInit(): void {
  }

}
