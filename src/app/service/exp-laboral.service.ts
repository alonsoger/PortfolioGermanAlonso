import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExpLaboral } from '../modelo/exp-laboral';

@Injectable({
  providedIn: 'root'
})
export class ExpLaboralService {
  // expURL = 'http://localhost:8080/explaboral/' //URL APIREST
  expURL = 'https://bkendportfolio.herokuapp.com/explaboral/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<ExpLaboral[]> {
    return this.httpClient.get<ExpLaboral[]>(this.expURL + 'list');
  }

  public detail(id: number): Observable<ExpLaboral>{
    return this.httpClient.get<ExpLaboral>(this.expURL + `detail/${id}`);
  }

  public save(experiencia: ExpLaboral): Observable<any> {
    return this.httpClient.post<any>(this.expURL + `create`, experiencia);
  }

  public update(id: number, experiencia: ExpLaboral): Observable<any> {
    return this.httpClient.put<any>(this.expURL + `update/${id}`, experiencia);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }
  
}
