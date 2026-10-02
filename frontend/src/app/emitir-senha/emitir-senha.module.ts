import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { EmitirSenhaPageRoutingModule } from './emitir-senha-routing.module';

import { EmitirSenhaPage } from './emitir-senha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmitirSenhaPageRoutingModule
  ],
  declarations: [EmitirSenhaPage]
})
export class EmitirSenhaPageModule {}
