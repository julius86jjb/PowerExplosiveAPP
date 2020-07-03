import { Component, OnInit } from '@angular/core';
import { Sesion } from '../../models/sesion.model';
import { SesionesService } from '../../services/sesiones.service';
import { Router, NavigationExtras } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-entrenamientos',
  templateUrl: './entrenamientos.component.html',
  styleUrls: ['./entrenamientos.component.css']
})
export class EntrenamientosComponent implements OnInit {

  sesion: Sesion;
  cargando: boolean;
  idSesion: number;

  constructor(public sesionService: SesionesService,
              public router: Router) {

    this.idSesion = 33;
  }

  ngOnInit(): void {
    this.cargarSesion();
  }


  cargarSesion() {
    this.cargando = true;
    console.log(this.idSesion);
    this.sesionService.cargarSesion(this.idSesion)
      .subscribe((resp: any) => {
        console.log(resp);
        this.sesion = resp;
        this.cargando = false;
      });
  }

  sesionUsuarios(sesionesUsuarios) {

    const idSesionesUsuarios = [];

    sesionesUsuarios.forEach(item => {
      idSesionesUsuarios.push(item.id);
    });

    const queryParams: any = {};

    queryParams.sesionesUsuarioID = JSON.stringify(idSesionesUsuarios);
    queryParams.sesionID = this.sesion.id;

    const navigationExtras: NavigationExtras = {
      queryParams
    };

    this.router.navigate(['/sesion-usuarios/'], navigationExtras);
  }

  actualizarSesion(sesion: Sesion) {
    this.cargando = true;
    this.sesionService.actualizarSesion(sesion)
        .subscribe((resp: any) => {
          Swal.fire({
            icon: 'success',
            title: 'Sesión actualizada!',
            text: 'La sesión ha sido actualizado correctamente',
            confirmButtonText: 'Ok'
        });
          this.cargando = false;
        });
  }


}
