import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from '../service/main.service.js';
import { trigger, sequence, keyframes, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  animations: [
    trigger('changeState', [
      state('top_bottom', style({ transform: 'translateX(0)' })),
      state('bottom_top', style({ transform: 'translateY(0)' })),
      transition('*=>top_bottom', [
        style({
          transform: 'translateY(0%)',
          opacity : 0,
          position: 'static'
        }),
        sequence([
          animate(
            '1s ease-in-out',
            keyframes([
              style({ transform: 'translateY(-100%)', opacity : 0 }),
              style({ transform: 'translateY(0%)', opacity : 1 }),
            ])
          ),
        ])
      ]),
      transition('*=>bottom_top', [
        style({
          transform: 'translateY(100%)',
          position: 'static'
        }),
        sequence([
          animate(
            '1s ease-in-out',
            keyframes([
              style({ transform: 'translateY(100%)', opacity : 0 }),
              style({ transform: 'translateY(0%)', opacity : 1 }),
            ])
          ),
        ])
      ])
    ])
  ]
})
export class PageComponent implements OnInit {

  lesson_no; 
  //page_no; 
  content; course; page; common_text;
  menu_close = false;
  admin_panel = true;
  currentState;
  constructor(public route: ActivatedRoute, public service: MainService, private router: Router) {
    this.route.paramMap.subscribe(params => {
      var data = service.getData();
      this.lesson_no = params.get('i');
      //this.page_no = params.get('j');
      this.course = data.course;
      this.content = data;
      this.common_text = data.common_text;
      this.page = data.course[this.lesson_no];
      /*if (this.page_no == -1)
        this.page = data.course[this.lesson_no];
      else
        this.page = data.course[this.lesson_no].children[this.page_no];*/

      if (this.ngOnInit)
        this.ngOnInit()
    });
  }

  currentNumber; prevString; nextString;

  prev() {
    //let routerLink="/page/"+this.prevString;
    this.currentState = "top_bottom"
    this.router.navigate(['page/' + this.prevString]);
  }
  sequence;
  next() {
    //let routerLink="/page/"+this.nextString;
    this.currentState = 'bottom_top';
    this.router.navigate(['page/' + this.nextString]);
  }

  goto(i) {
    this.currentState = '';
    var gotoPage = this.service.getPage(i)
    console.log(gotoPage+" < "+this.currentNumber);
    if (gotoPage < this.currentNumber) {
      this.currentState = 'top_bottom';
      
    } else {
      this.currentState = 'bottom_top';
      
    }
    this.router.navigate(['page/' + i]);
  }

  ngOnInit() {
    this.prevString = (Number(this.lesson_no) - 1)
    this.nextString = (Number(this.lesson_no) + 1);
    this.currentNumber = this.service.getPage(this.lesson_no)
  }
  animEnd(event) {

    /*if (this.nextString != null && this.sequence == 'next') {
      this.sequence = '';
     

    } else {
      var menu_icon = document.getElementById('menu_icon');
      document.body.scrollTop = menu_icon.offsetTop;
      menu_icon.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }*/
    var menu_icon = document.getElementById('menu_icon');
    document.body.scrollTop = menu_icon.offsetTop;
    menu_icon.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    this.currentState = 'current';
  }
}
