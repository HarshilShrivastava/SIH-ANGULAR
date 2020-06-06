import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { QuizService } from 'src/app/shared/quiz.service';
import { MatDialog } from '@angular/material';
import { ErrorDialogComponent } from 'src/app/shared/error-dialog/error-dialog.component';

@Component({
  selector: 'app-quiz-results',
  templateUrl: './quiz-results.component.html',
  styleUrls: ['./quiz-results.component.css']
})
export class QuizResultsComponent implements OnInit {

  Marks_tech_lvl1: number;
  tech_lvl1: boolean = false;
  Marks_marketing_lvl1: number;
  marketing_lvl1: boolean = false;
  Marks_tech_lvl2: number;
  tech_lvl2: boolean = false;
  Marks_marketing_lvl2: number;
  marketing_lvl2: boolean = false;
  SD_1: number;
  sd_1: boolean = false;
  SD_2: number;
  sd_2: boolean = false;
  SD_1_marks: number;
  sd_1_marks: boolean = false;
  SD_2_marks: number;
  sd_2_marks: boolean = false;
  SD_1_name: string;
  sd_1_name: boolean = false;
  SD_2_name: string;
  sd_2_name: boolean = false;
  Final_SD1_Marks: number;
  final_sd1_marks: boolean = false;
  Final_SD2_Marks: number;
  final_sd2_marks: boolean = false;
  final_rating: number;
  display_rating: boolean = false;

  constructor(
    private router: Router,
    public userService: UserService,
    private quizService: QuizService,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    if(sessionStorage.getItem("Marks_tech_lvl1")){
      let a = JSON.parse(sessionStorage.getItem("Marks_tech_lvl1"));
      this.Marks_tech_lvl1 = parseInt(a);
      this.tech_lvl1 = true;
    }
    if(sessionStorage.getItem("Marks_marketing_lvl1")){
      let b = JSON.parse(sessionStorage.getItem("Marks_marketing_lvl1"));
      this.Marks_marketing_lvl1 = parseInt(b);
      this.marketing_lvl1 = true
    }
    if(sessionStorage.getItem("Marks_tech_lvl2")){
      let c = JSON.parse(sessionStorage.getItem("Marks_tech_lvl2"));
      this.Marks_tech_lvl2 = parseInt(c);
      this.tech_lvl2 = true;
    }
    if(sessionStorage.getItem("Marks_marketing_lvl2")){
      let d = JSON.parse(sessionStorage.getItem("Marks_marketing_lvl2"));
      this.Marks_marketing_lvl2 = parseInt(d);
      this.marketing_lvl2 = true
    }
    if(sessionStorage.getItem("SD_1")){
      let e = JSON.parse(sessionStorage.getItem("SD_1"));
      this.SD_1 = parseInt(e);
      this.sd_1 = true
    }
    if(sessionStorage.getItem("SD_2")){
      let f = JSON.parse(sessionStorage.getItem("SD_2"));
      this.SD_2 = parseInt(f);
      this.sd_2 = true
    }
    if(sessionStorage.getItem("SD1_name")){
      let g = sessionStorage.getItem("SD1_name");
      this.SD_1_name = g;
      this.sd_1_name = true;
    }
    if(sessionStorage.getItem("SD1_marks")){
      let h = JSON.parse(sessionStorage.getItem("SD1_marks"));
      this.SD_1_marks = parseInt(h);
      this.sd_1_marks = true
    }
    if(sessionStorage.getItem("SD2_name")){
      let i = sessionStorage.getItem("SD2_name");
      this.SD_2_name = i;
      this.sd_2_name = true;
    }
    if(sessionStorage.getItem("SD2_marks")){
      let j = JSON.parse(sessionStorage.getItem("SD2_marks"));
      this.SD_2_marks = parseInt(j)
    }
    if(sessionStorage.getItem("Final_SD1_Marks")){
      let k = JSON.parse(sessionStorage.getItem("Final_SD1_Marks"));
      this.Final_SD1_Marks = parseInt(k);
      this.final_sd1_marks = true
    }
    if(sessionStorage.getItem("Final_SD2_Marks")){
      let l = JSON.parse(sessionStorage.getItem("Final_SD2_Marks"));
      this.Final_SD2_Marks = parseInt(l);
      this.final_sd2_marks = true
    }
  }

  // ngOnDestroy(){
  //   sessionStorage.clear();
  // }

  OnClickRating(){
    this.final_rating = (this.Final_SD1_Marks + this.Final_SD2_Marks)/20 * 5;
    if(sessionStorage.getItem("Marks_tech_lvl2"))
      sessionStorage.setItem("Final_Tech_Rating", JSON.stringify(this.final_rating))
    if(sessionStorage.getItem("Marks_marketing_lvl2"))
      sessionStorage.setItem("Final_Marketing_Rating", JSON.stringify(this.final_rating))
    if(this.display_rating === false)
      this.display_rating = true;
    else if(this.display_rating === true)
      this.display_rating = false ;
  }

  OnClickViewJobs(){
    this.router.navigate(['/get-recommended-jobs'])
  }

  // OnPostMarks(){
  //   this.quizService.postAllMarks()
  // }

  OnPostRating(){
    if(this.userService.isLoggedIn() === false){
      let dialogRef = this.dialog.open(ErrorDialogComponent, {
        height: '150px',
        data: "Please login first to post rating to profile"
      });
    }
    else if(localStorage.getItem("token")){
      if(sessionStorage.getItem("Marks_tech_lvl2")){
        this.quizService.postTechRating()
        .subscribe((data: any) => {
          console.log(data);
          if(data.status === 200){
            let dialogRef = this.dialog.open(ErrorDialogComponent, {
              height: '150px',
              data: "Posted to profile successfully"
            });  
          }
          else {
            let dialogRef = this.dialog.open(ErrorDialogComponent, {
              height: '150px',
              data: data.message
            });  
          }
          
        })
      }
      else if(sessionStorage.getItem("Marks_marketing_lvl2")){
        this.quizService.postMarketingRating()
        .subscribe((data: any) => {
          console.log(data);
          if(data.status === 200){
            let dialogRef = this.dialog.open(ErrorDialogComponent, {
              height: '150px',
              data: "Posted to profile successfully!"
            });  
          }
          else {
            let dialogRef = this.dialog.open(ErrorDialogComponent, {
              height: '150px',
              data: "Failed to post rating"
            });  
          }
          
        })
      }
    }
    
    
  }

}
