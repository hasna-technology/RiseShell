import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'page-property',
  templateUrl: './page-property.component.html',
  styleUrls: ['./../admin.scss']
})
export class PagePropertyComponent implements OnInit {

  @Input() data;
  @Output() closeEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
