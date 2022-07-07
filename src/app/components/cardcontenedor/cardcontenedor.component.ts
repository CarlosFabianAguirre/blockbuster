import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardcontenedor',
  templateUrl: './cardcontenedor.component.html',
  styleUrls: ['./cardcontenedor.component.scss']
})
export class CardcontenedorComponent implements OnInit {

  constructor() { }
    imagen="assets/viajes/santorini.jpg"
    categoria="vuelos"
    titulo="viaja a australia"
    contenido="loren ipsun "
    destacado=true
    precio=456
    


  ngOnInit(): void {
  }

}
