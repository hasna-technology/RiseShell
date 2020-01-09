import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab-image-text',
  templateUrl: './tab-image-text.component.html',
  styleUrls: ['./tab-image-text.component.scss']
})
export class TabImageTextComponent implements OnInit {
  @Input() value;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  selectedtab = 0;
  tab(n){
    this.selectedtab = n;
  }
}
