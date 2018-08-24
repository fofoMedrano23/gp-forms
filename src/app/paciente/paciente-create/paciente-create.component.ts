import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormioResourceService } from 'angular-formio/resource';
import { FormioResourceConfig } from 'angular-formio/resource';

@Component({
  selector: 'app-paciente-create',
  templateUrl: './paciente-create.component.html',
  styleUrls: ['./paciente-create.component.scss']
})
export class PacienteCreateComponent implements OnInit {
  public onError: EventEmitter<any>;
  public onSuccess: EventEmitter<any>;

  constructor(
    public service: FormioResourceService,
    public route: ActivatedRoute,
    public router: Router,
    public config: FormioResourceConfig
  ) {
    this.onError = new EventEmitter();
    this.onSuccess = new EventEmitter();
  }


  ngOnInit() {
    // Start with fresh data.
    this.service.initialize();
  }

  onSubmit(submission: any) {
    this.service
      .save(submission)
      .then(() => {
        this.router.navigate(['../', this.service.resource._id, 'view'], {
          relativeTo: this.route
        });
      })
      .catch((err: any) => this.onError.emit(err));
  }

}
