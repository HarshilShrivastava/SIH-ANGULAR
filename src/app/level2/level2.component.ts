import { Component, OnInit} from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-level2',
  templateUrl: './level2.component.html',
  styleUrls: ['./level2.component.css']
})
export class Level2Component implements OnInit {

  data: any = {};
  constructor( private quizService: QuizService, private router: Router) { }

  ngOnInit() {
    this.one();
  }

  one() {
    this.quizService.leveltwo()
    .subscribe((data: any) => {
      console.log(data);
      this.data = data;
    });
  }
  onSubmit(id) {
    localStorage.setItem('id', id);
    this.router.navigate(['/jobapply']);
  }



}

