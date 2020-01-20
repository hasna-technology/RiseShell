import { Component, OnInit, Input } from '@angular/core';
import { trigger, animate, state, style, transition } from '@angular/animations';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';

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
  @Input() admin;

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

  drop_down = ["Duplicate","Delete"];
  
  pagepropertyState;

  ngOnInit() {
    this.propertyState = 'Open';
  }

  public openItem(i){
    this.adminPanelState = 'Open';
    this.goBack();
    this.gotoSetting(this.selectedPage.page.block[i]);
  }

  gotoSetting(item) {
    this.currentState = 'Open';
    this.selectedBlock = item;
    this.setBack = true;
    var index = this.selectedPage.page.block.indexOf(item);
    console.log(index);
    document.getElementById("item_" + index).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
  }
  goBack() {
    this.propertyState = 'Open';
    this.currentState = 'Close';
    this.pageState = 'Close';
    this.blockState = 'Close';
    this.settingState = 'Close';
    this.pagepropertyState = 'Close';
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


  showpagepropertyState(item){
    this.selectedBlock = item;
    this.goBack();
    this.setBack = true;
    this.pagepropertyState = 'Open';
  }

  closePanel(event) {
    this.selectedTab = 1;
    console.log(event);
    this.goBack();
    if(event == "block"){
      //this.settingState = 'Open';
      this.setBack = true;
      this.gotoSetting(this.selectedPage.page.block[this.selectedPage.page.block.length - 1])
    }else{
    }
  }

  openBlock() {
    this.blockState = 'Open';
    this.setBack = true;
  }
  
  
  dropDownClick(event){
    if (event.name == "duplicate") {
      console.log(this.selectedPage.page);
      var new_obj = JSON.parse(JSON.stringify(this.selectedPage.page.block[event.index]));
      this.selectedPage.page.block.splice(event.index, 0, new_obj);
    } else if (event.name == "delete") {
      this.selectedPage.page.block.splice(event.index, 1);
    }
  }

 
}
