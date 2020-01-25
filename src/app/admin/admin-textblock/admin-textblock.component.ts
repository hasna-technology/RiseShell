import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MainService } from 'src/app/service/main.service';
import { CKEditor4 } from 'ckeditor4-angular/ckeditor';

@Component({
  selector: 'admin-textblock',
  template: `
  <ckeditor [(ngModel)]="content"
  [config]="this.service.getCKEditorToolbar()"
  (Change)="onChange($event)" 
  (dataChange)="onChange($event)"
  ></ckeditor> 
  `,
  styleUrls: ['./admin-textblock.component.scss']

  //   <ckbutton [name]="'saveButton'"
  //   [command]="'insert_name'"
  //   (click)="insert_name($event)"
  //   [icon]="'./path/to/icon.png'"
  //   [label]="'Insert User Name'"
  //   [toolbar]="'clipboard,1'">
  // </ckbutton>
})

//ng generate component test2 --inline-style=false --inline-template=false
export class AdminTextblockComponent implements OnInit {

  @Input() content;
  @Output() contentChange = new EventEmitter();

  constructor(public service: MainService) { }

  ngOnInit() {
  }

  public onChange(event: CKEditor4.EventInfo) {
    setTimeout(()=>{
      console.log("Time out");
      this.contentChange.emit(this.content);
    }, 1000);
    
    //console.log(event.editor.getData());
  }
}
