import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './features/login/login.component';
import {ButtonComponent} from '../../common/components/button/button.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ButtonComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
