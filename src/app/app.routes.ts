import { Component } from '@angular/core'
import{RouterModule, Routes} from '@angular/router';
//Todas las rutas que se necesiten para la app deben estar importadas acá
import{HomeComponent} from './components/home/home.component';
import {HeroesComponent} from './components/heroes/heroes.component';
import {AboutComponent} from './components/about/about.component';
import {HeroeComponent} from './components/heroe/heroe.component'
import{BusquedaHeroeComponent} from './components/busqueda-heroe/busqueda-heroe.component'

const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'heroes', component: HeroesComponent},
    {path: 'about', component: AboutComponent},
    //lleva el id para reconocer de cuál heroe debe mostrar la informacion
    {path: 'heroe/:id', component: HeroeComponent},
    {path: 'busqueda-heroe/:termino', component: BusquedaHeroeComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'},
];
//Es más eficiente y soportado por más navegadores web el uso del #
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});

//Para decirle a Angular que use estas rutas debemos ir aap.module y hacer las respectivas importaciones