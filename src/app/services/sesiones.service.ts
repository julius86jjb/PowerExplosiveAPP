import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';
import { HttpClient } from '@angular/common/http';
import { SesionUsuario } from '../models/sesion-usuario.model';
import { map } from 'rxjs/internal/operators/map';
import { Sesion } from '../models/sesion.model';

@Injectable({
  providedIn: 'root'
})
export class SesionesService {

  constructor(public http: HttpClient) { }


  cargarSesion(id) {

    const url = URL_SERVICIOS + '/sesiones/' + id;

    return this.http.get(url);
  }

  actualizarSesion(sesion: Sesion) {
    const url = URL_SERVICIOS + '/sesiones/' + sesion.id;

    return this.http.put(url, sesion);
  }

  cargarSesionUsuarios(id: number) {
    const url = URL_SERVICIOS + '/sesion-usuarios/' + id;
    return this.http.get(url);
  }

  actualizarSesionUsuarios(sesionUsuario: SesionUsuario) {
    const url = URL_SERVICIOS + '/sesion-usuarios/' + sesionUsuario.id;
    return this.http.put(url, sesionUsuario);
  }

  cargarConfirmados(id) {
    const url = URL_SERVICIOS + '/sesiones/' + id;

    return this.http.get(url)
      .pipe(
          map((sesion: Sesion) => sesion.sesion_usuarios),
          map(sesion_usuarios => sesion_usuarios.filter(session_usuario => session_usuario.confirmado === true)),
          map(sesion_usuarios => {
              return sesion_usuarios.length;
          })
      );
  }
}
