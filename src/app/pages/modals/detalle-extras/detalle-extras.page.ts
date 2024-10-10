import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-detalle-extras',
  templateUrl: './detalle-extras.page.html',
  styleUrls: ['./detalle-extras.page.scss'],
})
export class DetalleExtrasPage implements OnInit {

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

  constructor(private navParams: NavParams, private modalCtrl2: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalCtrl2.dismiss();
  }

}
