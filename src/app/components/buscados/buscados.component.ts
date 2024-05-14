import { Component } from '@angular/core';
import { Heroes, HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-buscados',
  templateUrl: './buscados.component.html',
  styleUrl: './buscados.component.css'
})
export class BuscadosComponent {

  heroesEncontrados:Heroes[]=[];
  n:number=0;

  constructor(private router:Router, private ActivatedRoute:ActivatedRoute, private _heroesService:HeroesService){
    console.log("Buscando...");
    this.ActivatedRoute.params.subscribe(params => {
      
      this.heroesEncontrados = this._heroesService.filtrar(params['id']);
      this.n = this.heroesEncontrados.length;

      //pruebita jsjsjjsj (funciona sjjsjjs)
      console.log("TEXTO : " + params['id']);
      console.log(this.heroesEncontrados);
      console.log(this.n);
    });
  }
  
  //yamismo jsjsjjs
  verHeroe(idx:number){
    console.log(idx);
    this.router.navigate(['heroe', idx]);
  }

}
