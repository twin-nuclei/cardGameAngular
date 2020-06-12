import {Component} from '@angular/core';
import {PLAYERS} from '../players';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html'
})
export class OverviewComponent {
  players = PLAYERS;
  cards = [];
}
