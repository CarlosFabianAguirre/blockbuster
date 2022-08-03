import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toptem',
  templateUrl: './toptem.component.html',
  styleUrls: ['./toptem.component.scss']
})
export class ToptemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  imgCollection: Array<object> = [
    {
      image: '/assets/rock/misfits.jpg',
      thumbImage: '/assets/rock/misfits.jpg',
      alt: 'imagen Misfits',
      title: 'Misfits',
    }, {
      image: '/assets/rock/motorhead.jpg',
      thumbImage: "/assets/rock/motorhead.jpg",
      title: 'Motorhead',
      alt: 'imagen Motorhead'
    }, {
      image: '/assets/rock/davidbowie.jpg',
      thumbImage: '/assets/rock/davidbowie.jpg',
      title: 'Davidbowie',
      alt: 'imagen davidbowie'
    }, {
      image: '/assets/rock/ramones.jpg',
      thumbImage: '/assets/rock/ramones.jpg',
      title: 'Ramones',
      alt: 'Imagen ramones'
    }, {
      image: '/assets/rock/pulsion.jpg',
      thumbImage: '/assets/rock/pulsion.jpg',
      title: 'Pulsion',
      alt: 'Image 5'
    }, {
      image: '/assets/rock/theclash.jpg',
      thumbImage: '/assets/rock/theclash.jpg',
      title: 'The Clash',
      alt: 'imagen the clash'
    },  {
      image: '/assets/rock/michael.jpg',
      thumbImage: '/assets/rock/michael.jpg',
      title: 'Michael Jackson',
      alt: 'Imagen Michael Jackson',
      
    },  {
      image: '/assets/rock/michael.jpg',
      thumbImage: '/assets/rock/kiss.jpg',
      title: 'Kiss',
      alt: 'Imagen Kiss'
    }
];

}


