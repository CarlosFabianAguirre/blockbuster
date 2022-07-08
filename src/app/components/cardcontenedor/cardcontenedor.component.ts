import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardcontenedor',
  templateUrl: './cardcontenedor.component.html',
  styleUrls: ['./cardcontenedor.component.scss']
})
export class CardcontenedorComponent implements OnInit {

  constructor() { }
    viajes=[
      {
        imagen: "assets/viajes/santorini.jpg",
        categoria:"vuelos",
        titulo:"viaja a australia",
        contenido:"loren ipsun ",
        destacado:true,
        precio:456,
    
      },
      {
        imagen: "assets/viajes/polinesia.jpg",
        categoria:"vuelos",
        titulo:"viaja a brasil",
        contenido:"loren ipsun ",
        destacado:false,
        precio:10000,
    
      },
      {
        imagen: "assets/viajes/cancun.jpg",
        categoria:"vuelos",
        titulo:"viaja a cancun",
        contenido:"loren ipsun ",
        destacado:true,
        precio:3
    
      },
      {
        imagen: "assets/viajes/egipto.jpg",
        categoria:"vuelos",
        titulo:"viaja a egipto",
        contenido:"loren ipsun ",
        destacado:false,
        precio:43434
    
      }
    ]
   

   // imagen="assets/viajes/polinesia.jpg"
    //categoria="vuelos"
    //titulo="viaja a polinesia"
    //contenido="loren ipsun "
    //destacado=true
   // precio=78787
    


  ngOnInit(): void {
  }

}
