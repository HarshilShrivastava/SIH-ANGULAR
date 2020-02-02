import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.css']
})
export class MarketingComponent implements OnInit {
  data: any = {};
  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.MarkContacts();
  }
  MarkContacts() {
    this.quizService.MarkData().subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }

}
