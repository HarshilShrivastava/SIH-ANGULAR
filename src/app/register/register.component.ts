import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { QuizService } from '../shared/quiz.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
  user: User;
  passwordPattern = '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}';
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  constructor(private quizService: QuizService , private router: Router) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }
    this.user = {
      username: '',
      email: '',
      password: '',
      confirm_password: '',
      Is_University: null,
      Is_Candidate: null,
      Is_Organization: null,
    };
  }
  OnSubmit(form: NgForm) {
    this.quizService.register(form.value)
    .subscribe((data: any) => {
      if (data.status === 201) {
        console.log(data);
        this.resetForm();
        this.router.navigate(['/login']);
        // this.toastr.success('User Registration Succeeded');
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

