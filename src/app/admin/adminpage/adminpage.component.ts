import { Component, OnInit } from '@angular/core';
import { trigger, animate, state, style, transition } from '@angular/animations';
import { MainService } from 'src/app/service/main.service';

@Component({
  selector: 'admin-page',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.scss']
})
export class AdminPageComponent implements OnInit {

  data;
  constructor(public service: MainService) { 
      this.data = service.getData();
  }

  ngOnInit() {
  }

}
