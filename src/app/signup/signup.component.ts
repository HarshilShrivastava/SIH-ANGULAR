import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { QuizService } from '../shared/quiz.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less']
})
export class SignupComponent implements OnInit {
  user: User;
  emailPattern = '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$';
  uni: boolean;
  organ: boolean;
  candi: boolean;
  constructor(private quizService: QuizService, private router: Router) { }

  ngOnInit() {
    this.resetForm();
  }

  login() {
    this.router.navigate(['/login']);
  }

  value() {
    if ((document.getElementById('aradio')as HTMLInputElement).checked) {
      this.quizService.Candidate = false;
      this.quizService.Organization = false;
      this.quizService.University = true;
      console.log(this.quizService.University);
      
    }
    if ((document.getElementById('bradio')as HTMLInputElement).checked) {
      this.quizService.Candidate = true;
      this.quizService.Organization = false;
      this.quizService.University = false;
      console.log(this.quizService.Candidate);
      
    }
    if ((document.getElementById('cradio')as HTMLInputElement).checked) {
      this.quizService.Candidate = false;
      this.quizService.Organization = true;
      this.quizService.University = false;
      console.log(this.quizService.Organization);
      
    }
  }

  check() {
    // tslint:disable-next-line: max-line-length
    if ((document.getElementById('password') as HTMLInputElement).value !== (document.getElementById('confirm_password')as HTMLInputElement).value) {
      alert ('password and confirm password donot match');
    }
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }
    this.user = {
      username : '',
      email: '',
      password: '',
      confirm_password: '',
      Is_University: null,
      Is_Candidate: null,
      Is_Organization: null
    };
  }
  OnSubmit(form: NgForm) {
      this.check();
      this.quizService.register(form.value).subscribe((data: any) => {
        if (data.response === 201) {
          console.log(data);
          this.resetForm();
          if(this.quizService.Candidate === true){
            this.router.navigate(['/candidate']);
          }
          else if(this.quizService.University === true){
            this.router.navigate(['/university']);
          }
          else if(this.quizService.Organization === true){
            this.router.navigate(['/organ']);
          }
          // this.router.navigate(['/login']);
        } else {
          console.log(data);
          alert(data.data.username);
        }
      },
      err => {
        console.log(err.message);
        alert('User registration unsuccessful');
        }
      );
    }
  }
