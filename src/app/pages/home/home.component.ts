import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  title = 'gatitos';
  subtitle = 'Todo lo que necesitas saber'

  cards = [ 
    {
      imagen : "/assets/images/autocaro.jpg",
      categoria: "Alquiler de Autos",
      titulo: "Australia",
      precio: 63543
    },
    {
      imagen : "/assets/images/autoblanco.jpg",
      categoria: "Alquiler de Autos",
      titulo: "Brasil",
      precio: 3500
    },
    {
      imagen : "/assets/images/falcon.jpg",
      categoria: "Alquiler de Autos",
      titulo: "Argentina",
      precio: 4600
    },
    {
      imagen : "/assets/images/descarga.jfif",
      categoria: "Alquiler de Autos",
      titulo: "Mexico",
      precio: 16000
    }
  ]

  ngOnInit(): void {
  }

}
