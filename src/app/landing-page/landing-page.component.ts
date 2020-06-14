import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.less']
})
export class LandingPageComponent implements OnInit {

  isLoggedIn: boolean = false;

  constructor() { }

  ngOnInit() {
    if(localStorage.getItem("token"))
      this.isLoggedIn  = true;
  }

}
