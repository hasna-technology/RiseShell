import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-divide',
  templateUrl: './divide.component.html',
  styleUrls: ['./divide.component.scss']
})
export class DivideComponent implements OnInit {
  
@Input() data;
@Output() closeEvent = new EventEmitter();
 
  constructor() { }

  ngOnInit() {
  }
  
}
