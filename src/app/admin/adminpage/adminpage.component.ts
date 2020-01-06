import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  data;
  @Output() closeEvent = new EventEmitter<string>();
  constructor(public service: MainService, private router: Router) {
    this.data = service.getData();
  }

  ngOnInit() {
  }
  drop(event: CdkDragDrop<string[]>) {
    //console.log(page)
    moveItemInArray(this.data.course, event.previousIndex, event.currentIndex);
  }
  gotoPage(i) {
    this.closeEvent.emit();
    this.router.navigate(['page/' + i]);
  }
  addPage() {
    var page = {
      "title": "New Page",
      "page": {
        "block": [
        ]
      }
    }
    this.data.course.push(page);

  }
}

