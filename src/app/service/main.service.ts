import { Injectable, KeyValueDiffer, KeyValueDiffers, KeyValueChanges } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { RequestMethod } from "@angular/http";

@Injectable({
  providedIn: 'root'
})

export class MainService {
  filename: any;
  
  

  baseUrl = environment.apiUrl;
  
  //set the below boolean to true to save the files in server
  startSaving  = false;

  json;
  prevData;
  constructor(private http: HttpClient) {
    this.progArr = [];
    //this.startSaving = false;
  }
  doCheck(): void {
    var jsonValue = this.jsonEqual(this.prevData, this.json);
    if (jsonValue == false) {
      this.prevData = JSON.parse(JSON.stringify(this.json));
      console.log("prevData Changed");
      this.save();
    }
  }
  setPath(filename: any) {
    this.filename = filename;
  }
  
  jsonEqual(a, b) {

    //console.log(JSON.stringify(a)+" === "+JSON.stringify(b));
    return JSON.stringify(a) === JSON.stringify(b);
  }
  loadJson() {
    return this.request("File/load/content.json", RequestMethod.Get);

    /*.subscribe(
      res => {
       this.json = JSON.parse(res.data);
        this.startSaving = true;
      }, err => {
        console.error(err.message);
      });*/
  }

  load_course(course_id: number) {
    return this.request("File/load_course/"+course_id, RequestMethod.Get);
  }
  request(url: string, method: RequestMethod, body?: Object, showLoader: boolean = true) {
    const _url = `${this.baseUrl}${url}`;
    if (method == RequestMethod.Get) {
      return this.http.get<any>(_url);
    } else if (method == RequestMethod.Post) {
      if (body) {
        //console.log("body = ", body);
        return this.http.post<any>(_url, body);
      }

    }
  }
  setData(d) {
    this.json = d;
    console.log(this.json)
  }
  getData(): any {
    return this.json;
  }

  saving = false;

  save() {
    if (this.saving == false && this.startSaving == true) {
      this.saving = true;
      this.request("File/save", RequestMethod.Post, JSON.stringify(this.json)).subscribe(
        res => {
          console.log(res);
          this.saving = false
        }, err => {
          console.error(err.message);
          this.saving = false
        });
    }
  }

  getPage(lessonNo) {
    var count = this.json.course.filter(s => s.header == true && this.json.course.indexOf(s) < lessonNo).length;
    var index = Number(lessonNo) + 1 - count;
    this.progArr[index - 1] = true;
    return index;
  }


  prevPage(lessonNo, pageNo) {
    lessonNo = Number(lessonNo);
    pageNo = Number(pageNo);
    var result = null;
    return result;
  }

  nextPage(lessonNo, pageNo) {
    lessonNo = Number(lessonNo);
    pageNo = Number(pageNo);
    var result = null;
    return result;
  }
  getLessonName(num) {
    if (num == -1) {
      return null;
    }
    else {
      if (Number(num) < this.json.course.length)
        return this.json.course[Number(num)].title
    }
  }
  getTotalPage() {
    var headerCount = this.json.course.filter(s => s.header == true).length;
    return this.json.course.length - headerCount;
  }

  progArr;
  getProgress() {

    return Math.floor(this.progArr.filter(s => s == true).length / this.getTotalPage() * 100);
  }


}
