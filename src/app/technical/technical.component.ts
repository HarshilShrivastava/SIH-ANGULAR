import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-technical',
  templateUrl: './technical.component.html',
  styleUrls: ['./technical.component.css']
})
export class TechnicalComponent implements OnInit {
  data: any = {};
  tech = 0;
  mark = 0;
  marks = 0;
  result_arr: any = [];
  techmarks = 0;
  totalmarks = 0;

  constructor(private quizService: QuizService , private router: Router) { }

  ngOnInit() {
    this.TechContacts();
  }
  TechContacts() {
    this.quizService.TechData().subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }
  Answer(Weightage, from_Domain, id, arr, index) {
    // this.result_arr.insert(index, arr);
      if(this.result_arr[index] == []){
        this.result_arr[index] = arr;
      }
      else{
        this.result_arr[index] = arr;
      }
    //  console.log('Marks =', Weightage , 'from domain', from_Domain);
    //  // console.log(qID);
    //  if (from_Domain === 1) {
    //     this.tech = this.tech + Weightage;
    //     this.quizService.Technical = this.tech;
    //     console.log(this.quizService.Technical, 'tech' , Weightage);
    //    } else {
    //    this.mark = this.mark + Weightage;
    //    this.quizService.Marketing = this.mark;
    //    console.log(this.quizService.Marketing, 'marketing' , Weightage);
    //    }
    //  this.marks = this.marks + Weightage ;
    //  this.quizService.Totalmarks = this.marks;
    //  console.log(this.quizService.Totalmarks, 'marks' , Weightage);
   }

  Answers() {
    this.result_arr.forEach(res=>{
      if(res.from_Domain == 1){
        this.techmarks += res.Weightage
      }
    })
    this.quizService.Technical = this.techmarks;
    console.log("Technical" + this.techmarks);

    this.totalmarks = this.techmarks;
    console.log("Total marks: " + this.totalmarks);

    this.quizService.Totalmarks = this.totalmarks;

    this.quizService.techResult().subscribe(
      res => {
        console.log(res);
        if (this.quizService.Totalmarks > 3) {
          this.router.navigate(['/level2']);
        } else {
          this.router.navigate(['/level1']);
        }
      },
      err => {
        console.log(err.message);
      }
    );
  }
}
