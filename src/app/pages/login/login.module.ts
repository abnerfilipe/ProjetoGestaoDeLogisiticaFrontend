import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { NgbAlert, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    NgbAlertModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
