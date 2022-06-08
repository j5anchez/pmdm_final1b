import { Datos, Suceso } from './../../interfaces/mis-interfaces';
// import { GestionListaService } from '../../services/gestion-sucesos-leer.service';
import { GestionListaService } from '../../services/gestion-sucesos-leer.service';
import { Component, Input, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Data } from '@angular/router';

@Component({
  selector: 'app-suceso',
  templateUrl: './suceso.component.html',
  styleUrls: ['./suceso.component.scss'],
})
export class SucesoComponent implements OnInit {
  @Input() suceso: Suceso;

  constructor(private gestionLista: GestionListaService, private alertController: AlertController) { }

  ngOnInit() { }

  public onClick() {
    this.confirmarBorrar();

  }

  async confirmarBorrar() {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: 'Borrar suceso?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Okay',
          handler: () => {
            this.gestionLista.getLista();
          }
        }
      ]
    });

    await alert.present();
  }

}
