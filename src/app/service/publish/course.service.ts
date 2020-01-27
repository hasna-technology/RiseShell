import { Injectable } from '@angular/core';
import { MainService } from '../main.service';
import { HttpClient } from '@angular/common/http';
import { SCORM } from './../../SCORM/SCORM';

@Injectable({
  providedIn: 'root'
})

export class CourseService {
  scorm;
  passed;
  failed;
  settings;

  constructor(private service: MainService) {

    this.settings = this.service.getData().publish_setting;
    this.passed = this.settings.complete_status.split("/")[0];
    this.failed = this.settings.complete_status.split("/")[1];
    console.log(this.settings);
    /*this.http.get<any>("assets/json/setting.json").subscribe(data => {
      this.settings = data;
      this.passed = this.settings.complete_status.split("/")[0];
      this.failed = this.settings.complete_status.split("/")[1];
    });*/
  }


  getScorm() {
    return this.scorm;
  }

  initialize() {
    if (this.settings.publishType.toString().toUpperCase() == "SCORM") {
      console.log("Course initialized ", this.settings.version);
      this.scorm = new SCORM();
      this.scorm.Init(this.settings.version);
    }
  }

  complete() {
    console.log("complete : " + this.passed);
    if (this.scorm) {
      this.scorm.Score(90);
      this.scorm.Complete(this.passed);
    }
  }


  setBookmark(id) {
    console.log(" setBookmark : " + id)
    if (this.scorm) {
      this.scorm.setBookmark(id);
    }
  }


  getBookmark(id) {
    if (this.scorm) {
      return this.scorm.getBookmark();
    }

  }
  setScore(val) {
    if (this.scorm) {
      this.scorm.Score(val);

    }
  }


  setQuizPass(score, min) {
    if (this.scorm) {
      this.scorm.SuccessStatus(score, min)
    }
  }
}