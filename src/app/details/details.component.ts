import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import {PLAYERS} from '../players';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {
  player = {realName: 'Brianna Forbes', playerName: 'Dreamlurk The Unstoppable', asset: 'Foghammer Lead'};

  constructor() { }

  ngOnInit(): void {
  }

}
