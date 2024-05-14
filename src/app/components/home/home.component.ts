import { Component } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

//Como dice aqui debes referenciarme
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  //entrar component -> inicia()
  constructor(private HeroesService:HeroesService){
    console.log("Home en ejecución");
  }


}
