import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { MainService } from 'src/app/service/main.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'admin-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  constructor(private httpClient: HttpClient, private service: MainService) { }

  SERVER_URL: string = environment.apiUrl + "/file/upload";

  image_src;

  @Input()
  get src() {
    return this.image_src;
  }

  set src(val) {
    this.image_src = val;
    this.srcChange.emit(this.image_src);
  };
  @Output()
  srcChange = new EventEmitter<string>();

  //form;
  percentage;
  file_info;
  progress = 0;
  ngOnInit() {

  }

 
  onFileSelect(event) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      
      if(file.size > 5 * Math.pow(10, 6) ){
        alert("Max size for image upload is 5MB. This image is  " + this.service.bytesToSize(file.size));
        return;
      }

      const formData = new FormData();
      formData.append('image', file);
      formData.append('course_id', this.service.getCourseId());

      this.httpClient.post<any>(this.SERVER_URL, formData, {
        reportProgress: true,
        observe: 'events'
      }).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {

          // calculate the progress percentage
          this.progress = Math.round(100 * event.loaded / event.total);
          console.log("percentDone = " + this.progress);
          // pass the percentage into the progress-stream
          //progress.next(percentDone);
        } else if (event instanceof HttpResponse) {

          // Close the progress-stream if we get an answer form the API
          // The upload is complete
          console.log("percentDone = completed");
          console.log(event.body.data);
          this.src = event.body.data.filePath;
          this.progress = 0;
          //progress.complete();
        }
      })
    }
  }

  public uploadFile(data) {
    let uploadURL = `${this.SERVER_URL}`;
    return this.httpClient.post<any>(uploadURL, data, {
      reportProgress: true,
      observe: 'events'
    });
  }

  remove(){
    this.src = "";
    this.progress = 0;
  }
}
