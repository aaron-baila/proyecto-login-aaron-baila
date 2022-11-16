import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/login/login.component';
// import { RegisterComponent } from './pages/register/register.component';
import { UsersPageComponent } from '../protected/users-page/users-page.component';

const routes: Routes = [

  {
    path: '',
    component: MainComponent,
    children: [
      //El redirect login sirve para si salimos del dashboard y ponemos cualquier cosa
      //este no nos deje volver a entrar sin pasar por el login sin autentificarnos

      //AUTH
      { path: 'login', component: LoginComponent },
      // { path: 'registro', component: RegisterComponent },
      // { path: 'user', component: UsersPageComponent },
      { path: '**', redirectTo: 'login' },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
