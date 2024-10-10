import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MenuSemana, cubierto } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { DetallePlatoPagePage } from '../modals/detalle-plato-page/detalle-plato-page.page';
import { DetalleExtrasPage } from '../modals/detalle-extras/detalle-extras.page';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
  selectedDay: string = 'lunes';
  selectedMenu: string = 'medio-menu';
  currentStep: number = 0;
  selectedSegment: string = 'primeroCompleto';
  selectedSegment2: string = 'primeroMedio';

  primero: Observable<MenuSemana[]> | undefined;
  segundo: Observable<MenuSemana[]> | undefined;
  postre: Observable<MenuSemana[]> | undefined;
  extra: Observable<MenuSemana[]> | undefined;
  menu: Observable<MenuSemana[]> | undefined;

  constructor(
    private modalCtrl: ModalController,
    private dataService: DataService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    
    this.menu = this.dataService.getMenuSemanal();
    this.postre = this.dataService.getPostres();
    this.extra = this.dataService.getExtras();
    this.primero = this.dataService.getPrimerPlato();
    this.segundo = this.dataService.getSegundoPlato();
  }

  loadData() {
    if (this.selectedMenu === 'medio-menu') {
      this.menu = this.dataService.getMenuSemanal();
      this.postre = this.dataService.getPostres();
      this.extra = this.dataService.getExtras();
 
    } else if (this.selectedMenu === 'menu-completo') {
      this.primero = this.dataService.getPrimerPlato();
      this.segundo = this.dataService.getSegundoPlato();
      this.postre = this.dataService.getPostres();
      this.extra = this.dataService.getExtras();
    }
  }

  updateFabClickCount(menu: MenuSemana, action: string): void {
    if (action === 'add') {
      if (menu.clickCount >= 1) return; 
      menu.clickCount++;
      this.dataService.addSelectedPlato(menu);

      // Actualizar el segmento automáticamente después de añadir un plato
      if (this.selectedMenu === 'medio-menu') {
        switch (this.currentStep) {
          case 0: this.selectedSegment2 = 'postreMedio'; break;
          case 1: this.selectedSegment2 = 'extraMedio'; break;
          default: break;
        }
      } else if (this.selectedMenu === 'menu-completo') {
        switch (this.currentStep) {
          case 0: this.selectedSegment = 'segundoCompleto'; break;
          case 1: this.selectedSegment = 'postreCompleto'; break;
          case 2: this.selectedSegment = 'extraCompleto'; break;
          default: break;
        }
      }

      if (this.selectedMenu === 'medio-menu' && this.currentStep < 4) {
        this.currentStep++;
      } else if (this.selectedMenu === 'menu-completo' && this.currentStep < 5) {
        this.currentStep++;
      }
    } else if (action === 'remove' && menu.clickCount > 0) {
      menu.clickCount--;
      this.dataService.updatePlatoClickCount(menu, menu.clickCount);
      if (menu.clickCount === 0) {
        this.dataService.removeSelectedPlato(menu);
      }
    }
  }

  menuChanged() {
 
    this.selectedSegment = 'primeroCompleto';
    this.selectedSegment2 = 'primeroMedio';
    
  }

  segmentChanged(event: any) {
    this.selectedSegment = event.detail.value;
    this.cdr.detectChanges();
  }

  async modalCubiertos(plato: cubierto) {
    const modal = await this.modalCtrl.create({
      component: DetalleExtrasPage,
      componentProps: {
        'img': plato.img,
        'titulo': plato.titulo,
        'subtitulo': plato.subtitulo,
        'descripcion': plato.descripcion,
        'detalles': plato.detalles
      }
    });
    await modal.present();
  }

  async abrirModal(plato: MenuSemana) {
    const modal = await this.modalCtrl.create({
      component: DetallePlatoPagePage,
      componentProps: {
        'img': plato.img,
        'titulo': plato.titulo,
        'subtitulo': plato.subtitulo,
        'ingredientes': plato.ingredientes,
        'detalles': plato.detalles,
        'calorias': plato.calorias,
        'carbohidratos': plato.carbohidratos,
        'proteina': plato.proteina,
        'grasas': plato.grasas,
        'grasas_saturadas': plato.grasas_saturadas,
        'azucares': plato.azucares,
        'clickCount': plato.clickCount
      }
    });

    await modal.present();
  }
}
