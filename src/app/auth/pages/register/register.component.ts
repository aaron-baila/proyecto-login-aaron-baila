import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

import salert from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {

  miFormulario: FormGroup = this.fb.group({
    //Rellenamos los campos email y pass para hacer pruebas
    name: ['', [Validators.required, Validators.minLength(3)]],
    surname: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService) { }

  registro() {

    // Creamos nuestro ok 
    let ok: boolean;
    // let prueba: string = "prueba";
    // console.log(this.miFormulario.value);
    const { name, surname, email, password } = this.miFormulario.value;

    this.authService.registro(name, surname, email, password)
      .subscribe(resp => {
        console.log("Respuesta = " + resp);
        //si respuesta undefined ERROR

        if (resp) {
          ok = true;
          salert.fire('Info',  email + " \nRegistrado correctamente", 'info');
        } else {
          ok = false;
          salert.fire('Error', resp, 'error');
        }

        if (ok) {
          this.router.navigateByUrl('/dashboard')
        }
        // if (resp) {
        //   console.log("andale");
        //   ok = true;
        //   salert.fire('OK', 'Todo ok');
        // } else {
        //   //No se ha podido iniciar sesion
        //   ok = false;
        //   // alert("User email not found or password invalid");
        //   salert.fire('Error', resp, 'error');
        // }

        // if (ok) {
        //   console.log("andale");
        //   this.router.navigateByUrl('/dashboard')
        // } else {
        //   //Mensaje error
        // }
      });

    // this.router.navigateByUrl('/dashboard');
  }

}
