import { Component, Input, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-plato-page',
  templateUrl: './detalle-plato-page.page.html',
  styleUrls: ['./detalle-plato-page.page.scss'],
})
export class DetallePlatoPagePage implements OnInit {

  @Input() img: any;
  @Input() titulo: any;
  @Input() subtitulo: any;
  @Input() detalles: string | undefined;
  @Input() ingredientes: any;
  @Input() calorias: string | undefined;
  @Input() carbohidratos: string | undefined;
  @Input() proteina: any;
  @Input() grasas: any;
  @Input() grasas_saturadas: string | undefined;
  @Input() azucares: any;

  constructor(private navParams: NavParams, private modalCtrl: ModalController) { }

  ngOnInit() {
    //console.log('Imagen:', this.img);
    //console.log('Subtitulo: ', this.subtitulo);
    //console.log('Título:', this.titulo);
    //console.log('Detalles:', this.detalles);
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

}
