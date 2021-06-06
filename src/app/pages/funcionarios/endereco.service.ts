import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Endereco } from './endereco';


@Injectable({
  providedIn: 'root'
})
export class EnderecosService {

constructor(private _httpClient: HttpClient) {

}
listar(): Observable<Endereco[]> {
  return this._httpClient.get<Endereco[]>(`${environment.baseUrl}/enderecos`);
}
mostrar(id: number): Observable<Endereco> {
  return this._httpClient.get<Endereco>(`${environment.baseUrl}/enderecos/${id}`);
}
criar(endereco: Endereco): Observable<Endereco> {
  return this._httpClient.post<Endereco>(`${environment.baseUrl}/enderecos`,
    JSON.stringify(endereco), { headers: this.getHeaders() });
}
editar(id: number, endereco: Endereco): Observable<Endereco> {
  return this._httpClient.put<Endereco>(`${environment.baseUrl}/enderecos/${id}`,
    JSON.stringify(endereco), { headers: this.getHeaders() });
}
deletar(id: number): Observable<Endereco> {
  return this._httpClient.delete<Endereco>(`${environment.baseUrl}/enderecos/${id}`);
}
// tslint:disable-next-line: no-unused-expression
getHeaders(): HttpHeaders{
  return new HttpHeaders({
    'Content-Type':  'application/json',
    // Authorization: 'my-auth-token'
  })
}
}
