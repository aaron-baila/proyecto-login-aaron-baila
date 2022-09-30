import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [

  {
    path: '',
    children: [
      { path: '', component: DashboardComponent },
      //El redirect vacio sirve para si estamos dentro del sahboard y ponemos cualquier cosa
      //este siga dentro del dashboard. 
      //EJ: dashboard/patata no redirege a dashboard
      { path: '**', redirectTo: '' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
