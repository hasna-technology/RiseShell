import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class BlockComponent implements OnInit {

  @Input() data;
  @Output() closeEvent = new EventEmitter<string>();

  
  arrays = [
    {
      "type": "heading",
      "content": `<div>
                    <p class="sec_title">Media</p>
                  </div>`
    },
    {
      "title": "Audio",
      "grouptype": "Media",
      "type": "audio",
      "content": `<div>
    <p>
        <b>Audio</b>
      </p>
  </div>`,
      "clickable": () => {
        this.addAudio()
      }
    },
    {
      "title": "Video",
      "grouptype": "Media",
      "type": "video",
      "content": `<div>
    <p>
        <b>Video</b>
      </p>
  </div>`,
      "clickable": () => {
        this.addVideo()
      }
    },
    {
      "type": "heading",
      "content": `<div>
                    <p class="sec_title">Text</p>
                  </div>`
    },
    {
      "title": "Text",
      "type": "text",
      "content": `<div>
  <p>
      <b>Text only template</b>. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua.
    </p>
</div>`,
      "clickable": () => {
        this.addText()
      }
    },
    {
      "title": "Heading + text",
      "type": "text",
      "content": `<div>
  <h1>Heading + text</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua.
  </p>
</div>`,
      "clickable": () => {
        this.addTextWidthHeader()
      }
    },
    {
      "type": "heading",
      "content": `<div>
  <p class="sec_title">Image<\/p>
</div>`
    },
    {
      "title": "Text & Image",
      "type": "text_image_right",
      "content": `<div>
  
  <p class="heading"><b>Text & Image</b></p>
  <div class="flex">
    <div class="item left">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </p>
    </div>
    <div class="item">
        <img src="assets/admin/watermelon.png" />
      </div>
  </div>
</div>`,
      "clickable": () => {
        this.addTextImage()
      }
    },
    {
      "title": "Image Only",
      "type": "image",
      "content": `<div>
  <p class="heading"><b>Image Only</b></p>
  <div class="item">
    <img class="full-width" src="assets/admin/image_only.png" />
  </div>
</div>`,
      "clickable": () => {
        this.addImage()
      }
    },
    {
      "type": "heading",
      "content": `<div>
  <p class="sec_title">Interactive</p>
</div>`
    },
    {
      "title": "Grid",
      "grouptype": "Interactive",
      "type": "grid",
      "content": ` <div>
  <p class="heading"><b>Grid</b></p> 
  <div class="item">
    <img class="full-width" src="assets/Block/grid.png" />
  </div>
</div>`,
      "clickable": () => {
        this.addGridImageText()
      }
    },
    {
      "title": "Tab",
      "grouptype": "Interactive",
      "type": "tab",
      "content": `<div>
  <p class="heading"><b>Tab</b></p> 
  <div class="item">
    <img class="full-width" src="assets/Block/tab.png" />
  </div>
</div>`,
      "clickable": () => {
        this.addTab()
      }
    },
    {
      "title": "Accordion",
      "grouptype": "Interactive",
      "type": "accordion",
      "content": `<div>
  <p class="heading"><b>Accordion</b></p> 
  <div class="item">
    <img class="full-width" src="assets/Block/accordion.png" />
  </div>
</div>`,
      "clickable": () => {
        this.addAccordion()
      }
    },
    {
      "title": "Timeline",
      "grouptype": "Interactive",
      "type": "timeline",
      "content": `<div>
  <p class="heading"><b>Timeline</b></p> 
  <div class="item">
    <img class="full-width" src="assets/Block/timeline.png" />
  </div>
</div>`,
      "clickable": () => {
        this.addTimeline()
      }
    },
    {
      "type": "heading",
      "content": `<div >
  <p class="sec_title">List</p>
</div>`
    },
    {
      "title": "CheckList",
      "type": "checklist",
      "content": `<div>
  <p class="heading"><b>CheckList</b></p> 
  <div class="item">
    <img class="full-width" src="assets/Block/checklist.png" />
  </div>
</div>`,
      "clickable": () => {
        this.addChecklist()
      }
    },

    {
      "title": "Ordered List",
      "type": "ordered_list",
      "content": `<div>
  <p class="heading"><b>Ordered List</b></p> 
  <div class="item">
    <img class="full-width" src="assets/Block/orderedlist.png" />
  </div>
</div>`,
      "clickable": () => {
        this.addOrdered_list()
      }
    },
    {
      "title": "Unordered List",
      "type": "unordered_list",
      "content": `<div>
  <p class="heading"><b>Unordered List</b></p> 
  <div class="item">
    <img class="full-width" src="assets/Block/unorderedlist.png" />
  </div>
</div>`,
      "clickable": () => {
        this.addUnordered_list()
      }
    },
    {
      "type": "heading",
      "content": `<div >
  <p class="sec_title">Divider</p>
</div>`
    },
    {
      "title": "Divider",
      "type": "divider",
      "content": `<div>
  <p class="heading"><b>Divider</b></p> 
  <div class="line">`,
      "clickable": () => {
        this.addDivider()
      }
    }

  ]




  constructor() { }

  ngOnInit() {

  }

  property = {
    "paddingTop": "50",
    "paddingBottom": '50',
    "fullwidth": false,
    "backgroundColor": "#ffffff"
  }

  addAudio() {
    this.data.push({
      "type": "audio",
      "property": {
        "paddingTop": "50",
        "paddingBottom": "50",
        "fullwidth": false,
        "backgroundColor": "#ffffff"
      },
      "autoplay": false,
      "source": "assets/audio/sample_audio.mp3"

    })

  }

  addVideo() {
    this.data.push({
      "type": "video",
      "property": {
        "paddingTop": "50",
        "paddingBottom": "50",
        "fullwidth": false,
        "backgroundColor": "#ffffff"
      },
      "autoplay": false,
      "source": "assets/video/video_sample.mp4"

    })

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

      "type": "grid",
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
            "desc": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>"
          },
          {
            "title": "Grid 2",
            "image": "assets/icon2.jpg",
            "desc": "<p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>"
          },
          {
            "title": "Grid 3",
            "image": "assets/icon3.jpg",
            "desc": "<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>"
          }

        ]
      }
    }
    )
    this.closeEvent.emit("block");
  }

  addTab() {
    this.data.push({
      "type": "tab",

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
            "desc": "<P>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>"
          },
          {
            "title": "Tab 2",
            "image": "assets/icon2.jpg",
            "desc": "<p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>"
          },
          {
            "title": "Tab 3",
            "image": "assets/icon3.jpg",
            "desc": "<p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>"
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
            "desc": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>"
          },
          {
            "title": "Accordion 2",
            "image": "assets/icon2.jpg",
            "desc": "<p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>"
          },
          {
            "title": "Accordion 3",
            "image": "assets/icon3.jpg",
            "desc": "<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>"
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
            "desc": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>",
            "image": "assets/p1.jpg"
          },
          {
            "date": "Date 2",
            "title": "Grid 2",
            "desc": "<p>The standard chunk of Lorem Ipsum used since the 1500s.It is a long established fact that a reader willIt is long established fact that a reader willIt is long It is a long established fact that a reader willIt is long established fact that a reader willIt is long</p>",
            "image": "assets/p1.jpg"
          },
          {
            "date": "Date 3",
            "title": "Grid 3",
            "desc": "<p>It is a long established fact that a reader willIt is long established fact that a reader willIt is long established fact that a reader willIt is long established fact that a reader willIt is long established fact that a reader willIt is long established fact that a reader willIt is long established fact that a reader willIt is long established fact that a reader willIt is a long established fact that a reader willIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>",
            "image": "assets/p1.jpg"
          }

        ]
      }

    })
    this.closeEvent.emit("block");
  }

  addChecklist() {
    this.data.push({
      "type": "checklist",
      "property": this.property,
      "data": [
        {
          "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

        },
        {
          "text": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
        },
        {
          "text": "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
      ]
    })
    this.closeEvent.emit("block");
  }

  addOrdered_list() {
    this.data.push({
      "type": "ordered_list",
      "property": this.property,
      "data": [
        {
          "text": "Lorem Ipsum  and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. "

        },
        {
          "text": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. "
        },
        {
          "text": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
        }



      ]
    })
    this.closeEvent.emit("block");
  }
  addUnordered_list() {
    this.data.push({
      "type": "unordered_list",
      "property": this.property,
      "data": [
        {
          "text": "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."

        },
        {
          "text": "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
        },
        {
          "text": "Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
        }
      ]
    })
    this.closeEvent.emit("block");
  }
  addDivider() {
    this.data.push({
      "type": "divider",
      "property": this.property,
      "data": {
        "backgroundColor": "red",
        "height": "4",
        "paddingTop": "0",
        "paddingBottom": "0"
      }
    })
    this.closeEvent.emit("block");
  }

}

