import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  data: any =  {};
  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.viewJobs();
  }


  viewJobs() {
    this.quizService.getJobs().subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }
}
