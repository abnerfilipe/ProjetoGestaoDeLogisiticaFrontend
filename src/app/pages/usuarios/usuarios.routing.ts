import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CriarEditarUsuariosComponent } from './criar-editar-usuarios/criar-editar-usuarios.component';
import { MostrarUsuarioComponent } from './mostrar-usuario/mostrar-usuario.component';
import { UsuariosComponent } from './usuarios.component';

const routes: Routes = [
  {
    path: '',
    component: UsuariosComponent
  },
  {
    path: 'usuarios/criar',
    component: CriarEditarUsuariosComponent,
  },
  {
    path: 'usuarios/editar/:id',
    component: CriarEditarUsuariosComponent,
  },
  {
      path: 'usuarios/:id',
      component: MostrarUsuarioComponent
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutes { };
