import { Suceso } from '../../interfaces/mis-interfaces';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sucesos',
  templateUrl: './sucesos.component.html',
  styleUrls: ['./sucesos.component.scss'],
})
export class SucesosComponent implements OnInit {
  @Input() listaSucesos: Suceso[];
  // @Input() dis = {} as incidencias;
  constructor() { }

  ngOnInit() { }

}
