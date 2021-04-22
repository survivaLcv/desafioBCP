import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgenciaComponent } from './agencias/agencia/agencia.component';
import { DetalleAgenciaComponent } from './agencias/detalle-agencia/detalle-agencia/detalle-agencia.component';

const routes: Routes = [
 {
   path: '',
   component: AgenciaComponent
 },
 {
   path: 'detalle/:index',
   component: DetalleAgenciaComponent
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
