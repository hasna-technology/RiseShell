import { Component, KeyValueDiffer, KeyValueDiffers, KeyValueChanges } from '@angular/core';
import { MainService } from './service/main.service';

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
    
    this.service.loadJson().subscribe(
      res => {
        this.service.setData(JSON.parse(res.data));
        this.data = this.service.getData();
      },
      err =>{
        console.log(err);
      }
    )
    
  }
}
