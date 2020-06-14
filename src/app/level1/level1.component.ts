import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';

@Component({
  selector: 'app-level1',
  templateUrl: './level1.component.html',
  styleUrls: ['./level1.component.less']
})
export class Level1Component implements OnInit {
  data: any = {};
  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.two();
  }
  two() {
    this.quizService.levelone().subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }

}
