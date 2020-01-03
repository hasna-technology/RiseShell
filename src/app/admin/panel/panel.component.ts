import { Component, OnInit, Input } from '@angular/core';
import { trigger, animate, state, style, transition } from '@angular/animations';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'admin-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
  animations: [
    trigger('changeState', [
      state('Open', style({ transform: 'translateX(10px)' })),
      state('Close', style({ transform: 'translateX(450px)' })),
      transition('*=>Open', animate('500ms ease-out')),
      transition('*=>Close', animate('500ms ease-in'))
    ])
  ]
})
export class PanelComponent implements OnInit {

  @Input() data;

  pageState;
  currentState;
  selectedBlock;
  
  constructor() { }

  ngOnInit() {
  }

  gotoSetting(item) {
    this.currentState = 'Open';
    this.selectedBlock = item
  }
  goBack()
  {
    this.currentState = 'Close';
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.data.page.block, event.previousIndex, event.currentIndex);
  }

  pageStateToggle()
  {
    this.pageState = this.pageState == 'Open' ? 'Close' : 'Open';
  }
}
