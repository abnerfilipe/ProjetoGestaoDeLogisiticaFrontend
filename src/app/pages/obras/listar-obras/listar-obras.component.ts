import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { Obra } from '../obra.type';
import { ObrasService } from '../obras.service';


@Component({
  selector: 'app-listar-obras',
  templateUrl: './listar-obras.component.html',
  styleUrls: ['./listar-obras.component.scss']
})
export class ListarObrasComponent {
  obras: Obra[];
  displayedColumns: string[] = ['id', 'nome', 'codigo','descricao', 'acessar'];
  dataSource:MatTableDataSource<Obra>;
  private destroy$ = new Subject();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private _obrasService: ObrasService,
  ) {
    this._obrasService.listar().subscribe((data: Obra[]) => {
      this.dataSource = new MatTableDataSource<Obra>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }



  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy():void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}


