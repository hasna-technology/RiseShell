import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bullets',
  templateUrl: './bullets.component.html',
  styleUrls: ['./bullets.component.scss']
})
export class BulletsComponent implements OnInit {
@Input() value;
  constructor() { }

  ngOnInit() {
  }

}
