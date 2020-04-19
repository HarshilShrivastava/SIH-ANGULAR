import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from "../../../src/app/shared/user.model"

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    public user: User
    ) { }

  isLoggedIn:boolean;
  isOrganization = localStorage.getItem("Is_Organization");
  isCandidate = localStorage.getItem("Is_Candidate");

  ngOnInit() {

  }

  checkIfOrganization(){
    if(localStorage.getItem("Is_Organization") != null)
      return true;
    else
      return false;
  }

  checkIfCandidate(){
    if(localStorage.getItem("Is_Candidate") != null)
      return true;
    else
      return false;
  }

  checkifLoggedIn(){
  if(localStorage.getItem('token') != null){
    this.isLoggedIn=true;
    return true;
  }
  else 
  // this.router.navigate(["/login"])
    return false;
  }

  // goToProfile(){
  //   if(this.isCandidate)
  //   {
  //     this.router.navigate(['/canview']);
  //   }
  //   else if(this.isOrganization)
  //   {
  //     this.router.navigate(['/orview']);
  //   }
  //   else
  //     alert("Unsuccessful!")
  // }

  SignOut() {
    this.router.navigate(['/register']);

  }
  Logout() {
    this.isLoggedIn = false;
    localStorage.removeItem('token');
    localStorage.removeItem('Is_University');
    localStorage.removeItem('Is_Candidate');
    localStorage.removeItem('Is_Organization');

    console.log('You Are Logged Out');
    this.router.navigate(['/login']);
  }
}
