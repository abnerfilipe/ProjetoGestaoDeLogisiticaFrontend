import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DialogExcluirComponent } from 'src/app/shared/dialogExcluir/dialogExcluir.component';
import { DialogSuccessComponent } from 'src/app/shared/dialogSuccess/dialogSuccess.component';
import { Usuario } from '../usuario.type';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-mostrar-usuario',
  templateUrl: './mostrar-usuario.component.html',
  styleUrls: ['./mostrar-usuario.component.scss']
})
export class MostrarUsuarioComponent implements OnInit {

  private destoyer$ = new Subject();
  usuario: Usuario;

  constructor(
    private _usuarioService: UsuariosService,
    private _activatedRoute: ActivatedRoute,
    private _dialog: MatDialog,
    private _router: Router,
  ) { }

  ngOnInit() {
    const id = this._activatedRoute.snapshot.params.id;
    this._usuarioService.mostrar(id).pipe(takeUntil(this.destoyer$)).subscribe((data: Usuario) => {
      this.usuario = data;
    })
  }
  ngOnDestroy(): void {
    this.destoyer$.next();
    this.destoyer$.unsubscribe();
  }
  excluir(usuario: Usuario): void{
    const dialogRef = this._dialog.open(DialogExcluirComponent, {
      width: '250px',
      data: `Deseja excluir a usuario ${usuario.id}?`
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._usuarioService.deletar(usuario.id)
        .pipe(takeUntil(this.destoyer$))
        .subscribe((res: any) => {
          this._dialog.open(DialogSuccessComponent, {
            width: '250px',
            data: {
              title: "Otimo!",
              body: "O usuario foi excluida com sucesso!"
            }
          });
          this._router.navigateByUrl("/usuarios");
          // this.dataSource.data = this.dataSource.data.filter(item => usuario.id != item.id);
        })
      }
    });

  }
  editar(usuario: Usuario): void{
    console.log(usuario);

    this._router.navigateByUrl(`/usuarios/editar/${usuario.id}`);
  }
}
