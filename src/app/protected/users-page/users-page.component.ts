import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styles: [
  ]
})
export class UsersPageComponent {

  users: any = [];
  name: string = '';
  surname: string = '';
  email: string = '';
  id: string = '';

  constructor(private authService: AuthService) {

    this.authService.dameUsers().subscribe((datos) => {
      this.users = datos;
      console.log(this.users);
    })

    
  }
}
