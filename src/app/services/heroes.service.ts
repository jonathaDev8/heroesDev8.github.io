import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})

//Inicia Angular -> inicia() jsjsjjsjs!!!!! SUPERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRSUPEERRRRRRRRRRRRRRRRRRR
//1 SOLO OBJETO (UNICO)
//N REFERENCIAS A ESTE
export class HeroesService {
  
  
  //Inicia Angular -> Inicia()jsjjssjsj
  constructor() { 
    console.log("Servicio listo para usar!!!");
  }

  //vector (EDD) con info de data.txt (heroes)
  //se la declara con una interface a seguir tipo vector
  //y empieza a almacenarse los elementos
  private heroes:Heroes[] = [
    {
      nombre: "Aquaman",
      bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
      img: "assets/img/aquaman.png",
      aparicion: "1941-11-01",
      casa:"DC"
    },
    {
      nombre: "Batman",
      bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
      img: "assets/img/batman.png",
      aparicion: "1939-05-01",
      casa:"DC"
    },
    {
      nombre: "Daredevil",
      bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
      img: "assets/img/daredevil.png",
      aparicion: "1964-01-01",
      casa: "Marvel"
    },
    {
      nombre: "Hulk",
      bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
      img: "assets/img/hulk.png",
      aparicion: "1962-05-01",
      casa:"Marvel"
    },
    {
      nombre: "Linterna Verde",
      bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
      img: "assets/img/linterna-verde.png",
      aparicion: "1940-06-01",
      casa: "DC"
    },
    {
      nombre: "Spider-Man",
      bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
      img: "assets/img/spiderman.png",
      aparicion: "1962-08-01",
      casa: "Marvel"
    },
    {
      nombre: "Wolverine",
      bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
      img: "assets/img/wolverine.png",
      aparicion: "1974-11-01",
      casa: "Marvel"
    }
  ];

  //yo solo retorno esta EDD cuando la necesiten externamente
  getHeroes(){
    return this.heroes;
  }

  //retorno un elemento en la posicion dada
  getHeroe(idx:number){ 
    return this.heroes[idx];
  }

  
  aux:Heroes[] = this.heroes.concat();
  b:number = this.aux.length - 1; 
  a:number = 0; 
  
  //retorno un subArray con las coincidencias segun la clave dada
  filtrar(clave:string){
    if(clave.toLowerCase() !== "" || clave !== null){ 
      while(this.b > -1 && this.a < clave.length){
        if(clave.toLowerCase().charAt(this.a) !== this.aux[this.b].nombre.toLowerCase().charAt(this.a)){
            this.aux.splice(this.b, 1);
        }
        this.b--;
        if(this.b === -1){
          this.b = this.aux.length - 1;
          this.a++;
        }
      }
    }
    return this.aux; 
  }
  //return this.heroes.filter(heroe => (heroe.nombre.toLowerCase() === clave.toLowerCase()));
  
}

//Toda clase q me llame, le obligo usar mis atributos
//soy un modelo a seguir obligadamente
//INTERFACE (tambien me deberan importar externamente)
export interface Heroes{
  nombre:string;
  bio:string;
  img:string;
  aparicion:string;
  casa:string;
}


