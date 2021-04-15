import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router'
//El input le va decir a Angular que una propiedad que quiero especificar va ser recibida desde afuera.
@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  //Esto quiere decir que la propiedad Input puede venir de afuera
  //Al usar este input, me habilita que donde use la etiqueta html de este componente, en este caso<app-heore-tarjeta>
  //yo puedo mandarle argumentos desde el padre hacia el hijo, utilizando el mismo nombre que le puse a la propiedad
  @Input () heroe: any ={};
  @Input () index : number=0;

  @Output () heroeSeleccionado: EventEmitter<number>;
  constructor(private router: Router,) { 
              this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  //Para emitir un evento del hijo hacia el padre, es necesario tener las clases Output y EventEmitter
  //
  verHeroe(){
    // console.log(this.index)
    // this.router.navigate(['/heroe', this.index])
    this.heroeSeleccionado.emit(this.index)
  }

}
