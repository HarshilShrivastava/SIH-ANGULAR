import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';

@Component({
  selector: 'app-technical',
  templateUrl: './technical.component.html',
  styleUrls: ['./technical.component.css']
})
export class TechnicalComponent implements OnInit {
  data: any = {};
  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.TechContacts();
  }
  TechContacts() {
    this.quizService.TechData().subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }
}
