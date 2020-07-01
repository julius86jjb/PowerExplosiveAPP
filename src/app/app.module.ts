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
import { APP_ROUTES } from './app.routes';

// Rutas //

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
  ],
  imports: [
    BrowserModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
