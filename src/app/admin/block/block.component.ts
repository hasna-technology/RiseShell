import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss'],

  encapsulation: ViewEncapsulation.ShadowDom
})
export class BlockComponent implements OnInit {

  @Input() data;
  @Output() closeEvent = new EventEmitter<string>();

  searchValue;
  default_asset_path = environment.apiUrl + '002_default_assets/';
  //default_asset_path = 'assets/admin/';
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
      "content": `<div><p><b>Text only template</b>. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua.</p></div>`,
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
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua.</p>
    </div>
    <div class="item">
        <img src="` + this.default_asset_path + `watermelon.png" />
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
    <img class="full-width" src="` + this.default_asset_path + `image_only.png" />
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
                    <img class="full-width" src="` + this.default_asset_path + `grid.png" />
                  </div>
                </div>`,
      "clickable": () => {
        this.addGridImageText()
      }
    },

    {
      "title": "Grid 1",
      "grouptype": "Interactive",
      "type": "grid1",
      "content": ` <div>
                  <p class="heading"><b>Grid 1</b></p> 
                  <div class="item">
                    <img class="full-width" src="` + this.default_asset_path + `grid.png" />
                  </div>
                </div>`,
      "clickable": () => {
        this.addGrid1ImageText()
      }
    },

    
    {
      "title": "Card",
      "grouptype": "Interactive",
      "type": "card",
      "content": ` <div>
                  <p class="heading"><b>Card</b></p> 
                  <div class="item">
                    <img class="full-width" src="` + this.default_asset_path + `card.png" />
                  </div>
                </div>`,
      "clickable": () => {
        this.Card()
      }
    },

    {
      "title": "Image Column",
      "grouptype": "Interactive",
      "type": "grid",
      "content": ` <div>
                  <p class="heading"><b>Image Column</b></p> 
                  <div class="item">
                    <img class="full-width" src="` + this.default_asset_path + `imageColumn.png" />
                  </div>
                </div>`,
      "clickable": () => {
        this.addColumImage()
      }
    },
    {
      "title": "Tab",
      "grouptype": "Interactive",
      "type": "tab",
      "content": `<div>
                <p class="heading"><b>Tab</b></p> 
                <div class="item">
                  <img class="full-width" src="` + this.default_asset_path + `tab.png" />
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
    <img class="full-width" src="` + this.default_asset_path + `accordion.png" />
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
    <img class="full-width" src="` + this.default_asset_path + `timeline.png" />
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
    <img class="full-width" src="` + this.default_asset_path + `checklist.png" />
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
    <img class="full-width" src="` + this.default_asset_path + `orderedlist.png" />
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
    <img class="full-width" src="` + this.default_asset_path + `unorderedlist.png" />
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
    "contentwidth": false,
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
      "source": this.default_asset_path + "sample_audio.mp3"

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
      "source": this.default_asset_path + "video_sample.mp4"

    })

  }



  addText() {
    this.data.push({
      "type": "text",
      "property": this.property,
      "content": `<p><b>Text only template</b>. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua.</p>`
    })
    this.closeEvent.emit("block");
  }

  addTextWidthHeader() {
    this.data.push({
      "type": "text",
      "property": this.property,
      "content": `<h1>Heading + text</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua.</p>`
    })
    this.closeEvent.emit("block");
  }

  addImage() {
    this.data.push({
      "type": "image",
      "property": this.property,
      "image": this.default_asset_path + "image_only.png"
    })
    this.closeEvent.emit("block");
  }

  addTextImage() {
    this.data.push({
      "type": "text_image_right",
      "property": this.property,
      "image": this.default_asset_path + "watermelon.png",
      "content": `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`
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
            "image": this.default_asset_path + "icon1.png",
            "desc": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>"
          },
          {
            "title": "Grid 2",
            "image": this.default_asset_path + "icon2.png",
            "desc": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>"
          },
          {
            "title": "Grid 3",
            "image": this.default_asset_path + "icon3.png",
            "desc": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>"
          }

        ]
      }
    }
    )
    this.closeEvent.emit("block");
  }

  addGrid1ImageText() {
    this.data.push({

      "type": "grid1",
      "property": this.property,
      "content": {
        "setting": {
        },
        "data": [
          {
            "title": "Grid 1",
            "image": "",
            "desc": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>"
          },
          {
            "title": "Grid 2",
            "image": "",
            "desc": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>"
          },
          {
            "title": "Grid 3",
            "image": "",
            "desc": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>"
          }

        ]
      }
    }
    )
    this.closeEvent.emit("block");
  }


  Card() {
    this.data.push({

      "type": "card",
      "property": this.property,
      "content": {
        "setting": {
          "style":"style 1",
          "height":"250"
        },
        "instruction" : "",
        "data": [
          {
            "title": "Title 1",
            "image": "",
            "desc": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>"
          },
          {
            "title": "Title 2",
            "image": "",
            "desc": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>"
          },
          {
            "title": "Title 3",
            "image": "",
            "desc": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>"
          }

        ]
      }
    }
    )
    this.closeEvent.emit("block");
  }

  addColumImage() {
    this.data.push({

      "type": "grid",
      "property": this.property,
      "content": {
        "setting": {
          "row": 3,
          "image_position": "top",
          "background_color": "#efefef"
        },
        "data": [
          {
            "title": "Title 1",
            "image": this.default_asset_path + "col1_image.png",
            "desc": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>"
          },
          {
            "title": "Title 2",
            "image": this.default_asset_path + "col2_image.png",
            "desc": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>"
          },
          {
            "title": "Title 3",
            "image": this.default_asset_path + "col3_image.png",
            "desc": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>"
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
          "image_position": "bottom",
          "background_color": "#efefef"
        },
        "data": [
          {
            "title": "Tab 1",
            "image": "",
            "desc": "<P>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>"
          },
          {
            "title": "Tab 2",
            "image": "",
            "desc": "<p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>"
          },
          {
            "title": "Tab 3",
            "image": "",
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
          "image_position": "bottom",
          "background_color": "#efefef"
        },
        "data": [
          {
            "title": "Accordion 1",
            "image": "",
            "desc": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>"
          },
          {
            "title": "Accordion 2",
            "image": "",
            "desc": "<p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>"
          },
          {
            "title": "Accordion 3",
            "image": "",
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
          "image_position": "bottom",
          "background_color": "#efefef"
        },
        "data": [
          {
            "date": "Date 1",
            "title": "Timeline 1",
            "desc": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>",
            "image": ""
          },
          {
            "date": "Date 2",
            "title": "Timeline 2",
            "desc": "<p>The standard chunk of Lorem Ipsum used since the 1500s.It is a long established fact that a reader willIt is long established fact that a reader willIt is long It is a long established fact that a reader willIt is long established fact that a reader willIt is long</p>",
            "image": ""
          },
          {
            "date": "Date 3",
            "title": "Timeline 3",
            "desc": "<p>It is a long established fact that a reader willIt is long established fact that a reader willIt is long established fact that a reader willIt is long established fact that a reader willIt is long established fact that a reader willIt is long established fact that a reader willIt is long established fact that a reader willIt is long established fact that a reader willIt is a long established fact that a reader willIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>",
            "image": ""
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
          "text": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim tincidunt libero et euismod. </p>"

        },
        {
          "text": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim tincidunt libero et euismod. </p>"
        },
        {
          "text": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim tincidunt libero et euismod. </p>"
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
          "text": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim tincidunt libero et euismod. </p>"

        },
        {
          "text": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim tincidunt libero et euismod. </p>"
        },
        {
          "text": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim tincidunt libero et euismod. </p>"
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
          "text": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim tincidunt libero et euismod. </p>"

        },
        {
          "text": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim tincidunt libero et euismod. </p>"
        },
        {
          "text": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim tincidunt libero et euismod. </p>"
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
        "backgroundColor": "#b4600F",
        "height": "2",
        "paddingTop": "0",
        "paddingBottom": "0"
      }
    })
    this.closeEvent.emit("block");
  }

}

