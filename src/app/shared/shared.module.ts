import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiModule } from './ui/ui.module';
import { TranslateModule } from '@ngx-translate/core';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogExcluirComponent } from './dialogExcluir/dialogExcluir.component';
import { MaterialModule } from './Material/Material.module';

@NgModule({
  declarations: [
    DialogExcluirComponent
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
