import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {

  componentes: Observable<Componente[]> | undefined;
  

  constructor(private dataService: DataService, private router: Router,
    private menu: MenuController
  ) { }

  cerrarSesion() {
    
    
    
  }
  abrirSesion(){
    this.router.navigate(['/tabs/loggin']);
    this.menu.close();
  }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
  }
  logout() {
    // Eliminar el token JWT del almacenamiento local
    localStorage.removeItem('token');
    // Redirigir a la página de log-in
    this.router.navigate(['/log-in']);
    this.menu.close();
  }

}
