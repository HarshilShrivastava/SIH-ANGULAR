import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.less']
})
export class ErrorDialogComponent implements OnInit {

  isPresent: boolean = false;

  constructor(public dialogRef: MatDialogRef<ErrorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { 
  }

  ngOnInit() {
    if(this.data)
      this.isPresent = true;
  }

  // cancel(){
  //   // this.data.hasChanges = true;
  //   // this.selectedTab.emit(this.data.selectedTab);
  //   this.dialogRef.close();
  // }

  proceed(){
      this.dialogRef.close(true);
}

}
