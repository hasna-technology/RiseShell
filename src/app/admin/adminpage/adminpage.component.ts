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

