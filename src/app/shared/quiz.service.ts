import { Injectable } from '@angular/core';
import { User} from './user.model';
import { Organ} from './organ.model';

import { HttpClient , HttpHeaders, HttpResponse } from '@angular/common/http';
import { Job } from './job.model';
@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private apiUrl = 'https://harshraj.pythonanywhere.com/user/api/get-question/?format=json';
  qns: any[];
  Candidate: boolean;
  Organization: boolean;
  University: boolean;
  Totalmarks: number;
  Marketing: number;
  Technical: number;
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.apiUrl);
  }

  getResult() {
    const body = {
      Technology: this.Technical,
      Marketing: this.Marketing,
      Total : this.Totalmarks
    };
    const reqheaders = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post('https://harshraj.pythonanywhere.com/user/put-general-marks/' , body, {headers: reqheaders});
  }

  TechData() {
    return this.http.get('https://harshraj.pythonanywhere.com/user/api/get-domain-question/?Domain=1');
  }

  techResult() {
    const body = {
      Domain_final: this.Technical,
      Total : this.Totalmarks
    };
    const reqHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post('https://harshraj.pythonanywhere.com/user/put-domain-marks/' , body, {headers: reqHeaders});
  }

  MarkData() {
    return this.http.get('https://harshraj.pythonanywhere.com/user/api/get-domain-question/?Domain=2');
  }
  levelone() {
    return this.http.get('https://harshraj.pythonanywhere.com/organization/api/get-recomendedjob/?Level=1&fields=1');
  }

  leveltwo() {
    return this.http.get('https://harshraj.pythonanywhere.com/organization/api/get-recomendedjob/?Level=2&fields=1');
  }

  getJobs() {
    return this.http.get('https://harshraj.pythonanywhere.com/organization/api/get-recomendedjob/');
  }

  orView() {
    const Headers = new HttpHeaders()
      .set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.get('https://harshraj.pythonanywhere.com/organization/create/', {headers: Headers} );
  }
  canView() {
    const Headers = new HttpHeaders().set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.get('https://harshraj.pythonanywhere.com/candidate/create/', {headers: Headers} );
  }

  jobView() {
    const Headers = new HttpHeaders()
      .set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.get('https://harshraj.pythonanywhere.com/organization/api/get-job/', {headers: Headers} );
  }


  markResult() {
    const body = {
      Domain_final: this.Marketing,
      Total : this.Totalmarks
    };
    const reqheaders = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post('https://harshraj.pythonanywhere.com/user/put-domain-marks/' , body, {headers: reqheaders});
  }

  register(user: User) {
    const body: User = {
      username: user.username,
      email: user.email,
      password: user.password,
      confirm_password : user.confirm_password,
      Is_University: this.University,
      Is_Candidate: this.Candidate,
      Is_Organization: this.Organization

    };
    const reqHeader = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post('https://harshraj.pythonanywhere.com/account/registration/', body, {headers : reqHeader});
  }


  userLogin(username, password) {
    const data = 'username=' + username + '&password=' + password + '&grant_type=password';
    const reqheaders = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    reqheaders.append('Authorization', 'Bearer');
    return this.http.post('https://harshraj.pythonanywhere.com/account/login/', data , { headers: reqheaders });
  }

  postFile(Name: string, Address: string ,  fileToUpload: File) {
    const formData: FormData = new FormData();
    formData.append('Resume', fileToUpload, fileToUpload.name);
    formData.append('Name', Name);
    formData.append('Address', Address);
    const Headers = new HttpHeaders().set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.post('https://harshraj.pythonanywhere.com/candidate/create/', formData, {headers: Headers});
  }


  createView(organ: Organ) {
    const info: Organ = {
      Name: organ.Name,
      Address: organ.Address,
      Email: organ.Email,
      City: organ.City,
      State: organ.State,
      Registration_no: organ.Registration_no,
      website: organ.website
    };
    const Headers = new HttpHeaders({'Content-Type': 'application/json'})
      .set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.post('https://harshraj.pythonanywhere.com/organization/create/', info, {headers: Headers});
  }

  jobview(job: Job) {
    const data: Job = {
      job_title: job.job_title,
      Job_Descreption: job.Job_Descreption,
      Level: job.Level,
      Minimum_experience: job.Minimum_experience,
      prefered_city: job.prefered_city,
      fields: job.fields
    };
    const Headers = new HttpHeaders({'Content-Type': 'application/json'})
    .set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.post('https://harshraj.pythonanywhere.com/organization/api/get-job/', data, {headers: Headers});
  }



}

