import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-image',
  templateUrl: './text-image.component.html',
  styleUrls: ['./text-image.component.scss']
})
export class TextImageComponent implements OnInit {

  @Input() value;
  constructor() { }

  ngOnInit() {
  }

}
