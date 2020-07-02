import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { EntrenamientosComponent } from './pages/entrenamientos/entrenamientos.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { SesionesUsuariosComponent } from './pages/sesiones-usuarios/sesiones-usuarios.component';
import { UsuarioComponent } from './pages/usuarios/usuario.component';
import { SesionComponent } from './pages/entrenamientos/sesion.component';


const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'sesiones', component: EntrenamientosComponent},
    {path: 'sesion/:id', component: SesionComponent},
    {path: 'usuarios', component: UsuariosComponent},
    {path: 'usuario/:id', component: UsuarioComponent},
    {path: 'sesion-usuarios', component: SesionesUsuariosComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', component: NopagefoundComponent}


];


export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true});
