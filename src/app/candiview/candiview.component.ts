import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candiview',
  templateUrl: './candiview.component.html',
  styleUrls: ['./candiview.component.css']
})
export class CandiviewComponent implements OnInit {
  data: any = {};
  constructor(private quizService: QuizService, private router: Router) { }

  ngOnInit() {
    this.view();
  }
  view() {
    if (localStorage.getItem('Is_Candidate') === 'true') {
    this.quizService.canView().subscribe((data: any) => {
      if (data.status === 200) {
      console.log(data);
      this.data = data;
    } else {
      this.router.navigate(['/create']);
      console.log(data);
    }
    });
  }
  }
 }
