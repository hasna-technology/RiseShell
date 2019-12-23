import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import data from '../../data/en/content.json';
import { MainService } from '../service/main.service.js';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  animations: [
    trigger('changeState', [
      state('state1', style({
        backgroundColor: 'green',
        transform: 'translate3d(0, -3rem, 0)'
      })),
      state('state2', style({
        backgroundColor: 'red',
        transform: 'translate3d(0, 100vh, 0)'
      })),
      transition('*=>state1', animate('500ms')),
      transition('*=>state2', animate('2000ms'))
    ])
  ]
})
export class PageComponent implements OnInit {

  lesson_no; page_no; content; course; page; common_text;
  menu_close = false;
  currentState;
  constructor(public route: ActivatedRoute, public service:MainService, private router:Router) {
    this.route.paramMap.subscribe(params => {
      this.lesson_no = params.get('i');
      this.page_no = params.get('j');
      
      //console.log("this.lesson_no = " + this.lesson_no);
      //console.log("this.page_no = " + this.page_no);
      this.course = data.course;
      this.content = data;
      this.common_text = data.common_text;
      if(this.page_no == -1)
        this.page = data.course[this.lesson_no];
      else
        this.page = data.course[this.lesson_no].children[this.page_no];

        //this.currentState = this.currentState  == 'state1' ? 'state2' : 'state1';

      if(this.ngOnInit)
        this.ngOnInit()
    });
  }

  currentNumber;prevString;nextString;

  prev(){
    //let routerLink="/page/"+this.prevString;
    this.currentState = "top_bottom"
    this.router.navigate(['page/'+this.prevString]);
  }

  next(){
    //let routerLink="/page/"+this.nextString;
    console.log(this.nextString)
    this.router.navigate(['page/'+this.nextString]);
  }
  ngOnInit() {
    this.prevString = this.service.prevPage(this.lesson_no, this.page_no)
    this.nextString = this.service.nextPage(this.lesson_no, this.page_no);
    this.currentNumber = this.service.getPage(this.lesson_no, this.page_no)
  }
  animEnd(event){
    console.log(event);
  }
}
