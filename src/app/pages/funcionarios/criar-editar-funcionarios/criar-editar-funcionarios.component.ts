import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, RequiredValidator, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DialogSuccessComponent } from 'src/app/shared/dialogSuccess/dialogSuccess.component';
import { Obra } from '../../obras/obra.type';
import { ObrasService } from '../../obras/obras.service';
import { Usuario } from '../../usuarios/usuario.type';
import { UsuariosService } from '../../usuarios/usuarios.service';
import { Endereco } from '../endereco';
import { EnderecosService } from '../endereco.service';
import { Funcionario } from '../funcionario';
import { FuncionariosService } from '../funcionarios.service';

@Component({
  selector: 'app-criar-editar-funcionarios',
  templateUrl: './criar-editar-funcionarios.component.html',
  styleUrls: ['./criar-editar-funcionarios.component.scss']
})
export class CriarEditarFuncionariosComponent implements OnInit {
  funcionarioForm: FormGroup;
  enderecoForm: FormGroup;
  funcionarioEditar: Funcionario;
  id: number;
  obras: Obra[];
  usuarios: Usuario[];
  private destroy$ = new Subject();


  constructor(
    private _formBuilder: FormBuilder,
    private _activeRoute: ActivatedRoute,
    private _funcionariosService: FuncionariosService,
    private _obrasService: ObrasService,
    private _usuariosService: UsuariosService,
    private _enderecosService: EnderecosService,
    // private _
    private _router: Router,
    private _dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.criar();
    this.criarEndereco();
    this.id = this._activeRoute.snapshot.params.id;
    if (this.id) {
      this._funcionariosService.mostrar(this.id).pipe(takeUntil(this.destroy$)).subscribe((res: Funcionario) => {
        this.editar(res);
        this.funcionarioEditar = res;
        this._enderecosService.mostrar(res.endereco.id).pipe(takeUntil(this.destroy$)).subscribe((res: Endereco) => {
          this.editarEndereco(res);
        })
      })
    }
    this._obrasService.listar().pipe(takeUntil(this.destroy$)).subscribe((res) => {
      this.obras = res;
    })
    this._usuariosService.listar().pipe(takeUntil(this.destroy$)).subscribe((res) => {
      this.usuarios = res.filter(item => item.funcionario == null);
    })
  }
  criar(): void {
    this.funcionarioForm = this._formBuilder.group({
      nome: ['',[Validators.required]],
      cpf: ['',[Validators.required]],
      matricula: ['',[Validators.required]],
      cargo: ['',[Validators.required]],
      sexo: ['',[Validators.required]],
      obra: ['',[Validators.required]],
      usuario: ['',[Validators.required]],
      dataNascimento: ['',[Validators.required]],
    });
  }
  criarEndereco(): void {
    this.enderecoForm = this._formBuilder.group({
      logradouro: [''],
      numero: [''],
      complemento: [''],
      bairro: [''],
      cidade: [''],
      estado: [''],
    });
  }
  editar(usuario: Funcionario): void {
    this.funcionarioForm.patchValue(usuario);
    this.funcionarioForm.get('obra').setValue(usuario.obra.id);
  }
  editarEndereco(endereco: Endereco): void {
    this.enderecoForm.patchValue(endereco);
  }
  salvar(): void {
    this.funcionarioForm.disable();
    this.enderecoForm.disable();

    if (this.id) {
      const funcionario = this.funcionarioForm.value;
      const obra = +this.funcionarioForm.get('obra').value;
      const endereco = this.enderecoForm.value as Endereco;
      this._enderecosService.editar(this.funcionarioEditar.endereco.id,endereco)
        .pipe(takeUntil(this.destroy$))
        .subscribe((res: Endereco) => {

          this._funcionariosService.editar(this.id, funcionario, obra, res.id)
          .pipe(takeUntil(this.destroy$))
          .subscribe((res: Funcionario) => {
          this._dialog.open(DialogSuccessComponent, {
            width: '250px',
            data: {
              title: "Otimo!",
              body: "O funcionario foi editada com sucesso!",
            }
          });
          this._router.navigateByUrl(`/funcionarios/${this.id}`);
          }, (error) => {
            this._dialog.open(DialogSuccessComponent, {
              width: '250px',
              data: {
                title: "Ops!",
                body: "Erro ao editar funcionario!",
              }
            });
        })
        }, (error: any) => {
          this._dialog.open(DialogSuccessComponent, {
            width: '250px',
            data: {
              title: "Ops!",
              body: "Erro ao editar endereco!",
            }
          });
          // this._router.navigateByUrl('/funcionarios');
      })

    } else {
      const funcionario = this.funcionarioForm.value as Funcionario;
      const obra = +this.funcionarioForm.get('obra').value;
      const endereco = this.enderecoForm.value as Endereco;
      const usuario = +this.funcionarioForm.get('usuario').value;
      this._enderecosService.criar(endereco)
        .pipe(takeUntil(this.destroy$))
        .subscribe((res: Endereco) => {

          this._funcionariosService.criar(funcionario,obra,res.id,usuario).subscribe((res: Funcionario) => {
            this._dialog.open(DialogSuccessComponent, {
              width: '250px',
              data: {
                title: "Otimo!",
                body: "O funcionario foi criada com sucesso! você sera redirecionado.",
              }
            });
            this._router.navigateByUrl('/funcionarios');
          })
        }, (error: any) => {
          this._dialog.open(DialogSuccessComponent, {
            width: '250px',
            data: {
              title: "Ops!",
              body: "Erro ao criar endereco!",
            }
          });
          // this._router.navigateByUrl('/funcionarios');
      })

    }
    this.funcionarioForm.enable();
    this.enderecoForm.enable();
  }
  get form() {
    return this.funcionarioForm.controls;
  }
  get enderecForm() {
    return this.enderecoForm.controls;
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();

  }
}
