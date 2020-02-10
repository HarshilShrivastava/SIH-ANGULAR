import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // tslint:disable-next-line: no-inferrable-types
  isLoginError: boolean = false;
  constructor(private quizService: QuizService, private router: Router) { }

  ngOnInit() {
  }


  OnSubmit(username, password) {
    this.quizService.userLogin(username, password).subscribe((data: any) => {
     // localStorage.setItem('token', data.data.token);
      console.log(data);
      if (data.status === 200 ) {
        localStorage.setItem('token' , data.token );
        this.router.navigate(['/quiz']);
        // this.toastr.success(data.message);
      } else {
        alert(data.error_message);
      }
   },
   (err: HttpErrorResponse) => {
     this.isLoginError = true;
   });
 }

}
