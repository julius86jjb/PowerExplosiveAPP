import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';
import { HttpClient } from '@angular/common/http';
import { SesionUsuario } from '../models/sesion-usuario.model';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class SesionesService {

  constructor(public http: HttpClient) { }


  cargarSesion(id) {

    const url = URL_SERVICIOS + '/sesiones/' + id;

    return this.http.get(url);
  }

  cargarSesionUsuarios(id: number) {
    const url = URL_SERVICIOS + '/sesion-usuarios/' + id;
    return this.http.get(url);
  }

  actualizarSesionUsuarios(sesionUsuario: SesionUsuario) {
    const url = URL_SERVICIOS + '/sesion-usuarios/' + sesionUsuario.id;
    return this.http.put(url, sesionUsuario);
  }
}
