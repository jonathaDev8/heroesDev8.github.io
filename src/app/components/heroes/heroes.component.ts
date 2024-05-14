import { Component } from '@angular/core';
import { Heroes, HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

//Como dice aqui debes referenciarme
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})

export class HeroesComponent {
  
  //entrar component -> inicia()
  constructor(private router:Router, private _heroesService:HeroesService) {
    console.log("heroes en marcha...");
  }

  //EDD -> interface Heroes
  heroes:Heroes[]=[];


  //entrar component -> inicia()
  ngOnInit():void{
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

  //redirige -> 'heroe' & envia (index)
  verHeroe(idx: number){
    console.log(idx);
    this.router.navigate(['heroe', idx]); //(/heroe)
  }
  

}
