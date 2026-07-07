import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  imports: [ReactiveFormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {
  router = inject(Router);
  
  formularioRegistro = new FormGroup({
    nombre : new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    apellido : new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email : new FormControl('', [Validators.required, Validators.email]),
    nombreUsuario : new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    //8 Caracteres, una Mayuscula y una Minuscula.
    password : new FormControl('', [Validators.required, Validators.minLength(8)]),
    repetirPassword : new FormControl('', [Validators.required, this.validarPassword]),
    fechaNacimiento : new FormControl('', [Validators.required, this.validarFechaNacimiento]),
    descripcion : new FormControl('', [Validators.required, Validators.minLength(5)]),
    //Switcheo a admin de ser necesario
    perfil : new FormControl('usuario'),
    fotoPerfil: new FormControl<File | null>(null, Validators.required)
  })

    constructor() {
    // Forzamos la revalidación del campo repetirContrasenia si cambia contrasenia
    this.formularioRegistro.get('password')?.valueChanges.subscribe(() => {
      this.formularioRegistro.get('repetirPassword')?.updateValueAndValidity();
    });
  }
  
  validarPassword(control: AbstractControl): ValidationErrors | null {
    if (!control.parent) return null;
    const contrasenia = control.parent?.get('password')?.value;
    const repetir = control.value;
    return contrasenia === repetir ? null : { validarPassword: true };
  }

  //Validar mayoria de edad - o si tengo 5 años?
  validarFechaNacimiento(control: AbstractControl) : ValidationErrors | null {
    if(!control.value) return null;
    const fNacimiento = new Date (control.value);
    const hoy = new Date()
    return fNacimiento > hoy ? {fechaInvalida : true} : null;
  }
   
  get nombre(){
    return this.formularioRegistro.get('nombre');
  }
  get nombreUsuario(){
    return this.formularioRegistro.get('nombreUsuario');
  }
  get apellido(){
    return this.formularioRegistro.get('apellido');
  }
  get email(){
    return this.formularioRegistro.get('email');
  }
  get password(){
    return this.formularioRegistro.get('password');
  }
  get repetirPassword(){
    return this.formularioRegistro.get('repetirPassword');
  }
  get descripcion(){
    return this.formularioRegistro.get('descripcion');
  }
  get fechaNacimiento(){
    return this.formularioRegistro.get('fechaNacimiento');
  }
  get fotoPerfil(){
    return this.formularioRegistro.get('fotoPerfil');
  }

obtenerMensajeError(nombreControl: string){
  const control = this.formularioRegistro.get(nombreControl);
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
     
    case control.hasError('validarPassword'):
        return `Las contraseñas no coinciden`
    
    default:
      return '';
    }
}

  crearCuenta(){
    //Darle implementacion
  }

}
