import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid1.component.html',
  styleUrls: ['./grid1.component.scss']
})
export class GridComponent1 implements OnInit {
  
  @Input() value;
  constructor() { }

  ngOnInit() {
  }

}
 