import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Componentes //

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { EntrenamientosComponent } from './pages/entrenamientos/entrenamientos.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';


// Rutas //

import { APP_ROUTES } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { SesionesUsuariosComponent } from './pages/sesiones-usuarios/sesiones-usuarios.component';
import { UsuarioComponent } from './pages/usuarios/usuario.component';



@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
    HomeComponent,
    UsuariosComponent,
    EntrenamientosComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    SesionesUsuariosComponent,
    UsuarioComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
