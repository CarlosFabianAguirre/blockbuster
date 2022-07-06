import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }
  imagen  ="assets/viajes/santorini.jpg";
  categoria= "paquete";
  titulo ="hola mundo";
  contenido= "loren blah";
  destacado= true;
  precio= 56787;

  ngOnInit(): void {
  }

}
