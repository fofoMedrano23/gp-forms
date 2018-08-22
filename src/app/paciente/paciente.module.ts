import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {
  FormioResource,
  FormioResourceConfig,
  FormioResourceRoutes,
  FormioResourceService
} from 'angular-formio/resource';
import { PacienteResourceComponent } from './paciente-resource/paciente-resource.component';
import { PacienteViewComponent } from './paciente-view/paciente-view.component';
import { PacienteCreateComponent } from './paciente-create/paciente-create.component';
import { FormioModule } from 'angular-formio';

/*inject the participant routes*/
const pacienteResourceRoutes: Routes = FormioResourceRoutes({
  view: PacienteViewComponent,
  resource: PacienteResourceComponent,
  create: PacienteCreateComponent
});

@NgModule({
  imports: [
    CommonModule,
    FormioResource,
    RouterModule.forChild(pacienteResourceRoutes),
    FormioModule
  ],
  declarations: [PacienteResourceComponent, PacienteViewComponent, PacienteCreateComponent],
  providers: [
    FormioResourceService,
    {provide: FormioResourceConfig, useValue: {
      name: 'paciente',
      form: 'paciente'
    }}
  ]
})
export class PacienteModule { }
