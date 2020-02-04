import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'admin-card', 
  template: `
        <div>
        <label class="label">Type</label>
      </div>

      <select class="dropdown" [(ngModel)]="data.content.setting.style">
        <option value="style1">Style 1</option>
        <option value="style2">Style 2</option>
        <option value="style3">Style 3</option>
      </select>

      <hr>
      <div cdkDropList (cdkDropListDropped)="drop($event)">
        <div *ngFor="let item of this.data.content.data; let i=index" cdkDrag class="">

          <div class="flex block">
            <mat-icon cdkDragHandle>more_vert</mat-icon>
            <input type="text" [(ngModel)]="item.title" class="input" /> &nbsp;
            <mat-icon (click)="tab(i)" *ngIf="selectedtab != i">keyboard_arrow_down</mat-icon>
            <mat-icon (click)="close(i)" *ngIf="selectedtab == i">close</mat-icon>
          </div>

          <div class="content" *ngIf="this.data.content.data != undefined && selectedtab == i">
            <!-- <input type="number" class="input" [(ngModel)]="item.rowStart" />
            <input type="number" class="input" [(ngModel)]="item.rowEnd" />
            <input type="number" class="input" [(ngModel)]="item.colStart" />
            <input type="number" class="input" [(ngModel)]="item.colEnd" /> -->
            <div>
              <div>
                <label class="label">Content</label>
              </div>
              <div>
                <!-- <quill-editor [(ngModel)]="item.desc" theme="snow"></quill-editor> -->
                <admin-textblock [(content)]="item.desc"></admin-textblock>
              </div>
            </div>
            <div>
              <div>
                <label class="label">Image</label>
              </div>
              <div>
                <admin-image [(src)]="item.image"></admin-image>
              </div>
            </div>
            <button class="small danger" (click)="deleteItem(i)">Delete</button>
          </div>
        </div>
      </div>
      <button class="small add" (click)="addItem()">Add Item</button>
  `,
  styleUrls: ['./card.component.scss']
})
export class AdminCardComponent implements OnInit {

  @Input() data;


  constructor() { }

  ngOnInit() {
  }
  selectedtab;
  tab(n) {
    this.selectedtab = n;
  }
  close() {
    this.selectedtab = -1;

  }
  drop(event: CdkDragDrop<string[]>) {
    //console.log(page)
    moveItemInArray(this.data.content.data, event.previousIndex, event.currentIndex);
  }
  deleteItem(i) {
    this.data.content.data.splice(i, 1);
    this.selectedtab = -1;
  }
  addItem() {
    console.log(this.data) 
    this.data.content.data.push(
      {
        "title": "Title",
        "image": "",
        "desc": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>"
      }
    )
  }

}
