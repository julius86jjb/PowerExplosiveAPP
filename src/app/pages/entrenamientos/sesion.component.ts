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
  idSesion = 33;


  constructor(public activatedRoute: ActivatedRoute,
              public sesionService: SesionesService) {

    activatedRoute.params.subscribe(params => {
      const id = params.id;
      this.cargarSesion(id);

    });
  }

  ngOnInit(): void {
  }

  cargarSesion(id: string) {
    this.loading = true;
    this.sesionService.cargarSesion(this.idSesion)
        .subscribe((sesion: Sesion) => {
            this.sesion = sesion;
            console.log(this.sesion);
            this.loading = false;
        });
  }

}
