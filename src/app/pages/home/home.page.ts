import { Component, OnInit } from '@angular/core';
;
import { Observable } from 'rxjs/internal/Observable';
import { Componente } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  isModalOpen = false;

  banner_2_tarjeta: { img: string, titulo: string, descripcion: string }[] = [
    {
      img: 'assets/iconos/saludable.png',
      titulo: 'Comida Saludable',
      descripcion: 'Ofrecemos comida casera y mediterránera preparada a diario por nuestros chefs. Nuestros menús varían cada semana y adaptamos nuestra carta con productos de temporada.'
    },
    {
      img: 'assets/iconos/bolsa-en-mano.svg',
      titulo: 'Envíos a diario',
      descripcion: 'Cocinamos y entregammos a diario los mejores menús en tu empresa. Servicio de cantina virtual'
    },
    {
      img: '/assets/iconos/movil-pedido.svg',
      titulo: 'Fácil y Sin Esfuerzo',
      descripcion: '¿Tienes cuenta de empresa? Elige tu menú antes de las 11h o planifica tus menús para toda la semana.'
    },
    {
      img: '/assets/iconos/oven.png',
      titulo: 'Calienta y Disfruta',
      descripcion: 'Recibirás tu plato listo para calentar y disfrutar'
    }

  ]

  banner_4_tarjeta: { img: string, titulo: string, subtitulo: string, descripcion: string }[] = [
    {
      img: '/assets/iconos/saludable.png',
      titulo: 'Saludable',
      subtitulo: 'Comida Casera y Mediterranea de Temporada',
      descripcion: 'Nuestro equipo trabaja a diario para crear recetas variadas con ingredientes de proximidad y para que cada uno de los platos que sale de nuestra cocina sea delicioso. La calidad la construimos entre todos y la cuidamos a lo largo de todo el proceso. Ingrdientes frescos y productos de temporada'
    },
    {
      img: '/assets/iconos/inclusion.png',
      titulo: 'Inclusión Social',
      subtitulo: 'Juntos somos mejores',
      descripcion: 'Solidaridad e inclusión social son una parte muy importante de enentedr nuestro proyecto y definen como llevamos adelante nuestro trabajo'
    },
    {
      img: '/assets/iconos/sostenible.png',
      titulo: 'Sostenible',
      subtitulo: 'Reduce. Reusa. Recicla',
      descripcion: 'El como hacemos las cosas es muy importante. En toda nuestra cadena de valor intentamos minimizar el impacto a nuestro planeta. Utilizamos envases 100% compostables, tira el envase y tapa en el contenedor orgánico'
    },
   
  ]


  swiperSlideChanged(e: any) {
    console.log('changed: ', e);
  }

  componentes: Observable<Componente[]> | undefined;

  constructor(private dataService: DataService
  ) { }


  dismissModal() {
    this.isModalOpen = false;
  }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
  }
  toggleMenu() {

  }

}

//interface Componente{
//  icon: string;
//  name: string;
//  redirectTo: string;
//}
