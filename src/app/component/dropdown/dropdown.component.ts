import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() data;
  @Input() index;

  constructor(private _eref: ElementRef) { }

  ngOnInit() {

  }

  showMenu = false;
  toggleMenu() {
    this.showMenu = !this.showMenu;
    console.log(this.showMenu)
    if (this.showMenu) {
      document.addEventListener('mousedown', () => {
        this.hideMenu();
      }, false);
    }
  }
  hideMenu() {
    if (!this._eref.nativeElement.contains(event.target)) // or some similar check
    {
      /*if (event.target.tagName != "BUTTON") {
        this.showMenu = false;
        document.removeEventListener('mousedown', this.hideMenu);
        console.log("hideMenu", this.showMenu)
      }*/
    } else {
      this.showMenu = false;
      document.removeEventListener('mousedown', this.hideMenu);
      console.log("hideMenu", this.showMenu) 
    }
 

  }
}
