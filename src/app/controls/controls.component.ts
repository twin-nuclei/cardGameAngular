import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.sass']
})
export class ControlsComponent implements OnInit {

  sortAscending(): void {
    alert('Ascending!');
  }

  sortDescending(): void {
    alert('Descending!');
  }

  submit(): void {
    alert('submitted!');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
