import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'admin-grid1',
  templateUrl: './grid1.component.html',
  styleUrls: ['./grid1.component.scss']
})
export class Grid1Component implements OnInit {

  @Input() data;

  
  constructor() { }

  ngOnInit() {
  }
  selectedtab;
  tab(n) {
    this.selectedtab = n;
  }
  close() {
    this.selectedtab = -1;
  
  }
  drop(event: CdkDragDrop<string[]>) {
    //console.log(page)
    moveItemInArray(this.data.content.data, event.previousIndex, event.currentIndex);
  }
  deleteItem(i) {
    this.data.content.data.splice(i, 1);
    this.selectedtab = -1;
  }
  addItem() {
    console.log(this.data)
    this.data.content.data.push(
      {
        "title": "Title",
        "image": "",
        "desc": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>"
      }
    )
  }

}
