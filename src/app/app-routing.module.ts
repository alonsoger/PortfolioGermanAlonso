import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NewExpComponent } from './components/experiencia/new-exp.component';
import { EditExpComponent } from './components/experiencia/edit-exp.component';
import { NewEduComponent } from './components/educacion/new-edu.component';
import { EditEduComponent } from './components/educacion/edit-edu.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'newexp', component: NewExpComponent},
  {path: 'editexp/:id', component: EditExpComponent},
  {path: 'newedu', component: NewEduComponent},
  {path: 'editedu/:id', component: EditEduComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
