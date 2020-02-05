import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { RequestMethod } from "@angular/http";

@Injectable({
  providedIn: 'root'
})

export class MainService {

  _noHeaderPage;

  pageWithOutHeader() {
    this._noHeaderPage = [];
    this.json.course.forEach((currElement, index) => {
      if (currElement.header != true) {
        this._noHeaderPage.push(
          {
            original_index: index,
            data: currElement
          }
        )
      };
    });
    console.log(this._noHeaderPage)
  }
  _admin;
  setAdmin(a) {
    console.log("show Admin = " ,a);
    this._admin = a;
  }
  isAdmin() {
    return this._admin;
  }

  _adminparam = false;
  setAdminParam(val) {
    this._adminparam = val;
  }
  getAdminParam(): any {
    return this._adminparam;
  }

  getPreviousPage(lessonNo: number): any {
    var str = "c/" + this.getCourseId() + "/";
    if (lessonNo == 0) {
      return null;
    } else {
      /*this.json.course.page.map((currElement, index) =>{
        if(index>lessonNo && currElement.header == false){
          return str + index;
        }
      });*/
    }
  }
  getNextPage(lessonNo: number): any {
    var str = "c/" + this.getCourseId() + "/p/";
    if (lessonNo == this.json.course.length - 1) {
      return null;
    } else {
      //this.json.course.map((currElement, index) =>{
      for (var i = Number(lessonNo + 1); i < this.json.course.length; i++) {
        var currElement = this.json.course[i];
        if (currElement.header != 'true') {
          str += Number(i);
          console.log("str = " + str + currElement.title)
          return str;
        }
      };
      console.log(str)
      return str;
    }
  }

  filename: any;
  baseUrl = environment.apiUrl;
  //set the below boolean to true to save the files in server
  startSaving = true;

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
    //this.jsonFrom = "local";
    return this.http.get<any>("assets/json/content.json");
  }
  jsonFrom;
  load_course(course_id: number) {

    //if (environment.production == true) {
    if (course_id == undefined)
      return;
    //this.jsonFrom = "server";
    return this.request("File/load_course/" + course_id, RequestMethod.Get);
    //} else {
    //return this.http.get<any>("assets/json/content.json");
    //}
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
    //console.log("setData = ", this.json)
  }
  getData(): any {
    return this.json;
  }

  saving = false;

  saveObj;
  save() {
    if (this.saving == false && this.startSaving == true && this.course_id != -1) {
      clearTimeout(this.saveObj);
      this.saveObj = setTimeout(() => {
        console.log("Saving data...");
        this.saving = true;
        this.request("File/save/" + this.course_id, RequestMethod.Post, JSON.stringify(this.json)).subscribe(
          res => {
            console.log("Saved...");
            this.saving = false
          }, err => {
            console.error(err.message);
            this.saving = false
          });
      }, 2000)
    }
  }

  getCookie(name: string) {
    let ca: Array<string> = document.cookie.split(';');
    let caLen: number = ca.length;
    let cookieName = `${name}=`;
    let c: string;

    for (let i: number = 0; i < caLen; i += 1) {
      c = ca[i].replace(/^\s+/g, '');
      if (c.indexOf(cookieName) == 0) {
        return c.substring(cookieName.length, c.length);
      }
    }
    return '';
  }

  course_id;

  setCourseID(id) {
    this.course_id = id;
    console.log("course id is set to ", this.course_id);
  }

  getCourseId(): any {
    return this.course_id;
  }

  getCourseTitle() {
    if (this.course_id != undefined) {
      this.request("course/get_title/" + this.course_id, RequestMethod.Get).subscribe(
        res => {
          console.log("get title = " + res);
        }, err => {
          console.error(err.message);
        });
    }
    else {
      console.log("course id is undefined");
    }
  }

  setCourseTitle(title) {
    if (this.course_id != undefined) {
      const formData = new FormData();
      formData.append('title', title);
      this.request("data/set_title/" + this.course_id, RequestMethod.Post, formData).subscribe(
        res => {
          console.log("get title = " + res);
        }, err => {
          console.error(err.message);
        });
    }
    else {
      console.log("course id is undefined");
    }
  }

  getPage(lessonNo) {
    var count = this.json.course.filter(s => s.header == true && this.json.course.indexOf(s) < lessonNo).length;
    var index = Number(lessonNo) + 1 - count;
    this.progArr[index - 1] = true;
    return index;
  }

  getPageCompleted(lessonNo) {
    var count = this.json.course.filter(s => s.header == true && this.json.course.indexOf(s) < lessonNo).length;
    var index = Number(lessonNo) + 1 - count;
    return this.progArr[index - 1];
  }

  getPageCompletedCount() {
    return this.progArr.filter(s => s == true).length;
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

  bytesToSize(bytes) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) return '0 Byte';
    var i = parseInt((Math.floor(Math.log(bytes) / Math.log(1024))).toString());
    return Math.round(bytes / Math.pow(1024, i)) + ' ' + sizes[i];
  }

  getCKEditorToolbar() {
    // return { toolbar: [ [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'CopyFormatting', 'RemoveFormat', 'NumberedList', 'BulletedList', '-',  'PasteText', 'PasteFromWord', '-', 'Table'],
    // [ 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'Outdent', 'Indent', '-', 'Undo', 'Redo'],
    // [ 'Link', 'Unlink', '-', 'TextColor', 'BGColor' ],
    // [ 'Styles', 'Format', 'Font', 'FontSize' ],
    // [ 'Maximize', 'Source']
    // ] };

    return {
      toolbar: [['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'CopyFormatting', 'RemoveFormat', 'NumberedList', 'BulletedList', '-', 'PasteText', 'PasteFromWord', '-',
        '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'Outdent', 'Indent', '-', 'Undo', 'Redo', '-', 'Link', 'Unlink', '-', 'TextColor', 'BGColor', 'Styles', 'Format', 'Font', 'FontSize', '-', 'Table', 'Maximize', 'Source']
      ]
    };
  }
  setBrandColor() {
    document.documentElement.style.setProperty('--brand-color', this.json.settings.brandColor);
  }
}
