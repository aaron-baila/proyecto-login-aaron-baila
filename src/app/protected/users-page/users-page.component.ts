import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/auth/services/users.service';
import salert from 'sweetalert2';
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

  eliminar(id: string, name: string) {
    console.log(id);

    salert.fire({
      title: 'Seguro que quieres eliminar a ' + name,
      showDenyButton: true,
      confirmButtonText: 'Eliminar',
      denyButtonText: `No eliminar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        salert.fire('Eliminado!', '', 'success')
      }
    })
  }
}
