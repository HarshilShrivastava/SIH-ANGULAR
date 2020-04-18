import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orview',
  templateUrl: './orview.component.html',
  styleUrls: ['./orview.component.css']
})
export class OrviewComponent implements OnInit {
  data: any = {};
  constructor( private quizService: QuizService, private router: Router) { }

  ngOnInit() {
    this.read();
  }
  read() {
    if (localStorage.getItem('Is_Organization') === 'true') {

    this.quizService.orView().subscribe((data: any) => {
      if ( data.status === 200) {
      console.log(data);
      this.data = data;
      } else {
        this.router.navigate(['/organ']);
      }
    });
  }
  }
}
