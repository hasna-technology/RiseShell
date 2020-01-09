import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {

  @Input() data;
  @Output() closeEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  addText() {
    this.data.push({
      "type": "text",
      "content": `
      <p>
        <b>Text only template</b>. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>`
    })
    this.closeEvent.emit();
  }

  addTextWidthHeader(){
    this.data.push({
      "type": "text",
      "content": `<h1>Heading + text</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>`
    })
    this.closeEvent.emit();
  }

  addImage() {
    this.data.push({
      "type": "image",
      "image": "assets/admin/image_only.png"
    })
    this.closeEvent.emit();
  }

  addTextImage() {
    this.data.push({
      "type": "text_image_right",
      "image": "assets/admin/watermelon.png",
      "content": `<p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua.
    </p>`
    })
    this.closeEvent.emit();
  }
  
  addGridImageText(){
   
}
}
