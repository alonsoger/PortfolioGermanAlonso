import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
//Agregamos la url de la ApiRest y el token de firma. 
  api = "";
  token = "";

  constructor(private http: HttpClient, private router: Router) { }

  login(usuario: string, password: string, email: string) {
    this.http.post(this.api + '/authenticate', {usuario: usuario, password: password, email: email})
    .subscribe((resp: any) => {
      //redireccionamos al perfil del Usuario
      this.router.navigate(['/home']);
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
}
