import { SesionUsuario } from './sesion-usuario.model';
import { Entrenador } from './entrenador.model';

export class Sesion {

    constructor(
        public id: number,
        public fechaInicio: string,
        public fechaFin: Date,
        public actividad: string,
        public entrenador: Entrenador,
        public created_at: Date,
        public updated_at: Date,
        public sesion_usuarios: SesionUsuario[]
) { }
}
