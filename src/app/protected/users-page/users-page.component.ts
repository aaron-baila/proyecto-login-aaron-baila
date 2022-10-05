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
      icon: 'warning',
      showDenyButton: true,
      confirmButtonText: 'Eliminar',
      denyButtonText: `No eliminar`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.usersService.eliminarUser(id);
        // salert.fire('Eliminado!', name, 'success');
        salert.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Eliminado correctamente',
          showConfirmButton: false,
          timer: 1500
        })
      }
      //El set time out es para que espere un segundo antes de recargar porque si no no datiempo a hacer la eliminacion
      setTimeout(function () {
        window.location.reload();
      }, 1000);
    })


  }
}
