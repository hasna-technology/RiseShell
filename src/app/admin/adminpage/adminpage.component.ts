import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { trigger, animate, state, style, transition } from '@angular/animations';
import { MainService } from 'src/app/service/main.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';

@Component({
  selector: 'admin-page',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.scss']
})
export class AdminPageComponent implements OnInit {

  @Input() data;

  @Output() closeEvent = new EventEmitter<string>();
  constructor(private router: Router, private service:MainService) {

  }

  ngOnInit() {
  }
  drop(event: CdkDragDrop<string[]>) {
    //console.log(page)
    moveItemInArray(this.data.course, event.previousIndex, event.currentIndex);
  }
  gotoPage(i) {

    if (this.data.course[i].header != true) {
      this.router.navigate(['c/' + this.service.getCourseId() + '/p/' + i]);
      this.closeEvent.emit();
    }
  }
  addPage() {
    var page = {
      "title": "New Page",
      "page": {
        "block": [
          {
            "type": "text",
            "property" : {
              "paddingTop" : "50",
              "paddingBottom" : "50",
              "fullwidth": false,
              "backgroundColor": "#ffffff"
             },
            "content": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>"
          },
        ]
      }
    }
    this.data.course.push(page);
  }

  dropDownClick(event) {
    console.log(event);
    if (event.name == "duplicate") {
      var new_obj = JSON.parse(JSON.stringify(this.data.course[event.index]));
      this.data.course.splice(event.index, 0, new_obj);
    } else if (event.name == "header") {
      this.data.course[event.index].header = !this.data.course[event.index].header;
    } else if (event.name == "delete") {
      this.data.course.splice(event.index, 1);
    }
  }
}

