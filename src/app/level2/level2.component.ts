import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';

@Component({
  selector: 'app-level2',
  templateUrl: './level2.component.html',
  styleUrls: ['./level2.component.css']
})
export class Level2Component implements OnInit {
  data: any = {};
  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.one();
  }
  one() {
    this.quizService.leveltwo().subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }
}

