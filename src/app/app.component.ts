import { Component, KeyValueDiffer, KeyValueDiffers, KeyValueChanges } from '@angular/core';
import { MainService } from './service/main.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { environment } from 'src/environments/environment';
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
          //if (environment.production == true) {
          this.service.setPath(res.data.filename);
          this.service.setData(JSON.parse(res.data.json));
          //console.log("app component course is loaded from course id " + course_id);
          //} else {
          //console.log("app component course is loaded from local assets/json/content.json");
          //this.service.setPath("assets/json/content.json");
          //this.service.setData(res);
          //}
          this.data = this.service.getData();
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
        //console.log("environment.production = " + environment.production);
        this.course_id = params['id'];
        //console.log("this.course_id FROM params = " + this.course_id);
        if (this.course_id != undefined) {
          //this.course_id = 25;
          //this.router.navigate(['c' , this.course_id])
          //if (environment.production == true) {
          this.service.setCourseID(this.course_id);
          this.loadcourse(this.course_id)
          // } else {
          //   this.loadcourse(this.course_id);
          // }
        } else {
          if(this.course_id == undefined){
            console.log("this.course_id FROM params = " + this.course_id);
            this.loadcourse(-1);
          }
          /*this.route.paramMap.subscribe(params => {
            console.log("Course id from hash = " ,  params.get('i'));
          });*/
          //this.course_id = -1;
          //this.service.setCourseID(this.course_id);
          //this.loadcourse(this.course_id)
        }
      });
      /* comment below 2 lines for loading data from server*/
      //this.service.setData(localdata);
      //this.data = this.service.getData();

      /* Following code to get data from server*/
      setTimeout(() => {

        if (firsttime == true && this.course_id == undefined) {
          this.loadcourse(-1);
        }

      }, 5000);
    }
  }
}
