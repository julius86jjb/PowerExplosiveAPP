import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../../models/usuario.model';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario: Usuario;
  loading = true;

  constructor(public activatedRoute: ActivatedRoute,
              public usuarioService: UsuariosService
    ) {
    activatedRoute.params.subscribe(params => {
      const id = params.id;
      this.cargarUsuario(id);

  });
   }

  ngOnInit(): void {
  }


  cargarUsuario(id: string) {
    this.loading = true;
    this.usuarioService.cargarUsuario(id)
        .subscribe((usuario: Usuario) => {
            this.usuario = usuario;
            console.log(this.usuario);
            this.loading = false;
        });
}

}
