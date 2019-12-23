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
//https://rise.articulate.com/share/tniPwr69Sd_d2w8qginMEbpizH5woF8B
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    OverviewComponent,
    PageComponent,
    TextComponent,
    TextImageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
