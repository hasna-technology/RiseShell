import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-quizedit',
  templateUrl: './quizedit.component.html',
  styleUrls: ['./quizedit.component.scss']
})
export class QuizeditComponent implements OnInit {
  @Input() data;
  item: any;
  constructor() { }

  ngOnInit() {
    console.log(this.data.quiz[0].question.choices)
  }
  @ViewChild('fullScreen', { static: false }) divRef;

  openFullscreen() {
    // Use this.divRef.nativeElement here to request fullscreen
    const elem = this.divRef.nativeElement;

    /*if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    }*/
    //elem.parentElement.style.position = 'absolute';
    //this.setParentDiv(elem);
  }

  setParentDiv(elem) {
    if (elem.parentElement != null) {
      elem.parentElement.style.position = 'static';
      elem.parentElement.style.zIndex = '9996';
      elem.parentElement.style.width = '0px';
      elem.parentElement.style.height = '0px';
      this.setParentDiv(elem.parentElement);
    }
  }
  
  drop(event: CdkDragDrop<string[]>,i) {
    moveItemInArray(this.data.quiz[i].question.choices, event.previousIndex, event.currentIndex);
  }
  drop1(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.data.quiz, event.previousIndex, event.currentIndex);
  }
  selectedtab;
 tab(n){
   this.selectedtab = n
  
 }
 deleteItem(i) {
  console.log(this.item)
  this.data.quiz[i].question.choices.splice(i, 1);
  //this.selectedtab = -1;
 
}
deleteQuestion(i){
  this.data.quiz.splice(i, 1);
  this.selectedtab = -1;
}

addchoice(i){
  this.data.quiz[i].question.choices.push({
    "content": "The Blue LED on the controller",
    "selected": false,
    "correct": "true",
    "feedback": [
        {
            "correct": "",
            "incorrect": ""
        }
    ]
    
  })
}
additem(){
 this.data.quiz.push
 ({
  "type": "single_choice",
  "question": {
      "content": "Where do you choose which parameters to view in the graph?",
      "selected": "0",
      "choices": [
          {
              "content": "In the parameter menu",
              "correct": "true",
              "feedback": [
                  {
                      "correct": "",
                      "incorrect": ""
                  }
              ]
          },
          {
              "content": "In the filter function for the graphs  ",
              "correct": "false",
              "feedback": [
                  {
                      "correct": "",
                      "incorrect": ""
                  }
              ]
          },
          {
              "content": "In the case controller",
              "correct": "false",
              "feedback": [
                  {
                      "correct": "",
                      "incorrect": ""
                  }
              ]
          }
      ]
  }


})

}



}

