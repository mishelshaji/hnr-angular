import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './features/login/login.component';
import {ButtonComponent} from '../../common/components/button/button.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputFieldComponent} from '../../common/components/input-field/input-field.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    InputFieldComponent
  ]
})
export class AuthModule { }
