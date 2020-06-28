import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/shared/quiz.service';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';


@Component({
  selector: 'app-round-three',
  templateUrl: './round-three.component.html',
  styleUrls: ['./round-three.component.less']
})
export class RoundThreeComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  data: any = {};
  SD_1 : any;
  SD_2 : any;
  result_arr: any = [];
  SD_1_marks = 0;
  SD_2_marks = 0;

  totalAnswered = 0;



  constructor(
    private quizService: QuizService,
    private route: ActivatedRoute,
    private router: Router,
    private _formBuilder: FormBuilder 
    ) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });

    this.getQuestions();
    this.SD_1 = Number(sessionStorage.getItem('SD_1'));
    this.SD_2 = Number(sessionStorage.getItem('SD_2'));
  }

  getQuestions(){
    this.quizService.getSubDomainQuestions().subscribe(data => {
      // console.log(data);
      this.data = data;
      this.data.data.forEach(function(element) {
        element.active = false;
      });
      console.log(this.data);
      
      // let g = this.route.snapshot.url;
      // console.log(g);
    });
  }

  Answer(Weightage, from_Domain, id, arr, index) {
    // this.result_arr.insert(index, arr);
    if(this.data.data[index].active === false)
      this.totalAnswered += 1;
    this.data.data[index].active = true;
    
      if(this.result_arr[index] == []){
        this.result_arr[index] = arr;
      }
      else{
        this.result_arr[index] = arr;
      }
      console.log(this.result_arr);
      // console.log(this.result_arr[index].SubDomain);


      // if(this.result_arr[index].SubDomain === 2 && this.result_arr[index].id !== this.sd_2.qid){
      //   this.sd_2.weightage += this.result_arr[index].Weightage;
      //   this.sd_2.id = this.result_arr[index].SubDomain;
      //   this.sd_2.qid = this.result_arr[index].id;
      // }
      //   console.log(this.sd_2);

      // if(this.result_arr[index].SubDomain === 3 && this.result_arr[index].id !== this.sd_3.qid){
      //   this.sd_3.weightage += this.result_arr[index].Weightage;
      //   this.sd_3.id = this.result_arr[index].SubDomain;
      //   this.sd_3.qid = this.result_arr[index].id;
      // }
      //   console.log(this.sd_3);

      //   if(this.result_arr[index].SubDomain === 5 && this.result_arr[index].id !== this.sd_5.qid){
      //     this.sd_5.weightage += this.result_arr[index].Weightage;
      //     this.sd_5.id = this.result_arr[index].SubDomain;
      //     this.sd_5.qid = this.result_arr[index].id;
      //   }
      //   console.log(this.sd_5);

      //   if(this.result_arr[index].SubDomain === 7 && this.result_arr[index].id !== this.sd_7.qid){
      //     this.sd_7.weightage += this.result_arr[index].Weightage;
      //     this.sd_7.id = this.result_arr[index].SubDomain;
      //     this.sd_7.qid = this.result_arr[index].id;
      //   }
      //   console.log(this.sd_7);

      
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

  // getTopSubdomains(){
  //   this.sd_marks_arr.push(this.sd_2, this.sd_3, this.sd_5, this.sd_7)
  //   console.log("SD Array" + this.sd_marks_arr);

  //   this.max_sd = this.sd_marks_arr[0].weightage;
  //   this.max_sd_id = this.sd_marks_arr[0].id;
  //   this.max2_sd = this.sd_marks_arr[1].weightage;
  //   this.max2_sd_id = this.sd_marks_arr[1].id;

  //   if(this.max_sd < this.max2_sd){
  //     this.temp = this.max_sd;
  //     this.max_sd = this.max2_sd;
  //     this.max_sd_id = this.max2_sd_id;
  //     this.max2_sd = this.temp;
  //     this.max2_sd_id = this.max_sd_id;
  //   }

  //   for (let i = 2; i < this.sd_marks_arr.length; i++)
  //   {
  //       if (this.sd_marks_arr[i].weightage > this.max_sd)
  //       {
  //           this.max2_sd = this.max_sd;
  //           this.max2_sd_id = this.max_sd_id;

  //           this.max_sd = this.sd_marks_arr[i].weightage; 
  //           this.max_sd_id = this.sd_marks_arr[i].id;

  //           // this.hold = i;
  //       }
        
  //       else if (this.sd_marks_arr[i].weightage > this.max2_sd && this.sd_marks_arr[i].weightage != this.max_sd)
  //       {
  //           this.max2_sd = this.sd_marks_arr[i].weightage;
  //           this.max2_sd_id = this.sd_marks_arr[i].id;
  //           // if(i = 2)
  //           // console.log("Sub-domain 2nd maximumest is 2");
  //           // if(i = 3)
  //           // console.log("Sub-domain 2nd maximumest is 3");
  //           // if(i = 5)
  //           // console.log("Sub-domain 2nd maximumest is 5");
  //           // if(i = 7)
  //           // console.log("Sub-domain 2nd maximumest is 7");
  //       }

  //       // while(i === this.sd_marks_arr.length){
  //       //   console.log("Sub domain maximumest is" + this.hold);
          
  //         // if(i = 2)
  //         // console.log("Sub-domain maximumest is 2");
  //         // if(i = 3)
  //         // console.log("Sub-domain maximumest is 3");
  //         // if(i = 5)
  //         // console.log("Sub-domain maximumest is 5");
  //         // if(i = 7)
  //         // console.log("Sub-domain maximumest is 7");
  //     // }
  //   }

  //   console.log("Sub domain no. 1 = " + this.max_sd + " from sub domain no. " + this.max_sd_id);
  //   sessionStorage.setItem("SD_1", JSON.stringify(this.max_sd_id))
  //   sessionStorage.setItem("SD_2", JSON.stringify(this.max2_sd_id))
    
  //   console.log("Sub domain no. 2 = " + this.max2_sd + " from sub domain no. " + this.max2_sd_id);

  // } 


  Answers() {
    // this.getTopSubdomains();


    this.result_arr.forEach(res=>{
      if(res.SubDomain === this.SD_1){
        this.SD_1_marks += res.Weightage
      }
      else
      this.SD_2_marks += res.Weightage
    })
    // this.quizService.Technical = this.techmarks;
    // console.log("Marks_tech_lvl2" + this.techmarks);
    sessionStorage.setItem("Final_SD1_Marks", JSON.stringify(this.SD_1_marks))
    sessionStorage.setItem("Final_SD2_Marks", JSON.stringify(this.SD_2_marks))

    this.displayResults();


    // this.totalmarks = this.techmarks;
    // console.log("Total marks: " + this.totalmarks);

    // this.quizService.Totalmarks = this.totalmarks;

    // let x = JSON.parse(sessionStorage.getItem("Marks_tech_lvl1"));
    // let y = parseInt(x);
    // let g = JSON.parse(sessionStorage.getItem("Marks_tech_lvl2"));
    // let z = parseInt(g);
    // this.rating = (y + z) / 15;
    // console.log("Tech Rating: " + this.rating);
    
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

  displayResults() {
    // this.quizService.getSubDomainQuestions().subscribe(data => {
    //   console.log(data);
    // });

    this.router.navigate(['/quiz-results']);
  }

}
