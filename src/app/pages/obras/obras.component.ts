import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-obras',
  templateUrl: './obras.component.html',
  styleUrls: ['./obras.component.scss']
})
export class ObrasComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;

  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Inicio' }, { label: 'Obras', active: true }];
  }
}
