import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  breadCrumbItems: Array<{}>;

  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Inicio' }, { label: 'Usuarios', active: true }];
  }
}
