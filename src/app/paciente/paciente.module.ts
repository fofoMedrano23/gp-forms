import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import {
  FormioResource,
  FormioResourceConfig,
  FormioResourceRoutes,
  FormioResourceService
} from 'angular-formio/resource';
import { PacienteResourceComponent } from './paciente-resource/paciente-resource.component';
import { PacienteViewComponent } from './paciente-view/paciente-view.component';

/*inject the participant routes*/
const pacienteResourceRoutes: Routes = FormioResourceRoutes({
  view: PacienteViewComponent,
  resource: PacienteResourceComponent
});

@NgModule({
  imports: [
    CommonModule,
    FormioResource,
    RouterModule.forChild(pacienteResourceRoutes)
  ],
  declarations: [PacienteResourceComponent, PacienteViewComponent],
  providers: [
    FormioResourceService,
    {provide: FormioResourceConfig, useValue: {
      name: 'paciente',
      form: 'paciente'
    }}
  ]
})
export class PacienteModule { }
