import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SesionUsuario } from '../../models/sesion-usuario.model';
import { UsuariosService } from '../../services/usuarios.service';
import { SesionesService } from '../../services/sesiones.service';

@Component({
  selector: 'app-sesiones-usuarios',
  templateUrl: './sesiones-usuarios.component.html',
  styleUrls: ['./sesiones-usuarios.component.css']
})
export class SesionesUsuariosComponent implements OnInit {

  sesionesUsuario: SesionUsuario[] = [];
  sesion: number;
  loading = true;

  constructor(private activatedRoute: ActivatedRoute,
              private usuarioService: UsuariosService,
              private sesionesService: SesionesService) {

    this.cargarSesionUsuarios();
  }



  ngOnInit(): void {

  }

  cargarSesionUsuarios() {
    this.sesionesUsuario = [];
    this.loading = true;

    const idSesionesUsuarios = this.activatedRoute.snapshot.queryParamMap.get('sesionesUsuarioID');
    this.sesion = +this.activatedRoute.snapshot.queryParamMap.get('sesionID');

    if (idSesionesUsuarios === null) {

      this.sesionesUsuario = new Array<any>();
      this.loading = false;

    } else {

      const arrayIDSesiones = JSON.parse(idSesionesUsuarios);

      arrayIDSesiones.forEach(item => {
        this.sesionesService.cargarSesionUsuarios(item)
          .subscribe((sesionUsuario: SesionUsuario) => {
            this.sesionesUsuario.push(sesionUsuario);
          });

      });
      this.loading = false;
    }
  }


  mostrarUsuario(id: number) {
    // this.usuarioService.mostrarUsuario;
  }

  guardarSesionUsuarios(sessionUsuarios: SesionUsuario) {
    console.log(sessionUsuarios);
    this.sesionesService.actualizarSesionUsuarios(sessionUsuarios)
      .subscribe( (sesionUsuarios: SesionUsuario) => {
        this.updateSesionUsuarios(sesionUsuarios);
        this.cargarSesionUsuarios();

      });
  }


  updateSesionUsuarios(sessionUsuarios: SesionUsuario){
    const sesionUsuarioActualizada = this.sesionesUsuario.find(this.findIndexToUpdate, sessionUsuarios.id);

    const index = this.sesionesUsuario.indexOf(sesionUsuarioActualizada);
    this.sesionesUsuario[index] = sessionUsuarios;

  }

  findIndexToUpdate(sesion_usuario) {
        return sesion_usuario.id === this;
  }


}
