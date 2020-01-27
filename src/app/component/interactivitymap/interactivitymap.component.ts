import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-interactivitymap',
  templateUrl: './interactivitymap.component.html',
  styleUrls: ['./interactivitymap.component.scss']
})
export class InteractivitymapComponent implements OnInit {
@Input() value;
  constructor() { }

  ngOnInit() {
  }
  selectedtab;
  tab(n) {
    this.selectedtab = n;
  }
  close() {
    this.selectedtab = -1;

  }
}
