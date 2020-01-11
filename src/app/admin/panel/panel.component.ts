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
      state('Close', style({ transform: 'translateX(550px)' })),
      transition('*=>Open', animate('500ms ease-out')),
      transition('*=>Close', animate('500ms ease-in'))
    ])
  ]
})
export class PanelComponent implements OnInit {

  @Input() data;
  @Input() selectedPage;

  setBack;
  pageState;
  propertyState;
  currentState;
  settingState;
  selectedBlock;
  blockState;
  adminPanelState;
  selectedTab = 1;
  
  constructor() { }

  drop_down = [{
    name:"Duplicate",
    action:this.duplicateAction,
  },
  {
    name:"Delete",
    action:this.deleteAction,
  }]

  duplicateAction(i){
    console.log("duplicateAction", i )
    console.log(this.selectedPage)
    //var new_obj = JSON.parse(JSON.stringify(this.selectedPage.block[i]));
    //this.selectedPage.page.block.splice(i, 0, new_obj);
    

  }
  deleteAction(i){
    console.log("deleteAction", i )
    console.log(this)
  }

  ngOnInit() {
    this.propertyState = 'Open';
  }

  gotoSetting(item) {
    this.currentState = 'Open';
    this.selectedBlock = item;
    this.setBack = true;
  }
  goBack() {
    this.propertyState = 'Open';
    this.currentState = 'Close';
    this.pageState = 'Close';
    this.blockState = 'Close';
    this.settingState = 'Close';
    this.setBack = false;
  }
  showSettings(){
    this.goBack();
    this.propertyState = 'Close';
    this.settingState = 'Open';
  }
  showMenu() {
    this.goBack();
    this.propertyState = 'Close';
    this.pageState = 'Open';
    //this.setBack = true;
  }
  showProperty()
  {
    this.goBack();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.selectedPage.page.block, event.previousIndex, event.currentIndex);
  }

  closePanel() {
    this.selectedTab = 1;
    this.goBack();
  }

  openBlock() {
    this.blockState = 'Open';
    this.setBack = true;
  }

  doSomething(event){
    console.log(event);
    //this.admin.save();
  }
 
}
