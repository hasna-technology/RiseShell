import { Component, KeyValueDiffer, KeyValueDiffers, KeyValueChanges } from '@angular/core';
import { MainService } from './service/main.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { environment } from 'src/environments/environment';
import * as AOS from 'aos';
//import localdata from '../data/en/content.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Shell Template';
  course_id;

  constructor(public service: MainService, private route: ActivatedRoute, private router: Router) {
    console.log("constructor from app.component")

  }

  data;
  prevData;

  loadcourse(course_id: number) {
    this.course_id = course_id;
    this.service.setCourseID(course_id);
    var load = this.service.load_course(course_id);
    if (load != undefined && course_id != -1) {
      load.subscribe(
        res => {
          console.log("production = " + environment.production);
          this.service.setPath(res.data.filename);
          this.service.setData(JSON.parse(res.data.json));
          this.data = this.service.getData();
          this.service.setBrandColor();
        },
        err => {
          console.log(err);
        }
      )
    } else {
      this.service.loadJson().subscribe(res => {
        console.log("app component course is loaded from local assets/json/content.json");
        this.service.setPath("assets/json/content.json");
        this.service.setData(res);
        this.data = this.service.getData();
      })
    }
  }

  ngOnInit() {
    AOS.init({
      delay: 1000, // values from 0 to 3000, with step 50ms
      duration: 800, // values from 0 to 3000, with step 50ms
      easing: 'ease',
      once: true
    });
    console.log("ngOnInit from app.component");
    let firsttime = false;
    console.log("getCourseId = ", this.service.getCourseId());
    if (this.service.getCourseId() == undefined) {
      this.route.queryParams.subscribe((params: Params) => {
        //console.log("ngOnInit from app.component 1");
        if (firsttime == false) {
          firsttime = true;
          return;
        }
        this.course_id = params['id'];
        if (this.course_id != undefined) {

          if (params['admin'] != undefined) {
            this.service.setAdminParam(params['admin'])
          }else
          {
            this.service.setAdminParam(true);
          }

          this.service.setCourseID(this.course_id);
          this.loadcourse(this.course_id)
        } else {
          if (this.course_id == undefined) {
            console.log("this.course_id FROM params = " + this.course_id);
            this.loadcourse(-1);
          }
        }

      });
      /* Following code to get data from server*/
      setTimeout(() => {

        if (firsttime == true && this.course_id == undefined) {
          this.loadcourse(-1);
        }

      }, 1000);
    }
  }
}
