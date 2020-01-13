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

  property = {
    "paddingTop": "50",
    "paddingBottom": "50",
    "fullwidth": false,
    "backgroundColor": "#ffffff"
  }

  addText() {
    this.data.push({
      "type": "text",
      "property": this.property,
      "content": `
      <p>
        <b>Text only template</b>. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>`
    })
    this.closeEvent.emit("block");
  }

  addTextWidthHeader() {
    this.data.push({
      "type": "text",
      "property": this.property,
      "content": `<h1>Heading + text</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>`
    })
    this.closeEvent.emit("block");
  }

  addImage() {
    this.data.push({
      "type": "image",
      "property": this.property,
      "image": "assets/admin/image_only.png"
    })
    this.closeEvent.emit("block");
  }

  addTextImage() {
    this.data.push({
      "type": "text_image_right",
      "property": this.property,
      "image": "assets/admin/watermelon.png",
      "content": `<p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua.
    </p>`
    })
    this.closeEvent.emit("block");
  }

  addGridImageText() {
    this.data.push({

      "type": "grid_image_text",
      "property": this.property,
      "content": {
        "setting": {
          "row": 3,
          "image_position": "left",
          "background_color": "#efefef"
        },
        "data": [
          {
            "title": "Grid 1",
            "image": "assets/icon1.jpg",
            "desc": "Description of the text to be added in the part."
          },
          {
            "title": "Grid 2",
            "image": "assets/icon2.jpg",
            "desc": "The standard chunk of Lorem Ipsum used since the 1500s."
          },
          {
            "title": "Grid 3",
            "image": "assets/icon3.jpg",
            "desc": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          }

        ]
      }
    }
    )
    this.closeEvent.emit("block");
  }

  addTab() {
    this.data.push({
      "type": "tab_image_text",
      "property": this.property,
      "content": {
        "setting": {
          "row": 3,
          "image_position": "left",
          "background_color": "#efefef"
        },
        "data": [
          {
            "title": "Tab 1",
            "image": "assets/p1.jpg",
            "desc": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
          },
          {
            "title": "Tab 2",
            "image": "assets/icon2.jpg",
            "desc": "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."
          },
          {
            "title": "Tab 3",
            "image": "assets/icon3.jpg",
            "desc": "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
          }
        ]
      }
    })
    this.closeEvent.emit("block");
  }

  addAccordion() {
    this.data.push({

      "type": "accordion",
      "property": this.property,
      "content": {
        "setting": {
          "row": 3,
          "image_position": "left",
          "background_color": "#efefef"
        },
        "data": [
          {
            "title": "Accordion 1",
            "image": "assets/p1.jpg",
            "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          },
          {
            "title": "Accordion 2",
            "image": "assets/icon2.jpg",
            "desc": " It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."
          },
          {
            "title": "Accordion 3",
            "image": "assets/icon3.jpg",
            "desc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
          }
        ]
      }
    })
    this.closeEvent.emit("block");
  }

  addTimeline() {
    this.data.push({
      "type": "timeline",
      "property": this.property,
      "content": {
        "setting": {
          "row": 3,
          "image_position": "left",
          "background_color": "#efefef"
        },
        "data": [
          {
            "date": "Date 1",
            "title": "Grid 1",
            "desc": "Description of the text to be added in the part.It is a long established fact that a reader willIt is long established fact that a reader willIt is long It is a long established fact that a reader willIt is long established fact that a reader willIt is long",
            "image": "assets/p1.jpg"
          },
          {
            "date": "Date 2",
            "title": "Grid 2",
            "desc": "The standard chunk of Lorem Ipsum used since the 1500s.It is a long established fact that a reader willIt is long established fact that a reader willIt is long It is a long established fact that a reader willIt is long established fact that a reader willIt is long",
            "image": "assets/p1.jpg"
          },
          {
            "date": "Date 3",
            "title": "Grid 3",
            "desc": "It is a long established fact that a reader willIt is long established fact that a reader willIt is long established fact that a reader willIt is long established fact that a reader willIt is long established fact that a reader willIt is long established fact that a reader willIt is long established fact that a reader willIt is long established fact that a reader willIt is a long established fact that a reader willIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            "image": "assets/p1.jpg"
          }

        ]
      }

    })
    this.closeEvent.emit("block");
  }


}

