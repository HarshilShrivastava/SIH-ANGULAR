import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';

@Component({
  selector: 'app-orview',
  templateUrl: './orview.component.html',
  styleUrls: ['./orview.component.less']
})
export class OrviewComponent implements OnInit {
  data: any = {};
  constructor( private quizService : QuizService) { }

  ngOnInit() {
    this.read();
  }
  read() {
    if (localStorage.getItem('Is_Organization') === 'true') {

    this.quizService.orView().subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }
  }
}
