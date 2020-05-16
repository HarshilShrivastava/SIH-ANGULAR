import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ErrorDialogComponent } from '../shared/error-dialog/error-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // tslint:disable-next-line: no-inferrable-types
  isLoginError: boolean = false;
  userpattern = '^[a-z0-9_-]{3,15}$';

  constructor(private quizService: QuizService, private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
  }


  OnSubmit(username, password) {
    this.quizService.userLogin(username, password).subscribe((data: any) => {
     // localStorage.setItem('token', data.data.token);
      console.log(data);
      if (data.status === 200 ) {
        localStorage.setItem('token' , data.token );
        localStorage.setItem('Is_Organization' , data.Is_Organization );
        localStorage.setItem('Is_Candidate' , data.Is_Candidate );
        localStorage.setItem('Is_University' , data.Is_University );

        this.router.navigate(['/quiz']);
        if (data.Is_Candidate === true) {
          this.router.navigate(['/canview']);
        }
        if (data.Is_Organization === true) {
          this.router.navigate(['/orview']);
        }
        if (data.Is_University === true) {
          this.router.navigate(['/university']);
        }
        // this.toastr.success(data.message);
      } 
      else {
        let dialogRef = this.dialog.open(ErrorDialogComponent, {
          height: '150px',
          data: data.error_message
          
        });      
      }
    },
   (err: HttpErrorResponse) => {
     this.isLoginError = true;
   });
 }

}
