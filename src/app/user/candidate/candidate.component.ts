import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/user.model';
import { QuizService } from '../../shared/quiz.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {
  user: User;
  emailPattern = '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$';
  constructor(private quizService: QuizService, private router: Router) { }

  ngOnInit() {
    this.resetForm();
  }
  check() {
    // tslint:disable-next-line: max-line-length
    if ((document.getElementById('password') as HTMLInputElement).value !== (document.getElementById('confirm_password')as HTMLInputElement).value) {
      alert ('password dont match');
    }
  }

  login() {
    this.router.navigate(['/login']);

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
      this.quizService.register(form.value)
      .subscribe((data: any) => {
        if (data.response === 201) {
          console.log(data);
          this.resetForm();
          this.router.navigate(['/login']);
        } else {
          console.log(data);
          alert(data.error_message);

        }
      },
      err => {
        console.log(err.message);
        alert('User Registration not Successful');
      }
      );
    }
  }
