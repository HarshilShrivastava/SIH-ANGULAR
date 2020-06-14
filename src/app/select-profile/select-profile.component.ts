import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-select-profile',
  templateUrl: './select-profile.component.html',
  styleUrls: ['./select-profile.component.less']
})
export class SelectProfileComponent implements OnInit {

  candidate: boolean= false;
  university: boolean= false;
  organization: boolean= false;
  constructor() { }

  ngOnInit() {
  }

  onClick(){
 }

}
