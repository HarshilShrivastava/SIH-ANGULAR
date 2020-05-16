import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/shared/quiz.service';

@Component({
  selector: 'app-round-three',
  templateUrl: './round-three.component.html',
  styleUrls: ['./round-three.component.css']
})
export class RoundThreeComponent implements OnInit {

  data: any;

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions(){
    this.quizService.getSubDomainQuestions().subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }

}
