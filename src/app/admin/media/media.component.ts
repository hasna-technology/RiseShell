import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { MainService } from 'src/app/service/main.service';
import { environment } from './../../../environments/environment'

@Component({
  selector: 'admin-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {
  //SERVER_URL: string = "http://localhost/CI_Upload/index.php/file/upload";

  SERVER_URL = environment.apiUrl + "file/upload";

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient, private service: MainService) { }

  _item;

  @Input()
  get item() {
    return this._item;
  }

  set item(val) {
    this._item = val;
    this.itemChange.emit(this._item);
  };

  @Output()
  itemChange = new EventEmitter<string>();

  form;
  percentage;
  file_info;
  progress = 0;

  
  ngOnInit() {
    this.form = this.formBuilder.group({
      asset: [''],
      audio: [''],
      video: ['']
    });
  }
  onFileSelect(event) {
    
    var _fileasset = this.item.type;
    
    console.log(event.target.files)
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file);
      this.form.get(_fileasset).setValue(file);
      const formData = new FormData();
      formData.append(_fileasset, this.form.get(_fileasset).value);
      this.httpClient.post<any>(this.SERVER_URL, formData, {
        reportProgress: true,
        observe: 'events'
      }).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {

          // calculate the progress percentage
          const percentDone = Math.round(100 * event.loaded / event.total);
          this.progress = percentDone;
          console.log("percentDone = " + percentDone);
          // pass the percentage into the progress-stream
          //progress.next(percentDone);
        } else if (event instanceof HttpResponse) {

          // Close the progress-stream if we get an answer form the API
          // The upload is complete
          console.log("percentDone = completed");
          console.log(event.body.data);
          this.item.source = event.body.data.filePath;
          //this.item.autoplay =true;
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
}
