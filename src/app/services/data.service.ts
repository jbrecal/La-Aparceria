import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Componente } from '../interfaces/interfaces';
import { MenuSemana } from '../interfaces/interfaces';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private selectedPlatos: MenuSemana[] = [];
  private selectedPlatosSubject = new BehaviorSubject<MenuSemana[]>(this.selectedPlatos);
  private dataUrl: string = 'assets/data/companies.json';

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<any[]> {
    return this.http.get<any[]>(this.dataUrl);
  }
  
  getMenuOpts() {
    return this.http.get<Componente[]>('assets/data/menu.json');
  }

  getMenuSemanal(): Observable<MenuSemana[]> {
    return this.http.get<MenuSemana[]>('assets/data/menuSemanal.json');
  }

  getExtras(): Observable<MenuSemana[]> {
    return this.http.get<MenuSemana[]>('assets/data/extra.json');
  }

  getPostres(): Observable<MenuSemana[]> {
    return this.http.get<MenuSemana[]>('assets/data/postres.json');
  }
  getPrimerPlato(): Observable<MenuSemana[]> {
    return this.http.get<MenuSemana[]>('assets/data/primerPlato.json');
  }
  getSegundoPlato(): Observable<MenuSemana[]> {
    return this.http.get<MenuSemana[]>('assets/data/segundoPlato.json');
  }


  getSelectedPlatos(): Observable<MenuSemana[]> {
    return this.selectedPlatosSubject.asObservable();
  }

  addSelectedPlato(plato: MenuSemana) {
    const index = this.selectedPlatos.findIndex((item: MenuSemana) => item.titulo === plato.titulo);
    if (index === -1) {
      this.selectedPlatos.push(plato);
    } else {
      this.selectedPlatos[index].clickCount = plato.clickCount;
    }
    this.selectedPlatosSubject.next(this.selectedPlatos);
  }

  removeSelectedPlato(plato: MenuSemana) {
    const index = this.selectedPlatos.findIndex((item: MenuSemana) => item.titulo === plato.titulo);
    if (index > -1) {
      this.selectedPlatos.splice(index, 1);
      this.selectedPlatosSubject.next(this.selectedPlatos);
    }
  }

  updatePlatoClickCount(plato: MenuSemana, count: number) {
    const index = this.selectedPlatos.findIndex((item: MenuSemana) => item.titulo === plato.titulo);
    if (index > -1) {
      this.selectedPlatos[index].clickCount = count;
      if (count <= 0) {
        this.selectedPlatos.splice(index, 1);
      }
      this.selectedPlatosSubject.next(this.selectedPlatos);
    }
  }

  deleteSelectedPlato(index: number) {
    if (index >= 0 && index < this.selectedPlatos.length) {
      this.selectedPlatos.splice(index, 1);
      this.selectedPlatosSubject.next(this.selectedPlatos);
    }
  }
  
}
