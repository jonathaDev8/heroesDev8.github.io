import { Component } from '@angular/core';
import { Router } from '@angular/router';
//Como dice aqui debes referenciarme

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  
  //ejecuta solo la primera vez
  constructor(private router:Router){
    console.log("buscador listo!!!");
  }

  find(heroeBuscado:string){
     this.router.navigate(['search', heroeBuscado]);
  }
}
