import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {

  miFormulario: FormGroup = this.fb.group({
    //Rellenamos los campos email y pass para hacer pruebas
    name: ['Aaron', [Validators.required, Validators.minLength(3)]],
    surname: ['Baila', [Validators.required, Validators.minLength(3)]],
    id: ['1', [Validators.required,]],
    email: ['test1@test.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  });
  constructor(private fb: FormBuilder,
    private router: Router) { }

  registro() {
    console.log(this.miFormulario.value);
    // console.log(this.miFormulario.valid);

    this.router.navigateByUrl('/dashboard');
  }

}
