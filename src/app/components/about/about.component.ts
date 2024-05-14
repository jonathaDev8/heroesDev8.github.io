import { Component } from '@angular/core';

//Como dice aqui debes referenciarme
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  
  //entrar component -> inicia()
  constructor(){
    console.log("About cargado SIIIIIIIi");
  }


}
