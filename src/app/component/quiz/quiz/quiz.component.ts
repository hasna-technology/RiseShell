import { Component, OnInit, Input } from '@angular/core';
import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Router } from '@angular/router';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  public get router(): Router {
    return this._router;
  }
  public set router(value: Router) {
    this._router = value;
  }
  @Input() value;
  try=false;
  ishidden = true;
  isnext=true;
  intro = false;
  isReadonly = true;
  disabled=false;
  current_ques;
  current_ques_no;
  selected_ques_no: boolean;
  ques: any;
  selected_ques: any;
  item: any;
  result_page;
  percentage: number;
  



  constructor(private _router: Router) {
  
     
   }

  ngOnInit() {
  }

  show() {
    this.intro = true;
    this.show_question(0);
   // console.log(this.current_ques.question.selected)
    //console.log(this.value.quiz[0].question.selected)
  console.log(this.value.quiz[0].type)
  }

  show_choice(i) {
    this.selected_ques_no = i;
    this.selected_ques = this.value.quiz[i]

  }

  show_question(i) {
    this.current_ques_no = i;
    //console.log(this.value)
    this.current_ques = this.value.quiz[i]
    this.ishidden = true
  }

  check_multiple(user_choice, i) {
    user_choice.selected = !user_choice.selected;
    this.ishidden = true;
    this.current_ques.question.choices.forEach(choice => {
      if (choice.selected == true) {
        this.ishidden = false;
        this.isnext = true;
      }
    // console.log(choice.selected)
    });
   // console.log(this.current_ques_no)
   // console.log(this.current_no);
   //console.log(this.value.quiz[1].question.choices[i].selected)
  }

  check(i) {
    this.current_ques.selected = i;
    //console.log(this.current_ques.question[0].selected)
    this.ishidden = false;
    this.isnext = true;
   // console.log(this.current_ques_no)
   // console.log(this.current_no);
    //console.log( this.current_ques.selected)
  }


  marks: number = 0;

  submit() {
    //validate
    this.validate(this.current_ques);
    this.isnext=false;
    this.ishidden=true;
    this.disabled=true;
   
  }
  current_no=1;
  next(){
  
    this.current_ques_no++;
    if (this.current_ques_no < this.value.quiz.length) {
      this.current_no++;
      this.show_question(this.current_ques_no)
    } else {
      this.showresult();
      this.current_no =1;
    }
    this.isnext=true;
    this.disabled=false;
    this.ishidden=true;
  }
  showresult() {
    this.current_ques = undefined;
    this.result_page = true;
    
    this.percentage = this.marks /this.current_ques_no * 100;
   if(this.percentage >= 75){
    this.try=true;
   }
  }
  replay(){
    
console.log(this.percentage)
   this.marks=0;
   this.percentage=0;
    this.intro=false;
    this.result_page=false;

    for (let i = 0; i <= this.value.quiz.length; i++){

      if(this.value.quiz[i].type === 'single_choice')
      {
        this.value.quiz[i].question.selected =-1;
        //console.log(this.value.quiz[i].question.selected)
      }

      if(this.value.quiz[i].type === 'multiple_choice'){
        
        for(let j = 0; j <= this.value.quiz[i].question.choices.length; j++)
        {
        
          this.value.quiz[i].question.choices[j].selected = false;
          console.log(this.value.quiz[i].question.choices[j].selected)
        }
   
      }
     
    }

  }

  validate(item) {
    switch (item.type) {
      case 'single_choice':
        this.validateSingle();
        break;

      case 'multiple_choice':
        this.validateMultiple();
        break;

      default:
        break;
    }

  }
  validateSingle() {
    //console.log(this.current_ques.selected, this.current_ques.question.choices[this.current_ques.selected].correct);
    if (this.current_ques.question.choices[this.current_ques.selected].correct == "true") {
      this.marks++;
    }
  }

  validateMultiple() {
    var _correct = true;
    this.current_ques.question.choices.forEach(choice => {
      console.log(choice.content, choice.selected.toString(), choice.correct.toString())
      if (choice.selected.toString() == choice.correct.toString() && _correct == true) {

      } else {
        _correct = false;
      }
    });

    if (_correct == true) {
      this.marks++;
      console.log(this.marks)
    }
  }
  
  
}
