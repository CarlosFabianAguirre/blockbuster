import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-toptemhijito',
  templateUrl: './toptemhijito.component.html',
  styleUrls: ['./toptemhijito.component.scss']
})
export class ToptemhijitoComponent implements OnInit {

  constructor() { }

  
  // @Input() indica que este dato se va a recibir desde el componente padre
  // podemos declarar un valor predeterminado usando el =
  @Input() imagen? = "assets/ranking/acideaters.jpg";

  // La | es un OR
  // categoria puede recibir un string O puede no recibir nada
  @Input() titulo: string | undefined;
  @Input() alt: string | undefined;
  
  
  ngOnInit(): void {
  }
  


}
