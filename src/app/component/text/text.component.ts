import { Component, OnInit, Input} from '@angular/core';
import { environment } from 'src/environments/environment';
import { MainService } from 'src/app/service/main.service';


@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {

  @Input() value;

  constructor(private service:MainService) {
    this.admin = this.service.isAdmin();
  }

  admin;
  ngOnInit() {
    
  }

}
