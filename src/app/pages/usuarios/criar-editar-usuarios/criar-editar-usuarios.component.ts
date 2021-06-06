import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogSuccessComponent } from 'src/app/shared/dialogSuccess/dialogSuccess.component';
import { Usuario } from '../usuario.type';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-criar-editar-usuarios',
  templateUrl: './criar-editar-usuarios.component.html',
  styleUrls: ['./criar-editar-usuarios.component.scss']
})
export class CriarEditarUsuariosComponent implements OnInit {
  usuarioForm: FormGroup;
  id: number;
  constructor(
    private _formBuilder: FormBuilder,
    private _activeRoute: ActivatedRoute,
    private _usuarioService: UsuariosService,
    private _router: Router,
    private _dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.criar();
    this.id = this._activeRoute.snapshot.params.id;
    if (this.id) {
      this._usuarioService.mostrar(this.id).subscribe((res: Usuario) => {
        this.editarObra(res);
      })
    }
  }
  criar(): void {
    this.usuarioForm = this._formBuilder.group({
      name: [''],
      email: [''],
      username: ['']
    });
  }
  editarObra(usuario: Usuario): void {
    this.usuarioForm.patchValue(usuario);
  }
  salvar(): void {

    if (this.id) {
      const usuario = this.usuarioForm.value as Usuario;
      this._usuarioService.editar(this.id,usuario).subscribe((res: Usuario) => {
        this._dialog.open(DialogSuccessComponent, {
          width: '250px',
          data: {
            title: "Otimo!",
            body: "O usuario foi editada com sucesso!",
          }
        });
        this._router.navigateByUrl(`/usuarios/${this.id}`);
      })
    } else {
      const usuario = this.usuarioForm.value as Usuario;
      this._usuarioService.criar(usuario).subscribe((res: Usuario) => {
        this._dialog.open(DialogSuccessComponent, {
          width: '250px',
          data: {
            title: "Otimo!",
            body: "O usuario foi criada com sucesso! você sera redirecionado.",
          }
        });
        this._router.navigateByUrl('/usuarios');
      })
    }
  }

}
