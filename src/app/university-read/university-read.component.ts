import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';

@Component({
  selector: 'app-university-read',
  templateUrl: './university-read.component.html',
  styleUrls: ['./university-read.component.less']
})
export class UniversityReadComponent implements OnInit {
  data: any = {};
  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.read();
  }
  read() {
    if (localStorage.getItem('Is_University') === 'true') {
      this.quizService.uniView().subscribe((data: any ) => {
        console.log(data);
        this.data = data;
      });
    }
  }
}
