import { Component, OnInit } from '@angular/core';
import { Sesion } from 'src/app/models/sesion.model';
import { SesionesService } from '../../services/sesiones.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent implements OnInit {

  sesion: Sesion;
  loading = true;
  idSesion: number;
  totalConfirmados = 0;


  constructor(public activatedRoute: ActivatedRoute,
              public sesionService: SesionesService) {

    activatedRoute.params.subscribe(params => {
      this.idSesion = params.id;
      this.cargarSesion();

    });
  }

  ngOnInit(): void {
  }

  cargarSesion() {
    this.loading = true;
    this.sesionService.cargarSesion(this.idSesion)
        .subscribe((sesion: Sesion) => {
            this.sesion = sesion;
            this.cargarConfirmados();
            this.loading = false;
        });
  }

  cargarConfirmados() {
    this.loading = true;
    this.sesionService.cargarConfirmados(this.idSesion)
        .subscribe((confirmados: number) => {
          console.log(confirmados);
          this.totalConfirmados = confirmados;
          this.loading = false;
        });
  }

}
