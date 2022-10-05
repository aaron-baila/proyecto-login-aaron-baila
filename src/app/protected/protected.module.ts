import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersPageComponent } from './users-page/users-page.component';
// import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    DashboardComponent,
    UsersPageComponent,
    // NavbarComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule
  ]
})
export class ProtectedModule { }
