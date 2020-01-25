import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { MainService } from 'src/app/service/main.service';


@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TextComponent implements OnInit {

  @Input() value;

  constructor(private service: MainService) {
    this.admin = this.service.isAdmin();
  }

  admin;
  ngOnInit() {

  }

}
