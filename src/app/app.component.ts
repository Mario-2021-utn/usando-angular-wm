import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
}
