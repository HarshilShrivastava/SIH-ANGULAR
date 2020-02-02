import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  data: any = {};
  constructor( private quizService: QuizService ) { }

  ngOnInit() {
  }
  Answers() {
    this.quizService.getResult().subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err.message);
      }
    );
  }

}
