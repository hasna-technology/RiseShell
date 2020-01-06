import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'admin-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  @Input() data;
  constructor() { }

  ngOnInit() {
  }

}
