import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/shared/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.component.html',
  styleUrls: ['./applicant-list.component.less']
})
export class ApplicantListComponent implements OnInit {

  data: any = {};

  constructor(
    private quizservice: QuizService,
    private router: Router

  ) { }

  ngOnInit() {
    this.getApplicants();
  }

  getApplicants(){
    this.quizservice.viewAppliedCandidateList()
    .subscribe((data) => {
      console.log(data);
      this.data = data;
      console.log(this.data, "My Data");  
    });
  }
}
