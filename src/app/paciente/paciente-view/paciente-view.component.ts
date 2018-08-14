import { Component, OnInit } from '@angular/core';
import { FormioResourceConfig, FormioResourceService, FormioResourceViewComponent } from 'angular-formio/resource';

@Component({
  selector: 'app-paciente-view',
  templateUrl: './paciente-view.component.html',
  styleUrls: ['./paciente-view.component.scss']
})
export class PacienteViewComponent extends FormioResourceViewComponent implements OnInit {

  constructor(service: FormioResourceService, config: FormioResourceConfig) {
    super(service, config);
   }

  ngOnInit() {
  }

}
