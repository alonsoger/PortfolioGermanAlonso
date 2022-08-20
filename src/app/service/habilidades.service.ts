import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidades } from '../modelo/habilidades';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {
  habURL = 'http://localhost:8080/habilidades/' // URL APIREST

  // habURL = 'https://bkendportfolio.herokuapp.com/habilidades/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Habilidades[]> {
    return this.httpClient.get<Habilidades[]>(this.habURL + 'list');
  }

  public detail(id: number): Observable<Habilidades>{
    return this.httpClient.get<Habilidades>(this.habURL + `detail/${id}`);
  }

  public save(habilidades: Habilidades): Observable<any> {
    return this.httpClient.post<any>(this.habURL + `create`, habilidades);
  }

  public update(id: number, habilidades: Habilidades): Observable<any> {
    return this.httpClient.put<any>(this.habURL + `update/${id}`, habilidades);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.habURL + `delete/${id}`);
  }
}
