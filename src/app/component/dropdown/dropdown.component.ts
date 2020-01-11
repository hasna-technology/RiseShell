import { Component, OnInit, Input, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() data;
  @Input() index;
  @Input() selectedData;
 
  constructor(private _eref: ElementRef) { }

  ngOnInit() {
    console.log("itemClicked", this.data);
  }

  showMenu = false;
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  hideMenu(event: any) {
    this.showMenu = false;
  }

  /** TODO: 2. Move the functionality independent of custom component dropdown */
  itemClicked(i) {

    //duplicate
    if (i == 0) {
      var new_obj = JSON.parse(JSON.stringify(this.selectedData.page.block[this.index]));
      this.selectedData.page.block.splice(this.index, 0, new_obj);
    } else if (i == 1) {
      //for delete
      this.selectedData.page.block.splice(this.index, 1);
    }
    console.log("itemClicked New ", i);
    this.hideMenu(null);
  }
}
