import { Component, OnInit } from '@angular/core';
import { Sesion } from '../../models/sesion.model';
import { SesionesService } from '../../services/sesiones.service';
import { SesionUsuario } from '../../models/sesion-usuario.model';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-entrenamientos',
  templateUrl: './entrenamientos.component.html',
  styleUrls: ['./entrenamientos.component.css']
})
export class EntrenamientosComponent implements OnInit {

  sesion: Sesion;
  cargando: boolean;

  constructor(public sesionService: SesionesService,
              public router: Router) { }

  ngOnInit(): void {
    this.cargarSesion();
  }


  cargarSesion() {
    this.cargando = true;
    this.sesionService.cargarSesiones()
      .subscribe((resp: any) => {
        console.log(resp);
        this.sesion = resp;
        this.cargando = false;
      });
  }

  sesionUsuarios(sesionesusuarios) {
    const queryParams: any = {};

    queryParams.myArray = JSON.stringify(sesionesusuarios);

    const navigationExtras: NavigationExtras = {
      queryParams
    };

    this.router.navigate(['/sesion-usuarios/'], navigationExtras);
  }

}
