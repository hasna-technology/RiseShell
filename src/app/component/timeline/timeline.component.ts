import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  @Input() value;
  data;
  hideme=false;
  
  constructor() { 
    
    
  }

  ngOnInit() {
   
  }
  
 
    
 
}
