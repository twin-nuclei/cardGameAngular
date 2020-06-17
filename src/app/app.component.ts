import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { OverviewComponent } from './overview/overview.component';
import { PlayersService } from './players.service';
import {Player} from './player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [PlayersService]
})
export class AppComponent implements OnInit {
  constructor(private playerService: PlayersService) {}
  players: Player[] = [];

  @ViewChild(OverviewComponent)
    overview: OverviewComponent;

  ngOnInit() {
    this.playerService.getPlayers().subscribe(
      players => {
        this.players = players;
      },
      error => {
        console.log('Error retrieving players');
        console.error(error);
      }
    );
  }

}
