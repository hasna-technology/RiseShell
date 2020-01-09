import { Component, OnInit, Input } from '@angular/core';
import { MainService } from 'src/app/service/main.service';

@Component({
  selector: 'admin-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./../admin.scss']
})
export class SettingsComponent implements OnInit {

  @Input() data;

  constructor(private service: MainService) { }

  ngOnInit() {
  }

}
