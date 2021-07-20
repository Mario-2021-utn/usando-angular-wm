import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  constructor() { }
  
  saludar(){
    alert("Oh, hiciste click!");
  }

  title="Seccion Nosotros";
  subtitle="Quienes Somos";
  mostrar = true;

  toggleInformation() {
    // invertimos el estado

    this.mostrar = !this.mostrar;
  }
  
  ngOnInit(): void {
  }

}
