import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() data;
  @Input() index;

  @Output() clickEmit = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  showMenu = false;
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  hideMenu() {
    this.showMenu = false;
  }

  itemClicked(n) {
    this.clickEmit.emit({ name: n, index: this.index });
    this.hideMenu();
  }
}
