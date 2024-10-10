import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';

const routes: Routes = [

  {
    path:'',
    component:TabsPage,
    children:[
      {
        path:'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path:'loggin',
        loadChildren: () => import('../log-in/log-in.module').then(m => m.LogInPageModule)
      },
      {
        path:'order',
        loadChildren: () => import('../order/order.module').then(m => m.OrderPageModule)
      }, 
      {
        path:'cart',
        loadChildren: () => import('../cart/cart.module').then(m => m.CartPageModule)
      },
      {
        path:'register',
        loadChildren: () => import('../register/register.module').then(m => m.RegisterPageModule)
      },
      {
        path:'how',
        loadChildren: () => import('../how/how.module').then(m => m.HowPageModule)
      },
      {
        path:'business',
        loadChildren: () => import('../business/business.module').then(m => m.BusinessPageModule)
      },
      {
        path:'who',
        loadChildren: () => import('../who/who.module').then(m => m.WhoPageModule)
      },
      {
        path:'faq',
        loadChildren: () => import('../faq/faq.module').then(m => m.FaqPageModule)
      },
      {
        path:'write',
        loadChildren: () => import('../write/write.module').then(m => m.WritePageModule)
      },
      
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
