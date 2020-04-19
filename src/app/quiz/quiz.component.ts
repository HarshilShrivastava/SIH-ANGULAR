import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { Router } from '@angular/router';
import { $ } from 'protractor';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
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

  constructor(private quizService: QuizService, private router: Router ) { }
  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.quizService.getData().subscribe(data => {
      console.log(data);
      this.data = data;
      this.data.Question_list.forEach(res =>{
        this.result_arr.push([])
      })

    });
  }

  // tslint:disable-next-line: variable-name
  Answer(Weightage, from_Domain, id, arr, index) {
    // this.result_arr.insert(index, arr);
    if(this.result_arr[index] == []){
      this.result_arr[index] = arr;
    }
    else{
      this.result_arr[index] = arr;
    }

    
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
    console.log("Technical" + this.techmarks);

    this.result_arr.forEach(res=>{
      if(res.from_Domain == 2){
        this.marketmarks += res.Weightage
      }
    })
    this.quizService.Marketing = this.marketmarks;
    console.log("Marketing" + this.marketmarks);

    this.totalmarks = this.techmarks + this.marketmarks;
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
      }
    );
  }
}
