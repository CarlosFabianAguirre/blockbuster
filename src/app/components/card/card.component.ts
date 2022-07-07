import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
//@input () indica que este dato se va a recibir desde el componente padre
//podemos declarar un valor predeterminado usando el =  
// la | es un or ,, seria que la categoria puede recibir un string o no puede recibir nada
constructor() { }
  @Input() imagen?  ="assets/viajes/santorini.jpg";
  @Input() categoria: string | undefined;
  @Input() titulo : string | undefined;
  @Input() contenido:string | undefined;
  @Input() destacado= true;
  @Input() precio: Number | undefined;
  numeros = [45,64,23,54,89,55,];

  ngOnInit(): void {
  }

}
