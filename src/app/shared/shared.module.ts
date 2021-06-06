import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiModule } from './ui/ui.module';
import { TranslateModule } from '@ngx-translate/core';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogExcluirComponent } from './dialogExcluir/dialogExcluir.component';
import { MaterialModule } from './Material/Material.module';
import { DialogSuccessComponent } from './dialogSuccess/dialogSuccess.component';

@NgModule({
  declarations: [
    DialogExcluirComponent,
    DialogSuccessComponent,
  ],
  imports: [
    CommonModule,
    UiModule,
    TranslateModule,
    MatDialogModule,
    MaterialModule,
  ]
})
export class SharedModule { }
