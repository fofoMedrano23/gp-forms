import { Component, OnInit } from '@angular/core';
import { FormioAuthService } from 'angular-formio/auth';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private auth: FormioAuthService) { }

  ngOnInit() {
  }

}
