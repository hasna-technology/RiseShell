import { Component, OnInit, Input } from '@angular/core';
import { trigger, animate, state, style, transition } from '@angular/animations';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'admin-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
  animations: [
    trigger('changeState', [
      state('Open', style({ transform: 'translateX(10px)' })),
      state('Close', style({ transform: 'translateX(500px)' })),
      transition('*=>Open', animate('500ms ease-out')),
      transition('*=>Close', animate('500ms ease-in'))
    ])
  ]
})
export class PanelComponent implements OnInit {

  @Input() data;
  setBack;
  pageState;
  currentState;
  selectedBlock;
  blockState;

  constructor() { }

  ngOnInit() {
  }

  gotoSetting(item) {
    this.currentState = 'Open';
    this.selectedBlock = item;
    this.setBack = true;
  }
  goBack() {
    this.currentState = 'Close';
    this.pageState = 'Close';
    this.blockState = 'Close';
    this.setBack = false;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.data.page.block, event.previousIndex, event.currentIndex);
  }

  pageStateToggle() {
    this.pageState = this.pageState == 'Open' ? 'Close' : 'Open';
    this.setBack = true;
  }
  closePanel() {
    this.goBack();
  }
  openBlock() {
    this.blockState = 'Open';
    this.setBack = true;
  }
}
