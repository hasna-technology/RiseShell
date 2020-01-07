import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'admin-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  @Input() data;

  show = true;
  hide = true;
  constructor() { }

  ngOnInit() {
  }
  selectedtab;
  tab(n) {
    this.selectedtab = n;
    this.show = false;
    this.hide = true;
  }
  close() {
    this.selectedtab = -1;
    this.show = true;
    this.hide = false;
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
    this.data.content.data.push(
      {
        "title": "Grid Title",
        "image": "assets/icon1.jpg",
        "desc": "Description of the text to be added in the part."
      }
    )
  }
}
