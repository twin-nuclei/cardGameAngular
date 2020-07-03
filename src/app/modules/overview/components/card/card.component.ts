import {Component, Input} from '@angular/core';
import {Player} from '../../../shared/interfaces/player';
import {PlayersService} from '../../../shared/services/players.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent {
  constructor(private playersService: PlayersService,
              private router: Router) { }
  @Input() player: Player;


}
