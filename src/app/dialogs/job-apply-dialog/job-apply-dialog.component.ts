import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { QuizService } from 'src/app/shared/quiz.service';


@Component({
  selector: 'app-job-apply-dialog',
  templateUrl: './job-apply-dialog.component.html',
  styleUrls: ['./job-apply-dialog.component.less']
})
export class JobApplyDialogComponent implements OnInit {
  @ViewChild("proposal", null) proposal: any;

  constructor(
    public dialogRef: MatDialogRef<JobApplyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private quizservice: QuizService,

  ) 
  { }

  ngOnInit() {
  }

  onInput(event){
    this.proposal = event.target.value;
  }

  onSubmit(){
    let params = {
      "id": this.data.id,
      "proposal": this.proposal
    };
    this.quizservice.jobapply(params)
    .subscribe(data => {
      console.log(data);
      console.log("Applied successfully");
      error => {
        console.error(error);
        this.dialogRef.close();
      }
    })
  }

}
