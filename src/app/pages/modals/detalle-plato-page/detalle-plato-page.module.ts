import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallePlatoPagePageRoutingModule } from './detalle-plato-page-routing.module';

import { DetallePlatoPagePage } from './detalle-plato-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallePlatoPagePageRoutingModule
  ],
  declarations: [DetallePlatoPagePage]
})
export class DetallePlatoPagePageModule {}
