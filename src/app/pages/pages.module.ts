import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NgbDropdownModule, NgbNavModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DndModule } from 'ngx-drag-drop';
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { UiModule } from '../shared/ui/ui.module';
import { WidgetModule } from '../shared/widget/widget.module';
import { ObrasModule } from './obras/obras.module';
import { PagesRoutingModule } from './pages-routing.module';
import { UsuariosModule } from './usuarios/usuarios.module';





const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 0.3
};

@NgModule({
  exports: [
    ObrasModule,
    UsuariosModule,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    Ng2SearchPipeModule,
    NgbNavModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgApexchartsModule,
    PerfectScrollbarModule,
    DndModule,
    FullCalendarModule,
    LeafletModule,
    WidgetModule,
    TranslateModule,
    NgApexchartsModule,
    UiModule,
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class PagesModule { }
