import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { JobApplyDialogComponent } from '../dialogs/job-apply-dialog/job-apply-dialog.component';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';


@Component({
  selector: 'app-level2',
  templateUrl: './level2.component.html',
  styleUrls: ['./level2.component.css']
})
export class Level2Component implements OnInit {
  @Output() obj = new EventEmitter<any>();
  jobID: any;
  id: any= {};
  data: any = {};
  constructor(
    private quizService: QuizService,
    private dialog: MatDialog,
    private router : Router
    ) { }

  ngOnInit() {
    this.one();
  }

  one() {
    this.quizService.leveltwo()
    .subscribe((data) => {
      console.log(data);
      this.data = data;
    });
  }

    onSubmit(id) {
      localStorage.setItem('id', id);
      this.router.navigate(['/jobapply']);
    }

}

