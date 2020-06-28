import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructions-page',
  templateUrl: './instructions-page.component.html',
  styleUrls: ['./instructions-page.component.less']
})
export class InstructionsPageComponent implements OnInit {

  continue: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onClick(){
    if(this.continue === false)
      this.continue = true
    else if(this.continue === true)
      this.continue = false
  }

  // proceed(){
  //   this.router.navigate(['/quiz'])
  // }
}
