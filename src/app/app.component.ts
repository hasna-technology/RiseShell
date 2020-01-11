import { Component, KeyValueDiffer, KeyValueDiffers, KeyValueChanges } from '@angular/core';
import { MainService } from './service/main.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'Shell Template';
  course_id;

  constructor(private service: MainService, private route: ActivatedRoute) {
    console.log('Called Constructor');
    
  }

  data;
  prevData;

  loadcourse(course_id: number) {
    this.service.load_course(course_id).subscribe(
      res => {
        //console.log(res);
        this.service.setPath(res.data.filename);
        this.service.setData(JSON.parse(res.data.json));
        this.data = this.service.getData();
      },
      err => {
        console.log(err);
      }
    )
  }

  ngOnInit() {

    if (environment.production == true) {
      this.route.queryParams.subscribe(params => {
        this.course_id = params['id'];
        console.log("app.component" + this.course_id);
        this.loadcourse(this.course_id)
      });
    } else {
      this.loadcourse(1);
    }

    /*this.service.loadJson().subscribe(
      res => {
        this.service.setData(JSON.parse(res.data));
        this.data = this.service.getData();
      },
      err => {
        console.log(err);
      }
    )*/

  }
}
