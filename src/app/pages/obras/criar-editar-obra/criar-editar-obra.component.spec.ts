/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CriarEditarObraComponent } from './criar-editar-obra.component';

describe('CriarEditarObraComponent', () => {
  let component: CriarEditarObraComponent;
  let fixture: ComponentFixture<CriarEditarObraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarEditarObraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarEditarObraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
