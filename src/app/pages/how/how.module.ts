import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HowPageRoutingModule } from './how-routing.module';

import { HowPage } from './how.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HowPageRoutingModule,
    ComponentsModule
  ],
  declarations: [HowPage]
})
export class HowPageModule {}
