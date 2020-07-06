import {Component, Input} from '@angular/core';
import {Player} from '../../../shared/interfaces/player';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent {
  constructor( private router: Router) { }
  @Input() player: Player;


}
