import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'admin-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

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
    var img = "";
    if(this.data.content.setting.image_position == 'left'){
      img = "assets/admin/icon1.png";
    }else if(this.data.content.setting.image_position == 'top'){
      img = "assets/admin/col1_image.png";
    }else {
      img = "";
    }
    this.data.content.data.push(
      {
        "title": "Title",
        "image": img,
        "desc": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>"
      }
    )
  }
}
