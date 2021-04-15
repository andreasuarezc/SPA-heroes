import { Component, OnInit, Input } from '@angular/core';
import { Router} from '@angular/router'

@Component({
  selector: 'app-busqueda-heroe-tarjeta',
  templateUrl: './busqueda-heroe-tarjeta.component.html'
})
export class BusquedaHeroeTarjetaComponent implements OnInit {
  @Input() heroe: any ={};
  @Input() index: number=0;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  verHeroe(){
    console.log(this.index)
    this.router.navigate(['/heroe', this.index])
  }
}
