import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { Router } from '@angular/router';
import { $ } from 'protractor';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  data: any = {};
   tech = 0;
   mark = 0;
   marks = 0;
   selectedEntry;
  constructor(private quizService: QuizService, private router: Router ) { }
  ngOnInit() {
    this.getContacts();
  }
  getContacts() {
    this.quizService.getData().subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }

  // tslint:disable-next-line: variable-name
  Answer(Weightage, from_Domain, id) {
    // console.log(Weightage);
    // console.log(qID);
    // this.selectedEntry = Weightage;
    // console.log(this.selectedEntry);
    // var selectedOption = $("input:radio[name=selected_answer]:checked").value()
    
      if (from_Domain === 1) {
        this.tech = this.tech + Weightage;
        this.quizService.Technical = this.tech;
        console.log(this.quizService.Technical, 'tech' , Weightage);
      } else {
        this.mark = this.mark + Weightage;
        this.quizService.Marketing = this.mark;
        console.log(this.quizService.Marketing, 'marketing' , Weightage);
      }
      this.marks = this.marks + Weightage ;
      this.quizService.Totalmarks = this.marks;
      console.log(this.quizService.Totalmarks, 'marks' , Weightage);
  }

  Answers() {
    this.quizService.getResult().subscribe(
      res => {
        console.log(res);
        if (this.quizService.Marketing > this.quizService.Technical) {
          this.router.navigate(['/mark']);
        } else {
          this.router.navigate(['/tech']);
        }
      },
      err => {
        console.log(err.message);
      }
    );
  }
}
