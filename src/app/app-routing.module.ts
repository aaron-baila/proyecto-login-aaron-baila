import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './auth/pages/main/main.component';
// import { ValidarTokenGuard } from './guards/validar-token.guard';
import { DashboardComponent } from './protected/dashboard/dashboard.component';

const routes: Routes = [
  //Importacion de rutas
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    //DASHBOARD
    path: 'dashboard',
    loadChildren: () => import('./protected/protected.module').then(m => m.ProtectedModule),
    // canActivate: [ValidarTokenGuard],
    // canLoad: [ValidarTokenGuard]

  },
  {
    path: '**',
    redirectTo: 'auth'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
