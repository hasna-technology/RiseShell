import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType, HttpResponse, HttpRequest, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MainService } from 'src/app/service/main.service';
import { RequestMethod } from '@angular/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'admin-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  //SERVER_URL: string = "http://localhost/CI_Upload/index.php/file/upload";

  SERVER_URL: string = environment.apiUrl + "/file/upload";

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient, private service: MainService) { }

  image_src;

  @Input() 
  get src(){
    return this.image_src;
  }
  
  set src(val){
    this.image_src = val;
    this.srcChange.emit(this.image_src);
  };
  @Output()
  srcChange = new EventEmitter<string>();

  form;
  percentage;
  file_info;
  progress = 0;
  ngOnInit() {
    this.form = this.formBuilder.group({
      asset: ['']
    });
  }
  onFileSelect(event) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('asset').setValue(file);
      const formData = new FormData();
      formData.append('asset', this.form.get('asset').value);
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
      /*this.service.request("file/upload", RequestMethod.Post, formData).subscribe(
        res => {
          console.log(res);
        }, err => {
          alert(err.message);
        });
    }*/
      /*this.httpClient.get("http://jsonplaceholder.typicode.com/todos/1").subscribe(
        data =>
        {
          console.log(data);
        }
      )*/
      /*this.httpClient.post(this.SERVER_URL, formData, {
        reportProgress: true,
        observe:'events'
      }).subscribe(event => {
        console.log(event);
      })
      /*const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': 'true'
        })
      };
      this.httpClient.post(this.SERVER_URL, httpOptions)
        .pipe(map(user => {
          if (user) {
            // some logic
          }
          return user;
        }));*/

      /*const req = new HttpRequest('POST', this.SERVER_URL, formData, {
        reportProgress: true,
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:4200',
          'Access-Control-Allow-Credentials': 'true'
        })
      });
      const progress = new Subject<number>();
   
      this.httpClient.request(req).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
   
          // calculate the progress percentage
          const percentDone = Math.round(100 * event.loaded / event.total);
   
          // pass the percentage into the progress-stream
          progress.next(percentDone);
        } else if (event instanceof HttpResponse) {
   
          // Close the progress-stream if we get an answer form the API
          // The upload is complete
          progress.complete();
        }
      });
   
      /*      this.uploadFile(formData).subscribe(
              
              event => {
                console.log(event); // handle event here
                if (event.type == HttpEventType.UploadProgress) {
                  this.percentage = Math.round(100 * event.loaded / event.total);
                  console.log(`File is ${this.percentage}% loaded.`);
                } else if (event instanceof HttpResponse) {
                  console.log(event.body);
                  this.file_info = event.body;
                }
              },
              (err) => {
                console.log(err);
              }
            );*/

      //}
    }

  public uploadFile(data) {
    let uploadURL = `${this.SERVER_URL}`;
    return this.httpClient.post<any>(uploadURL, data, {
      reportProgress: true,
      observe: 'events'
    });
  }
}
