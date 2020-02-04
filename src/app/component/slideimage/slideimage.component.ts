import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, style, animate, keyframes, sequence, state } from '@angular/animations';

@Component({
  selector: 'app-slideimage',
  templateUrl: './slideimage.component.html',
  styleUrls: ['./slideimage.component.scss'],
  animations: [
    trigger('flyinout', [
      /*transition(':enter', [
        style({transform:'translateX(-100%)',opacity: 1 }),  
        animate('0.5s')
      ]),
      transition(':leave', [
        animate('0.5s', style({transform:'translateX(100%)',opacity: 1 }))
      ]),
    ])*/
      state('next', style({ transform: 'translateX(0)' })),
      state('previous', style({ transform: 'translateX(0)' })),
      state('next_out', style({ transform: 'translateX(0)' })),
      transition('*=>previous', [
        style({
          transform: 'translateX(100%)',

        }),
        sequence([
          animate(
            '0.5s',
            keyframes([
              style({ transform: 'translateX(0%)', opacity: 1 }),

            ])
          )
        ])
      ]),
      transition('*=>next_out', [
        style({
          transform: 'translateX(0%)',

        }),
        sequence([
          animate(
            '0.5s',
            keyframes([
              style({ transform: 'translateX(100%)', opacity: 0 }),
              //style({ transform: 'translateX(100%)', opacity: 0 }),

            ])
          )
        ])
      ]),
      transition('*=>next', [
        style({
          transform: 'translateX(-100%)',
          opacity: 0
        }),
        sequence([
          animate(
            '0.5s',
            keyframes([
              style({ transform: 'translateX(0%)', opacity: 1 }),
              //style({ transform: 'translateX(100%)', opacity: 0 }),

            ])
          )
        ])
      ])
    ])



  ]



})
export class SlideimageComponent implements OnInit {
  @Input() value;
  showDiv: boolean = true;
  isshow = false;
  data_no: any;
  data: any;
  isnext = true;
  isprev = true;
  isplus = true;
  changestate: any;
  currentstate;
  isdata = true;
  isvisible = false;
  isround = true;
  data_no_circle: any;

  constructor() { }

  ngOnInit() {

    this.show();


  }
  show_data(i) {
    this.data_no = i;
    
   
    this.showDiv = false;
    this.isplus = false;
    this.isround = false;
    //this.currentstate = 'next_out';
    setTimeout(() => {
      this.data = this.value.content.data[i];
      //this.currentstate = 'next'
      this.isplus = true;
      this.showDiv = true;
      this.isround = true;

      //   console.log(this.data_no)
    }, 550)

  }


  show() {
    this.show_data(0)
    this.isprev = false
  }


  next() {
    this.currentstate = 'next'

    console.log(this.showDiv)
    this.isprev = true
    this.show_data(this.data_no + 1)
    if (this.data_no == this.value.content.data.length - 1) {
      this.isnext = false;

    }
  }
  prev() {
    this.currentstate = 'previous'
    //this.showdiv=this.showdiv ? false : true;
    this.isnext = true;
    this.show_data(this.data_no - 1)
    if (this.data_no == 0) {
      this.isprev = false;

    }
  }

  visible() {
    this.isdata = false;
    this.isvisible = true;
  }
  close() {
    this.isdata = true;
    this.isvisible = false;
  }


  tab(data_no, i) {

    if (this.data_no > data_no) {
      this.currentstate = 'previous';
    } else {
      this.currentstate = 'next';
    }
    this.show_data(data_no);

    if (this.data_no == 0) {
      this.isprev = false
    }
    else {
      this.isprev = true
    }
    if (this.data_no == this.value.content.data.length - 1) {
      this.isnext = false
    }
    else {
      this.isnext = true
    }

    console.log(this.data_no)
  }

}
