import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-university-read',
  templateUrl: './university-read.component.html',
  styleUrls: ['./university-read.component.css']
})
export class UniversityReadComponent implements OnInit {
  data: any = {};
  constructor(private quizService: QuizService, private router: Router) { }

  ngOnInit() {
    this.read();
  }
  read() {
    if (localStorage.getItem('Is_University') === 'true') {
      this.quizService.uniView().subscribe((data: any ) => {
        if (data.status === 200) {
        console.log(data);
        this.data = data;
        } else {
          console.log(data);
          this.router.navigate(['/university']);
        }
      });
    }
  }
}
