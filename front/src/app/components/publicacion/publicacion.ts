import { Component } from '@angular/core';

@Component({
  selector: 'app-publicacion',
  imports: [],
  templateUrl: './publicacion.html',
  styleUrl: './publicacion.css',
})
export class Publicacion {
  titulo: string = '';
  mensaje: string = '';
  imgSrc: string = '';
  contadorMeGusta: number = 0;
  comentario: string = '';

  //Verla en grande con comentarios. Escribir comentarios. Permitir editar comentarios. 
}
