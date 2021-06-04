import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CriarEditarObraComponent } from './criar-editar-obra/criar-editar-obra.component';
import { MostrarObraComponent } from './mostrar-obra/mostrar-obra.component';
import { ObrasComponent } from './obras.component';

const routes: Routes = [
  {
    path: '',
    component: ObrasComponent
  },
  {
    path: 'obras/criar',
    component: CriarEditarObraComponent,
  },
  {
    path: 'obras/editar/:id',
    component: CriarEditarObraComponent,
  },
  {
      path: 'obras/:id',
      component: MostrarObraComponent
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObrasRoutes { };
