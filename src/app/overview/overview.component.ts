import { Component, OnInit } from '@angular/core';
import data from '../../data/en/content.json';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  content;
  constructor() {

  }

  ngOnInit() {
     this.content = data;  
  }

}
