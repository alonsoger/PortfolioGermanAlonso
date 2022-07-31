import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { persona } from '../modelo/persona.modelo';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  
  Url = 'http://localhost:8080/personas/';

  constructor(private httpClient: HttpClient) { }

  public getPersona(): Observable<persona> {
    return this.httpClient.get<persona>(this.Url + 'traer/perfil');
  }

  public save(persona: persona): Observable<any> {
    return this.httpClient.post<any>(this.Url + `crear`, persona);
  }

  public update(id: number, persona: persona): Observable<any> {
    return this.httpClient.put<any>(this.Url + `update/${id}`, persona);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.Url + `delete/${id}`);
  }



}
