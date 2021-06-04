/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MostrarAlmoxarifadoComponent } from './mostrar-almoxarifado.component';

describe('MostrarAlmoxarifadoComponent', () => {
  let component: MostrarAlmoxarifadoComponent;
  let fixture: ComponentFixture<MostrarAlmoxarifadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarAlmoxarifadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarAlmoxarifadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
