import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { FaqsComponent } from './faqs/faqs.component';
// import { PricingComponent } from './pricing/pricing.component';
import { StarterComponent } from './starter/starter.component';
// import { TimelineComponent } from './timeline/timeline.component';


const routes: Routes = [
    {
        path: 'starter',
        component: StarterComponent
    },
    // {
    //     path: 'timeline',
    //     component: TimelineComponent
    // },
    // {
    //     path: 'faqs',
    //     component: FaqsComponent
    // },
    // {
    //     path: 'pricing',
    //     component: PricingComponent
    // }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UtilityRoutingModule { }
