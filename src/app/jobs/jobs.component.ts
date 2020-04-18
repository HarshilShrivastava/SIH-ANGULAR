import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  data: any =  {};
  constructor(private quizService: QuizService,
    private router: Router
    ) { }

  ngOnInit() {
    this.viewJobs();
  }


  viewJobs() {
    this.quizService.getJobs().subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }

  onSubmit(id) {
    localStorage.setItem('id', id);
    this.router.navigate(['/jobapply']);
  }
}
