import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './auth/pages/main/main.component';
// import { ValidarTokenGuard } from './guards/validar-token.guard';

const routes: Routes = [
  //Importacion de rutas
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    //DASHBOARD
    path: 'menu',
    // component: MainComponent,
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
