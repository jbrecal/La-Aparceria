import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  companies: any[] = [];
  filteredCompanies: any[] = [];
  searchTerm: string = '';
  selectedCompany: any;

  nombre: string = '';
  apellidos: string = '';
  telefono: string = '';
  password: string = '';
  confirmPassword: string = '';
  email: string = '';
  direccion: string = '';
  codigoPostal: string = '';

  constructor(private http: HttpClient, private alertController: AlertController,
    private router: Router,
  ) {}

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }

  onSubmit() {
    if (!this.nombre || !this.apellidos || !this.telefono || !this.password || !this.confirmPassword || !this.email || !this.direccion || !this.codigoPostal || !this.selectedCompany) {
      this.presentAlert('Error', 'Todos los campos son obligatorios.');
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.presentAlert('Error', 'Las contraseñas no coinciden.');
      return;
    }

    const formData = {
      company_id: this.selectedCompany,
      name: this.nombre,
      second_name: this.apellidos,
      phone: this.telefono,
      password: this.password,
      email: this.email,
      address: this.direccion,
      zip_code: this.codigoPostal,
    };

    this.http.post('http://127.0.0.1:8000/api/user/', formData)
      .subscribe(response => {
        console.log('Datos enviados con éxito', response);
        this.presentAlert('Enhorabuena', 'Usuario creado correctamente.');
        this.router.navigate(['tabs/loggin']);
      }, error => {
        console.error('Error al enviar los datos', error);
        this.presentAlert('Error', 'Este usuario ya existe en nuestra base de datos.');
      });
  }

  ngOnInit() {
    this.loadCompanies();
  }

  loadCompanies() {
    this.http.get<any[]>('assets/data/companies.json').subscribe(data => {
      this.companies = data.sort((a, b) => a.name.localeCompare(b.name));
      this.filteredCompanies = [...this.companies];
    });
  }

  filterCompanies() {
    const searchTermLower = this.searchTerm.toLowerCase();
    this.filteredCompanies = this.companies.filter(company =>
      company.name.toLowerCase().includes(searchTermLower)
    );
  }
}
