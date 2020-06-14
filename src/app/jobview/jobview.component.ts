import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';

@Component({
  selector: 'app-jobview',
  templateUrl: './jobview.component.html',
  styleUrls: ['./jobview.component.less']
})
export class JobviewComponent implements OnInit {
  data: any = {};
  status: number;
  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.read();
  }

  read() {
    this.quizService.jobView().subscribe(data => {
      // if(data.data.length === 0){
      //   // console.log(data.response);
        
      //   console.log('data is empty  ');
      // }
      // else 
      if(data){
        console.log(typeof data);
        this.data = data;
        // console.log(data.status);
        // console.log(data.data.length);
        console.log(data);
        
      }
    });
  }

}
