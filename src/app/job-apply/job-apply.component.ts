import { Component, OnInit } from '@angular/core';
import { Job } from '../shared/job.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizService } from '../shared/quiz.service';
import { JobApply } from '../shared/jobapply.model';


@Component({
  selector: 'app-job-apply',
  templateUrl: './job-apply.component.html',
  styleUrls: ['./job-apply.component.css']
})


export class JobApplyComponent implements OnInit {
   apply: JobApply;
   constructor(private quizService: QuizService, private router: Router) { }
   ngOnInit() {
     this.resetForm();
   }
   resetForm(form?: NgForm) {
     if (form != null) {
       form.reset();
     }
     this.apply = {
       proposal: '',
     };
   }

   OnSubmit(form: NgForm) {
     this.quizService.jobapply(form.value).subscribe(
       (res: any) => {
         console.log(res);
         this.resetForm();
         alert (res.message);
         this.router.navigate(['/jobsearch']);
       },
       err => {
         console.log(err.message);
       }
     );
   }
 }
