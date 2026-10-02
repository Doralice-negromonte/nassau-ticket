import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { LoginAtendentePageRoutingModule } from './login-atendente-routing.module';

import { LoginAtendentePage } from './login-atendente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginAtendentePageRoutingModule
  ],
  declarations: [LoginAtendentePage]
})
export class LoginAtendentePageModule {}
