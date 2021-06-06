import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from './shared/shared.module';
import { VerticalComponent } from './vertical/vertical.component';



@NgModule({
  declarations: [VerticalComponent, LayoutComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    TranslateModule,
  ],
  exports: [VerticalComponent]
})
export class LayoutsModule { }
