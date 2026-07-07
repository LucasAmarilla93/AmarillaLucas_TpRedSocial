import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  router = inject(Router);

  formularioLogin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  get email() {
    return this.formularioLogin.get('email');
  }

  get password() {
    return this.formularioLogin.get('password');
  }

  obtenerMensajeError(nombreControl: string){
  const control = this.formularioLogin.get(nombreControl);
  if (!control || !control.errors) return '';

  switch (true) {
    case control.hasError('required'):
      return `El campo ${nombreControl} es requerido`;

    case control.hasError('minlength'):
      return `Debe tener al menos ${control.getError('minlength').requiredLength} caracteres`
  
    case control.hasError('maxlength'):
      return `Debe tener al menos ${control.getError('maxlength').requiredLength} caracteres`
      
    case control.hasError('email'):
        return `Correo electronico invalido`

    default:
      return '';
    }
  }

  loguearse(){}
}
