import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toptem',
  templateUrl: './toptem.component.html',
  styleUrls: ['./toptem.component.scss']
})
export class ToptemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
  topTen = [
    {
      image: '/assets/rock/misfits.jpg',
      alt: 'Misfits puesto 1',
      title: 'Misfits puesto 1',
    }, {
      image: '/assets/rock/motorhead.jpg',
      title: 'Motorhead puesto 2',
      alt: 'Motorhead puesto 2',
    }, {
      image: '/assets/rock/davidbowie.jpg',
      title:'davidbowie puesto 3',
      alt: 'davidbwie puesto 3',
    }, {
      image: '/assets/rock/ramones.jpg',
      title: 'Ramones puesto 4',
      alt: 'Ramones puesto 4'
    }, {
      image: '/assets/rock/pulsion.jpg',
      title: 'Pulsion puesto 5',
      alt: 'pulsion puesto 5'
    }, {
      image: '/assets/rock/theclash.jpg',
      title: 'The Clash puesto 6',
      alt: 'the Clash puesto 6'
    },  {
      image: '/assets/rock/michael.jpg',
      title: 'Michael Jackson puesto 7',
      alt: 'Michael Jackson puesto 7',
      
    },  {
      image: '/assets/rock/kiss.jpg',
      title: 'Kiss puesto 8',
      alt: 'Kiss puesto 8'
    }
];

}




