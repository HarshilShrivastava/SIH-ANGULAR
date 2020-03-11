import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { University } from '../shared/university.model';
@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit {
  university: University;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  constructor(private quizService: QuizService , private router: Router) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }
    this.university = {
      Name: '',
      Address: '',
      Website: '',
      Conteact_no: null,
      Type: '',
      University: '',
      AICTE_college_code: null,
      Email: ''
    };
  }

  OnSubmit(form: NgForm) {
    if (localStorage.getItem('token')) {
      this.quizService.createuniView(form.value)
      .subscribe(
        (data: any) => {
          console.log(data);
          this.router.navigate(['./quiz']);
        },
        err => {
          console.log(err.message);
        }
      );
    } else {
      this.router.navigate(['/signup']);
    }
  }
}
