import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Organ } from '../shared/organ.model';

@Component({
  selector: 'app-orgcreate',
  templateUrl: './orgcreate.component.html',
  styleUrls: ['./orgcreate.component.less']
})
export class OrgcreateComponent implements OnInit {
  organ: Organ;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  constructor(private quizService: QuizService , private router: Router) { }

  ngOnInit() {
    this.resetForm();
  }


  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }
    this.organ = {
      Name: '',
      Address: '',
      Email: '',
      City: '',
      State: '',
      Registration_no: null,
      website: ''
    };
  }


  OnSubmit(form: NgForm) {
    if (localStorage.getItem('token')) {
      this.quizService.createView(form.value)
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
