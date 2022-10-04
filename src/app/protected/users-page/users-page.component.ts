import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/auth/services/users.service';

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

  constructor(private usersService: UsersService) {

    this.usersService.dameUsers().subscribe((datos) => {
      this.users = datos;
      console.log(this.users);
    })
  }
}
