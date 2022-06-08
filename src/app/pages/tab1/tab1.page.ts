import { IonicModule } from '@ionic/angular';
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable prefer-const */
import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Suceso, Datos } from './../../interfaces/mis-interfaces';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GestionListaService } from '../../services/gestion-sucesos-leer.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  apiUrl: string = environment.apiUrl;
  listaSucesos: Suceso[] = [];
  // Datos de ejemplo. Si no se usa, inicializarlo sin datos.
  // datosSuceso: Suceso[] = [];
  /*
    "id": 12,
    "email": "rachel.howell@reqres.in",
    "first_name": "Rachel",
    "last_name": "Howell",
    "avatar": "https://reqres.in/img/faces/12-image.jpg"*/

  constructor(private obtenerDatos: HttpClient, public gestionLista: GestionListaService) {
    this.consultaRest();
  }
  ngOnInit() { }
  // Realiza una consulta REST con un índice aleatorio
  private consultaRest(): void {
    let respuesta: Observable<Datos> =
      this.obtenerDatos.get<Datos>(this.apiUrl + this.generaIndice());
    respuesta.subscribe(resp => {

      this.listaSucesos.push(resp.data);
      //this.listaFiltrada= this.listaSucesos.filter((id=>resp.data.id =  this.generaIndice() ));
      // console.log(this.listaSucesos);
    });

    //console.log(this.listaSucesos);
  }

  // Genera un índice aleatorio entre 1 y 12
  private generaIndice(): number {
    return Math.floor(Math.random() * 12) + 1;
  }

  // Añade el suceso actual al array del servicio gestion-lista
  public add(item: Suceso): void {
    this.gestionLista.addSuceso(item)
  }

  // Realiza una nueva consulta REST y obtiene los datos de un nuevo suceso
  public nuevo(): void {
    // this.consultaRest();
    window.location.assign('/');
  }
}
