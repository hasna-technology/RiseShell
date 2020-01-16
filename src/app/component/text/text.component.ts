import { Component, OnInit, Input} from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {

  @Input() value;

  constructor() {
    this.admin = environment.admin;
  }

  admin;
  ngOnInit() {
    
  }

}
