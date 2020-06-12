import { Component, OnInit } from '@angular/core';
import { Player } from '../player';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {
  singleCard = {
    realName: 'Pepa',
    playerName: 'Wutz',
    asset: 'Humor'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
