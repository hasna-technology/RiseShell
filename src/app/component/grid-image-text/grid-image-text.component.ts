import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid-image-text',
  templateUrl: './grid-image-text.component.html',
  styleUrls: ['./grid-image-text.component.scss']
})
export class GridImageTextComponent implements OnInit {

  @Input() value;
  
  constructor() { }

  ngOnInit() {
  }

}
