import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CriarEditarFuncionariosComponent } from './criar-editar-funcionarios/criar-editar-funcionarios.component';
import { FuncionariosComponent } from './funcionarios.component';
import { MostrarFuncionariosComponent } from './mostrar-funcionarios/mostrar-funcionarios.component';


const routes: Routes = [
  {
    path: '',
    component: FuncionariosComponent
  },
  {
    path: 'funcionarios/criar',
    component: CriarEditarFuncionariosComponent,
  },
  {
    path: 'funcionarios/editar/:id',
    component: CriarEditarFuncionariosComponent,
  },
  {
      path: 'funcionarios/:id',
      component: MostrarFuncionariosComponent
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionariosRoutes { };
