import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];
  desde = 0;
  cargando = true;

  constructor(
      public usuarioService: UsuariosService
  ) { }

  ngOnInit(): void {
    this.usuarios = [];
    this.cargarUsuarios();
    // this.cargarEntrenadores();
  }

  cargarUsuarios() {
    this.cargando = true;
    this.usuarioService.cargarUsuarios()
      .subscribe((usuarios: any) => {
          this.usuarios = usuarios;
          this.cargando = false;
          console.log(this.usuarios);
      });

  }

  // cargarEntrenadores() {
  //   this.cargando = true;
  //   this.usuarioService.cargarEntrenadores()
  //     .subscribe((entrenadores: any) => {
  //         console.log(entrenadores);
  //         this.usuarios.push(entrenadores);
  //         this.cargando = false;
  //         console.log(this.usuarios);
  //     });

  // }

  cambiarDesde(valor: number) {
      const desde = this.desde + valor;

      if (desde >= this.usuarios.length) {
        return;
      }

      if (desde < 0){
        return;
      }

      this.desde += valor;
      this.cargarUsuarios();


  }



}
