import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/Material/Material.module';
import { UiModule } from 'src/app/shared/ui/ui.module';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { UsuariosRoutes } from './usuarios.routing';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { MostrarUsuarioComponent } from './mostrar-usuario/mostrar-usuario.component';
import { CriarEditarUsuariosComponent } from './criar-editar-usuarios/criar-editar-usuarios.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    UiModule,
    TranslateModule,
    RouterModule,
    UsuariosRoutes,
  ],
  declarations: [
    UsuariosComponent,
    ListarUsuariosComponent,
    MostrarUsuarioComponent,
    CriarEditarUsuariosComponent
  ]
})
export class UsuariosModule { }
