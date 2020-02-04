import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cssgrid',
  templateUrl: './cssgrid.component.html',
  styleUrls: ['./cssgrid.component.scss']
})
export class CssgridComponent implements OnInit {
@Input() value;

  constructor() { 
 }

  ngOnInit() {
  }

}
