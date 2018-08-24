import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario-labin',
  templateUrl: './formulario-labin.component.html',
  styleUrls: ['./formulario-labin.component.scss']
})
export class FormularioLabinComponent implements OnInit {


  constructor(public router: Router, public route: ActivatedRoute) {
    }

    ngOnInit() {
    }

    onSubmit(submission: any) {
          this.router.navigate(['../../reportes/reporte-labin'], {
            relativeTo: this.route
          });
        }
    }






