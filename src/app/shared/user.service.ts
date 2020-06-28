// import {Injectable} from "@angular/core";
// import {HttpClient, HttpResponse} from "@angular/common/http";
// import 'rxjs/add/operator/map';
// import {User} from "../shared/user.model"

// @Injectable()
// export class UserService {
//   constructor(private http: HttpClient) {}

//   getUser() {
//     return this.http.get('/api/user')
//   }
// }

import { Injectable } from '@angular/core';
import { User} from './user.model';
import { Organ} from './organ.model';

import { HttpClient , HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })

export class UserService{
    constructor(private http: HttpClient) { }

    isLoggedIn(){
        if(localStorage.getItem("token"))
            return true;
        else 
            return false;
    }

    isCandidate(){
        if(localStorage.getItem("token") && localStorage.getItem("Is_Candidate"))
            return true;
        else
            return false;
    }

    isOrganization(){
        if(localStorage.getItem("token") && localStorage.getItem("Is_Organization"))
            return true;
        else
            return false;
    }
}



