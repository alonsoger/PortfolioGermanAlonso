import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { persona } from '../modelo/persona.modelo';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  
  Url = 'http://localhost:8080/personas/';

  constructor(private http: HttpClient) { }

  public getPersona(): Observable<persona> {
    return this.http.get<persona>( this.Url +'traer/perfil');
  }



}
