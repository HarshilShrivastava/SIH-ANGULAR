import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.css']
})
export class MarketingComponent implements OnInit {
  data: any = {};
  tech = 0;
  mark = 0;
  marks = 0;
  constructor(private quizService: QuizService, private router: Router) { }

  ngOnInit() {
    this.MarkContacts();
  }
  MarkContacts() {
    this.quizService.MarkData().subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }
  Answer(Weightage, Domain) {
    console.log('Marks =' , Weightage );
    // console.log(qID);
    if (Domain === 1) {
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
    this.quizService.markResult().subscribe(
      res => {
        console.log(res);
        if (this.quizService.Totalmarks > 3) {
          this.router.navigate(['/level2']);
        } else {
          this.router.navigate(['/level1']);
        }
      },
      err => {
        console.log(err.message);
      }
    );
  }
}


