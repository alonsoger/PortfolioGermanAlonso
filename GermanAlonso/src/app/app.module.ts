import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HRedesComponent } from './components/h-redes/h-redes.component';
import { HApComponent } from './components/h-ap/h-ap.component';
import { HMenuComponent } from './components/h-menu/h-menu.component';
import { BannerComponent } from './components/banner/banner.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HRedesComponent,
    HApComponent,
    HMenuComponent,
    BannerComponent,
    SobreMiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
