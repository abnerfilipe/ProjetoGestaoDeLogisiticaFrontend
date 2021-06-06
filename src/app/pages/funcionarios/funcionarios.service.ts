import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Funcionario } from './funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

constructor(private _httpClient: HttpClient) {

}
listar(): Observable<Funcionario[]> {
  return this._httpClient.get<Funcionario[]>(`${environment.baseUrl}/funcionarios`);
}
mostrar(id: number): Observable<Funcionario> {
  return this._httpClient.get<Funcionario>(`${environment.baseUrl}/funcionarios/${id}`);
}
criar(funcionario: Funcionario, obra: number, endereco: number, usuario: number): Observable<Funcionario> {
  delete funcionario.obra;
  delete funcionario.usuario;
  return this._httpClient.post<Funcionario>(`${environment.baseUrl}/funcionarios/obra/${obra}/endereco/${endereco}/usuario/${String(usuario)}`,
    JSON.stringify(funcionario), { headers: this.getHeaders() });
}
editar(id: number, funcionario: Funcionario, obra: number, endereco: number): Observable<Funcionario> {
  delete funcionario.usuario;
  delete funcionario.obra;
  return this._httpClient.put<Funcionario>(`${environment.baseUrl}/funcionarios/${id}/obra/${obra}/endereco/${String(endereco)}`,
    JSON.stringify(funcionario), { headers: this.getHeaders() });
}
deletar(id: number): Observable<Funcionario> {
  return this._httpClient.delete<Funcionario>(`${environment.baseUrl}/funcionarios/${id}`);
}
// tslint:disable-next-line: no-unused-expression
getHeaders(): HttpHeaders{
  return new HttpHeaders({
    'Content-Type':  'application/json',
    // Authorization: 'my-auth-token'
  })
}
}
