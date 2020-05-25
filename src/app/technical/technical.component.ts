import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { Router } from '@angular/router';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';

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
  rating = 0;

  sd_2 = {
    id: 0,
    weightage: 0,
    qid: 0
  };                                 //web-development
  sd_3 = {
    id: 0,
    weightage: 0,
    qid: 0
  };                                 //android-development
  sd_5 = {
    id: 0,
    weightage: 0,
    qid: 0
  };                                 //software-development
  sd_7 = {
    id: 0,
    weightage: 0,
    qid: 0
  };                                 //data_science
  sd_marks_arr = new Array();

  max_sd: any;
  max2_sd: any;
  max_sd_id: any;
  max2_sd_id: any;
  temp = 0;
  hold: any;

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
      console.log(this.result_arr);
      console.log(this.result_arr[index].SubDomain);


      if(this.result_arr[index].SubDomain === 2 && this.result_arr[index].id !== this.sd_2.qid){
        this.sd_2.weightage += this.result_arr[index].Weightage;
        this.sd_2.id = this.result_arr[index].SubDomain;
        this.sd_2.qid = this.result_arr[index].id;
      }
        console.log(this.sd_2);

      if(this.result_arr[index].SubDomain === 3 && this.result_arr[index].id !== this.sd_3.qid){
        this.sd_3.weightage += this.result_arr[index].Weightage;
        this.sd_3.id = this.result_arr[index].SubDomain;
        this.sd_3.qid = this.result_arr[index].id;
      }
        console.log(this.sd_3);

        if(this.result_arr[index].SubDomain === 5 && this.result_arr[index].id !== this.sd_5.qid){
          this.sd_5.weightage += this.result_arr[index].Weightage;
          this.sd_5.id = this.result_arr[index].SubDomain;
          this.sd_5.qid = this.result_arr[index].id;
        }
        console.log(this.sd_5);

        if(this.result_arr[index].SubDomain === 7 && this.result_arr[index].id !== this.sd_7.qid){
          this.sd_7.weightage += this.result_arr[index].Weightage;
          this.sd_7.id = this.result_arr[index].SubDomain;
          this.sd_7.qid = this.result_arr[index].id;
        }
        console.log(this.sd_7);

      
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

  getTopSubdomains(){
    this.sd_marks_arr.push(this.sd_2, this.sd_3, this.sd_5, this.sd_7)
    console.log("SD Array" + this.sd_marks_arr);

    this.max_sd = this.sd_marks_arr[0].weightage;
    this.max_sd_id = this.sd_marks_arr[0].id;
    this.max2_sd = this.sd_marks_arr[1].weightage;
    this.max2_sd_id = this.sd_marks_arr[1].id;

    if(this.max_sd < this.max2_sd){
      this.temp = this.max_sd;
      this.max_sd = this.max2_sd;
      this.max_sd_id = this.max2_sd_id;
      this.max2_sd = this.temp;
      this.max2_sd_id = this.max_sd_id;
    }

    for (let i = 2; i < this.sd_marks_arr.length; i++)
    {
        if (this.sd_marks_arr[i].weightage > this.max_sd)
        {
            this.max2_sd = this.max_sd;
            this.max2_sd_id = this.max_sd_id;

            this.max_sd = this.sd_marks_arr[i].weightage; 
            this.max_sd_id = this.sd_marks_arr[i].id;

            // this.hold = i;
        }
        
        else if (this.sd_marks_arr[i].weightage > this.max2_sd && this.sd_marks_arr[i].weightage != this.max_sd)
        {
            this.max2_sd = this.sd_marks_arr[i].weightage;
            this.max2_sd_id = this.sd_marks_arr[i].id;
            // if(i = 2)
            // console.log("Sub-domain 2nd maximumest is 2");
            // if(i = 3)
            // console.log("Sub-domain 2nd maximumest is 3");
            // if(i = 5)
            // console.log("Sub-domain 2nd maximumest is 5");
            // if(i = 7)
            // console.log("Sub-domain 2nd maximumest is 7");
        }

        // while(i === this.sd_marks_arr.length){
        //   console.log("Sub domain maximumest is" + this.hold);
          
          // if(i = 2)
          // console.log("Sub-domain maximumest is 2");
          // if(i = 3)
          // console.log("Sub-domain maximumest is 3");
          // if(i = 5)
          // console.log("Sub-domain maximumest is 5");
          // if(i = 7)
          // console.log("Sub-domain maximumest is 7");
      // }
    }

    console.log("Sub domain no. 1 = " + this.max_sd + " from sub domain no. " + this.max_sd_id);
    localStorage.setItem("SD_1", JSON.stringify(this.max_sd_id))
    localStorage.setItem("SD_2", JSON.stringify(this.max2_sd_id))
    
    console.log("Sub domain no. 2 = " + this.max2_sd + " from sub domain no. " + this.max2_sd_id);

  } 


  Answers() {
    this.getTopSubdomains();

    this.toRoundThree();

    this.result_arr.forEach(res=>{
      if(res.from_Domain == 1){
        this.techmarks += res.Weightage
      }
    })
    this.quizService.Technical = this.techmarks;
    // console.log("Marks_tech_lvl2" + this.techmarks);
    localStorage.setItem("Marks_tech_lvl2", JSON.stringify(this.techmarks))

    this.totalmarks = this.techmarks;
    console.log("Total marks: " + this.totalmarks);

    this.quizService.Totalmarks = this.totalmarks;

    let x = JSON.parse(localStorage.getItem("Marks_tech_lvl1"));
    let y = parseInt(x);
    let g = JSON.parse(localStorage.getItem("Marks_tech_lvl2"));
    let z = parseInt(g);
    this.rating = (y + z) / 15;
    console.log("Tech Rating: " + this.rating);
    
    // this.router.navigate(['/quiz-results']);
    
    // this.quizService.techResult().subscribe(
    //   res => {
    //     console.log(res);
    //     if (this.quizService.Totalmarks > 3) {
    //       this.router.navigate(['/level2']);
    //     } else {
    //       this.router.navigate(['/level1']);
    //     }
    //   },
    //   err => {
    //     console.log(err.message);
    //   }
    // );
  }

  toRoundThree() {
    // this.quizService.getSubDomainQuestions().subscribe(data => {
    //   console.log(data);
    // });

    this.router.navigate(['/round-three']);
  }
}
