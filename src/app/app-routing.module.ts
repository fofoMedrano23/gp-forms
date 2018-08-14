import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormioAppConfig } from 'angular-formio';
import { FormioAuthService, FormioAuthConfig } from 'angular-formio/auth';
import { AuthConfig, AppConfig } from '../config';
import { AuthModule } from './auth/auth.module';
import {AuthGuard} from './auth/auth.guard';
import { FormulariosComponent } from './formularios/formularios.component';
import { FormularioLabinComponent } from './formularios/formulario-labin/formulario-labin.component';
import {PacienteModule} from './paciente/paciente.module';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'auth',
    loadChildren: () => AuthModule
  },
  {
    path: 'formularios',
    component: FormulariosComponent, canActivate: [AuthGuard]
  },
  {
    path: 'formularios/formulario-labin',
    component: FormularioLabinComponent, canActivate: [AuthGuard]
  }, {
    path: 'paciente',
    loadChildren: () => PacienteModule, canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, FormioAuthService,
    {provide: FormioAuthConfig, useValue: AuthConfig},
    {provide: FormioAppConfig, useValue: AppConfig}]
})
export class AppRoutingModule { }
