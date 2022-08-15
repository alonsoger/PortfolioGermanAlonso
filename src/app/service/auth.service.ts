import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NuevoUsuario } from '../modelo/nuevo-usuario';
import { JwtDto } from '../modelo/jwt-dto';
import { LoginUsuario } from '../modelo/login-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
//Agregamos la url de la ApiRest y el token de firma. 
  //authURL = 'http://localhost:8080/auth/'; //URL APIREST 
  authURL = 'https://bkendportfolio.herokuapp.com/auth'; // URL HEROKU
  token = ""; //TOKEN DE FIRMA  

  constructor(private httpClient: HttpClient, private router: Router) { }

  public login2(usuario: string, password: string, email: string) {
    this.httpClient.post(this.authURL + '/authenticate', {usuario: usuario, password: password, email: email})
    .subscribe((resp: any) => {
      //redireccionamos al perfil del Usuario
      this.router.navigate(['/home']); //PERFIL URL 
      //guardamos el token en localStorage
      localStorage.setItem('auth_token', resp.token); 
    })
  }

  logout(){
    localStorage.removeItem('token');
  }

  //Este verifica si existe la sesion o no!
  public get logIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }
  //Con este servicio podemos mostrar u ocultar botones segun la condicion del usuario 

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario);
  }


}
