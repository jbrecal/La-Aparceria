import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhoPageRoutingModule } from './who-routing.module';

import { WhoPage } from './who.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [WhoPage]
})
export class WhoPageModule {}
