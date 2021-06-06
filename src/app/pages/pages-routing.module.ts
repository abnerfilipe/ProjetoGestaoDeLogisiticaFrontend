import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: '', component: DashboardComponent,canActivate: [AuthGuard]},

  {
    path: 'funcionarios', canActivate: [AuthGuard],
    loadChildren: () => import('./funcionarios/funcionarios.module').then(m => m.FuncionariosModule)
  },
  {
    path: 'obras', canActivate: [AuthGuard],
    loadChildren: () => import('./obras/obras.module').then(m => m.ObrasModule)
  },
  {
    path: 'usuarios',canActivate:[AuthGuard],
    loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule)
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
