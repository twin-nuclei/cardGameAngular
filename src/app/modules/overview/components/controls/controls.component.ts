import { Component, OnInit } from '@angular/core';
import {Player} from '../../../shared/interfaces/player';
import {Router} from '@angular/router';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.sass'],
})
export class ControlsComponent implements OnInit {
  constructor(private router: Router) {}
  players: Player[];

  sortAscending(){
    this.router.navigate(['overview'], {queryParams: {sort: 'ascending'}});
  }

  sortDescending() {
    this.router.navigate(['overview'], {queryParams: {sort: 'descending'}});
  }

  submit(): void {
    alert('submitted!');
  }

  ngOnInit(): void {
  }

}
