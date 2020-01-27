import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from '../service/main.service';
import { trigger, sequence, keyframes, state, style, animate, transition } from '@angular/animations';
import { environment } from 'src/environments/environment';
import { CourseService } from '../service/publish/Course.service';

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

  admin;
  lesson_no;
  //page_no; 
  content; course; page; common_text;
  menu_close = false;
  admin_panel = true;
  currentState;
  course_id;
  currentNumber; prevString; nextString;
  item;
  sequence;

  constructor(public route: ActivatedRoute, public courseService: CourseService,  public service: MainService, private router: Router) {
    //this.init();
    this.admin = environment.admin;
    
    console.log("constructor from page")
  }

  onResize(event) {
    if (event.target.innerWidth < 980) {
      this.menu_close = true;
    }
  }

  result;
  
  ngOnInit() {
    var data = this.service.getData();
    this.course_id = this.service.getCourseId();
    if(this.course_id == -1){
      this.admin = false;
      this.service.setAdmin(false);
    }else{
      this.service.setAdmin(environment.admin);
    }
    this.route.paramMap.subscribe(params => {
      
      if (data != undefined) {
        
        this.lesson_no = params.get('i');
        //this.page_no = params.get('j');
        this.course = this.service.getData().course;
        this.content = this.service.getData();
        this.common_text = this.service.getData().common_text;
        this.page = this.service.getData().course[this.lesson_no];
        console.log("ngOnInit from page", this.lesson_no)

        //this.service.pageWithOutHeader();

        if (this.course != undefined) {
          this.prevString = this.findPrevString(this.lesson_no);
          this.nextString = this.findNextString(this.lesson_no);
          this.currentNumber = this.service.getPage(this.lesson_no)
        }
      }
    });

    if(this.courseService.getScorm() == undefined){
      this.courseService.initialize();
    }
  }

  findPrevString(lesson_no){
    
    var start = Number(lesson_no) - 1;
    console.log("start ", start);
    if(start < 0)
    return;

    for(var i=start;i>=0;i--)
    {
      console.log(i);
      if(this.course[i].header != true){
        return i;
      }
    }
    return undefined;
  }

  findNextString(lesson_no){
    var start = Number(lesson_no) + 1;
    for(var i=start;i<this.course.length;i++)
    {
      if(this.course[i].header != true){
        return i;
      }
    }
    return undefined;
  }
  ngDoCheck(): void {
    this.service.doCheck();
  }

  prev() {
    this.currentState = "top_bottom"
    //this.router.navigate(['c/' + this.course_id + '/p/' + this.prevString]);
    this.goto(this.prevString);
  }


  next() {
    this.currentState = 'bottom_top';
    console.log(this.service.getNextPage(this.lesson_no));
    this.goto(this.nextString);
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
    this.courseService.setBookmark(i);
    
    if(this.service.getPageCompletedCount() == this.service.getTotalPage()){
      this.courseService.complete();
    }
    this.router.navigate(['c/' + this.course_id + '/p/' + i], {preserveQueryParams:true});
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
