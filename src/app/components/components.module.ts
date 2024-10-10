import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { PopinfoComponent } from './popinfo/popinfo.component';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [
    MenuComponent,
    PopinfoComponent,
    FooterComponent,
    
  ],
  exports:[
    MenuComponent,
    PopinfoComponent,
    FooterComponent,
    
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentsModule { }
