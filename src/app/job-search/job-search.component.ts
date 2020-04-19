import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { MatDialog } from '@angular/material';
import { JobApplyDialogComponent } from '../dialogs/job-apply-dialog/job-apply-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.css']
})
export class JobSearchComponent implements OnInit {

data: any = {};
jobID: any;
query: any;
result: any;

  constructor(
    private quizservice: QuizService,
    private dialog: MatDialog,
    private router: Router

  ) { }

  ngOnInit() {
    this.getListing();
  }

  getListing(){
    this.quizservice.getAllJobs()
    .subscribe((data) => {
      console.log(data);
      this.data = data;
      console.log(this.data, "My Data");
      
    });
  }

  getJobData(){
    let params = {};
    params["search"] = this.query;
    console.log("My Data", this.data);
    
    this.quizservice.getSearchedJob(params)
    .subscribe((res) => {
      console.log(res);
      this.result = res;
      this.render(this.result);
    })
  }

  applyFilter(filterValue: string) {
    this.query = filterValue.trim().toLowerCase();
    if(filterValue === ''){
      this.getListing();
    }
    else{
      this.getJobData();
    }
  }

  render(input){
    this.data = input;
  }

  clear(){
    this.query = "";
    this.getListing();

  }

  onSubmit(id) {
    localStorage.setItem('id', id);
    this.router.navigate(['/jobapply']);
  }

  
}
