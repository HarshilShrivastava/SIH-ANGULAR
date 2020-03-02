import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { QuizService } from '../shared/quiz.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: User;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  constructor(private quizService: QuizService, private router: Router) { }

  ngOnInit() {
    this.resetForm();
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
      this.quizService.register(form.value).subscribe((data: any) => {
        if (data.response === 201) {
          console.log(data);
          this.resetForm();
          this.router.navigate(['/login']);
          alert('User Registration Succeeded');
        } else {
          console.log(data);
          alert(data.error_message);
        }
      },
      err => {
        console.log(err.message);
        alert('User Registration not  Successful');
        }
      );
    }
  }
