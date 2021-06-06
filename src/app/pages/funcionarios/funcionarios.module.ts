import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/layouts/shared/shared.module';
import { MaterialModule } from 'src/app/shared/Material/Material.module';
import { UiModule } from 'src/app/shared/ui/ui.module';
import { CriarEditarFuncionariosComponent } from './criar-editar-funcionarios/criar-editar-funcionarios.component';
import { FuncionariosComponent } from './funcionarios.component';
import { FuncionariosRoutes } from './funcionarios.routing';
import { ListarFuncionariosComponent } from './listar-funcionarios/listar-funcionarios.component';
import { MostrarFuncionariosComponent } from './mostrar-funcionarios/mostrar-funcionarios.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UiModule,
    MaterialModule,
    SharedModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    FuncionariosRoutes,
  ],
  declarations: [
    FuncionariosComponent,
    ListarFuncionariosComponent,
    MostrarFuncionariosComponent,
    CriarEditarFuncionariosComponent,
  ]
})
export class FuncionariosModule { }
