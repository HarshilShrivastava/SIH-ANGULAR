import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private apiUrl = 'http://harshraj.pythonanywhere.com/user/api/get-question/?format=json';
  qns: any[];
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
    return this.http.post('http://harshraj.pythonanywhere.com/user/put-general-marks/' , body, {headers: reqheaders});
  }

  TechData() {
    return this.http.get('http://harshraj.pythonanywhere.com/user/api/get-domain-question/?Domain=1');
  }
  MarkData() {
    return this.http.get('http://harshraj.pythonanywhere.com/user/api/get-domain-question/?Domain=2');
  }

}

