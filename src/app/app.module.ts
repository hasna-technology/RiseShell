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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageComponent } from './admin/image/image.component';
import { QuillModule } from 'ngx-quill';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AdminPageComponent } from './admin/adminpage/adminpage.component';
import { BlockComponent } from './admin/block/block.component';
import { GridImageTextComponent } from './component/grid-image-text/grid-image-text.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ColorPickerComponent } from './admin/color-picker/color-picker.component';
import { AudioComponent } from './component/audio/audio.component';
import { VideoComponent } from './component/video/video.component';
import { MediaComponent } from './admin/media/media.component';
import { SettingsComponent } from './admin/settings/settings.component';
import { GridComponent } from './admin/grid/grid.component';
import { TabImageTextComponent } from './component/tab-image-text/tab-image-text.component';
import { AccordianComponent } from './component/accordian/accordian.component';
import { TruncatePipe } from './filters/TruncatePipe';
import { BulletsComponent } from './component/bullets/bullets.component';
import { TimelineComponent } from './component/timeline/timeline.component';

import { DropdownComponent } from './component/dropdown/dropdown.component';
import { BulletComponent } from './admin/bullet/bullet.component';
import { SearchPipe } from './admin/search.pipe';
import { PagePropertyComponent } from './admin/page-property/page-property.component';
import { MainService } from './service/main.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { DividerComponent } from './component/divider/divider.component';
import { DivideComponent } from './admin/divide/divide.component';
import { AuthInterceptor } from './service/AuthInterceptor';

import { QuizComponent } from './component/quiz/quiz/quiz.component';
import { InteractivitymapComponent } from './component/interactivitymap/interactivitymap.component';
import { CKEditorModule } from 'ckeditor4-angular';
import { SafeHtmlPipe } from './service/pipe/SafeHtmlPipe';
import { AdminTextblockComponent } from './admin/admin-textblock/admin-textblock.component';
import { CourseService } from './service/publish/Course.service';
import { SlideimageComponent } from './component/slideimage/slideimage.component';
import { CssgridComponent } from './component/cssgrid/cssgrid.component';
import { QuizeditComponent } from './admin/quizedit/quizedit.component';
import { Grid1Component } from './admin/grid1/grid1.component';
import { GridComponent1 } from './component/grid1/grid1.component';
import { CardComponent } from './component/card/card.component';
import { AdminCardComponent } from './admin/card/card.component';
 




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
    ImageComponent,
    BlockComponent,
    GridImageTextComponent,
    ColorPickerComponent,
    AudioComponent,
    VideoComponent,
    MediaComponent,
    SettingsComponent,
    GridComponent,
    TabImageTextComponent,
    AccordianComponent,
    TruncatePipe,
    SafeHtmlPipe,
    BulletsComponent,
    TimelineComponent,
    DropdownComponent,
    BulletComponent,
    PagePropertyComponent,
    NotFoundComponent,
    HomeComponent,
    SearchPipe,
    PagePropertyComponent,
    DividerComponent,
    DivideComponent,
    QuizComponent,
    InteractivitymapComponent,
    AdminTextblockComponent,
    SlideimageComponent,
    CssgridComponent,
    QuizeditComponent,
  
    
    Grid1Component,
    GridComponent1,
    CardComponent,
    AdminCardComponent,
    QuizComponent,
    InteractivitymapComponent,
    AdminTextblockComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CKEditorModule,
    AppRoutingModule,
    MatIconModule,
    DragDropModule,
    HttpClientModule,
    /*QuillModule.forRoot({
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
    })*/
  ],
  providers: [MainService,  CourseService, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent],
 
 // providers: [MainService, CourseService, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  //bootstrap: [AppComponent]
})
export class AppModule { }
