import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';

@Component({
  selector: 'app-jobview',
  templateUrl: './jobview.component.html',
  styleUrls: ['./jobview.component.css']
})
export class JobviewComponent implements OnInit {
  data: any = {};
  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.read();
  }

  read() {
    this.quizService.jobView().subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }

}
