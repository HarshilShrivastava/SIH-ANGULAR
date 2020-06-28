import { Component, OnInit } from '@angular/core';
import { QuizService} from '../shared/quiz.service';
import { HttpClient } from '@angular/common/http';
import { Routes, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ErrorDialogComponent } from '../shared/error-dialog/error-dialog.component';
import { 
  SafeResourceUrl, 
  DomSanitizer } from '@angular/platform-browser';
import { GeneralDialogBoxComponent } from '../dialogs/general-dialog-box/general-dialog-box.component';

@Component({
  selector: 'app-createview',
  templateUrl: './createview.component.html',
  styleUrls: ['./createview.component.less']
})
export class CreateviewComponent implements OnInit {
  // tslint:disable-next-line: no-inferrable-types
  imageUrl: string = 'http://localhost:4200/assets/image/default-image.png';
  fileToUpload: File = null;
  hide: boolean = true;

  constructor(
    private quizService: QuizService, 
    private http: HttpClient , 
    private router: Router,
    private dialog: MatDialog,
    private sanitization: DomSanitizer) { }

  ngOnInit() {
  }

  handleFileInput(file: FileList) {
    // this.hide = false;
    this.fileToUpload = file.item(0);

    // Show image preview
    const reader = new FileReader();

    reader.readAsDataURL(this.fileToUpload);

    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    
  }

  preview(){
    if(this.hide)
      this.hide = false;
    else
      this.hide = true;
  }

  OnSubmit(Name, Address, Image) {
   if (localStorage.getItem('token')) {
   this.quizService.postFile(Name.value, Address.value, this.fileToUpload).subscribe(
     data => {
       console.log('done', data);
       let dialogRef = this.dialog.open(GeneralDialogBoxComponent, {
        height: '200px',
        data: "Your profile is created successfully, would you like to proceed to the quiz?"
      });  
      dialogRef.afterClosed().subscribe((data) => {
        if (data === "proceed") {
          this.router.navigate(['/instructions']);
        }
        else
          this.router.navigate(['/instructions'])
      });
       Name.value = null;
       Address.value = null;
       Image.value = null;
       this.imageUrl = 'http://localhost:4200/assets/image/default-image.png';
     }
   );
  } else{
    let dialogRef = this.dialog.open(ErrorDialogComponent, {
      height: '200px',
      data: "Sorry your profile could not be created right now, please try again in some time."
    }); 
    this.router.navigate(['/signup']);
  }
  }

}
