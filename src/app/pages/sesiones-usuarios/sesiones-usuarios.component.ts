import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SesionUsuario } from '../../models/sesion-usuario.model';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-sesiones-usuarios',
  templateUrl: './sesiones-usuarios.component.html',
  styleUrls: ['./sesiones-usuarios.component.css']
})
export class SesionesUsuariosComponent implements OnInit {

  sesionesUsuario: any[] = [];
  sesionesdeUsuariosFull: SesionUsuario[] = [];
  sesion: number;
  loading = true;

  constructor(private activatedRoute: ActivatedRoute,
              private usuarioService: UsuariosService) {

    this.loading = true;
    // Get the query string value from our route
    const myArray = this.activatedRoute.snapshot.queryParamMap.get('myArray');

    if (myArray === null) {
      this.sesionesUsuario = new Array<any>();
      this.loading = false;
    } else {
      this.sesionesUsuario = JSON.parse(myArray);
      this.sesion = this.sesionesUsuario[0].sesion;
      console.log(this.sesionesUsuario);
      this.loading = false;
    }
  }



  ngOnInit(): void {

  }

  mostrarUsuario(id: number) {
    // this.usuarioService.mostrarUsuario;
  }

}
