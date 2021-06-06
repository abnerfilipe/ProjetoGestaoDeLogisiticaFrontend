import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from 'src/app/shared/Material/Material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { UiModule } from 'src/app/shared/ui/ui.module';
import { CriarEditarObraComponent } from './criar-editar-obra/criar-editar-obra.component';
import { ListarObrasComponent } from './listar-obras/listar-obras.component';
import { MostrarAlmoxarifadoComponent } from './mostrar-almoxarifado/mostrar-almoxarifado.component';
import { MostrarObraComponent } from './mostrar-obra/mostrar-obra.component';
import { ObrasComponent } from './obras.component';
import { ObrasRoutes } from './obras.routing';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule,
    UiModule,
    ObrasRoutes,
    // terceiros
    MatTableModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ObrasComponent,
    CriarEditarObraComponent,
    ListarObrasComponent,
    MostrarAlmoxarifadoComponent,
    MostrarObraComponent,
  ]
})
export class ObrasModule { };
