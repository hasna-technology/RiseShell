import { Component, OnInit } from '@angular/core';
import { MainService } from '../service/main.service';
import { CourseService } from '../service/publish/Course.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  content;
  course_id;
  constructor(public service: MainService, public courseService: CourseService) {

  }

  ngOnInit() {
    this.content = this.service.getData();
    this.course_id = this.service.getCourseId();
    if (this.courseService.getScorm() == undefined) {
      this.courseService.initialize();
    }
  }

}
