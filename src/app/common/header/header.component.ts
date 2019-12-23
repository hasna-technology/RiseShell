import { Component, OnInit } from '@angular/core';
import { SCORM } from  './../../SCORM';
//let scorm = require('./../../SCORM');

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {
    var scorm = new SCORM();
    scorm.Init("1.2");
    scorm.Complete("completed");
    //scorm.wrapper();
   }

  ngOnInit() {
  }

}
