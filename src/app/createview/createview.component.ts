import { Component, OnInit } from '@angular/core';
import { QuizService} from '../shared/quiz.service';
import { HttpClient } from '@angular/common/http';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-createview',
  templateUrl: './createview.component.html',
  styleUrls: ['./createview.component.css']
})
export class CreateviewComponent implements OnInit {
  // tslint:disable-next-line: no-inferrable-types
  imageUrl: string = '/assets/image/default-image.png';
  fileToUpload: File = null;

  constructor(private quizService: QuizService, private http: HttpClient , private router: Router) { }

  ngOnInit() {
  }
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    // Show image preview
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
  }

  OnSubmit(Name, Address, Image) {
   if (localStorage.getItem('token')) {
   this.quizService.postFile(Name.value, Address.value, this.fileToUpload).subscribe(
     data => {
       console.log('done', data);
       this.router.navigate(['/quiz']);
       Name.value = null;
       Address.value = null;
       Image.value = null;
       this.imageUrl = '/assets/image/default-image.png';
     }
   );
  } else {
    this.router.navigate(['/signup']);
  }
  }

}
