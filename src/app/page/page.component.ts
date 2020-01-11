import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from '../service/main.service.js';
import { trigger, sequence, keyframes, state, style, animate, transition } from '@angular/animations';
import { environment } from 'src/environments/environment';

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
          opacity: 0,
          position: 'static'
        }),
        sequence([
          animate(
            '1s ease-in-out',
            keyframes([
              style({ transform: 'translateY(-100%)', opacity: 0 }),
              style({ transform: 'translateY(0%)', opacity: 1 }),
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
              style({ transform: 'translateY(100%)', opacity: 0 }),
              style({ transform: 'translateY(0%)', opacity: 1 }),
            ])
          ),
        ])
      ])
    ])
  ],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class PageComponent implements OnInit {

  onResize(event){
    //\console.log(window.innerWidth); // window width
    if(event.target.innerWidth < 980){
      this.menu_close = true;
    }
  }

  lesson_no;
  //page_no; 
  content; course; page; common_text;
  menu_close = false;
  admin_panel = true;
  currentState;
  course_id;
  constructor(public route: ActivatedRoute, private service: MainService, private router: Router) {
    this.init();

    if (environment.production == true) {
      this.route.queryParams.subscribe(params => {
        this.course_id = params['id'];
        this.loadcourse(this.course_id)
      });
    } else {
      this.loadcourse(1)
    }
  }
  loadcourse(course_id){
    console.log("page course_id", course_id);
    this.service.load_course(course_id).subscribe(
      res => {
        //console.log(res);
        this.service.setPath(res.data.filename);
        this.service.setData(JSON.parse(res.data.json));
        this.init();
      },
      err => {
        console.log(err);
      }
    )
  }
  init() {
    this.route.paramMap.subscribe(params => {
      var data = this.service.getData();
      //console.log("init", data);
      if (data != undefined) {
        this.lesson_no = params.get('i');
        //this.page_no = params.get('j');
        this.course = this.service.getData().course;
        this.content = this.service.getData();
        this.common_text = this.service.getData().common_text;
        this.page = this.service.getData().course[this.lesson_no];
      
        if (this.ngOnInit)
          this.ngOnInit()
      } else {
     
        setTimeout( ()=>{
          // var filename = this.service.getFilename();
          // this.service.loadJson().subscribe(
          //   res => {
              
          //     this.service.setData(JSON.parse(res.data.json));
          //     data = this.service.getData();
          //     this.init();
          //   },
          //   err => {
          //     console.log(err);
          //   }
          // )
          this.loadcourse(this.course_id);
        }, 5000)
        
      }

    });
    //this.onResize();
  }
  currentNumber; prevString; nextString;

  ngDoCheck(): void {
    this.service.doCheck();
   
  }

  prev() {
    this.currentState = "top_bottom"
    this.router.navigate(['page/' + this.prevString]);
  }
  sequence;
  next() {
    this.currentState = 'bottom_top';
    this.router.navigate(['page/' + this.nextString]);
  }

  goto(i) {
    this.currentState = '';
    var gotoPage = this.service.getPage(i)
    console.log(gotoPage + " < " + this.currentNumber);
    if (gotoPage < this.currentNumber) {
      this.currentState = 'top_bottom';

    } else {
      this.currentState = 'bottom_top';

    }
    this.router.navigate(['page/' + i]);
  }

  ngOnInit() {
    if (this.course != undefined) {
      this.prevString = (Number(this.lesson_no) - 1)
      this.nextString = (Number(this.lesson_no) + 1);
      this.currentNumber = this.service.getPage(this.lesson_no)
    }

  }
  animEnd(event) {
    var menu_icon = document.getElementById('menu_icon');
    document.body.scrollTop = menu_icon.offsetTop;
    menu_icon.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    this.currentState = 'current';
  }
}
