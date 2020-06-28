import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { Router } from '@angular/router';
import { $ } from 'protractor';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ErrorDialogComponent } from '../shared/error-dialog/error-dialog.component';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.less']
})
export class QuizComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  data: any = {};
  id_obj: any = {
    "id": "999",
    "weight": "69"
  };
  tech = 0;
  mark = 0;
  marks = 0;
  selectedEntry;
  result_arr: any = [];
  sum = 0;
  check: boolean;
  techmarks = 0;
  marketmarks = 0;
  totalmarks = 0;
  totalAnswered = 0;

  constructor(
    private quizService: QuizService, 
    private router: Router, 
    private dialog: MatDialog, 
    private _formBuilder: FormBuilder 
    ) { }
  ngOnInit() {

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.getContacts();


  //   this.firstFormGroup.patchValue({
  //     firstCtrl: 0
  //  });



  }

  getContacts() {
    this.quizService.getData().subscribe(data => {
      console.log(data);
      this.data = data;
      this.data.Question_list.forEach(function(element) {
        element.active = false;
      });
      this.data.Question_list.forEach(res =>{
        this.result_arr.push([])
      })
      
    });

  }

  // tslint:disable-next-line: variable-name
  Answer(Weightage, from_Domain, id, arr, index) {
    // this.result_arr.insert(index, arr);
    if(this.data.Question_list[index].active === false)
      this.totalAnswered += 1;
    this.data.Question_list[index].active = true;
    if(this.result_arr[index] === []){
      this.result_arr[index] = arr;
    }
    else{
      this.result_arr[index] = arr;
    }
    
    console.log(this.result_arr[index]);
    

    
    // this.result_arr.forEach(res=>{
    //   if(res.from_Domain == 1){
    //     this.sum += res.Weightage
    //   }
    // })
    // console.log(this.sum);
    
    // console.log(Weightage);
    // console.log(qID);
    // this.selectedEntry = Weightage;
    // console.log(this.selectedEntry);
    // var selectedOption = $("input:radio[name=selected_answer]:checked").value()
    // this.id_obj.id = id;
    // this.id_obj.weight = Weightage;

      // if (from_Domain === 1) {
      //   this.tech = this.tech + Weightage;
      //   this.quizService.Technical = this.tech;
      //   // console.log(this.quizService.Technical, 'tech' , Weightage);
      // } else {
      //   this.mark = this.mark + Weightage;
      //   this.quizService.Marketing = this.mark;
      //   // console.log(this.quizService.Marketing, 'marketing' , Weightage);
      // }
      // this.marks = this.marks + Weightage ;
      // this.quizService.Totalmarks = this.marks;
      // console.log(this.quizService.Totalmarks, 'marks' , Weightage);
  }

  // onChange(weightage, iden, domain){
  //   if(domain === 1){
  //     if(this.id_obj.id === iden){
  //       this.tech = this.tech - weightage;
  //     }
  //     else{
  //       this.id_obj.id = iden;
  //       this.tech = this.tech + weightage
  //     }
  //   }
  //   else if(domain === 2){
  //     if(this.id_obj.id === iden){
  //       this.mark = this.mark - weightage;
  //     }
  //     else{
  //       this.id_obj.id = iden;
  //       this.mark = this.mark + weightage
  //     }
  //   }
  // }

  Answers() {
    
    this.result_arr.forEach(res=>{
      if(res.from_Domain == 1){
        this.techmarks += res.Weightage
      }
    })
    this.quizService.Technical = this.techmarks;
    console.log("Marks_tech_lvl1 = " + this.techmarks);
    sessionStorage.setItem("Marks_tech_lvl1", JSON.stringify(this.techmarks))


    this.result_arr.forEach(res=>{
      if(res.from_Domain == 2){
        this.marketmarks += res.Weightage
      }
    })
    this.quizService.Marketing = this.marketmarks;
    console.log("Marketing = " + this.marketmarks);
    sessionStorage.setItem("Marks_marketing_lvl1", JSON.stringify(this.marketmarks))


    this.totalmarks = this.techmarks + this.marketmarks;
    this.quizService.Totalmarks = this.totalmarks
    console.log("Total marks: " + this.totalmarks);
    

    this.quizService.getResult().subscribe(
      res => {
        console.log(res);
        if (this.quizService.Marketing > this.quizService.Technical) {
          this.router.navigate(['/mark']);
        } else {
          this.router.navigate(['/tech']);
        }
      },
      err => {
        console.log(err.message);
        let dialogRef = this.dialog.open(ErrorDialogComponent, {
          height: '150px',
          data: err.message
          
        });     
      }
    );
  }
}
