import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from './usuario.type';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  constructor(private _httpClient: HttpClient) {

  }
  listar(): Observable<Usuario[]> {
    return this._httpClient.get<Usuario[]>(`${environment.baseUrl}/usuarios`);
  }
  mostrar(id: number): Observable<Usuario> {
    return this._httpClient.get<Usuario>(`${environment.baseUrl}/usuarios/${id}`);
  }
  criar(usuario: Usuario): Observable<Usuario> {
    return this._httpClient.post<Usuario>(`${environment.baseUrl}/usuarios`,
      JSON.stringify(usuario), { headers: this.getHeaders() });
  }
  editar(id: number, usuario: Usuario): Observable<Usuario> {
    return this._httpClient.put<Usuario>(`${environment.baseUrl}/usuarios/${id}`,
      JSON.stringify(usuario), { headers: this.getHeaders() });
  }
  deletar(id: number): Observable<Usuario> {
    return this._httpClient.delete<Usuario>(`${environment.baseUrl}/usuarios/${id}`);
  }
  // tslint:disable-next-line: no-unused-expression
  getHeaders(): HttpHeaders{
    return new HttpHeaders({
      'Content-Type':  'application/json',
      // Authorization: 'my-auth-token'
    })
  }
}
