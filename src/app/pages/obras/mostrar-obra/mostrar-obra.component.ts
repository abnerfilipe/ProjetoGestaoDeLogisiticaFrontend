import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DialogExcluirComponent } from 'src/app/shared/dialogExcluir/dialogExcluir.component';
import { DialogSuccessComponent } from 'src/app/shared/dialogSuccess/dialogSuccess.component';
import { Obra } from '../obra.type';
import { ObrasService } from '../obras.service';

@Component({
  selector: 'app-mostrar-obra',
  templateUrl: './mostrar-obra.component.html',
  styleUrls: ['./mostrar-obra.component.scss']
})
export class MostrarObraComponent implements OnInit {
  private destoyer$ = new Subject();
  obra: Obra;

  constructor(
    private _obraService: ObrasService,
    private _activatedRoute: ActivatedRoute,
    private _dialog: MatDialog,
    private _router: Router,
  ) { }

  ngOnInit() {
    const id = this._activatedRoute.snapshot.params.id;
    this._obraService.mostrar(id).pipe(takeUntil(this.destoyer$)).subscribe((data: Obra) => {
      this.obra = data;
    })
  }
  ngOnDestroy(): void {
    this.destoyer$.next();
    this.destoyer$.unsubscribe();
  }
  excluir(obra: Obra): void{
    const dialogRef = this._dialog.open(DialogExcluirComponent, {
      width: '250px',
      data: `Deseja excluir a obra ${obra.id}?`
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._obraService.deletar(obra.id)
        .pipe(takeUntil(this.destoyer$))
        .subscribe((res: any) => {
          this._dialog.open(DialogSuccessComponent, {
            width: '250px',
            data: {
              title: "Otimo!",
              body: "A obra foi excluida com sucesso!"
            }
          });
          this._router.navigateByUrl("/obras");
          // this.dataSource.data = this.dataSource.data.filter(item => obra.id != item.id);
        })
      }
    });

  }
}
