import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-general-dialog-box',
  templateUrl: './general-dialog-box.component.html',
  styleUrls: ['./general-dialog-box.component.less']
})
export class GeneralDialogBoxComponent implements OnInit {

  isPresent: boolean = false;

  constructor(public dialogRef: MatDialogRef<GeneralDialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { 
  }
  ngOnInit() {
    if(this.data)
      this.isPresent = true;
  }

  proceed(){
    this.dialogRef.close('proceed');
  }

  cancel() {
    this.dialogRef.close(true);
  }

}
