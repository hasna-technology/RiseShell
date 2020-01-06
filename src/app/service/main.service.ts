import { Injectable } from '@angular/core';
import data from '../../data/en/content.json';

@Injectable({
  providedIn: 'root'
})
export class MainService {


  constructor() {
    this.progArr = [];
  }

  getData(): any {
    return data;
  }

  
  
  getPage(lessonNo) {
    //var count = 0;
    var count = data.course.filter(s => s.header == true && data.course.indexOf(s) < lessonNo).length;
    /*for (var i = 0; i <= lessonNo; i++) {
      if (data.course[i].header == true) {
        if (i == lessonNo && pageNo != -1) {
          count += Number(pageNo) + 1;
        } else if (i == lessonNo && pageNo == -1) {
          count += 1;
        } else if (i != lessonNo) {
          count += data.course[i].children.length;
        }
      } else {
        count += 1;
      }
    }*/
    var index = Number(lessonNo) + 1 - count;
    this.progArr[index - 1] = true;
    return index;
  }


  prevPage(lessonNo, pageNo) {
    lessonNo = Number(lessonNo);
    pageNo = Number(pageNo);
    var result = null;
    /*if (lessonNo != 0) {
      if (data.course[lessonNo].header == false) {
        if (data.course[lessonNo - 1].header == true) {
          result = (lessonNo - 1) + "/" + (data.course[lessonNo - 1].children.length - 1);
        } else {
          result = (lessonNo - 1) + "/" + -1;
        }
      } else {
        if (pageNo > 0) {
          result = lessonNo + "/" + (pageNo - 1);
        } else {
          if (data.course[lessonNo - 1].header == false) {
            result = (lessonNo - 1) + "/" + (-1);
          } else {
            result = (lessonNo - 1) + "/" + (data.course[lessonNo - 1].children.length - 1);
          }
        }
      }
    }
    //console.log("previous " , result);*/
    return result;
  }

  nextPage(lessonNo, pageNo) {
    lessonNo = Number(lessonNo);
    pageNo = Number(pageNo);
    var result = null;
    /*if (lessonNo < data.course.length - 1) {
      //console.log(data.course[lessonNo].header);
      if (data.course[lessonNo].header == true) {
        if (pageNo < data.course[lessonNo].children.length - 1) {
          result = lessonNo + "/" + (pageNo + 1);
        } else {
          if (data.course[lessonNo + 1].header == false)
            result = (lessonNo + 1) + "/" + -1;
          else
            result = (lessonNo + 1) + "/" + 0;
        }
      } else {
        //console.log(data.course[Number(lessonNo) + 1].header);
        if (data.course[lessonNo + 1].header == false)
          result = (lessonNo + 1) + "/" + -1;
        else
          result = (lessonNo + 1) + "/" + 0;
      }
    } else {
      if (data.course[lessonNo].header == true) {
        if (pageNo < data.course[lessonNo].children.length - 1) {
          result = lessonNo + "/" + (pageNo + 1);
        }
      }
    }*/
    //console.log("next = ", result);
    return result;
  }
  getLessonName(num) {
    if (num == -1) {
      return null;
    }
    else {
      if (Number(num) < data.course.length)
        return data.course[Number(num)].title
    }
    //var arr = name.split('/');
    /*if (Number(arr[1]) == -1) {
      return data.course[Number(arr[0])].title
    } else {
      return data.course[Number(arr[0])].children[Number(arr[1])].title;
    }*/

  }
  getTotalPage() {

    var headerCount = data.course.filter(s => s.header == true).length;
    /*data.course.map(item => {
      if (item.header == true) {
        count += item.children.length;
      } else {
        count += 1;
      }
    })*/
    return data.course.length - headerCount;
  }


  progArr;
  getProgress() {

    return Math.floor(this.progArr.filter(s => s == true).length / this.getTotalPage() * 100);
  }


}
