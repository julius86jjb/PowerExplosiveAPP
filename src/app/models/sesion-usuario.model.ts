import { Sesion } from './sesion.model';
import { Usuario } from './usuario.model';

export class SesionUsuario {

    constructor(
        public id: number,
        public sesion: Sesion,
        public confirmado: boolean,
        public usuario: Usuario,
        public created_at: Date,
        public updated_at: Date

) { }
}
