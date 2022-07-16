import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExpLaboral } from '../modelo/exp-laboral';

@Injectable({
  providedIn: 'root'
})
export class ExpLaboralService {
  expURL = 'http://localhost8080/explaboral/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<ExpLaboral[]> {
    return this.httpClient.get<ExpLaboral[]>(this.expURL + 'lista');
  }

  public detail(id: number): Observable<ExpLaboral>{
    return this.httpClient.get<ExpLaboral>(this.expURL + `detail/${id}`);
  }

  public save(exp: ExpLaboral): Observable<any> {
    return this.httpClient.post<any>(this.expURL + 'create', exp);
  }

  public update(id: number, exp: ExpLaboral): Observable<any> {
    return this.httpClient.put<any>(this.expURL + `update/${id}`, exp);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }
  
}
