import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MenuSemana } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  selectedPlatos: MenuSemana[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getSelectedPlatos().subscribe(platos => {
      this.selectedPlatos = platos;
    });
  }

  calculateTotal(): number {
    return this.selectedPlatos.reduce((total, plato) => total + (plato.clickCount || 0), 0);
  }

  editPlato(index: number) {
    const plato = this.selectedPlatos[index];
  }

  deletePlato(index: number) {
    const plato = this.selectedPlatos[index];
    if (plato.clickCount > 1) {
      this.dataService.updatePlatoClickCount(plato, plato.clickCount - 1);
    } else {
      this.dataService.deleteSelectedPlato(index);
    }
  }
}
