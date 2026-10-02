import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginAtendentePage } from './login-atendente.page';

const routes: Routes = [
  {
    path: '',
    component: LoginAtendentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginAtendentePageRoutingModule {}
