import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.scss'],
  animations: [
    trigger('expandableState', [
      transition(':enter', [
        style({ height: '0', opacity: 0 }),
        animate('500ms', style({ height: '*', opacity: 1 })),
      ]),
      transition(':leave', [
        style({ height: '*', opacity: 1 }),
        animate('500ms', style({ height: '0', opacity: 0 })),
      ]),
    ]) 
    ]
})
export class AccordianComponent implements OnInit {
  @Input() value;
  constructor(private myElement: ElementRef) { }

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
