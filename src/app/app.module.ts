import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterLink, RouterLinkActive} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';

//Rutas
import {APP_ROUTING} from './app.routes'
//se debe poner en la parte de imports
//Luego debemos ir al app.component.html y decirle qué objeto queremos que se renderise

//Servicios
import {HeroesService} from './components/services/heroes.service'

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BusquedaHeroeComponent } from './components/busqueda-heroe/busqueda-heroe.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { BusquedaHeroeTarjetaComponent } from './components/busqueda-heroe-tarjeta/busqueda-heroe-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BusquedaHeroeComponent,
    HeroeTarjetaComponent,
    BusquedaHeroeTarjetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
