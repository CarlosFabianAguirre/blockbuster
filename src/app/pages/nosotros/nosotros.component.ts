import { Component, OnInit } from '@angular/core';
import { GatitosService } from 'src/app/services/gatitos.service';
@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})

export class NosotrosComponent implements OnInit {

  constructor(
    private gatitoService :GatitosService
  ) { }

  data:any;

  mostrarInfoGatitos(){
    this.gatitoService.getGatitosInfo().subscribe(respuesta=>{
      console.log(respuesta);
      this.data = respuesta;

    })
  }

  ngOnInit(): void {
    this.mostrarInfoGatitos()
  }

}
