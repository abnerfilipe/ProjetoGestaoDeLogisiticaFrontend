import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
    { path: '', component: DashboardComponent },
    // { path: 'obras', component: ObrasComponent },
    { path: 'obras', loadChildren: () => import('./obras/obras.module').then(m => m.ObrasModule) },
    { path: 'usuarios', loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule) },

    // { path: 'calendar', component: CalendarComponent },
    // { path: 'chat', component: ChatComponent },
    // { path: 'kanban-board', component: KanbanComponent },
    // { path: 'ecommerce', loadChildren: () => import('./ecommerce/ecommerce.module').then(m => m.EcommerceModule) },
    // { path: 'email', loadChildren: () => import('./email/email.module').then(m => m.EmailModule) },
    // { path: 'pages', loadChildren: () => import('./utility/utility.module').then(m => m.UtilityModule) },
    // { path: 'ui', loadChildren: () => import('./ui/ui.module').then(m => m.UIModule) },
    // { path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule) },
    // { path: 'charts', loadChildren: () => import('./chart/chart.module').then(m => m.ChartModule) },
    // { path: 'form', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
    // { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
    // { path: 'maps', loadChildren: () => import('./maps/maps.module').then(m => m.MapsModule) },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
