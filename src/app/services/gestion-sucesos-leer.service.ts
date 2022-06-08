import { GestionStorageService } from './gestion-storage.service';
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable prefer-const */
import { Suceso } from '../interfaces/mis-interfaces';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionListaService {

  private listaSucesos: Suceso[] = [];

  constructor(private gestionStorage: GestionStorageService) {  let datosPromesa: Promise<Suceso[]> = gestionStorage.getObject('listaSucesos');
  datosPromesa.then(datos => {
    if (datos) {
      this.listaSucesos.push(...datos);
      // this.sucesosLeer.push(this.dis);
    }
  });}


  public buscar(item: Suceso): number {
    let indice: number = this.listaSucesos.findIndex(
      function(cadaArticulo) {
        return JSON.stringify(cadaArticulo) === JSON.stringify(item);
      }
    );
    return indice;
  }
  // Comprueba que el suceso no está en el array y lo añade
  // Si está en el array, muestra un aviso en una alerta
  public addSuceso(suceso: Suceso) {
    // let itemString = JSON.stringify(suceso);
    // suceso = JSON.parse(itemString);

    if (this.buscar(suceso)!=-1) {
      alert("suceso en la lista");
    }else{
      this.listaSucesos.push(this.copiarSuceso(suceso));
      console.log(this.listaSucesos);
      this.gestionStorage.setObject('listaSucesos', this.listaSucesos);
    }
    //this.gestionStorage.setObject('sucesosLeer', this.sucesosLeer);  }
  }
  // Hace una copia de un objeto de la clase Suceso
  private copiarSuceso(suceso: Suceso): Suceso {
    let sucesoString: string = JSON.stringify(suceso);
    let nuevoSuceso: Suceso = JSON.parse(sucesoString);
    return nuevoSuceso;
  }

  public getLista(): Suceso[] {
    return this.listaSucesos;
  }

}
