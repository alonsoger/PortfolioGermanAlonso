import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { persona } from '../modelo/persona.modelo';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  
urlPer = 'https://bkendportfolio.herokuapp.com/personas/';

  constructor(private httpClient: HttpClient) { }

  public getPersona(): Observable<persona> {
    return this.httpClient.get<persona>(this.urlPer + 'traer/perfil');
  }

  public save(persona: persona): Observable<any> {
    return this.httpClient.post<any>(this.urlPer + `crear`, persona);
  }

  public update(id: number, persona: persona): Observable<any> {
    return this.httpClient.put<any>(this.urlPer + `update/${id}`, persona);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.urlPer + `delete/${id}`);
  }



}
