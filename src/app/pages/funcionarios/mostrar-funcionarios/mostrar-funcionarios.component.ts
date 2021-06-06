import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DialogExcluirComponent } from 'src/app/shared/dialogExcluir/dialogExcluir.component';
import { DialogSuccessComponent } from 'src/app/shared/dialogSuccess/dialogSuccess.component';
import { Funcionario } from '../funcionario';
import { FuncionariosService } from '../funcionarios.service';

@Component({
  selector: 'app-mostrar-funcionarios',
  templateUrl: './mostrar-funcionarios.component.html',
  styleUrls: ['./mostrar-funcionarios.component.scss']
})
export class MostrarFuncionariosComponent implements OnInit {

  private destoyer$ = new Subject();
  funcionario: Funcionario;

  constructor(
    private _funcionariosService: FuncionariosService,
    private _activatedRoute: ActivatedRoute,
    private _dialog: MatDialog,
    private _router: Router,
  ) { }

  ngOnInit() {
    const id = this._activatedRoute.snapshot.params.id;
    this._funcionariosService.mostrar(id).pipe(takeUntil(this.destoyer$)).subscribe((data: Funcionario) => {
      this.funcionario = data;
    })
  }
  ngOnDestroy(): void {
    this.destoyer$.next();
    this.destoyer$.unsubscribe();
  }
  excluir(funcionario: Funcionario): void{
    const dialogRef = this._dialog.open(DialogExcluirComponent, {
      width: '250px',
      data: `Deseja excluir o funcionario ${funcionario.id}?`
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._funcionariosService.deletar(funcionario.id)
        .pipe(takeUntil(this.destoyer$))
        .subscribe((res: any) => {
          this._dialog.open(DialogSuccessComponent, {
            width: '250px',
            data: {
              title: "Otimo!",
              body: "O funcionario foi excluido com sucesso!"
            }
          });
          this._router.navigateByUrl("/funcionarios");
          // this.dataSource.data = this.dataSource.data.filter(item => funcionario.id != item.id);
        })
      }
    });

  }
  editar(funcionario: Funcionario): void{
    this._router.navigateByUrl(`/funcionarios/editar/${funcionario.id}`);
  }
}
