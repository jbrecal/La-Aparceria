import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleExtrasPage } from './detalle-extras.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleExtrasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleExtrasPageRoutingModule {}
