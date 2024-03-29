import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NewExpComponent } from './components/experiencia/new-exp.component';
import { EditExpComponent } from './components/experiencia/edit-exp.component';
import { NewEduComponent } from './components/educacion/new-edu.component';
import { EditEduComponent } from './components/educacion/edit-edu.component';
import { NewproyectComponent } from './components/proyectos/newproyect.component';
import { EditproyectComponent } from './components/proyectos/editproyect.component';
import { EditsobremiComponent } from './components/sobre-mi/editsobremi.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'newexp', component: NewExpComponent},
  {path: 'editexp/:id', component: EditExpComponent},
  {path: 'newedu', component: NewEduComponent},
  {path: 'editedu/:id', component: EditEduComponent},
  {path: 'newproyect', component: NewproyectComponent},
  {path: 'editproyect/:id', component: EditproyectComponent},
  {path: 'editsobremi/:id', component: EditsobremiComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
