import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SortDirection} from '../../../../enums/sort-direction.enum';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.sass'],
})
export class ControlsComponent implements OnInit {
  @Input() currentSortDirection: SortDirection;
  public sortDirection = SortDirection;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

}
