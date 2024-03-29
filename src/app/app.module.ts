import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HRedesComponent } from './components/h-redes/h-redes.component';
import { HApComponent } from './components/h-ap/h-ap.component';
import { HMenuComponent } from './components/h-menu/h-menu.component';
import { BannerComponent } from './components/banner/banner.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';

import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { interceptorProvider } from './service/interceptor-service';
import { NewExpComponent } from './components/experiencia/new-exp.component';
import { EditExpComponent } from './components/experiencia/edit-exp.component';
import { NewEduComponent } from './components/educacion/new-edu.component';
import { EditEduComponent } from './components/educacion/edit-edu.component';
import { NewproyectComponent } from './components/proyectos/newproyect.component';
import { EditproyectComponent } from './components/proyectos/editproyect.component';
import { NewhabComponent } from './components/habilidades/newhab.component';
import { EditsobremiComponent } from './components/sobre-mi/editsobremi.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HRedesComponent,
    HApComponent,
    HMenuComponent,
    BannerComponent,
    SobreMiComponent,
    EducacionComponent,
    ExperienciaComponent,
    HabilidadesComponent,
    ProyectosComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    NewExpComponent,
    EditExpComponent,
    NewEduComponent,
    EditEduComponent,
    NewproyectComponent,
    EditproyectComponent,
    NewhabComponent,
    EditsobremiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
