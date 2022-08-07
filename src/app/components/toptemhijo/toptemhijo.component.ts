import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toptemhijo',
  templateUrl: './toptemhijo.component.html',
  styleUrls: ['./toptemhijo.component.scss']
})
export class ToptemhijoComponent implements OnInit {

  constructor() { }
  toptems = [
    {
      imagen: "assets/ranking/acideaters.jpg",
      alt: 'Ramones 1',
      titulo: 'Ramones 1',
    }, {
      imagen: "assets/ranking/depechemode.jpg",
      alt: 'depeche mode 2',
      titulo: 'depeche mode 2',
    }, {
      imagen: "assets/ranking/dragonkoy.jpg",
      alt:'dragonkoy 3',
      titulo:'dragonkoy 3',
    }, {
      imagen: "assets/ranking/elvis.jpg",
      alt: 'elvis 4',
      titulo: 'elvis 4',
    }, {
      imagen: "assets/ranking/gunsandroses.jpg",
      alt: 'guns and roses 5',
      titulo: 'guns and roses 5',
    }, {
      imagen: "assets/ranking/ledzeppelin.jpg",
      alt: 'ledzeppelin 6',
      titulo: 'ledzeppelin 6',
    },  {
      imagen: "assets/ranking/pinkfloyd.jpg",
      alt: 'pinkfloyd 7',
      titulo: 'pinkfloyd 7',
    },  {
      imagen: "assets/ranking/queen.jpg",
      alt:'queen  8',
      titulo:'queen  8',
    },  {
      imagen: "assets/ranking/ratablanca.jpg",
      alt: 'ratablanca 9',
      titulo: 'ratablanca 9',
    },  {
      imagen: "assets/ranking/ravishankar.jpg",
      alt: 'ravishankar 10',
      titulo: 'ravishankar 10'
      
    },  

  ];
 

  ngOnInit(): void {
  }

}
