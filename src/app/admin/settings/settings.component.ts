import { Component, OnInit, Input } from '@angular/core';
import { MainService } from 'src/app/service/main.service';

@Component({
  selector: 'admin-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./../admin.scss']
})
export class SettingsComponent implements OnInit {

  @Input() data;

  constructor(public service: MainService) {
    console.log("From admin settings ", this.service);
   }

  ngOnInit() {
  }
  changeTitle(){
    
    this.service.setCourseTitle(this.data.settings.title);
  }
}
