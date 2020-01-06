import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {

  @Input() data;

  constructor() { }

  ngOnInit() {
  }

  addText() {
    this.data.push({
      "type": "text",
      "content": "<p>Sample text to be added</p>"
    })
  }

  addImage() {
    this.data.push({
      "type": "image",
      "image": "assets/p1.jpg"
    })
  }

  addTextImage() {
    this.data.push({
      "type": "text_image_right",
      "image": "assets/p1.jpg",
      "content": "Text to be added"
    })
  }
}
