import { Component, OnInit } from '@angular/core';

/*add*/
import { ActivatedRoute } from '@angular/router';
import { FormioResourceService, FormioResourceComponent } from 'angular-formio/resource';

@Component({
  selector: 'app-paciente-resource',
  templateUrl: './paciente-resource.component.html',
  styleUrls: ['./paciente-resource.component.scss']
})
export class PacienteResourceComponent  extends FormioResourceComponent implements OnInit {

  constructor(public service: FormioResourceService, public route: ActivatedRoute) {
    super(service, route);
   }

  ngOnInit() {
    super.ngOnInit();
  }

}
