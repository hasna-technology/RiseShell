import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'admin-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  SERVER_URL: string = "http://localhost/upload";

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) { }

  @Input() src;
  form;
  percentage;
  file_info;
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

      this.uploadFile(formData).subscribe(
        event => {
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
      );

    }
  }

  public uploadFile(data) {
    let uploadURL = `${this.SERVER_URL}`;
    return this.httpClient.post<any>(uploadURL, data);
  }
}
