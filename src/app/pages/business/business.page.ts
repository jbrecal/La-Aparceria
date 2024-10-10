import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business',
  templateUrl: './business.page.html',
  styleUrls: ['./business.page.scss'],
})

export class BusinessPage implements OnInit {
  banner_4_tarjeta: { img: string, descripcion: string }[] = [
    {
      img: 'assets/iconos/productividad.png',
      
      descripcion: 'Aumenta la productividad de tus trabajadores.'
    },
    {
      img: 'assets/iconos/retencion.png',
      
      descripcion: 'Incrementa la retención de talento de tu empresa'
    },
    {
      img: '/assets/iconos/presencialidad.png',
     
      descripcion: 'Aumenta la presencialidad de tu oficina.'
    },
    {
      img: '/assets/iconos/comerJuntos.png',
      
      descripcion: 'Comer juntos fortalece las relaciones entre trabajadores'
    }

  ]

  constructor() { }

  ngOnInit() {
  }

}
