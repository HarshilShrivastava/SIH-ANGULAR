import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  Marks_marketing_lvl2: 0;
  marketing_lvl2: boolean = false;
  SD_1: number;
  sd_1: boolean = false;
  SD_2: number;
  sd_2: boolean = false;
  SD_1_marks: number;
  sd_1_marks: boolean = false;
  SD_2_marks: number;
  sd_2_marks: boolean = false;
  Final_SD1_Marks: number;
  final_sd1_marks: boolean = false;
  Final_SD2_Marks: number;
  final_sd2_marks: boolean = false;
  final_rating: number;
  display_rating: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    if(localStorage.getItem("Marks_tech_lvl1")){
      let a = JSON.parse(localStorage.getItem("Marks_tech_lvl1"));
      this.Marks_tech_lvl1 = parseInt(a);
      this.tech_lvl1 = true;
    }
    if(localStorage.getItem("Marks_marketing_lvl1")){
      let b = JSON.parse(localStorage.getItem("Marks_marketing_lvl1"));
      this.Marks_marketing_lvl1 = parseInt(b);
      this.marketing_lvl1 = true
    }
    if(localStorage.getItem("Marks_tech_lvl2")){
      let c = JSON.parse(localStorage.getItem("Marks_tech_lvl2"));
      this.Marks_tech_lvl2 = parseInt(c);
      this.tech_lvl2 = true;
    }
    if(localStorage.getItem("Marks_marketing_lvl2")){
      let d = JSON.parse(localStorage.getItem("Marks_marketing_lvl2"));
      this.Marks_marketing_lvl1 = parseInt(d);
      this.marketing_lvl2 = true
    }
    if(localStorage.getItem("SD_1")){
      let e = JSON.parse(localStorage.getItem("SD_1"));
      this.SD_1 = parseInt(e);
      this.sd_1 = true
    }
    if(localStorage.getItem("SD_2")){
      let f = JSON.parse(localStorage.getItem("SD_2"));
      this.SD_2 = parseInt(f);
      this.sd_2 = true
    }
    if(localStorage.getItem("SD1_marks")){
      let g = JSON.parse(localStorage.getItem("SD1_marks"));
      this.SD_1_marks = parseInt(g);
      this.sd_1_marks = true
    }
    if(localStorage.getItem("SD2_marks")){
      let h = JSON.parse(localStorage.getItem("SD2_marks"));
      this.SD_2_marks = parseInt(h);
      this.sd_2_marks = true
    }
    if(localStorage.getItem("Final_SD1_Marks")){
      let i = JSON.parse(localStorage.getItem("Final_SD1_Marks"));
      this.Final_SD1_Marks = parseInt(i);
      this.final_sd1_marks = true
    }
    if(localStorage.getItem("Final_SD2_Marks")){
      let j = JSON.parse(localStorage.getItem("Final_SD2_Marks"));
      this.Final_SD2_Marks = parseInt(j);
      this.final_sd2_marks = true
    }

    

  }

  OnClickRating(){
    this.final_rating = (this.Final_SD1_Marks + this.Final_SD2_Marks)/20 * 5;
    this.display_rating = true;
  }

}
