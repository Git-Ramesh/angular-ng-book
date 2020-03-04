import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../file-upload.service';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  selectedFile: File = null;
  errorMessage = "";
  progress = '';
  
  constructor(private fileUploadService:FileUploadService) { }

  ngOnInit() {
  }
  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }
  onUpload(){
    const fd = new FormData();
    fd.append("firstName", "Ramesh");
    fd.append("lastName", "Panthangi");
    fd.append("file", this.selectedFile);
    this.fileUploadService.uploadFile(fd)
        .subscribe(
          event => {
            if(event.type === HttpEventType.UploadProgress) {
              this.progress = 'Upload progress: ' + Math.round(event.loaded * 100/event.total) + '%';
              console.log(this.progress);  
            } else {
              console.log('Success!', event);
            }
            
          },
          error => (this.errorMessage = error)
        );
  }
}
