import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormioResourceService } from 'angular-formio/resource';
import { FormioResourceConfig } from 'angular-formio/resource';

@Component({
  selector: 'app-paciente-edit',
  templateUrl: './paciente-edit.component.html',
  styleUrls: ['./paciente-edit.component.scss']
})
export class PacienteEditComponent implements OnInit {

  constructor(
    public service: FormioResourceService,
    public route: ActivatedRoute,
    public router: Router,
    public config: FormioResourceConfig) { }

  ngOnInit() {
  }

  onSubmit(submission: any) {
    const edit = this.service.resource;
    edit.data = submission.data;
    this.service.save(edit).then(() => {
      this.router.navigate(['../', 'view'], { relativeTo: this.route });
    });
  }
}
