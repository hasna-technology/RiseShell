import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from '../service/main.service';
import { trigger, sequence, keyframes, state, style, animate, transition } from '@angular/animations';
import { environment } from 'src/environments/environment';
import { RequestMethod } from '@angular/http';

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
//@HostListener('window:resize', ['$event'])
export class PageComponent implements OnInit {

  onResize(event) {
    //console.log(event.target.innerWidth); // window width
    if (event.target.innerWidth < 980) {
      this.menu_close = true;
    }
  }
  admin;
  lesson_no;
  //page_no; 
  content; course; page; common_text;
  menu_close = false;
  admin_panel = true;
  currentState;
  course_id;
  currentNumber; prevString; nextString;

  constructor(public route: ActivatedRoute, public service: MainService, private router: Router) {
    this.init();
    this.admin = environment.admin;

    /*this.service.request("json/course/123", RequestMethod.Get).subscribe(data=>{
      console.log(data);
      this.result = data;
    })*/
  }

  result;

  loadcourse(course_id) {
    console.log("course_id = " + course_id);
    this.service.load_course(course_id).subscribe(
      res => {
        if (environment.production == true) {
          this.service.setPath(res.data.filename);
          this.service.setData(JSON.parse(res.data.json));
          console.log("app component course is loaded from course id " + course_id);
        } else {
          console.log("app component course is loaded from local assets/json/content.json");
          this.service.setPath("assets/json/content.json");
          this.service.setData(res);
        }
        this.init();
      },
      err => {
        console.log(err);
      }
    )
  }

  init() {
    this.route.paramMap.subscribe(params => {

      console.log("environment.production = " + environment.production);
      this.course_id = params.get('id');
      if (!environment.production) {
        this.course_id = 1
      }
      this.service.setCourseID(this.course_id);

      //this.loadcourse(this.course_id)
      var data = this.service.getData();

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

        setTimeout(() => {
          this.loadcourse(this.course_id);
        }, 1000)

      }

    });
    //this.onResize();
  }

  ngOnInit() {
    if (this.course != undefined) {
      this.prevString = (Number(this.lesson_no) - 1)
      this.nextString = (Number(this.lesson_no) + 1);
      this.currentNumber = this.service.getPage(this.lesson_no)
    }

  }



  ngDoCheck(): void {
    this.service.doCheck();

  }

  prev() {
    this.currentState = "top_bottom"
    this.router.navigate(['c/' + this.course_id + '/p/' + this.prevString]);
  }
  sequence;
  next() {
    this.currentState = 'bottom_top';
    this.router.navigate(['c/' + this.course_id + '/p/' + this.nextString]);
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
    this.router.navigate(['c/' + this.course_id + '/p/' + i]);
  }


  animEnd(event) {
    var menu_icon = document.getElementById('menu_icon');
    if (menu_icon != null) {
      document.body.scrollTop = menu_icon.offsetTop;
      menu_icon.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      this.currentState = 'current';
    }
  }

}
