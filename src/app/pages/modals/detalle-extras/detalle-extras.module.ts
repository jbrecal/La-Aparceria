import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleExtrasPageRoutingModule } from './detalle-extras-routing.module';

import { DetalleExtrasPage } from './detalle-extras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleExtrasPageRoutingModule
  ],
  declarations: [DetalleExtrasPage]
})
export class DetalleExtrasPageModule {}
