import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Obra } from './obra.type';

@Injectable({
  providedIn: 'root'
})
export class ObrasService {

  constructor(private _httpClient: HttpClient) {

  }
  listar(): Observable<Obra[]> {
    return this._httpClient.get<Obra[]>(`${environment.baseUrl}/obras`);
  }
  mostrar(id: number): Observable<Obra> {
    return this._httpClient.get<Obra>(`${environment.baseUrl}/obras/${id}`);
  }
  criar(obra: Obra): Observable<Obra> {
    return this._httpClient.post<Obra>(`${environment.baseUrl}/obras`, JSON.stringify(obra), {headers: this.getHeaders()});
  }
  editar(id: number, obra: Obra): Observable<Obra> {
    return this._httpClient.put<Obra>(`${environment.baseUrl}/obras/${id}`,JSON.stringify(obra),{headers: this.getHeaders()});
  }
  deletar(id: number): Observable<Obra> {
    return this._httpClient.delete<Obra>(`${environment.baseUrl}/obras/${id}`);
  }
  // tslint:disable-next-line: no-unused-expression
  getHeaders(): HttpHeaders{
    return new HttpHeaders({
      'Content-Type':  'application/json',
      // Authorization: 'my-auth-token'
    })
  }
}
