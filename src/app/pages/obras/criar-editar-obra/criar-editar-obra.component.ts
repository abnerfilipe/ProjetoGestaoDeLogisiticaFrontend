import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogSuccessComponent } from 'src/app/shared/dialogSuccess/dialogSuccess.component';
import { Obra } from '../obra.type';
import { ObrasService } from '../obras.service';

@Component({
  selector: 'app-criar-editar-obra',
  templateUrl: './criar-editar-obra.component.html',
  styleUrls: ['./criar-editar-obra.component.scss']
})
export class CriarEditarObraComponent implements OnInit {
  obraForm: FormGroup;
  id: number;
  constructor(
    private _formBuilder: FormBuilder,
    private _activeRoute: ActivatedRoute,
    private _obraService: ObrasService,
    private _router: Router,
    private _dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.criarObra();
    this.id = this._activeRoute.snapshot.params.id;
    if (this.id) {
      this._obraService.mostrar(this.id).subscribe((res: Obra) => {
        this.editarObra(res);
      })
    }
  }
  criarObra(): void {
    this.obraForm = this._formBuilder.group({
      nome: [''],
      codigo: [''],
      descricao: ['']
    });
  }
  editarObra(obra: Obra): void {
    this.obraForm.patchValue(obra);
  }
  salvarObra(): void {

    if (this.id) {
      const obra = {
        nome: this.obraForm.get('nome').value,
        codigo: this.obraForm.get('codigo').value,
        descricao: this.obraForm.get('descricao').value,
      } as Obra;
      this._obraService.editar(this.id,obra).subscribe((res: Obra) => {
        this._dialog.open(DialogSuccessComponent, {
          width: '250px',
          data: {
            title: "Otimo!",
            body: "A obra foi editada com sucesso!",
          }
        });
        this._router.navigateByUrl(`/obras/${this.id}`);
      })
    } else {
      const obra = this.obraForm.value as Obra;
      this._obraService.criar(obra).subscribe((res: Obra) => {
        this._dialog.open(DialogSuccessComponent, {
          width: '250px',
          data: {
            title: "Otimo!",
            body: "A obra foi criada com sucesso! você sera redirecionado.",
          }
        });
        this._router.navigateByUrl('/obras/');
      })
    }
  }
}
