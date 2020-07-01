import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { EntrenamientosComponent } from './pages/entrenamientos/entrenamientos.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';


const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'sesiones', component: EntrenamientosComponent},
    {path: 'usuarios', component: UsuariosComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', component: NopagefoundComponent}


];


export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true});
