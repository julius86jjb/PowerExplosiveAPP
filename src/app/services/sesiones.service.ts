import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SesionesService {

  constructor(public http: HttpClient) { }


  cargarSesiones() {

    const url = URL_SERVICIOS + '/sesiones/33';

    return this.http.get(url);
  }
}
