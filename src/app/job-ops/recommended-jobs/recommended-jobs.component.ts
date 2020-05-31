import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/shared/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recommended-jobs',
  templateUrl: './recommended-jobs.component.html',
  styleUrls: ['./recommended-jobs.component.css']
})
export class RecommendedJobsComponent implements OnInit {

  data: any;
  isCandidate: boolean = false;

  constructor(
    private quizService: QuizService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getRecommendedJobs();
    if(localStorage.getItem("Is_Candidate"))
      this.isCandidate = true;
  }

  getRecommendedJobs(){
    this.quizService.getRecommendedJobs().subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }

  onSubmit(id) {
    localStorage.setItem('id', id);
    this.router.navigate(['/jobapply']);
  }

}
