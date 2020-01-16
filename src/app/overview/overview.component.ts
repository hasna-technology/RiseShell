import { Component, OnInit } from '@angular/core';
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  content;
  course_id;
  constructor(public service:MainService) {

  }

  ngOnInit() {
     this.content = this.service.getData();  
     this.course_id = this.service.getCourseId();
  }

}
