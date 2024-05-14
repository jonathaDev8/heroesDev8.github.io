import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {

  //entrar component -> inicia()
  constructor(private activatedRouter: ActivatedRoute, private _heroesService: HeroesService){
    this.activatedRouter.params.subscribe(params => {
      this.heroe = _heroesService.getHeroe(params['id']);
      console.log("POS = " + params['id']);
      console.log(this.heroe);
    });
  }

  //Objeto de cualquier tipo (any)
  heroe:any = {};

}
