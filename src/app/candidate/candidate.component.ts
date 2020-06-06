import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { QuizService } from '../shared/quiz.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ErrorDialogComponent } from '../shared/error-dialog/error-dialog.component';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {
  user: User;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  constructor(
    private quizService: QuizService, 
    private router: Router,
    private dialog: MatDialog
    ) { }

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
      Is_University: false,
      Is_Candidate: true,
      Is_Organization: false
    };
  }

  onChange(event){
    this.user.Is_Candidate = true;
    console.log(event); 
  }

  onClick(event){
    this.user.Is_Candidate = true;
    console.log(event);
  }

  OnSubmit(form: NgForm) {
    this.quizService.Candidate = this.user.Is_Candidate;
    this.quizService.Organization = this.user.Is_Organization;
    this.quizService.University = this.user.Is_University;
      this.quizService.register(form.value).subscribe((data: any) => {
        if (data.response === 201) {
          console.log(data);
          this.quizService.userLogin(form.value.username, form.value.password).subscribe((data: any) => {
            console.log(data);
            localStorage.setItem("token", data.token);
            localStorage.setItem("Is_Candidate", JSON.stringify(true))
          })
          this.resetForm();
          let dialogRef = this.dialog.open(ErrorDialogComponent, {
            height: '200px',
            data: "You are successfully registered with us, please proceed to add a profile section"
          }); 
          this.router.navigate(['/create']);
          // alert('User Registration Succeeded');
        } 
        
        else if(data.response === 401){
          let dialogRef = this.dialog.open(ErrorDialogComponent, {
            height: '150px',
            data: "User with this name is already registered"
          });
        }
        
        else {
          console.log(data);  
          let dialogRef = this.dialog.open(ErrorDialogComponent, {
            height: '150px',
            data: data.error_message
          }); 
        }
      },
      err => {
        console.log(err.message);
        let dialogRef = this.dialog.open(ErrorDialogComponent, {
          height: '200px',
          data: err.message
        }); 
        }

      );
    }
  }
