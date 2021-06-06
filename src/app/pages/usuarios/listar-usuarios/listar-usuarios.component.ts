import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ObrasService } from '../../obras/obras.service';
import { Usuario } from '../usuario.type';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.scss']
})
export class ListarUsuariosComponent {

  usuarios: Usuario[];
  displayedColumns: string[] = ['id', 'name', 'email','username','acessar'];
  dataSource:MatTableDataSource<Usuario>;
  private destroy$ = new Subject();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private _usuariosService: UsuariosService,
    private _router: Router,
  ) {
    this._usuariosService.listar().subscribe((data: Usuario[]) => {
      this.dataSource = new MatTableDataSource<Usuario>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  acessar(usuario: Usuario): void{
    this._router.navigateByUrl(`/usuarios/${usuario.id}`);
  }


  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy():void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
