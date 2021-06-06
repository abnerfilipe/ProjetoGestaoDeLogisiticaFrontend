import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbAccordionModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { UiModule } from '../../shared/ui/ui.module';
import { StarterComponent } from './starter/starter.component';
import { UtilityRoutingModule } from './utility-routing.module';




@NgModule({
  declarations: [
    StarterComponent,
    // TimelineComponent,
    // FaqsComponent,
    // PricingComponent
  ],
  imports: [
    CommonModule,
    UtilityRoutingModule,
    UiModule,
    NgbAccordionModule,
    NgbNavModule
  ]
})
export class UtilityModule { }
