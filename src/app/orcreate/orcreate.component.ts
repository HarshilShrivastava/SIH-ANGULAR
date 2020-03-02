import { Component, OnInit } from '@angular/core';
import { Organ } from '../shared/organ.model';
import { QuizService } from '../shared/quiz.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orcreate',
  templateUrl: './orcreate.component.html',
  styleUrls: ['./orcreate.component.css']
})
export class OrcreateComponent implements OnInit {
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
    this.quizService.createView(form.value)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['./orview']);
      },
      err => {
        console.log(err.message);
      }
    );
  }
}
