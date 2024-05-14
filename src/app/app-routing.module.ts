import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//importo los componentes y los guardo en variables cualquiera
import { HomeComponent } from './components/home/home.component'
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadosComponent } from './components/buscados/buscados.component';

//ahora declaro rutas (con su identificador) y el component asociado
//en la const routes
const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'heroes', component: HeroesComponent},
  {path:'about', component: AboutComponent},
  {path:'heroe/:id', component: HeroeComponent},// (/:id) despues de la barra cualquier cosa (id) es como una variable almacenadora en la misma ruta
  {path:'search/:id', component: BuscadosComponent},
  {path: '**', pathMatch:'full', redirectTo:'home'}
];

//se carga la const routes con todas las rutas
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
