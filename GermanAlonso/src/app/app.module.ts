import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HRedesComponent } from './components/h-redes/h-redes.component';
import { HApComponent } from './components/h-ap/h-ap.component';
import { HMenuComponent } from './components/h-menu/h-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HRedesComponent,
    HApComponent,
    HMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
