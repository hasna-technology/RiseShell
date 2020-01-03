import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { OverviewComponent } from './overview/overview.component';
import { PageComponent } from './page/page.component';
import { TextComponent } from './component/text/text.component';
import { TextImageComponent } from './component/text-image/text-image.component';
import { PanelComponent } from './admin/panel/panel.component';
import { FormsModule } from '@angular/forms';
import { ImageComponent } from './admin/image/image.component';
import { QuillModule } from 'ngx-quill';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AdminPageComponent } from './admin/adminpage/adminpage.component';
//https://rise.articulate.com/share/tniPwr69Sd_d2w8qginMEbpizH5woF8B
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    OverviewComponent,
    PageComponent,
    AdminPageComponent,
    TextComponent,
    TextImageComponent,
    PanelComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    DragDropModule,
    QuillModule.forRoot({
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike', 'link'],        // toggled buttons
          //['blockquote', 'code-block'],

          //[{ 'header': 1 }, { 'header': 2 }],    
          [{ 'script': 'sub' }, { 'script': 'super' }],  // superscript/subscript
          [{ 'list': 'ordered' }, { 'list': 'bullet' }],              // custom button values
            
          [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
          //[{ 'direction': 'rtl' }],                         // text direction

          //[{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

          [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
          //[{ 'font': [] }],
          [{ 'align': [] }],

          ['clean'],                                         // remove formatting button

          //['link', 'image', 'video']                         // link and image, video

          
        ]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
