import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-level1',
  templateUrl: './level1.component.html',
  styleUrls: ['./level1.component.css']
})
export class Level1Component implements OnInit {
  data: any = {};
  constructor(private quizService: QuizService, private router: Router) { }

  ngOnInit() {
    this.two();
  }
  two() {
    this.quizService.levelone().subscribe((data: any) => {
      console.log(data);
      this.data = data;
    });
  }
  onSubmit(id) {
    localStorage.setItem('id', id);
    this.router.navigate(['/jobapply']);
  }
}
