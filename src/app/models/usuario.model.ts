import { Sesion } from './sesion.model';
import { SesionUsuario } from './sesion-usuario.model';
export class Usuario {

    constructor(
        public id: string,
        public nombre: string,
        public created_at: Date,
        public updated_at: Date,
        public sesiones: Sesion[],
        public sesionUsuarios: SesionUsuario[]
) { }
}
