import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  miFormulario: FormGroup = this.fb.group({
    //Rellenamos los campos email y pass para hacer pruebas
    email: ['test1@test.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }


  login() {
    // Creamos nuestro ok 
    let ok: boolean;
    // let prueba: string = "prueba";
    // console.log(this.miFormulario.value);
    const { email, password } = this.miFormulario.value;

    this.authService.login(email, password)
      .subscribe(resp => {

        if (resp) {
          ok = true;
        } else {
          ok = false;
        }

        if(ok){
          this.router.navigateByUrl('/dashboard')
        }else{
          //Mensaje error
        }

        // console.log("El resp dice = " + resp);
        console.log(ok);
      });
  }

}
