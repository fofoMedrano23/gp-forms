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
import { PacienteEditComponent } from './paciente-edit/paciente-edit.component';
import { PacienteComponent } from './paciente/paciente.component';
import { FormioGrid } from 'angular-formio/grid';
import { WavesModule, ButtonsModule} from 'ng-uikit-pro-standard';
/*inject the participant routes*/
const pacienteResourceRoutes: Routes = FormioResourceRoutes({
  view: PacienteViewComponent,
  resource: PacienteResourceComponent,
  create: PacienteCreateComponent,
  edit: PacienteEditComponent,
  index: PacienteComponent
});

@NgModule({
  imports: [
    CommonModule,
    FormioResource,
    RouterModule.forChild(pacienteResourceRoutes),
    FormioModule,
    FormioGrid,
    WavesModule,
    ButtonsModule

  ],
  declarations: [PacienteResourceComponent, PacienteViewComponent, PacienteCreateComponent, PacienteEditComponent, PacienteComponent],
  providers: [
    FormioResourceService,
    {provide: FormioResourceConfig, useValue: {
      name: 'paciente',
      form: 'paciente'
    }}
  ]
})
export class PacienteModule { }
