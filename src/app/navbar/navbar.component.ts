import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  SignOut() {
    this.router.navigate(['/register']);

  }
  Logout() {
    localStorage.removeItem('token');
    console.log('You Are Logged Out');
    this.router.navigate(['/quiz']);
  }
}
