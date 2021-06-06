import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Funcionario } from '../funcionario';
import { FuncionariosService } from '../funcionarios.service';

@Component({
  selector: 'app-listar-funcionarios',
  templateUrl: './listar-funcionarios.component.html',
  styleUrls: ['./listar-funcionarios.component.scss']
})
export class ListarFuncionariosComponent {

  funcionarios: Funcionario[];
  displayedColumns: string[] = ['id', 'name', 'cpf','matricula','cargo','dataNascimento','acessar'];
  dataSource:MatTableDataSource<Funcionario>;
  private destroy$ = new Subject();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private _funcionariosService: FuncionariosService,
    private _router: Router,
  ) {
    this._funcionariosService.listar().subscribe((data: Funcionario[]) => {
      this.dataSource = new MatTableDataSource<Funcionario>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  acessar(usuario: Funcionario): void{
    this._router.navigateByUrl(`/funcionarios/${usuario.id}`);
  }


  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy():void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
