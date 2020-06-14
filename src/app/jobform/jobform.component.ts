import { Component, OnInit } from '@angular/core';
import { Job } from '../shared/job.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizService } from '../shared/quiz.service';


@Component({
  selector: 'app-jobform',
  templateUrl: './jobform.component.html',
  styleUrls: ['./jobform.component.less']
})
export class JobformComponent implements OnInit {
  job: Job;
  constructor(private quizService: QuizService, private router: Router) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }
    this.job = {
      job_title: '',
      Job_Descreption: '',
      Level: null,
      Minimum_experience: null,
      prefered_city: '',
      fields: null,
      id: this.job.id
    };
  }

  OnSubmit(form: NgForm) {
    this.quizService.jobview(form.value).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/jobview']);
      },
      err => {
        console.log(err.message);
      }
    );
  }
}

