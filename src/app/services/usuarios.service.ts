import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';
import { HttpClient } from '@angular/common/http';
import { catchError, map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(public http: HttpClient) { }

  cargarUsuarios() {

    const url = URL_SERVICIOS + '/usuarios';

    return this.http.get(url);
  }

  cargarEntrenadores() {
    const url = URL_SERVICIOS + '/sesiones/33';

    return this.http.get(url)
      .pipe(
          map( (resp: any) => resp.entrenador)
        );
  }
}

