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
  constructor(private router: Router) {

  }

  ngOnInit() {
  }
  drop(event: CdkDragDrop<string[]>) {
    //console.log(page)
    moveItemInArray(this.data.course, event.previousIndex, event.currentIndex);
  }
  gotoPage(i) {

    if (this.data.course[i].header != true) {
      this.router.navigate(['page/' + i]);
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
            "content": "<p>AK-<span style='color: rgb(107, 36, 178);'>CC55 </span>Case <span style='background-color: rgb(230, 0, 0);'>Controller </span>system view is a connection that consists of case controllers (AK-CC55 Compact, Single Coil, Single Coil UI and Multi Coil), displays (AK-UI Bluetooth, Set and Info), KoolProg and the Connect App.</p>"
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

