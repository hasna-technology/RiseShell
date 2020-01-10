import { Component, KeyValueDiffer, KeyValueDiffers, KeyValueChanges } from '@angular/core';
import { MainService } from './service/main.service';
import localdata from '../data/en/content.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Shell Template';

  constructor(private service: MainService) { 
    
  }

  data;
  prevData;

  ngOnInit() {
    
    /* comment below 2 lines for loading data from server*/
    this.service.setData(localdata);
    this.data = this.service.getData();

    /* Following code to get data from server*/
    /*this.service.loadJson().subscribe(
      res => {
        this.service.setData(JSON.parse(res.data));
        this.data = this.service.getData();
      },
      err =>{
        console.log(err);
      }
    )*/
    
  }
}
