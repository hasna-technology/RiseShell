import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'admin-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  constructor() { }

  @Input() src;
  
  ngOnInit() {
  }

}
