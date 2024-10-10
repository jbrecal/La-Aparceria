import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http'; // Importa el módulo HttpClient

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {

  public alertButtons = ['Ok'];
  public alertInputs = [
    {
      placeholder: 'Email',
      type: 'email',
      name: 'email'
    },
  ];

  username: string = '';
  password: string = '';

  constructor(
    private router: Router, 
    private alertController: AlertController,
    private toastController: ToastController,
    private http: HttpClient 
  ) { }

  async toastUserPass(p0: string) {
    const toast = await this.toastController.create({
      message: 'Bienvenido',
      duration: 3000,
    });

    await toast.present();
  }

  async showAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  login() {
    if (!this.username || !this.password) {
      this.showAlert('Todos los campos son requeridos.');
      return;
    }

    // Realiza solicitud POST a Laravel
    this.http.post<any>('http://127.0.0.1:8000/api/auth/login', { email: this.username, password: this.password })
      .subscribe(
        response => {
          // Almacenar el token JWT en el almacenamiento local
          localStorage.setItem('token', response.token);
          // Redirigir a la página de inicio 
          this.router.navigate(['tabs/home']);
          console.log('Sesion iniciada:');
          this.toastUserPass('Bienvenido');

        },
        error => {
          console.error('Error al iniciar sesión:', error);
          this.showAlert('Usuario o contraseña incorrectos');
        }
      );
  }

  logout() {
    // Eliminar el token JWT del almacenamiento local
    localStorage.removeItem('token');
    // Redirigir a la página de log-in
    this.router.navigate(['/log-in']);
  }

  ngOnInit() { }
}
