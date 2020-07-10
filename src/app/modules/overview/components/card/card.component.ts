import {Component, Input} from '@angular/core';
import {Player} from '../../../shared/interfaces/player';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent {
  constructor() { }
  @Input() player: Player;


}
