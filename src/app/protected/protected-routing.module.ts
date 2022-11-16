import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersPageComponent } from './users-page/users-page.component';

const routes: Routes = [

  {
    path: '',
    children: [
      // { path: '', component: DashboardComponent },
      { path: 'users', component: UsersPageComponent },
      //El redirect vacio sirve para si estamos dentro del dashboard y ponemos cualquier cosa
      //este siga dentro del dashboard. 
      //EJ: dashboard/patata no redirege a dashboard

      // DASHBOARD 
      { path: '**', redirectTo: '' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
